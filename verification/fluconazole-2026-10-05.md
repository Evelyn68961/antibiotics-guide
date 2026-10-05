# Verification: Diflucan (Fluconazole)

- **Notion entry:** [Diflucan (Fluconazole)](https://app.notion.com/277c496dfff180b38ac0c3ef99542cd5)
- **Hospital codes:** DIF02 (Diflucan inj 100 mg/50 mL), FLU22 (Fluene cap 50 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/fluconazole.json` (plus any `sources/fluconazole-taiwan-insert-*.txt`)

## Product and sources

Hospital product DIF02: 泰復肯靜脈注射劑 DIFLUCAN IV INJECTION (fluconazole 2 mg/mL in 0.9% NaCl, 100 mg/50 mL), Pfizer Taiwan, 衛署藥輸字第018790號 (NHI BC18790248, ATC J02AC01). The hospital also stocks FLU22, "瑞安" 膚黴克膠囊 FLUENE 50 mg (衛署藥製字第041997號), as the oral step-down. Labels used: US FDA Fluconazole in Sodium Chloride Injection (Sagent, DailyMed setid 02f74fe7-0649-46c5-a06a-0700cd265773 v9, 2026-09-21); UK SmPC Fluconazole 2 mg/ml solution for infusion (eMC 15231, rev. 2024-03-22); TW Diflucan IV insert (CDS 20240709-3); TW Fluene insert (2023-01-13); LactMed NBK501223 (rev. 2024-10-15). Notion entry as fetched: only Adult dose ("400mg IV QD"), Renal ("CrCl\<50: 200mg IV QD") and Coverage [Candida] are filled. Every other column and the page body are empty.

## Agreed fixes applied in Notion (31)

### A1 · Renal dose, HD, CRRT (error)

**Was:** CrCl\<50: 200mg IV QD

**Now:** Single dose: no adjustment. Multiple doses: give the full loading dose first (TW insert: normal dose on days 1–2), then:<br><br>泰復肯 Diflucan IV (TW insert, stocked product):<br>• CrCl \>40: normal dose q24h<br>• CrCl 21–40: q48h or ½ daily dose<br>• CrCl 10–20: q72h or ⅓ daily dose<br><br>US FDA / UK SmPC: CrCl \>50: 100%; CrCl ≤50 (no dialysis): 50% of the daily dose (e.g., 400 → 200 mg QD)<br>(Fluene cap TW insert: \>50 normal; 21–50 q48h or ½; 11–20 q96h or ¼)<br><br>HD: 100% of the recommended dose after each HD session (a 3-h HD removes ~50%); on non-HD days, reduce per CrCl

**Why:** The current text has four problems. (1) The cutoff (<50) and the single 50% step come from the US/UK labels. The insert for the product the hospital stocks (TW Diflucan IV §3.3) uses >40 normal, 21–40 q48h or ½, and 10–20 q72h or ⅓. Under the ground rules the TW insert comes first, with US/UK values alongside. The labels also say ≤50, not <50. (2) A fixed '200 mg' assumes a 400 mg base dose. All labels express the adjustment as a % or interval of the indication dose, after a full loading dose. (3) HD is missing. All labels say to give 100% of the dose after each HD session. Applying 'CrCl<50 → 200 mg' to an HD patient would under-dose. (4) For CrCl 10–20, the TW insert gives ⅓ of the dose, so 200 mg QD exceeds the stocked-product label. FDA 'Dosage In Patients With Impaired Renal Function': 'initial loading dose of 50 mg to 400 mg… >50: 100; ≤50 (no dialysis): 50; Hemodialysis: 100% after each hemodialysis'. FDA Clinical Pharmacology: '3-hour hemodialysis session decreases plasma concentrations by approximately 50%'.

**Sources:** TW Diflucan IV insert 泰復肯靜脈注射劑 §3.3 腎功能受損病人 (CDS 20240709-3) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; US FDA label (Sagent fluconazole injection) DOSAGE AND ADMINISTRATION – Dosage In Patients With Impaired Renal Function; CLINICAL PHARMACOLOGY – Pharmacokinetics and Metabolism https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC Fluconazole 2 mg/ml infusion §4.2 Renal impairment https://www.medicines.org.uk/emc/product/15231/smpc; TW Fluene 50 mg cap insert §3.3 腎功能不全之劑量 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041997%E8%99%9F

### A2 · Renal dose, HD, CRRT (missing)

**Was:** (no CRRT guidance)

**Now:** Append: <br>CRRT: no label dose. Do NOT reduce, because CRRT clearance can exceed normal renal clearance. Use 800 mg/day, e.g., 400 mg IV q12h after an 800 mg load (CVVHF: Bergner 2006; CVVHDF: Patel 2011; CVVHD: Coenradie 2025). Consider TDM (Muhl 2000)

**Why:** No label covers CRRT, so this comes from tier 3 (PubMed). All PMIDs were verified with E-utilities esummary/efetch. Bergner 2006 (PMID 16311263): 'in these patients, 800 mg fluconazole/day are necessary' (CVVHF). Patel 2011 (PMID 21930888): CVVHDF clearance was 2.3× that of healthy volunteers; Monte Carlo simulation found 400 mg twice daily optimal up to MIC 16. Coenradie 2025 (PMID 39332343): 'at least 400 mg twice daily' on CVVHD. Muhl 2000 (PMID 11214774): 400–800 mg/day, 'drug monitoring is highly recommended'. The loading-dose principle (2× the daily dose on day 1) is from the FDA Multiple Dose section.

**Sources:** Bergner R et al. Nephrol Dial Transplant 2006;21(4):1019-23, PMID 16311263 https://pubmed.ncbi.nlm.nih.gov/16311263/; Patel K et al. Antimicrob Agents Chemother 2011;55(12):5868-73, PMID 21930888 https://pubmed.ncbi.nlm.nih.gov/21930888/; Coenradie SM et al. J Crit Care 2025;85:154924, PMID 39332343 https://pubmed.ncbi.nlm.nih.gov/39332343/; Muhl E et al. Eur J Clin Pharmacol 2000;56(9-10):671-8, PMID 11214774 https://pubmed.ncbi.nlm.nih.gov/11214774/; US FDA label DOSAGE AND ADMINISTRATION – Multiple Dose https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773

### A3 · Adult dose (missing)

**Was:** 400mg IV QD

**Now:** Loading dose = 2× daily dose on day 1; IV = PO daily dose<br><br>• Invasive candidiasis / candidemia: 800 mg day 1 → 400 mg IV QD; continue 2 wk after the first negative blood culture and symptom resolution (UK SmPC; IDSA 2016)<br>  (TW Diflucan IV insert: 400 mg day 1 → 200 mg QD, up to 400 mg)<br>• Cryptococcal meningitis: 400 mg day 1 → 200–400 mg QD; 10–12 wk after CSF culture is negative (FDA) / usually ≥6–8 wk (SmPC, TW); up to 800 mg/day if life-threatening (SmPC). Suppression: 200 mg QD<br>• Esophageal candidiasis: 200 mg day 1 → 100 mg QD (up to 400 mg); ≥3 wk and ≥2 wk after symptoms resolve<br>• Oropharyngeal candidiasis: 200 mg day 1 → 100 mg QD, ≥2 wk<br>• Candiduria / Candida UTI: 200–400 mg QD × 7–21 d (UK SmPC); FDA: 50–200 mg/day (small open studies)<br>• Candida peritonitis: 50–200 mg/day (FDA)<br>• Prophylaxis (BMT / prolonged neutropenia): 400 mg QD (SmPC 200–400 mg); start several days before expected neutropenia, continue 7 d after ANC >1000<br>• Vaginal candidiasis: 150 mg PO single dose (TW insert)

**Why:** 400 mg QD is a correct maintenance dose for invasive candidiasis (UK SmPC), cryptococcal meningitis (upper end) and BMT prophylaxis (FDA). However, it gives no loading dose, which every label requires for multi-dose therapy: FDA Multiple Dose says 'a loading dose of twice the daily dose is recommended on the first day'; UK SmPC gives 'Invasive candidiasis Loading dose: 800 mg on Day 1, Subsequent dose: 400 mg once daily'. It also gives no indication or duration. The TW insert for the stocked product still lists the older 400→200 mg candidemia regimen, so that value is shown alongside.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION – Multiple Dose https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.2 Posology (Adults table) https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §3.1 用法用量 成人 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; Pappas PG et al. IDSA Clinical Practice Guideline for the Management of Candidiasis: 2016 Update. Clin Infect Dis 2016;62(4):e1-50, PMID 26679628 https://pubmed.ncbi.nlm.nih.gov/26679628/

### A4 · Hepatic dose (missing)

**Was:** (empty)

**Now:** No dose adjustment defined (limited data). Use with caution in hepatic dysfunction. Rare serious hepatotoxicity, including fatal cases, mainly in patients with severe underlying disease. Monitor LFTs; stop if clinical liver disease attributable to fluconazole develops

**Why:** FDA WARNINGS (1) Hepatic injury: 'should be administered with caution to patients with liver dysfunction… rare cases of serious hepatic toxicity, including fatalities… should be discontinued if clinical signs and symptoms consistent with liver disease develop'. UK SmPC 4.2: 'Limited data are available in patients with hepatic impairment, therefore fluconazole should be administered with caution'. TW insert 6.6: 'Fluconazole 應慎用於肝功能不全的病人'.

**Sources:** US FDA label WARNINGS (1) Hepatic injury https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.2 Hepatic impairment; §4.4 Hepatobiliary system https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §5.1, §6.6 肝功能不全 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### A5 · Pediatric dose (missing)

**Was:** (empty)

**Now:** US FDA:<br>• Oropharyngeal / esophageal (≥6 mo): 6 mg/kg day 1 → 3 mg/kg QD (esophageal up to 12 mg/kg/day)<br>• Systemic Candida: ≥3 mo: 25 mg/kg day 1 (MAX 800 mg) → 12 mg/kg QD (MAX 400 mg); 0–3 mo: 25 mg/kg → 12 mg/kg QD (GA ≥30 wk) or 9 mg/kg QD (GA \<30 wk); on ECMO: load 35 mg/kg<br>• Cryptococcal meningitis: 12 mg/kg day 1 → 6–12 mg/kg QD; suppression 6 mg/kg QD<br>UK SmPC: MAX 400 mg/day; term neonates 0–14 d: same mg/kg q72h, 15–27 d: q48h (MAX 12 mg/kg/dose)<br>TW 泰復肯 IV insert: \<16 y 不建議, unless necessary: 1–2 mg/kg/day (superficial), 3–6 mg/kg/day (systemic / cryptococcal)<br>Renal impairment: reduce as for adults

**Why:** The column is empty, but the labels give full paediatric dosing. FDA 'Dosage and Administration in Pediatric Patients' Table 6 (25 mg/kg load, 12 or 9 mg/kg) and 'Dosing in Pediatric Patients on ECMO' (35 mg/kg load; cryptococcal 12 → 6 mg/kg). UK SmPC 4.2 paediatric/neonatal tables. TW insert §3.3 gives the conservative (older) 1–2 / 3–6 mg/kg/day and 'not recommended <16 y'. The TW insert's own §11 PK section describes the 25 mg/kg and 35 mg/kg (ECMO) loading doses, so the US dosing is consistent with the TW PK data.

**Sources:** US FDA label – Dosage and Administration in Pediatric Patients; Dosing in Pediatric Patients on ECMO; Dosage In Patients With Impaired Renal Function https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.2 Paediatric population / Term newborn infants https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §3.3 小孩; §11 兒童藥物動力學 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### A6 · Indications (missing)

**Was:** (empty)

**Now:** Candidiasis, Meningitis, UTI, Peritonitis

**Why:** FDA INDICATIONS: 'Oropharyngeal and esophageal candidiasis… Candida urinary tract infections, peritonitis, and systemic Candida infections including candidemia… Cryptococcal meningitis… Prophylaxis… bone marrow transplantation'. UK SmPC 4.1 adds invasive candidiasis, coccidioidomycosis and prophylaxis in prolonged neutropenia. Both options exist in the schema: 'Candidiasis' covers candidemia, invasive and mucosal disease, and 'Meningitis' covers cryptococcal meningitis. Cryptococcosis and coccidioidomycosis have no schema option, so they belong in the body. Optional: 'Peritonitis' and 'UTI' (Candida) are in the FDA indications paragraph, but the evidence is small open studies, and the Micafungin entry tags only Candidiasis. Do not use 'FN': prophylaxis is not FN treatment.

**Sources:** US FDA label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.1 Therapeutic indications https://www.medicines.org.uk/emc/product/15231/smpc

### A7 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, CNS, hypokalemia, QTc prolong, SJS/TEN, DRESS, thrombocytopenia, leukopenia, neutropenia

**Why:** FDA ADVERSE REACTIONS: nausea 3.7%, headache 1.9%, rash 1.8%, vomiting, abdominal pain, diarrhea. Hepatic reactions range from transaminase rises to fulminant failure. Post-marketing: 'QT prolongation, torsade de pointes… Seizures, dizziness… Leukopenia, including neutropenia and agranulocytosis, thrombocytopenia… hypokalemia… Stevens-Johnson syndrome and toxic epidermal necrolysis, DRESS'. UK SmPC 4.8: very common/common headache, GI effects, ALT/AST/ALP increased, rash. TW insert §8 lists the same. All tags exist in the schema.

**Sources:** US FDA label ADVERSE REACTIONS – In Patients Receiving Multiple Doses; Post-Marketing Experience https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.8 Undesirable effects https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §8 副作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### A8 · Monitor (missing)

**Was:** (empty)

**Now:** LFT, renal, electrolyte, ECG

**Why:** LFT: FDA WARNINGS say patients with abnormal LFTs 'should be monitored for the development of more severe hepatic injury'. Renal: dosing depends on CrCl, and FDA Geriatric Use says 'It may be useful to monitor renal function'. Electrolyte and ECG: FDA PRECAUTIONS say QT prolongation/TdP risk rises with 'hypokalemia and advanced cardiac failure… administered with caution'. All four options exist in the schema. Note: CPK monitoring applies only with statin co-therapy (see Drug Interactions), so it is not proposed as a tag.

**Sources:** US FDA label WARNINGS; PRECAUTIONS – General; Geriatric Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.4 Cardiovascular system / Hepatobiliary system https://www.medicines.org.uk/emc/product/15231/smpc

### A9 · Mechanism (missing)

**Was:** (empty)

**Now:** Inhibits fungal CYP450-dependent lanosterol 14α-demethylase → ↓ ergosterol and accumulation of 14α-methyl sterols → fungistatic; highly selective over mammalian CYP. PK/PD: AUC/MIC (AUC rises ~1:1 with dose). Resistance: ERG11 mutation/overexpression, CDR/MDR efflux pumps

**Why:** FDA Mechanism of Action: 'highly selective inhibitor of fungal cytochrome P450 dependent enzyme lanosterol 14-α-demethylase… may be responsible for the fungistatic activity'. FDA Resistance section covers ERG11 and CDR/MDR. UK SmPC 5.1: 'almost 1:1 linear relationship between the AUC and the dose… cure is less likely for infections caused by strains with a higher fluconazole MIC'.

**Sources:** US FDA label CLINICAL PHARMACOLOGY – Mechanism of Action; Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §5.1 Pharmacodynamic properties https://www.medicines.org.uk/emc/product/15231/smpc

### A10 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Strong CYP2C19, moderate CYP2C9 and CYP3A4 inhibitor (UK SmPC: potent CYP2C9); effect persists 4–5 d after stopping<br>CONTRAINDICATED: QT-prolonging CYP3A4 substrates: erythromycin, pimozide, quinidine, cisapride, astemizole; terfenadine if fluconazole ≥400 mg/day<br>AVOID: voriconazole, abrocitinib, lemborexant; olaparib (not recommended); halofantrine (SmPC)<br>Monitor / ↓ dose: warfarin (PT/INR, bleeding), phenytoin, carbamazepine (+30%), cyclosporine, oral tacrolimus (up to 5×), sirolimus, sulfonylureas (hypoglycemia), statins (atorva/simva/fluva → myopathy; check CPK), midazolam/triazolam, fentanyl/alfentanil/methadone, amiodarone (QT, esp. 800 mg), rifabutin (↑80%, uveitis), theophylline, tofacitinib, ibrutinib, ivacaftor, lurasidone, tolvaptan, vinca alkaloids, zidovudine, celecoxib/NSAIDs, CCBs, losartan<br>Rifampin ↓ fluconazole (AUC −25%) → consider ↑ fluconazole dose<br>Prednisone: watch for adrenal insufficiency after stopping long-term fluconazole

**Why:** FDA CONTRAINDICATIONS names erythromycin, pimozide and quinidine. UK SmPC 4.3 and TW insert §4 add cisapride, astemizole and terfenadine (≥400 mg/day). FDA PRECAUTIONS – Drug Interactions: 'moderate CYP2C9 and CYP3A4 inhibitor… strong inhibitor of CYP2C19… persists 4 to 5 days after discontinuation', with avoid statements for abrocitinib, lemborexant and voriconazole and the monitoring list above. TW insert §7: rifampicin AUC −25%. UK SmPC 4.4: 'potent CYP2C9 inhibitor', halofantrine not recommended.

**Sources:** US FDA label CONTRAINDICATIONS; PRECAUTIONS – Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.3, §4.4 (Cytochrome P450, Halofantrine, Terfenadine), §4.5 https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §4 禁忌; §7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### A11 · Pregnancy (missing)

**Was:** (empty)

**Now:** No FDA letter category (narrative label). Avoid unless the fungal infection is severe or life-threatening and benefit outweighs fetal risk (FDA; TW insert). High dose (400–800 mg/day) in most or all of the 1st trimester → distinct congenital anomalies (brachycephaly, cleft palate, femoral bowing, cardiac defects). 150 mg single or repeated dose in the 1st trimester: possible ↑ spontaneous abortion and malformations (epidemiological data). Effective contraception during treatment and for ~1 wk after the last dose. UK SmPC: standard or short courses only if clearly necessary; high-dose or prolonged courses only for life-threatening infection

**Why:** Under the ground rules no letter category is written. FDA PRECAUTIONS – Teratogenic Effects: 'Use in pregnancy should be avoided except in patients with severe or potentially life-threatening fungal infections… contraceptive measures… approximately 1 week (5 to 6 half-lives)'. FDA Human Data lists the defects. UK SmPC 4.6 gives the dose-tiered wording. TW insert §6.1 matches the FDA text.

**Sources:** US FDA label WARNINGS (4) Potential for fetal harm; PRECAUTIONS – Teratogenic Effects; Human Data https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.6 Pregnancy https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §5.1, §6.1 懷孕, §6.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### A12 · Breastfeeding (missing)

**Was:** (empty)

**Now:** LactMed (rev. 2024-10): acceptable. The milk dose (~0.6 mg/kg/day at a maternal 200 mg/day) is below the neonatal dose; watch the infant for GI upset. UK SmPC / TW insert: breastfeeding may continue after a single 150 mg dose but is not recommended after repeated or high-dose use. FDA: use with caution

**Why:** LactMed Summary: 'Fluconazole is acceptable in nursing mothers because amounts excreted into breastmilk are less than the neonatal fluconazole dosage'. LactMed Drug Levels: 'maximum of about 0.6 mg/kg daily'. LactMed Effects in Breastfed Infants: flushed cheeks, GI upset. UK SmPC 4.6 and TW insert §6.2: 'Breast-feeding may be maintained after a single use of 150 mg… not recommended after repeated use or after high dose'. FDA Nursing Mothers: 'Caution should be exercised'. The sources disagree, so both positions are stated.

**Sources:** LactMed Fluconazole NBK501223 (rev. 2024-10-15) – Summary of Use during Lactation; Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK501223/; UK SmPC §4.6 Breast-feeding https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; US FDA label PRECAUTIONS – Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773

### A13 · Notes (missing)

**Was:** (empty)

**Now:** IV↔PO 同日劑量 (oral F >90%); 院內 oral = Fluene 50 mg cap<br>Loading dose = 2× daily dose on day 1<br>Na load: 2 mg/mL in NS; 200 mg/100 mL = 15 mmol Na⁺ (caution with fluid/Na restriction); infuse ≤10 mL/min (TW/UK) or ≤~200 mg/h (FDA)<br>C. krusei, C. auris: resistant; C. glabrata: ↓ susceptibility (MIC 16–32 → highest dose, or switch agent)<br>CSF 50–90% of plasma (~80% in fungal meningitis); urine ~10× plasma → good for CNS / urinary Candida<br>3-h HD removes ~50%<br>Rare: hepatotoxicity (can be fatal), reversible adrenal insufficiency

**Why:** FDA Multiple Dose: 'THE DAILY DOSE OF FLUCONAZOLE IS THE SAME FOR ORAL AND INTRAVENOUS ADMINISTRATION'. FDA Administration: max ~200 mg/hour. UK SmPC 4.2 and TW insert 3.1: ≤10 mL/min and 15 mmol Na per 200 mg/100 mL. FDA Antimicrobial Activity/Resistance and UK SmPC 4.4 cover C. krusei, C. auris and C. glabrata (MIC 16–32 → highest dose). FDA PK: CSF ~80%; urine/plasma ratio 10. FDA PRECAUTIONS covers adrenal insufficiency. These are administration facts, not storage or stability, so the owner's rule is respected.

**Sources:** US FDA label – Multiple Dose; Administration; Antimicrobial Activity; Resistance; Pharmacokinetics and Metabolism; PRECAUTIONS General https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.2 Method of administration; §4.4 Candidiasis, Adrenal insufficiency https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert §3.1; §10.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### A14 · Category (missing)

**Was:** (empty)

**Now:** Triazole antifungal

**Why:** UK SmPC 5.1: 'Antimycotics for systemic use, triazole derivatives. ATC code: J02AC01'. FDA DESCRIPTION: 'synthetic triazole antifungal'. The wording matches the existing Cresemba entry ('Triazole antifungal (prodrug)').

**Sources:** UK SmPC §5.1 Pharmacodynamic properties https://www.medicines.org.uk/emc/product/15231/smpc; US FDA label DESCRIPTION https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773

### A15 · Page body (missing)

**Was:** This page is blank and has no content.

**Now:** Build the body on the Meropenem template. Sections: (1) one-line summary: triazole antifungal, IV/PO, the hospital stocks 泰復肯 IV 2 mg/mL and Fluene 50 mg cap. (2) Mechanism + PK/PD (A9). (3) Spectrum: C. albicans, C. parapsilosis, C. tropicalis, Cryptococcus neoformans/gattii, Coccidioides, Histoplasma, Blastomyces (in vitro, SmPC 5.1); C. glabrata reduced (intermediate/SDD); not covered: C. krusei, C. auris. (4) Indications: approved (FDA/UK): candidemia/invasive candidiasis, oropharyngeal/esophageal candidiasis, candiduria, Candida peritonitis, cryptococcal meningitis (treatment and suppression), coccidioidomycosis (UK), prophylaxis in BMT/prolonged neutropenia, vaginal candidiasis (oral). (5) Dosing tables: adult (A3), pediatric (A5), renal/HD/CRRT showing the TW insert table with the US/UK row alongside (A1, A2), hepatic (A4). (6) Administration: ≤10 mL/min, Na load, IV=PO. (7) Adverse effects & monitoring (A7, A8). (8) Drug interaction table (A10). (9) Pregnancy & lactation (A11, A12). (10) References with URLs: FDA DailyMed setid 02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC eMC 15231; TW inserts 衛署藥輸字第018790號 / 衛署藥製字第041997號; LactMed NBK501223; IDSA candidiasis 2016 (PMID 26679628); CRRT PMIDs 16311263, 21930888, 39332343, 11214774. No storage section.

**Why:** Every other filled entry (e.g., Meropenem) has a structured body. This page has none, so no content in the columns is traceable to a source. All proposed content is drawn from the label sections cited in A1–A14.

**Sources:** US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §4.1, §5.1 https://www.medicines.org.uk/emc/product/15231/smpc; TW Diflucan IV insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; LactMed NBK501223 https://www.ncbi.nlm.nih.gov/books/NBK501223/

### A16 · Coverage (minor)

**Was:** Candida

**Now:** Keep [Candida] (no change). Do NOT add Aspergillus. Add the species caveat to Notes/body (C. krusei, C. auris resistant; C. glabrata reduced)

**Why:** Correct as tagged. FDA Antimicrobial Activity lists C. albicans, C. glabrata ('Many isolates are intermediately susceptible'), C. parapsilosis, C. tropicalis and Cryptococcus neoformans, and says 'Candida krusei should be considered to be resistant'. The schema has no Cryptococcus option, so cryptococcal activity must go in the body/Notes. In mice, fluconazole antagonised amphotericin B against A. fumigatus (FDA interactions), and no label claims mould activity, so an Aspergillus tag would be unsupported.

**Sources:** US FDA label CLINICAL PHARMACOLOGY – Antimicrobial Activity https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC §5.1 Susceptibility in vitro https://www.medicines.org.uk/emc/product/15231/smpc

### B1 · Renal dose, HD, CRRT (error)

**Was:** CrCl\<50: 200mg IV QD

**Now:** 單劑治療 (e.g. 150 mg) 不需調整<br>多次給藥: Day 1–2 正常劑量 (loading dose 不減), then:<br><span color="green">`TW Diflucan IV 仿單`</span><br>• CrCl \>40: q24h (正常劑量)<br>• CrCl 21–40: q48h or 1/2 daily dose<br>• CrCl 10–20: q72h or 1/3 daily dose<br>(TW Fluene cap 仿單: \>50 q24h; 21–50 q48h or 1/2; 11–20 q96h or 1/4)<br>US/UK label: CrCl \>50: 100%; CrCl ≤50 (no dialysis): 50% of indication dose (after 50–400 mg loading dose)<br><br>HD: 100% dose after each HD (3-h HD removes ~50%); non-HD days: dose by CrCl (US/UK)<br>[CRRT line from B2 appended here]

**Why:** The current text is a fixed 200 mg at CrCl <50. That works only if the indication dose is 400 mg, so it under- or over-doses for other indications (e.g. crypto 200–400, esophageal 100–200). It also omits the full loading dose. Its cutoff matches neither the stocked product's TW insert (normal dose on days 1–2, then >40 / 21–40 / 10–20 with q48h or ½, q72h or ⅓) nor the US/UK boundary, which is '≤50', not '<50'. Ground rules put the TW insert of the stocked product first, with US/UK values alongside. Re-verified from source text: TW insert 3.3 腎功能受損病人 table; US 'Dosage In Patients With Impaired Renal Function' table (>50 100%, ≤50 50%, HD 100% after each HD); UK SmPC 4.2 Renal impairment (same as US, plus 'No adjustments in single dose therapy'). US OVERDOSAGE and UK 4.9: a 3-h HD session lowers plasma levels by ~50%.

**Sources:** TW 仿單 泰復肯靜脈注射劑 DIFLUCAN IV, 衛署藥輸字第018790號, §3.3 特殊族群用法用量-腎功能受損病人 & §9 過量: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; US label Fluconazole in NaCl Injection (Sagent), DOSAGE AND ADMINISTRATION – Dosage In Patients With Impaired Renal Function; OVERDOSAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC Fluconazole 2 mg/ml solution for infusion, 4.2 Renal impairment; 4.9 Overdose: https://www.medicines.org.uk/emc/product/15231/smpc

### B2 · Renal dose, HD, CRRT (missing)

**Was:** No CRRT guidance

**Now:** CRRT (no label dose; literature): 不減量 — CRRT clearance may exceed normal renal clearance. 800 mg/day, e.g. 400 mg IV q12h (CVVHF: Bergner 2006; CVVHDF: Patel 2011; CVVHD: Coenradie 2025; ICU PopPK: Muilwijk 2020). Loading dose per indication (e.g. candidemia 800 mg D1). Consider TDM (Muhl 2000; trough correlates with AUC, Muilwijk 2020)

**Why:** No label covers CRRT, so this comes from literature (tier 3). All PMIDs were verified with NCBI esummary/efetch. Muilwijk 2020, critically ill patients (AAC, PMID 32816723): 'We recommend ... 800 mg for patients treated with CRRT.' Patel 2011, CVVHDF (AAC, PMID 21930888): total clearance was 2.3× faster than in healthy volunteers, CVVHDF accounted for 62% of clearance, and Monte Carlo simulation found that '400 mg twice daily maximizes empirical treatment ... MIC up to 16'. Coenradie 2025, CVVHD (J Crit Care, PMID 39332343): 'at least 400 mg twice daily' reached target in 100% of patients. Muhl 2000 (Eur J Clin Pharmacol, PMID 11214774): 400–800 mg/day on CVVHD, and 'Drug monitoring is highly recommended'. Applying a renal-impairment cut (e.g. 200 mg QD) to a CRRT patient would underdose seriously.

**Sources:** Muilwijk EW et al. AAC 2020;64:e00984-20, PMID 32816723: https://pubmed.ncbi.nlm.nih.gov/32816723/; Patel K et al. AAC 2011;55:5868-73, PMID 21930888: https://pubmed.ncbi.nlm.nih.gov/21930888/; Coenradie SM et al. J Crit Care 2025;85:154924, PMID 39332343: https://pubmed.ncbi.nlm.nih.gov/39332343/; Muhl E et al. Eur J Clin Pharmacol 2000;56:671-8, PMID 11214774: https://pubmed.ncbi.nlm.nih.gov/11214774/

### B3 · Adult dose (missing)

**Was:** 400mg IV QD

**Now:** Loading dose = 2× daily dose on Day 1; IV = PO same daily dose<br>Candidemia / invasive candidiasis: 800 mg (12 mg/kg) IV D1 → 400 mg (6 mg/kg) IV QD, 持續至 first negative blood culture 後 2 週 (UK SmPC; IDSA 2016)<br>  (TW Diflucan IV 仿單: 400 mg D1 → 200 mg QD, 可增至 400 mg QD; US: up to 400 mg/day)<br>Cryptococcal meningitis: 400 mg D1 → 200–400 mg QD (UK: ≥6–8 wk, 危及生命可至 800 mg; US: 10–12 wk after CSF culture negative); maintenance 200 mg QD<br>Esophageal: 200–400 mg D1 → 100–200 mg QD (US up to 400 mg), ≥3 wk & ≥2 wk after symptom resolution<br>Oropharyngeal: 200–400 mg D1 → 100–200 mg QD × 7–21 d<br>Candiduria: 200–400 mg QD × 7–21 d (IDSA cystitis: 200 mg QD × 2 wk)<br>Prophylaxis (prolonged neutropenia / HSCT): 200–400 mg QD (US BMT: 400 mg QD), until 7 d after ANC >1000<br>Vaginal candidiasis: 150 mg PO single dose

**Why:** 400 mg QD is the right maintenance dose for invasive candidiasis (UK 4.2, IDSA), so it should stay. But the 800 mg loading dose, which both the UK SmPC and IDSA require, is missing, as is any indication context. Without the loading dose a reader would under-dose on day 1. The labels differ: the stocked TW insert gives 400→200 (up to 400) for candidemia, and the US says only 'up to 400 mg daily' (optimal dose not established). Both should be shown. All numbers were re-verified against the source text: US 'Multiple Dose'; UK 4.2 adults table; TW insert §3.1 成人 1a–5; IDSA Candidiasis 2016 recommendations for candidemia and cystitis.

**Sources:** UK SmPC 4.2 Posology (Adults table): https://www.medicines.org.uk/emc/product/15231/smpc; US label DOSAGE AND ADMINISTRATION – Multiple Dose: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; TW 仿單 DIFLUCAN IV §3.1 用法用量 成人: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; IDSA Candidiasis guideline 2016 (Pappas, CID, PMID 26679628): https://www.idsociety.org/practice-guideline/candidiasis/

### B4 · Pediatric dose (missing)

**Was:** (empty)

**Now:** US label: OPC/esophageal ≥6 mo: 6 mg/kg D1 → 3 mg/kg QD (esophageal up to 12 mg/kg/d)<br>Systemic Candida ≥3 mo: 25 mg/kg D1 (max 800 mg) → 12 mg/kg QD (max 400 mg); 0–3 mo: GA ≥30 wk 25→12 mg/kg, GA <30 wk 25→9 mg/kg QD; ECMO: loading 35 mg/kg<br>Crypto meningitis: 12 mg/kg D1 → 6–12 mg/kg QD; suppression 6 mg/kg QD<br>UK SmPC (28 d–11 y): mucosal 6→3 mg/kg; invasive/crypto 6–12 mg/kg QD; prophylaxis 3–12 mg/kg QD; term neonate 0–14 d: same mg/kg q72h, 15–27 d: q48h; max 400 mg/day<br>TW Diflucan IV 仿單: <16 歲不建議, 若必要: 表淺念珠菌 1–2 mg/kg/d, 全身性念珠菌/隱球菌 3–6 mg/kg/d

**Why:** The column is empty, though all three labels give paediatric dosing. The US label now gives a 25 mg/kg loading dose followed by 12 mg/kg for systemic candidiasis (Table 6), plus ECMO dosing. The UK SmPC covers ages 0–17, with neonatal q72h/q48h intervals. The stocked TW insert discourages use under 16 but gives 1–2 or 3–6 mg/kg/d. Re-verified: US 'Dosage and Administration in Pediatric Patients', 'Dosing in Pediatric Patients on ECMO', and the paediatric crypto paragraph; UK 4.2 Paediatric population; TW §3.3 小孩.

**Sources:** US label – Dosage and Administration in Pediatric Patients / Dosing in Pediatric Patients on ECMO: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 4.2 Paediatric population: https://www.medicines.org.uk/emc/product/15231/smpc; TW 仿單 DIFLUCAN IV §3.3 特殊族群用法用量-小孩: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B5 · Hepatic dose (missing)

**Was:** (empty)

**Now:** No dose adjustment data (limited data) — use with caution (肝功能不全慎用); monitor LFT; 若出現可歸因於 fluconazole 之肝病徵象應停藥

**Why:** UK 4.2 Hepatic impairment: 'Limited data are available ... administered with caution'. UK 4.4 and US WARNINGS (1): rare serious hepatotoxicity, including fatalities; stop the drug if clinical liver disease develops. TW §6.6: 應慎用於肝功能不全的病人.

**Sources:** UK SmPC 4.2 Hepatic impairment; 4.4 Hepatobiliary system: https://www.medicines.org.uk/emc/product/15231/smpc; US label WARNINGS (1) Hepatic injury: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; TW 仿單 DIFLUCAN IV §5.1, §6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B6 · Indications (missing)

**Was:** (empty)

**Now:** Candidiasis, Meningitis

**Why:** All four are existing schema options. Candidiasis: US INDICATIONS (oropharyngeal/esophageal candidiasis, systemic Candida infections) and UK 4.1 (invasive and mucosal candidiasis). Meningitis: cryptococcal meningitis is approved in both the US and UK. UTI and Peritonitis: the US INDICATIONS list 'Candida urinary tract infections, peritonitis', and the UK lists candiduria. All of these are fungal, which Notes should say. Cryptococcus, coccidioidomycosis (UK) and antifungal prophylaxis have no schema option, so they belong in Notes. Bacteremia, FN and Pneumonia are not proposed, because their tags imply bacterial use.

**Sources:** US label INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 4.1 Therapeutic indications: https://www.medicines.org.uk/emc/product/15231/smpc

### B7 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, CNS, QTc prolong, hypokalemia, SJS/TEN, DRESS

**Why:** All are existing schema options. UK 4.8: very common or common headache, abdominal pain, diarrhoea, nausea, vomiting, raised ALT/AST/ALP, rash. Uncommon: seizures, dizziness. Rare: hypokalaemia, QT prolongation/TdP, TEN/SJS, hepatic failure. DRESS frequency is not known. The US 'In Patients Receiving Multiple Doses' section gives nausea 3.7%, headache 1.9%, rash 1.8%, vomiting 1.7%; US post-marketing lists QT/TdP, seizures, hypokalemia, SJS/TEN, DRESS. TW §8.1 is equivalent. Optionally add 'hematologic' (rare leukopenia/thrombocytopenia/agranulocytosis).

**Sources:** UK SmPC 4.8 Undesirable effects: https://www.medicines.org.uk/emc/product/15231/smpc; US label ADVERSE REACTIONS / Post-Marketing Experience: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; TW 仿單 DIFLUCAN IV §8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B8 · Monitor (missing)

**Was:** (empty)

**Now:** LFT, renal, ECG, electrolyte

**Why:** LFT: the US WARNINGS and UK 4.4 call for close monitoring if LFTs become abnormal. Renal: the dose depends on CrCl, and US Geriatric Use says 'It may be useful to monitor renal function'. ECG and electrolyte: US PRECAUTIONS General and UK 4.4 warn of QT prolongation and TdP, with higher risk when hypokalaemia or advanced heart failure is present. All four are existing options.

**Sources:** US label WARNINGS; PRECAUTIONS – General; Geriatric Use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 4.4 Hepatobiliary / Cardiovascular system: https://www.medicines.org.uk/emc/product/15231/smpc

### B9 · Mechanism (missing)

**Was:** (empty)

**Now:** Triazole; inhibits fungal CYP450 lanosterol 14α-demethylase (ERG11) → ↓ergosterol + accumulation of 14α-methyl sterols → fungistatic; resistance: ERG11 mutation/overexpression, CDR/MDR efflux pumps

**Why:** US 'Mechanism of Action' and 'Resistance' sections; UK 5.1 Mechanism of action and Mechanisms of resistance; TW §10.1.

**Sources:** US label CLINICAL PHARMACOLOGY – Mechanism of Action / Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/15231/smpc

### B10 · Category (missing)

**Was:** (empty)

**Now:** Triazole antifungal

**Why:** UK 5.1: 'Antimycotics for systemic use, triazole derivatives. ATC code: J02AC01'. TW §10.1: 全身使用性抗黴菌劑 triazole 衍生物. This matches the style of the Micafungin entry ('Echinocandin antifungal').

**Sources:** UK SmPC 5.1: https://www.medicines.org.uk/emc/product/15231/smpc; TW 仿單 DIFLUCAN IV §10.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B11 · Drug Interactions (missing)

**Was:** (empty)

**Now:** 禁忌併用: QT-prolonging CYP3A4 substrates — erythromycin, pimozide, quinidine, cisapride, astemizole; terfenadine (if fluconazole ≥400 mg/day)<br>Strong CYP2C19, moderate CYP2C9/3A4 inhibitor (UK: potent 2C9); inhibition persists 4–5 d after stopping<br>Avoid / not recommended: voriconazole, lemborexant, olaparib; abrocitinib (US: avoid; TW: adjust dose per abrocitinib label)<br>↑ levels/toxicity: warfarin (↑INR, bleeding), phenytoin, sulfonylureas (hypoglycemia), oral tacrolimus (up to 5×)/cyclosporine/sirolimus, statins (atorva/simva/fluva: myopathy, check CK), midazolam/triazolam, fentanyl/alfentanil/methadone, amiodarone (↑QT, esp. 800 mg), carbamazepine (+30%), celecoxib/NSAIDs, theophylline, tofacitinib, ibrutinib, tolvaptan, ivacaftor, lurasidone, vinca alkaloids, zidovudine, rifabutin (↑80%, uveitis)<br>Rifampin ↓ fluconazole (AUC −25%) → ↑ fluconazole dose<br>Prednisone: watch for adrenal insufficiency when long-term fluconazole is stopped

**Why:** Contraindications: the US lists erythromycin, pimozide and quinidine. UK 4.3 and TW §4 add cisapride, astemizole, and terfenadine at multiple doses ≥400 mg/day. The inhibition profile and the 4–5-day persistence come from US PRECAUTIONS 'Drug Interactions'. UK 4.4 calls fluconazole a 'potent CYP2C9 inhibitor'; TW calls it 中效 2C9/3A4. Each listed interaction is quoted in the US 'Drug Interactions' text and TW §7. TW gives rifampicin as AUC −25%.

**Sources:** US label CONTRAINDICATIONS; PRECAUTIONS – Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 4.3, 4.4, 4.5: https://www.medicines.org.uk/emc/product/15231/smpc; TW 仿單 DIFLUCAN IV §4 禁忌, §7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B12 · Pregnancy (missing)

**Was:** (empty)

**Now:** No FDA letter category (narrative label). Avoid unless severe/life-threatening fungal infection and benefit outweighs fetal risk (US/TW); UK: standard/short courses only if clearly necessary, high-dose/prolonged only for life-threatening infection. High dose 400–800 mg/d during most/all of 1st trimester → distinct congenital anomalies (brachycephaly, cleft palate, femoral bowing, CHD). 150 mg single or repeated dose in 1st trimester: possible ↑ spontaneous abortion and congenital anomalies (US; epidemiological, unconfirmed). UK: cumulative ≤150 mg → no ↑ overall malformation risk, but small ↑ musculoskeletal (aRR 1.29 at 150 mg; 1.98 at >450 mg); meta-analysis 1.8–2× cardiac malformations with 1st-trimester exposure. Contraception during treatment + ~1 wk after last dose (5–6 half-lives)

**Why:** No letter category appears in the US label text: a grep for 'Pregnancy Category' found none. The FDA retired letter categories (ground rule). Sources: US WARNINGS (4), 'Teratogenic Effects', 'Human Data'; UK 4.6 (aRR 1.29 for 150 mg and 1.98 for >450 mg for musculoskeletal malformations; 1.8–2-fold cardiac malformations in a meta-analysis); TW §5.1, §6.1, §6.3.

**Sources:** US label WARNINGS (4) Potential for fetal harm; PRECAUTIONS – Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/15231/smpc; TW 仿單 DIFLUCAN IV §6.1 懷孕, §6.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B13 · Breastfeeding (missing)

**Was:** (empty)

**Now:** LactMed: acceptable — milk amount < neonatal dose (≈0.6 mg/kg/d with maternal 200 mg/d). UK SmPC / TW 仿單: may continue after single 150 mg; not recommended after repeated or high-dose use. US: caution

**Why:** LactMed 'Summary of Use during Lactation' and 'Drug Levels' (maximum about 0.6 mg/kg/day, 60% of the neonatal dose, at maternal 200 mg/day). UK 4.6 and TW §6.2 recommend against breastfeeding after repeated or high doses. US 'Nursing Mothers': 'Caution should be exercised'. The sources disagree, so both positions are stated.

**Sources:** LactMed Fluconazole NBK501223 (rev 2024-10-15): https://www.ncbi.nlm.nih.gov/books/NBK501223/; UK SmPC 4.6 Breast-feeding: https://www.medicines.org.uk/emc/product/15231/smpc; TW 仿單 DIFLUCAN IV §6.2 哺乳: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F

### B14 · Notes (missing)

**Was:** (empty)

**Now:** <span color="green">`IV`</span> <span color="green">`PO`</span> 口服吸收近完全, IV↔PO 不需改變日劑量<br>無 Aspergillus 活性 (not in any label spectrum); C. krusei 天生抗藥, C. auris 抗藥, C. glabrata 感受性低 → C. glabrata 僅在 susceptible 時 step-down 800 mg (12 mg/kg)/day (IDSA); MIC 16–32 → highest dose (label)<br>Also covers Cryptococcus (crypto meningitis), coccidioidomycosis (UK), endemic moulds (Histoplasma/Blastomyces, in vitro), prophylaxis in prolonged neutropenia/HSCT<br>輸注速率: US ≤200 mg/h; UK/TW ≤10 mL/min. 2 mg/mL in 0.9% NaCl: 200 mg/100 mL = 15 mmol Na⁺ (注意限鈉/限水病人)<br>TDM 非常規; CRRT/ICU 可考慮 (trough correlates with AUC)<br>Reversible adrenal insufficiency reported; enzyme inhibition lasts 4–5 d after stopping

**Why:** IV/PO equivalence: US 'Multiple Dose' and UK 4.2 Method of administration. Resistance: UK 4.4/5.1, US 'Antimicrobial Activity' (C. krusei resistant; C. glabrata often intermediate), TW §5.1 念珠菌感染. C. glabrata high-dose step-down: IDSA 2016. Infusion rate and sodium: US 'Administration' (≤200 mg/h), UK 4.2 and TW §3.1 (≤10 mL/min; 15 mmol Na per 200 mg/100 mL). This is administration data, not storage/stability, which the owner excluded. TDM: none of the three labels recommends it. Muilwijk 2020 (PMID 32816723) found 'Trough concentrations correlated well with the AUC, opening up opportunities for tailored dosing using TDM', and Muhl 2000 (PMID 11214774) says 'Drug monitoring is highly recommended' on CVVHD. Adrenal insufficiency: US PRECAUTIONS General, TW §5.1.

**Sources:** US label Multiple Dose; Administration; Antimicrobial Activity; PRECAUTIONS – General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; UK SmPC 4.2 Method of administration; 4.4 Candidiasis; 5.1: https://www.medicines.org.uk/emc/product/15231/smpc; TW 仿單 DIFLUCAN IV §3.1, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; IDSA Candidiasis 2016 (PMID 26679628): https://www.idsociety.org/practice-guideline/candidiasis/; Muilwijk 2020 PMID 32816723: https://pubmed.ncbi.nlm.nih.gov/32816723/; Muhl 2000 PMID 11214774: https://pubmed.ncbi.nlm.nih.gov/11214774/

### B15 · Page body (minor)

**Was:** Blank page (no content); Renewed date empty

**Now:** Optional: add a short 'References / 仿單' list: TW Diflucan IV 仿單 (衛署藥輸字第018790號), US DailyMed fluconazole injection, UK SmPC eMC 15231, LactMed NBK501223, IDSA Candidiasis 2016; set Renewed date when edits are applied

**Why:** The body is empty, so it has nothing to contradict. Once the properties are filled, a source list would let the owner trace the label versions (TW CDS 20240709-3, UK rev 22-03-2024, US SPL Sep 2026). This is optional and a style choice for the owner.

**Sources:** https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC018790%E8%99%9F; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02f74fe7-0649-46c5-a06a-0700cd265773; https://www.medicines.org.uk/emc/product/15231/smpc

## Verified correct as written

- Title 'Diflucan (Fluconazole)' matches the stocked product 泰復肯靜脈注射劑 DIFLUCAN IV INJECTION, 衛署藥輸字第018790號 (TW insert).
- Coverage [Candida] is correct. FDA Antimicrobial Activity lists C. albicans, C. glabrata (intermediate), C. parapsilosis and C. tropicalis. Leaving Aspergillus untagged is also correct.
- Adult dose '400mg IV QD' is a label-supported maintenance dose: UK SmPC 4.2 invasive candidiasis (after an 800 mg load), cryptococcal meningitis (200–400 mg QD, FDA/SmPC/TW), and BMT prophylaxis (FDA 400 mg QD). Only the loading dose and indication context are missing (A3).
- Renal 'CrCl<50: 200mg' equals the US FDA/UK SmPC 50% reduction applied to a 400 mg dose (labels say ≤50). It is not wrong per US/UK, but it is incomplete and not aligned with the stocked TW insert (A1).
- The entry contains no storage or stability details, which matches the owner's rule.
- All cited PMIDs were verified with NCBI E-utilities esummary/efetch: 26679628 (Pappas IDSA candidiasis 2016, Clin Infect Dis 62(4):e1-50), 16311263 (Bergner 2006 NDT), 21930888 (Patel 2011 AAC), 39332343 (Coenradie 2025 J Crit Care), 11214774 (Muhl 2000 Eur J Clin Pharmacol).
- Coverage = [Candida] is correct: US 'Antimicrobial Activity' (C. albicans, C. glabrata, C. parapsilosis, C. tropicalis, Cryptococcus) and UK 5.1. No Aspergillus tag is also correct, since fluconazole has no mould activity. C. krusei and C. auris resistance belongs in Notes (B14), not as a tag change.
- Adult dose '400mg IV QD' is the correct maintenance dose for invasive candidiasis (UK SmPC 4.2: 800 mg day 1, then 400 mg QD; IDSA 2016). It is also the top of the range in the TW insert (200, up to 400) and the US label (up to 400 mg/day). Keep it and add the loading dose and context (B3).
- Renal '200 mg at CrCl <50' equals 50% of a 400 mg dose, which is consistent in magnitude with the US/UK '≤50 → 50%' rule. The problems are the boundary, the fixed dose, and the missing loading dose and HD/CRRT guidance (B1/B2).
- Brief claims re-verified from the saved source text: US renal table (loading 50–400 mg; >50 100%; ≤50 50%; HD 100% after each session); UK 4.2 renal table identical; TW Diflucan IV insert renal (days 1–2 normal; >40 q24h; 21–40 q48h or ½; 10–20 q72h or ⅓; HD dose after each session); TW Fluene insert renal (>50 normal; 21–50 q48h or ½; 11–20 q96h or ¼; HD after each session).
- TW Diflucan IV insert: 適應症 '抗黴菌劑'; crypto 400 mg day 1, then 200–400 mg; candidemia 400 mg day 1, then 200 mg (up to 400); vaginal 150 mg single dose; <16 y 不建議 unless necessary (1–2 / 3–6 mg/kg/d); pregnancy avoid unless serious or life-threatening; contraception until ~1 week after last dose; breastfeeding OK after a single 150 mg dose, not after repeated or high doses. All match the brief.
- TW Fluene insert paediatric: 3 mg/kg mucosal (6 mg/kg loading); 6–12 mg/kg systemic; neonates q72h for the first 2 weeks, q48h at weeks 2–4. Matches the brief.
- LactMed NBK501223 (rev 2024-10-15): 'acceptable in nursing mothers because amounts excreted into breastmilk are less than the neonatal fluconazole dosage'. Matches the brief.
- The US label (Sagent, setid 02f74fe7..., SPL published Sep 21, 2026) has no FDA pregnancy letter category, only narrative text.
- Sodium content: UK 4.2 and TW 3.1 state 15 mmol Na per 200 mg/100 mL, so 100 mg/50 mL gives 7.5 mmol. This matches the hospital's 7.5 mEq per 100 mg product description.
- PMIDs 32816723, 21930888, 39332343, 11214774, 26679628, 24379304 were checked with NCBI esummary/efetch; titles, journals and years match the citations. 24379304 (BSMM TDM guideline) is not cited in any finding because its full text could not be retrieved.

## Apply log

- Renal dose, HD, CRRT: merged TW Diflucan IV insert table (院內品項), Fluene cap insert values, US/UK 50% rule, HD dosing, CRRT literature dosing (Bergner/Patel/Coenradie/Muilwijk, TDM Muhl), replacing 'CrCl<50: 200mg IV QD'
- Adult dose: merged indication-based dosing (candidemia, crypto meningitis, esophageal, oropharyngeal, candiduria, peritonitis, prophylaxis, vaginal) with US/UK/TW/IDSA values, replacing '400mg IV QD'
- Hepatic dose: no adjustment defined, caution, hepatotoxicity, monitor LFT/stop rule
- Pediatric dose: US/UK/TW pediatric and neonatal dosing incl. ECMO
- Indications: [Candidiasis, Meningitis, UTI, Peritonitis]
- Side Effects: [GI, LFT↑, CNS, hypokalemia, QTc prolong, SJS/TEN, DRESS, thrombocytopenia, leukopenia, neutropenia]
- Monitor: [LFT, renal, electrolyte, ECG]
- Mechanism: ERG11 inhibition, PK/PD AUC/MIC, resistance mechanisms
- Category: Triazole antifungal
- Drug Interactions: merged CYP profile, contraindicated, avoid, monitor/↓dose lists, rifampin, prednisone
- Pregnancy: narrative (no letter category), US/TW/UK statements, high-dose and 150 mg data, contraception
- Breastfeeding: LactMed rev 2024-10-15 + UK/TW/US statements
- Notes: merged IV/PO, Fluene cap, loading dose, species caveats (C. krusei/auris/glabrata, no Aspergillus), CSF/urine penetration, infusion rate + Na load, HD removal, TDM, rare AEs
- Coverage: kept [Candida] unchanged (no Aspergillus added)
- Page body: built full body on Meropenem template (summary, mechanism+PK/PD, spectrum, indications, adult/pediatric/renal-HD-CRRT/hepatic dosing tables, administration, AEs & monitoring, DDI table, pregnancy & lactation) with no storage section
- References section appended with FDA DailyMed, UK SmPC eMC 15231, TW inserts 018790/041997, LactMed NBK501223, IDSA 2016 (PMID 26679628), CRRT PMIDs 16311263, 21930888, 39332343, 11214774, 32816723 (all PMIDs verified via esummary)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
