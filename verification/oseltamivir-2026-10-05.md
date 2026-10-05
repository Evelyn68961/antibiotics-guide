# New entry: Tamiflu (Oseltamivir)

- **Notion entry:** [Tamiflu (Oseltamivir)](https://app.notion.com/3f0c496dfff18192bf0becc55b9adc58). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** TAM08 (自費 Tamiflu cap 75 mg), TAM06 (自費 Tamiflu cap 75 mg), ERA02 (公費 Eraflu cap 75 mg), ERA03 (公費 Eraflu cap 75 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/oseltamivir.json` (plus any Taiwan insert text files)

## Product and sources

Oseltamivir phosphate 75 mg oral capsules, the only form the hospital stocks. TAM08 and TAM06 are Tamiflu 75 mg (克流感膠囊75毫克, Roche, 衛署藥輸字第023253號, NHI B025285100, self-pay 自費). ERA02 and ERA03 are Eraflu 75 mg "Yung Shin" (易剋冒膠囊75毫克, 衛部藥製字第059653號, NHI A059653100, government-funded 公費). ATC J05AH02. Labels checked: the Taiwan TFDA Tamiflu 75 mg insert (CDS 16.0); US DailyMed generic oseltamivir capsule label (setid f26154bd…, v10, Sep 2026) and brand TAMIFLU label (setid ee3c9555…, v45, effective 2025-12-15), whose renal table matches the generic; UK SmPC Tamiflu 30/45/75 mg capsules (eMC 8050, revised 01 Jan 2021); LactMed NBK501493 (revised 2024-02-15). The Notion page was blank, with only its title and Category "Neuraminidase inhibitor", so every column needs text. Renal dosing follows the Taiwan insert for the stocked product, which matches the UK SmPC, with the US FDA differences noted next to it. The relayed user request said "do task 2,3,5", but no numbered task list exists in this context. This review therefore carries out the computed reviewer-A audit only. It is read-only: nothing was edited in Notion or in the repo.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 75 mg cap (Tamiflu TAM08/TAM06 自費; Eraflu 易剋冒 ERA02/ERA03 公費)<br>• Treatment: 75 mg BID × 5 days, start within 48 h of symptom onset<br>• Immunocompromised: 75 mg BID × 10 days (TW 仿單 / UK SmPC)<br>• Post-exposure prophylaxis: 75 mg QD × 10 days (FDA: ≥10 days), start within 48 h of contact<br>• Community-outbreak (seasonal) prophylaxis: 75 mg QD up to 6 weeks (immunocompromised: up to 12 weeks)<br>• With or without food (food may improve GI tolerance)<br>• IDSA 2018: hospitalized or severe/progressive illness → start ASAP regardless of illness duration; high-risk outpatients → treat ASAP; do not routinely use higher doses (A-II)

**Why:** The column is empty. All three labels agree on 75 mg BID × 5 days for treatment and 75 mg QD for prophylaxis. The 10-day treatment course for immunocompromised patients appears in the TW insert and the SmPC (FDA gives no duration). Prophylaxis durations: FDA says at least 10 days post-exposure, up to 6 weeks in an outbreak, and up to 12 weeks if immunocompromised. TW/SmPC say 10 days post-exposure. The labels limit treatment to symptoms ≤48 h. IDSA's 'regardless of illness duration' advice for inpatients is clinically important and is cited separately.

**Sources:** US FDA oseltamivir label §2.2–2.3 Recommended Dosage for Treatment/Prophylaxis: '75 mg twice daily … for 5 days'; '75 mg orally once daily … for at least 10 days … up to 6 weeks during a community outbreak. In immunocompromised patients … up to 12 weeks' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; US FDA TAMIFLU brand label §2 (same regimens) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; Taiwan Tamiflu 75 mg insert §3.1 用法用量 and §3.3 免疫功能不全病人: '建議治療時間為10天。毋需調整劑量' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC Tamiflu §4.2 Posology (immunocompromised: 10 days; post-exposure 10 days) https://www.medicines.org.uk/emc/product/8050/smpc; IDSA 2018 influenza guideline (Uyeki et al., Clin Infect Dis 2019, PMID 30566567, verified via esummary): 'Persons of any age who are hospitalized with influenza, regardless of illness duration (A-II)'; 'should not routinely use higher doses of … NAI drugs (A-II)' https://www.idsociety.org/practice-guideline/influenza/

### A2 · Renal dose, HD, CRRT

Adults & adolescents ≥13 y (TW 仿單 = UK SmPC; FDA same unless noted):<br>CrCl >60: no change<br>CrCl >30–60: Tx 30 mg BID × 5 d; Px 30 mg QD<br>CrCl >10–30: Tx 30 mg QD × 5 d; Px 30 mg every other day<br>CrCl ≤10, not on dialysis: not recommended (no data)<br>HD: Tx 30 mg after each HD session; Px 30 mg after every 2nd session (FDA: 30 mg immediately, then 30 mg after every HD cycle, Tx ≤5 days; Px after alternate cycles)<br>CAPD: Tx 30 mg single dose; Px 30 mg once weekly (FDA: first dose immediately). APD clears more drug; switch to CAPD if nephrology agrees (TW/SmPC)<br>CRRT: no labelled dose; OC clearance on CRRT ≈1/6 of normal → dose reduction appropriate (Ariano 2010; Flannery 2014), no consensus regimen<br>Children ≤12 y with renal impairment: no dosing recommendation (TW/SmPC)<br>⚠ Only 75 mg caps stocked: 30 mg doses need 藥局調製口服懸浮液 6 mg/mL (TW 仿單 §3.1; FDA §2.6)

**Why:** Oseltamivir carboxylate is more than 99% renally excreted, and every label gives a CrCl-based table. The TW insert for the stocked Tamiflu product is the preferred source. It matches the SmPC exactly and the FDA table on CrCl bands. FDA phrases the HD and CAPD regimens differently ('30 mg immediately…', HD treatment no longer than 5 days), so those values sit alongside. No label covers CRRT. Two PubMed sources (PMIDs verified via esummary) support reducing the dose but give no specific regimen, so none is proposed. Every renally adjusted dose is 30 mg, but the hospital stocks only 75 mg capsules. The labels' extemporaneous 6 mg/mL suspension is the practical route. No storage or stability details are included.

**Sources:** Taiwan Tamiflu 75 mg insert §3.3 腎功能不全病人 (treatment and prevention tables; '≤10 (ml/min) 不建議(無現有資料)'; '血液透析病人 每次血液透析療程後30毫克'; '每兩次血液透析療程後30毫克'; '腹膜透析病人 30毫克，單一劑量 / 每週1次'; '腎功能不全的嬰兒與兒童(12歲或以下)的臨床數據不足') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC §4.2 Renal impairment (same tables, APD note) https://www.medicines.org.uk/emc/product/8050/smpc; US FDA label §2.4 Table 2 and §8.6: 'ESRD Patients on Hemodialysis … 30 mg immediately and then 30 mg after every hemodialysis cycle (treatment duration not to exceed 5 days)'; 'ESRD Patients not on Dialysis … not recommended' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; brand label identical https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; Ariano RE et al. CMAJ 2010;182:357-63, PMID 20159892 (verified): 'Drug clearance in the five patients who required continuous renal replacement therapy was about one-sixth that in the 36 patients with relatively normal renal function … Adjustment of the dosage … requiring continuous renal replacement therapy is appropriate' https://pubmed.ncbi.nlm.nih.gov/20159892/; Flannery AH, Thompson Bastin ML. Ann Pharmacother 2014;48:1011-8, PMID 24816209 (verified): 'reduction may be required for CRRT' https://pubmed.ncbi.nlm.nih.gov/24816209/; US FDA label §2.6 Emergency Preparation of Oral Suspension (6 mg/mL) from 75 mg capsules https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653

### A3 · Hepatic dose

Mild–moderate: no adjustment (OC exposure unchanged)<br>Severe: not studied

**Why:** FDA, TW and SmPC all say no adjustment is needed in mild to moderate hepatic impairment, and that severe impairment has not been studied. The SmPC states no adjustment for hepatic dysfunction generally.

**Sources:** US FDA label §8.7 Hepatic Impairment: 'No dosage adjustment is required in patients with mild to moderate hepatic impairment. The safety and pharmacokinetics in patients with severe hepatic impairment have not been evaluated'; §12.3 'oseltamivir carboxylate exposure was not altered' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; Taiwan Tamiflu insert §3.3 肝功能不全病人 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC §4.2 Hepatic impairment https://www.medicines.org.uk/emc/product/8050/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> Treatment × 5 days, BID:<br>• <1 y: 3 mg/kg BID (TW/UK: from full-term neonates; FDA: ≥2 weeks); not for premature <36 wk post-conceptual age<br>• ≥1 y by weight: ≤15 kg 30 mg; >15–23 kg 45 mg; >23–40 kg 60 mg; >40 kg 75 mg BID<br>• Immunocompromised: 10 days (TW/SmPC)<br>Prophylaxis (≥1 y): same weight-band dose QD × 10 days (FDA: up to 6 weeks in a community outbreak)<br>• <1 y: post-exposure 3 mg/kg QD × 10 d only during a pandemic (UK SmPC); FDA: not established <1 y<br>≥13 y: adult dose. Renal impairment ≤12 y: no dosing recommendation<br>>40 kg and able to swallow → 75 mg cap; lower doses → 藥局調製口服懸浮液 6 mg/mL (only 75 mg caps stocked)

**Why:** The column is empty. The weight bands match across FDA Table 1, TW §3.1 and SmPC §4.2. The labels differ on age limits. The TW insert and SmPC allow treatment from full-term neonates, while FDA allows it from 2 weeks. Only the SmPC allows post-exposure prophylaxis under 1 year, and only during a pandemic. The hospital stocks only 75 mg capsules, so the formulation note is clinically necessary.

**Sources:** US FDA label §2.2–2.3 Table 1 and §8.4 Pediatric Use ('safety and efficacy … for prophylaxis … not established for pediatric patients less than 1 year') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; Taiwan Tamiflu insert §2 適應症 '成人和兒童（包含足月新生兒）的流行性感冒之治療', §3.1 孩童 weight table and '未滿1歲的兒童 … 3mg/kg，每日二次 … 不適用於胎齡未滿36週的嬰兒' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC §4.1 and §4.2 Paediatric population (infants 0–12 months post-exposure 3 mg/kg once daily during a pandemic) https://www.medicines.org.uk/emc/product/8050/smpc

### A5 · Indications

["Influenza"]

**Why:** Treatment and prophylaxis of influenza A and B are the only labelled indications. 'Influenza' already exists in the schema.

**Sources:** US FDA label §1.1–1.2 Indications https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/8050/smpc; Taiwan Tamiflu insert §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F

### A6 · Coverage

["Influenza A","Influenza B"]

**Why:** The drug inhibits influenza A and B neuraminidase. Both options exist in the schema. FDA §5.3 says it has no efficacy against other pathogens.

**Sources:** US FDA label §1 and §12.4 Microbiology (IC50 vs A/H1N1, A/H3N2, B) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; Taiwan Tamiflu insert §5.1: '沒有證據顯示Tamiflu對A型及B型流行性感冒病毒以外的病原所引起的疾病有效' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F

### A7 · Side Effects

["GI","CNS","SJS/TEN","LFT↑","thrombocytopenia","dysglycemia"]

**Why:** GI: in treatment trials nausea was 10% vs 6% placebo and vomiting 8% vs 3%; paediatric vomiting was 16% vs 8%. CNS: neuropsychiatric events (delirium, abnormal behaviour, seizures) are a boxed Warnings item (§5.2) and a TW 警語. SJS/TEN: §5.1, plus contraindication in serious hypersensitivity. LFT↑: postmarketing hepatitis and abnormal LFTs (FDA §6.2; TW §5.4 and §8.3; SmPC: fulminant hepatitis, rare). All four options exist. Other effects have no matching option: arrhythmia, GI bleeding or haemorrhagic colitis, aggravated diabetes, and rare thrombocytopenia (SmPC). Mention them in the body if wanted.

**Sources:** US FDA label §5.1, §5.2, §6.1 Table 5, §6.2 Postmarketing https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; UK SmPC §4.8 Table 1 https://www.medicines.org.uk/emc/product/8050/smpc; Taiwan Tamiflu insert §5.1, §5.4 '曾有肝臟酵素升高的報告', §8.3 上市後經驗 (Stevens-Johnson, 肝炎, 胃腸出血) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F

### A8 · Monitor

["renal","neuro","CNS"]

**Why:** Renal: the dose depends on CrCl (FDA §2.4 and §8.6). Neuro/CNS: all labels require close monitoring for abnormal behaviour, especially in children and adolescents. This matches how the Peramivir entry is tagged. All three options exist.

**Sources:** US FDA label §5.2: 'Closely monitor … for signs of abnormal behavior' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; Taiwan Tamiflu insert §5.1: '須嚴密地監測流感病人(特別是小孩和青少年)之不尋常行為之徵兆' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC §4.4 Neuropsychiatric events https://www.medicines.org.uk/emc/product/8050/smpc

### A9 · Mechanism

Prodrug (ethyl ester) → hydrolysed by hepatic esterases to oseltamivir carboxylate (OC) → inhibits influenza A/B neuraminidase → blocks release of new virions<br>PK: ≥75% of dose reaches circulation as OC; OC t½ 6–10 h; >99% renal (GFR + OAT tubular secretion); not a CYP substrate or inhibitor<br>Resistance: NA substitutions, e.g. H275Y (N1) → oseltamivir-R but zanamivir-S; emerges more often in children and immunocompromised patients

**Why:** The column is empty. The mechanism, PK and resistance details come directly from FDA §12.3 and §12.4. They explain both the renal adjustment and the resistance and cross-resistance pattern.

**Sources:** US FDA label §12.4 Mechanism of Action / Resistance / Cross-resistance ('H275Y … associated with reduced susceptibility to oseltamivir but not zanamivir'; paediatric resistance 27–37% A/H1N1; immunocompromised 27% A/H1N1) and §12.3 Pharmacokinetics https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653

### A10 · Drug Interactions

LAIV (intranasal live vaccine): avoid within 2 weeks before or 48 h after oseltamivir unless medically indicated; inactivated vaccine: any time<br>Probenecid: OC exposure ↑ ~2× (↓ tubular secretion), no dose change<br>Caution with renally co-secreted narrow-margin drugs (chlorpropamide, methotrexate, phenylbutazone) (UK SmPC)<br>No CYP450/glucuronidation interactions; no clinically relevant interaction with amoxicillin, acetaminophen, aspirin, cimetidine, antacids, amantadine, rimantadine, warfarin

**Why:** The column is empty. The labels list the LAIV interaction as the only clinically meaningful one. The SmPC adds a caution about renally co-excreted drugs with a narrow therapeutic margin.

**Sources:** US FDA label §7.1–7.2 and §12.3 Drug Interaction Studies https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; UK SmPC §4.5 Interaction https://www.medicines.org.uk/emc/product/8050/smpc; Taiwan Tamiflu insert §7 交互作用 ('服用Tamiflu的兩星期前或48小時後不可使用LAIV'; probenecid 2倍) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F

### A11 · Pregnancy

FDA letter category retired. FDA §8.1: observational data >5,000 exposed pregnancies (>1,000 1st trimester) show no ↑ birth-defect rate<br>UK SmPC: congenital heart defect signal inconclusive (OR 1.75, 95% CI 0.51–5.98)<br>Pregnancy ↑ risk of severe influenza; OC exposure lower but no dose change<br>仿單: 考量效益/風險後懷孕婦女可能可使用<br>IDSA 2018: pregnant & ≤2 wk postpartum = high risk → treat; oseltamivir preferred

**Why:** The column is empty. Per the ground rules, do not write 'Category C' (the hospital site still shows 懷孕分類 C; see the hospital-database issues). The FDA, SmPC and TW insert give risk-summary text, and IDSA supports treatment.

**Sources:** US FDA label §8.1 Pregnancy and §12.3 Pregnant Women https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; UK SmPC §4.6 Pregnancy https://www.medicines.org.uk/emc/product/8050/smpc; Taiwan Tamiflu insert §6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; IDSA 2018 guideline PMID 30566567 (verified): 'Pregnant women and those within 2 weeks postpartum (A-III)'; 'Oseltamivir is preferred for treatment of influenza in pregnant women' https://www.idsociety.org/practice-guideline/influenza/

### A12 · Breastfeeding

LactMed: poorly excreted into milk; maternal 150 mg/day gives low milk levels (infant dose ≈0.5% of maternal weight-adjusted dose, far below doses given directly to infants), not expected to cause adverse effects in breastfed infants; no published reports of infant effects. Alternate: zanamivir<br>仿單 §6.2 / SmPC §4.6: low levels, subtherapeutic for infant; may be used if benefit > risk. FDA §8.2: low levels, unlikely to cause infant toxicity

**Why:** The column is empty. LactMed is the designated source for breastfeeding, and the labels agree with it.

**Sources:** LactMed Oseltamivir NBK501493 (rev. 2024-02-15), Summary of Use during Lactation; Drug Levels; Alternate Drugs to Consider (Zanamivir) https://www.ncbi.nlm.nih.gov/books/NBK501493/; US FDA label §8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; Taiwan Tamiflu insert §6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F

### A13 · Notes

Not a substitute for annual flu vaccination; active only vs influenza A/B, so watch for secondary bacterial infection<br>Neuropsychiatric events (delirium, hallucination, abnormal behaviour/self-injury), mostly children/adolescents; 仿單: Taiwan cases in ≥10-y-olds, monitor closely<br>Consider current susceptibility data (e.g. H275Y); resistance emerges more often in children and immunocompromised patients<br>Stocked: Tamiflu 75 mg cap (TAM08/TAM06, 自費); Eraflu 易剋冒 75 mg cap (ERA02/ERA03, 公費). Oral suspension not stocked

**Why:** The column is empty. These are the label's Limitations of Use and key warnings. The stocked-product line is product identification only and copies no hospital clinical content.

**Sources:** US FDA label §1.3 Limitations of Use, §5.2, §5.3, §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653; Taiwan Tamiflu insert §5.1 警語 ('在我國曾有10歲以上之未成年人病人…行為及感覺異常、幻覺') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC §4.4 https://www.medicines.org.uk/emc/product/8050/smpc

### A14 · Category

Antiviral, neuraminidase inhibitor

**Why:** The current value is correct; FDA calls the drug an 'influenza neuraminidase inhibitor (NAI)'. The proposed wording matches the existing Peramivir entry's Category, 'Antiviral, neuraminidase inhibitor', so the database stays consistent. This change is optional.

**Sources:** US FDA label §1 Highlights: 'an influenza neuraminidase inhibitor (NAI)' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f26154bd-374c-44a8-983a-b2724a591653

### A15 · Page body

Body following the Rapiacta (Peramivir) template: '## Oseltamivir (Tamiflu / Eraflu 易剋冒)', then sections separated by '---':<br>### Category: Antiviral, neuraminidase inhibitor (J05AH02)<br>### Mechanism (A9)<br>### Indications: FDA treatment ≥2 wk (symptoms ≤48 h), prophylaxis ≥1 y; SmPC/仿單 treatment incl. full-term neonates, prophylaxis ≥1 y (SmPC <1 y in pandemic); IDSA: hospitalized/severe → treat regardless of duration<br>### Coverage: influenza A and B only; resistance (H275Y etc.)<br>### Adult Dose: table Treatment / Immunocompromised / Post-exposure / Outbreak (A1, <span color="blue">`PO`</span> 75 mg cap)<br>### Renal Dose, HD, CRRT: TW 仿單 table (Tx \| Px) with FDA HD/CAPD wording alongside + CRRT bullets (A2)<br>### Hepatic Dose (A3)<br>### Pediatric Dose: weight-band table + <1 y + 6 mg/mL compounding note (A4)<br>### Side Effects: US Table 5 (nausea 10% vs 6%, vomiting 8% vs 3%), children vomiting 16% vs 8%; serious: anaphylaxis, SJS/TEN/EM, hepatitis, neuropsychiatric events/seizure, GI bleeding/haemorrhagic colitis, arrhythmia, thrombocytopenia (SmPC), aggravation of diabetes (US §6.2)<br>### Monitor: CrCl before dosing; abnormal behaviour (esp. children/adolescents)<br>### Drug Interactions (A10)<br>### Notes (A13)<br>### Pregnancy (A11)<br>### Breastfeeding (A12 as edited)<br>### References: US DailyMed setid ee3c9555 / f26154bd; UK SmPC eMC 8050; TW 仿單 衛署藥輸字第023253號 (Tamiflu) and Eraflu 衛部藥製字第059653號 insert; LactMed NBK501493; IDSA 2018 PMID 30566567; Ariano 2010 PMID 20159892; Flannery 2014 PMID 24816209<br>No storage/stability section

**Why:** Other entries use the page body for structured tables and source lists. The page is blank, so it should get a concise body built only from the label content cited in A1–A13. No hospital-site content and no storage or stability text are included.

**Sources:** US FDA label §2, §5, §6, §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; Taiwan Tamiflu insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023253%E8%99%9F; UK SmPC https://www.medicines.org.uk/emc/product/8050/smpc; LactMed NBK501493 https://www.ncbi.nlm.nih.gov/books/NBK501493/

### B1 · Adult dose

<span color="blue">`PO`</span> Treatment: 75 mg BID × 5 d; start within 48 h of symptom onset (仿單 §3.1 / US §2.2 / SmPC §4.2)<br>Immunocompromised: 75 mg BID × 10 d, no dose change (仿單 §3.3, SmPC §4.2; US §8.9: efficacy not established)<br>Hospitalized or severe/progressive illness: start ASAP regardless of illness duration; high-risk outpatients: start ASAP (IDSA 2018). Longer course can be considered for immunocompromised or severe LRTI/ARDS (IDSA C-III)<br>High-dose (150 mg BID): not routinely recommended (IDSA A-II); RCT in hospitalized severe influenza showed no virological or clinical benefit (SEA network, BMJ 2013, PMID 23723457)<br>Prophylaxis: 75 mg QD — post-exposure: 10 d (仿單/SmPC), ≥10 d (US), start within 48 h of contact; community outbreak: up to 6 wk (immunocompromised up to 12 wk)<br>IDSA: post-exposure 7 d after last exposure; LTCF outbreak ≥14 d and ≥7 d after last case<br>May be taken with or without food (food may improve GI tolerability); NG/enteral tube administration gives adequate absorption (IDSA; Ariano 2010, PMID 20159892)

**Why:** This is a new entry with an empty column. The 75 mg BID ×5 d and 75 mg QD prophylaxis doses are identical in all three labels. Durations differ: the US label says 'at least 10 days', the SmPC and 仿單 say 10 days, and IDSA says 7 days after the last exposure. Immunocompromised treatment for 10 days appears in the SmPC and 仿單 (the US label says efficacy is not established, §8.9). The hospital stocks only 75 mg capsules, so every adult dose maps to one capsule.

**Sources:** 仿單 Tamiflu 75 mg §3.1 標準劑量 '75毫克膠囊，每天2次，為期5天' and 預防 '75毫克，每天一次，服用10天，必須在接觸病源的兩天內開始'; §3.3 免疫功能不全病人 '建議治療時間為10天。毋需調整劑量' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; US TAMIFLU label §2.2 '75 mg twice daily ... for 5 days'; §2.3 '75 mg orally once daily ... for at least 10 days following close contact ... up to 6 weeks during a community outbreak. In immunocompromised patients ... up to 12 weeks' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.2 'recommended dose for prevention ... 75 mg oseltamivir once daily for 10 days'; 'recommended treatment duration in immunocompromised adults and adolescents is 10 days' — https://www.medicines.org.uk/emc/product/8050/smpc; IDSA 2018 influenza guideline (Uyeki, Clin Infect Dis 2019;68:e1–e47, PMID 30566567): 'Persons of any age who are hospitalized with influenza, regardless of illness duration (A-II)'; 'should not routinely use higher doses of FDA-approved NAI drugs (A-II)'; 'postexposure ... for 7 days after the most recent exposure (A-III)'; 'oral oseltamivir, when administered by nasogastric tube, results in adequate drug exposures' — https://pubmed.ncbi.nlm.nih.gov/30566567/; SEA Infectious Disease Clinical Research Network, BMJ 2013;346:f3039, PMID 23723457 — https://pubmed.ncbi.nlm.nih.gov/23723457/; Ariano RE et al. CMAJ 2010;182:357–63, PMID 20159892 — https://pubmed.ncbi.nlm.nih.gov/20159892/

### B2 · Renal dose, HD, CRRT

仿單 (Tamiflu, hospital product) = SmPC, adults & ≥13 y — Treatment / Prophylaxis:<br>CrCl >60: 75 mg BID / 75 mg QD<br>CrCl >30–60: 30 mg BID / 30 mg QD<br>CrCl >10–30: 30 mg QD / 30 mg every other day<br>CrCl ≤10 (not on dialysis): not recommended (no data)<br>HD: 30 mg after each HD session / 30 mg after every 2nd session<br>CAPD: 30 mg single dose / 30 mg once weekly (APD clears more; nephrology may switch to CAPD)<br>US label: same CrCl bands; HD: 30 mg immediately, then 30 mg after every HD cycle (≤5 d) / 30 mg immediately then after alternate cycles; CAPD: 30 mg immediately (Tx) / 30 mg immediately then weekly<br>Children ≤12 y with renal impairment: no dosing recommendation (仿單/SmPC)<br>30 mg dose: 30 mg capsule not stocked (75 mg caps only) → pharmacy-compounded 6 mg/mL suspension from 75 mg capsules (US §2.6, SmPC §6.6)<br>CRRT (no label dose): IDSA 2018: dose reduction generally needed; OC clearance by CVVHD ≈50 mL/min and 150 mg q12h gave AUC far above expected (Eyler 2012, PMID 23208833); OC Cmax/AUC 4–5× higher on CVVHDF with 75–150 mg BID → reduce dose, consider OC levels (Lemaitre 2012, PMID 22354159); clearance ≈1/6 of normal on CRRT (Ariano 2010, PMID 20159892). No validated regimen; individualize with ID/pharmacy

**Why:** The column is empty. Under the ground rules, renal dosing follows the label of the stocked product, which is the Taiwan Tamiflu insert (identical to the SmPC), with the US values shown alongside. I verified the numbers myself in all three labels. One correction to the brief: the US label is not identical for dialysis. It adds an immediate 30 mg dose for HD and CAPD and phrases HD treatment as 'after every hemodialysis cycle (not to exceed 5 days)'. No label covers CRRT. The CRRT text cites IDSA and three verified PMIDs, and gives no unsupported fixed dose. I also flag in this cell that the hospital has no 30 mg form, because every reduced renal dose is 30 mg.

**Sources:** 仿單 §3.3 腎功能不全病人 treatment/prophylaxis tables ('> 30 至 60: 30毫克，每天2次'; '> 10 至 30: 30毫克，每天1次'; '≤ 10: 不建議'; '血液透析病人 每次血液透析療程後30毫克'; '腹膜透析病人 30毫克，單一劑量'; prophylaxis '每2天1次', '每兩次血液透析療程後30毫克', '每週1次'; '腎功能不全的嬰兒與兒童(12歲或以下)的臨床數據不足') — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; UK SmPC §4.2 Renal impairment tables (identical values; CAPD/APD footnote) — https://www.medicines.org.uk/emc/product/8050/smpc; US TAMIFLU label §2.4 Table 2 ('ESRD Patients on Hemodialysis: 30 mg immediately and then 30 mg after every hemodialysis cycle (treatment duration not to exceed 5 days)'; CAPD 'A single 30 mg dose administered immediately'; 'ESRD Patients not on Dialysis: not recommended'); §2.6 emergency suspension from 75 mg capsules — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; IDSA 2018 (PMID 30566567): 'dose reduction is generally needed for patients on continuous renal replacement therapy' — https://pubmed.ncbi.nlm.nih.gov/30566567/; Eyler RF et al. Pharmacotherapy 2012;32:1061–9, PMID 23208833 — https://pubmed.ncbi.nlm.nih.gov/23208833/; Lemaitre F et al. Ther Drug Monit 2012;34:171–5, PMID 22354159 — https://pubmed.ncbi.nlm.nih.gov/22354159/; Ariano RE et al. CMAJ 2010, PMID 20159892 — https://pubmed.ncbi.nlm.nih.gov/20159892/

### B3 · Hepatic dose

Mild–moderate impairment: no adjustment (US §8.7, 仿單 §3.3); SmPC: no adjustment in hepatic dysfunction<br>Severe impairment: safety/PK not studied (US §8.7, 仿單 §3.3)<br>Prodrug activated by hepatic esterases; no CYP involvement

**Why:** The column is empty. All three labels agree on no adjustment for mild to moderate impairment. The US label and 仿單 both state that severe impairment has not been studied.

**Sources:** US label §8.7 'No dosage adjustment is required in patients with mild to moderate hepatic impairment. The safety and pharmacokinetics in patients with severe hepatic impairment have not been evaluated' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; 仿單 §3.3 肝功能不全病人 '輕度至中度...沒有調整劑量的必要...重度肝功能不全病人之安全性及其藥動學方面，尚未進行過相關研究' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; UK SmPC §4.2 'No dose adjustment is required either for treatment or for prevention in patients with hepatic dysfunction' — https://www.medicines.org.uk/emc/product/8050/smpc

### B4 · Pediatric dose

<span color="blue">`PO`</span> Treatment ×5 d (≥1 y, by weight): ≤15 kg 30 mg BID; >15–23 kg 45 mg BID; >23–40 kg 60 mg BID; >40 kg 75 mg BID<br><1 y: 3 mg/kg BID × 5 d — 仿單/SmPC: from full-term neonates; US: ≥2 weeks of age; not for preterm <36 wk post-conceptual age (仿單/SmPC)<br>Immunocompromised children: same dose × 10 d (仿單/SmPC)<br>Prophylaxis (≥1 y): same weight bands QD × 10 d (community outbreak up to 6 wk, US)<br><1 y prophylaxis: US not established; SmPC: 3 mg/kg QD × 10 d only during a pandemic; IDSA (off-label): term infants 0–8 mo 3 mg/kg QD if ≥3 months (not <3 months unless critical)<br>≥13 y: adult dose. Renal impairment ≤12 y: no dosing recommendation (仿單/SmPC)<br>Only 75 mg capsules stocked → doses <75 mg need pharmacy-compounded 6 mg/mL suspension (US §2.6, SmPC §6.6; 仿單 §14 居家配製)

**Why:** The column is empty. The weight bands are identical in the 仿單, US Table 1 and SmPC. The lower age limit differs: the US label allows treatment from 2 weeks, while the 仿單 and SmPC allow it from term neonates. For infants under 1 year, prophylaxis is approved only in the SmPC, and only during a pandemic. The IDSA 3.5 mg/kg dose for ages 9–11 months is off-label, so I left it out of the main text. The note about the stocked form matters in practice, because only the >40 kg band can use the stocked capsule directly.

**Sources:** 仿單 §3.1 pediatric weight table (≤15, >15–23, >23–40, >40 kg) and '未滿1歲...3mg/kg，每日二次，共5日...不適用於胎齡未滿36週的嬰兒'; §3.3 免疫功能不全 10天 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; US label §2.2–2.3 Table 1 ('Patients from 2 Weeks to less than 1 Year of Age: 3 mg/kg twice daily'; prophylaxis 'Not applicable'); §8.4 'safety and efficacy ... for prophylaxis ... not established for pediatric patients less than 1 year' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.1 (post-exposure prevention in infants <1 y during a pandemic) and §4.2 infant tables ('3 mg/kg once daily' prophylaxis; 'not intended for premature infants ... less than 36 weeks') — https://www.medicines.org.uk/emc/product/8050/smpc; IDSA 2018 Table 8 ('Term infants 0–8 months ... 3 mg/kg per dose once daily if ≥3 months') — https://pubmed.ncbi.nlm.nih.gov/30566567/

### B5 · Indications

Influenza

**Why:** Treatment and prophylaxis of influenza A and B is the only approved indication in the US label, SmPC and 仿單. 'Influenza' is an existing multi-select option. The age limits belong in Notes or the body (see B4 and B12).

**Sources:** US label §1.1–1.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §2 適應症 '成人和兒童（包含足月新生兒）的流行性感冒之治療。成人1歲或以上兒童的流行性感冒之預防' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F

### B6 · Coverage

Influenza A, Influenza B

**Why:** Oseltamivir carboxylate inhibits influenza A and B neuraminidase. Both are existing options. No other organism applies, because all three labels say it has no efficacy against non-influenza pathogens.

**Sources:** US label §12.4 (IC50 vs A/H1N1, A/H3N2, B) and §5.3 'no evidence for efficacy ... in any illness caused by pathogens other than influenza viruses' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §5.1 'Oseltamivir carboxylate inhibits influenza A and B neuraminidases'; §4.4 — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §10.1 '流行性感冒病毒A和B型之神經胺酸水解酶酵素抑制劑'; §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F

### B7 · Side Effects

GI, CNS, SJS/TEN, LFT↑, thrombocytopenia, dysglycemia

**Why:** GI: nausea 10% vs 6% and vomiting 8% vs 3% in adults, vomiting 16% in children. CNS: headache, plus postmarketing neuropsychiatric events and seizures. SJS/TEN: postmarketing, with a boxed-level warning in §5.1. LFT↑: hepatitis and abnormal LFTs, and the SmPC reports fulminant hepatitis. Thrombocytopenia: listed in SmPC Table 1. Dysglycemia: 'aggravation of diabetes' in the US label postmarketing section. All six are existing options. The SmPC and US postmarketing data also list GI bleeding, haemorrhagic colitis and arrhythmia, but no option fits them, so they belong in the body.

**Sources:** US label §6.1 Table 5 and §6.2 Postmarketing (hepatitis, abnormal LFTs, seizure, aggravation of diabetes, SJS/TEN, GI bleeding, arrhythmia) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.8 Table 1 (thrombocytopenia; fulminant hepatitis; convulsion; SJS/TEN; GI bleeding) — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §8.2 表1 (噁心10%, 嘔吐8%, 頭痛) and §8.3 上市後經驗 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F

### B8 · Monitor

renal, neuro, CNS

**Why:** Renal: every label gives CrCl-based dosing. Neuro and CNS: all three labels require close monitoring for abnormal behaviour, especially in children and adolescents, and the Taiwan insert adds a specific warning for minors aged 10 and over. These are existing options and match the style of the peramivir entry. No routine LFT monitoring is required by any label (仿單 §5.4 only notes reported elevations), so LFT is left out.

**Sources:** US label §5.2 'Closely monitor TAMIFLU-treated patients with influenza for signs of abnormal behavior'; §2.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.4 'Patients should be closely monitored for behavioural changes' — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §5.1 '須嚴密地監測流感病人(特別是小孩和青少年)之不尋常行為之徵兆' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F

### B9 · Mechanism

Ethyl-ester prodrug → hepatic esterases → oseltamivir carboxylate (≥75% of oral dose); selective inhibitor of influenza A/B neuraminidase → blocks release of new virions from infected cells and viral spread

**Why:** The column is empty. The wording follows the label pharmacology sections.

**Sources:** US label §12.3 ('At least 75% of an oral dose reaches the systemic circulation as oseltamivir carboxylate') and §12.4 Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F

### B10 · Drug Interactions

LAIV (intranasal): avoid within 2 wk before or 48 h after oseltamivir unless medically indicated (US §7.1, 仿單 §7); ACIP 2024–25: oseltamivir within previous 48 h is a contraindication to LAIV3 (PMID 39197095)<br>Inactivated influenza vaccine: any time<br>Probenecid: ~2× oseltamivir carboxylate exposure; no dose adjustment<br>Co-excreted narrow-margin drugs (chlorpropamide, methotrexate, phenylbutazone): use with care (SmPC §4.5)<br>No CYP450/glucuronidation interactions; no PK interaction with amoxicillin, acetaminophen, aspirin, cimetidine, antacids, rimantadine, amantadine, warfarin

**Why:** The column is empty. The LAIV window and the probenecid effect appear in all three labels. The narrow-margin co-excreted drug caution appears only in the SmPC. The ACIP precaution was verified in the PMC full text (PMC11501009).

**Sources:** US label §7.1–7.2, §12.3 Drug Interaction Studies — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.5 ('care should be taken ... co-excreted agents with a narrow therapeutic margin (e.g. chlorpropamide, methotrexate, phenylbutazone)') — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §7 交互作用 ('在服用Tamiflu®的兩星期前或48小時後不可使用LAIV'; probenecid 2倍) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; ACIP 2024–25, MMWR Recomm Rep 2024;73(5), PMID 39197095: 'Receipt of influenza antiviral medication within the previous 48 hours for oseltamivir and zanamivir' — https://pubmed.ncbi.nlm.nih.gov/39197095/

### B11 · Pregnancy

Large observational data (>1000 1st-trimester exposures; >5000 total in US §8.1): no increased malformation risk (letter category retired)<br>SmPC: one study inconclusive for major congenital heart defects (OR 1.75, 95% CI 0.51–5.98)<br>~30% lower active-metabolite exposure in pregnancy, but no dose adjustment (US §12.3, SmPC §5.2, 仿單 §11.5)<br>仿單: 考量效益與流行病毒株致病性後可使用<br>IDSA 2018: oseltamivir is the preferred antiviral in pregnancy; treat pregnant and ≤2 wk postpartum women ASAP

**Why:** The column is empty. Under PLLR there is no letter category, and the hospital site's 'C' must not be copied (see the hospital-database issues). The SmPC adds the cardiac-defect signal, which the US label does not mention.

**Sources:** US label §8.1 'Available published epidemiological data suggest that TAMIFLU, taken in any trimester, is not associated with an increased risk of birth defects' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.6 (rate of major congenital heart defects 1.76% vs 1.01%, OR 1.75, 95% CI 0.51–5.98) and §5.2 Pregnant Women — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; IDSA 2018 (PMID 30566567): 'Oseltamivir is preferred for treatment of influenza in pregnant women' — https://pubmed.ncbi.nlm.nih.gov/30566567/

### B12 · Breastfeeding

LactMed: poorly excreted into milk; maternal 150 mg/day gives low milk levels (infant dose ≈0.5% of maternal weight-adjusted dose), not expected to harm breastfed infant; infants >2 wk can receive oseltamivir directly at much larger doses<br>Alternate: zanamivir (LactMed)<br>US §8.2 / SmPC §4.6 / 仿單 §6.2: low levels, subtherapeutic for infant; may be used when benefit outweighs risk

**Why:** The column is empty. LactMed is the preferred source for breastfeeding, and all three labels agree with it.

**Sources:** LactMed Oseltamivir NBK501493 (rev. 2024-02-15), Summary of Use during Lactation; Drug Levels; Alternate Drugs to Consider: Zanamivir — https://www.ncbi.nlm.nih.gov/books/NBK501493/; US label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.6 Breastfeeding — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F

### B13 · Notes

Hospital products: 75 mg capsules only — 自費 Tamiflu (TAM08/TAM06) and 公費 Eraflu (ERA02/ERA03)<br>Approved: treatment (仿單/SmPC: from full-term neonates; US: ≥2 wk) and prophylaxis (≥1 y; SmPC: <1 y in pandemic). Not a substitute for vaccination<br>Best benefit if started ≤48 h; hospitalized or severe/progressive illness: start regardless of duration; high-risk outpatients: start ASAP (IDSA)<br>Neuropsychiatric events (delirium, abnormal behaviour, self-injury), mostly children/adolescents; 仿單: ≥10 y 未成年人曾發生行為異常、幻覺 (Japan: falls) → 確認效益大於風險，用藥期間特別注意<br>Resistance: H275Y (N1) → highly reduced oseltamivir/peramivir susceptibility, zanamivir retained; R292K/E119V (N2, H7N9) also reduce susceptibility (IDSA). Treatment-emergent resistance higher in children (infants up to 18%) and immunocompromised (SmPC §5.1; 仿單: HSCT 32%) → consider resistance testing if immunocompromised with persistent viral replication after 7–10 d (IDSA)<br>No efficacy vs non-influenza pathogens; watch for secondary bacterial infection (US §5.3)<br>ECMO alone: no adjustment (IDSA; Lemaitre 2012). TDM: no label/guideline recommendation; Lemaitre 2012 suggests OC levels on CVVHDF where available<br>Obesity: no adjustment (Ariano 2010)

**Why:** The column is empty. These notes collect the clinically useful points that no other column holds. All are from labels or IDSA except the hospital codes, which identify the product only. One fact is left out because its only source is the hospital site: the 公費 Eraflu supply must be prescribed under the Taiwan CDC eligibility rules. The owner may add it as internal practice. 'Obesity: no adjustment' paraphrases Ariano 2010 ('adjustment for obesity does not appear to be necessary').

**Sources:** 仿單 §2, §5.1 警語 ('在我國曾有10歲以上之未成年人病人，於服用本藥後發生行為及感覺異常、幻覺...在日本...甚至有墜樓等事故'), §10.2 抗藥性 (造血幹細胞移植接受者 32%) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; UK SmPC §4.1, §4.4, §5.1 Oseltamivir resistance (infants <1 y 18.31%; immunocompromised 14.5%) — https://www.medicines.org.uk/emc/product/8050/smpc; US label §1, §5.2, §5.3, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; IDSA 2018 (PMID 30566567): H275Y/R292K text; resistance testing 'after 7–10 days'; ECMO 'no dosage adjustment' — https://pubmed.ncbi.nlm.nih.gov/30566567/; Lemaitre F 2012, PMID 22354159 ('ECMO by itself did not impact on the pharmacokinetics of OC') — https://pubmed.ncbi.nlm.nih.gov/22354159/; Ariano RE 2010, PMID 20159892 — https://pubmed.ncbi.nlm.nih.gov/20159892/

### B14 · Category

Antiviral, neuraminidase inhibitor

**Why:** The current value is correct but less specific than the matching entry. The sibling entry Rapiacta (Peramivir) reads 'Antiviral, neuraminidase inhibitor', and the SmPC classifies the drug as 'Antivirals for systemic use, neuraminidase inhibitors' (ATC J05AH02). Adding 'Antiviral' makes the two consistent. It is optional: no content is wrong.

**Sources:** UK SmPC §5.1 'Pharmacotherapeutic group: Antivirals for systemic use, neuraminidase inhibitors ATC code: J05AH02' — https://www.medicines.org.uk/emc/product/8050/smpc; US label §1 'TAMIFLU is an influenza neuraminidase inhibitor (NAI)' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b

### B15 · Page body

Add a body following the Rapiacta (Peramivir) template: '## Oseltamivir (Tamiflu / Eraflu)' then sections, each separated by '---':<br>### Category: Antiviral, neuraminidase inhibitor (J05AH02)<br>### Mechanism: as in B9<br>### Indications: **FDA** treatment ≥2 wk (symptoms ≤48 h), prophylaxis ≥1 y; **SmPC/仿單** treatment incl. full-term neonates, prophylaxis ≥1 y (SmPC <1 y in pandemic); **Clinical (IDSA)** hospitalized/severe/high-risk regardless of duration; **Not for** non-influenza viruses<br>### Coverage: influenza A and B; resistance markers (H275Y etc.)<br>### Adult Dose: table Treatment / Immunocompromised / Post-exposure / Outbreak prophylaxis (B1); administration: with or without food, NG tube OK, capsule may be opened into sweetened liquid (US §2.1)<br>### Renal Dose, HD, CRRT: 仿單 table (Tx \| PEP) + US differences + CRRT bullets (B2)<br>### Hepatic Dose (B3)<br>### Pediatric Dose: weight-band table + <1 y + compounding note (B4)<br>### Side Effects: US Table 5 (nausea 10% vs 6%, vomiting 8% vs 3%, headache 2% vs 1% Tx; prophylaxis headache 17% vs 16%, pain 4% vs 3%); children vomiting 16% vs 8%; infants vomiting 9%, diarrhea 7%, diaper rash 7%; serious: anaphylaxis, SJS/TEN/EM, hepatitis/fulminant hepatitis, neuropsychiatric events/seizure, GI bleeding/haemorrhagic colitis, arrhythmia, thrombocytopenia (SmPC)<br>### Monitor: CrCl before dosing; behaviour (esp. children/adolescents); clinical response, plus resistance testing if persistent replication<br>### Drug Interactions (B10)<br>### Notes (B13)<br>### Pregnancy (B11)<br>### Breastfeeding (B12)<br>### References: US label setid ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC emc 8050 (rev. 01 Jan 2021); 仿單 衛署藥輸字第025285號 / 023253 (CDS 16.0, 2019); Eraflu 衛部藥製字第059653號 insert PDF https://mcp.fda.gov.tw/insert/pdfcasefile/1b00d80d-9e8f-4055-9f08-3d22be086c41; LactMed NBK501493; IDSA 2018 PMID 30566567; SEA BMJ 2013 PMID 23723457; Eyler 2012 PMID 23208833; Lemaitre 2012 PMID 22354159; Ariano 2010 PMID 20159892; ACIP 2024–25 PMID 39197095<br>No storage/stability section (owner removed these deliberately)

**Why:** The page body is blank. Other entries such as Peramivir carry a full sectioned body with a References list, and this proposal follows that template. Every number in it is the same label-sourced value as in B1–B13. The adverse-event percentages were verified in US Table 5, §6.1 and the 仿單 表1. No content comes from the hospital site.

**Sources:** US TAMIFLU label §2.1, §6.1 Table 5, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b; UK SmPC §4.8 — https://www.medicines.org.uk/emc/product/8050/smpc; 仿單 §8 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025285%E8%99%9F; IDSA 2018 PMID 30566567 — https://pubmed.ncbi.nlm.nih.gov/30566567/; LactMed NBK501493 — https://www.ncbi.nlm.nih.gov/books/NBK501493/

## Apply log

- Adult dose: set from merged A+B fixes (PO 75 mg cap with stocked codes; treatment 5 d; immunocompromised 10 d; IDSA hospitalized/severe and high-dose guidance with SEA BMJ 2013; prophylaxis by TW/SmPC/US and IDSA; food/NG tube)
- Renal dose, HD, CRRT: TW 仿單 = SmPC Tx/Px bands, HD, CAPD/APD; US HD/CAPD wording; ≤12 y no recommendation; 6 mg/mL compounding note; CRRT bullets (IDSA, Ariano, Flannery, Eyler, Lemaitre)
- Hepatic dose: mild–moderate no adjustment, severe not studied, esterase activation
- Pediatric dose: weight bands, <1 y treatment and prophylaxis (US/SmPC/IDSA), immunocompromised 10 d, ≥13 y adult, compounding note
- Indications: [Influenza]
- Coverage: [Influenza A, Influenza B]
- Side Effects: [GI, CNS, SJS/TEN, LFT↑, thrombocytopenia, dysglycemia]
- Monitor: [renal, neuro, CNS]
- Mechanism: prodrug → OC, NA inhibition, PK, resistance
- Drug Interactions: LAIV (label + ACIP 2024–25), IIV, probenecid, SmPC narrow-margin co-excreted drugs, no CYP interactions
- Pregnancy: letter category retired, US §8.1 data, SmPC CHD signal, ~30% lower exposure without dose change, 仿單, IDSA preferred
- Breastfeeding: LactMed summary + zanamivir alternate + US/SmPC/仿單
- Notes: stocked products, approvals, timing, neuropsychiatric (仿單 Chinese text), resistance, secondary infection, ECMO/TDM, obesity
- Category: 'Neuraminidase inhibitor' -> 'Antiviral, neuraminidase inhibitor'
- Page body: added full body on the Rapiacta template (Category, Mechanism, Indications, Coverage, Adult/Renal/Hepatic/Pediatric dose tables, Side Effects, Monitor, Drug Interactions, Notes, Pregnancy, Breastfeeding), no storage/stability section
- References section appended: US DailyMed ee3c9555 and f26154bd, UK SmPC eMC 8050, TW 仿單 023253 and 025285 (both confirmed as Tamiflu 75 mg on TFDA site), Eraflu 059653 insert PDF, LactMed NBK501493, IDSA 2018 PMID 30566567, ACIP PMID 39197095, SEA BMJ PMID 23723457, Ariano PMID 20159892, Flannery PMID 24816209, Eyler PMID 23208833, Lemaitre PMID 22354159
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
