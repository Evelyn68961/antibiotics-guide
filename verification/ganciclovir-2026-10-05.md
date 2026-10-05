# New entry: Ganciclovir

- **Notion entry:** [Ganciclovir](https://app.notion.com/3f0c496dfff181938f3ef123c35450f6). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** GAN03 (Ganciclovir inj 500 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/ganciclovir.json` (plus any Taiwan insert text files)

## Product and sources

FJUH GAN03 = Ganciclovir 針 500mg/Vial (甘西韋注射劑500毫克/小瓶), pms-Ganciclovir Injection 500 mg/vial (50 mg/mL ready-to-dilute solution, 10 mL vial), 衛部藥輸字第028514號, applicant 鈺財有限公司, manufacturer Pharmascience Inc. (Canada), NHI BC28514277, ATC J05AB06. I checked the hospital P4 page live. The P3 keyword search for "ganciclovir" returns only GAN03 (IV) and VAL02 (valganciclovir 450 mg tablet, which has its own entry), so IV is the only ganciclovir dosage form stocked. Labels used: US DailyMed ganciclovir for injection (Par, setid 87afd103-6e64-444f-971d-0e732e9ae995, v8, Sep 28 2026; I confirmed the version via the DailyMed history API); UK SmPC Cymevene 500 mg (eMC 10242, revised 15/01/2026); Taiwan 仿單 for 衛部藥輸字第028514號 (I spot-checked the live TFDA page and it matches the saved text); LactMed NBK500947 (revised 2026-02-15). The Notion page (created 2026-10-05) has only its title and Category. Every other column and the page body are empty.

## Content written to Notion (28 items)

### A1 · Adult dose

<span color="green">`IV`</span> only: infuse over 1 h, ≤10 mg/mL. Never bolus, IM or SC (pH ≈11)<br>• CMV retinitis / CMV disease treatment (immunocompromised): induction 5 mg/kg q12h × 14–21 d → maintenance 5 mg/kg q24h 7 d/wk or 6 mg/kg q24h 5 d/wk. Re-induce if the disease progresses<br>• CMV prevention in transplant recipients (FDA; UK pre-emptive): induction 5 mg/kg q12h × 7–14 d → maintenance 5 mg/kg q24h 7 d/wk or 6 mg/kg q24h 5 d/wk (FDA: until day 100–120 post-transplant)<br>• Universal prophylaxis (UK, >16 y): 5 mg/kg q24h 7 d/wk or 6 mg/kg 5 d/wk; duration set by CMV risk<br>仿單 (GAN03 pms-Ganciclovir): treatment regimen only (5 mg/kg q12h × 14–21 d → 5 mg/kg q24h or 6 mg/kg 5 d/wk)

**Why:** The column is empty. All three labels give identical mg/kg regimens. The FDA label gives a 7–14-day induction for transplant prevention and a stop at day 100–120. The UK SmPC adds a universal-prophylaxis regimen with no induction. The stocked product's Taiwan insert covers treatment only. The route restriction comes from the labels.

**Sources:** US FDA label §2.1–2.4 (IV over 1 h; induction 5 mg/kg q12h 14–21 d retinitis / 7–14 d transplant; maintenance 5 mg/kg 7 d/wk or 6 mg/kg 5 d/wk until 100–120 days post-transplant): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC Cymevene §4.2 Posology (treatment, pre-emptive, universal prophylaxis; method of administration ≤10 mg/mL, pH ~11): https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 衛部藥輸字第028514號 §3.1 用法用量 (誘導 5 mg/kg q12h 14-21天; 維持 5 mg/kg q24h 每週7天 或 6 mg/kg 每週5天): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A2 · Renal dose, HD, CRRT

<span color="green">`IV`</span> (仿單 = FDA = UK SmPC; CrCl by Cockcroft-Gault) induction / maintenance:<br>CrCl ≥70: 5 mg/kg q12h / 5 mg/kg q24h<br>CrCl 50–69: 2.5 mg/kg q12h / 2.5 mg/kg q24h<br>CrCl 25–49: 2.5 mg/kg q24h / 1.25 mg/kg q24h<br>CrCl 10–24: 1.25 mg/kg q24h / 0.625 mg/kg q24h<br>CrCl <10 / HD: 1.25 mg/kg 3×/wk / 0.625 mg/kg 3×/wk, given shortly after each HD (a 4-h HD lowers the level by ~50%)<br>CRRT (no label dose): UK SmPC/仿單: continuous dialysis CL 4–29.6 mL/min, with more drug removed per dosing interval than by intermittent HD. CVVHDF (anuric ICU, PK simulation n=9): 2.5 mg/kg q24h suggested (Horvatits 2014, PMID 24145543). Under-exposure has been seen on CVVH → consider TDM (Märtson 2021, PMID 34160036)

**Why:** The column is empty. All three labels give the same renal table. The hospital rule prefers the stocked product's label (Taiwan insert), and here it is identical to the others. HD timing and the ~50% removal are in all labels. No label gives a CRRT dose. The two PMIDs were checked with E-utilities esummary/efetch: Horvatits T et al., Antimicrob Agents Chemother 2014;58:94-101, whose abstract concludes '2.5 mg/kg once daily seems to be adequate for anuric critically ill patients during CVVHDF'; Märtson AG et al., J Antimicrob Chemother 2021;76:2356-63, whose abstract says 'patients on continuous veno-venous haemofiltration showed underexposure'.

**Sources:** US FDA label §2.5 Table 1 and 'Patients Undergoing Hemodialysis'; §12.3 (HD lowers plasma levels ~50% in 4 h): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.2 renal table; §5.2 'Estimates of ganciclovir clearance for continuous dialysis were lower (4.0-29.6 mL/min) but resulted in greater removal of ganciclovir over a dose interval': https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §3.3 表1 腎功能不全病人之本藥劑量; §11 進行血液透析的病人: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; Horvatits T et al. AAC 2014;58(1):94-101, PMID 24145543: https://pubmed.ncbi.nlm.nih.gov/24145543/; Märtson AG et al. JAC 2021;76(9):2356-63, PMID 34160036: https://pubmed.ncbi.nlm.nih.gov/34160036/

### A3 · Hepatic dose

No specific dose recommendation — not studied in hepatic impairment (FDA 8.7 / UK SmPC 4.2 / 仿單 6.6); renally excreted unchanged, so hepatic impairment is not expected to affect PK (UK SmPC 5.2 / 仿單 §11)

**Why:** The column is empty. All labels say ganciclovir has not been studied in hepatic impairment. The UK SmPC and the Taiwan insert add that, because it is renally excreted, hepatic impairment should not affect its PK and no dose recommendation is made.

**Sources:** US FDA label §8.7 Hepatic Impairment: 'The safety and efficacy of ganciclovir have not been studied in patients with hepatic impairment.' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §5.2 Patients with hepatic impairment: 'Hepatic impairment should not affect the pharmacokinetics of ganciclovir since it is excreted renally and, therefore, no specific dose recommendation is made' https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §6.6 and §11 肝功能不全: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A4 · Pediatric dose

<span color="green">`IV`</span> FDA 8.4: safety & efficacy not established in pediatric patients; 仿單 3.3: 兒科安全性與療效未確立(含先天性/新生兒CMV)，須極度謹慎 (long-term carcinogenicity / reproductive toxicity; also UK 4.4)<br>UK SmPC: ≥12 y treatment & pre-emptive therapy: adult mg/kg regimen + renal table<br>Universal prophylaxis, birth–≤16 y: dose (mg) = 3 × BSA (Mosteller) × CrCl (Schwartz; cap 150 mL/min/1.73 m²) IV q24h over 1 h. Already renally adjusted; review SCr/height/weight regularly. >16 y: adult dose<br>Birth–<12 y treatment/pre-emptive: no posology recommendation (UK)<br>Symptomatic congenital CMV with CNS involvement (off-label): 6 mg/kg IV q12h × 6 wk studied in neonates (UK SmPC 5.1); neutropenia in 29/46 treated neonates → close CBC monitoring

**Why:** The column is empty. The US label and the Taiwan insert give no pediatric dose and state safety is not established. Only the UK SmPC gives a pediatric algorithm (universal prophylaxis) and extends the adult mg/kg dosing to ≥12 years. The neonatal 6 mg/kg q12h regimen appears only as a study in SmPC §5.1, so it is labelled off-label.

**Sources:** US FDA label §8.4 Pediatric Use: 'Safety and efficacy of ganciclovir have not been established in pediatric patients.' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.2 (Paediatric dose (mg) = 3 x BSA x CrCLS; cap 150; 'Refer to adult dosing for patients older than 16 years'; renal: no further modification) and §4.4 ('extreme caution, especially in the paediatric population'); §5.1 neonates 6 mg/kg q12h × 6 weeks RCT: https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §3.3 兒童 ('安全性與療效未經確認，包括用於治療先天性或新生兒的CMV感染… 必須極度謹慎'): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A5 · Indications

Leave without tags. The schema has no CMV option, and 'Herpes' would wrongly suggest an HSV/VZV indication. Put the CMV indications in Notes (see A13).

**Why:** Every labelled indication is CMV-specific: FDA (CMV retinitis treatment; CMV prevention in transplant recipients), UK (CMV disease treatment; pre-emptive and universal prophylaxis) and Taiwan (治療免疫功能缺乏之巨細胞病毒感染症). None of the existing Indications options (pneumonia, UTI, Herpes, etc.) matches. The ground rules forbid inventing a CMV option, so the indications go in Notes.

**Sources:** US FDA label §1.1–1.2: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.1: https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §2 適應症: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A7 · Side Effects

["hematologic","neutropenia","anemia","thrombocytopenia","leukopenia","nephrotoxicity","GI","CNS","neuropathy","LFT↑","thrombophlebitis"]

**Why:** The column is empty. Labelled adverse reactions are: haematologic toxicity, the most serious and most common (neutropenia 26%, anaemia 20%, thrombocytopenia, leukopenia, pancytopenia, bone-marrow failure); serum creatinine increase / renal impairment; GI (diarrhoea 44%, nausea, vomiting); CNS (seizure, confusion, hallucinations, headache); peripheral neuropathy (6–9%); raised ALP/AST/ALT; and infusion-site phlebitis (the reason for 1-h infusion into a large vein). All of these are existing schema options.

**Sources:** US FDA label §5.1, §5.2, §6.1 (Table 2: pyrexia 48%, diarrhea 44%, leukopenia 41%, anemia 25%, neuropathy peripheral 9%; 'blood creatinine increased'; seizure; hepatic function abnormal) and §2.1 ('To avoid phlebitis/pain at the infusion site'): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.8 ('the most serious and frequent adverse drug reactions are haematological reactions and include neutropenia, anaemia and thrombocytopenia'): https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §8.1 表2 (嗜中性白血球減少症 26.12%, 貧血 19.89%, 血小板減少症 7.34%, 腹瀉 34.27%): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A8 · Monitor

["CBC","renal"]

**Why:** The labels require frequent CBC with differential and platelets and serum creatinine/CrCl before and during treatment. The UK schedule is WBC every 2nd day for the first 14 days, daily if ANC <1000, prior leukopenia or renal impairment. The pregnancy test and ophthalmic exams have no schema option and go in Notes / page body.

**Sources:** US FDA label §2.2 Testing Before and During Treatment; §2.5 'Carefully monitor serum creatinine or creatinine clearance': https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.4 Myelosuppression ('During the first 14 days… white blood cell count… every second day… daily' in high-risk): https://www.medicines.org.uk/emc/product/10242/smpc

### A9 · Mechanism

2'-deoxyguanosine analogue: phosphorylated first by the CMV kinase pUL97 (so mainly in infected cells), then by cellular kinases → ganciclovir-triphosphate inhibits viral DNA polymerase pUL54 (competes with dGTP; incorporation stops/limits chain elongation). Virustatic. Resistance: UL97 mutations (GCV only) or UL54 mutations (possible cross-resistance to cidofovir/foscarnet)

**Why:** The column is empty. The FDA §12.4, UK §5.1 and Taiwan §10.2 descriptions agree.

**Sources:** US FDA label §12.4 Microbiology (Mechanism of Action; Viral Resistance; Cross-resistance): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §5.1: https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §10.2 作用機轉 / 抗藥性: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A10 · Drug Interactions

Imipenem-cilastatin: generalized seizures reported. Avoid unless benefit > risk<br>Myelosuppressive / nephrotoxic drugs (MMF, zidovudine, TMP-SMX, dapsone, pentamidine, flucytosine, amphotericin B, ciclosporin, tacrolimus, vincristine, vinblastine, doxorubicin, hydroxyurea, tenofovir/adefovir): additive toxicity → use only if benefit > risk; monitor CBC & SCr<br>Cyclosporine / amphotericin B: ↑ SCr → monitor renal function<br>Didanosine: didanosine AUC ↑ 38–70% → watch for pancreatitis<br>Probenecid: ganciclovir AUC ↑ ~53% (↓ renal clearance) → monitor for toxicity<br>No CYP450 involvement (no PK interaction expected with PIs/NNRTIs)

**Why:** The column is empty. These interactions are listed in FDA Table 6 / §12.3, UK §4.5 and Taiwan §7.

**Sources:** US FDA label §7 Table 6 and §12.3 Tables 8–9 (probenecid AUC ↑53%; didanosine AUC ↑50–70%): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.5 (didanosine AUC ↑38–67%; 'Cytochrome P450 isoenzymes play no role'; tenofovir, adefovir): https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §7 交互作用: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A11 · Pregnancy

No letter category (FDA narrative format; old letter categories retired). Crosses the human placenta; teratogenic/embryolethal in animals at ~2× human exposure. Avoid unless the maternal need outweighs the fetal risk (UK 4.6)<br>Pregnancy test before starting. Contraception: women during and ≥30 d after; men barrier method during and ≥90 d after (FDA 8.3 / UK 4.4 / 仿單 6.3)<br>May impair fertility (↓ spermatogenesis, possibly irreversible)

**Why:** The column is empty. FDA §8.1 uses the narrative risk summary with no letter. The ground rules forbid writing 'Category C'.

**Sources:** US FDA label §8.1 Pregnancy (Risk Summary), §8.3 (pregnancy testing; contraception 30/90 days; infertility), §5.3–5.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.6 ('should not be used in pregnant women unless the clinical need for treatment of the woman outweighs the potential teratogenic risk to the foetus'): https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §6.1 懷孕, §6.3 避孕: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A12 · Breastfeeding

LactMed: no human data on milk levels or infant effects. The manufacturer advises avoiding breastfeeding (infant toxicity risk), although neonates with CMV are often treated directly with ganciclovir<br>FDA 8.2 / 仿單 6.2: breastfeeding not recommended (rat milk:serum ratio 1.6)<br>UK SmPC 4.3/4.6: contraindicated; stop breastfeeding during treatment

**Why:** The column is empty. LactMed is the designated breastfeeding source. The labels differ in strength: the UK SmPC lists breastfeeding as a contraindication, while the FDA label and Taiwan insert say 'not recommended'.

**Sources:** LactMed Ganciclovir NBK500947 (rev 2026-02-15), Summary of Use during Lactation: https://www.ncbi.nlm.nih.gov/books/NBK500947/; US FDA label §8.2 Lactation: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.3 Contraindications ('Breastfeeding') and §4.6: https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §6.2 哺乳 ('治療期間不建議哺乳'): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A13 · Notes

CMV (巨細胞病毒) is the target; no CMV option exists in Coverage/Indications. Labelled uses: CMV retinitis in immunocompromised adults incl. AIDS (FDA); CMV disease treatment in immunocompromised pts (UK/仿單); CMV prevention in adult transplant recipients (FDA) / pre-emptive therapy & universal prophylaxis in drug-induced immunosuppression, e.g. transplant or chemotherapy (UK). 院內 GAN03 (pms-Ganciclovir 50 mg/mL solution) 仿單 lists treatment only (用於治療免疫功能缺乏之巨細胞病毒感染症)<br>HSV-1/2, VZV, EBV, HHV-6/7/8 listed as sensitive (UK 5.1), but clinical studies were limited to CMV; not a labelled use<br>Do not start if ANC <500/µL, Plt <25,000/µL or Hb <8 g/dL; consider G-CSF or interrupting treatment if severe cytopenia develops<br>Keep the patient well hydrated. Retinitis: frequent eye exams<br>CI: hypersensitivity to ganciclovir/valganciclovir/excipients (UK also: breastfeeding). Aciclovir/penciclovir allergy: cross-hypersensitivity possible → caution, not a CI<br>Potential carcinogen/teratogen: handle and dispose of as a cytotoxic drug (戴手套)<br>Resistance (UL97/UL54): suspect if poor clinical response or persistent viral excretion during therapy

**Why:** The column is empty. Notes must hold the CMV indications and spectrum because the multi-select schema lacks a CMV option (ground rule). It should also record that the stocked product's Taiwan insert is narrower (treatment only), while prophylaxis is still approved under the FDA-or-UK rule. The haematologic start thresholds, hydration, eye exams, cross-hypersensitivity caution and cytotoxic handling are all label statements. This is handling guidance, not storage, so it is allowed.

**Sources:** US FDA label §1, §2.1 (hydration), §2.2 (ophthalmologic exams), §2.7 (handling as antineoplastic), §4, §5.1 (ANC/Hb/Plt thresholds), §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.1, §4.3, §4.4 (Cross-hypersensitivity with aciclovir/penciclovir; myelosuppression thresholds), §5.1: https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §2 適應症, §4 禁忌, §5.1 交叉過敏反應/骨髓抑制, §15 處理及丟棄: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### A14 · Page body

## Ganciclovir 甘西韋 (GAN03 pms-Ganciclovir 500 mg/10 mL, <span color="green">`IV`</span> only)<br>### Administration<br>- IV infusion over 1 h, final concentration ≤10 mg/mL (NS, D5W, Ringer's or LR). Never bolus, IM or SC (pH ≈11 → severe tissue irritation). Give into a vein with good flow; ensure adequate hydration.<br>- GAN03 is a ready-made 50 mg/mL solution: draw the weight-based volume and dilute (no reconstitution step, 仿單 3.2).<br>- Potential carcinogen/teratogen: wear gloves; dispose of as a cytotoxic drug.<br>### Before and during therapy<br>- Do not start if ANC <500/µL, platelets <25,000/µL or Hb <8 g/dL.<br>- CBC with differential + platelets: UK SmPC: WBC every 2nd day for the first 14 days; daily if ANC <1000/µL, prior drug-induced leukopenia, or renal impairment. Neutropenia usually appears in week 1–2; counts normalise within 2–5 days after stopping/dose reduction (UK/仿單; FDA: recovery begins within 3–7 days).<br>- SCr/CrCl before and during treatment (dose by CrCl; see the renal column). Pregnancy test before starting. CMV retinitis: frequent ophthalmic exams.<br>### Resistance<br>- UL97 (ganciclovir only) and/or UL54 (possible cross-resistance to cidofovir/foscarnet). Suspect it if the clinical response is poor or viral excretion persists.<br>### TDM (not label-required; consider on dialysis/CRRT or with eGFR >120 mL/min/1.73 m²)<br>- Targets used in transplant TDM: prophylaxis Cmin 1–2 mg/L, AUC24 >50 mg·h/L; treatment Cmin 2–4 mg/L, AUC24 80–120 mg·h/L (Märtson 2021, PMID 34160036).<br>### References<br>1. US FDA label (DailyMed setid 87afd103-6e64-444f-971d-0e732e9ae995)<br>2. UK SmPC Cymevene (eMC 10242, rev. 15/01/2026)<br>3. pms-Ganciclovir 仿單 衛部藥輸字第028514號 (TFDA)<br>4. LactMed NBK500947<br>5. Horvatits 2014, PMID 24145543<br>6. Märtson 2021, PMID 34160036

**Why:** The page body is blank. Other entries carry a short clinical body. This proposal holds only label-sourced administration, safety and monitoring content plus one verified PubMed TDM reference, and no storage or stability details (owner rule).

**Sources:** US FDA label §2.1, §2.2, §2.6 (infusion ≤10 mg/mL; compatible fluids), §2.7, §5.1, §12.4: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC §4.2 Method of administration, §4.4 Myelosuppression, §4.8 Neutropenia (recovery 2–5 days): https://www.medicines.org.uk/emc/product/10242/smpc; Taiwan 仿單 §3.2 調製方式 (本藥溶液 50 mg/ml; 抽出此體積加入輸注溶液): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; Märtson AG et al. J Antimicrob Chemother 2021;76:2356-63, PMID 34160036 (esummary/efetch verified): https://pubmed.ncbi.nlm.nih.gov/34160036/

### B1 · Adult dose

<span color="green">`IV`</span> only: infuse over 1 h at ≤10 mg/mL into a vein with adequate flow (never bolus/IM/SC; pH ~11); ensure adequate hydration<br>• CMV retinitis (FDA) / CMV disease treatment (SmPC/TW仿單): induction 5 mg/kg q12h × 14–21 days → maintenance (if at risk of relapse) 5 mg/kg q24h 7 d/wk OR 6 mg/kg q24h 5 d/wk; progression → re-induce<br>• CMV prevention in transplant recipients (FDA): 5 mg/kg q12h × 7–14 days → 5 mg/kg q24h 7 d/wk OR 6 mg/kg 5 d/wk until day 100–120 post-transplant<br>• Pre-emptive therapy (SmPC, ≥12 y): 5 mg/kg q12h × 7–14 days → maintenance as above; universal prophylaxis (SmPC, >16 y): 5 mg/kg q24h 7 d/wk OR 6 mg/kg 5 d/wk, duration per CMV risk<br>• SOT CMV disease (Kotton 2025): IV 5 mg/kg q12h recommended for life-threatening/severe disease; treat ≥2 wk until clinical resolution AND CMV DNAemia below threshold; switch to valganciclovir when able<br>• Suspected resistance (Kotton 2025 flowchart, off-label): GCV 5 mg/kg q12h, optionally 10 mg/kg q12h (high dose, renally adjusted)<br>仿單 (GAN03 pms-Ganciclovir): treatment regimen only

**Why:** No adult regimen is recorded. All three labels agree on the treatment induction (5 mg/kg q12h × 14–21 d) and maintenance (5 mg/kg/day × 7 d/wk or 6 mg/kg/day × 5 d/wk) regimens. The transplant-prevention schedule (7–14 d induction, then to day 100–120) is in the FDA label. Pre-emptive and universal-prophylaxis wording is UK SmPC 4.1/4.2. The TW insert covers treatment only. The 2025 international SOT consensus covers the guideline items: IV preferred for severe disease, a minimum 2-week course, and the optional high dose for resistance. I checked every dose figure against the source texts myself.

**Sources:** US FDA label (Par) §2.1–2.4 'Induction: 5 mg/kg ... every 12 hours for 14 to 21 days ... Maintenance: 5 mg/kg ... once daily for 7 days per week, or 6 mg/kg once daily for 5 days per week'; 'every 12 hours for 7 to 14 days ... until 100 to 120 days post-transplantation' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC Cymevene 4.1 and 4.2 (treatment; pre-emptive 'every 12 hours for 7 – 14 days'; universal prophylaxis '> 16 years ... once daily on 7 days per week or 6 mg/kg once daily on 5 days per week') https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 pms-Ganciclovir 3.1 用法用量 (誘導治療 5 mg/kg q12h 14-21天; 維持治療 5 mg/kg q24h 每週7天或6 mg/kg 每週5天; 疾病惡化可再誘導) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; Kotton CN et al. Fourth International Consensus Guidelines on CMV in SOT, Transplantation 2025;109:1066-1110, PMID 40200403 (verified via esummary; PMC12180710): 'Intravenous ganciclovir is recommended in life-threatening and severe diseases (strong, low)'; 'continued for a minimum of 2 wk, until clinical resolution of disease and decrease in CMV DNAemia below the ... threshold'; algorithm footnote 'GCV dose 5 mg/kg bid IV, optionally 10 mg/kg bid (high dose)' https://pubmed.ncbi.nlm.nih.gov/40200403/

### B2 · Renal dose, HD, CRRT

<span color="green">`IV`</span> (TW仿單 表1 = FDA Table 1 = SmPC; CrCl by Cockcroft-Gault) — Induction / Maintenance:<br>CrCl ≥70: 5 mg/kg q12h / 5 mg/kg q24h<br>CrCl 50–69: 2.5 mg/kg q12h / 2.5 mg/kg q24h<br>CrCl 25–49: 2.5 mg/kg q24h / 1.25 mg/kg q24h<br>CrCl 10–24: 1.25 mg/kg q24h / 0.625 mg/kg q24h<br>CrCl <10 / HD: 1.25 mg/kg 3×/wk / 0.625 mg/kg 3×/wk, give shortly **after** HD (4-h HD ↓ plasma ~50%; 50–63% removed per session)<br>CRRT (no label dose; labels: continuous dialysis CL 4–29.6 mL/min but greater removal over a dosing interval): CVVHDF (UF ~1 L/h + dialysate ~1 L/h, anuric) 2.5 mg/kg q24h (Horvatits 2014); CVVHD 1 L/h: 5 mg/kg q48h (Bastien 1994) — both via Li 2020; evidence limited, CVVH patients often under-exposed (Märtson 2021) → TDM if available (Kotton 2025)

**Why:** The hospital stocks the TW product, so its renal table takes priority. It is numerically identical to the FDA Table 1 and the UK SmPC table, which I checked line by line. The FDA label adds that HD doses must not exceed these values and should follow dialysis because HD lowers levels by about 50%. No label gives a CRRT dose. Li 2020 tabulates 2.5 mg/kg q24h for CVVHDF (Horvatits 2014, anuric patients; that study targeted AUC 50 mg·h/L and a trough of 2 mg/L) and 5 mg/kg q48h for CVVHD. Märtson 2021 found under-exposure in patients on CVVH. Kotton 2025 suggests TDM may be considered in dialysis or unstable renal function. The pediatric SmPC BSA × CrCLS algorithm is already renal-adjusted (see B4).

**Sources:** TW 仿單 3.3 腎功能不全 表1 (≥70 5.0 mg/kg/12h, 5.0 mg/kg/天; ... <10 1.25 mg/kg 每週3次（透析後）, 0.625 mg/kg 每週3次) and 11 進行血液透析的病人 (4小時血液透析降低約50%; 單次透析移除50%-63%; 連續透析廓清率4.0-29.6 mL/min) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; US FDA label §2.5 Table 1 and 'Patients Undergoing Hemodialysis ... should not exceed 1.25 mg/kg 3 times per week ... 0.625 mg/kg 3 times per week following each hemodialysis session ... reduce plasma levels by approximately 50%' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.2 renal table and 5.2 'Estimates of ganciclovir clearance for continuous dialysis were lower (4.0-29.6 mL/min) but resulted in greater removal of ganciclovir over a dose interval' https://www.medicines.org.uk/emc/product/10242/smpc; Li L et al. Front Pharmacol 2020, PMID 32547394 (verified; PMC7273837 Table 3: Ganciclovir CVVHD 'Dialysate flow rate: 1 L/h 5mg/kg q48h (Bastien et al., 1994)'; CVVHDF 'Ultrafiltration rate: 1 L/h Dialysate flow rate: 1 L/h 2.5 mg/kg q24h (Horvatits et al., 2014)') https://pubmed.ncbi.nlm.nih.gov/32547394/; Horvatits T et al. AAC 2014;58:94-101, PMID 24145543 (verified): 'a ganciclovir dose of 2.5 mg/kg once daily seems to be adequate for anuric critically ill patients during CVVHDF' https://pubmed.ncbi.nlm.nih.gov/24145543/; Märtson AG et al. JAC 2021;76:2356-63, PMID 34160036 (verified): 'patients on continuous veno-venous haemofiltration showed underexposure' https://pubmed.ncbi.nlm.nih.gov/34160036/; Kotton 2025, PMID 40200403: 'Systematic TDM for ganciclovir is not generally recommended (weak, low). If available, however, it may be considered in patients receiving dialysis, with unstable or low kidney function' https://pubmed.ncbi.nlm.nih.gov/40200403/

### B3 · Hepatic dose

No dose recommendation — not studied in hepatic impairment (FDA 8.7 / SmPC 4.2 / TW仿單 6.6); renally eliminated unchanged (>90%), so hepatic impairment not expected to affect PK (SmPC 5.2)

**Why:** All three labels state that the drug has not been studied in hepatic impairment. The SmPC 5.2 and TW insert section 11 add that no specific dose recommendation is made because ganciclovir is renally excreted.

**Sources:** UK SmPC 4.2 'Hepatic impairment The safety and efficacy of Cymevene have not been studied' and 5.2 'Hepatic impairment should not affect the pharmacokinetics of ganciclovir since it is excreted renally and, therefore, no specific dose recommendation is made' https://www.medicines.org.uk/emc/product/10242/smpc; US FDA label 8.7 Hepatic Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; TW 仿單 6.6 肝功能不全 and 11 肝功能不全 (預期肝功能不全不會影響ganciclovir的藥物動力學) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### B4 · Pediatric dose

<span color="green">`IV`</span> FDA: safety/efficacy not established in pediatrics; TW仿單: 兒科安全性與療效未確立(含先天性/新生兒CMV)，須極度謹慎 (long-term carcinogenicity / reproductive toxicity)<br>UK SmPC: ≥12 y treatment / pre-emptive = adult mg/kg regimen + adult renal table; <12 y: no posology recommendation<br>UK SmPC universal prophylaxis, birth–16 y: dose (mg) = 3 × BSA (Mosteller) × CrCL (Schwartz; cap 150 mL/min/1.73m²) IV over 1 h q24h — already renal-adjusted; review SCr/height/weight regularly<br>Symptomatic congenital CMV with CNS involvement (off-label): 6 mg/kg IV q12h × 6 weeks (Kimberlin 2003; SmPC 5.1) — grade 3–4 neutropenia in ~63% → close CBC monitoring

**Why:** No pediatric content is recorded. The labels differ here. The FDA and TW labels give no pediatric dose. The UK SmPC gives the BSA × CrCLS universal-prophylaxis algorithm from birth, and adult dosing from age 12. The neonatal congenital-CMV regimen is described in SmPC 5.1 and comes from the CASG RCT (Kimberlin 2003). It is off-label everywhere and should be marked that way.

**Sources:** UK SmPC 4.2 'Paediatric population from birth to ≤ 16 years of age ... Paediatric dose (mg) = 3 x BSA x CrCLS ... maximum value of 150 mL/min/1.73m2'; 'from birth to < 12 years of age ... no recommendation on a posology can be made'; 5.1 'neonates ... intravenous ganciclovir 6 mg/kg every 12 hours' https://www.medicines.org.uk/emc/product/10242/smpc; US FDA label 8.4 'Safety and efficacy of ganciclovir have not been established in pediatric patients' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; TW 仿單 3.3 兒童 'Ganciclovir在兒科的安全性與療效未經確認，包括用於治療先天性或新生兒的CMV感染。對兒童使用本藥必須極度謹慎' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; Kimberlin DW et al. J Pediatr 2003;143:16-25, PMID 12915819 (verified): 6 weeks IV ganciclovir; '29 (63%) of 46 ganciclovir-treated patients had grade 3 or 4 neutropenia' https://pubmed.ncbi.nlm.nih.gov/12915819/

### B5 · Indications

[] (leave empty — no CMV option exists in the schema; do NOT use "Herpes". State indications in Notes: CMV retinitis treatment in immunocompromised (FDA); CMV disease treatment in immunocompromised (SmPC, TW仿單); prevention of CMV disease in transplant recipients (FDA) / pre-emptive & universal prophylaxis (SmPC))

**Why:** Every labelled indication is CMV, and the Indications multi-select has no CMV option. 'Herpes' in this database means HSV/VZV; the acyclovir entry uses it that way. Tagging Herpes would repeat the hospital drug-bag error that implies HSV/zoster use (H3). The indication text therefore goes in Notes. Prophylaxis counts as approved because it is in the FDA and UK labels, although the stocked product's TW insert lists treatment only.

**Sources:** US FDA label §1.1–1.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 2 適應症 '用於治療免疫功能缺乏之巨細胞病毒感染症' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; Data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Indications options: no CMV)

