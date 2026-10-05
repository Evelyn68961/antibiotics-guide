# Verification: Cetazone (Cefmetazole)

- **Notion entry:** [Cetazone (Cefmetazole)](https://app.notion.com/255c496dfff180688f5fd220636043ce)
- **Hospital codes:** CET03 (Cetazone inj 500 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/cefmetazole.json` (plus any `sources/cefmetazole-taiwan-insert-*.txt`)

## Product and sources

喜達隆注射劑（西華美達諾）〝信東〞 CETAZONE INJECTION (CEFMETAZOLE) "S.T.", 衛署藥製字第035182號, 信東生技 (hospital code CET03, NHI AC35182277, ATC J01DC09). The Taiwan insert is the only official label: TFDA 仿單 at https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F (online insert has no revision date; history PDF is 印刷版次3, 104-10-23). I confirmed again on 2026-10-05 that no US or UK label exists. DailyMed spls.json?drug_name=cefmetazole returns 0 SPLs. In Drugs@FDA, Zefazone NDA050637 and NDA050683 (Pharmacia & Upjohn) are both Discontinued. eMC search for "cefmetazole" returns "No search results". There is no LactMed record (per the source brief and the fetch-script JSON).

## Agreed fixes applied in Notion (32)

### A1 · Page body (error)

**Was:** Starts with "I'll search for comprehensive evidence-based information on cefmetazole to complete your database entry.Based on my comprehensive research..." and ends with "Corrections to your existing entry: ... the label suggests CrCl<30 is 1-2g q18-24h". The full AI-generated monograph contains unsourced or contradicted content: max 12 g/day; 'may give IM'; Serratia marcescens and Haemophilus listed as covered; peritoneal dialysis 0.5-1 g q48h; live-vaccine interaction; 'Vit K 10 mg/week'.

**Now:** REMOVE the pasted AI-chat text. If the owner wants a body, replace it with a short sourced summary, for example: '來源 Sources: TW仿單 衛署藥製字第035182號 (https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F); no current US FDA label (Zefazone discontinued) or UK SmPC; no LactMed record. PK in renal impairment: PMID 2344159. ESBL: PMID 26100708, IDSA 2026 AMR Guidance Q1.6.'

**Why:** Ground rules say pasted AI-chat text is removed. The text also contradicts sources in several places. (1) The TW insert §3.1 caps adults at 4 g/day ('對於難治性或重症感染症應依症狀增量至成人一日量4g'), not 12 g/day. (2) The TW insert gives the route as IV only ('施行靜脈內注射或點滴靜注'), with no IM route. (3) IDSA 2026 AMR guidance says basal AmpC production confers intrinsic resistance to cephamycins, so listing Serratia as covered is unreliable. (4) The closing 'label suggests CrCl<30 1-2g q18-24h' cites a label that no longer exists.

**Sources:** TW仿單 Cetazone §3.1 用法用量, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; IDSA 2026 Guidance on AMR Gram-Negative Infections (published 2026-07-30), AmpC-E section: 'basal AmpC production ... confers intrinsic resistance to ... cephamycins', https://www.idsociety.org/practice-guideline/amr-guidance/; Drugs@FDA NDA050637/NDA050683 Zefazone: Discontinued, https://api.fda.gov/drug/drugsfda.json?search=products.active_ingredients.name:cefmetazole

### A2 · Adult dose (error)

**Was:** mild infection: 1-2g IV q12h<br>severe infection: 1-2g q6-8h

**Now:** 1–2 g/day IV (slow IV push or IV infusion) ÷ q12h<br>重症 severe: ↑ up to 4 g/day ÷ q6–12h (2–4 doses) (TW仿單)<br>Off-label ESBL PK/PD: 1 g q6h if CrCl >60 (PMID 35453208)

**Why:** TW insert §3.1: '通常成人1日量1～2g(力價)，分成2次...對於難治性或重症感染症應依症狀增量至成人一日量4g(力價)...均分成2～4次投與'. The current 'mild' line (1–2 g q12h = 2–4 g/day) is double the label's usual daily dose. The current 'severe' line (1–2 g q6–8h = 3–8 g/day) exceeds the label maximum of 4 g/day. Higher off-label dosing for ESBL comes only from PK/PD modelling and should be labelled off-label.

**Sources:** TW仿單 Cetazone §3.1 用法用量, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Hamada Y et al. Antibiotics (Basel) 2022;11:456, PMID 35453208 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/35453208/

### A3 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-59: q12h<br>CrCl 10-29: 0.5-1g q24h<br>CrCl\<10: 0.5-1g q48h<br><br>HD: 0.5-1g IV after session or 2g IV QOD<br>CRRT: 1-2g IV q12-24h

**Now:** TW仿單: no renal dose table (6.7 目前尚無資訊); 高度腎障害 慎重投與<br>PK: t½ 1.3 h (CrCl >90) → 3.6 h (40–69) → 5.9 h (10–39) → 24 h (HD) → give standard dose at extended interval (PMID 2344159)<br>ESBL PK/PD (off-label): CrCl >60: 1 g q6h; 31–59: 1 g q8h; <30: 1 g q12h (PMID 35453208)<br><br>HD: standard dose after HD (~60% removed per session) (PMID 2344159)<br>CRRT: no data

**Why:** There is no official renal table. The TW insert §6.7 says '目前尚無資訊' and §5.1(5) says '有高度腎障害患者須慎重投與'. No current US or UK label exists. The current values (0.5–1 g reduced doses; CrCl 30–59 'q12h' with no dose stated; HD '2 g QOD'; CRRT 1–2 g q12–24h) have no traceable source. They also conflict with the only renal PK study I could verify. Halstenson 1990 recommends 'standard doses of cefmetazole at extended intervals' and 'standard doses after hemodialysis', with 59.8% removed per HD session. Hamada 2022 PK/PD modelling supports 1 g q12h even at CrCl <30, far more than 0.5–1 g q48h. I found no CRRT study (PubMed search for cefmetazole[ti] with CRRT/hemodiafiltration found only an unrelated hemolytic-anemia case report), so the CRRT line is unsourced.

**Sources:** TW仿單 Cetazone §5.1(5), §6.7, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Halstenson CE et al. Antimicrob Agents Chemother 1990;34:519-23, PMID 2344159 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/2344159/; Hamada Y et al. Antibiotics (Basel) 2022;11:456, PMID 35453208, https://pubmed.ncbi.nlm.nih.gov/35453208/; Namiki T et al. Pharmacotherapy 2024;44:149-162 (HD dosing nomogram), PMID 37984818, https://pubmed.ncbi.nlm.nih.gov/37984818/

### A4 · Pediatric dose (error)

**Was:** 25-150 mg/kg/day IV divided q6-8h (max 12g/day)

**Now:** 25–100 mg/kg/day IV ÷ q6–12h (2–4 doses)<br>重症 severe: up to 150 mg/kg/day ÷ 2–4 doses (TW仿單)

**Why:** TW insert §3.1: '小孩一日量25～100mg(力價)/kg，分成2～4次...重症感染症...小孩一日量150mg(力價)/kg，均分成2～4次投與'. The label allows 2–4 doses (q6–12h), not only q6–8h. 'Max 12 g/day' has no source and is three times the label's adult maximum of 4 g/day. Optional neonatal data from the literature: 20 mg/kg q12h (Cho 1981, PMID 6945452).

**Sources:** TW仿單 Cetazone §3.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Cho N et al. Jpn J Antibiot 1981;34:915-24, PMID 6945452 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/6945452/

### A5 · Pregnancy (error)

**Was:** Category B – Compatible

**Now:** TW仿單: 目前尚無資訊 (no human data, §6.1). Rat teratogenicity study (500–2000 mg/kg/day IV, GD7–11): no maternal/fetal/neonatal abnormality (§10.3). Crosses placenta well; no neonatal abnormality reported after perinatal use (PMID 6945452, 6945451). Used for C-section prophylaxis (PMID 2722729). Use if clearly needed.

**Why:** The FDA retired letter categories, so 'Category B' must not be shown as current. TW insert §6.1 says '目前尚無資訊'. §10.3 畸胎性試驗 says '(Rat 500, 1000, 2000 mg/kg/day妊娠第7日～11日間靜脈內) ...母體、胚胎、胎兒、新生兒均未曾發生任何假想的異常症候'. Human perinatal data: Cho 1981 found good placental transfer and 'No abnormalities were noted' in neonates.

**Sources:** TW仿單 Cetazone §6.1, §10.3, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Cho N et al. Jpn J Antibiot 1981, PMID 6945452, https://pubmed.ncbi.nlm.nih.gov/6945452/; Prophylaxis in caesarean section with cefmetazole and cefoxitin. J Antimicrob Chemother 1989, PMID 2722729 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/2722729/

### A6 · Indications (missing)

**Was:** ["SSTI","UTI","IAI","Surgical prophylaxis"]

**Now:** Add tags: Pneumonia, Sepsis, Peritonitis, Pelvic (keep UTI, IAI)

**Why:** No FDA label or UK SmPC exists, so the product label (TW insert) is the only official indication source. TW §2 適應症: '葡萄球菌、鏈球菌、肺炎雙球菌、腦膜炎球菌及其他具有感受性細菌引起之感染'. TW §10.1(3) lists: '敗血症、支氣管炎、支氣管擴張症之感染、肺炎、慢性呼吸器疾患之二次感染、肺化膿症(肺膿瘍)、膿胸、膽管炎。膽囊炎、腹膜炎、腎盂腎炎、膀胱炎、子宮內感染'. Existing schema options map to these: Sepsis (敗血症), Pneumonia (肺炎/肺膿瘍), IAI (膽管炎/膽囊炎, already present), Peritonitis (腹膜炎), UTI (腎盂腎炎/膀胱炎, already present), Pelvic (子宮內感染). Note: the Pelvic tag is blue and grouped with UTI in the schema; confirm with the owner that it means pelvic/gynecologic infection.

**Sources:** TW仿單 Cetazone §2 適應症 and §10.1 抗菌作用(3), https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

### A7 · Indications (unsupported)

**Was:** SSTI, Surgical prophylaxis

**Now:** FLAG (do not remove) SSTI and Surgical prophylaxis: neither is explicitly listed in TW仿單 §10.1(3), and no current FDA label/UK SmPC exists. SSTI may fall under the broad §2 indication (staphylococcal/streptococcal infections); surgical prophylaxis is literature/off-label (C-section, PMID 2722729). Owner to decide whether to keep; if kept, mark off-label in Notes.

**Why:** Neither indication appears in the TW insert §2 or §10.1. No current US FDA label or UK SmPC exists to approve them. The discontinued US Zefazone label may once have listed them, but it cannot be cited. These tags are unsupported rather than contradicted, so the owner should decide. If kept, they should be marked off-label/literature only.

**Sources:** TW仿單 Cetazone §2, §10.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Drugs@FDA Zefazone NDA050637 Discontinued, https://api.fda.gov/drug/drugsfda.json?search=products.active_ingredients.name:cefmetazole; PMID 2722729, https://pubmed.ncbi.nlm.nih.gov/2722729/

### A8 · Coverage (missing)

**Was:** ["MSSA","Streptococcus","E.coli","Klebsiella","Proteus"]

**Now:** Add tag: Anaerobes (optionally also Neisseria)

**Why:** TW §10.1: '特別是對革蘭氏陰性桿菌(大腸菌、肺炎桿菌、Indole陽性及陰性變形菌)，厭氧桿菌屬呈現強抗菌力' and '又對厭氧性桿菌屬亦具抗菌力'. TW §2 also names 腦膜炎球菌 (meningococcus). The anaerobic activity is a defining feature of cephamycins and is missing from the entry. The insert says 'anaerobic bacilli' without naming Bacteroides, so 'Anaerobes' is the closer tag. Neisseria is optional because the label never mentions meningitis.

**Sources:** TW仿單 Cetazone §2, §10.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

### A9 · Side Effects (missing)

**Was:** ["Vitamin K deficiency"]

**Now:** ["Vitamin K deficiency","coagulopathy","GI","LFT↑","leukopenia","hematologic"]

**Why:** TW §8.1 lists: '(3)腎臟：罕有BUN上昇 (4)肝臟：罕有S-GOT，S-GPT，Alkaliphosphatase上昇 (5)血液：罕有嗜酸性血球增多、白血球減少，紅血球減少 (6)胃腸：有時噁心、嘔吐、下痢 (7)菌交代現象：罕有Candida症'. Shock and rash also appear. Hypoprothrombinemia (coagulopathy) is documented in Breen 1997 via the NMTT side chain and in Japanese postmarketing surveillance ('haemorrhagic tendency'). 'anemia' could also be added (紅血球減少; immune hemolytic anemia case, PMID 34672255).

**Sources:** TW仿單 Cetazone §8.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Breen GA, St Peter WL. Ann Pharmacother 1997;31:180-4, PMID 9034420 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/9034420/; Saito A. J Antimicrob Chemother 1989;23 Suppl D:131-9, PMID 2722721, https://pubmed.ncbi.nlm.nih.gov/2722721/

### A10 · Monitor (missing)

**Was:** ["PT/INR","renal","CBC"]

**Now:** ["PT/INR","renal","CBC","LFT"]

**Why:** TW §8.1(4) lists rises in AST/ALT/ALP ('罕有S-GOT，S-GPT，Alkaliphosphatase上昇'). Postmarketing surveillance found that 'the most common laboratory abnormalities were in hepatic function tests'. The existing PT/INR, renal and CBC tags are supported (see verified list).

**Sources:** TW仿單 Cetazone §8.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Saito A. J Antimicrob Chemother 1989, PMID 2722721, https://pubmed.ncbi.nlm.nih.gov/2722721/

### A11 · Notes (unsupported)

**Was:** NMTT side chain: avoid alcohol, consider Vit K prophylaxis in high-risk; ESBL option when MIC ≤1

**Now:** NMTT side chain: hypoprothrombinemia → consider Vit K prophylaxis in high-risk (PMID 9034420); disulfiram-like reaction rare → avoid alcohol (PMID 2722721). ESBL-E: IDSA 2026 AMR guidance does not suggest cephamycins pending outcome data/optimal dosing (cefmetazole vs meropenem RCT ongoing); observational data show no mortality difference vs carbapenem in ESBL E. coli bacteremia without hematologic malignancy/neutropenia (PMID 26100708); if used, dose by renal function (PMID 35453208). Intrinsically inactive vs AmpC-E (Enterobacter, K. aerogenes, C. freundii, Serratia) (IDSA 2026).

**Why:** The 'MIC ≤1' threshold has no source. IDSA 2026 AMR Guidance Q1.6: 'Cephamycins are not suggested for the treatment of ESBL-E infections until more clinical outcomes data ... are available and optimal dosing has been defined'. The same text notes 'the most encouraging data ... are for cefmetazole', with an RCT against meropenem ongoing. Matsumura 2015 found no mortality difference compared with carbapenems in ESBL E. coli bacteremia without hematologic malignancy or neutropenia. The NMTT and vitamin K advice is supported by Breen 1997 ('give vitamin K as prophylaxis accordingly').

**Sources:** IDSA 2026 AMR Guidance Question 1.6 and AmpC-E section, https://www.idsociety.org/practice-guideline/amr-guidance/; Matsumura Y et al. Antimicrob Agents Chemother 2015;59:5107-13, PMID 26100708 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/26100708/; Breen GA. Ann Pharmacother 1997, PMID 9034420, https://pubmed.ncbi.nlm.nih.gov/9034420/

### A12 · Notes (missing)

**Was:** (no allergy / lab-interference / administration warnings)

**Now:** Append: 禁忌 Cephem (cephalosporin/cephamycin) 過敏者勿用; penicillin 過敏慎用; 使用前宜皮膚試驗. Lab: 尿糖假陽性 (Benedict/Fehling/Clinitest), Jaffe 法 creatinine 假性↑, Coombs (+). IV 大量投與可致血管痛 → 緩慢注射.

**Why:** TW §5.1 warnings: '(1)...宜於使用前施行皮膚試驗 (2)曾對Cephem類...有過敏性之患者，請勿投與 (3)曾對Penicillins類...須慎重投與 (6)...尿糖假陽性反應，用Jaff反應檢查Creatinine時可能發生高Creatinine值...Coomb氏試驗呈陽性 (8)...可能招致血管痛'. These label warnings are missing from every column. Section 5.1(9) (storage after reconstitution) is deliberately left out under the no-storage rule.

**Sources:** TW仿單 Cetazone §5.1 警語/注意事項, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

### A13 · Drug Interactions (unsupported)

**Was:** Warfarin (↑INR), AVOID Alcohol (disulfiram-like), aminoglycosides, furosemide

**Now:** Warfarin (↑INR; NMTT hypoprothrombinemia), AVOID Alcohol (disulfiram-like), furosemide/loop diuretics (↑腎障害, rat data – TW仿單), aminoglycosides (class caution, no cefmetazole-specific data)

**Why:** TW §7 交互作用 says '目前尚無資訊'. Furosemide is supported by TW §5.1(7): '動物試驗(老鼠)，本劑與Furosemide等利尿劑併用有腎障害增強的報告'. Alcohol is supported by Saito 1989: 'Disulfiram-like reactions associated with alcohol ingestion were also reported rarely'. Warfarin is supported only by mechanism (NMTT hypoprothrombinemia, Breen 1997), not by a label. I found no cefmetazole-specific source for aminoglycosides, so flag that item rather than remove it.

**Sources:** TW仿單 Cetazone §5.1(7), §7, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Saito A. J Antimicrob Chemother 1989, PMID 2722721, https://pubmed.ncbi.nlm.nih.gov/2722721/; Breen GA. Ann Pharmacother 1997, PMID 9034420, https://pubmed.ncbi.nlm.nih.gov/9034420/

### A14 · Breastfeeding (minor)

**Was:** Compatible with caution (low milk levels)

**Now:** Compatible with caution (low milk levels; PMID 6945452). No LactMed record; TW仿單 6.2 目前尚無資訊. Monitor infant for diarrhea/thrush.

**Why:** The statement is correct but has no source. LactMed has no record (esearch count 0) and TW §6.2 says '目前尚無資訊'. Cho 1981 found 'The transition of CMZ to mother's milk is a small quantity and the transition of CMZ through mother's milk to a neonate is considered to be a very small amount'. PMID 6945451 agrees.

**Sources:** Cho N et al. Jpn J Antibiot 1981, PMID 6945452, https://pubmed.ncbi.nlm.nih.gov/6945452/; Jpn J Antibiot 1981;34:907-14, PMID 6945451 (esummary verified), https://pubmed.ncbi.nlm.nih.gov/6945451/; TW仿單 Cetazone §6.2, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

### A15 · Mechanism (minor)

**Was:** Binds PBPs → inhibits cell wall synthesis; β-lactamase stable (ESBL)

**Now:** Cephamycin (7α-methoxy): binds PBPs → inhibits cell wall synthesis; β-lactamase stable (ESBL), but not AmpC

**Why:** The current text is correct. TW §10.1: 'Cephem結構之7α位接有Methoxy基...具有對β–lactamase強抵抗性'. IDSA 2026 says cephamycins are 'generally stable against hydrolysis by ESBL enzymes', but basal AmpC production confers intrinsic resistance. Adding 'not AmpC' prevents over-reading 'β-lactamase stable'.

**Sources:** TW仿單 Cetazone §10.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; IDSA 2026 AMR Guidance Q1.6 and AmpC-E section, https://www.idsociety.org/practice-guideline/amr-guidance/

### A16 · Category (minor)

**Was:** 2nd cephalosporin

**Now:** 2nd cephalosporin (cephamycin)

**Why:** TW §10.1: '本劑係由屬Cephamycin類抗生素Cefmetazole Sodium所製成'. Adding the subclass reflects the label and explains the anaerobic and ESBL notes.

**Sources:** TW仿單 Cetazone §10.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

### A17 · Hepatic dose (minor)

**Was:** No adjustment (caution: Vit K-related bleeding)

**Now:** No adjustment (not metabolized; ~85–90% excreted unchanged in urine – TW仿單) (caution: Vit K-related bleeding; PMID 9034420)

**Why:** The content is correct but has no source. TW §6.6 says '目前尚無資訊'. TW §10.1 says '在體內不被代謝，幾乎以原體由尿中排泄' and §11(2) says '6小時後在尿中之回收率高達85～90%'. Breen 1997 lists 'patients with liver or renal dysfunction' as at risk of hypoprothrombinemia.

**Sources:** TW仿單 Cetazone §6.6, §10.1, §11, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; Breen GA. Ann Pharmacother 1997, PMID 9034420, https://pubmed.ncbi.nlm.nih.gov/9034420/

### B1 · Page body (error)

**Was:** The body opens with "I'll search for comprehensive evidence-based information on cefmetazole to complete your database entry.Based on my comprehensive research, here is the complete information..." and ends with "Corrections to your existing entry: 1. Coverage: Consider adding B. fragilis... 2. Renal dosing note: ... the label suggests CrCl<30 is 1-2g q18-24h – I'd recommend the more conservative approach". In between is an unsourced monograph and a 'BRIEF SUMMARY TABLE'.

**Now:** REMOVE the pasted AI-chat preamble, the 'BRIEF SUMMARY TABLE' (it duplicates the properties) and the trailing 'Corrections to your existing entry' section. If the owner wants a body, replace it with a short sourced summary. The minimum: (a) dose per TW 仿單 §3.1; (b) TW §5.1 warnings: skin test before use, cephem allergy, caution with penicillin allergy, caution in severe renal impairment, lab interference, furosemide; (c) renal/HD literature (PMID 2344159, 35453208, 37984818); (d) IDSA 2026 Q1.6 cephamycin/ESBL statement; (e) NMTT hypoprothrombinemia (PMID 9034420, 27463687, 40720441). Each with its URL.

**Why:** Ground rules: remove pasted AI-chat text. The body also contains unsourced claims that sources contradict. 'Maximum daily dose: 12 g/day' contradicts TW §3.1 (adult up to 4 g/day). 'may give IM' contradicts TW §3.1 (靜脈內注射或點滴靜注 only). The 'CrCl >90 / 50-90 / 30-49' table, 'Peritoneal Dialysis: 0.5-1 g IV q48h' and 'CRRT 1-2 g q12-24h' have no source. The 'label suggests CrCl<30 is 1-2g q18-24h' line cites a label that does not exist: there is no current FDA/UK label and the TW insert has no renal table. 'Serratia marcescens' is listed as covered, but IDSA says S. marcescens hydrolyzes cephamycins even at basal AmpC expression. The 'Live vaccines (BCG, typhoid)' and 'Aminoglycosides ... physical incompatibility' interactions are unsourced.

**Sources:** TW 仿單 §3.1 用法用量, §5.1 警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; IDSA AMR Guidance 2026, Question 1.6 and AmpC-E section — https://www.idsociety.org/practice-guideline/amr-guidance/; DailyMed SPL search (0 results) — https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=cefmetazole

### B2 · Adult dose (error)

**Was:** mild infection: 1-2g IV q12h<br>severe infection: 1-2g q6-8h

**Now:** 1-2 g/day IV divided q12h (i.e. 0.5-1 g q12h)<br>severe/refractory: up to 4 g/day IV divided q6-12h (2-4 doses)<br>IV push slowly (1 g in 10 mL) or IV infusion (TW 仿單)

**Why:** TW insert §3.1: '通常成人1日量1～2g(力價)，分成2次...對於難治性或重症感染症應依症狀增量至成人一日量4g(力價)...均分成2～4次投與'. The current text gives 2-4 g/day for mild infection and up to 8 g/day for severe infection. That is double the label's usual and maximum daily doses. If the owner wants higher ESBL-directed dosing, it must be labelled off-label and cited. Hamada 2022 (PMID 35453208) PK/PD gives 1 g q6h for CrCl >60. Namiki 2024 (PMID 37984818) gives 2 g q6h for MIC 8 mg/L at CrCl 60.

**Sources:** TW 仿單 §3.1 用法用量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 35453208 (Hamada, Antibiotics 2022) — https://pubmed.ncbi.nlm.nih.gov/35453208/; PMID 37984818 (Namiki, Pharmacotherapy 2024) — https://pubmed.ncbi.nlm.nih.gov/37984818/

### B3 · Renal dose, HD, CRRT (unsupported)

**Was:** CrCl 30-59: q12h<br>CrCl 10-29: 0.5-1g q24h<br>CrCl\<10: 0.5-1g q48h<br><br>HD: 0.5-1g IV after session or 2g IV QOD<br>CRRT: 1-2g IV q12-24h

**Now:** TW 仿單: 無腎功能調整表 (§6.7 目前尚無資訊; §5.1 高度腎障害須慎重投與)<br>Standard dose at extended interval (t½ 1.3h → 3.6h CrCl 40-69 → 5.9h CrCl 10-39 → 24h HD; PMID 2344159)<br>ESBL-E PK/PD: CrCl >60: 1g q6h; 31-59: 1g q8h; <30: 1g q12h (PMID 35453208)<br><br>HD: standard dose (1g) after HD; HD removes ~60% (PMID 2344159, 37984818)<br>CRRT: no data

**Why:** No current label gives a renal table. The TW insert §6.7 says '目前尚無資訊', and §5.1(5) says '有高度腎障害患者須慎重投與'. There is no FDA SPL and no UK SmPC. None of the Notion numbers can be traced to a source. They also conflict with the hospital page's numbers (30-49: 1-2 g q16h; 10-29: q24h; <10: q48h), which appear to come from the discontinued Zefazone label. Published data: Halstenson 1990 recommends standard doses at extended intervals, with standard doses after hemodialysis. Hamada 2022 Monte Carlo targets 70% T>MIC with 1 g q12h at CCr <30, more frequent than the Notion 0.5-1 g q24-48h. The Notion low-CrCl regimens are likely too low for ESBL-E. I found no CRRT pharmacokinetic study, so the CRRT line has no source.

**Sources:** TW 仿單 §5.1(5), §6.7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 2344159 (Halstenson, AAC 1990) — https://pubmed.ncbi.nlm.nih.gov/2344159/; PMID 35453208 (Hamada, Antibiotics 2022) — https://pubmed.ncbi.nlm.nih.gov/35453208/; PMID 37984818 (Namiki, Pharmacotherapy 2024; HD dosing after/30 min before end of HD) — https://pubmed.ncbi.nlm.nih.gov/37984818/

### B4 · Pediatric dose (error)

**Was:** 25-150 mg/kg/day IV divided q6-8h (max 12g/day)

**Now:** 25-100 mg/kg/day IV divided q6-12h (2-4 doses)<br>severe/refractory: up to 150 mg/kg/day divided q6-12h (TW 仿單)

**Why:** TW insert §3.1: '小孩一日量25～100mg(力價)/kg，分成2～4次...重症感染症...小孩一日量150mg(力價)/kg，均分成2～4次投與'. The label allows 2-4 doses (q6-12h), not only q6-8h. It reserves 150 mg/kg/day for severe infection. It gives no 12 g/day cap, and 12 g/day is three times the adult label maximum of 4 g/day. Optional extra: a neonatal PK study suggests 20 mg/kg q12h (PMID 6945452).

**Sources:** TW 仿單 §3.1 用法用量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 6945452 (Cho, Jpn J Antibiot 1981, neonatal PK) — https://pubmed.ncbi.nlm.nih.gov/6945452/

### B5 · Pregnancy (error)

**Was:** Category B – Compatible

**Now:** TW 仿單: 無人體資料 (§6.1 目前尚無資訊); rat teratogenicity study (500-2000 mg/kg/day IV, GD7-11): no maternal/fetal abnormality (§10.3). Crosses placenta well; no neonatal abnormality reported after perinatal use (PMID 6945452). Use if clearly needed.

**Why:** The FDA retired letter categories, so 'Category B' must not appear as current. The TW insert §6.1 has no human data. §10.3 畸胎性試驗 reports no abnormality in mothers, embryos, fetuses or newborns in rats at 500-2000 mg/kg/day. The perinatal study (PMID 6945452) found good placental transfer and no abnormality in neonates. 'Compatible' overstates the evidence.

**Sources:** TW 仿單 §6.1, §10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 6945452 — https://pubmed.ncbi.nlm.nih.gov/6945452/; PMID 6945451 — https://pubmed.ncbi.nlm.nih.gov/6945451/

### B6 · Indications (missing)

**Was:** SSTI, UTI, IAI, Surgical prophylaxis

**Now:** UTI, IAI, Sepsis, Pneumonia, Peritonitis, Pelvic (add Sepsis, Pneumonia, Peritonitis, Pelvic; keep UTI, IAI). Flag SSTI and Surgical prophylaxis as not in the TW insert (off-label; surgical prophylaxis has PK literature, PMID 28074152); owner to decide whether to keep them.

**Why:** Neither an FDA label nor a UK SmPC exists, so the TW insert is the only approved-indication source. TW §2 lists infections caused by susceptible staphylococci, streptococci, pneumococci, meningococci and others. §10.1(3) lists 敗血症, 支氣管炎/肺炎/肺膿瘍/膿胸, 膽管炎/膽囊炎, 腹膜炎, 腎盂腎炎/膀胱炎 and 子宮內感染. These map to the existing schema options Sepsis, Pneumonia, IAI, Peritonitis, UTI and Pelvic. The TW insert does not list SSTI or surgical prophylaxis. They are not contradicted, so the rules call for flagging them, not removing them.

**Sources:** TW 仿單 §2 適應症, §10.1 抗菌作用(3) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 28074152 (Tomizawa, colorectal surgery prophylaxis PK/PD) — https://pubmed.ncbi.nlm.nih.gov/28074152/

### B7 · Coverage (missing)

**Was:** MSSA, Streptococcus, E.coli, Klebsiella, Proteus

**Now:** Coverage: MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Bacteroides, Anaerobes (optional: Neisseria). Sources: Anaerobes = TW 仿單 §10.1 (厭氧桿菌屬); Bacteroides = PMID 3481541 (good vs B. fragilis; less active vs B. thetaiotaomicron/ovatus/distasonis/vulgatus); Neisseria = TW §2 (腦膜炎球菌). Do NOT add Serratia/Enterobacter (IDSA AmpC-E: hydrolyzed even at basal AmpC).

**Why:** TW §10.1 says the drug shows strong activity against 厭氧桿菌屬 (anaerobic bacilli) and is effective in infections caused by them. Bacteroides and Anaerobes are existing brown options. TW §2 also names 腦膜炎球菌 (meningococcus), which supports 'Neisseria' as optional. Do not add Serratia or Enterobacter. IDSA AMR Guidance says basal-AmpC organisms are intrinsically resistant to cephamycins, and S. marcescens hydrolyzes them even at basal expression.

**Sources:** TW 仿單 §2, §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; IDSA AMR Guidance 2026, AmpC-E section — https://www.idsociety.org/practice-guideline/amr-guidance/

### B8 · Side Effects (missing)

**Was:** Vitamin K deficiency

**Now:** Vitamin K deficiency, coagulopathy, GI, LFT↑, leukopenia, hematologic

**Why:** TW §8.1 lists: shock (rare); rash/urticaria; BUN rise; S-GOT/S-GPT/ALP rise (→ LFT↑); 嗜酸性血球增多、白血球減少、紅血球減少 (→ leukopenia, hematologic); nausea/vomiting/diarrhoea (→ GI); Candida superinfection; headache. NMTT-related coagulopathy and bleeding are documented: a case report (PMID 9034420), a Taiwan nationwide study of hemorrhage with cefmetazole, aOR 2.88 (PMID 27463687), and an INR-elevation risk model (PMID 40720441). That evidence supports 'coagulopathy' alongside the existing 'Vitamin K deficiency'. All tags proposed are existing schema options.

**Sources:** TW 仿單 §8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 9034420 — https://pubmed.ncbi.nlm.nih.gov/9034420/; PMID 27463687 — https://pubmed.ncbi.nlm.nih.gov/27463687/; PMID 40720441 — https://pubmed.ncbi.nlm.nih.gov/40720441/

### B9 · Monitor (missing)

**Was:** PT/INR, renal, CBC

**Now:** PT/INR, renal, CBC, LFT

**Why:** TW §8.1(4) reports rare rises in S-GOT, S-GPT and alkaline phosphatase. Japanese post-marketing surveillance of 118,318 patients found hepatic function tests were the most common laboratory abnormality (PMID 2722721). The existing PT/INR, renal and CBC tags are supported (see verified list).

**Sources:** TW 仿單 §8.1(4) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 2722721 (Saito, JAC 1989) — https://pubmed.ncbi.nlm.nih.gov/2722721/

### B10 · Notes (unsupported)

**Was:** NMTT side chain: avoid alcohol, consider Vit K prophylaxis in high-risk; ESBL option when MIC ≤1

**Now:** NMTT side chain: hypoprothrombinemia/bleeding risk (elderly, malnourished/low albumin, liver/renal dysfunction, warfarin) → monitor PT/INR, consider Vit K prophylaxis in high-risk (PMID 9034420, 40720441); disulfiram-like reaction rare → avoid alcohol (PMID 2722721, 39247452).<br>ESBL-E: IDSA AMR Guidance Q1.6 does not suggest cephamycins (most encouraging data are for cefmetazole); Japanese observational data: cefmetazole ≈ meropenem for invasive UTI due to ESBL E. coli (PMID 37702483) and for ESBL-E bacteremia, mostly lower-severity (PMID 37901123) — use only if susceptible; dose by renal function/MIC (PMID 35453208, 37984818).<br>仿單: 使用前宜皮膚試驗; Cephem 過敏禁用, Penicillin 過敏慎用; 尿糖假陽性 (Benedict/Fehling/Clinitest), Jaffe 法 Cr 假性升高, Coombs 陽性.

**Why:** No source supports a treatment threshold of 'ESBL option when MIC ≤1'. PMID 38252045 only reports the share of ESBL-E isolates with MIC ≤1 and does not set a cut-off. Namiki 2024 models efficacy up to MIC 8 mg/L with 2 g q6h. IDSA AMR Guidance 2026 Q1.6: 'Cephamycins are not suggested for the treatment of ESBL-E infections until more clinical outcomes data ... are available and optimal dosing has been defined.' It also notes that the most encouraging data are for cefmetazole. The NMTT and vitamin K advice is supported by Breen 1997. The alcohol advice is supported, but the reaction is rare: the first published case report appeared in 2024 (PMID 39247452), and post-marketing surveillance calls it rare (PMID 2722721). The note leaves out TW §5.1 safety items: skin test, cross-allergy, and urine glucose, Jaffe creatinine and Coombs interference.

**Sources:** IDSA AMR Guidance 2026, Question 1.6 — https://www.idsociety.org/practice-guideline/amr-guidance/; TW 仿單 §5.1(1)(2)(3)(6) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 37702483 — https://pubmed.ncbi.nlm.nih.gov/37702483/; PMID 37901123 — https://pubmed.ncbi.nlm.nih.gov/37901123/; PMID 38252045 — https://pubmed.ncbi.nlm.nih.gov/38252045/; PMID 39247452 — https://pubmed.ncbi.nlm.nih.gov/39247452/; PMID 9034420 — https://pubmed.ncbi.nlm.nih.gov/9034420/

### B11 · Drug Interactions (unsupported)

**Was:** Warfarin (↑INR), AVOID Alcohol (disulfiram-like), aminoglycosides, furosemide

**Now:** Warfarin/anticoagulants (↑INR, bleeding), AVOID Alcohol (disulfiram-like, rare), furosemide/loop diuretics (↑腎障害, rat data), probenecid (↑cefmetazole levels); aminoglycosides: unsourced (flag)

**Why:** TW §7 交互作用 says 目前尚無資訊. TW §5.1(7) supports furosemide: '本劑與Furosemide等利尿劑併用有腎障害增強的報告' (rat study). Warfarin is supported by PMID 40720441 (warfarin aOR 98 for INR elevation) and PMID 27463687 (anticoagulants raise hemorrhage risk). Alcohol is supported by PMID 2722721 and 39247452. Probenecid is missing: it lowered clearance from 111.7 to 72.1 mL/min and raised AUC (PMID 2729930). I found no source for an aminoglycoside interaction with cefmetazole. Flag it; do not remove it.

**Sources:** TW 仿單 §5.1(7), §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 40720441 — https://pubmed.ncbi.nlm.nih.gov/40720441/; PMID 27463687 — https://pubmed.ncbi.nlm.nih.gov/27463687/; PMID 2729930 (Ko, AAC 1989, probenecid) — https://pubmed.ncbi.nlm.nih.gov/2729930/; PMID 39247452 — https://pubmed.ncbi.nlm.nih.gov/39247452/

### B12 · Breastfeeding (minor)

**Was:** Compatible with caution (low milk levels)

**Now:** No LactMed record; TW 仿單 §6.2 無資料. Milk transfer very small (PMID 6945452, 6945451) — probably acceptable; monitor infant (diarrhea, thrush).

**Why:** LactMed has no cefmetazole record (esearch count 0), and TW §6.2 says 目前尚無資訊. Cho 1981 reports '移行 to mother's milk is a small quantity'. The 1981 safety study calls it 'quantitatively insignificant'. That supports 'low milk levels', but the field should cite the source and state that LactMed has no record. The infant-monitoring advice is a cephalosporin class inference with no source; flag it.

**Sources:** PMID 6945452 — https://pubmed.ncbi.nlm.nih.gov/6945452/; PMID 6945451 — https://pubmed.ncbi.nlm.nih.gov/6945451/; TW 仿單 §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

### B13 · Mechanism (minor)

**Was:** Binds PBPs → inhibits cell wall synthesis; β-lactamase stable (ESBL)

**Now:** Cephamycin (7α-methoxy): binds PBPs → inhibits cell wall synthesis; β-lactamase stable incl. ESBL, but hydrolysed by AmpC

**Why:** The current text is correct. TW §10.1: 'Cephem結構之7α位接有Methoxy基...具有對β-lactamase強抵抗性'. IDSA says cephamycins are 'generally stable against hydrolysis by ESBL enzymes'. Adding the AmpC limitation, from IDSA's AmpC-E section, prevents misuse against Enterobacter, Citrobacter and Serratia.

**Sources:** TW 仿單 §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; IDSA AMR Guidance 2026 Q1.6 and AmpC-E — https://www.idsociety.org/practice-guideline/amr-guidance/

### B14 · Hepatic dose (minor)

**Was:** No adjustment (caution: Vit K-related bleeding)

**Now:** No adjustment (not metabolized, renally excreted unchanged — TW 仿單 §10.1/§11; §6.6 無資料); caution: liver disorder ↑ INR elevation risk (PMID 40720441)

**Why:** The current text is consistent with the sources but has no citation. TW §6.6 says 目前尚無資訊. §10.1 says '在體內不被代謝，幾乎以原體由尿中排泄', and §11 gives 85-90% excreted unchanged in urine at 6 h. Liver disorder is an independent risk factor for INR elevation (aOR 5.65, PMID 40720441) and for hemorrhage (liver failure aOR 1.69, PMID 27463687).

**Sources:** TW 仿單 §6.6, §10.1, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F; PMID 40720441 — https://pubmed.ncbi.nlm.nih.gov/40720441/; PMID 27463687 — https://pubmed.ncbi.nlm.nih.gov/27463687/

### B15 · Category (minor)

**Was:** 2nd cephalosporin

**Now:** 2nd cephalosporin (cephamycin)

**Why:** This is correct: ATC J01DC09 sits in J01DC, second-generation cephalosporins. TW §10.1 states it is a Cephamycin類抗生素. Adding '(cephamycin)' is optional.

**Sources:** TW 仿單 ATC code J01DC09 and §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035182%E8%99%9F

## Verified correct as written

- No current US FDA label: DailyMed spls.json?drug_name=cefmetazole total_elements 0. Drugs@FDA lists Zefazone NDA050637 and NDA050683 (Pharmacia & Upjohn), both Discontinued.
- No UK SmPC: eMC search for 'cefmetazole' returns 'No search results'.
- Coverage tags MSSA, Streptococcus, E.coli, Klebsiella and Proteus are supported by TW insert §2 (葡萄球菌、鏈球菌、肺炎雙球菌) and §10.1 (大腸菌、肺炎桿菌、Indole陽性及陰性變形菌).
- Indications tags UTI and IAI are supported by TW §10.1(3) (腎盂腎炎、膀胱炎; 膽管炎、膽囊炎、腹膜炎).
- Mechanism 'Binds PBPs → inhibits cell wall synthesis; β-lactamase stable (ESBL)' is consistent with TW §10.1 (7α-methoxy, β-lactamase resistance) and IDSA 2026 (cephamycins generally stable to ESBL hydrolysis).
- Side Effects tag 'Vitamin K deficiency' is supported by Breen 1997 (PMID 9034420): NMTT inhibits vitamin K epoxide reductase, and malnourished, elderly and renal/hepatic-impairment patients are at risk.
- Monitor tags: PT/INR (PMID 9034420; 'haemorrhagic tendency' in PMID 2722721), renal (TW §5.1(5) caution in severe renal impairment; §8.1(3) BUN rise) and CBC (TW §8.1(5) eosinophilia, leukopenia, RBC decrease).
- Drug Interactions: furosemide (TW §5.1(7), rat nephrotoxicity) and alcohol/disulfiram-like reaction (Saito 1989, PMID 2722721) are both supported.
- Notes: NMTT side chain with vitamin K prophylaxis in high-risk patients is supported by PMID 9034420.
- Hepatic dose 'No adjustment' is consistent with TW §10.1 and §11 (not metabolized; 85–90% excreted unchanged in urine).
- Breastfeeding 'low milk levels' is consistent with Cho 1981 (PMID 6945452) and PMID 6945451.
- Category '2nd cephalosporin' is acceptable; the TW insert classifies it as a cephamycin.
- PK: half-life about 1 h (TW §11) and 1.31 h at CrCl >90 (PMID 2344159).
- All PMIDs cited were verified with NCBI esummary: 2344159, 35453208, 37984818, 9034420, 2722721, 26100708, 6945452, 6945451, 2722729, 34672255.
- There is no current US FDA label: DailyMed returns 0 SPLs, and Drugs@FDA shows ZEFAZONE NDA050637 and NDA050683 as Discontinued. There is no UK SmPC: the eMC search returns 'No search results'. There is no LactMed record. The TW insert for 衛署藥製字第035182號 is the label of the stocked product.
- Category '2nd cephalosporin' matches ATC J01DC09 (J01DC = second-generation cephalosporins).
- Mechanism (PBP binding, cell-wall inhibition, β-lactamase/ESBL stability) matches TW §10.1 (7α-methoxy cephamycin, 強β-lactamase抵抗性) and IDSA AMR Guidance 2026 Q1.6.
- Coverage tags MSSA, Streptococcus, E.coli, Klebsiella and Proteus are supported by TW §2 (葡萄球菌、鏈球菌、肺炎雙球菌) and §10.1 (大腸菌、肺炎桿菌、Indole陽性及陰性變形菌).
- Indication tags UTI (TW §10.1: 腎盂腎炎、膀胱炎) and IAI (膽管炎、膽囊炎、腹膜炎) are supported by the TW insert.
- Monitor tags: CBC is supported by TW §8.1(5) (leukopenia, eosinophilia, decreased RBC). Renal is supported by TW §5.1(5) and §8.1(3) (BUN rise) and by renal elimination (§11). PT/INR is supported by PMID 9034420, 27463687 and 40720441.
- Side-effect tag 'Vitamin K deficiency' is supported by the NMTT mechanism and at-risk groups in PMID 9034420.
- Drug interaction 'furosemide' is supported by TW §5.1(7) (rat data). 'Warfarin (↑INR)' is supported by PMID 40720441 (warfarin aOR 98.4) and PMID 27463687. 'Alcohol (disulfiram-like)' is supported by PMID 2722721 and 39247452, though the reaction is rare.
- Hepatic 'No adjustment' is consistent with TW §10.1 and §11 (not metabolized; 85-90% unchanged in urine at 6 h).
- Breastfeeding 'low milk levels' is consistent with PMID 6945452 and 6945451.
- Notes on the NMTT side chain and vitamin K prophylaxis in high-risk patients are supported by PMID 9034420 (Breen & St Peter 1997).
- Taiwan insert numbers re-checked: adult 1-2 g/day in 2 doses, severe up to 4 g/day in 2-4 doses; children 25-100 mg/kg/day in 2-4 doses, up to 150 mg/kg/day; t½ about 1 h; 85-90% urinary recovery at 6 h; IV injection or IV drip only.

## Apply log

- Page body: removed pasted AI-chat preamble, monograph, BRIEF SUMMARY TABLE and 'Corrections to your existing entry'; replaced with short sourced summary (TW仿單 §3.1 dose, §5.1 warnings, renal/HD literature, IDSA 2026 Q1.6, NMTT) plus References section (22 entries with URLs)
- Adult dose: merged TW仿單 §3.1 dosing (1–2 g/day ÷ q12h; severe up to 4 g/day ÷ 2–4 doses; slow IV push/infusion) + off-label ESBL PK/PD 1 g q6h (PMID 35453208)
- Renal dose, HD, CRRT: TW仿單 no renal table/§5.1 caution; PK t½ data (PMID 2344159); ESBL-E PK/PD CrCl-based dosing (PMID 35453208); HD standard dose after HD (PMID 2344159, 37984818); CRRT: no data
- Pediatric dose: 25–100 mg/kg/day ÷ 2–4 doses; severe up to 150 mg/kg/day (TW仿單)
- Pregnancy: replaced 'Category B' with TW仿單 §6.1/§10.3 + PMID 6945452, 6945451, 2722729
- Breastfeeding: low milk transfer (PMID 6945452, 6945451), no LactMed, TW §6.2 no data, monitor infant
- Indications: added Pneumonia, Sepsis, Peritonitis, Pelvic; kept UTI, IAI; kept SSTI and Surgical prophylaxis but flagged in Notes as not in TW仿單 (owner to decide)
- Coverage: added Bacteroides and Anaerobes (Neisseria optional, not added)
- Side Effects: Vitamin K deficiency, coagulopathy, GI, LFT↑, leukopenia, hematologic
- Monitor: PT/INR, renal, CBC, LFT
- Notes: NMTT hypoprothrombinemia/disulfiram; IDSA 2026 Q1.6 ESBL-E statement + observational data; AmpC-E inactivity; indications flag; TW仿單 §5.1 contraindication/skin test/lab interference/vascular pain
- Drug Interactions: warfarin/anticoagulants, alcohol, furosemide (rat data, TW仿單), probenecid (PMID 2729930), aminoglycosides flagged as unsourced class caution
- Mechanism: cephamycin 7α-methoxy; ESBL stable but hydrolysed by AmpC
- Category: 2nd cephalosporin (cephamycin)
- Hepatic dose: no adjustment (renally excreted unchanged, TW仿單) with Vit K/INR caution (PMID 9034420, 40720441)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
