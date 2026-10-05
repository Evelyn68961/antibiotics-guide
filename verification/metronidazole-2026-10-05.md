# New entry: SABS (Metronidazole)

- **Notion entry:** [SABS (Metronidazole)](https://app.notion.com/3f0c496dfff181feac6bcf0ef94fdc25). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** SAB03 (SABS inj 500 mg/100 mL), TOL01 (Tolizole cap 250 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/metronidazole.json` (plus any Taiwan insert text files)

## Product and sources

The page is "SABS (Metronidazole)" (https://app.notion.com/3f0c496dfff181feac6bcf0ef94fdc25). The hospital stocks two metronidazole products.

(1) SAB03: SABS injection 500 mg/100 mL (沙普注射液, 信東生技), NHI AC26817255, ATC J01XD01. Its Taiwan licence is 衛署藥製字第026817號.

(2) TOL01: Tolizole capsule 250 mg (德利治癒膠囊, 國嘉製藥), NHI AC410251G0, ATC P01AB01. Its Taiwan licence is 衛署藥製字第041025號.

The brief says no Taiwan insert could be found. That is wrong. I worked out both licence numbers from the NHI codes (digits 3–7), the same way earlier reports did for cefepime and ampicillin-sulbactam. Both inserts load from the TFDA platform:
- https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F
- https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

Scratch text copies are in /tmp/claude-0/-home-user-antibiotics-guide/4c50b851-ebcc-5771-83a6-3305d6a7ca62/scratchpad/ as tw_026817.txt and tw_041025.txt. I did not add them to verification/sources/, because the ground rules allow editing only the sources JSON.

To cover the oral gap, I also fetched the US oral label: FLAGYL (metronidazole) capsule 375 mg, Pfizer, setid a2883ca1-5a9a-4259-9d80-46ab67274384, version 25, published May 25, 2026. Scratch copy: flagyl.txt.

The other sources:
- US injection label: WG Critical Care, setid e4ea0c09-cdd1-4708-962c-6ba28b989df3, version 3.
- UK SmPC: Baxter Metronidazole 500 mg/100 ml IV infusion, eMC 1842, revised 02/04/2026.
- LactMed: NBK501315, revised 2026-03-15.

The Notion page was blank when fetched on 2026-10-05. Only Abx and Category ("Nitroimidazole") had values; every other column and the body were empty.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="green">`IV`</span> SABS 500 mg/100 mL, anaerobic infection: 15 mg/kg loading dose (≈1 g for 70 kg) over 1 h, then 7.5 mg/kg (≈500 mg) over 1 h q6h. Start maintenance 6 h after the loading dose. Max 4 g/24 h. Usual course 7–10 d; bone/joint, LRTI and endocarditis may need longer (US label; TW 仿單: 初劑量15 mg/kg→7.5 mg/kg q6h, 最高1 g/次, 每日≤4 g). UK SmPC alternative: 500 mg q8h or 1–1.5 g q24h, infused over 20–60 min.<br>Surgical prophylaxis (colorectal): 15 mg/kg over 30–60 min, completed ≈1 h before incision, then 7.5 mg/kg at 6 h and 12 h; day of surgery only (US). UK: 1–1.5 g 30–60 min pre-op, or 500 mg then 500 mg q8h; ≤24 h, never >48 h.<br><span color="blue">`PO`</span> Tolizole 250 mg cap: anaerobes 7.5 mg/kg (≈500 mg) q6h, max 4 g/d (US Flagyl; TW 仿單). Amebiasis (dysentery or liver abscess): 750 mg TID × 5–10 d (US Flagyl); TW 仿單 lists 500–700 mg TID × 5–7 d. Trichomoniasis: 2 g single dose, or 250 mg TID × 7 d (TW 仿單; UK: 2 g single, or 400 mg BID × 5–7 d). BV: 400 mg BID × 5–7 d or 2 g single (UK SmPC, listed for adolescents). Giardiasis (>10 y): 2 g qd × 3 d, or 400 mg TID × 5 d, or 500 mg BID × 7–10 d (UK SmPC). IV→PO switch at the same dose (US).

**Why:** Every column is empty on this new entry. The doses are taken from the label of each stocked product: the TW SABS insert plus the US injection label for IV, and the TW Tolizole insert plus the US Flagyl label for PO. The UK SmPC gives the q8h alternative and the BV and giardiasis regimens. The TW Tolizole insert prints amebiasis as "500-700mg", which is probably a misprint for 750 mg; I quoted it as printed and put the US value first.

**Sources:** US FDA metronidazole injection label: DOSAGE AND ADMINISTRATION, 'Recommended Dosage for the Treatment of Anaerobic Bacterial Infections' (Table 1) and 'Recommended Prophylaxis Dosage': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FDA FLAGYL capsule label: DOSAGE AND ADMINISTRATION (Amebiasis; Anaerobic Bacterial Infections; Trichomoniasis): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; UK SmPC 4.2, Posology (prophylaxis, anaerobic infections, BV, trichomoniasis, giardiasis, amoebiasis): https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 3.1 用法用量: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; TW Tolizole 仿單 3.1.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### A2 · Renal dose, HD, CRRT

No adjustment. Lower renal function does not change single-dose PK; in anuric patients do not reduce the dose, because HD clears the metabolites quickly (TW 仿單 SABS/Tolizole: 無尿症患者一般不需要減少劑量; US label). ESRD: hydroxy and acetate metabolites accumulate (Cmax ×2 and ×5) → monitor for neurotoxicity (US Flagyl; UK 4.4).<br>HD: a 4–8 h session removes 40–65% → give the dose after HD; if dosing cannot be separated from the session, consider a supplemental dose (US Flagyl). UK: re-administer immediately after HD.<br>PD/CAPD: ≈10% removed → no adjustment (US Flagyl; UK SmPC; TW: 腹膜透析之移除不明顯).<br>CRRT: no label data. Metronidazole is freely filtered (SC >0.7; Bouman 2006, PMID 17043848) but cleared mainly by the liver → usual dose (e.g. 500 mg q8h); monitor for neurotoxicity [flag: reviewer inference, not a label statement].

**Why:** This follows the source hierarchy: the TW inserts for the stocked products first, then the US labels. The US Flagyl label adds the ESRD, HD and CAPD numbers. No label covers CRRT. PMID 17043848 was checked with esummary. It supports good CVVH removal of metronidazole but does not give a dose, so the CRRT line is flagged as an inference.

**Sources:** TW SABS 仿單 5.1 and 10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; TW Tolizole 仿單 5.1.5 and 10.2 (HD shortens half-life to 2.6 h): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F; US FDA injection label, CLINICAL PHARMACOLOGY and D&A ('should not be specifically reduced in anuric patients'): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FLAGYL label, CLINICAL PHARMACOLOGY 'Renal Impairment' and 'Effect of Dialysis'; D&A 'Patients Undergoing Hemodialysis': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; UK SmPC 4.2 'Patients with renal failure', 4.4 'Renal Disease', 5.2: https://www.medicines.org.uk/emc/product/1842/smpc; Bouman CS et al. Intensive Care Med 2006;32:2013-9, PMID 17043848 (verified via esummary): https://pubmed.ncbi.nlm.nih.gov/17043848/

### A3 · Hepatic dose

Child-Pugh A/B: no adjustment; monitor for adverse events (US Flagyl).<br>Child-Pugh C: <span color="blue">`PO`</span> amebiasis → cut the dose by 50% (Flagyl 375 label: 750 mg → 375 mg q8h); trichomoniasis → lengthen the interval q12h → q24h (Flagyl 375 mg BID → 375 mg q24h × 7 d) (US Flagyl, PK modelling; AUC +114%). <span color="green">`IV`</span> severe hepatic disease → give doses below the usual ones, cautiously, and monitor plasma levels and toxicity (US injection label). UK: advanced hepatic insufficiency → reduce the dose with serum-level monitoring.<br>Hepatic encephalopathy: accumulation can worsen CNS effects (UK 4.4). TW 仿單: 肝功能不全時清除率降低，劑量調整可能有其必要.<br>Cockayne syndrome: contraindicated (fatal acute liver failure).

**Why:** The stocked products' labels (TW inserts) say only that adjustment may be needed. The US Flagyl label is the only label that gives Child-Pugh-specific regimens, and they apply to PO amebiasis and trichomoniasis only. For IV, the US and UK labels give no fixed regimen: reduce the dose and monitor levels.

**Sources:** US FLAGYL label, CLINICAL PHARMACOLOGY 'Hepatic Impairment'; PRECAUTIONS 'Hepatic Impairment'; D&A 'Patients with Severe Hepatic impairment': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; US FDA injection label, PRECAUTIONS 'General' and D&A ('doses below those usually recommended… Close monitoring of plasma metronidazole levels'): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC 4.2 'advanced hepatic insufficiency' and 4.4 'Liver disease': https://www.medicines.org.uk/emc/product/1842/smpc; TW Tolizole 仿單 6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### A4 · Pediatric dose

<span color="green">`IV`</span> US: approved only for intra-abdominal infection (IAI) in infants <4 months. 15 mg/kg loading dose, then 7.5 mg/kg; post-menstrual age 23–<34 wk q12h, 34–40 wk q8h, >40–48 wk q6h. First maintenance dose 24 h after the loading dose. ≥4 months: safety and efficacy not established (US); TW SABS 仿單: 兒童劑量尚未確立.<br>UK SmPC: >8 wk–12 y, 20–30 mg/kg/day as one dose or 7.5 mg/kg q8h (up to 40 mg/kg/day if severe); <8 wk, 15 mg/kg/day as one dose or 7.5 mg/kg q12h. Prophylaxis: <12 y, 20–30 mg/kg single dose 1–2 h pre-op; newborns <40 wk GA, 10 mg/kg single dose.<br><span color="blue">`PO`</span> Amebiasis: 35–50 mg/kg/day divided TID × 10 d (US Flagyl; UK max 2.4 g/day × 5–10 d); TW Tolizole 仿單 11.6–16.7 mg/kg TID × 10 d. Trichomoniasis: TW 仿單 5 mg/kg TID × 7 d; UK <10 y 40 mg/kg single dose (max 2 g) or 15–30 mg/kg/day divided BID–TID × 7 d. Giardiasis: 15–40 mg/kg/day divided BID–TID (UK). Anaerobes: 7.5 mg/kg q6h or 10 mg/kg q8h (TW Tolizole 仿單).<br>Neonates eliminate slowly (t½ ≈109 h at GA 28 wk → 22.5 h at 40 wk, US label) → UK: monitor serum levels after a few days in newborns <40 wk GA.

**Why:** The two US labels differ. The IV label approves use only for IAI under 4 months, with dosing by post-menstrual age. The PO label establishes pediatric use only for amebiasis. The TW SABS insert says pediatric use is not established. The UK SmPC gives broader IV dosing. Each value is attributed to its source so readers can see which applies.

**Sources:** US FDA injection label, PRECAUTIONS 'Pediatric Use' and D&A Table 2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FLAGYL label, D&A Amebiasis 'Pediatric patients' and 'Pediatric use': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; UK SmPC 4.2: https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 3.1 and 6.4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; TW Tolizole 仿單 3.1.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### A5 · Indications

["IAI","cIAI","Peritonitis","SSTI","Pelvic","Bacteremia","Osteoarthritis","Meningitis","Brain abscess","Pneumonia","Endocarditis","Surgical prophylaxis"]

**Why:** All of these are listed in the US injection label (anaerobic infections) or the UK SmPC 4.1:<br>- Intra-abdominal infection, including peritonitis and abscess (cIAI is included because the label's IAI cases are complicated ones).<br>- Skin and skin-structure infection.<br>- Gynecologic infection, mapped to 'Pelvic'.<br>- Septicemia, mapped to 'Bacteremia'.<br>- Bone and joint infection (adjunctive), mapped to the owner's 'Osteoarthritis' tag.<br>- CNS infection (meningitis, brain abscess).<br>- LRTI (pneumonia, empyema, lung abscess).<br>- Endocarditis.<br>- Colorectal surgical prophylaxis (US) or abdominal/gynaecological surgical prophylaxis (UK).<br><br>I left out CDI: neither the US nor the UK label lists it, so it goes in Notes. There are no options for amebiasis, trichomoniasis or giardiasis, so those also go in Notes. 'Sepsis' could be added for septicemia; I chose Bacteremia only.

**Sources:** US FDA injection label, INDICATIONS AND USAGE 'Treatment of Anaerobic Infections' and 'Prophylaxis Indication': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC 4.1: https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 2 適應症; TW Tolizole 仿單 2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### A6 · Coverage

["Bacteroides","Anaerobes"]

**Why:** The US label lists the Bacteroides fragilis group, Fusobacterium, Clostridium, Eubacterium, Peptococcus and Peptostreptococcus. The UK SmPC 5.1 adds C. difficile, C. perfringens, Prevotella, Porphyromonas, Veillonella and Bilophila. The US label states there is no clinically relevant activity against aerobes or facultative anaerobes. The UK SmPC lists Actinomyces, Mobiluncus and Propionibacterium acnes as resistant.<br><br>The protozoa (Trichomonas, Entamoeba, Giardia) and H. pylori have no schema option, so they go in Notes. 'Finegoldia' (formerly Peptostreptococcus magnus) could arguably be added. I left it out because no label names it.

**Sources:** US FDA injection label, Microbiology 'Antimicrobial Activity' and 'Drug Resistance': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/1842/smpc

### A7 · Side Effects

["GI","CNS","neuropathy","neurotoxicity","neutropenia","leukopenia","thrombocytopenia","LFT↑","QTc prolong","SJS/TEN","DRESS","thrombophlebitis"]

**Why:** Each tag maps to the US injection label's ADVERSE REACTIONS and WARNINGS:<br>- GI: nausea, metallic taste, pancreatitis.<br>- CNS: dizziness, confusion, psychosis.<br>- neuropathy: peripheral and optic neuropathy.<br>- neurotoxicity: seizures, encephalopathy, aseptic meningitis.<br>- neutropenia, leukopenia, thrombocytopenia: reversible neutropenia (leukopenia), thrombocytopenia.<br>- LFT↑: hepatic enzymes increased.<br>- QTc prolong.<br>- SJS/TEN and DRESS: the SCARs warning.<br>- thrombophlebitis: after IV infusion.<br><br>The TW inserts 8.1 match: 金屬味, 可逆性嗜中性白血球減少, 週邊神經病變, 血栓靜脈炎. Disulfiram-like reaction, darkened urine, candidiasis and Cockayne hepatotoxicity have no options, so they go in Notes.

**Sources:** US FDA injection label, ADVERSE REACTIONS; WARNINGS 'Severe Cutaneous Adverse Reactions' and 'Central and Peripheral Nervous System Effects': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC 4.8: https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F

### A8 · Monitor

["CBC","neuro","LFT","PT/INR"]

**Why:** - CBC: total and differential leukocyte counts before and after therapy (US 'Laboratory Tests'; TW 仿單: 治療前後應注意測量其白血球數量). UK 4.4 advises regular blood counts for high-dose or prolonged courses.<br>- neuro: watch for neuropathy, ataxia and encephalopathy, especially in long courses, ESRD or hepatic impairment.<br>- LFT: Cockayne syndrome, and hepatic impairment.<br>- PT/INR: only when the patient takes warfarin or a coumarin (US Drug Interactions; UK 4.5).<br><br>ECG is optional and only relevant with other QT-prolonging drugs.

**Sources:** US FDA injection label, PRECAUTIONS 'Laboratory Tests', WARNINGS (CNS), Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC 4.4 'Monitoring', 'Hepatotoxicity in patients with Cockayne Syndrome', and 4.5: https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F

### A9 · Mechanism

Nitroimidazole prodrug. It enters the cell by passive diffusion and, in anaerobes and protozoa, its nitro group is reduced (ferredoxin electron transport) to short-lived nitroso free radicals. These cause DNA strand breakage and inhibit DNA synthesis → bactericidal. It is active only in an anaerobic environment; no clinically relevant activity against aerobes or facultative anaerobes. 硝基咪唑：厭氧菌內還原活化→破壞DNA螺旋結構→殺菌.

**Why:** Paraphrased from the US label and the TW insert 10.1.

**Sources:** US FDA injection label, Microbiology 'Mechanism of Action' and 'Drug Resistance': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; TW SABS 仿單 10.1 作用機轉: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/1842/smpc

### A10 · Drug Interactions

Disulfiram within the past 2 wk → psychotic reactions (contraindicated)；alcohol or propylene-glycol products during therapy and for ≥3 d (72 h) after → disulfiram-like reaction (US contraindication; UK 4.4/4.5; TW 仿單 7)；warfarin/coumarins → ↑INR, monitor PT/INR；lithium → ↑Li, check Li and SCr after several days；busulfan → ↑busulfan (SOS/VOD), avoid or do busulfan TDM；phenytoin/phenobarbital → ↑metronidazole clearance (phenytoin clearance ↓)；cimetidine → ↓metronidazole clearance；CYP3A4 substrates (amiodarone, tacrolimus, ciclosporin, carbamazepine, quinidine) → ↑levels (UK)；5-FU → ↑toxicity；vecuronium potentiated (UK)；QT-prolonging drugs → QT prolongation；cholestyramine → ↓PO absorption (UK). Lab: falsely low or zero AST/ALT/LDH/TG/hexokinase glucose.

**Why:** Built from the interaction sections of all three labels. The alcohol and propylene-glycol 3-day rule is in the US injection CONTRAINDICATIONS, so it is label-supported.

**Sources:** US FDA injection label, CONTRAINDICATIONS, Drug Interactions, Drug/Laboratory Test Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FLAGYL label, PRECAUTIONS Drug interactions (Lithium, Busulfan, Warfarin, CYP450): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; UK SmPC 4.5: https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F

### A11 · Pregnancy

Crosses the placenta. Use only if clearly needed (US injection; UK 4.6; TW 仿單: 孕婦須在顯著需要下方可使用).<br>Trichomoniasis: contraindicated in the 1st trimester (US Flagyl). TW 仿單 (SABS and Tolizole) lists 懷孕三個月內 as a contraindication for all uses.<br>Human data: >5000 exposed pregnancies (case-control, cohort, meta-analyses) mostly show no increase in malformations. One study found cleft lip ± palate, but this was not confirmed (US Flagyl). Carcinogenic in rodents.

**Why:** Written without letter categories, per the ground rules. Both TW inserts still print 'FDA Pregnancy Category: B'; do not copy that.

**Sources:** US FDA injection label, 'Teratogenic Effects': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FLAGYL label, CONTRAINDICATIONS and PRECAUTIONS 'Pregnancy': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/1842/smpc; TW Tolizole 仿單 4.4 and 6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### A12 · Breastfeeding

Milk levels ≈ maternal plasma (US labels). The breastfed infant gets less than a therapeutic infant dose, but the active hydroxy metabolite adds to exposure. Watch the infant for diarrhea and oral or perianal Candida (LactMed, rev. 2026-03-15).<br>Opinions vary on longer courses. After a single 2 g dose, some sources advise withholding breastfeeding for 12–24 h, but not after lower doses (LactMed). US Flagyl: the mother may pump and discard during therapy and for 48 h after the last dose. UK SmPC / TW 仿單: stop either breastfeeding or the drug.<br>Alternatives for anaerobes: amoxicillin-clavulanate, clindamycin (LactMed).

**Why:** LactMed is the preferred breastfeeding source, so it leads. The labels' more restrictive advice is listed after it.

**Sources:** LactMed Metronidazole NBK501315 (rev 2026-03-15), Summary of Use, Effects in Breastfed Infants, Alternate Drugs: https://www.ncbi.nlm.nih.gov/books/NBK501315/; US FLAGYL label, 'Nursing mothers': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/1842/smpc; TW Tolizole 仿單 6.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### A13 · Notes

Anaerobes only → add an aerobic agent in mixed infections (US). Also active against Trichomonas, Entamoeba histolytica, Giardia and H. pylori (UK 5.1); no schema tags exist for these.<br>Good tissue penetration: CSF and saliva ≈ plasma; bactericidal levels in liver-abscess pus (US). PO bioavailability ≥80% (TW Tolizole 仿單) → switch IV→PO early.<br>Contraindicated: hypersensitivity to nitroimidazoles; Cockayne syndrome (fatal acute liver failure); disulfiram within 2 wk; alcohol/propylene glycol during and ≥3 d after (US). TW 仿單 also lists 血液疾病、腦/脊髓疾病、懷孕三個月內.<br>UK: IV courses usually <10 d; repeat only rarely. Carcinogenic in rodents (US). Sodium: US/UK 500 mg/100 mL bags contain 13.5 mEq (mmol) Na (SABS 仿單 gives no figure) → caution in edema or with corticosteroids (US; TW 仿單 較易患水腫病者或服用副腎皮質類固醇). Ready to use, no dilution; do not use aluminium needles or sets; do not admix (US/TW). Darkened urine is harmless.<br>CDI: no label indication. IDSA/SHEA 2017 (McDonald 2018, PMID 29462280): PO metronidazole 500 mg TID × 10 d only for non-severe CDI when vancomycin/fidaxomicin are unavailable; fulminant CDI: IV metronidazole 500 mg q8h added to PO/PR vancomycin. The 2021 focused update prefers fidaxomicin (Johnson 2021, PMID 34164674).

**Why:** Collects the clinically useful label content that has no column, plus the organisms and indications that have no multi-select option (per the ground rules). I verified the CDI guideline PMIDs with esummary. The fulminant-CDI IV metronidazole statement comes from the guideline full text; the abstracts do not state it. Storage details are deliberately left out.

**Sources:** US FDA injection label, CLINICAL PHARMACOLOGY, CONTRAINDICATIONS, PRECAUTIONS 'General', 'Important Preparation and Administration Instructions': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC 4.4 and 5.1: https://www.medicines.org.uk/emc/product/1842/smpc; TW SABS 仿單 4 and 5.1; TW Tolizole 仿單 10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; Johnson S et al. Clin Infect Dis 2021;73:e1029-44, PMID 34164674 (verified): https://pubmed.ncbi.nlm.nih.gov/34164674/; McDonald LC et al. Clin Infect Dis 2018;66:e1-48, PMID 29462280 (verified): https://pubmed.ncbi.nlm.nih.gov/29462280/

### A14 · Page body

Stocked forms: <span color="green">`IV`</span> SAB03 SABS 500 mg/100 mL (沙普注射液, 衛署藥製字第026817號, ATC J01XD01)；<span color="blue">`PO`</span> TOL01 Tolizole 250 mg cap (德利治癒膠囊, 衛署藥製字第041025號, ATC P01AB01).<br>Sources: TW 仿單 (links above); US DailyMed injection label setid e4ea0c09-cdd1-4708-962c-6ba28b989df3 v3; US FLAGYL setid a2883ca1-5a9a-4259-9d80-46ab67274384 v25; UK SmPC eMC 1842 (rev 02/04/2026); LactMed NBK501315 (rev 2026-03-15).

**Why:** The entry covers two dosage forms. The title names only SABS, so the body should list both stocked products and the sources. This is optional and depends on the owner's body style.

**Sources:** https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### B1 · Adult dose

<span color="green">`IV`</span> SABS 500 mg/100 mL（沙普）<br>• Anaerobic infection: LD 15 mg/kg (≈1 g/70 kg) over 1 h → 7.5 mg/kg (≈500 mg; TW 仿單 max 1 g/dose) over 1 h q6h, 1st maintenance 6 h after LD; max 4 g/day; usually 7–10 d (bone/joint, LRTI, endocarditis may need longer). UK SmPC: 500 mg q8h or 1–1.5 g q24h, each infused over 20–60 min.<br>• Surgical prophylaxis (colorectal): 15 mg/kg over 30–60 min, completed ~1 h before incision → 7.5 mg/kg at 6 h & 12 h; limit to day of surgery. (UK: 1–1.5 g single dose 30–60 min pre-op, or 500 mg then 500 mg q8h; usually ≤24 h, never >48 h)<br><span color="blue">`PO`</span> Tolizole 250 mg cap（德利治癒）<br>• Anaerobic (step-down): 7.5 mg/kg q6h (≈500 mg), max 4 g/day, 7–10 d.<br>• Amoebiasis: 750 mg TID × 5–10 d (amoebic dysentery); 500–750 mg TID × 5–10 d (liver abscess) (US tablet label); TW 仿單 500–700 mg TID × 5–7 d.<br>• Trichomoniasis: 2 g single dose, or 250 mg TID × 7 d (TW 仿單 / US tablet label).<br>• Bacterial vaginosis: 400 mg BID × 5–7 d or 2 g single dose (UK oral SmPC).<br>• Giardiasis: 2 g qd × 3 d, or 400 mg TID × 5 d, or 500 mg BID × 7–10 d (UK SmPC).

**Why:** New blank entry. All numbers were re-checked against the label text. For the IV product, US label Table 1, the prophylaxis section and the TW SABS 仿單 §3.1 (max 1 g per dose, max 4 g/day) all agree. For the capsule, the TW Tolizole 仿單 §3.1 and the US metronidazole tablet label give the oral regimens. The TOL01 capsule has no US label for its strength, so I used the US IR tablet label instead. UK oral SmPC 4.2 supplies BV and giardiasis. Adult BV is not in the TW insert or the US IR labels, so the UK oral SmPC is the source. The TW insert's '500-700 mg' is probably a typo for 750, so the US value is given alongside it.

**Sources:** US FDA label, Metronidazole Injection (WG Critical Care) v3, DOSAGE AND ADMINISTRATION Table 1 + Recommended Prophylaxis Dosage — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FDA label, Metronidazole Tablets (Teva) v19, DOSAGE AND ADMINISTRATION (Trichomoniasis, Amebiasis, Anaerobic) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=291a45f6-ed27-4dcc-8364-358d08623797; UK SmPC Metronidazole 500 mg/100 ml IV Infusion (Baxter, rev 02/04/2026) 4.2 — https://www.medicines.org.uk/emc/product/1842/smpc; UK SmPC Metronidazole 400 mg Tablets (Milpharm, rev 17/04/2025) 4.2 (BV, giardiasis, amoebiasis) — https://www.medicines.org.uk/emc/product/12817/smpc; TW 仿單 SABS 衛署藥製字第026817號 §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; TW 仿單 Tolizole 衛署藥製字第041025號 §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### B2 · Renal dose, HD, CRRT

不需調整 — renal impairment does not alter metronidazole single-dose PK (US label, TW 仿單); UK: no routine adjustment.<br>• ESRD: hydroxy- & acetic-acid metabolites accumulate (Cmax 2× and 5×) → monitor for AEs/neurotoxicity (US oral label; UK 4.4). UK: dose reduction may be needed if excessive metabolite concentrations are found.<br>• HD: 4–8 h session removes 40–65% (t½ on HD ≈2.5 h, UK) → give dose after HD; if dosing cannot be separated from HD, consider a supplemental dose after HD (US). Do not specifically reduce the dose in anuric pts — metabolites are removed by HD (US IV label; TW 仿單: 無尿症患者一般不需要減少劑量).<br>• PD / CAPD: ≈10% removed → no adjustment (US oral; UK; TW: 腹膜透析之移除不明顯).<br>• CRRT: no label data. Freely filtered on CVVH (SC >0.7; Bouman 2006, PMID 17043848) but cleared mainly by the liver → usual dose; monitor CNS/neuropathy [flag: inference, not a label statement — confirm against Heintz 2009 / Hoff 2020 full text before adding a number].

**Why:** This follows the hierarchy. There is no Taiwan renal section (TW SABS 仿單 6.7 is '目前尚無資訊'), but its §5.1 says 無尿症患者一般不需要減少劑量 because HD removes the metabolites. The US IV label says the dose 'should not be specifically reduced in anuric patients'. The US oral labels give the ESRD metabolite data and the HD/CAPD figures. UK SmPC 4.2/4.4 says to re-administer after HD and that IPD/CAPD needs no adjustment. For CRRT, no label covers it. Trotman 2005 (PMID 16163635) does NOT include metronidazole (its abstract lists the drugs covered), so it must not be cited. Heintz 2009 (PMID 19397464) and Hoff 2020 (PMID 31342772) are verified PMIDs, but I could not read their full text to confirm a metronidazole CRRT dose. The pharmacist should confirm one of them before any CRRT dose number is added. Until then, keep the CRRT line as 'no label data, usual dose' and flag it.

**Sources:** US FDA label Metronidazole Injection v3, DOSAGE AND ADMINISTRATION ('should not be specifically reduced in anuric patients') + CLINICAL PHARMACOLOGY — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FDA label Flagyl capsules v25 CLINICAL PHARMACOLOGY Renal Impairment / Effect of Dialysis — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2883ca1-5a9a-4259-9d80-46ab67274384; US FDA label Metronidazole Tablets (Teva) DOSAGE AND ADMINISTRATION 'Patients Undergoing Hemodialysis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=291a45f6-ed27-4dcc-8364-358d08623797; UK SmPC IV 4.2 'Patients with renal failure', 4.4 Renal Disease, 5.2 — https://www.medicines.org.uk/emc/product/1842/smpc; TW 仿單 SABS §5.1 & §10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464 (verified via esummary; full text not accessed) — https://pubmed.ncbi.nlm.nih.gov/19397464/

### B3 · Hepatic dose

Child-Pugh A/B: no adjustment; monitor AEs (AUC ↑~54%).<br>Child-Pugh C: <span color="blue">`PO`</span> reduce dose by 50% (US oral label; AUC ↑114%). <span color="green">`IV`</span> US IV label: give doses below usual, cautiously, with close monitoring of plasma levels & toxicity. UK: advanced hepatic insufficiency → dose reduction with serum level monitoring; caution in hepatic encephalopathy (CNS AEs ↑). 嚴重肝病慎用、需減量。

**Why:** The brief says the official labels only say 'doses below usual'. That is incomplete: the current US metronidazole tablet label explicitly says to reduce the dose by 50% in Child-Pugh C. The Flagyl capsule label gives the same AUC data, with amebiasis reduced 50% and trichomoniasis changed to q24h. The IV label is non-specific. The UK SmPC requires serum-level monitoring.

**Sources:** US FDA label Metronidazole Tablets (Teva) v19, CLINICAL PHARMACOLOGY Hepatic Impairment + DOSAGE 'Patients with Severe Hepatic Impairment' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=291a45f6-ed27-4dcc-8364-358d08623797; US FDA label Metronidazole Injection v3, PRECAUTIONS General + DOSAGE — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.2 'advanced hepatic insufficiency', 4.4 Liver disease — https://www.medicines.org.uk/emc/product/1842/smpc

### B4 · Pediatric dose

<span color="green">`IV`</span> US label: approved only <4 months for IAI — LD 15 mg/kg, then 7.5 mg/kg; interval by PMA: 23–<34 wk q12h, 34–40 wk q8h, >40–48 wk q6h (1st maintenance 24 h after LD). ≥4 months: not established (US); TW SABS 仿單: 兒童劑量尚未確立.<br>UK SmPC (IV/PO): >8 wk–12 y 20–30 mg/kg/day once daily or 7.5 mg/kg q8h (up to 40 mg/kg/day); <8 wk 15 mg/kg/day (once daily or 7.5 mg/kg q12h); newborn GA <40 wk: monitor levels. Prophylaxis <12 y: 20–30 mg/kg single dose 1–2 h pre-op; newborn GA <40 wk: 10 mg/kg single dose pre-op.<br><span color="blue">`PO`</span> Amoebiasis 35–50 mg/kg/day ÷ TID × 10 d (US; TW 11.6–16.7 mg/kg TID × 10 d), max 2.4 g/day (UK). Trichomoniasis: TW 5 mg/kg TID × 7 d; UK <10 y 40 mg/kg single (max 2 g). Giardiasis: 15–40 mg/kg/day ÷ 2–3 (UK). Anaerobic: 7.5 mg/kg q6h or 10 mg/kg q8h (TW 仿單).

**Why:** Covers both stocked forms. US pediatric IV dosing (Table 2) applies only to infants under 4 months with IAI. The UK SmPC gives broader pediatric regimens. The TW insert says pediatric IV dosing is not established. The oral regimens come from the TW Tolizole insert §3.1.2, the US tablet label (amebiasis) and UK oral 4.2.

**Sources:** US FDA label Metronidazole Injection v3, DOSAGE Table 2 + Pediatric Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.2 — https://www.medicines.org.uk/emc/product/1842/smpc; UK SmPC 400 mg tablets 4.2 — https://www.medicines.org.uk/emc/product/12817/smpc; US FDA label Metronidazole Tablets (Teva) DOSAGE Amebiasis pediatric — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=291a45f6-ed27-4dcc-8364-358d08623797; TW 仿單 Tolizole §3.1.2 & SABS §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### B5 · Indications

IAI, cIAI, Peritonitis, Pelvic, SSTI, Bacteremia, Pneumonia, Brain abscess, Meningitis, Endocarditis, Osteoarthritis, Surgical prophylaxis

**Why:** All tags are existing schema options and all are label-approved. US IV label: IAI incl. peritonitis/abscess; skin and skin structure; gynecologic; bacterial septicemia; bone and joint (adjunctive; the DB uses 'Osteoarthritis' for bone/joint); CNS incl. meningitis and brain abscess; LRTI incl. pneumonia/empyema/lung abscess; endocarditis; colorectal prophylaxis. UK IV 4.1 adds severe IAI/gyn infections and prophylaxis. Protozoal and BV indications have no option, so they go in Notes. I left out the CDI tag because CDI is guideline-based only, not on the US or UK label. The owner can add it if guideline indications are tagged elsewhere.

**Sources:** US FDA label Metronidazole Injection v3, INDICATIONS AND USAGE (Treatment of Anaerobic Infections; Prophylaxis) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.1 — https://www.medicines.org.uk/emc/product/1842/smpc; TW 仿單 SABS §2 / Tolizole §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F

### B6 · Coverage

Anaerobes, Bacteroides

**Why:** The US label lists the B. fragilis group, Fusobacterium, Clostridium, Eubacterium, Peptococcus and Peptostreptococcus, with no activity against facultative anaerobes or aerobes. UK 5.1 lists B. fragilis, Clostridium incl. C. difficile/perfringens, Prevotella, Porphyromonas, Veillonella and H. pylori as susceptible, and Actinomyces, Mobiluncus and P. acnes as resistant. There are no options for Trichomonas, Entamoeba, Giardia, H. pylori, C. difficile or Gardnerella, so these go in Notes. I did not tag Finegoldia because no label names it.

**Sources:** US FDA label Metronidazole Injection v3, Antimicrobial Activity + Drug Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 5.1 — https://www.medicines.org.uk/emc/product/1842/smpc

### B7 · Side Effects

GI, CNS, neuropathy, neurotoxicity, neutropenia, leukopenia, thrombocytopenia, thrombophlebitis, QTc prolong, LFT↑, SJS/TEN, DRESS

**Why:** US label ADVERSE REACTIONS: GI effects with metallic taste; encephalopathy, seizures, aseptic meningitis; peripheral and optic neuropathy; reversible neutropenia/leukopenia; thrombophlebitis after IV infusion; QT prolongation; hepatic enzymes increased; TEN/SJS/DRESS/AGEP. UK 4.8 also lists leukopenia (uncommon) and dysgeusia (common). All tags are existing options. I left out thrombocytopenia as a tag because it is rare, but it can be mentioned in Notes.

**Sources:** US FDA label Metronidazole Injection v3, ADVERSE REACTIONS / WARNINGS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.8 — https://www.medicines.org.uk/emc/product/1842/smpc

### B8 · Monitor

CBC, neuro, CNS, LFT, PT/INR

**Why:** US label Laboratory Tests: total and differential WBC before and after therapy. UK 4.4: regular blood counts in high-dose, prolonged or repeated courses. Neurological signs: stop the drug if abnormal neuro symptoms appear. LFT: severe hepatic disease requires plasma-level monitoring, and in Cockayne patients LFTs are required before, during and after therapy (UK 4.4). PT/INR is needed only with warfarin, so it goes in Drug Interactions rather than as a tag.

**Sources:** US FDA label Metronidazole Injection v3, PRECAUTIONS Laboratory Tests; WARNINGS CNS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.4 Monitoring / Cockayne — https://www.medicines.org.uk/emc/product/1842/smpc

### B9 · Mechanism

Nitroimidazole prodrug: 被動擴散進入厭氧菌/原蟲 → nitro group 經 ferredoxin 等電子傳遞蛋白還原 → nitroso free radical → DNA strand breakage / 抑制 DNA synthesis → bactericidal. 只在厭氧環境活化，對需氧菌/兼性厭氧菌無臨床活性。

**Why:** Paraphrased from the US label Mechanism of Action and Drug Resistance sections and TW 仿單 §10.1.

**Sources:** US FDA label Metronidazole Injection v3, Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; TW 仿單 SABS §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F

### B10 · Drug Interactions

• Alcohol / propylene glycol-containing products: disulfiram-like reaction — avoid during and ≥3 days after (US: contraindication; UK: 72 h). 治療期間及停藥後 3 天禁酒。<br>• Disulfiram within 2 wk: psychotic reaction — contraindicated.<br>• Warfarin/coumarins: INR↑ → monitor PT/INR.<br>• Busulfan: ↑busulfan (SOS/VOD) — avoid unless no alternative; TDM.<br>• Lithium: ↑Li → monitor Li & SCr.<br>• CYP3A4 substrates (tacrolimus, cyclosporine, amiodarone, carbamazepine, quinidine) ↑ (UK); 5-FU toxicity ↑; vecuronium potentiated.<br>• Phenytoin/phenobarbital: ↓MTZ (and ↓phenytoin clearance); cimetidine: ↑MTZ.<br>• QT-prolonging drugs: QT prolongation reported.<br>• Lab: falsely low/zero AST, ALT, LDH, TG, hexokinase glucose.

**Why:** Compiled from the US IV and oral labels (CONTRAINDICATIONS, PRECAUTIONS Drug Interactions; busulfan and lithium are in the oral label), UK 4.5 and TW 仿單 §7. Note that the brief's 'UK says 48 hours' is wrong: UK 4.4/4.5 says 72 hours.

**Sources:** US FDA label Metronidazole Injection v3, CONTRAINDICATIONS + Drug Interactions + Drug/Laboratory Test Interactions — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; US FDA label Metronidazole Tablets (Teva) PRECAUTIONS Drug Interactions (Lithium, Busulfan) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=291a45f6-ed27-4dcc-8364-358d08623797; UK SmPC IV 4.4 Alcohol, 4.5 — https://www.medicines.org.uk/emc/product/1842/smpc; TW 仿單 SABS §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F

### B11 · Pregnancy

Crosses placenta. US label: >5,000 exposed pregnancies (many 1st trimester) — no consistent ↑ congenital anomalies; one study cleft lip ± palate, not confirmed. Use only if clearly needed (IV label). Trichomoniasis: contraindicated in 1st trimester (US oral). TW 仿單 (SABS & Tolizole): 懷孕三個月內禁用. UK: avoid unless clearly necessary.

**Why:** No letter category is used. Both TW inserts print 'FDA Pregnancy Category B', which must NOT be copied because the FDA retired letter categories. TW contraindicates the first trimester for every indication, which is stricter than the US (trichomoniasis only), so the TW position should be stated.

**Sources:** US FDA label Metronidazole Tablets (Teva) PRECAUTIONS Pregnancy; CONTRAINDICATIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=291a45f6-ed27-4dcc-8364-358d08623797; US FDA label Metronidazole Injection v3, Teratogenic Effects — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.6 — https://www.medicines.org.uk/emc/product/1842/smpc; TW 仿單 Tolizole §4.4, §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### B12 · Breastfeeding

LactMed: milk levels ≈ maternal plasma; infant dose < infant therapeutic dose but measurable (+ active metabolite). Reported infant diarrhoea and Candida colonisation. Single 2 g dose: some sources advise withholding breastfeeding 12–24 h; no interruption advised after lower doses; opinions vary for longer courses. Alternatives for anaerobes: amoxicillin-clavulanate, clindamycin, doxycycline. (US/UK/TW labels: decide to stop nursing or the drug.)

**Why:** Summarised from LactMed. The labels are more restrictive, and that is noted at the end.

**Sources:** LactMed Metronidazole NBK501315 (rev 2026-03-15), Summary of Use during Lactation; Effects in Breastfed Infants; Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK501315/; UK SmPC IV 4.6 — https://www.medicines.org.uk/emc/product/1842/smpc

### B13 · Notes

• 院內品項: SABS inj 500 mg/100 mL（沙普，衛署藥製字第026817號）<span color="green">`IV`</span>; Tolizole cap 250 mg（德利治癒，衛署藥製字第041025號）<span color="blue">`PO`</span>. 口服 BA ≥80% → 盡早 IV→PO.<br>• IV: ready-to-use, 不需稀釋; infuse over ~1 h (US) / 20–60 min (UK); 勿用鋁製針具; do not admix; Na 13.5 mEq/100 mL.<br>• Also active vs Trichomonas, Entamoeba histolytica, Giardia, H. pylori, C. difficile, Gardnerella (no tag options). No activity vs aerobes/facultative anaerobes → mixed infection 需併用. Resistant: Actinomyces, Cutibacterium acnes, Mobiluncus.<br>• CDI (IDSA/SHEA 2017, off-label): nonsevere only if vancomycin/fidaxomicin unavailable — 500 mg PO TID × 10 d; fulminant: 500 mg IV q8h + PO/PR vancomycin. Avoid repeated/prolonged courses (cumulative neurotoxicity).<br>• CI: Cockayne syndrome (fatal acute liver failure), disulfiram ≤2 wk, nitroimidazole hypersensitivity; TW 仿單 also: 血液疾病、腦/脊髓疾病、懷孕三個月內.<br>• Neurotoxicity: encephalopathy (cerebellar, MRI lesions), seizures, peripheral/optic neuropathy, aseptic meningitis → 停藥. UK: courses usually ≤10 d.<br>• 尿液可能變深色 (harmless); metallic taste.

**Why:** Carries the content that has no multi-select option (protozoa, CDI), the Taiwan-specific contraindications, product identity and IV administration. Storage is deliberately left out. The CDI regimen is from the IDSA/SHEA guideline. PMID 29462280 was verified with esummary, and the dosing sentence was read from the idsociety.org page.

**Sources:** IDSA/SHEA 2017 CDI guideline (McDonald LC, Clin Infect Dis 2018;66:e1-e48, PMID 29462280, verified) — https://www.idsociety.org/practice-guideline/clostridium-difficile/; US FDA label Metronidazole Injection v3, CONTRAINDICATIONS; Preparation and Administration — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e4ea0c09-cdd1-4708-962c-6ba28b989df3; UK SmPC IV 4.2, 4.4, 5.1 — https://www.medicines.org.uk/emc/product/1842/smpc; TW 仿單 SABS §4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC026817%E8%99%9F; TW 仿單 Tolizole §4, §10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041025%E8%99%9F

### B14 · Page body

No change required. If sibling entries use a body, add a short source list (US IV/oral labels, UK SmPC, TW 仿單 licence links, LactMed).

**Why:** The page body is empty. I could not compare it with sibling-entry style because Notion Query Data Source hit its usage limit.

**Sources:** Notion page fetch 2026-10-05 — https://app.notion.com/3f0c496dfff181feac6bcf0ef94fdc25

### B15 · Renal dose, HD, CRRT

Do NOT cite Trotman RL, CID 2005 (PMID 16163635) for metronidazole CRRT dosing.

**Why:** The PMID is real, but the abstract's list of reviewed drugs does not include metronidazole. Any CRRT dose must come from a source that actually covers metronidazole, such as Heintz 2009 PMID 19397464 or Hoff 2020 PMID 31342772, after the full text has been checked.

**Sources:** PubMed abstract PMID 16163635 (esummary/efetch verified) — https://pubmed.ncbi.nlm.nih.gov/16163635/

## Apply log

- Adult dose: merged both proposals (IV SABS anaerobic + surgical prophylaxis US/TW/UK; PO Tolizole anaerobic step-down, amoebiasis, trichomoniasis, BV, giardiasis; IV->PO switch)
- Renal dose, HD, CRRT: merged (no adjustment, anuric, ESRD metabolites, HD post-dose/supplement + UK re-dose, PD/CAPD, CRRT flagged as inference citing Bouman 2006; Trotman 2005 not cited)
- Hepatic dose: merged (Child-Pugh A/B, C PO 50%/Flagyl 375 examples, IV US label, UK, hepatic encephalopathy, TW insert, Cockayne CI)
- Pediatric dose: merged (US IV <4 mo IAI PMA table, UK IV/PO and prophylaxis, PO amoebiasis/trich/giardia/anaerobic, neonatal t1/2 note)
- Indications multi-select: IAI, cIAI, Peritonitis, SSTI, Pelvic, Bacteremia, Osteoarthritis, Meningitis, Brain abscess, Pneumonia, Endocarditis, Surgical prophylaxis
- Coverage multi-select: Bacteroides, Anaerobes
- Side Effects multi-select: GI, CNS, neuropathy, neurotoxicity, neutropenia, leukopenia, thrombocytopenia, LFT↑, QTc prolong, SJS/TEN, DRESS, thrombophlebitis
- Monitor multi-select: CBC, neuro, CNS, LFT, PT/INR
- Mechanism: merged English + Chinese
- Drug Interactions: merged bullet list (alcohol/PG, disulfiram, warfarin, busulfan, lithium, CYP3A4, 5-FU, vecuronium, phenytoin/phenobarbital, cimetidine, QT, cholestyramine, lab interference)
- Pregnancy: merged (no letter categories)
- Breastfeeding: merged LactMed/US/UK/TW
- Notes: merged (stocked items, IV admin, Na content, spectrum/no-tag organisms, penetration, CDI guideline with PMIDs, CIs, neurotoxicity, urine color)
- Page body: added Stocked forms line and References section (TW inserts x2, US injection v3, Flagyl v25, Teva tablets v19, UK SmPC 1842 and 12817, LactMed, McDonald 2018, Johnson 2021, Bouman 2006, Heintz 2009)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
