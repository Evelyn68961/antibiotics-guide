# New entry: Icomein (Itraconazole)

- **Notion entry:** [Icomein (Itraconazole)](https://app.notion.com/3f0c496dfff1819293cbc9986c6bf84d). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** ICO01 (Icomein cap 100 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/itraconazole.json` (plus any Taiwan insert text files)

## Product and sources

ICO01: Icomein 膠囊 100 mg (易克黴膠囊), itraconazole 100 mg capsule, oral only (PO), made by 永勝 Everest. Taiwan licence 衛署藥製字第046283號 (NHI code AB46283100). The latest Taiwan package insert is dated ROC 108-07-11 (2019-07-11): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F. The US reference label is SPORANOX capsules (Janssen), DailyMed setid a4d555fa-787c-40fb-bb7d-b0d4f7318fd0, version 31, published Jul 15, 2026; I confirmed this against the DailyMed history API. There is no UK capsule SmPC on eMC. eMC lists only the 10 mg/ml oral solution (product 10049) and the infusion (product 14180), so the oral-solution SmPC is used for reference only. The Notion page is a NEW ENTRY: it has only a title and Category ('Triazole antifungal'), every other column is empty, and the page body is blank. Note: the relayed user request said 'do task 2,3,5', but this run only received the reviewer-A audit, so that is what I did. I made no edits to Notion or to any file.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> capsule 100 mg：飯後立即服用 (full meal)，整粒吞服 / take immediately after a full meal, swallow whole<br>**Blastomycosis/Histoplasmosis (US):** 200 mg QD；無明顯改善可每次 +100 mg，max 400 mg/day；>200 mg/day 分 BID<br>**Aspergillosis:** US 200–400 mg/day；TW 200 mg QD，侵入性/散佈性可增至 200 mg BID<br>**Life-threatening (US):** loading 200 mg TID ×3 days，療程至少 3 個月 (TW 仿單: 對生命有立即威脅之全身性黴菌感染不建議以本品作起始治療)<br>**Candidiasis (TW):** 100–200 mg QD (侵入性/散佈性 200 mg BID)；口腔念珠菌 100 mg QD ×15 d (免疫不全者生體可用率↓，劑量可能需加倍)；VVC 200 mg BID ×1 d 或 200 mg QD ×3 d<br>**Cryptococcosis (TW):** non-meningeal 200 mg QD；meningitis 200 mg BID (免疫不全者及 CNS 隱球菌感染: 僅限第一線不適用或無效時)<br>**Extracutaneous sporotrichosis (TW):** 200 mg BID；paracoccidioidomycosis 100 mg QD；chromomycosis 200 mg QD<br>**Skin (TW):** tinea corporis/cruris 200 mg BID ×7 d 或 100 mg QD ×15 d；手足癬 200 mg BID ×7 d 或 200 mg QD ×30 d；pityriasis versicolor 200 mg QD ×7 d；fungal keratitis 200 mg QD ×21 d<br>**Onychomycosis:** toenail 200 mg QD ×12 週 (US/TW)；pulse 200 mg BID ×1 週、停 3 週 → fingernail 2 pulses (US/TW)、toenail 3 pulses (TW)<br>常見劑量: 200 mg PO QD–BID

**Why:** The entry is new and this column is empty. The proposed text covers the only stocked form (100 mg capsule) using the US label's DOSAGE AND ADMINISTRATION and the Taiwan insert §3.1 dosing tables. It also records a label conflict: the US label gives a 600 mg/day loading dose for life-threatening infections, while the Taiwan insert §6.8.2 says the capsule is not recommended for starting treatment of immediately life-threatening systemic infections. On fungal keratitis, the insert text reads '200mg，每日一些次'. That is almost certainly a typo for 每日一次, so I proposed QD; the pharmacist should confirm this.

**Sources:** US FDA label SPORANOX capsules, DOSAGE AND ADMINISTRATION (Treatment of Blastomycosis and Histoplasmosis; Treatment of Aspergillosis; Treatment in Life-Threatening Situations; Toenails; Fingernails only), https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert 易克黴膠囊 §3.1 用法用量 and §6.8.2, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span>: 無固定劑量調整；腎功能不全資料有限，謹慎使用 (TW 仿單 6.7: 部分病人暴露量可能較低，建議監測 itraconazole 血中濃度以調整劑量)<br>US label: caution, dose adjustment may be needed；中/重度腎功能不全 AUC 約 ↓30% / ↓40% (IV 單劑研究)；尿毒症 (CrCl ~13 mL/min) 暴露量略低<br>HD/CAPD: 不被透析移除，HD/CAPD 不影響 PK → 不需補充劑量 / not dialyzable (US/TW)<br>CRRT: 仿單無資料；蛋白結合 99.8%、原型藥腎排泄 <1% → 預期 CRRT 清除極少，標準劑量 + TDM (推論，非仿單建議)<br>腎衰竭/水腫疾病為 CHF 危險因子 → 監測 CHF 徵象

**Why:** Column is empty. Following the source hierarchy, the stocked product's Taiwan insert (§6.7) comes first: use with caution and adjust the dose by monitoring itraconazole levels. The US values (caution; AUC about 30–40% lower; HD and CAPD have no effect) are given alongside. No label covers CRRT. My CRRT line is inferred from label PK (99.8% protein binding, renal excretion under 1%, not dialyzable) and is marked as an inference. A PubMed search found only Coronel 1994 (PMID 7829423), a letter with no abstract, and the Trotman 2005 review (PMID 16163635), whose full text I could not open. I therefore did not cite either for a CRRT dose. The US Cardiac Disease warning lists renal failure as a CHF risk factor.

**Sources:** Taiwan insert §6.7 腎功能不全, §11.2.2, §9 過量 (無法以血液透析去除), https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA label CLINICAL PHARMACOLOGY Special Populations: Renal Impairment; DOSAGE AND ADMINISTRATION Use in Patients with Renal Impairment; OVERDOSAGE; Distribution/Excretion; WARNINGS Cardiac Disease, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; IDSA Aspergillosis 2016 (PMID 27365388, verified via esummary) TDM recommendation, https://www.idsociety.org/practice-guideline/aspergillosis/

### A3 · Hepatic dose

無固定劑量調整 (資料有限)；謹慎使用並密切監測 LFT / no fixed adjustment; use with caution, monitor LFT (US/TW)<br>LFT 異常、活動性肝病或曾有藥物肝毒性: 強烈不建議使用，除非嚴重或危及生命且效益大於風險<br>肝硬化 (單劑 100 mg): t½ 延長約 2 倍 (37 vs 16 h)、Cmax ↓47%、AUC 相似 → 開始併用 CYP3A4 藥物時須考慮；TW: 生體可用率可能↓，必要時監測血中濃度並調整劑量<br>出現肝炎症狀 (厭食、噁心、嘔吐、疲倦、黃疸、深色尿、淺色便) → 立即停藥並檢查 LFT

**Why:** Column is empty. Both labels give no numeric hepatic adjustment, but both require caution and LFT monitoring, and both strongly discourage use in patients with abnormal LFTs or active liver disease. The cirrhosis PK data come from the US Hepatic Impairment section and Taiwan §11.2.1. The Taiwan §5.1.8 advice to monitor levels and adjust the dose is included.

**Sources:** US FDA label CLINICAL PHARMACOLOGY Hepatic Impairment; WARNINGS Hepatic Effects; PRECAUTIONS Hepatotoxicity; DOSAGE AND ADMINISTRATION Use in Patients with Hepatic Impairment, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §5.1.8 肝臟效應, §6.6, §11.2.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### A4 · Pediatric dose

無核准兒童劑量 / safety & efficacy not established (US)；TW 仿單: 臨床資料有限，不建議用於兒童，除非效益大於風險<br>動物: 大鼠骨骼缺損；長期對兒童骨骼生長影響未知 (US)<br>IDSA histoplasmosis 2026 (off-label): 5 mg/kg/dose (max 200 mg/dose) TID ×3 d → 5 mg/kg/dose BID (max 400 mg/day)，6–12 週<br>本院僅 100 mg capsule (需整粒吞服；無口服液)

**Why:** Column is empty. Neither label gives a pediatric dose: the US Pediatric Use section says not established, and Taiwan §6.4 and §11.2.3 say not recommended unless the benefit outweighs the risk. The only verified mg/kg regimen is in the IDSA histoplasmosis guideline (idsociety.org, last updated 2026-09-16). The capsule-only formulation limits use in small children.

**Sources:** US FDA label PRECAUTIONS Pediatric Use, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §6.4 小兒, §8.2.1, §11.2.3, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; IDSA Histoplasmosis in Adults, Children, and Pregnant Individuals (last updated 2026-09-16), https://www.idsociety.org/practice-guideline/histoplasmosis/

### A5 · Indications

Aspergillosis, Candidiasis

**Why:** Aspergillosis is a US indication: pulmonary or extrapulmonary disease in patients intolerant of or refractory to amphotericin B. It is also in the Taiwan indications. Candidiasis (systemic, vulvovaginal and oral) is a Taiwan-approved indication for this capsule, and the UK oral-solution SmPC also lists oral/oesophageal candidosis. Caveat: the US label says only the oral solution has been shown effective for oral or oesophageal candidiasis, and I put that in Notes. The other approved indications have no matching option in the schema and go into Notes (A12): blastomycosis, histoplasmosis, cryptococcosis, sporotrichosis, dermatophytoses and onychomycosis. I did not use the 'Meningitis' tag, because cryptococcal meningitis is approved only as a second-line use in Taiwan.

**Sources:** US FDA label INDICATIONS AND USAGE, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §2 適應症, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; UK SmPC Itraconazole 10mg/ml oral solution §4.1 (reference only), https://www.medicines.org.uk/emc/product/10049/smpc

### A6 · Coverage

Candida, Aspergillus

**Why:** The US Antimicrobial Activity section lists Aspergillus flavus and A. fumigatus. Taiwan §10.2 lists Candida albicans, C. tropicalis, C. parapsilosis, C. dubliniensis and Aspergillus spp. Histoplasma, Blastomyces and Trichophyton have no matching option and go into Notes. Organisms itraconazole is not active against (Zygomycetes/Mucorales, Fusarium, Scedosporium, Scopulariopsis) also go into Notes.

**Sources:** US FDA label MICROBIOLOGY Antimicrobial Activity; Resistance, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §10.2 藥效藥理特性, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### A7 · Side Effects

GI, LFT↑, hypokalemia, CNS, neuropathy, ototoxicity, hematologic, SJS/TEN, photosensitivity

**Why:** Every option here exists in the schema. The label basis for each:<br>- GI is the most common effect: nausea 11%, plus dyspepsia, abdominal pain and constipation.<br>- LFT↑ and serious hepatotoxicity, including fatal liver failure.<br>- Hypokalaemia, including from pseudoaldosteronism.<br>- CNS: headache and dizziness.<br>- Peripheral neuropathy.<br>- Transient or permanent hearing loss.<br>- Leukopenia, neutropenia and thrombocytopenia (postmarketing).<br>- SJS/TEN and photosensitivity (postmarketing).<br>CHF, oedema and hypertension/pseudoaldosteronism have no tag and go into Notes.

**Sources:** US FDA label ADVERSE REACTIONS (Table 3, Table 4, Postmarketing Experience Table 6); WARNINGS Hearing Loss, Pseudoaldosteronism; PRECAUTIONS Neuropathy, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §8.1, §8.3 上市後經驗, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### A8 · Monitor

LFT, electrolyte

**Why:** For LFT: the US Hepatotoxicity section says monitoring should be considered in all patients, and Taiwan §5.1.8 requires it for courses over 1 month or when symptoms appear. For electrolyte: the US Pseudoaldosteronism section says to monitor potassium and blood pressure. CHF signs, hearing and neuropathy have no matching option and go into Notes. Adding 'neuro' is optional.

**Sources:** US FDA label PRECAUTIONS Hepatotoxicity; WARNINGS Pseudoaldosteronism, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §5.1.8, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### A9 · Mechanism

Triazole antifungal: 抑制 fungal cytochrome P450-dependent ergosterol 合成 (14α-demethylase, ERG11) → 細胞膜受損 / inhibits CYP450-dependent ergosterol synthesis → fungal cell membrane disruption<br>活性代謝物 hydroxy-itraconazole<br>抗藥機轉: ERG11 過度表現/點突變、efflux pump 上調；Candida 間 azole 可能 cross-resistance；曾報告 itraconazole-resistant A. fumigatus

**Why:** Column is empty. The text uses the US Mechanism of Action, Resistance and Cross-Resistance sections and Taiwan §10.1–10.2.

**Sources:** US FDA label MICROBIOLOGY Mechanism of Action; Resistance; Cross-Resistance, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §10.1 作用機轉, §10.2, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### A10 · Drug Interactions

CYP3A4 受質；itra 及 hydroxy-itra 為強效 CYP3A4 抑制劑，亦抑制 P-gp、BCRP；停藥後 7–14 天濃度才降至偵測下限 → 多數禁忌持續至停藥後 2 週<br>**禁忌併用 (↑併用藥濃度；QT/TdP 等):** methadone, disopyramide, dofetilide, dronedarone, quinidine, isavuconazole, ergot alkaloids, irinotecan, lurasidone, oral midazolam, triazolam, pimozide, felodipine, nisoldipine, ivabradine, ranolazine, eplerenone, finerenone, cisapride, naloxegol, lomitapide, lovastatin, simvastatin, avanafil, ticagrelor, voclosporin；TW 另列 astemizole, terfenadine, mizolastine, sertindole, bepridil, levacetylmethadol, halofantrine, domperidone<br>條件式禁忌: colchicine/fesoterodine/solifenacin (腎或肝功能不全)；eliglustat (CYP2D6 PM/IM 或併用 2D6 抑制劑)；venetoclax (CLL/SLL 起始/ramp-up 期)<br>**不建議 (誘導劑 ↓itra):** rifampin, isoniazid, phenytoin, phenobarbital, efavirenz, nevirapine (治療前 2 週及治療期間)；rifabutin, carbamazepine, lumacaftor/ivacaftor (治療前 2 週至停藥後 2 週)<br>**不建議 (↑併用藥):** fentanyl, apixaban, rivaroxaban, vorapaxar, alfuzosin/silodosin/tamsulosin, 多種 TKIs<br>**↑itra:** clarithromycin, erythromycin, ciprofloxacin, ritonavir/cobicistat-boosted regimens, diltiazem → 監測，可能需減量<br>**胃酸↓ (capsule 吸收↓):** antacids 間隔 (TW: 服藥前 ≥1 h 或後 ≥2 h；US: 前後 ≥2 h)；H2RA/PPI → 以酸性飲料 (非低糖可樂) 併服<br>注意: CCB (加成負性肌力 → CHF)、cyclosporine/tacrolimus/sirolimus 監測濃度、warfarin 監測 INR、digoxin、corticosteroids 含吸入型 (Cushing)

**Why:** Column is empty. The contraindicated drugs follow the US CONTRAINDICATIONS Drug Interactions list and Tables 1–2, plus the extra contraindicated drugs in Taiwan §4 and §7. The two labels differ on antacid spacing (Taiwan: at least 1 h before or 2 h after; US: 2 h before or after), so both are shown. The advice to monitor immunosuppressant levels is from IDSA 2016. The text deliberately avoids the overly broad wording 'all CYP3A4 substrates contraindicated'.

**Sources:** US FDA label CONTRAINDICATIONS Drug Interactions; PRECAUTIONS Drug Interactions Table 1 & Table 2; WARNINGS Cardiac Disease, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §4 禁忌, §5.1.9, §7 交互作用, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; IDSA Aspergillosis 2016 (PMID 27365388) Triazole Drug Interactions and TDM, https://www.idsociety.org/practice-guideline/aspergillosis/

### A11 · Pregnancy

No FDA letter category。動物: 大鼠/小鼠劑量相關母體毒性、胚胎毒性、致畸 (骨骼缺損、腦膨出/巨舌)；上市後曾有先天異常報告 (因果未確立)<br>TW 仿單: 懷孕禁用，除非危及生命且對母體效益大於胎兒風險 / contraindicated in pregnancy except life-threatening cases<br>US: 全身性感染僅於效益大於風險時使用；onychomycosis 不可用於懷孕或計畫懷孕者<br>避孕: TW—高度有效避孕持續至療程結束後的下一次月經；US (onychomycosis)—月經第 2–3 天開始治療，治療期間及結束後 2 個月持續高效避孕

**Why:** Column is empty. Under the hierarchy the stocked product's Taiwan insert comes first: §4 and §6.1 contraindicate use in pregnancy unless the situation is life-threatening. The US Teratogenic Effects and Postmarketing sections are added. No letter category is used.

**Sources:** Taiwan insert §4 禁忌, §6.1 懷孕, §6.3, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA label PRECAUTIONS Pregnancy: Teratogenic Effects; Postmarketing Experience, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0

### A12 · Breastfeeding

TW 仿單: 極少量分泌至乳汁，權衡利弊；病人有疑慮則不應哺乳<br>US label: 會分泌至乳汁，權衡母親效益與嬰兒暴露風險<br>LactMed: 無臨床哺乳資料；乳汁濃度低於嬰兒治療劑量 (5 mg/kg/day)；在更多資料前可優先考慮替代藥 (fluconazole)，尤其新生兒/早產兒；若使用，長療程考慮監測嬰兒肝酵素

**Why:** Column is empty. The text uses LactMed (rev. 2022-09-19), Taiwan §6.2 and the US Nursing Mothers section. The UK oral-solution SmPC says 'must not be used during lactation', but it is a different formulation and is not cited here.

**Sources:** LactMed Itraconazole NBK500573 (rev 2022-09-19) Summary of Use during Lactation; Alternate Drugs to Consider, https://www.ncbi.nlm.nih.gov/books/NBK500573/; Taiwan insert §6.2 哺乳, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA label PRECAUTIONS Nursing Mothers, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0

### A13 · Notes

• **Boxed warning – CHF:** 負性肌力；心室功能異常/CHF 病史者不可用於 onychomycosis，其他適應症僅於效益明顯大於風險時使用；400 mg/day 較常通報 CHF；危險因子: 缺血/瓣膜疾病、COPD、腎衰竭、水腫；出現 CHF 徵象即停藥 (TW: CHF 禁用，除非危及生命或嚴重感染)<br>• **Boxed warning – 交互作用:** 見 Drug Interactions<br>• Capsule 與 oral solution 不可互換 (solution 暴露量較高、空腹服用)；US: 僅 oral solution 證實對口咽/食道念珠菌有效 (TW capsule 仿單仍列口腔念珠菌)<br>• 吸收需胃酸 + 餐後立即服用；胃酸缺乏/PPI/H2RA → 酸性飲料送服；neutropenia/AIDS/移植病人生體可用率可能↓ → 依臨床反應調整<br>• 嚴重肝毒性 (含致死性急性肝衰竭，部分發生於第一週)；療程 >1 個月或有症狀時監測 LFT<br>• 假性醛固酮症 (高血壓、低血鉀) → 監測 BP、K+<br>• 聽力喪失 (短暫或永久)、周邊神經病變 → 停藥；可能頭暈/視力模糊/複視<br>• TDM (off-label): IDSA aspergillosis 2016 — triazole 治療 IA、長期 azole 預防或預期交互作用者，強烈建議穩態後測 trough，目標 >0.5–1 µg/mL (itra + OH-itra >1.5 µg/mL)，>3 µg/mL 可能↑毒性；IDSA histoplasmosis 2026: 嚴重 histo 治療 1–2 週後測，隨機濃度 1–4 mg/L (chromatographic assay)<br>• 非線性 PK，約 15 天達穩態；重複給藥 t½ 34–42 h；CSF 濃度遠低於血漿<br>• 其他核准適應症 (無對應 tag): blastomycosis、histoplasmosis (US/TW)；onychomycosis (US/TW)；cryptococcosis 含腦膜炎 (TW，免疫不全/CNS 感染僅限二線)、sporotrichosis、paracoccidioidomycosis、chromomycosis、dermatophytosis、pityriasis versicolor、fungal keratitis、tinea capitis (TW)<br>• C. glabrata / C. krusei / C. tropicalis 敏感性較低 (TW)；fluconazole-resistant Candida 不可假設對 itra 敏感，需藥敏<br>• 無活性: Mucorales (Zygomycetes)、Fusarium、Scedosporium、Scopulariopsis<br>• Off-label prophylaxis (IDSA 2016): 有效但受吸收/耐受性限制；lung transplant 後 3–4 個月可用 itra 或 vori<br>• 女性 onychomycosis: 月經第 2–3 天開始並高效避孕 (見 Pregnancy)

**Why:** Column is empty. These notes cover label warnings and options with no matching tag (CHF, pseudoaldosteronism, hearing loss, organisms and indications without tags), so nothing outside the schema is invented. They also add guideline-based TDM targets from IDSA pages I fetched, and both PMIDs (27365388 for aspergillosis) were checked with esummary. The style follows the existing voriconazole entry.

**Sources:** US FDA label BOXED WARNING/WARNINGS Cardiac Disease, Hepatic Effects, Pseudoaldosteronism, Hearing Loss, Interchangeability; PRECAUTIONS General, Immunocompromised Patients; MICROBIOLOGY Resistance; CLINICAL PHARMACOLOGY, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; Taiwan insert §2, §4, §5.1.1–5.1.9, §6.8, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; IDSA Aspergillosis 2016, Patterson TF et al. CID 2016;63:e1–e60 (PMID 27365388) – Itraconazole TDM, prophylaxis, https://www.idsociety.org/practice-guideline/aspergillosis/; IDSA Histoplasmosis guideline (last updated 2026-09-16) – itraconazole TDM, https://www.idsociety.org/practice-guideline/histoplasmosis/

### A14 · Page body

## References<br>- US FDA label — SPORANOX (itraconazole) capsules, Janssen, DailyMed setid a4d555fa-787c-40fb-bb7d-b0d4f7318fd0, v31 published 2026-07-15: [DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0)<br>- Taiwan 仿單 — "永勝" 易克黴膠囊 100 mg (Icomein)，衛署藥製字第046283號，仿單 108-07-11 (TFDA, accessed 2026-10-05): [mcp.fda.gov.tw](https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F)<br>- UK SmPC (reference only; no UK capsule SmPC on eMC) — Itraconazole 10 mg/ml oral solution, eMC 10049, rev. 2026-05-13: [medicines.org.uk/emc/product/10049/smpc](https://www.medicines.org.uk/emc/product/10049/smpc)<br>- LactMed — Itraconazole, NBK500573 (rev. 2022-09-19): [ncbi.nlm.nih.gov/books/NBK500573](https://www.ncbi.nlm.nih.gov/books/NBK500573/)<br>- IDSA Aspergillosis guideline 2016 (Patterson TF et al. Clin Infect Dis 2016;63:e1–e60, PMID 27365388): [idsociety.org](https://www.idsociety.org/practice-guideline/aspergillosis/)<br>- IDSA Histoplasmosis guideline (last updated 2026-09-16): [idsociety.org](https://www.idsociety.org/practice-guideline/histoplasmosis/)

**Why:** The existing entries, for example Vfend (Voriconazole), keep a References section in the page body. This new page has none, so the proposed list follows that pattern.

**Sources:** Notion entry Vfend (Voriconazole) page body for style, https://app.notion.com/255c496dfff18063b151f514c0244382; Sources listed in proposed text (all URLs above)

### A15 · Renewed date

2026-10-05

**Why:** Other entries that were verified on this date carry Renewed date 2026-10-05, for example voriconazole. Set this date once the edits are applied.

**Sources:** Notion entry Vfend (Voriconazole), https://app.notion.com/255c496dfff18063b151f514c0244382

### B1 · Adult dose

<span color="blue">`PO`</span> 100 mg cap：飯後立即服用 (full meal)、整粒吞服；不可與 oral solution 互換<br><br>TW 易克黴仿單 (stocked product) — systemic:<br>• Aspergillosis: 200 mg QD × 2–5 mo; invasive/disseminated → 200 mg BID<br>• Candidiasis: 100–200 mg QD × 3 wk–7 mo; invasive/disseminated → 200 mg BID<br>• Cryptococcosis (non-meningeal): 200 mg QD × 2 mo–1 y; crypto meningitis (second-line only): 200 mg BID<br>• Histoplasmosis: 200 mg QD–200 mg BID × 8 mo<br>• Blastomycosis: 100 mg QD–200 mg BID × 6 mo<br>• Extracutaneous sporotrichosis: 200 mg BID × 12 mo<br>• Paracoccidioidomycosis: 100 mg QD × 6 mo; Chromomycosis: 200 mg QD × 6 mo<br>Superficial (TW):<br>• VVC: 200 mg BID × 1 d or 200 mg QD × 3 d<br>• Dermatophytosis: 200 mg BID × 7 d or 100 mg QD × 15 d (palmar/plantar: 200 mg BID × 7 d or 200 mg QD × 30 d)<br>• Pityriasis versicolor: 200 mg QD × 7 d<br>• Oral candidiasis: 100 mg QD × 15 d (dose may need doubling if immunocompromised)<br>• Fungal keratitis: 200 mg QD × 21 d<br>• Onychomycosis: pulse 200 mg BID × 1 wk, then 3 wk off — fingernails 2 pulses, toenails 3 pulses; or continuous 200 mg QD × 3 mo (toenail)<br><br>US FDA: blastomycosis/histoplasmosis 200 mg QD, ↑ by 100 mg to max 400 mg/day (>200 mg/day split BID); aspergillosis 200–400 mg/day; life-threatening: loading 200 mg TID × 3 d, then treat ≥3 mo. Onychomycosis: toenail 200 mg QD × 12 wk; fingernail 2 pulses of 200 mg BID × 1 wk, 3 wk apart<br>(TW 6.8.2: 不建議作為立即危及生命全身性黴菌感染之起始治療)<br>Off-label (IDSA Histoplasmosis 2026): 200 mg TID × 3 d → 200 mg BID, with TDM

**Why:** The column is empty. Doses come from the stocked product's TW insert (§3.1 tables) and the FDA label. Notes: (1) The TW keratitis row reads '200mg，每日一些次', which is presumably a typo for 每日一次; the pharmacist should confirm against the PDF. (2) The TW toenail pulse regimen (3 pulses) is not in the FDA label, which has continuous dosing only for toenails. (3) The FDA label states that only the oral solution has been shown effective for oral/esophageal candidiasis, while the TW insert approves capsules for oral candidiasis. (4) The FDA loading-dose advice conflicts with TW 6.8.2, so both are shown. The hospital page's aspergillosis prophylaxis regimen (200 mg q12h) is in neither capsule label. Keep it out, or label it as guideline/off-label if the owner wants it.

**Sources:** TW 易克黴仿單 §3.1 用法用量 (systemic and superficial tables, onychomycosis pulse/continuous), §6.8.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA SPORANOX capsules (DailyMed setid a4d555fa-787c-40fb-bb7d-b0d4f7318fd0, v31) DOSAGE AND ADMINISTRATION: Treatment of Blastomycosis and Histoplasmosis; Treatment of Aspergillosis; Treatment in Life-Threatening Situations; Toenails; Fingernails only; WARNINGS: Interchangeability — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; IDSA Histoplasmosis in Adults, Children, and Pregnant Individuals (last updated 2026-09-16), initial dosing remarks — https://www.idsociety.org/practice-guideline/histoplasmosis/

### B2 · Renal dose, HD, CRRT

No fixed dose adjustment (limited data) — 謹慎使用<br>TW 仿單 6.7 (stocked product): 部分腎功能不全病人暴露量可能較低 → 建議監測 itraconazole 血中濃度以調整劑量<br>US FDA: caution; exposure may be lower and dose adjustment may be needed. IV single dose: AUC ↓ ~30% (CrCl 20–49) and ~40% (CrCl <20); t½ unchanged (42–49 h). Uremia (CrCl ~13): AUC slightly ↓, wide variability<br>UK SmPC (oral solution 4.2): adjust dose or switch antifungal based on clinical effectiveness<br><br>HD / CAPD: not removed (no effect on t½ or clearance; FDA, TW §9/§11.2.2) → no supplemental dose<br>CRRT: no label data. 99.8% protein bound and <1% renal excretion → not expected to be removed by CRRT (Muhl 2005) → usual dose; use TDM

**Why:** The column is empty. Per the renal-dosing ground rule, the TW insert of the stocked product is the primary source, with the FDA and UK values shown alongside. CRRT is not covered by any label. The PubMed review Muhl 2005 (PMID 15826289, verified by esummary) states that itraconazole, being highly protein bound with little renal elimination, is not eliminated by CRRT. Coronel 1994 (JAC 34:448, PMID 7829423) measured itraconazole during continuous haemodiafiltration; it is a letter with no abstract, so it is not cited for numbers.

**Sources:** TW 易克黴仿單 §6.7 腎功能不全, §11.2.2, §9 過量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA SPORANOX capsules, CLINICAL PHARMACOLOGY Special Populations: Renal Impairment; DOSAGE: Use in Patients with Renal Impairment; OVERDOSAGE — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; UK SmPC Itraconazole 10 mg/ml oral solution §4.2 (renal impairment) — https://www.medicines.org.uk/emc/product/10049/smpc; Muhl E. Mycoses 2005;48 Suppl 1:56-60, PMID 15826289 — https://pubmed.ncbi.nlm.nih.gov/15826289/

### B3 · Hepatic dose

No fixed dose adjustment (limited data) — 謹慎使用並密切監測 LFT<br>Cirrhosis (single 100 mg cap): Cmax ↓47%, t½ ×2 (37 vs 16 h), AUC similar → 開始其他 CYP3A4 藥物時須考慮 t½ 延長<br>TW 5.1.8: 肝硬化生體可用率可能降低，必要時檢測血中濃度並調整劑量<br>Elevated/abnormal LFT, active liver disease, or prior drug-induced hepatotoxicity: strongly discouraged unless serious/life-threatening infection (FDA/TW)<br>Serious hepatotoxicity (incl. fatal liver failure, some within week 1) → stop if hepatitis symptoms; check LFT, especially on courses >1 month

**Why:** The column is empty. The FDA label and the TW insert both require caution and LFT monitoring. The hospital site's 'Dose adjustment is not required' understates this; see the hospital-database issues.

**Sources:** TW 易克黴仿單 §5.1.8 肝臟效應, §6.6, §11.2.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA SPORANOX capsules: WARNINGS Hepatic Effects; PRECAUTIONS Hepatotoxicity; CLINICAL PHARMACOLOGY Hepatic Impairment; DOSAGE Use in Patients with Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0

### B4 · Pediatric dose

Not established — 不建議用於兒童，除非利益大於風險 (TW 6.4/11.2.3; FDA Pediatric Use: safety/efficacy not established; rat bone defects at ≥20 mg/kg/day)<br>Off-label (IDSA Histoplasmosis 2026, original capsule or oral solution): 5 mg/kg/dose (max 200 mg/dose) TID × 3 d → 5 mg/kg/dose BID (max 400 mg/day); TDM required<br>院內僅有 100 mg capsule (須整粒吞服，不可打開)

**Why:** The column is empty. No label gives a pediatric dose. The TW insert reports pediatric safety data only (165 children aged 1–17 y, §8.2.1), with AEs similar to adults but more frequent. The off-label dose comes from the current IDSA histoplasmosis guideline. The hospital site says 'Solution prepatation is recommended', which has a typo, and the hospital does not stock an itraconazole solution. Do not copy it.

**Sources:** TW 易克黴仿單 §6.4 小兒, §8.2.1, §11.2.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA SPORANOX capsules PRECAUTIONS: Pediatric Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; IDSA Histoplasmosis guideline (2026-09-16) initial dosing remarks — https://www.idsociety.org/practice-guideline/histoplasmosis/

### B5 · Indications

Aspergillosis, Candidiasis

**Why:** The column is empty. 'Aspergillosis' is approved by the FDA (pulmonary/extrapulmonary, intolerant of or refractory to amphotericin B) and by TW (systemic aspergillosis). 'Candidiasis' is approved by TW (systemic, VVC, oral). The UK oral-solution SmPC also lists oral/oesophageal candidosis, although the FDA says only the oral solution has been shown effective for oral/esophageal candidiasis. Do NOT add Meningitis: TW approves crypto meningitis as second-line only, which is better explained in Notes. The schema has no option for blastomycosis, histoplasmosis, sporotrichosis, paracoccidioidomycosis, chromomycosis, cryptococcosis, onychomycosis, dermatophytosis, pityriasis versicolor or keratitis, so put these in Notes. SSTI is used for bacterial skin infections in this database, so it is not proposed for onychomycosis or dermatophytosis.

**Sources:** US FDA SPORANOX capsules INDICATIONS AND USAGE; WARNINGS Interchangeability — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; UK SmPC oral solution §4.1 — https://www.medicines.org.uk/emc/product/10049/smpc

### B6 · Coverage

Candida, Aspergillus

**Why:** The column is empty. FDA Antimicrobial Activity lists A. fumigatus and A. flavus. TW §10.2 lists C. albicans, C. tropicalis, C. parapsilosis, C. dubliniensis and Aspergillus spp. The UK SmPC 5.1 gives EUCAST breakpoints for C. albicans, C. dubliniensis, C. parapsilosis, C. tropicalis and A. flavus/fumigatus/nidulans/terreus. Caveats for Notes: C. glabrata and C. krusei are less susceptible; resistant A. fumigatus has been reported. No activity against Mucorales, Fusarium, Scedosporium or Scopulariopsis. The endemic and dermatophyte organisms have no schema option, so they go in Notes.

**Sources:** US FDA SPORANOX capsules MICROBIOLOGY: Antimicrobial Activity, Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 §10.2 藥效藥理特性 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; UK SmPC oral solution §5.1 Breakpoints — https://www.medicines.org.uk/emc/product/10049/smpc

### B7 · Side Effects

GI, LFT↑, CNS, neuropathy, ototoxicity, hypokalemia, SJS/TEN, leukopenia, neutropenia, thrombocytopenia, photosensitivity

**Why:** The column is empty. Every tag exists in the schema. Label support for each: GI (nausea 11%, vomiting 5%, diarrhea, abdominal pain, dyspepsia); hepatic function abnormal, plus rare serious hepatotoxicity; headache and dizziness, which map to the CNS tag; peripheral neuropathy; transient or permanent hearing loss; hypokalemia (2%, and pseudoaldosteronism); SJS/TEN, AGEP and erythema multiforme; leukopenia, neutropenia and thrombocytopenia (postmarketing); photosensitivity. CHF, edema and pulmonary edema have no schema option, so put them in Notes. QTc prolong is not proposed, because the labels attribute QT risk to raised levels of co-administered drugs, which belongs in Drug Interactions.

**Sources:** US FDA SPORANOX capsules ADVERSE REACTIONS Table 3, Table 4, Postmarketing Table 6; WARNINGS Cardiac Disease; PRECAUTIONS Neuropathy, Hearing Loss, Pseudoaldosteronism — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 §8.1–8.3 (表1–表3) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### B8 · Monitor

LFT, electrolyte, neuro

**Why:** The column is empty. LFT: the FDA says to consider LFT monitoring in all patients, and TW requires it on courses longer than 1 month or if symptoms appear. Electrolyte: the FDA pseudoaldosteronism warning says to monitor BP and potassium. Neuro: stop the drug for neuropathy or hearing loss. CHF signs and symptoms, BP and itraconazole TDM have no schema option, so put them in Notes.

**Sources:** US FDA SPORANOX capsules PRECAUTIONS Hepatotoxicity, Pseudoaldosteronism, Neuropathy, Hearing Loss; WARNINGS Cardiac Disease — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 §5.1.4, §5.1.5, §5.1.8 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### B9 · Mechanism

Triazole; inhibits fungal CYP450-dependent 14α-demethylase (ERG11) → ↓ergosterol synthesis → 細胞膜受損. Active metabolite hydroxy-itraconazole. Resistance: ERG11 overexpression/point mutation, efflux pump overexpression; azole cross-resistance in Candida (not universal)<br>PK: absolute F ~55% (maximal when capsule taken right after a full meal); non-linear, steady state ~15 d; t½ 16–28 h (single) → 34–42 h (repeated); protein binding 99.8%, Vd >700 L; CSF levels much lower than plasma; persists in nail keratin ≥6 mo after a 3-mo course

**Why:** The column is empty. The mechanism and resistance mechanisms are taken from the label sections cited. The PK figures were checked against both labels.

**Sources:** US FDA SPORANOX capsules CLINICAL PHARMACOLOGY: Mechanism of Action, General Pharmacokinetic Characteristics, Absorption, Distribution, Excretion — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; UK SmPC oral solution §5.1 Mechanism of action / Mechanism(s) of resistance — https://www.medicines.org.uk/emc/product/10049/smpc; TW 易克黴仿單 §10.1, §11.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F

### B10 · Drug Interactions

Strong CYP3A4 inhibitor (itraconazole + OH-itraconazole) + P-gp/BCRP inhibitor; also a CYP3A4 substrate. 停藥後抑制作用持續 7–14 d (most restrictions: during + 2 wk after)<br>CONTRAINDICATED: methadone, levacetylmethadol, disopyramide, dofetilide, dronedarone, quinidine, cisapride, pimozide, astemizole/terfenadine/mizolastine/sertindole/bepridil (TW), lovastatin, simvastatin, lomitapide, triazolam, oral midazolam, ergot alkaloids, felodipine, nisoldipine, ivabradine, ranolazine, eplerenone, finerenone, ticagrelor, irinotecan, lurasidone, naloxegol, avanafil, isavuconazole, voclosporin; colchicine / fesoterodine / solifenacin (renal or hepatic impairment); eliglustat (CYP2D6 PM/IM or with CYP2D6 inhibitors); venetoclax (CLL/SLL ramp-up)<br>NOT recommended (↓ itraconazole → failure): rifampicin, isoniazid, phenytoin, phenobarbital, efavirenz, nevirapine (2 wk before + during); rifabutin, carbamazepine, lumacaftor/ivacaftor (2 wk before → 2 wk after)<br>NOT recommended (↑ partner drug): apixaban/rivaroxaban/edoxaban, fentanyl, everolimus/sirolimus, alfuzosin/tamsulosin/silodosin, salmeterol, colchicine (other patients), many TKIs<br>Monitor / ↓ dose: tacrolimus, cyclosporine, warfarin (INR), digoxin, atorvastatin, corticosteroids (budesonide/fluticasone/dexamethasone/methylprednisolone → Cushing/adrenal suppression), CCBs (additive negative inotropy → CHF), oxycodone/alfentanil/buprenorphine, clarithromycin/erythromycin/ciprofloxacin and ritonavir/cobicistat (↑ itraconazole)<br>Acid suppression ↓ capsule absorption: antacids ≥1 h before or 2 h after (TW; FDA: ≥2 h before or after); with PPI/H2RA take with an acidic drink (non-diet cola)

**Why:** The column is empty. The lists come from the FDA contraindication list and Table 1/2, the TW §4 and §7 tables, and the UK SmPC §4.3, which adds halofantrine, aliskiren, domperidone, quetiapine, lercanidipine, darifenacin, dapoxetine, sildenafil (PAH), dabigatran and vardenafil (>75 y). Add any of these if the owner wants a fuller list. The labels disagree on antacid spacing: TW says 1 h before, FDA says 2 h before. TW is the stocked product, so its figure is given first.

**Sources:** US FDA SPORANOX capsules CONTRAINDICATIONS Drug Interactions; PRECAUTIONS Drug Interactions Table 1 (Effect of SPORANOX on Other Drugs) and Table 2 (Effect of Other Drugs on SPORANOX) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 §4 禁忌, §5.1.9, §7 交互作用 table — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; UK SmPC oral solution §4.3, §4.5 — https://www.medicines.org.uk/emc/product/10049/smpc

### B11 · Pregnancy

No FDA letter category (narrative label)<br>TW 仿單 §4/§6.1 (stocked product) & UK SmPC: 懷孕期間禁用，除非危及生命且對母親效益大於胎兒風險<br>US FDA: systemic infection only if benefit outweighs risk; do NOT use for onychomycosis in pregnancy or women planning pregnancy<br>Animal: dose-related teratogenicity (rat skeletal defects; mouse encephalocele/macroglossia); crosses placenta (rat). Postmarketing congenital anomalies reported (causality not established); 1st-trimester epidemiological data (mostly short VVC courses) showed no ↑ malformation risk<br>Contraception: TW/UK — effective contraception until the menstrual period after the end of therapy; FDA (onychomycosis) — start on day 2–3 of menses, highly effective contraception during therapy + 2 months after

**Why:** The column is empty. The FDA retired letter categories, so none is given. The TW and UK labels contraindicate use in pregnancy except life-threatening cases. The FDA label is less restrictive for systemic infections. The two labels differ on contraception duration, and both are shown.

**Sources:** TW 易克黴仿單 §4 禁忌, §6.1, §6.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA SPORANOX capsules PRECAUTIONS Pregnancy: Teratogenic Effects; Postmarketing Experience — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; UK SmPC oral solution §4.3, §4.6 — https://www.medicines.org.uk/emc/product/10049/smpc

### B12 · Breastfeeding

LactMed (rev. 2022-09-19): no clinical breastfeeding data; limited data show milk levels below the 5 mg/kg/day infant treatment dose (~1.5% of the maternal weight-adjusted dose). An alternative (fluconazole) may be preferred, especially for newborn/preterm infants; if used, consider monitoring infant LFT on long courses<br>TW 6.2: 僅極少量分泌於乳汁，應衡量利弊；若有疑慮則不應哺乳. US FDA: excreted in milk, weigh benefit vs risk<br>UK SmPC (oral solution): must not be used during lactation

**Why:** The column is empty. LactMed is the primary source for breastfeeding. The label statements are shown alongside, including the stricter UK wording.

**Sources:** LactMed Itraconazole NBK500573 (rev. 2022-09-19): Summary of Use during Lactation, Drug Levels, Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK500573/; TW 易克黴仿單 §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; US FDA SPORANOX capsules PRECAUTIONS Nursing Mothers — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; UK SmPC oral solution §4.6 — https://www.medicines.org.uk/emc/product/10049/smpc

### B13 · Notes

<span color="blue">`PO`</span> only — 院內 ICO01 易克黴 100 mg cap (no IV / oral solution)<br>飯後立即服用、整粒吞服. Capsule ≠ oral solution (solution: fasting, higher exposure; FDA: only the solution is proven for oral/esophageal candidiasis)<br>胃酸低 (PPI/H2RA, achlorhydria, AIDS) → 吸收↓ → 配酸性飲料 (non-diet cola). Neutropenia/AIDS/transplant: bioavailability may be ↓ → adjust by response/TDM<br>⚠ FDA boxed warning — CHF: negative inotrope (more reports at 400 mg/day); do not use for onychomycosis with ventricular dysfunction/CHF; for other indications only if benefit > risk (TW: 禁用 unless life-threatening/serious infection). Risk factors: ischemic/valvular disease, COPD, renal failure/edema. Watch for edema/dyspnea; CCBs additive<br>Other serious AEs: hepatotoxicity (can be fatal, even week 1), peripheral neuropathy → stop, transient/permanent hearing loss, pseudoaldosteronism (HTN + hypoK → check BP/K)<br>TDM (guideline): IDSA Histoplasmosis 2026 — itraconazole level >1 and <3–4 mg/L (chromatographic; random level acceptable given long t½); severe histo: check after 1–2 wk, target 1–4 mg/L; IDSA Aspergillosis 2016 — trough >0.5–1 µg/mL (itra + OH-itra >1.5 µg/mL); >3 µg/mL may ↑ toxicity<br>其他核准適應症 (no schema tag): blastomycosis, histoplasmosis, onychomycosis (FDA/TW); cryptococcosis incl. meningitis (TW, second-line only: immunocompromised or CNS crypto when first-line unsuitable/failed), sporotrichosis, paracoccidioidomycosis, chromomycosis, dermatophytosis, pityriasis versicolor, VVC, oral candidiasis, fungal keratitis, tinea capitis (TW)<br>Spectrum (no schema option): Histoplasma, Blastomyces, Cryptococcus, Sporothrix, Paracoccidioides, Coccidioides, Talaromyces (Penicillium) marneffei, chromoblastomycosis agents, dermatophytes (Trichophyton, Microsporum, Epidermophyton), Malassezia (TW §10.2)<br>C. glabrata / C. krusei less susceptible; suspected fluconazole-resistant Candida → test susceptibility first (TW 5.1.6). A. fumigatus resistance reported<br>NOT active: Mucorales (Rhizopus, Mucor), Fusarium, Scedosporium, Scopulariopsis<br>CSF 濃度遠低於血漿 (FDA/TW)<br>TW 6.8.2: 因藥動特性，不建議作為立即危及生命全身性感染之起始治療; FDA allows a 200 mg TID × 3 d loading dose<br>Off-label prophylaxis (IDSA Aspergillosis 2016): effective but limited by absorption/tolerability; lung transplant: itra or vori for 3–4 mo<br>Nail drug persists ≥6 mo after a 3-mo course (best nail response 6–9 mo after stopping)

**Why:** The column is empty. Notes holds the items that have no schema option (CHF, TDM, spectrum organisms, Mucorales) and the formulation and absorption points that matter most for the capsule. TDM is not covered by any label; it is sourced from IDSA guideline text I retrieved from idsociety.org. PMID 27365388 was verified by esummary. The stocked product is the capsule (non-SUBA), so the IDSA chromatographic targets apply.

**Sources:** US FDA SPORANOX capsules BOXED WARNING / WARNINGS Cardiac Disease, Interchangeability; PRECAUTIONS General, Immunocompromised Patients, Hearing Loss, Pseudoaldosteronism; MICROBIOLOGY Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 §2, §3.1, §4, §5.1.1, §5.1.6, §5.1.9, §6.8, §10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; IDSA Histoplasmosis guideline (last updated 2026-09-16), TDM remarks — https://www.idsociety.org/practice-guideline/histoplasmosis/; IDSA Aspergillosis 2016 (Patterson, CID 2016;63:e1, PMID 27365388), TDM section — https://www.idsociety.org/practice-guideline/aspergillosis/; UK SmPC oral solution §5.1 (EUCAST breakpoints; footnote: monitor azole troughs) — https://www.medicines.org.uk/emc/product/10049/smpc

### B14 · Page body

Build the body on the same template as the other antifungal entries (e.g., Fluconazole/Vfend). Sections: (1) One-line summary: triazole antifungal, PO capsule only; the hospital stocks 易克黴 Icomein 100 mg cap (ICO01). (2) Mechanism + PK (B9). (3) Spectrum and gaps (B6/B13: Candida, Aspergillus, endemic dimorphic fungi, dermatophytes; not Mucorales/Fusarium/Scedosporium; C. glabrata/krusei reduced). (4) Indications: FDA (blasto, histo, aspergillosis salvage, onychomycosis); TW (systemic/deep mycoses incl. candidiasis, cryptococcosis, sporotrichosis, paracoccidioidomycosis, chromomycosis; VVC, dermatophytosis, pityriasis versicolor, oral candidiasis, fungal keratitis, onychomycosis, tinea capitis); guideline/off-label (prophylaxis, CPA/ABPA) marked as such. (5) Dosing tables: adult (B1), renal/HD/CRRT (B2), hepatic (B3), pediatric (B4). (6) Administration: with a full meal, swallow whole, acid-suppression handling, capsule vs solution. (7) Safety: CHF boxed warning, hepatotoxicity, neuropathy, hearing loss, pseudoaldosteronism; monitoring including TDM targets (B7/B8/B13). (8) Drug-interaction table (B10). (9) Pregnancy & lactation (B11/B12). (10) References with URLs: DailyMed setid a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 衛署藥製字第046283號 (insert 108-07-11); UK eMC 10049 (oral solution, reference only — no UK capsule SmPC on eMC); LactMed NBK500573; IDSA Aspergillosis 2016 (PMID 27365388); IDSA Histoplasmosis 2026; Muhl 2005 (PMID 15826289). No storage section.

**Why:** The page body is blank. The owner's other entries carry a structured body with references. Storage is excluded on purpose, per the owner's ground rule.

**Sources:** US FDA SPORANOX capsules — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d555fa-787c-40fb-bb7d-b0d4f7318fd0; TW 易克黴仿單 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC046283%E8%99%9F; UK SmPC oral solution — https://www.medicines.org.uk/emc/product/10049/smpc; LactMed NBK500573 — https://www.ncbi.nlm.nih.gov/books/NBK500573/

### B15 · Renewed date

Set to the date the edits are applied (e.g., 2026-10-05)

**Why:** The other verified entries record a Renewed date when their content is filled.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date property)

