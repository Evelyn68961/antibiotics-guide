# Verification: Myfungin (Micafungin)

- **Notion entry:** [Myfungin (Micafungin)](https://app.notion.com/2c3c496dfff1803dafa6f082757b8e98)
- **Hospital codes:** MYF02 (Myfungin inj 50 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/micafungin.json` (plus any `sources/micafungin-taiwan-insert-*.txt`)

## Product and sources

Myfungin Lyo-Injection 50 mg (米方淨凍晶注射劑), micafungin sodium 50 mg/vial, YungShin (永信), TFDA license 衛部藥製字第060897號. Hospital code MYF02, NHI AC60897248, ATC J02AX05. The Taiwan insert (history file dated 2021-06-23) follows the US micafungin label. The US label used here is a generic micafungin vial (Qilu, DailyMed setid 653f8c75-b5b8-41ea-8b33-5baad1680bda, v5, 2026-05-22). The UK SmPC used is Wockhardt Micafungin 100 mg (eMC 11959, revised 06/08/2020). LactMed is NBK574072 (revised 2025-04-15).

## Agreed fixes applied in Notion (47)

### A1 · Pregnancy (error)

**Was:** Category C; use only if clearly needed

**Now:** 無 FDA letter category（PLLR 已取消字母分級）。動物（兔）器官形成期 4× MRHD → 內臟畸形、流產；可能造成胎兒傷害，人體資料不足 (US/TW label 8.1/6.1)。UK SmPC 4.6: 除非明確必要，懷孕期勿用。

**Why:** The FDA retired letter categories. The US label and the Taiwan insert for the stocked product give only a narrative risk summary. Ground rules forbid writing 'Category C' as current.

**Sources:** US FDA label (Qilu micafungin) §8.1 Pregnancy 'may cause fetal harm... visceral abnormalities and increased abortion' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert Myfungin §6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC §4.6 'should not be used during pregnancy unless clearly necessary' https://www.medicines.org.uk/emc/product/11959/smpc

### A2 · Page body (error)

**Was:** ## Pregnancy: **Category C** (FDA) / "May cause fetal harm" (EMA) ... consider alternatives (e.g., amphotericin B) when feasible

**Now:** No FDA letter category (retired under PLLR). US/TW label (8.1/6.1): "may cause fetal harm" based on rabbit data (visceral abnormalities and abortion at 4× MRHD); insufficient human data. UK SmPC 4.6: no human data; crosses the placenta in animals; "should not be used during pregnancy unless clearly necessary." Keep the bullet 'consider alternatives (e.g., amphotericin B) when feasible' and cite it: IDSA 2016 – AmB is the treatment of choice for invasive candidiasis in pregnancy; echinocandin use is cautioned (few data). Delete 'Category C'.

**Why:** The heading uses a retired letter category, and the attributions are swapped: 'may cause fetal harm' is the US/Taiwan label wording, not EMA wording. The UK SmPC says 'unless clearly necessary'. No label suggests amphotericin B as the alternative.

**Sources:** US FDA label §8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/11959/smpc

### A3 · Breastfeeding (error)

**Was:** Caution; low infant exposure expected

**Now:** 可哺乳：無人體資料，但蛋白結合 >99%、口服吸收差，嬰兒經乳汁吸收量極低；母親需使用時不須停止哺乳 (LactMed)。替代：fluconazole。

**Why:** LactMed says micafungin 'is not a reason to discontinue breastfeeding'. 'Caution' understates this. Under the hierarchy, LactMed is the reference for breastfeeding.

**Sources:** LactMed Micafungin NBK574072, Summary of Use during Lactation (rev 2025-04-15) https://www.ncbi.nlm.nih.gov/books/NBK574072/

### A4 · Page body (error)

**Was:** ## Breastfeeding: ... **Weigh maternal benefit vs. unquantified infant risk**; many references advise caution or avoidance

**Now:** - No human data; excreted in rat milk (US/TW label 8.2).<br>- >99% protein-bound, poor oral bioavailability → unlikely to reach milk/be absorbed; micafungin is given IV even to infants <4 months.<br>- LactMed: if a mother requires micafungin, it is **not a reason to discontinue breastfeeding**. Alternatives: fluconazole, miconazole.

**Why:** LactMed contradicts 'many references advise caution or avoidance', and no source is cited for that statement.

**Sources:** LactMed NBK574072 https://www.ncbi.nlm.nih.gov/books/NBK574072/; US FDA label §8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### A5 · Hepatic dose (error)

**Was:** Mild-mod: no change; Severe: caution

**Now:** 輕/中/重度肝功能不全皆不需調整 (TW/US label；Child-Pugh 10–12 研究 AUC ↓~30%)；UK SmPC: 重度資料不足，不建議使用。

**Why:** The Taiwan insert for the stocked product (§6.6) and the US label (§8.7, §12.3) both say no adjustment in mild, moderate or SEVERE impairment, and severe impairment was studied. 'Severe: caution' reflects neither. The UK SmPC differs ('not recommended'), so its value should appear alongside.

**Sources:** Taiwan insert §6.6 肝功能不全 '輕度、中度或重度肝功能不全的病人不須調整' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US FDA label §8.7 and §12.3 Hepatic Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.2 Hepatic impairment https://www.medicines.org.uk/emc/product/11959/smpc

### A6 · Page body (unsupported)

**Was:** Hepatic table, Severe (Child-Pugh C): 'Use with caution; limited data. Some clinicians prefer anidulafungin (non-hepatic elimination)'; Notes #5 'Anidulafungin preferred in severe hepatic impairment'

**Now:** Severe (Child-Pugh C): TW/US – no adjustment (AUC ↓~30%, M-5 ↑2.3× but exposure comparable to patients). UK SmPC – insufficient data, not recommended; careful risk/benefit in cirrhosis/chronic liver disease (4.4). Keep 'Some clinicians prefer anidulafungin' and Notes #5, but flag them as expert opinion (no label/guideline source) and reword Notes #5 to: 'Severe hepatic impairment: no dose change per TW/US label; UK SmPC advises against use – an alternative (e.g., anidulafungin) may be considered [expert opinion, unsourced]'.

**Why:** No label or IDSA text says anidulafungin is preferred. IDSA 2016 says caspofungin is the only echinocandin needing hepatic dose reduction. The 'limited data' wording matches the UK SmPC only.

**Sources:** US FDA label §12.3 Hepatic Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.2, §4.4 https://www.medicines.org.uk/emc/product/11959/smpc; IDSA Candidiasis 2016 (PMID 26679628, verified) 'Caspofungin is the only echinocandin for which dosage reduction is recommended' https://www.idsociety.org/practice-guideline/candidiasis/

### A7 · Pediatric dose (error)

**Was:** ≥4mo: 2 mg/kg/d (invasive), 3 mg/kg/d (esophageal); <br>Neonates: 4-10 mg/kg/d; <br>CNS: 10-15 mg/kg/d

**Now:** ≥4mo: IC 2 mg/kg QD (max 100 mg); Esophageal ≤30 kg 3 mg/kg, >30 kg 2.5 mg/kg QD (max 150 mg); Prophylaxis (HSCT) 1 mg/kg QD (max 50 mg); <br><4mo: IC 無 CNS/眼部侵犯 4 mg/kg QD (TW/US; UK 4–10 mg/kg/d; UK prophylaxis 2 mg/kg/d); <br>CNS (<4mo): 劑量未確立，可能需 ≥10 mg/kg QD (TW/US 6.4/8.4; UK e.g. 10 mg/kg)

**Why:** The stocked product's insert and the US label approve 4 mg/kg for infants under 4 months, not 4–10; 4–10 is UK only. No label supports '10–15 mg/kg' for CNS infection: US/TW say 10 mg/kg or higher may be necessary but the dose is not established, and the UK SmPC says e.g. 10 mg/kg. The current text omits the max doses, the esophageal dose above 30 kg (2.5 mg/kg) and pediatric prophylaxis.

**Sources:** Taiwan insert §3.1 表2 and 未滿4個月 4 mg/kg; §6.4 小兒 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US FDA label §2.2 Table 2, §2.3, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.2 'Use in children (including neonates) < 4 months' https://www.medicines.org.uk/emc/product/11959/smpc

### A8 · Page body (error)

**Was:** Pediatric table: 'Esophageal candidiasis (≥4 months) \| 3 mg/kg/day IV (max 150 mg)'; 'Neonates (<4 months) — systemic candidiasis \| 4–10 mg/kg/day IV'; 'Neonates — suspected CNS involvement \| **10–15 mg/kg/day IV** (dose-dependent CNS penetration)'

**Now:** Esophageal (≥4 mo): ≤30 kg 3 mg/kg/day; >30 kg 2.5 mg/kg/day (max 150 mg). <4 months, IC without meningoencephalitis/ocular dissemination: 4 mg/kg/day (TW/US label); UK SmPC 4–10 mg/kg/day; UK prophylaxis <4 mo 2 mg/kg/day (not approved in US/TW). <4 months with CNS involvement: dose not established; ≥10 mg/kg/day may be necessary (US/TW 8.4/6.4); UK: higher dose e.g. 10 mg/kg due to dose-dependent CNS penetration. Esophageal and prophylaxis in <4 mo: not approved (US/TW).

**Why:** The body table repeats A7's errors and is missing the over-30 kg split.

**Sources:** US FDA label §2.2–2.3, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert §3.1, §6.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC §4.2 https://www.medicines.org.uk/emc/product/11959/smpc

### A9 · Notes (unsupported)

**Was:** Neonates have \~2–3× higher clearance than adults → require higher weight-based doses.

**Now:** <4 個月嬰兒體重校正清除率約為成人 2.3 倍（較大兒童 12–16 歲之 2.6 倍）(UK SmPC 5.2) → 需較高 mg/kg 劑量；4 mg/kg QD 之 AUC (131 mcg·h/mL) ≈ ≥4mo 兒童 2 mg/kg 及成人 100 mg (US 12.3 / TW 11)。 Apply the same correction to the body note under the Pediatric table ('Neonates' → 'Infants <4 months').

**Why:** The label says only 'higher' weight-normalized clearance and gives AUC equivalence, which implies about 2-fold. The '2–3×' figure is not in any label. The same sentence is repeated in the body under the Pediatric table.

**Sources:** US FDA label §12.3 Pediatric Patients Younger than 4 Months https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert §11 藥物動力學特性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F

### A10 · Side Effects (missing)

**Was:** ["LFT↑","thrombocytopenia"]

**Now:** ["LFT↑","thrombocytopenia","GI","neutropenia","thrombophlebitis","anemia"]

**Why:** The label's most common reactions include diarrhea, nausea, vomiting and abdominal pain (GI) and neutropenia. Phlebitis was 19% vs 5% with fluconazole in the esophageal trial, and phlebitis/thrombophlebitis are in W&P 5.5. Hemolytic anemia is in W&P 5.2. All four options already exist in the schema.

**Sources:** US FDA label Highlights §6 'Most common adverse reactions... diarrhea, nausea, vomiting, abdominal pain, pyrexia, thrombocytopenia, neutropenia, and headache'; §5.2, §5.5; §6.1 esophageal table (Phlebitis 49 (19)) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.8 (common: leukopenia, neutropenia, anaemia, phlebitis, nausea, vomiting, diarrhoea, abdominal pain) https://www.medicines.org.uk/emc/product/11959/smpc

### A11 · Side Effects (minor)

**Was:** ["LFT↑","thrombocytopenia"]

**Now:** Optionally also add "SJS/TEN" and "AKI" (and "hypokalemia" for <4 mo / UK common)

**Why:** SJS/TEN appears in US postmarketing data (§6.2) and is a UK SmPC 4.4 warning. Renal effects (BUN/creatinine rise, acute renal failure) are US W&P 5.4. Hypokalemia is common per UK 4.8 and 25% in infants under 4 months per US 6.1. All are existing schema options.

**Sources:** US FDA label §5.4, §6.1, §6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.4 Skin reactions, §4.8 https://www.medicines.org.uk/emc/product/11959/smpc

### A12 · Page body (error)

**Was:** Side Effects: Common list lacks abdominal pain; 'Hemolysis / hemolytic anemia (acute, transient; seen at higher doses)'; 'Anaphylaxis (\<0.2%)'; no SJS/TEN or renal effects

**Now:** Common: add abdominal pain. Serious/Rare: 'Hemolysis / hemolytic anemia, intravascular hemolysis, hemoglobinuria (rare; discontinue if severe)'; 'Anaphylaxis/anaphylactoid reactions incl. shock (serious reactions ~0.2%, 6/3028, UK SmPC 4.8)'; add 'Renal: ↑BUN/Cr, isolated acute renal failure (US 5.4)'; add 'SJS/TEN (US 6.2; UK 4.4)'.

**Why:** 'Seen at higher doses' is not in any label. The only dose-linked case is one volunteer who received 200 mg plus prednisolone, and the label reports other cases without a dose link. The UK SmPC gives 0.2% (6/3028), not under 0.2%. The section leaves out the label's renal-effects warning and SJS/TEN.

**Sources:** US FDA label §5.1–5.4, §6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.4, §4.8 'anaphylactoid reaction 0.2 %, 6/3028' https://www.medicines.org.uk/emc/product/11959/smpc

### A13 · Monitor (missing)

**Was:** ["LFT","CBC"]

**Now:** Monitor: ["LFT","CBC","renal"]. Body Monitor table: add row 'Renal function (BUN/SCr) \| Periodically; monitor for worsening (US 5.4, UK SmPC 4.4)'. For the 'Baseline, then at least weekly', 'Weekly' and 'During and 30 min after infusion' frequencies, add a flag: 'frequency not specified in labels (US/UK/TW only say monitor) – confirm local protocol'.

**Why:** US W&P 5.4 and UK SmPC 4.4 both say to monitor renal function. The weekly LFT/CBC and '30 min after infusion' frequencies in the body are not in any label.

**Sources:** US FDA label §5.4 'Monitor renal function' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.4 Renal effects https://www.medicines.org.uk/emc/product/11959/smpc

### A14 · Adult dose (unsupported)

**Was:** Candidemia: 100 mg IVD QD; <br>Esophageal: 150 mg IVD QD; <br>Endocarditis: 150 mg IVD QD; <br>Prophylaxis: 50 mg IVD QD

**Now:** Candidemia: 100 mg IVD QD; <br>Esophageal: 150 mg IVD QD; <br>Endocarditis (off-label, IDSA 2016): 150 mg IVD QD; <br>Prophylaxis (HSCT; UK also expected neutropenia ≥10 d): 50 mg IVD QD

**Why:** The US/TW label says micafungin 'has not been adequately studied in patients with endocarditis'. 150 mg is an IDSA 2016 recommendation and should be labelled off-label.

**Sources:** US FDA label §1 Limitations of Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; IDSA Candidiasis 2016 (PMID 26679628, verified via esummary) 'high-dose echinocandin (... micafungin 150 mg daily ...)' for native valve endocarditis https://www.idsociety.org/practice-guideline/candidiasis/

### A15 · Adult dose (missing)

**Was:** (no dose-escalation or infusion info)

**Now:** append: <br>UK SmPC: IC 反應不佳可增至 200 mg QD (≤40 kg: 4 mg/kg); 輸注 1 hr

**Why:** The UK SmPC allows escalation to 200 mg/day if the response is inadequate, and the label requires a 1-hour infusion. Neither appears in the column.

**Sources:** UK SmPC §4.2 https://www.medicines.org.uk/emc/product/11959/smpc; US FDA label §2.5 'Infuse over one hour' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### A16 · Page body (error)

**Was:** ## Indications: '- Prophylaxis in HSCT recipients with neutropenia' '- *Candida* endocarditis (high-dose)'; no <4-month indication

**Now:** - Candidemia, acute disseminated candidiasis, Candida peritonitis & abscesses (adults & ≥4 mo); <4 mo only without meningoencephalitis/ocular dissemination (TW/US). UK: invasive candidiasis incl. neonates.<br>- Esophageal candidiasis (adults & ≥4 mo per TW/US; UK adults/≥16 y only)<br>- Prophylaxis of Candida infection in HSCT recipients (TW/US); UK: allogeneic HSCT or expected neutropenia ANC <500 for ≥10 days<br>- Off-label: *Candida* endocarditis 150 mg (IDSA 2016; label: not adequately studied)<br>- UK SmPC: use only if other antifungals are not appropriate (rat liver tumours).

**Why:** Endocarditis is not an approved indication; the label says it was not adequately studied. 'with neutropenia' fits neither label: the US requires HSCT only, and the UK uses expected neutropenia as an alternative criterion. The section also omits the infant (<4 mo) indication and the UK restrictions.

**Sources:** US FDA label §1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016 https://www.idsociety.org/practice-guideline/candidiasis/

### A17 · Indications (minor)

**Was:** ["Candidiasis"]

**Now:** ["Candidiasis","Peritonitis"]

**Why:** Candida peritonitis and abscesses are a labelled indication, and 'Peritonitis' is an existing option. Do not add Endocarditis (off-label) or Aspergillosis (not approved).

**Sources:** US FDA label §1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### A18 · Page body (unsupported)

**Was:** Coverage: '*C. auris*: recommended by CDC as initial therapy'; '**Fungistatic** against *Aspergillus* spp. — used in salvage/combination therapy only, not first-line'; species list omits C. guilliermondii

**Now:** Keep '**Fungicidal** against most *Candida* spp. (UK SmPC 5.1)'; add *C. guilliermondii* to the species list (US 12.4 / TW 10.2). C. parapsilosis: 'innately higher echinocandin MICs → may be less responsive (IDSA 2016); EUCAST S ≤0.002 / R >2 mg/L (UK 5.1); test echinocandin susceptibility for C. glabrata/C. parapsilosis or after prior echinocandin (IDSA 2016)'. C. auris: keep, cite CDC / Long 2024 Am J Emerg Med (PMID 39137491) or flag as unsourced. Aspergillus: 'inhibits actively growing hyphae (fungistatic) (UK 5.1); not an approved indication – efficacy vs non-Candida fungi not established (US/TW 1); salvage/combination use – flag: no label/guideline source'. Coverage multi-select stays ['Candida'].

**Why:** The US label states that efficacy against non-Candida fungi is not established. The 'salvage/combination' claim has no cited source, and the label does not call the activity fungistatic. The C. auris/CDC claim is plausible but uncited. C. guilliermondii is on the label's list but missing from the page. Coverage multi-select ['Candida'] is correct; do NOT add Aspergillus.

**Sources:** US FDA label §1 Limitations of Use, §12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §5.1 https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016 (echinocandin susceptibility testing for C. glabrata/C. parapsilosis) https://www.idsociety.org/practice-guideline/candidiasis/

### A19 · Drug Interactions (missing)

**Was:** ↑ sirolimus/nifedipine/itraconazole (weak CYP3A4 inhibitor)

**Now:** ↑ sirolimus/nifedipine/itraconazole (weak CYP3A4 inhibitor；監測毒性、必要時減量)；↑ amphotericin B deoxycholate AUC 30% (UK SmPC：僅效益明確大於風險時併用並監測)

**Why:** UK SmPC 4.4/4.5 lists the amphotericin B deoxycholate interaction, and it is missing from the column and the body table. The body's Saccharomyces boulardii row has no label source; flag it as unsourced, although the claim is plausible.

**Sources:** UK SmPC §4.5 'Co-administration of micafungin and amphotericin B desoxycholate was associated with a 30 % increase' https://www.medicines.org.uk/emc/product/11959/smpc; US FDA label §7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### A20 · Renal dose, HD, CRRT (minor)

**Was:** No adjustment needed

**Now:** No adjustment (incl. CrCl <30) ; HD: 不可透析，透析後無須補充劑量 (TW/US label)；CRRT: 不需調整 (CVVHDF 研究, Vossen 2017 AAC PMID 28584142)

**Why:** The value is correct, but nothing supports the HD/CRRT parts. The label covers HD. For CRRT, a PubMed PK study (verified) found no dose change was needed during CVVHDF. The body claim 'no adjustment ... CRRT' also needs this citation.

**Sources:** US FDA label §8.6, §12.3 Renal Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert §6.7 腎功能不全 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; Vossen MG et al. Antimicrob Agents Chemother 2017;61(8):e02425-16, PMID 28584142 (verified) https://pubmed.ncbi.nlm.nih.gov/28584142/

### A21 · Page body (error)

**Was:** Final line: 'Would you like me to add a comparison table with other echinocandins (caspofungin, anidulafungin)?'

**Now:** REMOVE the final line 'Would you like me to add a comparison table with other echinocandins (caspofungin, anidulafungin)?'. Keep the 'Brief Summary for Database Fields' table but update its Pregnancy, Breastfeeding, Hepatic, Pediatric, Adult dose, Side effects, Monitor and Coverage rows to match the corrected properties (A1, A3, A5, A7, A14, A10, A13, A18). The Coverage row's 'Aspergillus (fungistatic, salvage only)' should carry the same 'not approved / unsourced' flag.

**Why:** This is pasted AI-chat text, which the ground rules say to remove. The 'Brief Summary for Database Fields' table is also chat output, and its Pregnancy, Breastfeeding, Hepatic and Pediatric rows repeat the errors in A1, A3, A5 and A7. Update those rows to match the corrected properties, or remove the table.

**Sources:** Ground rules (pasted AI-chat text)

### A22 · Page body (unsupported)

**Was:** Notes #3: 'CNS candidiasis in neonates: Requires high doses (10–15 mg/kg) for adequate CNS penetration — CSF levels are unreliable at standard doses'

**Now:** CNS candidiasis in <4 mo: dose not established; ≥10 mg/kg QD may be necessary (rabbit HCME model + limited trial data; CSF penetration could not be concluded). UK: e.g. 10 mg/kg due to dose-dependent CNS penetration.

**Why:** The labels do not support a 10–15 mg/kg requirement or 'adequate CNS penetration'. The 'CSF unreliable' point refers to a rabbit model where micafungin could not be reliably detected in CSF.

**Sources:** US FDA label §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC §4.2 https://www.medicines.org.uk/emc/product/11959/smpc

### A23 · Page body (minor)

**Was:** Regulatory Note (EMA): Hepatocellular tumors ... limits recommendations for prolonged use in some regions.

**Now:** **Regulatory note (UK SmPC 4.1/4.4/5.3; US 13.1 / TW 10.3):** Foci of altered hepatocytes and hepatocellular tumours in rats after ≥3 months' treatment; assumed tumour threshold is in the range of clinical exposure; clinical relevance unknown. UK: use only if other antifungals are not appropriate; monitor LFTs carefully; discontinue early if significant and persistent ALT/AST elevation; careful risk/benefit in severe hepatic impairment/chronic liver disease (cirrhosis, viral hepatitis, neonatal liver disease).

**Why:** The substance is correct, but the note should cite the actual label sections and give the UK restriction and its stopping rule.

**Sources:** UK SmPC §4.1, §4.4 https://www.medicines.org.uk/emc/product/11959/smpc; US FDA label §13.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### B1 · Pregnancy (error)

**Was:** Category C; use only if clearly needed

**Now:** No human data; animal (rabbit, 4× human dose): visceral abnormalities & abortion → may cause fetal harm (TW/US label). UK SmPC: do not use unless clearly necessary

**Why:** The FDA retired letter categories, and the house rules forbid writing 'Category C' as if it were current. The current US and Taiwan labels give only a narrative. Quotes: US §8.1 says 'may cause fetal harm… visceral abnormalities and increased abortion'. TW 6.1 says '可能會造成胎兒傷害…內臟畸形及流產'. UK SmPC 4.6 says 'should not be used during pregnancy unless clearly necessary'.

**Sources:** US label §8.1 Pregnancy – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert 6.1 懷孕 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC 4.6 – https://www.medicines.org.uk/emc/product/11959/smpc

### B2 · Page body (error)

**Was:** ## Pregnancy: "**Category C** (FDA) / "May cause fetal harm" (EMA)" … plus the 'Brief Summary' table row 'Category C; use only if clearly needed'

**Now:** Replace the first line with: "FDA letter categories retired (PLLR). TW/US label: based on animal data may cause fetal harm (rabbits, 4× MRHD: visceral abnormalities, abortion); insufficient human data. UK SmPC 4.6: no human data, crosses placenta in animals; do not use unless clearly necessary." Keep the 'consider alternatives (e.g., amphotericin B)' bullet and add the citation 'IDSA 2016: AmB is the treatment of choice for invasive candidiasis in pregnancy; echinocandin use is cautioned'. Change the summary-table row to match the B1 text.

**Why:** Body and summary table repeat the retired letter category. Also, 'May cause fetal harm' is the FDA/TW wording; the UK/EU wording is 'should not be used unless clearly necessary'. The amphotericin B alternative is supported by IDSA 2016 ('AmB is the treatment of choice for invasive candidiasis in pregnant women… few data concerning the echinocandins; thus, their use is cautioned').

**Sources:** US label §8.1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC 4.6 – https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016 Candidiasis guideline, 'Considerations During Pregnancy' – https://www.idsociety.org/practice-guideline/candidiasis/ (PMID 26679628)

### B3 · Breastfeeding (error)

**Was:** Caution; low infant exposure expected

**Now:** Acceptable (LactMed): no human data, but >99% protein-bound + poor oral bioavailability → unlikely to reach infant; not a reason to stop breastfeeding

**Why:** LactMed is the designated source for breastfeeding. Its summary says: 'unlikely to reach the milk and be absorbed by the infant… If a mother requires micafungin, it is not a reason to discontinue breastfeeding.' 'Caution' understates this. The labels (US 8.2, TW 6.2, UK 4.6) only give the generic weigh-the-benefit wording.

**Sources:** LactMed NBK574072 'Summary of Use during Lactation' (rev 2025-04-15) – https://www.ncbi.nlm.nih.gov/books/NBK574072/

### B4 · Page body (error)

**Was:** ## Breastfeeding: "**Weigh maternal benefit vs. unquantified infant risk**; many references advise caution or avoidance" (+ summary row 'Caution; low infant exposure expected')

**Now:** Replace the bold bullet with: "LactMed (2025): not a reason to discontinue breastfeeding; any amount absorbed from milk is far less than an infant IV dose (micafungin is given IV to infants <4 months). Label (US 8.2 / TW 6.2 / UK 4.6): present in rat milk; no human data." Change the summary row to match the B3 text.

**Why:** 'Many references advise caution or avoidance' has no source and contradicts LactMed. Keep the two correct bullets (excreted in animal milk; >99% protein-bound / poor oral bioavailability).

**Sources:** LactMed NBK574072 – https://www.ncbi.nlm.nih.gov/books/NBK574072/; US label §8.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### B5 · Pediatric dose (error)

**Was:** ≥4mo: 2 mg/kg/d (invasive), 3 mg/kg/d (esophageal); <br>Neonates: 4-10 mg/kg/d; <br>CNS: 10-15 mg/kg/d

**Now:** ≥4mo: invasive 2 mg/kg/d (max 100 mg); esophageal ≤30 kg 3 mg/kg/d, >30 kg 2.5 mg/kg/d (max 150 mg); HSCT prophylaxis 1 mg/kg/d (max 50 mg); <br><4mo (無腦膜腦炎/眼部擴散): 4 mg/kg/d (TW/US); UK SmPC 4–10 mg/kg/d, prophylaxis 2 mg/kg/d; <br>CNS (<4mo): 劑量未確立；TW/US: 可能需 ≥10 mg/kg/d；UK SmPC: 較高劑量 e.g. 10 mg/kg/d

**Why:** (a) No label recommends '10–15 mg/kg' as a CNS dose. UK SmPC 4.2: 'If CNS infection is suspected, a higher dosage (e.g. 10 mg/kg) should be used'. TW 6.4/US 8.4: '可能需要10 mg/kg每天一次或更高的劑量'. The 10–15 range only describes safety data. (b) The stocked product's insert (TW 3.1) gives 4 mg/kg for infants under 4 months; 4–10 is the UK range and should be labeled as such. (c) The column is missing the >30 kg esophageal dose (2.5 mg/kg), the max doses and prophylaxis 1 mg/kg (max 50 mg) (TW 表2/US Table 2). (d) The UK SmPC does not approve esophageal candidiasis under 16 years.

**Sources:** Taiwan insert 3.1 用法用量 / 表2 and 6.4 小兒 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US label §2.2–2.3, §8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC 4.1 and 4.2 (children <4 months table) – https://www.medicines.org.uk/emc/product/11959/smpc

### B6 · Page body (error)

**Was:** Pediatric table rows 'Esophageal candidiasis (≥4 months) 3 mg/kg/day IV (max 150 mg)'; 'Neonates (<4 months) — systemic candidiasis 4–10 mg/kg/day IV'; 'Neonates — suspected CNS involvement **10–15 mg/kg/day IV**'; and Notes #3 'Requires high doses (10–15 mg/kg) for adequate CNS penetration — CSF levels are unreliable at standard doses'

**Now:** Esophageal row → '≤30 kg: 3 mg/kg/day; >30 kg: 2.5 mg/kg/day (max 150 mg) (TW/US; UK: not approved <16 y)'. <4 months row → '4 mg/kg/day IV (TW/US, without meningoencephalitis/ocular dissemination); UK SmPC 4–10 mg/kg/day'. Add row '<4 months HSCT prophylaxis: 2 mg/kg/day (UK SmPC only; not approved TW/US)'. CNS row → 'Dose not established. TW/US: ≥10 mg/kg/day may be necessary; 10–15 mg/kg/day studied without new safety signals. UK SmPC: higher dose, e.g. 10 mg/kg/day'. Notes #3 → 'CNS candidiasis in infants <4 months: TW/US 6.4/8.4 — ≥10 mg/kg/day may be necessary (rabbit HCME model + limited trial data; in the rabbit model CSF levels were not reliably detectable; CSF penetration in infants could not be concluded). UK SmPC 4.2/5.2 — e.g. 10 mg/kg due to dose-dependent CNS penetration.'

**Why:** Same sources as B5. The CSF statement in the labels comes from a rabbit model ('無法可靠地檢測到腦脊液中Micafungin的濃度'), not from human 'standard doses'.

**Sources:** Taiwan insert 6.4 小兒 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US label §8.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC 4.2 and 5.2 (paediatric, CNS penetration) – https://www.medicines.org.uk/emc/product/11959/smpc

### B7 · Hepatic dose (minor)

**Was:** Mild-mod: no change; Severe: caution

**Now:** Mild–severe: no adjustment (TW/US label); <br>UK SmPC: severe → not recommended (insufficient data)

**Why:** House rule: prefer the stocked product's label and mention the other one. TW 6.6: '輕度、中度或重度肝功能不全的病人不須調整Micafungin的劑量'. US §8.6: 'not required in patients with mild, moderate, or severe hepatic impairment'; per §12.3, severe impairment lowered AUC by about 30% and M-5 rose 2.3×, comparable to patients. UK SmPC 4.2: 'insufficient data… use is not recommended' in severe impairment. 'Caution' matches neither.

**Sources:** Taiwan insert 6.6 肝功能不全 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US label §8.6, §12.3 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC 4.2 Hepatic impairment – https://www.medicines.org.uk/emc/product/11959/smpc

### B8 · Page body (unsupported)

**Was:** Hepatic table 'Severe (Child-Pugh C): Use with caution; limited data. Some clinicians prefer anidulafungin (non-hepatic elimination)'; Notes #5 '**Anidulafungin preferred in severe hepatic impairment** (non-hepatic elimination)'; summary row 'Mild-mod: no change; Severe: caution'

**Now:** Severe row → 'TW/US: no adjustment (Child-Pugh 10–12: AUC ↓~30%, M-5 ↑2.3×, exposure comparable to patients). UK SmPC: insufficient data → not recommended; careful risk/benefit in cirrhosis/chronic liver disease (4.4)'. Notes #5 → 'Severe hepatic impairment: no dose change per TW/US label, but UK SmPC advises against use; consider an alternative if following UK/EU labeling' (flag: the 'anidulafungin preferred' statement has no source; keep only if the owner supplies one). Summary row → as in B7.

**Why:** The anidulafungin preference is plausible but no label or guideline I checked states it. IDSA 2016 only says caspofungin is the only echinocandin needing hepatic dose reduction. The body should also reflect what the stocked product's label says.

**Sources:** Taiwan insert 6.6 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC 4.2, 4.4 – https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016 (echinocandin pharmacology: 'Caspofungin is the only echinocandin for which dosage reduction is recommended…') – https://www.idsociety.org/practice-guideline/candidiasis/

### B9 · Renal dose, HD, CRRT (missing)

**Was:** No adjustment needed

**Now:** No adjustment (incl. CrCl <30); <br>HD: not dialyzable, no supplemental dose (TW/US); <br>CRRT: no adjustment (CVVH/CVVHDF PK studies)

**Why:** The column title asks for HD and CRRT, and the labels and literature cover both. TW 6.7: '腎功能不全病人無須調整…血液透析之後無須補充劑量'. US §12.3 'not dialyzable. Supplementary dosing should not be required following hemodialysis'. UK 4.2/5.2 say the same. No label covers CRRT. Maseda 2014 (CVVH, 100 mg/day): 'no removal of micafungin by CVVH or need for dose adjustment'. Vossen 2017 (CVVHDF, AN69): 'no dose modification is necessary'.

**Sources:** Taiwan insert 6.7 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US label §12.3 Renal Impairment – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Maseda E et al. J Antimicrob Chemother 2014;69:1624-32, PMID 24505092 – https://pubmed.ncbi.nlm.nih.gov/24505092/; Vossen MG et al. Antimicrob Agents Chemother 2017;61:e02425-16, PMID 28584142 – https://pubmed.ncbi.nlm.nih.gov/28584142/

### B10 · Page body (unsupported)

**Was:** Renal section: '**No dose adjustment required** for any degree of renal impairment, hemodialysis, or CRRT.'

**Now:** Keep the text and add the citations: 'Renal/HD: TW 6.7, US 12.3, UK 4.2. CRRT (not in labels): CVVH – Maseda 2014 (PMID 24505092); CVVHDF/AN69 – Vossen 2017 (PMID 28584142).'

**Why:** The CRRT claim is correct but has no source. The labels do not mention CRRT, so it needs PubMed support.

**Sources:** https://pubmed.ncbi.nlm.nih.gov/24505092/; https://pubmed.ncbi.nlm.nih.gov/28584142/

### B11 · Side Effects (missing)

**Was:** LFT↑, thrombocytopenia

**Now:** LFT↑, thrombocytopenia, neutropenia, GI, thrombophlebitis, anemia, hypokalemia

**Why:** All options already exist in the schema. Support for each: US Highlights/§6 most common: 'diarrhea, nausea, vomiting, abdominal pain, pyrexia, thrombocytopenia, neutropenia, and headache' (→ GI, neutropenia). US/TW §5.5: 'phlebitis and thrombophlebitis'; phlebitis was 19% in the esophageal trial (→ thrombophlebitis). US/TW §5.2: hemolysis/hemolytic anemia (→ anemia). UK 4.8 lists hypokalaemia as common, and US pediatric ≥4 months is 22% (→ hypokalemia). Optional: SJS/TEN, which is a UK SmPC 4.4 special warning and a US §6.2 postmarketing reaction.

**Sources:** US label §5, §6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert 5.1, 8.2 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC 4.4, 4.8 – https://www.medicines.org.uk/emc/product/11959/smpc

### B12 · Monitor (missing)

**Was:** LFT, CBC

**Now:** LFT, CBC, renal

**Why:** US Highlights §5.4: 'Renal Effects: Elevations in BUN and creatinine… Monitor renal function'. TW 5.1 腎臟效應 says '應監測腎功能惡化的跡象'. UK 4.4: 'Patients should be closely monitored for worsening of renal function.'

**Sources:** US label §5.4 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; Taiwan insert 5.1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC 4.4 – https://www.medicines.org.uk/emc/product/11959/smpc

### B13 · Page body (unsupported)

**Was:** Monitor table: LFTs 'Baseline, then at least weekly'; CBC 'Weekly'; infusion reaction 'During and 30 min after infusion'; no renal row

**Now:** Add row 'Renal function (BUN/SCr) – periodically; watch for worsening (US 5.4, UK 4.4)'. Flag the frequencies (weekly, 30 min) as unsourced; the labels only say 'monitor'. Suggested wording: 'Baseline and periodically (frequency not specified in label)', unless the owner has a local protocol. Change 'Discontinue if significant hepatic deterioration or hemolysis occurs' to 'UK SmPC 4.4: discontinue early if significant and persistent ALT/AST elevation; US: discontinue if severe hepatic dysfunction; evaluate risk/benefit if hemolysis'.

**Why:** No label gives these monitoring frequencies. The renal monitoring the label calls for is missing.

**Sources:** US label §5.2–5.5 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC 4.4 – https://www.medicines.org.uk/emc/product/11959/smpc

### B14 · Drug Interactions (missing)

**Was:** ↑ sirolimus/nifedipine/itraconazole (weak CYP3A4 inhibitor)

**Now:** ↑ sirolimus/nifedipine/itraconazole (weak CYP3A4 inhibitor; monitor toxicity, ↓dose if needed); ↑ amphotericin B deoxycholate exposure 30% (UK SmPC: combine only if benefit > risk)

**Why:** UK SmPC 4.5: 'Co-administration of micafungin and amphotericin B desoxycholate was associated with a 30 % increase in amphotericin B desoxycholate exposure… should only be used when the benefits clearly outweigh the risks'. This is also a 4.4 special warning.

**Sources:** UK SmPC 4.4, 4.5 – https://www.medicines.org.uk/emc/product/11959/smpc; US label §7 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### B15 · Page body (unsupported)

**Was:** Drug-interaction table: no amphotericin B row; '*Saccharomyces boulardii* \| ↓ probiotic efficacy \| Avoid concurrent use'

**Now:** Add row '**Amphotericin B deoxycholate** \| ↑ AmB-d exposure ~30% \| Use only if benefit clearly outweighs risk; monitor AmB-d toxicity (UK SmPC 4.4/4.5)'. Optionally add numbers: nifedipine AUC ↑18%, Cmax ↑42%; itraconazole AUC ↑22%. Flag the S. boulardii row: no label or guideline source; keep only if the owner cites a reference.

**Why:** The AmB-d interaction is a labeled warning and is missing. The S. boulardii row is plausible (an antifungal against a yeast probiotic) but has no source.

**Sources:** UK SmPC 4.5 – https://www.medicines.org.uk/emc/product/11959/smpc; US label §7.2 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### B16 · Adult dose (minor)

**Was:** Candidemia: 100 mg IVD QD; <br>Esophageal: 150 mg IVD QD; <br>Endocarditis: 150 mg IVD QD; <br>Prophylaxis: 50 mg IVD QD

**Now:** Candidemia/invasive: 100 mg IVD QD (UK SmPC: ≤40 kg 2 mg/kg/d; inadequate response → 200 mg QD (>40 kg) or 4 mg/kg/d (≤40 kg)); <br>Esophageal: 150 mg IVD QD; <br>Endocarditis (off-label, IDSA 2016): 150 mg IVD QD; <br>Prophylaxis: 50 mg IVD QD

**Why:** The 100/150/50 doses are correct (TW 表1, US Table 1, UK 4.2). Endocarditis is not a labeled indication; the US/TW limitation says 'not adequately studied in patients with endocarditis'. The 150 mg dose comes from IDSA 2016 ('high-dose echinocandin (… micafungin 150 mg daily …)'), so mark it off-label. Also missing: the UK escalation to 200 mg/day and the UK weight-based dose for adults 40 kg or less.

**Sources:** Taiwan insert 2 適應症 (使用限制), 表1 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; UK SmPC 4.2 – https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016, Candida endocarditis – https://www.idsociety.org/practice-guideline/candidiasis/

### B17 · Page body (minor)

**Was:** Indications list: '- *Candida* endocarditis (high-dose)'; 'Prophylaxis in HSCT recipients with neutropenia'; Adult dose table endocarditis row '(high-dose per IDSA)'

**Now:** Endocarditis bullet → '*Candida* endocarditis — off-label (IDSA 2016 high-dose 150 mg; label: not adequately studied in endocarditis, osteomyelitis, meningoencephalitis)'. Add bullet 'Infants <4 months: candidemia/disseminated/peritonitis/abscess WITHOUT meningoencephalitis or ocular dissemination (TW/US)'. Prophylaxis bullet → 'Prophylaxis: HSCT recipients (TW/US); UK also allogeneic HSCT or expected neutropenia (ANC <500) ≥10 days'. Add line 'UK/EU SmPC 4.1: use only if other antifungals are not appropriate (rat liver-tumour signal)'.

**Why:** The body presents an off-label use as if it were labeled. It also leaves out the labeled indication for infants under 4 months, the label's limitations of use, and the UK SmPC restriction.

**Sources:** Taiwan insert 2 適應症 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US label §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; UK SmPC 4.1 – https://www.medicines.org.uk/emc/product/11959/smpc

### B18 · Indications (minor)

**Was:** Candidiasis

**Now:** Candidiasis, Peritonitis

**Why:** 'Candida peritonitis and abscesses' is a labeled indication in TW 2, US §1 and UK 'invasive candidiasis'. The schema has a 'Peritonitis' option. Do not add Endocarditis (off-label) or FN; prophylaxis is not FN treatment.

**Sources:** Taiwan insert 2 適應症 – https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060897%E8%99%9F; US label §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### B19 · Page body (minor)

**Was:** Side Effects: 'Anaphylaxis (<0.2%)'; 'Hemolysis / hemolytic anemia (acute, transient; seen at higher doses)'; Common list lacks abdominal pain/hypokalemia; Serious list lacks SJS/TEN and renal effects

**Now:** 'Anaphylactoid reactions ~0.2% (6/3028; UK SmPC 4.8), incl. shock'. 'Hemolysis / hemolytic anemia — rare (acute intravascular hemolysis reported in a volunteer at 200 mg + prednisolone; US/TW 5.2)': remove 'seen at higher doses'. Add abdominal pain and hypokalemia to Common. Add to Serious: 'SJS/TEN (UK 4.4; US postmarketing)' and 'BUN/SCr ↑, renal impairment/acute renal failure (US/TW 5.4, UK 4.4)'.

**Why:** The SmPC gives 0.2%, not '<0.2%'. No label says hemolysis is dose-dependent. Several labeled warnings are missing.

**Sources:** UK SmPC 4.4, 4.8 – https://www.medicines.org.uk/emc/product/11959/smpc; US label §5.2, §5.4, §6 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda

### B20 · Page body (minor)

**Was:** '**Regulatory Note (EMA):** Hepatocellular tumors and foci of altered hepatocytes observed in animal studies at exposure levels comparable to clinical doses. Clinical relevance uncertain; limits recommendations for prolonged use in some regions.'

**Now:** '**Regulatory Note (UK/EU SmPC 4.1/4.4):** Foci of altered hepatocytes and hepatocellular tumours in rats after ≥3 months' treatment; UK: assumed threshold approximately in the range of clinical exposure (US 13.1/TW 10.3: at ~5–8× human AUC); clinical relevance unknown. → UK/EU: use only if other antifungals are not appropriate; monitor LFTs carefully; discontinue early if significant and persistent ALT/AST elevation; careful risk/benefit in severe hepatic impairment, cirrhosis/advanced fibrosis, viral hepatitis, neonatal liver disease. (Usage restriction is UK/EU only; the TW/US labels describe the rat findings in nonclinical toxicology but carry no restriction.)'

**Why:** The animal finding is stated correctly. The consequence is not: the SmPC restriction is 'only if other antifungals are not appropriate', not a limit on prolonged use. The source is the SmPC, not an EMA statement.

**Sources:** UK SmPC 4.1, 4.4, 5.3 – https://www.medicines.org.uk/emc/product/11959/smpc

### B21 · Page body (unsupported)

**Was:** Coverage: '*C. parapsilosis*: susceptible but higher MICs — may have reduced efficacy'; '*C. auris*: recommended by CDC as initial therapy'; '**Fungistatic** against *Aspergillus* spp. — used in salvage/combination therapy only'; Notes #4 'C. parapsilosis: Consider alternative (fluconazole or amphotericin B)…'

**Now:** C. parapsilosis: 'innately higher echinocandin MICs → may be less responsive (IDSA 2016); EUCAST S ≤0.002 / R >2 mg/L (UK SmPC 5.1)'. Add: 'Resistance: Fks1/Fks2 glucan-synthase mutations (UK SmPC 5.1); consider echinocandin susceptibility testing after prior echinocandin exposure or for C. glabrata/C. parapsilosis (IDSA 2016)'. C. auris: 'echinocandins are most commonly used first-line (Long 2024, PMID 39137491)'. Aspergillus: 'inhibits actively growing hyphae (UK SmPC 5.1); not a labeled indication; efficacy vs non-Candida fungi not established (US/TW 1)'. Notes #4 → 'C. parapsilosis: echinocandin MICs innately higher (IDSA 2016); consider fluconazole if susceptible and clinically stable (IDSA 2016 step-down)'.

**Why:** The statements are plausible but have no sources. I could not fetch the CDC page (proxy denied), so for C. auris I propose PubMed review PMID 39137491 ('Echinocandins are most commonly used as the first line therapy'). The Aspergillus wording should make clear that it is not a labeled use.

**Sources:** UK SmPC 5.1 – https://www.medicines.org.uk/emc/product/11959/smpc; US label §1 – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda; IDSA 2016 – https://www.idsociety.org/practice-guideline/candidiasis/; Long B et al. Am J Emerg Med 2024;84:162-7, PMID 39137491 – https://pubmed.ncbi.nlm.nih.gov/39137491/

### B22 · Notes (minor)

**Was:** Neonates have \~2–3× higher clearance than adults → require higher weight-based doses.

**Now:** <4 mo: 體重校正清除率約為成人 2.3× (UK SmPC 5.2) → 需較高 mg/kg 劑量；4 mg/kg QD 之 AUC ≈ 成人 100 mg (US 12.3)。Echinocandins 在眼、CNS、尿液無法達治療濃度 (IDSA 2016)。

**Why:** UK SmPC 5.2 says clearance in infants under 4 months is about 2.6× that of 12–16 year olds and 2.3× that of adults, so '2–3×' is roughly right but loose. IDSA 2016 adds a key pearl: 'Echinocandins achieve therapeutic concentrations in all infection sites with the exception of the eye, CNS, and urine.'

**Sources:** UK SmPC 5.2 – https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016 – https://www.idsociety.org/practice-guideline/candidiasis/

### B23 · Page body (unsupported)

**Was:** Final line: 'Would you like me to add a comparison table with other echinocandins (caspofungin, anidulafungin)?'

**Now:** REMOVE

**Why:** This is pasted AI-chat text, which the house rules allow removing. The 'Brief Summary for Database Fields' table above it also looks AI-generated. Keep it, but update its Pregnancy, Breastfeeding, Hepatic and Pediatric rows to match B1, B3, B5 and B7.

**Sources:** Ground rule (pasted AI-chat text) – n/a; summary-row content per US label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=653f8c75-b5b8-41ea-8b33-5baad1680bda and LactMed https://www.ncbi.nlm.nih.gov/books/NBK574072/

### B24 · Page body (minor)

**Was:** Adult Dose table lacks UK escalation; Duration 'Minimum 14 days after last positive blood culture + symptom resolution'

**Now:** Add under the table: 'UK SmPC: if response inadequate, may ↑ to 200 mg/day (>40 kg) or 4 mg/kg/day (≤40 kg). Prophylaxis: continue ≥1 week after neutrophil recovery. Esophageal: ≥1 week after symptom resolution.' Change Duration to '≥14 days after documented blood-culture clearance and symptom resolution (IDSA 2016; UK SmPC: minimum 14 days and ≥1 week after 2 negative cultures)'.

**Why:** The duration statement is correct. It needs a source and the UK SmPC duration details.

**Sources:** UK SmPC 4.2 – https://www.medicines.org.uk/emc/product/11959/smpc; IDSA 2016 – https://www.idsociety.org/practice-guideline/candidiasis/

## Verified correct as written

- Category: 'Echinocandin antifungal' (US §1; UK §5.1 ATC J02AX05)
- Mechanism: inhibits 1,3-β-D-glucan synthesis; target absent in mammalian cells (US §12.4; UK §5.1)
- Coverage multi-select ['Candida'] is appropriate (US §12.4 species list)
- Indications multi-select ['Candidiasis'] is correct
- Adult doses: candidemia/IC 100 mg QD, esophageal 150 mg QD, HSCT prophylaxis 50 mg QD (TW 表1, US Table 1, UK 4.2)
- No loading dose (US §2.1; IDSA 2016 micafungin 100 mg daily without a loading dose)
- Infuse over ≥1 h, dilute in NS or D5W, no bolus (US §2.4–2.5)
- Candidemia duration ≥14 days after blood culture clearance and symptom resolution (IDSA 2016; UK 4.2 minimum 14 days)
- Renal: no adjustment; not dialyzable; >99% protein-bound (US §8.6, §10, §12.3; TW §6.7)
- Hepatic mild–moderate: no adjustment (all labels)
- Pediatric ≥4 mo: IC 2 mg/kg (max 100 mg); prophylaxis 1 mg/kg (max 50 mg) in the body table (US Table 2)
- Drug interactions: sirolimus AUC +21%, nifedipine and itraconazole exposure up; cyclosporine/tacrolimus PK unaffected; not a P-gp substrate or inhibitor; weak CYP3A inhibitor (US §7, §12.3)
- Fecal excretion is the major route, ~71% (US §12.3)
- Endocarditis 150 mg matches IDSA 2016 (but it is off-label; see A14)
- Side effects LFT↑ and thrombocytopenia are labelled
- Monitor LFT and CBC are appropriate (US §5.2–5.3)
- Body side effects: hepatotoxicity, hemolysis, infusion (histamine) reactions, phlebitis with peripheral lines (US §5.5) are labelled
- Animal pregnancy data: visceral abnormalities, placental transfer (US §8.1; UK §4.6)
- Breastfeeding body: no human data, excreted in animal milk, >99% protein-bound and poor oral bioavailability (US §8.2; LactMed)
- Category 'Echinocandin antifungal' (IV only) matches UK 5.1 (ATC J02AX05) and TW 10.1.
- Mechanism matches UK 5.1 and TW 10.1: inhibits 1,3-β-D-glucan synthase (non-competitively, per UK 5.1); the target is absent in mammalian cells.
- Coverage tag 'Candida' (the only appropriate schema option). 'Fungicidal against most Candida spp.' matches UK 5.1. TW 10.2 lists albicans, glabrata, guilliermondii, krusei, parapsilosis and tropicalis.
- Adult doses match TW 表1, US Table 1 and UK 4.2: 100 mg QD for candidemia/invasive, 150 mg QD esophageal, 50 mg QD HSCT prophylaxis.
- Endocarditis 150 mg QD matches IDSA 2016 ('high-dose echinocandin… micafungin 150 mg daily'); it is off-label.
- No loading dose: no label gives one; caspofungin's 70 mg and anidulafungin's 200 mg loading doses are per IDSA.
- Administration: dilute in NS or D5W and infuse over 1 hour; faster infusion raises histamine-mediated reactions (TW 3.2, US 2.5).
- Renal: no adjustment for any CrCl; not dialyzable; no supplemental dose after HD (TW 6.7, US 8.6/12.3, UK 4.2). CRRT no adjustment is supported by PMID 24505092 and 28584142.
- >99% protein-bound; fecal excretion ~71% is the main route (US 12.3, UK 5.2).
- Mild–moderate hepatic impairment: no adjustment (all three labels).
- Pediatric dosing from 4 months: invasive 2 mg/kg/d (max 100 mg); esophageal 3 mg/kg (max 150 mg) for 30 kg or less; prophylaxis 1 mg/kg (max 50 mg) (TW 表2, US Table 2).
- Neonatal clearance is higher (UK 5.2: 2.3× adults), so higher mg/kg doses are needed.
- Drug interactions: sirolimus AUC +21%, nifedipine AUC +18%/Cmax +42%, itraconazole AUC +22%. No effect on cyclosporine or tacrolimus PK. Weak CYP3A inhibitor in vitro; not a P-gp substrate or inhibitor (US 7/12.3, TW 7, UK 4.5).
- Phlebitis and thrombophlebitis are more common with peripheral lines (US/TW 5.5; UK 4.8 notes phlebitis mostly in HIV patients with peripheral lines).
- Infusion reactions (rash, pruritus, facial swelling, vasodilatation), hepatotoxicity, hemolysis and anaphylaxis/shock are labeled warnings.
- Monitor tags LFT and CBC are appropriate.
- Rat foci of altered hepatocytes and hepatocellular tumours at near-clinical exposure (UK 4.4/5.3).
- Candidemia duration of at least 14 days after clearance and symptom resolution (IDSA 2016, UK 4.2).
- Breastfeeding body bullets 'excreted in animal milk; no human data' and '>99% protein-bound, poor oral bioavailability' (US 8.2, LactMed).
- Pregnancy body: animal fetal toxicity, visceral abnormalities, placental transfer (US 8.1, UK 4.6); amphotericin B as preferred alternative (IDSA 2016).
- The IDSA 2016 guideline was fetched and confirmed; PMIDs 24505092, 28584142, 39137491 and 26679628 were checked with NCBI esummary.

## Apply log

- Pregnancy property: removed Category C; no FDA letter category (PLLR); rabbit 4x MRHD visceral abnormalities/abortion; TW/US 6.1/8.1; UK SmPC 4.6 (Chinese, merged A/B fixes)
- Breastfeeding property: acceptable per LactMed, >99% protein-bound/poor oral bioavailability, not a reason to stop; alternative fluconazole
- Hepatic dose property: no adjustment mild-severe (TW/US; Child-Pugh 10-12 AUC down ~30%); UK SmPC severe not recommended
- Pediatric dose property: >=4mo IC/esophageal weight-banded/prophylaxis; <4mo 4 mg/kg (TW/US), UK 4-10 mg/kg and prophylaxis 2 mg/kg; CNS <4mo dose not established, >=10 mg/kg
- Notes property: <4 mo clearance 2.3x adults (2.6x older children), AUC 131 equivalence (US 12.3/TW 11); echinocandin poor eye/CNS/urine levels (IDSA 2016)
- Side Effects multi-select: LFT↑, thrombocytopenia, GI, neutropenia, thrombophlebitis, anemia, hypokalemia, SJS/TEN, AKI
- Monitor multi-select: LFT, CBC, renal
- Indications multi-select: Candidiasis, Peritonitis
- Adult dose property: merged UK ≤40 kg / 200 mg escalation, endocarditis off-label IDSA 2016, prophylaxis HSCT/UK neutropenia, infuse 1 hr
- Drug Interactions property: added monitoring/dose reduction and AmB deoxycholate +30% (UK SmPC)
- Renal dose, HD, CRRT property: incl. CrCl <30; HD not dialyzable, no supplement (TW/US); CRRT no adjustment (Maseda 2014 PMID 24505092, Vossen 2017 PMID 28584142; both PMIDs verified via esummary)
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body Indications: rewritten bullets (TW/US/UK scopes, <4 mo restriction, UK prophylaxis criteria, endocarditis off-label, UK use-only-if-others-inappropriate)
- Body Coverage: UK 5.1 citation, added C. guilliermondii, C. parapsilosis IDSA/EUCAST, Fks resistance + susceptibility testing, C. auris cited Long 2024 PMID 39137491, Aspergillus flagged not labeled/unsourced salvage
- Body Adult Dose: endocarditis row marked off-label; UK SmPC escalation/prophylaxis/esophageal duration note; Duration reworded with IDSA/UK
- Body Renal: added no supplemental dose and source citations (TW 6.7, US 12.3, UK 4.2, Maseda, Vossen)
- Body Hepatic severe row: TW/US no adjustment with PK details, UK not recommended; anidulafungin statement flagged expert opinion
- Body Pediatric table: esophageal weight bands, Neonates->Infants <4 months rows, new <4 mo UK prophylaxis row, CNS row rewritten; note under table corrected
- Body Side Effects: abdominal pain, hypokalemia added to common; hemolysis reworded (removed 'seen at higher doses'); anaphylactoid 0.2% 6/3028; renal/ARF; SJS/TEN
- Body Regulatory Note: replaced EMA note with UK/EU SmPC 4.1/4.4/5.3 rat liver tumour text
- Body Monitor: frequency flags on three rows; renal function row added; Discontinue sentence replaced with UK/US wording
- Body Drug Interactions: nifedipine/itraconazole numbers, S. boulardii flagged unsourced, AmB deoxycholate row added
- Body Pregnancy: Category C removed, PLLR/TW/US/UK text, alternatives bullet cited IDSA 2016
- Body Breastfeeding: rewritten per LactMed and labels
- Body Notes #3, #4, #5 rewritten as specified
- Summary table rows updated (Indications, Coverage flag, Adult dose, Renal, Hepatic, Pediatric, Side effects, Monitor, Drug interactions, Pregnancy, Breastfeeding)
- Removed pasted AI-chat line 'Would you like me to add a comparison table...'
- Appended References section (US FDA label DailyMed, Taiwan insert TFDA, UK SmPC eMC 11959, LactMed NBK574072 rev 2025-04-15, IDSA 2016 PMID 26679628, Maseda 2014, Vossen 2017, Long 2024)

**Notes from the apply step (needs owner check):**

- Ambiguous fix {field:'Page body', proposed:'REMOVE'}: interpreted as removing the pasted AI-chat closing line; the 'Brief Summary for Database Fields' table was kept and updated per the other agreed fix that explicitly says to keep it

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
