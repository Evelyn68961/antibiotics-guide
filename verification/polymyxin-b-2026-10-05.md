# New entry: Bobimixyn (Polymyxin B)

- **Notion entry:** [Bobimixyn (Polymyxin B)](https://app.notion.com/3f0c496dfff18101b17be19d791d76ff). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** BOB01 (Bobimixyn inj 500 KIU)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/polymyxin-b.json` (plus any Taiwan insert text files)

## Product and sources

The hospital stocks Bobimixyn for injection (寶比黴素凍晶注射劑), polymyxin B sulfate 500,000 units per vial (lyophilised, IV). Hospital code BOB01, NHI code AC61557277, ATC J01XB02. The source brief said no Taiwan insert was available, but I found it. Taiwan licence 衛部藥製字第061557號 (domestic product from 台灣東洋 TTY Biopharm, approved 112-11-28). The insert text is on the TFDA site, revised November 2024: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F. It is the label of the product the hospital stocks, so it ranks first for renal dosing under the ground rules. I saved the extracted text to scratch only (/tmp/claude-0/-home-user-antibiotics-guide/4c50b851-ebcc-5771-83a6-3305d6a7ca62/scratchpad/tw_bobimixyn.txt) and did not add it to the repo, because the rules allow edits only to the sources JSON. Other sources: US label, Xellia Polymyxin B for Injection USP (DailyMed setid b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6, v13). There is no UK SmPC for systemic polymyxin B. LactMed: Polymyxin B, NBK501432, revised 2024-11-15. Guidelines: Tsuji 2019 consensus (PMID 30710469, checked with esummary, full text PMC7437259) and the IDSA 2026 AMR Guidance (published 2026-07-30; idsociety.org). Notion page state: the only properties set are the title and Category = "Polymyxin". All other columns, including the multi-selects, are empty, and the page body is blank.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="green">`IV`</span> 15,000–25,000 units/kg/day ÷ q12h (MAX 25,000 units/kg/day) (TW insert; US label); infuse over 60–90 min (TW insert)<br>Severe infection (2019 consensus R15–R16, off-label): LD 20,000–25,000 units/kg (total body weight) over 1 h, then 12,500–15,000 units/kg q12h over 1 h (= 25,000–30,000 units/kg/day, exceeds label MAX)<br>稀釋: 500,000 units in 300–500 mL D5W or NS (TW insert); US label: D5W<br>US label only: <span color="green">`IM`</span> 25,000–30,000 units/kg/day ÷ q4–6h (severe pain, not routine); <span color="green">`IT`</span> 50,000 units daily × 3–4 d, then 50,000 units every other day until ≥2 wk after CSF culture negative and glucose normal<br>TW insert: other routes not recommended; 不可吸入給藥

**Why:** The column is empty. The Taiwan insert for the stocked product (section 3.1) says: IV 15,000–25,000 units/kg per day, every 12 h, infused over 60–90 min, maximum 25,000 units/kg/day. Other routes are not recommended and inhalation is not allowed. The US label ('Adults and children') gives the same IV range and maximum. It also has IM and intrathecal sections, with D5W as the IV diluent. Taiwan section 3.2 allows D5W or 0.9% NaCl. The consensus loading and maintenance doses (R15/R16) are guideline values, not label values. From 12,500–15,000 units/kg q12h the daily total is 25,000–30,000 units/kg, which is above the label maximum. The proposal labels that line as guideline-sourced.

**Sources:** TW insert 衛部藥製字第061557號, 3.1 用法用量 / 3.2 調製方式 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia), DOSAGE AND ADMINISTRATION: Intravenous / Adults and children / Intramuscular / Intrathecal — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji BT et al. Pharmacotherapy 2019;39:10-39, R15 (LD 2.0–2.5 mg/kg TBW = 20,000–25,000 IU/kg over 1 h), R16 (1.25–1.5 mg/kg = 12,500–15,000 IU/kg q12h over 1 h) — https://pubmed.ncbi.nlm.nih.gov/30710469/

### A2 · Renal dose, HD, CRRT

<span color="green">`IV renal dose`</span> (TW insert, Bobimixyn)<br>CrCl 60–89: no adjustment<br>CrCl 15–59 & ESRD (\<15): 15,000–25,000 units/kg/day ÷ q12h (MAX 25,000 units/kg/day); 宜考量病患腎功能謹慎選擇劑量, 並更頻繁監測腎功能 (TW 6.7)<br>US label: reduce from 15,000 units/kg/day downward in renal impairment<br>2019 consensus: maintenance dose not adjusted for renal impairment (R17); LD by TBW unchanged<br><br>HD:<br>No label dose. TW PK study (single 0.75 mg/kg dose): t½ 15.2 h vs 5.4 h, AUC ↑58% vs normal<br>Consensus: no adjustment of LD or MD (R18)<br><br>CRRT:<br>No label dose; consensus: no adjustment of LD or MD (R18; limited data)

**Why:** The column is empty. The ground rules say to prefer the stocked product's label, which is the Taiwan insert. Taiwan section 3.3: CrCl 60–89 needs no adjustment. For CrCl 15–59 and ESRD the insert keeps the same 15,000–25,000 units/kg/day q12h range and says to choose the dose carefully by renal function. Section 6.7 adds that dose adjustment and closer renal monitoring are needed. The US label says to reduce 'from 15,000 units/kg downward for individuals with kidney impairment'. The consensus recommends no adjustment for renal impairment (R17) or renal replacement therapy (R18). Neither label gives an HD or CRRT dose. Taiwan section 11.1 gives the HD pharmacokinetic data.

**Sources:** TW insert 3.3 特殊族群用法用量, 6.7 腎功能不全, 11.1 臨床藥物動力學 (Table 1/2) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label, boxed WARNING ('patients with renal damage and nitrogen retention should have reduced dosage') and Adults and children ('reduced from 15,000 units/kg downward') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji 2019 consensus R17, R18 — https://pubmed.ncbi.nlm.nih.gov/30710469/ (PMC7437259)

