# Verification: Taigexyn (Nemonoxacin)

- **Notion entry:** [Taigexyn (Nemonoxacin)](https://app.notion.com/263c496dfff180bd9860f1d067e86432)
- **Hospital codes:** TAI05 (Taigexyn cap 250 mg), TAI06 (Taigexyn inj 500 mg/250 mL)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/nemonoxacin.json` (plus any `sources/nemonoxacin-taiwan-insert-*.txt`)

## Product and sources

Taigexyn (nemonoxacin malate), TaiGen Biotechnology, Taiwan. Two products are stocked: TAI05, Taigexyn Capsule 250 mg (衛部藥製字第058540號, NHI AC58540100, ATC J01MB08; TFDA insert 113/03/25 v4), and TAI06, Taigexyn Infusion Solution 500 mg/250 mL (衛部藥製字第060558號, NHI AC60558265; TFDA insert 111/06/13 v2). There is no US FDA label (DailyMed), no UK SmPC (eMC) and no LactMed record, so the two TFDA inserts are the primary official sources. I used PubMed only for renal and hepatic PK and for postmarketing safety; PMIDs 33928669, 30819510 and 36569296 were checked with esummary/efetch.

## Agreed fixes applied in Notion (49)

### A1 · Renal dose, HD, CRRT (error)

**Was:** CrCl >50: no adjustment; <br>CrCl <50: 500 mg q48h; <br>HD: 500 mg q48h, dose after dialysis

**Now:** CrCl 60–90: 不須調整 no adjustment <br>CrCl <60 (中度–重度) 及 ESRD/HD: 不建議使用 not recommended (TFDA 仿單 §3.3) <br>CRRT: no data <br>Literature only (not label): severe RI single-dose PopPK (n=10) modelled 500 mg q48h (PMID 33928669); review suggests no adjustment if CLcr ≥50 (PMID 36569296)

**Why:** Both TFDA inserts (PO §3.3 and IV §3.3 特殊族群用法用量 腎功能不全) say: '中度至重度腎功能不全病人及末期腎臟疾病（ESRD）病人不建議使用本藥品。輕度腎功能不全病人（CLcr 60~90 mL/min）不須調整用藥劑量。' The stocked product's label therefore does not support the current cut-off of 50 or a q48h regimen. The q48h figure comes from a single-dose PopPK/Monte Carlo study of 10 patients with severe renal impairment; it was not studied for CrCl <50 in general or for HD. Under the owner's rules, the stocked product's label comes first and other data are shown alongside it.

**Sources:** TFDA 仿單 Taigexyn Capsule §3.3 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §3.3 and §11 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Li Y et al. Br J Clin Pharmacol 2021;87:4636 (PMID 33928669) — https://pubmed.ncbi.nlm.nih.gov/33928669/; Yuan J et al. Front Pharmacol 2022;13:1067686 (PMID 36569296) — https://pubmed.ncbi.nlm.nih.gov/36569296/

### A2 · Page body — Renal Dose, HD, CRRT table + PK Notes (error)

**Was:** Table: >50 no adjustment; 30-50 no adjustment (caution); <30 500 mg q48h; HD consider 500 mg q48h; CRRT 500 mg q24-48h. PK notes: 60-75% unchanged in urine; t½ 9-16h (single) → 19.7h (steady state); Protein binding ~16%

**Now:** Table rows: '60–90 \| No adjustment (TFDA 仿單 §3.3)'; '<60 (moderate–severe) \| Not recommended (TFDA 仿單 §3.3)'; 'ESRD / HD \| Not recommended; no label data'; 'CRRT \| No data'. Below the table: 'Literature only: severe RI PopPK → 500 mg q48h modelled (PMID 33928669).' PK notes: '~70% excreted unchanged in urine (IV 仿單 §11; 72.37% after oral dose, capsule 仿單 §11); t½ ≈11 h (IV 仿單) / 12.1 h (capsule 仿單); protein binding 44–48%; CLr ≈8 L/h.'

**Why:** The CrCl 30–50 'no adjustment' row, the <30 q48h row and the CRRT row all conflict with the label, which says 'not recommended' for moderate to severe impairment and ESRD. The PK numbers also disagree with the label. Insert §11: protein binding '約為44~48%', not 16%. Half-life is '約11小時' (IV) or '12.1小時' (capsule); the label gives no steady-state value of 19.7 h. Renal clearance '8 L/h 左右' (about 133 mL/min) agrees with the current CLr range, so that line can stay.

**Sources:** TFDA 仿單 Taigexyn Capsule §3.3, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §3.3, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; PMID 33928669 — https://pubmed.ncbi.nlm.nih.gov/33928669/

### A3 · Hepatic dose (column + body Hepatic Dose table) (unsupported)

**Was:** No adjustment (mild-moderate); caution in severe. Body: Child-Pugh A/B no adjustment; C no data. '<5% metabolites. No CYP3A4 induction or inhibition.'

**Now:** Column: 仿單: safety/efficacy not established in hepatic impairment (no hepatic PK study in label). <br>Literature: moderate HI PK study — no adjustment for mild–moderate (PMID 30819510); severe: no data. Body: keep the table and add the source line 'Label: not established (TFDA 仿單 §3.3); Child-Pugh B single-dose PK AUC ratio 1.15 (PMID 30819510)'. Change the metabolism line to '<2% excreted as acyl-glucuronide; no significant inhibition of CYP1A2/2B6/2C8/2C9/2C19/2D6/3A4 and no induction of 1A2/2B6/2C8/2C9/2C19/3A4; P-gp substrate (仿單 §7, §11).'

**Why:** Both inserts, §3.3: '本藥品用於肝功能不全病人的療效和安全性尚未確定' and §11 '尚未針對肝功能不全病人進行藥物動力學研究'. The 'no adjustment' advice is not in the label. It is supported only by a PubMed PK study of moderate hepatic impairment (n=10 per group), so it should be cited to that study. The current '<5%' metabolite figure is not in the label (the label says <2%), and the label's CYP statement covers more enzymes than 3A4 alone.

**Sources:** TFDA 仿單 Taigexyn Capsule §3.3, §7, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §11 代謝 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Kang Y et al. Clin Ther 2019;41:505 (PMID 30819510) — https://pubmed.ncbi.nlm.nih.gov/30819510/

### A4 · Pediatric dose (column + body) (error)

**Was:** Not established; avoid <18 years. Body: 'Not established. Avoid in patients <18 years.'

**Now:** 禁用 Contraindicated in children and adolescents (TFDA 仿單 §4); safety/efficacy not established (§6.4). Juvenile dog cartilage lesions at 40 mg/kg/day (§10.3).

**Why:** Both inserts list children and adolescents under §4 禁忌: '◎兒童或青少年'. Writing 'avoid' understates a labelled contraindication.

**Sources:** TFDA 仿單 Taigexyn Capsule §4, §6.4, §10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A5 · Adult dose (error)

**Was:** PO/IV: 500 mg once daily × 7-10 days. <br>Take PO on empty stomach.

**Now:** PO: 500 mg (2 cap) QD × 7–10 days; empty stomach (≥2 h before or after meals). <br>IV: 500 mg/250 mL QD, infuse ≥90 min × 7–14 days (ready to use). <br>Elderly: no adjustment.

**Why:** IV insert §3.1: '靜脈緩慢滴注，滴注時間不少於90分鐘… 建議的治療時間是連續使用7至14天', and §3.2 '無須配製'. The current 7–10 days applies only to the capsule. Capsule §3.1 defines fasting as '在進食前至少兩小時或進食後至少兩小時'. IV §3.3: '老年人：無需調整用藥劑量'.

**Sources:** TFDA 仿單 Taigexyn Capsule §3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §3.1–3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A6 · Page body — Adult Dose table (error)

**Was:** IV row: 500 mg once daily \| 7-10 days \| Infusion. PO note: food ↓Cmax 46%, ↓AUC 27%. 'Max dose studied: 750 mg/day (supratherapeutic; higher AE rate)'

**Now:** IV row: '500 mg/250 mL once daily \| 7–14 days \| Infuse over ≥90 min; no reconstitution'. PO note: 'high-fat meal ↓Cmax ~36%, ↓AUC ~24%, Tmax delayed ~3.5 h (仿單 §11)'. Max-dose line: '750 mg QD used in CAP trials (integrated phase II/III, n=151; 仿單 §8.1); healthy volunteers: single 1.5 g and 1 g/day × 10 days without notable AEs (仿單 §9)'.

**Why:** Capsule §11: '最高血漿濃度及全身性藥物暴露量之算術平均值分別下降約36%及24%'. Neither 46% nor 27% appears in the label. IV duration and infusion time are as in A5. Capsule §9 gives 1.5 g single and 1 g/day as the highest doses studied, so 750 mg was not the maximum. The 'higher AE rate' claim has no source.

**Sources:** TFDA 仿單 Taigexyn Capsule §8.1, §9, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §3.1, §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A7 · Indications (error)

**Was:** Pneumonia, CAP, UTI, SSTI

**Now:** Pneumonia, CAP

**Why:** The only approved indication is CAP. Capsule §2: '治療成人…適合於門診治療之輕度社區型肺炎'. IV §2: '成人社區型肺炎'. There is no FDA label or SmPC that could add other indications. The page body itself lists UTI and SSTI/ABSSSI as 'Under Investigation'. The boxed warning also says quinolones for uncomplicated UTI/cystitis should be reserved for when there is no alternative.

**Sources:** TFDA 仿單 Taigexyn Capsule §2 + 特殊警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A8 · Page body — Indications table (minor)

**Was:** Approved: Community-acquired pneumonia (CAP). Under Investigation: ABSSSI, Diabetic foot infections, UTI

**Now:** Approved cell: 'CAP — PO: adults, mild CAP suitable for outpatient treatment; IV: adult CAP (TFDA 仿單 §2)'. Under the table: '⚠️ 仿單特殊警語: AECB, acute uncomplicated cystitis, uncomplicated UTI and acute sinusitis — reserve for when no alternative exists.' Flag the 'Under Investigation' rows: no source given and not in any label (keep or remove at the owner's discretion).

**Why:** The capsule label limits use to mild outpatient CAP, which the current text leaves out. The boxed reserve-use warning is missing. The investigational indications have no citation.

**Sources:** TFDA 仿單 Taigexyn Capsule §2, 特殊警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A9 · Pregnancy (column + body) (error)

**Was:** Column: Avoid (no data; quinolone class risk - arthropathy in animals). Body: 'Category: Not assigned (avoid use)'; Recommendation 'Avoid during pregnancy. Use only if no safer alternatives and benefit clearly outweighs risk.'; Placental transfer 'Expected'

**Now:** Column: 禁用 Contraindicated in pregnancy or possible pregnancy (TFDA 仿單 §4, §6.1). Animal: high doses → ↓maternal/fetal weight, delayed ossification (§10.3). Body: delete the 'Category: Not assigned' line. Recommendation cell: 'Contraindicated (TFDA 仿單 §4/§6.1).' Flag 'Placental transfer: Expected' as unsourced.

**Why:** Both inserts, §4 and §6.1: '懷孕或有可能懷孕的女性禁用'. 'Use only if no safer alternatives' contradicts a contraindication. The 'Category: Not assigned' line is wrong (insert §10.3 actually says '懷孕分級為C級'), but FDA letter categories are retired, so the line should be deleted rather than replaced. Juvenile-animal arthropathy is a paediatric finding. The reproductive-toxicity finding (§10.3) is reduced maternal/fetal weight and delayed ossification at high doses.

**Sources:** TFDA 仿單 Taigexyn Capsule §4, §6.1, §10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §4, §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A10 · Breastfeeding (column + body) (error)

**Was:** Column: Avoid/caution (no data; quinolones excreted in milk; monitor infant for diarrhea/thrush). Body: class data 'ciprofloxacin, levofloxacin RID ~3-6%'; 'Avoid or use with caution… Consider pumping and discarding milk for 4-6h post-dose'

**Now:** Column: 禁用 Contraindicated during breastfeeding (TFDA 仿單 §4, §6.2); if benefit outweighs risk, 暫停哺乳 (interrupt breastfeeding). No LactMed record. Body: change the Recommendation cell to the same text. Remove 'pumping and discarding milk for 4-6h'. Flag the RID and 'monitor infant' lines as unsourced.

**Why:** §6.2 of both inserts: '哺乳中婦女禁用。只有當對哺乳中婦女潛在益處大於潛在危險時才能將本藥品用於哺乳中婦女，但應暫停哺乳。' 'Use with caution' and 'pump and discard 4–6 h' contradict this; given a half-life of about 11–12 h, 4–6 h is also too short. LactMed has no nemonoxacin record.

**Sources:** TFDA 仿單 Taigexyn Capsule §4, §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §4, §6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A11 · Drug Interactions (error)

**Was:** Al/Mg antacids & iron (↓absorption >60% - separate ≥2h), QT drugs (avoid), NSAIDs (↑seizure risk), warfarin (monitor INR), corticosteroids (↑tendon rupture)

**Now:** Al/Mg antacids, sucralfate, Zn/metal-cation multivitamins: give ≥2 h AFTER nemonoxacin (co-admin ↓AUC ~81%; antacid 4 h before still ↓AUC ~74%). Iron: avoid (↓AUC ~64%); if needed, give iron ≥2 h after. CaCO3 (↓AUC ~19%): no adjustment. Class Ia/III antiarrhythmics: avoid; other QT drugs (erythromycin, antipsychotics, TCAs): caution. Probenecid (↑AUC ~25%): caution. Theophylline (↑AUC ~17%): monitor levels. Warfarin: monitor PT/INR. Antidiabetics: dysglycemia, monitor glucose. NSAIDs: ↑CNS stimulation/seizures. Corticosteroids: ↑tendon rupture, avoid.

**Why:** 'Separate ≥2h' does not say which drug goes first, and the order matters. Insert §7 says that taking an Al/Mg antacid 4 h BEFORE still cut AUC by 74.3%, while taking it 2 h AFTER cut AUC by only 8.9%: '必須在服用本藥品之後至少兩小時才能給予' (also applies to sucralfate). The label says to avoid iron. It also lists probenecid, theophylline (monitor levels) and antidiabetic interactions, and asks only for caution with QT drugs other than class Ia/III.

**Sources:** TFDA 仿單 Taigexyn Capsule §5.1 QT間隔延長, §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A12 · Page body — Drug Interactions table (error)

**Was:** Al/Mg ↓AUC 80.5%, ↓Cmax 77.8%, 'Give nemonoxacin ≥2h before or ≥4h after antacid'; Fe ↓AUC 63.7%, ↓Cmax 57%, 'Separate by ≥2h'; CaCO3 ↓AUC 17.8%, ↓Cmax 14.3%; Probenecid ↑AUC 26.2%, ↓CLr 22.6%, 'No adjustment needed'; Theophylline 'No significant interaction expected… not studied directly'; Warfarin 'Potential ↑INR (class effect)'

**Now:** Al/Mg: '↓AUC 81.1%, ↓Cmax 78.7% (co-admin); antacid 4 h before: ↓AUC 74.3% \| Give antacid ≥2 h AFTER nemonoxacin (do NOT give nemonoxacin after antacid)'. Fe: '↓AUC 63.9%, ↓Cmax 60.9% \| Avoid; if needed give iron ≥2 h after'. CaCO3: '↓AUC 18.8%, ↓Cmax 16.2% \| No adjustment'. Probenecid: '↑AUC 25.4%, ↓CLr 23.7% \| Use with caution, observe closely'. Theophylline: 'Studied: theophylline AUCss ↑16.7%, Cmax ↑15.2% \| Monitor theophylline levels, adjust dose'. Warfarin: 'Studied: no change in R/S-warfarin or PT; FQ class may ↑INR \| Monitor PT/INR'. Add row: 'Antidiabetic agents \| dysglycemia \| Monitor glucose; stop if symptomatic'. Add row: 'Zn/metal-cation multivitamins \| ↓absorption \| Give ≥2 h after'. Note: 'No significant CYP1A2/2B6/2C8/2C9/2C19/2D6/3A4 inhibition; P-gp substrate.'

**Why:** Insert §7 gives these exact study values, and nearly every current number is slightly off. The '≥4h after antacid' advice is contradicted: the label found an AUC reduction of 74.3% when the antacid was given 4 h before. The theophylline row says the interaction was not studied, but the label reports a study with an increase in theophylline exposure and asks for level monitoring. For probenecid the label says to use caution, not that no adjustment is needed.

**Sources:** TFDA 仿單 Taigexyn Capsule §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A13 · Page body — Notes: 'Thorough QT study' and 'Distinguishing Features' (error)

**Was:** 'Thorough QT study: At 500mg and 750mg doses, no clinically significant QTc prolongation; mean ΔΔQTcF <10ms (negative per ICH E14 criteria)'; 'Non-fluorinated → potentially reduced phototoxicity, hepatotoxicity, QT effects compared to FQs'

**Now:** 'Thorough QT study (n=48) POSITIVE — QTc prolongation risk; max mean QTc change 8.74 ms (500 mg) vs 13.04 ms (moxifloxacin 400 mg). IV trials: QTcF ↑30–60 ms in 18.3% vs 11.7% (levofloxacin). Avoid with QT prolongation, uncorrected hypokalaemia, class Ia/III antiarrhythmics (仿單 §5.1).' Replace the 'potentially reduced…QT effects' bullet with: 'Non-fluorinated; no phototoxicity in animal studies (仿單 §10.3), but toxicity profile otherwise similar to approved FQs and same quinolone boxed warning.'

**Why:** Both inserts, §5.1: 'thorough QT study的評估結果呈陽性，表示nemonoxacin有造成心電圖QTc延長的風險'. The current text states the opposite. §10.3: 'Nemonoxacin產生的毒性與目前核准上市的其他含氟喹諾酮類抗生素相似', with no phototoxicity in animals. Calling it 'safer for QT and hepatotoxicity' has no source.

**Sources:** TFDA 仿單 Taigexyn Capsule §5.1 QT間隔延長, §10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A14 · Notes (error)

**Was:** Take fasting; non-fluorinated (potentially safer profile)

**Now:** Take PO fasting (≥2 h before or after meals). 非氟喹諾酮 (non-fluorinated quinolone), but it carries the quinolone boxed warning: disabling, possibly irreversible tendinitis/rupture, peripheral neuropathy and CNS effects; reserve for AECB, uncomplicated cystitis/UTI and acute sinusitis only when no alternative exists. TQT positive: avoid with QT prolongation, uncorrected hypoK, class Ia/III antiarrhythmics.

**Why:** 'Potentially safer profile' is unsupported promotional wording. The label carries the full quinolone 特殊警語 and a positive TQT study. Insert §10.3 states the toxicity is similar to other FQs.

**Sources:** TFDA 仿單 Taigexyn Capsule 特殊警語, §3.1, §5.1, §10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 特殊警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A15 · Page body — Notes: Pharmacokinetic Highlights (error)

**Was:** t½: 9-16h (single dose), ~19.7h (steady state day 10); Protein binding: 16% (low); Metabolism: minimal (<5%); excreted unchanged in urine (60-75%); Vd: large distribution

**Now:** t½ ≈11 h (IV 仿單 §11) / 12.1 h (capsule 仿單 §11); steady state by day 3–5; accumulation <10%. Protein binding 44–48%. Metabolism minimal: <2% as acyl-glucuronide. ~70% unchanged in urine (72.37% after oral), ~6% unchanged in faeces. Vd ≈107.6 L (oral steady state) / ~200 L (single dose). Absolute bioavailability ~100%.

**Why:** Insert §11 values: '血漿蛋白結合率約為44~48%', '平均血漿排除半衰期約為11小時' (IV) and '12.1小時' (capsule), '少於2%…第II相代謝物', '72.37%'. Protein binding of 16% and a steady-state half-life of 19.7 h are not in the label and conflict with it.

**Sources:** TFDA 仿單 Taigexyn Capsule §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A16 · Page body — Side Effects table + safety data (error)

**Was:** Hematologic: Leukopenia (2.3%), neutropenia (2.5%); Agranulocytosis. Cardiac: Common '—', Serious 'QT prolongation (minimal risk at therapeutic doses)'. CNS: somnolence. Other: Pollakiuria. No IV infusion-site row. Phase II/III n=670 overall AE 37.2% vs 38.8%… Postmarketing n=257,420 no new signals.

**Now:** Hematologic common: 'WBC↓ 2.1%, neutropenia 1.9% (PO 仿單 §8.1); IV: WBC↓ 2.0%, neutropenia 1.0%'. Mark agranulocytosis as unsourced. Cardiac common: 'QT prolongation 2.1% (IV 仿單 §8.1); TQT positive'. Hepatic: add 'IV: ALT↑ 5.7%, AST↑ 3.9%, GGT↑ 1.6%; AST >3×ULN 1.3% (PO)'. Add row 'Infusion site (IV) \| erythema 4.7%, pruritus 4.4%, pain 2.0%, swelling 1.9% \| —'. Add a citation to the postmarketing line: 'PMID 36569296'. Flag somnolence, pollakiuria and 'overall AE 37.2% vs 38.8%' as unsourced.

**Why:** Capsule §8.1 gives '白血球計數降低 2.1%, 嗜中性白血球減少症 1.9%'; the 2.3/2.5% figures come from a review that uses different denominators (PMID 36569296). IV §8.1 lists 心電圖QT間期延長 2.1% as a common reaction, which contradicts 'minimal risk' and the '—' entry. IV-specific reactions are missing. The 257,420 postmarketing figure is supported by PMID 36569296.

**Sources:** TFDA 仿單 Taigexyn Capsule §5.1 肝毒性, §8.1, §8.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §8.1, §8.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Yuan J et al. Front Pharmacol 2022 (PMID 36569296) — https://pubmed.ncbi.nlm.nih.gov/36569296/

### A17 · Side Effects (missing)

**Was:** GI, LFT↑, neutropenia, leukopenia, QTc prolong, CNS

**Now:** GI, LFT↑, neutropenia, leukopenia, QTc prolong, CNS, neuropathy, dysglycemia, photosensitivity, SJS/TEN

**Why:** Insert §5.1 warns about peripheral neuropathy (also in the boxed warning), dysglycemia (血糖異常), photosensitivity (光敏反應) and SJS/TEN (嚴重水皰反應). All four options exist in the schema. The label notes these are quinolone class warnings not yet seen with nemonoxacin.

**Sources:** TFDA 仿單 Taigexyn Capsule 特殊警語, §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A18 · Monitor (column + body) (minor)

**Was:** Column: LFT, renal, CBC, ECG. Body: ECG/QTc 'If risk factors present'; Blood glucose 'In diabetics'

**Now:** Column: LFT, renal, CBC, ECG, electrolyte. Body ECG row: 'Periodically during therapy (IV 仿單 §5.1); avoid if uncorrected hypokalaemia'. LFT row: 'Periodically (IV 仿單 §5.1 肝毒性)'. Blood glucose row: 'Diabetics on oral hypoglycaemics/insulin (仿單 §5.1, §7)'. Optional: PT/INR when on warfarin (§7).

**Why:** IV insert §5.1: '建議使用本藥品期間適時監測心電圖' and '建議適時監測肝功能'. The label says to avoid use with uncorrected hypokalaemia, which supports potassium (electrolyte) monitoring. §6.5 asks for renal monitoring in the elderly, which supports the 'renal' tag.

**Sources:** TFDA 仿單 Taigexyn Infusion §5.1, §6.5 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; TFDA 仿單 Taigexyn Capsule §5.1, §7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### A19 · Coverage (minor)

**Was:** MSSA, MRSA, Streptococcus, Haemophilus, Klebsiella, Chlamydia, Mycoplasma, Legionella

**Now:** MSSA, MRSA, Streptococcus, Haemophilus, Klebsiella, E.coli, Chlamydia, Mycoplasma, Legionella

**Why:** Insert §10.2 抗菌範圍 lists 大腸桿菌 Escherichia coli among the Gram-negative organisms (in vitro). IV insert §12 also reports microbiological efficacy against E. coli in CAP. The current tags are otherwise all supported.

**Sources:** TFDA 仿單 Taigexyn Capsule §10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §10.2, §12 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A20 · Page body — Coverage table + MIC data (unsupported)

**Was:** Gram+: … S. agalactiae, Enterococcus faecalis (some), CoNS; Gram−: … Proteus spp.; Anaerobes: Peptostreptococcus, Propionibacterium acnes; NO coverage: Pseudomonas aeruginosa, Acinetobacter baumannii (limited), ESBL-producers

**Now:** Label spectrum (仿單 §10.2): S. pneumoniae (PSSP/PISP/PRSP), S. aureus (MSSA/MRSA); H. influenzae, H. parainfluenzae, K. pneumoniae, E. coli, M. catarrhalis; M. pneumoniae, C. pneumoniae, L. pneumophila; in vitro only: S. pyogenes, K. oxytoca. Breakpoints: S. pneumoniae S ≤0.5, S. aureus S ≤1 µg/mL. Flag S. agalactiae, E. faecalis, CoNS, Proteus, Peptostreptococcus and P. acnes as not in the label (unsourced). Change the 'NO coverage' row to: 'Not in labelled spectrum: P. aeruginosa, A. baumannii (IV 仿單 §12 reports small CAP isolate numbers: Pa 14/16, Ab 10/12 microbiological success; do not rely on it). ESBL: no label data.'

**Why:** Several organisms in the table do not appear in either insert. IV insert §12 表二 lists microbiological success against P. aeruginosa (87.5%) and A. baumannii (83.3%), which conflicts with the flat 'NO coverage' statement. Both organisms are outside the labelled spectrum, so the row should say 'not labelled' rather than 'no activity'. The insert also gives S. pyogenes and K. oxytoca as in-vitro-only organisms, plus the two susceptibility breakpoints.

**Sources:** TFDA 仿單 Taigexyn Capsule §10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion §10.2 敏感性試驗, §12 表二 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A21 · Page body — Mechanism (unsupported)

**Was:** 'C-8-methoxy group enables dual targeting… (requires mutations in 3 genes vs 1-2 for fluoroquinolones). Non-fluorinated structure may reduce FQ-associated toxicities.'

**Now:** Keep the dual-target sentence and add: 'Retains in-vitro activity against S. pneumoniae with dual gyrase/topo IV mutations (仿單 §10.1); resistance arises by multistep mutation + efflux; spontaneous mutation frequency <10⁻¹⁰–10⁻⁶; no cross-resistance with FQs seen in limited data (§10.2).' Flag the '3 genes' claim as unsourced. Replace 'may reduce FQ-associated toxicities' with 'toxicity similar to approved FQs (§10.3)'.

**Why:** Insert §10.2 describes resistance developing as it does for other FQs (multistep mutations plus efflux). The '3 genes' figure is not in the label. §10.3 directly contradicts the claim of reduced toxicity.

**Sources:** TFDA 仿單 Taigexyn Capsule §10.1–10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### A22 · Page body — Notes: Warnings (Class-related) (missing)

**Was:** Tendinitis…; Peripheral neuropathy; CNS effects; Myasthenia gravis; Aortic aneurysm/dissection risk (quinolone class, FDA warning for FQs); Hypersensitivity; C. difficile

**Now:** Add at the top: '⚠️ 仿單特殊警語 (boxed): disabling, potentially irreversible ADRs (tendinitis/rupture, peripheral neuropathy, CNS/psychiatric); avoid if prior serious quinolone ADR; reserve for AECB, uncomplicated cystitis/UTI, acute sinusitis only if no alternative.' Add bullets: 'QTc prolongation (TQT positive)', 'Dysglycemia with antidiabetics (hypoglycaemic coma reported)', 'Hepatotoxicity (AST >3×ULN 1.3% vs 0.4% levofloxacin)', 'Photosensitivity', 'SJS/TEN', 'Seizures/↑ICP — caution in epilepsy'. Annotate the aortic aneurysm bullet: 'not in TFDA nemonoxacin 仿單; FDA FQ class warning only.'

**Why:** Insert 特殊警語 and §5.1 contain these warnings, and the body leaves out the boxed statement, QT, dysglycemia, hepatotoxicity, photosensitivity and SJS. Aortic aneurysm/dissection does not appear in either nemonoxacin insert.

**Sources:** TFDA 仿單 Taigexyn Capsule 特殊警語, §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 特殊警語, §5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A23 · Page body — Notes: Regulatory Status / Clinical Efficacy (minor)

**Was:** Taiwan: Approved (2014) - oral + IV. Clinical Efficacy (Phase III): CAP clinical cure rate 88.7% vs 86.4%. 'More potent than levofloxacin/moxifloxacin against MRSA and PRSP'.

**Now:** Taiwan: capsule licensed 2014-12-04 (衛部藥製字第058540號); IV licensed 2020-09-29 (衛部藥製字第060558號). Clinical efficacy: 'Integrated 3 oral studies (1 phase III + 2 phase II): 88.7% vs 86.4% levofloxacin; pivotal oral phase III 91.5% vs 89.4%; pivotal IV phase III 81.1% vs 80.5% (仿單 §12)'. Flag the 'more potent than levo/moxi' claim and the US QIDP/fast-track line as unsourced.

**Why:** The TFDA licence records give issue dates of 103-12-04 for the capsule and 109-09-29 for the IV form, so the IV was not approved in 2014. The 88.7% figure is the integrated rate across three studies, not a phase III result.

**Sources:** TFDA 仿單 Taigexyn Capsule header + §12 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion header + §12 表一 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### A24 · Page body — 'Brief Table Format (For Database Entry)' section and closing line (error)

**Was:** Section '## Brief Table Format (For Database Entry)' (duplicate table with Indications 'CAP, SSTI, diabetic foot infection', Renal 'CrCl <30: 500 mg q48h', etc.) followed by 'Let me know if you need any modifications or additional details!'

**Now:** REMOVE

**Why:** This is pasted AI-chat output: a scaffold labelled 'For Database Entry' and a chatbot sign-off. The duplicate table repeats claims the label contradicts (unapproved SSTI/diabetic-foot indications and renal dosing that conflicts with 仿單 §3.3). The ground rules allow removing pasted AI-chat text.

**Sources:** TFDA 仿單 Taigexyn Capsule §2, §3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### B1 · Renal dose, HD, CRRT (error)

**Was:** CrCl >50: no adjustment; <br>CrCl <50: 500 mg q48h; <br>HD: 500 mg q48h, dose after dialysis

**Now:** CrCl 60–90: 不需調整 no adjustment <br>CrCl <60 (中度–重度腎功能不全) 及 ESRD/HD: 仿單「不建議使用」not recommended (TFDA 仿單 3.3) <br>CRRT: no data <br>Off-label PK only: a single-dose PopPK study in severe RI (n=10) modelled 500 mg q48h (PMID 33928669); not endorsed by label; no HD/CRRT data

**Why:** Both Taiwan inserts (3.3) say moderate to severe renal impairment and ESRD are 不建議使用 (not recommended). The only no-adjustment range they give is CrCl 60–90. The current text recommends dosing (q48h) in a group the label tells you to avoid, and the cut-off of 50 has no source (a Chinese review cites ≥50 from Chinese data, which conflicts with the TW label). No study of HD dosing exists: a PubMed search for 'nemonoxacin hemodialysis' returned 0 results. Following the rules, the label of the stocked product is placed first and the PubMed value is shown alongside.

**Sources:** TFDA 仿單 Taigexyn Capsule 3.3 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 3.3 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Li Y et al. Br J Clin Pharmacol 2021;87:4636 (PMID 33928669, verified) — https://pubmed.ncbi.nlm.nih.gov/33928669/

### B2 · Adult dose (error)

**Was:** PO/IV: 500 mg once daily × 7-10 days. <br>Take PO on empty stomach.

**Now:** PO: 500 mg (2 cap) QD 空腹 (飯前或飯後至少 2 h) × 7–10 days <br><span color="green">`IV`</span>: 500 mg/250 mL QD, infuse ≥90 min × 7–14 days (無須配製) <br>Elderly: no adjustment (IV 仿單 3.3)

**Why:** The IV insert 3.1 gives a 7–14 day course (建議的治療時間是連續使用7至14天) and an infusion time of at least 90 minutes (滴注時間不少於90分鐘). The current text gives 7–10 days for IV and leaves out the infusion time. The capsule insert 3.1 defines 'empty stomach' as at least 2 h before or after food. The IV phase 3 trial also used 7–14 days.

**Sources:** TFDA 仿單 Taigexyn Infusion 3.1, 3.2, 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; TFDA 仿單 Taigexyn Capsule 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; Li Y et al. Int J Antimicrob Agents 2024 (PMID 38851462, verified) — https://pubmed.ncbi.nlm.nih.gov/38851462/

### B3 · Pediatric dose (error)

**Was:** Not established; avoid <18 years

**Now:** 禁用 Contraindicated in children & adolescents (TFDA 仿單 4 禁忌); efficacy/safety not established (3.3, 6.4); juvenile-dog cartilage lesions (10.3)

**Why:** Both inserts list ◎兒童或青少年 under 4 禁忌 (contraindications). 'Avoid' understates this.

**Sources:** TFDA 仿單 Taigexyn Capsule 4, 6.4, 10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B4 · Pregnancy (error)

**Was:** Avoid (no data; quinolone class risk - arthropathy in animals)

**Now:** 禁用 Contraindicated in pregnant or possibly pregnant women (safety not established) — TFDA 仿單 4, 6.1. Animal: ↓maternal/fetal weight & delayed ossification at high doses; juvenile arthropathy (10.3)

**Why:** Insert 4 and 6.1 say 懷孕或有可能懷孕的女性禁用 (contraindicated), which is stronger than 'Avoid'. The insert's preclinical section still says 懷孕分級為C級, but under the house rules a letter category must not be written as current.

**Sources:** TFDA 仿單 Taigexyn Capsule 4, 6.1, 10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B5 · Breastfeeding (error)

**Was:** Avoid/caution (no data; quinolones excreted in milk; monitor infant for diarrhea/thrush)

**Now:** 禁用 Contraindicated (TFDA 仿單 4, 6.2); if benefit clearly outweighs risk, 暫停哺乳 interrupt breastfeeding. No LactMed record; no human milk data.

**Why:** Insert 6.2 says 哺乳中婦女禁用, and if the drug is used anyway, 應暫停哺乳 (breastfeeding must stop). 'Monitor infant for diarrhea/thrush' assumes breastfeeding continues, which contradicts the label. That phrase is generic LactMed class wording and has no nemonoxacin source; the local LactMed archive has no nemonoxacin record.

**Sources:** TFDA 仿單 Taigexyn Capsule 4, 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 6.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B6 · Indications (error)

**Was:** Pneumonia, CAP, UTI, SSTI

**Now:** Pneumonia, CAP (REMOVE UTI, SSTI)

**Why:** Neither an FDA label nor an SmPC exists. The TW inserts are approved only for adult CAP: the capsule for mild CAP suitable for outpatient treatment, the IV for adult CAP. The boxed warning says the drug should be kept for when there is no alternative in uncomplicated cystitis or UTI. SSTI and diabetic-foot infection are investigational only. The page body itself lists UTI and ABSSSI under 'Under Investigation'.

**Sources:** TFDA 仿單 Taigexyn Capsule 2 適應症, 特殊警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B7 · Drug Interactions (error)

**Was:** Al/Mg antacids & iron (↓absorption \>60% - separate ≥2h), QT drugs (avoid), NSAIDs (↑seizure risk), warfarin (monitor INR), corticosteroids (↑tendon rupture)

**Now:** Al/Mg antacids (AUC ↓81%), sucralfate, Fe²⁺ (AUC ↓64%; avoid), Zn/multivalent-cation vitamins: give ≥2 h AFTER nemonoxacin (antacid 4 h before still ↓AUC 74%); Ca carbonate ↓AUC 19% (no adjustment); probenecid (AUC ↑25%, caution); theophylline (AUC ↑17%, monitor levels); warfarin (monitor PT/INR); class Ia/III antiarrhythmics & QT drugs (avoid/caution); NSAIDs (↑CNS stimulation/seizure); antidiabetics (dysglycemia, monitor glucose); corticosteroids (avoid, ↑tendon rupture). No CYP inhibition/induction; P-gp substrate.

**Why:** Section 7 of both inserts sets a direction for the gap: Al/Mg, sucralfate, iron and Zn multivitamins must be given at least 2 h AFTER nemonoxacin. Taking an antacid 4 h BEFORE still cut AUC by 74.3%. A plain 'separate ≥2h' is therefore unsafe if the antacid goes first. The column also leaves out the label-listed interactions with theophylline (monitor levels), probenecid and antidiabetic drugs.

**Sources:** TFDA 仿單 Taigexyn Capsule 7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 5.1 QT, 7 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B8 · Hepatic dose (unsupported)

**Was:** No adjustment (mild-moderate); caution in severe

**Now:** 仿單：肝功能不全安全性及療效尚未確立 (no hepatic PK study in label, 3.3/11). Moderate HI single-dose PK (n=10): no significant change → no adjustment suggested for mild–moderate (PMID 30819510). Severe: no data, caution.

**Why:** Insert 3.3 says only that safety and efficacy are not established in hepatic impairment. 'No adjustment' comes from a Chinese PK study (PMID 30819510), not from the label. The value is plausible, but its source should be shown.

**Sources:** TFDA 仿單 Taigexyn Capsule 3.3, 11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; Kang Y et al. Clin Ther 2019;41:505 (PMID 30819510, verified) — https://pubmed.ncbi.nlm.nih.gov/30819510/

### B9 · Side Effects (missing)

**Was:** GI, LFT↑, neutropenia, leukopenia, QTc prolong, CNS

**Now:** GI, LFT↑, neutropenia, leukopenia, QTc prolong, CNS, neuropathy, dysglycemia, photosensitivity, SJS/TEN

**Why:** The boxed warning names peripheral neuropathy. Section 5.1 warns about dysglycemia (血糖異常), photosensitivity and SJS/TEN. All of these exist as schema options. The current tags are correct but incomplete.

**Sources:** TFDA 仿單 Taigexyn Capsule 特殊警語, 5.1, 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 5.1, 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B10 · Notes (error)

**Was:** Take fasting; non-fluorinated (potentially safer profile)

**Now:** 空腹服用 (飯前/飯後≥2 h)；制酸劑/鐵/sucralfate 須於本藥後≥2 h. Non-fluorinated quinolone, but same quinolone boxed warning (tendinitis/rupture, neuropathy, CNS); reserve for no-alternative in AECB, uncomplicated cystitis/UTI, acute sinusitis. TQT study positive (QTc ↑8.74 ms at 500 mg) — avoid in QT prolongation, uncorrected hypoK, class Ia/III antiarrhythmics; monitor glucose in diabetics. Not FDA/EMA approved. (TFDA 仿單)

**Why:** 'Potentially safer profile' is contradicted by the insert. Section 10.3 says the toxicity is similar to that of approved fluoroquinolones. The product carries the full quinolone boxed warning. The thorough QT study was positive. The insert notes only no phototoxicity in animals.

**Sources:** TFDA 仿單 Taigexyn Capsule 特殊警語, 5.1 QT, 10.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; Zhao C et al. Clin Ther 2018;40:983 (PMID 29803534, verified) — https://pubmed.ncbi.nlm.nih.gov/29803534/

### B11 · Coverage (minor)

**Was:** MSSA, MRSA, Streptococcus, Haemophilus, Klebsiella, Chlamydia, Mycoplasma, Legionella

**Now:** MSSA, MRSA, Streptococcus, Haemophilus, Klebsiella, E.coli, Chlamydia, Mycoplasma, Legionella

**Why:** Insert 10.2 lists E. coli in the spectrum, as an in-vitro result without the clinical-data footnote 1. All the existing tags are supported. Footnote 1 marks clinical data for S. pneumoniae (incl. PRSP), S. aureus (MSSA), H. influenzae, K. pneumoniae and the atypicals. MRSA, S. pyogenes and K. oxytoca are in vitro only. Atypical data are not from Taiwanese isolates. Add a caveat that Taiwanese MRSA blood isolates are non-susceptible at the tentative 1 µg/mL breakpoint: 22% in ST239 and 13.5% in ST8/USA300 (PMID 39825371).

**Sources:** TFDA 仿單 Taigexyn Infusion 10.2 抗菌範圍 / 敏感性試驗 (S. pneumoniae S ≤0.5, S. aureus S ≤1 µg/mL) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Chen P-Y et al. Ann Clin Microbiol Antimicrob 2025;24:5 (PMID 39825371, verified) — https://pubmed.ncbi.nlm.nih.gov/39825371/

### B12 · Monitor (minor)

**Was:** LFT, renal, CBC, ECG

**Now:** LFT, renal, CBC, ECG (keep; add blood-glucose monitoring in diabetics to Notes — no schema option)

**Why:** The IV insert 5.1 recommends monitoring liver function (建議適時監測肝功能) and the ECG (建議使用本藥品期間適時監測心電圖). Section 6.5 says to monitor renal function in the elderly. CBC is supported by the leukopenia and neutropenia ADRs but is not an explicit label recommendation, so it is plausible and should stay. Glucose monitoring is label-recommended in diabetics but has no tag option.

**Sources:** TFDA 仿單 Taigexyn Infusion 5.1 肝毒性/QT/血糖異常, 6.5 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B13 · Page body (error)

**Was:** Notes › Distinguishing Features: "Thorough QT study: At 500mg and 750mg doses, no clinically significant QTc prolongation; mean ΔΔQTcF <10ms (negative per ICH E14 criteria)"; "Non-fluorinated → potentially reduced phototoxicity, hepatotoxicity, QT effects"; Side Effects table Cardiac: "QT prolongation (minimal risk at therapeutic doses)"

**Now:** Thorough QT study (n=48) POSITIVE: mean max QTc ↑8.74 ms at 500 mg (vs moxifloxacin 13.04 ms); IV trials: QTcF ↑30–60 ms in 18.3% (vs levofloxacin 11.7%); ECG QT prolongation ADR 2.1% (IV). Avoid in QT prolongation, uncorrected hypokalemia, class Ia/III antiarrhythmics. (TFDA 仿單 5.1, 8.1; PMID 29803534)

**Why:** The current text is the opposite of what the source says. Insert 5.1 says the thorough QT study 評估結果呈陽性 (was positive) and that nemonoxacin carries a risk of QTc prolongation. The published TQT study concludes that both the therapeutic and supratherapeutic doses prolong QT/QTc.

**Sources:** TFDA 仿單 Taigexyn Infusion 5.1 QT 間隔延長, 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Zhao C et al. Clin Ther 2018 (PMID 29803534, verified) — https://pubmed.ncbi.nlm.nih.gov/29803534/

### B14 · Page body (error)

**Was:** Renal table: ">50 No adjustment; 30-50 No adjustment (use caution); <30 500 mg q48h; HD: dose after dialysis, consider 500 mg q48h; CRRT: consider 500 mg q24-48h" (and Brief Table: "CrCl <30: 500 mg q48h", inconsistent with the column's <50)

**Now:** CrCl 60–90: no adjustment; CrCl <60 and ESRD (incl. HD): not recommended per TFDA 仿單 3.3; CRRT: no data. Off-label PK: severe RI 500 mg q48h modelled from single-dose study (PMID 33928669).

**Why:** This repeats the B1 error in the body, and the body (<30) and the column (<50) also disagree with each other. The CRRT advice 'q24-48h' has no source.

**Sources:** TFDA 仿單 Taigexyn Capsule/Infusion 3.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; PMID 33928669 (verified) — https://pubmed.ncbi.nlm.nih.gov/33928669/

### B15 · Page body (error)

**Was:** PK: "Protein binding ~16%"; "t½ 9-16h (single dose) → 19.7h (steady state)"; Adult dose note "food ↓Cmax 46%, ↓AUC 27%"; "Vd: large distribution"

**Now:** Protein binding 44–48%; t½ ≈ 11–12 h (IV 仿單 ≈11 h; capsule 仿單 12.1 h); high-fat meal ↓Cmax ~36%, ↓AUC ~24%, Tmax delayed ~3.5 h; Vd ≈ 107.6 L (PO steady state) / ≈200 L (single dose); ~70–72% unchanged in urine, ~6% in feces, <2% glucuronide; F ≈ 100%.

**Why:** Section 11 of both inserts gives these values, and the current numbers disagree with them.

**Sources:** TFDA 仿單 Taigexyn Capsule 11 藥物動力學 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B16 · Page body (error)

**Was:** DDI table: Al/Mg "↓AUC 80.5%, ↓Cmax 77.8% … Give nemonoxacin ≥2h before or ≥4h after antacid"; Fe "↓AUC 63.7%, ↓Cmax 57% … Separate by ≥2h"; Ca "↓AUC 17.8%, ↓Cmax 14.3%"; Probenecid "↑AUC 26.2%, ↓CLr 22.6% … No adjustment"; Theophylline "No significant interaction expected … not studied directly"

**Now:** Al/Mg: AUC ↓81.1%, Cmax ↓78.7%; antacid 4 h BEFORE still ↓AUC 74.3% → give antacid/sucralfate ≥2 h AFTER nemonoxacin only. Fe²⁺: AUC ↓63.9%, Cmax ↓60.9% → avoid; if needed give ≥2 h after nemonoxacin. Ca carbonate: AUC ↓18.8%, Cmax ↓16.2% (no adjustment). Probenecid: AUC ↑25.4%, CLr ↓23.7% → use with caution, monitor. Theophylline: studied — theophylline AUC ↑16.7%, Cmax ↑15.2% → monitor theophylline levels/adjust. (TFDA 仿單 7)

**Why:** The '≥4h after antacid' option goes against the insert, which measured a 74% fall in AUC when the antacid was given 4 h before. The theophylline row is wrong: the interaction was studied and level monitoring is required. All the percentages are slightly off.

**Sources:** TFDA 仿單 Taigexyn Capsule 7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### B17 · Page body (error)

**Was:** Side Effects table: "Leukopenia (2.3%), neutropenia (2.5%)"; "Pollakiuria"; "Agranulocytosis"; no IV infusion-site reactions; "Overall AE incidence 37.2% (similar to levofloxacin 38.8%)… Discontinuation 0.4%"

**Now:** PO (TW 仿單 8.1): ALT↑ 4.4%, nausea 2.5%, WBC↓ 2.1%, neutropenia 1.9%, dizziness 1.9%, AST↑ 1.9%, diarrhea 1.3%, vomiting 1.2%, headache 1.0%. IV (仿單 8.1): ALT↑ 5.7%, infusion-site erythema 4.7%, pruritus 4.4%, pain 2.0%, swelling 1.9%, AST↑ 3.9%, QT prolongation 2.1%, WBC↓ 2.0%, GGT↑ 1.6%, nausea 1.6%, dizziness 1.1%, neutropenia 1.0%. Flag as unsourced (not in 仿單): pollakiuria, agranulocytosis, 'overall AE 37.2% vs 38.8%', 'discontinuation 0.4%'.

**Why:** The TW insert gives neutropenia as 1.9% and low WBC as 2.1%; 2.5% is a Chinese review figure (PMID 36569296). The IV ADR profile, where infusion-site reactions are common, is missing. Pollakiuria, agranulocytosis, the 37.2%/38.8% figures and the 0.4% discontinuation rate appear in neither insert.

**Sources:** TFDA 仿單 Taigexyn Capsule 8.1, 8.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; TFDA 仿單 Taigexyn Infusion 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; Yuan J et al. Front Pharmacol 2022 (PMID 36569296, verified) — https://pubmed.ncbi.nlm.nih.gov/36569296/

### B18 · Page body (error)

**Was:** Adult Dose table IV row: "500 mg once daily \| 7-10 days \| Infusion"; Brief Table Adult Dose "PO/IV … × 7-10 days"

**Now:** IV: 500 mg/250 mL once daily, infuse over ≥90 min, 7–14 days; no reconstitution (TFDA Infusion 仿單 3.1–3.2)

**Why:** This is the same problem as B2, in the body.

**Sources:** TFDA 仿單 Taigexyn Infusion 3.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B19 · Page body (error)

**Was:** Pregnancy: "Category: Not assigned (avoid use)… Use only if no safer alternatives and benefit clearly outweighs risk"; Breastfeeding: "Avoid or use with caution. If used, monitor infant for diarrhea, candidiasis. Consider pumping and discarding milk for 4-6h post-dose"

**Now:** Pregnancy: 禁用 contraindicated (仿單 4, 6.1); animal: ↓fetal weight/delayed ossification at high dose, juvenile arthropathy (10.3). Breastfeeding: 禁用 contraindicated (仿單 4, 6.2); if benefit > risk, interrupt breastfeeding. No human milk data / no LactMed record.

**Why:** Both statements weaken a label contraindication. 'Pump and discard 4–6 h' has no source. It is also not enough given a t½ of about 11–12 h.

**Sources:** TFDA 仿單 Taigexyn Capsule 4, 6.1, 6.2, 11 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### B20 · Page body (error)

**Was:** Indications/Brief Table: "Indications: CAP, SSTI, diabetic foot infection"; Pediatric: "Avoid in patients <18 years"

**Now:** Brief Table Indications: CAP (adult; capsule = mild outpatient CAP). Add boxed note: reserve for no-alternative in AECB, uncomplicated cystitis/UTI, acute sinusitis. Pediatric: 禁用 contraindicated (仿單 4).

**Why:** In the Brief Table, SSTI and DFI appear as indications, which contradicts the inserts (CAP only) and the page's own 'Under Investigation' table. Children and adolescents are a contraindication, not an 'avoid'.

**Sources:** TFDA 仿單 Taigexyn Capsule 2, 4, 特殊警語 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### B21 · Page body (missing)

**Was:** Warnings (Class-related) list: tendinitis, neuropathy, CNS, MG, aortic aneurysm, hypersensitivity, C. diff

**Now:** Add the boxed warning (reserve for no-alternative in AECB, uncomplicated cystitis/UTI, acute sinusitis; disabling, potentially irreversible ADRs; avoid if prior serious quinolone ADR), QT prolongation, dysglycemia, hepatotoxicity, photosensitivity, SJS/TEN (仿單 特殊警語, 5.1). Mark 'Aortic aneurysm/dissection' as FQ-class (FDA fluoroquinolone labeling), not in the nemonoxacin 仿單.

**Why:** The body leaves out the boxed-warning reservation and several warnings from 5.1. Aortic aneurysm does not appear in either TW insert, so it should be labelled as class extrapolation.

**Sources:** TFDA 仿單 Taigexyn Infusion 特殊警語, 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F

### B22 · Page body (minor)

**Was:** Regulatory Status: "Taiwan Approved (2014) - oral + IV"; China 2016; Russia/CIS/Turkey/Latin America approved; USA QIDP + fast-track 2013, Phase 3 completed

**Now:** Taiwan: capsule licence 衛部藥製字第058540號 issued 2014-12-04; IV licence 衛部藥製字第060558號 issued 2020-09-29. Other regions: flag as unsourced (Poole RM, Drugs 2014, PMID 25079302 covers first global approval).

**Why:** The TFDA licence pages show the IV product was licensed in 2020 (109-09-29), not 2014. The other country statuses are unsourced and plausible, so they should be flagged rather than removed.

**Sources:** TFDA 許可證 Taigexyn Infusion (發證日期 109-09-29) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; TFDA 許可證 Taigexyn Capsule (發證日期 103-12-04) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F; Poole RM. Drugs 2014 (PMID 25079302, verified) — https://pubmed.ncbi.nlm.nih.gov/25079302/

### B23 · Page body (unsupported)

**Was:** Coverage table: E. faecalis (some), CoNS, Proteus spp., Peptostreptococcus, Propionibacterium acnes, "activity similar to levofloxacin", NO coverage ESBL-producers; Mechanism: "requires mutations in 3 genes vs 1-2 for fluoroquinolones"; MIC data "more potent than levofloxacin, moxifloxacin"

**Now:** Flag as unsourced (not in 仿單 10.2). Label spectrum: S. pneumoniae (incl. PRSP), S. aureus (MSSA/MRSA), H. influenzae, H. parainfluenzae, K. pneumoniae, E. coli, M. catarrhalis, M. pneumoniae, C. pneumoniae, L. pneumophila; in vitro only: S. pyogenes, K. oxytoca. Resistance: multistep mutation + efflux, spontaneous frequency <10⁻¹⁰–10⁻⁶; Taiwanese MRSA with ≥3 QRDR substitutions largely non-susceptible (PMID 39825371).

**Why:** These organisms and claims do not appear in either insert. They are plausible but unsourced, so they should be flagged and not deleted. The insert describes resistance as developing through multistep mutation and efflux, as with FQs. Recent Taiwanese data show cross-resistance in MRSA with high-level FQ resistance.

**Sources:** TFDA 仿單 Taigexyn Infusion 10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060558%E8%99%9F; PMID 39825371 (verified) — https://pubmed.ncbi.nlm.nih.gov/39825371/

### B24 · Page body (minor)

**Was:** "Max dose studied: 750 mg/day (supratherapeutic; higher AE rate)"

**Now:** 750 mg/day used in phase II CAP trials (integrated phase II/III safety population, n=151; 仿單 8.1); healthy volunteers tolerated a single 1.5 g dose and 1 g/day × 10 days without notable AEs (仿單 9 過量). Overdose: supportive care + ECG monitoring for QT prolongation.

**Why:** Section 9 records higher doses tested in healthy subjects.

**Sources:** TFDA 仿單 Taigexyn Capsule 8.1, 9 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

### B25 · Page body (error)

**Was:** Final line: "Let me know if you need any modifications or additional details!" and header "Brief Table Format (For Database Entry)"

**Now:** REMOVE the trailing chat line. Correct the Brief Table to match the fixed columns (B1–B10), or remove it as a duplicate (owner's choice).

**Why:** The final line is pasted AI-chat text, which the ground rules say to remove. The Brief Table repeats the column errors listed above.

**Sources:** Ground rules (pasted AI-chat text); TFDA 仿單 as per B1–B10 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC058540%E8%99%9F

## Verified correct as written

- Category 'Non-fluorinated quinolone' matches 仿單 §10.1 ('無氟喹諾酮類 non-fluorinated quinolone').
- The Mechanism column ('Inhibits DNA gyrase + topoisomerase IV → bactericidal') matches 仿單 §10.1.
- Coverage tags MSSA, MRSA, Streptococcus, Haemophilus, Klebsiella, Chlamydia, Mycoplasma and Legionella are all in the 仿單 §10.2 spectrum (S. pneumoniae incl. PRSP; S. aureus incl. MRSA; H. influenzae; K. pneumoniae; atypicals).
- The Indications tags 'Pneumonia' and 'CAP' are correct (仿單 §2).
- Oral dose of 500 mg once daily for 7–10 days on an empty stomach matches capsule 仿單 §3.1.
- Side Effects tags GI, LFT↑, neutropenia, leukopenia, QTc prolong and CNS are supported by 仿單 §8.1 (nausea, diarrhoea, vomiting; ALT/AST↑; neutropenia; WBC↓; IV QT prolongation 2.1%; dizziness, headache).
- Monitor tags LFT, ECG and renal are supported by IV 仿單 §5.1 (monitor LFT and ECG) and §6.5 (renal monitoring in the elderly). CBC is reasonable given the WBC/neutrophil ADRs.
- Body: ALT↑ 4.4% and nausea 2.5% match capsule 仿單 §8.1.
- Body: oral bioavailability ~100% (IV 仿單 §11), Tmax 1–2 h, renal clearance ~8 L/h (≈133 mL/min, consistent with the stated 132–164 mL/min) and 'excreted mainly renally' are consistent with the label.
- Body: spontaneous mutation frequency <10⁻¹⁰ to 10⁻⁶ and no observed cross-resistance with FQs in limited data match 仿單 §10.2.
- Body: positive in vitro mutagenicity (Ames etc.) and juvenile-dog arthropathy match 仿單 §10.3.
- Body: interaction items that are correct in substance: CaCO3 needs no adjustment, cimetidine needs no adjustment, NSAIDs raise CNS/seizure risk, corticosteroids should be avoided (tendon rupture), warfarin needs INR monitoring, and Al/Mg antacids and sucralfate need ≥2 h separation (the direction is wrong; see A11/A12).
- Body: tendinitis risk factors (elderly, transplant, corticosteroids), myasthenia gravis exacerbation, C. difficile, hypersensitivity and peripheral neuropathy are all listed in 仿單 §5.1.
- Body: capsule strength 250 mg and IV availability in Taiwan are confirmed by both TFDA licences.
- Body: integrated CAP clinical response of 88.7% vs 86.4% (levofloxacin) matches capsule 仿單 §12 (as an integrated figure; see A23).
- Body: the postmarketing cohort of n=257,420 and no new safety signals is supported by PMID 36569296 (verified via esummary/efetch), though the body does not cite it.
- Body: hepatic 'no adjustment for mild–moderate' is supported by PMID 30819510 (moderate HI PK study), though the label itself says 'not established' (see A3).
- Category 'Non-fluorinated quinolone': the TFDA insert 10.1 says 無氟喹諾酮類 (non-fluorinated quinolone). PMID 30819510 also calls it C-8-methoxy.
- Mechanism 'Inhibits DNA gyrase + topoisomerase IV → bactericidal' matches insert 10.1.
- Adult PO dose 500 mg (2 × 250 mg capsules) once daily on an empty stomach for 7–10 days matches the capsule insert 3.1.
- Coverage tags MSSA, MRSA, Streptococcus, Haemophilus, Klebsiella, Chlamydia, Mycoplasma and Legionella are all in insert 10.2. MRSA and S. pyogenes are in vitro only.
- Side Effects tags GI, LFT↑, neutropenia, leukopenia, QTc prolong and CNS are supported by inserts 8.1 and 5.1.
- Monitor tags LFT, ECG and renal are supported by IV insert 5.1 (monitor liver function and ECG) and 6.5 (monitor renal function in the elderly).
- Drug Interactions: warfarin (monitor PT/INR), NSAIDs (CNS stimulation and seizures), corticosteroids (avoid; tendon rupture) and QT drugs (caution) are all in inserts 7 and 5.1.
- Body: CYP — no meaningful inhibition of CYP1A2/2B6/2C8/2C9/2C19/2D6/3A4 and no induction (insert 7).
- Body: Tmax 1–2 h and oral bioavailability of about 100% (IV insert 11).
- Body: 60–75% excreted unchanged in urine, consistent with about 70% (IV) and 72.37% (capsule); renal clearance of about 8 L/h, roughly 133 mL/min, consistent with the stated CLr 132–164 mL/min.
- Body: metabolism is minimal (<2% glucuronide in the insert, so '<5%' is acceptable).
- Body: low spontaneous mutation frequency of <10⁻¹⁰ to 10⁻⁶, and no cross-resistance with FQs seen in the limited data (insert 10.2).
- Body: CAP pooled clinical cure 88.7% vs levofloxacin 86.4%, non-inferior (insert 12).
- Body: Phase II/III oral safety population n=670 (insert 8.1).
- Body: postmarketing surveillance of n=257,420 in China with no new safety signals (PMID 36569296, verified).
- Body: Ames and other in-vitro mutagenicity tests positive, in-vivo tests negative; juvenile-animal arthropathy (insert 10.3).
- Body: Calcium carbonate interaction is minor and can be co-administered; cimetidine needs no adjustment (insert 7).
- Body: ↑ALT is the most common ADR, 4.4% oral (insert 8.1).
- Body: Pediatric — no pediatric PK or clinical studies (insert 11).
- Body: Formulations — 250 mg capsule and IV infusion are available in Taiwan.
- Body: Not approved in the USA or EU (no DailyMed SPL or eMC SmPC found).

## Apply log

- Renal dose, HD, CRRT column: merged TFDA 仿單 §3.3 (CrCl 60–90 no adjustment; <60 and ESRD/HD not recommended; CRRT no data) plus literature-only PopPK (PMID 33928669, 36569296)
- Adult dose column: PO 500 mg (2 cap) QD fasting × 7–10 d; IV 500 mg/250 mL QD ≥90 min × 7–14 d with green `IV` tag; elderly no adjustment
- Hepatic dose column: label not established + PMID 30819510 for mild–moderate; severe no data
- Pediatric dose column: 禁用 contraindicated (§4), not established (§3.3, §6.4), juvenile dog cartilage (§10.3)
- Pregnancy column: 禁用 contraindicated (§4, §6.1) + animal data (§10.3)
- Breastfeeding column: 禁用 contraindicated (§4, §6.2), 暫停哺乳, no LactMed record
- Indications column: Pneumonia, CAP (UTI, SSTI removed)
- Drug Interactions column: merged label §7 values (Al/Mg, Fe, CaCO3, probenecid, theophylline, warfarin, antidiabetics, QT, NSAIDs, corticosteroids, P-gp)
- Side Effects column: added neuropathy, dysglycemia, photosensitivity, SJS/TEN
- Notes column: merged fasting/cation spacing, boxed warning, TQT positive, glucose monitoring, not FDA/EMA approved
- Coverage column: added E.coli
- Monitor column: added electrolyte
- Renewed date set to 2026-10-05 (date only)
- Body Mechanism: added §10.1–10.2 resistance text, flagged '3 genes', replaced 'may reduce FQ toxicities'
- Body Indications: approved cell updated, boxed-warning note added, Under Investigation rows flagged
- Body Coverage: unsourced organisms flagged, NO coverage row rewritten, label spectrum + breakpoints + PMID 39825371 line added, potency claim flagged
- Body Adult Dose: PO food-effect note, IV row (250 mL, ≥90 min, 7–14 d), max-dose/overdose line
- Body Renal table rewritten per 仿單 + literature line; PK notes corrected (~70% urine, CLr ≈8 L/h, t½ 11/12.1 h, PB 44–48%)
- Body Hepatic: label/PMID 30819510 source line and metabolism/CYP/P-gp line
- Body Pediatric: contraindicated text and juvenile dog finding
- Body Side Effects: GI/hepatic/hematologic/CNS/cardiac percentages, infusion-site row, unsourced flags (agranulocytosis, somnolence, pollakiuria, overall AE, discontinuation), postmarketing PMID 36569296
- Body Monitor: LFT, ECG, blood glucose rows updated; PT/INR row added
- Body DDI table: Al/Mg, Fe, CaCO3, probenecid, warfarin, theophylline rows corrected; antidiabetic and Zn/multivitamin rows added; CYP/P-gp note
- Body Pregnancy: Category line deleted, animal data, placental transfer flagged, recommendation contraindicated
- Body Breastfeeding: recommendation contraindicated/interrupt breastfeeding, pumping text removed, RID and infant-monitoring flagged
- Body PK Highlights rewritten per 仿單 §11
- Body Distinguishing Features: non-fluorinated bullet replaced, TQT positive text, 3-genes and potency flagged
- Body Regulatory: Taiwan license dates/numbers, non-Taiwan rows and QIDP flagged (PMID 25079302); clinical efficacy figures per §12
- Body Warnings: boxed warning + QTc, dysglycemia, hepatotoxicity, photosensitivity, SJS/TEN, seizures bullets added; aortic aneurysm annotated
- Brief Table Format section and trailing AI-chat line removed
- References section appended (both TFDA 仿單 with license numbers/dates and URLs, plus PMIDs 33928669, 36569296, 30819510, 29803534, 39825371, 25079302, 38851462)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
