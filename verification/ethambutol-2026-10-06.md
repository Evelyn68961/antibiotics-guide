# New entry: Epbutol (Ethambutol)

- **Notion entry:** [Epbutol (Ethambutol)](https://app.notion.com/3f1c496dfff18171ab4ec2db76859caa). Created 2026-10-06.
- **Hospital codes:** EPB01 (Epbutol tab 400 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/ethambutol.json` (plus any Taiwan insert text files)

## Product and sources

EPB01 Epbutol 400 mg tablet (易復癆錠), PO only. Taiwan licence 衛署藥製字第019877號, "優生"易復癆錠 / EPBUTOL TABLETS "YU SHENG", ethambutol HCl 400 mg, made by 優生製藥廠. I matched it through NHI code AB19877100 and the "YS EB" imprint, which I confirmed on the hospital P4 page (https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=EPB01). ATC J04AK02. Latest TFDA insert: 108-09-20 (2019-09-20). The US comparator label is a RemedyRepack generic (setid e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a, v6, Aug 17 2026). The UK comparator is Brown & Burk Ethambutol 100 mg SmPC, revised 11/06/2025. No IV or other dosage form exists or is stocked. The Notion page (created 2026-10-06) has only its title and Category; every other column and the page body are empty.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Epbutol 400 mg tab (EPB01). Never use alone: always with ≥1 other anti-TB drug the organism is susceptible to. Give once every 24 h only; food does not significantly alter absorption (US)<br>初治療 (no prior anti-TB therapy): 15 mg/kg QD (US, TW 仿單, UK)<br>再治療 (retreatment): TW 仿單 25 mg/kg QD; US/UK 25 mg/kg QD ×60 d → then 15 mg/kg QD. Monthly eye exam while on 25 mg/kg (US)<br>The US weight-dose table tops out at 1,500 mg/day (15 mg/kg, >97 kg) and 2,500 mg/day (25 mg/kg, >99 kg)<br>DS-TB (ATS/CDC/IDSA 2016, PMID 27516382): 2HRZE → 4HR. EMB is used only in the 2-month intensive phase and can be stopped as soon as DST shows INH + RIF susceptibility. Daily dosing preferred. Thrice weekly only for HIV-negative patients at low risk of relapse (Rec 3b). Twice weekly not generally recommended: only if daily/TIW DOT is not feasible, after 2 wk daily (Rec 3c)<br>NTM (off-label; ATS/ERS/ESCMID/IDSA 2020, PMID 32628747): MAC 15 mg/kg QD (daily regimen) or 25 mg/kg TIW (TIW regimen) + macrolide + rifamycin. RIF-susceptible M. kansasii: RIF + EMB + INH or macrolide

**Why:** New entry with an empty column. The label doses are consistent across US, TW and UK: 15 mg/kg for initial treatment; 25 mg/kg for retreatment, stepping down after 60 days (US/UK). The guideline adds that EMB is for the intensive phase only and can be dropped once susceptibility is known, and that twice-weekly dosing is not generally recommended. This matters because the hospital page lists twice-weekly doses. NTM dosing is taken from the verified NTM guideline Table 3.

**Sources:** US FDA label (DailyMed, RemedyRepack v6) DOSAGE AND ADMINISTRATION: Initial Treatment / Retreatment / Weight-Dose Table: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; Taiwan 仿單 衛署藥製字第019877號 §3.1 用法用量: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; UK SmPC 4.2 Posology: https://www.medicines.org.uk/emc/product/14174/smpc; Nahid P et al. ATS/CDC/IDSA Treatment of Drug-Susceptible TB, Clin Infect Dis 2016;63:e147 (PMID 27516382, verified via esummary): Preferred Regimen; Recommendations 3c/4b on twice-weekly dosing: https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Daley CL et al. ATS/ERS/ESCMID/IDSA NTM guideline 2020 (PMID 32628747 CID; PMID 32636299 ERJ, PMC8375621; both verified), Table 3 and Recommendation X (M. kansasii)

### A2 · Renal dose, HD, CRRT

Renally cleared (~50% unchanged in urine + 8–15% as metabolites) → marked accumulation in renal insufficiency (US Clin Pharm)<br>TW 仿單 (stocked product): 腎機能障礙者恐有引起積蓄作用，使用需注意 (no numeric dose)<br>US label: reduce dose as determined by serum EMB levels (no numbers given)<br>UK SmPC 4.2: preferably avoid in renal impairment. If CrCl <30: 15–25 mg/kg (max 2.5 g) 3×/week + monitor plasma EMB levels<br>ATS 2016: CrCl <30 or HD → lengthen the interval to thrice weekly; do not lower the dose (that lowers the peak). Postdialysis dosing of all anti-TB drugs preferred. CrCl >30: standard dose (insufficient data; 2 h & 6 h post-dose levels can help)<br>NTM guideline Table 3: increase interval (e.g., 15–25 mg/kg 3×/week)<br>PD: paucity of data → monitor toxicity ± serum levels (ATS 2016)<br>CRRT: no label/guideline data [flag] → consider TDM

**Why:** The stocked product's insert (TW) and the US label give no numbers. As the hierarchy requires, both are quoted first. The UK SmPC numbers (CrCl <30: three times a week) are added alongside. The ATS 2016 text agrees with UK: lengthen the interval rather than cut the dose, and dose after HD. The ATS dosing table itself (Table 12) could not be fetched, so the numeric dose is cited from UK SmPC and the NTM guideline Table 3, which I did verify. CRRT is not covered by any source and is flagged.

**Sources:** US label CLINICAL PHARMACOLOGY and PRECAUTIONS ('dosage reduced as determined by serum levels'): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; Taiwan 仿單 §5 警語(二): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; UK SmPC 4.2 Renal Impairment / 4.4 Renal function: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 (PMID 27516382) 'Renal Disease' section: 'Experts suggest a longer interval between doses (ie, thrice weekly) for PZA and EMB… Postdialysis administration… preferred': https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; NTM guideline 2020 ERJ Table 3 (PMID 32636299, PMC8375621)

### A3 · Hepatic dose

No dose adjustment (no label gives one; EMB is mainly renally cleared). Hepatotoxicity, including fatalities, has been reported (US Warnings), and TW 仿單 lists hepatitis, jaundice and rare hepatic failure → check LFT at baseline and periodically (US). UK: LFT if hepatitis symptoms appear.<br>ATS 2016: EMB is part of the liver-sparing alternative regimens in advanced liver disease, e.g. INH+RIF+EMB 2 mo → INH+RIF 7 mo (no PZA), or RIF+EMB+FQ/injectable/cycloserine 12–18 mo.

**Why:** Empty column. No label gives a hepatic dose. The warning and monitoring requirements come from the labels. The guideline supports the role of EMB in hepatic disease.

**Sources:** US label WARNINGS & PRECAUTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.4 Hepatic impairment, 4.8 Hepatobiliary: https://www.medicines.org.uk/emc/product/14174/smpc; Taiwan 仿單 §8 不良反應 肝膽疾病: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; ATS/CDC/IDSA 2016 (PMID 27516382) 'Hepatic Disease' section: https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### A4 · Pediatric dose

US label: not recommended <13 y (safe conditions not established). Contraindicated in patients who cannot report visual changes (e.g., young children)<br>UK SmPC (children): primary & re-treatment 25 mg/kg QD ×60 d → 15 mg/kg QD. Prophylaxis 15 mg/kg QD. Routine eye exams may be desirable in young children. Rash + fever may be an EMB reaction (SCAR) (UK 4.4)<br>TW 仿單: no pediatric dosing<br>ATS 2016: same regimens as adults; EMB may be omitted from the initial regimen in young children only in uncommon circumstances. AAP (cited in ATS 2016): can be used routinely in infants/children unless contraindicated. Check visual acuity + red-green colour monthly if the child is old enough to cooperate; weigh risk/benefit if vision cannot be monitored

**Why:** Empty column. The labels disagree (US says not recommended under 13; UK gives doses), so both are stated. The contraindication for children who cannot report visual symptoms is clinically critical.

**Sources:** US label PRECAUTIONS Pediatric Use; CONTRAINDICATIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.2 Children; 4.4 Ocular toxicity: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 (PMID 27516382), Treatment Regimens ('acceptable to omit EMB… for young children'): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### A5 · Indications

Tuberculosis, NTM

**Why:** Tuberculosis: US (pulmonary TB), UK (primary and re-treatment) and TW (結核病). NTM is not a labelled indication, but the major guideline recommends EMB as a core drug for MAC and M. kansasii (UK 5.1 also notes activity against M. kansasii). The UK SmPC lists 'prophylaxis in inactive TB / large tuberculin reaction', which would qualify for an LTBI tag under the 'FDA or UK' rule. However, the CDC/NTCA 2020 LTBI guideline contains no ethambutol regimen (0 mentions in the PMC text). I therefore suggest not tagging LTBI and mentioning it in Notes instead; the owner may prefer to add the LTBI tag under the label rule.

**Sources:** US label INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.1 and 5.1: https://www.medicines.org.uk/emc/product/14174/smpc; Taiwan 仿單 §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; NTM guideline 2020 (PMID 32628747 / 32636299); Sterling TR et al. LTBI guidelines NTCA/CDC 2020, MMWR Recomm Rep 69(1) (PMID 32053584, verified; PMC7041302)

### A6 · Coverage

Mycobacteria

**Why:** US: active against M. tuberculosis; 'does not seem to be active against fungi, viruses, or other bacteria'. UK 5.1: M. tuberculosis and M. bovis (MIC 0.5–8 µg/mL) and some atypical mycobacteria, including M. kansasii. Mycobacteria is the only applicable existing option.

**Sources:** US label CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/14174/smpc

### A7 · Side Effects

optic neuropathy, neuropathy, LFT↑, hyperuricemia, hypersensitivity, SJS/TEN, DRESS, thrombocytopenia, leukopenia, neutropenia, GI, CNS

**Why:** All of these are existing schema options. Optic neuritis/neuropathy (US Warnings/AR; UK 4.4/4.8 uncommon; TW 仿單 視毒性). Peripheral neuritis with numbness and tingling (US AR; UK rare). Hepatotoxicity including fatal cases (US; TW; UK). Hyperuricaemia/gout (US; UK uncommon). Hypersensitivity/anaphylactoid reactions (US; UK). SJS/TEN and DRESS (UK 4.4 SCAR warning; US hypersensitivity syndrome). Thrombocytopenia, leucopenia, neutropenia (US; UK). GI upset (US; UK). Headache, dizziness, confusion, hallucinations (US; UK). Interstitial nephritis (UK, very rare) and pulmonary infiltrates have no exact tag and are left to Notes.

**Sources:** US label WARNINGS, ADVERSE REACTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.4, 4.8: https://www.medicines.org.uk/emc/product/14174/smpc; Taiwan 仿單 §5(四), §8: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F

### A8 · Monitor

eye exam, LFT, renal, CBC

**Why:** Eye exam: visual acuity (each eye), colour discrimination, ophthalmoscopy and perimetry at baseline. Periodically during therapy, and monthly when the dose is above 15 mg/kg (US). Monthly vision/colour questioning (TW 仿單). ATS 2016: monthly colour discrimination. LFT at baseline and periodically (US Warnings). Renal, hepatic and haematopoietic function periodically (US Precautions). Renal function before treatment (UK 4.2). TDM: plasma EMB levels if CrCl <30 (UK) or dose by serum levels in RI (US). Uric acid has no tag and should be mentioned in Notes.

**Sources:** US label WARNINGS, PRECAUTIONS, ADVERSE REACTIONS (visual testing): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.2, 4.4: https://www.medicines.org.uk/emc/product/14174/smpc; Taiwan 仿單 §5(三)(四): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; ATS/CDC/IDSA 2016 (PMID 27516382) 'Optic Neuritis': https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### A9 · Mechanism

Inhibits mycobacterial arabinosyltransferases (embCAB) → ↓arabinan/arabinogalactan cell-wall synthesis (Belanger 1996, PMID 8876238; Telenti 1997, PMID 9142129). Labels: diffuses into actively growing mycobacteria and inhibits synthesis of ≥1 metabolites → impaired metabolism, arrest of multiplication, cell death (US/TW 仿單). Bacteriostatic (UK 5.1). No cross-resistance with other anti-TB drugs; resistance emerges quickly in a step-like way if used alone.

**Why:** Empty column. The labels describe the mechanism only vaguely, so the molecular target is cited to two primary papers whose PMIDs I verified with esummary.

**Sources:** US label CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/14174/smpc; Taiwan 仿單 §10 藥理特性; Belanger AE et al. PNAS 1996;93:11919-24 (PMID 8876238, verified); Telenti A et al. Nat Med 1997;3:567-70 (PMID 9142129, verified)

### A10 · Drug Interactions

Al(OH)₃-containing antacids ↓EMB absorption (serum ~20%↓, urinary excretion ~13%↓) → avoid antacid for ≥4 h after the EMB dose (US). UK SmPC: avoid Al(OH)₃ antacids during treatment.<br>No CYP-mediated interactions in the labels (TW 仿單 §7: 無資料). EMB is not known to inhibit drug metabolism (LactMed).<br>The clinically important DDIs of a TB regimen come from the rifamycins and INH: check the companion drugs' entries and the Liverpool checker (hiv-druginteractions.org).

**Why:** Empty column. The aluminium antacid interaction is the only one in either label. The Liverpool pointer follows the specialist-drug ground rule.

**Sources:** US label PRECAUTIONS – Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.5: https://www.medicines.org.uk/emc/product/14174/smpc; LactMed NBK501335 'Effects in Breastfed Infants' (statement that ethambutol is not known to inhibit drug metabolism): https://www.ncbi.nlm.nih.gov/books/NBK501335/

### A11 · Pregnancy

No adequate human studies. Ophthalmic abnormalities reported in infants born to women on anti-TB regimens that included EMB. Teratogenic in mice/rabbits at high doses (cleft palate, exencephaly, vertebral anomalies) → use only if benefit justifies risk (US label). UK SmPC 4.6: not recommended unless benefit outweighs risk; crosses the placenta (UK 5.2).<br>ATS 2016: anti-TB drugs cross the placenta but do not appear teratogenic in humans. Treat when the probability of maternal TB is moderate to high. If PZA is excluded → INH + RIF + EMB for ≥9 months.<br>No current FDA pregnancy category (letter categories retired; the 'Category C' still printed on the US generic label is not current). 懷孕：效益大於風險時使用 (TB 治療優先)

**Why:** Empty column. Per the ground rules, the US label's 'Pregnancy Category C' must not be written as current. The content therefore comes from the label narrative, UK 4.6 and ATS 2016.

**Sources:** US label PRECAUTIONS – Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.6, 5.2: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 (PMID 27516382) 'Pregnancy and Breastfeeding': https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### A12 · Breastfeeding

LactMed (rev. 2024-08-15): acceptable. Doses ≤15 mg/kg/d give low milk levels; estimated infant dose ~0.5–0.9 mg/kg/d (3.4–5.7% of an infant dose). No adverse effects expected, especially in infants >2 months. Milk levels are not enough to treat infant TB. CDC: breastfeeding should not be discouraged. ATS 2016: breastfeeding encouraged if the mother is noninfectious and on first-line drugs.<br>Labels are more cautious: US: excreted in milk, use only if benefit > risk. UK 4.6: breastfeeding not recommended unless benefit outweighs risk.

**Why:** Empty column. LactMed is the designated source for breastfeeding. The labels' more cautious wording is noted, following the style of existing entries such as Linezolid and Cravit.

**Sources:** LactMed NBK501335 (rev 2024-08-15) Summary of Use & Drug Levels: https://www.ncbi.nlm.nih.gov/books/NBK501335/; US label Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 (PMID 27516382) 'Breastfeeding is encouraged…'

### A13 · Notes

⚠️ 視神經炎 Optic neuritis: dose- and duration-related (≈2.25% at standard doses; onset usually >1 month – ATS 2016). Decreased acuity, scotoma, red-green colour loss; unilateral or bilateral. Usually reversible if stopped promptly, but irreversible blindness has been reported (US Warnings). Baseline acuity + colour vision, then monthly colour testing (ATS). Stop EMB promptly if a visual abnormality is confirmed. 仿單: 治療前視力/視野/辨色力檢查；每月詢問視力；劑量 >15 mg/kg 每月視力檢查.<br>禁忌 Contraindications: hypersensitivity; known optic neuritis (unless clinical judgement allows); patients unable to report visual changes, e.g. young children or unconscious patients (US). UK: known optic neuritis and poor vision.<br>TW 仿單: 糖尿病患者、酒精中毒患者勿使用. Diabetic retinopathy, cataract or eye inflammation make visual monitoring harder (US Precautions).<br>Hepatotoxicity, including fatalities (US Warnings). SCARs (SJS/TEN/DRESS) → stop and never rechallenge (UK 4.4); hypersensitivity syndrome with rash, eosinophilia ± hepatitis/pneumonitis/nephritis/myocarditis (US).<br>↑uric acid / acute gout (US). Pulmonary infiltrates ± eosinophilia (US/UK). Interstitial nephritis (UK, very rare). Do not drive if vision is affected (UK 4.7).<br>No boxed warning. UK SmPC also lists prophylaxis (inactive TB / large tuberculin reaction), but EMB is not part of current LTBI regimens (CDC 2020, PMID 32053584).<br>院內僅 Epbutol 400 mg tab (EPB01); no IV form.

**Why:** Empty column. Every safety item that has no tag is collected here with its source. The Taiwan insert's diabetes/alcoholism caution must appear because the hospital stocks that product.

**Sources:** US label CONTRAINDICATIONS, WARNINGS, PRECAUTIONS, ADVERSE REACTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC 4.1, 4.3, 4.4, 4.7: https://www.medicines.org.uk/emc/product/14174/smpc; Taiwan 仿單 §5 警語(一)–(四): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; ATS/CDC/IDSA 2016 (PMID 27516382) 'Optic Neuritis'; Sterling TR et al. MMWR 2020 (PMID 32053584)

### A14 · Page body

Add a page body in the owner's monograph layout, built only from the agreed columns: ## Category / Mechanism / Indications / Coverage / Adult Dose / Renal Dose, HD, CRRT / Hepatic Dose / Pediatric Dose / Side Effects / Monitor / Drug Interactions / Notes / Pregnancy / Breastfeeding. End with ## References: US DailyMed ethambutol HCl tablets setid e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC eMC 14174 (rev 11/06/2025); TW 仿單 衛署藥製字第019877號 (2019-09-20); LactMed NBK501335 (rev 2024-08-15); ATS/CDC/IDSA DS-TB 2016 PMID 27516382; ATS/ERS/ESCMID/IDSA NTM 2020 PMID 32628747 (ERJ PMID 32636299); NTCA/CDC LTBI 2020 PMID 32053584; Belanger 1996 PMID 8876238; Telenti 1997 PMID 9142129. No storage/stability section. If a full body is not wanted, add at least the References list.

**Why:** The body is blank. Nothing is wrong, but a source list would make future re-verification easier. Leave it blank if the owner's other entries keep their bodies empty.

**Sources:** All source URLs listed in A1–A13

### B1 · Adult dose

<span color="blue">`PO`</span> Epbutol 400 mg tab (仿單 §3.1): 初治療 15 mg/kg QD; 再治療 25 mg/kg QD<br>US / UK: retreatment 25 mg/kg QD × 60 d → then 15 mg/kg QD (US D&A 'Retreatment'; UK §4.2). Once every 24 h only; food does not significantly alter absorption (US D&A). Never use alone: always combine with ≥1 other anti-TB drug the organism is susceptible to (US/UK)<br>Drug-susceptible pulmonary TB (ATS/CDC/IDSA 2016, PMID 27516382): 2HRZE → 4HR. EMB can be stopped as soon as DST shows INH + RIF susceptibility. Daily dosing preferred (Rec 3a). TIW intensive phase may be considered only if HIV-negative and low relapse risk (Rec 3b). BIW only if daily/TIW DOT is not feasible, after 2 wk daily, and only in HIV-negative, low-relapse-risk patients (Rec 3c). If the continuation phase is intermittent, TIW is preferred over BIW (Rec 4b)<br>Whole-tablet weight bands (400 mg tabs; ATS/CDC/IDSA EMB table, based on estimated lean body weight; max dose regardless of weight): 40–55 kg 800 mg; 56–75 kg 1,200 mg; 76–90 kg 1,600 mg QD [confirm against ATS 2016 Table 3 / MMWR 2003, PMID 12836625]<br>NTM (off-label; ATS/ERS/ESCMID/IDSA 2020, PMID 32628747): 15 mg/kg QD (daily regimen) or 25 mg/kg TIW (TIW for noncavitary nodular/bronchiectatic macrolide-susceptible MAC). MAC: macrolide + EMB + rifamycin. M. kansasii: RIF + EMB + INH or macrolide

**Why:** The page is new, so every column needs text. The stocked product's insert gives 15 mg/kg (initial treatment) and 25 mg/kg (retreatment) once daily with no step-down. The US label and UK SmPC add the 60-day step-down to 15 mg/kg, and that should be shown alongside. The ATS 2016 recommendations on daily vs intermittent dosing are quoted from the guideline text (Rec 3a/3b/3c/4a/4b), and EMB can be dropped once the isolate is susceptible. The weight-band numbers come from the ATS/CDC/IDSA whole-tablet EMB table. Its tables are images on idsociety.org, so I could not read them as text. The numbers match the 2003 MMWR table, and the mg/kg arithmetic checks out (800/40–55 kg = 14.5–20 mg/kg, etc.). The owner should confirm them against the PDF table before publishing. The NTM doses are quoted from Table 'Ethambutol 15 mg/kg per day \| 25 mg/kg per day' (daily \| three times weekly) in the 2020 NTM guideline.

**Sources:** TW 仿單 衛署藥製字第019877號 §3.1 用法用量 (初治療 15 mg/kg; 再治療 25 mg/kg): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; US FDA DailyMed DOSAGE AND ADMINISTRATION / Initial Treatment / Retreatment: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.2 Posology: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 DS-TB guideline, Recommendations 3a–3c, 4a–4b and 'EMB can be discontinued…' (PMID 27516382): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; ATS/ERS/ESCMID/IDSA NTM 2020 dosing table (PMID 32628747; ERJ version PMID 32636299, PMC8375621)

### B2 · Renal dose, HD, CRRT

TW 仿單 (院內品項): 腎機能障礙者恐有引起積蓄作用，使用需注意 (no numeric dose)<br>US: reduce dose as determined by serum EMB levels (main route of excretion is renal; marked accumulation in renal insufficiency)<br>UK §4.2: preferably avoid; if used, CrCl <30: 15–25 mg/kg (max 2.5 g) 3×/week + monitor plasma EMB<br>Guidelines: CrCl ≥30 → standard dose (insufficient data; 2 h/6 h serum levels can help). CrCl <30 or HD → keep the mg/kg dose and lengthen the interval to TIW; do not reduce the dose, because that lowers the peak (ATS/CDC/IDSA 2016). NTM 2020 table: 'increase dosing interval (e.g. 15–25 mg/kg 3×/week)'<br>HD: give after dialysis (ATS 2016: postdialysis administration of all anti-TB drugs preferred). EMB removal: 2% of dose in dialysate in older study (Malone 1999), but serum level fell by a mean 41% on a high-flux dialyzer (Chew 2017) → TDM<br>PD: paucity of data → monitor toxicity / serum levels (ATS 2016)<br>CRRT: no label or guideline dose. Case data only: CVVH with TDM-confirmed adequate levels (Sin 2018); extended daily dialysis cleared EMB 37–95 mL/min, starting at 15 mg/kg/day then TDM (Strunk 2016) → start 15 mg/kg q24h, then TDM + ID pharmacist

**Why:** The page is new. Per the ground rule, the stocked product's insert comes first, but it gives no numbers, so the US label (serum-level guided) and the UK values follow it. The ATS 2016 text supports increasing the interval to thrice weekly and dosing after HD. It also says standard doses for CrCl >30. The NTM 2020 table repeats '15–25 mg/kg, 3 times per week'. I verified the HD, CRRT and SLED points with PMIDs via esummary and abstracts. No study gives a CRRT dose, so that line is flagged as limited evidence.

**Sources:** TW 仿單 §5 警語(二): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; US FDA PRECAUTIONS + CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.2 Renal Impairment: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 'Renal Disease' section (PMID 27516382): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; NTM 2020 guideline dosing table (PMID 32628747 / PMC8375621); Malone 1999 AJRCCM, PMID 10228130; Chew 2017 AAC, PMID 28396542; Sin 2018 J Clin Pharm Ther, PMID 28895161; Strunk 2016 IJID, PMID 26518065

### B3 · Hepatic dose

No dose adjustment in any label (US/UK/仿單); mainly renally excreted (US: ~50% unchanged in urine, 8–15% as metabolites)<br>Hepatotoxicity reported: US Warnings — liver toxicities including fatalities → baseline + periodic LFT. UK §4.4/4.8 / 仿單 §8: hepatitis, jaundice, abnormal LFT, very rarely hepatic failure (in multidrug regimens) → check LFT if hepatitis symptoms or generally unwell<br>Advanced liver disease (ATS 2016): EMB is part of the less-hepatotoxic alternative regimens: no PZA → 2 mo INH+RIF+EMB then 7 mo INH+RIF; no INH/PZA → RIF+EMB + FQ, injectable or cycloserine for 12–18 mo; severe unstable disease → EMB + FQ + cycloserine + 2nd-line injectable for 18–24 mo. Check ALT/bilirubin every 1–4 wk for at least the first 2–3 months

**Why:** The page is new. No label gives a hepatic dose change. The US label carries a hepatotoxicity warning (fatal cases) with baseline and periodic LFTs. The ATS 2016 hepatic-disease section lists EMB-containing regimens for advanced liver disease, quoted from the guideline text.

**Sources:** US FDA WARNINGS + CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.4 Hepatic impairment, §4.8 Hepatobiliary: https://www.medicines.org.uk/emc/product/14174/smpc; TW 仿單 §8 肝膽疾病: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; ATS/CDC/IDSA 2016 'Hepatic Disease' section (PMID 27516382): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B4 · Pediatric dose

仿單: no paediatric dose<br>US: not recommended <13 y (safe conditions not established); contraindicated if unable to appreciate/report visual changes (e.g. young children)<br>UK §4.2 children: primary & re-treatment 25 mg/kg QD × 60 d → 15 mg/kg QD; prophylaxis 15 mg/kg QD. UK §4.4: routine eye exams may be desirable in young children; rash + fever may be a drug reaction (SCAR)<br>ATS 2016 / AAP: can be used routinely in infants and children unless contraindicated; monthly visual acuity + red-green colour testing if old enough to cooperate; weigh risk/benefit when vision cannot be monitored

**Why:** The page is new. The labels disagree: the US label does not recommend use under 13 years, while the UK SmPC gives weight-based paediatric doses. The AAP statement quoted in the ATS 2016 text supports routine paediatric use with vision monitoring. I left out the ATS paediatric mg/kg table values because the table could not be read as text.

**Sources:** US FDA PRECAUTIONS / Pediatric Use / CONTRAINDICATIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.2 Children, §4.4: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 'Children' section (PMID 27516382): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B5 · Indications

Tuberculosis

**Why:** The US label (pulmonary TB), the UK SmPC (primary treatment and re-treatment of TB) and the 仿單 (結核病) all list TB. The UK SmPC also lists 'prophylaxis in cases of inactive tuberculosis or large tuberculin positive reaction'. Under the approval rule (FDA or UK) that would qualify as LTBI. However, NTCA/CDC 2020 lists only INH/rifamycin LTBI regimens (3HP, 4R, 3HR, 6–9H). I therefore suggest leaving LTBI untagged and mentioning it in Notes; this is the owner's call. NTM is off-label (guideline only) and goes in Notes, consistent with the Klaricid entry, which keeps MAC in Notes.

**Sources:** US FDA INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.1: https://www.medicines.org.uk/emc/product/14174/smpc; TW 仿單 §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; NTCA/CDC LTBI 2020, PMID 32053584

### B6 · Coverage

Mycobacteria

**Why:** The US label covers M. tuberculosis only ('does not seem to be active against fungi, viruses, or other bacteria'). UK §5.1 covers M. tuberculosis and M. bovis (MIC 0.5–8 µg/mL) plus 'some atypical mycobacteria including M. kansasii'. The NTM 2020 guideline calls EMB 'the best companion drug' for macrolides in MAC. Mycobacteria is the only fitting option.

**Sources:** US FDA CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §5.1: https://www.medicines.org.uk/emc/product/14174/smpc; NTM 2020 guideline (PMID 32628747)

### B7 · Side Effects

optic neuropathy, LFT↑, hyperuricemia, neuropathy, GI, CNS, hematologic, thrombocytopenia, leukopenia, neutropenia, hypersensitivity, SJS/TEN, DRESS

**Why:** Each tag matches a label statement. Optic neuropathy: optic/retrobulbar neuritis, reduced acuity, scotoma, colour blindness and irreversible blindness (US Warnings/ADR; UK §4.4/4.8; 仿單 §5(四)). LFT↑: hepatitis, jaundice and fatal hepatotoxicity (US Warnings; UK §4.8; 仿單 §8). Hyperuricemia: raised uric acid and acute gout (US ADR; UK uncommon). Neuropathy: peripheral neuritis with numbness and tingling (US; UK rare). GI: anorexia, nausea, vomiting, abdominal pain (US). CNS: headache, dizziness, confusion, disorientation, hallucinations (US; UK). Hematologic, thrombocytopenia, leukopenia, neutropenia (US; UK). Hypersensitivity: anaphylactic/anaphylactoid reactions (US; UK). SJS/TEN and DRESS (UK §4.4 SCAR warning; US hypersensitivity syndrome with eosinophilia). Effects with no option go in Notes: pulmonary infiltrates/eosinophilia, interstitial nephritis, photosensitive lichenoid eruption, joint pain.

**Sources:** US FDA WARNINGS / ADVERSE REACTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.4, §4.8: https://www.medicines.org.uk/emc/product/14174/smpc; TW 仿單 §5, §8: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F

### B8 · Monitor

eye exam, LFT, renal, CBC, TDM

**Why:** Eye exam: baseline ophthalmoscopy, finger perimetry and colour discrimination; Snellen acuity in each eye before and during therapy, monthly when >15 mg/kg/day (US; 仿單 §5(三)(四): monthly questions about vision/colour, monthly exam above 15 mg/kg). ATS 2016 adds baseline Snellen + colour testing, then monthly colour testing. LFT: baseline and periodic (US Warnings). Renal and CBC: 'baseline and periodic assessment of… renal, hepatic, and hematopoietic' function (US Precautions); UK §4.2 asks for renal function before treatment. TDM: plasma EMB monitoring at CrCl <30 (UK §4.2); US renal dosing is serum-level guided; ATS 2016 lists reduced renal function as a TDM situation. Uric acid has no option and goes in Notes.

**Sources:** US FDA PRECAUTIONS / ADVERSE REACTIONS / WARNINGS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.2, §4.4: https://www.medicines.org.uk/emc/product/14174/smpc; TW 仿單 §5: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; ATS/CDC/IDSA 2016 'Optic Neuritis' and 'Therapeutic Drug Monitoring' (PMID 27516382); Alsultan & Peloquin 2014 Drugs, PMID 24846578

### B9 · Mechanism

Inhibits mycobacterial arabinosyltransferases (embCAB) → ↓ arabinan/arabinogalactan cell-wall synthesis (Belanger 1996, PMID 8876238; Telenti 1997, PMID 9142129). Labels: diffuses into actively growing mycobacteria and inhibits synthesis of one or more metabolites → impaired cell metabolism, arrest of multiplication, cell death (US; 仿單 §10); bacteriostatic (UK §5.1). MIC M. tuberculosis 0.5–8 µg/mL (UK). No cross-resistance with other anti-TB drugs; resistance emerges unpredictably and step-wise if used alone → always in combination; reduces emergence of INH resistance when co-administered (US). PK: peak 2–5 µg/mL 2–4 h after 25 mg/kg; ~50% unchanged + 8–15% as metabolites in urine, 20–22% unchanged in faeces (US); enters CSF only when meninges are inflamed; crosses placenta (UK §5.2)

**Why:** The page is new. All statements are taken from the labels. I left out a molecular target (e.g. arabinosyl transferase/embB) because none of the fetched sources states it. If the owner wants it, add it with a citation.

**Sources:** US FDA CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §5.1, §5.2: https://www.medicines.org.uk/emc/product/14174/smpc; TW 仿單 §10: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F

### B10 · Drug Interactions

Aluminium hydroxide antacids: ↓ EMB absorption (mean serum level −20%, urinary excretion −13%) → avoid concurrent use; give antacid ≥4 h after EMB (US); UK §4.5: avoid Al-hydroxide antacids during treatment. 仿單 §7: 無資料<br>No CYP-mediated interactions listed in any label; EMB is not known to inhibit drug metabolism (LactMed). The interaction burden of TB regimens comes from the rifamycins (see Rifampicin entry; ATS 2016) → check combination regimens with the Liverpool checker (hiv-druginteractions.org / hep-druginteractions.org)

**Why:** The page is new. The labels list only the antacid interaction. LactMed notes that ethambutol is not known to inhibit drug metabolism. ATS 2016 says the anti-TB drugs (especially rifamycins) cause most of the interactions. The Liverpool checker pointer follows the specialist-drug ground rule.

**Sources:** US FDA PRECAUTIONS / Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.5: https://www.medicines.org.uk/emc/product/14174/smpc; LactMed NBK501335 'Effects in Breastfed Infants': https://www.ncbi.nlm.nih.gov/books/NBK501335/; ATS/CDC/IDSA 2016 'Drug–Drug Interactions' (PMID 27516382)

### B11 · Pregnancy

No current FDA letter category (letter categories retired; the US generic label still prints legacy 'Category C' — not current). US: no adequate human studies; reports of ophthalmic abnormalities in infants born to women on anti-TB therapy including EMB; teratogenic in mice/rabbits at high doses → use only if benefit justifies risk. UK §4.6: not recommended unless benefit outweighs risk; crosses placenta (§5.2). ATS 2016: anti-TB drugs cross the placenta but do not appear teratogenic in humans; treat when maternal TB probability is moderate–high; if PZA is excluded → ≥9 mo INH + RIF + EMB. 懷孕：效益大於風險時使用 (TB 治療優先)

**Why:** The page is new. Per the ground rule, the legacy 'Category C' in the US label must not be written as current. ATS 2016 itself describes the letter system as 'previous' and being revised.

**Sources:** US FDA PRECAUTIONS / Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.6, §5.2: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 'Pregnancy and Breastfeeding' (PMID 27516382): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B12 · Breastfeeding

Acceptable (LactMed NBK501335, rev. 2024-08-15): maternal doses up to 15 mg/kg/day give low milk levels (infant ≈0.5–0.9 mg/kg/day, 3.4–5.7% of an infant dose); no adverse effects expected, esp. infant >2 months; milk levels do not treat infant TB. CDC: breastfeeding should not be discouraged. ATS 2016: breastfeeding encouraged if the mother is noninfectious and on first-line drugs. US: excreted in milk, use only if benefit outweighs risk; UK §4.6: not recommended unless benefit outweighs risk

**Why:** The page is new. LactMed is the designated source for breastfeeding. The more cautious US/UK label wording is shown alongside it.

**Sources:** LactMed NBK501335: https://www.ncbi.nlm.nih.gov/books/NBK501335/; ATS/CDC/IDSA 2016 (PMID 27516382); US FDA Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/14174/smpc

### B13 · Notes

Never monotherapy — resistance develops rapidly/step-wise if used alone (US; UK §5.1)<br>Optic neuritis (dose- and duration-related; ≈2.25% at standard doses, onset usually >1 month — ATS 2016): usually reversible if stopped promptly, but irreversible blindness reported. Baseline eye exam (acuity each eye, colour vision, perimetry, ophthalmoscopy); monthly vision checks when >15 mg/kg/day; patients must report any visual change; stop EMB if confirmed (US; UK §4.4; 仿單 §5). Cataract/diabetic retinopathy/ocular inflammation make monitoring harder (US). Do not drive if vision is affected (UK §4.7)<br>禁忌: hypersensitivity; known optic neuritis (UK: or poor vision) unless clinical judgement allows; patients unable to report visual changes (e.g. young children, unconscious) (US)<br>仿單: 糖尿病患者、酒精中毒患者勿使用; 腎功能障礙會蓄積<br>Hepatotoxicity incl. fatalities (US Warnings) — LFT baseline/periodic<br>SCAR: SJS/TEN/DRESS → stop immediately, never rechallenge (UK §4.4)<br>Hyperuricaemia / acute gout (no Monitor tag — check uric acid if symptomatic); pulmonary infiltrates ± eosinophilia; joint pain; photosensitive lichenoid eruption, interstitial nephritis (very rare, UK)<br>ATS 2016: stop EMB once DST shows INH + RIF susceptibility<br>Off-label NTM (no tag): MAC (macrolide + EMB + rifamycin; EMB is the key companion drug for preventing macrolide resistance) and M. kansasii (RIF + EMB + INH or macrolide) — ATS/ERS/ESCMID/IDSA 2020 (PMID 32628747)<br>LTBI: UK SmPC lists 'prophylaxis', but EMB is not in any NTCA/CDC 2020 LTBI regimen (PMID 32053584)<br>院內僅 400 mg 錠 (PO); no IV form. No boxed warning

**Why:** The page is new. The Notes column collects the safety points (the visual-toxicity contraindications are the key boxed-type warning for this drug, though the US label has no formal boxed warning), the 仿單-specific cautions (diabetes/alcoholism) that the hospital site omits, the UK SCAR warning (the brief did not mention it), and the untagged off-label uses.

**Sources:** US FDA CONTRAINDICATIONS / WARNINGS / ADVERSE REACTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK SmPC §4.1, §4.4, §4.8, §5.1: https://www.medicines.org.uk/emc/product/14174/smpc; TW 仿單 §5: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC019877%E8%99%9F; ATS/CDC/IDSA 2016 (PMID 27516382); NTM 2020 (PMID 32628747); NTCA/CDC LTBI 2020 (PMID 32053584)

### B14 · Page body

Add a monograph body using the Sulampi/Klaricid template: ## Category (Antimycobacterial, anti-TB 1st line; ATC J04AK02) / ## Mechanism (as B9) / ## Indications table (Label: TB — pulmonary TB [US], primary & re-treatment TB + 'prophylaxis' [UK], 結核病 [仿單] \| Guideline/off-label: MAC & M. kansasii [PMID 32628747]) / ## Coverage (M. tuberculosis, M. bovis, some NTM incl. M. kansasii/MAC; NOT active vs other bacteria, fungi, viruses) / ## Adult Dose table (as B1) / ## Renal Dose, HD, CRRT table (as B2) / ## Hepatic Dose / ## Pediatric Dose / ## Side Effects / ## Monitor / ## Drug Interactions / ## Notes / ## Pregnancy / ## Breastfeeding / ## References: DailyMed setid e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; eMC 14174; TFDA 仿單 衛署藥製字第019877號 (108-09-20); LactMed NBK501335; PMIDs 27516382, 32628747, 32053584, 10228130, 28396542, 26518065, 28895161, 24846578. No storage/stability section

**Why:** The page body is blank. The earlier clarithromycin review (B14) says filled entries carry a structured body that ends with a References list. I verified every PMID listed with NCBI esummary in this run. One side note on PMIDs: 31971933 is a 2020 Tdap MMWR, not the LTBI guideline; the correct LTBI PMID is 32053584. I could not re-check a filled page's body because Notion's Query Data Source hit its usage limit during this review (see product_identified).

**Sources:** verification/clarithromycin-2026-10-05.md B14 (body template); NCBI esummary of the PMIDs listed (2026-10-06)

### B15 · Category

Keep as is (optionally append 'ATC J04AK02')

**Why:** Correct. UK §5.1 says 'Pharmacotherapeutic group: Antimycobacterial, ATC code: J04AK02'. ATS 2016 names EMB as one of the 4 first-line drugs (INH, RIF, PZA, EMB). No change needed.

**Sources:** UK SmPC §5.1: https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016 (PMID 27516382)

## Apply log

- Adult dose: merged both reviewers' versions into one value: PO tag, the 仿單 doses (初治療 15 mg/kg, 再治療 25 mg/kg), US/UK retreatment 25 mg/kg x60 d then 15 mg/kg, the US weight-dose table caps, ATS 2016 regimen with recommendations 3a/3b/3c/4b, whole-tablet weight bands marked [confirm], and NTM off-label dosing
- Renal dose, HD, CRRT: merged the 仿單 caution (stocked product), US advice to dose by serum levels, UK CrCl <30 values, ATS 2016 rule to dose thrice weekly without lowering the dose and to give after dialysis, NTM table, HD removal data (Malone/Chew), PD, and CRRT case data plus TDM [flag]
- Hepatic dose: no adjustment; hepatotoxicity with LFT monitoring (US/UK/仿單); ATS 2016 alternative regimens for advanced liver disease
- Pediatric dose: 仿單 none; US not recommended <13 y and contraindication; UK 25 mg/kg x60 d then 15 mg/kg, prophylaxis; ATS 2016/AAP guidance with monthly vision checks
- Indications: [Tuberculosis] only. NTM was left out because it is off-label under the FDA-or-UK rule; it is covered in Notes as 'Off-label NTM (no tag)'
- Coverage: [Mycobacteria]
- Side Effects: union of both proposals (optic neuropathy, neuropathy, LFT↑, hyperuricemia, hypersensitivity, SJS/TEN, DRESS, hematologic, thrombocytopenia, leukopenia, neutropenia, GI, CNS)
- Monitor: union of both proposals (eye exam, LFT, renal, CBC, TDM)
- Mechanism: merged text (embCAB, label wording, bacteriostatic, MIC, resistance, PK)
- Drug Interactions: Al(OH)3 antacids (US/UK), 仿單 無資料, no CYP interactions (LactMed), rifamycin/INH plus a pointer to the Liverpool checker
- Pregnancy: no current FDA letter category (legacy Category C noted as not current), US/UK/ATS content, Chinese note kept
- Breastfeeding: LactMed rev 2024-08-15 data, CDC and ATS statements, and the more cautious label wording
- Notes: merged both proposals (never monotherapy, optic neuritis with 仿單 monitoring, contraindications, 仿單 diabetes/alcohol, hepatotoxicity, SCAR, hyperuricaemia and others, NTM off-label, LTBI, stocked form, no boxed warning)
- Page body: added a monograph covering Category (with ATC J04AK02), Mechanism, Indications, Coverage, Adult Dose, Renal, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions, Notes, Pregnancy, Breastfeeding, and a References section (DailyMed setid, eMC 14174, TW 仿單 019877, LactMed NBK501335, and PMIDs 27516382, 32628747/32636299, 32053584, 8876238, 9142129, 10228130, 28396542, 26518065, 28895161, 24846578, 12836625), with no storage section
- Category column: kept unchanged
- Renewed date set to 2026-10-06, date only (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
