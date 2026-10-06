# New entry: Tivicay (Dolutegravir)

- **Notion entry:** [Tivicay (Dolutegravir)](https://app.notion.com/3f1c496dfff181448b72f81eaf94e6df). Created 2026-10-06.
- **Hospital codes:** TIV01 (Tivicay tab 50 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/dolutegravir.json` (plus any Taiwan insert text files)

## Product and sources

FJUH TIV01 = Tivicay 50 mg film-coated tablet (汰威凱膜衣錠50毫克, dolutegravir sodium equivalent to 50 mg dolutegravir). NHI BC26407100. TW licence 衛部藥輸字第026407號 (GSK Taiwan branch). I confirmed this on the hospital P4 page https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=TIV01, which lists only one strength. Official labels used: (1) Taiwan insert version 5, updated 114/04/17, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; (2) US FDA label for TIVICAY/TIVICAY PD (ViiV), DailyMed setid 63df5af3-b8ac-4e76-9830-2dbb340af922 v34 (Oct 02 2026). I read sections 8.6 and 8.7 from the full SPL XML. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; (3) UK SmPC for Tivicay 10/25/50 mg film-coated tablets, eMC 10057, revised 03/10/2025, https://www.medicines.org.uk/emc/product/10057/smpc; (4) LactMed Dolutegravir NBK500631, revised 2026-07-15, https://www.ncbi.nlm.nih.gov/books/NBK500631/. The Notion page has a title and Category only. All other columns are empty and the body is blank. clinicalinfo.hiv.gov (DHHS) and hiv-druginteractions.org returned proxy 403, so I could not check any guideline text. For that reason I propose no guideline-only claims.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 50 mg tab, with or without food; always with other ARVs<br>• INSTI-naïve (treatment-naïve or -experienced): **50 mg QD**<br>• Virologically suppressed adults switching to DTG + rilpivirine 25 mg QD (2-drug regimen, US label): **50 mg QD**<br>• INSTI-naïve + UGT1A/CYP3A inducers (rifampin, carbamazepine, efavirenz, fosamprenavir/r, tipranavir/r): **50 mg BID**<br>• INSTI-experienced with documented or suspected INSTI resistance: **50 mg BID**; avoid inducers where possible (UK: take with food to raise exposure, esp. Q148 mutations)<br>• Missed dose (UK): take as soon as possible unless the next dose is due within 4 h (漏服: 距下次 <4 h 則跳過)

**Why:** The column is empty. The TW insert, the US label and the UK SmPC give the same adult regimens. The 50 mg BID regimens cover inducer co-administration and INSTI resistance. The rilpivirine switch indication comes from the US label. The UK SmPC adds the advice to take with food when resistance is present, and the missed-dose rule.

**Sources:** Taiwan insert 衛部藥輸字第026407號 §3.1 表1: '未曾接受治療或曾經接受治療但未曾使用INSTI的病人 50毫克每日一次…與特定…UGT1A/CYP3A誘導劑併用時 50毫克每日兩次…曾經使用INSTI…抗藥性 50毫克每日兩次' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA TIVICAY label §2.2 Table 1 and §1 (rilpivirine switch, 'Rilpivirine dose is 25 mg once daily') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC Tivicay §4.2: 'In the presence of integrase class resistance, Tivicay should preferably be taken with food to enhance exposure (particularly in patients with Q148 mutations)'; 'If the next dose is due within 4 hours, the patient should not take the missed dose' https://www.medicines.org.uk/emc/product/10057/smpc

### A2 · Renal dose, HD, CRRT

• CrCl any level, INSTI-naïve: **no adjustment** (TW insert / US / UK)<br>• Severe (CrCl <30): DTG AUC ↓40%, C24 ↓43% → **caution in INSTI-experienced pts with INSTI resistance** (loss of efficacy/resistance risk) (TW/US); UK: no adjustment incl. CrCl <30 not on dialysis<br>• HD/PD: no data; US/TW: inadequate information to recommend dosing; UK: PK differences not expected. Protein binding ≥98.9% → unlikely to be removed by dialysis<br>• CRRT: no data<br>• Note: serum creatinine ↑ ~0.15 mg/dL in first 4 wk (OCT2/MATE1 inhibition of tubular secretion) without true GFR change (肌酸酐假性上升，非腎毒性). Urinary excretion of unchanged drug <1%

**Why:** The column is empty. The TW insert, which is the label of the stocked product and the preferred source for renal dosing, matches US §8.7: no adjustment for INSTI-naïve patients at any CrCl, and caution in INSTI-experienced patients with severe impairment. The UK value is given alongside, as the ground rules require. Dialysis is not studied. The creatinine artefact is a common source of mistaken renal dose changes, so I include it.

**Sources:** Taiwan insert §6 腎功能不全: '對未曾接受治療或曾經接受治療但未曾使用INSTI的輕度、中度或重度腎功能不全病人…並不須調整劑量。對曾經使用INSTI…的重度腎功能不全病人應謹慎'; §11 '目前尚無合適的資訊以建議關於接受透析治療病人的dolutegravir適當劑量' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §8.7 Renal Impairment: 'Caution is warranted for INSTI-experienced patients… with severe renal impairment… There is inadequate information to recommend appropriate dosing of dolutegravir in patients requiring dialysis'; §12.3 'AUC, Cmax, and C24… lower by 40%, 23%, and 43%'; 'Renal elimination of unchanged drug was low (less than 1% of the dose)'; 'highly bound (greater than or equal to 98.9%)'; §10 'unlikely that it will be significantly removed by dialysis'; §6.1 'mean change from baseline of 0.15 mg/dL' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.2 Renal impairment: 'No dosage adjustment is required in patients with mild, moderate or severe (CrCl <30 mL/min, not on dialysis)… No data are available in subjects receiving dialysis although differences in pharmacokinetics are not expected' https://www.medicines.org.uk/emc/product/10057/smpc

### A3 · Hepatic dose

• Child-Pugh A/B: **no adjustment**<br>• Child-Pugh C: not studied → **not recommended** (TW insert / US); UK: use with caution<br>• Hepatotoxicity (incl. acute liver failure) reported → monitor LFT, esp. HBV/HCV co-infection (B/C肝共感染者轉胺酶上升風險較高)

**Why:** The column is empty. The TW insert and US §8.6 say not recommended in Child-Pugh C, and the UK SmPC says use with caution. The hepatotoxicity warning belongs here for monitoring.

**Sources:** Taiwan insert §6 肝功能不全: '對輕度至中度肝功能不全(Child-Pugh評分A級或B級)的病人，並不須調整劑量…TIVICAY並不建議用於重度肝功能不全的病人' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §8.6 Hepatic Impairment: 'TIVICAY and TIVICAY PD are not recommended for use in patients with severe hepatic impairment'; §5.2 Hepatotoxicity: 'Monitoring for hepatotoxicity is recommended' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.2 Hepatic impairment: 'No data are available in patients with severe hepatic impairment (Child-Pugh grade C); therefore dolutegravir should be used with caution' https://www.medicines.org.uk/emc/product/10057/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> (INSTI-naïve only; with inducers give the weight-band dose **BID**)<br>• TW insert (stocked 50 mg tab): **≥12 y and ≥40 kg: 50 mg QD**; <12 y or <40 kg: not established<br>• US label (film-coated tab, ≥14 kg): **14–<20 kg: 40 mg QD** (4 × 10 mg); **≥20 kg: 50 mg QD**<br>• UK SmPC: ≥6 y & ≥14 kg: 14–<20 kg 40 mg QD; ≥20 kg 50 mg QD (or split BID); adolescents ≥12 y & ≥20 kg 50 mg QD<br>• <14 kg / neonates ≥2 kg: Tivicay PD 5 mg dispersible only (not stocked). ⚠️ PD and film-coated tabs are **not interchangeable mg-for-mg** (PD bioavailability ~1.6×)<br>• INSTI resistance in children: insufficient data<br>• FJUH stocks only 50 mg tab (10 mg tab needed for the 40 mg band is not stocked)

**Why:** The column is empty. The stocked product's TW label covers only ≥12 y and ≥40 kg. The current US and UK labels allow the film-coated tablet from 14 kg, with 50 mg QD from 20 kg. All three are shown so readers can see the label differences. The non-interchangeability warning is US §5.5.

**Sources:** Taiwan insert §3.3 兒童病人: '對12歲(含)以上且體重至少40公斤的兒童病人，TIVICAY的建議劑量為每日一次口服50毫克…對12歲以下或體重不足40公斤的兒童病人…安全性及療效尚未確立' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §2.3 Table 4: '14 kg to less than 20 kg 4 x 10 mg tablets once daily 40 mg… 20 kg and greater 1 x 50 mg tablet once daily'; 'administer the corresponding dose… twice daily'; §5.5 'not bioequivalent and are not substitutable on a milligram-per-milligram basis'; §12.3 'relative bioavailability of TIVICAY PD is approximately 1.6-fold higher' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.2 Table 1/Table 2 and 'Adolescents aged 12 and above… weighing at least 20 kg… 50 mg once daily' https://www.medicines.org.uk/emc/product/10057/smpc

### A5 · Indications

HIV

**Why:** All labels list HIV-1 infection treatment in combination with other ARVs as the only indication. The existing option 'HIV' fits. Do not tag 'HIV PrEP', because no label lists prophylaxis.

**Sources:** US FDA label §1: 'indicated in combination with other antiretroviral agents for the treatment of HIV-1 infection in adults… and in pediatric patients… weighing at least 2 kg' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/10057/smpc; Taiwan insert §2 適應症: '與其他抗反轉錄病毒藥物合併用於治療成人及12歲以上青少年的人類免疫不全病毒(HIV)感染症' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F

### A6 · Coverage

HIV

**Why:** Activity is against HIV-1, including group M clades A–G and group O, and HIV-2 isolates in cell culture. The existing option 'HIV' fits. There is no activity against HBV or HCV, so do not tag them.

**Sources:** US FDA label §12.4 Microbiology, Antiviral Activity in Cell Culture: 'HIV-1 clinical isolates (… M clades A, B, C, D, E, F, and G, and … group O)… EC50 values against 3 HIV-2 clinical isolates… 0.09 nM to 0.61 nM' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### A7 · Side Effects

GI, CNS, LFT↑, hypersensitivity, IRIS, weight gain, dysglycemia

**Why:** All proposed tags are existing schema options. GI covers nausea, diarrhoea and vomiting (UK: very common). CNS covers headache (very common) and insomnia, dizziness, abnormal dreams, depression and suicidal ideation. LFT↑ covers ALT/AST rise (common), hepatitis and acute liver failure. Hypersensitivity is US §5.1 and UK 4.4. IRIS is US §5.4 and UK 4.8. Weight gain: 'weight increased' is common in UK 4.8 and listed postmarketing in the US label. Dysglycemia: Grade 2–3 hyperglycemia in US Table 6 (6–14%), plus UK 4.4 glucose increase. Do NOT tag 'lactic acidosis'. Neither label lists it for dolutegravir; it is an NRTI class effect. Do NOT tag nephrotoxicity, because the creatinine rise is a secretion artefact. CPK rise and myalgia/arthralgia are listed, but I left out myopathy as minor; the Notes cover them.

**Sources:** UK SmPC §4.8 Table 4: 'Very common Headache… Nausea… Diarrhoea'; 'Common Insomnia… Abnormal dreams… Depression… Anxiety… Dizziness… ALT and/or AST elevations… Rash… Pruritus… Fatigue… CPK elevations, weight increased'; 'Uncommon Hypersensitivity… Immune Reconstitution Syndrome… Hepatitis'; 'Rare Acute hepatic failure' https://www.medicines.org.uk/emc/product/10057/smpc; US FDA label §5.1, §5.2, §5.4; §6.1 Table 6 'Hyperglycemia Grade 2 (126-250 mg/dL) 6%… 9%'; §6.2 'Weight increased' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### A8 · Monitor

viral load, LFT, HBV serology, lipids, glucose, renal

**Why:** All are existing options. Viral load is standard efficacy monitoring for HIV-1 treatment; the label's efficacy and resistance framework is built on HIV-1 RNA. LFT: US §5.2 'Monitoring for hepatotoxicity is recommended', and UK 4.4 asks for liver biochemistry monitoring in HBV/HCV co-infection. HBV serology: UK 4.4 says to start or maintain effective HBV therapy in co-infected patients, because DTG has no anti-HBV activity, and US §5.2 notes HBV reactivation when anti-hepatitis therapy is withdrawn. Lipids and glucose: UK 4.4 'For monitoring of blood lipids and glucose reference is made to established HIV treatment guidelines'. Renal: a baseline is needed to read the expected creatinine rise, and UK 4.4 requires renal monitoring when DTG is combined with metformin.

**Sources:** US FDA label §5.2 Hepatotoxicity https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.4: 'Monitoring of liver biochemistries is recommended in patients with hepatitis B and/or C co-infection. Particular diligence should be applied in initiating or maintaining effective hepatitis B therapy'; 'it is of importance to monitor renal function when co-treated with dolutegravir [and metformin]'; 'For monitoring of blood lipids and glucose reference is made to established HIV treatment guidelines' https://www.medicines.org.uk/emc/product/10057/smpc

### A9 · Mechanism

Integrase strand transfer inhibitor (INSTI): binds the HIV integrase active site and blocks the strand-transfer step of viral DNA integration (阻斷病毒DNA嵌入宿主基因體). Active vs HIV-1 (groups M & O) and HIV-2 in vitro. Metabolised mainly by UGT1A1 (minor CYP3A); substrate of P-gp/BCRP. t½ ~14 h; protein binding ≥98.9%; 53% unchanged in faeces, 31% in urine mostly as metabolites (<1% unchanged). Inhibits renal OCT2/MATE1 (→ creatinine ↑, metformin/dofetilide ↑). Activity markedly reduced with Q148 + ≥2 secondary INSTI mutations.

**Why:** The column is empty. All content is taken from the US label sections on mechanism of action, PK and transporters, and from the UK SmPC resistance warning.

**Sources:** US FDA label §12.4 'Dolutegravir inhibits HIV integrase by binding to the integrase active site and blocking the strand transfer step of retroviral DNA integration'; §12.3 'terminal half-life of approximately 14 hours'; 'primarily metabolized via UGT1A1 with some contribution from CYP3A'; '53%… excreted unchanged in feces. Thirty-one percent… in urine…less than 1%'; §7.1 OCT2/MATE1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.4 'activity of dolutegravir is considerably compromised for viral strains harbouring Q148+≥2 secondary mutations from G140A/C/S, E138A/K/T, L74I' https://www.medicines.org.uk/emc/product/10057/smpc

### A10 · Drug Interactions

⛔ **Contraindicated:** dofetilide (US/TW); fampridine/dalfampridine (UK contraindicated; US/TW: ↑ seizure risk, weigh benefit)<br>• **↓DTG → DTG 50 mg BID** (INSTI-naïve): rifampin, carbamazepine, efavirenz, fosamprenavir/r, tipranavir/r. In INSTI-resistant pts use alternatives where possible<br>• **Avoid (US/TW, insufficient data):** oxcarbazepine, phenytoin, phenobarbital, St John's wort, nevirapine (UK instead allows 50 mg BID with these)<br>• Etravirine: only with ATV/r, DRV/r or LPV/r<br>• **Polyvalent cations** (Mg/Al antacids, laxatives, sucralfate, buffered meds): DTG **2 h before or 6 h after**<br>• **Ca/Fe supplements / multivitamins:** together OK **if taken with food**; fasting → DTG 2 h before or 6 h after<br>• ↑ **Metformin** (OCT2/MATE1): UK: consider metformin dose adjustment when starting/stopping DTG, monitor renal function (lactic acidosis risk if CrCl 45–59)<br>• No adjustment: rifabutin, ATV/r, DRV/r, methadone, omeprazole, prednisone, oral contraceptives, tenofovir, rilpivirine, sofosbuvir/velpatasvir, elbasvir/grazoprevir<br>• Others: check Liverpool HIV interaction checker (hiv-druginteractions.org)

**Why:** The column is empty. Dolutegravir interactions are clinically critical: rifamycins, antiepileptics and cation chelation. The US/TW and UK labels disagree on contraindications (dofetilide vs fampridine) and on how to handle nevirapine, oxcarbazepine, phenytoin, phenobarbital and St John's wort (avoid vs 50 mg BID), so both positions are shown. Rifabutin needs no adjustment (US §7.4, UK 4.5).

**Sources:** US FDA label §4, §7.3 Table 8, §7.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; Taiwan insert §4 禁忌 '接受dofetilide治療者'; §7.3 表 'Oxcarbazepine Phenytoin Phenobarbital 聖約翰草… 應避免…合併投予'; '應於投予含有多價陽離子之藥物的2小時前或6小時後投予TIVICAY'; §7.4 rifabutin https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; UK SmPC §4.3 'substrates of organic cation transporter 2 (OCT2), including but not limited to fampridine'; §4.4 metformin 'A dose adjustment of metformin should be considered… increase the risk for lactic acidosis in patients with moderate renal impairment (stage 3a… 45–59 mL/min)'; §4.5 nevirapine/oxcarbazepine/phenytoin/phenobarbital/St John's wort 'recommended adult dose of dolutegravir is 50 mg twice daily' https://www.medicines.org.uk/emc/product/10057/smpc

### A11 · Pregnancy

Can be used in pregnancy if clinically needed (UK). Early Botswana signal of neural tube defects (NTD) **not confirmed**: Tsepamo (Botswana, >9,400 DTG-at-conception): NTD 0.11% vs 0.11% non-DTG ART (HIV-neg 0.06–0.07%); Eswatini: 0.08% DTG vs 0.08% HIV-neg. APR (>1,000 1st-trimester exposures): no ↑ major birth defects (3.3% vs background 2.7%). Crosses placenta (cord/maternal ~1.2–1.3). Register exposures with the Antiretroviral Pregnancy Registry. (受孕期使用之神經管缺陷風險與其他ART相當；不使用舊式字母分級)

**Why:** The column is empty. The current US, UK and TW labels all report the updated Botswana/Eswatini data. Letter categories are retired and are not used here.

**Sources:** US FDA label §8.1: 'prevalence of neural tube defects in infants delivered to individuals taking dolutegravir at conception was 0.11%… did not differ significantly… (0.11%…)'; Eswatini '0.08%'; APR '3.3%… MACDP… 2.7%'; cord ratio 1.21 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.6: 'Tivicay can be used during pregnancy if clinically needed… Two large birth outcome surveillance studies… do not indicate an increased risk for neural tube defects' https://www.medicines.org.uk/emc/product/10057/smpc; Taiwan insert §6 懷孕: Botswana/Eswatini '神經管缺陷的盛行率…大致相當' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F

### A12 · Breastfeeding

LactMed: low amounts in milk; detectable in infant plasma because neonatal elimination is prolonged. Used safely and **recommended as a first-line ARV during breastfeeding**. Mothers on ART with a **sustained undetectable viral load** who choose to breastfeed should be supported (transmission <1% but not zero). If the viral load is not suppressed, use banked donor milk or formula. UK SmPC: median milk/maternal plasma ratio 0.033. ⚠️ Labels (TW insert, UK SmPC) still advise women with HIV not to breastfeed (risk of HIV transmission and resistance); the US label lists the risks. (標籤建議不哺乳；LactMed/現行指引: 病毒量持續測不到者可支持哺乳)

**Why:** The column is empty. LactMed (revised 2026-07-15) is the designated breastfeeding source and reflects current US guidance. The TW insert and UK SmPC still advise against breastfeeding. Both positions are given, as the brief asks.

**Sources:** LactMed Dolutegravir NBK500631, Summary of Use during Lactation: 'detectable in maternal milk in low amounts… elimination by newborn infants is prolonged… recommended as a first-line drug during breastfeeding… sustained undetectable viral load and who choose to breastfeed should be supported… If a viral load is not suppressed, banked pasteurized donor milk or formula is recommended' https://www.ncbi.nlm.nih.gov/books/NBK500631/; UK SmPC §4.6 'median dolutegravir breast milk to maternal plasma ratio of 0.033… recommended that women living with HIV do not breast-feed' https://www.medicines.org.uk/emc/product/10057/smpc; Taiwan insert §6 哺乳: '應囑咐在接受TIVICAY治療的母親不要餵哺母乳' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### A13 · Notes

• FJUH: TIV01 Tivicay 50 mg tab (汰威凱膜衣錠, 衛部藥輸字第026407號); ATC J05AJ03. No boxed warning (US)<br>• ⚠️ **Hypersensitivity** (<1%; rash + fever/malaise, organ dysfunction incl. liver injury) → stop DTG and other suspect drugs immediately; re-challenge contraindicated<br>• ⚠️ **Hepatotoxicity** incl. acute liver failure; higher risk with HBV/HCV co-infection. DTG has **no anti-HBV activity**: in HBV co-infection keep effective HBV therapy (flare/reactivation if withdrawn)<br>• **Creatinine ↑ ~0.15 mg/dL** within 4 wk (OCT2/MATE1 inhibition of tubular secretion), stable, not a true GFR fall; do not stop for this alone (肌酸酐假性上升)<br>• Psychiatric: insomnia, depression, suicidal ideation (mainly with prior psychiatric history)<br>• Weight, lipids and glucose may rise on ART<br>• IRIS (incl. autoimmune: Graves, Guillain-Barré) can occur after ART start<br>• INSTI resistance: Q148 + ≥2 secondary mutations → poor response; use 50 mg BID and avoid inducers/cations<br>• Tivicay PD (5 mg dispersible) ≠ film-coated tab mg-for-mg<br>• Interactions: see column + Liverpool checker (hiv-druginteractions.org)

**Why:** The column is empty. The key warnings for clinical use are hypersensitivity, hepatotoxicity with HBV co-infection, the creatinine artefact, psychiatric effects, IRIS, metabolic changes, resistance and formulation non-interchangeability. All come from labels. There is no boxed warning to add. Guideline regimen-choice text (DHHS) is not proposed because clinicalinfo.hiv.gov could not be reached to verify it.

**Sources:** US FDA label §5.1, §5.2, §5.4, §5.5, §6.1 ('mean change from baseline of 0.15 mg/dL'; 'Suicidal ideation… primarily in participants with a pre-existing history of depression') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.4 (HBV therapy, weight and metabolic parameters, integrase class resistance), §5.1 'ATC code: J05AJ03' https://www.medicines.org.uk/emc/product/10057/smpc; Taiwan insert ATC Code 'J05AJ03' and §5.1 警語 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F

### A14 · Page body

## Tivicay (Dolutegravir) 汰威凱膜衣錠 50 mg<br>INSTI for HIV-1, given with other ARVs. Adult dose 50 mg QD; 50 mg BID with UGT1A/CYP3A inducers (rifampin, carbamazepine, efavirenz) or INSTI resistance. No renal adjustment (caution if INSTI-resistant and CrCl <30); avoid in Child-Pugh C. Contraindicated with dofetilide (US/TW) and fampridine (UK). Separate from polyvalent cations: DTG 2 h before or 6 h after. Creatinine rises ~0.15 mg/dL without a true GFR change. NTD risk is similar to other ART (Botswana/Eswatini).<br>### References<br>1. US FDA label TIVICAY/TIVICAY PD (DailyMed setid 63df5af3-b8ac-4e76-9830-2dbb340af922, v34, 2026-10-02) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922<br>2. UK SmPC Tivicay 10/25/50 mg film-coated tablets (eMC, rev. 03/10/2025) https://www.medicines.org.uk/emc/product/10057/smpc<br>3. 台灣仿單 汰威凱膜衣錠50毫克 衛部藥輸字第026407號 (版次5, 114/04/17) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F<br>4. LactMed: Dolutegravir (NBK500631, rev. 2026-07-15) https://www.ncbi.nlm.nih.gov/books/NBK500631/

**Why:** The body is blank. Other new entries have a short summary and a References list, so the sources should be recorded on the page.

**Sources:** US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC https://www.medicines.org.uk/emc/product/10057/smpc; Taiwan insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; LactMed https://www.ncbi.nlm.nih.gov/books/NBK500631/

### B1 · Category

Keep as is: Antiretroviral (INSTI)

**Why:** The category is correct. The US label (section 1) and the TW insert (section 1.1, "HIV INSTI類的藥物") both describe dolutegravir as an HIV-1 integrase strand transfer inhibitor. The TW insert gives ATC J05AJ03 (integrase inhibitors). No change needed.

**Sources:** US FDA label (DailyMed) §1 Indications: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; TW insert 衛部藥輸字第026407號 §1.1 and ATC code J05AJ03: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F

### B2 · Adult dose

<span color="blue">`PO`</span> 50 mg QD, with or without food; always with other ARVs. For INSTI-naive patients (treatment-naive or -experienced); also with rilpivirine 25 mg QD as a switch regimen in virologically suppressed adults (US).<br>50 mg BID:<br>① INSTI-naive patients taking UGT1A/CYP3A inducers: rifampin, carbamazepine, efavirenz, fosamprenavir/r, tipranavir/r. UK also lists etravirine WITHOUT a boosted PI here; US/TW do not recommend that combination.<br>② INSTI-experienced patients with documented or clinically suspected INSTI resistance. Prefer regimens without inducers. UK: take with food when INSTI resistance is present (higher exposure, especially with Q148).<br>Doses above 50 mg BID: not evaluated (TW). UK: 100 mg BID is supported only by modelling, for Q148 + ≥2 secondary mutations with limited options (<2 active agents). There are no clinical data, and it should not be used with atazanavir.<br>Missed dose: take it unless the next dose is due within 4 h (UK). 漏服：距下次服藥 <4 h 則跳過。

**Why:** The column is empty. Doses taken from TW insert §3.1 Table 1 (stocked product), US Table 1 §2.2, and UK §4.2/§5.2. Food advice, the 100 mg BID option and missed-dose advice are UK-only.

**Sources:** TW insert §3.1 表1 (50 mg QD; 50 mg BID with UGT1A/CYP3A inducers or INSTI resistance; >50 mg BID not evaluated): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §2.2 Table 1 and §7.3 Table 8: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.2 Posology (Q148 note, missed dose, food with INSTI resistance) and §5.2: https://www.medicines.org.uk/emc/product/10057/smpc

### B3 · Renal dose, HD, CRRT

No adjustment at any CrCl for INSTI-naive patients (TW/US/UK). Less than 1% of a dose is excreted unchanged in urine.<br>Severe impairment (CrCl <30): AUC falls about 40%. TW/US advise caution in INSTI-experienced patients with resistance, because lower levels may cause loss of effect.<br>HD: labels give no dosing data. UK expects no PK difference. DTG is ≥98.9% protein-bound, so dialysis is unlikely to remove much. Measured HD extraction ratio was about 7%; usual dose, no supplement (Moltó 2016, PMID 26856824).<br>CRRT: no data. Usual dose; minimal removal expected from high protein binding (extrapolation).<br>⚠ Creatinine rises about 0.15 mg/dL in the first 4 weeks because DTG blocks OCT2/MATE1 tubular secretion. Actual GFR is unchanged, so do not use this rise for dose decisions. 肌酸酐上升非真正腎功能下降。

**Why:** The column is empty. Per the ground rules, renal advice follows the TW insert (stocked product), with US/UK values alongside. The HD statement is backed by a verified PMID (esummary checked). No study covers CRRT, so that line is marked as an extrapolation.

**Sources:** TW insert §6.7 腎功能不全 (no adjustment; caution if severe and INSTI-experienced; 尚無透析劑量資訊): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §8.7 Renal Impairment, §12.3 (AUC ↓40% at CrCl <30; <1% unchanged renal elimination; ≥98.9% protein bound), §10 Overdosage, §6.1 Changes in Serum Creatinine (+0.15 mg/dL): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.2 Renal impairment (no data on dialysis but PK differences not expected): https://www.medicines.org.uk/emc/product/10057/smpc; Moltó J et al. Removal of dolutegravir by hemodialysis in HIV-infected patients with ESRD. Antimicrob Agents Chemother 2016;60:2564-6. PMID 26856824: https://pubmed.ncbi.nlm.nih.gov/26856824/

### B4 · Hepatic dose

Child-Pugh A/B: no adjustment.<br>Child-Pugh C: not studied. TW/US: not recommended. UK: use with caution.<br>In moderate impairment, total exposure is similar but unbound exposure is 1.5–2× higher (UK).<br>HBV/HCV co-infection: higher risk of transaminase elevation; monitor LFTs.

**Why:** The column is empty. Following the stocked-product hierarchy, the TW insert wording ('not recommended') comes first; the UK difference ('caution') is shown alongside.

**Sources:** TW insert §6.6 肝功能不全 (TIVICAY並不建議用於重度肝功能不全): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §8.6 Hepatic Impairment (not recommended in Child-Pugh C), §5.2 Hepatotoxicity: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.2 Hepatic impairment (caution in Child-Pugh C) and §5.2 (unbound exposure 1.5-2x in moderate HI): https://www.medicines.org.uk/emc/product/10057/smpc

### B5 · Pediatric dose

<span color="blue">`PO`</span> Stocked form: 50 mg film-coated tablet only.<br>TW insert: ≥12 y and ≥40 kg, INSTI-naive: 50 mg QD; 50 mg BID with UGT1A/CYP3A inducers. Under 12 y or under 40 kg: not established in TW.<br>US: film-coated tablets for ≥14 kg (INSTI-naive):<br>• 14–<20 kg: 40 mg QD, given as 4 × 10 mg tablets (not stocked). US prefers TIVICAY PD in this band.<br>• ≥20 kg: 50 mg QD.<br>With inducers, give the same weight-band dose BID (≥4 wk old).<br>UK: ≥6 y and ≥14 kg, same weight bands. Alternatively split as 20 mg BID (14–<20 kg) or 25 mg BID (≥20 kg).<br>TIVICAY PD 5 mg dispersible tablets are for ≥2 kg. They are not interchangeable mg-for-mg with film-coated tablets (about 1.6× bioavailability) and are not stocked.<br>INSTI-resistant children: no dose recommendation. 兒童劑量依劑型不同，不可mg對mg互換。

**Why:** The column is empty. The TW insert (stocked product) is the most restrictive (≥12 y and ≥40 kg). The newer US/UK weight-band doses are shown alongside. The obsolete '30–<40 kg: 35 mg' band must not be used; see the hospital-database issues.

**Sources:** TW insert §3.3 兒童病人 and §6.4 小兒: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §2.1, §2.3 Table 4, §5.5, §12.3 (PD ~1.6-fold bioavailability): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.1 and §4.2 Tables 1-2: https://www.medicines.org.uk/emc/product/10057/smpc

### B6 · Indications

HIV

**Why:** The only labelled indication is HIV-1 treatment, combined with other ARVs, or with rilpivirine as a switch regimen (US). It is not labelled for PrEP, so do not tag 'HIV PrEP'. The 'HIV' option exists in the schema.

**Sources:** US FDA label §1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.1: https://www.medicines.org.uk/emc/product/10057/smpc; TW insert §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F

### B7 · Coverage

HIV

**Why:** DTG is active against HIV-1 (all group M clades and group O) in vitro. HIV-2 activity was seen in vitro but is not a labelled indication, so put that only in Notes. It has no activity against HBV, so do not tag HBV. 'HIV' exists in the schema.

**Sources:** US FDA label §12.4 Microbiology (antiviral activity HIV-1 clades A-G, group O; HIV-2 isolates in PBMC): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### B8 · Mechanism

INSTI (嵌合酶鏈轉移抑制劑). It binds the HIV integrase active site and blocks the strand-transfer step of viral DNA integration.<br>Metabolised mainly by UGT1A1, with a minor CYP3A route. Also a substrate of UGT1A3, UGT1A9, BCRP and P-gp.<br>Inhibits OCT2/MATE1, which raises creatinine and metformin/dofetilide levels.<br>t½ about 14 h; ≥98.9% protein-bound.

**Why:** The column is empty. The mechanism and PK come from the label. '2nd-generation' is common terminology but no label uses it; drop that word if the owner wants label-only wording.

**Sources:** US FDA label §12.4 Mechanism of Action, §7.1, §7.2, §12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §5.2 Biotransformation/Elimination: https://www.medicines.org.uk/emc/product/10057/smpc

### B9 · Drug Interactions

⛔ Contraindicated:<br>• Dofetilide (TW/US).<br>• Fampridine/dalfampridine and narrow-therapeutic-index OCT2 substrates (UK). TW/US instead say weigh the seizure risk.<br>↓DTG, increase to 50 mg BID (INSTI-naive): rifampin, carbamazepine, efavirenz, fosamprenavir/r, tipranavir/r. UK needs no adjustment for fosamprenavir/r without INSTI resistance. If INSTI-resistant, avoid these and use alternatives.<br>Etravirine: only with ATV/r, DRV/r or LPV/r (then no adjustment). Without one of them, TW says 不可併用; UK instead gives 50 mg BID if INSTI-naive.<br>Avoid (TW/US, not enough data): nevirapine, oxcarbazepine, phenytoin, phenobarbital, St John's wort. UK instead gives 50 mg BID with these.<br>Polyvalent cations (Mg/Al antacids, laxatives, sucralfate, buffered drugs): give DTG 2 h before or 6 h after.<br>Ca/Fe supplements and multivitamins: can be taken together with food. Fasting: DTG 2 h before or 6 h after. 制酸劑/鈣鐵需間隔。<br>↑Metformin (AUC +79% with QD, +145% with BID): consider a metformin dose adjustment when starting or stopping DTG, and monitor renal function and glucose (UK). ↑Dalfampridine: seizure risk.<br>No adjustment: rifabutin, ATV/r, DRV/r, rilpivirine, tenofovir, methadone, OCP, omeprazole, prednisone, sofosbuvir/velpatasvir, elbasvir/grazoprevir. UK: with ATV, do not exceed 50 mg BID.<br>Full check: Liverpool HIV interaction checker (hiv-druginteractions.org).

**Why:** The column is empty. Rifampicin, chelation and boosters are critical DDIs for an INSTI. The TW insert (stocked product) matches the US label. The UK SmPC differs in three places: it contraindicates fampridine rather than dofetilide; it allows 50 mg BID rather than 'avoid' with nevirapine, oxcarbazepine, phenytoin, phenobarbital and St John's wort; and it needs no adjustment with fosamprenavir/r. The source brief did not capture these differences.

**Sources:** TW insert §4 禁忌, §7.3 表2, §7.4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; US FDA label §4, §7.3 Table 8, §7.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.3 (fampridine contraindication), §4.4 (metformin), §4.5 Table 3 (rifampicin AUC ↓54%, Mg/Al antacid AUC ↓74%, metformin AUC ↑79%/↑145%, nevirapine/oxcarbazepine/phenytoin/phenobarbital/St John's wort 50 mg BID): https://www.medicines.org.uk/emc/product/10057/smpc

### B10 · Side Effects

GI, CNS, LFT↑, hypersensitivity, IRIS, weight gain, dysglycemia

**Why:** Mapping of label findings to tags:<br>• GI: nausea and diarrhoea are very common (UK §4.8).<br>• CNS: headache very common; insomnia, dizziness, abnormal dreams, depression and anxiety common; suicidal ideation uncommon.<br>• LFT↑: ALT/AST rise common; hepatitis and acute hepatic failure rare (US §5.2).<br>• hypersensitivity: under 1% (US §5.1).<br>• IRIS: US §5.4.<br>• weight gain: common in UK §4.8; postmarketing in US §6.2.<br>• dysglycemia: Grade 2–4 hyperglycaemia in 6–14% (US Table 6, VIKING-3).<br>All tags exist in the schema. Do NOT tag 'lactic acidosis': no dolutegravir label lists it (NRTI class effect). The UK metformin warning concerns metformin-associated lactic acidosis, not DTG. Optional: 'anemia' (very rare sideroblastic anaemia) and 'myopathy' (myositis <2%, CPK rise) are label-supported but minor.

**Sources:** UK SmPC §4.8 Table 4: https://www.medicines.org.uk/emc/product/10057/smpc; US FDA label §5.1, §5.2, §5.4, §6.1 Table 6, §6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### B11 · Monitor

viral load, LFT, HBV serology, renal, lipids, glucose

**Why:** Reason for each tag:<br>• viral load: needed for any ART and for INSTI-resistance dosing.<br>• LFT: US §5.2 'Monitoring for hepatotoxicity is recommended'; UK §4.4 asks for liver enzymes in HBV/HCV co-infection.<br>• HBV serology: UK §4.4 asks for 'particular diligence' to keep effective HBV therapy, because DTG has no HBV activity and flares occurred when anti-HBV therapy was withdrawn.<br>• renal: interpret the expected creatinine rise; metformin co-use (UK §4.4).<br>• lipids and glucose: UK §4.4 'Weight and metabolic parameters'.<br>All tags exist in the schema. HLA-B*5701 is not needed for DTG alone (only for abacavir combinations).

**Sources:** US FDA label §5.2, §6.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.4 Special warnings: https://www.medicines.org.uk/emc/product/10057/smpc

### B12 · Pregnancy

Can be used in pregnancy if clinically needed (UK §4.6).<br>Neural tube defects (NTD) with DTG at conception:<br>• Botswana (Tsepamo): 0.11% on DTG vs 0.11% on non-DTG ART vs 0.06% in HIV-negative women.<br>• Eswatini: 0.08% on DTG vs 0.22% on non-DTG vs 0.08% in HIV-negative women.<br>Neither difference is significant (US §8.1, TW §6.1). The early Tsepamo signal (0.30% on DTG at conception; Zash, NEJM 2019, PMID 31329379) was not confirmed with more data.<br>Antiretroviral Pregnancy Registry (APR): birth defects 3.3% after 1st-trimester exposure vs 2.7% background (MACDP); no increased risk seen.<br>Crosses the placenta (cord:maternal ratio about 1.2–1.3).<br>懷孕可使用；受孕期使用之NTD盛行率與其他ART相當（早期訊號未被證實）。

**Why:** The column is empty. Per the ground rules, no letter category is used. Figures were re-checked against US §8.1, UK §4.6 and the TW insert §6.1 (all agree). The PMID was verified with esummary/efetch.

**Sources:** US FDA label §8.1 Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/10057/smpc; TW insert §6.1 懷孕: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; Zash R et al. Neural-tube defects and antiretroviral treatment regimens in Botswana. N Engl J Med 2019;381:827-840. PMID 31329379: https://pubmed.ncbi.nlm.nih.gov/31329379/

### B13 · Breastfeeding

LactMed: low levels in milk (UK SmPC milk:plasma ratio 0.033), but detectable in infant plasma because neonates clear it slowly.<br>LactMed calls DTG a first-line drug during breastfeeding. With sustained viral suppression, transmission risk is under 1% (not zero). Mothers with a sustained undetectable viral load who choose to breastfeed should be supported. If the viral load is not suppressed, use banked donor milk or formula.<br>Labels are more conservative:<br>• TW insert §6.2: mothers on TIVICAY should not breastfeed.<br>• UK §4.6: women with HIV should not breastfeed.<br>• US §8.2: lists the risks (HIV transmission, resistance, adverse effects).<br>仿單建議不哺乳；LactMed/現行指引：病毒量持續測不到者可支持哺乳，需個別討論。

**Why:** The column is empty. Per the hierarchy, LactMed is the source for breastfeeding. The TW insert and UK SmPC disagree with it and are noted alongside, as the brief requested.

**Sources:** LactMed Dolutegravir NBK500631 (revised 2026-07-15), Summary of Use during Lactation: https://www.ncbi.nlm.nih.gov/books/NBK500631/; TW insert §6.2 哺乳: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; UK SmPC §4.6 Breast-feeding (milk:plasma 0.033): https://www.medicines.org.uk/emc/product/10057/smpc; US FDA label §8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### B14 · Notes

No boxed warning.<br>⚠ Hypersensitivity (rash, fever, organ or liver involvement): stop DTG and other suspect drugs at once; do not rechallenge (contraindicated).<br>⚠ Hepatotoxicity, including acute liver failure. Higher risk with HBV/HCV co-infection. Transaminase rises or HBV reactivation have occurred, especially when anti-HBV therapy was withdrawn. DTG has NO anti-HBV activity: in HBV co-infection, start or maintain effective HBV therapy per guidelines (UK §4.4).<br>IRIS: CMV, MAC, PCP, TB, or autoimmune disease (Graves, Guillain-Barré).<br>Suicidal ideation, mainly with a psychiatric history.<br>Creatinine rises about 0.15 mg/dL without a true fall in GFR.<br>Resistance: reduced response with Q148 + ≥2 secondary INSTI mutations (TW §2, UK §4.4).<br>Rifampicin co-treatment: labels require 50 mg BID. RADIANT-TB (phase 2, non-comparative; PMID 37230101) found similar suppression with standard QD dosing; this is investigational and labels are unchanged.<br>HIV-2 activity in vitro only; not a labelled indication.<br>US label also covers TIVICAY PD 5 mg dispersible tablets (≥2 kg); not stocked here.

**Why:** The column is empty. These notes collect the label warnings plus key guideline/off-label context, all with verified PMIDs. The HBV point is critical because DTG is often given with non-HBV-active backbones.

**Sources:** US FDA label §5.1-5.5, §6.1, §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; UK SmPC §4.4: https://www.medicines.org.uk/emc/product/10057/smpc; TW insert §2, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; Griesel R et al. RADIANT-TB. Lancet HIV 2023;10:e433-e441. PMID 37230101: https://pubmed.ncbi.nlm.nih.gov/37230101/

### B15 · Page body

Short reference block:<br>• US label: DailyMed TIVICAY/TIVICAY PD, setid 63df5af3-b8ac-4e76-9830-2dbb340af922, v34.<br>• UK SmPC: eMC 10057, revised 03/10/2025.<br>• TW 仿單: 衛部藥輸字第026407號, 版次5, 114/04/17.<br>• LactMed: NBK500631.<br>• PMIDs: 26856824 (HD), 31329379 (Tsepamo), 37230101 (RADIANT-TB).<br>• Liverpool HIV interaction checker link.

**Why:** New entry with an empty body. A source list helps future re-verification. Optional if other entries keep their bodies empty.

**Sources:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; https://www.medicines.org.uk/emc/product/10057/smpc; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026407%E8%99%9F; https://www.ncbi.nlm.nih.gov/books/NBK500631/

## Apply log

- Adult dose: merged both agreed versions (QD/BID indications, rilpivirine switch, UK >50 mg BID modelling note, food with INSTI resistance, missed dose with Chinese note)
- Renal dose, HD, CRRT: merged (no adjustment, CrCl <30 AUC -40%/C24 -43% caution if INSTI-resistant, UK view, HD/PD no label data, Molto 2016 PMID 26856824, CRRT no data, creatinine pseudo-rise)
- Hepatic dose: Child-Pugh A/B no adjustment; C not recommended (TW/US) / caution (UK); unbound exposure note; hepatotoxicity and LFT monitoring in HBV/HCV co-infection
- Pediatric dose: TW >=12 y & >=40 kg, US/UK weight bands, BID with inducers, PD not interchangeable (~1.6x), stocked-form notes
- Indications: [HIV]
- Coverage: [HIV]
- Side Effects: [GI, CNS, LFT↑, hypersensitivity, IRIS, weight gain, dysglycemia]
- Monitor: [viral load, LFT, HBV serology, renal, lipids, glucose]
- Mechanism: merged INSTI mechanism, HIV-1 M/O and HIV-2 in vitro, UGT1A1/CYP3A, transporters, OCT2/MATE1, t1/2, protein binding, excretion, Q148 note
- Drug Interactions: merged contraindications (dofetilide; fampridine UK), inducers -> 50 mg BID, etravirine, avoid list vs UK BID, cation separation, Ca/Fe with food, metformin (incl. lactic acidosis CrCl 45-59), no-adjustment list, Liverpool checker
- Pregnancy: merged Tsepamo/Eswatini NTD data, Zash PMID 31329379, APR data and registration, placental transfer, no letter category
- Breastfeeding: LactMed first-line/support if sustained undetectable VL, milk:plasma 0.033, TW/UK/US label positions, bilingual note
- Notes: merged FJUH product/ATC, no boxed warning, hypersensitivity, hepatotoxicity/HBV, creatinine rise, psychiatric, metabolic, IRIS, resistance, RADIANT-TB PMID 37230101, HIV-2 in vitro, PD not interchangeable, Liverpool
- Category: kept as Antiretroviral (INSTI)
- Page body: added summary heading/paragraph and References section (US label v34, UK SmPC rev 03/10/2025, TW insert 版次5, LactMed, 3 verified PMIDs, Liverpool checker)
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
