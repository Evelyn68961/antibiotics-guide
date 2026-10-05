# New entry: Veklury (Remdesivir)

- **Notion entry:** [Veklury (Remdesivir)](https://app.notion.com/3f0c496dfff181abaa70fa84ff14fefc). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** VEK02 (Veklury inj 100 mg), VEK03 (自費 Remdesivir)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/remdesivir.json` (plus any Taiwan insert text files)

## Product and sources

Veklury (remdesivir) 100 mg lyophilized powder for IV infusion, Gilead. Taiwan licence 衛部藥輸字第027899號 (韋如意凍晶乾燥注射劑100毫克/瓶), insert v4, 2024-11-25. Hospital codes VEK02 (CDC-supplied, NHI XCOVID0005) and VEK03 (self-pay, lot 43006CFM) are the same 100 mg IV vial, ATC J05AB16. No other dosage form is stocked. Notion page 3f0c496dfff181abaa70fa84ff14fefc is a new entry: only Abx and Category ("Antiviral (RdRp inhibitor)") are filled, and every other column and the page body are empty. US FDA label: DailyMed setid c0978fa8-53ff-4ca2-82a7-567fd3e958ca, v24. UK SmPC: eMC 11597, revised 02/04/2026. LactMed: NBK556881, revised 2024-09-15.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="green">`IV`</span> 200 mg on Day 1 (loading), then 100 mg QD from Day 2; infuse over 30–120 min; IV only (no other route)<br>TW仿單 / UK SmPC:<br>• COVID-19 pneumonia on O2 (low/high-flow or NIV): 5 days; if no clinical improvement, may extend by up to 5 more days (max 10 days total) [UK: at least 5 and not more than 10 days]<br>• No O2 but high risk of severe COVID-19: 3 days, start ASAP and within 7 days of symptom onset<br>US label: hospitalized on IMV/ECMO → 10 days; hospitalized not on IMV/ECMO → 5 days (may extend to 10); non-hospitalized high-risk → 3 days, within 7 days of symptom onset<br>100 mg/vial → 5-day course = 6 vials; 3-day course = 4 vials

**Why:** Dose and duration are identical across all three labels, except that the US label separates IMV/ECMO patients (10 days) while TW/UK group patients by O2 need. The hospital stocks the Taiwan product, so the 仿單 wording comes first. The vial counts are arithmetic from 100 mg/vial and are not copied from the hospital site.

**Sources:** 仿單 衛部藥輸字第027899號 §3.1.3 劑量/治療時間 and §3.2 (30–120 min infusion) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §2.3 Recommended Dosage, §2.5 (infuse over 30–120 min) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Tables 1–2 — https://www.medicines.org.uk/emc/product/11597/smpc

### A2 · Renal dose, HD, CRRT

No dose adjustment for any degree of renal impairment, including dialysis; give without regard to HD timing (TW仿單 §3.3.1/§6.7; US §2.4/§8.6; UK §4.2)<br>Supported by Study 5912 (AKI, CKD eGFR <30, HD-dependent ESRD; 5-day course): safety consistent with other trials<br>Metabolites GS-441524 / GS-704277 and excipient SBECD accumulate in RI (TW仿單 §11: ~7.9×, 2.8×, 21×; not considered clinically meaningful)<br>UK §4.2/§4.4: safety data in severe RI/ESRD limited (5-day courses only); check eGFR before and during treatment and monitor closely for adverse events<br>CRRT: not addressed in any label. Case series (n=4): GS-441524 trough ~7× higher with standard dosing and 3–6× higher even with 100 mg q48h maintenance; authors suggest a longer interval in low-intensity CRRT (not label-supported) (Nishikawa 2024, PMID 37866621)

**Why:** All three labels agree: no adjustment, including dialysis. The UK SmPC adds limited-data and monitoring caveats. No label covers CRRT, and no guideline or PMID was checked for it, so the proposed text states only that CRRT is not addressed. Renal is the item most likely to be miscopied, because the hospital VEK03 page says 'eGFR <30: use not recommended'.

**Sources:** 仿單 §3.3.1 腎功能不全, §6.7, §11 (腎功能不全病人 exposure ratios) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §2.4 Renal Impairment, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Renal impairment, §4.4 Renal impairment — https://www.medicines.org.uk/emc/product/11597/smpc

### A3 · Hepatic dose

No adjustment for mild, moderate or severe hepatic impairment (Child-Pugh A–C) (TW仿單 §6.6; US §8.7; UK §4.2)<br>UK: data in severe hepatic impairment limited (single 100 mg dose only)<br>Check LFTs before and during treatment; consider stopping if ALT >10× ULN; stop if ALT rise comes with signs or symptoms of liver inflammation (TW仿單 §5.1.2; US §5.2)

**Why:** The labels give no hepatic adjustment, and the ALT stopping rules are label warnings. The hospital VEK03 page says 'not studied', which these labels contradict.

**Sources:** 仿單 §6.6 肝功能不全, §5.1.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §8.7 Hepatic Impairment, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Hepatic impairment — https://www.medicines.org.uk/emc/product/11597/smpc

### A4 · Pediatric dose

TW仿單 / UK (≥28 days [UK: ≥4 weeks] and ≥3 kg): <span color="green">`IV`</span><br>• ≥40 kg: adult dose (200 mg Day 1 → 100 mg QD)<br>• 3 to <40 kg: 5 mg/kg Day 1 → 2.5 mg/kg QD; dilute to 1.25 mg/mL, infuse over 30–120 min<br>Duration as adults (UK, 3 to <40 kg on O2: up to a total of 10 days)<br>US label only (birth to <18 y, ≥1.5 kg): <28 days and ≥1.5 kg, or ≥28 days and 1.5 to <3 kg → 2.5 mg/kg Day 1 → 1.25 mg/kg QD. Not approved in TW/UK for <28 days or <3 kg<br>Renal impairment: limited data, none in severe RI; SBECD is cleared by glomerular filtration → higher SBECD exposure with renal immaturity or impairment (TW仿單 §6.4; US §8.4)

**Why:** The labels differ on the lower age/weight limit. The neonatal row is in the US label only; I confirmed in the SPL XML that the 2.5/1.25 mg/kg cells span both the '<28 d ≥1.5 kg' and the '≥28 d 1.5 to <3 kg' rows. Because the hospital product is the TW-licensed vial, the TW limits are given first.

**Sources:** 仿單 §3.1.3, §3.2.2 (1.25 mg/mL), §6.4 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §2.3 Table 1 (rowspan verified in SPL XML), §8.4 Pediatric Use — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Table 1, Paediatric population — https://www.medicines.org.uk/emc/product/11597/smpc

### A6 · Coverage

(leave empty — no SARS-CoV-2 option exists; record 'SARS-CoV-2 (incl. Omicron sublineages in cell culture)' in Notes)

**Why:** Ground rules forbid inventing options. The schema's viral options are only HSV, VZV, Influenza A and Influenza B, and none applies. US §12.4 reports retained cell-culture activity against SARS-CoV-2 variants up to JN.1/XBB lineages.

**Sources:** US FDA label §12.4 Microbiology (Antiviral Activity) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; Data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Coverage options)

