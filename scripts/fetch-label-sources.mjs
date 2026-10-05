// Fetches official reference text for one drug so its Notion entry can be
// checked against it. Writes verification/sources/<drug>.json.
//
// Sources:
//   - DailyMed (US FDA label): newest SPL for the generic name, split into
//     numbered label sections (1 Indications, 2 Dosage, 8.1 Pregnancy, ...),
//     or by section title for older labels without numbered headings
//   - UK eMC SmPC: the first SmPC listed for the name (or for an optional
//     second argument, e.g. a UK brand name), split into sections
//     (4.2 Posology, 4.5 Interactions, 4.6 Pregnancy/lactation, ...)
//   - LactMed: the drug's chapter, read from NIH's bulk download (the web
//     pages sit behind a CAPTCHA). The ~210 MB archive is downloaded once
//     into .cache/lactmed and reused.
//
// Usage: npm run fetch-sources -- meropenem
//        npm run fetch-sources -- colistimethate colomycin
//        npm run fetch-sources -- "imipenem and cilastatin" imipenem --exclude=relebactam
//
// --exclude=<word> skips US labels and UK SmPCs whose title contains the word
// (e.g. a combination product that shares the generic name).

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, '..', 'verification', 'sources')
const LACTMED_DIR = resolve(__dirname, '..', '.cache', 'lactmed')
const LACTMED_ARCHIVE =
  'https://ftp.ncbi.nlm.nih.gov/pub/litarch/90/6c/lactmed_NBK501922.tar.gz'
const UA = { 'User-Agent': 'Mozilla/5.0 (antibiotics-guide verifier)' }

const args = process.argv.slice(2)
const excludes = args
  .filter((a) => a.startsWith('--exclude='))
  .map((a) => a.slice('--exclude='.length).toLowerCase())
const [drugArg, smpcArg] = args.filter((a) => !a.startsWith('--'))
const drug = drugArg?.toLowerCase()
if (!drug) {
  console.error(
    'Usage: node scripts/fetch-label-sources.mjs <generic name> [UK SmPC search term] [--exclude=word]',
  )
  process.exit(1)
}
const smpcQuery = smpcArg ?? drug
const isExcluded = (title) =>
  excludes.some((w) => (title ?? '').toLowerCase().includes(w))

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
  const labels = (list.data ?? []).filter((l) => !isExcluded(l.title))
  if (!labels.length) return null
  // Newest published label is the most likely to reflect current labeling.
  const newest = labels.sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date),
  )[0]
  const xml = await get(
    `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${newest.setid}.xml`,
  )
  // Skip the highlights box so sections start at the full prescribing info.
  const text = htmlToText(xml)
  const fullStart = text.indexOf('FULL PRESCRIBING INFORMATION')
  let sections = splitSections(
    fullStart >= 0 ? text.slice(fullStart) : text,
    FDA_HEADINGS,
  )
  // Older labels have no numbered headings; use the SPL section titles.
  if (!Object.keys(sections).length) sections = splitByTitles(xml)
  return {
    source: 'DailyMed (US FDA label)',
    title: newest.title,
    setid: newest.setid,
    version: newest.spl_version,
    published: newest.published_date,
    url: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${newest.setid}`,
    sections,
  }
}

// Each SPL <section> carries a <title>; the text up to the next title is
// that section's own content (sub-sections become their own entries).
function splitByTitles(xml) {
  const sections = {}
  const titles = [...xml.matchAll(/<title>([\s\S]*?)<\/title>/g)]
  titles.forEach((m, k) => {
    const name = htmlToText(m[1])
    if (!name) return
    const end = k + 1 < titles.length ? titles[k + 1].index : xml.length
    const body = htmlToText(xml.slice(m.index + m[0].length, end))
    if (body) sections[name] = sections[name] ? `${sections[name]} ${body}` : body
  })
  return sections
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
    `https://www.medicines.org.uk/emc/search?q=${encodeURIComponent(smpcQuery)}`,
  )
  const ids = [
    ...new Set([...search.matchAll(/\/emc\/product\/(\d+)\/smpc/g)].map((m) => m[1])),
  ]
  // Take the first listed SmPC whose product name is not excluded.
  let id, text, name
  for (const candidate of ids.slice(0, 8)) {
    const page = htmlToText(
      await get(`https://www.medicines.org.uk/emc/product/${candidate}/smpc`),
    )
    const candidateName = page.match(
      /1\. Name of the medicinal product (.{0,120}?) 2\./,
    )?.[1]
    if (isExcluded(candidateName)) continue
    ;[id, text, name] = [candidate, page, candidateName]
    break
  }
  if (!id) return null
  const url = `https://www.medicines.org.uk/emc/product/${id}/smpc`
  const revised = text.match(
    /10\. Date of revision of the text (\d{1,2} \w+ \d{4}|\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}\/\d{4}|\S+)/,
  )?.[1]
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
  // Search by the first word; the exact chapter title is matched below.
  const term = `${drug.split(' ')[0]}[title] AND lactmed[book]`
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
  const lmId = chapter.id.match(/LM\d+/)?.[0]
  const xml = lmId ? await readLactMedChapter(lmId) : null
  return {
    source: 'LactMed (NIH)',
    title: chapter.title,
    accession: chapter.accessionid,
    url: `https://www.ncbi.nlm.nih.gov/books/${chapter.accessionid}/`,
    revised: xml ? lactMedRevised(xml) : null,
    sections: xml ? lactMedSections(xml) : {},
  }
}

// Downloads and unpacks the LactMed archive on first use (XML files only).
async function readLactMedChapter(lmId) {
  if (!existsSync(LACTMED_DIR)) {
    mkdirSync(LACTMED_DIR, { recursive: true })
    const archive = resolve(LACTMED_DIR, 'lactmed.tar.gz')
    console.log('Downloading LactMed archive (~210 MB, first run only)…')
    const res = await fetch(LACTMED_ARCHIVE, { headers: UA })
    if (!res.ok) throw new Error(`${res.status} ${LACTMED_ARCHIVE}`)
    writeFileSync(archive, Buffer.from(await res.arrayBuffer()))
    execFileSync('tar', [
      'xzf', archive, '-C', LACTMED_DIR, '--strip-components=1',
      '--wildcards', '*.nxml',
    ])
  }
  const file = resolve(LACTMED_DIR, `${lmId}.nxml`)
  return existsSync(file) ? readFileSync(file, 'utf8') : null
}

function lactMedRevised(xml) {
  const m = xml.match(
    /<date date-type="revised">\s*<day>(\d+)<\/day>\s*<month>(\d+)<\/month>\s*<year>(\d+)<\/year>/,
  )
  return m ? `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}` : null
}

// Each <sec> with a <title>; the text runs to the next <sec> or </sec>.
function lactMedSections(xml) {
  const sections = {}
  for (const m of xml.matchAll(/<sec id="[^"]*">\s*<title>([^<]+)<\/title>([\s\S]*?)(?=<sec |<\/sec>)/g)) {
    const body = htmlToText(m[2])
    if (body) sections[m[1]] = body
  }
  return sections
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
const outPath = resolve(OUT_DIR, `${drug.replace(/[^a-z0-9]+/g, '-')}.json`)
writeFileSync(
  outPath,
  JSON.stringify({ drug, fetched: new Date().toISOString(), ...results }, null, 2),
)
console.log(`Wrote ${outPath}`)
