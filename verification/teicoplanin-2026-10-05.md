# Verification: Teicoplanin (Teicod)

- **Notion entry:** [Teicod (teicoplanin)](https://app.notion.com/p/215c496dfff180808854ea9362d16cc8) (no Renewed date; last edited 2026-02-02), with child page "What to monitor and be aware of when using teicoplanin"
- **Checked on:** 2026-10-05
- **Sources** (raw text in `sources/teicoplanin.json`, refresh with `npm run fetch-sources -- teicoplanin targocid`):
  - **SmPC:** UK SmPC, Targocid 200 mg powder for injection/infusion (Sanofi), revised 11 December 2025. [Link](https://www.medicines.org.uk/emc/product/2926/smpc)
  - **US label:** none. Teicoplanin is not approved in the US.
  - **Taiwan insert:** the page links a 仿單 PDF on cth.org.tw. This environment can't reach that site, so it was not checked.
  - **LactMed:** NBK500894 ([link](https://www.ncbi.nlm.nih.gov/books/NBK500894/)). Not read (CAPTCHA).

Legend: ✅ matches · ❌ contradicts or misses something in the SmPC · ⚠️ unsupported or inconsistent

## Needs correction

### 1. Renal dose: wrong thresholds and timing ❌

| | Notion | UK SmPC 4.2 |
|---|---|---|
| When to adjust | not stated | **No adjustment until day 4**; loading doses are given in full |
| Mild–moderate | CrCl 40–60: q24h (= no reduction) | **CrCl 30–80**: halve the maintenance dose (dose every 2 days, or half dose daily) |
| Severe | CrCl 10–40: q48h | **CrCl <30**: one-third of the dose (dose every 3 days, or one-third daily) |
| | CrCl <10: q72h | (included in <30) |
| Haemodialysis | not stated | Same as CrCl <30. **Not removed by haemodialysis** |
| CAPD | not stated | 6 mg/kg IV loading dose, then 20 mg/L in the dialysis bags (week 1: every bag; week 2: alternate bags; week 3: overnight bag) |

With Notion's thresholds, a patient with CrCl 60–80 gets no reduction (the SmPC halves the dose), and one with CrCl 30–40 gets half instead of one-third.

### 2. Adult dose: loading regimen differs ⚠️
- SmPC: **cSSTI, pneumonia, cUTI**: 6 mg/kg q12h × **3 doses**, then 6 mg/kg once daily. **Bone/joint, infective endocarditis**: 12 mg/kg q12h × **3–5 doses**, then 12 mg/kg once daily. Doses are by body weight whatever the weight.
- Notion's "mild 6 mg/kg / severe 10–12 mg/kg" and "FN 6 mg/kg" groupings are not in the SmPC. Febrile neutropenia is not a UK indication.
- Missing: number of loading doses, duration (endocarditis usually ≥21 days; **no more than 4 months**), and trough targets (see #4).
- ✅ C. difficile: 100–200 mg orally twice daily for 7–14 days.

### 3. Side Effects column is empty ❌
SmPC 4.4/4.8: **nephrotoxicity/renal failure**, **ototoxicity** (deafness, tinnitus), **thrombocytopenia**/leucopenia/eosinophilia (rarely agranulocytosis), **red man syndrome**, anaphylaxis (cross-reaction with vancomycin possible), **DRESS, SJS/TEN, AGEP**, transaminases ↑, GI upset, phlebitis.

### 4. Trough targets in the child page do not match the SmPC ⚠️

| Infection | Child page | UK SmPC (FPIA / HPLC) |
|---|---|---|
| Most Gram-positive infections | 10–15 mg/L | ≥15 mg/L (FPIA) / ≥10 mg/L (HPLC) |
| Bone and joint | 20–30 mg/L | >20 mg/L (FPIA) |
| Endocarditis / severe | 20–30 mg/L | **30–40 mg/L (FPIA)** / 15–30 mg/L (HPLC) |

The targets depend on the assay method, and the child page doesn't say which one it uses. Check against your hospital laboratory's method. Timing (day 3–5, then weekly) ✅.

### 5. Indications column incomplete ❌
UK indications include **CAPD peritonitis**, **bacteraemia** with the listed infections, and **oral treatment of C. difficile infection**. The column has none of these. `Osteoarthritis` is being used for bone and joint infections (no better tag exists).

## Empty columns the SmPC can fill

| Column | Proposed text (SmPC) |
|---|---|
| Category | Glycopeptide |
| Mechanism | Inhibits cell-wall synthesis by binding D-Ala-D-Ala of peptidoglycan precursors; Gram-positive only (5.1) |
| Pediatric dose | <2 months: 16 mg/kg IV once (loading), then 8 mg/kg daily (infusion only). 2 months–12 years: 10 mg/kg q12h × 3, then 6–10 mg/kg daily. >12 years: adult dose |
| Drug Interactions | Do not mix with aminoglycosides in the same syringe. Caution with nephro-/ototoxic drugs (aminoglycosides, colistin, amphotericin B, ciclosporin, cisplatin, furosemide, ethacrynic acid) (4.5) |
| Pregnancy | Limited data; stillbirths and neonatal deaths in rats at high doses. Avoid unless clearly necessary; fetal ear and kidney risk cannot be excluded (4.6) |
| Breastfeeding | Unknown whether excreted in milk; weigh benefit to child against benefit to mother (4.6) |
| Notes | Half-life 100–170 h, so a loading dose is essential. Not for intraventricular use. Caution if vancomycin allergy (cross-reaction possible); prior red man syndrome with vancomycin is not a contraindication. Some VanB VRE are susceptible. Monitor CBC, renal and liver function, and hearing if prolonged or with other ototoxic drugs |

## Coverage

- ✅ MRSA, MSSA, Streptococcus, Enterococcus (*E. faecalis* commonly susceptible; *E. faecium* acquired resistance; some VanB VRE susceptible).
- ⚠️ `Bacillus` is not in the SmPC's species list. Unverified.
- Could add (SmPC "commonly susceptible"): Corynebacterium (*C. jeikeium*), Anaerobes (Peptostreptococcus, *C. difficile*).
- Not covered: all Gram-negatives, atypicals ✅ (none tagged).

## Verified ✅
- Hepatic: no adjustment (SmPC has no hepatic dose change; elimination is mainly renal).
- Monitor tags: CBC, LFT, renal (SmPC 4.4). Hearing tests also advised (no tag exists; put in Notes).
- Oral C. difficile dose.

## Child page notes
- Its content (NRCS-A *S. capitis*, catheter management, "nephrotoxicity at trough ≥60 mg/L", "thrombocytopenia at ≥40 mg/L", "3,377 patients") has no references and was not checked against a source.
- Its interaction list matches SmPC 4.5, except that it omits colistin and amphotericin B.