### A3 · Hepatic dose

No data (TW insert 6.6: 目前尚無資訊); not addressed in US label

**Why:** The column is empty. Taiwan section 6.6 (肝功能不全) says '目前尚無資訊' (no information yet). The US label has no hepatic section.

**Sources:** TW insert 6.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (no hepatic dosing section) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6

### A4 · Pediatric dose

TW insert: adults only (6.4 小兒: 無資訊)<br>US label:<br><span color="green">`IV`</span> children: 15,000–25,000 units/kg/day ÷ q12h (MAX 25,000 units/kg/day); infants (normal renal fn): up to 40,000 units/kg/day<br><span color="green">`IM`</span> 25,000–30,000 units/kg/day ÷ q4–6h; infants up to 40,000 units/kg/day (not routine, severe pain)<br><span color="green">`IT`</span> \>2 y: 50,000 units daily × 3–4 d, then QOD; \<2 y: 20,000 units daily × 3–4 d or 25,000 units QOD, then 25,000 units QOD; continue ≥2 wk after CSF culture is negative

**Why:** The column is empty. The Taiwan insert indication covers adults only (section 2), and section 6.4 has no paediatric information. The US label gives paediatric IV, IM and intrathecal doses ('Adults and children', 'Infants', 'Children under 2 years of age'). The label also notes that neonates have received up to 45,000 units/kg/day, but only in limited studies. I left that out as not a label dose.

**Sources:** US FDA label, DOSAGE AND ADMINISTRATION: Adults and children; Infants; Intrathecal — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 2 適應症 (成人病人), 6.4 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### A5 · Indications

Bacteremia, Meningitis, UTI

**Why:** The column is empty. The US label lists P. aeruginosa infections of the urinary tract, meninges and blood stream. It adds H. influenzae meningeal infections, E. coli UTI, and Aerobacter aerogenes or K. pneumoniae bacteremia when less toxic drugs fail. Meningitis is treated by the intrathecal route only. Under the ground rules an FDA listing makes these approved indications, and all three options exist in the schema. Caveats: the Taiwan insert for the stocked product (section 2) covers adults with serious MDR Gram-negative infections and says it is not suitable for UTI ('不適合用於治療泌尿道感染'). The consensus (R7) and IDSA 2026 prefer colistin for lower UTI. The owner may therefore leave UTI untagged; A13 puts the caveat in Notes either way. Pneumonia is guideline use only, not a label indication, so it is not tagged. Eye infections have no schema option.

**Sources:** US FDA label, INDICATIONS AND USAGE ('Acute Infections Caused by Susceptible Strains of Pseudomonas aeruginosa') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; Tsuji 2019 R7 — https://pubmed.ncbi.nlm.nih.gov/30710469/

### A6 · Coverage

Pseudomonas, E.coli, Klebsiella, Enterobacter, Haemophilus, Acinetobacter, CRAB, CRPA, CRKP, CREC(E.coli)

**Why:** The column is empty. The US label says polymyxin B is bactericidal against 'almost all gram-negative bacilli except the Proteus group'. It names P. aeruginosa, H. influenzae, E. coli, Aerobacter (Enterobacter/Klebsiella) aerogenes and K. pneumoniae. It also says gram-positives, fungi and gram-negative cocci are resistant. Taiwan section 11.2 reports in-vitro susceptibility of Taiwanese carbapenem-resistant isolates: CR-P. aeruginosa 100%, CR-A. baumannii 93.6%, CR-E. coli 98.9%, CR-E. cloacae 87.2%, CR-K. pneumoniae 68.4% (EUCAST colistin breakpoints). Proteus, Neisseria, all gram-positives and Candida/Aspergillus must not be tagged.

**Sources:** US FDA label, CLINICAL PHARMACOLOGY and INDICATIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 10.1 作用機轉, 11.2 微生物學 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### A7 · Side Effects

nephrotoxicity, neurotoxicity, hypokalemia, thrombophlebitis

**Why:** The column is empty. Both labels support these four tags:<br>- Nephrotoxicity: albuminuria, casts and azotemia (US boxed warning; Taiwan 警語).<br>- Neurotoxicity: paresthesias, ataxia, drowsiness, blurred vision, and respiratory paralysis from neuromuscular blockade.<br>- Hypokalemia: pseudo-Bartter renal tubulopathy, also with metabolic alkalosis and low Ca and Mg (US Warnings: Electrolyte and Acid/Base Abnormalities).<br>- Thrombophlebitis at IV injection sites (US Adverse Reactions 'Other'; Taiwan 8.1).<br>CDAD, drug fever and urticaria go in Notes, since 'CDI' is an indication option rather than a side-effect option. Rhabdomyolysis appears on the hospital site but in neither label, so it is not tagged.

**Sources:** US FDA label, boxed WARNING; WARNINGS: Electrolyte and Acid/Base Abnormalities; ADVERSE REACTIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 警語, 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### A8 · Monitor

renal, electrolyte, neuro

**Why:** The column is empty. The US label (Precautions: General) asks for baseline renal function and 'frequent monitoring of renal function and blood levels of the drug during parenteral therapy'. The US Warnings section says to 'consider electrolyte monitoring' because of pseudo-Bartter syndrome. Neurotoxicity and respiratory paralysis need clinical neuro checks (boxed warning). Taiwan section 5.1.1 requires baseline and frequent renal monitoring. TDM is covered in Notes (A13).

**Sources:** US FDA label, PRECAUTIONS: General; WARNINGS: Electrolyte and Acid/Base Abnormalities — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 5.1.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### A9 · Mechanism