### B6 · Coverage

[] (leave empty — CMV is not a schema option; put 'CMV' in Notes. Do not tag HSV/VZV: in-vitro activity only, clinical studies limited to CMV)

**Why:** The target organism, CMV, has no Coverage tag. SmPC 5.1 lists in-vitro activity against HSV-1/2, VZV, EBV, HHV-6/7/8 and HBV, but says 'Clinical studies have been limited to evaluation of efficacy in patients with CMV infection.' Adding HSV or VZV tags would imply a clinical use that no label supports.

**Sources:** UK SmPC 5.1 'Sensitive human viruses include ... HSV-1 and HSV-2 ... VZV ... Clinical studies have been limited to evaluation of efficacy in patients with CMV infection' https://www.medicines.org.uk/emc/product/10242/smpc; US FDA label 12.4 Microbiology (activity against human CMV) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; Data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Coverage options: no CMV)

### B7 · Side Effects

["hematologic","neutropenia","anemia","thrombocytopenia","leukopenia","GI","nephrotoxicity","CNS","neuropathy","LFT↑","thrombophlebitis"]

**Why:** All three labels name haematological reactions (neutropenia, anaemia, thrombocytopenia) as the most serious and frequent ADRs. TW Table 2 gives neutropenia 26.1%, anaemia 19.9%, thrombocytopenia 7.3% and leukopenia 3.9%. US Table 2 (IV maintenance) gives leukopenia 41% and anaemia 25%. GI effects are very common (diarrhoea 34–44%, nausea 26%, vomiting 13–15%). Renal effects: SCr rise and renal impairment are common, AKI occurs in overdose, and the label carries a renal-impairment warning. CNS effects include seizures (especially with imipenem), confusion and hallucinations. Peripheral neuropathy is 6–9%. AST/ALT/ALP rises are common. Injection-site reaction or phlebitis is common at 7%. Every tag already exists in the schema. Optional additions: SJS/TEN and QTc prolong (TdP), both postmarketing only. Fever (33–48%), retinal detachment (HIV CMV retinitis) and infertility have no tag and belong in Notes.

