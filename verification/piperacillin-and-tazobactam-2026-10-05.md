# Verification: Pipe Tazo (Piperacillin/Tazobactam)

- **Notion entry:** [Pipe Tazo (Piperacillin/Tazobactam)](https://app.notion.com/235c496dfff180688a7acaa46c64c7c4)
- **Hospital codes:** PIP01 (Pipe Tazo inj 2.25 g), TAP02 (Tapimycin inj 2.25 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/piperacillin-and-tazobactam.json` (plus any `sources/piperacillin-and-tazobactam-taiwan-insert-*.txt`)

## Product and sources

Piperacillin/tazobactam 2.25 g vial (piperacillin 2 g + tazobactam 0.25 g, IV), ATC J01CR05. The hospital stocks two products. PIP01 is Pipe Tazo 帝斯坦乾粉注射劑 (衛署藥製字第056759號, 中化裕民/中國化學製藥). TAP02 is Tapimycin "永信" 達比黴素注射劑 (衛署藥製字第045704號, Yung Shin). According to their own inserts, neither product contains any excipient, so neither contains EDTA. Sources: Taiwan inserts (TFDA mcp.fda.gov.tw); US label (DailyMed Fresenius Kabi, setid a798faf5-cd97-4e35-a700-94c372978c46, v5, 29 Sep 2026); UK SmPC (eMC 8757, generic 2 g/0.25 g, revised 01/06/2022); LactMed NBK501068 (revised 2024-07-15). I checked every PMID cited below with NCBI E-utilities esummary.

## Agreed fixes applied in Notion (60)

### A1 · Pregnancy (error)

**Was:** Compatible (Category B); crosses placenta; no teratogenicity in animal/human data; use when indicated

**Now:** FDA no longer uses letter categories (risk summary): crosses placenta; insufficient human data to inform risk of major birth defects/miscarriage; no teratogenicity in mice/rats at 1–3× human dose; fetotoxicity only with maternal toxicity. UK SmPC: use only if clearly indicated. 仿單（帝斯坦/達比黴素）同US風險摘要。

**Why:** The FDA retired letter categories, so 'Category B' must not be shown as current. The label also says human data are insufficient, so 'no teratogenicity in ... human data' overstates the evidence.

**Sources:** US FDA label §8.1 Pregnancy (Risk Summary) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §6.1 懷孕 風險摘要 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A2 · Page body (error)

**Was:** ### Pregnancy: "**FDA Category B.** Compatible with pregnancy. ... Limited but reassuring human data. ... Commonly used for chorioamnionitis, postpartum endometritis, complicated infections in pregnancy."

**Now:** Replace '**FDA Category B.** Compatible with pregnancy.' with '**Risk summary (FDA letter categories retired; US §8.1).**'. Replace 'Limited but reassuring human data' with 'Insufficient human data to inform drug-associated risk of major birth defects/miscarriage (US §8.1; 仿單 §6.1); UK SmPC §4.6: use only if clearly indicated'. Keep the animal-data sentences. Change the last sentence to: 'Postpartum endometritis is a labelled indication (US §1.4); use for chorioamnionitis/other infections in pregnancy – unsourced, add citation.'

**Why:** The page shows a retired letter category, and 'reassuring human data' contradicts the label's 'insufficient data'. No official source supports the chorioamnionitis use statement.

**Sources:** US FDA label §8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/8757/smpc

### A3 · Notes (error)

**Was:** ↑AKI in critically ill (ACORN trial) - consider alternatives to pip-tazo + vancomycin.

**Now:** Nephrotoxicity in critically ill: independent risk factor for renal failure and delayed renal recovery vs other β-lactams in a 1200-patient RCT (Jensen 2012, PMID 22411933) → consider alternatives in critically ill; if used, monitor renal function. + vancomycin: ↑AKI incidence → monitor renal function. (ACORN 2023, PMID 37837651, cefepime vs pip-tazo: no ↑AKI/death with pip-tazo.)

**Why:** The trial behind the label warning is Jensen et al., BMJ Open 2012 (label reference 1), not ACORN. ACORN (Qian, JAMA 2023) found that pip-tazo did NOT increase AKI or death compared with cefepime. The label's advice to consider alternatives refers to pip-tazo itself in critically ill patients. For the vancomycin combination the label advises renal monitoring.

**Sources:** US FDA label §5.7, §6.1 'Other Trials: Nephrotoxicity', §7.3, §15 ref 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; Jensen JU et al. BMJ Open 2012;2:e000635 PMID 22411933 https://pubmed.ncbi.nlm.nih.gov/22411933/; Qian ET et al. ACORN, JAMA 2023;330:1557-67 PMID 37837651 https://pubmed.ncbi.nlm.nih.gov/37837651/; TW insert 達比黴素 §5.1 對重症病人的腎毒性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC045704%E8%99%9F

### A4 · Page body (error)

**Was:** Notes > Clinical Pearls: "Nephrotoxicity: Independent risk factor for AKI in critically ill (ACORN trial); consider alternatives or close monitoring"

**Now:** Nephrotoxicity: independent risk factor for renal failure and delayed renal recovery in critically ill patients (Jensen 2012 RCT secondary analysis, PMID 22411933; US label §5.7) → consider alternatives in critically ill; otherwise monitor renal function. Note: ACORN (2023, PMID 37837651) found no ↑AKI vs cefepime in hospitalized adults.

**Why:** The trial is misattributed. See A3.

**Sources:** US FDA label §5.7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; PMID 22411933 https://pubmed.ncbi.nlm.nih.gov/22411933/; PMID 37837651 https://pubmed.ncbi.nlm.nih.gov/37837651/

### A5 · Page body (error)

**Was:** Notes > Clinical Pearls: "β-lactam allergy: ~3-5% cross-reactivity with penicillin allergy; avoid if severe/immediate reaction; caution if mild/delayed"

**Now:** 禁忌 Contraindication: history of allergic reaction to any penicillin, cephalosporin or β-lactamase inhibitor (US §4; 仿單 §4: 對β-lactam(包括青黴素與頭孢子素)或β-lactamase抑制劑曾有過敏者禁用). UK SmPC §4.3: hypersensitivity to any penicillin, or acute severe allergic reaction to other β-lactams (cephalosporin, monobactam, carbapenem).

**Why:** Piperacillin is a penicillin. Every label contraindicates it in patients with penicillin allergy. The sentence suggests that patients with a mild or delayed penicillin allergy can be given it 'with caution', which contradicts the contraindication.

**Sources:** US FDA label §4 Contraindications https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.3 https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §4 禁忌 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A6 · Notes (missing)

**Was:** (no contraindication; no HLH / severe cutaneous reaction / rhabdomyolysis warnings in the property)

**Now:** Append: 禁忌: penicillin / cephalosporin / β-lactamase-inhibitor allergy. Warnings: SCAR (SJS/TEN/DRESS/AGEP) – stop if rash progresses; HLH (fever, rash, lymphadenopathy, hepatosplenomegaly, cytopenia – often after >10 days) – stop immediately; rhabdomyolysis – stop; seizures at high dose/renal impairment.

**Why:** The page has no contraindication column. These boxed warnings and precautions sit in sections 4 and 5 of the US label and section 4.4 of the SmPC. The Tapimycin insert includes the HLH warning. The Notes property currently mentions none of them.

**Sources:** US FDA label §4, §5.2, §5.3, §5.4, §5.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.4 (HLH often after >10 days) https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 達比黴素 §5 噬血球性淋巴組織球增生症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC045704%E8%99%9F

### A7 · Coverage (error)

**Was:** Corynebacterium

**Now:** REMOVE

**Why:** The UK SmPC lists Corynebacterium jeikeium under 'INHERENTLY RESISTANT ORGANISMS'. Neither the US label nor the Taiwan insert lists any Corynebacterium as susceptible.

**Sources:** UK SmPC §5.1 'Inherently resistant organisms' https://www.medicines.org.uk/emc/product/8757/smpc; US FDA label §12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### A8 · Coverage (missing)

**Was:** MSSA, Streptococcus, Enterococcus, E.coli, Klebsiella, Proteus, Pseudomonas, Haemophilus, Acinetobacter, Corynebacterium

**Now:** MSSA, Streptococcus, E. faecalis, E.coli, Klebsiella, Proteus, Pseudomonas, Haemophilus, Acinetobacter, Serratia, Bacteroides, Anaerobes

**Why:** The US label approves use against the Bacteroides fragilis group in clinical infections, and the SmPC lists anaerobes such as Clostridium, Fusobacterium, Prevotella and gram-positive anaerobic cocci as commonly susceptible. Serratia marcescens is in the US in-vitro list. Enterobacter and Serratia appear on the SmPC list as species that can acquire resistance, and the page body already names them. For enterococci, only ampicillin-susceptible E. faecalis is covered; E. faecium resistance is a problem, so the existing 'E. faecalis' option is more accurate than 'Enterococcus'. All proposed tags exist in the schema.

**Sources:** US FDA label §1.1, §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §5.1 susceptibility groupings https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §10.2.1 抗菌範圍 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A9 · Page body (minor)

**Was:** Coverage > **NO coverage:** MRSA, VRE, Stenotrophomonas maltophilia, ESBL-producers (unreliable), AmpC overproducers, Legionella, Mycoplasma, Chlamydia

**Now:** Add: Corynebacterium jeikeium, Burkholderia cepacia (SmPC inherently resistant); 'AmpC overproducers / metallo-β-lactamase producers (tazobactam does not inhibit AmpC or MBL – SmPC 5.1)'. Add: ESBL E. coli/K. pneumoniae bacteraemia – pip-tazo not recommended (MERINO; SmPC 4.1).

**Why:** The existing list is correct. The additions are organisms the SmPC names as inherently resistant, plus the SmPC note on ESBL bacteraemia.

**Sources:** UK SmPC §4.1 note, §5.1 (mechanism of resistance; inherently resistant; MERINO) https://www.medicines.org.uk/emc/product/8757/smpc

### A10 · Indications (missing)

**Was:** Pneumonia, CAP, HAP, VAP, UTI, IAI, SSTI, FN, Sepsis, Bacteremia

**Now:** Pneumonia, CAP, HAP, VAP, UTI, cUTI, IAI, SSTI, Pelvic, FN, Sepsis, Bacteremia

**Why:** The US label approves female pelvic infections (postpartum endometritis, PID) in section 1.4, but 'Pelvic' is not tagged. The SmPC approves complicated UTI including pyelonephritis, so cUTI should be added. The other tags are supported. HAP/VAP: US label section 1.2 and SmPC. CAP: US 1.5. IAI: US 1.1. SSTI: US 1.3. FN and bacteraemia: SmPC 4.1. Sepsis rests only on the Taiwan inserts (細菌性敗血症). Neither the FDA label nor the SmPC lists sepsis, so the tag is acceptable only because it comes from the stocked product's label.

**Sources:** US FDA label §1.1–1.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A11 · Page body (unsupported)

**Was:** Indications: "... bacteremia, osteomyelitis, surgical prophylaxis"

**Now:** Mark 'osteomyelitis, surgical prophylaxis' as '(off-label – not in US/UK/TW labels)'; add '(ESBL-producing E. coli/K. pneumoniae bacteraemia: not recommended – SmPC 4.1)'. Label-approved list: IAI (appendicitis/peritonitis), nosocomial pneumonia (HAP/VAP), CAP (moderate), SSSI incl. diabetic foot, female pelvic infection (US); cUTI/pyelonephritis, cIAI, cSSTI, bacteraemia associated with these, febrile neutropenia (UK); 下呼吸道、尿路、腹腔內、皮膚、細菌性敗血症、嗜中性白血球減少、多菌種感染 (TW).

**Why:** None of the three labels lists osteomyelitis or surgical prophylaxis.

**Sources:** US FDA label §1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A12 · Side Effects (missing)

**Was:** GI, LFT↑, thrombocytopenia, neutropenia, leukopenia, anemia, hypokalemia, AKI

**Now:** GI, LFT↑, thrombocytopenia, neutropenia, leukopenia, anemia, hypokalemia, AKI, CNS, coagulopathy, thrombophlebitis, DRESS, SJS/TEN, rhabdomyolysis

**Why:** These are labelled adverse reactions that are not yet tagged. US label: seizures (5.6), bleeding with abnormal coagulation tests (5.5), phlebitis 1.3% and thrombophlebitis (6.1), SJS/TEN/DRESS (5.2) and rhabdomyolysis (5.4). The SmPC also lists seizures, phlebitis, SJS/TEN and DRESS. All proposed tags exist in the schema.

**Sources:** US FDA label §5.2, §5.4, §5.5, §5.6, §6.1, §6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.8 https://www.medicines.org.uk/emc/product/8757/smpc

### A13 · Page body (error)

**Was:** Side Effects > Hepatic: "↑ALT (6-15%), ↑AST, ↑bilirubin (3-5%), ↑alkaline phosphatase"

**Now:** Hepatic: transient ↑ALT/AST/ALP (SmPC: common, 1–10%; US NP trials ≤1%), ↑bilirubin (SmPC: uncommon, 0.1–1%); hepatitis/jaundice (post-marketing)

**Why:** No label gives these percentages. In US Table 7, ALT and AST increases are ≤1% and abnormal LFTs 1.4%. The SmPC rates ALT/AST increases as common (<10%) and bilirubin increases as uncommon (<1%), which contradicts '6-15%' and '3-5%'.

**Sources:** US FDA label §6.1 Table 7, §6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.8 table https://www.medicines.org.uk/emc/product/8757/smpc

### A14 · Page body (missing)

**Was:** Side Effects > Serious/Rare list (no rhabdomyolysis, delirium, eosinophilic pneumonia; HLH timing absent)

**Now:** Add to Serious/Rare: Rhabdomyolysis (US W&P 5.4 – stop drug); Delirium; Eosinophilic pneumonia; Linear IgA bullous dermatosis / exfoliative dermatitis (US 6.2). Annotate HLH: 'often after >10 days of therapy (SmPC 4.4); stop immediately if suspected'.

**Why:** These are labelled warnings and post-marketing reactions that the page body leaves out.

**Sources:** US FDA label §5.3, §5.4, §6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.4, §4.8 https://www.medicines.org.uk/emc/product/8757/smpc

### A15 · Monitor (missing)

**Was:** renal, LFT, CBC, PT/INR, electrolyte

**Now:** renal, LFT, CBC, PT/INR, electrolyte, CNS

**Why:** The label says to closely monitor patients with renal impairment or seizure disorders for neuromuscular excitability or seizures. The page body's Monitor table already includes this item. Optionally, the body could also add 'CPK if myalgia/weakness (rhabdomyolysis)'. The body's frequencies ('q2-3 days', 'weekly') have no source. The label asks only for periodic CBC, especially when therapy lasts ≥21 days.

**Sources:** US FDA label §5.4, §5.5, §5.6, §5.8 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### A16 · Renal dose, HD, CRRT (missing)

**Was:** CrCl >40: no adjustment; CrCl 20-40: 2.25g q6h (or 3.375g q6h for pneumonia); CrCl <20: 2.25g q8h (or 2.25g q6h for pneumonia); HD: 2.25g q12h + 0.75g after each HD; CAPD: 2.25g q12h; CRRT: 2.25-3.375g q6-8h (individualize)

**Now:** CrCl >40: no adjustment; <br>CrCl 20-40: 2.25g q6h (NP 3.375g q6h); <br>CrCl <20: 2.25g q8h (NP 2.25g q6h); <br>HD: 2.25g q12h (NP 2.25g q8h) + 0.75g after each HD session; CAPD: 2.25g q12h (NP 2.25g q8h), no supplement (仿單/US label). <br>UK SmPC: CrCl 20-40 max 4.5g q8h; <20 max 4.5g q12h; HD +2.25g after dialysis. <br>CRRT (off-label, Trotman 2005 / Heintz 2009): 2.25-3.375g q6-8h (individualize)

**Why:** Values checked against the Taiwan inserts and the US label (identical). The property leaves out the nosocomial-pneumonia doses for HD and CAPD, and the statement that CAPD needs no supplemental dose. The ground rules ask for the other label's values to be shown alongside, and the UK SmPC values differ. No label covers CRRT, so the CRRT line needs a citation. I could not check the drug-specific CRRT doses against the full text: the PubMed abstracts confirm both reviews cover piperacillin-tazobactam, but not the exact dose table.

**Sources:** TW insert 帝斯坦 §3.1.3 表二 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; US FDA label §2.3 Table 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 renal table https://www.medicines.org.uk/emc/product/8757/smpc; Trotman RL et al. Clin Infect Dis 2005;41:1159-66 PMID 16163635 https://pubmed.ncbi.nlm.nih.gov/16163635/; Heintz BH et al. Pharmacotherapy 2009;29:562-77 PMID 19397464 https://pubmed.ncbi.nlm.nih.gov/19397464/

### A17 · Page body (unsupported)

**Was:** Renal table row **CRRT/CVVH**: "2.25-3.375g q6-8h (individualize)" \| "4.5g q8h (extended infusion preferred)"; no UK SmPC values

**Now:** Label the CRRT row 'off-label – Trotman 2005 (PMID 16163635), Heintz 2009 (PMID 19397464); individualize/TDM'. Flag the NP-column '4.5g q8h (extended infusion preferred)' as unsourced unless a citation is added. Add a line under the table: 'UK SmPC: CrCl 20–40 max 4.5 g q8h; <20 max 4.5 g q12h; HD +2.25 g after each dialysis. 院內品項(帝斯坦/達比黴素)依仿單表二.'

**Why:** No label covers CRRT. The nosocomial-pneumonia CRRT regimen has no source. The SmPC renal regimen differs from the US and Taiwan regimen and should be shown alongside. The CrCl, HD and CAPD rows match the Taiwan inserts and the US label.

**Sources:** UK SmPC §4.2 https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §3.1.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; PMID 16163635 https://pubmed.ncbi.nlm.nih.gov/16163635/; PMID 19397464 https://pubmed.ncbi.nlm.nih.gov/19397464/

### A18 · Adult dose (unsupported)

**Was:** Mild-moderate: 3.375g IV q6h; Severe/IAI/SSTI: 4.5g IV q6-8h; Nosocomial pneumonia/Pseudomonas: 4.5g IV q6h (±aminoglycoside); Extended infusion: 3.375-4.5g over 4h q8h. Infuse 30 min (standard) or 4h (extended). Duration 7-14 days.

**Now:** Usual (仿單): 12 g/1.5 g–16 g/2 g/day, 4.5 g q6–8h; US: 3.375 g q6h (non-NP); <br>Nosocomial pneumonia: 4.5 g q6h + aminoglycoside (continue AG if P. aeruginosa isolated); <br>UK: 4.5 g q8h (cUTI/cIAI/cSSTI), q6h (severe pneumonia, febrile neutropenia); <br>Extended infusion (off-label): 3.375 g over 4 h q8h (Lodise 2007); prolonged infusion supported by consensus (Hong 2023/2026) – 4.5 g EI dose unverified. Standard infusion ≥30 min. <br>Duration 7–10 days (NP 7–14 days) per US/仿單; SmPC 5–14 days.

**Why:** The standard doses are supported: the Taiwan insert gives 4.5 g every 6–8 h, US section 2.1 gives 3.375 g every 6 h, and the SmPC gives 4.5 g every 8 h or every 6 h. Extended infusion is off-label and has no citation. The duration '7-14 days' covers only nosocomial pneumonia; the US label gives 7–10 days for other indications. The aminoglycoside should be continued when P. aeruginosa is isolated, not '±'.

**Sources:** TW insert 帝斯坦 §3.1.1, §3.1.2, 治療期間 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; US FDA label §2.1, §2.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 https://www.medicines.org.uk/emc/product/8757/smpc; Lodise TP et al. Clin Infect Dis 2007;44:357-63 PMID 17205441 https://pubmed.ncbi.nlm.nih.gov/17205441/; Hong LT et al. Pharmacotherapy 2023;43:740-777 PMID 37615245 https://pubmed.ncbi.nlm.nih.gov/37615245/; Hong LT et al. Focused update, Pharmacotherapy 2026;46:e70188 PMID 42598847 https://pubmed.ncbi.nlm.nih.gov/42598847/

### A19 · Page body (unsupported)

**Was:** Adult Dose table: "Continuous infusion \| 13.5-18g/24h after 4.5g loading dose"; "Extended infusion (critically ill) \| 3.375-4.5g IV over 4h q8h"

**Now:** Add '(off-label)' to both rows and cite: prolonged-infusion consensus (Hong 2023, PMID 37615245; focused update 2026, PMID 42598847); BLING III continuous vs intermittent β-lactam (Dulhunty 2024, PMID 38864155); extended-infusion pip-tazo (Lodise 2007, PMID 17205441). If no source for the exact 13.5–18 g/24 h + 4.5 g LD regimen is found, flag it as unsourced.

**Why:** Prolonged infusion is not in any label. The consensus and the trials support prolonged infusion in general, but I did not confirm that any of them states this exact continuous-infusion dose.

**Sources:** PMID 37615245 https://pubmed.ncbi.nlm.nih.gov/37615245/; PMID 42598847 https://pubmed.ncbi.nlm.nih.gov/42598847/; PMID 38864155 https://pubmed.ncbi.nlm.nih.gov/38864155/; PMID 17205441 https://pubmed.ncbi.nlm.nih.gov/17205441/

### A20 · Pediatric dose (missing)

**Was:** 2-9 mo: 80 mg/kg (pip) IV q8h; ≥9 mo & ≤40 kg: 100 mg/kg (pip) IV q8h (IAI) or q6h (pneumonia); >40 kg: adult dosing; <2 mo: not established. Max: 4g pip/0.5g tazo per dose

**Now:** 2-9 mo: 80 mg/kg (pip) IV q8h (IAI) or q6h (NP); <br>>9 mo & ≤40 kg: 100 mg/kg (pip) IV q8h (IAI) or q6h (NP); <br>UK (2–12 y): febrile neutropenia 80 mg/kg q6h; cIAI 100 mg/kg q8h; <br>>40 kg: adult dosing; <2 mo: not established. Max 4 g pip/0.5 g tazo per dose. <br>Renal: US/仿單 not determined; UK: CrCl ≤50 → 70 mg/kg q8h, HD +40 mg/kg after dialysis. (仿單 lists IAI dosing only.)

**Why:** The property leaves out the q6h nosocomial-pneumonia dose for 2–9-month-olds that the US label gives in section 2.4 (90 mg/kg combined = 80 mg/kg piperacillin q6h). The SmPC adds paediatric febrile-neutropenia and renal dosing that are missing here. The Taiwan inserts give paediatric dosing for appendicitis and peritonitis only.

**Sources:** US FDA label §2.4 Table 2, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 paediatric population https://www.medicines.org.uk/emc/product/8757/smpc; TW insert 帝斯坦 §3.1.4 小兒病患 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A21 · Page body (error)

**Was:** **Neonates (off-label, limited data):** PMA <30 weeks: 100 mg/kg IV q8h; PMA 30-36 weeks: 100 mg/kg IV q8h; PMA >36 weeks: 100 mg/kg IV q6-8h

**Now:** **Neonates/infants <2 mo (off-label; safety/efficacy not established per US label §8.4):** PK-model regimen (Cohen-Wolkowiez 2014, PMID 24614369): PMA ≤30 wk 100 mg/kg q8h; PMA 30–35 wk 80 mg/kg q6h; PMA 35–49 wk 80 mg/kg q4h (piperacillin component).

**Why:** The PMA 30–36 and >36 week rows have no source and contradict the published population-PK dosing study, which recommends shorter intervals at a lower per-dose amount. The US label states that safety and efficacy below 2 months have not been established.

**Sources:** Cohen-Wolkowiez M et al. Antimicrob Agents Chemother 2014;58:2856-65 PMID 24614369 https://pubmed.ncbi.nlm.nih.gov/24614369/; US FDA label §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### A22 · Breastfeeding (unsupported)

**Was:** Compatible (LactMed); low milk levels (RID \<1%); poor oral bioavailability; monitor infant for diarrhea/thrush

**Now:** LactMed: limited data – piperacillin milk levels low (0.49–1.9 mg/L after 4 g IV q8h), not expected to cause adverse effects in breastfed infants; tazobactam not studied. Monitor infant for diarrhea/thrush (penicillin class). 仿單/US: weigh benefit of breastfeeding vs maternal need.

**Why:** LactMed does not use the label 'Compatible' and gives no RID or oral-bioavailability figures. Those statements have no source. The milk levels and the advice to watch for diarrhoea and thrush come from LactMed.

**Sources:** LactMed NBK501068 (Summary; Drug Levels) https://www.ncbi.nlm.nih.gov/books/NBK501068/; US FDA label §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### A23 · Page body (unsupported)

**Was:** Breastfeeding: "**Compatible (LactMed: Acceptable).** ... (0.49-1.5 mg/L after 4g IV q8h) ... Both have poor oral bioavailability ... Relative infant dose (RID) estimated <1%. ... No dose adjustment needed."

**Now:** Replace '**Compatible (LactMed: Acceptable).**' with '**LactMed: low milk levels, not expected to cause adverse effects in breastfed infants.**'; change '0.49-1.5 mg/L' to '0.49–1.5 mg/L after 1st dose, 1.1–1.9 mg/L after 2nd dose (peak 2–3 h)'; flag/remove 'poor oral bioavailability' and 'RID <1%' (not stated in LactMed); keep the diarrhea/thrush monitoring.

**Why:** LactMed has no 'Acceptable' rating. The RID and bioavailability claims have no source.

**Sources:** LactMed NBK501068 https://www.ncbi.nlm.nih.gov/books/NBK501068/

### A24 · Drug Interactions (minor)

**Was:** ... warfarin (↑INR - monitor), aminoglycosides (give separately; tobramycin NOT Y-site compatible) ...

**Now:** ... heparin/oral anticoagulants (monitor coagulation parameters more often), aminoglycosides (in-vitro inactivation → give separately; tobramycin NOT Y-site compatible; ↓tobramycin levels in HD/ESRD – monitor AG levels) ...

**Why:** The label does not claim that warfarin raises INR; it asks for closer coagulation monitoring with heparin and oral anticoagulants (7.4). The property also leaves out the in-vivo aminoglycoside inactivation in dialysis patients (7.1).

**Sources:** US FDA label §7.1, §7.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.5 https://www.medicines.org.uk/emc/product/8757/smpc

### A25 · Page body (missing)

**Was:** Drug Interactions > Aminoglycosides: "Administer separately; amikacin/gentamicin Y-site OK with EDTA formulation only"

**Now:** Append: '院內品項 帝斯坦/達比黴素 不含賦形劑（無EDTA）→ 依仿單，Y-site相容表不適用，須與aminoglycoside分開調配、稀釋、給藥。' (Hospital products contain no excipients/EDTA; per their inserts the Y-site table does not apply – administer separately.)

**Why:** Both Taiwan inserts limit amikacin/gentamicin Y-site compatibility to EDTA-containing formulations, and both declare 賦形劑: 無, so their products contain no EDTA. The US Fresenius label section 2.6 allows Y-site under set conditions without mentioning EDTA. The practical consequence for the stocked products is not stated on the page.

**Sources:** TW insert 帝斯坦 §1.2 賦形劑 無; §3.1.2 Y型輸注管需含EDTA https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; TW insert 達比黴素 §1.2 賦形劑 無; §3 Y-site/EDTA https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC045704%E8%99%9F; US FDA label §2.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### A26 · Page body (unsupported)

**Was:** Drug Interactions: Vancomycin "↑AKI risk 1.5-3×" / "consider alternatives in critically ill (cefepime, meropenem)"; Warfarin "↑INR (platelet dysfunction, ? ↓vitamin K flora)"; MINOR: "Live typhoid vaccine: May ↓efficacy → avoid within 24h of antibiotic"; "Oral contraceptives: Possible ↓efficacy (theoretical) → use backup method"

**Now:** Vancomycin: '↑AKI incidence vs vancomycin alone (some studies: vanco-dose/trough dependent) → monitor renal function' (remove the 1.5–3× figure and named alternatives unless cited). Warfarin row → 'Heparin/oral anticoagulants: monitor coagulation parameters more frequently' (remove the speculative mechanism). Typhoid: 'Oral live typhoid vaccine (Ty21a): do not give while receiving antibiotics (Vivotif label)'. Oral contraceptives: flag as unsourced (not in US/UK/TW labels).

**Why:** No label gives the 1.5–3× figure or the alternative drug names. The '24 h' typhoid interval is unsupported: the Vivotif label says the vaccine should not be given to people receiving antibiotics. The oral-contraceptive interaction appears in no pip-tazo label.

**Sources:** US FDA label §7.3, §7.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.5 (vancomycin dose-dependent) https://www.medicines.org.uk/emc/product/8757/smpc; Vivotif (Ty21a) US label, DailyMed setid 09d800e3-427e-4973-9261-61592d662bbd https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=09d800e3-427e-4973-9261-61592d662bbd

### A27 · Page body (minor)

**Was:** Lab Interference: galactomannan, urine glucose (copper reduction), direct Coombs

**Now:** Add: 'False-positive urine protein with some chemical methods (dipstick unaffected) – SmPC 4.5'.

**Why:** This is a labelled lab interference that the page leaves out. The three listed interferences are correct.

**Sources:** UK SmPC §4.5 Effects on laboratory tests https://www.medicines.org.uk/emc/product/8757/smpc

### A28 · Page body (minor)

**Was:** Notes: "Vd: 0.24 L/kg"; "Metabolism: Minimal (<5%)"; "~20% biliary"; "High sodium content: 54-64 mg (2.35-2.79 mEq)"; "Extended infusion improves outcomes for infections with MIC ≥8-16 mg/L"; "Neutropenia risk increases with therapy >14-21 days"

**Now:** Vd: ~15 L adults (0.243 L/kg is the paediatric population value); excretion: piperacillin 68%, tazobactam 80% unchanged in urine, also biliary (no % given); Na⁺ 54 mg (2.35 mEq)/g piperacillin (US; TW inserts also print 64–65 mg/g); neutropenia: mostly with prolonged therapy, assess CBC especially if ≥21 days; flag 'MIC ≥8–16' and '<5% metabolism'/'~20% biliary' as unsourced.

**Why:** Label section 12.3 gives adult V of 14.7–17.4 L, while 0.243 L/kg is the paediatric population-PK value. No label gives the '<5%' or '~20% biliary' figures. Label section 5.5 says ≥21 days. The Taiwan inserts are internally inconsistent on sodium (54 mg/g in the description, 65 mg in §5, 64 mg in §6.5).

**Sources:** US FDA label §5.5, §5.8, §12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; TW insert 帝斯坦 §5.1.6, §6.5, §10 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### A29 · Notes (minor)

**Was:** Infuse 30 min (standard) or 4h extended (critically ill/Pseudomonas/MIC≥16). ... 60-80% renal excretion.

**Now:** Infuse ≥30 min (label); 4h extended infusion off-label (prolonged-infusion consensus, PMID 37615245). ... Renal excretion: piperacillin 68%, tazobactam 80% unchanged.

**Why:** Extended infusion is off-label and needs a citation; the 'MIC≥16' trigger has no source. The renal excretion figures should match label section 12.3.

**Sources:** US FDA label §2.1, §12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; PMID 37615245 https://pubmed.ncbi.nlm.nih.gov/37615245/

### A30 · Mechanism (minor)

**Was:** Piperacillin: binds PBPs → inhibits cell wall synthesis → bactericidal. Tazobactam: inhibits class A β-lactamases → protects piperacillin. Time-dependent killing (fT>MIC).

**Now:** ... Tazobactam: inhibits class A β-lactamases (Bush 2b/2b′) → protects piperacillin; does not inhibit AmpC or metallo-β-lactamases. Time-dependent killing (fT>MIC).

**Why:** The current text is correct. The SmPC adds a clinically useful limitation: tazobactam does not inhibit AmpC or metallo-β-lactamases.

**Sources:** UK SmPC §5.1 Mechanism of action/resistance https://www.medicines.org.uk/emc/product/8757/smpc; US FDA label §12.2, §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### B1 · Notes (error)

**Was:** ↑AKI in critically ill (ACORN trial) - consider alternatives to pip-tazo + vancomycin. (Body, Clinical Pearls: "Nephrotoxicity: Independent risk factor for AKI in critically ill (ACORN trial)")

**Now:** ↑AKI/delayed renal recovery in critically ill (FDA §5.7; Jensen 2012 BMJ Open, PASS trial, PMID 22411933) – consider alternatives in critically ill; if used, monitor renal function. Pip-tazo + vancomycin ↑AKI → monitor renal function (FDA §7.3). Note: ACORN RCT (Qian 2023, PMID 37837651) found no ↑AKI vs cefepime. (Make the same correction in the body Clinical Pearls line.)

**Why:** The label's nephrotoxicity warning cites Jensen et al., BMJ Open 2012 (1,200-patient PASS ICU trial; OR 1.7 for renal failure). ACORN (JAMA 2023) found the opposite: 'treatment with piperacillin-tazobactam did not increase the incidence of acute kidney injury or death' (OR 0.95, 95% CI 0.80–1.13). The current text cites ACORN as evidence for the very claim that ACORN refuted.

**Sources:** US FDA label §5.7 Nephrotoxicity in Critically Ill Patients, §6.1 'Other Trials: Nephrotoxicity', §15 Ref 1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; Jensen JU et al. BMJ Open 2012;2:e000635, PMID 22411933 – https://pubmed.ncbi.nlm.nih.gov/22411933/; Qian ET et al. ACORN, JAMA 2023;330:1557-67, PMID 37837651 – https://pubmed.ncbi.nlm.nih.gov/37837651/; Taiwan insert Pipe Tazo §5.1.5 對重症病人的腎毒性 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B2 · Page body (error)

**Was:** Notes › Clinical Pearls: "β-lactam allergy: ~3-5% cross-reactivity with penicillin allergy; avoid if severe/immediate reaction; caution if mild/delayed"

**Now:** β-lactam allergy: piperacillin IS a penicillin → contraindicated with a history of allergic reaction to any penicillin, cephalosporin or β-lactamase inhibitor (FDA §4; 台灣仿單 4 禁忌：對β-lactam(包括青黴素與頭孢子素)或β-Lactamase抑制劑曾有過敏之病患，禁用本藥). UK SmPC §4.3: contraindicated with any penicillin hypersensitivity or a history of acute severe reaction to other β-lactams (cephalosporin, monobactam, carbapenem).

**Why:** The cross-reactivity concept applies to giving a different β-lactam class to a penicillin-allergic patient. It does not apply here: pip-tazo is itself a penicillin. All three labels contraindicate it in penicillin allergy, and the current text could lead to a penicillin-allergic patient being given a penicillin. The figure is also unsourced.

**Sources:** US FDA label §4 Contraindications – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.3 – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §4 禁忌 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B3 · Pregnancy (error)

**Was:** Compatible (Category B); crosses placenta; no teratogenicity in animal/human data; use when indicated

**Now:** Crosses placenta; insufficient human data to inform risk of major birth defects/miscarriage (FDA §8.1 risk summary; 台灣仿單 6.1). Animal: no teratogenicity in mice/rats at 1–3× human dose; fetotoxicity (↓fetal weight, ossification delay) only with maternal toxicity. UK SmPC §4.6: use only if clearly indicated (benefit > risk).

**Why:** The FDA retired letter categories, and the current label uses risk-summary wording. 'No teratogenicity in ... human data' overstates the evidence: the label says human data are insufficient.

**Sources:** US FDA label §8.1 Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §6.1 懷孕 風險摘要 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B4 · Page body (error)

**Was:** Pregnancy section: "**FDA Category B.** Compatible with pregnancy ... Limited but reassuring human data ... Commonly used for chorioamnionitis, postpartum endometritis, complicated infections in pregnancy."

**Now:** Replace the first sentence with "**Pregnancy (FDA risk summary, §8.1):** crosses the placenta; insufficient human data to inform drug-associated risk of major birth defects or miscarriage." Change "Limited but reassuring human data" to "Human data insufficient (FDA §8.1); UK SmPC §4.6: use only if clearly indicated." Keep the animal-data sentences. Flag the chorioamnionitis sentence as unsourced (only postpartum endometritis is a labelled indication, FDA §1.4).

**Why:** Remove the retired letter category. 'Reassuring human data' contradicts the label's 'insufficient data'. The chorioamnionitis usage claim has no source.

**Sources:** US FDA label §8.1, §1.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/8757/smpc

### B5 · Coverage (error)

**Was:** Corynebacterium (tag)

**Now:** REMOVE "Corynebacterium"

**Why:** UK SmPC §5.1 lists Corynebacterium jeikeium under 'INHERENTLY RESISTANT ORGANISMS'. Neither the FDA §12.4 nor the Taiwan insert lists Corynebacterium as susceptible, and the body coverage section does not mention it.

**Sources:** UK SmPC §5.1 Susceptibility – Inherently resistant organisms – https://www.medicines.org.uk/emc/product/8757/smpc; US FDA label §12.4 Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### B6 · Page body (error)

**Was:** Pediatric › Neonates (off-label): PMA <30 wk 100 mg/kg IV q8h; PMA 30-36 wk 100 mg/kg IV q8h; PMA >36 wk 100 mg/kg IV q6-8h

**Now:** Infants <61 days (off-label; PK modelling only; Cohen-Wolkowiez 2014, PMID 24614369), piperacillin component: PMA ≤30 wk 100 mg/kg q8h; PMA 30–35 wk 80 mg/kg q6h; PMA 35–49 wk 80 mg/kg q4h. Labels: safety/efficacy not established <2 months (FDA §8.4) / <2 years (UK SmPC §4.2).

**Why:** No label covers neonatal dosing. The PK study that derived PMA-based dosing (90% target attainment, fT>MIC ≤32 mg/L for 75% of the interval) recommends 80 mg/kg q6h at PMA 30–35 wk and 80 mg/kg q4h at PMA 35–49 wk. The current 30–36 wk (100 q8h) and >36 wk (100 q6–8h) rows give less frequent dosing than the study supports.

**Sources:** Cohen-Wolkowiez M et al. Antimicrob Agents Chemother 2014;58:2856-65, PMID 24614369 – https://pubmed.ncbi.nlm.nih.gov/24614369/; US FDA label §8.4 Pediatric Use – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 'Use in children aged below 2 years' – https://www.medicines.org.uk/emc/product/8757/smpc

### B7 · Page body (error)

**Was:** Side Effects › Common: "Hepatic: ↑ALT (6-15%), ↑AST, ↑bilirubin (3-5%), ↑alkaline phosphatase"

**Now:** Hepatic: ↑ALT, ↑AST, ↑ALP (common 1–10%, UK SmPC §4.8; ≤1% each in FDA nosocomial-pneumonia trials, Table 7); ↑bilirubin (uncommon, UK SmPC); hepatitis, jaundice (post-marketing, FDA §6.2)

**Why:** No source gives these percentages. The FDA label lists AST, ALT and ALP increases at ≤1% and 'liver function test abnormal' at 1.4%. The UK SmPC classes ALT/AST increases as common (≥1/100 to <1/10) and bilirubin increase as uncommon.

**Sources:** US FDA label §6.1 Table 7 and Adverse Laboratory Changes; §6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.8 Investigations row – https://www.medicines.org.uk/emc/product/8757/smpc

### B8 · Side Effects (missing)

**Was:** GI, LFT↑, thrombocytopenia, neutropenia, leukopenia, anemia, hypokalemia, AKI

**Now:** GI, LFT↑, thrombocytopenia, neutropenia, leukopenia, anemia, hypokalemia, AKI, DRESS, SJS/TEN, coagulopathy, thrombophlebitis, CNS, rhabdomyolysis

**Why:** All of these are label Warnings with matching schema options: severe cutaneous reactions SJS/TEN/DRESS/AGEP (FDA §5.2); bleeding with abnormal coagulation tests and prolonged PT/aPTT (§5.5); phlebitis 1.3% and thrombophlebitis (Table 6); seizures and neuromuscular excitability (§5.6); rhabdomyolysis (§5.4, newly added to the label).

**Sources:** US FDA label §5.2, §5.4, §5.5, §5.6, §6.1 Table 6, §6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.4, §4.8 – https://www.medicines.org.uk/emc/product/8757/smpc

### B9 · Page body (missing)

**Was:** Serious/Rare list has no rhabdomyolysis, eosinophilic pneumonia, delirium or linear IgA bullous dermatosis

**Now:** Add to Serious/Rare: "- Rhabdomyolysis (muscle pain/weakness, dark urine, ↑CPK → discontinue; FDA §5.4)" and "- Eosinophilic pneumonia, delirium, linear IgA bullous dermatosis (post-marketing, FDA §6.2)"

**Why:** The current FDA label has a new Warning §5.4 (rhabdomyolysis) and lists these post-marketing reactions. HLH is already present in the body, which is correct.

**Sources:** US FDA label §5.4, §6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.8 (eosinophilic pneumonia, delirium) – https://www.medicines.org.uk/emc/product/8757/smpc

### B10 · Indications (missing)

**Was:** Pneumonia, CAP, HAP, VAP, UTI, IAI, SSTI, FN, Sepsis, Bacteremia

**Now:** Add tags: Pelvic, cUTI, cIAI, cSSTI, Peritonitis (keep the existing approved tags)

**Why:** Each added tag is labelled. Pelvic: FDA §1.4 female pelvic infections (postpartum endometritis, PID). cUTI incl. pyelonephritis: UK SmPC §4.1. cIAI and complicated SSTI incl. diabetic foot: UK SmPC §4.1. Peritonitis: FDA §1.1 'appendicitis (complicated by rupture or abscess) and peritonitis'. Uncomplicated UTI appears only in the Taiwan insert (尿路感染(複雜及非複雜性)), so the cUTI tag carries the FDA/UK-approved scope.

**Sources:** US FDA label §1.1, §1.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.1 – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §2 適應症 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B11 · Indications (unsupported)

**Was:** Sepsis (tag)

**Now:** KEEP the "Sepsis" tag and add a body note: "Sepsis: 台灣仿單 (帝斯坦/達比黴素) lists 細菌性敗血症; not an FDA/UK-labelled indication. UK SmPC approves only bacteraemia associated with a listed infection." Bacteremia stays (UK SmPC §4.1).

**Why:** Neither the FDA nor the UK SmPC lists sepsis. The UK SmPC approves only bacteraemia associated with a listed infection. The only official source is the Taiwan insert for the stocked product ('細菌性敗血症'), so the owner decides.

**Sources:** US FDA label §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.1 – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §2 適應症 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B12 · Page body (unsupported)

**Was:** Indications: "... sepsis, bacteremia, osteomyelitis, surgical prophylaxis"

**Now:** "... bacteremia associated with a listed infection (UK SmPC); neutropenic fever (UK SmPC). Taiwan insert only: bacterial septicaemia (細菌性敗血症), polymicrobial infections. Off-label (not in FDA/UK/TW labels): osteomyelitis, surgical prophylaxis."

**Why:** Osteomyelitis and surgical prophylaxis do not appear in any of the three labels, so they should be marked off-label rather than listed as indications.

**Sources:** US FDA label §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.1 – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B13 · Coverage (missing)

**Was:** (no anaerobe tags)

**Now:** Add tags: Bacteroides, Anaerobes

**Why:** The FDA label lists the B. fragilis group as clinically proven (§1.1 IAI, §12.4). The UK SmPC lists the Bacteroides fragilis group, Fusobacterium, Prevotella, Porphyromonas, Clostridium spp. and anaerobic gram-positive cocci as commonly susceptible. The body already describes anaerobic coverage, but the tags omit it.

**Sources:** US FDA label §1.1, §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §5.1 Commonly susceptible species – https://www.medicines.org.uk/emc/product/8757/smpc

### B14 · Coverage (minor)

**Was:** Enterococcus (tag)

**Now:** Replace "Enterococcus" with "E. faecalis"

**Why:** Only ampicillin- or penicillin-susceptible E. faecalis is covered (FDA §12.4 in-vitro list; UK SmPC 'commonly susceptible'). The UK SmPC lists E. faecium under 'acquired resistance may be a problem'. The genus-level tag overstates coverage. The narrower option already exists in the schema.

**Sources:** US FDA label §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §5.1 – https://www.medicines.org.uk/emc/product/8757/smpc

### B15 · Page body (minor)

**Was:** Coverage: Gram-negative list includes Enterobacter, Serratia, Citrobacter, Morganella, Acinetobacter (variable) without caveat; NO coverage list lacks Burkholderia cepacia and C. jeikeium

**Now:** Mark Enterobacter, Citrobacter freundii, Serratia, Morganella, Providencia, E. coli, K. pneumoniae, P. aeruginosa and A. baumannii as 'acquired resistance may be a problem' (UK SmPC §5.1). Add: 'IDSA AMR Guidance (2024, PMID 39108079; current 2026 update at idsociety.org, Q1.4 and Q2.5): pip-tazo is not suggested for ESBL-E infections outside the urinary tract, even if susceptible in vitro (MERINO: 30-day mortality 12.3% vs 3.7% with meropenem, PMID 30208454). It is not suggested for invasive infections by Enterobacterales at moderate risk of inducible AmpC (E. cloacae complex, K. aerogenes, C. freundii, H. alvei).' Add Burkholderia cepacia and Corynebacterium jeikeium to NO coverage (UK SmPC §5.1 inherently resistant).

**Why:** The body lists AmpC overproducers under NO coverage but Enterobacter, Citrobacter and Serratia under coverage, which is inconsistent. The UK SmPC and IDSA guidance supply the caveats. MERINO: 30-day mortality 12.3% with pip-tazo vs 3.7% with meropenem for ceftriaxone-non-susceptible E. coli/K. pneumoniae bloodstream infection.

**Sources:** UK SmPC §5.1 (susceptibility groupings; MERINO summary) – https://www.medicines.org.uk/emc/product/8757/smpc; IDSA 2024 AMR Guidance (Tamma PD, Clin Infect Dis 2024, PMID 39108079) Q1.4 and AmpC section – https://www.idsociety.org/practice-guideline/amr-guidance/; Harris PNA et al. MERINO, JAMA 2018;320:984-94, PMID 30208454 – https://pubmed.ncbi.nlm.nih.gov/30208454/

### B16 · Adult dose (minor)

**Was:** Mild-moderate: 3.375g IV q6h; Severe/IAI/SSTI: 4.5g IV q6-8h; Nosocomial pneumonia/Pseudomonas: 4.5g IV q6h (±aminoglycoside); Extended infusion: 3.375-4.5g over 4h q8h. Infuse 30 min (standard) or 4h (extended). Duration 7-14 days.

**Now:** Usual: 3.375 g IV q6h (FDA) or 4.5 g q6–8h (台灣仿單: 12 g/1.5 g–16 g/2 g/day; UK SmPC 4.5 g q8h for cUTI/cIAI/cSSTI); <br>Nosocomial pneumonia: 4.5 g IV q6h + aminoglycoside initially; continue AG if P. aeruginosa isolated (FDA §2.2/台灣仿單 3.1.2); UK: 4.5 g q6h also for neutropenic fever/particularly severe infections; <br>Infuse ≥30 min (label). Extended infusion (off-label): 3.375 g over 4 h q8h (Lodise 2007, PMID 17205441); 4.5 g over 4 h q8h – unsourced, verify (see consensus PMID 37615245); <br>Duration 7–10 days (nosocomial pneumonia 7–14 days); UK 5–14 days.

**Why:** Duration: FDA §2.1 and the Taiwan insert give 7–10 days for non-NP indications and 7–14 days for NP, so '7–14 days' applies only to NP. The FDA and Taiwan inserts call for an aminoglycoside initially in nosocomial pneumonia, not '±'. The 4.5 g q8h 4-h extended infusion has no label support (see B17).

**Sources:** US FDA label §2.1, §2.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §3.1.1–3.1.3 治療期間 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; Lodise TP et al. Clin Infect Dis 2007;44:357-63, PMID 17205441 – https://pubmed.ncbi.nlm.nih.gov/17205441/

### B17 · Page body (unsupported)

**Was:** Adult Dose table: "Extended infusion (critically ill) 3.375-4.5g IV over 4h q8h"; "Continuous infusion 13.5-18g/24h after 4.5g loading dose"; Notes: "Extended infusion improves outcomes for infections with MIC ≥8-16 mg/L"; Notes column "4h extended (critically ill/Pseudomonas/MIC≥16)"

**Now:** Keep the rows but add citations and narrow the claims. Extended: 3.375 g over 4 h q8h (Lodise 2007, PMID 17205441: lower 14-day mortality in P. aeruginosa infections with APACHE II ≥17). Prolonged/continuous infusion supported in critically ill sepsis (BLING III, PMID 38864155; meta-analysis RR 0.86 for 90-day mortality, PMID 38864162; international consensus PMID 37615245). Flag the 4.5 g q8h EI dose, the '13.5–18 g/24h CI' figures and the 'MIC ≥8–16' threshold as unsourced, pending a full-text guideline check.

**Why:** None of the three labels mentions extended or continuous infusion; all say infuse over 30 min. From abstracts I verified only 3.375 g q8h over 4 h (Lodise) and the mortality benefit of prolonged infusion in sepsis. The other numbers have no traceable source here.

**Sources:** Lodise TP et al. CID 2007, PMID 17205441 – https://pubmed.ncbi.nlm.nih.gov/17205441/; Dulhunty JM et al. BLING III, JAMA 2024;332:629-37, PMID 38864155 – https://pubmed.ncbi.nlm.nih.gov/38864155/; Abdul-Aziz MH et al. JAMA 2024;332:638-48, PMID 38864162 – https://pubmed.ncbi.nlm.nih.gov/38864162/; Hong LT et al. Pharmacotherapy 2023;43:740-77 (ACCP/BSAC/ESCMID/IDSA/SCCM consensus), PMID 37615245 – https://pubmed.ncbi.nlm.nih.gov/37615245/

### B18 · Renal dose, HD, CRRT (missing)

**Was:** CrCl >40: no adjustment; CrCl 20-40: 2.25g q6h (or 3.375g q6h for pneumonia); CrCl <20: 2.25g q8h (or 2.25g q6h for pneumonia); HD: 2.25g q12h + 0.75g after each HD; CAPD: 2.25g q12h; CRRT: 2.25-3.375g q6-8h (individualize)

**Now:** 台灣仿單/FDA (non-NP \| nosocomial pneumonia): <br>CrCl >40: 3.375 g q6h \| 4.5 g q6h (no adjustment); <br>CrCl 20–40: 2.25 g q6h \| 3.375 g q6h; <br>CrCl <20: 2.25 g q8h \| 2.25 g q6h; <br>HD: 2.25 g q12h \| 2.25 g q8h, + 0.75 g after each HD session (HD removes 30–40%); <br>CAPD: 2.25 g q12h \| 2.25 g q8h, no supplement; <br>UK SmPC alternative: CrCl 20–40 max 4.5 g q8h; <20 max 4.5 g q12h; + 2.25 g after each HD. <br>Peds renal impairment: not determined (FDA/仿單); UK: CrCl ≤50 → 70 mg/kg pip q8h, HD + 40 mg/kg pip after dialysis. <br>CRRT (no label data; Trotman 2005, Heintz 2009): 2.25–3.375 g q6–8h depending on modality/effluent rate – individualize, consider TDM.

**Why:** The column leaves out the NP values for HD (2.25 g q8h) and CAPD (2.25 g q8h), although the body table has them. The ground rules require the other label's values alongside: the UK SmPC regimen differs. Pediatric renal guidance is also missing. The Taiwan inserts for both stocked products match the FDA Table 1 exactly, so they remain the primary source.

**Sources:** Taiwan insert Pipe Tazo §3.1.3 表二 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; US FDA label §2.3 Table 1, §2.4, §12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 Patients with renal impairment (adult and paediatric) – https://www.medicines.org.uk/emc/product/8757/smpc

### B19 · Renal dose, HD, CRRT (unsupported)

**Was:** CRRT: 2.25-3.375g q6-8h (individualize); body table: CRRT/CVVH Nosocomial Pneumonia "4.5g q8h (extended infusion preferred)"

**Now:** CRRT (no label data; review-based): 2.25–3.375 g q6–8h, depending on effluent rate/modality; consider TDM (Heintz 2009 Pharmacotherapy, PMID 19397464; Trotman 2005 CID, PMID 16163635; update Hoff 2020, PMID 31342772). Flag the body's NP-CRRT '4.5 g q8h (extended infusion preferred)' as unsourced.

**Why:** No label covers CRRT. The column's range is plausible and matches CRRT dosing reviews, but I could verify only the abstracts (the full-text tables are paywalled), so the citation should be added and the owner should check the exact table values. I found no source for the NP CRRT 4.5 g q8h regimen.

**Sources:** Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464 – https://pubmed.ncbi.nlm.nih.gov/19397464/; Trotman RL et al. Clin Infect Dis 2005;41:1159-66, PMID 16163635 – https://pubmed.ncbi.nlm.nih.gov/16163635/; Hoff BM et al. Ann Pharmacother 2020;54:43-55, PMID 31342772 – https://pubmed.ncbi.nlm.nih.gov/31342772/

### B20 · Notes (missing)

**Was:** (no TDM statement anywhere on the page)

**Now:** TDM: routine β-lactam TDM recommended in critically ill patients (ESICM/ESCMID/IATDMCT/ISAC position paper, Abdul-Aziz 2020, PMID 32383061): Cmin sample just before the next dose, 24–48 h after starting; target 100% fT>MIC; continuous infusion: one Css sample at any time, Css > MIC. Exposure is most variable with augmented renal clearance and CRRT.

**Why:** Labels do not cover TDM. The joint ESICM/ESCMID/IATDMCT/ISAC position paper states: 'The Panel Members recommend routine TDM to be performed for aminoglycosides, beta-lactam antibiotics, linezolid, teicoplanin, vancomycin and voriconazole in critically ill patients.' This matters for the CRRT and continuous-infusion content already on the page.

**Sources:** Abdul-Aziz MH et al. Intensive Care Med 2020;46:1127-53, PMID 32383061, PMC7223855 – https://pubmed.ncbi.nlm.nih.gov/32383061/

### B21 · Monitor (missing)

**Was:** renal, LFT, CBC, PT/INR, electrolyte

**Now:** renal, LFT, CBC, PT/INR, electrolyte, CNS

**Why:** FDA §5.6: 'Closely monitor patients with renal impairment or seizure disorders for signs and symptoms of neuromuscular excitability or seizures.' The body Monitor table already includes this, but the tag is missing. CPK only when rhabdomyolysis symptoms appear (§5.4) is optional.

**Sources:** US FDA label §5.6, §5.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.4 – https://www.medicines.org.uk/emc/product/8757/smpc

### B22 · Pediatric dose (minor)

**Was:** 2-9 mo: 80 mg/kg (pip) IV q8h; ≥9 mo & ≤40 kg: 100 mg/kg (pip) IV q8h (IAI) or q6h (pneumonia); >40 kg: adult dosing; <2 mo: not established. Max: 4g pip/0.5g tazo per dose

**Now:** 2–9 mo: 80 mg/kg (pip) IV q8h (IAI) or q6h (nosocomial pneumonia); <br>>9 mo & ≤40 kg: 100 mg/kg (pip) IV q8h (IAI) or q6h (NP); <br>>40 kg: adult dosing; <2 mo: not established (FDA). <br>UK SmPC (2–12 y only): cIAI 100 mg/kg q8h; neutropenic fever 80 mg/kg q6h. Max 4 g pip/0.5 g tazo per dose. <br>Renal impairment: not determined (FDA). 台灣仿單 lists pediatric dosing for appendicitis/peritonitis only.

**Why:** The 2–9-month row gives no q6h for NP (FDA §2.4 Table 2). The FDA wording is 'older than 9 months'. The UK SmPC's pediatric FN regimen and age limit (2–12 y) are missing. The Taiwan inserts give IAI dosing only.

**Sources:** US FDA label §2.4 Table 2, §8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.2 Paediatric population – https://www.medicines.org.uk/emc/product/8757/smpc; Taiwan insert Pipe Tazo §3.1.4 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F

### B23 · Drug Interactions (minor)

**Was:** Vancomycin (↑AKI - monitor SCr), methotrexate (↓clearance → toxicity - monitor levels), probenecid (↑t½ - avoid), warfarin (↑INR - monitor), aminoglycosides (give separately; tobramycin NOT Y-site compatible), vecuronium/NMBAs (prolonged paralysis).

**Now:** Vancomycin (↑AKI - monitor SCr), methotrexate (↓clearance → toxicity - monitor levels), probenecid (↑t½ pip 21%/tazo 71% - avoid unless benefit > risk), heparin/oral anticoagulants (monitor coagulation tests more often), aminoglycosides (in-vitro inactivation → give separately; tobramycin NOT Y-site compatible; ↓tobramycin levels in ESRD/HD - monitor), vecuronium/NMBAs (prolonged paralysis).

**Why:** The labels (FDA §7.4, UK §4.5, TW §7.4) say to monitor coagulation with heparin or oral anticoagulants. They do not state that warfarin raises the INR. The in-vivo reduction of tobramycin levels in hemodialysis patients (FDA §7.1 highlight) is missing.

**Sources:** US FDA label §7.1–7.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.5 – https://www.medicines.org.uk/emc/product/8757/smpc

### B24 · Page body (minor)

**Was:** Drug Interactions › Aminoglycosides: "Administer separately; amikacin/gentamicin Y-site OK with EDTA formulation only"

**Now:** Append: "FJUH products (Pipe Tazo, Tapimycin) contain no excipients/EDTA (台灣仿單 1.2 賦形劑：無) → per their inserts, the amikacin/gentamicin Y-site compatibility data do not apply; give separately."

**Why:** Both Taiwan inserts say the Y-site compatibility table 'does not apply to formulations without EDTA' (以下的藥品相容性資訊不適用於未添加EDTA的配方). Both stocked products declare no excipients. The FDA (Fresenius) label permits Y-site use without mentioning EDTA, so the hospital's own product inserts should govern.

**Sources:** Taiwan insert Pipe Tazo §1.2 賦形劑, §3.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; Taiwan insert Tapimycin 1.2 賦形劑, 3.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC045704%E8%99%9F; US FDA label §2.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### B25 · Page body (unsupported)

**Was:** Drug Interactions: Vancomycin "↑AKI risk 1.5-3×" / "Monitor SCr q24-48h; consider alternatives in critically ill (cefepime, meropenem)"; MINOR: "Live typhoid vaccine ... avoid within 24h"; "Oral contraceptives: Possible ↓efficacy (theoretical) → use backup method"

**Now:** Flag as unsourced. Label wording for vancomycin: 'increased incidence of AKI vs vancomycin alone; monitor kidney function; no PK interaction' (FDA §7.3); UK adds 'may be vancomycin dose-dependent'. Typhoid vaccine and OC lines: no label source; keep only with a citation.

**Why:** None of the three labels contains the 1.5–3× magnitude, the SCr frequency, the named alternatives, or the typhoid-vaccine and oral-contraceptive interactions.

**Sources:** US FDA label §7.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §4.5 Vancomycin – https://www.medicines.org.uk/emc/product/8757/smpc

### B26 · Breastfeeding (minor)

**Was:** Compatible (LactMed); low milk levels (RID \<1%); poor oral bioavailability; monitor infant for diarrhea/thrush

**Now:** LactMed: limited data – piperacillin milk levels low (0.49–1.9 mg/L after 4 g IV q8h), not expected to cause adverse effects in breastfed infants; tazobactam not studied; monitor infant for diarrhea/thrush (penicillin class, GI flora disruption). FDA/仿單: weigh benefits of breastfeeding vs maternal need.

**Why:** LactMed gives no RID and does not mention oral bioavailability. Both statements are plausible but unsourced. In the body, 'LactMed: Acceptable' is not LactMed terminology and should read 'LactMed: not expected to cause adverse effects'.

**Sources:** LactMed NBK501068 Summary and Drug Levels (rev 2024-07-15) – https://www.ncbi.nlm.nih.gov/books/NBK501068/; US FDA label §8.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### B27 · Mechanism (minor)

**Was:** Piperacillin: binds PBPs → inhibits cell wall synthesis → bactericidal. Tazobactam: inhibits class A β-lactamases → protects piperacillin. Time-dependent killing (fT\>MIC).

**Now:** Piperacillin: binds PBPs → inhibits septum and cell-wall synthesis → bactericidal. Tazobactam: inhibits many class A β-lactamases (Bush 2b/2b'); does NOT inhibit AmpC (class C) or metallo-β-lactamases, and does not reliably protect against ESBLs (class A/D). Time-dependent killing (fT\>MIC).

**Why:** The UK SmPC §5.1 states that tazobactam 'does not inhibit AmpC enzymes or metallo beta-lactamases' and 'does not provide protection against ESBLs in the Molecular class A and D enzyme groups'. The bare 'class A' wording overstates its activity.

**Sources:** UK SmPC §5.1 Mechanism of action / resistance – https://www.medicines.org.uk/emc/product/8757/smpc; US FDA label §12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### B28 · Notes (minor)

**Was:** High Na⁺: 54 mg/g pip - caution CHF/fluid restriction.

**Now:** High Na⁺: 54 mg (2.35 mEq)/g pip (FDA; TW inserts also state 64–65 mg/g in §5.1.6/§6.5) – caution CHF/fluid restriction.

**Why:** The inserts for the hospital's products contradict themselves: Pipe Tazo gives 65 mg (2.84 mEq) in §5.1.6, 64 mg (2.79 mEq) in §6.5 and 54 mg (2.35 mEq) in §10. The body's '54–64 mg' range is closer, but the column should show the label spread.

**Sources:** Taiwan insert Pipe Tazo §5.1.6, §6.5, §10 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; US FDA label §5.8, §11 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46

### B29 · Page body (minor)

**Was:** Notes › PK: "Vd: 0.24 L/kg"; "Metabolism: Minimal (<5%)"; "~20% biliary"; Clinical pearl "Neutropenia risk increases with therapy >14-21 days"; Monitor table "SCr baseline then q2-3 days", "CBC weekly"

**Now:** Vd: ~15 L in adults (FDA Table 8); 0.243 L/kg is the pediatric population estimate. Metabolism: piperacillin → minor active desethyl metabolite; tazobactam → single inactive metabolite (FDA §12.3). Excretion: 68% pip / 80% tazo unchanged in urine; also secreted in bile (no % in labels). Neutropenia: mostly with prolonged therapy, ≥21 days (FDA §5.5). Flag the monitoring frequencies as unsourced.

**Why:** The label puts the neutropenia threshold at ≥21 days, not 14–21. No label gives the <5% metabolism or ~20% biliary figures. 0.24 L/kg comes from the pediatric pop-PK model.

**Sources:** US FDA label §5.5, §12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a798faf5-cd97-4e35-a700-94c372978c46; UK SmPC §5.2 – https://www.medicines.org.uk/emc/product/8757/smpc

### B30 · Page body (minor)

**Was:** Formulations: "Vials: 2.25g, 3.375g, 4.5g; Premixed: 2.25g, 3.375g, 4.5g in various volumes"

**Now:** Add: "FJUH stocks 2.25 g/vial only: Pipe Tazo 帝斯坦 (衛署藥製字第056759號) and Tapimycin 達比黴素 (衛署藥製字第045704號); both TW licences cover 2.25 g and 4.5 g vials (no 3.375 g vial for either product; a 3.375 g dose = 1.5 × 2.25 g vials)." Add the official 仿單 links. Add a Contraindications line (see B2).

**Why:** The formulation list describes US products. The page should name the stocked products and give their insert links, which also fills the empty 仿單 references.

**Sources:** Taiwan insert Pipe Tazo header (包裝 2.25公克、4.5公克) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC056759%E8%99%9F; Taiwan insert Tapimycin header (2.25公克、4.5公克小瓶) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC045704%E8%99%9F

## Verified correct as written

- Category 'β-lactam/β-lactamase inhibitor': matches US §1, SmPC §5.1 and the Taiwan insert.
- Mechanism property and body: PBP binding and bactericidal action; tazobactam inhibits class A β-lactamases (Bush 2b/2b'); time above MIC is the key PD driver (US §12.2, §12.4).
- Renal CrCl rows in the property and the body (>40 no adjustment; 20–40: 2.25 g q6h, NP 3.375 g q6h; <20: 2.25 g q8h, NP 2.25 g q6h; HD 2.25 g q12h, NP q8h, + 0.75 g after each HD; CAPD 2.25 g q12h, NP q8h) match the Taiwan inserts' Table 2 and US §2.3 Table 1.
- 'HD removes 30-40%' matches US §2.3, §12.3 and the Taiwan insert.
- Hepatic: no adjustment; piperacillin half-life +25% and tazobactam +18% in cirrhosis (US §8.7, §12.3; SmPC §4.2/5.2; Taiwan insert §6.6).
- Pediatric: 80 mg/kg q8h (2–9 months, IAI); 100 mg/kg q8h for IAI and q6h for NP (older than 9 months, ≤40 kg); >40 kg adult dose; <2 months not established (US §2.4, §8.4; Taiwan insert §3.1.4). Max 4 g/0.5 g per dose (SmPC §4.2).
- Adult nosocomial pneumonia dose of 4.5 g q6h plus an aminoglycoside (US §2.2; Taiwan insert §3.1.2). 4.5 g q6–8h is supported by the Taiwan insert (12–16 g/day) and the SmPC (q8h or q6h). 3.375 g q6h matches US §2.1. Standard infusion over 30 minutes.
- Drug interactions with vancomycin (more AKI; monitor), methotrexate (reduced clearance; monitor levels), probenecid (piperacillin half-life +21%, tazobactam +71%; avoid unless benefit outweighs risk), vecuronium and other non-depolarizing NMBAs (prolonged blockade), and aminoglycosides (separate administration; tobramycin not Y-site compatible) all match US §7 and the Taiwan insert §7.
- Lab interferences (Platelia Aspergillus galactomannan, copper-reduction urine glucose, positive direct Coombs) match US §7.7 and SmPC §4.5.
- Body coverage lists (MSSA; S. pneumoniae/pyogenes/agalactiae; E. faecalis, not VRE; E. coli, Klebsiella, Proteus, P. aeruginosa, H. influenzae, Enterobacter, Serratia, Citrobacter, Morganella, Acinetobacter (variable), Moraxella; B. fragilis group, Clostridium, Fusobacterium, Peptostreptococcus, Prevotella; no MRSA, Stenotrophomonas, Legionella, Mycoplasma or Chlamydia; ESBL unreliable) match US §12.4 and SmPC §5.1. Coverage tags MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Pseudomonas, Haemophilus and Acinetobacter are supported.
- Side-effect tags GI, LFT↑, thrombocytopenia, neutropenia, leukopenia, anemia, hypokalemia and AKI are supported (US §5.5, §5.7, §5.8, §6.1; SmPC §4.8). Body: diarrhea 11%, HLH, DRESS, SJS/TEN/AGEP, hemolytic anemia, seizures, interstitial nephritis, CDAD and bleeding are supported.
- Monitor tags renal, LFT, CBC, PT/INR and electrolyte are supported (US §5.5, §5.7, §5.8, §7.3, §7.4).
- Notes: sodium 54 mg (2.35 mEq) per g piperacillin and caution with sodium restriction (US §5.8, §8.5); half-life 0.7–1.2 h; ~30% protein binding; more fever and rash in cystic fibrosis (US §8.8); aminoglycoside added for serious Pseudomonas (US §1.2, §2.2).
- Breastfeeding milk levels of 0.49–1.5 mg/L after 4 g IV q8h (first dose) and the advice to watch for infant diarrhea or thrush (LactMed).
- Pregnancy body animal data (no structural abnormalities at 1–3× human dose; fetotoxicity only with maternal toxicity) and 'crosses the placenta' (US §8.1).
- Body formulations: 2.25, 3.375 and 4.5 g vials, 8:1 ratio (US §3). The hospital stocks 2.25 g; the Taiwan inserts list 2.25 g and 4.5 g.
- Notion contains no storage or stability details, which is consistent with the owner's rule.
- Category 'β-lactam/β-lactamase inhibitor' – FDA §1 (penicillin-class + BLI); UK SmPC §5.1 ATC J01CR05.
- Renal column values for CrCl >40 / 20–40 / <20 (non-NP and NP), HD 2.25 g q12h + 0.75 g post-HD, CAPD 2.25 g q12h – identical in FDA §2.3 Table 1 and both Taiwan inserts (表二). HD removes 30–40% (FDA §2.3/§12.3; UK says 30–50%). CAPD needs no supplement.
- Body renal table (non-NP and NP columns incl. HD 2.25 q8h and CAPD 2.25 q8h for NP) matches FDA/TW tables, except the CRRT row (B19).
- Hepatic: no adjustment (FDA §8.7, UK §4.2, TW §6.6). t½ +25% pip / +18% tazo in cirrhosis (FDA §12.3, UK §5.2).
- Pediatric: 80 mg/kg pip for 2–9 mo; 100 mg/kg for >9 mo q8h (IAI) / q6h (NP); >40 kg adult dose; <2 mo not established (FDA §2.4, §8.4). Max 4 g/0.5 g per dose (UK §4.2 footnote).
- Adult: 3.375 g q6h usual (FDA §2.1); 4.5 g q6h for nosocomial pneumonia (FDA §2.2, UK §4.2, TW 3.1.2); 4.5 g q6–8h range (TW 3.1.1, UK §4.2).
- Mechanism: PBP binding / cell-wall inhibition, bactericidal; tazobactam inhibits class A Bush 2b/2b' β-lactamases (FDA §12.4); T>MIC is the PD driver (FDA §12.2, UK §5.1).
- Coverage tags MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Pseudomonas, Haemophilus, Acinetobacter – supported by FDA §1/§12.4 and UK §5.1 (with acquired-resistance caveats for E. coli, Klebsiella, Pseudomonas, Acinetobacter).
- Body NO-coverage items MRSA, Stenotrophomonas, Legionella, Mycoplasma, Chlamydia – UK §5.1 inherently resistant / methicillin-susceptible only. ESBL unreliable – UK §4.1 note and MERINO in §5.1.
- Indication tags Pneumonia, CAP (FDA §1.5), HAP/VAP (FDA §1.2, UK §4.1), IAI (FDA §1.1, UK), SSTI (FDA §1.3, UK), FN (UK §4.1), Bacteremia (UK §4.1); UTI is covered by the Taiwan insert and the UK cUTI indication.
- Side-effect tags GI (diarrhea 11.3%, constipation 7.7%, nausea 6.9%), thrombocytopenia, anemia, leukopenia, neutropenia, hypokalemia, LFT↑ and AKI (renal failure, interstitial nephritis, nephrotoxicity §5.7) – FDA §5–6, UK §4.8.
- Body serious ADRs: anaphylaxis, DRESS, SJS/TEN, AGEP, HLH (FDA §5.3; Tapimycin insert), hemolytic anemia, seizures, interstitial nephritis, CDAD, bleeding – FDA §5–6.
- Monitor tags renal (§5.7, §7.3), CBC (§5.5, ≥21 days), PT/INR (§5.5, §7.4), electrolyte (§5.8) – FDA. LFT is plausible.
- Drug interactions: vancomycin AKI (FDA §7.3, UK §4.5, TW §7.3), methotrexate (§7.6), probenecid t½ +21%/+71% (§7.2), aminoglycoside inactivation and tobramycin not Y-site compatible (§2.6/§7.1), vecuronium/NMBAs (§7.5), heparin/anticoagulants (§7.4).
- Lab interference: Platelia Aspergillus EIA false-positive, Clinitest false-positive urine glucose (FDA §7.7); direct Coombs positive (UK §4.5).
- Notes: t½ 0.7–1.2 h, protein binding ~30%, 68% pip / 80% tazo urinary excretion, HD removes 30–40%, ↑fever/rash in CF (FDA §8.8, §12.3), sodium 54 mg (2.35 mEq)/g pip (FDA §5.8).
- Breastfeeding: piperacillin milk levels 0.49–1.5 mg/L after 4 g IV q8h (first dose), tazobactam not studied, possible infant diarrhea/thrush – LactMed NBK501068.
- Pregnancy facts (apart from the category letter): crosses placenta; no teratogenicity in mice/rats at 1–2× / 2–3× human dose; fetotoxicity only at maternally toxic doses – FDA §8.1, TW §6.1.
- Body nephrotoxicity statement 'independent risk factor ... delayed renal recovery' – FDA §5.7 (the trial attribution is wrong, B1).

## Apply log

- Coverage: removed Corynebacterium, replaced Enterococcus with E. faecalis, added Serratia, Bacteroides, Anaerobes (all existing options)
- Indications: added cUTI, cIAI, cSSTI, Pelvic, Peritonitis; kept Sepsis and Bacteremia
- Side Effects: added CNS, coagulopathy, thrombophlebitis, DRESS, SJS/TEN, rhabdomyolysis
- Monitor: added CNS
- Pregnancy column: FDA letter category removed; risk summary, animal data, UK SmPC 4.6 and 仿單 6.1 added
- Breastfeeding column: LactMed wording (0.49-1.9 mg/L, tazobactam not studied, diarrhea/thrush monitoring), FDA/仿單 benefit-vs-need wording
- Mechanism column: tazobactam does not inhibit AmpC/MBL, ESBL caveat, septum/cell-wall wording
- Drug Interactions column: probenecid figures, heparin/oral anticoagulants (replaces warfarin), aminoglycoside in-vitro inactivation and tobramycin levels in ESRD/HD
- Adult dose column: merged FDA, 仿單 and UK dosing; NP + aminoglycoside; extended infusion off-label (Lodise 2007), 4.5 g EI flagged unsourced; durations per label
- Renal dose column: 仿單/FDA non-NP and NP values, HD/CAPD, UK SmPC alternative, pediatric renal, CRRT off-label with Trotman/Heintz/Hoff citations
- Pediatric dose column: NP/IAI split, >9 mo, UK 2-12 y regimens, max dose, renal note, 仿單 IAI-only note
- Notes column: infusion >=30 min (label) and EI off-label, Na 54 mg/g (TW 64-65 mg/g), renal excretion 68%/80%, nephrotoxicity in critically ill (Jensen 2012, FDA 5.7), vancomycin AKI, ACORN note, TDM (Abdul-Aziz 2020), contraindication and warnings (SCAR, HLH, rhabdomyolysis, seizures)
- Renewed date set to 2026-10-05 (date only)
- Body Indications: osteomyelitis and surgical prophylaxis marked off-label; ESBL bacteraemia not recommended; label-approved US/UK/TW list; Sepsis TW-only note
- Body Coverage: 'acquired resistance may be a problem' list added; B. cepacia and C. jeikeium added to NO coverage; AmpC/MBL wording; IDSA AMR guidance and MERINO paragraph
- Body Adult Dose table: extended and continuous infusion rows marked off-label with citations (Lodise, Hong 2023/2026, BLING III, Abdul-Aziz 2024 meta-analysis); 4.5 g EI and 13.5-18 g/24 h CI flagged unsourced
- Body Renal table: CRRT row labelled off-label with Trotman/Heintz and TDM; NP CRRT 4.5 g q8h flagged unsourced; UK SmPC line and 院內品項依仿單表二 added under table
- Body Pediatric: neonatal section replaced with Cohen-Wolkowiez 2014 PMA-based regimen and label notes (FDA <2 mo, UK <2 y)
- Body Side Effects: hepatic line corrected (UK SmPC frequencies, FDA Table 7, post-marketing hepatitis/jaundice); HLH annotated (>10 days, stop immediately); rhabdomyolysis and eosinophilic pneumonia/delirium/LABD/exfoliative dermatitis added; neutropenia wording per FDA 5.5
- Body Monitor: monitoring frequencies flagged as unsourced
- Body Drug Interactions: vancomycin row reworded (FDA 7.3/UK dose-dependent, monitor renal function, 1.5-3x and named alternatives removed); warfarin row replaced by heparin/oral anticoagulants (more frequent coagulation monitoring) and duplicate heparin row removed; FJUH no-EDTA Y-site note added (Chinese + English); typhoid line replaced with Ty21a/Vivotif wording; oral contraceptives flagged unsourced; urine protein false-positive added
- Body Pregnancy: Category B replaced with risk summary; human data wording per US 8.1/仿單 6.1 and UK 4.6; animal sentences kept; chorioamnionitis use flagged unsourced, postpartum endometritis labelled (US 1.4)
- Body Breastfeeding: LactMed heading, 1st/2nd dose milk levels with peak 2-3 h; poor oral bioavailability and RID <1% removed; diarrhea/thrush monitoring kept
- Body Notes: infusion >=30 min (label), EI off-label with consensus citation and MIC threshold flagged; Vd 15 L adults (0.243 L/kg pediatric); metabolism per FDA 12.3 with <5% flagged; excretion 68%/80%, biliary % flagged; Na 54 mg/g with TW 64-65 mg/g; nephrotoxicity pearl corrected (Jensen 2012, FDA 5.7, vancomycin, ACORN); MIC >=8-16 pearl flagged; neutropenia pearl per FDA 5.5; beta-lactam allergy pearl replaced with contraindication (FDA 4, 台灣仿單 4, UK 4.3)
- Body Formulations: FJUH stocked products (帝斯坦 056759, 達比黴素 045704, 2.25 g vials; licences cover 2.25/4.5 g; 3.375 g = 1.5 vials) with official 仿單 links
- References section appended at end of page listing US FDA label, UK SmPC, both TW inserts, LactMed, Vivotif label, IDSA AMR guidance and all cited PubMed studies with URLs

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
