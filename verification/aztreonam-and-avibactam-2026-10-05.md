# New entry: Emblaveo (Aztreonam-avibactam)

- **Notion entry:** [Emblaveo (Aztreonam-avibactam)](https://app.notion.com/3f0c496dfff1819b9c10dd7aaa7156b7). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** EMB01 (Emblaveo inj 1.5/0.5 g)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/aztreonam-and-avibactam.json` (plus any Taiwan insert text files)

## Product and sources

Emblaveo (aztreonam 1.5 g + avibactam 0.5 g per vial; the US label calls this the "2 g" vial), lyophilised powder for IV infusion over 3 hours. The hospital stocks it as code EMB01 (恩必復凍晶注射劑, screen name "Emblaveo 臨採", a temporary self-pay purchase at 7200 with an NHI price of 0). It is the only stocked form, IV only. Labels checked: US EMBLAVEO from AbbVie (DailyMed setid be1a6c99-d4b3-46d7-9e99-6e5f9fab556a, v7, published Aug 05 2026), UK SmPC Emblaveo from Pfizer (eMC 15895, revised 05/2026) and LactMed NBK612978 (revised 2025-03-15). I could not get the Taiwan insert. The hospital P4 page shows no 衛部藥輸字 licence and its 仿單 field is empty, and the TFDA mcp.fda.gov.tw/im search needs a CAPTCHA, which I did not try to get around. So the US label is the reference for renal dosing, and its renal table matches the UK one. The Notion page (created 2026-10-05) has only its title and Category filled in. Every other column and the page body are empty. I edited nothing in Notion. About "task 2,3,5" in the relayed request: nothing in my instructions says what those task numbers are, so I did the full reviewer-A audit, which is read-only.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="green">`IV`</span> Loading 2g/0.67g (aztreonam/avibactam) → 下一個給藥間隔起維持 1.5g/0.5g IV q6h，每劑輸注 3 小時 (CrCl >50)<br>cIAI: 5-10d (UK；US 5-14d)，併用 metronidazole (US: 一律併用；UK: 已知/疑似厭氧菌時)<br>HAP/VAP: 7-14d (UK)<br>cUTI (含腎盂腎炎): 5-10d (UK)<br>治療選擇有限之需氧 Gram(-) 感染: 依感染部位，最長 14d (UK；建議會診感染科)<br>1 vial = 1.5g/0.5g (US 標示 2 g)；loading 需 2 vials

**Why:** The column is empty, but both labels give the dose. The US and UK loading and maintenance doses are identical: a 3-hour infusion, maintenance starting at the next interval, CrCl by Cockcroft-Gault. Treatment duration differs between labels (cIAI: US 5-14 d, UK 5-10 d). The UK also gives durations for HAP/VAP (7-14 d), cUTI (5-10 d) and the limited-options indication (up to 14 d). The labels also disagree on metronidazole: the US gives it concurrently for every cIAI, the UK only when anaerobes are known or suspected. The vial strength is worth stating because the US calls the same vial "2 g" and the loading dose needs two vials (US 2.3 Table 3).

**Sources:** US FDA label 2.1 Table 1, 2.3 Table 3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Table 1 + footnote b — https://www.medicines.org.uk/emc/product/15895/smpc

### A2 · Renal dose, HD, CRRT

CrCl >50: 不需調整<br>CrCl >30-50: LD 2g/0.67g → 0.75g/0.25g q6h<br>CrCl >15-30: LD 1.35g/0.45g → 0.675g/0.225g q8h<br>CrCl ≤15 / HD: LD 1g/0.33g → 0.675g/0.225g q12h，HD 日於 HD 後給藥 (UK: CrCl ≤15 且未開始 HD/RRT 者不應使用)<br>(皆輸注 3 小時；Cockcroft-Gault；US 與 UK 數值相同；腎功能變動時密切監測 CrCl)<br>CRRT: 仿單無固定劑量 (UK: 需高於 HD 劑量，依 CRRT clearance 調整)；off-label 個案 (CVVHDF) LD 2g/0.67g → 1g/0.33g q8h 連續輸注 (PMID 40971909, 42728520)；CVVHDF 清除顯著且受濾器影響 → 建議 TDM (PMID 42595272)

**Why:** The US 2.2 Table 2 and UK 4.2 Table 2 values are identical. The US row reads "≤15 including on hemodialysis", and both labels say to give the dose after HD on dialysis days. Only the UK says not to use the drug at CrCl ≤15 unless HD or other renal replacement therapy is started. The UK also says CRRT needs a higher dose than HD, guided by CRRT clearance, but gives no number. The only published CRRT regimen I found is the one Cosentino 2026 reports, which replicates the earlier Fresán 2025 PK case: 2 g/0.667 g loading, then 1 g/0.333 g q8h as a continuous infusion. I could not see the Fresán abstract on PubMed, so the regimen comes from Cosentino's description. Chen 2026 measured CVVHDF clearance (aztreonam 1.28 L/h, avibactam 2.08 L/h) and found it varied with the filter type, which supports TDM. All three PMIDs were checked with E-utilities esummary/efetch. The CRRT line should be marked off-label.

**Sources:** US FDA label 2.2 Table 2 + footnote e, 8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Table 2 footnotes c,d + CRRT paragraph — https://www.medicines.org.uk/emc/product/15895/smpc; Fresán D et al. J Antimicrob Chemother 2025;80(12):3469-3471, PMID 40971909 — https://pubmed.ncbi.nlm.nih.gov/40971909/; Cosentino F et al. Infection 2026 (online Sep 11), PMID 42728520 — https://pubmed.ncbi.nlm.nih.gov/42728520/; Chen G et al. Int J Antimicrob Agents 2026;67(11):107962, PMID 42595272 — https://pubmed.ncbi.nlm.nih.gov/42595272/

### A3 · Hepatic dose

不需調整 (未於肝功能不全病人研究；aztreonam/avibactam 無顯著肝代謝)；治療中監測 LFT，尤其基礎肝病或併用肝毒性藥物 (US 5.3；UK 4.4)

**Why:** US 12.3 says no dose adjustment is considered necessary. UK 4.2 says no adjustment is required in hepatic impairment. US 5.3 recommends liver tests during treatment, and UK 4.4 recommends close monitoring in hepatic impairment.

**Sources:** US FDA label 12.3 Patients with Hepatic Impairment, 5.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Hepatic impairment, 4.4 — https://www.medicines.org.uk/emc/product/15895/smpc

### A4 · Pediatric dose

<18y 安全性及有效性尚未確立，無資料 (US 8.4；UK 4.2)

**Why:** Both labels say paediatric safety and efficacy are not established, and the UK adds that no data are available. The column should say this rather than stay empty.

**Sources:** US FDA label 8.4 Pediatric Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Paediatric population — https://www.medicines.org.uk/emc/product/15895/smpc

### A5 · Indications

cIAI, HAP, VAP, cUTI

**Why:** Under the FDA-or-UK rule, US 1.1 approves cIAI (in combination with metronidazole, adults with limited or no alternatives), and UK 4.1 approves cIAI, HAP including VAP, and cUTI including pyelonephritis. All four tags exist in the schema. The UK limited-options indication for aerobic Gram-negative infections has no matching option and goes in Notes. Bacteremia and generic Pneumonia/UTI should not be tagged because no label lists them. The US label says HABP/VABP is not a US-approved indication, so Notes should say that HAP/VAP and cUTI are UK-only.

**Sources:** US FDA label 1.1, 6.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/15895/smpc

### A6 · Coverage

E.coli, Klebsiella, Enterobacter, Serratia, Proteus, Pseudomonas, CRKP, CREC(E.coli), Stenotrophomonas

**Why:** E. coli, Klebsiella (pneumoniae/oxytoca), Enterobacter cloacae complex and Serratia marcescens are the clinically proven pathogens in US 1.1/12.4. Proteus mirabilis/vulgaris has in-vitro support in US 12.4 and SmPC 5.1. Pseudomonas aeruginosa appears in the SmPC 5.1 susceptible list only, not in the US list; IDSA 2026 does not suggest the drug for MBL-producing P. aeruginosa, so CRPA must not be tagged (see Notes). CRKP and CREC are supported because US 12.4 shows in-vitro activity against KPC, NDM, VIM, IMP and OXA-48-like Enterobacterales, and IDSA 2026 makes aztreonam-avibactam a preferred option for NDM-E and an alternative for KPC-E and OXA-48-E. Stenotrophomonas maltophilia has in-vitro support in US 12.4 and SmPC 5.1, and IDSA 2026 lists it as an alternative, preferably with a second agent. Do not tag Acinetobacter/CRAB, Gram-positives (Staphylococcus, Streptococcus, Enterococcus, MRSA) or anaerobes/Bacteroides: SmPC 4.4/5.1 says they are not susceptible. Citrobacter, Morganella and Providencia have no schema option and go in Notes.

**Sources:** US FDA label 1.1, 12.4 Antimicrobial Activity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4 Spectrum of activity, 5.1 Antibacterial activity against specific pathogens — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance (published July 30 2026) Questions 3.4, 3.6, NDM-E question, 4.x MBL P. aeruginosa, 6.2 S. maltophilia — https://www.idsociety.org/practice-guideline/amr-guidance/

### A7 · Side Effects

GI, LFT↑, anemia, hypokalemia, CNS, thrombophlebitis, SJS/TEN, coagulopathy, thrombocytopenia

**Why:** The US adverse reactions in more than 5% of patients were hepatic (14.5%), anaemia (8.0%), diarrhoea (5.8%), hypokalaemia (5.8%) and pyrexia (5.8%). The UK common reactions are anaemia 6.9%, diarrhoea 6.2%, ALT↑ 6.2% and AST↑ 5.2%. The tags map as follows. GI covers diarrhoea, nausea, vomiting and CDAD (US 5.4). CNS covers encephalopathy, seizures and confusion, especially in renal impairment or overdose (SmPC 4.4/4.9), plus mental status changes (US 6.1). Thrombophlebitis covers phlebitis and thrombophlebitis (US 6.1, SmPC 4.8). SJS/TEN covers TEN reported with aztreonam in bone-marrow-transplant patients (US 5.2, SmPC 4.8). Coagulopathy covers prolonged PT/aPTT (SmPC 4.4/4.8, US 6.1). Thrombocytopenia is in US 6.1 and SmPC 4.8. Every tag exists in the schema.

**Sources:** US FDA label 5.2-5.4, 6.1 Table 5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4, 4.8 Table 3, 4.9 — https://www.medicines.org.uk/emc/product/15895/smpc

### A8 · Monitor

renal, LFT, CBC, PT/INR, electrolyte

**Why:** Renal: US 2.2/8.6 and SmPC 4.4 advise close CrCl monitoring with dose adjustment. LFT: US 5.3 recommends liver tests during treatment. CBC: anaemia is the most common reaction, and thrombocytopenia occurs. PT/INR: SmPC 4.4 reports PT prolongation and asks for monitoring with oral anticoagulants. Electrolyte: US Table 5 reports hypokalaemia in 5.8%. All options exist in the schema.

**Sources:** US FDA label 2.2, 5.3, 6.1, 8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4 — https://www.medicines.org.uk/emc/product/15895/smpc

### A9 · Mechanism

Aztreonam：monobactam，結合 PBPs (主要 PBP3) 抑制細胞壁 peptidoglycan 合成 → 殺菌；對 class B metallo-β-lactamase (MBL: NDM/VIM/IMP) 水解穩定<br>Avibactam：non-β-lactam β-lactamase inhibitor (與酵素形成對水解穩定之共價加合物)，抑制 Ambler class A (ESBL、KPC)、class C (AmpC) 及部分 class D (OXA-48)，保護 aztreonam 免於共存之 serine β-lactamase 水解；avibactam 本身不抑制 MBL

**Why:** This is the mechanism given in US 12.4 and SmPC 5.1. The PBP3 detail comes from the IDSA 2026 rationale. The point that avibactam protects aztreonam from co-produced serine β-lactamases is the reason the combination works against MBL-producing Enterobacterales (US 12.4 animal models, IDSA 2026).

**Sources:** US FDA label 12.4 Mechanism of action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 5.1 Mechanism of action — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance (NDM-E and S. maltophilia rationale) — https://www.idsociety.org/practice-guideline/amr-guidance/

### A10 · Drug Interactions

Probenecid (OAT1/3 inhibitor)：可能影響 avibactam 排除 → 不建議併用<br>口服抗凝血劑 (warfarin)：aztreonam 可延長 PT → 監測 INR、必要時調整劑量 (UK)<br>腎毒性藥物 (e.g. aminoglycosides)：可能影響腎功能 (UK)<br>無臨床意義之 CYP450 抑制/誘導；與 metronidazole 無交互作用<br>檢驗干擾：Coombs test 可呈陽性

**Why:** US 7.1 and SmPC 4.5 both say probenecid co-administration is not recommended. SmPC 4.4 covers the oral anticoagulant/PT warning, the nephrotoxic co-medication warning and Coombs interference. SmPC 4.5 says there is no CYP interaction, and US 12.3 says no interaction was seen with metronidazole.

**Sources:** US FDA label 7.1, 12.3 Drug Interaction Studies — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4, 4.5 — https://www.medicines.org.uk/emc/product/15895/smpc

### A11 · Pregnancy

人類資料有限 (Emblaveo 本身無懷孕資料；aztreonam 數十年、avibactam 約十年之個案報告未見重大畸形/流產風險)。動物：aztreonam 大鼠/兔無胚胎毒性或致畸性；avibactam 無致畸性，但兔 ≥5 倍 MRHD 出現著床後流產增加、胎兒體重下降、骨化延遲；大鼠 PPND 見幼鼠腎盂/輸尿管擴張。Aztreonam 可通過胎盤。僅在明確需要且效益大於風險時使用 (US 8.1；UK 4.6/5.2)

**Why:** The US 8.1 risk summary is narrative, and UK 4.6 says to use only when clearly indicated. FDA letter categories are retired, so no letter is proposed. The hospital page's "B" is listed as a hospital-database issue.

**Sources:** US FDA label 8.1 Pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.6 Pregnancy — https://www.medicines.org.uk/emc/product/15895/smpc

### A12 · Breastfeeding

LactMed：可接受 (acceptable in nursing mothers)。Aztreonam 乳汁濃度低 (<1% 母體血清濃度；1g IV 後約 0.2-1 mg/L)；avibactam 未於人類研究 (大鼠乳汁可檢出)；觀察嬰兒腹瀉、鵝口瘡

**Why:** The LactMed summary calls aztreonam-avibactam acceptable. The milk levels come from LactMed Drug Levels and US 8.2 / SmPC 4.6 (<1% of serum). Avibactam is unknown in human milk but present in rat milk (US 8.2).

**Sources:** LactMed NBK612978 Summary of Use during Lactation, Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK612978/; US FDA label 8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/15895/smpc

### A13 · Notes

每劑輸注 3 小時；劑量以成分 aztreonam/avibactam 表示 (固定 3:1)<br>IDSA 2026：NDM-E 首選 (與 cefiderocol 並列；無 aztreonam-avibactam 時可用 ceftazidime-avibactam + aztreonam)；KPC-E、OXA-48-E 為 alternative；ESBL-E 雖有效但應保留給 carbapenem 抗藥菌<br>不涵蓋 Acinetobacter、Gram(+)、厭氧菌 → cIAI 併用 metronidazole；疑 Gram(+) 需另加藥 (UK 4.4)<br>MBL-producing P. aeruginosa 不建議使用 (IDSA 2026)；S. maltophilia 為 alternative，宜合併第二種藥物 (IDSA 2026)<br>Citrobacter freundii complex 為 US cIAI 臨床適應菌 (US 1.1)；體外亦具活性：C. koseri、Morganella、Providencia (US 12.4/UK 5.1)<br>禁忌：對 aztreonam/avibactam/L-arginine 過敏；UK 另禁用於對任何 β-lactam (penicillin、cephalosporin、carbapenem) 曾發生嚴重過敏者 (US 無此項)<br>US 僅核准 cIAI (限無其他選擇者)；HAP/VAP、cUTI 及「治療選擇有限之需氧 Gram(-) 感染」為 UK 適應症 (後者建議會診感染科)<br>Coombs test 可呈陽性；每瓶含鈉約 44.6 mg

**Why:** The Notes collect, with sources, the points that need text: the IDSA 2026 positioning, the spectrum gaps (SmPC 4.4/5.1), the MBL P. aeruginosa limitation, organisms with no schema option (Citrobacter, Morganella, Providencia), the contraindication difference between the UK (all severe β-lactam allergy) and the US (components only), which indications are UK-only, and Coombs/sodium (SmPC 4.4). Storage and stability are deliberately left out. The 臨採 line is administrative and can be dropped if the owner prefers.

**Sources:** US FDA label 1.1, 4, 11, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.1, 4.2, 4.3, 4.4, 5.1 — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance Questions 1.7, 3.4, 3.6, NDM-E, MBL P. aeruginosa, 6.2 — https://www.idsociety.org/practice-guideline/amr-guidance/

### A14 · Page body

\<適應症\><br>複雜性腹腔內感染 (cIAI，併用 metronidazole；US/UK)<br>院內/呼吸器相關肺炎 (HAP/VAP；UK)<br>複雜性泌尿道感染 (cUTI，含腎盂腎炎；UK)<br>治療選擇有限之需氧 Gram(-) 感染 (UK；建議會診感染科)<br>適用年齡：≥18 歲<br><br>\<建議劑量\><br><span color="green">`IV`</span> LD 2g/0.67g → 1.5g/0.5g q6h，每劑輸注 3 小時 (CrCl >50)<br>療程：cIAI 5-10 天 (UK；US 5-14)；HAP/VAP 7-14 天；cUTI 5-10 天；limited options 最長 14 天<br><br>\<腎調&洗腎劑量\><br>CrCl >30-50: LD 2g/0.67g → 0.75g/0.25g q6h<br>CrCl >15-30: LD 1.35g/0.45g → 0.675g/0.225g q8h<br>CrCl ≤15 / HD: LD 1g/0.33g → 0.675g/0.225g q12h (HD 日於 HD 後給藥)<br>CRRT: 仿單無固定劑量 (UK: 需高於 HD 劑量，依 CRRT clearance 調整)；CVVHDF 個案 LD 2g/0.67g → 1g/0.33g q8h 連續輸注 (off-label)，建議 TDM<br><br>\<重點\><br>1. 主要用於 NDM 等 MBL 產生之腸桿菌目 (aztreonam 不被 MBL 水解，avibactam 保護其免於 ESBL/KPC/AmpC/OXA-48)；IDSA 2026 NDM-E 首選<br>2. 不涵蓋 Acinetobacter、Gram(+)、厭氧菌；MBL-P. aeruginosa 不建議<br><br>## References<br>- US FDA label EMBLAVEO, DailyMed (v7, Aug 05 2026) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a<br>- UK SmPC Emblaveo (eMC 15895, rev. 05/2026) — https://www.medicines.org.uk/emc/product/15895/smpc<br>- LactMed NBK612978 (rev. 2025-03-15) — https://www.ncbi.nlm.nih.gov/books/NBK612978/<br>- IDSA 2026 AMR Guidance — https://www.idsociety.org/practice-guideline/amr-guidance/<br>- Fresán D et al. JAC 2025, PMID 40971909; Cosentino F et al. Infection 2026, PMID 42728520; Chen G et al. IJAA 2026, PMID 42595272

**Why:** The body is blank. Other entries have a body with sections such as <適應症> and <腎調&洗腎劑量>, so this proposes a short body with the same content as A1, A2, A5 and A13. It has no storage details and no hospital-site text.

**Sources:** US FDA label 1.1, 2.1, 2.2, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.1, 4.2, 4.4, 5.1 — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance — https://www.idsociety.org/practice-guideline/amr-guidance/

### B1 · Adult dose

<span color="green">`IV`</span> Loading 2g/0.67g (aztreonam/avibactam；US 標示 EMBLAVEO 2.67 g) once → 下一給藥間隔起維持 1.5g/0.5g (US 標示 2 g) q6h；皆輸注 3 小時 (CrCl \>50, Cockcroft-Gault)<br>cIAI: 5-10d (UK；US 5-14d)，併用 metronidazole (US 一律併用；UK 已知/疑似厭氧菌時)<br>HAP/VAP: 7-14d (UK)<br>cUTI (含腎盂腎炎): 5-10d (UK)<br>Limited treatment options 之需氧 Gram(-) 感染: 依感染部位，最長 14d (UK；建議會診感染科)<br>US 僅核准 cIAI (≥18 y、limited or no alternative options)<br>1 vial = 1.5g/0.5g；loading 需 2 vials

**Why:** The column is empty. I checked these numbers live myself. US §2 / Table 1: loading EMBLAVEO 2.67 g (aztreonam 2 g + avibactam 0.67 g), then 2 g (1.5 g + 0.5 g) every 6 h, 3-h infusion, cIAI course 5 to 14 days, metronidazole given concurrently. The dosing interval runs from the start of one infusion to the start of the next. UK SmPC 4.2 Table 1: same loading and maintenance doses, 3 h, q6h. Durations there are cIAI 5-10 d, HAP/VAP 7-14 d, cUTI 5-10 d, and limited-options infections up to 14 d. Footnote b: metronidazole only when anaerobes are known or suspected. Since the US and UK durations differ for cIAI, both are shown.

**Sources:** US FDA label §2, §2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Table 1 and footnote b — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance Table 1 (same LD/maintenance regimen) — https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf

### B2 · Renal dose, HD, CRRT

CrCl \>30–≤50: LD 2 g/0.67 g → 0.75 g/0.25 g IV q6h<br>CrCl \>15–≤30: LD 1.35 g/0.45 g → 0.675 g/0.225 g IV q8h<br>CrCl ≤15 / HD: LD 1 g/0.33 g → 0.675 g/0.225 g IV q12h (HD 日於 HD 後給藥)<br>(劑量以 aztreonam/avibactam 表示；皆輸注 3 小時；Cockcroft-Gault；US 與 UK 劑量相同)<br>UK: CrCl ≤15 未開始 HD/其他 RRT 者不應使用；4 小時 HD 移除 aztreonam 38%、avibactam 55%；腎功能變動時密切監測 CrCl 調整劑量<br>CRRT: 仿單無劑量建議 (UK: CRRT 需高於 HD 之劑量，依 CRRT clearance 調整；PD/CVVH 資料不足)。CVVHDF 病例：LD 2 g/0.67 g → 1 g/0.33 g q8h 連續輸注 (Cosentino 2026 PMID 42728520，沿用 Fresán 2025 PMID 40971909 之 PK 報告方案)；CVVHDF 顯著清除兩成分 (ATM 1.28 L/h、AVI 2.08 L/h)，濾器種類影響濃度 → 建議 TDM 個別化 (Chen 2026 PMID 42595272)

**Why:** The column is empty. The renal table matches in both labels. US §2.2 Table 2 includes 'including on hemodialysis' and dosing after HD on HD days. UK SmPC 4.2 Table 2 reads 'on intermittent haemodialysis', and footnote d says not to use at CrCL ≤15 unless renal replacement therapy is started. The UK SmPC also says CRRT patients need a higher dose than HD patients, guided by CRRT clearance, but gives no numbers. The 38%/55% HD removal figures are from SmPC 4.9. Because no label gives a CRRT dose, the CRRT line is marked off-label and cites case-level PubMed evidence (very limited, n=1 to 3). All three PMIDs were checked with E-utilities esummary.

**Sources:** US FDA label §2.2 Table 2 footnote e; §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Table 2 footnotes c,d and RRT/CRRT paragraph; 4.9 — https://www.medicines.org.uk/emc/product/15895/smpc; Cosentino F et al. Infection 2026 (online Sep 11), PMID 42728520 — https://pubmed.ncbi.nlm.nih.gov/42728520/; Fresán D et al. J Antimicrob Chemother 2025;80(12):3469-3471, PMID 40971909 — https://pubmed.ncbi.nlm.nih.gov/40971909/; Chen G et al. Int J Antimicrob Agents 2026;67(11):107962, PMID 42595272 — https://pubmed.ncbi.nlm.nih.gov/42595272/

### B3 · Hepatic dose

No adjustment required (未明顯經肝代謝)；肝功能不全者治療期間密切監測 LFT

**Why:** US §12.3 says dosage adjustments are not considered necessary in hepatic impairment. UK SmPC 4.2 says no dosage adjustment is required. UK SmPC 4.4 recommends close monitoring in hepatic impairment, and US §5.3 recommends liver test monitoring.

**Sources:** US FDA label §12.3 Patients with Hepatic Impairment; §5.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Hepatic impairment; 4.4 — https://www.medicines.org.uk/emc/product/15895/smpc

### B4 · Pediatric dose

\<18 y 安全性及有效性未確立，無兒童劑量 (US/UK；UK: no data)

**Why:** US §8.4: not established below 18 years of age. UK SmPC 4.2: safety and efficacy below 18 years not yet established, and no data are available. UK SmPC 5.2: PK not evaluated in children.

**Sources:** US FDA label §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.2 Paediatric population; 5.2 — https://www.medicines.org.uk/emc/product/15895/smpc

### B5 · Indications

cIAI, HAP, VAP, cUTI

**Why:** Approved if either the FDA label or the UK SmPC lists it. US §1.1 lists cIAI with metronidazole. UK SmPC 4.1 lists cIAI, HAP including VAP, and cUTI including pyelonephritis. All four tags exist in the schema. The fifth UK indication, aerobic Gram-negative infections with limited treatment options, has no tag and goes in Notes (B12). Do not add Bacteremia, Pneumonia or UTI, because no label approves them.

**Sources:** US FDA label §1.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/15895/smpc

### B6 · Coverage

E.coli, Klebsiella, Enterobacter, Serratia, Proteus, CRKP, CREC(E.coli), Stenotrophomonas, Pseudomonas

**Why:** US §1.1 / §12.4 list clinically proven activity against E. coli, K. pneumoniae, K. oxytoca, E. cloacae complex, C. freundii complex and S. marcescens. Proteus, Morganella, Providencia and Stenotrophomonas maltophilia are in vitro only. CRKP and CREC: the US §12.4 lists in vitro activity against KPC, OXA-48-like and MBL (NDM/VIM/IMP) producers. IDSA 2026 Q3.5 makes it a preferred agent for NDM-E, and Q3.4/Q3.6 an alternative for KPC-E and OXA-48-E. Stenotrophomonas appears in US §12.4 (in vitro) and SmPC 5.1, and IDSA 2026 Q6.2 lists it as an alternative, preferably in combination. Pseudomonas is listed in UK SmPC 5.1 (P. aeruginosa) but is not on the US list. Do NOT tag CRPA, because IDSA does not suggest it for MBL-producing P. aeruginosa. Do NOT tag Acinetobacter/CRAB, Gram-positives, anaerobes or Bacteroides, because SmPC 4.4/5.1 lists them as not susceptible. Citrobacter, Morganella and Providencia have no schema option and go in Notes.

**Sources:** US FDA label §1.1; §12.4 Mechanism of action / Antimicrobial Activity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4 Spectrum of activity; 5.1 Antibacterial activity against specific pathogens — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance Q3.4, Q3.5, Q3.6, Q4.4 (MBL-P. aeruginosa), Q6.2 — https://www.idsociety.org/practice-guideline/amr-guidance/

### B7 · Side Effects

LFT↑, anemia, GI, hypokalemia, thrombophlebitis, CNS, coagulopathy, thrombocytopenia, SJS/TEN

**Why:** US §6.1 Table 5 lists hepatic adverse reactions 14.5%, anaemia 8.0%, diarrhoea 5.8%, hypokalaemia 5.8% and pyrexia 5.8%. SmPC 4.8 lists anaemia 6.9%, diarrhoea 6.2%, ALT up 6.2% and AST up 5.2%. Phlebitis and thrombophlebitis are in SmPC 4.8 and US 6.1. CNS covers SmPC 4.4/4.9 encephalopathy and seizures in renal impairment or overdose, and US 6.1 mental status change. Coagulopathy covers US 6.1 'coagulopathy' and SmPC 4.4/4.8 prolonged PT/aPTT. SJS/TEN covers the TEN warning in US §5.2. All tags exist in the schema. Pyrexia has no tag and goes in Notes.

**Sources:** US FDA label §5.2, §5.3, §6.1 Table 5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4, 4.8 Table 3, 4.9 — https://www.medicines.org.uk/emc/product/15895/smpc

### B8 · Monitor

LFT, renal, CBC, electrolyte, PT/INR

**Why:** LFT: US §5.3 recommends monitoring liver tests during treatment. Renal: US §2.2/§8.6 and SmPC 4.4 say to monitor CrCl and adjust the dose. PT/INR: SmPC 4.4 calls for appropriate monitoring with oral anticoagulants because of PT prolongation. CBC and electrolyte are inferred from the most common adverse reactions (anaemia 8%, hypokalaemia 5.8%, US Table 5). No label explicitly requires those two tests, so the owner may drop them.

**Sources:** US FDA label §2.2, §5.3, §6.1 Table 5, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4 (renal impairment; prolongation of prothrombin time) — https://www.medicines.org.uk/emc/product/15895/smpc

### B9 · Mechanism

Aztreonam：monobactam，結合 PBPs (主要 PBP3) 抑制細胞壁 peptidoglycan 合成 → 殺菌；對 class B MBL (NDM/VIM/IMP) 水解穩定。Avibactam：non-β-lactam β-lactamase inhibitor，與酵素形成對水解穩定之共價加合物；抑制 Ambler class A (ESBL、KPC)、class C (AmpC) 及部分 class D (OXA-48)，不抑制 class B，亦無法抑制許多 class D 酵素 → 保護 aztreonam 免受同時產生之 serine β-lactamase 水解。

**Why:** The column is empty. The text follows the mechanism of action in US §12.4 and UK SmPC 5.1. PBP3 as the primary target is from IDSA 2026 Q3.5. Resistance mechanisms are β-lactamases that resist avibactam and hydrolyse aztreonam, mutant or acquired PBPs, porin loss and efflux.

**Sources:** US FDA label §12.4 Mechanism of action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 5.1 Mechanism of action — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance Q3.5 — https://www.idsociety.org/practice-guideline/amr-guidance/

### B10 · Drug Interactions

Probenecid (OAT1/OAT3 抑制劑)：不建議併用 (avibactam 排除可能↓)<br>口服抗凝血劑 (warfarin)：aztreonam 可延長 PT → 監測 INR，必要時調整劑量 (UK)<br>Aminoglycosides 等腎毒性藥物：可能影響腎功能 (UK)<br>無臨床意義之 CYP450 抑制/誘導；與 metronidazole 無交互作用<br>檢驗干擾：direct/indirect Coombs test 可能陽性 (UK)

**Why:** US §7.1 and SmPC 4.5: do not co-administer probenecid. In vitro, probenecid inhibits avibactam uptake by 56-70%. SmPC 4.4 covers PT prolongation with oral anticoagulants, nephrotoxic co-medication and Coombs test interference. SmPC 4.5 and US §12.3 report no CYP effects and no interaction with metronidazole.

**Sources:** US FDA label §7.1; §12.3 Drug Interaction Studies — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.4, 4.5 — https://www.medicines.org.uk/emc/product/15895/smpc

### B11 · Pregnancy

人類資料不足 (數十年 aztreonam、約十年 avibactam 個案報告未見致畸/流產風險)。動物：aztreonam 大鼠/兔無胚胎毒性或致畸性；avibactam 無致畸性，但兔 ≥5× MRHD 見 post-implantation loss、胎重↓、骨化延遲，大鼠 PPND 見幼鼠腎盂/輸尿管擴張。Aztreonam 可通過胎盤。僅在明確需要且效益大於風險時使用 (US 8.1；UK 4.6/5.2)。(FDA 已廢除字母分級)

**Why:** US §8.1 gives a narrative risk summary with no letter category. UK SmPC 4.6: use only when clearly indicated and when benefit to the mother outweighs risk to the child. Placental transfer is from SmPC 5.2. The text does not use a letter category, because the FDA retired them.

**Sources:** US FDA label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.6, 5.2, 5.3 — https://www.medicines.org.uk/emc/product/15895/smpc

### B12 · Breastfeeding

LactMed：可於哺乳期使用 (acceptable in nursing mothers)。Aztreonam 乳汁濃度低 (\<1% 母體血清；1 g IV 後 peak 約 0.2-1 mg/L)；avibactam 人類未研究 (大鼠乳汁可測得)；留意嬰兒腸道菌叢改變 (腹瀉、鵝口瘡)。UK SmPC 較保守：需權衡停止哺乳或停藥。(LactMed NBK612978, rev. 2025-03-15)

**Why:** LactMed Summary: acceptable in nursing mothers. Aztreonam levels in milk are low and avibactam has not been studied. Drug Levels: peak 0.2-0.3 mg/L after 1 g, and 0.4-1 mg/L in a third study. US §8.2: under 1% of serum, and avibactam is present in rat milk. UK SmPC 4.6 says a decision must be made whether to stop breastfeeding or stop therapy, so the UK caveat is mentioned.

**Sources:** LactMed: Aztreonam and Avibactam, NBK612978, Summary of Use during Lactation; Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK612978/; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/15895/smpc

### B13 · Notes

輸注 3 小時；首劑 loading dose，維持劑量自下一給藥間隔開始 (間隔以輸注開始時間計)；每瓶 1.5 g/0.5 g (US 標示 2 g)，loading 2 g/0.67 g 需 2 瓶<br>適應症來源：US 僅 cIAI (≥18 y、limited or no alternative options、併用 metronidazole；HABP/VABP 非 US 核准適應症)；UK 另核准 HAP/VAP、cUTI，及 limited treatment options 之需氧 Gram(-) 感染 (建議會診感染科)<br>IDSA 2026 AMR guidance：NDM-E 首選 (與 cefiderocol 並列；無 ATM-AVI 時可用 CAZ-AVI + aztreonam 替代)；KPC-E、OXA-48-E 為替代選項；S. maltophilia 為替代選項，宜合併第二種藥物；不建議用於 MBL-P. aeruginosa；ESBL-E/AmpC-E 應保留給 carbapenem 抗藥菌<br>不涵蓋 Acinetobacter、Gram(+)、厭氧菌 → 已知/疑似時需另加藥 (cIAI 併用 metronidazole)；Citrobacter freundii complex 為 US 臨床核准菌種；Morganella、Providencia、C. koseri 僅 in vitro 活性 (無對應標籤)<br>禁忌：對 aztreonam/avibactam/L-arginine 過敏；UK 另列對任何其他 β-lactam (penicillin、cephalosporin、carbapenem) 嚴重過敏者禁用 (US 未列)<br>Transaminase 上升常見 (US hepatic ADR 14.5%，ALT ≥5×ULN 3.8%，停藥可恢復)；發燒 (pyrexia 5.8%)<br>腎功能不全/過量可能神經毒性 (腦病變、意識混亂、癲癇)<br>TEN：aztreonam 於骨髓移植病人曾報告<br>Coombs test 陽性可能；每瓶含鈉約 44.6 mg

**Why:** This holds the label content that has no column or tag: the limited-options indication, the UK-only β-lactam cross-allergy contraindication (SmPC 4.3, absent from US §4), organisms without a schema option, pyrexia, sodium content, and the stewardship and resistance positions from IDSA 2026. No storage or stability details are included.

**Sources:** US FDA label §1.1, §2, §4, §5.2, §5.3, §6.1, §11 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC 4.1, 4.2, 4.3, 4.4, 4.9, 5.1 — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance Q2.x (ESBL-E reserve), Q3.4, Q3.5, Q3.6, Q4.4, Q6.2 — https://www.idsociety.org/practice-guideline/amr-guidance/

### B14 · Page body

Aztreonam 加上 avibactam 之後具有哪些優勢?<br>1. Aztreonam 對 MBL (NDM/VIM/IMP) 穩定，avibactam 抑制同時產生之 ESBL、AmpC、KPC、OXA-48 → 可治療 MBL 產生之 CRE (IDSA 2026 NDM-E 首選)<br>2. 不涵蓋 Acinetobacter、Gram(+)、厭氧菌；不建議用於 MBL-P. aeruginosa<br><empty-block/><br>\<適應症\><br>複雜性腹內感染 (cIAI，併用 metronidazole) — US/UK<br>院內/呼吸器型肺炎 (HAP/VAP) — UK<br>複雜性泌尿道感染 (cUTI，含腎盂腎炎) — UK<br>(UK only: limited treatment options 之需氧 Gram(-) 感染，建議會診感染科)<br>適用年齡：≥18 歲<br><empty-block/><br>\<建議劑量\> Loading 2 g/0.67 g IV → 1.5 g/0.5 g IV q6h (US 標示 2.67 g → 2 g)，輸注 3 小時<br>\<腎調&洗腎劑量\><br>CrCl \>30–≤50: LD 2 g/0.67 g → 0.75 g/0.25 g q6h<br>CrCl \>15–≤30: LD 1.35 g/0.45 g → 0.675 g/0.225 g q8h<br>CrCl ≤15/HD: LD 1 g/0.33 g → 0.675 g/0.225 g q12h (洗腎日於洗腎後給藥)<br>CRRT: 仿單無建議 (UK: 需高於 HD 劑量，依 CRRT clearance)；off-label CVVHDF 個案：LD 2 g/0.67 g → 1 g/0.33 g q8h 連續輸注，建議 TDM<br><empty-block/><br>\<臨床使用建議\><br>療程：cIAI 5-10 天 (UK；US 5-14)；HAP/VAP 7-14 天；cUTI 5-10 天；limited options 最長 14 天<br>監測：肝功能、腎功能、CBC、K、INR (併用抗凝血劑)<br>輸注時間：3 小時<br><empty-block/><br>## References<br>- US FDA label EMBLAVEO, DailyMed (v7, Aug 05 2026), §1.1, §2.1–2.3, §4, §5.1–5.4, §6.1, §7.1, §8.1–8.6, §12.3–12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a<br>- UK SmPC Emblaveo (eMC 15895, rev. 05/2026), §4.1–4.9, §5.1–5.2 — https://www.medicines.org.uk/emc/product/15895/smpc<br>- LactMed: Aztreonam and Avibactam, NBK612978 (rev. 2025-03-15) — https://www.ncbi.nlm.nih.gov/books/NBK612978/<br>- IDSA 2026 AMR Guidance (Q1.7, Q2.6, Q3.4–3.6, Q4.4, Q6.2; Table 1) — https://www.idsociety.org/practice-guideline/amr-guidance/<br>- Carmeli Y et al. REVISIT, Lancet Infect Dis 2025;25(2):218-230, PMID 39389071 — https://pubmed.ncbi.nlm.nih.gov/39389071/<br>- Daikos GL et al. ASSEMBLE, JAC Antimicrob Resist 2025;7(4):dlaf131, PMID 40727714 — https://pubmed.ncbi.nlm.nih.gov/40727714/<br>- Fresán D et al. J Antimicrob Chemother 2025;80:3469-71, PMID 40971909; Chen G et al. Int J Antimicrob Agents 2026;67:107962, PMID 42595272; Cosentino F et al. Infection 2026, PMID 42728520

**Why:** The body is blank. The proposal follows the structure of sibling entries such as the Zavicefta page (advantages, 適應症, dosing, renal/HD, clinical notes, references) and is a summary of B1–B13. It uses only label, LactMed, IDSA and E-utilities-verified PubMed sources. PMIDs 39389071 (REVISIT) and 40727714 (ASSEMBLE) were confirmed with esummary; these are the trials IDSA cites as refs 302 and 310.

**Sources:** US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be1a6c99-d4b3-46d7-9e99-6e5f9fab556a; UK SmPC — https://www.medicines.org.uk/emc/product/15895/smpc; IDSA 2026 AMR Guidance — https://www.idsociety.org/practice-guideline/amr-guidance/; Carmeli Y et al. Lancet Infect Dis 2025, PMID 39389071 — https://pubmed.ncbi.nlm.nih.gov/39389071/; Daikos GL et al. JAC Antimicrob Resist 2025, PMID 40727714 — https://pubmed.ncbi.nlm.nih.gov/40727714/

## Apply log

- Adult dose: merged both agreed versions (IV tag, LD 2g/0.67g -> 1.5g/0.5g q6h 3h infusion, US 2.67 g/2 g labelling, indication durations, US cIAI-only note, vial count)
- Renal dose, HD, CRRT: merged (CrCl >50 no adjustment; >30-50, >15-30, <=15/HD tiers; UK HD/RRT notes; CRRT off-label CVVHDF regimen with PMIDs 42728520/40971909, TDM per PMID 42595272)
- Hepatic dose: no adjustment + LFT monitoring (US 5.3; UK 4.4)
- Pediatric dose: <18 y not established (US 8.4; UK 4.2)
- Indications: [cIAI, HAP, VAP, cUTI]
- Coverage: [E.coli, Klebsiella, Enterobacter, Serratia, Proteus, Pseudomonas, CRKP, CREC(E.coli), Stenotrophomonas]
- Side Effects: [GI, LFT↑, anemia, hypokalemia, CNS, thrombophlebitis, SJS/TEN, coagulopathy, thrombocytopenia]
- Monitor: [renal, LFT, CBC, PT/INR, electrolyte]
- Mechanism: merged aztreonam/avibactam mechanism text
- Drug Interactions: probenecid, warfarin/INR, nephrotoxic drugs, no CYP effect, Coombs
- Pregnancy: limited human data, animal findings, no letter category
- Breastfeeding: LactMed acceptable, milk levels, infant monitoring, UK caution
- Notes: merged (infusion/LD timing, 3:1 ratio, US vs UK indications, IDSA 2026 positioning, coverage gaps, contraindications, ADR notes, Coombs, sodium)
- Page body: added indications, dosing, renal/HD/CRRT, clinical-use sections and References section (US FDA label, UK SmPC, LactMed, IDSA 2026, REVISIT, ASSEMBLE, Fresán, Cosentino, Chen)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