**Sources:** US FDA label 5.1, 5.2 and 6.1 Table 2 (pyrexia 48%, diarrhea 44%, leukopenia 41%, anemia 25% ... neuropathy peripheral 9%); 6.1 other ADRs (seizure, phlebitis, AST/ALT increased); 6.2 postmarketing (SJS, torsade de pointes) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.8 'the most serious and frequent adverse drug reactions are haematological reactions and include neutropenia, anaemia and thrombocytopenia' https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 8.1 表2 (嗜中性白血球減少症26.12%, 貧血19.89%, 血小板減少症7.34%, 白血球減少症3.93%, 腹瀉34.27%, 周邊神經病變6.16%, 癲癇2.29%, 注射部位反應6.98%, 血中肌酸酐升高1.88%) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### B8 · Monitor

["CBC","renal"]

**Why:** Required by all three labels. They call for CBC with differential and platelets 'frequently'; the SmPC specifies WBC every second day for the first 14 days, daily if baseline ANC <1000, prior leukopenia or renal impairment. Renal function (SCr/CrCl) must be checked before and during therapy for dose adjustment. Other monitoring with no schema tag goes in Notes: a pregnancy test before treatment, and frequent ophthalmology exams in CMV retinitis.

**Sources:** US FDA label §2.2 Testing Before and During Treatment (pregnancy test; CBC with differential and platelets frequently; renal function before and during; ophthalmological exams) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.4 'During the first 14 days ... white blood cell count ... every second day; in patients with low baseline neutrophil levels (< 1,000 ...) ... and those with renal impairment, this monitoring should be performed daily' https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 5.1 骨髓抑制 (建議治療期間所有病人監測全血球計數與血小板計數) and 3.3 (謹慎監測血清肌氨酸酐) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### B9 · Mechanism