Cationic polypeptide; ↑ bacterial cell-membrane permeability (outer-membrane disruption) → cell death; rapidly bactericidal, given as active drug (not a prodrug)

**Why:** The column is empty. The US label (Clinical Pharmacology) says 'Polymyxins increase the permeability of bacterial cell membrane leading to death of the cell' and calls it bactericidal; Taiwan section 10.1 says the same. The consensus introduction describes outer-membrane disruption. It also contrasts polymyxin B, which is given in its active form, with CMS, which is a prodrug (R6 rationale).

**Sources:** US FDA label, CLINICAL PHARMACOLOGY — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; Tsuji 2019 (introduction; R6) — https://pubmed.ncbi.nlm.nih.gov/30710469/

### A10 · Drug Interactions

Avoid concurrent/sequential nephrotoxic or neurotoxic drugs: aminoglycosides (gentamicin, tobramycin, amikacin, streptomycin, kanamycin, neomycin, paromomycin), bacitracin, colistin, vancomycin, cephaloridine/cephalothin, viomycin<br>Neuromuscular blockers (curariform relaxants, succinylcholine, tubocurarine), ether, sodium citrate: ↑ neuromuscular blockade → respiratory paralysis<br>Potent diuretics (furosemide, ethacrynic acid): ↑ toxicity (TW insert)

**Why:** The column is empty. The US boxed warning lists bacitracin, streptomycin, neomycin, kanamycin, gentamicin, tobramycin, amikacin, cephaloridine, paromomycin, viomycin and colistin. US Precautions adds curariform muscle relaxants and other neurotoxic drugs (ether, tubocurarine, succinylcholine, gallamine, decamethonium, sodium citrate). Taiwan section 7 adds vancomycin and cephalothin, plus potent diuretics (ethacrynic acid, furosemide).

**Sources:** US FDA label, boxed WARNING; PRECAUTIONS: General — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### A11 · Pregnancy

Safety in human pregnancy not established (US label); no human or animal data — use only if expected maternal benefit outweighs possible fetal risk (TW insert)

**Why:** The column is empty. US boxed warning: 'USAGE IN PREGNANCY: THE SAFETY OF THIS DRUG IN HUMAN PREGNANCY HAS NOT BEEN ESTABLISHED.' Taiwan section 6.1: no clinical data in pregnant women and no animal embryotoxicity data; do not use unless the benefit outweighs the risk. Neither label gives a letter category, so none is proposed.

**Sources:** US FDA label, boxed WARNING — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### A12 · Breastfeeding

IV: unknown if excreted in milk; weigh stopping breastfeeding vs stopping therapy (TW insert). Not absorbed from normal GI tract (US label). LactMed (2024): topical use low risk; no data for systemic use

**Why:** The column is empty. Taiwan section 6.2: unknown whether it passes into human milk; decide between stopping breastfeeding and stopping the drug. The US label (Clinical Pharmacology) says it is 'not absorbed from the normal alimentary tract'. The LactMed summary (rev. 2024-11-15) covers topical use only: low risk because of poor absorption. It reports no data on milk levels or infant effects.

**Sources:** TW insert 6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; LactMed Polymyxin B, Summary of Use during Lactation; Drug Levels (rev. 2024-11-15) — https://www.ncbi.nlm.nih.gov/books/NBK501432/; US FDA label, CLINICAL PHARMACOLOGY — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6

### A13 · Notes

1 mg = 10,000 units; 1 vial = 500,000 units (50 mg) — 注意 units/mg 換算<br>TW insert: 不適合用於治療泌尿道感染 (not for UTI). Colistin (CMS) preferred for lower UTI; polymyxin B preferred for other systemic/invasive use (2019 consensus R6–R7; IDSA 2026: colistin, not PB, for uUTI)<br>CRE/CRAB/CRPA: combine with ≥1 other agent active by MIC (consensus R27, R29, R31); IDSA 2026: alternative for CRAB only in combination<br>TDM if available: AUCss,24h ~50 mg·h/L (Css,avg ~2 mg/L); 50–100 (2–4 mg/L) may be acceptable for toxicity; treat as max tolerable exposure; avoid doses above guideline without TDM (consensus R3, R4, R19, R21)<br>Pseudo-Bartter: monitor K, Mg, Ca<br>Contraindicated: polymyxin hypersensitivity; myasthenia gravis (TW insert)<br>IT/IVT: 50,000 units/day + IV polymyxin; CMS preferred for IT (consensus R35–R36)<br>Inhaled: TW insert prohibits (不可吸入給藥); consensus R33–R34 allows polymyxin B aerosol as adjunct for XDR HAP/VAP<br>TW PK study AEs (n=22, single dose): oral hypoesthesia 73%, skin hypoesthesia 50%, dizziness 41%<br>Also: CDAD, drug fever, urticaria

**Why:** The column is empty. Sources for each line:<br>- Unit conversion: US label, Description.<br>- UTI restriction: Taiwan section 2; consensus R6–R7; IDSA 2026 says colistin but not polymyxin B is an option for uncomplicated UTI.<br>- Combination therapy: consensus R27–R32; IDSA 2026 Question 5.5 on CRAB.<br>- TDM target: consensus R3 and R19.<br>- Pseudo-Bartter: US Warnings.<br>- Myasthenia gravis contraindication: Taiwan section 4 only; the US label lists hypersensitivity only.<br>- Intrathecal: consensus R35–R36.<br>- Inhalation: Taiwan section 3.1 ('不可以吸入方式給藥') against consensus R34.<br>- Taiwan PK-study adverse events: section 8.2.<br>- CDAD, drug fever, urticaria: US Warnings and Adverse Reactions.<br>No storage content is included.

