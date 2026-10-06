# New entry: Akurit-4 / Akurit-3 (TB fixed-dose combinations)

- **Notion entry:** [Akurit-4 / Akurit-3 (TB fixed-dose combinations)](https://app.notion.com/3f1c496dfff181588951e2a317e9b16a). Created 2026-10-06.
- **Hospital codes:** AKU02 (Akurit-4 RIF/INH/PZA/EMB 150/75/400/275 mg), AKU01 (Akurit-3 RIF/INH/EMB 150/75/275 mg). No US/UK label for these exact FDCs: use the Taiwan inserts plus the single-agent US/UK labels and WHO/ATS-CDC-IDSA TB guidelines.
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/rifampin-isoniazid-pyrazinamide-ethambutol.json` (plus any Taiwan insert text files)

## Product and sources

Two Lupin fixed-dose anti-TB film-coated tablets stocked by FJUH. (1) AKU02 Akurit-4 立剋核-4膜衣錠 (衛署藥輸字第025518號, NHI BC25518100, ATC J04AM06): rifampin 150 mg + isoniazid 75 mg + pyrazinamide 400 mg + ethambutol HCl 275 mg per tablet. (2) AKU01 Akurit-3 立剋核膜衣錠 (衛署藥輸字第025519號, NHI BC25519100, ATC J04AM07): rifampin 150 mg + isoniazid 75 mg + ethambutol HCl 275 mg per tablet. Both are oral tablets only, with TFDA inserts dated 2019-07-10. There is no US FDA label for either combination: DailyMed has no 4-drug or HRE FDC, and Rifater (UK, RIF/INH/PZA, ATC J04AM05) is the closest SmPC analogue. Component data therefore come from the US single-agent labels (rifampin AHP setid 50f706f9…, isoniazid RemedyRepack 6dab7b7b…, pyrazinamide ANI 262d8829…, ethambutol RemedyRepack e0d4a594…), the UK SmPCs (Rifater, Rifadin, isoniazid, pyrazinamide, ethambutol) and LactMed. Notion page: https://app.notion.com/3f1c496dfff181588951e2a317e9b16a. It is a new entry: only the title and Category are filled, the body is blank, and every other column is empty.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> once daily by weight, same bands for both products (TW 仿單 §3.1): 30–37 kg 2 tab；38–54 kg 3 tab；55–70 kg 4 tab；≥71 kg 5 tab「可考慮」. Take 1 h before or 2 h after meals. Daily max per 疾管署 (cited in the insert): INH 300 mg / RIF 600 mg. 4 tab of Akurit-4 = RIF 600 / INH 300 / PZA 1600 / EMB 1100 mg. 5 tab = RIF 750 / INH 375 mg, which is over that cap → for ≥71 kg follow the 疾管署結核病診治指引 (仿單 §3.1). <30 kg: no 仿單 dosing → use single agents. Akurit-4 (HRZE) = 2-month intensive phase；Akurit-3 (HRE) = the insert table is headed 持續治療期, or the PZA-free regimen 2HRE → 7HR (ATS/CDC/IDSA 2016, PMID 27516382). Daily dosing only; rifampin is not for intermittent use (TW 仿單 §5.1; US rifampin PRECAUTIONS-General).

**Why:** The column is empty. The weight bands, administration and daily maximum are in both TFDA inserts (section 3.1), and the per-band mg arithmetic matches the stated strengths. The ≥71 kg band exceeds the cap the insert itself cites, so that caveat has to be stated. Phase usage comes from the Akurit-3 table header and the ATS 2016 standard regimens.

**Sources:** TW 仿單 Akurit-4 衛署藥輸字第025518號 §3.1 用法用量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; TW 仿單 Akurit-3 衛署藥輸字第025519號 §3.1 (table '持續治療期', ✽≧71Kg footnote) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US rifampin label, PRECAUTIONS-General ('Rifampin is not recommended for intermittent therapy') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; Nahid P et al. ATS/CDC/IDSA drug-susceptible TB 2016, Clin Infect Dis, PMID 27516382 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/27516382/

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> Fixed ratio → cannot be renally adjusted. CrCl ≥30: usual weight-band dose. RIF: no change up to 600 mg/day (TW 仿單 §10.2; US Clin Pharm). EMB: mainly renal (~50% unchanged), accumulates in renal impairment → reduce by serum EMB level (TW 仿單 §5.1; US EMB). UK EMB SmPC 4.2: CrCl <30 → 15–25 mg/kg (max 2.5 g) 3×/week + plasma EMB levels. INH: monitor in severe renal dysfunction；cerebellar syndrome reported mostly in CKD (US INH WARNINGS).<br>**CrCl <30 or HD → switch to single agents**: RIF 600 mg + INH 300 mg daily (no change)；PZA 25–35 mg/kg and EMB 20–25 mg/kg per dose 3×/week, given after HD (ATS/CDC/IDSA 2016 Table 12, PMID 27516382).<br>PD/CRRT: no label data → single agents ± TDM [flag].

**Why:** The column is empty. Both TW inserts warn that ethambutol must be reduced by serum level in renal impairment, and a fixed tablet cannot do that. Rifampin needs no change up to 600 mg. The HD/CrCl <30 schedule is guideline-based (ATS 2016) and agrees with the UK ethambutol SmPC thrice-weekly advice. The hospital AKU01 entry leaves this out (see hospital issues).

**Sources:** TW 仿單 Akurit-4 §5.1 Ethambutol ('腎臟功能低下的病人，需要依據血清ethambutol的濃度減少劑量') and §10.2 Rifampin ('劑量高達600mg/day…腎臟受損者無差異') — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; US ethambutol label, PRECAUTIONS + CLINICAL PHARMACOLOGY ('marked accumulation… renal insufficiency') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; US rifampin label, CLINICAL PHARMACOLOGY-Oral Administration ('half-life does not differ in patients with renal failure at doses not exceeding 600 mg daily') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label, WARNINGS-Cerebellar Syndrome / PRECAUTIONS-General — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK Ethambutol 100 mg SmPC 4.2 Renal impairment — https://www.medicines.org.uk/emc/product/14174/smpc; ATS/CDC/IDSA 2016, PMID 27516382 — https://pubmed.ncbi.nlm.nih.gov/27516382/

### A3 · Hepatic dose

Contraindicated: acute liver disease of any cause；previous INH-associated hepatic injury or severe INH reaction (TW 仿單 4; US INH)；severe hepatic impairment (Akurit-3 TW 4; US PZA 'severe hepatic damage')；jaundice (UK Rifater/Rifadin 4.3). Impaired liver function: give only if necessary, under close supervision, LFT before therapy and q2–4 wk (US rifampin WARNINGS; Rifater SmPC 4.4). Rifadin SmPC: RIF ≤8 mg/kg/day in hepatic impairment → the FDC cannot do this, use single agents. Hepatocellular injury on Akurit-4 → stop and do not restart the PZA-containing product (TW 仿單 4; US PZA WARNINGS).

**Why:** The column is empty. Hepatic contraindications and monitoring are spelled out in the TW inserts and the US/UK component labels. Because the FDC is not adjustable, the practical advice is to switch to single agents.

**Sources:** TW 仿單 Akurit-4 §4 禁忌 (Isoniazid; 'Akurit-4應該被停止，且不得恢復') — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; TW 仿單 Akurit-3 §4 禁忌 ('病人伴隨嚴重肝臟的損傷…急性肝臟疾病') — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US rifampin label WARNINGS (impaired liver function: LFT prior and every 2–4 weeks) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US pyrazinamide label CONTRAINDICATIONS / WARNINGS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; UK Rifadin SmPC 4.2 ('8 mg/kg should not be exceeded in… impaired liver function') — https://www.medicines.org.uk/emc/product/6382/smpc; UK Rifater SmPC 4.3/4.4 — https://www.medicines.org.uk/emc/product/1596/smpc

### A4 · Pediatric dose

Not established: TW 仿單 gives adult dosing only (bands start at 30 kg), and the EMB component 不建議 <13 歲 (TW 仿單 §5.1; US EMB Pediatric Use). The FDC ratio may not suit children, who need higher INH mg/kg (UK Rifater SmPC 4.2) → use single agents: RIF 10–20 mg/kg (max 600 mg) (US RIF)；INH 10–15 mg/kg (max 300 mg) (US INH)；PZA 15–30 mg/kg (max 2 g) (US PZA)；EMB 15–25 mg/kg with monthly visual acuity and colour checks (ATS/CDC/IDSA 2016, PMID 27516382; not in US label).

**Why:** The column is empty. No source supports giving these FDCs to children. The component labels give pediatric single-agent doses, and the ethambutol and Rifater labels give the reasons against the FDC.

**Sources:** TW 仿單 Akurit-4 §3.1 (成人 only) and §5.1 Ethambutol ('不建議使用在13歲以下的兒童') — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; US ethambutol label Pediatric Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; US rifampin label INDICATIONS-Tuberculosis (pediatric 10–20 mg/kg, ≤600 mg) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label DOSAGE-For Treatment of Tuberculosis (children 10–15 mg/kg up to 300 mg) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US pyrazinamide label DOSAGE table (children 15–30 mg/kg, max 2 g) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; UK Rifater SmPC 4.2 Children — https://www.medicines.org.uk/emc/product/1596/smpc

### A5 · Indications

Tuberculosis

**Why:** Both TW inserts give the indication as 結核病 only, and the UK Rifater SmPC gives pulmonary tuberculosis. LTBI and NTM are not labelled for these FDCs: LTBI regimens (NTCA/CDC 2020) use INH or RIF alone, or rifapentine, not 3- or 4-drug FDCs.

**Sources:** TW 仿單 Akurit-4/Akurit-3 §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; UK Rifater SmPC 4.1 — https://www.medicines.org.uk/emc/product/1596/smpc; Sterling TR et al. NTCA/CDC LTBI 2020, MMWR Recomm Rep, PMID 32053584 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/32053584/

### A6 · Coverage

Mycobacteria

**Why:** The components act on M. tuberculosis. The TW insert §10.1 also lists some NTM (M. kansasii, MAC) for individual components, but the FDCs are indicated only for TB. The rifampin Gram-positive and Gram-negative spectrum in the insert is not relevant to this TB-only product, so no other tags should be added.

**Sources:** TW 仿單 Akurit-4 §10.1 抗菌活性 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; US ethambutol label CLINICAL PHARMACOLOGY ('effective against strains of Mycobacterium tuberculosis but does not seem to be active against fungi, viruses, or other bacteria') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a

### A7 · Side Effects

LFT↑, GI, neuropathy, optic neuropathy, hyperuricemia, hypersensitivity, DRESS, SJS/TEN, AGEP, thrombocytopenia, hematologic, AKI, Vitamin K deficiency, CNS, autoimmune, dysglycemia, photosensitivity

**Why:** All of these options exist in the schema, and each is label-sourced: hepatitis (all four components; INH boxed warning)；GI upset；INH peripheral neuropathy；EMB optic neuritis；PZA hyperuricaemia and gout；DRESS, SJS/TEN and AGEP (TW 仿單 5.1/8.1; US rifampin and INH)；thrombocytopenia, haemolytic anaemia and leukopenia (RIF, INH)；acute renal failure and interstitial nephritis (RIF)；vitamin K-dependent coagulopathy (RIF, US WARNINGS)；CNS effects (INH seizures and psychosis, RIF confusion)；INH lupus-like syndrome；hyperglycaemia (INH) and harder diabetes control (Akurit-3 TW 5.1).

**Sources:** TW 仿單 Akurit-4 §5.1, §8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; TW 仿單 Akurit-3 §5.1 普遍的 (糖尿病), §8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US rifampin label WARNINGS (hepatotoxicity, SCAR, vitamin K coagulopathy, TMA, pulmonary toxicity) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label boxed WARNING, SCAR, ADVERSE REACTIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US pyrazinamide label PRECAUTIONS/ADVERSE REACTIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; US ethambutol label WARNINGS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a

### A8 · Monitor

LFT, CBC, renal, eye exam, neuro, PT/INR, glucose

**Why:** US rifampin and Rifater SmPC 4.4 call for baseline hepatic enzymes, bilirubin, serum creatinine, CBC and platelets, with a review at least monthly. US INH: monthly symptom review, plus AST/ALT at baseline and periodically when ≥35 y. TW insert and US EMB: baseline vision (acuity and colour), monthly vision questions, and a monthly exam when >15 mg/kg. INH: watch for neuropathy. RIF: coagulation tests in patients at risk of vitamin K deficiency or on warfarin. Diabetes control may worsen. Uric acid (PZA, US PZA LABORATORY TESTS) has no tag and goes in Notes.

**Sources:** US rifampin label PRECAUTIONS-Laboratory Tests and WARNINGS (coagulation tests) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label boxed WARNING / Laboratory Tests — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US pyrazinamide label LABORATORY TESTS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; TW 仿單 Akurit-4 §5.1 Ethambutol 視毒性 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; UK Rifater SmPC 4.4 — https://www.medicines.org.uk/emc/product/1596/smpc

### A9 · Mechanism

RIF: inhibits bacterial DNA-dependent RNA polymerase (not the mammalian enzyme), bactericidal incl. slow/intermittent growers；INH: inhibits mycolic-acid synthesis, bactericidal vs actively growing intra- and extracellular M. tuberculosis；PZA: converted to pyrazinoic acid, active only at acidic pH (intracellular/macrophage), exact mechanism unknown；EMB: diffuses into growing mycobacteria and impairs cell metabolism (arabinosyl-transferase/cell-wall arabinogalactan [not in label]), mainly prevents resistance to companion drugs.

**Why:** The column is empty. Component mechanisms are taken from the US labels, TW 仿單 §10.1 and Rifater SmPC 5.1. The arabinosyltransferase target is standard pharmacology but is not stated in any label, so it is flagged.

**Sources:** US rifampin label Microbiology-Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US pyrazinamide label CLINICAL PHARMACOLOGY ('mechanism of action is unknown… active only at a slightly acidic pH') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; US ethambutol label CLINICAL PHARMACOLOGY — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; TW 仿單 Akurit-3 §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; UK Rifater SmPC 5.1 — https://www.medicines.org.uk/emc/product/1596/smpc

### A10 · Drug Interactions

RIF = potent inducer of CYP1A2/2B6/2C8/2C9/2C19/3A4, UGT, P-gp/MRP2 (US Table 1). 禁忌 Contraindicated (US / UK Rifater 4.3): saquinavir/ritonavir (hepatotoxicity)；atazanavir, darunavir, fosamprenavir, saquinavir, tipranavir；cabotegravir, fostemsavir, lenacapavir；praziquantel；lurasidone. UK also: sofosbuvir, daclatasvir, telaprevir (US: avoid daclatasvir, simeprevir, sofosbuvir). Avoid (US): zidovudine, indinavir, efavirenz, mifepristone, ticagrelor, quinine, irinotecan, itraconazole, atovaquone；high-dose cefazolin (severe bleeding)；clopidogrel (discouraged: ↑ active metabolite → bleeding; US/UK). Major ↓ effect: warfarin (daily PT/INR), hormonal contraceptives (use non-hormonal), tacrolimus/cyclosporine, azoles, methadone (withdrawal), digoxin, corticosteroids, sulfonylureas, phenytoin. INH ↑ phenytoin, carbamazepine, valproate, theophylline levels；acetaminophen hepatotoxicity；tyramine/histamine foods. Halothane + RIF ↑ hepatotoxicity (TW 仿單 §7). Antacids: give RIF ≥1 h before；no Al(OH)₃ antacid for ≥4 h after EMB. RIF interferes with serum folate/B12 assays → test before the morning dose. Other ART/DAA: Liverpool checker (hiv-druginteractions.org / hep-druginteractions.org).

**Why:** The column is empty. For a rifamycin-containing product this is critical. Contraindicated and avoid lists are quoted from US rifampin CONTRAINDICATIONS and Table 1 and from UK Rifater/Rifadin 4.3. The INH and EMB interactions come from their US labels, the antacid timing from the US RIF and EMB labels, and halothane and assay interference from TW 仿單 §7.

**Sources:** US rifampin label CONTRAINDICATIONS; PRECAUTIONS-Drug Interactions Table 1; Effect of other drugs on rifampin; Other Interactions (atovaquone); WARNINGS (cefazolin) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label PRECAUTIONS (Food, Acetaminophen, Carbamazepine, Ketoconazole, Phenytoin, Theophylline, Valproate) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US ethambutol label Drug Interactions (Al hydroxide antacid, 4 h) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK Rifater SmPC 4.3/4.5 — https://www.medicines.org.uk/emc/product/1596/smpc; TW 仿單 Akurit-4 §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Liverpool HIV interaction checker — https://www.hiv-druginteractions.org/checker

### A11 · Pregnancy

FDA letter categories retired (older US single-agent labels still print 'Category C' — not current). Active TB in pregnancy should be treated: INH benefit justifies risk (US INH). RIF crosses the placenta → observe the newborn (TW 仿單 §6.1)；dosing in the last weeks → postnatal haemorrhage in mother/infant, vitamin K may be needed (US RIF; UK Rifater 4.6). EMB: ophthalmic abnormalities reported in infants exposed in utero；use if benefit justifies risk (US EMB; 仿單 §6.1). PZA: US INH label says routine PZA is not recommended in pregnancy (inadequate data) → initial INH+RIF+EMB, i.e. **Akurit-3** (HRE, ≥9 mo total)；WHO recommends PZA, US experts decide case by case (ATS 2016, PMID 27516382). Give pyridoxine with INH in pregnancy (UK INH SmPC 4.4/4.6).

**Why:** The column is empty. The content summarises the component labels without letter categories, as the ground rules require, and includes the US INH label's pregnancy-regimen guidance. The guideline position on PZA is flagged for an exact quote.

**Sources:** US isoniazid label Pregnancy / 'Pregnant Women with Tuberculosis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US rifampin label Pregnancy–Teratogenic / Non-Teratogenic — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US ethambutol label Pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; US pyrazinamide label PREGNANCY — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; TW 仿單 Akurit-4 §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; UK Isoniazid SmPC 4.4 (pyridoxine for pregnant) — https://www.medicines.org.uk/emc/product/14798/smpc; ATS/CDC/IDSA 2016, PMID 27516382 — https://pubmed.ncbi.nlm.nih.gov/27516382/

### A12 · Breastfeeding

Compatible (LactMed): CDC and others state that breastfeeding should not be discouraged for RIF, INH, PZA or EMB. Milk levels: RIF, INH and EMB low；PZA potentially substantial (Akurit-4 only) → monitor the infant for jaundice, hepatitis and arthralgia；INH → monitor for jaundice. Mother on INH takes pyridoxine 25 mg/day；an infant also given INH needs pyridoxine 1 mg/kg/day. Milk may turn orange-red (RIF). Milk levels are too low to treat the infant. Label stance differs: UK Pyrazinamide SmPC 4.3/4.6 **contraindicates** breastfeeding；UK Rifater 4.6: breastfeed only if benefit > risk；US INH: 'should not be discouraged'.

**Why:** The column is empty. LactMed is the designated breastfeeding source (rifampin rev. 2024-11-15; INH, PZA and EMB rev. 2024-08-15). The hospital site says 'Avoided', which contradicts this (see hospital issues).

**Sources:** LactMed Rifampin NBK501348 (rev 2024-11-15) — https://www.ncbi.nlm.nih.gov/books/NBK501348/; LactMed Isoniazid NBK501336 (rev 2024-08-15) — https://www.ncbi.nlm.nih.gov/books/NBK501336/; LactMed Pyrazinamide NBK501347 (rev 2024-08-15) — https://www.ncbi.nlm.nih.gov/books/NBK501347/; LactMed Ethambutol NBK501335 (rev 2024-08-15) — https://www.ncbi.nlm.nih.gov/books/NBK501335/; US isoniazid label Nursing Mothers — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK Rifater SmPC 4.6 — https://www.medicines.org.uk/emc/product/1596/smpc

### A13 · Notes

Same as A13 proposed, with the first line replaced by: ⚠ BOXED WARNING (US isoniazid): severe, sometimes fatal hepatitis；risk rises with age (≈23/1,000 at 50–64 y), daily alcohol, chronic liver disease, injection drug use, and possibly postpartum → monthly symptom review；AST/ALT at baseline and periodically if ≥35 y；strongly consider stopping if LFTs >3–5× ULN；stop at once for hepatitis symptoms.

**Why:** The column is empty. The INH boxed hepatitis warning is required in Notes by the ground rules. Contraindications, discoloration, the daily-only rule and pyridoxine are label-sourced. Uric acid has no Monitor tag, so it goes here. The rifabutin-in-HIV comment is guideline-level and is flagged.

**Sources:** US isoniazid label boxed WARNING — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; TW 仿單 Akurit-4 §4, §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; TW 仿單 Akurit-3 §4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US rifampin label WARNINGS / PRECAUTIONS-General — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; UK Rifater SmPC 4.4/4.8 — https://www.medicines.org.uk/emc/product/1596/smpc; UK Isoniazid SmPC 4.4 — https://www.medicines.org.uk/emc/product/14798/smpc; Nahid P et al. ATS/CDC/ERS/IDSA DR-TB 2019, PMID 31729908 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/31729908/

### A14 · Category

Antimycobacterial FDC (RIF/INH/PZA/EMB; RIF/INH/EMB) — keep as is (optionally append 'ATC J04AM06 / J04AM07')

**Why:** The category is correct. The compositions match TW 仿單 §1.1 for both products and the ATC codes in TFDA records. No change is needed.

**Sources:** TW 仿單 Akurit-4 §1.1 + ATC J04AM06 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; TW 仿單 Akurit-3 §1.1 + ATC J04AM07 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F

### A15 · Page body

Same structure as proposed (Category with ATC J04AM06/J04AM07 and licences 025518/025519; Mechanism; Indications; Coverage; Adult Dose weight-band table + <30 kg → single agents + ≥71 kg cap caveat; Renal; Hepatic; Pediatric; Side Effects; Monitor incl. uric acid and vision; Drug Interactions; Pregnancy; Breastfeeding; Notes; References), with each section using the corrected column text from A1, A2, A4, A10, A11, A12 and A13 as edited in this review. References: TFDA 仿單 025518/025519; DailyMed setids 50f706f9-5003-4e15-bece-85b6213b1f5c, 6dab7b7b-a3a9-47ef-b423-134bc6970d8b, 262d8829-728c-48db-b89b-88d13b87e684, e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; eMC Rifater 1596, Rifadin 6382, isoniazid 14798, pyrazinamide 101051, ethambutol 14174; LactMed NBK501348/501336/501347/501335; PMID 27516382, 31729908, 32053584; Liverpool checker.

**Why:** New entry with a blank body. Other entries carry a full monograph plus a References section, so this one should match that style. All content maps to the column findings above and their label sources.

**Sources:** TW 仿單 Akurit-4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; TW 仿單 Akurit-3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; UK Rifater SmPC — https://www.medicines.org.uk/emc/product/1596/smpc; ATS/CDC/IDSA 2016, PMID 27516382 — https://pubmed.ncbi.nlm.nih.gov/27516382/

### B1 · Adult dose

<span color="blue">`PO`</span> **Akurit-4** (RIF 150 / INH 75 / PZA 400 / EMB 275 mg) = intensive phase (2 mo HRZE, then 4 mo HR). **Akurit-3** (RIF 150 / INH 75 / EMB 275 mg): the 仿單 dose table is headed 持續治療期 (continuation); it is also used when PZA is omitted. Both: one dose a day, 1 h before or 2 h after a meal (仿單 §3.1)<br>Weight bands (both, 仿單 §3.1): 30–37 kg 2 tab; 38–54 kg 3 tab; 55–70 kg 4 tab; ≥71 kg 5 tab「可考慮」<br>4 tab of Akurit-4 = RIF 600 / INH 300 / PZA 1600 / EMB 1100 mg, i.e. RIF ≈9–11, INH ≈4–5.5, PZA ≈23–29, EMB ≈16–20 mg/kg at 55–70 kg. This is within US label ranges (RIF 10 mg/kg max 600; INH 5 mg/kg max 300; PZA 15–30 mg/kg; EMB 15–25 mg/kg)<br>⚠ ≥71 kg: 5 tab = RIF 750 / INH 375 mg, above the 疾管署 daily maximum of INH 300 mg and RIF 600 mg quoted in the 仿單 → follow the 疾管署結核病診治指引 for ≥71 kg (仿單 §3.1). UK Rifater §4.4: caution in renal impairment if RIF >600 mg/day<br><30 kg: no 仿單 dosing → use single agents<br>EMB may be stopped once the isolate is INH- and RIF-susceptible (ATS/CDC/IDSA 2016, PMID 27516382) → switch to an HR product

**Why:** The column is empty. Weight bands, administration and the daily-maximum caveat are quoted from both TFDA inserts (§3.1). I recalculated the mg/kg values from the per-tablet strengths and checked them against the single-agent US labels. The 5-tablet band goes over the cap that the insert itself cites, so the caveat must sit next to the dose. Rifater is a different product, so its weight bands are not given as a dose.

**Sources:** Akurit-4 仿單 §1.1, §3.1 (衛署藥輸字第025518號) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 §1.1, §3.1 (衛署藥輸字第025519號) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US rifampin label, Indications/Tuberculosis ('Adults 10 mg/kg … not to exceed 600 mg/day') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US isoniazid label, Dosage ('Adults 5 mg/kg up to 300 mg daily') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US pyrazinamide label, Dosage & Administration ('15 to 30 mg/kg once daily') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; US ethambutol label, Initial Treatment ('15 mg/kg … once every 24 hours') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK Rifater SmPC §4.4 ('caution … renal impairment if dose > 600 mg/day') https://www.medicines.org.uk/emc/product/1596/smpc; ATS/CDC/IDSA 2016 DS-TB guideline, PMID 27516382 (EMB discontinuation once INH/RIF susceptible) https://pubmed.ncbi.nlm.nih.gov/27516382/ ; full text https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> Fixed ratio → **cannot be renally adjusted**. 仿單 §5.1: EMB is mainly renally excreted → 腎功能低下需依血清 ethambutol 濃度減量. 仿單 §10.2: RIF up to 600 mg/day needs no adjustment. INH: monitor in severe renal dysfunction (仿單 §5.1; US INH Precautions); cerebellar syndrome mainly in CKD (US INH; UK Rifater §4.4)<br>CrCl ≥30: usual weight band. Data are insufficient for CrCl reduced but >30, so experts use standard doses ± TDM (2 h + 6 h levels) (ATS 2016)<br>**CrCl <30 or HD → switch to single agents**: RIF 600 mg and INH 300 mg daily (no change); PZA and EMB **thrice weekly**, not daily: PZA 25–35 mg/kg/dose; EMB 15–25 mg/kg/dose (max 2.5 g) + plasma EMB levels (UK EMB SmPC §4.2) (ATS 2016 Table 12 lists EMB 20–25 mg/kg [flag: verify Table 12 values against PDF]). Give all doses **after HD** (ATS 2016). UK PZA SmPC §4.4: renal impairment → emergencies only, intermittent dosing<br>PD: little PK data; Table 12 may not apply → measure levels before and after PD (ATS 2016)<br>CRRT: no label data. Case report: adequate RIF/EMB levels during CVVH with TDM (PMID 28895161); RRT lowered INH/PZA levels but not RIF (PMID 26463491) → single agents + TDM, ID-pharmacist input

**Why:** The column is empty. Both inserts state the ethambutol renal precaution, and the FDC cannot carry it out. Under the hierarchy the stocked-product insert is quoted first, then the UK single-agent SmPCs (EMB CrCl <30 values verified). The ATS 2016 text confirms thrice-weekly PZA/EMB, standard RIF/INH and post-HD dosing. The per-dose mg/kg values come from Table 12, which is an image I could not text-verify this run (academic.oup.com is blocked), so please check them against the PDF. The CRRT PMIDs were verified with esummary and their abstracts read.

**Sources:** Akurit-4 仿單 §5.1 Ethambutol ('腎臟功能低下的病人，需要依據血清ethambutol的濃度減少劑量'), §10.2 Rifampin ('劑量高達600mg/day時…不需調整劑量') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 §5.1 Ethambutol https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; UK Ethambutol 100 mg SmPC §4.2 Renal Impairment ('creatinine clearance is less than 30mL/minute, use 15–25 mg/kg (max. 2.5 g) 3 times a week and plasma Ethambutol concentration should be monitored') https://www.medicines.org.uk/emc/product/14174/smpc; UK Pyrazinamide 500 mg SmPC §4.4 ('In patients with renal impairment … administered intermittently') https://www.medicines.org.uk/emc/product/101051/smpc; US isoniazid label, Precautions/General and Cerebellar Syndrome https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; ATS/CDC/IDSA 2016 'Renal Disease' + Table 12, PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Sin JH et al. J Clin Pharm Ther 2018, PMID 28895161 https://pubmed.ncbi.nlm.nih.gov/28895161/; Fan L et al. Zhonghua Jie He He Hu Xi Za Zhi 2015, PMID 26463491 https://pubmed.ncbi.nlm.nih.gov/26463491/

### B3 · Hepatic dose

禁忌: acute liver disease of any cause; previous INH-associated liver injury or severe INH reaction (仿單 §4; US INH). Akurit-3 仿單 also lists severe hepatic impairment; US PZA: severe hepatic damage; UK Rifater: jaundice<br>Akurit-4: stop permanently and do not restart if there are signs of hepatocellular injury (仿單 §4 PZA)<br>Pre-existing liver disease: give only if necessary, under strict supervision, with LFT before and every 2–4 wk (US RIF Warnings; UK Rifater §4.4). UK Rifadin §4.2: in hepatic impairment do not exceed RIF 8 mg/kg/day → the FDC cannot be adjusted → use single agents with fewer hepatotoxic drugs; expert consultation (ATS 2016)<br>DILI (ATS 2016): ALT ≥5×ULN, or ≥3×ULN with symptoms → stop all hepatotoxic drugs. When ALT <2×ULN, restart **single agents** one at a time: RIF → INH (~1 wk) → PZA (~1 wk). If hepatitis was severe and RIF + INH are tolerated, PZA is presumed responsible and omitted (total duration may extend to 9 mo)

**Why:** The column is empty. Contraindications come from both inserts and the single-agent labels. The 8 mg/kg rifampin cap and the q2–4-week LFT monitoring come from UK and US labels. The DILI thresholds and the reintroduction sequence are guideline-only (ATS 2016) and are labelled as such.

**Sources:** Akurit-4 仿單 §4 禁忌 (Isoniazid; Pyrazinamide '肝細胞損傷…應該被停止，且不得恢復') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 §4 ('病人伴隨嚴重肝臟的損傷') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; UK Rifater SmPC §4.3 (jaundice), §4.4 (impaired liver function: SGPT/SGOT every 2–4 weeks) https://www.medicines.org.uk/emc/product/1596/smpc; UK Rifadin SmPC §4.2 ('A daily dose of 8 mg/kg should not be exceeded in patients with impaired liver function') https://www.medicines.org.uk/emc/product/6382/smpc; US rifampin label, Warnings (hepatotoxicity) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; ATS/CDC/IDSA 2016 'Hepatic Disease' / hepatotoxicity section, PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B4 · Pediatric dose

仿單: adult weight bands only (≥30 kg); no paediatric dosing<br>EMB 不建議用於 <13 歲 (仿單 §5.1; US EMB Precautions). US EMB also contraindicates it in patients who cannot report visual changes (e.g. young children). ATS 2016/AAP: EMB is used in children with monthly visual acuity and red-green colour checks<br>The fixed ratio gives INH ≈4–6 mg/kg, below the paediatric INH dose of 10–15 mg/kg (US INH; UK INH §4.2). UK Rifater §4.2: the ratio may not suit children → use **single agents** by mg/kg: RIF 10–20 mg/kg (max 600 mg) (US RIF); INH 10–15 mg/kg (max 300 mg) (US INH); PZA 15–30 mg/kg (max 2 g) (US PZA); EMB 15–25 mg/kg (US PZA label CDC/ATS table; UK EMB §4.2). Give pyridoxine where indicated

**Why:** The column is empty. The insert gives no paediatric dose, and the ethambutol component is not recommended under 13 y on both the TW insert and the US label. The Rifater SmPC states the FDC-ratio problem explicitly.

**Sources:** Akurit-4/Akurit-3 仿單 §3.1, §5.1 Ethambutol ('不建議使用在13歲以下的兒童') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; US ethambutol label, Contraindications/Pediatric Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; US isoniazid label, Dosage ('Children 10 mg/kg to 15 mg/kg up to 300 mg daily') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US rifampin label ('Pediatric Patients 10 to 20 mg/kg, not to exceed 600 mg/day') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; UK Rifater SmPC §4.2 Children https://www.medicines.org.uk/emc/product/1596/smpc; ATS/CDC/IDSA 2016 Children section, PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B5 · Indications

Tuberculosis

**Why:** The column is empty. Both TFDA inserts list only 結核病 (§2). The single-agent US labels cover all forms of TB. UK Rifater covers pulmonary TB. Do NOT tag LTBI: the LTBI regimens in NTCA/CDC 2020 (PMID 32053584) are 3HP, 4R and 3HR, none of which use an EMB- or PZA-containing FDC. NTM is not a label indication of these FDCs.

**Sources:** Akurit-4 仿單 §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; UK Rifater SmPC §4.1 https://www.medicines.org.uk/emc/product/1596/smpc; NTCA/CDC LTBI 2020, PMID 32053584 https://pubmed.ncbi.nlm.nih.gov/32053584/

### B6 · Coverage

Mycobacteria

**Why:** The column is empty. INH and PZA are active essentially only against M. tuberculosis; the 仿單 says 其他分枝桿菌屬通常有抗藥性. EMB's activity is mycobacterial. Rifampin's broader in-vitro spectrum (Staph, Neisseria, Legionella and others, 仿單 §10.1) does not apply to an FDC indicated only for TB, so other tags are not added.

**Sources:** Akurit-4 仿單 §10.1 抗菌活性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; US ethambutol label, Clinical Pharmacology ('does not seem to be active against fungi, viruses, or other bacteria') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a

### B7 · Side Effects

GI, LFT↑, hypersensitivity, SJS/TEN, DRESS, AGEP, optic neuropathy, neuropathy, hyperuricemia, hematologic, thrombocytopenia, AKI, coagulopathy, CNS, photosensitivity, autoimmune, dysglycemia, tooth discoloration

**Why:** The column is empty. Each tag maps to a label statement: GI (all components); LFT↑ (INH hepatitis boxed warning, RIF, PZA); hypersensitivity, SJS/TEN, AGEP, DRESS (仿單 §5.1, US RIF Warnings); optic neuropathy (EMB optic neuritis); neuropathy (INH peripheral neuropathy); hyperuricemia (PZA, also EMB); hematologic and thrombocytopenia (RIF + EMB intermittent, INH agranulocytosis and sideroblastic/aplastic anaemia); AKI (RIF interstitial nephritis and acute renal failure on interrupted or intermittent dosing); coagulopathy (RIF vitamin K-dependent bleeding, US Warnings); CNS (INH seizures and toxic psychosis, EMB confusion and hallucinations); photosensitivity (PZA, UK SmPC §4.4); autoimmune (INH lupus-like syndrome). All tags exist in the schema.

**Sources:** Akurit-4 仿單 §5.1, §8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 §8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US rifampin label, Warnings (SCAR, vitamin K coagulopathy, pulmonary toxicity) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; UK Pyrazinamide SmPC §4.4 (photosensitivity) https://www.medicines.org.uk/emc/product/101051/smpc

### B8 · Monitor

LFT, CBC, renal, eye exam, neuro, PT/INR, glucose, TDM

**Why:** The column is empty. The UK Rifater SmPC §4.4 lists baseline hepatic enzymes, bilirubin, serum creatinine, CBC and platelets, a monthly review, and monthly transaminases if >35 y. The US INH boxed warning calls for monthly symptom review and AST/ALT if ≥35 y. EMB needs baseline vision plus a monthly enquiry, with monthly exams if >15 mg/kg (仿單 §5.1), and ATS 2016 adds monthly colour discrimination. neuro covers peripheral neuropathy. PT/INR covers warfarin and RIF vitamin K coagulopathy. glucose: diabetes may become harder to control (Akurit-3 仿單 §5.1; PZA US label). TDM: selected situations (ATS 2016). Baseline uric acid (PZA, 仿單 §4/US PZA Warnings) has no Monitor tag, so put it in Notes.

**Sources:** UK Rifater SmPC §4.4 https://www.medicines.org.uk/emc/product/1596/smpc; US isoniazid label boxed WARNING https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; Akurit-4/-3 仿單 §5.1 Ethambutol 視毒性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; US pyrazinamide label, Warnings/Laboratory Tests (baseline uric acid, LFT) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684; ATS/CDC/IDSA 2016 (visual monitoring; Therapeutic Drug Monitoring) PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B9 · Mechanism

RIF: inhibits bacterial DNA-dependent RNA polymerase (single-step resistance; cross-resistance with other rifamycins); bactericidal against slowly and intermittently growing bacilli (US RIF Microbiology). INH: inhibits mycolic acid synthesis, bactericidal against actively growing bacilli (resistance via katG/inhA/kasA/ahpC) (US INH). PZA: converted to pyrazinoic acid, active only at acidic pH (MIC 16–32 mg/L at pH 5.5) (仿單 §10.1). EMB: diffuses into growing mycobacteria and impairs cell metabolism (US EMB); bacteriostatic (UK EMB SmPC §5.1); prevents or delays resistance to partner drugs (仿單 §10.1)

**Why:** The column is empty. Wording follows the US single-agent labels and the Akurit inserts §10.1.

**Sources:** Akurit-3 仿單 §10.1 微生物學及作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; Akurit-4 仿單 §10.1 Pyrazinamide https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; US isoniazid label, Mechanism of Action/Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US rifampin label, Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c

### B10 · Drug Interactions

RIF = potent inducer of CYP1A2/2B6/2C8/2C9/2C19/3A4, UGT, P-gp and MRP2 (US Table 1; UK Rifater §4.5). Induction builds over ~1–2 wk and wears off ~2 wk after stopping → re-adjust co-medication doses (ATS 2016)<br>禁忌 (contraindicated): US: atazanavir, darunavir, fosamprenavir, saquinavir (± ritonavir → hepatotoxicity), tipranavir, cabotegravir, fostemsavir, lenacapavir, praziquantel (stop RIF 4 wk before), lurasidone. UK Rifater §4.3: saquinavir/ritonavir, lurasidone, sofosbuvir, daclatasvir, telaprevir, cabotegravir, fostemsavir, lenacapavir<br>Avoid / not recommended: indinavir, zidovudine, efavirenz, simeprevir, mifepristone, ticagrelor, quinine, irinotecan, itraconazole, atovaquone (US); clopidogrel (↑ active metabolite → bleeding; US/UK); high-dose cefazolin (vitamin K coagulopathy); halothane<br>↓ effect → monitor/adjust: warfarin (PT/INR often), hormonal contraceptives (→ non-hormonal method), azoles, ciclosporin/tacrolimus, corticosteroids, methadone/opioids, phenytoin, antiarrhythmics, digoxin, CCBs, β-blockers, sulfonylureas, CYP3A statins, levothyroxine, dapsone, theophylline, tamoxifen<br>INH (CYP inhibitor): ↑ phenytoin, carbamazepine, valproate → levels; ↑ paracetamol hepatotoxicity<br>Antacids: give RIF ≥1 h before; avoid Al(OH)₃ antacids for 4 h after EMB. Separate PAS ≥8 h (UK Rifadin §4.5)<br>Lab: RIF interferes with folate/B12 assays and BSP/gallbladder contrast → test before the morning dose<br>ART/DAA and other complex DDIs → Liverpool checker (hiv-druginteractions.org / hep-druginteractions.org); consider rifabutin if a RIF interaction is unacceptable (ATS 2016)

**Why:** The column is empty. For a rifamycin, interactions are critical. The contraindicated drugs are quoted from the US rifampin label (Contraindications/Table 1) and UK Rifater §4.3/4.5. INH interactions come from the US INH label and both inserts §7. Antacid timing comes from the US RIF and US EMB labels.

**Sources:** US rifampin label, Contraindications; Drug Interactions Table 1; Effect of other drugs on rifampin https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; UK Rifater SmPC §4.3, §4.5 https://www.medicines.org.uk/emc/product/1596/smpc; US isoniazid label (Acetaminophen, Carbamazepine, Phenytoin, Valproate) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; US ethambutol label, Drug Interactions (aluminium hydroxide antacids, 4 h) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; Akurit-4 仿單 §7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; ATS/CDC/IDSA 2016 'Drug Interactions Due to Rifamycins', PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B11 · Pregnancy

No FDA letter category (retired). Treat active TB in pregnancy; first-line drugs cross the placenta but do not appear to be teratogenic in humans (ATS 2016). PZA in pregnancy: US experts decide case by case (WHO includes it). If PZA is omitted → ≥9 mo HRE, i.e. **Akurit-3** (ATS 2016)<br>RIF in the last weeks of pregnancy → postnatal haemorrhage in mother and infant → vitamin K (US RIF; UK Rifater §4.6). EMB: ophthalmic abnormalities reported in infants (US EMB). INH: give pyridoxine 25–50 mg/day (ATS 2016)<br>仿單 §6.1: RIF crosses the placenta → observe the newborn; EMB → weigh benefit vs risk

**Why:** The column is empty. The labels still print 'Category C' (US INH, PZA, EMB), but letter categories are retired, so the text describes the risk instead. The pregnancy and PZA guidance comes from the ATS 2016 'Pregnancy and Breastfeeding' text.

**Sources:** US rifampin label, Pregnancy–Non-Teratogenic Effects https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; US ethambutol label, Pregnancy https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0d4a594-d3e0-47b0-9f11-f4dbd4552d5a; UK Rifater SmPC §4.6 https://www.medicines.org.uk/emc/product/1596/smpc; Akurit-4 仿單 §6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; ATS/CDC/IDSA 2016 'Pregnancy and Breastfeeding', PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B12 · Breastfeeding

Acceptable (LactMed: RIF NBK501348 rev. 2024-11-15; INH NBK501336, PZA NBK501347, EMB NBK501335 rev. 2024-08-15). CDC: breastfeeding should not be discouraged for any of the four; ATS 2016: encouraged if the mother is non-infectious. Milk levels do not treat the infant<br>PZA (Akurit-4 only): potentially substantial milk levels → monitor the infant for jaundice, hepatitis and arthralgia. INH: monitor the infant for jaundice; mother takes pyridoxine (LactMed 25 mg/day; ATS 25–50 mg/day). Milk may be stained orange-red (RIF)<br>Label stance differs: UK PZA SmPC §4.3/4.6 **contraindicates** breastfeeding; UK Rifater §4.6: do not breastfeed unless benefit outweighs risk; US RIF: decide; US INH: do not discourage

**Why:** The column is empty. LactMed is the designated breastfeeding source and supports all four drugs. The UK pyrazinamide SmPC, however, lists breastfeeding as a contraindication, so the label conflict must be stated alongside (the brief left it out).

**Sources:** LactMed Rifampin NBK501348 https://www.ncbi.nlm.nih.gov/books/NBK501348/; LactMed Isoniazid NBK501336 https://www.ncbi.nlm.nih.gov/books/NBK501336/; LactMed Pyrazinamide NBK501347 https://www.ncbi.nlm.nih.gov/books/NBK501347/; LactMed Ethambutol NBK501335 https://www.ncbi.nlm.nih.gov/books/NBK501335/; UK Pyrazinamide SmPC §4.3, §4.6 ('Pyrazinamide is contra-indicated in breast-feeding mothers') https://www.medicines.org.uk/emc/product/101051/smpc; UK Rifater SmPC §4.6 https://www.medicines.org.uk/emc/product/1596/smpc; ATS/CDC/IDSA 2016 ('Breastfeeding is encouraged for women who are deemed noninfectious') https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B13 · Notes

⚠ **Boxed warning (US INH): severe, sometimes fatal hepatitis**; risk rises with age, daily alcohol, chronic liver disease and injection drug use, and may be higher post-partum → monthly symptom review; AST/ALT at baseline and periodically if ≥35 y; stop at the first hepatitis symptoms<br>EMB optic neuritis is dose- and duration-related and usually reversible; stop EMB if vision changes (仿單 §5.1)<br>Pyridoxine for patients at risk of neuropathy (pregnancy, breastfeeding, HIV, diabetes, alcohol, malnutrition, CKD, elderly) (ATS 2016; US INH)<br>Red-orange urine, sweat and tears; soft contact lenses stained permanently (仿單 §5.1)<br>Do not interrupt daily RIF: intermittent or resumed dosing → flu-like illness, haemolysis, acute renal failure (仿單 §5.1, §8.1)<br>SCAR/DRESS → stop; never rechallenge after SJS/TEN/AGEP (UK Rifater §4.4). Also TMA (TTP/HUS), ILD/pneumonitis, and paradoxical TB worsening (continue therapy) (UK Rifater §4.4)<br>PZA: baseline uric acid (no Monitor tag); acute gout + hyperuricaemia → switch to a PZA-free regimen (Akurit-3/HR) (仿單 §4)<br>Diabetes may become harder to control (Akurit-3 仿單 §5.1)<br>DST before starting; FDC is only for drug-susceptible TB, not MDR/RR-TB (ATS/CDC/ERS/IDSA 2019, PMID 31729908) and not LTBI (PMID 32053584)<br>FDC vs single drugs: outcomes are equivalent, and the FDC reduces errors (ATS 2016). TDM (2 h/6 h levels) for malabsorption, slow response, renal failure or DDIs (ATS 2016)

**Why:** The column is empty. Boxed warnings must appear in Notes (ground rule). Items with no tag (uric acid, resistance, LTBI exclusion) go here.

**Sources:** US isoniazid label boxed WARNING https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; Akurit-4 仿單 §4, §5.1, §8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 §5.1 (糖尿病) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F; UK Rifater SmPC §4.4 https://www.medicines.org.uk/emc/product/1596/smpc; ATS/CDC/IDSA 2016, PMID 27516382 https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; ATS/CDC/ERS/IDSA DR-TB 2019, PMID 31729908 https://pubmed.ncbi.nlm.nih.gov/31729908/; NTCA/CDC LTBI 2020, PMID 32053584 https://pubmed.ncbi.nlm.nih.gov/32053584/

### B14 · Category

Keep as is; optionally add ATC: "Antimycobacterial FDC (RIF/INH/PZA/EMB; RIF/INH/EMB); ATC J04AM06 / J04AM07"

**Why:** The category is correct and matches the TFDA composition and the ATC codes (J04AM06 rifampicin, pyrazinamide, ethambutol and isoniazid; J04AM07 rifampicin, ethambutol and isoniazid).

**Sources:** Akurit-4 仿單 ATC Code https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025518%E8%99%9F; Akurit-3 仿單 ATC Code https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC025519%E8%99%9F

### B15 · Page body

Add the standard body sections used in other entries (e.g. Klaricid): Category (with ATC J04AM06/J04AM07, licences 衛署藥輸字第025518/025519號); Mechanism; Indications table (Label: 結核病 — both 仿單; Guideline: 2HRZE→4HR, EMB stopped once susceptible, ≥9 mo HRE if PZA omitted — PMID 27516382); Coverage (M. tuberculosis; NOT for MDR/RR-TB, NTM, LTBI); Adult Dose table (weight band × Akurit-4/Akurit-3 tablets + mg delivered + ≥71 kg cap caveat); Renal table (CrCl ≥30 / <30 / HD / PD / CRRT as in B2); Hepatic; Pediatric; Side Effects; Monitor (incl. uric acid, monthly vision/colour); Drug Interactions table (contraindicated / avoid / adjust / INH / antacids / Liverpool); Notes (INH boxed hepatitis, EMB optic neuritis); Pregnancy; Breastfeeding; References with URLs: both TFDA 仿單, UK Rifater SmPC eMC 1596, Rifadin eMC 6382, Pyrazinamide eMC 101051, Ethambutol eMC 14174, Isoniazid eMC 14798, the four DailyMed setids, the four LactMed NBKs, PMIDs 27516382, 31729908, 32053584, 28895161, 26463491

**Why:** The page body is empty; existing entries carry a full structured body with a References list. Content should mirror the proposed column text. Leave out storage and stability (the owner removed them).

**Sources:** Notion style reference: Klaricid entry https://app.notion.com/p/3f0c496dfff1811db68afeb648a9b744; All sources listed in B1–B13

## Apply log

- Adult dose: merged A1+B1 (weight bands, mg/kg delivered, ≥71 kg 疾管署 cap caveat, <30 kg single agents, Akurit-3 持續治療期/2HRE→7HR, daily-only RIF, EMB stop when susceptible)
- Renal dose, HD, CRRT: merged A2+B2 (fixed ratio cannot be adjusted; EMB renal accumulation; RIF ≤600 no change; CrCl<30/HD single agents 3×/week after HD with UK EMB 15–25 mg/kg and ATS Table 12 20–25 mg/kg flagged; PD/CRRT TDM with PMIDs 28895161, 26463491)
- Hepatic dose: merged A3+B3 (contraindications, Akurit-4 no restart, LFT q2–4 wk, Rifadin 8 mg/kg → single agents, ATS DILI rechallenge)
- Pediatric dose: merged A4+B4 (not established, EMB <13 y, single-agent mg/kg doses, visual checks)
- Indications: [Tuberculosis]
- Coverage: [Mycobacteria]
- Side Effects: union of A7+B7 (19 existing options incl. coagulopathy, Vitamin K deficiency, tooth discoloration)
- Monitor: LFT, CBC, renal, eye exam, neuro, PT/INR, glucose, TDM
- Mechanism: merged A9+B9
- Drug Interactions: merged A10+B10 (contraindicated US/UK, avoid incl. daclatasvir/sofosbuvir/simeprevir, induction effects, INH theophylline/tyramine, halothane, antacids, lab assays, Liverpool checker)
- Pregnancy: merged A11+B11 (no letter category, PZA case by case → Akurit-3 ≥9 mo, vitamin K, EMB, pyridoxine, 仿單 §6.1)
- Breastfeeding: merged A12+B12 (LactMed NBKs with rev dates, PZA infant monitoring, infant pyridoxine 1 mg/kg/day, UK PZA contraindication)
- Notes: B13 with first line replaced by A13 detailed INH boxed-warning line
- Category: appended ATC J04AM06 / J04AM07
- Page body: full structured body (Category, Mechanism, Indications table, Coverage, Adult Dose weight-band table, Renal table, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions table, Notes, Pregnancy, Breastfeeding, References with all cited sources and URLs)
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