2'-deoxyguanosine analogue → monophosphorylated by CMV kinase pUL97 → di/triphosphate by cellular kinases (preferentially in infected cells) → GCV-triphosphate inhibits viral DNA polymerase pUL54 (competes with dGTP; incorporation → chain termination/limited elongation). Resistance: UL97 mutations (GCV only) ± UL54 mutations (possible cross-resistance to cidofovir/foscarnet)

**Why:** This is label-based mechanism text. The resistance clause is useful context and is in all three labels.

**Sources:** US FDA label 12.4 Mechanism of Action and Viral Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 5.1 Mechanism of action; Viral resistance ('Viruses containing mutations in the UL97 gene are resistant to ganciclovir alone, whereas ... UL54 ... may show cross-resistance') https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 10.2 作用機轉 and 12 病毒抗藥性 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### B10 · Drug Interactions

Imipenem-cilastatin → generalized seizures; avoid unless benefit > risk<br>Probenecid → ganciclovir AUC ↑ ~40–53% (renal CL ↓ ~20%) → monitor toxicity, dose ↓ may be needed<br>Didanosine → didanosine AUC ↑ 38–70% → monitor didanosine toxicity (pancreatitis)<br>Zidovudine → additive neutropenia/anaemia; full doses may not be tolerated<br>Mycophenolate mofetil → no PK change (normal renal fn) but ↑ haematological/renal toxicity → monitor<br>Cyclosporine, amphotericin B → ↑ SCr; monitor renal function<br>Other myelosuppressive/nephrotoxic drugs (dapsone, pentamidine, flucytosine, TMP-SMX, tacrolimus, vincristine, vinblastine, doxorubicin, hydroxyurea, tenofovir, adefovir) → use only if benefit > risk<br>No CYP450 involvement (SmPC)