## Apply log

- Adult dose: merged both proposals (TW 仿單 systemic/superficial regimens with durations, US blasto/histo/aspergillosis/life-threatening loading, onychomycosis, TW 6.8.2 caveat, IDSA Histo 2026 off-label regimen, capsule/solution non-interchangeability, common dose)
- Renal dose, HD, CRRT: merged (TW 6.7 TDM advice, US AUC drop by CrCl band, t1/2 unchanged, uremia, UK SmPC 4.2, HD/CAPD not dialyzable, CRRT with Muhl 2005 PMID 15826289 verified via esummary, CHF risk note)
- Hepatic dose: merged (no fixed adjustment, avoid with abnormal LFT/active liver disease, cirrhosis PK, TW bioavailability note, fatal hepatotoxicity incl. week 1, LFT on courses >1 month, stop on hepatitis symptoms)
- Pediatric dose: merged (not established US/TW, rat bone defects >=20 mg/kg/day, IDSA Histo 2026 off-label 5 mg/kg dosing with TDM, only 100 mg capsule stocked, do not open)
- Indications: [Aspergillosis, Candidiasis]
- Coverage: [Candida, Aspergillus]
- Side Effects: union of both proposals [GI, LFT↑, hypokalemia, CNS, neuropathy, ototoxicity, hematologic, leukopenia, neutropenia, thrombocytopenia, SJS/TEN, photosensitivity] (all existing options)
- Monitor: union [LFT, electrolyte, neuro]
- Mechanism: merged mechanism/resistance plus PK line (F ~55%, nonlinear, t1/2, protein binding, Vd, CSF, nail persistence); PK moved here instead of duplicating in Notes
- Drug Interactions: merged proposal 1 plus proposal 2 additions (edoxaban, everolimus/sirolimus not recommended, salmeterol, colchicine other patients, atorvastatin, oxycodone/alfentanil/buprenorphine, specific corticosteroids)
- Pregnancy: merged (no FDA letter category, animal data, placental transfer, postmarketing and 1st-trimester data, TW/UK contraindication, US guidance, contraception TW/UK vs US)
- Breastfeeding: merged (TW, US, UK SmPC must not be used, LactMed incl. ~1.5% weight-adjusted dose, fluconazole alternative, infant LFT monitoring)
- Notes: merged (PO only / ICO01 stocked product, CHF and DDI boxed warnings, capsule vs solution, acid/absorption, hepatotoxicity, pseudoaldosteronism, hearing loss/neuropathy, TDM targets IDSA Asp 2016 and IDSA Histo 2026, other approved indications and spectrum without schema tags, reduced susceptibility, inactive organisms, off-label prophylaxis, onychomycosis nail response/contraception)
- Page body: appended '## References' section (FDA DailyMed SPORANOX v31, TW 仿單 衛署藥製字第046283號, UK SmPC eMC 10049 reference only, LactMed NBK500573, IDSA Aspergillosis 2016 PMID 27365388, IDSA Histoplasmosis 2026, Muhl 2005 PMID 15826289). Second body proposal (full template) implemented as References-only, matching the Vfend template which has only a References section; no storage section
- Renewed date: 2026-10-05, is_datetime 0

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
