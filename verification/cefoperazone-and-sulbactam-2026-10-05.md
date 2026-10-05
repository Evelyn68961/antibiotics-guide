# Verification: Brosym (cefoperazone-sulbactam)

- **Notion entry:** [Brosym (cefoperazone-sulbactam)](https://app.notion.com/20dc496dfff18031b094de29125ad9a7)
- **Hospital codes:** BRO04 (Brosym inj 2 g), BUR01 (Burotam inj 2 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/cefoperazone-and-sulbactam.json` (plus any `sources/cefoperazone-and-sulbactam-taiwan-insert-*.txt`)

## Product and sources

Brosym 博益欣注射劑 (cefoperazone sodium/sulbactam sodium 1:1; 2 g vial = 1 g/1 g). Licence 衛部藥製字第058156號, TTY Biopharm 台灣東洋 (FJUH BRO04, NHI AC58156212, ATC J01DD62). The hospital also stocks Burotam 布洛坦 2 g (衛部藥製字第061039號, YungShin, FJUH BUR01), which has the same insert content. No US FDA label exists: DailyMed spls.json?drug_name=cefoperazone returned 0 results and openFDA generic_name:cefoperazone returned NOT_FOUND (both re-checked 2026-10-05). No UK SmPC exists: the eMC search for "cefoperazone" says "No search results". The Taiwan TFDA inserts are therefore the governing labels, and LactMed "Cefoperazone" (NBK501355, rev 2023-09-15) covers breastfeeding.

## Agreed fixes applied in Notion (47)

### A1 · Renal dose, HD, CRRT (error)

**Was:** no need for adjustments

**Now:** 依CrCl調整 (cefoperazone/sulbactam 1:1 每日最高劑量)：CrCl >30: 4g/4g/day (2g/2g q12h)；15–30: 2g/2g/day (1g/1g q12h)；≤15: 1g/1g/day (500mg/500mg q12h)。HD: 仿單僅載明過量時可經血液透析移除，未提供HD/CRRT劑量 (no label HD/CRRT dosing)

**Why:** Both Taiwan inserts have a renal dose-reduction table based on CrCl, with a Cockcroft-Gault formula. The current text says the opposite of the label. Sulbactam is mainly renally excreted (72% recovered in urine within 12 h, insert section 11), so this error could cause sulbactam accumulation.

**Sources:** Brosym TW insert §3.3 特殊族群用法用量 (腎功能不全) & §9 過量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Burotam TW insert §3.1 (renal table, PDF) — https://mcp.fda.gov.tw/insert/pdfcasefile/i_ae59ce8f-6bf8-4727-adf2-f5f34e067be1

### A2 · Adult dose (error)

**Was:** 1-2g IV q12h; Severe: 2-4g IV q12h<br>CRAB / severe MDR: 4g IV q8h (MAX sulbactam 4g/day)

**Now:** <span color="green">`IV`</span> only (緩慢IV push ≥3 min 或 IV infusion；不可IM/SC)<br>1–2g (0.5g/0.5g–1g/1g) IV q12h; Severe: up to 4g (2g/2g) IV q12h (MAX 4g/4g per day)

**Why:** The q12h regimens match the insert when doses are read as grams of the 1:1 combination, but the units should be stated explicitly. The CRAB line, 4 g q8h, gives 6 g of sulbactam per day. That contradicts the cell's own 'MAX sulbactam 4g/day' and the insert maximum of 4g/4g per day. No label or guideline supports it, and IDSA AMR Guidance (2026 version) does not mention cefoperazone-sulbactam. The route is IV only: the insert says '只限靜脈注射，不可皮下及肌肉注射'. Remove the CRAB line, or move it to Notes as an off-label regimen with a PubMed citation.

**Sources:** Brosym TW insert §3.1 用法用量 & §15 其他(3) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Burotam TW insert §3.1 & §14 病人使用須知 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F; IDSA AMR Guidance (published 2026-07-30), CRAB section Q5.1–5.2 — https://www.idsociety.org/practice-guideline/amr-guidance/

### A3 · Drug Interactions (error)

**Was:** Alcohol (disulfiram – avoid ≥72h), warfarin (↑INR), aminoglycosides (incompatibility, nephrotoxicity), heparin, NSAIDs

**Now:** Alcohol: disulfiram-like reaction (N-MTT抑制aldehyde dehydrogenase) – 治療期間及停藥後至少1週禁酒；Loop diuretics (furosemide): ↑腎功能障礙，併用時監測腎功能；Warfarin/heparin/NSAIDs: ↑出血風險 (hypoprothrombinemia) [mechanistic, not in TW insert]；Aminoglycosides: 勿同管混合 [not in TW insert]；Lab: 尿糖銅還原法 (Benedict/Fehling/Clinitest) 偽陽性、direct Coombs 陽性

**Why:** The insert says to avoid alcohol for at least 1 week after treatment (至少一週), not 72 h. The insert lists furosemide-type diuretics as an interaction, and the cell does not mention them. The insert lists lab-test interference, which the cell also omits. Warfarin, heparin, NSAIDs and aminoglycoside incompatibility do not appear in either Taiwan insert. They are plausible, so flag them rather than remove them.

**Sources:** Brosym TW insert §7 交互作用 & §5.5 其他注意事項(影響臨床檢查結果) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Burotam TW insert §8.2 (影響臨床檢查結果) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### A4 · Notes (error)

**Was:** NMTT side chain → VitK deficiency & disulfiram reaction; <br>Sulbactam = key for Acinetobacter; <br>Avoid alcohol ≥72h; Prophylactic VitK in high-risk<br>More info: [Brosym 仿單](https://www1.ndmctsgh.edu.tw/pharm/pic/medinsert/005BRO06.pdf)

**Now:** NMTT side chain → VitK deficiency & disulfiram reaction; <br>Sulbactam = key for Acinetobacter; <br>Avoid alcohol 治療期間及停藥後 ≥1 week (仿單); <br>VitK缺乏/凝血異常 (仿單: 可能與抑制腸道菌合成VitK有關) → 高風險者(營養不良、吸收不良、酒精中毒、長期靜脈營養、高齡)監測PT，必要時補充VitK; Prophylactic VitK in high-risk (ICU RCT: 10 mg IV weekly, Ebid 2024, PMID 39318741)<br>禁忌: 曾因本劑休克者、對本劑或cephem系抗生素過敏者 (penicillin過敏史→謹慎)<br>TW HCAP phase 3 (Brosym 4g q12h vs cefepime 2g q12h): AE 73% vs 67%; ITT deaths 7 vs 2<br>More info: [Brosym 仿單 (TFDA)](https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F)

**Why:** (1) The alcohol interval is wrong; the insert says at least 1 week. (2) Contraindications are missing from every column. (3) The linked PDF is another hospital's product code (NDMCTSGH BRO06) and could not be reached; the official TFDA insert is the authoritative link. (4) The insert links vitamin K deficiency to suppression of gut flora and gives an at-risk list. (5) The Taiwan phase 3 safety signal (7 vs 2 deaths) appears in both inserts and is relevant to the high-dose (4 g q12h) use the page promotes. You can keep 'Prophylactic VitK in high-risk', citing Ebid 2024 (PMID 39318741, verified).

**Sources:** Brosym TW insert §4 禁忌, §5.1, §7, §8.1(9), §8.2, §12(1) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Ebid AI et al. Hosp Pharm 2024;59(5):575-583, PMID 39318741 (esummary verified) — https://pubmed.ncbi.nlm.nih.gov/39318741/

### A5 · Pregnancy (error)

**Was:** Category B; use if clearly needed

**Now:** 僅於治療上判斷利益大於風險時使用 (TW insert)；無FDA label，不使用字母分級

**Why:** The FDA has retired letter categories, and this product has never had an FDA label. The Taiwan insert gives only a benefit-versus-risk statement.

**Sources:** Brosym TW insert §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; DailyMed search cefoperazone: 0 SPLs — https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=cefoperazone

### A6 · Indications (unsupported)

**Was:** UTI, IAI, SSTI, Pneumonia, Sepsis, FN

**Now:** UTI, IAI, Peritonitis, SSTI, Pneumonia, Pelvic

**Why:** There is no FDA or UK label, so the Taiwan insert is the governing label. Its indications are upper and lower respiratory tract infections, upper and lower UTI, peritonitis, cholecystitis, cholangitis and other intra-abdominal infections, pelvic inflammation, endometritis and other genital tract infections, and secondary infection of wounds, burns or surgical sites. It does not list sepsis or febrile neutropenia, and no guideline source is given for them. Add the existing options Pelvic and Peritonitis. Remove Sepsis and FN, or keep them only with a guideline citation as off-label use.

**Sources:** Brosym TW insert §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Burotam TW insert §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### A7 · Coverage (missing)

**Was:** MSSA, Streptococcus, Klebsiella, Proteus, E.coli, CRAB, Acinetobacter, Pseudomonas, Anaerobes

**Now:** MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Enterobacter, Serratia, Pseudomonas, Haemophilus, Acinetobacter, Bacteroides, Anaerobes, CRAB (flag: needs guideline/PubMed source)

**Why:** Insert §10.2 lists Staphylococcus and other Gram-positives, E. coli, Citrobacter, Klebsiella, Enterobacter, Serratia, Proteus, P. aeruginosa, H. influenzae, Acinetobacter and Bacteroides. Enterobacter, Serratia, Haemophilus and Bacteroides are existing options and are missing from the tags. The insert does not mention CRAB, and IDSA AMR Guidance (2026) does not mention cefoperazone-sulbactam. Keep the CRAB tag only with a PubMed citation, or remove it.

**Sources:** Brosym TW insert §10.2 藥效藥理特性 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; IDSA AMR Guidance 2026, CRAB section — https://www.idsociety.org/practice-guideline/amr-guidance/

### A8 · Side Effects (missing)

**Was:** coagulopathy, LFT↑, thrombophlebitis

**Now:** coagulopathy, Vitamin K deficiency, LFT↑, GI, thrombophlebitis, AKI, hematologic, thrombocytopenia, SJS/TEN, CNS

**Why:** Insert §8.1 lists these serious adverse effects: acute renal failure; haemolytic anaemia, pancytopenia, agranulocytosis and thrombocytopenia; SJS, TEN and AGEP; vitamin K deficiency with coagulopathy; serious or fatal bleeding. Diarrhoea is the most common adverse effect (0.75%) in the Japanese post-marketing data (§8.3). All proposed tags are existing options.

**Sources:** Brosym TW insert §8.1 臨床重要副作用 & §8.3 上市後經驗 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A9 · Hepatic dose (unsupported)

**Was:** Severe hepatic or hepatic+renal: MAX cefoperazone 2g/day; monitor levels

**Now:** 嚴重肝功能障礙: 半衰期延長，注意劑量與給藥間隔 (TW 仿單；無固定劑量調整)。肝+腎功能皆不全: 另依腎功能 (CrCl) 表調整；MAX cefoperazone 2g/day 並監測血中濃度 [unsourced – not in TW 仿單]

**Why:** The Taiwan insert gives no numeric hepatic limit. It says only '嚴重肝障礙的病患，因血中濃度半衰期延長，要注意劑量與投藥間隔'. The 2 g/day ceiling comes from overseas Cefobid/Sulperazon labeling, which is not available here as a citable official label. It also misstates that labeling by applying the ceiling to severe hepatic impairment alone. Keep it, but flag it as unsourced.

**Sources:** Brosym TW insert §5.1 謹慎投予(3) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A10 · Pediatric dose (minor)

**Was:** 40-80 mg/kg/day div q6-12h; Severe: up to 160 mg/kg/day; Neonates: q12h; MAX sulbactam 80 mg/kg/day

**Now:** 40–80 mg/kg/day (20/20–40/40 mg/kg/day) IV div q6–12h; Severe: up to 160 mg/kg/day (80/80 mg/kg/day); MAX sulbactam 80 mg/kg/day; 早產兒/新生兒安全性未確立 (TW insert)

**Why:** The insert gives 20/20 to 40/40 mg/kg/day in 2 to 4 doses, and up to 80/80 mg/kg/day for severe infection. The numbers in the cell match only when read as the combined amount, so state the components. 'Neonates: q12h' comes from overseas labeling. The Taiwan insert says safety in premature infants and neonates has not been established.

**Sources:** Brosym TW insert §3.1 & §6.8 其他族群 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Burotam TW insert §6.4 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### A11 · Breastfeeding (minor)

**Was:** Compatible; monitor infant for diarrhea/thrush

**Now:** Compatible (LactMed, cefoperazone: low milk levels, peak ~0.33 mg/L; acceptable); monitor infant for diarrhea/thrush. 註: TW insert建議注射期間停止哺乳

**Why:** The cell matches LactMed's summary. The Taiwan insert for the stocked product says to stop breastfeeding during treatment, and the cell should note that the two sources disagree. The LactMed chapter is for cefoperazone alone. Its ref 3 (PMID 2989572, Matsuda 1985, sulbactam/cefoperazone milk passage) was verified with esummary.

**Sources:** LactMed Cefoperazone NBK501355 (rev 2023-09-15), Summary & Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK501355/; Brosym TW insert §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; PMID 2989572 — https://pubmed.ncbi.nlm.nih.gov/2989572/

### A12 · Mechanism (minor)

**Was:** Cefoperazone: PBP binding → cell wall inhibition; Sulbactam: β-lactamase inhibitor + intrinsic Acinetobacter activity (PBP1a/2)

**Now:** Cefoperazone: PBP binding → cell wall synthesis inhibition (bactericidal); Sulbactam: irreversible β-lactamase inhibitor (TW 仿單: inhibits types Ic, II, III, IV; weak vs Ia, V) + intrinsic A. baumannii activity (PBP1a/1b & PBP3 at high exposure)

**Why:** IDSA says sulbactam 'binds and saturates PBP1a/1b and PBP3 of A. baumannii', not PBP2. The body Mechanism section has the same error ('PBP1a/1b and PBP2'). The β-lactamase classes come from insert §10.1.

**Sources:** IDSA AMR Guidance 2026, Question 5.2 — https://www.idsociety.org/practice-guideline/amr-guidance/; Brosym TW insert §10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A13 · Page body (error)

**Was:** Everything from '## Indications for Cefoperazone-Sulbactam' to the end of the page: Perplexity-style citations ('[vinmec+1]', '[labeling.pfizer+2]'), 'If you need details on specific organisms or additional indications, please specify.', and Administration that says 'intravenously or intramuscularly'

**Now:** REMOVE

**Why:** This is pasted AI-chat text, and the ground rules say to remove it. It also contradicts the label: it says IV or IM, but the insert says '只限靜脈注射，不可皮下及肌肉注射'. It lists meningitis, gonorrhoea and septicaemia, which are not Taiwan-label indications. Its sources are non-authoritative (vinmec, 1mg, Wikipedia, renaldosage.com).

**Sources:** Brosym TW insert §15 其他(3) & §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A14 · Page body (error)

**Was:** Adult Dose table: 'Life-threatening / CRAB 4g IV q8h'; 'MAX cefoperazone 4g/day (1:1 ratio); 8g/day (1:2 ratio)'; 'Available ratios: 1:1 … 1:2 …'

**Now:** Adult Dose table: Mild–moderate 1–2g (0.5/0.5–1/1g) IV q12h; Severe up to 4g (2/2g) IV q12h; MAX 4g/4g per day. Remove the CRAB q8h row, the 'MAX cefoperazone 8g/day (1:2)' text, the 'Available ratios' 1:2 bullet, and Notes item 6 (Ratio selection 1:2). Add: 'Brosym/Burotam are 1:1 only (1g, 2g, 4g vials)'. Add: 'IV only (slow push ≥3 min or infusion; 不可IM/SC)'.

**Why:** Both stocked products contain the two components in equal amounts (1:1) only, so the 1:2 ratio does not apply. The q8h CRAB row exceeds the label maximum and has no source. IDSA does not address cefoperazone-sulbactam.

**Sources:** Brosym TW insert §1.1 有效成分及含量 & §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Burotam TW insert §1.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### A15 · Page body (unsupported)

**Was:** Renal section: 'Adjustment is for sulbactam; cefoperazone does not require renal adjustment…'; HD row 'Dose after dialysis; sulbactam ~30% removed, cefoperazone ~5% removed'; CRRT row '1-2g q12h (adjust based on effluent rate)'; 'additional cefoperazone may be given separately'

**Now:** Replace the table with the Taiwan insert's combination maxima: >30: 4g/4g/day (2g/2g q12h); 15–30: 2g/2g/day (1g/1g q12h); ≤15: 1g/1g/day (500/500mg q12h). Add the insert's Cockcroft-Gault note. HD: '仿單: 過量時可經HD移除；HD/CRRT劑量仿單未載'. Remove 'additional cefoperazone may be given separately'. Flag the HD percentages and the CRRT dose (here, in Notes item 8 and in the Brief Summary renal row) as needing a guideline or PubMed source.

**Why:** The insert reduces the whole 1:1 combination, so a separate cefoperazone top-up is not an option with these products. The HD removal percentages, post-dialysis timing and CRRT dose have no source. The 15–30 and <15 values match the insert in substance.

**Sources:** Brosym TW insert §3.3 & §9 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A16 · Page body (unsupported)

**Was:** Indications list includes Septicemia/bacteremia, Bone & joint, Meningitis, Febrile neutropenia, CRAB/MDR Acinetobacter, Melioidosis

**Now:** Replace with the Taiwan insert's indications: 上、下呼吸道感染；上、下泌尿道感染；腹膜炎、膽囊炎、膽管炎及其他腹腔內感染；骨盆發炎、子宮內膜炎及其他生殖道感染；創傷、燙傷、手術後之二次感染. Move other uses to an 'off-label (needs guideline source)' line.

**Why:** Neither Taiwan insert lists those indications, and there is no FDA or UK label. The Brief Summary table repeats the same list and needs the same correction.

**Sources:** Brosym TW insert §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A17 · Page body (error)

**Was:** Pregnancy table: 'FDA Category B (historical)'; 'AU TGA B1'; Brief Summary 'Category B; use if clearly needed'

**Now:** Remove the FDA Category row. Recommendation: '僅於治療上判斷利益大於風險時使用 (TW insert §6.1)'. Flag the AU TGA B1 row as unsourced.

**Why:** There is no FDA label, and letter categories have been retired. The TGA claim could not be verified against any listed source.

**Sources:** Brosym TW insert §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A18 · Page body (error)

**Was:** Notes item 5: 'CRAB treatment: IDSA 2024 prefers sulbactam-durlobactam > high-dose ampicillin-sulbactam; cefoperazone-sulbactam is an alternative. High-dose sulbactam (6-9g/day) often required for CRAB'

**Now:** CRAB: IDSA AMR Guidance (2026): sulbactam-durlobactam + imipenem/meropenem preferred; high-dose ampicillin-sulbactam (sulbactam 9 g/day) + ≥1 other agent only as temporary bridging. IDSA does not address cefoperazone-sulbactam. Its use for CRAB is off-label, and the label maximum is sulbactam 4 g/day.

**Why:** The current IDSA AMR Guidance (published 2026-07-30) does not mention cefoperazone-sulbactam, so 'cefoperazone-sulbactam is an alternative' is not supported. IDSA's high-dose sulbactam figure is 9 g/day, given as ampicillin-sulbactam. The guidance version cited on the page is also out of date.

**Sources:** IDSA AMR Guidance 2026, Q5.1–5.2 — https://www.idsociety.org/practice-guideline/amr-guidance/

### A19 · Page body (error)

**Was:** Chinese paragraph: '近期一些研究針對高風險患者預防性給予維生素 K1 5-10mg/day…'

**Now:** 近期RCT (Ebid 2024, ICU病人) 預防性給予維生素K 10 mg IV 每週一次，可顯著降低cefoperazone-sulbactam相關凝血異常 (PMID 39318741)；回溯性研究 (Shao 2023) 凝血異常發生率24.4%，高齡者較常見，VK1治療後凝血指標改善 (PMID 37271979)

**Why:** The cited RCT used 10 mg IV once weekly, not 5–10 mg per day. The other cited study (PMC10251771 = PMID 37271979) is retrospective and looked at vitamin K1 as treatment, not prophylaxis. Both PMIDs were verified with esummary and efetch.

**Sources:** Ebid AI et al. Hosp Pharm 2024;59(5):575-583, PMID 39318741 — https://pubmed.ncbi.nlm.nih.gov/39318741/; Shao X et al. Med Sci Monit 2023;29:e939203, PMID 37271979 — https://pubmed.ncbi.nlm.nih.gov/37271979/

### A20 · Page body (missing)

**Was:** Side Effects section: 'Common (1-10%): Coagulopathy / bleeding …' plus a Serious/Rare list without interstitial pneumonia/PIE, AGEP, fulminant hepatitis, acute renal failure, fatal bleeding

**Now:** Serious (frequency unknown, TW insert §8.1): shock/anaphylaxis; acute renal failure; pseudomembranous colitis; interstitial pneumonia/PIE syndrome; SJS/TEN/AGEP; haemolytic anaemia, pancytopenia, agranulocytosis, thrombocytopenia; fulminant hepatitis; serious or fatal bleeding; vitamin K deficiency with coagulopathy. Japanese PMS data (n=12,808): diarrhoea 0.75%, rash 0.45%, AST↑ 3.18%, ALT↑ 3.41%, ALP↑ 1.05%. Coagulopathy frequency: label says unknown.

**Why:** Several serious adverse effects in the label are missing from the body. The label gives no frequency for coagulopathy, so listing it as 'Common (1–10%)' has no label support.

**Sources:** Brosym TW insert §8.1 & §8.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A21 · Page body (error)

**Was:** Drug Interactions table: Alcohol 'Avoid … ≥72 hours after therapy'; Notes item 2 'at least 72 hours'; Brief Summary '≥72h'; no furosemide row; Probenecid and Live vaccines (BCG, typhoid) rows

**Now:** Alcohol: avoid during treatment and for ≥1 week after (至少一週). Add row: Loop diuretics (furosemide): ↑腎毒性, monitor renal function. Add lab-test interference. Flag Probenecid and Live vaccines as unsourced.

**Why:** The label says the alcohol-free period is at least 1 week. The furosemide interaction is in the label and missing from the table.

**Sources:** Brosym TW insert §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A22 · Page body (minor)

**Was:** Monitoring table: 'Renal function – If aminoglycoside co-administered'; 'PT/INR … repeat every 3 days'

**Now:** Renal function: 定期檢查 (acute renal failure risk), especially with loop diuretics. PT: monitor in at-risk patients (poor nutrition, malabsorption, alcoholism, prolonged parenteral nutrition, elderly) and give vitamin K if needed. Flag 'every 3 days' as unsourced.

**Why:** The insert asks for periodic renal, blood and liver tests, not only with aminoglycosides. It recommends monitoring PT in at-risk patients.

**Sources:** Brosym TW insert §8.1(2),(6),(7),(9) & §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A23 · Page body (minor)

**Was:** Breastfeeding table: 'Infant exposure <1% of maternal dose'

**Now:** Remove the '<1%' row or flag it as unsourced. Add row: 'TW insert: 建議注射期間停止哺乳'.

**Why:** LactMed reports milk levels of 0.1–0.33 mg/L (this matches the page) but gives no infant-dose percentage. The Taiwan insert advice should be shown alongside.

**Sources:** LactMed NBK501355 Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK501355/; Brosym TW insert §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A24 · Page body (unsupported)

**Was:** Hepatic Dose table: 'Mild-moderate: t½ prolonged 2-4×…'; 'Hepatic + Renal: MAX cefoperazone 2g/day'

**Now:** Add the insert line: '嚴重肝障礙: 半衰期延長，注意劑量與給藥間隔'. Flag the numeric rows as coming from overseas labeling (unsourced here).

**Why:** Same issue as A9. The Taiwan label contains no numeric hepatic values.

**Sources:** Brosym TW insert §5.1(3) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A25 · Page body (minor)

**Was:** Pediatric table: 'Severe/refractory: Up to 160 mg/kg/day (1:1) or 240 mg/kg/day (1:2)'; 'Neonates (first week of life): Standard dose but give q12h'

**Now:** Remove the 1:2 (240 mg/kg/day) option, since the stocked products are 1:1 only. Replace the neonate row with: '早產兒/新生兒安全性未確立 (TW insert)'.

**Why:** Neither the 1:2 ratio nor neonatal dosing is supported by the Taiwan label for the stocked products.

**Sources:** Brosym TW insert §1.1 & §6.8 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A26 · Page body (minor)

**Was:** Coverage table: Other row 'Neisseria gonorrhoeae, Neisseria meningitidis'; Enterobacteriaceae row includes Salmonella, Shigella, Morganella, Providencia; Anaerobes row includes Prevotella, Fusobacterium, Peptostreptococcus, Clostridium

**Now:** Flag the organisms not named in insert §10.2 as unsourced. The insert names Staphylococcus, Streptococcus, pneumococcus, E. coli, Citrobacter, Klebsiella, Enterobacter, Serratia, Proteus, P. aeruginosa, H. influenzae, Acinetobacter and Bacteroides.

**Why:** The Taiwan label does not name these organisms. They are plausible, so flag them rather than remove them.

**Sources:** Brosym TW insert §10.2 & §2 說明 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### A27 · Page body (minor)

**Was:** Notes item 7 PK ('70-90% protein bound; 70% biliary, 30% renal'; sulbactam '~38% protein bound') and item 9 Sodium content

**Now:** Add the label PK (TW 仿單 §11): 12-h urinary recovery sulbactam 72%, cefoperazone 25.3%; most cefoperazone is excreted in faeces and sulbactam in urine; after a 2 g IV push over 5 min, peak levels (cefoperazone ~250, sulbactam ~100 μg/mL) fell by half within 30–40 min and were nearly gone by 8 h. Flag the protein binding and sodium figures as unsourced.

**Why:** The renal/biliary split roughly matches the insert. The protein binding and sodium figures are not in any listed source.

**Sources:** Brosym TW insert §11 藥物動力學特性 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B1 · Renal dose, HD, CRRT (error)

**Was:** no need for adjustments

**Now:** CrCl >30: max 4g/4g/day (2g/2g q12h)<br>CrCl 15-30: max 2g/2g/day (1g/1g q12h)<br>CrCl ≤15: max 1g/1g/day (500mg/500mg q12h)<br>(TW 仿單; sulbactam is renally cleared, cefoperazone is mainly biliary)<br>HD: sulbactam t½ ~9.7 h in anephric patients vs 1.0 h normal; cefoperazone PK not altered by HD (Reitberg 1988). HD removes the drug in overdose (仿單 §9)<br>CRRT (CVVH): PK study used 2g/1g q8h (a 2:1 product); CVVH clearance was ~34% of total clearance for both components; TDM recommended (Gao 2016). No labeled CRRT dose

**Why:** The column directly contradicts both Taiwan inserts, which have a renal table under 3.3 特殊族群用法用量 / 腎功能不全患者: 'Brosym建議使用劑量依病患之肌酸酐廓清率而定: >30 4g/4g（每12小時2g/2g）; 15-30 2g/2g（每12小時1g/1g）; ≦15 1g/1g（每12小時500mg/500mg）'. The page body already holds a roughly correct table, so the property is inconsistent with the body. Note that the 2:1 regimen in the CVVH study, given as the 1:1 TW product, would deliver 4.5 g sulbactam/day, above the label maximum. The body's figures 'sulbactam ~30% removed, cefoperazone ~5% removed' and 'CRRT 1-2g q12h (adjust based on effluent rate)' have no source and should be flagged. PMIDs 3377461 and 27023465 were verified by esummary.

**Sources:** TFDA insert Brosym 衛部藥製字第058156號 §3.3 腎功能不全患者, §9 過量 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; TFDA insert Burotam 衛部藥製字第061039號 (renal table in PDF) https://mcp.fda.gov.tw/insert/pdfcasefile/i_ae59ce8f-6bf8-4727-adf2-f5f34e067be1; Reitberg DP et al. Antimicrob Agents Chemother 1988;32:503-9, PMID 3377461 https://pubmed.ncbi.nlm.nih.gov/3377461/; Gao C et al. Eur J Clin Pharmacol 2016;72:823-30 (CVVH PK), PMID 27023465 https://pubmed.ncbi.nlm.nih.gov/27023465/

### B2 · Adult dose (error)

**Was:** 1-2g IV q12h; Severe: 2-4g IV q12h<br>CRAB / severe MDR: 4g IV q8h (MAX sulbactam 4g/day)

**Now:** 1-2g (combined 1:1 = 1g/1g–2g/2g per day) IV q12h; Severe: up to 4g IV q12h (4g/4g per day; MAX sulbactam 4g/day)<br>IV only (slow IV push ≥3 min or infusion); not IM/SC<br>CRAB: not a label indication; the label max of 4 g sulbactam/day is below the IDSA high-dose sulbactam target of 9 g/day (as ampicillin-sulbactam). IDSA prefers sulbactam-durlobactam + imipenem/meropenem

**Why:** The usual and severe doses match TW 仿單 §3.1: '成人每日總劑量為1g/1g至2g/2g，間隔12小時，分兩次投藥。對於嚴重的感染，成人每日劑量可增加至4g/4g，分兩次給藥', read as combined grams per dose. The CRAB line contradicts itself: 4 g q8h of the 1:1 product is 12 g/day, or 6 g sulbactam/day, which exceeds the 'MAX sulbactam 4g/day' written in the same cell and the label maximum of 4g/4g/day. No label or guideline supports this regimen. The IDSA AMR guidance (2026 update) does not mention cefoperazone-sulbactam at all; it suggests sulbactam-durlobactam + carbapenem as preferred, and high-dose ampicillin-sulbactam (9 g sulbactam/day) only as a bridge. The cell should also state IV-only, per the insert: '只限靜脈注射，不可皮下及肌肉注射'.

**Sources:** TFDA insert Brosym §3.1 用法用量, §15 其他 (3) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; IDSA 2026 AMR Guidance, Questions 5.1-5.2 (CRAB) https://www.idsociety.org/practice-guideline/amr-guidance/

### B3 · Drug Interactions (error)

**Was:** Alcohol (disulfiram – avoid ≥72h), warfarin (↑INR), aminoglycosides (incompatibility, nephrotoxicity), heparin, NSAIDs

**Now:** Alcohol: disulfiram-like reaction (N-MTT) – 用藥期間及停藥後至少1週禁酒 (avoid during therapy and ≥1 week after)<br>Loop diuretics (furosemide): ↑ nephrotoxicity – monitor renal function<br>Warfarin/heparin/NSAIDs: ↑ bleeding risk (hypoprothrombinemia) – monitor PT/INR [not in TW 仿單]<br>Aminoglycosides: give separately [not in TW 仿單]<br>Lab: false-positive urine glucose (Benedict/Fehling/Clinitest); direct Coombs (+)

**Why:** The TW insert in §7 交互作用 says '使用期間和使用過後至少一週內不能飲酒', i.e. at least 1 week, not 72 h. The same section lists 利尿劑(furosemide) as increasing renal impairment ('併用時會增強腎功能障礙…請注意腎功能'), which is missing from the cell. Lab interference is in §5.5. Warfarin, heparin, NSAIDs and aminoglycoside incompatibility are plausible but are not in either TW insert, so they are flagged rather than removed. The Burotam PDF also shows the furosemide and Disulfiram/N-MTT rows.

**Sources:** TFDA insert Brosym §7 交互作用, §5.5 其他注意事項 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; TFDA insert Burotam PDF §7 https://mcp.fda.gov.tw/insert/pdfcasefile/i_ae59ce8f-6bf8-4727-adf2-f5f34e067be1

### B4 · Notes (error)

**Was:** NMTT side chain → VitK deficiency & disulfiram reaction; <br>Sulbactam = key for Acinetobacter; <br>Avoid alcohol ≥72h; Prophylactic VitK in high-risk<br>More info: [Brosym 仿單](https://www1.ndmctsgh.edu.tw/pharm/pic/medinsert/005BRO06.pdf)

**Now:** NMTT side chain → VitK deficiency & disulfiram reaction; <br>Sulbactam = key for Acinetobacter; <br>Avoid alcohol 用藥期間及停藥後至少1週 (仿單); <br>VitK: 高風險者 (營養不良/經口攝取不良、吸收不良、酒精中毒、長期靜脈營養、高齡) 監測PT，必要時補充VitK (仿單); ICU RCT: prophylactic VitK 10 mg IV weekly ↓coagulopathy (Ebid 2024, PMID 39318741)<br>More info: [Brosym 仿單 (TFDA)](https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F)

**Why:** '≥72h' contradicts the insert's 1 week (§7). The linked PDF is another hospital's copy (NDMCTSGH code BRO06); it could not be reached from here (proxy denied) and is not the official source, so the TFDA insert should replace it. For vitamin K, the label says to monitor prothrombin time and supplement 'if needed' (§8.1(9)). The prophylaxis evidence is the RCT PMID 39318741 (10 mg IV once weekly), verified by esummary.

**Sources:** TFDA insert Brosym §7, §8.1(9), §5.1(5) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; Ebid AI et al. Hosp Pharm 2024;59:575-83, PMID 39318741 https://pubmed.ncbi.nlm.nih.gov/39318741/

### B5 · Pregnancy (error)

**Was:** Category B; use if clearly needed

**Now:** No US/UK label. TW 仿單: 對孕婦或可能懷孕婦女，只有在治療上判斷好處優於危險性才可以注射 (use only if benefit outweighs risk). FDA letter categories retired

**Why:** The ground rules forbid stating a current FDA letter category. No FDA label exists for this product, so 'Category B' has no label basis. TW insert §6.1 has the wording above. The body's 'FDA Category B (historical)' and 'AU TGA B1' have no source and should also be removed or flagged.

**Sources:** TFDA insert Brosym §6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; DailyMed spls API drug_name=cefoperazone → 0 results https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=cefoperazone

### B6 · Hepatic dose (unsupported)

**Was:** Severe hepatic or hepatic+renal: MAX cefoperazone 2g/day; monitor levels

**Now:** 嚴重肝障礙: 半衰期延長，注意劑量與投藥間隔 (TW 仿單 §5.1；無固定劑量). 肝+腎功能皆不全: 依CrCl表調整；國外labeling建議 cefoperazone ≤2g/day 並監測血中濃度 [overseas label, unverified]

**Why:** TW 仿單 §5.1 謹慎投予 (3): '嚴重肝障礙的病患，因血中濃度半衰期延長，要注意劑量與投藥間隔'. Neither TW insert gives a numeric cap, and the 'MAX cefoperazone 2g/day; monitor levels' rule comes from the overseas Sulperazon/Cefobid labels. labeling.pfizer.com was blocked by the proxy, so it could not be verified. No US or UK label exists to support it. Flag it, or keep it only with an explicit 'overseas label, unverified' tag.

**Sources:** TFDA insert Brosym §5.1 謹慎投予(3) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; TFDA insert Burotam (same wording) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### B7 · Pediatric dose (unsupported)

**Was:** 40-80 mg/kg/day div q6-12h; Severe: up to 160 mg/kg/day; Neonates: q12h; MAX sulbactam 80 mg/kg/day

**Now:** 40-80 mg/kg/day (20/20–40/40 mg/kg/day) div q6-12h; Severe: up to 160 mg/kg/day (80/80 mg/kg/day); MAX sulbactam 80 mg/kg/day<br>早產兒、新生兒安全性未確認 (TW 仿單); Neonates (1st week): q12h [overseas label, not in TW 仿單]

**Why:** The numbers are correct as combined doses. TW 仿單 §3.1: '小孩每日總劑量為每公斤體重20mg/20mg至40mg/40mg，分2~4次給藥。嚴重感染時…80mg/80mg'. However, 'Neonates: q12h' comes from overseas labels. The TW insert §6.8 says '對早產兒、新生兒的安全性未經確認' and gives no neonatal regimen. The body's 'Up to 240 mg/kg/day (1:2)' refers to a ratio not marketed in Taiwan.

**Sources:** TFDA insert Brosym §3.1, §6.8 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B8 · Indications (unsupported)

**Was:** UTI, IAI, SSTI, Pneumonia, Sepsis, FN

**Now:** Indications: UTI, IAI, Peritonitis, Pelvic, SSTI, Pneumonia. Remove Sepsis and FN from the multi-select and add to Notes: 'Sepsis/FN: not in TW 仿單 indications (off-label; needs guideline source)'

**Why:** No FDA or UK label exists, so the stocked product's TW insert defines the approved indications. TW 仿單 §2: '上、下呼吸道感染、上、下泌尿道感染、腹膜炎、膽囊炎、膽管炎及其它腹腔內感染、骨盆發炎、子宮內膜炎及其它生殖道感染、以及創傷燙傷、手術後之二次感染'. That supports Pneumonia, UTI, IAI, Peritonitis, Pelvic and SSTI. Peritonitis and Pelvic are missing; both options exist in the schema. Septicemia and febrile neutropenia are not in either TW insert. The body's lists also add meningitis, bone/joint, melioidosis and CRAB, which are not in the TW label.

**Sources:** TFDA insert Brosym §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; TFDA insert Burotam §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### B9 · Coverage (missing)

**Was:** MSSA, Streptococcus, Klebsiella, Proteus, E.coli, CRAB, Acinetobacter, Pseudomonas, Anaerobes

**Now:** MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Enterobacter, Serratia, Haemophilus, Pseudomonas, Acinetobacter, Bacteroides, Anaerobes (CRAB: flag as susceptibility-dependent / not label-supported)

**Why:** TW 仿單 §10.2 lists '葡萄球菌等的Gram(+)菌、大腸菌、Citrobacter屬、Klebsiella屬、Enterobacter屬、Serratia、Proteus屬、綠膿菌、Haemophilus influenza、Acinetobacter屬等的Gram(-)菌以及Bacteroides屬等厭氣性菌'. The cell is missing Enterobacter, Serratia, Haemophilus and Bacteroides, all existing schema options. The CRAB tag has no label or guideline support: IDSA AMR guidance does not mention cefoperazone-sulbactam, and the label maximum of 4 g sulbactam/day is below IDSA's 9 g/day high-dose sulbactam. It is not contradicted outright, so flag it rather than remove it.

**Sources:** TFDA insert Brosym §10.2 藥效藥理特性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; IDSA 2026 AMR Guidance, CRAB section https://www.idsociety.org/practice-guideline/amr-guidance/

### B10 · Side Effects (missing)

**Was:** coagulopathy, LFT↑, thrombophlebitis

**Now:** coagulopathy, Vitamin K deficiency, LFT↑, GI, hematologic, thrombocytopenia, AKI, SJS/TEN, CNS, thrombophlebitis

**Why:** The TW 仿單 §8.1 serious ADRs are: shock/anaphylaxis, 急性腎功能不全 (AKI), pseudomembranous colitis, interstitial pneumonia/PIE, SJS/TEN/AGEP, haemolytic anaemia/pancytopenia/agranulocytosis/血小板減少症, fulminant hepatitis, serious bleeding, and 維他命K缺乏症及凝血異常. The 'other ADR' table lists diarrhoea/nausea/vomiting, 痙攣 (convulsions) and 注射部位靜脈炎. Japanese post-marketing data (§8.3) give diarrhoea 0.75%, rash 0.45%, AST↑ 3.18% and ALT↑ 3.41%. All proposed tags exist in the schema.

**Sources:** TFDA insert Brosym §8.1, §8.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B11 · Mechanism (minor)

**Was:** Cefoperazone: PBP binding → cell wall inhibition; Sulbactam: β-lactamase inhibitor + intrinsic Acinetobacter activity (PBP1a/2)

**Now:** Cefoperazone: PBP binding → cell wall inhibition; Sulbactam: β-lactamase inhibitor (TW 仿單: inhibits types Ic, II, III, IV) + intrinsic Acinetobacter activity (PBP1a/1b and PBP3)

**Why:** IDSA AMR guidance Q5.1: '…enables sulbactam to effectively engage PBP1a/1b and PBP3'. The cell says PBP2, which does not match. The body's 'PBP1a/1b and PBP2' should be corrected the same way. The β-lactamase types are from TW 仿單 §10.1.

**Sources:** IDSA 2026 AMR Guidance, Question 5.1 rationale https://www.idsociety.org/practice-guideline/amr-guidance/; TFDA insert Brosym §10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B12 · Breastfeeding (minor)

**Was:** Compatible; monitor infant for diarrhea/thrush

**Now:** LactMed (cefoperazone): acceptable; low milk levels (avg peak 0.33 mg/L after 1 g IV); monitor infant for diarrhea/thrush.<br>TW 仿單: 注射時請停止哺乳 (more conservative)

**Why:** The current text agrees with LactMed NBK501355 (rev. 2023-09-15): 'Cefoperazone is acceptable in nursing mothers… diarrhea or thrush'. Both TW inserts (§6.2) say to stop breastfeeding during treatment, so the conflict should be shown. LactMed has no chapter for the combination; its ref 3, PMID 2989572 (Matsuda 1985, sulbactam/cefoperazone milk passage), was verified by esummary.

**Sources:** LactMed Cefoperazone NBK501355 https://www.ncbi.nlm.nih.gov/books/NBK501355/; Matsuda S et al. Jpn J Antibiot 1985;38:223-9, PMID 2989572 https://pubmed.ncbi.nlm.nih.gov/2989572/; TFDA insert Brosym §6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B13 · Page body (error)

**Was:** Everything from '## Indications for Cefoperazone-Sulbactam' to the end of the page: AI-chat paste with citation tokens like '[vinmec+1]', '[labeling.pfizer+2]', the line 'If you need details on specific organisms or additional indications, please specify.', and dosing text saying 'usually administered IV or IM' / 'Doses can be administered intravenously or intramuscularly'

**Now:** REMOVE

**Why:** This is pasted AI-chat text, which the ground rules say to remove. It also contradicts the label: TW 仿單 §15 says '只限靜脈注射，不可皮下及肌肉注射' (IV only, no SC or IM). Its sources are blogs, MIMS and overseas labels, not the stocked product's label.

**Sources:** TFDA insert Brosym §3.1 and §15 其他 (3) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B14 · Page body (error)

**Was:** Adult Dose table: 'Life-threatening / CRAB 4g IV q8h'; 'Available ratios… 1:2 (sulbactam:cefoperazone) – when higher cefoperazone needed (Pseudomonas) or higher sulbactam needed (CRAB)'; Notes #6 the same; 'MAX cefoperazone … 8g/day (1:2 ratio)'

**Now:** Replace with: 'TW products (Brosym, Burotam) are 1:1 only (1 g/2 g/4 g vials). Max 4g/4g per day (sulbactam 4 g/day). CRAB: not label-supported; see IDSA (sulbactam-durlobactam + carbapenem preferred)'

**Why:** A 1:2 sulbactam:cefoperazone product contains less sulbactam per gram than 1:1, so 'higher sulbactam needed (CRAB)' is wrong. Both stocked products are 1:1 (TW 仿單 §1.1). 4 g q8h exceeds the label maximum of 4g/4g/day.

**Sources:** TFDA insert Brosym §1.1, §3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; TFDA insert Burotam §1.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC061039%E8%99%9F

### B15 · Page body (error)

**Was:** Notes #5: 'CRAB treatment: IDSA 2024 prefers sulbactam-durlobactam > high-dose ampicillin-sulbactam; cefoperazone-sulbactam is an alternative. High-dose sulbactam (6-9g/day) often required'

**Now:** CRAB: IDSA AMR guidance (2026 update) prefers sulbactam-durlobactam + imipenem/meropenem; high-dose ampicillin-sulbactam (9 g sulbactam/day) + a second agent only as a bridge. Cefoperazone-sulbactam is not addressed by IDSA, and its label max is sulbactam 4 g/day.

**Why:** The current IDSA AMR guidance page contains 0 mentions of 'cefoperazone', so calling cefoperazone-sulbactam an IDSA alternative is a misattribution. IDSA states a sulbactam dose of 9 g/day, not 6-9 g.

**Sources:** IDSA AMR Guidance (published 2026-07-30), Questions 5.1-5.2 https://www.idsociety.org/practice-guideline/amr-guidance/

### B16 · Page body (error)

**Was:** Notes #2 'avoid alcohol … for at least 72 hours after the last dose'; Drug Interactions table 'Avoid alcohol during and ≥72 hours after therapy'; Brief Summary Table 'avoid ≥72h'

**Now:** Change to '至少1週 (≥1 week) after the last dose' in all three places

**Why:** TW 仿單 §7: '使用期間和使用過後至少一週內不能飲酒'.

**Sources:** TFDA insert Brosym §7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B17 · Page body (error)

**Was:** Chinese paragraph: '近期一些研究針對高風險患者預防性給予維生素 K1 5-10mg/day，結果顯示此作法的確可以改善患者的凝血功能指標'

**Now:** 近期研究：ICU 隨機對照試驗以維生素 K1 10 mg IV 每週一次預防，顯著降低 cefoperazone-sulbactam 相關凝血異常 (Ebid 2024, PMID 39318741)；另一回溯性研究 (Shao 2023, PMID 37271979) 顯示凝血異常發生率 24.39%，給予 VK1 後凝血指標改善。仿單建議高風險病人監測凝血酶原時間，必要時補充維他命K。

**Why:** The two cited references, both verified by esummary, do not support '5-10 mg/day'. Ebid 2024 used 10 mg IV once a week. Shao 2023 (PMC10251771 = PMID 37271979) is retrospective and used vitamin K as treatment, not prophylaxis. The label recommends PT monitoring and vitamin K when needed.

**Sources:** Ebid AI et al. Hosp Pharm 2024, PMID 39318741 https://pubmed.ncbi.nlm.nih.gov/39318741/; Shao X et al. Med Sci Monit 2023;29:e939203, PMID 37271979 https://pubmed.ncbi.nlm.nih.gov/37271979/; TFDA insert Brosym §8.1(9) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B18 · Page body (missing)

**Was:** Side Effects section lists 'Interstitial nephritis' and frames coagulopathy as 'Common (1-10%)'. It omits acute renal failure, interstitial pneumonia/PIE, fulminant hepatitis, AGEP, pancytopenia, and the urine-glucose lab interference.

**Now:** Under Serious add: 急性腎功能不全 (acute renal failure), 間質性肺炎/PIE, 猛爆性肝炎 (fulminant hepatitis), AGEP, pancytopenia, serious/fatal bleeding. Under Lab add: false-positive urine glucose (Benedict/Fehling/Clinitest). Change coagulopathy frequency to 'frequency unknown (spontaneous reports)'. Flag interstitial nephritis as not in the TW 仿單.

**Why:** TW 仿單 §8.1 lists these serious ADRs and marks 維他命K缺乏症 as '頻率不明 (*1)'. §5.5 covers the lab interference.

**Sources:** TFDA insert Brosym §5.5, §8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

### B19 · Page body (unsupported)

**Was:** Unsourced claims: Monitoring 'PT/INR … repeat every 3 days'; interactions 'Live vaccines (BCG, typhoid)' and 'Probenecid'; Hepatic 't½ prolonged 2-4×'; Breastfeeding 'Infant exposure <1% of maternal dose'; Coverage 'Neisseria gonorrhoeae, N. meningitidis'; Indications 'Meningitis', 'Bone & joint', 'Melioidosis'; Pregnancy 'AU TGA B1'; HD/CRRT rows

**Now:** Flag each with [unsourced]. Keep only if the owner supplies a source. Replace the HD/CRRT rows with the B1 text.

**Why:** Neither TW insert nor LactMed contains these items, and there is no FDA or UK label to check them against. They are plausible but unverified. The Indications and Coverage items are absent from the TW 仿單 indication list (§2) and spectrum (§10.2).

**Sources:** TFDA insert Brosym §2, §10.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F; LactMed NBK501355 https://www.ncbi.nlm.nih.gov/books/NBK501355/

### B20 · Page body (minor)

**Was:** Brief Summary Table rows: Pregnancy 'Category B'; Renal dose and Hepatic dose rows; Drug Interactions 'avoid ≥72h'

**Now:** Sync every Brief Summary Table row with the corrected properties: Mechanism (B11), Indications (B8), Coverage (B9), Adult dose (B2), Renal dose (B1), Hepatic dose (B6), Pediatric dose (B7), Drug Interactions (B3), Pregnancy (B5), Breastfeeding (B12), Notes (B4)

**Why:** The summary table repeats the property values, so it has to be corrected along with them.

**Sources:** TFDA insert Brosym https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058156%E8%99%9F

## Verified correct as written

- Category '3rd cephalosporin + β-lactamase inhibitor' matches ATC J01DD62 (cefoperazone and beta-lactamase inhibitor, under J01DD third-generation cephalosporins) on the TFDA page.
- Adult dose '1-2g IV q12h; Severe: 2-4g IV q12h', read as grams of the 1:1 combination, matches the insert (1g/1g to 2g/2g per day in 2 doses; severe up to 4g/4g per day in 2 doses), as does the body's 'MAX sulbactam 4g/day'.
- Pediatric numbers 40–80 mg/kg/day divided q6–12h, severe up to 160 mg/kg/day, and MAX sulbactam 80 mg/kg/day match the insert's 20/20–40/40 mg/kg/day in 2–4 doses, up to 80/80 mg/kg/day.
- The body renal table rows for CrCl 15–30 (1g q12h, MAX 2g/day) and <15 (500 mg q12h, MAX 1g/day) match the insert in substance.
- Monitor tags PT/INR, CBC, LFT and renal are supported by insert §8.1 (PT monitoring and periodic renal, blood and liver checks).
- Side Effects tags coagulopathy, LFT↑ and thrombophlebitis are supported by insert §8.1 and §8.3 and by the 注射部位靜脈炎 entry.
- Coverage tags MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Pseudomonas, Acinetobacter and Anaerobes are supported by insert §10.2 and §2.
- Indication tags UTI, IAI, SSTI and Pneumonia are supported by insert §2.
- Breastfeeding 'Compatible; monitor infant for diarrhea/thrush' matches the LactMed summary. The body's milk levels (0.1–0.33 mg/L) and 'LactMed: Acceptable' match LactMed Drug Levels.
- The disulfiram-like reaction attributed to the N-MTT side chain matches insert §7, which says N-MTT inhibits aldehyde dehydrogenase.
- Mechanism: cefoperazone inhibits cell wall synthesis and is bactericidal; sulbactam is a β-lactamase inhibitor. Both match insert §10.1.
- The body lists positive direct Coombs, rash, diarrhoea, eosinophilia, thrombocytopenia, pseudomembranous/C. difficile colitis, SJS/TEN, haemolytic anaemia, agranulocytosis and seizures; all appear in insert §5.5, §8.1 and §8.3.
- Body note 7: 'sulbactam primarily renal; cefoperazone mainly biliary' is consistent with insert §11 (urinary recovery sulbactam 72% vs cefoperazone 25.3%; cefoperazone mostly in faeces).
- Body note 10: 'Does NOT cover MRSA' is plausible and does not contradict the label.
- The PMIDs and PMC IDs the page cites were verified with esummary or efetch: 39318741 (Ebid 2024, Hosp Pharm) and PMC10251771 = PMID 37271979 (Shao 2023, Med Sci Monit). LactMed refs PMID 2989572 (Matsuda 1985, sulbactam/cefoperazone in milk) and 6743732 (Matsuda 1984) were also verified.
- Confirmed that no US FDA label exists: DailyMed spls.json?drug_name=cefoperazone returned 0 and openFDA returned NOT_FOUND. Confirmed that no UK SmPC exists: eMC search 'cefoperazone' returned no results.
- The sources JSON (/home/user/antibiotics-guide/verification/sources/cefoperazone-and-sulbactam.json) is consistent with the brief. I did not edit it.
- No US FDA label: DailyMed spls API (drug_name=cefoperazone) returns 0 and openFDA returns NOT_FOUND. No UK SmPC: eMC says 'No search results for cefoperazone'. All three re-checked 2026-10-05.
- Category '3rd cephalosporin + β-lactamase inhibitor' matches ATC J01DD62 'cefoperazone and beta-lactamase inhibitor' on the TFDA insert pages.
- Adult usual and severe doses (1-2 g q12h; severe up to 4 g q12h combined) match TW 仿單 §3.1 (1g/1g–2g/2g per day q12h; severe 4g/4g per day).
- Pediatric 40-80 mg/kg/day div q6-12h and severe up to 160 mg/kg/day (combined) match TW 仿單 §3.1 (20/20–40/40 and 80/80 mg/kg/day, 2-4 doses). Max sulbactam 80 mg/kg/day is consistent.
- The body's renal table (>30 no adjustment; 15-30 max 1 g q12h; <15 max 500 mg q12h) matches the TW 仿單 §3.3 table, apart from the ≤15 vs <15 boundary and the sulbactam-only framing.
- Monitor tags PT/INR, CBC, LFT and renal are supported by TW 仿單 §8.1: periodic checks for renal function, blood disorders and hepatitis, and PT monitoring for vitamin K deficiency.
- Existing Side Effects tags coagulopathy, LFT↑ and thrombophlebitis are supported by TW 仿單 §8.1 (注射部位靜脈炎; AST/ALT↑; vitamin K deficiency and coagulation abnormality).
- Coverage tags MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Pseudomonas, Acinetobacter and Anaerobes are supported by TW 仿單 §10.2 and §2 說明.
- Indication tags UTI, IAI, SSTI (secondary infection of trauma/burn/surgical wounds) and Pneumonia are supported by TW 仿單 §2.
- Breastfeeding 'Compatible; monitor infant for diarrhea/thrush' agrees with LactMed NBK501355 (rev. 2023-09-15). The body's milk levels of 0.1-0.33 mg/L match LactMed Drug Levels. LactMed ref PMID 2989572 (Matsuda 1985) and PMID 6743732 were verified by esummary.
- The N-MTT side chain causing both the disulfiram-like reaction and vitamin K deficiency is confirmed by TW 仿單 §7 and §8.1(9).
- Cefoperazone is mostly faecal/biliary and sulbactam mostly urinary, matching TW 仿單 §11 (12-h urine recovery: sulbactam 72%, cefoperazone 25.3%). Cefoperazone PK is unaffected by renal failure/HD and sulbactam t½ is prolonged (9.7 h anephric), per Reitberg 1988, PMID 3377461 (verified).
- The body's Chinese reference URL PMC10251771 resolves to PMID 37271979 (Shao 2023), and PubMed 39318741 is Ebid 2024. Both were verified by esummary and are real, relevant studies.
- Positive direct Coombs test is listed in the body and confirmed by TW 仿單 §5.5.

## Apply log

- Adult dose property: IV-only tag (≥3 min push or infusion; 不可IM/SC), 1–2g (0.5/0.5–1/1g) q12h, severe up to 4g (2/2g) q12h, MAX 4g/4g/day, CRAB note per IDSA 2026
- Renal dose, HD, CRRT property: TW insert CrCl table (>30 / 15–30 / ≤15), HD statement from insert §9 plus Reitberg 1988, CRRT from Gao 2016, no labeled HD/CRRT dose
- Drug Interactions property: alcohol ≥1 week, loop diuretics, warfarin/heparin/NSAIDs and aminoglycosides flagged as not in TW insert, lab interference (urine glucose by copper reduction, Coombs)
- Notes property: alcohol ≥1 week, vitamin K risk groups and monitoring, Ebid 2024 RCT, contraindications, TW HCAP phase 3 data, Sepsis/FN marked off-label, CRAB coverage flagged, TFDA insert link replacing the old ndmctsgh link
- Pregnancy property: TW insert §6.1 wording; no US/UK label; no letter category
- Hepatic dose property: TW insert §5.1 wording; overseas 2g/day cap flagged as unverified
- Pediatric dose property: 1:1 mg/kg breakdown; preterm/neonate safety not established (TW); neonate q12h flagged as overseas label
- Breastfeeding property: LactMed (peak ~0.33 mg/L) plus the more conservative TW insert advice to stop breastfeeding
- Mechanism property: β-lactamase types Ic/II/III/IV (weak vs Ia, V); PBP1a/1b and PBP3
- Indications multi-select: [UTI, IAI, Peritonitis, SSTI, Pneumonia, Pelvic]; Sepsis and FN removed and noted in Notes
- Coverage multi-select: added Enterobacter, Serratia, Haemophilus, Bacteroides; kept CRAB with a flag in Notes
- Side Effects multi-select: added Vitamin K deficiency, GI, AKI, hematologic, thrombocytopenia, SJS/TEN, CNS
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body Indications: replaced with the TW insert §2 list plus an off-label line
- Body Coverage table: organisms not named in insert §10.2 flagged [unsourced]; CRAB marked susceptibility-dependent
- Body Adult Dose: removed CRAB q8h row, 1:2 8g/day text and Available-ratios 1:2 bullet; added 1:1-only products line and IV-only line
- Body Renal: TW combination maxima table, Cockcroft-Gault note, HD/CRRT rows replaced with the property text, 'additional cefoperazone' line removed
- Body Hepatic: added insert §5.1(3) line; numeric rows flagged as overseas/unsourced
- Body Pediatric: removed 1:2 240 mg/kg option; neonate row replaced with the TW safety statement
- Body Side Effects: coagulopathy frequency unknown; Japanese PMS data; Lab section; serious items added (ARF, PIE, fulminant hepatitis, AGEP, pancytopenia, fatal bleeding); interstitial nephritis flagged
- Body Monitoring: PT 'every 3 days' flagged; TW at-risk groups added; renal function row updated
- Body Drug Interactions: alcohol ≥1 week; loop diuretic row and lab-test row added; Probenecid and live vaccines flagged
- Body Pregnancy: FDA Category row removed; AU TGA B1 flagged; recommendation replaced with TW insert §6.1
- Body Breastfeeding: <1% row flagged; TW insert row added
- Body Notes: alcohol ≥1 week; CRAB item updated to IDSA 2026; ratio-selection item removed; label PK added; protein binding, dialysis % and sodium flagged
- Body Brief Summary Table: Mechanism, Indications, Coverage, Adult, Renal, Hepatic, Pediatric, DI, Pregnancy, Breastfeeding and Notes rows synced
- Body Chinese VitK paragraph: replaced the 5-10mg/day statement with Ebid 2024 / Shao 2023 / insert text
- Removed pasted AI-chat sections (Indications/Spectrum/Mechanism of Enhanced Coverage/Clinical Use/Dosage Guidelines with IM route, and their link lists)
- Appended References section at the end of the page with all cited sources (TFDA Brosym/Burotam inserts, IDSA AMR 2026, LactMed, PMIDs 2989572, 3377461, 27023465, 39318741, 37271979, DailyMed)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