**Sources:** US FDA label, DESCRIPTION; WARNINGS; ADVERSE REACTIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; TW insert 2, 3.1, 4 禁忌, 8.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; Tsuji 2019 R3, R6, R7, R19, R27–R32, R34–R36 — https://pubmed.ncbi.nlm.nih.gov/30710469/; IDSA 2026 Guidance on the Treatment of AMR Gram-Negative Infections (published 2026-07-30), DTR-PA Q4.2/Q4.3 and CRAB Q5.5 — https://www.idsociety.org/practice-guideline/amr-guidance/

### A14 · Page body

Add a short monograph in the style of other entries, with these sections: Category; Mechanism; Indications (US label list plus the Taiwan adult MDR-GNB indication excluding UTI); Coverage (active / NOT active: Proteus, gram-positives, gram-negative cocci, fungi; Taiwan CR-GNB susceptibility from 11.2); Adult dose (label range and maximum, consensus LD/MD marked as guideline, units↔mg table, diluent); Renal/HD/CRRT (Taiwan insert by CrCl, US 'reduce downward', consensus R17/R18, Taiwan HD PK: t½ 5.4→15.2 h, AUC +58%); Hepatic (no data); Pediatric (US IV/IM/IT; Taiwan adults only); Side effects (boxed nephro/neurotoxicity, pseudo-Bartter, CDAD, thrombophlebitis, Taiwan PK-study AEs); Monitor; Drug interactions; Pregnancy; Breastfeeding; Notes (polymyxin B vs CMS choice, combination therapy, TDM target); References (Taiwan insert, DailyMed setid b56f18c0…, LactMed NBK501432, Tsuji 2019 PMID 30710469, IDSA 2026 URL). Leave out storage/stability.

**Why:** The page was created on 2026-10-05 with no body. Other entries such as Colimycin (Colistin) carry a sectioned monograph ending in a References list. The body should repeat the column content with sources and keep the renal-label vs consensus conflict visible.

**Sources:** TW insert — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK501432/; Tsuji 2019 — https://pubmed.ncbi.nlm.nih.gov/30710469/; IDSA 2026 — https://www.idsociety.org/practice-guideline/amr-guidance/

### A15 · Renewed date

2026-10-05 (set when the columns are filled)

**Why:** Verified entries in this database get the review date, for example Colimycin (Colistin) has Renewed date 2026-10-05.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date property); Colimycin (Colistin) entry https://app.notion.com/p/20dc496dfff1805bac69c7861b39ad30

### B1 · Adult dose

<span color="green">`IV`</span> 15,000–25,000 units/kg/day ÷ q12h, infuse 60–90 min (MAX 25,000 units/kg/day) (TW insert; US label)<br>稀釋: 500,000 units in 300–500 mL D5W or NS (TW insert); US label: D5W<br>Severe infection (2019 consensus R15–R16, off-label): LD 20,000–25,000 units/kg TBW over 1 h → 12,500–15,000 units/kg TBW q12h (= 25,000–30,000 units/kg/day; upper end exceeds label MAX)<br><span color="green">`IT`</span> 50,000 units qd × 3–4 d → 50,000 units QOD until ≥2 wk after CSF culture negative and CSF sugar normal (US label only; TW insert: 不建議其他途徑)<br><span color="green">`IM`</span> 25,000–30,000 units/kg/day ÷ q4–6h; severe injection pain, not routine (US label only)<br>Not for inhalation (TW insert)<br>1 vial = 500,000 units = 50 mg (10,000 units = 1 mg)

**Why:** The column is empty. I re-checked the label numbers myself. TW insert §3.1: "每日以靜脈輸注給予15,000-25,000 units/kg，每12小時給藥一次，連續輸注時間60至90分鐘，最高輸注劑量為每日25,000 units/kg。目前沒有臨床證據支持其他給藥途徑…不建議使用其他途徑…不可以吸入方式給藥". US label, Dosage (Intravenous, Adults and children): "15,000 to 25,000 units/kg body weight/day… Infusions may be given every 12 hours; however, the total daily dose must not exceed 25,000 units/kg/day". US label, IM: 25,000–30,000 units/kg/day "divided and given at either 4 or 6 hour intervals… Not recommended routinely because of severe pain". US label, Intrathecal: 50,000 units once daily for 3–4 days, then every other day for at least 2 weeks after the CSF is negative. Consensus R15: "loading dose of 2.0–2.5 mg/kg… based on total body weight (TBW) (equivalent to 20,000–25,000 IU/kg) over 1 hour". Consensus R16: "1.25–1.5 mg/kg (equivalent to 12,500–15,000 IU/kg TBW) every 12 hours… infused over 1 hour". Unit conversion is from US label, Description (1 mg base = 10,000 units). The consensus regimen gives 25,000–30,000 units/kg/day, which is above both labels' maximum, so it must be shown as off-label.

**Sources:** Taiwan insert Bobimixyn 衛部藥製字第061557號 (rev. 2024-11) §3.1 用法用量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label Polymyxin B for Injection (Xellia), DailyMed setid b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6 v13, Dosage and Administration (Intravenous, Intramuscular, Intrathecal), Description — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji BT et al. International Consensus Guidelines for the Optimal Use of the Polymyxins, Pharmacotherapy 2019;39:10-39, PMID 30710469 (verified via esummary; full text PMC7437259), R15–R16 — https://pubmed.ncbi.nlm.nih.gov/30710469/

### B2 · Renal dose, HD, CRRT

<span color="green">`IV renal dose`</span> (TW insert, Bobimixyn)<br>CLcr 60–89: no adjustment<br>CLcr 15–59 and ESRD (CLcr \<15): 15,000–25,000 units/kg/day ÷ q12h (MAX 25,000 units/kg/day); 宜考量腎功能謹慎選擇劑量<br>US label: reduce from 15,000 units/kg/day downward<br>2019 consensus: do not adjust maintenance dose for renal impairment (R17); full LD (R15)<br><br>HD:<br>No label HD dose. TW PK study (single 0.75 mg/kg): HD pts AUC ↑58%, t½ 15.2 h vs 5.4 h. Consensus: no adjustment of LD or maintenance in RRT (R18)<br><br>CRRT:<br>No label dose. Consensus: no adjustment of LD or maintenance (R18; limited data)

