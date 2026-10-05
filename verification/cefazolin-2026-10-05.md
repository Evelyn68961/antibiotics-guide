# New entry: Cefa (Cefazolin)

- **Notion entry:** [Cefa (Cefazolin)](https://app.notion.com/3f0c496dfff181a38b60d71fe89933cd). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** CEF01 (Cefa inj 1 g)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/cefazolin.json` (plus any Taiwan insert text files)

## Product and sources

Hospital product CEF01: 【b4】Cefa 針 1 g/Vial = "信東" 信華注射劑 / Cefa Injection (cefazolin sodium 1 g vial, about 2 mEq Na/g), 信東生技 (Sinphar). TFDA licence 衛署藥製字第029447號 (licence also covers 0.5 g and 2 g vials; valid to 118-02-17), NHI AB29447209, ATC J01DB04. Routes on the TW insert: IM, IV push, IV infusion. I re-checked the hospital P4 page (https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=CEF01) and it confirms this; it is the only stocked dosage form. Labels used: (1) TW 仿單, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F (online text has no revision date; latest printed insert in the history list is 印刷版次5, 108-04-24). (2) US FDA label, Cefazolin for Injection (Henry Schein repackaging Hikma vials), DailyMed setid 922fb1a1-ad4c-4a12-8d5d-00fe13af18e8 v7, older non-PLR format, label text "Revised: June 2020". Its adult dose table exists only as an image (Image1.jpg), which I read. (3) For PLR-only content (pregnancy risk summary, 3 g dose for ≥120 kg, contraindication wording) I also used a current PLR US label: Cefazolin in Dextrose Injection (Baxter), setid d91a8d13-99a0-4d87-88dc-71cbd37922b4, published Sep 17, 2026. (4) UK SmPC Cefazolin 2 g powder (ACS Dobfar/Bowmed, rev 22/04/2026). (5) LactMed NBK501303 (rev 2024-11-15). The Notion page was created 2026-10-05 and holds only the title and Category; every other column and the page body are empty.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="green">`IV`</span> <span color="green">`IM`</span> (院內 信華 Cefa 1 g vial)<br>US label (CrCl ≥55): moderate–severe 0.5–1 g q6–8h; mild G(+) cocci 250–500 mg q8h; acute uncomplicated UTI 1 g q12h; pneumococcal pneumonia 500 mg q12h; severe/life-threatening (endocarditis, septicemia) 1–1.5 g q6h (rarely up to 12 g/day)<br>UK SmPC: 1–2 g/day ÷ 2–3 doses; moderately susceptible organisms 3–4 g/day ÷ 3–4; severe infection up to 6 g/day (q6–8h)<br>TW 仿單: 成人一日量 1 g，依症狀、年齡酌量增減<br>Surgical prophylaxis (label): 1 g IV/IM 0.5–1 h before incision (TW/UK/US; US PLR label: 1–2 g, ≥120 kg: 3 g); extra 0.5–1 g during surgery if ≥2 h; 0.5–1 g q6–8h for 24 h post-op (US label allows 3–5 days after open-heart surgery/prosthetic arthroplasty). Guideline: 2 g IV within 60 min before incision (3 g if ≥120 kg), redose q4h intra-op, stop ≤24 h (ASHP/IDSA/SIS/SHEA 2013, PMID 23327981)<br>給藥: IV push over 3–5 min; single dose >1 g → IV infusion over 30–60 min (TW/UK); IM into a large muscle; a solution reconstituted with lidocaine is IM only, never IV<br>MSSA bacteremia/endocarditis (guideline, not label): 2 g IV q8h (6 g/day, within the UK maximum); native-valve IE 6 wk (AHA 2015, PMID 26373316)

**Why:** The column is empty. The labels give full adult dosing. The US label dose table is an image in the SPL (Image1.jpg), so the source brief left it out; I read the image directly. The TW insert gives only '成人一日量1g'. The 3 g dose for ≥120 kg appears only in the PLR-format US label (Baxter), not in the fetched Henry Schein label. The hospital's 2 g q8h is not in any label, so it should be labelled as guideline-based.

**Sources:** US FDA label (Henry Schein/Hikma) DOSAGE AND ADMINISTRATION 'Usual Adult Dosage' table (Image1.jpg) + Perioperative Prophylactic Use a–c – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; US FDA PLR label Cefazolin in Dextrose (Baxter) §2.3 Table 3: 'Greater than or equal to 120 kg 3 grams' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4; UK SmPC §4.2 Posology ('1 g to 2 g cefazolin per day, divided into 2-3 equal doses ... up to 6 g per day') and §6.6 ('Single doses exceeding 1 g should be given as an intravenous infusion over 30 to 60 minutes') – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 信華注射劑 §3.1 用法用量 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A2 · Renal dose, HD, CRRT

Give the loading dose first, then (TW 仿單 §3.3 has no renal table → US label; UK SmPC adult values are the same):<br>CrCl ≥55: full dose<br>CrCl 35–54: full dose, interval ≥8 h (UK: q8h)<br>CrCl 11–34: ½ usual dose q12h<br>CrCl ≤10: ½ usual dose q18–24h<br>Peds (after loading dose): CrCl 40–70: 60% of daily dose ÷ q12h; 20–40: 25% ÷ q12h; 5–20: 10% q24h (US; UK same for 20–40 and 5–20)<br><br>HD: no label regimen (UK: 'depends on dialysis conditions'). Dialysable – give dose after HD: 15–20 mg/kg IV after each session (Sowinski 2001, PMID 11273877) or 1 g IV post-HD (750 mg if <50 kg) (Fogel 1998, PMID 9740155)<br>PD: label gives PK only (intraperitoneal 50 or 150 mg/L → serum ≈10 or 30 mcg/mL)<br>CRRT: no label recommendation; see Hoff 2020 (PMID 31342772) – dose to be confirmed from full text<br>⚠ Seizures if the dose is not reduced in renal impairment

**Why:** The column is empty. The TW insert §3.3 says '目前尚無資訊', so under the ground rules the US label table applies, and the UK SmPC table is identical. Both labels also have a pediatric renal table, which the source brief left out. No label gives an HD or CRRT regimen. I verified PMIDs 12561661 (Ahern JW, Am J Health Syst Pharm 2003;60:178-81, 'Cefazolin dosing protocol for patients receiving long-term hemodialysis') and 31342772 (Hoff BM, Ann Pharmacother 2020;54:43-55) with esummary. The abstracts give no cefazolin dose numbers and the full texts were not reachable, so I propose no specific HD/CRRT dose numbers.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION 'Dosage Adjustment for Patients with Reduced Renal Function' and pediatric renal paragraph; CLINICAL PHARMACOLOGY (peritoneal dialysis); PRECAUTIONS (seizures) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC §4.2 renal table and 'In haemodialysis patients, the treatment schedule depends on the dialysis conditions' – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §3.3 特殊族群用法用量: 目前尚無資訊 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; Ahern JW et al. Am J Health Syst Pharm 2003;60:178-81, PMID 12561661 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/12561661/; Hoff BM et al. Ann Pharmacother 2020;54:43-55, PMID 31342772 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/31342772/

### A3 · Hepatic dose

No adjustment (no label recommendation; not metabolised, excreted unchanged in urine)<br>Hepatic impairment ↑ risk of PT prolongation → monitor PT/INR, give vitamin K if needed

**Why:** The column is empty. No label gives a hepatic dose. The PK section shows no hepatic metabolism. The US label and the TW insert both name hepatic impairment as a risk factor for a fall in prothrombin activity.

**Sources:** UK SmPC §5.2 'Cefazolin is not metabolised' – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA label CLINICAL PHARMACOLOGY ('excreted unchanged in the urine') and PRECAUTIONS ('Those at risk include patients with renal or hepatic impairment...') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; TW 仿單 §5.1 凝血酶原時間延長 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A4 · Pediatric dose

≥1 month: 25–50 mg/kg/day ÷ 3–4 doses (US; UK ÷ 2–4, q6/8/12h); severe infection: up to 100 mg/kg/day ÷ 3–4<br>TW 仿單: 20–50 mg/kg/day ÷ 2, IM<br>Surgical prophylaxis 10–17 y (US PLR label): \<50 kg 1 g, ≥50 kg 2 g, 0.5–1 h before incision<br>Renal impairment: see pediatric renal table<br>Premature infants & \<1 month: not recommended (safety not established – US/UK/TW)

**Why:** The column is empty. All three labels agree that cefazolin is not recommended under 1 month of age. The US and UK labels give a maximum of 100 mg/kg/day. The pediatric prophylaxis dosing appears only in the PLR-format US label. The hospital's 150 mg/kg/day is beyond every label (see hospital issues), so it is not proposed.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION 'Pediatric Dosage' and PRECAUTIONS 'Pediatric Use' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; US FDA PLR label (Baxter) §2.3 pediatric perioperative prophylaxis (10 to 17 years: less than 50 kg 1 gram; ≥50 kg 2 grams) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4; UK SmPC §4.2 Paediatric population – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §3.1 and §5.1 小兒使用 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A5 · Indications

Surgical prophylaxis, SSTI, Osteoarthritis, UTI, Pneumonia, Sepsis, Bacteremia, Endocarditis

**Why:** The column is empty. Each tag maps to a US or UK label indication: respiratory tract → Pneumonia; urinary tract → UTI; skin and skin structure → SSTI; bone and joint → Osteoarthritis (the tag the owner uses for bone/joint, as on Cefmore); septicemia → Sepsis/Bacteremia; endocarditis (S. aureus, group A strep) → Endocarditis; perioperative prophylaxis → Surgical prophylaxis. Biliary tract and genital infections (prostatitis, epididymitis) are also on the US label, but no tag fits them: IAI would wrongly suggest anaerobic cover and 'Pelvic' means female PID. They are listed in Notes instead (A13).

**Sources:** US FDA label INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC §4.1 (skin/soft tissue, bone/joint, perioperative prophylaxis) – https://www.medicines.org.uk/emc/product/102464/smpc

### A6 · Coverage

MSSA, Streptococcus, E.coli, Proteus, Klebsiella

**Why:** The column is empty. US label Microbiology lists S. aureus, S. epidermidis, S. agalactiae, S. pneumoniae, S. pyogenes, E. coli and P. mirabilis. Methicillin-resistant staphylococci are uniformly resistant. Indole-positive Proteus, Enterobacter, Morganella, Providencia, Serratia and Pseudomonas are resistant. Klebsiella appears in the US indications (respiratory tract, UTI, biliary, septicemia) and in the TW insert but not in the US Microbiology list, so it should carry a 'check susceptibility' caveat in Notes. Haemophilus is not proposed: it is in the US respiratory-tract indication, but the UK SmPC lists H. influenzae as 'acquired resistance may pose a problem' and the US Microbiology list omits it. Do NOT tag MRSA, MRSE, Enterococcus, Pseudomonas, Enterobacter, Serratia or Anaerobes.

**Sources:** US FDA label CLINICAL PHARMACOLOGY > Microbiology > Antimicrobial Activity; INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC §5.1 Microbiological susceptibility (commonly susceptible: S. aureus methicillin-sensitive; inherently resistant: Enterobacter, Serratia, Citrobacter, P. aeruginosa, MRSA...) – https://www.medicines.org.uk/emc/product/102464/smpc

### A7 · Side Effects

GI, LFT↑, hematologic, neutropenia, leukopenia, thrombocytopenia, SJS/TEN, DRESS, coagulopathy, CNS, thrombophlebitis, AKI

**Why:** The column is empty. Label sources for each tag: GI = diarrhea, nausea, vomiting, pseudomembranous colitis/CDAD. LFT↑ = transient AST/ALT/ALP rise, hepatitis. Hematologic = neutropenia, leukopenia, thrombocytopenia. SJS/TEN = US, UK and TW. DRESS = TW §5.1 SCAR and §8.3. Coagulopathy = fall in prothrombin activity. CNS = seizures with excessive doses in renal impairment, CNS toxicity after intrathecal use. Thrombophlebitis = injection-site phlebitis. AKI = increased BUN/creatinine, renal failure, interstitial nephritis. Every tag exists in the schema. (AGEP and Kounis syndrome have no option and go to Notes.)

**Sources:** US FDA label ADVERSE REACTIONS; PRECAUTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC §4.8 (TEN, SJS, interstitial nephritis, seizures, Kounis syndrome, hyper/hypoglycaemia) – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §5.1 嚴重皮膚不良反應(SCAR: AGEP, DRESS, SJS, TEN) and §8.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A8 · Monitor

renal, PT/INR, CBC

**Why:** The column is empty. Renal: the UK SmPC §4.4 recommends monitoring renal function, especially in severely ill patients on maximum doses or with nephrotoxic co-medication, and the US Geriatric Use section says monitoring renal function 'may be useful'. PT/INR: the US Precautions say 'Prothrombin time should be monitored in patients at risk', and the TW insert says INR should be monitored regularly in at-risk patients. CBC: blood dyscrasias are labelled, but no label mandates routine CBC; suggest it only for prolonged courses. LFT is optional for prolonged therapy and is not label-mandated.

**Sources:** UK SmPC §4.4 Renal impairment / Coagulation disorders – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA label PRECAUTIONS General & Geriatric Use – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; TW 仿單 §5.1 凝血酶原時間延長 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A9 · Mechanism

Bactericidal; binds PBPs → blocks transpeptidation of peptidoglycan → cell-wall synthesis inhibited → lysis. Time-dependent (%fT>MIC). Resistance: β-lactamases (incl. ESBL), PBP changes (MRSA), reduced access

**Why:** The column is empty. Content taken from the label pharmacodynamics and microbiology sections.

**Sources:** UK SmPC §5.1 Mechanism of action, PK/PD relationship, Mechanisms of resistance – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA label CLINICAL PHARMACOLOGY > Microbiology (Mechanism of Action; Resistance) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8

### A10 · Drug Interactions

Probenecid (↓ renal tubular secretion → ↑/prolonged cefazolin levels; US PLR label: co-administration not recommended)<br>Oral anticoagulants – warfarin (↑INR/bleeding; monitor INR) (UK)<br>Nephrotoxic drugs – aminoglycosides, loop diuretics, colistin/polymyxin B, contrast, ciclosporin/tacrolimus etc. (monitor renal function) (UK)<br>Bacteriostatic antibiotics – tetracyclines, sulphonamides, erythromycin, chloramphenicol (possible in-vitro antagonism) (UK)<br>Lidocaine diluent: IM only; check lidocaine contraindications<br>Lab: false-positive urine glucose (Benedict/Fehling/Clinitest; enzyme tests unaffected); positive direct/indirect Coombs (also in neonates of treated mothers)

**Why:** The column is empty. Probenecid is on the US, UK and TW labels. The other interactions are from the UK SmPC §4.5. The lab interferences are on all three labels.

**Sources:** US FDA label PRECAUTIONS 'Drug Interactions' and 'Drug/Laboratory Test Interactions' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; US FDA PLR label (Baxter) §7 'Co-administration of probenecid ... is not recommended' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4; UK SmPC §4.5 Interaction – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §5.1 藥物交互作用/藥物對實驗室檢驗之影響 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A11 · Pregnancy

No FDA letter category (retired). US PLR label: decades of published cohort/case data with cephalosporins incl. cefazolin have not established a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; crosses placenta (cord ≈ ¼–⅓ of maternal level at C-section); no harm in rat/mouse/rabbit studies.<br>UK SmPC: insufficient experience; use only after careful benefit–risk assessment, esp. 1st trimester

**Why:** The column is empty. The fetched Henry Schein label is in the old format and still prints 'Pregnancy Category B'. Under the ground rules that is not written as current, so the current PLR US risk summary is used instead. The UK SmPC is more cautious, so both are shown.

**Sources:** US FDA PLR label (Baxter) §8.1 Pregnancy Risk Summary – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4; US FDA label PRECAUTIONS 'Labor and Delivery' (cord blood ¼–⅓ of maternal) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC §4.6 Pregnancy – https://www.medicines.org.uk/emc/product/102464/smpc

### A12 · Breastfeeding

Acceptable – low milk levels (≈0.75 mg/L 2 h after 1 g IV; ≈1.25–1.5 mg/L 2–4 h after 2 g IV); not expected to harm breastfed infants; monitor infant for diarrhoea/thrush (LactMed 2024). UK SmPC: if infant develops diarrhoea/candidiasis, stop breastfeeding or stop cefazolin. US: present in very low concentrations – caution

**Why:** The column is empty. LactMed is the designated source for breastfeeding. Its summary says 'Cefazolin is acceptable in nursing mothers', and it reports milk levels of 0.75 mg/L (1 g IV) to a 1.51 mg/L peak (2 g IV).

**Sources:** LactMed Cefazolin NBK501303 (rev 2024-11-15), Summary of Use during Lactation & Drug Levels – https://www.ncbi.nlm.nih.gov/books/NBK501303/; UK SmPC §4.6 Breast-feeding – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA label PRECAUTIONS 'Nursing Mothers' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8

### A13 · Notes

禁忌 Contraindication: cefazolin/cephalosporin allergy; prior severe (anaphylactic) reaction to other β-lactams (UK/TW; US PLR: immediate hypersensitivity to cephalosporins, penicillins or other β-lactams). Penicillin allergy: cross-reactivity up to 10% (US)<br>TW 仿單 advises skin test before use (使用本劑為防止休克宜先施行皮膚試驗); US/UK labels have no such statement<br>Not for intrathecal use (severe CNS toxicity/seizures) (UK/TW); low CSF penetration – not for meningitis (UK 5.2)<br>Also US-labelled: biliary tract and genital (prostatitis, epididymitis) infections<br>Inactive vs MRSA/MRSE, Enterococcus, Pseudomonas, Enterobacter/Serratia/Citrobacter (inducible AmpC), indole+ Proteus, ESBL producers. UK SmPC 5.1 lists K. pneumoniae and P. mirabilis as inherently resistant (conflicts with US/TW labels) – check local antibiogram; H. influenzae: acquired resistance (UK)<br>Colorectal surgery: add anti-anaerobic agent (UK 4.1)<br>Na ≈ 48 mg (2.1 mEq) per g; consider in HF/HTN/Na restriction<br>Other label warnings: CDAD; SCAR incl. AGEP (TW); Kounis syndrome (UK)

**Why:** The column is empty. These clinically important label items have no column of their own. AGEP and Kounis syndrome have no Side Effects option. The TW skin-test sentence is in the hospital-stocked product's insert and is noted for completeness; the US and UK labels do not contain it.

**Sources:** UK SmPC §4.1, §4.3, §4.4, §5.1, §5.2 – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA label DESCRIPTION (48 mg sodium/g), CONTRAINDICATIONS, WARNINGS, INDICATIONS AND USAGE, Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; US FDA PLR label (Baxter) §4.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4; TW 仿單 §4 禁忌, §5.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### A14 · Page body

## References<br>- Taiwan 仿單 信華注射劑 Cefa Injection 衛署藥製字第029447號 (§3.1, §3.3, §4, §5.1, §8.3, §10.1) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F<br>- US FDA label, Cefazolin for Injection USP (Henry Schein/Hikma), DailyMed v7 (2026) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8<br>- US FDA label (PLR), Cefazolin in Dextrose Injection (Baxter) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4<br>- UK SmPC Cefazolin 2 g powder (rev. 22/04/2026) – https://www.medicines.org.uk/emc/product/102464/smpc<br>- LactMed: Cefazolin, NBK501303 (rev. 2024-11-15) – https://www.ncbi.nlm.nih.gov/books/NBK501303/<br>- Bratzler DW et al. Clinical practice guidelines for antimicrobial prophylaxis in surgery. Am J Health Syst Pharm 2013;70:195-283. PMID 23327981<br>- Baddour LM et al. Infective endocarditis in adults (AHA scientific statement). Circulation 2015;132:1435-86. PMID 26373316<br>- Sowinski KM et al. Cefazolin dialytic clearance by high-efficiency and high-flux hemodialyzers. Am J Kidney Dis 2001;37:766-76. PMID 11273877<br>- Fogel MA et al. Cefazolin in chronic hemodialysis patients. Am J Kidney Dis 1998;32:401-9. PMID 9740155<br>- Hoff BM et al. Antibiotic dosing for critically ill adults receiving IHD, PIRRT and CRRT. Ann Pharmacother 2020;54:43-55. PMID 31342772

**Why:** The page body is blank. Other entries end with a sourced References list, and adding one keeps every claim traceable. No monograph text is needed.

**Sources:** Existing entry style, e.g. Cefmore (Cefoxitin) References section – https://app.notion.com/25bc496dfff1809f8090ff1b6d153a82

### B1 · Adult dose

<span color="green">`IV`</span> <span color="green">`IM`</span> (信華 Cefa 1 g vial; TW 仿單 allows IV and IM)<br>IV push over 3-5 min; single dose >1 g → IV infusion over 30-60 min (TW 仿單; UK: >1 g as infusion)<br>US label (CrCl ≥55): moderate-severe 0.5-1 g q6-8h; mild Gram(+) cocci 250-500 mg q8h; acute uncomplicated UTI 1 g q12h; pneumococcal pneumonia 500 mg q12h; severe/life-threatening (endocarditis, septicemia) 1-1.5 g q6h (rarely up to 12 g/day)<br>UK SmPC: 1-2 g/day in 2-3 doses; moderately sensitive organisms 3-4 g/day in 3-4 doses; severe infection up to 6 g/day (q6-8h)<br>TW 仿單: 通常成人一日量 1 g，依症狀、年齡酌量增減<br>MSSA native-valve endocarditis (guideline, not label): 2 g IV q8h (6 g/24h) × 6 wk (AHA 2015)<br>Surgical prophylaxis: 2 g IV within 60 min before incision (3 g if ≥120 kg); redose q4h intra-op; stop <24 h (ASHP/IDSA/SIS/SHEA 2013). US label: 1-2 g (≥120 kg: 3 g, Baxter PLR) 0.5-1 h pre-op; +0.5-1 g intra-op if ≥2 h; 0.5-1 g q6-8h for 24 h post-op (may continue 3-5 days after open-heart surgery/prosthetic arthroplasty). UK SmPC: 1 g 30-60 min pre-op (+0.5-1 g if ≥2 h)<br>Lidocaine-reconstituted solution: IM only, never IV

**Why:** The column is empty. The adult treatment doses are in the US PLR label's Table 1, and the 2 g/3 g prophylaxis dose is in the current label's Table 3 (1-2 g) and ASHP 2013. The Henry Schein label in the brief prints only the prophylaxis text; its adult treatment table is an image, so its numbers cannot be checked from that label. Use the Civica PLR label instead. The TW insert for the stocked product gives only 1 g/day as the usual adult dose and allows both IM and IV. The UK SmPC gives a lower range (1-2 g/day), with up to 6 g/day for severe infection. The hospital's 2 g q8h treatment regimens come from guidelines (AHA 2015 MSSA IE: 6 g/24 h in 3 doses). They fit inside the US label's 12 g/day ceiling, but they need the guideline citation, not the hospital site. Notes: the 1 g vial can be given IM (TW insert); IM pain is listed in the labels. I could not find the owner's existing IM tag colour, so match it if one exists.

**Sources:** US FDA PLR label, Civica Cefazolin for Injection, §2.1 Table 1 and §2.3 Table 3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; US FDA label, Henry Schein v7, DOSAGE AND ADMINISTRATION – Perioperative Prophylactic Use (1 g IV/IM ½-1 h before surgery) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC Cefazolin 2 g §4.2 Posology (1-2 g/day; 3-4 g/day; up to 6 g/day) – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 信華注射劑 衛署藥製字第029447號 §3.1 用法用量 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; Baddour LM et al. AHA Scientific Statement IE 2015, Circulation 132:1435-86, PMID 26373316 (verified esummary) – https://pubmed.ncbi.nlm.nih.gov/26373316/; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 (verified) – https://pubmed.ncbi.nlm.nih.gov/23327981/

### B2 · Renal dose, HD, CRRT

Initial loading dose appropriate to infection severity, then (TW 仿單 §3.3 目前尚無資訊 → US label; UK SmPC same bands):<br>CrCl ≥55: usual dose<br>CrCl 35-54: usual dose q8h or longer<br>CrCl 11-34: ½ usual dose q12h<br>CrCl ≤10: ½ usual dose q18-24h<br>Peds renal: see Pediatric dose<br>HD (no label dose; UK: 'depends on dialysis conditions'): 15-20 mg/kg IV after each HD session (PK simulation, Sowinski 2001, PMID 11273877) or 1 g IV post-HD (750 mg if <50 kg) (Fogel 1998, PMID 9740155)<br>PD peritonitis: intraperitoneal per ISPD 2022 (intermittent 15-20 mg/kg/day in long dwell; continuous LD 500 mg/L, MD 125 mg/L) (PMID 35264029) [guideline table not re-verified – confirm]<br>CRRT: no label recommendation; reviews suggest 1-2 g IV q12h (Trotman 2005 PMID 16163635; Heintz 2009 PMID 19397464) [full-text values not verified – owner to confirm]; consider TDM in critically ill<br>⚠ Seizures if dose not reduced in renal impairment (US label 5.2)

**Why:** The column is empty. I checked the label table myself. US PLR Table 4 gives 35-54: 'Recommended dose every 8 hours or longer'; 11-34: 'Half of recommended dose every 12 hours'; ≤10: 'Half … every 18 to 24 hours', all after a loading dose. The Henry Schein label and UK SmPC §4.2 give the same values. TW insert §3.3 says 目前尚無資訊, so under the ground rules the US label applies. No label gives an HD dose. I verified the Sowinski and Fogel HD doses from their PubMed abstracts. I took the ISPD and CRRT doses from the guideline/review tables, which I could not open here (only abstracts and esummary were reachable), so flag them for confirmation before publishing.

**Sources:** US FDA PLR label §2.4 Table 4 & §5.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; UK SmPC §4.2 'Cefazolin maintenance therapy in patients with renal impairment' table + 'In haemodialysis patients…' – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §3.3 特殊族群用法用量 (目前尚無資訊) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; Sowinski KM et al. Am J Kidney Dis 2001;37:766-76, PMID 11273877 (abstract: '15 or 20 mg/kg after each hemodialysis session') – https://pubmed.ncbi.nlm.nih.gov/11273877/; Fogel MA et al. Am J Kidney Dis 1998;32:401-9, PMID 9740155 (abstract: '1 g intravenous dose postdialysis (750 mg in patients weighing <50 kg)') – https://pubmed.ncbi.nlm.nih.gov/9740155/; Li PK et al. ISPD peritonitis guideline 2022, Perit Dial Int 42:110-153, PMID 35264029 – https://pubmed.ncbi.nlm.nih.gov/35264029/; Trotman RL et al. Clin Infect Dis 2005;41:1159-66, PMID 16163635 – https://pubmed.ncbi.nlm.nih.gov/16163635/; Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464 – https://pubmed.ncbi.nlm.nih.gov/19397464/

### B3 · Hepatic dose

No specific hepatic dose in US/UK labels (not metabolised; excreted unchanged in urine). TW 仿單 §5.1: 肝或腎功能不全應依功能減量或延長給藥間隔 (no values given)<br>Hepatic impairment ↑ risk of PT prolongation → monitor PT/INR; give vitamin K if needed

**Why:** No label gives a hepatic dose adjustment. The UK SmPC says cefazolin is not metabolised, and the US label says it is excreted unchanged in the urine. Both labels list hepatic impairment as a risk factor for a fall in prothrombin activity.

**Sources:** UK SmPC §5.2 Biotransformation ('Cefazolin is not metabolised') and §4.4 Coagulation disorders – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA PLR label §12.3 Excretion and §5.5 Prothrombin Activity – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686

### B4 · Pediatric dose

≥1 month: 25-50 mg/kg/day IV/IM divided into 3-4 doses (q6-8h); severe infection up to 100 mg/kg/day ÷ 3-4 (US label; UK SmPC: 25-50 mg/kg/day ÷ 2-4, up to 100 mg/kg/day ÷ 3-4)<br>TW 仿單: 20-50 mg/kg/day, 分兩次 IM (IV also allowed)<br>Surgical prophylaxis 10-17 y (US Baxter PLR label): <50 kg 1 g, ≥50 kg 2 g 0.5-1 h before incision; +0.5-1 g intra-op if lengthy; 0.5-1 g q6-8h for 24 h. Guideline: 30 mg/kg IV, not above adult dose (ASHP 2013)<br>Renal impairment (after loading dose): CrCl 40-70: 60% of daily dose ÷ q12h; 20-40: 25% ÷ q12h; 5-20: 10% of daily dose q24h (US label; UK same for 20-40 and 5-20)<br>Premature & <1 month: not recommended (UK/TW); safety not established (US)

**Why:** The column is empty. The US PLR label (§2.2 Table 2, §2.4 Table 5, §8.4), the UK SmPC §4.2 and the TW insert all give these values. All three labels say not to use cefazolin under 1 month. The hospital's 150 mg/kg/day maximum is above every label (see hospital issues), so do not copy it. The 30 mg/kg prophylaxis dose comes from ASHP 2013, a guideline rather than a label.

**Sources:** US FDA PLR label §2.2 Table 2, §2.4 Table 5, §8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; UK SmPC §4.2 Paediatric population; Paediatric patients with renal impairment – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §3.1 (兒童依體重20〜50 mg/kg，分兩次) and §5.1 小兒使用 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; Bratzler DW et al. 2013, PMID 23327981 – https://pubmed.ncbi.nlm.nih.gov/23327981/

### B5 · Indications

Pneumonia, UTI, SSTI, IAI, Osteoarthritis, Sepsis, Bacteremia, Endocarditis, Surgical prophylaxis

**Why:** The column is empty. US label §1.1-1.9 lists respiratory tract infections (→ Pneumonia), UTI, skin and skin structure infections (→ SSTI), biliary tract infections (→ IAI, biliary only), bone and joint infections (→ Osteoarthritis, the only bone/joint tag), septicemia (→ Sepsis/Bacteremia), endocarditis and perioperative prophylaxis. UK SmPC §4.1 adds nothing new (SSTI, bone/joint, prophylaxis). Genital infections (prostatitis, epididymitis) have no matching tag, so they go in Notes. Do NOT add Meningitis or Brain abscess. The TW insert lists 腦膜炎球菌, but UK SmPC §5.2 says CSF diffusion is low. All proposed tags exist in the schema.

**Sources:** US FDA PLR label §1 INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; UK SmPC §4.1 and §5.2 ('Diffusion of cefazolin in the cerebrospinal fluid is low') – https://www.medicines.org.uk/emc/product/102464/smpc

### B6 · Coverage

MSSA, Streptococcus, E.coli, Klebsiella, Proteus

**Why:** The column is empty. US PLR §12.4 lists activity against MSSA, methicillin-susceptible S. epidermidis, group A strep, S. pneumoniae and Streptococcus spp., E. coli, H. influenzae, Klebsiella spp. and P. mirabilis. It states that methicillin-resistant staphylococci and most Enterobacter (including K. aerogenes), Morganella, Providencia, Serratia and Pseudomonas are resistant. Use 'MSSA', not the generic 'Staphylococcus', in line with the agreed fix on the cefoxitin entry. Leave out Haemophilus: UK SmPC §5.1 lists H. influenzae under 'acquired resistance may pose a problem'. Note also that this UK SmPC table lists K. pneumoniae and P. mirabilis under 'Inherently resistant', which conflicts with the US and TW labels. Keep the tags but mention the conflict in Notes and advise checking the local antibiogram. Never add Enterococcus, MRSA, Pseudomonas, Enterobacter, Serratia or Anaerobes.

**Sources:** US FDA PLR label §12.4 Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; UK SmPC §5.1 Microbiological susceptibility – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §10.1 作用機轉 (S. aureus, streptococci, E. coli, P. mirabilis, Klebsiella …) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### B7 · Side Effects

GI, LFT↑, hematologic, neutropenia, leukopenia, thrombocytopenia, SJS/TEN, DRESS, AKI, CNS, coagulopathy, thrombophlebitis

**Why:** The column is empty. US §6.1 lists GI effects (diarrhoea, nausea, CDAD), transient SGOT/SGPT/ALP rise, neutropenia, leukopenia, thrombocytopenia, SJS, phlebitis, and BUN/creatinine rise with renal failure (§6.2 adds ATIN). §5.2 lists seizures in renal impairment and §5.5 a fall in prothrombin activity. The TW insert §5.1/§8.3 lists SCAR including SJS, TEN, DRESS and AGEP. UK SmPC §4.8 lists nephrotoxicity and interstitial nephritis, and coagulation disorders with bleeding. All tags exist. Anaphylaxis, eosinophilia, Kounis syndrome and AGEP have no matching tag, so they go in Notes.

**Sources:** US FDA PLR label §5.2, §5.5, §6.1, §6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; TW 仿單 §5.1 嚴重皮膚不良反應(SCAR), §8.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; UK SmPC §4.8 Undesirable effects – https://www.medicines.org.uk/emc/product/102464/smpc

### B8 · Monitor

renal, CBC, PT/INR

**Why:** The column is empty. UK SmPC §4.4 recommends monitoring renal function, especially at maximum doses or with nephrotoxic drugs. US §5.5 and the TW insert say to monitor PT (INR in the TW insert) in at-risk patients. For CBC, the labels list cytopenias, and the IDSA OPAT guideline recommends weekly lab safety monitoring (CBC and renal panel) for β-lactams during long courses. All options exist in the schema.

**Sources:** UK SmPC §4.4 Renal impairment / Coagulation disorders – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA PLR label §5.5 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; TW 仿單 §5.1 凝血酶原時間延長 (定期監測INR) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; Norris AH et al. 2018 IDSA OPAT guideline, Clin Infect Dis 2019;68:e1-e35, PMID 30423035 (verified) – https://pubmed.ncbi.nlm.nih.gov/30423035/

### B9 · Mechanism

Binds PBPs → blocks transpeptidation/peptidoglycan cell-wall synthesis → bactericidal; time-dependent (%fT>MIC)

**Why:** The column is empty. Both the UK SmPC and the US label describe this mechanism.

**Sources:** UK SmPC §5.1 Mechanism of action and PK/PD relationship – https://www.medicines.org.uk/emc/product/102464/smpc; US FDA PLR label §12.4 Mechanism of Action – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686

### B10 · Drug Interactions

Probenecid (↓renal excretion → ↑cefazolin levels; US label: co-administration not recommended)<br>Warfarin/oral anticoagulants: ↑INR/bleeding – monitor coagulation (UK 4.5; US 5.5)<br>Nephrotoxic drugs (aminoglycosides, loop diuretics, colistin, contrast, etc.): monitor renal function (UK 4.4/4.5)<br>Bacteriostatic antibiotics (tetracyclines, sulfonamides, erythromycin, chloramphenicol): possible antagonism (UK 4.5)<br>Lab: false-positive urine glucose (Benedict/Fehling/Clinitest; enzyme tests OK); positive direct/indirect Coombs (incl. neonates of treated mothers)<br>Lidocaine as IM diluent: never give IV

**Why:** The column is empty. US §7 and §5.6, UK SmPC §4.4/4.5 and TW insert §5.1 all support these interactions.

**Sources:** US FDA PLR label §7, §5.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; UK SmPC §4.5 Interaction and §4.3/§4.4 (lidocaine) – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §5.1 藥物交互作用 / 藥物對實驗室檢驗之影響 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F

### B11 · Pregnancy

No FDA letter category (retired). US label (8.1): decades of published data have not established a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; crosses placenta (cord ≈¼-⅓ of maternal levels); animal studies negative. UK SmPC: give only after careful benefit-risk assessment, esp. 1st trimester. Widely used for cesarean prophylaxis (ASHP 2013)

**Why:** The column is empty. The Henry Schein label in the brief and the hospital site still say 'Category B'. Do not copy that; letter categories are retired and the current PLR label §8.1 uses the narrative format.

**Sources:** US FDA PLR label §8.1 Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; US FDA label Henry Schein v7, PRECAUTIONS – Labor and Delivery (cord ¼-⅓) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/102464/smpc

### B12 · Breastfeeding

Acceptable – low milk levels (≈0.75-1.5 mg/L after 1-2 g IV); not expected to cause adverse effects; monitor infant for diarrhoea/thrush (LactMed 2024). US label: present in milk, not expected to accumulate. UK SmPC: benefit-risk; stop breastfeeding (or drug) if infant diarrhoea/candidiasis

**Why:** The column is empty. The LactMed Summary and Drug Levels sections support this text: 2 g IV gives a mean of 1.16-1.51 mg/L, and 1 g IV gives 0.75 mg/L.

**Sources:** LactMed Cefazolin NBK501303 (rev 2024-11-15), Summary & Drug Levels – https://www.ncbi.nlm.nih.gov/books/NBK501303/; US FDA PLR label §8.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686; UK SmPC §4.6 Breast-feeding – https://www.medicines.org.uk/emc/product/102464/smpc

### B13 · Notes

禁忌 Contraindication: cefazolin/cephalosporin allergy; prior severe (anaphylactic) reaction to any β-lactam (UK/TW; US PLR: immediate hypersensitivity to cephalosporins, penicillins or other β-lactams). Penicillin allergy: cross-hypersensitivity up to 10% (US). Kounis syndrome reported (UK). TW 仿單 still advises 皮膚試驗 before use (not in US/UK labels)<br>MSSA bacteremia: cefazolin associated with lower 90-day mortality and fewer discontinuations for adverse events vs anti-staphylococcal penicillins (meta-analysis of retrospective studies, Bidell 2018, PMID 30085140)<br>Cefazolin inoculum effect in 18.6% (up to ~¼ by site) of N. American MSSA isolates – clinical impact not established; caution in high-inoculum infections (Dingle 2022, PMID 35578988)<br>Not for meningitis/CNS infection (low CSF penetration – UK SmPC 5.2); NOT for intrathecal use (seizures/CNS toxicity – TW/UK)<br>Also FDA-labelled for biliary tract (tagged IAI) and genital infections (prostatitis, epididymitis – no tag)<br>Colorectal surgery: combine with an anti-anaerobic agent (UK SmPC 4.1)<br>Inactive: MRSA/MRSE, enterococci, Pseudomonas, Enterobacter/Serratia/Citrobacter/Providencia (inducible AmpC), indole+ Proteus, ESBL producers. H. influenzae: acquired resistance (UK) – not tagged. UK SmPC lists K. pneumoniae/P. mirabilis as inherently resistant (conflicts with US/TW) – check local antibiogram<br>Other label warnings: CDAD; anaphylaxis; SCAR incl. AGEP (TW; US postmarketing)<br>Na 48 mg (≈2.1 mEq) per g (US label); consider in HF/HTN/Na restriction (UK)<br>Lidocaine-reconstituted solution: IM only, never IV

**Why:** The column is empty. Every item above is sourced. Storage and stability are left out deliberately (owner rule). The TW skin-test statement is reported as a fact about the insert, not as advice.

**Sources:** Bidell MR et al. J Antimicrob Chemother 2018;73:2643-51, PMID 30085140 (verified) – https://pubmed.ncbi.nlm.nih.gov/30085140/; Dingle TC et al. J Clin Microbiol 2022;60:e0249521, PMID 35578988 (verified; abstract 'present in up to a quarter') – https://pubmed.ncbi.nlm.nih.gov/35578988/; UK SmPC §4.4, §4.8, §5.1, §5.2 – https://www.medicines.org.uk/emc/product/102464/smpc; TW 仿單 §5.1 (皮膚試驗; 脊髓鞘內注射) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F; US FDA label Henry Schein v7 DESCRIPTION (48 mg sodium/g) and Civica PLR §1.6, §5.1, §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686

### B14 · Page body

Add a monograph body in the Cefmore layout (headings: Mechanism; Coverage table – Gram+: MSSA, MSSE, streptococci incl. S. pneumoniae; Gram−: E. coli, Klebsiella, P. mirabilis (UK SmPC conflict noted), H. influenzae (variable); NO coverage: MRSA/MRSE, enterococci, Pseudomonas, AmpC-E (Enterobacter/Serratia/Citrobacter/Providencia), indole+ Proteus, ESBL producers, anaerobes for colorectal surgery; Pediatric dose table; Renal/HD/PD/CRRT table; Side effects; Monitoring; Drug interactions; Pregnancy; Breastfeeding; Notes). Use exactly the final agreed column text (incl. the [confirm] flags on ISPD and CRRT). No storage/stability, no letter category. Then:<br>## References<br>- Taiwan 仿單 信華注射劑 Cefa Injection 衛署藥製字第029447號 (§3.1, §3.3, §4, §5.1, §8.3, §10.1) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC029447%E8%99%9F<br>- US FDA PLR label, Cefazolin for Injection (Civica/Hikma) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1367568c-7d27-479f-a4c5-58e99942f686<br>- US FDA PLR label, Cefazolin in Dextrose Injection (Baxter) (≥120 kg and 10-17 y prophylaxis) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91a8d13-99a0-4d87-88dc-71cbd37922b4<br>- US FDA label, Cefazolin for Injection USP (Henry Schein), DailyMed v7 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=922fb1a1-ad4c-4a12-8d5d-00fe13af18e8<br>- UK SmPC Cefazolin 2 g powder (rev. 22/04/2026) – https://www.medicines.org.uk/emc/product/102464/smpc<br>- LactMed: Cefazolin, NBK501303 (rev. 2024-11-15) – https://www.ncbi.nlm.nih.gov/books/NBK501303/<br>- Bratzler DW et al. ASHP/IDSA/SIS/SHEA surgical prophylaxis 2013, PMID 23327981; Baddour LM et al. AHA IE 2015, PMID 26373316; Sowinski KM 2001, PMID 11273877; Fogel MA 1998, PMID 9740155; Li PK ISPD 2022, PMID 35264029; Trotman RL 2005, PMID 16163635; Heintz BH 2009, PMID 19397464; Bidell MR 2018, PMID 30085140; Dingle TC 2022, PMID 35578988; Norris AH IDSA OPAT 2018, PMID 30423035 (each linked as https://pubmed.ncbi.nlm.nih.gov/<PMID>/)

**Why:** Other entries, such as Cefmore, have a body with a references section. This page is empty. Without a references list the cited PMIDs and labels cannot be traced.

**Sources:** Notion data source collection://20dc496d-fff1-8035-b493-000b15564193 (sibling entry layout); All sources listed in B1-B13

## Apply log

- Adult dose: merged both proposals (IV/IM tags, US/UK/TW label dosing, MSSA bacteremia/IE guideline, surgical prophylaxis label + ASHP 2013, administration, lidocaine IM-only)
- Renal dose, HD, CRRT: US label CrCl bands (TW no data, UK same), HD post-dialysis dosing (Sowinski 2001/Fogel 1998), PD label PK + ISPD 2022 [confirm flag], CRRT 1-2 g q12h [owner to confirm flag], seizure warning; peds renal moved to Pediatric dose
- Hepatic dose: no label adjustment, TW 5.1 statement, PT/INR monitoring
- Pediatric dose: >=1 month US/UK/TW dosing, 10-17 y prophylaxis (Baxter PLR) + ASHP 30 mg/kg, pediatric renal table, <1 month not recommended
- Indications: Surgical prophylaxis, SSTI, Osteoarthritis, UTI, Pneumonia, IAI, Sepsis, Bacteremia, Endocarditis (existing options only)
- Coverage: MSSA, Streptococcus, E.coli, Klebsiella, Proteus
- Side Effects: GI, LFT↑, hematologic, neutropenia, leukopenia, thrombocytopenia, SJS/TEN, DRESS, AKI, CNS, coagulopathy, thrombophlebitis
- Monitor: renal, CBC, PT/INR
- Mechanism: PBP/transpeptidation, time-dependent, resistance mechanisms
- Drug Interactions: probenecid, warfarin, nephrotoxics, bacteriostatic antibiotics, lidocaine diluent, lab interferences
- Pregnancy: no letter category, US PLR 8.1, placental transfer, UK SmPC, cesarean prophylaxis
- Breastfeeding: LactMed 2024 levels, US and UK label statements
- Notes: contraindications, TW skin test, Bidell 2018, Dingle 2022 inoculum effect, CNS/intrathecal, other labelled uses, colorectal anti-anaerobe, inactive organisms/UK conflict, other warnings, sodium content
- Page body: added Cefmore-style monograph (Mechanism, Coverage table + NO coverage, Adult, Hepatic, Pediatric table, Renal/HD/PD/CRRT table with confirm flags, Side effects, Monitoring, Drug interactions, Pregnancy, Breastfeeding, Notes) and References section listing TW insert, 3 US labels, UK SmPC, LactMed and all 11 PubMed sources with URLs
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
