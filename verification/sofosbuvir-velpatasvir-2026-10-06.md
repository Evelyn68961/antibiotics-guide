# New entry: Epclusa (Sofosbuvir/Velpatasvir)

- **Notion entry:** [Epclusa (Sofosbuvir/Velpatasvir)](https://app.notion.com/3f1c496dfff181cebb6dd0543af4d2cb). Created 2026-10-06.
- **Hospital codes:** EPC01 (Epclusa tab)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/sofosbuvir-velpatasvir.json` (plus any Taiwan insert text files)

## Product and sources

FJUH EPC01: Epclusa 宜譜莎膜衣錠, sofosbuvir/velpatasvir 400 mg/100 mg film-coated tablet, 28 tab/bottle, imprint GSI/7916. This matches the US label's 400/100 mg tablet description (section 3). Confirmed on the hospital P4 page https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=EPC01, which shows no NHI code (self-pay). The hospital stocks only the 400/100 mg tablet; the 200/50 mg tablets and 150/37.5 mg and 200/50 mg oral pellets are not stocked. Labels used: US FDA Epclusa (Gilead) DailyMed setid 7f30631a-ee3b-4cfe-866b-964df3f0a44f v14 (published Feb 06 2025), and UK SmPC Sofosbuvir/Velpatasvir Gilead 400/100 mg (eMC 7294, revised 20/06/2025). Taiwan 仿單 not found. I independently scanned TFDA mcp.fda.gov.tw/im_detail_1 for 衛部藥輸字第025500–028600號 by Chinese and English product name: no 宜譜莎/Epclusa page. Harvoni, Sovaldi and Maviret were not found either; Biktarvy 027570 was found. So the US label governs renal dosing.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Epclusa 400 mg/100 mg tab 1 tab QD, with or without food, × 12 wk — GT1–6, treatment-naïve or -experienced, incl. HCV/HIV-1 coinfection and liver-transplant recipients (no cirrhosis / Child-Pugh A) (TW仿單 4.2 = FDA 2.2–2.3 / UK 4.2)<br>• No cirrhosis or compensated cirrhosis (Child-Pugh A): Epclusa alone 12 wk<br>• Decompensated cirrhosis (Child-Pugh B/C): Epclusa + ribavirin 12 wk; RBV 1,000 mg/day (<75 kg) or 1,200 mg/day (≥75 kg), divided BID with food; reduce for Hb / CrCl per RBV label (TW仿單 4.2 / FDA 2.3). UK: CPT C pre-transplant or CPT B/C post-transplant → start RBV 600 mg/day, titrate to 1,000/1,200 mg if tolerated<br>• UK only: GT3 + compensated cirrhosis → adding RBV may be considered<br>• Prior NS5A-regimen failure, high risk, no alternative: Epclusa + RBV × 24 wk may be considered (TW仿單 / UK 4.2/4.4; US label silent)<br>• Before starting: HBsAg + anti-HBc (boxed warning, see Notes)<br>• Swallow whole, do not chew or crush (bitter). Vomiting <3 h after dose → take another tab. Missed dose: <18 h late → take now; ≥18 h → skip, no double dose (TW仿單 / UK 4.2)

**Why:** New entry; the adult regimen comes straight from the labels. The duration is a fixed 12 weeks, and ribavirin is added only for decompensated cirrhosis.

**Sources:** US FDA label (DailyMed) §2.1–2.3, Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.2 Tables 1–2 — https://www.medicines.org.uk/emc/product/7294/smpc

### A2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> No dose adjustment for any degree of renal impairment, incl. ESRD on dialysis — 400/100 mg QD (TW仿單 4.2/4.4, stocked product = FDA 2.6/8.6) — 任何程度腎功能不全(含透析)皆不需調整<br>UK SmPC: no adjustment for mild–moderate impairment. eGFR <30 or ESRD on HD: safety data limited → use without dose adjustment only when no other relevant treatment option exists (UK 4.2/4.4)<br>HD: GS-331007 (inactive SOF metabolite) AUC ↑451% at eGFR <30 and ↑1280–2070% in ESRD; HD removes it (extraction ratio 53%; a 4-h session removes ~18% of the dose). VEL (>99.5% protein-bound) is not removed. No supplemental dose. Trial 4062: 59 adults with ESRD on dialysis, 12 wk, most common ADR nausea 7% (FDA 6.1/12.3; TW仿單 4.8/4.9)<br>CRRT: no label or published data<br>No safety data for decompensated cirrhosis + severe RI/ESRD, or for children with RI (TW仿單 4.4; FDA 8.4/8.6)<br>If combined with ribavirin: adjust RBV for CrCl ≤50 mL/min per RBV label

**Why:** Empty column. The labels disagree: the US label says no adjustment including dialysis, while the UK label says use in eGFR <30/ESRD only if there is no alternative. Per the ground rules, the US label applies because no Taiwan insert was found, with the UK values shown alongside. The PK figures are from US 12.3/§10 and UK 5.2.

**Sources:** US FDA label §2.6, §8.6, §10, §12.3 (Renal Impairment), §6.1 Trial 4062 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.2, §4.4, §4.8, §5.2 Table 20 — https://www.medicines.org.uk/emc/product/7294/smpc

### A3 · Hepatic dose

Child-Pugh A, B or C: no Epclusa dose adjustment (TW仿單 4.2; FDA 8.7; UK 4.2) — 肝功能不全不需調整<br>Decompensated (CP B/C): add ribavirin × 12 wk. Monitor clinical status and hepatic labs, including direct bilirubin, as clinically indicated (FDA 8.7)<br>TW仿單/UK: safety and efficacy assessed in CPT B but not in CPT C cirrhosis (TW仿單 4.2; UK 4.2/4.4)

**Why:** Empty column. The labels agree on no adjustment. The ribavirin requirement and the UK caveat on CPT C are clinically relevant.

**Sources:** US FDA label §8.7, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.2, §4.4 — https://www.medicines.org.uk/emc/product/7294/smpc

### A4 · Pediatric dose

<span color="blue">`PO`</span> 本院僅 400/100 mg 錠 → only children ≥30 kg can use the stocked product<br>**TW仿單 4.1/4.2**: approved ≥12 y and ≥30 kg — 1 tab 400/100 mg QD × 12 wk; <12 y or <30 kg not established<br>**FDA 2.4 / UK 4.2 (≥3 y)**: weight-based QD × 12 wk; same regimen as adults (+ RBV if decompensated)<br>• ≥30 kg: 400/100 mg QD (1 tab, or 2 × 200/50 mg tab)<br>• 17–<30 kg: 200/50 mg QD (200/50 mg tab or pellet packet — 本院無)<br>• <17 kg: 150/37.5 mg pellets QD (本院無)<br><6 y: give pellets with non-acidic soft food (palatability). Vomiting 15% and spitting up 10% in <6 y (12% discontinued) (FDA 2.4/8.4)<br>RBV with Epclusa (FDA Table 3): <47 kg 15 mg/kg/day; 47–49 kg 600 mg; 50–65 kg 800 mg; 66–80 kg 1,000 mg; >80 kg 1,200 mg/day, divided BID with food<br><3 y: not established; no data in children with renal impairment (FDA 8.4)

**Why:** Empty column. Both labels approve use from age 3, and the hospital stocks only the 400/100 mg tablet, so the stocked dosage form must be stated. The hospital site wrongly says paediatric use is 'not established' (see hospital issues).

**Sources:** US FDA label §2.4, §2.5, Tables 2–3, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.2 Table 3 — https://www.medicines.org.uk/emc/product/7294/smpc

### A5 · Indications

HCV

**Why:** US §1: chronic HCV GT1–6 in adults and children ≥3 y (with RBV if decompensated). UK §4.1: chronic HCV ≥3 y. 'HCV' is an existing option.

**Sources:** US FDA label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/7294/smpc

### A6 · Coverage

HCV

**Why:** Pangenotypic HCV activity (GT1a–6e replicon EC50 data, US 12.4). No activity against other organisms is claimed. 'HCV' is an existing option.

**Sources:** US FDA label §12.4 Microbiology, Tables 10–11 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f

### A7 · Side Effects

CNS, GI, arrhythmia, hypersensitivity, SJS/TEN, anemia, dysglycemia

**Why:** Each tag maps to a label statement:<br>- CNS: headache 22%, fatigue 15%, insomnia 5%, irritability ≥5% (ASTRAL-3), depressed mood 1%.<br>- GI: nausea 9%, diarrhoea; vomiting 15% in children under 6 (UK: very common).<br>- arrhythmia: serious symptomatic bradycardia or heart block with amiodarone (US 5.2, 6.2; UK 4.4/4.8).<br>- hypersensitivity: rash 2–5%, angioedema (US 6.2; UK 'uncommon').<br>- SJS/TEN: SJS, frequency not known (UK 4.8).<br>- anemia: with ribavirin, 26%; Hb <10 g/dL in 23% (US 6.1).<br>- dysglycemia: serious symptomatic hypoglycaemia in diabetics as HCV clears (US 7.3; UK 4.4).<br>All tags are existing options. Asymptomatic lipase/CK rises are too small to tag.

**Sources:** US FDA label §5.2, §6.1, §6.2, §7.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.4, §4.8 — https://www.medicines.org.uk/emc/product/7294/smpc

### A8 · Monitor

HBV serology, viral load, LFT, PT/INR, glucose, ECG, CBC

**Why:** Each tag maps to a label requirement:<br>- HBV serology: HBsAg and anti-HBc before starting (boxed warning, US 2.1).<br>- viral load: HBV DNA and hepatitis flare monitoring in coinfected patients (US 5.1); HCV RNA response.<br>- LFT: hepatitis flare, decompensated cirrhosis incl. direct bilirubin (US 8.7).<br>- PT/INR: warfarin (US 7.3; UK 4.5).<br>- glucose: diabetics (US 7.3; UK 4.4, first 3 months).<br>- ECG: heart rate/cardiac monitoring if amiodarone is unavoidable (US 5.2).<br>- CBC: ribavirin anaemia.<br>All are existing options.

**Sources:** US FDA label boxed warning, §2.1, §5.1, §5.2, §7.3, §8.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.4, §4.5 — https://www.medicines.org.uk/emc/product/7294/smpc

### A9 · Mechanism

Fixed-dose pangenotypic DAA combination (NS5B + NS5A):<br>• Sofosbuvir: nucleotide prodrug → intracellular active uridine-analogue triphosphate GS-461203 → incorporated into HCV RNA by the NS5B RNA-dependent RNA polymerase → chain terminator (does not inhibit human DNA/RNA or mitochondrial RNA polymerase)<br>• Velpatasvir: inhibits HCV NS5A protein (required for viral replication)<br>Resistance: NS5B S282T (2–18× ↓SOF susceptibility); NS5A RASs at positions 24/28/30/31/32/58/92/93 (e.g. L31V, Y93H/N; Y93H/S in GT3a >100×) ↓VEL<br>PK: SOF t½ 0.5 h (GS-331007 t½ 25 h, 80% urine); VEL t½ 15 h, >99.5% protein-bound, 94% faeces (biliary parent). 抑制 NS5B 聚合酶 + NS5A

**Why:** Empty column. The content follows the label microbiology and PK tables.

**Sources:** US FDA label §12.4 Mechanism of Action/Resistance, §12.3 Table 5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f

### A10 · Drug Interactions

• Inducers → ↓SOF/VEL, risk of treatment failure. **Contraindicated (TW仿單/UK; US: not recommended)**: strong P-gp/CYP inducers — rifampicin, rifabutin, carbamazepine, phenytoin, phenobarbital, St John's wort. **Not recommended**: moderate inducers — efavirenz, rifapentine, oxcarbazepine, modafinil (TW仿單/UK 4.5; FDA Table 4: efavirenz, rifapentine); tipranavir/r (FDA)<br>• Do not combine with other sofosbuvir-containing products (TW仿單/UK 4.4)<br>• Amiodarone: serious symptomatic bradycardia / heart block (fatal cardiac arrest reported) → avoid. If no alternative: inpatient cardiac monitoring for the first 48 h, then daily HR for ≥2 wk. Same applies if amiodarone was stopped in the past months (long t½); risk ↑ with β-blockers<br>• Acid reducers (↓VEL solubility at higher pH): antacids → separate by 4 h. H2RA ≤ famotidine 40 mg BID-equivalent, given simultaneously or 12 h apart. PPI not recommended; if essential, take Epclusa with food 4 h before omeprazole ≤20 mg<br>• VEL inhibits P-gp/BCRP/OATP: digoxin ↑ → TDM. Dabigatran ↑ (UK) → monitor bleeding. Topotecan ↑ → not recommended. Rosuvastatin ↑ → max 10 mg. Atorvastatin ↑ → monitor myopathy<br>• Tenofovir DF ↑ (esp. with ritonavir/cobicistat booster) → monitor renal / TDF ADRs<br>• HCV clearance changes liver function: warfarin (monitor INR), insulin/oral hypoglycaemics (hypoglycaemia), tacrolimus/ciclosporin and other narrow-TI CYP substrates (monitor levels) (FDA 7.3; TW仿單/UK 4.5)<br>• No clinically significant interaction: methadone, buprenorphine/naloxone, dolutegravir, raltegravir, rilpivirine, atazanavir/r, darunavir/r, E/C/F/TAF, oral contraceptives (EE/norgestimate), ketoconazole, pravastatin<br>• Others: check the Liverpool checker (hep-druginteractions.org)

**Why:** DDIs are critical for DAAs. These are the label's contraindicated and major interactions, with UK additions marked; the remaining interactions are referred to the Liverpool checker per the ground rules.

**Sources:** US FDA label §5.2, §5.3, §7.1–7.4, Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.3, §4.4, §4.5 Table 4 — https://www.medicines.org.uk/emc/product/7294/smpc; Liverpool HEP drug interaction checker — https://www.hep-druginteractions.org (not fetched; pointer only)

### A11 · Pregnancy

No adequate human data (FDA 8.1; letter categories retired). Animal studies (mice/rats/rabbits): no adverse developmental effects with SOF or VEL, at exposures ≥ human except VEL in rabbits (0.4×)<br>TW仿單 / UK SmPC 4.6: <300 pregnancy outcomes; velpatasvir animal data show a possible link to reproductive toxicity → not recommended in pregnancy as a precaution (懷孕期間不建議使用)<br>⚠️ With ribavirin: contraindicated in pregnant women and in men whose female partners are pregnant — follow RBV pregnancy-testing and contraception rules (FDA 4, 8.1, 8.3)

**Why:** Empty column. The US label gives no letter category, the UK label is stricter, and the ribavirin contraindication is the critical point.

**Sources:** US FDA label §4, §8.1, §8.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/7294/smpc

### A12 · Breastfeeding

LactMed: milk levels low (n=4 postpartum women on SOF/VEL: RID ~0.014% SOF and GS-331007, 0.14% VEL). Adverse infant effects not expected; not a reason to stop breastfeeding. HCV is not transmitted via breastmilk; CDC: consider abstaining if nipples are cracked or bleeding. Test the infant for HCV (NAT)<br>US 8.2: no human data; weigh breastfeeding benefit vs maternal need. TW仿單 / UK 4.6: should not be used during breastfeeding (stricter)<br>With ribavirin: follow the RBV label<br>哺乳：LactMed 認為可持續哺乳；TW仿單/UK SmPC 註明哺乳期間不可使用

**Why:** Empty column. LactMed has no combined Epclusa chapter, so the two component chapters are used together with the label positions.

**Sources:** LactMed Sofosbuvir NBK500824 (rev 2026-07-15) — https://www.ncbi.nlm.nih.gov/books/NBK500824/; LactMed Velpatasvir NBK500838 (rev 2026-07-15) — https://www.ncbi.nlm.nih.gov/books/NBK500838/; Chappell CA et al. Clin Infect Dis 2026 (PMID 40795873, verified via esummary) — https://pubmed.ncbi.nlm.nih.gov/40795873/; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/7294/smpc

### A13 · Notes

本院品項: EPC01 Epclusa 宜譜莎膜衣錠 400 mg/100 mg FC tab (衛部藥輸字第027547號; TW仿單 approved ≥12 y and ≥30 kg). 200/50 mg tab and oral pellets not stocked<br>⚠️ Boxed warning (US) / TW仿單・UK 4.4: HBV reactivation in HCV/HBV coinfection (fulminant hepatitis, hepatic failure, death), also seen in HBsAg−/anti-HBc+ patients. Test HBsAg + anti-HBc before starting; monitor for flare / HBV DNA during and after treatment; start HBV therapy as indicated (B肝再活化黑框警語). Risk ↑ with immunosuppressants/chemotherapy<br>⚠️ With ribavirin (RBV boxed warning): haemolytic anaemia (may worsen cardiac disease; avoid in significant/unstable cardiac disease); teratogenic/embryocidal → contraindicated in pregnant women and male partners of pregnant women; contraception during and 6 mo after RBV<br>⚠️ Amiodarone → serious symptomatic bradycardia / heart block (see Drug Interactions)<br>• Contraindications: TW仿單 / UK — hypersensitivity; strong P-gp/CYP inducers (carbamazepine, phenobarbital, phenytoin, rifampicin, rifabutin, St John's wort). US — only those of ribavirin when combined<br>• Do not combine with other sofosbuvir-containing products (TW仿單 / UK 4.4)<br>• Prior NS5A-inhibitor failure: TW仿單 / UK allow Epclusa + RBV 24 wk if high risk with no alternative (US label silent)<br>• Guideline: AASLD-IDSA HCV Guidance (2023 update, PMID 37229695; hcvguidelines.org) lists SOF/VEL 12 wk as a recommended pangenotypic regimen<br>• Overdose: no antidote; HD removes GS-331007 (53%) but not VEL (TW仿單 4.9; FDA 10)<br>• Labels: TW仿單 (stocked product, 2024-12-23) = primary; US label and UK SmPC differences noted in each column

**Why:** The boxed warning must appear in Notes per the ground rules. It is in the SPL v14 Boxed Warning section but missing from the fetched sources JSON; I confirmed it from the DailyMed SPL XML. The note also records the stocked strength and the contraindications that differ between labels. Guideline line: PMID verified via esummary, but hcvguidelines.org returned 403 and could not be fetched, so treat that line as needing verification.

**Sources:** US FDA label Boxed Warning, §4, §5.1–5.4, §10 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f (SPL XML: https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/7f30631a-ee3b-4cfe-866b-964df3f0a44f.xml); UK SmPC §4.2, §4.3, §4.4, §4.9 — https://www.medicines.org.uk/emc/product/7294/smpc; AASLD-IDSA Hepatitis C Guidance 2023 Update, Clin Infect Dis 2023 (PMID 37229695, verified) — https://pubmed.ncbi.nlm.nih.gov/37229695/; Hospital P4 (product identification only) — https://pharmacy.fjuh.fju.edu.tw/Key_Search/P4?query=EPC01

### A14 · Renewed date

2026-10-06

**Why:** Set the date once the columns above are filled, so the entry shows when it was last checked against the labels.

**Sources:** Workflow convention (no clinical source needed)

### B1 · Adult dose

<span color="blue">`PO`</span> 1 tab (sofosbuvir 400 mg/velpatasvir 100 mg) QD, with or without food × **12 wk**; swallow whole, do not chew/crush (bitter) (院內 EPC01 = 400/100 mg tab only; FDA 2.3/SmPC/TW仿單 4.2)<br>• GT1–6, no cirrhosis or compensated cirrhosis (CTP A), treatment-naïve or -experienced: Epclusa × 12 wk<br>• Decompensated cirrhosis (CTP B/C): Epclusa + ribavirin × 12 wk; RBV 1000 mg/d (\<75 kg) or 1200 mg/d (≥75 kg) divided BID with food (FDA 2.3/TW仿單 4.2); UK SmPC only: CTP C pre-transplant or CTP B/C post-transplant → start RBV 600 mg/d, titrate to 1000/1200 mg if tolerated<br>• GT3 + compensated cirrhosis: UK SmPC only — adding RBV 1000/1200 mg/d may be considered (not in FDA/TW仿單); AASLD-IDSA (treatment-naïve): NS5A RAS test first, only Y93H-negative eligible for SOF/VEL alone × 12 wk (PMID 31816111)<br>• HIV coinfection, post-liver-transplant (no cirrhosis/CTP A): same 12-wk regimen (FDA 2.2; TW仿單 4.2)<br>• Prior NS5A-inhibitor failure: Epclusa + RBV × 24 wk may be considered if high risk and no alternative (SmPC/TW仿單 4.2/4.4)<br>• Vomiting \<3 h after dose → take another tab; missed dose \<18 h → take ASAP, \>18 h → skip, no double dose (SmPC/TW仿單 4.2)

**Why:** New entry with an empty column. The adult regimen is identical in all three labels: 1 tab daily for 12 weeks, with RBV for decompensated cirrhosis. The RBV weight-based dose comes from FDA 2.3 and the TW insert; the UK adds a 600 mg starting dose for CTP C and post-transplant patients. The GT3 RAS point is the only regimen choice the labels leave to guidelines; AASLD-IDSA 2019 full text (PMC9710295) states 'only those without a baseline NS5A Y93H RAS are eligible for a 12-week course of sofosbuvir/velpatasvir'. NS5A-failure 24 wk + RBV is in SmPC 4.2/4.4 and the TW insert 4.2 only.

**Sources:** US FDA label EPCLUSA (DailyMed setid 7f30631a-ee3b-4cfe-866b-964df3f0a44f, v14) §2.2, §2.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC Sofosbuvir/Velpatasvir Gilead (eMC 7294, rev 20/06/2025) §4.2 Table 1–2, §4.4 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 宜譜莎膜衣錠 衛部藥輸字第027547號 (2024-12-23) §4.2 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; Ghany MG et al. AASLD-IDSA HCV Guidance 2019 Update, Hepatology 2020;71:686-721, PMID 31816111 (PMC9710295) — https://pubmed.ncbi.nlm.nih.gov/31816111/

### B2 · Renal dose, HD, CRRT

<span color="blue">`PO`</span> **No dose adjustment for any degree of renal impairment, incl. ESRD on dialysis** — TW仿單 4.2/4.4 (院內 EPC01) = FDA 2.6/8.6<br>UK SmPC 4.2/4.4: no adjustment mild–moderate; eGFR \<30 and ESRD on HD — limited safety data, use without adjustment only when no other relevant option<br>PK: GS-331007 (inactive, renally cleared SOF metabolite) AUC ↑451% at eGFR \<30 and ↑1280–2070% in ESRD; 4-h HD removes \~18% of SOF dose; HD extraction of GS-331007 53%, velpatasvir not removed (\>99.5% protein-bound) (FDA 10/12.3) → no supplemental dose<br>ESRD on HD or PD (n=59), 12 wk: SVR12 95%, no drug-related SAE (Borgia 2019, PMID 31195062)<br>No safety data: decompensated cirrhosis + severe RI/ESRD; children with RI (FDA 8.4/8.6; TW仿單 4.4)<br>**CRRT**: no label or published data — labels allow standard dose at any renal function incl. dialysis<br>+ ribavirin: adjust RBV for CrCl ≤50 mL/min (FDA 2.6; RBV label)

**Why:** Ground rule: prefer the stocked product's label. The TW insert 4.2 states '對任何程度的腎功能不全病人，包括須接受透析治療的病人，都不須調整Epclusa的劑量'. This matches FDA 2.6/8.6 ('any degree of renal impairment, including patients requiring dialysis'). The UK SmPC is the outlier (limited data; use only when no alternative) and is shown alongside. The brief described the UK values as differing from the US; the TW insert sides with the US. PK numbers re-verified from FDA 12.3 and 10. Borgia 2019 (PMID verified with esummary/efetch) enrolled both HD and PD patients. No CRRT data was found on PubMed (esearch returned nothing).

**Sources:** TW仿單 衛部藥輸字第027547號 §4.2 腎功能不全, §4.4 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; US FDA label EPCLUSA §2.6, §8.4, §8.6, §10, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.2 Renal impairment, §4.4, §4.8 — https://www.medicines.org.uk/emc/product/7294/smpc; Borgia SM et al. J Hepatol 2019;71:660-665, PMID 31195062 — https://pubmed.ncbi.nlm.nih.gov/31195062/

### B3 · Hepatic dose

No dose adjustment for CTP A, B or C (FDA 8.7/SmPC 4.2/TW仿單 4.2)<br>Decompensated (CTP B/C) → Epclusa + ribavirin × 12 wk (FDA 2.2)<br>CTP C: safety/efficacy not assessed (SmPC/TW仿單 4.4); ASTRAL-4 enrolled CTP B (Curry 2015, PMID 26569658)<br>Decompensated on Epclusa + RBV: clinical and hepatic lab monitoring incl. direct bilirubin (FDA 8.7)

**Why:** All three labels say no adjustment for CTP A–C. The UK and TW inserts add that CTP C was not assessed. FDA 8.7 recommends hepatic lab monitoring (direct bilirubin) for decompensated patients on RBV. PK support from FDA 12.3: velpatasvir AUC similar in CTP B/C, and SOF/GS-331007 changes not clinically relevant.

**Sources:** US FDA label EPCLUSA §8.7, §12.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.2 Hepatic impairment, §4.4 CPT Class C — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.2 肝功能不全, §4.4 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; Curry MP et al. NEJM 2015;373:2618-28 (ASTRAL-4), PMID 26569658 — https://pubmed.ncbi.nlm.nih.gov/26569658/

### B4 · Pediatric dose

院內 EPC01 = 400/100 mg tab only → usable only for children ≥30 kg<br>**TW仿單**: approved ≥12 y and ≥30 kg — 1 tab 400/100 mg QD × 12 wk; \<12 y or \<30 kg not established<br>**FDA 2.4/SmPC 4.2** (≥3 y, weight-based, × 12 wk; + weight-based RBV if decompensated): \<17 kg 150/37.5 mg pellets QD; 17–\<30 kg 200/50 mg tab or pellets QD; ≥30 kg 400/100 mg QD (or 2 × 200/50 mg tabs) — pellets and 200/50 mg tab not stocked<br>\<6 y: give pellets with food; vomiting 15%, spitting up 10% (FDA 8.4)<br>\<3 y not established; no data in children with renal impairment (FDA 8.4)

**Why:** FDA 1/2.4 and SmPC 4.1/4.2 approve ≥3 years with weight bands. The Taiwan licence (stocked product) is narrower: TW insert 4.1 '適用於治療12歲以上且體重至少30公斤之兒童與成人病人', and 4.2 states that <12 y or <30 kg is not established. Because only the 400/100 tab is stocked, only the ≥30 kg band can be dosed in-house. Paediatric trial: Jonas 2024 (PMID 38644678, verified).

**Sources:** US FDA label EPCLUSA §1, §2.4 Table 2–3, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.1, §4.2 Table 3 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.1, §4.2 兒童族群 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; Jonas MM et al. J Pediatr Gastroenterol Nutr 2024;78:1342-1354, PMID 38644678 — https://pubmed.ncbi.nlm.nih.gov/38644678/

### B5 · Indications

HCV

**Why:** Only indication in all labels: chronic HCV genotype 1–6 infection, without cirrhosis, with compensated cirrhosis, or (+RBV) with decompensated cirrhosis. The 'HCV' option exists in the Indications schema.

**Sources:** US FDA label EPCLUSA §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.1 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.1 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234

### B6 · Coverage

HCV

**Why:** Pangenotypic HCV activity, GT1–6: replicon EC50 tables in FDA 12.4 and SmPC 5.1. No HBV or HIV activity. The 'HCV' option exists in the Coverage schema.

**Sources:** US FDA label EPCLUSA §12.4 Tables 10–11 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §5.1 — https://www.medicines.org.uk/emc/product/7294/smpc

### B7 · Side Effects

CNS, GI, arrhythmia, hypersensitivity, SJS/TEN, LFT↑, anemia, dysglycemia

**Why:** All are existing schema options.<br>- CNS: headache 22%, fatigue 15%, insomnia 5%, irritability ≥5% (ASTRAL-3), depressed mood 1% (FDA 6.1).<br>- GI: nausea 9%; vomiting very common in children 3–<6 y (SmPC 4.8); diarrhoea.<br>- arrhythmia: serious symptomatic bradycardia/heart block with amiodarone (FDA 5.2/6.2; SmPC 4.8).<br>- hypersensitivity: rash 2–5%, angioedema (FDA 6.1/6.2; SmPC/TW 4.8).<br>- SJS/TEN: Stevens-Johnson syndrome, frequency not known (SmPC 4.8).<br>- LFT↑: hepatitis flare from HBV reactivation (boxed warning).<br>- anemia: with RBV in decompensated cirrhosis, 26%, Hb <10 g/dL in 23% (FDA 6.1).<br>- dysglycemia: serious symptomatic hypoglycaemia in diabetics as HCV clears (FDA 7.3; SmPC 4.4).<br>Lipase >3×ULN (3–6%) and CK ≥10×ULN (1–2%) have no tag, so they go in Notes.

**Sources:** US FDA label EPCLUSA §5.1, §5.2, §6.1, §6.2, §7.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.4, §4.8 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.8 表3 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234

### B8 · Monitor

HBV serology, viral load, LFT, glucose, PT/INR, ECG, CBC, renal

**Why:** All are existing schema options.<br>- HBV serology: HBsAg + anti-HBc in all patients before start; HBV DNA/LFT during and after therapy if markers positive (FDA 2.1/boxed/5.1).<br>- viral load: HCV RNA ≥12 wk after end of therapy = SVR (AASLD-IDSA, PMID 31816111).<br>- LFT: aminotransferases at SVR check (AASLD); direct bilirubin in decompensated cirrhosis on RBV (FDA 8.7).<br>- glucose: diabetics; PT/INR: warfarin/VKA (FDA 7.3; SmPC 4.4/4.5).<br>- ECG/heart rate: inpatient cardiac monitoring 48 h if amiodarone unavoidable (FDA 5.2).<br>- CBC: Hb with RBV (FDA 6.1).<br>- renal: only with tenofovir DF regimens or RBV dosing (FDA Table 4/2.6).<br>The pharmacist may drop 'renal' if it is felt to be too conditional.

**Sources:** US FDA label EPCLUSA boxed warning, §2.1, §2.6, §5.1, §5.2, §6.1, §7.3 Table 4, §8.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.4, §4.5 — https://www.medicines.org.uk/emc/product/7294/smpc; Ghany MG et al. AASLD-IDSA HCV Guidance 2019 Update, PMID 31816111 (PMC9710295) — https://pubmed.ncbi.nlm.nih.gov/31816111/

### B9 · Mechanism

Fixed-dose combination of 2 DAAs: **sofosbuvir** = nucleotide prodrug → intracellular uridine-analogue triphosphate GS-461203 → incorporated by HCV **NS5B** RNA-dependent RNA polymerase → chain terminator; **velpatasvir** = **NS5A** inhibitor (NS5A needed for RNA replication and virion assembly). Pangenotypic GT1–6 (FDA 12.4/SmPC 5.1)<br>PK: SOF t½ 0.5 h → GS-331007 (inactive) t½ 25 h, \~80% of dose in urine; VEL t½ 15 h, \>99.5% protein-bound, biliary (77% unchanged in faeces); VEL solubility ↓ as gastric pH ↑ (FDA 12.3/7.3)<br>Resistance: NS5A RAS (e.g. Y93H in GT3, L31V/P32 in GT6) → \>100-fold ↓ VEL susceptibility; NS5B S282T → 2–18-fold ↓ SOF susceptibility (FDA 12.4)

**Why:** Empty column. Content re-verified against FDA 12.3 Table 5 and 12.4, and SmPC 5.1/5.2. This also documents the correct class: the hospital lists 'HCV Protease Inhibitors', which is wrong.

**Sources:** US FDA label EPCLUSA §12.3, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §5.1, §5.2 — https://www.medicines.org.uk/emc/product/7294/smpc

### B10 · Drug Interactions

**Contraindicated (TW仿單/SmPC 4.3; FDA: not recommended)**: strong P-gp/CYP inducers — carbamazepine, phenytoin, phenobarbital, rifampicin, rifabutin, St John's wort (rifampicin ↓SOF AUC 72%, ↓VEL AUC 82%)<br>**Not recommended**: moderate inducers — efavirenz (↓VEL AUC \~53%), oxcarbazepine, modafinil, rifapentine; tipranavir/ritonavir; topotecan (FDA Table 4); other sofosbuvir-containing products<br>**Amiodarone**: serious symptomatic bradycardia/heart block, fatal arrest reported (↑ risk with β-blockers) → avoid; if no alternative: inpatient cardiac monitoring 48 h then daily HR ≥2 wk; same if amiodarone stopped in past months (FDA 5.2/SmPC 4.4)<br>**Acid reducers** (↓VEL): antacids — separate 4 h; H2RA ≤ famotidine 40 mg BID, simultaneously or 12 h apart; PPI not recommended — if needed, take Epclusa with food 4 h before omeprazole ≤20 mg<br>**↑ co-drug (VEL inhibits P-gp/BCRP/OATP)**: digoxin → TDM; rosuvastatin ≤10 mg; atorvastatin/other statins → monitor myopathy; dabigatran → monitor bleeding (SmPC); tenofovir DF ↑ (esp. with ritonavir/cobicistat) → monitor renal/TDF ADRs<br>**HCV clearance**: warfarin/VKA → monitor INR; antidiabetics → hypoglycaemia; tacrolimus/ciclosporin and narrow-TI CYP substrates → monitor levels (FDA 7.3/SmPC 4.5)<br>No significant interaction: dolutegravir, raltegravir, rilpivirine, E/C/F/TAF, atazanavir/r, darunavir/r, methadone, buprenorphine, ethinyl estradiol/norgestimate, ketoconazole, pravastatin (FDA 7.4)<br>Full check: Liverpool HEP Drug Interactions (hep-druginteractions.org)

**Why:** Empty column. Classification follows the stocked product's TW insert (4.3/4.5: '這類藥物禁止與Epclusa併用'), the same as the UK. The FDA label only says 'not recommended' for these drugs. Numbers come from SmPC Table 4: rifampicin SOF AUC 0.28 and VEL AUC 0.18; efavirenz VEL AUC 0.47. The amiodarone, acid-reducer, digoxin, statin, TDF and topotecan items come from FDA Table 4; dabigatran is from SmPC Table 4. hep-druginteractions.org could not be reached from this sandbox, so it is given only as a pointer, as the ground rules ask.

**Sources:** TW仿單 衛部藥輸字第027547號 §4.3, §4.4, §4.5 表2 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; UK SmPC eMC 7294 §4.3, §4.4, §4.5 Table 4 — https://www.medicines.org.uk/emc/product/7294/smpc; US FDA label EPCLUSA §5.2, §5.3, §7.1–7.4 Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; Liverpool HEP Drug Interactions checker — https://www.hep-druginteractions.org

### B11 · Pregnancy

No adequate human data; no adverse developmental outcomes in animals with SOF or VEL (FDA 8.1 narrative; letter categories retired)<br>SmPC/TW仿單 4.6: \<300 outcomes; velpatasvir possible reproductive toxicity in animals → **not recommended in pregnancy as a precaution** (懷孕期間不建議使用)<br>⚠ **+ ribavirin: contraindicated in pregnant women and male partners of pregnant women**; avoid pregnancy during and 6 mo after RBV, 2 reliable contraceptive methods (FDA 8.1/17; RBV boxed warning)<br>Pregnant women (n=11, start 23–25 wk) × 12 wk: PK not clinically different, 9/9 with data cured, 0/8 infants infected (Chappell 2025, PMID 39688397)<br>AASLD-IDSA simplified algorithm excludes pregnancy → specialist care (PMID 31816111)

**Why:** Empty column. No letter category is used. The US and EU/TW labels differ (US neutral, EU/TW 'not recommended'), so both are shown. The RBV contraindication must be prominent: it comes from FDA 8.1 and the ribavirin tablet boxed warning, fetched from DailyMed setid eee304d0-c2ea-44f4-97d9-92a414d31b6c. The Chappell 2025 abstract was verified with efetch.

**Sources:** US FDA label EPCLUSA §8.1, §8.3, §17 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.6 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.6 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; Ribavirin tablets (Aurobindo) FDA label boxed warning — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eee304d0-c2ea-44f4-97d9-92a414d31b6c; Chappell CA et al. Clin Infect Dis 2025;80:744-751, PMID 39688397 — https://pubmed.ncbi.nlm.nih.gov/39688397/; AASLD-IDSA HCV Guidance 2019 Update, PMID 31816111 — https://pubmed.ncbi.nlm.nih.gov/31816111/

### B12 · Breastfeeding

LactMed: low milk levels (RID sofosbuvir 0.014%, velpatasvir 0.14%; n=4 postpartum women); infant adverse effects not expected → **not a reason to stop breastfeeding**; HCV not transmitted via breastmilk; CDC: consider abstaining if nipples cracked/bleeding (LactMed NBK500824/NBK500838)<br>FDA 8.2: weigh breastfeeding benefits vs maternal need (VEL in rat milk)<br>SmPC/TW仿單 4.6: should not be used during breastfeeding (餵哺母乳期間不可使用)<br>+ ribavirin: follow RBV lactation advice

**Why:** LactMed is the preferred source per the ground rules: both component chapters say treatment is 'not a reason to discontinue breastfeeding' and give the RIDs (Chappell CID 2026, PMID 40795873, verified). The label positions differ and are shown alongside: FDA neutral, UK and TW 'should not be used'.

**Sources:** LactMed Sofosbuvir NBK500824 (rev 2026-07-15) — https://www.ncbi.nlm.nih.gov/books/NBK500824/; LactMed Velpatasvir NBK500838 (rev 2026-07-15) — https://www.ncbi.nlm.nih.gov/books/NBK500838/; US FDA label EPCLUSA §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §4.6 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.6 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234

### B13 · Notes

⚠ **BOXED WARNING (FDA): HBV reactivation** in HCV/HBV coinfection during/after DAA therapy — fulminant hepatitis, hepatic failure, death; test HBsAg + anti-HBc before start; monitor coinfected patients (incl. resolved HBV, HBsAg−/anti-HBc+) for flare during and after treatment; manage HBV per guidelines (FDA BW/5.1; SmPC/TW仿單 4.4) — 治療前須驗 HBsAg/anti-HBc，B肝再活化可致猛爆性肝炎<br>⚠ **Amiodarone → severe bradycardia/heart block** (see Drug Interactions)<br>⚠ **With ribavirin (RBV boxed warning)**: haemolytic anaemia (may worsen cardiac disease → MI; avoid in significant/unstable cardiac disease); teratogenic/embryocidal → contraindicated in pregnancy and male partners of pregnant women; contraception during + 6 mo after<br>院內 EPC01 = 400/100 mg tab only (衛部藥輸字第027547號; TW仿單 approved ≥12 y and ≥30 kg); pellets and 200/50 mg tab not stocked<br>CI (TW仿單/SmPC): hypersensitivity; strong P-gp/CYP inducers. FDA: CI only via RBV when combined<br>Hypoglycaemia in diabetics and INR changes as HCV clears (FDA 7.3)<br>Asymptomatic lipase \>3×ULN (3–6%) and CK ≥10×ULN (1–2%) (FDA 6.1)<br>Cure = HCV RNA undetectable ≥12 wk after end of therapy (SVR12); cirrhosis → HCC ultrasound q6 mo even after SVR (AASLD-IDSA, PMID 31816111)<br>DAA/NS5A failure: SOF/VEL/VOX × 12 wk SVR 96% (POLARIS-1, PMID 28564569) — not stocked; label alternative Epclusa + RBV × 24 wk (SmPC/TW仿單)

**Why:** Ground rule: boxed warnings must appear in Notes. The HBV reactivation boxed warning was verified in the full PI SPL (section code 34066-1), not just in Highlights. The ribavirin boxed warning (haemolysis, teratogenicity) is also required in Notes and was quoted from the ribavirin tablet label. The Notes also carry the stocked-strength note, the contraindication summary and items with no column of their own. The PMIDs were verified with esummary/efetch; the POLARIS-1 96% figure is from its abstract.

**Sources:** US FDA label EPCLUSA boxed warning, §4, §5.1, §5.2, §6.1, §7.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; Ribavirin tablets FDA label boxed warning — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eee304d0-c2ea-44f4-97d9-92a414d31b6c; UK SmPC eMC 7294 §4.3, §4.4 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §4.1, §4.3, §4.4 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; AASLD-IDSA HCV Guidance 2019 Update, PMID 31816111 — https://pubmed.ncbi.nlm.nih.gov/31816111/; Bourlière M et al. NEJM 2017;376:2134-46 (POLARIS-1/4), PMID 28564569 — https://pubmed.ncbi.nlm.nih.gov/28564569/

### B14 · Page body

Body sections in the same structure as other entries (e.g. Famvir):<br>- `## Sofosbuvir/Velpatasvir (Epclusa)`, then `---`.<br>- Sections: Category, Mechanism, Indications (FDA ≥3 y; UK ≥3 y; TW仿單 ≥12 y & ≥30 kg; GT1–6; +RBV if decompensated), Coverage, Adult Dose (table: population × FDA / UK SmPC / TW仿單: no cirrhosis or CTP A 12 wk; decompensated +RBV 12 wk; GT3 compensated cirrhosis ±RBV/RAS test; NS5A failure +RBV 24 wk), Renal Dose (TW仿單 = FDA no adjustment incl. dialysis; UK limited data; PK; Borgia 2019; CRRT no data), Hepatic Dose, Pediatric Dose (weight-band table, with stocked-strength note), Side Effects, Monitoring, Drug Interactions (table: interacting drug / effect / management), Notes (boxed warnings first), Pregnancy, Breastfeeding.<br>- References:<br>  1. FDA DailyMed setid 7f30631a-ee3b-4cfe-866b-964df3f0a44f<br>  2. UK SmPC eMC 7294 (rev 20/06/2025)<br>  3. 宜譜莎膜衣錠 仿單 衛部藥輸字第027547號 (uploaded 2024-12-23), https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234<br>  4. TFDA licence page https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027547%E8%99%9F<br>  5. LactMed NBK500824<br>  6. LactMed NBK500838<br>  7. Ribavirin FDA label setid eee304d0-c2ea-44f4-97d9-92a414d31b6c<br>  8. AASLD-IDSA 2019 PMID 31816111<br>  9. AASLD-IDSA 2023 PMID 37229695<br>  10. Borgia 2019 PMID 31195062<br>  11. Curry 2015 PMID 26569658<br>  12. Chappell 2025 PMID 39688397<br>  13. Bourlière 2017 PMID 28564569<br>  14. Jonas 2024 PMID 38644678<br>  15. hep-druginteractions.org

**Why:** New entry with a blank body. Existing entries (e.g. Famvir) carry a full sectioned body plus a References list with URLs, and the property text in B1–B13 maps directly into it. No storage or stability details, per the owner's rule.

**Sources:** Existing entry style: Famvir (Famciclovir) page https://app.notion.com/p/3f0c496dfff1818a9132ec4ff42fbc45; All sources listed in B1–B13

### B15 · Category

Keep as is. Optionally: Anti-HCV DAA (**NS5B nucleotide polymerase inhibitor + NS5A inhibitor**, pangenotypic)

**Why:** The current value is correct. FDA 1 describes 'sofosbuvir, a HCV nucleotide analog NS5B polymerase inhibitor, and velpatasvir, an HCV NS5A inhibitor'. SmPC/TW 5.1: 'Direct acting antiviral', ATC J05AP55. The optional wording only makes the class more precise; no change is required.

**Sources:** US FDA label EPCLUSA §1, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f; UK SmPC eMC 7294 §5.1 — https://www.medicines.org.uk/emc/product/7294/smpc; TW仿單 衛部藥輸字第027547號 §5.1 — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234

### B16 · Renal dose, HD, CRRT

Base the renal and other label claims on the TW仿單 衛部藥輸字第027547號 (stocked product's label), with FDA/UK alongside. Final renal wording is unchanged (no adjustment incl. dialysis), but cite TW仿單 first. Describe the HBV reactivation warning as a full boxed warning.

**Why:** This corrects the source brief, not Notion text. The TW insert exists, and the hierarchy rule therefore points to it; it happens to agree with FDA on renal dosing. The SPL shows the boxed warning in the full prescribing information (section 34066-1), not only in Highlights. The brief also lists 'Hypoglycaemia and INR changes' under warnings and precautions; in the US label they are in §7.3 (Drug Interactions), while the UK SmPC puts diabetes in §4.4. This is a minor attribution point.

**Sources:** TFDA licence page 衛部藥輸字第027547號 — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027547%E8%99%9F; TW仿單 PDF — https://mcp.fda.gov.tw/insert/pdfcasefile/3a8aef69-745a-4a7b-b2e1-14fd2093e234; DailyMed SPL XML 7f30631a-ee3b-4cfe-866b-964df3f0a44f (boxed warning section) — https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/7f30631a-ee3b-4cfe-866b-964df3f0a44f.xml

## Apply log

- Adult dose: merged both agreed proposals (PO tag, 400/100 mg QD x 12 wk, decompensated with RBV dosing, UK-only RBV 600 mg start and GT3 option, AASLD RAS note PMID 31816111, NS5A-failure 24 wk, HBV screening, vomiting/missed dose)
- Renal dose, HD, CRRT: TW仿單 cited first (stocked product); no adjustment incl. dialysis; UK limited-data caveat; GS-331007 PK/HD removal; Trial 4062/Borgia 2019 merged; CRRT no data; RBV adjustment
- Hepatic dose: no adjustment CTP A-C; decompensated with RBV plus direct bilirubin monitoring; CTP C not assessed; ASTRAL-4 PMID 26569658
- Pediatric dose: stocked 400/100 mg only (>=30 kg); TW仿單 >=12 y/>=30 kg; FDA/UK weight bands; pellets note; RBV Table 3; <3 y not established
- Indications: [HCV]
- Coverage: [HCV]
- Side Effects: [CNS, GI, arrhythmia, hypersensitivity, SJS/TEN, LFT↑, anemia, dysglycemia]
- Monitor: [HBV serology, viral load, LFT, PT/INR, glucose, ECG, CBC, renal]
- Mechanism: NS5B chain terminator + NS5A inhibitor, PK, resistance (merged)
- Drug Interactions: contraindicated/not-recommended inducers, amiodarone, acid reducers, P-gp/BCRP/OATP substrates, HCV-clearance effects, no-interaction list, Liverpool pointer
- Pregnancy: FDA narrative (no letter category), animal data, SmPC/TW not recommended, RBV contraindication, Chappell 2025 PMID 39688397, AASLD note
- Breastfeeding: LactMed (NBK500824/NBK500838), FDA 8.2, SmPC/TW should not be used, RBV, Chinese summary line
- Notes: HBV reactivation boxed warning described in full, RBV boxed warning, amiodarone, stocked product EPC01 衛部藥輸字第027547號, CI, SOF duplication, lab notes, SVR12/HCC, AASLD 2023, POLARIS-1, overdose, label hierarchy
- Page body: full Famvir-style structure (Category, Mechanism, Indications, Coverage, Adult Dose table, Renal, Hepatic, Pediatric table, Side Effects, Monitoring, DDI table, Notes with boxed warnings first, Pregnancy, Breastfeeding) plus References section with 15 sources and URLs
- Category: kept as is (agreed fix said keep as is)
- Renewed date set to 2026-10-06 (is_datetime 0)
- Fixed Notion auto-conversion of leading '+' into nested bullets in body tables/lists (reworded to 'With RBV')

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
