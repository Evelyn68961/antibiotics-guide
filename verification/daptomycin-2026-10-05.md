# Verification: Cubicin (Daptomycin)

- **Notion entry:** [Cubicin (Daptomycin)](https://app.notion.com/20dc496dfff180f98d09d0f017c6bee0)
- **Hospital codes:** CUB01 (Cubicin inj 500 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/daptomycin.json` (plus any `sources/daptomycin-taiwan-insert-*.txt`)

## Product and sources

FJUH CUB01: Cubicin 針 500 mg/vial (救必辛注射劑, daptomycin), NHI BC24565277, ATC J01XX09. Taiwan license 衛署藥輸字第024565號 (applicant 台灣東洋/TTY Biopharm; made by Patheon Italia, Monza); TFDA insert updated 111/10/21 (2022-10-21), paper insert dated 20191203. Reference labels: Taiwan insert (the stocked product; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F); US CUBICIN RF, Merck, DailyMed setid 0b1a8885-2198-4a0e-8105-0c76c1cba6c2 v22 (Jun 2025); UK Cubicin SmPC, eMC product 177 (rev. 11 Nov 2021); LactMed NBK501604 (rev. 2021-04-19). Notion page fetched 2026-01-19 version (last edited 2026-01-19); subpages 'Intro of Daptomycin' (AI-style prose) and 'Daptomycin dosing based on body weight' (only a link to PMC3910783 = Ng 2014, PMID 24145531) also reviewed.

## Agreed fixes applied in Notion (45)

### A1 · Pregnancy (error)

**Was:** Category B; limited human data; use if benefit \> risk

**Now:** No FDA letter category (letter categories retired; PLLR narrative). US 8.1 / 台灣仿單: limited published data insufficient to inform drug-associated risk of major birth defects/miscarriage; no adverse developmental outcomes in rats/rabbits at 2–4× the 6 mg/kg human dose (BSA). UK SmPC 4.6: no clinical pregnancy data; use only if clearly necessary (benefit > risk).

**Why:** The FDA has retired letter categories, so the owner's rules do not allow 'Category B' to be written as current. The label narrative supports the 'limited human data; benefit > risk' part. The body's 'Brief Summary for Database' repeats 'Category B' and should be fixed the same way. The body's 'FDA: Category B (historical; now replaced by PLLR narrative)' line is acceptable.

**Sources:** US FDA label (Cubicin RF, Merck) §8.1 Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC Cubicin §4.6 – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 救必辛 懷孕 section – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A2 · Coverage (error)

**Was:** MSSA, MRSA, Streptococcus, Enterococcus, Enterobacter, VRE

**Now:** MSSA, MRSA, Staphylococcus, MRSE, Streptococcus, E. faecalis, Enterococcus, VRE, Corynebacterium (remove Enterobacter)

**Why:** Daptomycin has no Gram-negative activity. UK SmPC 5.1 lists 'Inherently resistant organisms: Gram negative organisms'. The page body says 'No activity: Gram-negative organisms'. 'Enterobacter' is probably a mis-click for Enterococcus. US 12.4 and TW insert both list E. faecalis (vancomycin-susceptible) as clinically proven. In vitro data (≥90% of isolates at or below the breakpoint; clinical efficacy not established) cover E. faecium including VRE, S. epidermidis including methicillin-resistant (→ Staphylococcus/MRSE) and Corynebacterium jeikeium. SmPC 5.1 lists coagulase-negative staphylococci as commonly susceptible. All proposed tags already exist in the schema.

**Sources:** US FDA label §12.4 Microbiology (Antimicrobial Activity) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §5.1 Susceptibility / Inherently resistant organisms – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 抗菌活性 section – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A3 · Indications (error)

**Was:** Bacteremia, Endocarditis, Meningitis, SSTI, cUTI

**Now:** Bacteremia, Endocarditis, cSSTI (replace SSTI with cSSTI; remove Meningitis and cUTI)

**Why:** The approved indications are the same in US §1, UK SmPC 4.1 and the TW insert: complicated SSSI/cSSTI in adults and children 1–17 y, S. aureus bacteraemia (adults and 1–17 y), and right-sided S. aureus infective endocarditis in adults. Neither the FDA label nor the UK SmPC lists meningitis or UTI, so under the owner's rule they are not approved indications. The page body itself puts meningitis among off-label uses ('penetrates CSF poorly'). US §13.2 says daptomycin penetrates the blood-brain barrier only minimally in rats. The 'cSSTI' option already exists and matches the label wording (complicated infections, not all SSTI). Off-label uses can stay in the body or Notes.

**Sources:** US FDA label §1 Indications and Usage, §1.4 Limitations of Use – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.1 – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 2 適應症 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A4 · Adult dose (error)

**Was:** Bloodstream infection: 8-10mg/kg QD for 5-7d (from day of first negative blood culture)<br>complicated UTI: 6-10mg/kg QD for 5-10d<br>Endocarditis: 8-10mg/kg QD for 4-6 wks (from day of first negative blood culture)<br>SSTI: 4-6mg/kg QD for 5-14d (total duration)<br><br>常見劑量: 500-800mg IV QD

**Now:** 【仿單 TW/US/UK】cSSSI: 4 mg/kg IV q24h × 7–14 d (UK: 6 mg/kg if concurrent S. aureus bacteraemia)<br>S. aureus bacteremia incl. right-sided IE: 6 mg/kg IV q24h × 2–6 wk<br>IV push over 2 min or infusion over 30 min; never more often than once daily<br><br>【Off-label / guideline】Complicated SAB / endocarditis: 8–10 mg/kg q24h × 4–6 wk (IDSA MRSA 2011 PMID 21208910; AHA 2015 ≥8 mg/kg PMID 26373316; ESC 2023 10 mg/kg PMID 37622656)<br>VRE bacteremia: ≥10 mg/kg q24h (Britt 2017 PMID 28011602)<br>complicated UTI: 6-10mg/kg QD for 5-10d (source needed)<br>SSTI: 4-6mg/kg QD for 5-14d (total duration)<br><br>常見劑量: 500-800mg IV QD

**Why:** The field leaves out the label regimen (4 mg/kg for cSSSI, 6 mg/kg for SAB). US §12.3 says 'Doses of CUBICIN in excess of 6 mg/kg have not been approved', so the 8–10 mg/kg doses are off-label and should say so with a guideline citation. 'Bloodstream infection … 5-7d' contradicts the label duration for S. aureus bacteremia (2–6 weeks, US §2.4 and TW 3.1.4) and IDSA MRSA (≥2 weeks uncomplicated, 4–6 weeks complicated). It is unsafe as a generic line, so I propose replacing it. No label or guideline was found for 'cUTI 6-10 mg/kg × 5-10 d' or '常見劑量 500-800 mg'; both are plausible but unsourced, so they are kept and flagged rather than deleted. PMIDs 21208910, 26373316, 37622656 and 28011602 were checked with esummary.

**Sources:** US FDA label §2.2, §2.4, §12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.2 Posology – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 3.1.2 / 3.1.4 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; Liu C et al. IDSA MRSA guideline, Clin Infect Dis 2011 – PMID 21208910 https://pubmed.ncbi.nlm.nih.gov/21208910/; Baddour LM et al. AHA IE statement, Circulation 2015 – PMID 26373316 https://pubmed.ncbi.nlm.nih.gov/26373316/; Delgado V et al. 2023 ESC endocarditis guideline – PMID 37622656 https://pubmed.ncbi.nlm.nih.gov/37622656/; Britt NS et al. Clin Infect Dis 2017 (high-dose dapto VRE-BSI) – PMID 28011602 https://pubmed.ncbi.nlm.nih.gov/28011602/

### A5 · Renal dose, HD, CRRT (missing)

**Was:** CrCl \<30 or HD: q48h<br>CRRT: 6-8 mg/kg q24h

**Now:** CrCl \<30 (incl. HD, CAPD): 4 mg/kg (cSSSI) or 6 mg/kg (SAB) q48h; HD 日於透析後給藥 (TW/US/UK same)<br>腎功能不全: CPK + renal function more often than weekly<br>Pediatric renal impairment: dose not established<br>CRRT (off-label): 6–8 mg/kg q24h; q48h gives low AUC (Xu 2017 PMID 27628437; Xie 2020 PMID 32083673)

**Why:** The dosing interval is correct but incomplete. The TW insert, US §2.6 and UK SmPC 4.2 all specify the dose (4 or 6 mg/kg by indication), include CAPD, and say to give it after haemodialysis on dialysis days. US §8.6 and TW 6.7 call for CPK and renal monitoring more often than weekly. US §2.6 says pediatric renal dosing is not established. The CRRT line is plausible and supported by PK studies but has no citation: Xu 2017 found q24h up to 8 mg/kg suitable for CVVHDF and q48h inappropriate; Xie 2020 found 6 mg/kg q24h gave the best balance. Note that Vilay 2011 (PMID 20890189) instead proposed 8 mg/kg q48h for CVVHD. All PMIDs were checked with esummary/efetch.

**Sources:** Taiwan insert 腎功能不全病人 / 表三 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; US FDA label §2.6, §8.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.2 Renal impairment table – https://www.medicines.org.uk/emc/product/177/smpc; Xu X et al. Br J Clin Pharmacol 2017 – PMID 27628437 https://pubmed.ncbi.nlm.nih.gov/27628437/; Xie F et al. J Antimicrob Chemother 2020 – PMID 32083673 https://pubmed.ncbi.nlm.nih.gov/32083673/; Vilay AM et al. Crit Care Med 2011 – PMID 20890189 https://pubmed.ncbi.nlm.nih.gov/20890189/

### A6 · Pediatric dose (missing)

**Was:** 5-12 mg/kg q24h<br>not for neonates\<1 year

**Now:** cSSSI (≤14 d): 12–17 y 5 mg/kg; 7–11 y 7 mg/kg; 2–6 y 9 mg/kg; 1–\<2 y 10 mg/kg q24h<br>S. aureus bacteremia (≤42 d): 12–17 y 7 mg/kg; 7–11 y 9 mg/kg; 1–6 y 12 mg/kg q24h<br>Infuse 30 min (7–17 y) / 60 min (1–6 y); 兒童不可 2-min IV push<br>Avoid \<12 months (not only neonates)<br>Renal impairment: dose not established

**Why:** The range is correct but it does not give the age bands, and 'neonates <1 year' understates the restriction. The labels say avoid in all children under 12 months, not only neonates. The age-banded doses are the same in the TW insert (表一/表二), US §2.3/2.5 and UK SmPC 4.2. The page body already has a correct table, so the column should match it.

**Sources:** US FDA label §2.1, §2.3, §2.5, §5.7, §8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.2 Paediatric population – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 3.1.3/3.1.5 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A7 · Side Effects (missing)

**Was:** myopathy, rhabdomyolysis

**Now:** myopathy, rhabdomyolysis, GI, LFT↑, anemia, neuropathy, DRESS, SJS/TEN, AKI

**Why:** Every label lists these as warnings or major reactions: peripheral neuropathy (US 5.6), DRESS (US 5.4), SJS/TEN (US 6.2; UK SmPC 4.4 severe cutaneous reactions warning), tubulointerstitial nephritis and acute kidney injury (US 5.5/6.2, so the 'AKI' tag), and diarrhoea/vomiting as the most common reactions (US 6 highlights; 'GI' tag). Eosinophilic pneumonia (US 5.3) has no schema tag, so it goes in Notes (see A10). All proposed tags already exist.

**Sources:** US FDA label §5 Warnings and Precautions, §6 Adverse Reactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.4 – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 警語及注意事項 / 上市後經驗 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A8 · Drug Interactions (missing)

**Was:** Statins (↑myopathy risk — hold if possible), tobramycin, warfarin (false INR with some reagents)

**Now:** Statins (↑myopathy/CPK — consider temporarily holding; if co-given, check CPK more than weekly); other myopathy drugs e.g. fibrates, ciclosporin (UK SmPC); NSAIDs/COX-2 inhibitors (↓renal filtration → ↑dapto levels, additive renal effect — UK SmPC); tobramycin (small PK change, significance unknown — caution); warfarin (monitor anticoagulation for the first days — UK SmPC). Lab interference: false ↑PT/INR with some recombinant thromboplastin reagents — draw sample at trough

**Why:** The current content is correct (US §7.1/7.2, TW 交互作用). It leaves out the UK SmPC 4.5 interactions: NSAIDs/COX-2 inhibitors, other myopathy drugs (fibrates, ciclosporin), more frequent CPK checks when co-administration cannot be avoided, and warfarin monitoring. It also blurs the false-INR artefact, which is a drug–lab-test interaction (US §7.2), with a warfarin interaction.

**Sources:** US FDA label §7.1, §7.2, §12.3 Drug Interaction Studies – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.5 – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 7 交互作用 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A9 · Breastfeeding (unsupported)

**Was:** Low milk levels; generally compatible; monitor infant GI

**Now:** Very low milk levels (infant ≈0.1–0.5% of weight-adjusted maternal dose); no infant adverse effects reported; no special precautions (LactMed). US/TW label: infant dose ≈0.1% of maternal dose. UK SmPC: advises stopping breastfeeding (limited data). Monitor infant GI (theoretical/general antibiotic precaution — not in LactMed). Alternative: vancomycin

**Why:** LactMed's summary says 'No special precautions are required'. That conflicts with 'monitor infant GI', which no source used here supports (the body itself calls it 'theoretical'). The UK SmPC 4.6 is stricter ('breast-feeding should be discontinued'), and the page does not mention this. The body's '~0.1-0.5%' figure is correct per LactMed Drug Levels.

**Sources:** LactMed Daptomycin NBK501604 (Summary; Drug Levels; Alternate Drugs) – https://www.ncbi.nlm.nih.gov/books/NBK501604/; US FDA label §8.2 Lactation – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 哺乳 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A10 · Notes (missing)

**Was:** Not for pneumonia — inactivated by pulmonary surfactant<br>Monitor CPK weekly — myopathy is reversible if caught early<br>Consider high-dose (8-12 mg/kg) for serious VRE infections, endocarditis, osteomyelitis<br>Combination therapy may prevent resistance emergence (especially with rifampin for VRE, β-lactams for MRSA "seesaw effect")

**Now:** Keep the existing 4 lines and append:<br>Not for left-sided S. aureus IE; avoid \<12 months<br>Stop if CPK \>1000 U/L with myopathy symptoms or \>2000 U/L without (US/TW); do not dose more than once daily<br>Eosinophilic pneumonia (typically 2–4 wk): stop drug, give systemic steroids<br>只可用 0.9% NaCl 稀釋 (not dextrose-compatible)<br>Lower efficacy when CrCl 30–\<50 mL/min<br>High-dose \>6 mg/kg is off-label (IDSA MRSA 2011 PMID 21208910; Britt 2017 PMID 28011602); surfactant: Silverman 2005 PMID 15898002

**Why:** The existing lines are supported. US §1.4 says not for pneumonia, and Silverman 2005 shows surfactant inhibition. US §5.2 calls for weekly CPK; US 6.1 and §13.2 show the myopathy reverses. US §12.4 shows in vitro synergy with β-lactams, rifampin and aminoglycosides. The high-dose line is off-label and needs a citation. The column lacks label-critical items: CPK stop thresholds and once-daily-only dosing (US 5.2, TW 5.1.2), eosinophilic pneumonia (US 5.3, TW 嗜伊紅性白血球肺炎), the left-sided IE and under-1-year limits (US 1.4), dextrose incompatibility (US 2.9; this is a compatibility point, not storage), and reduced efficacy with moderate renal impairment (US 5.10). PMID 15898002 was checked with esummary.

**Sources:** US FDA label §1.4, §2.9, §5.2, §5.3, §5.10, §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 警語 5.1.2/5.1.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; Silverman JA et al. J Infect Dis 2005 – PMID 15898002 https://pubmed.ncbi.nlm.nih.gov/15898002/; Liu C et al. IDSA MRSA 2011 – PMID 21208910 https://pubmed.ncbi.nlm.nih.gov/21208910/; Britt NS et al. Clin Infect Dis 2017 – PMID 28011602 https://pubmed.ncbi.nlm.nih.gov/28011602/

### A11 · Monitor (missing)

**Was:** CPK, renal

**Now:** CPK, renal, neuro

**Why:** US 5.6 says 'Monitor for neuropathy and consider discontinuation' (peripheral neuropathy), and UK SmPC 4.4 says the same. The 'neuro' option exists. CPK (weekly; more often with statins or renal impairment) and renal monitoring are correct.

**Sources:** US FDA label §5.2, §5.6, §8.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.4 Peripheral neuropathy – https://www.medicines.org.uk/emc/product/177/smpc

### A12 · Hepatic dose (minor)

**Was:** No adjustment needed

**Now:** Mild–moderate (Child-Pugh A/B): no adjustment; Child-Pugh C: not studied — use with caution

**Why:** US §12.3, UK SmPC 4.2 and TW 肝功能不全病人 all say no adjustment for mild to moderate impairment. Severe (Child-Pugh C) has not been evaluated, and the SmPC advises caution.

**Sources:** US FDA label §12.3 Patients with Hepatic Impairment – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.2 Hepatic impairment – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 肝功能不全病人 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A13 · Mechanism (minor)

**Was:** calcium-dependent membrane insertion causing depolarization, ion leakage, and cell death; bactericidal; concentration-dependent killing

**Now:** calcium-dependent binding/insertion into Gram-positive cell membrane → rapid depolarization (ion leakage) → inhibition of DNA, RNA and protein synthesis → cell death with negligible lysis; rapid, concentration-dependent bactericidal (AUC/MIC, Cmax/MIC)

**Why:** This is essentially correct. The label adds the downstream step (loss of membrane potential stops DNA, RNA and protein synthesis; negligible cell lysis) and the PK/PD driver. 'Ion leakage' is not stated in the labels but is not contradicted.

**Sources:** US FDA label §12.4 Mechanism of Action – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §5.1 Mechanism of action / PK-PD – https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 作用機轉 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A14 · Page body (unsupported)

**Was:** Adult Dose: "Dosing weight: Use total body weight (TBW); if TBW \>120% IBW, consider adjusted body weight (ABW)"

**Now:** Dosing weight: actual (total) body weight; labels make no obesity adjustment (US 12.3; UK SmPC 4.4). IBW-based dosing gave similar outcomes in one cohort (Ng 2014, PMID 24145531) — institutional/off-label

**Why:** US §12.3 (Obese Patients) says 'No adjustment of CUBICIN RF dosage is warranted in obese patients'; that study dosed by total body weight. UK SmPC 4.4 says 'no evidence that a dose reduction is required'. The ABW rule above 120% IBW is unsourced. The only reference on the subpage is Ng 2014, an IBW-vs-actual-weight study, which is not an adjusted-weight rule (PMID checked).

**Sources:** US FDA label §12.3 Obese Patients – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.4 Obesity – https://www.medicines.org.uk/emc/product/177/smpc; Ng JK et al. Antimicrob Agents Chemother 2014 – PMID 24145531 https://pubmed.ncbi.nlm.nih.gov/24145531/

### A15 · Page body (minor)

**Was:** Adult Dose table: S. aureus bacteremia 6-10 mg/kg; Right-sided endocarditis 6-10 mg/kg 4-6 weeks; VRE 8-12 mg/kg; Bone/joint 6-8 mg/kg (no label/off-label distinction)

**Now:** Mark the label dose separately: 'S. aureus bacteremia / right-sided IE: 6 mg/kg q24h × 2–6 wk (label); 8–10 mg/kg off-label (IDSA MRSA 2011, AHA 2015)'. Mark the VRE and bone/joint rows 'off-label' and cite IDSA MRSA 2011 (osteomyelitis 6 mg/kg) and Britt 2017 (VRE)

**Why:** US §12.3 says doses above 6 mg/kg are not approved, and the label SAB duration is 2–6 weeks. Off-label rows should be labelled and cited.

**Sources:** US FDA label §2.4, §12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Liu C et al. IDSA MRSA 2011 – PMID 21208910 https://pubmed.ncbi.nlm.nih.gov/21208910/; Britt NS et al. 2017 – PMID 28011602 https://pubmed.ncbi.nlm.nih.gov/28011602/

### A16 · Page body (minor)

**Was:** Renal: "Hemodialysis: Dose post-HD; q48h or TIW after dialysis" and "When HD schedule creates \>48h gap, the next dose may need to be increased by 1.5×"; CRRT bullets uncited

**Now:** Label: q48h, after HD on dialysis days. Off-label: thrice weekly after HD, with +50% dose before the 72-h interdialytic gap (Butterfield 2013, PMID 23208714). CRRT bullets: cite Xie 2020 (PMID 32083673, the quoted sentence is its conclusion) and Xu 2017 (PMID 27628437: CVVHD q24h up to 12 mg/kg; CVVHDF up to 8 mg/kg)

**Why:** The content is plausible and supported by PubMed studies (PMIDs checked), but it has no citations and does not say that thrice-weekly dosing is off-label. The quoted CRRT sentence is copied from the Xie 2020 abstract and needs attribution.

**Sources:** Butterfield JM et al. Antimicrob Agents Chemother 2013 – PMID 23208714 https://pubmed.ncbi.nlm.nih.gov/23208714/; Xie F et al. 2020 – PMID 32083673 https://pubmed.ncbi.nlm.nih.gov/32083673/; Xu X et al. 2017 – PMID 27628437 https://pubmed.ncbi.nlm.nih.gov/27628437/; US FDA label §2.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### A17 · Page body (unsupported)

**Was:** Side Effects: "Myopathy, rhabdomyolysis (2-14% incidence)"; Common: constipation, nausea, injection site reactions

**Now:** CPK elevation: 2.8% (cSSSI, 4 mg/kg) and 7% (8/120; SAB, 6 mg/kg; 9.2% had CPK >500 U/L); symptomatic myopathy rare (0.2% in cSSSI trials); rhabdomyolysis: post-marketing, frequency not known. Common (US): diarrhoea, headache, dizziness, rash, abnormal LFTs, insomnia, pruritus. Common (UK SmPC 4.8): GI/abdominal pain, nausea, vomiting, constipation, diarrhoea, infusion-site reactions

**Why:** No source supports the 2–14% figure; the label numbers are given in the proposed text. The current US §6 tables do not list constipation or injection-site reactions (nausea appears only post-marketing). This is a minor accuracy issue.

**Sources:** US FDA label §6.1 Laboratory Changes, Tables 7–9, §6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### A18 · Page body (unsupported)

**Was:** Drug Interactions table: "Live vaccines — May reduce vaccine efficacy — Avoid concurrent use"; "Other myotoxic agents (fibrates, colchicine)"

**Now:** Add row: 'NSAIDs/COX-2 inhibitors — ↓renal filtration may ↑daptomycin levels, additive renal effects — caution (UK SmPC 4.5)'. Change live-vaccine row to: 'Live bacterial vaccines (e.g. BCG, oral typhoid) — general antibacterial precaution; not in daptomycin labels (unsourced)'. Change myotoxic row to: 'Other myopathy-associated agents: fibrates, ciclosporin (UK SmPC 4.4); colchicine (unsourced)'.

**Why:** The US, UK and TW labels do not list a live-vaccine interaction (this is generic antibacterial/live-bacterial-vaccine text). Colchicine is not named in any label. The SmPC names fibrates and ciclosporin, plus the NSAID interaction the page leaves out.

**Sources:** UK SmPC §4.4, §4.5 – https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §7 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### A19 · Page body (minor)

**Was:** Pharmacokinetics: "Elimination: ~78% renal (unchanged drug)"

**Now:** Elimination: mainly renal — ~78% of dose recovered in urine as total radioactivity (~52% as microbiologically active drug); 5.7% faeces

**Why:** US §12.3 Excretion: the 78% figure is total radioactivity, not unchanged drug. Other PK values were checked and are correct: protein binding 90–93% (84–88% when CrCl <30), Vss ≈0.1 L/kg, t½ ≈8 h rising to ≈28 h in severe renal impairment.

**Sources:** US FDA label §12.3 Distribution / Excretion / Table 13 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### A20 · Page body (minor)

**Was:** Indications 'Off-label uses: Left-sided endocarditis (limited data, poor outcomes in trials)' while 'NOT indicated for: Left-sided S. aureus endocarditis'; Brief Summary Indications mixes VRE/osteomyelitis with approved uses

**Now:** Keep left-sided S. aureus IE only under 'NOT indicated' (US 1.4). In the Brief Summary, write 'Approved: cSSSI, S. aureus bacteremia incl. right-sided IE; off-label: VRE, osteomyelitis; NOT for pneumonia'

**Why:** The page contradicts itself. US §1.4 and UK SmPC 4.4 say efficacy in left-sided S. aureus IE has not been shown and outcomes were poor.

**Sources:** US FDA label §1.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.4 RIE – https://www.medicines.org.uk/emc/product/177/smpc

### A21 · Page body (minor)

**Was:** Coverage table: Corynebacterium spp. ✓; VISA/hVISA 'Variable (often used)'; VRSA 'Limited data'; CLSI breakpoints 'Enterococci: ≤4 mg/L (susceptible)'

**Now:** Corynebacterium jeikeium, E. faecium/VRE, S. epidermidis, S. haemolyticus: in vitro only, clinical efficacy not established (US 12.4 / TW 抗菌活性). Breakpoints: S. aureus & β-haemolytic streptococci S ≤1 mg/L (TW 表十一; EUCAST per UK SmPC 5.1). Enterococci — CLSI 2019+: E. faecalis & other enterococci S ≤2 / I 4 / R ≥8 (6 mg/kg/day); E. faecium SDD ≤4 / R ≥8 (8–12 mg/kg/day) (Satlin 2020, PMID 31504338); older FDA/TW insert value ≤4 for vancomycin-susceptible E. faecalis. VISA/hVISA and VRSA rows: unsourced.

**Why:** US §12.4 and TW 抗菌活性 list only C. jeikeium, and only as in vitro data. The TW insert's Table 11 limits the ≤4 enterococcal breakpoint to vancomycin-susceptible E. faecalis. The current US label points to the FDA STIC page, which I could not reach to confirm the present enterococcal interpretive criteria. The VISA and VRSA statements have no source.

**Sources:** US FDA label §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 表十一 感受性解釋基準 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### A22 · Page body (unsupported)

**Was:** Pregnancy: "AU TGA pregnancy category B1"; "Case reports describe successful use in 2nd/3rd trimesters"

**Now:** Keep but mark as unverified (needs a TGA/PubMed citation), or replace with label text: 'US 8.1: limited data insufficient to inform risk; UK SmPC 4.6: no clinical data, use only if clearly necessary'

**Why:** Neither statement is covered by the US, UK, TW or LactMed sources. Both are plausible but uncited.

**Sources:** US FDA label §8.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/177/smpc

### A23 · Page body (minor)

**Was:** Subpage 'Intro of Daptomycin' — conversational AI-chat prose ("Here's an introduction to daptomycin:"); claims activity vs 'penicillin-resistant S. pneumoniae' and 'certain anaerobic Gram-positive bacteria'

**Now:** Remove the line "Here's an introduction to daptomycin:". Change the spectrum bullet to: Other Gram-positive bacteria, including MSSA, coagulase-negative staphylococci and β-haemolytic streptococci (S. pyogenes, S. agalactiae, S. dysgalactiae); S. pneumoniae — in vitro only, not in label activity lists, and daptomycin is not for pneumococcal pneumonia. Change the anaerobe bullet to: Certain anaerobic Gram-positive bacteria (Clostridium perfringens, Peptostreptococcus spp. — UK SmPC 5.1).

**Why:** Under the ground rules, pasted AI-chat text may be removed. The rest of its content repeats the main page.

**Sources:** UK SmPC §5.1 Susceptibility – https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### B1 · Adult dose (error)

**Was:** Bloodstream infection: 8-10mg/kg QD for 5-7d (from day of first negative blood culture)<br>complicated UTI: 6-10mg/kg QD for 5-10d<br>Endocarditis: 8-10mg/kg QD for 4-6 wks (from day of first negative blood culture)<br>SSTI: 4-6mg/kg QD for 5-14d (total duration)<br><br>常見劑量: 500-800mg IV QD

**Now:** cSSSI (仿單/FDA): 4 mg/kg IV q24h × 7-14d (UK SmPC: 6 mg/kg if concurrent S. aureus bacteraemia)<br>S. aureus bacteremia incl. right-sided endocarditis (仿單/FDA): 6 mg/kg IV q24h × 2-6 wks<br>Adults: IV push over 2 min or infusion over 30 min; once daily only (more frequent dosing ↑CPK)<br>Off-label high dose: 8-10 mg/kg QD for complicated/persistent SAB or endocarditis × 4-6 wks (from day of first negative blood culture) (IDSA MRSA 2011, PMID 21208910); 8-12 mg/kg QD for E. faecium/VRE (CLSI SDD basis, Satlin 2020 PMID 31504338; Britt 2017 PMID 28011602)<br>complicated UTI (off-label, source needed): 6-10mg/kg QD for 5-10d<br>SSTI: 4-6mg/kg QD for 5-14d (total duration)<br><br>常見劑量: 500-800mg IV QD

**Why:** The column leaves out the labelled doses altogether: 4 mg/kg for cSSSI and 6 mg/kg q24h for S. aureus bacteraemia/RIE. It presents off-label 8-10 mg/kg as the bloodstream-infection dose, which is the standard dose in none of the US, UK or Taiwan labels. The '5-7d' duration for bloodstream infection contradicts the US label and Taiwan insert ('6 mg/kg … for 2 to 6 weeks', US §2.4; 仿單 3.1.4 '連續治療2-6週'). It also conflicts with the IDSA MRSA 2011 guideline, which asks for at least 2 weeks even in uncomplicated SAB (PMID 21208910 verified via esummary; the full text could not be fetched behind the proxy). Support for 8-12 mg/kg in E. faecium: the CLSI 2019 SDD breakpoint is based on 8-12 mg/kg/day (Satlin 2020, PMID 31504338, abstract verified). No label or guideline was found for the cUTI line; it is flagged, not removed. The once-daily-only rule comes from US §5.2.

**Sources:** US FDA label CUBICIN RF §2.2, §2.4, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 救必辛 3.1.2, 3.1.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; UK SmPC Cubicin §4.2 — https://www.medicines.org.uk/emc/product/177/smpc; IDSA MRSA guideline 2011 (Liu C, Clin Infect Dis 52:e18) — https://pubmed.ncbi.nlm.nih.gov/21208910/; Satlin MJ et al. Clin Infect Dis 2020 (CLSI daptomycin enterococcal breakpoints) — https://pubmed.ncbi.nlm.nih.gov/31504338/

### B2 · Indications (error)

**Was:** Bacteremia, Endocarditis, Meningitis, SSTI, cUTI

**Now:** Bacteremia, Endocarditis, cSSTI

**Why:** Only cSSSI/cSSTI, S. aureus bacteraemia and right-sided S. aureus IE are approved in the FDA label, the UK SmPC and the Taiwan insert. Meningitis and cUTI appear in none of them. The page body itself lists meningitis as off-label ('penetrates CSF poorly'), and US §13.2 says 'penetrate the blood-brain barrier only minimally'. The schema has a 'cSSTI' option, which matches the label better than plain 'SSTI'. Off-label uses can stay in the body's Off-label section. The Endocarditis tag covers right-sided S. aureus IE only; left-sided IE is excluded (US §1.4).

**Sources:** US FDA label §1.1-1.4, §13.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 2.1-2.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### B3 · Coverage (error)

**Was:** MSSA, MRSA, Streptococcus, Enterococcus, Enterobacter, VRE

**Now:** MSSA, MRSA, Staphylococcus, MRSE, Streptococcus, E. faecalis, Enterococcus, VRE, Corynebacterium

**Why:** Enterobacter is Gram-negative. UK SmPC §5.1 says 'Inherently resistant organisms: Gram negative organisms', and SmPC §4.1 says 'active against Gram positive bacteria only'. US §12.4 and 仿單 10.1.1 list E. faecalis (VSE) with clinical activity. They list in-vitro activity only for S. epidermidis including methicillin-resistant isolates (→ MRSE), S. haemolyticus/CoNS (→ Staphylococcus), E. faecium including VRE, and Corynebacterium jeikeium. The SmPC also lists coagulase-negative staphylococci as commonly susceptible. Caveat for VRE: the label rates in-vitro data as 'clinical significance unknown', and SmPC §4.4 says evidence for enterococcal infections is insufficient.

**Sources:** UK SmPC §4.1, §4.4, §5.1 — https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 10.1.1 抗菌活性 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### B4 · Renal dose, HD, CRRT (missing)

**Was:** CrCl \<30 or HD: q48h<br>CRRT: 6-8 mg/kg q24h

**Now:** CrCl ≥30: no adjustment<br>CrCl \<30, HD, CAPD: 4 mg/kg (cSSSI) or 6 mg/kg (SAB) q48h; HD 日於透析後給 (仿單/FDA/UK 一致)<br>HD 72h interdialytic gap (off-label): consider ↑dose 50% (Patel 2011, PMID 21282429)<br>CRRT (off-label): 6-8 mg/kg q24h; q48h gives too low AUC; CVVHD up to 12 mg/kg q24h, CVVHDF ≤8 mg/kg (higher may ↑toxicity) (Xu 2017 PMID 27628437; Xie 2020 PMID 32083673)<br>兒童腎功能不全: 劑量未建立<br>CPK + renal function more often than weekly

**Why:** The q48h interval is correct, but the column leaves out the mg/kg doses, CAPD, the dosing-after-HD instruction, the fact that paediatric renal dosing has not been established, and the closer CPK/renal monitoring. 仿單 3.3.1 Table 3: '< 30 mL/min,包括血液透析及腹膜透析 每48小時一次4 mg/kg / 6 mg/kg … 應儘可能於血液透析後之當日投予'. US Table 3 and UK SmPC §4.2 match, so the labels agree. CRRT has no label guidance. Xu 2017 (PMID 27628437, verified) found 'Q24h dosing … up to 12 mg/kg' acceptable on CVVHD and 'up to 8 mg/kg' on CVVHDF, with q48h 'inappropriate'. Xie 2020 (PMID 32083673, verified) found '6 mg/kg q24h … best balance'. Patel 2011 (PMID 21282429, verified) supports a 50% dose increase before the 72-h interdialytic gap.

**Sources:** Taiwan insert 3.3.1, 6.7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; US FDA label §2.6, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.2 renal table — https://www.medicines.org.uk/emc/product/177/smpc; Xu X et al. Br J Clin Pharmacol 2017 — https://pubmed.ncbi.nlm.nih.gov/27628437/; Xie F et al. J Antimicrob Chemother 2020 — https://pubmed.ncbi.nlm.nih.gov/32083673/; Patel N et al. Antimicrob Agents Chemother 2011 — https://pubmed.ncbi.nlm.nih.gov/21282429/

### B5 · Hepatic dose (minor)

**Was:** No adjustment needed

**Now:** Mild–moderate (Child-Pugh A–B): no adjustment<br>Severe (Child-Pugh C): no data — use with caution

**Why:** UK SmPC §4.2 gives no adjustment for mild or moderate impairment (Child-Pugh B), and says 'No data are available in patients with severe hepatic impairment (Child-Pugh Class C). Therefore caution should be exercised'. US §12.3: severe hepatic impairment 'not been evaluated'.

**Sources:** UK SmPC §4.2 — https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §12.3 Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### B6 · Pediatric dose (missing)

**Was:** 5-12 mg/kg q24h<br>not for neonates\<1 year

**Now:** 1-17歲 (仿單/FDA/UK) q24h, 不可 2-min IV push:<br>cSSSI (≤14d): 12-17y 5 mg/kg; 7-11y 7 mg/kg; 2-6y 9 mg/kg; 1-<2y 10 mg/kg<br>S. aureus bacteremia (≤42d): 12-17y 7 mg/kg; 7-11y 9 mg/kg; 1-6y 12 mg/kg<br>Infuse 30 min (7-17y) / 60 min (1-6y)<br>Avoid <1 year (12 months)<br>腎功能不全: 劑量未建立

**Why:** A bare 5-12 mg/kg range cannot be used to dose. The labels give age-band tables: 仿單 3.1.3 Table 1 / 3.1.5 Table 2, US §2.3/§2.5, UK SmPC §4.2. The SmPC splits SAB into 2-6y and 1-<2y, both 12 mg/kg, so the dose is the same. 'Neonates <1 year' is wrong wording: neonates are under 28 days, while the label limit is 12 months (US §5.7 'younger than 12 months'). US §2.6 and §8.4: paediatric renal dosing is not established.

**Sources:** Taiwan insert 3.1.1, 3.1.3, 3.1.5, 5.1.7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; US FDA label §2.1, §2.3, §2.5, §5.7, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.2 paediatric table — https://www.medicines.org.uk/emc/product/177/smpc

### B7 · Side Effects (missing)

**Was:** myopathy, rhabdomyolysis

**Now:** myopathy, rhabdomyolysis, GI, anemia, LFT↑, neuropathy, DRESS, SJS/TEN, AKI

**Why:** All of these tags already exist in the schema. Support: UK SmPC §4.8 lists as common 'anaemia … nausea, vomiting, constipation, diarrhoea … liver function tests abnormal'. US §5.4/§5.6 and §6.2 cover DRESS, peripheral neuropathy, SJS/TEN, 'acute kidney injury, renal insufficiency, renal failure, and tubulointerstitial nephritis'. 仿單 5.1.4-5.1.6 matches. Eosinophilic pneumonia has no schema option, so it belongs in Notes (see B11).

**Sources:** UK SmPC §4.8 — https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §5.4-5.6, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 5.1.4-5.1.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### B8 · Monitor (minor)

**Was:** CPK, renal

**Now:** CPK, renal, neuro

**Why:** US §5.6: 'Monitor for neuropathy and consider discontinuation'. 仿單 5.1.6: '監控神經病變並考慮停藥'. CPK and renal are correct: US §5.2 and §8.6 call for weekly CPK, and for CPK and renal function more often than weekly in renal impairment.

**Sources:** US FDA label §5.2, §5.6, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 5.1.2, 5.1.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### B9 · Drug Interactions (minor)

**Was:** Statins (↑myopathy risk — hold if possible), tobramycin, warfarin (false INR with some reagents)

**Now:** Statins & other myopathy drugs (fibrates, ciclosporin): ↑myopathy — hold if possible; else CPK > weekly<br>Tobramycin: small non-significant PK changes — caution<br>NSAIDs/COX-2 inhibitors: ↓renal filtration → ↑daptomycin levels<br>Warfarin: monitor anticoagulation first days<br>Lab: false ↑PT/INR with some recombinant thromboplastin reagents (not warfarin-specific) — draw PT/INR at trough

**Why:** Describing the false INR as a 'warfarin' interaction is misleading. It is a lab-reagent artifact in any patient (US §7.2, 仿單 7.2). Separately, the SmPC advises monitoring anticoagulant activity for the first several days with warfarin. UK SmPC §4.5 adds NSAIDs/COX-2 inhibitors (reduced renal filtration). SmPC §4.4 names fibrates and ciclosporin as myopathy-risk drugs. Tobramycin is correct: US §12.3 gives Cmax/AUC changes of 12.7%/8.7% that were not statistically significant, and the SmPC says 'Caution is warranted'.

**Sources:** UK SmPC §4.4, §4.5 — https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §7.1, §7.2, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 7.1, 7.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### B10 · Pregnancy (error)

**Was:** Category B; limited human data; use if benefit \> risk

**Now:** FDA letter category retired (PLLR). Human data insufficient to assess risk; no adverse developmental outcomes in rats/rabbits at 2-4× human dose (FDA/仿單). UK SmPC: avoid unless clearly necessary.

**Why:** Under the ground rules, a letter category must not be shown as current. US §8.1: 'Limited published data … insufficient to inform a drug-associated risk … No evidence of adverse developmental outcomes'. 仿單 6.1 says the same. UK SmPC §4.6: 'should not be used during pregnancy unless clearly necessary'.

**Sources:** US FDA label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/177/smpc

### B11 · Notes (missing)

**Was:** Not for pneumonia — inactivated by pulmonary surfactant<br>Monitor CPK weekly — myopathy is reversible if caught early<br>Consider high-dose (8-12 mg/kg) for serious VRE infections, endocarditis, osteomyelitis<br>Combination therapy may prevent resistance emergence (especially with rifampin for VRE, β-lactams for MRSA "seesaw effect")

**Now:** Not for pneumonia — inactivated by pulmonary surfactant (PMID 15898002)<br>Not for left-sided S. aureus endocarditis; avoid <1 year<br>Monitor CPK weekly — myopathy is reversible if caught early<br>停藥: CPK >1000 U/L (~5×ULN) + 肌肉症狀, 或 >2000 U/L (≥10×ULN) 無症狀<br>Eosinophilic pneumonia (2-4 wks): stop + systemic steroids<br>↓efficacy if baseline CrCl <50 mL/min<br>Persistent/relapsing SAB: repeat cultures + daptomycin MIC (non-susceptibility can emerge on therapy)<br>Consider high-dose (8-12 mg/kg) for serious VRE infections, endocarditis, osteomyelitis (off-label)<br>Combination therapy may prevent resistance emergence (especially with rifampin for VRE, β-lactams for MRSA "seesaw effect") — in vitro synergy only in label

**Why:** Several key label warnings are missing from Notes, and the Monitor column is multi-select, so the thresholds have nowhere else to go. Sources: CPK thresholds US §5.2 / 仿單 5.1.2; eosinophilic pneumonia US §5.3 / 仿單 5.1.3; decreased efficacy at CrCl <50 US §5.10 / 仿單 5.1.10; persisting SAB and MIC US §5.9; left-sided IE and <1 year US §1.4. The surfactant mechanism is not in the labels; it is supported by Silverman 2005 (PMID 15898002, verified). The labels mention combination therapy only as in-vitro synergy (US §12.4).

**Sources:** US FDA label §1.4, §5.2, §5.3, §5.9, §5.10, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 5.1.2, 5.1.3, 5.1.10 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; Silverman JA et al. J Infect Dis 2005 — https://pubmed.ncbi.nlm.nih.gov/15898002/

### B12 · Breastfeeding (minor)

**Was:** Low milk levels; generally compatible; monitor infant GI

**Now:** Very low milk levels (infant ~0.1-0.5% of maternal weight-adjusted dose); no infant adverse effects reported; LactMed: no special precautions (alternative: vancomycin). US/仿單: infant exposure ≈0.1% of maternal dose. UK SmPC conservatively advises stopping breastfeeding. Monitor infant GI (general antibiotic precaution; not in LactMed record — unsourced).

**Why:** The column matches LactMed ('very low levels … No special precautions are required'; 0.1% and 0.5% in two cases), US §8.2 and 仿單 6.2 ('嬰兒暴露量約為母體的0.1%'). It does not mention that UK SmPC §4.6 is stricter: 'breast-feeding should be discontinued when Cubicin is administered'. Labels should be cited alongside LactMed. 'Monitor infant GI' is not in LactMed's daptomycin record; it is plausible but unsourced, so it is kept and flagged.

**Sources:** LactMed Daptomycin NBK501604 (rev. 2021-04-19) — https://www.ncbi.nlm.nih.gov/books/NBK501604/; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; Taiwan insert 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/177/smpc

### B13 · Page body (error)

**Was:** Coverage → CLSI Breakpoints: Enterococci: ≤4 mg/L (susceptible)

**Now:** CLSI (2019+): E. faecium SDD ≤4 / R ≥8 mg/L (based on 8-12 mg/kg/day); E. faecalis & other enterococci S ≤2 / I 4 / R ≥8 mg/L (6 mg/kg/day) (Satlin 2020, PMID 31504338). 仿單 Table 11 still lists the pre-2019 E. faecalis (VSE) ≤4 mg/L; US label defers to FDA STIC. Staphylococci/streptococci (except S. pneumoniae): S ≤1 mg/L (UK SmPC §5.1 EUCAST; 仿單 Table 11).

**Why:** The ≤4 enterococcal susceptible-only breakpoint is the pre-2019 value. Satlin 2020 (PMID 31504338, abstract verified): 'the pre-2019 CLSI susceptible-only breakpoint of ≤4 μg/mL … was no longer appropriate'; it gives E. faecium SDD ≤4 at 8-12 mg/kg/day and E. faecalis S ≤2 / I 4 / R ≥8. The old Taiwan insert table (≤4 for E. faecalis VSE) predates this revision. The staphylococcal ≤1 value is correct per SmPC §5.1 (EUCAST).

**Sources:** Satlin MJ et al. Clin Infect Dis 2020 — https://pubmed.ncbi.nlm.nih.gov/31504338/; UK SmPC §5.1 Breakpoints — https://www.medicines.org.uk/emc/product/177/smpc

### B14 · Page body (error)

**Was:** Pharmacokinetics → Elimination: ~78% renal (unchanged drug); Half-life: 8-9 hours (normal renal function); up to 28 hours with severe renal impairment

**Now:** Elimination: renal — ~78% of radiolabelled dose recovered in urine (total radioactivity), ~50% as unchanged daptomycin; ~5% faeces<br>Half-life: ~8-9 h (normal); ~28 h CrCl <30; ~30 h on HD

**Why:** UK SmPC §5.2: '78% of the administered dose was recovered from the urine based on total radioactivity, whilst urinary recovery of unchanged daptomycin was approximately 50%'. The page gives 78% as unchanged drug, which is wrong. US §12.3 Table 13 gives t½ 27.83 h for CrCl <30, 30.51 h for HD and 27.56 h for CAPD.

**Sources:** UK SmPC §5.2 — https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §12.3 Table 13 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### B15 · Page body (unsupported)

**Was:** Side Effects → Serious: Myopathy, rhabdomyolysis (2-14% incidence)

**Now:** CPK elevation: 2.8% (cSSSI, 4 mg/kg), 7% (SAB, 6 mg/kg; CPK >500 U/L in 9.2%); symptomatic myopathy with CPK >4×ULN 0.2% (cSSSI); rhabdomyolysis: post-marketing, frequency not known

**Why:** No label gives a 2-14% figure for myopathy or rhabdomyolysis. US §6.1: CPK elevation 15/534 (2.8%) in cSSSI; 8/120 (7%) in SAB, with 11/120 (9.2%) above 500 U/L; one cSSSI patient (0.2%) had symptoms with CPK >4×ULN. SmPC §4.8 lists rhabdomyolysis as 'Not known' (post-marketing).

**Sources:** US FDA label §6.1, Table 8, Laboratory Changes — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.8 — https://www.medicines.org.uk/emc/product/177/smpc

### B16 · Page body (unsupported)

**Was:** Adult Dose → Dosing weight: Use total body weight (TBW); if TBW \>120% IBW, consider adjusted body weight (ABW)

**Now:** Dosing weight: actual (total) body weight; label: no dose adjustment in obesity. Some centres use IBW dosing (single-centre data, similar outcomes — Ng 2014, PMID 24145531).

**Why:** US §12.3 (Obese Patients): 'No adjustment of CUBICIN RF dosage is warranted in obese patients'; UK SmPC §4.4 says the same. No label or verified study supports switching to ABW above 120% IBW. The page's own child page cites PMC3910783, which is Ng JK 2014 AAC (PMID 24145531, verified). That study compares IBW with actual-body-weight dosing, not ABW.

**Sources:** US FDA label §12.3 Obese Patients — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.4 Obesity — https://www.medicines.org.uk/emc/product/177/smpc; Ng JK et al. Antimicrob Agents Chemother 2014 — https://pubmed.ncbi.nlm.nih.gov/24145531/

### B17 · Page body (unsupported)

**Was:** Renal Dose Adjustment → CRRT dosing: 'The model predicted that the combination of 6 mg/kg q24h daptomycin dose and CRRT dose of 30-35 mL/h/kg would achieve the best balance of efficacy and safety.' / CVVHD 6-8 mg/kg (up to 12) / CVVHDF 6-8 mg/kg (>8 may ↑toxicity) / Note: >48h HD gap → ↑1.5×; Hemodialysis: q48h or TIW after dialysis

**Now:** Keep the content and add citations: 'The model predicted … (Xie 2020, PMID 32083673)'; CVVHD/CVVHDF lines (Xu 2017, PMID 27628437); '>48h gap → ↑50%' (Patel 2011, PMID 21282429); 'TIW after dialysis' (Salama 2010, PMID 20007981). Label HD regimen = q48h, after HD on HD days.

**Why:** The quoted sentence is copied word for word from the Xie 2020 JAC abstract with no citation. The CVVHD 'up to 12' and CVVHDF '≤8' lines match the Xu 2017 abstract. The 1.5× rule matches Patel 2011: 'consider increasing the dose by 50%' for the 72-h gap. Thrice-weekly post-HD 6 mg/kg matches Salama 2010. All four PMIDs were verified by esummary/efetch. The content is correct; only the attribution is missing.

**Sources:** Xie F et al. JAC 2020 — https://pubmed.ncbi.nlm.nih.gov/32083673/; Xu X et al. BJCP 2017 — https://pubmed.ncbi.nlm.nih.gov/27628437/; Patel N et al. AAC 2011 — https://pubmed.ncbi.nlm.nih.gov/21282429/; Salama NN et al. NDT 2010 — https://pubmed.ncbi.nlm.nih.gov/20007981/; US FDA label §2.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### B18 · Page body (unsupported)

**Was:** Drug Interactions table → 'Live vaccines — May reduce vaccine efficacy — Avoid concurrent use'; 'Other myotoxic agents (fibrates, colchicine)'

**Now:** Live bacterial vaccines (e.g. BCG, oral typhoid): general antibacterial precaution — not in daptomycin labels (unsourced)<br>Other myopathy-associated agents (fibrates, ciclosporin per UK SmPC; colchicine — unsourced)

**Why:** No live-vaccine interaction appears in the US §7, UK §4.5 or 仿單 §7 interaction sections. It is plausible only for live bacterial vaccines, so it is flagged rather than removed. UK SmPC §4.4 names 'HMG-CoA reductase inhibitors, fibrates and ciclosporin'; colchicine is not named.

**Sources:** UK SmPC §4.4, §4.5 — https://www.medicines.org.uk/emc/product/177/smpc; US FDA label §7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2

### B19 · Page body (error)

**Was:** Brief Summary for Database → Pregnancy: Category B; limited human data; use if benefit \> risk / Indications: Bacteremia, Endocarditis, cSSSI, VRE infections, Osteomyelitis

**Now:** Pregnancy: FDA letter category retired; human data insufficient; no adverse developmental outcomes in animal studies; UK: avoid unless clearly necessary<br>Indications: S. aureus bacteremia, right-sided S. aureus endocarditis, cSSSI (approved); VRE infections, osteomyelitis (off-label); NOT for pneumonia

**Why:** The summary repeats 'Category B' as current, against the ground rule and US §8.1. It mixes off-label uses (VRE, osteomyelitis) into the indications without labelling them; US §1 and SmPC §4.1 list only cSSSI/SAB/RIE. The body's Pregnancy section ('AU TGA B1', 'Case reports describe successful use in 2nd/3rd trimesters') is also unsourced; flagged, not removed.

**Sources:** US FDA label §1, §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.1, §4.6 — https://www.medicines.org.uk/emc/product/177/smpc

### B20 · Page body (minor)

**Was:** Adult Dose table → S. aureus bacteremia 6-10 mg/kg (2-6 wks); Right-sided endocarditis 6-10 mg/kg (4-6 weeks); Monitoring → Renal function: Baseline, then weekly

**Now:** S. aureus bacteremia / right-sided IE: 6 mg/kg q24h × 2-6 wks (label); 8-10 mg/kg off-label for complicated SAB/IE (IDSA MRSA 2011, PMID 21208910)<br>Renal function: baseline, then weekly; more often than weekly (with CPK) in adult renal impairment (US 8.6); UK SmPC: regular renal monitoring and CPK every 2-3 days for the first 2 weeks if CrCl \<80

**Why:** The label dose for SAB and RIE is 6 mg/kg for 2-6 weeks (US §2.4; 仿單 3.1.4). The upper end of the range is off-label and should be marked. US §5.2/§8.6: 'both renal function and CPK should be monitored more frequently than once weekly' in renal impairment. SmPC §4.4: CPK every 2-3 days in the first 2 weeks if CrCl <80 or on myopathy-associated drugs.

**Sources:** US FDA label §2.4, §5.2, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §4.4 — https://www.medicines.org.uk/emc/product/177/smpc; Taiwan insert 3.1.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

### B21 · Page body (minor)

**Was:** Child page 'Intro of Daptomycin': 'Here's an introduction to daptomycin:' and spectrum bullet listing 'penicillin-resistant Streptococcus pneumoniae'

**Now:** REMOVE the line "Here's an introduction to daptomycin:"; change the spectrum bullet to: Other Gram-positive bacteria, including MSSA, coagulase-negative staphylococci and β-haemolytic streptococci (S. pyogenes, S. agalactiae, S. dysgalactiae) — daptomycin is not used for pneumococcal pneumonia

**Why:** 'Here's an introduction to daptomycin:' is a pasted AI-chat preamble, which the ground rules allow to be removed. The rest of the intro mostly matches the labels. The streptococci that the labels support are S. pyogenes, S. agalactiae and S. dysgalactiae (US §12.4; SmPC §5.1 also lists Group G streptococci). S. pneumoniae is not in any label list, and the SmPC breakpoint explicitly excludes S. pneumoniae.

**Sources:** US FDA label §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/177/smpc

### B22 · Page body (missing)

**Was:** No official source / package-insert link anywhere on the page

**Now:** Add at end of body: References — 仿單 救必辛注射劑 Cubicin 500 mg (衛署藥輸字第024565號): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F ; US CUBICIN RF label: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b1a8885-2198-4a0e-8105-0c76c1cba6c2 ; UK SmPC: https://www.medicines.org.uk/emc/product/177/smpc ; LactMed: https://www.ncbi.nlm.nih.gov/books/NBK501604/

**Why:** The body is a long unsourced monograph. Linking the insert of the product the hospital stocks, and the other labels, lets readers check the label-based numbers.

**Sources:** TFDA insert platform — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024565%E8%99%9F

## Verified correct as written

- Category 'Cyclic lipopeptide': matches US §12.4, UK SmPC 5.1 and TW insert
- Renal interval: CrCl <30 including HD gives q48h, the same in the TW insert, US §2.6 and UK SmPC 4.2 (dose and CAPD details missing, see A5)
- Pediatric dose range 5–12 mg/kg q24h and avoidance under 1 year match TW, US and UK (age bands missing, see A6)
- Page-body pediatric table: all age bands and doses (cSSSI 5/7/9/10 mg/kg; bacteremia 7/9/12/12 mg/kg) match US Tables 1–2, UK SmPC 4.2 and TW 表一/表二; infusion 60 min for ages 1–6 and 30 min for 7–17, no IV push in children (US §2.1)
- Page-body adult cSSSI row: 4 mg/kg q24h × 7–14 d (US §2.2, TW 3.1.2)
- Hepatic: no adjustment in mild–moderate impairment (US §12.3, UK 4.2, TW)
- Monitor CPK and renal: correct (US 5.2/8.6, UK 4.2/4.4)
- Body monitoring table and discontinuation thresholds: CPK >1,000 U/L (~5×ULN) with symptoms or >2,000 U/L (≥10×ULN) without (US §5.2, TW 5.1.2); weekly CPK, more often with statins or renal impairment
- Side-effect tags myopathy and rhabdomyolysis (US §5.2)
- Drug interactions as listed: statin (consider suspending, US §7.1), tobramycin (US §12.3/UK 4.5), false PT/INR prolongation with recombinant thromboplastin reagents (US §7.2)
- Body: eosinophilic pneumonia text (fever, dyspnoea, hypoxic respiratory insufficiency, diffuse infiltrates, 2–4 weeks) matches US §5.3 and TW
- Body: DRESS, SJS/TEN, peripheral neuropathy, TIN, CDAD, anaphylaxis listed as serious ADRs (US §5/6.2)
- Body: not indicated for pneumonia or left-sided S. aureus IE (US §1.4); surfactant inactivation supported by Silverman 2005 (PMID 15898002, checked)
- Body: once-daily dosing only, since more frequent dosing raised CPK (US §5.2)
- Body: 0.9% NaCl only, not dextrose-compatible; ReadyMED elastomeric pump leaches 2-mercaptobenzothiazole (US §2.9)
- Body: IV push over 2 min allowed in adults only (US §2.1)
- Body: in vitro synergy with β-lactams, rifampin and aminoglycosides vs staphylococci and enterococci (US §12.4)
- Body PK: protein binding 90–93% (84–88% when CrCl <30), Vss ~0.1 L/kg, t½ 8–9 h rising to ~28 h in severe renal impairment (US §12.3)
- Body FDA-approved indications list (cSSSI ≥1 y; S. aureus bacteremia ≥1 y; right-sided IE in adults) matches US §1 and TW 2
- Body breastfeeding quote matches the LactMed summary verbatim; infant exposure ~0.1–0.5% matches LactMed Drug Levels
- Body CRRT statements are consistent with Xie 2020 (PMID 32083673) and Xu 2017 (PMID 27628437), both checked; uncited (see A16)
- Body HD note on a 1.5× dose before the 72-h gap is consistent with Butterfield 2013 (PMID 23208714, checked); uncited
- Body 'Brief Summary' Drug Interactions and Mechanism lines match the columns (accurate apart from A8/A13)
- Category 'Cyclic lipopeptide' — US §11/§12.4; UK SmPC §5.1 (ATC J01XX09)
- Mechanism column (calcium-dependent membrane binding → depolarisation → inhibition of DNA/RNA/protein synthesis → death; bactericidal; concentration-dependent) — UK SmPC §5.1 'binding (in the presence of calcium ions) … depolarisation'; US §12.4; 仿單 10.1.1. 'Ion leakage' is literature-level detail; plausible.
- Renal column: the q48h interval for CrCl <30 and HD is correct (US §2.6 Table 3, 仿單 3.3.1, UK §4.2 all agree). The CRRT 6-8 mg/kg q24h matches Xu 2017 (PMID 27628437) and Xie 2020 (PMID 32083673).
- Hepatic: no adjustment in mild-moderate impairment (US §12.3, UK §4.2)
- Pediatric: the 5-12 mg/kg q24h range and avoiding use under 1 year are correct (US §2.3/2.5, §5.7; 仿單 3.1.3/3.1.5; UK §4.2)
- Body paediatric table (12-17: 5/7; 7-11: 7/9; 2-6: 9/12; 1-<2: 10/12 mg/kg) matches the UK SmPC §4.2 table. US/TW group SAB 1-6y at 12 mg/kg, the same dose. Infusion 60 min for 1-6y and 30 min for 7-17y, no IV push in children: correct.
- Body administration: IV push over 2 min in adults only, 30-min infusion; dextrose incompatible; ReadyMED elastomeric pump leaches 2-mercaptobenzothiazole (US §2.1, §2.9; 仿單 3.2.4)
- Body CPK discontinuation thresholds (>1,000 U/L ~5×ULN with symptoms; >2,000 U/L ≥10×ULN without) — US §5.2, 仿單 5.1.2
- Body: once-daily dosing because CPK rises more with more frequent dosing — US §5.2
- Body: eosinophilic pneumonia 2-4 weeks after start, improves with stopping the drug plus steroids — US §5.3, 仿單 5.1.3
- Body serious ADRs (DRESS, SJS/TEN, peripheral neuropathy, TIN, CDAD, anaphylaxis) — US §5.1-5.8, §6.2
- Body common ADRs (constipation, nausea, diarrhoea, vomiting, headache, insomnia, dizziness, rash, pruritus, infusion-site reactions) — UK SmPC §4.8 'common'
- Body DI: statins (suspend temporarily) — US §7.1; tobramycin directions (daptomycin ↑, tobramycin ↓, not significant) — US §12.3; false PT/INR with recombinant thromboplastin — US §7.2
- Body PK: protein binding 90-93%, 88% at CrCl <30 / 86% HD / 84% CAPD; Vd ~0.1 L/kg — US §12.3
- Body 'Not indicated for pneumonia' and 'not for left-sided S. aureus IE' — US §1.4, 仿單 2.4. Surfactant inhibition supported by Silverman 2005 (PMID 15898002).
- Body breastfeeding LactMed quote and infant exposure '~0.1-0.5%' — LactMed NBK501604 Summary and Drug Levels (0.1% and 0.5%)
- Body FDA-approved indication list (cSSSI ≥1y, SAB ≥1y, right-sided IE in adults) — US §1.1-1.3
- Body coverage table: MSSA, MRSA, streptococci, E. faecalis, E. faecium/VRE (in vitro), CoNS, Corynebacterium (C. jeikeium); no Gram-negative activity — US §12.4, UK §5.1
- Body: resistance emerging during therapy is well documented — UK SmPC §5.1 'Mechanisms of resistance'; US §5.9
- Body staphylococcal breakpoint ≤1 mg/L — UK SmPC §5.1 (EUCAST); 仿單 Table 11
- Child page 'Daptomycin dosing based on body weight' cites PMC3910783 = Ng JK, AAC 2014, PMID 24145531 (verified)
- Breastfeeding column 'Low milk levels; generally compatible' — consistent with LactMed and US §8.2 (UK SmPC is stricter; see B12)
- Hospital product identification: the CUB01 page lists the indications, adult doses (4 mg/kg q24h 7-14 d; 6 mg/kg q24h 2-6 wk) and 1-17y IVD administration '(仿單)', which match the Taiwan insert

## Apply log

- Coverage -> MSSA, MRSA, Staphylococcus, MRSE, Streptococcus, E. faecalis, Enterococcus, VRE, Corynebacterium (Enterobacter removed)
- Indications -> Bacteremia, Endocarditis, cSSTI (SSTI replaced; Meningitis and cUTI removed)
- Side Effects -> myopathy, rhabdomyolysis, GI, LFT↑, anemia, neuropathy, DRESS, SJS/TEN, AKI
- Monitor -> CPK, renal, neuro
- Pregnancy column: two agreed proposals merged; PLLR narrative (US 8.1 / 仿單 / UK SmPC 4.6); no letter category
- Breastfeeding column: two agreed proposals merged (LactMed, US/仿單 ~0.1%, UK SmPC advises stopping, infant GI monitoring flagged as unsourced, vancomycin as alternative)
- Adult dose column: two agreed proposals merged; label doses (仿單 TW/US/UK) kept separate from off-label/guideline doses (IDSA 2011, AHA 2015, ESC 2023, Britt 2017, Satlin 2020); cUTI flagged 'source needed'; existing SSTI and 常見劑量 lines kept
- Renal dose, HD, CRRT column: two agreed proposals merged (label q48h after HD; 72h gap +50% per Patel 2011 and Butterfield 2013; CRRT per Xu 2017 and Xie 2020; pediatric dose not established; CPK and renal checks more often than weekly)
- Pediatric dose column: two agreed proposals merged (age-band doses for cSSSI and SAB, infusion times, no 2-min push, avoid <12 months, renal dose not established)
- Hepatic dose column: Child-Pugh A-B no adjustment; Child-Pugh C not studied, use with caution
- Mechanism column: updated to label wording
- Drug Interactions column: two agreed proposals merged (statins/fibrates/ciclosporin, NSAIDs/COX-2, tobramycin, warfarin, PT/INR lab interference with trough draw)
- Notes column: two agreed proposals merged; original 4 lines kept (with PMIDs, off-label wording and 'in vitro synergy only in label' added); added left-sided IE, <12 months, CPK stop thresholds, once-daily dosing, eosinophilic pneumonia, NaCl-only, CrCl <50 efficacy, persistent SAB MIC lines
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body Indications: removed 'Left-sided endocarditis' from the off-label list (it stays only under NOT indicated)
- Body Coverage table: C. jeikeium, E. faecium/VRE, S. epidermidis and S. haemolyticus marked in vitro only; VISA/hVISA and VRSA rows flagged unsourced; Breakpoints replaced with 仿單 表十一/EUCAST plus CLSI 2019+ enterococcal values (Satlin 2020) and the older ≤ 4 value noted
- Body Adult dose table: SAB and right-sided IE rows show 6 mg/kg (label) separately from 8-10 mg/kg (off-label, IDSA/AHA); VRE row marked off-label (Britt 2017); bone/joint row marked off-label (IDSA 2011)
- Body dosing weight: actual body weight per US 12.3 / UK SmPC 4.4; IBW use marked institutional/off-label (Ng 2014)
- Body HD row: label q48h after HD; off-label thrice weekly (Salama 2010) with +50% before the 72-h gap (Butterfield 2013); CRRT bullets now cite Xie 2020 and Xu 2017; the >48h gap note cites Patel 2011
- Body Side effects: '2-14% incidence' replaced with label CPK/myopathy/rhabdomyolysis figures; US and UK common adverse effects lines added
- Body Monitoring: renal function row updated (US 8.6; UK SmPC CPK every 2-3 days if CrCl <80)
- Body Drug interactions table: NSAIDs/COX-2 row added; live-vaccine row changed to live bacterial vaccines (unsourced); myotoxic row changed to fibrates, ciclosporin (UK SmPC) and colchicine (unsourced)
- Body Pregnancy: TGA B1 and case-report lines flagged unverified; US 8.1 / UK SmPC 4.6 label text added
- Body PK: half-life (8-9 h / 28 h / 30 h on HD) and elimination (78% urine total radioactivity, ~52% active drug, 5.7% faeces) updated
- Brief Summary: Indications, Adult dose and Pregnancy lines updated
- Child page 'Intro of Daptomycin': removed "Here's an introduction to daptomycin:"; spectrum bullet and anaerobe bullet rewritten per UK SmPC 5.1 / US 12.4
- References section added at end of page body: TW insert, US label, UK SmPC, LactMed and 13 cited PubMed sources with URLs

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
