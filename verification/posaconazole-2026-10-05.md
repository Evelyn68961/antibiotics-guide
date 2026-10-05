# New entry: Posanol (Posaconazole)

- **Notion entry:** [Posanol (Posaconazole)](https://app.notion.com/3f0c496dfff181268747e268e32630e0). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** POS01 (Posanol tab 100 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/posaconazole.json` (plus any Taiwan insert text files)

## Product and sources

FJUH POS01 = Posanol 錠劑 100 mg (波賽特錠劑), posaconazole 100 mg gastro-resistant (delayed-release) film-coated tablet. NHI BC26376100, ATC J02AC04, TW licence 衛部藥輸字第026376號 (MSD Taiwan; mfr N.V. Organon, NL). Licence confirmed: TFDA insert page product name and code DHA05202637608 match. POS02 does not exist on the hospital site, and no IV, oral suspension or PowderMix posaconazole is stocked, so tablet is the only form to cover. Governing label: TW insert (updated 114/01/23, HA-000027487-TW-20241119). Also checked: US NOXAFIL label (setid b073b082…, v56, Mar 2026), UK SmPC Noxafil 100 mg gastro-resistant tablets (rev. 16 Jul 2026), LactMed NBK609661 (rev. 2024-11-15). Notion page 3f0c496dfff181268747e268e32630e0 is a new entry. Only Title and Category are filled; every other column and the page body are empty. User note: the relayed request ("you do task 2,3,5") was handled as this reviewer-A audit. Nothing was edited in Notion or on disk.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Posanol 100 mg gastro-resistant (DR) 錠 (院內唯一劑型)<br>**Loading dose:** 300 mg (3 錠) BID on Day 1<br>**Maintenance dose:** 300 mg QD from Day 2<br>• Invasive aspergillosis 治療: total 6–12 weeks (US/UK)。TW 仿單: 限成人二線用藥 (amphotericin B/itraconazole/voriconazole 治療 ≥7 天無效或不耐受)，療程依疾病嚴重度、免疫抑制恢復及臨床反應<br>• Prophylaxis: 療程依嗜中性球/免疫抑制恢復；AML/MDS: 預估 neutropenia 前數天開始，ANC \>500/mm³ 後再持續 7 天 (TW/UK)<br>• Refractory/intolerant IFI (UK: fusariosis, chromoblastomycosis/mycetoma, coccidioidomycosis): 同劑量<br>可與或不與食物併服；整粒吞服，勿剝半/壓碎/咀嚼<br>錠劑與口服懸液劑不可互換 / not interchangeable with oral suspension

**Why:** The column is empty. All three labels give the same tablet regimen: 300 mg BID on day 1, then 300 mg QD. The TW insert restricts treatment to second-line use in adults. US/UK give a 6–12-week course for invasive aspergillosis. TW/UK give the AML/MDS prophylaxis start/stop rule.

**Sources:** TW 仿單 §2 適應症, §3.1.2 表1, §3.1.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; US NOXAFIL label §2.1, §2.2 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.1, §4.2 Table 1 — https://www.medicines.org.uk/emc/product/5388/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> 錠劑: 不需調整 / no adjustment (TW 仿單 3.3/11; UK SmPC 4.2; US 8.6: eGFR ≥20 不需調整)<br>eGFR/CrCl \<20: 暴露量變異大 (AUC CV 96%) → 密切監測突破性黴菌感染 / monitor for breakthrough infection (TW 11, US 8.6)<br>HD: 不會經血液透析移除，不需補充劑量 / not removed by HD (TW 9, US 10)<br>CRRT: 仿單無資料。\>98% protein bound → 預期清除少；單一病例報告: CRRT 期間與停止後 trough/peak 相近 (Chen 2024 PMID 38743901)；建議標準劑量 + TDM<br>(Noxafil IV 院內未進: eGFR \<50 時 SBECD 蓄積，應避免 — US 8.6)

**Why:** The column is empty. The TW insert (stocked product) says no adjustment and adds monitoring when CrCl <20. The US label puts the cut-off at eGFR 20; the UK says no adjustment. Haemodialysis does not remove the drug. CRRT is not covered by any label: the only PubMed evidence is case reports. Chen 2024 (oral/IV, verified via esummary) found stable concentrations, and the Sime 2018 and Morris 2015 case reports were IV-only. The IV SBECD warning is included for context only.

**Sources:** TW 仿單 §3.3, §9 過量, §11.6 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; US label §5.6, §8.6, §10, §12.3 Renal Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.2 Renal impairment — https://www.medicines.org.uk/emc/product/5388/smpc; Chen Y et al. Altern Ther Health Med 2024, PMID 38743901 — https://pubmed.ncbi.nlm.nih.gov/38743901/

### A3 · Hepatic dose

Child-Pugh A/B/C: 不需調整 (US 8.7; UK 4.2 — Child-Pugh C 暴露量↑，需謹慎)<br>TW 仿單: 資料有限，無法提供調整建議；t½ 隨肝功能減退延長 (輕/中/重 26.6/35.3/46.1 h vs 正常 22.1 h)；嚴重肝功能不全慎用<br>治療前及治療中監測 LFT/bilirubin；出現可歸因於 posaconazole 的肝病徵象應考慮停藥 (US 5.5, TW 5.1)

**Why:** The column is empty. US/UK say no adjustment for any Child-Pugh class. The TW insert gives no recommendation because data are limited, and urges caution in severe impairment. Hepatotoxicity monitoring is a warning in every label.

**Sources:** US label §5.5, §8.7, §12.3 Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.2 Hepatic impairment — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §3.3, §5.1 肝毒性, §11.6 肝功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A4 · Pediatric dose

TW 仿單 (院內 Posanol 錠): \<13 歲安全性/療效未確立；13–17 歲 (預防) 同成人劑量 300 mg BID D1 → 300 mg QD<br>US/UK: ≥2 歲且 \>40 kg: 同成人劑量 (IA 治療及預防)；≤40 kg 錠劑無法達到建議劑量 → 不建議 (需 IV 6 mg/kg 或 PowderMix，院內未進)<br>\<2 歲: 安全性/療效未確立

**Why:** The column is empty. Age limits differ: TW sets ≥13 yr for the stocked tablet; US/UK set ≥2 yr and >40 kg. TW adult-only wording for invasive aspergillosis treatment means paediatric treatment is off-label in Taiwan.

**Sources:** TW 仿單 §2, §3.3 小兒科病人, §11.6 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; US label §1.1–1.2, §2.3 Table 2, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.1, §4.2 Paediatric population — https://www.medicines.org.uk/emc/product/5388/smpc

### A5 · Indications

Aspergillosis, Candidiasis

**Why:** The column is empty. Both options already exist in the schema. 'Aspergillosis' fits US §1.1, UK §4.1 and TW §2(1): treatment of invasive aspergillosis, plus prophylaxis. 'Candidiasis' covers prophylaxis of invasive Candida infections with the tablet (US §1.2; UK/TW prophylaxis of IFI). OPC treatment is approved for the oral suspension only, which is not stocked, so this must be clarified in Notes (see A12). Other approved indications have no tag: fusariosis, chromoblastomycosis/mycetoma, coccidioidomycosis (UK). Do not use the FN tag: prophylaxis in prolonged neutropenia is not febrile-neutropenia treatment.

**Sources:** US label §1.1–1.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A6 · Coverage

Candida, Aspergillus

**Why:** The column is empty. US §12.4 lists Aspergillus spp. and Candida spp. as active in vitro and in clinical infections. UK §5.1 and TW §10.2 add Fusarium, Coccidioides, Fonsecaea and Mucorales (Rhizomucor/Mucor/Rhizopus), but say clinical data on Mucorales are too limited. None of these has a Coverage option, so they go in Notes and none is invented.

**Sources:** US label §12.4 Antimicrobial Activity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §5.1 Microbiology — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §10.2.2 微生物學 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A7 · Side Effects

GI, LFT↑, hypokalemia, QTc prolong, CNS, neutropenia, photosensitivity

**Why:** The column is empty, and all proposed options exist in the schema. Support for each tag: nausea/diarrhoea are the most common tablet ADRs (≥5%; UK 4.8, TW 8.1). Raised LFTs, cholestasis and hepatic failure: US 5.5. Hypokalaemia 28% in the IA trial (US Table 7). QT prolongation/TdP: US 5.2, TW 5.1. Headache/dizziness/somnolence/paraesthesia are common (UK 4.8, TW Table 2). Neutropenia is common (UK 4.8, TW Table 2). Pseudoaldosteronism (US 5.4) has no tag and goes in Notes.

**Sources:** US label §5.2, §5.4, §5.5, §6.1 Table 7, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.8 Table 2 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §8.1 表2, §8.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A8 · Monitor

LFT, electrolyte, ECG

**Why:** The column is empty. The labels require: LFTs at the start of and during therapy (US 5.5, TW 5.1); K/Mg/Ca monitored and corrected before and during therapy, plus BP/K for pseudoaldosteronism (US 5.3/5.4, TW 5.1); caution in proarrhythmic conditions because of QTc (US 5.2, TW 5.1). The 'renal' tag is not needed for the tablet; SCr monitoring applies only to the IV form, which is not stocked. Calcineurin-inhibitor and sirolimus trough monitoring belongs in Drug Interactions.

**Sources:** US label §5.2, §5.3, §5.4, §5.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; TW 仿單 §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A9 · Mechanism

Triazole: 抑制 fungal CYP450-dependent lanosterol 14α-demethylase (CYP51) → ↓ergosterol 合成、methylated sterol 前驅物累積 → 細胞膜結構/功能受損 / inhibits CYP51 → ↓ergosterol → fungal membrane disruption<br>抗藥: CYP51 target substitutions；C. albicans/C. glabrata 可與其他 azole cross-resistance<br>PK (錠劑): F ≈54%，t½ 26–31 h，\>98% protein bound (albumin)，主要經 UGT glucuronidation，77% 經糞便排除 (66% 原型)，尿液 14% (原型 \<0.2%)

**Why:** The column is empty. The mechanism comes from US 12.4, UK 5.1 and TW 10.1. Resistance comes from UK 5.1 and US 12.4. The PK numbers are from the TW tablet insert §11; US 12.3 reports 71%/13% from an oral-suspension study.

**Sources:** US label §12.3, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §10.1, §11.2–11.5 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A10 · Drug Interactions

Strong CYP3A4 inhibitor；本身經 UGT glucuronidation 代謝、P-gp 受質 (非 CYP 代謝)<br>**禁忌併用:** pimozide, quinidine (QT/TdP)；UK/TW 另列 terfenadine, astemizole, cisapride (UK 加 halofantrine)；CYP3A4 statins (simvastatin, lovastatin, atorvastatin — rhabdomyolysis)；ergot alkaloids；venetoclax 於 CLL/SLL 起始/ramp-up 期 (US/UK；AML 各期需減量並監測)<br>**Sirolimus (各仿單不同):** US 禁忌 (↑~9×)；UK 應避免，若無法避免須大幅減量並非常頻繁監測 trough；TW 仿單: 減至約 1/10 並頻繁監測 trough<br>**需調整/監測:** tacrolimus 減至約 1/3、cyclosporine 減至約 3/4，併用中及停藥時頻繁監測 trough (腎毒性/腦白質病)；midazolam (AUC \>5×)/triazolam/alprazolam → 監測鎮靜、考慮減量；CYP3A4 CCB 監測/減量；digoxin 監測濃度；ritonavir/atazanavir 監測毒性；glipizide 監測血糖；vinca alkaloids (vincristine 神經毒性) → 僅於無替代抗黴菌藥時併用<br>**↓ posaconazole (避免，除非效益\>風險；監測突破性感染):** rifabutin (亦 ↑rifabutin → 監測 CBC/uveitis)、rifampicin、phenytoin (亦 ↑phenytoin → 監測濃度)、efavirenz、fosamprenavir；UK 另列 flucloxacillin, carbamazepine, phenobarbital, primidone<br>錠劑不受 antacids/H2RA/PPI/metoclopramide 影響 (口服懸液劑才受影響)

**Why:** The column is empty. The labels disagree on sirolimus: the US contraindicates it, while the TW insert (stocked product) allows it with a dose cut to about 1/10 and trough monitoring. Both positions are shown. The contraindication lists also differ by label and are combined above. The calcineurin-inhibitor dose fractions are the same in US Table 17 and TW §7.

**Sources:** US label §4, §5.1, §5.7, §5.8, §5.11, §7.1–7.3 Tables 15–17 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.3, §4.5 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §4 禁忌, §5.1, §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A11 · Pregnancy

No FDA letter category (PLLR)。依動物資料可能造成胎兒傷害：大鼠骨骼畸形 (頭顱畸形、缺肋; ≥1.4× 臨床暴露)、兔吸收胎↑；人類資料不足 / may cause fetal harm; human data insufficient<br>TW 仿單/UK SmPC: 懷孕期間不可使用，除非對母親的效益明顯大於對胎兒的風險 / avoid unless benefit clearly outweighs risk<br>具生育能力女性治療期間須有效避孕 (UK)

**Why:** The column is empty. The US label uses the PLLR narrative, so no letter category may be written. TW and UK both say not to use unless the benefit clearly outweighs the risk; UK adds contraception.

**Sources:** US label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A12 · Notes

<span color="blue">`PO`</span> 院內僅 Posanol 100 mg gastro-resistant (DR) 錠；IV、口服懸液劑、PowderMix 未進<br>• 錠劑與口服懸液劑不可互換 (劑量/頻次/食物/暴露量不同)；錠劑須整粒吞服<br>• TW 適應症較 US/UK 窄: (1) 成人侵入性麴菌病二線治療 (amphotericin B/itraconazole/voriconazole ≥7 天無效或不耐受)；(2) ≥13 歲高危險病人預防 (HSCT+GVHD 接受高劑量免疫抑制；AML/高危 MDS 誘導化療致長期 neutropenia)。US/UK: IA 一線治療 (PN069 vs voriconazole)<br>• Candidiasis tag = 侵入性 Candida 預防；錠劑不適用 OPC 治療 (OPC 僅口服懸液劑)<br>• 其他核准適應症 (UK, 無 tag): fusariosis (amphotericin B 無效/不耐受)、chromoblastomycosis/mycetoma (itraconazole 無效/不耐受)、coccidioidomycosis (refractory/intolerant)<br>• Mucorales: in vitro 有活性 (UK 5.1, TW 10.2)，臨床資料有限、非核准適應症 (no Coverage tag)<br>• Pseudoaldosteronism (高血壓、低血鉀): 監測血壓/K⁺ (US 5.4)<br>• 嚴重腹瀉/嘔吐或體重 \>120 kg: 暴露量可能↓ → 監測突破性感染 (US 5.10/8.10, TW 11.6)<br>• TDM: IDSA 2016 建議 posaconazole TDM (steady state)；prophylaxis trough target ≥0.7 mg/L (Ashok 2026 PMID 41413784)

**Why:** The column is empty. The Notes collect label context that has no tag or column: the single stocked form, non-interchangeability, the narrower TW indications, Mucorales and other UK indications, pseudoaldosteronism and breakthrough-infection risk. Sources for the TDM line: the IDSA 2016 aspergillosis guideline (PMID 27365388, verified) recommends TDM for posaconazole. The 0.7 mg/L prophylaxis threshold comes from Ashok 2026 (PMID 41413784, verified esummary/abstract). I could not read the full text of IDSA 2016 or BSMM 2014 (PMID 24379304, PMC XML blocked by the publisher), so no treatment-target number is proposed. Not included: chronic cavitary pulmonary aspergillosis, which appears on the hospital site. It is off-label, and the CPA guideline full text (PMID 26699723) could not be checked.

**Sources:** US label §2.1, §5.4, §5.10, §8.10, §14.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.1, §4.2, §5.1 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §2, §3.1.3, §10.2.2, §11.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; IDSA Aspergillosis guideline 2016, Patterson TF, PMID 27365388 — https://pubmed.ncbi.nlm.nih.gov/27365388/; Ashok A et al. Ther Drug Monit 2026, PMID 41413784 — https://pubmed.ncbi.nlm.nih.gov/41413784/

### A13 · Breastfeeding

TW 仿單: 哺乳期間不可使用，除非對母親效益明確大於對嬰兒風險；UK SmPC: 開始治療時須停止哺乳 (會分泌至大鼠乳汁；人類未研究)<br>US label: 無人類資料；權衡哺乳益處與母親用藥需求及嬰兒風險<br>LactMed (rev. 2024-11-15): 無臨床資料；\>98% protein bound → 乳汁量可能低，但可優先選替代藥 (fluconazole, miconazole)，尤其新生兒/早產兒

**Why:** The column is empty. The three labels and LactMed differ in strictness, so all are summarised in the same style as the isavuconazole and voriconazole entries.

**Sources:** LactMed Posaconazole NBK609661 (Summary of Use; Alternate Drugs) — https://www.ncbi.nlm.nih.gov/books/NBK609661/; US label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### A14 · Renewed date

2026-10-05

**Why:** Sibling azole entries (Vfend, Diflucan, Cresemba) that were checked today have Renewed date 2026-10-05. Set the same date once the columns are filled.

**Sources:** Notion data source collection://20dc496d-fff1-8035-b493-000b15564193 (sibling rows Vfend/Diflucan/Cresemba)

### B1 · Adult dose

<span color="blue">`PO`</span> Posanol DR tab 100 mg: **Loading:** 300 mg (3 tabs) BID on day 1 → **Maintenance:** 300 mg QD from day 2. Same dose for IA treatment and for prophylaxis.<br>IA treatment: total duration 6–12 weeks (US/UK). TW 仿單 (second-line IA): duration depends on disease severity, recovery from immunosuppression and clinical response.<br>Prophylaxis: continue until recovery from neutropenia/immunosuppression. AML/MDS: start a few days before expected neutropenia and continue 7 days after ANC >500/mm³ (TW 仿單/UK SmPC).<br>Take with or without food. 整粒吞服，勿剝半、壓碎或咀嚼 / swallow whole.<br>錠劑與口服懸液劑不可互換 / not interchangeable with oral suspension (different dose).<br>本院僅有錠劑 (POS01)；IV and oral suspension not stocked.

**Why:** New entry with an empty column. All three labels give the same tablet regimen. The TW insert of the stocked product adds the AML/MDS prophylaxis timing. Re-verified: 300 mg BID ×1 day then 300 mg QD, 6–12 weeks for IA, no food restriction, swallow whole, not interchangeable with the suspension.

**Sources:** US FDA label NOXAFIL §2.1, §2.2 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC Noxafil 100 mg gastro-resistant tablets §4.2 Table 1 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 Posanol 衛部藥輸字第026376號 §3.1.1–3.1.3 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> tab: 不需調整 / no adjustment (TW 仿單 §3.3, UK SmPC §4.2; US: eGFR ≥20).<br>CrCl/eGFR <20: exposure highly variable (CV 96%) → 密切監測突破性黴菌感染 (TW §11, US §8.6); consider TDM.<br>HD: not removed by haemodialysis; 不需補充劑量.<br>CRRT: no label data. >98% protein bound with large Vd, so little removal is expected. Case reports: trough levels did not differ during vs after CRRT (Chen 2024, PMID 38743901). IV 300 mg in a hypoalbuminaemic CVVHDF patient may give low exposure for IA (Sime 2018, PMID 30031203) → standard dose + TDM.<br>(IV, not stocked: US says avoid if eGFR <50 because the SBECD excipient accumulates.)

**Why:** The TW insert (stocked product) is preferred: it gives no adjustment and, in §11, says to monitor CrCl <20 closely for breakthrough infection; this matches US §8.6. All three labels say it is not dialysable. CRRT is covered by no label, so two PubMed case reports (PMIDs verified with esummary) support standard dosing plus TDM. The IV SBECD caveat is kept only as context.

**Sources:** TW 仿單 §3.3 and §11.6 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; US FDA label §8.6 Renal Impairment, §5.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.2 Renal impairment, §5.2 Renal impairment ('not removed by haemodialysis'), §4.9 — https://www.medicines.org.uk/emc/product/5388/smpc; Chen Y et al. Altern Ther Health Med 2024 (PMID 38743901) — https://pubmed.ncbi.nlm.nih.gov/38743901/; Sime FB et al. Int J Antimicrob Agents 2018;52:506-9 (PMID 30031203) — https://pubmed.ncbi.nlm.nih.gov/30031203/

### B3 · Hepatic dose

Child-Pugh A–C: no dose adjustment (US §8.7; UK §4.2, use with caution: AUC ↑1.3–1.6×, t½ ~27 → ~43 h).<br>TW 仿單: 資料有限，無法提供劑量調整建議；t½ 隨肝功能下降延長 (26.6/35.3/46.1 h vs 22.1 h).<br>Check LFT at baseline and during therapy；出現肝病徵象時考慮停藥 / consider discontinuation if liver disease develops.

**Why:** The labels differ in wording. US and UK say no adjustment; TW says no recommendation can be made. Both versions are shown, with the stocked product's (TW) wording given in full.

**Sources:** US FDA label §8.7, §5.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.2, §4.4, §5.2 Hepatic impairment — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §3.3, §5.1 肝毒性, §11.6 肝功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B4 · Pediatric dose

<span color="blue">`PO`</span> tab:<br>TW 仿單 (院內 Posanol): 13–17 y 僅限預防 (IA 治療限成人): 同成人劑量 300 mg BID on day 1 → 300 mg QD；\<13 y 安全性及療效未確立<br>US/UK: ≥2 y and \>40 kg (IA treatment and prophylaxis): same as adult dose, 300 mg BID on day 1 → 300 mg QD<br>≤40 kg: tablets cannot deliver the recommended dose, not recommended (US/UK use PowderMix DR suspension or IV 6 mg/kg, max 300 mg; 本院未進藥)<br>\<2 y: safety/efficacy not established

**Why:** Empty column. The age and weight limits differ between TW and US/UK, so both are given.

**Sources:** US FDA label §1.1–1.2, §2.3 Table 2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.1, §4.2 Paediatric population — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §2 (2), §3.3 用於小兒科病人 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B5 · Indications

Aspergillosis, Candidiasis

**Why:** Both options already exist in the schema. Aspergillosis: IA treatment (US §1.1, UK §4.1; TW second-line only). Candidiasis: prophylaxis of invasive Candida infection (US §1.2). Treatment of OPC is approved only for the oral suspension (not stocked), and TW says the tablet is not for OPC; record this in Notes. Do not use FN: prophylaxis during neutropenia is not FN treatment. Mucormycosis and the UK refractory indications have no tags and go in Notes.

**Sources:** US FDA label §1.1–1.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B6 · Coverage

Candida, Aspergillus

**Why:** US §12.4 lists Aspergillus spp. and Candida spp. as active in vitro and in clinical infections. UK §5.1 and TW §10.2 also list Fusarium, Mucorales (Rhizomucor/Mucor/Rhizopus), Coccidioides, Fonsecaea, Histoplasma, Cryptococcus and others. There are no tags for these, so they go in Notes and none are invented.

**Sources:** US FDA label §12.4 Antimicrobial Activity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §5.1 Microbiology — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §10.2.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B7 · Side Effects

GI, LFT↑, hypokalemia, QTc prolong, CNS, hematologic, photosensitivity

**Why:** Tablet ADRs ≥5% are nausea and diarrhoea (UK §4.8, TW §8.1). US common ADRs are diarrhoea, nausea, fever, vomiting, headache, cough and hypokalaemia. Hepatotoxicity (US §5.5, UK §4.4). QTc/TdP (US §5.2). Headache, dizziness and somnolence are common (UK §4.8 → CNS). Neutropenia is common, other cytopenias uncommon (→ hematologic). Photosensitivity (UK §4.4/4.8). All tags exist in the schema. Pseudoaldosteronism and hypertension have no tag and go in Notes.

**Sources:** US FDA label §5.2–5.5, §6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.4, §4.8 Table 2 — https://www.medicines.org.uk/emc/product/5388/smpc

### B8 · Monitor

LFT, electrolyte, ECG

**Why:** Check LFTs before and during therapy (US §5.5, UK §4.4, TW §5.1). Monitor and correct K/Mg/Ca before and during therapy (US §5.3, UK §4.4, TW §5.1). QTc and proarrhythmic conditions (US §5.2) → ECG. Renal monitoring is needed only for the IV (not stocked), so 'renal' is not proposed. BP for pseudoaldosteronism and TDM go in Notes because no tag exists.

**Sources:** US FDA label §5.2, §5.3, §5.4, §5.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.4 — https://www.medicines.org.uk/emc/product/5388/smpc

### B9 · Mechanism

Triazole antifungal: 抑制 fungal CYP450-dependent lanosterol 14α-demethylase (CYP51) → ↓ergosterol 合成、methylated sterol precursors 累積 → 細胞膜結構/功能受損 / inhibits lanosterol 14α-demethylase → ergosterol depletion → fungal membrane disruption<br>抗藥機轉: CYP51 (target) substitutions；azole 間可能 cross-resistance (C. albicans/C. glabrata isolates)<br>EUCAST breakpoints: C. albicans/tropicalis/parapsilosis/dubliniensis S ≤0.06, R >0.06 mg/L；Aspergillus 無 clinical breakpoint (ECOFF 0.5 mg/L; A. terreus 0.25)

**Why:** Empty column. The mechanism, resistance and breakpoint text is taken directly from the label microbiology sections.

**Sources:** US FDA label §12.4 Mechanism of Action, Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §5.1 Mechanism of action, Resistance, Breakpoints, ECOFF — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B10 · Drug Interactions

Strong CYP3A4 inhibitor；本身經 UGT glucuronidation，為 P-gp substrate<br>**禁忌併用:** ergot alkaloids；CYP3A4-metabolised statins (simvastatin, lovastatin, atorvastatin)；pimozide, quinidine；UK/TW also terfenadine, astemizole, cisapride (UK: halofantrine)；venetoclax in CLL/SLL during initiation/ramp-up (US/UK)<br>**Sirolimus (labels differ):** US contraindicated (~9× ↑)；UK avoid, and if unavoidable greatly reduce the sirolimus dose with very frequent troughs；TW 仿單: reduce sirolimus to about 1/10 and monitor troughs often<br>**Calcineurin inhibitors:** cyclosporine ↓ to ~3/4, tacrolimus ↓ to ~1/3 when starting posaconazole；monitor troughs during therapy and after stopping posaconazole<br>**避免 (↓posa):** rifabutin, rifampicin, phenytoin, efavirenz；UK also flucloxacillin, carbamazepine, phenobarbital, primidone；fosamprenavir → monitor for breakthrough infection<br>Tablet: antacids, H2RA, PPI and metoclopramide have no clinically relevant effect (UK/TW)；acid suppressants affect only the suspension<br>注意: vinca alkaloids (neurotoxicity: use only when no other antifungal is available)；midazolam, triazolam, alprazolam (prolonged sedation)；CYP3A4 CCBs (monitor, consider dose reduction)；digoxin (monitor levels)；glipizide/sulfonylureas (hypoglycaemia)；HIV PIs (atazanavir ↑)；rifabutin ↑ (CBC, uveitis)；venetoclax in AML (reduce dose)

**Why:** Empty column. Sirolimus is the important point where the labels disagree: US contraindicates it, UK says avoid, and the TW insert for the stocked product allows it with a ~1/10 dose. The hospital site lists sirolimus as contraindicated, as in the US label. All three labels give the same cyclosporine and tacrolimus fractions. The tablet-specific lack of acid-suppressant interaction was verified in UK §4.5 and TW §7.

**Sources:** US FDA label §4, §5.1, §5.7, §5.8, §5.11, §7.1–7.2 Tables 15–17 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.3, §4.4, §4.5 (Sirolimus, Ciclosporin, Tacrolimus, Flucloxacillin) — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §4 禁忌, §5.1, §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B11 · Pregnancy

No FDA letter category (PLLR)。動物: 大鼠骨骼畸形 (cranial malformations, missing ribs) at ≥1.4× clinical exposure；兔 resorptions ↑ at ≥3×；人類資料不足 / may cause fetal harm, human data insufficient<br>TW 仿單/UK SmPC: 懷孕期間不可使用，除非對母親的效益明確大於對胎兒的風險<br>UK: 具生育能力女性治療期間須有效避孕 / effective contraception

**Why:** Empty column. The FDA retired letter categories, so the current risk-summary wording is used (the hospital site still shows 'C').

**Sources:** US FDA label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F

### B12 · Breastfeeding

UK SmPC: 開始治療時必須停止哺乳 / stop breastfeeding on initiation<br>TW 仿單: 哺乳期間不可使用，除非對母親效益明確大於對嬰兒風險 (excreted into rat milk; human not studied)<br>US label: 無資料；權衡哺乳益處與母親用藥需求及嬰兒風險<br>LactMed: 無臨床資料；蛋白結合 >98% → 乳汁量可能低，但可優先選替代藥 (fluconazole, miconazole)，尤其新生兒/早產兒

**Why:** Empty column. Per the rules, LactMed is used for breastfeeding and the label positions are shown alongside it.

**Sources:** LactMed Posaconazole NBK609661 (rev. 2024-11-15) — https://www.ncbi.nlm.nih.gov/books/NBK609661/; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/5388/smpc; TW 仿單 §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84

### B13 · Notes

• TW 核准適應症較窄: (1) 對 amphotericin B/itraconazole/voriconazole 無效 (≥7 天) 或不能耐受之**成人** IA 第二線用藥；(2) ≥13 歲高危險病人預防 (HSCT+GVHD 高劑量免疫抑制；AML/高危 MDS 誘導化療) — US/UK 核准 first-line IA (Aspergillosis Treatment Study/PN069 vs voriconazole)<br>• 其他 UK 核准適應症 (無對應 tag): refractory/intolerant fusariosis, chromoblastomycosis, mycetoma, coccidioidomycosis<br>• Mucormycosis (無 tag; off-label): ECMM/MSG 2019: posaconazole DR tab/IV moderate recommendation as first-line alternative, strong as salvage (PMID 31699664)；UK §5.1: in vitro Mucor/Rhizopus activity but limited clinical data<br>• Chronic cavitary pulmonary aspergillosis (off-label): IDSA 2016 places posaconazole as a useful third-line agent after itraconazole/voriconazole；no label dose<br>• Tablet not for OPC treatment (only the suspension is; 本院未進藥)<br>• TDM: IDSA 2016 recommends TDM once at steady state for azole IA treatment, prolonged prophylaxis or interacting drugs (data mainly from the suspension; IDSA notes benefit with DR tablet/IV not yet established)；steady state ~day 6 with tablets (UK §5.2)；prophylaxis target trough ≥0.7 mg/L (Ashok 2026 PMID 41413784)；TW 仿單: 300 mg QD gave Cavg 500–2500 ng/mL in 81%<br>• Weight \>120 kg: lower exposure → monitor for breakthrough infection (US §8.10, TW §11.6)；severe diarrhoea/vomiting → monitor for breakthrough (US §5.10)<br>• Pseudoaldosteronism (hypertension, hypokalaemia): monitor BP and K (US §5.4)；adrenal insufficiency rare (UK §4.8)<br>• Photosensitivity: 避免日曬、防曬 (UK §4.4)<br>• t½ 26–31 h (tablet)；mostly faecal excretion (77%)；protein binding \>98%

**Why:** Empty column. These are the clinically useful items that have no tag or are off-label, each cited. The hospital site's CPA dosing is not copied. CPA is mentioned only through the IDSA guideline's placement of posaconazole, with no dose because no label or verified source gives one. The ≥1 mg/L treatment trough is commonly cited (BSMM 2014, PMID 24379304), but the full text could not be retrieved (PMC/EBI blocked), so it is marked expert consensus. Flag it for the owner or drop it if a verifiable citation is needed.

**Sources:** TW 仿單 §2, §5.1, §11.6 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F; UK SmPC §4.1, §4.4, §4.8, §5.1, §5.2 — https://www.medicines.org.uk/emc/product/5388/smpc; US FDA label §1, §5.4, §5.10, §8.10, §14.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84; IDSA Aspergillosis guideline 2016 (Patterson TF, PMID 27365388): TDM recommendation; CCPA 'posaconazole is a useful third-line agent' — https://www.idsociety.org/practice-guideline/aspergillosis/; ECMM/MSG ERC global mucormycosis guideline 2019 (Cornely OA, PMID 31699664) — https://pubmed.ncbi.nlm.nih.gov/31699664/; Ashok A et al. Ther Drug Monit 2026;48:628-35 (PMID 41413784; subtherapeutic <0.7 mg/L) — https://pubmed.ncbi.nlm.nih.gov/41413784/; ESCMID-ECMM-ERS Aspergillus guideline 2017 executive summary (PMID 29544767) — https://pubmed.ncbi.nlm.nih.gov/29544767/

### B14 · Page body

## References<br>- US FDA label — NOXAFIL (posaconazole) injection/DR tablets/oral suspension/PowderMix, Merck Sharp & Dohme, DailyMed setid b073b082-7b57-4423-8c06-4fd4263d6f84, v56, 2026-03-06 (§1, 2, 4, 5, 6, 7, 8.1–8.10, 12.3, 12.4): [DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84)<br>- UK SmPC — Noxafil 100 mg gastro-resistant tablets, eMC product 5388 (rev. 2026-07-16): [medicines.org.uk/emc/product/5388/smpc](https://www.medicines.org.uk/emc/product/5388/smpc)<br>- Taiwan 仿單 — 波賽特錠劑100毫克 Posanol，衛部藥輸字第026376號 (TFDA, updated 2025-01-23, accessed 2026-10-05): [mcp.fda.gov.tw](https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026376%E8%99%9F)<br>- LactMed — Posaconazole, NBK609661 (rev. 2024-11-15): [ncbi.nlm.nih.gov/books/NBK609661](https://www.ncbi.nlm.nih.gov/books/NBK609661/)<br>- IDSA Aspergillosis guideline 2016 (Patterson TF et al. Clin Infect Dis 2016;63:e1–e60, PMID 27365388): [idsociety.org](https://www.idsociety.org/practice-guideline/aspergillosis/)<br>- ESCMID-ECMM-ERS Aspergillus guideline 2017, executive summary (PMID 29544767): [PubMed](https://pubmed.ncbi.nlm.nih.gov/29544767/)<br>- Cornely OA et al. Global mucormycosis guideline, Lancet Infect Dis 2019;19:e405–21 (PMID 31699664): [PubMed](https://pubmed.ncbi.nlm.nih.gov/31699664/)<br>- Ashok A et al. Ther Drug Monit 2026;48:628–35 (PMID 41413784): [PubMed](https://pubmed.ncbi.nlm.nih.gov/41413784/)<br>- Chen Y et al. Altern Ther Health Med 2024 (PMID 38743901): [PubMed](https://pubmed.ncbi.nlm.nih.gov/38743901/)<br>- Sime FB et al. Int J Antimicrob Agents 2018;52:506–9 (PMID 30031203): [PubMed](https://pubmed.ncbi.nlm.nih.gov/30031203/)

**Why:** Sibling entries (e.g. Vfend) have a References section in the page body. Every proposed column cites one of these sources. All PMIDs were checked with NCBI esummary.

**Sources:** Notion sibling entry Vfend (Voriconazole) page body format — https://app.notion.com/p/255c496dfff18063b151f514c0244382; NCBI E-utilities esummary for PMIDs 27365388, 29544767, 31699664, 41413784, 38743901, 30031203 — https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi

## Apply log

- Adult dose: merged both proposals (PO DR tab 300 mg BID D1 then 300 mg QD; IA 6-12 wk US/UK; TW second-line restriction; prophylaxis duration; UK refractory IFI; swallow whole; not interchangeable with suspension)
- Renal dose, HD, CRRT: no adjustment; eGFR <20 variability with monitoring/TDM; not removed by HD; CRRT (Chen 2024, Sime 2018) standard dose + TDM; IV SBECD note
- Hepatic dose: Child-Pugh A-C no adjustment (UK caution, AUC 1.3-1.6x); TW half-life data; LFT monitoring and discontinuation
- Pediatric dose: TW <13 y not established, 13-17 y prophylaxis only at adult dose; US/UK >=2 y and >40 kg adult dose; <=40 kg tablets not recommended; <2 y not established
- Indications: [Aspergillosis, Candidiasis]
- Coverage: [Candida, Aspergillus]
- Side Effects: [GI, LFT↑, hypokalemia, QTc prolong, CNS, hematologic, neutropenia, photosensitivity] (union of both proposals)
- Monitor: [LFT, electrolyte, ECG]
- Mechanism: CYP51 inhibition, resistance, EUCAST breakpoints/ECOFF, tablet PK
- Drug Interactions: contraindications, sirolimus label differences, CNI dose reductions, benzodiazepines/CCB/digoxin/vinca etc., inducers lowering posaconazole, acid suppressants not affecting tablet
- Pregnancy: no FDA letter category (PLLR), animal data (rat >=1.4x, rabbit >=3x), TW/UK avoid unless benefit outweighs risk, contraception (UK)
- Breastfeeding: TW/UK/US label statements and LactMed (rev. 2024-11-15) with alternatives
- Notes: merged both proposals (stocked form, TW narrower indications, Candidiasis tag meaning, UK other indications, Mucorales and CCPA off-label, pseudoaldosteronism, photosensitivity, weight >120 kg/diarrhoea, TDM)
- Page body: appended References section with 10 sources (US label, UK SmPC, TW insert, LactMed, IDSA 2016, ESCMID 2017, Cornely 2019, Ashok 2026, Chen 2024, Sime 2018)
- Renewed date: 2026-10-05, is_datetime 0

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
