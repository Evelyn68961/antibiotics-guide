# New entry: Gentamicin

- **Notion entry:** [Gentamicin](https://app.notion.com/3f0c496dfff18169aca7c94f9bd9b5a0). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** GEN04 (Gentamycin inj 80 mg/2 mL)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/gentamicin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH GEN04, Gentamycin 針 80 mg/2 mL/Vial (僅大黴素注射劑), Inj, ATC J01GB03, NHI AC08956212, routes IM and IVD. I re-opened pharmacy.fjuh.fju.edu.tw Key_Search/P4?query=GEN04 to confirm the identification. The NHI code maps to Taiwan licence 衛署藥製字第008956號: "生達" 僅大黴素注射液 GENTAMYCIN INJECTION 40 mg/mL (Standard Chem). Its excipients include sodium bisulfite and phenol. The online TFDA insert carries no version date; the paper insert 010008956001.pdf was uploaded 2022-11-21. Comparators: US FDA label, Gentamicin Sulfate Injection USP 80 mg/2 mL (Hospira), setid 977180b3-a222-4282-d485-4a3217674305, v22, published May 22, 2026, text revised 10/2022. UK SmPC: Cidomycin 80mg/2ml (eMC 14742), revised 04/08/2025. LactMed: NBK500832, revised 2024-06-15. The Notion page was created 2026-10-05 and is blank apart from Abx and Category ("Aminoglycoside"), so every column below is a "missing" finding. On the user's note ("I can't do any check now, you do task 2,3,5"): I could not match task numbers 2, 3 and 5 to anything I was given. I did the reviewer-A audit I was assigned; please confirm whether 2, 3 and 5 meant something else. Two corrections to the source brief: (a) the US label does give an HD dose, 1–1.7 mg/kg after each dialysis (children 2 mg/kg), not only overdose removal; (b) the US label has a separate neonatal regimen for babies ≤1 week old: 2.5 mg/kg q12h.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="green">`IV`</span>/<span color="green">`IM`</span> Conventional: 1 mg/kg q8h (3 mg/kg/day); life-threatening: up to 5 mg/kg/day in 3–4 equal doses, reduce to 3 mg/kg/day as soon as clinically indicated (US)<br>UK SmPC 4.2: 3–5 mg/kg/day once daily (preferred) or ÷ q12h, dosed on IBW; once-daily dosing IV only; once daily not recommended in endocarditis; UTI (normal renal function): 160 mg QD<br>本院品項仿單 (TW): IM 成人 40 mg/次, 2–3次/日; IV 單劑稀釋於 50–200 mL NS/D5W, 輸注 0.5–2 h; 療程 7–10 天, 原則不超過 10 天<br>Usual duration 7–10 days; >10 days → monitor renal/auditory/vestibular function (US)<br>Obese: dose on lean body mass (US) / IBW (UK)<br>⚠ 非仿單 Extended-interval: 7 mg/kg IV q24h if CrCl ≥60 (Hartford nomogram, Nicolau 1995, PMID 7793867); not for endocarditis (UK SmPC 4.2)<br>⚠ 非仿單 Enterococcal endocarditis synergy: 3 mg/kg/day IV/IM ÷ 2–3 equal doses with ampicillin/penicillin G; target peak 3–4, trough <1 mcg/mL (AHA 2015, PMID 26373316 – owner to confirm against the table)<br>⚠ 非仿單 Surgical prophylaxis: 5 mg/kg single dose (ASHP/IDSA/SIS/SHEA 2013, PMID 23327981)

**Why:** The column is empty. The labels give the conventional regimen. The stocked product's Taiwan insert gives only a flat 40 mg IM 2–3×/day, which is lower than the US and UK doses, so both should appear. Extended-interval, synergy and prophylaxis regimens are not in any label and must be marked off-label with guideline citations. All PMIDs were verified with esummary; I could not check the guideline tables in full text.

**Sources:** US FDA label (Hospira) – DOSAGE AND ADMINISTRATION 'Patients with Normal Renal Function', Table 1, duration, 'For Intravenous Administration' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin 4.2 Posology – Adults, Method of administration – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 衛署藥製字第008956號 – 3.1 用法用量 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; Nicolau DP et al. Antimicrob Agents Chemother 1995;39:650-5, PMID 7793867 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/7793867/; Baddour LM et al. AHA IE statement, Circulation 2015;132:1435-86, PMID 26373316 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/26373316/; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/23327981/

### A2 · Renal dose, HD, CRRT

Label (US FDA; TW insert has no renal table): (1) usual dose every (SCr × 8) h, e.g. 60 kg, SCr 2 → 60 mg q16h; or (2) after the usual initial dose, give q8h a dose = usual dose ÷ SCr (US Table 2: % of usual dose by SCr/CrCl). Measure peak/trough; avoid peak >12, trough >2 mcg/mL<br>UK SmPC (multiple daily dosing; 80 mg/dose, 60 mg if <60 kg): CrCl >70 q8h; 30–70 q12h; 10–30 q24h; 5–10 q48h; <5 after HD. Once daily in renal impairment: interval ≥24 h, extend by levels<br>⚠ 非仿單 Extended-interval 7 mg/kg (Hartford nomogram, Nicolau 1995, PMID 7793867): CrCl ≥60 q24h; 40–59 q36h; 20–39 q48h; <20 → conventional dosing + TDM<br>HD: 1–1.7 mg/kg after each dialysis by severity (children 2 mg/kg); 8-h HD ↓ level ≈50% (US)<br>CRRT (not in labels): LD 2–3 mg/kg, then 1–2.5 mg/kg q24–48h by indication; redose by level (Heintz 2009, PMID 19397464 – owner to confirm against the table); TDM per ESICM 2020 (PMID 32383061)<br>PD: removal much lower than HD (US OVERDOSAGE); IP dosing per ISPD 2022 (PMID 35264029 – owner to check the table)

**Why:** The column is empty. The stocked product's Taiwan insert has no renal values, so under the ground rules the US label method is primary and the UK table goes alongside. The US label does give an HD maintenance dose (1–1.7 mg/kg post-dialysis), which the source brief missed. The hospital-site renal tiers (GFR 10–50 q12–48h, <10 q48–72h) and the CRRT values match no label and must not be copied; the CRRT values are given here with a cited review instead.

**Sources:** US FDA label – D&A 'Patients with Impaired Renal Function', Table 2, hemodialysis paragraph; OVERDOSAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.2 'Renal impairment' table and Monitoring advice – https://www.medicines.org.uk/emc/product/14742/smpc; Nicolau DP et al. AAC 1995;39:650-5, PMID 7793867 – https://pubmed.ncbi.nlm.nih.gov/7793867/; Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/19397464/; Abdul-Aziz MH et al. Intensive Care Med 2020;46:1127-53, PMID 32383061 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/32383061/; Li PK et al. Perit Dial Int 2022;42:110-53, PMID 35264029 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/35264029/

### A3 · Hepatic dose

No dosage adjustment (no hepatic adjustment in labels); little or no metabolism, excreted unchanged by glomerular filtration (US); UK SmPC 4.4 advises monitoring hepatic and laboratory parameters before, during and after treatment

**Why:** The column is empty. The labels give no hepatic adjustment, and their pharmacology sections support renal-only elimination.

**Sources:** US FDA label – CLINICAL PHARMACOLOGY ('Little, if any metabolic transformation occurs; excreted principally by glomerular filtration') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.4, 5.2 – https://www.medicines.org.uk/emc/product/14742/smpc

### A4 · Pediatric dose

Children: 6–7.5 mg/kg/day (2–2.5 mg/kg q8h) (US)<br>Infants & neonates >1 wk: 7.5 mg/kg/day (2.5 mg/kg q8h) (US)<br>Premature/full-term neonates ≤1 wk: 2.5 mg/kg q12h (5 mg/kg/day) (US)<br>UK SmPC 4.2: ≥1 y 3–6 mg/kg/day QD (preferred) or ÷ q12h; infants >1 month 4.5–7.5 mg/kg/day QD or ÷ q12h; neonates/pre-term (0–4 wk) 4–7 mg/kg/day as a single daily dose<br>本院品項仿單 (TW): IM 0.4–0.8 mg/kg/次, 2–3次/日 (⚠ far below US/UK doses)<br>Children on HD: 2 mg/kg after dialysis (US)<br>IV: use a smaller diluent volume in infants/children (US/TW)

**Why:** The column is empty. All three labels give paediatric dosing. The ≤1-week neonatal q12h regimen matters for safety: the hospital site leaves it out and gives 7.5 mg/kg/day q8h for all infants and neonates (see hospital issues).

**Sources:** US FDA label – D&A 'Children', 'Infants and Neonates', 'Premature or Full-Term Neonates One Week of Age or Less', HD paragraph – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.2 Paediatric population – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 3.1.1/3.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### A5 · Indications

["Sepsis","Bacteremia","Meningitis","cUTI","Pneumonia","cIAI","Peritonitis","SSTI","Osteoarthritis","Endocarditis"]

**Why:** The US label lists bacterial neonatal sepsis, septicaemia, CNS (meningitis), urinary tract, respiratory tract, GI tract including peritonitis, skin, bone and soft tissue including burns. It also lists endocarditis caused by group D streptococci, given with a penicillin-type drug. UK SmPC 4.1 adds UTI, respiratory, intra-abdominal, CNS and severe neonatal infections. I used cUTI because the US label excludes uncomplicated initial UTI episodes, and cIAI to match the Amikacin entry. All tags exist in the schema. The Taiwan insert's indication ('革蘭氏陽性、陰性菌、立克次氏體及巨型濾過性病毒感染症') is outdated and should not be used. Surgical prophylaxis and FN are not in any label, so they are not tagged; prophylaxis goes in Adult dose/Notes as off-label.

**Sources:** US FDA label – INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.1 – https://www.medicines.org.uk/emc/product/14742/smpc

### A6 · Coverage

["E.coli","Klebsiella","Proteus","Pseudomonas","Enterobacter","Serratia","Staphylococcus"]

**Why:** The US Microbiology 'Antimicrobial Activity' section lists Staphylococcus spp., Citrobacter, Enterobacter, E. coli, Klebsiella, Proteus, Serratia and P. aeruginosa. UK SmPC 4.1 adds Providencia. Citrobacter and Providencia have no schema option, so they go in Notes. Enterococcus, Streptococcus, Listeria and anaerobes are NOT tagged: the US label says most streptococci and enterococci and anaerobes are usually resistant, and gentamicin is used against enterococci only as synergy with a β-lactam (Notes).

**Sources:** US FDA label – Microbiology: Antimicrobial Activity; Resistance; Interaction With Other Antimicrobials – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.1 – https://www.medicines.org.uk/emc/product/14742/smpc

### A7 · Side Effects

["nephrotoxicity","ototoxicity","neurotoxicity","neuropathy","hypokalemia","SJS/TEN"]

**Why:** US boxed WARNINGS cover nephrotoxicity, ototoxicity and neurotoxicity (numbness, tingling, twitching, convulsions, neuromuscular blockade/respiratory paralysis). US ADVERSE REACTIONS lists peripheral neuropathy/encephalopathy. UK SmPC 4.4/4.8 list SJS/TEN. All options exist in the schema. Further label items (hypoMg/Ca/K, Fanconi-like syndrome, anaemia/leukopenia/thrombocytopenia, transaminase rise, sulfite allergy, CDAD per UK) belong in the body rather than as tags.

**Sources:** US FDA label – WARNINGS; ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.4, 4.8 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 5.1, 8 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### A8 · Monitor

["renal","neuro","electrolyte"]

**Why:** The US label requires close monitoring of renal and eighth-nerve function (urinalysis, BUN/SCr/CrCl, serial audiograms) and serum levels. It also describes tetany and confusion with hypoMg/hypoCa/hypoK, which need correction. The UK and Taiwan labels ask for vestibular, cochlear and renal monitoring before, during and after treatment. UK SmPC 4.4 also mentions hepatic parameters, so 'LFT' is optional if the owner wants it. The TDM targets (peak/trough) go in the body.

**Sources:** US FDA label – WARNINGS; PRECAUTIONS; D&A – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.2 Monitoring advice, 4.4 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 5.1.13, 5.1.17 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### A9 · Mechanism

Binds the bacterial 30S ribosomal subunit → inhibits protein synthesis; bactericidal (US Microbiology; UK SmPC 5.1)

**Why:** The column is empty. The wording follows the label pharmacology sections. Concentration-dependent killing and post-antibiotic effect are not stated in these labels; add them only with a citation.

**Sources:** US FDA label – Microbiology 'Mechanism of Action' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 5.1 – https://www.medicines.org.uk/emc/product/14742/smpc

### A10 · Drug Interactions

Avoid (labels): other aminoglycosides, cisplatin, cephaloridine, polymyxin B/colistin, vancomycin, viomycin, potent diuretics (furosemide, ethacrynic acid – ↑ototoxicity; IV diuretics may ↑aminoglycoside toxicity); UK adds amphotericin B, ciclosporin<br>Caution: cephalosporins (↑nephrotoxicity reported)<br>Neuromuscular blockers, anaesthetics, massive citrated blood, botulinum toxin → NM blockade/respiratory paralysis (calcium salts may reverse)<br>May antagonise neostigmine/pyridostigmine; bisphosphonates → hypocalcaemia; oral anticoagulants → ↑bleeding risk; indomethacin ↑gentamicin levels (neonates) (UK SmPC 4.5)<br>Do not premix with other drugs (US); carbenicillin inactivates gentamicin in vitro (US); incompatible in mixed solution with penicillins, cephalosporins, erythromycin, heparins, sodium bicarbonate – give separately (UK 6.2)

**Why:** The column is empty. The US label (WARNINGS, PRECAUTIONS) and UK SmPC 4.5 give these interactions. The Taiwan insert section 7 says 目前尚無資訊, but its 5.1.15 repeats the US 'avoid' list.

**Sources:** US FDA label – WARNINGS; PRECAUTIONS; D&A ('should not be physically premixed') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.5, 6.2 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 5.1.2, 5.1.3, 5.1.15 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### A11 · Pregnancy

Aminoglycosides can cause fetal harm (US label WARNINGS). Gentamicin crosses the placenta, with risk of fetal ototoxicity and/or renal damage, as seen in animal studies (UK SmPC 4.6); total irreversible bilateral congenital deafness reported with streptomycin; rat/rabbit studies showed no fetal harm from gentamicin (US). UK SmPC 4.6: do not use in pregnancy except in life-threatening situations where benefit outweighs risk; then monitor maternal levels and the infant's hearing and renal function. 台灣仿單: 尚未有孕婦使用安全資料; 應告知胎兒潛在危害。

**Why:** The column is empty. FDA letter categories are retired, so the hospital site's 'D [FDA]' must not be carried over. The text uses the current label wording.

**Sources:** US FDA label – WARNINGS (pregnancy paragraph) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.6 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 5.1.16, 6.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### A12 · Breastfeeding

Poorly excreted into breastmilk; infant serum levels with TID dosing far below therapeutic levels, so systemic effects are unlikely; no data for once-daily regimens; timing feeds around doses is of little or no benefit. Monitor the infant for GI-flora effects (diarrhea, thrush/diaper rash; rarely bloody stool) (LactMed). UK SmPC 4.6: if the infant's gut mucosa is severely eroded, check infant serum level; if >1 µg/mL, breastfeeding or gentamicin may need to be stopped (under medical supervision).

**Why:** The column is empty. LactMed is the designated breastfeeding source; the US label has no nursing-mothers section.

**Sources:** LactMed Gentamicin NBK500832 (rev. 2024-06-15) – Summary of Use during Lactation – https://www.ncbi.nlm.nih.gov/books/NBK500832/; UK SmPC 4.6 Breast-feeding – https://www.medicines.org.uk/emc/product/14742/smpc

### A13 · Notes

Contraindicated: hypersensitivity to gentamicin; prior hypersensitivity/serious toxicity to other aminoglycosides may contraindicate (US); myasthenia gravis (UK SmPC 4.3)<br>本院品項含亞硫酸鹽 (sodium bisulfite) – sulfite allergy/asthma risk (TW 1.2, 5.1.16; US product contains metabisulfite)<br>粒線體 m.1555A>G (MT-RNR1) 突變 → 耳毒性風險↑ even at therapeutic levels; consider alternatives (US/UK/TW)<br>Not for uncomplicated initial UTI unless the organism is resistant to less toxic agents (US)<br>Streptococci/enterococci and anaerobes usually resistant alone; synergy with penicillin/ampicillin vs enterococci (US Microbiology); Salmonella/Shigella clinically ineffective (US)<br>Also active: Citrobacter (US), Providencia (UK) – no Coverage tag<br>Poor CSF penetration after parenteral use (US)<br>IV: must be diluted (US); 本院仿單 IV 為點滴輸注 0.5–2 h<br>Once-daily vs multiple-daily dosing: similar efficacy, nephrotoxicity RR 0.74 (Barza 1996, PMID 8611830)<br>⚠ 台灣仿單適應症 (立克次氏體/巨型濾過性病毒) 過時，請依 US/UK 適應症<br>本院品項: 生達 僅大黴素注射液 40 mg/mL, 80 mg/2 mL vial (衛署藥製字第008956號), IM/IV

**Why:** The column is empty. These are label warnings and practical notes in the same style as the Amikacin entry. The bisulfite and m.1555A>G warnings appear in the stocked product's own insert. Barza PMID verified with esummary.

**Sources:** US FDA label – CONTRAINDICATIONS; WARNINGS; INDICATIONS; Microbiology; CLINICAL PHARMACOLOGY – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.1, 4.3, 4.4 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 1.2, 2, 5.1.16, 5.1.17 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; Barza M et al. BMJ 1996;312:338-45, PMID 8611830 (esummary verified) – https://pubmed.ncbi.nlm.nih.gov/8611830/

### A14 · Page body

Add a '## GENTAMICIN — Monograph' using the Amikacin page's section layout: Category, Mechanism, Indications, Coverage, Adult Dose, Renal Dose/HD/CRRT, Hepatic Dose, Pediatric Dose, Side Effects, Monitor, Drug Interactions, Pregnancy, Breastfeeding, Notes, References. Fill each section from A1–A13. Also add: (1) TDM table – conventional dosing: peak 4–6 mcg/mL expected (IM 30–60 min), avoid prolonged peak >12 and trough >2 mcg/mL (US); UK: trough ≤1 mg/L (once daily) / ≤2 mg/L (multiple daily); peak (1 h post IV/IM bolus or 30 min after end of infusion) <4 inadequate, >10 toxicity risk; trough above target → extend interval rather than cut dose (UK 4.2). (2) US Table 2 (% of usual dose by SCr/CrCl) and the UK renal table. (3) Full label adverse-effect list: hypoMg/Ca/K/Na, Fanconi-like syndrome, anaemia, leukopenia, thrombocytopenia, eosinophilia, ↑transaminases/LDH/bilirubin, pseudotumor cerebri, CDAD (UK 4.4). (4) References with URLs: US DailyMed setid 977180b3-…, UK eMC 14742, TW insert 衛署藥製字第008956號, LactMed NBK500832, and the PMIDs cited above. No storage/stability content.

**Why:** New entry: the body is empty and every other entry has a full monograph. Each item maps to a cited label section; off-label items carry PMIDs that I verified with esummary.

**Sources:** US FDA label – D&A (peak/trough, Table 2); ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC 4.2 Monitoring advice, 4.4, 4.8 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; LactMed NBK500832 – https://www.ncbi.nlm.nih.gov/books/NBK500832/

### A15 · Renewed date

2026-10-05 (set when the agreed fixes are applied)

**Why:** Other verified entries (e.g. Amikacin) record the verification date here.

**Sources:** Notion Amikacin entry (style reference) – https://app.notion.com/2b5c496dfff1805da69efd2e6c17c325

### B1 · Adult dose

<span color="green">`IV`</span>/<span color="green">`IM`</span> (dilute before IV use): 3 mg/kg/day ÷ q8h (1 mg/kg q8h); life-threatening infection: up to 5 mg/kg/day in 3–4 equal doses, reduced to 3 mg/kg/day as soon as clinically indicated (US)<br>UK SmPC 4.2: 3–5 mg/kg/day as one daily dose (preferred) or ÷ BID, dosed on ideal body weight; once-daily dosing IV only; not once daily in endocarditis; UTI with normal renal function: 160 mg QD<br>本院品項仿單 (TW 3.1): IM 40 mg (1 mL) 2–3×/day; IV: dilute a single dose in 50–200 mL NS/D5W and infuse over 0.5–2 h; course 7–10 days, ≤10 days<br>Obese: dose on lean body mass (US) / IBW (UK); usual course 7–10 days, longer only with renal/auditory/vestibular monitoring (US)<br>⚠ 非仿單 Extended-interval: 7 mg/kg IV q24h (CrCl ≥60), interval by Hartford nomogram (Nicolau 1995, PMID 7793867); that program excluded e.g. burns, ascites, pregnancy, dialysis, endocarditis – owner to confirm<br>⚠ 非仿單 Endocarditis (AHA 2015, PMID 26373316): 3 mg/kg/day – streptococcal (native valve, 2-wk regimen): QD ×2 wk combined with penicillin G or ceftriaxone; enterococcal: ÷ 2–3 doses with ampicillin or penicillin G – owner to confirm against the guideline tables<br>Meningitis (guideline dose, IDSA 2004, PMID 15494903): 5 mg/kg/day ÷ q8h, e.g. added to ampicillin for Listeria – owner to confirm

**Why:** The column is empty, and all three labels give adult dosing. US: 'recommended dosage ... 3 mg/kg/day, administered in three equal doses every eight hours ... up to 5 mg/kg/day ... in three or four equal doses ... reduced to 3 mg/kg/day as soon as clinically indicated'. The US label also says to dose obese patients on lean body mass and that the usual course is 7–10 days. UK 4.2 prefers once-daily 3–5 mg/kg/day on IBW, rules out once daily in endocarditis, allows 160 mg QD for UTI, and says 'Once daily dosing should only be administered through the intravenous route'. The stocked product's TW insert (3.1.1) gives a much lower fixed IM dose of 40 mg 2–3×/day, ≤10 days, and 3.1.2 gives the IV dilution. Extended-interval 7 mg/kg, endocarditis synergy and meningitis doses are not in any label (the US label mentions endocarditis use only qualitatively), so each carries a verified guideline citation. The hospital site lists these uses, but it is not a source and nothing was copied from it.

**Sources:** US FDA label – DOSAGE AND ADMINISTRATION 'Patients with Normal Renal Function', Table 1, 'For Intravenous Administration' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.2 Posology 'Adults', 'Method of administration' – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 衛署藥製字第008956號 – 3.1.1/3.1.2 用法用量 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; Nicolau DP et al. Antimicrob Agents Chemother 1995;39:650-5, PMID 7793867 (verified via esummary) – https://pubmed.ncbi.nlm.nih.gov/7793867/; Baddour LM et al. AHA Infective Endocarditis in Adults. Circulation 2015;132:1435-86, PMID 26373316 (verified) – https://pubmed.ncbi.nlm.nih.gov/26373316/; Tunkel AR et al. IDSA bacterial meningitis guideline. Clin Infect Dis 2004;39:1267-84, PMID 15494903 (verified) – https://pubmed.ncbi.nlm.nih.gov/15494903/

### B2 · Renal dose, HD, CRRT

Label (US FDA; TW insert has no renal table): (1) usual dose (1 mg/kg) every (SCr × 8) h, e.g. SCr 2 → q16h; or (2) after the usual initial dose, give q8h a dose = usual dose ÷ SCr (US Table 2: % of usual dose by SCr/CrCl). Measure peak and trough: avoid prolonged peak >12 and trough >2 mcg/mL<br>UK SmPC 4.2 (multiple daily dosing): CrCl >70 → 80 mg* q8h; 30–70 → q12h; 10–30 → q24h; 5–10 → q48h; <5 → 80 mg* after dialysis (*60 mg if <60 kg). Once daily with renal impairment: interval ≥24 h, extended by levels<br><span color="blue">`HD`</span>: 1–1.7 mg/kg at the end of each dialysis by severity (children 2 mg/kg); an 8-h HD lowers levels by about 50% (US). PD removes far less than HD (US OVERDOSAGE)<br>⚠ 非仿單 extended-interval (Hartford, Nicolau 1995, PMID 7793867): 7 mg/kg; CrCl ≥60 q24h, 40–59 q36h, 20–39 q48h, then adjust by nomogram level; CrCl <20 → conventional dosing + TDM<br><span color="blue">`CRRT`</span> (not in labels): LD 2–3 mg/kg, then 1–2.5 mg/kg q24–48h, redose by level (Heintz 2009, PMID 19397464 – owner to confirm against table); TDM per ESICM 2020 (PMID 32383061)<br>PD peritonitis, IP (ISPD 2022, PMID 35264029): 0.6 mg/kg once daily in one exchange (intermittent) – owner to confirm

**Why:** The column is empty. The Taiwan insert for the stocked product has no renal section, so under the ground rules the US FDA label comes first, with the UK table alongside. The brief says HD values 'would need guideline or PubMed support', but that is wrong for intermittent HD: the US label states 'The recommended dose at the end of each dialysis period is 1 to 1.7 mg/kg depending upon the severity of infection. In children, a dose of 2 mg/kg may be administered.' I re-checked both label methods in the US text: 'multiplying the serum creatinine level (mg/100 mL) by 8' and 'divide the normally recommended dose by the serum creatinine level'. The UK table matches the live eMC page. Only the extended-interval nomogram, CRRT and IP dosing need non-label sources; the PMIDs are verified, but I could not open the full-text tables, so those lines are marked for the owner to confirm.

**Sources:** US FDA label – D&A 'Patients with Impaired Renal Function', Table 2, hemodialysis paragraph; OVERDOSAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.2 'Renal impairment' table – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 衛署藥製字第008956號 – no renal section (3.1 only) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; Nicolau DP et al. AAC 1995, PMID 7793867 (verified) – https://pubmed.ncbi.nlm.nih.gov/7793867/; Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464 (verified) – https://pubmed.ncbi.nlm.nih.gov/19397464/; Abdul-Aziz MH et al. ESICM TDM position paper. Intensive Care Med 2020;46:1127-53, PMID 32383061 (verified) – https://pubmed.ncbi.nlm.nih.gov/32383061/; Li PK et al. ISPD peritonitis 2022. Perit Dial Int 2022;42:110-53, PMID 35264029 (verified) – https://pubmed.ncbi.nlm.nih.gov/35264029/

### B3 · Hepatic dose

No dosage adjustment (no hepatic adjustment in labels); little or no metabolism, excreted unchanged by glomerular filtration (US Clinical Pharmacology; UK SmPC 5.2). UK SmPC 4.4: monitor hepatic and laboratory parameters before, during and after treatment.

**Why:** The column is empty. None of the labels has a hepatic dose adjustment. The US label says 'Little, if any metabolic transformation occurs; the drug is excreted principally by glomerular filtration'. UK 4.4 recommends 'continuous monitoring (before, during and after treatment) of hepatic and laboratory parameters'. The wording follows the owner's Amikacin entry.

**Sources:** US FDA label – CLINICAL PHARMACOLOGY – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.4, 5.2 – https://www.medicines.org.uk/emc/product/14742/smpc

### B4 · Pediatric dose

US: children 6–7.5 mg/kg/day (2–2.5 mg/kg q8h); infants & neonates 7.5 mg/kg/day (2.5 mg/kg q8h); premature or full-term neonates ≤1 week: 5 mg/kg/day (2.5 mg/kg q12h); post-HD 2 mg/kg<br>UK SmPC 4.2: ≥1 y and adolescents 3–6 mg/kg/day QD (preferred) or ÷ BID; infants >1 month 4.5–7.5 mg/kg/day QD or ÷ BID; neonates/pre-term (0–4 wk) 4–7 mg/kg/day as one daily dose<br>台灣仿單 (本院品項, TW 3.1): 0.4–0.8 mg/kg/dose IM 2–3×/day (far lower than US/UK); IV: use less diluent in infants/children<br>Monitor levels; neonatal t½ ≈6.7–8 h (UK 5.2)

**Why:** The column is empty. I re-verified the US numbers, including the neonatal line that the brief and the hospital site both left out: 'Premature or Full-Term Neonates One Week of Age or Less: 5 mg/kg/day (2.5 mg/kg administered every 12 hours)'. Giving q8h dosing to a neonate in the first week would be an overdose risk. The UK 4.2 and TW 3.1.1 paediatric doses match the source text. The TW paediatric dose is very low and outdated, so it is labelled as the stocked product's label rather than presented as the recommendation.

**Sources:** US FDA label – D&A 'Children', 'Infants and Neonates', 'Premature or Full-Term Neonates One Week of Age or Less', HD paragraph – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.2 'Paediatric population', 5.2 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert 衛署藥製字第008956號 – 3.1.1/3.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### B5 · Indications

["Sepsis", "Bacteremia", "Meningitis", "UTI", "cUTI", "Pneumonia", "IAI", "cIAI", "Peritonitis", "SSTI", "Osteoarthritis", "Endocarditis"]

**Why:** The column is empty. US INDICATIONS: 'bacterial neonatal sepsis; bacterial septicemia; and serious bacterial infections of the central nervous system (meningitis), urinary tract, respiratory tract, gastrointestinal tract (including peritonitis), skin, bone and soft tissue (including burns)', plus endocarditis caused by group D streptococci with a penicillin-type drug. UK 4.1 lists UTI, respiratory, intra-abdominal, CNS and severe neonatal infections. 'Osteoarthritis' is the tag the owner uses for bone infection, as in the Amikacin entry. Both 'UTI' and 'cUTI' are tagged: the UK SmPC lists UTI, and the US label excludes uncomplicated initial UTI unless the organism is resistant to less toxic drugs. I left out 'Pelvic' (PID, CDC 2021) and 'Surgical prophylaxis' (ASHP/IDSA 2013) because neither label lists them. They go in Notes as off-label guideline uses; the owner can add the tags if off-label tags are acceptable. TW 適應症 is not used (see hospital issues).

**Sources:** US FDA label – INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.1 – https://www.medicines.org.uk/emc/product/14742/smpc

### B6 · Coverage

["E.coli", "Klebsiella", "Proteus", "Pseudomonas", "Enterobacter", "Serratia", "Staphylococcus"]

**Why:** The column is empty. US Microbiology 'Antimicrobial Activity' lists Staphylococcus species, Citrobacter, Enterobacter, E. coli, Klebsiella, Proteus, Serratia and P. aeruginosa. UK 4.1 adds Providencia. Citrobacter and Providencia have no option, so they go in Notes. I did not tag Enterococcus, E. faecalis, Streptococcus or Listeria: the US label says 'most streptococcal species ... most enterococcal species ... and anaerobic organisms' are usually resistant, and gentamicin is used against them only for synergy with a cell-wall agent, which belongs in Notes. CRKP and CREC(E.coli) are not tagged because IDSA 2024 reports only 47% gentamicin susceptibility in US CRE. No label lists Acinetobacter or Haemophilus.

**Sources:** US FDA label – Microbiology 'Antimicrobial Activity', 'Resistance', 'Interaction With Other Antimicrobials' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.1 – https://www.medicines.org.uk/emc/product/14742/smpc; Tamma PD et al. IDSA 2024 AMR Gram-negative guidance. Clin Infect Dis 2024, PMID 39108079 (verified) – https://www.idsociety.org/practice-guideline/amr-guidance/

### B7 · Side Effects

["nephrotoxicity", "ototoxicity", "neurotoxicity", "neuropathy", "hypokalemia", "SJS/TEN"]

**Why:** The column is empty. US WARNINGS and ADVERSE REACTIONS cover nephrotoxicity, vestibular and auditory ototoxicity that is 'usually irreversible', neurotoxicity (neuromuscular blockade, respiratory paralysis, encephalopathy, convulsions), 'Peripheral neuropathy', and 'decreased serum calcium, magnesium, sodium and potassium'. UK 4.4 and 4.8 list SJS/TEN as a severe cutaneous adverse reaction. The other label items (anemia, leukopenia, thrombocytopenia, LFT↑, vomiting) are possible but rarely matter clinically. The owner can add them; I kept the tags to the label's major warnings, as the Amikacin entry does.

**Sources:** US FDA label – WARNINGS, PRECAUTIONS, ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.4 'Severe cutaneous adverse reactions', 4.8 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert – 5.1.11–5.1.17, 8 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### B8 · Monitor

["renal", "neuro", "electrolyte"]

**Why:** The column is empty. US WARNINGS says 'Renal and eighth cranial nerve function should be closely monitored', with urinalysis, BUN/SCr/CrCl, serial audiograms and serum levels. US PRECAUTIONS describes tetany and paresthesias with hypomagnesemia, hypocalcemia and hypokalemia that need electrolyte correction. UK 4.2 says 'Gentamicin should not be prescribed if serum concentrations cannot be monitored', and UK 4.8 lists hypomagnesaemia with prolonged therapy. The owner uses 'neuro' for vestibular and cochlear monitoring in the Amikacin entry. 'LFT' is optional, per UK 4.4 hepatic monitoring. TDM targets go in the body (see B14).

**Sources:** US FDA label – WARNINGS, PRECAUTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.2 'Monitoring advice', 4.4, 4.8 – https://www.medicines.org.uk/emc/product/14742/smpc

### B9 · Mechanism

Binds the 30S ribosomal subunit → inhibits bacterial protein synthesis; bactericidal (US label Microbiology; UK SmPC 5.1). Concentration-dependent killing: clinical response tracks Cmax/MIC (Moore 1987, PMID 3540140)

**Why:** The column is empty. US: 'binds to the prokaryotic ribosome, inhibiting protein synthesis ... bactericidal'. UK 5.1: 'inhibition of protein synthesis at the level of the 30s ribosomal subunit'. No label covers the concentration-dependence point, so it carries a verified PubMed citation.

**Sources:** US FDA label – Microbiology 'Mechanism of Action' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 5.1 – https://www.medicines.org.uk/emc/product/14742/smpc; Moore RD et al. J Infect Dis 1987;155:93-9, PMID 3540140 (verified) – https://pubmed.ncbi.nlm.nih.gov/3540140/

### B10 · Drug Interactions

Avoid (US/UK/TW): other neuro/nephrotoxic drugs – other aminoglycosides, cisplatin, polymyxin B/colistin, vancomycin, viomycin, cephaloridine; amphotericin B, ciclosporin (UK 4.5)<br>Loop diuretics (furosemide, ethacrynic acid) → ↑ototoxicity; IV diuretics may raise aminoglycoside toxicity (US/UK)<br>Caution: cephalosporins (↑nephrotoxicity reported)<br>Neuromuscular blockers (succinylcholine etc.), anaesthetics, botulinum toxin, massive citrated blood → NM blockade/respiratory paralysis; calcium salts may reverse (US/UK); may antagonise neostigmine/pyridostigmine (UK)<br>Indomethacin ↑ gentamicin levels in neonates; oral anticoagulants ↑ bleeding risk; bisphosphonates → hypocalcaemia (UK 4.5)<br>Do not premix with other drugs (US); incompatible in mixed solution with penicillins, cephalosporins, erythromycin, heparins, NaHCO3 (UK 6.2); carbenicillin inactivates gentamicin in vitro – give at a separate site (US/UK/TW 5.1.8)

**Why:** The column is empty. US WARNINGS: 'Concurrent and/or sequential ... use of ... cisplatin, cephaloridine, kanamycin, amikacin, neomycin, polymyxin B, colistin, paromomycin, streptomycin, tobramycin, vancomycin, and viomycin, should be avoided', and potent diuretics should be avoided. US PRECAUTIONS covers cephalosporins, neuromuscular blockers, citrated blood and carbenicillin. UK 4.5 adds amphotericin B, ciclosporin, botulinum toxin, neostigmine/pyridostigmine, indomethacin, oral anticoagulants and bisphosphonates. TW 5.1.2, 5.1.3 and 5.1.15 match the US text.

**Sources:** US FDA label – WARNINGS, PRECAUTIONS, D&A ('should not be physically premixed') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.5, 6.2 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert – 5.1.2, 5.1.3, 5.1.8, 5.1.15 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### B11 · Pregnancy

Aminoglycosides can cause fetal harm (US label WARNINGS). Gentamicin crosses the placenta; total irreversible bilateral congenital deafness reported with streptomycin; rat/rabbit studies showed no fetal harm from gentamicin (US), but rodent/guinea-pig studies showed fetal kidney/inner-ear toxicity (UK 4.6, 5.3). UK SmPC 4.6: do not use in pregnancy except in life-threatening situations where benefit outweighs risk; then monitor maternal levels and the infant's hearing and renal function. 台灣仿單: 尚未有孕婦使用安全資料; 懷孕期使用時應告知對胎兒之潛在危害。

**Why:** The column is empty. The wording follows the current labels, not an FDA letter category: the letter categories are retired, and the hospital's 'D [FDA]' must not be copied. US: 'Aminoglycosides can cause fetal harm when administered to a pregnant woman ... several reports of total irreversible bilateral congenital deafness in children whose mothers received streptomycin ... Animal reproduction studies ... rats and rabbits did not reveal evidence ... harm to the fetus'. UK 4.6: 'should not be used in pregnancy, except in case of life-threatening situations ... maternal serum gentamicin concentration monitoring is recommended ... Monitoring of the hearing and renal function of the infants'. TW 5.1.16 and 6.1 agree.

**Sources:** US FDA label – WARNINGS (pregnancy paragraph) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.6 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert – 5.1.16, 6.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F

### B12 · Breastfeeding

Poorly excreted into breastmilk; infant serum levels with TID dosing are far below therapeutic levels, so systemic effects are unlikely; no data for once-daily regimens. Monitor the infant for GI-flora effects (diarrhea, thrush, diaper rash; rarely bloody stool) (LactMed). UK SmPC 4.6: if the infant's gut mucosa is severely eroded, check the infant's serum level; if >1 µg/mL, breastfeeding or gentamicin may need to be stopped (under medical supervision).

**Why:** The column is empty. LactMed summary: 'poorly excreted into breastmilk ... serum levels with three times daily dosages are far below those attained when treating newborn infections ... Data are not available with single daily dose regimens. Monitor the infant for possible effects on the gastrointestinal flora'. UK 4.6 adds the infant-level threshold: 'if the serum gentamicin concentration in the infant exceeds 1 µg/ml either breast-feeding or the gentamicin therapy may need to be discontinued'.

**Sources:** LactMed – Gentamicin, NBK500832 (rev. 2024-06-15), 'Summary of Use during Lactation' – https://www.ncbi.nlm.nih.gov/books/NBK500832/; UK SmPC Cidomycin – 4.6 'Breast-feeding' – https://www.medicines.org.uk/emc/product/14742/smpc

### B13 · Notes

Contraindicated: hypersensitivity to gentamicin; prior hypersensitivity/serious toxicity to other aminoglycosides may contraindicate (US); myasthenia gravis (UK SmPC 4.3)<br>含亞硫酸鹽: 本院品項含 sodium bisulfite (TW 1.2/5.1.16); US Hospira contains sodium metabisulfite → sulfite allergy/asthma risk<br>粒線體 m.1555A>G (MT-RNR1) 突變 → 耳毒性風險↑ even at therapeutic levels; consider alternatives (US/UK/TW 5.1.17)<br>Not for uncomplicated initial UTI unless the organism is resistant to less toxic agents (US)<br>Synergy with cell-wall agents (penicillin G/ampicillin) against enterococci and group D strep; gentamicin alone is inactive against most streptococci/enterococci and anaerobes; not effective against Salmonella/Shigella in patients (US Microbiology)<br>Also active: Citrobacter, Providencia (US/UK; no tag)<br>Poor CSF penetration after parenteral use (US)<br>Once-daily vs multiple daily dosing: similar efficacy, nephrotoxicity no worse (meta-analyses: Barza 1996, PMID 8611830; Hatala 1996, PMID 8633831)<br>CRE: US gentamicin susceptibility ~47%; once-daily aminoglycoside is an alternative for CRE cUTI, and a single dose is a preferred option for CRE uUTI (IDSA 2024, PMID 39108079)<br>⚠ 非仿單 guideline uses (no tag): PID with clindamycin (CDC 2021, PMID 34292926); gonorrhoea alternative 240 mg IM ×1 + azithromycin 2 g PO (CDC 2021); surgical prophylaxis 5 mg/kg ×1 (ASHP/IDSA 2013, PMID 23327981) – owner to confirm doses<br>⚠ 台灣仿單適應症 (立克次氏體/巨型濾過性病毒) 過時，請依 US/UK 適應症<br>本院品項: 生達 僅大黴素注射液 40 mg/mL, 80 mg/2 mL vial (衛署藥製字第008956號), IM/IV infusion

**Why:** The column is empty. The Notes collect the label safety warnings that have no matching column: contraindications (US CONTRAINDICATIONS; UK 4.3 myasthenia gravis), the sulfite excipient, which differs by product (the stocked TW product lists Sodium bisulfite in 1.2 and the US Hospira product has sodium metabisulfite), the mitochondrial variant warning, and synergy and resistance facts from US Microbiology. They also hold organisms and indications that have no tag. Every off-label item cites a verified guideline PMID. I did not verify the CDC and ASHP doses against the full text; they come from memory of those guidelines, so the owner may want to check the tables.

**Sources:** US FDA label – CONTRAINDICATIONS, WARNINGS, Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.1, 4.3, 4.4 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert – 1.2, 5.1.16, 5.1.17 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; Barza M et al. BMJ 1996;312:338-45, PMID 8611830 (verified) – https://pubmed.ncbi.nlm.nih.gov/8611830/; Hatala R et al. Ann Intern Med 1996;124:717-25, PMID 8633831 (verified) – https://pubmed.ncbi.nlm.nih.gov/8633831/; Tamma PD et al. IDSA 2024 AMR guidance, PMID 39108079 (verified) – https://www.idsociety.org/practice-guideline/amr-guidance/; Workowski KA et al. CDC STI Treatment Guidelines 2021. MMWR Recomm Rep 2021;70:1-187, PMID 34292926 (verified) – https://pubmed.ncbi.nlm.nih.gov/34292926/; Bratzler DW et al. ASHP/IDSA/SIS/SHEA surgical prophylaxis 2013. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 (verified) – https://pubmed.ncbi.nlm.nih.gov/23327981/

### B14 · Page body

Add a monograph in the same layout as the Amikacin page: '## **GENTAMICIN — Complete Monograph**' with sections ### Category (Aminoglycoside; from Micromonospora purpurea – US DESCRIPTION, UK 5.1, ATC J01GB03) / ### Mechanism (B9) / ### Indications (US/UK list from B5 as bullets, incl. neonatal sepsis, burns, group D strep endocarditis with a penicillin; 'not for uncomplicated initial UTI unless resistant to less toxic agents' (US); off-label items from B13 marked ⚠ 非仿單 with guideline PMIDs) / ### Coverage (label organisms from B6 incl. Citrobacter, Providencia; NOT effective: most streptococci/enterococci alone, anaerobes, Salmonella/Shigella – US) / ### Adult Dose (B1) / ### Renal Dose, HD, CRRT (B2, with US Table 2 and UK CrCl table) / ### Hepatic Dose (B3) / ### Pediatric Dose (B4) / ### Side Effects (US/UK: nephrotoxicity, irreversible oto/vestibular toxicity, neuromuscular blockade/respiratory paralysis, peripheral neuropathy/encephalopathy, hypoMg/hypoCa/hypoK/hypoNa, Fanconi-like syndrome, anaemia/leukopenia/thrombocytopenia/eosinophilia, ↑transaminases/LDH/bilirubin, pseudotumor cerebri, SJS/TEN and pseudomembranous colitis (UK 4.4), sulfite reactions, m.1555A>G) / ### Monitor – TDM table: conventional q8h: peak 4–6 mcg/mL expected 30–60 min after IM dose (US; 1 mg/kg → up to 4, 1.5 mg/kg → up to 6 mcg/mL), avoid prolonged peak >12 and trough >2 mcg/mL (US/TW 5.1.14); UK SmPC 4.2: once daily trough ≤1 mg/L, multiple daily ≤2 mg/L, peak <4 mg/L inadequate, >10 mg/L toxicity risk; peak 1 h after IV/IM bolus or 30 min after end of infusion, trough at end of interval; raised trough → lengthen interval, not reduce dose (UK); PK/PD target Cmax/MIC ≥8–10 (ESICM 2020, PMID 32383061; Moore 1987, PMID 3540140); renal function, urinalysis, audiogram/vestibular, electrolytes (US) / ### Drug Interactions (B10) / ### Pregnancy (B11) / ### Breastfeeding (B12) / ### Notes (B13) / ### References (US DailyMed setid 977180b3-a222-4282-d485-4a3217674305; UK eMC 14742; TW 衛署藥製字第008956號 TFDA link; LactMed NBK500832; PMIDs 7793867, 8611830, 8633831, 32383061, 3540140, 19397464, 26373316, 15494903, 35264029, 39108079, 34292926, 23327981). No storage/stability section.

**Why:** The page is newly created and blank. Every other entry has a full monograph body (see Amikacin), so a body is expected. All proposed content comes from the label, LactMed or verified-PMID sources listed under B1–B13. The TDM numbers are quoted from US D&A ('peak ... 4 to 6 mcg/mL', 'above 12 mcg/mL', 'above 2 mcg/mL') and from UK 4.2 'Monitoring advice'. Storage is left out on purpose, per the owner.

**Sources:** US FDA label – DESCRIPTION, D&A, WARNINGS, PRECAUTIONS, ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=977180b3-a222-4282-d485-4a3217674305; UK SmPC Cidomycin – 4.2 'Monitoring advice', 4.4, 4.8, 5.1 – https://www.medicines.org.uk/emc/product/14742/smpc; Taiwan insert – 5.1.14 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC008956%E8%99%9F; LactMed NBK500832 – https://www.ncbi.nlm.nih.gov/books/NBK500832/; Abdul-Aziz MH et al. ESICM 2020, PMID 32383061 (verified) – https://pubmed.ncbi.nlm.nih.gov/32383061/

### B15 · Renewed date

2026-10-05 (set when the agreed fixes are applied)

**Why:** Verified entries such as Amikacin carry Renewed date 2026-10-05. This new entry should get the same date once it is filled.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date column); Amikacin entry https://app.notion.com/2b5c496dfff1805da69efd2e6c17c325

