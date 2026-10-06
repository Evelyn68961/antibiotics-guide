# New entry: Odefsey (Rilpivirine/Emtricitabine/TAF)

- **Notion entry:** [Odefsey (Rilpivirine/Emtricitabine/TAF)](https://app.notion.com/3f1c496dfff181c18aead66fbc8828c3). Created 2026-10-06.
- **Hospital codes:** ODE01 (Odefsey tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/emtricitabine-rilpivirine-tenofovir-alafenamide.json` (plus any Taiwan insert text files)

## Product and sources

FJUH ODE01 — Odefsey 複方錠劑 (安以斯膜衣錠), film-coated tablet emtricitabine 200 mg / rilpivirine 25 mg (as HCl) / tenofovir alafenamide 25 mg (as fumarate), ATC J05AR19, NHI BC27505100 = TFDA 衛部藥輸字第027505號 (licence holder 嬌生 Janssen; TW insert latest update 114/01/06 v4, based on EUSmPC Feb2023 + USPI Aug2017). Only stocked dosage form: oral tablet. Notion page https://app.notion.com/3f1c496dfff181c18aead66fbc8828c3 is blank except Title and Category. Sources used: US DailyMed setid ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5 v13 (I fetched the SPL XML myself: effectiveTime 20251202, boxed warning present); UK eMC 7262 (rev 02/10/2025); TW insert (TFDA); LactMed NBK501548 / NBK501818 / NBK621367; hospital P4 page https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=ODE01 (used only to identify the product). I could not verify the DHHS guideline because clinicalinfo.hiv.gov is blocked (proxy 403), so no guideline claim is proposed.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Odefsey (FTC 200 mg / RPV 25 mg / TAF 25 mg) **1 tab QD with a meal** (隨餐服用; food ↑RPV AUC 13–72%, ↑TAF AUC 45–53%)<br>• Complete regimen for HIV-1: do not add other antiretrovirals<br>• Treatment-naïve: only if HIV-1 RNA **≤100,000 copies/mL** (above this, more virologic failure and NNRTI/M184 resistance)<br>• Switch: suppressed (HIV-1 RNA <50 copies/mL) on a stable regimen (US: for ≥6 months), no history of treatment failure, and no known resistance to FTC, RPV or tenofovir<br>• Missed dose: ≤12 h late → take with food as soon as possible; >12 h → skip it. Vomiting within 4 h of a dose → take another tablet with food (TW/UK)<br>• Swallow whole; do not chew, crush or split (bitter taste) (勿嚼碎/磨碎/剝開)

**Why:** Column is empty. The dose, food requirement, viral-load limit and switch criteria are the same in all three labels. The missed-dose, vomiting and do-not-crush rules come from the TW insert and UK SmPC.

**Sources:** US FDA label §1 Indications, §2.2 Recommended Dosage, §12.3 Table 5 (food effect): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §2 適應症, §3.1 用法用量, §11 (food ↑RPV AUC 13–72%, TAF 45–53%): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.1, §4.2: https://www.medicines.org.uk/emc/product/7262/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> 🇹🇼 TW insert (本院品項) = UK SmPC:<br>CrCl ≥30: no adjustment<br>CrCl falls **<30 during treatment: discontinue** (應停用)<br>CrCl 15–29, or <15 and not on chronic HD: **avoid** (應避免; safety not established)<br>ESRD (CrCl <15) on chronic HD: no dose change, but **generally avoid**; use with caution only if benefit > risk; on HD days give **after dialysis**<br>Children <18 y with ESRD: no data<br>US label: CrCl ≥30 no adjustment; 15 to <30, or <15 without chronic HD: **not recommended**; CrCl <15 on chronic HD: use with caution, monitor more closely for RPV adverse effects, dose after HD<br>PD / CRRT: no label data. HD removes up to ~30% of FTC; tenofovir is efficiently removed by HD (extraction coefficient ~54%); RPV is highly protein-bound → not significantly removed by HD/PD<br>Stop if renal function falls significantly or if proximal renal tubulopathy or Fanconi syndrome develops

**Why:** Column is empty. Per the ground rules, the TW insert (stocked product) is primary and the US values sit alongside. They differ in two places. TW/UK say to discontinue when CrCl falls below 30 during treatment and to 'generally avoid' on HD; the US label only says 'not recommended', and on HD 'use with caution'. No label covers CRRT, so the entry says so instead of giving a dose.

**Sources:** TW 仿單 §3.3 腎功能不全, §5.1 腎毒性/進行血液透析之末期腎病, §9 過量: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; US FDA label §2.4, §5.5, §8.6, §10 Overdosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC §4.2 Renal impairment, §4.4: https://www.medicines.org.uk/emc/product/7262/smpc

### A3 · Hepatic dose

Child-Pugh A/B: no adjustment (TW/UK: use with caution in B)<br>Child-Pugh C: not studied → **not recommended** (TW/UK 不建議); US: not studied<br>HBV/HCV coinfection or raised LFTs at baseline: higher risk of hepatotoxicity → check LFTs before and during treatment (US 5.3)<br>肝功能不全：A/B 不需調整；C 不建議

**Why:** Column is empty. The TW insert and SmPC say Child-Pugh C is 'not recommended'; the US label only says it was not studied.

**Sources:** TW 仿單 §3.3 肝功能不全: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; US FDA label §8.7 Hepatic Impairment, §5.3 Hepatotoxicity: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC §4.2 Hepatic impairment: https://www.medicines.org.uk/emc/product/7262/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> 🇹🇼 TW insert (本院品項) / UK: **≥12 y and ≥35 kg**: adult dose, 1 tab QD with a meal; <12 y or <35 kg: safety and efficacy not established<br>US label: **≥25 kg** (efficacy established from age 6 y): 1 tab QD with a meal; not recommended <25 kg. In Taiwan, use at 25–<35 kg is US-label only (off-label)<br>Fixed-dose combination: the dose cannot be adjusted<br>Treat only adolescents likely to adhere well (resistance risk) (TW 5.1 / UK 4.4); depressive disorders occurred in 19% of adolescents on RPV (US 5.4)<br>No data for children <18 y with ESRD

**Why:** Column is empty. The stocked TW product sets the threshold at ≥12 y and ≥35 kg. The US label now allows ≥25 kg, and its §8.4 says 'pediatric patients 6 years of age and older'. Both should be shown, with the TW threshold first.

**Sources:** TW 仿單 §2, §3.3 兒童族群, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; US FDA label §1, §2.2, §8.4 Pediatric Use, §5.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC §4.1, §4.2 Paediatric population, §4.4: https://www.medicines.org.uk/emc/product/7262/smpc

### A5 · Indications

HIV

**Why:** The only labelled indication is treatment of HIV-1 as a complete regimen. Odefsey is not approved for HIV PrEP or HBV in any label, so neither tag should be added.

**Sources:** US FDA label §1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC §4.1: https://www.medicines.org.uk/emc/product/7262/smpc; TW 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### A6 · Coverage

HIV, HBV

**Why:** Coverage records activity, not approved use. The TW insert §10.1 states that FTC and tenofovir are active against HIV-1, HIV-2 and HBV. That HBV activity is also why the boxed warning about hepatitis B flaring on discontinuation exists. Notes should make clear that Odefsey is not indicated to treat HBV, which is why the Indications column has no HBV tag. RPV has only limited activity against HIV-2 (EC50 2,510–10,830 nM), so Odefsey is not an HIV-2 regimen; there is no separate HIV-2 tag. If the owner prefers Coverage to follow labelled indications only, use 'HIV' alone.

**Sources:** TW 仿單 §10.1 作用機轉, §5.1 合併感染HIV與B型肝炎: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; US FDA label §12.4 Microbiology (RPV HIV-2 EC50), Boxed Warning: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC §4.4 (TAF active against HBV): https://www.medicines.org.uk/emc/product/7262/smpc

### A7 · Side Effects

CNS, GI, LFT↑, nephrotoxicity, AKI, DRESS, hypersensitivity, IRIS, lactic acidosis, weight gain, bone loss, QTc prolong

**Why:** Each tag is an existing schema option. CNS: headache, sleep disturbance, abnormal dreams, insomnia, dizziness, somnolence, and depression or suicidal ideation (US 5.4; the schema has no 'depression' tag). GI: nausea, diarrhoea, flatulence, abdominal pain, vomiting. LFT↑: hepatotoxicity (US 5.3) and transaminase rise, very common in TW Table 2. Nephrotoxicity and AKI: TAF-associated PRT, Fanconi syndrome, acute renal failure and ATN (US 5.5/6.2). DRESS and hypersensitivity: severe skin reactions, DRESS, angioedema and urticaria (US 5.2/6.2). IRIS: US 5.8. Lactic acidosis: severe hepatomegaly with steatosis (US 5.7). Weight gain: RPV postmarketing (US 6.2; SmPC 4.4). Bone loss: in naïve E/C/F/TAF trials, 10% had a ≥5% lumbar-spine BMD decline (US 6.1); BMD rose after switching from TDF. QTc prolong: only at supratherapeutic RPV doses; the label warns about drugs with TdP risk (US 5.6). Lipid rises (TW Table 2: very common total/LDL cholesterol) have no Side Effects tag and are covered under Monitor 'lipids'.

**Sources:** US FDA label §5.2–5.8, §6.1, §6.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §8 表2 不良反應列表: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.4 (weight/metabolic, nephrotoxicity), §4.8: https://www.medicines.org.uk/emc/product/7262/smpc

### A8 · Monitor

renal, LFT, viral load, HBV serology, lipids, CNS

**Why:** Each tag is an existing schema option. HBV serology: test for HBV before or at initiation (US 2.1/5.1). Renal: serum creatinine, CrCl, urine glucose and urine protein in everyone, plus phosphorus in CKD (US 2.1/5.5); phosphorus can be noted in text rather than adding the 'electrolyte' tag. LFT: before and during treatment if there is underlying hepatic disease (HBV/HCV) or raised LFTs, and consider it for everyone (US 5.3). Viral load: closely in pregnancy (US 2.3/8.1) and routinely for virologic response. Lipids: per HIV guidelines (SmPC 4.4/TW 5.1 weight and metabolic parameters). CNS: mood and depressive symptoms (US 5.4). ECG is not routine; a QTc check applies only with TdP-risk drugs, which goes in Notes.

**Sources:** US FDA label §2.1, §2.3, §5.1, §5.3, §5.4, §5.5: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §5.1 體重與代謝參數, 腎毒性: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.4: https://www.medicines.org.uk/emc/product/7262/smpc

### A9 · Mechanism

**FTC** (emtricitabine): cytidine-analogue NRTI → FTC-triphosphate competes with dCTP and is incorporated into viral DNA → chain termination<br>**TAF** (tenofovir alafenamide): phosphonamidate prodrug of tenofovir, a **nucleotide** RTI (dAMP analogue) → hydrolysed inside cells by cathepsin A → tenofovir diphosphate → chain termination; gives higher tenofovir in PBMCs and lower plasma tenofovir than TDF<br>**RPV** (rilpivirine): diarylpyrimidine NNRTI → non-competitive binding to HIV-1 RT; no phosphorylation needed<br>FTC and tenofovir are also active against HBV (and HIV-2); RPV has limited HIV-2 activity<br>Key RT resistance mutations: K65R, K70E, M184V/I, K101E/P, E138A/G/K/Q/R, Y181C/I/V, Y188L, H221Y, L100I+K103N

**Why:** Column is empty. The content comes from the label microbiology and pharmacodynamics sections. TAF is explicitly a nucleotide RTI (TW: 核苷酸反轉錄酶抑制劑 NtRTI), which corrects the hospital site's 'Non-nucleotide' wording.

**Sources:** US FDA label §12.4 Mechanism of Action: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §10.1 作用機轉, §10.2 抗藥性: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### A10 · Drug Interactions

⛔ **Contraindicated** (TW/UK 4.3; US 4): carbamazepine, oxcarbazepine, phenobarbital, phenytoin; rifampicin, rifapentine, **rifabutin** (contraindicated in TW/UK; US 'not recommended'); **all PPIs** (omeprazole, esomeprazole, lansoprazole, pantoprazole, rabeprazole, dexlansoprazole); systemic dexamethasone (except a single dose); St John's wort → ↓RPV (CYP3A induction or ↑gastric pH) ± ↓TAF (P-gp induction) → loss of virologic response and NNRTI resistance<br>• **H2RA**: once-daily H2RA only (TW); give ≥12 h before or ≥4 h after Odefsey (famotidine 2 h before → RPV AUC ↓76%)<br>• **Antacids** (Al/Mg hydroxide, CaCO3): ≥2 h before or ≥4 h after<br>• **Azoles** (keto/flu/itra/posa/vori): TW/UK **not recommended** (↑RPV via CYP3A, ↑TAF via P-gp); US: no dose adjustment, monitor for breakthrough fungal infection<br>• **Clarithromycin / erythromycin**: TW/UK not recommended (↑RPV/TAF); US: prefer azithromycin<br>• **Ciclosporin**: not recommended (TW/UK; ↑RPV, ↑TAF)<br>• **Dabigatran**: use with caution (possible intestinal P-gp inhibition) (TW/UK)<br>• **Methadone**: R/S-methadone AUC ↓16% → monitor; maintenance dose may need adjusting<br>• **Drugs with known TdP risk**: caution; consider alternatives (US 7.5/TW)<br>• **Nephrotoxic or tubularly secreted drugs** (acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides, high-dose or multiple NSAIDs): ↑FTC/tenofovir and renal risk → monitor renal function (US 7.6)<br>• Do not combine with other ARVs, or with other products containing TAF, TDF, lamivudine or adefovir (TW 5.1/7; US 7.1)<br>• No clinically significant interaction: sofosbuvir, ledipasvir, velpatasvir, voxilaprevir, oral contraceptives, atorvastatin, metformin, sildenafil, midazolam, digoxin, paracetamol, buprenorphine/naloxone<br>• Full check: Liverpool HIV interactions https://www.hiv-druginteractions.org

**Why:** Column is empty. The TW insert, which applies to the stocked product, follows the EU table. It is stricter than the US label on rifabutin (contraindicated), azoles, clarithromycin/erythromycin and ciclosporin (not recommended), and adds dabigatran. The source brief listed only the rifabutin difference and missed the azole, macrolide, ciclosporin and dabigatran differences, which matter for a hospital antimicrobial reference. I have not opened the Liverpool checker; it is included only as the pointer the ground rules require.

**Sources:** TW 仿單 §4 禁忌, §5.1 併用其他藥物, §7 交互作用 表1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.3, §4.5: https://www.medicines.org.uk/emc/product/7262/smpc; US FDA label §4, §5.6, §7.1–7.8 Table 4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5

### A11 · Pregnancy

US label: patients already on Odefsey and **suppressed (<50 copies/mL) before pregnancy may continue** 1 tab QD. Total RPV exposure is ~30–40% lower in pregnancy → **monitor viral load closely**. APR shows no increase in major birth defects for FTC (>5,400 live-birth exposures), RPV (>750) or TAF (>660) vs 2.7% background. Letter categories are retired; register exposures with the APR<br>TW insert (本院品項)/UK: use only if benefit > risk (利益大於風險時使用). Lower RPV exposure is linked to virologic failure → monitor VL closely, or consider switching regimen. Effective contraception advised (TW 6.3)

**Why:** Column is empty. The US label (Dec 2025) supports continuing in patients who were suppressed before pregnancy. The TW insert (EU Feb 2023 basis) uses wording that is more cautious but consistent. No letter category is used.

**Sources:** US FDA label §2.3, §8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §5.1 懷孕, §6.1, §6.3: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.4, §4.6: https://www.medicines.org.uk/emc/product/7262/smpc

### A12 · Breastfeeding

TW insert (本院品項)/UK: **不建議哺乳** — women taking Odefsey should not breastfeed, and HIV+ women are advised not to breastfeed to avoid transmission. FTC is in human milk; RPV/TAF unknown (TW/UK)<br>US 8.2: FTC, TAF and tenofovir found in human milk; RPV unknown (present in rat milk). Risks: HIV transmission, resistance in infected infants, adverse effects in the infant<br>LactMed (component chapters): FTC relative infant dose ~4%, infant serum usually undetectable; TAF gives trivial milk and infant exposure (lower than TDF); RPV has limited data, with low levels in most cases but 1 infant with a high serum level (10,450 mcg/L at 4 mo) → an alternative may be preferred, especially for newborn or preterm infants. LactMed: suppressed mothers on ART who choose to breastfeed should be supported; if VL is not suppressed → formula or donor milk

**Why:** Column is empty. There is no LactMed chapter for the combination, so the three component chapters are cited. The labels disagree on whether TAF is in human milk (US: present; TW/UK: unknown); both statements are kept and attributed.

**Sources:** LactMed Emtricitabine NBK501548 (rev 2026-03-15): https://www.ncbi.nlm.nih.gov/books/NBK501548/; LactMed Rilpivirine NBK501818 (rev 2025-12-15): https://www.ncbi.nlm.nih.gov/books/NBK501818/; LactMed Tenofovir Alafenamide NBK621367 (rev 2026-08-15): https://www.ncbi.nlm.nih.gov/books/NBK621367/; US FDA label §8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §6.2 哺乳: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/7262/smpc

### A13 · Notes

本院品項: ODE01 Odefsey 安以斯膜衣錠 (FTC 200 / RPV 25 / TAF 25 mg) tablet only; 衛部藥輸字第027505號<br>⚠️ **US Boxed warning — post-treatment acute exacerbation of hepatitis B**: FTC and TAF are active against HBV. Test for HBV before starting. If an HIV/HBV-coinfected patient stops Odefsey, monitor hepatic function clinically and by lab for at least several months; anti-HBV therapy may be warranted (US BW/5.1; TW 5.1). 停藥可能導致B肝急性惡化. Not indicated to treat HBV (no HBV Indication tag). Not for HIV-2 (RPV has limited HIV-2 activity)<br>• Only without known resistance to the NNRTI class, FTC or tenofovir; insufficient data after prior NNRTI failure → let resistance testing or history guide use (UK 4.1/4.4). Naïve patients need VL ≤100,000<br>• Must be taken with a meal. **PPIs contraindicated**; H2RA/antacid spacing (see DDI)<br>• **Rifabutin**: contraindicated in TW/UK, 'not recommended' in US → do not combine (rifampicin/rifapentine contraindicated in all labels)<br>• QTc: supratherapeutic RPV (75–300 mg) prolongs QTc → caution with TdP-risk drugs; ECG if combined<br>• Depressive disorders (adults 9%, adolescents 19%; suicidal ideation reported) → evaluate promptly<br>• Severe skin reactions or DRESS → stop immediately if rash comes with fever, blisters, mucosal involvement, conjunctivitis, angioedema, hepatitis or eosinophilia<br>• TAF: PRT, Fanconi syndrome or acute renal failure reported → avoid nephrotoxins (e.g. high-dose NSAIDs)<br>• Lactic acidosis / severe hepatomegaly with steatosis (NRTI class); IRIS, including autoimmune disease (Graves, autoimmune hepatitis) months later<br>• Elderly: use with caution (TW 3.3; limited RPV data ≥65 y)<br>• Contains lactose (TW/UK)

**Why:** Column is empty. The ground rules require the boxed warning (hepatitis B flare on stopping) in Notes; I confirmed it in the SPL XML, since the fetch script missed it. The other items are label warnings that do not fit a single column. The schema has no 'depression' or 'CD4' tag; these are handled in text.

**Sources:** US FDA label Boxed Warning, §5.1–5.8: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §3.3 老年人, §4, §5.1, §1.2 (lactose): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC §4.3, §4.4: https://www.medicines.org.uk/emc/product/7262/smpc

### A14 · Page body

Add a body in the same format as other completed entries (e.g. Valcyte), with these sections:<br># Emtricitabine/Rilpivirine/Tenofovir alafenamide (Odefsey); ODE01 tablet <span color="blue">`PO`</span><br>## Mechanism of action<br>## Spectrum (HIV-1; FTC and TFV also active against HBV; RPV limited HIV-2)<br>## Indications (HIV-1 complete regimen; naïve VL ≤100,000; switch criteria; TW/UK ≥12 y and ≥35 kg vs US ≥25 kg)<br>## Dosing (adult / pediatric / renal table TW vs US / hepatic)<br>## Administration (with meal; missed or vomited dose; swallow whole)<br>## Adverse effects & monitoring (boxed warning, plus §5 warnings)<br>## Drug interactions (table: contraindicated / not recommended TW-UK vs US / spacing / monitor)<br>## Pregnancy & lactation<br>## Clinical pearls<br>## References:<br>- TW 仿單 安以斯膜衣錠 衛部藥輸字第027505號 (2025-01-06 v4): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F<br>- DailyMed setid ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5 v13 (Dec 2025)<br>- eMC 7262 (02/10/2025)<br>- LactMed NBK501548, NBK501818, NBK621367<br>- Liverpool https://www.hiv-druginteractions.org

**Why:** The page body is blank. Completed entries such as Valcyte carry a structured body with a references list. Every column proposed above already cites a source, so the body only reorganises that content. Storage details are left out on purpose, per the owner's rule.

**Sources:** Notion reference entry Valcyte: https://app.notion.com/3f0c496dfff1811698b1cdd46aa0c31c; US FDA label: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC: https://www.medicines.org.uk/emc/product/7262/smpc

### A15 · Adult dose / Notes

Do NOT add the 'CD4 ≤200' restriction to Notion unless it is verified against the DHHS adult/adolescent ARV guideline (clinicalinfo.hiv.gov was unreachable from this environment). Label-supported wording: naïve patients need HIV-1 RNA ≤100,000 copies/mL.

**Why:** The CD4 cut-off is not in the US label (§1), the UK SmPC (§4.1) or the TW insert (§2). It probably comes from DHHS guidance on RPV-based initial regimens, but I could not verify that here. The hospital site is not authoritative.

**Sources:** US FDA label §1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; TW 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; Hospital P4 (non-authoritative): https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=ODE01

### A16 · Renewed date

2026-10-06 (set when the columns are filled)

**Why:** Completed entries (e.g. Valcyte, 2026-10-05) carry a Renewed date. Setting it when this entry is filled records when it was checked against the labels.

**Sources:** Notion reference entry Valcyte: https://app.notion.com/3f0c496dfff1811698b1cdd46aa0c31c

### B1 · Adult dose

<span color="blue">`PO`</span> Odefsey (FTC 200 mg / RPV 25 mg / TAF 25 mg) **1 tab QD with a meal** (隨餐服用; RPV needs food for absorption). Complete regimen: do not add other ARVs<br>• Initial therapy: only if HIV-1 RNA **≤100,000 copies/mL** (above this, more virologic failure and NNRTI/FTC resistance)<br>• Switch: virologically suppressed (<50 copies/mL) on stable ART (US: ≥6 mo), with no history of treatment failure and no resistance to FTC/RPV/tenofovir<br>• Missed dose: ≤12 h late → take with food ASAP; >12 h → skip it. Vomiting <4 h after a dose → take another tablet with food (TW/UK)<br>• Do not chew, crush or split (bitter taste) (TW/UK)<br>• Elderly: TW insert advises caution (few patients ≥65 y studied); UK: no adjustment

**Why:** The column is empty. The dose, the food requirement, the viral-load limit for initial therapy, and the missed-dose and vomiting rules are stated in all three labels.

**Sources:** US FDA Odefsey label sec 1, 2.2, 8.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.1, 4.2 (eMC 7262, rev 02/10/2025) — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 安以斯 sec 2, 3.1, 3.3 (老年人應謹慎使用) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> 🇹🇼 TW insert (本院品項) = UK SmPC; CrCl by Cockcroft-Gault<br>CrCl ≥30: no adjustment<br>CrCl 15–29, or <15 and not on HD: **avoid** (應避免使用; US: not recommended)<br>CrCl falls below 30 **during treatment → discontinue** (TW/UK: 停用)<br>ESRD (CrCl <15) on chronic HD, adults: no dose change, but **generally avoid**; use with caution only if benefit > risk. On HD days give **after HD** (US: use with caution, with closer monitoring for RPV adverse effects). FTC exposure is markedly higher in ESRD. A 3-h HD session removes ~30% of an FTC dose. No data for patients <18 y with ESRD<br>PD / CRRT: no label or published dosing data → avoid / discuss with ID<br>Stop if renal function falls significantly or proximal renal tubulopathy / Fanconi syndrome appears<br>RPV causes a small early SCr rise (mean ~0.1 mg/dL, mostly in the first 4 wk) that does not reflect a true fall in GFR

**Why:** The column is empty. The labels differ: TW and UK require stopping when CrCl drops below 30 during treatment and say to 'generally avoid' on HD, while the US label says 'not recommended' and 'use with caution'. The ground rule says to give the stocked product's (TW) values first. PubMed (E-utilities search 'rilpivirine CRRT/CVVH') returned no relevant PK study (the only hit, PMID 41439661, is a Biktarvy lactic-acidosis case), so there is no CRRT dose.

**Sources:** TW insert 3.3 腎功能不全, 5.1 腎毒性/血液透析 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC 4.2 Renal impairment, 4.4 Nephrotoxicity/ESRD on HD, 4.8 serum creatinine — https://www.medicines.org.uk/emc/product/7262/smpc; US label 2.4, 5.5, 8.6, 10 (FTC removed ~30% by HD) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5

### B3 · Hepatic dose

Child-Pugh A/B: no dose adjustment (TW/UK: use with caution in B). Child-Pugh C: not studied → **not recommended** (TW/UK; US: not studied). 肝功能不全：A/B 不需調整；C 不建議使用. HBV/HCV co-infection or raised baseline LFTs → higher risk of hepatotoxicity; monitor LFTs

**Why:** The column is empty. All three labels give the same Child-Pugh A/B advice; TW and UK go further and say 'not recommended' for Child-Pugh C.

**Sources:** TW insert 3.3 肝功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC 4.2 Hepatic impairment — https://www.medicines.org.uk/emc/product/7262/smpc; US label 8.7, 5.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5

### B4 · Pediatric dose

🇹🇼 TW insert (本院品項) = UK: **≥12 y and ≥35 kg** → 1 tab QD with a meal (adult dose). <12 y or <35 kg: safety/efficacy not established (尚未確立)<br>US FDA: **≥25 kg** (efficacy established from 6 y) → 1 tab QD with a meal; not recommended <25 kg (fixed-dose tablet cannot be adjusted)<br>• Adolescents: use only when good adherence is expected (UK 4.4). Depressive disorders in 19% of adolescents on RPV (US 5.4)<br>• No dosing data for <18 y with ESRD

**Why:** The column is empty. The TW and UK thresholds (12 y / 35 kg) are stricter than the US threshold (25 kg). Per the ground rules, the stocked product's TW values come first and the US value is given alongside.

**Sources:** TW insert 2, 3.3 兒童族群 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC 4.1, 4.2 Paediatric, 4.4 — https://www.medicines.org.uk/emc/product/7262/smpc; US label 1, 2.2, 5.4, 8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5

### B5 · Indications

["HIV"]

**Why:** Odefsey is indicated only for HIV-1 treatment as a complete regimen (US/UK/TW). It is not indicated for HBV or PrEP, so the 'HBV' and 'HIV PrEP' tags must not be used.

**Sources:** US label 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### B6 · Coverage

["HIV", "HBV"] — add to Notes: HBV activity comes from TAF (25 mg = the HBV dose) + FTC, but Odefsey is not approved for HBV. RPV has only limited activity against HIV-2 → not for HIV-2 (no HIV-2 tag exists)

**Why:** This follows the database convention (e.g. Valcyte), where Coverage records antiviral activity even outside the approved indications. UK SmPC 4.4: 'Tenofovir alafenamide is active against hepatitis B virus (HBV)', which is also the reason for the boxed warning on stopping the drug. US 12.4: RPV 'demonstrated limited activity in cell culture against HIV-2'. If the owner prefers Coverage to match the indications only, drop HBV.

**Sources:** UK SmPC 4.4 Patients co-infected with HIV and HBV — https://www.medicines.org.uk/emc/product/7262/smpc; US label 12.4 Antiviral activity (HIV-2) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5

### B7 · Side Effects

["CNS", "GI", "LFT↑", "nephrotoxicity", "DRESS", "hypersensitivity", "lactic acidosis", "IRIS", "weight gain", "bone loss", "QTc prolong"]

**Why:** CNS: headache, insomnia/sleep disorder, abnormal dreams, dizziness, somnolence, depression (US 6.1, 5.4; UK 4.8). GI: nausea, diarrhoea, abdominal pain, vomiting, flatulence. LFT↑: increased transaminases are very common (UK 4.8); hepatotoxicity (US 5.3). Nephrotoxicity: TAF-related acute renal failure, proximal renal tubulopathy, Fanconi syndrome (US 5.5/6.2). DRESS and severe skin reactions (US 5.2). Hypersensitivity: angioedema, urticaria (UK 4.8). Lactic acidosis (US 5.7). IRIS (US 5.8). Weight gain: RPV post-marketing 'weight increased' (US 6.2). Bone loss: BMD falls with FTC+TAF (US 6.1). QTc prolong: only at supratherapeutic RPV doses, with caution advised for TdP-risk drugs (US 5.6). Every tag is an existing option.

**Sources:** US label 5.2–5.8, 6.1, 6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.4, 4.8 Table 2 — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 5.1, 8 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### B8 · Monitor

["viral load", "HBV serology", "renal", "LFT", "lipids"]

**Why:** HBV test before starting (US 2.1/5.1). SCr, CrCl, urine glucose and urine protein in all patients, plus phosphorus in CKD (US 2.1/5.5; TW 5.1). LFTs if there is underlying hepatic disease or HBV/HCV, and to be considered in all patients (US 5.3). Close viral-load monitoring in pregnancy and for virologic failure (US 2.3; UK 4.4). Lipids and glucose per HIV guidelines (UK 4.4). ECG only when QT-prolonging drugs are co-administered, so this goes in Notes rather than as a tag. Every tag is an existing option.

**Sources:** US label 2.1, 2.3, 5.1, 5.3, 5.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.4 Weight and metabolic parameters / Pregnancy — https://www.medicines.org.uk/emc/product/7262/smpc

### B9 · Mechanism

Single-tablet regimen: 2 NRTIs + 1 NNRTI<br>• **Emtricitabine (FTC)**: cytidine nucleoside analogue → FTC-triphosphate competes with dCTP and is incorporated into viral DNA → chain termination of HIV-1 RT<br>• **Tenofovir alafenamide (TAF)**: phosphonamidate prodrug of tenofovir (**nucleotide** analogue of dAMP). Enters cells, is hydrolysed by cathepsin A to tenofovir, then phosphorylated to tenofovir diphosphate → chain termination (intracellular t½ 150–180 h in PBMCs). Compared with TDF: >90% lower plasma tenofovir and >4-fold higher PBMC TFV-DP<br>• **Rilpivirine (RPV)**: diarylpyrimidine NNRTI; non-competitive inhibition of HIV-1 RT<br>Resistance (low genetic barrier): RPV — K101E/P, E138A/G/K/Q/R, V179L, Y181C/I/V, Y188L, H221Y, F227C, M230I/L, L100I+K103N (K103N alone: no reduced susceptibility in vitro, US; impact cannot be excluded, UK). NRTI — K65R, K70E, M184V/I

**Why:** The column is empty. The text comes from the label microbiology and pharmacology sections, and it states that TAF is a nucleotide, not a 'non-nucleotide', RTI.

**Sources:** US label 12.3, 12.4 Mechanism of Action / Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 5.1, 5.2 — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### B10 · Drug Interactions

⛔ **Contraindicated** (↓RPV ± ↓TAF via CYP3A/P-gp induction or ↑gastric pH → loss of virologic response, NNRTI resistance): carbamazepine, oxcarbazepine, phenobarbital, phenytoin; rifampicin, rifapentine, **rifabutin** (🇹🇼 TW/UK contraindicated; US 'not recommended'); **all PPIs**; systemic dexamethasone (more than a single dose); St John's wort<br>• **H2RA**: once-daily H2RA only, taken ≥12 h before or ≥4 h after Odefsey (famotidine 2 h before → RPV AUC ↓76%)<br>• **Antacids** (Al/Mg/Ca): ≥2 h before or ≥4 h after<br>• **Azoles** (keto/flu/itra/posa/vori): ↑RPV, ↑TAF. TW/UK: not recommended; US: no dose change, monitor for breakthrough fungal infection<br>• **Clarithromycin / erythromycin**: ↑RPV, ↑TAF. TW/UK: not recommended; US: prefer azithromycin<br>• Drugs with known TdP risk: caution, consider alternatives (RPV QTc)<br>• Ciclosporin: TW/UK not recommended. Dabigatran: caution (P-gp)<br>• Methadone: no dose change; monitor (methadone ↓~16%)<br>• Nephrotoxic drugs or drugs sharing tubular secretion (aminoglycosides, high-dose/multiple NSAIDs, acyclovir/valacyclovir, ganciclovir/valganciclovir, cidofovir): ↑FTC/tenofovir → monitor renal function<br>• Do not combine with other ARVs or other TAF/TDF/lamivudine/adefovir products<br>• No clinically significant interaction: atorvastatin, metformin, ethinyl estradiol/norgestimate, sildenafil, digoxin, ledipasvir/velpatasvir/voxilaprevir/sofosbuvir<br>Check everything else with the Liverpool HIV Drug Interactions checker (https://www.hiv-druginteractions.org/checker)

**Why:** The column is empty. The source brief listed only the contraindications plus the H2RA and antacid rules. It missed that TW and UK say 'not recommended' for azoles, clarithromycin/erythromycin and ciclosporin, whereas the US label says no azole dose change and suggests azithromycin, and it missed the dabigatran caution. The rifabutin difference between labels must be shown, with the stocked TW product (contraindicated) given first.

**Sources:** TW insert 4 禁忌, 7 交互作用 (azoles/巨環類/ciclosporin 不建議併用; H2RA 僅可使用每日一次) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; UK SmPC 4.3, 4.5 Table 1 — https://www.medicines.org.uk/emc/product/7262/smpc; US label 4, 5.6, 7.1–7.8 Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; Liverpool HIV interaction checker (pointer only; site blocked from this sandbox) — https://www.hiv-druginteractions.org/checker

### B11 · Pregnancy

No letter category (FDA PLLR). Antiretroviral Pregnancy Registry data show no rise in major birth defects over background for FTC, RPV or TAF (US 8.1). RPV exposure is **~30–40% lower** in pregnancy → **monitor viral load closely**. US: patients already virologically suppressed (<50 copies/mL) on Odefsey before pregnancy may **continue** at the same dose. TW/UK: use only if benefit justifies risk; switching to another regimen may be considered. TAF pregnancy data are limited (TW/UK: <300 outcomes). Effective contraception during use (TW/UK). 孕婦：懷孕前已穩定抑制者可續用並密切監測病毒量

**Why:** The column is empty. No letter categories are used, as required by the ground rules.

**Sources:** US label 2.3, 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.4 Pregnancy, 4.6 — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 5.1 懷孕, 6.1, 6.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F

### B12 · Breastfeeding

🇹🇼 TW/UK: **do not breastfeed** (不建議哺乳; risk of HIV transmission and infant adverse reactions). US 8.2: FTC, TAF and tenofovir are present in human milk (TW/UK: unknown whether TAF passes into milk); RPV unknown (present in rat milk). US-listed risks: HIV transmission, viral resistance in an infant with HIV, adverse reactions. LactMed: FTC infant dose ~0.5–2% of the infant therapeutic dose, infant serum usually undetectable; TAF gives very low or undetectable milk tenofovir; RPV data limited (usually low levels, but one infant had high serum levels) → an alternative may be preferred for a newborn or preterm infant. LactMed: mothers on ART with a sustained undetectable viral load who choose to breastfeed should be supported; if the viral load is not suppressed → formula or donor milk

**Why:** The column is empty. The labels conflict on whether TAF is found in milk (US: present; TW/UK: unknown), so both are stated. LactMed has no combination chapter, so the three component chapters (verified with NCBI E-utilities db=books) are cited.

**Sources:** US label 8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; LactMed Emtricitabine NBK501548 (rev 2026-03-15) — https://www.ncbi.nlm.nih.gov/books/NBK501548/; LactMed Rilpivirine NBK501818 (rev 2025-12-15) — https://www.ncbi.nlm.nih.gov/books/NBK501818/; LactMed Tenofovir Alafenamide NBK621367 (rev 2026-08-15) — https://www.ncbi.nlm.nih.gov/books/NBK621367/

### B13 · Notes

本院品項: ODE01 Odefsey 膜衣錠 (安以斯; FTC 200 mg / RPV 25 mg / TAF 25 mg), 衛部藥輸字第027505號, <span color="blue">`PO`</span> only<br>⚠️ **US Boxed warning: post-treatment acute exacerbation of hepatitis B.** Test for HBV before starting. In HIV/HBV co-infection, follow clinically and with labs (LFTs) for at least several months after stopping; anti-HBV therapy may be needed (TW 5.1 / UK 4.4 say the same). 停藥可能導致B肝急性惡化<br>• Complete regimen. **Not for HIV-2** (RPV has limited HIV-2 activity). Not approved for HBV or PrEP<br>• **Take with a meal**. **PPIs contraindicated**; space H2RA and antacid doses<br>• Initial therapy only if VL ≤100,000. RPV trials: lower response and more NNRTI/FTC resistance with baseline CD4 <200 (response 68% vs 82%) or VL >100,000. Not a preferred initial regimen: INSTI-based (bictegravir/dolutegravir) preferred for most (IAS-USA 2024)<br>• Rifabutin: TW/UK contraindicated, US not recommended → patients needing a rifamycin for TB or MAC need a different ART regimen<br>• QTc: RPV 75–300 mg prolongs QTc; 25 mg has no relevant effect → caution with TdP-risk drugs (check ECG if combined)<br>• **Depression/suicidality** (9% of adults, 19% of adolescents in RPV trials). **Severe rash/DRESS** → stop at once if rash comes with systemic symptoms or LFT↑. Hepatotoxicity risk is higher with HBV/HCV<br>• Renal (TAF): PRT/Fanconi syndrome → check SCr, CrCl, urine glucose and urine protein at baseline and during treatment, plus phosphorus in CKD<br>• Lactic acidosis / hepatomegaly with steatosis; IRIS (including autoimmune, e.g. Graves); weight and lipid increases; osteonecrosis<br>• Contains lactose<br>• TDM: no label recommendation

**Why:** The column is empty. Per the ground rules the boxed warning must appear in Notes. The other items are the label-level points needed for safe use, plus one verified guideline statement on where Odefsey sits among initial regimens.

**Sources:** US label Boxed Warning (SPL section 34066-1), 1, 4, 5.1–5.8, 12.4, 14 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b9ec8-e04a-412c-8b3f-e5cbc7e641d5; UK SmPC 4.4 — https://www.medicines.org.uk/emc/product/7262/smpc; TW insert 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027505%E8%99%9F; Gandhi RT et al. IAS-USA 2024 recommendations. JAMA 2025;333:609-628 (PMID 39616604, verified via esummary) — https://pubmed.ncbi.nlm.nih.gov/39616604/

### B14 · Page body

Add a structured body like Valcyte's: # Odefsey (Emtricitabine/Rilpivirine/Tenofovir alafenamide), with a one-line summary (本院品項 ODE01, 衛部藥輸字第027505號, <span color="blue">`PO`</span>). Sections: Mechanism; Spectrum (HIV-1; HBV activity from TAF/FTC but not indicated; not HIV-2); Indications; Dosing (Adult / Pediatric TW-UK vs US table / Renal table with the TW rows and US values alongside / Hepatic); Administration (with a meal, no crushing, missed-dose and vomiting rules); Adverse effects & monitoring (boxed warning first); Drug interactions table (CI list with the rifabutin label difference, H2RA/antacid spacing, azoles/macrolides with the US vs TW/UK difference, Liverpool link); Pregnancy & lactation; Clinical pearls; References. References to list: the TW insert (TFDA link, 114/01/06 v4), US DailyMed setid ea3b9ec8… v13 (Dec 2025), UK SmPC eMC 7262 (02/10/2025, 'previously known as Odefsey'), the three LactMed chapters, and IAS-USA 2024 (PMID 39616604). Do not include storage.

**Why:** The page body is blank, while the established entries (e.g. Valcyte) carry a full structured body with references.

**Sources:** Same sources as B1–B13 (US DailyMed / UK eMC 7262 / TW TFDA 027505 / LactMed NBK501548, NBK501818, NBK621367 / PMID 39616604)

## Apply log

- Adult dose: merged both proposals (1 tab QD with a meal + food effect, complete regimen, naive VL <=100,000, switch criteria, missed/vomited dose, swallow whole, elderly); no CD4 <=200 restriction added
- Renal dose, HD, CRRT: TW=UK primary with US values alongside; discontinue if CrCl <30 during treatment; HD after dialysis; FTC ~30% / tenofovir ~54% HD removal, RPV not removed; PD/CRRT no data; tubulopathy stop; RPV SCr rise
- Hepatic dose: Child-Pugh A/B no adjustment (caution in B TW/UK), C not recommended; LFT monitoring with HBV/HCV; Chinese note
- Pediatric dose: TW/UK >=12 y and >=35 kg vs US >=25 kg (off-label in TW for 25-<35 kg); fixed dose; adherence; adolescent depression 19%; no ESRD data
- Indications: [HIV]
- Coverage: [HIV, HBV]
- Side Effects: [CNS, GI, LFT↑, nephrotoxicity, AKI, DRESS, hypersensitivity, IRIS, lactic acidosis, weight gain, bone loss, QTc prolong]
- Monitor: [viral load, HBV serology, renal, LFT, lipids, CNS]
- Mechanism: FTC/TAF/RPV mechanisms, TAF vs TDF, HBV/HIV-2 activity, resistance mutations (merged)
- Drug Interactions: contraindicated list incl. rifabutin TW/UK vs US, all PPIs; H2RA/antacid spacing; azoles/macrolides TW-UK vs US; ciclosporin, dabigatran, methadone, TdP, nephrotoxins, no-duplication, no-interaction list, Liverpool checker link
- Pregnancy: no letter category; US continue if suppressed, RPV ~30-40% lower, APR data; TW/UK benefit>risk, TAF data limited, contraception; Chinese note
- Breastfeeding: TW/UK do not breastfeed; US 8.2; LactMed component data (FTC RID ~4% / 0.5-2% infant dose, TAF trivial, RPV 10,450 mcg/L case); suppressed-mother support statement
- Notes: product/licence ODE01 衛部藥輸字第027505號; US boxed warning HBV exacerbation; not approved for HBV/PrEP, not for HIV-2; NNRTI resistance; VL<=100,000 and label RPV-trial CD4 <200 response data (not as a restriction); IAS-USA 2024 (PMID 39616604 verified via esummary); rifabutin; QTc; depression; DRESS; renal monitoring; lactic acidosis/IRIS/weight/osteonecrosis; elderly; lactose; TDM
- Page body: added full Valcyte-style body (Mechanism, Spectrum, Indications, Dosing adult/pediatric/renal table TW-UK vs US/hepatic, Administration, Adverse effects & monitoring with boxed warning, DDI table, Pregnancy & lactation, Clinical pearls) with no storage details
- References section appended: TW insert 027505 (2025-01-06 v4), DailyMed setid ea3b9ec8... v13 (Dec 2025), eMC 7262 (02/10/2025), LactMed NBK501548/NBK501818/NBK621367 with revision dates, IAS-USA 2024 PMID 39616604, Liverpool checker
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
