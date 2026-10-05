# New entry: LinDACIN (Clindamycin)

- **Notion entry:** [LinDACIN (Clindamycin)](https://app.notion.com/3f0c496dfff181499af6d233f5bbe4f7). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** LIN01 (LinDACIN cap 150 mg), BB901 (BB inj 300 mg/2 mL)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/clindamycin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH stocks two clindamycin products, both checked on the hospital P4 pages and on TFDA. (1) LIN01: 利達信黴素膠囊 LinDACIN Capsules 150 mg (clindamycin HCl), 信東, 衛署藥製字第043991號, NHI AC439911G0, ATC J01FF01. (2) BB901: 比比黴素注射液 B.B. Injection 150 mg/mL, 2 mL ampoule (clindamycin phosphate, contains benzyl alcohol), 瑞士藥廠, 衛署藥製字第036469號, NHI AC36469212. The Notion page (created 2026-10-05) has only its title and Category=Lincosamide. All text columns, all multi-selects and the page body are empty. Sources: US Sagent clindamycin injection SPL v22 (Sep 28 2026; I confirmed it with the DailyMed history API). US CLEOCIN HCl capsule SPL v41 (Pharmacia & Upjohn, Sep 16 2026; confirmed, and I read its dosing section). UK SmPC Dalacin C 150 mg capsules (eMC 100601, 07/2026). UK SmPC Dalacin C Phosphate (eMC 1078, 03/2026; I fetched it myself). LactMed NBK501208 (2025-02-15). Taiwan inserts for both licences: I rendered the scanned LinDACIN PDF and checked it against the brief's transcription, which matches. Corrections to the brief: (a) The LIN01 hospital paediatric dose of 8–16 mg/kg/day (max 20) is NOT an error. It matches the US CLEOCIN HCl label exactly (serious 8–16, more severe 16–20 mg/kg/day ÷3–4). It is only narrower than the Taiwan insert (8–25). (b) The US and UK IV dilution limit is ≤18 mg/mL. The ≤12 mg/mL limit comes only from the Taiwan B.B. insert. (c) The UK Dalacin C Phosphate SmPC 4.3 CONTRAINDICATES benzyl-alcohol-containing clindamycin injection in premature babies and neonates. The brief left this out. Note on the user request: the relayed request asks for "task 2,3,5", which is not numbered anywhere in the task text. I did the full read-only reviewer-A audit as computed. I made no Notion or repository edits.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> LinDACIN 150 mg cap: 150–300 mg q6h; severe 300–450 mg q6h (US/UK; TW 仿單 150–450 mg q6h). Swallow whole with a full glass of water, ≥30 min before lying down (esophagitis). β-hemolytic strep: treat ≥10 d (TW 仿單 strep pharyngitis 300 mg BID ×10 d).<br><span color="green">`IV`</span>/<span color="orange">`IM`</span> B.B. 150 mg/mL: 600–1200 mg/day ÷2–4; severe 1200–2700 mg/day ÷2–4; life-threatening up to 4800 mg/day IV (US/UK). TW 仿單 B.B. IM: 1200–2700 mg/day ÷2–4. IM: ≤600 mg per injection site (TW 仿單/US/UK). IV: must dilute, ≤12 mg/mL (TW 仿單; US/UK ≤18 mg/mL), rate ≤30 mg/min, 300–1200 mg over 10–40 min, ≤1200 mg per 1-h infusion; never undiluted IV bolus (cardiopulmonary arrest/hypotension with too-rapid IV, US). PID (TW 仿單): 900 mg IV q8h + gentamicin → PO 450 mg q6h to complete 10–14 d.

**Why:** The column is empty. Both stocked forms have labelled adult doses. US injection D&A: "600 mg to 1,200 mg per day in 2, 3 or 4 equal doses ... 1,200 mg to 2,700 mg per day ... Doses of as much as 4,800 mg daily have been given intravenously ... Single intramuscular injections of greater than 600 mg are not recommended ... should not exceed 18 mg per mL. Infusion rates should not exceed 30 mg per minute ... more than 1200 mg in a single 1-hour infusion is not recommended." US Precautions: "should not be injected intravenously undiluted as a bolus". US ADR: "Cardiopulmonary arrest and hypotension have been reported following too rapid intravenous administration." US CLEOCIN HCl D&A: "Adults: Serious infections – 150 to 300 mg every 6 hours. More severe infections – 300 to 450 mg every 6 hours" and "full glass of water ... at least 30 minutes before lying down". UK capsule SmPC 4.2 gives the same. TW B.B. 仿單【用法用量】: "肌肉注射：一天1200－2700mg/day平分2－4次 ... 同一注射部位投與不宜超過600mg ... 300－1200mg以10－40min作輸注 ... 濃度勿超過12mg/ml，輸注速度勿超過30mg/min". TW LinDACIN 仿單: "每6小時150~450mg"; PID regimen; strep tonsillitis 300 mg BID ×10 d.

**Sources:** US FDA label clindamycin injection (Sagent) DOSAGE AND ADMINISTRATION, PRECAUTIONS General, ADVERSE REACTIONS - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; US FDA label CLEOCIN HCl capsules DOSAGE AND ADMINISTRATION - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df9a2a41-b132-4f43-8940-b2d773b1369a; UK SmPC Dalacin C capsules 4.2 - https://www.medicines.org.uk/emc/product/100601/smpc; UK SmPC Dalacin C Phosphate 4.2 - https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 B.B. Injection 衛署藥製字第036469號【用法用量】 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC036469%E8%99%9F; TW 仿單 LinDACIN 衛署藥製字第043991號【用法用量】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### A2 · Pediatric dose

<span color="green">`IV`</span>/`IM` >1 mo–16 y: 20–40 mg/kg/day ÷3–4 (US; TW 仿單 B.B.); US alt 350–450 mg/m²/day. UK: 15–25 mg/kg/day, severe 25–40 mg/kg/day ÷3–4, ≥300 mg/day in severe infection. <1 mo: 15–20 mg/kg/day ÷3–4 (US; TW 仿單 IM, reduce in preterm); US: PMA ≤32 wk 5 mg/kg q8h, PMA >32–40 wk 7 mg/kg q8h. ⚠ B.B. contains benzyl alcohol → 'gasping syndrome' risk in neonates/preterm (US warning); UK SmPC: contraindicated in premature babies/neonates. 新生兒避免使用含 benzyl alcohol 製劑.<br><span color="blue">`PO`</span> (only if able to swallow capsules): US 8–16 mg/kg/day ÷3–4, severe 16–20 mg/kg/day; TW 仿單 8–25 mg/kg/day ÷3–4 (>1 mo); UK 12–25 mg/kg/day q6h. Dose on total body weight regardless of obesity (US/UK).

**Why:** The column is empty. US injection D&A: "Pediatric Patients 1 month of age to 16 years ... 20 to 40 mg/kg/day in 3 or 4 equal doses ... 350 mg/m2/day ... 450 mg/m2/day ... Pediatric Patients less than 1 month: ... 15 to 20 mg/kg/day in 3 to 4 equal doses". Table 3: PMA ≤32 wk 5 mg/kg q8h, >32–≤40 wk 7 mg/kg q8h. US Warnings: "benzyl alcohol has been associated with the 'gasping syndrome', and death in neonates". UK Dalacin C Phosphate 4.3: "must not be given to premature babies or neonates because of the benzyl alcohol content". UK 4.2: "15‑25 mg/kg/day ... 25‑40 mg/kg/day ... no less than 300 mg/day". US CLEOCIN HCl: "8 to 16 mg/kg/day ... 16 to 20 mg/kg/day ... divided into three or four equal doses ... dosed based on total body weight regardless of obesity". TW LinDACIN 仿單: "一月齡以上兒童 ... 每日8~25mg/kg平分3或4次投藥". TW B.B. 仿單: "新生兒（1個月以內）：15－20mg/kg/day ... 對早產兒可將此劑量適度降低 ... 兒童（1個月以上）：20－40mg/kg/day". The B.B. excipients include Benzyl Alcohol. The labels disagree on neonatal use (US warning vs UK contraindication), so both are stated.

**Sources:** US FDA label clindamycin injection D&A Table 3, WARNINGS Benzyl Alcohol Toxicity, Usage in Newborns and Infants - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; US FDA label CLEOCIN HCl D&A - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df9a2a41-b132-4f43-8940-b2d773b1369a; UK SmPC Dalacin C Phosphate 4.2, 4.3, 4.4 - https://www.medicines.org.uk/emc/product/1078/smpc; UK SmPC Dalacin C capsules 4.2 - https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 B.B. 【成份】【用法用量】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e; TW 仿單 LinDACIN 【用法用量】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### A3 · Renal dose, HD, CRRT

No adjustment (TW 仿單 LinDACIN: 有腎疾之患者不必調整劑量; US/UK). HD/PD: not effectively removed → no supplemental dose (US/UK). CRRT: no label or clinical dosing data; only ~10% excreted in urine (UK 5.2); ex vivo CRRT circuit removed ~20% over 6 h, no ECMO sequestration (Hunt 2023, PMID 37572979) → do not reduce; usual (upper-range if severe) dose is an extrapolation [verify]. ⚠ Potentially nephrotoxic—AKI reported (US/UK): monitor renal function if pre-existing renal dysfunction or nephrotoxic co-medication; stop if AKI with no other cause (US). t½ slightly prolonged in marked renal impairment (US/UK).

**Why:** Per the ground rules, the stocked product's Taiwan insert is preferred and the US label is mentioned alongside. They agree. TW LinDACIN 仿單【注意事項】: "有腎疾之患者不必調整clindamycin之劑量". US Renal/Hepatic Impairment: "Hemodialysis and peritoneal dialysis are not effective in removing clindamycin from the serum. Dosage schedules do not need to be modified in patients with renal or hepatic disease." US Nephrotoxicity: "Clindamycin is potentially nephrotoxic and cases with acute kidney injury have been reported. Consider monitoring of renal function particularly in patients with pre-existing renal dysfunction or those taking concomitant nephrotoxic drugs. In case of acute kidney injury, discontinue clindamycin when no other etiology is identified." UK capsule 4.2: "dosage modification is not necessary in patients with renal or hepatic insufficiency". UK 4.4: AKI warning. UK 5.2: "About 10% of a dose is excreted in the urine ... not effectively removed from the blood by dialysis." The TW B.B. insert has no renal statement. No label covers CRRT, so that part is flagged.

**Sources:** TW 仿單 LinDACIN【注意事項】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; US FDA label clindamycin injection, Patients with Renal/Hepatic Impairment; WARNINGS Nephrotoxicity; OVERDOSAGE - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.2, 4.4, 4.9, 5.2 - https://www.medicines.org.uk/emc/product/100601/smpc

### A4 · Hepatic dose

No adjustment (US/UK/TW 仿單): moderate–severe liver disease prolongs t½, but with q8h dosing accumulation rarely occurs (中度至嚴重肝疾半衰期延長，但不必降低劑量); periodic liver enzymes in severe liver disease (US). B.B. (benzyl alcohol): large volumes → accumulation/metabolic acidosis risk in hepatic or renal impairment (UK inj SmPC 4.4).

**Why:** US Precautions General: "In patients with moderate to severe liver disease, prolongation of clindamycin half-life has been found. However ... when given every eight hours, accumulation should rarely occur. Therefore, dosage modification in patients with liver disease may not be necessary. However, periodic liver enzyme determinations should be made when treating patients with severe liver disease." TW LinDACIN 仿單: "中度至嚴重肝疾之患者，clindamycin半衰期會延長，唯藥物動力學顯示若每8小時投予1次，罕有積蓄現象發生，故肝病患者不必考慮降低劑量". UK capsule 4.2: no modification needed. UK Dalacin C Phosphate 4.4: high volumes of benzyl alcohol to be used "with caution ... especially in patients with liver or kidney impairment ... (metabolic acidosis)".

**Sources:** US FDA label clindamycin injection PRECAUTIONS General - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; TW 仿單 LinDACIN【注意事項】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; UK SmPC Dalacin C Phosphate 4.4 - https://www.medicines.org.uk/emc/product/1078/smpc; UK SmPC Dalacin C capsules 4.2 - https://www.medicines.org.uk/emc/product/100601/smpc

### A5 · Indications

Pneumonia, SSTI, Pelvic, IAI, Peritonitis, Sepsis, Osteoarthritis

**Why:** The US injection Indications list: "Lower respiratory tract infections including pneumonia, empyema, and lung abscess" → Pneumonia. "Skin and skin structure infections" → SSTI. "Gynecological infections including endometritis, nongonococcal tubo-ovarian abscess, pelvic cellulitis" → Pelvic. "Intra-abdominal infections including peritonitis and intra-abdominal abscess" → IAI, Peritonitis. "Septicemia" → Sepsis. "Bone and joint infections including acute hematogenous osteomyelitis" → Osteoarthritis. All of these options exist in the schema. Do NOT tag Meningitis: the US label says "should not be used in the treatment of meningitis". Do NOT tag CDI (clindamycin causes CDI). Do NOT tag Endocarditis: it is listed only in the TW LinDACIN 仿單 ("敗血症及心內膜炎"), not in the US label or UK SmPC, so it goes in Notes. Surgical prophylaxis is off-label (not in the US or UK label), so it is left out of the tags and mentioned in Notes.

**Sources:** US FDA label clindamycin injection INDICATIONS AND USAGE; WARNINGS (Usage in Meningitis) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C Phosphate 4.1 - https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 LinDACIN【適應症】說明 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### A6 · Coverage

MSSA, Staphylococcus, Streptococcus, Anaerobes, Bacteroides, Finegoldia

**Why:** US Antimicrobial Activity (clinical): "Staphylococcus aureus (methicillin-susceptible strains) Streptococcus pneumoniae (penicillin-susceptible strains) Streptococcus pyogenes; Anaerobic bacteria Clostridium perfringens, Fusobacterium ..., Peptostreptococcus anaerobius, Prevotella melaninogenica". In vitro: S. epidermidis (methicillin-susceptible), S. agalactiae/anginosus/mitis/oralis, "Finegoldia (Peptostreptococcus) magna". UK 5.1 susceptible: S. aureus, S. epidermidis, streptococci, "Bacteriodes fragilis group". TW LinDACIN 仿單 lists Bacteroides (incl. B. fragilis) and "Chlamydia trachomatis", with a C. trachomatis cervicitis regimen. Do NOT tag MRSA: the US label covers only methicillin-susceptible strains, and UK 5.1 says ">90% of MRSA are resistant ... should not be used while awaiting susceptibility test results if there is any suspicion of MRSA" (any CA-MRSA guideline use goes in Notes). Do NOT tag Enterococcus/E. faecalis: US "except E. faecalis"; UK 5.1 lists "Resistant: ... Enterococci, Enterobacteriaceae". Do NOT tag Mycoplasma: the TW insert means M. hominis only, and the tag would imply M. pneumoniae. Toxoplasma, Pneumocystis and Plasmodium have no tag options and go in Notes.

**Sources:** US FDA label clindamycin injection MICROBIOLOGY Antimicrobial Activity, INDICATIONS - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 5.1 - https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN【特性】微生物學 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### A7 · Side Effects

GI, AKI, nephrotoxicity, LFT↑, hematologic, neutropenia, leukopenia, thrombocytopenia, DRESS, SJS/TEN, thrombophlebitis

**Why:** US Adverse Reactions: "Clostridioides difficile colitis ... pseudomembranous colitis, abdominal pain, nausea, and vomiting" → GI. "Renal: Acute kidney injury" plus the Nephrotoxicity warning → AKI, nephrotoxicity. "Jaundice and abnormalities in liver function tests" → LFT↑. "Transient neutropenia (leukopenia) and eosinophilia ... agranulocytosis and thrombocytopenia" → hematologic, neutropenia, leukopenia, thrombocytopenia. "Drug reaction with eosinophilia and systemic symptoms (DRESS)", "toxic epidermal necrolysis ... Stevens-Johnson syndrome" → DRESS, SJS/TEN. "thrombophlebitis after intravenous infusion" → thrombophlebitis. UK 4.8 also lists oesophagitis/oesophageal ulcer (oral) → GI. All are existing schema options. Anaphylaxis/Kounis syndrome and cardiopulmonary arrest with rapid IV have no option; put them in Notes/body.

**Sources:** US FDA label clindamycin injection ADVERSE REACTIONS, WARNINGS - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.8 - https://www.medicines.org.uk/emc/product/100601/smpc

### A8 · Monitor

renal, LFT, CBC

**Why:** US Laboratory Tests: "During prolonged therapy periodic liver and kidney function tests and blood counts should be performed." US Nephrotoxicity: "Consider monitoring of renal function particularly in patients with pre-existing renal dysfunction or those taking concomitant nephrotoxic drugs." UK 4.4: "Periodic liver and kidney function tests should be carried out during prolonged therapy. Such monitoring is also recommended in neonates and infants." Bowel frequency/CDAD has no tag option, so put it in Notes. PT/INR applies only with vitamin K antagonists (UK 4.5), so it is covered under Drug Interactions rather than as a tag.

**Sources:** US FDA label clindamycin injection PRECAUTIONS Laboratory Tests; WARNINGS Nephrotoxicity - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.4 - https://www.medicines.org.uk/emc/product/100601/smpc

### A9 · Mechanism

Lincosamide; binds 23S rRNA of the 50S ribosomal subunit → inhibits bacterial protein synthesis; bacteriostatic (high concentrations may be slowly bactericidal, UK 5.1). PK/PD: fAUC/MIC (UK 5.1). Clindamycin phosphate (inj) is an inactive prodrug, rapidly hydrolysed to active clindamycin. Complete cross-resistance with lincomycin; MLSB cross-resistance with macrolides/streptogramin B → D-zone test for macrolide-resistant staphylococci/β-hemolytic streptococci (US).

**Why:** US Mechanism of Action: "Clindamycin inhibits bacterial protein synthesis by binding to the 23S RNA of the 50S subunit of the ribosome. Clindamycin is bacteriostatic." US Resistance: "Cross-resistance between clindamycin and lincomycin is complete ... cross-resistance is sometimes observed among lincosamides, macrolides and streptogramin B ... should be screened for induction of clindamycin resistance using the D-zone test." UK 5.1: "predominantly bacteriostatic although high concentrations may be slowly bactericidal"; "Efficacy is related to ... (fAUC/MIC)"; "clindamycin phosphate is inactive in vitro, rapid in vivo hydrolysis converts this compound to the antibacterially active clindamycin".

**Sources:** US FDA label clindamycin injection MICROBIOLOGY Mechanism of Action, Resistance - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 5.1 - https://www.medicines.org.uk/emc/product/100601/smpc

### A10 · Drug Interactions

Neuromuscular blockers → enhanced blockade, use with caution (US/UK/TW 仿單)；CYP3A4/5 substrate: strong CYP3A4 inhibitors ↑ clindamycin (monitor ADRs), strong inducers e.g. rifampicin ↓ (monitor for loss of efficacy) (US/UK)；vitamin K antagonists (warfarin) → ↑INR/bleeding, monitor PT/INR (UK SmPC 4.5)；erythromycin: in vitro antagonism (TW 仿單)；antiperistaltics (opiates, diphenoxylate/atropine) may prolong/worsen antibiotic colitis (TW 仿單 B.B.).

**Why:** US Drug Interactions: "neuromuscular blocking properties that may enhance the action of other neuromuscular blocking agents ... inhibitors of CYP3A4 and CYP3A5 may increase plasma concentrations ... inducers ... may reduce ... In the presence of strong CYP3A4 inhibitors, monitor for adverse reactions. In the presence of strong CYP3A4 inducers such as rifampicin, monitor for loss of effectiveness." UK 4.5: "Vitamin K antagonists Increased coagulation tests (PT/INR) and/or bleeding ... Coagulation tests, therefore, should be frequently monitored". TW LinDACIN 仿單【交互作用】: "Clindamycin與erythromycin間有拮抗作用". TW B.B. 仿單【警告】: "抗胃腸蠕動的製劑，如opiates和diphenoxylate與atropine會使得下痢的情形延長或惡化".

**Sources:** US FDA label clindamycin injection PRECAUTIONS Drug Interactions - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.5 - https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN【交互作用】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; TW 仿單 B.B.【警告】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e

### A11 · Pregnancy

US FDA letter categories retired (no category). 2nd/3rd-trimester systemic use not associated with ↑ congenital abnormalities; no adequate 1st-trimester studies → use in 1st trimester only if clearly needed; animal studies (rat/mouse) no teratogenicity (US). Crosses placenta (amniotic fluid ≈30% of maternal level); use only if clearly needed (UK 4.6). TW 仿單: 孕婦使用之安全性尚未確立，請謹慎使用. B.B. contains benzyl alcohol, which can cross the placenta (US/UK).

**Why:** US label (non-PLLR) text under Carcinogenesis/Pregnancy: "systemic administration of clindamycin during the second and third trimesters, has not been associated with an increased frequency of congenital abnormalities. Clindamycin should be used during the first trimester of pregnancy only if clearly needed ... revealed no evidence of teratogenicity. Clindamycin injection contains benzyl alcohol. Benzyl alcohol can cross the placenta." UK capsule 4.6: "Clindamycin crosses the placenta ... approximately 30% of maternal blood concentrations ... should be used in pregnancy only if clearly needed." TW B.B. 仿單: "孕婦使用本藥之安全性尚未確定". Per the ground rules, no letter category is written.

**Sources:** US FDA label clindamycin injection PRECAUTIONS Pregnancy - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.6 - https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 B.B.【注意事項】4 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e

### A12 · Breastfeeding

Not a reason to stop breastfeeding, but an alternate drug may be preferred (LactMed 2025; US/UK). Milk levels <0.5–3.8 mg/L (US/UK; TW 仿單 0.7–3.8 µg/mL). Monitor infant for diarrhea, candidiasis (thrush, diaper rash), rarely bloody stools (antibiotic-associated colitis).

**Why:** LactMed Summary: "If a nursing mother requires oral or intravenous clindamycin, it is not a reason to discontinue breastfeeding, but an alternate drug may be preferred. Monitor the infant for possible effects on the gastrointestinal flora, such as diarrhea, candidiasis (thrush, diaper rash) or rarely, blood in the stool indicating possible antibiotic-associated colitis." US Nursing Mothers: "less than 0.5 to 3.8 mcg/mL", same advice. UK 4.6: "<0.5 to 3.8 µg/mL". TW LinDACIN 仿單: "乳汁內的濃度範圍是0.7~3.8µg/mL".

**Sources:** LactMed Clindamycin NBK501208 (rev 2025-02-15), Summary of Use during Lactation - https://www.ncbi.nlm.nih.gov/books/NBK501208/; US FDA label clindamycin injection PRECAUTIONS Nursing Mothers - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.6 - https://www.medicines.org.uk/emc/product/100601/smpc

### A13 · Notes

⚠ Boxed warning: CDAD/pseudomembranous colitis (may occur >2 months after therapy) → reserve for serious infections where less toxic agents are inappropriate; stop if significant diarrhea (US/TW 仿單)<br>Not for meningitis—inadequate CSF penetration even with inflamed meninges (US/UK/TW 仿單)<br>PO bioavailability ~90%, food does not reduce extent; good bone penetration (UK 5.2)<br>MRSA: not a labelled organism; UK 5.1: >90% MRSA resistant, do not use empirically if MRSA suspected. IDSA MRSA 2011 (PMID 21208910) lists clindamycin for CA-MRSA only if susceptible/low local resistance (guideline wording not re-verified). D-test macrolide-resistant staph/β-hemolytic strep (US)<br>GAS necrotizing fasciitis/TSS: penicillin + clindamycin for toxin suppression (IDSA SSTI 2014, PMID 24973422; not re-verified against full text)<br>TW 仿單 LinDACIN additional uses (no tag option): AIDS toxoplasmic encephalitis 600–1200 mg PO q6h ×2 wk then 300–600 mg q6h (8–10 wk total) + pyrimethamine (+folinic acid); AIDS PCP 300–400 mg PO q6h + primaquine 15–30 mg/day ×21 d; P. falciparum malaria 20 mg/kg/day ≥5 d alone or with quinine/amodiaquine; C. trachomatis cervicitis 450 mg PO QID ×10–14 d; endocarditis listed in TW 仿單 only<br>Off-label: surgical prophylaxis in β-lactam allergy (ASHP/IDSA/SIS/SHEA 2013, PMID 23327981; dose not re-verified, see guideline)<br>Contraindication 禁忌: hypersensitivity to clindamycin or lincomycin<br>Anaphylaxis, Kounis syndrome, AGEP reported (US/UK)<br>Taiwan products: 利達信黴素膠囊 LinDACIN 150 mg (衛署藥製字第043991號); 比比黴素注射液 B.B. 150 mg/mL, 2 mL amp (衛署藥製字第036469號; contains benzyl alcohol)

**Why:** The column is empty. These are label-sourced key safety and practical points that have no other column. Boxed warning (US): "should be reserved for serious infections where less toxic antimicrobial agents are inappropriate". US: "No significant concentrations ... in the cerebrospinal fluid even in the presence of inflamed meninges". UK 5.2: "About 90% ... absorbed", "widely distributed ... including bone". UK 5.1 MRSA statement as quoted. TW LinDACIN 仿單【適應症】說明 9–10 and the malaria paragraph, plus the【用法用量】AIDS regimens: the multi-selects have no Toxoplasma/PCP/malaria options, so per the ground rules they go in Notes. PMIDs 21208910 and 23327981 were confirmed with NCBI esummary (Liu C, Clin Infect Dis 2011;52:e18-55; Bratzler DW, Am J Health Syst Pharm 2013;70:195-283). I could not read the guideline full text here, so the reviewer should check the exact recommendation wording before writing doses.

**Sources:** US FDA label clindamycin injection BOXED WARNING, Distribution, CONTRAINDICATIONS, Anaphylaxis - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C capsules 4.4, 5.1, 5.2 - https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN【適應症】【用法用量】 - https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; IDSA MRSA guideline 2011, PMID 21208910 - https://pubmed.ncbi.nlm.nih.gov/21208910/; ASHP/IDSA/SIS/SHEA surgical prophylaxis 2013, PMID 23327981 - https://pubmed.ncbi.nlm.nih.gov/23327981/

### A14 · Page body

Add a monograph in the owner's standard layout: '## **CLINDAMYCIN (LinDACIN / B.B.) - Complete Monograph**' with ### sections Category (Lincosamide, ATC J01FF01), Mechanism (A9), Indications (FDA/UK-approved list from US Indications: LRTI incl. empyema/lung abscess, SSSI, gynecologic incl. endometritis/tubo-ovarian abscess/pelvic cellulitis, intra-abdominal incl. peritonitis/abscess, septicemia, bone & joint incl. acute hematogenous osteomyelitis; reserve for penicillin-allergic/when penicillin inappropriate (US); TW 仿單-only uses and off-label as in A13), Coverage (A6 incl. resistant: enterococci, Enterobacterales, MRSA mostly), Adult Dose (A1), Renal/HD/CRRT (A3), Hepatic (A4), Pediatric (A2), Side Effects (A7 + anaphylaxis, esophagitis with oral, metallic taste with high-dose IV, cardiopulmonary arrest with rapid IV), Monitor (A8 + bowel frequency in elderly/severely ill), Drug Interactions (A10), Pregnancy (A11), Breastfeeding (A12), Notes (A13), Brief Summary Table, and References (US Sagent inj setid 7a6967b3…, US CLEOCIN HCl setid df9a2a41…, UK eMC 100601 and 1078, TW 仿單 043991 and 036469 links, LactMed NBK501208, any guideline PMIDs used). No storage/stability content.

**Why:** Every other entry has a body monograph (e.g. the Zyvox page uses this structure with a Brief Summary Table and References). This new entry has none. Each section's content comes from the label quotes in A1–A13. US Indications: "Its use should be reserved for penicillin-allergic patients or other patients for whom, in the judgment of the physician, a penicillin is inappropriate." US ADR: "An unpleasant or metallic taste has been reported after intravenous administration of the higher doses". US Precautions: "subgroup of older patients with associated severe illness may tolerate diarrhea less well ... carefully monitored for change in bowel frequency".

**Sources:** US FDA label clindamycin injection (all sections) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; US FDA label CLEOCIN HCl - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df9a2a41-b132-4f43-8940-b2d773b1369a; UK SmPC - https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC043991%E8%99%9F; LactMed NBK501208 - https://www.ncbi.nlm.nih.gov/books/NBK501208/

### A15 · Renewed date

2026-10-05 (set once the agreed fixes are applied)

**Why:** Other verified entries (e.g. Zyvox) have Renewed date 2026-10-05 after review. This new entry has none. This is housekeeping, not a clinical change.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date property); comparison entry https://app.notion.com/20ec496dfff180cf955feabfc6eb3dcf

