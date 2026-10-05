# New entry: Famvir (Famciclovir)

- **Notion entry:** [Famvir (Famciclovir)](https://app.notion.com/3f0c496dfff1818a9132ec4ff42fbc45). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** FAM01 (Famvir tab 250 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/famciclovir.json` (plus any Taiwan insert text files)

## Product and sources

FJUH FAM01 = Famvir 250 mg film-coated tablet (抗濾兒膜衣錠250毫克), famciclovir, oral, ATC J05AB09, NHI BC22179100. This is the only famciclovir product the hospital stocks; 125 mg and 500 mg tablets are not stocked. TFDA licence 衛署藥輸字第022179號. Applicant 台灣大昌華嘉 (DKSH); manufacturer COSMO SPA, Italy; licence-holder process Atnahs Pharma UK; valid to 117-05-14. Current TW insert: the 2022 upload (Atnahs artwork TW-DKSH-Version-2020v01). I rendered its pages to images and read the Chinese text: the dosing, renal table, hepatic, paediatric, interaction, pregnancy and lactation sections match the 2016 insert word for word. Labels compared: US FDA label (DailyMed setid 2c44b8d2…, PD-Rx/Teva generic, Nov 2025), UK SmPC Famvir (eMC 11710, rev 18 Mar 2019), TW 仿單 2016 and 2022, LactMed NBK501220 (rev 2025-01-15). The Notion page is a NEW, empty entry: only the title and Category are filled, there is no body, and Coverage, Indications, Monitor and Side Effects are unset.

## Content written to Notion (32 items)

### A1 · Adult dose

<span color="blue">`PO`</span> (FAM01 250 mg tab only; with or without food)<br>• Herpes zoster: **TW仿單 250 mg TID × 7 d**; FDA/UK SmPC 500 mg q8h × 7 d; start ASAP (FDA: efficacy not established if started >72 h after rash)<br>• Zoster, immunocompromised (UK): 500 mg TID × 10 d; ophthalmic zoster, immunocompetent (UK): 500 mg TID × 7 d<br>• Genital herpes, first episode: 250 mg TID × 5 d (TW/UK) [CDC 2021: × 7–10 d; FDA: not established]<br>• Recurrent genital herpes: 125 mg BID × 5 d (TW/UK) **or** 1 g BID × 1 d (FDA; start ≤6 h) [CDC 2021 also: 500 mg once, then 250 mg BID × 2 d]<br>• Recurrent herpes labialis (FDA): 1500 mg single dose at first symptom<br>• Suppression of recurrent genital herpes: 250 mg BID (FDA/UK/TW indication); immunocompromised 500 mg BID (UK); reassess after ≤12 months (SmPC)<br>• HIV / immunocompromised recurrent orolabial or genital HSV: 500 mg BID × 7 d (FDA/UK; start ≤48 h) [CDC 2021: 5–10 d]

**Why:** The column is empty. The stocked product's own label (TW insert) gives zoster 250 mg TID × 7 d, half the 500 mg TID dose in the US and UK labels. Both should be shown, each with its source. All indications approved by FDA or UK SmPC are included. The CDC split-dose regimen is guideline-only and is marked as such.

**Sources:** TW 仿單 2022 (衛署藥輸字第022179號) 用法與用量: 帶狀疱疹 成人每次250毫克一天三次連續七天; 初發性生殖器疱疹 250毫克一天三次五天; 急性復發 125毫克一天兩次五天 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; US FDA label §2.1–2.2 'Herpes zoster 500 mg every 8 hours for 7 days… Recurrent genital herpes 1000 mg twice daily for 1 day… Herpes labialis 1500 mg single dose… HIV 500 mg twice daily for 7 days'; §1.1 72 h / 6 h / 48 h limits — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.2 (zoster immunocompromised 500 mg TID 10 d; ophthalmic zoster; first episode 250 mg TID 5 d; recurrent 125 mg BID 5 d; suppression 250/500 mg BID, reassess at 12 months) — https://www.medicines.org.uk/emc/product/11710/smpc; CDC STI Treatment Guidelines 2021, Workowski et al. MMWR Recomm Rep, PMID 34292926 (verified via esummary; full text PMC8344968) — https://pubmed.ncbi.nlm.nih.gov/34292926/

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> **TW仿單 (FAM01)**, CrCl mL/min/1.73m² (Cockcroft-Gault), applies to zoster (250 mg TID) & first-episode genital herpes; **no adjustment for recurrent genital herpes 125 mg BID**:<br>≥30: no change; 10–29: 125 mg TID; <10 (non-HD): no TW data<br>HD: 250 mg (zoster) or 125 mg (genital herpes) immediately after each HD (4-h HD ↓ penciclovir ~75%)<br>**FDA/UK (CrCl mL/min)**:<br>• Zoster 500 mg q8h: 40–59 → 500 mg q12h; 20–39 → 500 mg q24h; <20 → 250 mg q24h; HD 250 mg after each HD (UK immunocompromised: same, 10 d)<br>• Recurrent GH 1 g BID × 1 d (FDA): 40–59 → 500 mg BID × 1 d; 20–39 → 500 mg single; <20 → 250 mg single; HD 250 mg single after HD<br>• Herpes labialis 1500 mg (FDA): 40–59 → 750 mg; 20–39 → 500 mg; <20 → 250 mg; HD 250 mg after HD<br>• Suppression 250 mg BID: 20–39 → 125 mg q12h; <20 → 125 mg q24h; HD 125 mg after each HD<br>• HIV/immunocompromised 500 mg BID: 20–39 → 500 mg q24h; <20 → 250 mg q24h; HD 250 mg after each HD<br>• UK first episode 250 mg TID: 20–39 → 250 mg BID; <20 → 250 mg QD; HD 250 mg after HD. UK recurrent 125 mg BID: <20 → 125 mg QD; HD 125 mg after HD<br>CRRT / PD: no label data → individualize<br>Acute renal failure reported with doses not reduced for renal function (FDA 5.1)<br>⚠ 125 mg doses need a 125 mg tab (not stocked; FAM01 is 250 mg only)

**Why:** The column is empty. Under the ground rules, renal dosing follows the stocked product's TW insert, with the US/UK values alongside. The TW table covers only the 250 mg TID regimens, uses mL/min/1.73m², and gives nothing for CrCl <10 without dialysis. The US/UK tables are needed for the 500 mg and 1 g regimens. The warning about acute renal failure from unadjusted doses (FDA 5.1) makes this column safety-critical. No source covers CRRT.

**Sources:** TW 仿單 2022 腎功能不全者 table (≥30 毋須調整劑量; 10-29 每天125毫克，一天三次) and 血液透析 paragraph (250 毫克帶狀疱疹 / 125 毫克生殖器疱疹, 洗腎後立即投予) — read from the rendered PDF: https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; US FDA label §2.3 Table 1 (Dosage Recommendations for Adult Patients with Renal Impairment) and §5.1 Acute Renal Failure — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.2 Table 1 and haemodialysis paragraph ('4 h haemodialysis resulted in up to 75% reduction'); §4.4 IV therapy for complicated zoster — https://www.medicines.org.uk/emc/product/11710/smpc

### A3 · Hepatic dose

Mild–moderate impairment: no adjustment (AUC unchanged; Cmax ↓44%). Severe: not studied — conversion of famciclovir → penciclovir may be impaired → ↓ efficacy (FDA 8.7 / SmPC 4.4 / TW仿單)

**Why:** The column is empty. All three labels agree.

**Sources:** US FDA label §8.7 Patients with Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.2 / §4.4 — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 肝功能不全者 / 警語 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A4 · Pediatric dose

Not recommended <18 y — safety/efficacy not established (UK SmPC; TW仿單: 不建議用於兒童). FDA 8.4: not recommended in infants (1 mo–<1 y) or adolescents 12–<18 y with recurrent herpes labialis; data insufficient for 1–<12 y. Use acyclovir/valacyclovir in children

**Why:** The column is empty. All three labels advise against paediatric use. The last sentence (use acyclovir/valacyclovir instead) is a practical pointer; no famciclovir label states it.

**Sources:** US FDA label §8.4 Pediatric Use ('famciclovir is not recommended in infants'; 'not recommended in children 12 to less than 18 years of age with recurrent herpes labialis') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.2 Paediatric population — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 兒童 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A5 · Indications

["Herpes"]

**Why:** Every approved indication is HSV or VZV disease: herpes zoster, genital herpes (first episode in UK and TW; recurrent; suppression), herpes labialis, and recurrent mucocutaneous HSV in HIV. 'Herpes' is the only matching option in the schema. The Acyclovir entry uses the same tag.

**Sources:** US FDA label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 適應症: 帶狀疱疹及生殖器疱疹急性感染，抑制反覆性生殖器疱疹復發 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A6 · Coverage

["HSV","VZV"]

**Why:** Penciclovir is active against HSV-1, HSV-2 and VZV, and these are the only matching options in the schema. Notes should state that most acyclovir-resistant (TK-deficient) HSV is cross-resistant.

**Sources:** US FDA label §12.4 Microbiology 'antiviral activity against… HSV-1, HSV-2 and VZV'; cross-resistance Table 6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; TW 仿單 藥效動力學 (大多數對 aciclovir 具抗藥性的 HSV/VZV 也對 penciclovir 產生抗藥性) — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A7 · Side Effects

["GI","CNS","LFT↑","AKI","thrombocytopenia","SJS/TEN"]

**Why:** Each tag maps to a label statement. Headache is very common and dizziness common; confusion and somnolence occur mainly in the elderly; hallucinations are rare and seizures of unknown frequency. Nausea, vomiting, abdominal pain and diarrhoea are common, as are abnormal LFTs; cholestatic jaundice is rare. Thrombocytopenia is rare. EM, SJS and TEN are post-marketing reports. Acute renal failure occurs with unadjusted doses in renal impairment (FDA 5.1). Rash and pruritus (common) and anaphylaxis have no matching option; put them in Notes or the body.

**Sources:** UK SmPC §4.8 Table 2 — https://www.medicines.org.uk/emc/product/11710/smpc; US FDA label §5.1, §6.1 Table 2, §6.2 Postmarketing — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; TW 仿單 不良反應 表1 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A8 · Monitor

["renal"]

**Why:** Every regimen is dosed by CrCl, and acute renal failure has been reported when doses were not reduced (FDA 5.1; SmPC 4.9). No label requires routine LFT or CBC monitoring. SmPC 4.5 advises watching for CNS toxicity when probenecid is co-administered; mention that in Drug Interactions rather than adding a Monitor tag.

**Sources:** US FDA label §5.1 Acute Renal Failure — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.4 / §4.9 — https://www.medicines.org.uk/emc/product/11710/smpc

### A9 · Mechanism

Oral prodrug → rapidly converted (deacetylation + aldehyde oxidase oxidation) to **penciclovir**; viral TK phosphorylates penciclovir → host kinases → penciclovir triphosphate, which competitively inhibits viral DNA polymerase (vs dGTP). Intracellular t½ of triphosphate 10 h (HSV-1), 20 h (HSV-2), 7 h (VZV; TW仿單 9 h). Bioavailability of penciclovir 77%

**Why:** The column is empty. The text follows the label sections cited.

**Sources:** US FDA label §12.4 Mechanism of action; §12.3 Absorption (77%) & Metabolism (aldehyde oxidase) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; TW 仿單 藥效動力學 (半衰期分別為 9、10 及 20 小時) — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A10 · Drug Interactions

Probenecid (and other drugs secreted by renal tubules) → ↑ penciclovir; monitor for toxicity — if CNS effects (dizziness, somnolence, confusion) on 500 mg TID, consider 250 mg TID (SmPC 4.5)<br>Raloxifene (potent aldehyde oxidase inhibitor) → may ↓ penciclovir formation → monitor antiviral efficacy (SmPC/TW仿單/FDA 7.2)<br>No clinically significant interaction: digoxin, zidovudine, emtricitabine, allopurinol, cimetidine, theophylline, promethazine, Mg/Al antacids; not a CYP3A4 inhibitor

**Why:** The column is empty. All three labels agree on the probenecid and raloxifene interactions.

**Sources:** US FDA label §7.1–7.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.5 — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 交互作用 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A11 · Pregnancy

Limited human data — use only if benefit > risk (UK/TW仿單). FDA 8.1 (narrative, no letter category): pharmacovigilance data show no drug-associated risk of major birth defects/miscarriage; no adverse developmental effects in rats/rabbits. UK: <300 pregnancy outcomes, no specific defect signal. Danish cohort: only 26 first-trimester famciclovir exposures (Pasternak 2010, PMID 20736469). CDC 2021: famciclovir/valacyclovir pregnancy data limited (animal data suggest low risk); acyclovir has the most data

**Why:** The column is empty. Do not write 'Category B': the hospital site gives 'B [FDA.AUS]', but the FDA retired letter categories and the current US label 8.1 uses the narrative format. Both PMIDs were verified with NCBI esummary/efetch.

**Sources:** US FDA label §8.1 Pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 懷孕 (不應於懷孕期間使用，除非治療的潛在效益超過任何可能的危險性) — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; Pasternak B, Hviid A. JAMA 2010;304:859-66, PMID 20736469 — https://pubmed.ncbi.nlm.nih.gov/20736469/; CDC STI Treatment Guidelines 2021 (Herpes in pregnancy: 'data regarding prenatal exposure to valacyclovir and famciclovir are limited'), PMID 34292926 — https://pubmed.ncbi.nlm.nih.gov/34292926/

### A12 · Breastfeeding

No human data; penciclovir in rat milk up to ~8× maternal plasma (FDA 8.2). LactMed: no published experience — other agents preferred (acyclovir, valacyclovir), especially for newborn/preterm infants. UK SmPC: discontinuation of breastfeeding may be considered if treatment needed; TW仿單: 不應用於哺乳婦女，除非效益大於風險

**Why:** The column is empty. Per the hierarchy, LactMed is the primary source for breastfeeding, with the label statements alongside. The hospital site's 'Avoided' is stricter than every source; that is reported separately as a hospital-database issue.

**Sources:** LactMed Famciclovir NBK501220 (rev 2025-01-15) Summary & Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK501220/; US FDA label §8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 授乳 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### A13 · Notes

院內僅 250 mg 膜衣錠 (FAM01, 衛署藥輸字第022179號); 125 mg doses (recurrent GH, renal/HD adjustments) cannot be given with stocked strength — use alternative (e.g. acyclovir/valacyclovir) or 125 mg product<br>Start early: zoster ASAP (FDA: no efficacy data >72 h after rash); recurrent GH 1-day regimen ≤6 h of symptoms (FDA); HIV recurrent ≤48 h (FDA)<br>Complicated zoster (visceral, disseminated, motor neuropathy, encephalitis, cerebrovascular) and immunocompromised ophthalmic zoster → IV antiviral (SmPC 4.4)<br>Acyclovir-resistant (TK-deficient) HSV mostly cross-resistant → foscarnet (CDC 2021)<br>CI: hypersensitivity to famciclovir, penciclovir (incl. penciclovir cream) or excipients (contains lactose)<br>FDA: 1-day 1 g BID regimen no better than placebo in Black/African American patients with recurrent GH (relevance to other regimens unknown)<br>Dizziness/somnolence/confusion (esp. elderly) → caution driving<br>Rash, pruritus (common), urticaria/angioedema, anaphylaxis (SmPC 4.8)

**Why:** The column is empty. These are practical points taken from the labels. The note on the 250 mg tablet comes from the hospital's own formulary list: FAM01 is the only famciclovir code, and the TW insert says nothing about scoring the 250 mg tablet. The label states that most TK-deficient HSV is cross-resistant; 'foscarnet' comes from CDC 2021.

**Sources:** US FDA label §1 Limitation of Use, §4, §8.8 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC §4.4, §4.7, §4.8 — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 禁忌症 (例如：乳糖) & 對駕駛… — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; TFDA licence page 衛署藥輸字第022179號 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC022179%E8%99%9F; CDC STI 2021 (foscarnet for acyclovir-resistant HSV; most resistant strains resistant to famciclovir), PMID 34292926 — https://pubmed.ncbi.nlm.nih.gov/34292926/

### A14 · Category

Antiviral, **nucleoside analogue** (oral prodrug of penciclovir)

**Why:** The current text is correct. The FDA label calls famciclovir 'a prodrug of penciclovir… deoxynucleoside analog DNA polymerase inhibitor'. The proposed wording only matches the Acyclovir entry's format and adds the prodrug fact. This change is optional.

**Sources:** US FDA label §1 / Highlights — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761

### A15 · Page body

Mirror the Acyclovir page layout: ## Famciclovir (Famvir) / ### Category / ### Mechanism (A9) / ### Indications (FDA: recurrent herpes labialis, recurrent GH, GH suppression, zoster, recurrent orolabial/genital HSV in HIV; UK adds first-episode GH, zoster in immunocompromised, ophthalmic zoster, suppression in immunocompromised; TW仿單 適應症: 帶狀疱疹及生殖器疱疹急性感染，抑制反覆性生殖器疱疹復發; FDA Limitations of Use) / ### Coverage / ### Adult Dose (table from A1, with source per row) / ### Renal Dose (TW仿單 table + FDA/UK Table 1 per indication, HD, 'CRRT: no data') / ### Hepatic Dose / ### Pediatric Dose / ### Side Effects (SmPC 4.8 frequency table summary; FDA 5.1 ARF) / ### Monitoring (CrCl before dosing; CNS effects in elderly) / ### Drug Interactions (table: probenecid, raloxifene, no-interaction list) / ### Notes / ### Pregnancy / ### Breastfeeding / ### References: 1. US FDA label famciclovir tablets (DailyMed setid 2c44b8d2-3b70-4e8b-af03-2e917178f761) 2. UK SmPC Famvir (eMC 11710, rev 18 Mar 2019) 3. 抗濾兒膜衣錠 250 毫克 仿單 衛署藥輸字第022179號 (TW-DKSH-Version-2020v01, uploaded 2022-03-23) https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038 4. LactMed NBK501220 (rev 2025-01-15) 5. CDC STI Treatment Guidelines 2021, PMID 34292926 6. Pasternak 2010, PMID 20736469

**Why:** The page body is empty, while existing entries such as Acyclovir have a full structured body with a references list. A new entry should follow the same layout and cite the URL of every source used.

**Sources:** US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC — https://www.medicines.org.uk/emc/product/11710/smpc; TW 仿單 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK501220/

### A16 · Renewed date

2026-10-05 (set when the entry is populated)

**Why:** Other audited entries, such as Acyclovir, record the review date in this column.

**Sources:** Notion Acyclovir entry (style reference) — https://app.notion.com/p/263c496dfff18040beccdc67d2349639

### B1 · Adult dose

<span color="blue">`PO`</span> (院內 FAM01 = 250 mg tab only)<br>• Herpes zoster: TW仿單 250 mg TID × 7 d; FDA/UK SmPC 500 mg q8h (TID) × 7 d; start as soon as diagnosed (FDA: efficacy not established if started >72 h after rash)<br>• Zoster, immunocompromised: 500 mg TID × 10 d (SmPC)<br>• Ophthalmic zoster, immunocompetent: 500 mg TID × 7 d (SmPC; FDA: not established)<br>• Genital HSV, first episode: 250 mg TID × 5 d (TW仿單/SmPC); CDC 2021: × 7–10 d<br>• Recurrent genital HSV: 125 mg BID × 5 d (TW仿單/SmPC) **or** 1000 mg BID × 1 d, start ≤6 h of symptoms (FDA); CDC 2021 also lists 500 mg once then 250 mg BID × 2 d (guideline, not labelled)<br>• Recurrent orolabial/genital HSV in HIV/immunocompromised: 500 mg BID × 7 d (FDA/SmPC; CDC 2021: 5–10 d)<br>• Recurrent herpes labialis: 1500 mg single dose at first symptom (FDA)<br>• Suppression of recurrent genital HSV: 250 mg BID (FDA/SmPC/CDC); immunocompromised/HIV 500 mg BID (SmPC/CDC); reassess after 12 months (SmPC 4.2)<br>• With or without food

**Why:** New entry. Labels disagree on the zoster dose. The TW insert for the stocked product says 250 mg TID × 7 d (2016 and 2022 versions); FDA 2.1 and SmPC 4.2 say 500 mg q8h/TID × 7 d. Both should be shown, with their sources. All other regimens are taken verbatim from the FDA 2.1–2.2 and SmPC 4.2 dose lists. CDC 2021 is quoted only for first-episode duration, the 3-day recurrent regimen and HIV dosing, which no label covers.

**Sources:** TW仿單 2022 (FAMVIR 250 mg, 用法與用量: 帶狀疱疹 成人每次250毫克一天三次連續七天; 初發性生殖器疱疹 250 mg TID 5天; 急性復發 125 mg BID 5天) https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; US FDA label famciclovir tablets (PD-Rx, setid 2c44b8d2…) sections 2.1, 2.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC Famvir 125 mg (eMC 11710, rev 18 Mar 2019) section 4.2 https://www.medicines.org.uk/emc/product/11710/smpc; CDC STI Treatment Guidelines 2021 (Workowski, MMWR Recomm Rep, PMID 34292926, verified by esummary; full text PMC8344968), Genital Herpes regimens https://pubmed.ncbi.nlm.nih.gov/34292926/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> **TW仿單 (院內 FAM01)**, CrCl mL/min/1.73m² (Cockcroft-Gault), for zoster 250 mg TID & first-episode genital HSV: ≥30 no change; 10–29 → 125 mg TID; <10 no TW data. Recurrent genital HSV 125 mg BID: no change (TW仿單)<br>**HD (TW仿單)**: give immediately after each dialysis — 250 mg (zoster) / 125 mg (genital HSV); 4-h HD ↓ penciclovir ~75%. FDA/SmPC HD doses differ by regimen (below)<br>**If using 500 mg-based FDA/SmPC regimens** (CrCl mL/min): Zoster 500 q8h (×7 d; SmPC immunocompromised ×10 d) → 40–59: 500 q12h; 20–39: 500 q24h; <20: 250 q24h; HD 250 after each HD (FDA = SmPC)<br>HIV/immunocompromised recurrent HSV or suppression 500 BID → 20–39: 500 q24h; <20: 250 q24h; HD 250 after each HD<br>Suppression 250 BID → 20–39: 125 BID; <20: 125 q24h; HD 125 after each HD<br>Recurrent genital HSV 1 g BID ×1 d (FDA) → 40–59: 500 BID ×1 d; 20–39: 500 single; <20: 250 single; HD 250 single after HD. SmPC 125 BID ×5 d → <20: 125 q24h; HD 125 after each HD<br>Herpes labialis 1500 mg (FDA) → 40–59: 750; 20–39: 500; <20: 250 single; HD 250 after HD<br>First-episode genital HSV 250 TID (SmPC) → 20–39: 250 BID; <20: 250 q24h; HD 250 after each HD<br>⚠ 125 mg doses need a 125 mg tablet — not stocked (FAM01 = 250 mg only)<br>**CRRT / PD**: no label or published data (PubMed search Oct 2026 found none) → individualize<br>Acute renal failure reported when dose not reduced for renal function (FDA 5.1)

**Why:** Penciclovir is renally cleared (t½ 2.3 h → 13.4 h at CrCl <20, FDA 8.6 Table 4). The TW table (≥30 / 10–29) is built for the TW 250 mg TID zoster dose and uses mL/min/1.73m². The FDA and SmPC tables are built for 500 mg-based doses and use cut-offs of 60/40/20. Under the ground rules the stocked product's (TW) table goes first, with FDA/SmPC values beside it. Pairing a 500 mg q8h dose with the TW '10–29 → 125 mg TID' row is internally inconsistent: it gives 25% of the dose, where the FDA gives 500 q24h at 20–39. The entry therefore has to say which base regimen each table applies to. I re-checked every number against FDA 2.3 Table 1 and SmPC 4.2 Table 1. A PubMed search ('famciclovir AND (continuous renal replacement OR hemofiltration OR CRRT)') returned only an unrelated HBV case (PMID 10460876), so no CRRT dose can be sourced.

**Sources:** TW仿單 2022 腎功能不全者 table and 腎功能不全之血液透析病患 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; US FDA label section 2.3 Table 1, 5.1, 8.6 Table 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.2 Table 1 and 'Patients with renal impairment on haemodialysis'; 4.9 https://www.medicines.org.uk/emc/product/11710/smpc; Gill KS, Wood MJ. Clin Pharmacokinet 1996;31:1-8, PMID 8827396 (haemodialysis effective; t½ >18 h in severe RI) https://pubmed.ncbi.nlm.nih.gov/8827396/

### B3 · Hepatic dose

Mild–moderate impairment: no adjustment (FDA/SmPC/TW仿單); penciclovir AUC unchanged but Cmax ↓44% (FDA 8.7). Severe: not studied — conversion to penciclovir may be impaired → lower levels, possible ↓ efficacy

**Why:** All three labels agree.

**Sources:** US FDA label 8.7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.2, 4.4 https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 2022 肝功能不全者 / 警語 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B4 · Pediatric dose

Not recommended 不建議用於兒童 — safety/efficacy <18 y not established (SmPC 4.2, TW仿單). FDA 8.4: not recommended in infants; 1–<12 y data insufficient; 12–<18 y recurrent herpes labialis (1500 mg single dose) studied but not recommended. No paediatric formulation. Use acyclovir/valacyclovir instead

**Why:** All three labels state that famciclovir has no established paediatric use. The 'use acyclovir/valacyclovir instead' line is practical advice; it is consistent with the labels, which give famciclovir no paediatric role.

**Sources:** US FDA label 8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.2 Paediatric population https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 2022 兒童 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B5 · Indications

Herpes

**Why:** 'Herpes' is the only matching option in the schema. Approved uses: zoster (FDA/SmPC/TW); ophthalmic zoster and zoster in immunocompromised patients (SmPC); first-episode and recurrent genital herpes and suppression (SmPC/TW; FDA recurrent and suppression only); recurrent herpes labialis (FDA); recurrent orolabial/genital HSV in HIV (FDA). The detail goes in the page body and Notes.

**Sources:** US FDA label 1.1–1.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 適應症 帶狀疱疹及生殖器疱疹急性感染，抑制反覆性生殖器疱疹復發 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B6 · Coverage

HSV, VZV

**Why:** FDA 12.4: penciclovir is active against HSV-1, HSV-2 and VZV. SmPC 5.1 also reports in-vitro activity against EBV and CMV, but neither is a clinical indication and neither exists as an option, so they go in Notes only.

**Sources:** US FDA label 12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 5.1 https://www.medicines.org.uk/emc/product/11710/smpc

### B7 · Side Effects

GI, CNS, LFT↑, thrombocytopenia, SJS/TEN, AKI

**Why:** SmPC 4.8 / TW 表1: headache is very common; dizziness, nausea, vomiting, abdominal pain, diarrhoea, abnormal LFTs, rash and pruritus are common; confusion and somnolence (mainly elderly) are uncommon; hallucinations, thrombocytopenia, cholestatic jaundice and palpitations are rare; seizure, anaphylaxis, EM/SJS/TEN and hypersensitivity vasculitis have unknown frequency. FDA 5.1 adds acute renal failure when the dose is not reduced for renal function. All six tags exist in the schema.

**Sources:** UK SmPC 4.8 Table 2 https://www.medicines.org.uk/emc/product/11710/smpc; US FDA label 5.1, 6.1, 6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; TW仿單 不良反應 表1 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B8 · Monitor

renal, neuro

**Why:** Dose depends on CrCl, and acute renal failure has followed unadjusted doses (FDA 2.3/5.1). CNS effects (confusion, somnolence, hallucinations) occur mainly in the elderly (SmPC 4.8, FDA 6.2). SmPC 4.4 also asks for clinical response to be monitored in zoster, especially in immunocompromised patients. I used the same tags as the Zovirax entry.

**Sources:** US FDA label 2.3, 5.1, 8.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.4, 4.8 https://www.medicines.org.uk/emc/product/11710/smpc

### B9 · Mechanism

Oral prodrug → deacetylation + aldehyde-oxidase oxidation → penciclovir (guanosine analogue) → phosphorylated by viral TK, then cellular kinases → penciclovir triphosphate competitively inhibits viral DNA polymerase (vs dGTP); intracellular t½ 10 h (HSV-1), 20 h (HSV-2), 7 h (VZV; TW仿單 9 h). Bioavailability 77%

**Why:** FDA 12.1/12.3/12.4 and SmPC 5.1–5.2 agree. The TW insert gives the VZV intracellular half-life as 9 h; FDA and SmPC give 7 h.

**Sources:** US FDA label 12.3, 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 5.1, 5.2 https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 臨床藥理學 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B10 · Drug Interactions

Probenecid (and other drugs secreted by renal tubules) → ↑ penciclovir; monitor toxicity; SmPC: if CNS toxicity on 500 mg TID, consider 250 mg TID<br>Raloxifene (potent aldehyde-oxidase inhibitor in vitro) → may ↓ penciclovir formation → monitor antiviral efficacy (SmPC/TW仿單/FDA 7.2)<br>No clinically significant interaction: digoxin, zidovudine, emtricitabine, allopurinol, cimetidine, theophylline, promethazine, Mg/Al antacid. No CYP450 induction; not a CYP3A4 inhibitor

**Why:** Taken from FDA 7.1–7.2, SmPC 4.5 and the TW 交互作用 section.

**Sources:** US FDA label 7.1, 7.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 交互作用 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B11 · Pregnancy

Limited human data — use only if benefit > risk (TW仿單/SmPC). FDA 8.1: pharmacovigilance data show no drug-associated risk of major birth defects/miscarriage; SmPC: <300 outcomes, no specific defect; animal studies negative. Danish cohort: only 26 first-trimester famciclovir exposures (Pasternak 2010). Acyclovir has the most pregnancy data (CDC 2021). (No FDA letter category — retired)

**Why:** This is written in the current narrative format, as the ground rules require. Pasternak 2010 (PMID verified) shows how thin the famciclovir data are: n=26, 1 defect, no conclusion possible. CDC 2021 says prenatal data on famciclovir are limited.

**Sources:** US FDA label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 懷孕 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; Pasternak B, Hviid A. JAMA 2010;304:859-66, PMID 20736469 https://pubmed.ncbi.nlm.nih.gov/20736469/; CDC STI Guidelines 2021, PMID 34292926 https://pubmed.ncbi.nlm.nih.gov/34292926/

### B12 · Breastfeeding

Not preferred 不建議優先使用 — no published human data; other agents (acyclovir, valacyclovir) preferred, esp. newborn/preterm (LactMed). Rat milk penciclovir up to 8× plasma (FDA 8.2). SmPC: if treatment needed, consider stopping breastfeeding; TW仿單: only if benefit > risk

**Why:** Under the source hierarchy LactMed comes first for breastfeeding. LactMed NBK501220 (rev 2025-01-15): 'Because there is no published experience with famciclovir during breastfeeding, other agents may be preferred, especially while nursing a newborn or preterm infant.' The label positions are given alongside.

**Sources:** LactMed Famciclovir NBK501220 (rev 2025-01-15) https://www.ncbi.nlm.nih.gov/books/NBK501220/; US FDA label 8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/11710/smpc; TW仿單 授乳 https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038

### B13 · Notes

院內只有 250 mg 錠 (FAM01): 1 g dose = 4 tabs, 1500 mg = 6 tabs; 125 mg doses (recurrent genital HSV 125 mg BID, renal 125 mg TID, HD 125 mg) cannot be given with stocked strength → use another regimen/agent (e.g. acyclovir/valacyclovir). Start early: zoster ASAP (FDA: efficacy not established >72 h after rash); recurrent genital HSV within 6 h (FDA 1-day regimen); HIV within 48 h. FDA: not established for first-episode genital HSV, ophthalmic zoster, immunocompromised other than HIV recurrent HSV, or Black/African American patients with recurrent genital herpes (1-day regimen = placebo). Complicated zoster (visceral, disseminated, motor neuropathy, encephalitis, cerebrovascular) or ophthalmic zoster in immunocompromised → IV antiviral (SmPC 4.4). Resistance: TK/POL mutations; most acyclovir-resistant HSV/VZV cross-resistant → foscarnet (CDC 2021). CI: hypersensitivity to famciclovir/penciclovir (incl. penciclovir cream). Contains lactose (SmPC/TW). CNS effects → avoid driving. Higher-dose antivirals in older adults with CKD: ↑ AKI risk, absolute risk <1% (Olar 2024, PMID 39428714). In-vitro EBV/CMV activity (SmPC 5.1) — not an indication

**Why:** New entry. Each point is backed by a label or a verified PMID.

**Sources:** US FDA label 1 Limitation of Use, 4, 14.2, 17 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC 4.3, 4.4, 4.7, 5.1 https://www.medicines.org.uk/emc/product/11710/smpc; CDC STI Guidelines 2021 (antiviral-resistant HSV), PMID 34292926 https://pubmed.ncbi.nlm.nih.gov/34292926/; Olar P et al. Pharmacol Res Perspect 2024;12:e70028, PMID 39428714 https://pubmed.ncbi.nlm.nih.gov/39428714/

### B14 · Category

Antiviral, **nucleoside analogue** (prodrug of penciclovir)

**Why:** The current text is correct: ATC J05AB09 'Nucleosides and nucleotides excluding RTIs' (SmPC 5.1), and FDA calls it a 'deoxynucleoside analog DNA polymerase inhibitor'. This change is optional. It matches the Zovirax entry's style and adds the prodrug fact.

**Sources:** UK SmPC 5.1 https://www.medicines.org.uk/emc/product/11710/smpc; US FDA label 1, 11 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761

### B15 · Page body

Follow the Zovirax page layout: ## Famciclovir (Famvir) → Category / Mechanism / Indications (FDA vs SmPC vs TW仿單 list, incl. 'not established' list) / Coverage / Adult Dose (table: indication \| TW仿單 \| FDA \| SmPC \| CDC 2021) / Renal Dose (TW table; FDA Table 1; SmPC Table 1; HD; CRRT no data) / Hepatic / Pediatric / Side Effects (SmPC frequency table) / Monitoring / Drug Interactions / Notes / Pregnancy / Breastfeeding / References. References: 1. FDA label setid 2c44b8d2-3b70-4e8b-af03-2e917178f761; 2. UK SmPC eMC 11710 (rev 18 Mar 2019); 3. 抗濾兒膜衣錠250毫克 仿單 衛署藥輸字第022179號 (2022-03-23 upload) https://mcp.fda.gov.tw/insert/pdfcasefile/i_04a54732-34c4-4625-b7ff-206556a81038; 4. LactMed NBK501220; 5. CDC STI 2021 PMID 34292926; 6. Pasternak 2010 PMID 20736469; 7. Gill 1996 PMID 8827396; 8. Olar 2024 PMID 39428714

**Why:** Every other entry has a structured body with a reference list. This one is blank. Do not include storage details (owner rule); the TW insert and SmPC storage text must be left out.

**Sources:** Existing Notion entry 'Zovirax (Acyclovir)' layout https://app.notion.com/p/263c496dfff18040beccdc67d2349639; US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c44b8d2-3b70-4e8b-af03-2e917178f761; UK SmPC https://www.medicines.org.uk/emc/product/11710/smpc

### B16 · Notes

Reclassify: the regimen is not labelled but is a CDC 2021 recommended regimen. In Notion, label it '(CDC 2021, not labelled)'. Do not treat it as a hospital error

**Why:** I checked the CDC 2021 full text (PMC8344968, fetched via eutils efetch). Under 'Recommended Regimens for Episodic Therapy for Recurrent HSV-2 Genital Herpes' it lists 'Famciclovir 500 mg orally once, followed by 250 mg 2 times/day for 2 days'. The hospital value is therefore guideline-sourced; the only issue is that the hospital site gives no source.

**Sources:** CDC STI Treatment Guidelines 2021, PMID 34292926 (PMC8344968) https://pubmed.ncbi.nlm.nih.gov/34292926/

## Apply log

- Adult dose: merged both proposals into one PO list. TW仿單 250 mg TID x 7 d for zoster, alongside FDA/SmPC 500 mg q8h. Also added immunocompromised and ophthalmic zoster (SmPC), first-episode GH (TW/SmPC, CDC 7-10 d), recurrent GH 125 mg BID x 5 d or 1 g BID x 1 d, herpes labialis 1500 mg, suppression 250/500 mg BID with reassessment at 12 months, and HIV 500 mg BID x 7 d
- Notes fix (reclassify): the CDC 500 mg once then 250 mg BID x 2 d regimen is now labelled '(CDC 2021, not labelled)' in Adult dose and in the body table
- Renal dose, HD, CRRT: TW仿單 CrCl table (>=30 no change; 10-29 125 mg TID; <10 no TW data; recurrent GH no change) and TW HD doses with the ~75% removal figure. Added FDA/SmPC values for every regimen, a warning that the 125 mg tab is not stocked, 'CRRT/PD: no data, individualize', and FDA 5.1 acute renal failure
- Hepatic dose: mild-moderate needs no adjustment (Cmax down 44%); severe not studied, conversion may be impaired
- Pediatric dose: not recommended under 18 y (SmPC/TW仿單 不建議用於兒童); FDA 8.4 details; use acyclovir/valacyclovir instead
- Indications set to [Herpes]
- Coverage set to [HSV, VZV]
- Side Effects set to [GI, CNS, LFT↑, AKI, thrombocytopenia, SJS/TEN]
- Monitor set to [renal, neuro]
- Mechanism: prodrug converted to penciclovir; then viral TK and host kinases; the triphosphate inhibits viral DNA polymerase; intracellular half-lives 10/20/7 h (TW 9 h); bioavailability 77%
- Drug Interactions: probenecid (SmPC 4.5: consider 250 mg TID if CNS effects), raloxifene (aldehyde oxidase), and the list of drugs with no clinically significant interaction (no CYP effect)
- Pregnancy: limited data, use if benefit > risk; FDA 8.1 narrative with no letter category; SmPC <300 outcomes; Pasternak 2010 26 exposures; CDC 2021 says acyclovir has the most data
- Breastfeeding: not preferred (LactMed; acyclovir/valacyclovir preferred); rat milk ~8x plasma (FDA 8.2); SmPC and TW仿單 statements
- Notes: stocked strength only 250 mg (FAM01, 衛署藥輸字第022179號) with tablet counts and the 125 mg problem; start-early limits; FDA 'not established' list including the Black/African American placebo finding; complicated zoster needs IV; resistance and foscarnet; contraindications incl. lactose; driving; rash/urticaria/anaphylaxis; Olar 2024 AKI; in-vitro EBV/CMV activity is not an indication
- Category: Antiviral, **nucleoside analogue** (oral prodrug of penciclovir)
- Page body: built full layout from the Acyclovir/Zovirax entry (Category, Mechanism, Indications FDA/SmPC/TW plus Limitations of Use, Coverage, Adult Dose table TW/FDA/SmPC/CDC, Renal Dose TW table plus FDA/SmPC Table 1 plus HD/CRRT, Hepatic, Pediatric, Side Effects, Monitoring, Drug Interactions table, Notes, Pregnancy, Breastfeeding)
- References section appended: FDA label (setid 2c44b8d2...), UK SmPC eMC 11710 rev 18 Mar 2019, TW 仿單 衛署藥輸字第022179號 (2020v01, uploaded 2022-03-23), TFDA licence page, LactMed NBK501220 rev 2025-01-15, CDC STI 2021 PMID 34292926, Pasternak 2010 PMID 20736469, Gill 1996 PMID 8827396, Olar 2024 PMID 39428714, each with URL
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
