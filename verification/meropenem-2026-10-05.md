# Verification: Meropenem

- **Notion entry:** [Meropenem](https://app.notion.com/p/20ec496dfff1802d8186d9ae2553a82b) (Renewed date 2026-05-12)
- **Checked on:** 2026-10-05
- **Sources** (raw text saved in `sources/meropenem.json`, refresh with `npm run fetch-sources -- meropenem`):
  - **FDA:** US FDA label via DailyMed, Meropenem for Injection (WG Critical Care), SPL v6, published 2026-09-24. [Link](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=74ff19b5-6156-4a27-affb-744b0ce1aeec). Hikma's label (v3, 2026-08-28) has the same text.
  - **SmPC:** UK SmPC, Meronem IV 1 g (Pfizer), revised 03/2026. [Link](https://www.medicines.org.uk/emc/product/9834/smpc)
  - **LactMed:** NIH LactMed, Meropenem, NBK501017. [Link](https://www.ncbi.nlm.nih.gov/books/NBK501017/). The page shows a CAPTCHA to scripts, so its text was **not** read automatically.

Review rule: an indication counts as approved if the US FDA label **or** the UK/EU SmPC lists it.

Legend: ✅ matches an official source · ❌ contradicts an official source · ⚠️ not in either label, so it needs a guideline or reference check by a pharmacist

## Corrections (all resolved 2026-10-05)

| # | Field | Notion says | Source says | Status |
|---|---|---|---|---|
| 1 | References: LactMed link | `NBK501099` | NBK501099 is LactMed **Smallpox Vaccine**. Meropenem is **NBK501017** | ✅ Fixed in Notion 2026-10-05 |
| 2 | Page → Indications, "FDA-approved" | cIAI, **cUTI**, meningitis (peds ≥3 mo), cSSSI | FDA §1: cSSSI (adults + peds ≥3 mo), cIAI (adults + peds), meningitis (peds ≥3 mo). cUTI is approved in the EU/UK (SmPC 4.1) | ✅ Accepted by reviewer (2026-10-05): approval by any regulator counts. Optional: relabel the heading "Approved (FDA/EMA)" |
| 3 | Page → Administration, stability | "0.9% NaCl: stable 3 h room temp, 24 h refrigerated" | FDA §2: infusion in 0.9% NaCl **1 h at ≤25 °C or 15 h at ≤5 °C**. Bolus in sterile water: 3 h / 13 h. D5W: use immediately. SmPC bolus: 3 h / 12 h. No source supports 24 h | ✅ Storage line removed from Notion 2026-10-05 |
| 4 | Side Effects / Monitor | No rhabdomyolysis; no CPK | FDA §5.3: **Rhabdomyolysis**. Discontinue if muscle pain/weakness, dark urine or elevated CPK | ✅ Fixed 2026-10-05: `rhabdomyolysis` tag, `CPK` monitor and a page bullet added |
| 5 | Pregnancy (property) | "Category B; use if clearly needed" | FDA §8.1 no longer uses letter categories (PLLR): "insufficient human data… no fetal toxicity in rats/monkeys". SmPC 4.6: "as a precautionary measure, it is **preferable to avoid** use during pregnancy" | ✅ Fixed 2026-10-05: property now reads "No FDA letter category (PLLR)… (UK SmPC: preferably avoid)" |

## Differs from the label: clinical judgement call

| # | Field | Notion says | Source says | Status |
|---|---|---|---|---|
| 6 | Coverage / "Not reliably covered" | *Enterococcus* spp. not covered | FDA §1.1 and §12.4 list ***E. faecalis* (vancomycin-susceptible)** as clinically active in cSSSI | ✅ Fixed 2026-10-05: label caveat added; still listed as not recommended |
| 7 | Breastfeeding | "Compatible" | FDA §8.2: excreted in milk, no data on infant effects, weigh benefit vs risk. SmPC 4.6: "should not be used… unless the potential benefit justifies the potential risk" | ✅ LactMed text confirmed by reviewer 2026-10-05 (rev. Jan 2021: RID 0.13–0.18%, low milk levels) |
| 8 | Drug Interactions: valproate magnitude | "↓66% within 24 h; breakthrough seizures in ~55%" | FDA §7.2: reduction "may drop below therapeutic range". SmPC 4.5: "**60–100%** decrease in about **two days**… should be avoided" | ✅ Fixed 2026-10-05: now 60–100% within 1–3 days, seizures ↑26% (SmPC; Chai 2021, PMID 33322967) |

## Not in either label: sourced from literature (2026-10-05)

| # | Field | Notion says | Label position | Status |
|---|---|---|---|---|
| 9 | HD dose | 500 mg q24h after HD; *also* "supplemental 500 mg post-HD" | FDA §2.2: "inadequate information" for HD/PD. SmPC: dialyzable, give the dose **after** HD, no dose stated | ✅ Sourced 2026-10-05: equals the label CrCl <10 dose; ~50% removed per HD (Thalhammer 2000, PMID 11069213) |
| 10 | Peritoneal dialysis | 500 mg q24h | SmPC 4.2: "**no established dose** recommendations" | ✅ Reworded 2026-10-05: no established IV dose (SmPC); IP 750 mg daily for PD peritonitis (PMID 37131320) |
| 11 | CRRT | 1 g q8–12h; up to 2 g q8h | Not in either label | ✅ Sourced 2026-10-05: SMARRT 2025 (PMID 40801954); Blood Purif 2023 review (PMID 37231811) |
| 12 | Coverage tags: *Acinetobacter*, *Burkholderia* | Covered | Not in the FDA §12.4 lists. SmPC names *Acinetobacter* only as "less susceptible" (needs 2 g) | ✅ Qualified 2026-10-05: Acinetobacter susceptible only/not CRAB; B. pseudomallei reliable, B. cepacia variable |
| 13 | Interactions: live vaccines | ↓ vaccine efficacy | Not in either label (general principle for live *bacterial* vaccines, e.g. oral typhoid) | ⚠️ Fine to keep; note the source |
| 14 | Mechanism: "T>MIC ≥40%" | ≥40% | FDA §12.2 confirms %T>MIC drives efficacy; the 40% target is from literature | ⚠️ |
| 15 | Monitoring: TDM targets | Cmin 8–32 mg/L; toxicity >44 / >64 mg/L | Not in labels | ✅ Fixed 2026-10-05: unsourced 8–32 mg/L target replaced by 100% fT>MIC (ESICM/ESCMID 2020, PMID 32383061); toxicity thresholds cited (Imani 2017, PMID 29091190) |

## Verified ✅

- **Adult dose:** 1 g q8h standard (FDA cIAI, SmPC); 500 mg q8h cSSSI, 1 g if *P. aeruginosa* (FDA §2.1); 2 g q8h meningitis / CF (SmPC 4.2); max 6 g/day.
- **Administration:** infusion 15–30 min; bolus ≤1 g over 3–5 min (FDA §2.1).
- **Renal dose table:** CrCl >50 / 26–50 / 10–25 / <10 → q8h / q12h / ½ dose q12h / ½ dose q24h, for both 1 g and 2 g columns. Matches FDA Table 1 and SmPC 4.2 (SmPC notes limited data for 2 g unit doses).
- **Hepatic:** no adjustment (FDA §12.3, SmPC 4.2).
- **Pediatric:** 10 / 20 / 40 mg/kg q8h with max 500 mg / 1 g / 2 g; >50 kg uses adult dose; *P. aeruginosa* cSSSI 20 mg/kg (FDA §2.3). Minor: the property "10–20 mg/kg (MAX 1g)" hides that the 10 mg/kg cSSSI dose is capped at **500 mg**.
- **Neonatal (<3 mo) cIAI table:** all four GA/PNA rows match FDA Table 3 exactly.
- **Probenecid:** ↑AUC 56%, ↑t½ 38%, not recommended (FDA §7.1, §12.3).
- **Warfarin:** possible ↑ anticoagulant effect (SmPC 4.5).
- **Mechanism:** PBPs 2/3/4 (*E. coli*, *P. aeruginosa*) and 1/2/4 (*S. aureus*) (FDA §12.4).
- **No activity:** MRSA, MRSE; *Listeria* (no lethal activity) (FDA §12.4).
- **Seizures:** 0.7% overall, risk with CNS disease / renal impairment (FDA §5.4).
- **Thrombocytopenia:** in renal impairment (FDA §5.9).
- **SJS/TEN, DRESS, AGEP:** FDA §5.2. **CDAD:** FDA §5.6.
- **Diarrhea:** 4.8% (FDA §6.1); 7% in the cSSSI study.
- **Excretion:** ~70% renal unchanged; one inactive metabolite (FDA §12.3).
- **Sodium:** 3.92 mEq (90.2 mg) per 1 g vial (FDA §11).

## Sources not usable

- **Sanford Guide, UpToDate:** subscription only. Items marked ⚠️ that Notion attributes to them need manual review.
- **Taiwan FDA package inserts:** the site doesn't respond from outside Taiwan.

## Taiwan package insert (added 2026-10-05)

Source: 美平乾粉注射劑 Mepem® IV 0.25 g / 0.5 g (衛署藥輸字第 022115 號), PDF dated 2016-08-26, hosted by Cardinal Tien Hospital ([PDF](https://www.cth.org.tw/public/medi_news/0a28f193d1d635775c324a4f3fe2c1e8.pdf)). Text saved in `sources/meropenem-taiwan-insert-mepem.txt`. This is one Taiwan-licensed brand (Japanese-origin label); the hospital's own product may differ.

| Topic | Notion | Mepem Taiwan insert |
|---|---|---|
| Adult dose | 1 g q8h (3 g/day); meningitis 2 g q8h (6 g/day) | **0.5–1 g/day** in 2–3 doses; severe/refractory up to **2 g/day** |
| Pediatric dose | 10–20 mg/kg q8h; meningitis 40 mg/kg q8h | 30–60 mg/kg/day in 3 doses; severe up to 120 mg/kg/day, max 2 g/day |
| Duration | by indication | "In principle 14 days"; reassess on day 3 |
| Renal | >50 normal; 26–50 q12h; 10–25 half q12h; <10 half q24h | **Same bands** (26–50 usual dose q12h; 10–25 half q12h; <10 half q24h) ✅ |
| HD | after dialysis | Give after HD (removed by HD) ✅ |
| Valproate | AVOID | **Contraindicated** (併用禁忌) ✅ (stronger wording) |
| Monitoring | LFT | LFTs if given >1 week ✅ |
| Indications | approved FDA/EMA list | Any infection due to susceptible bacteria; list includes meningitis, peritonitis, pneumonia, osteomyelitis, sepsis, pelvic infections ✅ |

The main difference is the **maximum daily dose**: this Taiwan label (Japanese dosing, 2016) caps adults at 2 g/day, while the FDA/UK labels and the Notion entry use up to 6 g/day. Not changed in Notion; needs the reviewer's decision.
