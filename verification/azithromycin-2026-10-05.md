# New entry: Zirocin (Azithromycin)

- **Notion entry:** [Zirocin (Azithromycin)](https://app.notion.com/3f0c496dfff1817b9967d00cbed36933). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** ZIR01 (Zirocin tab 250 mg), AZI01 (Azithrom susp 600 mg/15 mL)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/azithromycin.json` (plus any Taiwan insert text files)

## Product and sources

The hospital stocks two oral azithromycin products and no IV form. (1) ZIR01: Zirocin F.C. Tablets 250 mg (美妥欣膜衣錠250毫克), made by 南光化學製藥. Licence 衛署藥製字第057842號, NHI AC57842100, ATC J01FA10, PO. (2) AZI01: Azithrom Powder for Oral Suspension (菌巴達懸液用粉), made by 健喬信元. Licence 衛署藥製字第055554號, NHI AC55554180. One bottle gives 600 mg in 15 mL (40 mg/mL after mixing), PO. CORRECTION TO THE SOURCE BRIEF: a Taiwan insert for the Zirocin tablet does exist. I derived the licence number from the NHI code, the same way AC55554180 maps to 055554. https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F returns the full insert (latest update 113/02/26, version 2; imprint NK/547 matches the hospital photo). The text is saved only in the scratchpad: /tmp/claude-0/-home-user-antibiotics-guide/4c50b851-ebcc-5771-83a6-3305d6a7ca62/scratchpad/zir_tw2.txt. No repository file was written. Other sources: US FDA ZITHROMAX tablets plus oral suspension, Pfizer (DailyMed setid db52b91e-79f7-4cc1-9564-f2eee8e31c45, v49, Jul 29 2026); UK SmPC Azithromycin 200 mg/5 ml powder for oral suspension, Sandoz (eMC 441, revised 27/02/2026); LactMed NBK501200 (revised 2025-12-15); Azithrom TW insert (latest update 113/06/12). The Notion page (created 2026-10-05) has only its title and Category = "Macrolide". Every other column is empty and the body is blank.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> once daily, with or without food (Zirocin 250 mg tab; Azithrom susp 40 mg/mL after reconstitution)<br>Resp. tract / SSTI (TW 仿單): Zirocin 500 mg qd × 3 d or 500 mg D1 → 250 mg D2–5 (total 1.5 g); Azithrom 500 mg qd × 3 d<br>CAP (mild, oral-appropriate) / uSSSI / pharyngitis (2nd-line): 500 mg D1 → 250 mg D2–5 (US FDA)<br>AECOPD: 500 mg qd × 3 d or 500 mg D1 → 250 mg D2–5; acute bacterial sinusitis: 500 mg qd × 3 d (US FDA)<br>CAP after initial IV therapy: 500 mg qd to complete 7–10 d (Zirocin 仿單)<br>Chlamydia urethritis/cervicitis, chancroid: 1 g single dose<br>Gonococcal urethritis/cervicitis: US label 2 g single dose; UK tablet SmPC 1–2 g single dose only with another agent (e.g. ceftriaxone), not recommended unless susceptibility confirmed (4.4); Zirocin 仿單: 不能賴以治療淋病. CDC 2020: ceftriaxone 500 mg IM preferred<br>PID (UK tablet SmPC): oral switch after IV only, 250 mg qd to complete 7 d, always with another agent (e.g. metronidazole)<br>MAC prophylaxis (HIV, CD4 ≤75): 1200 mg once weekly ± rifabutin (Zirocin 仿單)<br>Trachoma / chlamydial conjunctivitis: 1 g once weekly, up to 3 wk (Zirocin 仿單)

**Why:** The column is empty. Doses come from the stocked-product Taiwan inserts first, with US/UK values beside them. Zirocin 仿單 §3.1: "砂眼披衣菌造成的性傳染無併發症型尿道炎與子宮頸炎：1 g 單一劑量口服… 治療社區感染性肺炎(CAP)時，在靜脈注射療法之後：每天一劑500 mg，完成整個療程需7至10天… MAC疾病之預防：可單獨每週服用一劑1200 mg… 所有其他適應症：將1.5 g的總劑量分成在第1天服用500 mg，然後於第2至第5天每天服用250 mg，亦可連續3天每天服用500 mg". Azithrom 仿單 §3.1: "成人…500 mg，連續服用3天… Chlamydia trachomatis…單一口服1 g一次". US FDA §2.1 Table 1 gives CAP/pharyngitis/uSSSI 500 mg D1 then 250 mg D2–5, AECOPD 3- or 5-day, sinusitis 500 mg × 3 d, chancroid/NGU 1 g, and "Gonococcal urethritis and cervicitis One single 2 gram dose". UK SmPC 4.4: "Neisseria gonorrhoeae is very likely to be resistant to macrolides… not recommended for the treatment of uncomplicated gonorrhoea… unless laboratory results have confirmed susceptibility". The CDC 2020 update (PMID 33332296, verified with esummary) recommends "a single 500 mg IM dose of ceftriaxone".

**Sources:** Zirocin TW 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom TW 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; US FDA ZITHROMAX §2.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.2/4.4: https://www.medicines.org.uk/emc/product/441/smpc; St Cyr S et al. MMWR 2020;69:1911-6, PMID 33332296: https://pubmed.ncbi.nlm.nih.gov/33332296/

### A2 · Renal dose, HD, CRRT

GFR 10–80: no adjustment (TW 仿單 Zirocin §6.7 / Azithrom §3.3; UK SmPC 4.2: GFR ≥10)<br>GFR <10: use with caution (需特別謹慎), no dose given. Zirocin 仿單: AUC ↑~30%, Cmax ↑~60%; Azithrom 仿單: exposure ↑33%; US FDA 12.3/UK SmPC 5.2: AUC ↑35%, Cmax ↑61% (US label gives PK data only)<br>HD/PD: no label data; dialysis unlikely to remove significant drug (UK SmPC 5.2/4.9) → no supplemental dose expected. CAPD: PD clearance negligible (Kent 2001, PMID 11587400)<br>CRRT: no label data<br>(Mainly biliary elimination; ~6% of dose unchanged in urine – US FDA 12.3)

**Why:** The column is empty. The ground rule puts the stocked product's Taiwan insert first. Zirocin 仿單 §6.7: "腎絲球濾過率GFR 10-80 mL/min病人無需調整用藥劑量…GFR＜10 mL/min病人…平均AUC0-120h與平均Cmax大約分別上升了30%及60%，所以…需特別謹慎小心". Azithrom 仿單 §3.3/§6.7: "GFR＜10 mL/min的病人則應謹慎用藥… 全身暴藥量會升高33%". US FDA 12.3: "mean Cmax and AUC0–120 increased 61% and 35%, respectively, in subjects with GFR <10 mL/min". The US label has no 8.6 renal section and gives no dose change. UK SmPC 4.2: "No dose adjustment is required in patients with GFR ≥10 ml/min. In patients with GFR <10 ml/min azithromycin should be administered with caution". UK SmPC 5.2: "No data are available for subjects undergoing dialysis, but… dialysis is unlikely to result in significant removal".

**Sources:** Zirocin TW 仿單 §6.7, §11: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom TW 仿單 §3.3, §6.7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; US FDA 12.3 (Specific Populations, Excretion): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.2, 4.9, 5.2: https://www.medicines.org.uk/emc/product/441/smpc

### A3 · Hepatic dose

Mild–moderate (Child-Pugh A/B): no adjustment (TW 仿單 Zirocin §6.6 / Azithrom §3.3; UK SmPC 4.2)<br>Severe (Child-Pugh C): no data → use with caution; liver is the main elimination route (UK SmPC 4.2/4.4; Zirocin 仿單: 嚴重肝病者應謹慎)<br>US FDA 12.3: PK in hepatic impairment not established<br>Contraindicated after cholestatic jaundice/hepatic dysfunction from prior azithromycin (US FDA 4.2)<br>Stop at once if hepatitis signs appear (fatal hepatic failure reported)

**Why:** The column is empty. Zirocin 仿單 §6.6: "對於輕微至中度肝功能不全病人並無調整劑量之建議，不過…對於患有嚴重肝病者投予azithromycin應謹慎為之…如果出現肝炎的徵兆與症狀，應立即停用". UK SmPC 4.2: "No dose adjustment is required in patients with mild (Child-Pugh Class A) or moderate hepatic impairment (Child-Pugh Class B)… No data are available in patients with severe hepatic impairment". US FDA 4.2 contraindicates use in "patients with a history of cholestatic jaundice/hepatic dysfunction associated with prior use of azithromycin". US FDA 5.2: "Discontinue azithromycin immediately if signs and symptoms of hepatitis occur". US FDA 12.3: "The pharmacokinetics of azithromycin in subjects with hepatic impairment has not been established".

**Sources:** Zirocin TW 仿單 §6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom TW 仿單 §3.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; US FDA 4.2, 5.2, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.2, 4.4: https://www.medicines.org.uk/emc/product/441/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> Azithrom susp 40 mg/mL (10 mg/kg = 0.25 mL/kg), once daily<br>Azithrom 仿單: 10 mg/kg qd × 3 d; ≥45 kg → adult dose (500 mg qd × 3 d)<br>US FDA (≥6 mo): AOM 30 mg/kg once, or 10 mg/kg qd × 3 d, or 10 mg/kg D1 → 5 mg/kg D2–5; sinusitis 10 mg/kg qd × 3 d; CAP 10 mg/kg D1 → 5 mg/kg D2–5; pharyngitis (≥2 y) 12 mg/kg qd × 5 d<br>UK SmPC: strep pharyngitis 20 mg/kg/d × 3 d or 12 mg/kg/d × 5 d; max 500 mg/day (AOM single dose: max 1500 mg total)<br><6 mo: not established; neonates (≤42 d): IHPS risk<br>Zirocin 250 mg tab 仿單: no weight-based paediatric dose

**Why:** The column is empty. Azithrom 仿單 §3.1: "孩童 每天10 mg/kg，連續服用3天。對於超過45公斤（含）以上的孩童，服用的劑量與成人相同". US FDA §2.2 Table 2 gives the AOM/sinusitis/CAP/pharyngitis regimens shown. US FDA 8.4: "under 6 months of age have not been established". UK SmPC 4.2 Table 1: "Acute streptococcal tonsillitis and pharyngitis 20 mg/kg/day for 3 days or 12 mg/kg/day for 5 days… daily dose should not exceed the adult daily dose of 500 mg, with exception of the 1-day… otitis media… 1500 mg". US FDA 5.3 reports IHPS after use in neonates up to 42 days old. Zirocin 仿單 §3.1 lists adult regimens only. Arithmetic check: 10 mg/kg ÷ 40 mg/mL = 0.25 mL/kg.

**Sources:** Azithrom TW 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; US FDA §2.2, 5.3, 8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.2: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### A5 · Indications

CAP, SSTI, Pelvic

**Why:** Only existing options are used. CAP: US FDA 1.1/1.2 ("Community-acquired pneumonia in adults and pediatric patients (6 months of age and older)", oral-appropriate only) and UK SmPC 4.1. SSTI: US FDA 1.1 ("Uncomplicated skin and skin structure infections") and UK SmPC 4.1 (ABSSSI). I left out "Pneumonia" (generic, implies HAP/hospitalised) because US FDA 1.3 says it is "not recommended in patients with pneumonia… requiring hospitalization… nosocomial infections… bacteremia". I left out "Pelvic": UK SmPC 4.4 says it is not recommended for PID unless susceptibility is confirmed. These approved indications have no option and go in Notes (A13): AECOPD, sinusitis, pharyngitis/tonsillitis, otitis media, urethritis/cervicitis (Chlamydia, N. gonorrhoeae), chancroid, MAC prophylaxis, trachoma.

**Sources:** US FDA §1.1–1.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.1, 4.4: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### A6 · Coverage

Streptococcus, MSSA, Haemophilus, Neisseria, Chlamydia, Mycoplasma, Legionella, Mycobacteria

**Why:** Only existing schema options are used. The US FDA 12.4 clinical-efficacy list covers "Staphylococcus aureus, Streptococcus agalactiae, Streptococcus pneumoniae, Streptococcus pyogenes… Haemophilus ducreyi, Haemophilus influenzae, Moraxella catarrhalis, Neisseria gonorrhoeae… Chlamydophila pneumoniae, Chlamydia trachomatis, Mycoplasma pneumoniae". It lists Legionella pneumophila as in vitro only. UK SmPC Table 8 lists Legionella as commonly susceptible. The Zirocin 仿單 §2 names Legionella among clinically proven CAP pathogens and gives MAC prophylaxis (Mycobacteria = MAC only). Caveats for Notes: S. aureus and S. pneumoniae are "species for which acquired resistance may be a problem" (UK SmPC Table 8; MRSA resistance >50% in at least one region), so I chose MSSA, not MRSA. UK SmPC 4.4 says N. gonorrhoeae is "very likely to be resistant". E. coli, Klebsiella and Pseudomonas are inherently resistant (UK SmPC Table 8) and are excluded, as are Enterococcus (cross-resistance, Zirocin 仿單 §10.2) and Anaerobes/Bacteroides (in vitro only). These organisms have no option and go in Notes: Moraxella, H. ducreyi, B. pertussis, Treponema, Ureaplasma, C. psittaci.

**Sources:** US FDA 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 5.1 Table 8, 4.4: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §2, §10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### A7 · Side Effects

GI, QTc prolong, LFT↑, SJS/TEN, DRESS, ototoxicity, AKI

**Why:** GI: US FDA 6 says "Most common adverse reactions are diarrhea (5 to 14%), nausea (3 to 18%), abdominal pain (3 to 7%), or vomiting (2 to 7%)". QTc prolong: US FDA 5.4/5.5 (torsades; about 2-fold short-term cardiovascular death in observational studies). LFT↑: US FDA 5.2 ("hepatitis, cholestatic jaundice, hepatic necrosis, and hepatic failure… death"). SJS/TEN and DRESS: US FDA 5.1 ("AGEP, Stevens-Johnson syndrome, and toxic epidermal necrolysis… DRESS"). Ototoxicity: US FDA 6.2 ("hearing loss, deafness and/or tinnitus"). AKI: US FDA 6.2 ("Interstitial nephritis and acute renal failure"). Items with no option go in Notes: C. difficile diarrhoea (5.6), myasthenia gravis exacerbation (5.7), IHPS in neonates (5.3), anaphylaxis/angioedema.

**Sources:** US FDA 5.1–5.7, 6.1, 6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.4, 4.8: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §5.1, §8.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### A8 · Monitor

ECG, electrolyte, LFT, PT/INR

**Why:** ECG and electrolyte: US FDA 5.4 lists at-risk groups including "known prolongation of the QT interval… uncorrected hypokalemia or hypomagnesemia… patients on drugs known to prolong the QT interval". UK SmPC 4.4 says the same. LFT: US FDA 5.2, and UK SmPC 4.4 says "liver function tests/investigations should be performed immediately" if signs of liver dysfunction appear. PT/INR: US FDA 7.2 says "Prothrombin times should be carefully monitored while patients are receiving azithromycin and oral anticoagulants". The pharmacist could add "renal" for GFR <10 (caution), but no label sets a monitoring frequency, so I left it out.

**Sources:** US FDA 5.2, 5.4, 7.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.4: https://www.medicines.org.uk/emc/product/441/smpc

### A9 · Mechanism

Binds 23S rRNA of the 50S ribosomal subunit → inhibits protein synthesis (peptide translocation) and 50S assembly; azalide (15-membered macrolide); efficacy driven mainly by AUC/MIC; long t½ (~68 h) with high tissue/intracellular concentrations

**Why:** US FDA 12.4: "acts by binding to the 23S rRNA of the 50S ribosomal subunit… inhibiting bacterial protein synthesis and impeding the assembly of the 50S ribosomal subunit". UK SmPC 5.1: "inhibiting translocation of the peptides… efficacy depends mainly on the ratio between AUC… and MIC". US FDA 12.3 gives a terminal elimination half-life of 68 hr. Zirocin 仿單 §1 calls azithromycin an azalide subclass of macrolides. I did not write "bacteriostatic" because none of the labels say it.

**Sources:** US FDA 12.3, 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 5.1, 5.2: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §1, §10.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### A10 · Drug Interactions

QT-prolonging drugs (class IA/III antiarrhythmics, pimozide, citalopram, fluoroquinolones, (hydroxy)chloroquine) → additive QT/torsades risk; warfarin/coumarins → ↑INR (post-marketing) – monitor PT/INR; P-gp substrates: digoxin (monitor level), colchicine (AUC ↑57%), dabigatran (bleeding); ciclosporin → monitor level/adjust; statins → rhabdomyolysis reports; nelfinavir → azithro AUC ~2× (monitor LFT, hearing); ergot derivatives → 不可併用 (TW 仿單/UK SmPC); Al/Mg antacids → Cmax ↓25–30%, do not take at the same time (TW 仿單); weak CYP3A4 inhibitor – caution with narrow-TI CYP3A4 substrates

**Why:** US FDA 7.1 (nelfinavir) and 7.2 (warfarin). US FDA 7.3 advises careful monitoring with digoxin, colchicine and phenytoin. UK SmPC 4.5 says it is "an inhibitor of the transporter P-glycoprotein". UK SmPC Table 6 covers colchicine (↑57% AUC), dabigatran, digoxin, ciclosporin and atorvastatin (rhabdomyolysis), and lists QT drugs "quinidine… procainamide… dofetilide, amiodarone… sotalol… pimozide… citalopram… moxifloxacin and levofloxacin… chloroquine and hydroxychloroquine". UK SmPC 4.4 says "azithromycin and ergot derivatives may not be co-administered". Zirocin 仿單 §7: "制酸劑…最高血清濃度降低達30%…這兩種藥物不應同時服用；麥角…不應併用". Azithrom 仿單 §7 gives about 25%. US FDA 12.3 Table 14: nelfinavir raised azithromycin AUC 2.12-fold.

**Sources:** US FDA 7.1–7.3, 12.3 Table 14: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.4, 4.5: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom TW 仿單 §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F

### A11 · Pregnancy

Letter categories retired (do not use "B"). US FDA 8.1 (PLLR): decades of published/post-marketing data have not identified a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; no malformations in rats/mice/rabbits. UK SmPC 4.6: >7000 exposed pregnancies, most studies show no ↑ malformations; miscarriage data inconclusive → use only if clinically needed. TW 仿單 6.1: 大多數研究未顯示畸形風險，但有限之流行病學證據顯示懷孕早期暴露後流產風險增加 → 僅在臨床需要且效益大於可能風險時使用

**Why:** US FDA 8.1 Risk Summary: "Available data from published literature and postmarketing experience over several decades with azithromycin use in pregnant women have not identified any drug-associated risks for major birth defects, miscarriage, or adverse maternal or fetal outcomes". UK SmPC 4.6: "more than 7000 azithromycin exposed pregnancies… Epidemiological evidence related to the risk of miscarriage… is inconclusive… should only be used during pregnancy if clinically needed". Zirocin 仿單 §6.1 and Azithrom 仿單 §6.1: "只有在臨床需要時並且預期治療的效益將超過其任何可能存在的微幅之風險，才能在懷孕期間使用". The ground rules forbid letter categories.

**Sources:** US FDA 8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單 §6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### A12 · Breastfeeding

Compatible (LactMed): low milk levels and higher doses used directly in infants → adverse effects not expected; monitor infant for vomiting, diarrhea, candidiasis (thrush, diaper rash). Persists in milk up to 4 wk after a 2 g dose (US FDA 8.2). Macrolide–IHPS link mainly with exposure in first 13 days postpartum; 2 meta-analyses found no association (LactMed). UK SmPC/TW 仿單: weigh benefit of breastfeeding vs therapy. Alternatives: clarithromycin, erythromycin (LactMed)

**Why:** LactMed Summary: "Because of the low levels of azithromycin in breastmilk and use in infants in higher doses, it would not be expected to cause adverse effects in breastfed infants. Monitor the infant for possible effects on the gastrointestinal flora, such as vomiting, diarrhea, candidiasis (thrush, diaper rash)". LactMed (Effects in Breastfed Infants) cites a 3.5-fold IHPS risk with macrolide use in the first 13 days postpartum, and "Two meta-analyses failed to demonstrate a relationship". LactMed lists Clarithromycin and Erythromycin as alternatives. US FDA 8.2: "presence of azithromycin in breastmilk up to 4 weeks after dosing… Advise women to monitor the breastfed infant for diarrhea, vomiting, or rash". UK SmPC 4.6 asks for a benefit-risk decision.

**Sources:** LactMed NBK501200 (rev 2025-12-15): https://www.ncbi.nlm.nih.gov/books/NBK501200/; US FDA 8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/441/smpc

### A13 · Notes

院內只有口服: Zirocin 250 mg tab (ZIR01) + Azithrom 懸液用粉 600 mg/15 mL, 40 mg/mL (AZI01); no IV stocked. t½ ~68 h, high tissue levels → 3–5 d courses; CSF levels very low (US FDA 12.3). Oral CAP: not for patients needing hospitalisation, with bacteremia, nosocomial infection or cystic fibrosis (US FDA 1.3; Zirocin 仿單 5.1); ATS/IDSA 2019: outpatient macrolide monotherapy only where pneumococcal macrolide resistance <25%; inpatients → β-lactam + macrolide. Warnings: QT/torsades and ~2× short-term CV death (US FDA 5.4/5.5); C. difficile diarrhoea; myasthenia gravis exacerbation; IHPS in neonates ≤42 d. STI: recommended dose not reliable for syphilis – test for syphilis/gonorrhoea at diagnosis (US FDA 5.8); Zirocin 仿單: 不能賴以治療淋病或梅毒; N. gonorrhoeae often macrolide-resistant, not recommended for gonorrhoea/PID unless susceptibility confirmed (UK SmPC 4.4). CDC 2020: gonorrhoea → ceftriaxone 500 mg IM (gentamicin 240 mg IM + azithro 2 g only if cephalosporin allergy). Other approved uses (no tag): AECOPD, sinusitis, pharyngitis (2nd-line), otitis media, urethritis/cervicitis, chancroid, MAC prophylaxis 1200 mg weekly, trachoma; UK tablet SmPC also: erythema migrans (Lyme), periodontitis, chronic chlamydial prostatitis, DMAC treatment (+ ethambutol). Other covered organisms (no tag): Moraxella, H. ducreyi, B. pertussis, Ureaplasma, C. psittaci, T. pallidum (TW 仿單 in vitro). Azithrom 懸液: 3.87 g sucrose/5 mL – 糖尿病病人注意 (TW 仿單 §5.1)

**Why:** The column is empty. Each item is quoted from a source. US FDA 1.3 limits oral pneumonia use ("patients requiring hospitalization… known or suspected bacteremia… nosocomial infections… cystic fibrosis"). US FDA 5.4–5.8 and 12.3: "very low concentrations… in cerebrospinal fluid". UK SmPC 4.4 covers gonorrhoea resistance. Azithrom 仿單 §5.1: "每5毫升的泡製後懸浮液含蔗糖3.87克。糖尿病病人服用本用藥時須將此列入考量". Zirocin 仿單 §2/§3.1 give MAC prophylaxis and trachoma. ATS/IDSA 2019 CAP guideline (PMID 31573350, verified with esummary): I recall the macrolide-monotherapy <25% resistance threshold and β-lactam + macrolide for inpatients from the guideline's full text. The PubMed abstract does not state these numbers, so the second reviewer should confirm them against the full text before writing.

**Sources:** US FDA 1.3, 5.3–5.8, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.4, 5.1: https://www.medicines.org.uk/emc/product/441/smpc; Azithrom TW 仿單 §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; Zirocin TW 仿單 §2, §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Metlay JP et al. ATS/IDSA CAP guideline, AJRCCM 2019;200:e45-e67, PMID 31573350: https://pubmed.ncbi.nlm.nih.gov/31573350/

### A14 · Page body

Add a short monograph in the style of the other entries (e.g. Menocik), with headings Category / Mechanism / Indications (US FDA, UK SmPC [suspension 441 + 250 mg tablet 2272: adds PID in combination, gonorrhoea with ceftriaxone, DMAC treatment, erythema migrans, periodontitis] vs TW 仿單; off-label flagged) / Coverage table (Gram+, Gram−, atypicals, mycobacteria/MAC, inherently resistant: E. coli, Klebsiella, Pseudomonas) / Adult Dose table (per A1, with <span color="blue">`PO`</span> tags) / Renal-HD-CRRT table (per A2) / Hepatic (A3) / Pediatric table with Azithrom 40 mg/mL volumes (A4) / Side Effects (common GI; serious: QT/torsades, CV death, hepatotoxicity, SCAR/DRESS, CDAD, hearing loss, AKI/interstitial nephritis, myasthenia, IHPS) / Monitor / Drug Interactions table (A10) / Pregnancy (A11) / Breastfeeding (A12) / Notes (A13) / References: DailyMed setid db52b91e-79f7-4cc1-9564-f2eee8e31c45 (v49, 2026-07-29); eMC 441 (rev 27/02/2026); eMC 2272 (rev 13/05/2026); TW 仿單 衛署藥製字第057842號 (Zirocin, 113/02/26) and 第055554號 (Azithrom, 113/06/12); LactMed NBK501200 (2025-12-15); PMID 31573350; PMID 33332296; PMID 11587400. No storage/stability section.

**Why:** The body is blank, and the other entries carry a full monograph with a references list. The content should mirror the column texts A1–A13 and the cited labels. Storage is left out on purpose, per the owner's rule.

**Sources:** US FDA: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin TW 仿單: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom TW 仿單: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; LactMed: https://www.ncbi.nlm.nih.gov/books/NBK501200/

### A15 · Abx (title) / source brief

Keep the title "Zirocin (Azithromycin)" unchanged. Use the Zirocin TW 仿單 (衛署藥製字第057842號, 南光化學製藥, latest update 113/02/26) as the primary label for the tablet. Correct the source brief: a Taiwan insert for ZIR01 does exist.

**Why:** The licence number follows from NHI code AC57842100, the same pattern as AZI01 (AC55554180 → 055554). The TFDA page returns the full Zirocin F.C. Tablets 250 mg insert, and its imprint NK/547 matches the hospital's ZIR01 appearance. The brief's statement that no insert exists is wrong, and the source hierarchy puts this insert first. Its numbers agree with the US label: GFR 10–80 no adjustment; GFR <10 AUC ↑~30%, Cmax ↑~60%, caution.

**Sources:** Zirocin TW 仿單: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### B1 · Adult dose

<span color="blue">`PO`</span> once daily, with or without food. Zirocin 250 mg tab (ZIR01); Azithrom susp 200 mg/5 mL = 40 mg/mL (AZI01) for adults who cannot swallow tablets<br>CAP (outpatient, suitable for oral therapy), AECB, sinusitis, pharyngitis/tonsillitis (2nd-line), uSSSI, AOM: 500 mg D1 → 250 mg D2–5, OR 500 mg QD ×3 d (Zirocin 仿單; UK SmPC; Azithrom 仿單: 500 mg QD ×3 d). US label: CAP, pharyngitis and uSSSI 5-day regimen only; sinusitis 3-day; AECB either<br>CAP after IV therapy: 500 mg QD to complete 7–10 d total (Zirocin 仿單; UK SmPC)<br>C. trachomatis urethritis/cervicitis, chancroid: 1 g ×1<br>Gonococcal urethritis/cervicitis: US label 2 g ×1; UK tablet SmPC 1–2 g ×1 only in combination with another agent (e.g. ceftriaxone), and not recommended unless susceptibility is confirmed (UK 4.4); Zirocin 仿單: 不能賴以治療淋病 (see Notes)<br>Trachoma / chlamydial conjunctivitis: 1 g once weekly, up to 3 wk (Zirocin 仿單)<br>MAC (advanced HIV): prophylaxis 1200 mg once weekly ± rifabutin (Zirocin 仿單; US 600 mg label); treatment 600 mg QD + ethambutol 15 mg/kg (US 600 mg label; UK tablet SmPC 500–600 mg)<br>PID (UK tablet SmPC): oral switch only after IV azithromycin (IV not stocked here), 250 mg QD to complete 7 d, + metronidazole; not recommended unless gonococcal susceptibility is confirmed (UK 4.4)<br>Erythema migrans (UK tablet SmPC): 1 g D1 → 500 mg D2–10

**Why:** The column is empty, and all stocked forms are PO. US label 2.1 Table 1: "Community-acquired pneumonia / Pharyngitis/tonsillitis / Skin/skin structure: 500 mg as a single dose on Day 1, followed by 250 mg once daily on Days 2 through 5 ... Acute bacterial exacerbations of COPD: 500 mg once daily for 3 days OR 500 mg ... Day 1, followed by 250 mg ... Acute bacterial sinusitis 500 mg once daily for 3 days; Genital ulcer disease (chancroid) One single 1 gram dose; Non-gonococcal urethritis and cervicitis One single 1 gram dose; Gonococcal urethritis and cervicitis One single 2 gram dose." Zirocin 仿單 §3.1: "砂眼披衣菌造成的性傳染無併發症型尿道炎與子宮頸炎：1 g 單一劑量口服。砂眼披衣菌造成的結膜炎與砂眼：每週一次1 g，最多使用三週。治療社區感染性肺炎(CAP)時，在靜脈注射療法之後：每天一劑500 mg，完成整個療程需7至10天。瀰散性MAC疾病之預防：可單獨每週服用一劑1200 mg ... 所有其他適應症 ... 第1天服用500 mg，然後於第2至第5天每天服用250 mg，亦可連續3天每天服用500 mg。" Azithrom 仿單 §3.1 gives adults 500 mg QD ×3 d and Chlamydia trachomatis 1 g ×1. UK tablet SmPC 4.2 Table 1 gives N. gonorrhoeae "in combination with another appropriate antibacterial agent (e.g. ceftriaxone) 1000 mg or 2000 mg"; PID "250 mg once daily to complete a 7-day course"; erythema migrans "1000 mg on day 1, followed by 500 mg/day on days 2-10"; DMAC "<500 mg> or <600 mg> once daily"; MAC prophylaxis "<1200 mg> or <1250 mg> once a week". The US 600 mg label 2.3 says: "1200 mg taken once weekly ... daily dose of 600 mg, in combination with ethambutol at the recommended daily dose of 15 mg/kg."

**Sources:** US FDA ZITHROMAX label 2.1 Table 1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; US FDA azithromycin 600 mg tablet (Alembic) 2.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=90e65b83-32d6-40bc-be5d-19fbec051bdf; Zirocin Taiwan 仿單 §3.1 (衛署藥製字第057842號): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom Taiwan 仿單 §3.1 (衛署藥製字第055554號): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; UK SmPC Azithromycin 250 mg tablets 4.1/4.2: https://www.medicines.org.uk/emc/product/2272/smpc; UK SmPC Azithromycin 200 mg/5 ml susp 4.2 Table 5: https://www.medicines.org.uk/emc/product/441/smpc

### B2 · Renal dose, HD, CRRT

GFR 10–80: no adjustment (Zirocin/Azithrom 仿單; UK SmPC: GFR ≥10)<br>GFR <10: use with caution (需特別謹慎); no dose given. Zirocin 仿單 6.7: AUC0-120 ↑~30%, Cmax ↑~60%; Azithrom 仿單: exposure ↑33%; US 12.3 / UK 5.2: AUC ↑35%, Cmax ↑61% (US label gives PK data only)<br>HD/PD: no label data; dialysis unlikely to remove significant drug (UK SmPC 5.2) → supplemental dose not expected to be needed (inference). CAPD: not substantially removed, PD clearance 0.06 L/h (Kent 2001, PMID 11587400)<br>CRRT: no label or published data; mainly biliary elimination → no adjustment expected (inference)

**Why:** Empty column. The hospital stocks Zirocin and Azithrom, so their 仿單 take precedence, with the US and UK values alongside. Zirocin 仿單 §6.7: "腎絲球濾過率GFR 10-80 mL/min病人無需調整用藥劑量。相較於腎功能正常者，GFR＜10 mL/min病人在口服一劑1 g的azithromycin之後，其平均AUC0-120h與平均Cmax大約分別上升了30%及60%，所以當使用於GFR <10 mL/min病人時，需特別謹慎小心。" Azithrom 仿單 §3.3: "GFR 10-80 mL/min的病人並不須調整劑量；但是，對於GFR＜10 mL/min的病人則應謹慎用藥"; §6.7: "全身暴藥量會升高33%". UK SmPC 4.2: "No dose adjustment is required in patients with GFR ≥10 ml/min. In patients with GFR <10 ml/min azithromycin should be administered with caution"; 5.2: "No data are available for subjects undergoing dialysis, but due to the elimination mechanism of azithromycin, dialysis is unlikely to result in significant removal". US 12.3 (I re-verified it in the live SPL v49): "mean Cmax and AUC0–120 increased by 5.1% and 4.2% ... GFR 10 to 80 ... increased 61% and 35% ... GFR <10 mL/min". The US label has no dialysis or 8.6 renal statement. Kent 2001 (PMID verified via esummary): "Azithromycin is not substantially removed by CAPD". The CRRT line is an inference from elimination route; no label or PubMed CRRT study was found (esearch returned only ECMO and CAPD papers). TDM is not applicable.

**Sources:** Zirocin Taiwan 仿單 §6.7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom Taiwan 仿單 §3.3/§6.7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; UK SmPC 4.2, 4.9, 5.2: https://www.medicines.org.uk/emc/product/441/smpc; US FDA ZITHROMAX label 12.3 Specific Populations: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; Kent JR et al. Perit Dial Int 2001;21:372-7, PMID 11587400: https://pubmed.ncbi.nlm.nih.gov/11587400/

### B3 · Hepatic dose

Child-Pugh A/B: no adjustment (UK SmPC 4.2; 仿單)<br>Child-Pugh C / severe liver disease: no data → use with caution (UK SmPC 4.2/4.4; Zirocin 仿單 6.6). US label: PK in hepatic impairment not established<br>Stop at once if hepatitis signs appear (fulminant hepatitis, hepatic failure and deaths reported)<br>Contraindicated (US 4.2): history of cholestatic jaundice/hepatic dysfunction with prior azithromycin

**Why:** Empty column. UK SmPC 4.2: "No dose adjustment is required in patients with mild (Child-Pugh Class A) or moderate hepatic impairment (Child-Pugh Class B) ... No data are available in patients with severe hepatic impairment (Child-Pugh Class C). Therefore, azithromycin should be administered with caution". Zirocin 仿單 §6.6: "對於輕微至中度肝功能不全病人並無調整劑量之建議，不過由於肝臟是azithromycin的主要排出途徑，所以對於患有嚴重肝病者投予azithromycin應謹慎為之 ... 如果出現肝炎的徵兆與症狀，應立即停用azithromycin。" US 12.3: "The pharmacokinetics of azithromycin in subjects with hepatic impairment has not been established." US 4.2: "contraindicated in patients with a history of cholestatic jaundice/hepatic dysfunction associated with prior use of azithromycin." US 5.2 covers hepatotoxicity. Only the US label has the 4.2 contraindication; the UK SmPC and both 仿單 list hypersensitivity only.

**Sources:** UK SmPC 4.2/4.4: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin Taiwan 仿單 §6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; US FDA ZITHROMAX label 4.2, 5.2, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45

### B4 · Pediatric dose

<span color="blue">`PO`</span> Azithrom susp 40 mg/mL (AZI01), once daily; ≥45 kg → adult dose<br>Azithrom 仿單: 10 mg/kg QD ×3 d<br>US label (≥6 mo): AOM 30 mg/kg ×1, or 10 mg/kg QD ×3 d, or 10 mg/kg D1 → 5 mg/kg D2–5; sinusitis 10 mg/kg ×3 d; CAP 10 mg/kg D1 → 5 mg/kg D2–5; pharyngitis (≥2 y) 12 mg/kg QD ×5 d<br>UK SmPC: strep pharyngitis 20 mg/kg ×3 d or 12 mg/kg ×5 d; CAP/sinusitis/ABSSSI 10 mg/kg ×3 d or 10→5 mg/kg ×5 d<br>Max 500 mg/day (AOM single dose: max 1500 mg total) (UK SmPC 4.2)<br><6 mo: not established; IHPS reported after use in neonates ≤42 days

**Why:** Empty column. AZI01 is the pediatric form. Azithrom 仿單 §3.1: "孩童 每天10 mg/kg，連續服用3天。對於超過45公斤（含）以上的孩童，服用的劑量與成人相同". US 2.2 Table 2: "Acute otitis media 30 mg/kg as a single dose or 10 mg/kg once daily for 3 days or 10 mg/kg ... Day 1 followed by 5 mg/kg/day on Days 2 through 5. Acute bacterial sinusitis 10 mg/kg once daily for 3 days. Community-acquired pneumonia 10 mg/kg ... Day 1 followed by 5 mg/kg ... Days 2 through 5. Pharyngitis/tonsillitis 12 mg/kg once daily for 5 days." UK SmPC 4.2 Table 1: "Acute streptococcal tonsillitis and pharyngitis 20 mg/kg/day for 3 days or 12 mg/kg/day for 5 days" and "daily dose should not exceed the adult daily dose of 500 mg, with exception of the 1-day ... otitis media for which the maximum total dose of 1500 mg". It also says "not been established in children under 6 months". US 5.3 and 仿單 §5.1 report IHPS "(treatment up to 42 days of life)". Zirocin tablets carry no pediatric dosing table.

**Sources:** Azithrom Taiwan 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; US FDA ZITHROMAX label 2.2, 5.3, 8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC susp 4.2: https://www.medicines.org.uk/emc/product/441/smpc

### B5 · Indications

CAP, SSTI, Pelvic

**Why:** Use only existing options. CAP: US 1.1/1.2 ("Community-acquired pneumonia ... in patients appropriate for oral therapy"), UK SmPC 4.1 and both 仿單. SSTI: US "Uncomplicated skin and skin structure infections" and UK "ABSSSI"; do NOT tag cSSTI. Pelvic: the UK tablet SmPC 4.1 lists "pelvic inflammatory disease, the latter always in combination with other appropriate antibacterial agent(s)" plus urethritis/cervicitis. Under the ground rules an indication in the US label OR the UK SmPC counts as approved. Do not tag Pneumonia, HAP, VAP or Bacteremia: US 1.3 says it is "not recommended in patients with pneumonia ... requiring hospitalization ... known or suspected bacteremia ... nosocomial infections". Indications with no option (sinusitis, AOM, pharyngitis, AECB, urethritis/cervicitis, chancroid, trachoma, MAC, erythema migrans) go to Notes.

**Sources:** US FDA ZITHROMAX label 1.1–1.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC Azithromycin 250 mg tablets 4.1: https://www.medicines.org.uk/emc/product/2272/smpc; Zirocin Taiwan 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### B6 · Coverage

Streptococcus, MSSA, Haemophilus, Neisseria, Chlamydia, Mycoplasma, Legionella, Mycobacteria

**Why:** US 12.4 "active ... both in vitro and in clinical infections": "Staphylococcus aureus, Streptococcus agalactiae, S. pneumoniae, S. pyogenes; Haemophilus ducreyi, H. influenzae, Moraxella catarrhalis, Neisseria gonorrhoeae; Chlamydophila pneumoniae, Chlamydia trachomatis, Mycoplasma pneumoniae". UK SmPC 5.1 lists as commonly susceptible "Legionella pneumophila ... Chlamydia trachomatis ... Mycoplasma pneumoniae". Zirocin 仿單 §2 and §10.2 show clinical efficacy against Legionella and MAC. The US 600 mg label and UK tablet SmPC cover MAC (Mycobacteria). Caveats belong in Notes. UK 5.1 lists S. aureus, S. pneumoniae and N. gonorrhoeae under "Species for which acquired resistance may be a problem" and notes that MRSA resistance exceeds 50% in at least one region. The UK SmPC 4.4 says N. gonorrhoeae is "very likely to be resistant". Do NOT tag E.coli, Klebsiella or Pseudomonas: UK 5.1 calls them "Inherently resistant organisms". Do NOT tag Anaerobes or Bacteroides: US 12.4 says in vitro only (Prevotella bivia, Peptostreptococcus) and "clinical significance is unknown". Moraxella, H. ducreyi, B. pertussis, T. pallidum, Ureaplasma and Borrelia have no option, so they go to Notes.

**Sources:** US FDA ZITHROMAX label 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 5.1 Table 8: https://www.medicines.org.uk/emc/product/441/smpc; US FDA azithromycin 600 mg (MAC) label 1.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=90e65b83-32d6-40bc-be5d-19fbec051bdf; Zirocin Taiwan 仿單 §10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### B7 · Side Effects

GI, QTc prolong, LFT↑, ototoxicity, SJS/TEN, DRESS, AKI

**Why:** US 6: "Most common adverse reactions are diarrhea (5 to 14%), nausea (3 to 18%), abdominal pain (3 to 7%), or vomiting (2 to 7%)". US 5.4 covers QT prolongation and torsades. US 5.2 covers hepatotoxicity ("Abnormal liver function, hepatitis, cholestatic jaundice, hepatic necrosis, and hepatic failure"). US 6.2 postmarketing lists "Hearing disturbances including hearing loss, deafness and/or tinnitus" and "AGEP, Stevens-Johnson Syndrome, toxic epidermal necrolysis, and DRESS". UK SmPC 4.8 lists deafness, hypoacusis, tinnitus, torsades, QT prolonged, hepatic failure, SJS/TEN/DRESS/AGEP. Zirocin 仿單 §8.1: "聽力損傷 ... 主要出現於長時間使用高劑量時". CDAD, myasthenia gravis, IHPS and anaphylaxis have no option and go to Notes.

**Sources:** US FDA ZITHROMAX label 5.1–5.7, 6.1, 6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.4/4.8: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin Taiwan 仿單 §8.1/§8.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### B8 · Monitor

ECG, electrolyte, LFT, PT/INR

**Why:** ECG and electrolytes: UK SmPC 4.4 says use with caution in "congenital or documented QT prolongation ... electrolyte disturbance, particularly in cases of hypokalaemia and hypomagnesaemia"; US 5.4 says the same. LFT: UK SmPC 4.4 says "liver function tests/investigations should be performed immediately" if hepatic symptoms appear; US 5.2 agrees. PT/INR with warfarin: US 7.2 says "Prothrombin times should be carefully monitored"; Zirocin 仿單 §7 says the same. Hearing has no option, so it goes to Notes.

**Sources:** UK SmPC 4.4/4.5: https://www.medicines.org.uk/emc/product/441/smpc; US FDA ZITHROMAX label 5.2, 5.4, 7.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45

### B9 · Mechanism

Macrolide (azalide, 15-membered): binds 23S rRNA of the 50S ribosomal subunit → inhibits protein synthesis (transpeptidation/translocation) and 50S assembly. PK/PD: AUC/MIC. Extensive tissue/intracellular (phagocyte) uptake; terminal t½ ~68 h; mainly biliary elimination (~6% of oral dose in urine unchanged). Resistance: erm 23S methylation (MLSB, cross-resistance with clindamycin/streptogramin B), mef efflux (M phenotype)

**Why:** US 12.4: "binding to the 23S rRNA of the 50S ribosomal subunit ... inhibiting bacterial protein synthesis and impeding the assembly of the 50S ribosomal subunit". Azithrom 仿單 §10.1: "抑制蛋白質合成過程中的轉肽/轉位期，並抑制50S核醣體次單元組裝". UK SmPC 5.1: "efficacy depends mainly on the ratio between AUC ... and MIC"; it describes efflux (M-phenotype) and erm methylation (MLSB). US 12.3: "terminal elimination half-life of 68 hr ... Biliary excretion ... is a major route ... approximately 6% ... in urine".

**Sources:** US FDA ZITHROMAX label 12.3, 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 5.1/5.2: https://www.medicines.org.uk/emc/product/441/smpc; Azithrom Taiwan 仿單 §10.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F

### B10 · Drug Interactions

AVOID: ergot derivatives (仿單/UK SmPC: 不可併用, ergotism)<br>Caution, additive QT↑: class IA/III antiarrhythmics, antipsychotics (pimozide), citalopram, FQs, hydroxychloroquine/chloroquine<br>P-gp substrates ↑: digoxin (monitor level), colchicine (AUC ↑57%), dabigatran (bleeding)<br>Warfarin: ↑INR reports → monitor PT/INR<br>Ciclosporin: Cmax ↑ → TDM, adjust dose<br>Statins: rhabdomyolysis reports<br>Nelfinavir: azithro AUC ↑2.1× → watch LFT/hearing<br>Al/Mg antacids: Cmax ↓25–30% → do not take at the same time (仿單; UK SmPC: no clinically relevant change)<br>Weak CYP3A4 inhibitor: caution with narrow-TI CYP3A4 substrates (UK SmPC 4.5); no relevant effect on midazolam, theophylline, carbamazepine in studies

**Why:** Empty column. UK SmPC 4.5: "Azithromycin is an inhibitor of the transporter P-glycoprotein ... digoxin and colchicine"; colchicine "↑ 57% AUC"; dabigatran "increased risk for haemorrhages"; ciclosporin "therapeutic drug monitoring"; atorvastatin "post-marketing cases of rhabdomyolysis"; QT drugs "antiarrhythmics of Classes IA ... III ... pimozide ... citalopram ... fluoroquinolones ... chloroquine and hydroxychloroquine". UK 4.4 and both 仿單: "azithromycin與麥角衍生物不應合併使用". US 7.1 nelfinavir and 7.2 warfarin; US 12.3 Table 14 gives nelfinavir AUC ratio 2.12. Zirocin 仿單 §7 on antacids: "最高血清濃度降低達30% ... 這兩種藥物不應同時服用"; Azithrom 仿單 gives about 25%.

**Sources:** UK SmPC 4.4/4.5: https://www.medicines.org.uk/emc/product/441/smpc; US FDA ZITHROMAX label 7, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; Zirocin Taiwan 仿單 §5.1/§7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### B11 · Pregnancy

US label 8.1 (PLLR): decades of published data have not identified a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; no malformations in rat/mouse/rabbit studies.<br>UK SmPC 4.6: >7000 exposed pregnancies, most studies show no ↑ malformations; miscarriage data inconclusive → use only if clinically needed.<br>仿單 6.1: 大多數研究未顯示胎兒不良反應，但有有限證據顯示懷孕早期暴露後流產風險增加 → 只在臨床需要且效益大於可能風險時使用.

**Why:** Empty column. Per the ground rules, no letter category (the hospital site's "B" is retired). US 8.1: "have not identified any drug-associated risks for major birth defects, miscarriage, or adverse maternal or fetal outcomes". UK SmPC 4.6: "more than 7000 azithromycin exposed pregnancies ... Epidemiological evidence related to the risk of miscarriage ... is inconclusive ... should only be used during pregnancy if clinically needed". Zirocin 仿單 §6.1: "只有在臨床需要時並且預期治療的效益將超過其任何可能存在的微幅之風險才能在懷孕期間使用".

**Sources:** US FDA ZITHROMAX label 8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin Taiwan 仿單 §6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F

### B12 · Breastfeeding

LactMed: acceptable; low milk levels (estimated infant dose ~0.1–1.2 mg/kg/day vs infant doses 5–10 mg/kg/day), not expected to harm; watch infant for vomiting, diarrhea, thrush/diaper rash. Macrolide–IHPS signal mainly with exposure in the first 13 days postpartum; 2 meta-analyses found no association. Alternatives: clarithromycin, erythromycin.<br>US 8.2: present in milk up to 4 wk after a 2 g dose; monitor infant for diarrhea, vomiting, rash. UK SmPC/仿單: excreted in milk; weigh benefit of breastfeeding vs therapy.

**Why:** Empty column. LactMed summary: "Because of the low levels of azithromycin in breastmilk and use in infants in higher doses, it would not be expected to cause adverse effects in breastfed infants. Monitor the infant for possible effects on the gastrointestinal flora, such as vomiting, diarrhea, candidiasis (thrush, diaper rash)." Drug Levels gives estimates of 0.42, 0.1, 0.6 and 1.2 mg/kg daily. Effects in Breastfed Infants: "Two meta-analyses failed to demonstrate a relationship between maternal macrolide use during breastfeeding and infantile hypertrophic pyloric stenosis." US 8.2: "Advise women to monitor the breastfed infant for diarrhea, vomiting, or rash." UK 4.6: "excreted in human milk to substantial extent ... A decision must be made".

**Sources:** LactMed Azithromycin NBK501200 (rev 2025-12-15): https://www.ncbi.nlm.nih.gov/books/NBK501200/; US FDA ZITHROMAX label 8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/441/smpc

### B13 · Notes

Stocked: Zirocin 美妥欣膜衣錠 250 mg (ZIR01; 衛署藥製字第057842號) / Azithrom 菌巴達懸液用粉 600 mg/15 mL = 40 mg/mL (AZI01; 衛署藥製字第055554號), <span color="blue">`PO`</span> only<br>Warnings: QT prolongation/TdP (risk ↑ with ↓K/↓Mg, bradycardia, elderly, QT drugs); observational ~2× short-term CV death vs amoxicillin (US 5.5); hepatotoxicity; CDAD; SCAR (AGEP/SJS/TEN/DRESS; can recur after symptomatic Rx stops); myasthenia gravis exacerbation; IHPS in neonates; hearing loss/tinnitus (長期高劑量)<br>Not for pneumonia needing hospitalization as oral monotherapy (US 1.3; Zirocin 仿單 5.1). CAP (ATS/IDSA 2019): outpatient macrolide monotherapy only if local pneumococcal macrolide resistance <25%; inpatient β-lactam + macrolide<br>STI: does not treat syphilis; test for syphilis and gonorrhoea (US 5.8); N. gonorrhoeae often macrolide-resistant (UK SmPC 4.4; Zirocin 仿單: 不能賴以治療淋病). CDC 2021: gonorrhoea → ceftriaxone (azithro 2 g + gentamicin only if cephalosporin allergy); chlamydia → doxycycline preferred, azithro 1 g alternative<br>MAC: part of a multidrug regimen (ATS/ERS/ESCMID/IDSA NTM 2020)<br>Susp: 3.87 g sucrose/5 mL (糖尿病注意; Azithrom 仿單)<br>No tag option: Moraxella, H. ducreyi, B. pertussis, T. pallidum, Ureaplasma, Borrelia; sinusitis, AOM, pharyngitis, AECB, urethritis/cervicitis, chancroid, trachoma, Lyme, MAC (tagged Mycobacteria)

**Why:** Empty column. It gathers the label warnings and organisms or indications that have no multi-select option. Sources: US 5.1–5.8 (5.5: "approximately two-fold increased short-term potential risk of acute cardiovascular death ... relative to ... amoxicillin"; 5.8: "should not be relied upon to treat syphilis"). US 1.3 limitations. UK SmPC 4.4: "Neisseria gonorrhoeae is very likely to be resistant to macrolides ... not recommended for the treatment of uncomplicated gonorrhoea". Zirocin 仿單 §2: "建議的azithromycin劑量，不能賴以治療淋病或梅毒". Azithrom 仿單 §5.1: "每5毫升的泡製後懸浮液含蔗糖3.87克". Sucrose content is an excipient warning, not storage. The guideline lines cite PMIDs verified by esummary: CDC STI 2021 (34292926), ATS/IDSA CAP 2019 (31573350), NTM 2020 (32628747). CDC.gov and Europe PMC full text are blocked from this sandbox (proxy 403), so I could not quote the exact regimen wording from full text. These guideline sentences should be confirmed against the full text before applying, or kept as cited summaries.

**Sources:** US FDA ZITHROMAX label 1.3, 5.1–5.8: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 4.4: https://www.medicines.org.uk/emc/product/441/smpc; Zirocin Taiwan 仿單 §2, §5.1, §8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom Taiwan 仿單 §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F; CDC STI Treatment Guidelines 2021, MMWR Recomm Rep 70(4), PMID 34292926: https://pubmed.ncbi.nlm.nih.gov/34292926/; ATS/IDSA CAP guideline 2019, PMID 31573350: https://pubmed.ncbi.nlm.nih.gov/31573350/; ATS/ERS/ESCMID/IDSA NTM guideline 2020, PMID 32628747: https://pubmed.ncbi.nlm.nih.gov/32628747/

### B14 · Page body

Add a short monograph, as on the other entries, with these headings: Category (Macrolide/azalide) · Stocked products (ZIR01 Zirocin 250 mg tab 衛署藥製字第057842號; AZI01 Azithrom susp 40 mg/mL 衛署藥製字第055554號; both <span color="blue">`PO`</span>; no IV stocked) · Mechanism · Approved indications (US: AECB, sinusitis, CAP, pharyngitis, uSSSI, urethritis/cervicitis, chancroid, AOM [peds]; UK tablet SmPC adds PID [combination, oral switch only], gonorrhoea [with e.g. ceftriaxone; UK 4.4: not recommended unless susceptibility confirmed], chronic chlamydial prostatitis, DMAC treatment + MAC prophylaxis, erythema migrans, periodontitis; 仿單: 下/上呼吸道感染、皮膚軟組織、中耳炎、性傳染病, trachoma, MAC prophylaxis) · Adult/Pediatric dosing (as B1/B4) · Renal/Hepatic (as B2/B3) · Safety (B7/B13) · Interactions (B10) · Pregnancy/Lactation (B11/B12) · Sources (US setid db52b91e… v49 Jul 29 2026; US 600 mg setid 90e65b83…; UK eMC 441 & 2272; Zirocin/Azithrom TFDA 仿單; LactMed NBK501200). No storage section.

**Why:** Other entries have a monograph body, and this new page is blank. The text simply mirrors the sourced column content. The indication lists are quoted from US 1.1/1.2, UK tablet SmPC 4.1 and Zirocin/Azithrom 仿單 §2. Per the owner's rule, storage and stability are left out.

**Sources:** US FDA ZITHROMAX label 1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45; UK SmPC 250 mg tablets 4.1: https://www.medicines.org.uk/emc/product/2272/smpc; Zirocin Taiwan 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057842%E8%99%9F; Azithrom Taiwan 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC055554%E8%99%9F

### B15 · Renewed date

2026-10-05

**Why:** Other verified entries carry a Renewed date. Set it when the content above is applied so the entry shows when it was last checked against sources.

**Sources:** US FDA ZITHROMAX label (v49, Jul 29 2026): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45

## Apply log

- Adult dose: merged A1+B1 (TW 仿單 resp/SSTI regimens, US FDA regimen-specific dosing, CAP after IV, chlamydia/chancroid, gonococcal with UK/TW caveats + CDC 2020, PID oral switch with IV-not-stocked note, MAC prophylaxis/treatment, trachoma, erythema migrans 1 g D1 -> 500 mg D2-10 (re-verified in UK SmPC 2272 4.2)); blue PO tag
- Renal dose, HD, CRRT: merged A2+B2 (GFR 10-80 no adjustment, GFR <10 caution with TW/US/UK PK figures, HD/PD inference + Kent 2001 CAPD, CRRT no data/inference, ~6% urinary)
- Hepatic dose: merged A3+B3
- Pediatric dose: merged A4+B4 (Azithrom 40 mg/mL volumes, TW/US/UK regimens, max doses, <6 mo/IHPS, Zirocin tab no peds dose)
- Indications multi-select: CAP, SSTI, Pelvic
- Coverage multi-select: Streptococcus, MSSA, Haemophilus, Neisseria, Chlamydia, Mycoplasma, Legionella, Mycobacteria
- Side Effects multi-select: GI, QTc prolong, LFT↑, SJS/TEN, DRESS, ototoxicity, AKI
- Monitor multi-select: ECG, electrolyte, LFT, PT/INR
- Mechanism: merged A9+B9 (azalide, 23S/50S, AUC/MIC, t½ ~68 h, biliary, erm/mef resistance)
- Drug Interactions: merged A10+B10, one line per class with <br>
- Pregnancy: merged A11+B11 (letter categories retired; US PLLR, UK SmPC 4.6, TW 仿單 6.1)
- Breastfeeding: merged A12+B12 (LactMed incl. infant dose estimate, US 8.2, IHPS, UK/TW, alternatives)
- Notes: merged A13+B13 (stocked products with licence numbers, warnings, oral CAP limits + ATS/IDSA 2019, STI/CDC 2020/2021, MAC NTM 2020, sucrose content, untagged indications/organisms)
- Page body: added full monograph (Category, Stocked products, Mechanism, Indications US/UK/TW, Coverage table incl. inherently resistant, Adult Dose table, Renal/HD/CRRT table, Hepatic, Pediatric table with mL/kg volumes, Side Effects, Monitor, Drug Interactions table, Pregnancy, Breastfeeding, Notes) with no storage section
- References section appended: DailyMed db52b91e (v49 2026-07-29), DailyMed 90e65b83 (600 mg), eMC 441 (rev 27/02/2026), eMC 2272 (rev 13/05/2026), TW 仿單 057842 (Zirocin, 113/02/26) and 055554 (Azithrom, 113/06/12), LactMed NBK501200 (2025-12-15), PMIDs 31573350, 33332296, 34292926, 32628747, 11587400
- Abx title kept 'Zirocin (Azithromycin)'; Zirocin TW 仿單 noted as primary label in body (Stocked products)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
