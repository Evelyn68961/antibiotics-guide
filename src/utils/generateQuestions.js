// Auto-generates practice questions from each antibiotic's data fields.
// Each call returns a randomized subset so studying the same drug feels
// different each visit.
//
// Drug names, organism names, and abbreviations are not translated — they
// are used as-is in any language. Only the question stems, "Yes/No", and
// the explanation prefixes change with the active language.

import { expand } from '../data/abbreviations'

const ORGANISM_POOL = [
  'MRSA',
  'MSSA',
  'VRE',
  'Pseudomonas',
  'E.coli',
  'Klebsiella',
  'Anaerobes',
  'Streptococcus',
  'Enterococcus',
  'Acinetobacter',
  'Haemophilus',
  'Mycoplasma',
  'Legionella',
]

const INDICATION_POOL = [
  'UTI',
  'Pneumonia',
  'CAP',
  'HAP',
  'VAP',
  'Bacteremia',
  'Meningitis',
  'Endocarditis',
  'SSTI',
  'IAI',
  'Pelvic',
  'CDI',
  'FN',
  'Surgical prophylaxis',
]

const SIDE_EFFECT_POOL = [
  'GI',
  'AKI',
  'LFT↑',
  'CNS',
  'QTc prolong',
  'thrombocytopenia',
  'neutropenia',
  'rhabdomyolysis',
  'Red-man syndrome',
  'photosensitivity',
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickDistractors(pool, exclude, n) {
  const candidates = pool.filter((x) => !exclude.includes(x))
  return shuffle(candidates).slice(0, n)
}

function makeMcq(prompt, correct, distractors, explanation) {
  if (!correct || distractors.length < 1) return null
  return {
    type: 'mcq',
    prompt,
    options: shuffle([correct, ...distractors]),
    correct,
    explanation,
  }
}

function makeBoolean(prompt, correct, explanation, yes, no) {
  return {
    type: 'mcq',
    prompt,
    options: [yes, no],
    correct: correct ? yes : no,
    explanation,
  }
}

// Default English fallback so older callers without the i18n object still work.
const DEFAULT_I18N = {
  t: (k) => k,
  tf: (k, vars) => {
    if (k === 'qCoveragePrompt') return `Which of the following organisms does ${vars.name} reliably cover?`
    if (k === 'qCoverageExplain') return `${vars.name} covers: ${vars.list}.`
    if (k === 'qIndicationPrompt') return `Which of the following is a recognized indication for ${vars.name}?`
    if (k === 'qIndicationExplain') return `Indications: ${vars.list}.`
    if (k === 'qRenalPrompt') return `Does ${vars.name} require dose adjustment in patients with reduced renal function?`
    if (k === 'qRenalExplain') return `Renal dosing per chart: ${vars.value}`
    if (k === 'qPregnancyPrompt') return `Based on the data on file, is ${vars.name} considered generally usable in pregnancy when clearly indicated?`
    if (k === 'qPregnancyExplain') return `Pregnancy note: ${vars.value}`
    if (k === 'qSideEffectPrompt') return `Which of the following is a documented side effect of ${vars.name}?`
    if (k === 'qSideEffectExplain') return `Documented side effects: ${vars.list}.`
    if (k === 'qClassPrompt') return `${vars.name} belongs to which class of antimicrobials?`
    if (k === 'qClassExplain') return `${vars.name} is a ${vars.category}.`
    return k
  },
}

export function generateQuestions(abx, i18n = DEFAULT_I18N) {
  const { t, tf } = i18n
  const yes = t('answerYes') === 'answerYes' ? 'Yes' : t('answerYes')
  const no = t('answerNo') === 'answerNo' ? 'No' : t('answerNo')

  const questions = []
  const name = abx.brandName
    ? `${abx.brandName} (${abx.genericName})`
    : abx.genericName

  // -------- Coverage --------
  if (abx.coverage && abx.coverage.length > 0) {
    const correct = abx.coverage[Math.floor(Math.random() * abx.coverage.length)]
    const distractors = pickDistractors(ORGANISM_POOL, abx.coverage, 3)
    const q = makeMcq(
      tf('qCoveragePrompt', { name }),
      correct,
      distractors,
      tf('qCoverageExplain', { name, list: abx.coverage.join(', ') }),
    )
    if (q) questions.push(q)
  }

  // -------- Indication --------
  if (abx.indications && abx.indications.length > 0) {
    const correct =
      abx.indications[Math.floor(Math.random() * abx.indications.length)]
    const distractors = pickDistractors(INDICATION_POOL, abx.indications, 3)
    const q = makeMcq(
      tf('qIndicationPrompt', { name }),
      expand(correct),
      distractors.map(expand),
      tf('qIndicationExplain', { list: abx.indications.map(expand).join(', ') }),
    )
    if (q) {
      q.correct = expand(correct)
      questions.push(q)
    }
  }

  // -------- Renal adjustment --------
  if (abx.renalDose && abx.renalDose.trim().length > 0) {
    const text = abx.renalDose.toLowerCase()
    const noAdjust =
      text.includes('no adjustment') ||
      text.includes('no dose adjustment') ||
      text.includes('not required')
    questions.push(
      makeBoolean(
        tf('qRenalPrompt', { name }),
        !noAdjust,
        tf('qRenalExplain', { value: abx.renalDose }),
        yes,
        no,
      ),
    )
  }

  // -------- Pregnancy --------
  if (abx.pregnancy && abx.pregnancy.trim().length > 0) {
    const text = abx.pregnancy.toLowerCase()
    const generallySafe =
      (text.includes('category b') || text.includes('category c')) &&
      !text.includes('avoid') &&
      !text.includes('contraindicated')
    questions.push(
      makeBoolean(
        tf('qPregnancyPrompt', { name }),
        generallySafe,
        tf('qPregnancyExplain', { value: abx.pregnancy }),
        yes,
        no,
      ),
    )
  }

  // -------- Side effect --------
  if (abx.sideEffects && abx.sideEffects.length > 0) {
    const correct =
      abx.sideEffects[Math.floor(Math.random() * abx.sideEffects.length)]
    const distractors = pickDistractors(SIDE_EFFECT_POOL, abx.sideEffects, 3)
    const q = makeMcq(
      tf('qSideEffectPrompt', { name }),
      correct,
      distractors,
      tf('qSideEffectExplain', { list: abx.sideEffects.join(', ') }),
    )
    if (q) questions.push(q)
  }

  // -------- Category / class --------
  if (abx.category) {
    const distractorClasses = [
      'Carbapenem',
      'Cephalosporin',
      'Penicillin',
      'Glycopeptide',
      'Fluoroquinolone',
      'Macrolide',
      'Polymyxin',
      'Lipopeptide',
      'Oxazolidinone',
      'Aminoglycoside',
    ].filter((c) => c !== abx.category)
    const distractors = shuffle(distractorClasses).slice(0, 3)
    const q = makeMcq(
      tf('qClassPrompt', { name }),
      abx.category,
      distractors,
      tf('qClassExplain', { name, category: abx.category }),
    )
    if (q) questions.push(q)
  }

  return shuffle(questions).slice(0, 5)
}
