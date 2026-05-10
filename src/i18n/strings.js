// UI strings only. Drug names, organism names, abbreviations (UTI, MRSA,
// ESBL, etc.), category names, and monograph content are intentionally NOT
// translated — they are universal medical/pharmacological nomenclature and
// translating them would either be redundant or risk weird non-standard
// renderings.

export const STRINGS = {
  en: {
    // header
    title: 'The Antimicrobial Apothecary',
    subtitle: 'Powders, potions, and remedies — handle with care',

    // controls
    searchPlaceholder: 'Seek a remedy by name...',
    allOrders: 'All Orders',
    allMaladies: 'All Maladies',
    allFoes: 'All Foes',
    countTemplate: '{n} of {total} vials',

    // empty / footer
    empty: 'No remedies match your search.',
    footer: 'For study only — not for clinical decision-making.',

    // detail page
    close: 'Close',
    detailEyebrow: 'A vial from the cupboard',
    detailIntroBefore: 'Greetings, traveler. Within this glass rests ',
    detailIntroAfterCategory: (category) =>
      `, a remedy of the ${String(category).toLowerCase()} order. What follows is a chronicle of its powers, its proper measure, and its known perils — distilled from the apothecary's records.`,
    detailIntroAfterPlain:
      ". What follows is a chronicle of its powers, its proper measure, and its known perils — distilled from the apothecary's records.",
    coverage: 'Pathogens vanquished',
    indications: 'Maladies treated',
    adultDose: 'Adult dose',
    pediatricDose: 'Pediatric dose',
    renalDose: 'Renal / HD / CRRT',
    hepaticDose: 'Hepatic dose',
    mechanism: 'Mechanism',
    drugInteractions: 'Drug interactions',
    pregnancy: 'Pregnancy',
    breastfeeding: 'Breastfeeding',
    sideEffects: 'Known perils',
    monitor: 'Watch for',
    notes: "Apothecary's note",
    fullTome: 'The Full Tome',
    notionLink: 'View original entry in Notion ↗',

    // practice questions
    practiceTitle: "The Apprentice's Trial",
    practiceReroll: '↻ New questions',
    practiceCorrect: '✦ Correct.',
    practiceWrong: '✦ Not quite.',
    practiceScore: 'Score',
    practicePerfect: ' — A worthy apprentice. ✦',
    practiceEmpty: 'No practice questions could be generated from this entry yet.',

    // generated question prompts (drug name interpolated as {name})
    qCoveragePrompt: 'Which of the following organisms does {name} reliably cover?',
    qCoverageExplain: '{name} covers: {list}.',
    qIndicationPrompt: 'Which of the following is a recognized indication for {name}?',
    qIndicationExplain: 'Indications: {list}.',
    qRenalPrompt: 'Does {name} require dose adjustment in patients with reduced renal function?',
    qRenalExplain: 'Renal dosing per chart: {value}',
    qPregnancyPrompt:
      'Based on the data on file, is {name} considered generally usable in pregnancy when clearly indicated?',
    qPregnancyExplain: 'Pregnancy note: {value}',
    qSideEffectPrompt: 'Which of the following is a documented side effect of {name}?',
    qSideEffectExplain: 'Documented side effects: {list}.',
    qClassPrompt: '{name} belongs to which class of antimicrobials?',
    qClassExplain: '{name} is a {category}.',
    answerYes: 'Yes',
    answerNo: 'No',

    // language toggle
    langOther: '中文',
    langOtherAria: 'Switch to Chinese',
  },

  zh: {
    // header
    title: '抗菌魔法藥櫥',
    subtitle: '粉劑、藥水與丹方 — 慎用之',

    // controls
    searchPlaceholder: '輸入藥名查找…',
    allOrders: '所有類別',
    allMaladies: '所有適應症',
    allFoes: '所有病原',
    countTemplate: '{n} / {total} 瓶',

    // empty / footer
    empty: '未尋得相符藥方。',
    footer: '僅供學習用 — 不可作為臨床決策依據。',

    // detail page
    close: '關閉',
    detailEyebrow: '藥櫥中的一瓶',
    detailIntroBefore: '旅人您好。此瓶中盛裝 ',
    detailIntroAfterCategory: (category) =>
      `（${category} 類）。以下記載其功效、用量與已知風險 — 摘錄自藥師筆記。`,
    detailIntroAfterPlain:
      '。以下記載其功效、用量與已知風險 — 摘錄自藥師筆記。',
    coverage: '可覆蓋病原',
    indications: '適應症',
    adultDose: '成人劑量',
    pediatricDose: '兒童劑量',
    renalDose: '腎功能 / HD / CRRT',
    hepaticDose: '肝功能劑量',
    mechanism: '作用機轉',
    drugInteractions: '藥物交互作用',
    pregnancy: '妊娠',
    breastfeeding: '哺乳',
    sideEffects: '已知不良反應',
    monitor: '監測項目',
    notes: '藥師備註',
    fullTome: '完整藥典',
    notionLink: '查看 Notion 原始記錄 ↗',

    // practice questions
    practiceTitle: '學徒試煉',
    practiceReroll: '↻ 換題',
    practiceCorrect: '✦ 答對。',
    practiceWrong: '✦ 答錯。',
    practiceScore: '得分',
    practicePerfect: ' — 學徒之選。✦',
    practiceEmpty: '此條目尚無法產生練習題。',

    qCoveragePrompt: '下列何者為 {name} 可有效覆蓋之病原？',
    qCoverageExplain: '{name} 可覆蓋：{list}。',
    qIndicationPrompt: '下列何者為 {name} 之適應症？',
    qIndicationExplain: '適應症：{list}。',
    qRenalPrompt: '{name} 在腎功能不全之病人是否需要劑量調整？',
    qRenalExplain: '腎功能用藥資料:{value}',
    qPregnancyPrompt: '依現有資料，{name} 在妊娠期有明確適應症時是否一般可使用？',
    qPregnancyExplain: '妊娠資料:{value}',
    qSideEffectPrompt: '下列何者為 {name} 之已知不良反應？',
    qSideEffectExplain: '已知不良反應：{list}。',
    qClassPrompt: '{name} 屬於哪一類抗菌藥？',
    qClassExplain: '{name} 屬於 {category} 類。',
    answerYes: '是',
    answerNo: '否',

    // language toggle
    langOther: 'EN',
    langOtherAria: '切換為英文',
  },
}

// Format a template string by substituting {key} placeholders.
export function format(template, vars = {}) {
  if (typeof template !== 'string') return template
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`))
}
