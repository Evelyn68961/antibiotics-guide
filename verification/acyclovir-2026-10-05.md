# Verification: Zovirax (Acyclovir)

- **Notion entry:** [Zovirax (Acyclovir)](https://app.notion.com/263c496dfff18040beccdc67d2349639)
- **Hospital codes:** ZOV01 (Zovirax inj 250 mg), ACY01 (Acylete tab 400 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/acyclovir.json` (plus any `sources/acyclovir-taiwan-insert-*.txt`)

## Product and sources

The Notion entry "Zovirax (Acyclovir)" describes the hospital's IV product ZOV01: Zovirax IV 250 mg/vial (熱威樂素注射劑), GSK, 衛署藥輸字第011326號, NHI BC11326265, ATC J05AB01. Its official labels are the Taiwan insert GDS31/IPI07 (03 Apr 2020), the UK SmPC "Zovirax I.V. 250/500 mg" (eMC 5472, revised 14 Nov 2025) and the US DailyMed acyclovir sodium injection label (setid 23a7cf9e-f21b-06c2-e063-6394a90aa623, Jul 21 2025). The entry also carries oral doses. The hospital's oral product is ACY01, Acylete 400 mg tablet (敵疱治錠), 衛署藥製字第039315號; its labels are the TW insert revision 104.09.23 and the US acyclovir tablet label (setid 05f42300-2a06-45f1-a9b9-6e5c84ae58ec). Breastfeeding was checked against LactMed NBK501195 (revised 2026-02-15). The hospital pages for ZOV01 and ACY01 were checked live (pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=ZOV01 and ACY01), only to identify what is stocked and to list discrepancies.

## Agreed fixes applied in Notion (49)

### A1 · Page body (error)

**Was:** Last line of the page: "Would you like me to add this to your Notion database directly, or do you need any modifications to specific fields?"

**Now:** REMOVE

**Why:** This is pasted AI-chat text, not reference content. The ground rules allow removal.

**Sources:** Ground rule: remove pasted AI-chat text (no external source needed)

### A2 · Adult dose (error)

**Was:** • Obesity: Use adjusted body weight for IV dosing

**Now:** • Obesity: dose on **ideal body weight (IBW)** (FDA label); UK SmPC: actual-weight dosing ≈2× plasma levels → consider dose reduction, esp. renal impairment/elderly. AdjBW used by some centres (Aboelezz 2024, PMID 38364888) but evidence conflicting; IBW had lowest AKI rate (Saad 2025, PMID 39956984)

**Why:** The US label says obese patients should be dosed on ideal body weight. The UK SmPC says actual-body-weight dosing in morbid obesity roughly doubled plasma concentrations and advises considering a dose reduction. No cited source supports adjusted body weight as the standard. The page body's 'Dosing Weight' paragraph states AdjBW as the recommendation ('recent evidence supports AdjBW') with no citation. That paragraph should lead with IBW per the label. AdjBW may stay only as a flagged, unsourced alternative.

**Sources:** US FDA acyclovir sodium injection label, DOSAGE AND ADMINISTRATION > Dosage > Obese Patients: 'Obese patients should be dosed at the recommended adult dose using Ideal Body Weight.' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC Zovirax I.V. 4.2 and 5.2 (Weight): 'In obese patients who receive aciclovir intravenously based on their actual body weight, increased plasma concentrations may be obtained… A dose reduction should therefore be considered in obese patients' https://www.medicines.org.uk/emc/product/5472/smpc

### A3 · Adult dose (error)

**Was:** • HSV encephalitis: 10 mg/kg IV q8h × 21 days (page body: '× **21 days** (per CDC guidelines)')

**Now:** • HSV encephalitis: 10 mg/kg IV q8h × 10 days (FDA/UK/TW label); CDC 2021, IDSA 2008 & 健保給付: 14–21 days. Page body: change '× **21 days** (per CDC guidelines)' to '× 10 days (label); CDC 2021/IDSA 2008: 14–21 days'

**Why:** All three labels give 10 days for HSV encephalitis. The 14–21-day course comes from the IDSA 2008 encephalitis guideline and Taiwan's NHI reimbursement rule (疱疹性腦炎得使用14至21天), not from CDC. A flat '21 days' matches neither source. In the page body, change '× **21 days** (per CDC guidelines)' to '× 10 days (label); IDSA 2008: 14–21 days'.

**Sources:** US FDA IV label, Dosage > HERPES SIMPLEX ENCEPHALITIS: 'Adults and Adolescents… 10 mg/kg… every 8 hours for 10 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2: 'Treatment for herpes encephalitis usually lasts 10 days.' https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 【用法用量】: '治療疱疹性腦炎通常持續10天' https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; Tunkel AR et al. IDSA encephalitis guideline, Clin Infect Dis 2008;47:303-27, PMID 18582201 (verified via esummary) https://pubmed.ncbi.nlm.nih.gov/18582201/

### A4 · Adult dose (minor)

**Was:** • Herpes zoster: **10 mg/kg IV q8h** OR 800 mg PO 5×/day  × 7–10 days

**Now:** • Herpes zoster: 800 mg PO 5×/day × 7–10 days; immunocompromised: **10 mg/kg IV q8h** × 7 days (VZV in immunocompetent, IV: 5 mg/kg q8h — UK SmPC/TW insert)

**Why:** The labels give 10 mg/kg IV only for VZV in immunocompromised patients, for 7 days. For other VZV infections the UK SmPC and TW insert give 5 mg/kg q8h. The oral regimen of 800 mg 5×/day for 7–10 days matches the US tablet label and the Acylete insert (7 days).

**Sources:** US FDA IV label, Dosage > ZOSTER IN IMMUNOCOMPROMISED PATIENTS: '10 mg/kg… every 8 hours for 7 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2 Dosage in adults: VZV 5 mg/kg q8h; immunocompromised VZV 10 mg/kg q8h https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 成人劑量 https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; US acyclovir tablet label, DOSAGE AND ADMINISTRATION: 'Acute Treatment of Herpes Zoster: 800 mg every 4 hours orally, 5 times daily for 7 to 10 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec

### A5 · Adult dose (missing)

**Was:** The column has no IV regimen for mucocutaneous HSV in immunocompromised patients, severe initial genital herpes, HSV prophylaxis in immunocompromised patients, or varicella, and no maximum dose.

**Now:** Append: <br>• Mucocutaneous HSV (immunocompromised): 5 mg/kg IV q8h × 7 days<br>• Severe initial genital herpes: 5 mg/kg IV q8h × 5 days<br>• HSV prophylaxis (immunocompromised, e.g. BMT/leukaemia): 5 mg/kg IV q8h for period at risk (UK SmPC/TW insert)<br>• Varicella (adult/>40 kg): 800 mg PO QID × 5 days<br>• Max 20 mg/kg q8h; infuse each dose over ≥1 h

**Why:** These are labelled indications the IV product is stocked for, but the property column omits them. The maximum dose is a label statement.

**Sources:** US FDA IV label, DOSAGE AND ADMINISTRATION: 'A maximum dose equivalent to 20 mg/kg every 8 hours should not be exceeded'; Dosage: mucosal/cutaneous HSV immunocompromised 5 mg/kg q8h × 7 days; severe initial herpes genitalis 5 mg/kg q8h × 5 days https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.1 (prophylaxis of HSV in immunocompromised) and 4.2 https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 適應症/成人劑量: '預防骨髓移植及白血病所引起之免疫不全病人之單純疱疹感染，參考單純性疱疹治療之成人建議劑量' https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; US acyclovir tablet label, Treatment of Chickenpox: 'Adults and Children over 40 kg: 800 mg 4 times daily for 5 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec

### A6 · Renal dose, HD, CRRT (error)

**Was:** HD: Dose post-dialysis; \~51% removed by 4–5h HD

**Now:** HD: 2.5 mg/kg q24h (5 mg/kg if 10 mg/kg regimen), give after dialysis on HD days; HD t½ ~5–5.7 h, plasma level ↓ ~60% per 6-h session (label)<br>PD: no supplemental dose after interval adjustment

**Why:** No label contains the '~51% removed by 4–5h' figure. The labels say plasma concentrations fall about 60% over a 6-hour dialysis and that a dose should follow each dialysis. The SmPC and TW insert give the HD dose explicitly (half dose q24h after dialysis). The US label also covers peritoneal dialysis, which the column omits.

**Sources:** US FDA IV label, Hemodialysis: 'mean plasma half-life… during hemodialysis is approximately 5 hours. This results in a 60% decrease in plasma concentrations following a six-hour dialysis period… an additional dose is administered after each dialysis.' Peritoneal Dialysis: 'No supplemental dose appears to be necessary after adjustment of the dosing interval.' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2 renal table: 'Patients on haemodialysis 2.5 mg/kg… every 24 hours after dialysis / 5 mg/kg… every 24 hours after dialysis'; 5.2: HD half-life 5.7 h, ~60% drop https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 表1: '做血液透析的病人 5或10 mg/公斤體重，劑量應減半，每24小時投予一次，以及透析後使用' https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### A7 · Renal dose, HD, CRRT (missing)

**Was:** CrCl 25–50: q12h interval<br>CrCl 10–25: q24h interval<br>CrCl \<10: Half dose q24h (IV only; no oral adjustment)

**Now:** <span color="green">`IV`</span> (5 or 10 mg/kg; TW insert = UK SmPC = FDA)<br>CrCl 25–50: q12h interval<br>CrCl 10–25: q24h interval<br>CrCl \<10: Half dose q24h<br>...<br><span color="blue">`PO`</span> (FDA tablet label / Acylete insert): 200 mg 5×/day or 400 mg q12h → CrCl 0–10: 200 mg q12h; 800 mg 5×/day → CrCl 10–25: 800 mg q8h (Acylete: q6–8h), CrCl 0–10: 800 mg q12h

**Why:** The IV interval steps are correct. The hospital also stocks oral Acylete 400 mg (ACY01), and this entry lists oral regimens, but the column gives no oral renal adjustment.

**Sources:** US acyclovir tablet label, Table 3 Dosage Modification for Renal Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; Taiwan Acylete insert 用法‧用量 7: '嚴重腎功能不全的患者(Creatinine 廓清率少於 10ml/min)…每日 2 次，每次 200mg'; 帶狀疱疹 '<10 ml/min…每日 2 次，每次 800mg…10~25ml/min…每 6~8 小時，投予 800mg' https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175

### A8 · Renal dose, HD, CRRT (unsupported)

**Was:** CRRT: 5–10 mg/kg q12–24h (page body: 'HSV treatment: 5 mg/kg q12–24h; HSV encephalitis/VZV: 7.5–10 mg/kg q24h')

**Now:** CRRT (no label data): 5–7.5 mg/kg q24h for CVVH/CVVHD/CVVHDF at effluent ~1 L/h (Trotman 2005, cited in Li 2020); no newer mode-specific data — individual TDM recommended (Li 2020)

**Why:** No label covers CRRT. The published recommendation found, Trotman 2005 as tabulated by Li et al. 2020, is 5–7.5 mg/kg q24h for all three CRRT modes. The current range of 5–10 mg/kg q12–24h is higher and has no citation. Li 2020 also notes that no newer mode-specific data exist and recommends TDM. The page body's CRRT sub-section should be changed the same way.

**Sources:** Li L et al. Recommendation of Antimicrobial Dosing Optimization During CRRT. Front Pharmacol 2020, PMID 32547394 (verified via esummary; full text PMC7273837, Table 3: 'Acyclovir… 5–7.5 mg/kg q24h (Trotman et al., 2005)' for CVVH, CVVHD, CVVHDF) https://pubmed.ncbi.nlm.nih.gov/32547394/; Trotman RL et al. Antibiotic dosing in critically ill adult patients receiving CRRT. Clin Infect Dis 2005, PMID 16163635 (verified via esummary) https://pubmed.ncbi.nlm.nih.gov/16163635/

### A9 · Page body (error)

**Was:** Renal Dose > Oral Dosing Adjustments table: HSV Treatment >50/25–50 400 mg q8h, 10–25 200 mg q8h, <10 200 mg q12h; VZV 25–50 800 mg q8h, 10–25 800 mg q12h, <10 800 mg q24h; Suppression 10–25 400 mg q24h, <10 200 mg q12h

**Now:** Replace table with label values: \| Usual regimen \| CrCl >25 \| CrCl 10–25 \| CrCl 0–10 \| → 200 mg 5×/day: no change \| no change \| 200 mg q12h; 400 mg q12h (suppression): no change \| no change \| 200 mg q12h; 800 mg 5×/day (VZV): no change \| 800 mg q8h (Acylete insert: q6–8h) \| 800 mg q12h

**Why:** The VZV column is wrong at CrCl 25–50 (label: no change), 10–25 (label: q8h, not q12h) and <10 (label: q12h, not q24h). The suppression row at 10–25 (400 mg q24h) contradicts the label, which makes no change above CrCl 10. Neither label has a '400 mg q8h' HSV row. The FDA label and the Acylete TW insert agree.

**Sources:** US acyclovir tablet label, DOSAGE AND ADMINISTRATION Table 3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; Taiwan Acylete insert 用法‧用量 7 (腎功能不全時之劑量) https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175

### A10 · Page body (unsupported)

**Was:** Hemodialysis section: 'Acyclovir is \~51% removed by 4–5 hours of high-flux hemodialysis'; 'Oral: 200–400 mg post-HD or 400–800 mg once daily'

**Now:** 'Plasma acyclovir ↓ ~60% during a 6-h HD session (HD t½ ~5–5.7 h) (FDA/UK/TW label). IV: 50% dose q24h (2.5 or 5 mg/kg), given after dialysis on HD days (UK SmPC/TW insert); FDA: schedule an additional dose after each dialysis. PO: CrCl 0–10 regimen (200 mg q12h or 800 mg q12h) + an additional dose after each dialysis (FDA tablet label).' Keep 'Half-life in ESRD ~20 h' (label 19.5 h).

**Why:** The 51% figure and the oral HD regimens have no source. The labels give a 60% fall over 6 h and say to dose after each dialysis. The IV HD line (2.5–5 mg/kg q24h after HD) and 'Half-life in ESRD ~20 h' (label: 19.5 h) are correct.

**Sources:** US FDA IV label, Hemodialysis and Pharmacokinetics Table 2 (anuric t½ 19.5 h) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; US tablet label, Hemodialysis https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; UK SmPC 5.2 Renal impairment https://www.medicines.org.uk/emc/product/5472/smpc

### A11 · Pediatric dose (error)

**Was:** HSV encephalitis: 10–15 mg/kg IV q8h × 21 days (page body table: 'HSV encephalitis (≥3 months) 10–15 mg/kg IV q8h × 21 days')

**Now:** HSV encephalitis (3 mo–12 y): 20 mg/kg IV q8h × 10 days (FDA/TW label; UK: 500 mg/m² q8h); IDSA 2008: 14–21 days

**Why:** All labels give 20 mg/kg (or 500 mg/m²) q8h for children aged 3 months to 12 years with HSE. 10–15 mg/kg underdoses, and the 21-day duration is not label-based. Fix the same row in the page body table.

**Sources:** US FDA IV label, Dosage > HERPES SIMPLEX ENCEPHALITIS: 'Pediatrics (3 months to 12 years of age) 20 mg/kg… every 8 hours for 10 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2: 'children with herpes encephalitis… 500 mg per square metre… every 8 hours' https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 嬰兒及兒童劑量: '罹患水痘帶狀疱疹感染或是疱疹性腦炎時，應每8小時，給予20 mg/公斤體重' https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; Tunkel 2008 IDSA, PMID 18582201 https://pubmed.ncbi.nlm.nih.gov/18582201/

### A12 · Pediatric dose (missing)

**Was:** HSV/varicella: 20 mg/kg PO QID (max 800 mg) × 5–7 days<br>Neonatal HSV: 20 mg/kg IV q8h × 14–21 days<br>HSV encephalitis: …

**Now:** Varicella (≥2 y): 20 mg/kg PO QID (max 800 mg/dose; >40 kg adult dose) × 5 days<br>Oral HSV (Acylete insert): ≥2 y adult dose; <2 y half adult dose<br>IV mucocutaneous HSV, immunocompromised (<12 y): 10 mg/kg q8h × 7 days (FDA; UK 250 mg/m² q8h; TW insert: 20 mg/kg q8h)<br>IV zoster, immunocompromised (<12 y): 20 mg/kg q8h × 7 days (UK 500 mg/m²)<br>Neonatal HSV: 20 mg/kg IV q8h × 14 days (SEM) / 21 days (CNS/disseminated) (UK SmPC/TW insert; FDA label 10 mg/kg × 10 days)<br>Renal (TW insert, 20 mg/kg base): CrCl 25–50 q12h; 10–25 10 mg/kg q12h; <10 or HD 5 mg/kg q12h (after HD)

**Why:** The US tablet label gives oral pediatric dosing only for chickenpox, for 5 days, in children 2 years and older. The '5–7 days' and 'HSV' parts are not labelled; the Acylete insert gives adult-proportional HSV dosing. The column omits pediatric IV doses for immunocompromised HSV and VZV, and omits the pediatric renal table in the stocked product's TW insert. The neonatal line agrees with the UK SmPC and TW insert. The labels disagree on pediatric HSV dosing: the TW insert says 20 mg/kg, the UK 250 mg/m² (about 10 mg/kg), the US 10 mg/kg. Both values should be shown.

**Sources:** US acyclovir tablet label, Treatment of Chickenpox; Pediatric Use: 'Safety and effectiveness of oral formulations… younger than 2 years… not established' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; US FDA IV label, Dosage (pediatric rows; neonatal 10 mg/kg × 10 days) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2 Dosage in infants and children https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 嬰兒及兒童劑量, 新生兒劑量, 表2 https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; Taiwan Acylete insert 用法‧用量 5 (兒童的劑量) https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175

### A13 · Page body (unsupported)

**Was:** Pediatric table row 'HSV gingivostomatitis: 20 mg/kg PO QID (max 400 mg/dose) × 7–10 days'; 'Post-neonatal HSV prophylaxis: … consider oral suppressive therapy × 6 months' (no dose)

**Now:** Keep the gingivostomatitis row but mark it (off-label; source needed). Change the suppression line to: 'After 14–21 d IV therapy for neonatal HSV: acyclovir 300 mg/m² PO TID × 6 months (Kimberlin NEJM 2011; improved neurodevelopment in CNS disease; monitor ANC — trend to more neutropenia)'

**Why:** No label covers gingivostomatitis dosing. The suppression statement is supported by Kimberlin 2011, but the page gives no dose and no ANC-monitoring caveat.

**Sources:** Kimberlin DW et al. Oral acyclovir suppression and neurodevelopment after neonatal herpes. N Engl J Med 2011;365:1284-92, PMID 21991950 (verified via esummary; abstract: '300 mg per square meter… orally, three times daily for 6 months… trend toward more neutropenia') https://pubmed.ncbi.nlm.nih.gov/21991950/

### A14 · Side Effects (missing)

**Was:** ["AKI","neurotoxicity","GI"]

**Now:** ["AKI","neurotoxicity","GI","thrombophlebitis","LFT↑","hematologic","SJS/TEN","DRESS"]

**Why:** The labels list these, and each tag already exists in the schema. Injection-site phlebitis is the most frequent IV reaction (~9%; 'common' in the SmPC and TW insert). Transaminase rises occur in 1–2% (common). The SmPC lists anaemia, thrombocytopenia and leukopenia as uncommon, and the US label warns of TTP/HUS. SmPC 4.4 warns of SCARs including SJS/TEN and DRESS. 'photosensitivity' could also be added, since the SmPC lists rashes including photosensitivity as common.

**Sources:** US FDA IV label, ADVERSE REACTIONS ('inflammation or phlebitis at the injection site in approximately 9%… Elevation of transaminases occurred in 1% to 2%… anemia, neutropenia, thrombocytopenia') and WARNINGS (TTP/HUS) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.4 (SCARs: TEN, SJS, AGEP, DRESS, EM) and 4.8 https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 【不良反應】: 常見：靜脈炎; 可逆性的肝臟相關酵素值升高; 不常見：血液指數降低 https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### A15 · Drug Interactions (missing)

**Was:** ↑ Nephrotoxicity: Vancomycin, aminoglycosides, amphotericin B, cyclosporine, tacrolimus, contrast<br>Probenecid → ↑ acyclovir levels<br>May ↑ theophylline levels

**Now:** ↑ Nephrotoxicity: Vancomycin, aminoglycosides, amphotericin B, cyclosporine, tacrolimus, contrast (monitor renal function)<br>Probenecid, cimetidine → ↑ acyclovir AUC (no dose change per SmPC/TW insert)<br>Mycophenolate mofetil → ↑ AUC of acyclovir and MPA inactive metabolite<br>Lithium + high-dose IV acyclovir → monitor lithium levels<br>Theophylline AUC ↑ ~50% → monitor theophylline levels

**Why:** The UK SmPC 4.5 and the TW insert also list cimetidine, mycophenolate mofetil and lithium. The theophylline line should state the size of the effect and that levels should be monitored. The listed nephrotoxin examples are plausible, since the labels warn generally about 'other nephrotoxic drugs'.

**Sources:** UK SmPC 4.5 Interaction https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 【藥物交互作用】 (probenecid, cimetidine, mycophenolate mofetil, cyclosporin, tacrolimus) https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; US FDA IV label, Clinical Pharmacology > Drug Interactions (probenecid) and PRECAUTIONS > General (nephrotoxic drugs) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623

### A16 · Page body (unsupported)

**Was:** Drug Interactions table rows: 'Phenytoin, valproate — possible reduced anticonvulsant levels'; 'Tenofovir, emtricitabine — mutual increase in toxicity'; 'Vancomycin… OR 5.96'

**Now:** Keep the rows but add '(not in FDA/UK/TW label — source needed)' to the phenytoin/valproate and tenofovir/emtricitabine rows and to the OR 5.96 figure. Add rows for cimetidine, lithium (monitor levels) and theophylline (~50% AUC ↑) per UK SmPC 4.5.

**Why:** None of the IV label, the tablet label, the SmPC or the TW insert mentions phenytoin, valproate or tenofovir. The OR 5.96 vancomycin figure, the nephrotoxicity risk-factor ORs (1.04/yr, 1.19/day) and the neurotoxicity onset and recovery statistics in the Side Effects and Notes sections have no citation. None of these is contradicted, so flag them rather than remove them.

**Sources:** UK SmPC 4.5 https://www.medicines.org.uk/emc/product/5472/smpc; US FDA IV label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623

### A17 · Pregnancy (error)

**Was:** safe

**Now:** 可使用 — registry (749 first-trimester exposures) showed birth-defect rate ≈ general population; use when benefit > risk (FDA/UK/TW label)

**Why:** 'Safe' overstates the labels. All three report registry data with no rise in birth defects, but also say the drug should be used only if the potential benefit justifies the risk. The registry was too small to assess rare defects.

**Sources:** US FDA IV label, PRECAUTIONS > Pregnancy: '749 pregnancies… first trimester… occurrence rate of birth defects approximates that found in the general population… small size of the registry is insufficient…' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 【懷孕及授乳】 https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### A18 · Page body (error)

**Was:** Pregnancy: 'Large pregnancy registry data (\>1,000 first-trimester exposures) have not shown increased risk of major birth defects'

**Now:** Pregnancy registry (1984–1999): 749 first-trimester exposures (756 outcomes) — birth-defect rate approximates general population; registry too small for rare defects (FDA label). HSV-hepatitis line → 'Suspected disseminated HSV/HSV hepatitis in pregnancy: start empiric IV acyclovir pending confirmation (CDC 2021, PMID 34292926)'. 36-wk suppression line: cite CDC 2021. Flag 'crosses placenta; fetal ≈ maternal levels' as unsourced.

**Why:** The label gives 749 first-trimester exposures, not more than 1,000. Other lines in this section have no source and should be flagged but kept: 'crosses placenta; fetal ≈ maternal levels' and 'first-line for HSV hepatitis in pregnancy'. The 36-week suppression regimen (400 mg TID) is guideline-based (CDC 2021, PMID 34292926) and should cite it.

**Sources:** US FDA IV label, PRECAUTIONS > Pregnancy https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Workowski KA et al. STI Treatment Guidelines 2021, MMWR Recomm Rep, PMID 34292926 (verified via esummary) https://pubmed.ncbi.nlm.nih.gov/34292926/

### A19 · Breastfeeding (minor)

**Was:** compatible

**Now:** Compatible 可哺乳 — milk dose ≈1% of infant dose; treatment of choice for herpes during breastfeeding (LactMed). Labels: milk 0.6–4.1× plasma, infant ≤0.3 mg/kg/day; use with caution

**Why:** The column is correct per LactMed but gives no basis. The labels' cautionary wording and milk-level data should also be shown.

**Sources:** LactMed Acyclovir NBK501195 (rev. 2026-02-15), Summary of Use during Lactation: 'dosage of acyclovir in milk is only about 1% of a typical infant dosage… considered a treatment of choice for Herpes infections during breastfeeding' https://www.ncbi.nlm.nih.gov/books/NBK501195/; US FDA IV label, Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623

### A20 · Notes (missing)

**Was:** infuse IV over 1–2h; ensure hydration to prevent crystalluria

**Now:** infuse IV over ≥1 h (never bolus/IM/SC/PO; pH ~11); final conc ≤5 mg/mL (TW/UK) [US ≤7 mg/mL]; ensure hydration to prevent crystalluria; extravasation → severe local inflammation/tissue necrosis; CI: hypersensitivity to acyclovir or valacyclovir

**Why:** The labels require infusion over at least 1 hour and give concentration limits; the TW insert for the stocked product gives <5 mg/mL. Bolus, IM, SC and oral routes are prohibited. The labels warn of extravasation necrosis and list hypersensitivity to acyclovir or valacyclovir as the contraindication. The Notion entry mentions none of these.

**Sources:** US FDA IV label, WARNINGS ('at least 1 hour'), Administration ('approximately 7 mg/mL or lower'), CONTRAINDICATIONS, Observed During Clinical Practice ('Severe local inflammatory reactions, including tissue necrosis… extravascular') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Taiwan Zovirax IV insert 【使用指示】 ('稀釋為acyclovir濃度小於5 mg/mL'), 【警語】 (pH 約為11，不能經由口服), 【禁忌症】 https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; UK SmPC 4.3, 4.4 https://www.medicines.org.uk/emc/product/5472/smpc

### A21 · Hepatic dose (minor)

**Was:** No adjustment required (renally eliminated)

**Now:** No adjustment required (renally eliminated); label: use with caution in serious hepatic abnormalities (↑ risk of encephalopathic reactions)

**Why:** No label gives a hepatic dose adjustment, so the current text is correct. The US label does advise caution in serious hepatic abnormalities because of the neurotoxicity risk.

**Sources:** US FDA IV label, PRECAUTIONS > General: 'should be used with caution in those patients who have underlying neurologic abnormalities and those with serious renal, hepatic, or electrolyte abnormalities, or significant hypoxia' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623

### A22 · Page body (unsupported)

**Was:** Side Effects: 'Crystal-induced AKI… incidence \~20% with IV therapy'; 'TTP/HUS… (e.g., 8 g/day valacyclovir)'; Common list omits phlebitis/LFT rise

**Now:** AKI row: 'Transient serum creatinine/BUN rise in 5–10% (higher with rapid infusion); renal failure (sometimes fatal) reported (FDA label); nephrotoxicity 13–21% in HSE cohorts (Aboelezz 2024, PMID 38364888)'. TTP/HUS → 'reported in immunocompromised patients receiving acyclovir; fatal cases (FDA label WARNINGS)'. Add Common: injection-site inflammation/phlebitis (~9%), transaminase ↑ (1–2%), pruritus/urticaria/rash incl. photosensitivity. Add Serious: SCARs (SJS/TEN, AGEP, DRESS, EM — stop drug; do not rechallenge with acyclovir/valacyclovir; SmPC 4.4).

**Why:** The ~20% AKI incidence has no source; the label gives 5–10% transient creatinine/BUN rises. The 8 g/day example comes from valacyclovir, not acyclovir. The SCAR warning (SmPC 4.4) and the most frequent IV reactions are missing. The ~1% encephalopathy rate matches the label. The CMMG mechanism is plausible but has no citation.

**Sources:** US FDA IV label, ADVERSE REACTIONS, WARNINGS, PRECAUTIONS > General ('Approximately 1%… encephalopathic changes') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.4 and 4.8 https://www.medicines.org.uk/emc/product/5472/smpc

### A23 · Page body (minor)

**Was:** Indications: 'Prophylaxis in HSV/VZV-seropositive hematopoietic stem cell transplant and solid organ transplant recipients'

**Now:** Prophylaxis of HSV infection in immunocompromised patients (UK SmPC); TW insert: 預防骨髓移植及白血病所引起之免疫不全病人之單純疱疹感染 (VZV/SOT prophylaxis = guideline use, not labelled). Add TW insert 適應症 line: 帶狀疱疹病毒及單純疱疹病毒引起之感染；新生兒單純疱疹感染

**Why:** The labels approve HSV prophylaxis only, in immunocompromised patients; the TW insert names BMT and leukaemia. They do not label VZV prophylaxis or SOT prophylaxis specifically.

**Sources:** UK SmPC 4.1 https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV insert 【適應症】 https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### A24 · Page body (minor)

**Was:** Adult Dose: Genital herpes recurrent '400 mg PO TID × 5 days OR 800 mg PO BID × 5 days'; Varicella '800 mg PO 4–5×/day × 5 days'; Mucocutaneous HSV '5–10 mg/kg IV q8h × 7–14 days'; Zoster immunocompromised '× 7–10 days'

**Now:** Recurrent: 800 mg PO BID × 5 days OR 800 mg PO TID × 2 days (CDC 2021); 400 mg PO TID × 5 days also effective but not preferred (dosing frequency, CDC 2021); label: 200 mg 5×/day × 5 days. Varicella: 800 mg PO QID × 5 days (label). Mucocutaneous HSV (immunocompromised): 5 mg/kg IV q8h × 7 days (label). Zoster immunocompromised: 10 mg/kg IV q8h × 7 days (label).

**Why:** These regimens are close to, but not the same as, the labels and the CDC 2021 STI guideline. CDC 2021 replaced the 400 mg TID recurrent option with 800 mg TID × 2 days. The CDC page itself could not be fetched here (proxy block), so the CDC values are cited by PMID and still need a check against the full text.

**Sources:** US acyclovir tablet label, DOSAGE AND ADMINISTRATION https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; US FDA IV label, Dosage https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Workowski 2021 CDC STI guidelines, PMID 34292926 https://pubmed.ncbi.nlm.nih.gov/34292926/

### A25 · Page body (unsupported)

**Was:** Notes: 'mortality is 70% untreated vs. \~20% with early acyclovir'; 'efficacy diminishes significantly if initiated \>72 hours'; Mechanism: 'Selectivity… (100× greater affinity than host TK)'

**Now:** HSE: '12-month mortality 25% with acyclovir vs 59% with vidarabine (FDA label pivotal trial); untreated mortality ~70% (literature, source needed)'; zoster: 'no data on treatment started >72 h after rash onset (FDA tablet label)'; mechanism: drop '100×' or cite a source — label: 'normal cellular TK does not use aciclovir effectively as a substrate' (SmPC 5.1)

**Why:** None of these figures appears in the labels. The labels give the values proposed here.

**Sources:** US FDA IV label, Clinical Studies > Herpes Simplex Encephalitis https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; US tablet label, Information for Patients > Herpes Zoster https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; UK SmPC 5.1 https://www.medicines.org.uk/emc/product/5472/smpc

### A26 · Page body (minor)

**Was:** Key References: list of titles without URLs ('FDA Prescribing Information - Zovirax (acyclovir)', 'UCSF…', etc.)

**Now:** Add with URLs: US FDA acyclovir sodium injection (DailyMed setid 23a7cf9e-f21b-06c2-e063-6394a90aa623); US acyclovir tablets (setid 05f42300-2a06-45f1-a9b9-6e5c84ae58ec); UK SmPC Zovirax I.V. (eMC 5472, rev. 14 Nov 2025); 熱威樂素注射劑 仿單 衛署藥輸字第011326號 (GDS31/IPI07, 2020-04-03); 敵疱治錠 仿單 衛署藥製字第039315號; CDC STI Guidelines 2021 PMID 34292926; IDSA encephalitis 2008 PMID 18582201; Kimberlin NEJM 2011 PMID 21991950; Li 2020 CRRT PMID 32547394; LactMed NBK501195

**Why:** The ground rules require each claim to cite a source with a URL. The current reference list has no URLs and does not include the Taiwan insert for the stocked product.

**Sources:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; https://www.medicines.org.uk/emc/product/5472/smpc; https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175

### B1 · Page body (error)

**Was:** Renal Dose > Oral Dosing Adjustments table: HSV Tx 25–50 '400 mg q8h', 10–25 '200 mg q8h'; VZV 25–50 '800 mg q8h', 10–25 '800 mg q12h', <10 '800 mg q24h'; Suppression 10–25 '400 mg q24h'

**Now:** Replace the table with the label table. Columns: Normal regimen \| CrCl >25 \| CrCl 10–25 \| CrCl 0–10. Row '200 mg 5×/day (q4h)': no change \| no change \| 200 mg q12h. Row '400 mg q12h': no change \| no change \| 200 mg q12h. Row '800 mg 5×/day (VZV)': no change \| 800 mg q8h \| 800 mg q12h. Footnote: 'Acylete 仿單 (院內 ACY01): 帶狀疱疹 CrCl 10–25 → 800 mg q6–8h (3–4次/日)；CrCl <10 → 800 mg q12h；HSV CrCl <10 → 200 mg q12h'. HD: give the CrCl 0–10 regimen plus an extra dose after each dialysis (FDA).

**Why:** I checked the oral label myself, and it reduces the 200 mg and 400 mg regimens only at CrCl 0–10. The 800 mg regimen becomes q8h at 10–25 and q12h at 0–10. The Notion VZV column under-doses one step at each band: q12h at 10–25 and q24h at <10, where the label says q8h and q12h. It also reduces at 25–50, which no label does. The HSV '200 mg q8h' and suppression '400 mg q24h' cells at CrCl 10–25 also contradict the label. The Acylete insert agrees on <10 (800 mg q12h; 200 mg q12h).

**Sources:** US FDA acyclovir tablets label, DOSAGE AND ADMINISTRATION, Table 3 'Dosage Modification for Renal Impairment': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; Taiwan Acylete 仿單 用法用量 7. 腎功能不全時之劑量: https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175

### B2 · Renal dose, HD, CRRT (error)

**Was:** CrCl 25–50: q12h interval<br>CrCl 10–25: q24h interval<br>CrCl \<10: Half dose q24h<br>HD: Dose post-dialysis; \~51% removed by 4–5h HD<br>CRRT: 5–10 mg/kg q12–24h

**Now:** <span color="green">`IV`</span> (5 或 10 mg/kg 方案)<br>CrCl 25–50: 100% dose q12h<br>CrCl 10–25: 100% dose q24h<br>CrCl \<10: 50% dose q24h (5→2.5; 10→5 mg/kg)<br>HD: 50% dose q24h, give after dialysis (TW仿單/SmPC); 6-h HD ↓ plasma conc. ~60% (FDA)<br>PD: no supplemental dose (FDA)<br>CRRT (no label data): 5–7.5 mg/kg q24h for CVVH/CVVHD/CVVHDF at effluent ~1 L/h (Trotman 2005, cited by Li 2020); individualize, TDM if available<br><span color="blue">`PO`</span> 800 mg 5×/day: CrCl 10–25 → 800 mg q8h (Acylete 仿單: q6–8h); \<10 → 800 mg q12h. 200 mg 5×/day or 400 mg q12h: \<10 → 200 mg q12h

**Why:** The interval steps are correct. The '~51% removed by 4–5h HD' figure appears in no label. FDA says a 6-h dialysis gives a 60% fall in plasma concentration, and SmPC 5.2 says concentrations drop about 60%, with a half-life of 5.7 h during HD. The 0.5 × dose post-HD regimen from the TW insert and SmPC is not spelled out. The CRRT range '5–10 mg/kg q12–24h' has no source. The verified CRRT review (Li 2020, open-access PMC7273837, Table 3) tabulates acyclovir as 5–7.5 mg/kg q24h for CVVH, CVVHD and CVVHDF, citing Trotman 2005. It also says no newer mode-specific data exist and that TDM is required. The oral (ACY01) renal dosing is missing from the column.

**Sources:** Taiwan Zovirax IV 仿單 表1 腎功能不全成人: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; UK SmPC 4.2 'Dosage in renal impairment' and 5.2 'Renal impairment': https://www.medicines.org.uk/emc/product/5472/smpc; US FDA acyclovir sodium injection, DOSAGE AND ADMINISTRATION Table 5, Hemodialysis, Peritoneal Dialysis: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Li L et al. Front Pharmacol 2020;11:786, Table 3 + Acyclovir section, PMID 32547394: https://pubmed.ncbi.nlm.nih.gov/32547394/; Trotman RL et al. Clin Infect Dis 2005;41:1159, PMID 16163635: https://pubmed.ncbi.nlm.nih.gov/16163635/

### B3 · Page body (error)

**Was:** Hemodialysis: 'Acyclovir is ~51% removed by 4–5 hours of high-flux hemodialysis'; 'Oral: 200–400 mg post-HD or 400–800 mg once daily'. CRRT (CVVHD): 'HSV treatment: 5 mg/kg q12–24h; HSV encephalitis/VZV: 7.5–10 mg/kg q24h'

**Now:** HD: '6-h HD ↓ plasma acyclovir ~60% (FDA); t½ on HD ~5–5.7 h (FDA/SmPC). IV: 50% dose q24h given after dialysis (TW仿單/SmPC). Oral: CrCl 0–10 regimen + extra dose after each dialysis (FDA tablet label).' Keep the existing ESRD t½ and PD lines. CRRT: 'No label data. Published recommendation 5–7.5 mg/kg q24h for CVVH/CVVHD/CVVHDF at effluent ~1 L/h (Trotman 2005 via Li 2020, PMID 32547394); no newer mode-specific data → individualize, TDM if available.' The former indication-split doses (5 mg/kg q12–24h; 7.5–10 mg/kg q24h) become '(unsourced)' if retained.

**Why:** No label or verified source gives the 51% figure, the oral HD doses, or the CRRT split by indication. The labels give 60% and post-dialysis dosing.

**Sources:** US FDA injection label, Hemodialysis: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; US FDA tablet label, Hemodialysis: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; UK SmPC 5.2: https://www.medicines.org.uk/emc/product/5472/smpc; Li 2020 PMID 32547394: https://pubmed.ncbi.nlm.nih.gov/32547394/

### B4 · Adult dose (error)

**Was:** • HSV encephalitis: 10 mg/kg IV q8h × 21 days<br>• Obesity: Use adjusted body weight for IV dosing

**Now:** • HSV encephalitis: 10 mg/kg IV q8h × 10 days (FDA/SmPC/TW仿單); guidelines (CDC 2021, IDSA 2008) and 健保 10.7.1.1: 14–21 天<br>• Obesity: FDA label = dose on IBW; SmPC: consider dose reduction (actual-BW dosing ≈2× plasma levels). AdjBW is used by some centres, but evidence is conflicting (IBW had the lowest AKI rate in Saad 2025)

**Why:** All three labels give 10 days for HSE. 14–21 days is the NHI reimbursement rule and guideline practice, so it should be labelled that way. The AdjBW recommendation contradicts the FDA label, which says obese patients should be dosed on ideal body weight. SmPC 4.2/5.2 says a dose reduction should be considered because plasma levels are about twice as high. The PubMed evidence is mixed. Saad 2025 (n=339) found AKI in 17.3% with TBW, 11.6% with AdjBW and 7% with IBW, and only IBW was significantly lower than TBW. Zelnicek 2023 found no AKI with AdjBW. The Aboelezz 2024 scoping review calls the evidence inconsistent.

**Sources:** US FDA injection label, Dosage 'HERPES SIMPLEX ENCEPHALITIS' and 'Obese Patients': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2 (encephalitis usually 10 days; obese patients) and 5.2 'Weight': https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 用法用量 (疱疹性腦炎通常持續10天): https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; NHI 給付規定 10.7.1.1 (疱疹性腦炎得使用14至21天), quoted on CTH drug page: https://www.cth.org.tw/?aid=606&pid=0&page_name=detail&iid=1012; Saad MO et al. Ann Pharmacother 2025, PMID 39956984: https://pubmed.ncbi.nlm.nih.gov/39956984/; Zelnicek TD et al. Int J Antimicrob Agents 2023, PMID 37257520: https://pubmed.ncbi.nlm.nih.gov/37257520/; Aboelezz A, Mahmoud SH. J Am Pharm Assoc 2024, PMID 38364888: https://pubmed.ncbi.nlm.nih.gov/38364888/

### B5 · Page body (error)

**Was:** HSV Encephalitis: '10 mg/kg IV q8h × **21 days** (per CDC guidelines)'. Dosing Weight: 'Obesity (BMI >30): Use **adjusted body weight (AdjBW)** to prevent underdosing; original FDA labeling recommends ideal body weight (IBW), but recent evidence supports AdjBW...'

**Now:** HSV Encephalitis: '10 mg/kg IV q8h × 10 days (FDA/SmPC/TW仿單); CDC 2021 STI guideline, IDSA 2008 and 健保給付: 14–21 days.' Obesity: 'FDA label: dose on IBW. SmPC: actual-BW dosing in morbid obesity gave ~2× plasma levels → consider dose reduction (esp. renal impairment/elderly). Cohort data conflict: AdjBW vs IBW (Saad 2025 PMID 39956984: AKI 7% IBW vs 11.6% AdjBW vs 17.3% TBW; Zelnicek 2023 PMID 37257520: 0% AKI with AdjBW).' Keep the AdjBW formula as reference.

**Why:** The CDC STI guideline gives no 21-day HSE regimen. It only says longer therapy is recommended for CNS complications, so 'per CDC' is a misattribution. 'Recent evidence supports AdjBW' overstates conflicting data and contradicts the label.

**Sources:** CDC STI Treatment Guidelines 2021 (MMWR, PMC8344968), Genital Herpes 'Severe Disease': https://pubmed.ncbi.nlm.nih.gov/34292926/; US FDA injection label Dosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Tunkel AR et al. IDSA encephalitis guideline, Clin Infect Dis 2008, PMID 18582201 (full text not reachable here; 14–21 d also stated in the NHI rule): https://pubmed.ncbi.nlm.nih.gov/18582201/; Saad 2025 PMID 39956984: https://pubmed.ncbi.nlm.nih.gov/39956984/

### B6 · Adult dose (missing)

**Was:** No IV 5 mg/kg regimen; 'Herpes zoster: **10 mg/kg IV q8h** OR 800 mg PO 5×/day × 7–10 days' (no immunocompromised qualifier)

**Now:** Add: '<span color="green">`IV`</span> HSV mucocutaneous (immunocompromised) / severe initial genital herpes / VZV (non-immunocompromised, SmPC): 5 mg/kg q8h × 5–7 days' and change the zoster line to 'Herpes zoster: immunocompromised 10 mg/kg IV q8h × 7 days; immunocompetent 800 mg PO 5×/day × 7–10 days'. Add 'Max 20 mg/kg q8h (FDA)'. Add 'Varicella (adult/>40 kg): 800 mg PO QID × 5 days (FDA)'.

**Why:** The IV product the hospital stocks is mostly given at 5 mg/kg q8h (FDA: HSV in immunocompromised × 7 d; severe initial genital herpes × 5 d; SmPC/TW: HSV or VZV in non-immunocompromised). The column omits this regimen. FDA and SmPC restrict 10 mg/kg for zoster to immunocompromised patients. The FDA cap of 20 mg/kg q8h is also missing.

**Sources:** US FDA injection label, Dosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2 'Dosage in adults': https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 成人劑量: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; US FDA tablet label, Treatment of Chickenpox: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec

### B7 · Pediatric dose (error)

**Was:** HSV/varicella: 20 mg/kg PO QID (max 800 mg) × 5–7 days<br>Neonatal HSV: 20 mg/kg IV q8h × 14–21 days<br>HSV encephalitis: 10–15 mg/kg IV q8h × 21 days

**Now:** <span color="green">`IV`</span> 3 mo–12 y: HSV encephalitis / VZV in immunocompromised: 20 mg/kg q8h (FDA, TW仿單) or 500 mg/m² q8h (SmPC); HSE × 10 days per label (IDSA 2008: 14–21 days), VZV × 7 days. Mucocutaneous HSV: FDA 10 mg/kg q8h × 7 d; SmPC 250 mg/m² q8h; TW仿單 20 mg/kg q8h<br>Neonatal HSV: 20 mg/kg IV q8h × 14 days (SEM) / 21 days (CNS/disseminated) (SmPC, TW仿單; FDA label: 10 mg/kg × 10 d)<br>Renal (TW仿單 表2, CrCl mL/min/1.73m²): 25–50 → 20 mg/kg q12h; 10–25 → 10 mg/kg q12h; 0–10 & HD → 5 mg/kg q12h (HD: after dialysis)<br><span color="blue">`PO`</span> Varicella ≥2 y: 20 mg/kg QID × 5 days (max 800 mg/dose; >40 kg adult dose) (FDA)<br>HSV PO (Acylete 仿單): ≥2 y adult dose; <2 y half adult dose

**Why:** The paediatric HSE dose of 10–15 mg/kg q8h is half to three-quarters of the labelled 20 mg/kg (FDA 3 mo–12 y; TW insert; SmPC 500 mg/m²). Its 21-day duration also contradicts the labelled 10 days. 'HSV ... 20 mg/kg PO QID' has no oral-label support, since the FDA tablet label gives 20 mg/kg QID only for chickenpox at age 2 and above. Paediatric renal adjustment, which the TW insert has as Table 2 and SmPC gives in mg/m², is missing. Note that the TW insert and the US label disagree for mucocutaneous HSV in children (20 vs 10 mg/kg).

**Sources:** US FDA injection label, Dosage (HSE pediatrics 3 months–12 years; zoster pediatrics; mucocutaneous HSV pediatrics): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.2 'Dosage in infants and children' and pediatric renal table: https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 嬰兒及兒童劑量, 新生兒劑量, 表2: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; US FDA tablet label, Treatment of Chickenpox: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec; Taiwan Acylete 仿單 5. 兒童的劑量: https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175

### B8 · Page body (error)

**Was:** Pediatric Dose table: 'HSV encephalitis (≥3 months) 10–15 mg/kg IV q8h × 21 days'; 'HSV mucocutaneous 20 mg/kg PO QID (max 800 mg/dose) × 5–7 days'; 'HSV gingivostomatitis 20 mg/kg PO QID (max 400 mg/dose) × 7–10 days'

**Now:** HSV encephalitis (3 mo–12 y): '20 mg/kg IV q8h × 10 days (FDA/TW仿單) [SmPC 500 mg/m² q8h]; IDSA 2008: 14–21 days'. Add rows: 'Mucocutaneous HSV, immunocompromised <12 y: 10 mg/kg IV q8h × 7 d (FDA) / 250 mg/m² q8h (SmPC) / 20 mg/kg q8h (TW仿單)' and 'Zoster, immunocompromised <12 y: 20 mg/kg IV q8h × 7 d (FDA, TW仿單) / 500 mg/m² q8h (SmPC)'. Add the TW仿單 表2 paediatric renal table. Mark the PO mucocutaneous and gingivostomatitis rows '(off-label; source needed)'.

**Why:** Same label evidence as B7. No label covers the oral HSV and gingivostomatitis regimens, and the page gives no source for them.

**Sources:** US FDA injection label Dosage: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Taiwan Zovirax IV 仿單: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; UK SmPC 4.2: https://www.medicines.org.uk/emc/product/5472/smpc

### B9 · Pregnancy (error)

**Was:** safe

**Now:** Registry data show no ↑ birth defects (FDA: 749 first-trimester exposures; Danish cohort 1,561 first-trimester exposures, Pasternak 2010); labels: use when benefit > risk. CDC: oral or IV usable in pregnancy; suppression 400 mg TID from 36 wk

**Why:** 'Safe' overstates every label. FDA says the registry is too small for rare defects and to use only if benefit justifies risk. SmPC and the TW insert say caution, weighing benefit against hazard. The proposed wording reflects the evidence without a letter category.

**Sources:** US FDA injection label, PRECAUTIONS Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 【懷孕及授乳】: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; Pasternak B, Hviid A. JAMA 2010;304:859, PMID 20736469: https://pubmed.ncbi.nlm.nih.gov/20736469/; CDC STI Guidelines 2021, PMID 34292926 (PMC8344968): https://pubmed.ncbi.nlm.nih.gov/34292926/

### B10 · Page body (minor)

**Was:** Pregnancy: 'Large pregnancy registry data (>1,000 first-trimester exposures)...'; 'Crosses placenta; fetal concentrations approximate maternal levels'; 'First-line treatment for HSV hepatitis in pregnancy'

**Now:** 'Acyclovir Pregnancy Registry 1984–1999: 749 first-trimester exposures, birth-defect rate ≈ general population (FDA label); Danish cohort (Pasternak 2010, PMID 20736469): 1,561 first-trimester acyclovir exposures, no ↑ major birth defects.' Replace the HSV-hepatitis line with 'Suspected disseminated HSV/HSV hepatitis in pregnancy: start empiric IV acyclovir (CDC 2021)'. Flag the placental-transfer sentence as unsourced.

**Why:** The registry in the label has 749 first-trimester exposures, not more than 1,000. The more-than-1,000 figure fits only the Danish cohort. CDC 2021 supports empiric IV acyclovir for HSV hepatitis in pregnancy. The 'Category B (historical)' line is acceptable because it is not presented as current.

**Sources:** US FDA injection label Pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Pasternak 2010 PMID 20736469: https://pubmed.ncbi.nlm.nih.gov/20736469/; CDC STI Guidelines 2021 (HSV Hepatitis; Neonatal herpes/pregnancy), PMID 34292926: https://pubmed.ncbi.nlm.nih.gov/34292926/

### B11 · Side Effects (missing)

**Was:** ["AKI","neurotoxicity","GI"]

**Now:** ["AKI","neurotoxicity","GI","thrombophlebitis","LFT↑","SJS/TEN","DRESS","hematologic"]

**Why:** SmPC 4.8 and the TW insert list phlebitis (common) and reversible rises in liver enzymes (common). FDA lists injection-site inflammation/phlebitis in about 9% and transaminase elevation in 1–2%. SmPC 4.4 (rev. 2025) carries a SCAR warning naming TEN, SJS, AGEP, DRESS and EM. The labels also list haematological decreases (uncommon) and FDA warns of TTP/HUS. All proposed options already exist in the schema.

**Sources:** UK SmPC 4.4 'Severe cutaneous adverse reactions' and 4.8: https://www.medicines.org.uk/emc/product/5472/smpc; US FDA injection label ADVERSE REACTIONS and WARNINGS (TTP/HUS): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Taiwan Zovirax IV 仿單 【不良反應】: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### B12 · Page body (error)

**Was:** Side Effects > TTP/HUS: 'Rare; primarily reported in immunocompromised patients receiving high-dose therapy (e.g., 8 g/day valacyclovir)'

**Now:** TTP/HUS: 'Reported (sometimes fatal) in immunocompromised patients receiving acyclovir (FDA WARNINGS).' Also add a row: 'SCARs (SJS/TEN, AGEP, DRESS, EM): very rare; stop immediately; do not rechallenge with acyclovir/valacyclovir (SmPC 4.4)'.

**Why:** The 8 g/day valacyclovir example comes from the valacyclovir label, not acyclovir. The acyclovir FDA warning has no dose qualifier. The new SmPC SCAR warning is missing from the body.

**Sources:** US FDA injection label WARNINGS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; UK SmPC 4.4: https://www.medicines.org.uk/emc/product/5472/smpc

### B13 · Page body (unsupported)

**Was:** Crystal AKI 'incidence ~20% with IV therapy'; Neurotoxicity 'mean onset 3.1 ± 4.3 days'; 'mean recovery time 9.8 ± 21.7 days'; Risk factors 'Older age (OR 1.04 per year)', 'Longer duration (OR 1.19 per day)', 'Concomitant vancomycin use (OR 5.96)' (also in Drug Interactions table); Mechanism '100× greater affinity than host TK'

**Now:** Add citations or soften. AKI: 'transient SCr/BUN rise 5–10% (FDA); nephrotoxicity 13–21% in HSE cohorts (Aboelezz 2024 scoping review, PMID 38364888)'. Neurotoxicity: '~1% of IV patients develop encephalopathic changes (FDA)'. Keep the ORs only if the source cohort study is cited; otherwise mark them '(unsourced)'.

**Why:** No label or verified source gives these numbers. The label figures differ: FDA gives transient creatinine/BUN rises in 5–10% and encephalopathic changes in about 1%.

**Sources:** US FDA injection label ADVERSE REACTIONS; PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Aboelezz 2024 PMID 38364888: https://pubmed.ncbi.nlm.nih.gov/38364888/

### B14 · Drug Interactions (missing)

**Was:** ↑ Nephrotoxicity: Vancomycin, aminoglycosides, amphotericin B, cyclosporine, tacrolimus, contrast<br>Probenecid → ↑ acyclovir levels<br>May ↑ theophylline levels

**Now:** ↑ Nephrotoxicity: Vancomycin, aminoglycosides, amphotericin B, cyclosporine, tacrolimus, contrast (monitor renal function)<br>Probenecid, cimetidine → ↑ acyclovir AUC (no dose change needed per SmPC/TW仿單)<br>Mycophenolate mofetil → ↑ AUC of acyclovir and of the inactive MPA metabolite<br>Lithium + high-dose IV acyclovir → monitor lithium level<br>Theophylline AUC ↑ ~50% → monitor levels

**Why:** SmPC 4.5 and the TW insert list cimetidine, mycophenolate mofetil and lithium (SmPC) as interactions, and the property omits all three. The lithium warning matters clinically with high-dose IV use.

**Sources:** UK SmPC 4.5: https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 【藥物交互作用】: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### B15 · Page body (unsupported)

**Was:** Drug Interactions table: 'Phenytoin, valproate — possible reduced anticonvulsant levels'; 'Tenofovir, emtricitabine — mutual increase in toxicity'; Probenecid management 'may need dose reduction'; lithium row absent

**Now:** Add Lithium row: 'High-dose IV acyclovir → risk of lithium toxicity; monitor lithium level (SmPC 4.5)'. Add Cimetidine row: '↑ acyclovir AUC via tubular secretion; no dose adjustment (SmPC/TW仿單)'. Probenecid management: 'No dose adjustment needed (wide therapeutic index, SmPC/TW仿單); monitor in renal impairment'. Theophylline effect: 'AUC ↑ ~50% (SmPC 4.5)'. Mark the phenytoin/valproate and tenofovir/emtricitabine rows '(not in acyclovir labels; source needed)'.

**Why:** Neither the FDA IV label nor SmPC 4.5 lists phenytoin, valproate or tenofovir. The probenecid advice contradicts SmPC and the TW insert, which say no dose adjustment is necessary.

**Sources:** UK SmPC 4.5: https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 【藥物交互作用】: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### B16 · Page body (error)

**Was:** Last line: 'Would you like me to add this to your Notion database directly, or do you need any modifications to specific fields?'

**Now:** REMOVE

**Why:** This is pasted AI-chat text, not drug content.

**Sources:** Ground rule: remove pasted AI-chat text (owner instruction)

### B17 · Page body (minor)

**Was:** Adult Dose > Genital Herpes table: Recurrent 'OR 400 mg PO TID × 5 days'; First episode 'OR 200 mg PO 5×/day × 10 days'

**Now:** Recurrent: '800 mg PO BID × 5 days OR 800 mg PO TID × 2 days (CDC 2021); 400 mg TID × 5 d effective but not preferred'. First episode: '400 mg PO TID × 7–10 days (CDC 2021); 200 mg 5×/day × 10 days (FDA label)'.

**Why:** CDC 2021 lists 800 mg BID × 5 d or 800 mg TID × 2 d for recurrent episodes and footnotes 400 mg TID as effective but not recommended because of dosing frequency. The 800 mg TID × 2 d option is missing. Suppression at 400 mg BID is verified.

**Sources:** CDC STI Treatment Guidelines 2021, Genital Herpes regimens (PMC8344968), PMID 34292926: https://pubmed.ncbi.nlm.nih.gov/34292926/; US FDA tablet label DOSAGE AND ADMINISTRATION: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec

### B18 · Page body (minor)

**Was:** Indications: 'Prophylaxis in HSV/VZV-seropositive hematopoietic stem cell transplant and solid organ transplant recipients'

**Now:** 'Prophylaxis of HSV infection in immunocompromised patients (SmPC); TW仿單: 預防骨髓移植及白血病所引起之免疫不全病人之單純疱疹感染'. Mark VZV/SOT prophylaxis as guideline/off-label.

**Why:** The approved prophylaxis indication covers HSV only, in immunocompromised patients (SmPC 4.1; TW insert: BMT/leukaemia). VZV prophylaxis is not a labelled indication.

**Sources:** UK SmPC 4.1: https://www.medicines.org.uk/emc/product/5472/smpc; Taiwan Zovirax IV 仿單 【適應症】: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### B19 · Page body (minor)

**Was:** Monitoring > Special Populations: 'ICU patients: Consider therapeutic drug monitoring (TDM) of acyclovir and CMMG if available'; Pediatric: 'Post-neonatal HSV prophylaxis: ... oral suppressive therapy × 6 months'

**Now:** TDM: 'CRRT: individual TDM recommended (Li 2020, PMID 32547394); serum/CSF CMMG can support diagnosis of acyclovir neurotoxicity (case report, Berry 2014, PMID 25440915)'. Neonatal suppression: 'oral acyclovir 300 mg/m²/dose TID × 6 months after 14–21 d IV; improved neurodevelopment in CNS disease; monitor ANC (trend to more neutropenia) (Kimberlin NEJM 2011, PMID 21991950)'.

**Why:** Both statements are correct, but the page gives no source or dose. These verified PMIDs support them.

**Sources:** Li 2020 PMID 32547394: https://pubmed.ncbi.nlm.nih.gov/32547394/; Berry L et al. J Clin Virol 2014, PMID 25440915: https://pubmed.ncbi.nlm.nih.gov/25440915/; Kimberlin DW et al. N Engl J Med 2011;365:1284, PMID 21991950: https://pubmed.ncbi.nlm.nih.gov/21991950/

### B20 · Hepatic dose (minor)

**Was:** No adjustment required (renally eliminated)

**Now:** No adjustment in labels (renally eliminated); FDA: use with caution in serious hepatic abnormalities (↑ neurotoxicity risk)

**Why:** No label adjusts for hepatic impairment, but the FDA PRECAUTIONS (General) section advises caution in serious hepatic abnormalities.

**Sources:** US FDA injection label PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623

### B21 · Notes (minor)

**Was:** infuse IV over 1–2h; ensure hydration to prevent crystalluria

**Now:** infuse IV over ≥1h (no bolus); ensure hydration to prevent crystalluria; max 20 mg/kg q8h (FDA); dilute ≤5 mg/mL (TW仿單) / ≤7 mg/mL (FDA) to reduce phlebitis

**Why:** The labels set at least 1 hour as the minimum. The final concentration limit (an administration detail, not storage) and the 20 mg/kg q8h cap are missing. Extravasation at 10 mg/mL can cause phlebitis.

**Sources:** US FDA injection label WARNINGS; DOSAGE AND ADMINISTRATION; Administration: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; Taiwan Zovirax IV 仿單 【使用指示】: https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e

### B22 · Page body (minor)

**Was:** Key References list (CDC 2021, 'FDA Prescribing Information - Zovirax', StatPearls, UCSF, IUSTI 2024, LactMed) without URLs; no SmPC/TW insert

**Now:** Add: US FDA acyclovir sodium injection label (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623); US FDA acyclovir tablets label (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec); UK SmPC Zovirax I.V. (https://www.medicines.org.uk/emc/product/5472/smpc); 熱威樂素注射劑 仿單 衛署藥輸字第011326號 (https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e); 敵疱治錠 仿單 衛署藥製字第039315號 (https://mcp.fda.gov.tw/insert/pdfcasefile/i_846aed79-8984-4d2b-8863-39852b6a0175); LactMed NBK501195 (https://www.ncbi.nlm.nih.gov/books/NBK501195/); CDC STI 2021 PMID 34292926 (https://pubmed.ncbi.nlm.nih.gov/34292926/); Li 2020 PMID 32547394 (https://pubmed.ncbi.nlm.nih.gov/32547394/)

**Why:** The owner's source hierarchy needs the label sources cited by URL, especially the Taiwan inserts for the stocked products.

**Sources:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623; https://www.medicines.org.uk/emc/product/5472/smpc; https://mcp.fda.gov.tw/insert/pdfcasefile/i_43ee63d3-02bb-4b8b-956a-0d7296e71d7e; https://www.ncbi.nlm.nih.gov/books/NBK501195/

### B23 · Page body (minor)

**Was:** Notes: 'mortality is 70% untreated vs. ~20% with early acyclovir'

**Now:** '...12-month mortality 25% with acyclovir vs 59% with vidarabine in the pivotal trial (FDA label); untreated mortality ~70% (source needed)'

**Why:** The FDA label trial gives 25% mortality at 12 months on acyclovir, not about 20%.

**Sources:** US FDA injection label CLINICAL STUDIES 'Herpes Simplex Encephalitis': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623

## Verified correct as written

- Abx/title: Zovirax (Acyclovir) matches the stocked product ZOV01 (熱威樂素注射劑, 衛署藥輸字第011326號).
- Category 'Antiviral, nucleoside analogue' matches UK SmPC 5.1 ('purine nucleoside analogue', ATC J05AB01) and the TW insert.
- Mechanism column: phosphorylation by viral TK, then triphosphate inhibits viral DNA polymerase with chain termination. Matches the FDA label (Mechanism of Antiviral Action) and SmPC 5.1. The page-body mechanism bullets (apart from the '100×' figure) are also correct.
- Coverage tags HSV and VZV match the FDA label and SmPC 5.1. The body note on lesser EBV/CMV activity matches SmPC 5.1. TK-deficient resistance matches FDA Drug Resistance and SmPC 5.1.
- Indications tag 'Herpes' is correct and is the only fitting schema option.
- Monitor tags renal and neuro are supported by FDA PRECAUTIONS (renal monitoring, ~1% encephalopathy) and SmPC 4.4 ('closely monitored for evidence of neurological side effects').
- Renal column IV steps (CrCl 25–50 q12h; 10–25 q24h; <10 half dose q24h) match the FDA Table 5, UK SmPC 4.2 and TW insert 表1.
- Page body IV renal table (5 mg/kg and 10 mg/kg columns, including 2.5 mg/kg and 5 mg/kg q24h at CrCl <10) matches the UK SmPC and TW insert.
- Page body: IV HD 2.5–5 mg/kg q24h after dialysis is correct. ESRD half-life ~20 h is correct (label 19.5 h). No supplemental dose for peritoneal dialysis is correct (FDA).
- Hepatic dose 'no adjustment' is correct; no label gives a hepatic dose adjustment. Renal excretion ~60–90% unchanged is consistent with the label's 62–91%.
- Adult dose: genital HSV suppression 400 mg PO BID (FDA tablet label, CDC 2021). Initial genital HSV 400 mg TID × 7–10 d (CDC 2021) and 200 mg 5×/day × 10 d (FDA tablet). Recurrent 800 mg BID × 5 d (CDC 2021). Zoster 800 mg PO 5×/day × 7–10 d (FDA tablet). The 72-hour start window is consistent with the label, which has no data beyond 72 h.
- Pediatric: neonatal HSV 20 mg/kg IV q8h for 14 d (SEM) or 21 d (CNS/disseminated) matches UK SmPC 4.2 and the TW insert 新生兒劑量.
- Breastfeeding 'compatible' matches LactMed (about 1% of infant dose; treatment of choice). Body statements match the labels and LactMed: milk 0.6–4.1× plasma, about 1% exposure.
- Drug interactions: probenecid raises acyclovir levels (FDA, SmPC, TW, Acylete). Theophylline levels rise (SmPC 4.5). Cyclosporine and tacrolimus need renal monitoring (SmPC 4.5, TW insert). Mycophenolate competition is correct (SmPC 4.5, TW).
- Notes: hydration to prevent crystalluria and avoiding bolus infusion match FDA PRECAUTIONS and SmPC 4.4. Oral bioavailability 10–20% matches SmPC 5.2. Haemodialysis as an option in overdose or neurotoxicity matches SmPC 4.9 and the FDA overdose section.
- Body Pregnancy 'Category B (historical); current labeling does not use categories' is acceptably framed as historical.
- Body side effects: about 1% encephalopathy with IV acyclovir matches the FDA label. Phlebitis with IV use and higher risk with extravasation match the FDA Administration section and SmPC 4.8.
- Body: geriatric and renal patients are at higher neurotoxicity risk (SmPC 4.4). Rapid infusion raises renal risk (FDA ADVERSE REACTIONS).
- Category 'Antiviral, nucleoside analogue': matches SmPC 5.1 and the FDA label ('synthetic purine nucleoside analogue'; ATC J05AB01).
- Mechanism property and body: viral TK makes the monophosphate and cellular kinases make the di- and triphosphate. The triphosphate competitively inhibits viral DNA polymerase and causes chain termination (FDA Mechanism of Antiviral Action; SmPC 5.1; TW insert 作用機轉). Only the '100×' figure is unsourced (B13).
- Coverage [HSV, VZV]: correct (FDA, SmPC 5.1). Body: in-vitro EBV/CMV activity matches SmPC 5.1. Resistance is mainly through TK-deficient mutants, with DNA polymerase mutants also seen (FDA Drug Resistance; TW insert). Foscarnet is the treatment of choice for resistant HSV, with cidofovir an alternative (CDC 2021).
- Indications [Herpes]: the only fitting schema option. Body indications for genital herpes, mucocutaneous HSV, HSE, neonatal HSV, varicella and zoster are all in FDA or SmPC.
- Monitor [renal, neuro]: supported by FDA PRECAUTIONS/Geriatric Use (renal function) and SmPC 4.4 (close monitoring for neurological effects in the elderly and in renal impairment).
- IV renal steps CrCl 25–50 q12h, 10–25 q24h, <10 half dose q24h: match FDA Table 5, SmPC 4.2 and TW insert Table 1. The body IV renal table (5 and 10 mg/kg columns, including 2.5 and 5 mg/kg q24h at <10) matches SmPC and the TW insert exactly.
- Body HD items: half-life in ESRD about 20 h (labels 19.5 h), IV 2.5–5 mg/kg q24h after HD, and no significant PD removal (FDA: no supplemental dose after PD).
- Hepatic: no labelled adjustment, 62–91% excreted unchanged in urine (FDA); the body's ~60–90% is consistent.
- Neonatal HSV 20 mg/kg IV q8h × 14 days (SEM) / 21 days (CNS or disseminated): matches SmPC 4.2 and the TW insert. FDA labels 10 mg/kg × 10 days and notes 15–20 mg/kg has been used.
- Adult oral: zoster 800 mg 5×/day × 7–10 days (FDA tablet label; Acylete gives 7 days). Suppression 400 mg BID (FDA, CDC 2021). First-episode genital 400 mg TID × 7–10 d and recurrent 800 mg BID × 5 d (CDC 2021). Varicella 800 mg QID × 5 d (FDA tablet).
- IV severe or disseminated HSV at 5–10 mg/kg q8h matches the CDC 2021 'Severe Disease' text.
- Pregnancy suppression with 400 mg PO TID from 36 weeks: CDC 2021. The body's 'Category B (historical); current labeling does not use categories' is acceptable wording.
- Breastfeeding 'compatible' and body text: LactMed says milk dose is about 1% of the infant dose and acyclovir is a treatment of choice. The milk/plasma ratio of 0.6–4.1× matches FDA Nursing Mothers, SmPC 4.6 and the TW insert.
- Notes/body: hydration and slow infusion, with crystal precipitation when solubility (2.5 mg/mL) is exceeded or after bolus (FDA General; SmPC 4.4). Oral bioavailability 10–20% (SmPC 5.2). HD is an option in overdose or toxicity (SmPC 4.9; FDA OVERDOSAGE).
- Drug Interactions property: probenecid raises acyclovir AUC and half-life (FDA, SmPC). Theophylline AUC rises about 50% (SmPC 4.5). The renal-monitoring caution for cyclosporine and tacrolimus is in SmPC 4.5 and the TW insert, and other nephrotoxic drugs raise renal risk (SmPC 4.4, FDA General).
- Nephrotoxicity risk factors (dehydration, other nephrotoxins, pre-existing renal disease, rapid infusion) are label-supported (FDA PRECAUTIONS General). Only the odds ratios lack a source.

## Apply log

- Adult dose property: merged zoster (IV 10 mg/kg q8h x7d immunocompromised; PO 800 mg 5x/day), IV 5 mg/kg q8h mucocutaneous/severe initial genital/VZV immunocompetent, HSV prophylaxis, varicella 800 mg QID x5d, HSE 10 days (label) + 14-21 d guidelines/NHI, obesity IBW/SmPC/AdjBW evidence, max 20 mg/kg q8h, infuse over >=1 h
- Renal dose, HD, CRRT property: IV CrCl table, HD 50% q24h after dialysis + ~60% removal/t1/2, PD no supplement, CRRT 5-7.5 mg/kg q24h (Trotman via Li 2020) + TDM, PO label/Acylete adjustments
- Pediatric dose property: IV HSE/VZV 20 mg/kg (500 mg/m2), mucocutaneous HSV variants, neonatal HSV 14/21 d, TW pediatric renal table, PO varicella, Acylete HSV PO
- Side Effects multi-select: AKI, neurotoxicity, GI, thrombophlebitis, LFT↑, hematologic, SJS/TEN, DRESS
- Drug Interactions property: nephrotoxins, probenecid/cimetidine, MMF, lithium, theophylline
- Pregnancy property: registry 749 + Danish 1,561 exposures, benefit>risk, CDC 2021
- Breastfeeding property: LactMed ~1% + label values
- Notes property: >=1 h infusion, pH ~11, <=5 mg/mL (TW/UK) [US <=7], hydration, max dose, extravasation, CI
- Hepatic dose property: no adjustment + FDA caution
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body: removed pasted AI-chat sentence
- Body: mechanism '100x' dropped, SmPC 5.1 wording
- Body: indications prophylaxis line (SmPC/TW) + TW 適應症 line
- Body: genital herpes first-episode/recurrent rows with CDC 2021/label
- Body: zoster immunocompromised 7 d, >72 h note; varicella 800 mg QID; HSE 10 d label + 14-21 d guidelines; mucocutaneous 5 mg/kg x7d; obesity text with Saad/Zelnicek, AdjBW formula kept
- Body: oral renal table replaced with FDA Table 3 + Acylete footnote + HD note
- Body: HD lines replaced (~60%/6 h, IV 50% after HD, oral + extra dose), ESRD t1/2 & PD kept
- Body: CRRT replaced with Trotman/Li recommendation; old split doses marked (unsourced)
- Body: pediatric HSE row, new IV mucocutaneous/zoster rows, off-label flags on PO mucocutaneous & gingivostomatitis, TW 表2 pediatric renal table, Kimberlin suppression line
- Body: side effects common additions, AKI/neurotoxicity/TTP-HUS rows updated, SCARs row added, ORs marked (unsourced)
- Body: monitoring TDM line with Li 2020 and Berry 2014
- Body: DDI table – vancomycin OR flagged, probenecid management, cimetidine/lithium rows added, theophylline AUC ~50%, phenytoin/valproate and tenofovir/emtricitabine flagged
- Body: clinical pearls – HSE mortality 25% vs 59% (label), untreated ~70% flagged; zoster >72 h
- Body: pregnancy registry/Pasternak line, placental transfer flagged unsourced, 36-wk CDC cite, HSV hepatitis line replaced
- Body: References section appended with 17 sources and URLs

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
