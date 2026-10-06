# New entry: Biktarvy (Bictegravir/Emtricitabine/TAF)

- **Notion entry:** [Biktarvy (Bictegravir/Emtricitabine/TAF)](https://app.notion.com/3f1c496dfff181819971f6e447a930f5). Created 2026-10-06.
- **Hospital codes:** BIK01 (Biktarvy tab), BIK02 (公費 Biktarvy tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/bictegravir-emtricitabine-tenofovir-alafenamide.json` (plus any Taiwan insert text files)

## Product and sources

FJUH BIK01 Biktarvy 錠劑 / 吉他韋膜衣錠 (and BIK02, the 【公費】 public-funded stock of the same product). Film-coated tablet with bictegravir 50 mg, emtricitabine 200 mg and tenofovir alafenamide 25 mg, PO only. NHI BC27570100, ATC J05AR20, hospital imprint GSI/9883. Taiwan licence 衛部藥輸字第027570號 (Gilead Taiwan branch; made by Gilead Sciences Ireland UC). Taiwan insert version 4, updated 2025-03-17, from https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F. US label: DailyMed setid 664cb8f0-1f65-441b-b0d9-ba3d798be309 v26 (SPL effective 2026-09-09). I checked the boxed warning in the live SPL XML because the sources JSON leaves it out. UK SmPC: eMC 9313 (50/200/25 mg), revised 02/02/2026. LactMed: NBK525506, revised 2026-02-15. The Notion page (created 2026-10-06) has only its title and Category filled. Every other column and the page body are empty.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 1 tab (BIC 50 / FTC 200 / TAF 25 mg) **QD**, with or without food — complete single-tablet regimen; do not add other ARVs<br>• Pregnancy (virologically suppressed <50 copies/mL, stable ART, no resistance to components): same dose; exposure ↓ in pregnancy → monitor viral load closely<br>• ESRD on chronic HD: same dose, given **after HD** on dialysis days (see Renal)<br>• Missed dose (UK SmPC): ≤18 h late → take ASAP; >18 h → skip, resume schedule. Vomited <1 h after dose → take another tablet<br>• Do not chew/crush (bitter); if unable to swallow, may split in half and take both halves immediately (UK)

**Why:** The column is empty. The adult dose is the same in all three labels. The UK SmPC adds the missed-dose, vomiting and splitting rules, and the US and Taiwan labels add the pregnancy dose.

**Sources:** Taiwan insert 衛部藥輸字第027570號 §3.1.2: 'Biktarvy用於成人與體重至少25公斤之兒童病人的建議劑量為每日一次，隨食物或不隨食物口服一錠'; §3.3.1 孕婦建議劑量 (suppressed, '應密切監測病毒量') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.2: 'one tablet containing 50 mg of BIC, 200 mg of FTC, and 25 mg of TAF taken orally once daily with or without food'; §2.4 pregnancy: 'Lower exposures of BIKTARVY were observed during pregnancy; therefore, viral load should be monitored closely'; §7.1 'coadministration with other antiretroviral medications... is not recommended' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.2: 'misses a dose... within 18 hours... take Biktarvy as soon as possible... more than 18 hours... should not take the missed dose'; 'vomits within 1 hour... another tablet should be taken'; 'should not be chewed, or crushed... may be split in half and both halves taken one after the other' https://www.medicines.org.uk/emc/product/9313/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (🇹🇼 TW insert ≈ UK SmPC; CrCl by Cockcroft-Gault)<br>CrCl ≥30: **no adjustment** (UK: patients ≥35 kg)<br>CrCl 15–<30: **avoid** (TW 應避免使用; UK: avoid initiation) · US: not recommended<br>CrCl <15, not on chronic HD: **avoid** (TW 應避免使用; UK: avoid initiation) · US: not recommended<br>ESRD (CrCl <15) on **chronic HD**, adults: no dose change (1 tab QD), **give after HD on dialysis days**. TW/UK: generally avoid; use only if benefit > risk (FTC exposure ↑ markedly, implications unknown). US: only for **virologically suppressed** adults; not recommended if ART-naive with ESRD on HD<br>PD: no label data (FTC removal by PD unknown)<br>CRRT: no data (labels silent)<br>Children: no data for <35 kg with renal impairment or <18 y with ESRD (UK); US 14–<25 kg dose only for CrCl ≥30<br>Note: BIC ↑SCr ~0.1 mg/dL by blocking tubular creatinine secretion; GFR unchanged — not true renal decline

**Why:** The column is empty. Under the ground rules the Taiwan insert governs for the stocked product, and its wording (avoid at CrCl 15–<30; on chronic HD generally avoid unless benefit > risk, dose after HD) is the same as the UK SmPC. The US label is stricter on who qualifies for the HD dose (virologically suppressed adults only; not ART-naive), so its values are shown alongside. No label covers PD or CRRT. The SCr rise has to be shown so it is not mistaken for nephrotoxicity.

**Sources:** Taiwan insert §3.3.2 / §6.7 腎功能不全: 'CrCl≥30毫升/分鐘的病人，並不須調整'; '末期腎病(估計肌酸酐廓清率<15毫升/分鐘)且長期接受血液透析治療的成人病人，並不須調整...通常應避免用於這些病人，只有在認為潛在效益超越可能之風險的情況下，才可使用'; '在進行血液透析當天，應於血液透析治療結束後再投予'; '≥15毫升/分鐘但<30毫升/分鐘，或<15毫升/分鐘但未長期接受血液透析治療的病人，應避免使用' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.2: 'virologically-suppressed adults with an estimated creatinine clearance below 15 mL/min who are receiving chronic hemodialysis. On days of hemodialysis, administer the daily dose of BIKTARVY after completion of hemodialysis treatment'; §2.5/§8.6: not recommended '15 to below 30 mL/min... ESRD... not receiving chronic hemodialysis; or no antiretroviral treatment history and ESRD who are receiving chronic hemodialysis'; §10: 'It is not known whether FTC can be removed by peritoneal dialysis'; §6.1 'BIC has been shown to increase serum creatinine due to inhibition of tubular secretion of creatinine without affecting renal glomerular function' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.2 Renal impairment: 'patients weighing ≥ 35 kg with... CrCl ≥ 30 mL/min'; 'end stage renal disease... chronic haemodialysis... should generally be avoided'; 'No data are available to make dose recommendations in patients weighing < 35 kg with renal impairment or in paediatric patients less than 18 years with end stage renal disease'; §4.4 'emtricitabine exposure was significantly higher... implications of increased emtricitabine exposure remain uncertain' https://www.medicines.org.uk/emc/product/9313/smpc; Eron JJ et al. HIV Med 2025;26:302-307 (PMID 39370144, verified by esummary): B/F/TAF in adults with ESKD on chronic haemodialysis https://pubmed.ncbi.nlm.nih.gov/39370144/

### A3 · Hepatic dose

Child-Pugh A or B: **no adjustment**<br>Child-Pugh C: **not recommended** (not studied)<br>HBV/HCV coinfection or pre-existing liver disease: ↑ risk of hepatic AEs → monitor LFT; consider interruption if liver disease worsens (UK)

**Why:** The column is empty. The Taiwan, US and UK labels all say the same. The hospital site has the Child-Pugh classes swapped (see hospital issues), so the correct mapping must be stated explicitly.

**Sources:** Taiwan insert §6.6: '輕度(Child-Pugh A級)或中度(Child-Pugh B級)肝功能不全的病人，並不建議調整...Biktarvy並不建議用於重度肝功能不全的病人'; §3.3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §8.7: 'No dosage adjustment... mild (Child-Pugh Class A) or moderate (Child-Pugh Class B)... not recommended for use in patients with severe hepatic impairment'; §2.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.2 Hepatic impairment; §4.4 Liver disease: 'If there is evidence of worsening liver disease... interruption or discontinuation of treatment must be considered' https://www.medicines.org.uk/emc/product/9313/smpc

### A4 · Pediatric dose

🇹🇼 TW insert: **≥25 kg** → 1 tab 50/200/25 mg QD (= adult dose); studied in ages 6–<18 y<br>US/UK: also **14–<25 kg** (≥2 y) → BIC 30 / FTC 120 / TAF 15 mg tab QD — **not registered in TW / not stocked**<br><14 kg (UK: or <2 y): not established<br>Renal: 14–<25 kg dose only if CrCl ≥30 (US); no data for <35 kg with renal impairment or <18 y with ESRD (UK)<br>UK: BMD ↓ ≥4% reported in children 3–<12 y on TAF-containing products — monitor per a multidisciplinary plan

**Why:** The column is empty. The stocked product's label (Taiwan) covers only ≥25 kg with the 50/200/25 tablet. The US and UK labels add a 14–<25 kg band that needs the 30/120/15 tablet, which the hospital does not stock (BIK01/BIK02 are 50/200/25 only). Showing both labels with the Taiwan one first follows the ground rules.

**Sources:** Taiwan insert §2 適應症: '成人與體重至少25公斤的兒童病人'; §6.4 小兒: '6至小於18歲且體重至少25公斤的兒童病人' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.3: 'pediatric patients weighing at least 14 kg to less than 25 kg with an estimated creatinine clearance greater than or equal to 30 mL/min'; one 30/120/15 mg tablet QD; §8.4 'Safety and effectiveness... weighing less than 14 kg have not been established' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.2 Paediatric population ('less than 2 years of age or weighing less than 14 kg have not yet been established'); §4.4 Paediatric population: 'Reductions in bone mineral density (BMD ≥ 4%)... aged between 3 to < 12 years who received tenofovir alafenamide-containing products' https://www.medicines.org.uk/emc/product/9313/smpc

### A5 · Indications

HIV

**Why:** The only approved indication in any label is HIV-1 treatment as a complete regimen. HIV PrEP is not approved. HBV is not approved: the product is active against HBV but is not indicated for it. The label details go in Notes: the US and UK lists the indications differently, and Taiwan restricts it to ≥25 kg with no BIC/tenofovir resistance.

**Sources:** US FDA label §1: 'complete regimen for the treatment of... HIV-1 infection in adults and pediatric patients weighing at least 14 kg' (ART-naive, or ART-experienced not suppressed with no INSTI/FTC/tenofovir resistance, or switch when suppressed <50 copies/mL with no BIC/tenofovir resistance) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.1: 'treatment of... HIV-1 infection in adults and paediatric patients at least 2 years of age and weighing at least 14 kg without present or past evidence of viral resistance to bictegravir or tenofovir' https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan insert §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F

### A6 · Coverage

HIV, HBV

**Why:** HIV-1 is the target. The UK SmPC §5.1 says emtricitabine and tenofovir are active against HBV, and the labels' HBV boxed warning and HIV/HBV coinfection data rely on that activity. A caveat goes in Notes: the product is not indicated for HBV monoinfection, and it should not be combined with other HBV nucleos(t)ides. Activity against HIV-2 is in vitro only and has no tag, so it goes in Notes.

**Sources:** UK SmPC §5.1: 'Emtricitabine has activity against HIV-1, HIV-2 and HBV'; 'Tenofovir has activity against HIV-1, HIV-2 and HBV'; HIV/HBV coinfection data from Studies 1490/1878; §4.4 'Biktarvy contains tenofovir alafenamide, which is active against hepatitis B virus (HBV)' https://www.medicines.org.uk/emc/product/9313/smpc; US FDA label §12.4 Antiviral Activity (HIV-1 groups M/N/O; single HIV-2 isolate EC50 1.1 nM) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309

### A7 · Side Effects

GI, CNS, LFT↑, nephrotoxicity, AKI, lactic acidosis, IRIS, weight gain, hypersensitivity, SJS/TEN, anemia, bone loss

**Why:** GI covers the most common reactions (diarrhoea and nausea ≥5%). CNS covers headache, abnormal dreams, dizziness, insomnia, depression and suicidal ideation. LFT↑ covers bilirubin rises in 17% and grade 3–4 AST/ALT in 2–5%. Nephrotoxicity and AKI cover the postmarketing TAF reports of acute renal failure, ATN, PRT and Fanconi syndrome (W&P 5.4). Lactic acidosis is W&P 5.5 and IRIS is W&P 5.3. Weight gain is postmarketing in the US label and common in the UK SmPC. Hypersensitivity (angioedema, urticaria) and SJS/TEN are postmarketing. Bone loss is the UK paediatric BMD warning. All these tags exist in the schema. The HBV flare on stopping has no tag and goes in Notes.

**Sources:** US FDA label §6.1: 'Most common adverse reactions (incidence greater than or equal to 5%...) are diarrhea, nausea, and headache'; Table 1 (abnormal dreams, dizziness, insomnia); 'Suicidal ideation, suicide attempt, and depression suicidal occurred in 2%'; Changes in Bilirubin 17%; Table 2 AST/ALT; §6.2 'Acute renal failure, acute tubular necrosis, proximal renal tubulopathy, and Fanconi syndrome... Angioedema, Stevens-Johnson syndrome/toxic epidermal necrolysis, and urticaria... Weight increased'; §5.3, §5.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.8 Table 2 (Common: weight increased; Rare: Stevens-Johnson syndrome); §4.4 Paediatric BMD https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan insert §8.1–8.3, §5.1.3–5.1.5 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F

### A8 · Monitor

viral load, HBV serology, renal, electrolyte, LFT, lipids, glucose

**Why:** HBV testing before starting is required by every label (Taiwan §3.1.1, US §2.1). SCr, CrCl, urine glucose and urine protein are needed at baseline and during treatment ('renal'), with serum phosphorus in CKD ('electrolyte'). Viral load must be watched closely in pregnancy and confirms response. LFTs are needed after stopping in HIV/HBV coinfection (boxed warning) and in pre-existing liver disease. The UK SmPC asks for lipid monitoring under HIV guidelines, and the US label reports grade 3–4 LDL >190 mg/dL in 4–5%.

**Sources:** Taiwan insert §3.1.1: '應檢測病人是否患有B型肝炎病毒(HBV)感染症... 評估血清肌酸酐、估計肌酸酐廓清率、尿糖及尿蛋白。對慢性腎病病人，也應評估血磷' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.1; Boxed Warning 'Closely monitor hepatic function with both clinical and laboratory follow-up for at least several months'; §2.4 'viral load should be monitored closely'; Table 2 LDL-cholesterol https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.4 Weight and metabolic parameters ('For monitoring of blood lipids and glucose reference is made to established HIV treatment guidelines'); Liver disease https://www.medicines.org.uk/emc/product/9313/smpc

### A9 · Mechanism

**BIC** — INSTI: blocks HIV-1 integrase strand transfer → viral DNA not integrated into host genome<br>**FTC** — cytidine-analogue NRTI: FTC-triphosphate competes with dCTP → chain termination<br>**TAF** — phosphonamidate prodrug of tenofovir; hydrolysed in cells (cathepsin A in PBMC, CES1 in hepatocytes) → tenofovir-diphosphate (intracellular t½ 150–180 h) → chain termination. Lower plasma tenofovir than TDF<br>FTC + tenofovir also active against HBV<br>PK: BIC t½ ~17 h, >99% protein bound, CYP3A + UGT1A1 substrate, inhibits OCT2/MATE1; FTC ~70% renal; TAF P-gp/BCRP substrate<br>Resistance: INSTI — G140A/C/S + Q148H/R/K (± L74M/T97A/E138A/K), G118R; FTC — M184V/I (cross-resistance 3TC); tenofovir — K65R, K70E

**Why:** The column is empty. The mechanism, PK and resistance facts come from the US label §12.3/12.4 and match Taiwan insert §10.1 and UK SmPC §5.1.

**Sources:** US FDA label §12.4 Mechanism of Action and Resistance/Cross-Resistance: 'All isolates (n=14) with more than 2.5-fold reduced susceptibility to BIC... contained G140A/C/S and Q148H/R/K substitutions'; 'M184V/I... cross-resistant to lamivudine'; 'K65R and K70E'; §12.3 Table 4 (t½ 17.3 h; >99% bound; CYP3A, UGT1A1; tenofovir diphosphate 150–180 h in PBMCs) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan insert §10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §5.1 https://www.medicines.org.uk/emc/product/9313/smpc

### A10 · Drug Interactions

⛔ **Contraindicated** (US/TW): dofetilide (↑ via OCT2/MATE1); rifampin (BIC AUC ↓75%). UK §4.3: rifampicin + St John's wort (dofetilide not mentioned in UK SmPC)<br>**Not recommended**: rifabutin (BIC AUC ↓38%), rifapentine; carbamazepine, oxcarbazepine, phenobarbital, phenytoin (use another anticonvulsant); St John's wort; other ARVs (complete regimen). UK also: atazanavir (BIC AUC ↑~4×, +306–315%), ciclosporin (IV/PO), sucralfate; HBV products with TAF/TDF/3TC/adefovir<br>**Polyvalent cations (chelation; incl. sucralfate, buffered drugs)**: Al/Mg antacids → Biktarvy ≥2 h before or 6 h after (UK: ≥2 h before, or with food 2 h after); Ca/Fe → take together **with food**; avoid fasting co-administration. Pregnancy: Al/Mg 2 h before/6 h after regardless of food; Ca/Fe with food, or 2 h before/6 h after if fasting<br>**Metformin**: AUC ↑39% — check metformin; monitor in moderate renal impairment (UK)<br>**Renally secreted/nephrotoxic drugs** (acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides, high-dose/multiple NSAIDs) → ↑FTC/tenofovir, renal AE risk<br>P-gp/BCRP inhibitors (azithro/clarithromycin, itraconazole, posaconazole) may ↑BIC — caution (UK); voriconazole BIC AUC ↑61%, no adjustment<br>No significant interaction: ethinyl estradiol/norgestimate, midazolam, sertraline, ledipasvir/sofosbuvir, sofosbuvir/velpatasvir(/voxilaprevir)<br>Others → Liverpool HIV checker https://www.hiv-druginteractions.org/checker

**Why:** The column is empty. Interactions are critical for an INSTI-based ART product. The contraindications and Table 3 of the US label are the same as Taiwan insert §4 and 表1. The UK SmPC is stricter: it contraindicates St John's wort and adds not-recommended drugs (atazanavir, ciclosporin, HBV products). The cation-timing rules are the most common practical problem. The ground rules ask for a pointer to the Liverpool checker; that site was not reachable from this environment, so the URL is cited as a pointer only.

**Sources:** Taiwan insert §4 禁忌 (dofetilide, rifampin); §7.4; §7.5 表1 (anticonvulsants, rifabutin/rifapentine, 聖約翰草 '不建議', cations, metformin) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §4; §7.4 'acyclovir, cidofovir, ganciclovir, valacyclovir, valganciclovir, aminoglycosides (e.g., gentamicin), and high-dose or multiple NSAIDs'; §7.5 Table 3; §7.6; §12.3 Table 10 (rifampin AUC 0.25; rifabutin 0.62; voriconazole 1.61), Table 12 (metformin AUC 1.39) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.3: 'Co-administration with rifampicin and St. John's wort'; §4.4 'not recommended... atazanavir, carbamazepine, ciclosporin (IV or oral use), oxcarbazepine, phenobarbital, phenytoin, rifabutin, rifapentine, or sucralfate'; §4.5 'should not be administered concomitantly with medicinal products containing tenofovir alafenamide, tenofovir disoproxil, lamivudine or adefovir dipivoxil used for the treatment of HBV'; macrolides/azoles caution; metformin 'moderate renal impairment, close monitoring' https://www.medicines.org.uk/emc/product/9313/smpc

### A11 · Pregnancy

US/🇹🇼 TW: **recommended** for pregnant people who are **virologically suppressed** (<50 copies/mL) on stable ART with no resistance to components: 1 tab QD. Exposures ↓ in 2nd/3rd trimester (BIC AUC ~60% lower than postpartum) → **monitor viral load closely**. Study (n=33): all 32 completers stayed suppressed; all 29 infants HIV-negative<br>APR: no significant ↑ in major birth defects vs 2.7% background for BIC, FTC or TAF<br>Not studied in viraemic/ART-naive pregnancy<br>UK SmPC: may be used if benefit justifies risk<br>Antacid/cation spacing differs in pregnancy (see DI). Register with APR. (FDA letter categories retired)

**Why:** The column is empty. The current US and Taiwan labels give a pregnancy dose (US §2.4 / TW §3.3.1) based on Study 5310. This replaces the older 'insufficient data' position that the hospital site still shows. The UK SmPC wording is more cautious.

**Sources:** US FDA label §2.4; §8.1: 'All 32 adult participants who completed the study maintained viral suppression... All 29 neonate participants had negative/nondetectable HIV-1 PCR'; 'no statistically significant difference in the overall risk of major birth defects for BIC, FTC, or TAF compared with the background rate... 2.7%'; §12.3 Table 9 (BIC AUCtau 62.8/60.2 vs 148.3 postpartum) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan insert §3.3.1 孕婦建議劑量; §6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.6: 'Biktarvy may be used during pregnancy if the potential benefit justifies the potential risk to the foetus' https://www.medicines.org.uk/emc/product/9313/smpc; Zhang H et al. AIDS 2024;38:F1-F9 (PMID 37939141, verified by esummary) https://pubmed.ncbi.nlm.nih.gov/37939141/

### A12 · Breastfeeding

BIC, FTC, TAF and tenofovir **are present in human milk** (US/TW). BIC levels low (RID ~0.7%; one infant serum 103 mcg/L) (LactMed). No adverse infant effects reported for FTC/TAF; no BIC infant data<br>Risks: HIV transmission, resistance in HIV+ infant, adult-type AEs<br>LactMed: with **sustained undetectable VL** on ART, breastfeeding transmission <1% (not zero) → support an informed choice to breastfeed; VL not suppressed → formula or banked pasteurized donor milk. Alternative: raltegravir<br>UK SmPC (older wording): should not be used during breastfeeding; advises women with HIV not to breastfeed

**Why:** The column is empty. LactMed is the primary breastfeeding source under the ground rules. The US and Taiwan labels now say all components are in milk. The UK SmPC still says BIC excretion is unknown and advises against breastfeeding, so the two positions differ and the UK one is shown as such.

**Sources:** LactMed 'Bictegravir' NBK525506 (rev. 2026-02-15): 'Maternal bictegravir 50 mg once daily produce low levels in milk and infant serum... decreases breastfeeding transmission risk to less than 1%, but not zero... sustained undetectable viral load and who choose to breastfeed should be supported... If a viral load is not suppressed, banked pasteurized donor milk or formula is recommended'; Drug Levels 'RID was 0.68%'; infant serum 103 mcg/L; Alternate Drugs: Raltegravir https://www.ncbi.nlm.nih.gov/books/NBK525506/; US FDA label §8.2: 'Data from the published literature report the presence of BIC, FTC, TAF, and tenofovir in human milk' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan insert §6.2 哺乳: 'BIC、FTC、TAF和tenofovir會出現於人類的乳汁中' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.6: 'Biktarvy should not be used during breast-feeding... recommended that women with HIV do not breast-feed' https://www.medicines.org.uk/emc/product/9313/smpc; van der Wekken-Pas LC et al. J Antimicrob Chemother 2026;81:dkag022 (PMID 41628196, verified by esummary)

### A13 · Notes

⚠️ **Boxed warning (US/TW): post-treatment acute HBV exacerbation** in HIV/HBV coinfection on stopping (停藥可能B肝急性惡化) → test HBV before start; avoid interruption; if stopped, monitor LFT clinically + lab for several months; consider anti-HBV therapy. Do not co-prescribe other TAF/TDF/3TC/adefovir HBV products (UK)<br>• Single-tablet complete regimen for HIV-1 only; not for PrEP; not indicated for HBV monoinfection. HIV-2: in vitro activity only<br>• Indication wording: TW = adults + children ≥25 kg without BIC/tenofovir resistance; US = ≥14 kg, naive / non-suppressed without INSTI·FTC·TFV resistance / switch when suppressed; UK = ≥2 y & ≥14 kg<br>• **SCr ↑ ~0.1 mg/dL by week 4** (BIC blocks tubular secretion, GFR unchanged) — expected, stable. True TAF renal toxicity: ARF, PRT, Fanconi → stop if significant decline/Fanconi<br>• IRIS (MAC, CMV, PCP, TB) and autoimmune (Graves, GBS) possible after starting<br>• Lactic acidosis/hepatomegaly with steatosis (NRTI) → suspend<br>• Suicidal ideation/attempt ~2%, mostly with psychiatric history<br>• Bilirubin ↑ 17% (grade 1–2, no liver injury)<br>• FJUH: BIK01 (健保) / BIK02 (公費) — 50/200/25 mg tab only<br>• Regimen choice: DHHS adult & adolescent ARV guidelines (clinicalinfo.hiv.gov); DDIs: Liverpool checker

**Why:** Under the ground rules the boxed warning must appear in Notes. Everything else that has no multi-select option also goes here: HBV flare, HIV-2, the indication nuances, the SCr artefact, the stocked-product codes and the guideline pointers. Each statement is from a label. The DHHS and Liverpool items are pointers only; clinicalinfo.hiv.gov and hiv-druginteractions.org are blocked from this environment (proxy 403), so no DHHS content claim is made and reviewer B should check them.

**Sources:** US FDA label Boxed Warning (SPL XML, effective 2026-09-09): 'WARNING: POST TREATMENT ACUTE EXACERBATION OF HEPATITIS B... Closely monitor hepatic function with both clinical and laboratory follow-up for at least several months... If appropriate, anti-hepatitis B therapy may be warranted'; §5.3, §5.4, §5.5, §6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan insert 特殊警語 '警語：治療後B型肝炎急性惡化'; §5.1.3 免疫重建症候群; §5.1.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.4, §4.5 https://www.medicines.org.uk/emc/product/9313/smpc

### A14 · Page body

# Biktarvy 吉他韋膜衣錠 (Bictegravir/Emtricitabine/Tenofovir alafenamide)<br>FJUH BIK01 (健保 BC27570100) / BIK02 (公費) · PO tab BIC 50 / FTC 200 / TAF 25 mg · ATC J05AR20 · TW licence 衛部藥輸字第027570號<br>## Key points<br>- INSTI + 2 NRTI single-tablet complete regimen for HIV-1; 1 tab QD with or without food<br>- ⚠️ Boxed warning: HBV flare after stopping in HIV/HBV coinfection — test HBV first<br>- Contraindicated with dofetilide and rifampin; separate from Al/Mg antacids (2 h before / 6 h after); take Ca/Fe with food<br>- Renal: no change for CrCl ≥30; avoid at 15–<30 or <15 without HD; ESRD on chronic HD: same dose after HD (TW/UK: only if benefit > risk; US: suppressed adults only)<br>- Hepatic: Child-Pugh A/B no change; C not recommended<br>- SCr ↑ ~0.1 mg/dL is expected (tubular secretion), not nephrotoxicity<br>- Pregnancy: recommended if virologically suppressed; monitor VL (lower exposure)<br>- Breastfeeding: all components in milk; LactMed supports an informed choice if VL is sustained undetectable<br>## Monitoring<br>HBV serology at baseline; SCr/CrCl, urine glucose, urine protein (+ phosphate in CKD); HIV RNA; LFT (especially after stopping in HBV coinfection); lipids<br>## References<br>1. US FDA label BIKTARVY (Gilead), DailyMed setid 664cb8f0-1f65-441b-b0d9-ba3d798be309 v26 (2026-09) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309<br>2. UK SmPC Biktarvy 50/200/25 mg, eMC 9313, rev. 02/02/2026 https://www.medicines.org.uk/emc/product/9313/smpc<br>3. Taiwan insert 吉他韋膜衣錠 衛部藥輸字第027570號, v4 2025-03-17 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F<br>4. LactMed: Bictegravir, NBK525506, rev. 2026-02-15 https://www.ncbi.nlm.nih.gov/books/NBK525506/<br>5. Gallant J et al. Lancet 2017;390:2063-72 (GS-US-380-1489) PMID 28867497<br>6. Sax PE et al. Lancet 2017;390:2073-82 (GS-US-380-1490) PMID 28867499<br>7. Eron JJ et al. HIV Med 2025;26:302-7 (B/F/TAF in ESKD on HD) PMID 39370144<br>8. Zhang H et al. AIDS 2024;38:F1-F9 (pregnancy PK) PMID 37939141<br>9. Liverpool HIV Drug Interactions checker https://www.hiv-druginteractions.org/checker

**Why:** The page body is blank. Other new entries have a short summary plus References. Every item comes from the columns proposed above, and every PMID was checked with NCBI esummary. Storage details are left out on purpose.

**Sources:** US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; LactMed https://www.ncbi.nlm.nih.gov/books/NBK525506/; PubMed esummary verified: 28867497 (Gallant, Lancet 2017;390:2063-2072), 28867499 (Sax, Lancet 2017;390:2073-2082), 39370144 (Eron, HIV Med 2025;26:302-307), 37939141 (Zhang, AIDS 2024;38:F1-F9), 41628196 (van der Wekken-Pas, JAC 2026;81)

### B1 · Adult dose

<span color="blue">`PO`</span> 1 tab (BIC 50 mg / FTC 200 mg / TAF 25 mg) QD, with or without food (TW 仿單 3.1.2; US §2.2; UK 4.2)<br>Complete regimen: do not add other ARVs (US §7.1)<br>Pregnancy (virologically suppressed <50 copies/mL on stable ART, no resistance to any component): same 1 tab QD; exposure ↓ in pregnancy → monitor VL closely (US §2.4; TW 3.3.1)<br>Missed dose: take if ≤18 h late, skip if >18 h; vomit <1 h after dose → take another tab (UK 4.2)<br>Cannot swallow whole: may split in half and take both halves at once; do not chew/crush (bitter) (UK 4.2)<br>Before start: test HBV; SCr, CrCl, urine glucose, urine protein (+ serum phosphate if CKD) (US §2.1; TW 3.1.1)

**Why:** The column is empty. The labels give a single fixed dose with no indication-specific variants. Missed-dose, vomiting and tablet-splitting advice is from the UK SmPC only; the testing requirements are from the US label and the Taiwan insert.

**Sources:** US FDA label (DailyMed) Biktarvy v26, Sep 14 2026, §2.1, §2.2, §2.4, §7.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC Biktarvy 50/200/25 mg (rev 02/02/2026) §4.2: https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan 仿單 衛部藥輸字第027570號 v4 (2025-03-17) §3.1.1, 3.1.2, 3.3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F

### B2 · Renal dose, HD, CRRT

CrCl ≥30: no adjustment (TW 仿單 3.3.2/6.7; US §8.6; UK 4.2 adds 'weighing ≥35 kg')<br>CrCl 15–<30, or <15 not on chronic HD: avoid (TW, UK) / not recommended (US)<br>ESRD (CrCl <15) on chronic HD, adults: 1 tab QD, no adjustment; on HD days give after dialysis. TW 仿單 & UK: generally avoid, use only if benefit > risk (FTC exposure ↑, significance unknown). US: only for virologically-suppressed adults; not recommended for ART-naive patients with ESRD on HD (US §2.2, §2.5, §8.6)<br>Evidence: Trial 1825 extension, n=10 suppressed HD adults switched to B/F/TAF, all <50 copies/mL at wk 48; BIC trough lower but 4–7× above protein-adjusted EC95 (Eron, HIV Med 2025, PMID 39370144)<br>PD: no label recommendation (single case report, PMID 36448263)<br>CRRT: no label or published data; individualise with ID/pharmacy (CRRT 無資料)<br>HD removes ~30% of FTC dose (3-h session); tenofovir extraction ~54% (US §10)<br>BIC ↑ SCr ~0.1 mg/dL by wk 4 (blocks tubular creatinine secretion, GFR unchanged): not true nephrotoxicity (US §6.1; TW 10.2)

**Why:** The column is empty. Per the ground rules, the Taiwan insert governs because it covers the stocked product; its wording matches the UK SmPC except for the UK ≥35 kg qualifier. The US label is stricter on HD: suppressed adults only, and not for ART-naive patients. No label covers CRRT. A PubMed search ('bictegravir AND (continuous renal replacement OR CRRT OR hemofiltration)') returned only one lactic-acidosis case report (PMID 41439661), with no dosing data. HD PK and efficacy data come from the verified PMID 39370144.

**Sources:** Taiwan 仿單 v4 §3.3.2, §5.1.4, §6.7, §10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.2, §2.5, §6.1, §8.6, §10, §12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.2, §4.4: https://www.medicines.org.uk/emc/product/9313/smpc; Eron JJ et al. HIV Med 2025;26:302-307, PMID 39370144 (esummary verified): https://pubmed.ncbi.nlm.nih.gov/39370144/; Partosh D et al. Int J STD AIDS 2023 (PD case report), PMID 36448263 (esummary verified): https://pubmed.ncbi.nlm.nih.gov/36448263/

### B3 · Hepatic dose

Child-Pugh A or B: no adjustment<br>Child-Pugh C: not recommended (not studied) (TW 仿單 3.3.3/6.6; US §2.6/8.7; UK 4.2)<br>HBV/HCV co-infection or pre-existing liver disease: ↑ risk of hepatic ADRs; monitor LFT, consider stopping if liver disease worsens (UK 4.4)

**Why:** The column is empty. All three labels agree. This is also the correct version of the hospital-site field, which has the Child-Pugh classes swapped.

**Sources:** Taiwan 仿單 v4 §3.3.3, §6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.6, §8.7: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.2, §4.4: https://www.medicines.org.uk/emc/product/9313/smpc

### B4 · Pediatric dose

<span color="blue">`PO`</span> ≥25 kg: 1 tab 50/200/25 mg QD (TW 仿單 3.1.2: Taiwan approval is ≥25 kg only; stocked strength)<br>≥2 y and 14–<25 kg: 30/120/15 mg tab QD (US §2.3; UK SmPC product 15334). Not stocked or registered in Taiwan<br><14 kg (or <2 y): not established (US §8.4; UK 4.2)<br>Renal: US paediatric dosing requires CrCl ≥30; UK: no data for <35 kg with renal impairment or for <18 y with ESRD<br>TAF-containing products: spine/TBLH BMD ↓ ≥4% reported at 3–<12 y (UK 4.4)

**Why:** The column is empty. The weight bands differ between labels: Taiwan approves ≥25 kg only, while the US and UK approve ≥14 kg with the 30/120/15 mg tablet.

**Sources:** Taiwan 仿單 v4 §2, §3.1.2, §6.4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; US FDA label §2.2, §2.3, §8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC 50/200/25 §4.2, §4.4: https://www.medicines.org.uk/emc/product/9313/smpc; UK SmPC 30/120/15 mg (product 15334, rev 02/02/2026) §4.1, §4.2: https://www.medicines.org.uk/emc/product/15334/smpc

### B5 · Indications

HIV

**Why:** The only approved indication is HIV-1 treatment as a complete regimen: US §1 (≥14 kg: ART-naive, or switch when suppressed); UK 4.1 (≥2 y, ≥14 kg, no BIC/tenofovir resistance); TW §2 (adults and children ≥25 kg). Do NOT tag 'HIV PrEP', which is not approved, or 'HBV', which is not a labelled indication (put HBV activity in Coverage/Notes).

**Sources:** US FDA label §1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.1: https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan 仿單 v4 §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F

### B6 · Coverage

HIV, HBV

**Why:** HIV-1 is the target of all three components (US §12.4). HBV: the UK SmPC 4.4 states Biktarvy 'contains tenofovir alafenamide, which is active against hepatitis B virus', and the HBV-flare boxed warning reflects this activity. The ALLIANCE RCT (PMID 37494942) showed HBV DNA <29 IU/mL in 63% on B/F/TAF vs 43% on DTG+FTC/TDF at week 48 in HIV/HBV co-infection. HBV is activity only, not a licensed indication; say so in Notes. HIV-2 activity is in vitro only (US §12.4: one isolate), so add no tag for it.

**Sources:** UK SmPC §4.4: https://www.medicines.org.uk/emc/product/9313/smpc; US FDA label §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Avihingsanon A et al. ALLIANCE, Lancet HIV 2023;10:e640-52, PMID 37494942 (esummary verified): https://pubmed.ncbi.nlm.nih.gov/37494942/

### B7 · Side Effects

GI, CNS, LFT↑, nephrotoxicity, AKI, lactic acidosis, IRIS, weight gain, hypersensitivity, SJS/TEN, anemia, bone loss

**Why:** Each tag maps to label text. GI: diarrhoea, nausea, abdominal distension; most common ≥5% (US §6.1). CNS: headache, dizziness, abnormal dreams, insomnia, depression; suicidal ideation in 2%, mostly with psychiatric history (US §6.1; UK 4.8). LFT↑: ALT/AST Gr3–4 2–5%; total bilirubin ↑ 17%, mostly Gr 1–2 (US §6.1). nephrotoxicity/AKI: new or worsening renal impairment, acute renal failure, ATN, proximal renal tubulopathy, Fanconi with TAF (US §5.4, §6.2; TW 5.1.4). lactic acidosis/hepatomegaly with steatosis (US §5.5; TW 5.1.5). IRIS (US §5.3; UK 4.4). weight gain: 'weight increased' (US §6.2; UK 4.8 common). hypersensitivity: angioedema, urticaria (US §6.2; UK 4.8). SJS/TEN (US §6.2; UK 4.8 rare). anemia: UK 4.8 uncommon. bone loss: paediatric BMD ↓ with TAF products; osteonecrosis (UK 4.4). CK and amylase Gr3–4 rises were similar to comparators; mention them in Notes rather than tagging.

**Sources:** US FDA label §5.3–5.5, §6.1, §6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.4, §4.8: https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan 仿單 v4 §5.1.3–5.1.5, §8.2, §8.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F

### B8 · Monitor

viral load, HBV serology, renal, electrolyte, LFT, lipids, glucose

**Why:** viral load: monitor closely in pregnancy (US §2.4; UK 4.6). HBV serology: test before start (US §2.1, §5.1; TW 3.1.1). renal: SCr, CrCl, urine glucose, urine protein at baseline and during treatment (US §2.1/5.4). electrolyte: serum phosphate in CKD (US §2.1). LFT: HBV co-infection after stopping, and pre-existing liver disease (US §5.1; UK 4.4). lipids and glucose: UK 4.4 says weight, lipids and glucose may increase and should be monitored per HIV guidelines; LDL >190 mg/dL Gr3–4 in 4–5% (US §6.1). Do not add TDM: no label recommends it.

**Sources:** US FDA label §2.1, §2.4, §5.1, §5.4, §6.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; UK SmPC §4.4, §4.6: https://www.medicines.org.uk/emc/product/9313/smpc; Taiwan 仿單 v4 §3.1.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F

### B9 · Mechanism

BIC: integrase strand-transfer inhibitor (INSTI), blocks integration of HIV-1 DNA into the host genome<br>FTC: cytidine-analogue NRTI → FTC-triphosphate competes with dCTP → chain termination<br>TAF: phosphonamidate prodrug of tenofovir, converted intracellularly (cathepsin A in PBMC; CES1 in hepatocytes) → tenofovir diphosphate → chain termination (US §12.4; TW 10.1)<br>TAF also active vs HBV (UK 4.4); HBV flare on stopping FTC/tenofovir products (boxed warning)<br>PK: BIC t½ ~17 h, >99% protein-bound, CYP3A + UGT1A1 substrate; FTC renal (70% urine); TFV-DP intracellular t½ 150–180 h (US §12.3)

**Why:** The column is empty. The text is taken from the label microbiology and PK sections.

**Sources:** US FDA label §12.3, §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan 仿單 v4 §10.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.4: https://www.medicines.org.uk/emc/product/9313/smpc

### B10 · Drug Interactions

⛔ **Contraindicated**: rifampin/rifampicin (BIC AUC ↓75% → failure/resistance); dofetilide (↑dofetilide via OCT2/MATE1 inhibition) (US/TW §4). UK 4.3 contraindicates rifampicin + St John's wort (dofetilide not listed in UK)<br>**Not recommended**: rifabutin (BIC AUC ↓38%), rifapentine, St John's wort (US/TW); carbamazepine, oxcarbazepine, phenobarbital, phenytoin → use alternative anticonvulsant (US Table 3/TW 表1). UK also lists atazanavir (BIC ↑~3×), ciclosporin (IV/PO) and sucralfate (UK 4.4)<br>Other ARVs: complete regimen, do not co-administer (US §7.1). UK: do not combine with HBV products containing TAF, TDF, lamivudine or adefovir (UK 4.5)<br>**Polyvalent cations** (non-pregnant): Al/Mg antacids → Biktarvy ≥2 h before or 6 h after (US/TW) [UK: ≥2 h before, or with food 2 h after]. Ca/Fe supplements: take together WITH food; not together fasting (US/TW)<br>Pregnant: Al/Mg 2 h before or 6 h after regardless of food; Ca/Fe with food, or 2 h before / 6 h after if fasting (US Table 3; TW 表1)<br>Metformin: AUC ↑39% → assess per metformin PI (US/TW); UK: no adjustment if renal function normal, monitor closely in moderate renal impairment (lactic acidosis risk)<br>Drugs secreted by renal tubules or nephrotoxic (acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides, high-dose/multiple NSAIDs): ↑ FTC/TFV and ↑ renal AE risk (US §7.4; TW 7.4)<br>P-gp/BCRP inhibitors (azithro/clarithromycin, itra/posaconazole, ciclosporin): may ↑ BIC → caution (UK 4.5)<br>No significant interaction: sertraline, midazolam, ethinyl estradiol/norgestimate, sofosbuvir-based DAAs (US §7.6); UK adds methadone, buprenorphine, atorvastatin, rosuvastatin, omeprazole, famotidine, amlodipine (UK 4.5)<br>Others → Liverpool HIV interaction checker https://www.hiv-druginteractions.org/checker

**Why:** The column is empty. Interactions are critical for an INSTI-based regimen (rifamycins, chelating cations). The labels disagree: the US and Taiwan contraindicate dofetilide and rifampin; the UK contraindicates rifampicin and St John's wort. The UK Al/Mg rule also differs. Both versions are shown.

**Sources:** US FDA label §4, §7.1–7.6 (Table 3): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan 仿單 v4 §4, §7.1–7.6 (表1): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.3, §4.4, §4.5: https://www.medicines.org.uk/emc/product/9313/smpc; University of Liverpool HIV Drug Interactions checker: https://www.hiv-druginteractions.org (not fetched: host blocked by proxy)

### B11 · Pregnancy

Recommended for virologically-suppressed (<50 copies/mL) pregnant patients on stable ART with no resistance to any component: 1 tab QD. BIC/FTC/TAF exposures ↓ in 2nd/3rd trimester → monitor VL closely (US §2.4/8.1; TW 3.3.1/6.1). Studied only in suppressed patients (n=33; all 32 completers stayed suppressed; 29 neonates HIV-negative)<br>APR: no ↑ major birth defects vs 2.7% background (BIC >500, FTC >6,500, TAF >1,200 live-birth exposures) (US §8.1)<br>UK 4.6: may be used if benefit justifies risk; monitor VL<br>Cation spacing is stricter in pregnancy (see Drug Interactions)<br>PK study: Zhang H, AIDS 2024, PMID 37939141<br>孕期以抑制中之病人為主要對象; no data for starting in viraemic pregnant patients

**Why:** The column is empty. Per the ground rules, no letter category is used. The current US and Taiwan labels give a specific recommended dose in pregnancy, and the UK wording is shown alongside.

**Sources:** US FDA label §2.4, §8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan 仿單 v4 §3.3.1, §6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/9313/smpc; Zhang H et al. AIDS 2024;38:1-?, PMID 37939141 (esummary verified): https://pubmed.ncbi.nlm.nih.gov/37939141/

### B12 · Breastfeeding

LactMed (rev 2026-02-15): maternal BIC 50 mg QD gives low milk (median 57 mcg/L; RID 0.68% after a single dose) and infant serum levels. With ART and a sustained undetectable VL, breastfeeding transmission is <1% but not zero; support people who choose to breastfeed. If VL is not suppressed → banked donor milk or formula<br>BIC, FTC, TAF and tenofovir are present in human milk; no data on BIC effects in the infant; no reported FTC/TAF adverse effects (US §8.2; TW 6.2)<br>Risks: HIV transmission, resistance in an infected infant, infant ADRs (US §8.2)<br>UK 4.6 (more restrictive): should not be used during breast-feeding; women with HIV advised not to breastfeed

**Why:** The column is empty. LactMed is the preferred breastfeeding source per the ground rules. The UK SmPC still says BIC excretion is 'not known' and advises against breastfeeding, while the US and Taiwan labels say BIC is present in milk. The label difference is shown.

**Sources:** LactMed 'Bictegravir' NBK525506 (rev 2026-02-15), Summary & Drug Levels: https://www.ncbi.nlm.nih.gov/books/NBK525506/; US FDA label §8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan 仿單 v4 §6.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/9313/smpc; Aebi-Popp K et al. J Antimicrob Chemother 2022, PMID 36177836; van der Wekken-Pas LC et al. J Antimicrob Chemother 2026, PMID 41628196 (both esummary verified): https://pubmed.ncbi.nlm.nih.gov/36177836/ , https://pubmed.ncbi.nlm.nih.gov/41628196/

### B13 · Notes

⚠ **Boxed warning** (US; TW 特殊警語): severe acute HBV exacerbation in HIV/HBV co-infection after stopping (FTC/TAF). Test HBV before start; after discontinuation, monitor clinically and with labs for ≥ several months; anti-HBV therapy may be needed, especially with cirrhosis (US §5.1; TW 5.1.1; UK 4.4)<br>HBV activity: ALLIANCE RCT (HIV/HBV, ART-naive): HBV DNA <29 IU/mL at wk 48 in 63% on B/F/TAF vs 43% on DTG+FTC/TDF (PMID 37494942). Not licensed for HBV alone<br>SCr ↑ ~0.11 mg/dL by wk 4 then stable (tubular secretion inhibition); 非真正腎功能下降. Discontinue if clinically significant ↓ renal function or Fanconi (US §5.4, §6.1)<br>Bilirubin ↑ in 17% (mostly Gr 1–2, no hepatic AE) (US §6.1; UK 4.8)<br>Suicidal ideation/attempt ~2%, mostly with prior depression/psychiatric history (US §6.1; UK 4.8)<br>IRIS early in therapy; autoimmune disease (Graves, GBS, autoimmune hepatitis) may occur months later (US §5.3)<br>Lactic acidosis / severe hepatomegaly with steatosis: suspend if suspected (US §5.5)<br>Rifampicin-based TB: label contraindication stands. INSIGHT phase 2b (Lancet HIV 2026, PMID 41344350) used B/F/TAF BID during rifampicin TB therapy (94% <50 copies/mL at wk 24): off-label, ID consult only<br>Resistance (US §12.4): FTC M184V/I (cross-resistant with 3TC); tenofovir K65R, K70E; BIC in vitro-selected M50I/R263K (≤3-fold ↓ susceptibility). Indicated only without known/suspected INSTI/FTC/tenofovir resistance (US §1)<br>TW 仿單 indication: adults and children ≥25 kg; 50/200/25 tab only (no 14–25 kg band in Taiwan)<br>本院: BIK01 (健保) / BIK02 (公費), same tablet

**Why:** The column is empty. The ground rules require the boxed warning in Notes. The other items are high-yield label safety points, HBV-activity evidence (no HBV tag option fits Indications), and the off-label TB evidence the labels do not cover. CRRT and TDM have no label or published data (PubMed search), so they appear only in the Renal field.

**Sources:** US FDA label boxed warning, §1, §5.1–5.5, §6.1, §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309; Taiwan 仿單 v4 特殊警語, §2, §5.1.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F; UK SmPC §4.4, §4.8: https://www.medicines.org.uk/emc/product/9313/smpc; Avihingsanon A et al. Lancet HIV 2023, PMID 37494942 (verified): https://pubmed.ncbi.nlm.nih.gov/37494942/; Naidoo A et al. INSIGHT, Lancet HIV 2026;13:e9-e20, PMID 41344350 (esummary/abstract verified): https://pubmed.ncbi.nlm.nih.gov/41344350/

### B14 · Page body

### References<br>1. US FDA label, Biktarvy (DailyMed setid 664cb8f0-1f65-441b-b0d9-ba3d798be309, v26, Sep 2026): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309<br>2. UK SmPC Biktarvy 50/200/25 mg (rev 02/02/2026): https://www.medicines.org.uk/emc/product/9313/smpc ; 30/120/15 mg: https://www.medicines.org.uk/emc/product/15334/smpc<br>3. 吉他韋膜衣錠 仿單 衛部藥輸字第027570號 (v4, 2025-03-17): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027570%E8%99%9F<br>4. LactMed: Bictegravir (NBK525506, rev 2026-02-15): https://www.ncbi.nlm.nih.gov/books/NBK525506/<br>5. Eron JJ et al. HIV Med 2025 (B/F/TAF in ESKD on HD). PMID 39370144<br>6. Avihingsanon A et al. Lancet HIV 2023 (ALLIANCE, HIV/HBV). PMID 37494942<br>7. Naidoo A et al. Lancet HIV 2026 (INSIGHT, BID with rifampicin). PMID 41344350<br>8. Zhang H et al. AIDS 2024 (pregnancy PK). PMID 37939141<br>9. Liverpool HIV drug interaction checker: https://www.hiv-druginteractions.org

**Why:** The page body is blank, while other new entries carry at least a References section. A short reference list makes the new column text traceable. Optionally, the owner can add a summary in the house layout generated from the columns.

**Sources:** All PMIDs checked with NCBI E-utilities esummary on 2026-10-06: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=39370144,37494942,41344350,37939141

### B15 · Category

Antiretroviral (INSTI + 2 NRTI, STR) (no change)

**Why:** Verified as correct: BIC is an INSTI, and FTC and TAF are both described as HIV NRTIs (TAF is a nucleotide analogue). The product is a single-tablet complete regimen. No edit is needed; this finding is listed only to record that the column was checked.

**Sources:** US FDA label §1, §11: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309

## Apply log

- Adult dose: merged both proposals (single tab QD, baseline HBV/renal tests, pregnancy, HD timing, missed dose/vomit, split-tablet rule)
- Renal dose, HD, CRRT: merged (CrCl tiers TW/UK/US, ESRD on HD after dialysis, Eron 2025 evidence, HD removal %, PD case report, CRRT no data, pediatric renal, SCr artefact)
- Hepatic dose: Child-Pugh A/B no change, C not recommended, coinfection LFT monitoring
- Pediatric dose: TW >=25 kg; US/UK 14-<25 kg 30/120/15 tab (not registered/stocked in TW); <14 kg not established; renal; BMD
- Indications: [HIV]
- Coverage: [HIV, HBV]
- Side Effects: GI, CNS, LFT↑, nephrotoxicity, AKI, lactic acidosis, IRIS, weight gain, hypersensitivity, SJS/TEN, anemia, bone loss
- Monitor: viral load, HBV serology, renal, electrolyte, LFT, lipids, glucose
- Mechanism: BIC/FTC/TAF mechanisms, PK, resistance (incl. M50I/R263K)
- Drug Interactions: merged contraindicated/not recommended, cation spacing (non-pregnant/pregnant), metformin, nephrotoxic drugs, P-gp/BCRP, no-interaction lists, Liverpool checker
- Pregnancy: suppressed-only recommendation, lower exposure, study results, APR data, UK wording, no letter category
- Breastfeeding: present in milk, LactMed levels and informed-choice guidance, risks, UK restrictive wording
- Notes: boxed HBV-flare warning, ALLIANCE, indication wording by label, SCr artefact, IRIS/autoimmune, lactic acidosis, suicidality, bilirubin, INSIGHT off-label, FJUH codes, DHHS/Liverpool
- Page body: summary header, Key points, Monitoring, and merged References section (15 entries incl. FDA label v26, UK SmPC 9313 & 15334, TW insert v4, LactMed, all cited PMIDs, Liverpool, DHHS)
- Category: checked, unchanged (Antiretroviral (INSTI + 2 NRTI, STR))
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
