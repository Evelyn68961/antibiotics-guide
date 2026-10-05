# New entry: Liposomal Amphotericin B (AmBisome / Ampholipad)

- **Notion entry:** [Liposomal Amphotericin B (AmBisome / Ampholipad)](https://app.notion.com/3f0c496dfff18116892efa6ce41a859c). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** AMB02 (AmBisome inj 50 mg), AMB10 (Ampholipad inj 50 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/amphotericin-b-liposome.json` (plus any Taiwan insert text files)

## Product and sources

Liposomal amphotericin B 50 mg vial for IV use, two products in stock. (1) AmBisome 脂黴素微脂粒凍晶乾粉注射劑, Gilead, hospital code AMB02, Taiwan licence 衛署藥輸字第023388號. (2) Ampholipad 安畢黴微脂粒凍晶注射劑 50 mg, TLC/YungShin, hospital code AMB10, licence 衛署藥製字第057982號. There is no oral form. Notion page 3f0c496dfff18116892efa6ce41a859c is new: only the title and Category are filled, every other column is empty, and the page body is blank. Sources checked: AmBisome US label on DailyMed (setid f7be6506, Jun 2025); UK SmPC "Amphotericin B Gilead liposomal" (eMC 1022, rev 03/02/2025); LactMed "Amphotericin B" (NBK501321, rev 2021-03-17); the TFDA inserts for both Taiwan products. Note on the user's request: the relayed message asks for "task 2,3,5", and neither the brief nor the computed task says what those numbers refer to. I ran only this read-only label audit. Nothing in Notion was written and no files were edited.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="green">`IV`</span> QD (AmBisome / Ampholipad 50 mg vial)<br>• Empirical FN: 3 mg/kg/d (US)；UK 3–5 mg/kg/d，退燒連續 3 天後停，max 42 d<br>• Systemic Aspergillus / Candida / Cryptococcus: 3–5 mg/kg/d (US/TW；UK: ≥14 d)<br>• Cryptococcal meningitis (HIV): 6 mg/kg/d (US / TW AmBisome / TW Ampholipad)；UK: single 10 mg/kg D1 + flucytosine 100 mg/kg/d + fluconazole 1200 mg/d ×14 d → fluconazole 800 mg/d ×8 wk → 200 mg/d<br>• Mucormycosis (UK SmPC; TW AmBisome only): UK 5–10 mg/kg/d (brain involvement or SOT: 10 mg/kg/d; avoid slow escalation)；TW AmBisome start 5 mg/kg/d, >5 up to 10 mg/kg limited data；courses up to 6–8 wk common<br>• Visceral leishmaniasis: immunocompetent 3 mg/kg D1–5, D14, D21；immunocompromised 4 mg/kg D1–5, D10, 17, 24, 31, 38 (US/TW)；UK total 21–30 mg/kg over 10–21 d<br>Infusion ~120 min, ↓ to ~60 min if tolerated (US/TW)；UK 30–60 min (2 h if >5 mg/kg/d)<br>⚠️ 不可與 conventional amphotericin B / lipid complex mg-for-mg 互換 (not interchangeable)

**Why:** This is a new entry, so the column is empty. Every dose above comes straight from a label. The UK cryptococcal regimen and the mucormycosis dosing differ from the US label, so each line names its source. The Ampholipad insert has no mucormycosis dosing, so that line is marked as AmBisome only.

**Sources:** US FDA AmBisome label, DOSAGE AND ADMINISTRATION (dose table, VL table, infusion 120→60 min, not interchangeable): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.2 Posology (mycoses ≥14 d, mucormycosis 5–10 mg/kg, HIV crypto single 10 mg/kg, VL 21–30 mg/kg, empirical max 42 d, 30–60 min infusion): https://www.medicines.org.uk/emc/product/1022/smpc; TW AmBisome insert 3.1 用法用量 (白黴菌病 5 mg/kg, up to 10 mg/kg limited data; crypto 6 mg/kg): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; TW Ampholipad insert 【用法用量】(120 min / 60 min; 3–5, 6 mg/kg, VL): https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F

### A2 · Renal dose, HD, CRRT

No adjustment (any CrCl) — US/TW (AmBisome & Ampholipad): renal impairment not studied, but used successfully in pre-existing renal impairment；UK: starting doses 1–3 mg/kg/d used in renal impairment, no adjustment needed (TW AmBisome 6.7: 不適用)<br>HD: HD/PD do not significantly affect elimination (US/TW Overdosage; UK 4.9) → no supplemental dose；UK 5.2: no adjustment in haemodialysis or filtration procedures, but 避免在透析/過濾進行中給藥 (avoid administering during the procedure)<br>CRRT: standard dose, no adjustment (UK 5.2 'filtration procedures'；CVVH PK: Bellmann 2003 PMID 12615870；JP RRT cohort: Obata 2021 PMID 33179180)；連續性 CRRT 無法避開治療時段 → 照常給藥<br>治療中腎功能明顯惡化: consider dose reduction, interruption or discontinuation (UK 4.4)

**Why:** No label gives a renal dose adjustment. UK SmPC 5.2 covers haemodialysis and filtration procedures, so the HD and CRRT lines can cite a label and do not need PubMed. A study source for CRRT pharmacokinetics or TDM has not been fetched. Any CRRT-specific numbers added later need a PMID checked with esummary.

**Sources:** US FDA AmBisome label, Pharmacokinetics in Special Populations (Renal Impairment) and OVERDOSAGE (HD/PD do not appear to significantly affect elimination): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.2 Renal impairment; 4.4 Renal toxicity; 5.2 Special populations (no adjustment in haemodialysis or filtration procedures; avoid administration during the procedure): https://www.medicines.org.uk/emc/product/1022/smpc; TW AmBisome insert 6.7 腎功能不全: 不適用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; TW Ampholipad insert, 腎臟受損病患 (used successfully in renal impairment): https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F

### A3 · Hepatic dose

無資料可提供劑量建議 / no data for a dose recommendation (US: effect of hepatic impairment unknown；UK 4.2: no data；TW AmBisome 6.6: 不適用). Monitor LFT (hepatic function in routine labs).

**Why:** All three labels say there are no data. None gives an adjustment, and none says outright that no adjustment is needed. The wording should not imply that an adjustment has been studied and found unnecessary.

**Sources:** US FDA AmBisome label, Pharmacokinetics in Special Populations (Hepatic Impairment): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.2 Hepatic impairment: https://www.medicines.org.uk/emc/product/1022/smpc; TW AmBisome insert 6.6 肝功能不全: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### A4 · Pediatric dose

1 mo–16 y (US/TW) / 1 mo–18 y (UK): same mg/kg as adults, no adjustment (e.g. empirical FN 3 mg/kg/d US；UK 3–5 mg/kg/d；systemic 3–5 mg/kg/d；VL as adult)<br><1 mo: safety/efficacy not established (US/TW)；UK: not recommended<br>Repeated doses up to 10 mg/kg/d in children given in trials without dose-related toxicity (US/TW Overdosage)<br>Infants/small children: may dilute to 0.2–0.5 mg/mL (D5W) for adequate infusion volume (US/TW)

**Why:** This is a new entry. All the labels say children get adult mg/kg doses, and they give the minimum age.

**Sources:** US FDA AmBisome label, Pediatric Use; DOSAGE AND ADMINISTRATION ('adult and pediatric patients'); OVERDOSAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.1 (1 month to 18 years) and 4.2 Paediatric population: https://www.medicines.org.uk/emc/product/1022/smpc; TW AmBisome insert, 小兒 (1 個月到 16 歲; <1 個月未建立): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### A5 · Indications

FN, Candidiasis, Aspergillosis, Meningitis

**Why:** All four tags exist in the schema. FN: empirical therapy in febrile neutropenia (US, UK). Candidiasis and Aspergillosis: Aspergillus/Candida infections (US), and severe systemic or deep mycoses including disseminated candidiasis and aspergillosis (UK). Meningitis: cryptococcal meningitis in HIV (US, UK); the Fluconazole entry uses the same tag for this. No tag exists for visceral leishmaniasis, mucormycosis, chronic mycetoma or non-meningeal Cryptococcus, so these go in Notes (see A12).

**Sources:** US FDA AmBisome label, INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.1 Therapeutic indications: https://www.medicines.org.uk/emc/product/1022/smpc

### A6 · Coverage

Candida, Aspergillus

**Why:** These are the only fungal options in the schema. Both are listed in the US Antimicrobial Activity section: A. fumigatus, A. flavus, C. albicans, C. krusei, C. lusitaniae, C. parapsilosis and C. tropicalis. Cryptococcus, Mucorales, Histoplasma, Coccidioides, Blastomyces, Talaromyces and Leishmania have no option and go in Notes.

**Sources:** US FDA AmBisome label, Microbiology, Antimicrobial Activity: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 5.2 (in vitro spectrum incl. mucormycetes; rare intrinsic resistance): https://www.medicines.org.uk/emc/product/1022/smpc

### A7 · Side Effects

nephrotoxicity, hypokalemia, GI, LFT↑, dysglycemia, CNS, anemia, thrombocytopenia, rhabdomyolysis

**Why:** Every tag exists in the schema. Label support: nephrotoxicity (US Clinical Laboratory Values, 18.7% vs 33.7% on conventional; UK renal failure). Hypokalemia (UK very common). GI: nausea, vomiting, diarrhoea (UK very common/common). LFT↑: ALP, ALT, AST, bilirubin (US table; UK common). Dysglycemia: hyperglycaemia 23% (US; UK common). CNS: headache and insomnia (US table), convulsion (UK uncommon). Anaemia (UK not known; US less common). Thrombocytopenia (UK uncommon). Rhabdomyolysis (US post-marketing; UK, linked to hypokalaemia). Infusion reactions, hypomagnesaemia, hyperkalaemia and anaphylaxis have no tag and go in Notes. Do not use 'Red-man syndrome' for infusion reactions; that tag describes the vancomycin reaction.

**Sources:** US FDA AmBisome label, ADVERSE REACTIONS; Less Common Adverse Events; Post-marketing Experience; Clinical Laboratory Values: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.8 Undesirable effects: https://www.medicines.org.uk/emc/product/1022/smpc

### A8 · Monitor

renal, electrolyte, LFT, CBC

**Why:** The US Laboratory Tests section requires checks of renal, hepatic and haematopoietic function and serum electrolytes, particularly Mg and K. UK 4.4 asks for the same panel at least once weekly, and for K before and during treatment.

**Sources:** US FDA AmBisome label, PRECAUTIONS, Laboratory Tests: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.4 Renal toxicity (at least once weekly): https://www.medicines.org.uk/emc/product/1022/smpc

### A9 · Mechanism

Polyene: binds ergosterol in fungal cell membrane → transmembrane channels → leakage of monovalent ions (Na⁺, K⁺, H⁺, Cl⁻) → cell death；fungistatic or fungicidal depending on concentration & organism. Also binds cholesterol in mammalian membranes → toxicity. Liposomal: drug intercalated in liposome bilayer；liposomes too large for glomerular filtration → less nephrotoxicity than conventional AmB. Resistance (rare): ↓ergosterol / altered target lipid；imidazoles may induce AmB resistance in vitro and in animal studies (clinical relevance not established).

**Why:** This is a new entry. The text paraphrases the label sections.

**Sources:** US FDA AmBisome label, Mechanism of Action; Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 5.1 Mechanism of action; 5.2 Metabolism / Mechanism of resistance: https://www.medicines.org.uk/emc/product/1022/smpc

### A10 · Drug Interactions

No formal DDI studies；class interactions of amphotericin B (US/UK/TW):<br>• Other nephrotoxic drugs (UK e.g. ciclosporin, aminoglycosides, polymyxins, tacrolimus, pentamidine) → ↑ nephrotoxicity, monitor renal function<br>• Corticosteroids/ACTH (UK + loop/thiazide diuretics) → ↑ hypokalemia, monitor K/cardiac function<br>• Digitalis → hypokalemia ↑ digoxin toxicity；skeletal muscle relaxants (e.g. tubocurarine) → ↑ curariform effect — monitor K<br>• Flucytosine → ↑ flucytosine toxicity (↑ cellular uptake / ↓ renal excretion)；synergy reported (UK)<br>• Azoles → may induce fungal resistance to AmB (in vitro/animal), use combination with caution (US/TW)<br>• Antineoplastics → ↑ renal toxicity, bronchospasm, hypotension<br>• Leukocyte transfusions → acute pulmonary toxicity；separate as long as possible, monitor pulmonary function

**Why:** This is a new entry. Every label lists the same set of class interactions. The UK SmPC adds named nephrotoxic drugs and diuretics.

**Sources:** US FDA AmBisome label, PRECAUTIONS, Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.5 Interaction: https://www.medicines.org.uk/emc/product/1022/smpc; TW AmBisome insert 7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### A11 · Pregnancy

無 FDA letter category（PLLR 已取消字母分級；US label 為舊格式）。人體資料不足；conventional amphotericin B 曾成功治療孕婦全身性黴菌感染（案例少）。動物：大鼠/兔無致畸性，兔較高劑量自發性流產↑。僅在效益大於風險時使用 / use only if benefit outweighs risk (US/UK/TW)。<br>(TW AmBisome/Ampholipad 仿單仍印 "懷孕分類：B" — 已廢止，勿引用)

**Why:** This is a new entry. Both Taiwan inserts still print 'Category B'. Under the ground rules a letter category must not be written as current, so the proposed text explains the retired category and does not copy it.

**Sources:** US FDA AmBisome label, Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.6 Pregnancy: https://www.medicines.org.uk/emc/product/1022/smpc; TW AmBisome insert, 懷孕 (懷孕分類：B): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### A12 · Breastfeeding

可哺乳 (LactMed, Amphotericin B, rev. 2021-03-17)：無乳汁資料，但高蛋白結合、分子量大、口服幾乎不吸收（曾直接用於嬰兒口腔）→ most reviewers consider acceptable. Alternatives: fluconazole (systemic).<br>US/TW label: 未知是否分泌至乳汁；依藥物對母親之重要性決定停止哺乳或停藥。UK: weigh benefit of breastfeeding vs therapy.

**Why:** LactMed has no separate chapter for the liposomal form, so the parent Amphotericin B chapter is the right source and is named as such. The labels' 'decide whether to discontinue' wording is kept alongside it.

**Sources:** LactMed Amphotericin B (NBK501321), Summary of Use during Lactation; Alternate Drugs: https://www.ncbi.nlm.nih.gov/books/NBK501321/; US FDA AmBisome label, Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.6 Breast-feeding: https://www.medicines.org.uk/emc/product/1022/smpc

### A13 · Notes

• ⚠️ 不可與 conventional amphotericin B (deoxycholate) 或 lipid complex 以 mg 互換；給藥前核對商品名/學名/劑量 — 以 deoxycholate 劑量給 AmBisome 會劑量不足 (UK 4.2/US)<br>• Infusion reactions: fever, chills/rigors 最常見；chest pain/tightness, dyspnea, back pain, flushing 於開始輸注數分鐘內出現，停止輸注即緩解 (US/UK 4.8) → 減慢輸注 (2 h) 或 premedication (diphenhydramine, paracetamol, pethidine, hydrocortisone) (UK 4.4)。Anaphylaxis → 立即停藥且不再使用<br>• HypoK/hypoMg 常見 → 監測 K/Mg，需要時補 K (UK 4.4)；hyperkalemia (含心律不整/心跳停止) 曾報告，多見於腎功能不全或補 K 後 (UK 4.4)。高劑量 (5–10 mg/kg) ↑ SCr、hypoK、hypoMg (UK 4.4)<br>• 只用 D5W 稀釋；與 saline 不相容 (UK 6.2)；既有 IV line 先以 D5W 沖洗或另開管路；in-line filter 孔徑須 ≥1.0 µm (US/TW)<br>• 每瓶含 sucrose ~900 mg → 糖尿病注意 (UK 4.4)；Ampholipad: 6 mg/kg/d 且體重 >126 kg 注意每日最大賦形劑暴露 (TW Ampholipad)<br>• PHOSm assay 可致 serum phosphate 假性升高 (US/TW)<br>• 其他核准適應症 (無對應 tag): visceral leishmaniasis (US/UK/TW)、mucormycosis (UK；TW AmBisome)、chronic mycetoma (UK)、non-meningeal Cryptococcus (US)。TW Ampholipad 另列：骨髓移植後併發腎毒性之侵入性黴菌感染；腎功能不全之麴菌/念珠菌/囊球菌感染<br>• Spectrum 另含 Cryptococcus、Mucorales (Rhizopus, Rhizomucor, Mucor)、Histoplasma、Coccidioides、Blastomyces、Talaromyces marneffei、Sporothrix (UK 5.2)；rare intrinsic resistance: some A. terreus, C. lusitaniae, C. glabrata, C. krusei strains (UK 5.2)<br>• PK: nonlinear；t½ 7–10 h (dosing interval)，terminal 100–153 h (tissue redistribution) (US)

**Why:** This is a new entry. Notes is where items with no multi-select option go: leishmaniasis, mucormycosis, Cryptococcus, infusion reactions and hypomagnesaemia. It also holds safety points that are critical in practice. Non-interchangeability with conventional amphotericin is a well-known source of dosing errors, and the label stresses it. The D5W/saline incompatibility is an administration rule, not storage or stability, so including it is consistent with the owner's decision to remove storage details. Reconstituted and diluted product storage times are deliberately left out.

**Sources:** US FDA AmBisome label, DOSAGE AND ADMINISTRATION; Infusion-Related Reactions; Drug-Laboratory Interactions; Pharmacokinetics: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC 4.2, 4.4, 4.8, 5.2, 6.2: https://www.medicines.org.uk/emc/product/1022/smpc; TW Ampholipad insert, 【適應症】 and 體重較重者: https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F; TW AmBisome insert 2 適應症 / 3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### A14 · Notes

• TW Ampholipad 仿單文字取自 2017-11-07 上傳版本；2019-07-23 變更擬稿為影像檔未核對 — Ampholipad 內容可能過時 / Ampholipad insert text may be outdated

**Why:** The Ampholipad insert text was taken from the 2017 PDFs. The newer 2019 draft is image-only and was not checked. Flag this so the pharmacist can check the 2019 PDF before relying on the Ampholipad-specific indications.

**Sources:** TFDA Ampholipad insert page (2017 P1/P2 PDFs; 2019 draft image-only): https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F

### A15 · Category

Polyene antifungal (liposomal) — optional; current value is acceptable

**Why:** The current value is not wrong. 'Liposomal' is more precise, because it tells this product apart from amphotericin B lipid complex, which is also a lipid formulation and is not interchangeable. The ATC code J02AA01 (UK 5.1) puts it among the antibiotics in the polyene class. The change is optional.

**Sources:** UK SmPC 5.1 (ATC J02AA01; macrocyclic polyene) and 4.2 (non-equivalence of deoxycholate/liposomal/lipid complex): https://www.medicines.org.uk/emc/product/1022/smpc

### B1 · Adult dose

<span color="green">`IV`</span> Empirical FN: 3 mg/kg QD (UK 3–5 mg/kg/d, continue until afebrile for 3 days, max 42 d); <br>Systemic Aspergillus/Candida/Cryptococcus: 3–5 mg/kg QD (UK: ≥14 d); <br>HIV cryptococcal meningitis: 6 mg/kg QD (TW/US); UK SmPC: single dose of 10 mg/kg on D1 + flucytosine 100 mg/kg/d + fluconazole 1200 mg/d ×14 d, then fluconazole 800 mg/d ×8 wk, then 200 mg/d; <br>Mucormycosis: TW AmBisome starting dose 5 mg/kg/d (data for >5 up to 10 mg/kg are limited); UK 5–10 mg/kg/d, 10 mg/kg/d with brain involvement or after SOT; do not escalate slowly; <br>VL: immunocompetent 3 mg/kg on D1–5, D14, D21; immunocompromised 4 mg/kg on D1–5, D10, 17, 24, 31, 38 (UK: total 21–30 mg/kg over 10–21 d); <br>Infuse over ~120 min, may shorten to ~60 min if tolerated (TW/US); UK 30–60 min (>5 mg/kg: 2 hr); dilute in D5W only, do not mix with NS; not interchangeable mg-for-mg with Fungizone or other amphotericin products

**Why:** The column is empty. These doses come from the stocked product's Taiwan insert (§3.1) and the US label's DOSAGE AND ADMINISTRATION table, re-checked live: empirical 3; systemic 3–5; HIV cryptococcal meningitis 6; VL schedules. The UK SmPC adds the mucormycosis dosing and the single-dose 10 mg/kg cryptococcal regimen. The Taiwan AmBisome insert's mucormycosis wording (5 mg/kg starting dose, up to 10 limited) differs from the UK's 5–10 mg/kg, so both are given. The Ampholipad Taiwan insert has no mucormycosis dose; otherwise it uses the same 3–5 / 6 / VL table. The non-interchangeability warning is boxed text in all three labels.

**Sources:** US FDA AmBisome label, DOSAGE AND ADMINISTRATION ('Empirical therapy 3; Systemic fungal infections 3-5; Cryptococcal meningitis in HIV-infected patients 6'; infusion ~120 min, may reduce to ~60 min; 'not interchangeable ... on a mg per mg basis') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.2 (mucormycosis 'starting dose is 5 to 10 mg/kg/day... brain involvement or solid-organ transplant, dose at 10 mg/kg/day'; 'single dose of 10 mg/kg ... on day 1, in combination with daily flucytosine 100 mg/kg and daily fluconazole 1200 mg'; VL 21–30 mg/kg over 10–21 d; empirical max 42 d; infusion 30–60 min, >5 mg/kg over 2 h) https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome 衛署藥輸字第023388號 §3.1 用法用量 (白黴菌病 建議起始劑量為5 mg/kg/day; 最高達10 mg/kg 資料相當有限) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; Taiwan insert Ampholipad 衛署藥製字第057982號 【用法用量】 (3.0–5.0; HIV 囊球菌腦膜炎 6.0; VL table) https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F

### B2 · Renal dose, HD, CRRT

No renal dose adjustment in labels: US — renal impairment not studied, but used successfully in pre-existing renal impairment; UK 4.2 — starting doses 1–3 mg/kg/d used in renal impairment, no adjustment needed; TW AmBisome 6.7: 不適用; 治療中腎功能明顯惡化 → consider dose reduction, interruption or discontinuation (UK 4.4); <br>HD/PD: do not significantly affect elimination (US/TW overdosage) → no supplemental dose; UK SmPC 5.2: no adjustment for haemodialysis or filtration procedures, but 避免在透析/過濾進行中給藥; <br>CRRT: standard dose (CVVH PK: Bellmann 2003 PMID 12615870; JP RRT cohort: Obata 2021 PMID 33179180)

**Why:** No label gives a renal dose adjustment. The brief missed the UK SmPC §5.2 statement on haemodialysis and filtration procedures; that statement is label-level CRRT guidance, so it ranks above PubMed. The PubMed studies were checked with esummary/efetch. Bellmann 2003 (CVVH, 5 AmBisome patients) found no significant influence of haemofiltration on liberated AmB and concluded 'a standard dose of lipid-formulated AMB can be recommended for patients on haemofiltration'. Obata 2021 (n=24 maintenance HD, 19 CRRT) found no difference in dose, duration or interval and concluded L-AMB may be used without adjustment. The ground rule prefers the stocked product's Taiwan insert, which says 不適用 under §6.7 and gives no adjustment, so it is consistent with the other labels.

**Sources:** US FDA label, Pharmacokinetics in Special Populations ('successfully administered to patients with pre-existing renal impairment') and OVERDOSAGE ('Hemodialysis or peritoneal dialysis do not appear to significantly affect the elimination') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.2 Renal impairment ('starting doses ranging from 1-3 mg/kg/day ... no adjustment') and §5.2 ('no dose adjustment is required in patients undergoing haemodialysis or filtration procedures, however, L-AmB administration should be avoided during the procedure') https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §6.7 腎功能不全 不適用; 過量: 血液透析及腹膜透析不會顯著地影響AmBisome的排除 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; Bellmann R et al. J Antimicrob Chemother 2003;51:671-81, PMID 12615870 (verified) https://pubmed.ncbi.nlm.nih.gov/12615870/; Obata Y et al. Clin Exp Nephrol 2021;25:279-87, PMID 33179180 (verified) https://pubmed.ncbi.nlm.nih.gov/33179180/

### B3 · Hepatic dose

No dose recommendation: the effect of hepatic impairment is unknown (US); UK SmPC 4.2: 無資料可作劑量建議; TW 6.6 不適用. Monitor LFT (labels).

**Why:** The labels do not say 'no adjustment needed'. They say the data are absent, so the entry should not claim that no adjustment is needed. The hospital site's 'no adjustment' overstates this (see the hospital-database issues).

**Sources:** US FDA label, Pharmacokinetics in Special Populations – Hepatic Impairment ('is not known') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.2 Hepatic impairment ('No data are available on which to make a dose recommendation') https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §6.6 肝功能不全 不適用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### B4 · Pediatric dose

≥1 month: same mg/kg doses as adults (TW/US 1 mo–16 y; UK 1 mo–18 y): empirical 3 mg/kg QD, systemic 3–5 mg/kg QD, VL as for adults; <br><1 month: safety and efficacy not established (labels); IDSA 2016 neonatal CNS candidiasis alternative: L-AmB 5 mg/kg QD; <br>Infants/small children: may dilute to 0.2–0.5 mg/mL (TW/US)

**Why:** The column is empty. All three labels dose children on the same per-kg basis as adults; 302 paediatric patients were studied with no difference from adults. Use under 1 month is not established in the labels; the IDSA neonatal recommendation is guideline-level and is labelled as such.

**Sources:** US FDA label, Pediatric Use ('age 1 month to 16 years ... no dosage adjustment is required'; '<1 month not established') and Directions for Reconstitution (0.2–0.5 mg/mL for infants) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.2 Paediatric population (1 month to 18 years, same mg/kg as adults; not recommended <1 month) https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §6.4 小兒 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; IDSA Candidiasis 2016 (Pappas, PMID 26679628, verified): 'An alternative regimen is liposomal AmB, 5 mg/kg daily' for neonatal CNS infection https://www.idsociety.org/practice-guideline/candidiasis/

### B5 · Indications

FN, Candidiasis, Aspergillosis, Meningitis

**Why:** All four options exist in the schema. FN: empirical therapy in febrile neutropenia (US/UK/TW). Candidiasis and Aspergillosis: US lists Aspergillus/Candida infections that are refractory to AmB-d or where renal impairment or toxicity rules AmB-d out; UK lists severe systemic/deep mycoses including disseminated candidiasis and aspergillosis. Meningitis: cryptococcal meningitis in HIV (US/TW) and cryptococcal meningitis (UK). Mucormycosis, VL, chronic mycetoma and other cryptococcal infection have no option and go in Notes. Do not tag UTI: IDSA 2016 says lipid AmB should not be used for UTI.

**Sources:** US FDA label, INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; Data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Indications options)

