# New entry: Juluca (Dolutegravir/Rilpivirine)

- **Notion entry:** [Juluca (Dolutegravir/Rilpivirine)](https://app.notion.com/3f1c496dfff1815e81fed38050cbc55c). Created 2026-10-06.
- **Hospital codes:** JUL01 (Juluca tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/dolutegravir-rilpivirine.json` (plus any Taiwan insert text files)

## Product and sources

JUL01 Juluca 錠劑 / 滋若愷膜衣錠, dolutegravir 50 mg + rilpivirine 25 mg film-coated tablet. NHI code BC27514100, ATC J05AR21, Taiwan licence 衛部藥輸字第027514號. The hospital stocks only this tablet (PO); the outpatient pharmacy does not keep stock. Sources: US label DailyMed setid 806653d1-bf35-4924-b999-ad5d21821cc1 v16 (Jul 31 2026; the history API confirms this is the current version); UK SmPC eMC 9246 (rev 03/10/2025); TW insert (TFDA, uploaded 2025-05-12); LactMed Dolutegravir NBK500631 and Rilpivirine NBK501818 (there is no combination chapter). The Notion page is a new entry: only the title and Category are filled, and the body is blank.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 1 tab (dolutegravir 50 mg / rilpivirine 25 mg) QD **with a meal** (每日一次隨餐服用; moderate-fat meal ↑ AUC DTG 87% / RPV 57%; a protein drink alone gives ~50% lower RPV exposure)<br>Switch only: HIV-1 RNA \<50 copies/mL on stable ART ≥6 months, no history of treatment failure, no known resistance to DTG or RPV (UK: no known/suspected resistance to any NNRTI or INSTI)<br>With rifabutin: add rilpivirine 25 mg tab PO QD with a meal for the whole rifabutin course (US §2.2, 仿單 §3.1)<br>Missed dose: 仿單: take with a meal as soon as remembered; never double the next dose. UK SmPC 4.2: take with a meal ASAP unless the next dose is due within 12 h; vomiting within 4 h → take another tab with a meal<br>Swallow whole; do not chew or crush (UK SmPC 4.2)

**Why:** The column is empty. All three labels require a meal, and the US and TW labels give the rifabutin add-on. Food-effect figures are from US §12.3 Table 5. The missed-dose and do-not-crush advice is UK-only. JUL01 is the only stocked form, so only a PO tag is needed.

**Sources:** US FDA label (DailyMed) §1, §2.1, §2.2, §12.3 Table 5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 衛部藥輸字第027514號 §2, §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC (eMC) 4.1, 4.2 — https://www.medicines.org.uk/emc/product/9246/smpc

### A2 · Renal dose, HD, CRRT

仿單 §6.7 (= US §8.6): CrCl ≥30: no adjustment<br>CrCl \<30 / ESRD: no dose adjustment; 加強監測不良反應 (increased monitoring for adverse effects). DTG AUC ↓40% in severe RI (n=8); RPV: limited or no data in moderate–severe RI/ESRD (US §12.3)<br>HD: labels give no dosing recommendation (US §12.3). ~99% protein bound → unlikely to be removed by dialysis (US §10, UK 4.9). HD PK study (Gupta 2025, PMID 39761595; n=4 HD vs 4 controls): AUC ratio HD:normal 1.1 (DTG) / 1.1 (RPV), troughs above protein-adjusted IC90 → standard dose<br>UK SmPC 4.2: severe RI/ESRD → combine with a strong CYP3A inhibitor only if benefit outweighs risk; no dialysis data, but no PK difference expected<br>CRRT: no label or published data (highly protein bound; standard dose expected)<br>SCr ↑ ~0.1 mg/dL in first 4 wk from tubular secretion inhibition, not a true GFR fall (US §6.1)

**Why:** The column is empty. The hospital product's label (TW §6.7) is used first and matches US §8.6 word for word. The UK wording differs (CYP3A-inhibitor caution) and is shown alongside. No CRRT data exist in any source, so nothing is invented.

**Sources:** Taiwan 仿單 §6.7, §9, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; US FDA label §8.6, §10, §12.3 (Patients with Renal Impairment), §6.1 (Changes in Serum Creatinine) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.2 (Renal impairment), 4.9 — https://www.medicines.org.uk/emc/product/9246/smpc

### A3 · Hepatic dose

Child-Pugh A/B: no adjustment (US §8.7, 仿單 §6.6); UK SmPC 4.2: use with caution in moderate (B)<br>Child-Pugh C: not studied — UK SmPC 4.2: not recommended<br>RPV exposure ↑47% (A) / ↑5% (B); DTG unchanged in B (US §12.3)<br>HBV/HCV co-infection or marked baseline transaminase ↑ → higher risk of transaminase elevation; monitor LFT (US §5.2, UK 4.4)

**Why:** The column is empty. The US, TW and UK labels agree on A/B. Only the UK SmPC states 'not recommended' for Child-Pugh C.

**Sources:** US FDA label §8.7, §12.3, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 §6.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC 4.2, 4.4 — https://www.medicines.org.uk/emc/product/9246/smpc

### A4 · Pediatric dose

Not established (\<18 y) — US §8.4, 仿單 §6.4; UK SmPC 4.2: no posology recommendation can be made

**Why:** The column is empty. All three labels state that safety and efficacy have not been established in children.

**Sources:** US FDA label §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 §6.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC 4.2 (Paediatric population) — https://www.medicines.org.uk/emc/product/9246/smpc

### A5 · Indications

HIV

**Why:** The only labelled indication is HIV-1 (switch in virologically suppressed adults). 'HIV' is an existing option. Do not add 'HIV PrEP' or 'HBV': neither is labelled, and the product has no anti-HBV activity.

**Sources:** US FDA label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/9246/smpc

### A6 · Coverage

HIV

**Why:** Antiviral activity is against HIV-1 only: group M clades A–H, with rilpivirine less active against group O (US §12.4). 'HIV' is an existing option. Do not tag HBV.

**Sources:** US FDA label §12.4 Microbiology (Antiviral Activity in Cell Culture) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1

### A7 · Side Effects

GI, CNS, LFT↑, hypersensitivity, DRESS, QTc prolong, weight gain, IRIS, myopathy

**Why:** All tags are existing options. GI: diarrhoea and nausea (≥2%). CNS: headache, dizziness, somnolence, insomnia, abnormal dreams, plus depressive disorders and suicidal ideation (§5.3). LFT↑: hepatotoxicity and acute liver failure (§5.2). hypersensitivity and DRESS: §5.1. QTc prolong: supratherapeutic rilpivirine (§5.4). weight gain: postmarketing (§6.2). IRIS: §6.1. myopathy: myositis, CK ↑, myalgia. Do NOT tag 'bone loss': BMD increased after switching from TDF (US §6.1).

**Sources:** US FDA label §5.1–5.4, §6.1, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.8 Table 2 — https://www.medicines.org.uk/emc/product/9246/smpc; Taiwan 仿單 §5.1, §8.2, §8.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F

### A8 · Monitor

viral load, HBV serology, LFT, renal, CNS, lipids, glucose

**Why:** viral load: switch requires RNA \<50 copies/mL, and the label notes risk of virologic failure with interactions. HBV serology: the product has no HBV activity, HBV-coinfected patients were excluded, and HBV reactivation was reported when anti-hepatitis therapy was withdrawn (US §5.2, §12.3). LFT: 'monitoring for hepatotoxicity is recommended' (US §5.2). renal: baseline SCr because of the expected rise, plus the metformin interaction (UK 4.4). CNS: depression (US §5.3). lipids and glucose: UK 4.4 (weight and metabolic parameters). All are existing options.

**Sources:** US FDA label §1, §5.2, §5.3, §6.1, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.4 — https://www.medicines.org.uk/emc/product/9246/smpc

### A9 · Mechanism

Dolutegravir (INSTI): binds HIV integrase active site → blocks strand-transfer step of viral DNA integration<br>Rilpivirine (NNRTI, diarylpyrimidine): non-competitive inhibition of HIV-1 reverse transcriptase; does not inhibit human DNA polymerase α/β/γ (US §12.4)

**Why:** The column is empty. The text is taken directly from the label microbiology section.

**Sources:** US FDA label §12.4 Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 §10.1/§10.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F

### A10 · Drug Interactions

**Contraindicated (US §4 = 仿單 §4):** dofetilide; carbamazepine, oxcarbazepine, phenobarbital, phenytoin; rifampin, rifapentine; systemic dexamethasone (more than single dose); St John's wort; **all PPIs** (↑gastric pH → ↓RPV). UK SmPC 4.3 also contraindicates fampridine (dalfampridine)<br>**Rifabutin:** add RPV 25 mg QD with a meal<br>**Antacids (Al/Mg/Ca), sucralfate, polyvalent-cation laxatives/buffered drugs:** Juluca 4 h before or 6 h after<br>**Oral Ca/Fe supplements, multivitamins:** take together with Juluca and a meal, or Juluca 4 h before / 6 h after<br>**H2RA (famotidine, cimetidine…):** Juluca ≥4 h before or 12 h after the H2RA<br>**Metformin:** ↑metformin (AUC ↑79%; DTG inhibits OCT2/MATE1) → consider metformin dose adjustment, monitor renal function (UK 4.4/4.5)<br>**Clarithromycin/erythromycin:** ↑RPV → prefer azithromycin<br>**Dalfampridine:** ↑level → seizure risk (US: weigh benefit; UK: contraindicated)<br>**Methadone:** ↓methadone → monitor; maintenance dose may need adjusting<br>**Drugs with known TdP risk:** consider alternatives (RPV 75–300 mg prolongs QTc)<br>CYP3A inducers ↓RPV; CYP3A inhibitors ↑RPV; UGT1A1/CYP3A inducers ↓DTG<br>Other ARVs: not recommended (complete regimen)<br>Others: check Liverpool HIV interaction checker (hiv-druginteractions.org)

**Why:** The column is empty, and interactions are critical for this drug. The list covers every contraindicated drug and every Table 4 item. US and TW Table 2 are identical. The UK SmPC differs: it contraindicates fampridine and does not list dofetilide. PPIs are a common inpatient pitfall.

**Sources:** US FDA label §4 Table 1, §5.4, §7.2–7.4 Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 §4 表1, §7.4 表2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC 4.3, 4.4, 4.5 — https://www.medicines.org.uk/emc/product/9246/smpc; Liverpool HIV Drug Interactions checker — https://www.hiv-druginteractions.org/checker (pointer only; not reachable from this session)

### A11 · Pregnancy

US §8.1 / 仿單 §6.1: insufficient data for the DTG/RPV combination; APR data for the individual components do not indicate ↑ birth defects<br>NTD: Botswana (Tsepamo) + Eswatini surveillance (more than 14,000) — NTD prevalence with DTG at conception 0.11% / 0.08%, not different from non-DTG ART or HIV-negative<br>RPV exposure ↓30–40% in 2nd/3rd trimester (US §12.3: not clinically relevant if suppressed); DTG crosses placenta (cord:maternal ≈1.2)<br>**UK SmPC 4.2/4.4/4.6: use in pregnancy not recommended** (lower DTG & RPV exposure; low RPV exposure linked to virologic failure; dual therapy not studied in pregnancy)<br>Antiretroviral Pregnancy Registry 1-800-258-4263<br>(FDA letter category retired)

**Why:** The column is empty. The labels disagree: US and TW give risk data without saying 'not recommended', while the UK says not recommended. Both views are shown. No letter category is used. DHHS perinatal guidance (clinicalinfo.hiv.gov) was unreachable this session, so it is not cited. Reviewer B or the owner may add it if they can verify it.

**Sources:** US FDA label §8.1, §12.3 (Pregnancy and Postpartum) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC 4.2, 4.4, 4.6 — https://www.medicines.org.uk/emc/product/9246/smpc

### A12 · Breastfeeding

LactMed (no combination chapter; per component):<br>• DTG (NBK500631, rev 2026-07-15): low milk levels; detected in infant plasma (prolonged neonatal elimination); recommended first-line ARV during breastfeeding<br>• RPV (NBK501818, rev 2025-12-15): low levels in milk and infant serum (limited data); an alternate may be preferred, esp. newborn/preterm<br>Both: on ART with sustained undetectable VL and choosing to breastfeed → support (transmission \<1% but not zero); VL not suppressed → banked donor milk or formula<br>US §8.2: DTG present in human milk; risks = HIV transmission, resistance in HIV+ infant, infant ADRs<br>仿單 §6.2: 應囑咐母親在接受JULUCA治療期間不要餵哺母乳<br>UK SmPC 4.6: women living with HIV are recommended not to breast-feed

**Why:** The column is empty. LactMed is the primary source for breastfeeding. The TW and UK labels still advise against breastfeeding, unlike the current US §8.2 and LactMed, so both positions are recorded.

**Sources:** LactMed Dolutegravir NBK500631 Summary — https://www.ncbi.nlm.nih.gov/books/NBK500631/; LactMed Rilpivirine NBK501818 Summary — https://www.ncbi.nlm.nih.gov/books/NBK501818/; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; Taiwan 仿單 §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/9246/smpc

### A13 · Notes

本院品項: JUL01 Juluca 50/25 mg FC tab (滋若愷膜衣錠)<br>Switch-only 2-drug complete regimen (完整處方，不需併用其他ARV); not for ART-naive or viraemic patients (outside label indication). No boxed warning<br>**No anti-HBV activity:** HBV-coinfected pts excluded from trials (US §12.3); HBV reactivation reported when anti-hepatitis therapy withdrawn (US §5.2) → check HBV status before switching off TDF/TAF/3TC/FTC; UK 4.4: follow HIV/HBV guidelines<br>**PPI contraindicated** — 住院病人勿開PPI (e.g. stress-ulcer prophylaxis); if acid suppression needed use H2RA with timing (Juluca ≥4 h before / 12 h after)<br>Must be taken with a meal; do not crush (UK 4.2) — no label data for NPO/tube-fed patients<br>SCr ↑ ~0.1 mg/dL within 4 wk (tubular creatinine secretion inhibition), stable, not a true GFR change (US §6.1)<br>Warnings: severe skin/hypersensitivity reactions incl. DRESS → stop immediately; hepatotoxicity (incl. acute liver failure with DTG); depressive disorders/suicidal ideation (mainly with psychiatric history); IRIS; osteonecrosis (UK 4.4). Contains lactose (UK 4.4)<br>SWORD-1/2: switch to DTG+RPV non-inferior to continuing current ART (2 NRTIs + INSTI/NNRTI/PI) at wk 48 (Llibre 2018, PMID 29310899); durable suppression to wk 148 (van Wyk 2020, PMID 32675772); 12 confirmed virologic failures to wk 148: RPV resistance in 6, DTG in 2 (US §12.4)

**Why:** The column is empty. These are the practical points for an HIV specialist drug: switch-only use, HBV gap, PPI contraindication in inpatients, food requirement, creatinine artefact and the main warnings. There is no boxed warning. Both PMIDs were checked with NCBI esummary.

**Sources:** US FDA label §1, §5.1–5.4, §6.1, §12.3, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.2, 4.4 — https://www.medicines.org.uk/emc/product/9246/smpc; Llibre JM et al. Lancet 2018 (SWORD-1/2), PMID 29310899 — https://pubmed.ncbi.nlm.nih.gov/29310899/; van Wyk J et al. JAIDS 2020 (148-wk), PMID 32675772 — https://pubmed.ncbi.nlm.nih.gov/32675772/

### A14 · Page body

## Dolutegravir/Rilpivirine (Juluca)<br>本院品項: JUL01 Juluca 50/25 mg FC tab (滋若愷膜衣錠) <span color="blue">`PO`</span><br>---<br>### Category<br>Antiretroviral, **INSTI (dolutegravir) + NNRTI (rilpivirine)**, 2-drug single-tablet complete regimen (switch only)<br>---<br>### Mechanism<br>- Dolutegravir: binds HIV integrase active site → blocks strand transfer of viral DNA integration<br>- Rilpivirine: diarylpyrimidine NNRTI → non-competitive inhibition of HIV-1 RT; no effect on human DNA polymerase α/β/γ (US §12.4)<br>---<br>### Indications<br>**FDA / 仿單 / UK SmPC**<br>- Complete regimen to **replace current ART** in adults with HIV-1 who are virologically suppressed (RNA \<50 copies/mL) on stable ART ≥6 months, with no history of treatment failure and no known resistance to either component (UK: no known/suspected resistance to any NNRTI or INSTI)<br>**Not indicated**<br>- ART-naive or viraemic patients; HBV treatment (no anti-HBV activity)<br>---<br>### Coverage<br>- HIV-1 group M; RPV less active vs group O (US §12.4)<br>- SWORD to wk 148: 12 confirmed virologic failures; RPV resistance in 6, DTG in 2 (US §12.4)<br>---<br>### Adult Dose<br>- <span color="blue">`PO`</span> 1 tab (DTG 50 mg / RPV 25 mg) QD **with a meal**; protein drink alone → RPV exposure ↓50%<br>- With rifabutin: add RPV 25 mg QD with a meal for the rifabutin course (US §2.2, 仿單 §3.1)<br>- Missed dose: 仿單: take with a meal when remembered, never double. UK 4.2: take with a meal unless next dose due within 12 h; vomit within 4 h → repeat<br>- Swallow whole; do not chew/crush (UK 4.2)<br>---<br>### Renal Dose, HD, CRRT<br><table header-row="true"><br><tr><td>Renal function</td><td>Dose</td></tr><br><tr><td>CrCl ≥30</td><td>No adjustment (仿單 §6.7 = US §8.6)</td></tr><br><tr><td>CrCl \<30 / ESRD</td><td>No adjustment; increased monitoring for adverse effects (加強監測不良反應). UK: with strong CYP3A inhibitor only if benefit outweighs risk</td></tr><br><tr><td>HD</td><td>Labels: no dosing recommendation; ~99% protein bound → unlikely removed (US §10, UK 4.9); UK: no PK difference expected. HD PK study (Gupta 2025, PMID 39761595, n=4): AUC ratio HD:normal 1.1 (DTG) / 1.1 (RPV) → standard dose</td></tr><br><tr><td>CRRT</td><td>No label or published data</td></tr><br></table><br>- DTG AUC ↓40% in severe RI (n=8) (US §12.3)<br>- SCr ↑ ~0.1 mg/dL (tubular secretion inhibition) is not a true GFR change<br>---<br>### Hepatic Dose<br>- Child-Pugh A/B: no adjustment (UK: caution in B); Child-Pugh C: not studied (UK: not recommended)<br>- RPV exposure ↑47% (A) / ↑5% (B) (US §12.3)<br>---<br>### Pediatric Dose<br>- Not established (\<18 y) (US §8.4, 仿單 §6.4, UK 4.2)<br>---<br>### Side Effects<br>- Common (≥2%, SWORD): diarrhoea, headache, nausea (US §6.1)<br>- Lab (wk 48, similar to comparator arm): ALT ↑, lipase ↑, hyperglycaemia, CK ↑<br>- Serious: severe skin/hypersensitivity incl. DRESS (§5.1); hepatotoxicity incl. acute liver failure (§5.2); depressive disorders/suicidal ideation (§5.3); IRIS<br>- Postmarketing: weight ↑, arthralgia/myalgia, sideroblastic anaemia, nephrotic syndrome (US §6.2)<br>- QTc prolongation only at supratherapeutic RPV doses (75–300 mg) (§5.4)<br>---<br>### Monitor<br>- HIV-1 RNA (confirm suppression before switch; then per guideline)<br>- HBV status before switching off TDF/TAF/3TC/FTC<br>- LFT (esp. HBV/HCV co-infection)<br>- Baseline SCr (expected small rise), renal function if on metformin<br>- Mood/depressive symptoms<br>- Weight, lipids, glucose (UK 4.4)<br>---<br>### Drug Interactions<br><table header-row="true"><br><tr><td>Interacting agent</td><td>Effect</td><td>Management</td></tr><br><tr><td>**PPIs (all)**</td><td>↓RPV (gastric pH)</td><td>Contraindicated</td></tr><br><tr><td>**Rifampin, rifapentine; carbamazepine, oxcarbazepine, phenobarbital, phenytoin; dexamethasone (more than single dose); St John's wort**</td><td>↓RPV (± ↓DTG)</td><td>Contraindicated</td></tr><br><tr><td>**Dofetilide**</td><td>↑dofetilide</td><td>Contraindicated (US/TW)</td></tr><br><tr><td>**Fampridine (dalfampridine)**</td><td>↑level → seizures</td><td>UK: contraindicated; US: weigh benefit vs risk</td></tr><br><tr><td>**Rifabutin**</td><td>↓RPV</td><td>Add RPV 25 mg QD with meal</td></tr><br><tr><td>**Antacids, sucralfate, cation-containing products**</td><td>↓DTG / ↓RPV</td><td>Juluca 4 h before or 6 h after</td></tr><br><tr><td>**Oral Ca/Fe, multivitamins**</td><td>↓DTG</td><td>Together with a meal, or Juluca 4 h before / 6 h after</td></tr><br><tr><td>**H2RAs**</td><td>↓RPV</td><td>Juluca ≥4 h before or 12 h after</td></tr><br><tr><td>**Metformin**</td><td>↑metformin (AUC ↑79%)</td><td>Consider dose adjustment; monitor renal function</td></tr><br><tr><td>**Clarithromycin, erythromycin**</td><td>↑RPV</td><td>Prefer azithromycin</td></tr><br><tr><td>**Methadone**</td><td>↓methadone</td><td>Monitor; adjust maintenance dose if needed</td></tr><br><tr><td>**Drugs with known TdP risk**</td><td>Additive QTc</td><td>Consider alternatives</td></tr><br></table><br>- Other ARVs: not recommended (complete regimen). Full check: Liverpool HIV interaction checker (hiv-druginteractions.org)<br>---<br>### Notes<br>- No boxed warning<br>- No anti-HBV activity; HBV reactivation reported when anti-hepatitis therapy withdrawn (US §5.2)<br>- PPI contraindicated — avoid PPI stress-ulcer prophylaxis in inpatients<br>- Osteonecrosis (UK 4.4); contains lactose (UK 4.4)<br>- SWORD-1/2: switch non-inferior to continuing current ART at wk 48 (PMID 29310899); durable to wk 148 (PMID 32675772)<br>---<br>### Pregnancy<br>- US/仿單: insufficient combination data; component APR data show no ↑ birth defects; Tsepamo/Eswatini NTD prevalence with DTG not different from non-DTG ART<br>- RPV exposure ↓30–40% in pregnancy<br>- UK SmPC: **use in pregnancy not recommended**<br>- FDA letter category retired<br>---<br>### Breastfeeding<br>- LactMed DTG: low milk levels; recommended first-line; LactMed RPV: low levels, alternate may be preferred for newborn/preterm<br>- Sustained undetectable VL and mother chooses to breastfeed → support; VL not suppressed → donor milk/formula<br>- 仿單 §6.2: 應囑咐母親在接受JULUCA治療期間不要餵哺母乳; UK 4.6: advise not to breast-feed<br>---<br>### References<br>- US FDA label: JULUCA, DailyMed setid 806653d1-bf35-4924-b999-ad5d21821cc1 (v16, Jul 31 2026) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1<br>- UK SmPC: Juluca 50 mg/25 mg (rev 03/10/2025) — https://www.medicines.org.uk/emc/product/9246/smpc<br>- 仿單: 滋若愷膜衣錠 衛部藥輸字第027514號 (uploaded 2025-05-12) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F<br>- LactMed: Dolutegravir NBK500631 (rev 2026-07-15) — https://www.ncbi.nlm.nih.gov/books/NBK500631/ ; Rilpivirine NBK501818 (rev 2025-12-15) — https://www.ncbi.nlm.nih.gov/books/NBK501818/<br>- Llibre JM et al. Lancet 2018 (SWORD-1/2), PMID 29310899 — https://pubmed.ncbi.nlm.nih.gov/29310899/<br>- van Wyk J et al. JAIDS 2020 (SWORD 148 wk), PMID 32675772 — https://pubmed.ncbi.nlm.nih.gov/32675772/<br>- Gupta SK et al. AIDS 2025 (DTG+RPV PK in hemodialysis), PMID 39761595 — https://pubmed.ncbi.nlm.nih.gov/39761595/

**Why:** The page body is blank. The proposed body follows the house structure of established entries such as Rapiacta (Peramivir): Category → Mechanism → Indications → Coverage → Doses → Side Effects → Monitor → Interactions → Notes → Pregnancy → Breastfeeding → References. Every item is tied to the labels, LactMed or verified PMIDs. No storage information is included.

**Sources:** US FDA label (all sections cited) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC — https://www.medicines.org.uk/emc/product/9246/smpc; Taiwan 仿單 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; LactMed NBK500631 / NBK501818 — https://www.ncbi.nlm.nih.gov/books/NBK500631/ , https://www.ncbi.nlm.nih.gov/books/NBK501818/

### B1 · Adult dose

<span color="blue">`PO`</span> Juluca (dolutegravir 50 mg / rilpivirine 25 mg) **1 tab QD with a meal** (每日一次隨餐服用一錠). Do not take fasting or with only a protein drink: rilpivirine exposure is ~50% lower with a protein drink alone (US 12.3). Swallow whole; do not chew or crush (UK SmPC 4.2)<br>• **Switch only**: replaces the whole current ARV regimen in adults who are virologically suppressed (HIV-1 RNA <50 copies/mL) on a stable regimen for ≥6 mo, with no history of treatment failure and no known resistance to DTG or RPV (TW/US). UK: no known or suspected resistance to **any** NNRTI or INSTI<br>• **With rifabutin**: add **rilpivirine 25 mg tab QD with a meal** for as long as rifabutin is given (TW 3.1 / US 2.2)<br>• Complete regimen: do not add other ARVs (US 7.1)<br>• Missed dose: UK: take with a meal ASAP unless the next dose is due within 12 h. TW: take with a meal when remembered; never double. Vomiting within 4 h → take another tablet with a meal (UK 4.2)

**Why:** The column is empty. All three labels require the dose to be taken with a meal. The rifabutin add-on dose is a label dosing instruction (US 2.2, TW 3.1). On food: the US 12.3 AUC ratios are DTG 1.87 and RPV 1.57 (moderate-fat meal), and a protein drink alone gives 50% lower RPV exposure.

**Sources:** TW insert 3.1 用法用量 (每日一次隨餐服用一錠; rifabutin 額外加 rilpivirine 25 mg) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; US label 1, 2.1, 2.2, 7.1, 12.3 Table 5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.1, 4.2 (missed dose 12 h, vomiting 4 h, swallow whole) https://www.medicines.org.uk/emc/product/9246/smpc

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> TW insert 6.7 (本院品項) = US 8.6:<br>CrCl ≥30: no adjustment<br>CrCl <30 or ESRD: no dose change given; **increased monitoring for adverse effects** (建議加強監測不良反應). DTG AUC ↓40%, Cmax ↓23%, C24 ↓43% in CrCl <30 (n=8) (US 12.3 / TW 11)<br>UK SmPC 4.2: mild–moderate: no adjustment. Severe/ESRD: combine with a **strong CYP3A inhibitor** only if benefit > risk<br>HD/PD: not studied in the labels. Both drugs are highly (≥99%) protein bound, so they are unlikely to be removed by HD/PD (US 10, UK 5.2). UK: no PK differences expected. HD PK study (Gupta 2025, PMID 39761595; 4 HD vs 4 matched controls, HIV-negative volunteers): steady-state AUC ratio HD:normal 1.1 (DTG) and 1.1 (RPV); Cmin above protein-binding-adjusted IC90 → standard dose<br>CRRT: no data (inference only: highly protein bound, so the standard dose is expected)<br>Note: SCr rises by ~0.1 mg/dL within 4 wk (OCT2/MATE1 inhibition of tubular creatinine secretion), not a true GFR fall (US 6.1)

**Why:** Ground rules: prefer the stocked product's label (TW), which matches US 8.6, and give the UK value alongside. The UK SmPC adds the strong-CYP3A-inhibitor caveat. Labels are silent on HD dosing, and the PMID-verified HD PK study supports the standard dose. No CRRT data exist, so I marked that line as an inference from protein binding.

**Sources:** TW insert 6.7 腎功能不全 and 11 藥動 (DTG AUC ↓40%) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; US label 8.6, 10 Overdosage, 12.3 Renal Impairment, 6.1 Changes in Serum Creatinine https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.2 Renal impairment, 5.2 https://www.medicines.org.uk/emc/product/9246/smpc; Gupta SK et al. AIDS 2025;39:356-361 PMID 39761595 (verified by esummary) https://pubmed.ncbi.nlm.nih.gov/39761595/

### B3 · Hepatic dose

Child-Pugh A/B: no adjustment (TW/US/UK). UK: use with caution in moderate impairment (unbound DTG ↑1.5–2×)<br>Child-Pugh C: not studied (TW/US). UK SmPC: **not recommended** (肝功能不全C級不建議)<br>HBV/HCV co-infection or high baseline transaminases → higher risk of hepatotoxicity; monitor LFT

**Why:** The column is empty. TW/US 8.7 and UK 4.2/5.2 cover this. The UK SmPC is stricter for Child-Pugh C.

**Sources:** TW insert 6.6 肝功能不全 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; US label 8.7, 5.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.2 Hepatic impairment, 4.4 HBV/HCV, 5.2 https://www.medicines.org.uk/emc/product/9246/smpc

### B4 · Pediatric dose

Not established (<18 y): safety and efficacy have not been established; no dosing recommendation (TW 6.4 / US 8.4 / UK 4.2). 兒童安全性與療效尚未確立

**Why:** The column is empty, and all three labels say it is not established.

**Sources:** US label 8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.2 Paediatric population https://www.medicines.org.uk/emc/product/9246/smpc; TW insert 6.4 小兒 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F

### B5 · Indications

HIV

**Why:** The only approved indication (US/UK/TW) is HIV-1 maintenance switch therapy. 'HIV' is an existing option. Do not tag HIV PrEP.

**Sources:** US label 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/9246/smpc

### B6 · Coverage

HIV

**Why:** Active against HIV-1. Note that rilpivirine has only limited in vitro HIV-2 activity (IC50 2,510–10,830 nM), so the label indication is HIV-1 only; say this in Notes. Juluca has no anti-HBV activity, so do not tag HBV.

**Sources:** UK SmPC 5.1 Antiviral activity in cell culture https://www.medicines.org.uk/emc/product/9246/smpc; US label 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1

### B7 · Side Effects

GI, CNS, LFT↑, hypersensitivity, DRESS, weight gain, IRIS, myopathy, QTc prolong

**Why:** These are all existing options. GI: diarrhoea 2%, nausea (US 6.1). CNS: headache 2%, depression/suicidal ideation, insomnia, dizziness (US 5.3/6.1, SmPC 4.8). LFT↑/hepatotoxicity, including acute liver failure with DTG (US 5.2). Hypersensitivity and DRESS (US 5.1, 6.2). Weight increased (US 6.2, SmPC 4.4/4.8). IRIS (US 6.1, SmPC 4.4). Myopathy: myositis and CPK elevations (US 6.1 Table 3; SmPC common CPK↑). QTc prolong applies only at supratherapeutic RPV doses (75/300 mg) or with TdP-risk co-drugs (US 5.4, SmPC 4.4); give that context in Notes. I deliberately left out 'bone loss': BMD rose after switching from TDF (US 6.1).

**Sources:** US label 5.1–5.4, 6.1, 6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.4, 4.8 Table 2 https://www.medicines.org.uk/emc/product/9246/smpc

### B8 · Monitor

viral load, HBV serology, LFT, lipids, glucose, CNS, renal

**Why:** These are all existing options. Viral load: the indication depends on sustained suppression <50 copies/mL, and RPV/DTG resistance emerged in SWORD failures (US 1, 12.4). HBV serology: Juluca has no HBV activity, and HBV reactivation has occurred when anti-hepatitis therapy was withdrawn (US 5.2); the UK has no data in HBV co-infection (SmPC 4.4). LFT: hepatotoxicity monitoring is recommended (US 5.2, SmPC 4.4). Lipids and glucose: SmPC 4.4 says to monitor per HIV guidelines. CNS: depressive disorders (US 5.3). Renal: expected SCr rise at baseline, and renal function must be monitored with metformin (SmPC 4.4).

**Sources:** US label 1, 5.2, 5.3, 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.4 (weight and metabolic parameters, HBV/HCV, metformin) https://www.medicines.org.uk/emc/product/9246/smpc

### B9 · Mechanism

2-drug STR. **Dolutegravir** (INSTI) binds the integrase active site and blocks the strand-transfer step of viral DNA integration. **Rilpivirine** (diarylpyrimidine NNRTI) is a non-competitive inhibitor of HIV-1 RT and does not inhibit human DNA polymerases α/β/γ<br>PK: DTG t½ ~14 h, UGT1A1 > CYP3A, substrate of P-gp/BCRP, inhibits OCT2/MATE1. RPV t½ ~45 h, CYP3A, needs gastric acid for absorption. Both >99% protein bound. Food ↑ AUC (DTG ×1.87; RPV ×1.57–1.72)<br>Resistance: baseline RPV RAMs that reduce activity: K101E/P, E138A/G/K/R/Q, V179L, Y181C/I/V, Y188L, H221Y, F227C, M230I/L. SWORD-1/2 through wk 148: 12 confirmed virologic failures; 6 with RPV resistance, 2 with DTG resistance substitutions

**Why:** The column is empty. Mechanism is from US 12.4 / UK 5.1. PK is from UK 5.2 and US 12.3 Table 5. The RAM list and SWORD failure data are from US 12.4 (the TW insert lists the same RAMs).

**Sources:** US label 12.3, 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 5.1, 5.2 https://www.medicines.org.uk/emc/product/9246/smpc; TW insert 10 藥理特性 (RAMs) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F

### B10 · Drug Interactions

⛔ **Contraindicated** (TW/US): dofetilide (↑dofetilide); carbamazepine, oxcarbazepine, phenobarbital, phenytoin; rifampin, rifapentine; systemic dexamethasone (more than a single dose); St John's wort; **all PPIs** (omeprazole, esomeprazole, lansoprazole, pantoprazole, rabeprazole: ↑gastric pH → ↓RPV). UK also contraindicates **fampridine/dalfampridine** (US: weigh seizure risk)<br>• **H2RA**: give Juluca ≥4 h before or ≥12 h after the H2RA<br>• **Antacids (Al/Mg/Ca)**: give Juluca 4 h before or 6 h after<br>• **Polyvalent cations** (Mg/Al laxatives, sucralfate, buffered drugs): give Juluca 4 h before or 6 h after<br>• **Oral Ca/Fe supplements, multivitamins**: take together with Juluca and a meal, or give Juluca 4 h before or 6 h after<br>• **Rifabutin**: ↓RPV → add RPV 25 mg QD with a meal<br>• **Metformin**: AUC ↑79% (OCT2/MATE1) → consider metformin dose adjustment when starting or stopping Juluca; monitor renal function (UK 4.4)<br>• **Clarithromycin/erythromycin**: ↑RPV → prefer azithromycin<br>• **Methadone**: no dose change at start; monitor, maintenance dose may need adjusting<br>• **TdP-risk drugs**: consider alternatives (RPV QTc ↑ at supratherapeutic doses)<br>• Strong CYP3A/UGT1A1 inducers ↓ exposure; CYP3A inhibitors ↑RPV<br>• Do not combine with other ARVs (complete regimen)<br>For anything else, check the Liverpool HIV interaction checker: https://www.hiv-druginteractions.org/checker

**Why:** The column is empty. Interactions matter a great deal for this drug. PPI co-prescription is common in inpatients, and multi-day dexamethasone is a practical trap. The separation times come from US 7.4 Table 4, which is consistent with UK 4.4/4.5 and TW 7.4 (I checked that the two phrasings are equivalent). The UK adds fampridine to the contraindications and does not list dofetilide.

**Sources:** US label 4 Table 1, 5.4, 7.1–7.4 Table 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.3, 4.4, 4.5 Table 1 (metformin AUC ↑79%) https://www.medicines.org.uk/emc/product/9246/smpc; TW insert 4 禁忌 表1, 7.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; Liverpool HIV Drug Interactions checker https://www.hiv-druginteractions.org/checker

### B11 · Pregnancy

FDA letter categories retired. TW/US 8.1: there are insufficient data on Juluca itself. Dolutegravir at conception: neural-tube-defect prevalence 0.11% vs 0.11% on non-DTG regimens (Botswana, >9,460 DTG exposures) and 0.08% vs 0.08% in HIV-negative women (Eswatini), so no increased NTD risk. APR: no increase in birth defects with DTG or RPV. RPV exposure is 30–40% lower in pregnancy<br>UK SmPC 4.2/4.4/4.6: **use in pregnancy not recommended** (懷孕不建議使用). DTG and RPV exposures are lower, low RPV exposure is linked to virological failure, and the 2-drug combination has not been studied in pregnancy<br>If pregnancy is planned or occurs → review the regimen with an HIV specialist. Register with the APR (1-800-258-4263)

**Why:** The column is empty. The labels are authoritative; the UK SmPC is the most explicit. The hospital page cites DHHS perinatal guidance (change the regimen or add an agent). I could not verify that because clinicalinfo.hiv.gov is blocked by the proxy (403), so I did not copy it. It is consistent with the UK 'not recommended'.

**Sources:** US label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.2, 4.4, 4.6 https://www.medicines.org.uk/emc/product/9246/smpc; TW insert 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F

### B12 · Breastfeeding

TW insert 6.2 (本院品項): **應囑咐母親在接受JULUCA治療期間不要餵哺母乳** (risks: HIV transmission, viral resistance, infant ADRs). UK SmPC 4.6: women with HIV should not breast-feed. US 8.2 (2026): lists the same risks without a prohibition<br>DTG is in human milk (milk:plasma ~0.033); RPV is in rat milk<br>LactMed: **DTG**: low milk levels, detected in infant plasma (slower neonatal elimination), recommended as a first-line ARV during breastfeeding. **RPV**: low milk and infant-serum levels; an alternative may be preferred, especially for newborns or preterm infants. Both chapters: if the mother has a sustained undetectable viral load and chooses to breastfeed, support her. If viral load is not suppressed, use banked donor milk or formula

**Why:** The column is empty. The source brief did not mention that the TW insert, which is the stocked product's label, still tells mothers not to breastfeed. The US label no longer says that, and LactMed supports breastfeeding with sustained suppression. Show both positions.

**Sources:** TW insert 6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F; UK SmPC 4.6 Breast-feeding https://www.medicines.org.uk/emc/product/9246/smpc; US label 8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; LactMed Dolutegravir NBK500631 (rev 2026-07-15) https://www.ncbi.nlm.nih.gov/books/NBK500631/; LactMed Rilpivirine NBK501818 (rev 2025-12-15) https://www.ncbi.nlm.nih.gov/books/NBK501818/

### B13 · Notes

本院品項: JUL01 Juluca 50/25 mg FC tab (滋若愷膜衣錠)<br>🦠 HIV-1 only; RPV has limited HIV-2 activity (UK 5.1). **Switch therapy only** for suppressed adults (not for treatment-naïve patients or after virologic failure)<br>No boxed warning<br>⚠️ **HBV**: Juluca has no anti-HBV activity. Check HBsAg before switching off a TDF/TAF/3TC/FTC regimen: HBV reactivation has occurred when anti-hepatitis therapy was withdrawn (US 5.2), and there are no data in HBV co-infection (UK 4.4)<br>• Warnings: severe skin/hypersensitivity reactions including DRESS (stop immediately); hepatotoxicity (higher risk with HBV/HCV); depression/suicidality (mostly with a psychiatric history); IRIS; osteonecrosis (UK 4.4)<br>• **PPIs contraindicated; multi-day dexamethasone contraindicated** (common inpatient pitfalls)<br>• QTc: RPV 75/300 mg prolongs QTc, 25 mg does not. Avoid TdP-risk co-drugs where possible (US 5.4)<br>• Must be taken with a meal; a protein drink is not a meal<br>• SCr ↑ ~0.1 mg/dL is expected (tubular secretion), not true nephrotoxicity<br>• Contains lactose (UK)<br>• Efficacy: SWORD-1/2 (Llibre 2018, PMID 29310899): non-inferior to continuing 3-drug ART at wk 48<br>• TDM: no label recommendation

**Why:** Notes are empty. The ground rules require boxed warnings (none here; verified US label) and key specialist-drug cautions. The HBV point comes from US 5.2 and UK 4.4. I verified the SWORD PMID with esummary.

**Sources:** US label 1, 5.1–5.4, 6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC 4.4, 5.1 https://www.medicines.org.uk/emc/product/9246/smpc; Llibre JM et al. Lancet 2018 PMID 29310899 (verified) https://pubmed.ncbi.nlm.nih.gov/29310899/; Hospital P4 (used only to identify the product/stock status) https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=JUL01

### B14 · Page body

Add a structured body in the same format as the reviewed entries (e.g. Valcyte): H1 'Dolutegravir/Rilpivirine (Juluca)' + one-line summary with the 本院品項 line and the <span color="blue">`PO`</span> tag; sections: Mechanism of action \| Spectrum (HIV-1) \| Indications (switch criteria; US/TW vs UK resistance wording) \| Dosing (adult with meal, rifabutin add-on, missed dose; pediatric not established; renal table TW/US + UK + HD study + CRRT note; hepatic) \| Administration \| Adverse effects & monitoring (no boxed warning; HBV check) \| Drug interactions table (contraindicated, separation times, rifabutin, metformin, macrolides, methadone, TdP, Liverpool link) \| Pregnancy & lactation \| Clinical pearls \| References (TW insert 衛部藥輸字第027514號 TFDA link; DailyMed setid 806653d1… v16 Jul 2026; eMC 9246 rev 03/10/2025; LactMed NBK500631 and NBK501818; PMID 39761595; PMID 29310899)

**Why:** Other reviewed entries carry a structured body with a reference list. This new page is blank. The body should repeat B1–B13 with no storage details.

**Sources:** US label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=806653d1-bf35-4924-b999-ad5d21821cc1; UK SmPC https://www.medicines.org.uk/emc/product/9246/smpc; TW insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027514%E8%99%9F

### B15 · Renewed date

2026-10-06 (set when the entry is filled)

**Why:** Reviewed entries carry a Renewed date; this one has none.

**Sources:** Existing reviewed entry pattern (Valcyte page, Renewed date 2026-10-05) https://app.notion.com/3f0c496dfff1811698b1cdd46aa0c31c

## Apply log

- Adult dose: merged both proposals (PO tag, 1 tab QD with a meal, food effect, switch criteria TW/US vs UK, rifabutin add-on RPV 25 mg, complete regimen, missed dose TW+UK, vomiting 4 h, swallow whole)
- Renal dose, HD, CRRT: TW 6.7 = US 8.6 bands, DTG AUC/Cmax/C24 in CrCl<30, UK strong CYP3A inhibitor caveat, HD/PD protein binding + Gupta 2025 PMID 39761595, CRRT no data, SCr rise note
- Hepatic dose: Child-Pugh A/B no adjustment (UK caution B), C not studied/UK not recommended, RPV exposure changes, HBV/HCV LFT monitoring
- Pediatric dose: not established <18 y (TW/US/UK) with Chinese note
- Indications: [HIV]
- Coverage: [HIV]
- Side Effects: [GI, CNS, LFT↑, hypersensitivity, DRESS, QTc prolong, weight gain, IRIS, myopathy]
- Monitor: [viral load, HBV serology, LFT, renal, CNS, lipids, glucose]
- Mechanism: INSTI + NNRTI MoA, PK, RPV RAMs, SWORD wk148 resistance
- Drug Interactions: contraindicated list (incl. all PPIs, UK fampridine), rifabutin, cations/antacids/supplements timing, H2RA, metformin, macrolides, methadone, TdP, CYP/UGT, other ARVs, Liverpool checker link
- Pregnancy: letter category retired, combination data, NTD data, RPV exposure in pregnancy, UK not recommended, specialist review, APR
- Breastfeeding: TW 6.2 prohibition, UK 4.6, US 8.2, LactMed DTG/RPV summaries and VL-based guidance
- Notes: product line JUL01, HIV-1 only/switch-only, no boxed warning, HBV warning, PPI/dexamethasone pitfalls, meal requirement, SCr rise, label warnings, QTc, SWORD efficacy (PMIDs 29310899, 32675772), TDM
- Page body: structured body (Valcyte format) with Mechanism, Spectrum, Indications, Dosing (adult/pediatric/renal table/hepatic), Administration, AEs & monitoring, DI table, Pregnancy & lactation, Clinical pearls
- References section appended (DailyMed v16 Jul 2026, eMC 9246 rev 03/10/2025, TFDA 衛部藥輸字第027514號, LactMed NBK500631/NBK501818, PMIDs 29310899, 32675772, 39761595, Liverpool checker)
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