### B1 · Adult dose

<span color="blue">`PO`</span> LinDACIN 150 mg cap: 150–450 mg q6h (仿單). US: serious 150–300 mg q6h, more severe 300–450 mg q6h (UK: moderately severe 150–300 / severe 300–450 mg q6h). Swallow whole with a full glass of water, ≥30 min before lying down (食道炎/潰瘍 risk). <br><span color="green">`IV`</span>/<span color="green">`IM`</span> B.B. inj 150 mg/mL: 600–1200 mg/day ÷2–4 (serious); 1200–2700 mg/day ÷2–4 (more severe, e.g. B. fragilis); life-threatening: up to 4800 mg/day IV (US/UK). 仿單 IM: 1200–2700 mg/day ÷2–4, ≤600 mg per injection site. <br>IV must be diluted (B.B. 仿單 ≤12 mg/mL; US/UK ≤18 mg/mL); rate ≤30 mg/min (300 mg/10 min … 1200 mg/40 min); ≤1200 mg per 1-h infusion; never give an undiluted IV bolus. <br>β-hemolytic strep: treat ≥10 days (US/UK). 仿單 (LinDACIN): PID 900 mg IV q8h + gentamicin, then PO 450 mg q6h to complete 10–14 d; strep pharyngitis 300 mg PO BID ×10 d.

