# New entry: Maviret (Glecaprevir/Pibrentasvir)

- **Notion entry:** [Maviret (Glecaprevir/Pibrentasvir)](https://app.notion.com/3f1c496dfff181129059ee7d55eb4ce9). Created 2026-10-06.
- **Hospital codes:** MAV01 (Maviret tab 100/40 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/glecaprevir-pibrentasvir.json` (plus any Taiwan insert text files)

## Product and sources

FJUH MAV01, Maviret 100 mg/40 mg film-coated tablet (艾百樂膜衣錠, glecaprevir 100 mg + pibrentasvir 40 mg). Tablets only. ATC J05AP57, self-pay 1327.45. I confirmed this on the hospital P4 page https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=MAV01. Official labels used:
- Taiwan insert 衛部藥輸字第027323號 (AbbVie Taiwan; licence issued 107-01-19, valid to 117-01-19). Insert version 3, updated 114/12/12. Indication: ages ≥12 y, acute or chronic HCV GT1–6. https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F
- US MAVYRET label: DailyMed setid 7bf99777-0401-9095-8645-16c6e907fcc0, version 201. I checked the full SPL XML and it includes a BOXED WARNING section, "WARNING: RISK OF HEPATITIS B VIRUS REACTIVATION IN PATIENTS COINFECTED WITH HCV AND HBV".
- UK SmPC eMC 763, revised 02 Sep 2026.
- LactMed Glecaprevir, NBK525494, revised 2025-08-15.

The Notion page was created 2026-10-06. Only the title and Category are filled; every other column is empty and the page body is blank.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Maviret 100/40 mg FC tab: **3 tabs (300/120 mg) QD with food**, all taken at the same time (隨餐一次服用三顆). Swallow whole; do not chew, crush or break.<br>• Before starting: HBsAg + anti-HBc (boxed warning), HCV RNA, cirrhosis/Child-Pugh assessment<br>• **Treatment-naïve** (acute or chronic, GT1–6), no cirrhosis or compensated cirrhosis (Child-Pugh A): **8 wk**<br>• Treatment-experienced (TW 表2 = FDA Table 2):<br>  GT1, NS5A inhibitor-experienced and PI-naïve → 16 wk<br>  GT1, NS3/4A PI-experienced and NS5A-naïve → 12 wk<br>  PRS-experienced* GT1, 2, 4, 5, 6 → 8 wk without cirrhosis / 12 wk with Child-Pugh A<br>  PRS-experienced GT3 → 16 wk<br>• Liver or kidney transplant recipients: **12 wk**; 16 wk if GT1 NS5A-experienced/PI-naïve or GT3 PRS-experienced<br>• HCV/HIV-1 co-infection and any renal function (including dialysis): same durations<br>• UK SmPC: re-treatment after failure of an NS3/4A and/or NS5A inhibitor is not recommended (4.4)<br>• Missed dose: take it if within 18 h; after 18 h skip it, never double. Vomiting within 3 h of a dose → take another dose (UK 4.2)<br>*PRS = prior (peg)IFN, ribavirin and/or sofosbuvir, with no prior PI or NS5A inhibitor

**Why:** This is a new entry and the column is empty. The doses and durations come straight from the label of the product the hospital stocks (Taiwan insert), which matches the FDA label. The UK SmPC's differences on re-treatment and missed or vomited doses are noted.

**Sources:** Taiwan insert 3.1.2 (表1: treatment-naïve 8 wk with or without compensated cirrhosis; 表2; 每日一次，隨餐一次服用三顆錠劑) and 3.3.1 (肝腎移植 12 週; 16 週 subgroups) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US FDA label 2.1–2.3, 2.6 (Tables 1–2; 'Three tablets taken at the same time orally once daily ... with food'; transplant 12 wk) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 (missed dose 18 h; vomiting within 3 h; swallow whole) and 4.4 (re-treatment not recommended) — https://www.medicines.org.uk/emc/product/763/smpc

### A2 · Renal dose, HD, CRRT

**No dose adjustment** at any CrCl, including dialysis (TW 6.7 = FDA 8.6 = UK 4.2). 腎功能不全（含透析）無需調整劑量<br>Use the standard durations (8 wk if treatment-naïve), FDA 2.2<br>HD: not significantly removed by haemodialysis (FDA 10), so no supplemental dose and no timing around HD is needed. EXPEDITION-4 (CKD 4–5, 82% on HD, 12 wk): SVR12 98%, no dose adjustments (FDA 14.5; Gane NEJM 2017, PMID 29020583)<br>CRRT: no label data. No adjustment is expected: elimination is biliary-fecal (urine 0.7% / 0%) and protein binding is ≥97.5% (FDA 12.3). This is an extrapolation, not studied.<br>CKD 4–5: pruritus 17%

**Why:** The column is empty. All three labels agree: no adjustment, including dialysis. The CRRT line is an inference from label PK and is flagged as such.

**Sources:** Taiwan insert 6.7 腎功能不全: 輕度、中度或重度腎功能不全的病人（包括透析病人），皆無需調整 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US FDA label 8.6 ('No dosage adjustment ... including those on dialysis'), 10 ('not significantly removed by hemodialysis'), 12.3 (urine 0.7%/0%; protein binding 97.5%/>99.9%), 14.5 (EXPEDITION-4: 82% HD, SVR12 98%), 6.1 (pruritus 17% in CKD 4–5) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 Renal impairment — https://www.medicines.org.uk/emc/product/763/smpc; Gane E et al. N Engl J Med 2017 (PMID 29020583, verified via esummary) — https://pubmed.ncbi.nlm.nih.gov/29020583/

### A3 · Hepatic dose

Child-Pugh A: no adjustment<br>**Child-Pugh B or C, or ANY prior hepatic decompensation** (ascites, variceal bleeding, encephalopathy): **contraindicated** (禁用; TW 4 / FDA 4). UK SmPC: Child-Pugh B 'not recommended', Child-Pugh C contraindicated<br>Compensated cirrhosis or portal hypertension: check LFTs as clinically indicated and watch for decompensation (jaundice, ascites, HE, variceal bleeding). Most cases occur within 4 wk (median 27 d); stop the drug if decompensation develops (TW 5.1.2 / FDA 5.2)<br>Decompensated cirrhosis → use a PI-free regimen per AASLD-IDSA guidance

**Why:** The column is empty. The contraindication must include 'any history of prior hepatic decompensation', not only Child-Pugh class. Where TW/US and UK differ on Child-Pugh B, I followed the stocked product's label (TW) and noted the UK wording.

**Sources:** Taiwan insert 3.3.2, 4 禁忌, 5.1.2, 6.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US FDA label 2.7, 4, 5.2 ('Cases typically occurred within the first 4 weeks of treatment (median of 27 days)'), 8.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2/4.3 (Child-Pugh B not recommended; C contraindicated) — https://www.medicines.org.uk/emc/product/763/smpc; AASLD-IDSA HCV Guidance 2023 update, Bhattacharya D et al. Clin Infect Dis 2023 (PMID 37229695, verified) — https://pubmed.ncbi.nlm.nih.gov/37229695/ ; https://www.hcvguidelines.org (not fetched: proxy blocked)

### A4 · Pediatric dose

🇹🇼 TW insert (本院品項): **≥12 y**: adult dose, 3 tabs QD with food, same durations as adults. Under 12 y: 安全性和療效尚未建立 (TW insert covers tablets only)<br>FDA (≥3 y): ≥12 y or ≥45 kg → 3 tabs QD. Ages 3 to under 12 y and under 45 kg → oral pellets 50/20 mg per packet, QD with food: under 20 kg 3 packets; 20 to under 30 kg 4; 30 to under 45 kg 5 (本院無 pellets)<br>UK: coated granules for 3 to under 12 y, 12 to under 45 kg (separate SmPC)<br>Tablets and pellets/granules are **not interchangeable**; finish the course on one formulation (UK 4.2)<br>Under 3 y (UK: or under 12 kg): not established

**Why:** The column is empty. The Taiwan label age (≥12 y) is narrower than FDA/UK (≥3 y) because only tablets are registered in Taiwan. The FDA pellet table is included for reference and marked as not stocked.

**Sources:** Taiwan insert 2 適應症 (12 歲以上) and 6.4 小兒 (尚未建立未滿 12 歲之兒童使用 MAVIRET 的安全性和療效) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US FDA label 2.4 Table 3 and 8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 Paediatric population (granules 12 to under 45 kg; formulations not interchangeable) — https://www.medicines.org.uk/emc/product/763/smpc

### A5 · Indications

HCV

**Why:** All three labels list acute and chronic HCV, GT1–6 (TW ≥12 y; FDA/UK ≥3 y). The 'HCV' option already exists in the schema.

**Sources:** US FDA label 1 ('acute or chronic hepatitis C virus (HCV) genotype 1, 2, 3, 4, 5 or 6 infection') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/763/smpc; Taiwan insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### A6 · Coverage

HCV

**Why:** The drug is pangenotypic HCV only: GT1a/1b/2a/2b/3a/3b/4a/4d/5a/6a in replicon assays. The 'HCV' option exists in the schema. It has no HBV activity; HBV is a reactivation risk, not covered.

**Sources:** US FDA label 12.4 Microbiology — Antiviral Activity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0

### A7 · Side Effects

CNS, GI, LFT↑, hypersensitivity, dysglycemia

**Why:** Each tag maps to a label item:<br>- CNS: headache 13% and fatigue 11%, the most common reactions.<br>- GI: nausea 8%, diarrhoea.<br>- LFT↑: total bilirubin ≥2×ULN in 3.5% (OATP1B1/3 / UGT1A1 inhibition); ALT rise with ethinylestradiol; postmarketing hepatic decompensation/failure.<br>- hypersensitivity: angioedema (UK 4.8 'uncommon'; US postmarketing).<br>- dysglycemia: symptomatic hypoglycaemia in diabetics after HCV clearance (TW 5.1.4, UK 4.4, US 7.3).<br>Pruritus (6–17%) has no schema option, so it goes in Notes. Every tag used already exists.

**Sources:** US FDA label 6.1 (headache 13%, fatigue 11%, nausea 8%; bilirubin elevations), 6.2 (angioedema; hepatic decompensation), 7.3 (hypoglycemia) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.8 Table 4 (angioedema uncommon; elevation in total bilirubin common; pruritus not known) and 4.4 (diabetic patients) — https://www.medicines.org.uk/emc/product/763/smpc; Taiwan insert 5.1.4 糖尿病病人, 8 副作用 (頭痛 13%、倦怠 11%、噁心 8%) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### A8 · Monitor

HBV serology, LFT, viral load, glucose, PT/INR

**Why:** Each tag maps to a label or guideline item:<br>- HBV serology: HBsAg + anti-HBc in all patients before starting (boxed warning).<br>- LFT: decompensation in cirrhosis/portal hypertension; HBV flare; bilirubin.<br>- viral load: HCV RNA at baseline and SVR12 12 wk after the end of therapy (AASLD-IDSA). Also HBV DNA if HBV markers are positive.<br>- glucose: diabetics (TW 5.1.4 / UK 4.4 'closely monitored, particularly within the first 3 months').<br>- PT/INR: on warfarin/VKA (US 7.3, UK 4.5, TW 表3).<br>Tacrolimus and other narrow-TI drug levels go in Notes/DDI; the TDM tag refers to the drug's own levels, so it is not used here. All tags already exist.

**Sources:** US FDA boxed warning, 2.1, 5.1, 5.2, 7.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.4, 4.5 (vitamin K antagonists: close INR monitoring) — https://www.medicines.org.uk/emc/product/763/smpc; Taiwan insert 3.1.1, 5.1.1, 5.1.4, 7 (對所有維他命 K 拮抗劑建議密集監控 INR) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; AASLD-IDSA HCV Guidance 2023 (PMID 37229695) — https://pubmed.ncbi.nlm.nih.gov/37229695/

### A9 · Mechanism

Fixed-dose pangenotypic DAA combination (GT1–6):<br>• **Glecaprevir**: HCV **NS3/4A protease inhibitor**. Blocks cleavage of the HCV polyprotein into NS3, NS4A, NS4B, NS5A and NS5B (IC50 3.5–11.3 nM across GT1–6).<br>• **Pibrentasvir**: **NS5A inhibitor**. Blocks viral RNA replication and virion assembly (EC50 in the pM range).<br>Resistance: NS3 A156 and D/Q168 (GLE); NS5A substitutions such as M28G, Q30D and Y93H (PIB). GT3b natural K30/M31 polymorphisms lower PIB activity 24×. Cross-resistance occurs within the PI and NS5A classes but not with sofosbuvir, IFN or RBV.<br>PK: t½ 6 h (GLE) / 13 h (PIB); biliary-fecal elimination; food ↑AUC (GLE 83–163%), so take with food.

**Why:** The column is empty. The text is drawn from the label microbiology and PK sections.

**Sources:** US FDA label 12.4 Microbiology (Mechanism of Action; Antiviral Activity; Resistance; Cross-resistance) and 12.3 (t½ 6/13 h; meal effect; biliary-fecal) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; Taiwan insert 10 藥理特性 (GT3b K30/M31 降低 24 倍) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### A10 · Drug Interactions

GLE/PIB inhibit **P-gp, BCRP and OATP1B1/3** (weak CYP3A/UGT1A1). They are substrates of P-gp/BCRP; GLE is also an OATP1B1/3 substrate.<br>⛔ **Contraindicated** (TW 4): atazanavir, **rifampicin**, simvastatin, dabigatran, ethinylestradiol more than 20 µg (ALT↑). FDA CI: atazanavir and rifampin only. UK CI also includes atorvastatin, any ethinylestradiol, carbamazepine, phenytoin, phenobarbital, primidone and St John's wort<br>❌ **Not recommended**:<br>  ↓DAA, risk of failure: carbamazepine, phenytoin, phenobarbital/primidone, efavirenz, St John's wort; moderate inducers (oxcarbazepine, eslicarbazepine; UK)<br>  ↑GLE: darunavir, lopinavir/ritonavir<br>  ↑statin: atorvastatin, lovastatin<br>  Ciclosporin above 100 mg/day<br>⚠️ **Adjust**:<br>  Rosuvastatin ≤10 mg (TW/FDA; UK ≤5 mg); pravastatin ↓50% (FDA) / ≤20 mg/day (TW/UK); fluvastatin/pitavastatin lowest dose<br>  Digoxin: check level, ↓dose ~50% (FDA); TW/UK: monitor level<br>• Ethinylestradiol ≤20 µg (TW/FDA only; UK contraindicates any EE) and progestin-only contraceptives: OK<br>• HCV clearance changes liver function: monitor INR (warfarin), glucose (antidiabetics), and tacrolimus/other narrow-TI drug levels<br>• No adjustment: tacrolimus (monitor), omeprazole, dolutegravir, raltegravir, rilpivirine, elvitegravir/cobi, TAF/TDF, FTC, 3TC, abacavir, buprenorphine/naloxone, methadone, sofosbuvir<br>👉 Check all others at hep-druginteractions.org (Liverpool)

**Why:** The column is empty. DDIs are critical for DAAs. The TW contraindication list (the stocked product's label) is broader than FDA and narrower than UK, so all three are shown. The ground rules ask to point to the Liverpool checker for the rest.

**Sources:** Taiwan insert 4 禁忌 (atazanavir, simvastatin, dabigatran etexilate, 含超過 20 µg ethinyl oestradiol, rifampicin), 5.1.3, 7.2, 7.3 表3 (atorvastatin 應避免; pravastatin ≤20 mg; rosuvastatin ≤10 mg; ciclosporin >100 mg 不適用; digoxin 監測; INR) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US FDA label 4, 5.3, 7.1–7.5 Table 6 (digoxin ~50% dose reduction; pravastatin 50%; rosuvastatin ≤10 mg; darunavir/lopinavir/ritonavir not recommended; EE >20 mcg not recommended; 7.5 no-interaction list) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.3 and 4.5 (strong inducers CI; moderate inducers not recommended) — https://www.medicines.org.uk/emc/product/763/smpc; Liverpool HEP Drug Interactions checker — https://www.hep-druginteractions.org (not fetched: proxy blocked)

### A11 · Pregnancy

No adequate human data (FDA/TW narrative risk summary; no letter category). 孕婦資料不足.<br>Animal data: no adverse developmental effects (rat GLE up to 53× human exposure; mouse/rabbit PIB 51×/1.5×). Rabbit GLE exposure was only 7% of human exposure, so it is non-informative.<br>UK SmPC: **not recommended in pregnancy** (precautionary).<br>Usually defer DAA treatment until after delivery; AASLD-IDSA allows case-by-case treatment during pregnancy.

**Why:** The column is empty. Per the ground rules, no letter category is used.

**Sources:** US FDA label 8.1 Risk Summary — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; Taiwan insert 6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; UK SmPC 4.6 ('As a precautionary measure, Glecaprevir/Pibrentasvir use is not recommended in pregnancy') — https://www.medicines.org.uk/emc/product/763/smpc; AASLD-IDSA HCV Guidance 2023 (PMID 37229695) — https://pubmed.ncbi.nlm.nih.gov/37229695/

### A12 · Breastfeeding

No human data (審慎評估).<br>LactMed: not studied. GLE is 97.5% protein-bound, so milk levels are likely very low. HCV is not transmitted via breastmilk; CDC advises considering abstaining if nipples are cracked or bleeding. Test infants of HCV+ mothers by NAT.<br>FDA/TW: excretion in human milk unknown; present in rodent milk (rat milk: PIB 1.5× plasma, GLE 13× lower than plasma). Weigh breastfeeding benefit against maternal need.<br>UK SmPC: a risk to the suckling child cannot be excluded; decide whether to stop breastfeeding or stop therapy.

**Why:** The column is empty. LactMed is the designated source for breastfeeding; the label positions are listed alongside it.

**Sources:** LactMed: Glecaprevir, NBK525494 (rev 2025-08-15), Summary of Use during Lactation — https://www.ncbi.nlm.nih.gov/books/NBK525494/; US FDA label 8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/763/smpc; Taiwan insert 6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### A13 · Notes

本院品項: MAV01 Maviret 100 mg/40 mg FC tab (艾百樂膜衣錠, 衛部藥輸字第027323號) only — 無 pellets/granules<br>⚠️ **US Boxed warning: HBV reactivation in HCV/HBV coinfection** (fulminant hepatitis, hepatic failure, death).<br>• Test HBsAg + anti-HBc in ALL patients before starting.<br>• If HBV markers are positive, monitor for HBV flare/reactivation during treatment and follow-up; start HBV therapy as indicated.<br>• TW 5.1.1 and UK 4.4 carry the same warning, not boxed.<br>⚠️ Hepatic decompensation/failure (including fatal) reported with NS3/4A PI regimens, mainly in Child-Pugh B/C or after prior decompensation; median onset 27 d.<br>• Diabetics: symptomatic hypoglycaemia after DAA start → monitor glucose closely (first 3 mo) and adjust antidiabetics; inform the diabetes physician.<br>• Transient bilirubin rise (OATP1B1/3 + UGT1A1 inhibition), usually under 2×ULN, mostly in the first 2 wk, more common with cirrhosis; no ALT rise.<br>• Pruritus (no tag): 6–7% in cirrhosis, 17% in CKD 4–5.<br>• Cure = SVR12: check HCV RNA 12 wk after end of treatment (AASLD-IDSA).<br>• 仿單差異: TW ≥12 y vs FDA/UK ≥3 y; TW/FDA contraindicate Child-Pugh B, UK only 'not recommended'.<br>• Regimen choice and re-treatment: AASLD-IDSA HCV guidance (hcvguidelines.org). Interactions: hep-druginteractions.org.

**Why:** The column is empty. The ground rules require the boxed warning (HCV-HBV reactivation with DAAs) in Notes, and items with no tag (pruritus) belong here.

**Sources:** US FDA label Boxed Warning (verified in full SPL XML v201), 5.1, 5.2, 6.1 (bilirubin; pruritus), 7.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; Taiwan insert 5.1.1, 5.1.2, 5.1.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; UK SmPC 4.4 — https://www.medicines.org.uk/emc/product/763/smpc; AASLD-IDSA HCV Guidance 2023 (PMID 37229695) — https://pubmed.ncbi.nlm.nih.gov/37229695/

### A14 · Page body

# Glecaprevir/Pibrentasvir (Maviret)<br>Pangenotypic HCV DAA: NS3/4A PI + NS5A inhibitor. 本院品項: MAV01 Maviret 100/40 mg FC tab <span color="blue">`PO`</span> only.<br>---<br>## Mechanism of action<br>(as Mechanism column, A9)<br>---<br>## Spectrum of activity<br>HCV GT1–6 only (FDA 12.4). No HBV activity.<br>---<br>## Indications<br>Approved: acute or chronic HCV GT1–6 without cirrhosis or with compensated cirrhosis (Child-Pugh A). TW ≥12 y; FDA/UK ≥3 y. FDA also: GT1 previously treated with an NS5A inhibitor OR an NS3/4A PI, but not both.<br>---<br>## Dosing<br>### Adult<br>Table with columns Population / No cirrhosis / Compensated cirrhosis:<br>- Treatment-naïve GT1–6: 8 wk / 8 wk<br>- GT1, NS5A-exp PI-naïve: 16 / 16<br>- GT1, PI-exp NS5A-naïve: 12 / 12<br>- PRS-exp GT1,2,4,5,6: 8 / 12<br>- PRS-exp GT3: 16 / 16<br>- Liver/kidney transplant: 12 wk (16 wk in GT1 NS5A-exp or GT3 PRS-exp)<br>Plus the dose line, missed-dose and vomiting rules (A1).<br>### Pediatric (A4)<br>### Renal dose, HD, CRRT (A2)<br>### Hepatic (A3)<br>---<br>## Administration<br>With food; 3 tabs together; swallow whole.<br>---<br>## Adverse effects & monitoring<br>Boxed warning, decompensation, common AEs, bilirubin, hypoglycaemia; monitoring list (A7/A8/A13).<br>---<br>## Drug interactions<br>Table: Drug / Effect / Management (A10), plus the Liverpool checker link.<br>---<br>## Pregnancy & lactation (A11/A12)<br>---<br>## Clinical pearls<br>- HBV serology before every DAA course.<br>- Never use in Child-Pugh B/C or after any decompensation.<br>- Statins, ethinylestradiol, rifampicin and anticonvulsants are the classic traps.<br>- 8 wk for treatment-naïve patients, even with compensated cirrhosis.<br>- No renal adjustment, including HD.<br>---<br>## References<br>- Taiwan insert 衛部藥輸字第027323號 (v3, 114/12/12): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F<br>- US FDA MAVYRET label, DailyMed setid 7bf99777-0401-9095-8645-16c6e907fcc0 (v201, Aug 2026)<br>- UK SmPC eMC 763 (02 Sep 2026)<br>- LactMed Glecaprevir NBK525494 (2025-08-15)<br>- AASLD-IDSA HCV Guidance 2023, PMID 37229695<br>- Gane E, EXPEDITION-4, NEJM 2017, PMID 29020583<br>- hep-druginteractions.org

**Why:** Existing reviewed entries (e.g. Valcyte, Notion page 3f0c496dfff1811698b1cdd46aa0c31c) have a structured body that mirrors the columns plus References. This new page has none.

**Sources:** Same sources as A1–A13: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0 ; https://www.medicines.org.uk/emc/product/763/smpc ; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F ; https://www.ncbi.nlm.nih.gov/books/NBK525494/ ; https://pubmed.ncbi.nlm.nih.gov/37229695/

### A15 · Renewed date

2026-10-06 (set when the columns above are written)

**Why:** Reviewed sibling entries carry a Renewed date (Valcyte: 2026-10-05). This one is blank. This is a database-housekeeping item, not a label claim.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date property); sibling page https://app.notion.com/p/3f0c496dfff1811698b1cdd46aa0c31c

### B1 · Adult dose

<span color="blue">`PO`</span> Maviret 100 mg/40 mg FC tab — **3 tabs (glecaprevir 300 mg / pibrentasvir 120 mg) once daily, taken together WITH FOOD** (隨餐一次服用三顆); swallow whole, do not chew/crush/break (UK)<br>Duration (TW insert = US label; compensated liver disease ± cirrhosis, HCV mono- or HIV co-infection, any renal function incl. dialysis):<br>• **Treatment-naïve (incl. acute HCV), GT1–6: 8 wk** (no cirrhosis AND compensated cirrhosis CP-A)<br>• PRS-experienced (prior peg-IFN/RBV/sofosbuvir only): GT1,2,4,5,6 → 8 wk (no cirrhosis) / 12 wk (CP-A); GT3 → 16 wk<br>• GT1, prior NS5A inhibitor (no PI) → 16 wk; GT1, prior NS3/4A PI (no NS5A) → 12 wk (UK SmPC: G/P **not recommended** for re-treatment after NS3/4A and/or NS5A inhibitor exposure)<br>• Liver or kidney transplant recipients: **12 wk** (16 wk if GT1 NS5A-experienced or GT3 PRS-experienced)<br>• Missed dose (UK): take if ≤18 h late, otherwise skip; vomiting <3 h after dose → take another dose

**Why:** The column is empty. Dose and duration tables are identical in the TW insert (the stocked product) and the US label, and I checked them against the source text myself. The UK SmPC agrees on the dose, the naive/PRS tables and transplant 12 wk. It differs on DAA-experienced re-treatment: UK 4.4 says not recommended, and UK 4.2 lists 16-wk transplant only for GT3 PRS. Acute HCV counts as treatment-naive; M20-350 used 8 wk (US 6.1/14.11).

**Sources:** TW insert 3.1.2 表1/表2, 3.3.1 (衛部藥輸字第027323號, v3 114/12/12) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US MAVYRET label 2.2 Tables 1–2, 2.3, 2.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 Tables 1–2, 4.4 (eMC 763) https://www.medicines.org.uk/emc/product/763/smpc

### B2 · Renal dose, HD, CRRT

**No dose adjustment at any CrCl, including HD/dialysis** (TW = US = UK) — 腎功能不全/透析皆無需調整. Same durations as normal renal function.<br>HD: glecaprevir/pibrentasvir **not significantly removed by HD** → no timing requirement around dialysis. Evidence: EXPEDITION-4 (CKD 4–5, 104 pts, 82% on HD) 12 wk → SVR12 98% (Gane NEJM 2017). AUC ↑ ≤56% in renal impairment (not clinically relevant)<br>CRRT: no label or PK data; no adjustment expected (biliary-fecal elimination, urine ≤0.7% of dose, ≥97.5% protein-bound) — extrapolation, not studied<br>Pruritus more frequent in CKD 4–5 (17%)

**Why:** The column is empty. All three labels say no adjustment, including dialysis. The CRRT line is my extrapolation from label PK, since there are no CRRT data. A PubMed search for glecaprevir/pibrentasvir with CRRT/hemodiafiltration found only PMID 33612683, a case report of hemodiafiltration used to manage liver injury, with no PK data. I verified the EXPEDITION-4 PMID with esummary.

**Sources:** TW insert 6.x 腎功能不全 + 9 過量 (not removed by HD) + 12 EXPEDITION-4 (82% HD, SVR12 98%) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US label 8.6, 10, 12.3 (Renal Impairment; Table 7 urine 0.7%/0%, protein binding 97.5/>99.9%) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 Renal impairment, 4.9 https://www.medicines.org.uk/emc/product/763/smpc; Gane E et al. N Engl J Med 2017;377:1448-1455, PMID 29020583 (verified) https://pubmed.ncbi.nlm.nih.gov/29020583/

### B3 · Hepatic dose

Child-Pugh A: no adjustment.<br>**Child-Pugh B or C, or ANY history of hepatic decompensation (ascites, variceal bleeding, encephalopathy): CONTRAINDICATED** (TW/US) — 中重度肝功能不全或曾失代償者禁用. UK SmPC: CP-B not recommended, CP-C contraindicated.<br>Postmarketing hepatic decompensation/failure (incl. fatal), mostly within first 4 wk (median 27 d) → in CP-A cirrhosis or portal hypertension: LFT as clinically indicated + watch for jaundice/ascites/HE/variceal bleed; **stop** if decompensation occurs. Higher exposure in CP-C.

**Why:** The column is empty. The stocked product's insert (TW) matches the US label: CP-B/C or prior decompensation is contraindicated. The UK SmPC is less strict for CP-B, so both are given.

**Sources:** TW insert 3.3.2, 4, 5.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US label 2.7, 4, 5.2, 8.7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 Hepatic impairment, 4.3, 4.4 https://www.medicines.org.uk/emc/product/763/smpc

### B4 · Pediatric dose

🇹🇼 TW insert (本院品項): approved **≥12 y only** → same as adult: 3 tabs (300/120 mg) QD with food, same durations. <12 y: 安全性及療效未建立 (not established in TW).<br>FDA/UK: ≥3 y. ≥12 y **or ≥45 kg** → 3 tabs QD. 3 to <12 y and <45 kg: weight-based oral pellets (US 50/20 mg packets: <20 kg 150/60 mg; 20–<30 kg 200/80 mg; 30–<45 kg 250/100 mg QD) / UK coated granules — **本院無 pellets/granules**; tablets and pellets/granules are **not interchangeable** (UK)<br>Durations as adults. <3 y: not studied.

**Why:** The column is empty. The TW age limit (≥12 y) is narrower than the US/UK limit (≥3 y) because Taiwan has no pellet or granule form. The US Table 3 weight bands are quoted from the label.

**Sources:** TW insert 2 適應症, 3.1.2, 6.x 小兒 (尚未建立未滿12歲) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US label 2.4 Table 3, 8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.2 Paediatric population https://www.medicines.org.uk/emc/product/763/smpc

### B5 · Indications

HCV

**Why:** Acute or chronic HCV GT1–6 (FDA/UK ≥3 y; TW ≥12 y), without cirrhosis or with compensated cirrhosis (CP-A). Also GT1 patients previously treated with an NS5A inhibitor or an NS3/4A PI, but not both (FDA/TW). The HCV option exists in the schema.

**Sources:** US label 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/763/smpc; TW insert 2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### B6 · Coverage

HCV

**Why:** Pangenotypic activity against GT1a/1b/2a/2b/3a/3b/4a/4d/5a/6a (replicon EC50: glecaprevir 0.08–4.6 nM, pibrentasvir 0.5–15.6 pM). No activity against HBV or HIV; pibrentasvir is not an HBV drug. The HCV option exists.

**Sources:** US label 12.4 Antiviral Activity https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0

### B7 · Side Effects

CNS, GI, LFT↑, hypersensitivity, dysglycemia

**Why:** Mapping to existing options: headache 13% and fatigue 11% go to CNS (as on other entries). Nausea 8% and diarrhoea go to GI. Transient indirect bilirubin elevation (≥2×ULN 3.5% vs 0% placebo), plus postmarketing ALT/AST rise and hepatic decompensation/failure, go to LFT↑. Angioedema (postmarketing; UK 'uncommon') goes to hypersensitivity. Pruritus (17% in CKD 4–5; UK 'not known') and rash (TW postmarketing) have no schema option, so they go in Notes.

**Sources:** US label 6.1, 6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.8 Table 4 https://www.medicines.org.uk/emc/product/763/smpc; TW insert 8.3 上市後經驗 (血管性水腫; 搔癢、皮疹; AST/ALT↑) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### B8 · Monitor

HBV serology, viral load, LFT, glucose, PT/INR

**Why:** HBsAg and anti-HBc before start, then monitor HBV-infected patients during and after treatment (boxed warning). HCV RNA confirms SVR12, per AASLD-IDSA guidance. LFT and signs of decompensation in CP-A cirrhosis or portal hypertension. Glucose in diabetics, because hypoglycaemia can follow HCV clearance. INR on warfarin or other VKAs. All five options exist. TDM does not apply.

**Sources:** US label Boxed Warning, 2.1, 5.1, 5.2, 7.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; TW insert 3.1.1, 5.1.1, 5.1.2, 5.1.4, 7 (VKA: 密集監控INR) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; UK SmPC 4.4 (diabetics, first 3 months), 4.5 (VKA INR) https://www.medicines.org.uk/emc/product/763/smpc; Bhattacharya D et al. AASLD-IDSA HCV Guidance 2023 Update, Clin Infect Dis 2023, PMID 37229695 (verified) https://pubmed.ncbi.nlm.nih.gov/37229695/ ; https://www.hcvguidelines.org (site not reachable from sandbox)

### B9 · Mechanism

Fixed-dose pangenotypic DAA: **glecaprevir** = HCV **NS3/4A protease inhibitor** (blocks cleavage of the HCV polyprotein into NS3, NS4A, NS4B, NS5A, NS5B → no viral replication) + **pibrentasvir** = **NS5A inhibitor** (blocks viral RNA replication and virion assembly). PK: Tmax ~5 h; food ↑ glecaprevir AUC 83–163% (take with food); t½ 6 h / 13 h; protein binding 97.5% / >99.9%; biliary-fecal elimination (urine 0.7% / 0%); glecaprevir secondary CYP3A metabolism. Both inhibit P-gp, BCRP and OATP1B1/3 (weak CYP3A/UGT1A1); both are P-gp/BCRP substrates, and glecaprevir is also an OATP1B1/3 substrate. Resistance: NS3 A156 and D/Q168 (GLE); NS5A Q30, Y93 (PIB; single GT3a A30K or Y93H has little effect, but A30K+Y93H reduces susceptibility; baseline A30K in GT3a gave a lower SVR12 with 8 wk, 78%). GT3b natural K30/M31 polymorphisms reduce PIB activity 24×. Cross-resistance within the NS3/4A PI and NS5A classes; none with sofosbuvir, IFN or RBV.

**Why:** The column is empty. All values come from US label sections 7.1–7.2, 12.3 (Table 7) and 12.4, and agree with the TW insert sections 1.1 and 11.

**Sources:** US label 7.1, 7.2, 12.3 Table 7, 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.5, 5.1 https://www.medicines.org.uk/emc/product/763/smpc

### B10 · Drug Interactions

Inhibits P-gp/BCRP/OATP1B1/3; substrate of P-gp/BCRP (± OATP) — check every co-med at **hep-druginteractions.org** (Liverpool)<br>⛔ **Contraindicated** (TW/US/UK): **rifampicin**; **atazanavir**-containing products. TW/UK also: **simvastatin**, **dabigatran**, **ethinylestradiol** (TW: >20 µg; UK: any EE; US: >20 µg not recommended — ALT↑)<br>⛔/❌ Strong P-gp/CYP3A inducers — **carbamazepine, phenytoin, St John's wort** (TW/US: not recommended; UK: contraindicated, also phenobarbital, primidone); **efavirenz** not recommended; UK: moderate inducers (oxcarbazepine, eslicarbazepine) not recommended<br>❌ Not recommended: darunavir, lopinavir/ritonavir (↑glecaprevir); **atorvastatin** (TW avoid; US not recommended; UK CI), lovastatin (if used ≤20 mg/d); ciclosporin >100 mg/d<br>⚠️ Statin limits: **pravastatin ≤20 mg/d** (TW/UK; US ↓50%), **rosuvastatin ≤10 mg/d** (TW/US; UK ≤5 mg), fluva/pitavastatin lowest dose<br>⚠️ **Digoxin**: ↑~48% AUC → monitor level (US: ↓dose ~50%); tacrolimus (TW/US no adjustment; UK: TDM); **warfarin/VKA** → monitor INR; **diabetes drugs** → hypoglycaemia risk as HCV clears<br>OK, no adjustment: dolutegravir, raltegravir, rilpivirine, TAF/TDF, emtricitabine, abacavir, lamivudine, elvitegravir/cobi (US), methadone, buprenorphine, sofosbuvir, omeprazole ≤20 mg (40 mg ↓glecaprevir ~50%, no label adjustment)

**Why:** The column is empty. The three labels agree on rifampicin and atazanavir. Statins, EE, dabigatran and inducers differ by label, so the stocked TW product is listed first and the US/UK differences are shown next to it. I checked each value against the label tables (TW 7.3 表3, US 7 Table 6, UK 4.5 Table 3). The Liverpool checker is linked as the guidance for remaining interactions; it was not reachable from the sandbox.

**Sources:** TW insert 4, 5.1.3, 7.3 表3, 7.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; US label 4, 5.3, 7.1–7.5 Table 6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.3, 4.5 Table 3 https://www.medicines.org.uk/emc/product/763/smpc; Liverpool HEP Drug Interactions https://www.hep-druginteractions.org

### B11 · Pregnancy

No adequate human data (narrative risk summary; no letter category). Animal: no adverse developmental effects in rats/mice (≈47–74× human exposure); rabbit glecaprevir data inconclusive (exposure only 0.07×; maternal toxicity with embryo-foetal loss — UK). UK SmPC: **not recommended in pregnancy** as a precaution. 孕婦：人體資料不足，英國仿單不建議使用

**Why:** The column is empty. The US and TW texts are identical narrative summaries. Only the UK gives a recommendation ('not recommended'). No letter category is used.

**Sources:** US label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; TW insert 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/763/smpc

### B12 · Breastfeeding

Unknown whether excreted in human milk; present in rodent milk (rat pibrentasvir milk ≈1.5× plasma, glecaprevir 13× lower). US/TW: weigh benefit of breastfeeding vs maternal need. UK: decide to stop breastfeeding OR stop therapy. LactMed: not studied; highly protein-bound (97.5%) → milk levels likely very low; **HCV is not transmitted via breastmilk** (CDC: consider abstaining if nipples cracked/bleeding); test infant by NAT

**Why:** The column is empty. The text combines the US/TW 8.2 / 6.2 lactation sections, UK 4.6, and the LactMed Glecaprevir record (NBK525494, revised 2025-08-15).

**Sources:** LactMed Glecaprevir NBK525494 https://www.ncbi.nlm.nih.gov/books/NBK525494/; US label 8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/763/smpc; TW insert 6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F

### B13 · Notes

本院品項: MAV01 Maviret 100 mg/40 mg FC tab (艾百樂膜衣錠) only — 無小兒 pellets/granules<br>⚠️ **US Boxed warning: HBV reactivation in HCV/HBV co-infection** (fulminant hepatitis, hepatic failure, death) — test **HBsAg + anti-HBc** in all patients before start; monitor HBV-infected patients for flare/reactivation during and after therapy; treat HBV as indicated (TW 5.1.1 / US 5.1 / UK 4.4)<br>⚠️ **Hepatic decompensation/failure** (incl. fatal), mainly in CP-B/C or prior decompensation, typically within 4 wk → contraindicated in CP-B/C or prior decompensation (TW/US)<br>• Diabetics: hypoglycaemia as liver function improves → monitor glucose (esp. first 3 mo) and adjust antidiabetics; VKA → INR<br>• ⛔ Rifampicin contraindicated → check TB regimen; ⛔ atazanavir; ⛔ EE-containing contraceptives (>20 µg TW/US; any EE UK) → switch to progestin-only<br>• Re-treatment after DAA failure: UK SmPC not recommended after NS3/4A and/or NS5A exposure; cross-resistance within class. Regimen choice per AASLD-IDSA guidance (hcvguidelines.org)<br>• Confirm cure with HCV RNA (SVR12) per guidance<br>• Pruritus (17% in CKD 4–5) and rash: no tag; transient indirect hyperbilirubinaemia (OATP1B1/3/UGT1A1 inhibition), usually without ALT rise<br>• TDM: not applicable

**Why:** The column is empty. Ground rules require HCV-HBV reactivation (a US boxed warning) to appear in Notes. I confirmed the boxed-warning wording from the DailyMed SPL XML (setid 7bf99777…, version 201, BOXED WARNING SECTION 34066-1). The fetch-script JSON lacks this section. The other items are label warnings. SVR12 and regimen choice point to AASLD-IDSA guidance (PMID verified; site not reachable from sandbox).

**Sources:** US label Boxed Warning (DailyMed SPL), 5.1–5.3, 7.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0; TW insert 5.1.1–5.1.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027323%E8%99%9F; UK SmPC 4.4, 4.8 https://www.medicines.org.uk/emc/product/763/smpc; Bhattacharya D et al. Clin Infect Dis 2023, PMID 37229695 (verified) https://pubmed.ncbi.nlm.nih.gov/37229695/

### B14 · Page body

Add a body in the Valcyte entry's structure: '# Glecaprevir/Pibrentasvir (Maviret)' + one-line summary (本院品項 MAV01 <span color="blue">`PO`</span> tab only) / ## Mechanism of action (B9) / ## Spectrum of activity (HCV GT1–6 pangenotypic) / ## Indications (FDA/UK ≥3 y; TW ≥12 y; acute or chronic; DAA-experienced GT1) / ## Dosing — Adult duration table (naïve 8 wk; PRS-exp; NS5A/PI-exp; transplant 12/16 wk), Pediatric (B4), Renal/HD/CRRT (B2), Hepatic (B3) / ## Administration (with food, swallow whole, missed-dose 18 h rule) / ## Adverse effects & monitoring (boxed warning HBV; decompensation; B7/B8) / ## Drug interactions table (B10) / ## Pregnancy & lactation (B11/B12) / ## Clinical pearls / ## References (TW insert v3 114/12/12 衛部藥輸字第027323號; DailyMed setid 7bf99777-0401-9095-8645-16c6e907fcc0 v201; eMC 763 rev 02 Sep 2026; LactMed NBK525494; Gane 2017 PMID 29020583; Bhattacharya 2023 PMID 37229695; hep-druginteractions.org)

**Why:** The body is empty. Other completed entries, such as Valcyte, carry a full structured body with a reference list, so this entry should follow the same pattern.

**Sources:** Same as B1–B13

## Apply log

- Adult dose: merged A1+B1 (3 tabs QD with food, pre-treatment HBV/HCV workup, duration by population incl. PRS/NS5A/PI-experienced and transplant, UK re-treatment caveat, missed-dose/vomiting rules, PRS footnote)
- Renal dose, HD, CRRT: merged A2+B2 (no adjustment incl. dialysis; HD not removed; EXPEDITION-4; CRRT extrapolation flagged; pruritus 17% CKD 4-5)
- Hepatic dose: merged A3+B3 (CP-A no adjustment; CP-B/C or prior decompensation contraindicated TW/FDA, UK CP-B not recommended; decompensation monitoring; PI-free regimen per AASLD-IDSA)
- Pediatric dose: merged A4+B4 (TW >=12 y only; FDA pellets weight bands; UK granules; not interchangeable; <3 y not established; not stocked)
- Indications: [HCV]
- Coverage: [HCV]
- Side Effects: [CNS, GI, LFT↑, hypersensitivity, dysglycemia]
- Monitor: [HBV serology, LFT, viral load, glucose, PT/INR]
- Mechanism: merged A9+B9 (NS3/4A PI + NS5A inhibitor, resistance incl. GT3a/GT3b, cross-resistance, PK)
- Drug Interactions: merged A10+B10 (TW/FDA/UK contraindications, not recommended, statin/digoxin adjustments, EE, INR/glucose/tacrolimus monitoring, no-adjustment list, Liverpool checker)
- Pregnancy: merged A11+B11 (no letter category, animal data, UK not recommended, defer per AASLD-IDSA)
- Breastfeeding: merged A12+B12 (LactMed, FDA/TW, UK)
- Notes: merged A13+B13 (stocked product MAV01 + licence no.; boxed warning HBV reactivation; hepatic decompensation; hypoglycaemia; contraindicated combos; bilirubin; pruritus; re-treatment; SVR12; label differences; TDM n/a)
- Page body: new body in Valcyte structure (summary, MoA, spectrum, indications, dosing with adult duration table/pediatric/renal/hepatic, administration, AEs & monitoring, DDI table, pregnancy & lactation, clinical pearls)
- References section at end of body: TW insert v3 114/12/12, DailyMed setid v201, eMC 763 (02 Sep 2026), LactMed NBK525494, Bhattacharya 2023 PMID 37229695 + hcvguidelines.org, Gane 2017 PMID 29020583, hep-druginteractions.org
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
