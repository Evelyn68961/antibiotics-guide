// Fetches official reference text for one drug so its Notion entry can be
// checked against it. Writes verification/sources/<drug>.json.
//
// Sources:
//   - DailyMed (US FDA label): newest SPL for the generic name, split into
//     numbered label sections (1 Indications, 2 Dosage, 8.1 Pregnancy, ...)
//   - UK eMC SmPC: the first SmPC listed for the name, split into sections
//     (4.2 Posology, 4.5 Interactions, 4.6 Pregnancy/lactation, ...)
//   - LactMed: the correct NCBI Bookshelf ID for the drug (the page itself
//     sits behind a CAPTCHA, so only the ID and link are collected)
//
// Usage: npm run fetch-sources -- meropenem

import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '..', 'verification', 'sources')
const UA = { 'User-Agent': 'Mozilla/5.0 (antibiotics-guide verifier)' }

const drug = process.argv[2]?.toLowerCase()
if (!drug) {
  console.error('Usage: node scripts/fetch-label-sources.mjs <generic name>')
  process.exit(1)
}

// ------- Helpers -------

async function get(url, as = 'text') {
  const res = await fetch(url, { headers: UA })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return as === 'json' ? res.json() : res.text()
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/\s+/g, ' ')
    .trim()
}

// Cuts text into sections at each heading, e.g. "4.2 Posology" → next heading.
function splitSections(text, headings) {
  const sections = {}
  const found = headings
    .map((h) => ({ h, i: text.indexOf(h) }))
    .filter((x) => x.i >= 0)
    .sort((a, b) => a.i - b.i)
  found.forEach(({ h, i }, k) => {
    const end = k + 1 < found.length ? found[k + 1].i : i + 8000
    sections[h] = text.slice(i, end).trim()
  })
  return sections
}

// ------- DailyMed (US FDA label) -------

const FDA_HEADINGS = [
  '1 INDICATIONS AND USAGE',
  '2 DOSAGE AND ADMINISTRATION',
  '4 CONTRAINDICATIONS',
  '5 WARNINGS AND PRECAUTIONS',
  '6 ADVERSE REACTIONS',
  '7 DRUG INTERACTIONS',
  '8.1 Pregnancy',
  '8.2 Lactation',
  '8.4 Pediatric Use',
  '8.6 Renal',
  '10 OVERDOSAGE',
  '11 DESCRIPTION',
  '12.3 Pharmacokinetics',
  '12.4 Microbiology',
  '16 HOW SUPPLIED',
]

async function fetchDailyMed() {
  const list = await get(
    `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=${encodeURIComponent(drug)}&pagesize=100`,
    'json',
  )
  if (!list.data?.length) return null
  // Newest published label is the most likely to reflect current labeling.
  const newest = list.data.sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date),
  )[0]
  const xml = await get(
    `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${newest.setid}.xml`,
  )
  // Skip the highlights box so sections start at the full prescribing info.
  const text = htmlToText(xml)
  const fullStart = text.indexOf('FULL PRESCRIBING INFORMATION')
  return {
    source: 'DailyMed (US FDA label)',
    title: newest.title,
    setid: newest.setid,
    version: newest.spl_version,
    published: newest.published_date,
    url: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${newest.setid}`,
    sections: splitSections(
      fullStart >= 0 ? text.slice(fullStart) : text,
      FDA_HEADINGS,
    ),
  }
}

// ------- UK eMC SmPC -------

const SMPC_HEADINGS = [
  '4.1 Therapeutic indications',
  '4.2 Posology and method of administration',
  '4.3 Contraindications',
  '4.4 Special warnings',
  '4.5 Interaction',
  '4.6 Pregnancy and lactation',
  '4.6 Fertility, pregnancy and lactation',
  '4.7 Effects on ability',
  '4.8 Undesirable effects',
  '5.1 Pharmacodynamic properties',
  '5.2 Pharmacokinetic properties',
  '6.3 Shelf life',
  '10. Date of revision',
]

async function fetchSmpc() {
  const search = await get(
    `https://www.medicines.org.uk/emc/search?q=${encodeURIComponent(drug)}`,
  )
  const id = search.match(/\/emc\/product\/(\d+)\/smpc/)?.[1]
  if (!id) return null
  const url = `https://www.medicines.org.uk/emc/product/${id}/smpc`
  const text = htmlToText(await get(url))
  const name = text.match(/1\. Name of the medicinal product (.{0,120}?) 2\./)?.[1]
  const revised = text.match(/10\. Date of revision of the text (\S+)/)?.[1]
  return {
    source: 'UK eMC SmPC',
    title: name ?? null,
    revised: revised ?? null,
    url,
    sections: splitSections(text, SMPC_HEADINGS),
  }
}

// ------- LactMed (ID lookup via NCBI E-utilities) -------

async function fetchLactMed() {
  const term = `${drug}[title] AND lactmed[book]`
  const search = await get(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=books&retmode=json&term=${encodeURIComponent(term)}`,
    'json',
  )
  const uids = search.esearchresult?.idlist ?? []
  if (!uids.length) return null
  const summary = await get(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=books&retmode=json&id=${uids.join(',')}`,
    'json',
  )
  // Keep the whole-chapter record (not its sub-sections).
  const chapter = uids
    .map((u) => summary.result[u])
    .find((r) => r.rtype === 'chapter' && r.title.toLowerCase() === drug)
  if (!chapter) return null
  return {
    source: 'LactMed (NIH)',
    title: chapter.title,
    accession: chapter.accessionid,
    url: `https://www.ncbi.nlm.nih.gov/books/${chapter.accessionid}/`,
    note: 'Page text not fetched: NCBI Bookshelf serves a CAPTCHA to scripts.',
  }
}

// ------- Main -------

const results = {}
for (const [key, fn] of Object.entries({
  dailymed: fetchDailyMed,
  smpc: fetchSmpc,
  lactmed: fetchLactMed,
})) {
  try {
    results[key] = await fn()
    console.log(`${key}: ${results[key] ? 'ok' : 'not found'}`)
  } catch (err) {
    results[key] = { error: err.message }
    console.log(`${key}: failed (${err.message})`)
  }
}

mkdirSync(OUT_DIR, { recursive: true })
const outPath = resolve(OUT_DIR, `${drug}.json`)
writeFileSync(
  outPath,
  JSON.stringify({ drug, fetched: new Date().toISOString(), ...results }, null, 2),
)
console.log(`Wrote ${outPath}`)