**Why:** The column is empty, and both stocked dosage forms need dosing. I re-checked each number against the labels. US injection D&A gives 600–1200 and 1200–2700 mg/day in 2–4 doses, up to 4800 mg/day IV, single IM >600 mg not recommended, ≤18 mg/mL, ≤30 mg/min, and >1200 mg per 1-h infusion not recommended. The Cleocin capsule D&A gives 150–300 mg q6h (serious) and 300–450 mg q6h (more severe), plus the full-glass-of-water / 30-min advice. UK capsule SmPC 4.2 and UK IV SmPC 4.2 give the same ranges. The B.B. 仿單 (pdftotext) says '靜脈點滴輸注：300－1200mg 以10－40min…濃度勿超過12mg/ml，輸注速度勿超過30mg/min'. The LinDACIN 仿單 page images say '每6小時150~450mg' and give the PID and pharyngitis regimens. I used the stricter 12 mg/mL limit because B.B. is the product the hospital stocks.

**Sources:** US FDA label, Clindamycin Injection USP (Sagent) v22, DOSAGE AND ADMINISTRATION – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; US FDA label, CLEOCIN HCl capsules (Pfizer) v41 Sep 2026, DOSAGE AND ADMINISTRATION – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df9a2a41-b132-4f43-8940-b2d773b1369a; UK SmPC Dalacin C 150 mg Capsules (rev 07/2026) §4.2 – https://www.medicines.org.uk/emc/product/100601/smpc; UK SmPC Dalacin C Phosphate 150 mg/ml (rev 03/2026) §4.2 – https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 B.B. inj 衛署藥製字第036469號 【用法用量】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e; TW 仿單 LinDACIN 衛署藥製字第043991號 【用法用量】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### B2 · Renal dose, HD, CRRT