**Why:** The column is empty. The brief told the drafter to use the US renal wording, but that was written when the Taiwan insert seemed unavailable. The ground rules prefer the stocked product's label, which is the TW insert. TW §3.3: "輕度腎功能不全 (CLcr 60-89)：無需進行劑量調整… 中重度腎功能不全者 (CLcr: 15-59) 及 ESRD 者 (CLcr< 15 mL/min)：每日靜脈注射給予15,000-25,000 units/kg，每12小時給藥一次…宜考量病患腎功能謹慎選擇劑量". Note that TW §6.7 contradicts this: "對於腎功能不全的病人，除了需要調整…劑量外，亦需更頻繁監測腎功能". The US label, Dosage: "This amount should be reduced from 15,000 units/kg downward for individuals with kidney impairment"; it is the other label, shown alongside. Consensus R17: "daily maintenance doses of polymyxin B should not be adjusted if the patient has renal impairment". Consensus R18: "neither the loading dose nor maintenance dose be adjusted in patients receiving renal replacement therapy". The HD figures come from TW §11.1, Tables 1–2: after a single 0.75 mg/kg dose, the HD arm had AUC0-inf GMR 157.92% and t½ 15.2 h vs 5.44 h. Neither label gives an HD or CRRT dose. The hospital's "give one dose after HD" has no source and should not be copied.

**Sources:** Taiwan insert Bobimixyn §3.3 特殊族群用法用量, §6.7 腎功能不全, §11.1 Tables 1–2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia) Boxed WARNING and Dosage (Intravenous) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji 2019 consensus R17, R18 (PMID 30710469) — https://pubmed.ncbi.nlm.nih.gov/30710469/

### B3 · Hepatic dose

No data; no hepatic dosing in labels (TW insert 6.6: 目前尚無資訊)

**Why:** TW §6.6 肝功能不全: "目前尚無資訊". The US label has no hepatic section. Do not write "no adjustment needed" or "safe", because neither label says so.

**Sources:** Taiwan insert Bobimixyn §6.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia), full text, no hepatic section — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6

### B4 · Pediatric dose

TW insert (Bobimixyn): adults only; 兒童無資料<br>US label: <span color="green">`IV`</span> 15,000–25,000 units/kg/day ÷ q12h (MAX 25,000 units/kg/day); infants (normal renal fn) up to 40,000 units/kg/day<br><span color="green">`IT`</span> \>2 y: 50,000 units qd × 3–4 d → QOD; \<2 y: 20,000 units qd × 3–4 d or 25,000 units QOD → 25,000 units QOD; continue ≥2 wk after CSF culture negative<br><span color="green">`IM`</span> 25,000–30,000 units/kg/day ÷ q4–6h (infants up to 40,000), not routine (pain)

**Why:** TW §2 restricts the indication to "成人病人", and §6.4 小兒 says "目前尚無資訊". US label, Dosage: "Adults and children" 15,000–25,000 units/kg/day; "Infants with normal kidney function may receive up to 40,000 units/kg/day". US label, Intrathecal: "Children under 2 years of age: 20,000 units once daily… for 3 to 4 days or 25,000 units once every other day. Continue with a dose of 25,000 units once every other day for at least 2 weeks after cultures of the cerebrospinal fluid are negative". The 45,000 units/kg/day neonatal figure comes only from limited studies and can be left out.

**Sources:** Taiwan insert Bobimixyn §2 適應症, §6.4 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia) Dosage: Intravenous/Intramuscular (Adults and children; Infants), Intrathecal (Adults and children over 2 years; Children under 2 years) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6

### B5 · Indications

Bacteremia, Meningitis, UTI, Pneumonia

**Why:** US label, Indications: Ps. aeruginosa infections "of the urinary tract, meninges, and blood-stream"; H. influenzae meningeal infections; E. coli UTI; Aerobacter/K. pneumoniae bacteremia. Meningitis is intrathecal only. Under the owner's rule (FDA OR SmPC = approved), Bacteremia, Meningitis and UTI qualify. TW §2 covers serious MDR Gram-negative infections in adults and says "不適合用於治療泌尿道感染". UTI is still tagged because the US label lists it, but the Notes must carry the Taiwan restriction (see B13). Pneumonia is guideline-based (off-label): IDSA 2026 Q5.5 lists polymyxin B in combination as an alternative for invasive CRAB infections, including pneumonia, and consensus R33 covers XDR HAP/VAP. The ophthalmic and subconjunctival indications have no tag option.

**Sources:** US FDA label (Xellia) Indications (Acute Infections Caused by Susceptible Strains of Pseudomonas aeruginosa) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Taiwan insert Bobimixyn §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; IDSA 2026 AMR Guidance (Tamma PD et al., Clin Infect Dis 2026, PMID 42570093 verified via esummary) Q5.5 — https://www.idsociety.org/practice-guideline/amr-guidance/; Tsuji 2019 consensus R33 (PMID 30710469) — https://pubmed.ncbi.nlm.nih.gov/30710469/

### B6 · Coverage

Pseudomonas, E.coli, Klebsiella, Enterobacter, Haemophilus, Acinetobacter, CRAB, CRKP, CRPA, CREC(E.coli)

