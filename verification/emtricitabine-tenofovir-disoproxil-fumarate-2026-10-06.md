# New entry: Truvada (Emtricitabine/TDF)

- **Notion entry:** [Truvada (Emtricitabine/TDF)](https://app.notion.com/3f1c496dfff181fdb09cfbe94a8c2b37). Created 2026-10-06.
- **Hospital codes:** TRU01 (Truvada tab 200/300 mg), TRU03 (專案 Truvada, PrEP programme)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/emtricitabine-tenofovir-disoproxil-fumarate.json` (plus any Taiwan insert text files)

## Product and sources

Truvada (emtricitabine 200 mg + tenofovir disoproxil fumarate 300 mg) film-coated tablet, Gilead. Taiwan licence 衛署藥輸字第024769號 (舒發泰膜衣錠), NHI code BC24769100, ATC J05AR03. The hospital stocks it as TRU01 (general) and TRU03 (【專案】PrEP programme, NHI price 0, outpatient ADC). Both are PO only, with no IV form. Sources checked: US label (DailyMed setid 54e82b13-a037-49ed-b4b3-030b37c0ecdd, v32, Jul 25 2025, including the boxed warning pulled from the SPL XML), UK SmPC (eMC 3890, rev 28/02/2024), Taiwan insert (artwork 11 SEP 2024; PDF 07360bcf-31f4-4cca-ac0a-db88549997d1), and LactMed for emtricitabine (NBK501548) and TDF (NBK501549). The Notion page is a new entry: every column and the page body are empty, and only Title and Category are set.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 1 tab (FTC 200 mg / TDF 300 mg) QD, with or without food (FDA 2.3/2.5; TW仿單 2.3/2.4). UK SmPC 4.2: preferably with food<br>• **HIV-1 treatment**: 1 tab QD **plus other ARVs**. Truvada alone is not a complete regimen (FDA 1.1/5.2)<br>• **HIV-1 PrEP** (院內 TRU03 專案): 1 tab QD for HIV-negative adults and adolescents ≥35 kg. Confirm HIV-negative immediately before starting, then retest at least every 3 months and whenever an STI is diagnosed (FDA 2.2/2.5; TW仿單)<br>• Missed dose (SmPC 4.2): if <12 h late, take it as soon as possible; if >12 h late and the next dose is near, skip it. Vomiting within 1 h of a dose → take another tablet<br>• On-demand "2-1-1" PrEP (2 tabs 2–24 h before sex, then 1 tab at 24 h and 1 tab at 48 h) is **not labelled**. Evidence comes from MSM only (IPERGAY, Molina 2015, PMID 26624850)<br>• Tablet may be dispersed in ~100 mL of water, orange juice or grape juice and taken immediately (SmPC 4.2)

**Why:** The column is empty. Labels give one fixed dose for both indications. TRU03 is PrEP programme stock, so PrEP dosing and HIV testing must appear here. The on-demand regimen is used in practice but is off-label, so it is marked as unlabelled and tied to a verified PMID.

**Sources:** US FDA label (DailyMed) sections 1, 2.2, 2.3, 2.5: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.2 Posology: https://www.medicines.org.uk/emc/product/3890/smpc; TW仿單 舒發泰膜衣錠 衛署藥輸字第024769號, sections 2.3/2.4: https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1; Molina JM et al. NEJM 2015 (IPERGAY), PMID 26624850 (verified via esummary): https://pubmed.ncbi.nlm.nih.gov/26624850/

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> **TW仿單 (院內 TRU01/TRU03) = FDA**. CrCl by Cockcroft-Gault using **ideal (lean) body weight**<br>**HIV treatment**: CrCl ≥50 → 1 tab q24h; 30–49 → 1 tab **q48h** (not clinically evaluated, so monitor clinical response and renal function closely); <30 or HD → **not recommended**, because the fixed-dose tablet cannot be adjusted. Use the separate FTC and TDF products with their own renal dosing, or another regimen<br>**PrEP**: **not recommended if CrCl <60**. If CrCl falls during PrEP, evaluate the cause and reassess whether to continue (FDA 2.6/5.3; TW仿單)<br>**UK SmPC**: use at CrCl <80 only if benefit > risk; 50–80 → QD (limited data); 30–49 → q48h (based on PK modelling); <30/HD not recommended; PrEP 60–80 QD (limited data), <60 not recommended<br>Paediatric renal impairment: no data (FDA); not recommended <18 y (SmPC 4.2/4.4)<br>HD clearance: a 3-h HD removes ~30% of an FTC dose; a 4-h HD removes ~10% of a tenofovir dose (FDA 10)<br>**CRRT / PD**: no label data → not recommended; use the separate components with ID/pharmacy input

**Why:** The column is empty. Per the ground rules, the stocked product's Taiwan insert takes priority; it matches the FDA label, and the SmPC values are shown alongside. The PrEP threshold of CrCl <60 is critical for TRU03 stock. The lean-body-weight footnote appears in both the FDA Table 2 and TW Table 1.

**Sources:** US FDA label 2.6 Table 2, 5.3, 8.6, 10 Overdosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.2 Table 1 Renal impairment: https://www.medicines.org.uk/emc/product/3890/smpc; TW仿單 2.5 表1 (a. 按理想（瘦）體重計算), 5.3: https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1

### A3 · Hepatic dose

No dose adjustment (SmPC 4.2). Tenofovir PK not substantially altered in moderate–severe hepatic impairment; FTC not studied, but it has minimal hepatic metabolism, so impact should be limited (FDA 12.3)<br>Safety and efficacy not established in significant underlying liver disease; HIV with chronic HBV/HCV co-infection → ↑ risk of severe or fatal hepatic adverse reactions (SmPC 4.4)<br>⚠ HBV co-infection: do not stop abruptly. With advanced liver disease or cirrhosis, the SmPC advises against discontinuation (risk of post-treatment flare and decompensation; FDA boxed warning, SmPC 4.4)

**Why:** The column is empty. The labels support 'no adjustment', and the hepatic-risk caveats and HBV flare warning belong in this column.

**Sources:** UK SmPC 4.2 Hepatic impairment, 4.4 Liver disease / Patients with HBV or HCV: https://www.medicines.org.uk/emc/product/3890/smpc; US FDA label 12.3 Patients with Hepatic Impairment, Boxed Warning, 5.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd

### A4 · Pediatric dose

**TW仿單 (院內 200/300 mg tab only)**: HIV treatment and PrEP **only if ≥35 kg** → 1 tab QD. Not approved <35 kg in Taiwan (TW仿單 1.1/8.4)<br>FDA: HIV treatment ≥17 kg using low-strength tabs: 17–<22 kg 100/150 mg; 22–<28 kg 133/200 mg; 28–<35 kg 167/250 mg QD. These are **not marketed in Taiwan or stocked**. Not approved <17 kg (FDA 2.4/8.4)<br>UK SmPC: HIV treatment in adolescents ≥12 y and ≥35 kg only when NRTI resistance or toxicity rules out first-line agents; <12 y not established<br>PrEP <35 kg: not established (FDA 8.4)<br>Paediatric renal impairment: not recommended (SmPC); stop if renal impairment develops (SmPC 4.4)<br>TDF → less BMD gain in children; monitor bone/phosphate (FDA 5.5). Adolescents on PrEP: adherence falls when visits become quarterly → see them more often (FDA 8.4)

**Why:** The column is empty. The TW and US labels differ on the minimum weight (35 kg vs 17 kg), because the low-strength tablets exist only in the US. The stocked product's insert takes priority, and the FDA values are given for context.

**Sources:** TW仿單 1.1, 2.3, 8.4 (TRUVADA 未被核准使用於體重低於 35 公斤的兒童): https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1; US FDA label 2.4 Table 1, 5.5, 8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.1, 4.2 Paediatric population, 4.4: https://www.medicines.org.uk/emc/product/3890/smpc

### A5 · Indications

HIV, HIV PrEP

**Why:** FDA 1.1/1.2, SmPC 4.1 and TW仿單 1.1/1.2 list exactly these two indications. HBV is not an approved Truvada indication, so it is left out of Indications; HBV activity is covered under Coverage and Notes. Both options exist in the schema.

**Sources:** US FDA label 1 Indications and Usage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.1: https://www.medicines.org.uk/emc/product/3890/smpc; TW仿單 1.1/1.2: https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1

### A6 · Coverage

HIV, HBV

**Why:** Both components act on HIV-1 (and strain-specifically on HIV-2) and on hepatitis B virus (SmPC 5.1: 'Both emtricitabine and tenofovir have activity that is specific to HIV-1 and HIV-2 and hepatitis B virus'). HBV DNA falls 3 log10 with FTC and 4–5 log10 with TDF in co-infected patients (SmPC 5.1). Tag HBV for activity only; Notes must say Truvada is not licensed for HBV monotherapy.

**Sources:** UK SmPC 5.1 Mechanism of action / HIV-HBV co-infection: https://www.medicines.org.uk/emc/product/3890/smpc; US FDA label 12.4 Microbiology (HIV-1 clades A–G/O; strain-specific HIV-2): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd

### A7 · Side Effects

GI, CNS, nephrotoxicity, AKI, hypokalemia, lactic acidosis, bone loss, LFT↑, rhabdomyolysis, myopathy, IRIS, autoimmune, hypersensitivity, neutropenia

**Why:** All tags are existing schema options. Label support: diarrhoea, nausea and vomiting (GI); headache, dizziness, depression, insomnia, abnormal dreams (CNS) (FDA 6.1). Acute renal failure, Fanconi syndrome and proximal tubulopathy (nephrotoxicity/AKI, FDA 5.3/6.2). Hypokalaemia and lactic acidosis (FDA 6.2/5.6). BMD decrease and osteomalacia (bone loss, FDA 5.5). Raised transaminases and hepatitis (LFT↑). Rhabdomyolysis and myopathy (FDA 6.2). Immune reconstitution syndrome and autoimmune disorders such as Graves' (FDA 5.4). Allergic reaction and angioedema (hypersensitivity, FDA 6.2). Neutropenia is common with FTC (SmPC 4.8). Hypophosphataemia, skin hyperpigmentation and pancreatitis have no tag, so they go in Notes.

**Sources:** US FDA label 5.3–5.6, 6.1, 6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.8 Table 3: https://www.medicines.org.uk/emc/product/3890/smpc

### A8 · Monitor

renal, electrolyte, HBV serology, viral load, LFT

**Why:** Before and during therapy: serum creatinine, CrCl, urine glucose and urine protein, plus serum phosphorus in CKD (FDA 2.1). SmPC 4.4 schedule: CrCl and phosphate at 2–4 weeks, at 3 months, then every 3–6 months. HBV test before or at initiation (FDA 2.1, boxed warning). HIV-1 test before PrEP, at least every 3 months and when an STI is diagnosed; HIV RNA for treatment response (FDA 2.2/5.2). LFTs for several months after stopping in HBV-infected patients (boxed warning). There is no BMD tag, so DEXA goes in Notes.

**Sources:** US FDA label Boxed Warning, 2.1, 2.2, 5.1–5.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.4 Renal monitoring: https://www.medicines.org.uk/emc/product/3890/smpc

### A9 · Mechanism

Two NRTIs: **emtricitabine (FTC)** = **nucleoside** (cytidine) analogue → FTC-triphosphate, which competes with dCTP. **Tenofovir DF** = **nucleotide** analogue (acyclic nucleoside phosphonate diester of AMP) → hydrolysed to tenofovir → tenofovir diphosphate, which competes with dATP. Both inhibit HIV-1 reverse transcriptase and cause DNA chain termination; weak inhibitors of human DNA polymerases α/β/γ (FDA 12.4). Also active against HBV polymerase (SmPC 5.1)<br>Resistance: M184V/I (FTC), K65R and K70E (tenofovir) (FDA 12.4)<br>PK: F = FTC 92%, tenofovir 25% (fasted). Plasma t½: FTC ~10 h, tenofovir ~17 h. Renal elimination by glomerular filtration plus active tubular secretion (FDA 12.3)

**Why:** The column is empty. Naming the nucleoside vs nucleotide classes correctly matters because the hospital database swaps them (see the hospital-database issues).

**Sources:** US FDA label 12.3, 12.4 Mechanism of Action / Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/3890/smpc

### A10 · Drug Interactions

**Do not combine** with other FTC-, TDF- or TAF-containing products, lamivudine (another cytidine analogue) or adefovir (SmPC 4.4/4.5)<br>**Didanosine**: ↑ ddI → pancreatitis, neuropathy, CD4 suppression. FDA: if >60 kg reduce ddI to 250 mg and monitor. SmPC: not recommended<br>**Atazanavir (unboosted)**: ↓ ATV → give ATV 300 mg with RTV 100 mg (FDA 7.2)<br>**LPV/r, ATV/r, DRV/r**: ↑ tenofovir → monitor for TDF toxicity (renal) (FDA 7.2)<br>**HCV DAAs** (sofosbuvir/velpatasvir, SOF/VEL/voxilaprevir, ledipasvir/sofosbuvir): ↑ tenofovir → monitor. LDV/SOF plus a ritonavir- or cobicistat-boosted PI: consider an alternative HCV or ARV regimen (FDA 7.2; SmPC 4.4)<br>**Nephrotoxic drugs or drugs cleared by tubular secretion** (acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides, high-dose or multiple NSAIDs): ↑ FTC/tenofovir and/or the co-drug and ↑ nephrotoxicity → avoid concurrent or recent nephrotoxins (FDA 5.3/7.1)<br>Low CYP potential. TDF is a P-gp/BCRP substrate, so inhibitors of these transporters may ↑ absorption (FDA 12.3)<br>For the rest: Liverpool checker https://www.hiv-druginteractions.org

**Why:** The column is empty. The specialist-drug rule asks for a summary of the label's contraindicated and major interactions plus a pointer to the Liverpool checker.

**Sources:** US FDA label 5.3, 5.7, 7.1, 7.2 Table 7, 12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.4, 4.5 (Concomitant use not recommended; Didanosine): https://www.medicines.org.uk/emc/product/3890/smpc; Liverpool HIV interaction checker: https://www.hiv-druginteractions.org (not reachable from this sandbox; cited as a pointer only)

### A11 · Pregnancy

May be used. FDA 8.1 (narrative; letter categories retired): Antiretroviral Pregnancy Registry shows no ↑ major birth defects. First-trimester rates: FTC 2.3–2.6%, TDF 2.1–2.4%, vs MACDP background 2.7%. No adverse developmental effects in animals<br>PrEP: HIV acquisition risk rises during pregnancy, and acute infection raises mother-to-child transmission risk → consider continuing or starting Truvada PrEP in pregnancy (FDA 8.1; TW仿單)<br>SmPC 4.6: >1,000 pregnancy outcomes with no malformation or fetal/neonatal toxicity → may be considered if necessary. Mitochondrial dysfunction reported in infants exposed in utero to NRTIs, mostly zidovudine regimens (SmPC 4.4)<br>Register exposures with the APR (1-800-258-4263)

**Why:** The column is empty. The ground rules forbid a letter category, and the hospital database still shows 'B (FDA)'.

**Sources:** US FDA label 8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.4, 4.6: https://www.medicines.org.uk/emc/product/3890/smpc; TW仿單 懷孕 section: https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1

### A12 · Breastfeeding

**HIV treatment**: FDA, TW仿單 and SmPC all say do not breastfeed (risk of HIV transmission, resistance and infant ADRs). LactMed (2026) is more nuanced: with sustained undetectable viral load, a choice to breastfeed should be supported; if viral load is not suppressed, use banked pasteurised donor milk or formula<br>**PrEP**: weigh breastfeeding benefits against the maternal need for PrEP (FDA 8.2). Tenofovir was undetectable and FTC was <1% of the infant therapeutic Cmax in infant plasma; 2/50 infants had mild diarrhoea (FDA 8.2). LactMed: infant FTC dose ~0.5% of a therapeutic dose; tenofovir exposure trivial<br>Do not breastfeed if acute HIV infection is suspected (FDA 8.2; TW仿單)<br>SmPC 4.6: 'Truvada should not be used during breast-feeding'

**Why:** The column is empty. The labels and LactMed differ for HIV treatment, so both are shown, with each source attributed.

**Sources:** US FDA label 8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/3890/smpc; LactMed Emtricitabine NBK501548 (rev 2026-03-15): https://www.ncbi.nlm.nih.gov/books/NBK501548/; LactMed Tenofovir Disoproxil Fumarate NBK501549 (rev 2026-08-15): https://www.ncbi.nlm.nih.gov/books/NBK501549/; TW仿單 哺乳 section: https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1

### A13 · Notes

⚠ **Boxed warning (FDA/TW仿單)**: (1) **Severe acute HBV exacerbation after stopping**. Test for HBV before or at start. In HBV-infected patients who stop, monitor LFTs clinically and by lab for at least several months; anti-HBV therapy if appropriate. Offer HBV vaccine to the uninfected. (2) **PrEP during undiagnosed early HIV → drug resistance** (M184V/I, K65R). Prescribe only to people confirmed HIV-negative immediately before starting and at least every 3 months. With recent (<1 month) exposure or acute-HIV symptoms, use a test cleared for acute HIV before starting. If HIV is diagnosed, switch to a full treatment regimen<br>CI: PrEP in people with unknown or positive HIV status (FDA/SmPC/TW仿單); hypersensitivity (SmPC)<br>Not a complete HIV regimen: combine with a third active agent<br>PrEP is part of a comprehensive prevention strategy (condoms, STI testing, adherence counselling). Efficacy correlates strongly with adherence (iPrEx, Grant 2010, PMID 21091279; Partners PrEP, Baeten 2012, PMID 22784037). Time to maximal protection is unknown (FDA 5.2)<br>Renal: SCr/CrCl, urine glucose and urine protein before and during; phosphate in CKD. Persistent bone, muscle or limb pain → check for proximal tubulopathy, hypophosphataemia or osteomalacia (FDA 5.3/5.5)<br>Bone: consider BMD testing if there is a fracture history or osteoporosis risk; calcium/vitamin D may help (FDA 5.5)<br>Lactic acidosis or severe hepatomegaly with steatosis → suspend (FDA 5.6)<br>Other ADRs without a tag: hypophosphataemia (very common, SmPC), skin hyperpigmentation (FTC; 32% in children), pancreatitis, ↑ amylase<br>Not licensed for HBV alone, although both components are active against HBV (SmPC 5.1)<br>院內 TRU01 (一般) & TRU03 (【專案】PrEP), both FTC 200 mg/TDF 300 mg tab, 衛署藥輸字第024769號. PO only; FDA low-strength paediatric tabs not available

**Why:** The column is empty. Under the specialist-drug rule, the boxed warning (HBV flare on stopping, and resistance when used as PrEP in early HIV) must appear in Notes. Items without a tag (hypophosphataemia, hyperpigmentation, pancreatitis, BMD) belong here too.

**Sources:** US FDA label Boxed Warning (from SPL XML), 4, 5.1–5.6, 6.1, 6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC 4.3, 4.4, 4.8, 5.1: https://www.medicines.org.uk/emc/product/3890/smpc; TW仿單 警告/禁忌症: https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1; TFDA licence page 衛署藥輸字第024769號: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; Grant RM et al. NEJM 2010 (iPrEx), PMID 21091279 (verified): https://pubmed.ncbi.nlm.nih.gov/21091279/; Baeten JM et al. NEJM 2012 (Partners PrEP), PMID 22784037 (verified): https://pubmed.ncbi.nlm.nih.gov/22784037/

### A14 · Page body

Build the body in the same structure as other reviewed antiviral entries (e.g. Famvir): ## Emtricitabine/Tenofovir DF (Truvada) → ### Category / Mechanism / Indications (FDA vs SmPC vs TW仿單: treatment ≥17 kg US vs ≥35 kg TW; SmPC adolescents only if NRTI resistance/toxicity; PrEP ≥35 kg) / Coverage / Adult Dose / Renal Dose (table: CrCl ≥50 q24h \| 30–49 q48h \| <30 & HD not recommended \| PrEP <60 not recommended; CrCl by lean body weight; SmPC column alongside) / Hepatic Dose / Pediatric Dose (TW ≥35 kg; FDA low-strength table) / Side Effects / Monitoring / Drug Interactions (table: drug \| effect \| management, as in A10) / Notes (boxed warning first) / Pregnancy / Breastfeeding / References. References: 1. FDA label DailyMed setid 54e82b13-a037-49ed-b4b3-030b37c0ecdd (v32, Jul 25 2025); 2. UK SmPC eMC 3890 (rev 28/02/2024); 3. 舒發泰膜衣錠 仿單 衛署藥輸字第024769號 (11 SEP 2024; uploaded 2024-12-24) https://mcp.fda.gov.tw/insert/pdfcasefile/07360bcf-31f4-4cca-ac0a-db88549997d1 ; 4. TFDA licence page; 5. LactMed Emtricitabine NBK501548 (rev 2026-03-15); 6. LactMed TDF NBK501549 (rev 2026-08-15); 7. Molina 2015 PMID 26624850; 8. Grant 2010 PMID 21091279; 9. Baeten 2012 PMID 22784037; 10. Liverpool HIV interaction checker.

**Why:** Existing reviewed entries have a structured body with a References section. This page has none.

**Sources:** Style reference: Famvir (Famciclovir) Notion entry https://app.notion.com/p/3f0c496dfff1818a9132ec4ff42fbc45; All label URLs as in A1–A13

### A15 · Renewed date

2026-10-06 (set when the content is written)

**Why:** Other reviewed entries set Renewed date when their content is written.

**Sources:** Style reference: Famvir entry Renewed date 2026-10-05 https://app.notion.com/p/3f0c496dfff1818a9132ec4ff42fbc45

### B1 · Adult dose

<span color="blue">`PO`</span> Truvada tab = emtricitabine (FTC) 200 mg + tenofovir disoproxil fumarate (TDF) 300 mg (= 245 mg tenofovir disoproxil); 本院 TRU01 / TRU03【專案 PrEP】. 1 tab QD, with or without food (US 2.3/2.5; TW 2.3/2.4); UK 4.2: preferably with food<br>• **HIV-1 treatment**: 1 tab QD, **always with other ARVs**. Truvada alone is NOT a complete regimen (須併用其他抗反轉錄病毒藥物)<br>• **HIV-1 PrEP** (adults/adolescents ≥35 kg): 1 tab QD. Start ONLY after a negative HIV-1 test immediately before starting. If exposure was <1 month ago or there are acute-HIV symptoms: use a test cleared for acute HIV (FDA), or delay ≥1 month and re-test (UK). Repeat the HIV test at least every 3 months and at any STI diagnosis<br>• Missed dose (UK 4.2): if <12 h late, take ASAP; if >12 h late and the next dose is near, skip it. If vomiting within 1 h, take another tab<br>• Tab may be dispersed in ~100 mL water / orange or grape juice and taken immediately (UK SmPC 4.2)<br>• Off-label: on-demand '2-1-1' PrEP (2 tabs 2–24 h before sex, then 1 tab at 24 h and 1 tab at 48 h) for cisgender MSM only. Supported by IPERGAY (PMID 26624850) and IAS-USA 2024 (PMID 39616604). Not for people exposed through vaginal/neovaginal sex, and not for people with chronic HBV

**Why:** The column is empty. Doses are the same in all three labels: US 2.3/2.5, TW 2.3/2.4 (每日一次口服一錠，無須考慮是否與食物併服), and UK 4.2 ('One tablet, once daily'). The PrEP screening rules come from the US boxed warning and 2.2, the TW boxed warning (至少每 3 個月一次), and UK 4.4 ('delayed for at least one month'). The missed-dose, vomiting and dispersion advice is in UK 4.2 only. The 2-1-1 regimen is off-label and supported by guideline/RCT evidence; both PMIDs were checked with esummary.

**Sources:** US FDA Truvada label §2.2, 2.3, 2.5 + Boxed Warning — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC Truvada §4.2, 4.4 — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 舒發泰 §2.2–2.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; Molina JM et al. On-Demand PrEP (IPERGAY). N Engl J Med 2015 (PMID 26624850) — https://pubmed.ncbi.nlm.nih.gov/26624850/; Gandhi RT et al. IAS-USA 2024 recommendations. JAMA 2025 (PMID 39616604) — https://pubmed.ncbi.nlm.nih.gov/39616604/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (TW 表1 = FDA Table 2; CrCl by **ideal (lean) body weight**, 按理想（瘦）體重計算)<br>**HIV treatment:**<br>CrCl ≥50: 1 tab q24h<br>CrCl 30–49: 1 tab **q48h**. Not clinically evaluated, so monitor renal function and virologic response closely<br>CrCl <30 or HD: **Truvada not recommended** (不建議使用) → if needed, use the separate components: TDF 300 mg (Viread, stocked here) CrCl 10–29 q72–96h, HD q7d after dialysis; FTC 200 mg cap (Emtriva, not stocked) CrCl 15–29 q72h, <15/HD q96h after HD (US component labels). Otherwise consult ID / consider another regimen<br>**PrEP (TRU03): not recommended if CrCl <60**. If CrCl falls during PrEP, look for the cause and re-assess<br>UK SmPC: use at CrCl <80 only if benefit > risk; q48h dosing is based on modelling and may be suboptimal. Pts with CrCl 50–60 on q24h had 2–4× tenofovir exposure. Consider interrupting if CrCl <50 (treatment) / <60 (PrEP) or phosphate <1.0 mg/dL<br>HD: one 4-h session removes ~10% of the tenofovir dose (extraction ~54%); ~30% of FTC removed in 3 h (US 10)<br>CRRT: no label or guideline dose. FDC not suitable, so use components or an alternative with ID/pharmacist input (only sparse PK data, e.g. Dams 2020, PMID 32485171)

**Why:** The column is empty, and per the ground rules the TW insert (the stocked product) is the governing label. TW 2.5 表1 gives ≥50 q24h, 30–49 q48h, and <30 including HD 不建議使用, with footnote a '按理想（瘦）體重計算'. It also says 對未感染 HIV-1 且估計肌酸酐清除率低於 60 mL/min 的人不建議使用. The US 2.6 Table 2 is identical. UK 4.2 Table 1 and 4.4 add the <80 benefit/risk caution, the CrCl 50–60 exposure signal and the interruption thresholds. Component doses for CrCl <30 and HD were checked in Viread Table 3 and Emtriva Table 1. The HD removal figures are from US §10 Overdosage. I verified PMID 32485171 (Dams K, Clin Biochem 2020, TDF PK across RRT modalities), but PubMed has no abstract, so it is cited only as sparse PK data and no dose is taken from it.

**Sources:** TW 仿單 §2.5 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; US FDA Truvada §2.6, 8.6, 10 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.2 Table 1, §4.4 Renal management — https://www.medicines.org.uk/emc/product/3890/smpc; US Viread label §2 Table 3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33fd6418-fbdc-42ca-a50d-ce2a476a5418; US Emtriva label §2 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d6599395-3944-44f9-97f2-e0424c6b6a1f; Dams K et al. Clin Biochem 2020;83:86-88 (PMID 32485171) — https://pubmed.ncbi.nlm.nih.gov/32485171/

### B3 · Hepatic dose

No dose adjustment (肝功能不全：無需調整; UK SmPC 4.2). Tenofovir PK not substantially altered in moderate–severe hepatic impairment; FTC not studied but undergoes minimal hepatic metabolism (US 12.3). Safety not established in significant liver disease. HIV/HBV or HIV/HCV coinfection and pre-existing liver dysfunction carry a higher risk of hepatic adverse events, so monitor LFT (UK 4.4). ⚠️ HBV flare on stopping, see Notes

**Why:** The column is empty. UK 4.2 says 'No dose adjustment is required in patients with hepatic impairment'. US 12.3 says 'no substantial alterations in tenofovir pharmacokinetics… FTC is not significantly metabolized by liver enzymes'. The coinfection risk is in UK 4.4.

**Sources:** UK SmPC §4.2, 4.4 — https://www.medicines.org.uk/emc/product/3890/smpc; US FDA Truvada §12.3 Patients with Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd

### B4 · Pediatric dose

🇹🇼 TW insert (本院品項): **≥35 kg → adult dose 1 tab QD** for both HIV treatment (children ≥35 kg) and PrEP (adolescents ≥35 kg)<br>FDA only: HIV treatment 17 to <35 kg with low-strength tabs once daily: 17–<22 kg 100/150 mg; 22–<28 kg 133/200 mg; 28–<35 kg 167/250 mg. **Not available in Taiwan / 本院無低劑量錠**. Not approved <17 kg<br>UK: adolescents ≥12 y and ≥35 kg; treatment use in adolescents only when NRTI resistance or toxicity rules out first-line agents. Not recommended <18 y with renal impairment. Safety not established <12 y<br>PrEP <35 kg: not established. No pediatric renal-dosing data

**Why:** The column is empty. TW 1.1/2.3 say 成人及體重至少 35 公斤的兒童病人, and the TW insert has no 17 kg low-strength table. US 1.1, 2.4 Table 1 and 8.4 give the 17 kg bands. UK 4.1/4.2 give the adolescent ≥12 y and ≥35 kg rules and the NRTI-resistance/toxicity restriction. The hospital stocks only the 200/300 mg tablet.

**Sources:** TW 仿單 §1.1, 2.3, 2.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; US FDA Truvada §2.4 Table 1, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.1, 4.2 — https://www.medicines.org.uk/emc/product/3890/smpc

### B5 · Indications

HIV, HIV PrEP

**Why:** Both are approved in all three labels: US 1.1/1.2, UK 4.1 and TW 1.1/1.2. HBV is NOT an indication. UK 4.4 says the safety and efficacy of Truvada 'have not been specifically established in patients with chronic HBV infection'. Both tags exist in the schema.

**Sources:** US FDA Truvada §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.1, 4.4 — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 §1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F

### B6 · Coverage

HIV, HBV

**Why:** Activity against HIV-1 is in US 12.4: both agents are active against HIV-1 clades A–G (TFV also O), with strain-specific HIV-2 activity. HBV activity is in UK 4.4: 'Tenofovir disoproxil is indicated for the treatment of HBV and emtricitabine has shown activity against HBV'. That activity is also why the boxed warning covers HBV flare on stopping. Tag HBV as activity only, and state in Notes that it is not an HBV indication. Both tags exist.

**Sources:** US FDA Truvada §12.4 Antiviral Activity, Boxed Warning — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.4 Patients with hepatitis B — https://www.medicines.org.uk/emc/product/3890/smpc

### B7 · Side Effects

GI, CNS, nephrotoxicity, AKI, bone loss, lactic acidosis, LFT↑, IRIS, hypokalemia, hypersensitivity, rhabdomyolysis, myopathy

**Why:** US 6.1: diarrhea, nausea, fatigue, headache, dizziness, depression, insomnia, abnormal dreams and rash are ≥10%; PrEP adds headache, abdominal pain and weight decrease. US 5.3/6.2 and TW 5.3: acute renal failure, Fanconi syndrome and proximal tubulopathy. US 5.5 and TW 骨質流失及礦化作用不足: BMD loss and osteomalacia. US 5.6: lactic acidosis with hepatomegaly/steatosis. US 5.4: immune reconstitution syndrome. US 6.2 postmarketing: hypokalemia, hypophosphatemia, angioedema/allergic reaction, hepatitis/increased enzymes, rhabdomyolysis, myopathy and pancreatitis. Hyperpigmentation (3%) and hypophosphatemia have no tag, so they go in Notes. All proposed tags exist.

**Sources:** US FDA Truvada §5.3–5.6, 6.1, 6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.8 Table 3 — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 §5.3, 5.5, 5.6, 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F

### B8 · Monitor

renal, electrolyte, viral load, HBV serology, LFT

**Why:** US 2.1 / TW 2.1 require SCr, estimated CrCl, urine glucose and urine protein before and during use, plus serum phosphorus in CKD. UK 4.4 gives the schedule: CrCl and phosphate at 2–4 wk, at 3 mo, then every 3–6 mo. US 2.1 requires HBV testing before starting. Per US 2.2 and the boxed warning, HIV testing is needed before PrEP and at least every 3 months; on treatment, HIV RNA is followed. LFT is needed for several months after stopping in HBV-coinfected patients (boxed warning). BMD and TFV-DP DBS levels have no tag and go in Notes. Tag 'TDM' is NOT proposed: there is no routine TDM, and DBS adherence testing is a research/adherence tool (US 5.2/8.4).

**Sources:** US FDA Truvada §2.1, 2.2, 5.1, Boxed Warning — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.4 Renal monitoring — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 §2.1, 2.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F

### B9 · Mechanism

Two NRTIs. **Emtricitabine (FTC)** = **nucleoside** cytidine analogue → FTC-triphosphate. **Tenofovir DF** = prodrug of tenofovir, an acyclic **nucleotide** (nucleoside phosphonate) analogue of adenosine monophosphate → tenofovir-diphosphate. Both compete with natural dNTPs at HIV-1 reverse transcriptase and cause DNA chain termination; both are also active against HBV polymerase. Weak inhibitors of mammalian DNA pol α/β and mitochondrial pol γ. **Resistance:** M184V/I (FTC; cross-resistant with lamivudine), K65R and K70E (tenofovir). UK: avoid in ART-experienced pts with K65R

**Why:** Taken from US 11 ('FTC is a synthetic nucleoside analog of cytidine… tenofovir, an acyclic nucleoside phosphonate (nucleotide) analog of adenosine 5′-monophosphate'), US 12.4 Mechanism and Resistance (M184V/I, K65R, K70E), and UK 4.4 (avoid with K65R). This also confirms that the class labels on the hospital site are swapped.

**Sources:** US FDA Truvada §11, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.4 (K65R), §5.1 — https://www.medicines.org.uk/emc/product/3890/smpc

### B10 · Drug Interactions

• **Do not combine** with other FTC/TDF/TAF/lamivudine (cytidine analogue) products or adefovir (UK 4.5); avoid duplicate NRTIs<br>• **Nephrotoxic drugs**: avoid concurrent or recent use. Examples: high-dose or multiple NSAIDs (AKI reported), aminoglycosides, amphotericin B, foscarnet, cidofovir, pentamidine, vancomycin, IL-2. If unavoidable, monitor renal function weekly (UK)<br>• **Active tubular secretion** (acyclovir/valacyclovir, ganciclovir/valganciclovir, cidofovir, adefovir) → ↑ FTC/TFV and/or the co-drug<br>• **Boosted PIs** (lopinavir/r, atazanavir/r, darunavir/r) → ↑ tenofovir, so monitor for TDF toxicity. **Atazanavir**: TDF ↓ ATV, so give ATV 300 mg only with ritonavir 100 mg<br>• **HCV DAAs**: sofosbuvir/velpatasvir(/voxilaprevir) and ledipasvir/sofosbuvir → ↑ tenofovir, so monitor renal function. LDV/SOF + PI/r or PI/cobi: consider an alternative<br>• **Didanosine**: ↑ ddI (pancreatitis, neuropathy, ↓CD4). US: reduce ddI to 250 mg if >60 kg; UK: not recommended<br>• **Rifampicin**: TFV AUC ↓12%, no adjustment needed (UK Table 2), unlike TAF<br>• Not a CYP450 substrate/inhibitor; low CYP interaction potential<br>👉 Check all ART combinations at hiv-druginteractions.org (Liverpool)

**Why:** The column is empty. Sources: US 7.1 (tubular-secretion drugs, nephrotoxics) and 7.2 Table 7 (didanosine, atazanavir, PI/r, HCV DAAs); UK 4.5 (concomitant use not recommended with FTC/TDF/TAF/lamivudine/adefovir, didanosine not recommended, nephrotoxic examples, rifampicin no adjustment); TW 7.1/7.2 表6 (same drugs); US 5.3 (NSAID AKI).

**Sources:** US FDA Truvada §5.3, 7.1, 7.2 Table 7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.5 Table 2 — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 §7 表6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; Liverpool HIV interaction checker — https://www.hiv-druginteractions.org/checker

### B11 · Pregnancy

May be used in pregnancy (懷孕可使用). APR first-trimester major birth-defect rates: FTC 2.3%, TDF 2.1%, vs 2.7% background, so no increased risk; UK: >1,000 outcomes with no malformation signal. No animal developmental toxicity. PrEP: pregnancy raises the risk of HIV acquisition, so consider continuing or starting PrEP during pregnancy (US/TW 8.1). Register exposures with the Antiretroviral Pregnancy Registry. (Do not use FDA letter category)

**Why:** The column is empty. Sources: US 8.1 Risk Summary and Clinical Considerations, TW 8.1 (same APR figures, 2.3%/2.1% vs 2.7%), and UK 4.6 ('use of Truvada may be considered during pregnancy, if necessary'). Letter categories are retired, so the hospital's 'B (FDA)' must not be copied.

**Sources:** US FDA Truvada §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 §8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F

### B12 · Breastfeeding

**PrEP (HIV-negative mother)**: may breastfeed after weighing benefits (US/TW 8.2). Infant exposure is very low: tenofovir undetectable in infant plasma, and FTC <1% of the infant therapeutic Cmax (~0.5% of a therapeutic dose, LactMed). Do not breastfeed if acute HIV is suspected<br>**HIV treatment**: labels say do not breastfeed (US/TW 8.2; UK 4.6 'should not be used during breast-feeding'). LactMed: if the person is on ART with sustained undetectable viral load and chooses to breastfeed, support them; otherwise use formula or donor milk (哺乳與否依病毒量及專科評估)<br>HBV: LactMed sees no reason to contraindicate tenofovir

**Why:** The column is empty. Sources: US 8.2 (HIV treatment 'instruct mothers not to breastfeed'; PrEP benefit-risk; the 50-woman PrEP study), TW 8.2 (same wording), UK 4.6, and both LactMed summaries. Caution: the emtricitabine LactMed summary has the PrEP doses swapped ('tenofovir 200 mg and emtricitabine 300 mg'). Do not copy those dose numbers.

**Sources:** US FDA Truvada §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 §8.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; LactMed Emtricitabine NBK501548 (rev 2026-03-15) — https://www.ncbi.nlm.nih.gov/books/NBK501548/; LactMed Tenofovir Disoproxil Fumarate NBK501549 (rev 2026-08-15) — https://www.ncbi.nlm.nih.gov/books/NBK501549/

### B13 · Notes

本院品項: TRU01 Truvada 200/300 mg tab (舒發泰膜衣錠, 衛署藥輸字第024769號); TRU03【專案】Truvada (PrEP 專案). <span color="blue">`PO`</span> only; no low-strength pediatric tabs. Single-agent TDF (Viread) is stocked; single-agent FTC is not<br>⚠️ **Boxed warning (US/TW)**: (1) **severe acute HBV exacerbation after stopping**. Test HBV before starting; offer vaccination if HBV-uninfected; if HBV+, monitor LFT clinically and in the lab for several months after stopping (stopping not recommended in advanced liver disease/cirrhosis). (2) **PrEP in undiagnosed early HIV → drug resistance (M184V/I, K65R)**. Confirm HIV-negative immediately before starting and at least every 3 months<br>• **Contraindication**: PrEP in people whose HIV-1 status is unknown or positive (UK also: hypersensitivity)<br>• HBV-active (Coverage tag) but **not indicated for HBV alone** (UK 4.4)<br>• PrEP = part of combination prevention (condoms, STI testing). Protection depends strongly on adherence; time to maximal protection is unknown<br>• Renal tubulopathy / Fanconi (hypophosphatemia, glycosuria, proteinuria). Persistent bone or muscle pain → check renal function and phosphate. TDF lowers BMD: consider BMD testing if there is a fracture history or osteoporosis risk<br>• Skin hyperpigmentation ~3% in adults (mild); 32% in children on FTC<br>• No routine TDM. Tenofovir-diphosphate in dried blood spots was used in trials to measure adherence (US 8.4)<br>• Key trials: iPrEx (PMID 21091279), Partners PrEP (PMID 22784037)

**Why:** The column is empty. Ground rules require boxed warnings in Notes. The boxed warning text was confirmed from the live DailyMed SPL (truvada.json does not contain it) and from the TW insert 警告 box. The contraindication is in US 4, UK 4.3 and TW 4. HBV-not-indicated is in UK 4.4. Tubulopathy and BMD are in US 5.3/5.5. Hyperpigmentation is in US 6.1. The DBS/adherence point is in US 5.2/8.4. Trial PMIDs were checked with esummary.

**Sources:** US FDA Truvada Boxed Warning, §4, 5.1–5.5, 6.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; TW 仿單 警告 box, 禁忌症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F; UK SmPC §4.3, 4.4 — https://www.medicines.org.uk/emc/product/3890/smpc; Grant RM et al. iPrEx. N Engl J Med 2010 (PMID 21091279) — https://pubmed.ncbi.nlm.nih.gov/21091279/; Baeten JM et al. Partners PrEP. N Engl J Med 2012 (PMID 22784037) — https://pubmed.ncbi.nlm.nih.gov/22784037/

### B14 · Page body

Build the body with the same structure as sibling entries such as Valcyte: '# Emtricitabine/Tenofovir disoproxil fumarate (Truvada)' with a one-line intro (本院 TRU01/TRU03 <span color="blue">`PO`</span> only), then these sections: Mechanism of action (B9); Spectrum (HIV-1, HIV-2 strain-specific, HBV activity without HBV indication); Indications (approved: HIV-1 treatment with other ARVs; PrEP ≥35 kg; off-label 2-1-1 for cisgender MSM); Dosing → Adult table (treatment / PrEP daily / 2-1-1), Pediatric (B4), Renal table (TW 表1 + PrEP <60 + component doses for <30/HD + CRRT statement, B2), Hepatic (B3); Administration (with or without food; UK dispersion; missed dose); Adverse effects & monitoring (boxed warning first, then B7/B8 content, HIV test q3mo for PrEP); Drug interactions table (B10); Pregnancy & lactation (B11/B12); Clinical pearls (lean body weight CrCl; PrEP CrCl ≥60; never PrEP without a recent negative HIV test; do not stop abruptly in HBV; avoid NSAIDs and nephrotoxics); References (TW insert 024769, US setid 54e82b13…, UK eMC 3890, LactMed NBK501548/NBK501549, Viread and Emtriva labels, PMIDs 26624850, 39616604, 21091279, 22784037)

**Why:** The page body is blank. Sibling entries such as Valcyte (Valganciclovir) carry a full structured body with a references list, so this entry needs one too for consistency.

**Sources:** US FDA Truvada — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd; UK SmPC — https://www.medicines.org.uk/emc/product/3890/smpc; TW 仿單 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024769%E8%99%9F

### B15 · Renewed date

Set to the date the content is written (e.g. 2026-10-06)

**Why:** Sibling entries record a Renewed date when their content is filled in (Valcyte: 2026-10-05).

**Sources:** Notion sibling entry Valcyte (Valganciclovir) — https://app.notion.com/p/3f0c496dfff1811698b1cdd46aa0c31c

## Apply log

- Adult dose: A1+B1 merged (FTC 200/TDF 300 tab, TRU01/TRU03, treatment with other ARVs, daily PrEP ≥35 kg with HIV testing rules, missed dose, dispersion, off-label 2-1-1 PMIDs 26624850/39616604)
- Renal dose, HD, CRRT: A2+B2 merged (TW表1=FDA, lean body weight CrCl, ≥50 q24h / 30-49 q48h / <30 & HD not recommended plus Viread/Emtriva component doses, PrEP <60 not recommended, UK SmPC values, HD clearance, CRRT statement with PMID 32485171)
- Hepatic dose: A3+B3 merged
- Pediatric dose: A4+B4 merged (TW ≥35 kg, FDA low-strength table not in Taiwan, UK adolescent restriction, PrEP <35 kg, renal, bone)
- Indications: [HIV, HIV PrEP]
- Coverage: [HIV, HBV]
- Side Effects: [GI, CNS, nephrotoxicity, AKI, hypokalemia, lactic acidosis, bone loss, LFT↑, rhabdomyolysis, myopathy, IRIS, autoimmune, hypersensitivity, neutropenia]
- Monitor: [renal, electrolyte, HBV serology, viral load, LFT]
- Mechanism: A9+B9 merged (NRTI mechanisms, resistance M184V/I K65R K70E, K65R caution, PK)
- Drug Interactions: A10+B10 merged (no duplicates, ddI, ATV, boosted PIs, HCV DAAs, nephrotoxics/tubular secretion, rifampicin, P-gp/BCRP, Liverpool link)
- Pregnancy: A11+B11 merged (no letter category, APR rates, PrEP in pregnancy, SmPC, APR registration)
- Breastfeeding: A12+B12 merged (PrEP vs treatment, LactMed 2026 nuance, HBV)
- Notes: A13+B13 merged (hospital items TRU01/TRU03 licence 024769, boxed warning first, CI, not complete regimen, not licensed for HBV alone, PrEP adherence trials, renal/bone/lactic acidosis, untagged ADRs, TDM)
- Page body: built in Famvir-style structure (Category, Mechanism, Indications, Coverage, Adult Dose table, Renal Dose table TW/FDA vs SmPC, Hepatic, Pediatric with FDA table, Side Effects, Monitoring, Drug Interactions table, Notes with boxed warning first and clinical pearls, Pregnancy, Breastfeeding)
- References section appended (14 sources: FDA Truvada v32, UK SmPC eMC 3890, TW insert 024769, TFDA licence page, LactMed NBK501548/NBK501549, Viread and Emtriva labels, PMIDs 26624850, 39616604, 21091279, 22784037, 32485171, Liverpool checker)
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