No adjustment (仿單: 有腎疾之患者不必調整劑量; US: dosage schedules need not be modified in renal disease; UK §4.2: not necessary). <br>HD/PD: not effective in removing clindamycin (US/UK) → usual dose, no supplement. <br>CRRT: no label or clinical dosing data. Only ~10% is excreted in urine (UK §5.2). An ex vivo CRRT circuit removed ~20% over 6 h, with no ECMO sequestration; the authors concluded that a CRRT dose adjustment may be needed but did not quantify it (Hunt 2023, PMID 37572979). → Usual dose with clinical monitoring is an extrapolation (verify). <br>⚠ Nephrotoxicity: AKI reported. Monitor renal function if there is pre-existing renal dysfunction or concomitant nephrotoxins; stop if AKI has no other cause (US Warnings; UK §4.4). <br>B.B. inj contains benzyl alcohol. UK: use high volumes with caution in renal/hepatic impairment (accumulation → metabolic acidosis).

**Why:** The column is empty. The renal statement is the same in all three labels. US 'Patients with Renal/Hepatic Impairment' says 'Hemodialysis and peritoneal dialysis are not effective in removing clindamycin… Dosage schedules do not need to be modified'. The LinDACIN 仿單 注意事項 says '有腎疾之患者不必調整 clindamycin 之劑量'. The B.B. 仿單 says nothing about renal dosing. No label covers CRRT. My PubMed search (clindamycin[ti] AND CRRT/hemofiltration) found only the ex vivo circuit study (PMID 37572979, checked with esummary/efetch), so I flagged the CRRT advice as an extrapolation. The US 'Nephrotoxicity' warning and the UK IV SmPC §4.4 benzyl-alcohol warning are label text.

