# Verification: Imipenem/Cilastatin (Culin)

- **Notion entry:** [Culin (Imipenem/Cilastatin)](https://app.notion.com/p/230c496dfff180bfa6b5e505e7b1a7c6) (no Renewed date; last edited 2025-12-08; page body empty)
- **Checked on:** 2026-10-05
- **Sources** (raw text in `sources/imipenem-and-cilastatin.json`, refresh with `npm run fetch-sources -- "imipenem and cilastatin" imipenem --exclude=relebactam --exclude=recarbrio`):
  - **FDA:** US FDA label via DailyMed, PRIMAXIN IV (Merck), SPL v34, published 2025-11-17. [Link](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f41d8abd-7792-4918-1b93-bd83ea01955e)
  - **UK SmPC:** none. eMC lists only Recarbrio (imipenem/cilastatin/relebactam), a different product.
  - **Taiwan insert for Culin:** not found online.
  - **LactMed:** Imipenem and Cilastatin, NBK500987, last revision 2024-11-15 ([link](https://www.ncbi.nlm.nih.gov/books/NBK500987/)). Text pasted by the reviewer.

Legend: ✅ matches · ❌ contradicts or misses something in the label · ⚠️ unsupported

## Needs correction

### 1. Adult dose ❌
| Notion | US label §2.1 (CrCl ≥90) |
|---|---|
| mild: 500–750 mg IV q12h | **500 mg q6h or 1 g q8h** (susceptible organisms) |
| severe: 500–1000 mg q6–8h | **1 g q6h** (intermediate susceptibility) |
| — | **Max 4 g/day.** Infuse 500 mg over 20–30 min, 1 g over 40–60 min |

"500–750 mg q12h" is the dose of the old intramuscular product (discontinued), not an IV dose.

### 2. Renal dose: old table, missing a band ❌
| CrCl (mL/min) | Notion | US label Table 3 (susceptible / intermediate) |
|---|---|---|
| 60–<90 | — (no adjustment shown) | 400 mg q6h **or** 500 mg q6h / 750 mg q8h |
| 30–<60 | 250–500 mg q8–12h | 300 mg q6h **or** 500 mg q8h / 500 mg q6h |
| 15–<30 | 250 mg q12h (severe: q8h) | 200 mg q6h **or** 500 mg q12h / 500 mg q12h; ↑ seizure risk |
| <15 | (same as <30) | **Do not give unless HD within 48 h** |
| HD | after session | Use the 15–<30 dose; give after HD |
| PD | — | Inadequate information |

Notion's table is the older weight-based scheme. It leaves CrCl 60–90 unadjusted and gives less than the label at CrCl <30 (500 mg/day vs 800–1,000 mg/day).

### 3. Side Effects, Monitor, and safety notes missing ❌
US label §5–6: **seizures** and other CNS effects (myoclonus, confusion; higher risk with renal impairment, CNS disease, high doses), hypersensitivity/anaphylaxis, CDAD, phlebitis, nausea/vomiting (slow the infusion), diarrhea, rash. Not for meningitis; not for children with CNS infections or <30 kg with renal impairment (§1.9).

### 4. Coverage ⚠️
- `Enterococcus`: only *E. faecalis*; **E. faecium is inactive** (§12.4).
- Missing (label-active): MSSA, Enterobacter, Serratia, Haemophilus, Anaerobes/Bacteroides, Citrobacter.
- Not covered: MRSA, *Stenotrophomonas*, some *B. cepacia* (none tagged ✅).

### 5. Indications incomplete ❌
US label §1: lower respiratory tract, UTI (complicated and uncomplicated), intra-abdominal, gynecologic, septicemia, bone and joint, skin and skin structure, endocarditis. Notion has only Pneumonia, IAI, UTI.

## Empty columns the US label can fill

| Column | Proposed text (US label) |
|---|---|
| Mechanism | Imipenem binds PBPs → cell-wall lysis; cilastatin inhibits renal dehydropeptidase-I (prevents imipenem breakdown), no antibacterial activity |
| Pediatric dose | ≥3 months: 15–25 mg/kg q6h. <3 months (≥1,500 g): 4 wk–3 mo 25 mg/kg q6h; 1–4 wk 25 mg/kg q8h; <1 wk 25 mg/kg q12h. Max 4 g/day. Not for CNS infections; not if <30 kg with renal impairment |
| Drug Interactions | Valproic acid/divalproex: ↓ VPA, breakthrough seizures, generally not recommended. Ganciclovir: generalized seizures, avoid unless benefit outweighs risk. Probenecid: ↑ imipenem levels, not recommended |
| Pregnancy | Insufficient human data; no malformations in animals; ↑ embryonic loss in monkeys at human dose |
| Breastfeeding | Low milk levels (imipenem <1 mg/L; cilastatin undetectable); **acceptable** (LactMed 2024). Monitor infant for diarrhea/thrush. US label: insufficient data, weigh benefit vs risk |
| Notes | Max 4 g/day; seizure risk (renal impairment, CNS disease); avoid in meningitis; CrCl <15 only if HD within 48 h; slow infusion if nausea |

## Verified ✅
- Category: Carbapenem.
- Hepatic: no adjustment (none in the label).
- HD: give after the session (§2.4).
- Coverage: Acinetobacter, Pseudomonas, Streptococcus, E. coli, Klebsiella (§12.4).

## FJUH hospital drug database entry (pasted by reviewer, 2026-10-05)

Product stocked: **庫寧靜脈乾粉注射劑 Culin 500 mg** (drug code CUL01, NHI code AC48189277). The database text follows Lexicomp-style dosing.

| Topic | FJUH database | US label | Finding |
|---|---|---|---|
| Adult dose | 500 mg q6h or 1 g q8h by indication | Same; 1 g q6h for intermediate susceptibility; max 4 g/day | ✅ (database omits the 4 g/day maximum) |
| Pediatric | 15–25 mg/kg q6h, max 1 g/dose | 15–25 mg/kg q6h (≥3 months); neonatal table; max 4 g/day | ✅ (database omits neonates) |
| Renal 60–<90 | No adjustment (60–<130) | **Reduce**: 400 mg q6h, or 500 mg q6h / 750 mg q8h | ⚠️ differs from label |
| Renal 30–<60 | 250 mg q6h or 500 mg q8h | 300 mg q6h or 500 mg q8h | ⚠️ minor difference |
| Renal 15–<30 | 250 mg q8h or 500 mg q12h | 200 mg q6h or 500 mg q12h | ⚠️ minor difference |
| CrCl <15 / HD | not stated | Not unless HD within 48 h; HD: use the 15–<30 dose after HD | ⚠️ missing |
| Side effects | Rash, GI, local pain, leukopenia | **Seizures**, myoclonus, confusion; hypersensitivity; CDAD | ⚠️ seizure risk missing |
| Interactions | (no field) | Valproate (avoid), ganciclovir (seizures), probenecid | ⚠️ missing |
| Breastfeeding | Manufacturer: weigh risk/benefit | LactMed 2024: low milk levels, acceptable | outdated |
| Stability | 4 h room temperature / 24 h refrigerated | Same (§16) | ✅ |
