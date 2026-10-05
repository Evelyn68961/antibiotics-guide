# New entry: Flusine (Flucytosine)

- **Notion entry:** [Flusine (Flucytosine)](https://app.notion.com/3f0c496dfff1816fb5e1e33bec349622). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** FLU07 (Flusine tab 500 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/flucytosine.json` (plus any Taiwan insert text files)

## Product and sources

FJUH FLU07: 【Y1】Flusine (5-FC) 錠劑 500 mg (弗路欣錠). Flucytosine 500 mg oral tablet, ATC J02AX01, NHI code AC48355100, Taiwan licence 衛署藥製字第048355號 from 台灣東洋藥品工業. Checked on https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=FLU07, which was used only to identify the product. The hospital stocks no IV form. Primary label: TW 仿單 (TFDA, revised 2026-07): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F. US comparator: DailyMed Flucytosine Capsules USP (Major/Lupin), setid 01d874f9-e073-4092-94ad-da361551d4bf, v7, Jan 14 2026; it has the same old-format text as Ancobon. There is no UK SmPC on eMC and no LactMed record (NCBI esearch returned 0). The Notion page was blank apart from Title and Category. No Notion edits were made.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Flusine 500 mg tab (院內 FLU07)<br>TW 仿單 (Flusine): 100–200 mg/kg/day，療程視病情輕重<br>US label: 50–150 mg/kg/day 分 q6h<br>全身性 candidiasis / cryptococcosis 須併用 amphotericin B (單用易產生抗藥性) (US label)<br>• Cryptococcal meningitis induction: 25 mg/kg q6h (100 mg/kg/day) + AmB；IDSA 2010: HIV ≥2 wk, non-HIV non-transplant ≥4 wk；100 mg/kg/day 較 150 mg/kg/day 耐受性佳 (IDSA 2010)；ECMM/ISHAM 2024: L-AmB 3–4 mg/kg/d + 5-FC 25 mg/kg qid ≥2 wk<br>• HIV-CM: L-AmB 10 mg/kg 單劑 + 5-FC 25 mg/kg qid + fluconazole 1200 mg/day ×14 d (ECMM 2024; AMBITION 2022 — 僅於 HIV-CM 有試驗資料)<br>• Polyene 不耐受: fluconazole ≥800 mg/day + 5-FC 100 mg/kg/day 分 4 次 (IDSA 2010)<br>減少噁心: 每次劑量分次於 15 分鐘內服完 (US label)<br>例: 60 kg × 25 mg/kg = 1500 mg (3 tab) q6h

**Why:** The column is empty. TW insert §3.1: '每天每公斤體重服 100-200 毫克，用藥期間視病情之輕重決定之'. US DOSAGE AND ADMINISTRATION: 'usual dosage ... 50 to 150 mg/kg/day administered in divided doses at 6-hour intervals ... Nausea or vomiting may be reduced ... if the capsules are given a few at a time over a 15-minute period ... should be used in combination with amphotericin B'. IDSA 2010 (PMC full text): 'flucytosine (100 mg/kg per day orally in 4 divided doses)'; 'flucytosine dosages of 100 mg/kg per day are better tolerated than dosages of 150 mg/kg per day'. ECMM 2024 Table 2 gives the L-AmB + 5-FC 25 mg/kg four times a day regimens. Under the stocked-product rule the TW range is listed first, with the US range beside it.

**Sources:** TW 仿單 Flusine §3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US FDA label DOSAGE AND ADMINISTRATION / INDICATIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; Perfect JR et al. IDSA cryptococcal guideline 2010, Clin Infect Dis 50:291-322, PMID 20047480 (verified) https://pmc.ncbi.nlm.nih.gov/articles/PMC5826644/; Chang CC et al. ECMM/ISHAM/ASM global cryptococcosis guideline, Lancet Infect Dis 2024;24:e495-e512, PMID 38346436 (verified) https://pmc.ncbi.nlm.nih.gov/articles/PMC11526416/

### A2 · Renal dose, HD, CRRT

TW 仿單 (院內品項): 腎或肝功能不健全者劑量必須降低 (無數值)<br>US label: 無 CrCl 劑量表；BUN/SCr 上升時起始劑量取低限，須 extreme caution 並監測血中濃度 (t½ 2.4–4.8 h；anuric 平均 85 h, 29.9–250 h)<br>IDSA 2010 (無法即時 TDM 時): CrCl 20–40: 標準劑量 50% (e.g. 25 mg/kg q12h)；CrCl 10–20: 25% (e.g. 25 mg/kg q24h)；<10 / dialysis: IDSA 未給數值；文獻表 25 mg/kg q24–48h (Kunka 2015 Table 1) + TDM<br>HD: HD 可快速降低血中濃度 (US label) → HD 後給藥；文獻 20–50 mg/kg after each HD (Kunka 2015 table)；TDM 個案 21 mg/kg post-iHD 或 17 mg/kg daily (thrice-weekly iHD) (Williams 2021)<br>CRRT: 仿單無資料；個案: CVVHDF 25 mg/kg q12h 達治療濃度 (Greene 2020)；CVVH 低置換率 25 mg/kg q24h (Williams 2021)；CVVH 25 mg/kg q12h → 2-h level 120 µg/mL、血小板低下 (Kunka 2015)；continuous hemofiltration 清除量隨 ultrafiltrate flow 增加 (Lau 1995) → 必須 TDM (2-h peak 30–80 µg/mL, 避免 >100)

**Why:** The column is empty. Neither label gives numbers. TW §5.1.1: '腎或肝功能不健全者，劑量必須降低'. US WARNINGS: 'must be given with extreme caution to patients with impaired renal function ... serum concentrations should be monitored'. US D&A: 'If the BUN or the serum creatinine is elevated ... the initial dose should be at the lower level'. US CLIN PHARM: 'average half-life in nephrectomized or anuric patients was 85 hours (range: 29.9 to 250 hours)'. US OVERDOSAGE: 'hemodialysis has been shown to rapidly reduce serum concentrations in anuric patients'. IDSA 2010: '50% of standard dose for creatinine clearance of 20–40 mL/min, 25% of standard dose for creatinine clearance of 10–20 mL/min; see specific adjustment schedules for severe renal dysfunction and dialysis'. The HD and CRRT figures come only from case reports and the Kunka 2015 review table ('Single, supplemental doses of 20–50 mg/kg after dialysis sessions'; 'CRRT: No specific recommendations'). They are labelled as low-level evidence and make TDM mandatory. All PMIDs were checked with esummary.

**Sources:** TW 仿單 §5.1.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US FDA label WARNINGS, DOSAGE AND ADMINISTRATION, CLINICAL PHARMACOLOGY, OVERDOSAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; IDSA cryptococcal 2010, PMID 20047480 https://pmc.ncbi.nlm.nih.gov/articles/PMC5826644/; Kunka ME et al. Case Rep Crit Care 2015:927496, PMID 26246919 (Table 1) https://pmc.ncbi.nlm.nih.gov/articles/PMC4515255/; Greene RA et al. Am J Health Syst Pharm 2020;77:609-613, PMID 32236456 https://pubmed.ncbi.nlm.nih.gov/32236456/; Williams KN et al. Transpl Infect Dis 2021;23:e13575, PMID 33527677 https://pubmed.ncbi.nlm.nih.gov/33527677/; Lau AH, Kronfol NO. Am J Nephrol 1995;15:327-31, PMID 7573192 https://pubmed.ncbi.nlm.nih.gov/7573192/

### A3 · Hepatic dose

TW 仿單 (Flusine): 腎或肝功能不健全者劑量必須降低 (無具體數值)<br>US label: 無肝功能劑量調整建議；治療期間頻繁監測 ALP/AST/ALT — 可發生 acute hepatic injury 含肝壞死 (衰弱病人可致命)

**Why:** The column is empty. TW §5.1.1 requires a dose reduction in hepatic impairment ('腎或肝功能不健全者，劑量必須降低'). The US label has no hepatic dosing, but WARNINGS says 'Frequent monitoring of hepatic function ... is indicated'. Laboratory Tests: 'liver function (alkaline phosphatase, SGOT and SGPT) should be determined at frequent intervals'. ADVERSE REACTIONS: 'acute hepatic injury including hepatic necrosis with possible fatal outcome in debilitated patients'.

**Sources:** TW 仿單 §5.1.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US FDA label WARNINGS / Laboratory Tests / ADVERSE REACTIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### A4 · Pediatric dose

US label: 兒童療效/安全性未系統性研究；新生兒 systemic candidiasis 曾用 25–200 mg/kg/day；新生兒 t½ ~7.4 h (約成人 2 倍)，部分 >100 µg/mL → 需 TDM<br>TW 仿單: 小兒 目前尚無資訊<br>Cryptococcosis (CNS/disseminated) induction: IDSA 2010: AmBd 1 mg/kg/d + 5-FC 100 mg/kg/day 分 4 次 ×2 wk (non-HIV non-transplant 依成人療程)；ECMM 2024: 5-FC 100–150 mg/kg/day 分 4 次 + AmB-D 1 mg/kg/d 或 L-AmB 3–4 mg/kg/d ×2 wk<br>腎功能不全: 減量並監測血中濃度 (US label Warnings)

**Why:** The column is empty. US Pediatric Use: 'efficacy and safety ... have not been systematically studied in pediatric patients. A small number of neonates have been treated with 25 to 200 mg/kg/day'. Pharmacokinetics in Pediatric Patients: 'Some patients had serum levels > 100 mcg/mL, suggesting a need for drug level monitoring'; 'median flucytosine half-life of 7.4 hours ... approximately double that seen in adult patients'. TW §6.4: 目前尚無資訊. IDSA 2010 rec 72: 'AmBd (1 mg/kg per day IV) plus flucytosine (100 mg/kg per day orally in 4 divided doses) for 2 weeks'. ECMM 2024 (paediatric): '5-flucytosine (100–150 mg/kg daily in 4 divided doses) for 2 weeks'.

**Sources:** US FDA label Pediatric Use / Pharmacokinetics in Pediatric Patients https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §6.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; IDSA cryptococcal 2010, PMID 20047480 https://pmc.ncbi.nlm.nih.gov/articles/PMC5826644/; ECMM/ISHAM 2024, PMID 38346436 https://pmc.ncbi.nlm.nih.gov/articles/PMC11526416/

### A5 · Indications

Candidiasis, Meningitis, Endocarditis, UTI, Pneumonia, Sepsis

**Why:** The column is empty, and all six tags exist in the schema. US INDICATIONS: 'Candida: Septicemia, endocarditis and urinary system infections have been effectively treated ... Limited trials in pulmonary infections ... Cryptococcus: Meningitis and pulmonary infections have been treated effectively'. TW §2: '白色黴菌病、黴菌性肺炎及產色黴菌病'. 'Sepsis' is used for the label's 'septicemia'; Bacteremia is a bacterial term, so I avoided it. 'Meningitis' covers cryptococcal meningitis. Cryptococcosis and chromomycosis have no tag and go in Notes (A13).

**Sources:** US FDA label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F

### A6 · Coverage

Candida

**Why:** The column is empty. US MICROBIOLOGY (Activity In Vitro): 'active against most strains of ... Candida albicans, Cryptococcus neoformans'. Candida is the only matching option. Cryptococcus has no option and is recorded in Notes. Aspergillus is not in any label spectrum, so it should not be added.

**Sources:** US FDA label MICROBIOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### A7 · Side Effects

hematologic, anemia, leukopenia, thrombocytopenia, neutropenia, LFT↑, GI, AKI, CNS, neuropathy, ototoxicity, photosensitivity, hypokalemia, dysglycemia, SJS/TEN

**Why:** The column is empty, and all tags exist in the schema. US ADVERSE REACTIONS lists the following. Hematologic: 'Anemia, agranulocytosis, aplastic anemia ... leukopenia, pancytopenia, thrombocytopenia, and fatal cases of bone marrow aplasia'. GI/hepatic: 'Nausea, emesis, abdominal pain, diarrhea ... hepatic necrosis ... increased hepatic enzymes'. GU: 'Azotemia, creatinine and BUN elevation, crystalluria, renal failure' (AKI). Neurologic/psychiatric: 'Ataxia, hearing loss, headache, paresthesia, parkinsonism, peripheral neuropathy ... convulsions; Confusion, hallucinations, psychosis' (CNS, ototoxicity, neuropathy). Dermatologic: 'photosensitivity'. Misc: 'hypoglycemia, hypokalemia ... Lyell's syndrome' (dysglycemia, hypokalemia, SJS/TEN). US WARNINGS adds neutropenia with DPD deficiency. TW §5.5 lists 高劑量可能發生噁心、嘔吐. Cardiac toxicity has no tag and goes in Notes.

**Sources:** US FDA label ADVERSE REACTIONS / WARNINGS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §5.5 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F

### A8 · Monitor

CBC, renal, LFT, electrolyte

**Why:** The column is empty. The US boxed WARNING says: 'Close monitoring of hematologic, renal and hepatic status of all patients is essential'. General: 'Before therapy ... electrolytes (because of hypokalemia) and the hematologic and renal status of the patient should be determined'. Laboratory Tests: 'blood concentrations and kidney function should be monitored ... leukocyte and thrombocyte count ... alkaline phosphatase, SGOT and SGPT ... at frequent intervals'. Serum-level TDM has no tag and goes in Notes.

**Sources:** US FDA label boxed WARNING / PRECAUTIONS General / Laboratory Tests https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### A9 · Mechanism

Fluorinated pyrimidine (5-fluorocytosine) antimetabolite: 經 cytosine permease 進入黴菌細胞 → cytosine deaminase 轉成 5-FU → 錯誤嵌入 fungal RNA (抑制蛋白質合成)，並經抑制 thymidylate synthetase 干擾 DNA 合成 / taken up via cytosine permease, deaminated to 5-FU → RNA miscoding + thymidylate synthase inhibition<br>抗藥: uptake/代謝酵素突變或 pyrimidine 合成增加；單用延長治療易產生抗藥性 → 與 amphotericin B 併用 (無交叉抗藥、in vitro synergy)

**Why:** The column is empty. Text is from US MICROBIOLOGY 'Mechanism of Action', 'Drug Resistance' ('Resistance to flucytosine has been shown to develop during monotherapy after prolonged exposure') and 'Drug Combination' ('lack of cross-resistance and reported synergistic activity'). DESCRIPTION: '5-fluorocytosine, a fluorinated pyrimidine'. TW §10.1 says 目前尚無資訊.

**Sources:** US FDA label DESCRIPTION / MICROBIOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### A10 · Drug Interactions

Brivudine / sorivudine: 禁止併用 (抑制 DPD → fluoropyrimidine 毒性，可致命)；停用 brivudine/sorivudine 後須間隔 ≥4 週才可開始 flucytosine；flucytosine 最後一劑 24 h 後才可開始 brivudine/sorivudine (TW 仿單 §7)<br>Cytarabine (cytosine arabinoside): 競爭性抑制，使 flucytosine 抗黴菌活性失效 (US label)<br>降低 GFR 之藥物: 延長 flucytosine t½ (US label)；尤其 amphotericin B 等腎毒性藥 → ↑ 濃度與毒性 → 監測濃度/腎功能 (Vermes 2000)<br>骨髓抑制藥物或放射治療 (現用或曾用): ↑ 骨髓毒性 (US label Warnings)<br>Lab: SCr 以 Jaffé 法測定 (flucytosine 不干擾 Jaffé 法) (US label)

**Why:** The column is empty. TW §7.1: '本藥品不可與 sorivudine 及 brivudine 併用 ... 必須至少要有 4 星期的等待期。在使用完本藥品最後一劑後 24 小時可以開始'. US Drug Interactions: 'Cytosine arabinoside ... inactivate the antifungal activity ... by competitive inhibition. Drugs which impair glomerular filtration may prolong the biological half-life'. US WARNINGS: patients 'being treated with radiation or drugs which depress bone marrow' are more prone to marrow depression. US Drug/Laboratory Test Interactions covers the Jaffé reaction.

**Sources:** TW 仿單 §7.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US FDA label Drug Interactions / WARNINGS / Drug-Laboratory Test Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### A11 · Pregnancy

No FDA letter category (舊格式 narrative label)。動物: 大鼠致畸 (脊椎融合, 40 mg/kg/d；高劑量唇顎裂、小下頷)，大鼠可通過胎盤；無人類對照研究 → 僅在效益大於胎兒風險時使用 (US label)<br>TW 仿單: 目前尚無資訊<br>ECMM/ISHAM 2024: 懷孕避免使用 5-FC，尤其第一孕期 (DII)；第二、三孕期需個別評估 risk–benefit；cryptococcosis 以 amphotericin B 為主

**Why:** The column is empty. US Pregnancy: 'teratogenic (vertebral fusions) in the rat at doses of 40 mg/kg/day ... cleft lip and palate and micrognathia ... crosses the placental barrier ... no adequate and well-controlled studies in pregnant women ... only if the potential benefit justifies the potential risk'. TW §6.1: 目前尚無資訊. ECMM 2024: '(DII) Avoid use of 5-flucytosine and fluconazole in pregnancy, particularly in the first trimester; their use in the second and third trimester requires careful individualised risk-benefit assessment.' ECMM and IDSA 2010 both still say 'Category C'. Per the ground rules, that must not be written as current.

**Sources:** US FDA label Pregnancy https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; ECMM/ISHAM 2024 Pregnancy section, PMID 38346436 https://pmc.ncbi.nlm.nih.gov/articles/PMC11526416/

### A12 · Breastfeeding

LactMed: 無 flucytosine 資料<br>US label: 不知是否分泌至乳汁；因哺乳嬰兒可能發生嚴重不良反應，應考量母親用藥重要性，決定停止哺乳或停藥<br>TW 仿單: 目前尚無資訊

**Why:** The column is empty. US Nursing Mothers: 'It is not known whether this drug is excreted in human milk ... a decision should be made whether to discontinue nursing or to discontinue the drug'. TW §6.2: 目前尚無資訊. LactMed: NCBI esearch 'flucytosine AND lactmed[book]' returned 0 records.

**Sources:** US FDA label Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §6.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; LactMed search via NCBI E-utilities (0 results) https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=books&term=flucytosine%20AND%20lactmed%5Bbook%5D

### A13 · Notes

<span color="blue">`PO`</span> 院內: Flusine 500 mg tab (弗路欣錠, FLU07)；無 IV 劑型<br>⚠️ US Boxed warning: 腎功能不全者 extreme caution；所有病人須密切監測血液、腎、肝功能<br>禁忌: 過敏；已知 DPD 完全缺乏 (5-FU 代謝物毒性: mucositis、diarrhea、neutropenia、neurotoxicity；疑似毒性可測 DPD 活性並考慮停藥) (US/TW)<br>不可單用治療全身性感染 (治療中易產生抗藥性) → 併用 amphotericin B (synergy)<br>TDM: 治療 3–5 天後測 2-h post-dose level，目標 30–80 µg/mL，避免 >100 µg/mL (IDSA 2010)；持續 >100 µg/mL ↑ GI/血液/肝毒性 (US label)；實務上多數濃度不在目標範圍 (Pasqualotto 2007)<br>開始前: electrolytes (hypokalemia)、CBC、腎功能 (US label)<br>PK: F 78–89%、蛋白結合 2.9–4%、>90% 原形經尿排除；易通過 BBB，CSF 濃度具臨床意義 (US label)<br>其他適應症/菌種 (無對應 tag): Cryptococcus (C. neoformans; meningitis、pulmonary)；TW 仿單另列產色黴菌病 (chromomycosis)<br>罕見嚴重 AE (無對應 tag): cardiac arrest、myocardial toxicity、respiratory arrest、crystalluria、parkinsonism (US label)

**Why:** The column is empty. These notes carry the label content that has no multi-select option (Cryptococcus, chromomycosis, cardiac toxicity, TDM), plus the boxed warning and DPD contraindication. Quotes: US boxed WARNING; CONTRAINDICATIONS ('known complete dihydropyrimidine dehydrogenase (DPD) enzyme deficiency'); TW §4.2. IDSA 2010: 'Serum flucytosine levels should be measured after 3–5 days of therapy, with a target 2-h postdose level of 30–80 μg/mL; flucytosine levels >100 μg/mL should be avoided'. US OVERDOSAGE: 'Prolonged serum concentrations in excess of 100 mcg/mL may be associated with an increased incidence of toxicity'. US CLIN PHARM: '78% to 89% absorption ... 2.9% to 4% ... protein-bound ... readily penetrates the blood-brain barrier'. TW §2 lists 產色黴菌病. Pasqualotto 2007 abstract: 'only 20.5% of levels were in the expected therapeutic range'. Storage details are deliberately left out.

**Sources:** US FDA label boxed WARNING / CONTRAINDICATIONS / WARNINGS / CLINICAL PHARMACOLOGY / ADVERSE REACTIONS / OVERDOSAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §2, §4, §5.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; IDSA cryptococcal 2010, PMID 20047480 https://pmc.ncbi.nlm.nih.gov/articles/PMC5826644/; Pasqualotto AC et al. J Antimicrob Chemother 2007;59:791-3, PMID 17339279 https://pubmed.ncbi.nlm.nih.gov/17339279/

### A14 · Page body

# Flusine (Flucytosine)<br>Oral fluorinated pyrimidine antifungal (5-FC). Hospital stocks Flusine 500 mg tab (弗路欣錠, FLU07); no IV form.<br>---<br>## Mechanism of action<br>Taken up by cytosine permease → deaminated by fungal cytosine deaminase to 5-FU → incorporated into fungal RNA (↓ protein synthesis) and inhibits thymidylate synthetase (↓ DNA synthesis). Resistance develops readily on monotherapy → combine with amphotericin B (synergy, no cross-resistance).<br>---<br>## Spectrum / Indications<br>US label: serious infections by susceptible Candida (septicemia, endocarditis, UTI, pulmonary—limited data) and Cryptococcus (meningitis, pulmonary). TW 仿單: 白色黴菌病、黴菌性肺炎、產色黴菌病 (chromomycosis). Must be combined with amphotericin B for systemic candidiasis/cryptococcosis.<br>---<br>## Dosing<br>### Adult<br>TW 仿單: 100–200 mg/kg/day; US: 50–150 mg/kg/day divided q6h. Cryptococcal meningitis induction: 25 mg/kg q6h + AmB (IDSA 2010; ECMM 2024). HIV-CM: L-AmB 10 mg/kg single dose + 5-FC 25 mg/kg qid + fluconazole 1200 mg/day × 14 d (ECMM 2024; AMBITION).<br>### Pediatric<br>Not systematically studied (US); neonates 25–200 mg/kg/day; crypto induction 100 mg/kg/day (IDSA 2010) or 100–150 mg/kg/day (ECMM 2024) in 4 doses; TDM.<br>### Renal dose, HD, CRRT<br>Table: CrCl 20–40 → 50% (25 mg/kg q12h); 10–20 → 25% (25 mg/kg q24h) (IDSA 2010); <10 → no IDSA number; literature 25 mg/kg q24–48h (Kunka 2015 Table 1) + TDM. HD: dose after HD, 20–50 mg/kg (literature). CRRT: case reports 25 mg/kg q12–24h, TDM mandatory.<br>### Hepatic<br>TW: reduce dose (no numbers); US: none specified; monitor LFT frequently.<br>---<br>## Adverse effects & monitoring<br>Boxed warning; marrow suppression (can be fatal), hepatotoxicity incl. necrosis, GI, renal, CNS, cardiac; DPD deficiency. Monitor CBC, renal, LFT, electrolytes, serum levels (2-h peak 30–80 µg/mL, avoid >100).<br>---<br>## Drug interactions<br>Brivudine/sorivudine (contraindicated, 4-wk washout; TW); cytarabine; GFR-reducing drugs esp. amphotericin B; marrow suppressants/radiation.<br>---<br>## Pregnancy & lactation<br>Narrative US label (rat teratogen; benefit > risk only); ECMM 2024 avoid esp. 1st trimester. Lactation: unknown; LactMed none; US: discontinue nursing or drug.<br>---<br>## References<br>- TW 仿單 Flusine 衛署藥製字第048355號 (rev. 2026-07) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F<br>- US FDA label Flucytosine Capsules USP, DailyMed setid 01d874f9-e073-4092-94ad-da361551d4bf https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf<br>- Perfect JR et al. IDSA cryptococcal disease 2010. Clin Infect Dis 2010;50:291-322. PMID 20047480<br>- Chang CC et al. ECMM/ISHAM/ASM cryptococcosis guideline. Lancet Infect Dis 2024;24:e495-e512. PMID 38346436<br>- Jarvis JN et al. AMBITION. N Engl J Med 2022;386:1109-20. PMID 35320642<br>- Vermes A et al. J Antimicrob Chemother 2000;46:171-9. PMID 10933638<br>- Kunka ME et al. Case Rep Crit Care 2015:927496. PMID 26246919<br>- Greene RA et al. Am J Health Syst Pharm 2020;77:609-13. PMID 32236456<br>- Williams KN et al. Transpl Infect Dis 2021;23:e13575. PMID 33527677<br>- Lau AH, Kronfol NO. Am J Nephrol 1995;15:327-31. PMID 7573192<br>- Pasqualotto AC et al. J Antimicrob Chemother 2007;59:791-3. PMID 17339279

**Why:** The page body is blank. Existing entries such as Diflucan (Fluconazole) have a structured body with Mechanism, Spectrum, Indications, Dosing (Adult/Pediatric/Renal/Hepatic), AE & monitoring, Interactions, Pregnancy & lactation and References. The proposed body follows that layout and uses only the sources cited in A1–A13. No UK SmPC or LactMed record exists, so neither is cited.

**Sources:** Style reference: Notion Diflucan (Fluconazole) page https://app.notion.com/277c496dfff180b38ac0c3ef99542cd5; US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F

### B1 · Adult dose

<span color="blue">`PO`</span> only (院內 Flusine 500 mg 錠, scored). ⚠ 全身性感染不可單用 — combine with amphotericin B (or fluconazole); resistance emerges on monotherapy (US label; IDSA)<br>• <span color="green">`TW Flusine 仿單`</span> (院內品項): 100–200 mg/kg/day PO, divided; 療程視病情<br>• US FDA label: 50–150 mg/kg/day divided q6h<br>• Cryptococcal meningitis / disseminated, induction: 25 mg/kg q6h (100 mg/kg/day; better tolerated than 150 mg/kg/day, IDSA 2010) + L-AmB 3–4 mg/kg/day (or AmB-d 0.7–1 mg/kg/day). Duration: HIV / transplant ≥2 wk (IDSA 2010; ECMM/ISHAM 2024). Non-HIV non-transplant: IDSA 2010 ≥4 wk; ECMM 2024 minimum 2 wk (4–6 wk for C. gattii CNS). HIV, resource-limited: L-AmB 10 mg/kg single dose + 5-FC 100 mg/kg/day + fluconazole 1200 mg/day × 14 d (AMBITION 2022; ECMM 2024). Polyene-intolerant: fluconazole ≥800 mg/day (1200 favoured) + 5-FC 100 mg/kg/day × 6 wk (IDSA 2010)<br>• Candida (IDSA 2016), 25 mg/kg q6h: with L-AmB for CNS candidiasis, native-valve endocarditis, or fluconazole/voriconazole-resistant endophthalmitis. Fluconazole-resistant C. glabrata cystitis: 5-FC alone × 7–10 d. C. glabrata pyelonephritis: AmB-d ± 5-FC, or 5-FC alone × 2 wk (weak)<br>• Tablet dosing example: 60 kg × 25 mg/kg = 1500 mg (3 tab) q6h<br>• Nausea: give a few tablets at a time over ~15 min (US label, capsules)

**Why:** Every column is empty. The stocked product's own insert gives 100–200 mg/kg/day, which differs from the US 50–150 mg/kg/day, so both are shown. Neither label gives indication-specific regimens or durations, so those come from the IDSA, ECMM/ISHAM and AMBITION sources. Every PMID was checked with esummary.

**Sources:** TW 仿單 弗路欣錠 衛署藥製字第048355號 §3.1 '每天每公斤體重服 100-200 毫克' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US label DOSAGE AND ADMINISTRATION '50 to 150 mg/kg/day administered in divided doses at 6-hour intervals… given a few at a time over a 15-minute period'; INDICATIONS 'should be used in combination with amphotericin B… because of the emergence of resistance' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; Perfect JR et al. IDSA cryptococcal 2010, Clin Infect Dis 50:291-322, PMID 20047480 (flucytosine 100 mg/kg/day in 4 divided doses; Tables 2–4) https://pubmed.ncbi.nlm.nih.gov/20047480/; Chang CC et al. ECMM/ISHAM/ASM global cryptococcosis guideline, Lancet Infect Dis 2024;24:e495-e512, PMID 38346436 https://pubmed.ncbi.nlm.nih.gov/38346436/; Jarvis JN et al. AMBITION-cm, NEJM 2022;386:1109-20, PMID 35320642 https://pubmed.ncbi.nlm.nih.gov/35320642/; Pappas PG et al. IDSA candidiasis 2016, PMID 26679628 (cystitis, pyelonephritis, CNS, endocarditis, chorioretinitis recommendations) https://www.idsociety.org/practice-guideline/candidiasis/

### B2 · Renal dose, HD, CRRT

No label gives a CrCl table.<br><span color="green">`TW Flusine 仿單`</span> (院內品項): 腎功能不健全者劑量必須降低 (no numbers)<br>US FDA: use with extreme caution (boxed). If BUN/SCr is raised, start at the lower end of 50–150 mg/kg/day and monitor serum levels. t½ in anuria averages 85 h (29.9–250 h)<br>IDSA crypto 2010 (when levels are unavailable; standard dose 25 mg/kg q6h):<br>• CrCl 20–40: 50% of standard dose (e.g. 25 mg/kg q12h)<br>• CrCl 10–20: 25% (e.g. 25 mg/kg q24h)<br>• CrCl <10 (no RRT): no guideline dose → TDM-guided<br>HD: HD rapidly lowers serum levels (US label) → give dose after each HD. TDM case report: 21 mg/kg after each iHD, or 17 mg/kg daily with thrice-weekly iHD (Williams 2021)<br>CRRT (no label dose; case reports only): CVVHDF 25 mg/kg q12h gave therapeutic levels (Greene 2020). CVVH at low replacement rate: 25 mg/kg q24h (Williams 2021). Haemofiltration clearance ≈ 51–98% of ultrafiltrate rate, depending on the membrane (Ittel 1987; Lau 1995) → rises with effluent rate. Conservative CVVH dosing was still supratherapeutic (peak 120 µg/mL, thrombocytopenia) in one case (Kunka 2015) → TDM is required (2-h peak 30–80 µg/mL, avoid >100)

**Why:** Neither label gives numbers. The insert of the stocked product says only 'reduce'. IDSA 2010 is the only guideline I found with a CrCl-based reduction. HD and CRRT dosing rests on case reports, which I cite as such. All PMIDs were verified.

**Sources:** TW 仿單 §5.1.1 '腎或肝功能不健全者，劑量必須降低'; §6.7 腎功能不全 '目前尚無資訊' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US label boxed WARNING; DOSAGE 'If the BUN or the serum creatinine is elevated… the initial dose should be at the lower level'; CLINICAL PHARMACOLOGY 'average half-life in nephrectomized or anuric patients was 85 hours (range: 29.9 to 250 hours)'; OVERDOSAGE 'hemodialysis has been shown to rapidly reduce serum concentrations' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; IDSA crypto 2010 PMID 20047480: 'dose adjustments… according to creatinine clearance… (eg, 50% of standard dose for creatinine clearance of 20–40 mL/min, 25% of standard dose for creatinine clearance of 10–20 mL/min)' https://pubmed.ncbi.nlm.nih.gov/20047480/; Williams KN et al. Transpl Infect Dis 2021;23:e13575, PMID 33527677 https://pubmed.ncbi.nlm.nih.gov/33527677/; Greene RA et al. Am J Health Syst Pharm 2020;77:609-13, PMID 32236456 https://pubmed.ncbi.nlm.nih.gov/32236456/; Kunka ME et al. Case Rep Crit Care 2015:927496, PMID 26246919 https://pubmed.ncbi.nlm.nih.gov/26246919/; Ittel TH et al. Chemotherapy 1987;33:77-84, PMID 3568800 https://pubmed.ncbi.nlm.nih.gov/3568800/; Lau AH, Kronfol NO. Am J Nephrol 1995;15:327-31, PMID 7573192 https://pubmed.ncbi.nlm.nih.gov/7573192/

### B3 · Hepatic dose

No numeric adjustment in any label. <span color="green">`TW Flusine 仿單`</span>: 肝功能不健全者劑量必須降低. US: no hepatic dose given; monitor liver function (ALP, AST, ALT) frequently. Acute hepatic injury, including hepatic necrosis that can be fatal in debilitated patients, is reported. Hepatotoxicity is concentration-related (prolonged levels >100 µg/mL)

**Why:** The TW insert of the stocked product requires a dose reduction in hepatic impairment. The hospital site's 'no adjustment' is therefore wrong for this product (see the hospital-database issues).

**Sources:** TW 仿單 §5.1.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US label Laboratory Tests 'liver function (alkaline phosphatase, SGOT and SGPT) should be determined at frequent intervals'; ADVERSE REACTIONS 'acute hepatic injury including hepatic necrosis with possible fatal outcome in debilitated patients'; OVERDOSAGE '>100 mcg/mL… hepatic (hepatitis)' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### B4 · Pediatric dose

US label: efficacy and safety not systematically studied. Neonates have been treated with 25–200 mg/kg/day for systemic candidiasis. Levels vary widely and some exceeded 100 µg/mL → TDM. Infant t½ ≈ 7.4 h (about 2× adult)<br>Cryptococcal CNS/disseminated disease (ECMM/ISHAM 2024 paediatrics): 100–150 mg/kg/day in 4 divided doses + AmB-d 1 mg/kg/day or L-AmB 3–4 mg/kg/day × 2 wk<br>Neonatal CNS candidiasis (IDSA 2016): add 25 mg/kg q6h only as salvage after no response to AmB (weak; poorly tolerated, GI effects)<br>VLBW infants accumulate drug (immature GFR) → avoid use without serum-level monitoring (IDSA 2016)<br>TW 仿單 §6.4 小兒: 目前尚無資訊

**Why:** The column is empty. The US label covers this only in narrative and PK sections; the guidelines supply the actual doses.

**Sources:** US label Pediatric Use and Pharmacokinetics in Pediatric Patients https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; ECMM/ISHAM 2024 Paediatrics recommendation, PMID 38346436 https://pubmed.ncbi.nlm.nih.gov/38346436/; IDSA candidiasis 2016 (CNS infections in neonates; Pediatric Dosing), PMID 26679628 https://www.idsociety.org/practice-guideline/candidiasis/

### B5 · Indications

Candidiasis, Meningitis, Endocarditis, UTI, Pneumonia, Sepsis

**Why:** FDA-approved indications: Candida septicemia, endocarditis, urinary system and pulmonary infections, and Cryptococcus meningitis and pulmonary infections. 'Septicemia' maps to the Sepsis tag; Bacteremia is the alternative if the owner tags candidemia that way. TW 仿單 adds 白色黴菌病、黴菌性肺炎 (Pneumonia) and 產色黴菌病 (chromomycosis), which has no tag and goes in Notes. All proposed tags exist in the schema.

**Sources:** US label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F

### B6 · Coverage

Candida

**Why:** The label lists Candida albicans and Cryptococcus neoformans. There is no Cryptococcus option, so it goes in Notes (as in the Fluconazole entry). IDSA notes activity against most Candida except C. krusei. Do not tag Aspergillus: no label lists it.

**Sources:** US label MICROBIOLOGY Activity In Vitro https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; IDSA candidiasis 2016 'broad antifungal activity against most Candida species, with the exception of C. krusei' PMID 26679628 https://www.idsociety.org/practice-guideline/candidiasis/

### B7 · Side Effects

hematologic, anemia, leukopenia, neutropenia, thrombocytopenia, GI, LFT↑, nephrotoxicity, CNS, neuropathy, ototoxicity, photosensitivity, hypokalemia, dysglycemia, SJS/TEN

**Why:** Mapped from US ADVERSE REACTIONS and WARNINGS: anemia, leukopenia, thrombocytopenia, agranulocytosis, aplastic anemia and fatal marrow aplasia; DPD-related neutropenia; nausea, emesis and diarrhea; hepatic enzymes, jaundice and necrosis; azotemia, crystalluria and renal failure; confusion, hallucinations, psychosis and convulsions; peripheral neuropathy; hearing loss; photosensitivity; hypokalemia; hypoglycemia; Lyell's syndrome (TEN). Cardiac toxicity (cardiac arrest, ventricular dysfunction) has no tag, so it goes in Notes. All tags exist in the schema.

**Sources:** US label ADVERSE REACTIONS; WARNINGS (DPD: 'mucositis, diarrhea, neutropenia, and neurotoxicity') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §5.5 '高劑量可能發生噁心、嘔吐' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F

### B8 · Monitor

CBC, LFT, renal, electrolyte

**Why:** The label requires baseline electrolytes (hypokalemia) and haematologic and renal status, then frequent leukocyte and platelet counts, LFTs, kidney function and blood concentrations. Serum-level TDM has no tag, so it goes in Notes.

**Sources:** US label boxed WARNING; PRECAUTIONS General and Laboratory Tests https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### B9 · Mechanism

Fluorinated pyrimidine (5-fluorocytosine) prodrug. Taken up via fungal cytosine permease and converted by cytosine deaminase to 5-FU. 5-FU metabolites (1) are falsely incorporated into fungal RNA → ↓ protein synthesis, and (2) inhibit thymidylate synthetase → ↓ DNA synthesis. Synergy with AmB (no cross-resistance). Resistance (develops quickly on monotherapy): mutation of uptake or metabolic enzymes, or ↑ pyrimidine synthesis

**Why:** Taken from the label's MICROBIOLOGY, Drug Resistance and Drug Combination sections. TW 仿單 §10.1 says 目前尚無資訊.

**Sources:** US label MICROBIOLOGY Mechanism of Action; Drug Resistance; Drug Combination https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf

### B10 · Drug Interactions

禁忌併用: brivudine / sorivudine (inhibit DPD → potentially fatal fluoropyrimidine toxicity). Wait ≥4 wk after stopping them before starting 5-FC; they may start 24 h after the last 5-FC dose (TW 仿單)<br>Cytarabine (cytosine arabinoside): inactivates 5-FC antifungal activity by competitive inhibition (US)<br>Drugs that ↓ GFR, especially amphotericin B and other nephrotoxins → prolonged 5-FC t½ and ↑ levels → monitor levels/CBC (US; Vermes 2000)<br>Myelosuppressive drugs or radiation (current or past) → ↑ risk of marrow depression (US Warnings)<br>Lab: measure serum creatinine by the Jaffé method, which 5-FC does not interfere with (US)

**Why:** Both labels contribute interactions. The brivudine/sorivudine contraindication appears only in the TW insert of the stocked product.

**Sources:** TW 仿單 §7.1 Brivudine及其類似物(sorivudine) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; US label Drug Interactions; Drug/Laboratory Test Interactions; WARNINGS (bone marrow) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; Vermes A et al. J Antimicrob Chemother 2000;46:171-9, PMID 10933638 ('most important drug interaction… nephrotoxic drugs, especially amphotericin B') https://pubmed.ncbi.nlm.nih.gov/10933638/

### B11 · Pregnancy

No FDA letter category (narrative label). Teratogenic in rats (vertebral fusions at 40 mg/kg/day ≈ 0.051× human dose; cleft lip/palate and micrognathia at higher doses); crosses the placenta in rats. No adequate human studies. Use only if benefit justifies fetal risk (US). TW 仿單: 目前尚無資訊. ECMM/ISHAM 2024: avoid, particularly in the 1st trimester; in the 2nd/3rd trimester only after individual risk–benefit review. IDSA candidiasis 2016: contraindicated in pregnancy (animal fetal abnormalities). 5-FU is a metabolite

**Why:** Do not write 'Category C'. IDSA 2010 and the hospital site still use the retired letter.

**Sources:** US label Pregnancy (Teratogenic Effects) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; ECMM/ISHAM 2024 '(DII) Avoid use of 5-flucytosine and fluconazole in pregnancy, particularly in the first trimester' PMID 38346436 https://pubmed.ncbi.nlm.nih.gov/38346436/; IDSA candidiasis 2016 'Flucytosine is contraindicated during pregnancy because of fetal abnormalities observed in animals' PMID 26679628 https://www.idsociety.org/practice-guideline/candidiasis/

### B12 · Breastfeeding

LactMed: no record for flucytosine. US label: not known whether excreted in milk; because of potential serious adverse reactions in the infant, discontinue nursing or discontinue the drug, weighing importance to the mother. TW 仿單 §6.2: 目前尚無資訊

**Why:** The US Nursing Mothers section is the only source. I checked eMC (no UK SmPC), and the brief's LactMed search returned 0.

**Sources:** US label Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §6.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F

### B13 · Notes

<span color="blue">`PO`</span> only — 院內 Flusine 500 mg 錠 (scored, 無 IV). F 78–89%, peak ≤2 h, >90% excreted unchanged in urine. Good CSF penetration (US)<br>⚠ US Boxed warning: extreme caution in renal impairment; monitor haematologic, renal and hepatic status closely in all patients<br>⚠ 全身性感染不可單用: combine with AmB (or fluconazole) — resistance on monotherapy (exception: fluconazole-resistant C. glabrata UTI, IDSA 2016)<br>TDM: 2-h post-dose peak 30–80 µg/mL, measured after 3–5 d; avoid >100 µg/mL (IDSA 2010). Prolonged >100 → GI, marrow and hepatic toxicity (US). Candida endophthalmitis: check levels weekly; CNS: frequent levels (IDSA 2016). 無法 TDM 時: CBC + 依 CrCl 調整<br>Spectrum: Candida (not C. krusei) and Cryptococcus neoformans (no Cryptococcus tag). TW 仿單 also lists 產色黴菌病 (chromomycosis), which is not in the US label<br>完全 DPD 缺乏 = 禁忌 (US/TW). Partial DPD deficiency → 5-FU toxicity (mucositis, diarrhea, neutropenia, neurotoxicity) → consider DPD testing and stopping 5-FC<br>Baseline electrolytes (hypokalemia), CBC and renal function. Measure creatinine by Jaffé<br>Rare cardiac toxicity (cardiac arrest, ventricular dysfunction) (US ADR)<br>TW: 1–2 g/day usually tolerated; higher doses → N/V. Give a few tablets at a time over 15 min<br>HD rapidly removes 5-FC (overdose)<br>UK: no licensed product on eMC

**Why:** Holds the items that have no multi-select option (Cryptococcus, chromomycosis, TDM, cardiac toxicity) plus key safety points, in the bilingual style of the Fluconazole entry. Storage details are left out on purpose.

**Sources:** US label CLINICAL PHARMACOLOGY, MICROBIOLOGY, WARNINGS, OVERDOSAGE, ADVERSE REACTIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 §1.4, §2, §4.2, §5.1.2, §5.5 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC048355%E8%99%9F; IDSA crypto 2010 'target 2-h postdose level of 30–80 μg/mL; flucytosine levels >100 μg/mL should be avoided' PMID 20047480 https://pubmed.ncbi.nlm.nih.gov/20047480/; IDSA candidiasis 2016 ('flucytosine serum levels must be monitored weekly'; 'Peak concentrations <100 mg/L') PMID 26679628 https://www.idsociety.org/practice-guideline/candidiasis/; eMC search 'No search results for flucytosine' https://www.medicines.org.uk/emc/search?q=flucytosine

### B14 · Page body

Mirror the Fluconazole page layout. # Flusine (Flucytosine) → one-line summary ('Oral fluorinated pyrimidine antifungal; hospital stocks 弗路欣錠 Flusine 500 mg tab; always combined with AmB/fluconazole') → ## Mechanism of action → ## Spectrum (Candida except C. krusei; Cryptococcus; TW: chromomycosis) → ## Indications (FDA: Candida septicemia/endocarditis/UTI/pulmonary; Cryptococcus meningitis/pulmonary; TW: 白色黴菌病、黴菌性肺炎、產色黴菌病) → ## Dosing (Adult table by indication per B1; Pediatric per B4; Renal/HD/CRRT table: TW insert 'reduce' \| US 'lower initial dose + levels' \| IDSA 2010 % reductions, plus HD/CRRT case-report rows per B2; Hepatic per B3) → ## Adverse effects & monitoring (boxed warning; TDM targets) → ## Drug interactions table (brivudine/sorivudine CONTRAINDICATED; cytarabine; nephrotoxins/AmB; myelosuppressants; Jaffé creatinine) → ## Pregnancy & lactation → ## References: DailyMed setid 01d874f9-e073-4092-94ad-da361551d4bf; TW 仿單 衛署藥製字第048355號 (2026年7月); IDSA crypto 2010 PMID 20047480; IDSA candidiasis 2016 PMID 26679628; ECMM/ISHAM 2024 PMID 38346436; AMBITION PMID 35320642; Vermes 2000 PMID 10933638; Williams 2021 PMID 33527677; Greene 2020 PMID 32236456; Kunka 2015 PMID 26246919; Ittel 1987 PMID 3568800; Lau 1995 PMID 7573192

**Why:** Existing entries (for example Diflucan) carry a structured body with a References list. This new page is blank.

**Sources:** Notion Diflucan (Fluconazole) page used as a style template https://app.notion.com/p/277c496dfff180b38ac0c3ef99542cd5; Sources as cited in B1–B13

## Apply log

- Adult dose (merged both reviewers: TW 100–200 / US 50–150 mg/kg/day, crypto induction + durations, HIV-CM AMBITION, polyene-intolerant, IDSA 2016 Candida uses, tablet example, nausea tip)
- Renal dose, HD, CRRT (TW reduce, US lower start + TDM, IDSA 2010 CrCl 20–40/10–20 table, <10 literature, HD and CRRT case reports, TDM target)
- Hepatic dose (TW reduce, US monitor LFT, hepatic necrosis, concentration-related)
- Pediatric dose (US label neonates, TW no info, IDSA 2010/ECMM 2024 crypto, IDSA 2016 neonatal CNS salvage, VLBW caution)
- Indications = Candidiasis, Meningitis, Endocarditis, UTI, Pneumonia, Sepsis
- Coverage = Candida
- Side Effects = hematologic, anemia, leukopenia, neutropenia, thrombocytopenia, GI, LFT↑, AKI, nephrotoxicity, CNS, neuropathy, ototoxicity, photosensitivity, hypokalemia, dysglycemia, SJS/TEN
- Monitor = CBC, renal, LFT, electrolyte
- Mechanism (bilingual, 5-FU RNA miscoding + TS inhibition, resistance, AmB synergy)
- Drug Interactions (brivudine/sorivudine contraindicated with washout, cytarabine, GFR-reducing/AmB, myelosuppressants/radiation, Jaffé creatinine)
- Pregnancy (no letter category, rat teratogenicity, TW no info, ECMM 2024 avoid esp. 1st trimester, IDSA 2016 contraindicated)
- Breastfeeding (LactMed none, US label discontinue nursing or drug, TW no info)
- Notes (PO only stock, boxed warning, no monotherapy, DPD, TDM, baseline labs, PK, untagged Cryptococcus/chromomycosis/C. krusei, rare cardiac AEs, TW tolerability, UK no eMC product)
- Page body: Fluconazole-style layout with Mechanism, Spectrum, Indications, Dosing (Adult/Pediatric/Renal/Hepatic), AE & monitoring, Drug interactions, Pregnancy & lactation, plus References section listing all 15 cited sources with URLs
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