**Sources:** US FDA label (Sagent) – Patients with Renal/Hepatic Impairment; WARNINGS – Nephrotoxicity – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.2, §4.4, §4.9, §5.2 – https://www.medicines.org.uk/emc/product/100601/smpc; UK SmPC Dalacin C Phosphate §4.4 (benzyl alcohol) – https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 LinDACIN 【注意事項】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; Hunt JP et al. J Infect Chemother 2023;29:1119-25, PMID 37572979 – https://pubmed.ncbi.nlm.nih.gov/37572979/

### B3 · Hepatic dose

No adjustment (仿單/US/UK). In moderate–severe liver disease the t½ is prolonged, but accumulation is rare with q8h dosing (中度至嚴重肝疾半衰期延長，但不必降低劑量). Check liver enzymes periodically in severe liver disease (US Precautions).

**Why:** The column is empty. US Precautions–General says 'dosage modification in patients with liver disease may not be necessary. However, periodic liver enzyme determinations should be made when treating patients with severe liver disease.' UK §4.2 says modification is not necessary in hepatic insufficiency. The LinDACIN 仿單 says '肝病患者不必考慮降低劑量'.

**Sources:** US FDA label (Sagent) – PRECAUTIONS General – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.2 – https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN 【注意事項】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### B4 · Pediatric dose

<span color="blue">`PO`</span> cap (only if the child can swallow capsules whole): 仿單 >1 mo 8–25 mg/kg/day ÷3–4. US: 8–16 mg/kg/day (serious), 16–20 mg/kg/day (more severe) ÷3–4. UK: 12–25 mg/kg/day ÷ q6h. <br><span color="green">`IV`</span>/<span color="orange">`IM`</span> 1 mo–16 y: 20–40 mg/kg/day ÷3–4 (US; B.B. 仿單 IM 20–40), or 350–450 mg/m²/day (US). UK: 15–25 (serious) / 25–40 (severe) mg/kg/day ÷3–4, ≥300 mg/day in severe infection. <br>Neonates <1 mo: 15–20 mg/kg/day ÷3–4 (US; 仿單 IM, lower for preterm). By PMA: ≤32 wk 5 mg/kg IV q8h; >32–40 wk 7 mg/kg IV q8h (US). <br>⚠ B.B. contains benzyl alcohol, linked to 'gasping syndrome' in neonates (US). The UK SmPC contraindicates benzyl-alcohol-containing clindamycin in premature babies/neonates and advises against >1 wk in children <3 y unless necessary. <br>Dose on total body weight regardless of obesity (US/UK).

