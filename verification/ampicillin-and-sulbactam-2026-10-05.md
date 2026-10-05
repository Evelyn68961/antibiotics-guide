# Verification: Sulampi (Ampicillin/Sulbactam)

- **Notion entry:** [Sulampi (Ampicillin/Sulbactam)](https://app.notion.com/255c496dfff180bdb0dde502763cb9b0)
- **Hospital codes:** SUL05 (Sulampi inj 1.5 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/ampicillin-and-sulbactam.json` (plus any `sources/ampicillin-and-sulbactam-taiwan-insert-*.txt`)

## Product and sources

FJUH SUL05 = Sulampi 針 1.5 g/Vial (舒安比乾粉注射劑), ampicillin 1 g + sulbactam 0.5 g, NHI AC52553210, made by 政德製藥 under 衛署藥製字第 052553 號. The Taiwan insert PDF (https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf) has the same NHI code. I rendered it at 220 dpi and checked the dosing, renal, contraindication and indication sections against the page images. The hand transcription in ampicillin-and-sulbactam-taiwan-insert-sulampi.txt matches with two small differences. (a) The insert prints the mild-infection daily dose as "15.3(0.5+1 至 1+2)", which is clearly a misprint for 1.5–3 g. (b) The insert itself spells "Branhumella catarrhalis"; the .txt silently corrects this to "Branhamella". The insert's route is IV only (靜脈乾粉注射劑). US reference: DailyMed UNASYN 1.5 g/3 g vial label (IV/IM), setid 155c7ec0-5862-404f-b1d0-f278f8a8bbda v46 (Jul 20, 2026). No UK SmPC exists. LactMed NBK500983 (rev 2025-01-15). Guideline: IDSA 2026 AMR Guidance (published Jul 30, 2026) with Table 1 and Supplemental Material.

## Agreed fixes applied in Notion (53)

### A1 · Adult dose (error)

**Was:** 1.5-3g IV q6h<br><br>high-dose regimen for CRAB infection: 3g q4h OR 9g q8h

**Now:** 1.5-3g IV q6h (max sulbactam 4 g/day = 12 g/day total) [US label]; TW insert: 1.5-12 g/day ÷ q6-8h (milder infections may be given q12h)<br><br>CRAB (off-label, IDSA 2026): 9g IV q8h over 4h OR 27g/day continuous infusion (sulbactam 9 g/day), combined with ≥1 other active agent (e.g., cefiderocol, minocycline, polymyxin B), only as a bridge until sulbactam-durlobactam + carbapenem can be started

**Why:** IDSA 2026 Table 1 lists only two CRAB regimens, 9 g q8h infused over 4 h or 27 g/day continuous infusion, both giving 9 g of sulbactam a day. '3g q4h' gives only 6 g sulbactam/day and is not an IDSA regimen. Q5.2 limits high-dose ampicillin-sulbactam to combination therapy and to bridging until sulbactam-durlobactam can start, and Q5.1 names sulbactam-durlobactam as preferred. The 4-h infusion time is missing from '9g q8h'. The label's sulbactam cap of 4 g/day is also missing.

**Sources:** DailyMed UNASYN, DOSAGE AND ADMINISTRATION ('1.5 g ... to 3 g ... every six hours ... total dose of sulbactam should not exceed 4 g per day') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert Sulampi 【劑量與用法】使用於成人 '1.5g 到 12g 日劑量分成每 6 或 8 小時給予一次; 每天 Sulbactam 最大劑量為 4g' https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf; IDSA 2026 AMR Guidance Table 1 (ampicillin-sulbactam: 9 g q8h over 4 h OR 27 g CI over 24 h) https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf; IDSA 2026 AMR Guidance Q5.1/Q5.2 https://www.idsociety.org/practice-guideline/amr-guidance/

### A2 · Page body – Adult Dose table (CRAB row) (error)

**Was:** CRAB (high-dose sulbactam) \| 3g IV q4h OR 9g IV q8h (extended infusion over 4h) \| Sulbactam provides direct activity; target sulbactam dose 6-9g/day

**Now:** CRAB (high-dose sulbactam, off-label) \| 9g IV q8h over 4h OR 27g/day continuous infusion \| Target sulbactam 9 g/day (IDSA 2026); combine with ≥1 other agent (e.g., cefiderocol, minocycline, polymyxin B); bridge only until sulbactam-durlobactam + carbapenem (preferred)

**Why:** IDSA 2026 recommends a total sulbactam dose of 9 g/day, not 6–9 g. 3 g q4h is not an IDSA regimen. Standard doses are adequate only for CRAB that is truly sulbactam-susceptible, and IDSA cautions that AST may misclassify isolates. The body also omits the requirement for combination therapy and the bridging-only role.

**Sources:** IDSA 2026 AMR Guidance Q5.2 ('high-dose ampicillin-sulbactam (total daily dose of 9 grams of the sulbactam component) in combination with at least one additional agent ... temporary bridging therapy') https://www.idsociety.org/practice-guideline/amr-guidance/; IDSA 2026 Table 1 https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf

### A3 · Renal dose, HD, CRRT (error)

**Was:** CrCl 15-29: 1.5-3g IV q12h<br>CrCl \<15: 1.5-3g IV QD<br><br>HD: 1.5-3g IV q24h

**Now:** CrCl ≥30: 1.5-3g IV q6-8h<br>CrCl 15-29: 1.5-3g IV q12h<br>CrCl 5-14: 1.5-3g IV q24h<br>(US label Table 3; TW insert only says give less often when CrCl ≤30)<br><br>HD: 1.5-3g IV q24h, give after HD (both removed by HD; interval extrapolated from CrCl 5-14 band, not in label)<br>CRRT: no label data — see body

**Why:** US label Table 3 has three bands: ≥30 q6–8h, 15–29 q12h, 5–14 q24h. It has no band below 5, so '<15' wrongly extends the label to CrCl <5. The ≥30 row is missing. The Taiwan insert has no CrCl table (I confirmed this on the PDF image), so the US table applies. The label's OVERDOSAGE section says ampicillin, and probably sulbactam, is removed by hemodialysis. That supports dosing after HD, but the HD q24h interval itself is not in the label; flag it as unsourced. The column header mentions CRRT, but the property has no CRRT entry.

**Sources:** DailyMed UNASYN, Impaired Renal Function, TABLE 3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; DailyMed UNASYN, OVERDOSAGE ('Ampicillin may be removed from circulation by hemodialysis ... sulbactam ... may also be removed'); Taiwan insert 使用於腎功能障礙患者 (CrCl ≦30 mL/min: 應比一般 ampicillin 使用法減少服用次數) https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A4 · Page body – Renal Dose, HD, CRRT (error)

**Was:** *(Your existing content validated and expanded)* ... ≥30 \| No adjustment (1.5-3g IV q6h) ... \<5 \| 1.5-3g IV q24h ... CRRT 3g IV q8h (or 1.5g q6h) ... Peritoneal dialysis 3g IV q24h

**Now:** REMOVE the line '*(Your existing content validated and expanded)*' (pasted AI-chat text). Change ≥30 row to '1.5-3g IV q6-8h (US label)'. Change the '<5' row to 'No label data (US label table stops at CrCl 5)'. Mark CRRT and PD rows as 'not in label – verify (e.g., Heintz 2009 PMID 19397464; Trotman 2005 PMID 16163635)'.

**Why:** The italic line is pasted AI-chat text. The US label gives q6–8h at CrCl ≥30 and has no band below 5. The CRRT (3 g q8h or 1.5 g q6h) and PD (3 g q24h) doses are in no label or IDSA source. Both PMIDs were confirmed with esummary, but the abstracts do not give the regimens and I could not read the full tables, so the pharmacist must check the values against those tables before citing them.

**Sources:** DailyMed UNASYN, Impaired Renal Function TABLE 3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464 (esummary verified) https://pubmed.ncbi.nlm.nih.gov/19397464/; Trotman RL et al. Clin Infect Dis 2005, PMID 16163635 (esummary verified) https://pubmed.ncbi.nlm.nih.gov/16163635/

### A5 · Notes (error)

**Was:** Obesity: MAX dose (3g IV q6h)<br>Pregnancy class B<br>Breastfeeding: compatible

**Now:** Obesity: no specific data; consider max dose 3g IV q6h (expert opinion, unsourced)<br>Pregnancy: no letter category (FDA retired); use only if clearly needed<br>Breastfeeding: acceptable (LactMed)<br>CI: serious hypersensitivity to ampicillin/sulbactam/β-lactams (US); any penicillin allergy (TW 仿單); prior cholestatic jaundice/hepatic dysfunction with this drug<br>Avoid in infectious mononucleosis (rash)

**Why:** 'Pregnancy class B' presents a retired FDA letter category as current, which the ground rules forbid. The US label's Pregnancy section has narrative text only. The obesity line is unsourced. Contraindications are a key safety point and appear nowhere in the properties.

**Sources:** DailyMed UNASYN, PRECAUTIONS–Pregnancy; CONTRAINDICATIONS; CLINICAL PHARMACOLOGY–General (mononucleosis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; LactMed NBK500983 Summary ('acceptable in nursing mothers') https://www.ncbi.nlm.nih.gov/books/NBK500983/

### A6 · Pregnancy (missing)

**Was:** (empty)

**Now:** No FDA letter category (retired). Animal studies (mice, rats, rabbits; up to 10× human dose): no fetal harm or impaired fertility; no adequate human studies → use only if clearly needed (US label). Sulbactam crosses the placenta; safety in pregnancy not established (TW insert). May transiently ↓ maternal conjugated estriol/estrone/estradiol.

**Why:** The column is empty, and both the US label and the Taiwan insert have pregnancy sections that can fill it.

**Sources:** DailyMed UNASYN, PRECAUTIONS–Pregnancy and Drug/Laboratory Test Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【懷孕和哺乳】 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A7 · Breastfeeding (missing)

**Was:** (empty)

**Now:** Acceptable (LactMed). Low milk levels: ampicillin avg 1.7 mg/L (max 3), sulbactam avg 0.58 mg/L (max 2.8); not expected to harm infant. Monitor infant for diarrhea/thrush. US label: caution in nursing women.

**Why:** The column is empty. LactMed is the designated source for breastfeeding.

**Sources:** LactMed NBK500983 Summary of Use during Lactation; Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK500983/; DailyMed UNASYN, PRECAUTIONS–Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A8 · Mechanism (missing)

**Was:** (empty)

**Now:** Ampicillin: binds PBPs → inhibits cell-wall mucopeptide synthesis (bactericidal). Sulbactam: irreversible β-lactamase inhibitor → restores ampicillin activity vs β-lactamase producers; little intrinsic activity except Neisseriaceae, and A. baumannii at high doses (PBP1a/1b, PBP3).

**Why:** The column is empty. The label's MICROBIOLOGY section and IDSA Q5.1 cover the mechanism.

**Sources:** DailyMed UNASYN, MICROBIOLOGY–Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; IDSA 2026 AMR Guidance Q5.1 https://www.idsociety.org/practice-guideline/amr-guidance/

### A9 · Page body – Mechanism (error)

**Was:** Sulbactam: ... also has intrinsic bactericidal activity against *Acinetobacter* spp. and *Bacteroides fragilis* via PBP1a, PBP2, and PBP3 binding

**Now:** Sulbactam: ... intrinsic activity limited to Neisseriaceae (US label) and *Acinetobacter baumannii* at high exposure via PBP1a/1b and PBP3 (IDSA 2026)

**Why:** The US label says sulbactam alone 'possesses little useful antibacterial activity except against the Neisseriaceae'. IDSA names PBP1a/1b and PBP3 of A. baumannii, not PBP2. Intrinsic activity against B. fragilis is not supported; the label's B. fragilis coverage comes from β-lactamase inhibition restoring ampicillin. The 'T>MIC 50–60%' PK/PD line is unsourced; leave it but flag it.

**Sources:** DailyMed UNASYN, MICROBIOLOGY–Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; IDSA 2026 AMR Guidance Q5.2 Rationale ('binds and saturates PBP1a/1b and PBP3 of A. baumannii') https://www.idsociety.org/practice-guideline/amr-guidance/

### A10 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Probenecid: ↑ & prolongs levels<br>Allopurinol: ↑ rash<br>Aminoglycosides: in vitro inactivation – reconstitute/give separately (TW: separate sites, ≥1h apart)<br>Methotrexate: ↓ MTX clearance → monitor toxicity (TW)<br>Bacteriostatic abx (tetracyclines, chloramphenicol, erythromycin, sulfonamides): may antagonize (TW)<br>Oral contraceptives: ↓ efficacy (TW)<br>Anticoagulants: may alter platelet aggregation/coag tests (TW)<br>Lab: false-positive urine glucose (Clinitest/Benedict/Fehling)

**Why:** The column is empty. Both labels list these interactions.

**Sources:** DailyMed UNASYN, PRECAUTIONS–Drug Interactions; Drug/Laboratory Test Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【與其他藥物的交互作用】 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A11 · Page body – Drug Interactions (Live vaccines, Mycophenolate rows) (unsupported)

**Was:** Live vaccines (BCG, typhoid, cholera) ... Contraindicated ...; Mycophenolate ↓ MPA levels ...

**Now:** Flag as 'not in US label or TW insert – verify'. Change Severity 'Contraindicated' to 'Caution (oral live typhoid/cholera vaccines)' pending a source; keep the Mycophenolate row but mark it unsourced.

**Why:** Neither interaction appears in the US label or the Taiwan insert. Calling it 'Contraindicated' is stronger than any cited source. The Tetracyclines row ('Avoid combination') is also stronger than the insert, which says only that bacteriostatic agents may interfere. The Warfarin row's mechanism (gut flora) differs from the insert's (platelet aggregation and coagulation tests).

**Sources:** DailyMed UNASYN, PRECAUTIONS–Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【與其他藥物的交互作用】 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A12 · Pediatric dose (missing)

**Was:** 300 mg/kg/day (200 mg ampicillin + 100 mg sulbactam per kg), divided every 6hr

**Now:** ≥1 yr: 300 mg/kg/day (200 mg ampicillin + 100 mg sulbactam per kg) IV ÷ q6h; ≥40 kg → adult dose, sulbactam ≤4 g/day; IV course usually ≤14 days (US label; IM not established)<br>TW insert: children/infants 150 mg/kg/day ÷ q6-8h; neonates 1st week (esp. preterm) 75 mg/kg/day ÷ q12h

**Why:** The dose matches the US label, but the property leaves out the age limit (≥1 year), the IV-only route, the ≥40 kg adult-dose rule and the 4 g/day sulbactam cap. The insert for the stocked product gives lower doses that also cover infants and neonates. I checked these figures against the PDF image.

**Sources:** DailyMed UNASYN, DOSAGE AND ADMINISTRATION–Pediatric Patients 1 Year of Age or Older https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 使用於孩童、嬰兒和新生兒 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A13 · Page body – Pediatric Dose (error)

**Was:** >1 year, ≤40 kg \| Mild-moderate \| 100-150 mg ampicillin/kg/day ...; Severe (SSTI) \| 200-300 mg ampicillin/kg/day ...; Infants 1-12 months \| 100-150 mg ampicillin/kg/day; Neonates \| Limited data; consult specialist; Note: Total dose expressed as ampicillin component; sulbactam is half (e.g., 300 mg/kg/day = 200 mg ampicillin + 100 mg sulbactam)

**Now:** ≥1 yr, <40 kg \| 300 mg/kg/day total (= 200 mg ampicillin/kg/day) IV ÷ q6h (US label)<br>Children/infants \| 150 mg/kg/day total (= 100 mg ampicillin/kg/day) ÷ q6-8h (TW insert)<br>Neonates, 1st week (esp. preterm) \| 75 mg/kg/day total (= 50 mg ampicillin/kg/day) ÷ q12h (TW insert)<br>Note: label doses are TOTAL (ampicillin + sulbactam); the sulbactam component is one-third of the total (1:2 ratio).

**Why:** The body mixes up total-dose and ampicillin-component units. '200–300 mg ampicillin/kg/day' equals up to 450 mg/kg/day total, which is above the label's 300 mg/kg/day total. The Note says doses are given as the ampicillin component, but its own example uses total dose. The sulbactam share is one-third of the total, not half of it. The neonatal row says 'consult specialist', but the stocked product's insert does give a neonatal dose.

**Sources:** DailyMed UNASYN, Pediatric Patients 1 Year of Age or Older https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 使用於孩童、嬰兒和新生兒 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A14 · Hepatic dose (minor)

**Was:** No adjustment required

**Now:** No dose adjustment in label; monitor LFT at regular intervals in hepatic impairment. CI if prior cholestatic jaundice/hepatic dysfunction with ampicillin/sulbactam.

**Why:** The US label gives no hepatic dose adjustment, but it carries a hepatotoxicity warning (deaths reported), tells prescribers to monitor in hepatic impairment, and lists a hepatic contraindication.

**Sources:** DailyMed UNASYN, WARNINGS–Hepatotoxicity; CONTRAINDICATIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A15 · Page body – Hepatic Dose (unsupported)

**Was:** Drug-induced liver injury (DILI) incidence ~9.5%; ALBI score ≥-2.00 predicts higher risk

**Now:** DILI incidence 9.5% in a single-center retrospective study; baseline ALBI ≥-2.00 associated with higher risk (adj HR 2.55; not significant after propensity matching) — Ooi H et al. J Infect Chemother 2023 (PMID 37301371)

**Why:** The numbers are correct but have no citation. The study is a single-center retrospective one, and its propensity-matched analysis was not significant, so 'predicts' overstates the finding. PMID confirmed with esummary.

**Sources:** Ooi H, Asai Y, Sato Y. J Infect Chemother 2023;29(9):900-904, PMID 37301371 https://pubmed.ncbi.nlm.nih.gov/37301371/

### A16 · Contraindications (Page body – Notes) (missing)

**Was:** Contraindication: History of cholestatic jaundice/hepatic dysfunction with prior ampicillin/sulbactam use

**Now:** Contraindications: (1) history of serious hypersensitivity (e.g., anaphylaxis, SJS) to ampicillin, sulbactam or other β-lactams (penicillins, cephalosporins); (2) prior cholestatic jaundice/hepatic dysfunction associated with ampicillin/sulbactam. TW insert: any penicillin allergy.

**Why:** The page lists only the hepatic contraindication. It leaves out the main one, β-lactam hypersensitivity, which both labels state.

**Sources:** DailyMed UNASYN, CONTRAINDICATIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【禁忌】 '對於任何青黴素有過敏反應的病人禁止使用' https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A17 · Side Effects (missing)

**Was:** LFT↑, AKI, hematologic

**Now:** LFT↑, AKI, hematologic, GI, thrombophlebitis, SJS/TEN, DRESS, CNS

**Why:** Missing items, all of which exist as options: diarrhoea is the commonest systemic reaction (3%) → GI; thrombophlebitis 3%; SJS/TEN and DRESS are in WARNINGS (Severe Cutaneous Adverse Reactions); convulsions at high CSF levels and post-marketing convulsion → CNS. Hypokalemia is also a post-marketing event and is optional.

**Sources:** DailyMed UNASYN, ADVERSE REACTIONS–Adult Patients; WARNINGS–Severe Cutaneous Adverse Reactions; Post-marketing Experience; OVERDOSAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A18 · Page body – Side Effects (error)

**Was:** Thrombophlebitis (1.2%); Rash (2%, up to 5-10% maculopapular in children); Note: High rash incidence (>90%) in patients with infectious mononucleosis

**Now:** Thrombophlebitis (3%); Phlebitis (1.2%); Rash (<2%); add 'Hypokalemia, angioedema, tubulointerstitial nephritis (post-marketing)'. Note: 'A high percentage of patients with mononucleosis who receive ampicillin develop a skin rash — avoid' (US label wording)

**Why:** The label gives thrombophlebitis 3% and phlebitis 1.2%; the page attaches the phlebitis rate to thrombophlebitis. Rash is '<2%'. The 5–10% paediatric rash figure, '↑AST/ALT (common in infants)' and '>90%' in mononucleosis are not in the label; flag them as unsourced.

**Sources:** DailyMed UNASYN, ADVERSE REACTIONS–Adult Patients (Thrombophlebitis 3%, Phlebitis 1.2%, rash <2%); CLINICAL PHARMACOLOGY–General (mononucleosis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A19 · Coverage (missing)

**Was:** Streptococcus, MSSA, Enterococcus, E.coli, Proteus, Klebsiella, Acinetobacter, Enterobacter, Haemophilus

**Now:** Streptococcus, MSSA, E. faecalis, E.coli, Proteus, Klebsiella, Acinetobacter, Enterobacter, Haemophilus, Neisseria, Bacteroides, Anaerobes

**Why:** The label's Microbiology section lists Bacteroides (including B. fragilis), Clostridium, Peptococcus and Peptostreptococcus, and N. gonorrhoeae, and B. fragilis is a labelled indication organism. The Bacteroides, Anaerobes and Neisseria tags are missing. For enterococci the label lists only Enterococcus faecalis, and the page body says 'not E. faecium', so the 'E. faecalis' option is more accurate than the generic 'Enterococcus'.

**Sources:** DailyMed UNASYN, MICROBIOLOGY–Gram-positive, Gram-negative, Anaerobes; INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A20 · Page body – Coverage (minor)

**Was:** Listeria monocytogenes; Prevotella spp.; (missing Proteus vulgaris, Providencia, Morganella, S. saprophyticus, Peptococcus)

**Now:** Add to Gram-neg: '*Proteus vulgaris*, *Providencia* spp., *Morganella morganii*'; Gram-pos: '*S. saprophyticus*'; Anaerobes: '*Peptococcus*'. Flag Listeria and Prevotella as 'not in label (ampicillin activity) – unsourced'.

**Why:** The label's microbiology list includes these organisms but the body table leaves them out. Listeria and Prevotella appear in neither label. 'Clostridium spp. (not C. difficile)' is correct; see the hospital database issues.

**Sources:** DailyMed UNASYN, MICROBIOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A21 · Indications (missing)

**Was:** Bacteremia, Endocarditis, Peritonitis, Pneumonia, SSTI, IAI, UTI, Surgical prophylaxis

**Now:** Bacteremia, Endocarditis, Peritonitis, Pneumonia, SSTI, IAI, Pelvic, UTI, Surgical prophylaxis

**Why:** Gynecological infections are one of the three FDA-approved indications, but the 'Pelvic' tag, which already exists, is missing. Surgical prophylaxis is supported by the Taiwan insert's dosing section (預防手術感染: 1.5–3 g at induction).

**Sources:** DailyMed UNASYN, INDICATIONS AND USAGE (SSSI, Intra-Abdominal, Gynecological) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【劑量與用法】預防手術感染 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A22 · Page body – Indications (minor)

**Was:** FDA-Approved: Gynecological infections (PID); Off-label: Surgical prophylaxis (colorectal, biliary)

**Now:** FDA-Approved: 'Gynecological infections (β-lactamase-producing E. coli, Bacteroides incl. B. fragilis)'. Move 'Surgical prophylaxis' note: 'TW insert-labelled (1.5–3 g at induction, may repeat q6–8h, stop within 24h); guideline: Bratzler 2013 (PMID 23327981)'.

**Why:** The FDA label says 'Gynecological Infections' without naming PID, so '(PID)' narrows it. Surgical prophylaxis is in the stocked product's Taiwan insert, so it is not purely off-label in Taiwan. The other off-label rows (CAP, diabetic foot, enterococcal endocarditis, epiglottitis, orbital cellulitis, cUTI, bacteremia) are plausible but cite no guideline; flag them as unsourced.

**Sources:** DailyMed UNASYN, INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 預防手術感染 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 (esummary verified) https://pubmed.ncbi.nlm.nih.gov/23327981/

### A23 · Page body – Adult Dose (Surgical prophylaxis row, Administration) (minor)

**Was:** Surgical prophylaxis \| 3g IV within 60 min of incision \| Redose q2h intraoperatively; Administration: IV infusion over 15-30 min

**Now:** Surgical prophylaxis \| 3g IV within 60 min of incision (Bratzler 2013); TW insert: 1.5–3 g at anaesthesia induction, may repeat q6–8h, usually stop ≤24h post-op \| Redose q2h intraop (guideline)<br>Administration: slow IV push ≥10–15 min (TW: ≥3 min) or infusion in 50–100 mL over 15–30 min; deep IM (US label only; Sulampi insert is IV only)

**Why:** The insert for the stocked product gives a different prophylaxis regimen, and the 3 g dose and 2-h redose come from the ASHP/IDSA/SIS/SHEA guideline. The PMID is confirmed, but I could not machine-read the guideline table, so verify 3 g / 2 h against Table 1 before citing. Neither label offers extended infusion; it applies only to the CRAB regimen.

**Sources:** DailyMed UNASYN, DOSAGE AND ADMINISTRATION https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【劑量與用法】 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf; Bratzler 2013 PMID 23327981 https://pubmed.ncbi.nlm.nih.gov/23327981/

### A24 · Page body – Notes (Stability line) (error)

**Was:** Stability: Reconstituted solution stable 1 hour at room temperature; 8 hours refrigerated (varies by diluent)

**Now:** REMOVE

**Why:** The owner deliberately removed storage and stability details, so this line is a leftover. It is also inaccurate: the US label says the IM preparation (375 mg/mL) must be given within 1 hour, and IV dilutions have diluent-specific limits (e.g., 48 h at 4°C in SWFI 45 mg/mL), not a flat '8 hours refrigerated'.

**Sources:** DailyMed UNASYN, DIRECTIONS FOR USE–1.5 g and 3 g Standard Vials ('administer within one hour after preparation') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A25 · Page body – Pregnancy (minor)

**Was:** FDA Category B (historical); TGA Category A; Human data: Extensive clinical experience ... no documented teratogenicity; Crosses placenta freely; PK changes ... q6h preferred over q8h

**Now:** Replace first bullet with 'No FDA letter category (retired; formerly B). US label: no fetal harm in animal studies up to 10× human dose; no adequate human studies → use only if clearly needed.' Change 'Crosses placenta freely' to 'Sulbactam crosses the placenta (TW insert)'. Add 'TW insert: safety in pregnancy not established'. Flag the TGA, human-data and PK bullets as unsourced.

**Why:** The letter is marked 'historical', but it is still listed first. TGA is not in the source hierarchy, and the human-data and PK-in-pregnancy statements cite nothing. The insert says only that sulbactam crosses the placenta.

**Sources:** DailyMed UNASYN, PRECAUTIONS–Pregnancy https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Taiwan insert 【懷孕和哺乳】 https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### A26 · Page body – Breastfeeding (error)

**Was:** Compatible with breastfeeding (WHO, AAP); Ampicillin: 0.3-3 mg/L ...; Sulbactam: 0.5-2.8 mg/L; Estimated infant dose <2% ...; No reported adverse effects in breastfed infants from limited studies

**Now:** Acceptable in nursing mothers (LactMed). Ampicillin milk levels 0.11–3 mg/L (avg 1.7 mg/L with amp/sulb; peak ~3 h); sulbactam avg 0.52–0.58 mg/L (max 2.8). Infant: one report of diarrhea with maternal ampicillin; controlled study found no differences in rash, thrush, stools or feeding. Monitor infant for diarrhea/thrush. US label: caution.

**Why:** LactMed reports one infant with diarrhoea after maternal ampicillin, which contradicts 'No reported adverse effects'. The WHO/AAP attribution and the '<2% infant dose' figure are not in LactMed. The level ranges should match LactMed's figures.

**Sources:** LactMed NBK500983, Summary; Drug Levels; Effects in Breastfed Infants https://www.ncbi.nlm.nih.gov/books/NBK500983/; DailyMed UNASYN, Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### A27 · Page body – Warnings (missing section) (missing)

**Was:** (no warnings summary; CDAD only listed in side-effect table)

**Now:** Add under Notes: 'Warnings (US label): serious/fatal anaphylaxis (ask about penicillin/cephalosporin allergy); hepatotoxicity incl. cholestatic jaundice (deaths reported); SCAR (SJS, TEN, DRESS, AGEP, EM, exfoliative dermatitis) → stop if lesions progress; C. difficile-associated diarrhea up to >2 months after therapy; superinfection (Pseudomonas, Candida).'

**Why:** The label's WARNINGS sections are not summarised anywhere on the page.

**Sources:** DailyMed UNASYN, WARNINGS (Hypersensitivity, Hepatotoxicity, Severe Cutaneous Adverse Reactions, CDAD); CLINICAL PHARMACOLOGY–General (superinfection) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B1 · Adult dose (error)

**Was:** 1.5-3g IV q6h<br><br>high-dose regimen for CRAB infection: 3g q4h OR 9g q8h

**Now:** 1.5–3 g <span color="green">`IV`</span> q6h (FDA); Sulampi 仿單: 1.5–12 g/day 分 q6–8h，輕症可 q12h；sulbactam ≤4 g/day (max 12 g/day 總量)<br><br>CRAB (off-label, IDSA 2026): total sulbactam 9 g/day = 9 g q8h over 4 h OR 27 g/day continuous infusion; must combine with ≥1 other active agent (cefiderocol / minocycline / polymyxin B); bridging only until sulbactam-durlobactam + carbapenem is available

**Why:** The 3 g q4h regimen (6 g sulbactam/day) is not in the current IDSA guidance. IDSA 2026, Table 1, reads: "Total daily dose of 9 grams of sulbactam via one of the following regimens: 9 grams ... IV every 8 hours, infused over 4 hours OR 27 grams ... as a continuous infusion over 24 hours". Q5.2 says high-dose ampicillin-sulbactam is used "in combination with at least one additional agent ... as a temporary bridging therapy". The column also omits the label's sulbactam cap of 4 g/day (FDA DOSAGE AND ADMINISTRATION: "The total dose of sulbactam should not exceed 4 g per day"). The Taiwan insert (使用於成人) allows 1.5–12 g/day divided q6–8h, and q12h for less severe infections.

**Sources:** IDSA 2026 AMR Guidance (PMID 42570093), Q5.2 and Table 1: https://www.idsociety.org/practice-guideline/amr-guidance/ ; https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf; FDA UNASYN label, DOSAGE AND ADMINISTRATION: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 【劑量與用法】使用於成人: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B2 · Page body (Adult Dose table, CRAB row + Notes 'CRAB therapy' bullet) (error)

**Was:** CRAB (high-dose sulbactam): 3g IV q4h OR 9g IV q8h (extended infusion over 4h) — target sulbactam dose 6-9g/day; Notes: high-dose regimens target sulbactam 6-9g/day

**Now:** CRAB: 9 g IV q8h over 4 h OR 27 g/day continuous infusion (sulbactam 9 g/day), always combined with a second active agent; bridging until sulbactam-durlobactam + carbapenem (preferred) can start. IDSA 2026 also favors high dose even for isolates reported sulbactam-susceptible, because AST may misclassify them.

**Why:** IDSA 2026 Supplemental Material: "The panel suggests 9 grams total daily dose of the sulbactam component of ampicillin-sulbactam for the treatment of CRAB infections." The 6–9 g range comes from the superseded 2023 guidance. Q5.2: "Sulbactam-durlobactam plus a carbapenem remains preferred for invasive CRAB infections."

**Sources:** IDSA 2026 AMR Guidance Q5.2 and Supplemental Material: https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/amr-guidance-supplemental-material.pdf; PMID 42570093 (verified with esummary: Tamma PD, Clin Infect Dis 2026 Aug 8): https://pubmed.ncbi.nlm.nih.gov/42570093/

### B3 · Renal dose, HD, CRRT (error)

**Was:** CrCl 15-29: 1.5-3g IV q12h<br>CrCl \<15: 1.5-3g IV QD<br><br>HD: 1.5-3g IV q24h

**Now:** CrCl ≥30: 1.5–3 g IV q6–8h<br>CrCl 15–29: 1.5–3 g IV q12h<br>CrCl 5–14: 1.5–3 g IV q24h<br>(FDA Table 3；Sulampi 仿單僅述 CrCl ≤30 應減少給藥次數，無分級表)<br><br>HD: 1.5–3 g IV q24h；HD 日於透析後給 (~35% ampicillin / ~45% sulbactam removed per 4-h HD; Blum 1989)<br>CRRT (CVVH/CVVHD/CVVHDF): 3 g IV q8h (sulbactam 1 g q8h) (Li 2020 Table 3; older Trotman 2005 data: CVVH q12h); limited data — TDM if available

**Why:** FDA Table 3 has three bands: ≥30 q6–8h, 15–29 q12h, 5–14 q24h. It gives nothing below 5, so "<15: QD" goes beyond the label, and the ≥30 band is missing. The Taiwan insert (使用於腎功能障礙患者) only says to give doses less often when CrCl ≤30, so the FDA table applies. HD: Blum 1989 (abstract): "Doses should be given every 24 h for those undergoing maintenance hemodialysis. On hemodialysis days, doses should be given after hemodialysis"; 34.8% of ampicillin and 44.7% of sulbactam were removed per 4-h HD. CRRT was empty in this column. Li 2020, citing Trotman 2005: "sulbactam 1 g q12h under CVVH and 1 g q8h under CVVHD or CVVHDF". Li 2020 also recommends TDM because "the PK/PD of sulbactam under CVVHDF and CVVHD have not been updated".

**Sources:** FDA UNASYN label, Impaired Renal Function, Table 3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 使用於腎功能障礙患者: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf; Blum RA et al. AAC 1989, PMID 2817847: https://pubmed.ncbi.nlm.nih.gov/2817847/; Trotman RL et al. CID 2005, PMID 16163635: https://pubmed.ncbi.nlm.nih.gov/16163635/; Li L et al. Front Pharmacol 2020, PMID 32547394 (PMC7273837), sulbactam section: https://pubmed.ncbi.nlm.nih.gov/32547394/

### B4 · Page body (Renal Dose, HD, CRRT section) (error)

**Was:** *(Your existing content validated and expanded)*; CRRT (CVVH/CVVHD/CVVHDF): 3g IV q8h (or 1.5g q6h); Peritoneal dialysis: 3g IV q24h; row '<5: 1.5-3g IV q24h'

**Now:** Remove the line '(Your existing content validated and expanded)'. CRRT row: '3g IV q8h (sulbactam 1 g q8h) for CVVH/CVVHD/CVVHDF — Li 2020 Table 3 (PMID 32547394); older Trotman 2005 (PMID 16163635) suggested q12h under CVVH; limited data, TDM recommended'. Mark '(or 1.5g q6h)' as unsourced. PD row: flag as unsourced; note Blackwell 1990 (PMID 2099158): 2 g/1 g q12h for PD-related peritonitis. '<5' row: 'Not in FDA table (stops at CrCl 5); HD → see dialysis row'.

**Why:** The italic line reads as AI-chat output, which the ground rules say to remove. Trotman, via Li 2020, gives q12h for CVVH, so a single q8h figure for every CRRT mode is wrong for CVVH. No source found supports "1.5 g q6h". Blackwell 1990 (abstract): "Ampicillin/sulbactam (2 gm/1 gm) should be administered every 12 h to patients with peritoneal dialysis-related peritonitis", which contradicts q24h. The FDA table stops at CrCl 5.

**Sources:** Li L et al. 2020, PMID 32547394: https://pubmed.ncbi.nlm.nih.gov/32547394/; Blackwell BG et al. Perit Dial Int 1990, PMID 2099158: https://pubmed.ncbi.nlm.nih.gov/2099158/; FDA UNASYN Table 3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B5 · Hepatic dose (missing)

**Was:** No adjustment required

**Now:** No dose adjustment in labels. 禁忌: 先前使用 ampicillin/sulbactam 曾發生膽汁鬱積性黃疸/肝功能異常. Hepatic impairment → 定期監測 LFT (FDA Warnings – Hepatotoxicity).

**Why:** FDA CONTRAINDICATIONS: "contraindicated in patients with a previous history of cholestatic jaundice/hepatic dysfunction associated with UNASYN." FDA Hepatotoxicity: "Hepatic function should be monitored at regular intervals in patients with hepatic impairment". The column leaves out both points.

**Sources:** FDA UNASYN label, CONTRAINDICATIONS and WARNINGS–Hepatotoxicity: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B6 · Pediatric dose (missing)

**Was:** 300 mg/kg/day (200 mg ampicillin + 100 mg sulbactam per kg), divided every 6hr

**Now:** ≥1 歲: 300 mg/kg/day (ampicillin 200 + sulbactam 100 mg/kg/day) IV 分 q6h (FDA)；≥40 kg 依成人劑量，sulbactam ≤4 g/day；IM 於兒童未建立。<br>Sulampi 仿單: 孩童/嬰兒/新生兒 150 mg/kg/day (sulbactam 50 + ampicillin 100) 分 q6–8h；出生 ≤1 週新生兒 (尤其早產兒) 75 mg/kg/day 分 q12h

**Why:** The current value matches the FDA dose but drops the age limit (FDA heading: "Pediatric Patients 1 Year of Age or Older"), the ≥40 kg rule and the IM caveat ("safety and efficacy ... via intramuscular injection in pediatric patients have not been established"). The insert for the stocked product gives a lower dose plus a neonatal regimen (使用於孩童、嬰兒和新生兒), which I confirmed on page 1 of the PDF.

**Sources:** FDA UNASYN label, Pediatric Patients 1 Year of Age or Older: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 使用於孩童、嬰兒和新生兒: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B7 · Page body (Pediatric Dose table) (error)

**Was:** '>1 year, ≤40 kg — Severe infections (SSTI): 200-300 mg ampicillin/kg/day'; 'Neonates: Limited data; consult specialist'; 'Infants 1-12 months: 100-150 mg ampicillin/kg/day'

**Now:** Severe/SSTI row: '200 mg ampicillin/kg/day (=300 mg/kg/day combined) IV ÷ q6h (FDA)'. Neonates row: 'Sulampi 仿單: ≤1 週 (尤其早產兒) 75 mg/kg/day combined (ampicillin 50) ÷ q12h'. Infants row: add source 'Sulampi 仿單 150 mg/kg/day combined (ampicillin 100) ÷ q6–8h; FDA not established <1 yr'.

**Why:** 300 mg/kg/day is the combined dose; the FDA dose of the ampicillin component is 200 mg/kg/day, so "200-300 mg ampicillin/kg/day" goes over the label. The Taiwan insert does give neonatal dosing, so "limited data" understates what is available. The infant figure has no source in the body, but the Taiwan insert supports 100 mg ampicillin/kg/day.

**Sources:** FDA UNASYN Pediatric Patients 1 Year of Age or Older: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B8 · Indications (missing)

**Was:** Bacteremia, Endocarditis, Peritonitis, Pneumonia, SSTI, IAI, UTI, Surgical prophylaxis

**Now:** Add tag: Pelvic

**Why:** FDA INDICATIONS AND USAGE lists "Gynecological Infections caused by beta-lactamase producing strains of Escherichia coli, and Bacteroides spp." The page body itself puts "Gynecological infections (PID)" under FDA-Approved, but the multi-select has no Pelvic tag. Pelvic is an existing option.

**Sources:** FDA UNASYN INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B9 · Coverage (error)

**Was:** Streptococcus, MSSA, Enterococcus, E.coli, Proteus, Klebsiella, Acinetobacter, Enterobacter, Haemophilus

**Now:** Add: Bacteroides, Anaerobes, Neisseria. Replace Enterococcus with E. faecalis. REMOVE Enterobacter, or keep it only with an explicit caveat; pharmacist to decide, since the 1980s FDA label lists it.

**Why:** Anaerobes are missing. FDA MICROBIOLOGY lists "Bacteroides species, including B. fragilis", Clostridium and Peptostreptococcus, and the IAI and Gyn indications name Bacteroides. FDA also lists "Neisseria gonorrhoeae", and the Taiwan insert gives a gonorrhoea dose. For enterococci the FDA lists only "Enterococcus faecalis"; the body itself says "not E. faecium". On Enterobacter, IDSA 2026 says: "basal AmpC production in these organisms [E. cloacae complex, K. aerogenes, C. freundii] confers intrinsic resistance to ampicillin, amoxicillin-clavulanate, ampicillin-sulbactam". That conflicts with the old FDA indication list ("Enterobacter spp.").

**Sources:** FDA UNASYN MICROBIOLOGY (Gram-positive/Gram-negative/Anaerobes) and INDICATIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; IDSA 2026 AMR Guidance, AmpC section (Q2): https://www.idsociety.org/practice-guideline/amr-guidance/; Sulampi 仿單 非併發性淋病 dose: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B10 · Page body (Coverage table) (error)

**Was:** *Enterobacter* spp. (variable — may induce AmpC)

**Now:** *Enterobacter cloacae* complex / *K. aerogenes*: intrinsically resistant (basal AmpC; IDSA 2026), although listed in the 1980s FDA indications. Add to NOT covered: *Citrobacter freundii* (intrinsically resistant per IDSA 2026; note the Sulampi 仿單 適應症 still lists 檸檬酸菌屬).

**Why:** "Variable" understates the problem. IDSA 2026 calls these species intrinsically resistant to ampicillin-sulbactam whether or not AmpC is induced ("Regardless of inducibility, basal AmpC production ... confers intrinsic resistance").

**Sources:** IDSA 2026 AMR Guidance: https://www.idsociety.org/practice-guideline/amr-guidance/

### B11 · Side Effects (missing)

**Was:** LFT↑, AKI, hematologic

**Now:** Add tags: GI, thrombophlebitis, SJS/TEN, DRESS

**Why:** FDA Adult Patients: "The most frequently reported adverse reactions were diarrhea in 3%" and "Thrombophlebitis – 3%". FDA Warnings, Severe Cutaneous Adverse Reactions, names TEN, SJS and DRESS. The Taiwan insert 不良反應 lists diarrhoea, pseudomembranous colitis, phlebitis and Stevens-Johnson. All four are existing options.

**Sources:** FDA UNASYN ADVERSE REACTIONS–Adult Patients; WARNINGS–Severe Cutaneous Adverse Reactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 【不良反應】: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B12 · Page body (Side Effects table) (error)

**Was:** Thrombophlebitis (1.2%); Rash (2%, up to 5-10% maculopapular in children); ↑ AST/ALT (common in infants); Note: High rash incidence (>90%) in mononucleosis

**Now:** Thrombophlebitis 3%, Phlebitis 1.2% (FDA); Rash <2% (FDA) — flag 'up to 5-10% maculopapular in children' as unsourced; ↑AST/ALT/ALP/LDH (FDA) — flag 'common in infants' as unsourced; mononucleosis note: 'A high percentage of patients with mononucleosis who receive ampicillin develop a skin rash — do not use' (FDA wording; '>90%' unsourced)

**Why:** FDA Adult Patients: "Thrombophlebitis – 3% Phlebitis – 1.2%" and "rash in less than 2%". The 5–10% pediatric rash rate, "common in infants" and ">90%" have no source. FDA says "A high percentage of patients with mononucleosis who receive ampicillin develop a skin rash".

**Sources:** FDA UNASYN ADVERSE REACTIONS, Adverse Laboratory Changes, CLINICAL PHARMACOLOGY–General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B13 · Mechanism (missing)

**Was:** (empty)

**Now:** Ampicillin: 與 PBPs 結合抑制細胞壁 mucopeptide 合成 → 殺菌. Sulbactam: 不可逆 β-lactamase 抑制劑，恢復 ampicillin 對產 β-lactamase 菌之活性；單獨抗菌力有限，僅對 Neisseriaceae (FDA)；高劑量時結合 A. baumannii PBP1a/1b 與 PBP3 (IDSA 2026).

**Why:** FDA MICROBIOLOGY–Mechanism of Action: ampicillin "acts through the inhibition of cell wall mucopeptide biosynthesis"; sulbactam irreversibly inhibits beta-lactamases and "alone possesses little useful antibacterial activity except against the Neisseriaceae". IDSA 2026 Q5.2: sulbactam "binds and saturates PBP1a/1b and PBP3 of A. baumannii". The Taiwan insert 藥效學特性 also names Acinetobacter calcoaceticus and Bacteroides spp.

**Sources:** FDA UNASYN MICROBIOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; IDSA 2026 AMR Guidance Q5.2: https://www.idsociety.org/practice-guideline/amr-guidance/; Sulampi 仿單 藥效學特性: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B14 · Page body (Mechanism) (minor)

**Was:** intrinsic bactericidal activity against Acinetobacter spp. and Bacteroides fragilis via PBP1a, PBP2, and PBP3 binding

**Now:** intrinsic activity limited to Neisseriaceae (FDA) and, at high exposures, *A. baumannii* via PBP1a/1b and PBP3 (IDSA 2026); intrinsic activity vs *Bacteroides fragilis* — unsourced (verify)

**Why:** IDSA 2026 names PBP1a/1b and PBP3, not PBP2. No source ties the Bacteroides activity to PBP binding. The Taiwan insert says only that sulbactam has 抗菌作用 against Bacteroides spp.

**Sources:** IDSA 2026 AMR Guidance Q5.2: https://www.idsociety.org/practice-guideline/amr-guidance/; FDA UNASYN MICROBIOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B15 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Probenecid ↑/延長 ampicillin & sulbactam 血中濃度；Allopurinol ↑皮疹；Aminoglycosides 體外失活 — 不可混合，分開部位給予 (仿單: 間隔 ≥1 h)；Methotrexate 清除↓ (監測毒性)；抗凝血劑 (血小板凝集/凝血試驗改變)；抑菌性抗生素 (chloramphenicol, erythromycin, sulfonamides, tetracyclines) 可能拮抗；含 estrogen 口服避孕藥效果可能↓；Lab: Clinitest/Benedict/Fehling 尿糖偽陽性

**Why:** The column is empty, but both labels cover it. FDA PRECAUTIONS–Drug Interactions covers probenecid, allopurinol and aminoglycosides. The Taiwan insert 與其他藥物的交互作用 adds anticoagulants, bacteriostatic agents, oral contraceptives and methotrexate, and gives the ≥1 h separation from aminoglycosides.

**Sources:** FDA UNASYN Drug Interactions and Drug/Laboratory Test Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 【與其他藥物的交互作用】: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B16 · Page body (Drug Interactions table) (unsupported)

**Was:** Live vaccines (BCG, typhoid, cholera) — Contraindicated; Mycophenolate — ↓ MPA levels; severity grades (Major/Moderate/Minor)

**Now:** Flag as unsourced. Neither the FDA label nor the Taiwan insert lists vaccines or mycophenolate. At minimum, downgrade "Contraindicated" for vaccines (no label support), and add a citation or mark 'unsourced'. Keep the label-supported rows (probenecid, allopurinol, aminoglycosides, methotrexate, warfarin/anticoagulants, OCs, tetracyclines).

**Why:** The ground rules say to flag statements that have no source. "Contraindicated" is a strong claim that no label makes for this product.

**Sources:** FDA UNASYN Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B17 · Pregnancy (missing)

**Was:** (empty); Notes column says 'Pregnancy class B'

**Now:** FDA: 動物 (mice/rats/rabbits, ≤10× human dose) 未見生殖力受損或胎兒傷害；無人類充分對照研究 → 確有需要時才使用。仿單: sulbactam 會穿過胎盤；懷孕期間安全性尚未建立。可暫時降低孕婦血漿 conjugated estriol/estradiol/estrone (影響胎兒評估檢驗).

**Why:** The FDA has retired letter categories, so "class B" must not appear as current. FDA Pregnancy: "no evidence of impaired fertility or harm to the fetus ... should be used during pregnancy only if clearly needed". Taiwan insert 懷孕和哺乳: "sulbactam 會穿過胎盤；懷孕和哺乳期間使用的安全性尚未建立".

**Sources:** FDA UNASYN Pregnancy, Drug/Laboratory Test Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 【懷孕和哺乳】: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B18 · Page body (Pregnancy section) (error)

**Was:** FDA Category B (historical); TGA Category A; PK changes in pregnancy ... consider q6h over q8h; Extensive clinical experience ... no documented teratogenicity

**Now:** Replace 'FDA Category B (historical); TGA Category A' with 'No FDA letter category (retired; formerly B). FDA: no fetal harm in animals up to 10× human dose; no adequate human studies → use only if clearly needed. 仿單: 懷孕期間安全性尚未建立' and flag 'TGA Category A' as unsourced (not a hierarchy source). Change 'Crosses placenta freely' to 'Sulbactam crosses the placenta (仿單)'. 'Extensive clinical experience' bullet: cite eMC Ampicillin 500 mg SmPC 4.6 (ampicillin alone): 'use in human pregnancy has been well documented'. Flag the PK-in-pregnancy bullet as unsourced.

**Why:** Letter categories are retired, and TGA is not in the agreed source hierarchy. No source given supports the PK statement.

**Sources:** FDA UNASYN Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; eMC Ampicillin 500 mg powder for solution for injection SmPC 4.6 (ampicillin alone): https://www.medicines.org.uk/emc/search?q=ampicillin

### B19 · Breastfeeding (missing)

**Was:** (empty); Notes column says 'Breastfeeding: compatible'

**Now:** LactMed (rev. 2025-01-15): 乳汁濃度低 (ampicillin 平均 1.7 mg/L, 最高 3 mg/L；sulbactam 平均 0.58 mg/L, 最高 2.8 mg/L)，不預期對嬰兒造成不良影響 → 哺乳期可使用；偶有嬰兒腸胃菌叢改變致腹瀉或鵝口瘡. (FDA: caution；仿單: 哺乳安全性尚未建立)

**Why:** LactMed Summary: "produces low levels in milk that are not expected to cause adverse effects in breastfed infants ... diarrhea or thrush ... Ampicillin-sulbactam is acceptable in nursing mothers." The milk levels come from the Drug Levels section, Foulds study. FDA Nursing Mothers: "caution should be exercised".

**Sources:** LactMed Ampicillin and Sulbactam NBK500983: https://www.ncbi.nlm.nih.gov/books/NBK500983/; FDA UNASYN Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda

### B20 · Page body (Breastfeeding section) (unsupported)

**Was:** Compatible (WHO, AAP); Estimated infant dose <2% of maternal weight-adjusted dose; No reported adverse effects in breastfed infants from limited studies

**Now:** Replace 'Compatible (WHO, AAP)' with 'Acceptable in nursing mothers (LactMed)'. Flag 'Estimated infant dose <2%' as unsourced. Change the last bullet to 'One infant diarrhea report with maternal ampicillin alone; small controlled study found no differences in infant adverse effects (LactMed)'.

**Why:** LactMed, Effects in Breastfed Infants: "One mother reported diarrhea in her infant", so "no reported adverse effects" is inaccurate. WHO/AAP are not hierarchy sources, and LactMed is the designated breastfeeding source.

**Sources:** LactMed NBK500983: https://www.ncbi.nlm.nih.gov/books/NBK500983/

### B21 · Notes (error)

**Was:** Obesity: MAX dose (3g IV q6h)<br>Pregnancy class B<br>Breastfeeding: compatible

**Now:** Obesity: MAX dose (3g IV q6h) (unsourced — no label data)<br>Pregnancy: no FDA letter category (retired) — see Pregnancy column<br>Breastfeeding: acceptable (LactMed)<br>避免用於傳染性單核球增多症 (皮疹)<br>禁忌: β-lactam 嚴重過敏史 (FDA；仿單: 任何青黴素過敏)；曾因本藥致膽汁鬱積性黃疸/肝功能異常 (FDA)

**Why:** Remove "Pregnancy class B" because letter categories are retired; that content moves to the Pregnancy column (B17), and the breastfeeding line moves to its own column (B19). The obesity line has no source and should be flagged. The label contraindications and the mononucleosis warning are useful notes (FDA CONTRAINDICATIONS; CLINICAL PHARMACOLOGY "should not be administered to patients with mononucleosis"; 仿單 特殊警告).

**Sources:** FDA UNASYN CONTRAINDICATIONS and CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Sulampi 仿單 【禁忌】【特殊警告】: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B22 · Page body (Notes section) (error)

**Was:** Stability: Reconstituted solution stable 1 hour at room temperature; 8 hours refrigerated (varies by diluent)

**Now:** REMOVE

**Why:** The owner removed storage and stability details on purpose. The figures also contradict the stocked product's insert: the Sulampi 仿單 table gives 45 mg/mL in SWFI/NS as 8 h at 25°C and 48 h at 4°C, and 30 mg/mL as 72 h at 4°C.

**Sources:** Sulampi 仿單 page 2 dilution table: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf

### B23 · Page body (Hepatic Dose) (minor)

**Was:** Drug-induced liver injury (DILI) incidence ~9.5%; ALBI score ≥-2.00 predicts higher risk

**Now:** DILI incidence 9.5% (36/380) in a single-center retrospective Japanese study; ALBI ≥-2.00 adjusted HR 2.55, not significant after propensity matching (Ooi 2023, PMID 37301371)

**Why:** The figures match the abstract ("The incidence of DILI was 9.5% (36/380)"; HR 2.55). The entry gives no citation, and "predicts" overstates a result that fell to P=0.146 after propensity matching.

**Sources:** Ooi H et al. J Infect Chemother 2023, PMID 37301371 (verified): https://pubmed.ncbi.nlm.nih.gov/37301371/

### B24 · Page body (Obesity Dose) (minor)

**Was:** TDM not routinely available/indicated for this drug

**Now:** β-lactam TDM is recommended in critically ill patients where available (ESICM/ESCMID/IATDMCT/ISAC 2020); availability for ampicillin/sulbactam is limited

**Why:** Abdul-Aziz 2020 (abstract): "The Panel Members recommend routine TDM to be performed for aminoglycosides, beta-lactam antibiotics, linezolid ... in critically ill patients". "Not indicated" contradicts this, although the assay may not be available locally.

**Sources:** Abdul-Aziz MH et al. Intensive Care Med 2020, PMID 32383061 (verified): https://pubmed.ncbi.nlm.nih.gov/32383061/

### B25 · Page body (Adult Dose — Administration / Surgical prophylaxis) (minor)

**Was:** Administration: IV infusion over 15-30 min; Surgical prophylaxis 3g IV within 60 min of incision, redose q2h

**Now:** Administration: Sulampi is IV only; IV bolus ≥3 min (仿單) / slow IV ≥10–15 min (FDA) or infusion 15–30 min. Prophylaxis: add '仿單: 1.5–3 g at induction, may repeat q6–8h, stop within 24 h post-op'; cite ASHP/IDSA/SIS/SHEA 2013 (PMID 23327981) for 3 g and 2-h redosing.

**Why:** The page does not say the stocked product is IV only (Taiwan insert 劑量與用法). The prophylaxis row has no citation. PMID 23327981 was verified as Bratzler 2013 AJHP. I could not read the full text, so the pharmacist should confirm the 2-h redosing interval against it.

**Sources:** Sulampi 仿單 【劑量與用法】: https://www.cth.org.tw/public/medi_news/9e24641f15ab702170213ee1b96e6469.pdf; FDA UNASYN DOSAGE AND ADMINISTRATION: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=155c7ec0-5862-404f-b1d0-f278f8a8bbda; Bratzler DW et al. AJHP 2013, PMID 23327981: https://pubmed.ncbi.nlm.nih.gov/23327981/

### B26 · Page body (Indications table) (minor)

**Was:** Off-label: Endocarditis (Enterococcal), Periorbital/orbital cellulitis, Acute epiglottitis (pediatric), Bite wounds, Aspiration pneumonia, CAP

**Now:** Add citations: CAP → ATS/IDSA 2019 (PMID 31573350); bite wounds → IDSA SSTI 2014 (PMID 24947530); endocarditis → AHA 2015 (PMID 26373316), worded '(β-lactamase-producing E. faecalis / HACEK)'. Mark orbital cellulitis and epiglottitis as unsourced.

**Why:** These are plausible guideline-backed uses but none has a citation. I verified the PMIDs with esummary but did not read the full texts, so the pharmacist should confirm the exact regimens.

**Sources:** PMID 31573350: https://pubmed.ncbi.nlm.nih.gov/31573350/; PMID 24947530: https://pubmed.ncbi.nlm.nih.gov/24947530/; PMID 26373316: https://pubmed.ncbi.nlm.nih.gov/26373316/

## Verified correct as written

- Category property 'β-lactam/β-lactamase inhibitor' and body 'Aminopenicillin + Penicillanic acid sulfone' match the US label DESCRIPTION (sulbactam = sodium penicillinate sulfone).
- Adult standard dose 1.5–3 g IV q6h matches US label D&A and lies within the Taiwan insert's 1.5–12 g/day q6–8h.
- Body 'Max 12 g/day (8 g ampicillin + 4 g sulbactam)' matches the US label (sulbactam ≤4 g/day) and the Taiwan insert (severe: up to 12 g = 4+8).
- Renal property values for CrCl 15–29 (q12h) and the body's 5–14 row (q24h) match US label Table 3.
- Body 'Both ampicillin & sulbactam are dialyzable' is supported by the US label OVERDOSAGE section and the Taiwan insert 【過量】.
- Pediatric property 300 mg/kg/day (200 mg ampicillin + 100 mg sulbactam/kg) ÷ q6h matches the US label for age ≥1 year.
- Body 'Safety/efficacy for IAI not established in pediatrics' matches US label Pediatric Use.
- Body 'Maximum 8 g ampicillin/day (12 g total)' matches US label (≥40 kg adult dosing, sulbactam ≤4 g/day).
- Monitor tags LFT, renal, CBC and PT/INR are supported: the US label requires hepatic monitoring; the Taiwan insert advises periodic renal, hepatic and haematopoietic checks in long-term therapy and lists an anticoagulant interaction.
- Body Monitor 'Signs of C. difficile ... up to 2 months post-therapy' matches US label CDAD warning.
- Body Side Effects: injection-site pain IM 16% / IV 3%, diarrhea 3%, anaphylaxis, CDAD, SJS, TEN, DRESS, AGEP, cholestatic hepatitis, hemolytic anemia, agranulocytosis, thrombocytopenia (purpura), seizures at high CSF levels, interstitial nephritis, linear IgA bullous dermatosis, glossitis, black hairy tongue, nausea/vomiting, headache, candidiasis, fatigue/malaise, flatulence/abdominal distension and eosinophilia all appear in the US label.
- Body Drug Interactions: probenecid, allopurinol and aminoglycoside (no mixing) match the US label; methotrexate, oral contraceptives and tetracyclines/bacteriostatic agents match the Taiwan insert.
- Body Notes: fixed 2:1 ratio; false-positive Clinitest with glucose-oxidase alternative; transient estriol decrease in pregnancy; sodium ~5 mEq (115 mg) per 1.5 g vial; and mononucleosis avoidance all match the US label (sodium also matches the Taiwan insert: 115 mg/5 mmol).
- Body Coverage entries Streptococcus spp. (S. pneumoniae, S. pyogenes, viridans), MSSA, E. faecalis, S. epidermidis, E. coli, Klebsiella, P. mirabilis, H. influenzae, M. catarrhalis, N. gonorrhoeae, B. fragilis, Peptostreptococcus, Clostridium spp. (not C. difficile), Acinetobacter and Enterobacter match US label MICROBIOLOGY/INDICATIONS; Fusobacterium appears in the Taiwan insert.
- Body FDA-approved indications SSTI and IAI match US label INDICATIONS AND USAGE.
- Body Hepatic 'Monitor hepatic function at regular intervals in patients with hepatic impairment' matches the US label Hepatotoxicity warning; the DILI 9.5% / ALBI ≥-2.00 figures match PMID 37301371 (esummary verified) but need a citation.
- Body Breastfeeding monitor items (diarrhea, thrush, diaper rash, feeding difficulties) match parameters described in LactMed.
- IDSA 2026 Table 1 confirms the 9 g q8h over 4 h and 27 g/day continuous infusion CRAB regimens (the 3 g q4h regimen is not confirmed; see A1/A2).
- Taiwan insert dose figures in the brief and the .txt (adult 1.5–12 g/day q6–8h, sulbactam max 4 g; mild/moderate/severe 1.5–3 / ≤6 / ≤12 g; prophylaxis 1.5–3 g at induction; paediatric 150 mg/kg/day q6–8h; neonates in the first week 75 mg/kg/day q12h; renal CrCl ≤30 reduce frequency; CI penicillin allergy) match the PDF page images.
- Category 'β-lactam/β-lactamase inhibitor'; body 'Aminopenicillin + Penicillanic acid sulfone' (FDA DESCRIPTION: sulbactam = 'sodium penicillinate sulfone'; ATC J01CR01)
- Adult standard dose 1.5–3 g q6h and max 12 g/day (8 g ampicillin + 4 g sulbactam): FDA D&A and Taiwan insert severity table (重度 最大至 12 g)
- Renal bands 15–29 → q12h; ≥30 no reduction; 5–14 → q24h: FDA Table 3
- HD 1.5–3 g q24h given after HD, both drugs dialyzable: Blum 1989 PMID 2817847 (35%/45% removed per 4-h HD) and FDA OVERDOSAGE
- Pediatric column value 300 mg/kg/day (200 amp + 100 sulb) ÷ q6h = FDA dose for ≥1 year
- Pediatric max 8 g ampicillin/day (sulbactam ≤4 g/day): FDA
- Pediatric: safety/efficacy not established for IAI (FDA Pediatric Use)
- Body FDA-approved indications SSTI, IAI and gynecological: FDA INDICATIONS AND USAGE
- Indication tags SSTI, IAI and Surgical prophylaxis (Taiwan insert 預防手術感染 1.5–3 g at induction)
- Coverage tags Streptococcus, MSSA, E.coli, Klebsiella, Proteus, Haemophilus, Acinetobacter: FDA MICROBIOLOGY and INDICATIONS (Acinetobacter calcoaceticus); Taiwan insert
- Body coverage: Moraxella, N. gonorrhoeae, S. epidermidis, Clostridium spp. (not C. difficile), Peptostreptococcus, B. fragilis (FDA); Fusobacterium (Taiwan insert); NOT covered list consistent with sources
- Monitor tags LFT, renal, CBC, PT/INR: FDA Hepatotoxicity; Taiwan insert 長期治療定期檢查腎、肝、造血功能; anticoagulant interaction in insert
- Side-effect tags LFT↑ and hematologic: FDA Adverse Laboratory Changes / Post-marketing; AKI acceptable (tubulointerstitial nephritis, ↑BUN/Cr)
- Body side effects: injection-site pain IM 16% / IV 3%, diarrhoea 3%, anaphylaxis, CDAD, SJS/TEN/DRESS/AGEP, cholestatic hepatitis, haemolytic anaemia, agranulocytosis, thrombocytopenic purpura, convulsions, interstitial nephritis, linear IgA bullous dermatosis, glossitis, black hairy tongue, candidiasis (FDA)
- Body Monitor: CDAD can occur >2 months after therapy (FDA)
- Body Drug Interactions: probenecid, allopurinol, aminoglycoside inactivation (FDA); methotrexate, anticoagulants, tetracyclines/bacteriostatic agents, oral contraceptives (Taiwan insert)
- Body Notes: contraindication for prior cholestatic jaundice (FDA); Clinitest false positive and estriol decrease (FDA); sodium ~115 mg ≈ 5 mEq per 1.5 g (FDA DESCRIPTION; 仿單 115 mg/5 mmol); fixed 2:1 ratio
- Body Pregnancy: animal data in mice/rats/rabbits ≤10× human dose (FDA); crosses placenta (仿單); transient fall in maternal estrogens (FDA)
- Body Breastfeeding: milk levels (ampicillin up to 3 mg/L; sulbactam max 2.8 mg/L), and monitoring for diarrhoea/thrush/diaper rash/feeding (LactMed)
- Body Hepatic: DILI 9.5% and ALBI ≥-2.00 figures match Ooi 2023 abstract (PMID 37301371)
- Hospital renal table (≥30 no change / 15–29 q12h / 5–14 q24h) matches FDA except q6–8h at ≥30; hospital MDR-Acinetobacter regimen (9 g q8h over 4 h or 27 g/day CI) matches IDSA 2026 Table 1
- No UK SmPC exists: independently confirmed eMC search 'sulbactam' = 'No search results'

## Apply log

- Adult dose column: FDA 1.5–3 g IV q6h (sulbactam ≤4 g/day = 12 g/day total) + Sulampi 仿單 1.5–12 g/day q6–8h (mild q12h) + CRAB IDSA 2026 (9 g q8h over 4 h OR 27 g/day CI, sulbactam 9 g/day, plus ≥1 other active agent, bridge only until sulbactam-durlobactam + carbapenem); merged the two Adult dose fixes, kept the green IV tag
- Renal dose, HD, CRRT column: CrCl ≥30 q6–8h / 15–29 q12h / 5–14 q24h (FDA Table 3; 仿單 has no table, only CrCl ≤30); HD q24h after HD (Blum 1989; interval extrapolated, not in label); CRRT 3 g q8h (Li 2020; Trotman 2005 q12h), not in label, TDM
- Hepatic dose column: no adjustment in labels, monitor LFT; 禁忌 prior cholestatic jaundice/hepatic dysfunction
- Pediatric dose column: FDA ≥1 yr 300 mg/kg/day q6h, ≥40 kg adult dose, ≤14 days IV, IM not established; 仿單 150 mg/kg/day q6–8h, neonates ≤1 wk 75 mg/kg/day q12h
- Notes column: obesity flagged unsourced, no FDA letter category, LactMed acceptable, mononucleosis, contraindications (FDA + 仿單)
- Pregnancy column: no FDA letter category; FDA animal data; 仿單 placenta/safety not established; estriol effect
- Breastfeeding column: LactMed acceptable with milk levels, monitor infant; FDA caution; 仿單 safety not established
- Mechanism column: bilingual ampicillin PBP / sulbactam β-lactamase inhibitor, Neisseriaceae (FDA), A. baumannii PBP1a/1b/PBP3 (IDSA 2026)
- Drug Interactions column: probenecid, allopurinol, aminoglycosides (仿單 ≥1 h apart), MTX, anticoagulants, bacteriostatic abx, OCs, Clinitest false positive
- Coverage multi-select: Enterococcus replaced with E. faecalis; added Neisseria, Bacteroides, Anaerobes. Enterobacter kept (fix left it to the pharmacist), with the IDSA intrinsic-resistance caveat in the body
- Indications multi-select: added Pelvic
- Side Effects multi-select: added GI, thrombophlebitis, SJS/TEN, DRESS, CNS
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body Mechanism: sulbactam intrinsic activity limited to Neisseriaceae (FDA) and A. baumannii PBP1a/1b/PBP3 (IDSA 2026); B. fragilis flagged unsourced
- Body Indications: gynecological wording updated; surgical prophylaxis row now notes TW-insert labelling and Bratzler 2013; CAP/bite wounds/endocarditis citations added; orbital cellulitis and epiglottitis flagged unsourced
- Body Coverage: added P. vulgaris, Providencia, Morganella, S. saprophyticus, Peptococcus; Listeria and Prevotella flagged; Enterobacter cell replaced with the IDSA intrinsic-resistance note; Citrobacter freundii added to NOT covered with 仿單 note
- Body Adult Dose: CRAB row replaced (9 g q8h 4-h / 27 g CI, combination, bridge, high dose even if reported susceptible); surgical prophylaxis row (Bratzler + 仿單); Administration line (IV only, bolus ≥3 min 仿單 / ≥10–15 min FDA, 15–30 min infusion, IM US only)
- Body Renal: removed pasted AI-chat line '(Your existing content validated and expanded)'; ≥30 row changed to q6-8h (US label); <5 row now says not in FDA table; CRRT row cites Li 2020/Trotman 2005 with '(or 1.5g q6h)' flagged unsourced; PD row flagged unsourced with Heintz 2009 / Blackwell 1990
- Body Hepatic: DILI line replaced with Ooi 2023 details (PMID 37301371)
- Body Pediatric: severe row 200 mg amp/kg (=300 combined) FDA; infants row adds 仿單 150 mg/kg/day and FDA not established <1 yr; neonates row gets 仿單 75 mg/kg/day q12h; note corrected to say label doses are TOTAL and sulbactam is one-third
- Body Obesity: TDM line replaced with the ESICM 2020 recommendation (PMID 32383061)
- Body Side Effects: Thrombophlebitis 3% / Phlebitis 1.2%; Rash <2% (children 5-10% flagged); AST/ALT/ALP/LDH ('common in infants' flagged); added hypokalemia/angioedema/TIN post-marketing row; mononucleosis note uses FDA wording ('>90%' flagged)
- Body Drug Interactions: Live vaccines row flagged unsourced with severity changed from Contraindicated to 'Caution (oral live typhoid/cholera vaccines)'; Mycophenolate row kept, flagged unsourced
- Body Notes: CRAB bullet updated; mononucleosis bullet changed to FDA wording; contraindications bullet expanded (FDA + TW); Warnings (US label) bullet added; Stability line removed
- Body Pregnancy: Category B/TGA bullet replaced (no letter category, formerly B; 仿單 safety not established) with TGA flagged unsourced; human-data bullet cites eMC ampicillin SmPC 4.6; 'Crosses placenta freely' changed to 'Sulbactam crosses the placenta (仿單)'; PK bullet flagged unsourced
- Body Breastfeeding: 'Compatible (WHO, AAP)' changed to 'Acceptable (LactMed)' + US label caution; milk levels updated from LactMed; infant-dose bullet flagged unsourced; last-evidence bullet replaced with the LactMed infant-effects wording
- Body References section appended: FDA UNASYN DailyMed, Sulampi 仿單 (cth.org.tw), eMC ampicillin SmPC, LactMed NBK500983, IDSA 2026 (guidance, Table 1, supplement, PMID 42570093), and PMIDs 23327981, 31573350, 24947530, 26373316, 2817847, 16163635, 19397464, 32547394, 2099158, 37301371, 32383061

**Notes from the apply step (needs owner check):**

- Fix 'Page body (Notes section): REMOVE' was not applied as a removal of the whole Notes section. Its cited source is the 仿單 dilution table, and other agreed fixes add a Warnings bullet under Notes and update its CRAB and contraindication bullets, so only the Stability line was removed. Deleting the whole section would contradict those fixes and delete correct content.

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
