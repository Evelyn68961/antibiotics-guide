# New entry: Vemlidy (Tenofovir alafenamide)

- **Notion entry:** [Vemlidy (Tenofovir alafenamide)](https://app.notion.com/3f1c496dfff18170a390e7e58e8259de). Created 2026-10-06.
- **Hospital codes:** VEM01 (Vemlidy tab 25 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/tenofovir-alafenamide.json` (plus any Taiwan insert text files)

## Product and sources

Vemlidy (tenofovir alafenamide 25 mg film-coated tablet), Gilead. FJUH code VEM01, NHI BC27086100, ATC J05AF13. Taiwan licence 衛部藥輸字第027086號 (韋立得膜衣錠), insert version 4 updated 2025-03-10. US DailyMed setid 72e6b33c-0351-4070-9172-eeaa186c01d2 v17 (Jul 25, 2025; I checked the DailyMed history API and this is still the current version). UK SmPC eMC 2314, revised 14/11/2024. LactMed NBK621367, revised 2026-08-15. The 25 mg tablet is the only stocked form. The Notion page (https://app.notion.com/p/3f1c496dfff18170a390e7e58e8259de) is blank except for the title and Category, so every finding below is severity "missing" with proposed text. I could not compare against other HBV entries for style because Notion Query Data Source hit its workspace usage limit, so I matched the style of the local synced acyclovir entry in src/data/antibiotics.js instead.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 25 mg (1 tab) QD (TW仿單 3.1.2); take with food 隨餐服用 (US 2.2 / UK 4.2; TW仿單 does not mention food)<br>• With carbamazepine: 50 mg (2 tabs) QD (US/TW label); UK SmPC: co-administration not recommended<br>• Missed dose: <18 h late → take ASAP; >18 h → skip and resume schedule. Vomit <1 h after dose → take another tab (UK)<br>• Long-term therapy. UK: HBeAg+ non-cirrhotic → continue ≥6–12 mo after confirmed HBe seroconversion (or until HBs seroconversion / loss of efficacy); HBeAg− → at least until HBs seroconversion or loss of efficacy. Do not stop in cirrhosis (UK 4.4)

**Why:** The label dose is 25 mg once daily. US 2.2 and UK 4.2 say to take it with food; the Taiwan insert 3.1.2 says 'each day one 25 mg tablet' and does not mention food (its PK section notes a high-fat meal raises AUC 1.65×). The carbamazepine 2-tab rule is in US Table 4 and TW Table 1; UK Table 1 says 'Co-administration is not recommended' instead. Missed-dose, vomiting and stopping rules are from UK SmPC 4.2/4.4.

**Sources:** US DailyMed Vemlidy §2.2, §7.3 Table 4, §12.3 Table 5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert 韋立得 §3.1.2, §7.3 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC Vemlidy §4.2, §4.4, §4.5 Table 1 — https://www.medicines.org.uk/emc/product/2314/smpc

### A2 · Renal dose, HD, CRRT

CrCl ≥15: no adjustment (25 mg QD)<br>CrCl <15 on chronic HD: no adjustment; HD 日於透析後給藥 (give after HD on dialysis days)<br>CrCl <15 NOT on HD: not recommended (TW/US); UK: no dosing recommendation<br>HD: tenofovir efficiently removed (extraction coefficient ~54%)<br>CRRT/PD: no label data<br>Peds with renal impairment: no data (UK renal rule applies only to ≥12 y & ≥35 kg)

**Why:** The Taiwan insert 3.3.1/6.7 and US 2.3/8.6 agree word for word. UK 4.2 gives the same rule for adults and adolescents (≥12 y, ≥35 kg) and gives no recommendation for CrCl <15 without HD. The ~54% HD extraction is from US §10 and TW §9 (overdosage). No label or guideline covers CRRT, so the entry should say there are no data and not guess.

**Sources:** Taiwan insert §3.3.1, §6.7, §9 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US DailyMed §2.3, §8.6, §10 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC §4.2, §4.4 — https://www.medicines.org.uk/emc/product/2314/smpc

### A3 · Hepatic dose

Child-Pugh A/B/C: no adjustment (TW insert; UK SmPC)<br>US label: not recommended in decompensated (Child-Pugh B/C), as safety/efficacy not established<br>UK: limited data if CPT >9 (class C); monitor hepatic & renal parameters closely 失代償病人密切監測

**Why:** The labels disagree. TW §3.3.2 and §6.6 say no adjustment for 輕度、中度或重度 (Child-Pugh A、B或C級); the TW insert also includes Trial 4035 Part B (31 decompensated subjects, no additional ADRs over 24 weeks). UK 4.2 says no adjustment, and 4.4 notes limited data for CPT >9. US 2.4/8.7 says not recommended in Child-Pugh B/C. Under the ground rules the stocked product's Taiwan insert comes first and the US value is shown alongside.

**Sources:** Taiwan insert §3.3.2, §6.6, §8.2 (Trial 4035 Part B) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US DailyMed §2.4, §8.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC §4.2, §4.4 — https://www.medicines.org.uk/emc/product/2314/smpc

### A4 · Pediatric dose

≥6 y and ≥25 kg: <span color="blue">`PO`</span> 25 mg QD with food (same as adult)<br><6 y or <25 kg: safety/efficacy not established 未確立<br>Renal impairment in children: no data<br>UK: BMD decreases (≥4%) seen in some children; long-term bone effects uncertain, so plan bone monitoring

**Why:** US 2.2/8.4, TW 3.1.2/6.4 and UK 4.1/4.2 all give 25 mg daily for ages ≥6 y weighing ≥25 kg (Trial 1092, N=59 up to 96 weeks), and all say it is not established below that age or weight. The bone wording is from UK 4.4 (paediatric population).

**Sources:** US DailyMed §2.2, §2.3, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert §3.1.2, §3.3.1, §6.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC §4.2, §4.4 — https://www.medicines.org.uk/emc/product/2314/smpc

### A5 · Indications

HBV

**Why:** All three labels indicate chronic HBV in adults and children ≥6 y weighing ≥25 kg; the US label adds 'with compensated liver disease'. The 'HBV' option exists in the Indications schema. Do not tag HIV or HIV PrEP: Vemlidy alone must not be used for HIV.

**Sources:** US DailyMed §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/2314/smpc

### A6 · Coverage

HBV

**Why:** US §12.4 Microbiology reports activity against HBV genotypes A–H (EC50 34.7–134.4 nM) and activity against lamivudine-resistant (rtM204V/I) isolates. HIV is not proposed because the product is labelled for HBV only and monotherapy risks HIV resistance (US 5.2). The 'HBV' option exists in the Coverage schema.

**Sources:** US DailyMed §12.4 Microbiology, §5.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2

### A7 · Side Effects

GI, LFT↑, nephrotoxicity, AKI, lactic acidosis, bone loss, hypersensitivity

**Why:** Headache (12%) is the only adverse reaction at ≥10%; there is no headache tag, so it goes in Notes. Each tag is supported: GI from abdominal pain 9%, nausea 6%, diarrhoea/dyspepsia 5%; LFT↑ from ALT >5×ULN 8% and the post-treatment HBV flare (5.1); nephrotoxicity from 5.3 and postmarketing AKI/ATN/PRT/Fanconi (6.2); lactic acidosis from 5.4; bone loss from the BMD declines in §6.1 (smaller than with TDF) and UK 4.4 for paediatrics. All five options exist in the schema. Optional: 'hypersensitivity' for postmarketing angioedema/urticaria (UK 4.8: uncommon).

**Sources:** US DailyMed §5.1, §5.3, §5.4, §6.1 Tables 1–2, §6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert §5.1.3, §5.1.4, §8.2 表2–3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC §4.4, §4.8 — https://www.medicines.org.uk/emc/product/2314/smpc

### A8 · Monitor

renal, LFT, electrolyte, viral load, HBV serology

**Why:** Renal: SCr, CrCl, urine glucose and urine protein at baseline and during treatment (US 2.1/5.3, TW 3.1.1). Electrolyte: serum phosphorus in CKD. LFT: hepatic function during treatment and for at least several months after stopping (boxed warning / 5.1; UK 4.4 says ≥6 months). Viral load and HBV serology: HBV DNA and HBeAg/anti-HBe/HBsAg status decide the stopping rules (UK 4.2). Lipids is not proposed because no label requires lipid monitoring, though LDL >190 mg/dL occurred in 6% vs 1% on TDF (US Table 2); the owner may add it. The HIV test before starting has no tag and goes in Notes. All options exist in the schema.

**Sources:** US DailyMed §2.1, §5.1, §5.3, §6.1 Table 2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert 特殊警語, §3.1.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC §4.2, §4.4 — https://www.medicines.org.uk/emc/product/2314/smpc

### A9 · Mechanism

Phosphonamidate prodrug of tenofovir (acyclic dAMP nucleotide analogue) → enters hepatocytes (passive diffusion + OATP1B1/1B3) → hydrolysed by CES1 to tenofovir → phosphorylated to tenofovir diphosphate → incorporated by HBV reverse transcriptase → DNA chain termination. Weak inhibitor of mammalian DNA pol γ

**Why:** Paraphrased from US §12.4 'Mechanism of Action' and TW §10.1 作用機轉. The 'nucleotide' wording matches TW §1 (開環磷酸核苷(核苷酸)類似物).

**Sources:** US DailyMed §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert §1, §10.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F

### A10 · Drug Interactions

P-gp/BCRP substrate:<br>• Carbamazepine → ↑ Vemlidy to 50 mg (2 tabs) QD (US/TW); UK: not recommended<br>• Avoid (P-gp inducers ↓TAF): oxcarbazepine, phenobarbital, phenytoin, rifampin, rifabutin, rifapentine, St John's wort<br>• UK: avoid strong P-gp inhibitors (itraconazole, ketoconazole) and boosted HIV PIs (atazanavir, darunavir, lopinavir with RTV/COBI; tipranavir/r)<br>• Do not combine with other TDF-, TAF- or adefovir-containing products (UK)<br>• ↑ Renal risk (compete for tubular secretion): acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides, high-dose/multiple NSAIDs<br>• No significant interaction: sofosbuvir, LDV/SOF, SOF/VEL, SOF/VEL/VOX, ethinyl estradiol/norgestimate, midazolam, sertraline<br>• Others: check hep-druginteractions.org

**Why:** From US §7.1–7.4 / Table 4, TW §7.1–7.4 / 表1 and UK §4.4–4.5 / Table 1. The carbamazepine advice differs between labels: US and TW say double the dose, UK says avoid. Only the UK SmPC lists the azole and boosted-PI avoidance and the duplicate tenofovir/adefovir warning. The Liverpool checker is named in the specialist-drug ground rule.

**Sources:** US DailyMed §7.1–7.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert §7.1–7.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC §4.4, §4.5 Table 1 — https://www.medicines.org.uk/emc/product/2314/smpc; Liverpool HEP Drug Interactions — https://www.hep-druginteractions.org

### A11 · Pregnancy

No FDA letter category (PLLR narrative). APR (>1330 TAF-exposed live births): birth-defect rate 3.9% (1st trimester) / 4.8% (2nd/3rd), no significant difference vs 2.7% MACDP background; no embryo-fetal harm in rats/rabbits. UK: 300–1000 outcomes show no malformative or feto/neonatal toxicity, so TAF may be considered in pregnancy if necessary. 孕期可使用; register with the Antiretroviral Pregnancy Registry

**Why:** From US §8.1 and TW §6.1 (identical text) and UK 4.6. Letter categories are retired. Guideline MTCT-prophylaxis advice (e.g. AASLD 2018, PMID 29405329) can be added in the page body if the owner wants it. I have not quoted its specific TDF-vs-TAF wording because I did not check the full text.

**Sources:** US DailyMed §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert §6.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/2314/smpc

### A12 · Breastfeeding

Compatible 可哺乳 (LactMed): infant tenofovir exposure is trivial, and TAF gives even lower milk levels than TDF (undetectable in some studies); expert reviews and guidelines see no justification for avoiding it in HBV. Infant should get HBIG + HBV vaccine at birth. US/TW label: TAF and tenofovir are present in milk with no adverse effects reported, so weigh benefit vs risk. UK SmPC: 'should not be used during breast-feeding' (insufficient infant data). LactMed alternatives (HBV): interferon alfa, lamivudine

**Why:** LactMed is the source of choice for breastfeeding under the ground rules. The labels disagree: US 8.2 and TW 6.2 say weigh benefits, while UK 4.6 says do not use. Both views are shown so the conflict is visible.

**Sources:** LactMed Tenofovir Alafenamide (NBK621367, rev 2026-08-15) Summary of Use during Lactation / Drug Levels / Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK621367/; US DailyMed §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/2314/smpc

### A13 · Notes

⚠️ Boxed warning: severe acute HBV exacerbation after stopping. Monitor LFT clinically and by lab for ≥ several months (UK ≥6 mo) after discontinuation; resume therapy if needed. 停藥後B肝可能嚴重急性惡化，勿自行停藥<br>• Indication: chronic HBV, adults & children ≥6 y and ≥25 kg (US label adds 'compensated liver disease')<br>• Test HIV before starting; Vemlidy alone must NOT treat HIV (resistance risk). HIV/HBV coinfection → full ART regimen containing HBV-active drugs<br>• Baseline & periodic SCr, CrCl, urine glucose, urine protein (+ phosphate if CKD). Stop if clinically significant renal decline or Fanconi syndrome<br>• Lactic acidosis/severe hepatomegaly with steatosis: suspend if suspected<br>• Most common ADR: headache 12%. Smaller BMD and CrCl decline than TDF, but LDL ↑ (LDL >190 mg/dL 6% vs 1%)<br>• Contraindications: none (US/TW); UK: hypersensitivity. Contains lactose<br>• First-line oral HBV agent alongside entecavir & TDF (AASLD 2018; EASL 2017/2025)

**Why:** The boxed warning must go in Notes (ground rules). Each point is from a label: TW 特殊警語 / §5.1.1–5.1.4; US §1, §2.1, §4, §5.1–5.4, §6.1; UK §4.3, §4.4. The first-line statement is from guidelines whose PMIDs I verified with esummary: 29405329 (Terrault NA, Hepatology 2018;67:1560-1599), 28427875 (EASL, J Hepatol 2017;67:370-398) and 40348683 (EASL, J Hepatol 2025;83:502-583).

**Sources:** Taiwan insert 特殊警語, §5.1.1–5.1.4 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US DailyMed §1, §2.1, §4, §5.1–5.4, §6.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC §4.3, §4.4 — https://www.medicines.org.uk/emc/product/2314/smpc; AASLD 2018 HBV guidance, PMID 29405329 — https://pubmed.ncbi.nlm.nih.gov/29405329/; EASL 2017 HBV CPG, PMID 28427875 — https://pubmed.ncbi.nlm.nih.gov/28427875/; EASL 2025 HBV CPG, PMID 40348683 — https://pubmed.ncbi.nlm.nih.gov/40348683/

### A14 · Page body

Monograph in the style of the other entries: ## Tenofovir alafenamide (Vemlidy), then ### Category / ### Mechanism / ### Indications / ### Coverage / ### Adult Dose / ### Renal Dose / ### Hepatic Dose / ### Pediatric Dose / ### Side Effects / ### Monitor / ### Drug Interactions / ### Pregnancy / ### Breastfeeding / ### Notes (with a ⚠️ boxed-warning callout for the post-treatment HBV flare), condensed from A1–A13, plus ### References: Taiwan insert 衛部藥輸字第027086號 v4 (2025-03-10) URL; DailyMed setid 72e6b33c-0351-4070-9172-eeaa186c01d2 v17 (Jul 2025); eMC SmPC 2314 (rev 14/11/2024); LactMed NBK621367; AASLD 2018 (PMID 29405329); EASL 2017 (PMID 28427875); EASL 2025 (PMID 40348683); hep-druginteractions.org. No storage/stability content.

**Why:** Other entries carry a monograph body (e.g. the acyclovir page synced in src/data/antibiotics.js), and this one is blank. Every claim in it should be traceable to the sources above.

**Sources:** US DailyMed — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; Taiwan insert — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC — https://www.medicines.org.uk/emc/product/2314/smpc; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK621367/

### B1 · Adult dose

<span color="blue">`PO`</span> 25 mg tab (院內 VEM01): 25 mg QD (TW仿單 3.1.2 / FDA 2.2 / UK 4.2); take with food (FDA/UK; TW仿單 does not mention food; a high-fat meal ↑ TAF AUC 1.65×)<br>• With carbamazepine: 50 mg (2 tabs) QD (TW仿單 Table 1 / FDA 7.3); UK SmPC: co-administration not recommended<br>• Before starting: HIV test (Vemlidy alone must not be used in HIV); SCr, CrCl, urine glucose, urine protein (+ serum phosphate in CKD) at baseline and during therapy (TW仿單 3.1.1 / FDA 2.1)<br>• Missed dose: <18 h late → take as soon as possible; >18 h → skip it. Vomiting <1 h after a dose → take another tablet (UK 4.2)<br>• Stopping (UK 4.2): HBeAg+ without cirrhosis → continue ≥6–12 months after confirmed HBe seroconversion, or until HBs seroconversion or loss of efficacy; HBeAg− without cirrhosis → at least until HBs seroconversion or loss of efficacy; cirrhosis → stopping not recommended (UK 4.4)

**Why:** Column is empty. I checked all three labels myself: 25 mg once daily. Food: US 2.2 and UK 4.2 say 'with food'; the TW insert 3.1.2 says only 'once daily'. The carbamazepine dose differs by label: TW Table 1 and US Table 4 say increase to 2 tablets once daily, while UK 4.5 Table 1 says co-administration is not recommended. The brief gives only the TW/US version. Missed-dose and stopping rules come from UK 4.2.

**Sources:** TW insert 3.1.1, 3.1.2, Table 1 (7.3) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 2.1, 2.2, 7.3 Table 4, 12.3 Table 5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.2, 4.4, 4.5 https://www.medicines.org.uk/emc/product/2314/smpc

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> **TW仿單 (院內 VEM01, leads) = FDA 2.3/8.6**: CrCl ≥15 → no adjustment (25 mg QD). CrCl <15 on chronic HD → no adjustment; on HD days give **after** HD. ESRD (CrCl <15) not on HD → not recommended. Children with renal impairment: no data<br>UK SmPC 4.2: same rule for adults and adolescents ≥12 y and ≥35 kg; CrCl <15 not on HD → no dosing recommendation; no data <12 y/<35 kg; very limited data on HD (4.4)<br>Evidence: Study 4035, virally suppressed patients switched to TAF: CrCl 15–59 (n=78) and ESRD on HD (n=15) → 98% HBV DNA <20 IU/mL at wk 24, safety similar (FDA 8.6; Janssen 2024, PMID 38901444). Tenofovir exposure ↑ in ESRD on HD (higher in HBV than HIV patients; significance not established) (FDA 8.6)<br>HD: tenofovir removed, extraction coefficient ≈54% (FDA 10 / UK 4.9 / TW仿單 9)<br>PD: removal unknown (UK 4.9); one PD case on FTC/TAF had a plasma tenofovir trough ≈15× normal (Massih 2024, PMID 38773606) → no dosing recommendation<br>CRRT: no label or published dosing data

**Why:** Column is empty. I re-read the renal rule in all three labels and they agree: no adjustment at CrCl ≥15 or in ESRD on chronic HD (dose after HD); not recommended in ESRD without HD. The UK SmPC limits its rule to adults and adolescents ≥12 y/≥35 kg and gives 'no recommendation' for CrCl <15 without HD. A PubMed search for TAF plus CRRT/CVVH/haemofiltration found only an overdose case report (PMID 34824925), so there is no CRRT dosing data. For PD there is one PK case report showing tenofovir accumulation. PMIDs 38901444 and 38773606 were checked with esummary and their abstracts read.

**Sources:** TW insert 3.3.1, 6.7, 9 (overdose) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 2.3, 8.6, 10 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.2, 4.4, 4.9 https://www.medicines.org.uk/emc/product/2314/smpc; Janssen HLA et al. Lancet Gastroenterol Hepatol 2024;9:718-733, PMID 38901444 https://pubmed.ncbi.nlm.nih.gov/38901444/; Massih SA et al. AIDS Res Ther 2024;21:34, PMID 38773606 https://pubmed.ncbi.nlm.nih.gov/38773606/

### B3 · Hepatic dose

**TW仿單 (院內 VEM01, leads)**: no adjustment in Child-Pugh A, B or C (3.3.2 / 6.6)<br>UK SmPC 4.2: no adjustment; limited data in decompensated disease with CPT >9 (class C) → monitor hepatic and renal parameters closely (4.4)<br>FDA 2.4/8.7: no adjustment in Child-Pugh A; **not recommended** in decompensated disease (Child-Pugh B/C), as safety and efficacy are not established<br>Study 4035 Part B: virally suppressed CPT 7–12 patients switched to TAF → 100% HBV DNA <20 IU/mL at wk 24, no new safety signals (PMID 38901444)<br>Cirrhosis: flares carry a higher risk of decompensation → monitor closely; do not stop treatment (UK 4.4)

**Why:** Column is empty. The labels disagree: TW 6.6 (line 95 of the saved insert) says no adjustment for Child-Pugh A, B or C; UK 4.2 says no adjustment, with a caution for CPT >9; US 2.4/8.7 says not recommended in Child-Pugh B/C. Under the ground rules the stocked product's TW insert leads, with the US value shown alongside.

**Sources:** TW insert 3.3.2, 6.6 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 2.4, 8.7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.2, 4.4 https://www.medicines.org.uk/emc/product/2314/smpc; Janssen 2024 PMID 38901444 https://pubmed.ncbi.nlm.nih.gov/38901444/

### B4 · Pediatric dose

<span color="blue">`PO`</span> ≥6 y and ≥25 kg: 25 mg QD (with food per FDA/UK), same as adults (TW仿單 3.1.2 / FDA 2.2 / UK 4.2)<br><6 y or <25 kg: not established (TW仿單 6.4 / FDA 8.4 / UK 4.2)<br>Renal impairment: no data in children (TW/FDA); UK: no data <12 y and <35 kg<br>BMD ↓ ≥4% (lumbar spine/whole body) in some children over 48 wk; long-term effect on growing bone unknown → multidisciplinary monitoring (UK 4.4/4.8)

**Why:** Column is empty. All three labels approve use from 6 years and 25 kg (Study 1092, N=59, up to 96 weeks).

**Sources:** TW insert 3.1.2, 6.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 2.2, 2.3, 8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.2, 4.4, 4.8 https://www.medicines.org.uk/emc/product/2314/smpc

### B5 · Indications

HBV

**Why:** Chronic HBV is the only indication. TW 2: 6 歲以上且體重至少25公斤之慢性B型肝炎. US 1 also requires 'compensated liver disease'. UK 4.1 covers adults and children ≥6 y/≥25 kg. The 'HBV' option exists in the schema. Do not tag HIV: the product is not indicated for HIV.

**Sources:** TW insert 2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/2314/smpc

### B6 · Coverage

HBV

**Why:** Active against HBV genotypes A–H (UK 5.1). Tenofovir is also active against HIV-1/2 (UK 5.1), but TAF 25 mg alone is not recommended for HIV because of the resistance risk (TW 5.1.2 / US 5.2). Tag HBV only and explain the HIV point in Notes.

**Sources:** UK SmPC 5.1 https://www.medicines.org.uk/emc/product/2314/smpc; TW insert 5.1.2, 10.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F

### B7 · Side Effects

GI, LFT↑, nephrotoxicity, AKI, bone loss, lactic acidosis, weight gain, hypersensitivity

**Why:** All tags exist in the schema. The brief proposed only bone loss, lactic acidosis and nephrotoxicity, which leaves out label-listed effects. GI: abdominal pain 9%, nausea 6%, diarrhoea and dyspepsia 5% (TW Table 2; UK 4.8 common). LFT↑: ALT increase is common (UK 4.8), plus on-treatment and post-treatment flares (UK 4.4). AKI: postmarketing acute renal failure (TW 5.1.3 / US 5.3). nephrotoxicity: proximal tubulopathy and Fanconi syndrome. bone loss: BMD falls, smaller than with TDF. lactic acidosis: TW 5.1.4 / US 5.4. weight gain: UK 4.8 says 'Body weight and levels of blood lipids and glucose may increase'. hypersensitivity: angioedema and urticaria (UK 4.8, uncommon, postmarketing). Headache (12%, the only effect ≥10%) has no matching tag, so put it in the body.

**Sources:** TW insert 5.1.3, 5.1.4, 8.2 Table 2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 5.3, 5.4, 6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.4, 4.8 https://www.medicines.org.uk/emc/product/2314/smpc

### B8 · Monitor

renal, LFT, viral load, HBV serology, electrolyte

**Why:** renal: SCr, CrCl, urine glucose and urine protein at baseline and during therapy (TW 3.1.1 / US 2.1). electrolyte: serum phosphate in CKD (same sections). LFT: ALT flares on treatment, and hepatic function for at least 6 months after stopping (UK 4.4; boxed warning). viral load (HBV DNA) and HBV serology (HBeAg/anti-HBe, HBsAg) define the stopping rules in UK 4.2. 'lipids' is optional: LDL >190 mg/dL occurred in 6% vs 1% on TDF (US 6.1). TDM does not apply. The baseline HIV test has no tag, so put it in Notes.

**Sources:** TW insert 3.1.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 2.1, 5.1, 6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.2, 4.4 https://www.medicines.org.uk/emc/product/2314/smpc

### B9 · Mechanism

Phosphonamidate **prodrug of tenofovir** (2′-deoxyadenosine monophosphate analogue; nucleotide RTI). Enters hepatocytes by passive diffusion and OATP1B1/1B3, is hydrolysed by CES1 to tenofovir, then phosphorylated to tenofovir diphosphate, which HBV reverse transcriptase incorporates into viral DNA → chain termination. Weak inhibitor of mammalian DNA polymerases, including mitochondrial pol γ. Active against HBV (genotypes A–H) and HIV-1/2 (TW仿單 10.1 / UK 5.1)

**Why:** Column is empty. Text is taken from TW insert 10.1 and UK SmPC 5.1, which say the same thing.

**Sources:** TW insert 10.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; UK SmPC 5.1 https://www.medicines.org.uk/emc/product/2314/smpc

### B10 · Drug Interactions

P-gp/BCRP substrate; not a CYP3A inhibitor or inducer (UK 4.5)<br>• **Carbamazepine** ↓ TAF (AUC 0.45×) → TW仿單/FDA: 50 mg (2 tabs) QD; UK: not recommended<br>• **Not recommended** (P-gp inducers ↓ TAF): oxcarbazepine, phenobarbital, phenytoin, rifampin, rifabutin, rifapentine, St John's wort (TW仿單 Table 1 / FDA 7.3 / UK 4.5)<br>• UK only, not recommended: strong P-gp inhibitors itraconazole and ketoconazole (↑ TAF); atazanavir/c or /r, darunavir/c or /r, lopinavir/r (tenofovir AUC ↑2–4×), tipranavir/r (↓ TAF); any other product containing TAF, TDF or adefovir<br>• Renal: drugs that ↓ renal function or compete for tubular secretion (acyclovir, valacyclovir, ganciclovir, valganciclovir, cidofovir, aminoglycosides, high-dose or multiple NSAIDs) → ↑ tenofovir and adverse effects (TW仿單 7.2 / FDA 7.2)<br>• No dose change needed: sofosbuvir, ledipasvir/sofosbuvir (tenofovir AUC ↑1.75×), sofosbuvir/velpatasvir(/voxilaprevir), ethinyl estradiol/norgestimate, midazolam, sertraline (TW仿單 7.4 / FDA 7.4); dolutegravir, raltegravir, rilpivirine, efavirenz (UK 4.5)<br>• Anything else, incl. HIV ART → check hep-druginteractions.org (Liverpool)

**Why:** Column is empty. The brief summarised only the TW/US table and missed several UK SmPC items: carbamazepine 'not recommended'; strong P-gp inhibitors (itraconazole, ketoconazole) not recommended; boosted PIs not recommended because tenofovir AUC rises 2–4×; and no co-administration with other TAF, TDF or adefovir products.

**Sources:** TW insert 7.1–7.4 Table 1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 7.1–7.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.4, 4.5 Table 1 https://www.medicines.org.uk/emc/product/2314/smpc; Liverpool HEP Drug Interactions https://www.hep-druginteractions.org/

### B11 · Pregnancy

孕期可考慮使用. No letter category (FDA PLLR). APR: >1,330 TAF-exposed live births (>1,080 first-trimester); birth-defect prevalence 3.9% (1st trimester) / 4.8% (2nd/3rd), no statistically significant ↑ vs the MACDP background of 2.7%; no embryo-fetal toxicity in rats or rabbits (TW仿單 6.2 / FDA 8.1). UK 4.6: 300–1,000 outcomes with no malformative or feto/neonatal toxicity → may be considered in pregnancy if necessary. MTCT prophylaxis study (TAF n=78 vs TDF): infant HBsAg+ 1.3% vs 1.8% at 12 months; postpartum ALT flares common with both (Chen 2024, PMID 38456620)

**Why:** Column is empty. The pregnancy wording is label-based, with no letter category, per the ground rules. The MTCT study abstract was read and the PMID checked with esummary. Do not copy the hospital's HIV/HBV switch-to-TDF sentence (see hospital issues).

**Sources:** TW insert 6.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/2314/smpc; Chen HL et al. Liver Int 2024;44:1422-1434, PMID 38456620 https://pubmed.ncbi.nlm.nih.gov/38456620/

### B12 · Breastfeeding

可哺乳 (LactMed): TAF and tenofovir pass into milk at low levels; infant tenofovir exposure is trivial, and TAF gives lower milk levels than TDF; in hepatitis B there is no justification for contraindicating breastfeeding (infant should get HBIG + HBV vaccine at birth). TW仿單 6.1 / FDA 8.2: no adverse effects reported in breastfed infants; weigh benefit against risk. UK SmPC 4.6: a risk cannot be excluded → should not be used during breastfeeding (label conflict). LactMed alternatives for HBV: interferon alfa, lamivudine

**Why:** Column is empty. The brief left out that the UK SmPC 4.6 says 'tenofovir alafenamide should not be used during breast-feeding'. This conflicts with LactMed, which is the designated source for breastfeeding, so it should be shown alongside.

**Sources:** LactMed Tenofovir Alafenamide NBK621367 (rev. 2026-08-15) https://www.ncbi.nlm.nih.gov/books/NBK621367/; TW insert 6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/2314/smpc

### B13 · Notes

院內 VEM01 Vemlidy 25 mg tab (韋立得膜衣錠, 衛部藥輸字第027086號), PO only<br>⚠️ **Boxed warning (TW仿單/FDA)**: stopping anti-HBV therapy can cause severe acute hepatitis B exacerbation → clinical and laboratory follow-up for at least several months after stopping (UK: ≥6 months); restart therapy if appropriate. Advanced liver disease or cirrhosis → do not stop (UK 4.4). 停藥後B肝可能嚴重急性惡化，勿自行停藥<br>HIV: test before starting; Vemlidy alone → risk of HIV-1 resistance; in HBV/HIV coinfection use a full ART regimen (TW仿單 5.1.2 / FDA 5.2). No HIV tag: tenofovir is active against HIV, but this product is not indicated for it<br>Renal: new or worsening renal impairment, incl. AKI, proximal tubulopathy and Fanconi syndrome (postmarketing) → stop if renal function falls significantly or Fanconi develops (TW仿單 5.1.3 / FDA 5.3)<br>Lactic acidosis / severe hepatomegaly with steatosis (NA class effect) → suspend (TW仿單 5.1.4)<br>Vs TDF at wk 96: smaller BMD loss (spine −0.7% vs −2.6%) and smaller renal-lab changes, but more LDL >190 mg/dL (6% vs 1%) (FDA 6.1 / TW仿單 8.2). A first-line NA for chronic HBV alongside entecavir and TDF (AASLD 2018, PMID 29405329; EASL 2025, PMID 40348683)<br>Resistance: no TAF-resistance substitutions through 96 wk; lamivudine- and entecavir-resistant isolates <2-fold change; adefovir rtA181V+rtN236T 3.7-fold ↓ (FDA 12.4 / UK 5.1)<br>Does not prevent HBV transmission (UK 4.4). No data in HCV or HDV coinfection (UK 4.4)<br>Contraindications: none (TW仿單/FDA); UK: hypersensitivity. Contains lactose (UK 4.4)

**Why:** Column is empty. The boxed warning must go in Notes under the ground rules. The brief noted that the fetch missed the US boxed-warning block. The same content is in US 5.1, and the TW insert prints the boxed warning (特殊警語) at its top, so the warning is label-verified. For the guideline sentence, only the bibliographic details of PMIDs 29405329 and 40348683 were checked with esummary; their abstracts do not name preferred agents, so the 'first-line with ETV/TDF' wording relies on the guideline full text (AASLD 2018 lists ETV, TDF, TAF and PEG-IFN as preferred). Have the pharmacist confirm it, or drop that sentence.

**Sources:** TW insert boxed warning, 5.1.1–5.1.4, 8.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 5.1–5.4, 6.1, 12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.3, 4.4, 5.1 https://www.medicines.org.uk/emc/product/2314/smpc; Terrault NA et al. AASLD 2018 HBV guidance, Hepatology 2018;67:1560-1599, PMID 29405329 https://pubmed.ncbi.nlm.nih.gov/29405329/; EASL CPG on HBV, J Hepatol 2025;83:502-583, PMID 40348683 https://pubmed.ncbi.nlm.nih.gov/40348683/

### B14 · Page body

Follow the ValTREX page layout: ## Tenofovir alafenamide (Vemlidy), then sections ### Category / Mechanism / Indications / Coverage / Adult Dose / Renal Dose / Hepatic Dose / Pediatric Dose / Side Effects / Monitoring / Drug Interactions / Pregnancy / Breastfeeding / Notes / References, separated by ---, with content as in B1–B13 (B13 as edited).<br>Notes section: begin with a ⚠️ callout for the boxed warning: severe acute HBV exacerbation after stopping; monitor clinically and by lab for ≥ several months (UK ≥6 mo); do not stop in cirrhosis. Then cover the HIV test before starting (Vemlidy alone must not be used in HIV), renal/Fanconi, lactic acidosis, and the TDF comparison.<br>Side Effects section: **Common:** headache 12% (the only effect ≥10%), abdominal pain 9%, cough 8%, back pain, fatigue, nausea 6%, arthralgia, diarrhoea, dyspepsia 5%; dizziness, rash, pruritus, flatulence, ALT ↑ (TW仿單 8.2 Table 2 / UK 4.8). Lab changes: LDL >190 mg/dL 6%, glycosuria ≥3+ 5%, ALT >5×ULN 8% (FDA 6.1). **Serious:** post-treatment HBV flare (boxed); renal impairment / PRT / Fanconi; lactic acidosis with hepatomegaly; angioedema and urticaria (UK, postmarketing); BMD ↓ (children ≥4%).<br>No storage/stability content.<br>References:<br>1. TW仿單 韋立得膜衣錠 衛部藥輸字第027086號 (v4, 114/03/10): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F<br>2. US FDA label Vemlidy, DailyMed setid 72e6b33c-0351-4070-9172-eeaa186c01d2 (v17, Jul 2025): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2<br>3. UK SmPC Vemlidy 25 mg (eMC 2314, rev. 14/11/2024): https://www.medicines.org.uk/emc/product/2314/smpc<br>4. LactMed Tenofovir Alafenamide NBK621367 (rev. 2026-08-15): https://www.ncbi.nlm.nih.gov/books/NBK621367/<br>5. Janssen HLA et al. Lancet Gastroenterol Hepatol 2024;9:718-733, PMID 38901444<br>6. Massih SA et al. AIDS Res Ther 2024;21:34, PMID 38773606<br>7. Chen HL et al. Liver Int 2024;44:1422-1434, PMID 38456620<br>8. Terrault NA et al. Hepatology 2018;67:1560-1599, PMID 29405329<br>9. EASL CPG HBV, J Hepatol 2025;83:502-583, PMID 40348683<br>10. Liverpool HEP interaction checker: https://www.hep-druginteractions.org/

**Why:** The page body is blank. Established entries such as ValTREX carry a structured body with a numbered reference list, so this entry needs one too. Every PMID listed was checked with NCBI esummary.

**Sources:** TW insert 8.2 Table 2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027086%E8%99%9F; US FDA label 6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2; UK SmPC 4.8 https://www.medicines.org.uk/emc/product/2314/smpc

## Apply log

- Adult dose: merged A+B (25 mg QD with food, carbamazepine 50 mg QD vs UK not recommended, pre-treatment HIV/renal tests, missed-dose/vomiting rule, UK stopping rules)
- Renal dose, HD, CRRT: merged; TW insert leads (=FDA), UK values alongside, Study 4035 evidence, HD extraction ~54%, give after HD, PD case (PMID 38773606), CRRT no data, peds no data
- Hepatic dose: TW/UK no adjustment A/B/C; FDA not recommended in decompensated disease; UK CPT>9 monitor closely 失代償病人密切監測; Study 4035 Part B; do not stop in cirrhosis
- Pediatric dose: >=6 y and >=25 kg 25 mg QD; <6 y/<25 kg not established 未確立; renal no data; BMD monitoring
- Indications: [HBV]
- Coverage: [HBV]
- Side Effects: [GI, LFT↑, nephrotoxicity, AKI, bone loss, lactic acidosis, weight gain, hypersensitivity]
- Monitor: [renal, LFT, viral load, HBV serology, electrolyte]
- Mechanism: phosphonamidate tenofovir prodrug, OATP1B1/1B3, CES1, TFV-DP chain termination, weak pol γ inhibitor, HBV A–H and HIV-1/2 activity
- Drug Interactions: P-gp/BCRP substrate; carbamazepine; P-gp inducers avoid; UK-only itraconazole/ketoconazole/boosted PIs/other TAF-TDF-adefovir products; renal-competing drugs; no-interaction list; Liverpool checker
- Pregnancy: no letter category (PLLR), APR data, UK 4.6, MTCT study PMID 38456620, register with APR
- Breastfeeding: LactMed compatible 可哺乳, TW/FDA weigh benefit-risk, UK SmPC should not be used (label conflict), alternatives
- Notes: hospital product VEM01 and licence; boxed warning post-treatment HBV flare; indication incl. US 'compensated liver disease'; HIV testing/coinfection; renal/Fanconi; lactic acidosis; headache 12% and TDF comparison; guidelines AASLD 2018/EASL 2017/EASL 2025; resistance; contraindications/lactose
- Page body: full monograph (## Tenofovir alafenamide (Vemlidy) with Category/Mechanism/Indications/Coverage/Adult/Renal/Hepatic/Pediatric Dose/Side Effects/Monitoring/Drug Interactions/Pregnancy/Breastfeeding/Notes with ⚠️ boxed-warning callout), separated by dividers, no storage content
- References section appended: TW insert 衛部藥輸字第027086號 v4 2025-03-10, DailyMed setid 72e6b33c v17 Jul 2025, eMC SmPC 2314 rev 14/11/2024, LactMed NBK621367 rev 2026-08-15, PMIDs 38901444, 38773606, 38456620, 29405329, 28427875, 40348683, hep-druginteractions.org
- Renewed date set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