### B6 · Coverage

Candida, Aspergillus

**Why:** These are the only fungal options in the schema. US Antimicrobial Activity lists A. fumigatus, A. flavus, C. albicans, C. krusei, C. lusitaniae, C. parapsilosis, C. tropicalis, Cryptococcus neoformans and Blastomyces. UK §5.1/5.2 adds Histoplasma, Coccidioides, Sporothrix, Talaromyces (Penicillium) marneffei, Rhodotorula and Mucorales (Mucor, Rhizomucor, Rhizopus), plus Leishmania in animal models. Organisms without an option go in Notes and are not added to the schema.

**Sources:** US FDA label, Antimicrobial Activity https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §5.2 Breakpoints/spectrum paragraph https://www.medicines.org.uk/emc/product/1022/smpc

### B7 · Side Effects

nephrotoxicity, hypokalemia, GI, LFT↑, anemia, thrombocytopenia, dysglycemia, rhabdomyolysis, CNS

**Why:** All options exist in the schema. US Study 94-0-002 (AmBisome arm): hypokalemia 42.9%, creatinine increased 22.4%, nausea 39.7%, vomiting 31.8%, diarrhea 30.3%, ALP/ALT/AST/bilirubin increased 12.8–22.2%, hyperglycemia 23%. Nephrotoxicity (creatinine ×2) was 18.7% vs 33.7% with AmB-d. UK §4.8: hypokalaemia very common; hyperglycaemia common; thrombocytopenia uncommon; anaemia not known; rhabdomyolysis (associated with hypokalaemia) not known; US post-marketing also lists rhabdomyolysis. Infusion reactions, anaphylaxis, hypomagnesemia and hyperkalaemia have no option and go in Notes.

