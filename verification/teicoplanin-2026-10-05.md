# Verification: Teicoplanin (Teicod)

- **Notion entry:** [Teicod (teicoplanin)](https://app.notion.com/p/215c496dfff180808854ea9362d16cc8) (no Renewed date; last edited 2026-02-02), with child page "What to monitor and be aware of when using teicoplanin"
- **Checked on:** 2026-10-05
- **Sources** (raw text in `sources/teicoplanin.json`, refresh with `npm run fetch-sources -- teicoplanin targocid`):
  - **SmPC:** UK SmPC, Targocid 200 mg powder for injection/infusion (Sanofi), revised 11 December 2025. [Link](https://www.medicines.org.uk/emc/product/2926/smpc)
  - **US label:** none. Teicoplanin is not approved in the US.
  - **Taiwan insert:** Targocid 200 mg 仿單 (衛署藥輸字第 021848 號, Sanofi Taiwan), linked from the Notion page ([PDF](https://www.cth.org.tw/public/medi_news/57c69513d4a9ef5843abb5e3dd351acf.pdf)). The PDF is dated 2017-06-15 and cites "Targocid UK SPC 2001 + CCDS v3 16Dec2016". Text saved in `sources/teicoplanin-taiwan-insert.txt`.
  - **LactMed:** NBK500894 ([link](https://www.ncbi.nlm.nih.gov/books/NBK500894/)). Not read (CAPTCHA).

Legend: ✅ matches · ❌ contradicts or misses something in the SmPC · ⚠️ unsupported or inconsistent

## Needs correction

### 1. Renal dose: under-reduced in both labels ❌

| | Notion | Taiwan insert (2017) | UK SmPC 4.2 (2025) |
|---|---|---|---|
| When to adjust | not stated | From **day 4** | From **day 4**; loading doses given in full |
| Mild–moderate | CrCl 40–60: q24h (= no reduction) | **CrCl 40–60: half** the maintenance dose (daily, or loading dose every other day) | **CrCl 30–80: half** |
| Severe | CrCl 10–40: q48h (= half) | **CrCl <40 and HD: one-third** (daily, or loading dose every 3 days) | **CrCl <30 and HD: one-third** |
| | CrCl <10: q72h | (included in <40) | (included in <30) |
| Haemodialysis | not stated | Not removed by HD | Not removed by HD |
| CAPD peritonitis | not stated | 400 mg IV loading dose, then 20 mg/L in every bag (week 1), alternate bags (week 2), overnight bag (week 3) | Same, but 6 mg/kg IV loading dose |

Notion's cut-offs (40 and 10) follow neither label. Each band gets one step less reduction than the Taiwan insert: CrCl 40–60 gets no reduction (should be half), and 10–40 gets half (should be one-third). The UK SmPC (newer) moves the cut-offs to 80 and 30.

### 2. Adult dose: loading regimen differs ⚠️
- SmPC: **cSSTI, pneumonia, cUTI**: 6 mg/kg q12h × **3 doses**, then 6 mg/kg once daily. **Bone/joint, infective endocarditis**: 12 mg/kg q12h × **3–5 doses**, then 12 mg/kg once daily. Doses are by body weight whatever the weight.
- Taiwan insert: same adult table as the UK SmPC (lower respiratory, SSTI, cUTI, bacteraemia: 6 mg/kg q12h × 3 then daily; bone/joint and endocarditis: 12 mg/kg q12h × 3–5 then daily). It also lists **surgical prophylaxis: 400 mg IV single dose at induction (6 mg/kg if >85 kg)**.
- Notion's "mild 6 mg/kg / severe 10–12 mg/kg" grouping is not in either label. Febrile neutropenia appears only in the Taiwan **pediatric** section (10 mg/kg maintenance for severe infection or neutropenia).
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
UK and Taiwan indications include **CAPD peritonitis**, **surgical prophylaxis** (Taiwan),, **bacteraemia** with the listed infections, and **oral treatment of C. difficile infection**. The column has none of these. `Osteoarthritis` is being used for bone and joint infections (no better tag exists).

## Empty columns the SmPC can fill

| Column | Proposed text (SmPC) |
|---|---|
| Category | Glycopeptide |
| Mechanism | Inhibits cell-wall synthesis by binding D-Ala-D-Ala of peptidoglycan precursors; Gram-positive only (5.1) |
| Pediatric dose | <2 months: 16 mg/kg IV once (loading), then 8 mg/kg daily, infused over 30 min. 2 months–16 years (Taiwan) / –12 years (UK): 10 mg/kg q12h × 3, then 6 mg/kg daily (most infections) or 10 mg/kg daily (severe infection or neutropenia) |
| Drug Interactions | Do not mix with aminoglycosides in the same syringe. Caution with nephro-/ototoxic drugs (aminoglycosides, colistin, amphotericin B, ciclosporin, cisplatin, furosemide, ethacrynic acid) (4.5) |
| Pregnancy | Limited data; stillbirths and neonatal deaths in rats at high doses. Avoid unless clearly necessary; fetal ear and kidney risk cannot be excluded (4.6) |
| Breastfeeding | Unknown whether excreted in milk; weigh benefit to child against benefit to mother (4.6) |
| Notes | Half-life 100–170 h, so a loading dose is essential. Not for intraventricular use. Caution if vancomycin allergy (cross-reaction possible); prior red man syndrome with vancomycin is not a contraindication. Some VanB VRE are susceptible. Monitor CBC, renal and liver function, and hearing if prolonged or with other ototoxic drugs |

## Coverage

- ✅ MRSA, MSSA, Streptococcus, Enterococcus (*E. faecalis* commonly susceptible; *E. faecium* acquired resistance; some VanB VRE susceptible).
- ⚠️ `Bacillus` is in neither the UK nor the Taiwan species list. Unverified.
- Taiwan insert also lists *Listeria monocytogenes*, micrococci, *Eikenella corrodens*, JK corynebacteria, *C. difficile* and peptococci as susceptible.
- Could add (SmPC "commonly susceptible"): Corynebacterium (*C. jeikeium*), Anaerobes (Peptostreptococcus, *C. difficile*).
- Not covered: all Gram-negatives, atypicals ✅ (none tagged).

## Verified ✅
- Hepatic: no adjustment (SmPC has no hepatic dose change; elimination is mainly renal).
- Monitor tags: CBC, LFT, renal (SmPC 4.4). Hearing tests also advised (no tag exists; put in Notes).
- Oral C. difficile dose.

## Child page notes
- Its content (NRCS-A *S. capitis*, catheter management, "nephrotoxicity at trough ≥60 mg/L", "thrombocytopenia at ≥40 mg/L", "3,377 patients") has no references and was not checked against a source.
- Its interaction list matches SmPC 4.5, except that it omits colistin and amphotericin B.

## Changes made in Notion (2026-10-05)

Renal column follows the **Taiwan insert** (reviewer's choice): CrCl 40–60 half, <40 and HD one-third, from day 4; UK cut-offs noted alongside. Adult dose (loading doses × 3 / × 3–5, durations, trough targets by assay, surgical prophylaxis), pediatric dose, Category, Mechanism, Drug Interactions, Pregnancy, Breastfeeding, Notes filled. Side Effects tags added. Indications + Bacteremia, Peritonitis, CDI, Surgical prophylaxis. Coverage: `Bacillus` removed; Corynebacterium, Listeria, Anaerobes added. References section added. Child page: trough table now by assay (FPIA/HPLC) with source; interaction list adds colistin and amphotericin B. Renewed date 2026-10-05.

## LactMed (read 2026-10-05 from the NIH bulk download; revised 2021-08-16)

Poorly excreted into breastmilk and not orally absorbed, so unlikely to affect the breastfed infant; one infant breastfed safely during therapy. Monitor for diarrhea, especially newborns and preterm infants. The Notion Breastfeeding column currently carries only the UK label wording ("unknown whether excreted"). Proposed: replace with the LactMed summary.