**Why:** US label, Clinical Pharmacology: "bactericidal action against almost all gram-negative bacilli except the Proteus group… All gram positive bacteria, fungi, and gram-negative cocci are resistant". Do not tag Proteus, Neisseria, Gram-positives, anaerobes or fungi. US Indications name Ps. aeruginosa, H. influenzae, E. coli, Aerobacter aerogenes (Enterobacter/Klebsiella aerogenes) and K. pneumoniae. TW §11.2 gives Taiwan CR-GNB susceptibility for 2016–2019: CR-P. aeruginosa 100%, CR-A. baumannii 93.6%, CR-E. coli 98.9%, CR-E. cloacae 87.2%, CR-K. pneumoniae 68.4%. That supports the CRAB, CRPA, CREC and CRKP tags, with CRKP only partly susceptible (mention in Notes). Serratia, Burkholderia and Stenotrophomonas are not supported by these sources, so do not tag them.

**Sources:** US FDA label (Xellia) Clinical Pharmacology; Indications — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Taiwan insert Bobimixyn §10.1 作用機轉, §11.2 微生物學 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### B7 · Side Effects

nephrotoxicity, neurotoxicity, hypokalemia, thrombophlebitis

**Why:** US Boxed WARNING: nephrotoxicity (albuminuria, casts, azotemia) and neurotoxicity (ataxia, perioral paresthesia, numbness, blurred vision, respiratory paralysis from neuromuscular blockade). US Warnings, Electrolyte and Acid/Base Abnormalities: pseudo-Bartter syndrome, where "All cases reported hypokalemia and metabolic alkalosis". US Adverse Reactions: "thrombophlebitis at intravenous injection sites". TW §8.1 says the same. TW §8.2 adds the local PK trial: oral hypoesthesia 72.7%, skin hypoesthesia 50%, dizziness 40.9%; these fall under neurotoxicity. Neuromuscular blockade, CDAD, drug fever and skin hyperpigmentation have no tag option; put them in Notes.

**Sources:** US FDA label (Xellia) Boxed WARNING; Warnings (Electrolyte and Acid/Base Abnormalities); Adverse Reactions — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Taiwan insert Bobimixyn §8.1, §8.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### B8 · Monitor

renal, neuro, electrolyte

**Why:** US Precautions, General: "Baseline renal function should be done prior to therapy, with frequent monitoring of renal function and blood levels of the drug during parenteral therapy". US Warnings: "Consider electrolyte monitoring during treatment". The Boxed WARNING lists the neurotoxic signs. TW §5.1.1: "開始治療前應測量基礎腎功能，在注射治療期間，需頻繁監測腎功能". TDM has no tag option; put it in Notes (consensus R19).

**Sources:** US FDA label (Xellia) Precautions (General); Warnings (Electrolyte) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Taiwan insert Bobimixyn §5.1.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### B9 · Mechanism

Basic (cationic) polypeptide; ↑ bacterial cell-membrane permeability → cell death (bactericidal vs most Gram(−) bacilli). Given as the active drug (not a prodrug like CMS)

**Why:** US label, Clinical Pharmacology: "Polymyxins increase the permeability of bacterial cell membrane leading to death of the cell" and "bactericidal action". TW §10.1 says the same. Consensus Section IV: "Polymyxin B is not administered as a prodrug".

**Sources:** US FDA label (Xellia) Clinical Pharmacology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Taiwan insert Bobimixyn §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; Tsuji 2019 consensus (PMID 30710469), text under R6–R7 — https://pubmed.ncbi.nlm.nih.gov/30710469/

### B10 · Drug Interactions

Avoid other nephrotoxic/neurotoxic drugs: aminoglycosides, bacitracin, colistin, vancomycin, cephalothin/cephaloridine, paromomycin, viomycin<br>Neuromuscular blockers (tubocurarine, succinylcholine, etc.), ether, sodium citrate: ↑ neuromuscular blockade → respiratory paralysis<br>Potent diuretics (furosemide, ethacrynic acid): ↑ polymyxin toxicity

**Why:** US Boxed WARNING: avoid concurrent or sequential bacitracin, streptomycin, neomycin, kanamycin, gentamicin, tobramycin, amikacin, cephaloridine, paromomycin, viomycin and colistin. US Precautions: avoid curariform muscle relaxants, ether, tubocurarine, succinylcholine, gallamine, decamethonium and sodium citrate. TW §7 adds vancomycin and cephalothin, and says "應避免將Polymyxin B sulfate與強效利尿劑(如ethacrynic acid或furosemide)同時使用". Consensus R20 also says to avoid concomitant nephrotoxins.

**Sources:** Taiwan insert Bobimixyn §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia) Boxed WARNING; Precautions (General) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji 2019 consensus R20 (PMID 30710469) — https://pubmed.ncbi.nlm.nih.gov/30710469/

### B11 · Pregnancy

Safety in human pregnancy not established; no human or animal data — use only if benefit outweighs fetal risk

**Why:** US Boxed WARNING: "USAGE IN PREGNANCY: THE SAFETY OF THIS DRUG IN HUMAN PREGNANCY HAS NOT BEEN ESTABLISHED". TW §6.1: "除非對母體的預期益處超過對胎兒可能的風險，否則不應在懷孕期間使用…動物研究也缺乏相關數據". Neither label gives a letter category, and none should be written.

**Sources:** US FDA label (Xellia) Boxed WARNING — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Taiwan insert Bobimixyn §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F

### B12 · Breastfeeding

Unknown if excreted in milk; weigh stopping breastfeeding vs stopping therapy (TW insert). Not absorbed from normal GI tract (US label). LactMed 2024: topical use low risk; no data for systemic (IV) use

**Why:** TW §6.2: "目前尚不清楚…是否會分泌到母乳…應權衡考慮是停止哺乳還是停止治療". US Clinical Pharmacology: "not absorbed from the normal alimentary tract". LactMed (rev. 2024-11-15) addresses only topical use ("poorly absorbed after topical application… low risk") and found no drug-level or infant data.

**Sources:** Taiwan insert Bobimixyn §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; LactMed Polymyxin B NBK501432 (rev. 2024-11-15), Summary of Use during Lactation; Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK501432/; US FDA label (Xellia) Clinical Pharmacology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6