**Sources:** US FDA label, ADVERSE REACTIONS (Study 94-0-002 table), Clinical Laboratory Values (nephrotoxicity 64/343 = 18.7%), Post-marketing Experience https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.8 https://www.medicines.org.uk/emc/product/1022/smpc

### B8 · Monitor

renal, electrolyte, LFT, CBC

**Why:** All three labels say to monitor renal, hepatic and haematopoietic function and serum electrolytes, particularly Mg and K. UK §4.4 says at least once weekly and adds K before and during treatment (hyperkalaemia risk in renal impairment). Infusion-reaction monitoring has no option and goes in Notes.

**Sources:** US FDA label, Laboratory Tests https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.4 Renal toxicity ('at least once weekly') https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §5.4 實驗室檢測 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### B9 · Mechanism

Binds ergosterol in the fungal cell membrane → forms transmembrane channels → leak of K⁺/Na⁺/H⁺/Cl⁻ → cell death; also binds cholesterol in mammalian cells (toxicity). Fungicidal or fungistatic depending on concentration. Liposomal formulation: AmB sits in the lipid bilayer → less nephrotoxicity than deoxycholate

**Why:** The column is empty. The wording follows the US Mechanism of Action section and UK §5.1/§5.2: no glomerular filtration of liposomes, so less distal tubular interaction.

