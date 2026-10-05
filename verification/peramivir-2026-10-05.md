# Verification: Rapiacta (Peramivir)

- **Notion entry:** [Rapiacta (Peramivir)](https://app.notion.com/25cc496dfff18098a1edc887a1d6b604)
- **Hospital codes:** RAP02 (Rapiacta 300 mg/60 mL)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/peramivir.json` (plus any `sources/peramivir-taiwan-insert-*.txt`)

## Product and sources

Rapiacta (peramivir) IV. The hospital stocks RAP02, Rapiacta 300 mg/60 mL premixed bag (瑞貝塔點滴靜脈注射液, Shionogi, 衛部藥輸字第026649號, ATC J05AH). This was identified from the source brief and the hospital site, which was used only for product identity. The reference label is the US RAPIVAB (peramivir) injection 200 mg/20 mL vial, BioCryst: DailyMed setid fe04f6cd-e71c-4bd4-abac-97720bba2a0d, v5, published Jun 21 2024 (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d). There is no UK SmPC on eMC. The Taiwan 仿單 was not retrieved: shionogi.com, cdc.gov.tw and pmda.go.jp all return proxy 403, and a cth.org.tw search found nothing. LactMed: Peramivir NBK500785, revised 2019-02-07. Sources JSON: /home/user/antibiotics-guide/verification/sources/peramivir.json. I did not modify it.

## Agreed fixes applied in Notion (47)

### A1 · Pediatric dose (error)

**Was:** Infuse over 60 minutes in pediatrics

**Now:** Infuse over 15–30 minutes (US label, same as adults); 仿單 (Rapiacta): ≥15 min single infusion

**Why:** The FDA label gives a 15–30 min infusion for pediatric patients 6 months–12 years, the same as for adults. No 60-minute infusion appears anywhere in the label. Study 305 gave pediatric doses over a minimum of 15 min.

**Sources:** DailyMed RAPIVAB label §2.1 'Pediatric Patients (6 months to 12 years of age)... single 12 mg/kg dose (up to a maximum dose of 600 mg), administered via intravenous infusion for 15 to 30 minutes' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; DailyMed RAPIVAB §2.3(d) 'Administer the diluted solution via intravenous infusion for 15 to 30 minutes' (same URL)

### A2 · Pediatric dose (missing)

**Was:** 6 months to \<13 years: 12 mg/kg IV × 1 (max 600 mg)<br>≥13 years: 600 mg IV × 1<br>Infuse over 60 minutes in pediatrics

**Now:** 仿單 (Rapiacta): ≥1 month: 10 mg/kg IV single dose over ≥15 min (max 600 mg); <2 y data limited; no experience in children with renal impairment<br>US label (Rapivab): 6 months to \<13 years: 12 mg/kg IV × 1 (max 600 mg); ≥13 years: 600 mg IV × 1; infuse over 15–30 min<br>US renal (2–12 y, CrCl by Cockcroft-Gault): CrCl 30–49: 4 mg/kg; CrCl 10–29: 2 mg/kg (max 600 mg)<br>6 months–\<2 y with CrCl \<50: no dosing recommendation (no data)

**Why:** The column has no pediatric renal adjustment. The label gives proportional reductions for ages 2–12 years only. It explicitly makes no recommendation for ages 6 months to under 2 years with CrCl under 50.

**Sources:** DailyMed RAPIVAB §2.2 Table 2 'Dosage Adjustment for Pediatric Patients (2 to 12 Years of Age)... 12 mg/kg / 4 mg/kg / 2 mg/kg'; 'No data are available... pediatric patients 6 months to less than 2 years of age with creatinine clearance less than 50 mL/min' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; DailyMed RAPIVAB §8.4/§8.6 (same URL)

### A3 · Page body (error)

**Was:** Pediatric Dose > Administration: 'Infuse over **60 minutes** in pediatric patients'

**Now:** Infuse over **15–30 minutes** (US label §2.1; same as adults); 仿單 (Rapiacta): ≥15 min single infusion

**Why:** This contradicts the FDA label in the same way as A1.

**Sources:** DailyMed RAPIVAB §2.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A4 · Page body (unsupported)

**Was:** Renal Impairment in Pediatrics: 'Dose reductions proportional to adults based on CrCl: CrCl ≥50: 12 mg/kg (max 600 mg); CrCl 30–49: 4 mg/kg (max 200 mg); CrCl 10–29: 2 mg/kg (max 100 mg)'

**Now:** US label, ages 2–12 years only (Table 2, CrCl by Cockcroft-Gault): CrCl ≥50: 12 mg/kg; CrCl 30–49: 4 mg/kg; CrCl 10–29: 2 mg/kg (up to max 600 mg)<br>6 months–\<2 years with CrCl \<50: no dosing recommendation (no data)<br>仿單 (Rapiacta): 腎功能不全的兒童病人尚無使用經驗

**Why:** The mg/kg values match the label. The per-band caps (max 200 mg and max 100 mg) are not in the label, which states only 'up to maximum dose of 600 mg'. The body also leaves out the 2–12 year age restriction and the missing recommendation for under-2s.

**Sources:** DailyMed RAPIVAB §2.2 Table 2 footnote b 'Up to maximum dose of 600 mg'; §8.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A5 · Page body (unsupported)

**Was:** Multi-Day Dosing (Off-Label, Severe Cases): '10 mg/kg IV once daily × 5 days (studied in clinical trials; well-tolerated but efficacy not established)'

**Now:** Repeated dosing (limited data): Japanese pediatric phase 3 used 10 mg/kg (max 600 mg) IV once daily for 1–2 days (仿單 §14.1.4, §8.4.2); 連續投與之經驗有限 (仿單 §2.2); optimal multi-day pediatric regimen not established

**Why:** The FDA label describes only single-dose pediatric use (Study 305). No pediatric multi-day regimen appears in the label, and no citation is given.

**Sources:** DailyMed RAPIVAB §8.4, §14.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A6 · Adult dose (unsupported)

**Was:** hospitalized or severe case: 600mg IVD QD (5d)

**Now:** hospitalized or severe case (off-label): 600mg IVD QD (5d) — FDA: efficacy not established; Study 301 (600 mg QD ×5d + SOC) showed no benefit vs placebo + SOC

**Why:** The column gives this as a regimen without saying it is off-label or that the trial failed. The label says efficacy could not be established in serious influenza requiring hospitalization. Study 301 used exactly this regimen and did not improve time to clinical resolution.

**Sources:** DailyMed RAPIVAB §1 Limitations of Use 'The efficacy of RAPIVAB could not be established in patients with serious influenza requiring hospitalization'; §8.7; §14.3 'RAPIVAB 600 mg daily for 5 days plus standard of care... did not improve median time to clinical resolution' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A7 · Adult dose (unsupported)

**Was:** mild to moderate case: 300mg IVD QD

**Now:** mild to moderate case: 300mg IVD single dose over ≥15 min (仿單 Rapiacta adult dose; max 600 mg/dose; 連續投與之經驗有限)

**Why:** No official label I could reach supports 300 mg. The US label approves only 600 mg as a single dose. Its Study 621 had a 300 mg arm, but the label reports efficacy only for 600 mg. The hospital stocks the Rapiacta 300 mg bag, whose Taiwan insert probably uses 300 mg single dose (600 mg for severe cases), but the insert could not be retrieved (proxy 403). 'QD' implies repeat daily dosing, which is not supported for this dose. The line should be marked unverified, not removed, until the 仿單 is checked.

**Sources:** DailyMed RAPIVAB §2.1, §14.1 (Study 621: 300 mg and 600 mg arms; efficacy reported for 600 mg) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert candidate (not retrieved): https://www.shionogi.com/content/dam/shionogi/ts/products/pdf/Rapiacta-INS-081009.pdf

### A8 · Adult dose (minor)

**Was:** 600mg IV single dose

**Now:** 600mg IV single dose over 15–30 min (US Rapivab label; ≥13 y; within 2 days of symptom onset)

**Why:** The infusion time and the 2-day start window are label requirements but are missing from the column.

**Sources:** DailyMed RAPIVAB §2.1 'single 600 mg dose, administered via intravenous infusion for 15 to 30 minutes'; 'Administer RAPIVAB within 2 days of onset of symptoms' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A9 · Renal dose, HD, CRRT (unsupported)

**Was:** CRRT: 200–400 mg × 1 or 200 mg daily

**Now:** CRRT (no label dose; case PK only): readily cleared by CVVH/CVVHDF (SC ≈0.9–1; Scheetz 2011 PMID 22116989, Bentley 2014 PMID 25345428); 600 mg q24h on CVVHDF gave adequate exposure (Bazan 2010 PMID 20874039); 480 mg q24h on CVVHDF also reported (Bentley 2014)

**Why:** The current CRRT doses have no citation, and the label has no CRRT dosing. Verified PubMed case reports show peramivir is readily cleared by CVVH/CVVHDF (SC about 0.9 and 0.98). In two critically ill CVVHDF patients, 600 mg daily was judged appropriate, with clearance higher than CRRT alone predicted. A 200 mg daily dose may therefore underdose. All PMIDs were checked with E-utilities esummary/efetch.

**Sources:** Bazan JA et al. Pharmacotherapy 2010;30(10):1016-20, PMID 20874039 https://pubmed.ncbi.nlm.nih.gov/20874039/; Scheetz MH et al. Ann Pharmacother 2011;45(12):e64, PMID 22116989 https://pubmed.ncbi.nlm.nih.gov/22116989/; Bentley ML et al. Int J Clin Pharmacol Ther 2014;52(12):1105-11, PMID 25345428 https://pubmed.ncbi.nlm.nih.gov/25345428/; DailyMed RAPIVAB §2.2 (no CRRT recommendation) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A10 · Renal dose, HD, CRRT (minor)

**Was:** CrCl ≥50: 600 mg × 1<br>CrCl 30–49: 200 mg × 1<br>CrCl 10–29: 100 mg × 1<br>HD: Dose after dialysis, per CrCl equivalent

**Now:** 仿單 (Rapiacta 300 mg): CrCl ≥50: 300 mg × 1<br>CrCl 30–49: 100 mg × 1<br>CrCl 10–29: 50 mg × 1<br>CrCl <10 / HD: 審慎調整 (no fixed dose); HD: give after dialysis (rapidly removed by HD)<br>US label (Rapivab 600 mg): CrCl 30–49: 200 mg × 1; CrCl 10–29: 100 mg × 1; CrCl <10 (not on HD): no recommendation; HD: after dialysis, dose per CrCl (HD removes 73–81%)<br>CRRT: no label dose (see case PK)

**Why:** The values are correct for the US label. The ground rules prefer the label of the stocked product (Rapiacta), which could not be retrieved, so the source should be stated. The label gives no dose below CrCl 10 for non-HD patients. HD reduces exposure by 73–81%.

**Sources:** DailyMed RAPIVAB §2.2 Table 1; §12.3 'Hemodialysis was effective in reducing systemic exposure of peramivir by 73% to 81%' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A11 · Page body (unsupported)

**Was:** Renal table row: '<10 (non-dialysis) \| 100 mg IV × 1'

**Now:** \<10 (non-dialysis) \| No US label recommendation (Table 1 covers CrCl ≥10 only); 仿單 (Rapiacta): 審慎調整投與量 (no fixed dose)

**Why:** FDA Table 1 stops at CrCl 10–29. There is no source for a 100 mg dose below 10.

**Sources:** DailyMed RAPIVAB §2.2 Table 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A12 · Page body (unsupported)

**Was:** CRRT: 'Single-dose approach: 200–400 mg IV × 1; Multi-day approach: 200 mg IV daily'

**Now:** CRRT (no label recommendation): peramivir is readily cleared by CVVH/CVVHDF (SC ≈0.9 on CVVH, Scheetz 2011 PMID 22116989; SA 0.98 on CVVHDF, Bentley 2014 PMID 25345428). Case PK: 600 mg IV q24h on CVVHDF gave adequate exposure (Bazan 2010, PMID 20874039); 480 mg q24h on CVVHDF also reported (Bentley 2014). Individualize with ID/pharmacy.

**Why:** Same as A9: the body CRRT doses are uncited, and PK case reports point to high CRRT clearance.

**Sources:** PMID 20874039 https://pubmed.ncbi.nlm.nih.gov/20874039/; PMID 22116989 https://pubmed.ncbi.nlm.nih.gov/22116989/; PMID 25345428 https://pubmed.ncbi.nlm.nih.gov/25345428/

### A13 · Side Effects (missing)

**Was:** ["neutropenia","CNS"]

**Now:** ["neutropenia","CNS","GI","LFT↑","dysglycemia","SJS/TEN","AKI"]

**Why:** The label's most common adverse reaction, diarrhea, is not tagged. Tags are also missing for ALT >2.5×ULN (3% vs 2%), serum glucose >160 mg/dL (5% vs 3%), and SJS/erythema multiforme (Warnings 5.1). All four proposed options exist in the schema. CPK elevation (4% vs 2%) has no matching Side Effects option, so it is left out.

**Sources:** DailyMed RAPIVAB §6 'Most common adverse reaction (incidence >2%) is diarrhea'; §6.1 Table 4; §5.1 Serious Skin/Hypersensitivity Reactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A14 · Page body (unsupported)

**Was:** Side Effects > Common (≥2%): Diarrhea; Nausea, vomiting; Neutropenia; Elevated liver enzymes (ALT/AST); Insomnia; Elevated blood pressure; Headache

**Now:** Common (US §6.1, 600 mg vs placebo): Diarrhea (8% vs 7%); Neutropenia <1.0×10⁹/L (8% vs 6%); Glucose >160 mg/dL (5% vs 3%); CPK ≥6×ULN (4% vs 2%); ALT >2.5×ULN (3% vs 2%)<br>Hospitalized subset (US): constipation 4%, insomnia 3%, AST↑ 3%, hypertension 2%<br>Pediatric (US): vomiting 3%, proteinuria (dipstick) 3%<br>仿單 (Rapiacta): diarrhea 5.8%, neutropenia 2.8%, proteinuria 2.5% (adults); nausea/vomiting ≥1%; children: diarrhea 10.3%, neutropenia 9.4%, vomiting 5.1%<br>Headache: unsourced (not in US/TW label)

**Why:** The label's ≥2% list does not include nausea or headache. Insomnia and hypertension were reported only in the hospitalized subset. The list is missing hyperglycemia, CPK elevation, constipation, and the pediatric vomiting and proteinuria.

**Sources:** DailyMed RAPIVAB §6.1 Clinical Trials Experience, Table 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A15 · Page body (unsupported)

**Was:** Neuropsychiatric Events: 'More commonly reported in Japanese pediatric patients'

**Now:** Reported primarily among pediatric patients (US §5.2); postmarketing reports from Japan, serious abnormal behaviour mostly in school-age children/adolescent males within 2 days of fever onset (仿單 §5.1)

**Why:** The label says events were 'reported primarily among pediatric patients'. It does not mention Japanese patients.

**Sources:** DailyMed RAPIVAB §5.2 Neuropsychiatric Events https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A16 · Drug Interactions (unsupported)

**Was:** Nephrotoxic drugs: Use caution<br>LAIV: Avoid within 2 weeks before or 48 hours after peramivir (may reduce vaccine efficacy)

**Now:** LAIV: Avoid within 2 weeks before or 48 hours after peramivir unless medically indicated (may reduce vaccine efficacy)<br>Inactivated influenza vaccine: no restriction<br>No CYP/P-gp/glucuronidation interactions; no PK interaction with oseltamivir, rimantadine, oral contraceptives, probenecid<br>Nephrotoxic drugs: not in label (theoretical; renally cleared) — use caution

**Why:** The LAIV line is correct. The nephrotoxic-drug interaction is not in the FDA label and is not contradicted by it, so it should be flagged as theoretical rather than removed. The label lists no clinically relevant interactions other than LAIV and documents no interaction with rimantadine, oseltamivir, oral contraceptives or probenecid.

**Sources:** DailyMed RAPIVAB §7.1 Influenza Vaccines; §12.3 Assessment of Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A17 · Page body (minor)

**Was:** DI table LAIV: 'if given during this window, revaccinate with inactivated vaccine'; Notes > Timing with Vaccination: 'If peramivir given within 5 days before LAIV → may need revaccination'

**Now:** DI table LAIV: 'Avoid LAIV within 2 weeks before or 48 hours after peramivir unless medically indicated (FDA §7.1). ACIP 2024–25: peramivir given from 5 days before through 2 weeks after LAIV may interfere → revaccinate with IIV/RIV (MMWR Recomm Rep 2024;73(5), PMID 39197095)'. Notes > Timing with Vaccination: keep the 5-day line with the same ACIP citation.

**Why:** The label gives a window of 2 weeks before or 48 h after peramivir. The 5-day and revaccination advice is not in the label, has no source, and is inconsistent with the 48-hour figure on the same page.

**Sources:** DailyMed RAPIVAB §7.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A18 · Breastfeeding (missing)

**Was:** unknown

**Now:** LactMed: poorly absorbed orally → unlikely to reach infant in clinically important amounts; no human data, so an alternate (oseltamivir, zanamivir) may be preferred, esp. newborn/preterm<br>FDA 8.2: present in rat milk (M/P ≈0.5)<br>仿單: 投與中應避免哺餵母乳

**Why:** 'unknown' leaves out what LactMed says: poor oral bioavailability makes clinically important infant exposure unlikely, and it names oseltamivir and zanamivir as alternatives. The FDA label notes peramivir is present in rat milk (M/P AUC ratio about 0.5).

**Sources:** LactMed Peramivir NBK500785 (rev. 2019-02-07), Summary of Use during Lactation; Alternate Drugs to Consider https://www.ncbi.nlm.nih.gov/books/NBK500785/; DailyMed RAPIVAB §8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A19 · Page body (minor)

**Was:** Breastfeeding > Recommendations: 'Oseltamivir is preferred for breastfeeding women'; 'If used, monitor infant for GI effects (diarrhea, vomiting)'

**Now:** Add: 'Poorly absorbed orally, so unlikely to reach the infant's bloodstream in clinically important amounts (LactMed)'. Change 'Oseltamivir is preferred' to 'LactMed alternate drugs: oseltamivir, zanamivir'. Add '仿單 (Rapiacta): 投與中應避免哺餵母乳'. Flag the infant GI-monitoring line as unsourced.

**Why:** LactMed's key point is missing. LactMed lists alternates rather than stating that oseltamivir is preferred. Neither LactMed nor the label suggests infant GI monitoring.

**Sources:** LactMed Peramivir NBK500785 https://www.ncbi.nlm.nih.gov/books/NBK500785/

### A20 · Notes (missing)

**Was:** Start within 48h of symptoms; useful when GI absorption impaired

**Now:** Start within 48h of symptoms; useful when GI absorption impaired<br>Efficacy not established in serious influenza requiring hospitalization (US §1 / 仿單 §1); efficacy data mainly influenza A (few influenza B subjects)

**Why:** The label's Limitations of Use belong in the short Notes column. 'useful when GI absorption impaired' is plausible clinical reasoning but has no source. Keep it.

**Sources:** DailyMed RAPIVAB §1 Limitations of Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A21 · Page body (unsupported)

**Was:** Notes > Comparison: 'Single dose of peramivir is equivalent to 5-day course of oseltamivir for uncomplicated influenza'

**Now:** Single IV dose of peramivir (300 or 600 mg) was non-inferior to oseltamivir 75 mg BID × 5 days for time to symptom alleviation in adults with uncomplicated influenza (仿單 §14.1.2, international phase 3, n=1091 incl. 244 Taiwan)

**Why:** The FDA label does not support an equivalence claim. Its adult efficacy trial (Study 621) was placebo-controlled.

**Sources:** DailyMed RAPIVAB §14.1, §14.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A22 · Page body (minor)

**Was:** Administration Details: 'Dilute in NS, ½NS, D5W, or Lactated Ringer's; Final concentration 1–6 mg/mL; Maximum infusion rate: 40 mg/min; Do not administer IM'

**Now:** **Rapiacta (stocked):** 300 mg/60 mL ready-to-use bag (5 mg/mL); infuse over ≥15 min, no dilution step in 仿單 (§2.1, §3).<br>**Rapivab (US 200 mg/20 mL vial):** dilute in NS, ½NS, D5W or LR to 1–6 mg/mL; infuse over 15–30 min; do not mix or co-infuse with other IV drugs (FDA §2.3–2.4).<br>'Maximum infusion rate 40 mg/min' and 'Do not administer IM': unsourced (not in US/TW label).

**Why:** The dilution steps apply to the US vial, not to the premixed bag the hospital stocks. The 40 mg/min maximum and the IM prohibition are not in the label; the adult trials actually included IM dosing. The 'do not co-infuse' instruction is missing.

**Sources:** DailyMed RAPIVAB §2.3, §2.4, §6.1 ('administered intravenously or intramuscularly') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A23 · Page body (minor)

**Was:** Hepatic Dose: 'Hepatic impairment has minimal effect on clearance'

**Now:** PK not studied in hepatic impairment; no clinically relevant change expected (renal elimination) — US §12.3 / 仿單 §12.3.4.3

**Why:** The label says hepatic impairment has not been studied. The page wording implies there are data.

**Sources:** DailyMed RAPIVAB §12.3 Patients with Hepatic Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A24 · Page body (minor)

**Was:** Pregnancy > Clinical Considerations: 'Use only if potential benefit justifies potential risk to the fetus'; animal data omit rabbits

**Now:** US §8.1: limited data insufficient to determine drug-associated risk; influenza in pregnancy carries maternal/fetal risk. 仿單 (Rapiacta): use only when benefit outweighs risk (利益大於風險時才使用). Animal: rats — reduced renal papilla/dilated ureters with continuous IV infusion; rabbits — abortion/premature delivery at maternally toxic doses (~8× human exposure).

**Why:** The 'benefit justifies risk' phrase is pre-PLLR wording and is not in the current label. The label also reports rabbit developmental toxicity, which the page leaves out.

**Sources:** DailyMed RAPIVAB §8.1 Pregnancy https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A25 · Page body (minor)

**Was:** Coverage: 'Not effective against neuraminidase inhibitor-resistant strains'

**Now:** Reduced susceptibility with NA/HA substitutions (e.g., H275Y); cross-resistance with oseltamivir/zanamivir observed; clinical impact unknown and may be strain dependent

**Why:** The label describes reduced susceptibility with unknown clinical impact, not a definite lack of efficacy.

**Sources:** DailyMed RAPIVAB §12.4 Microbiology – Resistance, Cross Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### A26 · Page body (error)

**Was:** Final line: 'Would you like me to add this directly to your Notion database?' (and heading '## Peramivir (Rapivab/Rapiacta) - Complete Updated Entry')

**Now:** REMOVE the final line. Optionally rename the heading to '## Peramivir (Rapivab/Rapiacta)'.

**Why:** This is pasted AI-chat text, which the ground rules say to remove.

**Sources:** Ground rules (pasted AI-chat text); no label content involved

### B1 · Page body (error)

**Was:** Last line of body: "Would you like me to add this directly to your Notion database?" (and heading "## Peramivir (Rapivab/Rapiacta) - Complete Updated Entry")

**Now:** REMOVE the line "Would you like me to add this directly to your Notion database?"; rename heading to "## Peramivir (Rapivab/Rapiacta)"

**Why:** This is text pasted from an AI chat. The ground rules say to remove pasted AI-chat text. The word 'Complete Updated Entry' in the heading comes from the same chat.

**Sources:** Ground rules (pasted AI-chat text) — n/a

### B2 · Adult dose (error)

**Was:** 600mg IV single dose<br>hospitalized or severe case: 600mg IVD QD (5d)<br>mild to moderate case: 300mg IVD QD

**Now:** 仿單 (Rapiacta, hospital product): 300 mg IV single dose over ≥15 min (max 600 mg/dose)<br>US label (Rapivab): 600 mg IV single dose over 15–30 min<br>Start within 48 h of symptom onset<br>Hospitalized/severe (off-label): 600 mg IV QD; multi-day experience limited, optimal duration unknown (Study 301: 600 mg QD × 5 d no benefit vs placebo)

**Why:** The 仿單 dose is 300 mg given ONCE, with a 600 mg maximum per dose. It is not '300 mg QD'. The column does not say that the hospital's own product label uses 300 mg. Multi-day 600 mg QD is off-label. The US label says efficacy could not be shown in hospitalized patients. The Taiwan insert says experience with repeated dosing is limited. IDSA says to consider multi-day dosing in hospitalized patients but that the optimal regimen is unknown.

**Sources:** Taiwan insert 衛部藥輸字第026649號 v4 2025-03, §2.1 '成人建議劑量為300 mg，每次最多不得超過600 mg，15分鐘以上單次點滴靜脈注射' and §2.2 '連續投與之經驗有限' — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §2.1 (single 600 mg over 15–30 min), §1 and §14.3 Study 301 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; IDSA 2018 influenza guideline (Uyeki, Clin Infect Dis 2019;68:e1-e47, PMID 30566567): 'If IV peramivir is used for hospitalized patients, consideration should be given to administering a multiday dosing regimen, although the optimal regimen is unknown' — https://pubmed.ncbi.nlm.nih.gov/30566567/

### B3 · Renal dose, HD, CRRT (error)

**Was:** CrCl ≥50: 600 mg × 1<br>CrCl 30–49: 200 mg × 1<br>CrCl 10–29: 100 mg × 1<br>HD: Dose after dialysis, per CrCl equivalent<br>CRRT: 200–400 mg × 1 or 200 mg daily

**Now:** 仿單 (Rapiacta 300 mg): CrCl ≥50: 300 mg × 1<br>CrCl 30–49: 100 mg × 1<br>CrCl 10–29: 50 mg × 1<br>CrCl <10 / HD: 審慎調整投與量 (no fixed dose in label); HD: give after dialysis, dose per renal function (HD rapidly removes drug)<br>US label (Rapivab 600 mg): CrCl ≥50: 600 mg; 30–49: 200 mg; 10–29: 100 mg; HD: after dialysis, dose per CrCl (HD ↓exposure 73–81%)<br>CRRT (no label dose; case reports only): readily cleared by CVVH/CVVHDF (SC ≈0.9–1; PMID 22116989, 25345428); 600 mg q24h on CVVHDF judged appropriate in 2 adults (PMID 20874039); 480 mg q24h on CVVHDF (PMID 25345428)

**Why:** The US values in the column are correct for the 600 mg Rapivab dose. The rules say to prefer the label of the product the hospital stocks, and the Rapiacta 仿單 Table 1 gives 300/100/50 mg. The CRRT line '200–400 mg × 1 or 200 mg daily' has no source. The published CRRT PK data (Bazan 2010: 600 mg QD on CVVHDF; Scheetz 2011: 600 mg QD on CVVH; review by Li 2020) conclude that 600 mg q24h was suitable. Bentley 2014 measured a saturation coefficient of 0.98 on CVVHDF. Dillon 2017 found that 200 mg QD in a 49.5 kg adolescent on CVVHDF gave an AUC similar to adults with normal renal function. That supports 200 mg only as a single paediatric case, not as an adult regimen.

**Sources:** Taiwan insert v4 §2.3 Table 1 (50≤Ccr 300 mg; 30≤Ccr<50 100 mg; 10≤Ccr<30 50 mg; ※Ccr<10 及血液透析 請審慎調整投與量，Peramivir會因血液透析而快速自血中清除) — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §2.2 Table 1, §8.6, §12.3 (HD reduces exposure 73–81%) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Bazan JA et al. Pharmacotherapy 2010;30:1016-20, PMID 20874039 (verified via esummary) — https://pubmed.ncbi.nlm.nih.gov/20874039/; Scheetz MH et al. Ann Pharmacother 2011;45:e64, PMID 22116989 (verified) — https://pubmed.ncbi.nlm.nih.gov/22116989/; Bentley ML et al. Int J Clin Pharmacol Ther 2014;52:1105-11, PMID 25345428 (verified) — https://pubmed.ncbi.nlm.nih.gov/25345428/; Li L et al. Front Pharmacol 2020;11:786, PMID 32547394 (verified): 'peramivir 600 mg q24h was suitable during CVVH or CVVHDF' — https://pubmed.ncbi.nlm.nih.gov/32547394/; Dillon RC et al. J Pediatr Pharmacol Ther 2017;22:60-64, PMID 28337082 (verified) — https://pubmed.ncbi.nlm.nih.gov/28337082/

### B4 · Pediatric dose (error)

**Was:** 6 months to \<13 years: 12 mg/kg IV × 1 (max 600 mg)<br>≥13 years: 600 mg IV × 1<br>Infuse over 60 minutes in pediatrics

**Now:** 仿單 (Rapiacta): ≥1 month: 10 mg/kg IV single dose over ≥15 min (max 600 mg); <2 y data limited; no experience in children with renal impairment<br>US label: 6 months–12 years: 12 mg/kg IV × 1 (max 600 mg); ≥13 years: 600 mg IV × 1; infuse over 15–30 min<br>US renal (2–12 y): CrCl 30–49: 4 mg/kg; 10–29: 2 mg/kg; no recommendation for 6 mo–<2 y with CrCl <50

**Why:** Neither label says '60 minutes'. Both labels give 15–30 min (US) or at least 15 min (TW) for children, so this line is wrong. The column also leaves out the dose on the hospital product's label (10 mg/kg from 1 month of age) and the US paediatric renal adjustments.

**Sources:** US RAPIVAB label §2.1 'single 12 mg/kg dose (up to a maximum dose of 600 mg), administered via intravenous infusion for 15 to 30 minutes'; §2.2 Table 2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §1, §2.1 '兒童建議劑量為10 mg/kg，每次最多不得超過600 mg，15分鐘以上單次點滴靜脈注射', §2.3, §8.4 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B5 · Page body (error)

**Was:** Pediatric Dose > Administration: "Infuse over **60 minutes** in pediatric patients"

**Now:** Infuse over **15–30 minutes** (US label); 仿單: ≥15 min

**Why:** Both labels contradict this line (see B4).

**Sources:** US RAPIVAB label §2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §2.1 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B6 · Page body (error)

**Was:** Renal Dose table row "\<10 (non-dialysis) \| 100 mg IV × 1"; CRRT block "Single-dose approach: 200–400 mg IV × 1 / Multi-day approach: 200 mg IV daily"

**Now:** Replace the <10 row with: "\<10 (non-dialysis) \| No labelled dose (US); 仿單: 審慎調整投與量". Add a 仿單 table for the 300 mg product: ≥50: 300 mg; 30–49: 100 mg; 10–29: 50 mg. Replace the CRRT bullets with: "No label recommendation. Peramivir is readily cleared by CVVH/CVVHDF (SC ≈0.9 on CVVH, Scheetz 2011, PMID 22116989; 0.98 on CVVHDF with 480 mg q24h, Bentley 2014, PMID 25345428). 600 mg q24h on CVVHDF was judged appropriate in 2 critically ill adults (Bazan 2010, PMID 20874039). A 49.5 kg adolescent on CVVHDF given 200 mg QD reached an AUC similar to adults with normal renal function (Dillon 2017, PMID 28337082). Individualize with ID/pharmacy."

**Why:** The US label covers only CrCl 10–29 and above; there is no 100 mg dose for CrCl <10. The Taiwan insert says only to adjust carefully. The 200–400 mg CRRT doses do not match the published CRRT PK reports. The body also has no 仿單 renal table for the 300 mg product the hospital stocks.

**Sources:** US RAPIVAB label §2.2 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §2.3 Table 1 and footnote ※1 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; Li L et al. Front Pharmacol 2020, PMID 32547394 — https://pubmed.ncbi.nlm.nih.gov/32547394/; Bazan 2010 PMID 20874039 — https://pubmed.ncbi.nlm.nih.gov/20874039/

### B7 · Page body (error)

**Was:** Adult Dose > Administration Details: "Dilute in NS, ½NS, D5W, or Lactated Ringer's / Final concentration: 1–6 mg/mL / Maximum infusion rate: 40 mg/min / Do not administer IM"

**Now:** **Rapiacta (hospital product):** 300 mg/60 mL ready-to-infuse bag (5 mg/mL); infuse over ≥15 min (仿單 §2.1, §3).<br>**Rapivab (US 200 mg/20 mL vial):** dilute in NS, ½NS, D5W or LR to 1–6 mg/mL; infuse over 15–30 min; do not mix or co-infuse with other IV drugs (FDA §2.3–2.4).<br>Maximum infusion rate 40 mg/min — (unsourced; not in US/TW label)<br>Do not administer IM — (unsourced; both labels give IV only)

**Why:** The dilution steps are for the US 10 mg/mL vial. They do not apply to the premixed Rapiacta bag the hospital stocks. Neither label states '40 mg/min'; it appears to be worked out from 600 mg over 15 min. 'Do not administer IM' is not in either label: both labels give IV only, and the US trials included IM doses. I flag it as unsourced but leave it in.

**Sources:** Taiwan insert v4 §2.1, §3 劑型與含量 (每袋60 mL含Peramivir 300 mg) — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §2.3–2.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### B8 · Side Effects (missing)

**Was:** ["neutropenia","CNS"]

**Now:** ["neutropenia","CNS","GI","LFT↑","SJS/TEN","AKI","dysglycemia"]

**Why:** Diarrhoea is the most common adverse reaction in both labels (US 8% vs 7% placebo; TW 5.8%). ALT rise appears in US Table 4 (3% vs 2%). The Taiwan insert lists hepatic dysfunction/jaundice as a serious ADR and needs LFT monitoring (§5.3, §6.2.3). SJS is in US §5.1 and §6.2 and TW §6.3.3. Acute renal failure is a serious ADR in TW §6.2.4. All of these tags already exist in the schema.

**Sources:** US RAPIVAB label §5.1, §6.1 Table 4, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §5.3, §6.1, §6.2.1–6.2.5, §6.3.3 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B9 · Monitor (missing)

**Was:** ["renal","neuro","CNS"]

**Now:** ["renal","neuro","CNS","LFT","CBC"]

**Why:** The hospital product's 仿單 §5.3 says to check liver function right after starting, because hepatic dysfunction or jaundice can appear the next day. §6.2.2 lists leukopenia/neutropenia (1–<5%) as a serious ADR needing close observation. The US label also lists neutropenia (8% vs 6%).

**Sources:** Taiwan insert v4 §5.3 '在開始投與後應隨即進行肝功能檢查', §6.2.2 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §6.1 Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### B10 · Breastfeeding (missing)

**Was:** unknown

**Now:** LactMed: poorly absorbed orally → unlikely to reach infant in clinically important amounts; no human data, so an alternative (oseltamivir, zanamivir) may be preferred, esp. newborn/preterm<br>仿單: 投與中應避免哺餵母乳 (drug in rat milk)

**Why:** 'unknown' leaves out what the sources do say. LactMed (rev. 2019-02-07) gives a summary and names alternatives. The hospital product's label says to avoid breastfeeding while the drug is given. US §8.2 says there are no human data and that the drug is in rat milk (milk:plasma AUC ratio about 0.5).

**Sources:** LactMed Peramivir NBK500785 (rev. 2019-02-07), Summary of Use during Lactation; Alternate Drugs to Consider — https://www.ncbi.nlm.nih.gov/books/NBK500785/; Taiwan insert v4 §8.3 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### B11 · Page body (unsupported)

**Was:** Breastfeeding > Recommendations: "If used, monitor infant for GI effects (diarrhea, vomiting)"; Data: "**Unknown** if excreted in human milk"

**Now:** Add: "LactMed: poorly absorbed orally, unlikely to reach infant in clinically important amounts; alternate (oseltamivir, zanamivir) may be preferred esp. newborn/preterm" and "仿單: 投與中應避免哺餵母乳". Flag the infant GI-monitoring line as unsourced (keep or remove at owner's discretion).

**Why:** The peramivir LactMed entry does not mention monitoring the infant for GI effects. It says 'Effects in Breastfed Infants: Relevant published information was not found'. The body also leaves out the LactMed summary and the Taiwan insert's advice to avoid breastfeeding.

**Sources:** LactMed NBK500785 — https://www.ncbi.nlm.nih.gov/books/NBK500785/; Taiwan insert v4 §8.3 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B12 · Drug Interactions (unsupported)

**Was:** Nephrotoxic drugs: Use caution<br>LAIV: Avoid within 2 weeks before or 48 hours after peramivir (may reduce vaccine efficacy)

**Now:** LAIV: Avoid within 2 weeks before or 48 hours after peramivir unless medically indicated (may reduce vaccine efficacy); inactivated vaccine any time<br>No CYP450/P-gp interactions; none with oseltamivir, rimantadine, oral contraceptives, probenecid<br>Nephrotoxic drugs: use caution (unsourced – not in US/TW label)

**Why:** The LAIV line is correct. 'Nephrotoxic drugs' is not in the US §7 or TW §7 label sections. It is plausible because the drug is cleared by the kidney and caused renal toxicity in rabbits, so I flag it rather than remove it. Both labels say there are no CYP/P-gp interactions and no interaction with rimantadine, oseltamivir, oral contraceptives or probenecid.

**Sources:** US RAPIVAB label §7.1, §12.3 Assessment of Drug Interactions — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §7 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B13 · Page body (missing)

**Was:** Indications > FDA-Approved only: "Treatment of acute uncomplicated influenza A and B in patients ≥6 months ... ≤2 days"; Summary table Age Approved "≥6 months"

**Now:** Add under Indications: "**仿單 (Taiwan, Rapiacta):** 治療成人及一個月大以上兒童之A型及B型流感病毒急性感染; prophylaxis not established; not effective for influenza C or bacterial infection; efficacy not established in hospitalized severe influenza; <2 y data limited". Summary table: "≥6 months (US) / ≥1 month (TW)"

**Why:** The hospital product's label allows use from 1 month of age, while the US label starts at 6 months. The page does not mention the Taiwan indication anywhere.

**Sources:** Taiwan insert v4 §1 適應症 and 使用限制 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### B14 · Page body (missing)

**Was:** Adult Dose tables list only 600 mg × 1 (US) and 600 mg QD × 5 d (off-label)

**Now:** Add row: "仿單 (Rapiacta) \| 300 mg IV × 1 over ≥15 min (max 600 mg/dose); repeated dosing experience limited"

**Why:** The body never states the dose on the stocked product's label (300 mg). See B2.

**Sources:** Taiwan insert v4 §2.1–2.2 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B15 · Page body (unsupported)

**Was:** Pediatric Dose > "Multi-Day Dosing (Off-Label, Severe Cases): 10 mg/kg IV once daily × 5 days (studied in clinical trials; well-tolerated but efficacy not established)"

**Now:** Keep the existing line, flagged: "10 mg/kg IV once daily × 5 days — (unsourced: not in US/TW label; add citation)". Add: "Repeated dosing (limited data): Japanese paediatric phase 3 used 10 mg/kg (max 600 mg) QD for 1–2 days (仿單 §8.4.2, §14.1.4); 仿單 §2.2 連續投與之經驗有限. IDSA 2018: once-daily IV peramivir in hospitalized adults and children ≥7 y (plus standard of care) failed to show superiority vs placebo; if used in hospitalized patients consider multiday dosing, optimal regimen unknown."

**Why:** I found no label or guideline source for '10 mg/kg × 5 days'. The only paediatric repeat-dose data in the Taiwan insert are 10 mg/kg QD for 1–2 days.

**Sources:** Taiwan insert v4 §8.4.2, §14.1.4 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; IDSA 2018 guideline PMID 30566567 — https://pubmed.ncbi.nlm.nih.gov/30566567/

### B16 · Page body (missing)

**Was:** Side Effects: Common list + Serious table (anaphylaxis, SJS, EM, exfoliative dermatitis, neuropsychiatric); "Headache" listed as common

**Now:** Add to Serious table: "Hepatic dysfunction/jaundice (仿單 §5.3, §6.2.3 – may appear the day after dosing)", "Acute renal failure (仿單 §6.2.4)", "Leukopenia/neutropenia 1–<5% (仿單 §6.2.2)". Add to Common: "Proteinuria (TW 2.5%; US paeds 3%)", "CPK ≥6×ULN 4% vs 2%, glucose >160 mg/dL 5% vs 3% (US Table 4)". Flag "Headache" as unsourced.

**Why:** The body leaves out the serious ADRs listed by the hospital product's label and some US Table 4 laboratory abnormalities. Headache is not among the adverse reactions in either label.

**Sources:** Taiwan insert v4 §5.3, §6.1–6.4 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; US RAPIVAB label §6.1 Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d

### B17 · Page body (minor)

**Was:** Hepatic Dose: "Hepatic impairment has minimal effect on clearance"; Monitor: LFT only under "If Multi-Day/Off-Label Use"

**Now:** Hepatic: "Not studied; no clinically relevant change expected (renal elimination) — US §12.3 / 仿單 §12.3.4.3". Monitor > Before/After: add "LFT soon after starting (仿單 §5.3), even after a single dose"

**Why:** Neither label has studied hepatic impairment; they say only that no change is expected. The Taiwan insert asks for LFT checks after any dose, not only with multi-day use.

**Sources:** US RAPIVAB label §12.3 Patients with Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §5.3, §12.3.4.3 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B18 · Hepatic dose (minor)

**Was:** No adjustment required

**Now:** No adjustment required (not studied; renally eliminated)

**Why:** The column is correct. The added words make clear that the advice is not based on a study.

**Sources:** US RAPIVAB label §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §12.3.4.3 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

### B19 · Pregnancy (minor)

**Was:** limited human data

**Now:** Limited human data (US §8.1; letter category retired); rats: renal papilla/ureter anomalies with continuous infusion; rabbits: abortion/premature delivery at maternally toxic dose<br>仿單: 利益大於風險時才使用<br>IDSA 2018: oseltamivir preferred in pregnancy

**Why:** The current text is correct but very short. Note: the Taiwan insert §8.1 still says 'FDA懷孕用藥分類為C級'. Do not copy that, because the letter categories are retired.

**Sources:** US RAPIVAB label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §8.1 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; IDSA 2018 guideline PMID 30566567 (pregnancy: 'Oseltamivir is also preferred over IV peramivir') — https://pubmed.ncbi.nlm.nih.gov/30566567/

### B20 · Notes (minor)

**Was:** Start within 48h of symptoms; useful when GI absorption impaired

**Now:** Start within 48h of symptoms; useful when GI absorption impaired<br>Efficacy not established in serious influenza requiring hospitalization (US §1/§14.3, 仿單 §1); IDSA: oseltamivir preferred for hospitalized patients<br>H275Y (N1) → reduced susceptibility to oseltamivir and peramivir, zanamivir retained

**Why:** Both labels place the hospitalization limitation in the indication section, and it should be visible in the column view. IDSA names H275Y as the resistance substitution that matters most and is cross-resistant with oseltamivir.

**Sources:** US RAPIVAB label §1, §12.4 Cross Resistance, §14.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §1 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de; IDSA 2018 PMID 30566567 (H275Y statement) — https://pubmed.ncbi.nlm.nih.gov/30566567/

### B21 · Page body (minor)

**Was:** Coverage: "Not effective against neuraminidase inhibitor-resistant strains"; Notes > Timing with Vaccination: "If peramivir given within 5 days before LAIV → may need revaccination"

**Now:** Coverage: "Reduced susceptibility with NA substitutions (e.g., H275Y in N1, R292K in N2); cross-resistance with oseltamivir/zanamivir; clinical impact unknown and may be strain dependent (US §12.4); 仿單 §12.4: efficacy retained against low-susceptibility strains of the same subtype; not active against influenza C (仿單 §1)". Timing with Vaccination: flag the '5 days before LAIV' line as needing a CDC/ACIP citation (not in US/TW label, whose window is LAIV within 2 weeks before or 48 h after peramivir); do not delete.

**Why:** The US label describes reduced susceptibility with a strain-dependent clinical effect, not a blanket 'not effective'. The 5-day LAIV window does not match the window the label states, and no label-tier source supports it.

**Sources:** US RAPIVAB label §7.1, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d; Taiwan insert v4 §1 — https://mcp.fda.gov.tw/insert/pdfcasefile/d2a947d2-b3f0-49fa-bb7a-ef8b0f0cb3de

## Verified correct as written

- Category 'Antiviral, neuraminidase inhibitor': matches FDA §11 and §12.4.
- Mechanism (inhibits viral neuraminidase, blocking release of virions): matches FDA §12.4. Body details also correct: sialic acid analogue, no activation needed, not significantly metabolized (§12.3).
- Indications tag 'Influenza': FDA §1 approves treatment of acute uncomplicated influenza in patients aged ≥6 months who have been symptomatic ≤2 days. The body's indication text matches §1.
- Coverage tags 'Influenza A', 'Influenza B': FDA §1 and §12.4. The body statement that efficacy data were mainly influenza A with few influenza B subjects matches §1 and §14.1.
- Pediatric dose: 6 months to under 13 years 12 mg/kg IV ×1 (max 600 mg); ≥13 years 600 mg ×1 (FDA §2.1).
- Adult dose: 600 mg IV single dose (FDA §2.1). Body infusion time of 15–30 min is correct.
- Renal column for the US label: CrCl ≥50 600 mg; 30–49 200 mg; 10–29 100 mg; on HD give after dialysis at the renally adjusted dose (FDA §2.2 Table 1, §8.6).
- Hepatic dose 'No adjustment required': consistent with FDA §12.3 (not studied; no relevant change expected).
- Pregnancy column 'limited human data': matches FDA §8.1. The body's rat data are correct: renal papilla and ureter findings at 400–1000 mg/kg/day continuous infusion, and no fetal effects at the 600 mg/kg bolus (~8× exposure). 'Not assigned (post-PLLR)' is correct.
- Monitor tags renal, neuro, CNS: renal function sets the dose (§2.2), and the label says to monitor for abnormal behavior (§5.2).
- Drug Interactions: the LAIV window of 2 weeks before or 48 h after (FDA §7.1) is correct. The body is correct that inactivated vaccine has no restriction, and that peramivir is not a CYP substrate, inducer or inhibitor, does not affect glucuronidation, and is not a P-gp substrate or inhibitor (§12.3).
- Body PK: half-life ~20 h, protein binding <30%, ~90% renal clearance of unchanged drug, dialyzable (FDA §12.3, §10).
- Body serious ADRs: anaphylaxis (postmarketing), SJS (postmarketing), erythema multiforme (clinical studies and postmarketing), exfoliative dermatitis (postmarketing), and neuropsychiatric events whose contribution is not established (FDA §5.1, §5.2, §6.2).
- Body: Study 301 in hospitalized patients failed to show benefit (FDA §14.3). Peramivir does not prevent bacterial complications (§5.3). Cross-resistance with oseltamivir and zanamivir (§12.4).
- Body breastfeeding: unknown if excreted in human milk, present in rat milk, consider an alternate for newborn or preterm infants (FDA §8.2; LactMed).
- Body summary table approval ages: oseltamivir ≥2 weeks, peramivir ≥6 months, zanamivir ≥7 years, baloxavir ≥5 years. These match current US labels from general knowledge; only peramivir was verified here.
- Category 'Antiviral, neuraminidase inhibitor': correct (US §11, §12.4; TW §11)
- Mechanism (inhibits viral neuraminidase and blocks release of virions from infected cells): correct (US §12.4; TW §12.4)
- Coverage tags Influenza A and Influenza B: correct and allowed by the schema (US §1/§12.4; TW §1)
- Indications tag 'Influenza': correct (US §1; TW §1)
- Renal column US values (CrCl ≥50: 600 mg; 30–49: 200 mg; 10–29: 100 mg; HD: after dialysis) match US §2.2 Table 1. They are correct for the 600 mg Rapivab dose; see B3 for the stocked product.
- Adult dose 600 mg IV single dose matches US §2.1. Body says infusion over 15–30 min, which is correct.
- Pediatric column: 6 mo–<13 y 12 mg/kg (max 600 mg) and ≥13 y 600 mg match US §2.1. Body paediatric renal 4 mg/kg / 2 mg/kg for ages 2–12 matches US Table 2.
- Drug Interactions LAIV wording (avoid 2 weeks before / 48 h after) matches US §7.1. Body: inactivated vaccine any time is correct. Not a CYP substrate/inhibitor, no effect on glucuronidation, not a P-gp substrate/inhibitor: correct (US §12.3).
- Pregnancy column 'limited human data' matches US §8.1 Risk Summary. Body animal data (renal papilla/ureter anomalies at 400–1000 mg/kg/day continuous infusion; no effects at 600 mg/kg bolus ≈8× human exposure) match US §8.1 Data. Body says 'Not assigned (post-PLLR)', which is correct.
- Body PK: about 90% renal clearance, t½ about 20 h, protein binding <30% (US §12.3; TW gives 0.3–1.8%), dialyzable (US §10/§12.3: HD lowers exposure by 73–81%): correct
- Body warnings: anaphylaxis and SJS postmarketing; erythema multiforme in clinical studies and postmarketing; exfoliative dermatitis postmarketing; neuropsychiatric events mostly in children with abrupt onset and rapid resolution, contribution not established (US §5.1, §5.2, §6.2): correct
- Body: diarrhoea is the most common ADR (US §6; TW §6). Insomnia, hypertension and AST rise occurred in the hospitalized subset (US §6.1).
- Body: a randomized trial in hospitalized patients showed no benefit (US §14.3 Study 301; de Jong, Clin Infect Dis 2014;59:e172-85, PMID 25115871, verified). IDSA 2018 says oseltamivir is preferred for hospitalized patients and that IV peramivir can be considered if enteral oseltamivir is contraindicated (PMID 30566567, verified).
- Body: 'single-dose peramivir equivalent to 5-day oseltamivir' is supported by TW §14.1.2. In the multinational phase 3 trial (244 Taiwanese patients), 300 or 600 mg was non-inferior to oseltamivir.
- Body: no evidence for prophylaxis and not active against non-influenza viruses/bacteria (US §5.3; TW §1 使用限制): correct
- Body Breastfeeding: present in rat milk (US §8.2), correct. Oseltamivir preferred matches LactMed alternatives (oseltamivir, zanamivir). 'Consider alternate agents for newborn or preterm infants' matches the LactMed summary.
- Body Monitor: renal function before dosing, hypersensitivity/skin reactions, neuropsychiatric signs, and secondary bacterial infection all match US §2.2, §5.1–5.3.
- UK SmPC: none. eMC has nothing for peramivir/Rapivab/Alpivab. The EU Alpivab authorisation (2018, adults and children ≥2 y) was withdrawn on 20 Nov 2020 at the holder's request and was never marketed (EMA EPAR). No UK/EU label applies.
- LactMed (NBK500785, rev. 2019-02-07) section text in peramivir.json matches the brief.

## Apply log

- Adult dose: merged 仿單 300 mg ≥15 min (max 600, 連續投與經驗有限), US 600 mg over 15–30 min, start within 48 h, hospitalized off-label 600 mg QD with FDA/Study 301 caveat
- Pediatric dose: 仿單 ≥1 month 10 mg/kg; US 12 mg/kg / 600 mg over 15–30 min; US renal 2–12 y (4 / 2 mg/kg); no recommendation for 6 mo–<2 y with CrCl <50
- Renal dose, HD, CRRT: 仿單 table (300/100/50 mg, <10/HD 審慎調整), US values incl. CrCl <10 not on HD no recommendation, HD 73–81% removal, CRRT case PK (PMIDs 22116989, 25345428, 20874039)
- Side Effects: [neutropenia, CNS, GI, LFT↑, dysglycemia, SJS/TEN, AKI]
- Monitor: [renal, neuro, CNS, LFT, CBC]
- Breastfeeding: LactMed (poor oral absorption; alternates oseltamivir/zanamivir), FDA 8.2 rat milk, 仿單 avoid breastfeeding
- Drug Interactions: LAIV unless medically indicated; inactivated vaccine no restriction; no CYP/P-gp/glucuronidation or listed PK interactions; nephrotoxic flagged as unsourced
- Notes: hospitalized efficacy not established + IDSA oseltamivir preferred; mainly influenza A data; H275Y note
- Hepatic dose: No adjustment required (not studied; renally eliminated)
- Pregnancy: US §8.1 limited data (letter category retired), animal data, 仿單 benefit>risk, IDSA oseltamivir preferred
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body: heading renamed to '## Peramivir (Rapivab/Rapiacta)'; pasted AI-chat line 'Would you like me to add this...' removed
- Body Indications: added 仿單 (Taiwan, Rapiacta) indication/limitations
- Body Coverage: NI-resistance line replaced with sourced NA-substitution/cross-resistance text (US §12.4, 仿單 §12.4, influenza C)
- Body Adult dose: added 仿單 (Rapiacta) row; Administration Details replaced with Rapiacta bag/Rapivab vial text and unsourced flags for 40 mg/min and IM
- Body Renal: <10 row changed to no labelled dose/審慎調整; added 仿單 300 mg table; HD dialyzable line sourced; CRRT bullets replaced with sourced case-PK text (Scheetz, Bentley, Bazan, Li, Dillon)
- Body Hepatic: sourced 'PK not studied...' line
- Body Pediatric: infusion 15–30 min (not 60); renal peds limited to 2–12 y with no-data note and 仿單 statement; 5-day line flagged unsourced; added repeated-dosing 仿單 and IDSA lines
- Body Side Effects: Common list replaced with US Table 4 / 仿單 figures, headache flagged unsourced; Serious table added hepatic dysfunction/jaundice, acute renal failure, leukopenia/neutropenia; neuropsychiatric Japan line sourced
- Body Monitor: added LFT soon after starting (仿單 §5.3)
- Body DI table LAIV: FDA §7.1 + ACIP 2024–25 citation; Timing with Vaccination 5-day line kept with ACIP citation and label-window note
- Body Notes: oseltamivir equivalence line replaced with non-inferiority trial statement; Resistance cross-resistance bullet sourced
- Body Pregnancy: US §8.1 and 仿單 statements, rabbit data added
- Body Breastfeeding: LactMed absorption line, LactMed alternates replacing 'Oseltamivir is preferred', 仿單 avoid breastfeeding, infant GI monitoring flagged unsourced
- Body Summary table: Peramivir age '≥6 months (US) / ≥1 month (TW)'
- Body: appended References section (DailyMed Rapivab, Taiwan insert v4 2025-03, LactMed NBK500785, IDSA 2018 PMID 30566567, ACIP PMID 39197095, Bazan, Scheetz, Bentley, Li, Dillon)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