**Why:** The column is empty. I checked each figure. Cleocin capsule D&A gives 8–16 / 16–20 mg/kg/day in 3–4 doses, with capsules unsuitable if the child cannot swallow them whole. UK caps §4.2 gives 12–25 mg/kg/day six-hourly. The LinDACIN 仿單 says '每日8~25mg/kg平分3或4次投藥'. US injection D&A gives 20–40 mg/kg/day for 1 mo–16 y, 350/450 mg/m², <1 mo 15–20 mg/kg/day, and Table 3 PMA dosing. The B.B. 仿單 gives neonates 15–20 and children >1 mo 20–40 mg/kg/day IM. UK IV §4.2 gives 15–25 / 25–40 and ≥300 mg/day. UK IV §4.3/4.4 covers benzyl alcohol. One conflict matters: the TW insert gives a neonatal IM dose for B.B., but B.B. contains benzyl alcohol, which the UK label contraindicates in neonates.

**Sources:** US FDA label CLEOCIN HCl caps – DOSAGE AND ADMINISTRATION – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df9a2a41-b132-4f43-8940-b2d773b1369a; US FDA label (Sagent) – D&A Pediatric; Benzyl Alcohol Toxicity in Neonates – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.2 – https://www.medicines.org.uk/emc/product/100601/smpc; UK SmPC Dalacin C Phosphate §4.2, §4.3, §4.4 – https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 B.B. 【用法用量】【成份】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e; TW 仿單 LinDACIN 【用法用量】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### B5 · Indications

SSTI, Pneumonia, Pelvic, IAI, Peritonitis, Bacteremia, Sepsis, Osteoarthritis

**Why:** The column is empty. The US injection label's INDICATIONS list these: lower RTI incl. pneumonia/empyema/lung abscess → Pneumonia; skin and skin-structure infections → SSTI; gynecological infections (endometritis, tubo-ovarian abscess, pelvic cellulitis, vaginal cuff) → Pelvic; intra-abdominal infections incl. peritonitis and abscess → IAI + Peritonitis (the Pip-Tazo entry tags the same way); septicemia → Bacteremia; bone and joint infections incl. osteomyelitis → Osteoarthritis. Do NOT tag Meningitis: the US, UK and TW labels all say clindamycin does not reach CSF. Leave out Endocarditis, which only the TW insert lists. CAP/HAP/cSSTI are not specifically labelled. Surgical prophylaxis is guideline-only, so it goes in Notes.

**Sources:** US FDA label (Sagent) – INDICATIONS AND USAGE; WARNINGS (Usage in Meningitis) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C Phosphate §4.1 – https://www.medicines.org.uk/emc/product/1078/smpc

### B6 · Coverage

MSSA, Staphylococcus, Streptococcus, Anaerobes, Bacteroides, Finegoldia

**Why:** The column is empty. US 'Antimicrobial Activity' lists MSSA, S. pneumoniae (pen-S), S. pyogenes, C. perfringens, Fusobacterium, Peptostreptococcus and Prevotella. Its in-vitro list adds MS S. epidermidis, S. agalactiae/anginosus/mitis/oralis and Finegoldia magna. UK §5.1 lists S. aureus, S. epidermidis, streptococci and the B. fragilis group as susceptible, and lists enterococci, Enterobacteriaceae and Clostridia spp. as resistant. Do NOT tag MRSA. UK §5.1 says '>90% of MRSA are resistant… should not be used while awaiting susceptibility results if there is any suspicion of MRSA', and the LinDACIN 仿單 特性 lists MRSA as resistant depending on region. IDSA SSTI 2014 supports clindamycin for MRSA SSTI only when the isolate is susceptible, so put that in Notes. Do NOT tag Enterococcus/E. faecalis (US: 'except E. faecalis'). Chlamydia and Mycoplasma hominis appear only in the TW insert, so put them in Notes rather than as tags. Toxoplasma, Pneumocystis and Plasmodium have no option, so they go in Notes.

**Sources:** US FDA label (Sagent) – Antimicrobial Activity; D&A – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §5.1 – https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN 【特性】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; IDSA SSTI guideline 2014 (Stevens, PMID 24973422) – https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

### B7 · Side Effects

GI, LFT↑, AKI, neutropenia, leukopenia, thrombocytopenia, DRESS, SJS/TEN, thrombophlebitis

**Why:** The column is empty. All of these are existing options. The label support is: GI (diarrhoea, CDAD/pseudomembranous colitis, nausea, vomiting, abdominal pain, oesophagitis with oral use); LFT↑ (jaundice, abnormal LFTs); AKI (US 'Nephrotoxicity', UK §4.8 'acute kidney injury'); haematologic (transient neutropenia/leukopenia, agranulocytosis, thrombocytopenia, eosinophilia); DRESS and SJS/TEN (US Warnings; UK §4.4); thrombophlebitis after IV infusion (US Local Reactions). Other effects with no tag option go in Notes: anaphylaxis/Kounis syndrome, AGEP, metallic taste, and cardiopulmonary arrest/hypotension after too-rapid IV.

**Sources:** US FDA label (Sagent) – ADVERSE REACTIONS; WARNINGS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.4, §4.8 – https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN 【副作用】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### B8 · Monitor

renal, LFT, CBC

**Why:** US 'Laboratory Tests' says 'During prolonged therapy periodic liver and kidney function tests and blood counts should be performed.' UK §4.4 says 'Periodic liver and kidney function tests should be carried out during prolonged therapy. Such monitoring is also recommended in neonates and infants', and recommends renal monitoring with pre-existing dysfunction or nephrotoxins. Two things go in Notes/Drug Interactions rather than a PT/INR tag: CDAD (bowel frequency) and PT/INR when the patient is on a vitamin K antagonist (UK §4.5).

**Sources:** US FDA label (Sagent) – PRECAUTIONS Laboratory Tests; Nephrotoxicity – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.4 – https://www.medicines.org.uk/emc/product/100601/smpc

### B9 · Mechanism

Lincosamide. Binds the 23S rRNA of the 50S ribosomal subunit → inhibits bacterial protein synthesis. Mainly bacteriostatic; high concentrations may be slowly bactericidal against sensitive strains (UK §5.1). PK/PD: fAUC/MIC. Clindamycin phosphate (inj) is an inactive prodrug, rapidly hydrolysed to active clindamycin. Resistance: modification of 23S rRNA bases, MLSB type (constitutive or inducible). Complete cross-resistance with lincomycin; cross-resistance sometimes with macrolides/streptogramin B (overlapping binding sites). D-zone test for macrolide-resistant staphylococci/β-hemolytic streptococci (US).

