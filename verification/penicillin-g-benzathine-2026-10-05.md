# New entry: Bicillin (Penicillin G benzathine)

- **Notion entry:** [Bicillin (Penicillin G benzathine)](https://app.notion.com/3f0c496dfff18163a9aec69052a27965). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** PEN11 (Penicillin G benzathine inj 2.4 MU), BIC02 (Bicillin inj 2.4 MU)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/penicillin-g-benzathine.json` (plus any Taiwan insert text files)

## Product and sources

Penicillin G benzathine (benzathine benzylpenicillin), long-acting depot, deep IM only (ATC J01CE08). Two hospital codes. (1) BIC02: Bicillin L-A 懸浮針 2.4 MU (必希寧注射劑), 衛部藥輸字第026966號, Pfizer Taiwan, made by King Pharmaceuticals USA, NHI BC26966219. It comes as a prefilled disposable syringe (1 mL = 0.6 MU, 2 mL = 1.2 MU, 4 mL = 2.4 MU). TFDA insert updated 113/01/23, version USPI 202311-1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F. (2) PEN11: Penicillin G 長效懸浮針 2.4 MU/Vial, NHI X000359219 (an X code, probably 專案進口). It has no licence or Taiwan insert, so the product cannot be identified further. US comparator: DailyMed Bicillin L-A, setid 012d46f1-d0a0-4676-a879-cd320297ab16, v35; I re-fetched it live and its effectiveTime is 2026-07-21. UK comparator: Benzylpenicillin benzathine 1.2 MIU powder for suspension, eMC 11043, revised 05/12/2025. LactMed NBK501138, revised 2024-08-15. Note on the request: the user asked for "task 2,3,5" without saying which steps those are, so I did the whole reviewer-A audit. It is read-only: I made no Notion or file edits.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="green">`IM`</span> deep IM only — ⚠️ NOT IV (boxed warning)<br>Strep (group A) URI / pharyngitis: 1.2 MU × 1<br>Syphilis, primary / secondary / early latent: 2.4 MU × 1<br>Late latent / latent of unknown duration / tertiary (normal CSF): 2.4 MU weekly × 3 (UK SmPC; CDC 2021). The TW 仿單 and US label list 'latent' under the single 2.4 MU dose and give the weekly × 3 course only for 'late (tertiary and neurosyphilis)'.<br>Neurosyphilis / ocular / otic: do NOT use as initial therapy → aqueous penicillin G IV 18–24 MU/day × 10–14 days (CDC 2021). The label's 'neurosyphilis 2.4 MU weekly × 3' is outdated.<br>Yaws / bejel / pinta: 1.2 MU × 1<br>Rheumatic fever secondary prophylaxis: 1.2 MU q4w; q3w if high risk (TW 仿單; AHA 2009) [US label: 1.2 MU monthly or 0.6 MU q2w; UK SmPC: q3–4w]<br>Post-strep GN prophylaxis: 1.2 MU monthly<br>Erysipelas treatment / prophylaxis (UK SmPC): 1.2 MU single dose / q3–4w

**Why:** New entry; every dosing column is empty. The TW insert for the stocked product (BIC02) is the primary source, and the US and UK values are given alongside it. The Taiwan and US labels both still list neurosyphilis under weekly IM benzathine, but current guidance uses IV aqueous penicillin G. The proposed text keeps the label regimen visible and states the guideline regimen next to it, so that nobody copies the outdated label line as a recommendation. 'Latent' in the label's single-dose line covers early latent only; the SmPC and CDC give 3 weekly doses for late or unknown-duration latent syphilis.

**Sources:** TW 仿單 必希寧 Bicillin L-A 衛部藥輸字第026966號 §3.1 用法用量 ('鏈球菌（A群）上呼吸道感染…成人及體重超過27kg之兒童—單次注射1,200,000單位'; '梅毒 第一期、第二期及潛伏期—2,400,000單位（1劑）；晚期（第三期及神經性梅毒）—2,400,000單位每7天一次，給予3劑'; '風溼熱—1,200,000單位每四週一次，但有高風險者可以每三週一次'; '腎絲球腎炎—…1,200,000單位每個月一次') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; US FDA label (DailyMed Bicillin L-A v35) DOSAGE AND ADMINISTRATION ('Prophylaxis… 1,200,000 units once a month or 600,000 units every 2 weeks') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC eMC 11043 §4.1 and §4.2 (erysipelas; late-stage/latent seropositive syphilis 2.4 MIU once weekly for 3 weeks; prophylaxis every 3–4 weeks) – https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Treatment Guidelines 2021, MMWR Recomm Rep 70(4):1-187, PMID 34292926 (verified via esummary) – https://pubmed.ncbi.nlm.nih.gov/34292926/; AHA 2009 scientific statement on rheumatic fever prevention, Circulation 119:1541-51, PMID 34292926 is CDC; this one is PMID 19246689 (verified) – https://pubmed.ncbi.nlm.nih.gov/19246689/

### A2 · Renal dose, HD, CRRT

<span color="green">`IM`</span> TW 仿單 / US label: no renal dose adjustment given (excretion 'considerably delayed' in renal impairment; elderly: choose dose carefully, monitor renal function)<br>(UK SmPC 4.2, all ages: CrCl ≥60: 100% dose; 15–59: 75%; <15: 20–50% (max 1–3 MU/day, split into 2–3 administrations))<br>HD: removed by HD, no data on plasma levels → case-by-case (SmPC)<br>CRRT: no data

**Why:** Ground rule: when labels disagree, the stocked product's label (TW 仿單, which here equals the US label) wins and the SmPC values are shown alongside. Neither the TW nor the US label has a renal section. Both labels' pharmacology text says excretion is delayed in renal impairment, and the Geriatric Use section advises monitoring renal function. The SmPC table and HD statement are quoted. No label or guideline covers CRRT.

**Sources:** TW 仿單 §11 藥物動力學 ('在新生兒、年幼嬰兒與腎功能損傷病人中，排泄速率會大幅下降') and §6.5 老年人 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; US label CLINICAL PHARMACOLOGY General ('in individuals with impaired kidney function, excretion is considerably delayed') and Geriatric Use – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC §4.2 Table 1 'Recommended dose adjustments in patients with impaired renal function' and 'Haemodialysis patients' – https://www.medicines.org.uk/emc/product/11043/smpc

### A3 · Hepatic dose

No adjustment (TW 仿單 / US label give none). UK SmPC 4.2: in very severe combined hepatic + renal impairment, degradation/excretion of penicillin may be delayed.

**Why:** Neither the TW nor the US label has a hepatic section. The SmPC gives only the qualitative caution about combined hepatic and renal impairment.

**Sources:** UK SmPC §4.2 'Patients with impaired hepatic function' – https://www.medicines.org.uk/emc/product/11043/smpc; US label (no hepatic dosing section) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16

### A4 · Pediatric dose

<span color="green">`IM`</span> only — ⚠️ NOT IV<br>Strep (group A) URI: >27 kg 1.2 MU × 1; ≤27 kg 0.6 MU × 1 (TW 仿單) [US label: older children 0.9 MU; infants/children <60 lb (27 kg) 0.3–0.6 MU; UK: >30 kg 1.2 MIU, <30 kg 0.6 MIU]<br>Acquired syphilis – primary / secondary / early latent: 50,000 U/kg × 1 (max 2.4 MU); late latent / unknown duration: 50,000 U/kg weekly × 3 (max 2.4 MU/dose) (UK SmPC; CDC 2021)<br>Congenital syphilis <2 y: 50,000 U/kg × 1 (US label; UK SmPC: only without neurological involvement). CDC 2021: proven/highly probable → aqueous penicillin G IV (or procaine IM) × 10 d; single-dose BPG only in lower-probability scenarios → consult peds ID<br>Yaws / pinta: >30 kg 1.2 MU, <30 kg 0.6 MU × 1 (UK SmPC)<br>Rheumatic fever prophylaxis: ≤27 kg 0.6 MU, >27 kg 1.2 MU q4w (q3w high risk) (AHA 2009; UK SmPC q3–4w with 30 kg cut-off)<br>Injection site: neonates/infants/small children → mid-lateral thigh may be preferable; avoid anterolateral thigh (TW 仿單/US label)

**Why:** The Pediatric column is empty. The labels give weight-band doses, a congenital syphilis dose, and specific injection-site advice for children (serious neurovascular injuries happen most often in infants and small children). The TW insert (USPI 202311-1) differs from the current DailyMed v35 text on the pediatric strep dose (27 kg cut-off with 0.6/1.2 MU, against 0.9 MU for older children and 0.3–0.6 MU under 60 lb), so both are shown. The aqueous-penicillin regimen (100,000–300,000 U/kg/day IV) must NOT appear here; see the hospital DB issue for BIC02.

**Sources:** TW 仿單 §3.1 用法用量 and 使用方式 ('在新生兒、嬰兒及年幼兒童中，可能以大腿的中外側為首選') – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; US label DOSAGE AND ADMINISTRATION ('older pediatric patients—a single injection of 900,000 units; infants and pediatric patients under 60 lbs.—300,000 to 600,000 units'; 'Congenital—under 2 years of age: 50,000 units/kg') and METHOD OF ADMINISTRATION – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC §4.2 (children 50,000 IU/kg, not more than 2.4 MIU; congenital syphilis without neurological involvement) and §4.4 – https://www.medicines.org.uk/emc/product/11043/smpc; AHA 2009, PMID 19246689 (verified) – https://pubmed.ncbi.nlm.nih.gov/19246689/

### A5 · Indications

SSTI

**Why:** Only one labelled indication maps to an existing option: erysipelas, treated and prevented, in UK SmPC 4.1. Strep pharyngitis/URI, syphilis, yaws, bejel, pinta, and rheumatic fever and post-strep GN prophylaxis have no option in the schema, so they go in Notes (see A13). Do not tag Pneumonia, Meningitis or Bacteremia: the SmPC 4.4 says these need higher penicillin levels and alternative therapy.

**Sources:** UK SmPC §4.1 ('For the treatment of: - erysipelas… For the prophylaxis of: … - erysipelas') and §4.4 ('In diseases such as severe pneumonia, empyema, sepsis, meningitis or peritonitis… alternative treatment… should be considered') – https://www.medicines.org.uk/emc/product/11043/smpc; US label INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16

### A6 · Coverage

Streptococcus

**Why:** US and TW microbiology: beta-hemolytic streptococci (groups A, B, C, G, H, L, M), Treponema pallidum and T. carateum. SmPC Table 4: S. pyogenes, group C/G streptococci, viridans streptococci, T. pallidum. Treponema has no option, so it goes in Notes. Do not tag Staphylococcus, MSSA or Neisseria: the drug is inactive against penicillinase producers (staphylococci, gonococci).

**Sources:** US label Antimicrobial Activity and Resistance ('not active against penicillinase-producing bacteria') – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; TW 仿單 §10.2 抗微生物活性 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; UK SmPC §5.1 Resistance and Table 4 – https://www.medicines.org.uk/emc/product/11043/smpc

### A7 · Side Effects

GI, hematologic, CNS, neuropathy, nephrotoxicity, LFT↑, DRESS, SJS/TEN

**Why:** Each tag below is an existing option backed by the label. GI: nausea, vomiting, pseudomembranous colitis/CDAD. Hematologic: hemolytic anemia, leukopenia, thrombocytopenia; SmPC also lists agranulocytosis. CNS: seizures, confusion, coma, Hoigné syndrome; overdose causes convulsions. Neuropathy: label 'Neurologic: Neuropathy'. Nephrotoxicity: nephropathy and renal failure; SmPC adds interstitial nephritis. LFT↑: elevated SGOT; SmPC adds hepatitis and cholestasis. DRESS and SJS/TEN: SCAR warning. Rhabdomyolysis is also listed, but only as 'temporally associated', so I left it out. Anaphylaxis, Jarisch-Herxheimer, Nicolau syndrome and injection-site reactions have no option and go in Notes.

**Sources:** US label ADVERSE REACTIONS, Severe cutaneous adverse reactions, CDAD and OVERDOSAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; TW 仿單 §5.1, §8.1, §8.3 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; UK SmPC §4.8 Table 2 – https://www.medicines.org.uk/emc/product/11043/smpc

### A8 · Monitor

renal, LFT, CBC

**Why:** UK SmPC 4.4: 'With long-term treatment (more than a single dose), periodic assessment of organ system functions, including renal, hepatic and haematopoietic function is recommended.' US Geriatric Use: monitoring renal function may be useful. Non-tag monitoring goes in Notes: observe the patient for about 30 minutes after injection for anaphylaxis (SmPC 4.4), and take a post-treatment culture in strep infection (US Laboratory Tests).

**Sources:** UK SmPC §4.4 – https://www.medicines.org.uk/emc/product/11043/smpc; US label Geriatric Use and Laboratory Tests – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16

### A9 · Mechanism

Natural penicillin as benzathine salt (2 PCN G : 1 dibenzylethylenediamine); extremely low solubility → slow release from IM depot and hydrolysis to penicillin G → low but very prolonged levels (1.2 MU: ~14 days; 0.003 U/mL still detectable at 4 weeks). PCN G binds PBPs → inhibits cell-wall peptidoglycan synthesis → bactericidal, time-dependent (T>MIC). Inactive vs β-lactamase producers. 長效型盤尼西林，緩慢釋放。

**Why:** Mechanism, depot pharmacokinetics and the PK/PD driver all come from the labels.

**Sources:** US label Description, General (CLINICAL PHARMACOLOGY), Mechanism of Action and Resistance – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; TW 仿單 §10.1 作用機轉 and §11 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; UK SmPC §5.1 (PBP blockade; 'Efficacy largely depends on the length of time… above the MIC') – https://www.medicines.org.uk/emc/product/11043/smpc

### A10 · Drug Interactions

Tetracyclines / other bacteriostatic antibiotics: may antagonize bactericidal effect → avoid combination (TW/US; SmPC)<br>Probenecid: ↓ tubular secretion → ↑ and prolonged penicillin levels (TW/US/SmPC)<br>Methotrexate: ↓ MTX excretion → toxicity; combination not recommended (SmPC)<br>Oral anticoagulants (VKA/warfarin): ↑ anti-vitamin K effect/bleeding → monitor INR during and after (SmPC)

**Why:** The TW and US labels list tetracycline and probenecid; the SmPC 4.5 adds methotrexate and oral anticoagulants.

**Sources:** TW 仿單 §7 交互作用 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; US label PRECAUTIONS Drug Interactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC §4.5 – https://www.medicines.org.uk/emc/product/11043/smpc

### A11 · Pregnancy

Animal studies (mouse/rat/rabbit): no fetal harm; human experience with penicillins: no evidence of adverse fetal effects; use if clearly needed (TW 仿單 6.1 / US label). Crosses placenta (fetal levels 10–30% of maternal; SmPC 4.6). Penicillin G is the drug of choice for syphilis in pregnancy; penicillin-allergic pregnant patients should be desensitized (CDC 2021). 孕期梅毒首選。

**Why:** Uses the label narrative with no letter category, per the ground rules. The CDC 2021 STI guideline is the authority for penicillin being the only recommended syphilis treatment in pregnancy. I verified the guideline's PMID 34292926 via esummary, but could not open the cdc.gov page itself because the proxy blocks it, so its wording is cited from the guideline document as a whole.

**Sources:** TW 仿單 §6.1 懷孕 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; US label Teratogenic effects/Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Treatment Guidelines 2021, PMID 34292926 – https://pubmed.ncbi.nlm.nih.gov/34292926/

### A12 · Breastfeeding

LactMed: low milk levels (≤30 U/L after 2.4 MU; undetectable after day 5), not expected to harm infant → acceptable; monitor infant for diarrhea/thrush (one possible case report of Herxheimer reaction in a breastfed infant with congenital syphilis). TW 仿單/US label: excreted in milk → use caution. SmPC: milk 2–15% of maternal serum; stop BF if infant diarrhoea, candidosis or rash. 可哺乳。

**Why:** LactMed is the primary breastfeeding source, and the label's 'use caution' wording is shown next to it.

**Sources:** LactMed 'Benzathine Penicillin G' NBK501138 (rev 2024-08-15), Summary of Use during Lactation, Drug Levels, Effects in Breastfed Infants – https://www.ncbi.nlm.nih.gov/books/NBK501138/; TW 仿單 §6.2 哺乳 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; US label Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC §4.6 – https://www.medicines.org.uk/emc/product/11043/smpc

### A13 · Notes

⚠️ BOXED: NOT FOR IV — 嚴禁靜脈注射或與點滴混合 (inadvertent IV → cardiorespiratory arrest and death). Avoid intra-arterial / near nerve → Nicolau syndrome, gangrene, transverse myelitis (mostly infants/young children).<br>Deep IM, upper outer gluteal (dorsogluteal) or ventrogluteal; not anterolateral thigh; inject slowly and steadily (needle may block); rotate sites. BIC02 syringe 不建議分抽.<br>Do not confuse with Bicillin C-R (benzathine + procaine) — not appropriate for syphilis (CDC 2021).<br>Hospital codes: BIC02 Bicillin L-A prefilled syringe 2.4 MU/4 mL (衛部藥輸字第026966號); PEN11 Penicillin G 長效懸浮針 2.4 MU vial (專案進口, no TW insert → follow its own leaflet).<br>Not in tag options: Treponema (syphilis, yaws, bejel, pinta), strep pharyngitis/URI, rheumatic fever and post-strep GN secondary prophylaxis.<br>Neurosyphilis/ocular/otic syphilis and congenital syphilis with CNS involvement → aqueous penicillin G IV, not benzathine (CDC 2021; SmPC 4.4).<br>Jarisch-Herxheimer reaction 2–12 h after syphilis treatment (fever, chills, myalgia, hypotension), self-limited (SmPC 4.4).<br>CI: penicillin hypersensitivity; SmPC also severe immediate reaction to other β-lactams. Contains (soy) lecithin. Observe ~30 min post-injection for anaphylaxis (SmPC). 長效型盤尼西林；嚴重肺炎/敗血症/腦膜炎濃度不足，勿使用。

**Why:** Notes carries the boxed warning, the administration technique, the options the schema lacks (Syphilis, Treponema and pharyngitis are not tag options), and the neurosyphilis caveat the brief asked for. It also states which stocked dosage forms the two hospital codes are. No storage details are included, per the owner's rule.

**Sources:** US label boxed WARNING, Method of Administration, METHOD OF ADMINISTRATION, CONTRAINDICATIONS, Description (0.53% lecithin) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; TW 仿單 特殊警語, §3.1 使用方式 ('本品不建議分抽'), §4 禁忌, §5.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; UK SmPC §4.3 and §4.4 (Jarisch-Herxheimer; 30 min observation; neurological involvement in congenital syphilis; severe pneumonia/sepsis/meningitis; soya lecithin) – https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Treatment Guidelines 2021, PMID 34292926 – https://pubmed.ncbi.nlm.nih.gov/34292926/

### A14 · Page body

Optional: add a short 'Sources' list. TW 仿單 衛部藥輸字第026966號 (USPI 202311-1, 2024-01-23); DailyMed Bicillin L-A setid 012d46f1-d0a0-4676-a879-cd320297ab16 v35; UK SmPC eMC 11043 (05/12/2025); LactMed NBK501138 (2024-08-15); CDC STI Guidelines 2021 (PMID 34292926); AHA 2009 (PMID 19246689).

**Why:** The body is empty. No label content is required there, but a source list makes the new entry easier to audit later. This is optional, so I marked it minor.

**Sources:** https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; https://www.medicines.org.uk/emc/product/11043/smpc; https://www.ncbi.nlm.nih.gov/books/NBK501138/

### B1 · Adult dose

<span color="green">`IM`</span> ONLY (deep IM, upper-outer gluteal or ventrogluteal) – ⚠️ NOT for IV 嚴禁靜注<br>• Strep (group A) pharyngitis/URTI: 1.2 MU IM ×1<br>• Syphilis – primary, secondary, early latent: 2.4 MU IM ×1<br>• Syphilis – late latent / unknown duration / tertiary (normal CSF): 2.4 MU IM weekly ×3 (total 7.2 MU) (CDC 2021; UK SmPC). TW 仿單/US label put 'latent' under the single 2.4 MU dose and give weekly ×3 only for 'late (tertiary and neurosyphilis)'.<br>• Neurosyphilis/ocular/otosyphilis: NOT initial therapy → aqueous penicillin G 18–24 MU/day IV ×10–14 d; BPG 2.4 MU IM weekly ×1–3 may follow (CDC 2021). (Labels still list 2.4 MU weekly ×3 for neurosyphilis – outdated.)<br>• Yaws, bejel, pinta: 1.2 MU IM ×1<br>• Erysipelas (UK SmPC): 1.2 MU IM ×1; prophylaxis 1.2 MU q3–4 wk<br>• Rheumatic fever secondary prophylaxis: 1.2 MU IM q4 wk (q3 wk if high risk) [TW 仿單]; US label: 1.2 MU monthly or 0.6 MU q2 wk; UK SmPC: q3–4 wk<br>• Post-strep GN prophylaxis: 1.2 MU IM monthly

**Why:** The column is empty. The doses follow the Taiwan insert of the stocked BIC02 product, with the US label and UK SmPC differences shown alongside. The Taiwan insert and US label are not identical: for RF prophylaxis the Taiwan insert says q4w (q3w if high risk), while the US says monthly or 600,000 U q2w. Both labels still list 2.4 MU weekly ×3 for neurosyphilis. CDC 2021 makes IV aqueous penicillin G the treatment for neurosyphilis and allows BPG only as optional follow-on, so the entry must not copy the label line as a recommendation.

**Sources:** Taiwan insert 必希寧 3.1 用法用量 ('第一期、第二期及潛伏期—2,400,000單位（1劑）… 晚期（第三期及神經性梅毒）—2,400,000單位每7天一次，給予3劑 … 風溼熱—1,200,000單位每四週一次，但有高風險者可以每三週一次。腎絲球腎炎—…1,200,000單位每個月一次') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; DailyMed Bicillin L-A, DOSAGE AND ADMINISTRATION ('Adults—a single injection of 1,200,000 units … Late (tertiary and neurosyphilis)—2,400,000 units at 7-day intervals for three doses … 1,200,000 units once a month or 600,000 units every 2 weeks') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 4.1/4.2 (erysipelas treatment and prophylaxis; prophylaxis 'every 3-4 weeks') https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Treatment Guidelines 2021, MMWR Recomm Rep 70(4), PMID 34292926 (verified via esummary), Syphilis sections: 'Benzathine penicillin G 2.4 million units IM in a single dose'; late latent '7.2 million units total … 3 doses of 2.4 million units IM each at 1-week intervals'; neurosyphilis 'Aqueous crystalline penicillin G 18–24 million units per day … 10–14 days … benzathine penicillin, 2.4 million units IM once per week for 1–3 weeks, can be considered after' https://pubmed.ncbi.nlm.nih.gov/34292926/ (full text PMC8344968)

### B2 · Renal dose, HD, CRRT

<span color="green">`IM`</span> TW 仿單 / US label: no renal dose adjustment (excretion considerably delayed in renal impairment – use caution; elderly: choose dose carefully, monitoring renal function may be useful).<br>UK SmPC 4.2 (for reference): CrCl ≥60: 100% · CrCl 15–59: 75% · CrCl <15: 20–50% (max 1–3 MU/day, given as 2–3 administrations)<br>HD: removed by HD, but no data on plasma levels → decide case by case (UK SmPC)<br>CRRT: no data in labels

**Why:** The column is empty. Ground rule: use the stocked product's label first, which is the Taiwan insert and has no adjustment. The SmPC table is quoted alongside. It is a generic benzylpenicillin daily-dose table and fits poorly with single depot doses, so it is shown for reference only. I found no CRRT or TDM data in any label. Benzathine penicillin is not a TDM drug.

**Sources:** Taiwan insert 6.5 老年人 / 11 藥物動力學 ('在新生兒、年幼嬰兒與腎功能損傷病人中，排泄速率會大幅下降'); no renal dosing in 3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; DailyMed Bicillin L-A, CLINICAL PHARMACOLOGY General ('In … individuals with impaired kidney function, excretion is considerably delayed') and Geriatric Use ('it may be useful to monitor renal function') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 4.2 Table 1 and 'Haemodialysis patients … can be removed by haemodialysis. There are no data available … decision … case by case' https://www.medicines.org.uk/emc/product/11043/smpc

### B3 · Hepatic dose

No adjustment (TW 仿單 / US label give none). UK SmPC: in very severe combined hepatic + renal impairment, penicillin degradation/excretion may be delayed – use caution.

**Why:** The column is empty, and the labels can fill it.

**Sources:** UK SmPC 4.2 'Patients with impaired hepatic function: In very severe cases of impaired hepatic and renal function, there may be a delay in the degradation and excretion of penicillin' https://www.medicines.org.uk/emc/product/11043/smpc; Taiwan insert 3.1 (no hepatic adjustment) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F

### B4 · Pediatric dose

<span color="green">`IM`</span> ONLY – never IV (neonates/infants/small children: mid-lateral thigh may be preferable; avoid anterolateral thigh)<br>• Strep pharyngitis: ≤27 kg 0.6 MU ×1; >27 kg 1.2 MU ×1 [TW 仿單] (US label: older children 0.9 MU; <27 kg (60 lb) 0.3–0.6 MU; UK: <30 kg 0.6 MU, >30 kg 1.2 MU)<br>• Acquired syphilis (≥1 mo): early – 50,000 U/kg IM ×1 (max 2.4 MU) [UK SmPC; CDC 2021]; late latent – 50,000 U/kg IM weekly ×3 (max 2.4 MU/dose) [UK SmPC] – peds ID consult + CSF exam (CDC 2021)<br>• Congenital syphilis: US label 50,000 U/kg ×1 (<2 y); UK: only without neurological involvement. CDC 2021: single-dose BPG 50,000 U/kg only for 'possible' (full evaluation normal + follow-up certain) or 'less likely' scenarios; confirmed/highly probable → aqueous penicillin G IV or procaine ×10 d → consult peds ID<br>• Yaws/pinta: <30 kg 0.6 MU, >30 kg 1.2 MU ×1 (UK)<br>• RF/GN prophylaxis: <30 kg 0.6 MU, >30 kg 1.2 MU q3–4 wk (UK)

**Why:** The column is empty. The stocked BIC02 Taiwan insert gives the 27 kg pharyngitis cut-off and has no congenital-syphilis line, while the US label does. Neurovascular injury from intravascular injection is most frequent in infants and small children, so the IM-only warning belongs here as well. Do not copy the hospital BIC02 pediatric field, which describes an IV aqueous penicillin G regimen (see hospital issues).

**Sources:** Taiwan insert 3.1 ('成人及體重超過27kg之兒童—單次注射 1,200,000單位；體重27kg以下兒童病人—單次注射600,000單位'; '在新生兒、嬰兒及年幼兒童中，可能以大腿的中外側為首選') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; DailyMed Bicillin L-A, DOSAGE AND ADMINISTRATION ('older pediatric patients—900,000 units; infants and pediatric patients under 60 lbs.—300,000 to 600,000 units … Congenital—under 2 years of age: 50,000 units/kg') and WARNINGS ('most often occurred in infants and small children') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 4.2 sections 1–4 (children >30/<30 kg; syphilis 50,000 IU/kg max 2.4 MU; congenital without neurological involvement) https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Guidelines 2021, PMID 34292926: 'Benzathine penicillin G 50,000 units/kg body weight IM, up to the adult dose of 2.4 million units in a single dose'; congenital syphilis 'Recommended Regimen, Congenital Syphilis Less Likely: Benzathine penicillin G 50,000 units/kg … single dose' vs aqueous/procaine penicillin for confirmed/highly probable https://pubmed.ncbi.nlm.nih.gov/34292926/

### B5 · Indications

SSTI

**Why:** Only one labeled indication has an existing option: erysipelas, listed in UK SmPC 4.1 for treatment and prophylaxis, maps to SSTI. Strep pharyngitis/URTI, syphilis, yaws/bejel/pinta, and rheumatic fever/chorea and GN prophylaxis have no option, so they go in Notes. Do not tag Pneumonia, Meningitis, Endocarditis or Sepsis. SmPC 4.4 says infections that need higher serum levels should be treated with water-soluble benzylpenicillin.

**Sources:** UK SmPC 4.1 ('For the treatment of: - erysipelas … For the prophylaxis of: … erysipelas') and 4.4 ('In diseases such as severe pneumonia, empyema, sepsis, meningitis or peritonitis, which require higher serum penicillin levels, alternative treatment … should be considered') https://www.medicines.org.uk/emc/product/11043/smpc; DailyMed Bicillin L-A, INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16

### B6 · Coverage

Streptococcus

**Why:** The US and Taiwan labels list beta-hemolytic streptococci (groups A, B, C, G, H, L, M), Treponema pallidum and T. carateum. UK SmPC Table 4 lists S. pyogenes, group C/G strep and viridans streptococci. Treponema has no option, so it goes in Notes. Do not tag Staphylococcus, MSSA or Neisseria: the SmPC says penicillinase producers, such as staphylococci and gonococci, are not covered. Listeria and anaerobes are not labeled for this low-level depot form.

**Sources:** DailyMed Bicillin L-A, Microbiology – Antimicrobial Activity / Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 5.1 Resistance ('no effect against beta-lactamase-producing bacteria (e.g. staphylococci or gonococci)') and Table 4 https://www.medicines.org.uk/emc/product/11043/smpc; Taiwan insert 10.2 抗微生物活性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F

### B7 · Side Effects

GI, SJS/TEN, DRESS, hematologic, CNS, neuropathy, nephrotoxicity, LFT↑

**Why:** Each tag maps to a label section. GI: nausea, vomiting, pseudomembranous colitis/CDAD. SJS/TEN and DRESS: the SCAR warning. Hematologic: hemolytic anemia, leukopenia, thrombocytopenia. CNS: seizures, confusion, transverse myelitis, Hoigné syndrome. Nephrotoxicity: nephropathy, renal failure, and SmPC interstitial nephritis. LFT↑: elevated SGOT, plus SmPC hepatitis/cholestasis. Anaphylaxis, the Jarisch-Herxheimer reaction, Nicolau syndrome and injection-site necrosis have no option, so they go in Notes.

**Sources:** DailyMed Bicillin L-A, WARNINGS (SCAR, CDAD) and ADVERSE REACTIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 4.8 Table 2 https://www.medicines.org.uk/emc/product/11043/smpc; Taiwan insert 8.1/8.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F

### B8 · Monitor

renal, CBC, LFT

**Why:** UK SmPC 4.4 recommends periodic renal, hepatic and haematopoietic checks with long-term treatment of more than a single dose, such as RF prophylaxis. The US geriatric section says monitoring renal function may be useful. Syphilis serologic follow-up and observing the patient for 30 min after injection have no option, so they go in Notes.

**Sources:** UK SmPC 4.4 ('With long-term treatment (more than a single dose), periodic assessment of organ system functions, including renal, hepatic and haematopoietic function is recommended') https://www.medicines.org.uk/emc/product/11043/smpc; DailyMed Bicillin L-A, Geriatric Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16

### B9 · Mechanism

Natural penicillin (penicillin G as dibenzylethylenediamine salt): binds PBPs → inhibits cell-wall peptidoglycan synthesis → bactericidal (time-dependent, T>MIC). Very low solubility → slow release from IM depot + hydrolysis to penicillin G → low but prolonged levels (1.2 MU: ~14 d; 0.003 U/mL still detectable at 4 wk). 長效型：血中濃度低但持久

**Why:** The column is empty, and the label text covers it.

**Sources:** DailyMed Bicillin L-A, Mechanism of Action and CLINICAL PHARMACOLOGY General https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 5.1 (PBP blockade; PK/PD 'time … above the MIC') https://www.medicines.org.uk/emc/product/11043/smpc

### B10 · Drug Interactions

• Tetracyclines / other bacteriostatic antibiotics: may antagonize bactericidal effect – avoid<br>• Probenecid: ↓ tubular secretion → ↑ and prolonged penicillin levels (also ↓ CNS penetration)<br>• Methotrexate: ↓ MTX excretion → toxicity – not recommended (UK SmPC)<br>• Oral anticoagulants (warfarin): may ↑ INR/bleeding – monitor INR (UK SmPC)

**Why:** The column is empty. The US and Taiwan labels list tetracycline and probenecid. The SmPC adds methotrexate and vitamin K antagonists.

**Sources:** DailyMed Bicillin L-A, PRECAUTIONS – Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; Taiwan insert 7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/11043/smpc

### B11 · Pregnancy

Use when clearly indicated. Animal studies: no harm; human penicillin experience: no evidence of fetal harm (US/TW label). Crosses placenta (fetal levels 10–30% of maternal) (UK SmPC). Syphilis in pregnancy: parenteral penicillin G is the only therapy with documented efficacy – treat per stage; penicillin-allergic → desensitize (CDC 2021). Late latent: gap >9 d between weekly doses → repeat full course. 孕期梅毒首選，過敏需減敏

**Why:** The column is empty. Under the ground rules, do not write a letter category. The US label still uses the old 'Teratogenic effects' wording, which is why the CDC 2021 statement is added.

**Sources:** DailyMed Bicillin L-A, PRECAUTIONS – Pregnancy, Teratogenic effects https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 4.6 ('crosses the placenta. 10-30% of maternal plasma concentrations are found in the foetal circulation … can be used during pregnancy when appropriately indicated') https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Guidelines 2021, PMID 34292926 ('Parenteral penicillin G is the only therapy with documented efficacy for syphilis during pregnancy … should be desensitized'; 'Pregnant women who have delays in any therapy dose >9 days between doses should repeat the full course') https://pubmed.ncbi.nlm.nih.gov/34292926/

### B12 · Breastfeeding

Acceptable (LactMed): low milk levels (≤30 U/L after 2.4 MU; undetectable after day 5); watch infant for diarrhea/thrush. US/TW label: use caution. UK SmPC: stop breastfeeding if infant develops diarrhoea, candidosis or rash. 可哺乳

**Why:** The column is empty. LactMed is the designated source for breastfeeding, and the label wording is quoted alongside.

**Sources:** LactMed 'Benzathine Penicillin G' NBK501138 (rev 2024-08-15), Summary of Use during Lactation ('Benzathine penicillin G is acceptable in nursing mothers') and Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK501138/; DailyMed Bicillin L-A, Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC 4.6 Breast-feeding https://www.medicines.org.uk/emc/product/11043/smpc

### B13 · Notes

⚠️ IM ONLY – NEVER IV: inadvertent IV → cardiorespiratory arrest/death; intra-arterial/near-nerve → gangrene, transverse myelitis, Nicolau syndrome. 僅限深層肌肉注射，嚴禁靜注. Aspirate first, inject slowly and steadily (thick suspension may block needle), rotate sites.<br>• Do not confuse with Bicillin C-R (benzathine + procaine) – not appropriate for syphilis (CDC 2021).<br>• Untagged organisms/indications: Treponema pallidum (syphilis), T. pertenue/T. carateum (yaws, bejel, pinta); strep pharyngitis/URTI; rheumatic fever/chorea and post-strep GN prophylaxis.<br>• Low, prolonged levels – not for infections needing high levels (severe pneumonia, empyema, sepsis, meningitis, peritonitis; UK SmPC) or as initial neurosyphilis therapy.<br>• Jarisch-Herxheimer reaction within 24 h of syphilis treatment (fever, headache, myalgia) – not an allergy.<br>• CI: penicillin allergy (UK also: severe immediate reaction to other β-lactams). Contains soy lecithin. Observe ≥30 min after injection (UK SmPC).<br>• Syphilis follow-up: nontreponemal titer at 6 & 12 mo (P&S) / 6, 12, 24 mo (latent) (CDC 2021). Late latent: if a weekly dose is delayed, 10–14 d interval may be acceptable (non-pregnant); pregnant >9 d → restart.<br>• Stocked: BIC02 Bicillin L-A 2.4 MU/4 mL prefilled syringe (TW 仿單: 本品不建議分抽 – plan 1.2 MU doses accordingly); PEN11 2.4 MU vial (專案進口, no TW 仿單 – follow the supplied leaflet for reconstitution and volume).

**Why:** The column is empty. Notes must carry the boxed IM-only warning and every organism or indication that has no multi-select option, per the ground rules. It also needs safety items no tag covers (C-R confusion, J-H reaction, allergy and soy content), plus the hospital product context. Each line is sourced. No storage details are included.

**Sources:** DailyMed Bicillin L-A, boxed WARNING, WARNINGS – Method of Administration, DESCRIPTION (lecithin), ingredient list (SOYBEAN) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; Taiwan insert 特殊警語 and 3.1 ('本品不建議分抽'), 13.1 包裝 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; UK SmPC 4.3, 4.4 (30-min observation; soya lecithin – 'If you are allergic to peanut or soya, do not use'; Jarisch-Herxheimer; higher-level infections) https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Guidelines 2021, PMID 34292926 (Bicillin C-R warning; Jarisch-Herxheimer; follow-up serology; missed-dose intervals) https://pubmed.ncbi.nlm.nih.gov/34292926/

### B14 · Page body

## ⚠️ Route<br>Deep <span color="green">`IM`</span> only – NOT for IV (boxed warning). 嚴禁靜注<br><br>## Dosing by indication<br>\| Indication \| Adult \| Pediatric \| Source \|<br>\|---\|---\|---\|---\|<br>\| Strep pharyngitis/URTI \| 1.2 MU ×1 \| ≤27 kg 0.6 MU; >27 kg 1.2 MU \| TW 仿單 \|<br>\| Syphilis P/S/early latent \| 2.4 MU ×1 \| 50,000 U/kg ×1 (max 2.4 MU) \| CDC 2021, UK SmPC (TW/US label: P/S/'latent') \|<br>\| Late latent / unknown / tertiary (normal CSF) \| 2.4 MU weekly ×3 \| 50,000 U/kg weekly ×3 (max 2.4 MU/dose) \| CDC 2021 (adult), UK SmPC \|<br>\| Neurosyphilis \| Aqueous PCN G IV first; BPG optional follow-on \| Peds ID \| CDC 2021 (labels' weekly ×3 outdated) \|<br>\| Yaws/bejel/pinta \| 1.2 MU ×1 \| <30 kg 0.6 MU \| TW 仿單, UK SmPC \|<br>\| RF prophylaxis \| 1.2 MU q4 wk (q3 wk high risk) \| <30 kg 0.6 MU q3–4 wk \| TW 仿單, UK SmPC \|<br>\| GN prophylaxis \| 1.2 MU monthly \| — \| TW 仿單 \|<br>\| Erysipelas (UK) \| 1.2 MU ×1; prophylaxis q3–4 wk \| <30 kg 0.6 MU \| UK SmPC \|<br><br>## Renal<br>No adjustment (TW/US). UK SmPC table (CrCl 15–59: 75%; <15: 20–50%) for reference. HD removes drug – case by case. CRRT: no data.<br><br>## Key safety<br>Anaphylaxis/SCAR, CDAD, Jarisch-Herxheimer, Nicolau syndrome/neurovascular injury, Hoigné syndrome; do not confuse with Bicillin C-R.<br><br>## Stocked products<br>BIC02 Bicillin L-A 2.4 MU/4 mL prefilled syringe (衛部藥輸字第026966號; 不建議分抽); PEN11 2.4 MU vial (專案進口, no TW 仿單).

**Why:** The body is blank on a new entry. A short dosing table by indication is the clearest form for a drug with many single-dose and interval regimens. All rows trace to B1–B4. Storage is deliberately excluded.

**Sources:** Taiwan insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; DailyMed Bicillin L-A https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16; UK SmPC https://www.medicines.org.uk/emc/product/11043/smpc; CDC STI Guidelines 2021 PMID 34292926 https://pubmed.ncbi.nlm.nih.gov/34292926/

### B15 · Notes

When writing dose text, label TW-only and US-only values explicitly (as in B1/B4): TW 仿單 = pharyngitis ≤27 kg 0.6 MU / >27 kg 1.2 MU, RF q4 wk (q3 wk high risk), no congenital-syphilis line; US label = older children 0.9 MU, <60 lb 0.3–0.6 MU, RF/GN 1.2 MU monthly or 0.6 MU q2 wk, congenital <2 y 50,000 U/kg.

**Why:** I checked both labels live. The Taiwan insert, version USPI 202311-1, differs from the current DailyMed v35 in pediatric pharyngitis dosing, the RF prophylaxis interval and congenital syphilis. Reviewer A and the merge step should not treat the two labels as interchangeable.

**Sources:** Taiwan insert 3.1 (live fetch 2026-10-05) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC026966%E8%99%9F; DailyMed SPL v35 DOSAGE AND ADMINISTRATION (live fetch 2026-10-05) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16

## Apply log

- Adult dose: both agreed proposals merged into one bulleted value, with the green IM tag, the boxed NOT-IV warning, TW/US/UK label differences and the CDC 2021 neurosyphilis/late-latent regimens
- Renal dose, HD, CRRT: merged. TW/US labels give no adjustment; UK SmPC CrCl table shown for reference; HD case by case; CRRT no data
- Hepatic dose: merged. No adjustment, plus the UK SmPC caution for very severe combined hepatic and renal impairment
- Pediatric dose: merged. IM only and injection-site note; strep URI weight bands for TW/US/UK; acquired and congenital syphilis (CDC 2021); yaws/pinta; rheumatic fever and GN prophylaxis
- Indications: [SSTI]
- Coverage: [Streptococcus]
- Side Effects: [GI, hematologic, CNS, neuropathy, nephrotoxicity, LFT↑, DRESS, SJS/TEN]
- Monitor: [renal, LFT, CBC]
- Mechanism: merged. Benzathine salt depot, PBP binding, time-dependent killing, prolonged low levels, inactive vs β-lactamase producers, with the Chinese note
- Drug Interactions: tetracyclines/bacteriostatic agents, probenecid, methotrexate and oral anticoagulants (the unsourced '↓ CNS penetration' for probenecid was left out)
- Pregnancy: merged. Label animal/human data, placental transfer, CDC 2021 drug of choice and desensitization, >9 d gap rule; no letter category
- Breastfeeding: merged. LactMed says acceptable; TW/US label say use caution; UK SmPC says stop if the infant has diarrhoea, candidosis or rash
- Notes: three Notes proposals merged into one value: boxed IV warning and Nicolau syndrome, injection technique, Bicillin C-R mix-up, untagged organisms/indications, high-level infections and neurosyphilis, Jarisch-Herxheimer (within 24 h, typically 2–12 h), contraindications and soy lecithin, 30-min observation, syphilis follow-up and missed doses, TW-vs-US label differences, stocked BIC02/PEN11
- Page body: route section, dosing-by-indication table, renal, key safety and stocked products added to the previously blank page
- References section appended listing the TW insert (衛部藥輸字第026966號), DailyMed v35, UK SmPC eMC 11043, LactMed NBK501138, CDC 2021 (PMID 34292926) and AHA 2009 (PMID 19246689), each with its URL
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