### B13 · Notes

Boxed warning: nephrotoxicity, neurotoxicity, respiratory paralysis (NM blockade, esp. after anesthesia/muscle relaxants)<br>CI: polymyxin hypersensitivity; myasthenia gravis (TW insert)<br>TW insert: 不適用於UTI; not for inhalation. Colistin (CMS) preferred for lower UTI — PB is mainly non-renally cleared (2019 consensus R7; IDSA 2026)<br>Invasive CRE/CRAB/CRPA: combine with ≥1 agent the isolate is susceptible to (consensus R27, R29, R31); CRAB: alternative only, in combination (IDSA 2026)<br>TDM if available: AUCss,24h 50–100 mg·h/L (Css,avg 2–4 mg/L); avoid doses above guideline without TDM (consensus R3, R19, R21)<br>Obesity: dose by TBW, no PK basis for capping; limited experience \>2,000,000 units (200 mg)/infusion (consensus)<br>IT: CMS preferred over PB (consensus R36)<br>Pseudo-Bartter: ↓K, ↓Ca, ↓Mg, metabolic alkalosis; CDAD; skin hyperpigmentation reported<br>Taiwan CR-GNB susceptibility (2016–19): CRPA 100%, CRAB 93.6%, CREC 98.9%, CR-E. cloacae 87.2%, CRKP 68.4%<br>Resistant: Proteus, Gram(+), fungi, Gram(−) cocci<br>1 vial = 500,000 units = 50 mg

**Why:** The column is empty. Each item is sourced. Myasthenia gravis: TW §4 "曾對多黏菌素類抗生素產生嚴重過敏反應者與重症肌無力病人，不得使用". This contraindication is in the TW insert only, not the US label. TW §2 excludes UTI and TW §3.1 says no inhalation. Consensus: R7 (colistin for lower UTI), R27–R32 (combination), R3/R19/R21 (AUC target, TDM, no higher doses without TDM), R36 (CMS for IT). Obesity and >200 mg per infusion come from the evidence text under R15. Hyperpigmentation is in the evidence text under R22–R23 (ref 101). IDSA 2026: "colistin, but not polymyxin B, is converted… within the urinary tract" and Q5.5. Pseudo-Bartter and CDAD are in the US Warnings. Susceptibility rates: TW §11.2.

**Sources:** Taiwan insert Bobimixyn §2, §3.1, §4, §11.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia) Boxed WARNING; Warnings; Clinical Pharmacology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji 2019 consensus R3, R7, R15 text, R19, R21, R27–R32, R36 (PMID 30710469) — https://pubmed.ncbi.nlm.nih.gov/30710469/; IDSA 2026 AMR Guidance (PMID 42570093) Q3/Q4 uUTI text, Q5.5 — https://www.idsociety.org/practice-guideline/amr-guidance/

### B14 · Page body

# **POLYMYXIN B (Bobimixyn 寶比黴素) 500,000 units/vial**<br>---<br>## **Category**<br>Polymyxin (polymyxin B sulfate); basic polypeptide antibiotic; last-line agent for MDR/XDR Gram-negative infections<br>## **Mechanism**<br>↑ bacterial cell-membrane permeability → cell death (bactericidal vs most Gram(−) bacilli); given as active drug (not a prodrug like CMS)<br>## **Indications**<br>- TW insert (Bobimixyn): serious infections in adults due to susceptible MDR Gram-negative bacteria; **not for UTI**<br>- US label: Ps. aeruginosa UTI, meningitis (intrathecal only), bacteremia; H. influenzae meningitis, E. coli UTI, Aerobacter/K. pneumoniae bacteremia when less toxic drugs fail; eye infections (topical/subconjunctival)<br>- Guidelines (off-label): invasive CRAB infection incl. pneumonia — alternative, in combination (IDSA 2026); XDR HAP/VAP (consensus R33)<br>## **Coverage**<br>Most Gram(−) bacilli incl. CRAB/CRPA/CRE; Taiwan 2016–19: CRPA 100%, CRAB 93.6%, CREC 98.9%, CR-E. cloacae 87.2%, CRKP 68.4%. **Resistant:** Proteus, Gram(+), fungi, Gram(−) cocci<br>## **Adult Dose**<br>\| Route \| Dose \| Source \|<br>\|---\|---\|---\|<br>\| IV \| 15,000–25,000 units/kg/day ÷ q12h, 60–90 min; MAX 25,000 units/kg/day; dilute 500,000 units in 300–500 mL D5W or NS \| TW insert (US: D5W) \|<br>\| IV, severe infection (off-label) \| LD 20,000–25,000 units/kg TBW over 1 h → 12,500–15,000 units/kg TBW q12h (upper end exceeds label MAX) \| 2019 consensus R15–R16 \|<br>\| IT \| 50,000 units qd × 3–4 d → QOD until ≥2 wk after CSF culture negative and CSF sugar normal \| US label \|<br>\| IM \| 25,000–30,000 units/kg/day ÷ q4–6h (painful, not routine) \| US label \|<br><br>TW insert: other routes not recommended; not for inhalation.<br>## **Renal Dose, HD, CRRT**<br>- TW insert: CLcr 60–89 no adjustment; CLcr 15–59 and ESRD (<15): 15,000–25,000 units/kg/day q12h, choose cautiously<br>- US label: reduce from 15,000 units/kg/day downward<br>- 2019 consensus: no maintenance-dose adjustment for renal impairment (R17) or RRT incl. HD/CRRT (R18); LD unchanged<br>- TW PK (single 0.75 mg/kg): HD pts AUC ↑58%, t½ 15.2 h vs 5.4 h<br>## **Hepatic Dose**<br>No data (TW insert)<br>## **Pediatric Dose**<br>TW insert: adults only. US label: IV 15,000–25,000 units/kg/day (infants up to 40,000); IT >2 y 50,000 units, <2 y 20,000 units qd or 25,000 units QOD<br>## **Side Effects**<br>Nephrotoxicity, neurotoxicity (perioral/stocking-glove paresthesia, dizziness, ataxia), NM blockade/respiratory paralysis, pseudo-Bartter (↓K, ↓Ca, ↓Mg, alkalosis), thrombophlebitis, IM pain, drug fever, urticaria, CDAD, meningeal irritation (IT), skin hyperpigmentation<br>## **Monitor**<br>Baseline + frequent renal function, electrolytes (K/Ca/Mg), neuro/respiratory signs; TDM if available (AUCss,24h 50–100 mg·h/L)<br>## **Drug Interactions**<br>Avoid nephro/neurotoxic drugs (aminoglycosides, colistin, bacitracin, vancomycin); NMBAs/anesthetics; potent diuretics (furosemide, ethacrynic acid)<br>## **Pregnancy / Breastfeeding**<br>Safety not established; use only if benefit > risk. Milk excretion unknown; weigh stopping breastfeeding vs therapy; LactMed: topical low risk, no IV data<br>## **Notes**<br>CI: polymyxin hypersensitivity, myasthenia gravis (TW). Colistin preferred for lower UTI and IT. Combine with a second active agent where available. 1 vial = 500,000 units = 50 mg.<br>## References<br>- Taiwan insert Bobimixyn 衛部藥製字第061557號 (rev. 2024-11). [TFDA](https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F)<br>- US FDA label: Polymyxin B for Injection (Xellia), DailyMed v13 (2026-06-24). [DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6)<br>- UK: no systemic polymyxin B SmPC on eMC (eye/ear combinations only)<br>- Tsuji BT et al. Pharmacotherapy 2019;39:10-39. [PMID 30710469](https://pubmed.ncbi.nlm.nih.gov/30710469/)<br>- Tamma PD et al. IDSA 2026 AMR Guidance. Clin Infect Dis 2026. [PMID 42570093](https://pubmed.ncbi.nlm.nih.gov/42570093/)<br>- LactMed: Polymyxin B (rev. 2024-11-15). [NBK501432](https://www.ncbi.nlm.nih.gov/books/NBK501432/)