**Why:** The labels agree on these interactions. Probenecid figures: the FDA gives AUC ↑53% and renal CL ↓22%; the TW insert gives exposure ↑40% and renal CL ↓20%. Didanosine figures: the FDA gives AUC ↑50–70%; the SmPC and TW insert give 38–67%.

**Sources:** US FDA label 7 Table 6 and 12.3 Tables 8–9 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.4 and 4.5 ('Cytochrome P450 isoenzymes play no role in ganciclovir pharmacokinetics'; imipenem; zidovudine; didanosine 38–67%) https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 7 交互作用 (Imipenem-cilastatin 抽搐; Probenecid 腎臟清除率降低20%、曝露量增加40%; Didanosine AUC升高38至67%) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### B11 · Pregnancy

避免使用 unless maternal need outweighs teratogenic risk — animal: teratogenic/embryolethal at ~2× human exposure; crosses human placenta; no adequate human data (FDA 8.1 / SmPC 4.6 / TW仿單 6.1; no letter category). Pregnancy test before starting (FDA 2.2, 8.3). Contraception: women during + ≥30 days after; men barrier during + ≥90 days after (all labels). May cause temporary/permanent infertility

**Why:** All three labels use narrative pregnancy text with no letter category. Do not copy the hospital's 'C' (H1). The SmPC wording is the most directive: 'should not be used in pregnant women unless the clinical need for treatment of the woman outweighs the potential teratogenic risk to the foetus'.

