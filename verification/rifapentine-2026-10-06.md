# New entry: Priftin (Rifapentine)

- **Notion entry:** [Priftin (Rifapentine)](https://app.notion.com/3f1c496dfff1817095afdf82ce373d66). Created 2026-10-06.
- **Hospital codes:** PRI07 (公費 Priftin tab 150 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/rifapentine.json` (plus any Taiwan insert text files)

## Product and sources

FJUH PRI07 = 公費 Priftin (rifapentine) 150 mg film-coated tablet (肺挺膜衣錠150毫克), Tab, ATC J04AB05. The hospital P4 page (pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=PRI07, checked live 2026-10-06) shows no NHI code and no licence number, so I could not reach a Taiwan 仿單. The TFDA search at mcp.fda.gov.tw needs a CAPTCHA, which I did not try to get around. Reference label used: US DailyMed "PRIFTIN (RIFAPENTINE) TABLET, FILM COATED [SANOFI-AVENTIS U.S. LLC]", setid 3a64fb70-b85e-43d9-8bcd-7e893f568ae1, v14, published Feb 10 2026 (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1). There is no UK SmPC: rifapentine has no UK/EU authorisation. Breastfeeding source: LactMed "Rifapentine" NBK501601, revised 2022-05-15. The Notion page is a new entry: only Title and Category are filled, every other column is empty, and the body is blank. Guideline PMIDs below were checked with NCBI esummary: 27516382, 32053584, 29953429, 30865794, 33951360, 35202353, 32240629, 22150035. Regimen details were also checked against PMC full text fetched through eutils for 30865794, 33951360 and 32053584.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 150 mg tab (公費 Priftin PRI07). Take with food (high-fat meal ↑AUC/Cmax 40–50%); tablets may be crushed into a small amount of semi-solid food, eaten immediately (US §2.3/§12.3)<br>Active pulmonary TB, drug-susceptible (≥12 y): initial phase 2 mo — 600 mg twice weekly by DOT, ≥72 h between doses, with daily INH + EMB + PZA; continuation 4 mo — 600 mg once weekly by DOT with INH or another active drug. Never monotherapy; not for RIF-resistant TB (US §1.1/§2.1)<br>⚠ HIV+: do NOT use once-weekly RPT/INH continuation (↑failure/relapse with RIF-resistant TB; US §1.1/§5.4). ATS/CDC/IDSA 2016: once-weekly INH/RPT continuation generally not recommended (PMID 27516382)<br>LTBI 3HP: once weekly × 12 wk by DOT with INH 15 mg/kg (round to nearest 50/100 mg, max 900 mg). RPT by weight: 25.1–32 kg 600 mg; 32.1–50 kg 750 mg; >50 kg 900 mg (max 900 mg) (US §2.2, Table 1)<br>Guideline / off-label: 3HP may be given as DOT or self-administered (CDC 2018, PMID 29953429). 1HP (HIV): RPT daily (<35 kg 300 mg; 35–45 kg 450 mg; >45 kg 600 mg) + INH 300 mg daily × 4 wk (BRIEF-TB, PMID 30865794). 4-month HPMZ (≥12 y, drug-susceptible pulmonary TB): RPT 1200 mg + MOX 400 mg + INH + PZA daily × 8 wk, then RPT + MOX + INH daily × 9 wk; RPT taken with food (Study 31, PMID 33951360; CDC interim guidance 2022, PMID 35202353)

**Why:** The column is empty. Doses are copied directly from US label §2.1–2.3. The guideline regimens (1HP, HPMZ, self-administered 3HP) are not on the label and are labelled as off-label with verified PMIDs. The RPT 1200 mg daily dose and the 8 + 9 week structure were confirmed in the Study 31 full text (PMC8282329). The 1HP weight bands were confirmed in the BRIEF-TB full text (PMC6563914).

**Sources:** US FDA label Priftin §2.1 Dosage in Active Pulmonary Tuberculosis, §2.2 Dosage in LTBI (Table 1), §2.3 Administration — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Borisov AS et al. MMWR 2018 (3HP update) PMID 29953429 — https://pubmed.ncbi.nlm.nih.gov/29953429/; Swindells S et al. NEJM 2019 (1HP, BRIEF-TB) PMID 30865794 — https://pubmed.ncbi.nlm.nih.gov/30865794/; Dorman SE et al. NEJM 2021 (Study 31/A5349) PMID 33951360 — https://pubmed.ncbi.nlm.nih.gov/33951360/; Carr W et al. MMWR 2022 interim guidance HPMZ PMID 35202353 — https://pubmed.ncbi.nlm.nih.gov/35202353/

### A2 · Renal dose, HD, CRRT

No adjustment in label; not studied in renal impairment. Only ~17% of the dose (rifapentine + related compounds) is excreted in urine and 70% in faeces (US §12.3)<br>HD: 97.7% protein-bound (metabolite 93.2%) → neither HD nor forced diuresis expected to enhance elimination (US §10) → supplemental dose not expected to be needed (inference)<br>PD / CRRT: no data<br>Literature (dialysis): 3HP completion 82% vs 61% with 9H but hypersensitivity 29% vs 11%, higher risk with PD and DM (Taiwan cohort, PMID 33361292). Daily 1HP in HD: RPT exposure lower than non-dialysis historical controls (n=11, PMID 41400843) → 透析病人注意類流感/過敏反應

**Why:** The column is empty. US label §12.3 says renal PK has not been evaluated and that about 17% is excreted via the kidneys. §10 Overdosage says HD is not expected to remove the drug. No label or guideline gives PD or CRRT data.

**Sources:** US FDA label Priftin §12.3 Pharmacokinetics (Renal Impaired Patients; Metabolism/Excretion) and §10 Overdosage — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A3 · Hepatic dose

No dose adjustment in label: single 600 mg dose PK in mild–severe hepatic impairment (n=15) similar to healthy volunteers (US §12.3)<br>Abnormal LFT / liver disease, or starting active-TB treatment: use only when necessary and under strict supervision — check transaminases at baseline and every 2–4 wk; stop if signs of liver injury (US §5.1)<br>Companion INH: boxed warning for hepatitis

**Why:** The column is empty. Text comes from label §12.3 (hepatic PK) and §5.1 (hepatotoxicity monitoring).

**Sources:** US FDA label Priftin §5.1 Hepatotoxicity; §12.3 Hepatic Impaired Patients — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A4 · Pediatric dose

<span color="blue">`PO`</span> LTBI (≥2 y): once weekly × 12 wk by DOT with INH 25 mg/kg (2–11 y) or 15 mg/kg (≥12 y), INH max 900 mg. RPT by weight: 10–14 kg 300 mg; 14.1–25 kg 450 mg; 25.1–32 kg 600 mg; 32.1–50 kg 750 mg; >50 kg 900 mg (max) (US §2.2)<br>Tablets may be crushed into semi-solid food. RPT AUC in 2–11 y is ≈31% higher than in adults; crushed tablets give ≈26% lower exposure than whole tablets (US §8.4/§12.3)<br>Active pulmonary TB: ≥12 y = adult dose; <12 y safety/efficacy not established (US §8.4)<br><2 y: not indicated<br>CDC 2018: 3HP for children ≥2 y, DOT or self-administered (PMID 29953429)

**Why:** The column is empty. The weight bands, INH doses and age limits are taken from US label §2.2 and §8.4. The pediatric exposure figures come from §12.3.

**Sources:** US FDA label Priftin §2.2 (Table 1), §8.4 Pediatric Use, §12.3 Pediatric PK — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Borisov AS et al. MMWR 2018 PMID 29953429 — https://pubmed.ncbi.nlm.nih.gov/29953429/

### A5 · Indications

["Tuberculosis","LTBI"]

**Why:** Both are on the US label: §1.1 active pulmonary TB (≥12 y) and §1.2 LTBI with INH (≥2 y). There is no UK SmPC. Both options exist in the schema. NTM is not a labelled indication and should not be added.

**Sources:** US FDA label Priftin §1.1, §1.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A6 · Coverage

["Mycobacteria"]

**Why:** Label §12.4 describes activity only against M. tuberculosis, which is bactericidal to both intracellular and extracellular bacilli. Use the 'Mycobacteria' option, which exists in the schema. Do not add other bacterial tags, because the label gives no clinical coverage claims for them.

**Sources:** US FDA label Priftin §12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A7 · Side Effects

["hypersensitivity","LFT↑","SJS/TEN","DRESS","CDAD","anemia","neutropenia","hematologic","thrombocytopenia","GI","CNS","tooth discoloration"]

**Why:** All tags exist in the schema. Label support for each: hypersensitivity / flu-like reaction is the most common reaction with 3HP (4%; §5.2, §6.1). Hepatotoxicity (§5.1). SCAR, including SJS and DRESS (§5.3, §6.2). CDAD (§5.8). In the active-TB regimen, anaemia 11%, lymphopenia 10% (tag 'hematologic'), neutropenia 6–8.5% and thrombocytopenia 1.3–1.7%; thrombocytopenia is also a sign of hypersensitivity (§6.1 Table 2). GI: nausea, vomiting, dyspepsia, anorexia. CNS: headache, dizziness. Red-orange discolouration of teeth and body fluids (§5.7). Hyperuricaemia is NOT proposed: in the label it appears only in overdose cases and as gout in <0.5%.

**Sources:** US FDA label Priftin §5.1–5.8, §6.1 (Tables 2–3), §6.2 Postmarketing — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A8 · Monitor

["LFT","CBC"]

**Why:** LFT: §5.1 asks for transaminases at baseline and every 2–4 wk in patients with liver disease or abnormal liver tests, and in those starting active-TB therapy. CBC: anaemia, lymphopenia, neutropenia and thrombocytopenia are reported (§6.1, §5.2). PT monitoring applies only to late-pregnancy exposure and is covered in the Pregnancy text, so the PT/INR tag is not proposed.

**Sources:** US FDA label Priftin §5.1, §5.2, §6.1, §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A9 · Mechanism

Cyclopentyl rifamycin. Binds bacterial DNA-dependent RNA polymerase (β-subunit) of M. tuberculosis → blocks initiation of the RNA chain → bactericidal to intracellular and extracellular bacilli. Esterase converts it to the active 25-desacetyl metabolite; both accumulate in macrophages<br>Resistance: one-step rpoB mutation (≈1 in 10^7–10^8 bacilli), linked to monotherapy; high cross-resistance with other rifamycins → always combine (US §12.4)<br>PK: relative F ≈70%, food ↑exposure; 97.7% protein-bound; Vd ≈70 L; t½ ≈13–17 h (metabolite similar); 70% faeces / 17% urine (US §12.3)

**Why:** The column is empty. Text follows label §12.4 (mechanism, resistance, cross-resistance) and §12.3 (PK values).

**Sources:** US FDA label Priftin §12.3 Pharmacokinetics, §12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A10 · Drug Interactions

CYP3A4 and CYP2C8/9 inducer: induction starts within 4 d of the first dose and returns to baseline ~14 d after stopping (US §7.4)<br>↓ levels / effect of: protease inhibitors (indinavir AUC ↓70%) and certain reverse transcriptase inhibitors (US §7.1/§12.3); azoles (fluconazole, itraconazole, ketoconazole); warfarin; phenytoin; cyclosporine, tacrolimus; methadone; clarithromycin, doxycycline, dapsone, fluoroquinolones; diltiazem, nifedipine, verapamil; digoxin; prednisone; sulfonylureas; theophylline; levothyroxine; TCAs; haloperidol; diazepam; phenobarbital; propranolol; quinine; sildenafil; disopyramide, mexiletine, quinidine → dose adjustment may be needed (US Table 4)<br>Hormonal contraceptives ↓ efficacy → use a non-hormonal method or add a barrier method (US §7.3/§8.3)<br>EFV/FTC/TDF + weekly RPT 900 mg: no substantial change (EFV AUC ↓14%); CD4 and VL unchanged (US §7.2). CDC 2018: no clinically significant interaction of weekly RPT with efavirenz or raltegravir (PMID 29953429)<br>Dolutegravir 50 mg QD + 3HP: DTG AUC ↓26%, trough ↓47%, VL stayed <40 copies/mL → no DTG dose adjustment needed (DOLPHIN, PMID 32240629; not label)<br>INH: no PK interaction (US §12.3). Highly albumin-bound → possible displacement (US §7.5)<br>Lab: may interfere with serum folate / vitamin B12 microbiological assays (US §7.6)<br>ART and other DDIs: check Liverpool https://www.hiv-druginteractions.org

**Why:** The column is empty, and drug interactions are critical for a rifamycin. The text summarises label §7.1–7.6 and Table 4. Dolutegravir is the main ART question in 3HP, so a verified PMID is included for it; it is marked as not label-based. The Liverpool checker covers the rest, as the rules require.

**Sources:** US FDA label Priftin §7.1–7.6 (Table 4), §8.3, §12.3 Drug-Drug Interactions — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Dooley KE et al. Lancet HIV 2020 (DOLPHIN) PMID 32240629 — https://pubmed.ncbi.nlm.nih.gov/32240629/; Liverpool HIV drug interactions — https://www.hiv-druginteractions.org

### A11 · Pregnancy

FDA letter category retired (PLLR narrative, US §8.1). Animal data: may cause fetal harm — rats: cleft palate, malpositioned aortic arches; rabbits: major malformations at 0.3–1.3× human dose. Human data insufficient to establish risk; in the LTBI trial the spontaneous abortion rate was 15% with RPT/INH vs 19% with INH, not above background<br>Last weeks of pregnancy: risk of maternal postpartum haemorrhage and neonatal bleeding → monitor PT in mother and neonate; vitamin K may be indicated<br>3HP: safety in pregnancy not yet established (CDC 2018, PMID 29953429) — advise women to report planned or actual pregnancy during treatment. Hormonal contraception unreliable → barrier method<br>Active TB itself carries maternal and neonatal risk; see INH/EMB/PZA labels for companion drugs

**Why:** The column is empty. Wording follows the PLLR §8.1 Risk Summary, Clinical Considerations and Data. Following the owner's rule, no letter category is given.

**Sources:** US FDA label Priftin §8.1 Pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A12 · Breastfeeding

LactMed (rev. 2022): milk levels are too low to treat the infant. CDC and other professional bodies say breastfeeding should not be discouraged. Monitor the infant for liver toxicity; milk may turn red-orange. After 900 mg weekly (n=22), milk RPT was ~280–533 mcg/L and 25-desacetyl-RPT up to ~360 mcg/L. Alternate: rifampin<br>US §8.2: no data on milk/infant effects. Monitor the infant for hepatotoxicity: irritability, prolonged crying, yellow eyes, poor appetite, vomiting, dark urine, pale stools. Weigh the benefits of breastfeeding against the mother's clinical need

**Why:** The column is empty. LactMed and the US label are combined. Two corrections to the source brief: (1) LactMed's 'Alternate Drugs to Consider' is rifampin. The brief says LactMed lists rifapentine as an alternative to rifampin, which reverses it. (2) LactMed cites human milk level data (Mkhize 2022, PMID 35462285). So 'no data' is true of the label's §8.2 but not of the literature.

**Sources:** LactMed Rifapentine NBK501601 (revised 2022-05-15), Summary of Use during Lactation; Drug Levels; Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK501601/; US FDA label Priftin §8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### A13 · Notes

Hospital product: 公費 Priftin 150 mg tab only (PRI07, 肺挺膜衣錠). No UK/EU authorisation → indications follow the US label only; Taiwan 仿單 not located [flag]<br>Approved (US): active pulmonary TB ≥12 y with ≥1 other drug the isolate is susceptible to; LTBI ≥2 y with INH as 12-wk once-weekly DOT (3HP). Rule out active TB before LTBI treatment; not for presumed exposure to INH- or rifamycin-resistant TB (US §1.2)<br>⚠ Do NOT use the once-weekly RPT + INH continuation phase in HIV-infected patients (↑failure/relapse with rifampin-resistant organisms). Higher relapse risk with cavitation, bilateral disease or a positive culture after the initial phase (US §1.1/§5.4). ATS/CDC/IDSA 2016: once-weekly RPT continuation generally not recommended (PMID 27516382)<br>Rifapentine ≠ rifampin: not interchangeable; check the intended regimen when prescribing or dispensing (CDC 2020 LTBI, PMID 32053584)<br>3HP: systemic / flu-like hypersensitivity reaction ~4% (can include hypotension, syncope); hepatotoxicity 0.6% vs 3% with 9H (US §5.2/§6.1; PMID 32053584)<br>No boxed warning for rifapentine. Companion isoniazid has a boxed warning for severe and sometimes fatal hepatitis (age-related) → see INH entry<br>Red-orange body fluids; may permanently stain contact lenses and dentures (US §5.7). Avoid in porphyria (US §5.9). Paradoxical reactions possible in the first weeks to months (US §5.5)<br>Contraindication: hypersensitivity to any rifamycin (US §4)<br>Taiwan CDC 結核病診治指引 / WHO regimens (1HP, 4-mo HPMZ) not yet checked against the local programme [flag]

**Why:** The column is empty. Notes collects the label limitations of use and warnings (§1, §4, §5) that matter most clinically. The rules require boxed warnings to appear in Notes; rifapentine has none, but the mandatory companion drug isoniazid does, as confirmed in verification/sources/isoniazid.json. The Notes also say there is no UK SmPC or Taiwan insert. The CDC 2020 'not interchangeable' warning and the 3HP hypersensitivity text (syncope/hypotension) were confirmed in the PMC full text.

**Sources:** US FDA label Priftin §1.1, §1.2, §4, §5.2, §5.4, §5.5, §5.7, §5.9, §6.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Sterling TR et al. MMWR Recomm Rep 2020 (LTBI guidelines) PMID 32053584 — https://pubmed.ncbi.nlm.nih.gov/32053584/; Nahid P et al. Clin Infect Dis 2016 ATS/CDC/IDSA DS-TB guideline PMID 27516382 — https://pubmed.ncbi.nlm.nih.gov/27516382/ (abstract verified; full text not reachable — confirm wording); Isoniazid US label (DailyMed setid 6dab7b7b-a3a9-47ef-b423-134bc6970d8b) boxed WARNING — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b

### A14 · Page body

Add a short summary body in the style of the other new entries: # Rifapentine (公費 Priftin 150 mg, PRI07) — sections for Mechanism, Indications (US label only; no UK SmPC), Dosing (active TB 2-mo twice-weekly + 4-mo weekly; LTBI 3HP weight table), Renal/Hepatic, Key safety (HIV once-weekly limitation, hypersensitivity/flu-like, hepatotoxicity, SCAR, red-orange fluids, porphyria), Drug interactions (CYP3A4/2C8/9 induction; contraception; ART → Liverpool), Pregnancy & lactation, and ### References: (1) DailyMed Priftin setid 3a64fb70-b85e-43d9-8bcd-7e893f568ae1 v14 (Feb 10 2026); (2) LactMed NBK501601 (2022-05-15); (3) Sterling 2020 PMID 32053584; (4) Borisov 2018 PMID 29953429; (5) Nahid 2016 PMID 27516382; (6) Swindells 2019 PMID 30865794; (7) Dorman 2021 PMID 33951360; (8) Carr 2022 PMID 35202353; (9) Dooley 2020 PMID 32240629

**Why:** The page body is blank. The other entries keep a summary and a References list in the body (see verification/page-bodies-2026-10-06.md). The body should be built only from the column text proposed above.

**Sources:** US FDA label Priftin — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; LactMed NBK501601 — https://www.ncbi.nlm.nih.gov/books/NBK501601/

### B1 · Adult dose

<span color="blue">`PO`</span> 150 mg tab; take with food (high-fat meal ↑AUC/Cmax 40–50%); may crush into semi-solid food. Always combination therapy — never monotherapy<br>• LTBI — 3HP (US label; CDC/NTCA 2020 preferred, strong rec.): once weekly × 12 wk + isoniazid 15 mg/kg (rounded to nearest 50/100 mg, max 900 mg); rifapentine by weight: 25.1–32 kg 600 mg; 32.1–50 kg 750 mg; >50 kg 900 mg (max 900 mg). Label: DOT; CDC 2018: DOT or self-administered (SAT)<br>• Active pulmonary TB, drug-susceptible (US label, ≥12 y): initial 600 mg twice weekly by DOT × 2 mo (≥72 h between doses) + daily INH/PZA/EMB → continuation 600 mg once weekly by DOT × 4 mo + INH<br>  ⚠ ATS/CDC/IDSA 2016 Rec 4c: recommends AGAINST once-weekly INH/RPT continuation (strong); only in uncommon cases, HIV-negative and non-cavitary. Label: do not use weekly continuation in HIV+ (relapse with rifampin-resistant TB)<br>• Guideline / off-label regimens: 1HP = RPT daily × 28 d (<35 kg 300 mg, 35–45 kg 450 mg, >45 kg 600 mg) + INH 300 mg daily (Swindells 2019, HIV+ ≥13 y); 4-mo HPMZ = RPT 1200 mg daily + INH + PZA + moxifloxacin 400 mg × 8 wk → RPT + INH + MFX × 9 wk (Dorman 2021; CDC interim guidance 2022, ≥12 y)

**Why:** New entry; every value checked against the label text. Weight bands, INH 15/25 mg/kg, max 900 mg, 72 h interval, food effect and crushing are all confirmed. The guideline caveat matters because the label's weekly continuation phase is recommended against by ATS/CDC/IDSA. 1HP and HPMZ are not in the label, so they are tagged as guideline regimens (doses checked in the PMC full texts).

**Sources:** US FDA Priftin label §2.1–2.3, §12.3 Absorption — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Nahid P et al. ATS/CDC/IDSA DS-TB guideline, Clin Infect Dis 2016;63:e147-95, Recommendation 4c — PMID 27516382 https://pubmed.ncbi.nlm.nih.gov/27516382/ ; https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Sterling TR et al. NTCA/CDC LTBI guidelines 2020, MMWR Recomm Rep 69(1):1-11, Tables 3–4 — PMID 32053584 https://pubmed.ncbi.nlm.nih.gov/32053584/; Borisov AS et al. MMWR 2018;67:723-6 (3HP DOT or SAT, age ≥2 y, HIV on compatible ART) — PMID 29953429 https://pubmed.ncbi.nlm.nih.gov/29953429/; Swindells S et al. NEJM 2019;380:1001-11 (1HP doses, Methods) — PMID 30865794 https://pubmed.ncbi.nlm.nih.gov/30865794/; Dorman SE et al. NEJM 2021;384:1705-18 (RPT 1200 mg + MFX 400 mg, Methods) — PMID 33951360 https://pubmed.ncbi.nlm.nih.gov/33951360/; Carr W et al. MMWR 2022;71:285-9 interim guidance 4-mo HPMZ — PMID 35202353 https://pubmed.ncbi.nlm.nih.gov/35202353/

### B2 · Renal dose, HD, CRRT

No adjustment in label — not studied in renal impairment; only ~17% of dose excreted in urine (US §12.3). HD: removal not expected (97.7% protein-bound; label §10). CRRT: no data<br>Literature (dialysis): 3HP had higher completion than 9H (82% vs 61%) but more hypersensitivity (29% vs 11%), esp. PD and DM (Taiwan cohort, Lin 2021). Daily 1HP in HD: lower RPT exposure than historical non-dialysis controls (Ueaphongsukkit 2026) → 透析病人注意類流感/過敏反應

**Why:** The label's renal statements are confirmed. HD removal is inferred by the label itself, in the overdose section. Taiwanese dialysis data are useful context for a TB/LTBI drug used in HD units. Both PMIDs checked with esummary.

**Sources:** US FDA Priftin label §12.3 Specific Populations – Renal Impaired Patients; §10 Overdosage — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Lin SY et al. Antimicrob Agents Chemother 2021;65:e02184-20 — PMID 33361292 https://pubmed.ncbi.nlm.nih.gov/33361292/; Ueaphongsukkit T et al. J Antimicrob Chemother 2026;81:dkaf439 — PMID 41400843 https://pubmed.ncbi.nlm.nih.gov/41400843/

### B3 · Hepatic dose

No dose adjustment: single 600 mg PK similar in mild–severe hepatic impairment vs healthy (US §12.3). Hepatotoxicity warning (§5.1): with abnormal LFT/liver disease, or when starting active-TB therapy, use only if necessary under strict supervision — transaminases at baseline and q2–4 wk; stop if liver injury. 3HP (CDC 2018): baseline AST for HIV, liver disease, postpartum ≤3 mo, regular alcohol use, etc.; stop if AST ≥5× ULN without symptoms or ≥3× ULN with symptoms. Co-drug isoniazid has boxed warning for hepatitis

**Why:** The label combines unchanged PK with a strict monitoring recommendation, and CDC 2018 gives the 3HP stop thresholds. The INH boxed warning is relevant because rifapentine is always given with INH for LTBI.

**Sources:** US FDA Priftin label §5.1, §12.3 Hepatic Impaired Patients — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Borisov AS et al. MMWR 2018;67:723-6 (monitoring section) — PMID 29953429 https://pubmed.ncbi.nlm.nih.gov/29953429/; Isoniazid US label boxed WARNING (hepatitis) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b

### B4 · Pediatric dose

<span color="blue">`PO`</span> LTBI (≥2 y; US label): 3HP once weekly × 12 wk. Rifapentine by weight: 10–14 kg 300 mg; 14.1–25 kg 450 mg; 25.1–32 kg 600 mg; 32.1–50 kg 750 mg; >50 kg 900 mg (max 900). Isoniazid: 2–11 y 25 mg/kg, ≥12 y 15 mg/kg (max 900 mg) (US §2.2). CDC 2018: DOT or self-administered (SAT) for ≥2 y<br>2–11 y: AUC ~31% higher than adults on 900 mg; crushed tablets in soft food → ~26% lower exposure than whole tablets (US §8.4/§12.3)<br>Active pulmonary TB: ≥12 y = adult dose; <12 y safety/efficacy not established (US §8.4). <2 y: no safety/PK data (CDC 2018)

**Why:** Label §2.2 table, §8.4 and §12.3 Pediatric checked. CDC 2018 lists children <2 y as a research gap.

**Sources:** US FDA Priftin label §2.2 Table 1, §8.4, §12.3 Pediatric — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Borisov AS et al. MMWR 2018;67:723-6 — PMID 29953429 https://pubmed.ncbi.nlm.nih.gov/29953429/

### B5 · Indications

Tuberculosis, LTBI

**Why:** FDA label §1.1 covers active pulmonary TB (≥12 y) and §1.2 covers LTBI with INH (≥2 y). Both options exist in the schema. NTM is not a label indication.

**Sources:** US FDA Priftin label §1.1, §1.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B6 · Coverage

Mycobacteria

**Why:** The label's microbiology covers only M. tuberculosis. Its activity is similar to rifampin, with high cross-resistance to rifamycins. No other organism tag is supported for a labelled use. Put the M. tuberculosis-only caveat in Notes.

**Sources:** US FDA Priftin label §11 Description, §12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B7 · Side Effects

hypersensitivity, LFT↑, anemia, neutropenia, hematologic, thrombocytopenia, SJS/TEN, DRESS, CDAD, GI

**Why:** The most common reaction with 3HP is hypersensitivity / flu-like reaction (4%, the main cause of stopping). Active-TB regimen (Table 2): anaemia 11.4%, lymphopenia 10.5% (tagged as 'hematologic'), neutropenia 6.1–8.5%, ALT↑ 5%. Thrombocytopenia appears in Table 2 and as a sign of hypersensitivity (§5.2). SJS and DRESS (§5.3), CDAD (§5.8) and GI effects (nausea, vomiting, anorexia) are also in the label. Do not tag hyperuricemia: the label lists it only in overdose patients, and the hospital site attributes it to pyrazinamide.

**Sources:** US FDA Priftin label §5.2, §5.3, §5.8, §6.1 Tables 2–3, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B8 · Monitor

LFT, CBC

**Why:** LFT: the label says to monitor for liver injury, with transaminases q2–4 wk in liver disease or active TB (§5.1). CBC is implied rather than mandated by the label: anaemia, lymphopenia and neutropenia are frequent (Table 2) and thrombocytopenia is a sign of hypersensitivity (§5.2). Flag CBC as label-implied. Late-pregnancy PT monitoring goes in the Pregnancy text, not as a general tag.

**Sources:** US FDA Priftin label §5.1, §5.2, §6.1 Table 2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B9 · Mechanism

Cyclopentyl rifamycin; inhibits DNA-dependent RNA polymerase (β-subunit, rpoB) → blocks initiation of RNA chain → bactericidal vs intra- and extracellular M. tuberculosis (accumulates in macrophages). Active metabolite 25-desacetyl-rifapentine (~38% of activity). Resistance: one-step rpoB mutation (~1 in 10⁷–10⁸ bacilli); high cross-resistance with rifampin. PK: t½ ~13–17 h (allows intermittent dosing), protein binding 97.7%, feces 70% / urine 17%

**Why:** All figures are from label §12.3 and §12.4. The half-life is 13.2 h at 600 mg q72h and 16.6 h at 900 mg with INH, fed.

**Sources:** US FDA Priftin label §12.3 Tables 5–6, §12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B10 · Drug Interactions

Inducer of CYP3A4 and CYP2C8/9: starts within 4 d, returns to baseline ~14 d after stopping (US §7.4)<br>↓ efficacy of: protease inhibitors (indinavir AUC −70%) and certain RT inhibitors; hormonal contraceptives → use non-hormonal or barrier method; warfarin, phenytoin, azoles (fluconazole/itraconazole/ketoconazole), cyclosporine/tacrolimus, methadone, CCBs, digoxin, sulfonylureas, levothyroxine, theophylline, corticosteroids, clarithromycin/doxycycline/fluoroquinolones/dapsone, quinine, haloperidol, diazepam, propranolol, sildenafil, TCAs (US Table 4) → monitor or adjust dose<br>ART: weekly 900 mg + EFV/FTC/TDF: no clinically significant change (label §7.2). 3HP + dolutegravir: DTG AUC −26%, trough ~−47%, VL stayed suppressed → no DTG adjustment (Dooley 2020). Efavirenz/raltegravir acceptable (CDC 2018). Other ART (boosted PIs, other INSTIs, TAF, NNRTIs): check https://www.hiv-druginteractions.org<br>Isoniazid: no PK interaction. Highly albumin-bound → possible displacement. Lab: may interfere with microbiological assays for folate and vitamin B12

**Why:** This summarises label §5.6, §7.1–7.6 and §12.3 DDI. ART interactions are critical for TB/HIV, and the label is silent on INSTIs. The DTG data come from a PMID verified with esummary. The remaining ART combinations are referred to the Liverpool checker, as the ground rules require.

**Sources:** US FDA Priftin label §5.6, §7.1–7.6, §12.3 Drug-Drug Interactions — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Dooley KE et al. Lancet HIV 2020;7:e401-9 (DOLPHIN) — PMID 32240629 https://pubmed.ncbi.nlm.nih.gov/32240629/; Borisov AS et al. MMWR 2018;67:723-6 — PMID 29953429 https://pubmed.ncbi.nlm.nih.gov/29953429/; Liverpool HIV Drug Interactions — https://www.hiv-druginteractions.org

### B11 · Pregnancy

No FDA letter category (narrative label, US §8.1). Animal: may cause fetal harm — malformations incl. cleft palate and mal-positioned aortic arches in rats (0.6× human dose) and major malformations in rabbits (0.3–1.3× human dose). Human data insufficient; miscarriage rate in trials not above background. Last weeks of pregnancy: ↑ maternal postpartum haemorrhage and neonatal bleeding → monitor PT in mother and neonate; vitamin K may be needed. 3HP: PK acceptable, no dose adjustment in 2nd/3rd trimester (IMPAACT 2001, Mathad 2022), but CDC 2018 states safety of 3HP in pregnancy needs further study. Hormonal contraception unreliable → non-hormonal/barrier method (US §8.3)

**Why:** Label §8.1 is narrative. Do not write 'Category C'. The pregnancy PK study and CDC wording are verified.

**Sources:** US FDA Priftin label §8.1, §8.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Mathad JS et al. Clin Infect Dis 2022;74:1604-13 — PMID 34323955 https://pubmed.ncbi.nlm.nih.gov/34323955/; Borisov AS et al. MMWR 2018;67:723-6 — PMID 29953429 https://pubmed.ncbi.nlm.nih.gov/29953429/

### B12 · Breastfeeding

LactMed (rev. 2022-05-15): breastfeeding should not be discouraged (CDC). Milk levels are low (rifapentine ~280–530 µg/L after 900 mg weekly) and insufficient to treat infant TB. Milk may turn red-orange. Monitor infant for hepatotoxicity (jaundice, irritability, prolonged crying, poor feeding, vomiting, dark urine / pale stool). US label: no data; weigh benefit vs risk; same infant monitoring. Alternative: rifampin

**Why:** LactMed now has measured milk levels (Mkhize 2022), so 'no data' (label) is outdated as a summary. Note: the source brief says LactMed lists rifapentine as an alternative to rifampin. That is reversed: LactMed's 'Alternate Drugs to Consider' for rifapentine is rifampin.

**Sources:** LactMed: Rifapentine, NBK501601 (rev. 2022-05-15) — https://www.ncbi.nlm.nih.gov/books/NBK501601/; US FDA Priftin label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B13 · Notes

<span color="blue">`PO`</span> 院內: 公費 Priftin 肺挺膜衣錠 150 mg (公費藥, PRI07); take with food. No UK/EU authorisation → US label only; Taiwan 仿單 not located [flag]<br>⚠ Rifapentine ≠ rifampin — not interchangeable (CDC 2020)<br>Contraindication: hypersensitivity to any rifamycin (US §4)<br>Never monotherapy. Rule out active TB before LTBI therapy. 3HP not recommended for contacts of rifamycin- or INH-resistant TB (label)<br>Covers M. tuberculosis only (label spectrum); high cross-resistance with rifampin. Do not use for rifampin-resistant TB<br>Hypersensitivity / flu-like systemic reaction (hypotension, syncope, fever, chills, myalgia, conjunctivitis, thrombocytopenia) ~4% with 3HP; anaphylaxis reported → stop. SJS/DRESS reported → stop at first rash or mucosal lesion<br>Relapse risk ↑ with cavitation, bilateral disease or positive 2-mo culture. HIV+: do not use once-weekly continuation (rifampin-resistant relapse). Paradoxical reactions early in therapy<br>Red-orange body fluids (urine, sweat, tears, milk); may permanently stain contact lenses and dentures. Avoid in porphyria<br>Boxed warning: none for rifapentine. Co-drug isoniazid: BOXED WARNING — severe/fatal hepatitis (risk ↑ with age and daily alcohol)<br>No CRRT data; TDM not routine (no label or guideline target) [flag: unsourced]

**Why:** This collects the label warnings and limitations of use, the CDC 2020 'not interchangeable' caution, and the INH boxed warning (ground rules: boxed warnings go in Notes). 'TDM not routine' is unsourced but plausible; flagged.

**Sources:** US FDA Priftin label §1.1–1.2 Limitations of Use, §4, §5.2–5.9, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Sterling TR et al. MMWR Recomm Rep 2020;69(1):1-11 ('rifampin and rifapentine… are not interchangeable') — PMID 32053584 https://pubmed.ncbi.nlm.nih.gov/32053584/; Isoniazid US label boxed WARNING — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b

### B14 · Category

Antimycobacterial (rifamycin) — keep as is

**Why:** Matches the label: 'PRIFTIN is a rifamycin antimycobacterial drug' (Highlights / §1) and 'cyclopentyl rifamycin' (§12.1).

**Sources:** US FDA Priftin label §1, §12.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1

### B15 · Page body

# Priftin (Rifapentine)<br>Rifamycin antimycobacterial, PO only. Hospital stocks 公費 Priftin 肺挺膜衣錠 150 mg (PRI07).<br>---<br>## Mechanism of action<br>(as Mechanism column: RNA polymerase/rpoB, bactericidal intra-/extracellular M. tuberculosis, 25-desacetyl active metabolite, cross-resistance with rifampin)<br>---<br>## Spectrum of activity<br>**Covered:** M. tuberculosis (label). **Not covered:** rifampin-resistant M. tuberculosis (cross-resistance). No label claim for NTM or other bacteria.<br>---<br>## Indications<br>**Approved (FDA; no UK SmPC):** active pulmonary TB ≥12 y (combination therapy); LTBI ≥2 y with isoniazid (3HP) in people at high risk of progression.<br>**Guideline (off-label):** 1HP (HIV+ ≥13 y); 4-mo HPMZ for drug-susceptible pulmonary TB ≥12 y.<br>---<br>## Dosing<br>### Adult<br>Table with 3 rows: 3HP (weight bands + INH 15 mg/kg, max 900, 12 weekly doses, DOT/SAT); active TB (600 mg BIW × 2 mo → 600 mg weekly × 4 mo, with ATS/CDC/IDSA 2016 'recommend against weekly continuation' caveat); guideline regimens 1HP and HPMZ (doses as in Adult dose column).<br>### Pediatric<br>LTBI weight table (10–14 kg 300 → >50 kg 900 mg), INH 25 mg/kg (2–11 y) / 15 mg/kg (≥12 y); exposure notes; active TB <12 y not established.<br>### Renal dose, HD, CRRT<br>As Renal column.<br>### Hepatic<br>As Hepatic column.<br>---<br>## Administration<br>With food; tablets may be crushed into a small amount of semi-solid food, taken immediately; DOT per label (SAT acceptable for 3HP per CDC 2018).<br>---<br>## Adverse effects & monitoring<br>As Side Effects / Monitor columns, with the 3HP vs active-TB difference spelled out (3HP: hypersensitivity 4%, hepatitis 0.6% vs 3% with 9H; active-TB regimen: anaemia, lymphopenia, neutropenia, ALT↑, haemoptysis, rash, arthralgia, headache).<br>---<br>## Drug interactions<br>Table: CYP3A4/2C8/9 induction → PIs/certain NNRTIs (avoid or check Liverpool), hormonal contraception (barrier), warfarin (INR), immunosuppressants/azoles/methadone/anticonvulsants etc. (US Table 4), DTG (no adjustment with 3HP, Dooley 2020), EFV/TDF/FTC (no significant change), lab folate/B12 interference.<br>---<br>## Pregnancy & lactation<br>As Pregnancy / Breastfeeding columns.<br>---<br>## References<br>- US FDA label: PRIFTIN (Sanofi-Aventis), DailyMed setid 3a64fb70-b85e-43d9-8bcd-7e893f568ae1, v14 (Feb 2026)<br>- UK SmPC: none (no UK/EU marketing authorisation; eMC search 2026-10-06)<br>- TW 仿單: not located (licence no. not available)<br>- LactMed: Rifapentine, NBK501601 (rev. 2022-05-15)<br>- Nahid 2016 PMID 27516382; Sterling 2020 PMID 32053584; Borisov 2018 PMID 29953429; Sterling 2011 (PREVENT TB) PMID 22150035; Swindells 2019 PMID 30865794; Dorman 2021 PMID 33951360; Carr 2022 PMID 35202353; Dooley 2020 PMID 32240629; Mathad 2022 PMID 34323955; Lin 2021 PMID 33361292; Ueaphongsukkit 2026 PMID 41400843

**Why:** The page body is blank. This proposed skeleton follows the established entry layout (e.g. Diflucan) and carries the same verified content as the columns. All PMIDs listed were verified with NCBI esummary.

**Sources:** US FDA Priftin label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; LactMed NBK501601 — https://www.ncbi.nlm.nih.gov/books/NBK501601/; Sterling TR et al. NEJM 2011;365:2155-66 (PREVENT TB, 3HP pivotal) — PMID 22150035 https://pubmed.ncbi.nlm.nih.gov/22150035/; eMC search (no results) — https://www.medicines.org.uk/emc/search?q=rifapentine

## Apply log

- Adult dose: merged both proposals (food/crushing, 3HP weight bands + INH, DOT vs SAT, active-TB 2-mo twice weekly + 4-mo weekly, ATS/CDC/IDSA 2016 Rec 4c caveat, HIV+ label limitation, 1HP and 4-mo HPMZ guideline regimens)
- Renal dose, HD, CRRT: label (no adjustment, ~17% urine, HD not expected to remove, 97.7% protein-bound), PD/CRRT no data, dialysis literature (Lin 2021 PMID 33361292; Ueaphongsukkit 2026 PMID 41400843) with Chinese note
- Hepatic dose: label §12.3/§5.1 plus CDC 2018 3HP AST monitoring/stop criteria plus INH boxed-warning pointer
- Pediatric dose: LTBI ≥2 y weight table + INH 25/15 mg/kg, DOT/SAT, pediatric exposure notes, active TB ≥12 y adult dose / <12 y not established, <2 y not indicated
- Indications: [Tuberculosis, LTBI]
- Coverage: [Mycobacteria]
- Side Effects: union of both proposals [hypersensitivity, LFT↑, SJS/TEN, DRESS, CDAD, anemia, neutropenia, hematologic, thrombocytopenia, GI, CNS, tooth discoloration] (all existing options)
- Monitor: [LFT, CBC]
- Mechanism: merged MOA, 25-desacetyl metabolite, rpoB resistance/cross-resistance, PK
- Drug Interactions: merged CYP induction, US Table 4 list, contraception, ART (EFV/FTC/TDF, EFV/RAL per CDC 2018, DTG DOLPHIN), Liverpool link, INH, albumin binding, folate/B12 assay interference
- Pregnancy: no letter category, animal data, human data, near-term bleeding/PT/vitamin K, 3HP PK (Mathad 2022) vs CDC 2018 safety statement, contraception
- Breastfeeding: LactMed 2022-05-15 summary/levels/alternate rifampin plus US §8.2 infant monitoring
- Notes: merged product line (公費 Priftin 肺挺膜衣錠 150 mg PRI07), US-only approval, rifapentine≠rifampin, contraindication, spectrum, HIV weekly-continuation warning, hypersensitivity/SCAR/hepatotoxicity, red-orange fluids, porphyria, no boxed warning for RPT + INH boxed warning, flags (TW 仿單, CRRT/TDM unsourced, Taiwan CDC/WHO not checked)
- Category: kept as 'Antimycobacterial (rifamycin)' (no change)
- Page body: added summary page (Mechanism, Spectrum, Indications, Dosing tables adult/pediatric/renal/hepatic, Administration, AE & monitoring, DDI table, Pregnancy & lactation) with References section listing DailyMed Priftin v14 (Feb 10 2026), eMC search (none), TW 仿單 not located, LactMed NBK501601, INH label, and all cited PMIDs with URLs
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
