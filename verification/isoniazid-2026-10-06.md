# New entry: Isoniazid (INAH)

- **Notion entry:** [Isoniazid (INAH)](https://app.notion.com/3f1c496dfff18162b1c4d597435c72d1). Created 2026-10-06.
- **Hospital codes:** ISO06 (Isoniazide tab 100 mg), ISO07 (公費 INAH tab 300 mg)
- **How it was built:** two-reviewer workflow (A: US label + LactMed; B: UK SmPC, Taiwan insert, TB/HIV/hepatitis guidelines), each cross-checking the other; only agreed text was written.
- **Raw sources:** `sources/isoniazid.json` (plus any Taiwan insert text files)

## Product and sources

Isoniazid (INAH), oral tablets only. The hospital stocks two forms. ISO06 is Isoniazide 100 mg tab (異菸鹼醯胼錠, NHI NC001641G0, ATC J04AC01). ISO07 is the government-supplied (公費) INAH 300 mg tab, dispensed from the ADC, with no NHI code. US reference: generic isoniazid tablet label on DailyMed (RemedyRepack, setid 6dab7b7b-a3a9-47ef-b423-134bc6970d8b, v7, Sep 2026). The label text covers both the 100 mg and 300 mg strengths. UK reference: Isoniazid 100 mg Tablets SmPC (eMC 14798, rev 12/02/2019). LactMed reference: NBK501336, rev 2024-08-15. No Taiwan package insert (仿單) was found. The hospital P4 pages for ISO06 and ISO07 have an empty 仿單 field and no licence number (許可證字號). The TFDA insert search (mcp.fda.gov.tw/im) is behind a server-side CAPTCHA, which I did not try to bypass. data.fda.gov.tw, www.cdc.gov.tw, www.who.int and www.cth.org.tw/public/medi_news/ were blocked by the proxy (403). The Notion page was created 2026-10-06 and is blank: every property column, the multi-selects and the page body are empty, and only Abx and Category are set.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 100 mg tab (ISO06) / 300 mg tab (ISO07 公費). Take on an empty stomach (≥30 min before or 2 h after a meal; swallow whole) (UK 4.2; US Food: bioavailability ↓ with food).<br>**Active TB** (always combined with other anti-TB drugs; never monotherapy): 5 mg/kg (max 300 mg) QD, or 15 mg/kg (max 900 mg) 2–3×/week by DOT (US D&A). UK 4.2: 4–5 mg/kg/day (max 300 mg); TB meningitis up to 10 mg/kg/day for the first 1–2 wk; intermittent regimens 15 mg/kg 2–3×/wk. Regimen choice and duration: see ATS/CDC/IDSA 2016 (PMID 27516382).<br>**LTBI** 潛伏結核: 300 mg QD for adults >30 kg (US D&A). CDC/NTCA 2020 (PMID 32053584): 6 or 9 months of daily INH 5 mg/kg (max 300 mg) is an *alternative* regimen; 15 mg/kg (max 900 mg) twice weekly by DOT is an option. Preferred regimens: **3HP** = INH 15 mg/kg (rounded up to the nearest 50/100 mg, max 900 mg) + rifapentine once weekly × 12 doses (Priftin US label 2.2; CDC 2020); **3HR** = INH 5 mg/kg (max 300 mg) + rifampin 10 mg/kg (max 600 mg) daily × 3 months (CDC 2020).<br>Add pyridoxine (B6) for patients at risk of neuropathy (US D&A; UK 4.4).

**Why:** The column is empty. The US label sets the treatment doses (5 mg/kg up to 300 mg daily, or 15 mg/kg up to 900 mg 2–3×/week) and the preventive dose (300 mg/day for adults >30 kg). UK SmPC 4.2 adds 4–5 mg/kg/day, up to 10 mg/kg/day in TB meningitis, and the empty-stomach timing. The 3HP INH dose is in the Priftin label. Preferred versus alternative LTBI regimens come from CDC/NTCA 2020 Table 3/4: I checked the PMC7041302 full text, which says 3HP, 4R and 3HR are preferred and 6H/9H are alternatives. The 100 mg and 300 mg tablets are covered together. The US 'Options 1–3' regimens date from 1994, so I point to the 2016 guideline instead of quoting them.

**Sources:** US label DOSAGE AND ADMINISTRATION 'For Treatment of Tuberculosis' and 'For Preventative Therapy'; PRECAUTIONS 'Food' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.2 Posology and method of administration — https://www.medicines.org.uk/emc/product/14798/smpc; Priftin (rifapentine) US label 2.2 Dosage in LTBI — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Sterling TR et al. CDC/NTCA LTBI guidelines 2020, MMWR Recomm Rep 69(1):1-11, PMID 32053584 (verified via esummary), Tables 3–4 — https://pubmed.ncbi.nlm.nih.gov/32053584/; Nahid P et al. ATS/CDC/IDSA drug-susceptible TB 2016, Clin Infect Dis 63:e147, PMID 27516382 (verified) — https://pubmed.ncbi.nlm.nih.gov/27516382/

### A2 · Renal dose, HD, CRRT

No dose adjustment in either label (no renal dose table in US label or UK 4.2). US Precautions: use in severe renal dysfunction should be carefully monitored; UK 4.4: take care in impaired kidney function.<br>CrCl <30 / HD: no change — 'RIF and INH are metabolized by the liver, and conventional dosing can be used in the setting of renal insufficiency' (ATS/CDC/IDSA 2016, PMID 27516382); i.e. 300 mg QD (or 900 mg 3×/wk per ATS Table 12 [flag: table row not text-verified]). INH is cleared to some degree by HD → on dialysis days give after HD (post-dialysis dosing preferred, facilitates DOT) (ATS 2016).<br>PD: few PK data; consider serum levels before and after PD (ATS 2016).<br>CRRT: no label or guideline data; usual dose generally used because clearance is mainly hepatic [flag: extrapolation]. TDM (2-h and 6-h levels) may help in ESRD (ATS 2016).<br>CKD cautions: cerebellar syndrome reported mostly in CKD → stop INH (US Warnings); deafness/tinnitus/vertigo reported in ESRD (UK 4.8); uraemic patients → give pyridoxine (UK 4.4).<br>Overdose: HD/PD have been used (US Overdosage; UK 4.9).

**Why:** The column is empty. Neither label gives a renal dose. Following the source hierarchy, I used the US label's cautions (careful monitoring in severe renal dysfunction; cerebellar syndrome mostly in CKD) and added the UK SmPC points (kidney caution, ototoxicity in ESRD, pyridoxine for uraemic patients). The HD statement comes from the ATS/CDC/IDSA 2016 guideline (PMID verified), but I could not retrieve its full text: PMC returned the abstract only, and IDSA/CDC pages were blocked or 404. The table content is therefore flagged for confirmation. I found no label or guideline data on CRRT.

**Sources:** US label PRECAUTIONS 'General' (severe renal dysfunction); WARNINGS 'Cerebellar Syndrome'; OVERDOSAGE 'Dialysis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.2, 4.4, 4.8 (Ear & labyrinth: ESRD), 4.9 — https://www.medicines.org.uk/emc/product/14798/smpc; Nahid P et al. 2016, PMID 27516382 — https://pubmed.ncbi.nlm.nih.gov/27516382/

### A3 · Hepatic dose

No label dose adjustment.<br>**Contraindicated** 禁用: acute liver disease of any cause; previous INH-associated hepatic injury or drug-induced hepatitis (US Contraindications; UK 4.3).<br>Chronic liver disease: monitor carefully (US Precautions). UK 4.4: special precautions; any deterioration in liver function → stop.<br>**Stop rules**: US boxed warning: if transaminases are >3–5× ULN, strongly consider stopping; stop promptly if symptoms or signs of hepatitis appear. UK 4.4: stop if AST >3× normal or any rise in bilirubin. ATS 2006: interrupt if ALT >3× ULN with symptoms or jaundice, or >5× ULN without symptoms (PMID 17021358).<br>Defer LTBI treatment during acute hepatic disease. Rechallenge only after symptoms and labs resolve, starting with very small, gradually increasing doses (US boxed warning).

**Why:** The column is empty. The labels give contraindications and stop thresholds but no dose reduction. The ATS hepatotoxicity statement's thresholds are confirmed in its PubMed abstract.

**Sources:** US label BOXED WARNING, CONTRAINDICATIONS, PRECAUTIONS 'General' and 'Laboratory Tests' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.3, 4.4 — https://www.medicines.org.uk/emc/product/14798/smpc; Saukkonen JJ et al. ATS statement: hepatotoxicity of anti-TB therapy. Am J Respir Crit Care Med 2006;174:935-52, PMID 17021358 (verified; abstract states 3×/5× ULN rule) — https://pubmed.ncbi.nlm.nih.gov/17021358/

### A4 · Pediatric dose

<span color="blue">`PO`</span> **Active TB**: 10–15 mg/kg (max 300 mg) QD, or 20–40 mg/kg (max 900 mg) 2–3×/wk by DOT (US D&A). UK 4.2: ≥3 months 10–15 mg/kg/day; **not for 0–3 months** (no data).<br>**LTBI**: 10 mg/kg (max 300 mg) QD, or 20–30 mg/kg (max 900 mg) twice weekly by DOT (US D&A). CDC 2020: 10–20 mg/kg/day (AAP 10–15) × 6–9 months.<br>**3HP**: 2–11 y INH 25 mg/kg; ≥12 y 15 mg/kg (both max 900 mg) + rifapentine weekly × 12 (Priftin label 2.2; CDC 2020).<br>Children with TB meningitis, miliary or bone/joint TB: 12-month therapy (US D&A, extrapulmonary).

**Why:** The column is empty. The paediatric treatment and preventive doses come from the US label. UK SmPC 4.2 adds the age limit (not for infants aged 0–3 months). The 3HP paediatric doses come from the Priftin label and CDC 2020 Table 4, which I checked in the full text.

**Sources:** US label DOSAGE AND ADMINISTRATION (Treatment, Extra Pulmonary TB, Preventative Therapy) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.2 Paediatric population — https://www.medicines.org.uk/emc/product/14798/smpc; Priftin US label 2.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a64fb70-b85e-43d9-8bcd-7e893f568ae1; CDC/NTCA 2020 Table 4, PMID 32053584 — https://pubmed.ncbi.nlm.nih.gov/32053584/

### A5 · Indications

Tuberculosis, LTBI

**Why:** US Indications: all forms of TB with susceptible organisms (in combination), plus preventive therapy for latent infection. UK 4.1: all forms of pulmonary and extrapulmonary TB. Both tags already exist in the schema. I did not add the NTM tag: M. kansasii use is off-label and only guideline-supported, so it goes in Notes (see A13). The owner may add NTM if guideline-supported off-label tags are wanted, as was done for Meningitis in the linezolid entry.

**Sources:** US label INDICATIONS AND USAGE — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/14798/smpc

### A6 · Coverage

Mycobacteria

**Why:** UK 5.1: no significant antibacterial action against any micro-organisms except Mycobacteria. US Mechanism: bactericidal against actively growing M. tuberculosis. 'Mycobacteria' is an existing schema option.

**Sources:** UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/14798/smpc; US label CLINICAL PHARMACOLOGY 'Mechanism of Action' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b

### A7 · Side Effects

LFT↑, neuropathy, CNS, optic neuropathy, hematologic, anemia, thrombocytopenia, SJS/TEN, DRESS, AGEP, hypersensitivity, autoimmune, GI, dysglycemia, ototoxicity

**Why:** All tags are existing schema options, and each is in a label. LFT↑ and hepatitis: US boxed warning (mild transaminase rise in 10–20%; progressive damage in up to 2.3% of patients over 50). Peripheral neuropathy is the most common toxic effect. CNS: convulsions, toxic encephalopathy, psychosis, cerebellar syndrome. Optic neuropathy: optic neuritis and atrophy. Haematologic: agranulocytosis, haemolytic, sideroblastic or aplastic anaemia, thrombocytopenia. Skin: SCAR (SJS, TEN, DRESS, AGEP) and hypersensitivity (fever, rash, lymphadenopathy, vasculitis). Autoimmune: SLE-like and rheumatic syndrome. GI: nausea, vomiting, pancreatitis. Dysglycemia: hyperglycaemia in the US label, hypoglycaemia also in UK 4.8. Ototoxicity: deafness and tinnitus in ESRD (UK 4.8). Pyridoxine deficiency, pellagra, metabolic acidosis and gynaecomastia have no tag, so they should go in Notes.

**Sources:** US label ADVERSE REACTIONS (Nervous System, Hepatic, GI, Hematologic, Hypersensitivity, Metabolic, Miscellaneous); WARNINGS SCAR/Cerebellar — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.8 — https://www.medicines.org.uk/emc/product/14798/smpc

### A8 · Monitor

LFT, neuro, TDM

**Why:** LFT: the US boxed warning asks for a monthly symptom review for everyone, and AST/ALT at baseline and periodically for age ≥35 and other risk groups. UK 4.4 asks for baseline LFTs for all patients, repeated at regular intervals. Neuro: watch for paresthesias, peripheral neuropathy and cerebellar signs (US boxed warning patient-reporting list; Warnings). TDM: the US label (Pulmonary TB and HIV) says screening of antimycobacterial drug levels may be needed in advanced HIV with malabsorption. Eye exam is optional and not label-mandated. Optic neuritis is listed as uncommon, so I left that tag off.

**Sources:** US label BOXED WARNING; PRECAUTIONS 'Laboratory Tests'; D&A 'Patients with Pulmonary Tuberculosis and HIV Infection' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.4 — https://www.medicines.org.uk/emc/product/14798/smpc

### A9 · Mechanism

Inhibits mycolic acid synthesis → disrupts mycobacterial cell wall. Bactericidal against actively growing intra- and extracellular M. tuberculosis (US); bacteriostatic against semidormant organisms (UK 5.1). Resistance: katG / inhA / kasA / ahpC mutations; emerges rapidly with monotherapy (US). Metabolised by acetylation (genetic polymorphism): t½ ~1.2 h in rapid vs ~3.5 h in slow acetylators (UK 5.2). Slow acetylators have higher levels and more toxicity, but efficacy is unchanged (US Clin Pharm). 乙醯化速率因人而異。Diffuses into all body fluids including CSF (US; UK 5.2).

**Why:** The column is empty. All content is from the labels except the KatG-prodrug wording, which is flagged as unsourced. The owner can drop it.

**Sources:** US label CLINICAL PHARMACOLOGY, Mechanism of Action, Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 5.1, 5.2 — https://www.medicines.org.uk/emc/product/14798/smpc

### A10 · Drug Interactions

**INH inhibits metabolism → ↑ levels/toxicity**: phenytoin; carbamazepine (check levels before co-use; UK: a dose reduction of ½–⅓ was reported effective); valproate; theophylline; primidone; diazepam and triazolam (sedation/respiratory depression); chlorzoxazone; disulfiram. Monitor drug levels and adjust doses (US Precautions; UK 4.5).<br>**Acetaminophen**: severe hepatotoxicity reported (INH induces CYP2E1) (US).<br>**Rifampin + INH**: ↑ hepatotoxicity → monitor LFT closely (rifampin US label; UK 4.5). Other hepatotoxic drugs: additive risk (UK 4.5).<br>**Azoles**: ketoconazole AUC ↓ up to 88% with INH + RIF (US); itraconazole ↓ → co-administration not recommended (UK 4.5).<br>Cycloserine ↑ CNS toxicity; stavudine and other neurotoxic drugs ↑ neuropathy; levodopa effect ↓; propranolol ↓ INH clearance (UK 4.5).<br>**Food**: take on an empty stomach. Tyramine foods (aged cheese, red wine, cured meat, beer) and histamine foods (tuna, skipjack, mackerel) can cause headache, sweating, palpitations, flushing and hypotension through MAO/DAO inhibition (US; UK 4.5). Daily alcohol ↑ hepatitis (US boxed warning).<br>Most ART interactions in TB regimens come from the rifamycin partner. Check those at hiv-druginteractions.org (Liverpool).

**Why:** The column is empty. These are the interactions named in the US label Precautions (acetaminophen, carbamazepine, ketoconazole, phenytoin, theophylline, valproate) plus the additional ones in UK SmPC 4.5. Rifampin co-hepatotoxicity is taken from the rifampin US label. The specialist-drug rule asks for a pointer to the Liverpool checker.

**Sources:** US label PRECAUTIONS Drug Interactions & Food — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.5 — https://www.medicines.org.uk/emc/product/14798/smpc; Rifampin US label Drug Interactions ('Patients receiving both rifampin and isoniazid should be monitored closely for hepatotoxicity') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c; Liverpool HIV interaction checker — https://www.hiv-druginteractions.org

### A11 · Pregnancy

**Use for active TB in pregnancy**: benefit justifies the potential fetal risk; untreated TB is a far greater hazard to mother and fetus (US; UK 4.6). Initial regimen INH + RIF (+ EMB unless INH resistance unlikely); avoid streptomycin (congenital deafness) (US D&A).<br>INH crosses the placenta. Embryocidal in rats and rabbits; not teratogenic in mice, rats or rabbits; no adequate human studies (US).<br>LTBI: weigh benefit vs possible fetal risk; preventive therapy generally started after delivery (US).<br>Hepatitis risk may be ↑ postpartum → closer LFT monitoring (US boxed warning).<br>Pyridoxine supplementation (UK 4.6), 25–50 mg/day (ATS/CDC/IDSA 2016, PMID 27516382). Observe neonates of treated mothers for adverse effects (US).

**Why:** The column is empty. Content is from the US label narrative (not the letter category) and UK SmPC 4.6.

**Sources:** US label PRECAUTIONS Pregnancy (narrative), Nonteratogenic Effects; D&A 'Pregnant Women with Tuberculosis'; BOXED WARNING — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/14798/smpc

### A12 · Breastfeeding

Compatible 可哺乳. Milk levels are low (≈1.2% of the maternal weight-adjusted dose with 300 mg/day), so adverse infant effects are unlikely; monitor the infant for jaundice. Giving the dose before the infant's longest sleep reduces exposure. Milk levels are too low to treat or prevent infant TB. If the infant also receives INH, give the infant pyridoxine 1 mg/kg/day. All nursing mothers on INH should take pyridoxine 25 mg/day. CDC: breastfeeding should not be discouraged (LactMed NBK501336, rev 2024-08-15; US Nursing Mothers). UK 4.6: monitor the infant for INH toxicity; consider pyridoxine for mother and infant.

**Why:** The column is empty. Content is from the LactMed summary and drug-level data, the US label Nursing Mothers section, and UK SmPC 4.6.

**Sources:** LactMed Isoniazid NBK501336 (Summary of Use during Lactation; Drug Levels) — https://www.ncbi.nlm.nih.gov/books/NBK501336/; US label PRECAUTIONS Nursing Mothers — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/14798/smpc

### A13 · Notes

⚠️ **BOXED WARNING – severe, sometimes fatal hepatitis** 肝炎黑框警語. Can occur even after many months; usually in the first 3 months. Risk rises with age: <1/1,000 under 20 y, 3 at 20–34 y, 12 at 35–49 y, 23 at 50–64 y, 8 over 65 y. Also ↑ with daily alcohol, chronic liver disease, injection drug use, and in women (esp. Black/Hispanic) and postpartum. Review symptoms monthly; for age ≥35, check AST/ALT at baseline and periodically. Stop promptly if anorexia, nausea, vomiting, dark urine, jaundice, rash, persistent paresthesia, fatigue or fever >3 d, or RUQ pain appear (US boxed warning).<br>**SCAR** (SJS, TEN, DRESS, AGEP) → stop immediately. **Cerebellar syndrome** (ataxia, dysarthria, nystagmus; mostly in CKD) → stop (US Warnings).<br>Contraindications 禁忌: prior INH hepatic injury, severe hypersensitivity or severe ADR (drug fever, chills, arthritis), acute liver disease (US; UK 4.3).<br>**Pyridoxine (B6)** for patients who are malnourished, diabetic, alcoholic, uraemic, pregnant, breastfeeding or HIV-positive (US D&A; UK 4.4); 25–50 mg/day (ATS/CDC/IDSA 2016, PMID 27516382). Other ADRs with no tag: pyridoxine deficiency, pellagra, metabolic acidosis, gynaecomastia (US).<br>Use with caution in seizure disorder or a history of psychosis (UK 4.4).<br>Never use as monotherapy for active TB; resistance emerges rapidly. Exclude active TB before starting LTBI therapy (US).<br>**Overdose**: seizures, metabolic acidosis, coma. Give IV pyridoxine gram-for-gram equal to the INH dose (5 g in adults / 80 mg/kg in children if the amount is unknown) (US Overdosage).<br>**Off-label NTM**: RIF-susceptible M. kansasii pulmonary disease, RIF + EMB + either INH or a macrolide (conditional recommendation; ATS/ERS/ESCMID/IDSA 2020, PMID 32628747).<br>Stocked forms: ISO06 Isoniazide 100 mg tab (異菸鹼醯胼錠, NHI NC001641G0); ISO07 公費 INAH 300 mg tab (ADC dispensing, mainly LTBI). Oral only; no IM/IV product stocked. Taiwan 仿單 not found (licence number not listed on hospital site).

**Why:** The column is empty. The ground rules require the isoniazid hepatitis boxed warning in Notes. Everything else is label-sourced except the flagged items: the B6 dose and the NTM regimen, whose guideline PMID is verified but whose full text I could not retrieve.

**Sources:** US label BOXED WARNING, CONTRAINDICATIONS, WARNINGS, D&A, OVERDOSAGE — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.3, 4.4 — https://www.medicines.org.uk/emc/product/14798/smpc; Daley CL et al. ATS/ERS/ESCMID/IDSA NTM guideline, Clin Infect Dis 2020;71:e1-e36, PMID 32628747 (verified) — https://pubmed.ncbi.nlm.nih.gov/32628747/

### A14 · Page body

Add a monograph body in the style of existing entries: '## **ISONIAZID (INAH) - Complete Monograph**', starting with a callout for the boxed hepatitis warning. Then H3 sections for Category, Mechanism, Indications (FDA/UK-approved: all forms of TB in combination; LTBI/preventive therapy; Off-label: RIF-susceptible M. kansasii, RIF + EMB + INH or macrolide, PMID 32628747), Coverage, Adult Dose, Renal Dose/HD/CRRT, Hepatic Dose, Pediatric Dose, Side Effects, Monitor, Drug Interactions, Pregnancy, Breastfeeding and Notes, filled from the final A1–A13 text. Then a Brief Summary Table and References: US label setid 6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC eMC 14798 (rev 12/02/2019); LactMed NBK501336 (2024-08-15); Priftin label setid 3a64fb70-b85e-43d9-8bcd-7e893f568ae1; Nahid 2016 PMID 27516382; Sterling 2020 PMID 32053584; CDC 3HP update 2018 PMID 29953429; Saukkonen 2006 PMID 17021358; Daley 2020 PMID 32628747. Add the line 'Taiwan 仿單 pending — licence no. needed for ISO06/ISO07'. No storage/stability content.

**Why:** Every other populated entry has a full monograph body with references; this new entry has none.

**Sources:** US label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC — https://www.medicines.org.uk/emc/product/14798/smpc; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK501336/

### A15 · Renewed date

Set to the date the reviewed content is written (e.g., 2026-10-06)

**Why:** Other reviewed entries (e.g., Zyvox) have a Renewed date set when verified content is written.

**Sources:** Notion data source schema collection://20dc496d-fff1-8035-b493-000b15564193 (Renewed date property)

### B1 · Adult dose

<span color="blue">`PO`</span> only. Take on an empty stomach, ≥30 min before or 2 h after a meal; swallow whole (UK SmPC 4.2; US: do not give with food, bioavailability ↓).<br>Active TB, ALWAYS in combination (monotherapy → rapid resistance, US label): 5 mg/kg QD, max 300 mg (US label; UK SmPC 4.2: 4–5 mg/kg/d, max 300 mg), or 15 mg/kg, max 900 mg, 2–3×/wk by DOT (US label; SmPC 15 mg/kg 2–3×/wk).<br>ATS/CDC/IDSA 2016 (PMID 27516382): standard regimen 2HRZE → 4HR. Intensive phase: daily preferred; TIW only if HIV-negative and low relapse risk. Continuation phase: daily or TIW. Twice-weekly is not generally recommended. Once-weekly INH 900 mg + rifapentine 600 mg continuation is recommended against, except in uncommon situations in HIV-negative, non-cavitary patients. The US label's three 1990s regimen options are outdated.<br>TB meningitis: up to 10 mg/kg/d during the first 1–2 weeks (UK SmPC 4.2).<br>LTBI: US label 300 mg QD (adult >30 kg). CDC/NTCA 2020 (PMID 32053584): 3HP / 4R / 3HR preferred; 6H or 9H (5 mg/kg QD, max 300 mg, or 15 mg/kg 2×/wk DOT, max 900 mg) are alternatives. 3HR = INH 5 mg/kg (300 mg) + RIF 10 mg/kg (600 mg) QD × 3 months.<br>3HP (≥12 y): INH 15 mg/kg rounded up to the nearest 50/100 mg (max 900 mg) + rifapentine (weight-banded, 900 mg if >50 kg) once weekly × 12 doses (Priftin label 2.2). CDC 2018 (PMID 29953429): by DOT or SAT.<br>Pyridoxine (B6) for patients at risk of neuropathy (US D&A; SmPC 4.4; ATS 2016). Usual dose 25–50 mg/d (ATS 2016).<br>Stocked: Isoniazide 100 mg tab (ISO06) / 公費 INAH 300 mg tab (ISO07, mainly LTBI)

**Why:** The column is empty. Doses were re-verified against the source text: US DOSAGE AND ADMINISTRATION ('Adults 5 mg/kg up to 300 mg daily...; or 15 mg/kg up to 900 mg/day, two or three times/week'; preventive 'Adults over 30 kg: 300 mg per day'), and UK SmPC 4.2 (4–5 mg/kg, max 300 mg; 10 mg/kg in TBM; 15 mg/kg intermittent; empty stomach). The guideline layer covers current regimen choice, which the labels do not.

**Sources:** DailyMed isoniazid tablet, DOSAGE AND ADMINISTRATION / For Treatment of Tuberculosis / For Preventative Therapy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.2 Posology: https://www.medicines.org.uk/emc/product/14798/smpc; Nahid P et al. ATS/CDC/IDSA DS-TB guideline, Clin Infect Dis 2016;63:e147 (PMID 27516382, esummary-verified): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Sterling TR et al. LTBI guidelines NTCA/CDC 2020, MMWR Recomm Rep 69(1):1-11 (PMID 32053584, verified); Borisov AS et al. 3HP update, MMWR 2018;67:723 (PMID 29953429, verified)

### B2 · Renal dose, HD, CRRT

No dose adjustment in either label (INH is cleared mainly by hepatic acetylation). ATS 2016: 'RIF and INH are metabolized by the liver, and conventional dosing can be used in the setting of renal insufficiency.' US label: monitor carefully in severe renal dysfunction. UK SmPC 4.4: caution in impaired kidney function, with no dose change in 4.2.<br>CrCl <30 / HD: 300 mg QD or 900 mg TIW, unchanged (ATS 2016 Table 12, PMID 27516382) [flag: table not retrievable as text — confirm]. Give after HD on dialysis days to facilitate DOT (ATS 2016). INH is not significantly removed by HD (median ≈9% of dose recovered in dialysate; Malone 1999, PMID 10228130; ATS: 'cleared to some degree'), so no supplemental dose is routinely needed.<br>PD: little PK data. Consider serum levels before and after PD (ATS 2016).<br>CRRT: no label or PK data. The usual 300 mg QD is generally used because clearance is non-renal [flag: extrapolation]. Consider TDM.<br>CKD/uraemia: give pyridoxine (ATS 2016; SmPC 4.4). Cerebellar syndrome (ataxia, dysarthria, nystagmus) has been reported mostly in CKD; stop INH if it occurs (US WARNINGS). Deafness/tinnitus/vertigo have been reported in ESRD (SmPC 4.8).

**Why:** The column is empty. The labels have no renal table. US PRECAUTIONS list 'severe renal dysfunction' as a group to monitor carefully, and SmPC 4.2 gives no adjustment. ATS 2016 supplies the HD/CrCl<30 guidance. Note: the brief implies HD removal matters. The Malone 1999 abstract (efetch) states 'INH, RIF, and EMB were not significantly removed by hemodialysis', so post-HD dosing is for DOT convenience, not replacement. No CRRT data were found in PubMed (esearch 'isoniazid[ti] AND CRRT/CVVH/hemodiafiltration' returned only an overdose case), so the CRRT line is flagged as extrapolation.

**Sources:** DailyMed isoniazid, PRECAUTIONS General ('Patients with active chronic liver disease or severe renal dysfunction') and WARNINGS Cerebellar Syndrome: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.2, 4.4, 4.8 (Ear & labyrinth: ESRD): https://www.medicines.org.uk/emc/product/14798/smpc; Nahid 2016 ATS/CDC/IDSA, Renal Disease section + Table 12 (PMID 27516382): https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Malone RS et al. Am J Respir Crit Care Med 1999;159:1580 (PMID 10228130, verified)

### B3 · Hepatic dose

No dose-adjustment schedule in any label.<br>禁忌 (US): acute liver disease of any cause; prior INH-associated hepatic injury; severe hypersensitivity including drug-induced hepatitis; prior severe INH reaction (drug fever, chills, arthritis). UK SmPC 4.3: prior severe ADR including DILI.<br>Stop rules: US boxed warning: stop promptly if symptoms or signs of hepatitis appear; if LFT >3–5× ULN, strongly consider stopping. UK SmPC 4.4: AST >3× normal or ANY rise in bilirubin → withdraw; in pre-existing liver impairment, any deterioration → stop. ATS 2016: ALT ≥3× ULN with symptoms or ≥5× ULN without symptoms → stop hepatotoxic drugs.<br>Advanced liver disease or baseline ALT >3× ULN not due to TB: choose regimens with fewer hepatotoxic drugs, but keep INH and especially RIF if at all possible; get expert consultation (ATS 2016, PMID 27516382; ATS hepatotoxicity statement 2006, PMID 17021358).<br>Rechallenge only after symptoms and labs clear, using very small, gradually increasing doses (US).<br>Defer LTBI therapy in acute hepatic disease (US).

**Why:** The column is empty. Content is from the US boxed WARNING and CONTRAINDICATIONS, SmPC 4.3/4.4, and the ATS 2016 'Hepatic Disease' and 'Hepatotoxicity' passages (read on the idsociety.org page). The stop thresholds differ between sources, so all are listed.

**Sources:** DailyMed isoniazid, Boxed WARNING, CONTRAINDICATIONS, Laboratory Tests: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.3/4.4: https://www.medicines.org.uk/emc/product/14798/smpc; Nahid 2016 (PMID 27516382), Hepatic Disease and Hepatotoxicity sections: https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/; Saukkonen JJ et al. ATS statement: hepatotoxicity of antituberculosis therapy, AJRCCM 2006;174:935 (PMID 17021358, verified)

### B4 · Pediatric dose

<span color="blue">`PO`</span><br>Active TB: 10–15 mg/kg QD (max 300 mg), or 20–40 mg/kg (max 900 mg) 2–3×/wk by DOT (US label). UK SmPC 4.2: ≥3 months, 10–15 mg/kg/d. Do not use at 0–3 months (no specific data, SmPC). Adolescents ≥15 y or >40 kg → adult dosing [flag: ATS 2016 table, not verified as text].<br>Miliary, bone/joint TB and TB meningitis in infants/children: 12 months of therapy (US label).<br>LTBI: US label 10 mg/kg QD (max 300 mg), or 20–30 mg/kg (max 900 mg) twice weekly by DOT. CDC 2020 (PMID 32053584) 6H/9H: 10–20 mg/kg QD (max 300 mg) or 20–40 mg/kg 2×/wk (max 900 mg).<br>3HP (≥2 y): 2–11 y 25 mg/kg, ≥12 y 15 mg/kg, once weekly × 12, max 900 mg, rounded up to the nearest 50/100 mg, + weight-banded rifapentine (Priftin label 2.2; CDC 2018, PMID 29953429).<br>Pyridoxine: 25–50 mg/d for children with nutritional deficiency, symptomatic HIV, or who are breastfeeding (ATS 2016). Breastfed infants of mothers on INH: AAP 1–2 mg/kg/d (ATS 2016); LactMed 1 mg/kg/d if the infant also takes INH.

**Why:** The column is empty. Re-verified: US label 'Children 10 mg/kg to 15 mg/kg up to 300 mg daily...; or 20 mg/kg to 40 mg/kg up to 900 mg/day, two or three times/week'. The brief listed only the preventive-therapy paediatric dose and omitted this treatment dose. SmPC 4.2 gives ≥3 months 10–15 mg/kg and no use at 0–3 months.

**Sources:** DailyMed isoniazid, DOSAGE AND ADMINISTRATION and Patients with Extra Pulmonary Tuberculosis: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.2 Paediatric population: https://www.medicines.org.uk/emc/product/14798/smpc; Sterling 2020 (PMID 32053584); Borisov 2018 (PMID 29953429); Nahid 2016 (PMID 27516382)

### B5 · Indications

["Tuberculosis","LTBI"]

**Why:** US INDICATIONS: 'all forms of tuberculosis in which organisms are susceptible' plus 'preventive therapy'. UK SmPC 4.1: all forms of pulmonary and extra-pulmonary TB. NTM (M. kansasii) is guideline-supported but not in either label, so under the approval rule it goes in Notes, not as a tag (same practice as the moxifloxacin entry, whose off-label TB use is in Notes).

**Sources:** DailyMed isoniazid, INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.1: https://www.medicines.org.uk/emc/product/14798/smpc

### B6 · Coverage

["Mycobacteria"]

**Why:** UK SmPC 5.1: 'no significant antibacterial action against any micro-organisms except the Mycobacteria'. The US label states INH is bactericidal against actively growing M. tuberculosis.

**Sources:** UK SmPC 5.1: https://www.medicines.org.uk/emc/product/14798/smpc; DailyMed isoniazid, Mechanism of Action: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b

### B7 · Side Effects

["LFT↑","neuropathy","CNS","optic neuropathy","GI","hematologic","anemia","thrombocytopenia","SJS/TEN","DRESS","AGEP","hypersensitivity","autoimmune","dysglycemia","ototoxicity"]

**Why:** Mapped to existing options from the US ADVERSE REACTIONS: hepatitis and transaminase rise in 10–20%; peripheral neuropathy (most common toxic effect); convulsions, encephalopathy, psychosis, cerebellar syndrome; optic neuritis/atrophy; nausea, vomiting, pancreatitis; agranulocytosis, haemolytic/sideroblastic/aplastic anaemia, thrombocytopenia; SJS/TEN/DRESS/AGEP; fever and rash; SLE-like/rheumatic syndrome; hyperglycaemia (plus hypoglycaemia in SmPC 4.8). Pellagra, gynaecomastia and interstitial lung disease have no tag, so they go in Notes.

**Sources:** DailyMed isoniazid, ADVERSE REACTIONS and WARNINGS (SCAR): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.8: https://www.medicines.org.uk/emc/product/14798/smpc

### B8 · Monitor

["LFT","neuro"]

**Why:** US boxed warning: monthly symptom review for everyone. AST/ALT at baseline and periodically if ≥35 y or at risk (alcohol, chronic liver disease, IDU, postpartum). UK SmPC 4.4: baseline LFT in ALL patients, repeated regularly. Neuro: watch for paraesthesia/neuropathy and cerebellar signs (US Warnings). TDM is optional (ATS 2016 'specialized tool') and is mentioned in Notes rather than tagged. Eye exam is not routine for INH: ATS 2016 says stop INH only if EMB-related vision loss does not resolve.

**Sources:** DailyMed isoniazid, Boxed WARNING and Laboratory Tests: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.4: https://www.medicines.org.uk/emc/product/14798/smpc; Nahid 2016 (PMID 27516382), TDM and Optic Neuritis sections

### B9 · Mechanism

Inhibits mycolic acid synthesis → disrupts the mycobacterial cell wall. Bactericidal against actively growing intra- and extracellular M. tuberculosis (US label); bacteriostatic against semidormant organisms (UK SmPC 5.1).<br>Resistance: katG, inhA, kasA, ahpC mutations; develops rapidly with monotherapy (US label).<br>Metabolised by acetylation (genetic polymorphism): t½ ≈1.2 h in rapid vs ≈3.5 h in slow acetylators (SmPC 5.2). Slow acetylators have higher levels and more toxicity (US Clin Pharm). Crosses into CSF.

**Why:** The column is empty. All text comes from the US Mechanism of Action, Resistance and Clinical Pharmacology sections and SmPC 5.1/5.2. I deliberately left out details such as KatG prodrug activation and inhA→ethionamide cross-resistance because no label in the hierarchy states them.

**Sources:** DailyMed isoniazid, CLINICAL PHARMACOLOGY / Mechanism of Action / Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 5.1/5.2: https://www.medicines.org.uk/emc/product/14798/smpc

### B10 · Drug Interactions

Hepatotoxicity ↑: rifampicin (standard combination, transient LFT rise; SmPC 4.5), other hepatotoxic drugs, daily alcohol (US boxed). Acetaminophen: severe toxicity reported (INH induces CYP2E1; US).<br>INH raises levels of: phenytoin (esp. slow acetylators; adjust dose during and after INH), carbamazepine (with INH ≥200 mg/d; check levels, reduce dose by 1/2–1/3), valproate, theophylline (monitor levels), diazepam/triazolam (sedation, respiratory depression), primidone, chlorzoxazone, disulfiram (US label; SmPC 4.5).<br>INH lowers: ketoconazole (with INH + RIF, AUC ↓ up to 88%) and itraconazole (co-administration not recommended); ↓ levodopa effect (SmPC 4.5).<br>Additive CNS/neurotoxicity with cycloserine and stavudine. Propranolol ↓ INH clearance; PAS ↑ INH levels (SmPC 4.5).<br>Food ↓ absorption. Tyramine/histamine-rich foods (aged cheese, wine, tuna/skipjack/mackerel) → headache, flushing, palpitations, hypotension (MAO/DAO inhibition).<br>ART: INH itself has few ART interactions, but its 3HP/HR partners (rifapentine/rifampicin) do. Check https://www.hiv-druginteractions.org

**Why:** The column is empty. Sources are the six US interactions (acetaminophen, carbamazepine, ketoconazole, phenytoin, theophylline, valproate), the US Food section, and the longer SmPC 4.5 list. Following the specialist-drug rule, the Liverpool checker is linked for ART. The hiv-druginteractions.org URL was not reachable from this sandbox (proxy 403), so it is cited as given in the task.

**Sources:** DailyMed isoniazid, PRECAUTIONS Food / Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.5: https://www.medicines.org.uk/emc/product/14798/smpc; Liverpool HIV interaction checker: https://www.hiv-druginteractions.org

### B11 · Pregnancy

Use for active TB when indicated: untreated TB is a far greater hazard to mother and fetus (UK SmPC 4.6; US). ATS 2016: start treatment when the probability of maternal TB is moderate to high; first-line anti-TB drugs do not appear teratogenic in humans. US D&A: initial regimen INH + RIF (+ EMB); avoid streptomycin.<br>Crosses the placenta. Animals: embryocidal in rats/rabbits, not teratogenic in mice/rats/rabbits (US label).<br>LTBI: weigh benefit vs fetal risk; the US label suggests preventive therapy generally starts after delivery.<br>Hepatitis risk may be ↑ postpartum (US boxed warning), and pregnancy is listed among groups to monitor carefully (US Precautions) → closer LFT monitoring.<br>Pyridoxine 25–50 mg/d (ATS 2016; SmPC 4.6 recommends supplementation). Observe neonates of treated mothers for adverse effects (US).

**Why:** The column is empty. The US label still carries a 'Pregnancy Category C' heading. Under the ground rules this must not be quoted as current; ATS 2016 itself calls it the 'previous FDA letter-based classification'. The narrative content is from the US label, SmPC 4.6 and ATS 2016 'Pregnancy and Breastfeeding' (read on idsociety.org).

**Sources:** DailyMed isoniazid, Pregnancy / Nonteratogenic Effects / Boxed WARNING: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/14798/smpc; Nahid 2016 (PMID 27516382), Pregnancy and Breastfeeding: https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

### B12 · Breastfeeding

Compatible ✅. Milk levels are low (a fully breastfed infant gets ≈1.2% of the maternal weight-adjusted dose). Monitor the infant for jaundice (rare). Giving the daily dose before the infant's longest sleep lowers exposure (LactMed 2024).<br>Milk levels are insufficient to treat or prevent TB in the infant (LactMed; US label).<br>If the infant also takes INH, add pyridoxine 1 mg/kg/d. Mother takes pyridoxine (LactMed 25 mg/d; ATS 2016 25–50 mg/d).<br>US label and CDC: breastfeeding should not be discouraged. UK SmPC 4.6: monitor the infant for INH toxicity and consider pyridoxine for mother and infant.

**Why:** The column is empty. LactMed summary verified. The 1.2% figure is Singh 2008 as cited in LactMed Drug Levels. Higher RID values (12–16%) come only from peak-concentration overestimates at 900 mg dosing, which LactMed itself labels as overestimates.

**Sources:** LactMed Isoniazid NBK501336 (rev 2024-08-15), Summary of Use / Drug Levels: https://www.ncbi.nlm.nih.gov/books/NBK501336/; DailyMed isoniazid, Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/14798/smpc

### B13 · Notes

⚠️ US BOXED WARNING: severe, sometimes fatal hepatitis, possibly after many months. Risk is age-related (<1/1000 <20 y; 3/1000 20–34 y; 12/1000 35–49 y; 23/1000 50–64 y; 8/1000 >65 y) and ↑ with daily alcohol, chronic liver disease, IDU, women (esp. Black/Hispanic) and postpartum. Usually within the first 3 months. Review symptoms monthly; check AST/ALT at baseline and periodically if ≥35 y. Stop promptly if hepatitis symptoms appear (anorexia, nausea, vomiting, dark urine, jaundice, rash, persistent paresthesia, RUQ pain, fever >3 d).<br>肝炎加框警語: 服藥期間每月追蹤症狀；≥35 歲監測肝功能.<br>Active TB: never use INH as monotherapy (US). Exclude active TB before starting LTBI therapy (US). Stop immediately for SCAR (SJS/TEN/DRESS/AGEP) or cerebellar syndrome (US WARNINGS). Use with caution in seizure disorder or a history of psychosis (SmPC 4.4).<br>Pyridoxine (B6) for patients at risk of neuropathy: pregnancy, breastfeeding, HIV, DM, alcoholism, malnutrition, CKD, elderly (ATS 2016; SmPC 4.4). Pellagra/niacin deficiency, gynaecomastia and interstitial lung disease have been reported (SmPC 4.8; no tag).<br>Overdose (>80 mg/kg): refractory seizures, metabolic acidosis, coma → IV pyridoxine gram-for-gram (5 g adult / 80 mg/kg child if the amount is unknown) (US label).<br>TDM: 2-h and 6-h serum levels in selected cases (slow response, malabsorption/DM gastroparesis, HIV, interacting drugs, ESRD) (ATS 2016, PMID 27516382).<br>INH-resistant TB (no tag): inhA-mutant strains respond to high-dose INH 10–15 mg/kg/d with EBA similar to standard dose vs susceptible strains (Dooley 2020, PMID 31945300); high dose lacks EBA vs katG mutants (Gausi 2024, PMID 38564365). Hr-TB: 6 months RIF-EMB-PZA + levofloxacin (ATS/CDC/ERS/IDSA 2019, PMID 31729908).<br>NTM (off-label, no tag): rifampicin-susceptible M. kansasii, RIF + EMB + (INH or macrolide) (ATS/ERS/ESCMID/IDSA 2020, PMID 32628747) [flag: full text not retrieved — confirm].<br>Stock: Isoniazide 100 mg tab (ISO06; NHI NC001641G0) / 公費 INAH 300 mg tab (ISO07, ADC 調劑, mainly LTBI). Taiwan 仿單 not found (no licence no. on the hospital site).

**Why:** The column is empty. The boxed warning is mandatory in Notes under the specialist-drug rule, and the rates are re-verified from the US WARNING text. Guideline items (TDM, resistance-specific dosing, NTM) are outside the labels, and every PMID was checked with esummary. I could not verify the WHO consolidated guidelines or Taiwan CDC 結核病診治指引 URLs (who.int and cdc.gov.tw returned proxy 403), so neither is cited.

**Sources:** DailyMed isoniazid, Boxed WARNING, WARNINGS, OVERDOSAGE, DOSAGE (pyridoxine): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC 4.4/4.8: https://www.medicines.org.uk/emc/product/14798/smpc; Nahid 2016 (PMID 27516382); Dooley KE et al. AJRCCM 2020;201:1416 (PMID 31945300, verified); Gausi K et al. AJRCCM 2024 (PMID 38564365, verified); Nahid P et al. DR-TB guideline AJRCCM 2019;200:e93 (PMID 31729908, verified); Daley CL et al. NTM guideline CID 2020;71:e1 (PMID 32628747, verified)

### B14 · Page body

Add a page body in the style of existing entries (e.g. Zyvox): open with a callout for the US boxed warning on hepatitis. Then add concise H3 sections mirroring the columns (Category, Mechanism, Indications [label: all forms of TB in combination; preventive therapy/LTBI; off-label: M. kansasii, flagged], Doses, Renal/Hepatic, Monitoring, Interactions, Pregnancy/Lactation, Notes). End with a References list: DailyMed setid 6dab7b7b-a3a9-47ef-b423-134bc6970d8b; UK SmPC emc 14798 (rev 12/02/2019); LactMed NBK501336 (2024-08-15); Priftin label setid 3a64fb70-b85e-43d9-8bcd-7e893f568ae1; ATS/CDC/IDSA 2016 PMID 27516382; NTCA/CDC LTBI 2020 PMID 32053584; CDC 3HP 2018 PMID 29953429; ATS hepatotoxicity 2006 PMID 17021358; Malone 1999 PMID 10228130; Daley 2020 PMID 32628747. Note: 'Taiwan 仿單 pending — licence no. needed for ISO06/ISO07'. No storage/stability content.

**Why:** No label content requires a body; the citations already sit in the columns. This is a low-priority traceability suggestion only.

**Sources:** As listed in B1–B13

## Apply log

- Adult dose: A and B versions merged (PO 100 mg ISO06 / 300 mg ISO07; empty stomach; active TB per US label, UK SmPC and ATS 2016; LTBI 6H/9H, 3HP, 3HR; pyridoxine)
- Renal dose, HD, CRRT: merged (no label adjustment; CrCl<30/HD conventional dosing, given after HD; Malone 1999 ~9% removed by HD; PD; CRRT flagged as extrapolation; CKD cautions; overdose dialysis)
- Hepatic dose: merged (contraindications; US/UK/ATS stop rules; advanced liver disease approach; defer LTBI; rechallenge)
- Pediatric dose: merged (active TB, UK not for 0-3 months, adolescent flag, 12-month extrapulmonary therapy, LTBI US/CDC, 3HP, pyridoxine)
- Indications: [Tuberculosis, LTBI]
- Coverage: [Mycobacteria]
- Side Effects: [LFT↑, neuropathy, CNS, optic neuropathy, GI, hematologic, anemia, thrombocytopenia, SJS/TEN, DRESS, AGEP, hypersensitivity, autoimmune, dysglycemia, ototoxicity]
- Monitor: [LFT, neuro, TDM] (union of A and B)
- Mechanism: merged (mycolic acid synthesis, bactericidal/bacteriostatic, resistance genes, acetylator t½, CSF penetration, Chinese note)
- Drug Interactions: merged (CYP inhibition list, hepatotoxicity incl. rifampicin/acetaminophen/alcohol, azoles, cycloserine/stavudine/levodopa/propranolol/PAS, tyramine/histamine food, ART via Liverpool link)
- Pregnancy: merged (no letter category; ATS 2016, US D&A regimen, animal data, LTBI after delivery, postpartum hepatitis, pyridoxine)
- Breastfeeding: merged (LactMed 2024 ≈1.2%, infant/maternal pyridoxine, US/CDC/UK statements)
- Notes: merged (boxed hepatitis warning with age-risk table and Chinese notes, SCAR/cerebellar, contraindications, monotherapy, pyridoxine risk groups, untagged ADRs, overdose, TDM, INH-resistant TB/Hr-TB, off-label M. kansasii, stocked ISO06/ISO07, Taiwan 仿單 not found)
- Page body: added the Complete Monograph in the Zyvox style, with a boxed-warning callout, H3 sections from Category through Notes, a Brief Summary Table, the line 'Taiwan 仿單 pending — licence no. needed for ISO06/ISO07' and no storage/stability content
- References section added at the end of the body: US label setid 6dab7b7b…, UK SmPC eMC 14798 (rev 12/02/2019), LactMed NBK501336 (2024-08-15), Priftin setid 3a64fb70…, Rifampin setid 50f706f9…, PMIDs 27516382, 32053584, 29953429, 17021358, 10228130, 32628747, 31729908, 31945300, 38564365, Liverpool checker
- Renewed date: set to 2026-10-06 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-06.