**Sources:** US FDA label 5.4, 8.1 and 8.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.4 and 4.6 ('ganciclovir readily diffuses across the human placenta ... should not be used in pregnant women unless ...') https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 5.1 胎兒毒性; 6.1 懷孕; 6.3 避孕 (女性至少30天、男性至少90天) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F

### B12 · Breastfeeding

不建議哺乳 — FDA/TW仿單: breastfeeding not recommended (risk of serious infant ADRs; rat milk:serum 1.6); UK SmPC: **contraindicated**, breastfeeding must be discontinued. LactMed: no human data; manufacturer advises avoidance, although neonates with CMV are often treated directly with ganciclovir

**Why:** The labels agree that breastfeeding should be avoided. The UK SmPC goes further and lists breastfeeding in 4.3 Contraindications; the brief left this out. LactMed adds that there are no human data and that neonates are themselves treated with ganciclovir.

**Sources:** UK SmPC 4.3 'Breastfeeding (see section 4.6)' and 4.6 'breastfeeding must be discontinued during treatment with ganciclovir' https://www.medicines.org.uk/emc/product/10242/smpc; US FDA label 8.2 'breastfeeding is not recommended ... milk-to-serum ratio ... 1.6' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; TW 仿單 6.2 哺乳 (於ganciclovir治療期間不建議哺乳) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; LactMed Ganciclovir NBK500947 (rev. 2026-02-15), Summary of Use during Lactation https://www.ncbi.nlm.nih.gov/books/NBK500947/