### A7 · Side Effects

GI, LFT↑, coagulopathy

**Why:** The most common adverse reactions in all three labels are nausea (GI) and ALT/AST increase (LFT↑). The UK SmPC lists 'prothrombin time prolonged' as very common, and US Table 7 shows PT increased in 9% vs 4% on placebo, which maps to 'coagulopathy'; the UK adds that bleeding was not increased, and that caveat should go in the body text. No tags exist for hypersensitivity/infusion reactions, anaphylaxis or sinus bradycardia (UK post-marketing), so these belong in the body or Notes. Headache (UK, common) and generalized seizure (US, <2%) could justify 'CNS', but the evidence is weak, so I left it out.

**Sources:** US FDA label §6.1 (most common: nausea, ALT/AST increased; Table 7 PT increased), §5.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.8 Table 7 (PT prolonged very common; sinus bradycardia not known) — https://www.medicines.org.uk/emc/product/11597/smpc; 仿單 §8.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F

### A8 · Monitor

LFT, PT/INR, renal

**Why:** LFT and PT are required by the labels: check hepatic labs in all patients before and during treatment, and check PT before starting and monitor it during treatment. 'renal' follows UK §4.4: determine eGFR before and during treatment, and monitor severe RI/ESRD closely. Observing for hypersensitivity during the infusion and for at least 1 h after it has no tag, so it belongs in the body text.

