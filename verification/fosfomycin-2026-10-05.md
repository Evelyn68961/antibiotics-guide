# Verification: UFO (Fosfomycin)

- **Notion entry:** [UFO (Fosfomycin)](https://app.notion.com/2a0c496dfff180008602f16c08be74f7)
- **Hospital codes:** UFO02 (UFO inj 2 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/fosfomycin.json` (plus any `sources/fosfomycin-taiwan-insert-*.txt`)

## Product and sources

UFO02 - UFO inj 2 g ("政德"優福乾粉注射劑), fosfomycin (as sodium) 2 g/vial, IV only. Taiwan license 衛署藥製字第035049號, NHI AC35049212, ATC J01XX01. The Taiwan insert (TFDA platform, updated 113/01/05, 版次4) is the governing label, and I checked it against the live TFDA page. CORRECTION TO THE SOURCE BRIEF: IV fosfomycin IS FDA-approved in the US. CONTEPO (fosfomycin disodium) for injection, 6 g vial, Meitheal, NDA212271, approved 2025-10-22 for cUTI including pyelonephritis in adults (DailyMed setid 855574f2-39f8-43bc-a3d2-79dbb578cb94, v10, published Nov 17 2025). The fetch script picked the newest SPL, which is the ANI oral sachet, and missed Contepo. I added a `dailymed_iv` entry to /home/user/antibiotics-guide/verification/sources/fosfomycin.json and corrected `dailymed.note`; this is the only file edited. The Notion renal value "CrCL 31–40: 3 g IV q8h" matches the Contepo table word for word.

## Agreed fixes applied in Notion (33)

### A1 · Renal dose, HD, CRRT (error)

**Was:** CrCL 31–40: 3 g IV q8h

**Now:** 台灣仿單 (UFO, stocked product)：CrCl <40 建議給每日劑量之 20–70%：CrCl 40 → 70%、30 → 60%、20 → 40%、10 → 20%。<span color="blue">`HD`</span> 長期間歇性 HD (q48h)：每次透析後 2 g。<span color="blue">`CRRT`</span> CVVH：不需調整。老年人依腎功能調整。\| UK SmPC (Fomicyt)：CrCl 40–80 no adjustment (caution at high doses); same % table (÷2–3; CrCl 10 ÷1–2); first (loading) dose ×2, max 8 g; HD q48h 2 g after each session; post-dilution CVVHF no adjustment. \| US FDA (Contepo, normal 6 g q8h)：CrCl 41–50 LD 6 g → 4 g q8h; 31–40 LD 6 g → 3 g q8h; 21–30 LD 6 g → 5 g q24h; 11–20 LD 6 g → 3 g q24h; HD removes 60–80% → give after HD on HD days.

**Why:** The current single line is the US Contepo row for CrCl 31–40 with no loading dose and no source. It leaves out every other CrCl band, HD and CRRT. The ground rules say to prefer the stocked product's label (Taiwan insert) and show the other labels alongside. Taiwan 3.1 and UK SmPC 4.2 use a percentage-of-daily-dose table with HD and CVVH rules, and US Contepo 2.2 uses a fixed-dose table. Taken alone, the current text implies 9 g/day at CrCl 31–40, which is about 2–6 times the Taiwan label's 70% × 2–4 g/day.

**Sources:** Taiwan insert 優福乾粉注射劑 §3.1 用法用量 (CrCL<40 table, 血液透析, CVVH) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC Fomicyt §4.2 Renal impairment, Table 2; Patients undergoing renal replacement therapy — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO label §2.2 Table 1, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A2 · Adult dose (error)

**Was:** 4g IV q8h

**Now:** <span color="green">`IV`</span> 台灣仿單 (UFO)：成人 2–4 g/day；IVD ÷2 (加入 100–500 mL, 1–2 h)；IV push 1–2 g 溶於 20 mL WFI/葡萄糖液, ≥5 min, 每日 ÷2–4。\| UK SmPC (Fomicyt)：12–24 g/day ÷2–3 (e.g. 4 g q8h); meningitis 16–24 g/day ÷3–4; max 8 g/dose; >16 g/day limited safety data. \| US FDA (Contepo, cUTI)：6 g q8h IV over 1 h, ≤14 days.

**Why:** "4 g IV q8h" (12 g/day) falls within the UK SmPC range but is three times the stocked product's label maximum of 4 g/day (Taiwan §3.1). It is also below the US label's normal dose of 6 g q8h; 4 g q8h is the US dose for CrCl 41–50. The field gives no source and doesn't say which label the dose comes from. The fix is to keep 4 g q8h as the UK example and add the Taiwan and US regimens.

**Sources:** Taiwan insert §3.1 用法用量 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.2 Table 1 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §2.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A3 · Page body (unsupported)

**Was:** Toggle "Does Fosfomycin cover CRAB?" containing pasted Perplexity-style chat answer (inline cites like "academic.oup+2", "pubmed.ncbi.nlm.nih+5", closing line "If you need details on specific synergistic combinations… let me know!", 16-item link list incl. clinicalkey.jp homepage)

**Now:** Replace toggle content (keep the toggle title) with:<br>**不建議單用於 CRAB。** UK SmPC/US FDA label/台灣仿單 均未將 *Acinetobacter* 列為感受性菌種；*A. baumannii* 多具固有抗藥 (AbaF efflux) — Sharma A, J Antimicrob Chemother 2017;72:68-74 (PMID 27650185)。IV fosfomycin 僅有 CRAB 重症合併療法之多中心觀察性經驗 — Russo A, Int J Antimicrob Agents 2024;64:107190 (PMID 38697579)；須與其他有效藥物併用並會診感染科。

**Why:** The text is pasted AI-chat output, which the ground rules allow us to remove or rewrite. Its main claim, that fosfomycin should not be used alone for CRAB, is plausible and consistent with the labels: no label lists Acinetobacter as susceptible, and the UK SmPC 4.4 and Taiwan §5.1 both recommend combination therapy because resistance develops. The rewrite keeps that claim and cites two PMIDs I checked with NCBI esummary (27650185 = Sharma 2017 JAC AbaF; 38697579 = Russo 2024 IJAA IV fosfomycin for CRAB). It drops the unchecked links, including a clinicalkey.jp homepage and a Turkish journal, and the chat sign-off.

**Sources:** PubMed PMID 27650185 (verified esummary) — https://pubmed.ncbi.nlm.nih.gov/27650185/; PubMed PMID 38697579 (verified esummary) — https://pubmed.ncbi.nlm.nih.gov/38697579/; UK SmPC §5.1 susceptibility table (no Acinetobacter), §4.4 combination therapy — https://www.medicines.org.uk/emc/product/100356/smpc

### A4 · Indications (missing)

**Was:** UTI, HAP, cUTI

**Now:** UTI, cUTI, HAP, VAP, Endocarditis, Osteoarthritis, cSSTI, Meningitis, cIAI, Bacteremia

**Why:** The Taiwan insert §2 and UK SmPC §4.1 list cUTI, infective endocarditis, bone/joint infection, HAP including VAP, cSSTI, bacterial meningitis, cIAI and associated bacteraemia, for use when other antibiotics are inappropriate or would not work alone. US Contepo §1.1 adds cUTI including pyelonephritis. VAP, Endocarditis, Osteoarthritis, cSSTI, Meningitis, cIAI and Bacteremia are therefore missing. The schema has no 'bone and joint infection' option; 'Osteoarthritis' is the closest existing tag, and the owner may prefer to add a correct option. 'UTI' (uncomplicated cystitis) is supported only by the US oral sachet label, not by the IV UFO product, but it may stay because an indication counts as approved if any listed label has it.

**Sources:** Taiwan insert §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §1.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; US FDA oral fosfomycin tromethamine INDICATIONS & USAGE — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=36bca22f-49ea-42ce-926b-035c42eb6038

### A5 · Coverage (unsupported)

**Was:** Streptococcus (tag)

**Now:** Keep 'Streptococcus' tag; add to Notes: 'Streptococcus: S. pyogenes inherently resistant; S. pneumoniae — acquired resistance may be a problem (UK SmPC 5.1)'

**Why:** The UK SmPC §5.1 lists Streptococcus pyogenes as inherently resistant and S. pneumoniae as a species where acquired resistance may be a problem. The US labels (Contepo §12.4 and the oral sachet microbiology section) list no streptococci. A genus-level 'Streptococcus' tag is therefore partly contradicted by a label. If the owner wants to keep it, add a Notes caveat ('S. pyogenes intrinsically resistant').

**Sources:** UK SmPC §5.1 'Inherently resistant species: Streptococcus pyogenes'; 'acquired resistance may be a problem: Streptococcus pneumoniae' — https://www.medicines.org.uk/emc/product/100356/smpc

### A6 · Coverage (unsupported)

**Was:** VRE (tag)

**Now:** No change now; flag for owner — keep only if a source is added (no label covers VRE)

**Why:** No label mentions vancomycin-resistant enterococci. The oral US label gives E. faecalis as clinically proven and E. faecium as in vitro only ('clinical significance unknown'). The UK SmPC lists Enterococcus spp. as 'acquired resistance may be a problem'. No source contradicts the tag, so it stays but is flagged as unsupported.

**Sources:** US FDA oral fosfomycin CLINICAL PHARMACOLOGY – Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=36bca22f-49ea-42ce-926b-035c42eb6038; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/100356/smpc

### A7 · Coverage (missing)

**Was:** E.coli, Klebsiella, Enterobacter, Proteus, Enterococcus, Streptococcus, MRSA, VRE, CREC(E.coli)

**Now:** Add: MSSA, E. faecalis, Serratia, Pseudomonas, Haemophilus, Neisseria

**Why:** The UK SmPC §5.1 lists S. aureus, H. influenzae and N. meningitidis as commonly susceptible, and P. aeruginosa and S. marcescens as 'acquired resistance may be a problem'. Taiwan insert §10.1 says activity against 綠膿菌 (Pseudomonas) and 沙雷氏菌 (Serratia) is especially good. US Contepo §12.4 lists S. marcescens in vitro. The US oral label lists E. faecalis as clinically proven. Do not add Anaerobes: Bacteroides is inherently resistant (SmPC §5.1).

**Sources:** UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/100356/smpc; Taiwan insert §10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; US FDA CONTEPO §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; US FDA oral fosfomycin Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=36bca22f-49ea-42ce-926b-035c42eb6038

### A8 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, hypokalemia, neutropenia, leukopenia, thrombocytopenia, thrombophlebitis, QTc prolong, CNS

**Why:** From Taiwan insert §8.1 and UK SmPC §4.8: common effects are dysgeusia, hypernatraemia, hypokalaemia, erythematous rash and injection-site phlebitis. Uncommon effects are nausea, vomiting, diarrhoea and raised ALP/AST/ALT/GGT. Frequency-unknown effects are agranulocytosis, leukopenia, thrombocytopenia, neutropenia, hepatitis, and seizures at high doses (Taiwan). US Contepo §5.2/§6.1 adds QT prolongation (torsades de pointes postmarketing) and ALT/AST ≥3×ULN in 10.3%. The schema has no hypernatremia option, so put it in Notes (see A12).

**Sources:** Taiwan insert §8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.8 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §5.1–5.5, §6.1, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A9 · Monitor (missing)

**Was:** (empty)

**Now:** electrolyte, CBC, renal, LFT

**Why:** Taiwan §5.1 says to monitor Na and K regularly and WBC regularly, and to adjust for renal function. UK SmPC §4.4 says the same for Na/K and leukocyte count. US Contepo §5.1 says to monitor Na, K, Ca, Mg, PO4 and fluid status; §5.3 says to monitor hepatic enzymes; §5.5 says to monitor CBC; §2.2/§8.6 say to monitor CrCl and adjust the dose.

**Sources:** Taiwan insert §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.4 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §5.1, §5.3, §5.5, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A10 · Pediatric dose (missing)

**Was:** (empty)

**Now:** 台灣仿單 (UFO)：100–200 mg/kg/day；IVD ÷2；IV push ÷2–4。\| UK SmPC：preterm (<40 wk PMA) 100 mg/kg/day ÷2；neonate 40–44 wk 200 mg/kg/day ÷3；infant 1–12 mo (≤10 kg) 200–300 mg/kg/day ÷3；1–12 y (10–40 kg) 200–400 mg/kg/day ÷3–4 (high end for severe infection/meningitis)；≥12 y & ≥40 kg = adult dose；no renal dose recommendation in children. \| US FDA (Contepo)：<18 y safety/efficacy not established.

**Why:** Every label covers paediatric use, but the column is empty.

**Sources:** Taiwan insert §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.2 Table 3 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A11 · Hepatic dose (missing)

**Was:** (empty)

**Now:** 不需調整 (UK SmPC: not hepatically metabolised, PK unaffected)。US (Contepo)：severe hepatic impairment → monitor fluid overload & electrolytes.

**Why:** UK SmPC §4.2 and §5.2 say no dose adjustment in hepatic impairment. US Contepo §8.7/§12.3 says the drug is not metabolised by the liver and that patients with severe hepatic impairment should be monitored for fluid overload and electrolytes. The Taiwan insert says nothing on this.

**Sources:** UK SmPC §4.2 Hepatic impairment; §5.2 Hepatic insufficiency — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §8.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A12 · Notes (missing)

**Was:** (empty)

**Now:** ⚠️ 高鈉：每 g 含 Na 14.5 mEq (台灣仿單；UK: 14 mmol/320 mg)，2 g vial ≈ 29 mEq Na → 高血鈉/體液過多 (CHF、腎病症候群、肝硬化、高血壓、低白蛋白、新生兒)；建議低鈉飲食；可延長輸注/減量增加頻次；常致低血鉀 → 補鉀。⚠️ 單用易產生抗藥性 → 建議合併其他抗生素 (台灣仿單/UK SmPC)。US: IV fosfomycin (Contepo 6 g vial) FDA-approved Oct 2025 for cUTI only; oral sachet only for uncomplicated cystitis. IDSA AMR Guidance 2026: IV fosfomycin = alternative for ESBL-E and CRE cUTI (preferentially E. coli, after susceptibility confirmed); routine combination for CRE not suggested. Avoid in known QT prolongation (US label). Dilute with WFI/D5W, not NaCl (UK SmPC 6.6; US: SWFI only).

**Why:** Several label warnings are missing from Notes: sodium load, hypokalaemia and combination therapy (Taiwan §5.1, UK SmPC §4.4) and QT (US Contepo §5.2). Notes is also the place for the IDSA position that supports the CREC tag. I left out storage and stability on purpose, per the owner. The diluent line covers compatibility, not storage, so the owner can drop it.

**Sources:** Taiwan insert §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.4 Excipients/Sodium; §6.6 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §1, §2.4, §5.1, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; IDSA 2026 AMR Guidance (Tamma et al., published July 30, 2026) Q1.2, Q3.1–3.2, Q3.8 — https://www.idsociety.org/practice-guideline/amr-guidance/

### A13 · Drug Interactions (missing)

**Was:** (empty)

**Now:** 協同作用：與 colistin、gentamicin 等合併具 synergy (台灣仿單)。避免併用 QT 延長藥物 (class IA/III antiarrhythmics, TCAs, macrolides, antipsychotics) (US Contepo 7.1)。口服抗凝血劑：抗生素治療期間曾有 INR 上升之報告 (UK SmPC 4.5)。減少併用含鈉藥物 (US Contepo 5.1)。No CYP inhibition/induction (US 12.3)。[口服劑型：metoclopramide ↓ fosfomycin 濃度 — 不適用於 IV]

**Why:** Each label has an interactions section and the column is empty.

**Sources:** Taiwan insert §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; US FDA CONTEPO §7.1, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; UK SmPC §4.5 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA oral fosfomycin DRUG INTERACTIONS — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=36bca22f-49ea-42ce-926b-035c42eb6038

### A14 · Pregnancy (missing)

**Was:** (empty)

**Now:** 會通過胎盤；動物試驗無致畸 (高劑量/母體毒性下有胎毒性)；人類資料不足。台灣仿單/UK SmPC：不建議用於孕婦，除非效益大於風險。(US Contepo 8.1: data insufficient to identify drug-associated risk.)

**Why:** The column is empty. Do not use a letter category: the FDA retired them, and the hospital site's 'B' is outdated.

**Sources:** Taiwan insert §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A15 · Breastfeeding (missing)

**Was:** (empty)

**Now:** LactMed：乳汁濃度低 (注射 1–2 g 後 colostrum 4.8 mg/L, milk 3.6 mg/L)，因與乳汁鈣結合嬰兒吸收差，不太可能造成嬰兒不良反應；替代藥物：ciprofloxacin, levofloxacin, nitrofurantoin, trimethoprim。台灣仿單/UK SmPC：少量分泌至乳汁，不建議作為授乳婦女首選 (UK: 尤其早產兒/新生兒)。US Contepo：建議治療期間及最後一劑後 24 h 不哺乳。

**Why:** The column is empty. LactMed is the designated source. The labels disagree: US Contepo says not to breastfeed for 24 h, while Taiwan and the UK say only 'not first choice'. Showing all three lets the owner decide.

**Sources:** LactMed Fosfomycin NBK501353 (rev 2024-09-15) Summary, Drug Levels, Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK501353/; Taiwan insert §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/100356/smpc; US FDA CONTEPO §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### A16 · Mechanism (missing)

**Was:** (empty)

**Now:** Epoxide；經 GlpT/UhpT 主動運輸進入菌體，共價抑制 MurA (UDP-GlcNAc enolpyruvyl transferase)，阻斷 peptidoglycan 合成第一步 → 殺菌 (time-dependent, UK SmPC; fAUC/MIC in animal models, US)。抗藥機轉：transporter 突變、FosA/B/X 酵素；與其他類別無交叉抗藥。

**Why:** The column is empty, and the labels describe the mechanism.

**Sources:** US FDA CONTEPO §12.2, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/100356/smpc; Taiwan insert §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F

### A17 · Category (missing)

**Was:** (empty)

**Now:** Epoxide antibacterial — Other antibacterials, ATC J01XX01

**Why:** The column is empty. US Contepo §1 calls fosfomycin an 'epoxide antibacterial', and the UK SmPC §5.1 gives ATC J01XX01.

**Sources:** US FDA CONTEPO §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/100356/smpc

### B1 · Renal dose, HD, CRRT (error)

**Was:** CrCL 31–40: 3 g IV q8h

**Now:** Renal dose (台灣仿單 UFO; % of normal daily dose):<br>CrCl 40: 70%<br>CrCl 30: 60%<br>CrCl 20: 40%<br>CrCl 10: 20%<br>(UK SmPC: same table; no adjustment CrCl 40–80; first (loading) dose ×2, max 8 g)<br><br>HD (intermittent, q48h): 2 g after each session<br><br>CRRT (CVVH / post-dilution CVVHF): no adjustment<br><br>US CONTEPO (6 g vial, not stocked): loading 6 g, then CrCl 41–50: 4 g q8h; 31–40: 3 g q8h; 21–30: 5 g q24h; 11–20: 3 g q24h; HD: give after HD

**Why:** The current text is one row taken from the US CONTEPO table (31–40 → 3 g q8h). It leaves out the 6 g loading dose, the other CrCl bands, and all HD and CRRT advice. CONTEPO is not the product the hospital stocks. The 3 g q8h maintenance dose also only makes sense against a 6 g q8h baseline, while this page's adult dose is 4 g q8h. Under the renal-dosing rule, the Taiwan UFO insert should lead. It uses a percentage of the daily dose for CrCl <40, gives 2 g after HD for patients dialysed every 48 h, and needs no adjustment on CVVH. The UK SmPC has the same table and adds the doubled loading dose (max 8 g). I re-checked the table against the live TFDA page, eMC and the DailyMed SPL XML.

**Sources:** Taiwan insert UFO 衛署藥製字第035049號 §3.1 用法用量 (CrCL <40 table; 間歇性血液透析每48小時透析後2g; 連續性靜脈對靜脈血液過濾不需調整) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC Fomicyt §4.2 Renal impairment, Table 2, renal replacement therapy https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO label §2.2 Table 1 & §8.6 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B2 · Page body (error)

**Was:** Toggle 'Does Fosfomycin cover CRAB?' containing pasted AI-chat answer (citation tokens like 'academic.oup+2', 'pubmed.ncbi.nlm.nih+5', closing 'If you need details on specific synergistic combinations… let me know!', 16-link reference list incl. clinicalkey.jp homepage)

**Now:** Keep the toggle title 'Does Fosfomycin cover CRAB?' and replace its content with:<br>**No — not as monotherapy.**<br>- A. baumannii: fosfomycin resistance via AbaF efflux (MFS transporter) — Sharma A, J Antimicrob Chemother 2017;72:68-74 (PMID 27650185)<br>- Acinetobacter is not listed among susceptible species in UK SmPC §5.1 or US CONTEPO §12.4 (nor in 台灣仿單)<br>- Clinical data limited to combination regimens: retrospective multicentre series of 102 severe CRAB infections treated with IV fosfomycin mainly + cefiderocol / colistin / ampicillin-sulbactam; 30-day mortality 47%, clinical failure 57% — Russo A, Int J Antimicrob Agents 2024;64:107190 (PMID 38697579)<br>- IDSA AMR Guidance (2026) does not list IV fosfomycin as a CRAB treatment option<br>單獨使用無法可靠涵蓋CRAB；僅能作為合併療法之一，需依藥敏並會診感染科

**Why:** The body is AI-chat text pasted in unchanged. The ground rules say to remove that. Its main claims are plausible and I could source them. I checked the PMIDs with E-utilities: 27650185 is Sharma et al., the AbaF efflux paper (it is the academic.oup link the chat cites), and 38697579 is Russo et al., the CRAB multicentre study. The IDSA 2026 guidance mentions fosfomycin for Acinetobacter only in nebulized amikacin/fosfomycin trials, which showed no benefit. I propose a short, sourced replacement in place of the chat text.

**Sources:** PubMed PMID 27650185 https://pubmed.ncbi.nlm.nih.gov/27650185/; PubMed PMID 38697579 https://pubmed.ncbi.nlm.nih.gov/38697579/; UK SmPC §5.1 Susceptibility https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; IDSA AMR Guidance (published July 30, 2026) https://www.idsociety.org/practice-guideline/amr-guidance/

### B3 · Adult dose (minor)

**Was:** 4g IV q8h

**Now:** 台灣仿單 (UFO): 2–4 g/day IVD ÷ BID (in 100–500 mL over 1–2 h), or IV push 1–2 g in 20 mL over ≥5 min ÷ 2–4 doses<br>UK SmPC (Fomicyt): 12–24 g/day ÷ q8–12h (meningitis 16–24 g/day ÷ q6–8h); max 8 g/dose → 4 g q8h = UK lower range<br>US CONTEPO (cUTI): 6 g IV q8h over 1 h, ≤14 days<br>Give with another active antibiotic (resistance)

**Why:** 4 g q8h (12 g/day) matches the bottom of the UK SmPC range. It is three times the Taiwan UFO insert's maximum of 2–4 g/day, and the current text names no source. The labels disagree a lot, so the entry should show each one with its source. The Taiwan and UK labels both advise combination therapy because resistance develops quickly.

**Sources:** Taiwan insert UFO §3.1 用法用量 & §5.1 (建議與其他抗生素合併使用) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.2 Table 1, §4.4 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §2.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B4 · Indications (missing)

**Was:** UTI, HAP, cUTI

**Now:** UTI, HAP, cUTI, VAP, cSSTI, Meningitis, cIAI, Endocarditis, Osteoarthritis, Bacteremia

**Why:** The Taiwan UFO insert and the UK SmPC list the same indications: cUTI, infective endocarditis, bone and joint infections, HAP including VAP, complicated skin and soft tissue infection, bacterial meningitis, cIAI, and bacteraemia linked to any of these. Both limit use to cases where first-line agents are unsuitable. 'Osteoarthritis' is the only existing schema option close to bone and joint infection. Keep 'UTI'. Uncomplicated cystitis is FDA-approved, but only for the oral 3 g sachet, so it does not apply to UFO IV. Consider saying this in Notes.

**Sources:** Taiwan insert UFO §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/100356/smpc; US oral fosfomycin tromethamine label, Indications & Usage https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=36bca22f-49ea-42ce-926b-035c42eb6038

### B5 · Coverage (missing)

**Was:** E.coli, Klebsiella, Enterobacter, Proteus, Enterococcus, Streptococcus, MRSA, VRE, CREC(E.coli)

**Now:** Add: MSSA, Pseudomonas, Serratia, Haemophilus, Neisseria (keep existing tags)

**Why:** The UK SmPC §5.1 lists S. aureus, E. coli, H. influenzae and N. meningitidis as commonly susceptible. It lists P. aeruginosa, S. marcescens, Klebsiella, E. cloacae, P. mirabilis and Enterococcus spp. as species where acquired resistance may be a problem. The Taiwan insert §10.1 names activity against 綠膿菌、變形菌、沙雷氏菌、多重抗藥葡萄球菌、大腸菌. The page tags MRSA but not MSSA. CREC(E.coli) is supported: IDSA 2026 lists IV fosfomycin as an alternative for CRE cUTI, preferably E. coli, after susceptibility is confirmed.

**Sources:** UK SmPC §5.1 Susceptibility https://www.medicines.org.uk/emc/product/100356/smpc; Taiwan insert UFO §10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; IDSA AMR Guidance 2026, CRE cUTI section https://www.idsociety.org/practice-guideline/amr-guidance/

### B6 · Coverage (unsupported)

**Was:** VRE; Streptococcus

**Now:** Keep both tags, and add to Notes: 'VRE: no label claim; in vitro data only, test susceptibility (PMID 40099720). Streptococcus: S. pyogenes inherently resistant; S. pneumoniae acquired resistance may be a problem (UK SmPC 5.1)'

**Why:** No label claims activity against VRE. Only in vitro and combination studies exist, for example PMID 40099720 (in vitro susceptibility testing of VRE faecium to fosfomycin, JAC 2025, verified by esummary). The SmPC lists S. pyogenes as inherently resistant and S. pneumoniae as a species where acquired resistance may be a problem. A bare 'Streptococcus' tag overstates coverage. I suggest a caveat rather than removal because the tag is partly supported.

**Sources:** UK SmPC §5.1 (Inherently resistant: Streptococcus pyogenes) https://www.medicines.org.uk/emc/product/100356/smpc; PubMed PMID 40099720 https://pubmed.ncbi.nlm.nih.gov/40099720/

### B7 · Hepatic dose (missing)

**Was:** (empty)

**Now:** No adjustment (not hepatically metabolised; UK SmPC 4.2/5.2). Severe hepatic impairment: monitor fluid overload & electrolytes (US CONTEPO 8.7)

**Why:** Covered by the UK SmPC §4.2 and §5.2 and by US CONTEPO §8.7 and §12.3. The Taiwan insert does not address it.

**Sources:** UK SmPC §4.2 Hepatic impairment, §5.2 Metabolism https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §8.7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B8 · Pediatric dose (missing)

**Was:** (empty)

**Now:** 台灣仿單 (UFO): 100–200 mg/kg/day IVD ÷ BID, or IV push ÷ 2–4 doses<br>UK SmPC (by age): preterm (<40 wk PMA) 100 mg/kg/day ÷2; neonate 40–44 wk 200 mg/kg/day ÷3; 1–12 mo (≤10 kg) 200–300 mg/kg/day ÷3; 1–12 y (10–40 kg) 200–400 mg/kg/day ÷3–4; ≥12 y & ≥40 kg: adult dose. No paediatric renal dosing data<br>US CONTEPO: <18 y not established

**Why:** Both the Taiwan insert and the UK SmPC give paediatric doses. US CONTEPO states that safety and efficacy in under-18s have not been established.

**Sources:** Taiwan insert UFO §3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.2 Table 3 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B9 · Monitor (missing)

**Was:** (empty)

**Now:** electrolyte, CBC, renal, LFT

**Why:** Electrolytes: Taiwan §5.1 (定期監測鈉、鉀), UK §4.4, and US §5.1 (Na, K, Ca, Mg, P plus fluid status). CBC: neutropenia and agranulocytosis in Taiwan §5.1 (應定期監測白血球), UK §4.4 and US §5.5. Renal: dosing depends on CrCl (Taiwan §3.1, US §2.2 'Monitor estimated CLcr'). LFT: US §5.3 'Monitor hepatic enzymes'. ECG: US §5.2 QT prolongation, avoid in known QT prolongation.

**Sources:** Taiwan insert UFO §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.4 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §5.1–5.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B10 · Side Effects (missing)

**Was:** (empty)

**Now:** hypokalemia, GI, LFT↑, thrombophlebitis, neutropenia, leukopenia, thrombocytopenia, QTc prolong, CNS

**Why:** Taiwan §8.1 and UK §4.8 list the following. Common: hypernatraemia, hypokalaemia, injection-site phlebitis, dysgeusia, erythematous rash. Uncommon: nausea, vomiting, diarrhoea, raised ALP/AST/ALT/GGT, headache. Frequency unknown: agranulocytosis, leukopenia, thrombocytopenia, neutropenia, and seizures at high doses (大量給藥時可能引起痙攣). US CONTEPO §5.2 adds QT prolongation and torsade de pointes. The schema has no hypernatraemia option, so it goes in Notes.

**Sources:** Taiwan insert UFO §8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.8 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §5.2, §6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B11 · Pregnancy (missing)

**Was:** (empty)

**Now:** Crosses the placenta; animal studies show no direct/indirect reproductive toxicity; no data on IV use in pregnancy → use only if benefit outweighs risk (台灣仿單 6.1; UK SmPC 4.6). US CONTEPO 8.1: human data insufficient; fetotoxicity in animals at maternally toxic doses

**Why:** All three labels cover this. I deliberately avoid a letter category, since the FDA has retired them.

**Sources:** Taiwan insert UFO §6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B12 · Breastfeeding (missing)

**Was:** (empty)

**Now:** Low milk levels (colostrum 4.8 mg/L, milk 3.6 mg/L after 1–2 g injection); poorly absorbed by the infant (binds milk calcium); adverse effects unlikely (LactMed 2024). TW/UK labels: not first choice, especially for preterm/newborn infants. US CONTEPO: do not breastfeed during treatment and for 24 h after the last dose

**Why:** LactMed is the preferred source here. The labels disagree, so their positions are given alongside it.

**Sources:** LactMed Fosfomycin NBK501353 (rev 2024-09-15) https://www.ncbi.nlm.nih.gov/books/NBK501353/; Taiwan insert UFO §6.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B13 · Mechanism (missing)

**Was:** (empty)

**Now:** Epoxide; enters bacteria via GlpT/UhpT transporters → covalently inhibits MurA → blocks the first step of peptidoglycan synthesis (bactericidal). Time-dependent (UK) / fAUC:MIC-driven (US). Resistance: transporter mutations, FosA/B/X enzymes; no cross-resistance with other classes

**Why:** Covered by UK SmPC §5.1 and US CONTEPO §12.2 and §12.4. Taiwan insert §10.1 says the same: 阻礙細胞壁Peptidoglycan初期階段的生合成.

**Sources:** UK SmPC §5.1 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; Taiwan insert UFO §10.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F

### B14 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Synergy with colistin, gentamicin (台灣仿單 7)<br>Avoid other QT-prolonging drugs (class IA/III antiarrhythmics, TCAs, macrolides, antipsychotics) (US CONTEPO 7.1)<br>Antibiotics may ↑ INR with oral anticoagulants → monitor INR (UK SmPC 4.5)<br>Minimise other sodium-containing drugs (US 5.1)<br>No CYP450 inhibition/induction; not a substrate of drug transporters (in vitro MATE1/2-K inhibition only at mM concentrations) (US 12.3)

**Why:** Each line is taken from the label section cited next to it.

**Sources:** Taiwan insert UFO §7 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.5 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §5.1, §7.1, §12.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94

### B15 · Notes (missing)

**Was:** (empty)

**Now:** Sodium load: 14.5 mEq Na per g (台灣仿單) ≈ 0.32 g Na per g (UK) → one UFO 2 g vial ≈ 29 mEq Na; 12 g/day ≈ 174 mEq Na<br>高血鈉／體液過多風險 (CHF, cirrhosis, nephrotic syndrome, HTN, hypoalbuminemia); low-sodium diet; give K⁺ supplements as needed<br>Rapid resistance when used alone → 建議與其他抗生素合併使用<br>Label doses differ a lot: TW 2–4 g/day vs UK 12–24 g/day vs US CONTEPO 18 g/day<br>IDSA 2026: IV fosfomycin = alternative for ESBL-E and CRE cUTI (prefer E. coli; confirm susceptibility); caution in K. pneumoniae (fosA)<br>Uncomplicated cystitis = oral 3 g sachet (US), not UFO IV<br>More info: UFO 仿單

**Why:** The page has no Notes, yet the labels' key safety point (the sodium load) and the guideline position are missing. The note follows the owner's bilingual style from other entries ('More info: Brosym 仿單'). The 29 and 174 mEq figures are simple multiplications from the Taiwan insert's 14.5 mEq/g. Storage details are left out on purpose.

**Sources:** Taiwan insert UFO §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F; UK SmPC §4.4 https://www.medicines.org.uk/emc/product/100356/smpc; US CONTEPO §2.1, §5.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; IDSA AMR Guidance 2026 (ESBL-E Q1.2; CRE cUTI) https://www.idsociety.org/practice-guideline/amr-guidance/

### B16 · Category (missing)

**Was:** (empty)

**Now:** Epoxide antibacterial (ATC J01XX01, other antibacterials)

**Why:** US CONTEPO §1 calls it 'an epoxide antibacterial'. The UK SmPC §5.1 gives 'Other antibacterials, J01XX01'. The Taiwan insert describes it as 單獨分類之單一抗生素.

**Sources:** US CONTEPO §1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855574f2-39f8-43bc-a3d2-79dbb578cb94; UK SmPC §5.1 https://www.medicines.org.uk/emc/product/100356/smpc; Taiwan insert UFO §10.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC035049%E8%99%9F

## Verified correct as written

- Coverage E.coli: commonly susceptible (UK SmPC §5.1). Clinically proven in both US labels (Contepo §12.4; oral microbiology section).
- Coverage Klebsiella: K. pneumoniae clinically proven in Contepo §12.4. UK SmPC lists Klebsiella as 'acquired resistance may be a problem'. IDSA 2026 warns about fosA in K. pneumoniae.
- Coverage Enterobacter: E. aerogenes in vitro (Contepo §12.4, oral label); E. cloacae in UK SmPC §5.1.
- Coverage Proteus: P. mirabilis in vitro (Contepo §12.4); UK SmPC §5.1.
- Coverage Enterococcus: E. faecalis clinically proven and E. faecium in vitro (oral US label); UK SmPC lists Enterococcus spp.
- Coverage MRSA: Taiwan insert §10.1 says activity against 具有多種耐藥性的葡萄球菌 (multidrug-resistant staphylococci) is especially good; UK SmPC lists S. aureus as commonly susceptible.
- Coverage CREC(E.coli): IDSA AMR Guidance (July 30, 2026) lists IV fosfomycin as an alternative for CRE cUTI, preferentially E. coli and only after susceptibility is confirmed, and oral fosfomycin for carbapenem-resistant E. coli uUTI.
- Indications cUTI: Taiwan §2, UK SmPC §4.1 and US Contepo §1.1.
- Indications HAP: Taiwan §2 and UK SmPC §4.1 (HAP including VAP).
- Indications UTI: the US oral sachet label covers uncomplicated cystitis, so the tag is acceptable under the FDA-or-UK rule, though it does not apply to the IV UFO product.
- Renal value 'CrCL 31–40: 3 g IV q8h' matches the US Contepo §2.2 maintenance dose word for word, but it leaves out the 6 g loading dose and is not the stocked product's label (see A1).
- Adult dose '4 g IV q8h' (12 g/day) is within the UK SmPC range of 12–24 g/day ÷2–3 and under the 8 g/dose cap (see A2 for the Taiwan/US context).
- Source brief: I checked the Taiwan insert facts against the live TFDA page (14.5 mEq Na/g; 2–4 g/day adult; 20–70% renal table; HD 2 g after dialysis; CVVH no adjustment; colistin/gentamicin synergy; update 113/01/05). UK SmPC (rev 14/08/2024) and LactMed (rev 2024-09-15) content matches the brief.
- Source brief ERROR: the claim that no IV fosfomycin is approved in the US is false. CONTEPO, NDA212271, was approved 2025-10-22 (api.fda.gov drugsfda; DailyMed v10). Corrected in the sources JSON.
- PMIDs 27650185 (Sharma 2017 JAC), 38697579 (Russo 2024 IJAA) and 32921885 (Lebedevs 2020 Aust Prescr, LactMed ref) were checked with NCBI esummary.
- Adult dose 4 g IV q8h (12 g/day) falls within the UK SmPC range of 12–24 g/day in 2–3 doses, with a maximum of 8 g per dose. It needs a source label and the Taiwan 2–4 g/day dose shown alongside (B3).
- Indications HAP and cUTI: both listed in the Taiwan UFO insert §2 and UK SmPC §4.1. cUTI is also the US CONTEPO §1.1 indication.
- Indication UTI: FDA-approved for oral fosfomycin (uncomplicated cystitis in women, E. coli and E. faecalis). It applies to the oral sachet, not UFO.
- Coverage E.coli: commonly susceptible (UK SmPC §5.1) and a CONTEPO labeled organism (§1.1).
- Coverage Klebsiella, Enterobacter, Proteus, Enterococcus: listed in UK SmPC §5.1 under 'acquired resistance may be a problem'. CONTEPO labels K. pneumoniae and lists P. mirabilis and E. aerogenes in vitro.
- Coverage MRSA: supported by UK SmPC (S. aureus commonly susceptible) and Taiwan insert §10.1 (多重抗藥性葡萄球菌).
- Coverage CREC(E.coli): IDSA AMR Guidance 2026 lists IV fosfomycin as an alternative for CRE cUTI, preferably E. coli, after susceptibility is confirmed.
- Acinetobacter/CRAB correctly left untagged. The body's conclusion (no monotherapy, combination only) is supported by PMID 27650185 and 38697579 (both verified with esummary/efetch), but the text needs rewriting (B2).
- Taiwan insert content re-verified on the live TFDA page: indications, 2–4 g/day adult and 100–200 mg/kg/day paediatric doses, the CrCl <40 table (70/60/40/20%), 2 g after HD every 48 h, no adjustment on CVVH, 14.5 mEq Na/g, combination advice, neutropenia monitoring.
- UK SmPC re-verified live on eMC (rev 14/08/2024): 12–24 g/day, max 8 g per dose, renal Table 2, loading dose ×2 (max 8 g), 2 g after each dialysis session, no adjustment on post-dilution CVVHF, no hepatic adjustment.
- US CONTEPO approval re-verified: api.fda.gov NDA212271 ORIG approved 20251022; DailyMed SPL renal table 41–50: 4 g q8h, 31–40: 3 g q8h, 21–30: 5 g q24h, 11–20: 3 g q24h, all after a 6 g loading dose; 1,980 mg Na per vial.
- Brief's LactMed figures confirmed (colostrum 4.8 mg/L, milk 3.6 mg/L; calcium binding; alternatives ciprofloxacin, levofloxacin, nitrofurantoin, trimethoprim).
- The brief's description of hospital page UFO02 is confirmed by fetching it: cystitis indication, 37% oral bioavailability, pregnancy 'B', IM route and up to 16 g/day, renal 'no adjustment', and administration volumes and rates matching the insert.

## Apply log

- Renal dose, HD, CRRT: Taiwan UFO insert table (CrCl <40 → 20–70%), HD q48h 2 g, CRRT no adjustment, elderly; plus UK SmPC values and US CONTEPO values (owner's original 31–40: 3 g q8h kept inside the US line)
- Adult dose: Taiwan 2–4 g/day IVD/IV push, UK 12–24 g/day (owner's 4 g q8h kept as the UK lower range), US CONTEPO 6 g q8h, plus the combination-therapy note; green IV tag kept
- Pediatric dose: Taiwan, UK SmPC by age band, US not established in <18 y
- Hepatic dose: no adjustment (UK); severe impairment → monitor fluid and electrolytes (US CONTEPO 8.7)
- Notes: sodium load, hypokalemia, resistance/combination warning, label dose differences, US approval scope, IDSA 2026, QT, diluent, Streptococcus caveat, VRE caveat (PMID 40099720 checked with esummary: Mancini S, JAC 2025;80:1742-1744), More info line
- Drug Interactions: merged both proposals (synergy, QT drugs, INR, sodium, CYP/transporters, oral-only metoclopramide note)
- Pregnancy: merged; no letter category
- Breastfeeding: LactMed 2024 plus Taiwan/UK/US label statements
- Mechanism: MurA/GlpT/UhpT, PK/PD, resistance mechanisms
- Category: Epoxide antibacterial — Other antibacterials, ATC J01XX01
- Coverage: added MSSA, E. faecalis, Serratia, Pseudomonas, Haemophilus, Neisseria; kept all existing tags including Streptococcus and VRE (caveats added to Notes)
- Indications: UTI, cUTI, HAP, VAP, Endocarditis, Osteoarthritis, cSSTI, Meningitis, cIAI, Bacteremia
- Side Effects: GI, LFT↑, hypokalemia, neutropenia, leukopenia, thrombocytopenia, thrombophlebitis, QTc prolong, CNS
- Monitor: electrolyte, CBC, renal, LFT
- Page body: removed the pasted AI-chat text from the CRAB toggle and wrote the sourced summary in its place (toggle title kept; PMIDs 27650185 and 38697579 checked with esummary)
- Page body: added a References section (Taiwan insert, UK SmPC, US CONTEPO, US oral fosfomycin label, LactMed NBK501353 rev 2024-09-15, IDSA 2026 AMR Guidance, plus the three PubMed citations)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
