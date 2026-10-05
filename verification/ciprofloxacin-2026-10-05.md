# Verification: Seforce (ciprofloxacin)

- **Notion entry:** [Seforce (ciprofloxacin)](https://app.notion.com/20ec496dfff180f38405cf1ee5733bf6)
- **Hospital codes:** SEF02 (Seforce 400 mg/200 mL), CIN02 (Cinolone tab 250 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/ciprofloxacin.json` (plus any `sources/ciprofloxacin-taiwan-insert-*.txt`)

## Product and sources

The hospital stocks two ciprofloxacin products. SEF02 is Seforce 400 mg/200 mL IV (南光 賜保欣注射液 2 mg/mL, ciprofloxacin lactate, 衛署藥製字第044809號, NHI AC44809263). CIN02 is Cinolone 250 mg film-coated tablet (信東 信諾隆膜衣錠, 衛署藥製字第038747號, NHI AC38747100). Sources used: (1) US FDA label for Ciprofloxacin Injection in D5W [Sagent], setid f406e796-17d9-4465-b8a7-00d966a4ba74 v4 (Aug 17, 2026), https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74. (2) US FDA label for Ciprofloxacin Tablets [Aurobindo], setid 6a935846-3c97-4517-bc4e-2377f673285e (revised 01/2025), https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e, fetched for oral, pediatric oral and chelation data. (3) UK SmPC for Ciprofloxacin 250 mg film-coated tablets (rev. 29/05/2026), https://www.medicines.org.uk/emc/product/7256/smpc. (4) LactMed NBK501583 (rev. 2024-08-15). (5) Taiwan inserts (仿單) for Seforce and Cinolone on mcp.fda.gov.tw.

## Agreed fixes applied in Notion (49)

### A1 · Pregnancy (error)

**Was:** Category C; avoid if alternatives exist; CDC preferred for anthrax in pregnancy

**Now:** No FDA letter category (PLLR format). US label 8.1: decades of human data (case reports, case-control and observational studies) have not identified a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes. UK SmPC 4.6 and Seforce/Cinolone 仿單 6.1: as a precaution, avoid in pregnancy (cartilage damage in juvenile animals); 仿單：懷孕期間不建議使用. CDC (Meaney-Delman 2014, PMID 24457117): ciprofloxacin is preferred for anthrax PEP/treatment in pregnancy.

**Why:** The ground rules say not to present a letter category as current. The FDA label 8.1 has only a Risk Summary. The UK SmPC and both Taiwan inserts advise avoiding use, so the current text loses the label wording. The CDC anthrax statement is guideline-level, so it now has a verified PMID (esummary checked: Emerg Infect Dis 2014;20(2), Meaney-Delman D).

**Sources:** US FDA label (Sagent IV) 8.1 Pregnancy, Risk Summary - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.6 Pregnancy and lactation ('As a precautionary measure, it is preferable to avoid the use of ciprofloxacin during pregnancy') - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 6.1 懷孕 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Meaney-Delman D et al. Emerg Infect Dis 2014;20(2) PMID 24457117 - https://pubmed.ncbi.nlm.nih.gov/24457117/

### A2 · Notes (error)

**Was:** ... contraindicated in myasthenia gravis; ...

**Now:** Replace 'contraindicated in myasthenia gravis' with 'AVOID in myasthenia gravis (boxed warning; 衛福部警語：重症肌無力患者應避免使用)'. Labelled contraindications are only hypersensitivity to quinolones and concomitant tizanidine.

**Why:** The US boxed warning and 5.5 say 'Avoid ciprofloxacin in patients with known history of myasthenia gravis'. The UK SmPC 4.4 says 'use with caution', and the Taiwan insert says 應避免使用. Section 4 Contraindications in the US, UK and Taiwan labels lists only hypersensitivity and tizanidine.

**Sources:** US FDA label (Sagent IV) Boxed Warning, 4 Contraindications, 5.5 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.3 and 4.4 - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 4 禁忌 / 衛生福利部公告之警語 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A3 · Page body (error)

**Was:** SIDE EFFECTS > FDA BLACK BOX WARNINGS table lists 'Myasthenia Gravis Exacerbation … CONTRAINDICATED in myasthenia gravis' and 'Aortic Aneurysm/Dissection'; CLINICAL NOTES > Absolute Contraindications lists 'Myasthenia gravis' and 'History of tendon disorders with fluoroquinolones'; BRIEF SUMMARY Notes 'CONTRAINDICATED in myasthenia gravis'

**Now:** Boxed warning table: change MG row to 'AVOID in known myasthenia gravis'. Move 'Aortic Aneurysm/Dissection' out of the boxed-warning table into 'Serious Adverse Effects' (US W&P 5.9; UK SmPC 4.4 also adds aortic/mitral valve regurgitation). Absolute Contraindications table: keep only 'Hypersensitivity to ciprofloxacin/any quinolone/excipients' and 'Concurrent tizanidine'. Move 'Myasthenia gravis' and 'History of FQ-related tendon disorder / serious FQ adverse reaction' to Relative Contraindications/Cautions as 'avoid'.

**Why:** The US boxed warning covers tendinitis/rupture, peripheral neuropathy, CNS effects and MG exacerbation, plus the reserve-use statement. Aortic aneurysm is W&P 5.9 and is not boxed. The contraindications sections (US 4, UK 4.3, Taiwan 4) list only hypersensitivity and tizanidine. MG and prior tendon disorders are 'avoid' (US 5.2, 5.5) or 'should generally not be used' (UK 4.4).

**Sources:** US FDA label (Sagent IV) Boxed Warning, 4, 5.2, 5.5, 5.9 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.3, 4.4 (Aortic aneurysm and dissection, and heart valve regurgitation/incompetence) - https://www.medicines.org.uk/emc/product/7256/smpc

### A4 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-49: q12h<br>CrCl 5-29: q18-24h<br>HD/PD: q24h post-HD<br>CRRT: 200-400mg IV q8-12h

**Now:** <span color="green">`IV`</span> (Seforce 仿單): CrCl 31–60 (SCr 1.4–1.9) → max 800 mg/day; CrCl <30 (SCr ≥2.0) → max 400 mg/day (US IV label: CrCl >30 usual dose; 5–29 → 200–400 mg q18–24h)<br>HD: same daily max, give after HD; CAPD: 50 mg/L dialysate IP q6h<br><span color="blue">`PO`</span> (Cinolone 仿單): CrCl 31–60 → max 1000 mg/day; CrCl <30 incl. HD → max 500 mg/day; CAPD 500 mg/day (US oral: CrCl 30–50 250–500 mg q12h; 5–29 250–500 mg q18h; HD/PD 250–500 mg q24h after dialysis. UK SmPC: 30–60 250–500 mg q12h; <30/HD/PD 250–500 mg q24h, after HD)<br>CRRT (no label; PK studies): 400 mg IV q12h; consider q8h for difficult-to-treat GNB / high body weight (Spooner 2011 PMID 21816053; Roger 2016 PMID 26957490)

**Why:** The current entry gives frequencies with no doses and mixes the US oral and IV tables. The 30–49 row comes from the US oral table only; the US IV table has just '>30 usual; 5–29 200–400 mg q18–24h'. The entry also leaves out the Taiwan insert of the stocked product (Seforce), which the ground rules say to prefer. The CRRT 'q8-12h' has no source. Published CRRT reviews give q12–24h. Both PMIDs were checked with esummary, but the per-drug table values in the full text could not be opened here, so the owner should confirm them before pasting.

**Sources:** Seforce 仿單 3.3 腎功能受損 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Cinolone 仿單 3.3 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F; US FDA label (Sagent IV) 2.3 Table 4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 2.3 Table 4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 4.2 renal table - https://www.medicines.org.uk/emc/product/7256/smpc; Trotman RL et al. Clin Infect Dis 2005;41:1159-66 PMID 16163635 - https://pubmed.ncbi.nlm.nih.gov/16163635/; Heintz BH et al. Pharmacotherapy 2009;29:562-77 PMID 19397464 - https://pubmed.ncbi.nlm.nih.gov/19397464/

### A5 · Page body (error)

**Was:** RENAL DOSE/HD/CRRT: 'Dialysis Removal: Moderately dialyzable (20-50%); only ~10% removed per HD session'; 'Half-life increases from 4h to 6-9h'; IV column rows '30-49: 200-400 mg q12h' and '<5 (ESRD): 200-400 mg q24h'; Dialysis table gives only oral 250-500 mg doses; CRRT 'Higher doses due to enhanced clearance'

**Now:** Dialysis removal: 'Only a small amount (<10%) removed by HD or PD' (US label 10; 仿單 9: 只有少量 <10% 經透析排除). Half-life: 'normal ~4 h (PO) / 5–6 h (IV); 4–7 h (UK); up to 12 h in severe renal impairment' (UK SmPC 5.2). Replace the IV column with: 'US IV label: >30 usual dose; 5–29 200–400 mg q18–24h. Seforce 仿單: CrCl 31–60 max 800 mg/day; <30 max 400 mg/day; HD give after dialysis; CAPD 50 mg/L IP q6h'. Label the oral rows 'US oral label' (30–50 q12h; 5–29 q18h; HD/PD q24h after dialysis). CRRT row: '400 mg IV q12h; consider q8h for difficult-to-treat GNB / high body weight (Spooner 2011 PMID 21816053; Roger 2016 PMID 26957490)'. Remove the '20-50%' and 'enhanced clearance' wording. Flag 'AUC approximately doubles' and 'Maintain loading dose' as unsourced.

**Why:** The '20–50% moderately dialyzable' statement contradicts the label (<10%) and the next clause on the page. The 6–9 h figure has no source; UK SmPC 5.2 says up to 12 h. The IV 30–49 and <5 rows are not in any IV label. The Taiwan insert for the stocked IV product is missing.

**Sources:** US FDA label (Sagent IV) 2.3 Table 4, 10 Overdosage, 12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 5.2 Elimination - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 3.3, 9 過量 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Trotman 2005 PMID 16163635 - https://pubmed.ncbi.nlm.nih.gov/16163635/

### A6 · Page body (error)

**Was:** DRUG INTERACTIONS > CYP1A2: 'Clozapine ↑ levels significantly (3-5×) — Reduce clozapine dose by 50%'

**Now:** Clozapine: ↑ clozapine 29% and N-desmethylclozapine 31% (cipro 250 mg × 7 d). Monitor and adjust the clozapine dose during and shortly after co-administration.

**Why:** The label PK study contradicts the 3–5× figure, and no label states a fixed 50% dose cut.

**Sources:** US FDA label (Sagent IV) 7 Table 8 and 12.3 Drug-Drug Interactions (Clozapine) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.5 Clozapine - https://www.medicines.org.uk/emc/product/7256/smpc

### A7 · Page body (error)

**Was:** BREASTFEEDING table: 'Milk Concentration 0.98-3.79 mg/L (peak ~5h post-dose)'; 'Relative Infant Dose 2-6.4%'; 'Milk:Plasma Ratio 0.85-2.14'; 'AAP Classification Usually compatible'

**Now:** Milk levels: peak averaging 3.79 mg/L at 2 h after 750 mg dose, falling to 0.2 mg/L at 12 h (LactMed). Estimated max infant dose ~0.57 mg/kg/day vs 10–40 mg/kg/day neonatal therapeutic dose (LactMed). Flag RID, M:P ratio and AAP rows as not in LactMed/labels (unsourced). Add a row for the label statements: US 8.2 says breastfeeding is not recommended during treatment and for 2 days after the last dose (pump and discard), except for anthrax PEP, where the risk-benefit may favour continuing. UK SmPC 4.6 and Taiwan 仿單 6.2 say do not use during breastfeeding.

**Why:** LactMed's Drug Levels section gives the peak at 2 h, not 5 h. The RID, M:P and AAP figures do not appear in LactMed. The page body leaves out all of the label statements.

**Sources:** LactMed Ciprofloxacin NBK501583, Drug Levels / Summary of Use - https://www.ncbi.nlm.nih.gov/books/NBK501583/; US FDA label (Sagent IV) 8.2 Lactation - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.6 - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 6.2 哺乳 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A8 · Breastfeeding (missing)

**Was:** Acceptable with monitoring (LactMed); RID 2-6%; avoid BF 3-4h post-dose; <br>monitor infant for diarrhea/thrush

**Now:** Acceptable with monitoring (LactMed); RID 2-6% (unsourced – verify); avoid BF 3-4h post-dose; <br>monitor infant for diarrhea/thrush/diaper rash<br>Labels more restrictive: US 8.2 not recommended during Rx + 2 days (may pump & discard; anthrax PEP: weigh risk/benefit of continuing BF); UK SmPC: should not be used; Seforce 仿單：哺乳婦女不可使用 (Cinolone 仿單：不建議使用)

**Why:** The LactMed part is correct. 'RID 2-6%' is not in LactMed and has no other source, so the proposal drops it; if the owner wants to keep it, it needs a citation. The labels (US 8.2, UK 4.6, Taiwan 6.2) disagree with LactMed, and the column does not mention them.

**Sources:** LactMed NBK501583 Summary of Use during Lactation - https://www.ncbi.nlm.nih.gov/books/NBK501583/; US FDA label (Sagent IV) 8.2 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.6 - https://www.medicines.org.uk/emc/product/7256/smpc

### A9 · Drug Interactions (missing)

**Was:** AVOID: Tizanidine (contraindicated). CYP1A2 substrates (theophylline↑, caffeine↑, clozapine↑). <br>Space 2h from antacids/iron/calcium/dairy. <br>Warfarin (↑INR), corticosteroids (↑tendon rupture), NSAIDs (↑seizure risk)

**Now:** CONTRAINDICATED: Tizanidine. <br>AVOID: theophylline (if unavoidable monitor levels), QT-prolonging drugs (IA/III antiarrhythmics, TCAs, macrolides, antipsychotics), duloxetine, zolpidem. <br>CYP1A2 substrates ↑: caffeine/pentoxifylline, clozapine, olanzapine, ropinirole, agomelatine, lidocaine. <br>`PO` only: cipro ≥2h before or 6h after (US) / 1-2h before or ≥4h after (UK, 仿單) Mg/Al antacids, Ca/Fe/Zn, sevelamer/lanthanum, sucralfate, didanosine; avoid dairy/Ca-fortified juice alone. <br>Warfarin (↑INR), sulfonylureas/insulin (dysglycemia), methotrexate↑, phenytoin ↑/↓, cyclosporine (SCr↑), sildenafil 2×, probenecid (cipro↑), corticosteroids (↑tendon rupture), NSAIDs (↑seizure risk)

**Why:** Several label 'Avoid use' interactions are missing: QT-prolonging drugs, duloxetine, zolpidem and theophylline. Antidiabetic drugs (fatal hypoglycaemia reported), methotrexate, phenytoin and cyclosporine are also missing. The spacing rule is understated: the US oral label says 2 h before or 6 h after, and the UK and Taiwan say 1–2 h before or at least 4 h after. Chelation applies only to the oral product, not to Seforce IV.

**Sources:** US FDA label (Sagent IV) 7 Table 8 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 2.4 and 7 (multivalent cations) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 4.5 - https://www.medicines.org.uk/emc/product/7256/smpc; Cinolone 仿單 7 交互作用 (螯合劑 1-2小時前/至少4小時後) - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F

### A10 · Page body (minor)

**Was:** DRUG INTERACTIONS: Zolpidem 'Use with caution'; Theophylline '↑30-50%; reduce theophylline dose 30-50%'; Sildenafil '(CYP3A4 inhibition) Use lower sildenafil dose'; Melatonin, Ramelteon, Pirfenidone rows; Oral contraceptives '↓ efficacy (gut flora)'; Live vaccines (BCG, typhoid); Enteral feeding 'Hold feeds 1h before and 2h after'; Dairy 'space by 2h if possible'

**Now:** Zolpidem: change to 'AVOID (concurrent use not recommended)'. Theophylline: 'serious/fatal reactions; avoid; if unavoidable monitor levels and adjust dose'. Drop the unsourced 30–50% figures or cite a source for them. Sildenafil: '~2-fold ↑ Cmax/AUC; use with caution (仿單：劑量需考慮減半)'. Drop the CYP3A4 mechanism, which no label states. Dairy: 'avoid taking with dairy/Ca-fortified juice alone; may take with a meal containing them'. Flag melatonin, ramelteon, pirfenidone, oral contraceptives, live vaccines and enteral-feed timing as not in the ciprofloxacin labels (unsourced). Add omeprazole (cipro AUC ↓20%), lidocaine and agomelatine from the labels.

**Why:** Label text: zolpidem is 'Avoid Use'; theophylline is 'Avoid Use' with no % reduction given; sildenafil is two-fold with no mechanism stated; dairy should be avoided when taken alone. The other listed rows are not in the US, UK or Taiwan labels.

**Sources:** US FDA label (Sagent IV) 7 Table 8, 12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 2.4, 12.3 (Omeprazole) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 4.5 - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 7 Sildenafil - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A11 · Adult dose (unsupported)

**Was:** PO: 250-750mg q12h<br>IV: 200-400mg q8-12h<br>CRPA: 400mg IV q8h

**Now:** PO: 250-750mg q12h<br>IV: 200-400mg q8-12h (infuse ≥60 min)<br>Severe/life-threatening, esp. Pseudomonas: 400mg IV q8h (仿單 3×400 mg)<br>IV→PO: 200 q12h≈250 PO q12h; 400 q12h≈500 PO q12h; 400 q8h≈750 PO q12h

**Why:** No label has a 'CRPA' indication or dose. The 400 mg q8h regimen is labelled for severe or life-threatening infections, especially Pseudomonas (Taiwan insert 3×400 mg), and for nosocomial pneumonia (US). The US labels also require a 60-minute infusion and give AUC-equivalence (IV→PO) conversions; both are worth adding.

**Sources:** Seforce 仿單 3.1 用法用量 (特別嚴重會威脅生命的感染 3×400 mg), 3.2 輸注時間要超過60分鐘 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; US FDA label (Sagent IV) 2.1 Table 1, Table 2, 2.5 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 2.1 Table 1 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e

### A12 · Pediatric dose (missing)

**Was:** 10-20 mg/kg PO q12h (max 750mg)<br>6-10 mg/kg IV q8h (max 400mg)

**Now:** cUTI/pyelonephritis (1-17y): 10-20 mg/kg PO q12h (max 750mg/dose); 6-10 mg/kg IV q8h (max 400mg/dose)<br>Inhalational anthrax PEP (birth-17y): 15 mg/kg PO q12h (max 500mg) / 10 mg/kg IV q12h (max 400mg) × 60d<br>Plague (birth-17y): 15 mg/kg PO q8-12h (max 500mg) / 10 mg/kg IV q8-12h (max 400mg) × 14d<br>CF P. aeruginosa exacerbation (5-17y; UK/仿單): 20 mg/kg PO q12h (max 750mg/dose); 10 mg/kg IV q8h (max 1200 mg/day)<br>Not first-line (↑ joint AEs)

**Why:** The current values are correct for cUTI only, but they do not name the indication. The labelled anthrax, plague and CF regimens are missing.

**Sources:** US FDA label (Sagent IV) 2.2 Table 3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 2.2 Table 3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 4.2 Paediatric population - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 3.3 小孩 囊腫性纖維化 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A13 · Page body (error)

**Was:** PEDIATRIC DOSING table: Plague (treatment) duration '10-21 days'; Plague (prophylaxis) duration '7 days'; 'Cystic Fibrosis (Off-label, Pseudomonas)' oral '15-20 mg/kg q12h'; Neonatal Dosing (AAP) table

**Now:** Plague (treatment and prophylaxis): 14 days (US label Table 3). Rename the CF section to 'Cystic fibrosis P. aeruginosa exacerbation (5–17 y) — labelled in UK SmPC & Taiwan 仿單 (not US)'. Oral dose: 20 mg/kg q12h (max 750 mg/dose, 10–14 d). IV: 10 mg/kg q8h (max 1200 mg/day). Flag the AAP neonatal table as unsourced: add an AAP Red Book citation or remove it.

**Why:** Label Table 3 gives 14 days for plague, with no 7-day prophylaxis course. CF is an approved paediatric indication in the UK and Taiwan at 20 mg/kg (not 15–20). The neonatal table has no citation.

**Sources:** US FDA label (Sagent IV) 2.2 Table 3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.1 and 4.2 Paediatric population - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 2 適應症, 3.3 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A14 · Page body (error)

**Was:** INDICATIONS (FDA-Approved) table: 'Other: Malignant otitis externa, febrile neutropenia (empiric), endocarditis'; 'STI: Gonorrhea (if susceptible), chancroid'

**Now:** Remove 'endocarditis' from the approved list (no US/UK/Taiwan label). Move 'chancroid' to Off-label. Rename the heading 'INDICATIONS (FDA/UK-approved)'. Tag malignant otitis externa (UK SmPC 4.2) and gonorrhoea (US oral 1.6; UK 4.1) by label. Add missing approved indications: lower RTI, acute sinusitis and uncomplicated cystitis (both reserve-only per boxed warning), chronic suppurative otitis media (UK), PID/epididymo-orchitis (UK), N. meningitidis prophylaxis 500 mg ×1 (UK), CF broncho-pulmonary infection (UK).

**Why:** Endocarditis and chancroid are not in any label. Under the ground rules, an indication counts as approved only if the FDA label or UK SmPC lists it.

**Sources:** US FDA label (Sagent IV) 1 Indications - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 1 Indications - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 4.1, 4.2 - https://www.medicines.org.uk/emc/product/7256/smpc

### A15 · Indications (missing)

**Was:** IAI, UTI, SSTI, Pneumonia

**Now:** IAI, UTI, SSTI, Pneumonia, cUTI, cIAI, HAP, FN, Pelvic

**Why:** All of these options exist in the schema and are label-supported. cUTI: US pediatric cUTI and UK complicated UTI. cIAI: US 1.3, with metronidazole. HAP: US IV 1.4, nosocomial pneumonia. FN: US IV 1.5 and UK 4.1. Pelvic: UK 4.1, pelvic inflammatory disease. Optional: Bacteremia (Taiwan 仿單 菌血症/敗血症) and Osteoarthritis, if the owner uses that tag for bone/joint infections (US 1.2).

**Sources:** US FDA label (Sagent IV) 1.3, 1.4, 1.5, 1.10 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.1 - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 2 適應症 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A16 · Coverage (missing)

**Was:** Pseudomonas, Streptococcus, MSSA, E.coli, Proteus, Klebsiella, CRPA

**Now:** Add: Enterobacter, Serratia, Haemophilus, Neisseria, Legionella, Bacillus

**Why:** Each is listed in the label microbiology sections. US 12.4 lists Enterobacter cloacae, Serratia marcescens, H. influenzae/parainfluenzae and Bacillus anthracis as active in clinical infections, and Legionella pneumophila in vitro. UK SmPC 5.1 lists Legionella, N. meningitidis and Haemophilus as commonly susceptible, and N. gonorrhoeae as susceptible with possible acquired resistance. All six options exist in the schema.

**Sources:** US FDA label (Sagent IV) 12.4 Microbiology - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 5.1 Spectrum of antibacterial activity - https://www.medicines.org.uk/emc/product/7256/smpc; Seforce 仿單 10.2 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A17 · Coverage (unsupported)

**Was:** CRPA (also body: 'CRPA ✓✓ Good — Often retains activity against carbapenem-resistant strains'; Key Clinical Pearls 'often retains activity against carbapenem-resistant strains')

**Now:** Flag. Keep the tag only if the FJUH antibiogram shows CRPA susceptibility to ciprofloxacin; otherwise remove it. In the body, replace the claim with 'Check susceptibility — CRPA activity not established in labels'.

**Why:** No label or cited guideline supports activity against carbapenem-resistant P. aeruginosa. UK SmPC 5.1 lists P. aeruginosa among 'species for which acquired resistance may be a problem' and notes that permeation barriers in P. aeruginosa may affect ciprofloxacin susceptibility. Under the ground rules this is unsourced and is flagged, not removed.

**Sources:** UK SmPC 5.1 - https://www.medicines.org.uk/emc/product/7256/smpc; US FDA label (Sagent IV) 1.12 (P. aeruginosa may develop resistance rapidly during treatment) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74

### A18 · Side Effects (missing)

**Was:** dysglycemia, QTc prolong, LFT↑, neuropathy, CNS

**Now:** Add: GI, photosensitivity, SJS/TEN, hematologic, AKI, thrombophlebitis

**Why:** GI: the most common reactions are nausea 2.5% and diarrhoea 1.6% (6.1), plus CDAD (5.11). Photosensitivity: W&P 5.14. SJS/TEN and haematologic effects (anaemia, thrombocytopenia, agranulocytosis, pancytopenia): 5.6. AKI: interstitial nephritis and acute renal failure, 5.6. Thrombophlebitis: Table 5, plus local IV-site reactions with ≤30-minute infusions (6.1; 仿單 注射部位的反應). All six options exist in the schema.

**Sources:** US FDA label (Sagent IV) 5.6, 5.11, 5.14, 6.1 Table 5 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; Seforce 仿單 5.1 注射部位的反應, 8.1 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A19 · Monitor (missing)

**Was:** renal, LFT, neuro, CNS, ECG

**Now:** Add: CBC, PT/INR, electrolyte

**Why:** CBC: 5.18 advises periodic assessment of renal, hepatic and haematopoietic function during prolonged therapy. PT/INR: Section 7 says to monitor PT/INR frequently with warfarin. Electrolyte: 5.12 says to avoid use with uncorrected hypokalaemia or hypomagnesaemia. All three options exist in the schema. Blood-glucose monitoring (5.19) has no schema option; it could go in Notes.

**Sources:** US FDA label (Sagent IV) 5.12, 5.18, 5.19, 7 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74

### A20 · Notes (minor)

**Was:** Best FQ for Pseudomonas; poor S. pneumoniae (not for CAP); <br>potent CYP1A2 inhibitor; space from cations; <br>contraindicated in myasthenia gravis; <br>discontinue at first sign of tendon/neuropathy/CNS effects

**Now:** Best FQ for Pseudomonas; poor S. pneumoniae (not for CAP; UK/仿單: not recommended for streptococcal infections); <br>moderate CYP1A2 inhibitor (tizanidine contraindicated); space PO from cations; <br>AVOID in myasthenia gravis; <br>discontinue at first sign of tendon/neuropathy/CNS effects; <br>特殊警語: reserve for AECB, uncomplicated cystitis, acute sinusitis only if no alternative; ↑ aortic aneurysm/dissection & valve regurgitation risk; IV infuse ≥60 min

**Why:** UK SmPC 4.4/5.2 and the Taiwan insert call ciprofloxacin a 'moderate' CYP1A2 inhibitor, not 'potent'. The MG wording is covered in A2. The boxed reserve-use statement, the aortic aneurysm and valve risks, and the infusion time are all labelled but missing. 'Best FQ for Pseudomonas' is plausible but has no source; it is flagged and kept.

**Sources:** UK SmPC 4.4 (Cytochrome P450; Aortic aneurysm/heart valve; Streptococcal infections), 5.2 - https://www.medicines.org.uk/emc/product/7256/smpc; US FDA label (Sagent IV) Boxed Warning, 2.5, 5.9 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; Seforce 仿單 特殊警語, 5.1 Cytochrome P450 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### A21 · Page body (error)

**Was:** PREGNANCY: Human Data 'observational data in >2,000 first-trimester exposures'; BRIEF SUMMARY Pregnancy 'Category C; ...'

**Now:** Human data: 'Prospective studies (200 FQ-exposed pregnancies, 52.5% cipro; 549 FQ pregnancies incl. 70 cipro first-trimester) showed malformation rates within background; insufficient for rare defects' (US 8.1). Add 'UK SmPC/仿單: preferable to avoid in pregnancy'. In the Brief Summary, replace 'Category C' with the A1 text.

**Why:** The label's human data are about 750 FQ pregnancies, not '>2,000'. The Brief Summary repeats the retired letter category.

**Sources:** US FDA label (Sagent IV) 8.1 Data - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.6 - https://www.medicines.org.uk/emc/product/7256/smpc

### A22 · Page body (minor)

**Was:** ADULT DOSING table durations/doses: HAP/VAP 7-14 d; Osteomyelitis 6-8 weeks; Traveler's diarrhea 1-3 d; Cholera 1-3 d; Malignant otitis externa 6-8 weeks; Anthrax (systemic) IV 400 q8-12h; Plague 10-14 d; Gonorrhea 500 mg ×1; Chancroid row; IV→PO row lacks 400 q8h

**Now:** Nosocomial pneumonia IV 400 mg q8h for 10–14 d (US). Bone/joint 4–8 weeks (US; UK max 3 months). Travellers' diarrhoea and non-dysenteriae Shigella 500 mg BID × 1 d; S. dysenteriae type 1 × 5 d; cholera 500 mg BID × 3 d; typhoid 500 mg BID × 10 d (US) / 7 d (UK) (all UK SmPC 4.2 except where marked). Malignant external otitis 750 mg BID for 28 d to 3 months (UK). Plague 14 d (US). Gonorrhoea 250 mg ×1 (US) / 500 mg ×1 (UK). Mark chancroid and systemic anthrax as off-label/CDC, needing a citation. IV→PO: add '400 mg IV q8h ≈ 750 mg PO q12h'.

**Why:** Several durations differ from the label tables. Chancroid and systemic-anthrax treatment are not labelled.

**Sources:** US FDA label (Sagent IV) 2.1 Table 1, Table 2 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 2.1 Table 1 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 4.2 - https://www.medicines.org.uk/emc/product/7256/smpc

### A23 · Page body (minor)

**Was:** CLINICAL NOTES PK table: Half-life '3-5 hours (normal); 6-9 hours (renal impairment)'; Protein binding '20-40%'; CSF 'Poor (10-20% of serum; increases with inflammation)'; Comparison table half-life '4 hours'

**Now:** Half-life: ~4 h after PO (US oral label), 5–6 h after IV (US IV label), 4–7 h (UK); up to 12 h in severe renal impairment (UK). Protein binding: 20–30% (UK SmPC 5.2; 仿單 11). CSF: generally <10% of peak serum concentration (US 12.3).

**Why:** These values conflict with the label PK sections.

**Sources:** US FDA label (Sagent IV) 12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; US FDA label (Aurobindo tablets) 12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a935846-3c97-4517-bc4e-2377f673285e; UK SmPC 5.2 - https://www.medicines.org.uk/emc/product/7256/smpc

### A24 · Page body (unsupported)

**Was:** MECHANISM: 'AUC/MIC ratio (target ≥125 for gram-negatives)', 'Post-antibiotic effect: 1-6 hours', 'Binds bacterial DNA gyrase with 100× greater affinity', 'gyrA Ser83→Leu'; COVERAGE 'MIC90 ~0.5 μg/mL', 'M. tuberculosis ✓✓ Good', 'M. avium complex ✓ Variable'; Off-label 'TB (MDR-TB second-line)', 'surgical prophylaxis'

**Now:** Flag as unsourced and add citations, or soften them. The label-supported version reads: 'Efficacy depends on Cmax/MIC and AUC/MIC (UK SmPC 5.1)', and 'Resistance: target mutations in DNA gyrase/topo IV, efflux, impermeability, plasmid qnr (UK 5.1, US 12.4)'. Note that ciprofloxacin may give false-negative M. tuberculosis cultures (UK 4.4; 仿單).

**Why:** No label or verified guideline supports these specific figures. Ciprofloxacin is no longer in WHO MDR-TB regimens, but no source was fetched here to contradict that row, so it is flagged rather than removed.

**Sources:** UK SmPC 4.4 (Interaction with tests), 5.1 - https://www.medicines.org.uk/emc/product/7256/smpc; US FDA label (Sagent IV) 12.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74

### A25 · Page body (missing)

**Was:** Page body has no Taiwan 仿單 information for the hospital's actual products (Seforce IV / Cinolone PO)

**Now:** Add a short 'FJUH products & 仿單' block near the top. Content: SEF02 Seforce 400 mg/200 mL IV (南光 賜保欣注射液, 衛署藥製字第044809號) — infuse ≥60 min; renal max 800/400 mg/day; CAPD 50 mg/L IP q6h. CIN02 Cinolone 250 mg tab (信東 信諾隆膜衣錠, 衛署藥製字第038747號) — renal max 1000/500 mg/day; take 1–2 h before or ≥4 h after multivalent cations. Plus the 特殊警語 reserve-use text. Include the two TFDA links.

**Why:** Under the ground rules, the insert of the stocked product is the preferred source for renal dosing. At present the page relies only on US/generic data.

**Sources:** Seforce 仿單 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Cinolone 仿單 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F

### A26 · Page body (minor)

**Was:** BRIEF SUMMARY FOR DATABASE ENTRY table (Renal 'CrCl 5-29: 250-500 mg q18h'; Pregnancy 'Category C'; Breastfeeding 'RID 2-6%'; Notes 'CONTRAINDICATED in myasthenia gravis'; Drug Interactions 'theophylline (↑50%)', 'Space 2h'); also an embedded renal image that cannot be checked as text

**Now:** Sync this table with the corrected properties (A1, A2, A4, A8, A9, A20). Check that the embedded renal-dosing image matches the Taiwan/US label values, and remove or caption it if it does not.

**Why:** This table copies the same errors as the properties. The image content could not be checked against the labels.

**Sources:** US FDA label (Sagent IV) - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; Seforce 仿單 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B1 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-49: q12h<br>CrCl 5-29: q18-24h<br>HD/PD: q24h post-HD<br>CRRT: 200-400mg IV q8-12h

**Now:** <span color="green">`IV`</span> (Seforce 仿單): CrCl 31-60 (SCr 1.4-1.9): max 800 mg/day; CrCl <30 (SCr ≥2.0): max 400 mg/day<br>HD: 同上限，透析後給藥; CAPD: 50 mg/L 透析液 IP q6h<br>(US IV label: CrCl 5-29: 200-400 mg q18-24h)<br><span color="blue">`PO`</span> (Cinolone 仿單): CrCl 31-60: max 1000 mg/day; <30 (incl. HD): max 500 mg/day; CAPD: 500 mg (1×500 或 2×250 mg)<br>(US oral: CrCl 30-50 250-500 mg q12h; 5-29 250-500 mg q18h; HD/PD 250-500 mg q24h after HD. UK: 30-60 q12h; <30/HD/PD q24h)<br>CRRT (no label; Spooner 2011, Roger 2016): 400 mg IV q12h; consider q8h for difficult-to-treat GNB/high body weight

**Why:** The current text gives no doses. Its 30-49 / 5-29 cut-offs mix the legacy US oral table with the US IV table and match neither the Taiwan inserts nor the UK SmPC. Per the ground rules, the stocked product's TW insert (Seforce) should lead, with the US/UK values alongside. CRRT: 200 mg doses are not supported. Spooner 2011 found 400 mg q12h on CVVHDF met AUC/MIC >100 targets at MIC 0.5. Roger 2016 found high PK variability on CVVH/CVVHDF with 400 mg q8-12h and advised higher weight-based dosing for difficult pathogens. No label covers CRRT.

**Sources:** Taiwan Seforce insert 3.3 特殊族群用法用量 (腎功能受損/血液透析/CAPD) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Taiwan Cinolone insert 3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F; US FDA label 2.3 Table 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.2 (renal table) https://www.medicines.org.uk/emc/product/7256/smpc; Spooner AM et al. BMC Clin Pharmacol 2011;11:11, PMID 21816053 (verified esummary) https://pubmed.ncbi.nlm.nih.gov/21816053/; Roger C et al. J Antimicrob Chemother 2016;71:1643-50, PMID 26957490 (verified esummary) https://pubmed.ncbi.nlm.nih.gov/26957490/

### B2 · Adult dose (unsupported)

**Was:** PO: 250-750mg q12h<br>IV: 200-400mg q8-12h<br>CRPA: 400mg IV q8h

**Now:** PO: 250-750mg q12h<br>IV: 200-400mg q8-12h (infuse ≥60 min)<br>Severe/Pseudomonas: 400mg IV q8h (≈750mg PO q12h)

**Why:** The PO and IV ranges match the labels. No label or guideline gives a CRPA-specific dose. The IDSA AMR Guidance prefers high-dose extended-infusion traditional β-lactams for CRPA and lists ciprofloxacin among the agents DTR-P. aeruginosa is non-susceptible to. The 400 mg q8h regimen is the label's dose for severe/Pseudomonas infections: TW insert 3×400 mg for life-threatening infections esp. Pseudomonas, and US nosocomial pneumonia 400 mg q8h. The ≥60 min infusion is a label requirement and is missing from the column. US Table 2 gives the 400 mg IV q8h ≈ 750 mg PO q12h equivalence.

**Sources:** Taiwan Seforce insert 3.1 用法用量 (3×400 mg) and 3.2 給藥方法 (>60 min) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; US FDA label 2.1 Table 1 & Table 2, 2.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.2 (Pseudomonas may require higher doses) https://www.medicines.org.uk/emc/product/7256/smpc; IDSA AMR Guidance, Section 4 / Question 4.1 https://www.idsociety.org/practice-guideline/amr-guidance/

### B3 · Coverage (error)

**Was:** Pseudomonas, Streptococcus, MSSA, E.coli, Proteus, Klebsiella, CRPA

**Now:** Pseudomonas, MSSA, E.coli, Proteus, Klebsiella, CRPA, Enterobacter, Serratia, Haemophilus, Neisseria, Legionella, Bacillus  (REMOVE Streptococcus)

**Why:** The UK SmPC 4.4 says ciprofloxacin 'is not recommended for the treatment of streptococcal infections due to inadequate efficacy', and the TW insert advises against it for S. pneumoniae. The page's own Notes and body also rate streptococci poor or unreliable. The US label lists S. pyogenes only within SSSI, so a general Streptococcus tag is misleading. Several organisms with label support have no tag: Enterobacter cloacae and Serratia marcescens (US 1.2/1.10), H. influenzae (US 1.4/1.9; SmPC commonly susceptible), N. meningitidis/N. gonorrhoeae (SmPC 5.1, TW 10.2), Legionella (SmPC/TW commonly susceptible), and B. anthracis (US 1.6, SmPC 5.1).

**Sources:** UK SmPC 4.4 Streptococcal infections; 5.1 susceptibility groupings https://www.medicines.org.uk/emc/product/7256/smpc; US FDA label 1.1-1.10 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; Taiwan Seforce insert 5.1 肺炎鏈球菌感染; 10.2 藥效藥理特性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B4 · Coverage (unsupported)

**Was:** CRPA (tag); body: 'CRPA ✓✓ Good – Often retains activity against carbapenem-resistant strains'; Key Clinical Pearls 'often retains activity against carbapenem-resistant strains'

**Now:** Keep the CRPA tag with this caveat in Notes: 'CRPA: only if cipro-S on AST (IDSA AMR Guidance Q4.1: if susceptible, traditional β-lactams or FQs are favoured over carbapenems; DTR-P. aeruginosa is cipro-NS by definition)'. Body CRPA cell → 'Variable – use only if susceptible on AST (IDSA AMR Guidance)'. Key Pearls: delete 'often retains activity against carbapenem-resistant strains' and replace it with 'CRPA: check AST'.

**Why:** No label or guideline claims ciprofloxacin 'often retains activity' against CRPA. The IDSA AMR Guidance defines DTR-P. aeruginosa as non-susceptible to ciprofloxacin and levofloxacin, among other agents. For carbapenem-resistant isolates it prefers susceptible traditional β-lactams at high dose with extended infusion. The SmPC lists P. aeruginosa under 'acquired resistance may be a problem'. Activity is plausible only when AST confirms susceptibility, so I am flagging this rather than removing it.

**Sources:** IDSA AMR Guidance Section 4 (DTR definition) & Question 4.1 https://www.idsociety.org/practice-guideline/amr-guidance/; UK SmPC 5.1 (P. aeruginosa: acquired resistance may be a problem) https://www.medicines.org.uk/emc/product/7256/smpc

### B5 · Indications (missing)

**Was:** IAI, UTI, SSTI, Pneumonia

**Now:** IAI, UTI, SSTI, Pneumonia, cUTI, cIAI, HAP, FN, Osteoarthritis, Pelvic

**Why:** These are all approved in the US label or UK SmPC. cUTI: UK complicated UTI/pyelonephritis and US paediatric cUTI. cIAI: US 1.3, with metronidazole. HAP: US 1.4 nosocomial pneumonia. FN: US 1.5 with piperacillin and SmPC neutropenic fever. Osteoarthritis is the tag other DB entries (teicoplanin, imipenem, ceftazidime) use for bone/joint infection, and bone/joint infection is US 1.2 and SmPC. Pelvic: SmPC genital tract infections including PID and epididymo-orchitis.

**Sources:** US FDA label 1.1-1.10 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/7256/smpc

### B6 · Side Effects (missing)

**Was:** dysglycemia, QTc prolong, LFT↑, neuropathy, CNS

**Now:** dysglycemia, QTc prolong, LFT↑, neuropathy, CNS, GI, photosensitivity, SJS/TEN

**Why:** Nausea and diarrhoea are the most common ADRs (US 6.1: nausea 2.5%, diarrhoea 1.6%; SmPC 4.8; TW 常見). Photosensitivity/phototoxicity is US 5.14 and in the TW insert. SJS/TEN is US 5.6, TW 罕見, SmPC 4.8. I also considered hematologic (US 5.6 agranulocytosis/thrombocytopenia) and AKI (interstitial nephritis/renal failure), but they are optional; the three above are the high-yield ones. All are existing schema options.

**Sources:** US FDA label 5.6, 5.14, 6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.8 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B7 · Monitor (missing)

**Was:** renal, LFT, neuro, CNS, ECG

**Now:** renal, LFT, neuro, CNS, ECG, PT/INR, CBC

**Why:** The labels call for INR/PT monitoring with warfarin and other vitamin K antagonists (US Table 8; TW 7 交互作用; SmPC 4.5). US 5.18 advises periodic assessment of renal, hepatic and hematopoietic function during prolonged therapy, which supports CBC. The page body already lists CBC and INR rows. Blood glucose monitoring (US 5.19) has no schema option, so it stays in the text fields.

**Sources:** US FDA label 5.18, 5.19, 7 Table 8 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.5 Vitamin K antagonists https://www.medicines.org.uk/emc/product/7256/smpc

### B8 · Notes (error)

**Was:** Best FQ for Pseudomonas; poor S. pneumoniae (not for CAP); <br>potent CYP1A2 inhibitor; space from cations; <br>contraindicated in myasthenia gravis; <br>discontinue at first sign of tendon/neuropathy/CNS effects

**Now:** Best FQ for Pseudomonas; poor S. pneumoniae (not for CAP); <br>moderate CYP1A2 inhibitor; space PO from cations; <br>avoid in myasthenia gravis (boxed warning); <br>discontinue at first sign of tendon/neuropathy/CNS effects; <br>Reserve for AECB/acute sinusitis/uncomplicated cystitis only if no alternative (保留於無其他替代治療時); <br>aortic aneurysm/dissection risk (elderly)

**Why:** The UK SmPC 4.5/5.2 and both TW inserts call ciprofloxacin a 'moderate' (中度) CYP1A2 inhibitor; the US label just says 'inhibitor'. 'Potent' is not supported. Myasthenia gravis is not a contraindication in any label: the only contraindications are hypersensitivity and tizanidine. The US boxed warning and 5.5 say 'Avoid', the TW 衛福部警語 says 應避免使用, and SmPC 4.4 says 'use with caution'. The FQ stewardship restriction and the aortic aneurysm warning are both label items missing from Notes.

**Sources:** US FDA label Boxed Warning, 4, 5.5, 5.9 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.3, 4.4, 4.5, 5.2 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 特殊警語; 4 禁忌; 5.1 Cytochrome P450 & 衛生福利部公告之警語 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B9 · Pregnancy (error)

**Was:** Category C; avoid if alternatives exist; CDC preferred for anthrax in pregnancy

**Now:** US label 8.1: decades of observational data have not identified drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; <br>UK SmPC / TW 仿單: 懷孕期間不建議使用 (precaution: juvenile-animal cartilage damage); <br>CDC: preferred for anthrax PEP in pregnancy

**Why:** The FDA retired letter categories, and the current US 8.1 is a narrative risk summary. 'Category C' must not appear as current; this also applies to the body's 'BRIEF SUMMARY' row 'Category C'. The body's 'Former FDA Category: C / Current: not assigned' wording is acceptable. The UK SmPC 4.6 ('preferable to avoid') and TW insert 6.1 (不建議在懷孕期間使用) carry the avoid recommendation. The CDC anthrax statement comes from a CDC expert-meeting summary; the abstract does not state the recommendation, so I have not confirmed it from the abstract alone.

**Sources:** US FDA label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Meaney-Delman D et al. Emerg Infect Dis 2014;20(2):e130611, PMID 24457117 (verified esummary) https://pubmed.ncbi.nlm.nih.gov/24457117/

### B10 · Breastfeeding (minor)

**Was:** Acceptable with monitoring (LactMed); RID 2-6%; avoid BF 3-4h post-dose; <br>monitor infant for diarrhea/thrush

**Now:** Acceptable with monitoring (LactMed); RID 2-6%; avoid BF 3-4h post-dose; <br>monitor infant for diarrhea/thrush/diaper rash<br>Labels: US 8.2 not recommended during Rx + 2 days (may pump & discard; anthrax PEP: continuing may be acceptable); UK SmPC/仿單：哺乳婦女不可使用

**Why:** The LactMed statements are accurate (Summary of Use). 'RID 2-6%' does not appear in LactMed (it estimates a maximum of 0.57 mg/kg/day) or in any label, so it is unsourced; I am flagging it, not removing it. The column does not show that all three labels advise against breastfeeding (US 8.2; SmPC 4.6 'should not be used'; TW 6.2 哺乳婦女不可使用). Readers should see that LactMed differs from the labels.

**Sources:** LactMed Ciprofloxacin NBK501583, Summary of Use & Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK501583/; US FDA label 8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B11 · Drug Interactions (missing)

**Was:** AVOID: Tizanidine (contraindicated). CYP1A2 substrates (theophylline↑, caffeine↑, clozapine↑). <br>Space 2h from antacids/iron/calcium/dairy. <br>Warfarin (↑INR), corticosteroids (↑tendon rupture), NSAIDs (↑seizure risk)

**Now:** CONTRAINDICATED: Tizanidine. CYP1A2 (moderate inhibitor): theophylline↑ (avoid; if unavoidable monitor levels), caffeine↑, clozapine↑, olanzapine↑, ropinirole↑, duloxetine↑ (avoid), zolpidem (avoid), agomelatine, lidocaine. <br>QT-prolonging drugs (avoid). <br>`PO` only: give cipro 1-2h before or ≥4h after (UK/仿單; US: 2h before or 6h after) antacids/Ca/Mg/Al/Fe/Zn, sevelamer, lanthanum, sucralfate, didanosine; avoid dairy/Ca-fortified juice alone. <br>Warfarin (↑INR), sulfonylureas (hypoglycemia), phenytoin (↑/↓), methotrexate↑, cyclosporine (SCr↑), probenecid (cipro↑), sildenafil↑, corticosteroids (↑tendon rupture), NSAIDs (↑seizure risk)

**Why:** Several label interactions are missing. QT-prolonging drugs, duloxetine and zolpidem are all 'Avoid Use' in US Table 8. Oral antidiabetics (fatal hypoglycaemia), phenytoin, methotrexate (UK: not recommended), cyclosporine, probenecid, ropinirole, olanzapine, agomelatine and lidocaine are in US 7, SmPC 4.5 and TW 7. Chelation spacing is 1-2 h before or ≥4 h after in both the UK SmPC and the TW Cinolone insert; the column's '2h' understates the post-dose gap. The spacing is irrelevant for IV Seforce, so it should be labelled PO.

**Sources:** US FDA label 5.16, 7 Table 8 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Cinolone insert 7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F

### B12 · Pediatric dose (missing)

**Was:** 10-20 mg/kg PO q12h (max 750mg)<br>6-10 mg/kg IV q8h (max 400mg)

**Now:** cUTI (1-17y): 10-20 mg/kg PO q12h (max 750mg); 6-10 mg/kg IV q8h (max 400mg)<br>Anthrax PEP (birth-17y): 15 mg/kg PO q12h (max 500mg; UK 10-15 mg/kg) or 10 mg/kg IV q12h (max 400mg) × 60d<br>Plague (birth-17y): 15 mg/kg PO q8-12h (max 500mg) or 10 mg/kg IV q8-12h (max 400mg) × 14d<br>CF P. aeruginosa (UK/仿單, 5-17y): 20 mg/kg PO q12h (max 750mg/dose) or 10 mg/kg IV q8h (max 1200 mg/day) × 10-14d<br>Not first-line (↑ joint AEs)

**Why:** The existing cUTI doses are correct (US 2.2 Table 3, UK 4.2, TW 3.3). Missing are anthrax PEP and plague (US 1.6/1.7, 2.2; SmPC 4.2; TW) and the cystic fibrosis Pseudomonas indication. CF is approved in the UK SmPC 4.1/4.2 and both TW inserts (IV 10 mg/kg TID, max 1200 mg/day; PO 20 mg/kg BID). The body wrongly labels CF as 'Off-label'.

**Sources:** US FDA label 2.2 Table 3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.1, 4.2 Paediatric population https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 3.3 小孩 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Taiwan Cinolone insert 3.1 小孩 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F

### B13 · Page body (error)

**Was:** SIDE EFFECTS > 'FDA BLACK BOX WARNINGS' table includes 'Aortic Aneurysm/Dissection' and 'Myasthenia Gravis Exacerbation … CONTRAINDICATED in myasthenia gravis'; CLINICAL NOTES > 'Absolute Contraindications' lists 'Myasthenia gravis' and 'History of tendon disorders with fluoroquinolones'

**Now:** Move Aortic Aneurysm/Dissection out of the boxed-warning table into 'Serious Adverse Effects' (W&P 5.9). Change MG risk cell to 'AVOID in known myasthenia gravis (boxed warning)'. Absolute Contraindications table: keep only hypersensitivity to cipro/other quinolones and concurrent tizanidine; move MG and prior FQ tendon disorder to 'Relative Contraindications/Cautions' ('avoid').

**Why:** The US boxed warning covers tendinitis/rupture, peripheral neuropathy, CNS effects and MG exacerbation ('Avoid'); aortic aneurysm is W&P 5.9 only. The contraindications in every label are limited to hypersensitivity and tizanidine (US 4, SmPC 4.3, TW 4 禁忌). For prior tendon disorders the labels say 'avoid' (US 5.2) or 'should generally not be used' (SmPC 4.4), not 'contraindicated'.

**Sources:** US FDA label Boxed Warning (SPL), 4, 5.2, 5.5, 5.9 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.3, 4.4 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 4 禁忌; 衛生福利部公告之警語 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B14 · Page body (error)

**Was:** DRUG INTERACTIONS > Clozapine: '↑ levels significantly (3-5×)' / 'Reduce clozapine dose by 50%; monitor closely'

**Now:** Clozapine: '↑ clozapine 29% and N-desmethylclozapine 31% (cipro 250 mg × 7 d)' / 'Monitor clozapine adverse effects; adjust dose as appropriate during and shortly after co-administration'

**Why:** All three labels contradict the 3-5× figure. US 12.3, SmPC 4.5 and TW 7 report increases of 29% and 31%, and none of them recommends a fixed 50% dose cut.

**Sources:** US FDA label 7 Table 8 & 12.3 Clozapine https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.5 Clozapine https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 7 Clozapine https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B15 · Page body (error)

**Was:** RENAL > 'Dialysis Removal: Moderately dialyzable (20-50%); only ~10% removed per HD session'

**Now:** Dialysis Removal: <10% removed by haemodialysis or peritoneal dialysis (只有少量 <10% 經透析排除)

**Why:** The labels contradict '20-50%'. US 10 says 'Only a small amount of ciprofloxacin (less than 10%) is removed … after hemodialysis or peritoneal dialysis', and TW 9 過量 says the same.

**Sources:** US FDA label 10 Overdosage https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; Taiwan Seforce insert 9 過量 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B16 · Page body (error)

**Was:** RENAL > CrCl table (≥50 / 30-49: 250-500 q12h PO, 200-400 q12h IV / 5-29: 250-500 q18h PO, 200-400 q18-24h IV / <5 ESRD: 200-400 q24h IV); Dialysis table HD/PD '250-500 mg q24h' and CRRT '200-400 mg IV q8-12h – Higher doses due to enhanced clearance'; BRIEF SUMMARY renal row 'CrCl 30-49: 250-500 mg q12h; CrCl 5-29: 250-500 mg q18h…'

**Now:** IV (Seforce 仿單): CrCl 31-60 (SCr 1.4-1.9) max 800 mg/day; <30 (SCr ≥2.0) max 400 mg/day; HD: same caps, dose after dialysis; CAPD: 50 mg/L dialysate IP q6h. US IV label: CrCl >30 usual dose; 5-29: 200-400 mg q18-24h. PO (Cinolone 仿單): 31-60 max 1000 mg/day; <30/HD max 500 mg/day; CAPD 500 mg (1×500 or 2×250 mg). Keep the oral rows, relabelled 'US oral label': 30-50 250-500 mg q12h; 5-29 250-500 mg q18h; HD/PD 250-500 mg q24h after dialysis. UK SmPC: 30-60 250-500 mg q12h; <30/HD/PD 250-500 mg q24h. CRRT: 400 mg IV q12h (consider q8h for difficult GNB/high weight) (Spooner 2011 PMID 21816053; Roger 2016 PMID 26957490). Delete 'Higher doses due to enhanced clearance'. Owner to check that the renal image matches.

**Why:** The current table comes from the legacy US oral label (30-50 cut-off). It ignores the stocked products' TW inserts, and its IV '30-49: q12h' and '<5: q24h' rows match no label. In the dialysis table, HD/PD gives only oral doses. The CRRT rationale 'enhanced clearance' has no source; the cited studies show high variability, not enhanced clearance. The renal-table image in the body could not be verified and should be checked by the owner.

**Sources:** Taiwan Seforce insert 3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F; Taiwan Cinolone insert 3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038747%E8%99%9F; US FDA label 2.3 Table 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.2 https://www.medicines.org.uk/emc/product/7256/smpc; Roger C et al. JAC 2016, PMID 26957490 https://pubmed.ncbi.nlm.nih.gov/26957490/

### B17 · Page body (error)

**Was:** INDICATIONS (FDA-Approved) table lists 'Endocarditis' and 'Chancroid'; 'Off-label Uses: Cholera, traveler's diarrhea prophylaxis, surgical prophylaxis (GI/GU procedures), neutropenic fever, TB (MDR-TB second-line)'

**Now:** Remove 'Endocarditis' from the approved table and retitle it 'INDICATIONS (FDA/UK-approved)'. Move 'Chancroid' to Off-label (flag: needs CDC STI guideline citation). Add approved items: acute sinusitis (US 1.11, reserve), chronic suppurative otitis media, PID/epididymo-orchitis, N. meningitidis prophylaxis 500 mg ×1 (UK), CF broncho-pulmonary P. aeruginosa (UK; children UK/TW). Move cholera, bacterial/severe travellers' diarrhoea treatment (UK 4.2) and febrile neutropenia (US 1.5/UK) out of Off-label. The Off-label line becomes: 'Surgical prophylaxis (GI/GU), traveler's diarrhea prophylaxis, chancroid (unsourced – add citation)'. Replace 'TB (MDR-TB second-line)' with 'Not recommended for TB (WHO 2016); may cause false-negative mycobacterial cultures (UK 4.4/仿單)'.

**Why:** Neither the US nor the UK label lists endocarditis or chancroid, so the heading 'FDA-Approved' is wrong for them. The UK SmPC 4.1/4.2 approves cholera, travellers' diarrhoea and neutropenic fever, and the US label approves neutropenic fever (1.5), so they are not off-label. MDR-TB: the WHO 2016 drug-resistant TB guideline removed ciprofloxacin from the second-line TB medicines. The abstract does not state this; it comes from the full text. No label supports TB use, and SmPC 4.4 / TW 5.1 warn that it causes false-negative mycobacterial cultures.

**Sources:** US FDA label 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.1, 4.2, 4.4 (Interaction with tests) https://www.medicines.org.uk/emc/product/7256/smpc; Falzon D et al. WHO treatment guidelines for drug-resistant TB, 2016 update. Eur Respir J 2017, PMID 28331043 (verified esummary) https://pubmed.ncbi.nlm.nih.gov/28331043/

### B18 · Page body (minor)

**Was:** ADULT DOSING table: Typhoid 10 days; Infectious diarrhea 5-7 days; Traveler's diarrhea 1-3 days; Cholera 1-3 days; HAP/VAP 7-14 days; Plague 10-14 days; Malignant otitis externa 6-8 weeks; Uncomplicated UTI IV 200 mg q12h × 3 days; IV-to-PO row lacks 400 mg q8h equivalence

**Now:** Typhoid 500 mg PO q12h × 10 d (US oral) / 7 d (UK). Infectious diarrhoea 500 mg q12h × 5-7 d (US oral); bacterial/severe travellers' diarrhoea 500 mg q12h × 1 d (UK; S. dysenteriae type 1: 5 d). Cholera 500 mg q12h × 3 d (UK). HAP/nosocomial pneumonia 400 mg IV q8h × 10-14 d (US). Plague 500-750 mg PO q12h / 400 mg IV q8-12h × 14 d (US). Malignant otitis externa 750 mg PO q12h × 28 d-3 months (UK). Uncomplicated cystitis: PO 250 mg q12h × 3 d (US oral); IV column → '100 mg q12h (仿單)' in place of 200 mg q12h. UTI IV 200-400 mg q8-12h × 7-14 d (US). IV→PO: add '400 mg IV q8h ≈ 750 mg PO q12h'.

**Why:** These durations and doses differ from the label tables. UK SmPC 4.2 covers the oral GI/otitis items, US 2.1 Table 1/Table 2 the IV items, and TW 3.1 the uncomplicated UTI dose.

**Sources:** UK SmPC 4.2 https://www.medicines.org.uk/emc/product/7256/smpc; US FDA label 2.1 Tables 1-2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; Taiwan Seforce insert 3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B19 · Page body (minor)

**Was:** CLINICAL NOTES PK: Half-life 3-5 h; Protein binding 20-40%; Excretion renal 40-50% unchanged, fecal 20-35%; Metabolism ~15% to 4 metabolites; CSF 'Poor (10-20% of serum)'; HEPATIC: 'Renal (40-50% unchanged)'

**Now:** Half-life ~4-7 h (SmPC) / 5-6 h (US IV); protein binding 20-30% (SmPC/TW); IV: 50-70% excreted unchanged in urine, ~15% in feces (US 12.3); oral: urine 44.7% unchanged, feces 25% (SmPC); CSF generally <10% of peak serum (US 12.3)

**Why:** These figures differ from the label PK sections. The body mostly quotes oral data on an IV product page.

**Sources:** US FDA label 12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 5.2 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 11 藥物動力學特性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B20 · Page body (minor)

**Was:** BREASTFEEDING table: 'Milk Concentration 0.98-3.79 mg/L (peak ~5h post-dose)'; 'Milk:Plasma Ratio 0.85-2.14'; 'RID 2-6.4%'; 'AAP Classification: Usually compatible'

**Now:** Milk concentration: peak avg 3.79 mg/L at 2 h after 750 mg (falls to 0.2 mg/L at 12 h); estimated max infant dose 0.57 mg/kg/day (LactMed). Flag M:P, RID and AAP rows as unsourced.

**Why:** LactMed contradicts the 5 h peak: it reports the highest levels 2 h post-dose. That is also why it advises avoiding breastfeeding for 3-4 h after a dose. The M:P ratio, RID and AAP rows do not appear in LactMed.

**Sources:** LactMed NBK501583, Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK501583/

### B21 · Page body (unsupported)

**Was:** Interaction rows: theophylline '↑30-50%; reduce dose 30-50%'; antacids '↓ absorption 85-90%'; sildenafil '(CYP3A4 inhibition)'; warfarin '(possible CYP2C9 inhibition)'; melatonin/ramelteon/pirfenidone; oral contraceptives; live vaccines (BCG, typhoid); Key Pearls 'Divalent/trivalent cations reduce absorption by 85-90%'

**Now:** Flag as unsourced (keep or verify): the theophylline '↑30-50%; reduce dose 30-50%', antacids '↓ absorption 85-90%' (also in Key Pearls), sildenafil '(CYP3A4 inhibition)', warfarin '(possible CYP2C9 inhibition)', melatonin/ramelteon/pirfenidone, oral contraceptives, live vaccines and enteral-feed timing items. Theophylline management per labels: 'avoid; if unavoidable monitor serum levels and adjust dose'. Sildenafil: '~2-fold ↑ Cmax/AUC; caution (仿單：劑量需考慮減半)'. Add these missing label items: lidocaine (IV clearance ↓22%), agomelatine (expected ↑ exposure), omeprazole (slight ↓ cipro Cmax/AUC).

**Why:** No label gives these percentages or mechanisms. US 7 and SmPC 4.5 give no theophylline percentage. The sildenafil mechanism is not stated in the labels, which report a 2-fold exposure increase. The OCP and live-vaccine items appear in no source.

**Sources:** US FDA label 7, 12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/7256/smpc

### B22 · Page body (minor)

**Was:** PEDIATRIC: Plague treatment 10-21 days / prophylaxis 7 days; Neonatal 'AAP Recommendations' table; CF section titled 'Off-label' with oral 15-20 mg/kg

**Now:** Plague (treatment & prophylaxis): 10 mg/kg IV q8-12h × 14 days (US). Remove 'Off-label' from CF: approved UK/TW, IV 10 mg/kg q8h (max 1200 mg/day), PO 20 mg/kg q12h (max 750 mg/dose; TW max 1500 mg/day), 10-14 days. Flag neonatal AAP table as unsourced.

**Why:** US 2.2 Table 3 gives 14 days for plague. CF is a labelled paediatric indication in the UK SmPC 4.1/4.2 and both TW inserts.

**Sources:** US FDA label 2.2 Table 3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.2 https://www.medicines.org.uk/emc/product/7256/smpc; Taiwan Seforce insert 3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC044809%E8%99%9F

### B23 · Page body (unsupported)

**Was:** COVERAGE: 'M. tuberculosis ✓✓ Good', 'M. avium complex ✓ Variable'; 'Pseudomonas … Most active FQ; MIC90 ~0.5'; MECHANISM: '100× greater affinity than mammalian DNA gyrase', 'Post-antibiotic effect 1-6 h'; PREGNANCY: 'observational data in >2,000 first-trimester exposures'

**Now:** M. tuberculosis → 'Not recommended (WHO 2016); may cause false-negative mycobacterial cultures'. Pregnancy human data → 'prospective studies: 200 FQ-exposed (52.5% cipro) and 549 FQ-exposed pregnancies (70 cipro) – malformation rates within background (US 8.1)'. Flag the other items as unsourced.

**Why:** No label rates M. tuberculosis activity as 'Good'; the labels only warn that the drug interferes with mycobacterial cultures. US 8.1 cites cohorts of 200 and 549 pregnancies, so '>2,000' is unsourced. The MIC90, affinity and PAE figures have no source given.

**Sources:** US FDA label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f406e796-17d9-4465-b8a7-00d966a4ba74; UK SmPC 4.4 Interaction with tests https://www.medicines.org.uk/emc/product/7256/smpc; Falzon D et al. Eur Respir J 2017, PMID 28331043 https://pubmed.ncbi.nlm.nih.gov/28331043/

## Verified correct as written

- Mechanism column: bactericidal; inhibits DNA gyrase (topoisomerase II) and topoisomerase IV, blocking DNA replication, transcription and repair. Matches US label 12.4 and UK SmPC 5.1.
- Hepatic dose 'No adjustment'. Matches US 8.7 (no significant PK change in stable cirrhosis), UK SmPC 4.2 and the Seforce/Cinolone 仿單 (肝功能受損不須調整劑量).
- Category 'fluoroquinolone' agrees with the labels. 'Second generation' is conventional and the labels do not state a generation.
- Adult dose 'PO 250-750 mg q12h' and 'IV 200-400 mg q8-12h' are within the US oral/IV labels and Taiwan inserts.
- The pediatric column's cUTI doses are correct: 10-20 mg/kg PO q12h (max 750 mg) and 6-10 mg/kg IV q8h (max 400 mg) (US 2.2 Table 3).
- Breastfeeding column's LactMed content is correct: use is acceptable with infant monitoring for diarrhoea or thrush, and avoiding breastfeeding for 3-4 h after a dose lowers exposure (LactMed Summary). The body's LactMed alternatives (levofloxacin, nitrofurantoin, trimethoprim; ophthalmic levofloxacin/ofloxacin) and case reports (pseudomembranous colitis in a 2-month-old; 3 MDR-TB infants developing normally) also match LactMed.
- Drug Interactions column: tizanidine contraindicated; CYP1A2 effects on theophylline, caffeine and clozapine; warfarin ↑INR; corticosteroids ↑tendon rupture; NSAIDs ↑seizure risk. All are label-supported (US 4.2, 5.2, 5.16, 7; UK 4.4/4.5).
- Body tizanidine data (Cmax 7-fold, AUC 10-fold), ropinirole AUC +84%, duloxetine 5-fold, and antacids reducing bioavailability by up to 90% all match US 12.3 and UK 4.5.
- Side Effects column tags (dysglycemia, QTc prolong, LFT↑, neuropathy, CNS) are all label-supported (US 5.3, 5.4, 5.8, 5.12, 5.19).
- Monitor column tags (renal, LFT, neuro, CNS, ECG) are label-supported (US 5.3, 5.4, 5.8, 5.12, 5.18).
- Coverage tags Pseudomonas, MSSA, E.coli, Proteus and Klebsiella are listed in US 12.4. Streptococcus is supported by US 12.4 (S. pyogenes, S. pneumoniae), although UK 4.4 and the 仿單 say ciprofloxacin is not recommended for streptococcal infections, which the Notes already partly cover.
- Indications tags IAI, UTI, SSTI and Pneumonia are label-supported (US 1.1, 1.3, 1.4, 1.9, 1.10).
- Body: 9.3% vs 6% paediatric musculoskeletal adverse events (US 6.1); the boxed-warning tendon, neuropathy and CNS descriptions and risk factors (US 5.2-5.4); common adverse events nausea 2.5% and diarrhoea 1.6% (US 6.1); G6PD haemolysis (UK 4.4); crystalluria and hydration (US 5.17).
- Body PK values match the US oral label: bioavailability ~70%, Tmax 1-2 h, renal 40-50% unchanged, renal clearance ~300 mL/min, four metabolites ~15%, faecal 20-35%, urine >200 mcg/mL at 2 h. Vd 2-3 L/kg matches UK 5.2.
- Body oral renal table (CrCl >50 usual; 30-50 250-500 mg q12h; 5-29 250-500 mg q18h; HD/PD 250-500 mg q24h after dialysis) matches the US oral label 2.3 Table 4.
- Body US IV renal row 5-29 '200-400 mg q18-24h' matches US IV label Table 4.
- Body IV infusion over 60 minutes matches US 2.5 and 仿單 3.2. The 400 mg IV ≈ 500 mg PO and 200 mg IV ≈ 250 mg PO conversions match US Table 2.
- Body pregnancy animal data and background risk (2-4% major birth defects, 15-20% miscarriage) match US 8.1. The 'Former FDA Category C / Current: not assigned' wording in the body is acceptable as historical.
- Body adult doses matching the labels: cIAI 400 mg IV q12h with metronidazole; prostatitis 400 mg q12h / 500 mg PO for 28 d; anthrax PEP 400 mg IV q12h / 500 mg PO q12h for 60 d; FN 400 mg q8h; typhoid 500 mg q12h for 10 d (US oral); infectious diarrhoea 500 mg q12h for 5-7 d (US oral); uncomplicated cystitis 250 mg q12h for 3 d (US oral).
- Category '2nd-generation fluoroquinolone': standard class wording (SmPC 5.1 ATC J01MA02 fluoroquinolone); no label contradicts it.
- Mechanism column: inhibits DNA gyrase and topoisomerase IV, preventing replication, transcription and repair. Matches UK SmPC 5.1 and TW insert 10.1.
- Hepatic dose 'No adjustment' matches TW Seforce/Cinolone 3.3 (肝功能受損 不須調整劑量), UK SmPC 4.2 and US 8.7 (no significant PK change in stable cirrhosis).
- Adult dose PO 250-750 mg q12h matches UK SmPC 4.2. IV 200-400 mg q8-12h matches US Table 1 and TW 2×200-400 / 3×400 mg.
- Pediatric cUTI doses (10-20 mg/kg PO q12h max 750 mg; 6-10 mg/kg IV q8h max 400 mg) match US 2.2 Table 3, UK 4.2 and TW 3.3.
- Body pediatric musculoskeletal AE rates 9.3% vs 6% match US 6.1.
- Breastfeeding column core statements (acceptable with infant monitoring for diarrhoea/thrush; avoid BF 3-4 h post-dose) match LactMed Summary of Use (rev 2024-08-15). LactMed alternatives (levofloxacin, nitrofurantoin, trimethoprim; ophthalmic levofloxacin/ofloxacin) are correctly copied in the body.
- Tizanidine is contraindicated (US 4.2, SmPC 4.3, TW 4). The body figures (Cmax 7-fold, AUC 10-fold) match the labels.
- Ropinirole AUC +84%, duloxetine ~5-fold AUC with strong CYP1A2 inhibitors, sildenafil ~2-fold, methotrexate, cyclosporine, phenytoin, probenecid, warfarin, NSAID seizure and metoclopramide interactions are all consistent with US 7/12.3, SmPC 4.5 and TW 7.
- Corticosteroids increase tendon rupture risk (US 5.2, TW warning). Discontinuing at the first sign of tendon, neuropathy or CNS effects matches US 5.1-5.4.
- Monitor tags renal, LFT, neuro, CNS and ECG are supported by US 5.3, 5.4, 5.8, 5.12 and 5.18.
- Side-effect tags dysglycemia, QTc prolong, LFT↑, neuropathy and CNS are supported by US 5.3, 5.4, 5.8, 5.12 and 5.19.
- Coverage tags Pseudomonas, MSSA, E.coli, Proteus and Klebsiella are supported by US 1.1/1.10 and SmPC 5.1.
- Indication tags IAI, UTI, SSTI and Pneumonia are supported by US 1.1, 1.3, 1.4, 1.9 and 1.10 and UK 4.1.
- IV infusion over 60 minutes (body Administration Notes) matches US 2.5 and TW 3.2. Hydration to prevent crystalluria matches US 2.5 and 5.17.
- IV-to-PO equivalences 400 mg IV q12h ≈ 500 mg PO q12h and 200 mg IV ≈ 250 mg PO match US Table 2. Oral bioavailability ~70% (labels: 70-80%) is acceptable.
- Body PK/PD statement that AUC/MIC (AUIC) ≥125 predicts cure is supported by Forrest A et al. AAC 1993;37:1073-81, PMID 8517694 (verified via esummary/efetch). This is the TDM target for an item no label covers.
- Body pregnancy 'Former FDA Category: C / Current: not assigned', the animal data (no teratogenicity up to 100 mg/kg mice/rats, 30 mg/kg rabbits) and the 2-4% / 15-20% background risks match US 8.1.
- Body: no anaerobic coverage (add metronidazole for IAI) is consistent with US 1.3 (with metronidazole) and SmPC 5.1 (anaerobes inherently resistant except Mobiluncus/Peptostreptococcus/P. acnes). Stenotrophomonas resistant, MRSA unreliable, E. faecium and Listeria resistant all match SmPC 5.1 and TW 10.2.
- Body: do not give the oral suspension via feeding tube; SmPC/TW: in enteral nutrition, start IV. Directionally consistent.

## Apply log

- Coverage: removed Streptococcus; added Enterobacter, Serratia, Haemophilus, Neisseria, Legionella, Bacillus; kept CRPA, with the AST caveat added to Notes
- Indications: added cUTI, cIAI, HAP, FN, Osteoarthritis (bone/joint), Pelvic
- Side Effects: added GI, photosensitivity, SJS/TEN, hematologic, AKI, thrombophlebitis
- Monitor: added CBC, PT/INR, electrolyte
- Notes: merged text with MG changed to AVOID (boxed warning, 衛福部警語), contraindications limited to quinolone hypersensitivity and tizanidine, moderate CYP1A2 inhibitor, 特殊警語 reserve use, aortic/valve risk, IV infuse >=60 min, CRPA/IDSA caveat
- Pregnancy: PLLR text (US 8.1), UK SmPC/仿單 precaution, CDC anthrax (PMID 24457117); Category C removed
- Breastfeeding: LactMed text, RID flagged unsourced, more restrictive US/UK/仿單 label statements
- Drug Interactions: merged CYP1A2/QT/PO cation spacing (UK/仿單 vs US)/other interactions
- Adult dose: infuse >=60 min, severe Pseudomonas 400 mg q8h (仿單 3x400), IV->PO equivalences
- Pediatric dose: cUTI, anthrax PEP, plague 14 d, CF (UK/仿單) dosing
- Renal dose, HD, CRRT: Seforce/Cinolone 仿單 caps with US/UK values alongside; CRRT 400 mg q12h (Spooner 2011, Roger 2016)
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body: added FJUH products & 仿單 block near top with both TFDA links and 特殊警語
- Body: mechanism PK/PD, PAE and affinity claims flagged unsourced; resistance mechanisms cited to UK 5.1/US 12.4; false-negative TB culture note
- Body: Indications heading changed to FDA/UK-approved; endocarditis removed; chancroid moved to off-label (flagged); added lower RTI, sinusitis, CF, cholera, travellers' diarrhoea, PID/epididymo-orchitis, CSOM, N. meningitidis prophylaxis; label tags; off-label line rewritten; TB line replaced (WHO 2016)
- Body: CRPA coverage cell set to 'use only if susceptible on AST'; M. tuberculosis set to not recommended
- Body: adult dosing table updated (uncomplicated UTI IV 100 mg q12h 仿單, cUTI IV, HAP 10-14 d, bone/joint, typhoid, diarrhoea, travellers', cholera 3 d, gonorrhoea 250/500, MOE 28 d-3 mo, plague 14 d, chancroid/systemic anthrax flagged); IV->PO 400 q8h ≈ 750 PO q12h added
- Body: renal table relabelled US oral label with US IV and Seforce 仿單 IV column; Cinolone and UK SmPC lines; image caption asking owner to verify; HD/PD/CRRT rows updated; 'enhanced clearance' deleted; dialysis removal <10%; half-life corrected; AUC and loading-dose lines flagged unsourced
- Body: pediatric plague rows merged (14 d, q8-12h); neonatal AAP table flagged; CF section renamed with corrected doses (max 1200 mg/day, 20 mg/kg PO, 10-14 d)
- Body: MG boxed-warning row changed to AVOID; aortic aneurysm row moved to Serious AEs as Vascular row (with valve regurgitation, UK 4.4)
- Body: monitoring theophylline row updated
- Body: interactions updated: antacid 85-90% flagged; dairy wording; enteral feeding, melatonin, ramelteon, pirfenidone, OCs, live vaccines flagged unsourced; theophylline, clozapine, zolpidem, sildenafil corrected; warfarin mechanism flagged; lidocaine, agomelatine, omeprazole added
- Body: pregnancy header changed to PLLR/no letter category; human data row replaced with US 8.1 prospective studies; UK/仿單 'avoid' added
- Body: breastfeeding M:P, RID and AAP rows flagged; milk levels replaced with LactMed data; Labels row added
- Body: PK half-life, protein binding 20-30%, excretion, CSF <10% corrected; Key Pearls CRPA changed to 'check AST'; chelation 85-90% flagged
- Body: absolute contraindications reduced to hypersensitivity (quinolone/excipients) and tizanidine; MG and prior FQ tendon/serious reaction moved to Relative as AVOID
- Body: Brief Summary rows synced (Indications, Coverage, Adult, Renal, Pediatric, Side Effects, Monitor, DI, Pregnancy, Breastfeeding, Notes)
- Body: References section appended (US Sagent IV and Aurobindo tablet labels, UK SmPC 7256, Seforce and Cinolone 仿單, LactMed, IDSA AMR Guidance, PMIDs 24457117, 21816053, 26957490, 16163635, 19397464, 28331043)

**Notes from the apply step (needs owner check):**

- Renal image could not be verified against label values programmatically; a caption now asks the owner to check it or remove it

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