**Sources:** 仿單 §3.1.2 開始使用前與治療期間應進行的檢驗 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §2.2 Testing Before Starting and During Treatment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.4 Renal impairment — https://www.medicines.org.uk/emc/product/11597/smpc

### A9 · Mechanism

Adenosine nucleotide prodrug → metabolized intracellularly to active triphosphate (GS-443902) → competes with ATP for incorporation by SARS-CoV-2 RNA-dependent RNA polymerase (RdRp) → delayed chain termination of viral RNA synthesis

**Why:** This is the label mechanism of action, stated the same way in all three labels.

**Sources:** US FDA label §12.4 Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; 仿單 §10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/11597/smpc

### A10 · Drug Interactions

Chloroquine / hydroxychloroquine: co-administration not recommended (cell-culture antagonism of remdesivir's intracellular activation and antiviral activity) (TW仿單 §5.1.3/§7.1; US §5.3; UK §4.5)<br>Weak CYP3A inhibitor (midazolam AUC ↑20–30%; UK: not clinically relevant); does not inhibit OATP1B1/1B3<br>No clinically significant interaction expected with CYP3A4 inducers (carbamazepine) or OATP1B1/1B3 / P-gp inhibitors (cyclosporin: remdesivir AUC ↑89%, no dose adjustment) (UK Table 5)<br>Do not co-infuse with other drugs; compatibility established only with 0.9% NaCl

**Why:** All three labels contain these interaction statements, and the midazolam, carbamazepine and cyclosporin data come from SmPC Table 5/6. The co-infusion statement is a label administration instruction, not storage or stability, so it is allowed.

**Sources:** 仿單 §5.1.3, §7.1, §7.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §5.3, §7.1, §7.2, §2.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.5 Tables 5–6 — https://www.medicines.org.uk/emc/product/11597/smpc

### A11 · Pregnancy

2nd/3rd trimester: no drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcome (IMPAACT 2032, COVID-PR registry, published reports); 1st-trimester data insufficient (TW仿單 §6.1; US §8.1)<br>PK not clinically different in pregnancy → no dose adjustment<br>UK §4.6: do not use in 1st trimester unless the clinical condition requires it; 2nd/3rd-trimester use may be considered<br>Untreated COVID-19 carries maternal/fetal risk (preeclampsia, preterm birth, fetal death)<br>(FDA letter categories retired)

**Why:** These are the current PLLR-format label statements. Retired letter categories must not be written, and the hospital VEK03 page shows 'C'.

**Sources:** 仿單 §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §8.1 Pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/11597/smpc

### A12 · Breastfeeding

可哺乳 — LactMed: milk levels of remdesivir and active metabolite GS-441524 very low (5 women; RID ≈0.007% and 1.6%, worst case <5%); poorly absorbed orally → infant unlikely to absorb clinically important amounts; no adverse effects reported in breastfed infants → no need to stop nursing, but monitor the infant. Alternate: nirmatrelvir<br>TW仿單 §6.2 / US §8.2: remdesivir and GS-441524 present in human milk; no adverse infant effects in pharmacovigilance reports (n=11)<br>UK §4.6: excreted in very small amounts; decide after individual benefit-risk assessment

**Why:** LactMed is the preferred breastfeeding source, and the labels agree with it. This also corrects the outdated 'not known if present in milk' text on the hospital site.

**Sources:** LactMed Remdesivir NBK556881 (rev. 2024-09-15) Summary, Drug Levels, Effects in Breastfed Infants, Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK556881/; 仿單 §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/11597/smpc

### A13 · Notes

Indication: COVID-19 (SARS-CoV-2; no Indication/Coverage tag available). TW仿單/UK: adults and children ≥28 days [UK ≥4 wk] and ≥3 kg with (a) pneumonia requiring O2 (low/high-flow or NIV at start) or (b) no O2 but high risk of severe COVID-19. US: birth to adult ≥1.5 kg, hospitalized, or non-hospitalized mild-to-moderate at high risk<br>Hypersensitivity / infusion-related reactions incl. anaphylaxis, mostly within 1 h: give only where anaphylaxis can be treated; observe ≥1 h after infusion; slower infusion (up to 120 min) may help<br>CI: hypersensitivity to remdesivir or excipients<br>Excipient SBECD 3 g/vial (accumulates in renal impairment); UK: 212 mg sodium per 100 mg dose<br>UK: sinus bradycardia (post-marketing), usually normalises within 4 days after stopping<br>Immunocompromised: unclear whether a 3-day course clears the virus; potential for resistance (UK §4.4)<br>院內: VEK02 (疾管署公費, per latest CDC 領用方案) and VEK03 (自費), same 100 mg vial; 衛部藥輸字第027899號

**Why:** Notes is the place for the COVID-19/SARS-CoV-2 information that has no multi-select option. It also holds key label warnings and identifies the stocked products by code only, without copying hospital-site content.

**Sources:** 仿單 §2, §4, §5.1.1, §1.2 賦形劑 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; US FDA label §1, §4, §5.1, §11 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.1, §4.4 Excipients, §4.8 — https://www.medicines.org.uk/emc/product/11597/smpc

### A14 · Category

Antiviral, nucleotide analogue RdRp inhibitor (SARS-CoV-2)

**Why:** The current value is correct. The proposed text adds the label's class wording ('SARS-CoV-2 nucleotide analog RNA polymerase inhibitor'), matches sibling entries such as 'Antiviral, neuraminidase inhibitor', and records the target virus, which has no Coverage tag. This change is optional.

**Sources:** US FDA label §1 / §11 Description — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §5.1 (Antivirals for systemic use, direct acting; ATC J05AB16) — https://www.medicines.org.uk/emc/product/11597/smpc

### A15 · Page body

Follow the sibling-entry layout (e.g. Rapiacta/Peramivir): ## Remdesivir (Veklury) / ### Category / ### Mechanism (A9) / ### Indications — **仿單 (Taiwan)** and **UK SmPC**: ≥28 d & ≥3 kg, pneumonia on O2 or high-risk no O2; **US label**: birth ≥1.5 kg, hospitalized or non-hospitalized high-risk / ### Coverage — SARS-CoV-2 only, incl. variants through JN.1/XBB in cell culture (US §12.4) / ### Adult Dose — table: Day 1 200 mg, Day 2+ 100 mg QD; duration by setting (TW/UK O2: 5→max 10 d; no O2 high risk: 3 d within 7 d; US IMV/ECMO 10 d); infusion 30–120 min, observe ≥1 h / ### Renal Dose, HD, CRRT (A2) / ### Hepatic Dose (A3) / ### Pediatric Dose — table of TW/UK vs US weight bands (A4) / ### Side Effects — common: nausea, ALT/AST↑, PT prolonged (no excess bleeding, UK §4.8), headache, rash; serious: hypersensitivity/anaphylaxis, infusion reactions, sinus bradycardia (post-marketing), generalized seizure (rare) / ### Monitor — LFT and PT baseline and during; eGFR (UK); infusion observation ≥1 h / ### Drug Interactions (A10) / ### Notes (A13) / ### Pregnancy (A11) / ### Breastfeeding (A12) / ### References — US FDA label DailyMed setid c0978fa8-53ff-4ca2-82a7-567fd3e958ca v24 (2026-08-07) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC eMC 11597 (rev. 02/04/2026) https://www.medicines.org.uk/emc/product/11597/smpc; 仿單 衛部藥輸字第027899號 v4 2024-11-25 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; LactMed NBK556881 (rev. 2024-09-15) https://www.ncbi.nlm.nih.gov/books/NBK556881/. No storage/stability section.

**Why:** This is a new entry and the body is blank. Every other entry has a structured body with a References section. Storage and stability must be left out per the owner's rule. No guideline statements, including the WHO position on the hospital site, are proposed, because none were verified against a guideline URL.

**Sources:** US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC — https://www.medicines.org.uk/emc/product/11597/smpc; 仿單 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; LactMed NBK556881 — https://www.ncbi.nlm.nih.gov/books/NBK556881/

### B1 · Adult dose

<span color="green">`IV`</span> 200 mg on day 1 (loading dose), then 100 mg once daily from day 2. Infuse over 30–120 min (TW仿單 = FDA = SmPC)<br>Duration (TW仿單 3.1.3):<br>• Pneumonia requiring O2 (low/high-flow or NIV): 5 days. If there is no clinical improvement, extend by up to 5 more days (max 10 days). SmPC: at least 5 and no more than 10 days<br>• Not on O2 but at high risk of severe COVID-19: 3 days. Start as soon as possible and within 7 days of symptom onset<br>• US label only: hospitalized on IMV/ECMO → 10 days. IDSA suggests against routine initiation of remdesivir in patients on IMV/ECMO<br>Vials needed: 5-day course = 6 vials; 3-day course = 4 vials

**Why:** Every label gives the same loading and maintenance doses. I am preferring the duration from the Taiwan insert because it covers the stocked product. The US label alone gives a 10-day course for IMV/ECMO (FDA 2.3), and the source brief left this out. IDSA's guidance on IMV/ECMO differs from the US label, so it is cited separately. The vial counts are simple arithmetic (2 + 4×1 and 2 + 2×1).

**Sources:** TW仿單 §3.1.3 用法用量 (v4, 113/11/25) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §2.3 Recommended Dosage, §2.5 (infusion 30–120 min) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Tables 1–2 https://www.medicines.org.uk/emc/product/11597/smpc; IDSA COVID-19 Guideline, 'Remdesivir for Severe or Critical COVID-19' (suggests 5 d over 10 d on O2 without IMV; against routine initiation on IMV/ECMO) https://www.idsociety.org/practice-guideline/covid-19-guideline-treatment-and-management/

### B2 · Renal dose, HD, CRRT

No dose adjustment for any degree of renal impairment, including HD. Give without regard to dialysis timing (TW仿單 3.3.1/6.7; FDA 2.4/8.6; SmPC 4.2)<br>Metabolites GS-441524 (up to 7.9×) and GS-704277 (2.8×) and the excipient SBECD (up to 21×) accumulate in renal impairment and dialysis. The labels do not consider this clinically significant. HD does not efficiently remove remdesivir (TW §11; FDA 12.3)<br>SmPC 4.2/4.4: safety data in severe RI/ESRD are limited and come only from 5-day courses (Study 5912/REDPINE, PMID 38913574). Check eGFR before and during treatment and monitor these patients closely for adverse events<br>CRRT: no label addresses CRRT. In a case series of 4 patients on CRRT, GS-441524 troughs were 3–7× higher than with eGFR ≥60. The authors suggest a longer dosing interval for low-intensity CRRT, which no label supports (Nishikawa 2024, PMID 37866621)

**Why:** All three labels agree that no adjustment is needed, including dialysis. No label covers CRRT specifically, so the PubMed data are cited as evidence of accumulation rather than as a dose recommendation. I checked both PMIDs with esummary.

**Sources:** TW仿單 §3.3.1 腎功能不全, §6.7 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §2.4, §8.6, §12.3 (exposure ratios; 'not efficiently removed through hemodialysis') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Renal impairment, §4.4 Renal impairment https://www.medicines.org.uk/emc/product/11597/smpc; Nishikawa A et al. J Infect Chemother 2024;30:348-351, PMID 37866621 https://pubmed.ncbi.nlm.nih.gov/37866621/; Sise ME et al. (REDPINE) Clin Infect Dis 2024;79:1172-1181, PMID 38913574 https://pubmed.ncbi.nlm.nih.gov/38913574/

### B3 · Hepatic dose

No adjustment for Child-Pugh A, B or C (TW仿單 6.6; FDA 8.7). SmPC 4.2: data in severe hepatic impairment come only from a single 100 mg dose<br>Check LFTs before and during treatment. Consider stopping if ALT >10× ULN. Stop if ALT rises with signs or symptoms of liver inflammation (TW仿單 5.1.2; FDA 5.2)

**Why:** All three labels agree. The ALT stopping rule is in the warnings sections of the US label and the Taiwan insert.

**Sources:** TW仿單 §6.6 肝功能不全, §5.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §8.7, §5.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Hepatic impairment https://www.medicines.org.uk/emc/product/11597/smpc

### B4 · Pediatric dose

TW仿單/SmPC (≥28 days [UK ≥4 weeks] and ≥3 kg): <span color="green">`IV`</span><br>• ≥40 kg: adult dose, 200 mg on day 1 → 100 mg QD<br>• 3 to <40 kg: 5 mg/kg on day 1 → 2.5 mg/kg QD. Dilute to 1.25 mg/mL and infuse over 30–120 min<br>Duration is the same as for adults (UK, <40 kg on O2: up to 10 days in total)<br>The US label also covers birth to <28 days at ≥1.5 kg (incl. term neonates, GA >37 wk) and ≥28 days at 1.5 to <3 kg: 2.5 mg/kg on day 1 → 1.25 mg/kg QD. TW and UK do not approve this (TW 6.4: <28 days or <3 kg not established)<br>SBECD is cleared by glomerular filtration, so exposure rises in renal immaturity or impairment. There are no data in children with severe RI (FDA 8.4; TW 6.4)

**Why:** I checked the FDA Table 1 row spans in the SPL XML. The neonate row and the '≥28 d, 1.5–<3 kg' row share the 2.5 → 1.25 mg/kg cells. The source brief did not include this lower US dose tier.

**Sources:** TW仿單 §3.1.3, §3.2.2, §6.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §2.3 Table 1, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.2 Tables 1–2 https://www.medicines.org.uk/emc/product/11597/smpc

### B5 · Indications

Pneumonia (only existing tag that fits: TW仿單 §2 / SmPC 4.1 'COVID-19 pneumonia requiring supplemental O2'. No COVID-19 option exists, so Notes must state 'COVID-19 (SARS-CoV-2) only')

**Why:** The data source has no COVID-19 or SARS-CoV-2 option, and the ground rules forbid inventing one. 'Pneumonia' exists and matches the UK/TW wording literally. Whether to use it is the owner's decision.

**Sources:** UK SmPC §4.1 https://www.medicines.org.uk/emc/product/11597/smpc; TW仿單 §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F

### B6 · Coverage

(leave empty; there is no SARS-CoV-2 option. Mention SARS-CoV-2 in Notes)

**Why:** I confirmed from the data-source schema that there is no SARS-CoV-2 or coronavirus option. The only viral options are HSV, VZV, Influenza A and Influenza B.

**Sources:** FDA label §1, §12.4 (SARS-CoV-2 RdRp inhibitor) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca

### B7 · Side Effects

GI, LFT↑, coagulopathy, CNS

**Why:** GI: nausea is the most common adverse reaction in patients (FDA 6; SmPC 4.8 'common'). LFT↑: transaminases increased is very common (SmPC). Coagulopathy: PT prolonged is very common (SmPC 4.8), with no difference in bleeding; add that caveat in Notes. CNS: generalized seizure occurred in <2% and led to stopping treatment in ACTT-1 (FDA 6.1). No option exists for hypersensitivity/anaphylaxis/infusion reaction, rash or sinus bradycardia, so they go in Notes.

**Sources:** FDA label §6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.8 Table 7 https://www.medicines.org.uk/emc/product/11597/smpc; TW仿單 §8.1–8.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F

### B8 · Monitor

LFT, PT/INR, renal

**Why:** LFTs before and during treatment, and PT before (and during) treatment (TW 3.1.2; FDA 2.2). SmPC 4.4: check eGFR before and during treatment as clinically appropriate. Hypersensitivity needs observation for ≥1 h after the infusion, which no tag covers, so it goes in Notes.

**Sources:** TW仿單 §3.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §2.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.4 Renal impairment https://www.medicines.org.uk/emc/product/11597/smpc

### B9 · Mechanism

Adenosine nucleotide prodrug → converted inside cells to the active triphosphate (GS-443902), an ATP analogue → incorporated by the SARS-CoV-2 RNA-dependent RNA polymerase (nsp12) → delayed chain termination (i+3) → inhibits viral RNA replication

**Why:** This is the mechanism-of-action text in the labels.

**Sources:** FDA label §12.4 Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; TW仿單 §10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F

### B10 · Drug Interactions

Chloroquine / hydroxychloroquine: not recommended. They antagonise the intracellular activation and antiviral activity of remdesivir in cell culture (TW仿單 5.1.3/7.1; FDA 5.3; SmPC 4.5)<br>Weak CYP3A inhibitor (TW/FDA 7.2): midazolam AUC ↑20–30%, which SmPC calls not clinically relevant<br>No clinically significant interaction expected with CYP3A4 inducers or with OATP1B1/1B3 or P-gp inhibitors. Cyclosporine raises remdesivir AUC by 89% with no dose adjustment needed (SmPC Table 5)

**Why:** All three labels agree on the chloroquine/hydroxychloroquine warning. The quantitative interaction data come from the SmPC tables.

**Sources:** TW仿單 §7.1–7.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §5.3, §7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.5 Tables 5–6 https://www.medicines.org.uk/emc/product/11597/smpc

### B11 · Pregnancy

2nd/3rd-trimester exposure: no drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes (IMPAACT 2032, COVID-PR registry). 1st-trimester data are insufficient. No dose adjustment in pregnancy (TW仿單 6.1; FDA 8.1; letter category retired)<br>SmPC 4.6: do not use in the 1st trimester unless the woman's clinical condition requires it. Use in the 2nd/3rd trimester may be considered<br>Untreated COVID-19 in pregnancy carries maternal and fetal risk

**Why:** Uses the current wording from the labels, with no letter category.

**Sources:** TW仿單 §6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/11597/smpc

### B12 · Breastfeeding

可哺乳. LactMed: milk levels of remdesivir and GS-441524 are very low (5 women; relative infant dose about 1.6%, worst case <5%), and oral absorption is poor. No adverse effects reported in breastfed infants → mothers need not stop nursing; monitor the infant<br>TW仿單 6.2 / FDA 8.2: present in human milk; no infant adverse effects reported (n=11). SmPC: very small amounts; decide by individual benefit-risk

**Why:** LactMed is the preferred source for breastfeeding, and the labels are consistent with it.

**Sources:** LactMed Remdesivir NBK556881 (rev. 2024-09-15), Summary & Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK556881/; TW仿單 §6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; UK SmPC §4.6 Breast-feeding https://www.medicines.org.uk/emc/product/11597/smpc

### B13 · Notes

COVID-19 (SARS-CoV-2) only. No SARS-CoV-2 Coverage tag or COVID-19 Indication tag exists ('Pneumonia' tag = COVID-19 pneumonia)<br>適應症 (TW仿單 = SmPC): adults and children ≥28 days [UK ≥4 wk] and ≥3 kg with COVID-19 pneumonia requiring O2 (low/high-flow or NIV at start), or not on O2 but at high risk of severe COVID-19. US label: hospitalized, or non-hospitalized mild–moderate high-risk; birth to <18 y and ≥1.5 kg<br><span color="green">`IV`</span> only, infused over 30–120 min. Give only where anaphylaxis can be treated. Observe for ≥1 h after the infusion; hypersensitivity and infusion reactions mostly occur within 1 h, and a slower infusion (up to 120 min) may prevent them. Reconstitute with SWFI and dilute only in 0.9% NaCl. Do not co-infuse other drugs<br>CI: hypersensitivity to remdesivir or any excipient<br>Excipient: SBECD 3 g per vial (accumulates in RI). UK SmPC: 212 mg sodium per 100 mg dose<br>Adverse effects with no tag: hypersensitivity/anaphylaxis, rash, sinus bradycardia (post-marketing, SmPC; usually normalises within 4 days of the last dose). PT prolongation without excess bleeding<br>Immunocompromised patients: a 3-day course may not be enough, with a potential for resistance (SmPC 4.4). nsp12 substitutions such as E802D, V166L and C799F reduce susceptibility about 1.4–3.5-fold (FDA 12.4)<br>院內: VEK02 (公費, prescribe per the 疾管署 supply protocol) and VEK03 (自費) are the same 100 mg vial. 衛部藥輸字第027899號

**Why:** Collects the label facts that have no column or multi-select option, as the ground rules require. Storage and stability details are left out on purpose.

**Sources:** TW仿單 §2, §3.1.1, §3.2.1, §4, §5.1.1, §1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F; FDA label §1, §4, §5.1, §11, §12.4 Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; UK SmPC §4.1, §4.4 (Immunocompromised; Excipients), §4.8 https://www.medicines.org.uk/emc/product/11597/smpc

### B14 · Category

Antiviral, nucleotide analogue (SARS-CoV-2 RdRp inhibitor)

**Why:** The current value is correct. The labels describe the drug as a 'SARS-CoV-2 nucleotide analog RNA polymerase inhibitor'. The proposed wording matches sibling entries such as 'Antiviral, nucleoside analogue' and 'Antiviral, neuraminidase inhibitor'. This change is optional.

**Sources:** FDA label §1, §11 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0978fa8-53ff-4ca2-82a7-567fd3e958ca; TW仿單 §1.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027899%E8%99%9F

## Disputed (not applied; reviewers disagreed)

- **Indications**: proposed "Pneumonia". Not applied because: 'Pneumonia' is a real schema option, but the labelled indication is COVID-19, not pneumonia. The US label (§1) indication is COVID-19 in hospitalized or high-risk non-hospitalized patients and does not mention pneumonia at all. TW/UK cover COVID-19 patients both with and without pneumonia, so 'pneumonia requiring O2' only qualifies one subgroup. In this database the Pneumonia tag sits with CAP/HAP/VAP and works as an antibacterial-selection filter. A pharmacist filtering Indications=Pneumonia would see remdesivir next to empirical pneumonia agents, which misrepresents its use. The schema's own viral indications are disease-specific (Influenza, Herpes), and the analogous tag here would be COVID-19, which does not exist. Per the ground rules, leave Indications empty and record COVID-19 in Notes (A13 already does). The owner can add a COVID-19 option if wanted.

## Apply log

- Adult dose: merged A1+A15 (IV 200 mg D1 then 100 mg QD, 30-120 min; TW/UK durations; US IMV/ECMO 10 d with IDSA caveat; vial counts)
- Renal dose, HD, CRRT: merged (no adjustment incl. HD; metabolite/SBECD accumulation, HD removal; Study 5912/REDPINE PMID 38913574; UK eGFR monitoring; CRRT Nishikawa PMID 37866621)
- Hepatic dose: merged (no adjustment Child-Pugh A-C; UK severe data limited; LFT monitoring/stop rules)
- Pediatric dose: merged (TW/UK >=28 d & >=3 kg bands; US-only neonatal/low-weight band; SBECD renal note)
- Indications: [Pneumonia]
- Coverage: left empty (no SARS-CoV-2 option); SARS-CoV-2 incl. Omicron sublineages recorded in Notes
- Side Effects: [GI, LFT↑, coagulopathy, CNS]
- Monitor: [LFT, PT/INR, renal]
- Mechanism: merged single value (prodrug -> GS-443902 -> RdRp nsp12 -> delayed chain termination i+3)
- Drug Interactions: merged (CQ/HCQ not recommended; weak CYP3A inhibitor; UK Table 5; no co-infusion, NaCl only)
- Pregnancy: merged (2nd/3rd trimester data, 1st insufficient, no dose adjustment, UK 4.6, letter categories retired)
- Breastfeeding: merged (可哺乳, LactMed levels/RID, TW/US n=11, UK benefit-risk)
- Notes: merged (COVID-19 only/tag gap, indications TW/UK/US, infusion/anaphylaxis observation, CI, SBECD/sodium, untagged AEs incl. sinus bradycardia, immunocompromised/resistance, 院內 VEK02/VEK03, licence number)
- Category: 'Antiviral, nucleotide analogue (SARS-CoV-2 RdRp inhibitor)'
- Page body: full sibling-style layout (Category, Mechanism, Indications, Coverage, Adult Dose table, Renal, Hepatic, Pediatric table, Side Effects, Monitor, DI, Notes, Pregnancy, Breastfeeding) with no storage/stability section
- References section appended: US FDA label (DailyMed v24 2026-08-07), UK SmPC eMC 11597 (rev 02/04/2026), TW 仿單 衛部藥輸字第027899號 v4 2024-11-25, LactMed NBK556881 (rev 2024-09-15), IDSA COVID-19 guideline, Nishikawa 2024 PMID 37866621, Sise 2024 REDPINE PMID 38913574
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
