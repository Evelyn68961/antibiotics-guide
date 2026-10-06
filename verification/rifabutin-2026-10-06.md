# New entry: Mycobutin (Rifabutin)

- **Notion entry:** [Mycobutin (Rifabutin)](https://app.notion.com/3f1c496dfff1818cab0cf6f9736e94ec). Created 2026-10-06.
- **Hospital codes:** MYC07 (Mycobutin cap 150 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/rifabutin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH MYC07: Mycobutin 150 mg capsule (淨核膠囊), rifabutin 150 mg PO, NHI code BC20999100, ATC J04AB04. TFDA licence 衛署藥輸字第020999號 (輝瑞大藥廠 Pfizer; made by Pfizer Italia S.R.L.; licence issued 109-04-09, valid to 119-07-24; insert version CDS 20250611-1). The only dosage form stocked is the 150 mg capsule; there is no IV form. Sources: US generic label, ANI/Novitium rifabutin capsule, DailyMed setid baf8ec98-bd0c-4b87-a7ee-813335431b89 v3 (published Oct 05, 2026). I confirmed with the DailyMed API that no current Pfizer Mycobutin SPL exists; the only Mycobutin-named SPLs are from 2016 and 2011 repackagers. UK SmPC: Mycobutin 150 mg capsules, eMC 1088, revised 05/2026. LactMed: NBK501600, revised 2022-05-15. I checked the Notion page on 2026-10-06. Only Abx and Category are filled; every other column and the page body are empty.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 150 mg cap (淨核膠囊); TW 仿單: 一天一次, 兩餐間服用 (UK: any time, independent of meals; US: GI upset → 150 mg BID with food; may mix with applesauce)<br>• MAC prophylaxis (monotherapy): 300 mg QD. US: advanced HIV; UK: HIV with CD4 \<75/µL; TW: 免疫抑制病人 (說明: CD4 ≤200/µL). Rule out active TB first<br>• Pulmonary TB (combination, never monotherapy): TW: 新診斷 150 mg QD × 6 mo; MDR chronic TB 300–450 mg QD, 治療6個月直到無培養菌產生; UK: 150–450 mg QD for ≥6 mo<br>• NTM (MAC, M. xenopi; combination): 450–600 mg QD; UK: for up to 6 mo after cultures become negative; TW: 治療6個月直到無培養菌產生<br>• Treatment regimens: always combine with non-rifamycin antimycobacterials (TW/UK)<br>• With clarithromycin (or other macrolides) and/or fluconazole: reduce rifabutin dose (UK: may need ↓ to 300 mg/day); see Drug Interactions for ART dose changes

**Why:** The column is empty. The labels give doses for three indications, and the stocked product's TW insert gives separate doses for new pulmonary TB and MDR chronic TB. The hospital site gives only 300 mg/day.

**Sources:** TW 仿單 §3.1 用法用量 / §2 適應症 <說明>, 衛署藥輸字第020999號 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.1, §4.2 https://www.medicines.org.uk/emc/product/1088/smpc; US label DOSAGE & ADMINISTRATION, INDICATIONS & USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### A2 · Renal dose, HD, CRRT

<span color="green">`TW 仿單`</span> (院內品項) / UK SmPC: CrCl <30 → 劑量減半 (50% dose reduction required); CrCl ≥30 (mild–moderate): no adjustment<br>US label: CrCl <30 → consider 50% reduction only if toxicity is suspected; monitor closely for AEs (AUC ↑71% at CrCl <30, ↑41% at CrCl 30–61)<br>HD: no label dose; HD is not expected to enhance elimination (85% protein bound, Vss 8–9 L/kg, <10% excreted unchanged in urine — US Overdosage) → dose as CrCl <30, no supplemental dose implied<br>CRRT: no label or guideline data

**Why:** The column is empty. The TW insert (stocked product) and the UK SmPC both require halving the dose when CrCl is below 30. The US label only says to consider it if toxicity is suspected. Under the ground rules the TW insert takes precedence, with the US wording given alongside. HD is mentioned only in the US Overdosage section, and no source covers CRRT.

**Sources:** TW 仿單 §5.1 警語 (嚴重腎功能不全 CrCl<30 劑量需減半) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.4 https://www.medicines.org.uk/emc/product/1088/smpc; US label DOSAGE & ADMINISTRATION; CLINICAL PHARMACOLOGY Renal Impairment; OVERDOSAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### A3 · Hepatic dose

Mild hepatic impairment: no dose adjustment (US/UK/TW)<br>Severe: TW 仿單 — 應考慮減低劑量; UK — use with caution in severe liver insufficiency<br>US: PK in moderate–severe impairment not known<br>Monitor LFT periodically (TW/UK)

**Why:** The column is empty. All three labels give hepatic guidance, and the TW insert specifically says to consider a lower dose in severe impairment.

**Sources:** TW 仿單 §5.1 警語/注意事項; UK SmPC §4.4 https://www.medicines.org.uk/emc/product/1088/smpc; US label DOSAGE & ADMINISTRATION; CLINICAL PHARMACOLOGY Hepatic Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### A4 · Pediatric dose

No label-approved pediatric dose: TW 仿單 — 兒童使用資料不足; UK — inadequate data, no posology recommendation; US — safety/efficacy for MAC prophylaxis in children not established<br>US: limited data in 22 HIV+ children on multidrug MAC therapy (mean 18.5 mg/kg at 1 y, 8.6 mg/kg at 2–10 y, 4.0 mg/kg at 14–16 y); no evidence that doses >5 mg/kg/day are useful<br>UK §5.2: children 0.67–15 y on LPV/r — 2.5 mg/kg/day gave exposure similar to adult 150 mg QD<br>Corneal deposits reported in HIV+ children (asymptomatic)

**Why:** The column is empty. No label gives a pediatric dose, but all three describe the available data, and the US label sets a 5 mg/kg/day ceiling on demonstrated usefulness. I could not reach guideline pediatric doses (ATS 2016 full text is not in PMC), so I am not proposing any.

**Sources:** TW 仿單 §3.3 特殊族群用法用量; UK SmPC §4.2, §5.2 https://www.medicines.org.uk/emc/product/1088/smpc; US label PEDIATRIC USE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### A5 · Indications

Tuberculosis, NTM

**Why:** The column is empty. Pulmonary TB is approved in the UK SmPC §4.1 and TW §2. NTM is approved in the UK §4.1 (MAC, M. xenopi treatment), and MAC prophylaxis is approved in the US, UK and TW. There is no 'MAC prophylaxis' tag; NTM is the closest. Do not use 'HIV', which would imply HIV treatment, and do not use 'LTBI': the US Warnings say there is no evidence rifabutin is effective prophylaxis against M. tuberculosis. Put MAC prophylaxis in advanced HIV in Notes.

**Sources:** UK SmPC §4.1 https://www.medicines.org.uk/emc/product/1088/smpc; TW 仿單 §2 適應症; US label INDICATIONS & USAGE; WARNINGS (Tuberculosis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### A6 · Coverage

Mycobacteria

**Why:** The column is empty. The labels support M. tuberculosis, MAC and other NTM (M. xenopi, and in vitro M. kansasii, M. gordonae and M. marinum). TW §10.2 mentions Gram-positive and Gram-negative activity, but rifabutin has no approved non-mycobacterial use, so no other tags.

**Sources:** US label CLINICAL STUDIES – Microbiology (In Vitro Studies) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; UK SmPC §5.1; TW 仿單 §10.2

### A7 · Side Effects

GI, LFT↑, leukopenia, neutropenia, thrombocytopenia, anemia, hypersensitivity, CDAD, DRESS, SJS/TEN, AGEP, myopathy

**Why:** The column is empty. Each tag is an existing schema option and is supported by the labels: UK §4.8 (leukopenia very common; anaemia, rash, nausea, myalgia, pyrexia common; neutropenia, thrombocytopenia, uveitis, corneal deposits, jaundice/hepatic enzymes uncommon), US Table 3/4 and post-marketing, and the SCAR and CDAD warnings in all three labels. Uveitis, corneal deposits, orange-brown discolouration of body fluids, arthralgia/myalgia and flu-like syndrome have no schema option and go in Notes.

**Sources:** UK SmPC §4.8, §4.4 https://www.medicines.org.uk/emc/product/1088/smpc; US label ADVERSE REACTIONS, WARNINGS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; TW 仿單 §8.1, §5.1

### A8 · Monitor

CBC, LFT, eye exam

**Why:** The column is empty. TW §5.1 and UK §4.4 say to check WBC, platelets and liver enzymes periodically, and the US General Precautions say to consider periodic haematologic studies. Uveitis needs monitoring, with ophthalmology referral, especially with macrolides or azoles (all labels), so tag eye exam.

**Sources:** TW 仿單 §5.1; UK SmPC §4.4 https://www.medicines.org.uk/emc/product/1088/smpc; US label GENERAL PRECAUTIONS; WARNINGS (Uveitis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### A9 · Mechanism

Rifamycin; inhibits bacterial DNA-dependent RNA polymerase (not mammalian) (US/TW §10.1; US: not known whether it inhibits the enzyme in MAC). TW: also inhibits thymidine incorporation into DNA in rifampicin-resistant M. tuberculosis. Cross-resistance: US — rifampin-resistant M. tuberculosis is likely rifabutin-resistant; UK §5.1/TW §10.2 — 1/3–1/2 of RIF-R strains susceptible in vitro (incomplete) → use only with susceptibility results. Highly lipophilic; high intracellular (9× neutrophils, 15× monocytes) and lung concentrations; t½ 35–40 h (UK/TW), mean 45 h (US). Active metabolite 25-O-desacetyl-rifabutin. CYP3A inducer (2–3× weaker than rifampin, TW §7) and CYP3A substrate

**Why:** The column is empty. The labels give the mechanism, but they disagree on cross-resistance with rifampin, so both views are shown. The 'rely on susceptibility testing' phrase is my own clinical inference and is not quoted from a label; the reviewer can drop it.

**Sources:** US label CLINICAL STUDIES – Microbiology (Mechanism of Action, In Vitro); CLINICAL PHARMACOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; TW 仿單 §10.1, §10.2, §7, §11; UK SmPC §5.1, §5.2

### A10 · Drug Interactions

CYP3A inducer (weaker than rifampin) + CYP3A substrate (inhibitors ↑ rifabutin → uveitis, neutropenia)<br>禁忌併用 (CONTRAINDICATED): cabotegravir/rilpivirine long-acting injection (US/UK/TW). US Table 2 also lists delavirdine and voriconazole as CONTRAINDICATED (TW: delavirdine 不建議; UK/TW: voriconazole only if benefit \> risk, with vori maintenance ↑ to 350 mg PO q12h or 5 mg/kg IV q12h + CBC/uveitis monitoring)<br>Not recommended: bictegravir (Biktarvy), elvitegravir/cobicistat, oral rilpivirine (Odefsey), sofosbuvir-containing DAAs; etravirine + boosted PI (US: do not co-administer; TW: caution); bedaquiline (US/TW avoid; UK monitor)<br>Doravirine: ↑ doravirine dose per its label<br>Boosted PIs (ATV/r, DRV/r, LPV/r, FPV/r, SQV/r, TPV/r): ↓ rifabutin ≥75% → TW/US 150 mg every other day or 3×/week (UK: ATV/r, DRV/r 150 mg QD); TPV/r: rifabutin TDM (UK/TW). Ritonavir alone: choose another PI (UK/TW). Indinavir: rifabutin ½ dose + indinavir 1000 mg q8h; nelfinavir: rifabutin 150 mg QD + nelfinavir 1250 mg BID (US); amprenavir ↓50%; monitor AEs<br>↑ rifabutin: clarithromycin (AUC ↑75–77%), fluconazole (↑82%), posaconazole (↑72%; UK: avoid unless benefit \> risk), itraconazole (case report, uveitis) → ↓ rifabutin dose, monitor uveitis/CBC. Azithromycin: no PK interaction (US: consider an alternative to clarithromycin)<br>Rifabutin ↓: clarithromycin (~50%), itraconazole (70–75%), posaconazole (~49%), voriconazole, dapsone (27–40%), hormonal contraceptives (use non-hormonal method), tacrolimus; UK §4.5: may ↓ analgesics, anticoagulants, corticosteroids, cyclosporin, digitalis (not digoxin), oral hypoglycaemics, narcotics, phenytoin, quinidine (methadone: no significant effect)<br>p-aminosalicylic acid: separate by 8–12 h (UK)<br>ART/DAA → check https://www.hiv-druginteractions.org / https://www.hep-druginteractions.org

**Why:** The column is empty. Interactions are critical for this rifamycin. The source brief mentions only the long-acting cabotegravir/rilpivirine contraindication, but US Table 2 also marks delavirdine and voriconazole CONTRAINDICATED. The UK and TW labels permit voriconazole with a higher voriconazole dose. US/TW and UK give different dose reductions with ATV/r and DRV/r; TW is preferred as the stocked product's label.

**Sources:** US label CONTRAINDICATIONS; WARNINGS (Antiretroviral and Anti-HCV Drug Interactions); DRUG INTERACTIONS Table 2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; UK SmPC §4.3, §4.4, §4.5 Table 1 https://www.medicines.org.uk/emc/product/1088/smpc; TW 仿單 §4 禁忌, §5.1, §7 表1

### A11 · Pregnancy

No FDA letter category (narrative label). No adequate human studies. US/TW: use only if potential benefit justifies fetal risk — animals: no teratogenicity; ↓ fetal viability (rat 200 mg/kg/d), ↑ skeletal variants/anomalies (rat 40, rabbit 80 mg/kg/d with maternal toxicity). UK SmPC: should not be used in pregnancy (precautionary, §4.3/§4.6). Rifabutin ↓ hormonal contraceptive levels → use non-hormonal contraception

**Why:** The column is empty. The labels disagree: the US and TW use benefit/risk wording, while the UK lists pregnancy under §4.3 Contraindications. The FDA letter categories are retired, so do not add one; the hospital site's 'B' is a hospital-database issue.

**Sources:** US label PREGNANCY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; TW 仿單 §6.1 懷孕; UK SmPC §4.3, §4.6 https://www.medicines.org.uk/emc/product/1088/smpc

### A12 · Breastfeeding

LactMed (rev. 2022-05-15): milk amount insufficient to treat infant TB; CDC and other professional organizations state breastfeeding should not be discouraged; monitor infant for signs of liver toxicity; milk may be stained brown-orange. Alternatives: rifampin, rifapentine. UK SmPC: should not be used while breastfeeding (precautionary, §4.3/§4.6); US: decide whether to stop nursing or drug; TW 仿單: no adequate studies

**Why:** The column is empty. LactMed is the designated breastfeeding source; the label positions are given alongside because the UK and LactMed disagree.

**Sources:** LactMed Rifabutin NBK501600 https://www.ncbi.nlm.nih.gov/books/NBK501600/; UK SmPC §4.3, §4.6 https://www.medicines.org.uk/emc/product/1088/smpc; US label NURSING MOTHERS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; TW 仿單 §6.2 哺乳

### A13 · Notes

<span color="blue">`PO`</span> 院內: Mycobutin 150 mg cap (淨核膠囊, MYC07; 衛署藥輸字第020999號). No boxed warning<br>MAC prophylaxis in advanced HIV (US; UK CD4 <75; TW 說明 CD4 ≤200) — no Indications tag<br>⚠ Rule out active TB before MAC prophylaxis: monotherapy in active TB → TB resistant to rifabutin AND rifampin (US Warnings; UK 4.4). Treatment of TB/NTM always in combination with non-rifamycin drugs<br>Urine, faeces, saliva, sputum, sweat, tears, skin → orange-red/brown; soft contact lenses permanently stained (尿液/分泌物橘紅色, 隱形眼鏡可能永久染色)<br>Uveitis (higher with clarithromycin/macrolides, fluconazole/azoles, or high doses) → ophthalmology referral, hold rifabutin; asymptomatic corneal deposits (children)<br>Arthralgia/myalgia, flu-like syndrome, hypersensitivity (bronchospasm, hypotension, anaphylaxis), SCAR (SJS/TEN/DRESS/AGEP) — stop if rash progresses<br>Hormonal contraception may fail → non-hormonal method<br>Contraindicated with long-acting cabotegravir/rilpivirine; not recommended with bictegravir, elvitegravir/c, oral rilpivirine, sofosbuvir DAAs (see Drug Interactions)<br>Guidelines for regimen choice: ATS/CDC/IDSA TB 2016 (PMID 27516382); ATS/ERS/ESCMID/IDSA NTM 2020 (PMID 32628747)

**Why:** The column is empty. These are label-sourced key warnings that have no tag, plus the MAC-prophylaxis indication, which has no tag option. The guideline PMIDs were checked with NCBI esummary: 27516382 is Nahid et al., Clin Infect Dis 2016, the ATS/CDC/IDSA TB treatment guideline, and 32628747 is Daley et al., Clin Infect Dis 2020, the NTM guideline. Neither full text was reachable (PMC returns only front matter, and OUP and clinicalinfo.hiv.gov are blocked by the proxy), so they are cited only as pointers, not for specific doses.

**Sources:** US label WARNINGS; INFORMATION FOR PATIENTS; ADVERSE REACTIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; UK SmPC §4.1, §4.4, §4.6 https://www.medicines.org.uk/emc/product/1088/smpc; TW 仿單 §2, §4, §5.1, §8.1; PMID 27516382 https://pubmed.ncbi.nlm.nih.gov/27516382/; PMID 32628747 https://pubmed.ncbi.nlm.nih.gov/32628747/

### A14 · Page body

Body in the existing entries' layout (cf. Diflucan entry): # Mycobutin (Rifabutin) — one-line overview (rifamycin antimycobacterial, PO only; 院內 Mycobutin 150 mg cap) / ## Mechanism of action (A9) / ## Spectrum of activity (M. tuberculosis, MAC, M. xenopi; in vitro M. kansasii, M. gordonae, M. marinum; cross-resistance note) / ## Indications (Approved: MAC prophylaxis in advanced HIV [US/UK/TW]; pulmonary TB incl. MDR chronic TB [UK/TW]; NTM treatment [UK, TW 說明]) / ## Dosing — Adult table (indication \| dose \| duration, from A1), Pediatric (A4), Renal/HD/CRRT table (CrCl \| TW/UK \| US, from A2), Hepatic (A3) / ## Administration (QD between meals per TW; 150 mg BID with food or mixed with applesauce if GI upset per US) / ## Adverse effects & monitoring (A7, A8, uveitis, discolouration) / ## Drug interactions table (A10) / ## Pregnancy & lactation (A11, A12) / ## References: US DailyMed setid baf8ec98-bd0c-4b87-a7ee-813335431b89; UK eMC 1088; TW 仿單 衛署藥輸字第020999號 (CDS 20250611-1); LactMed NBK501600; PMID 27516382; PMID 32628747

**Why:** The body is blank. Existing entries carry a structured body that mirrors the columns and ends with a reference list. No storage details should go in it, per the owner's rule.

**Sources:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; https://www.medicines.org.uk/emc/product/1088/smpc; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; https://www.ncbi.nlm.nih.gov/books/NBK501600/

### A15 · Renewed date

2026-10-06 (set when the entry is filled)

**Why:** Other verified entries, such as Diflucan, carry a Renewed date. Set it once the columns are written.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date column)

### B1 · Adult dose

<span color="blue">`PO`</span> Mycobutin 150 mg cap (仿單 §3.1): once daily, 兩餐間服用 (UK §4.2: with or without food; US D&A: 150 mg q12h with food if GI upset; may mix with applesauce)<br>MAC prophylaxis (HIV/immunosuppressed): 300 mg q24h as single agent; exclude active TB first (仿單 §3.1, 說明: CD4 ≤200/µL; UK §4.1–4.2: CD4 \<75/µL; US Indications/D&A: advanced HIV)<br>NTM treatment (MAC, M. xenopi): 450–600 mg q24h in combination, until 6 months after cultures turn negative (仿單 §3.1; UK §4.2). With clarithromycin/other macrolides and/or fluconazole: may need ↓ to 300 mg (UK §4.2); 仿單 §5.1: reduce dose with clarithromycin (no figure given)<br>Pulmonary TB (combination, ≥6 months): 仿單 newly diagnosed 150 mg q24h; MDR chronic TB (prior rifampicin resistance) 300–450 mg q24h. UK §4.2: 150–450 mg. ATS/CDC/IDSA 2016 (PMID 27516382): standard rifabutin 300 mg/day as a rifampicin substitute; with ritonavir-boosted PI 150 mg/day or 300 mg every other day (expert opinion); with efavirenz 600 mg/day<br>Treatment: always with non-rifamycin antimycobacterials (仿單 §2; UK §4.2)

**Why:** New entry; all three labels plus the TB guideline give adult dosing. The Taiwan insert (stocked product) gives 150 mg for newly diagnosed TB, which is lower than the guideline standard of 300 mg, so both are shown. The labels disagree on administration: Taiwan says between meals, UK says independent of meals, US allows food or 150 mg BID for GI upset. Dose changes for drug interactions belong in Drug Interactions (B9).

**Sources:** Taiwan 仿單 淨核膠囊150毫克 衛署藥輸字第020999號 §2 適應症, §3.1 用法用量, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC Mycobutin 150 mg (eMC 1088, rev 05/2026) §4.1, §4.2: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label rifabutin capsule (ANI, DailyMed setid baf8ec98-bd0c-4b87-a7ee-813335431b89) Indications, Dosage & Administration, Clinical Pharmacology (high-fat meal slows rate, not extent): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; ATS/CDC/IDSA drug-susceptible TB guideline 2016, PMID 27516382 (drug interactions/HIV section: 'RFB at a dose of 150 mg/day or 300 mg every other day ... ritonavir-boosted PIs'; 'efavirenz ... RFB dosage needs to be increased to 600 mg/day'): https://pubmed.ncbi.nlm.nih.gov/27516382/ ; full text https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> 仿單 §5.1 = UK §4.4: CrCl ≥30: no adjustment. CrCl \<30: 劑量需減半 (↓50%, e.g. 300 → 150 mg/day). US D&A: CrCl \<30 → consider ↓50% only if toxicity suspected (AUC ↑71% at CrCl \<30, ↑41% at CrCl 30–61 → monitor AEs; US Clin Pharm)<br><br>HD: not expected to enhance elimination (85% protein bound, Vss 8–9 L/kg, \<10% excreted unchanged in urine; US Overdosage) → dose as CrCl \<30, no supplemental dose. Only one HD case report (PMID 11865118)<br>CRRT: no label data and no published PK study found (PubMed search 2026-10-06) — flagged; dose as CrCl \<30 with AE monitoring → ID-pharmacist input<br>TDM: specialised tool (2 h ± 6 h levels) for malabsorption, DDIs or renal impairment (ATS/CDC/IDSA 2016, PMID 27516382; PMID 24846578); recommended with tipranavir/ritonavir (UK §4.5; 仿單 §7)

**Why:** The Taiwan insert (stocked product) and UK SmPC require halving the dose at CrCl <30. The US generic label says only 'consider if toxicity suspected'. Under the hierarchy the Taiwan rule leads and the US wording sits alongside. HD statement comes from the US overdosage PK. A PubMed eutils search for rifabutin with CRRT/CVVH/hemofiltration found only an unrelated case report, so CRRT is flagged.

**Sources:** Taiwan 仿單 §5.1 警語 ('嚴重腎功能不全(CrCl低於30ml/min)，劑量需減半，輕度或中度腎功能不全不需調整劑量'): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.4 ('Severe renal impairment (creatinine clearance below 30 ml/min) requires a dosage reduction of 50%'), §4.5 tipranavir TDM: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label Dosage & Administration; Clinical Pharmacology – Renal Impairment; Overdosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; Bassilios N et al. Nephrol Dial Transplant 2002, PMID 11865118 (HD case): https://pubmed.ncbi.nlm.nih.gov/11865118/; ATS/CDC/IDSA 2016 TB guideline, TDM section, PMID 27516382: https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Alsultan A, Peloquin CA. TDM in TB, Drugs 2014, PMID 24846578: https://pubmed.ncbi.nlm.nih.gov/24846578/

### B3 · Hepatic dose

Mild impairment: no adjustment (仿單 §5.1; UK §4.4; US D&A)<br>Severe impairment: 應考慮減低劑量 (仿單 §5.1); UK §4.4: use with caution; US: PK in moderate–severe impairment not known<br>Monitor liver enzymes periodically (仿單 §5.1; UK §4.4); jaundice, ↑ hepatic enzymes, rare hepatitis (UK §4.8; US AR)

**Why:** All three labels address hepatic impairment. The stocked product's Taiwan insert is the most specific (consider dose reduction in severe impairment).

**Sources:** Taiwan 仿單 §5.1 ('用於嚴重肝功能不全病人應考慮減低劑量。輕度肝功能不全則不需修改劑量'): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.4, §4.8: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label Dosage & Administration; Clinical Pharmacology – Hepatic Impairment: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### B4 · Pediatric dose

No label dose: 仿單 §3.3 兒童: 無足夠資料; UK §4.2: inadequate data, no posology recommended; US Pediatric Use: safety/effectiveness for MAC prophylaxis not established. In 22 HIV+ children, mean doses were 4–18.5 mg/kg/day; there is no evidence that \>5 mg/kg/day is useful<br>UK §5.2: children on lopinavir/r given 2.5 mg/kg/day reached exposure similar to adult 150 mg/day<br>Corneal deposits (asymptomatic) reported in HIV+ children → eye exam (US; 仿單 §8.1). Specialist (ID) dosing only

**Why:** No label gives a paediatric dose, and that should be stated clearly. Writing '5 mg/kg/day' as a dose, as the hospital site does, would overstate the US label, which only says doses above 5 mg/kg/day are not shown to be useful.

**Sources:** Taiwan 仿單 §3.3, §8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.2 Paediatric population, §5.2 Children: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label Pediatric Use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### B5 · Indications

["NTM", "Tuberculosis"]

**Why:** Labelled uses: MAC prophylaxis in HIV (US, UK, 仿單); NTM treatment including MAC and M. xenopi (UK §4.1; 仿單 說明); pulmonary TB (UK §4.1; 仿單 §2). MAC prophylaxis goes under the NTM tag. The HIV tag means antiretroviral therapy, so it does not apply. Do not add LTBI: the US Warnings say there is no evidence rifabutin prevents M. tuberculosis. Do not add H. pylori: the Mycobutin capsule is not approved for it, so it goes in Notes (B12).

**Sources:** UK SmPC §4.1: https://www.medicines.org.uk/emc/product/1088/smpc; Taiwan 仿單 §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; US FDA label Indications & Usage; Warnings – Tuberculosis: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### B6 · Coverage

["Mycobacteria", "H. pylori"]

**Why:** Mycobacteria: high in vitro activity against M. tuberculosis (including 1/3–1/2 of rifampicin-resistant strains) and against MAC and other NTM (UK §5.1; 仿單 §10.2). H. pylori: a rifabutin triple-therapy RCT (RHB-105) showed activity, and ACG 2024 lists rifabutin triple therapy as an empiric alternative. Include it only as an off-label spectrum tag, which matches how the Klaricid entry tags H. pylori. Drop it if the owner wants Coverage to reflect labelled uses only.

**Sources:** UK SmPC §5.1: https://www.medicines.org.uk/emc/product/1088/smpc; Taiwan 仿單 §10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; Graham DY et al. RHB-105 phase 3 RCT, Ann Intern Med 2020, PMID 32365359: https://pubmed.ncbi.nlm.nih.gov/32365359/; Chey WD et al. ACG Clinical Guideline H. pylori 2024, PMID 39626064 (abstract: 'Rifabutin triple therapy ... suitable empiric alternative'): https://pubmed.ncbi.nlm.nih.gov/39626064/

### B7 · Side Effects

["GI", "hematologic", "leukopenia", "neutropenia", "thrombocytopenia", "anemia", "LFT↑", "hypersensitivity", "SJS/TEN", "DRESS", "AGEP", "CDAD", "myopathy"]

**Why:** Labelled adverse reactions: leukopenia very common and anaemia common (UK §4.8); neutropenia (US Table 4: 25% vs 20%, significant), thrombocytopenia and pancytopenia; rash 11%, nausea and dyspepsia; hepatic enzyme rise and jaundice; hypersensitivity and flu-like syndrome; SCARs SJS/TEN/DRESS/AGEP (all labels); CDAD; myalgia (common) and myositis (rare). The schema has no tag for uveitis, corneal deposits, body-fluid discolouration or arthralgia, so they go in Notes (B12). Do not use 'optic neuropathy' or 'tooth discoloration' for these.

**Sources:** UK SmPC §4.4, §4.8: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label Adverse Reactions (Tables 3–4, post-marketing), Warnings: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; Taiwan 仿單 §5.1, §8.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F

### B8 · Monitor

["CBC", "LFT", "eye exam", "renal"]

**Why:** Taiwan and UK: monitor white cells, platelets and liver enzymes periodically. US: consider periodic blood counts. All three: watch for uveitis, especially with macrolides, azoles or PIs, and refer to ophthalmology. US: corneal deposits found on routine eye exams in children. Renal function sets the CrCl <30 halving. Do not add TDM as a routine tag: it is only for selected cases (in the text, B2). Do not add viral load as a tag; the ART interaction risk is covered in Drug Interactions and Notes.

**Sources:** Taiwan 仿單 §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.4: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label General Precautions, Warnings – Uveitis, Pediatric Use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### B9 · Drug Interactions

CYP3A inducer (weaker than rifampicin, about 2–3×; 仿單 §7) and CYP3A substrate (inhibitors ↑ rifabutin → uveitis, neutropenia)<br>禁忌 (contraindicated): cabotegravir/rilpivirine long-acting injection (仿單 §4; UK §4.3; US Contraindications). US Table 2 also: delavirdine, voriconazole<br>Voriconazole: US contraindicated; UK §4.5 / 仿單 §7: only if benefit \> risk, raise voriconazole maintenance (UK 350 mg PO q12h; 仿單 200–350 mg PO q12h; IV 5 mg/kg q12h) and monitor CBC/uveitis<br>Not recommended (↓ ARV/DAA → virologic failure/resistance): bictegravir (Biktarvy), elvitegravir/cobicistat, oral rilpivirine (incl. Odefsey), sofosbuvir-containing DAAs (仿單 §5.1; UK §4.4; US Warnings). Doravirine: if co-administration is necessary, ↑ doravirine dose per its label (US/UK/仿單 tables). Etravirine + boosted PI: US: do not co-administer; 仿單: caution<br>HIV PIs: ritonavir-boosted PIs (atazanavir, darunavir, lopinavir, fosamprenavir, tipranavir) → ↓ rifabutin ≥75%: US/仿單 150 mg every other day or 3×/week; UK §4.5: 150 mg daily for ATV/r and DRV/r; ATS/CDC/IDSA 2016: 150 mg/day or 300 mg every other day. Ritonavir alone: choose another PI (UK/仿單). Indinavir: rifabutin ½ dose + indinavir ↑ to 1000 mg q8h (US/UK/仿單). Amprenavir: ↓ rifabutin ≥50%. Nelfinavir (US): rifabutin 150 mg QD + nelfinavir 1250 mg BID. Tipranavir/r: TDM (UK/仿單)<br>Efavirenz: ↑ rifabutin to 600 mg/day (ATS/CDC/IDSA 2016)<br>Clarithromycin: rifabutin AUC ↑75–77%, clarithromycin ↓50% → ↓ rifabutin dose, watch for uveitis; consider azithromycin (no PK interaction) (US Table 2; UK §4.5; PMID 32628747)<br>Azoles: fluconazole (rifabutin ↑82%) → monitor; posaconazole (rifabutin ↑72%, posaconazole ↓49%) → UK: avoid unless benefit \> risk; US/仿單: monitor AEs and antifungal efficacy; itraconazole levels ↓70–75%, rifabutin ↑ (case of uveitis)<br>Bedaquiline: ↑ M2/M3 metabolites → 仿單 §7 / US: avoid; UK: monitor<br>Hormonal contraceptives ↓ → add non-hormonal method. Also ↓ tacrolimus, dapsone, and possibly cyclosporine, anticoagulants, corticosteroids, oral hypoglycaemics, opioids, phenytoin, quinidine (UK §4.5). PAS: separate doses by 8–12 h (UK)<br>Check full ART/DAA interactions: hiv-druginteractions.org / hep-druginteractions.org

**Why:** Drug interactions are the main safety issue for this drug. The brief says only cabotegravir/rilpivirine LA is contraindicated, but US Table 2 also lists delavirdine and voriconazole as CONTRAINDICATED, while the UK SmPC and Taiwan insert allow voriconazole with a dose increase. The labels also disagree on the rifabutin dose with ATV/r and DRV/r (US/Taiwan 150 mg every other day or 3×/week; UK 150 mg daily) and on bedaquiline (Taiwan/US avoid; UK monitor). All of these are shown side by side. The efavirenz dose comes from the guideline only.

**Sources:** US FDA label Contraindications; Warnings – Antiretroviral and Anti-HCV Drug Interactions; Drug Interactions Table 2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; UK SmPC §4.3, §4.4, §4.5 Table 1: https://www.medicines.org.uk/emc/product/1088/smpc; Taiwan 仿單 §4 禁忌, §5.1, §7 表1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; ATS/CDC/IDSA 2016 TB guideline, PMID 27516382 (drug interactions/HIV section): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; ATS/ERS/ESCMID/IDSA NTM guideline 2020, PMID 32628747 (bidirectional clarithromycin–rifabutin interaction → uveitis; azithromycin preferred): https://pubmed.ncbi.nlm.nih.gov/32628747/

### B10 · Pregnancy

No FDA letter category (retired). US Pregnancy / 仿單 §6.1: no adequate human studies; use only if potential benefit justifies fetal risk (animals: not teratogenic; ↓ fetal viability and skeletal anomalies at high or maternotoxic doses). UK §4.3/§4.6: should not be used in pregnancy (precaution, no data). Reduces oral-contraceptive exposure → use non-hormonal contraception (US Table 2; UK §4.5). 懷孕：效益大於風險時方可使用 (仿單)

**Why:** The labels disagree: the US and Taiwan (stocked product) use benefit-risk wording, while the UK lists pregnancy under contraindications. Do not copy the retired 'Category B' from the hospital site.

**Sources:** US FDA label Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; Taiwan 仿單 §6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §4.3, §4.6: https://www.medicines.org.uk/emc/product/1088/smpc

### B11 · Breastfeeding

LactMed (NBK501600, rev. 2022-05-15): CDC and other bodies say breastfeeding should not be discouraged; the amount in milk is too small to treat TB in the infant; monitor the infant for liver toxicity; milk may turn brown-orange. Alternatives: rifampin, rifapentine. Labels: US — decide whether to stop nursing or the drug; UK §4.3/§4.6 — should not be used (no data); 仿單 §6.2: 無適當且良好控制之研究

**Why:** Under the source hierarchy LactMed leads for breastfeeding, and the more restrictive label wording sits alongside.

**Sources:** LactMed Rifabutin NBK501600 (rev 2022-05-15), Summary of Use during Lactation; Alternate Drugs: https://www.ncbi.nlm.nih.gov/books/NBK501600/; UK SmPC §4.3, §4.6: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; Taiwan 仿單 §6.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F

### B12 · Notes

Before MAC prophylaxis exclude active TB: rifabutin monotherapy in active TB → TB resistant to rifabutin and rifampin; no evidence it prevents TB (US Warnings; UK §4.4)<br>Treatment: always with non-rifamycin antimycobacterials (仿單/UK)<br>Uveitis (mild–severe, reversible): more likely with clarithromycin/macrolides, fluconazole/azoles, PIs or higher doses → ophthalmology referral, suspend rifabutin (US Warnings/AR; UK §4.4; 仿單 §5.1). Asymptomatic corneal deposits in HIV+ children<br>Orange-red/brown-orange urine, skin, sweat, tears, saliva; soft contact lenses permanently stained (仿單 §5.1; US Patient Info)<br>Rifamycin hypersensitivity/flu-like syndrome, anaphylaxis → stop (US Warnings); SCARs SJS/TEN/DRESS/AGEP → stop early (all labels); CDAD up to \>2 months later<br>No boxed warning<br>Resistance: incomplete cross-resistance — 1/3–1/2 of rifampicin-resistant M. tuberculosis remain rifabutin-susceptible (UK §5.1; 仿單 §10.2) → use only with susceptibility results + TB expert<br>MAC/NTM: azithromycin preferred over clarithromycin when combined with a rifamycin (ATS/ERS/ESCMID/IDSA 2020, PMID 32628747)<br>Off-label (no tag): H. pylori rifabutin triple therapy — ACG 2024 alternative (PMID 39626064); trial regimen rifabutin 150 mg + amoxicillin 3 g + omeprazole 120 mg/day, divided q8h × 14 d (RHB-105 fixed-dose combination, not stocked; PMID 32365359)<br>ART/DAA interactions → Liverpool checkers (hiv-druginteractions.org / hep-druginteractions.org)

**Why:** Collects the label warnings that have no tag (uveitis, discolouration, the active-TB resistance warning, SCAR/CDAD), the resistance point, the guideline NTM preference, and the off-label H. pylori use. I could not verify the DHHS OI/ARV guidelines because clinicalinfo.hiv.gov and hiv-druginteractions.org are blocked by the proxy. I have therefore left out DHHS-specific MAC-prophylaxis statements (e.g. no primary prophylaxis when ART starts immediately) until they can be cited.

**Sources:** US FDA label Warnings (Tuberculosis, Hypersensitivity, Uveitis, CDAD, SCAR), Information for Patients, Adverse Reactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; UK SmPC §4.4, §4.8, §5.1: https://www.medicines.org.uk/emc/product/1088/smpc; Taiwan 仿單 §5.1, §8.1, §10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; ATS/ERS/ESCMID/IDSA NTM 2020, PMID 32628747: https://www.idsociety.org/practice-guideline/nontuberculous-mycobacterial-ntm-diseases/; ACG 2024, PMID 39626064: https://pubmed.ncbi.nlm.nih.gov/39626064/; RHB-105 RCT, PMID 32365359: https://pubmed.ncbi.nlm.nih.gov/32365359/

### B13 · Mechanism

Rifamycin: inhibits bacterial DNA-dependent RNA polymerase (not the mammalian enzyme) (仿單 §10.1). In rifampicin-resistant M. tuberculosis it also inhibits thymidine incorporation into DNA, which may explain its activity against some RIF-resistant strains; cross-resistance with rifampicin is incomplete (1/3–1/2 of RIF-resistant strains susceptible) (仿單 §10.1–10.2; UK §5.1). Highly lipophilic, with high intracellular uptake (9× in neutrophils, 15× in monocytes) and lung levels 5–10× plasma; t½ 35–45 h; active metabolite 25-O-desacetyl-rifabutin (UK §5.2; US Clin Pharm). CYP3A inducer (weaker than rifampicin) and CYP3A substrate

**Why:** Mechanism and PK facts as stated in the labels.

**Sources:** Taiwan 仿單 §10.1, §10.2, §11: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F; UK SmPC §5.1, §5.2: https://www.medicines.org.uk/emc/product/1088/smpc; US FDA label Clinical Pharmacology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89

### B14 · Page body

Use the same section layout as the Klaricid (Clarithromycin) page: ## Category (Antimycobacterial (rifamycin); ATC J04AB04) / ## Mechanism (B13 as bullets) / ## Indications (table with two columns: 'Label-approved (US FDA / UK SmPC / 仿單)' = MAC prophylaxis in HIV/immunosuppressed (US/UK/仿單); NTM treatment incl. MAC, M. xenopi (UK; 仿單 說明); pulmonary TB incl. MDR chronic TB (仿單; UK) \| 'Guideline-supported' = rifampicin substitute in TB with ART/DDI (ATS/CDC/IDSA 2016, PMID 27516382); MAC pulmonary regimens (PMID 32628747); H. pylori rifabutin triple therapy off-label (PMID 39626064, 32365359)) / ## Coverage (Mycobacteria: M. tuberculosis incl. some RIF-resistant strains, MAC, M. xenopi; H. pylori off-label) / ## Adult Dose (table from B1, <span color="blue">`PO`</span> rows: MAC prophylaxis / NTM / TB newly diagnosed / MDR TB / with boosted PI / with efavirenz) / ## Renal Dose, HD, CRRT (table from B2: ≥30 / \<30 / HD / CRRT; TDM line) / ## Hepatic Dose (B3) / ## Pediatric Dose (B4) / ## Side Effects (common: leukopenia, rash, nausea, discoloured urine 30%, myalgia, fever; serious: neutropenia/thrombocytopenia, uveitis, hepatitis, hypersensitivity/flu-like, SJS/TEN/DRESS/AGEP, CDAD) / ## Monitor (CBC, LFT, eye symptoms/ophthalmology, renal function; viral load when on ART) / ## Drug Interactions (table from B9) / ## Notes (B12) / ## Pregnancy (B10) / ## Breastfeeding (B11) / ## References: US label setid baf8ec98-bd0c-4b87-a7ee-813335431b89 (accessed 2026-10-06); UK SmPC eMC 1088 (rev 05/2026); 仿單 衛署藥輸字第020999號 (CDS 20250611-1); LactMed NBK501600 (rev 2022-05-15); PMIDs 27516382, 32628747, 24846578, 11865118, 39626064, 32365359, each with its URL. No storage section.

**Why:** Other finished entries carry a structured body with a References list. This page has none.

**Sources:** Notion page Klaricid (Clarithromycin), used as the house-style template: https://app.notion.com/3f0c496dfff1811db68afeb648a9b744; Sources as cited in B1–B13 (US: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89 ; UK: https://www.medicines.org.uk/emc/product/1088/smpc ; TW: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC020999%E8%99%9F ; LactMed: https://www.ncbi.nlm.nih.gov/books/NBK501600/)

### B15 · Notes

Make sure the Notes/Drug Interactions text says US Table 2 lists delavirdine and voriconazole as CONTRAINDICATED, while the UK/仿單 allow voriconazole with a dose increase (see B9)

**Why:** This corrects the source brief, not the Notion page. If the entry follows the brief's 'contraindicated in all three labels: cabotegravir/rilpivirine LA' alone, it will miss the two US Table 2 contraindications.

**Sources:** US FDA label Drug Interactions Table 2 (Delavirdine 'CONTRAINDICATED'; Voriconazole 'CONTRAINDICATED'): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=baf8ec98-bd0c-4b87-a7ee-813335431b89; UK SmPC §4.5 voriconazole row: https://www.medicines.org.uk/emc/product/1088/smpc

## Apply log

- Adult dose: merged both agreed fixes (PO 150 mg cap; MAC prophylaxis 300 mg QD with US/UK/TW CD4 criteria; NTM 450–600 mg; TB 150 mg / MDR 300–450 mg / UK 150–450 mg; ATS 2016 boosted-PI and efavirenz doses; macrolide/fluconazole reduction; administration notes)
- Renal dose, HD, CRRT: merged (TW 仿單 = UK CrCl<30 halve the dose; US 50% only if toxicity suspected; HD/CRRT flagged; TDM line)
- Hepatic dose: merged
- Pediatric dose: merged (no label dose; US 22-child data; UK 2.5 mg/kg with LPV/r; corneal deposits)
- Indications: [NTM, Tuberculosis]
- Coverage: [Mycobacteria, H. pylori]
- Side Effects: GI, hematologic, leukopenia, neutropenia, thrombocytopenia, anemia, LFT↑, hypersensitivity, SJS/TEN, DRESS, AGEP, CDAD, myopathy
- Monitor: CBC, LFT, eye exam, renal
- Mechanism: merged (RNA polymerase, thymidine incorporation, cross-resistance US vs UK/TW, PK, CYP3A)
- Drug Interactions: merged (contraindicated LA CAB/RPV; US Table 2 lists delavirdine and voriconazole as CONTRAINDICATED, UK/仿單 allow vori with a dose increase; not-recommended ARVs/DAAs; boosted PIs, indinavir, nelfinavir, amprenavir, TPV/r TDM; efavirenz; clarithromycin/azithromycin; azoles; bedaquiline; contraceptives and other substrates; PAS; Liverpool links)
- Pregnancy: merged (no letter category; US/TW benefit-risk; UK do not use; contraception)
- Breastfeeding: merged (LactMed rev 2022-05-15, alternatives, US/UK/TW label statements)
- Notes: merged all three Notes fixes (hospital product, MAC prophylaxis no tag, exclude TB, uveitis, discolouration, SCAR/hypersensitivity/CDAD, contraception, delavirdine/voriconazole contraindicated in US vs UK/TW, cross-resistance, azithro preferred, off-label H. pylori, guidelines, Liverpool)
- Page body: created in the Klaricid layout (Category, Mechanism, Indications table, Coverage, Adult Dose table, Administration, Renal/HD/CRRT table, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions table, Notes, Pregnancy, Breastfeeding); no storage section
- References section added at the end of the body: US DailyMed setid baf8ec98…, UK eMC 1088 (rev 05/2026), TW 仿單 衛署藥輸字第020999號 (CDS 20250611-1), LactMed NBK501600, PMIDs 27516382, 32628747, 24846578, 11865118, 39626064 and 32365359, plus the Liverpool checkers, each with its URL
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