### B13 · Notes

CMV only (no CMV tag in Coverage/Indications). 院內 GAN03 = pms-Ganciclovir 50 mg/mL solution, 10 mL vial (衛部藥輸字第028514號); TW仿單 適應症 = 治療免疫功能缺乏之CMV感染症 only (transplant prophylaxis / pre-emptive = FDA/UK-labelled)<br>HSV/VZV/EBV/HHV-6–8: in-vitro activity only; clinical studies limited to CMV (SmPC 5.1) → use acyclovir for HSV/VZV<br>IV over 1 h at ≤10 mg/mL into a vein with adequate flow; never bolus/IM/SC (pH ~11); adequate hydration<br>Do NOT start if ANC <500/µL, platelets <25,000/µL or Hb <8 g/dL (all labels); severe cytopenia → consider G-CSF and/or interruption (labels); Kotton 2025 (SOT): do not reduce dose for leukopenia alone<br>Potential carcinogen/teratogen; ↓ spermatogenesis (temporary or permanent) → handle as cytotoxic<br>CI: hypersensitivity to ganciclovir/valganciclovir (UK: also breastfeeding). Aciclovir/penciclovir allergy = caution (cross-hypersensitivity possible), not a CI<br>Retinal detachment reported in HIV CMV retinitis → regular eye exams; fever common (33–48%)<br>Resistance (UL97 ± UL54): suspect if refractory (CMV DNAemia unchanged/↑ or ≤1 log10 ↓ after ≥2 wk of optimally dosed therapy) AND cumulative exposure ≥4–6 wk → genotype UL97 + UL54 (Kotton 2025)<br>TDM: not routine; consider in dialysis/CRRT or unstable renal fn. Suggested treatment targets: AUC24 80–120 mg·h/L (not validated, Kotton 2025) / trough 2–4 mg/L (Märtson 2021)

**Why:** Notes has to carry the CMV coverage and indications, which have no tags, and the safety thresholds. It also records the contraindication scope. The hospital site wrongly lists acyclovir hypersensitivity as a contraindication (H2). The UK SmPC is the only label that contraindicates breastfeeding. The TDM targets come from guideline and PubMed sources, and Kotton 2025 says they are not validated. No storage details are included, per the owner.

**Sources:** US FDA label 2.1, 2.2, 4, 5.1, 5.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 4.2 ('concentration not exceeding 10 mg/mL'), 4.3, 4.4 (cross-hypersensitivity; myelosuppression thresholds), 4.8 (retinal detachment) https://www.medicines.org.uk/emc/product/10242/smpc; TW 仿單 2, 3.1, 4 禁忌 (ganciclovir、valganciclovir或賦形劑過敏), 5.1 交叉過敏反應 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F; Kotton 2025, PMID 40200403: 'We do not recommend reducing the dose of valganciclovir or ganciclovir based on leukopenia alone (strong, moderate)'; 'Probable refractory CMV infection is considered if CMV DNAemia levels remain unchanged or increase after at least 2 wk'; 'An AUC24h target of 80–120 mg·h/L ... has been suggested, but not validated' https://pubmed.ncbi.nlm.nih.gov/40200403/; Märtson 2021, PMID 34160036: 'For treatment, a Cmin of 2-4 mg/L and an AUC24h of 80-120 mg·h/L were aimed for' https://pubmed.ncbi.nlm.nih.gov/34160036/

### B14 · Page body

