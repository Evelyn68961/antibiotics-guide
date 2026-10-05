# Verification: Ceftazidime (Tatumcef)

- **Notion entry:** [Tatumcef (Ceftazidime)](https://app.notion.com/p/255c496dfff18014ae16d51518d87761) (no Renewed date; last edited 2026-01-21)
- **Checked on:** 2026-10-05
- **Sources** (raw text in `sources/ceftazidime.json`, refresh with `npm run fetch-sources -- ceftazidime --exclude=avibactam`):
  - **FDA:** US FDA label via DailyMed, Ceftazidime for Injection (WG Critical Care), SPL v10, published 2026-09-21 (older unnumbered format). [Link](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=22d6534c-4488-48a1-8d78-e2fb908259de)
  - **SmPC:** UK SmPC, Ceftazidime 1 g powder for injection or infusion, revised 02 October 2024. [Link](https://www.medicines.org.uk/emc/product/6346/smpc)
  - **LactMed:** Ceftazidime, NBK501420, revised 2024-11-15 (from the NIH bulk download).

Legend: ✅ matches · ❌ contradicts or misses something in a label · ⚠️ unsupported

## Overall
The core dosing is correct. The renal table misses the lowest band, the neurotoxicity warning isn't spelled out, and several columns are empty.

## Needs correction

| # | Field | Notion | Source | Status |
|---|---|---|---|---|
| 1 | Renal: lowest band | CrCl <15: 0.5 g QD | US & UK: CrCl 6–15: 0.5 g q24h; **<5: 0.5 g q48h** | ❌ Missing the <5 band |
| 2 | Renal: missing points | — | **1 g loading dose** first; severe infection: unit dose +50% or more frequent dosing; **CAPD**: 1 g load, then 500 mg q24h | ❌ |
| 3 | Neurotoxicity | `CNS` tag only | US Warnings: unadjusted doses in renal impairment can cause **seizures, non-convulsive status epilepticus, encephalopathy, coma, asterixis, myoclonus** | ❌ Not stated anywhere |
| 4 | Side Effects | `CNS` only | Hypersensitivity (cross-reactivity with penicillins up to 10%), **SJS/TEN, DRESS, AGEP** (UK 4.4), CDAD, phlebitis, GI | ❌ |
| 5 | Indications: `Brain abscess` | tagged | Not in either label (meningitis is) | ⚠️ Unsupported. Keep only with a guideline citation |
| 6 | Indications missing | — | Bone and joint, gynecologic/pelvic, CAPD peritonitis, TURP prophylaxis (UK), chronic suppurative otitis media/malignant otitis externa (UK) | ❌ |

## Empty columns the labels can fill

| Column | Proposed text |
|---|---|
| Mechanism | Binds PBPs → inhibits cell-wall synthesis (bactericidal); stable to some β-lactamases; hydrolysed by ESBL/AmpC (US Microbiology, UK 4.4) |
| Pediatric dose | US: neonates 0–4 wk 30 mg/kg q12h; 1 mo–12 y 30–50 mg/kg q8h (max 6 g/day; higher dose for immunocompromised, CF, meningitis). UK: ≤2 months 25–60 mg/kg/day in 2 doses; >2 months <40 kg 100–150 mg/kg/day in 3 doses (max 6 g/day) |
| Drug Interactions | Aminoglycosides or potent diuretics (furosemide): nephrotoxicity, monitor renal function. Chloramphenicol: antagonism, avoid combination |
| Pregnancy | No harm in mice/rats up to 40× human dose; no adequate human studies; use only if clearly needed |
| Breastfeeding | Low milk levels; acceptable (LactMed 2024). Monitor infant for diarrhea/thrush. US label: caution |
| Monitor | renal, neuro |
| Notes | Max 6 g/day (UK: up to 9 g/day used in CF). Not reliable for ESBL/AmpC producers. Poor Gram-positive and no anaerobe activity. Neurotoxicity if not renally adjusted |

## Verified ✅
- Adult dose: 1 g q8–12h; 2 g q8h for meningitis, severe or immunocompromised (US Table 3; UK Table 1: 2 g q8h febrile neutropenia).
- Renal: CrCl 31–50: 1 g q12h; 16–30: 1 g q24h (US Table 4, UK Table 3).
- HD: 1 g loading, then 1 g after each HD (US). "or QOD" in Notion is not label wording.
- Hepatic: no adjustment (US).
- Coverage tags: E. coli, Pseudomonas, Klebsiella, Proteus, Enterobacter (US Microbiology). Could add Serratia, Haemophilus, Citrobacter, Neisseria.
- `Burkholderia`: not in the US list; consistent with clinical use for melioidosis, but unsourced here ⚠️.
- Page body: "劑量上限 6g/天" ✅.