**Why:** The column is empty. US 'Mechanism of Action' says it binds the 23S RNA of the 50S subunit and is bacteriostatic. US 'Resistance' covers 23S modification, complete cross-resistance with lincomycin, and the D-zone test. UK §5.1 covers 'primarily bacteriostatic… high concentrations may be slowly bactericidal', MLSB resistance and fAUC/MIC. The B.B. 仿單 【藥理】 describes the 50S binding and prodrug hydrolysis.

**Sources:** US FDA label (Sagent) – Mechanism of Action; Resistance – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §5.1 – https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 B.B. 【藥理】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e

### B10 · Drug Interactions

NMBAs: clindamycin has neuromuscular-blocking properties that may enhance other NMBAs. Use with caution (US/UK/仿單). <br>CYP3A4/5 substrate: strong 3A4 inhibitors ↑ levels → monitor for ADRs; strong inducers (e.g. rifampicin) ↓ levels → monitor for loss of effect (US/UK). In vitro, clindamycin only moderately inhibits CYP3A4 and does not inhibit 1A2/2C9/2C19/2E1/2D6. <br>Vitamin K antagonists (warfarin): ↑PT/INR and/or bleeding → monitor coagulation frequently (UK §4.5). <br>Erythromycin: antagonism (仿單 與 erythromycin 有拮抗作用). The two share a 50S binding site (UK §5.1). <br>Antiperistaltics (opiates, diphenoxylate/atropine): may prolong or worsen antibiotic-associated diarrhoea/colitis; avoid (B.B. 仿單 警告; UK IV §4.4).

**Why:** The column is empty. US PRECAUTIONS 'Drug Interactions' covers NMBAs and CYP3A4/5 inhibitors and inducers. UK §4.5 adds 'Vitamin K antagonists: Increased coagulation tests (PT/INR) and/or bleeding'. The LinDACIN 仿單 【交互作用】 reads 'Clindamycin 與 erythromycin 間有拮抗作用'. I left out the incompatibility list (ampicillin, phenytoin, barbiturates, aminophylline, Ca gluconate, MgSO4), because the owner removed storage/stability content. The owner should decide whether that list belongs.

**Sources:** US FDA label (Sagent) – PRECAUTIONS Drug Interactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.5 – https://www.medicines.org.uk/emc/product/100601/smpc; TW 仿單 LinDACIN 【交互作用】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

### B11 · Pregnancy

US FDA letter categories retired (no letter category). Crosses the placenta; amniotic fluid levels are ~30% of maternal (UK). Systemic use in the 2nd/3rd trimester has not been associated with ↑ congenital abnormalities. There are no adequate 1st-trimester studies → use only if clearly needed; no teratogenicity in rat/mouse studies (US Cleocin; UK §4.6). 仿單: 孕婦使用之安全性尚未確立，請謹慎使用. B.B. inj contains benzyl alcohol, which can cross the placenta (UK IV SmPC §4.6).

**Why:** The column is empty. The Cleocin capsule label 'Pregnancy: Teratogenic effects' text and UK caps/IV §4.6 support the proposal. Both TW inserts say safety in pregnancy is not established. The hospital site still lists category B (see hospital issues).

**Sources:** US FDA label CLEOCIN HCl caps – PRECAUTIONS Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df9a2a41-b132-4f43-8940-b2d773b1369a; UK SmPC Dalacin C caps §4.6 – https://www.medicines.org.uk/emc/product/100601/smpc; UK SmPC Dalacin C Phosphate §4.6 – https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 B.B. 【注意事項】4; LinDACIN 【懷孕與哺乳】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e

### B12 · Breastfeeding

LactMed: not a reason to stop breastfeeding, but an alternate drug may be preferred. Monitor the infant for diarrhea, candidiasis (thrush, diaper rash) and, rarely, blood in the stool (antibiotic-associated colitis). Milk levels are <0.5–3.8 µg/mL (US/UK; 仿單 0.7–3.8 µg/mL).

**Why:** The column is empty. The text matches the LactMed 'Summary of Use during Lactation' (NBK501208, rev 2025-02-15), US 'Nursing Mothers' and UK §4.6. The LinDACIN 仿單 gives 0.7~3.8 µg/mL.

**Sources:** LactMed Clindamycin NBK501208 – https://www.ncbi.nlm.nih.gov/books/NBK501208/; US FDA label (Sagent) – Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.6 – https://www.medicines.org.uk/emc/product/100601/smpc

### B13 · Notes

院內品項: LinDACIN 150 mg cap (LIN01, 衛署藥製字第043991號); B.B. inj 150 mg/mL, 2 mL amp (BB901, 衛署藥製字第036469號). <br>⚠ Boxed warning: CDAD/pseudomembranous colitis, which can occur >2 months after stopping. Reserve for serious infections where less toxic agents are inappropriate; stop if significant diarrhea (US/UK/仿單). Older, severely ill patients: monitor bowel frequency (US). <br>Not for meningitis: inadequate CSF penetration (不入CSF). <br>MRSA: not reliable (UK §5.1: >90% of MRSA resistant, do not use while MRSA is suspected and results are pending; up to 50% of MSSA resistant in some areas) → use only with confirmed susceptibility. IDSA SSTI 2014 lists clindamycin as an oral option for MRSA SSTI (pyomyositis: susceptible isolates). D-test macrolide-resistant staph/β-hemolytic strep (US). <br>GAS necrotizing fasciitis/streptococcal TSS and clostridial myonecrosis: penicillin + clindamycin (toxin suppression) (IDSA SSTI 2014). <br>Hypersensitivity: anaphylaxis, Kounis syndrome, AGEP reported (US/UK); unpleasant/metallic taste with high-dose IV (US). <br>B.B. contains benzyl alcohol: gasping syndrome risk in neonates (US); UK contraindicates it in neonates/premature infants. IV: dilute, never bolus; rapid IV can cause hypotension/cardiopulmonary arrest. <br>Cap: full glass of water, ≥30 min before lying down (oesophagitis/ulcer). <br>TW 仿單-only uses (no tag): AIDS toxoplasmic encephalitis (600–1200 mg q6h + pyrimethamine), AIDS PCP (300–400 mg q6h + primaquine ×21 d), P. falciparum malaria (20 mg/kg/day ≥5 d, alone or + quinine/amodiaquine), C. trachomatis cervicitis (450 mg QID ×10–14 d). <br>Surgical prophylaxis: β-lactam-allergy alternative per ASHP/IDSA/SIS/SHEA 2013 (PMID 23327981; dose not re-verified, full text blocked). <br>禁忌: hypersensitivity to clindamycin or lincomycin. <br>TDM not routine (no label or guideline target).

**Why:** The column is empty. Each item is quoted from a source. US BOXED WARNING; US/UK/仿單 meningitis statements; UK §5.1 MRSA/MSSA resistance figures; US 'Resistance' D-zone test; IDSA SSTI 2014 text, fetched from idsociety.org: 'Penicillin plus clindamycin is recommended for treatment of documented group A streptococcal necrotizing fasciitis' and 'penicillin and clindamycin… for clostridial myonecrosis'. US 'Benzyl Alcohol Toxicity'; UK IV §4.3. US 'General': not bolus, infuse over 10–60 min; ADR 'Cardiopulmonary arrest and hypotension… too rapid IV'. The TW-only regimens I read from the LinDACIN 仿單 page images. The malaria dose '以20mg/kg/day劑量經口或經鼻胃管給予至少5日' is not in the brief's transcription. The surgical-prophylaxis line is flagged because I could reach only the PMID (verified by esummary), not the full text.