Add a body in the Acyclovir house layout: ## Ganciclovir 甘西韋 (GAN03 pms-Ganciclovir 500 mg/10 mL, <span color="green">`IV`</span> only) / ### Category / ### Mechanism (B9) / ### Indications (FDA 1.1–1.2; SmPC 4.1; TW仿單 適應症 = treatment only) / ### Coverage (CMV; in-vitro HSV/VZV/EBV/HHV-6–8 only, not clinically studied) / ### Adult Dose (B1 as table: indication \| induction \| maintenance; administration ≤10 mg/mL over 1 h) / ### Renal Dose (B2 table: CrCl \| induction \| maintenance; HD; CRRT with citations) / ### Hepatic Dose (B3) / ### Pediatric Dose (B4) / ### Side Effects (haematologic first, TW 表2 %) / ### Monitoring (CBC schedule per SmPC 4.4; SCr; pregnancy test; eye exams) / ### Drug Interactions (B10 as table) / ### Notes (thresholds, cytotoxic handling, resistance, TDM; no storage) / ### Pregnancy (B11) / ### Breastfeeding (B12) / ### References: 1. US FDA label — Ganciclovir for injection (DailyMed setid 87afd103-6e64-444f-971d-0e732e9ae995, v8, 2026-09-28): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995 2. UK SmPC — Cymevene (eMC 10242, rev. 15/01/2026): https://www.medicines.org.uk/emc/product/10242/smpc 3. pms-Ganciclovir 仿單 衛部藥輸字第028514號: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC028514%E8%99%9F 4. LactMed — Ganciclovir NBK500947 (rev. 2026-02-15): https://www.ncbi.nlm.nih.gov/books/NBK500947/ 5. Kotton CN et al. Transplantation 2025;109:1066-1110, PMID 40200403: https://pubmed.ncbi.nlm.nih.gov/40200403/ 6. Li L et al. Front Pharmacol 2020;11:786, PMID 32547394: https://pubmed.ncbi.nlm.nih.gov/32547394/ 7. Horvatits T et al. AAC 2014;58:94-101, PMID 24145543: https://pubmed.ncbi.nlm.nih.gov/24145543/ 8. Märtson AG et al. JAC 2021;76:2356-63, PMID 34160036: https://pubmed.ncbi.nlm.nih.gov/34160036/ 9. Kimberlin DW et al. J Pediatr 2003;143:16-25, PMID 12915819: https://pubmed.ncbi.nlm.nih.gov/12915819/

**Why:** The page is new and blank. Other entries have a structured body with a References list, and the owner's style requires citing the sources behind every claim.

**Sources:** Existing entry style: Zovirax (Acyclovir) https://app.notion.com/263c496dfff18040beccdc67d2349639; Sources as cited in B1–B13

### B15 · Category

Keep as is (optional style alignment with Acyclovir entry: "Antiviral, **nucleoside analogue** (2'-deoxyguanosine analogue; anti-CMV)")

**Why:** The current Category is correct. The FDA label calls ganciclovir 'a deoxynucleoside analogue cytomegalovirus (CMV) DNA polymerase inhibitor', SmPC 5.1 'a synthetic analogue of 2'-deoxyguanosine', ATC J05AB06. The only possible change is a formatting tweak to match the bold style of the acyclovir entry, and it is optional.

**Sources:** US FDA label §1 Highlights https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87afd103-6e64-444f-971d-0e732e9ae995; UK SmPC 5.1 (ATC J05AB06) https://www.medicines.org.uk/emc/product/10242/smpc

## Disputed (not applied; reviewers disagreed)

- **Coverage**: proposed "["HSV","VZV"] (in-vitro activity only; add the Notes caveat in A13. CMV is not a schema option, so it goes in Notes)". Not applied because: Leave Coverage empty. UK SmPC 5.1 does list HSV-1/2 and VZV as sensitive, but it also says 'Clinical studies have been limited to evaluation of efficacy in patients with CMV infection.' FDA 12.4 and 仿單 10.2 describe activity against CMV only. In this database a Coverage tag reads as clinical spectrum, so tagging HSV/VZV would list ganciclovir next to acyclovir for HSV/VZV, a use no label supports and one that carries more myelotoxicity. A's own caveat is also inaccurate: SmPC 5.1 says ganciclovir inhibits herpes viruses 'both in vitro and in vivo', not 'in-vitro activity only'. The spectrum statement belongs in Notes with the 'clinical studies limited to CMV' caveat. Proposed value: [] (CMV and the HSV/VZV in-vitro spectrum go in Notes).

## Apply log

- Adult dose: merged both agreed proposals (IV-only administration, treatment/prevention/pre-emptive/universal prophylaxis regimens, Kotton 2025 SOT and resistance dosing, 仿單 GAN03 treatment-only note)
- Renal dose, HD, CRRT: TW仿單/FDA/UK renal table, HD post-dialysis dosing (~50% removal), CRRT data (Horvatits 2014, Bastien 1994 via Li 2020, Märtson 2021, Kotton 2025 TDM)
- Hepatic dose: no specific recommendation; renally excreted unchanged
- Pediatric dose: FDA/TW not established; UK SmPC >=12 y and Mosteller x Schwartz universal-prophylaxis formula; congenital CMV 6 mg/kg q12h x 6 wk (Kimberlin 2003) with neutropenia warning
- Indications: left empty (no CMV option; Herpes not used); CMV indications placed in Notes and body
- Coverage: left empty (no CMV option; HSV/VZV not tagged); explained in Notes and body
- Side Effects: [hematologic, neutropenia, anemia, thrombocytopenia, leukopenia, GI, nephrotoxicity, CNS, neuropathy, LFT↑, thrombophlebitis]
- Monitor: [CBC, renal]
- Mechanism: pUL97/cellular kinase phosphorylation, pUL54 inhibition, virustatic, UL97/UL54 resistance
- Drug Interactions: imipenem, probenecid, didanosine, zidovudine, MMF, cyclosporine/amphotericin B, other myelosuppressive/nephrotoxic drugs, no CYP450
- Pregnancy: no letter category; avoid unless benefit outweighs risk; pregnancy test; contraception 30/90 days; fertility
- Breastfeeding: not recommended (FDA/TW), contraindicated (UK), LactMed summary
- Notes: CMV-only labelled uses, GAN03 product/licence, in-vitro-only HSV/VZV, administration, start thresholds, CI/cross-hypersensitivity, cytotoxic handling, eye exams, resistance criteria (Kotton 2025), TDM targets
- Page body: full house-layout body added (Category, Mechanism, Indications, Coverage, Administration, Adult/Renal dose tables, HD/CRRT, Hepatic, Pediatric, Side Effects, Monitoring, Drug Interactions table, Notes incl. resistance/TDM, Pregnancy, Breastfeeding) with References section (FDA DailyMed, UK SmPC eMC 10242, TFDA 仿單 028514, LactMed NBK500947, Kotton 2025, Li 2020, Horvatits 2014, Märtson 2021, Kimberlin 2003, all with URLs)
- Category: kept as is (optional style alignment applied only in body Category heading)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
