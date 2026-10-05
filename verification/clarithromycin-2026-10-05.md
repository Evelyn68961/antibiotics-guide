# New entry: Klaricid (Clarithromycin)

- **Notion entry:** [Klaricid (Clarithromycin)](https://app.notion.com/3f0c496dfff1811db68afeb648a9b744). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** KLA02 (Klaricid tab 500 mg), KLA03 (Klaricid inj 500 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/clarithromycin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH stocks two Klaricid (clarithromycin) products. KLA02 is Klaricid 500 mg film-coated tablet 開羅理黴素膜衣錠: NHI BC22420100, TW licence 衛署藥輸字第022420號, AbbVie S.r.l. (Italy). KLA03 is Klaricid IV 500 mg/vial 開羅理黴素靜脈注射劑 (凍晶注射劑): NHI BC26747277, TW licence 衛部藥輸字第026747號, Delpharm Saint Remy (France). Both are ATC J01FA09. The latest TW inserts are dated 113/12/03 (2024-12-03), version 4. Official sources used: (1) the US FDA clarithromycin tablets label on DailyMed, setid d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67 v2 (SportPharm repackager carrying the standard Aurobindo generic text; there is no US IV product); (2) the UK SmPC for clarithromycin 500 mg powder for infusion (eMC 9235, revised 22/07/2026); (3) the UK SmPC for clarithromycin 500 mg film-coated tablets (eMC 7072, Milpharm, revised 01/07/2026), which I fetched to check the renal and paediatric text; (4) both TW inserts; (5) LactMed NBK501207 (revised 2022-03-21). The Notion page (created 2026-10-05) contains only the title and Category = "Macrolide". Every other column and the page body are empty. Note on scope: the user asked for "task 2,3,5" without defining it. I did this read-only reviewer-A audit and edited nothing in Notion or in the repo.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Klaricid 500 mg tab: 250 mg q12h; severe infection 500 mg q12h; usually 5–14 d (CAP/sinusitis 6–14 d) (TW 仿單). US FDA: 250–500 mg q12h × 7–14 d<br>H. pylori triple therapy: 500 mg q12h + amoxicillin 1 g q12h + PPI (omeprazole 20 mg or lansoprazole 30 mg q12h) × 10–14 d (TW 仿單 / US FDA 2.3). Label dual therapy (500 mg TID + omeprazole 40 mg/d × 14 d) is outdated, not in current guidelines. Avoid empiric clarithromycin triple therapy where clarithromycin resistance is >15% or unknown unless susceptibility is confirmed (Maastricht VI, PMID 35944925; ACG 2024, PMID 39626064)<br>MAC treatment & prophylaxis: 500 mg q12h (treatment always combined with other anti-mycobacterials, e.g. ethambutol)<br>牙源性感染 (TW only): 250 mg q12h × 5 d<br>CAP (ATS/IDSA 2019, PMID 31573350): inpatient β-lactam + clarithromycin 500 mg q12h; outpatient monotherapy only where pneumococcal macrolide resistance <25%<br><span color="green">`IV`</span> Klaricid IV: 500 mg q12h (1 g/day; ≥18 y); reconstitute with 10 mL SWFI only, dilute to ~2 mg/mL (≥250 mL NS/D5W/LR), infuse over 60 min into a large proximal vein; 不可 IV push 或 IM. Switch to PO ASAP (TW: 臨床試驗僅 5 天 IV 經驗; UK: IV 2–5 d, total course ≤14 d)<br>With HIV protease inhibitors: max 1 g/day (US FDA 7 / TW 仿單 7)

**Why:** New entry; the column is empty. Doses come from the TW inserts of the two stocked products, with US and UK values alongside. Reconstitution and dilution are administration instructions, not storage or stability data, so they do not conflict with the owner's no-storage rule.

**Sources:** TW 仿單 Klaricid 500 mg tab 3.1 用法用量 (衛署藥輸字第022420號): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; TW 仿單 Klaricid IV 3.1 用法用量 / 3.2 調製方式 (衛部藥輸字第026747號): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; US FDA clarithromycin tablets label sections 2.2, 2.3, 2.5 and 7 (PIs >1000 mg/day): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC clarithromycin 500 mg infusion 4.2: https://www.medicines.org.uk/emc/product/9235/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> CrCl ≥30: no adjustment; CrCl <30: dose ÷2 → 250 mg QD (250 mg BID if severe), ≤14 d (TW 仿單 = UK oral SmPC); US FDA: CrCl <30 ↓50%<br>+ atazanavir/ritonavir: CrCl 30–60 ↓50%; CrCl <30 ↓75% (US FDA / TW 仿單)<br><span color="green">`IV`</span> TW Klaricid IV 仿單: 不建議腎功能不全病人使用 (avoid); UK IV SmPC: CrCl <30 → ½ normal dose (i.e. 500 mg/day)<br>HD/PD: not appreciably removed (US FDA 10 / TW 仿單 過量) → dose as CrCl <30, no supplemental dose<br>CRRT: no label data<br>Contraindicated: hepatic + renal impairment together (TW/UK); colchicine in renal impairment (US; TW/UK contraindicate colchicine in all patients)

**Why:** New entry. The tablet uses the hospital-stocked TW insert, which matches the UK oral SmPC; the US 50% reduction gives the same result. For the IV, the TW insert's 'avoid in renal impairment' takes priority under the source hierarchy, with the UK half-dose shown alongside. The overdose sections of the labels address HD/PD. No label covers CRRT, so it is stated as 'no label data'.

**Sources:** TW 仿單 Klaricid tab 3.1 腎功能不全病人 and 7 (ritonavir/atazanavir): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; TW 仿單 Klaricid IV 3.1 (不建議腎功能不全病人使用), 5.1, 4 禁忌 and 過量 (血液透析/腹膜透析): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; US FDA label 2.6 Table 2, 4.4, 8.6 and 10 Overdosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.2 Renal impairment and 4.3: https://www.medicines.org.uk/emc/product/9235/smpc; UK SmPC oral tablets 4.2 (250 mg once daily or 250 mg BID, ≤14 days): https://www.medicines.org.uk/emc/product/7072/smpc

### A3 · Hepatic dose

No adjustment if renal function is normal (US FDA 8.6; UK SmPC 4.4: moderate–severe hepatic impairment with normal renal function); use with caution (主要經肝代謝, TW 仿單 5.1)<br>Contraindicated: severe hepatic failure + renal impairment (TW tab 仿單 / UK; TW IV 仿單: 肝功能不全伴有腎功能不全); history of cholestatic jaundice/hepatic dysfunction with prior clarithromycin (US FDA 4.3); colchicine in hepatic impairment (US FDA 4.4; TW/UK: colchicine contraindicated in all patients)<br>Hepatotoxicity (hepatocellular/cholestatic hepatitis, rare fatal hepatic failure) → stop if anorexia, jaundice, dark urine, pruritus or tender abdomen (TW 仿單 5.1; US FDA 5.3)

**Why:** New entry. All three labels agree on no adjustment when renal function is normal, and on contraindication when hepatic and renal impairment occur together.

**Sources:** US FDA label 4.3, 5.3, 8.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.3 and 4.4 (Renal and hepatic impairment): https://www.medicines.org.uk/emc/product/9235/smpc; TW 仿單 Klaricid IV 4 禁忌 (肝功能不全伴有腎功能不全) and 5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### A4 · Pediatric dose

≥12 y: adult dose (TW tab 仿單; UK SmPC)<br><12 y: Klaricid tab 未在 <12 歲兒童研究 (TW) → oral suspension preferred (not stocked); US FDA (tablets, ≥6 mo): 7.5 mg/kg q12h (15 mg/kg/day) × 10 d, max adult dose; MAC (≥20 mo): 7.5 mg/kg q12h, max 500 mg q12h<br><span color="green">`IV`</span>: not recommended <12 y; insufficient data <18 y (UK SmPC / TW IV 仿單)

**Why:** New entry. The TW tablet insert restricts the tablet to patients 12 years and older. The US label gives weight-based dosing from 6 months. Neither the UK nor the TW IV label supports IV use in children.

**Sources:** TW 仿單 Klaricid tab 3.1 (成人及12歲以上兒童; 兒童: 尚未對小於12歲之兒童進行研究): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; TW 仿單 Klaricid IV 8 d. 兒童: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; US FDA label 2.4, 2.5, 8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.2 Paediatric population: https://www.medicines.org.uk/emc/product/9235/smpc

### A5 · Indications

["CAP", "Pneumonia", "SSTI"]

**Why:** Only these existing options match approved indications. The US label covers CAP and uncomplicated SSSI. The UK IV SmPC covers CAP and SSTI. Both TW inserts cover 下呼吸道感染 (支氣管炎、肺炎) and 皮膚及軟組織感染. Do not add HAP: the UK and TW labels say clarithromycin must be combined with other antibiotics for hospital-acquired pneumonia, which is not an indication. The remaining approved indications have no option and belong in Notes (A13): AECB, sinusitis, pharyngitis/tonsillitis, paediatric AOM, H. pylori eradication, MAC treatment/prophylaxis, other NTM, and odontogenic infection.

**Sources:** US FDA label 1.1–1.8: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.1: https://www.medicines.org.uk/emc/product/9235/smpc; TW 仿單 Klaricid tab 2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; TW 仿單 Klaricid IV 2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### A6 · Coverage

["MSSA", "Streptococcus", "Haemophilus", "Mycoplasma", "Chlamydia", "Legionella", "Mycobacteria"]

**Why:** US FDA 12.4 lists clinical activity against S. aureus, S. pneumoniae/pyogenes, H. influenzae/parainfluenzae, C. pneumoniae, M. pneumoniae and MAC. It lists Legionella as in-vitro activity only; UK SmPC 5.1 lists Legionella spp. as commonly susceptible. I chose MSSA over Staphylococcus because 12.4 says most MRSA isolates are resistant. Neisseria (N. gonorrhoeae), Listeria and B. fragilis/anaerobes appear in UK 5.1 but have no clinical indication, so I left them out. H. pylori, Moraxella catarrhalis and Bordetella have no option and go in Notes. MRSA should not be tagged.

**Sources:** US FDA label 12.4 Microbiology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 5.1 (commonly susceptible species; MRSA resistant): https://www.medicines.org.uk/emc/product/9235/smpc

### A7 · Side Effects

["GI", "LFT↑", "QTc prolong", "CNS", "ototoxicity", "thrombophlebitis", "SJS/TEN", "DRESS", "dysglycemia", "rhabdomyolysis", "AKI", "hematologic", "coagulopathy"]

**Why:** The most frequent effects are abdominal pain, diarrhoea, nausea, vomiting and dysgeusia. Other label support for each tag: hepatitis and LFT abnormalities; QT prolongation and TdP; psychiatric/CNS effects (insomnia, confusion, hallucination, convulsions); hearing loss, tinnitus and deafness; injection-site phlebitis with the IV (TW IV insert: 注射部位靜脈炎 is specific to IV); SJS/TEN and DRESS; hypoglycaemia with oral hypoglycaemics/insulin; rhabdomyolysis with statins; interstitial nephritis, renal failure, and AKI with CYP3A4-metabolised CCBs. All tags are existing options.

**Sources:** US FDA label 5.1–5.4, 6.1, 6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.8 (injection site phlebitis, IV-only ADR): https://www.medicines.org.uk/emc/product/9235/smpc; TW 仿單 Klaricid IV 8 副作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### A8 · Monitor

["ECG", "electrolyte", "LFT", "renal", "PT/INR"]

**Why:** The TW IV insert recommends 適當之心電圖監測 because of QT risk. Hypokalaemia/hypomagnesaemia is a contraindication (TW/UK), so K and Mg should be checked. Hepatotoxicity warnings support LFT. Renal function drives the dose and is affected by AKI with CCBs. Warfarin co-use requires frequent INR/PT checks.

**Sources:** TW 仿單 Klaricid IV 3.1 (建議心電圖監測) and 4 禁忌 (低血鉀/低血鎂): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; US FDA label 5.2, 5.3, 5.4 (warfarin INR), 2.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67

### A9 · Mechanism

Binds 50S ribosomal subunit → inhibits bacterial protein synthesis; active metabolite 14-OH-clarithromycin (2× more active vs H. influenzae, less active vs Mycobacteria). Resistance: 23S rRNA target modification (methylase) or efflux; cross-resistance with other macrolides, clindamycin/lincomycin

**Why:** New entry. I did not add 'bacteriostatic' because neither label states it.

**Sources:** US FDA label 12.4 Mechanism of Action / Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 5.1: https://www.medicines.org.uk/emc/product/9235/smpc

### A10 · Drug Interactions

Strong CYP3A4 + P-gp inhibitor.<br>Contraindicated: cisapride, pimozide, astemizole, terfenadine, domperidone; ergot alkaloids; lovastatin/simvastatin; lomitapide; colchicine (TW/UK all pts; US: renal/hepatic impairment); ticagrelor, ranolazine, ivabradine (TW/UK); oral midazolam (TW/UK); lurasidone (US)<br>Caution: other QT drugs (class IA/III antiarrhythmics, quetiapine, hydroxychloroquine/chloroquine); warfarin (↑INR, bleeding) & DOACs; atorvastatin ≤20 mg / pravastatin ≤40 mg (US/TW); CCBs (verapamil, amlodipine, diltiazem, nifedipine → hypotension, AKI, esp. elderly); digoxin; carbamazepine, theophylline, cyclosporine, tacrolimus (monitor levels); sulfonylureas/insulin/repaglinide/pioglitazone (hypoglycemia); triazolam/alprazolam/IV midazolam (sedation); PDE5 inhibitors; itraconazole (bidirectional)<br>HIV: atazanavir/ritonavir → ↓ clarithromycin dose in renal impairment, ≤1 g/day; zidovudine: separate PO doses (US ≥2 h, TW 4 h)<br>CYP3A inducers (rifampicin, rifabutin [↑rifabutin → uveitis], efavirenz, nevirapine) ↓ clarithromycin → consider alternative

**Why:** New entry. This is a condensed version of the contraindication and interaction lists in the three labels. Where the US list differs from the TW/UK lists (colchicine scope; ticagrelor/ranolazine/ivabradine and oral midazolam appear only in TW/UK; lurasidone only in US), each item is attributed to its label.

**Sources:** US FDA label 4.2–4.7, 5.4, 7 Table 8: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.3, 4.4, 4.5 (DOACs, ticagrelor, oral midazolam): https://www.medicines.org.uk/emc/product/9235/smpc; TW 仿單 Klaricid IV 4 禁忌, 5.1, 7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### A11 · Pregnancy

Not recommended unless no alternative therapy is appropriate (US FDA 8.1/5.7: animal malformations – CV anomalies in rats, cleft palate in mice); UK SmPC / TW 仿單: 未仔細衡量利益與風險不建議使用, esp. 1st trimester (TW) / 1st–2nd trimester (UK: observational studies ↑ miscarriage). (FDA letter categories retired)

**Why:** New entry. Uses the narrative label wording and no letter category, per the ground rules. The hospital site's 'C' is listed under hospital-database issues.

**Sources:** US FDA label 5.7 and 8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.4 and 4.6: https://www.medicines.org.uk/emc/product/9235/smpc; TW 仿單 Klaricid IV 5.1 and 6 懷孕: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### A12 · Breastfeeding

Acceptable (LactMed): low milk levels (infant ≈1.7–2% of maternal weight-adjusted dose; US FDA 8.2 / UK 4.6); monitor infant for diarrhea, thrush/diaper rash; unconfirmed ↑ infantile hypertrophic pyloric stenosis with maternal macrolide use in first 2 wk postpartum. TW 仿單: 授乳期間安全性尚未建立. Alternatives: azithromycin, erythromycin (LactMed)

**Why:** New entry. LactMed is the designated source for breastfeeding, and the label statements are given alongside.

**Sources:** LactMed Clarithromycin NBK501207 (rev 2022-03-21), Summary of Use during Lactation / Alternate Drugs: https://www.ncbi.nlm.nih.gov/books/NBK501207/; US FDA label 8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.6: https://www.medicines.org.uk/emc/product/9235/smpc; TW 仿單 Klaricid tab 6.2 哺乳: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F

### A13 · Notes

QT: contraindicated with QT prolongation/ventricular arrhythmia history or uncorrected hypoK/hypoMg (TW/UK); caution in CAD, bradycardia, elderly; IV → ECG monitoring (TW 仿單)<br>IV: 臨床經驗僅 5 天, switch to PO ASAP; never IV push/IM; injection-site phlebitis<br>Other approved indications (no tag): AECB, sinusitis, strep pharyngitis/tonsillitis (alternative to 1st-line), pediatric AOM (US), H. pylori eradication (PO triple therapy), MAC treatment/prophylaxis (HIV, CD4 ≤100), local NTM infection (M. chelonae/fortuitum/kansasii – TW), 牙源性感染 (TW tab)<br>Coverage not in tag list: H. pylori, Moraxella catarrhalis, Bordetella pertussis<br>Resistance: macrolide-resistant S. pneumoniae → susceptibility testing for CAP; HAP only in combination (UK/TW); MRSA usually resistant; H. pylori failure → test clarithromycin susceptibility (US)<br>US FDA: ↑ all-cause mortality ≥1 yr after treatment in CAD patients (5.5); myasthenia gravis exacerbation (5.8); CDAD

**Why:** New entry. Notes collects the important warnings and the indications and organisms that have no multi-select option, as the ground rules require.

**Sources:** TW 仿單 Klaricid IV 2, 3.1, 4, 5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; TW 仿單 Klaricid tab 2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; US FDA label 1, 5.2, 5.5, 5.6, 5.8, 12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK SmPC infusion 4.2, 4.4: https://www.medicines.org.uk/emc/product/9235/smpc

### A14 · Page body

A short monograph in the style of the existing entries (e.g. Menocik): ## CLARITHROMYCIN – Monograph, then sections mirroring the columns (Category: Macrolide, ATC J01FA09; Mechanism; Indications; Coverage; Adult dose table with PO and IV rows; Renal/HD/CRRT table; Hepatic; Pediatric; Side Effects; Monitor; Drug Interactions; Pregnancy; Breastfeeding; Notes). ### References: US FDA clarithromycin tablets, DailyMed setid d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67 (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67); UK SmPC clarithromycin 500 mg infusion, eMC 9235 (https://www.medicines.org.uk/emc/product/9235/smpc); UK SmPC clarithromycin 500 mg tablets, eMC 7072 (https://www.medicines.org.uk/emc/product/7072/smpc); TW 仿單 Klaricid 500 mg tab 衛署藥輸字第022420號 (https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F); TW 仿單 Klaricid IV 衛部藥輸字第026747號 (https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F); LactMed Clarithromycin NBK501207 (https://www.ncbi.nlm.nih.gov/books/NBK501207/); Maastricht VI PMID 35944925; ACG H. pylori 2024 PMID 39626064; ATS/IDSA CAP 2019 PMID 31573350; CLARICOR PMID 16339220. No storage or stability section.

**Why:** Other entries carry a monograph body with a References list, and this page is blank. At minimum the References list should be added so that every column can be traced to its source.

**Sources:** Existing entry style: Menocik (minocycline) page https://app.notion.com/p/20dc496dfff1802f8805f5746f32ae77; All official sources as listed in the proposed text

### A15 · Category

Macrolide (no change)

**Why:** Verified as correct. The UK SmPC 5.1 pharmacotherapeutic group is 'macrolide, ATC J01FA09', and the US label describes it as a macrolide antimicrobial. No edit is needed.

**Sources:** UK SmPC infusion 5.1: https://www.medicines.org.uk/emc/product/9235/smpc; US FDA label 1 / 11 Description: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67

### A16 · Renewed date

2026-10-05

**Why:** The other entries reviewed today carry Renewed date 2026-10-05. Set it once the content is filled in.

**Sources:** Existing entry style: Menocik (minocycline) page https://app.notion.com/p/20dc496dfff1802f8805f5746f32ae77

### B1 · Adult dose

<span color="blue">`PO`</span> Klaricid 500 mg tab (仿單): 250 mg q12h; severe infection 500 mg q12h; 5–14 days (CAP/sinusitis 6–14 days). US label: 250–500 mg q12h ×7–14 days<br>MAC/NTM treatment & prophylaxis: 500 mg q12h, always combined with other antimycobacterials (e.g. ethambutol) (仿單; US §2.5)<br>H. pylori triple therapy: 500 mg q12h + amoxicillin 1 g q12h + PPI (lansoprazole 30 mg q12h / omeprazole 20 mg q12h) ×10–14 days (仿單; US §2.3). Label dual therapy (500 mg TID + omeprazole 40 mg/day ×14 days) is still in the labels but is not a guideline-recommended regimen. Do not use empiric clarithromycin triple therapy where clarithromycin resistance is >15% or unknown (Maastricht VI, PMID 35944925; ACG 2024, PMID 39626064: bismuth quadruple preferred when susceptibility unknown); prefer bismuth quadruple therapy in high-resistance regions (Taipei Global Consensus II, PMID 40912906)<br>Odontogenic infection: 250 mg q12h ×5 days (仿單)<br>CAP, inpatient (ATS/IDSA 2019, PMID 31573350): β-lactam + clarithromycin 500 mg q12h. Outpatient monotherapy only where pneumococcal macrolide resistance is <25%<br><br><span color="green">`IV`</span> Klaricid IV 500 mg: 500 mg q12h (1 g/day; ≥18 y). Reconstitute with 10 mL sterile water for injection only, then dilute in ≥250 mL (≈2 mg/mL; NS/D5W/LR) and infuse over 60 min into a large proximal vein. Never IV push or IM (仿單 §3.1–3.2; UK §4.2)<br>Switch to PO as soon as possible: 仿單 clinical-trial IV experience covers only 5 days; UK: IV for 2–5 days, total course ≤14 days

**Why:** Column is empty. I checked the numbers against the 仿單 text myself. Tablet: 250 mg BID, up to 500 mg BID for severe infection, 5–14 days (6–14 for CAP and sinusitis); MAC 500 mg BID; triple therapy 10–14 days; dental 250 mg BID ×5 days. IV: 1 g/day in two doses, 60-min infusion at about 2 mg/mL into a large proximal vein, no rapid IV or IM, only 5 days of IV trial experience. The US Table 1 duration is 7–14 days, so I label it separately. Guideline caveats on H. pylori and CAP resistance are added because the labels do not cover resistance-guided use. I left out storage and stability. Reconstitution with water for injection is an administration step (other diluents cause precipitation), not storage.

**Sources:** 仿單 Klaricid FC tab 500mg 衛署藥輸字第022420號 §3.1 用法用量 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; 仿單 Klaricid IV 500mg 衛部藥輸字第026747號 §3.1–3.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; US FDA label §2.2–2.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.2 https://www.medicines.org.uk/emc/product/9235/smpc; Metlay 2019 ATS/IDSA CAP PMID 31573350 https://pubmed.ncbi.nlm.nih.gov/31573350/; Malfertheiner 2022 Maastricht VI PMID 35944925 https://pubmed.ncbi.nlm.nih.gov/35944925/; Chey 2024 ACG H. pylori PMID 39626064 https://pubmed.ncbi.nlm.nih.gov/39626064/; Liou 2025 Taipei Global Consensus II PMID 40912906 https://pubmed.ncbi.nlm.nih.gov/40912906/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (仿單 = UK oral SmPC): CrCl ≥30: no adjustment. CrCl <30: half dose → 250 mg q24h, or 250 mg q12h for severe infection; do not continue beyond 14 days (US Table 2: CrCl <30 ↓50%)<br>With atazanavir or ritonavir-boosted PI (仿單 §7; US Table 2): CrCl 30–60 ↓50%; CrCl <30 ↓75%. Do not give >1 g/day with protease inhibitors<br><span color="green">`IV`</span>: 仿單: 不建議腎功能不全病人使用 (avoid in renal impairment; switch to PO). UK IV SmPC §4.2: CrCl <30 → half dose (500 mg/day)<br>禁忌: severe hepatic failure + renal impairment (仿單/UK); colchicine (仿單/UK; US: in renal or hepatic impairment)<br><br>HD/PD: serum levels not appreciably affected by HD or PD (US §10) → dose as CrCl <30; no supplemental dose needed (timing after HD = convenience only, not label-stated)<br>CRRT: no label data and no published PK study found (PubMed search 2026-10-05) — flagged; mainly hepatic elimination → ID-pharmacist input. TDM: not routinely available; no label recommendation

**Why:** Column is empty. Per the ground rules I lead with the stocked product's Taiwan insert. The tablet insert gives CrCl <30 half dose (250 mg QD, or BID if severe), ≤14 days; this matches UK oral SmPC 4.2 and US Table 2. The IV insert says 不建議腎功能不全病人使用 (§3.1, §5.1); the UK IV value is shown alongside. Atazanavir/ritonavir adjustments come from 仿單 §7 and US Table 2. HD: US §10 says HD and PD do not appreciably affect clarithromycin levels. No CRRT data: a PubMed search for clarithromycin with CRRT/hemofiltration returned only case reports, so I propose no number.

**Sources:** 仿單 tab §3.1 腎功能不全病人 & §7 ritonavir/atazanavir https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; 仿單 IV §3.1, §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; UK oral SmPC §4.2 https://www.medicines.org.uk/emc/product/7072/smpc; UK IV SmPC §4.2, §4.3 https://www.medicines.org.uk/emc/product/9235/smpc; US FDA label §2.6 Table 2, §4.4, §10 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67

### B3 · Hepatic dose

No adjustment if renal function is normal (US §8.6; UK §4.4: moderate–severe hepatic impairment with normal renal function); mainly hepatic metabolism → use with caution (仿單 §5.1)<br>禁忌: severe hepatic failure + renal impairment (仿單 tab/UK; 仿單 IV: 肝功能不全伴腎功能不全); prior cholestatic jaundice/hepatic dysfunction with clarithromycin (US §4.3); colchicine in hepatic impairment (US §4.4)<br>Hepatitis (hepatocellular/cholestatic) and fatal hepatic failure reported → stop if anorexia, jaundice, dark urine, pruritus or tender abdomen develop (US §5.3; 仿單)

**Why:** Column is empty. All three labels agree: no adjustment with normal renal function, caution because of hepatic metabolism, contraindicated in combined hepatic and renal failure, and stop if hepatitis develops.

**Sources:** US FDA label §4.3, §5.3, §8.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.3, §4.4 https://www.medicines.org.uk/emc/product/9235/smpc; 仿單 tab §4, §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; 仿單 IV §4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### B4 · Pediatric dose

<span color="blue">`PO`</span> tab: ≥12 y: adult dose (仿單; UK oral SmPC). <12 y: Klaricid tablet not studied (仿單) → use paediatric suspension (not a stocked form here — verify)<br>US label (≥6 months): 15 mg/kg/day ÷ q12h ×10 days (max = adult dose); MAC treatment/prophylaxis (≥20 months): 7.5 mg/kg q12h, max 500 mg q12h<br><span color="green">`IV`</span>: not recommended <12 y (UK §4.2); insufficient data <18 y (仿單 §8 兒童; UK §4.2) — 仿單 IV dose is defined for ≥18 y only

**Why:** Column is empty. The Taiwan tablet insert says 本clarithromycin速放劑型尚未對小於12歲之兒童進行研究 and doses adults and children ≥12 y the same. The UK oral SmPC also restricts the tablet to ≥12 y. The US weight-based doses come from §2.4–2.5 and §8.4. For IV, both the 仿單 and UK say there are insufficient data under 18 y.

**Sources:** 仿單 tab §3.1 兒童 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; 仿單 IV §3.1 & 副作用 d. 兒童 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; UK oral SmPC §4.2 https://www.medicines.org.uk/emc/product/7072/smpc; UK IV SmPC §4.2 https://www.medicines.org.uk/emc/product/9235/smpc; US FDA label §2.4, §2.5, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67

### B5 · Indications

["CAP", "Pneumonia", "SSTI"]

**Why:** Only existing options are used. CAP: US §1.3 and UK IV §4.1. Pneumonia: 仿單 lists 下呼吸道感染 (支氣管炎、肺炎). SSTI: US §1.5 (uncomplicated), UK §4.1, and 仿單 (毛囊炎、蜂窩組織炎、丹毒). Do not tag cSSTI, because the US label covers only uncomplicated infections. Do not tag HAP: UK §4.4 says to use it only in combination for HAP, which is not an indication. Approved indications with no matching option go in Notes (B11): AECB, sinusitis, pharyngitis/tonsillitis, otitis media (paediatric), H. pylori, MAC treatment and prophylaxis (HIV, CD4 ≤100), other NTM, and odontogenic infection (仿單).

**Sources:** US FDA label §1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.1, §4.4 https://www.medicines.org.uk/emc/product/9235/smpc; 仿單 tab §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; 仿單 IV §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### B6 · Coverage

["Streptococcus", "MSSA", "Haemophilus", "Mycoplasma", "Chlamydia", "Legionella", "Mycobacteria"]

**Why:** US §12.4 lists S. aureus, S. pneumoniae, S. pyogenes, H. influenzae/parainfluenzae, M. catarrhalis, C. pneumoniae, H. pylori, MAC and M. pneumoniae, with Legionella as in vitro only. UK §5.1 lists MSSA, streptococci, Haemophilus, Legionella, Mycoplasma, Chlamydia and Mycobacterium spp. as commonly susceptible. Use MSSA, not Staphylococcus or MRSA: both labels say MRSA/ORSA is resistant. UK §5.1 also lists Listeria, N. gonorrhoeae and some anaerobes (incl. B. fragilis) as in vitro susceptible. I do not tag these, because there is no clinical indication and B. fragilis activity is not reliable (the US label lists only C. perfringens, Peptococcus, Prevotella and P. acnes, in vitro). The owner may add them if wanted. Organisms with no option go in Notes: Moraxella, H. pylori, Bordetella pertussis.

**Sources:** US FDA label §12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §5.1 https://www.medicines.org.uk/emc/product/9235/smpc

### B7 · Side Effects

["GI", "QTc prolong", "LFT↑", "CNS", "ototoxicity", "thrombophlebitis", "SJS/TEN", "DRESS", "dysglycemia", "rhabdomyolysis", "hematologic", "coagulopathy", "AKI"]

**Why:** Each tag maps to a label statement. GI (most common: abdominal pain, diarrhoea, nausea, vomiting, dysgeusia; US §6.1, UK §4.8). QTc prolong / TdP (US §5.2). LFT↑ / hepatitis (US §5.3). CNS: insomnia, headache, psychosis, hallucination, confusion, convulsion (UK §4.8). Ototoxicity: hearing impairment, tinnitus, deafness (UK §4.8). Thrombophlebitis: injection-site phlebitis, IV only (UK §4.8c). SJS/TEN and DRESS (US §5.1). Dysglycemia: hypoglycaemia with OHAs/insulin (US §5.4). Rhabdomyolysis with statins/colchicine (US §5.4, UK §4.8). Hematologic: leukopenia, neutropenia, thrombocytopenia, agranulocytosis (UK §4.8). Coagulopathy: INR/PT increased (UK §4.8; US §5.4 with warfarin). AKI: renal failure and interstitial nephritis (UK §4.8), plus AKI with CYP3A4-metabolised CCBs (US §5.4). Candidiasis and taste disturbance have no option; mention them in Notes or the body.

**Sources:** US FDA label §5, §6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.8 https://www.medicines.org.uk/emc/product/9235/smpc

### B8 · Monitor

["ECG", "electrolyte", "LFT", "renal", "PT/INR"]

**Why:** ECG: the IV 仿單 §3.1 advises 心電圖監測, and ECG is needed with quinidine/disopyramide (仿單 §7). Electrolyte: K and Mg, since use is contraindicated with hypokalaemia/hypomagnesaemia (UK/仿單 §4). LFT: hepatotoxicity (US §5.3). Renal: the dose depends on CrCl. PT/INR: with warfarin (US §5.4; 仿單). Blood glucose with OHAs/insulin (US §5.4) has no option, so put it in Notes.

**Sources:** 仿單 IV §3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F; US FDA label §5.2–5.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.3–4.4 https://www.medicines.org.uk/emc/product/9235/smpc

### B9 · Mechanism

Binds the 50S ribosomal subunit (23S rRNA) → blocks translocation → inhibits bacterial protein synthesis (US §12.4; UK §5.1). Active metabolite 14-OH-clarithromycin (2× more active than parent vs H. influenzae; additive) (UK §5.1). Resistance: 23S rRNA methylation/mutation, efflux pumps; cross-resistance with other macrolides, clindamycin, lincomycin (US §12.4; UK §5.1). β-lactamase has no effect (US §12.4). Strong CYP3A4 and P-gp inhibitor (US §5.4; 仿單 §7)

**Why:** Column is empty. Everything here is label text. I avoided 'bacteriostatic' and PK/PD index claims because no source in the hierarchy states them.

**Sources:** US FDA label §12.4, §5.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §5.1 https://www.medicines.org.uk/emc/product/9235/smpc

### B10 · Drug Interactions

禁忌 (contraindicated): cisapride, pimozide, astemizole, terfenadine, domperidone (QT/TdP); ergot alkaloids; lovastatin, simvastatin; lomitapide; colchicine (仿單/UK: all patients; US: renal/hepatic impairment); ticagrelor, ivabradine, ranolazine (仿單/UK); oral midazolam (UK/仿單); lurasidone (US)<br>Statins: US §5.4: atorvastatin ≤20 mg/day, pravastatin ≤40 mg/day; 仿單: lowest approved dose; consider fluvastatin<br>Warfarin: ↑INR/bleeding → monitor INR often; DOACs (dabigatran, rivaroxaban, apixaban, edoxaban): caution (UK/仿單)<br>OHAs/insulin: hypoglycaemia → monitor glucose<br>CYP3A4 CCBs (verapamil, amlodipine, diltiazem, nifedipine): hypotension, AKI (elderly)<br>Digoxin (P-gp): ↑levels/toxicity → monitor; quinidine/disopyramide: TdP → ECG + levels; avoid class IA/III antiarrhythmics and other QT-prolonging drugs; hydroxychloroquine/chloroquine: CV risk (UK)<br>Triazolam, IV midazolam, alprazolam: ↑sedation; quetiapine: ↑toxicity<br>CYP3A substrates (cyclosporine, tacrolimus, sirolimus, carbamazepine, theophylline, methylprednisolone, sildenafil/tadalafil): ↑levels → monitor/adjust (仿單 §7)<br>Rifampicin/rifabutin/phenytoin/carbamazepine/phenobarbital/St John's wort: ↓clarithromycin; rifabutin ↑ (uveitis)<br>HIV: atazanavir/ritonavir renal dose reduction (see Renal); clarithromycin >1 g/day not with PIs; zidovudine: separate oral doses (仿單 4 h; US ≥2 h)

**Why:** Column is empty. This is a condensed list of the contraindications and major interactions in US §4, §5.4 and §7, UK §4.3–4.5, and 仿單 §4 and §7. The contraindication sets differ between labels: colchicine is absolute in the UK/TW labels but limited to renal or hepatic impairment in the US; ticagrelor, ivabradine and ranolazine are contraindicated in the UK/TW only; lurasidone in the US only. The text says which label applies.

**Sources:** US FDA label §4, §5.4, §7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.3–4.5 https://www.medicines.org.uk/emc/product/9235/smpc; 仿單 tab §4, §7 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; 仿單 IV §4, §7 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### B11 · Notes

QT/TdP: avoid with known QT prolongation, ventricular arrhythmia, uncorrected hypokalaemia/hypomagnesaemia, bradycardia, class IA/III antiarrhythmics (US §5.2; 仿單/UK 禁忌). <span color="green">`IV`</span>: ECG monitoring advised (仿單)<br>Coronary artery disease: ↑ all-cause mortality ≥1 year after treatment (CLARICOR, PMID 16339220; US §5.5) → weigh benefit<br>Myasthenia gravis exacerbation (US §5.8); CDAD up to >2 months after therapy (US §5.6); monitor glucose with OHAs/insulin<br>Resistance: macrolide-resistant S. pneumoniae and S. aureus → susceptibility test (US §1.9; UK §4.4); MRSA resistant; cross-resistance with clindamycin (UK §5.1)<br>NTM/MAC: never monotherapy; ATS/ERS/ESCMID/IDSA 2020 (PMID 32628747) prefers azithromycin- over clarithromycin-based regimens for MAC; macrolide susceptibility testing<br>Also covers (no tag option): Moraxella catarrhalis, H. pylori, Bordetella pertussis (UK §5.1); approved for AECB, sinusitis, pharyngitis/tonsillitis, paediatric otitis media, H. pylori, MAC treatment/prophylaxis (HIV, CD4 ≤100), odontogenic infection (仿單)<br>HD/PD: not appreciably removed (US §10). TDM: not routine

**Why:** Column is empty. Notes carry the label warnings with no column of their own (QT, CAD mortality, MG, CDAD), the organisms and indications that have no tag option (per the ground rules), and guideline points on resistance and NTM. The CLARICOR PMID was checked with esummary: Jespersen CM, BMJ 2006. The NTM guideline PMID was checked: Daley CL, CID 2020.

**Sources:** US FDA label §1.9, §5.2, §5.5, §5.6, §5.8, §10 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.4, §5.1 https://www.medicines.org.uk/emc/product/9235/smpc; 仿單 tab §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022420%E8%99%9F; Jespersen 2006 CLARICOR PMID 16339220 https://pubmed.ncbi.nlm.nih.gov/16339220/; Daley 2020 ATS/ERS/ESCMID/IDSA NTM guideline PMID 32628747 https://pubmed.ncbi.nlm.nih.gov/32628747/

### B12 · Pregnancy

No FDA letter category (retired). US §8.1/§5.7: not recommended except in clinical circumstances where no alternative therapy is appropriate (animal data: cardiovascular anomalies in rats, cleft palate in mice at clinically relevant doses). UK §4.6/仿單 §6.1: safety not established; observational studies report ↑ miscarriage after 1st/2nd-trimester exposure; malformation data conflicting → do not use without carefully weighing benefit vs risk, esp. 1st trimester. 懷孕：除非無其他適當替代藥物，否則不建議使用

**Why:** Column is empty. This is narrative wording from all three labels. Do not write 'Category C': the hospital KLA02 page does, and it is outdated (see the hospital issues).

**Sources:** US FDA label §5.7, §8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; UK IV SmPC §4.4, §4.6 https://www.medicines.org.uk/emc/product/9235/smpc; 仿單 IV §5.1, §6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### B13 · Breastfeeding

Acceptable (LactMed NBK501207, rev. 2022-03-21): low milk levels; exclusively breastfed infant receives ~1.7% of maternal weight-adjusted dose (<1% of infant dose). Monitor infant for diarrhea, thrush/diaper rash. Unconfirmed signal: ↑ infantile hypertrophic pyloric stenosis with maternal macrolides in first 2 weeks postpartum. Alternatives: azithromycin, erythromycin (LactMed). UK §4.6: weigh benefit vs infant risk; 仿單: 授乳期間安全性尚未建立

**Why:** Column is empty. LactMed is the designated source and its summary was checked. The label positions are given alongside, in the same style as existing entries.

**Sources:** LactMed Clarithromycin NBK501207 https://www.ncbi.nlm.nih.gov/books/NBK501207/; UK IV SmPC §4.6 https://www.medicines.org.uk/emc/product/9235/smpc; US FDA label §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; 仿單 IV §6.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026747%E8%99%9F

### B14 · Page body

Add a body in the same template as the populated entries (e.g. Sulampi): ## Category (Macrolide, 14-membered; ATC J01FA09) / ## Mechanism (as B9) / ## Indications table (Label-approved: AECB, CAP, sinusitis, pharyngitis/tonsillitis, uncomplicated SSTI, paediatric AOM, MAC treatment/prophylaxis, H. pylori, odontogenic infection [仿單]; IV per 仿單: LRTI, URTI, SSTI, MAC/NTM \| Guideline: CAP combination with β-lactam [PMID 31573350]; NTM [PMID 32628747]) / ## Coverage table (as B6, with Moraxella, H. pylori, Bordetella; NOT covered: MRSA, Enterobacterales, Pseudomonas, macrolide-resistant pneumococci) / ## Adult Dose (PO and IV rows, as B1) / ## Renal Dose, HD, CRRT table (as B2) / ## Hepatic Dose / ## Pediatric Dose / ## Side Effects / ## Monitor / ## Drug Interactions table / ## Notes / ## Pregnancy / ## Breastfeeding / ## References: DailyMed setid d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67; eMC 9235 (IV) and 7072 (oral) SmPCs; 仿單 022420 and 026747 TFDA links; LactMed NBK501207; PMIDs 31573350, 32628747, 35944925, 39626064, 40912906, 16339220. No storage/stability section.

**Why:** Every comparable populated entry has a structured body with a References section. This entry has none. The content should mirror the sourced column text above.

**Sources:** Existing entry template: Sulampi page https://app.notion.com/p/255c496dfff180bdb0dde502763cb9b0; Sources as listed in B1–B13

## Apply log

- Adult dose: merged both reviewers' versions (PO standard, H. pylori triple therapy with resistance caveat citing PMIDs 35944925, 39626064, 40912906, MAC/NTM, odontogenic, CAP citing PMID 31573350, IV Klaricid 500 mg q12h with reconstitution and switch to PO, protease-inhibitor max 1 g/day)
- Renal dose, HD, CRRT: PO CrCl <30 half dose per 仿單/UK oral and US 50%; atazanavir/ritonavir 50%/75%; IV avoided per 仿單, half dose per UK; HD/PD not removed; CRRT no data (flagged); TDM not routine
- Hepatic dose: no adjustment if renal function normal; contraindications; hepatotoxicity stop criteria
- Pediatric dose: ≥12 y adult dose; <12 y use suspension (not stocked, verify) plus US 7.5 mg/kg q12h and MAC; IV not recommended <12 y, no data <18 y
- Indications multi-select: CAP, Pneumonia, SSTI
- Coverage multi-select: Streptococcus, MSSA, Haemophilus, Mycoplasma, Chlamydia, Legionella, Mycobacteria
- Side Effects multi-select: GI, QTc prolong, LFT↑, CNS, ototoxicity, thrombophlebitis, SJS/TEN, DRESS, dysglycemia, rhabdomyolysis, hematologic, coagulopathy, AKI
- Monitor multi-select: ECG, electrolyte, LFT, renal, PT/INR
- Mechanism: 50S/23S rRNA, 14-OH metabolite, resistance mechanisms, CYP3A4/P-gp inhibition
- Drug Interactions: merged contraindicated list and cautions (statins, warfarin/DOACs, OHAs, CCBs, digoxin/QT drugs, benzodiazepines, CYP3A substrates and inducers, HIV/zidovudine)
- Notes: QT, IV, CLARICOR (PMID 16339220), myasthenia gravis/CDAD, resistance, NTM (PMID 32628747), organisms with no tag option (H. pylori, Moraxella, Bordetella), indications with no tag option, HD/TDM
- Pregnancy: no FDA letter category; US/UK/仿單 wording incl. miscarriage signal
- Breastfeeding: LactMed acceptable, about 1.7–2% of maternal dose, infant monitoring, pyloric stenosis signal, alternatives, UK/仿單 wording
- Category: Macrolide left unchanged
- Renewed date set to 2026-10-05 (is_datetime 0)
- Page body: full monograph added in the Sulampi template (Category with ATC J01FA09, Mechanism, Indications table, Coverage table with NOT covered list, Adult Dose table PO/IV, Renal/HD/CRRT table, Hepatic, Pediatric table, Side Effects, Monitor, Drug Interactions table, Notes, Pregnancy, Breastfeeding) with no storage/stability section
- References section at end of body: DailyMed setid d836ae7e-fdbf-4dcb-a90d-ede1dcbc3e67, eMC 9235 and 7072, TFDA 仿單 022420 and 026747, LactMed NBK501207, PMIDs 31573350, 32628747, 35944925, 39626064, 40912906, 16339220 (all PMIDs checked with NCBI esummary)
- Fixed a body table cell where '+ atazanavir' had been turned into a bullet; it now reads 'With atazanavir / ritonavir'

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