**Sources:** US FDA label (Sagent) – BOXED WARNING; WARNINGS; Resistance; ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6967b3-5563-4bed-9eee-d400f800e799; UK SmPC Dalacin C caps §4.4, §5.1 – https://www.medicines.org.uk/emc/product/100601/smpc; UK SmPC Dalacin C Phosphate §4.3, §4.4 – https://www.medicines.org.uk/emc/product/1078/smpc; TW 仿單 LinDACIN 【適應症】說明 9–10, malaria paragraph, 【用法用量】 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b; IDSA SSTI 2014 (Stevens DL, CID 2014;59:e10-52, PMID 24973422) – https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 – https://pubmed.ncbi.nlm.nih.gov/23327981/

### B14 · Page body

Add a short monograph in the house style used by the Pipe Tazo page. Heading '## **Clindamycin (LinDACIN / B.B.) - Complete Monograph**', then sections separated by '---': Category (Lincosamide, ATC J01FF01 – UK §5.1); Mechanism; Indications (label-approved list US/UK, plus a line for TW 仿單-only uses and off-label uses); Coverage (susceptible / NOT covered: MRSA unreliable (UK >90% resistant), Enterococcus, Enterobacteriaceae, Clostridium spp. other than C. perfringens (UK §5.1/US D&A); Pseudomonas and other aerobic Gram-negatives – not stated in clindamycin labels, mark unsourced); Adult Dose (PO / IV / IM table with infusion-rate table 300 mg/50 mL/10 min, 600 mg/50 mL/20 min, 900 mg/50–100 mL/30 min, 1200 mg/100 mL/40 min, ≤12 mg/mL per B.B. 仿單, ≤18 mg/mL US/UK); Renal/HD/CRRT; Hepatic; Pediatric (PO / IV-IM / neonatal PMA table + benzyl-alcohol warning); Side Effects; Monitor; Drug Interactions; Pregnancy; Breastfeeding; Notes; References. References should list the US injection label (setid 7a6967b3-5563-4bed-9eee-d400f800e799), Cleocin HCl caps (setid df9a2a41-b132-4f43-8940-b2d773b1369a), UK eMC 100601 and 1078, the TW 仿單 pages for 衛署藥製字第043991號 and 036469號, LactMed NBK501208, IDSA SSTI 2014 (PMID 24973422), Bratzler 2013 surgical prophylaxis (PMID 23327981) and Hunt 2023 (PMID 37572979). Content should mirror the agreed columns B1–B13. No storage/stability/compatibility content.

**Why:** Other entries, e.g. Pipe Tazo, carry a full monograph with a References section in the body. This new page is blank. Every body statement must trace to the sources cited in B1–B13.

**Sources:** Existing entry style: Pipe Tazo page https://app.notion.com/p/235c496dfff180688a7acaa46c64c7c4; Sources as in B1–B13

### B15 · Abx (title)

Optional: 'LinDACIN / B.B. (Clindamycin)', or keep the title and list both products in Notes (B13).

**Why:** The hospital stocks two clindamycin products: LIN01 capsule and BB901 injection. The title names only the capsule, so a reader may miss that the IV/IM product is B.B. This is a style decision for the owner; nothing is factually wrong.

**Sources:** TW 仿單 B.B. 衛署藥製字第036469號 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_a1c8370b-3c6f-4d31-b8c1-9f12610c3e9e; TW 仿單 LinDACIN 衛署藥製字第043991號 – https://mcp.fda.gov.tw/insert/pdfcasefile/i_24ea12f5-ce70-461c-bcc6-3d1a2172829b

## Apply log

- Adult dose: merged both proposals (TW 仿單 PO 150–450 mg q6h plus US/UK ranges; IV/IM B.B. ranges; IM ≤600 mg per site; IV dilution ≤12 mg/mL (TW) or ≤18 mg/mL (US/UK), ≤30 mg/min, never bolus; β-hemolytic strep ≥10 d; TW PID and strep pharyngitis regimens)
- Pediatric dose: merged (PO TW/US/UK; IV/IM 1 mo–16 y 20–40 mg/kg/day or 350–450 mg/m²/day, UK 15–40 mg/kg/day; neonates by PMA; benzyl alcohol gasping-syndrome warning and UK contraindication; total body weight)
- Renal dose, HD, CRRT: merged (no adjustment per TW/US/UK; HD/PD no supplement; CRRT extrapolation citing Hunt 2023 PMID 37572979 [verify]; nephrotoxicity monitoring; benzyl alcohol accumulation)
- Hepatic dose: no adjustment, t½ prolonged, periodic liver enzymes in severe liver disease, benzyl alcohol caution
- Indications multi-select: Pneumonia, SSTI, Pelvic, IAI, Peritonitis, Bacteremia, Sepsis, Osteoarthritis
- Coverage multi-select: MSSA, Staphylococcus, Streptococcus, Anaerobes, Bacteroides, Finegoldia
- Side Effects multi-select: GI, AKI, nephrotoxicity, LFT↑, hematologic, neutropenia, leukopenia, thrombocytopenia, DRESS, SJS/TEN, thrombophlebitis
- Monitor multi-select: renal, LFT, CBC
- Mechanism: merged text (lincosamide, 23S rRNA/50S, bacteriostatic, fAUC/MIC, phosphate prodrug, MLSB resistance, D-test)
- Drug Interactions: merged (NMBAs, CYP3A4 inhibitors and inducers, warfarin INR, erythromycin antagonism, antiperistaltics)
- Pregnancy: no letter category; placenta, trimester data, TW 仿單 wording, benzyl alcohol
- Breastfeeding: LactMed summary, milk levels, infant monitoring
- Notes: merged (院內品項 LIN01/BB901 with licence numbers, boxed CDAD warning, meningitis, PK, MRSA caveats with IDSA 2011/2014, GAS/TSS toxin suppression, hypersensitivity, IV administration, TW-only uses, surgical prophylaxis, contraindications, TDM not routine)
- Page body: added the full monograph in the Pipe Tazo house style (Category ATC J01FF01, Mechanism, Indications, Coverage incl. not-covered, Adult Dose table + infusion-rate table, Renal/HD/CRRT, Hepatic, Pediatric table, Side Effects, Monitor, Drug Interactions, Pregnancy, Breastfeeding, Notes, Brief Summary table, References); no storage/stability content
- References section: US Sagent inj setid 7a6967b3…, CLEOCIN HCl setid df9a2a41…, UK eMC 100601 and 1078, TW 仿單 043991 and 036469 (TFDA pages + PDFs), LactMed NBK501208, IDSA SSTI 2014 PMID 24973422, IDSA MRSA 2011 PMID 21208910, Bratzler 2013 PMID 23327981, Hunt 2023 PMID 37572979
- Renewed date set to 2026-10-05 (is_datetime 0)

**Apply-step notes:**

- Abx (title) rename: not applied, because the fix was marked optional and its alternative ('keep the title and list both products in Notes') was chosen; both products are listed in Notes

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