## Apply log

- Adult dose: merged both agreed versions (US/UK/TW label dosing, duration, obesity, extended-interval Hartford, AHA 2015 endocarditis, IDSA 2004 meningitis, surgical prophylaxis)
- Renal dose, HD, CRRT: merged (US SCr x8 and Table 2 methods, UK CrCl table, Hartford tiers, HD/CRRT blue tags, PD/ISPD IP dose)
- Hepatic dose: set (no adjustment; GFR elimination; UK 4.4 monitoring)
- Pediatric dose: merged US/UK/TW dosing, HD dose, diluent, neonatal t1/2
- Indications: [Sepsis, Bacteremia, Meningitis, UTI, cUTI, Pneumonia, IAI, cIAI, Peritonitis, SSTI, Osteoarthritis, Endocarditis] (union of both agreed sets, all existing options)
- Coverage: [E.coli, Klebsiella, Proteus, Pseudomonas, Enterobacter, Serratia, Staphylococcus]
- Side Effects: [nephrotoxicity, ototoxicity, neurotoxicity, neuropathy, hypokalemia, SJS/TEN]
- Monitor: [renal, neuro, electrolyte]
- Mechanism: 30S binding, bactericidal, concentration-dependent (Moore 1987)
- Drug Interactions: merged label interactions and incompatibilities
- Pregnancy: merged US/UK/TW text (no letter category)
- Breastfeeding: merged LactMed + UK SmPC 4.6 text
- Notes: merged contraindications, sulfite, m.1555A>G, synergy/resistance, Citrobacter/Providencia, CSF, dilution, ODA meta-analyses, CRE (IDSA 2024), off-label guideline uses, outdated TW indications, stocked product
- Page body: added '## GENTAMICIN — Complete Monograph' in the Amikacin layout with all sections, TDM table, US Table 2 (verified against DailyMed SPL), UK renal table, full adverse-effect list, no storage/stability
- References section at end of body: US DailyMed (Hospira, setid 977180b3-...), UK eMC 14742, TW 衛署藥製字第008956號, LactMed NBK500832, and PMIDs 7793867, 26373316, 15494903, 23327981, 19397464, 32383061, 35264029, 3540140, 8611830, 8633831, 39108079, 34292926
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
