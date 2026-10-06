# New entry: Delstrigo (Doravirine/Lamivudine/TDF)

- **Notion entry:** [Delstrigo (Doravirine/Lamivudine/TDF)](https://app.notion.com/3f1c496dfff181cd8c48d4c16adde8d2). Created 2026-10-06.
- **Hospital codes:** DEL01 (Delstrigo tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/doravirine-lamivudine-tenofovir-disoproxil-fumarate.json` (plus any Taiwan insert text files)

## Product and sources

The product is Delstrigo (doravirine 100 mg / lamivudine 300 mg / tenofovir disoproxil fumarate 300 mg, equal to 245 mg tenofovir disoproxil), a film-coated tablet taken by mouth. Hospital code DEL01 (Delstrigo 錠劑 / 達滋克膜衣錠), NHI BC27739100, ATC J05AR24. TFDA licence 衛部藥輸字第027739號 (MSD Taiwan), insert MSD-000028732-TW-20251209. I re-checked the hospital P4 page (https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=DEL01) myself. DEL01 is the only stocked dosage form. Sources used: (1) US FDA label, DailyMed setid cd1e9f84-607a-46d3-b01e-2736018d67b6, v24, Revised 07/2026. It has a BOXED WARNING on HBV flare after stopping; I confirmed this from the SPL XML because the fetch script left the box out. (2) UK SmPC, eMC 9694, revised 18 Feb 2026. (3) Taiwan insert (TFDA). (4) LactMed component chapters: doravirine NBK532499, lamivudine NBK501536, TDF NBK501549. (5) Verified PMIDs: 30184165, 33336698 (DRIVE-AHEAD), 31548188 (switch from efavirenz). I could not reach clinicalinfo.hiv.gov (DHHS) or hiv-druginteractions.org (proxy 403), so I make no DHHS-specific claims; Liverpool is given only as a link. The Notion page was created 2026-10-06 and has only Abx and Category, so every other column is a "missing" finding. I could not tell what "do 1,2,3" referred to. I did the reviewer-A audit I was assigned; please confirm whether 1, 2 and 3 meant something else. I edited no files and committed nothing.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 1 tablet (DOR 100 mg / 3TC 300 mg / TDF 300 mg) once daily, with or without food; swallow whole (每日一次一錠，可空腹或隨餐，整粒吞服)<br>• Complete regimen. Do not add other ARVs.<br>• Before starting: test for HBV. Check SCr, estimated CrCl, urine glucose and urine protein (plus serum phosphorus in CKD), then repeat on a clinically appropriate schedule.<br>• With rifabutin: Delstrigo once daily + doravirine 100 mg (Pifeltro) about 12 h later, for as long as rifabutin is given (US/TW/UK).<br>• UK SmPC only: same extra doravirine 100 mg about 12 h later if a moderate CYP3A inducer cannot be avoided (e.g. bosentan, dabrafenib, modafinil, nafcillin, thioridazine, telotristat, lesinurad).<br>• Missed dose (UK): if ≤12 h late, take it now; if >12 h late, skip it. Never take 2 doses at once.

**Why:** Column is empty. The dose, testing, rifabutin adjustment and food statements are identical in the US, TW and UK labels. The moderate-inducer and missed-dose advice appears only in the UK SmPC.

**Sources:** US FDA label §2.1–2.4, §3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §3.1.1–3.1.2, §3.3.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.2 — https://www.medicines.org.uk/emc/product/9694/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> CrCl ≥50: no adjustment. **CrCl \<50 mL/min: not recommended** (TW仿單 3.3.1/6.7, US 2.3/8.6): the fixed-dose tablet does not allow the longer 3TC/TDF dosing interval. UK 4.2: do not start if CrCl \<50; stop if it falls below 50 during treatment (US 5.3 says the same)<br>HD / PD / CRRT: not recommended. There are no label data for the combination, and doravirine has not been studied in ESRD or dialysis (US 12.3). Use the individual agents, each dosed by its own label (clinical inference from the label wording, not stated outright)<br>Dialysis removal (US 10 / UK 4.9): TDF is efficiently removed by HD (extraction ~54%; a 4-h session removes ~10% of a dose). 3TC removal by HD/PD is negligible<br>Stop if renal function falls significantly or Fanconi syndrome develops (US 5.3 / TW仿單 5.1.3)

**Why:** Column is empty. All three labels give a CrCl 50 cutoff. The UK SmPC also says not to start and to stop if CrCl falls below 50; the US label says the same in §5.3. Using the separate components in renal failure follows directly from the 'cannot be adjusted' wording, but no label states it outright. Flag it as clinical inference.

**Sources:** US FDA label §2.3, §5.3, §8.6, §10, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §3.3.1, §5.1.3, §6.7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.2, §4.4, §5.2 — https://www.medicines.org.uk/emc/product/9694/smpc

### A3 · Hepatic dose

Child-Pugh A/B: no adjustment.<br>Child-Pugh C: not studied (US/TW); UK: use with caution, as doravirine exposure is unknown.<br>HBV coinfection: hepatitis may flare when the drug is stopped (see Notes).

**Why:** Column is empty. The US, TW and UK labels agree.

**Sources:** US FDA label §8.7, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §6.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.2 — https://www.medicines.org.uk/emc/product/9694/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> Weight ≥35 kg: 1 tablet once daily, as for adults (US/TW: children and adolescents ≥35 kg; supported by IMPAACT 2014 in ages 12 to \<18 y, with PK and safety similar to adults)<br>UK SmPC: only adolescents ≥12 y and ≥35 kg, and only when toxicity rules out regimens without TDF<br>Weight \<35 kg (UK: or age \<12 y): not established; not recommended<br>TDF and bone: smaller total-body BMD gain in children. Consider a BMD assessment if there is a history of pathologic fracture or other osteoporosis risk factors (US 5.5; UK 4.4)

**Why:** Column is empty. The UK paediatric indication is narrower than the US/TW one, so both are given.

**Sources:** US FDA label §1, §2.2, §5.5, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §2, §3.1.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.1, §4.2, §4.4 — https://www.medicines.org.uk/emc/product/9694/smpc

### A5 · Indications

["HIV"]

**Why:** Column is empty. All three labels indicate it for HIV-1 only: treatment-naive patients, or a switch in patients who are suppressed (RNA <50) with no prior failure and no known resistance to any component (US/TW). UK: no past or present resistance to NNRTIs, 3TC or tenofovir. It has no HBV indication, so do not tag HBV.

**Sources:** US FDA label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/9694/smpc

### A6 · Coverage

["HIV"]

**Why:** Column is empty. The label microbiology section (§12.4) gives only HIV-1 activity, against clades A–H and group O. 3TC and TDF are also active against HBV, but this product is not labelled for HBV. I suggest leaving out the HBV tag and explaining in Notes; the owner may choose to add HBV if the database tags intrinsic activity rather than labelled use.

**Sources:** US FDA label §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6

### A7 · Side Effects

["CNS","GI","LFT↑","nephrotoxicity","AKI","bone loss","SJS/TEN","DRESS","IRIS","lactic acidosis"]

**Why:** Column is empty. Basis for each tag:<br>• Most common (≥5%, DRIVE-AHEAD): dizziness 7%, nausea 5%, abnormal dreams 5%; also headache, insomnia, diarrhoea, somnolence and rash (2%).<br>• ALT >1.25×ULN in 22% after switching (DRIVE-SHIFT); HBV flare after stopping.<br>• From TDF: kidney damage (acute renal failure, Fanconi syndrome), bone loss and osteomalacia.<br>• SJS/TEN after marketing; DRESS added to US W&P 5.1 in 7/2026.<br>• IRIS.<br>• Lactic acidosis is post-marketing (3TC/TDF) and rare in the UK table.<br>All tags exist in the schema.

**Sources:** US FDA label §5.1–5.6, §6.1 Table 1, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.8 Table 2 — https://www.medicines.org.uk/emc/product/9694/smpc

### A8 · Monitor

["renal","electrolyte","HBV serology","LFT","viral load"]

**Why:** Column is empty. Basis for each tag:<br>• renal: SCr, CrCl, urine glucose and urine protein at baseline and during treatment.<br>• electrolyte: serum phosphorus in CKD (UK: in anyone at risk of kidney problems).<br>• HBV serology: HBV test before starting.<br>• LFT: in HBV coinfection for several months after stopping; ALT rises after a switch.<br>• viral load: needed to confirm the HIV RNA <50 criterion for a switch, and for routine ART monitoring.<br>• Not a tag: consider BMD if there is a history of pathologic fracture or osteoporosis risk.

**Sources:** US FDA label §2.1, §5.2, §5.3, §5.5, §6.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.4 — https://www.medicines.org.uk/emc/product/9694/smpc

### A9 · Mechanism

Doravirine: pyridinone NNRTI. It binds HIV-1 reverse transcriptase non-competitively and does not inhibit human DNA polymerases α, β or mitochondrial γ.<br>Lamivudine (cytidine analogue) and TDF (prodrug of tenofovir, an acyclic adenosine nucleotide analogue): converted inside cells to 3TC-triphosphate and tenofovir diphosphate. These compete with natural nucleotides, are built into the growing viral DNA chain and stop it (chain termination). Both are weak inhibitors of mammalian DNA polymerases α, β and mitochondrial γ (US 12.4 / TW仿單).<br>Resistance:<br>• NNRTI cross-resistance (doravirine-emergent substitutions reduce efavirenz, etravirine, nevirapine and rilpivirine activity). Y188L (alone or with K103N/V106I) gives >100-fold loss of doravirine susceptibility.<br>• M184V/I → 3TC/FTC resistance.<br>• K65R/K70E → tenofovir resistance.

**Why:** Column is empty. Text summarised from the label's mechanism and resistance sections.

**Sources:** US FDA label §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §1, microbiology section — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

### A10 · Drug Interactions

⛔ CONTRAINDICATED: strong CYP3A inducers (↓ doravirine → treatment failure and resistance): carbamazepine, oxcarbazepine, phenobarbital, phenytoin, enzalutamide, rifampin, rifapentine, mitotane, St John's wort (UK also lists lumacaftor). Stop the inducer ≥4 weeks before starting Delstrigo.<br>• Rifabutin: add doravirine 100 mg about 12 h after the Delstrigo dose.<br>• Moderate CYP3A inducers (UK): avoid; if unavoidable, add doravirine 100 mg as above.<br>• CYP3A inhibitors: ↑ doravirine, no dose change.<br>• Doravirine may be a weak CYP3A inducer (midazolam ↓18%) → caution with tacrolimus and sirolimus; monitor their levels (UK).<br>• Ledipasvir/sofosbuvir, sofosbuvir/velpatasvir: ↑ tenofovir → monitor for TDF toxicity.<br>• Sorbitol (and other polyols, UK): ↓ lamivudine → avoid long-term use together.<br>• Avoid concurrent or recent nephrotoxic drugs (e.g. high-dose or multiple NSAIDs; AKI reported). Drugs competing for tubular secretion (acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides) may ↑ 3TC/tenofovir → monitor renal function.<br>• Do not combine with other ARVs, or with other 3TC, TDF, TAF or adefovir products (US 7.1 / UK 4.4).<br>• No clinically significant interaction: antacids, PPIs, methadone, metformin, atorvastatin, ethinyl estradiol/levonorgestrel OC, elbasvir/grazoprevir, ritonavir, ketoconazole.<br>• Switching from efavirenz: doravirine levels drop briefly from leftover induction, but suppression was maintained in DRIVE-SHIFT (Greaves 2019, PMID 31548188).<br>• For other drugs: Liverpool HIV checker https://www.hiv-druginteractions.org

**Why:** Column is empty. These are the labelled contraindicated and major interactions. Liverpool is linked, as the ground rules require; I could not fetch that site. The efavirenz-switch point comes from a verified PMID.

**Sources:** US FDA label §4, §5.4, §7.1–7.3 Table 6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.3, §4.4, §4.5 — https://www.medicines.org.uk/emc/product/9694/smpc; TW 仿單 §4, §7 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; Greaves W et al. AAC 2019;63:e01298-19, PMID 31548188 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/31548188/

### A11 · Pregnancy

US §8.1 / 仿單: not enough APR data to assess the risk. Doravirine has not been evaluated in pregnancy. 3TC and TDF: APR shows no increase in major birth defects (3TC first-trimester exposure 3.1% vs 2.7% background). No harm in rat or rabbit studies with doravirine or TDF; 3TC caused embryo deaths in rabbits.<br>UK SmPC: as a precaution, preferably avoid in pregnancy.<br>Register exposures with the Antiretroviral Pregnancy Registry (APR).<br>(The FDA no longer uses letter categories.)

**Why:** Column is empty. The labels differ (UK says avoid as a precaution), so both are given. No letter category is used.

**Sources:** US FDA label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 懷孕 section — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/9694/smpc

### A12 · Breastfeeding

LactMed (each component):<br>• Doravirine: no clinical data; milk levels low (relative infant dose ~1–3%); no infant effects expected.<br>• 3TC: well studied and well tolerated in breastfed infants.<br>• TDF: trivial infant exposure; no infant adverse effects up to 2 years.<br>• HIV: with sustained undetectable viral load on ART, the transmission risk is \<1% (not zero), and the choice to breastfeed should be supported. If the viral load is not suppressed, use banked donor milk or formula.<br>Labels:<br>• US §8.2: 3TC and tenofovir are present in milk. Lists the risks: HIV transmission, resistance and adverse reactions.<br>• 仿單 6.2 (citing older US CDC advice) and UK SmPC 4.6: advise mothers living with HIV not to breastfeed.

**Why:** Column is empty. The TW and UK labels are more conservative than current LactMed (doravirine chapter revised 2026-05-15, citing the DHHS 2024 perinatal guideline), so both views are shown.

**Sources:** LactMed Doravirine NBK532499 (rev 2026-05-15) — https://www.ncbi.nlm.nih.gov/books/NBK532499/; LactMed Lamivudine NBK501536 (rev 2025-12-15) — https://www.ncbi.nlm.nih.gov/books/NBK501536/; LactMed Tenofovir disoproxil fumarate NBK501549 (rev 2026-08-15) — https://www.ncbi.nlm.nih.gov/books/NBK501549/; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/9694/smpc

### A13 · Notes

本院品項: DEL01 Delstrigo 錠劑 (達滋克膜衣錠): DOR 100 / 3TC 300 / TDF 300 mg (= tenofovir disoproxil 245 mg). Single-tablet complete regimen (STR).<br>⚠️ US BOXED WARNING (仿單 §5.1.2 warning): severe acute HBV flare after stopping in HIV/HBV coinfection. Test for HBV before starting. After stopping, follow LFTs and clinical status for at least several months; anti-HBV therapy may be needed, especially with cirrhosis.<br>• Contains HBV-active 3TC + TDF, but is not indicated for HBV.<br>• Severe skin reactions (SJS/TEN; DRESS added to US label 7/2026, not yet in TW insert): stop at once. UK: never restart after TEN.<br>• Kidney: TDF can cause AKI or Fanconi syndrome. Avoid nephrotoxic drugs, including high-dose or multiple NSAIDs. Stop if CrCl \<50.<br>• Bone loss and osteomalacia (TDF): consider BMD if there is a fracture history or osteoporosis risk; UK suggests another regimen in osteoporosis.<br>• IRIS (including autoimmune disease months later).<br>• Do not use with NNRTI resistance: not evaluated after prior virologic failure (UK).<br>• Contraindicated: prior 3TC hypersensitivity (UK: any component); strong CYP3A inducers.<br>• Rifabutin needs extra doravirine 100 mg (Pifeltro): check stock.<br>• Contains lactose (UK).<br>• DRIVE-AHEAD vs EFV/FTC/TDF: non-inferior at week 48 and 96, with fewer neuropsychiatric AEs and lower LDL / non-HDL (PMID 30184165, 33336698).

**Why:** Column is empty. The ground rules require boxed warnings in Notes. US labelling has the boxed warning; the TW online insert has the same text as warning 5.1.2 with no box formatting. The DRESS difference between US and TW is worth flagging.

**Sources:** US FDA label Boxed Warning, §4, §5.1–5.6, §14 (Revised 07/2026; boxed text confirmed in the SPL XML) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW 仿單 §4, §5.1.1–5.1.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.3, §4.4 — https://www.medicines.org.uk/emc/product/9694/smpc; Orkin C et al. CID 2019, PMID 30184165; Orkin C et al. CID 2021, PMID 33336698 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/30184165/ , https://pubmed.ncbi.nlm.nih.gov/33336698/

### A14 · Page body

Optional: a short 'Sources' block listing the US label (setid cd1e9f84…, v24, 07/2026), UK SmPC (eMC 9694, 18 Feb 2026), TW 仿單 (衛部藥輸字第027739號, MSD-000028732-TW-20251209) and LactMed NBK532499 / NBK501536 / NBK501549.

**Why:** The body is empty. A source list matches how other audited entries are traced. Optional; no content is required here.

**Sources:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; https://www.medicines.org.uk/emc/product/9694/smpc; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

### B1 · Adult dose

<span color="blue">`PO`</span> 1 tab QD with or without food (院內 DEL01 = doravirine 100 mg / lamivudine 300 mg / TDF 300 mg [= tenofovir disoproxil 245 mg]). Complete regimen: do not add other ARVs (TW仿單 3.1.2 / FDA 2.2 / UK 4.2)<br>• With rifabutin: Delstrigo QD + doravirine 100 mg (Pifeltro) ~12 h later, for as long as rifabutin is given (TW仿單 3.3.2 / FDA 2.4 / UK 4.2)<br>• UK only: if a moderate CYP3A inducer (e.g. bosentan, modafinil, nafcillin, dabrafenib) cannot be avoided, add doravirine 100 mg ~12 h after the Delstrigo dose<br>• Before starting: test for HBV; check SCr/eCrCl, urine glucose and urine protein (+ serum phosphorus in CKD), then repeat during therapy (TW仿單 3.1.1 / FDA 2.1)<br>• Missed dose (UK 4.2): ≤12 h late → take ASAP; >12 h late → skip it and take the next dose on time; never take 2 doses

**Why:** The column is empty. All three labels give the same dose and rifabutin adjustment. Only the UK SmPC gives the moderate-inducer and missed-dose rules.

**Sources:** TW insert 達滋克膜衣錠 衛部藥輸字第027739號 v7 (114/11/03) §3.1.1, 3.1.2, 3.3.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; US FDA label DELSTRIGO §2.1, 2.2, 2.4, 3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC Delstrigo §4.2 Posology – https://www.medicines.org.uk/emc/product/9694/smpc

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> CrCl ≥50: no adjustment. **CrCl \<50 mL/min: not recommended.** It is a fixed-dose tablet, so the lamivudine/TDF interval cannot be adjusted (TW仿單 3.3.1/6.7, FDA 2.3/8.6). UK 4.2: do not start if CrCl \<50; stop if CrCl falls below 50. Also stop for a clinically significant fall in renal function or Fanconi syndrome (FDA 5.3 / TW仿單 5.1.3)<br>CrCl \<50, HD or PD: change to separate components (renally adjusted lamivudine + TDF, see those entries, + doravirine 100 mg QD) or to another regimen. Doravirine itself: no PK change at CrCl >15; ESRD/dialysis not studied (FDA 12.3)<br>HD: a 4-h session removes ~10% of a TDF dose (extraction ~54%); lamivudine removal is negligible (FDA 10 / UK 4.9). Doravirine 100 mg QD in HD: extraction ~34%, but post-HD troughs stay above the protein-adjusted EC50, so no dose change (Moltó 2022, PMID 35425985). Kushida 2023 gave it after HD, and suppression was maintained, but the authors advise monitoring doravirine levels because HD clearly removes it (PMID 36764453)<br>CRRT: no label data; Delstrigo is not appropriate (handle as CrCl \<50)

**Why:** The column is empty. All three labels agree on the CrCl 50 cut-off, and the Taiwan insert for the stocked product leads. The UK SmPC adds 'do not initiate / discontinue'. Labels say nothing on HD dosing of doravirine, so the PubMed studies cover that gap. Both PMIDs were checked with esummary.

**Sources:** TW insert §3.3.1, 5.1.3, 6.7 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; US FDA label §2.3, 5.3, 8.6, 10, 12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.2 Renal impairment, 4.4, 4.9 – https://www.medicines.org.uk/emc/product/9694/smpc; Moltó J et al. J Antimicrob Chemother 2022;77:1989-1991, PMID 35425985 – https://pubmed.ncbi.nlm.nih.gov/35425985/; Kushida H et al. J Infect Chemother 2023;29:558-561, PMID 36764453 – https://pubmed.ncbi.nlm.nih.gov/36764453/

### B3 · Hepatic dose

Child-Pugh A/B: no adjustment. Child-Pugh C: not studied (TW仿單 6.6 / FDA 8.7); UK 4.2 advises caution because doravirine exposure is unknown. Tenofovir PK is unchanged at any degree of hepatic impairment; lamivudine safety and efficacy are not established in decompensated liver disease (FDA 12.3). HIV/HBV coinfection: severe hepatitis flare may follow stopping. Monitor clinically and with LFTs for at least several months; anti-HBV therapy may be warranted, especially with cirrhosis (see boxed warning in Notes)

**Why:** The column is empty. The wording is the same in all three labels.

**Sources:** TW insert §6.6, 11 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; US FDA label §8.7 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.2 Hepatic impairment – https://www.medicines.org.uk/emc/product/9694/smpc

### B4 · Pediatric dose

<span color="blue">`PO`</span> ≥35 kg: 1 tab QD, the same as adults (TW仿單 2/3.1.2; FDA 2.2/8.4). Supported by IMPAACT 2014, 12–\<18 y: PK and safety similar to adults<br>UK 4.1: only adolescents ≥12 y AND ≥35 kg, and only when toxicities rule out regimens without TDF<br>\<35 kg (UK: also \<12 y): not established; a fixed-dose tablet cannot be scaled down<br>TDF lowers BMD gain in children → monitor bone health (FDA 5.5; UK 4.4)

**Why:** The column is empty. The US/TW indication (≥35 kg) is wider than the UK one, which adds the 'toxicities preclude non-TDF regimens' restriction for adolescents. The brief left out this UK restriction.

**Sources:** TW insert §2, 3.1.2, 6.4 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; US FDA label §1, 2.2, 5.5, 8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.1, 4.2 Paediatric population, 4.4 – https://www.medicines.org.uk/emc/product/9694/smpc

### B5 · Indications

HIV

**Why:** The only approved indication in all three labels is HIV-1 treatment: ART-naive patients, or a switch in virologically suppressed patients (RNA <50) with no history of failure and no resistance to any component. Delstrigo has no HBV or PrEP indication, so do not tag HBV or HIV PrEP.

**Sources:** US FDA label §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.1 – https://www.medicines.org.uk/emc/product/9694/smpc; TW insert §2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

### B6 · Coverage

HIV

**Why:** Labelled antiviral activity (US 12.4) is against HIV-1 only. Lamivudine and TDF are also active against HBV, but Delstrigo is not approved for HBV and its labels give no HBV activity data. HBV is therefore covered in Notes (boxed warning, coinfection) rather than as a Coverage tag. Adding HBV is a judgement call for the owner if the database tags component activity.

**Sources:** US FDA label §12.4 Microbiology – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §5.1 – https://www.medicines.org.uk/emc/product/9694/smpc

### B7 · Side Effects

GI, CNS, LFT↑, nephrotoxicity, AKI, bone loss, IRIS, SJS/TEN, DRESS, lactic acidosis, hypersensitivity, anemia

**Why:** All tags are existing schema options. Sources for each: GI = nausea 5%, diarrhoea 4%. CNS = dizziness 7%, abnormal dreams 5%, insomnia, somnolence (FDA 6.1). LFT↑ = ALT >1.25×ULN in 22% after switch (DRIVE-SHIFT), hepatitis. nephrotoxicity/AKI = TDF Fanconi syndrome and acute renal failure (5.3). bone loss (5.5). IRIS (5.6). SJS/TEN (5.1). DRESS was added to US 5.1 in the 7/2026 revision, after a two-drug doravirine regimen. lactic acidosis = UK 4.8 and US 6.2 for 3TC/TDF. hypersensitivity = prior lamivudine hypersensitivity is a contraindication; angioedema, anaphylaxis. anemia = lamivudine pure red cell aplasia. Neuropsychiatric events were much less common than with EFV/FTC/TDF (24% vs 57%).

**Sources:** US FDA label §5.1, 5.3, 5.5, 5.6, 6.1, 6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.8 Table 2 – https://www.medicines.org.uk/emc/product/9694/smpc; TW insert §5.1.1–5.1.6, 8 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

### B8 · Monitor

viral load, HBV serology, renal, electrolyte, LFT

**Why:** Reasons for each tag: HBV test before starting (TW 3.1.1 / FDA 2.1). SCr/eCrCl, urine glucose and urine protein in all patients, plus serum phosphorus in CKD (electrolyte) (FDA 2.1/5.3). LFTs for several months after stopping in HIV/HBV coinfection (boxed warning / 5.2). HIV RNA to confirm suppression, because resistance develops on failure. There is no tag for BMD; Notes covers it. Routine TDM is not recommended.

**Sources:** US FDA label boxed warning, §2.1, 5.2, 5.3, 5.5 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW insert §3.1.1, 5.1.2, 5.1.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; UK SmPC §4.4 – https://www.medicines.org.uk/emc/product/9694/smpc

### B9 · Mechanism

**Doravirine**: pyridinone NNRTI; non-competitive inhibition of HIV-1 RT; no effect on human DNA polymerase α/β/γ. **Lamivudine** (cytidine analogue) → 3TC-triphosphate and **TDF** (prodrug → tenofovir diphosphate, dATP analogue): NRTIs that are incorporated into viral DNA and stop the chain; weak inhibitors of mammalian DNA polymerases (FDA 12.4 / TW仿單 1, 10). PK: doravirine is CYP3A-metabolised (t½ 15 h, 76% protein-bound); 3TC (t½ 5–7 h) and tenofovir (t½ 17 h) are cleared renally by GFR + tubular secretion (FDA 12.3)

**Why:** The column is empty. The text comes from the US 12.4 and 12.3 tables and agrees with the TW insert.

**Sources:** US FDA label §12.3, 12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW insert §1 性狀 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

### B10 · Drug Interactions

**CI – strong CYP3A inducers** (TW仿單 4 / FDA 4 / UK 4.3): carbamazepine, oxcarbazepine, phenobarbital, phenytoin, enzalutamide, rifampin, rifapentine, mitotane, St John's wort (UK also lumacaftor). Allow ≥4 weeks off the inducer before starting (FDA Table 6)<br>Rifabutin → add doravirine 100 mg ~12 h after Delstrigo (TW/FDA/UK)<br>Moderate CYP3A inducers (UK 4.2/4.5): avoid; if unavoidable, add doravirine 100 mg ~12 h later<br>Switching from efavirenz: residual induction lowers doravirine (AUC ↓62% on day 1, ↓32% on day 14; C24 ↓85% / ↓50%) (FDA 12.3), but suppression was maintained in DRIVE-SHIFT (PMID 31548188)<br>CYP3A inhibitors (ketoconazole, ritonavir) ↑ doravirine, no dose change (FDA 7.2)<br>UK 4.5: doravirine may be a weak CYP3A inducer (midazolam AUC ↓18%) → monitor tacrolimus/sirolimus levels<br>Avoid nephrotoxic drugs and high-dose or multiple NSAIDs (AKI reported). Drugs that compete for tubular secretion (acyclovir/valacyclovir, ganciclovir/valganciclovir, cidofovir, aminoglycosides) may ↑ 3TC/tenofovir (FDA 7.2 / TW仿單 7)<br>Ledipasvir/sofosbuvir or sofosbuvir/velpatasvir ↑ tenofovir → monitor for TDF toxicity (FDA 7.2)<br>Sorbitol-containing medicines ↓ lamivudine → avoid chronic co-use (FDA 7.2 / UK 4.5)<br>Do not combine with other 3TC, TDF, TAF or adefovir products, or with other ARVs (complete regimen) (UK 4.4 / FDA 7.1)<br>No adjustment needed with antacids, pantoprazole, methadone, atorvastatin, ethinyl estradiol/levonorgestrel OC, metformin, midazolam (FDA 7.2/7.3)<br>Check everything else with the Liverpool HIV interaction checker: https://www.hiv-druginteractions.org

**Why:** The column is empty. The contraindication list was checked against all three labels. The UK SmPC adds lumacaftor and moderate-inducer guidance that the TW and US labels lack. The efavirenz lead-in effect is in US 12.3, with clinical follow-up in a PubMed study (PMID checked with esummary).

**Sources:** TW insert §4, 7 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; US FDA label §4, 7.1–7.3 (Table 6), 12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.2, 4.3, 4.4, 4.5 – https://www.medicines.org.uk/emc/product/9694/smpc; Greaves W et al. Antimicrob Agents Chemother 2019;63:e01298-19, PMID 31548188 – https://pubmed.ncbi.nlm.nih.gov/31548188/; Liverpool HIV Drug Interactions – https://www.hiv-druginteractions.org

### B11 · Pregnancy

No letter category. Doravirine: not evaluated in human pregnancy (FDA 8.1; UK: no or limited data). No developmental toxicity in rats/rabbits at ~8–9× human exposure; crosses the placenta in animals (fetal levels 40–52% of maternal). Lamivudine/TDF: APR shows no rise in birth defects (first-trimester rates: 3TC 3.1%, TDF 2.5%, vs 2.7% background); lamivudine caused early embryo deaths in rabbits but not rats (FDA 8.1 / TW仿單 6.1). UK 4.6: as a precaution, preferably avoid in pregnancy. Register exposures with the APR. Pregnancy PK data for doravirine are only now appearing (PMID 42800047); check the current DHHS Perinatal guideline before starting in pregnancy

**Why:** The column is empty. US and TW give a risk summary only, while the UK is more cautious. Letter categories must not be used. The DHHS perinatal guideline (clinicalinfo.hiv.gov) could not be reached from this environment (proxy 403), so its current doravirine status was not verified.

**Sources:** US FDA label §8.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/9694/smpc; TW insert §6.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; Poliseno A et al. J Infect Dis 2026 (online), PMID 42800047 – https://pubmed.ncbi.nlm.nih.gov/42800047/

### B12 · Breastfeeding

LactMed (components): doravirine has no clinical data, milk levels are low (RID ~0.9–2.7%) and no infant effects are expected; lamivudine is well studied and well tolerated in breastfed infants; tenofovir (TDF) infant exposure is trivial, with no adverse effects up to 2 y. With a sustained undetectable viral load, breastfeeding can be supported (transmission \<1%, not zero); if the viral load is not suppressed → banked donor milk or formula. Labels are more conservative: UK 4.6 and TW仿單 6.2 (citing older US CDC advice) say do not breastfeed; FDA 8.2 lists the risks (HIV transmission, resistance in an HIV+ infant, ADRs)

**Why:** The column is empty. All three LactMed chapter IDs were checked through NCBI esummary (books db). The local-archive text gives the revision dates as 2026-05-15, 2025-12-15 and 2026-08-15.

**Sources:** LactMed Doravirine NBK532499 – https://www.ncbi.nlm.nih.gov/books/NBK532499/; LactMed Lamivudine NBK501536 – https://www.ncbi.nlm.nih.gov/books/NBK501536/; LactMed Tenofovir Disoproxil Fumarate NBK501549 – https://www.ncbi.nlm.nih.gov/books/NBK501549/; US FDA label §8.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/9694/smpc; TW insert §6.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

### B13 · Notes

院內 DEL01 Delstrigo 錠劑 (達滋克膜衣錠, 衛部藥輸字第027739號, MSD), PO only; 1 tab = DOR 100 mg + 3TC 300 mg + TDF 300 mg (tenofovir disoproxil 245 mg)<br>⚠ **US boxed warning: post-treatment acute exacerbation of hepatitis B.** Severe HBV flares (decompensation, liver failure) after stopping 3TC/TDF in HIV/HBV coinfection → test for HBV before starting; if coinfected, monitor clinically + LFTs for at least several months after stopping; anti-HBV therapy may be warranted, especially with cirrhosis (FDA boxed/5.2; TW仿單 5.1.2; UK 4.4). Not approved for HBV<br>Indication: complete regimen for HIV-1, either ART-naive or switching while suppressed (RNA \<50) with no failure history and no resistance to any component (TW仿單 2 / FDA 1). UK: no past or present resistance to the NNRTI class, 3TC or tenofovir; not evaluated after prior virologic failure (UK 4.4)<br>Contraindicated: prior lamivudine hypersensitivity (UK: any component); strong CYP3A inducers (see Drug Interactions)<br>Resistance: doravirine RAMs (e.g. V106A/M, Y188L, F227C, H221Y) can cause cross-resistance to EFV/NVP/RPV/ETR (Y318F alone does not); M184I/V → 3TC/FTC; K65R/K70E → tenofovir (FDA 12.4)<br>Evidence: DRIVE-AHEAD (naive) 84.3% vs 80.8% (EFV/FTC/TDF) \<50 copies at W48, with fewer dizziness, sleep and sensorium events and neutral LDL (PMID 30184165); DRIVE-SHIFT switch maintained suppression (PMID 30985556). IAS-USA 2024: bictegravir- or dolutegravir-based INSTI regimens are recommended initial therapy for most; separate recommendations cover those unable to take INSTIs (PMID 39616604)<br>Severe skin reactions (SJS/TEN; DRESS with a doravirine 2-drug regimen, FDA 5.1 rev 7/2026) → stop at once; never rechallenge after TEN (UK 4.4)<br>TDF: Fanconi syndrome/tubulopathy, ↓BMD, osteomalacia → consider BMD if fracture history or osteoporosis risk; calcium/vitamin D may help (FDA 5.5); UK: consider an alternative regimen in osteoporosis<br>IRIS, including late autoimmune disease (Graves', GBS) (FDA 5.6)<br>Contains lactose (UK 4.4)

**Why:** The column is empty. The boxed warning must appear in Notes under the ground rules; it was confirmed in the current DailyMed SPL v24 XML ('WARNING: POSTTREATMENT ACUTE EXACERBATION OF HEPATITIS B'). The extracted TW insert text has the HBV flare only as warning 5.1.2, with no separate box, so the brief's 'boxed-style' wording for TW is inaccurate. All PMIDs were checked with esummary.

**Sources:** US FDA label boxed warning, §1, 5.1–5.6, 12.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC §4.1, 4.4 – https://www.medicines.org.uk/emc/product/9694/smpc; TW insert §2, 5.1.1–5.1.6 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; Orkin C et al. Clin Infect Dis 2019;68:535-544 (DRIVE-AHEAD), PMID 30184165 – https://pubmed.ncbi.nlm.nih.gov/30184165/; Johnson M et al. J Acquir Immune Defic Syndr 2019;81:463-472 (DRIVE-SHIFT), PMID 30985556 – https://pubmed.ncbi.nlm.nih.gov/30985556/; Gandhi RT et al. JAMA 2025;333:609-628 (IAS-USA 2024), PMID 39616604 – https://pubmed.ncbi.nlm.nih.gov/39616604/

### B15 · Page body

## Delstrigo (Doravirine/Lamivudine/TDF)<br>---<br>### Category<br>Antiretroviral, NNRTI + 2 NRTIs, single-tablet regimen<br>---<br>### Mechanism<br>- Doravirine: non-competitive NNRTI; CYP3A substrate (t½ 15 h). 3TC → 3TC-TP; TDF → tenofovir diphosphate: NRTI chain terminators, renally cleared (FDA 12.3/12.4)<br>---<br>### Indications<br>- TW仿單/FDA: HIV-1, adults and children ≥35 kg; ART-naive, or switch when suppressed (RNA \<50) with no failure history and no resistance to any component<br>- UK: adults with no NNRTI/3TC/tenofovir resistance; adolescents ≥12 y ≥35 kg only when toxicities rule out non-TDF regimens<br>---<br>### Coverage<br>- HIV-1. 3TC/TDF are HBV-active but there is no HBV indication<br>- Resistance: DOR RAMs (e.g. V106A/M, Y188L, F227C, H221Y) can cross-resist with other NNRTIs (Y318F alone does not); M184I/V → 3TC/FTC; K65R/K70E → tenofovir (FDA 12.4)<br>---<br>### Adult Dose<br>- 1 tab QD with or without food; rifabutin → + doravirine 100 mg ~12 h later (TW/FDA/UK); UK: the same for unavoidable moderate CYP3A inducers<br>---<br>### Renal Dose<br>- CrCl \<50: not recommended / do not start / stop (TW 3.3.1, FDA 2.3, UK 4.2); use separate renally adjusted components instead<br>- HD: TDF ~10% removed per 4 h; 3TC negligible; doravirine extraction ~34%, no change needed (PMID 35425985; consider levels, PMID 36764453). CRRT: no data<br>---<br>### Hepatic Dose<br>- Child-Pugh A/B: no change; C: not studied (UK: caution)<br>---<br>### Pediatric Dose<br>- ≥35 kg: adult dose (IMPAACT 2014); \<35 kg not established<br>---<br>### Side Effects<br>**Common** (DRIVE-AHEAD W96): dizziness 7%, nausea 5%, abnormal dreams 5%, headache/insomnia/diarrhoea 4%, somnolence 3%, rash 2% (FDA 6.1); neuropsychiatric AEs by W48 24% vs 57% with EFV/FTC/TDF<br>**Serious:** HBV flare after stopping (boxed); SJS/TEN, DRESS; AKI/Fanconi, hypophosphataemia; ↓BMD, osteomalacia; IRIS; lactic acidosis, hepatic steatosis, pancreatitis, pure red cell aplasia (3TC/TDF postmarketing); depression/suicidal ideation uncommon (UK 4.8)<br>---<br>### Monitoring<br>- HBV status at baseline; SCr/eCrCl, urine glucose, urine protein (+ phosphorus in CKD) at baseline and during therapy; HIV RNA; LFTs after stopping in HBV coinfection; BMD if at risk<br>---<br>### Drug Interactions<br>- (as in the column)<br>---<br>### Pregnancy<br>- (as in the column)<br>---<br>### Breastfeeding<br>- (as in the column)<br>---<br>### References<br>1. TW insert 達滋克膜衣錠 衛部藥輸字第027739號 v7 (114/11/03; MSD-000028732-TW-20251209): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F<br>2. US FDA label DELSTRIGO, DailyMed setid cd1e9f84-607a-46d3-b01e-2736018d67b6 (v24, rev. 7/2026): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6<br>3. UK SmPC Delstrigo 100/300/245 mg (eMC 9694, rev. 18 Feb 2026): https://www.medicines.org.uk/emc/product/9694/smpc<br>4. LactMed Doravirine NBK532499; Lamivudine NBK501536; Tenofovir Disoproxil Fumarate NBK501549<br>5. Orkin C 2019 PMID 30184165; Johnson M 2019 PMID 30985556; Greaves W 2019 PMID 31548188; Moltó J 2022 PMID 35425985; Kushida H 2023 PMID 36764453; Gandhi RT 2025 PMID 39616604; Poliseno A 2026 PMID 42800047

**Why:** The page body is blank. Other entries (e.g. ValTREX) have a structured body with sections and a references list, so the proposed outline follows that style. 'As in the column' means repeat the column text from B10–B12.

**Sources:** TW insert – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F; US FDA label – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; UK SmPC – https://www.medicines.org.uk/emc/product/9694/smpc

### B16 · Notes

When writing Notes, Indications and Drug Interactions, correct three points from the brief: (1) the UK adolescent indication also requires that toxicities rule out non-TDF regimens; (2) the UK SmPC also contraindicates lumacaftor and adds extra doravirine for unavoidable moderate CYP3A inducers; (3) the TW insert lists the HBV flare as warning 5.1.2, not as a boxed warning. The boxed warning is in the US label. Also, US 5.1 (rev 7/2026) now includes DRESS, while TW v7 lists TEN only.

**Why:** I re-checked the brief against the primary texts. These details differ from the brief or were left out of it, and they affect the wording proposed in B4, B10 and B13.

**Sources:** UK SmPC §4.1, 4.2, 4.3 – https://www.medicines.org.uk/emc/product/9694/smpc; US FDA label boxed warning, §5.1 (Recent Major Changes 7/2026) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd1e9f84-607a-46d3-b01e-2736018d67b6; TW insert §5.1.1, 5.1.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027739%E8%99%9F

## Disputed (not applied)

- **Category**: proposed "Antiretroviral, **NNRTI + 2 NRTIs** single-tablet regimen (doravirine + lamivudine + tenofovir disoproxil fumarate)". Not applied: The current Category 'Antiretroviral (NNRTI + 2 NRTI, STR)' is correct per US §1, as reviewer B also says. The ground rules ask for the smallest correct edit and no change to correct content. The proposed rewording is cosmetic and optional, so leave the Category unchanged.

## Apply log

- Adult dose: merged both reviewer versions (PO tag, 1 tab QD, complete regimen, HBV/renal baseline tests, rifabutin + doravirine 100 mg ~12 h, UK moderate CYP3A inducer rule, UK missed-dose rule)
- Renal dose, HD, CRRT: CrCl <50 not recommended (TW/FDA/UK), switch to separate components for CrCl <50/HD/PD, HD removal data (TDF ~54% extraction, 3TC negligible, doravirine ~34%, PMIDs 35425985/36764453), CRRT no data
- Hepatic dose: Child-Pugh A/B no change, C not studied/UK caution, tenofovir/3TC hepatic PK notes, HBV flare pointer
- Pediatric dose: >=35 kg adult dose (IMPAACT 2014), UK >=12 y and >=35 kg restriction, <35 kg not established, TDF bone BMD advice
- Indications: [HIV]
- Coverage: [HIV]
- Side Effects: [GI, CNS, LFT↑, nephrotoxicity, AKI, bone loss, IRIS, SJS/TEN, DRESS, lactic acidosis, hypersensitivity, anemia]
- Monitor: [viral load, HBV serology, renal, electrolyte, LFT]
- Mechanism: merged MOA, PK and resistance (doravirine RAMs/Y188L, M184V/I, K65R/K70E)
- Drug Interactions: merged contraindicated strong CYP3A inducers (incl. UK lumacaftor), rifabutin/moderate inducer dosing, efavirenz switch, CYP3A inhibitors, weak induction tacrolimus/sirolimus, HCV DAAs, sorbitol, nephrotoxic/tubular secretion drugs, no-ARV/no-duplicate rule, no-interaction list, Liverpool checker
- Pregnancy: no letter category, FDA/TW APR data, animal data, UK avoid, APR registration, PMID 42800047/DHHS perinatal check
- Breastfeeding: LactMed per component (RID ~0.9-2.7%), U=U-based breastfeeding support, conservative FDA/TW/UK label positions
- Notes: merged stocked product DEL01 with licence, US boxed HBV flare warning (TW lists it as warning 5.1.2, not boxed), indication/UK resistance restrictions, contraindications incl. lumacaftor, Pifeltro stock check, SJS/TEN/DRESS (US 7/2026, not in TW v7), renal, bone, IRIS, lactose, DRIVE-AHEAD/DRIVE-SHIFT/IAS-USA 2024 evidence; incorporated the brief corrections from the third Notes fix
- Page body: inserted the structured monograph body on the previously blank page, plus a References section with 13 numbered sources (TW insert, US FDA label v24 rev 7/2026, UK SmPC eMC 9694, 3 LactMed entries, 8 PubMed PMIDs, Liverpool checker), each with a URL
- Renewed date set to 2026-10-06 (is_datetime 0)
- Category checked; existing value 'Antiretroviral (NNRTI + 2 NRTI, STR)' left unchanged

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
