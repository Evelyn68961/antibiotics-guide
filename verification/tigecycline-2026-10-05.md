# Verification: Tigecycline (Tygacil)

- **Notion entry:** [Tygacil (Tigecycline)](https://app.notion.com/p/20dc496dfff180228439e7e7f13392f9) (no Renewed date; last edited 2026-01-31)
- **Checked on:** 2026-10-05
- **Sources** (raw text in `sources/tigecycline.json`, refresh with `npm run fetch-sources -- tigecycline`):
  - **FDA:** US FDA label via DailyMed, Tigecycline for Injection (Sandoz), SPL v21, published 2026-07-27. [Link](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50605463-2dc2-4b27-bc51-4d87bb9a8539)
  - **SmPC:** UK SmPC, Tigecycline 50 mg powder for infusion, revised 16/02/2026. [Link](https://www.medicines.org.uk/emc/product/101433/smpc)
  - **IDSA AMR:** IDSA AMR Treatment Guidance, version published 2026-07-30. [Link](https://www.idsociety.org/practice-guideline/amr-guidance/)
  - **LactMed:** NBK541846 ([link](https://www.ncbi.nlm.nih.gov/books/NBK541846/)). Not read (CAPTCHA).

Review rule: an indication counts as approved if the FDA **or** UK label lists it.

Legend: ✅ matches · ❌ contradicts or misses something in an official source · ⬜ field empty

## Corrections (all applied in Notion 2026-10-05)

| # | Field | Notion says | Source says | Status |
|---|---|---|---|---|
| 1 | Notes / properties | No mention of the boxed warning | FDA **boxed warning**: all-cause mortality ↑ (4.0% vs 3.0%; risk difference 0.6%). Reserve for when alternatives are unsuitable. SmPC 4.1: same restriction | ✅ Fixed 2026-10-05 (was: Only in the page body. Should be in Notes) |
| 2 | Indications | Includes generic `Pneumonia` | FDA §1.4: **not indicated for HAP/VAP** (greater mortality, lower cure). Only CAP is approved (FDA). SmPC: cSSTI and cIAI only | ✅ Fixed 2026-10-05 (was: Remove the `Pneumonia` tag; keep `CAP`) |
| 3 | Side Effects | `LFT↑` only | Most common: **nausea 21%, vomiting 13%** (SmPC 4.8). FDA §5: **hypofibrinogenemia/coagulopathy**, **pancreatitis** (fatal cases), anaphylaxis, CDAD. SmPC: thrombocytopenia, SJS; tetracycline class: photosensitivity, tooth discoloration | ✅ Fixed 2026-10-05 (was: Add `GI`, `coagulopathy`, `thrombocytopenia`, `SJS/TEN`, `photosensitivity`. Put pancreatitis in Notes (no tag exists)) |
| 4 | Adult dose: high-dose regimen | "target: MDROs (ex: CRKP)" | IDSA AMR 2026: high dose (200 mg → 100 mg q12h) is described for **CRAB**. For CRE (incl. KPC/NDM) tigecycline is an *alternative*, and **not for bloodstream or urinary infections** | ✅ Fixed 2026-10-05 (was: Reword the target) |
| 5 | Adult dose | No duration or infusion time | FDA §2.1: cSSSI/cIAI **5–14 d**, CAP **7–14 d**; infuse over 30–60 min | ✅ Fixed 2026-10-05 (was: Missing) |

## Empty fields (filled in Notion 2026-10-05 with the text below)

| # | Field | Proposed text (source) |
|---|---|---|
| 6 | Mechanism | Binds 30S ribosome, blocks aminoacyl-tRNA at the A site → inhibits protein synthesis (bacteriostatic); evades tetracycline efflux/ribosomal protection (FDA §12.4) |
| 7 | Drug Interactions | Warfarin (↑ AUC; monitor INR/PT), calcineurin inhibitors (tacrolimus, cyclosporine: monitor levels), oral contraceptives (↓ efficacy) (FDA §7) |
| 8 | Pregnancy | Avoid in 2nd/3rd trimester: permanent tooth discoloration, reversible bone-growth inhibition; ↓ fetal weight in animals (FDA §8.1) |
| 9 | Breastfeeding | Low oral bioavailability → low infant exposure. Avoid breastfeeding if therapy >3 weeks, or pump and discard during therapy and for 9 days after (FDA §8.2) |
| 10 | Pediatric dose | <8 y: do not use. FDA: not recommended <18 y; if no alternative: 8–11 y 1.2 mg/kg q12h (max 50 mg), 12–17 y 50 mg q12h. UK: approved ≥8 y at the same doses (FDA §2.3, SmPC 4.2) |
| 11 | Monitor | Already has `PT/INR`. Add "including **fibrinogen**, baseline and regularly" in Notes (FDA §2.4) |

## Verified ✅

- **Standard adult dose:** 100 mg loading dose, then 50 mg q12h (FDA §2.1, SmPC 4.2).
- **Hepatic dose:** Child-Pugh A/B no change; C: 100 mg, then 25 mg q12h (FDA §2.2, SmPC 4.2).
- **Renal dose:** no adjustment; not removed by hemodialysis (FDA §12.3, SmPC 4.2).
- **Indications `IAI`, `SSTI`, `CAP`:** match FDA §1 (CAP is FDA-only).
- **Coverage tags:** MRSA, VRE, Streptococcus, Klebsiella, Enterobacter (FDA §1, §12.4); Acinetobacter (activity reported, but no FDA/CLSI breakpoint; IDSA lists it for CRAB); CRKP (IDSA: alternative, not for bloodstream or urine).
- **No Pseudomonas or Proteus in the tags:** correct. SmPC 5.1 says *P. aeruginosa* and *Proteus/Providencia/Morganella* are less susceptible because of efflux pumps.
- **Page body:** mechanism, spectrum, boxed warning, HAP/VAP and diabetic-foot limits, and the under-8 restriction all match. "Children over 8" matches the UK label.

## Coverage tags added 2026-10-05 (FDA §1 / §12.4)

MSSA, E. coli, E. faecalis (vancomycin-susceptible), Haemophilus, Legionella (CAP), Anaerobes/Bacteroides, Stenotrophomonas (in-vitro only).

## Other notes

- A References section citing the FDA label, UK SmPC, IDSA AMR 2026 and LactMed was added 2026-10-05. Before that the page had none. Its Chinese summary is credited to "@enoki.rx", which is a personal note, not an official source.
- The Meropenem page cites the IDSA AMR guidance as "2024". A newer version was published 2026-07-30; the reference was updated 2026-10-05.

- Renewed date set to 2026-10-05.

## LactMed (read 2026-10-05 from the NIH bulk download; revised 2025-06-15)

"Short-term use of tigecycline is probably acceptable in nursing mothers." Milk levels are likely low (71–89% protein bound) and infant absorption is limited by milk calcium. LactMed notes that the manufacturer's advice (avoid breastfeeding during therapy and for 9 days after) is more cautious than the evidence. The Notion Breastfeeding column currently carries only the label wording. Proposed: add the LactMed view.
