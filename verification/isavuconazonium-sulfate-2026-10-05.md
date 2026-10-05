# Verification: Cresemba (Isavuconazonium)

- **Notion entry:** [Cresemba (Isavuconazonium)](https://app.notion.com/28dc496dfff18029b7d8c55b8f8d46b1)
- **Hospital codes:** CRE02 (Cresemba inj 200 mg), CRE03 (Cresemba cap 100 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/isavuconazonium-sulfate.json` (plus any `sources/isavuconazonium-sulfate-taiwan-insert-*.txt`)

## Product and sources

Cresemba (isavuconazonium sulfate), Pfizer Taiwan / Astellas. The hospital stocks two products. CRE02 is 驅黴霸200毫克注射劑, 衛部藥輸字第027796號: 200 mg isavuconazole = 372.6 mg isavuconazonium sulfate per vial, ATC J02AC05. CRE03 is 驅黴霸100毫克膠囊, 衛部藥輸字第027795號: 100 mg isavuconazole = 186.3 mg isavuconazonium sulfate per capsule. Sources checked: the US FDA label (DailyMed setid 8f7f73b8-586a-4df0-935f-fecd4696c16c, v21, 2025-05-05); the UK SmPCs on eMC (5069 injection and 5071 capsule, both revised 07/2025); the Taiwan TFDA inserts (injection SPC 20250717-3, 2026-05-12; capsule 20250717-2, 2025-11-03); and LactMed NBK603031 (revised 2024-04-15). Guidelines and PubMed IDs used were checked with NCBI esummary/efetch: IDSA 2016 aspergillosis (PMID 27365388, idsociety.org page), ESCMID-ECMM-ERS 2017 (PMID 29544767), SECURE (PMID 26684607), VITAL (PMID 26969258), ACTIVE (PMID 30289478), Biagi 2019 CRRT (PMID 31527035) and Tan 2025 TDM review (PMID 40946873).

## Agreed fixes applied in Notion (47)

### A1 · Indications (error)

**Was:** ["Candidiasis", "Aspergillosis"]

**Now:** ["Aspergillosis"]. Remove Candidiasis. There is no Mucormycosis option, so mucormycosis goes in Notes (see A12).

**Why:** Candidiasis is not an approved indication in any label. The FDA label approves invasive aspergillosis and invasive mucormycosis only. The UK SmPC and Taiwan insert approve invasive aspergillosis, and mucormycosis only when amphotericin B is inappropriate. The phase 3 ACTIVE trial in candidemia/invasive candidiasis did not show non-inferiority to caspofungin (60.3% vs 71.1%; adjusted difference -10.8, 95% CI -19.9 to -1.8). Under the ground rules (approved = FDA or SmPC lists it), the tag is unsupported and clinically misleading.

**Sources:** US FDA label §1 Indications and Usage, 'Invasive aspergillosis (1.1) and Invasive mucormycosis (1.2)', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §4.1, 'invasive aspergillosis; mucormycosis in patients for whom amphotericin B is inappropriate', https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan insert CRE02 §2 適應症, '(1) 侵犯性麴菌症 (2) 白黴菌病且不適合接受 amphotericin B', https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; Kullberg BJ et al. ACTIVE trial, Clin Infect Dis 2019;68:1981-9, PMID 30289478 (verified via esummary), 'did not demonstrate non-inferiority of isavuconazole to caspofungin for primary treatment of invasive candidiasis', https://pubmed.ncbi.nlm.nih.gov/30289478/

### A2 · Pediatric dose (error)

**Was:** ≥1yo: 10 mg/kg (max 372 mg) q8h × 6, then QD

**Now:** <span color="green">`IV`</span> ≥1 y (TW 注射劑/UK): <37 kg → 5.4 mg/kg isavuconazole (≈10 mg/kg isavuconazonium sulfate) q8h × 6 doses, then QD (start 12–24 h after last loading dose); ≥37 kg → 200 mg isavuconazole (1 vial) q8h × 6, then QD. Max 200 mg isavuconazole (= 372 mg sulfate) per dose.<br>US label (doses as sulfate): 1–<3 y (<18 kg) 15 mg/kg; 3–<18 y <37 kg 10 mg/kg; ≥37 kg 372 mg.<br>PO: TW 膠囊仿單 adults only; US/UK ≥6 y & ≥16 kg using 40 mg caps (US: 74.5 mg sulfate) — not stocked; UK: ≥37 kg may take 2 × 100 mg caps.

**Why:** The current text applies 10 mg/kg to every child aged 1 year or older. The US label gives 15 mg/kg (as sulfate) for ages 1 to <3 years (<18 kg). The current text also leaves out the ≥37 kg flat dose and does not say the max is expressed as the sulfate salt, while the Adult dose column uses isavuconazole units. The Taiwan injection insert for the stocked product (CRE02) gives 5.4 mg/kg isavuconazole for <37 kg (= 10 mg/kg sulfate), from age 1. The Taiwan capsule insert (CRE03) is adults only. Following the source hierarchy, the stocked-product insert comes first and the US regimen is listed alongside it.

**Sources:** Taiwan insert CRE02 §3.1 表1, '1 歲至未滿 18 歲…體重 <37 kg 5.4 mg/kg isavuconazole…最大值為 200 mg isavuconazole', https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; Taiwan insert CRE03 §2, '以上適應症僅適用於成人', https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F; US FDA label §2.3 Table 2, '1 year to less than 3 years of age, less than 18 kg: 15 mg/kg… 3 years to less than 18 years, less than 37 kg: 10 mg/kg… ≥37 kg one reconstituted vial (372 mg)', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §4.2 Table 1, 'Bodyweight < 37 kg 5.4 mg/kg isavuconazole', https://www.medicines.org.uk/emc/product/5069/smpc

### A3 · Page body: Pediatric Dose table + header (error)

**Was:** **FDA-approved for ≥1 year of age (2024)** … Loading: 10 mg/kg (max 372 mg isavuconazonium sulfate) q8h × 6 doses; Maintenance: 10 mg/kg (max 372 mg) once daily. Duration: Up to 84 days (IA) or 180 days (mucormycosis)

**Now:** Header: 'FDA: injection ≥1 y; capsules ≥6 y & ≥16 kg. TW: 注射劑 ≥1 y; 膠囊 adults only.' Replace the table with the weight/age bands from A2. Replace the Duration line with: 'Duration: by clinical response; for treatment beyond 6 months, weigh benefit–risk carefully (TW/UK label).'

**Why:** The body table has the same 1–<3 y error as A2. No label states a duration of '84 days (IA) or 180 days (mucormycosis)'. 84 days was the protocol maximum in the SECURE trial, and 181 days was the longest exposure in the paediatric studies. The labels say duration follows clinical response and that use beyond 6 months needs benefit–risk review. The '(2024)' approval year is not in the label text I have; it is flagged as unverified and dropped from the proposal.

**Sources:** Taiwan insert CRE02 §3.1, '治療持續時間應由臨床反應決定…有關 6 個月後的長期治療，應謹慎考量利益與風險的平衡', https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; UK SmPC (injection) §4.2, 'For long-term treatment beyond 6 months, the benefit-risk balance should be carefully considered', https://www.medicines.org.uk/emc/product/5069/smpc; US FDA label §14.1, 'protocol-defined maximum treatment duration was 84 days'; §2.3 Table 2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### A4 · Page body: Notes / Clinical Pearls #6 (capsules via NG) (error)

**Was:** Capsules: Should be swallowed whole per labeling; some centers open/disperse contents for NG tubes (off-label)

**Now:** 膠囊須整顆吞服，勿咀嚼、壓碎、溶解或打開 (TW/US/UK). Do NOT give capsules via NG tube (US label). US label only: the reconstituted vial solution (372 mg/5 mL) may be given via NG tube within 1 h of reconstitution (≥6 y & ≥16 kg), followed by 3 × 5 mL water flushes. The TW insert has no NG route.

**Why:** All three labels contradict the advice to open or disperse capsules. The US label says 'Do not administer CRESEMBA capsules through a nasogastric tube' and gives the IV solution via NG as the labelled alternative.

**Sources:** Taiwan insert CRE03 §3.1, '口服時須吞服整顆膠囊。勿嚼碎、擠壓、溶解或打開膠囊', https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F; US FDA label §2.1 and §2.6, 'swallow CRESEMBA capsules whole. Do not chew, crush, dissolve, or open the capsules… Do not administer CRESEMBA capsules through a nasogastric tube… CRESEMBA for injection can be administered through a nasogastric tube', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (capsule) §4.2, 'Do not chew, crush, dissolve or open the capsules', https://www.medicines.org.uk/emc/product/5071/smpc

### A5 · Page body: Drug Interactions table (Atorvastatin row) (error)

**Was:** Atorvastatin \| ↑ exposure \| Consider statin dose reduction

**Now:** Atorvastatin \| ↑ AUC 37% \| Use with caution; monitor for statin adverse reactions (no statin dose adjustment required per UK SmPC)

**Why:** The SmPC states that no statin dose adjustment is required and recommends monitoring. The US and Taiwan labels say 'use with caution' and recommend monitoring for atorvastatin adverse reactions. No label advises reducing the dose.

**Sources:** UK SmPC (injection) §4.5 Table 2, 'Atorvastatin: AUCinf ↑37%… Based on results with atorvastatin, no statin dose adjustment required. Monitoring of adverse reactions typical of statins is advised', https://www.medicines.org.uk/emc/product/5069/smpc; US FDA label §7 Table 5, 'Atorvastatin – Use with Caution… Monitor patients for adverse reactions that are typical of atorvastatin', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan insert CRE02 §7 表3, 'Atorvastatin 謹慎使用…應監測病人是否出現使用 atorvastatin 的典型不良反應'

### A6 · Page body: Coverage section (error)

**Was:** Candida spp. (including azole-resistant strains; C. krusei may have reduced susceptibility); Dimorphic fungi (Histoplasma, Blastomyces, Coccidioides); Some activity against Scedosporium; Fusarium spp. (variable); Lomentospora prolificans

**Now:** Labelled organisms (US 12.4 / UK 5.1): *Aspergillus* (A. fumigatus, A. flavus, A. niger, A. terreus; EUCAST S ≤1 mg/L for fumigatus/flavus/terreus) and Mucorales (*Rhizopus*, *Mucor*, *Lichtheimia*). Mucorales MICs are variable and generally higher than for Aspergillus, and species data are very limited: no favourable response in 5 *Rhizomucor* cases (UK 5.1). Cross-resistance with other azoles is possible. Delete 'including azole-resistant strains'. Keep the Candida / dimorphic / Scedosporium / Fusarium / Lomentospora lines but mark them 'not a labelled organism — in vitro/limited clinical data (unsourced; flagged)'. Brief Summary row: 'Aspergillus, Mucorales (labelled); Candida, dimorphic fungi (in vitro/limited data)'.

**Why:** 'Candida including azole-resistant strains' is contradicted by the labels. The US label says in vitro and animal data suggest cross-resistance with other azoles. The SmPC and Taiwan insert say cross-resistance with voriconazole and other triazoles cannot be excluded. The labels list only Aspergillus and Mucorales. The Candida, dimorphic, Scedosporium, Fusarium and Lomentospora lines have no source and are flagged per the ground rules. The Brief Summary table row 'Aspergillus, Candida, Mucorales, dimorphic fungi' should be changed to match.

**Sources:** US FDA label §12.4 Microbiology, 'In vitro and animal studies suggest cross-resistance between isavuconazole and other azoles… Isavuconazole has activity against… Aspergillus flavus, Aspergillus fumigatus, Aspergillus niger, and Mucorales such as Rhizopus oryzae and Mucormycetes species', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §5.1, 'cross-resistance with voriconazole and other triazole antifungal agents cannot be excluded'; EUCAST table; 'concentrations… required to inhibit Mucorales are higher', https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan insert CRE02 §10.2 微生物學/抗藥性機轉

### A7 · Coverage (unsupported)

**Was:** ["Candida", "Aspergillus"]

**Now:** Keep ["Candida","Aspergillus"]. Add to Notes: 'Candida: not a labelled organism or approved indication; ACTIVE trial non-inferiority vs caspofungin not shown (PMID 30289478); cross-resistance with other azoles possible. Mucorales: labelled (no tag option).'

**Why:** No label (US §12.4, UK §5.1, TW §10.2) lists Candida as a susceptible organism. The only clinical trial in invasive candidiasis (ACTIVE) did not show non-inferiority. Keeping the tag implies the drug is labelled for Candida. If the owner prefers to keep it as in vitro activity, a qualifying note is needed at minimum.

**Sources:** US FDA label §12.4 Antimicrobial Activity, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §5.1, https://www.medicines.org.uk/emc/product/5069/smpc; Kullberg BJ et al. ACTIVE, PMID 30289478, https://pubmed.ncbi.nlm.nih.gov/30289478/

### A8 · Page body: Indications (guideline grading) (error)

**Was:** Invasive aspergillosis — first-line (AI per ESCMID/ECMM; AII per IDSA)

**Now:** **Invasive aspergillosis** — first-line (ESCMID-ECMM-ERS 2017: isavuconazole and voriconazole are the preferred first-line agents for pulmonary IA); IDSA 2016: alternative primary therapy (strong recommendation; moderate-quality evidence)

**Why:** The 2016 IDSA guideline uses GRADE wording, not 'AII'. It lists isavuconazole as an alternative to voriconazole for primary therapy: 'Alternative therapies include liposomal AmB…, isavuconazole (strong recommendation; moderate-quality evidence)'. The ESCMID-ECMM-ERS executive summary says 'Isavuconazole and voriconazole are the preferred agents for first-line treatment'.

**Sources:** IDSA Aspergillosis guideline 2016 (Patterson TF, Clin Infect Dis 2016, PMID 27365388, verified), https://www.idsociety.org/practice-guideline/aspergillosis/; ESCMID-ECMM-ERS 2017 executive summary (Ullmann AJ, Clin Microbiol Infect 2018, PMID 29544767, verified), https://pubmed.ncbi.nlm.nih.gov/29544767/

### A9 · Page body: Indications (off-label candidiasis) (minor)

**Was:** Off-label: invasive candidiasis, other mold infections

**Now:** Off-label: invasive candidiasis — NOT recommended as primary therapy (ACTIVE trial: non-inferiority to caspofungin not shown, PMID 30289478); other mold infections (limited data)

**Why:** Without this qualifier the line reads as an endorsement. The only RCT failed its primary endpoint.

**Sources:** Kullberg BJ et al. Clin Infect Dis 2019;68:1981-9, PMID 30289478, https://pubmed.ncbi.nlm.nih.gov/30289478/

### A10 · Side Effects (missing)

**Was:** ["LFT↑", "QTc shorten", "hypokalemia"]

**Now:** ["LFT↑", "QTc shorten", "hypokalemia", "GI", "thrombophlebitis"]

**Why:** Nausea (26%), vomiting (25%) and diarrhea (22%) are the most frequent adverse reactions in the US label but have no tag. The SmPC and Taiwan insert list thrombophlebitis as common. Both options exist in the schema.

**Sources:** US FDA label §6.1, 'nausea (26%), vomiting (25%), diarrhea (22%), headache (17%), elevated liver chemistry tests (16%), hypokalemia (14%)…', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §4.8 Table 3, 'Vascular disorders – Common: Thrombophlebitis'; 'Gastrointestinal – Common: Vomiting; Diarrhoea; Nausea; Abdominal pain', https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan insert CRE02 §8.1 表4, '血管問題 常見 血栓性靜脈炎'

### A11 · Breastfeeding (missing)

**Was:** Discontinue during treatment

**Now:** Discontinue during treatment (TW/US/UK label: excreted in rat milk). LactMed: no human data; >99% protein bound, so milk levels are likely low, but an alternative is preferred, especially for a newborn/preterm infant (fluconazole, miconazole).

**Why:** The current text matches the labels. Under the source hierarchy, LactMed is the primary breastfeeding source and adds the protein-binding reasoning and named alternatives.

**Sources:** LactMed 'Isavuconazole' NBK603031 (rev. 2024-04-15), Summary of Use during Lactation and Alternate Drugs to Consider, https://www.ncbi.nlm.nih.gov/books/NBK603031/; US FDA label §8.2, 'breastfeeding should be discontinued during treatment with CRESEMBA', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan insert CRE02 §6.2, 'CRESEMBA 治療期間應停止哺乳'

### A12 · Notes (missing)

**Was:** (empty)

**Now:** <span color="green">`IV`</span> <span color="blue">`PO`</span> 劑量以 isavuconazole 表示：200 mg isavuconazole = 372 mg isavuconazonium sulfate（1 vial 或 2 caps）。IV↔PO 可直接轉換，免再 loading（F 98%）。IV：須經 0.2–1.2 µm PES in-line filter，輸注 ≥1 h，NS 或 D5W 稀釋。膠囊整顆吞服、勿打開。Mucormycosis 亦為核准適應症（TW/UK：限不適合 amphotericin B 者；US 無此限制）— no tag option. Contraindicated in familial short QT syndrome.

**Why:** Notes is empty, but the labels give practical points that matter for this product: salt vs base units (the source of the hospital labelling confusion), the mandatory in-line filter, the IV↔PO switch without reloading, the mucormycosis indication (no multi-select option exists), and the short-QT contraindication.

**Sources:** Taiwan insert CRE02 §3.1, 'PES 製成之管路內濾膜（孔徑 0.2 μm 至 1.2 μm）…輸注的時間最少為1小時'; §2 適應症, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; Taiwan insert CRE03 §3.1, '372 mg isavuconazonium sulfate 劑量等同於 200 mg isavuconazole…劑型之間轉換時不需給與起始劑量', https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F; US FDA label §1.2 (mucormycosis, no amphotericin restriction), §2.1, §2.7, §4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### A13 · Renal dose, HD, CRRT (missing)

**Was:** No adjustment needed

**Now:** No adjustment needed, incl. ESRD (TW/US/UK); not removed by HD. CRRT: not readily removed (transmembrane CL ~0.7% of total), no adjustment (Biagi 2019, PMID 31527035). Pediatric renal impairment: no data (TW/UK).

**Why:** The current text is correct but does not address the HD and CRRT parts of the column. The labels state isavuconazole is not removed by haemodialysis and that no paediatric renal data exist. CRRT is not covered by any label; Biagi 2019 (7 patients on CRRT plus in vitro) found negligible dialytic clearance.

**Sources:** Taiwan insert CRE02 §3.3 and §9, '腎功能不全的成人病人（包括末期腎病病人）無需調整劑量…無法針對腎功能不全的兒童病人提出建議劑量'; 'Isavuconazole 無法以血液透析排除'; US FDA label §8.6 and §10, 'No dose adjustment… including… ESRD'; 'Isavuconazole is not removed by hemodialysis', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Biagi M et al. Antimicrob Agents Chemother 2019;63:e01085-19, PMID 31527035 (verified), https://pubmed.ncbi.nlm.nih.gov/31527035/

### A14 · Hepatic dose (minor)

**Was:** Mild-mod: no change; Severe: caution

**Now:** Child-Pugh A/B: no adjustment. Child-Pugh C: not studied — not recommended unless benefit > risk; monitor closely for toxicity (TW/UK; US: use only if benefit > risk). Pediatric hepatic impairment: no data.

**Why:** 'Caution' understates the label wording, which says not recommended unless benefit outweighs risk. The column also omits that there are no paediatric data.

**Sources:** Taiwan insert CRE02 §3.3/§6.6, '除非認為潛在效益大於風險，否則不建議在這些病人中使用…應密切監測'; US FDA label §8.7, 'should be used in these patients only when the benefits outweigh the risks', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §4.2, https://www.medicines.org.uk/emc/product/5069/smpc

### A15 · Pregnancy (minor)

**Was:** Avoid; embryo-fetal toxicity in animals

**Now:** Avoid unless severe/life-threatening fungal infection where benefit > fetal risk (TW/UK). Animal data: skeletal anomalies, ↑perinatal mortality; no human data. Effective contraception during treatment and for 28 days after the last dose (US).

**Why:** The current text is consistent with the labels but leaves out the exception wording from the stocked-product insert and the US contraception duration. No letter category is used, which is correct.

**Sources:** Taiwan insert CRE02 §6.1, 'CRESEMBA 不得使用於懷孕期間，除非病人患有嚴重或可能危及生命的黴菌感染，且…預期利益高於對胎兒的可能風險'; US FDA label §5.4/§8.3, 'effective contraception during treatment… and for 28 days after the final dose', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §4.6, https://www.medicines.org.uk/emc/product/5069/smpc

### A16 · Drug Interactions (minor)

**Was:** Contraindicated with strong CYP3A4 inducers/inhibitors; ↑ tacrolimus/sirolimus \~2×

**Now:** Contraindicated with strong CYP3A4 inhibitors (ketoconazole, high-dose ritonavir 400 mg q12h) and strong CYP3A4 inducers (e.g., rifampin, carbamazepine, phenytoin, long-acting barbiturates, St John's wort) (TW/US). UK also explicitly CI: rifabutin, moderate inducers efavirenz/etravirine/nafcillin; ritonavir >200 mg q12h. Moderate CYP3A4 + mild P-gp inhibitor: ↑ tacrolimus/sirolimus ~2× (TDM), ↑ cyclosporine, MMF, digoxin (monitor); avoid vincristine.

**Why:** The current text matches the TW/US contraindications, but the labels differ. The SmPC contraindicates only ketoconazole and ritonavir >200 mg q12h among inhibitors, and adds moderate inducers. The P-gp substrate (digoxin) and vincristine 'avoid' statements are missing.

**Sources:** Taiwan insert CRE02 §4 and §7 表2/表3 (incl. 'Vincristine 避免併用'); US FDA label §4 and §7 Table 4/5, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC (injection) §4.3/§4.5, https://www.medicines.org.uk/emc/product/5069/smpc

### A17 · Page body: Drug Interactions (missing rows) (missing)

**Was:** Table lists tacrolimus, sirolimus, cyclosporine, MMF, midazolam, atorvastatin, digoxin only

**Now:** Add rows: **Vincristine** \| predicted ↑ exposure (<2×, P-gp) \| Avoid concomitant use (US/TW). **Lopinavir/ritonavir** \| isavuconazole AUC ↑96%; lopinavir/ritonavir ↓ \| Caution; monitor antiviral efficacy. **Bupropion** \| AUC ↓42% (CYP2B6 induction) \| May need ↑ bupropion dose.

**Why:** These interactions are listed in the US and Taiwan interaction tables. Vincristine is especially relevant for haematology/oncology patients.

**Sources:** US FDA label §7 Table 4/5, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan insert CRE02 §7 表2/表3; UK SmPC (injection) §4.5 Table 2 (bupropion AUC ↓42%), https://www.medicines.org.uk/emc/product/5069/smpc

### A18 · Page body: Monitor table (LFT frequency, TDM target) (unsupported)

**Was:** LFTs: Baseline, then weekly during loading, then periodically … TDM target (if measured): Trough >1–2 μg/mL; some suggest 2–4 μg/mL for mucormycosis

**Now:** LFTs: at start and during the course of therapy (US §5.1). TDM: not routinely required (IDSA: value remains to be assessed); consider in critically ill / RRT / ECMO / suspected interaction or failure. A trough of ~2–5 mg/L is generally supported in these subgroups (Tan 2025, PMID 40946873).

**Why:** 'Weekly during loading' makes no sense because loading lasts only 48 h; the label says to test at the start and during the course. The TDM target has no source. IDSA says the value of isavuconazole TDM 'remains to be assessed'. A 2025 review supports a trough of 2.0 to about 5.0 mg/L in at-risk subgroups.

**Sources:** US FDA label §5.1, 'Evaluate liver-related laboratory tests at the start and during the course of CRESEMBA therapy', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; IDSA Aspergillosis 2016, 'The value of TDM… for isavuconazole… remains to be assessed', https://www.idsociety.org/practice-guideline/aspergillosis/; Tan Z et al. Int J Antimicrob Agents 2025;66:107619, PMID 40946873 (verified), https://pubmed.ncbi.nlm.nih.gov/40946873/

### A19 · Page body: Notes #4 and Renal 'Preferred azole' and Side Effects 'Advantage over voriconazole' (unsupported)

**Was:** QTc shortening — advantage in patients on other QT-prolonging medications; Preferred azole in renal dysfunction; Lower rates of visual disturbances, photosensitivity, and hepatotoxicity

**Now:** Notes #4 → '**QTc shortening** (concentration-related; −13.1 ms at 200 mg, −24.6 ms at 600 mg) — contraindicated in familial short QT syndrome; caution with other QT-shortening drugs (e.g., rufinamide; TW/UK); combination with QT-active drugs not studied, clinical significance unclear (US 12.2; IDSA 2016)'. Renal line 'Preferred azole in renal dysfunction' → 'Useful option in renal dysfunction: no renal dose adjustment (labels) and IV has no cyclodextrin (IDSA 2016)'. Side effects 'Advantage over voriconazole' → 'Lower rates of photosensitivity, skin disorders, hepatobiliary and visual disturbances vs voriconazole (IDSA 2016, limited experience); SECURE: hepatobiliary 9% vs 16%, eye 15% vs 27%, skin 33% vs 42% (PMID 26684607)'.

**Why:** No label says QT shortening is an 'advantage'. The US label says it was not evaluated with other QT-shortening drugs, and IDSA says its clinical significance is unclear. 'Preferred azole in renal dysfunction' is an unsourced opinion. 'Photosensitivity' is not reported as such; SECURE reports eye and skin disorders, which supports the rest of the sentence.

**Sources:** US FDA label §12.2, 'CRESEMBA was not evaluated in combination with other drugs that reduce the QTc interval, so the additive effects are not known'; §11 excipients, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan insert CRE02 §5.1, '同時服用已知會縮短 QT 間隔的其他藥物（例如：rufinamide）時，必須謹慎'; IDSA 2016, 'isavuconazole could shorten the QTc interval; the clinical significance of this is unclear… The intravenous formulation does not contain cyclodextrin', https://www.idsociety.org/practice-guideline/aspergillosis/; Maertens JA et al. SECURE, Lancet 2016;387:760-9, PMID 26684607 (verified), https://pubmed.ncbi.nlm.nih.gov/26684607/

### A20 · Page body: Renal Dose / HD / CRRT (minor)

**Was:** No adjustment needed for any degree of renal impairment, ESRD, HD, or CRRT

**Now:** Keep, and add a citation: 'not removed by HD (label); CRRT: negligible clearance, no adjustment (Biagi 2019, PMID 31527035); pediatric: no data (TW/UK)'

**Why:** No label covers the CRRT statement, so it needs the PubMed source. The paediatric caveat from the Taiwan and UK labels is missing.

**Sources:** Biagi M et al. AAC 2019, PMID 31527035, https://pubmed.ncbi.nlm.nih.gov/31527035/; Taiwan insert CRE02 §3.3

### A21 · Adult dose (minor)

**Was:** Same dose in IV and PO<br>Loading dose: 200 mg q8h (6 doses = 2 days)<br>Maintenance dose: 200 mg QD

**Now:** Same dose in IV and PO (doses as isavuconazole; 200 mg = 372 mg isavuconazonium sulfate = 1 vial or 2 × 100 mg caps)<br>Loading dose: 200 mg q8h × 6 doses (48 h)<br>Maintenance dose: 200 mg QD, starting 12–24 h after the last loading dose

**Why:** The current text is correct. Adding the salt equivalence prevents confusion with the US label and hospital orders, which are written as 372 mg, and with the Pediatric column, which uses the sulfate max. The maintenance start window is from the label.

**Sources:** Taiwan insert CRE02 §3.1 表1 and CRE03 §3.1; US FDA label §2.2 Table 1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### A22 · Page body: Adult Dose (IV filter detail) (minor)

**Was:** IV: infuse over ≥1 hour through in-line filter

**Now:** IV: dilute in 250 mL NS or D5W (0.4–0.8 mg/mL isavuconazole); infuse over ≥1 h through a 0.2–1.2 µm PES in-line filter; do not give as bolus; flush line with NS/D5W before/after

**Why:** The filter pore size and material are mandatory per the label; the hospital site also leaves them out. The proposal does not add storage or stability details.

**Sources:** Taiwan insert CRE02 §3.1/§3.2; US FDA label §2.1, 'in-line filter (pore size 0.2 to 1.2 micron)… over a minimum of 1 hour in 250 mL', https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### A23 · Page body: Drug Interactions note on high-dose ritonavir (minor)

**Was:** Ketoconazole, high-dose ritonavir (400mg q12h) \| ↑↑ isavuconazole levels \| Contraindicated

**Now:** Ketoconazole (↑↑ isavuconazole, AUC +422%); high-dose ritonavir (TW/US: 400 mg q12h; UK: >200 mg q12h — UK mechanism: CYP3A4 induction → ↓ isavuconazole) \| Contraindicated

**Why:** The labels disagree on the threshold and the direction of effect. The UK SmPC says high-dose ritonavir may induce CYP3A4/5 and decrease isavuconazole levels.

**Sources:** UK SmPC (injection) §4.5, 'Co-administration with high-dose ritonavir (>200 mg twice daily) is contraindicated, as at high doses ritonavir may induce CYP3A4/5 and decrease isavuconazole plasma concentrations', https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan insert CRE02 §4, '高劑量 ritonavir（每 12 小時 400 mg）'

### B1 · Indications (error)

**Was:** ["Candidiasis","Aspergillosis"]

**Now:** ["Aspergillosis"]

**Why:** Candidiasis is not an approved indication on any label. US label section 1 approves only invasive aspergillosis and invasive mucormycosis. UK SmPC 4.1 approves invasive aspergillosis and mucormycosis when amphotericin B is inappropriate. The Taiwan inserts (適應症) say the same. In the phase 3 ACTIVE trial in candidemia, isavuconazole did not show non-inferiority to caspofungin (60.3% vs 71.1%). The schema has no Mucormycosis option, so mucormycosis should go in Notes (see B13).

**Sources:** US FDA label (DailyMed) §1 Indications and Usage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC 200 mg infusion §4.1: https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan insert 衛部藥輸字第027796號 §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; Kullberg BJ et al. ACTIVE trial, Clin Infect Dis 2019, PMID 30289478 (esummary-verified): https://pubmed.ncbi.nlm.nih.gov/30289478/

### B2 · Pediatric dose (error)

**Was:** ≥1yo: 10 mg/kg (max 372 mg) q8h × 6, then QD

**Now:** <span color="green">`IV`</span> ≥1 y (TW/UK insert, stocked vial): <37 kg → 5.4 mg/kg isavuconazole (≈10 mg/kg isavuconazonium sulfate) q8h × 6 doses, then QD (start 12–24 h after last loading dose); ≥37 kg → adult dose (200 mg isavuconazole = 1 vial). Max 200 mg isavuconazole (= 372 mg sulfate) per dose.<br>US label (doses as sulfate): 1–<3 y (<18 kg) 15 mg/kg; 3–<18 y (<37 kg) 10 mg/kg; ≥37 kg 372 mg.<br>`PO` 100 mg cap: TW insert = adults only. US/UK capsules: ≥6 y and ≥16 kg, using 40 mg/74.5 mg caps (not stocked). UK lists 2 × 100 mg caps for ≥37 kg but states 100 mg caps not studied in children.<br>兒童腎/肝功能不全：無資料 (TW/UK)

**Why:** The current text gives mg/kg without saying which salt the dose refers to. The labels differ by age band. US label Table 2 gives 15 mg/kg isavuconazonium sulfate for ages 1 to <3 years (<18 kg) and 10 mg/kg for 3 to <18 years (<37 kg). The Taiwan injection insert (stocked product) and UK SmPC give 5.4 mg/kg isavuconazole for all children aged 1–18 years under 37 kg (5.4 mg/kg isavuconazole is about 10 mg/kg sulfate). Under the ground rules the stocked product's (Taiwan) label takes priority and the US values are listed alongside. The current text also leaves out the ≥37 kg band and the oral route limits: the Taiwan capsule insert says '以上適應症僅適用於成人'.

**Sources:** Taiwan inj insert §3.1 表1 建議劑量 (1–<18 y, <37 kg: 5.4 mg/kg isavuconazole; max 200 mg): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; US FDA label §2.3 Table 2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC 100 mg capsules §4.1/§4.2 Table 2: https://www.medicines.org.uk/emc/product/5071/smpc; Taiwan cap insert §2 (adults only): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F

### B3 · Adult dose (minor)

**Was:** Same dose in IV and PO<br>Loading dose: 200 mg q8h (6 doses = 2 days)<br>Maintenance dose: 200 mg QD

**Now:** Same dose in IV and PO<br>Loading dose: 200 mg isavuconazole (= 372 mg isavuconazonium sulfate; 1 vial or 2 × 100 mg caps) q8h × 6 doses (48 h)<br>Maintenance dose: 200 mg QD, start 12–24 h after last loading dose<br><span color="green">`IV`</span> infuse ≥1 h via 0.2–1.2 µm PES in-line filter; IV↔PO switch: no reloading

**Why:** The numbers are correct when read as isavuconazole, but the column never says so. US labelling and the hospital order (372 mg) are written in isavuconazonium sulfate, so '200 mg' could be read as a sulfate dose. The column also leaves out the 12–24 h start time for maintenance, the required in-line filter, and that no reload is needed when switching between IV and oral. All of these are in the labels.

**Sources:** Taiwan inj insert §3.1 (200 mg isavuconazole per vial; PES 0.2–1.2 μm filter; ≥1 h): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; Taiwan cap insert §3.1 (2 caps = 372 mg sulfate = 200 mg isavuconazole; 劑型之間轉換時不需給與起始劑量): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F; US FDA label §2.1/§2.2 Table 1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### B4 · Renal dose, HD, CRRT (missing)

**Was:** No adjustment needed

**Now:** No adjustment needed (any CrCl, incl. ESRD) — TW/US/UK<br>HD: not readily dialyzable; no supplemental dose<br>CRRT: no adjustment (transmembrane CL ≈0.7% of total; Biagi 2019, PMID 31527035); high PK variability in ICU — consider TDM (Behrens 2026, PMID 42212005)<br>兒童腎功能不全：無資料 (TW/UK)

**Why:** 'No adjustment' is correct, but the column gives nothing for HD or CRRT. The labels state isavuconazole is not readily dialysable (US 12.3, UK 5.2, TW §11), and UK SmPC 4.9 says it is not removed by haemodialysis. No label covers CRRT. Two studies do: Biagi 2019 (7 patients on CRRT, transmembrane clearance 0.7% of total clearance, no dose adjustment needed) and Behrens 2026 (dialysis clearance <1%, but large variability between patients, so TDM supported in the critically ill). The UK and Taiwan labels state there are no data in children with renal impairment.

**Sources:** Taiwan inj insert §3.3 腎功能不全 and §11 (不易由透析方式排除): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; US FDA label §8.6 and §12.3 Patients with Renal Impairment: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.2, §4.9, §5.2: https://www.medicines.org.uk/emc/product/5069/smpc; Biagi M et al. AAC 2019, PMID 31527035 (verified): https://pubmed.ncbi.nlm.nih.gov/31527035/; Behrens E et al. Ann Intensive Care 2026, PMID 42212005 (verified): https://pubmed.ncbi.nlm.nih.gov/42212005/

### B5 · Hepatic dose (minor)

**Was:** Mild-mod: no change; Severe: caution

**Now:** Child-Pugh A/B: no adjustment (AUC ↑64%/84%)<br>Child-Pugh C: not studied — not recommended unless benefit > risk; monitor closely for toxicity (TW/UK/US)<br>兒童肝功能不全：無資料

**Why:** 'Severe: caution' is weaker than the labels. The Taiwan insert (3.3, 6.6) and UK SmPC (4.2, 4.4) say: not recommended unless the potential benefit outweighs the risks, with close monitoring. US 8.7 says: use only when benefits outweigh risks. The AUC increases of 64% and 84% are from US 12.3 and UK 5.2.

**Sources:** Taiwan inj insert §3.3/§6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; US FDA label §8.7, §12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.2, §5.2: https://www.medicines.org.uk/emc/product/5069/smpc

### B6 · Coverage (unsupported)

**Was:** ["Candida","Aspergillus"]

**Now:** Keep ["Candida","Aspergillus"]. Add to Notes: Candida — not an approved indication on any label (US 12.4 lists only Aspergillus and Mucorales); ACTIVE trial: non-inferiority vs caspofungin not shown (PMID 30289478); cross-resistance with other azoles possible. Mucorales has no Coverage option — mention in Notes.

**Why:** Aspergillus coverage is label-supported: US 12.4 lists A. flavus, A. fumigatus and A. niger, and UK 5.1 adds A. terreus. Candida is not on any label's activity list (US 12.4 lists only Aspergillus and Mucorales), and in the ACTIVE trial isavuconazole was worse than caspofungin. Some in vitro Candida activity is plausible and no source contradicts it, so under the ground rules I flag the tag rather than remove it. Mucorales has no Coverage option.

**Sources:** US FDA label §12.4 Antimicrobial Activity / Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §5.1: https://www.medicines.org.uk/emc/product/5069/smpc; Kullberg BJ et al. CID 2019, PMID 30289478: https://pubmed.ncbi.nlm.nih.gov/30289478/

### B7 · Side Effects (missing)

**Was:** ["LFT↑","QTc shorten","hypokalemia"]

**Now:** ["GI","LFT↑","CNS","hypokalemia","QTc shorten","thrombophlebitis"]

**Why:** The tags leave out the most frequent adverse reactions on the labels. US 6.1: nausea 26%, vomiting 25%, diarrhea 22%, headache 17%. US Table 3: delirium 8.6%. UK SmPC 4.8 and Taiwan Table 4 rate delirium and thrombophlebitis as common (≥1/100). GI, CNS and thrombophlebitis are all existing options. The three current tags are correct.

**Sources:** US FDA label §6.1 and Table 3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.8 Table 3: https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan inj insert §8.1 表4 (譫妄 常見; 血栓性靜脈炎 常見): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F

### B8 · Drug Interactions (missing)

**Was:** Contraindicated with strong CYP3A4 inducers/inhibitors; ↑ tacrolimus/sirolimus \~2×

**Now:** Contraindicated (TW/US): strong CYP3A4 inducers (rifampin, carbamazepine, long-acting barbiturates, St John's wort) and strong inhibitors (ketoconazole, high-dose ritonavir 400 mg q12h). UK also CI: phenytoin, rifabutin, moderate inducers (efavirenz, etravirine, nafcillin), ritonavir >200 mg q12h; UK allows other strong inhibitors with caution.<br>↑ tacrolimus/sirolimus ~2× (AUC +125%/+84%), cyclosporine +29% → TDM<br>Avoid vincristine (TW/US; UK: monitor toxicity); monitor digoxin, MMF (MPA), midazolam, atorvastatin; ↓ bupropion (may need ↑ dose)

**Why:** The current text is correct but incomplete. The Taiwan insert (§7 表3) and US §7 Table 5 say to avoid vincristine with isavuconazole in children and adults, and the column leaves this out. The column also leaves out the drugs that need monitoring: cyclosporine, digoxin, MMF, midazolam, atorvastatin and bupropion. It also leaves out the UK-only contraindications in SmPC 4.3 (rifabutin, efavirenz, etravirine, nafcillin, and ritonavir above 200 mg q12h). AUC figures are from UK 4.5.

**Sources:** Taiwan inj insert §4 禁忌 and §7 表2/表3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; US FDA label §4, §7 Table 4/5, §12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.3, §4.5: https://www.medicines.org.uk/emc/product/5069/smpc

### B9 · Pregnancy (minor)

**Was:** Avoid; embryo-fetal toxicity in animals

**Now:** Do not use unless severe/life-threatening fungal infection and benefit > fetal risk (TW/UK); animal: skeletal anomalies, ↑ perinatal mortality; no human data<br>Effective contraception during Tx and 28 days after last dose (US)

**Why:** The current text is accurate but leaves out the labels' exact condition for use (Taiwan 6.1: '不得使用於懷孕期間，除非病人患有嚴重或可能危及生命的黴菌感染…'; UK 4.6 says the same). It also leaves out the US contraception requirement (8.3/5.4: during treatment and for 28 days after). No letter category is used, which follows the ground rules.

**Sources:** Taiwan inj insert §6.1/§6.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/5069/smpc; US FDA label §5.4, §8.1, §8.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### B10 · Breastfeeding (missing)

**Was:** Discontinue during treatment

**Now:** Discontinue during treatment (TW/US/UK labels; present in rat milk)<br>LactMed: no human data; >99% protein bound → milk amount likely low, but alternative preferred (e.g., fluconazole, miconazole), esp. newborn/preterm

**Why:** The label statement is correct. The ground rules make LactMed the source for breastfeeding, and its summary is missing from the column. LactMed says there is no human data, the amount in milk is likely low because protein binding is over 99%, an alternative may be preferred especially for a newborn or preterm infant, and fluconazole and miconazole are the alternatives it lists.

**Sources:** LactMed 'Isavuconazole' NBK603031 (rev 2024-04-15), Summary of Use during Lactation and Alternate Drugs to Consider: https://www.ncbi.nlm.nih.gov/books/NBK603031/; US FDA label §8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan inj insert §6.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F

### B11 · Notes (missing)

**Was:** (empty)

**Now:** 劑量以 isavuconazole 表示：200 mg isavuconazole = 372 mg isavuconazonium sulfate (1 vial / 2 caps). Dose is expressed as isavuconazole.<br><span color="green">`IV`</span> 需 0.2–1.2 µm PES in-line filter，輸注 ≥1 h；IV↔PO 轉換不需再給 loading dose.<br>膠囊須整顆吞服，勿咀嚼/壓碎/打開 (TW/US/UK)；US label: 膠囊不可經 NG tube 給藥. Swallow capsules whole; not via NG (US).<br>Mucormycosis: TW/UK 限不適合 amphotericin B 者 (US 無此限制). Candida: not an approved indication (ACTIVE: non-inferiority vs caspofungin not shown).<br>t½ ~110–130 h；QTc shortening — CI in familial short QT syndrome.

**Why:** The Notes column is empty, but the labels support several key points. The dose is written as the active drug (isavuconazole), not the salt. IV needs an in-line filter. No reload is needed when switching IV and oral. Capsules must be swallowed whole and never given via NG (US 2.1/2.6, TW cap 3.1, UK cap 4.2). Mucormycosis is restricted in TW/UK. Half-life is 130 h in US 12.3 and 110–115 h in UK 5.2. Mucormycosis has no Indications option, so Notes is the only place for it.

**Sources:** Taiwan inj/cap inserts §2, §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F ; https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F; US FDA label §1, §2.1, §2.6, §4, §12.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC capsule §4.1/§4.2, §5.2: https://www.medicines.org.uk/emc/product/5071/smpc

### B12 · Page body (error)

**Was:** ## Indications: "**Invasive aspergillosis** — first-line (AI per ESCMID/ECMM; AII per IDSA)"

**Now:** **Invasive aspergillosis** — preferred first-line together with voriconazole (ESCMID-ECMM-ERS 2017); IDSA 2016: alternative primary therapy (strong recommendation; moderate-quality evidence)

**Why:** IDSA 2016 uses GRADE wording, not letter-number grades. It recommends voriconazole for primary therapy and lists isavuconazole as an alternative (strong; moderate), so 'AII per IDSA' is wrong in both format and placement. The ESCMID-ECMM-ERS 2017 abstract says 'Isavuconazole and voriconazole are the preferred agents for first-line treatment'. I could not check the 'AI' grade itself because the full text was not reachable.

**Sources:** IDSA Aspergillosis guideline 2016 (idsociety.org): https://www.idsociety.org/practice-guideline/aspergillosis/; Patterson TF et al. CID 2016, PMID 27365388 (verified): https://pubmed.ncbi.nlm.nih.gov/27365388/; Ullmann AJ et al. CMI 2018 ESCMID-ECMM-ERS, PMID 29544767 (verified): https://pubmed.ncbi.nlm.nih.gov/29544767/

### B13 · Page body (minor)

**Was:** ## Indications: "**Invasive mucormycosis** — when amphotericin B is inappropriate or not tolerated" / "Off-label: invasive candidiasis, other mold infections"

**Now:** **Invasive mucormycosis** — TW/UK: only when amphotericin B is inappropriate; US: no such restriction. ECMM/MSG 2019: IV isavuconazole first-line with moderate strength (high-dose L-AmB strongly preferred); strongly recommended as salvage.<br>Off-label: invasive candidiasis (ACTIVE trial: non-inferiority vs caspofungin not shown — not recommended as primary), other mould/dimorphic infections (VITAL)

**Why:** The amphotericin B restriction matches the Taiwan insert and UK SmPC, but the US label has no such restriction (US §1.2). The ECMM global guideline gives the guideline position. The off-label candidiasis line needs the ACTIVE result next to it.

**Sources:** US FDA label §1.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.1: https://www.medicines.org.uk/emc/product/5069/smpc; Cornely OA et al. Lancet Infect Dis 2019, PMID 31699664 (verified): https://pubmed.ncbi.nlm.nih.gov/31699664/; Kullberg BJ et al. CID 2019, PMID 30289478: https://pubmed.ncbi.nlm.nih.gov/30289478/

### B14 · Page body (error)

**Was:** ## Coverage: "*Candida* spp. (including azole-resistant strains; *C. krusei* may have reduced susceptibility)"

**Now:** *Candida* spp. — not an approved indication (ACTIVE: non-inferiority vs caspofungin not shown, PMID 30289478); cross-resistance with other azoles possible (US 12.4 / UK 5.1), so fluconazole/voriconazole-resistant isolates may not be covered; *C. krusei* may have reduced susceptibility (unsourced)

**Why:** The labels contradict 'including azole-resistant strains'. US 12.4: 'In vitro and animal studies suggest cross-resistance between isavuconazole and other azoles… patients failing prior azole therapy may require alternative antifungal therapy.' UK 5.1: 'cross-resistance with voriconazole and other triazole antifungal agents cannot be excluded.'

**Sources:** US FDA label §12.4 Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §5.1 Mechanism(s) of resistance: https://www.medicines.org.uk/emc/product/5069/smpc

### B15 · Page body (minor)

**Was:** ## Coverage: Mucorales (*Rhizopus, Mucor, Lichtheimia*); Dimorphic fungi (*Histoplasma, Blastomyces, Coccidioides*)

**Now:** Mucorales (*Rhizopus, Mucor, Lichtheimia*) — MICs variable and generally higher than for *Aspergillus*; no favourable responses in 5 *Rhizomucor* cases (UK SmPC 5.1)<br>Dimorphic fungi (*Histoplasma, Blastomyces, Coccidioides*) and *Cryptococcus* — VITAL open-label data (Thompson 2016, PMID 27169478)

**Why:** Both claims are plausible but have no source on the page. UK 5.1 and 4.4 state that Mucorales MICs are variable and higher, and that the 5 Rhizomucor cases had no favourable response. Thompson 2016 (VITAL) supports dimorphic fungi and Cryptococcus.

**Sources:** UK SmPC §4.4 Limitations of the clinical data, §5.1: https://www.medicines.org.uk/emc/product/5069/smpc; Thompson GR 3rd et al. CID 2016, PMID 27169478 (verified): https://pubmed.ncbi.nlm.nih.gov/27169478/

### B16 · Page body (error)

**Was:** ## Pediatric Dose: "**FDA-approved for ≥1 year of age (2024)**"; table Loading/Maintenance "10 mg/kg (max 372 mg isavuconazonium sulfate)"; "Duration: Up to 84 days (IA) or 180 days (mucormycosis)"

**Now:** **Approved for ≥1 year (IV); FDA pediatric approval Dec 2023**<br>TW/UK (stocked vial): <37 kg 5.4 mg/kg isavuconazole (≈10 mg/kg sulfate) q8h × 6 → QD; ≥37 kg adult dose; max 200 mg isavuconazole/dose<br>US: 1–<3 y (<18 kg) 15 mg/kg sulfate; 3–<18 y (<37 kg) 10 mg/kg sulfate; ≥37 kg 372 mg<br>Duration: by clinical response; beyond 6 months weigh benefit–risk (TW/UK)

**Why:** There are three errors. First, the year: Drugs@FDA shows the pediatric efficacy supplements (NDA 207500 S-15, 207501 S-13) approved on 2023-12-08, not in 2024. Second, the table leaves out the US 15 mg/kg band for ages 1 to <3 years and does not give the Taiwan/UK dose in isavuconazole. Third, the duration line is wrong: '84 days' was only the trial's protocol maximum (US 14.1, UK 5.1), not a recommendation, and '180 days for mucormycosis' has no source. The labels say duration depends on clinical response and benefit–risk should be weighed beyond 6 months (TW 3.1, UK 4.2).

**Sources:** Drugs@FDA via openFDA (NDA207500 SUPPL 15 / NDA207501 SUPPL 13, 20231208 Efficacy): https://api.fda.gov/drug/drugsfda.json?search=openfda.brand_name:CRESEMBA; US FDA label §2.3, §14.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan inj insert §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; UK SmPC §4.2: https://www.medicines.org.uk/emc/product/5069/smpc

### B17 · Page body (error)

**Was:** ## Notes #6: "**Capsules:** Should be swallowed whole per labeling; some centers open/disperse contents for NG tubes (off-label)"

**Now:** **Capsules:** swallow whole — do not chew, crush, dissolve or open (TW/US/UK); do not give capsules via NG tube (US). US label only: the reconstituted IV vial solution may be given via NG tube (patients ≥6 y and ≥16 kg; give within 1 h of reconstitution, then 3 × 5 mL water flushes). TW inj insert: IV infusion only.

**Why:** The labels contradict opening capsules for NG tubes. US 2.1 says 'Do not chew, crush, dissolve, or open the capsules', and US 2.6 says 'Do not administer CRESEMBA capsules through a nasogastric tube'. The US label's NG option is the reconstituted vial. The Taiwan injection insert says 'CRESEMBA只能以靜脈輸注方式給藥'.

**Sources:** US FDA label §2.1, §2.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; Taiwan cap insert §3.1 (勿嚼碎、擠壓、溶解或打開膠囊): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027795%E8%99%9F; Taiwan inj insert §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F

### B18 · Page body (unsupported)

**Was:** ## Monitor: "**TDM target (if measured):** Trough \>1–2 μg/mL; some suggest 2–4 μg/mL for mucormycosis"; TDM row "Not routinely required; consider if failure, malabsorption, or drug interaction suspected"

**Now:** TDM: not routinely required — no exposure–response relationship in SECURE (Desai 2017, PMID 28923872; Kaindl 2019, PMID 30476108); IDSA 2016: value of TDM not established. Consider in ICU, CRRT/ECMO, obesity, failure or suspected interaction (ICU levels lower: Mikulska 2024, PMID 38366368). Suggested trough ~2–5 mg/L in these groups (review: Tan 2025, PMID 40946873); >1 mg/L reached by most patients in trials.

**Why:** The trough target has no source, and the '2–4 μg/mL for mucormycosis' figure is not in any source I found. The SECURE analyses (Desai 2017, Kaindl 2019) found no link between exposure and outcome, so routine TDM is not supported. Mikulska 2024 found ICU levels were lower (mean 2.02 vs 4.15 mg/L) and supports TDM in ICU. The Tan 2025 review suggests a trough of about 2.0–5.0 mg/L in the specific groups listed. IDSA 2016 says the value of TDM for isavuconazole remains to be assessed.

**Sources:** Desai AV et al. AAC 2017, PMID 28923872 (verified): https://pubmed.ncbi.nlm.nih.gov/28923872/; Kaindl T et al. JAC 2019, PMID 30476108 (verified): https://pubmed.ncbi.nlm.nih.gov/30476108/; Mikulska M et al. JAC 2024, PMID 38366368 (verified): https://pubmed.ncbi.nlm.nih.gov/38366368/; Tan Z et al. Int J Antimicrob Agents 2025, PMID 40946873 (verified): https://pubmed.ncbi.nlm.nih.gov/40946873/; IDSA Aspergillosis 2016: https://www.idsociety.org/practice-guideline/aspergillosis/

### B19 · Page body (minor)

**Was:** ## Monitor: LFTs "Baseline, then weekly during loading, then periodically"

**Now:** LFTs: baseline and periodically during therapy (US 5.1); monitor for progression if abnormal

**Why:** The loading phase lasts only 48 hours, so 'weekly during loading' makes no sense. US 5.1 says to evaluate liver tests 'at the start and during the course of CRESEMBA therapy'. UK 4.4 says monitoring of hepatic enzymes should be considered as clinically indicated.

**Sources:** US FDA label §5.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.4: https://www.medicines.org.uk/emc/product/5069/smpc

### B20 · Page body (missing)

**Was:** ## Drug Interactions tables (no vincristine; ritonavir listed only as '400mg q12h'; no UK moderate-inducer contraindications)

**Now:** Contraindicated table: add a UK-only row — **Rifabutin, phenytoin; moderate CYP3A4/5 inducers efavirenz, etravirine, nafcillin** \| ↓ isavuconazole \| **Contraindicated (UK SmPC 4.3)**. Ritonavir threshold: 400 mg q12h (US/TW) vs >200 mg q12h (UK).<br>Add row: **Vincristine** \| ↑ exposure (<2×, predicted; P-gp) \| **Avoid** (US/TW); UK: monitor for toxicity, reduce dose if needed<br>Add row: **Lopinavir/ritonavir** \| isavuconazole AUC ↑96%; lopinavir ↓27%, ritonavir ↓31% \| Caution; monitor antiviral efficacy<br>Add row: **Bupropion** \| AUC ↓42% (CYP2B6 induction) \| May need ↑ bupropion dose (not above max)

**Why:** The tables leave out the label's instruction to avoid vincristine (US Table 5, Taiwan 表3) and the extra UK contraindications in SmPC 4.3. The tacrolimus +125%, sirolimus +84%, cyclosporine +29%, MMF +35% and midazolam +103% figures already in the body match UK 4.5.

**Sources:** US FDA label §4, §7 Table 4/5: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; UK SmPC §4.3, §4.5: https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan inj insert §7 表2/表3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F

### B21 · Page body (unsupported)

**Was:** ## Renal: "No adjustment needed for any degree of renal impairment, ESRD, HD, or CRRT"; "Preferred azole in renal dysfunction"

**Now:** **No adjustment needed** for any degree of renal impairment incl. ESRD (TW/US/UK); not readily dialyzable / not removed by HD (label). CRRT: no adjustment — transmembrane CL ~0.7% of total (Biagi 2019, PMID 31527035).<br>- IV formulation contains no cyclodextrin (IDSA 2016), so unlike IV voriconazole there is no vehicle-accumulation concern in renal impairment<br>- Children with renal impairment: no data (TW/UK)

**Why:** No label covers CRRT, so that claim needs the PubMed source. 'Preferred azole in renal dysfunction' is an opinion with no source. What the sources do say is that the IV form contains no cyclodextrin (IDSA 2016). The labels state there are no data in children.

**Sources:** Biagi M et al. AAC 2019, PMID 31527035: https://pubmed.ncbi.nlm.nih.gov/31527035/; IDSA Aspergillosis 2016 (isavuconazole section: 'The intravenous formulation does not contain cyclodextrin'): https://www.idsociety.org/practice-guideline/aspergillosis/; Taiwan inj insert §3.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F

### B22 · Page body (unsupported)

**Was:** ## Notes #4: "**QTc shortening** — advantage in patients on other QT-prolonging medications; contraindicated in familial short QT syndrome"

**Now:** **QTc shortening** (concentration-related; −13.1 ms at 200 mg, −24.6 ms at 600 mg) — contraindicated in familial short QT syndrome; caution with other QT-shortening drugs (e.g., rufinamide). Clinical significance of offsetting QT-prolonging drugs is unclear (IDSA 2016).

**Why:** No source supports calling QT shortening an 'advantage'. IDSA 2016 says 'the clinical significance of this is unclear'. The labels give the size of the effect and warn about other QT-shortening drugs (UK 4.4, Taiwan 5.1).

**Sources:** UK SmPC §4.4 QT shortening: https://www.medicines.org.uk/emc/product/5069/smpc; Taiwan inj insert §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; IDSA Aspergillosis 2016: https://www.idsociety.org/practice-guideline/aspergillosis/

### B23 · Page body (minor)

**Was:** ## Adult Dose: "IV: infuse over ≥1 hour through in-line filter"; table '200 mg (as isavuconazole)'

**Now:** IV: dilute in 250 mL NS or D5W, infuse over ≥1 h through a 0.2–1.2 µm PES in-line filter; do not co-infuse with other IV drugs; flush line with NS/D5W before and after. 200 mg isavuconazole = 372 mg isavuconazonium sulfate (1 vial / 2 × 100 mg caps).

**Why:** The body omits the filter pore size and membrane (PES 0.2–1.2 µm, required by Taiwan 3.1 and UK 4.2) and the conversion to the sulfate salt. These are administration details, not storage or stability, so the owner's rule against storage details does not apply.

**Sources:** Taiwan inj insert §3.1/§3.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027796%E8%99%9F; US FDA label §2.1, §2.5, §2.7: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c

### B24 · Page body (minor)

**Was:** ## Pregnancy / Breastfeeding sections (no contraception statement; no LactMed summary)

**Now:** Pregnancy: add "Effective contraception during treatment and for 28 days after the final dose (US 8.3)". Breastfeeding: add "LactMed: >99% protein bound → milk levels likely low; no published experience — alternative (fluconazole, miconazole) preferred, especially for newborn/preterm infants."

**Why:** This is the same gap as B9 and B10, applied to the page body.

**Sources:** US FDA label §8.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c; LactMed NBK603031: https://www.ncbi.nlm.nih.gov/books/NBK603031/

## Verified correct as written

- Category 'Triazole antifungal (prodrug)': correct per US §11 and TW §10.1 (ATC J02AC05).
- Mechanism 'Prodrug → isavuconazole → inhibits lanosterol 14-α-demethylase → ↓ ergosterol': matches US §12.4 and TW §10.1. The body's 'plasma esterases' matches SmPC/TW §11 (US: butylcholinesterase).
- Adult dose 200 mg (as isavuconazole) q8h × 6 doses, then 200 mg QD, same IV/PO, no food restriction: matches the TW inserts (CRE02 §3.1; CRE03 §3.1), US §2.2 and SmPC §4.2. Body: maintenance starts 12–24 h after the last loading dose, which is correct.
- Renal 'No adjustment needed': matches TW §3.3, US §8.6 and SmPC §4.2 (incl. ESRD). The body claim of no cyclodextrin vehicle matches US §11 excipients (mannitol, sulfuric acid) and IDSA 2016.
- Hepatic Child-Pugh A/B no adjustment: matches all labels. Body Child-Pugh C 'use only if benefit outweighs risk; monitor closely' matches US §8.7 and TW §6.6.
- Breastfeeding 'Discontinue during treatment': matches US §8.2, SmPC §4.6 and TW §6.2. Body 'excreted in animal milk; no human data' matches the labels and LactMed.
- Pregnancy 'Avoid; embryo-fetal toxicity in animals' (no letter category): consistent with US §5.4/§8.1, SmPC §4.6 and TW §6.1. Body 'Avoid unless life-threatening infection' is consistent with TW/SmPC.
- Monitor tags LFT, electrolyte, ECG: LFT is supported by US §5.1 and SmPC §4.4. Electrolyte is plausible (hypokalaemia 14–19%, hypomagnesaemia per US §6.1). ECG is plausible (short-QT contraindication, caution with QT-shortening drugs).
- Side Effects tags LFT↑, QTc shorten, hypokalemia: all supported by US §6.1/§12.2 and SmPC §4.8.
- Drug Interactions column 'Contraindicated with strong CYP3A4 inducers/inhibitors; ↑ tacrolimus/sirolimus ~2×': matches TW §4/§7 and US §4/§12.3 ('approximately 2-fold').
- Body interaction figures: tacrolimus AUC ↑125%, sirolimus ↑84%, cyclosporine ↑29%, MMF (MPA) ↑35%, midazolam ~2× (↑103%) and digoxin ↑ (P-gp) all match SmPC §4.5 Table 2. 'Moderate CYP3A4 inhibitor, mild P-gp inhibitor' matches US §7 and TW §7. The contraindicated inducer list (rifampin, carbamazepine, phenytoin, phenobarbital, St John's wort) matches US §4/TW §4 plus SmPC §4.3.
- Body side effects 'Common (>10%)' list (nausea, vomiting, diarrhea, abdominal pain, headache, ↑LFTs, hypokalemia, peripheral edema, dyspnea, cough): matches US §6.1/Table 3. Anaphylaxis, infusion reactions, SJS (azole class) and the short-QT contraindication match US §5.2–5.3 and §4.
- Body Indications 'Invasive mucormycosis — when amphotericin B is inappropriate or not tolerated': matches TW §2 and SmPC §4.1 (US has no such restriction).
- Body Notes #1 oral bioavailability ~98%: matches US §12.3, SmPC §5.2 and TW §11. #2 half-life ~100–130 h: TW/SmPC 110–115 h, US 130 h. #5 no cyclodextrin: correct. #7 VITAL single-arm trial plus case-control analysis: matches Marty FM, Lancet Infect Dis 2016, PMID 26969258 (verified).
- Body 'Hepatotoxicity (less than voriconazole)': supported by SECURE (hepatobiliary disorders 9% vs 16%, PMID 26684607) and US Table 3 (elevated LFTs 17.1% vs 24.3%).
- Body Coverage Aspergillus species (fumigatus, flavus, niger, terreus) and Mucorales (Rhizopus, Mucor, Lichtheimia): supported by US §12.4/§14.2 and SmPC/TW §10.2/§5.1.
- Body pediatric header '≥1 year of age': correct for the injection (US §1, TW CRE02 §2, SmPC 5069 §4.1).
- Category 'Triazole antifungal (prodrug)': matches US 11/12.4 and UK 5.1 (ATC J02AC05).
- Mechanism: prodrug hydrolysed by esterases (US 12.3: mainly butylcholinesterase) to isavuconazole, which inhibits CYP450-dependent lanosterol 14-α-demethylase and lowers ergosterol. Matches US 12.4, UK 5.1 and Taiwan §10.
- Adult dose numbers: 200 mg isavuconazole q8h × 6 doses (48 h), then 200 mg once daily starting 12–24 h after the last loading dose, same dose IV and PO. Matches US Table 1 (372 mg sulfate), UK 4.2 and both Taiwan inserts.
- Oral bioavailability 98%, so IV and PO are interchangeable and no reload is needed on switching (US 12.3, UK 5.2, Taiwan cap 3.1).
- Capsules can be taken with or without food (high-fat meal: Cmax −9%, AUC +9%; US 12.3).
- Renal 'No adjustment needed', including ESRD. All three labels agree, and isavuconazole is not readily dialysable (US 12.3, UK 5.2/4.9, Taiwan §11).
- Hepatic: Child-Pugh A/B no adjustment; Child-Pugh C not studied, use only if benefit outweighs risk (body table matches US 8.7, UK 4.2 and Taiwan 3.3).
- Pediatric age limit: ≥1 year for IV (US 1, UK inj 4.1, Taiwan inj 2). Max single dose is 372 mg sulfate = 200 mg isavuconazole.
- Side-effect tags LFT↑, QTc shorten and hypokalemia are correct (US 6.1, UK 4.8, US 4 contraindications).
- Body common ADRs ≥10%: nausea, vomiting, diarrhea, abdominal pain, headache, ↑LFTs, hypokalemia, peripheral edema, dyspnea and cough all match US Table 3 / 6.1.
- Body 'Advantage over voriconazole: lower visual disturbances, photosensitivity, hepatotoxicity' is supported by IDSA 2016 ('lower rate of photosensitivity, skin disorders, and hepatobiliary and visual disturbances compared with voriconazole').
- Contraindications: strong CYP3A4 inducers (rifampin, carbamazepine, St John's wort, long-acting barbiturates; UK adds phenytoin and phenobarbital) and strong inhibitors (ketoconazole, high-dose ritonavir 400 mg q12h). Familial short QT syndrome. Matches US 4, Taiwan 4 and UK 4.3.
- DDI magnitudes in the body: tacrolimus AUC +125%, sirolimus +84%, cyclosporine +29%, MMF/MPA +35%, midazolam about 2× (+103%), atorvastatin ↑ (+37%), digoxin ↑ (+25%, P-gp). Match UK SmPC 4.5. 'Moderate CYP3A4 inhibitor, mild P-gp inhibitor' matches US 7.
- Breastfeeding 'Discontinue during treatment' matches US 8.2, UK 4.6 and Taiwan 6.2. Body bullets (present in animal milk, no human data) are correct.
- Pregnancy 'Avoid; embryo-fetal toxicity in animals' agrees with US 8.1/5.4, UK 4.6 and Taiwan 6.1, and uses no FDA letter category.
- Monitor tags LFT, electrolyte and ECG are reasonable. LFT monitoring is required by the label (US 5.1). Hypokalemia and hypomagnesemia are listed ADRs. QT effect and familial short QT contraindication support ECG.
- Body half-life '~100–130 h': US 12.3 gives 130 h; UK 5.2 gives 110–115 h.
- Body 'No routine TDM required' is supported by Desai 2017 (PMID 28923872) and Kaindl 2019 (PMID 30476108), which found no exposure-response relationship.
- Body 'No cyclodextrin vehicle': IDSA 2016 states the IV formulation does not contain cyclodextrin. UK 6.1 excipients are mannitol and sulfuric acid only.
- Body 'Aspergillus spp. incl. A. fumigatus, A. flavus, A. niger, A. terreus': US 12.4 lists fumigatus, flavus and niger; UK 5.1 adds terreus.
- Body mucormycosis restriction 'when amphotericin B is inappropriate' matches the Taiwan and UK labels (the US label has no such restriction; see B13).
- Coverage tag 'Aspergillus' is correct.
- All PMIDs cited were checked with NCBI esummary: 31527035, 42212005, 40946873, 30476108, 28923872, 30289478, 38366368, 27169478, 29544767, 27365388, 31699664.

## Apply log

- Indications column -> ["Aspergillosis"] (Candidiasis removed; mucormycosis moved to Notes)
- Coverage column kept ["Candida","Aspergillus"]; Candida/Mucorales caveats added to Notes
- Side Effects column -> [GI, LFT↑, CNS, hypokalemia, QTc shorten, thrombophlebitis] (merged both proposals; all options already exist)
- Adult dose column: merged the two proposals (dose shown as isavuconazole and as sulfate equivalent, 12–24 h maintenance start, IV PES filter, no reloading on IV↔PO switch)
- Pediatric dose column: merged the two proposals (TW/UK 5.4 mg/kg for <37 kg, adult dose for ≥37 kg, max 200 mg; US sulfate bands; PO restrictions; no pediatric renal/hepatic data)
- Renal dose, HD, CRRT column: merged (ESRD, not removed by HD, CRRT Biagi 2019, ICU TDM Behrens 2026, no pediatric data)
- Hepatic dose column: merged (Child-Pugh A/B AUC values, Child-Pugh C not recommended unless benefit > risk, no pediatric data)
- Pregnancy column: merged (TW/UK restriction, animal data, 28-day contraception per US label)
- Breastfeeding column: merged (label advice to discontinue + LactMed)
- Drug Interactions column: merged (TW/US and UK-only contraindications, ritonavir thresholds, tacrolimus/sirolimus/cyclosporine values, vincristine, bupropion, monitoring list)
- Notes column: merged both proposals (dose equivalence, IV filter, capsule/NG advice, mucormycosis restriction, Candida caveat, t½, short QT contraindication)
- Renewed date set to 2026-10-05 (date only, not datetime)
- Body Indications: aspergillosis grading (ESCMID-ECMM-ERS 2017 / IDSA 2016), mucormycosis label differences + ECMM/MSG 2019, off-label candidiasis caveat (ACTIVE)
- Body Coverage: rewritten into labelled vs not-labelled organisms; 'including azole-resistant strains' deleted; Mucorales MIC/Rhizomucor note; cross-resistance; VITAL dimorphic/Cryptococcus; unsourced lines flagged
- Body Adult Dose: IV dilution/filter/infusion details + 200 mg = 372 mg equivalence
- Body Renal: citations added (HD, CRRT Biagi), 'Preferred azole' reworded to 'Useful option…', cyclodextrin cited to IDSA, pediatric no data
- Body Pediatric: new header (FDA Dec 2023; FDA/TW age limits), table replaced with weight/age bands, Duration line replaced
- Body Side Effects: 'Advantage over voriconazole' line replaced with IDSA/SECURE data
- Body Monitor: LFT frequency and TDM row/target updated (Desai, Kaindl, Mikulska, Tan; IDSA)
- Body Drug Interactions: ketoconazole/ritonavir row updated; UK-only contraindication row added; atorvastatin row fixed; vincristine, lopinavir/ritonavir, bupropion rows added
- Body Pregnancy: contraception bullet added; Breastfeeding: LactMed bullet added
- Body Notes #4 (QTc shortening) and #6 (capsules/NG) replaced
- Body Brief Summary Coverage row updated
- References section appended at end of page listing all cited sources with URLs

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