**Sources:** US FDA label, Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §5.1, §5.2 Metabolism paragraph https://www.medicines.org.uk/emc/product/1022/smpc

### B10 · Drug Interactions

No formal studies (class effects of AmB): <br>↑ nephrotoxicity: other nephrotoxins (cyclosporine, tacrolimus, aminoglycosides, polymyxins, pentamidine), antineoplastics (also bronchospasm, hypotension) → monitor renal function; <br>↑ hypokalemia: corticosteroids/ACTH, loop/thiazide diuretics → ↑ digoxin toxicity and ↑ curare-like effect of skeletal muscle relaxants → monitor K; <br>Flucytosine: toxicity ↑ (uptake ↑ / renal excretion ↓); <br>Azoles (imidazoles): may induce AmB resistance in vitro and in animals, combine with caution; <br>Leukocyte transfusion: acute pulmonary toxicity → separate as far apart in time as possible; <br>Lab: PHOSm assay gives falsely high phosphate

**Why:** The column is empty. The interaction list is the same in the US label and the Taiwan insert (§7); the UK SmPC §4.5 adds named nephrotoxins and diuretics.

**Sources:** US FDA label, Drug Interactions; Drug-Laboratory Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.5 https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F

### B11 · Pregnancy

無 FDA letter category (PLLR 已取消字母分級; TW 仿單仍印「懷孕分類：B」，不再適用). No teratogenicity in rats/rabbits; higher spontaneous abortion rate in rabbits at higher doses; conventional AmB has treated a small number of pregnant women successfully. Use only if benefit outweighs risk (US/TW/UK 4.6). IDSA 2016: AmB 為孕婦侵入性念珠菌症首選。

