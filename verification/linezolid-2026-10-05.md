# Verification: Zyvox (Linezolid)

- **Notion entry:** [Zyvox (Linezolid)](https://app.notion.com/20ec496dfff180cf955feabfc6eb3dcf)
- **Hospital codes:** ZYV01 (Zyvox inj 600 mg/300 mL), ZYV02 (Zyvox tab 600 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/linezolid.json` (plus any `sources/linezolid-taiwan-insert-*.txt`)

## Product and sources

FJUH stocks Pfizer Zyvox (linezolid) in two forms: ZYV01, 采福適注射劑 ZYVOX INJECTION 600 mg/300 mL (2 mg/mL), TFDA 衛署藥輸字第023186號, NHI BC23186266; and ZYV02, 采福適膜衣錠 ZYVOX TABLETS 600 mg, 衛署藥輸字第023181號, NHI BC23181100. Sources checked: (1) US FDA label, Pfizer combined Zyvox IV/tablet/oral-suspension SPL, setid 6e70e63b-bfd5-478d-a8ee-8ba22c9efabd, v72 published Jun 24 2026 (I confirmed setid, title and version against the DailyMed API); (2) UK SmPC, Zyvox 600 mg film-coated tablets, eMC 1688, revised 03/2026; (3) LactMed Linezolid, NBK501700, revised 2024-07-15; (4) Taiwan inserts for both licences (latest 114/10/07, based on the US label of 2021-11). The Taiwan inserts' renal/HD and hepatic text matches US label 12.3.

## Agreed fixes applied in Notion (51)

### A1 · Page body (error)

**Was:** Last line of page: "Would you like me to update this directly in your Notion database, or would you prefer to copy this content manually?"

**Now:** REMOVE (delete this line only)

**Why:** This is text pasted from an AI chat, not drug information. Ground rules say to remove it.

**Sources:** Ground rules (pasted AI-chat text) - no label source applicable

### A2 · Adult dose (minor)

**Was:** 600 mg IV/PO q12h (10-28 days)

**Now:** 600 mg IV/PO q12h (IV→PO no dose change); NP/CAP/cSSTI 10–14 d; VRE faecium (incl. concurrent bacteremia) 14–28 d; uSSSI: adults 400 mg PO q12h × 10–14 d (US/TW label); max 28 d (UK SmPC; US: >28 d not evaluated)

**Why:** US label Table 1 (2.1) gives 10–14 days for nosocomial pneumonia, CAP and cSSSI, and 14–28 days only for VRE E. faecium. For uncomplicated SSSI the adult dose is 400 mg PO q12h, not 600 mg. Quote: "Adults: 400 mg oral every 12 hours Adolescents: 600 mg oral every 12 hours 10 to 14". The Taiwan insert table 3.1 is the same (成人：400mg 口服，每 12 小時一次). The page body's Adult Dose list repeats the error: under "Uncomplicated SSTI: 10-14 days" it implies 600 mg. Add "(adults 400 mg PO q12h)" there as well. UK SmPC 4.2: "The maximum treatment duration is 28 days."

**Sources:** US FDA label (DailyMed) §2.1 Table 1 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan insert 采福適注射劑 §3.1 表一 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F; UK SmPC §4.2 - https://www.medicines.org.uk/emc/product/1688/smpc

### A3 · Pediatric dose (missing)

**Was:** \<12 years: 10 mg/kg IV/PO q8h; ≥12 years: 600 mg q12h

**Now:** Birth–11 y: 10 mg/kg IV/PO q8h；Preterm (GA <34 wk) neonates <7 d: start 10 mg/kg q12h (q8h if poor response), all neonates q8h by 7 days of life；uSSSI (PO): <5 y 10 mg/kg q8h, 5–11 y 10 mg/kg q12h；≥12 y: 600 mg q12h. (UK SmPC: pediatric posology not established)

**Why:** US label §2.1 quote: "These neonates should be initiated with a dosing regimen of 10 mg/kg every 12 hours. Consideration may be given to the use of 10 mg/kg every 8 hours regimen in neonates with a sub-optimal clinical response. All neonatal patients should receive 10 mg/kg every 8 hours by 7 days of life." uSSSI is "less than 5 yrs: 10 mg/kg oral every 8 hours 5–11 yrs: 10 mg/kg oral every 12 hours". The column currently has neither exception. The page body already has the neonatal regimen but not the uSSSI q12h. UK SmPC 4.2 quote: "The safety and efficacy of linezolid in children aged (< 18 years old) has not been established... no recommendation on a posology can be made." Per the ground rules, the US/Taiwan label applies and the UK position is mentioned alongside. The Brief Summary Table pediatric row should be updated the same way.

**Sources:** US FDA label §2.1 Table 1 and §8.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan insert §3.1 表一 footnote † - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F; UK SmPC §4.2 Paediatric population - https://www.medicines.org.uk/emc/product/1688/smpc

### A4 · Page body (unsupported)

**Was:** Pediatric Dose: "Maximum pediatric dose: Should not exceed recommended adult dose"

**Now:** Maximum pediatric dose: should not exceed recommended adult dose [flag: not stated in US/TW label or UK SmPC; US 12.3 PK study dosed adolescents 10 mg/kg up to 600 mg]. CNS infection: not recommended for empiric treatment in children—CSF concentrations variable, therapeutic levels not consistently achieved (US 8.4; TW 6.4).

**Why:** No label states the "should not exceed adult dose" sentence. The only cap in the label is in the PK study design (Table 9: "600 mg or 10 mg/kg up to a maximum of 600 mg" for 12–17 y). The page leaves out an important pediatric warning. US §8.4 quote: "therapeutic concentrations were not consistently achieved or maintained in the CSF. Therefore, the use of linezolid for the empiric treatment of pediatric patients with central nervous system infections is not recommended." The Taiwan insert §6.4 says the same.

**Sources:** US FDA label §8.4, §12.3 Table 9 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan insert §6.4 小兒 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F

### A5 · Indications (missing)

**Was:** Bacteremia, SSTI, Pneumonia, Meningitis

**Now:** Add tags: HAP, CAP, cSSTI (keep Bacteremia, SSTI, Pneumonia)

**Why:** The labelled indications are nosocomial pneumonia (§1.1), CAP including concurrent bacteremia (§1.2), complicated SSSI including diabetic foot without osteomyelitis (§1.3), uncomplicated SSSI (§1.4), and VRE E. faecium including concurrent bacteremia (§1.5). The HAP, CAP and cSSTI options exist in the schema. Keep Bacteremia: the label covers concurrent bacteremia with CAP and VRE faecium. But note US §5.4: "Linezolid is not approved and should not be used for the treatment of patients with catheter-related bloodstream infections." UK SmPC 4.1 lists nosocomial pneumonia, CAP and cSSTI.

**Sources:** US FDA label §1.1–1.5, §5.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.1 - https://www.medicines.org.uk/emc/product/1688/smpc

### A6 · Indications (unsupported)

**Was:** Meningitis (tag)

**Now:** REMOVE Meningitis tag (if the owner keeps it as off-label, the body must cite a guideline and note the label caution)

**Why:** Neither the FDA label nor the UK SmPC lists meningitis, so it is not an approved indication. The US label partly contradicts it. §8.4 quote: "the use of linezolid for the empiric treatment of pediatric patients with central nervous system infections is not recommended." UK SmPC 5.2 reports a CSF:plasma ratio of 0.7 only in a small study of VP-shunt patients with non-inflamed meninges. The Taiwan insert indications (§2) also do not include CNS infection.

**Sources:** US FDA label §1, §8.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.1, §5.2 - https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan insert §2 適應症 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F

### A7 · Page body (unsupported)

**Was:** Indications: "Off-Label Uses: Bone and joint infections, brain abscess, febrile neutropenia, infectious arthritis, meningitis, orthopedic device-related infection, osteomyelitis, sepsis, subdural empyema, ventriculitis, anthrax, and multidrug-resistant tuberculosis (in combination regimens)." Also cSSTI bullet lacks the diabetic-foot detail.

**Now:** FDA-Approved cSSTI bullet: add "including diabetic foot infection without concomitant osteomyelitis; not studied in decubitus ulcers (US 1.3)". Add Limitations: "Not for Gram-negative infections; not approved for catheter-related bloodstream/catheter-site infections (mortality imbalance 21.5% vs 16.0%, US 5.4); safety >28 d not evaluated (US 1.6). UK SmPC 4.1: adults only; cSSTI only when microbiologically confirmed Gram-positive." Off-label: cite IDSA MRSA 2011 (PMID 21208910) for osteomyelitis, septic arthritis/bone & joint, orthopedic device infection, meningitis, brain abscess, subdural empyema (MRSA, alternative agent); flag febrile neutropenia, sepsis, ventriculitis, anthrax and MDR-TB as needing a guideline citation.

**Why:** None of the off-label items appear in the US label, UK SmPC or Taiwan insert, and no citation is given. The approved-use text leaves out label limitations. §1.6 quote: "not indicated for the treatment of Gram-negative infections" and "longer than 28 days have not been evaluated". §5.4 records a mortality imbalance in catheter-related BSI (21.5% vs 16.0%). §1.3 includes "diabetic foot infections, without concomitant osteomyelitis".

**Sources:** US FDA label §1.3, §1.6, §5.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.4 (mortality imbalance) - https://www.medicines.org.uk/emc/product/1688/smpc

### A8 · Coverage (missing)

**Was:** MRSA, MRSE, VRE, MSSA, Finegoldia

**Now:** MRSA, MRSE, VRE, MSSA, Finegoldia, Streptococcus, Enterococcus, E. faecalis

**Why:** US §12.4 lists clinically proven activity against S. aureus (incl. MRSA), VRE E. faecium, S. agalactiae, S. pneumoniae and S. pyogenes. Streptococcus, a core labelled organism, has no tag. In vitro (US §12.4): E. faecalis (incl. vancomycin-resistant), vancomycin-susceptible E. faecium, S. epidermidis incl. methicillin-resistant (supports MRSE), viridans streptococci. UK SmPC 5.1 lists E. faecalis and E. faecium as susceptible. Finegoldia has only weak support: SmPC 5.1 lists "Peptostreptococcus species" as susceptible, and Finegoldia magna was formerly Peptostreptococcus magnus. Keep it, but it is in vitro only.

**Sources:** US FDA label §12.4 Microbiology - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §5.1 Susceptibility - https://www.medicines.org.uk/emc/product/1688/smpc

### A9 · Page body (unsupported)

**Was:** Coverage: "VRE (Enterococcus faecium and E. faecalis)"; "Streptococcus pneumoniae (including penicillin-resistant strains)"; "Listeria monocytogenes"; "Nocardia species"; "Some mycobacteria (including M. tuberculosis)"; "Note: No activity against gram-negative bacteria due to intrinsic efflux mechanisms."

**Now:** VRE: E. faecium (clinical efficacy); E. faecalis incl. VRE (in vitro only, US 12.4). S. pneumoniae: US label unqualified; Taiwan insert indication limited to penicillin-susceptible strains; SmPC 5.1: in vitro active vs penicillin-resistant streptococci. Listeria/Nocardia/mycobacteria: keep, flagged "in vitro/off-label—not in US/UK/TW labels; citation needed". Gram-negative line → "No clinically useful Gram-negative activity (US 1.6/5.4); SmPC 5.1 resistant: H. influenzae, M. catarrhalis, Neisseria, Enterobacteriaceae, Pseudomonas. In vitro only: Pasteurella multocida (US 12.4)."

**Why:** The Taiwan insert §2 quote: "Streptococcus pneumoniae(僅限於對penicillin有感受性的菌株)". This is narrower than the page's "including penicillin-resistant". US §12.4 says E. faecalis is in vitro only. Listeria, Nocardia and M. tuberculosis are not mentioned in any label source. The "intrinsic efflux" mechanism has no source. The labels state no clinical Gram-negative activity. US 12.4 notes "in vitro spectrum ... includes certain Gram-negative bacteria" (P. multocida).

**Sources:** US FDA label §1.6, §5.4, §12.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §5.1 - https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan insert §2 適應症 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F

### A10 · Renal dose, HD, CRRT (minor)

**Was:** No adjustment required; give after HD (30% removed); caution: ↑ thrombocytopenia risk in severe renal impairment

**Now:** No adjustment (parent PK unchanged; TW/US label)；2 inactive metabolites accumulate with ↓CrCl—weigh risk (SmPC: up to ~10× in severe RI, use with special caution)；HD: ~30% removed per 3-h session → give after HD；PD: no data；CRRT: no label data—usually 600 mg q12h, PK highly variable, consider TDM；↑thrombocytopenia in severe RI ± dialysis → weekly CBC

**Why:** The existing text is correct but leaves out several label points. Taiwan insert / US §12.3 quote: "二個主要的 linezolid 代謝物有蓄積的現象 ... 須衡量這些代謝物蓄積時所造成的潛在危險性 ... 尚未有有關腹膜透析 ... 的資料 ... linezolid 應在血液透析後才投與". UK SmPC 4.2 cites "higher exposure (up to 10 fold) to the two primary metabolites" and says to "use with special caution". It also states there is "no experience" with CAPD or other RRT. The CRRT wording is backed by Villa 2016 (PMID 27863531) and Liu 2023 (PMID 36579392); I verified both via esummary. They report wide PK variability on CRRT and recommend TDM. The Taiwan insert, for the stocked product, agrees with the US label.

**Sources:** Taiwan insert 藥物動力學特性 腎功能不全 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F; US FDA label §12.3 Renal Impairment, §5.1 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.2, §5.2 - https://www.medicines.org.uk/emc/product/1688/smpc; Villa G et al. Crit Care 2016;20:374, PMID 27863531 - https://pubmed.ncbi.nlm.nih.gov/27863531/; Liu Y et al. Curr Drug Metab 2023;24:70-77, PMID 36579392 - https://pubmed.ncbi.nlm.nih.gov/36579392/

### A11 · Page body (unsupported)

**Was:** CRRT: "Standard dosing (600 mg q12h) is generally used. Dose adjustments to 600 mg q8h should be considered if MIC ≥2 mcg/mL at high (>3 L/hr CRRT) in deep-seated infections. Consider therapeutic drug monitoring (TDM) in critically ill patients."

**Now:** CRRT: No label data (US 12.3: no PD data; SmPC 4.2: no experience with RRT other than HD). Usual 600 mg q12h; linezolid PK on CRRT is highly variable—TDM recommended; dose increase/shorter interval or extended/continuous infusion proposed, especially when MIC >2 mg/L, high body weight or preserved residual renal function (Villa 2016, PMID 27863531; Liu 2023, PMID 36579392). [Flag: specific "600 mg q8h if MIC ≥2 at effluent >3 L/h" threshold needs a citation.]

**Why:** No source is cited for the specific threshold "600 mg q8h if MIC ≥2 at >3 L/h", and I found none in the label or the verified reviews. Liu 2023 concludes: "Dose adjustment, shortening the dosing interval, and continuous infusion were proposed... TDM is recommended ... specifically for those whose bodyweight is high, renal function is preserved, and the MIC ... above 2 μg/mL." Villa 2016 found wide PK/PD variability; target attainment for MIC 4 was reached "in one study only".

**Sources:** Villa G et al. Crit Care 2016, PMID 27863531 - https://pubmed.ncbi.nlm.nih.gov/27863531/; Liu Y et al. Curr Drug Metab 2023, PMID 36579392 - https://pubmed.ncbi.nlm.nih.gov/36579392/; UK SmPC §4.2 - https://www.medicines.org.uk/emc/product/1688/smpc

### A12 · Page body (unsupported)

**Was:** "Clinical Pearl: In clinically stable patients with CrCl <30 mL/minute and anticipated treatment course >10 days, some experts suggest reducing dose to 300 mg IV/PO twice daily after 72 hours to reduce thrombocytopenia risk."

**Now:** Keep only as clearly labelled off-label expert opinion with citation, e.g.: "Off-label (labels: no adjustment): renal impairment ↑thrombocytopenia (42.9% vs 16.8%; aHR 2.37); PK modelling supports dose reduction + trough-guided TDM (target Cmin 2–8 mg/L) when eGFR <60 (Crass 2019, PMID 31109977)." The specific "300 mg BID after 72 h" regimen remains unsourced.

**Why:** The US/Taiwan label and UK SmPC all say no renal dose adjustment. Crass et al. 2019, verified via esummary, supports dose reduction with TDM in renal impairment in general. It does not state the 300 mg BID-after-72-h rule, so that regimen needs its own citation.

**Sources:** Crass RL et al. Antimicrob Agents Chemother 2019;63:e00605-19, PMID 31109977 - https://pubmed.ncbi.nlm.nih.gov/31109977/; US FDA label §12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd

### A13 · Hepatic dose (minor)

**Was:** No adjustment for mild-moderate (Child-Pugh A/B); use with caution in severe impairment

**Now:** No adjustment for Child-Pugh A/B；Child-Pugh C not studied (SmPC: use only if benefit > risk)；thrombocytopenia more frequent in moderate–severe hepatic impairment → weekly CBC

**Why:** US §12.3 quote: "The pharmacokinetics of linezolid in patients with severe hepatic impairment have not been evaluated." §5.1 quote: "Thrombocytopenia has been reported more often ... in patients with moderate to severe hepatic impairment". UK SmPC 4.2 says to use "only when the anticipated benefit is considered to outweigh the theoretical risk". In the page body, "The risk of hematological toxicity increases in patients with cirrhosis" should be reworded to the label wording, which refers to moderate–severe hepatic impairment, not cirrhosis.

**Sources:** US FDA label §5.1, §12.3 Hepatic Impairment - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.2, §5.2 - https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan insert 肝功能不全 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F

### A14 · Side Effects (missing)

**Was:** anemia, neuropathy, thrombocytopenia

**Now:** anemia, neuropathy, thrombocytopenia, GI, leukopenia, dysglycemia, rhabdomyolysis, CNS, SJS/TEN

**Why:** US §6 quote: "Most common adverse reactions (>5%...) include diarrhea, vomiting, headache, nausea, and anemia" (supports GI). §5.1 says myelosuppression includes leukopenia and pancytopenia. Other label reactions: hypoglycemia (§5.10, dysglycemia), rhabdomyolysis (§5.9), convulsions (§5.8, CNS), and SJS/TEN in postmarketing (§6.2). All of these options exist in the schema.

**Sources:** US FDA label §5.1, §5.8–5.10, §6, §6.2 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.8 - https://www.medicines.org.uk/emc/product/1688/smpc

### A15 · Page body (unsupported)

**Was:** Side Effects: "Peripheral neuropathy (usually seen after several months, median 5 months; often irreversible)"; "Optic neuropathy (median 5 months; generally reversible with discontinuation)"; "Lactic acidosis (median onset 6 weeks)"; "Serotonin syndrome (median onset 4 days...)"; "*C. difficile*associated diarrhea"

**Now:** Peripheral & optic neuropathy: primarily with therapy >28 days; optic neuropathy may progress to loss of vision; blurred vision reported <28 d (US 5.2). Lactic acidosis: recurrent N/V, unexplained acidosis, low bicarbonate (US 5.7). Serotonin syndrome with serotonergic agents (US 5.3). Fix typo → "*C. difficile*-associated diarrhea (CDAD)". Add: convulsions (5.8), rhabdomyolysis (5.9), hyponatremia/SIADH (5.11), SCAR incl. SJS/TEN, anaphylaxis, angioedema, sideroblastic anemia, tooth/tongue discoloration (6.2). Flag the median-onset/reversibility figures as unsourced.

**Why:** The median onset times and the reversibility statements are not in the US label, UK SmPC or Taiwan insert. The label says only that neuropathies occur "primarily in those patients treated for longer than the maximum recommended duration of 28 days" and that optic neuropathy can progress "to loss of vision". Several label warnings are missing from the body list.

**Sources:** US FDA label §5.2–5.11, §6.2 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.4, §4.8 - https://www.medicines.org.uk/emc/product/1688/smpc

### A16 · Monitor (missing)

**Was:** CBC

**Now:** CBC, neuro, electrolyte

**Why:** Neuro, US §5.2 quote: "Visual function should be monitored in all patients taking ZYVOX for extended periods (≥ 3 months) and in all patients reporting new visual symptoms". Electrolyte, US §5.11 quote: "Monitor serum sodium levels regularly in the elderly, in patients taking diuretics, and in other patients at risk of hyponatremia and/or SIADH". UK SmPC 4.4 says the same. Both options exist in the schema.

**Sources:** US FDA label §5.2, §5.11 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.4 - https://www.medicines.org.uk/emc/product/1688/smpc

### A17 · Page body (missing)

**Was:** Monitor section: CBC weekly (>2 wk, myelosuppression, renal/hepatic impairment, myelosuppressive drugs); visual; neuro; lactate; glucose; serotonin syndrome

**Now:** CBC weekly in all patients (US 5.1; SmPC 4.4 'regardless of baseline'), especially >2 wk, pre-existing myelosuppression, severe renal or moderate–severe hepatic impairment, myelosuppressive co-medication, chronic infection with prior/concomitant antibacterials. Visual function if therapy ≥3 months (US) / >28 d (SmPC) or any new visual symptom. Add: Serum sodium regularly in elderly/diuretics/at-risk (US 5.11). Blood pressure with sympathomimetics, vasopressors, dopaminergic agents, uncontrolled HTN, pheochromocytoma, thyrotoxicosis (US 5.6). Lactate/bicarbonate if recurrent N/V or unexplained acidosis (US 5.7).

**Why:** The body leaves out sodium and blood-pressure monitoring, which the label calls for (§5.6 quote: "monitor blood pressure"; §5.11 covers sodium). Its CBC criteria are less specific than the label: the label says "severe renal impairment or moderate to severe hepatic impairment".

**Sources:** US FDA label §5.1, §5.2, §5.6, §5.7, §5.11 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.4 - https://www.medicines.org.uk/emc/product/1688/smpc

### A18 · Drug Interactions (minor)

**Was:** MAOIs (contraindicated), SSRIs/SNRIs, sympathomimetics

**Now:** MAOIs incl. within 2 wk (contraindicated)；serotonergic agents (SSRIs/SNRIs, TCAs, triptans, buspirone, opioids incl. meperidine) → serotonin syndrome；adrenergic agents (pseudoephedrine, epinephrine/norepinephrine, dopamine/dobutamine) → ↑BP, titrate；tyramine-rich food (>100 mg)；rifampin/strong inducers ↓linezolid AUC ~32%. UK SmPC: serotonergic/adrenergic co-use contraindicated unless close monitoring

**Why:** US §4.2: MAOIs are contraindicated, including "within two weeks of taking an MAOI". §5.3 lists the serotonergic agents: "serotonin reuptake inhibitors, serotonin-norepinephrine reuptake inhibitors, tricyclic antidepressants, buspirone, ... triptans, and opioids, including meperidine". §5.6/§12.3 cover vasopressor/dopaminergic agents and tyramine above 100 mg. §12.3 quote for rifampin: "32% decrease in linezolid AUC0–12". UK SmPC 4.3 makes these co-medications contraindicated unless close observation and BP monitoring are available.

**Sources:** US FDA label §4.2, §5.3, §5.6, §7, §12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.3, §4.5 - https://www.medicines.org.uk/emc/product/1688/smpc

### A19 · Page body (minor)

**Was:** Drug Interactions: "Meperidine, tramadol, fentanyl"; "Tyramine-containing foods ... Avoid large amounts (>100 mg tyramine/day)"; no rifampin entry; MAOI examples phenelzine, isocarboxazid, tranylcypromine

**Now:** Opioids incl. meperidine (US 5.3); keep tramadol/fentanyl as class examples, flagged "not named in label". Tyramine: "significant pressor response with tyramine doses >100 mg" (not per day). Add "Rifampin (and possibly other strong inducers e.g. carbamazepine, phenytoin, phenobarbital): ↓linezolid Cmax 21%, AUC 32%; clinical significance unknown (US 12.3)." Add MAOI examples selegiline, moclobemide (SmPC 4.3). Add SmPC note: co-use with SSRIs/TCAs/triptans/sympathomimetics/vasopressors/dopaminergics/pethidine/buspirone contraindicated unless close BP/serotonin-syndrome monitoring available.

**Why:** US §12.3 quote: "tyramine doses of more than 100 mg", which is a per-dose figure, not per day. The rifampin interaction is in the label but missing from the page. Tramadol and fentanyl are not named in any label source.

**Sources:** US FDA label §5.3, §12.3 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.3, §4.5 - https://www.medicines.org.uk/emc/product/1688/smpc

### A20 · Pregnancy (minor)

**Was:** Use only if benefits outweigh risks

**Now:** US (PLLR): published/postmarketing human data have not identified a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes; animals: no malformations, embryo-fetal lethality in mice at 6.5× exposure, ↓pup survival in rats. UK SmPC: avoid unless clearly necessary (benefit > theoretical risk).

**Why:** The current text matches only UK SmPC 4.6 ("should not be used during pregnancy unless clearly necessary"). It leaves out the US/Taiwan narrative risk summary (US §8.1; Taiwan insert 懷孕 section), which applies to the stocked product.

**Sources:** US FDA label §8.1 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan insert 懷孕 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F; UK SmPC §4.6 - https://www.medicines.org.uk/emc/product/1688/smpc

### A21 · Page body (unsupported)

**Was:** Pregnancy: "AU TGA pregnancy category B3; US FDA pregnancy category not assigned (PLLR format)." Summary table: "Use only if benefits outweigh risks; AU TGA B3"

**Now:** Body: "US FDA: letter categories retired (PLLR); narrative risk summary—no drug-associated risk identified in human case data; animal embryo-fetal toxicity at maternally toxic doses, no malformations (US 8.1). UK SmPC 4.6: use only if clearly necessary. [AU TGA B3: flag—needs TGA PI citation.]" Summary table: same flag on "AU TGA B3".

**Why:** The TGA category is outside the agreed source hierarchy, cannot be verified from the sources, and has no citation. The animal and human statements in the body are otherwise consistent with US §8.1.

**Sources:** US FDA label §8.1 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.6 - https://www.medicines.org.uk/emc/product/1688/smpc

### A22 · Breastfeeding (minor)

**Was:** Compatible with monitoring

**Now:** Compatible with monitoring (LactMed; US/TW label: present in milk, infant gets ~6–9% of infant dose; monitor infant for diarrhea/vomiting). UK SmPC: discontinue breastfeeding (animal data).

**Why:** LactMed quote: "it is not a reason to discontinue breastfeeding. Monitor the infant for ... diarrhea and vomiting." US §8.2 quote: "Linezolid is present in breast milk ... approximately 6% to 9%". The Taiwan insert 哺乳 section says the same. UK SmPC 4.6 and 4.3 disagree: "breast-feeding should be discontinued prior to and throughout administration". That disagreement should be shown, both in the column and in the body Breastfeeding section.

**Sources:** LactMed Linezolid NBK501700 (rev 2024-07-15) - https://www.ncbi.nlm.nih.gov/books/NBK501700/; US FDA label §8.2 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.3, §4.6 - https://www.medicines.org.uk/emc/product/1688/smpc

### A23 · Notes (error)

**Was:** Good tissue penetration: lung, skin, bone, muscle, fat, CSF, alveolar cells

**Now:** Lung ELF:plasma ≈4.5:1 (alveolar cells only 0.15:1) (SmPC 5.2)；CSF:plasma ≈0.7 in VP-shunt pts with non-inflamed meninges (SmPC 5.2), but pediatric CSF levels variable—empiric CNS use not recommended (US 8.4)；Vd ≈ total body water (40–50 L)；bone/muscle/fat: no label data

**Why:** UK SmPC 5.2 contradicts "alveolar cells" as a site of good penetration. Quote: "The ratio for epithelial lining fluid and alveolar cells of the lung was 4.5:1.0 and 0.15:1.0". The CSF claim needs the US §8.4 caveat. The labels have no data on bone, muscle or fat. The same text appears in the body Notes and should be fixed there too.

**Sources:** UK SmPC §5.2 Distribution - https://www.medicines.org.uk/emc/product/1688/smpc; US FDA label §8.4, §12.3 Distribution - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd

### A24 · Notes (unsupported)

**Was:** Consider as vancomycin alternative for MRSA pneumonia (may have better lung penetration)

**Now:** MRSA HAP/VAP: vancomycin or linezolid recommended (IDSA/ATS 2016, PMID 27418577; IDSA MRSA 2011, PMID 21208910); linezolid ELF:plasma ≈4.5:1 (SmPC 5.2)

**Why:** No source is cited. Both guidelines (PMIDs verified via esummary) recommend vancomycin or linezolid for MRSA pneumonia. The label does not support superior lung penetration over vancomycin. Only the linezolid ELF ratio is documented (SmPC 5.2). The same text appears in the body Notes.

**Sources:** Kalil AC et al. IDSA/ATS HAP/VAP guideline, Clin Infect Dis 2016, PMID 27418577 - https://pubmed.ncbi.nlm.nih.gov/27418577/; Liu C et al. IDSA MRSA guideline, Clin Infect Dis 2011, PMID 21208910 - https://pubmed.ncbi.nlm.nih.gov/21208910/; UK SmPC §5.2 - https://www.medicines.org.uk/emc/product/1688/smpc

### A25 · Page body (unsupported)

**Was:** Notes: "Bacteriostatic against staphylococci/enterococci (consider for non-endovascular infections)"; "Risk factors for thrombocytopenia: elevated trough concentrations (>8 mg/L), renal impairment, low body weight, severe liver dysfunction"

**Now:** "Bacteriostatic vs staphylococci/enterococci, bactericidal vs most streptococci (US 12.4)" — flag "(consider for non-endovascular infections)" as unsourced. "Thrombocytopenia risk: duration >2 wk (US 5.1/6.1); severe renal impairment ± dialysis and moderate–severe hepatic impairment (US 5.1); elderly (SmPC 4.4); higher trough—50% risk at Cmin ~6.3–6.5 mg/L (Pea 2012, PMID 22553142, target 2–7; Dong 2014, PMID 24515096); Crass 2019 target 2–8 mg/L (PMID 31109977); low body weight (Dong 2014, PMID 24515096)."

**Why:** The labels support duration, severe renal and moderate–severe hepatic impairment, and age (SmPC 4.4: "Elderly patients ... greater risk of ... blood dyscrasias"). The >8 mg/L trough threshold is roughly supported by the verified TDM studies. Neither the endovascular advice nor low body weight is supported by any source.

**Sources:** US FDA label §5.1, §6.1, §12.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.4 - https://www.medicines.org.uk/emc/product/1688/smpc; Pea F et al. J Antimicrob Chemother 2012;67:2034-42, PMID 22553142 - https://pubmed.ncbi.nlm.nih.gov/22553142/; Crass RL et al. AAC 2019, PMID 31109977 - https://pubmed.ncbi.nlm.nih.gov/31109977/

### A26 · Page body (missing)

**Was:** No contraindications section; Notes lists formulations "600 mg tablets, 100 mg/5 mL oral suspension, 2 mg/mL IV solution (600 mg/300 mL)"

**Now:** Add to Notes (bilingual): "Contraindications 禁忌: hypersensitivity to linezolid/excipients; current MAOI use or within 2 weeks (US 4; TW 4). UK SmPC 4.3 also: unless close observation and BP monitoring are available—uncontrolled HTN, phaeochromocytoma, carcinoid, thyrotoxicosis, bipolar depression, schizoaffective disorder, acute confusional states, or serotonergic/adrenergic co-medication (SSRIs, TCAs, triptans, sympathomimetics, vasopressors, dopaminergics, pethidine, buspirone); breast-feeding." Keep existing formulations line; add "Oral suspension: 20 mg phenylalanine per 5 mL (PKU) (US 5.12)". Taiwan products: 采福適注射劑 600 mg/300 mL (衛署藥輸字第023186號), 采福適膜衣錠 600 mg (衛署藥輸字第023181號).

**Why:** The page never states the label contraindications in one place, and hypersensitivity is not mentioned anywhere. Taiwan insert §4 quote: "對 linezolid 或產品中其他成分過敏者禁用 ... 已停用任何此類藥物但未超過兩週的病人". The phenylalanine content is from US §5.12.

**Sources:** US FDA label §4, §5.12 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan insert §4 禁忌 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F; Taiwan insert 采福適膜衣錠 - https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F; UK SmPC §4.3 - https://www.medicines.org.uk/emc/product/1688/smpc

### A27 · Mechanism (minor)

**Was:** Binds 23S rRNA of 50S ribosomal subunit → inhibits 70S initiation complex formation; also weak reversible MAO inhibitor

**Now:** Binds 23S rRNA of 50S ribosomal subunit → prevents functional 70S initiation complex; bacteriostatic (staph/enterococci), bactericidal (most streptococci); also weak, reversible, nonselective MAO inhibitor

**Why:** US §7.1/§12.4 quote: "reversible, nonselective inhibitor of monoamine oxidase". The label does not use the word "weak". The SmPC says only that it has no antidepressant effect at antibacterial doses. The kill-pattern detail is from US §12.4.

**Sources:** US FDA label §7.1, §12.4 - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC §4.4, §5.1 - https://www.medicines.org.uk/emc/product/1688/smpc

### B1 · Page body (error)

**Was:** Last line of the page body: "Would you like me to update this directly in your Notion database, or would you prefer to copy this content manually?"

**Now:** REMOVE

**Why:** This is text pasted from an AI chat, not drug information. The ground rules say to remove pasted AI-chat text.

**Sources:** Ground rule: remove pasted AI-chat text (owner instruction)

### B2 · Page body (error)

**Was:** Adult Dose > Duration varies by indication: "Uncomplicated SSTI: 10-14 days" listed under "Standard: 600 mg IV/PO q12h"

**Now:** Uncomplicated SSTI: adults 400 mg PO q12h; adolescents (12-17 y) 600 mg PO q12h; 10-14 days (oral only)

**Why:** The US label dosing table gives adults with uSSSI 400 mg orally every 12 hours, not 600 mg. The Taiwan insert for the hospital's product says the same (成人：400mg 口服，每 12 小時一次；青少年：600mg). As written, the body implies 600 mg q12h for every indication.

**Sources:** US FDA label (DailyMed) §2.1 Table 1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan 仿單 ZYVOX TABLETS 衛署藥輸字第023181號 §3.1 表一, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F

### B3 · Adult dose (missing)

**Was:** 600 mg IV/PO q12h (10-28 days)

**Now:** 600 mg IV/PO q12h (IV→PO no dose change); NP/CAP/cSSTI 10–14 d; VRE faecium (incl. concurrent bacteremia) 14–28 d; uSSSI: 400 mg PO q12h (adults), 600 mg PO q12h (adolescents) ×10–14 d. IV infuse over 30–120 min. Safety >28 d not studied

**Why:** The column hides two things. Durations differ by indication: 10–14 days for most, 14–28 days only for VRE faecium. The adult uSSSI dose is 400 mg. The Taiwan insert also says adults with MRSA infection should receive 600 mg q12h. The infusion time (30–120 min) is a label instruction, not storage information.

**Sources:** US FDA label §1.6, §2.1, §2.2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.2 (max duration 28 days), https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan 仿單 ZYVOX INJECTION 衛署藥輸字第023186號 §3 (輸注時間 30 至 120 分鐘), https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023186%E8%99%9F

### B4 · Renal dose, HD, CRRT (missing)

**Was:** No adjustment required; give after HD (30% removed); caution: ↑ thrombocytopenia risk in severe renal impairment

**Now:** No adjustment (Taiwan 仿單 / US label); 2 inactive metabolites accumulate as CrCl falls → weigh risk. HD: ~30% removed by 3-h session → give after HD. PD: no data. ↑ thrombocytopenia in severe renal impairment (± dialysis) → CBC weekly. (UK SmPC: CrCl <30 metabolites up to 10-fold → use with special caution; no experience with CAPD/other RRT.) CRRT: no label data; 600 mg q12h usually adequate in anuric pts (MIC ≤2); TDM advised (high variability, residual renal function, MIC >2)

**Why:** Everything already in the column is correct. It leaves out four things: metabolite accumulation, the absence of peritoneal dialysis data, the UK SmPC's stronger caution for severe renal impairment, and any CRRT guidance. The column title promises CRRT, and the page body already discusses it. The Taiwan insert for the hospital's product matches the US label word for word, so it is the primary source; the UK values are given alongside, per the ground rules. The CRRT text comes from a pooled population-PK study and a systematic review, both checked with esummary.

**Sources:** Taiwan 仿單 ZYVOX TABLETS §11 腎功能不全 (and §5.1.1), https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F; US FDA label §12.3 Renal Impairment, §5.1, §10, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.2 Renal impairment, 5.2, https://www.medicines.org.uk/emc/product/1688/smpc; Liu Q et al. Int J Antimicrob Agents 2023;62:106949, PMID 37574029, https://pubmed.ncbi.nlm.nih.gov/37574029/; Liu Y et al. Curr Drug Metab 2023;24:70-77 (systematic review, CRRT), PMID 36579392, https://pubmed.ncbi.nlm.nih.gov/36579392/

### B5 · Page body (unsupported)

**Was:** Renal > CRRT: "Dose adjustments to 600 mg q8h should be considered if MIC ≥2 mcg/mL at high (>3 L/hr CRRT) in deep-seated infections." And Clinical Pearl: "In clinically stable patients with CrCl <30 mL/minute and anticipated treatment course >10 days, some experts suggest reducing dose to 300 mg IV/PO twice daily after 72 hours"

**Now:** CRRT: No label data (US 12.3; SmPC 4.2: no experience with RRT other than HD). Standard 600 mg q12h achieves targets in anuric RRT patients when MIC ≤2 mg/L (Liu Q 2023, PMID 37574029). Exposure on CRRT is highly variable, so TDM is recommended, especially with preserved residual renal function, high body weight or MIC >2. Shortening the interval or continuous infusion has been proposed (Liu Y 2023, PMID 36579392). ESICM/IATDMCT recommends routine linezolid TDM in ICU (PMID 32383061). Keep the existing line "600 mg q8h if MIC ≥2 at >3 L/h CRRT in deep-seated infections" but mark it [unsourced threshold—needs citation]. Clinical Pearl: keep it, marked [off-label; the specific '300 mg BID after 72 h' regimen is unsourced], and add: renal impairment ↑thrombocytopenia (42.9% vs 16.8%; aHR 2.37); PK modelling supports dose reduction plus trough-guided TDM (target 2–8 mg/L) when eGFR <60 (Crass 2019, PMID 31109977). Any reduction from 600 mg q12h is off-label and should be TDM-guided.

**Why:** No label supports the q8h-for-high-flow-CRRT rule or the '300 mg BID after 72 h' rule; both read like a tertiary database. The labels give only 600 mg q12h. The verified studies support TDM-guided individualisation but not those exact thresholds. Neither statement contradicts a source, so this is flagged and rewritten with citations rather than deleted.

**Sources:** Crass RL et al. Antimicrob Agents Chemother 2019;63:e00605-19, PMID 31109977, https://pubmed.ncbi.nlm.nih.gov/31109977/; Abdul-Aziz MH et al. Intensive Care Med 2020;46:1127-53, PMID 32383061, https://pubmed.ncbi.nlm.nih.gov/32383061/; Liu Q et al. 2023, PMID 37574029, https://pubmed.ncbi.nlm.nih.gov/37574029/; Liu Y et al. 2023, PMID 36579392, https://pubmed.ncbi.nlm.nih.gov/36579392/

### B6 · Hepatic dose (minor)

**Was:** No adjustment for mild-moderate (Child-Pugh A/B); use with caution in severe impairment

**Now:** No adjustment for Child-Pugh A/B; Child-Pugh C not studied. Thrombocytopenia more frequent in moderate–severe hepatic impairment → CBC weekly. (UK SmPC: no adjustment, but use only if benefit outweighs theoretical risk)

**Why:** The current text is correct. It does not say why caution is needed: thrombocytopenia is more frequent in moderate–severe hepatic impairment, and PK in Child-Pugh C is unstudied.

**Sources:** US FDA label §12.3 Hepatic Impairment, §5.1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.2, 4.4, 5.2, https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan 仿單 §5.1.1, §11 肝功能不全, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F

### B7 · Pediatric dose (missing)

**Was:** \<12 years: 10 mg/kg IV/PO q8h; ≥12 years: 600 mg q12h

**Now:** Birth–11 y: 10 mg/kg IV/PO q8h (preterm <34 wk GA and <7 days old: start 10 mg/kg q12h, → q8h if poor response; all neonates q8h by day 7). uSSSI: <5 y 10 mg/kg PO q8h; 5–11 y 10 mg/kg PO q12h. ≥12 y: 600 mg q12h. Not recommended for empiric pediatric CNS infection. (UK SmPC: <18 y safety/efficacy not established)

**Why:** The column leaves out the preterm-neonate starting regimen and the q12h uSSSI regimen for ages 5–11, both in the US and Taiwan labels. It also leaves out the label's warning against empiric use in pediatric CNS infection and the UK position that use under 18 is not established.

**Sources:** US FDA label §2.1 Table 1, §8.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan 仿單 §3.1 表一 (†新生兒), §6.4, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F; UK SmPC 4.2 Paediatric population, 5.2, https://www.medicines.org.uk/emc/product/1688/smpc

### B8 · Indications (unsupported)

**Was:** Bacteremia, SSTI, Pneumonia, Meningitis

**Now:** Keep: Bacteremia, SSTI, Pneumonia, Meningitis; add HAP, CAP, cSSTI. In the body, mark Meningitis as off-label (IDSA MRSA 2011, PMID 21208910: alternative agent for MRSA CNS infection) and add the label caution: empiric use for pediatric CNS infections not recommended (US 8.4; SmPC 5.2). Bacteremia = concurrent bacteremia only; not for catheter-related BSI (US 5.4).

**Why:** Neither the FDA label nor the UK SmPC lists meningitis or any CNS infection. Both state that linezolid is not recommended for empiric treatment of pediatric CNS infections, because CSF levels in VP-shunt patients were variable and often subtherapeutic. Meningitis use is guideline-only: the IDSA MRSA 2011 guideline lists linezolid as an alternative agent for MRSA meningitis. Note that other rows (vancomycin, daptomycin) also carry Meningitis. If the owner wants guideline-backed off-label uses as tags, keep it and mark it off-label in the body. 'Bacteremia' is acceptable as concurrent bacteremia (label §1.2, §1.5), but the label says not to use linezolid for catheter-related bloodstream infections (§5.4).

**Sources:** US FDA label §1, §5.4, §8.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.1, 5.2 (paediatric CNS), https://www.medicines.org.uk/emc/product/1688/smpc; Liu C et al. IDSA MRSA guideline, Clin Infect Dis 2011;52:e18-55, PMID 21208910, https://pubmed.ncbi.nlm.nih.gov/21208910/

### B9 · Page body (minor)

**Was:** Indications > FDA-Approved list; Off-Label Uses: "Bone and joint infections, brain abscess, febrile neutropenia, infectious arthritis, meningitis, orthopedic device-related infection, osteomyelitis, sepsis, subdural empyema, ventriculitis, anthrax, and multidrug-resistant tuberculosis"

**Now:** cSSTI line: add "including diabetic foot infections without concomitant osteomyelitis; not studied in decubitus ulcers". Add a Limitations line: "Not for Gram-negative infections; not approved for catheter-related bloodstream/catheter-site infections (mortality imbalance); UK SmPC: adults only, cSSTI only when microbiologically confirmed Gram-positive, start in hospital after ID/microbiology consultation". Off-label: keep items with guideline support (e.g., MRSA meningitis/brain abscess/osteomyelitis as alternatives per IDSA MRSA 2011); flag febrile neutropenia and sepsis as unsourced.

**Why:** The approved-indication wording leaves out the diabetic-foot scope and the label's limitations of use. The off-label list has no citation; several items are plausible, but 'febrile neutropenia' and 'sepsis' have no source here.

**Sources:** US FDA label §1.3, §1.6, §5.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.1, https://www.medicines.org.uk/emc/product/1688/smpc; Liu C et al. IDSA MRSA 2011, PMID 21208910, https://pubmed.ncbi.nlm.nih.gov/21208910/

### B10 · Coverage (missing)

**Was:** MRSA, MRSE, VRE, MSSA, Finegoldia

**Now:** MRSA, MRSE, VRE, MSSA, Finegoldia, Streptococcus, Enterococcus, E. faecalis

**Why:** Streptococci (S. pneumoniae, S. pyogenes, S. agalactiae) are named pathogens in the approved indications, and the SmPC lists E. faecalis, E. faecium and streptococci groups C/G as susceptible. The US label also lists E. faecalis, including vancomycin-resistant isolates, as susceptible in vitro. All three tags already exist in the schema, and the owner uses Streptococcus and Enterococcus on the vancomycin, daptomycin and teicoplanin rows. Finegoldia is plausible: the SmPC lists Peptostreptococcus species as susceptible, and Finegoldia magna was formerly Peptostreptococcus magnus.

**Sources:** US FDA label §1, §12.4 Microbiology, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 5.1 Susceptibility table, https://www.medicines.org.uk/emc/product/1688/smpc

### B11 · Page body (unsupported)

**Was:** Coverage list includes "Listeria monocytogenes", "Nocardia species", "Some mycobacteria (including M. tuberculosis)", "Streptococcus pneumoniae (including penicillin-resistant strains)" and "No activity against gram-negative bacteria due to intrinsic efflux mechanisms"

**Now:** Keep Listeria/Nocardia/mycobacteria, labelled "in vitro/off-label; not in US/UK/Taiwan labels". Add label-listed in-vitro organisms: E. faecalis (incl. VRE), CoNS/S. haemolyticus, viridans streptococci, groups C/G streptococci, Clostridium perfringens, Peptostreptococcus spp. (US 12.4; SmPC 5.1). S. pneumoniae: TW 仿單 indication limited to penicillin-susceptible strains; SmPC 5.1: penicillin-resistant streptococci in vitro. Gram-negative note: "No clinically useful Gram-negative activity (US 1.6): H. influenzae, M. catarrhalis, Neisseria, Enterobacterales, Pseudomonas resistant (SmPC 5.1); in vitro only: Pasteurella multocida (US 12.4)". Keep the efflux explanation marked [unsourced].

**Why:** None of the three labels lists Listeria, Nocardia or mycobacteria; these are plausible, so they are flagged, not removed. The efflux explanation is not in any label. The Taiwan insert for the hospital's product restricts the S. pneumoniae indications to penicillin-susceptible strains, while the SmPC says activity against penicillin-resistant streptococci is in vitro only.

**Sources:** US FDA label §12.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 5.1, https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan 仿單 §2 適應症, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F

### B12 · Side Effects (missing)

**Was:** anemia, neuropathy, thrombocytopenia

**Now:** anemia, neuropathy, thrombocytopenia, leukopenia, GI, dysglycemia, rhabdomyolysis, CNS, SJS/TEN

**Why:** The label's most common adverse reactions (>5%) are diarrhea, vomiting, headache, nausea and anemia, so GI belongs. Myelosuppression includes leukopenia and pancytopenia. Hypoglycemia (5.10), convulsions (5.8, CNS), rhabdomyolysis (5.9) and SJS/TEN (6.2 postmarketing) are labeled warnings or reactions. All of these tags exist in the schema. Lactic acidosis, serotonin syndrome and hyponatremia have no matching option, so they stay in the page body.

**Sources:** US FDA label §5.1, 5.8, 5.9, 5.10, §6, §6.2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.8, https://www.medicines.org.uk/emc/product/1688/smpc

### B13 · Page body (unsupported)

**Was:** Side Effects: "Peripheral neuropathy (usually seen after several months, median 5 months; often irreversible)"; "Optic neuropathy (median 5 months; generally reversible with discontinuation)"; "Lactic acidosis (median onset 6 weeks)"; "Serotonin syndrome (median onset 4 days when combined with serotonergic agents)"

**Now:** Peripheral and optic neuropathy: reported mainly with therapy >28 days; optic neuropathy can progress to vision loss; blurred vision reported <28 days (US 5.2). Lactic acidosis: recurrent nausea/vomiting, unexplained acidosis or low bicarbonate → evaluate immediately (US 5.7). Serotonin syndrome with serotonergic agents (US 5.3). Add: convulsions (5.8), rhabdomyolysis (5.9), hyponatremia/SIADH (5.11), SJS/TEN, anaphylaxis, angioedema, sideroblastic anemia, superficial tooth/tongue discoloration (6.2). Keep the median-onset and reversibility figures but mark them [unsourced—needs citation]. Fix typo → "*C. difficile*-associated diarrhea".

**Why:** The median-onset figures and the reversibility statements are not in any label and have no citation. The labels describe timing only as 'primarily in patients treated longer than 28 days'. Several labeled warnings are missing from this list.

**Sources:** US FDA label §5.2, 5.3, 5.7, 5.8, 5.9, 5.11, §6.2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.4 (Mitochondrial dysfunction; Peripheral and optic neuropathy), 4.8, https://www.medicines.org.uk/emc/product/1688/smpc

### B14 · Monitor (missing)

**Was:** CBC

**Now:** CBC, neuro, electrolyte

**Why:** The label recommends checking visual function in all patients treated ≥3 months or with new visual symptoms, and watching for neuropathy (neuro). It also recommends regular serum sodium checks in patients at risk of hyponatremia or SIADH (electrolyte). Both options exist in the schema.

**Sources:** US FDA label §5.2, §5.11, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.4 (Hyponatraemia and SIADH; Peripheral and optic neuropathy), https://www.medicines.org.uk/emc/product/1688/smpc

### B15 · Page body (missing)

**Was:** Monitor section lists CBC weekly, visual function, neurological symptoms, lactate, blood glucose, serotonin syndrome

**Now:** Add: "Blood pressure: with sympathomimetics/vasopressors/dopaminergic agents, or in uncontrolled hypertension, pheochromocytoma, thyrotoxicosis"; "Serum sodium: regularly in elderly, patients on diuretics and others at risk of hyponatremia/SIADH"; "Visual function: all patients on therapy ≥3 months"; "CK if muscle pain/weakness/dark urine (rhabdomyolysis)"; optional "Trough TDM (target ~2–8 mg/L) in ICU, renal impairment, prolonged courses".

**Why:** The labels require blood-pressure monitoring (5.6) and sodium monitoring (5.11) and set the ≥3-month threshold for visual monitoring; none of these is in the body. The TDM target comes from Crass 2019, and the ESICM/IATDMCT position paper recommends routine linezolid TDM in critically ill patients.

**Sources:** US FDA label §5.2, 5.6, 5.9, 5.11, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Abdul-Aziz MH et al. 2020, PMID 32383061, https://pubmed.ncbi.nlm.nih.gov/32383061/; Crass RL et al. 2019, PMID 31109977, https://pubmed.ncbi.nlm.nih.gov/31109977/

### B16 · Drug Interactions (missing)

**Was:** MAOIs (contraindicated), SSRIs/SNRIs, sympathomimetics

**Now:** MAOIs incl. within 2 wk (contraindicated); serotonergic agents (SSRIs/SNRIs, TCAs, triptans, buspirone, opioids incl. meperidine) → serotonin syndrome; sympathomimetics (pseudoephedrine), vasopressors (epinephrine, norepinephrine), dopaminergics (dopamine, dobutamine) → ↑BP, start low and titrate; tyramine-rich foods (>100 mg tyramine) → avoid large amounts; rifampin/strong inducers ↓ linezolid AUC ~32%

**Why:** The column leaves out the vasopressor and dopaminergic interaction (start with lower doses), tyramine, the full list of serotonergic agents, and rifampin, which lowers linezolid exposure (Cmax down 21%, AUC down 32%). The UK SmPC 4.3 goes further: it contraindicates these co-medications unless the patient can be closely observed and blood pressure monitored.

**Sources:** US FDA label §4.2, §5.3, §5.6, §7, §12.3 (Rifampin, Tyramine, Adrenergic Agents), https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.3, 4.5, https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan 仿單 §4.2, §5.1.3, §11 藥物交互作用, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F

### B17 · Page body (minor)

**Was:** Drug Interactions section: no rifampin entry; "Meperidine, tramadol, fentanyl: Increased serotonin syndrome risk"; MAOI examples phenelzine, isocarboxazid, tranylcypromine

**Now:** Add under Pharmacokinetic Notes: "Rifampin ↓ linezolid Cmax 21% / AUC 32% (clinical significance unknown); other strong inducers (carbamazepine, phenytoin, phenobarbital) may lower exposure similarly or less". Opioids line: "Opioids incl. meperidine (label); tramadol/fentanyl by class". MAOIs: add selegiline, moclobemide (UK SmPC). Taiwan 仿單 add-on: if urgent linezolid is needed in a patient on a serotonergic antidepressant, stop the antidepressant and monitor 2 weeks (5 weeks for fluoxetine) or until 24 h after the last linezolid dose.

**Why:** The rifampin interaction is in the US, UK and Taiwan labels but missing here. Tramadol and fentanyl are not named in the labels; the labels say 'opioids, including meperidine'. The Taiwan insert for the hospital's product carries practical washout and monitoring guidance that is not in the current US text.

**Sources:** US FDA label §5.3, §12.3, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.3, 4.5, https://www.medicines.org.uk/emc/product/1688/smpc; Taiwan 仿單 §5.1.3 血清素症候群, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F

### B18 · Pregnancy (minor)

**Was:** Use only if benefits outweigh risks

**Now:** US (PLLR, 8.1): published/postmarketing human data have not identified a drug-associated risk of major birth defects, miscarriage or adverse maternal/fetal outcomes. Animals: no malformations; embryo-fetal lethality in mice at 6.5× human exposure; fetal toxicity and ↓ pup survival in rats at ≈ human exposure. UK SmPC 4.6: do not use unless clearly necessary (benefit > theoretical risk).

**Why:** The current text matches the UK SmPC but not the US/Taiwan PLLR narrative, which is more reassuring. Giving both is closer to the labels and follows the owner's bilingual-label style, as on the teicoplanin and tigecycline rows.

**Sources:** US FDA label §8.1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Taiwan 仿單 §6.1, https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023181%E8%99%9F; UK SmPC 4.6, https://www.medicines.org.uk/emc/product/1688/smpc

### B19 · Page body (unsupported)

**Was:** Pregnancy: "AU TGA pregnancy category B3; US FDA pregnancy category not assigned (PLLR format)"; summary table "Use only if benefits outweigh risks; AU TGA B3"

**Now:** US FDA: letter categories retired (PLLR); available human data have not identified a drug-associated risk of major birth defects or miscarriage. Animals: no malformations; embryo-fetal lethality in mice at 6.5× human exposure, fetal toxicity/↓ pup survival in rats at ≈ human exposure (US 8.1). UK SmPC 4.6: should not be used unless clearly necessary. (AU TGA B3: keep only if a TGA PI citation is added; flag as unsourced.)

**Why:** The TGA category is outside the agreed source hierarchy (US, UK and Taiwan labels; LactMed; guidelines), and nothing in the brief verifies it. It is plausible, so it is flagged rather than removed. The rest of the paragraph matches the labels.

**Sources:** US FDA label §8.1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.6, https://www.medicines.org.uk/emc/product/1688/smpc

### B20 · Breastfeeding (missing)

**Was:** Compatible with monitoring

**Now:** Present in milk; infant dose ~6–9% of the therapeutic infant dose; not a reason to stop breastfeeding — monitor infant for diarrhea/vomiting (LactMed 2024; US label 8.2). UK SmPC: discontinue breast-feeding before and during therapy (animal data)

**Why:** 'Compatible with monitoring' agrees with LactMed and US label 8.2. It hides that the UK SmPC (4.3 and 4.6) explicitly says to stop breastfeeding. The owner already records such disagreements on the teicoplanin and tigecycline rows.

**Sources:** LactMed Linezolid NBK501700 (rev. 2024-07-15), Summary of Use during Lactation, https://www.ncbi.nlm.nih.gov/books/NBK501700/; US FDA label §8.2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.3, 4.6, https://www.medicines.org.uk/emc/product/1688/smpc

### B21 · Notes (error)

**Was:** Good tissue penetration: lung, skin, bone, muscle, fat, CSF, alveolar cells<br>Consider as vancomycin alternative for MRSA pneumonia (may have better lung penetration)

**Now:** Lung ELF ≈4.5× plasma; alveolar cells only 0.15×; saliva 1.2×, sweat 0.55× (SmPC 5.2). CSF ≈0.7× plasma in VP-shunt pts with non-inflamed meninges (SmPC 5.2), but variable/subtherapeutic in pediatric VP-shunt pts (US 8.4). Skin, bone, muscle, fat: no label data [flag].<br>MRSA HAP/VAP: vancomycin or linezolid recommended (IDSA/ATS 2016, PMID 27418577)<br>Not for catheter-related BSI or Gram-negative infection (US 1.6/5.4)

**Why:** 'Alveolar cells' as a site of good penetration contradicts the UK SmPC 5.2: the alveolar-cell:plasma ratio is 0.15:1, while the epithelial lining fluid ratio is 4.5:1. No label quantifies bone, muscle or fat penetration. CSF penetration needs the pediatric VP-shunt caveat. The MRSA pneumonia point is guideline-supported: IDSA/ATS 2016 recommends vancomycin or linezolid for MRSA HAP/VAP. 'Better lung penetration' is consistent with the ELF ratio but is not a guideline claim.

**Sources:** UK SmPC 5.2 Distribution, https://www.medicines.org.uk/emc/product/1688/smpc; US FDA label §8.4, §12.3 Distribution, §5.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Kalil AC et al. IDSA/ATS HAP/VAP guideline, Clin Infect Dis 2016;63:e61-e111, PMID 27418577, https://pubmed.ncbi.nlm.nih.gov/27418577/

### B22 · Page body (minor)

**Was:** Notes: "Good tissue penetration: lung, skin, bone, muscle, fat, CSF, alveolar cells"; "Bacteriostatic against staphylococci/enterococci (consider for non-endovascular infections)"; "Risk factors for thrombocytopenia: elevated trough concentrations (>8 mg/L), renal impairment, low body weight, severe liver dysfunction"

**Now:** Penetration line: as in the edited B21. Bacteriostatic line: "Bacteriostatic vs staphylococci/enterococci, bactericidal vs most streptococci (US 12.4)"; mark "(consider for non-endovascular infections)" as [unsourced]. Thrombocytopenia line: "duration >2 weeks; severe renal impairment (± dialysis); moderate–severe hepatic impairment (US 5.1/6.1); higher trough (target 2–8 mg/L, Crass 2019, PMID 31109977; Cmin ≥6.3 mg/L → >50% probability in ICU, Dong 2014, PMID 24515096); low body weight (Dong 2014)". Add: "Oral suspension: 20 mg phenylalanine per 5 mL (PKU) (US 5.12)".

**Why:** The penetration line has the alveolar-cell error from B21. The 'non-endovascular' advice has no source. The thrombocytopenia risk factors are broadly right but uncited and leave out the label's duration factor. The phenylalanine note is correct (label 5.12) but has no quantity.

**Sources:** US FDA label §5.1, §5.12, §6.1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; Crass RL et al. 2019, PMID 31109977, https://pubmed.ncbi.nlm.nih.gov/31109977/; Dong HY et al. Eur J Clin Microbiol Infect Dis 2014;33:1029-35, PMID 24515096, https://pubmed.ncbi.nlm.nih.gov/24515096/

### B23 · Mechanism (minor)

**Was:** Binds 23S rRNA of 50S ribosomal subunit → inhibits 70S initiation complex formation; also weak reversible MAO inhibitor

**Now:** Binds 23S rRNA of 50S ribosomal subunit → inhibits 70S initiation complex formation; bacteriostatic vs staphylococci/enterococci, bactericidal vs most streptococci; also reversible, nonselective MAO-A/B inhibitor

**Why:** The labels call linezolid a 'reversible, nonselective' MAO inhibitor, not a 'weak' one. 'Weak' could lead readers to underrate the contraindication and the interaction risks. The bacteriostatic/bactericidal profile is labeled and already in the page body.

**Sources:** US FDA label §7.1, §12.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.4 (Monoamine oxidase inhibitors), 5.1, https://www.medicines.org.uk/emc/product/1688/smpc

### B24 · Page body (minor)

**Was:** Pediatric Dose section: no uSSSI regimen; no CNS caution

**Now:** Add: "Uncomplicated SSSI: <5 y 10 mg/kg PO q8h; 5–11 y 10 mg/kg PO q12h; adolescents 600 mg PO q12h" and "Empiric use for pediatric CNS infections not recommended (variable CSF levels in VP-shunt patients). UK SmPC: no posology recommendation <18 y".

**Why:** The body's neonatal, infant and ≥12 y regimens are correct. It leaves out the labeled uSSSI regimens, the CNS limitation and the UK position.

**Sources:** US FDA label §2.1, §8.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e70e63b-bfd5-478d-a8ee-8ba22c9efabd; UK SmPC 4.2, 5.2, https://www.medicines.org.uk/emc/product/1688/smpc

## Verified correct as written

- Category: Oxazolidinone (US label §1; SmPC 5.1)
- Renal column core statements: no dose adjustment; ~30% removed by a 3-h HD session, give after HD; more thrombocytopenia in severe renal impairment (US §12.3, §5.1; Taiwan insert 腎功能不全; SmPC 4.2)
- Body Renal paragraph and Hemodialysis paragraph match US §12.3 and the Taiwan insert word for word in substance
- Hepatic column core: no adjustment in Child-Pugh A/B (US §12.3; SmPC 4.2/5.2). Body: 'Child-Pugh C not evaluated' is correct
- Adult standard dose 600 mg IV/PO q12h; IV↔PO interchangeable, ~100% bioavailability (US §2.1, §12.3; SmPC 4.2/5.2)
- Body Adult Dose durations: VRE 14–28 d; HAP, CAP, cSSTI, uSSTI 10–14 d (US Table 1). Max duration 28 days (SmPC 4.2; US §1.6/§5.2)
- Body neonatal regimen: preterm <7 d (GA <34 wk) 10 mg/kg q12h, moving to q8h by day 7; birth–11 y 10 mg/kg q8h; ≥12 y 600 mg q12h (US §2.1, §8.4, §12.3)
- Body FDA-approved indication list (HAP, CAP, cSSTI, uSSTI, VRE faecium incl. bacteremia) and the pathogens named for each (US §1.1–1.5; Taiwan insert §2)
- Mechanism text in body: 23S rRNA/50S, prevents 70S initiation complex; bacteriostatic vs enterococci/staphylococci, bactericidal vs most streptococci; reversible nonselective MAO-A/B inhibitor (US §12.4, §7.1; SmPC 5.1)
- Coverage tags MRSA, MSSA, VRE (E. faecium clinical), MRSE (S. epidermidis incl. methicillin-resistant, in vitro) (US §12.4; SmPC 5.1)
- Side Effects tags anemia, thrombocytopenia, neuropathy (US §5.1, §5.2); body 'Common >5%: diarrhea, nausea, vomiting, headache, anemia' (US §6)
- Body serious ADRs listed (myelosuppression, peripheral/optic neuropathy, lactic acidosis, serotonin syndrome, hypoglycemia, hyponatremia, CDAD) are all label warnings (US §5.1–5.11)
- Monitor tag CBC and body 'CBC weekly' (US §5.1; SmPC 4.4; Taiwan 5.1.1); body visual, lactate, glucose and serotonin-syndrome monitoring are consistent with US §5.2, §5.3, §5.7, §5.10
- Drug Interactions column: MAOIs contraindicated (US §4.2); SSRIs/SNRIs (US §5.3) and sympathomimetics (US §5.6) are correct as far as they go
- Body: no CYP450 inhibition; warfarin/phenytoin need no dose change (US §12.3); tyramine pressor risk (US §12.3; SmPC 4.5); TCAs, buspirone, triptans, dopamine/dobutamine (US §5.3, §5.6)
- Breastfeeding column 'Compatible with monitoring' and the body Breastfeeding paragraph match LactMed NBK501700 Summary and US §8.2 (6–9% of infant dose; monitor for diarrhea/vomiting)
- Body Pregnancy: 'US FDA pregnancy category not assigned (PLLR)', animal embryo-fetal toxicity without malformations, 'limited human data' are consistent with US §8.1
- Body Notes: phenylalanine in oral suspension (US §5.12); resistance via 23S rRNA mutation or cfr (US §12.4); avoid >28 days (US §1.6, §5.2); formulation strengths (US §3)
- Category: Oxazolidinone (US label §1, §12.4; UK SmPC 5.1)
- Mechanism core: binds 23S rRNA of the 50S subunit and prevents formation of the functional 70S initiation complex (US label §12.4; UK SmPC 5.1). Body: bacteriostatic against enterococci and staphylococci, bactericidal against most streptococci (US §12.4)
- Adult dose 600 mg IV/PO q12h with no dose change IV↔PO; ~100% oral bioavailability (US §2.1, §12.3; UK 4.2, 5.2; Taiwan 仿單 §3.1, §11)
- Body durations: VRE 14–28 d; NP, CAP and cSSTI 10–14 d; 28-day maximum recommended / safety beyond 28 d not established (US §1.6, §2.1, §5.2; UK 4.2)
- Renal column: no adjustment; ~30% removed in a 3-h HD session, so give after HD; thrombocytopenia more frequent in severe renal impairment (US §12.3, §5.1; Taiwan §11, §5.1.1; UK 4.2, 4.4)
- Body renal paragraph (similar parent-drug levels regardless of renal function, metabolite accumulation, HD 30%) matches the US and Taiwan labels
- Hepatic: Child-Pugh A/B PK unchanged, no adjustment; Child-Pugh C not evaluated (US §12.3; UK 5.2; Taiwan §11)
- Pediatric column numbers: 10 mg/kg q8h for birth–11 y and 600 mg q12h for ≥12 y (US §2.1, §12.3)
- Body neonatal regimen: preterm (<34 wk GA) <7 days start 10 mg/kg q12h, all neonates on q8h by day 7 (US §2.1; Taiwan §3.1 footnote)
- Body FDA-approved indication list (NP, CAP, cSSTI, uSSTI, VRE faecium incl. bacteremia) and its pathogens match US §1.1–1.5
- Coverage tags MRSA, MSSA, MRSE and VRE are label-supported (US §1, §12.4; UK 5.1). Finegoldia is plausible via the SmPC's 'Peptostreptococcus species'
- Side-effect tags anemia, thrombocytopenia and neuropathy are label-supported (US §5.1, §5.2, §6)
- Body common AEs >5% (diarrhea, nausea, vomiting, headache, anemia) match the US §6 highlights
- Body serious AEs (myelosuppression, peripheral/optic neuropathy, lactic acidosis, serotonin syndrome, hypoglycemia, hyponatremia, CDAD) are all labeled (US §5)
- Monitor tag CBC; body 'CBC weekly, especially >2 weeks, pre-existing myelosuppression, renal/hepatic impairment, concomitant myelosuppressive drugs' (US §5.1; Taiwan §5.1.1; UK 4.4)
- Body: blood glucose monitoring in diabetics on insulin or oral hypoglycemics (US §5.10); lactate evaluation for recurrent nausea/vomiting or acidosis (US §5.7)
- Drug interactions: MAOI contraindication including within 2 weeks (US §4.2; UK 4.3; Taiwan §4.2); SSRIs/SNRIs/TCAs/buspirone/triptans serotonin risk (US §5.3); sympathomimetics and dopaminergic agents raise BP (US §5.6, §12.3); tyramine >100 mg pressor response (US §12.3); no CYP inhibition, and warfarin/phenytoin need no dose change (US §12.3)
- Breastfeeding body paragraph: present in milk, 6–9% of the infant dose, not a reason to stop, monitor for GI effects (LactMed NBK501700 summary; US §8.2; Taiwan §6.2)
- Body pregnancy narrative: animal embryo-fetal toxicity only at maternally toxic doses, no malformations (US §8.1)
- Body notes: avoid >28 days; oral suspension contains phenylalanine (US §5.12); resistance via 23S rRNA point mutations (G2576T) and plasmid-borne cfr (US §12.4; UK 5.1)
- Formulations: 600 mg tablet, 100 mg/5 mL suspension, 2 mg/mL IV including 600 mg/300 mL (US §3; Taiwan injection insert also lists 100/200/300 mL bags)
- MRSA pneumonia: linezolid is a guideline-recommended alternative to vancomycin (IDSA/ATS HAP/VAP 2016, PMID 27418577, verified with esummary)

## Apply log

- Page body: removed pasted AI-chat line ('Would you like me to update this directly...')
- Adult dose column: merged both fixes (600 mg q12h, IV->PO no change, NP/CAP/cSSTI 10-14 d, VRE faecium incl. concurrent bacteremia 14-28 d, uSSSI 400 mg adults / 600 mg adolescents, IV infuse 30-120 min, max 28 d SmPC / US >28 d not evaluated)
- Pediatric dose column: merged (birth-11 y 10 mg/kg q8h, preterm <34 wk <7 d q12h start, uSSSI by age, >=12 y 600 mg q12h, no empiric CNS use, UK SmPC not established)
- Indications column: added HAP, CAP, cSSTI; kept Bacteremia, SSTI, Pneumonia, Meningitis (Meningitis kept per the later fix and the first fix's conditional; body now marks it off-label with IDSA MRSA 2011 citation and label caution)
- Coverage column: MRSA, MRSE, VRE, MSSA, Finegoldia, Streptococcus, Enterococcus, E. faecalis
- Renal dose, HD, CRRT column: merged (no adjustment TW/US, metabolites/SmPC caution, HD ~30% give after, PD no data, CRRT no label data/TDM, thrombocytopenia weekly CBC)
- Hepatic dose column: merged (A/B no adjustment, C not studied, SmPC benefit>risk, weekly CBC)
- Side Effects column: anemia, neuropathy, thrombocytopenia, leukopenia, GI, dysglycemia, rhabdomyolysis, CNS, SJS/TEN
- Monitor column: CBC, neuro, electrolyte
- Drug Interactions column: merged (MAOIs, serotonergic agents incl. meperidine, adrenergic agents, tyramine >100 mg, rifampin AUC ~32%, SmPC note)
- Pregnancy column: PLLR narrative + animal data + UK SmPC
- Breastfeeding column: compatible with monitoring (LactMed/US label 6-9%), UK SmPC discontinue
- Notes column: penetration data (ELF 4.5x, alveolar 0.15x, saliva/sweat, CSF 0.7x, Vd, no label data flag), MRSA HAP/VAP IDSA/ATS 2016 + IDSA MRSA 2011, not for CR-BSI/Gram-negative
- Mechanism column: 23S rRNA/70S initiation, bacteriostatic/bactericidal, weak reversible nonselective MAO-A/B inhibitor
- Body Indications: cSSTI diabetic foot/decubitus text, VRE concurrent bacteremia, Limitations line (US 5.4 mortality imbalance, US 1.6, SmPC 4.1), off-label split into IDSA-supported vs needs-citation, meningitis off-label caution
- Body Coverage: VRE faecium/faecalis split, S. pneumoniae label differences, in-vitro-only organism list, Listeria/Nocardia/mycobacteria flagged, Gram-negative note rewritten with efflux marked unsourced
- Body Adult Dose: uSSSI 400/600 mg PO line, VRE concurrent bacteremia, IV infusion 30-120 min, max duration SmPC/US
- Body CRRT paragraph rewritten with Liu Q 2023, Villa 2016, Liu Y 2023, Abdul-Aziz 2020; q8h threshold kept and flagged unsourced
- Body Clinical Pearl: marked off-label, 300 mg BID regimen flagged unsourced, Crass 2019 data added
- Body Pediatric: neonate wording, uSSSI by age, max pediatric dose flagged, CNS empiric caution (US 8.4; TW 6.4), UK SmPC <18 y
- Body Side Effects: US 5.2 neuropathy text, median-onset figures flagged unsourced, lactic acidosis/serotonin syndrome label text, hyponatremia/SIADH, convulsions, rhabdomyolysis, SCAR/SJS/TEN, anaphylaxis, angioedema, sideroblastic anemia, tooth/tongue discoloration, CDAD typo fixed
- Body Monitor: CBC weekly in all patients with risk list, visual function >=3 months/>28 d, lactate/bicarbonate, serum sodium, blood pressure, CK, optional trough TDM
- Body Drug Interactions: selegiline/moclobemide, SmPC 4.3 co-use note, opioids incl. meperidine with tramadol/fentanyl flagged, Taiwan serotonergic antidepressant washout note, tyramine >100 mg dose wording, rifampin/inducers line
- Body Pregnancy: PLLR narrative, animal data, UK SmPC 4.6, AU TGA B3 flagged; summary table pregnancy row flagged
- Body Notes: Taiwan products with license numbers, bilingual Contraindications 禁忌 line, tissue penetration line, bacteriostatic line with unsourced flag, thrombocytopenia risk factors with Pea 2012/Dong 2014/Crass 2019, phenylalanine 20 mg/5 mL (US 5.12)
- Appended References section (US FDA label, UK SmPC, Taiwan 仿單 x2, LactMed, IDSA MRSA 2011, IDSA/ATS 2016, Abdul-Aziz 2020, Villa 2016, Liu Y 2023, Liu Q 2023, Crass 2019, Pea 2012, Dong 2014)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
