# New entry: Valcyte (Valganciclovir)

- **Notion entry:** [Valcyte (Valganciclovir)](https://app.notion.com/3f0c496dfff1811698b1cdd46aa0c31c). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** VAL02 (Valcyte tab 450 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/valganciclovir.json` (plus any Taiwan insert text files)

## Product and sources

Hospital product: FJUH VAL02, Valganciclovir 450 mg film-coated tablet. Brand Valcyte 450 mg (克毒癒膜衣錠), NHI BC24071100, ATC J05AB14, tablets only. I confirmed this on the hospital P4 page https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=VAL02. Its official Taiwan label is the package insert for 衛署藥輸字第024071號 (CHEPLAPHARM / 裕利), insert version 2023-05 (CDS 9.0): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F. The NHI code BC24071100 matches licence 024071, and the Chinese brand name matches. Other sources: US label VALCYTE tablets / oral solution (H2-Pharma), DailyMed setid 4c517a39-2ded-4c5a-8d56-276853414b31, v24, Dec 10 2025, including its boxed warning, which I checked in the full SPL XML. UK SmPC: Valcyte 450 mg film-coated tablets, eMC 14226, revised 28/04/2026. LactMed: NBK500948, revised 2021-08-16. Guideline: Kotton CN et al., Fourth International Consensus Guidelines on CMV in SOT, Transplantation 2025;109:1066-1110, PMID 40200403 (checked with esummary), full text read from PMC12180710. The Notion page (created 2026-10-05) has only its title and Category filled. Every other column is empty and the page body is blank. Notion query-data-sources hit its usage limit, so I could not read sibling entries for style. The proposed text follows the ground-rule style instead: <br>, bullet points, colored route tags.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 450 mg tab — take **with food**; do not break/crush<br>• CMV retinitis (AIDS): induction **900 mg BID × 21 days** → maintenance **900 mg QD** (re-induce if retinitis worsens)<br>• CMV prophylaxis, high-risk SOT (D+/R−): **900 mg QD**, start within 10 days post-transplant → kidney: until day **200**; other SOT (heart, kidney-pancreas…): until day **100** (TW insert/FDA; UK SmPC: kidney 100 d, may extend to 200 d)<br>• Off-label (Kotton 2025 consensus): CMV disease / pre-emptive treatment in SOT: 900 mg q12h ≥2 wk until clinical resolution + CMV DNAemia below lab threshold; IV ganciclovir preferred for life-/sight-threatening disease<br>• ⚠️ Not interchangeable 1:1 with oral ganciclovir (bioavailability ~60% vs ~6%) — overdose risk

**Why:** The column is empty. All three labels give the same adult regimens: retinitis induction 900 mg BID × 21 d then 900 mg QD, and prophylaxis 900 mg QD started within 10 days. Kidney prophylaxis runs to day 200 in the TW insert and US label. The UK SmPC says 100 days, which may be extended to 200. The off-label CMV-disease treatment dose (900 mg q12h) is a strong recommendation in the 2025 international SOT guideline. Labels require taking the tablets with food and not breaking or crushing them.

**Sources:** Taiwan insert 衛署藥輸字第024071號 §3.1 用法用量: '巨細胞病毒視網膜炎…起始治療…900毫克，一天二次，總療程為21天…維持性治療…900毫克，一天一次'; '腎移植病人…移植後10天內開始…到移植後200天…900毫克，一天一次'; '除了腎移植以外的固體器官移植…到移植後100天' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA Valcyte label §2.1–2.2: 'Induction: 900 mg…twice a day for 21 days… Maintenance: 900 mg…once a day'; 'heart or kidney-pancreas…until 100 days'; 'kidney transplant…until 200 days'; 'should be taken with food'; 'Tablets should not be broken or crushed' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC Valcyte 450 mg §4.2: 'For kidney transplant patients…continuing until 100 days post-transplantation. Prophylaxis may be continued until 200 days'; §4.4 'bioavailability…approximately 60%, compared with approximately 6%…Valcyte cannot be substituted for ganciclovir capsules on a one-to-one basis' https://www.medicines.org.uk/emc/product/14226/smpc; Kotton CN et al. Transplantation 2025;109:1066-1110 (PMID 40200403, PMC12180710), CMV Treatment: 'oral valganciclovir (900 mg every 12 h) or intravenous ganciclovir (5 mg/kg every 12 h) are recommended as first-line treatment…'; 'continued for a minimum of 2 wk, until clinical resolution of disease and decrease in CMV DNAemia below the…threshold'; 'Intravenous ganciclovir is preferred…life-threatening or sight-threatening CMV disease' https://pubmed.ncbi.nlm.nih.gov/40200403/

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (TW insert = FDA = UK SmPC; CrCl by Cockcroft-Gault) induction / maintenance·prophylaxis<br>CrCl ≥60: 900 mg BID / 900 mg QD<br>CrCl 40–59: 450 mg BID / 450 mg QD<br>CrCl 25–39: 450 mg QD / 450 mg q48h<br>CrCl 10–24: 450 mg q48h / 450 mg twice weekly<br>CrCl <10: **not recommended** (不建議服用)<br>HD: **tablets should not be used** (required dose <450 mg) → use IV ganciclovir with renal dose adjustment (FDA 8.6). HD removes ~50% ganciclovir. Kotton 2025: 200 mg (treatment) / 100 mg (prophylaxis) 3×/wk post-HD — **oral solution only, not stocked**<br>CRRT: no label dose. Limited PK data for prophylaxis: 450 mg q24h on CVVHD (Jarrell 2021, n=10, 80% troughs ≥0.6 mg/L); 450 mg q48h on CRRT (Perrottet 2008, n=2). For treatment/severe disease prefer IV ganciclovir (no validated VGC CRRT dose)<br>Monitor SCr/CrCl regularly

**Why:** The column is empty. The adult renal table is identical in the Taiwan insert, US label and UK SmPC, so the stocked product's label and the others agree. Every label says the tablets should not be used in hemodialysis. The US label sends HD patients to IV ganciclovir. The guideline HD dose needs the oral solution, which the hospital does not stock, so that caveat is needed. No source gives CRRT dosing. Directing CRRT patients to IV ganciclovir is my inference from the label's HD advice and the tablet-strength limit, and should be flagged as such.

**Sources:** Taiwan insert §3.3 表一 腎功能不全病人服用Valcyte膜衣錠之劑量調整 (≥60: 900 BID/900 QD; 40–59: 450 BID/450 QD; 25–39: 450 QD/450 二天一次; 10–24: 450 二天一次/每週二次; <10: 不建議服用) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label §2.5 Table 2 (same values; '< 10 (on hemodialysis) not recommended'); §8.6: 'For adult patients on hemodialysis (CrCl less than 10 mL/min), VALCYTE tablets should not be used. Adult hemodialysis patients should use ganciclovir in accordance with the dose-reduction algorithm…CYTOVENE-IV'; §12.3: 'Hemodialysis reduces plasma concentrations of ganciclovir by about 50%' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §4.2 renal table; 'Patients undergoing haemodialysis…a dose recommendation cannot be given. Thus Valcyte film-coated tablets should not be used' https://www.medicines.org.uk/emc/product/14226/smpc; Kotton 2025 Table 5: oral valganciclovir '<10: 200 mg 3×/wk after hemodialysis / 100 mg 3×/wk after hemodialysis — Oral solution must be used in this instance (as valganciclovir tablets cannot be split)' https://pubmed.ncbi.nlm.nih.gov/40200403/

### A3 · Hepatic dose

Not studied (TW/FDA/UK); no specific dose recommendation — ganciclovir is renally eliminated, so hepatic impairment is not expected to affect PK (UK SmPC 5.2)

**Why:** The column is empty. All labels say hepatic impairment was not studied. The UK SmPC explains why no dose change is recommended.

**Sources:** US FDA label §8.7: 'The safety and efficacy of VALCYTE have not been studied in patients with hepatic impairment.' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §5.2: 'Hepatic impairment should not affect the pharmacokinetics of ganciclovir since it is excreted renally and, therefore, no specific dose recommendation is made.' https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert §3.3 肝功能不全: 'Valcyte使用於肝功能不全病人的安全性及療效資料尚未建立' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### A4 · Pediatric dose

🇹🇼 TW insert: **not recommended** in children (safety/PK not established)<br>FDA/UK label: CMV prophylaxis in SOT — FDA: kidney 4 mo–16 y (until day 200), heart 1 mo–16 y (until day 100); UK: SOT from birth to 18 y<br>• Dose (mg) **QD = 7 × BSA × CrCl** (modified Schwartz; cap CrCl at 150 mL/min/1.73m²), start within 10 days post-tx; round to nearest 25 mg; max 900 mg<br>• Oral solution preferred; 450 mg tab only if calculated dose 405–495 mg (±10%) and child can swallow tablets — hospital stocks tablets only<br>• Not established: pediatric CMV retinitis, liver tx (FDA), congenital CMV

**Why:** The column is empty. The stocked product's label (Taiwan) does not recommend pediatric use, but the US and UK labels approve pediatric SOT prophylaxis with a BSA × CrCl formula. Both positions should be shown, with the Taiwan label first. The tablet-only limitation matters because the labels prefer the oral solution for children.

**Sources:** Taiwan insert §3.3 小孩族群: '因目前此病人族群之藥物動力學性質尚未確立，故Valcyte不建議使用於小孩族群'; §6.4 小兒: '不建議使用' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label §1.2, §2.3: 'Pediatric Dose (mg) = 7 × BSA × CrCl…maximum value of 150 mL/min/1.73m2…rounded to the nearest 25 mg…If the calculated dose exceeds 900 mg, a maximum dose of 900 mg…VALCYTE tablets may be used if the calculated doses are within 10%…405 mg and 495 mg'; §8.4 not established in liver transplant, CMV retinitis, congenital CMV https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §4.1: 'prevention of CMV disease in CMV-negative adults and children (aged from birth to 18 years)'; §4.2 paediatric posology https://www.medicines.org.uk/emc/product/14226/smpc

### A5 · Indications

(leave empty — no CMV option exists; do not use 'Herpes' as a proxy) → state CMV indications in Notes

**Why:** The only approved indications are CMV retinitis in AIDS and CMV prevention after solid-organ transplant. The schema has no CMV option. The existing 'Herpes' option is used for HSV/VZV, and tagging it would suggest valganciclovir is for HSV/VZV, which no label supports. Under the ground rules, a missing option goes in Notes (see A12).

**Sources:** US FDA label §1 Indications https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### A6 · Coverage

HSV, VZV (in vitro activity per TW insert §10.1; primary target CMV has no option → Notes; add caveat in Notes: not indicated for HSV/VZV treatment)

**Why:** Ganciclovir is active in vitro against HSV-1/2, VZV, EBV and HHV-6/7/8 (TW insert §10.1). Valganciclovir is not indicated for any of them, so HSV/VZV tags would mislead prescribers. CMV, the real target, has no option.

**Sources:** Taiwan insert §10.1 作用機轉: '對其敏感之人體病毒包括人類巨細胞病毒(HCMV)、單純疱疹病毒第一型及第二型…水痘病毒(VZV)…' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label §12.4 Microbiology (antiviral activity described for human CMV) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31

### A7 · Side Effects

hematologic, neutropenia, anemia, thrombocytopenia, leukopenia, GI, AKI, CNS, neuropathy

**Why:** Hematologic toxicity is a boxed warning, and neutropenia, anemia, thrombocytopenia and leukopenia are among the most common reactions (≥20%). Diarrhea, nausea and vomiting are common, so GI applies. The labels warn of acute renal failure (AKI). CNS fits tremor, headache and insomnia (≥20%) and also seizures, confusion and hallucinations. Peripheral neuropathy is 9% in the US label and 6.16% in the TW insert. All tags exist in the schema. Retinal detachment and fertility/teratogenicity have no option and go in Notes.

**Sources:** US FDA label Boxed Warning; §5.1 Hematologic Toxicity; §5.2 Acute Renal Failure; §6: 'most common…diarrhea, pyrexia, fatigue, nausea, tremor, neutropenia, anemia, leukopenia, thrombocytopenia, headache, insomnia…vomiting'; Table 3 'Neuropathy peripheral 9'; '<5%…seizure…confusional state…hallucinations' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert §8.1 表二 (嗜中性白血球減少症 26.12%, 貧血 19.89%, 血小板減少症 7.34%, 腹瀉 34.27%, 周邊神經病變 6.16%, 癲癇 2.29%, 腎功能不全 2.52%) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### A8 · Monitor

CBC, renal

**Why:** All labels require regular CBC with differential and platelets, more often with renal impairment and in children. They also require serum creatinine/CrCl monitoring, both for dose adjustment and because of the acute renal failure risk. Pregnancy testing before starting (FDA §8.3) has no option and goes in Notes.

**Sources:** US FDA label §5.1: 'complete blood counts with differential and platelet counts should be performed frequently'; §2.5: 'Serum creatinine levels or estimated creatinine clearance should be monitored regularly' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert §5.1: '建議於治療過程中需監測所有病人之全血球及血小板計數，特別是腎功能不全的病人'; §3.3 '需小心監測血清肌酸酐或肌酸酐清除率' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### A9 · Mechanism

L-valyl ester **prodrug of ganciclovir** (intestinal/hepatic esterases; oral bioavailability ~60% with food, ~10× oral ganciclovir) → phosphorylated by CMV kinase **pUL97** then cellular kinases → ganciclovir-triphosphate inhibits viral DNA polymerase **pUL54** (competes with dGTP / chain elongation stops). Preferential activation in infected cells; virustatic. Resistance: UL97 and/or UL54 mutations after prolonged exposure

**Why:** The column is empty. Mechanism, activation and resistance are described in US §12.4 and TW §10.1–10.2. Bioavailability is in US Table 10 (59.4% with food) and UK §5.2 (~60%), and the TW insert says it is 10 times that of oral ganciclovir.

**Sources:** US FDA label §12.4 Mechanism of Action / Viral Resistance; §12.3 Table 10 'Absolute oral bioavailability (%) 59.4 ± 6.1' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert §10.1–10.2 作用機轉/藥效藥理特性; §3.1 '其生體可用率高於口服ganciclovir的10倍' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; UK SmPC §5.2 'bioavailability of ganciclovir from oral dosing of valganciclovir is approximately 60%' https://www.medicines.org.uk/emc/product/14226/smpc

### A10 · Drug Interactions

• **Imipenem-cilastatin**: generalized seizures — avoid unless benefit > risk<br>• **Myelosuppressive / nephrotoxic drugs** (additive toxicity): mycophenolate, ciclosporin, tacrolimus, zidovudine, amphotericin B, TMP-SMX, dapsone, flucytosine, pentamidine, doxorubicin, vinblastine, vincristine, hydroxyurea, tenofovir/adefovir → use only if benefit > risk; monitor CBC + SCr<br>• **Didanosine**: didanosine AUC ↑38–67% → monitor pancreatitis<br>• **Probenecid**: ganciclovir exposure ↑~40% (↓ renal tubular secretion) → monitor toxicity / consider dose ↓<br>• No CYP450 involvement (PI/NNRTI PK interactions not expected)

**Why:** The column is empty. The TW, US and UK labels list the same interactions. The numbers (didanosine AUC +38–67%, probenecid exposure +40%) come from UK §4.5 and TW §7.

**Sources:** Taiwan insert §7 交互作用 (imipenem-cilastatin 癲癇; zidovudine; didanosine AUC增加38%至67%; probenecid 腎清除率降低20%…暴露量增加40%; 骨髓抑制/腎損害藥物清單) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label §7 Table 9 (imipenem-cilastatin, cyclosporine/amphotericin B, MMF, other myelosuppressive/nephrotoxic drugs, didanosine, probenecid) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §4.5 ('Cytochrome P450 isoenzymes play no role in ganciclovir pharmacokinetics'; tenofovir, adefovir listed) https://www.medicines.org.uk/emc/product/14226/smpc

### A11 · Pregnancy

Avoid — ganciclovir teratogenic/embryotoxic in animals (rabbit malformations at 2× human exposure) and crosses the human placenta; no human data. Use only if maternal benefit outweighs fetal risk (TW/UK). Pregnancy test before start (FDA). Contraception: ♀ effective contraception during + **≥30 days** after; ♂ condoms during + **≥90 days** after. May impair fertility (↓spermatogenesis, possibly permanent)

**Why:** The column is empty. Do not write the retired FDA letter category (the hospital site says 'C'). The text is taken from the narrative label sections, and the contraception durations are identical across all three labels.

**Sources:** US FDA label Boxed Warning (fetal toxicity, impairment of fertility); §5.4; §8.1 Risk Summary; §8.3 'Pregnancy Testing…before initiation'; 'at least 30 days'; 'condoms…at least 90 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert §6.1 懷孕: '孕婦應避免使用Valcyte，除非Valcyte對母親的效益大於對胎兒之潛在風險'; §6.3 避孕 30天/90天 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/14226/smpc

### A12 · Notes

本院品項: VAL02 Valcyte 450 mg FC tab (克毒癒膜衣錠) only — 無口服液 (oral solution not stocked)<br>🦠 **Anti-CMV only** (CMV not a Coverage/Indication option): CMV retinitis in AIDS; CMV prophylaxis in high-risk (D+/R−) SOT. FDA: kidney, heart, kidney-pancreas (not liver: ↑tissue-invasive CMV vs oral ganciclovir in liver tx); UK/TW: any SOT. Active in vitro vs HSV/VZV (Coverage tags) but **not indicated** for HSV/VZV treatment<br>⚠️ **US Boxed warning**: hematologic toxicity, impaired fertility, fetal toxicity, mutagenic/carcinogenic<br>• Do **not start** if ANC <500/µL, PLT <25,000/µL or Hb <8 g/dL (warning, not a contraindication). Contraindication = hypersensitivity to valganciclovir/ganciclovir (UK: also breastfeeding)<br>• Possible cross-hypersensitivity with aciclovir/valaciclovir, penciclovir/famciclovir<br>• Hazardous drug: do not break/crush; avoid skin contact with broken tablets (handle like antineoplastics)<br>• Keep adequate hydration (AKI risk ↑ in elderly, nephrotoxic co-meds, dehydration)<br>• Retinal detachment reported in AIDS CMV retinitis patients<br>• Low-dose ('mini-dose' 450 mg QD) prophylaxis **not recommended** — dose by renal function (Kotton 2025)<br>• 小兒：台灣仿單不建議使用；FDA/UK 核准移植後預防 (see Pediatric dose)

**Why:** The column is empty. Notes must hold the CMV indication because no CMV tag exists. They should also carry the key safety items: boxed warning, do-not-start thresholds, cross-hypersensitivity, handling, retinal detachment, and the US limitation for liver transplant. The do-not-start thresholds also correct the hospital site, which lists them as contraindications. The guideline item on low-dose prophylaxis is clinically useful.

**Sources:** US FDA label Boxed Warning; §1.1 (kidney, heart, kidney-pancreas); §14.1 'in liver transplant patients, the incidence of tissue-invasive CMV disease was significantly higher in the VALCYTE group'; §4; §5.1; §2.6 Handling https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §4.1 (any SOT), §4.3 (contra-indicated during breast-feeding), §4.4 Cross-hypersensitivity / Myelosuppression 'Therapy should not be initiated if…', §4.8 retinal detachment https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert §2 適應症 (固體器官移植 D+/R−), §5.1 交叉過敏反應/骨髓抑制, §3.3 小孩族群 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; Kotton 2025 Lower-dose Valganciclovir Prophylaxis: 'The use of low-dose valganciclovir prophylaxis is not recommended; dosing should be according to renal function'; Table 3 'VGCV is approved by the EMA but not the FDA in liver transplants' https://pubmed.ncbi.nlm.nih.gov/40200403/

### A13 · Breastfeeding

Avoid / stop breastfeeding (治療期間停止哺乳): FDA 'not recommended'; UK SmPC **contraindicated**; TW insert: 停止服藥或停止哺乳. LactMed: no human milk/infant data (ganciclovir excreted in rat milk); note neonates with CMV are often treated directly with (val)ganciclovir. HIV+ mothers should not breastfeed (US label 8.2 / LactMed)

**Why:** The column is empty. The labels range from 'consider stopping' (Taiwan) through 'not recommended' (US) to 'contraindicated' (UK). LactMed confirms there are no human data.

**Sources:** LactMed Valganciclovir (NBK500948, rev 2021-08-16) Summary: 'No information is available on the clinical use of ganciclovir or valganciclovir during breastfeeding…the manufacturer recommends avoiding breastfeeding…neonates with CMV infections are often treated directly with ganciclovir or valganciclovir' https://www.ncbi.nlm.nih.gov/books/NBK500948/; US FDA label §8.2: 'breastfeeding is not recommended during treatment with VALCYTE' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC §4.3 'contra-indicated during breast-feeding'; §4.6 'breast-feeding must be discontinued' https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert §6.2 哺乳: '哺乳之病人需考慮停止服藥或停止哺乳' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### A14 · Page body

Optional: add a short 'Sources' block — TW insert 衛署藥輸字第024071號 (2023-05, CDS 9.0); US FDA Valcyte label (DailyMed setid 4c517a39…, Dec 2025); UK SmPC Valcyte 450 mg (eMC 14226, 28/04/2026); LactMed NBK500948; Kotton CN et al. Transplantation 2025 (PMID 40200403). Otherwise leave blank.

**Why:** The body is blank. None of the content is missing, because everything fits in the columns. A source list helps future re-verification. This is optional and the owner should decide.

**Sources:** https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; https://www.medicines.org.uk/emc/product/14226/smpc; https://www.ncbi.nlm.nih.gov/books/NBK500948/; https://pubmed.ncbi.nlm.nih.gov/40200403/

### B1 · Adult dose

<span color="blue">`PO`</span> Valcyte 450 mg tab — take with food; do not break/crush (隨餐服用，勿剝半/磨粉)<br>• CMV retinitis (AIDS): induction 900 mg BID × 21 days → maintenance 900 mg QD (duration individualised; re-induce if retinitis progresses)<br>• CMV prophylaxis, high-risk SOT (D+/R−): 900 mg QD, start within 10 days post-transplant → kidney until day 200; other organs (heart, kidney-pancreas, etc.) until day 100 (TW/US). UK SmPC: kidney 100 days, may extend to 200<br>• Off-label (Kotton 2025 consensus): CMV DNAemia (preemptive) / mild–moderate CMV disease in SOT: 900 mg BID (normal renal fx) for ≥2 wk until clinical resolution AND DNAemia below lab threshold; IV ganciclovir for severe/life-threatening disease<br>• 900 mg PO BID ≈ ganciclovir 5 mg/kg IV q12h exposure

**Why:** All three labels agree on retinitis induction and maintenance. The Taiwan insert for the stocked product and the US label give 200 days of kidney-transplant prophylaxis. The UK SmPC gives 100 days, extendable to 200. The source brief implied the UK SmPC matches on this point; it does not. Treatment of CMV DNAemia or disease in transplant patients is not a labelled indication, so I give it as guideline-based. For CMV disease, the 4th International Consensus recommends valganciclovir 900 mg q12h for at least 2 weeks, until the infection resolves.

**Sources:** Taiwan insert 3.1 用法用量: '起始治療…900毫克，一天二次，總療程為21天…維持性治療…900毫克，一天一次…腎移植病人…移植後10天內開始，一直使用到移植後200天…除了腎移植以外…到移植後100天'; '應與食物一起服用' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA Valcyte label 2.1/2.2/2.6: 'Induction: 900 mg…twice a day for 21 days… Maintenance: 900 mg…once a day'; kidney 'until 200 days post-transplantation'; heart/kidney-pancreas 'until 100 days'; 'Tablets should not be broken or crushed' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC Valcyte 4.2: 'For kidney transplant patients…900 mg…once daily…until 100 days post-transplantation. Prophylaxis may be continued until 200 days'; 'Oral valganciclovir 900 mg b.i.d. is therapeutically equivalent to intravenous ganciclovir 5 mg/kg b.i.d.' https://www.medicines.org.uk/emc/product/14226/smpc; Kotton CN et al. Fourth International Consensus Guidelines on CMV in SOT, Transplantation 2025;109:1066-1110, PMID 40200403 (esummary verified), CMV Treatment: 'oral valganciclovir (900 mg every 12 h) or intravenous ganciclovir (5 mg/kg every 12 h) are recommended as first-line treatment…Intravenous ganciclovir is recommended in life-threatening and severe diseases'; 'continued for a minimum of 2 wk, until clinical resolution of disease and decrease in CMV DNAemia below the institutional…threshold' https://pubmed.ncbi.nlm.nih.gov/40200403/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> CrCl (Cockcroft-Gault, mL/min): induction / maintenance·prophylaxis (TW 表一 = US = UK)<br>• ≥60: 900 mg BID / 900 mg QD<br>• 40–59: 450 mg BID / 450 mg QD<br>• 25–39: 450 mg QD / 450 mg q48h<br>• 10–24: 450 mg q48h / 450 mg twice weekly<br>• <10: not recommended (不建議服用)<br>• HD: tablets should NOT be used (required dose <450 mg) → use IV ganciclovir per its HD dosing (US label 8.6). Kotton 2025: VGC oral solution 200 mg (treatment) / 100 mg (prophylaxis) 3×/wk after HD — oral solution 本院無<br>• CRRT: no label dose. Prophylaxis data: 450 mg q24h on CVVHD (Jarrell 2021, n=10, 80% troughs ≥0.6 mg/L); 450 mg q48h on CRRT (Perrottet 2008, n=2). Severe disease → IV ganciclovir; under-exposure on CVVH reported → TDM if available (Märtson 2021)<br>• Use CrCl (Cockcroft-Gault), not eGFR, for dose bands (Kotton 2025)

**Why:** I re-checked the renal table myself. The Taiwan insert 表一, US Table 2 and UK 4.2 are identical. All three labels say the tablets should not be used, or are not recommended, in hemodialysis; this is not a contraindication. The US label directs hemodialysis patients to IV ganciclovir, which the hospital stocks. No label covers CRRT. Two small PK studies support 450 mg q24h (CVVHD) or q48h (CRRT) for prophylaxis, and the TDM cohort found under-exposure on CVVH. Kotton 2025 notes that the trials and package insert used Cockcroft-Gault CrCl.

**Sources:** Taiwan insert 3.3 表一 腎功能不全病人服用Valcyte膜衣錠之劑量調整 (≥60…<10 不建議服用) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA Valcyte label 2.5 Table 2 and 8.6: 'For adult patients on hemodialysis (CrCl less than 10 mL/min), VALCYTE tablets should not be used. Adult hemodialysis patients should use ganciclovir in accordance with the dose-reduction algorithm…'; 12.3: 'daily dose of VALCYTE tablets required for these patients is less than 450 mg' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC 4.2 renal table; 'For patients on haemodialysis (Clcr < 10 ml/min) a dose recommendation cannot be given. Thus Valcyte film-coated tablets should not be used' https://www.medicines.org.uk/emc/product/14226/smpc; Kotton 2025, PMID 40200403, Table 5: oral valganciclovir '<10: 200 mg 3×/wk after hemodialysis / 100 mg 3×/wk after hemodialysis — Oral solution must be used'; Kidney Function Monitoring: 'creatinine clearance (using the Cockcroft-Gault formula) was used, not eGFR' https://pubmed.ncbi.nlm.nih.gov/40200403/; Jarrell AS et al. Clin Infect Dis 2021;73:101-106, PMID 32379860 (esummary verified): VGC 450 mg q24h on CVVHD, 80% troughs ≥0.60 μg/mL https://pubmed.ncbi.nlm.nih.gov/32379860/; Perrottet N et al. J Antimicrob Chemother 2008;61:1332-5, PMID 18344549 (esummary verified): '450 mg every 48 h appears adequate for patients under CRRT requiring prophylaxis' https://pubmed.ncbi.nlm.nih.gov/18344549/; Märtson AG et al. J Antimicrob Chemother 2021;76:2356-63, PMID 34160036 (esummary verified): 'patients on continuous veno-venous haemofiltration showed underexposure' https://pubmed.ncbi.nlm.nih.gov/34160036/

### B3 · Hepatic dose

Not studied in hepatic impairment; no specific dose adjustment recommended (ganciclovir is renally eliminated) — 肝功能不全：無建議調整

**Why:** All three labels say hepatic impairment has not been studied. The UK SmPC 5.2 explains that hepatic impairment should not affect ganciclovir PK because the drug is excreted renally, so no specific dose recommendation is made.

**Sources:** UK SmPC 5.2 'Patients with hepatic impairment': 'Hepatic impairment should not affect the pharmacokinetics of ganciclovir since it is excreted renally and, therefore, no specific dose recommendation is made.' https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert 3.3 肝功能不全: 'Valcyte使用於肝功能不全病人的安全性及療效資料尚未建立' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label 8.7: 'The safety and efficacy of VALCYTE have not been studied in patients with hepatic impairment.' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31

### B4 · Pediatric dose

TW insert (本院品項): 不建議用於兒童 (PK/safety not established).<br>US/UK label — SOT CMV prophylaxis: once-daily dose (mg) = 7 × BSA × CrCl (modified Schwartz; cap CrCl at 150 mL/min/1.73m²), max 900 mg, round to nearest 25 mg; start within 10 days post-Tx → kidney until day 200 (US: 4 mo–16 y), heart until day 100 (US: 1 mo–16 y); UK: any SOT from birth (non-kidney until day 100). >16 y: adult dosing (UK).<br>Oral solution preferred; 450 mg tab only if calculated dose 405–495 mg (within 10%) and child can swallow tablets — 本院僅有錠劑.<br>CMV retinitis in children: not established.

**Why:** Pediatric use is where the labels differ. The Taiwan insert for the stocked product does not recommend use in children. The US and UK labels approve SOT prophylaxis using the BSA × CrCl formula. Because VAL02 is a 450 mg tablet and the hospital has no oral solution, only children whose calculated dose falls in the 405–495 mg window can use it. I verified the formula, the 150 cap and the 900 mg maximum against US 2.3 and UK 4.2.

**Sources:** Taiwan insert 3.3 小孩族群: '因目前此病人族群之藥物動力學性質尚未確立，故Valcyte不建議使用於小孩族群'; 6.4 小兒: '不建議使用' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label 1.2 and 2.3: 'Pediatric Dose (mg) = 7 × BSA × CrCl'; '…a maximum value of 150 mL/min/1.73m2 should be used'; 'If the calculated dose exceeds 900 mg, a maximum dose of 900 mg'; tablets 'if the calculated doses are within 10%…between 405 mg and 495 mg' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC 4.1/4.2: prevention in 'children (aged from birth to 18 years)'; kidney until 200 days, other SOT until 100 days; 'Refer to adult dosing for patients older than 16 years'; retinitis 'have not been established' in paediatrics https://www.medicines.org.uk/emc/product/14226/smpc

### B5 · Indications

(no tag — the schema has no CMV option; do not use 'Herpes' (HSV/VZV). Put CMV indications in Notes: CMV retinitis in AIDS; CMV prophylaxis in high-risk D+/R− SOT)

**Why:** Every approved indication is CMV-specific. The Indications options include 'Herpes', but the database uses that for HSV/VZV infections, and valganciclovir is not approved for those. Tagging 'Herpes' would wrongly suggest it treats HSV/VZV. Per the ground rules, I do not invent a CMV option and the indications go in Notes (see B12).

**Sources:** US FDA label 1 INDICATIONS AND USAGE (CMV retinitis in AIDS; prevention of CMV disease in kidney, heart, kidney-pancreas transplant at high risk D+/R−) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC 4.1 (CMV retinitis in AIDS; prevention of CMV disease in CMV-negative SOT recipients from CMV-positive donor) https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert 2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### B6 · Coverage

HSV, VZV (primary target CMV has no option → Notes)

**Why:** The UK SmPC 5.1 and Taiwan insert 10.1 list HSV-1/2 and VZV, along with CMV, HHV-6/7/8 and EBV, as sensitive to ganciclovir. Kotton 2025 states that valganciclovir prophylaxis prevents HSV and VZV, which is clinically relevant: no separate acyclovir prophylaxis is needed while on it. CMV itself has no Coverage option, so Notes must state that the main target is CMV and that the drug is not approved for treating HSV/VZV.

**Sources:** UK SmPC 5.1 Mechanism of action: 'Sensitive human viruses include human cytomegalovirus (HCMV), herpes simplex virus-1 and -2 (HSV-1 and HSV-2), human herpes virus -6, -7 and -8…Epstein-Barr virus (EBV), varicella-zoster virus (VZV) and hepatitis B virus' https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert 10.1 作用機轉 (same virus list) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; Kotton 2025, PMID 40200403, table comparing prophylaxis vs preemptive vs letermovir: valganciclovir prophylaxis 'Prevents HSV, VZV'; letermovir 'not effective against other herpesviruses' https://pubmed.ncbi.nlm.nih.gov/40200403/

### B7 · Side Effects

hematologic, neutropenia, anemia, thrombocytopenia, leukopenia, GI, AKI, CNS, neuropathy

**Why:** Myelosuppression is the main toxicity and a Boxed Warning in the US label. Neutropenia and anemia are very common, and thrombocytopenia and leukopenia common (UK 4.8). Diarrhea, nausea and vomiting are very common. Acute renal failure is US W&P 5.2. CNS effects include headache and insomnia (very common/common), tremor (≥20% in the US label) and, uncommonly, seizures, confusion and hallucinations. Every tag above is an existing schema option.

**Sources:** UK SmPC 4.8 tabulated ADRs: Neutropenia (very common), Anaemia (very common), Thrombocytopenia/Leukopenia (common); Diarrhoea, Nausea, Vomiting (very common); Renal impairment (common), Renal failure (uncommon); Headache (very common), Seizure, Confusional state, Hallucinations (uncommon) https://www.medicines.org.uk/emc/product/14226/smpc; US FDA label Boxed Warning (Hematologic toxicity) and 5.1, 5.2 'Acute Renal Failure', 6: most common ≥20% 'diarrhea, pyrexia, fatigue, nausea, tremor, neutropenia, anemia, leukopenia, thrombocytopenia, headache, insomnia, urinary tract infection, and vomiting' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31

### B8 · Monitor

CBC, renal

**Why:** All three labels require frequent CBC with differential and platelets, more often with renal impairment, in children, and if baseline ANC is below 1000/µL. They also require regular SCr/CrCl monitoring because doses are banded by CrCl and acute renal failure can occur. The pregnancy test before starting (US 8.3) goes in Notes, since no option exists for it.

**Sources:** US FDA label 5.1: 'complete blood counts with differential and platelet counts should be performed frequently'; 2.5: 'Serum creatinine levels or estimated creatinine clearance should be monitored regularly'; 8.3: 'Females of reproductive potential should undergo pregnancy testing before initiation' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert 5.1 骨髓抑制: '建議於治療過程中需監測所有病人之全血球及血小板計數，特別是腎功能不全的病人'; 3.3: '需小心監測血清肌酸酐或肌酸酐清除率預估值' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### B9 · Mechanism

L-valyl ester prodrug → ganciclovir via intestinal/hepatic esterases (oral F ≈ 60%; ~10× oral ganciclovir). Ganciclovir = 2'-deoxyguanosine analogue: monophosphorylated by CMV UL97 kinase (preferentially in infected cells) → triphosphate by cellular kinases → inhibits viral DNA polymerase (UL54) + chain termination. Virustatic. Resistance: UL97 mutations (most common; M460V/I, H520Q, C592G, A594V, L595S, C603W → GCV-only resistance) and/or UL54 (may cross-resist other polymerase inhibitors, e.g. cidofovir/foscarnet).

**Why:** I took the mechanism and resistance details from the label pharmacology sections. The 60% bioavailability is in the UK SmPC 5.2 and the Taiwan insert 11; the US label 12.3 gives an absolute bioavailability of 59.4 ± 6.1%. The SmPC states that UL54 mutants may cross-resist other polymerase-targeting antivirals. Naming cidofovir and foscarnet as examples is an inference from that statement.

**Sources:** UK SmPC 5.1 Mechanism of action and Viral resistance: 'seven canonical UL97 substitutions, M460V/I, H520Q, C592G, A594V, L595S, C603W…Viruses containing mutations in the UL97 gene are resistant to ganciclovir alone, whereas viruses with mutations in the UL54 gene…may show cross-resistance to other antivirals that also target the viral polymerase'; 5.2 'bioavailability…approximately 60 %' https://www.medicines.org.uk/emc/product/14226/smpc; US FDA label 12.4 Microbiology (pUL97 phosphorylation; inhibition of viral DNA polymerase pUL54) and 12.3 Table 10 absolute oral bioavailability 59.4 ± 6.1% https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert 10.1/10.2 作用機轉/藥效藥理特性; 3.1 '生體可用率高於口服ganciclovir的10倍' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### B10 · Drug Interactions

• Imipenem-cilastatin: generalized seizures reported → avoid unless benefit > risk (癲癇)<br>• Myelosuppressive / nephrotoxic drugs (zidovudine, mycophenolate, ciclosporin, tacrolimus, TMP-SMX, dapsone, amphotericin B, flucytosine, pentamidine, doxorubicin, vinca alkaloids, hydroxyurea, tenofovir, adefovir): additive toxicity → use only if benefit > risk; monitor CBC + SCr<br>• Didanosine: didanosine AUC ↑38–67% → monitor pancreatitis<br>• Probenecid: ↓ganciclovir renal clearance ~20%, exposure ↑~40% → monitor toxicity, may need dose ↓<br>• No CYP450 involvement (no PK interaction with PIs/NNRTIs)

**Why:** The interaction lists in the three labels agree. I took the percentages from the UK SmPC 4.5 and Taiwan insert 7, and the absence of CYP involvement from UK 4.5.

**Sources:** UK SmPC 4.5: probenecid 'decreased renal clearance of ganciclovir (20 %)…increased exposure (40 %)'; didanosine 'increase in the AUC…38 to 67%'; imipenem-cilastatin seizures; 'Cytochrome P450 isoenzymes play no role in ganciclovir pharmacokinetics'; list of myelosuppressive/nephrotoxic drugs https://www.medicines.org.uk/emc/product/14226/smpc; US FDA label 7 Table 9 (imipenem-cilastatin not recommended; cyclosporine/amphotericin B monitor renal function; MMF monitor hematologic and renal toxicity; probenecid 'VALCYTE dose may need to be reduced') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert 7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### B11 · Pregnancy

Avoid unless maternal benefit outweighs fetal risk (孕婦避免使用). Ganciclovir crosses the placenta; teratogenic/embryotoxic in animals (rabbit malformations at ~2× human exposure); no adequate human data. Boxed warning: fetal toxicity, mutagenic/carcinogenic, may impair fertility (spermatogenesis ↓). Pregnancy test before start (US). Contraception: women during + ≥30 days after; men barrier/condom during + ≥90 days after.

**Why:** The FDA letter categories are retired, so I give narrative label text instead of a category. The three labels agree on the contraception windows. The pregnancy test before starting is from US 8.3.

**Sources:** Taiwan insert 6.1 懷孕: 'ganciclovir易於通過人體胎盤。孕婦應避免使用Valcyte，除非Valcyte對母親的效益大於對胎兒之潛在風險'; 6.3 避孕: 女性 '治療後至少30天'; 男性 '停止治療後至少90天內使用保險套' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; US FDA label Boxed Warning; 5.4 Fetal Toxicity; 8.1 Pregnancy (malformations in rabbits at 2× human exposure; no human data); 8.3 pregnancy testing and contraception https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC 4.6: 'Valcyte should not be used in pregnancy unless the therapeutic benefit for the mother outweighs the potential risk of teratogenic damage to the foetus' https://www.medicines.org.uk/emc/product/14226/smpc

### B12 · Notes

本院品項: VAL02 Valcyte 450 mg FC tab (克毒癒膜衣錠) only — 無口服液; IV option = ganciclovir 500 mg vial.<br>Indications (no CMV tag): CMV retinitis in AIDS; prevention of CMV disease in high-risk D+/R− SOT (TW: SOT; US: kidney, heart, kidney-pancreas; UK: any SOT). 主要用於 CMV; not approved for HSV/VZV treatment, but VGC prophylaxis also prevents HSV/VZV (no separate acyclovir needed).<br>⚠️ US Boxed Warning: hematologic toxicity, impaired fertility, fetal toxicity, mutagenic/carcinogenic.<br>Do not start if ANC <500/µL, PLT <25,000/µL or Hb <8 g/dL (warning, not a labelled contraindication). Only labelled CI: hypersensitivity to valganciclovir/ganciclovir (UK also: breastfeeding).<br>Possible cross-hypersensitivity with aciclovir/valaciclovir/penciclovir/famciclovir.<br>Hazardous drug — do not break/crush; avoid skin contact with crushed tablets (潛在致畸胎/致癌，勿剝半磨粉).<br>Prevention (Kotton 2025): D+/R− kidney 6 mo; liver/heart/pancreas 3–6 mo; lung 12 mo; low-dose VGC prophylaxis not recommended — dose by CrCl.<br>TDM: not routine; AUC24 80–120 mg·h/L suggested for treatment but not validated.<br>Resistance: suspect if refractory after ≥2 wk of appropriately dosed therapy with cumulative exposure ≥4 wk → UL97/UL54 genotyping.<br>Labels differ on pediatrics: TW 不建議 vs US/UK approved for SOT prophylaxis.

**Why:** This summarises the safety points that have no multi-select option and places the CMV indications here as the ground rules require. The Boxed Warning wording is from the current US SPL, which I re-fetched. The prophylaxis durations, TDM statement and resistance-testing trigger are from the 4th International Consensus (2025), quoted verbatim from its full text in PMC. TDM targets come from the Märtson studies cited in that guideline.

**Sources:** US FDA label Boxed Warning 'WARNING: HEMATOLOGIC TOXICITY, IMPAIRMENT OF FERTILITY, FETAL TOXICITY, MUTAGENESIS AND CARCINOGENESIS'; 4 Contraindications (hypersensitivity only); 5.1 'should be avoided if the absolute neutrophil count is less than 500 cells/µL, the platelet count is less than 25,000/µL, or the hemoglobin is less than 8 g/dL'; 2.6 handling https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; UK SmPC 4.3 (hypersensitivity; 'contra-indicated during breast-feeding'), 4.4 cross-hypersensitivity and myelosuppression 'Therapy should not be initiated if…' https://www.medicines.org.uk/emc/product/14226/smpc; Taiwan insert 4 禁忌 (hypersensitivity only); 5.1 交叉過敏反應 and 骨髓抑制 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; Kotton 2025, PMID 40200403: 'For D + /R – kidney recipients, we recommend prophylaxis for 6 mo…liver, heart, and pancreas…3 mo to 6 mo…lung…12 mo'; 'The use of low-dose valganciclovir prophylaxis is not recommended; dosing should be according to renal function'; TDM: 'An AUC24h target of 80–120 mg·h/L…has been suggested, but not validated…robust data are still lacking'; resistance: 'suspected…after receiving appropriately dosed antiviral therapy for at least 2 continuous weeks, with a cumulative antiviral exposure of 4 wk or more' https://pubmed.ncbi.nlm.nih.gov/40200403/; Märtson AG et al. Ther Drug Monit 2022;44:138-147, PMID 34610621 (esummary verified): 'The main hurdle for implementing TDM is the lack of robust data to define a therapeutic window' https://pubmed.ncbi.nlm.nih.gov/34610621/; Hospital product identification only: https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=VAL02 (and keyword search showing Ganciclovir 針 500mg/Vial)

### B13 · Breastfeeding

Avoid — 治療期間停止哺乳. UK: contraindicated during breastfeeding; US: not recommended; TW: stop the drug or stop breastfeeding (labels: ganciclovir excreted in rat milk). LactMed: no human milk/infant data; neonates with CMV are often treated directly with (val)ganciclovir; if the mother has HIV, breastfeeding is not recommended (US/developed countries).

**Why:** The labels range from 'consider stopping' (Taiwan) to 'not recommended' (US) to 'contraindicated' (UK 4.3). The source brief left out the UK contraindication. LactMed (revised 2021) has no human data.

**Sources:** LactMed Valganciclovir NBK500948 (rev 2021-08-16), Summary of Use during Lactation: 'No information is available on the clinical use of ganciclovir or valganciclovir during breastfeeding…neonates with CMV infections are often treated directly with ganciclovir or valganciclovir. If the mother has a concurrent infection with HIV, breastfeeding is not recommended' https://www.ncbi.nlm.nih.gov/books/NBK500948/; UK SmPC 4.3 'Valcyte is contra-indicated during breast-feeding'; 4.6 'breast-feeding must be discontinued during treatment' https://www.medicines.org.uk/emc/product/14226/smpc; US FDA label 8.2: 'Advise nursing mothers that breastfeeding is not recommended during treatment with VALCYTE' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; Taiwan insert 6.2 哺乳: '哺乳之病人需考慮停止服藥或停止哺乳' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F

### B15 · Page body

Optional short 'Sources' block: TW 仿單 衛署藥輸字第024071號 (2023-05, CDS 9.0); US Valcyte label (DailyMed setid 4c517a39-…, Dec 2025); UK SmPC eMC 14226 (Apr 2026); LactMed NBK500948; Kotton CN et al. 4th International CMV SOT Consensus, Transplantation 2025 (PMID 40200403). Do not paste hospital-site content.

**Why:** A blank body is acceptable for a new entry, so this is optional. A short source list helps future audits. No storage or stability details, as the owner's rule requires.

**Sources:** Taiwan insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024071%E8%99%9F; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c517a39-2ded-4c5a-8d56-276853414b31; https://www.medicines.org.uk/emc/product/14226/smpc; https://www.ncbi.nlm.nih.gov/books/NBK500948/; https://pubmed.ncbi.nlm.nih.gov/40200403/

## Disputed (not applied; reviewers disagreed)

- **Category**: proposed "Antiviral (nucleoside analogue, anti-CMV; prodrug of ganciclovir)". Not applied because: B14 itself says the current Category is correct, and it matches US label 1 ('deoxynucleoside analogue CMV DNA polymerase inhibitor'). The ground rules call for the smallest correct edit, and the prodrug relationship already appears in Mechanism (B9) and Notes. Keep the owner's Category text unchanged.

## Apply log

- Adult dose: both proposals merged (PO 450 mg tab with food, no breaking or crushing; retinitis induction and maintenance; SOT prophylaxis kidney 200 d / other 100 d, with UK 100–200 d; Kotton 2025 off-label q12h; 900 mg BID ≈ IV GCV 5 mg/kg; not 1:1 with oral GCV)
- Renal dose, HD, CRRT: merged CrCl table (TW = FDA = UK, Cockcroft-Gault not eGFR); HD: tablets not used, IV GCV, Kotton oral solution 本院無; CRRT Jarrell/Perrottet, Märtson under-exposure, TDM; monitor SCr
- Hepatic dose: not studied, no adjustment (renal elimination), 肝功能不全：無建議調整
- Pediatric dose: TW 不建議 plus FDA/UK SOT prophylaxis 7×BSA×CrCl formula, tablet 405–495 mg rule, 本院僅有錠劑, not established items
- Indications: left empty as agreed (no CMV option; Herpes not used); CMV indications put in Notes
- Coverage: [HSV, VZV]
- Side Effects: [hematologic, neutropenia, anemia, thrombocytopenia, leukopenia, GI, AKI, CNS, neuropathy]
- Monitor: [CBC, renal]
- Mechanism: merged prodrug/pUL97/pUL54 text with UL97 canonical mutations and UL54 cross-resistance
- Drug Interactions: merged imipenem, myelosuppressive/nephrotoxic list, didanosine, probenecid (CL ↓20%, exposure ↑40%), no CYP450
- Pregnancy: merged avoid unless benefit > risk, placenta, animal teratogenicity, boxed warning, fertility, pregnancy test, contraception 30/90 d (no letter category)
- Notes: merged stocked product (VAL02 only, no oral solution, IV GCV 500 mg vial), CMV indications, HSV/VZV caveat, boxed warning, do-not-start thresholds, CI, cross-hypersensitivity, hazardous handling, hydration, retinal detachment, Kotton prophylaxis duration / no low-dose, TDM, resistance, pediatric label difference
- Breastfeeding: merged avoid/stop; FDA not recommended, UK contraindicated, TW stop drug or nursing; LactMed no data; HIV+ mothers
- Page body: References section appended (TW insert 024071, FDA DailyMed label, UK SmPC eMC 14226, LactMed NBK500948, Kotton 2025, Jarrell 2021, Perrottet 2008, Märtson 2021, Märtson 2022)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
