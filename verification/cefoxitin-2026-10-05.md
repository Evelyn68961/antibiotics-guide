# Verification: Cefmore (Cefoxitin)

- **Notion entry:** [Cefmore (Cefoxitin)](https://app.notion.com/25bc496dfff1809f8090ff1b6d153a82)
- **Hospital codes:** CEF08 (CefMORE inj 2 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/cefoxitin.json` (plus any `sources/cefoxitin-taiwan-insert-*.txt`)

## Product and sources

Cefmore 針 2 g/vial (世優注射劑, "瑞士"世優注射劑（西福斯汀) CEFMORE INJECTION (CEFOXITIN SODIUM) "SWISS"), 瑞士藥廠, license 衛署藥製字第038843號; hospital code CEF08, NHI AB38843212, ATC J01DC01. I identified it from the hospital product page at https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=CEF08 and matched it to the TFDA insert at https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F. The online insert has no revision date; its history PDFs are dated 103-05-15, 106-02-08, 106-06-28 and 106-09-30. Its route is IV or IM. US comparator: WG Critical Care cefoxitin for injection (IV only), DailyMed setid 658a0dc6-6da5-44dc-94f2-1211619297f7 v8. UK comparator: Renoxitin SmPC, revised 14/05/2025.

## Agreed fixes applied in Notion (48)

### A1 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-50: 1-2g IV q8-12h<br>CrCl 10-29: 1-2g IV q12-24h<br>CrCl\<10: 500mg-1g IV q24-48h<br>HD: give after dialysis

**Now:** Loading 1-2g IV, then (TW 仿單 = US label):<br>CrCl 30-50: 1-2g IV q8-12h<br>CrCl 10-29: 1-2g IV q12-24h<br>CrCl 5-9: 0.5-1g IV q12-24h<br>CrCl \<5: 0.5-1g IV q24-48h<br>HD: give the 1-2g loading dose after each HD session, then maintenance per CrCl table<br>CRRT: no label recommendation; limited data, consider TDM (Chabert 2022, PMID 36175707)<br>(UK SmPC: 2g load; CrCl 30-50 2g q8-12h, 10-29 2g q12-24h; no band \<10)

**Why:** The current text merges two bands into 'CrCl<10: 500mg-1g q24-48h'. Both the stocked product's Taiwan insert and the US label split this: CrCl 9-5 gets 0.5-1 g every 12-24 h, and only CrCl <5 gets every 24-48 h. As written, patients with CrCl 5-9 could get half the labelled frequency. The text also leaves out the 1-2 g loading dose. For HD, the label says to give the loading dose after each haemodialysis and then follow Table 2; 'give after dialysis' does not say that. No label covers CRRT. The only recent PK paper, Chabert 2022 (PMID 36175707, checked via esummary), found that concentrations depend strongly on renal function and suggests TDM. Per the ground rules, I add the UK SmPC values alongside.

**Sources:** Taiwan 仿單 Cefmore 衛署藥製字第038843號, §3.3 特殊族群用法用量 (renal table 50-30 / 29-10 / 9-5 / <5) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; US FDA label (DailyMed WG Critical Care v8), DOSAGE AND ADMINISTRATION: 'initial loading dose of 1 gram to 2 grams… Table 2… 9 to 5: 0.5 to 1 Every 12 to 24 hours; < 5: 0.5 to 1 Every 24 to 48 hours'; 'In patients undergoing hemodialysis, the loading dose of 1 gram to 2 grams should be given after each hemodialysis' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC Renoxitin §4.2 Renal impairment – https://www.medicines.org.uk/emc/product/10505/smpc; Chabert P et al. Ann Intensive Care 2022;12:90, PMID 36175707 (verified via E-utilities) – https://pubmed.ncbi.nlm.nih.gov/36175707/

### A2 · Adult dose (error)

**Was:** mild infection: 1g IV q6-8h (MAX 3-4g/d)<br>severe infection: 1g IV q4h or 2g IV q6-8h (MAX 6-8g/d)

**Now:** uncomplicated (pneumonia, UTI, skin): 1g IV q6-8h (3-4 g/day)<br>moderately severe/severe: 1g IV q4h or 2g IV q6-8h (6-8 g/day)<br>high-dose (e.g. gas gangrene): 2g IV q4h or 3g IV q6h (12 g/day = max)<br>Cefmore (TW 仿單): IV or IM; UK SmPC: 2g q4-6h, max 12 g/day

**Why:** Table 1 lists 3-4 g and 6-8 g as the usual daily dose for each tier, not as a maximum. Writing them as 'MAX' is wrong, because the same table allows 12 g/day (2 g q4h or 3 g q6h) for infections that need higher doses, such as gas gangrene. That third tier is missing from the current text. The stocked product's Taiwan insert has the same three tiers and also allows IM use.

**Sources:** US FDA label, DOSAGE AND ADMINISTRATION, Table 1 'Guidelines for Dosage' (Daily Dosage 3-4 g / 6-8 g / 12 g) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan 仿單 Cefmore, §3.1 用法用量 ('可供靜脈或肌肉注射'; 需要較高劑量之感染(如氣性壞疽) 12 g 每4小時2 g或每6小時3 g) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; UK SmPC Renoxitin §4.2 Posology ('2g every 4-6 hours to a maximum of 12g/day') – https://www.medicines.org.uk/emc/product/10505/smpc

### A3 · Pediatric dose (error)

**Was:** ≥3 mo: 80-160 mg/kg/day divided q4-8h (MAX 12g/day); Neonates: 35 mg/kg q8-12h

**Now:** ≥3 mo: 80-160 mg/kg/day IV divided q4-6h (4-6 equal doses; higher end for severe infection) (MAX 12g/day)<br>Prophylaxis ≥3 mo: 30-40 mg/kg/dose at adult timings<br>Renal impairment: adjust per adult table<br>Avoid benzyl-alcohol diluent<br>\<3 mo: no FDA/TW label recommendation (safety/efficacy not established). Neonates 35 mg/kg q8-12h = off-label, source needed; published data: 30 mg/kg IV q8h in infants \<2 mo (Regazzi 1983, PMID 6653646)

**Why:** The label says to divide the daily dose 'into four to six equal doses', which is q4-6h, not q4-8h. Every-8-hours dosing is not supported by any label. The text also leaves out three things the label states: the paediatric prophylaxis dose of 30-40 mg/kg, adjusting for renal impairment as in the adult table, and avoiding benzyl-alcohol diluent. The neonatal part is handled in A4.

**Sources:** US FDA label, DOSAGE AND ADMINISTRATION – Pediatric Patients ('80 to 160 mg/kg… divided into four to six equal doses… should not exceed 12 grams'; 'no recommendation is made for pediatric patients from birth to 3 months'; prophylaxis '30 to 40 mg/kg doses'; benzyl alcohol warning) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan 仿單 Cefmore §3.3 ('三個月大或以上之小孩，80～160 mg/kg/日，分4～6次使用… 每日最高劑量不可超過12 g') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; UK SmPC §4.2 Paediatric population (insufficient data <11 y) – https://www.medicines.org.uk/emc/product/10505/smpc

### A4 · Pediatric dose (unsupported)

**Was:** Neonates: 35 mg/kg q8-12h

**Now:** \<3 mo: no FDA/TW label recommendation (safety/efficacy not established). Neonates 35 mg/kg q8-12h = off-label, source needed; published data: 30 mg/kg IV q8h (90 mg/kg/day) in infants \<2 mo, t½ 1.43 h (Regazzi 1983, PMID 6653646)

**Why:** No label supports a neonatal dose. Both the FDA label and the Taiwan insert start at 3 months, and the FDA label says safety and efficacy from birth to 3 months are not established. The only PubMed neonatal study is Regazzi 1983 (PMID 6653646, checked via esummary). It used 90 mg/kg/day as 30 mg/kg q8h in 15 infants under 2 months, which does not support '35 mg/kg q8-12h'. The text should at least be marked off-label and cited.

**Sources:** US FDA label, PRECAUTIONS – Pediatric Use ('Safety and efficacy in pediatric patients from birth to 3 months of age have not yet been established') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Regazzi MB et al. Cefoxitin in newborn infants. Eur J Clin Pharmacol 1983;25:507-9, PMID 6653646 (verified) – https://pubmed.ncbi.nlm.nih.gov/6653646/

### A5 · Indications (missing)

**Was:** Pelvic, SSTI, UTI, IAI, Pneumonia, Surgical prophylaxis

**Now:** Pelvic, SSTI, UTI, cUTI, IAI, Peritonitis, Pneumonia, Sepsis, Osteoarthritis, Surgical prophylaxis

**Why:** The FDA label also lists '(5) Septicemia' and '(6) Bone and joint infections'. These map to the existing tags 'Sepsis' and 'Osteoarthritis', which is the database's only bone/joint option. The FDA label's intra-abdominal indication explicitly includes peritonitis, so 'Peritonitis' fits. The UK SmPC approves complicated UTI and pyelonephritis, so 'cUTI' fits. All proposed tags exist in the schema. Do not add Meningitis: the UK SmPC §4.4 says cefoxitin is not indicated for meningitis.

**Sources:** US FDA label, INDICATIONS AND USAGE (1)-(7) + Prevention – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC Renoxitin §4.1 ('complicated urinary tract infections • pyelonephritis') and §4.4 Bacterial meningitis – https://www.medicines.org.uk/emc/product/10505/smpc

### A6 · Coverage (missing)

**Was:** Staphylococcus, Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus, Bacteroides

**Now:** add: Neisseria, Anaerobes (keep existing tags; do NOT add Pseudomonas, Enterobacter, Enterococcus, MRSA, Chlamydia)

**Why:** All three labels list Neisseria gonorrhoeae as susceptible, including penicillinase-producing strains. Beyond Bacteroides, the labels list many anaerobes: Clostridium spp., Peptococcus niger and Peptostreptococcus in the FDA label and Taiwan insert, and also Fusobacterium, Prevotella and Veillonella in the SmPC. Both tags already exist in the schema. The Taiwan insert and the SmPC list Pseudomonas aeruginosa, Enterobacter cloacae, enterococci, methicillin-resistant staphylococci and Chlamydia as resistant, so none of these should be added.

**Sources:** US FDA label, CLINICAL PHARMACOLOGY – Microbiology (Gram-negative: Neisseria gonorrhoeae…; Anaerobic: Clostridium spp., Peptococcus niger, Peptostreptococcus spp., Bacteroides spp.) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan 仿單 Cefmore §15 細菌學 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; UK SmPC §5.1 Susceptible / Resistant species – https://www.medicines.org.uk/emc/product/10505/smpc

### A7 · Coverage (minor)

**Was:** Staphylococcus

**Now:** replace 'Staphylococcus' with 'MSSA'

**Why:** The FDA label limits staphylococcal activity to 'methicillin-susceptible isolates only' of S. aureus and S. epidermidis. The Taiwan insert says methicillin/oxacillin-resistant staphylococci should be considered resistant. The generic 'Staphylococcus' tag could be read as covering MRSA. The 'MSSA' tag exists in the schema.

**Sources:** US FDA label, Microbiology ('Staphylococcus aureus (methicillin-susceptible isolates only)') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan 仿單 Cefmore §15 細菌學 (footnote a) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### A8 · Side Effects (missing)

**Was:** LFT↑, thrombophlebitis

**Now:** LFT↑, thrombophlebitis, GI, hematologic, SJS/TEN, CNS, AKI

**Why:** Each added tag comes from the labels. GI: diarrhoea, pseudomembranous colitis, nausea and vomiting (FDA, SmPC, Taiwan insert). Hematologic: eosinophilia, leukopenia/granulocytopenia, neutropenia, haemolytic anaemia, thrombocytopenia and bone-marrow depression (FDA, SmPC 4.8, Taiwan 8.1.2). SJS/TEN: TEN in the cefoxitin-specific FDA list, SJS as a cephalosporin class effect, and both in Taiwan 8.1.1. CNS: SmPC 4.4/4.8 encephalopathy and seizures, especially with renal impairment, and FDA class seizures. AKI: interstitial nephritis and, rarely, acute renal failure (FDA, SmPC). All tags exist in the schema.

**Sources:** US FDA label, ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.4 Risk of encephalopathy; §4.8 Undesirable effects – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan 仿單 Cefmore §8.1.1-8.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### A9 · Drug Interactions (missing)

**Was:** Aminoglycosides (↑nephrotoxicity), probenecid (↑levels), warfarin (↑INR), bacteriostatic agents (antagonism)

**Now:** Aminoglycosides (↑nephrotoxicity; do not mix in same solution/syringe), loop diuretics furosemide/etacrynic acid (monitor renal function), probenecid (↑levels), warfarin/oral anticoagulants (↑INR), bacteriostatic agents (antagonism – not in labels, unverified)<br>Lab: false ↑serum/urine creatinine (Jaffé; draw ≥2h post-dose), false-positive urine glucose (Clinitest), false-positive Coombs, false ↑urinary 17-OHCS (Porter-Silber)

**Why:** The SmPC §4.4 says to monitor renal function when cefoxitin is combined with furosemide or etacrynic acid. The FDA label and the Taiwan insert both say not to mix cefoxitin with aminoglycoside solutions. All labels describe lab-test interference, which is clinically relevant because a falsely raised creatinine could lead to wrong renal dosing. The interaction entries already in the field are supported: aminoglycosides by FDA Drug Interactions, probenecid by FDA Clinical Pharmacology, and anticoagulant INR by SmPC 4.5.

**Sources:** US FDA label, PRECAUTIONS – Drug Interactions; Drug/Laboratory Test Interactions; CLINICAL PHARMACOLOGY (probenecid); D&A (do not add to aminoglycoside solutions) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.4 (diuretics/aminoglycosides; Interference with laboratory tests), §4.5 (uncontrolled INR) – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan 仿單 §11 (Probenecid; 勿混合於同一注射器內) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### A10 · Drug Interactions (unsupported)

**Was:** bacteriostatic agents (antagonism)

**Now:** bacteriostatic agents (antagonism – not in FDA/UK/TW labels; flag as unverified)

**Why:** None of the three labels mentions antagonism with bacteriostatic agents. The claim is plausible as a general β-lactam principle, but no hierarchy source supports it, so it should be flagged rather than removed.

**Sources:** US FDA label, PRECAUTIONS – Drug Interactions (only aminoglycosides) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.5 (only oral anticoagulant INR) – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan 仿單 §7 交互作用 '目前尚無資訊' – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### A11 · Notes (missing)

**Was:** Surgical prophylaxis timing: Administer 30-60 minutes before incision; discontinue within 24 hours<br>PID regimen (CDC): Cefoxitin 2g IV q6h + doxycycline 100mg PO/IV q12h

**Now:** Surgical prophylaxis (uncontaminated GI surgery, vaginal/abdominal hysterectomy): 2g IV 30-60 minutes before incision, then 2g q6h; discontinue within 24 hours (peds ≥3 mo: 30-40 mg/kg); intra-op redose q2h (ASHP 2013)<br>Cesarean section: 2g IV once at cord clamping, or 2g at clamping + 2g at 4h and 8h<br>PID regimen (CDC): Cefoxitin 2g IV q6h + doxycycline 100mg PO/IV q12h (no Chlamydia activity → always add anti-chlamydial cover)<br>Not for meningitis (UK SmPC)<br>Na 2.3 mEq (53.8 mg) per g

**Why:** The existing two lines are correct and are kept. The labelled prophylaxis doses are missing: adult 2 g then 2 g q6h for up to 24 h, paediatric 30-40 mg/kg, and the caesarean regimens. Also missing are the FDA statement that anti-chlamydial cover must be added, the SmPC statement that cefoxitin is not indicated for meningitis, and the sodium load. I verified PMID 23327981 (ASHP/IDSA/SIS/SHEA 2013) via esummary as the source for the q2h redose. The CDC PID regimen matches the CDC 2021 STI guideline (PMID 34292926, verified), but cdc.gov is blocked from this sandbox, so I could not re-read the regimen text.

**Sources:** US FDA label, DOSAGE AND ADMINISTRATION – Prevention, Cesarean Section; INDICATIONS (C. trachomatis); DESCRIPTION (53.8 mg/2.3 mEq Na per g) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.4 Bacterial meningitis – https://www.medicines.org.uk/emc/product/10505/smpc; Bratzler DW et al. Clinical practice guidelines for antimicrobial prophylaxis in surgery. Am J Health Syst Pharm 2013, PMID 23327981 (verified) – https://pubmed.ncbi.nlm.nih.gov/23327981/; Workowski KA et al. STI Treatment Guidelines 2021, MMWR Recomm Rep, PMID 34292926 (verified) – https://www.cdc.gov/std/treatment-guidelines/pid.htm

### A12 · Pregnancy (minor)

**Was:** Use if clearly needed and benefits outweigh risks. <br>Commonly used for surgical prophylaxis in cesarean section.

**Now:** Use if clearly needed (US label: no teratogenicity in rats/mice; no adequate human studies). UK SmPC: large amount of human data shows no malformative or feto/neonatal toxicity. <br>Commonly used for surgical prophylaxis in cesarean section (labelled: 2g IV at cord clamping).

**Why:** The current text is correct and contains no retired letter category. The proposal adds the label basis. The Taiwan insert still says 'B級', which is outdated and should not be copied.

**Sources:** US FDA label, PRECAUTIONS – Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.6 Pregnancy – https://www.medicines.org.uk/emc/product/10505/smpc

### A13 · Breastfeeding (minor)

**Was:** Compatible

**Now:** Compatible (LactMed: low milk levels, not expected to cause adverse effects; occasional diarrhea/thrush reported with cephalosporins). Note: UK SmPC advises stopping breastfeeding; US label: caution.

**Why:** 'Compatible' is correct: LactMed says cefoxitin 'is acceptable in nursing mothers'. The two regulatory labels are more cautious: the UK SmPC says to discontinue breastfeeding to prevent allergic reactions, and the FDA label says to use caution. Readers should see that the labels disagree.

**Sources:** LactMed Cefoxitin NBK501388 (rev 2022-09-19), Summary of Use during Lactation – https://www.ncbi.nlm.nih.gov/books/NBK501388/; UK SmPC §4.6 Breast-feeding – https://www.medicines.org.uk/emc/product/10505/smpc; US FDA label, Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

### A14 · Monitor (minor)

**Was:** renal, LFT, CBC

**Now:** renal, LFT, CBC, PT/INR

**Why:** The current tags are correct: the FDA label calls for periodic assessment of renal, hepatic and haematopoietic function during prolonged therapy. The SmPC §4.5 reports that cefoxitin can potentiate oral anticoagulants (uncontrolled INR), so 'PT/INR' is reasonable for patients on warfarin. The tag exists in the schema. This addition is optional.

**Sources:** US FDA label, PRECAUTIONS – Laboratory Tests – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.5 – https://www.medicines.org.uk/emc/product/10505/smpc

### A15 · Page body (error)

**Was:** 'Let me search for comprehensive evidence-based information on Cefoxitin.' / 'Your current coverage is **mostly correct** but needs additions:' / '*(Your current info is correct - minor formatting)*'

**Now:** REMOVE these three lines

**Why:** These are AI-chat lines pasted into the page and are not drug information. Per the ground rules, pasted AI-chat text is removed.

**Sources:** Ground rule: pasted AI-chat text may be removed (owner decision)

### A16 · Page body (error)

**Was:** RENAL table rows: '<10 \| 500mg-1g IV q24-48h'; 'Hemodialysis \| Loading 1-2g after HD; maintenance per CrCl <10'; 'CRRT \| 1-2g IV q8-12h (varies by effluent rate…)'

**Now:** Rows: '5-9 \| 0.5-1g IV q12-24h'; '<5 \| 0.5-1g IV q24-48h'; add 'Loading dose \| 1-2g IV before maintenance'; 'Hemodialysis \| 1-2g loading dose after each HD; maintenance per Table 2 (TW 仿單 = US label)'; 'CRRT \| No label recommendation; limited data – consider TDM (Chabert 2022, PMID 36175707)'

**Why:** The body table has the same <10 lumping error as the property (see A1). The CRRT dose '1-2g IV q8-12h' has no source in any label or verified study, so it should be flagged and replaced with a statement that no label dose exists.

**Sources:** Taiwan 仿單 Cefmore §3.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; US FDA label, DOSAGE AND ADMINISTRATION Table 2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; PMID 36175707 (verified) – https://pubmed.ncbi.nlm.nih.gov/36175707/

### A17 · Page body (error)

**Was:** PEDIATRIC table: '≥3 months to children \| 80-160 mg/kg/day IV/IM divided q4-8h'; neonatal rows 'GA <32 wk PNA ≤7 d 35 mg/kg q12h' etc.

**Now:** '≥3 months \| 80-160 mg/kg/day IV/IM in 4-6 divided doses (q4-6h), max 12 g/day'; neonatal rows: append '(off-label; not in FDA/TW label – FDA: no recommendation <3 mo; limited data 30 mg/kg q8h, PMID 6653646)'

**Why:** The label says 4-6 equal doses, which is q4-6h, so 'q4-8h' is wrong. The GA/PNA neonatal rows are not in any label and have no verified source, so they should be marked off-label.

**Sources:** US FDA label, D&A – Pediatric Patients; PRECAUTIONS – Pediatric Use – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan 仿單 Cefmore §3.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; PMID 6653646 (verified) – https://pubmed.ncbi.nlm.nih.gov/6653646/

### A18 · Page body (error)

**Was:** NO Coverage list: 'Most Clostridium spp. except C. perfringens'; B. fragilis note '~65-85%' / 'only ~65% susceptibility'

**Now:** Replace with 'Clostridioides (Clostridium) difficile – resistant (UK SmPC)'; mark B. fragilis susceptibility percentages as unsourced ('resistance increasing – check local antibiogram')

**Why:** The FDA label and the Taiwan insert list Clostridium spp. as active in vitro and in clinical infections, and Clostridium species appear in the FDA IAI, gynaecological and skin indications. That contradicts saying most Clostridium spp. are not covered. Only C. difficile is listed as resistant (SmPC). No label gives the B. fragilis susceptibility percentages. The FDA Clinical Studies section reports 70-80% eradication of the B. fragilis group in IAI trials, which is a different measure.

**Sources:** US FDA label, Microbiology; INDICATIONS (3),(4),(7); CLINICAL STUDIES – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §5.1 Resistant species (Clostridium difficile) – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan 仿單 §15 細菌學 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### A19 · Page body (error)

**Was:** PREGNANCY: '**AU TGA Category B1** \| **US FDA: Not formally assigned (PLLR format)**'; 'Human data: Limited but no increased malformative risk observed'

**Now:** 'US label (older, non-PLLR format): use only if clearly needed; FDA letter categories retired. UK SmPC: large amount of human data – no malformative or feto/neonatal toxicity.'

**Why:** The current US label is not in PLLR format; it still uses the pre-PLLR 'Nursing Mothers' heading. Saying the US FDA has 'not formally assigned' a category under PLLR is therefore inaccurate. The TGA category is outside the agreed source hierarchy and repeats letter-category framing. The SmPC describes 'a large amount of clinical data', which contradicts 'Limited'.

**Sources:** US FDA label, PRECAUTIONS – Pregnancy / Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/10505/smpc

### A20 · Page body (unsupported)

**Was:** DRUG INTERACTIONS table rows: 'Aztreonam – Cefoxitin induces β-lactamases that may inactivate aztreonam – Avoid'; 'Live vaccines (BCG, cholera) – ↓ efficacy'; 'Bacteriostatic agents … Avoid combination'

**Now:** Keep but mark each row '(not in FDA/UK/TW labels – unverified)'; add row 'Loop diuretics (furosemide, etacrynic acid) – ↑ renal risk – monitor renal function (UK SmPC 4.4)'

**Why:** None of these three interactions appears in any of the labels. They are plausible, so they are flagged rather than removed. The SmPC diuretic interaction is missing from the table.

**Sources:** US FDA label, Drug Interactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.4, §4.5 – https://www.medicines.org.uk/emc/product/10505/smpc

### A21 · Page body (unsupported)

**Was:** NOTES item 5 'Gonorrhea: Alternative single-dose regimen: Cefoxitin 2g IM + probenecid 1g PO'; item 8 '~35% now resistant'; item 7 'Protein binding ~70-80%', 'Vd ~0.16 L/kg'; BREASTFEEDING 'Estimated infant exposure <0.1%', '(LactMed, AAP, e-Lactancia)'

**Now:** Item 5: append '(older CDC regimen; not a current CDC 2021 gonorrhea recommendation – verify)'; item 8 '~35% now resistant' and 'Vd ~0.16 L/kg': mark 'source needed'; protein binding → '65-80% (UK SmPC 5.2)'; Breastfeeding: mark 'Estimated infant exposure <0.1%' as 'source needed (not in LactMed)' and cite LactMed (NBK501388) as the source for milk levels 0.05-5.6 mg/L

**Why:** None of these figures appears in the labels or in LactMed. LactMed gives milk levels of 0.05-5.6 mg/L but no infant-exposure percentage. SmPC §5.2 gives protein binding as 65-80%. I could not check the 2021 CDC gonorrhea text because cdc.gov is blocked, so the cefoxitin + probenecid regimen is flagged, not removed.

**Sources:** UK SmPC §5.2 Pharmacokinetic properties – https://www.medicines.org.uk/emc/product/10505/smpc; LactMed NBK501388, Drug Levels – https://www.ncbi.nlm.nih.gov/books/NBK501388/; CDC STI Treatment Guidelines 2021, PMID 34292926 (verified) – https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

### A22 · Page body (error)

**Was:** 'BRIEF SUMMARY TABLE FOR DATABASE' (repeats 'MAX 3-4g/d', 'CrCl <10: 500mg-1g q24-48h', 'divided q4-8h', 'TGA B1', 'B. fragilis resistance increasing (~35%)')

**Now:** REMOVE the summary table (AI-chat scaffold 'for database'; the properties hold this content)

**Why:** This is AI-chat output written to fill in the database. It repeats the errors in A1, A2, A3 and A19, so if it stays it will conflict with the corrected properties.

**Sources:** Ground rule: pasted AI-chat text may be removed; US FDA label Table 1/Table 2, Pediatric Patients – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

### A23 · Page body (minor)

**Was:** Toggle 'Cefoxitin for post-surgery infection prevention' (pasted AI answer with '[journals.asm+3]'-style citations; 'intra-operative re-dosing every 2–3 hours')

**Now:** Replace toggle content with: 'Prophylaxis (US label): 2g IV 30-60 min pre-incision, then 2g q6h ≤24h; C-section 2g at cord clamping (±2g at 4h, 8h). Intra-op redose q2h (ASHP/IDSA/SIS/SHEA 2013, PMID 23327981).' – or REMOVE

**Why:** This is a pasted AI-chat answer with Perplexity-style citations, and most of its sources are outside the hierarchy (Medscape, CHOC, Stanford, Wake Forest). The ASHP guideline gives a 2 h redosing interval, not 2-3 h. I verified the PubMed IDs it cites with esummary. 7011223, 2014087, 3912738 and 2129189 are real cefoxitin prophylaxis trials. 39780190 is only a study protocol on target-controlled infusion, not outcome evidence.

**Sources:** US FDA label, D&A – Prevention; CLINICAL STUDIES – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Bratzler DW et al. 2013, PMID 23327981 (verified) – https://pubmed.ncbi.nlm.nih.gov/23327981/; PMID 39780190 (verified: Trials 2025 study protocol) – https://pubmed.ncbi.nlm.nih.gov/39780190/

### A24 · Page body (minor)

**Was:** SIDE EFFECTS table header 'Common (1-10%)'

**Now:** 'Reported (labels give no frequencies)'

**Why:** No label gives frequencies. The SmPC lists every reaction as 'frequency not known', and the FDA label says only that local reactions are the most common.

**Sources:** UK SmPC §4.8 – https://www.medicines.org.uk/emc/product/10505/smpc; US FDA label, ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

### B1 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-50: 1-2g IV q8-12h<br>CrCl 10-29: 1-2g IV q12-24h<br>CrCl\<10: 500mg-1g IV q24-48h<br>HD: give after dialysis

**Now:** Loading 1-2g, then maintenance:<br>CrCl 30-50: 1-2g IV q8-12h<br>CrCl 10-29: 1-2g IV q12-24h<br>CrCl 5-9: 0.5-1g IV q12-24h<br>CrCl\<5: 0.5-1g IV q24-48h<br>(TW insert = US label)<br>HD: repeat loading 1-2g after each HD session, then maintenance as above<br>UK SmPC: LD 2g; CrCl 30-50: 2g q8-12h; 10-29: 2g q12-24h; no recommendation for CrCl \<10<br>CRRT: see below

**Why:** The entry merges the two lowest bands into one 'CrCl<10' band and gives q24-48h for it. The Cefmore insert (TW 3.3) and US Table 2 both split it: 9-5 mL/min gets 0.5-1 g q12-24h, and <5 gets 0.5-1 g q24-48h. As written, patients with CrCl 5-9 are under-dosed by up to half. The 1-2 g loading dose is also missing. For HD the label says the 1-2 g loading dose is repeated after each session; 'give after dialysis' does not say that. The TW insert gives only the maintenance table, with no LD or HD advice, so LD and HD come from the US label. The UK values are shown alongside, as the ground rules require.

**Sources:** Taiwan insert (Cefmore, 衛署藥製字第038843號) §3.3 特殊族群用法用量 renal table – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; US FDA label (WG Critical Care, DailyMed v8 2026) DOSAGE AND ADMINISTRATION – loading dose, hemodialysis paragraph, Table 2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC Renoxitin §4.2 Renal impairment – https://www.medicines.org.uk/emc/product/10505/smpc

### B2 · Renal dose, HD, CRRT (missing)

**Was:** (no CRRT line)

**Now:** CRRT (no label data): ICU pts on continuous RRT (UF ~2 L/h, Qb 250 mL/min): cefoxitin CL ≈ 2.38 L/h (≈ CrCl 27 mL/min); LD 2g then 6 g/24h continuous infusion achieved PK/PD target (100% fT>MIC, MIC up to 4-8 mg/L) – Chabert 2022, retrospective, n=8 on CRRT (PMID 36175707); TDM suggested

**Why:** No label covers CRRT. One verified PubMed PK study in ICU patients included 8 on CRRT (CVVH, UF 2000 mL/h, Qb 250 mL/min). In them, cefoxitin clearance was 2.38 L/h, which the authors equate to CrCl about 27 mL/min. Standard 6 g/24 h by continuous infusion reached the PK/PD target in CRRT and severe renal impairment, but not with normal renal function. The authors recommend TDM. PMID 36175707 was verified by esummary, and the CRRT details were read from the PMC full text (PMC9522958). Older intermittent-haemofiltration data (PMID 6628529, verified) found 62% of a dose removed per session.

**Sources:** Chabert P et al. Ann Intensive Care 2022;12:90, PMID 36175707 (verified esummary), Results 'Cefoxitin administration and PK' & Table 1 – https://pubmed.ncbi.nlm.nih.gov/36175707/; Garcia MJ et al. Eur J Clin Pharmacol 1983;25:395-8, PMID 6628529 (verified) – https://pubmed.ncbi.nlm.nih.gov/6628529/

### B3 · Pediatric dose (error)

**Was:** ≥3 mo: 80-160 mg/kg/day divided q4-8h (MAX 12g/day); Neonates: 35 mg/kg q8-12h

**Now:** ≥3 mo: 80-160 mg/kg/day divided into 4-6 doses (q4-6h); higher end for severe infection; MAX 12 g/day<br>Surgical prophylaxis (≥3 mo): 30-40 mg/kg/dose at the adult timings<br>Renal impairment: adjust dose/interval as for adults<br><3 mo: no FDA/TW label recommendation (safety not established). Neonatal 35 mg/kg q8-12h is off-label, source needed

**Why:** Both the US label and the Cefmore insert say 'divided into four to six equal doses' (分4～6次使用), which is q4-6h. 'q4-8h' allows 3 doses a day, which is not labelled. The hospital database has the same error. The US label also gives a paediatric prophylaxis dose (30-40 mg/kg) and says to apply the adult renal adjustment; the entry has neither. The neonatal dose is not in any label: FDA says no recommendation from birth to 3 months. See B4.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION – Pediatric Patients; Prevention – Pediatric Patients (3 months and older) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan insert §3.3 '治療三個月大或以上之小孩，80～160 mg/kg/日，分4～6次使用…每日最高劑量不可超過12 g' – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; UK SmPC §4.2 Paediatric population: insufficient data to recommend a posology in children up to 11 years – https://www.medicines.org.uk/emc/product/10505/smpc

### B4 · Pediatric dose (unsupported)

**Was:** Neonates: 35 mg/kg q8-12h (column) and body GA/PNA table (35 mg/kg q12h / q8h)

**Now:** Keep but tag as off-label with a source: 'Neonates (off-label; FDA: no recommendation <3 mo): 35 mg/kg q8-12h [source needed]'. Only PubMed neonatal study found: 30 mg/kg q8h (90 mg/kg/day) in infants <2 months, t½ 1.43 h (Regazzi 1983, PMID 6653646)

**Why:** No label supports this neonatal schedule. FDA: 'Safety and efficacy in pediatric patients from birth to 3 months of age have not yet been established… no recommendation is made.' It is plausible (it matches common neonatal references), so per the ground rules I flag it rather than remove it. The one verified PubMed neonatal PK/efficacy study used 90 mg/kg/day split q8h.

**Sources:** US FDA label PRECAUTIONS – Pediatric Use; DOSAGE AND ADMINISTRATION – Pediatric Patients – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Regazzi MB et al. Eur J Clin Pharmacol 1983;25:507-9, PMID 6653646 (verified esummary) – https://pubmed.ncbi.nlm.nih.gov/6653646/

### B5 · Adult dose (error)

**Was:** mild infection: 1g IV q6-8h (MAX 3-4g/d)<br>severe infection: 1g IV q4h or 2g IV q6-8h (MAX 6-8g/d)

**Now:** uncomplicated (pneumonia, UTI, skin): 1g IV q6-8h (3-4 g/day)<br>moderately severe / severe: 1g IV q4h or 2g IV q6-8h (6-8 g/day)<br>high-dose (e.g., gas gangrene): 2g IV q4h or 3g IV q6h (12 g/day = MAX)<br>Surgical prophylaxis: 2g IV 0.5-1h before incision, then 2g q6h ≤24h<br>C-section: 2g IV once at cord clamping (or 2g at clamping + 4h + 8h)<br>TW insert (Cefmore): IV or IM<br>UK SmPC: 2g q4-6h, max 12 g/day

**Why:** In the TW insert (§3.1 table) and US Table 1, 3-4 g and 6-8 g are the usual daily doses for each severity tier, not maximums. Labelling them 'MAX' suggests 8 g/day is the ceiling, but both labels give 12 g/day for infections needing higher doses (e.g., gas gangrene), and the UK SmPC also sets the maximum at 12 g/day. That third tier is missing. The labelled prophylaxis and caesarean-section doses are missing too; Notes has only the timing. The stocked Cefmore product is licensed for IM as well as IV (TW §3.1 '可供靜脈或肌肉注射'), while the US comparator is IV only.

**Sources:** Taiwan insert §3.1 用法用量 table (無倂發症 3～4 g; 中等嚴重或嚴重 6～8 g; 需要較高劑量(如氣性壞疽) 12 g, 每4小時2 g或每6小時3 g) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; US FDA label DOSAGE AND ADMINISTRATION Table 1; Prevention; Cesarean Section Patients – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.2 Posology 'Adults and adolescents: 2g every 4-6 hours to a maximum of 12g/day' – https://www.medicines.org.uk/emc/product/10505/smpc

### B6 · Indications (missing)

**Was:** Pelvic, SSTI, UTI, IAI, Pneumonia, Surgical prophylaxis

**Now:** Pelvic, SSTI, UTI, cUTI, IAI, Peritonitis, Pneumonia, Sepsis, Osteoarthritis, Surgical prophylaxis

**Why:** The US label lists (5) Septicemia and (6) Bone and joint infections (S. aureus), and both are missing. Elsewhere in this database 'Osteoarthritis' is the tag for bone and joint infection (e.g., Culin, Tatumcef, Teicod rows) and 'Sepsis' for septicaemia. The UK SmPC approves complicated UTI and pyelonephritis, so 'cUTI' qualifies (FDA OR UK rule). The six existing tags are all supported by the FDA label (LRTI incl. pneumonia, UTI, IAI, gynaecological incl. PID, SSSI, prophylaxis).

**Sources:** US FDA label INDICATIONS AND USAGE (1)–(7) and Prevention – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.1 (complicated UTI, pyelonephritis) – https://www.medicines.org.uk/emc/product/10505/smpc

### B7 · Coverage (minor)

**Was:** Staphylococcus

**Now:** MSSA (replace 'Staphylococcus')

**Why:** All three labels limit staphylococcal activity to methicillin-susceptible strains. US: 'S. aureus (methicillin-susceptible isolates only), S. epidermidis (methicillin-susceptible isolates only)'. TW: 'Methicillin/Oxacillin 抗藥性之 Staphylococci 菌株可被視為對 Cefoxitin 具抗藥性'. UK: 'Methicillin-Susceptible Staphylococcus'. The generic 'Staphylococcus' tag could be read as including MR-staph or CoNS. Other rows, including the sister cephamycin Cetazone (cefmetazole), use 'MSSA'.

**Sources:** US FDA label CLINICAL PHARMACOLOGY – Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan insert §15 其他【細菌學】 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; UK SmPC §5.1 – https://www.medicines.org.uk/emc/product/10505/smpc

### B8 · Coverage (missing)

**Was:** Staphylococcus, Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus, Bacteroides

**Now:** MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus, Neisseria, Bacteroides, Anaerobes

**Why:** All three labels list N. gonorrhoeae, including penicillinase-producing strains (TW 細菌學; US Microbiology and gynaecological indication; UK 5.1). Several non-Bacteroides anaerobes are also listed: Clostridium spp., Peptococcus niger and Peptostreptococcus spp. (US/TW), and C. perfringens, Fusobacterium, Prevotella and Veillonella (UK 5.1). Do NOT add Enterococcus, Enterobacter, Pseudomonas, Serratia or Acinetobacter: TW and UK list them as resistant.

**Sources:** Taiwan insert §15【細菌學】 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; US FDA label CLINICAL PHARMACOLOGY – Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §5.1 susceptible/resistant species – https://www.medicines.org.uk/emc/product/10505/smpc

### B9 · Side Effects (missing)

**Was:** LFT↑, thrombophlebitis

**Now:** thrombophlebitis, LFT↑, GI, hematologic, SJS/TEN, CNS, AKI

**Why:** Only 2 of the label's adverse-reaction groups are tagged. The rest are documented as follows:<br>- GI: diarrhoea, nausea/vomiting and pseudomembranous colitis (US ADVERSE REACTIONS; UK 4.8; TW 8.1.2 胃腸反應).<br>- Hematologic: eosinophilia, leukopenia, neutropenia, haemolytic anaemia, thrombocytopenia and bone-marrow depression (US; UK; TW 暫時性白血球減少及嗜中性白血球減少).<br>- SJS/TEN: TEN in the US label for cefoxitin itself; SJS/TEN as 極罕見之嚴重皮膚不良反應 in TW 8.1.1; TEN in UK 4.8.<br>- CNS: encephalopathy and seizures, especially in renal impairment or overdose (UK 4.4/4.8; US class statement on seizures).<br>Optionally add 'AKI': interstitial nephritis and rare acute renal failure (US; UK 4.8).

**Sources:** US FDA label ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.4 Risk of encephalopathy, §4.8 – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan insert §8.1.1–8.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### B10 · Drug Interactions (unsupported)

**Was:** Aminoglycosides (↑nephrotoxicity), probenecid (↑levels), warfarin (↑INR), bacteriostatic agents (antagonism)

**Now:** Aminoglycosides (↑nephrotoxicity), loop diuretics – furosemide/etacrynic acid (monitor renal function), probenecid (↑levels), warfarin (↑INR), bacteriostatic agents (antagonism – not in labels, source needed)

**Why:** Three of the four interactions are label-supported:<br>- Aminoglycosides: US Drug Interactions; UK 4.4.<br>- Probenecid: US Clinical Pharmacology; TW §11.<br>- Warfarin/INR: UK 4.5.<br>'Bacteriostatic agents (antagonism)' appears in no label (TW §7 says 目前尚無資訊), so I flag it rather than delete it. Missing and label-supported: renal monitoring with furosemide or etacrynic acid (UK 4.4 'Concurrent treatment with diuretics or aminoglycosides').

**Sources:** US FDA label PRECAUTIONS – Drug Interactions; CLINICAL PHARMACOLOGY (probenecid) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.4, §4.5 – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan insert §7, §11 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### B11 · Notes (missing)

**Was:** Surgical prophylaxis timing: Administer 30-60 minutes before incision; discontinue within 24 hours<br>PID regimen (CDC): Cefoxitin 2g IV q6h + doxycycline 100mg PO/IV q12h

**Now:** (keep existing two lines) +<br>Intra-op redose q2h for long procedures (ASHP/IDSA/SIS/SHEA 2013)<br>ESBL-E: cephamycins NOT suggested (IDSA AMR Guidance 2026); limited ICU data used LD 2g + continuous infusion ≥6 g/day with MIC/TDM; cephamycin resistance emerged in 32% of ICU pts, associated with underdosing (Chabert 2022)<br>AmpC-E (Enterobacter cloacae, Citrobacter freundii, etc.): intrinsically resistant; cefoxitin is a potent AmpC inducer (IDSA 2026)<br>B. fragilis group: resistance concentrated in non-fragilis species (Taiwan 2002: B. thetaiotaomicron 65% R vs B. fragilis 4%); avoid empiric use for serious anaerobic infection (ATLAS 2007-2020)<br>Lab: falsely ↑ creatinine (Jaffé) if drawn \<2h post-dose; false+ urine glucose (Clinitest)

**Why:** The two existing lines are correct. Timing and ≤24 h match the US label (Prevention). The PID regimen matches CDC 2021 (PMID 34292926, verified; the CDC website was unreachable, 403). The proposed additions and their sources:<br>- Intra-op redosing every 2 h: ASHP 2013 guideline.<br>- ESBL-E: IDSA AMR Guidance (July 30, 2026), Q1.6, does not suggest cephamycins for ESBL-E 'until more clinical outcomes data… and optimal dosing has been defined'.<br>- AmpC-E: the same guidance says cephamycins are potent ampC inducers and AmpC-E are intrinsically resistant.<br>- Underdosing and resistance: Chabert 2022 found cephamycin resistance emerged in 32% of ICU patients, associated with underdosage.<br>- Bacteroides: Taiwan data (Teng 2002) show 4% resistance in B. fragilis but 31-65% in non-fragilis B. fragilis-group species; ATLAS 2007-2020 advises avoiding empiric cefoxitin.<br>- Lab interference: US Drug/Laboratory Test Interactions; UK 4.4.

**Sources:** IDSA 2026 Guidance on Treatment of AMR Gram-Negative Infections, Question 1.6 and AmpC-E section – https://www.idsociety.org/practice-guideline/amr-guidance/; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 (verified), Table 1 – https://pubmed.ncbi.nlm.nih.gov/23327981/; Chabert P et al. Ann Intensive Care 2022, PMID 36175707 (verified) – https://pubmed.ncbi.nlm.nih.gov/36175707/; Teng LJ et al. Antimicrob Agents Chemother 2002;46:2908-13, PMID 12183246 (verified) – https://pubmed.ncbi.nlm.nih.gov/12183246/; Wu PH et al. Int J Antimicrob Agents 2023;62:106822, PMID 37088437 (verified) – https://pubmed.ncbi.nlm.nih.gov/37088437/; Workowski KA et al. CDC STI Treatment Guidelines 2021, MMWR Recomm Rep 70(4), PMID 34292926 (verified) – https://pubmed.ncbi.nlm.nih.gov/34292926/; US FDA label Drug/Laboratory Test Interactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

### B12 · Pregnancy (minor)

**Was:** Use if clearly needed and benefits outweigh risks. <br>Commonly used for surgical prophylaxis in cesarean section.

**Now:** No FDA letter category (retired). Rat/mouse studies at 1-7.5× MRHD: no teratogenicity (slight ↓ fetal weight); no adequate human studies – use only if clearly needed (FDA). UK SmPC: large amount of clinical data shows no malformative or feto/neonatal toxicity.<br>FDA-labelled for C-section prophylaxis (given after cord clamping).

**Why:** The current text is consistent with the labels and correctly has no letter category, so this is minor. 'Commonly used' is not a label statement. The label indication is C-section prophylaxis given after the cord is clamped, so it is not a fetal-exposure safety claim. The UK SmPC's human-data statement is the strongest reassurance available and is missing. The TW insert still says 'B級'; do not copy it.

**Sources:** US FDA label PRECAUTIONS – Pregnancy; DOSAGE AND ADMINISTRATION – Cesarean Section Patients – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan insert §6.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### B13 · Breastfeeding (minor)

**Was:** Compatible

**Now:** Compatible – low milk levels (≤5.6 mg/L, mostly undetectable); acceptable in nursing mothers; monitor infant for diarrhoea/thrush (LactMed 2022). Note: UK SmPC advises stopping breastfeeding; FDA/TW: use with caution.

**Why:** 'Compatible' is correct per LactMed: 'Cefoxitin is acceptable in nursing mothers'. However, the labels differ: UK SmPC 4.6 says 'Breast-feeding should be discontinued… to prevent any allergic reactions in the infant', and the US label and TW §6.2 say to use with caution (請小心使用). The reader should see that LactMed is the basis for 'Compatible'.

**Sources:** LactMed Cefoxitin NBK501388 (rev. 2022-09-19), Summary of Use during Lactation; Drug Levels – https://www.ncbi.nlm.nih.gov/books/NBK501388/; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/10505/smpc; US FDA label Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

### B14 · Category (minor)

**Was:** 2nd cephalosporin

**Now:** 2nd cephalosporin (cephamycin)

**Why:** UK SmPC 5.1 classes cefoxitin as a 'second-generation cephalosporin' (ATC J01DC01), so the current value is correct. The Cefmore insert §10.1 calls it a cephamycin (β-Lactam Cephamycin C 新型抗生素). Adding 'cephamycin' explains its anaerobic and ESBL-stability profile and matches the page body.

**Sources:** UK SmPC §5.1 – https://www.medicines.org.uk/emc/product/10505/smpc; Taiwan insert §10.1 作用機轉 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F

### B15 · Monitor (minor)

**Was:** renal, LFT, CBC

**Now:** renal, LFT, CBC, PT/INR

**Why:** renal, LFT and CBC are correct: the US label says 'periodic assessment of… renal, hepatic, and hematopoietic' function during prolonged therapy. Optional: add PT/INR for patients on oral anticoagulants. UK SmPC 4.5 lists 'certain cephalosporins' among the antibiotics that raise INR, and the entry already lists the warfarin interaction.

**Sources:** US FDA label PRECAUTIONS – Laboratory Tests – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.5 – https://www.medicines.org.uk/emc/product/10505/smpc

### B16 · Page body (error)

**Was:** 'Let me search for comprehensive evidence-based information on Cefoxitin.'; 'Your current coverage is **mostly correct** but needs additions:'; '*(Your current info is correct - minor formatting)*'; and the '## BRIEF SUMMARY TABLE FOR DATABASE' section

**Now:** REMOVE (the three chat sentences and the 'Brief summary table for database' section)

**Why:** These are pasted AI-chat text addressed to the user; the ground rules allow removing such text. The summary table also repeats errors fixed elsewhere: CrCl<10 q24-48h, 'divided q4-8h', TGA B1 and the '~35%' B. fragilis figure.

**Sources:** Ground rule: remove pasted AI-chat text; content contradicted per B1/B3/B18 sources

### B17 · Page body (error)

**Was:** RENAL table rows '<10: 500mg-1g IV q24-48h' and 'CRRT: 1-2g IV q8-12h (varies by effluent rate…)'

**Now:** Replace the <10 row with '5-9 \| 0.5-1g IV q12-24h' and '<5 \| 0.5-1g IV q24-48h'; add 'Loading dose \| 1-2g IV, then maintenance per table'; HD row → 'Loading 1-2g after each HD; maintenance per CrCl table (TW 仿單 = US label)'; CRRT row → 'No label data. ICU continuous RRT (UF ~2 L/h): LD 2g then 6 g/24h continuous infusion reached PK/PD target (Chabert 2022, PMID 36175707); consider TDM'

**Why:** The body's renal table has the same merged-band error as the column (TW §3.3; US Table 2). Its CRRT dose (1-2 g q8-12h) has no source. The only CRRT PK data found (Chabert 2022) used a 2 g loading dose then 6 g/24 h by continuous infusion.

**Sources:** Taiwan insert §3.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; US FDA label Table 2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; PMID 36175707 – https://pubmed.ncbi.nlm.nih.gov/36175707/

### B18 · Page body (error)

**Was:** NO Coverage list: 'Most Clostridium spp. except C. perfringens'

**Now:** Replace with 'Clostridioides difficile'; add 'Enterococcus (most strains)', 'AmpC producers (Enterobacter, C. freundii, Serratia)', 'Acinetobacter', 'Listeria'

**Why:** The labels contradict this line: the US label lists Clostridium spp. as active in clinical infections (IAI, gynaecological and SSSI indications), and TW 細菌學 lists Clostridium spp. as susceptible. The UK SmPC lists only C. difficile among resistant anaerobes. The no-coverage list also omits enterococci, which TW says are 'Enterococci菌株大多具抗藥性' and UK lists as resistant, plus the UK 5.1 resistant gram-negatives (Acinetobacter, C. freundii, Serratia marcescens) and Listeria.

**Sources:** US FDA label Microbiology and INDICATIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Taiwan insert §15【細菌學】 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038843%E8%99%9F; UK SmPC §5.1 RESISTANT SPECIES – https://www.medicines.org.uk/emc/product/10505/smpc

### B19 · Page body (unsupported)

**Was:** 'Bacteroides fragilis (~65-85%)'; 'Recent surveillance shows only ~65% susceptibility'; Notes #8 '~35% now resistant'

**Now:** 'B. fragilis group: resistance concentrated in non-fragilis species – Taiwan 2002: B. fragilis 4% R vs non-fragilis B. fragilis group 31-65% R (B. thetaiotaomicron 65%) (PMID 12183246); ATLAS 2007-2020: lower cefoxitin susceptibility in non-fragilis Bacteroides, avoid empiric cefoxitin for anaerobic infection (PMID 37088437). FDA label: B. fragilis-group eradication 70-80% in IAI trials.'

**Why:** The figures have no source and attribute the resistance to the wrong organism. Verified Taiwan data show B. fragilis itself was only 4% resistant, while non-fragilis species were 31-65% resistant. The FDA Clinical Studies section gives 70-80% eradication for B. fragilis group. The clinical message (avoid for serious anaerobic infection) is supported by ATLAS.

**Sources:** Teng LJ et al. AAC 2002, PMID 12183246 (verified) – https://pubmed.ncbi.nlm.nih.gov/12183246/; Wu PH et al. IJAA 2023, PMID 37088437 (verified) – https://pubmed.ncbi.nlm.nih.gov/37088437/; US FDA label CLINICAL STUDIES – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

### B20 · Page body (unsupported)

**Was:** Notes #5 'Gonorrhea: Alternative single-dose regimen: Cefoxitin 2g IM + probenecid 1g PO'

**Now:** Gonorrhea: Cefoxitin 2g IM + probenecid 1g PO single dose has been effective for uncomplicated urogenital/anorectal gonorrhea in the past, but offers no advantage over ceftriaxone and is not a CDC-listed alternative regimen (CDC 2021); pharyngeal efficacy uncertain. Same cefoxitin/probenecid dose is part of the CDC outpatient PID regimen (+ doxycycline + metronidazole × 14 d).

**Why:** I believe the current CDC gonorrhoea guidance (2020 update, PMID 33332296; 2021 STI guidelines, PMID 34292926; both verified by esummary) does not list cefoxitin/probenecid as an alternative for uncomplicated gonorrhoea. The listed alternatives are gentamicin + azithromycin and cefixime 800 mg. In 2021 cefoxitin + probenecid appears only in the outpatient PID regimen. Caveat: the CDC website returned 403 from this environment, so this is unconfirmed, and the PMIDs above confirm only that the documents exist. Re-check against the CDC text before editing.

**Sources:** St Cyr S et al. MMWR 2020;69:1911-6, PMID 33332296 (verified) – https://pubmed.ncbi.nlm.nih.gov/33332296/; Workowski KA et al. MMWR Recomm Rep 2021;70(4), PMID 34292926 (verified) – https://pubmed.ncbi.nlm.nih.gov/34292926/

### B21 · Page body (unsupported)

**Was:** DRUG INTERACTIONS table rows 'Aztreonam – cefoxitin induces β-lactamases that may inactivate aztreonam – Avoid combination' and 'Live vaccines (BCG, cholera) – ↓ efficacy'; row 'Bacteriostatic agents… Avoid combination'

**Now:** Flag as 'not in labels – source needed'; add row 'Loop diuretics (furosemide, etacrynic acid) – ↑ nephrotoxicity risk – monitor renal function (UK SmPC 4.4)'

**Why:** None of these rows appears in the US, UK or TW label (TW §7: 目前尚无資訊). The induction mechanism is plausible: IDSA calls cephamycins potent ampC inducers. But 'avoid combination with aztreonam' is not a guideline recommendation I could find, so I flag rather than remove. The label-supported loop-diuretic interaction is missing.

**Sources:** UK SmPC §4.4 – https://www.medicines.org.uk/emc/product/10505/smpc; IDSA AMR Guidance 2026, AmpC-E section – https://www.idsociety.org/practice-guideline/amr-guidance/

### B22 · Page body (minor)

**Was:** '**AU TGA Category B1** \| **US FDA: Not formally assigned (PLLR format)**' and summary row 'TGA B1'

**Now:** 'No FDA letter category (retired). Current US cefoxitin label is in the older non-PLLR format (Pregnancy subsection: use only if clearly needed). UK SmPC: large amount of clinical data shows no malformative or feto/neonatal toxicity. (AU TGA B1 – not verified against FDA/UK/TW sources)'

**Why:** TGA is outside the agreed source hierarchy, and a letter category should not be the headline. The 'PLLR format' statement is wrong: the WG Critical Care label (v8, 2026) still uses the old PRECAUTIONS 'Pregnancy' subsection, with no 8.1 Risk Summary. The animal-data bullets in the body (rat/mouse up to 7.5×, rabbit abortions) match the US label.

**Sources:** US FDA label PRECAUTIONS – Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/10505/smpc

### B23 · Page body (unsupported)

**Was:** Toggle 'Cefoxitin for post-surgery infection prevention' (Perplexity-style answer with '[journals.asm+3]' citations), incl. 'intra-operative re-dosing every 2–3 hours'

**Now:** Replace toggle content with: 'Prophylaxis (FDA label): 2g IV 0.5-1h before incision, then 2g q6h for ≤24h (GI surgery, vaginal/abdominal hysterectomy); C-section: 2g IV at cord clamping ± 2g at 4h and 8h; pediatric ≥3 mo 30-40 mg/kg. Intra-op redose every 2h (ASHP/IDSA/SIS/SHEA 2013, PMID 23327981).'

**Why:** This is pasted AI-chat output with aggregator-style citations (medscape, hospital PDFs, a 2016 OFID abstract). The ground rules allow removing it. The correct content is kept in the replacement, citing the label and a verified guideline. ASHP 2013 gives a 2 h redosing interval for cefoxitin, not '2–3 hours'.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION – Prevention; CLINICAL STUDIES – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7; Bratzler DW et al. AJHP 2013, PMID 23327981 (verified) – https://pubmed.ncbi.nlm.nih.gov/23327981/

### B24 · Page body (minor)

**Was:** Pharmacokinetics: 'Protein binding: ~70-80%'; 'Vd: ~0.16 L/kg'; Breastfeeding: 'Estimated infant exposure: <0.1% of maternal dose'; Pediatric table '≥3 months: 80-160 mg/kg/day IV/IM divided q4-8h'

**Now:** 'Protein binding 65-80% (UK SmPC 5.2)'; Vd and '<0.1% infant exposure' → mark 'source needed'; pediatric row → 'divided into 4-6 doses (q4-6h)'

**Why:** Several small body details are wrong or unsourced:<br>- Protein binding: UK SmPC 5.2 gives 65-80%.<br>- Vd 0.16 L/kg: in no source here.<br>- Infant exposure <0.1%: not in LactMed. LactMed gives milk levels of 0.05-5.6 mg/L, which matches the body.<br>- Paediatric q4-8h: same error as B3.<br>The rest of the body PK is correct per the US label and TW §11: t½ 41-59 min, 85% excreted unchanged, 53.8 mg (2.3 mEq) Na/g.

**Sources:** UK SmPC §5.2 – https://www.medicines.org.uk/emc/product/10505/smpc; LactMed NBK501388 – https://www.ncbi.nlm.nih.gov/books/NBK501388/; US FDA label DESCRIPTION/CLINICAL PHARMACOLOGY – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=658a0dc6-6da5-44dc-94f2-1211619297f7

## Verified correct as written

- Mechanism: 'Binds PBPs → inhibits cell wall synthesis; 7α-methoxy group provides β-lactamase stability'. Supported by FDA Microbiology (inhibits cell wall synthesis; active against penicillinases and cephalosporinases) and Taiwan 仿單 §10.1 (7-OCH3 methoxy group resists β-lactamase).
- Category: '2nd cephalosporin'. UK SmPC §5.1 lists it under 'Second-generation cephalosporins, ATC J01DC01', and the Taiwan insert calls it a cephamycin.
- Hepatic dose: 'No adjustment required'. No label has hepatic dosing. About 85% is excreted unchanged by the kidney (FDA Clin Pharm), and the SmPC §5.2 says there is 'no significant biotransformation'.
- Adult dose numbers for the uncomplicated and severe tiers (1 g q6-8h; 1 g q4h or 2 g q6-8h) match FDA Table 1 and Taiwan §3.1. Only the 'MAX' wording and the missing 12 g tier are wrong (A2).
- Renal bands CrCl 30-50 (1-2 g q8-12h) and 10-29 (1-2 g q12-24h) match FDA Table 2 and the Taiwan insert.
- Pediatric ≥3 mo daily dose of 80-160 mg/kg/day and maximum of 12 g/day match the FDA label and the Taiwan insert.
- Indications already tagged (Pelvic, SSTI, UTI, IAI, Pneumonia, Surgical prophylaxis) are all FDA-labelled.
- Coverage tags already present (Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus, Bacteroides) are supported by FDA Microbiology, Taiwan §15 and SmPC §5.1. Pseudomonas, Enterobacter and Enterococcus are correctly absent.
- Monitor tags renal, LFT and CBC are supported by FDA Laboratory Tests (renal, hepatic, hematopoietic during prolonged therapy).
- Side Effects tags thrombophlebitis and LFT↑ are supported by FDA Local Reactions and Liver Function, and by Taiwan §8.1.2.
- Drug Interactions: aminoglycosides (FDA Drug Interactions), probenecid (FDA Clinical Pharmacology; Taiwan §11) and warfarin/INR (SmPC §4.5) are supported.
- Pregnancy property is consistent with the FDA label ('only if clearly needed') and contains no retired letter category. Caesarean prophylaxis is an FDA-labelled indication.
- Breastfeeding 'Compatible' matches LactMed NBK501388 ('Cefoxitin is acceptable in nursing mothers'; low milk levels).
- Notes: prophylaxis timing of 30-60 min before incision and stopping within 24 h matches FDA D&A – Prevention ('one-half to one hour before… stopped within 24 hours').
- Body: PK figures are correct per FDA Clin Pharm (half-life 41-59 min, ~85% unchanged in urine, penetration into pleural and joint fluid and bile, probenecid raises levels).
- Body: lab interferences are correct per FDA and SmPC (Jaffé creatinine with samples drawn ≥2 h after dose, Clinitest, 17-OHCS).
- Body: sodium content of 53.8 mg (2.3 mEq) per g matches the FDA Description.
- Body: benzyl-alcohol diluent caution and the statement that safety is not established under 3 months match the FDA label.
- Body: anti-chlamydial cover needed for PID matches FDA Indications (4) and D&A.
- Body: animal reproduction data match FDA Pregnancy (no teratogenicity in rats/mice up to 7.5× human dose, slight drop in fetal weight, rabbit abortions attributed to gut flora). Placental transfer matches SmPC §5.2 (umbilical cord and amniotic fluid).
- Body: milk levels of 0.05-5.6 mg/L and occasional diarrhoea/thrush with cephalosporins match LactMed.
- Body: serious adverse effects (anaphylaxis, C. difficile colitis, SJS/TEN, haemolytic anaemia, agranulocytosis, interstitial nephritis, seizures in renal impairment) are supported by the FDA ADR section and SmPC §4.8.
- PMIDs cited in the body toggle exist and match their titles (verified via E-utilities esummary): 7011223, 2014087, 39780190, 3912738, 2129189.
- Product identity: CEF08 → NHI AB38843212 → 衛署藥製字第038843號 Cefmore (瑞士藥廠). I checked this myself on the hospital page and the TFDA insert text.
- DailyMed comparator: setid 658a0dc6-6da5-44dc-94f2-1211619297f7 is at v8, published Aug 26, 2026 (checked on the DailyMed history API). IV-only labelling.
- Adult dose numbers: 1 g q6-8h for uncomplicated infection, and 1 g q4h or 2 g q6-8h for moderately severe/severe, match TW §3.1 and US Table 1. Only the 'MAX' wording and the missing 12 g/day tier are wrong (B5).
- Renal bands CrCl 30-50 (1-2 g q8-12h) and 10-29 (1-2 g q12-24h) match TW §3.3 and US Table 2.
- Paediatric 80-160 mg/kg/day for ≥3 months with max 12 g/day matches US and TW (only the dosing frequency is wrong, B3).
- Hepatic dose 'No adjustment required': no label gives a hepatic adjustment. UK SmPC 5.2 says there is no significant biotransformation and elimination is unchanged via the kidney; US says 85% is excreted unchanged in urine.
- Mechanism: 'Binds PBPs → inhibits cell wall synthesis; 7α-methoxy group provides β-lactamase stability' matches US Microbiology and TW §10.1 (7位 –OCH3 resists β-lactamase).
- Existing Indications tags (Pelvic, SSTI, UTI, IAI, Pneumonia, Surgical prophylaxis) are all in the FDA label.
- Existing Coverage tags Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus and Bacteroides are supported by the US, TW and UK spectra.
- Side-effect tags LFT↑ and thrombophlebitis are supported by US ADVERSE REACTIONS, TW 8.1.2 and UK 4.8.
- Monitor tags renal, LFT and CBC match US PRECAUTIONS – Laboratory Tests.
- Drug interactions: aminoglycoside nephrotoxicity (US), probenecid raising levels (US Clin Pharm; TW §11) and warfarin/INR (UK 4.5) are supported.
- Breastfeeding 'Compatible' matches LactMed (rev. 2022-09-19): 'acceptable in nursing mothers'.
- Pregnancy column correctly has no letter category; 'use if clearly needed' matches US PRECAUTIONS – Pregnancy and UK 4.6.
- Notes: surgical prophylaxis 30-60 min pre-incision and stop within 24 h match US Prevention. The PID regimen (cefoxitin 2 g IV q6h + doxycycline 100 mg q12h) is consistent with CDC 2021 (PMID 34292926 verified exists; CDC site unreachable, 403).
- Body: half-life 41-59 min, 85% excreted unchanged, sodium 53.8 mg (2.3 mEq)/g, pleural/joint fluid and bile penetration, and the Jaffé creatinine, Porter-Silber and Clinitest interferences all match the US label.
- Body: no activity against MRSA, P. aeruginosa or most E. cloacae (TW 細菌學; UK 5.1), and no Chlamydia trachomatis activity, so add anti-chlamydial cover for PID (US label).
- Body: avoid benzyl-alcohol diluent in small infants matches US DOSAGE AND ADMINISTRATION.
- Body side-effects table (thrombophlebitis, diarrhoea, nausea, rash/urticaria, eosinophilia, transient LFT rise, fever, anaphylaxis, C. difficile, TEN, haemolytic anaemia, agranulocytosis, interstitial nephritis, seizures) is supported by US ADVERSE REACTIONS and UK 4.8.
- Body animal pregnancy data (rat/mouse 1-7.5× MRHD, slight fetal-weight decrease; rabbit abortion from flora change) match US PRECAUTIONS – Pregnancy.
- Body breastfeeding milk levels 0.05-5.6 mg/L match the LactMed Drug Levels section.

## Apply log

- Renal dose, HD, CRRT: merged loading dose + TW/US table (30-50, 10-29, 5-9, <5), HD loading after each session, UK SmPC values, CRRT Chabert 2022 data + TDM
- Adult dose: 3-4 / 6-8 / 12 g/day tiers, surgical prophylaxis, C-section, TW IV/IM, UK SmPC max
- Pediatric dose: >=3 mo 80-160 mg/kg/day in 4-6 doses max 12 g, prophylaxis 30-40 mg/kg, renal adjust, benzyl alcohol, <3 mo no label rec, neonatal 35 mg/kg off-label [source needed] + Regazzi 1983 PMID 6653646
- Indications: Pelvic, SSTI, UTI, cUTI, IAI, Peritonitis, Pneumonia, Sepsis, Osteoarthritis, Surgical prophylaxis
- Coverage: Staphylococcus replaced by MSSA; added Neisseria, Anaerobes
- Side Effects: LFT↑, thrombophlebitis, GI, hematologic, SJS/TEN, CNS, AKI
- Monitor: renal, LFT, CBC, PT/INR
- Category: 2nd cephalosporin (cephamycin)
- Drug Interactions: aminoglycosides (no mixing), loop diuretics, probenecid, warfarin/oral anticoagulants, bacteriostatic agents flagged unverified; lab interference line
- Notes: expanded prophylaxis (+peds, intra-op redose q2h), C-section, PID with anti-chlamydial note, ESBL-E/AmpC-E (IDSA 2026), B. fragilis group, not for meningitis, Na content, lab interference
- Pregnancy: no FDA letter category, US label animal data, UK SmPC human data, C-section labelled
- Breastfeeding: Compatible per LactMed 2022 with UK SmPC/FDA/TW caveats
- Renewed date set to 2026-10-05 (date only)
- Body: removed 3 pasted AI-chat sentences
- Body: renal table <10 row replaced by 5-9 and <5 rows; added Loading dose row; HD and CRRT rows replaced
- Body: pediatric neonatal rows tagged off-label with PMID 6653646; >=3 months row -> 4-6 divided doses (q4-6h), max 12 g/day
- Body: NO-coverage list - Clostridium line replaced with C. difficile resistant (UK SmPC); added Enterococcus, AmpC producers, Acinetobacter, Listeria; B. fragilis % marked unsourced; B. fragilis note replaced with Teng 2002/ATLAS/FDA text
- Body: Pregnancy header replaced with no-letter-category/non-PLLR/UK SmPC text, TGA B1 flagged unverified
- Body: drug interaction rows (bacteriostatic, aztreonam, live vaccines) flagged not in labels; loop diuretics row added
- Body: Notes item 5 gonorrhea rewritten (CDC 2021); item 8 ~35% and Vd marked source needed; protein binding 65-80% (UK SmPC 5.2); breastfeeding milk levels cited to LactMed, <0.1% exposure marked source needed
- Body: Brief Summary Table for database removed
- Body: toggle content replaced with FDA-label prophylaxis + ASHP 2013 redose text (old AI-chat content and link list removed)
- Body: side-effects header 'Common (1-10%)' -> 'Reported (labels give no frequencies)'
- Body: References section appended (TW 仿單, FDA DailyMed, UK SmPC, LactMed, IDSA 2026, Bratzler 2013, CDC 2021, St Cyr 2020, Chabert 2022, Garcia 1983, Regazzi 1983, Teng 2002, Wu 2023)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
