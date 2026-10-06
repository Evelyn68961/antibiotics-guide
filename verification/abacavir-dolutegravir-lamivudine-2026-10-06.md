# New entry: Triumeq (Dolutegravir/Abacavir/Lamivudine)

- **Notion entry:** [Triumeq (Dolutegravir/Abacavir/Lamivudine)](https://app.notion.com/3f1c496dfff18136ab07dda09f2dbe4b). Created 2026-10-06.
- **Hospital codes:** TRI05 (Triumeq tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/abacavir-dolutegravir-lamivudine.json` (plus any Taiwan insert text files)

## Product and sources

FJUH TRI05 = Triumeq 錠劑 / 三恩美膜衣錠 (abacavir 600 mg + dolutegravir 50 mg + lamivudine 300 mg film-coated tablet, PO only), ATC J05AR13, NHI BC26518100; Taiwan licence 衛部藥輸字第026518號 (insert v4, 2025-04-17). US label: DailyMed setid 2997739a-aa91-42aa-a206-a70e2db7b84f v30 (Jan 26, 2026; covers Triumeq + Triumeq PD). UK: eMC 3318 Triumeq 50/600/300 mg FC tablets (rev 03/10/2025). LactMed: component chapters only (abacavir NBK501547, dolutegravir NBK500631, lamivudine NBK501536). Notion page is a NEW ENTRY: only Title + Category filled, body blank. Note: the US Boxed Warning is not in triumeq.json (the fetch script missed it), so I took it from the DailyMed SPL XML for the same setid. DHHS guideline and Liverpool checker sites were blocked by the proxy (403), so no guideline-level regimen claims are proposed.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Triumeq FC tab (ABC 600 mg / DTG 50 mg / 3TC 300 mg): **1 tab QD**, with or without food (空腹或飯後皆可); do not chew/cut/crush (US 2.5)<br>• Before start: screen **HLA-B*5701** and test **HBV** (US 2.1–2.2; TW: 宜考慮 HLA-B*5701 篩檢)<br>• With **efavirenz, fosamprenavir/RTV, tipranavir/RTV, carbamazepine or rifampin** → DTG must be 50 mg BID: add **dolutegravir (Tivicay) 50 mg 12 h after Triumeq** (TW 表1 = FDA 2.6)<br>• Oxcarbazepine, phenytoin, phenobarbital, St John's wort, nevirapine: **TW/FDA: avoid** (insufficient data). The UK SmPC instead gives an extra DTG 50 mg dose for these and for etravirine without a boosted PI, and no adjustment for fosamprenavir/RTV<br>• Missed dose: take ASAP unless next dose due within 4 h (UK 4.2)<br>• Complete regimen (完整治療藥物); not recommended alone if INSTI resistance (known or suspected) (DTG dose insufficient)

**Why:** Empty column; all three labels give 1 tablet once daily with or without food, the additional DTG 50 mg dose 12 h later with the listed inducers, and pre-treatment HLA-B*5701/HBV testing.

**Sources:** US DailyMed Triumeq v30 §1, §2.1, §2.2, §2.4, §2.5, §2.6 Table 2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; TW 仿單 三恩美 衛部藥輸字第026518號 §2 適應症, §3.1 用法用量 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; UK SmPC eMC 3318 §4.2 (missed doses, separate DTG dose list) — https://www.medicines.org.uk/emc/product/3318/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (TW 6.7 = FDA 8.6, cutoff CrCl 30)<br>CrCl ≥50: no adjustment<br>CrCl 30–49: no adjustment, but lamivudine AUC **↑1.6–3.3×** → monitor CBC (neutropenia/anemia); if new/worsening → stop Triumeq, use individual components with lamivudine renally dosed<br>CrCl **<30: not recommended** (fixed-dose; 不建議) → use individual components (3TC dose ↓ per its label)<br>UK SmPC: same <30 cutoff; no adjustment for mild/moderate, but 3TC exposure significantly ↑ when CrCl <50<br>HD/PD: no Triumeq data; CrCl <30 so not recommended → components. 3TC: negligible removal by 4-h HD/CAPD/APD; DTG highly protein-bound, unlikely dialysed (US 10)<br>CRRT: no data → individual components<br>⚠️ DTG blocks tubular creatinine secretion (OCT2): SCr rises within the first 4 wk, then stays stable (mean +0.14 mg/dL at 144 wk); measured GFR unchanged — not AKI (US 6.1, 7.1; TW)

**Why:** Empty column. The stocked product's TW insert and the US label both use CrCl <30 as the 'not recommended' cutoff and give the CrCl 30–49 exposure/CBC caution. The UK SmPC agrees on <30. The DTG creatinine artefact is needed to read renal labs correctly.

**Sources:** TW 仿單 衛部藥輸字第026518號 §3.1 (不建議用於肌酸酐廓清率低於30), §6.7 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US DailyMed Triumeq §2.7, §8.6, §10 Overdosage, §6.1 Changes in Serum Creatinine, §7.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.2 Renal impairment, §4.4 moderate renal impairment — https://www.medicines.org.uk/emc/product/3318/smpc

### A3 · Hepatic dose

TW insert = FDA: **Mild (Child-Pugh A): not recommended**. If abacavir dose reduction is needed, use the individual components (輕度：不建議，改用單方)<br>**Moderate/severe (Child-Pugh B/C): contraindicated** (中重度禁用)<br>UK SmPC: moderate/severe not recommended unless judged necessary; mild: close monitoring, incl. abacavir levels if feasible<br>HBV/HCV co-infection: higher risk of transaminase elevation → monitor LFT (US 5.3)

**Why:** Empty column. The TW and US labels agree: mild is not recommended and moderate/severe is contraindicated. The UK SmPC is less strict, so its wording is given alongside.

**Sources:** TW 仿單 §3.1, §4 禁忌, §6.6 肝功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US DailyMed Triumeq §2.7, §4, §8.7, §5.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.2 Hepatic impairment, §4.4 Liver disease — https://www.medicines.org.uk/emc/product/3318/smpc

### A4 · Pediatric dose

🇹🇼 TW insert (本院品項): adolescents **≥12 y**: 1 tab QD (fixed dose; <12 y cannot be dose-adjusted)<br>FDA/UK: **≥25 kg: 1 FC tab QD** (ABC 600/DTG 50/3TC 300). Do not use the FC tab if <25 kg<br>6 to <25 kg (≥3 mo): **Triumeq PD** dispersible tab (ABC 60/DTG 5/3TC 30 mg), FDA weight bands QD: 6–<10 kg 3 tabs; 10–<14 kg 4; 14–<20 kg 5; 20–<25 kg 6 — **本院無 PD**; PD and FC tablets are **not interchangeable mg-for-mg** (different DTG bioavailability)<br>Inducer co-therapy (≥25 kg): add DTG 50 mg 12 h later, as for adults<br><3 mo or <6 kg: not established. Pediatric renal impairment: no lamivudine data (US 8.4)

**Why:** Empty column. Labels differ: TW (stocked product) says ≥12 y; FDA/UK say ≥25 kg for the FC tablet. The PD formulation is not stocked, but the non-substitution warning is a safety point.

**Sources:** TW 仿單 §2 適應症 (12歲以上青少年), §6.4 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US DailyMed Triumeq §1, §2.3, §2.5 Table 1, §2.6, §5.7, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.1, §4.2 — https://www.medicines.org.uk/emc/product/3318/smpc

### A5 · Indications

HIV

**Why:** Only approved indication is HIV-1 treatment (FDA: adults and children ≥3 mo and ≥6 kg; UK: ≥25 kg; TW: adults/adolescents ≥12 y, ART-naive or without resistance to the 3 components). Do NOT tag HBV: the US label states lamivudine safety/efficacy are not established for chronic HBV in HIV/HBV co-infection. Do not tag HIV PrEP: not indicated.

**Sources:** US DailyMed Triumeq §1, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.1 — https://www.medicines.org.uk/emc/product/3318/smpc; TW 仿單 §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F

### A6 · Coverage

HIV

**Why:** Antiviral activity against HIV-1 (all three components). The label also gives DTG in-vitro EC50 values against HIV-2 isolates, but no HIV-2 option exists and it is not an indication. HBV is not tagged because lamivudine monotherapy in this FDC is not an HBV treatment and resistant HBV emerges (US 5.2). The HBV point goes in Notes.

**Sources:** US DailyMed Triumeq §12.4 Microbiology, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f

### A7 · Side Effects

hypersensitivity, CNS, GI, LFT↑, lactic acidosis, IRIS, autoimmune, neutropenia, anemia, dysglycemia, myopathy, rhabdomyolysis, weight gain, neuropathy, SJS/TEN

**Why:** Label support for each tag: abacavir/DTG hypersensitivity (Boxed Warning, 5.1). CNS: insomnia, headache, depression, suicidal ideation, nightmares (6.1); seizures (6.2). GI (6.1). Hepatotoxicity/acute liver failure (5.3). Lactic acidosis/hepatic steatosis (5.4). IRIS with autoimmune disorders such as Graves and Guillain-Barré (5.6). Neutropenia (Table 4); anemia, including with CrCl 30–49 and postmarketing (6.1, 6.2, 8.6). Hyperglycemia, grade 2 9% (Table 4). Myositis/CPK rise (6.1); rhabdomyolysis (6.2). Weight increased (6.2; UK 4.4). Peripheral neuropathy (6.2). Suspected SJS/TEN (6.2). Not tagged because no matching option exists: MI risk (5.8), raised lipase/pancreatitis, hypertriglyceridaemia; these go in Notes. Do not tag nephrotoxicity/AKI: the creatinine rise is a secretion artefact.

**Sources:** US DailyMed Triumeq Boxed Warning, §5.1–5.8, §6.1 Tables 3–5, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.4 Weight and metabolic parameters, §4.8 — https://www.medicines.org.uk/emc/product/3318/smpc

### A8 · Monitor

HLA-B*5701, HBV serology, viral load, LFT, renal, CBC, lipids, glucose

**Why:** HLA-B*5701 before start/restart (Boxed Warning, 2.1). HBV test before start, plus close LFT follow-up for several months after stopping in HBV co-infection (Boxed Warning, 5.2). Hepatotoxicity monitoring recommended (5.3). CrCl, and SCr interpreted with the DTG artefact in mind (2.7, 6.1). CBC if CrCl 30–49 (8.6). Lipids/glucose per HIV guidelines (UK 4.4; US Table 4/5). HIV viral load: more frequent if sorbitol cannot be avoided (UK 4.5); standard for ART response.

**Sources:** US DailyMed Triumeq Boxed Warning, §2.1, §2.2, §5.2, §5.3, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.4, §4.5 (sorbitol) — https://www.medicines.org.uk/emc/product/3318/smpc

### A9 · Mechanism

INSTI + 2 NRTIs (single-tablet regimen):<br>• **Dolutegravir**: integrase strand-transfer inhibitor. Binds the integrase active site and blocks the strand-transfer step of HIV DNA integration<br>• **Abacavir**: carbocyclic guanosine analogue → carbovir triphosphate (dGTP analogue) → inhibits HIV-1 RT (competes with dGTP + chain termination)<br>• **Lamivudine**: cytidine analogue → 3TC-triphosphate → RT inhibition via DNA chain termination<br>Resistance: **M184V/I** → high-level 3TC resistance, ~2× ↓ ABC susceptibility; K65R/L74V/Y115F + M184V → 7–8× ↓ ABC. INSTI cross-resistance: Q148 + G140/E138 combinations (2.5–21× ↓ DTG); hence not for INSTI-resistant virus

**Why:** Empty column; mechanism and resistance summarised from the US label microbiology section.

**Sources:** US DailyMed Triumeq §12.4 Microbiology (Mechanism of Action, Resistance in Cell Culture, Cross-Resistance), §1 Limitations of Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.5 (lamivudine and emtricitabine both cytidine analogues) — https://www.medicines.org.uk/emc/product/3318/smpc

### A10 · Drug Interactions

• **Dofetilide**: ↑dofetilide → **contraindicated** (US/TW). **Fampridine (dalfampridine)**: ↑ via OCT2 → seizures; **UK contraindicated**, US: weigh benefit vs seizure risk<br>• **Inducers → ↓DTG**: efavirenz, fosamprenavir/RTV, tipranavir/RTV, carbamazepine, **rifampin** → add DTG 50 mg 12 h after Triumeq. Oxcarbazepine, phenytoin, phenobarbital, St John's wort, nevirapine: US avoid (insufficient data); UK: extra DTG dose. Etravirine without ATV/r, DRV/r or LPV/r: not recommended. Rifabutin: no adjustment<br>• **Polyvalent cations** (Mg/Al antacids, laxatives, sucralfate, buffered drugs): Triumeq **2 h before or 6 h after** (多價陽離子間隔服用)<br>• **Ca/Fe supplements or multivitamins**: together with food OK; if fasting, Triumeq 2 h before or 6 h after<br>• **Metformin**: AUC ↑79% → consider metformin dose adjustment when starting/stopping; caution in moderate renal impairment (UK)<br>• Riociguat ↑ ~3× (abacavir) → may need dose ↓. Methadone clearance ↑ (abacavir), occasionally needs dose ↑. Sorbitol and other poly-alcohols ↓3TC → avoid chronic co-use. Cladribine: not recommended (UK). Do not combine with emtricitabine-containing products (UK)<br>• Others: check Liverpool HIV interactions checker (hiv-druginteractions.org)

**Why:** Empty column. Lists the contraindicated and major interactions from the labels, plus a pointer to the Liverpool checker as required for HIV drugs. The UK and US labels differ on fampridine and on the weaker inducers, so both are shown.

**Sources:** US DailyMed Triumeq §4, §2.6, §7.1–7.3 Table 6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.3, §4.5 (metformin, fampridine, cations, sorbitol, riociguat, cladribine, emtricitabine, rifabutin) — https://www.medicines.org.uk/emc/product/3318/smpc; TW 仿單 §4 禁忌, §7 交互作用 (多價陽離子 2h/6h; 鈣/鐵與食物併服) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; Liverpool HIV Drug Interactions checker (pointer only) — https://www.hiv-druginteractions.org/checker

### A11 · Pregnancy

Can be used in pregnancy if clinically needed (UK 4.6). Early Botswana (Tsepamo) NTD signal with DTG at conception **not confirmed**: NTD prevalence 0.11% DTG vs 0.11% non-DTG (Botswana, >9,460 exposures) and 0.08% vs 0.22% (Eswatini) (US 8.1). APR data with each component (>1,000 first-trimester exposures each) show no increase in birth defects. Combination-product data are limited (<300 outcomes). All 3 components cross the placenta. Register exposures with the APR (懷孕登記庫). No FDA letter category (retired)

**Why:** Empty column. Current US/UK/TW labelling no longer carries the 2018 NTD warning as a risk finding. No letter category is given, per the ground rules.

**Sources:** US DailyMed Triumeq §8.1 Pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.6 — https://www.medicines.org.uk/emc/product/3318/smpc; TW 仿單 §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F

### A12 · Breastfeeding

All 3 components pass into human milk (DTG milk:plasma ~0.03; infant 3TC serum <4% of maternal). Labels differ: **TW insert: do not breastfeed** (囑咐母親服藥時不要哺乳). UK: women with HIV are recommended not to breastfeed. US 8.2: discuss the risks (HIV transmission, infant viral resistance, adverse effects). LactMed (all 3 chapters): with sustained undetectable viral load on ART, transmission risk is <1% but not zero, and a decision to breastfeed should be supported. If viral load is not suppressed → formula/donor milk. DTG is detectable in infant plasma (prolonged neonatal elimination)

**Why:** Empty column. LactMed is the primary source for breastfeeding; the label differences are shown so the stocked product's TW instruction is not missed.

**Sources:** LactMed Abacavir NBK501547 (rev 2025-07-15) Summary — https://www.ncbi.nlm.nih.gov/books/NBK501547/; LactMed Dolutegravir NBK500631 (rev 2026-07-15) Summary — https://www.ncbi.nlm.nih.gov/books/NBK500631/; LactMed Lamivudine NBK501536 (rev 2025-12-15) Summary — https://www.ncbi.nlm.nih.gov/books/NBK501536/; US DailyMed Triumeq §8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 §4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/3318/smpc; TW 仿單 §6.2 哺乳 / 病人諮詢 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F

### A13 · Notes

本院品項: TRI05 Triumeq 三恩美膜衣錠 (ABC 600/DTG 50/3TC 300 mg) <span color="blue">`PO`</span> only. Triumeq PD dispersible tablet is not stocked<br>⚠️ **Boxed warning (US/TW): (1) Abacavir hypersensitivity**: multi-organ and potentially fatal; higher risk with HLA-B*5701 (contraindicated). Stop immediately if suspected (fever, rash, GI, constitutional or respiratory symptoms). **NEVER rechallenge** with Triumeq or any abacavir- **or dolutegravir**-containing product (cannot tell which component caused it; 過敏反應後終身不可再用含abacavir或dolutegravir之藥品). **(2) HBV exacerbation**: severe acute HBV flare after stopping 3TC in HIV/HBV co-infection → test HBV before start. Triumeq alone is inadequate HBV therapy (3TC-resistant HBV emerges), so add HBV-active treatment or choose another regimen. After stopping, monitor LFT for several months<br>• Hepatotoxicity incl. acute liver failure/transplant (DTG). Lactic acidosis/steatosis (NRTI). IRIS<br>• MI: association with abacavir inconclusive. Minimise CV risk factors; UK: consider alternatives if CV risk is high<br>• SCr rises within the first 4 wk then stable (mean +0.14 mg/dL; DTG OCT2 effect, true GFR unchanged; 非腎毒性)<br>• Not interchangeable mg-for-mg with Triumeq PD<br>• Hypersensitivity Warning Card to be given with each prescription (US 5.1)<br>• HIV-2: DTG active in vitro (US 12.4) — no tag, not an indication

**Why:** Empty column. The ground rules require Boxed Warnings in Notes (HBV flare on stopping NRTIs active against HBV). The stocked-forms statement follows the owner's 本院品項 style.

**Sources:** US DailyMed Triumeq Boxed Warning (SPL XML, same setid), §5.1–5.8, §6.1, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; TW 仿單 特殊警語 (過敏反應以及B型肝炎惡化) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; UK SmPC eMC 3318 §4.4 Cardiovascular events — https://www.medicines.org.uk/emc/product/3318/smpc

### A14 · Page body

Build the body in the style of existing entries (e.g. Valcyte): '# Triumeq (Dolutegravir/Abacavir/Lamivudine)' + 1-line intro (INSTI + 2 NRTI single-tablet regimen; 本院品項 TRI05 PO only) / --- / ## Mechanism of action (A9 text + resistance) / ## Spectrum of activity (HIV-1; DTG in-vitro HIV-2; not HBV therapy) / ## Indications (FDA ≥3 mo & ≥6 kg [FC tab ≥25 kg]; UK ≥25 kg; TW adults & ≥12 y, ART-naive or no resistance to the 3 components; not alone for INSTI resistance) / ## Dosing → ### Adult (A1) ### Pediatric (A4, PD weight-band table) ### Renal dose, HD, CRRT (table: CrCl ≥50 / 30–49 / <30 / HD / CRRT per A2) ### Hepatic (A3) / ## Administration (with/without food; cation spacing; do not crush) / ## Adverse effects & monitoring (Boxed warnings + A7 + A8) / ## Drug interactions (table from A10) / ## Pregnancy & lactation (A11, A12) / ## Clinical pearls (HLA-B*5701 before start, never rechallenge; HBV status before start and before stopping; rifampin → extra DTG 50 mg q12h; cations 2 h before/6 h after; SCr rise ≠ AKI; CrCl <30 → components) / ## References: TW 仿單 衛部藥輸字第026518號 v4 (2025-04-17) [TFDA link]; US DailyMed setid 2997739a… v30 (Jan 2026); UK SmPC eMC 3318 (03/10/2025); LactMed NBK501547, NBK500631, NBK501536; Liverpool checker. Do not include storage.

**Why:** New entry with a blank body. Other entries carry a structured body with a reference list, which this page needs.

**Sources:** US DailyMed Triumeq — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 — https://www.medicines.org.uk/emc/product/3318/smpc; TW 仿單 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; LactMed NBK501547 / NBK500631 / NBK501536 — https://www.ncbi.nlm.nih.gov/books/NBK500631/

### B1 · Adult dose

<span color="blue">`PO`</span> **1 tab QD** (ABC 600 mg / DTG 50 mg / 3TC 300 mg), with or without food (空腹或飯後皆可)<br>• Before starting: **HLA-B*5701 must be negative**; test for HBV<br>• With **efavirenz, fosamprenavir/RTV, tipranavir/RTV, carbamazepine or rifampin**: add **DTG 50 mg (Tivicay) 12 h after Triumeq**, i.e. DTG 50 mg BID<br>• Not for INSTI-resistant HIV: DTG 50 mg BID is needed, so use the single agents<br>• Swallow whole; do not chew, cut or crush (US label)<br>• Missed dose: take as soon as possible unless the next dose is due within 4 h (UK SmPC)

**Why:** The column is empty. The adult dose is the same in all three labels. Inducer co-dosing follows the Taiwan insert (the stocked product's label), and the US label matches it. The UK inducer list differs; see B10. The INSTI-resistance limitation is in TW §2, US §1 and UK 4.4.

**Sources:** Taiwan insert 衛部藥輸字第026518號 §3.1 用法用量: 'TRIUMEQ用於成人的建議給藥方式為每日一次，每次口服一錠，可與食物併服，亦可不與食物併服'; 表1 'Efavirenz、fosamprenavir/ritonavir、tipranavir/ritonavir、carbamazepine或rifampin…TRIUMEQ投予後需間隔12小時，另外再服用一顆dolutegravir 50毫克錠劑' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US FDA label §2.1, §2.2, §2.4, §2.5 ('Do not chew, cut, or crush the tablet'), §2.6 Table 2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.2 Posology ('one tablet once daily'; missed dose 'providing the next dose is not due within 4 hours') and 4.4 Drug resistance https://www.medicines.org.uk/emc/product/3318/smpc

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (TW insert = FDA = UK SmPC)<br>CrCl ≥50: no adjustment<br>CrCl 30–49: no adjustment, but **3TC AUC is 1.6–3.3× higher**. Monitor CBC for neutropenia and anemia; if either appears, switch to the single agents (改用單方)<br>CrCl **<30**, HD, PD: **not recommended** (fixed-dose tablet). Use the single agents:<br>• DTG 50 mg QD: no renal adjustment (INSTI-naïve); dialysis dosing not established<br>• ABC 600 mg QD: renal excretion is minor; the Ziagen label gives no renal adjustment<br>• 3TC per the Epivir label: CrCl 15–29: 150 mg ×1 then 100 mg QD; 5–14: 150 mg ×1 then 50 mg QD; <5: 50 mg ×1 then 25 mg QD; no supplemental dose after 4-h HD or PD<br>CRRT: no label data. Use the single agents.<br>⚠ DTG raises SCr by about 0.14 mg/dL within 4 weeks because it blocks OCT2 tubular secretion of creatinine; measured GFR is unchanged (not AKI)

**Why:** The column is empty. The stocked product's Taiwan label, the US label and the UK SmPC all use CrCl <30 as the 'not recommended' cutoff. TW and UK give the CrCl 30–49 exposure and hematologic-monitoring caveat. No label covers HD or CRRT for the fixed-dose tablet, so the component labels apply. The creatinine artefact is in TW §8 and US §6.1/§12.2.

**Sources:** Taiwan insert §6.7 腎功能不全: 'TRIUMEQ並不建議用於肌酸酐清除率低於30毫升/分鐘的病人'; '肌酸酐清除率介於30至49毫升/分鐘的病人…lamivudine暴露量(AUC增高為1.6倍至3.3倍)…應監測血液學毒性…應停止服用TRIUMEQ，改以個別成分之單方製劑治療'; §8 血清肌酸酐的變化 '平均變化為0.14 mg/dL' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US FDA label §2.7 ('not recommended in patients with creatinine clearance <30 mL/min'), §6.1 Changes in Serum Creatinine https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.2 Renal impairment ('not recommended…creatinine clearance < 30 mL/min…lamivudine exposure is significantly increased…< 50 mL/min'); 4.4 'Administration in subjects with moderate renal impairment' https://www.medicines.org.uk/emc/product/3318/smpc; US Epivir label §2.3 Table 2 (≥50: 300 mg QD; 30–49: 150 mg QD; 15–29: 150 mg first dose then 100 mg QD; 5–14: 150 then 50 mg QD; <5: 50 then 25 mg QD; 'No additional dosing…after routine (4-hour) hemodialysis or peritoneal dialysis') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=89226149-47fa-4f7d-bb1f-1aa7034486b8; US Tivicay label §8.6 Renal Impairment ('no dosage adjustment is necessary…mild, moderate, or severe renal impairment'; 'inadequate information to recommend appropriate dosing of dolutegravir in patients requiring dialysis') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922; US Ziagen label §12.3 ('Renal excretion of unchanged abacavir is a minor route of elimination') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ca73b519-015a-436d-aa3c-af53492825a1

### B3 · Hepatic dose

🇹🇼 TW insert = FDA: Child-Pugh **A: not recommended**. If the ABC dose must be reduced (Ziagen: 200 mg BID oral solution), use the single agents<br>Child-Pugh **B/C: contraindicated** (禁用)<br>UK SmPC (less strict): moderate or severe not recommended unless judged necessary; mild needs close monitoring, including abacavir levels if feasible

**Why:** The column is empty. The Taiwan insert (stocked product) and the US label agree, so they come first. The UK SmPC is more permissive and also gives the only TDM-type advice (abacavir plasma levels). That difference should be visible. The Ziagen label gives the mild-impairment abacavir dose that the single-agent route needs.

**Sources:** Taiwan insert §3.1 '輕度肝功能不全病人(不建議)。中度或重度肝功能不全病人禁用TRIUMEQ'; §6.6 肝功能不全 (Child-Pugh A→個別成分單方製劑; B/C 禁用) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US FDA label §2.7, §4 Contraindications ('with moderate or severe hepatic impairment') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.2 Hepatic impairment ('not recommended unless judged necessary…mild hepatic impairment (Child-Pugh score 5-6) close monitoring is required, including monitoring of abacavir plasma levels if feasible') https://www.medicines.org.uk/emc/product/3318/smpc; US Ziagen label §2.4 ('mild hepatic impairment (Child‑Pugh Class A) is 200 mg twice daily…oral solution') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ca73b519-015a-436d-aa3c-af53492825a1

### B4 · Pediatric dose

<span color="blue">`PO`</span> 🇹🇼 TW insert: adolescents **≥12 y**: 1 tab QD (cannot be adjusted below 12 y)<br>FDA/UK: **≥25 kg**: 1 tab QD; 6 to <25 kg (≥3 months): Triumeq PD dispersible 5/60/30 mg, weight-banded 3–6 tabs QD (**not stocked**; not interchangeable mg-for-mg with the film-coated tablet)<br>Inducers: add DTG as for adults (≥25 kg: DTG 50 mg 12 h later)

**Why:** The column is empty. The labels give different thresholds: Taiwan uses age (≥12 y), US and UK use weight (≥25 kg). The stocked label goes first and the others alongside, per the ground rules. The PD formulation is not stocked, so it is mentioned only so that no one substitutes it.

**Sources:** Taiwan insert §2 適應症 ('成人病人及12歲以上的青少年病人'); §6.4 小兒 ('TRIUMEQ是一固定劑量之複方錠劑，小於12歲之兒童無法調整劑量') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US FDA label §2.3, §2.5 Table 1 (≥25 kg: 1 tablet QD; PD 6–<10 kg 3 tabs, 10–<14 kg 4, 14–<20 kg 5, 20–<25 kg 6), §5.7 not substitutable https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.1/4.2 ('adults, adolescents and children weighing at least 25 kg'; dispersible tablets ≥3 months and 6–<25 kg; 'must not be used as direct replacements') https://www.medicines.org.uk/emc/product/3318/smpc

### B5 · Indications

HIV

**Why:** HIV-1 treatment is the only labelled indication in all three labels. Lamivudine is active against HBV, but Triumeq is not indicated for HBV and lamivudine alone is inadequate HBV therapy, so the HBV tag must not be used.

**Sources:** US FDA label §1 Indications and Usage https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.1 Therapeutic indications https://www.medicines.org.uk/emc/product/3318/smpc; Taiwan insert §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F

### B6 · Coverage

HIV

**Why:** All three components target HIV-1. Do not tag HBV: the UK SmPC 4.4 says lamivudine monotherapy is 'generally not considered an adequate treatment for hepatitis B', and the US label §5.2 warns that lamivudine-resistant HBV emerges. This follows the valganciclovir precedent of not tagging organisms the drug is not used for. The HBV point goes in Notes (B13).

**Sources:** US FDA label §12.4 Microbiology – Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.4 'Patients with chronic hepatitis B or C' https://www.medicines.org.uk/emc/product/3318/smpc

### B7 · Mechanism

INSTI + 2 NRTI single-tablet regimen (STR)<br>• Dolutegravir: binds the HIV integrase active site and blocks the strand-transfer step of viral DNA integration<br>• Abacavir: carbocyclic guanosine analogue → carbovir triphosphate (dGTP analogue) → inhibits HIV RT and terminates the DNA chain<br>• Lamivudine: cytidine analogue → 3TC-triphosphate → RT inhibition and DNA chain termination (also active against HBV)

**Why:** The column is empty. The text is a short paraphrase of label §12.4 / TW §10.

**Sources:** US FDA label §12.4 Microbiology – Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 5.1 Pharmacodynamic properties https://www.medicines.org.uk/emc/product/3318/smpc

### B8 · Side Effects

hypersensitivity, LFT↑, lactic acidosis, CNS, GI, IRIS, autoimmune, weight gain, dysglycemia, hematologic, myopathy, rhabdomyolysis

**Why:** All ten tags exist in the schema. Sources: abacavir/DTG HSR (boxed); hepatotoxicity including liver failure (§5.3); lactic acidosis and hepatomegaly with steatosis (§5.4); insomnia, headache, depression and suicidal ideation (§6.1); GI effects; IRIS (§5.6); weight increased (§6.2, UK 4.4); hyperglycemia grade 2 in 9% (Table 4); neutropenia and anemia (§6.1, post-marketing aplastic anemia); CK elevation, myositis and rhabdomyolysis (§6.1/§6.2). Do NOT tag AKI or nephrotoxicity: the creatinine rise is a secretion effect. Abacavir MI risk and raised lipids/TG have no tag; put them in Notes.

**Sources:** US FDA label Boxed Warning, §5.1–5.8, §6.1 Table 3/4, §6.2 Postmarketing https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.4 ('Weight and metabolic parameters'), 4.8 https://www.medicines.org.uk/emc/product/3318/smpc; Taiwan insert §5.1, §8 副作用/不良反應 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F

### B9 · Monitor

HLA-B*5701, HBV serology, viral load, LFT, renal, CBC, lipids, glucose

**Why:** The labels require HLA-B*5701 screening and HBV testing before starting (US §2.1/§2.2, boxed warning). Liver monitoring is recommended (§5.3), with LFTs and HBV markers after stopping in HBV co-infection. Renal function decides whether the fixed dose can be used (CrCl ≥30), and CBC is needed at CrCl 30–49 (TW §6.7, UK 4.4). UK SmPC 4.4 refers lipid and glucose monitoring to HIV guidelines. Viral load is standard ART response monitoring (IAS-USA 2024 laboratory monitoring). TDM is not routine, so the tag is not added; UK suggests abacavir levels only in mild hepatic impairment (see B3).

**Sources:** US FDA label §2.1, §2.2, §5.2, §5.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.4 (HLA-B*5701 'must always be documented'; weight and metabolic parameters; moderate renal impairment) https://www.medicines.org.uk/emc/product/3318/smpc; Taiwan insert §6.7 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; Gandhi RT et al. IAS-USA 2024 recommendations, JAMA 2025;333:609-628, PMID 39616604 (verified via esummary) https://pubmed.ncbi.nlm.nih.gov/39616604/

### B10 · Drug Interactions

⛔ **Dofetilide**: contraindicated (TW/FDA). **Fampridine (dalfampridine)**: contraindicated in the UK (seizures); TW/FDA say weigh benefit against seizure risk<br>⬇ DTG (UGT1A1/CYP3A induction). **Add DTG 50 mg 12 h after Triumeq** with efavirenz, fosamprenavir/RTV, tipranavir/RTV, carbamazepine, rifampin (TW/FDA). Rifabutin: no adjustment<br>• TW/FDA: **avoid** nevirapine, oxcarbazepine, phenytoin, phenobarbital, St John's wort. Etravirine only with ATV/r, DRV/r or LPV/r<br>• (UK SmPC differs: add DTG 50 mg for these inducers and for etravirine without a boosted PI; no change with fosamprenavir/RTV)<br>⬇ **Polyvalent cations** (Mg/Al antacids, laxatives, sucralfate, buffered drugs): give Triumeq **2 h before or 6 h after**<br>• **Ca/Fe supplements and multivitamins**: can be taken together **with food**; if fasting, give Triumeq 2 h before or 6 h after<br>⬆ **Metformin** (AUC ↑79%): consider a lower metformin dose; watch renal function<br>⬆ **Riociguat** (~3× AUC, abacavir CYP1A1): may need a lower dose<br>• **Sorbitol** (chronic): lowers 3TC exposure, avoid. **Methadone**: occasionally needs a dose increase<br>• Do not combine with other ABC/3TC/DTG or **emtricitabine** products; cladribine not recommended (UK)<br>🔗 Check all others: Liverpool HIV interaction checker https://www.hiv-druginteractions.org

**Why:** The column is empty. The ground rules ask for label contraindicated/major interactions plus a Liverpool pointer. The labels disagree on inducers: TW/US say avoid nevirapine, oxcarbazepine, phenytoin, phenobarbital and SJW, while UK says add DTG; for fosamprenavir/r, TW/US add DTG while UK says no change. The stocked product's TW label goes first and UK alongside. Fampridine is a UK contraindication; the source brief omitted it.

**Sources:** Taiwan insert §4 禁忌 (dofetilide); §7.3 表2 (efavirenz, fosamprenavir/RTV, tipranavir/RTV, carbamazepine, rifampin → DTG 50 mg 12 h後; nevirapine, oxcarbazepine, phenytoin, phenobarbital, St. John's wort 應避免; 多價陽離子 2小時前或6小時後; 鈣/鐵與食物同服; metformin; riociguat; 山梨糖醇; methadone) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US FDA label §4, §7.3 Table 6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.3 (fampridine contraindicated), 4.4, 4.5 Table 1 (metformin AUC ↑79%; riociguat ~3-fold; fosamprenavir/r 'No dose adjustment is necessary'; nevirapine/oxcarbazepine/phenytoin/phenobarbital/St John's wort/etravirine → additional 50 mg DTG; rifabutin no adjustment; emtricitabine and cladribine not recommended) https://www.medicines.org.uk/emc/product/3318/smpc; University of Liverpool HIV Drug Interactions checker https://www.hiv-druginteractions.org

### B11 · Pregnancy

Can be used in pregnancy if clinically needed (UK SmPC); no FDA letter category<br>• DTG at conception: neural-tube-defect prevalence 0.11% (Botswana/Tsepamo) and 0.08% (Eswatini), no different from non-DTG ART or HIV-negative mothers (>14,000 pregnancies)<br>• APR: no increase in birth defects with ABC, 3TC or DTG (>1,000 first-trimester exposures each); data for the triple combination are limited<br>• Register exposures with the Antiretroviral Pregnancy Registry

**Why:** The column is empty. All three labels now say the early Tsepamo NTD signal was not confirmed. No letter category is used, per the ground rules.

**Sources:** US FDA label §8.1 Pregnancy (Botswana 0.11%, Eswatini 0.08%; APR data) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.6 ('Triumeq can be used during pregnancy if clinically needed') https://www.medicines.org.uk/emc/product/3318/smpc; Taiwan insert §6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F

### B12 · Breastfeeding

All 3 components pass into milk (DTG milk:plasma about 0.03; 3TC infant serum <4% of maternal)<br>• Labels differ: **TW insert and UK SmPC: do not breastfeed** (應囑咐母親服藥時不要哺乳); US label: counsel on the risks (HIV transmission, infant viral resistance, infant ADRs)<br>• LactMed: DTG is used safely and is a first-line drug during breastfeeding (detectable in infant plasma; prolonged neonatal elimination); 3TC is well studied; ABC appears in small amounts. If the mother **chooses to breastfeed with a sustained undetectable viral load**, support her (transmission <1%, not zero); if viral load is not suppressed, use donor milk or formula

**Why:** The column is empty. The labels and LactMed differ in emphasis, so both are given. LactMed component chapters (abacavir 2025-07-15, dolutegravir 2026-07-15, lamivudine 2025-12-15) are the hierarchy source for breastfeeding.

**Sources:** LactMed Dolutegravir NBK500631 (rev 2026-07-15) https://www.ncbi.nlm.nih.gov/books/NBK500631/; LactMed Abacavir NBK501547 (rev 2025-07-15) https://www.ncbi.nlm.nih.gov/books/NBK501547/; LactMed Lamivudine NBK501536 (rev 2025-12-15) https://www.ncbi.nlm.nih.gov/books/NBK501536/; Taiwan insert §6.2 哺乳 ('應囑咐母親服用Triumeq時不要餵哺母乳') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; US FDA label §8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC 4.6 Breast-feeding (ratio 0.033; lamivudine <4%) https://www.medicines.org.uk/emc/product/3318/smpc

### B13 · Notes

⚠ **BOXED WARNING 1, abacavir hypersensitivity (HSR)**: screen **HLA-B*5701** first; positive = contraindicated. HSR (fever, rash, GI or respiratory symptoms, malaise), usually within 6 weeks (median 9 days). **Stop at once** if HSR is suspected and **never rechallenge** with any ABC- or DTG-containing product (re-exposure can kill within hours). 過敏反應一旦懷疑立即停藥，終身不可再用<br>⚠ **BOXED WARNING 2, HBV exacerbation**: test for HBV before starting. Stopping 3TC in HIV/HBV co-infection can cause severe hepatitis flares; monitor LFTs and HBV markers for several months. 3TC alone is inadequate HBV therapy (resistance), so add HBV-active treatment or choose another regimen (B肝合併感染：需另加抗HBV藥物或改用其他處方)<br>• Hepatotoxicity, including acute liver failure and transplant (DTG); lactic acidosis and steatosis (NRTIs)<br>• Abacavir and **MI**: evidence inconsistent; reduce CV risk factors and consider an alternative if CV risk is high (UK)<br>• Not for INSTI-resistant HIV. IAS-USA 2024: INSTI (BIC or DTG) + 2 NRTIs is the recommended initial regimen for most people<br>• IRIS, including autoimmune disease (Graves', etc.) months later<br>• SCr rises about 0.14 mg/dL (OCT2 effect), not true renal injury<br>• Stocked: Triumeq tab (TRI05) and Tivicay 50 mg (TIV01) for the extra DTG dose; Triumeq PD dispersible not stocked<br>• Liverpool interaction checker: https://www.hiv-druginteractions.org

**Why:** The column is empty. The ground rules require boxed warnings in Notes; the US boxed warning ('HYPERSENSITIVITY REACTIONS, AND EXACERBATIONS OF HEPATITIS B') and the Taiwan 特殊警語 both have exactly these two parts (checked against the DailyMed SPL XML). The other items have no tag or need context. The regimen-choice line is limited to what the verified IAS-USA abstract states. The DHHS guideline site (clinicalinfo.hiv.gov) was blocked by the proxy (403), so no DHHS-specific placement of DTG/ABC/3TC is claimed.

**Sources:** US FDA label Boxed Warning (SPL XML), §5.1–5.6, §5.8 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f; Taiwan insert 特殊警語 '警語：過敏反應以及B型肝炎惡化' and §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026518%E8%99%9F; UK SmPC 4.4 (Cardiovascular events: 'alternative treatment options…high cardiovascular risk'; Patients with chronic hepatitis B) https://www.medicines.org.uk/emc/product/3318/smpc; Gandhi RT et al. JAMA 2025;333:609-628, PMID 39616604 (esummary-verified) https://pubmed.ncbi.nlm.nih.gov/39616604/; Hospital stock identity only: https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=TIV01

### B14 · Page body

Add a short structured summary in the house monograph layout: '## Triumeq (三恩美膜衣錠) – Dolutegravir/Abacavir/Lamivudine' with sections Product (TRI05, ABC 600/DTG 50/3TC 300 mg tab, 衛部藥輸字第026518號), Boxed warnings, Dosing (adult; inducers; renal table; hepatic; pediatric), Interactions, Pregnancy & lactation, and a '### References' list: Taiwan insert v4 2025-04-17 (TFDA URL above); US DailyMed setid 2997739a-aa91-42aa-a206-a70e2db7b84f; UK SmPC eMC 3318 (rev 03/10/2025); LactMed NBK501547/NBK500631/NBK501536; Epivir/Ziagen/Tivicay DailyMed labels for single-agent dosing; IAS-USA 2024 PMID 39616604; Liverpool checker. Mirror the column text; add no storage details.

**Why:** The body is blank. Other entries carry a summary plus References, and the citations need a home on the page.

**Sources:** verification/page-bodies-2026-10-06.md (house layout precedent); URLs as listed in B1–B13

### B15 · Category

(keep as is)

**Why:** Correct: one INSTI (dolutegravir) plus two NRTIs (abacavir, lamivudine) in a single tablet. No change needed; listed for completeness.

**Sources:** US FDA label §1 ('dolutegravir (integrase strand transfer inhibitor [INSTI]), abacavir, and lamivudine (both nucleoside analogue reverse transcriptase inhibitors)') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2997739a-aa91-42aa-a206-a70e2db7b84f

## Apply log

- Adult dose: merged both proposals (PO 1 tab QD, HLA-B*5701/HBV screening, extra DTG 50 mg 12 h after Triumeq with inducers, TW/FDA vs UK differences, missed dose, INSTI resistance)
- Renal dose, HD, CRRT: merged (CrCl >=50 / 30-49 with 3TC AUC 1.6-3.3x and CBC / <30, HD, PD not recommended -> single agents with Epivir 3TC table, DTG/ABC no adjustment; UK note; CRRT no data; SCr OCT2 effect)
- Hepatic dose: Child-Pugh A not recommended (Ziagen 200 mg BID solution via single agents), B/C contraindicated, UK less strict wording, HBV/HCV LFT monitoring
- Pediatric dose: TW >=12 y; FDA/UK >=25 kg; Triumeq PD weight bands (not stocked, not interchangeable); inducers; <3 mo/<6 kg not established
- Indications: [HIV]
- Coverage: [HIV]
- Side Effects: union of both proposals (hypersensitivity, CNS, GI, LFT↑, lactic acidosis, IRIS, autoimmune, hematologic, neutropenia, anemia, dysglycemia, myopathy, rhabdomyolysis, weight gain, neuropathy, SJS/TEN), all existing options
- Monitor: [HLA-B*5701, HBV serology, viral load, LFT, renal, CBC, lipids, glucose]
- Mechanism: INSTI + 2 NRTI text with resistance (M184V/I, K65R etc., Q148 INSTI cross-resistance) and 3TC HBV activity
- Drug Interactions: merged (dofetilide CI, fampridine, inducers, UK differences, cations 2 h/6 h, Ca/Fe with food, metformin, riociguat, sorbitol, methadone, emtricitabine/cladribine, Liverpool checker)
- Pregnancy: UK use if needed, no FDA letter category, Tsepamo/Eswatini NTD data, APR, placental transfer, registry
- Breastfeeding: milk transfer data, TW/UK do not breastfeed vs US counselling, LactMed undetectable-VL support statement
- Notes: stocked products (TRI05, TIV01; PD not stocked), both boxed warnings (abacavir HSR never rechallenge incl. DTG products; HBV exacerbation), hepatotoxicity, IRIS, MI, SCr, IAS-USA 2024, Warning Card, HIV-2 note, Liverpool checker
- Page body: full monograph (title, intro, Mechanism, Spectrum, Indications, Dosing with Adult/Pediatric PD table/Renal table/Hepatic, Administration, Adverse effects & monitoring with boxed warnings, Drug interactions table, Pregnancy & lactation, Clinical pearls) with no storage details
- References section at end of body: TW insert 026518 v4 2025-04-17, DailyMed Triumeq v30 Jan 2026, UK SmPC eMC 3318 rev 03/10/2025, Epivir/Ziagen/Tivicay DailyMed, LactMed NBK501547/NBK500631/NBK501536 with revision dates, IAS-USA 2024 PMID 39616604, Liverpool checker
- Category: kept as is (Antiretroviral (INSTI + 2 NRTI, STR))
- Renewed date set to 2026-10-06 (is_datetime 0)
- Formatting fix after first verify: escaped HLA-B\*5701 asterisks in Adult dose and body boxed-warning line that had broken bold markup

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
