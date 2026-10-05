# New entry: Oxacillin

- **Notion entry:** [Oxacillin](https://app.notion.com/3f0c496dfff181dcb118d9ecb858a799). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** OXA10 (Oxacillin inj 1 g)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/oxacillin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH code OXA10: Oxacillin 針 藍標 1 g/Vial = 歐斯力娜乾粉注射劑 / Oxacillin Powder for Injection "CYH". TW licence 衛署藥製字第057753號 (中化裕民; made by 中國化學製藥 台中工廠). Identified through NHI code AC57753209 and the Chinese name. ATC J01CF04. The hospital page lists IM/IV/IVD; it is the only stocked form. Reference labels: US FDA DailyMed Onesource powder label, setid 4972ec74-1d9a-de9b-e063-6394a90af786 (Jan 29, 2026; old non-PLR format). The Baxter premix label d893e45b-7f18-4c67-b10c-1e2e52a6b3ef (Sep 10, 2026) was cross-checked and has the same text. There is no UK SmPC (not marketed in the UK). LactMed NBK501057 was revised 2024-11-15. The Notion page was confirmed blank: every column is empty except Category, and the page has no body. Scope note: the user's 'task 2,3,5' could not be mapped, so I ran only this read-only review. Nothing was edited in Notion or on disk. The Notion Query Data Source call hit its usage limit, so sibling-entry style was checked by fetching the Sulampi page instead.

## Content written to Notion (30 items)

### A1 · Adult dose

250–500 mg `IM`/<span color="green">`IV`</span> q4–6h (mild–moderate); 1 g IM/IV q4–6h (severe) (FDA)<br>仿單: 成人及 ≥40 kg 兒童 輕中度 (上呼吸道、局部皮膚軟組織) 250–500 mg q4–6h；較嚴重 (下呼吸道/散佈性) ≥1 g q4–6h<br>療程: 嚴重葡萄球菌感染 ≥14 天；退燒、無症狀且培養陰性後再持續 ≥48 h；心內膜炎/骨髓炎需更長 (FDA/仿單)<br>Guideline MSSA (off-label high dose): SSTI 1–2 g IV q4h (IDSA SSTI 2014)；IE 12 g/day IV 分 4–6 次 (AHA 2015)

**Why:** The column is empty. The label dosing table and the TW §3.1 table agree: 250–500 mg q4–6h for mild–moderate infection and 1 g q4–6h for severe (TW: '1 g 或更高劑量'). The two guideline lines cover the high MSSA doses used in practice (2 g q4h = 12 g/day), which exceed the label table. I confirmed both PMIDs with esummary (26373316 Baddour, Circulation 2015; 24947530 Stevens, CID 2014). The dose figures come from those guidelines' regimen tables. I could not re-read the full text here (the NCBI web pages show a CAPTCHA), so reviewer B or the owner should confirm them before writing. If they cannot be confirmed, leave the guideline line out.

**Sources:** US FDA label (Onesource), DOSAGE AND ADMINISTRATION, 'RECOMMENDED DOSAGES' table and duration paragraph: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 衛署藥製字第057753號 §3.1 用法用量: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Stevens DL et al. IDSA SSTI 2014, PMID 24947530: https://pubmed.ncbi.nlm.nih.gov/24947530/; Baddour LM et al. AHA IE 2015, PMID 26373316: https://pubmed.ncbi.nlm.nih.gov/26373316/

### A2 · Renal dose, HD, CRRT

仿單: 腎功能不全通常無需調整劑量<br>FDA: 已知/疑似腎功能不全 → 考慮降低總劑量並監測血中濃度 (避免神經毒性)；大劑量 IV 於腎功能不全者易致神經毒性<br><br>HD/PD: 無法被透析，HD 或 PD 僅移除極少量 (仿單 §11) → 無需透析後補充劑量<br>CRRT: 仿單/FDA 無資料 — unsourced (verify)

**Why:** The column is empty. The two labels say different things. The hospital stocks the CYH product, so the TW insert wording leads: usually no adjustment. The US label adds a caution to consider a lower total dose and to monitor blood levels because of neurotoxicity. TW §11 states that the drug is not dialysable. Neither label covers CRRT, so reviewer B needs a guideline or PK source for it.

**Sources:** TW 仿單 §3.1 '＜腎功能不全＞腎功能不全的病人通常無需調整劑量' and §11 'Oxacillin 無法被透析。經由血液或腹膜透析也僅能除去最少的量': https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; US FDA label, PRECAUTIONS – Laboratory Tests ('a reduction in the total dosage should be considered and blood levels monitored to avoid possible neurotoxic reactions') and ADVERSE REACTIONS – Nervous System Reactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786

### A3 · Hepatic dose

No dose adjustment in labels. 部分經肝代謝 (hepatic inactivation) 及膽汁排除 (FDA Clin Pharm)<br>肝毒性 (發燒、噁心、嘔吐 + AST↑ 為主) 曾報告 → 治療期間定期 AST/ALT (FDA/仿單)

**Why:** The column is empty. Neither label gives a hepatic dose, but both describe hepatotoxicity and require periodic AST/ALT.

**Sources:** US FDA label, CLINICAL PHARMACOLOGY ('Nonrenal elimination includes hepatic inactivation and excretion in bile'), PRECAUTIONS – Laboratory Tests, ADVERSE REACTIONS – Metabolic Reactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §5.1 and §8.1 肝臟方面: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A4 · Pediatric dose

<40 kg: 輕中度 50 mg/kg/day `IM`/<span color="green">`IV`</span> 分 q6h；嚴重 100 mg/kg/day 分 q4–6h (仿單: 100 mg/kg/day 或更高) (FDA/仿單)<br>早產兒及新生兒: 25 mg/kg/day (FDA/仿單)<br>≥40 kg: 依成人劑量 (仿單)<br>新生兒腎功能未成熟 → 血中濃度可能過高，宜監測血中濃度並調整劑量 (FDA/仿單)

**Why:** The column is empty. The FDA and TW tables match. Pediatric Use warns about accumulation in neonates. The US label also says 'Safety and effectiveness in pediatric patients have not been established', even though it gives pediatric doses. That sentence could go in Notes.

**Sources:** US FDA label, DOSAGE AND ADMINISTRATION table and PRECAUTIONS – Pediatric Use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §3.1 and §6.4 小兒: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A5 · Indications

SSTI, Pneumonia, Bacteremia, Endocarditis, Osteoarthritis

**Why:** The column is empty. The US label's indication is organism-based: infections caused by penicillinase-producing staphylococci, including empiric use for suspected resistant staph. The TW §2 indication is broader: staph, strep, pneumococcus, meningococcus. TW §3.1 names upper respiratory tract and skin/soft-tissue infections, and lower respiratory tract or disseminated infections, which supports SSTI and Pneumonia. The FDA and TW dosing text names endocarditis and osteomyelitis, which supports Endocarditis and Osteoarthritis (the existing option for bone/joint). Bacteremia covers 'disseminated' infection and is the main MSSA use (AHA 2015). Do not tag Meningitis: the FDA label says CSF concentrations are insignificant at normal doses, and TW §11 agrees. Every tag above exists in the schema.

**Sources:** US FDA label, INDICATIONS AND USAGE and DOSAGE AND ADMINISTRATION ('Treatment of endocarditis and osteomyelitis may require a longer duration'): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §2 適應症 and §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Baddour 2015 AHA IE, PMID 26373316: https://pubmed.ncbi.nlm.nih.gov/26373316/

### A6 · Coverage

MSSA, Streptococcus

**Why:** The column is empty. The labels cover penicillinase-producing and non-producing staphylococci, but not mecA/PBP2a strains: oxacillin resistance means resistance to all β-lactams except anti-MRSA agents. So use 'MSSA', not the generic 'Staphylococcus', which could be read as including MRSE. This follows the convention from the cefoxitin review. TW §10.2 lists β-hemolytic streptococci and pneumococci, so 'Streptococcus' is label-supported. The FDA label, however, says not to use oxacillin for penicillin-G-susceptible organisms and to stop it if the isolate is not staph. Put that caveat in Notes. Not covered: MRSA, MRSE, Enterococcus, Gram-negatives. TW §2 names meningococcus, but CSF penetration is poor, so do not tag Neisseria.

**Sources:** US FDA label, MICROBIOLOGY (Cross Resistance; Table 1 footnote a on mecA/PBP2a) and INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §10.2 微生物學: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A7 · Side Effects

GI, LFT↑, nephrotoxicity, neurotoxicity, hematologic, neutropenia, leukopenia, anemia, thrombophlebitis

**Why:** The column is empty. Each tag maps to label text. GI: nausea, vomiting, diarrhoea, pseudomembranous colitis/CDAD. LFT↑: hepatotoxicity with raised AST; TW adds transient ALT/ALP rises. nephrotoxicity: renal tubular damage and interstitial nephritis. neurotoxicity: large IV doses in renal insufficiency; TW lists lethargy, confusion, myoclonus and seizures, and warns that a too-rapid IV push can cause seizures. hematologic and neutropenia: agranulocytosis, neutropenia, bone-marrow depression, eosinophilia. leukopenia: TW only. thrombophlebitis: IV use, especially in the elderly. Anaphylaxis has no tag; it goes in Notes. Do not add SJS/TEN or DRESS, which neither label lists. All tags exist in the schema.

**Sources:** US FDA label, WARNINGS; ADVERSE REACTIONS (Body as a Whole, Nervous System, Urogenital, Gastrointestinal, Metabolic); DOSAGE AND ADMINISTRATION (thrombophlebitis): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §8.1 and §3.2 ('若以更快的速度給藥可能會造成痙攣性癲癇'): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A8 · Monitor

CBC, renal, LFT

**Why:** The column is empty. The label calls for CBC with differential before therapy and at least weekly, periodic UA/BUN/creatinine, and periodic AST/ALT. The TW insert says the same. Optionally add 'neuro' for high-dose IV use in renal impairment: the label asks for blood-level monitoring there to avoid neurotoxicity.

**Sources:** US FDA label, PRECAUTIONS – Laboratory Tests: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A9 · Mechanism

Penicillinase-resistant semisynthetic penicillin: 抑制細菌細胞壁合成 → 對增殖期細菌殺菌；可抵抗葡萄球菌 penicillinase (β-lactamase) 水解 (FDA/仿單). Resistance: mecA → PBP2a；oxacillin (或 cefoxitin) 抗藥 = 對所有 β-lactam 抗藥 (anti-MRSA agents 除外) (FDA Microbiology).

**Why:** The column is empty. The text follows the FDA Mode of Action, Cross Resistance and Description sections and TW §10.2.

**Sources:** US FDA label, DESCRIPTION; MICROBIOLOGY – Mode of Action, Mechanism of Resistance, Cross Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §10.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A10 · Drug Interactions

Probenecid: 抑制腎小管分泌 → ↑/延長 oxacillin 血中濃度 (僅用於需極高血中濃度時) (FDA/仿單)<br>Tetracycline (抑菌性): 可能拮抗殺菌作用 → 避免併用 (FDA)<br>Aminoglycosides: 體外互相失活 — 不可同針筒/輸液/管路混合，分開給藥；併用時檢體中 aminoglycoside 濃度可能假性偏低 (仿單)

**Why:** The column is empty. All three interactions come from the labels. Caution: TW §7 has a garbled first sentence ('Oxacillin可增加並延長青黴素在血中之濃度'). The FDA text makes clear it is probenecid that raises oxacillin levels, so the proposed wording follows FDA.

**Sources:** US FDA label, DRUG INTERACTIONS; CLINICAL PHARMACOLOGY (probenecid): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §3.2 and §7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A11 · Pregnancy

No FDA letter category (retired; old-format US label still prints 'Category B'). FDA: 小鼠/大鼠/兔繁殖研究未見生殖力受損或胎兒傷害；人類 penicillin 懷孕使用經驗未顯示胎兒不良影響；無充分對照研究 → 確有需要時才使用. 仿單: 懷孕期間安全性尚未建立，僅在絕對需要時使用. 可達羊水治療濃度 (FDA Clin Pharm).

**Why:** The column is empty. The ground rules forbid writing the letter category as current. The narrative matches the FDA Pregnancy section (Onesource and Baxter labels) and TW §6.1.

**Sources:** US FDA label, PRECAUTIONS – Pregnancy; CLINICAL PHARMACOLOGY (amniotic fluid): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §6.1 懷孕: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A12 · Breastfeeding

LactMed (rev. 2024-11-15): acceptable — 乳汁濃度低 (IM 1 g q6h 最高 ~0.64 mg/L；IV 1 g 單劑 2 h 平均 0.68 mg/L)，不預期對嬰兒造成不良影響 → 哺乳期可使用；偶有嬰兒腸胃菌叢改變致腹瀉或鵝口瘡 → monitor infant. (FDA: caution；仿單: 須特別小心)

**Why:** The column is empty. LactMed is the designated source for breastfeeding. The labels only say 'caution'; that is shown in brackets, following the Sulampi entry's style.

**Sources:** LactMed – Oxacillin, NBK501057 (rev. 2024-11-15), Summary of Use during Lactation and Drug Levels: https://www.ncbi.nlm.nih.gov/books/NBK501057/; US FDA label, PRECAUTIONS – Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §6.2 哺乳: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### A13 · Notes

禁忌: 任何青黴素過敏 (anaphylaxis) 史 (FDA/仿單)<br>不用於 penicillin G 感受性菌；培養非葡萄球菌時應改藥 (FDA)<br>Oxacillin 感受性以 cefoxitin 30 mcg disk 為替代判讀；mecA/PBP2a(+) → 報 oxacillin-R (FDA Microbiology)<br>一般劑量下 CSF/腹水濃度不顯著 (FDA/仿單)<br>Na 含量 2.5 mEq (57.4 mg)/g → 心衰竭/限鈉病人注意 (FDA Geriatric Use)<br>給藥: IV push 1 g 溶於 10 mL，緩慢 ~10 min (過快可能致痙攣)；IV 尤其老年人注意血栓性靜脈炎；IM 打臀大肌深部，避免坐骨神經傷害 (仿單)<br>CDAD 可於停藥 2 個月後發生 (FDA)<br>Pregnancy: no FDA letter category (retired) — see Pregnancy column<br>Breastfeeding: acceptable (LactMed)

**Why:** The column is empty. Each point is label-sourced and clinically useful. Reconstitution volumes are given only for administration. Per the owner's rule, no storage or stability details are included.

**Sources:** US FDA label, CONTRAINDICATIONS, WARNINGS, INDICATIONS, MICROBIOLOGY, Geriatric Use, Directions for use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 §3.2, §4, §11: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; LactMed NBK501057: https://www.ncbi.nlm.nih.gov/books/NBK501057/

### A14 · Page body

Build the body in the Sulampi entry's section layout as A14 proposes, with these changes: (1) Start with a product line: OXA10 Oxacillin 1 g/vial, 歐斯力娜乾粉注射劑 (Oxacillin Powder for Injection "CYH"), 衛署藥製字第057753號, IM/IV push/IVD. (2) Under Coverage 'NOT covered', list MRSA/MRSE (mecA/PBP2a; FDA Cross Resistance), Enterococcus and Gram-negatives. Either drop 'anaerobes' or mark it [unsourced], because neither label addresses anaerobes. (3) Category: 'Penicillinase-resistant (antistaphylococcal) isoxazolyl penicillin'. (4) References: FDA DailyMed setid 4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單 衛署藥製字第057753號 (TFDA mcp URL); LactMed NBK501057; AHA IE 2015 PMID 26373316; IDSA SSTI 2014 PMID 24947530; plus the line 'No UK SmPC (not marketed in UK)'. No storage or stability content.

**Why:** The page was created on 2026-10-05 with only a title and Category. Other entries carry a structured body with a References section. Every element above traces to the cited label, guideline or LactMed source.

**Sources:** US FDA label: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; TW 仿單: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; LactMed NBK501057: https://www.ncbi.nlm.nih.gov/books/NBK501057/

### A15 · Abx

Optional: 'Oxacillin (歐斯力娜)' or leave as is

**Why:** Other rows use 'Brand (generic)' titles, such as 'Sulampi (Ampicillin/Sulbactam)' and 'Ampolin (Ampicillin)'. The stocked product has no distinct English brand, only 'Oxacillin "CYH"', so 'Oxacillin' is acceptable. This is cosmetic only.

**Sources:** TW 仿單 header (中文品名 歐斯力娜乾粉注射劑; 英文品名 Oxacillin Powder for Injection "CYH"): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B1 · Adult dose

<span color="green">`IV`</span> / `IM` (OXA10 1 g vial)<br>Mild–moderate: 250–500 mg q4–6h<br>Severe: 1 g q4–6h (US label); TW 仿單: 1 g q4–6h「或更高劑量」<br>Serious MSSA infection (guideline): up to 2 g IV q4h = 12 g/day (e.g. endocarditis 12 g/24h in 4–6 divided doses, AHA 2015)<br>IV push: dilute in 10 mL, give over ~10 min (faster push may cause seizures, TW 仿單)<br>IM: deep gluteal injection<br>Duration: severe staph infection ≥14 days; continue ≥48 h after the patient is afebrile, asymptomatic and culture-negative; endocarditis/osteomyelitis longer

**Why:** Column is empty on a new entry. Both labels have the same adult table. The Taiwan insert for the stocked product allows doses above 1 g ('或更高劑量'), so the guideline dose of 2 g q4h (12 g/day) used for endocarditis and other serious MSSA infections fits the TW label. The US label caps the table at 1 g q4–6h, so the 12 g/day figure must be cited to the guideline, not the US label. The seizure warning for fast IV push comes only from the TW insert, and it matters for safety.

**Sources:** US FDA label (Onesource) DOSAGE AND ADMINISTRATION table: '250 to 500 mg IM or IV every 4 to 6 hours (mild to moderate infections)… 1 gram IM or IV every 4 to 6 hours (severe infections)'; 'In severe staphylococcal infections… at least 14 days… at least 48 hours after the patient has become afebrile' – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 衛署藥製字第057753號 §3.1 ('成人及體重40公斤以上的兒童：每4到6小時給予1 g或更高劑量') and §3.2 ('以大約10分鐘的時間緩慢注射完畢… 若以更快的速度給藥可能會造成痙攣性癲癇') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Baddour LM et al. AHA Scientific Statement, Infective Endocarditis in Adults, Circulation 2015;132:1435-86, PMID 26373316 (verified via esummary; I could not re-fetch the dosing table text) – https://pubmed.ncbi.nlm.nih.gov/26373316/

### B2 · Renal dose, HD, CRRT

TW 仿單 (stocked product): renal impairment – usually no dose adjustment<br>US label: if renal impairment, consider reducing the total daily dose and monitor blood levels (neurotoxicity risk with large IV doses)<br>HD / PD: not dialysable; minimal removal (TW 仿單) → no supplemental dose after HD<br>CRRT: no label recommendation; no oxacillin-specific CRRT PK data found (PubMed search 2026-10-05) – usual dosing generally used [unsourced extrapolation]; monitor for neurotoxicity

**Why:** Column is empty. The ground rules prefer the stocked product's TW insert ('通常無需調整劑量'). The US label is more cautious, so I list it alongside. The TW insert §11 says oxacillin is not dialysable. On 2026-10-05 a PubMed E-utilities search for 'oxacillin AND (continuous renal replacement OR hemofiltration OR CRRT OR hemodiafiltration)' returned 7 records; none studied oxacillin in CRRT (they were flucloxacillin papers and general reviews). The CRRT line must therefore stay marked as unsourced.

**Sources:** Taiwan 仿單 057753 §3.1 ('＜腎功能不全＞腎功能不全的病人通常無需調整劑量') and §11 ('Oxacillin無法被透析。經由血液或腹膜透析也僅能除去最少的量') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; US FDA label PRECAUTIONS – Laboratory Tests ('If any impairment of renal function is suspected or known to exist, a reduction in the total dosage should be considered and blood levels monitored to avoid possible neurotoxic reactions') and ADVERSE REACTIONS – Nervous System – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786

### B3 · Hepatic dose

No label dose adjustment. Partly hepatic/biliary elimination; monitor AST/ALT (hepatotoxicity reported, esp. high-dose IV >6 g/day)

**Why:** Neither label gives a hepatic dose adjustment. The US label says nonrenal elimination includes hepatic inactivation and biliary excretion, and both labels list hepatotoxicity with raised AST. Onorato 1978 found anicteric hepatitis with high-dose IV oxacillin above 6 g/day and recommends regular liver tests.

**Sources:** US FDA label CLINICAL PHARMACOLOGY ('Nonrenal elimination includes hepatic inactivation and excretion in bile') and ADVERSE REACTIONS – Metabolic Reactions (hepatotoxicity, elevated SGOT) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §8.1 肝臟方面 and §11 ('Oxacillin也可由膽汁中排出') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Onorato IM, Axelrod JL. Hepatitis from intravenous high-dose oxacillin therapy. Ann Intern Med 1978;89:497-500, PMID 697229 (verified via esummary/efetch) – https://pubmed.ncbi.nlm.nih.gov/697229/

### B4 · Pediatric dose

<40 kg (IV/IM):<br>Mild–moderate: 50 mg/kg/day divided q6h<br>Severe: 100 mg/kg/day divided q4–6h (TW 仿單:「或更高劑量」)<br>Premature infants & neonates: 25 mg/kg/day (label)<br>≥40 kg: adult dose<br>Guideline MSSA doses (off-label vs US table): pneumonia >3 mo 150–200 mg/kg/day q6–8h (PIDS/IDSA 2011); endocarditis 200 mg/kg/day q4–6h, max 12 g/day (AHA 2015)<br>Neonates/infants: immature renal excretion → monitor levels and adjust (label)

**Why:** Column is empty. I re-checked the label numbers myself and they match the brief: 50 mg/kg/day q6h, 100 mg/kg/day q4–6h, neonates 25 mg/kg/day. The TW insert again allows higher doses for severe infection. The US label also says 'Safety and effectiveness in pediatric patients have not been established', even though it gives a dosing table. The higher guideline doses therefore need guideline citations.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION table ('Infants and Children < 40 kg: 50 mg/kg/day… every 6 hours… 100 mg/kg/day… every 4 to 6 hours… Premature and Neonates 25 mg/kg/day') and PRECAUTIONS – Pediatric Use – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §3.1 ('小孩體重40公斤以下者：100 mg/kg/day或更高劑量'; '早產兒及新生兒給予25 mg/kg/day') and §6.4 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Bradley JS et al. PIDS/IDSA pediatric CAP guideline, Clin Infect Dis 2011;53:e25-76, PMID 21880587 (verified via esummary; full text not retrievable via PMC efetch) – https://pubmed.ncbi.nlm.nih.gov/21880587/; Baltimore RS et al. AHA Infective Endocarditis in Childhood 2015, Circulation 2015;132:1487-515, PMID 26373317 (verified via esummary) – https://pubmed.ncbi.nlm.nih.gov/26373317/

### B5 · Indications

SSTI, Pneumonia, Bacteremia, Endocarditis, Osteoarthritis

**Why:** The US label's indication is organism-based: infections caused by penicillinase-producing staphylococci. Both labels' dosing sections name skin/soft tissue, upper/lower respiratory and disseminated infections, and say endocarditis and osteomyelitis need longer courses. That supports SSTI, Pneumonia, Endocarditis and Osteoarthritis (the database's bone/joint option). Bacteremia is covered as 'disseminated' infection in the TW insert and by guidelines. I do not propose Meningitis, because the US label says CSF concentrations are insignificant at normal doses; see Notes. All proposed tags exist in the schema.

**Sources:** US FDA label INDICATIONS AND USAGE and DOSAGE AND ADMINISTRATION ('Treatment of endocarditis and osteomyelitis may require a longer duration') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §2 and §3.1 ('上呼吸道感染：局部皮膚及軟組織感染… 下呼吸道或散佈性的感染'; 心內膜炎及骨髓炎) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Stevens DL et al. IDSA SSTI guideline 2014 ('Cefazolin or antistaphylococcal penicillin (eg, nafcillin or oxacillin) is recommended for treatment of pyomyositis caused by MSSA'), PMID 24973422 – https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

### B6 · Coverage

MSSA, Streptococcus (do NOT add Staphylococcus generic, MRSA, MRSE, Enterococcus or any Gram-negatives)

**Why:** The labels cover penicillinase-producing and non-penicillinase-producing S. aureus. TW §10.2 adds β-haemolytic streptococci and pneumococci. Under the US label's Cross Resistance section, oxacillin resistance means resistance to all other β-lactams, so MRSA and MRSE are not covered. I chose 'MSSA' over the generic 'Staphylococcus' tag, as was agreed for cefoxitin, so the tag cannot be read as covering MRSA. TW §2 also lists meningococci, but its microbiology section does not, and the US label limits use to staph. I therefore put Neisseria in Notes rather than as a tag.

**Sources:** US FDA label MICROBIOLOGY – Cross Resistance ('Resistance to oxacillin (or cefoxitin) implies resistance to all other beta-lactam agents, except newer agents with activity against methicillin-resistant Staphylococcus aureus') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §10.2 微生物學 ('對大多數的G(+)球菌有效，包括beta-溶血性鏈球菌、肺炎球菌及不生青黴素酶的葡萄球菌… 也可對抗會產生青黴素酶的葡萄球菌') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B7 · Side Effects

GI, LFT↑, neurotoxicity, nephrotoxicity, hematologic, neutropenia, leukopenia, anemia, thrombophlebitis

**Why:** Both labels list: GI effects and pseudomembranous colitis; hepatotoxicity with raised AST, ALT and ALP; neurotoxicity (lethargy, myoclonus, seizures) with large IV doses, especially in renal impairment; interstitial nephritis; agranulocytosis, neutropenia, leukopenia and bone-marrow depression; haemolytic anaemia (TW); and thrombophlebitis with IV use (US D&A, TW §3.2). There is no tag for hypersensitivity or anaphylaxis, so that goes in Notes. I do not propose SJS/TEN, DRESS or hypokalemia, because neither label lists them. All tags exist in the schema.

**Sources:** US FDA label WARNINGS and ADVERSE REACTIONS (Body as a Whole, Nervous System, Urogenital, Gastrointestinal, Metabolic Reactions); DOSAGE AND ADMINISTRATION ('possibility of thrombophlebitis') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §8.1 (胃腸道/神經/腎臟/血液方面: 溶血性貧血、顆粒性白血球缺乏症、嗜中性白血球減少症、白血球減少症/肝臟) and §3.2 (血栓性靜脈炎) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B8 · Monitor

CBC, renal, LFT

**Why:** Both labels require: blood cultures and WBC with differential before therapy and at least weekly during therapy; periodic urinalysis, BUN and creatinine; and periodic AST/ALT. 'neuro' is optional, if the owner wants to flag the neurotoxicity monitoring that applies in renal impairment. All tags exist.

**Sources:** US FDA label PRECAUTIONS – Laboratory Tests – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §5.1 ('血液培養，白血球及其他不同血球的計數須在治療前先做過一次… 最少每星期再做一次… 尿液分析… BUN、creatinine、AST及ALT') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B9 · Mechanism

Penicillinase-resistant penicillin: bactericidal, inhibits bacterial cell-wall synthesis during active multiplication; stable to staphylococcal penicillinase (β-lactamase)

**Why:** Column is empty. The proposed text is taken directly from the label Description and Microbiology sections.

**Sources:** US FDA label DESCRIPTION ('resistant to inactivation by the enzyme penicillinase') and MICROBIOLOGY – Mode of Action – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §10.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B10 · Drug Interactions

Probenecid (↓ renal tubular secretion → ↑/prolonged oxacillin levels; use only when very high levels needed)<br>Tetracycline (bacteriostatic – may antagonize bactericidal effect; avoid, US label)<br>Aminoglycosides: do NOT mix in same syringe/IV line/bag (in vitro mutual inactivation) – give separately; may cause falsely low aminoglycoside levels in drawn samples (TW 仿單)

**Why:** The brief listed only probenecid and aminoglycosides. It missed the tetracycline antagonism in the US label and the TW note on falsely low aminoglycoside levels in drawn samples. The first sentence of TW §7 is a mistranslation ('Oxacillin可增加並延長青黴素在血中之濃度'); the intended meaning is the probenecid effect. Do not copy that sentence.

**Sources:** US FDA label PRECAUTIONS – Drug Interactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §7 交互作用 and §3.2 ('Oxacillin不可與aminoglycoside在針管中、在輸注液中或其他給藥裝備中混合') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B11 · Pregnancy

No FDA letter category (retired). Mouse/rat/rabbit reproduction studies: no impaired fertility or fetal harm; human penicillin experience shows no evidence of fetal harm, but no adequate controlled studies – use only if clearly needed (US label; TW 仿單: 懷孕期間的安全性尚未建立)

**Why:** Column is empty. The Onesource label still prints 'Pregnancy Category B'; under the ground rules that must not be written as current. The newer Baxter label v21 (Sep 2026) has the same text without the letter.

**Sources:** US FDA label PRECAUTIONS – Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; US FDA label Baxter premix v21 Pregnancy (no letter category) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d893e45b-7f18-4c67-b10c-1e2e52a6b3ef; Taiwan 仿單 057753 §6.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B12 · Breastfeeding

Acceptable – low milk levels (≤~0.7 mg/L after 0.5–1 g doses); not expected to harm infant; monitor infant for diarrhoea/thrush (LactMed 2024). FDA/TW: excreted in milk – use with caution.

**Why:** Column is empty. LactMed is the designated source for breastfeeding. Its Drug Levels section reports milk concentrations of 0.04–0.7 mg/L.

**Sources:** LactMed Oxacillin NBK501057 (rev. 2024-11-15), Summary of Use during Lactation ('Oxacillin is acceptable in nursing mothers') and Drug Levels – https://www.ncbi.nlm.nih.gov/books/NBK501057/; US FDA label PRECAUTIONS – Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §6.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B13 · Notes

CI: history of penicillin hypersensitivity (anaphylaxis risk; partial cross-allergy with cephalosporins/carbapenems, TW 仿單)<br>Not for MRSA/MRSE: oxacillin (or cefoxitin) resistance = resistance to all β-lactams except anti-MRSA agents (FDA)<br>Do not use for organisms susceptible to penicillin G; switch if culture shows no resistant staph (US label)<br>CSF: insignificant concentrations at normal doses – not a label meningitis drug (TW §2 lists 腦膜炎球菌, but no microbiology support)<br>Na 2.5 mEq (57.4 mg) per g – caution in CHF/sodium restriction (FDA)<br>High-dose IV (>6 g/day): hepatitis reported – check LFT regularly (Onorato 1978)<br>vs nafcillin (12 g/day): less hypokalemia, AKI and AE-related discontinuation (Viehman 2016)<br>MSSA bacteremia: cefazolin non-inferior with fewer serious AEs/AKI than cloxacillin (CloCeBa RCT 2025; indirect for oxacillin); observational meta-analysis point estimates also favoured cefazolin (Prosty 2025; oxacillin n=120, wide CI)

**Why:** Notes is empty. Everything proposed comes from a label or a PMID I checked with E-utilities. CloCeBa compared cloxacillin, not oxacillin, so the note says the extrapolation is indirect by naming cloxacillin.

**Sources:** US FDA label CONTRAINDICATIONS, INDICATIONS AND USAGE, CLINICAL PHARMACOLOGY (CSF), Cross Resistance, Geriatric Use (sodium 57.4 mg (2.5 mEq) per gram) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4972ec74-1d9a-de9b-e063-6394a90af786; Taiwan 仿單 057753 §4, §5.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F; Onorato IM, Axelrod JL. Ann Intern Med 1978;89:497-500, PMID 697229 – https://pubmed.ncbi.nlm.nih.gov/697229/; Viehman JA et al. Antimicrob Agents Chemother 2016;60:3090-5, PMID 26976858 (verified) – https://pubmed.ncbi.nlm.nih.gov/26976858/; Burdet C et al. CloCeBa, Lancet 2025;406:2349-59, PMID 41115439 (verified; cloxacillin 25-50 mg/kg q4-6h vs cefazolin; SAE 27% vs 15%, AKI 12% vs 1%) – https://pubmed.ncbi.nlm.nih.gov/41115439/; Prosty C et al. Clin Microbiol Infect 2025;31:1272-82, PMID 40349971 (verified) – https://pubmed.ncbi.nlm.nih.gov/40349971/

### B14 · Page body

Add a short body in the style of other entries: product line (OXA10 Oxacillin 針 1 g/vial, 歐斯力娜乾粉注射劑 Oxacillin "CYH", 衛署藥製字第057753號, `IM`/<span color="green">`IV`</span>/IVD), then a References section listing: TW 仿單 057753 (https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F); DailyMed setid 4972ec74-1d9a-de9b-e063-6394a90af786; LactMed NBK501057; AHA 2015 PMID 26373316; AHA pediatric 2015 PMID 26373317; PIDS/IDSA 2011 PMID 21880587; IDSA SSTI 2014 PMID 24973422; PMIDs 697229, 26976858, 41115439, 40349971. State 'No UK SmPC found on eMC (searched 2026-10-05)'. No storage/stability content.

**Why:** Other entries carry a References list, but this page is blank. The citations used for every column need to be recorded on the page itself. The owner removed storage details on purpose, so the body should not add stability tables.

**Sources:** eMC search 'oxacillin' – 'No search results for oxacillin' (checked 2026-10-05) – https://www.medicines.org.uk/emc/search?q=oxacillin; Taiwan 仿單 057753 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

### B15 · Adult dose

When writing the hospital-issue list: 2 g q4h exceeds the US label (1 g q4–6h), but is permitted by the stocked product's TW 仿單 ('1 g或更高劑量'); it still needs a guideline citation

**Why:** This corrects the brief's hospital-issue item 3. The TW insert explicitly allows 'or higher' doses for adults with severe infection and for children (100 mg/kg/day or higher). The hospital dose therefore does not contradict the stocked product's label. It is guideline-derived and needs a guideline citation.

**Sources:** Taiwan 仿單 057753 §3.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC057753%E8%99%9F

## Apply log

- Adult dose: merged FDA + TW 仿單 doses, guideline high-dose MSSA (IDSA 2014 / AHA 2015) with a note that it exceeds the US label but fits the 仿單 wording '或更高劑量', administration, and duration
- Renal dose, HD, CRRT: 仿單 says usually no adjustment; FDA says reduce the dose and monitor levels; not dialysable (HD/PD); CRRT flagged as an unsourced extrapolation
- Hepatic dose: no label adjustment; hepatic/biliary elimination; hepatotoxicity (>6 g/day, Onorato 1978); monitor AST/ALT
- Pediatric dose: <40 kg 50 / 100 mg/kg/day, neonates 25 mg/kg/day, >=40 kg adult dose, guideline MSSA doses (PIDS/IDSA 2011, AHA 2015), neonatal level monitoring
- Indications: SSTI, Pneumonia, Bacteremia, Endocarditis, Osteoarthritis
- Coverage: MSSA, Streptococcus
- Side Effects: GI, LFT↑, nephrotoxicity, neurotoxicity, hematologic, neutropenia, leukopenia, anemia, thrombophlebitis
- Monitor: CBC, renal, LFT
- Mechanism: penicillinase-resistant, cell-wall inhibition, mecA/PBP2a cross-resistance
- Drug Interactions: probenecid, tetracycline, aminoglycosides
- Pregnancy: no FDA letter category (retired); FDA and 仿單 wording; amniotic fluid
- Breastfeeding: LactMed acceptable, with milk levels; FDA/仿單 caution
- Notes: contraindication/cross-allergy, MRSA/MRSE, cefoxitin surrogate, penicillin-G-susceptible organisms, CSF, sodium content, administration, high-dose hepatitis, nafcillin comparison, cefazolin evidence (CloCeBa/Prosty), CDAD, Pregnancy/Breastfeeding pointers
- Page body: product line (OXA10, 歐斯力娜, 衛署藥製字第057753號, IM/IV push/IVD); sections in the Sulampi layout; Category 'Penicillinase-resistant (antistaphylococcal) isoxazolyl penicillin'; NOT covered lists MRSA/MRSE, Enterococcus and Gram-negatives (anaerobes left out); no storage/stability content
- References section: DailyMed setid 4972ec74... (also Baxter d893e45b...), TW 仿單 057753 TFDA URL, 'No UK SmPC' line with the eMC search, LactMed NBK501057, PMIDs 26373316, 26373317, 24947530 (+ IDSA page), 21880587, 697229, 26976858, 41115439, 40349971
- Renewed date set to 2026-10-05 (is_datetime 0)

**Apply-step notes:**

- Abx: optional rename to 'Oxacillin (歐斯力娜)' not applied (fix said optional / leave as is)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
