# New entry: Dovato (Dolutegravir/Lamivudine)

- **Notion entry:** [Dovato (Dolutegravir/Lamivudine)](https://app.notion.com/3f1c496dfff181fd8422d756ea87d02a). Created 2026-10-06.
- **Hospital codes:** DOV01 (Dovato tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/dolutegravir-lamivudine.json` (plus any Taiwan insert text files)

## Product and sources

DOV01 Dovato 錠劑 (洛瓦梭膜衣錠), dolutegravir 50 mg + lamivudine 300 mg film-coated tablet, PO only. TFDA licence 衛部藥輸字第027860號 (issued 109-04-22, valid to 119-04-22), NHI BC27860100, ATC J05AR25. Checked against: US FDA label (DailyMed setid 68e45422-43ed-4cfb-9356-fae88d14a53a, SPL v19; boxed warning confirmed in the SPL XML, section code 34066-1); UK SmPC eMC 10446 (revised 03/10/2025); TW insert text saved in verification/sources/dolutegravir-and-lamivudine.tw-insert.txt (it is the Dovato text with Dovato header, licence and SV 137 tablet; it mentions abacavir only in the Triumeq DILI and cross-resistance lines); LactMed dolutegravir NBK500631 and lamivudine NBK501536. The Notion page (created 2026-10-06) has only its title and Category = "Antiretroviral (INSTI + NRTI, 2-drug STR)". All other columns, all 4 multi-selects and the page body are empty. Not verified: clinicalinfo.hiv.gov (DHHS) and hiv-druginteractions.org (both blocked by the proxy, 403). The TANGO PMID I tried (32010939) is the wrong paper, so it must not be cited. The GEMINI PMID 30420123 is verified (Lancet 2019;393:143-155).

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Dovato 1 tab (dolutegravir 50 mg + lamivudine 300 mg) **QD**, with or without food (可空腹或隨餐)<br>• Complete regimen for HIV-1. US: ART-naive, or switch in virologically suppressed patients (HIV-1 RNA \<50 copies/mL) on stable ART with no history of treatment failure and no known resistance to either component. TW: no known/suspected resistance to either component. UK: no known/suspected INSTI-class or lamivudine resistance<br>• Test for HBV before/at start (see boxed warning in Notes)<br>• With **rifampin or carbamazepine**: add **dolutegravir 50 mg** tab \~12 h after the Dovato dose (US 2.3 / TW 3.1 表1)<br>• Do not add other antiretrovirals (complete regimen)<br>• Missed dose: take as soon as remembered, never double (TW); UK: skip if next dose due within 4 h

**Why:** US 1 and 2.2–2.3 and TW 2 and 3.1 give 1 tab QD with or without food, HBV testing before start, and an extra DTG 50 mg 12 h after Dovato with carbamazepine or rifampin. US 7.1 says no other ARVs (complete regimen). UK 4.2 gives the 4-hour missed-dose rule. TW patient counselling says take as soon as remembered and do not double. TW 2 does not list the switch indication separately, but the FDA label does, so per the ground rules it counts as approved.

**Sources:** US FDA label (DailyMed) §1, §2.1–2.3, §7.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.1, §4.2: https://www.medicines.org.uk/emc/product/10446/smpc; TW insert 衛部藥輸字第027860號 §2, §3.1, 病人諮詢(漏服藥物): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (TW 6.7 = US 8.6 = UK 4.2; fixed-dose tablet, cannot be dose-adjusted)<br>CrCl ≥50: no adjustment<br>CrCl 30–49: no dose change, but lamivudine AUC ↑1.6–3.3× → monitor CBC (neutropenia, anemia); if new/worsening → stop Dovato and use the separate components (dolutegravir + renally adjusted lamivudine)<br>CrCl \<30: **not recommended** (不建議) → use the separate components<br>HD/PD: not recommended (CrCl \<30) → separate components. Dolutegravir is highly protein-bound, so unlikely to be removed; 4-h HD, CAPD and APD remove negligible lamivudine (US 10)<br>CRRT: no label data → not recommended; use the separate components<br>Note: dolutegravir raises SCr within the first 4 wk, then it stays stable (mean +0.14 mg/dL at wk 144). This comes from OCT2 blocking tubular creatinine secretion and is not a true fall in GFR (US 6.1)

**Why:** TW 3.3/6.7, US 2.4/8.6 and UK 4.2/4.4 all say: not recommended if CrCl <30; at CrCl 30–49, lamivudine AUC is 1.6–3.3× higher, so monitor for hematologic toxicity and switch to the single components if the lamivudine dose must change. The hospital stocks the TW product, and TW matches US here. US 10 covers dialysis removal. US 6.1 and UK 4.8 cover the creatinine rise. No label covers CRRT.

**Sources:** TW insert §3.3, §6.7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; US FDA label §2.4, §8.6, §10, §6.1 (Changes in Serum Creatinine): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.2, §4.4, §4.8: https://www.medicines.org.uk/emc/product/10446/smpc

### A3 · Hepatic dose

Child-Pugh A/B: no dose adjustment<br>Child-Pugh C: **not recommended** (dolutegravir not studied; 不建議) — TW 3.3/6.6, US 2.5/8.7. UK SmPC: no data, use with caution<br>HBV/HCV co-infection: higher risk of transaminase elevation → monitor LFT

**Why:** TW and US both say no change for Child-Pugh A/B and not recommended for C. UK 4.2 says use with caution in C. US 5.3 says underlying hepatitis B or C increases the risk of transaminase elevation.

**Sources:** TW insert §3.3, §6.6: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; US FDA label §2.5, §8.7, §5.3: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.2: https://www.medicines.org.uk/emc/product/10446/smpc

### A4 · Pediatric dose

≥12 y **and** ≥25 kg: 1 tab PO QD, same as adults (US/TW; DANCE trial in treatment-naive adolescents)<br>UK SmPC: \>12 y and ≥40 kg only<br>\<12 y or \<25 kg: safety/efficacy not established (FDC cannot be weight-adjusted)

**Why:** US 2.2 and 8.4 and TW 2 and 3.1 set the floor at ≥12 y and ≥25 kg. UK 4.1 and 4.2 require ≥40 kg.

**Sources:** US FDA label §2.2, §8.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert §2, §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.1, §4.2: https://www.medicines.org.uk/emc/product/10446/smpc

### A5 · Indications

HIV

**Why:** The only labelled indication is treatment of HIV-1 infection. Do not use the HIV PrEP or HBV tags: lamivudine is active against HBV, but Dovato is not indicated for HBV and lamivudine alone is inadequate HBV treatment (UK 4.4, US 5.1).

**Sources:** US FDA label §1, §5.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.1, §4.4: https://www.medicines.org.uk/emc/product/10446/smpc

### A6 · Coverage

HIV

**Why:** US 12.4 shows activity against HIV-1 (groups M and O) and HIV-2 in cell culture. Do not tag HBV, for the reason given in A5 (explained in Notes).

**Sources:** US FDA label §12.4 Microbiology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a

### A7 · Side Effects

GI, CNS, LFT↑, hypersensitivity, IRIS, lactic acidosis, weight gain, anemia, neutropenia

**Why:** Every tag is an existing schema option. Sources by tag:<br>- GI: nausea and diarrhea (US 6.1).<br>- CNS: headache, insomnia, anxiety, dizziness and suicidal ideation (US 6.1; UK 4.8).<br>- LFT↑: hepatotoxicity (US 5.3). The brief's 'hepatotoxicity' is not a schema option, so LFT↑ is the tag to use.<br>- hypersensitivity: US 5.2.<br>- IRIS: US 5.6.<br>- lactic acidosis: US 5.4.<br>- weight gain: TANGO 3% (US 6.1), US 6.2 postmarketing, UK 4.8 'common'. This corrects the brief, which sourced weight gain only from the TW post-marketing section.<br>- anemia and neutropenia: US 6.1 less-common reactions, and the CrCl 30–49 warning in US 8.6.<br>Rhabdomyolysis and pancreatitis are rare; mention them in the body rather than as tags.

**Sources:** US FDA label §5.2–5.6, §6.1, §6.2, §8.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.8: https://www.medicines.org.uk/emc/product/10446/smpc; TW insert §8 上市後經驗 (體重增加): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### A8 · Monitor

viral load, HBV serology, LFT, CBC, renal, lipids

**Why:** Sources by tag:<br>- HBV serology: test before start (US 2.1, boxed warning).<br>- LFT: hepatotoxicity, and HBV flare after stopping (US 5.1, 5.3).<br>- CBC: needed at CrCl 30–49 (US 8.6).<br>- renal: CrCl decides eligibility (<30 not recommended), creatinine rises through OCT2, and metformin co-use needs renal monitoring (UK 4.4).<br>- lipids: UK 4.4 points to guidelines for monitoring lipids and glucose; US Table 4 shows cholesterol up 15 mg/dL and TG up 10 mg/dL.<br>- viral load: a switch requires HIV-1 RNA <50 copies/mL (US 1), and UK 4.5 advises more frequent VL checks with chronic sorbitol use.

**Sources:** US FDA label boxed warning, §1, §2.1, §5.1, §5.3, §6.1 Table 4, §8.6: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.4, §4.5: https://www.medicines.org.uk/emc/product/10446/smpc

### A9 · Mechanism

**Dolutegravir** = INSTI: binds the integrase active site and blocks the strand-transfer step of HIV DNA integration. **Lamivudine** = cytidine-analogue NRTI: phosphorylated inside the cell to 3TC-TP, which inhibits reverse transcriptase by DNA chain termination. Active against HIV-1 (groups M/O) and HIV-2 in vitro.<br>Resistance: lamivudine — M184V/I (high-level). Dolutegravir — reduced susceptibility with G118R and with multi-mutation INSTI combinations (e.g. G140S/Q148H/R/K, E92Q/N155H, T66K/L74M). GEMINI-1/2 (wk 144) and TANGO: no emergent INSTI/NRTI resistance at confirmed virologic withdrawal

**Why:** Taken directly from US 12.4 Microbiology (mechanism, antiviral activity, resistance, cross-resistance). TW 作用機轉 matches.

**Sources:** US FDA label §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 作用機轉: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### A10 · Drug Interactions

• **Dofetilide**: **contraindicated** (↑dofetilide via OCT2/MATE1; US/TW). UK: **fampridine (dalfampridine)** contraindicated (seizures); US/TW: weigh benefit against seizure risk<br>• **Rifampin, carbamazepine**: ↓DTG → add DTG 50 mg \~12 h after Dovato<br>• **Oxcarbazepine, phenytoin, phenobarbital, St John's wort**: ↓DTG → avoid (US/TW). UK: extra DTG 50 mg instead (also with etravirine without boosted PI, efavirenz, nevirapine, tipranavir/r)<br>• **Polyvalent cations** (Mg/Al antacids or laxatives, sucralfate, buffered drugs): Dovato **2 h before or 6 h after**<br>• **Calcium/iron supplements, multivitamins**: may be taken together **with food**; fasting → Dovato 2 h before or 6 h after<br>• **Metformin** ↑ (DTG inhibits OCT2/MATE1). TW insert: limit metformin to **≤1000 mg/day** when starting either drug; may need adjustment when Dovato is stopped; monitor glucose. US (2026): see metformin label for benefit/risk. UK: consider metformin dose ↓, monitor renal function (caution at CrCl 45–59, lactic acidosis)<br>• **Sorbitol**-containing medicines (UK: also xylitol/mannitol/lactitol/maltitol): ↓3TC → avoid chronic co-use<br>• **Cladribine**: not recommended (UK)<br>• No other ARVs (complete regimen); no emtricitabine-containing products (UK)<br>• Rifabutin: no adjustment (UK)<br>• Check everything else in the Liverpool checker: https://www.hiv-druginteractions.org (查詢交互作用)

**Why:** Sources: US Table 5 (7.2–7.4), TW 7.4 table 2, UK 4.3/4.4/4.5.<br><br>The brief asked me to check cation spacing in the US label. It is confirmed: US Table 5 gives 2 h before / 6 h after for cation antacids, laxatives, sucralfate and buffered drugs, and says Ca/Fe supplements can be taken together with food.<br><br>The metformin advice differs by label. TW (the stocked product) still caps metformin at ≤1000 mg/day; US v19 only refers to the metformin label. Per the hierarchy, give the TW value and show the US/UK advice alongside.<br><br>The UK contraindication is fampridine; the UK contraindication list does not include dofetilide.

**Sources:** US FDA label §4, §7.1–7.4 Table 5: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert §4, §7.4 表2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.2, §4.3, §4.4, §4.5: https://www.medicines.org.uk/emc/product/10446/smpc

### A11 · Pregnancy

No FDA letter category (retired). US 8.1 / TW 6.1: Botswana (Tsepamo) and Eswatini surveillance (\>14,000 pregnancies) show the same neural-tube-defect rate with dolutegravir at conception (0.11% / 0.08%) as with non-DTG ART or in HIV-negative women; the early NTD signal was not confirmed. APR: no rise in major birth defects with dolutegravir (1st-trimester 3.3% vs MACDP background 2.7%) or lamivudine (3.1%). UK 4.6: **can be used in pregnancy if clinically needed**, but data for this 2-drug combination are limited (\<300 outcomes) and DTG+3TC dual therapy has not been studied in pregnancy. Both drugs cross the placenta. Register exposures with the APR. (Regimen choice in pregnancy: check the DHHS perinatal guideline; not verified here)

**Why:** All three labels describe pregnancy with registry and NTD data, not a letter category. None of them says to avoid use in the first trimester. The only label caution on the 2-drug regimen is UK's 'not studied in pregnancy' line, so include it. Guideline wording (DHHS perinatal) still needs a verified source before it is added.

**Sources:** US FDA label §8.1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert §6.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/10446/smpc

### A12 · Breastfeeding

Labels: TW insert 6.2 + 病人諮詢 and UK SmPC 4.6 → 應囑咐母親治療期間不要哺餵母乳 / do not breastfeed (HIV transmission, resistance in an HIV+ infant, infant adverse reactions). US label 8.2: both drugs are in milk; it lists the same risks without an explicit prohibition.<br>LactMed (dolutegravir NBK500631, rev 2026-07; lamivudine NBK501536, rev 2025-12): dolutegravir is low in milk but detectable in infant plasma and is first-line during breastfeeding; lamivudine is well studied and well tolerated by breastfed infants. With a **sustained undetectable viral load**, transmission is \<1% (not zero) → support an informed choice to breastfeed. If viral load is not suppressed → banked donor milk or formula.<br>⚠️ Labels and LactMed disagree → decide with the HIV team

**Why:** Correction to the brief: TW 'do not breastfeed' is not only in the counselling section. It is also in TW 6.2 Lactation itself, and UK SmPC 4.6 says the same. US v19 8.2 lists the risks but does not say 'do not breastfeed'. The LactMed text was checked in the sources JSON (lactmed.components).

**Sources:** TW insert §6.2 哺乳 and 病人諮詢(授乳): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.6: https://www.medicines.org.uk/emc/product/10446/smpc; US FDA label §8.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; LactMed Dolutegravir NBK500631: https://www.ncbi.nlm.nih.gov/books/NBK500631/; LactMed Lamivudine NBK501536: https://www.ncbi.nlm.nih.gov/books/NBK501536/

### A13 · Notes

本院品項: DOV01 Dovato 錠劑 (洛瓦梭膜衣錠) dolutegravir 50 mg/lamivudine 300 mg FC tab <span color="blue">`PO`</span> only; 衛部藥輸字第027860號; NHI BC27860100; ATC J05AR25<br>⚠️ **US Boxed warning / TW 特殊警語**: HIV-1/HBV co-infection → emergence of lamivudine-resistant HBV, and severe acute HBV exacerbation after stopping. Test HBV before start. If co-infected: add HBV treatment or choose another regimen (lamivudine alone is not adequate HBV therapy). If Dovato is stopped: monitor LFT and clinical status for several months; consider anti-HBV therapy<br>• No HBV Coverage/Indication tag: lamivudine has HBV activity, but Dovato is not indicated for HBV<br>• Evidence: GEMINI-1/2 (ART-naive; screening VL ≤500,000 copies/mL; PMID 30420123), TANGO (switch from TAF-based regimen), DANCE (adolescents)<br>• Hypersensitivity (\<1%: rash, fever, organ/liver dysfunction) → stop at once; prior hypersensitivity = contraindication<br>• Hepatotoxicity incl. acute liver failure; DILI leading to transplant reported with Triumeq<br>• Lactic acidosis / hepatomegaly with steatosis (NRTI)<br>• Suicidal ideation, mainly with prior psychiatric history<br>• SCr ↑ \~0.14 mg/dL from OCT2 inhibition (not a true GFR change)<br>• Label differences: UK adolescents ≥40 kg (US/TW ≥25 kg); UK Child-Pugh C 'use with caution' (US/TW not recommended); UK contraindication = fampridine (US/TW = dofetilide); TW metformin ≤1000 mg/day; TW/UK do not breastfeed vs LactMed<br>• Guideline place in therapy (DHHS): not yet verified

**Why:** The boxed warning must appear in Notes (ground rule); the brief confirmed it in the SPL XML. The other notes come from US 5.1–5.6 and 6.1, and UK 4.4/4.8. The GEMINI PMID was checked with E-utilities esummary: 30420123 = Cahn P et al., Lancet 2019;393:143-155. The TANGO PMID I tried (32010939) is a different paper, so TANGO is cited only through the label.

**Sources:** US FDA label boxed warning, §5.1–5.6, §6.1, §14: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 特殊警語: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.2, §4.3, §4.4: https://www.medicines.org.uk/emc/product/10446/smpc; Cahn P et al. GEMINI-1/2, Lancet 2019;393:143-155 (PMID 30420123): https://pubmed.ncbi.nlm.nih.gov/30420123/

### A14 · Page body

Use the same layout as other entries (e.g. Valcyte):<br>- '# Dolutegravir/Lamivudine (Dovato)' with a one-line summary: 2-drug INSTI + NRTI single-tablet complete regimen for HIV-1; 本院品項 DOV01 <span color="blue">`PO`</span>.<br>- '## Mechanism of action' (A9).<br>- '## Spectrum of activity': HIV-1 (groups M/O), HIV-2 in vitro; not for HBV.<br>- '## Indications': approved (US/TW/UK) uses with the naive/switch criteria and the UK ≥40 kg difference.<br>- '## Dosing': Adult (A1), Pediatric (A4), Renal table (CrCl ≥50 / 30–49 / \<30 / HD / CRRT, from A2), Hepatic (A3).<br>- '## Administration': with or without food; cation spacing.<br>- '## Adverse effects & monitoring': boxed warning first, then common reactions (headache, nausea, diarrhea, insomnia, fatigue, anxiety, weight gain), then serious ones (hypersensitivity, hepatotoxicity, lactic acidosis, IRIS incl. autoimmune, suicidality, rare pancreatitis/rhabdomyolysis), then the monitoring list (A8).<br>- '## Drug interactions': table (A10) plus the Liverpool checker link.<br>- '## Pregnancy & lactation' (A11, A12).<br>- '## Clinical pearls': test HBV first; rifampin/carbamazepine need an extra DTG 50 mg; not for CrCl \<30; cations 2 h before / 6 h after; complete regimen.<br>- '## References': US DailyMed setid 68e45422… (v19); UK eMC 10446 (03/10/2025); TW 衛部藥輸字第027860號; LactMed NBK500631 and NBK501536; GEMINI PMID 30420123.

**Why:** This is a new entry. Every other filled entry has a structured page body with a References section.

**Sources:** US FDA label: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC: https://www.medicines.org.uk/emc/product/10446/smpc; TW insert: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; LactMed NBK500631 / NBK501536: https://www.ncbi.nlm.nih.gov/books/NBK500631/ , https://www.ncbi.nlm.nih.gov/books/NBK501536/

### B1 · Adult dose

<span color="blue">`PO`</span> Dovato (DTG 50 mg/3TC 300 mg) **1 tab QD**, with or without food (可與食物併服或空腹)<br>• Test for **HBV** before or when starting (FDA 2.1 / TW 3.1)<br>• With **rifampin or carbamazepine**: Dovato QD **+ dolutegravir 50 mg tab ~12 h later** for as long as the inducer is given (FDA 2.3 / TW 表1). UK SmPC 4.2 also needs the extra dose with oxcarbazepine, phenytoin, phenobarbital, St John's wort, etravirine (without a boosted PI), efavirenz, nevirapine and tipranavir/ritonavir (the US label says to avoid oxcarbazepine, phenytoin, phenobarbital and St John's wort)<br>• Complete regimen: do not add other ARVs (FDA 7.1)<br>• Missed dose: take it when remembered, but skip it if the next dose is due within 4 h (UK 4.2); never double the dose (FDA 17)

**Why:** The column is empty. Dose, food, HBV testing and the inducer adjustment are the same in the US label and the TW insert. The UK SmPC gives a longer list of inducers that need the extra dose and the 4-hour missed-dose rule.

**Sources:** US FDA DOVATO label §2.1–2.3, §17 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 3.1 用法用量 / 表1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.2 – https://www.medicines.org.uk/emc/product/10446/smpc

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> (TW insert = FDA = UK SmPC; fixed-dose tablet, cannot be adjusted)<br>CrCl ≥50: no adjustment<br>CrCl **30–49**: no adjustment, but lamivudine AUC is **1.6–3.3× higher** → monitor **CBC** (neutropenia, anemia). If 3TC needs dose reduction → stop Dovato and use the single components (TW 6.7 / FDA 8.6 / UK 4.4)<br>CrCl **<30**: **not recommended** (不建議) → use separate dolutegravir 50 mg QD + renally adjusted lamivudine (Epivir: CrCl 15–29: 150 mg first dose, then 100 mg QD; 5–14: 150 mg, then 50 mg QD; <5: 50 mg, then 25 mg QD)<br>HD/PD: Dovato not recommended. Use components: lamivudine is negligibly removed by 4-h HD/CAPD/APD and needs **no supplemental dose after HD** (Epivir 2.3). Dolutegravir is >98.9% protein-bound and unlikely to be dialysed; there is too little information for a dialysis dose (Tivicay 8.7), and caution applies to INSTI-experienced patients with severe RI<br>CRRT: no label data → use components, dose 3TC by estimated CrCl<br>Note: dolutegravir raises SCr by ~0.1–0.15 mg/dL in the first 4 wk by inhibiting OCT2 secretion; GFR is unchanged (FDA 6.1)

**Why:** The column is empty. Renal cut-offs are the same in all three labels (<30 not recommended; monitor at 30–49). No label gives an HD or CRRT dose for the combination, so the component labels (Epivir Table 2, Tivicay 8.7) supply the dialysis guidance. The creatinine artefact helps when reading SCr changes.

**Sources:** US FDA DOVATO §2.4, §8.6, §10, §6.1 (Changes in Serum Creatinine) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 3.3 / 6.7 腎功能不全 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.2, §4.4 'Administration in subjects with moderate renal impairment' – https://www.medicines.org.uk/emc/product/10446/smpc; US EPIVIR label §2.3 Table 2 (eff. 2024-08-15) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=89226149-47fa-4f7d-bb1f-1aa7034486b8; US TIVICAY label §8.7 Renal Impairment – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63df5af3-b8ac-4e76-9830-2dbb340af922

### B3 · Hepatic dose

Child-Pugh A/B: no adjustment<br>Child-Pugh **C**: **not recommended** (不建議; not studied) – TW insert/FDA. UK SmPC: no data, **use with caution**<br>HBV/HCV co-infection raises the risk of transaminase elevation → monitor LFT

**Why:** The column is empty. The US label and TW insert both say not recommended in Child-Pugh C. The UK SmPC says use with caution. The hospital stocks the TW-licensed product, so the TW/US wording leads and the UK wording is given alongside.

**Sources:** US FDA DOVATO §2.5, §8.7, §5.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 3.3 / 6.6 肝功能不全 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.2 Hepatic impairment – https://www.medicines.org.uk/emc/product/10446/smpc

### B4 · Pediatric dose

Adolescents **≥12 y and ≥25 kg** (TW insert/FDA; DANCE trial): **1 tab PO QD** (adult dose). UK SmPC: ≥12 y and **≥40 kg**<br><12 y or <25 kg: not established → use the individual components (dolutegravir/lamivudine pediatric formulations) per their labels

**Why:** The column is empty. The weight threshold differs between labels: 25 kg in the US/TW labels, 40 kg in the UK SmPC.

**Sources:** US FDA DOVATO §1, §2.2, §8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 2 適應症 / 6.4 小兒 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.1, §4.2 Paediatric population – https://www.medicines.org.uk/emc/product/10446/smpc

### B5 · Indications

HIV

**Why:** HIV-1 treatment is the only approved indication (FDA, UK and TW). Do not tag HBV: lamivudine at this dose is not an adequate HBV treatment, and the labels say to add another HBV-active drug. Do not tag HIV PrEP; it is not an approved use.

**Sources:** US FDA DOVATO §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.1, §4.4 Liver disease – https://www.medicines.org.uk/emc/product/10446/smpc

### B6 · Coverage

HIV

**Why:** Both components act on HIV-1. Lamivudine is also active against HBV, but the labels say lamivudine monotherapy is inadequate because of high HBV resistance risk, and the combination is not indicated for HBV. An HBV tag could imply Dovato treats HBV, so put that point in Notes instead.

**Sources:** UK SmPC §5.1 Mechanism of action, §4.4 Liver disease – https://www.medicines.org.uk/emc/product/10446/smpc; US FDA DOVATO §5.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a

### B7 · Side Effects

GI, CNS, LFT↑, hypersensitivity, IRIS, lactic acidosis, weight gain, anemia, neutropenia

**Why:** All of these are existing schema options. Common reactions: headache, nausea, diarrhoea, insomnia, anxiety, depression/suicidal ideation (CNS). Hepatotoxicity uses the existing option 'LFT↑'; the brief's tag 'hepatotoxicity' is not a schema option. Weight increased: TANGO 3% and FDA 6.2 postmarketing (also UK 4.8 'common'). Anemia and neutropenia (incl. PRCA) matter at CrCl 30–49. Lactic acidosis is a §5.4 warning. Optional extras: 'autoimmune' (IRIS-related Graves'), 'rhabdomyolysis' (rare).

**Sources:** US FDA DOVATO §5.2–5.6, §6.1, §6.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.8 Table 2 – https://www.medicines.org.uk/emc/product/10446/smpc; TW insert 8 副作用 (上市後: 體重增加) – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### B8 · Monitor

viral load, HBV serology, LFT, CBC, renal, lipids

**Why:** HBV testing before starting is required (boxed warning, §2.1). The US label recommends monitoring for hepatotoxicity for all patients (§5.3), not only at CrCl 30–49 as the brief suggests. Check CBC if CrCl stays at 30–49 (§8.6). Renal function decides eligibility (<30 not recommended), and a small SCr rise is expected. Optional: 'lipids' (UK 4.4 weight and metabolic parameters).

**Sources:** US FDA DOVATO boxed warning, §2.1, §5.3, §8.6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.4 – https://www.medicines.org.uk/emc/product/10446/smpc

### B9 · Mechanism

2-drug STR: **dolutegravir** (INSTI) binds the integrase active site and blocks strand transfer of viral DNA integration + **lamivudine** (cytidine-analogue NRTI) → 3TC-triphosphate is incorporated by RT and terminates the chain. Resistance: 3TC **M184V/I** (high-level); DTG in vitro G118R, R263K, E92Q, etc. No treatment-emergent INSTI/NRTI resistance at Week 144 in GEMINI-1/2 or TANGO

**Why:** The column is empty. Text is taken from the label mechanism and microbiology sections.

**Sources:** UK SmPC §5.1 Mechanism of action – https://www.medicines.org.uk/emc/product/10446/smpc; US FDA DOVATO §12.4 Microbiology (Resistance; Clinical Subjects) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a

### B10 · Drug Interactions

⛔ **Dofetilide** – contraindicated (↑dofetilide via OCT2/MATE1; FDA/TW). UK: **fampridine (dalfampridine)** and other narrow-TI OCT2 substrates are contraindicated; FDA/TW: dalfampridine raises seizure risk → weigh benefit vs risk<br>• **Rifampin, carbamazepine**: ↓DTG → extra **DTG 50 mg ~12 h after** Dovato. **Avoid** oxcarbazepine, phenytoin, phenobarbital, St John's wort (FDA/TW; UK: extra DTG dose instead). Rifabutin: no adjustment (UK)<br>• **Polyvalent cations** (Mg/Al antacids, laxatives, sucralfate, buffered drugs): Dovato **2 h before or 6 h after**. **Ca/Fe supplements and multivitamins**: may be taken together **with food**; if fasting, Dovato 2 h before or 6 h after (FDA Table 5; UK also covers Mg supplements)<br>• **Metformin** ↑ (AUC ↑79%, DTG inhibits OCT2/MATE1). TW insert: limit metformin to **≤1000 mg/day** when starting either drug (限制每日總劑量1000毫克); may need adjustment when Dovato is stopped; monitor glucose at start and after stopping. UK: consider metformin dose adjustment; monitor renal function (caution at CrCl 45–59, lactic acidosis). US: see metformin label<br>• **Sorbitol/poly-alcohols**: ↓3TC → avoid chronic co-use<br>• **Cladribine**: not recommended (UK). Do not combine with other ARVs (complete regimen) or emtricitabine (UK 4.4)<br>• Check all co-medications at hiv-druginteractions.org (Liverpool) (查詢交互作用)

**Why:** The column is empty. I checked the brief's calcium/iron wording against the US label: FDA Table 5 says that with food DOVATO and calcium/iron supplements can be taken at the same time, and under fasting conditions DOVATO goes 2 h before or 6 h after, so the brief is correct. The brief left out the UK fampridine contraindication, the cladribine and emtricitabine cautions, sorbitol, and the US 'avoid' list (oxcarbazepine, phenytoin, phenobarbital, St John's wort).

**Sources:** US FDA DOVATO §4, §7.2–7.4 Table 5 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.3, §4.4 Drug interactions, §4.5 – https://www.medicines.org.uk/emc/product/10446/smpc; TW insert 4 禁忌 / 7.4 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### B11 · Pregnancy

No FDA letter category. NTD signal not confirmed: the Botswana (Tsepamo) and Eswatini surveillance studies (>14,000 pregnancies) show NTD prevalence with DTG at conception (0.11% / 0.08%) not significantly different from non-DTG regimens or HIV-negative mothers (FDA 8.1 / TW 6.1). APR: no increase in birth defects with DTG (1st-trimester 3.3%, n=874) or 3TC (3.1%, >5,600) vs MACDP background 2.7% (FDA 8.1). UK 4.6: **can be used in pregnancy if clinically needed**; >1,000 1st-trimester outcomes each for DTG and 3TC, but the **DTG+3TC dual regimen has not been studied in pregnancy** (<300 exposures). Both cross the placenta. Register exposures with the APR. Guideline (DHHS perinatal) advice on 2-drug regimens in pregnancy has not been verified → check before citing

**Why:** The column is empty. The labels do not restrict first-trimester use. The hospital site's 'not recommended in 1st trimester / change regimen if pregnant' wording is not label-based; see the hospital-database issues.

**Sources:** US FDA DOVATO §8.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.6 Pregnancy – https://www.medicines.org.uk/emc/product/10446/smpc; TW insert 6.1 懷孕 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### B12 · Breastfeeding

LactMed (DTG and 3TC): both appear in milk at low levels (DTG milk:plasma ~0.03; detectable in infant plasma). DTG is first-line during breastfeeding, and 3TC is well tolerated by breastfed infants. With a **sustained undetectable VL**, breastfeeding transmission is <1% (not zero), and people who choose to breastfeed should be supported. If VL is not suppressed → donor milk or formula<br>Labels differ: **TW insert (6.2 and 14)** and **UK SmPC 4.6** still say **do not breastfeed** (囑咐母親不要哺餵母乳). The current US label 8.2 only lists the risks (HIV transmission, resistance, infant ADRs) and no longer tells patients not to breastfeed

**Why:** The column is empty. Note a correction to the brief: the TW 'do not breastfeed' advice is in the 6.2 哺乳 risk summary as well as the counselling section, and the UK SmPC says the same. The US label (v19) has dropped the explicit advice. Both LactMed chapters are confirmed by E-utilities esummary.

**Sources:** LactMed Dolutegravir NBK500631 (rev 2026-07-15) – https://www.ncbi.nlm.nih.gov/books/NBK500631/; LactMed Lamivudine NBK501536 (rev 2025-12-15) – https://www.ncbi.nlm.nih.gov/books/NBK501536/; US FDA DOVATO §8.2, §17 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC §4.6 Breast-feeding – https://www.medicines.org.uk/emc/product/10446/smpc; TW insert 6.2 哺乳 / 14 授乳 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### B13 · Notes

本院品項: DOV01 Dovato 錠劑 (洛瓦梭膜衣錠) DTG 50 mg/3TC 300 mg tab <span color="blue">`PO`</span>; TW 衛部藥輸字第027860號<br>⚠️ **Boxed warning (FDA / TW 特殊警語)**: HIV-1/HBV co-infection → **lamivudine-resistant HBV** can emerge, and **severe acute HBV exacerbation can follow stopping** Dovato. Test HBV before starting; if co-infected, add HBV therapy (3TC alone is inadequate) or use another regimen; after stopping, monitor LFT and HBV markers for several months<br>• Indication: FDA = ART-naive, **or** switch in patients virologically suppressed (<50 copies/mL) on a stable regimen with no history of failure and no resistance to DTG/3TC. UK/TW = HIV-1 with no known or suspected INSTI or 3TC resistance<br>• GEMINI-1/2 enrolled naive adults with HIV RNA **≤500,000 copies/mL** (label trial population)<br>• Hypersensitivity (rash, fever, organ dysfunction incl. liver) → stop immediately; do not rechallenge<br>• Suicidal ideation, mainly in patients with a psychiatric history<br>• SCr ↑ ~0.1–0.15 mg/dL is an OCT2 effect, not true renal impairment<br>• Coverage/indication tags: HIV only (no HBV tag; not an HBV treatment)

**Why:** The column is empty. The rules require the boxed warning in Notes; it is confirmed in the SPL XML and the TW 特殊警語. The switch criteria and the ≤500,000 trial entry criterion come from the labels and replace the hospital site's unsourced guideline wording.

**Sources:** US FDA DOVATO Boxed Warning, §1, §5.1–5.2, §6.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; TW insert 特殊警語 / 2 適應症 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F; UK SmPC §4.1, §4.4, §5.1 (GEMINI 1000–500,000 c/mL) – https://www.medicines.org.uk/emc/product/10446/smpc; Cahn P et al. GEMINI-1/2. Lancet 2019;393:143-155 (PMID 30420123, verified esummary) – https://pubmed.ncbi.nlm.nih.gov/30420123/; van Wyk J et al. TANGO. Clin Infect Dis 2020;71:1920-1929 (PMID 31905383, verified esummary) – https://pubmed.ncbi.nlm.nih.gov/31905383/

### B14 · Page body

Follow the Valcyte entry's structure: # Dolutegravir/Lamivudine (Dovato) → short intro (本院品項 DOV01, PO only) / ## Mechanism of action (B9) / ## Spectrum (HIV-1; not an HBV treatment) / ## Indications (FDA naive + switch; UK/TW) / ## Dosing → Adult (B1), Pediatric (B4), Renal/HD/CRRT table (B2), Hepatic (B3) / ## Administration (with or without food; cation spacing) / ## Adverse effects & monitoring (boxed warning + B7/B8) / ## Drug interactions table (B10) / ## Pregnancy & lactation (B11/B12) / ## Clinical pearls / ## References (US label setid 68e45422…, UK SmPC eMC 10446, TFDA 衛部藥輸字第027860號, LactMed NBK500631 + NBK501536, Epivir/Tivicay labels, PMIDs 30420123, 31905383)

**Why:** The body is blank. Other entries carry a structured monograph with a reference list.

**Sources:** US FDA DOVATO – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e45422-43ed-4cfb-9356-fae88d14a53a; UK SmPC – https://www.medicines.org.uk/emc/product/10446/smpc

### B15 · Page body

In References, cite the TFDA online insert (HTML) for 衛部藥輸字第027860號 (change records 112/10/03 and 114/04/17), not the 2022 PDF 221170_020278600001-111-02-16.pdf, which predates the ≥25 kg adolescent/DANCE update. (The 2025-05-12 manufacturer upload on that page is a carton-label file, not an insert.)

**Why:** The saved TW text includes DANCE adolescent data and the ≥25 kg threshold, which are recent label changes, so it is newer than the 2022 PDF. Citing the 2022 file could point readers to an outdated version (e.g. one without the 25 kg adolescent indication).

**Sources:** TFDA insert page – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027860%E8%99%9F

### B16 · Renal dose, HD, CRRT

Off-label evidence (does not override the label 'not recommended CrCl <30'): Spencer M et al. AIDS 2025;39:863-868 (PMID 39874132). Cross-sectional study of 157 PWH with ESKD (dialysis, transplant or eGFR <15) at 5 London centres: 37% on dual/unboosted ART (mostly DTG/3TC) with viral suppression similar to triple ART; full-dose 3TC 300 mg used in 24 patients with eGFR <30 and well tolerated. Authors: DTG/3TC FDC 'merits further evaluation' in ESKD → decide with the HIV specialist. No CRRT or TDM data for Dovato found; TDM not label-recommended

**Why:** The PMID is verified by esummary (title, journal and year match), but I could not read the content because PubMed pages show a CAPTCHA. No label covers CRRT or TDM. DHHS pages were unreachable, so no guideline statement is proposed.

**Sources:** PubMed PMID 39874132 – https://pubmed.ncbi.nlm.nih.gov/39874132/

## Apply log

- Adult dose: merged both reviewers' versions. Covers the complete regimen with US/TW/UK eligibility, HBV testing, the rifampin/carbamazepine extra dolutegravir 50 mg dose (and the UK inducer list), no added ARVs, and missed-dose advice
- Renal dose, HD, CRRT: merged. Covers CrCl >=50, 30-49 and <30 (with Epivir component dosing), HD/PD, CRRT, the off-label Spencer 2025 evidence (PMID 39874132) and the OCT2 creatinine rise
- Hepatic dose: Child-Pugh A/B no adjustment; C not recommended (US/TW), UK use with caution; LFT monitoring in HBV/HCV co-infection
- Pediatric dose: >=12 y and >=25 kg (US/TW, DANCE); UK >=40 kg; <12 y or <25 kg use the individual components
- Indications set to [HIV]
- Coverage set to [HIV]
- Side Effects set to [GI, CNS, LFT↑, hypersensitivity, IRIS, lactic acidosis, weight gain, anemia, neutropenia]
- Monitor set to [viral load, HBV serology, LFT, CBC, renal, lipids]
- Mechanism: INSTI + NRTI mechanism and resistance, merged
- Drug Interactions: dofetilide/fampridine, inducers, cations, metformin (TW <=1000 mg/day, AUC ↑79%), sorbitol, cladribine, emtricitabine, rifabutin, Liverpool checker link; merged
- Pregnancy: no letter category; Tsepamo/Eswatini neural-tube-defect data; APR data with n's; UK 4.6; DHHS guideline flagged as not verified
- Breastfeeding: TW/UK do not breastfeed vs US 8.2 vs LactMed (with revision dates and milk:plasma ratio); undetectable-viral-load advice; decide with the HIV team
- Notes: hospital product line (DOV01, licence, NHI code, ATC); boxed HBV warning; tag rationale; indication summary; GEMINI/TANGO/DANCE with PMIDs; hypersensitivity, hepatotoxicity, lactic acidosis, suicidality, SCr; label differences; DHHS flagged as not verified
- Page body created in the requested layout: title and summary, Mechanism of action, Spectrum, Indications, Dosing (Adult/Pediatric/Renal table/Hepatic), Administration, Adverse effects & monitoring, Drug interactions table and Liverpool link, Pregnancy & lactation, Clinical pearls
- References section: US DailyMed setid 68e45422 v19, UK eMC 10446 (03/10/2025), TFDA online HTML insert 027860 (change records 112/10/03 and 114/04/17; explicitly not the 2022 PDF), LactMed NBK500631/NBK501536, Epivir and Tivicay labels, PMIDs 30420123, 31905383, 39874132, Liverpool checker
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
