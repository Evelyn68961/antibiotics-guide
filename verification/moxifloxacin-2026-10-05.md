# New entry: Mosflow (Moxifloxacin)

- **Notion entry:** [Mosflow (Moxifloxacin)](https://app.notion.com/3f0c496dfff1814696e7dd007d349795). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** MOS04 (Mosflow tab 400 mg), FLO02 (公費 Floxsafe tab 400 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/moxifloxacin.json` (plus any Taiwan insert text files)

## Product and sources

Moxifloxacin HCl 400 mg film-coated tablets, PO only. Two products are stocked: MOS04 Mosflow 膜衣錠 400 mg (信東, 衛署藥製字第057910號, NHI AC57910100, insert updated 2023-06-06) and FLO02 公費 Floxsafe 400 (福樂星, MSN Laboratories India, 衛部藥輸字第026701號, NHI BC26701100, insert updated 2025-05-22). The licence numbers come from digits 3–7 of the NHI codes, and the TFDA pages match on name and maker. The Notion page is new: every column is empty and the body is blank. Its Category is "Fluoroquinolone".

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 400 mg QD for all indications (膜衣錠整顆吞服，不受食物影響；不可超過建議劑量 — QT prolongation rises with concentration)<br>Duration (Mosflow/Floxsafe 仿單 3.1): AECB 5d；CAP 10d；acute sinusitis 7d；SSTI uncomplicated 7d / complicated 7–21d；cIAI 5–14d<br>US FDA 2.1: CAP 7–14d；uSSSI 7d；cSSSI 7–21d；cIAI 5–14d；plague (Rx & PEP) 10–14d；ABS 10d；ABECB 5d<br>UK SmPC 4.2: AECOPD/bronchitis 5–10d；CAP (non-severe) 10d；ABS 7d；mild–moderate PID 14d (+ e.g. cephalosporin)；UK: tablets not for initiating any SSTI or severe CAP (IV→PO step-down only; total CAP 7–14d, cSSSI 7–21d)<br>Missed dose: take unless \<8 h to next dose；never double (仿單/FDA 2.2)<br>⚠️ AECB / acute sinusitis: reserve for no alternative (TFDA 特殊警語；FDA 1.6/1.7)；UK SmPC 4.1: all indications only when first-line antibiotics are inappropriate<br>stocked: Mosflow 400 mg tab (MOS04), Floxsafe 400 mg tab (FLO02 公費)

**Why:** The column is empty. All three labels give 400 mg once daily with no other strength. Durations come from the stocked products' TW inserts, with the US and UK values added. Both tablet products are covered.

**Sources:** Mosflow TW insert 3.1 用法用量/治療期 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Floxsafe TW insert 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F; US FDA label (Chartwell) 2.1 Table 1, 2.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC Avelox 4.2 — https://www.medicines.org.uk/emc/product/6771/smpc

### A2 · Renal dose, HD, CRRT

No adjustment at any CrCl (incl. CrCl <30 mL/min/1.73m²), HD or CAPD — Mosflow/Floxsafe 仿單 3.3；US FDA 8.6；UK SmPC 4.2 (PK not significantly altered in renal impairment/ESRD)<br>CRRT (no label data): 400 mg q24h — CVVHDF in anuric ICU pts, PK comparable to healthy subjects (Fuhrmann 2004, PMID 15347636; IV moxifloxacin, n=9)；EDD: standard 400 mg/d (Czock 2006, PMID 17699357)

**Why:** The column is empty. All labels agree on no adjustment, including HD and CAPD. No label covers CRRT, so a PubMed source is used. I verified both PMIDs with esummary and efetch. The abstracts recommend the standard 400 mg once-daily dose. Both studies used IV moxifloxacin, so the note says so.

**Sources:** Mosflow TW insert 3.3 腎功能受損的病人 & 11 藥動學 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; US FDA label 8.6 Renal Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.2 Renal/hepatic impairment — https://www.medicines.org.uk/emc/product/6771/smpc; Fuhrmann V et al. J Antimicrob Chemother 2004;54:780-4, PMID 15347636 — https://pubmed.ncbi.nlm.nih.gov/15347636/; Czock D et al. Clin J Am Soc Nephrol 2006;1:1263-8, PMID 17699357 — https://pubmed.ncbi.nlm.nih.gov/17699357/

### A3 · Hepatic dose

No adjustment (仿單 3.3；US FDA 8.7: Child-Pugh A–C)；caution — cirrhosis may ↑QT → monitor ECG (FDA 5.6；仿單: 肝硬化且無法排除QT延長者須特別注意)<br>UK SmPC 4.3: contraindicated in Child-Pugh C or transaminases >5×ULN<br>Fulminant hepatitis/liver failure reported → stop if hepatic symptoms (仿單 5.1；SmPC 4.4)

**Why:** The column is empty. The TW and US labels say no adjustment, with QT caution in cirrhosis. The UK SmPC is stricter and contraindicates use in Child-Pugh C or transaminases above 5× ULN, so I note it alongside.

**Sources:** Mosflow TW insert 3.3, 5.1 心臟疾病/肝膽系統 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; US FDA label 8.7 Hepatic Impairment, 5.6 QT Prolongation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.3 Contraindications, 4.4 Severe liver disorders — https://www.medicines.org.uk/emc/product/6771/smpc

### A4 · Pediatric dose

Not established <18 y (US FDA 8.4；仿單 3.3: 小孩及成長中青少年療效及安全性尚未建立 — 參見禁忌)；juvenile-animal arthropathy<br>UK SmPC 4.2/4.3: contraindicated <18 y<br>Peds cIAI trial (3 mo–<18 y): cure 83.9% vs 95.5% comparator；QT prolongation 9.3% (FDA 8.4)

**Why:** The column is empty. No label gives a pediatric dose. The US and TW labels say safety and efficacy are not established, and the UK SmPC contraindicates use under 18.

**Sources:** US FDA label 8.4 Pediatric Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.2 Paediatric population, 4.3 — https://www.medicines.org.uk/emc/product/6771/smpc; Mosflow TW insert 3.3 小孩和青少年, 6.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### A5 · Indications

CAP, SSTI, cSSTI, cIAI, Pelvic

**Why:** The column is empty. CAP, uncomplicated and complicated skin infection, and cIAI are in the US label and both TW inserts. Pelvic (mild–moderate PID) is in the UK SmPC 4.1 only, which counts as approved under the ground rules. The TW inserts do not list PID, though they carry PID warnings. Acute sinusitis, AECB and plague have no matching option, so they go in Notes. Do not add UTI/cUTI: no label lists them, and the TW boxed warning mentions UTI only as a class statement. All five options exist in the schema.

**Sources:** US FDA label 1.1–1.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.1 Therapeutic indications — https://www.medicines.org.uk/emc/product/6771/smpc; Mosflow TW insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### A6 · Coverage

MSSA, Streptococcus, E. faecalis, E.coli, Klebsiella, Enterobacter, Proteus, Haemophilus, Bacteroides, Anaerobes, Mycoplasma, Chlamydia, Legionella, Mycobacteria

**Why:** The column is empty. These organisms are listed in FDA 12.4 (clinical and in-vitro activity) and UK SmPC 5.1 (commonly susceptible):<br>- MSSA, S. pneumoniae including MDRSP, S. pyogenes and S. anginosus/constellatus<br>- E. faecalis (FDA cIAI pathogen; SmPC says acquired resistance may be a problem)<br>- E. coli, K. pneumoniae, E. cloacae, P. mirabilis, H. influenzae<br>- B. fragilis/thetaiotaomicron, Peptostreptococcus, C. perfringens, Fusobacterium, Prevotella<br>- M. pneumoniae, C. pneumoniae, L. pneumophila<br><br>Leave out:<br>- Pseudomonas: SmPC 5.1 says inherently resistant.<br>- MRSA: not recommended in the SmPC 4.4 and TW 5.1.<br>- Neisseria: the SmPC flags N. gonorrhoeae resistance above 50% in some countries.<br>- Mycobacteria: no label indication.<br><br>All the proposed options exist in the schema.

**Sources:** US FDA label 12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 5.1 Pharmacodynamic properties (susceptibility table) — https://www.medicines.org.uk/emc/product/6771/smpc; Mosflow TW insert 10.2 體外感受性數據 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### A7 · Side Effects

GI, QTc prolong, CNS, neuropathy, dysglycemia, LFT↑, photosensitivity, SJS/TEN, DRESS, hematologic, AKI

**Why:** The column is empty. The most common reactions are nausea, diarrhoea, headache and dizziness (FDA 6, at least 3%). Each other tag has a label source:<br>- QT: FDA 5.6<br>- Peripheral neuropathy: FDA 5.3<br>- CNS/psychiatric effects: FDA 5.4<br>- Dysglycaemia: FDA 5.12<br>- Photosensitivity: FDA 5.13<br>- Hepatitis and fulminant hepatitis: FDA 5.7, TW 5.1<br>- SJS/TEN: FDA 5.7, TW<br>- DRESS: SmPC 4.4<br>- Anaemia, thrombocytopenia, leukopenia: FDA 5.7<br>- Interstitial nephritis and acute renal failure: FDA 5.7<br><br>Tendinopathy, MG exacerbation, aortic aneurysm, CDI and Kounis have no option, so they go in Notes. All the proposed options exist.

**Sources:** US FDA label 5.3–5.13, 6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.4 (SCARs incl. DRESS) — https://www.medicines.org.uk/emc/product/6771/smpc; Floxsafe TW insert 5, 8 副作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F

### A8 · Monitor

ECG, electrolyte, LFT, neuro, CNS, PT/INR

**Why:** The column is empty.<br>- ECG: QT risk, and FDA 5.6 says to monitor ECG in cirrhosis.<br>- Electrolytes (K/Mg): uncorrected hypokalaemia or hypomagnesaemia must be avoided.<br>- LFT: risk of fulminant hepatitis.<br>- Neuro/CNS: neuropathy and psychiatric effects.<br>- PT/INR: with warfarin (FDA 7.2).<br><br>Blood glucose in diabetics has no option, so it goes in Notes. Renal monitoring is not needed for dosing.

**Sources:** US FDA label 5.6, 7.2, 7.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; Mosflow TW insert 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### A9 · Mechanism

8-methoxy-fluoroquinolone; inhibits DNA gyrase (topoisomerase II) & topoisomerase IV → blocks DNA replication, transcription, repair, recombination; bactericidal, concentration-dependent

**Why:** The column is empty. The text matches FDA 12.4 and TW 10.1, and SmPC 5.1 confirms concentration-dependent killing.

**Sources:** US FDA label 12.4 Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; Mosflow TW insert 10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/6771/smpc

### A10 · Drug Interactions

Multivalent cations (Mg/Al antacids, sucralfate, Fe, Zn, multivitamins, didanosine buffered): US FDA 2.2/7.1 — take moxifloxacin ≥4 h before or ≥8 h after；UK SmPC 4.5 — ~6 h apart；仿單 — cation products ≥4 h before or 2 h after moxifloxacin (US interval is stricter than 仿單)；Ca supplements, food/dairy: no interaction<br>QT: avoid Class IA/III antiarrhythmics (FDA 7.5；仿單)；UK SmPC 4.3/4.5: contraindicated with QT-prolonging drugs (antipsychotics, TCAs, erythromycin IV, pentamidine, halofantrine, cisapride, etc.)；caution with K-lowering drugs (loop/thiazide diuretics, laxatives, corticosteroids, amphotericin B) & bradycardic drugs<br>Warfarin: ↑INR → monitor PT/INR；Antidiabetics/insulin: dysglycemia → monitor glucose；NSAIDs: ↑CNS stimulation/seizures；Corticosteroids: ↑tendon rupture (仿單: 避免併用)<br>Activated charcoal: ↓absorption >80%；Digoxin Cmax ↑~30% (no adjustment)<br>No CYP450 interactions (Phase II metabolism only — SmPC 5.2)；theophylline, cyclosporine, itraconazole, OCs, probenecid: no interaction

**Why:** The column is empty. The labels disagree on how far apart to space cations. The US label says 4 h before or 8 h after. The UK SmPC says about 6 h. The TW insert says cation products 4 h before or 2 h after. I propose the most conservative interval and show the others alongside. The UK SmPC goes further than the US label and contraindicates all QT-prolonging drugs.

**Sources:** US FDA label 2.2, 7.1–7.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.5, 5.2 — https://www.medicines.org.uk/emc/product/6771/smpc; Mosflow TW insert 7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### A11 · Pregnancy

懷孕禁用 — Mosflow/Floxsafe 仿單 (4 禁忌, 6.1) & UK SmPC 4.3/4.6: contraindicated (FQ cartilage damage in juvenile animals)<br>US FDA 8.1 (PLLR; no letter category): no human data; animal studies → may cause fetal harm (↓fetal weight, skeletal variations, fetal loss at maternally toxic doses)；advise of potential fetal risk

**Why:** The column is empty. Do not write the retired letter category C, which the hospital site uses. The stocked products' TW inserts and the UK SmPC contraindicate use in pregnancy.

**Sources:** Mosflow TW insert 4, 6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Floxsafe TW insert 4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F; US FDA label 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.3, 4.6 — https://www.medicines.org.uk/emc/product/6771/smpc

### A12 · Breastfeeding

LactMed: no human data；acceptable with infant monitoring (diarrhea, thrush/diaper rash), but preferably use an alternative with data (ciprofloxacin, levofloxacin)<br>⚠️ 仿單 (Mosflow/Floxsafe) & UK SmPC 4.3/4.6: 哺乳禁用 contraindicated；US FDA 8.2: unknown if in human milk — weigh benefit vs risk

**Why:** The column is empty. This follows the format of the existing levofloxacin and ciprofloxacin entries, with LactMed first and the stricter label statements after it.

**Sources:** LactMed Moxifloxacin NBK501040 (rev. 2026-04-15) — https://www.ncbi.nlm.nih.gov/books/NBK501040/; Mosflow TW insert 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/6771/smpc; US FDA label 8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b

### A13 · Notes

Respiratory FQ: S. pneumoniae (incl. MDRSP), atypicals & anaerobes (B. fragilis → cIAI)；NO Pseudomonas (UK SmPC 5.1: inherently resistant)；not recommended for MRSA (仿單/SmPC 4.4)；ESBL strains commonly FQ-R (SmPC 5.1)<br>⚠️ FQ 加框警語: tendinitis/rupture, peripheral neuropathy, CNS/psychiatric effects — may be disabling/irreversible；avoid if prior serious FQ reaction；AECB、急性鼻竇炎 僅限無其他替代時使用 (TFDA 特殊警語；FDA 1.6/1.7；UK SmPC 4.1: all indications)<br>重症肌無力患者應避免使用 (仿單)<br>QT: avoid known QT prolongation, uncorrected hypoK/hypoMg, clinically significant bradycardia, acute myocardial ischemia (FDA 5.6/仿單)；UK SmPC 4.3 also contraindicates HFrEF & prior symptomatic arrhythmia<br>禁忌 UK SmPC 4.3 also: \<18 y, prior quinolone-related tendon disorder, Child-Pugh C / transaminases \>5× ULN<br>Aortic aneurysm/dissection risk (elderly)；UK: also valve regurgitation<br>糖尿病人監測血糖 (dysglycemia, esp. elderly on SU/insulin)<br>CDI；Kounis syndrome (仿單)；false-negative Mycobacterium culture (仿單/SmPC 4.4)<br>Other indications (no tag): acute bacterial sinusitis, AECB (all labels)；plague Rx/PEP (US only)；PID mild–moderate (UK only — combine with e.g. cephalosporin, FQ-R N. gonorrhoeae)<br>TB (off-label): 4-month rifapentine–moxifloxacin regimen for DS pulmonary TB (CDC 2022, PMID 35202353)；later-generation FQ in DR-TB (ATS/CDC/ERS/IDSA 2019, PMID 31729908)<br>Stock: Mosflow 400 mg tab (MOS04；衛署藥製字第057910號) / Floxsafe 400 mg tab (FLO02 公費；衛部藥輸字第026701號)

**Why:** The column is empty. Notes holds the boxed warning, the QT and MG cautions, and items that have no multi-select option: sinusitis, AECB, plague, tendon problems, glucose monitoring and Kounis syndrome. It follows the bilingual style of the other FQ entries. It also says no Pseudomonas, which is the main spectrum difference from ciprofloxacin and levofloxacin.

**Sources:** US FDA label 1.6, 1.7, 5.1–5.13 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.1, 4.3, 4.4, 5.1 — https://www.medicines.org.uk/emc/product/6771/smpc; Mosflow TW insert 特殊警語, 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Floxsafe TW insert 5 (Kounis syndrome) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F

### A14 · Category

Fluoroquinolone (respiratory; 8-methoxy)

**Why:** "Fluoroquinolone" is correct, so this change is optional. It would match the owner's levofloxacin entry, "Fluoroquinolone (3rd generation / respiratory)". "8-methoxy" is the label's own term (TW 10.1). I did not use a generation number because no label states one.

**Sources:** Mosflow TW insert 10.1 (8-methoxy-fluoroquinolone) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; UK SmPC 5.1 (ATC J01MA14) — https://www.medicines.org.uk/emc/product/6771/smpc

### A16 · Page body

## References<br>- US FDA label, moxifloxacin tablets (Chartwell; DailyMed setid 656f582c-ecba-4ec8-9420-9562114d889b; sec 1, 2.1–2.2, 4, 5, 6, 7, 8.1, 8.2, 8.4, 8.6, 8.7, 12.4): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b<br>- UK SmPC, Avelox 400 mg film-coated tablets, eMC 6771 (rev 20/05/2024; sec 4.1–4.6, 5.1, 5.2): https://www.medicines.org.uk/emc/product/6771/smpc<br>- Taiwan 仿單 Mosflow 400 mg 衛署藥製字第057910號 (TFDA, 2023-06-06 v2; 特殊警語, sec 2, 3.1, 3.3, 4, 5.1, 6.1, 6.2, 7, 10): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F<br>- Taiwan 仿單 Floxsafe 400 衛部藥輸字第026701號 (TFDA, 2025-05-22 v6): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F<br>- LactMed: Moxifloxacin, NBK501040 (rev 2026-04-15): https://www.ncbi.nlm.nih.gov/books/NBK501040/<br>- Fuhrmann V et al. Moxifloxacin PK during CVVHDF. J Antimicrob Chemother 2004;54:780-4, PMID 15347636: https://pubmed.ncbi.nlm.nih.gov/15347636/<br>- Czock D et al. Moxifloxacin/levofloxacin PK during EDD. Clin J Am Soc Nephrol 2006;1:1263-8, PMID 17699357: https://pubmed.ncbi.nlm.nih.gov/17699357/<br>- CDC Interim Guidance: 4-month rifapentine–moxifloxacin regimen for DS pulmonary TB. MMWR 2022, PMID 35202353: https://pubmed.ncbi.nlm.nih.gov/35202353/<br>- Nahid P et al. ATS/CDC/ERS/IDSA Treatment of Drug-Resistant TB. Am J Respir Crit Care Med 2019, PMID 31729908: https://pubmed.ncbi.nlm.nih.gov/31729908/

**Why:** The body is blank. All the data belongs in the columns, so a body is not required. A short list of source links would help later re-verification, but only add it if the owner's other entries have one. No storage or stability details.

**Sources:** TFDA insert pages as listed; US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b

### B1 · Adult dose

<span color="blue">`PO`</span> 400 mg QD for all indications; do not exceed (QT prolongation rises with concentration)<br>Mosflow/Floxsafe 仿單: AECB 5d*；CAP 10d；急性鼻竇炎 7d*；SSTI 非複雜性 7d / 複雜性 7–21d；cIAI 5–14d<br>US FDA: CAP 7–14d；ABS 10d*；ABECB 5d*；uSSSI 7d；cSSSI 7–21d；cIAI 5–14d；Plague (treatment & prophylaxis) 10–14d<br>UK SmPC: AECOPD/bronchitis 5–10d；CAP (non-severe) 10d；ABS 7d；mild–moderate PID 14d (+ e.g. cephalosporin unless FQ-R N. gonorrhoeae excluded)；UK: tablets not for initiating SSTI or severe CAP<br>*僅限無其他替代時使用 (TW 特殊警語；FDA 1.6–1.7)；UK SmPC 4.1: all indications only when first-line antibiotics are inappropriate<br>With or without food；missed dose: take unless \<8h to next dose<br>stocked: Mosflow 400 mg tab (MOS04)、公費 Floxsafe 400 mg tab (FLO02)

**Why:** The column is empty. I re-checked every number against the labels. TW §3.1 (both inserts) gives one 400 mg tablet once daily: AECB 5 d, CAP 10 d, acute sinusitis 7 d, SSTI 7 d uncomplicated / 7–21 d complicated, cIAI 5–14 d; 'missed dose: take unless <8 h to next dose'. US §2.1 Table 1: CAP 7–14, uSSSI 7, cSSSI 7–21, cIAI 5–14, plague 10–14, ABS 10, ABECB 5. UK SmPC 4.2 gives AECOPD 5–10 d (the brief left out the SmPC range), CAP 10 d, ABS 7 d and PID 14 d. SmPC 4.1 adds the restriction to 'first-line antibiotics inappropriate', the need to combine with another agent for PID, and that the tablets are only for completing an IV course in cSSSI/severe CAP. Only tablets are stocked.

**Sources:** Taiwan 仿單 Mosflow §3.1 用法用量 & 特殊警語: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Taiwan 仿單 Floxsafe §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F; US FDA label sec 1.6–1.7, 2.1 Table 1, 2.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.1, 4.2: https://www.medicines.org.uk/emc/product/6771/smpc

### B2 · Renal dose, HD, CRRT

No adjustment at any CrCl (含 CrCl \<30 mL/min/1.73m²)、HD、CAPD (Mosflow/Floxsafe 仿單 3.3；FDA 2 & 8.6；UK SmPC 4.2)；no supplemental dose<br>CRRT (CVVHDF; no label data): 400 mg q24h, no change (Fuhrmann 2004 JAC, PMID 15347636; IV moxifloxacin in anuric ICU pts)<br>SLED/EDD: 400 mg q24h (Czock 2006 CJASN, PMID 17699357)

**Why:** The column is empty. All three labels agree there is no adjustment. TW §3.3: '對於任何程度腎功能受損的病人(包括肌酸酐清除率小於30ml/min/1.73m²)及長期透析的病人，例如血液透析和攜帶式連續腹膜透析，都不需調整劑量'. US 8.6 says no adjustment 'including those patients requiring HD or CAPD'. SmPC 4.2 says the same, and SmPC 5.2 adds that the inactive M2 glucuronide rises up to 2.5× at CrCl <30. No label covers CRRT, so I searched PubMed. Fuhrmann 2004 (PMID 15347636, checked with esummary; abstract read): in anuric patients on CVVHDF, PK was comparable to patients without renal impairment, and the authors 'recommend 400 mg ... once per day'. Czock 2006 (PMID 17699357, checked; abstract read) found the standard 400 mg/d dose suitable for EDD. Both studies used the IV form; oral bioavailability is about 90% (FDA 12.3). The hospital FLO02 page's CRRT statement is consistent with this literature, but this text cites the papers rather than the hospital site.

**Sources:** Taiwan 仿單 Mosflow §3.3 腎功能受損的病人: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Taiwan 仿單 Floxsafe §3.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F; US FDA label sec 2 & 8.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.2, 5.2: https://www.medicines.org.uk/emc/product/6771/smpc; Fuhrmann V et al. J Antimicrob Chemother 2004;54:780-4, PMID 15347636: https://pubmed.ncbi.nlm.nih.gov/15347636/; Czock D et al. Clin J Am Soc Nephrol 2006;1:1263-8, PMID 17699357: https://pubmed.ncbi.nlm.nih.gov/17699357/

### B3 · Hepatic dose

No adjustment (Mosflow/Floxsafe 仿單 3.3；FDA 8.7: Child-Pugh A–C) — caution: hepatic insufficiency → metabolic disturbances → QT prolongation (FDA 8.7)；仿單: 肝硬化且無法排除 QT 延長者需特別注意<br>⚠️ UK SmPC 4.3: contraindicated in Child-Pugh C or transaminases \>5× ULN (limited data)<br>Fulminant hepatitis/liver failure reported (仿單 5.1；SmPC 4.4) → if jaundice, dark urine, bleeding tendency or encephalopathy: contact physician before continuing & check LFTs

**Why:** The column is empty, and the labels disagree. TW §3.3: '對於肝功能受損的病人，不需要調整劑量'; TW §5.1 lists '肝硬化且無法排除是否曾有QT延長的病人' among patients needing special caution. US 8.7 gives no adjustment for Child-Pugh A, B or C but says use 'with caution' because of QT prolongation. UK SmPC 4.3 contraindicates use in Child-Pugh C or transaminases >5× ULN. Following the ground rules, the stocked TW label comes first, with the UK restriction shown alongside. The fulminant-hepatitis warning is in TW §5.1 肝膽系統 and SmPC 4.4.

**Sources:** Taiwan 仿單 Mosflow §3.3, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; US FDA label sec 8.7: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.2, 4.3, 4.4 (Severe liver disorders): https://www.medicines.org.uk/emc/product/6771/smpc

### B4 · Pediatric dose

Not established — no pediatric dose<br>仿單: 小孩及成長中青少年療效及安全性尚未建立；FDA 8.4: pediatric cIAI trial (3 mo–\<18 y) — lower cure (83.9% vs 95.5% comparator), QT prolongation 9.3%, arthropathy in juvenile animals<br>UK SmPC 4.3: \<18 歲禁用

**Why:** The column is empty, and every label excludes children. Sources: TW §3.3 小孩和青少年 and §6.4; US 8.4 (cure 83.9% vs 95.5%, QT prolonged 28/301 = 9.3%); SmPC 4.2/4.3. No guideline gives a pediatric moxifloxacin dose that would justify off-label text here.

**Sources:** Taiwan 仿單 Mosflow §3.3, §6.4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; US FDA label sec 8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.2, 4.3: https://www.medicines.org.uk/emc/product/6771/smpc

### B5 · Indications

CAP, SSTI, cSSTI, cIAI, Pelvic

**Why:** The column is empty. Approved indications (FDA or SmPC): CAP (US 1.1, SmPC 4.1, TW §2); uncomplicated SSSI (US 1.2, TW 皮膚和軟組織的感染) → 'SSTI'; complicated SSSI (US 1.3; SmPC 4.1 as IV→PO step-down) → 'cSSTI'; cIAI (US 1.4, TW §2) → 'cIAI'; mild–moderate PID (SmPC 4.1 only, not in TW) → 'Pelvic'. Acute sinusitis, AECB/AECOPD and plague have no schema option and belong in Adult dose/Notes. Do not tag UTI/cUTI: no label lists a UTI indication, even though the TW boxed warning names cystitis/UTI generically. Only existing schema options are used.

**Sources:** US FDA label sec 1.1–1.7: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.1: https://www.medicines.org.uk/emc/product/6771/smpc; Taiwan 仿單 Mosflow §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### B6 · Coverage

MSSA, Streptococcus, E. faecalis, E.coli, Klebsiella, Proteus, Enterobacter, Haemophilus, Bacteroides, Anaerobes, Mycoplasma, Chlamydia, Legionella, Mycobacteria

**Why:** The column is empty. Tags come from US 12.4 (clinical and in-vitro lists) and SmPC 5.1. Clinical lists: MSSA; S. pneumoniae incl. MDRSP, S. pyogenes, S. anginosus/constellatus; E. faecalis; E. coli; K. pneumoniae; E. cloacae; P. mirabilis; H. influenzae/parainfluenzae; B. fragilis, B. thetaiotaomicron, C. perfringens, Peptostreptococcus; M. pneumoniae; C. pneumoniae. Legionella pneumophila is in vitro only (US) but 'commonly susceptible' in SmPC 5.1. Mycobacteria is not a labelled indication; it rests on guidelines: CDC 2022 4-month rifapentine–moxifloxacin regimen (PMID 35202353, checked; abstract confirms) and ATS/CDC/ERS/IDSA 2019 DR-TB (PMID 31729908, checked by esummary). The Cravit entry left the Mycobacteria tag out, so the owner may prefer to keep it in Notes only. Deliberately not tagged: Pseudomonas (SmPC 5.1 'inherently resistant'); MRSA (SmPC 4.4 'not recommended'; resistance >50% in some countries); Neisseria (N. gonorrhoeae resistance >50%); Acinetobacter (SmPC lists A. baumannii as susceptible, but no clinical indication and resistance is common); Staphylococcus generic/MRSE (S. epidermidis in vitro only).

**Sources:** US FDA label sec 12.4 Microbiology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 5.1 (susceptibility categories), 4.4 (MRSA): https://www.medicines.org.uk/emc/product/6771/smpc; Carr W et al. MMWR 2022;71:285-289, PMID 35202353: https://pubmed.ncbi.nlm.nih.gov/35202353/; Nahid P et al. Am J Respir Crit Care Med 2019;200:e93-e142, PMID 31729908: https://pubmed.ncbi.nlm.nih.gov/31729908/

### B7 · Side Effects

GI, CNS, QTc prolong, LFT↑, neuropathy, dysglycemia, photosensitivity, SJS/TEN, DRESS, hematologic, AKI

**Why:** The column is empty. Most common (≥3%): nausea, diarrhoea, headache, dizziness (US 6); TW §8.1 lists 常見: 噁心、腹瀉、頭痛、暈眩、轉胺酶升高、QT延長(低血鉀). Warnings: QT/TdP (US 5.6, SmPC 4.4, TW 心臟疾病); CNS/psychiatric/seizures (US 5.4); peripheral neuropathy (US 5.3); dysglycemia (US 5.12, SmPC 4.4, TW 血糖異常); photosensitivity (US 5.13; SmPC says lower risk); SJS/TEN (TW §5.1); DRESS/AGEP (SmPC 4.4 SCARs); fulminant hepatitis (TW, SmPC). Tendinopathy/rupture, aortic aneurysm/dissection, MG exacerbation, CDAD and Kounis syndrome have no option; put them in Notes. All tags used exist in the schema.

**Sources:** US FDA label sec 5.1–5.13, 6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.4, 4.8: https://www.medicines.org.uk/emc/product/6771/smpc; Taiwan 仿單 Mosflow §5.1, §8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### B8 · Monitor

ECG, electrolyte, LFT, neuro, CNS, PT/INR

**Why:** The column is empty. ECG: QT prolongation; SmPC 4.4 says to stop and do an ECG if arrhythmia signs occur. electrolyte: uncorrected hypokalaemia/hypomagnesaemia (US 5.6, SmPC 4.3, TW). LFT: SmPC 4.4 says check LFTs if liver dysfunction is suspected (fulminant hepatitis). neuro: peripheral neuropathy and tendon symptoms. CNS: psychiatric effects and seizures. PT/INR: warfarin (US 7.2, SmPC 4.5, TW §7). Blood glucose in diabetics (US 7.3, TW 血糖異常) has no option; put it in Notes. No renal monitoring is needed for dosing.

**Sources:** US FDA label sec 5.3–5.6, 7.2–7.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.3, 4.4, 4.5: https://www.medicines.org.uk/emc/product/6771/smpc; Taiwan 仿單 Mosflow §5.1, §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F

### B9 · Mechanism

8-methoxy fluoroquinolone: inhibits DNA gyrase (topoisomerase II) & topoisomerase IV → blocks DNA replication, transcription, repair；bactericidal, concentration-dependent (MBC ≈ MIC)

**Why:** The column is empty. Sources: TW §10.1 ('8-methoxy-fluoroquinolone… 干擾topoisomerase II和IV… 殺菌力與濃度相關，最低殺菌濃度與最低抑菌濃度差不多'); US 12.4; SmPC 5.1.

**Sources:** Taiwan 仿單 Mosflow §10.1 作用機轉: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; US FDA label sec 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/6771/smpc

### B10 · Drug Interactions

Avoid: Class IA (quinidine, procainamide, disopyramide) & III (amiodarone, sotalol) antiarrhythmics (FDA 7.5；仿單)；UK SmPC 4.3/4.5: 禁併用 other QT-prolonging drugs (antipsychotics, TCAs, IV erythromycin, pentamidine, halofantrine, cisapride…)；caution K-lowering drugs (loop/thiazide diuretics, laxatives, corticosteroids, amphotericin B) & bradycardic drugs<br>Space multivalent cations (Mg/Al antacids, sucralfate, Fe, Zn/multivitamins, buffered didanosine): FDA 2.2 — moxifloxacin ≥4h before or ≥8h after；UK SmPC — ~6h apart；Mosflow/Floxsafe 仿單 — cation 須在 moxifloxacin 前4h 或後2h 給予；Ca supplements, dairy/food: no interaction<br>Activated charcoal: ↓absorption \>80%<br>Monitor: warfarin (INR↑)；insulin/sulfonylureas (dysglycemia)；corticosteroids (tendon rupture — 避免併用)；NSAIDs (CNS stimulation/seizures)<br>No CYP450 interactions (theophylline, cyclosporine, itraconazole, OCs, probenecid: none)；digoxin Cmax ↑30%, no action

**Why:** The column is empty. The spacing rule for cations differs between labels, and the brief gave only the US rule. US 2.2/7.1: 'at least 4 hours before or 8 hours after'. SmPC 4.5: 'interval of about 6 hours'. TW §7 (both inserts): '在使用制酸劑…含鐵或鋅的製劑時，至少必須在服用moxifloxacin之前四小時或之後兩小時才能給予'. The TW wording means the cation product is given ≥4 h before or ≥2 h after moxifloxacin, so it is less strict than the US rule. Following the US rule also satisfies the other two. The QT drug list is from SmPC 4.5 and TW §5.1; charcoal, digoxin and the no-interaction list are from TW §7 and SmPC 4.5; warfarin is US 7.2; antidiabetics US 7.3; NSAIDs US 7.4; corticosteroids TW §5.1 (故使用本藥應避免併用皮質類固醇).

**Sources:** US FDA label sec 2.2, 7.1–7.5: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.3, 4.5: https://www.medicines.org.uk/emc/product/6771/smpc; Taiwan 仿單 Mosflow §7 交互作用, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Taiwan 仿單 Floxsafe §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F

### B11 · Pregnancy

懷孕禁用 (Mosflow/Floxsafe 仿單 §4, §6.1；UK SmPC 4.3/4.6 — FQ cartilage toxicity in immature animals)<br>US FDA 8.1 (PLLR): no human data；animal studies — may cause fetal harm (↓fetal weight, skeletal variations, ↑fetal loss at maternally toxic doses)；advise of potential fetal risk

**Why:** The column is empty. Do not write 'Category C', which the hospital pages use: the FDA has retired letter categories. TW §4 禁忌 '懷孕和哺乳婦女'; TW §6.1 '本藥於懷孕期的使用是禁止的'. SmPC 4.6: 'must not be used in pregnant women'. US 8.1: 'may cause fetal harm… Advise pregnant women of the potential risk'.

**Sources:** Taiwan 仿單 Mosflow §4, §6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; UK SmPC 4.3, 4.6: https://www.medicines.org.uk/emc/product/6771/smpc; US FDA label sec 8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b

### B12 · Breastfeeding

LactMed: no human data；acceptable with infant monitoring (diarrhea, candidiasis/thrush), but an alternative with safety data is preferred (ciprofloxacin, levofloxacin)<br>⚠️ 哺乳禁用 (Mosflow/Floxsafe 仿單 §4, §6.2；UK SmPC 4.3/4.6)；US FDA 8.2: unknown if in human milk (rat milk ~0.03% of dose)；weigh benefits vs risk

**Why:** The column is empty. LactMed 'Summary of Use during Lactation': 'No information is available… acceptable in nursing mothers with monitoring of the infant… However, it is preferable to use an alternate drug'. LactMed 'Alternate Drugs to Consider' (systemic): ciprofloxacin, levofloxacin. TW §6.2: 'moxifloxacin於哺乳婦女是禁止的'. SmPC 4.6: 'breast-feeding is contraindicated'.

**Sources:** LactMed Moxifloxacin NBK501040 (rev 2026-04-15): https://www.ncbi.nlm.nih.gov/books/NBK501040/; Taiwan 仿單 Mosflow §4, §6.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/6771/smpc; US FDA label sec 8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b

### B13 · Notes

⚠️ FQ 加框警語 (TW 仿單/FDA): tendinitis/rupture, peripheral neuropathy, CNS/psychiatric effects — 可能長期、失能、不可逆；AECB、急性鼻竇炎 (及非複雜性膀胱炎/UTI) 僅限無其他替代時使用；曾有 FQ 嚴重不良反應者避免；重症肌無力避免<br>UK SmPC 4.1: all indications only when first-line antibiotics are inappropriate<br>禁忌 UK SmPC 4.3: \<18 y, prior quinolone tendon disorder, congenital/acquired QT prolongation, uncorrected hypokalaemia, clinically relevant bradycardia, HFrEF, prior symptomatic arrhythmia, Child-Pugh C/transaminases \>5× ULN；TW 仿單: 避免用於已知 QT 延長、未矯正低血鉀、併用 class IA/III<br>No Pseudomonas activity (SmPC 5.1 inherently resistant)；not for MRSA (SmPC 4.4)；FQ-R N. gonorrhoeae common (PID: + cephalosporin)；ESBL strains commonly FQ-R<br>F ≈91% (PO≈IV)；t½ ~12h；~19% excreted unchanged in urine (SmPC 5.2)；no UTI indication in any label<br>Aortic aneurysm/dissection & heart valve regurgitation risk (SmPC 4.4)；CDAD (FDA 5.10)；dysglycemia — monitor glucose in diabetics；Kounis syndrome (仿單)；may cause false-negative Mycobacterium cultures (SmPC 4.4；仿單)<br>Plague (US only) & PID (UK only) are not TW-approved indications<br>TB (off-label): 4-month rifapentine–moxifloxacin regimen for DS pulmonary TB (CDC 2022, PMID 35202353)；later-generation FQ in MDR-TB (ATS/CDC/ERS/IDSA 2019, PMID 31729908)<br>CAP: respiratory FQ is a monotherapy option (ATS/IDSA 2019, PMID 31573350)

**Why:** The column is empty. Every item has a label or guideline source. TW 特殊警語 and §5.1; US boxed warning/5.1–5.5; SmPC 4.1, 4.3, 4.4 (aortic/valve, MRSA, Mycobacterium culture interference, PID), 5.1 (Pseudomonas inherently resistant, ESBL footnote, N. gonorrhoeae >50%), 5.2 (urine ~19% unchanged; F ~91%; t½ ~12 h); TW §8.1 (Kounis syndrome, in both inserts). The PMIDs were checked with esummary: 35202353 (Carr 2022 MMWR), 31729908 (Nahid 2019), 31573350 (Metlay 2019 ATS/IDSA CAP). Their abstracts do not spell out the moxifloxacin-specific CAP and MDR-TB recommendations, so the owner should confirm those lines against the full text. The Carr 2022 abstract does confirm the RPT–MOX–INH–PZA 4-month regimen. I left out the CDC 2021 STI guideline (M. genitalium) because cdc.gov was unreachable to confirm the wording.

**Sources:** Taiwan 仿單 Mosflow 特殊警語, §5.1, §8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; Taiwan 仿單 Floxsafe §5.1 (Kounis syndrome): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026701%E8%99%9F; US FDA label boxed warning, sec 5, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC 4.1, 4.3, 4.4, 5.1, 5.2: https://www.medicines.org.uk/emc/product/6771/smpc; Carr W et al. MMWR 2022;71:285-289, PMID 35202353: https://pubmed.ncbi.nlm.nih.gov/35202353/; Nahid P et al. AJRCCM 2019;200:e93-e142, PMID 31729908: https://pubmed.ncbi.nlm.nih.gov/31729908/; Metlay JP et al. AJRCCM 2019;200:e45-e67, PMID 31573350: https://pubmed.ncbi.nlm.nih.gov/31573350/

### B14 · Page body

Add a short monograph in the same layout as the Cravit (levofloxacin) page: '## MOXIFLOXACIN (Mosflow / Floxsafe) — Monograph', then ### Category, Mechanism, Indications (approved: CAP, uSSSI, cSSSI, cIAI, ABS*, AECB* [TW/US]; plague [US only]; mild–moderate PID [UK only]), Coverage (GP/GN/anaerobes/atypicals; no Pseudomonas, not MRSA), Adult Dose table (indication \| 400 mg PO QD \| TW / US / UK durations as in B1), Renal (no adjustment incl. HD/CAPD; CRRT 400 mg q24h per PMID 15347636), Hepatic (as B3), Pediatric (not established; UK contraindicated), Side Effects, Monitor, Drug Interactions (as B10), Pregnancy (B11), Breastfeeding (B12), Notes (B13), References (US DailyMed setid 656f582c…, UK eMC 6771, TW 仿單 057910 & 026701, LactMed NBK501040, PMIDs 15347636, 17699357, 35202353, 31729908, 31573350). No storage/stability section.

**Why:** Other entries, such as Cravit (levofloxacin), have a full monograph body with a References list; this new page is blank. The body should repeat the column content with a source on each line. Storage is left out at the owner's request.

**Sources:** US FDA label: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b; UK SmPC: https://www.medicines.org.uk/emc/product/6771/smpc; Taiwan 仿單 Mosflow: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; LactMed NBK501040: https://www.ncbi.nlm.nih.gov/books/NBK501040/

### B15 · Category

Fluoroquinolone (respiratory; 8-methoxy) — optional; 'Fluoroquinolone' alone is correct

**Why:** The current value is correct: US sec 1 calls it 'a fluoroquinolone antibacterial'; SmPC 5.1 'Quinolone antibacterials, fluoroquinolones, ATC J01MA14'; TW §10.1 '8-methoxy-fluoroquinolone'. The Cravit entry uses 'Fluoroquinolone (3rd generation / respiratory)'. Generation labels ('4th generation') are not in any label, so I do not propose one. Adding '(8-methoxy)' is optional, for consistency only.

**Sources:** Taiwan 仿單 Mosflow §10.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057910%E8%99%9F; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/6771/smpc

## Disputed (not applied; reviewers disagreed)

- **Abx (title)**: proposed "Mosflow / Floxsafe (Moxifloxacin)". Not applied because: The title is the owner's own naming choice, and their convention is one brand per title. The Cravit (levofloxacin) entry is titled with Cravit alone even though 平福樂欣 750 mg (LEV08) is also stocked; the second product is listed in the 'stocked:' line instead. Both FLO02 and MOS04 are confirmed on the hospital P4 pages, and the Adult dose 'stocked:' line (A1) and the Notes Stock line (A13) already name Floxsafe/FLO02. Renaming would change correct content without need, against the smallest-correct-edit rule.

## Apply log

- Category -> 'Fluoroquinolone (respiratory; 8-methoxy)'
- Mechanism (merged both proposals)
- Indications multi-select: CAP, SSTI, cSSTI, cIAI, Pelvic
- Coverage multi-select: MSSA, Streptococcus, E. faecalis, E.coli, Klebsiella, Proteus, Enterobacter, Haemophilus, Bacteroides, Anaerobes, Mycoplasma, Chlamydia, Legionella, Mycobacteria
- Side Effects multi-select: GI, QTc prolong, CNS, neuropathy, dysglycemia, LFT↑, photosensitivity, SJS/TEN, DRESS, hematologic, AKI
- Monitor multi-select: ECG, electrolyte, LFT, neuro, CNS, PT/INR
- Adult dose (merged TW/US/UK durations, reserve warning, missed dose, stocked products; blue PO tag)
- Renal dose, HD, CRRT (no adjustment incl. HD/CAPD; CRRT 400 mg q24h PMID 15347636; SLED/EDD PMID 17699357)
- Hepatic dose (no adjustment; QT caution; UK Child-Pugh C contraindication; fulminant hepatitis)
- Pediatric dose (not established <18 y; UK contraindicated; FDA 8.4 peds cIAI trial data)
- Drug Interactions (cation spacing FDA/UK/TW; QT drugs; warfarin/antidiabetics/NSAIDs/corticosteroids; charcoal; digoxin; no CYP450)
- Pregnancy (懷孕禁用 TW/UK; FDA 8.1 PLLR, no letter category)
- Breastfeeding (LactMed + 哺乳禁用 TW/UK + FDA 8.2)
- Notes (merged both proposals: spectrum caveats, boxed warning, MG, QT, UK contraindications, aortic/valve, dysglycemia, CDAD, Kounis, PK, other indications, TB off-label, CAP guideline, stock licence numbers)
- Page body: appended monograph in Cravit layout (Category, Mechanism, Indications, Coverage, Adult Dose table TW/US/UK, Renal, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions, Pregnancy, Breastfeeding, Notes) — no storage/stability
- Page body: References section (US DailyMed setid 656f582c…, UK eMC 6771, TW 仿單 057910 & 026701, LactMed NBK501040, PMIDs 15347636, 17699357, 35202353, 31729908, 31573350)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
