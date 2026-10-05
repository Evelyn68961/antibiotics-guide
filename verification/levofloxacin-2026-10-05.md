# Verification: Cravit (levofloxacin)

- **Notion entry:** [Cravit (levofloxacin)](https://app.notion.com/216c496dfff1802ca582c1b7ef9e9c37)
- **Hospital codes:** CRA03 (Cravit tab 500 mg), LEV08 (Levofloxacin tab 750 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/levofloxacin.json` (plus any `sources/levofloxacin-taiwan-insert-*.txt`)

## Product and sources

Levofloxacin oral film-coated tablets. The hospital stocks two products: CRA03 Cravit F.C. Tab 500 mg (可樂必妥膜衣錠, 衛署藥製字第047516號, NHI AB47516100, ATC J01MA12), and LEV08 Levofloxacin F.C. Tablet 750 mg "P.L." (平福樂欣, 衛署藥製字第057839號, NHI AB57839100). The Notion entry is titled "Cravit (levofloxacin)", so the Cravit Taiwan insert (中文PI 第7版 20210316, with the 衛授食字第1141411455號 addition) is the preferred source for renal dosing. The US reference is DailyMed setid 5a65b2bc-9edc-f193-e063-6394a90a0104 (generic levofloxacin tablets, v1, Sep 2026). Also used: UK SmPC eMC 12130 (Jul 2025) and LactMed NBK501002 (rev. 2025-12-15). Both stocked products are tablets; no IV product was identified.

## Agreed fixes applied in Notion (52)

### A1 · Pregnancy (error)

**Was:** Category C; avoid if alternatives exist; use only if benefit outweighs risk

**Now:** US label 8.1 (PLLR): published human data (case reports, case-control, observational) have not identified a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; not teratogenic in rats/rabbits.<br>UK SmPC 4.3/4.6 & Taiwan 仿單 (Cravit, P.L.): 懷孕禁用 (contraindicated; FQ cartilage toxicity in juvenile animals).<br>Use only if no suitable alternative.

**Why:** The FDA has retired the letter categories, so 'Category C' cannot be stated as current. The current US label 8.1 is a PLLR narrative. The UK SmPC and both stocked-product Taiwan inserts list pregnancy as a contraindication, and the column does not mention this at all.

**Sources:** US FDA label (DailyMed) sec 8.1 Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.3 and 4.6: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit 500 mg 衛署藥製字第047516號 sec 4 禁忌 and 6.1 懷孕: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; Taiwan 仿單 P.L. 750 mg 衛署藥製字第057839號 sec 4 and 6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F

### A2 · Renal dose, HD, CRRT (error)

**Was:** CrCl 20-50: 500-750mg IVD q48h<br>CrCl 10-19: 250-500mg q48h<br><br>[COPD]<br>CrCl 20-50: 500 mg IV/PO initial, then 250 mg IV/PO QD<br>CrCl <20: 500 mg IV/PO initial, then 250 mg IV/PO QOD

**Now:** Cravit 仿單 (stocked, EU-style; CrCl mL/min; 首劑 full dose):<br>500 mg q24h → 20–50: 500 mg ×1, then 250 mg q24h; 10–19: 500 mg ×1, then 125 mg q24h; <10/HD/CAPD: 500 mg ×1, then 125 mg q24h<br>500 mg q12h → 20–50: 500 mg ×1, then 250 mg q12h; 10–19: 500 mg ×1, then 125 mg q12h; <10/HD/CAPD: 500 mg ×1, then 125 mg q24h<br>250 mg q24h → 20–50: 250 mg ×1, then 125 mg q24h; ≤19/HD/CAPD: 250 mg ×1, then 125 mg q48h<br>US FDA / 平福樂欣750 (LEV08) 仿單: 750 mg q24h → 20–49: 750 mg q48h; 10–19 & HD/CAPD: 750 mg ×1, then 500 mg q48h. 500 mg q24h → 20–49: 500 mg ×1, then 250 mg q24h; 10–19 & HD/CAPD: 500 mg ×1, then 250 mg q48h. 250 mg q24h → 20–49: no adjustment; 10–19: 250 mg q48h (uncomplicated UTI: no adjustment); HD/CAPD: no data<br>HD/CAPD: no supplemental dose after dialysis (FDA 8.6; 仿單)<br>CRRT (CVVH/CVVHDF; no label data): 250 mg q24h (Malone 2001 AAC, PMID 11557500)

**Why:** The current text says 500 mg q48h at CrCl 20–50 for the 500 mg regimen. The US label Table 3 gives 500 mg once, then 250 mg q24h; only the 750 mg regimen becomes q48h. The CrCl 10–19 line has no loading doses. HD/CAPD and the no-supplemental-dose rule are missing, as is the 250 mg regimen. The CRRT part of the column title is empty. Under the ground rules, the stocked Cravit product's Taiwan insert (EU-style 125 mg steps, the same as the UK SmPC 4.2) should come first, with the US values alongside. LEV08's insert matches the US table, apart from a typo '10至49' that should read 10–19. Practical point: 125 mg cannot be made from the scored 500 mg Cravit tablet, which halves only to 250 mg; the pharmacist may want to note this. The CRRT value is from Trotman 2005, a review (PMID 16163635, verified by esummary). The specific levofloxacin row in its table should be confirmed against the full text before publishing.

**Sources:** Taiwan 仿單 Cravit 500 mg sec 3.3 特殊族群用法用量: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; US FDA label sec 2.3 Table 3 and 8.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Taiwan 仿單 P.L. 750 mg sec 3.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F; UK SmPC sec 4.2: https://www.medicines.org.uk/emc/product/12130/smpc; Trotman RL et al. Clin Infect Dis 2005;41:1159-66, PMID 16163635: https://pubmed.ncbi.nlm.nih.gov/16163635/

### A3 · Indications (error)

**Was:** CAP, HAP, UTI, cUTI, cSSTI, IAI

**Now:** CAP, HAP, UTI, cUTI, cSSTI, SSTI (REMOVE IAI)

**Why:** Intra-abdominal infection is not an approved indication in the US label (sec 1), the UK SmPC (4.1) or either Taiwan insert (sec 2). Its use with metronidazole for mild-moderate community-acquired cIAI comes only from the SIS/IDSA 2010 guideline. If the owner wants to keep it, it should go in Notes as off-label (guideline, + metronidazole), not as an approved tag. Uncomplicated SSSI is FDA-approved (1.5), and the 'SSTI' option exists. Prostatitis, sinusitis, AECB, anthrax and plague have no schema option; keep them in the text fields.

**Sources:** US FDA label sec 1 Indications and Usage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.1: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit sec 2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; Solomkin JS et al. SIS/IDSA cIAI guideline, Clin Infect Dis 2010;50:133-64, PMID 20034345: https://pubmed.ncbi.nlm.nih.gov/20034345/

### A4 · Adult dose (error)

**Was:** Pneumonia, IAI, UTI: 750mg IV QD<br>COPD: 500mg QD for 5-7d<br><br>Complicated UTI/Pyelonephritis: 500 mg QD for 7-14d<br>Severe/Resistant Infections: 500–750 mg QD for 5-14d<br>

**Now:** CAP: 750 mg QD ×5d or 500 mg QD ×7–14d (US)；Cravit 仿單 500 mg BID ×7–14d<br>HAP: 750 mg QD ×7–14d (US; + anti-pseudomonal β-lactam if P. aeruginosa)<br>AECB (COPD)*: 500 mg QD ×7d (US)；Cravit 250–500 mg QD ×7–10d (UK 500 mg ×7–10d)<br>Acute sinusitis*: 750 mg QD ×5d or 500 mg QD ×10–14d<br>cUTI/AP: 750 mg QD ×5d or 250 mg QD ×10d (US)；Cravit 250 mg QD ×7–10d；UK SmPC cUTI 500 mg QD ×7–14d, pyelonephritis 500 mg QD ×7–10d<br>Uncomplicated UTI/cystitis*: 250 mg QD ×3d<br>Chronic bacterial prostatitis: 500 mg QD ×28d<br>cSSSI: 750 mg QD ×7–14d (US)；Cravit 250 mg QD or 500 mg BID ×7–14d；uSSSI 500 mg QD ×7–10d<br>Anthrax PEP: 500 mg QD ×60d；Plague: 500 mg QD ×10–14d<br>*reserve for no alternative (boxed warning；UK SmPC 4.1: all indications)<br>PO = IV (F ≈99%, FDA 12.3)；stocked: Cravit 500 mg tab, 平福樂欣 750 mg tab, Cravit IV 250 mg/50 mL

**Why:** Problems in the current text: (1) IAI is not a labelled indication. (2) 'UTI 750 mg' groups uncomplicated UTI (250 mg ×3d) with cUTI (750 mg ×5d, or 250 mg ×10d). (3) AECB is 7d in the US label and 7–10d in the SmPC/Cravit insert, never 5d. (4) 'Severe/Resistant Infections 500–750 mg 5–14d' has no source. (5) The text says 'IV', but both stocked products are tablets (PO = IV, FDA 12.3). (6) It leaves out the stocked Cravit insert's EU regimens (CAP 500 mg BID; cUTI 250 mg QD; SSTI 250 mg QD or 500 mg BID), HAP, prostatitis, sinusitis, uncomplicated UTI, SSSI, anthrax and plague. The current cUTI 500 mg ×7–14d matches the UK SmPC and is kept as such.

**Sources:** US FDA label sec 2.1 Table 1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Taiwan 仿單 Cravit sec 3.1 劑量表: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; Taiwan 仿單 P.L. 750 mg sec 3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F; UK SmPC sec 4.2: https://www.medicines.org.uk/emc/product/12130/smpc

### A5 · Drug Interactions (error)

**Was:** Avoid: QT-prolonging drugs, live vaccines; <br>Space 2h: Antacids, Fe, Ca, Zn, sucralfate; <br>Monitor: Warfarin (↑INR), corticosteroids (↑tendon risk), NSAIDs (↑seizure risk), hypoglycemics

**Now:** Avoid/caution: QT-prolonging drugs (class IA/III antiarrhythmics；SmPC/仿單 also TCAs, macrolides, antipsychotics)；live oral bacterial vaccines (e.g., oral typhoid Ty21a, oral cholera — per vaccine labels; not in levofloxacin labels, needs source); <br>Space ≥2h: Mg/Al antacids, sucralfate, Fe, Zn/multivitamins, buffered didanosine (calcium salts: minimal effect per SmPC/仿單); <br>Monitor: Warfarin (↑INR), antidiabetics (dysglycemia), corticosteroids (↑tendon rupture；仿單: 避免併用), NSAIDs & theophylline (↓seizure threshold；monitor theophylline levels), cyclosporine (t½ ↑33%), probenecid/cimetidine (↓renal CL；caution in renal impairment); <br>Lab: false-positive urine opiate immunoassay

**Why:** Calcium is contradicted by the sources: the UK SmPC 4.5, the Cravit insert sec 7 (鈣鹽影響極小) and the P.L. insert (不受碳酸鈣影響) all say calcium has minimal effect, and the US label 2.4/7.1 does not list it. 'Live vaccines' is not in the levofloxacin US, UK or Taiwan labels; remove it unless the owner sources it from the oral typhoid (Ty21a) or cholera vaccine labels. Missing items with label support: didanosine and zinc multivitamins (FDA 2.4/7.1), theophylline (FDA 7.5), cyclosporine (SmPC 4.5, Cravit sec 7), probenecid/cimetidine (SmPC 4.5), and the false-positive opiate screen (FDA 7.9).

**Sources:** US FDA label sec 2.4, 7.1–7.9, 5.11: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.5: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit sec 7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A6 · Notes (error)

**Was:** better pneumococcal coverage vs cipro; less Pseudomonas activity vs cipro; <br>contraindicated in myasthenia gravis

**Now:** better pneumococcal coverage vs cipro; less Pseudomonas activity vs cipro (unsourced); <br>avoid in myasthenia gravis (FDA 5.5; 仿單: 不建議使用); <br>Contraindicated (UK SmPC / Taiwan 仿單): epilepsy 癲癇, prior FQ-related tendinopathy, pregnancy, breastfeeding (SmPC also <18 y); <br>Boxed warning: tendinitis/rupture, peripheral neuropathy, CNS effects, MG exacerbation; reserve for AECB, sinusitis, uncomplicated UTI/cystitis when no alternative; <br>Known aortic aneurysm: use only if no alternative (FDA 5.9)

**Why:** Myasthenia gravis is not a labelled contraindication. FDA 5.5 says 'Avoid', and the Taiwan inserts say 不建議使用/應避免. The actual contraindications in the SmPC 4.3 and both Taiwan inserts (epilepsy, FQ tendinopathy history, pregnancy, breastfeeding) are missing from all property fields, as is the boxed-warning restriction on indications. The two comparisons with ciprofloxacin are plausible but appear in none of the labels; they are flagged, not removed.

**Sources:** US FDA label sec 1.12–1.14, 5.1–5.5, 5.9: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.1, 4.3: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit 特殊警語, sec 4 禁忌, 5.1 重症肌無力的惡化: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A7 · Breastfeeding (missing)

**Was:** Acceptable with monitoring; avoid BF 4–6h after oral dose; watch infant for diarrhea/candidiasis

**Now:** LactMed: acceptable with monitoring; avoid BF ≥1h after IV / 4–6h after oral dose; watch infant for diarrhea/candidiasis.<br>US label 8.2: BF not recommended during treatment + 2 days after last dose (may pump & discard); anthrax PEP: risk-benefit may favour continuing.<br>UK SmPC & Taiwan 仿單 (Cravit, P.L.): 哺乳禁用 (contraindicated).

**Why:** The current text matches the LactMed summary. It leaves out that the US label 8.2 advises against breastfeeding (pump and discard for 2 days, about five half-lives), and that the UK SmPC and both stocked-product Taiwan inserts contraindicate breastfeeding. This is a real label conflict and should be shown.

**Sources:** LactMed Levofloxacin NBK501002 'Summary of Use during Lactation' (rev 2025-12-15): https://www.ncbi.nlm.nih.gov/books/NBK501002/; US FDA label sec 8.2 Lactation: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.6: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit sec 6.2 哺乳: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A8 · Side Effects (missing)

**Was:** LFT↑, QTc prolong, GI, CNS

**Now:** LFT↑, QTc prolong, GI, CNS, neuropathy, dysglycemia, photosensitivity, SJS/TEN, hematologic, AKI

**Why:** These are boxed-warning and W&P risks in the US label, and each has a schema option: peripheral neuropathy (5.3), blood glucose disturbances (5.13), photosensitivity (5.14), TEN/SJS (5.6), anemia/thrombocytopenia/agranulocytosis (5.6), and interstitial nephritis/acute renal failure (5.6). The Cravit insert sec 8 also lists them. Tendinitis/rupture, MG exacerbation and aortic aneurysm have no schema option, so they belong in Notes (see A6).

**Sources:** US FDA label sec 5.3, 5.6, 5.13, 5.14, 6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Taiwan 仿單 Cravit sec 8 副作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A9 · Coverage (missing)

**Was:** E.coli, Pseudomonas, Haemophilus, MSSA, Streptococcus, Stenotrophomonas, Mycoplasma, Chlamydia

**Now:** Tags: E.coli, Klebsiella, Proteus, Enterobacter, Serratia, Pseudomonas, Haemophilus, MSSA, Streptococcus, E. faecalis, Legionella, Mycoplasma, Chlamydia, Stenotrophomonas. Add note: 'S. maltophilia — not in label spectrum (FDA 12.4/SmPC 5.1)；IDSA AMR Guidance (current 2026 update; 2024 version PMID 39108079) Q6.3: levofloxacin only as a component of combination therapy (alternative) for invasive infection；resistance emerges on therapy in ~20%'

**Why:** The US label 12.4 lists these as active both in vitro and in clinical infections: K. pneumoniae, P. mirabilis, E. cloacae, S. marcescens, L. pneumophila and E. faecalis. They have schema options but are not tagged. Stenotrophomonas appears in none of the labels (FDA 12.4, SmPC 5.1, Taiwan inserts). It is kept because IDSA 2024 AMR guidance Q6.3 names levofloxacin, as part of combination therapy, as an alternative for invasive S. maltophilia. A note citing that guidance should be added.

**Sources:** US FDA label sec 12.4 Microbiology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 5.1: https://www.medicines.org.uk/emc/product/12130/smpc; IDSA 2024 AMR Guidance Q6.3 (Tamma PD et al., Clin Infect Dis 2024, PMID 39108079): https://www.idsociety.org/practice-guideline/amr-guidance/

### A10 · Monitor (minor)

**Was:** renal, LFT, neuro, CNS, ECG, PT/INR

**Now:** renal, LFT, neuro, CNS, ECG, PT/INR, electrolyte, CBC

**Why:** Electrolytes: FDA 5.11 says avoid in uncorrected hypokalemia, and the Cravit insert lists uncorrected hypokalemia/hypomagnesemia as QT risk factors. CBC: FDA 5.6 and the highlights warn of hematologic toxicity (agranulocytosis, thrombocytopenia) after multiple doses. The page body already lists CBC. Blood glucose has no schema option and should be mentioned in Notes.

**Sources:** US FDA label sec 5 highlights, 5.6, 5.11, 5.13: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Taiwan 仿單 Cravit sec 5.1 QT 間隔延長: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A11 · Pediatric dose (minor)

**Was:** ≥6mo, ≥50kg: 500 mg q24h; <br>\<50kg: 8 mg/kg q12h (max 250 mg/dose)—FDA-approved for anthrax/plague only

**Now:** ≥6mo, ≥50kg: 500 mg q24h; <br>\<50kg: 8 mg/kg q12h (max 250 mg/dose)—FDA-approved for anthrax/plague only<br>Tablets: 30–<50 kg 250 mg q12h; not for <30 kg (FDA 2.2)<br>UK SmPC: contraindicated <18 y; Cravit 仿單: 小兒安全性及劑量尚未確立

**Why:** The existing text is correct per US label 12.3 and 8.4. However, the stocked products are tablets, and the tablet label gives 250 mg q12h for 30–<50 kg and says tablets cannot be given below 30 kg. The UK SmPC contraindicates use in children, and the Cravit insert says pediatric safety and dose are not established.

**Sources:** US FDA label sec 2.2 Table 2, 8.4, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.2/4.3: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit sec 5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A12 · Page body (error)

**Was:** ### Indications (FDA-approved) ... - Acute bacterial prostatitis

**Now:** - Chronic bacterial prostatitis (and add: - Uncomplicated skin & skin structure infections (uSSSI))

**Why:** The label indication is chronic bacterial prostatitis (FDA 1.6, SmPC 4.1, Taiwan inserts sec 2), not acute. Uncomplicated SSSI (FDA 1.5) is missing from the list.

**Sources:** US FDA label sec 1.5, 1.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.1: https://www.medicines.org.uk/emc/product/12130/smpc

### A13 · Page body (error)

**Was:** Adult Dose table: CAP 500 or 750 mg q24h 7–14 days; Acute sinusitis 500 or 750 mg 5–10 days; ABECB 500 mg 5–7 days; Complicated UTI/Pyelonephritis 250–750 mg 7–14 days; Acute prostatitis 500 mg 28 days

**Now:** CAP: 500 mg q24h ×7–14 d or 750 mg q24h ×5 d (Cravit 仿單: 500 mg BID ×7–14 d); Acute sinusitis: 750 mg ×5 d or 500 mg ×10–14 d; ABECB: 500 mg ×7 d (Cravit 250–500 mg / SmPC 500 mg ×7–10 d); cUTI/AP: 750 mg ×5 d or 250 mg ×10 d (Cravit 250 mg ×7–10 d; SmPC cUTI 500 mg ×7–14 d, pyelonephritis 500 mg ×7–10 d); Chronic bacterial prostatitis: 500 mg ×28 d. Apply the same corrections to the Brief Summary Table row (Sinusitis 750 mg ×5 d or 500 mg ×10–14 d; ABECB 500 mg ×7 d; UTI: uncomplicated 250 mg ×3 d, cUTI/AP 750 mg ×5 d or 250 mg ×10 d).

**Why:** The durations do not match US label Table 1. The 750 mg CAP regimen is 5 days only. Sinusitis is 750 mg ×5d or 500 mg ×10–14d. ABECB is 7 days. cUTI is 750 mg ×5d or 250 mg ×10d. The prostatitis indication is chronic. The 'Brief Summary Table' repeats these errors ('Sinusitis/ABECB: 500 mg q24h × 5–7d'; 'UTI: 250–500 mg q24h × 3–14d', which omits 750 mg ×5d) and needs the same correction.

**Sources:** US FDA label sec 2.1 Table 1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Taiwan 仿單 Cravit sec 3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; UK SmPC sec 4.2: https://www.medicines.org.uk/emc/product/12130/smpc

### A14 · Page body (missing)

**Was:** ### Renal Dose Adjustment — only US-style 750/500/250 mg tables; **CRRT:** 250 mg IV q24h (clearance significantly increased vs. intermittent HD)

**Now:** Add above the US tables: "Cravit 仿單 (stocked product, EU-style): 500 mg q24h → CrCl 20–50: 500 mg ×1 then 250 mg q24h; 10–19: 500 mg ×1 then 125 mg q24h; <10/HD/CAPD: 500 mg ×1 then 125 mg q24h. 500 mg q12h → 20–50: 500 mg ×1 then 250 mg q12h; 10–19: 500 mg ×1 then 125 mg q12h; <10/HD/CAPD: 500 mg ×1 then 125 mg q24h. 250 mg q24h → 20–50: 250 mg ×1 then 125 mg q24h; ≤19/HD/CAPD: 250 mg ×1 then 125 mg q48h. No supplemental dose after HD/CAPD." Label the US tables 'US FDA / 平福樂欣750 (LEV08)'. CRRT line: "**CRRT** (CVVH/CVVHDF; no label data): 250 mg q24h — levofloxacin clearance substantially increased during CRRT (Malone 2001 AAC, PMID 11557500)"

**Why:** The page body's US tables match FDA Table 3. However, the stocked Cravit product's insert uses different (125 mg step) regimens, which the ground rules say to prefer. The CRRT statement has no source, and the clearance comparison in brackets is not in any label. The Trotman PMID was verified with esummary; confirm the exact table value in the full text.

**Sources:** Taiwan 仿單 Cravit sec 3.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; Trotman RL et al. Clin Infect Dis 2005;41:1159-66, PMID 16163635: https://pubmed.ncbi.nlm.nih.gov/16163635/; Heintz BH et al. Pharmacotherapy 2009;29:562-77, PMID 19397464: https://pubmed.ncbi.nlm.nih.gov/19397464/

### A15 · Page body (error)

**Was:** Drug Interactions: "Live bacterial vaccines (BCG, cholera)—antagonism"; "Antacids (Al, Mg), iron, calcium, zinc, sucralfate, didanosine: ... take levofloxacin 2h before or 2–6h after"; "Caffeine: ↓ elimination—may cause jitteriness/insomnia"

**Now:** REMOVE caffeine line; change chelation line to "Antacids (Al, Mg), iron, zinc/multivitamins, sucralfate, buffered didanosine: take levofloxacin ≥2h before or ≥2h after (calcium salts: minimal effect per SmPC/仿單)"; flag live bacterial vaccines as not in levofloxacin labels (keep only if sourced to the vaccine's own label); add "False-positive urine opiate immunoassay (FDA 7.9)" and "Probenecid/cimetidine: ↓ renal clearance 34%/24%, caution in renal impairment (SmPC 4.5)"

**Why:** The caffeine claim is contradicted by the sources. Caffeine is a CYP1A2 substrate, and the SmPC 4.5 and Cravit insert sec 7 both say levofloxacin is not a CYP1A2 inhibitor; the page itself says the same under Notes. The spacing interval in FDA 2.4/7.1 is 2 h before or 2 h after; '2–6h' is the ciprofloxacin/moxifloxacin wording. Calcium is contradicted by the SmPC and both Taiwan inserts. The vaccine statement has no support in the levofloxacin labels.

**Sources:** UK SmPC sec 4.5: https://www.medicines.org.uk/emc/product/12130/smpc; US FDA label sec 2.4, 7.1, 7.8, 7.9: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Taiwan 仿單 Cravit sec 7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A16 · Page body (error)

**Was:** Side Effects: "**Myasthenia gravis exacerbation** (contraindicated)"; Notes: "Avoid in patients with history of FQ-associated adverse reactions, myasthenia gravis, or prolonged QT"

**Now:** "**Myasthenia gravis exacerbation** (avoid; FDA 5.5)"; add under Notes: "Contraindicated (UK SmPC / Taiwan 仿單): epilepsy, prior FQ tendinopathy, pregnancy, breastfeeding"; add aortic aneurysm/dissection with "avoid in known aneurysm unless no alternative (FDA 5.9)"

**Why:** In the labels, MG is a warning (avoid), not a contraindication. The SmPC/Taiwan contraindications (epilepsy, prior FQ tendinopathy) appear nowhere on the page.

**Sources:** US FDA label sec 4, 5.5, 5.9: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.3: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit sec 4 禁忌: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A17 · Page body (missing)

**Was:** ### Pregnancy — **Category C** (former FDA category) / **Use with caution** ... CDC recommends as alternative agent for anthrax prophylaxis in pregnancy

**Now:** Replace heading line with "US label 8.1 (PLLR): no drug-associated risk of major birth defects/miscarriage identified in published human data; not teratogenic in rats/rabbits. UK SmPC & Taiwan 仿單 (Cravit, P.L.): 懷孕禁用 (contraindicated)." Keep the bullets; mark the CDC anthrax statement as unsourced (no label/guideline citation on page).

**Why:** The page body omits the SmPC/Taiwan contraindication, which is the stocked product's own label position. The CDC anthrax-in-pregnancy claim has no citation. The 'Category C (former)' wording is acceptable only as history and should not lead the section.

**Sources:** US FDA label sec 8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC sec 4.6: https://www.medicines.org.uk/emc/product/12130/smpc; Taiwan 仿單 Cravit sec 6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A18 · Page body (missing)

**Was:** ### Breastfeeding — **Acceptable with monitoring** (LactMed) ...

**Now:** Add: "US label 8.2: breastfeeding not recommended during treatment and for 2 days after the last dose (may pump & discard); anthrax PEP: continuing may be acceptable. UK SmPC & Taiwan 仿單: 哺乳禁用 (contraindicated)."

**Why:** The LactMed details (RID about 6–8%, peak 8.2–16.9 mg/L, avoid 1 h after IV or 4–6 h after oral) are correct. The conflicting label positions are missing.

**Sources:** US FDA label sec 8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; LactMed NBK501002: https://www.ncbi.nlm.nih.gov/books/NBK501002/; Taiwan 仿單 Cravit sec 6.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### A19 · Page body (unsupported)

**Was:** Coverage: *Stenotrophomonas maltophilia*; *Mycobacterium tuberculosis* (second-line agent); *Citrobacter* spp; *Morganella morganii*; *Pseudomonas aeruginosa* (less active than ciprofloxacin). Notes: "Preferred fluoroquinolone for TB treatment (second-line)"

**Now:** S. maltophilia → "(not in labels; IDSA AMR Guidance, current 2026 update, Q6.3: alternative, only as part of combination therapy)"; M. tuberculosis → "(not in labels; ATS/CDC/ERS/IDSA 2019: levofloxacin or moxifloxacin recommended in MDR/RR-TB regimens)"; Citrobacter/Morganella → "(in vitro only; clinical efficacy not established — FDA 12.4)"; Notes TB line → "Later-generation FQ (levofloxacin or moxifloxacin) recommended for MDR-TB (ATS/CDC/ERS/IDSA 2019, PMID 31729908)"; flag the 'less active than ciprofloxacin' comparisons as unsourced

**Why:** None of these appear among the labelled clinically active organisms. They are plausible and backed by guidelines, so they should be annotated, not deleted. 'Preferred fluoroquinolone for TB' overstates the 2019 guideline, which recommends levofloxacin or moxifloxacin.

**Sources:** US FDA label sec 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; IDSA 2024 AMR Guidance Q6.3, PMID 39108079: https://www.idsociety.org/practice-guideline/amr-guidance/; Nahid P et al. ATS/CDC/ERS/IDSA DR-TB guideline, Am J Respir Crit Care Med 2019;200:e93-e142, PMID 31729908: https://pubmed.ncbi.nlm.nih.gov/31729908/

### B1 · Adult dose (error)

**Was:** Pneumonia, IAI, UTI: 750mg IV QD

**Now:** CAP: 750 mg QD ×5d or 500 mg QD ×7–14d (FDA)；Cravit 仿單 500 mg BID ×7–14d<br>HAP: 750 mg QD ×7–14d (FDA)<br>cUTI/Pyelonephritis: 750 mg QD ×5d or 250 mg QD ×10d (FDA)

**Why:** IAI is not an approved indication in the FDA label (sec 1), the UK SmPC (4.1) or either Taiwan insert (sec 2). The line also merges different regimens. In FDA Table 1, 750 mg is given for 5 days in CAP and cUTI/AP but for 7–14 days in nosocomial pneumonia. It is not a dose for all UTI: uncomplicated UTI is 250 mg ×3d. The stocked Cravit product (tablet and IV inserts, sec 3.1) uses CAP 500 mg BID.

**Sources:** US FDA label (DailyMed setid 5a65b2bc-9edc-f193-e063-6394a90a0104) sec 1, 2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC Levofloxacin 250mg (Ipca) 4.1 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit 500 mg tab 衛署藥製字第047516號 sec 2, 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B2 · Adult dose (error)

**Was:** COPD: 500mg QD for 5-7d

**Now:** ⚠️ AECB/COPD (reserve, no alternative): 500 mg QD ×7d (FDA)；UK 500 mg QD ×7–10d；Cravit 仿單 250–500 mg QD ×7–10d

**Why:** No label supports a 5-day AECB course. FDA Table 1 gives ABECB 500 mg ×7 days. UK SmPC 4.2 gives 7–10 days and Cravit insert 3.1 gives 250–500 mg QD ×7–10 days. FDA 1.13, UK 4.1 and the TFDA warning (衛授食字第1081400661A/1141411455號) reserve AECB use for patients with no alternative.

**Sources:** US FDA label 2.1 Table 1 and 1.13 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.1, 4.2 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab 特殊警語, sec 2, 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B3 · Adult dose (minor)

**Was:** Complicated UTI/Pyelonephritis: 500 mg QD for 7-14d

**Now:** cUTI/Pyelonephritis: 750 mg QD ×5d or 250 mg QD ×10d (FDA)；Cravit 仿單 250 mg QD ×7–10d (嚴重感染可考慮增量)；UK 500 mg QD ×7–14d (pyelonephritis 7–10d)

**Why:** 500 mg QD ×7–14d matches only the UK SmPC regimen for cUTI. UK pyelonephritis is 7–10 days. The stocked Cravit tablet and IV inserts give 250 mg QD ×7–10d, with a higher dose to be considered in severe infection (IV insert footnote 1). FDA gives 750 mg ×5d or 250 mg ×10d. Show the stocked-product dose first and the other labels alongside.

**Sources:** UK SmPC 4.2 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; TFDA 仿單 Cravit IV 衛署藥製字第057185號 sec 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057185%E8%99%9F; US FDA label 2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104

### B4 · Adult dose (unsupported)

**Was:** Severe/Resistant Infections: 500–750 mg QD for 5-14d

**Now:** Severe infection: no label has a generic 'resistant infection' regimen. Cravit 仿單 doses by severity: SSTI 250 mg QD → 500 mg BID ×7–14d; cUTI: consider a higher dose when severe (IV 仿單). Cravit CAP is always 500 mg BID. US max 750 mg QD.

**Why:** No label has a generic 'severe/resistant infection' regimen. For severe infection the Cravit inserts escalate to 500 mg q12h (CAP and skin/soft-tissue). The US label's highest regimen is 750 mg q24h. Replace this line with label-based text or remove it.

**Sources:** TFDA 仿單 Cravit tab sec 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; US FDA label 2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104

### B5 · Adult dose (missing)

**Was:** (no cSSTI, prostatitis, sinusitis, uncomplicated cystitis or IV infusion-rate lines)

**Now:** cSSTI: 750 mg QD ×7–14d (FDA)；Cravit 仿單 250 mg QD or 500 mg BID ×7–14d<br>Chronic bacterial prostatitis: 500 mg QD ×28d<br>⚠️ Reserve (no alternative): Acute sinusitis 750 mg QD ×5d or 500 mg QD ×10–14d；Uncomplicated cystitis 250 mg QD ×3d<br>IV (Cravit 250 mg/50 mL): 250 mg ≥30 min, 500 mg ≥60 min (Cravit IV 仿單)；750 mg ≥90 min (US)

**Why:** The column has no lines for several label indications: cSSSI (FDA 1.4), chronic bacterial prostatitis (1.6), acute sinusitis (1.14) and uncomplicated UTI (1.12). The hospital also stocks Cravit IV 250 mg/50 mL (CRA01). Its insert (3.1, 5.1) requires infusion over at least 30 min for 250 mg and at least 60 min for 500 mg. The US injection label 2.1 gives 750 mg over 90 min.

**Sources:** US FDA tablet label 1.4, 1.6, 1.12, 1.14, 2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; US levofloxacin injection label (WG Critical Care) 2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9020cdeb-65fe-458f-bbbd-69265a49906e; TFDA 仿單 Cravit IV sec 3.1, 5.1 注射時間 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057185%E8%99%9F

### B6 · Renal dose, HD, CRRT (error)

**Was:** CrCl 20-50: 500-750mg IVD q48h<br>CrCl 10-19: 250-500mg q48h

**Now:** [750 mg QD] CrCl 20–49: 750 mg q48h；CrCl 10–19 & HD/CAPD: 750 mg ×1 then 500 mg q48h (FDA / 平福樂欣750 仿單)

**Why:** FDA Table 3 gives 750 mg q48h at CrCl 20–49 only for the 750 mg regimen. The 500 mg regimen at CrCl 20–49 is 500 mg ×1 then 250 mg q24h, not 500 mg q48h. The 10–19 line also leaves out the initial full dose (750 or 500 mg).

**Sources:** US FDA label 2.3 Table 3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 平福樂欣750 衛署藥製字第057839號 sec 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F

### B7 · Renal dose, HD, CRRT (missing)

**Was:** \[COPD\]<br>CrCl 20-50: 500 mg IV/PO initial, then 250 mg IV/PO QD<br>CrCl \<20: 500 mg IV/PO initial, then 250 mg IV/PO QOD

**Now:** 【Cravit 仿單 (錠/IV) — 首劑 full dose，之後】<br>250mg QD: CrCl 20–50 → 125 mg q24h；10–19 → 125 mg q48h；<10/HD/CAPD → 125 mg q48h<br>500mg QD: CrCl 20–50 → 250 mg q24h；10–19 → 125 mg q24h；<10/HD/CAPD → 125 mg q24h<br>500mg q12h: CrCl 20–50 → 250 mg q12h；10–19 → 125 mg q12h；<10/HD/CAPD → 125 mg q24h<br>HD/CAPD 後不需補充劑量<br><br>【US FDA / 平福樂欣750 仿單】<br>[750 mg QD] CrCl 20–49: 750 mg q48h；10–19 & HD/CAPD: 750 mg ×1 then 500 mg q48h<br>[500 mg QD] CrCl 20–49: 500 mg ×1 then 250 mg q24h；10–19 & HD/CAPD: 500 mg ×1 then 250 mg q48h<br>[250 mg QD] CrCl 20–49: 不調；10–19: 250 mg q48h (uncomplicated UTI 不調)；HD 無資料<br>No supplemental dose after HD/CAPD<br><br>CRRT (CVVH/CVVHDF): 250 mg q24h (Malone 2001, PMID 11557500; no label data)

**Why:** The page is titled Cravit, and both Cravit products the hospital stocks (500 mg tablet CRA03 and IV CRA01) have a TFDA insert with the EU-style 125 mg-step table (sec 3.3). The UK SmPC 4.2 has the same table. By the ground rules the stocked product's table should come first, with the US values alongside; the US values apply to LEV08. The '[COPD]' heading is wrong because the 500 mg regimen covers every 500 mg indication. FDA 8.6 says no supplemental dose is needed after HD or CAPD. CRRT has no label data. Malone 2001 found levofloxacin clearance substantially increased on CVVH and CVVHDF, and concluded that 250 mg/day is sufficient. The full-dose first dose on CRRT follows the label tables' initial-dose pattern; it is an extrapolation and the paper's full text was not checked.

**Sources:** TFDA 仿單 Cravit tab sec 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; TFDA 仿單 Cravit IV sec 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057185%E8%99%9F; UK SmPC 4.2 Impaired renal function — https://www.medicines.org.uk/emc/product/12130/smpc; US FDA label 2.3 Table 3, 8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; Malone RS et al. Antimicrob Agents Chemother 2001;45:2949-54, PMID 11557500 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/11557500/

### B8 · Pediatric dose (missing)

**Was:** ≥6mo, ≥50kg: 500 mg q24h; <br>\<50kg: 8 mg/kg q12h (max 250 mg/dose)—FDA-approved for anthrax/plague only

**Now:** ≥6mo, ≥50kg: 500 mg q24h; <br>\<50kg: 8 mg/kg q12h (max 250 mg/dose)—FDA-approved for anthrax/plague only<br>錠劑僅限 ≥30 kg (30–<50 kg: 250 mg q12h)；<30 kg 需口服液/IV<br>Cravit 仿單: 小兒安全性及劑量尚未確立；UK SmPC: <18 歲禁用

**Why:** The current text is correct according to the US injection label 2.2. The hospital stocks only 500/750 mg tablets and the 250 mg IV, though. The US tablet label 2.2 says tablets cannot be used under 30 kg and gives 250 mg q12h for 30–<50 kg. The Taiwan Cravit inserts (5.1) state that pediatric safety and dosing are not established. UK SmPC 4.3 contraindicates use in children and growing adolescents.

**Sources:** US levofloxacin injection label 2.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9020cdeb-65fe-458f-bbbd-69265a49906e; US FDA tablet label 2.2 Table 2, 8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab sec 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; UK SmPC 4.2, 4.3 — https://www.medicines.org.uk/emc/product/12130/smpc

### B9 · Indications (error)

**Was:** CAP, HAP, UTI, cUTI, cSSTI, IAI

**Now:** CAP, HAP, UTI, cUTI, cSSTI, SSTI

**Why:** IAI is not in the FDA label (sec 1), the UK SmPC (4.1) or any Taiwan insert (sec 2), so the tag should be removed. If the owner wants to keep it as off-label, the 2010 SIS/IDSA cIAI guideline (Solomkin, PMID 20034345, checked with esummary) is the citation for FQ + metronidazole in community-acquired cIAI. Its text was not re-checked here. Uncomplicated SSSI is FDA-approved (1.5) and the SSTI tag is missing.

**Sources:** US FDA label sec 1.1–1.14 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; Solomkin JS et al. Clin Infect Dis 2010;50:133-64, PMID 20034345 — https://pubmed.ncbi.nlm.nih.gov/20034345/

### B10 · Coverage (missing)

**Was:** E.coli, Pseudomonas, Haemophilus, MSSA, Streptococcus, Stenotrophomonas, Mycoplasma, Chlamydia

**Now:** E.coli, Klebsiella, Proteus, Enterobacter, Serratia, Pseudomonas, Haemophilus, MSSA, Streptococcus, E. faecalis, Legionella, Bacillus, Stenotrophomonas, Mycoplasma, Chlamydia

**Why:** FDA 12.4 lists these as clinically active: K. pneumoniae, P. mirabilis, E. cloacae, S. marcescens, L. pneumophila and E. faecalis, plus B. anthracis in vitro. The P.L. 750 insert 10.2 and UK SmPC 5.1 agree; UK lists L. pneumophila and B. anthracis as commonly susceptible. All of these are existing schema options. UK SmPC and the Cravit insert class Enterobacterales, Pseudomonas and E. faecalis as 'acquired resistance may be a problem'.

**Sources:** US FDA label 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 5.1 Antibacterial spectrum — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 平福樂欣750 sec 10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F

### B11 · Coverage (minor)

**Was:** Stenotrophomonas (tag; body: Stenotrophomonas maltophilia)

**Now:** Keep the tag; body note: S. maltophilia — not in any label spectrum; IDSA 2026 AMR guidance: levofloxacin only as a component of combination therapy (alternative option) for invasive infection; resistance emerges on therapy in ~20%

**Why:** S. maltophilia is not in FDA 12.4, UK SmPC 5.1 or the Cravit insert 10.2. IDSA 2026 AMR Guidance (Q6.3) supports levofloxacin only as part of combination therapy and as an alternative option. Without that context the tag reads as if levofloxacin alone were reliable.

**Sources:** IDSA 2026 Guidance on the Treatment of AMR Gram-Negative Infections (published July 30, 2026), Question 6.3 — https://www.idsociety.org/practice-guideline/amr-guidance/; US FDA label 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104

### B12 · Side Effects (missing)

**Was:** LFT↑, QTc prolong, GI, CNS

**Now:** LFT↑, QTc prolong, GI, CNS, neuropathy, dysglycemia, photosensitivity, SJS/TEN

**Why:** Peripheral neuropathy is part of the FQ boxed warning (FDA 5.1/5.3; TFDA 衛授食字第1141411455號). The FDA label also has warnings for blood glucose disturbances (5.13), photosensitivity (5.14) and SJS/TEN (5.6). The Cravit insert sections 5.1 and 8.1 list the same. All four are existing schema options. Tendinopathy and aortic aneurysm have no tag and belong in Notes (see B17).

**Sources:** US FDA label 5.1, 5.3, 5.6, 5.13, 5.14 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab 特殊警語, 5.1, 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B13 · Monitor (minor)

**Was:** renal, LFT, neuro, CNS, ECG, PT/INR

**Now:** renal, LFT, neuro, CNS, ECG, PT/INR, electrolyte

**Why:** FDA 5.11 says to avoid use with uncorrected hypokalemia, and Cravit insert 5.1 lists uncorrected electrolyte imbalance (hypokalemia, hypomagnesemia) as a QT risk factor. The schema has no glucose option, so glucose monitoring in diabetics (FDA 5.13) goes in Notes.

**Sources:** US FDA label 5.11, 5.13 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab 5.1 QT 間隔延長 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B14 · Drug Interactions (error)

**Was:** Space 2h: Antacids, Fe, Ca, Zn, sucralfate

**Now:** Space 2h: Mg/Al antacids, sucralfate, Fe, Zn (multivitamins), didanosine (buffered)；Ca salts minimal effect (Cravit 仿單/UK SmPC)

**Why:** Calcium is contradicted by the labels. UK SmPC 4.5 and Cravit insert 7 say calcium salts have minimal effect on levofloxacin absorption, and the P.L. 750 insert 7 says absorption is not affected by calcium carbonate (不受碳酸鈣影響). FDA 2.4/7.1 lists Mg/Al antacids, sucralfate, iron, zinc multivitamins and didanosine, and does not list calcium.

**Sources:** UK SmPC 4.5 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; TFDA 仿單 平福樂欣750 sec 7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F; US FDA label 2.4, 7.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104

### B15 · Drug Interactions (missing)

**Was:** Avoid: QT-prolonging drugs, live vaccines; ... Monitor: Warfarin (↑INR), corticosteroids (↑tendon risk), NSAIDs (↑seizure risk), hypoglycemics

**Now:** Avoid: Class IA/III antiarrhythmics；caution other QT-prolonging drugs (TCA, macrolides, antipsychotics); live oral bacterial vaccines (unsourced — not in levofloxacin labels); <br>Space 2h: Mg/Al antacids, sucralfate, Fe, Zn (multivitamins), didanosine (buffered)；Ca salts minimal effect; <br>Monitor: Warfarin (↑INR), corticosteroids (↑tendon risk；TW 仿單: 避免併用), NSAIDs & theophylline (↑seizure risk；監測 theophylline 濃度), hypoglycemics/insulin (dysglycemia), cyclosporine (cyclosporine t½ ↑33%), probenecid/cimetidine (↓renal CL 24–34%；腎功能不良者小心); <br>Lab: false-positive urine opiate immunoassay (FDA 7.9)

**Why:** Several label interactions are missing. FDA 7.5 says to monitor theophylline levels closely, and SmPC 4.5 adds seizure-threshold lowering. SmPC 4.5 and Cravit 7 report cyclosporine half-life increased by 33%, and advise caution with probenecid/cimetidine (renal clearance down 24–34%) in renal impairment. FDA 5.11 says avoid with class IA/III antiarrhythmics; for other QT drugs SmPC 4.5 says use with caution. The Taiwan inserts (5.1) say to avoid concomitant corticosteroids.

**Sources:** US FDA label 5.11, 7.2–7.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.5 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 5.1 肌腱炎, sec 7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B16 · Drug Interactions (unsupported)

**Was:** Avoid: ... live vaccines (body: Live bacterial vaccines (BCG, cholera)—antagonism)

**Now:** Keep pending a source (not in FDA/UK/TW labels); if sourced, narrow to live oral bacterial vaccines (e.g., oral typhoid Ty21a, oral cholera) per those vaccines' own labels

**Why:** None of the five labels reviewed (FDA 7, UK SmPC 4.5, the three TFDA inserts sec 7) mentions vaccines. The statement is plausible for live oral bacterial vaccines but has no source in the current hierarchy. It is not contradicted, so flag it rather than remove it.

**Sources:** US FDA label 7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.5 — https://www.medicines.org.uk/emc/product/12130/smpc

### B17 · Notes (error)

**Was:** better pneumococcal coverage vs cipro; less Pseudomonas activity vs cipro; <br>contraindicated in myasthenia gravis

**Now:** better pneumococcal coverage vs cipro; less Pseudomonas activity vs cipro; <br>avoid in myasthenia gravis (FDA 5.5；TW 仿單: 不建議使用)<br>⚠️ FQ 加框警語: tendinitis/rupture, peripheral neuropathy, CNS/psychiatric effects, MG exacerbation — 可能長期、失能、不可逆；AECB、急性鼻竇炎、非複雜性膀胱炎/UTI 僅限無其他替代時使用 (FDA 1.12–1.14；TFDA 衛授食字第1141411455號；UK SmPC 4.1: all indications)<br>禁忌 (Cravit/平福樂欣 仿單, UK SmPC): 癲癇、曾因 FQ 肌腱病變、懷孕、哺乳 (UK: <18 歲)<br>Aortic aneurysm/dissection risk (elderly)；糖尿病人監測血糖 (dysglycemia)

**Why:** Myasthenia gravis is not a labelled contraindication. FDA 4 lists only hypersensitivity; FDA 5.5 says 'avoid', and the Cravit insert 5.1 says 不建議使用 (not recommended). The column also leaves out the boxed-warning reserve statement, the Taiwan/UK contraindications (epilepsy, previous FQ tendinopathy, pregnancy, breastfeeding) and the aortic aneurysm (FDA 5.9) and dysglycaemia (FDA 5.13) warnings.

**Sources:** US FDA label 4, 5.1–5.5, 5.9, 5.13, 1.12–1.14 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.1, 4.3 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab 特殊警語, sec 4, 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; TFDA 仿單 平福樂欣750 sec 4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057839%E8%99%9F

### B18 · Notes (unsupported)

**Was:** better pneumococcal coverage vs cipro; less Pseudomonas activity vs cipro

**Now:** Keep; needs a citation (no label compares with ciprofloxacin)

**Why:** No reviewed label makes these comparisons. They are plausible and are not contradicted, so flag them rather than remove them.

**Sources:** US FDA label 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104

### B19 · Pregnancy (error)

**Was:** Category C; avoid if alternatives exist; use only if benefit outweighs risk

**Now:** 懷孕禁用 (Cravit/平福樂欣 仿單, UK SmPC 4.3/4.6: contraindicated — animal data show weight-bearing cartilage damage)；US FDA 8.1 (PLLR): published human data have not identified a drug-associated risk of major birth defects/miscarriage/adverse outcomes; not teratogenic in rats/rabbits

**Why:** The FDA retired the letter categories, and the current US label 8.1 is a narrative risk summary. All three Taiwan inserts (Cravit tablet and IV sec 4/6.1; P.L. 750 sec 4/6.1) and UK SmPC 4.3/4.6 contraindicate use in pregnancy, so 'Category C… use if benefit outweighs risk' understates the stocked product's label.

**Sources:** US FDA label 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.3, 4.6 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 4, 6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B20 · Breastfeeding (missing)

**Was:** Acceptable with monitoring; avoid BF 4–6h after oral dose; watch infant for diarrhea/candidiasis

**Now:** LactMed: Acceptable with monitoring; avoid BF 4–6h after oral dose (≥1h after IV); watch infant for diarrhea/candidiasis<br>⚠️ 仿單: Cravit/平福樂欣 & UK SmPC 哺乳禁用；US FDA 8.2: BF not recommended during therapy + 2 days after last dose (or pump & discard)

**Why:** The current text matches the LactMed summary. All the labels are stricter, though. The Taiwan inserts (sec 4 and 6.2) and UK SmPC 4.3/4.6 contraindicate breastfeeding. FDA 8.2 does not recommend breastfeeding during treatment or for 2 days after the last dose, with pump-and-discard as the alternative. Users should see both positions.

**Sources:** LactMed Levofloxacin NBK501002 (rev 2025-12-15) Summary of Use — https://www.ncbi.nlm.nih.gov/books/NBK501002/; US FDA label 8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab sec 4, 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/12130/smpc

### B21 · Category (minor)

**Was:** Fluoroquinolone (3rd generation / respiratory)

**Now:** Keep (labels state only 'fluoroquinolone'; generation label is unsourced convention)

**Why:** FDA, UK SmPC 5.1 and the Cravit insert 10.2 all classify levofloxacin as a fluoroquinolone (ATC J01MA12). The '3rd generation' label is a common convention, but no label uses it.

**Sources:** UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/12130/smpc

### B22 · Page body (error)

**Was:** Indications: '- Acute bacterial prostatitis'; Adult Dose table row 'Acute prostatitis \| 500 mg PO/IV q24h \| 28 days'

**Now:** Chronic bacterial prostatitis (both places)

**Why:** FDA 1.6, UK SmPC 4.1 and the Cravit insert sec 2 all approve chronic bacterial prostatitis (500 mg ×28 d). None approves acute prostatitis.

**Sources:** US FDA label 1.6, 2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.1, 4.2 — https://www.medicines.org.uk/emc/product/12130/smpc

### B23 · Page body (error)

**Was:** Adult Dose table: CAP '500 mg or 750 mg q24h \| 7–14 days'; Acute sinusitis '500 mg or 750 mg \| 5–10 days'; ABECB '500 mg \| 5–7 days'; Complicated UTI/Pyelonephritis '250–750 mg \| 7–14 days'

**Now:** CAP: 750 mg q24h ×5 d or 500 mg q24h ×7–14 d (Cravit 仿單: 500 mg BID ×7–14 d); Acute sinusitis: 750 mg ×5 d or 500 mg ×10–14 d; ABECB: 500 mg ×7 d (UK 7–10 d); cUTI/AP: 750 mg ×5 d or 250 mg ×10 d (Cravit 仿單 250 mg QD ×7–10 d)

**Why:** In FDA Table 1, durations depend on the dose: 750 mg runs for 5 days in CAP, ABS and cUTI/AP. Sinusitis at 500 mg is 10–14 days, not 5–10, and ABECB is 7 days. The table should also give the stocked Cravit regimens.

**Sources:** US FDA label 2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab sec 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; UK SmPC 4.2 — https://www.medicines.org.uk/emc/product/12130/smpc

### B24 · Page body (missing)

**Was:** Renal Dose Adjustment: only US 750/500/250 mg tables; '**CRRT:** 250 mg IV q24h (clearance significantly increased vs. intermittent HD)' with no citation

**Now:** Add above the US tables: 'Cravit 仿單 (stocked CRA03/CRA01, EU-style) — first dose = full usual dose (250 or 500 mg) in every CrCl band, then:' 250mg/24h: 20–50 → 125 mg q24h; 10–19 → 125 mg q48h; <10/HD/CAPD → 125 mg q48h \| 500mg/24h: 20–50 → 250 mg q24h; 10–19 → 125 mg q24h; <10/HD/CAPD → 125 mg q24h \| 500mg/12h: 20–50 → 250 mg q12h; 10–19 → 125 mg q12h; <10/HD/CAPD → 125 mg q24h; no supplemental dose after HD/CAPD. Label the US tables 'US FDA / 平福樂欣750 (LEV08)'. Append to CRRT line: '(CVVH/CVVHDF; Malone 2001 AAC, PMID 11557500)'

**Why:** The stocked Cravit products' inserts use the EU-style table, which the ground rules make the preferred source; the body currently shows only the US table. The CRRT dose (250 mg/day) and 'clearance substantially increased during CVVH/CVVHDF' match the abstract of Malone 2001 (PMID checked with esummary), but no citation is given.

**Sources:** TFDA 仿單 Cravit tab sec 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; TFDA 仿單 Cravit IV sec 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057185%E8%99%9F; Malone RS et al. AAC 2001;45:2949-54, PMID 11557500 — https://pubmed.ncbi.nlm.nih.gov/11557500/

### B25 · Page body (error)

**Was:** Drug Interactions: 'Antacids (Al, Mg), iron, calcium, zinc, sucralfate, didanosine: ↓ absorption by chelation—take levofloxacin 2h before or 2–6h after'

**Now:** Antacids (Al, Mg), iron, zinc, sucralfate, didanosine (buffered): ↓ absorption by chelation—take levofloxacin at least 2h before or 2h after (calcium salts: minimal effect per UK SmPC/Cravit 仿單)

**Why:** FDA 2.4/7.1 and Cravit insert 3.1/7 specify at least 2 h before or after; the '2–6 h after' interval is not from any levofloxacin label. Calcium is contradicted: UK SmPC 4.5 and Cravit 7 say minimal effect, and P.L. 750 sec 7 says absorption is not affected by calcium carbonate.

**Sources:** US FDA label 2.4, 7.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.5 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B26 · Page body (error)

**Was:** Drug Interactions Moderate: 'Caffeine: ↓ elimination—may cause jitteriness/insomnia'

**Now:** REMOVE

**Why:** This is contradicted by the labels. UK SmPC 4.5 and Cravit insert 7 state that levofloxacin did not affect the PK of theophylline, the CYP1A2 probe, and so is not a CYP1A2 inhibitor. That is the mechanism the caffeine claim relies on. The page's own Notes also say levofloxacin 'does NOT inhibit CYP1A2'. No label lists caffeine.

**Sources:** UK SmPC 4.5 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab sec 7 其他相關資訊 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B27 · Page body (error)

**Was:** Pregnancy: '**Category C** (former FDA category) / **Use with caution** … Use only if benefit outweighs risk'; Summary table Pregnancy row 'Category C; avoid if alternatives exist…'

**Now:** **懷孕禁用** per stocked-product Taiwan 仿單 (Cravit/平福樂欣) and UK SmPC 4.3/4.6 (cartilage toxicity in juvenile animals). US FDA 8.1 (PLLR): published human data have not identified drug-associated risk of major birth defects, miscarriage or adverse outcomes; no teratogenicity in rats/rabbits; fetal toxicity only at 9.4× MRHD in rats. (Delete 'Category C' from summary table.)

**Why:** The heading frames the stocked product's contraindication as 'use with caution'. The summary table still gives 'Category C' as current. The statement 'CDC recommends as alternative agent for anthrax prophylaxis in pregnancy' has no source in the hierarchy; flag it as unsupported.

**Sources:** US FDA label 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab sec 4, 6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/12130/smpc

### B28 · Page body (missing)

**Was:** Breastfeeding: '**Acceptable with monitoring** (LactMed)' … (no label position)

**Now:** Add bullet: '⚠️ Labels: Cravit/平福樂欣 仿單 and UK SmPC — contraindicated in breastfeeding; US FDA 8.2 — not recommended during therapy and for 2 days after last dose (pump & discard), except anthrax PEP risk–benefit'

**Why:** The LactMed figures in the body are correct (RID ~6–8%, peak milk levels 8.2–16.9 mg/L). The labels for all three stocked products disagree with LactMed's 'acceptable' and should be shown next to it.

**Sources:** LactMed NBK501002 Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK501002/; US FDA label 8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab sec 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B29 · Page body (minor)

**Was:** Side Effects: '**Myasthenia gravis exacerbation** (contraindicated)'; Notes: 'Avoid in patients with … myasthenia gravis'; Summary Notes row '…contraindicated in myasthenia gravis'

**Now:** **Myasthenia gravis exacerbation** (avoid — FDA 5.5; TW 仿單 不建議使用); add bullet '**Aortic aneurysm/dissection** (FDA 5.9)' under serious warnings

**Why:** FDA 4 lists only hypersensitivity as a contraindication; myasthenia gravis is an 'avoid' warning (5.5). The Notes section of the body already says 'Avoid' correctly. Aortic aneurysm appears only as 'rare' under 'Other'; it is a FDA 5.9 warning and a TFDA-mandated warning.

**Sources:** US FDA label 4, 5.5, 5.9 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; TFDA 仿單 Cravit tab 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

### B30 · Page body (missing)

**Was:** Pediatric Dose: FDA anthrax/plague table + 'Off-label (per IDSA/PIDS…)' with no citation; no Taiwan/UK position

**Now:** Add: 'Cravit 仿單: 小兒安全性及劑量尚未確立；UK SmPC 4.3: contraindicated in children/growing adolescents (<18 y). Tablets only for ≥30 kg (30–<50 kg: 250 mg q12h, US tablet label 2.2).' Cite off-label line as 'Bradley JS et al. PIDS/IDSA pediatric CAP guideline, CID 2011;53:e25-76, PMID 21880587'

**Why:** The FDA anthrax/plague numbers match the US injection label 2.2. The off-label IDSA/PIDS line has no citation. PMID 21880587 was checked with esummary, but the full text could not be retrieved, so the mg/kg values were not re-checked against the guideline text. The Taiwan and UK paediatric positions are missing.

**Sources:** US levofloxacin injection label 2.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9020cdeb-65fe-458f-bbbd-69265a49906e; UK SmPC 4.3 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F; Bradley JS et al. Clin Infect Dis 2011;53:e25-76, PMID 21880587 — https://pubmed.ncbi.nlm.nih.gov/21880587/

### B31 · Page body (minor)

**Was:** '*IV infusion: 250–500 mg over 60 min; 750 mg over 90 min*'

**Now:** *IV infusion: Cravit IV 仿單 250 mg ≥30 min, 500 mg ≥60 min; US label 250–500 mg over 60 min, 750 mg over 90 min; avoid rapid/bolus (hypotension)*

**Why:** The US values are correct (injection label 2.1). The stocked Cravit IV 250 mg/50 mL (CRA01) insert gives 250 mg over at least 30 min.

**Sources:** US levofloxacin injection label 2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9020cdeb-65fe-458f-bbbd-69265a49906e; TFDA 仿單 Cravit IV 3.1, 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057185%E8%99%9F

### B32 · Page body (unsupported)

**Was:** Mechanism: 'The L-isomer (S-enantiomer) of ofloxacin with 8–128× greater activity than R-ofloxacin'; Notes: 'Preferred fluoroquinolone for TB treatment (second-line)'; Pregnancy: 'CDC recommends as alternative agent for anthrax prophylaxis in pregnancy'

**Now:** Keep the L-isomer statement and drop or cite '8–128×'; cite or soften TB/CDC statements (e.g., 'used in drug-resistant TB regimens' with WHO guideline citation)

**Why:** FDA 12.4 and SmPC 5.1 support only that levofloxacin is the L-/S(-)-isomer of ofloxacin and that the activity resides mainly in that isomer. The fold-difference, the 'preferred' FQ for TB and the CDC anthrax-in-pregnancy statements have no source in the hierarchy. They are plausible and are not contradicted, so flag them.

**Sources:** US FDA label 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/12130/smpc

### B33 · Page body (minor)

**Was:** Indications list: '- Reserve for patients without alternative treatment options due to FDA black box warning'

**Now:** - ⚠️ FDA/TFDA: reserve for ABECB, acute sinusitis and uncomplicated UTI/cystitis when no alternatives; UK SmPC 4.1: only when other commonly recommended antibiotics are inappropriate (applies to ALL indications)

**Why:** As written, this bullet reads as a separate indication and does not say which indications the reserve applies to. FDA 1.12–1.14 and the TFDA 特殊警語 limit it to three indications; UK SmPC 4.1 applies it to all.

**Sources:** US FDA label 1.12–1.14 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/12130/smpc; TFDA 仿單 Cravit tab 特殊警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC047516%E8%99%9F

## Verified correct as written

- Hepatic dose 'No adjustment': matches US label 8.7/12.3, UK SmPC 4.2 and Cravit 仿單 3.3 (limited metabolism, renal elimination). Page-body hepatotoxicity warning matches FDA 5.8.
- Mechanism: inhibits DNA gyrase and topoisomerase IV (both type II); bactericidal and concentration-dependent. Matches FDA 12.4, SmPC 5.1 and Cravit 10.1 (Cmax/AUC:MIC). L-isomer of ofloxacin matches FDA 12.4.
- Category 'Fluoroquinolone' matches FDA sec 1 and SmPC 5.1. The '3rd generation / respiratory' label is a common convention and does not appear in the labels.
- Coverage tags E.coli, Pseudomonas, Haemophilus, MSSA, Streptococcus, Mycoplasma and Chlamydia: supported by FDA 12.4. C. trachomatis is in SmPC 5.1 and Cravit 10.2.
- Indications tags CAP, HAP, UTI, cUTI and cSSTI: supported by FDA 1.1–1.4, 1.9–1.12 and SmPC 4.1.
- Side Effects tags LFT↑, QTc prolong, GI and CNS: supported by FDA 5.4, 5.8, 5.11 and 6.1 (nausea, diarrhea, headache, insomnia, dizziness ≥3%).
- Monitor tags renal, LFT, neuro, CNS, ECG and PT/INR: supported by FDA 2.3, 5.3, 5.4, 5.8, 5.11 and 7.2.
- Drug Interactions (property): warfarin ↑INR (FDA 7.2), NSAIDs ↑seizure risk (7.4), hypoglycemics (7.3), corticosteroids ↑tendon risk (5.2), QT drugs (5.11), and 2 h spacing for antacids/Fe/Zn/sucralfate (2.4). The calcium entry is wrong; see A5.
- Breastfeeding property text matches the LactMed summary (acceptable with monitoring; avoid 4–6 h after oral dose; watch for diarrhea/candidiasis).
- Pediatric property: ≥50 kg 500 mg q24h and 8 mg/kg q12h (max 250 mg/dose), approved only for anthrax PEP and plague in patients ≥6 months (FDA 1.7, 1.8, 2.2, 12.3).
- Page-body renal tables for the 750, 500 and 250 mg regimens and HD/PD 'no supplemental dose' match FDA Table 3 and 8.6.
- Page-body adult doses HAP 750 mg ×7–14 d, uncomplicated UTI 250 mg ×3 d, cSSSI 750 mg ×7–14 d, anthrax 500 mg ×60 d, and plague 500 mg ×10–14 d (higher doses allowed) match FDA Table 1 and its footnotes.
- Page-body IV infusion times (500 mg over 60 min, 750 mg over 90 min) are consistent with FDA 12.3.
- Page-body PK: bioavailability ~99% (FDA 12.3), t½ 6–8 h, 27–35 h in renal impairment (FDA 12.3 Table 8; Cravit sec 11), and not a CYP1A2 inhibitor (SmPC 4.5).
- Page-body serious ADR list (tendinitis/rupture, peripheral neuropathy, CNS, MG, QT/TdP, hepatotoxicity, CDAD, photosensitivity, dysglycemia, crystalluria with hydration, aortic aneurysm, hypersensitivity) matches FDA 5.1–5.14 and 2.6.
- Page-body LactMed data (RID ~6–8%, peak milk 8.2–16.9 mg/L, avoid BF ≥1 h after IV / 4–6 h after oral) match LactMed Drug Levels and Summary.
- Page-body off-label pediatric dosing (6 mo–5 y 8–10 mg/kg q12h; ≥5 y 8–10 mg/kg q24h; max 750 mg/day) is attributed to IDSA/PIDS 2011 pediatric CAP guideline, Bradley JS, CID 2011;53:e25-76, PMID 21880587 (verified by esummary). The table values themselves were not re-checked against the full text.
- Page-body theophylline (less interaction, monitor) and cyclosporine (monitor) are consistent with FDA 7.5/7.6 and SmPC 4.5.
- Mechanism column: inhibits DNA gyrase and topoisomerase IV; bactericidal; activity depends on Cmax/MIC or AUC/MIC (FDA 12.4; UK SmPC 5.1 PK/PD; Cravit 仿單 10.1–10.2)
- Hepatic dose 'No adjustment' (FDA 8.7; UK SmPC 4.2; Cravit 仿單 3.3; P.L. 750 仿單 3.3)
- Pediatric column numbers: ≥50 kg 500 mg q24h; <50 kg and ≥6 mo 8 mg/kg q12h (max 250 mg/dose); anthrax/plague only (US levofloxacin injection label 2.1–2.2, setid 9020cdeb-65fe-458f-bbbd-69265a49906e)
- Renal column 500 mg-regimen lines (shown as '[COPD]'): CrCl 20–49 → 500 mg then 250 mg QD; <20 → 500 mg then 250 mg QOD. These match FDA Table 3 for 20–49 and for 10–19/HD/CAPD
- Body renal tables (750/500/250 mg regimens, HD/PD with no supplemental dose) match FDA 2.3 Table 3 and 8.6
- CRRT 250 mg q24h is supported by Malone 2001 AAC (PMID 11557500, checked with esummary; abstract: 250 mg/day sufficient on CVVH/CVVHDF; clearance substantially increased)
- Breastfeeding column matches the LactMed summary (acceptable with infant GI monitoring; avoid BF ≥1 h after IV and 4–6 h after oral dose)
- Body breastfeeding data (RID ~6–8%, peak milk levels about 8–17 mg/L, calcium in milk may reduce absorption) match LactMed Drug Levels and Summary
- Side Effects tags GI, LFT↑, QTc prolong and CNS are supported (FDA 5.4, 5.8, 5.11, 6)
- Monitor tags renal, LFT, neuro, CNS, ECG and PT/INR are supported (FDA 2.3, 5.3, 5.4, 5.8, 5.11, 7.2)
- Indication tags CAP, HAP, UTI, cUTI and cSSTI are FDA-approved (sec 1.1–1.12); CAP, cUTI and cSSTI are also UK SmPC 4.1
- Coverage tags E.coli, Pseudomonas, Haemophilus, MSSA, Streptococcus, Mycoplasma and Chlamydia are supported by FDA 12.4 and UK SmPC 5.1 (Chlamydophila pneumoniae; UK and Cravit also list C. trachomatis)
- Drug interactions: warfarin ↑INR (FDA 7.2), corticosteroids ↑tendon risk (FDA 5.2), NSAIDs ↑seizure risk (FDA 7.4), antidiabetics/dysglycaemia (FDA 7.3), 2-h spacing for antacids/Fe/Zn/sucralfate (FDA 2.4), theophylline monitoring (FDA 7.5), cyclosporine (UK SmPC 4.5)
- Body common ADRs ≥3% (nausea, headache, diarrhea, insomnia, constipation, dizziness) and boxed-warning items match FDA 6 and 5.1–5.5
- Body PK pearls: bioavailability ~99% (FDA 12.3); t½ 6–8 h normal, 27 h (CrCl 20–49) and 35 h (<20) (FDA 12.3 Table 8; UK SmPC 5.2); not a CYP1A2 inhibitor (UK SmPC 4.5)
- Body adult table rows HAP 750 mg ×7–14 d, uncomplicated UTI 250 mg ×3 d, cSSSI 750 mg ×7–14 d, anthrax 500 mg ×60 d and plague 500 mg ×10–14 d match FDA Table 1 (plague 'higher dose if clinically indicated' footnote à)
- Body IV infusion times (250–500 mg over 60 min, 750 mg over 90 min) match the US injection label 2.1
- Body crystalluria/hydration statement matches FDA 2.6 and 6
- Body coverage: MSSA only (not MRSA) is consistent with Cravit 仿單 5.1/10.2 and UK SmPC 5.1 (MRSA very likely FQ co-resistant)

## Apply log

- Indications: CAP, HAP, UTI, cUTI, cSSTI, SSTI (IAI removed)
- Coverage: E.coli, Klebsiella, Proteus, Enterobacter, Serratia, Pseudomonas, Haemophilus, MSSA, Streptococcus, E. faecalis, Legionella, Bacillus, Stenotrophomonas, Mycoplasma, Chlamydia (existing options only)
- Side Effects: added neuropathy, dysglycemia, photosensitivity, SJS/TEN, hematologic, AKI
- Monitor: added electrolyte, CBC
- Category: kept unchanged (agreed 'Keep')
- Pregnancy: merged 懷孕禁用 (仿單/UK SmPC) + US 8.1 PLLR text; Category C removed
- Breastfeeding: LactMed + 仿單/UK SmPC 哺乳禁用 + US 8.2 (2 days, pump & discard, anthrax PEP)
- Pediatric dose: added tablet ≥30 kg restriction, Cravit 仿單 not established, UK SmPC <18 contraindicated
- Adult dose: merged FDA/Cravit 仿單/UK SmPC regimens (CAP, HAP, cUTI/AP, cSSTI/uSSSI, chronic prostatitis, anthrax/plague, reserve AECB/sinusitis/cystitis, severe-infection note, IV infusion times, PO=IV, stocked products); IAI removed
- Renal dose, HD, CRRT: Cravit 仿單 EU-style table first, then US FDA / 平福樂欣750 (LEV08) values, no post-HD supplement, CRRT 250 mg q24h (Malone 2001, PMID 11557500)
- Drug Interactions: merged avoid/space/monitor/lab lines; live vaccines flagged unsourced; Ca minimal effect; probenecid/cimetidine; opiate immunoassay
- Notes: cipro comparison flagged unsourced; MG 'avoid' (FDA 5.5/仿單); FQ boxed warning; contraindications; aortic aneurysm; dysglycemia
- Body: mechanism '8–128×' removed
- Body: Indications list Acute -> Chronic bacterial prostatitis, added uSSSI, reserve bullet replaced with FDA/TFDA/UK SmPC wording
- Body: Coverage notes for P. aeruginosa (unsourced), Citrobacter/Morganella (in vitro only), S. maltophilia (IDSA Q6.3), M. tuberculosis (ATS/CDC/ERS/IDSA 2019)
- Body: Adult dose table CAP, sinusitis, ABECB, cUTI/AP rows corrected; Acute prostatitis row -> Chronic bacterial prostatitis; IV infusion line updated
- Body: Cravit 仿單 renal paragraph added above US tables; US tables labelled 'US FDA / 平福樂欣750 (LEV08)'; CRRT line replaced with Malone citation
- Body: Pediatric Cravit/UK SmPC/tablet note added; off-label line cited to Bradley 2011 PMID 21880587
- Body: MG exacerbation 'avoid (FDA 5.5; TW 仿單)'; aortic aneurysm/dissection moved to serious warnings with FDA 5.9
- Body: Drug interactions: caffeine line removed, chelation line corrected, live vaccines flagged, probenecid/cimetidine and opiate immunoassay added
- Body: Pregnancy heading replaced with 懷孕禁用 + US 8.1 PLLR text; CDC anthrax bullet flagged unsourced
- Body: Breastfeeding label-contraindication bullet added
- Body: Notes TB pearl replaced (PMID 31729908); contraindication bullet added; cipro Pseudomonas pearl flagged unsourced
- Body: Brief Summary Table rows updated (Indications, Adult Dose, Pregnancy without Category C, Notes MG avoid)
- Body: References section appended (FDA tab/inj labels, UK SmPC, Taiwan 仿單 x3, TFDA letter, LactMed, IDSA AMR, ATS TB, Solomkin, Bradley, Malone, Trotman, Heintz); all PMIDs verified via esummary
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