**Why:** The page body is blank. Other entries, such as Colimycin, have a monograph body with a References section. The proposal is a concise version. Every line comes from the sources cited in B1–B13. Storage and stability details are left out on purpose, as the owner wants.

**Sources:** Taiwan insert Bobimixyn (all sections cited above) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061557%E8%99%9F; US FDA label (Xellia) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b56f18c0-ef5e-4ed9-a5af-f79f3cd189b6; Tsuji 2019 consensus (PMID 30710469) — https://pubmed.ncbi.nlm.nih.gov/30710469/; IDSA 2026 AMR Guidance (PMID 42570093) — https://www.idsociety.org/practice-guideline/amr-guidance/; LactMed NBK501432 — https://www.ncbi.nlm.nih.gov/books/NBK501432/; eMC search 'polymyxin b' (Maxitrol eye drops/ointment, Otosporin ear drops only) — https://www.medicines.org.uk/emc/search?q=polymyxin+b

### B15 · Renewed date

2026-10-05 (set when the columns are filled)

**Why:** Other audited entries, such as Colimycin, set Renewed date when they were verified. This is housekeeping, not a clinical claim.

**Sources:** Notion Colimycin (Colistin) entry, Renewed date 2026-10-05 — https://app.notion.com/p/20dc496dfff1805bac69c7861b39ad30

## Apply log

- Adult dose: the two agreed versions merged into one value: IV label dose and maximum, diluent, consensus loading and maintenance doses (R15-R16, off-label), IT and IM (US label only), TW insert route limits (no inhalation), units-to-mg conversion
- Renal dose, HD, CRRT: TW insert dosing by CrCl, US 'reduce downward', consensus R17/R18, TW HD PK data, CRRT
- Hepatic dose: no data (TW 6.6 目前尚無資訊; not covered in US label)
- Pediatric dose: TW insert adults only; US label IV, IM and IT doses including infant doses
- Indications: Bacteremia, Meningitis, UTI, Pneumonia (union of the two proposals, all existing options)
- Coverage: Pseudomonas, E.coli, Klebsiella, Enterobacter, Haemophilus, Acinetobacter, CRAB, CRPA, CRKP, CREC(E.coli)
- Side Effects: nephrotoxicity, neurotoxicity, hypokalemia, thrombophlebitis
- Monitor: renal, electrolyte, neuro
- Mechanism: cationic polypeptide, membrane permeability, bactericidal, active drug (not a prodrug like CMS)
- Drug Interactions: nephrotoxic/neurotoxic drugs, NMBAs/ether/sodium citrate, potent diuretics
- Pregnancy: safety not established, no human or animal data, benefit vs risk (no letter category)
- Breastfeeding: TW insert, US label GI absorption, LactMed 2024
- Notes: the two Notes proposals merged without duplicates: boxed warning, contraindications, units/mg, not for UTI / colistin preferred, combination therapy, TDM, obesity, IT/IVT, inhaled, pseudo-Bartter, other AEs, TW PK AEs, Taiwan CR-GNB susceptibility, resistant organisms
- Page body: monograph added (Category, Mechanism, Indications, Coverage, Adult Dose table with units-to-mg line, Renal/HD/CRRT, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions, Pregnancy/Breastfeeding, Notes); no storage/stability
- Page body: References section added listing the TW insert, DailyMed setid b56f18c0 v13, eMC (no systemic SmPC), Tsuji 2019 PMID 30710469, IDSA 2026 PMID 42570093 plus URL, and LactMed NBK501432
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
