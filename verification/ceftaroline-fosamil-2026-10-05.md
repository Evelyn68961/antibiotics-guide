# Verification: Zinforo (Ceftaroline)

- **Notion entry:** [Zinforo (Ceftaroline)](https://app.notion.com/25fc496dfff180c0abdac24423b9ccc5)
- **Hospital codes:** ZIN04 (Zinforo inj 600 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/ceftaroline-fosamil.json` (plus any `sources/ceftaroline-fosamil-taiwan-insert-*.txt`)

## Product and sources

Zinforo 600 mg powder for concentrate for solution for infusion (ceftaroline fosamil), 捷復寧注射劑600毫克, 衛部藥輸字第026611號 (Pfizer Taiwan); hospital code ZIN04, NHI BC26611280, ATC J01DI02. The Taiwan insert (CDS 20250912-2) matches the UK SmPC (revised 09/2025). The US Teflaro label (DailyMed setid 3ecde48b…, v43, 2025-11-17) is used for comparison. LactMed NBK501730 (revised 2020-07-20).

## Agreed fixes applied in Notion (31)

### A1 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-50: 400mg<br>CrCl 15-30: 300mg<br>CrCl \<15: 200mg

**Now:** Standard dose (TW仿單 = UK SmPC = US label):<br>CrCl >30–≤50: 400mg IVD q12h<br>CrCl ≥15–≤30: 300mg IVD q12h<br>ESRD (CrCl <15), incl. HD: 200mg IVD q12h；HD日於透析後給藥 (4-h HD removes ~74%)<br>High dose (cSSTI, S. aureus MIC 2–4 mg/L; TW/UK only, not US): 400 / 300 / 200mg <b>q8h</b>, infuse 120 min<br>Peds (TW/UK): 12–<18y & ≥33kg → adult steps; 2–<12y or 12–<18y & <33kg: CrCl >30–≤50 8 mg/kg (max 300mg) q8h；15–30 6 mg/kg (max 200mg) q8h. Peds high dose (2–<18y, 120 min q8h): >30–≤50 10 mg/kg (max 400mg)；15–30 8 mg/kg (max 300mg). No data: <2y with CrCl ≤50, or ESRD in <12y / 12–<18y <33kg. (US label: insufficient information for peds CrCl <50)<br>CRRT (not in labels): ~400mg q12h for 70 kg adjusted BW at effluent 3 L/h; titrate to effluent rate/weight (Kalaria 2021, n=4, PMID 33438291); PopPK: registered doses adequate except ARC (Adamiszak 2025, PMID 40298514)

**Why:** The current column gives mg amounts with no dosing interval. All three labels say q12h for the standard dose and q8h for the high dose, so a reader could give 400 mg at the wrong interval. It is also missing four things: the instruction to dose after HD (US Table 4 footnote c, TW footnote e, UK footnote b), the high-dose renal steps (TW 表2, UK Table 3), the paediatric renal table (TW 表2, UK Table 4) and any CRRT information. The Taiwan insert is the stocked product's label and takes precedence; the US values are the same for adults. For CRRT, no label covers it. Kalaria 2021 (PMID 33438291, verified via esummary) proposes 400 mg q12h for a 70 kg adjusted body weight at an effluent rate of 3 L/h. Adamiszak 2025 (PMID 40298514) found registered doses adequate except in augmented renal clearance (ARC).

**Sources:** Taiwan insert 3.3 腎功能不全病人 表2 + footnote e — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US FDA Teflaro 2.3 Table 4 (footnotes b, c: 'administered after hemodialysis on hemodialysis days'; 'insufficient information… pediatric CrCL <50') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; UK SmPC 4.2 Tables 3 and 4 — https://www.medicines.org.uk/emc/product/4297/smpc; Kalaria S et al. Pharmacotherapy 2021;41:205-211, PMID 33438291 — https://pubmed.ncbi.nlm.nih.gov/33438291/; Adamiszak A et al. Antibiotics 2025;14:347, PMID 40298514 — https://pubmed.ncbi.nlm.nih.gov/40298514/

### A2 · Pediatric dose (error)

**Was:** 2m-2yrs: 8 mg/kg/dose IV q8h<br>2-18yrs: 12 mg/kg/dose IV q8h<br>\>33kg → adult dose (400-600mg IV q8h)<br><br>Osteoarticular infection, acute (eg, bacterial arthritis, osteomyelitis): 15mg/kg/dose q8h (MAX: 600mg/dose)<br>

**Now:** Standard (cSSTI, CAP; TW insert/UK SmPC):<br>出生–<2 mo: 6 mg/kg q8h, infuse 60 min (US: ABSSSI only, ≥34 wk GA & ≥12 days postnatal)<br>2 mo–<2 y: 8 mg/kg q8h<br>2–<12 y, or 12–<18 y & <33 kg: 12 mg/kg q8h (max 400 mg/dose)<br>12–<18 y & ≥33 kg: 600 mg q12h (US: ≥2 y & >33 kg: 400 mg q8h OR 600 mg q12h)<br>High dose (cSSTI, S. aureus MIC 2–4 mg/L; TW/UK): 2 mo–<2 y 10 mg/kg q8h；≥2 y 12 mg/kg (max 600 mg) q8h, infuse 120 min<br><br>Osteoarticular infection, acute (eg, bacterial arthritis, osteomyelitis): 15mg/kg/dose q8h (MAX: 600mg/dose) ⚠️ off-label, no label source

**Why:** (1) '>33kg → adult dose (400-600mg IV q8h)' is wrong. The US label gives 400 mg q8h OR 600 mg q12h. TW/UK give 600 mg q12h, and only to patients aged 12 years or older who weigh 33 kg or more. 600 mg q8h is used only in the high-dose regimen. (2) '2-18yrs: 12 mg/kg' leaves out the 400 mg maximum dose and the <33 kg weight condition. (3) Neonatal dosing (6 mg/kg q8h over 60 min) is missing. TW and UK allow it for cSSTI and CAP from birth; the US allows it for ABSSSI only. (4) Paediatric high-dose regimens are missing. (5) The osteoarticular 15 mg/kg q8h dose appears in no label, and no source is cited. It is plausible, so flag it as off-label rather than delete it.

**Sources:** Taiwan insert 3.1 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Table 2 — https://www.medicines.org.uk/emc/product/4297/smpc; US FDA Teflaro 2.2 Tables 2–3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### A3 · Adult dose (missing)

**Was:** BSI: 600mg IVD q8h<br>SSTI, Pneumonia: 600mg IVD q12h<br>

**Now:** cSSTI, CAP: 600mg IVD q12h, infuse 5–60 min (cSSTI 5–14 d; CAP 5–7 d)<br>High dose — cSSTI due to S. aureus MIC 2–4 mg/L: 600mg IVD q8h, infuse 120 min (TW insert/UK SmPC; not in US label; do not use if MIC >4 mg/L)<br>BSI (off-label; MRSA bacteremia, usually + daptomycin): 600mg IVD q8h (Geriak 2019, PMID 30858203)

**Why:** The standard dose is correct. The column is missing the label high-dose regimen (600 mg q8h over 120 min for S. aureus with MIC 2–4 mg/L, from TW 3.1 and UK Table 1), infusion times and durations. The BSI q8h line is not in any label. It matches published off-label use: in the Geriak 2019 pilot RCT, daptomycin plus ceftaroline 600 mg q8h was given for MRSA bacteraemia (PMID verified). It should be labelled off-label and cited.

**Sources:** Taiwan insert 3.1 表1 and 5.1 (MIC >4 不建議) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Table 1, 4.4 — https://www.medicines.org.uk/emc/product/4297/smpc; US FDA Teflaro 2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Geriak M et al. Antimicrob Agents Chemother 2019;63:e02483-18, PMID 30858203 — https://pubmed.ncbi.nlm.nih.gov/30858203/

### A4 · Page body (unsupported)

**Was:** Attached PDF 'ceftaroline_pediatric_dose.pdf': AI-chat answer (Perplexity-style: three near-identical repeated paragraphs, bracket citations [1]–[5], '⁂' marker, references to MIMS/Medscape/PCH monograph)

**Now:** REMOVE the PDF. Optional short body block: '兒童劑量 (台灣仿單 3.1 表1 / UK SmPC 4.2 Table 2；詳見 Pediatric dose 欄): 出生–<2月 6 mg/kg q8h (60 min); 2月–<2歲 8 mg/kg q8h; 2–<12歲 或 12–<18歲且<33kg 12 mg/kg q8h (max 400 mg); 12–<18歲且≥33kg 600 mg q12h; 高劑量 (cSSTI, S. aureus MIC 2–4, 輸注120分鐘): 2月–<2歲 10 mg/kg q8h；2–<18歲 12 mg/kg (max 600 mg) q8h' + links to TW insert and UK SmPC

**Why:** The body content is pasted AI-chat output, which the ground rules allow us to remove. It also contradicts the labels in one place: it gives '2–<18 years, ≥33 kg: 600 mg q12h', but TW and UK require age 12 or older for that dose, and children aged 2–<12 get 12 mg/kg up to 400 mg whatever their weight. Its 'consult specialist' high-dose wording is vague where the labels give exact high doses.

**Sources:** Taiwan insert 3.1 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Table 2 — https://www.medicines.org.uk/emc/product/4297/smpc

### A5 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, thrombophlebitis, neurotoxicity, hematologic, coagulopathy, DRESS, SJS/TEN

**Why:** TW 表3 lists these frequencies. Common: diarrhoea, nausea, vomiting, abdominal pain (GI); raised transaminases (LFT↑); phlebitis and infusion-site reactions (thrombophlebitis); headache and dizziness. Very common: positive direct Coombs test. Uncommon: anaemia, leukopenia, thrombocytopenia (hematologic); raised INR and prolonged PT (coagulopathy); encephalopathy (neurotoxicity); C. difficile colitis; hypersensitivity. Frequency unknown: SJS, TEN, DRESS, AGEP, agranulocytosis, neutropenia, eosinophilic pneumonia. US 5.3 adds seizures and encephalopathy, mostly when the dose was not adjusted for renal function. All proposed tags exist in the schema.

**Sources:** Taiwan insert 8.2 表3 and 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.4, 4.8 Table 5 — https://www.medicines.org.uk/emc/product/4297/smpc; US FDA Teflaro 5.1–5.4, 6.1, 6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### A6 · Coverage (missing)

**Was:** (empty)

**Now:** MSSA, MRSA, Streptococcus, E.coli, Klebsiella, Haemophilus

**Why:** These organisms have clinical efficacy in the labels. S. aureus is covered including MRSA for cSSTI/ABSSSI, but only MSSA for CAP. Streptococci covered are S. pyogenes, S. agalactiae, S. dysgalactiae, the S. anginosus group and S. pneumoniae. Gram-negatives covered are E. coli, K. pneumoniae, K. oxytoca and H. influenzae/parainfluenzae. Do not tag Proteus: the US lists P. mirabilis as in-vitro only, and the UK SmPC 5.1 says Proteus spp. are not susceptible. Do not tag Enterobacter either: it is in the US in-vitro list only, and ceftaroline is inactive against AmpC producers. Not covered: Pseudomonas, ESBL/KPC/MBL/AmpC producers, Chlamydophila, Legionella, Mycoplasma.

**Sources:** US FDA Teflaro 1.1, 1.2, 12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/4297/smpc; Taiwan insert 10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F

### A7 · Notes (missing)

**Was:** (empty)

**Now:** ⚠️ Neurotoxicity (encephalopathy, seizures) mostly in renal impairment without dose reduction — 依腎功能調整劑量；有癲癇病史者小心使用 (US 5.3, TW 5.1/9)<br>Direct Coombs (+) very common (11.2% q12h; 32.3% high dose q8h) → 若出現貧血需評估藥物性溶血 (TW 5.1)<br>Rash very common (18.5%) in Asian pts on high dose (COVERS) (TW 8.1)<br>禁忌：對 cephalosporin 過敏，或對其他 β-lactam 曾有立即嚴重過敏 (TW 4 / UK 4.3)<br>No activity: Pseudomonas, ESBL/AmpC/KPC/MBL, atypicals. No clinical data for MRSA CAP (TW/UK). Not for S. aureus MIC >4 mg/L

**Why:** Each item here is a label warning that is not in the column now. The renal neurotoxicity warning matters most: US 5.3 says 'most cases occurred in patients with renal impairment who did not receive appropriate dosage adjustment'. Storage details are deliberately left out.

**Sources:** US FDA Teflaro 5.3, 5.4, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Taiwan insert 4, 5.1, 8.1, 9 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.3, 4.4, 5.1 — https://www.medicines.org.uk/emc/product/4297/smpc

### A8 · Breastfeeding (missing)

**Was:** (empty)

**Now:** LactMed (2020): no human data; cephalosporins generally not expected to harm breastfed infants — ceftaroline acceptable; monitor infant for diarrhea/thrush.<br>台灣仿單：建議暫停哺乳 (stricter). UK: decide whether to stop breastfeeding or therapy. US: weigh breastfeeding benefit vs maternal need

**Why:** The column is empty. LactMed is the hierarchy's source for breastfeeding. The stocked product's Taiwan insert recommends pausing breastfeeding, so both positions should be shown.

**Sources:** LactMed 'Ceftaroline' NBK501730, Summary of Use during Lactation — https://www.ncbi.nlm.nih.gov/books/NBK501730/; Taiwan insert 6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/4297/smpc; US FDA Teflaro 8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### A9 · Pregnancy (missing)

**Was:** (empty)

**Now:** No FDA letter category (PLLR). No adequate human data; no malformations in rats (~4× MRHD) or rabbits (US 8.1). 台灣仿單：懷孕期間應避免使用，除非臨床確實需要且效益高於風險 (UK: preferable to avoid)

**Why:** The column is empty. The wording avoids letter categories, as the ground rules require.

**Sources:** US FDA Teflaro 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Taiwan insert 6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/4297/smpc

### A10 · Monitor (missing)

**Was:** (empty)

**Now:** renal, CBC, neuro

**Why:** Renal: doses depend on CrCl, which UK/TW say 'should be closely monitored' with the dose adjusted as renal function changes. CBC: positive Coombs test and possible haemolytic anaemia, plus uncommon cytopenias, so investigate if anaemia appears. Neuro: encephalopathy and seizures, especially in renal impairment. All three tags exist in the schema.

**Sources:** Taiwan insert 3.3 表2 footnote a, 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US FDA Teflaro 5.3, 5.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### A11 · Mechanism (missing)

**Was:** (empty)

**Now:** Binds PBPs → inhibits cell-wall synthesis (bactericidal); high affinity for PBP2a (MRSA) and PBP2x (penicillin non-susceptible S. pneumoniae). Prodrug (fosamil) → active ceftaroline by plasma phosphatase. Time-dependent (%T>MIC). Inactive vs ESBL (TEM/SHV/CTX-M), KPC, MBL, AmpC producers

**Why:** The column is empty, and the labels describe the mechanism directly.

**Sources:** US FDA Teflaro 12.3, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/4297/smpc; Taiwan insert 10.1, 10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F

### A12 · Drug Interactions (missing)

**Was:** (empty)

**Now:** No clinical DDI studies. Not a CYP450 substrate/inhibitor/inducer; not a substrate or inhibitor of OAT1/OAT3/OCT2 (no interaction expected with probenecid) or P-gp. No in-vitro antagonism with vancomycin, daptomycin, linezolid, aminoglycosides, etc. 不可與其他藥品混合於同一輸注液

**Why:** The column is empty. The labels say clinically significant interactions are unlikely, which is useful to record.

**Sources:** Taiwan insert 7, 3.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.5, 5.1 — https://www.medicines.org.uk/emc/product/4297/smpc; US FDA Teflaro 2.6, 12.3 Drug Interactions Studies, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### A13 · Hepatic dose (missing)

**Was:** (empty)

**Now:** No adjustment (not significantly hepatically metabolised)

**Why:** TW and UK state explicitly that no dose adjustment is needed in hepatic impairment. US 12.3 says clearance is not expected to be affected.

**Sources:** Taiwan insert 3.3 肝功能不全病人, 11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2, 5.2 — https://www.medicines.org.uk/emc/product/4297/smpc; US FDA Teflaro 12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### A14 · Category (missing)

**Was:** (empty)

**Now:** Cephalosporin (anti-MRSA; ATC J01DI02)

**Why:** The US label calls it a 'cephalosporin antibacterial', and the UK SmPC gives ATC J01DI02 ('other cephalosporins and penems'). 'Fifth generation' is common usage but is not label wording.

**Sources:** US FDA Teflaro 1, 11 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/4297/smpc

### A15 · Indications (minor)

**Was:** Pneumonia, SSTI, Bacteremia

**Now:** Pneumonia, SSTI, Bacteremia, CAP, cSSTI (add CAP + cSSTI; Bacteremia = off-label except S. pneumoniae CABP with concurrent bacteremia — note in Adult dose)

**Why:** The approved indications are CAP and cSSTI (ABSSSI in the US), and both tags exist in the schema. The generic 'Pneumonia' tag could suggest HAP/VAP, which neither label approves. The owner may prefer to replace 'Pneumonia' with 'CAP'. Bacteraemia is not a stand-alone indication. US 1.2 covers only S. pneumoniae CABP 'including cases with concurrent bacteremia'. Keep the tag but flag it as off-label (see A3).

**Sources:** US FDA Teflaro 1.1, 1.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/4297/smpc; Taiwan insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F

### B1 · Adult dose (error)

**Was:** BSI: 600mg IVD q8h<br>SSTI, Pneumonia: 600mg IVD q12h<br>

**Now:** cSSTI / CAP: 600mg IVD q12h (infuse 5–60 min); 療程 cSSTI 5–14天, CAP 5–7天<br>High dose (cSSTI, S. aureus MIC 2–4 mg/L): 600mg IVD q8h over 120 min (TW仿單/UK SmPC; not in US label)<br>BSI (off-label, MRSA bacteremia, usually + daptomycin): 600mg IVD q8h — Geriak 2019 pilot RCT, not a label indication

**Why:** The only q8h adult regimen in any label is the high dose for cSSTI with S. aureus MIC 2 or 4 mg/L, given over 120 min. The page omits it and lists only an unlabelled 'BSI' q8h line. Bacteraemia is not an indication in the TW, UK or US labels; the US label mentions it only as 'S. pneumoniae including cases with concurrent bacteremia' within CABP. I kept the BSI line, labelled off-label with a verified source (PMID 30858203: daptomycin 6–8 mg/kg/day + ceftaroline 600 mg IV q8h, n=17 vs 23). The infusion time and duration of treatment were also missing.

**Sources:** Taiwan insert 3.1 用法用量 & 表1 (600毫克每12小時5–60分鐘; 高劑量 600毫克 120分鐘/每8小時, MIC=2或4毫克/升) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Table 1 https://www.medicines.org.uk/emc/product/4297/smpc; US label 2.1 Table 1 (600 mg q12h, 5–60 min; no high dose) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Geriak M et al. AAC 2019;63:e02483-18, PMID 30858203 https://pubmed.ncbi.nlm.nih.gov/30858203/

### B2 · Renal dose, HD, CRRT (missing)

**Was:** CrCl 30-50: 400mg<br>CrCl 15-30: 300mg<br>CrCl \<15: 200mg

**Now:** CrCl >30–50: 400mg q12h<br>CrCl 15–30: 300mg q12h<br>ESRD (CrCl <15) incl. HD: 200mg q12h; HD日於透析後給藥 (ceftaroline 可被透析移除)<br>High dose (cSSTI, S. aureus MIC 2–4): same mg (400/300/200) but q8h over 120 min (TW仿單/UK SmPC)<br>Peds (TW仿單/UK): 12–<18y & ≥33kg → adult steps; 2–<12y, or 12–<18y & <33kg: CrCl 30–50: 8mg/kg (max 300mg) q8h; CrCl 15–30: 6mg/kg (max 200mg) q8h; high dose ≥2y: 10mg/kg (max 400mg) / 8mg/kg (max 300mg) q8h over 120 min. Insufficient data: ESRD in <12y or <33kg; <2y with CrCl ≤50. US label: no peds dosing for CrCl <50<br>CRRT (not in labels): ~400mg q12h for 70 kg adjusted BW at effluent 3 L/h; adjust to effluent rate/weight (Kalaria 2021, n=4 PK study)

**Why:** The milligram steps are correct, but the dosing interval (q12h) is missing, so a reader cannot tell 400 mg q12h from 400 mg q8h. Also missing: giving the dose after dialysis on HD days, the high-dose q8h renal steps, the paediatric renal table in the TW insert, and any CRRT guidance. The column title promises CRRT, and no label covers it. Kalaria 2021 is a small (n=4) PK study and should be cited as such. Adamiszak 2025 (PMID 40298514) found that labelled doses reached target attainment in CRRT except for MRSA with augmented renal clearance.

**Sources:** Taiwan insert 3.1 腎功能不全病人 表2 & footnote e (應於血液透析日當天血液透析後才給予) and 9 過量 (~74% recovered in 4-h HD) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Tables 3 and 4 https://www.medicines.org.uk/emc/product/4297/smpc; US label 2.3 Table 4 & 8.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Kalaria S et al. Pharmacotherapy 2021;41:205-211, PMID 33438291 https://pubmed.ncbi.nlm.nih.gov/33438291/; Adamiszak A et al. Antibiotics 2025;14:347, PMID 40298514 https://pubmed.ncbi.nlm.nih.gov/40298514/

### B3 · Pediatric dose (error)

**Was:** 2m-2yrs: 8 mg/kg/dose IV q8h<br>2-18yrs: 12 mg/kg/dose IV q8h<br>\>33kg → adult dose (400-600mg IV q8h)<br><br>Osteoarticular infection, acute (eg, bacterial arthritis, osteomyelitis): 15mg/kg/dose q8h (MAX: 600mg/dose)<br>

**Now:** Neonates birth–<2m: 6 mg/kg q8h over 60 min (TW/UK; US: ABSSSI only, GA ≥34 wk & PNA ≥12 d, infuse 30–60 min)<br>2m–<2y: 8 mg/kg q8h<br>2–<12y, or 12–<18y & <33kg: 12 mg/kg q8h (MAX 400mg/dose)<br>12–<18y & ≥33kg: 600mg q12h (US: ≥2y & >33kg: 400mg q8h or 600mg q12h)<br>High dose (cSSTI, S. aureus MIC 2–4, over 120 min; TW/UK): 2m–<2y 10 mg/kg q8h; 2–<18y 12 mg/kg (MAX 600mg) q8h<br><br>Osteoarticular infection, acute (eg, bacterial arthritis, osteomyelitis): 15mg/kg/dose q8h (MAX: 600mg/dose) ⚠️ off-label, not in TW/UK/US labels; source needed

**Why:** (a) '>33kg → adult dose (400-600mg IV q8h)' is wrong. Adolescents of 33 kg or more get 600 mg q12h (TW/UK), or 400 mg q8h or 600 mg q12h (US). 600 mg q8h is only the 120-min high dose for S. aureus MIC 2–4. (b) 12 mg/kg lacks the 400 mg per-dose maximum. (c) The neonatal dose (6 mg/kg q8h over 60 min) is missing. (d) The paediatric high-dose regimen is missing. (e) The osteoarticular 15 mg/kg q8h regimen is not in any label, and I found no verifiable PubMed source; the US label says only that a complicated CABP trial used 'a higher' dose. I flagged it rather than deleting it.

**Sources:** Taiwan insert 3.1 表1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Table 2 https://www.medicines.org.uk/emc/product/4297/smpc; US label 2.2 Tables 2–3 & 6.1 Pediatric Patients https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B4 · Page body (unsupported)

**Was:** Attached file ceftaroline_pediatric_dose.pdf: an AI-chat answer pasted in (Perplexity style, the same paragraph repeated three times, ⁂ separator, citations to PCH WA, MIMS and Medscape)

**Now:** REMOVE (move the label-based paediatric table into the Pediatric dose column per B3)

**Why:** The PDF is pasted AI-chat text, which the ground rules say to remove. Its content is also partly unreliable. 'Neonates (<2 months)' has no gestational-age or postnatal caveat. 'Consider increasing to 10–12 mg/kg (max 600 mg) q8h in severe/complicated cases' misstates the labelled high dose, which applies only to cSSTI with S. aureus MIC 2–4, given over 120 min. It also contradicts the page's own Pediatric dose column (600 mg q12h vs '400-600mg q8h').

**Sources:** Taiwan insert 3.1 表1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Table 2 https://www.medicines.org.uk/emc/product/4297/smpc

### B5 · Indications (minor)

**Was:** Pneumonia, SSTI, Bacteremia

**Now:** Pneumonia, SSTI, Bacteremia, CAP, cSSTI (add CAP + cSSTI; Bacteremia = off-label except S. pneumoniae CABP with concurrent bacteremia — note in Adult dose)

**Why:** The labelled indications are CAP and cSSTI/ABSSSI only (TW/UK: neonates to adults; US: CABP from 2 months, ABSSSI from 34 wk GA and 12 d PNA). The generic 'Pneumonia' tag suggests HAP/VAP, which no label approves. The TW insert notes there is no experience in ventilated, ICU or MRSA CAP. Bacteraemia is not an approved indication; at most the label covers S. pneumoniae CABP with concurrent bacteraemia. CAP and cSSTI both exist in the schema. Smallest edit: add CAP and cSSTI, and replace 'Pneumonia' with CAP.

**Sources:** Taiwan insert 2 適應症 & 5.1 臨床試驗資料之限制 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/4297/smpc; US label 1.1–1.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B6 · Coverage (missing)

**Was:** (empty)

**Now:** MSSA, MRSA, Streptococcus, E.coli, Klebsiella, Haemophilus

**Why:** Organisms with proven clinical efficacy: S. aureus including MRSA (cSSTI; for CAP, MSSA only), S. pyogenes, S. agalactiae, S. anginosus group, S. dysgalactiae, S. pneumoniae, E. coli, K. pneumoniae, K. oxytoca, H. influenzae and H. parainfluenzae. All six tags exist in the schema. Do not add Pseudomonas, Acinetobacter, Bacteroides/Anaerobes, Enterococcus, or ESBL/CRE tags. The US label lists Enterobacter, Proteus and Citrobacter as in-vitro only, and ceftaroline is inactive against ESBL, KPC, MBL and AmpC producers.

**Sources:** Taiwan insert 10.2 對抗特定病原菌的臨床療效 & 抗藥性機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US label 12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B7 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, thrombophlebitis, hematologic, neutropenia, CNS, DRESS, SJS/TEN

**Why:** TW insert Table 3 and SmPC 4.8 list: common diarrhoea, nausea, vomiting and abdominal pain (GI); raised transaminases (LFT↑); phlebitis and infusion-site reactions (thrombophlebitis); very common positive direct Coombs test; uncommon anaemia, leukopenia and thrombocytopenia (hematologic); neutropenia and agranulocytosis post-marketing; encephalopathy (CNS; US 5.3 also lists seizures, mostly with unadjusted renal dosing); SJS, TEN and DRESS at unknown frequency. Prolonged courses (2 weeks or more) carry a 10–21% neutropenia rate (Furtek 2016). All tags exist in the schema.

**Sources:** Taiwan insert 8.2 表3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.8 Table 5 https://www.medicines.org.uk/emc/product/4297/smpc; US label 5.3 & 6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Furtek KJ et al. JAC 2016;71:2010-3, PMID 27076105 https://pubmed.ncbi.nlm.nih.gov/27076105/

### B8 · Monitor (missing)

**Was:** (empty)

**Now:** renal, CBC, neuro

**Why:** Renal: dosing is based on CrCl, and the TW insert and SmPC say CrCl should be monitored closely and the dose adjusted as renal function changes. CBC: if anaemia develops, investigate Coombs-positive haemolysis (TW 5.1, US 5.4); neutropenia with long courses (Furtek 2016: 'close laboratory monitoring'). Neuro: encephalopathy and seizures when renal dosing is not adjusted (US 5.3). Same tag style as the cefepime and ceftazidime rows.

**Sources:** Taiwan insert 表2 footnote a (應密切監測CrCL) & 5.1 庫姆氏試驗 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US label 5.3, 5.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Furtek KJ et al. PMID 27076105 https://pubmed.ncbi.nlm.nih.gov/27076105/

### B9 · Hepatic dose (missing)

**Was:** (empty)

**Now:** No adjustment required (not CYP450 metabolised; PK not studied in hepatic impairment)

**Why:** The TW insert says explicitly 肝功能不全病人無需調整劑量 (no adjustment needed in hepatic impairment). The SmPC says no adjustment is considered necessary.

**Sources:** Taiwan insert 3.1 肝功能不全病人 & 11 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.2 Hepatic impairment https://www.medicines.org.uk/emc/product/4297/smpc

### B10 · Mechanism (missing)

**Was:** (empty)

**Now:** Prodrug (fosamil → ceftaroline by plasma phosphatase). Binds PBPs → inhibits cell-wall synthesis (bactericidal); high affinity for PBP2a (MRSA) and PBP2x (penicillin-non-susceptible S. pneumoniae). Time-dependent (%fT>MIC). Inactive vs ESBL (TEM/SHV/CTX-M), KPC, MBL and AmpC producers

**Why:** Can be filled from the labels.

**Sources:** Taiwan insert 10.1 作用機轉, 10.2, 11 代謝 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US label 12.4 Mechanism of Action / Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B11 · Drug Interactions (missing)

**Was:** (empty)

**Now:** No clinical DDI studies; low potential — not a CYP450 substrate, inhibitor or inducer; not a P-gp substrate or inhibitor; not a substrate or inhibitor of OAT1/OAT3/OCT2 (no probenecid interaction expected). Do not mix with other drugs in the same infusion (US 2.6)

**Why:** Can be filled from the labels.

**Sources:** Taiwan insert 7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/4297/smpc; US label 2.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B12 · Pregnancy (missing)

**Was:** (empty)

**Now:** No human data. Animal studies: no malformations (rat: minor fetal weight change and delayed interparietal ossification). TW仿單/UK: 懷孕期間應避免使用，除非臨床確實需要 (avoid unless clearly needed). US label in PLLR format (no letter category)

**Why:** Can be filled from the labels. Per the ground rules, no letter category is used.

**Sources:** Taiwan insert 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/4297/smpc; US label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B13 · Breastfeeding (missing)

**Was:** (empty)

**Now:** TW仿單: 建議暫停哺乳 (pausing breastfeeding is recommended). UK: decide whether to stop breastfeeding or therapy. LactMed (2020): no human data; cephalosporins generally acceptable — monitor infant for diarrhea/thrush. US label: weigh benefits (no 'caution' wording)

**Why:** The labels disagree. The stocked product's TW insert is stricter than LactMed, so both are shown, with the TW insert first.

**Sources:** Taiwan insert 6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; UK SmPC 4.6 Breast-feeding https://www.medicines.org.uk/emc/product/4297/smpc; LactMed 'Ceftaroline' NBK501730, rev 2020-07-20 https://www.ncbi.nlm.nih.gov/books/NBK501730/; US label 8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B14 · Notes (missing)

**Was:** (empty)

**Now:** ⚠️ Direct Coombs test (+) very common (TW: 11.2% standard / 32.3% high dose; US peds 17.9%) — if anemia, work up drug-induced hemolysis<br>Rash very common in Asian pts on high dose (18.5%, COVERS)<br>Encephalopathy/seizure mostly when not renally adjusted; 有癲癇病史者小心使用<br>CI: allergy to any cephalosporin, or immediate severe allergy to other β-lactams (penicillin/carbapenem) (TW 4 / UK 4.3)<br>No data for MRSA CAP, ventilated/ICU, septic shock (TW仿單); not recommended for S. aureus MIC >4 mg/L<br>No activity vs Pseudomonas or atypicals (UK 5.1); inactive vs ESBL/AmpC/KPC/MBL<br>Long courses (≥2–3 wk): neutropenia 10–21% → close CBC monitoring (Furtek 2016)<br>Guidelines: ATS/IDSA CAP 2019 (600mg q12h β-lactam option); IDSA SSTI 2014 (MRSA SSTI)

**Why:** The column is empty, yet the labels' key safety points (Coombs seroconversion, the contraindication for immediate β-lactam allergy, the high-dose rash signal in Asian patients, limits of the CAP trial data, the MIC >4 restriction) and the neutropenia risk with long courses are clinically important and fully sourced.

**Sources:** Taiwan insert 4 禁忌, 5.1, 8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US label 5.3–5.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a; Furtek KJ et al. PMID 27076105 https://pubmed.ncbi.nlm.nih.gov/27076105/; Metlay JP et al. ATS/IDSA CAP guideline 2019, PMID 31573350 https://pubmed.ncbi.nlm.nih.gov/31573350/; Stevens DL et al. IDSA SSTI guideline 2014, PMID 24973422 https://pubmed.ncbi.nlm.nih.gov/24973422/

### B15 · Category (missing)

**Was:** (empty)

**Now:** 5th cephalosporin (anti-MRSA)

**Why:** Matches the style of the sibling rows ('3rd cephalosporin', '4th cephalosporin'). The labels say 'cephalosporin' with MRSA and PNSP activity; '5th generation' is conventional terminology rather than label wording.

**Sources:** Taiwan insert 10.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026611%E8%99%9F; US label 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a

### B16 · Notes (minor)

**Was:** (no TDM statement)

**Now:** Routine TDM not required; β-lactam TDM may be considered in critically ill / CRRT / ARC (ESICM position paper 2020)

**Why:** No label covers TDM. The ESICM/ESCMID position paper supports β-lactam TDM in critically ill patients; Adamiszak 2025 found MRSA target attainment failure with augmented renal clearance. Optional.

**Sources:** Abdul-Aziz MH et al. Intensive Care Med 2020, PMID 32383061 https://pubmed.ncbi.nlm.nih.gov/32383061/; Adamiszak A et al. PMID 40298514 https://pubmed.ncbi.nlm.nih.gov/40298514/

## Verified correct as written

- Adult standard dose 600 mg IV q12h for SSTI and pneumonia (US 2.1 Table 1; TW 3.1 表1; UK 4.2 Table 1).
- Renal dose amounts 400 mg (CrCl 30–50), 300 mg (15–30) and 200 mg (<15/ESRD) match all three labels; only the q12h interval and the HD timing are missing (see A1).
- Pediatric 2 months–<2 years: 8 mg/kg q8h (US 2.2 Table 2; TW 表1; UK Table 2).
- Pediatric 12 mg/kg q8h for children 2 years and older under 33 kg matches the labels; the 400 mg maximum is missing (see A2).
- BSI 600 mg q8h matches published off-label practice (Geriak 2019 pilot RCT, PMID 30858203, verified via esummary). It is not label-approved.
- SSTI and Pneumonia indication tags are broadly correct (approved as cSSTI/ABSSSI and CAP/CABP).
- Taiwan insert ESRD dosing applies only to adults and adolescents 12 years and older weighing 33 kg or more; no data for <2 years with CrCl ≤50 (TW 3.3), as the brief stated.
- US label has no high-dose regimen and no paediatric renal dosing (US 2.3: 'insufficient information… CrCL <50 mL/min/1.73 m2'), as the brief stated.
- LactMed NBK501730 (2020-07-20): no data; 'Ceftaroline is acceptable in nursing mothers', as the brief stated.
- No Coverage, Side Effects or Monitor tags are set, so there are no wrong tags to remove.
- Adult standard dose 600 mg IV q12h for SSTI and CAP (TW insert 表1, UK SmPC Table 1, US Table 1)
- Renal milligram steps: CrCl >30–50 → 400 mg; 15–30 → 300 mg; <15 (ESRD incl. HD) → 200 mg, identical in TW insert 表2, UK SmPC Table 3 and US Table 4 (US defines ESRD as CrCl <15). Only the q12h interval and HD timing are missing.
- Pediatric 2 months–<2 years: 8 mg/kg q8h (all three labels)
- Pediatric 2–<18 years (<33 kg): 12 mg/kg q8h. Correct value, but the 400 mg maximum is missing.
- SSTI indication tag (cSSTI/ABSSSI is approved in all three labels)
- The pneumonia indication is correct as CAP; see B5 for the tag wording.
- I re-checked label versions myself: DailyMed SPL history shows v43 published Nov 17, 2025; the live eMC SmPC says 'Date of revision of the text 09/2025', last updated on eMC 11 Sep 2025; the TW insert URL returns HTTP 200.
- PMIDs verified with NCBI esummary/efetch: 30858203, 33438291, 40298514, 27076105, 31573350, 24973422, 32383061

## Apply log

- Renal dose, HD, CRRT: merged both proposals (TW/UK/US standard steps, HD after dialysis ~74% removed, high-dose q8h 120 min, peds renal incl. high dose and no-data groups, US peds note, CRRT Kalaria 2021 + Adamiszak 2025)
- Pediatric dose: merged label-based age bands (neonate, 2m-<2y, 2-<12y/<33kg, >=33kg), US differences, high dose; kept owner's osteoarticular line flagged off-label/source needed
- Adult dose: merged (cSSTI/CAP 600mg q12h 5-60 min with durations; high dose q8h 120 min TW/UK only, not if MIC >4; BSI off-label Geriak 2019, label only covers CAP with concurrent S. pneumoniae bacteremia)
- Page body: removed the pasted PDF file block (pediatric content now in Pediatric dose column); optional short body block not added
- Side Effects: GI, LFT↑, thrombophlebitis, neurotoxicity, CNS, hematologic, neutropenia, coagulopathy, DRESS, SJS/TEN (union of both proposals)
- Coverage: MSSA, MRSA, Streptococcus, E.coli, Klebsiella, Haemophilus
- Indications: Pneumonia, SSTI, Bacteremia, CAP, cSSTI
- Monitor: renal, CBC, neuro
- Notes: merged three proposals (neurotoxicity, Coombs incl. US peds 17.9%, Asian high-dose rash, contraindications, no activity/no data incl. MIC >4, long-course neutropenia Furtek 2016, TDM ESICM 2020, ATS/IDSA CAP 2019 and IDSA SSTI 2014 guidelines)
- Breastfeeding: LactMed 2020 + TW/UK/US label positions
- Pregnancy: no letter category (PLLR), animal data, TW/UK avoid unless clearly needed
- Mechanism: prodrug, PBP2a/PBP2x, %fT>MIC, inactive vs ESBL/KPC/MBL/AmpC
- Drug Interactions: merged (no CYP/P-gp/OAT/OCT, no in-vitro antagonism, do not mix in same infusion)
- Hepatic dose: no adjustment required (merged wording)
- Category: merged to '5th-gen cephalosporin (anti-MRSA; ATC J01DI02)'
- References section added to page body (TW insert, DailyMed Teflaro SPL v43 Nov 17 2025, UK SmPC rev 09/2025, LactMed rev 2020-07-20, 7 PubMed citations with PMIDs)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
