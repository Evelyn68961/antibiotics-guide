# New entry: Cephalexin

- **Notion entry:** [Cephalexin](https://app.notion.com/3f0c496dfff181eca779c5a62fea2d70). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** CEP02 (Cephalexin cap 500 mg), ULE02 (Ulexin susp 25 mg/mL)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/cephalexin.json` (plus any Taiwan insert text files)

## Product and sources

Cephalexin (cefalexin), 1st-gen oral cephalosporin, ATC J01DB01. Hospital stocks two products: CEP02 Cephalexin cap 500 mg (信東 賜福力欣膠囊, 衛署藥製字第015660號, NHI AC15660100) and ULE02 Ulexin for oral suspension 125 mg/5 mL = 25 mg/mL, 1.5 g/60 mL bottle (優良 優力黴素, 衛署藥製字第017280號, NHI AC17280151). Sources used: US FDA label, Aurobindo cephalexin capsules (DailyMed setid 8e28f049-6110-4473-830f-c494191a7197, v19, 02 Oct 2026); UK SmPC Keflex Suspension 125 mg/5 ml (eMC 9144, rev 04/11/2025); LactMed NBK501487 (rev 2024-11-15); TFDA inserts for both stocked products. Scope: the user's "do task 2,3,5" doesn't match any task this job can identify, so I did only this read-only reviewer-A audit. No Notion edits were made.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 250 mg q6h or 500 mg q12h (US §2.1); UK SmPC: 1–4 g/day divided, most infections 500 mg q8h; SSTI / strep pharyngitis / mild uncomplicated UTI 250 mg q6h or 500 mg q12h (UK 4.2)<br>TW 仿單: 賜福力欣 cap 250–500 mg q6h; Ulexin 250 mg q6h, severe 500 mg–1 g q6h<br>Severe (US §2.1) or less-susceptible organisms (UK 4.2): up to 4 g/day in 2–4 divided doses<br>Needs more than 4 g/day → switch to a parenteral cephalosporin (UK 4.2)<br>Duration 7–14 days (US §2.1); β-hemolytic strep at least 10 days (UK 4.2)<br>With or without food (US §12.3)<br>Stocked: 500 mg cap (CEP02 賜福力欣); susp 125 mg/5 mL = 25 mg/mL (ULE02 優力黴素)

**Why:** New entry. Text is built only from label sections and covers both stocked dosage forms. US §2.1: 'recommended dosage ... 250 mg every 6 hours, but a dose of 500 mg every 12 hours may be administered ... For more severe infections ... up to 4 grams daily in two to four equally divided doses.' UK 4.2: 'adult dosage ranges from 1-4 g daily ... most infections will respond to a dosage of 500 mg every 8 hours ... If daily doses ... greater than 4 g are required, parenteral cephalosporins ... should be considered.' TW Ulexin 3.1: 每六小時250 mg; 嚴重感染 每六小時500 mg至1 Gm. US §12.3: 'acid stable and may be given without regard to meals.'

**Sources:** US FDA label (DailyMed, Aurobindo cephalexin capsules, v19) §2.1, §12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC Keflex Suspension 125 mg/5 ml §4.2 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert ULEXIN 衛署藥製字第017280號 §3.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號; TW insert Cephalexin Cap 500mg TBC 衛署藥製字第015660號 §3.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號

### A2 · Renal dose, HD, CRRT

CrCl ≥60: no adjustment<br>CrCl 30–59: no adjustment, but max 1 g/day<br>CrCl 15–29: 250 mg q8–12h<br>CrCl 5–14 (not on dialysis): 250 mg q24h<br>CrCl 1–4 (not on dialysis): 250 mg q48–60h<br>(US label Table 1, adults and patients aged 15 or older. The TW inserts give no CrCl numbers (腎功能降低時應減量), and neither does the UK SmPC: 'reduce dosage if renal function is markedly impaired')<br><br>HD: US label says information is insufficient. UK SmPC 4.4: if dialysis is required, max 500 mg/day. HD and PD remove cefalexin (UK 5.2) → give the dose after HD on dialysis days (timing not label-stated — flagged)<br>PD: no label dose; UK 4.4 max 500 mg/day on dialysis applies<br>CRRT: no label data — not established; ID-pharmacist input<br>Unadjusted dose in renal impairment → seizures/neurotoxicity (US 5.4, UK 4.4)<br>Children under 15 y with renal impairment: insufficient information (US §2.3)

**Why:** Neither stocked-product Taiwan insert gives numbers (TBC 5.1 '腎機能降低時應減量'; Ulexin 6.7 '其安全劑量，可能比一般建議劑量低'), so under the ground rules US Table 1 applies, with the other labels' statements listed alongside. US §2.3 Table 1 lists the tiers above, with '*There is insufficient information to make dose adjustment recommendations in patients on hemodialysis.' Correction to the source brief: the UK SmPC is not limited to 'reduce dose'. §4.4 also says 'If dialysis is required for renal failure, the daily dose of cefalexin should not exceed 500mg', and §5.2 says 'Haemodialysis and peritoneal dialysis will remove cefalexin from the blood.' No label or guideline covers CRRT for this oral agent, and I did no PubMed lookup, so the entry should say that rather than give an unsourced number.

**Sources:** US FDA label §2.3 Table 1, §5.4, §8.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.2, §4.4, §5.2 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert TBC §5.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號; TW insert Ulexin §6.7 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號

### A3 · Hepatic dose

No dose adjustment in any label (US, UK, TW); over 90% is excreted unchanged in urine (US §12.3)<br>Hepatic impairment is a risk factor for prolonged PT → monitor PT in at-risk patients (US §5.5)<br>Transient hepatitis / cholestatic jaundice reported rarely (US §6.1, UK 4.8)

**Why:** No label has a hepatic dosing section. US §12.3: 'over 90% of the drug was excreted unchanged in the urine within 8 hours.' US §5.5: 'Those at risk [of prolonged PT] include patients with renal or hepatic impairment ... Monitor prothrombin time in patients at risk.' US §6.1 / UK 4.8: 'transient hepatitis and cholestatic jaundice have been reported.'

**Sources:** US FDA label §5.5, §6.1, §12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.8 https://www.medicines.org.uk/emc/product/9144/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> Ulexin susp 125 mg/5 mL (25 mg/mL)<br>Over 1 year: 25–50 mg/kg/day in divided doses (TW inserts: 分四次 = q6h; UK: may give q12h for SSTI, strep pharyngitis, mild UTI)<br>Severe: 50–100 mg/kg/day divided (US §2.2; UK: dose may be doubled)<br>Otitis media: 75–100 mg/kg/day divided q6h (US §2.2; UK: 4 divided doses)<br>β-hemolytic strep: at least 10 days<br>Max: not to exceed the adult dose (US §2.2); 25 kg or more: adult dose, 250 mg q6h, severe 500 mg–1 g q6h (TW Ulexin)<br>UK simplified: under 5 y 125 mg (5 mL) q8h; 5 y and older 250 mg (10 mL) q8h<br>Susp 25 mg/mL (TW Ulexin table): 10 kg 2.5–5 mL QID; 20 kg 5–10 mL QID; 40 kg 10–20 mL QID<br>Capsule only for children who can swallow it (US §2.2)<br>Under 1 year: safety/efficacy not established (US §8.4)

**Why:** US §2.2: '25 to 50 mg/kg ... In severe infections ... 50 to 100 mg/kg ... otitis media ... 75 to 100 mg/kg ... should not exceed the adult dosage ... only be used in children and adolescents capable of ingesting the capsule.' US 2 highlights give otitis media q6h. UK 4.2: 'Children under 5 years. 125 mg every 8 hours. Children 5 years and over: 250 mg every 8 hours. In severe infections, the dosage may be doubled.' TW Ulexin 3.1 table: 體重超過25公斤 每六小時250 mg; 10/20/40 kg 半至1 / 1至2 / 2至4 茶匙 每日四次 (1 tsp = 5 mL = 125 mg), i.e. 25–50 mg/kg/day. US §8.4: 'not been established in pediatric patients younger than one year old.'

**Sources:** US FDA label §2.2, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.2 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert Ulexin §3.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號; TW insert TBC §3.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號

### A5 · Indications

["SSTI", "UTI", "Osteoarthritis"]

**Why:** Only existing options are used. US §1.3 skin and skin structure infections → SSTI. US §1.5 genitourinary infections incl. acute prostatitis → UTI. US §1.4 bone infections and UK 4.1 'Bone and joint infections' → Osteoarthritis (the owner uses this tag for bone/joint infection, as in the AmoClav entry). The label's 'respiratory tract infections' (S. pneumoniae/S. pyogenes, mainly pharyngitis; UK 4.2 'streptococcal pharyngitis') doesn't justify the Pneumonia/CAP tags, so they are left out. Otitis media, RTI, acute prostatitis and dental infections (UK 4.1) have no matching tag and are listed in Notes (A13).

**Sources:** US FDA label §1.1–1.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/9144/smpc

### A6 · Coverage

["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Proteus", "Haemophilus"]

**Why:** US §12.4 lists activity against S. aureus (methicillin-susceptible isolates only), S. pneumoniae (penicillin-susceptible), S. pyogenes, E. coli, H. influenzae, K. pneumoniae, M. catarrhalis and P. mirabilis. UK 5.1 agrees. MSSA is chosen over the broader 'Staphylococcus' tag because US §12.4 says 'Methicillin-resistant staphylococci ... are resistant.' Proteus covers P. mirabilis only, not P. vulgaris; this is stated in Notes. Moraxella has no tag and goes in Notes. Neisseria is not added: the TW inserts mention 腦膜炎球菌/淋病雙球菌, but neither the US nor the UK label does, and Ulexin's 'Neisseria catarrhalis' is Moraxella.

**Sources:** US FDA label §12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §5.1 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert Ulexin §10.2 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號

### A7 · Side Effects

["GI", "SJS/TEN", "CNS", "neurotoxicity", "LFT↑", "hematologic", "anemia", "neutropenia", "thrombocytopenia", "coagulopathy", "AKI"]

**Why:** Each tag maps to a label statement. GI: US §6 'most common ... diarrhea, nausea, vomiting, dyspepsia and abdominal pain.' SJS/TEN: US §5.1. CNS: US §6.1 'dizziness, fatigue, headache, agitation, confusion, hallucinations' and §5.4 seizures. Neurotoxicity: UK 4.4 'Reports of neurotoxicity ... encephalopathy, myoclonus and seizures.' LFT↑: US §6.1 'slight elevations in AST and ALT', transient hepatitis, cholestatic jaundice. Hematologic, anemia, neutropenia and thrombocytopenia: US §6.1 'Eosinophilia, neutropenia, thrombocytopenia, hemolytic anemia' and §5.3 intravascular hemolysis. Coagulopathy: US §5.5 prolonged PT. AKI: US §6.1 'Reversible interstitial nephritis.' AGEP (UK 4.4/4.8) and CDAD have no side-effect tag and go in Notes. DRESS is not in either label, so it is not added.

**Sources:** US FDA label §5.1–5.5, §6, §6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.4, §4.8 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert Ulexin §8.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號

### A8 · Monitor

["renal", "PT/INR", "CBC"]

**Why:** Renal: US §8.6 'careful clinical observation and laboratory studies including renal function monitoring.' PT/INR: US §5.5 'Monitor prothrombin time in patients at risk' (renal or hepatic impairment, poor nutrition, protracted course, anticoagulants). CBC: US §5.3 'If anemia develops ... perform a diagnostic work-up for drug-induced hemolytic anemia', plus neutropenia and thrombocytopenia in §6.1. CBC monitoring is conditional and not routine, which can be noted. No label calls for LFT monitoring.

**Sources:** US FDA label §5.3, §5.5, §8.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197

### A9 · Mechanism

Bactericidal; inhibits bacterial cell-wall (mucopeptide/peptidoglycan) synthesis, like penicillin (US §12.4, UK 5.1, TW TBC 10.1). Not inactivated by staphylococcal penicillinase (TW TBC 10.1; UK 5.1 lists penicillinase-producing staphylococci as susceptible). 1st-gen cephalosporin, ATC J01DB01 (UK 5.1)

**Why:** US §12.4: 'bactericidal agent that acts by the inhibition of bacterial cell-wall synthesis.' TW TBC insert 10.1: '其作用機序類似Penicillin之抑制細菌胞壁之Mucopeptide合成，Penicillinase不影響其作用.' UK 5.1: 'first-generation cephalosporins, ATC code: J01DB01.' PBP binding isn't stated in these labels, so it is left out rather than added unsourced.

**Sources:** US FDA label §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §5.1 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert TBC §10.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號

### A10 · Drug Interactions

Metformin: ↑ metformin (Cmax +34%, AUC +24%, renal CL −14%) → monitor glucose, adjust metformin dose (US §7.1, §12.3)<br>Probenecid: ↓ renal excretion of cephalexin; co-administration not recommended (US §7.2)<br>Aminoglycosides, other cephalosporins, furosemide / potent diuretics: ↑ nephrotoxicity risk (UK 4.4)<br>Gentamicin + cytotoxics (leukaemia): hypokalaemia reported (UK 4.5)<br>Anticoagulants (warfarin): prolonged PT risk → monitor PT/INR (US §5.5)<br>Lab: false-positive urine glucose with Benedict/Fehling/Clinitest (US §7.3, UK 4.4, TW inserts); positive direct Coombs, including in newborns of treated mothers (US §5.3, UK 4.4, TW Ulexin 5.1.5)

**Why:** US §7.1: 'increased plasma metformin concentrations and decreased renal clearance ... Careful patient monitoring and dose adjustment of metformin is recommended.' US §7.2: 'Co-administration of probenecid with cephalexin is not recommended.' UK 4.4: 'Concurrent administration with ... aminoglycosides, other cephalosporins, or furosemide ... may increase the risk of nephrotoxicity.' UK 4.5: 'Hypokalaemia has been described in patients taking cytotoxic drugs for leukaemia when they were given gentamicin and cefalexin.' US §5.5 names anticoagulant therapy as a PT risk factor. US §7.3 covers false-positive urine glucose. TW Ulexin 5.1.4 adds Clinitest, and 5.1.5 covers Coombs.

**Sources:** US FDA label §5.3, §5.5, §7.1–7.3, §12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.4, §4.5 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert Ulexin §5.1.4–5.1.5 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號

### A11 · Pregnancy

Decades of use: no established drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; animal studies show no harm (US §8.1). UK SmPC 4.6: no evidence of teratogenicity; use with caution. TW inserts: 孕婦應謹慎使用 / 安全性尚未確定. 未證實致畸風險 (FDA letter categories retired — do not cite 'B')

**Why:** US §8.1 risk summary: 'Available data from published epidemiologic studies and pharmacovigilance case reports over several decades ... have not established drug-associated risks of major birth defects, miscarriage, or adverse maternal or fetal outcomes.' UK 4.6: 'no evidence of teratogenicity, caution should be exercised.' TW TBC 5.1: '孕婦應謹慎使用'. TW Ulexin 6.1: '孕婦使用本劑的安全性尚未確定'. Per the ground rules, no letter category is used.

**Sources:** US FDA label §8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert Ulexin §6.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號; TW insert TBC §5.1 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號

### A12 · Breastfeeding

Acceptable (LactMed); low milk levels, RID under 1% (US §8.2; ~0.5% LactMed); an alternative for mastitis. Monitor infant for diarrhea and thrush (LactMed); 1 case report of infant TEN after prior cefazolin sensitisation (LactMed). UK SmPC 4.6 advises caution (infant candidiasis, theoretical sensitisation). 哺乳可用

**Why:** LactMed summary: 'low levels in milk that are usually not expected to cause adverse effects ... alternative for the treatment of mastitis ... diarrhea or thrush ... A rare case of a severe allergic reaction ... Cephalexin is acceptable in nursing mothers.' LactMed drug levels: infant dose 'about 0.5% of the maternal weight-adjusted dosage'. US §8.2: 'relative infant dose (RID) is considered to be <1%.' UK 4.6: 'Caution should be exercised ... risk of candidasis ... theoretical possibility of later sensitisation.' Write '<1%' as 'under 1%' or escape it as '\<1%' in Notion.

**Sources:** LactMed Cephalexin NBK501487 (rev 2024-11-15) https://www.ncbi.nlm.nih.gov/books/NBK501487/; US FDA label §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/9144/smpc

### A13 · Notes

Penicillin allergy: cross-hypersensitivity in up to 10% (US §5.1); 青黴素過敏者小心使用; CI if cephalosporin allergy (US §4)<br>CrCl 30–59: max 1 g/day (US Table 1). TW 仿單 500 mg q6h (2 g/day) and UK 500 mg q8h (1.5 g/day) exceed this<br>Neurotoxicity (encephalopathy, myoclonus, seizures): elderly, severe renal impairment, CNS disorders; seizures mainly when the dose was not reduced in renal impairment (US §5.4, UK 4.4)<br>CDAD, possibly more than 2 months after therapy (US §5.2)<br>AGEP reported, mostly in week 1 → stop drug (UK 4.4/4.8) — no tag<br>Direct Coombs +; acute intravascular hemolysis reported (US §5.3)<br>Not active vs MRSA/MRSE, most enterococci, Enterobacter, Morganella, P. vulgaris, Pseudomonas, Acinetobacter; penicillin-resistant S. pneumoniae usually cross-resistant (US §12.4). Active vs Moraxella catarrhalis (no tag)<br>Approved indications without a tag: respiratory tract infection (incl. strep pharyngitis), otitis media, acute prostatitis (US §1), dental infections (UK 4.1)<br>Suspension contains sucrose (TW Ulexin 1.2; UK 4.4)

**Why:** These label safety and spectrum points have no column or tag of their own. US §5.1 'Cross-hypersensitivity ... may occur in up to 10% of patients with a history of penicillin allergy'. US §5.2 CDAD 'reported to occur over two months after'. UK 4.4 AGEP 'Most of these reactions occurred most likely in the first week'. US §12.4 lists the resistance. US Table 1 gives the 1 g/day cap. US §1 and UK 4.1 list the indications. TW Ulexin 1.2 lists sucrose as an excipient. Storage/stability is left out on purpose, per the owner's rule.

**Sources:** US FDA label §1, §2.3, §4, §5.1–5.4, §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC §4.1, §4.4, §4.8 https://www.medicines.org.uk/emc/product/9144/smpc; TW insert Ulexin §1.2 https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號

### A14 · Page body

Follow the AmoClav layout, with these sections, each a condensed version of A1–A13: '## Cephalexin (Keflex-type, 1st-gen oral cephalosporin)' → ### Category / Mechanism / Indications (label-listed: RTI incl. strep pharyngitis, otitis media, SSTI, bone (+ joint, UK), GU incl. acute prostatitis, dental (UK)) / Coverage (susceptible list + 'NO coverage' list per US §12.4) / Adult Dose / Renal Dose, HD, CRRT (US Table 1; UK dialysis max 500 mg/day; CRRT no data) / Hepatic Dose / Pediatric Dose (incl. TW Ulexin weight table) / Side Effects / Monitor / Drug Interactions / Notes / Pregnancy / Breastfeeding. End with a '### References' list: US label DailyMed setid 8e28f049-6110-4473-830f-c494191a7197 (v19, 02 Oct 2026); UK SmPC Keflex Suspension 125 mg/5 ml eMC 9144 (rev 04/11/2025); LactMed NBK501487 (rev 2024-11-15); TW 仿單 衛署藥製字第015660號 (TBC cap 500 mg, 印刷版次3, 2019-04-02) https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號; TW 仿單 衛署藥製字第017280號 (Ulexin susp, 2015-12-23) https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號. No storage/stability section.

**Why:** Existing complete entries (e.g. AmoClav) have a full body with sections plus a References list naming each label version and URL. Cephalexin's body is blank. The body should repeat only the label-sourced content above, and should not add unsourced percentages or hospital-site text.

**Sources:** US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC https://www.medicines.org.uk/emc/product/9144/smpc; LactMed https://www.ncbi.nlm.nih.gov/books/NBK501487/; TW inserts https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第015660號 ; https://mcp.fda.gov.tw/im_detail_1/衛署藥製字第017280號

### A15 · Renewed date

Set to the date the entry is populated (e.g. 2026-10-05)

**Why:** Completed entries such as AmoClav set Renewed date when they are verified. Cephalexin's is empty.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date column)

### B1 · Adult dose

<span color="blue">`PO`</span> Cap 500 mg (CEP02) / Susp 25 mg/mL (ULE02)<br>Usual: 250 mg q6h or 500 mg q12h (US label); UK SmPC: 1–4 g/day divided, most infections 500 mg q8h<br>TW 仿單: 賜福力欣 250–500 mg q6h; Ulexin 250 mg q6h, severe 500 mg–1 g q6h<br>SSTI / strep pharyngitis / mild uncomplicated UTI: 250 mg q6h or 500 mg q12h (UK SmPC)<br>Severe: up to 4 g/day in 2–4 divided doses; MAX 4 g/day (if >4 g/day needed → use a parenteral cephalosporin, UK SmPC)<br>Duration 7–14 days; β-hemolytic strep ≥10 days (US label)<br>Typical non-purulent cellulitis: suitable oral agent; 5 days is as effective as 10 if improved by day 5 (IDSA SSTI 2014)<br>可空腹或飯後服用 (acid-stable; may be given without regard to meals)

**Why:** Empty column that the labels fill. The proposal covers both stocked forms. The US numbers are re-verified: 250 mg q6h or 500 mg q12h, up to 4 g/day in 2–4 doses, 7–14 days. The UK SmPC adds the 500 mg q8h usual dose and the rule to switch to a parenteral drug above 4 g/day. Both TW inserts agree with these (250–500 mg q6h; Ulexin 1–4 g/day, severe 500 mg–1 g q6h). The IDSA line supports the cellulitis use and the short course.

**Sources:** US FDA label (DailyMed) 2.1: 'recommended dosage… 250 mg every 6 hours, but a dose of 500 mg every 12 hours may be administered. Treatment is administered for 7 to 14 days… up to 4 grams daily in two to four equally divided doses'; 2.2 'β-hemolytic streptococcal infections, duration of at least 10 days'; 12.3 'acid stable and may be given without regard to meals' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.2: 'adult dosage ranges from 1-4 g daily in divided doses; most infections will respond to a dosage of 500 mg every 8 hours. For skin and soft tissue infections, streptococcal pharyngitis and mild, uncomplicated urinary tract infections, the usual dosage is 250 mg every 6 hours, or 500 mg every 12 hours… If daily doses… greater than 4 g are required, parenteral cephalosporins… should be considered' — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 賜福力欣 (衛署藥製字第015660號) 3.1: '成人一次250~500mg，每6小時一次' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC015660%E8%99%9F; TW 仿單 Ulexin (衛署藥製字第017280號) 3.1: '成人—每日劑量是1至4 Gm，分次服用… 成人及兒童體重超過25公斤者 每六小時250 mg / 嚴重感染 每六小時500 mg至1 Gm' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F; IDSA SSTI 2014 (Stevens DL, Clin Infect Dis 2014, PMID 24973422, verified by esummary): 'suitable antibiotics for most patients include penicillin, amoxicillin, amoxicillin-clavulanate, dicloxacillin, cephalexin, or clindamycin. In cases of uncomplicated cellulitis, a 5-day course… is as effective as a 10-day course' — https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

### B2 · Renal dose, HD, CRRT

TW 仿單: 腎功能降低時應減量 (no CrCl numbers) → use US label Table 1 (adults & ≥15 y):<br>CrCl ≥60: no adjustment<br>CrCl 30–59: no adjustment; MAX 1 g/day<br>CrCl 15–29: 250 mg q8–12h<br>CrCl 5–14 (not on dialysis): 250 mg q24h<br>CrCl 1–4 (not on dialysis): 250 mg q48–60h<br><15 y with renal impairment: no dosing data (US)<br>UK SmPC: reduce dose if renal function markedly impaired (no CrCl table)<br><br>HD: US label: insufficient information to recommend a dose; UK SmPC 4.4: if dialysis required, MAX 500 mg/day; HD & PD remove cephalexin (UK 5.2) → give after HD on dialysis days (timing not stated in labels — flagged)<br>PD: no label-specific dose; UK max 500 mg/day on dialysis applies<br>CRRT: no label dose; no CRRT PK study found (PubMed search 2026-10-05) → individualise (ID pharmacist)<br>⚠️ Unadjusted dose in renal impairment → seizures (US 5.4); encephalopathy/myoclonus/seizures (UK 4.4)

**Why:** Neither TW insert gives numbers, so under the ground rules the US Table 1 applies; I re-verified each tier against the label text. The source brief left out a renal item: the UK SmPC is not limited to 'reduce dosage'. SmPC 4.4 also says 'If dialysis is required for renal failure, the daily dose of cefalexin should not exceed 500mg', and SmPC 5.2 says haemodialysis and peritoneal dialysis remove cefalexin. That is the only label dialysis dose, because the US label gives none. The 'after HD' timing is an inference and is flagged. No CRRT PK study was found: esearch 'cefalexin continuous renal replacement' returned only an unrelated StatPearls chapter.

**Sources:** US FDA label 2.3 Table 1: '≥60 mL/min No dosage adjustment; 30 mL/min to 59 mL/min No dosage adjustment; maximum daily dose should not exceed 1 g; 15–29 250 mg, every 8 hours or every 12 hours; 5–14 not yet on dialysis 250 mg, every 24 hours; 1–4 not yet on dialysis 250 mg, every 48 hours or every 60 hours; *There is insufficient information to make dose adjustment recommendations in patients on hemodialysis'; 'insufficient information… pediatric patients younger than 15 years'; 5.4 Seizure Potential — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.2: 'Reduce dosage if renal function is markedly impaired'; 4.4: 'If dialysis is required for renal failure, the daily dose of cefalexin should not exceed 500mg'; 'neurotoxicity… encephalopathy, myoclonus and seizures. Elderly patients, patients with severe renal impairment… particularly at risk'; 5.2: 'Haemodialysis and peritoneal dialysis will remove cefalexin from the blood' — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 賜福力欣 5.1: '腎機能降低時應減量服用'; Ulexin 6.7: '腎功能有顯著損傷的患者，其安全劑量，可能比一般建議劑量低' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F

### B3 · Hepatic dose

No adjustment (none in US/UK/TW labels; >90% excreted unchanged in urine). Hepatic impairment = risk factor for prolonged PT (US 5.5) → monitor PT in at-risk pts

**Why:** No label gives a hepatic dose. Elimination is renal: over 90% is excreted unchanged in urine within 8 hours. The US label names hepatic impairment as a risk factor for prolonged prothrombin time.

**Sources:** US FDA label 12.3: 'over 90% of the drug was excreted unchanged in the urine within 8 hours'; 5.5: 'Those at risk include patients with renal or hepatic impairment… Monitor prothrombin time in patients at risk' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.2/5.2 (no hepatic adjustment; '75-100% is rapidly excreted in active form in the urine') — https://www.medicines.org.uk/emc/product/9144/smpc

### B4 · Pediatric dose

<span color="blue">`PO`</span> Ulexin susp 125 mg/5 mL (25 mg/mL); capsule only if child can swallow it (US)<br>>1 y (US): 25–50 mg/kg/day divided; severe 50–100 mg/kg/day; otitis media 75–100 mg/kg/day ÷ q6h; 7–14 days (β-hemolytic strep ≥10 days)<br>Ulexin TW 仿單: ≤25 kg 25–50 mg/kg/day ÷ 4 (severe 50–100 mg/kg/day ÷ 4); >25 kg 250 mg q6h (severe 500 mg–1 g q6h)<br>Ulexin table (25 mg/mL): 10 kg 2.5–5 mL QID; 20 kg 5–10 mL QID; 40 kg 10–20 mL QID<br>UK SmPC: 25–50 mg/kg/day divided (<5 y 125 mg q8h; ≥5 y 250 mg q8h); SSTI/strep pharyngitis/mild uUTI may give q12h; severe: dose may be doubled; otitis media 75–100 mg/kg/day ÷ 4<br>MAX: not to exceed adult dose (US 2.2; adult max 4 g/day, US 2.1)<br><1 y: safety/efficacy not established (US 8.4); renal impairment <15 y: no dosing data (US 2.3)

**Why:** Empty column. The ULE02 suspension is the stocked paediatric form, so the TW Ulexin insert weight-band regimen comes first. US and UK figures are given alongside it; all were re-verified. The US label also says the capsule is only for children who can swallow it, and that safety under 1 year is not established.

**Sources:** US FDA label 2.2: '25 to 50 mg/kg given in equally divided doses for 7 to 14 days… In severe infections… 50 to 100 mg/kg… otitis media… 75 to 100 mg/kg… should not exceed the adult dosage… only be used in children and adolescents capable of ingesting the capsule'; 8.4: 'not been established in pediatric patients younger than one year' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; TW 仿單 Ulexin 3.1: '兒童體重在25公斤以下者 照體重每公斤每日 25~50mg，分四次服用 / 嚴重感染 50~100mg' ; '成人及兒童體重超過25公斤者 每六小時250 mg / 每六小時500 mg至1 Gm' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F; UK SmPC 4.2 Paediatric population: '25-50 mg/kg… Children under 5 years. 125 mg every 8 hours. Children 5 years and over: 250 mg every 8 hours. In severe infections, the dosage may be doubled… otitis media… 75 to 100 mg/kg/day in 4 divided doses' — https://www.medicines.org.uk/emc/product/9144/smpc

### B5 · Indications

["SSTI", "UTI", "Osteoarthritis"]

**Why:** Labelled indications are: respiratory tract infection (S. pneumoniae, S. pyogenes), otitis media, SSTI, bone infection (US), bone and joint infection (UK), genitourinary infection including acute prostatitis, and dental infection (UK). Only SSTI, UTI and Osteoarthritis have matching schema options; the database uses 'Osteoarthritis' for bone/joint infection on the AmoClav and ceftazidime pages. I left out 'Pneumonia'/'CAP' on purpose: the label's 'respiratory tract infections' means mainly streptococcal URTI, and cephalexin is not a CAP agent. I also left out 'cUTI', since the label wording is generic genitourinary infection. Respiratory tract infection, otitis media, dental infection and acute prostatitis have no option, so they go in Notes (see B13).

**Sources:** US FDA label 1.1–1.5 (respiratory tract, otitis media, skin and skin structure, bone, genitourinary incl. acute prostatitis) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.1: 'Respiratory tract infections, Otitis media, Skin and soft tissue infections, Bone and joint infections, Genito-urinary tract infections, including acute prostatitis, Dental infections' — https://www.medicines.org.uk/emc/product/9144/smpc

### B6 · Coverage

["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Proteus", "Haemophilus"]

**Why:** These are the organisms listed in US 12.4 and UK 5.1: methicillin-susceptible S. aureus, penicillin-susceptible S. pneumoniae, S. pyogenes/β-haemolytic streptococci, E. coli, K. pneumoniae, P. mirabilis and H. influenzae. Moraxella catarrhalis has no tag, so it goes in Notes. I did not add 'Neisseria': the TW 賜福力欣 insert lists 腦膜炎球菌/淋病雙球菌, but neither the US nor the UK label supports it, and the Ulexin insert's '卡他性奈瑟菌' is Moraxella. I did not add 'Staphylococcus' (CoNS) either, because UK 5.1 notes cross-resistance with methicillin. Both labels exclude MRSA, enterococci, Enterobacter, Pseudomonas and Acinetobacter.

**Sources:** US FDA label 12.4: 'Staphylococcus aureus (methicillin-susceptible isolates only), Streptococcus pneumoniae (penicillin-susceptible isolates), Streptococcus pyogenes… Escherichia coli, Haemophilus influenzae, Klebsiella pneumoniae, Moraxella catarrhalis, Proteus mirabilis'; 'Methicillin-resistant staphylococci and most isolates of enterococci are resistant… not active against most isolates of Enterobacter spp., Morganella morganii, and Proteus vulgaris… no activity against Pseudomonas spp., or Acinetobacter calcoaceticus' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 5.1: 'When tested by in-vitro methods, staphylococci exhibit cross-resistance between cefalexin and methicillin-type antibiotics' — https://www.medicines.org.uk/emc/product/9144/smpc

### B7 · Side Effects

["GI", "LFT↑", "SJS/TEN", "hematologic", "neutropenia", "thrombocytopenia", "anemia", "CNS", "neurotoxicity", "coagulopathy", "AKI"]

**Why:** Each tag exists in the schema and maps to a label statement. GI: diarrhoea is the most common reaction; C. difficile goes in Notes. LFT↑: slight AST/ALT rise, transient hepatitis, cholestatic jaundice. SJS/TEN: from the hypersensitivity section. hematologic, neutropenia, thrombocytopenia, anemia: eosinophilia, neutropenia, thrombocytopenia and haemolytic anaemia (Coombs). CNS: dizziness, headache, confusion, hallucinations. neurotoxicity: seizures, encephalopathy, myoclonus in renal impairment. coagulopathy: prolonged PT. AKI: reversible interstitial nephritis. I did not tag DRESS because it is not in either cephalexin label. AGEP (UK) has no tag and goes in Notes.

**Sources:** US FDA label 5.1–5.5, 6.1: 'rash, urticaria, angioedema, anaphylaxis, erythema multiforme, Stevens-Johnson syndrome, or toxic epidermal necrolysis'; 'Acute intravascular hemolysis'; 'Eosinophilia, neutropenia, thrombocytopenia, hemolytic anemia, and slight elevations in AST and ALT'; 'Reversible interstitial nephritis'; 'dizziness, fatigue, headache, agitation, confusion, hallucinations' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.4/4.8: neurotoxicity 'encephalopathy, myoclonus and seizures'; 'Acute generalised exanthematous pustulosis (AGEP)' — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 Ulexin 8.1: '嗜伊紅性白血球增多症、嗜中性白血球減少症及SGOT和SGPT輕微增高' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F

### B8 · Monitor

["renal", "PT/INR", "CBC"]

**Why:** Renal: the US label asks for renal function monitoring when CrCl is below 30 and for dose selection in the elderly. PT/INR: for at-risk patients (renal or hepatic impairment, poor nutrition, long courses, anticoagulants). CBC: if anaemia develops, work up drug-induced haemolysis; neutropenia and thrombocytopenia are also reported.

**Sources:** US FDA label 8.6: 'careful clinical observation and laboratory studies including renal function monitoring'; 5.5: 'Monitor prothrombin time in patients at risk'; 5.3: 'If anemia develops… perform a diagnostic work-up for drug-induced hemolytic anemia' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197

### B9 · Mechanism

1st-gen cephalosporin: inhibits bacterial cell-wall synthesis (PBP binding) → bactericidal. Oral, acid-stable, almost completely absorbed; protein binding 10–15%; t½ ~1 h; >90% excreted unchanged in urine (glomerular filtration + tubular secretion)

**Why:** Empty column. Every item comes from the labels except 'PBP binding', which is the standard β-lactam target. The labels say only 'inhibition of cell-wall synthesis' (TW: 抑制細菌胞壁之Mucopeptide合成).

**Sources:** US FDA label 12.4: 'bactericidal agent that acts by the inhibition of bacterial cell-wall synthesis'; 12.3: '10% to 15% bound to plasma proteins… excreted in the urine by glomerular filtration and tubular secretion… over 90%… unchanged' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 5.1/5.2: 'first-generation cephalosporins, ATC code: J01DB01'; 'half-life is approximately 60 minutes' — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 賜福力欣 10.1: '抑制細菌胞壁之Mucopeptide合成' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC015660%E8%99%9F

### B10 · Drug Interactions

Metformin: ↑ metformin Cmax 34% / AUC 24%, ↓ renal clearance (single dose) → monitor, adjust metformin dose (US 7.1)<br>Probenecid: ↓ renal excretion of cephalexin → co-administration not recommended (US 7.2)<br>Aminoglycosides, other cephalosporins, furosemide/potent diuretics: may ↑ nephrotoxicity (UK 4.4)<br>Gentamicin + cephalexin in leukaemia pts on cytotoxics: hypokalaemia reported (UK 4.5)<br>Warfarin/anticoagulants: risk of prolonged PT → monitor INR (US 5.5)<br>Lab: false-positive urine glucose (Benedict/Fehling/Clinitest; 尿糖偽陽性), positive direct Coombs (US/UK/TW)

**Why:** Empty column. All of these interactions are in the labels. The hypokalaemia and nephrotoxicity lines are UK-only. The TW inserts give only the urine-glucose and Coombs lab interferences.

**Sources:** US FDA label 7.1–7.3, 12.3, 5.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.4: 'aminoglycosides, other cephalosporins, or furosemide… may increase the risk of nephrotoxicity'; 4.5: 'Hypokalaemia has been described in patients taking cytotoxic drugs for leukaemia when they were given gentamicin and cefalexin' — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 Ulexin 5.1.4/5.1.5: 'Benedict氏液、Fehling氏液或Clinitest片法檢驗尿糖，可能獲得葡萄糖的假陽性反應'; '直接Coombs試驗得到陽性反應' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F

### B11 · Pregnancy

Decades of use: no established drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes (US 8.1); no harm in mouse/rat studies. UK SmPC: no teratogenicity shown, but prescribe with caution. TW 仿單: 孕婦使用安全性尚未確定 / 孕婦應謹慎使用. FDA letter categories retired — 不使用字母分級

**Why:** Empty column. Wording follows the PLLR narrative and does not use a letter category; the hospital pages wrongly show 'B' (see hospital issues). The more cautious UK and TW wording is given alongside.

**Sources:** US FDA label 8.1 Risk Summary — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.6: 'Although laboratory and clinical studies have shown no evidence of teratogenicity, caution should be exercised' — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 Ulexin 6.1 '孕婦使用本劑的安全性尚未確定'; 賜福力欣 5.1 '孕婦應謹慎使用' — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F

### B12 · Breastfeeding

Acceptable (LactMed): low milk levels (peak ~0.5–0.7 mg/L; RID <1%, US 8.2); an alternative for mastitis. Monitor infant for diarrhea/thrush; rare infant TEN reported (infant previously sensitised by IV cefazolin). UK SmPC: caution

**Why:** Empty column. LactMed is the designated source; the US 8.2 RID and the UK caution are added alongside.

**Sources:** LactMed NBK501487 (rev. 2024-11-15) Summary: 'low levels in milk… not expected to cause adverse effects… alternative for the treatment of mastitis… diarrhea or thrush… A rare case of a severe allergic reaction… Cephalexin is acceptable in nursing mothers'; Drug Levels: peak 0.51 mg/L (1 g) and 0.7 mg/L (500 mg) — https://www.ncbi.nlm.nih.gov/books/NBK501487/; US FDA label 8.2: 'relative infant dose (RID) is considered to be <1%' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.6: 'Caution should be exercised when cefalexin is administered to a nursing woman' — https://www.medicines.org.uk/emc/product/9144/smpc

### B13 · Notes

Stocked: CEP02 賜福力欣 cap 500 mg (衛署藥製字第015660號); ULE02 Ulexin susp 125 mg/5 mL = 25 mg/mL (衛署藥製字第017280號)<br>Other label indications (no tag): respiratory tract infection (S. pneumoniae, S. pyogenes; e.g. strep pharyngitis), otitis media, acute prostatitis, dental infection (UK); Moraxella catarrhalis covered (no tag)<br>NOT active: MRSA/MRSE, enterococci, Enterobacter, Morganella, P. vulgaris, Pseudomonas, Acinetobacter; PRSP usually cross-resistant<br>Penicillin allergy: cross-hypersensitivity up to 10% (US 5.1) → ask history; CI if cephalosporin allergy<br>⚠️ Neurotoxicity (encephalopathy, myoclonus, seizures) — elderly / severe renal impairment, mostly unadjusted doses → adjust for CrCl<br>Direct Coombs + ; acute intravascular hemolysis reported → if anemia, work up & stop drug (US 5.3)<br>AGEP reported (UK SmPC) — usually 1st week; stop if suspected<br>C. difficile diarrhea, may occur >2 months after therapy (US 5.2)<br>More info: 仿單 (TFDA) 賜福力欣 / Ulexin; US label (DailyMed); UK SmPC (eMC 9144)

**Why:** Notes collects label content that has no multi-select option: untagged indications, Moraxella, the resistance gaps, cross-allergy, neurotoxicity, AGEP and CDAD. It also links the stocked products' inserts, following the Brosym style ('More info: … 仿單 (TFDA)'). No storage or stability details are included, per the ground rules.

**Sources:** US FDA label 1, 4, 5.1, 5.2, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e28f049-6110-4473-830f-c494191a7197; UK SmPC 4.1, 4.4 (neurotoxicity, AGEP 'Most of these reactions occurred most likely in the first week'), 5.1 — https://www.medicines.org.uk/emc/product/9144/smpc; TW 仿單 links: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC015660%E8%99%9F ; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC017280%E8%99%9F

## Disputed (not applied; reviewers disagreed)

- **Notes**: proposed "Optional add: 'GAS pharyngitis in penicillin-allergic (non-anaphylactic) pts: cephalexin is an IDSA 2012 alternative, ×10 days (dose to confirm from guideline table — full text not accessible)'". Not applied because: The cited guideline is outdated. The IDSA page for the 2012 GAS pharyngitis guideline (PMID 22965026, which I verified) is marked 'This guideline has been archived'. It points to a newer IDSA GAS pharyngitis guideline (published 14 Oct 2025, CID Dec 2025), and nobody checked that version's stance on cephalosporins for penicillin allergy. The line would also put a 'dose to confirm' placeholder into a clinical field. The useful parts are already covered by labels. Strep pharyngitis dosing is in UK 4.2 (250 mg q6h / 500 mg q12h), the β-hemolytic strep ≥10 days rule is in US 2.2 / UK 4.2, and strep pharyngitis appears in Notes (B13). Leave this out unless the 2025 guideline is checked.

## Apply log

- Adult dose: merged both reviewer versions (stocked forms CEP02 cap 500 mg / ULE02 susp 25 mg/mL, US/UK/TW regimens, max 4 g/day, duration, IDSA 2014 5-day cellulitis, food)
- Renal dose, HD, CRRT: US Table 1 CrCl bands with max 1 g/day at CrCl 30-59, TW/UK no-CrCl statements, HD (UK max 500 mg/day, post-HD timing flagged), PD, CRRT not established, <15 y no data, seizure warning
- Hepatic dose: no adjustment, >90% renal, PT monitoring (US 5.5), rare hepatitis/cholestatic jaundice
- Pediatric dose: US/TW Ulexin/UK regimens, Ulexin weight table, max adult dose, <1 y not established, capsule note
- Indications: [SSTI, UTI, Osteoarthritis]
- Coverage: [MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus]
- Side Effects: [GI, LFT↑, SJS/TEN, hematologic, neutropenia, thrombocytopenia, anemia, CNS, neurotoxicity, coagulopathy, AKI]
- Monitor: [renal, PT/INR, CBC]
- Mechanism: merged (bactericidal cell-wall inhibition, penicillinase-stable, ATC J01DB01, PK summary)
- Drug Interactions: metformin, probenecid, nephrotoxic co-drugs, gentamicin+cytotoxics hypokalaemia, warfarin/PT, lab interferences
- Pregnancy: US 8.1 risk summary, UK caution, TW 仿單 text, letter categories retired
- Breastfeeding: LactMed acceptable, RID <1%, infant monitoring, rare TEN case, UK caution
- Notes: stocked products, penicillin cross-allergy, CrCl 30-59 max vs TW/UK dosing conflict, neurotoxicity, CDAD, AGEP, Coombs/hemolysis, NO-coverage list, untagged indications, sucrose, more-info line
- Page body: AmoClav-style sections (Category through Breastfeeding) inserted, no storage/stability section
- References section appended (US label v19, UK SmPC eMC 9144, LactMed NBK501487, TW 仿單 015660 and 017280, IDSA SSTI 2014)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