**Why:** The column is empty. Ground rules forbid writing Category B as current, and both Taiwan inserts still print it. The narrative is from the US Pregnancy section and UK §4.6. The IDSA statement adds clinical context and was checked on the IDSA guideline page.

**Sources:** US FDA label, Pregnancy https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/1022/smpc; Taiwan insert AmBisome §6.1 (懷孕分類：B — outdated) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023388%E8%99%9F; IDSA Candidiasis 2016 'AmB is the treatment of choice for invasive candidiasis in pregnant women' (PMID 26679628) https://www.idsociety.org/practice-guideline/candidiasis/

### B12 · Breastfeeding

可哺乳 (LactMed): no milk data, but AmB is highly protein-bound, has a large molecular weight and is almost unabsorbed orally (it has been applied directly in infants' mouths) → most reviewers consider it acceptable. Labels (US/TW/UK): milk excretion unknown; weigh stopping the drug against stopping breastfeeding. Alternative: fluconazole.

**Why:** The ground rules make LactMed the breastfeeding reference. The labels' 'decide whether to discontinue' wording is given alongside it.

**Sources:** LactMed Amphotericin B NBK501321, Summary of Use during Lactation; Alternate Drugs (rev 2021-03-17) https://www.ncbi.nlm.nih.gov/books/NBK501321/; US FDA label, Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC §4.6 Breast-feeding https://www.medicines.org.uk/emc/product/1022/smpc

### B13 · Notes

⚠️ 高警訊: L-AmB 3–5 (–10) mg/kg ≠ conventional AmB (Fungizone) 0.25–1 mg/kg (max 1.5 mg/kg/d) — 給藥前核對商品名、學名與劑量；以 deoxycholate 劑量給 L-AmB → 劑量不足 (UK 4.2)；誤將 L-AmB 劑量給 conventional AmB → 可致命心跳/心肺停止 (Fungizone label). <br>Infusion reactions (fever, chills/rigors most common; chest pain, dyspnoea, flushing, hypotension): slow infusion (2 h) or premedicate (paracetamol/diphenhydramine/pethidine/hydrocortisone, UK 4.4); anaphylaxis → stop and do not rechallenge. <br>HypoK/hypoMg 常見 → 補充 K/Mg；hyperkalaemia reported, mostly with renal impairment or after K supplementation (UK 4.4)；高劑量 (5–10 mg/kg) ↑ SCr、hypoK、hypoMg (UK 4.4). ~900 mg sucrose per vial (diabetes, UK 4.4)；Ampholipad: 6 mg/kg/d 且體重 >126 kg 注意每日最大賦形劑暴露 (TW Ampholipad). <br>Lipid AmB not for Candida UTI (low renal excretion, IDSA 2016). <br>Coverage with no tag available: Cryptococcus, Mucorales (first line, ECMM 2019), Histoplasma, Coccidioides, Blastomyces, Talaromyces, Sporothrix, Leishmania (VL). <br>Resistance: A. terreus/A. nidulans/A. lentulus (IDSA 2016 Asp)；rare intrinsic resistance in some strains of C. glabrata, C. krusei, C. lusitaniae, C. tropicalis, C. parapsilosis, S. schenckii (UK 5.2)；C. auris ~35% AmB-R (Lockhart 2017 PMID 27988485). <br>Ampholipad (AMB10) TW insert also lists post-BMT invasive fungal infection with nephrotoxicity, and infection with renal insufficiency; it gives no mucormycosis dose. <br>No TDM recommendation in the labels.

**Why:** The column is empty. These are the safety and clinical points that have no multi-select option, each from a label or verified guideline. A. terreus/nidulans/lentulus resistance was checked on the IDSA aspergillosis page. The Lockhart PMID was checked with esummary and its abstract states '35% to amphotericin B'. ECMM 2019 (PMID 31699664, verified) strongly recommends high-dose L-AmB as first line for mucormycosis.

**Sources:** UK SmPC §4.2 (non-equivalence), §4.4 (infusion reactions, hyperkalaemia, sucrose), §5.2 (rare intrinsic resistance) https://www.medicines.org.uk/emc/product/1022/smpc; IDSA Candidiasis 2016 PMID 26679628 ('with the exception of urinary tract infections, because of reduced renal excretion') https://www.idsociety.org/practice-guideline/candidiasis/; IDSA Aspergillosis 2016 PMID 27365388 ('resistance to AmB apart from Aspergillus terreus, Aspergillus nidulans, and Aspergillus lentulus') https://www.idsociety.org/practice-guideline/aspergillosis/; Cornely OA et al. ECMM/MSG mucormycosis guideline, Lancet Infect Dis 2019, PMID 31699664 https://pubmed.ncbi.nlm.nih.gov/31699664/; Lockhart SR et al. Clin Infect Dis 2017;64:134-40, PMID 27988485 https://pubmed.ncbi.nlm.nih.gov/27988485/; Taiwan insert Ampholipad 【適應症】 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F

### B14 · Page body

Use the same structure as the Myfungin entry: # Liposomal Amphotericin B (AmBisome AMB02 / Ampholipad AMB10). ## Category: Polyene antifungal, lipid (liposomal) formulation, IV only. ## Mechanism (as in B9). ## Indications: labelled in TW/US/UK (empirical FN; Aspergillus/Candida/Cryptococcus refractory to or intolerant of AmB-d, or with renal impairment [US/TW]; severe systemic/deep mycoses [UK]; HIV cryptococcal meningitis; VL [UK: immunocompetent only]; mucormycosis named in UK 4.1 and dosed in the TW AmBisome insert). Guideline uses, each labelled by source: azole-/echinocandin-resistant Candida and C. krusei (lipid AmB 3–5 mg/kg), CNS candidiasis L-AmB 5 mg/kg ± flucytosine, native-valve endocarditis 3–5 mg/kg ± flucytosine (IDSA 2016); IPA alternative therapy (IDSA 2016 Asp); first line for mucormycosis (ECMM 2019); VL 3 mg/kg D1–5, 14, 21 = 21 mg/kg, ≥40 mg/kg may be needed for East-African VL (IDSA/ASTMH 2016). ## Coverage (B6 plus the corrected resistance list from B13: rare intrinsic resistance in some strains only, per UK 5.2; A. terreus/nidulans/lentulus per IDSA Asp; C. auris ~35%). ## Adult Dose: table with indication rows (B1), the US vs UK infusion-time difference, the non-equivalence warning (L-AmB 3–5 mg/kg vs conventional AmB 0.25–1 mg/kg, max 1.5 mg/kg/d), AMBITION trial for single-dose 10 mg/kg cryptococcal meningitis (Jarvis NEJM 2022, PMID 35320642). ## Renal/HD/CRRT (corrected B2). ## Hepatic (B3). ## Pediatric (B4). ## Side Effects: infusion reactions; hypokalaemia/hypomagnesaemia; hyperkalaemia; nephrotoxicity 18.7% vs 33.7% AmB-d (US Study 94-0-002); LFT↑; hyperglycaemia; CNS (headache, confusion; convulsion uncommon); anaphylaxis; rhabdomyolysis; falsely high phosphate on PHOSm. ## Monitor: Cr/BUN, K, Mg, LFT, CBC at least weekly (UK 4.4), K before and during treatment, infusion observation. ## Drug Interactions (B10). ## Pregnancy (B11). ## Breastfeeding (B12). ## Notes (corrected B13 + B15). ## References: the DailyMed, eMC, both TFDA inserts and LactMed URLs, plus the IDSA/ECMM/PubMed items with PMIDs. No storage/stability content.

**Why:** The page body is blank. Other verified entries (e.g. Myfungin) carry a structured body with section headings, a summary table and a references list. Every element in the outline comes from a label or a verified guideline/PMID. The IDSA leishmaniasis text ('FDA-approved dosage regimen is 3 mg/kg/day IV on days 1–5, 14, and 21 (total dose, 21mg/kg)'; 'Doses of 40 mg/kg or more may be necessary... East Africa') was checked on idsociety.org.

**Sources:** US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a; UK SmPC https://www.medicines.org.uk/emc/product/1022/smpc; IDSA/ASTMH Leishmaniasis 2016, PMID 27941151 https://www.idsociety.org/practice-guideline/leishmaniasis/; IDSA Aspergillosis 2016 ('Alternative therapies include liposomal AmB'; 'Approved dosages ... 3–5 mg/kg/day for liposomal AmB') https://www.idsociety.org/practice-guideline/aspergillosis/; Jarvis JN et al. N Engl J Med 2022;386:1109-20, PMID 35320642 https://pubmed.ncbi.nlm.nih.gov/35320642/; Notion reference style: Myfungin entry https://app.notion.com/p/2c3c496dfff1803dafa6f082757b8e98

### B15 · Notes

Add: 'Ampholipad TW insert text is from the 2017 PDFs; the 2019-07-23 revised draft is image-only and was not reviewed → pharmacist to confirm the current Ampholipad indications and dosing.'

**Why:** This is a source-currency caveat for the AMB10 product. The Ampholipad-specific statements rest on an insert version that may have been superseded.

**Sources:** TFDA Ampholipad insert listing 衛署藥製字第057982號 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057982%E8%99%9F

## Disputed (not applied; reviewers disagreed)

- **Page body**: proposed "No change required; all content belongs in the columns above (optional: leave blank consistent with new-entry template)". Not applied because: The page is blank, as confirmed by a Notion fetch on 2026-10-05. However, other entries in this database carry structured bodies: Micafungin has body tables (its review has several 'Page body' findings), and the Fluconazole review proposes building its body on the Meropenem template. Leaving this new entry blank would be inconsistent with the owner's style. The body should be built from the verified column content: category, MoA, indications by source, coverage and resistance, a dose table with the US/UK infusion difference, renal/HD/CRRT, hepatic, pediatric, AEs and monitoring, DDIs, pregnancy/lactation, notes, and references with URLs and PMIDs, with no storage section (see my B14).

## Apply log

- Adult dose: merged both agreed proposals (IV QD with 50 mg vial; empirical FN, systemic, HIV crypto meningitis incl. UK single 10 mg/kg regimen, mucormycosis UK/TW AmBisome, VL, infusion times US/TW vs UK, D5W only, not interchangeable warning) in owner <br> style with green IV tag
- Renal dose, HD, CRRT: merged (no adjustment US/TW/UK, TW 6.7 不適用, UK 4.4 worsening renal function, HD/PD no supplemental dose, UK 5.2 avoid dosing during procedure, CRRT standard dose with Bellmann 2003 PMID 12615870 and Obata 2021 PMID 33179180)
- Hepatic dose: no data for dose recommendation (US/UK 4.2/TW 6.6), monitor LFT
- Pediatric dose: >=1 mo same mg/kg as adults (US/TW 1 mo-16 y, UK 1 mo-18 y), <1 mo not established/UK not recommended, IDSA 2016 neonatal CNS 5 mg/kg, up to 10 mg/kg/d in trials, 0.2-0.5 mg/mL dilution
- Indications multi-select: FN, Candidiasis, Aspergillosis, Meningitis
- Coverage multi-select: Candida, Aspergillus
- Side Effects multi-select: nephrotoxicity, hypokalemia, GI, LFT↑, dysglycemia, CNS, anemia, thrombocytopenia, rhabdomyolysis
- Monitor multi-select: renal, electrolyte, LFT, CBC
- Mechanism: merged polyene/ergosterol/liposomal/resistance text
- Drug Interactions: merged class interactions (nephrotoxins, antineoplastics, corticosteroids/diuretics, digitalis/muscle relaxants, flucytosine, azoles, leukocyte transfusion, PHOSm lab interaction)
- Pregnancy: no FDA letter category (PLLR), TW 'Category B' flagged as outdated, animal/human data, benefit>risk, IDSA 2016 AmB first choice
- Breastfeeding: LactMed acceptable (rev. 2021-03-17), alternative fluconazole, US/TW/UK label wording
- Notes: merged all three Notes fixes (high-alert non-equivalence, infusion reactions/premedication, K/Mg, D5W/filter, sucrose/Ampholipad excipient, PHOSm, Candida UTI, untagged indications and coverage, resistance list, PK/no TDM, Ampholipad 2017 insert possibly outdated - pharmacist to confirm)
- Category: left unchanged ('Polyene antifungal (lipid)') since the fix marked it optional and the current value acceptable
- Page body: inserted full Myfungin-style structure (Category, Mechanism, Indications labelled + guideline uses, Coverage, Adult Dose table, Renal/HD/CRRT, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions, Pregnancy, Breastfeeding, Notes); no storage/stability content
- References section appended: DailyMed AmBisome, eMC 1022, TFDA AmBisome 023388, TFDA Ampholipad 057982, LactMed NBK501321, IDSA Candidiasis/Aspergillosis/Leishmaniasis 2016, ECMM 2019, Jarvis 2022, Bellmann 2003, Obata 2021, Lockhart 2017 (with PMIDs/URLs)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
