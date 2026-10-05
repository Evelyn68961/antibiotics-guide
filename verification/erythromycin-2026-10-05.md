# New entry: Erythromycin

- **Notion entry:** [Erythromycin](https://app.notion.com/3f0c496dfff181e28c16e9242e9410bf). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** ERY03 (Erythromycin estolate cap 250 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/erythromycin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH ERY03 = Erythromycin (estolate) 250 mg capsule, 紅黴素膠囊 (藥包 Erythromycin 膠囊 250 mg), ATC J01FA01, NHI AC00106100, imprint KDM-EE 250. TW product: "健喬"紅黴素膠囊250毫克 / ERYTHROMYCIN CAPSULES 250MG "SYNMOSA", 衛署藥製字第000106號 (erythromycin estolate eq. 250 mg base; 藥商 健喬信元, 製造 政德製藥). I re-fetched the TFDA insert (v3, 113/05/31) and it matches the saved text and the imprint. A hospital keyword search for "Erythromycin" returns only ERY03, and codes ERY01/02/04/05 do not exist, so the single PO capsule is the only stocked form. The Notion page (created 2026-10-05) has only Abx = "Erythromycin" and Category = "Macrolide". Every other column and the page body are empty. Comparators: US DailyMed Dr. Reddy's erythromycin DR capsule (base), setid a2dcb48a-212c-1b0c-ec35-ee2ade85847f v2 (no US estolate label exists); UK eMC Erythromycin 250 mg gastro-resistant tablets (product 10659, rev 13/05/2025); LactMed NBK501217 (rev 2024-11-15).

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 250 mg cap (estolate ≡ 250 mg base)<br>TW 仿單: 1 cap q4–6h; severe infection → double dose.<br>US label: 250 mg q6h (or 500 mg q12h; BID not recommended if >1 g/day); up to 4 g/day by severity. UK SmPC: 2 g/day divided; up to 4 g/day if severe.<br>• Strep pharyngitis / 1° rheumatic fever prevention (PCN-allergic): ≥10 days<br>• Rheumatic fever 2° prophylaxis: 250 mg BID<br>• Chlamydia (urethral/endocervical/rectal; non-pregnant, tetracycline CI/intolerant): 500 mg QID ×≥7 d<br>• NGU (Ureaplasma; tetracycline CI/intolerant): 500 mg QID ×≥7 d<br>• Legionnaires': 1–4 g/day divided (optimal dose not established; limited data)<br>• Intestinal amebiasis: 250 mg QID ×10–14 d<br>• Pertussis (CDC 2005): 2 g/day ÷ QID ×14 d

**Why:** The column is empty. Dosing comes from the stocked product's TW insert, with the US label and UK SmPC values alongside. The indication-specific regimens are the US label's sub-sections. The pertussis adult regimen is not in either label, so it is cited to the CDC 2005 guideline (PMID 16340941, verified with esummary; full text not fetched because cdc.gov returns 403 from this sandbox, so the reviewer should confirm 2 g/day ×14 d). I omitted the label's primary-syphilis regimen (30–40 g over 10–15 days) because it is outdated; it is only mentioned in Notes. The PID regimen is omitted because it starts with IV lactobionate, which is not stocked.

**Sources:** TW 仿單 §3 用法用量: 通常成人每4-6小時一粒，嚴重感染可加倍劑量服用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; US DailyMed DOSAGE AND ADMINISTRATION (Adults; Streptococcal infections; Intestinal amebiasis; Legionnaires' disease; Urogenital infections...Chlamydia; Nongonococcal urethritis) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.2 — https://www.medicines.org.uk/emc/product/10659/smpc; CDC 2005 pertussis guideline, MMWR Recomm Rep 54(RR-14):1-16, PMID 16340941 — https://pubmed.ncbi.nlm.nih.gov/16340941/

### A2 · Renal dose, HD, CRRT

No adjustment (US label, UK SmPC; TW 仿單 無資訊).<br>HD / PD: not removed (US label) → no supplemental dose.<br>CRRT: no data.<br>⚠️ Reversible hearing loss reported chiefly in renal insufficiency or high doses.

**Why:** The column is empty. No label gives a renal dose adjustment. The US label says twice that erythromycin is not removed by HD or PD. Both the US label and the UK SmPC tie ototoxicity to renal insufficiency. Urinary excretion is under 5%.

**Sources:** US DailyMed CLINICAL PHARMACOLOGY ('Erythromycin is not removed by peritoneal dialysis or hemodialysis'; '<5 percent...recovered...in the urine') and OVERDOSAGE; ADVERSE REACTIONS ('reversible hearing loss occurring chiefly in patients with renal insufficiency') — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.2 (no renal adjustment), 4.8 footnote *** — https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §11 藥物動力學特性: 目前尚無資訊

### A3 · Hepatic dose

No specific adjustment in any label. Mainly hepatic/biliary excretion → use with caution in hepatic impairment or with other hepatotoxic drugs (US PRECAUTIONS; UK 4.4).<br>Hepatocellular and/or cholestatic hepatitis ± jaundice reported with oral erythromycins (US WARNINGS; UK 4.4/4.8).<br>Prior erythromycin liver injury: avoid any erythromycin salt or use only with careful monitoring (cross-reaction estolate ↔ ethylsuccinate; Keeffe 1982, PMID 6980110).

**Why:** The column is empty. The US Precautions/Warnings and SmPC 4.4 give caution only, with no dose. The cross-reactivity statement is supported by a case report whose abstract says 'all erythromycin preparations should be avoided or used only with careful monitoring in patients with previous erythromycin-associated liver injury' (PMID verified).

**Sources:** US DailyMed PRECAUTIONS General ('principally excreted by the liver, caution...impaired hepatic function') and WARNINGS Hepatotoxicity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.4 — https://www.medicines.org.uk/emc/product/10659/smpc; Keeffe EB et al. Dig Dis Sci 1982;27:701-4, PMID 6980110 — https://pubmed.ncbi.nlm.nih.gov/6980110/

### A4 · Pediatric dose

<span color="blue">`PO`</span> US label: 30–50 mg/kg/day in divided doses; severe → may double.<br>• Pertussis: 40–50 mg/kg/day divided ×5–14 d (US); CDC 2005: ÷QID ×14 d, max 2 g/day; <1 month: azithromycin preferred (IHPS)<br>• Intestinal amebiasis: 30–50 mg/kg/day divided ×10–14 d<br>UK SmPC: >8 y = adult dose (2 g/day, ≤4 g); 2–8 y 1 g/day; infants 500 mg/day (divided; double if severe); suspension preferred in young children.<br>TW 仿單: 依年齡、症狀酌量遞減.<br>250 mg capsule only (no liquid stocked) → not practical for small children.<br>⚠️ IHPS (pyloric stenosis): risk highest with exposure in the first 14 days of life (~2.6%, UK 4.4).

**Why:** The column is empty. Values come from US D&A (Children, Pertussis, Intestinal amebiasis), SmPC 4.2 and the TW insert. The IHPS figure is from SmPC 4.4, and the US label carries the same IHPS warning. The CDC 14-day pertussis course is cited to PMID 16340941 (verified).

**Sources:** US DailyMed DOSAGE AND ADMINISTRATION (CHILDREN; Pertussis; Intestinal amebiasis); PRECAUTIONS General (IHPS) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.2, 4.4 Paediatric population — https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §3; CDC 2005 pertussis, PMID 16340941 — https://pubmed.ncbi.nlm.nih.gov/16340941/

### A5 · Indications

Pneumonia, CAP, SSTI, Pelvic, Surgical prophylaxis, Osteoarthritis

**Why:** These are the existing options that labels support. Pneumonia/CAP: US lists LRTI (S. pneumoniae, S. pyogenes), Mycoplasma and Legionnaires', and SmPC 4.1 lists pneumonia and Legionnaire's. SSTI: US lists skin and skin-structure infections, and SmPC 4.1 item 6. Pelvic: US lists acute PID due to N. gonorrhoeae (IV lactobionate then oral base); this is optional because the IV step is not stocked. Surgical prophylaxis: SmPC 4.1 item 8 'Prophylaxis: pre- and post-operative...'. In practice this is the oral colorectal bowel-prep regimen of neomycin plus erythromycin base (ASHP/IDSA/SIS/SHEA 2013, PMID 23327981, verified; full text not fetched). Do NOT tag UTI or Osteoarthritis: the urethritis and prostatitis indications are STI or prostate infections, and osteomyelitis appears only in the SmPC's generic list. Infections with no option (pertussis, diphtheria, syphilis, chlamydia, amebiasis, erythrasma) go in Notes.

**Sources:** US DailyMed INDICATIONS AND USAGE — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §2 適應症; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981 — https://pubmed.ncbi.nlm.nih.gov/23327981/

### A6 · Coverage

Streptococcus, Staphylococcus, MSSA, Listeria, Corynebacterium, Haemophilus, Neisseria, Chlamydia, Mycoplasma, Legionella

**Why:** Organisms come from the US microbiology list (C. diphtheriae, C. minutissimum, L. monocytogenes, S. aureus, S. pneumoniae, S. pyogenes, B. pertussis, H. influenzae, L. pneumophila, N. gonorrhoeae, C. trachomatis, M. pneumoniae, T. pallidum, U. urealyticum, E. histolytica) and SmPC 5.1. Do NOT tag Enterococcus, even though SmPC 5.1 says 'Streptococci spp (including Enterococci)': EUCAST in the same section gives no enterococcal breakpoint, and the US list omits it. Do NOT tag MRSA, Anaerobes ('Clostridia spp' only) or Bacillus (breakpoint only). Haemophilus needs a caveat: the US label requires a concomitant sulfonamide, and SmPC/EUCAST say macrolide efficacy against H. influenzae is conflicting. Organisms with no option (B. pertussis, T. pallidum, Ureaplasma, Moraxella, Campylobacter, E. histolytica) go in Notes.

**Sources:** US DailyMed CLINICAL PHARMACOLOGY 'Interactions With Other Antimicrobials' (organism list) and INDICATIONS (H. influenzae with sulfonamides) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 5.1 (organism list + EUCAST v14 breakpoints) — https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §2 (葡萄球菌、鏈球菌、肺炎雙球菌、淋菌、軟性下疳、梅毒)

### A7 · Side Effects

GI, LFT↑, QTc prolong, ototoxicity, CNS, SJS/TEN, AKI

**Why:** GI effects are the most frequent and dose-related. LFT↑ covers hepatocellular/cholestatic hepatitis. QTc prolong covers QT prolongation and TdP, with fatalities reported. Ototoxicity covers reversible hearing loss, deafness and tinnitus. CNS covers seizures, confusion, hallucinations and vertigo. SJS/TEN is rare. Interstitial nephritis, pancreatitis, CDAD, IHPS, AGEP and myasthenia exacerbation have no fitting option and go in Notes. AKI or nephrotoxicity would be an optional tag for interstitial nephritis.

**Sources:** US DailyMed ADVERSE REACTIONS; WARNINGS (Hepatotoxicity, QT Prolongation, CDAD) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.8 — https://www.medicines.org.uk/emc/product/10659/smpc

### A8 · Monitor

LFT, ECG, electrolyte

**Why:** LFT: hepatotoxicity warning (US) and hepatic caution (SmPC 4.4). ECG: the US label says to avoid erythromycin with known QT prolongation or Class IA/III antiarrhythmics, and SmPC 4.3 contraindicates it with a history of QT prolongation. Electrolyte: SmPC 4.3 contraindicates hypokalaemia and hypomagnesaemia, and the US label says to avoid uncorrected hypokalaemia or hypomagnesaemia.

**Sources:** US DailyMed WARNINGS QT Prolongation, Hepatotoxicity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.3, 4.4 — https://www.medicines.org.uk/emc/product/10659/smpc

### A9 · Mechanism

Macrolide: binds 50S ribosomal subunit → inhibits protein synthesis (no effect on nucleic acid synthesis).<br>Resistance: 23S rRNA modification (main) ± efflux.

**Why:** The column is empty. The text follows the US label Mechanism and Resistance sections, SmPC 5.1 and TW insert §10.1 (50S, blocks translocation).

**Sources:** US DailyMed Mechanism of Action; Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §10.1 作用機轉

### A10 · Drug Interactions

CYP3A4 substrate + inhibitor (moderate per US label; strong per UK SmPC).<br>⛔ Contraindicated: astemizole, terfenadine, cisapride, pimozide, ergotamine/DHE, lovastatin/simvastatin (US + UK). UK also: domperidone, ivabradine, lomitapide, tolterodine, mizolastine, amisulpride.<br>Avoid: Class IA/III antiarrhythmics (US). Caution with other QT-prolonging drugs incl. hydroxychloroquine/chloroquine (TW 仿單 §5.1/§7; UK 4.4/4.5).<br>↑ levels/toxicity: colchicine (life-threatening; ↓ colchicine dose), verapamil/diltiazem/amlodipine (hypotension, bradyarrhythmia, lactic acidosis), theophylline, digoxin, warfarin/rivaroxaban (↑INR), midazolam/triazolam/alprazolam, carbamazepine, cyclosporine, tacrolimus, sildenafil, cilostazol, CYP3A corticosteroids, atorvastatin (rhabdo).<br>CYP3A4 inducers (rifampicin, phenytoin, carbamazepine, phenobarbital, St John's wort) ↓ erythromycin → UK: avoid during and 2 weeks after. Cimetidine, protease inhibitors ↑ erythromycin (UK).<br>Theophylline also ↓ erythromycin ~35% (US).<br>In vitro antagonism with clindamycin, lincomycin, chloramphenicol.

**Why:** The column is empty. The US label lists contraindications plus many CYP3A interactions. UK SmPC 4.3 adds further contraindicated drugs and 4.5 adds the inducer, HCQ and corticosteroid advice. The TW insert's only warning is the QT interaction (hydroxychloroquine). The US label calls erythromycin a 'moderate' CYP3A4 inhibitor and the UK SmPC calls it 'strong', hence 'moderate–strong'.

**Sources:** US DailyMed CONTRAINDICATIONS; WARNINGS QT Prolongation & Drug Interactions; PRECAUTIONS Drug Interactions (Theophylline, Ergotamine, HMG-CoA, Sildenafil, Colchicine) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.3, 4.5 — https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §5.1 / §7 交互作用

### A11 · Pregnancy

No FDA letter category (retired). US label: no adequate human studies → use only if clearly needed. UK SmPC: conflicting data; possible small ↑ cardiovascular malformations after 1st-trimester exposure → use only if clinically needed.<br>Poor fetal transfer → infants of mothers treated for syphilis need penicillin.<br>⚠️ Estolate salt (our product): SGOT↑ in 9.9% of pregnant women vs 1.8% placebo (RCT) → estolate inadvisable in pregnancy 孕婦避免使用 estolate.

**Why:** The column is empty. The text follows US Teratogenic Effects, the syphilis-in-pregnancy warning and SmPC 4.6. The estolate-specific risk comes from the McCormack 1977 RCT (PMID 21610, verified; abstract: 'The treatment of pregnant women with erythromycin estolate may be inadvisable'). This matters because the hospital stocks only the estolate salt, while the US label's pregnancy-chlamydia regimen refers to erythromycin base.

**Sources:** US DailyMed PRECAUTIONS Teratogenic Effects; WARNINGS Syphilis in pregnancy — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.6, 4.4 — https://www.medicines.org.uk/emc/product/10659/smpc; McCormack WM et al. Antimicrob Agents Chemother 1977;12:630-5, PMID 21610 — https://pubmed.ncbi.nlm.nih.gov/21610/

### A12 · Breastfeeding

Compatible 可哺乳 (LactMed): low milk levels (~1–2.5 mg/L). Monitor infant for irritability, diarrhea, thrush.<br>Possible IHPS with maternal use in the first ~2 weeks postpartum (rare, disputed; UK SmPC advises caution).<br>Alternatives: azithromycin, clarithromycin.

**Why:** The column is empty. The text summarises the LactMed Summary, Drug Levels and Alternate Drugs sections and SmPC 4.6. The US label says only 'caution'.

**Sources:** LactMed Erythromycin NBK501217 (rev 2024-11-15), Summary of Use during Lactation; Drug Levels; Alternate Drugs — https://www.ncbi.nlm.nih.gov/books/NBK501217/; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/10659/smpc; US DailyMed Nursing Mothers

### A13 · Notes

院內: 健喬 紅黴素膠囊 250 mg (erythromycin estolate ≡ 250 mg base), 衛署藥製字第000106號 — <span color="blue">`PO`</span> only; no IV form stocked.<br>• TW 仿單 very limited (禁忌/副作用/PK: 目前尚無資訊); safety data above from US label (base DR cap) and UK SmPC (base GR tab).<br>• ⚠️ Estolate: 孕婦避免使用 (hepatotoxicity; McCormack 1977) → see Pregnancy.<br>• Absorption: US label (base) — optimal fasting; estolate-specific food data not in labels.<br>• Also active vs (no tag): Bordetella pertussis, Treponema pallidum (alt. for PCN-allergic primary syphilis; US label 30–40 g total over 10–15 d; not adequate for fetus), chancroid (TW 仿單), Ureaplasma, Moraxella, Campylobacter, Entamoeba histolytica (intestinal only), C. diphtheriae (adjunct to antitoxin, carrier eradication), C. minutissimum (erythrasma).<br>• H. influenzae: US label requires a concomitant sulfonamide; EUCAST: macrolide efficacy conflicting.<br>• Warnings: CDAD; IHPS in infants; may worsen myasthenia gravis; AGEP; interstitial nephritis, pancreatitis (rare).<br>• Interferes with fluorometric urinary catecholamine assay.<br>• Surgical prophylaxis = oral colorectal bowel-prep regimen (neomycin + erythromycin BASE) per ASHP/IDSA 2013; off-label for estolate cap.

**Why:** Notes holds the stocked product, the infections and organisms that have no multi-select option, and warnings with no tag. Nothing about storage or stability is included, per the owner's rule.

**Sources:** TFDA insert 衛署藥製字第000106號 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; US DailyMed INDICATIONS; CLINICAL PHARMACOLOGY; PRECAUTIONS General; Drug/Laboratory test interactions — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.4, 4.8, 5.1 — https://www.medicines.org.uk/emc/product/10659/smpc; PMID 23327981 — https://pubmed.ncbi.nlm.nih.gov/23327981/

### A14 · Page body

Add '## **ERYTHROMYCIN (紅黴素) — Complete Monograph**' followed by the line: 'FJUH stocks 健喬 紅黴素膠囊 250 mg (erythromycin estolate ≡ 250 mg base; 衛署藥製字第000106號) <span color="blue">`PO`</span>. ⚠️ Estolate: 孕婦避免使用.' Then add ### Category / Mechanism / Indications / Coverage / Adult Dose / Pediatric Dose / Renal / Hepatic / Adverse Effects / Drug Interactions / Pregnancy & Lactation / Notes, mirroring the agreed A1–A13 texts. End with Sources: TW 仿單 衛署藥製字第000106號 (v3, 2024-05-31); DailyMed setid a2dcb48a-212c-1b0c-ec35-ee2ade85847f v2 (Sep 29, 2025; erythromycin BASE DR capsule, no US estolate label); eMC product 10659 (rev 13/05/2025; base GR tablet); LactMed NBK501217 (2024-11-15); PMIDs 21610, 6980110, 16340941, 23327981.

**Why:** Other entries in the database carry a 'Complete Monograph' body, and this new page has none. The sources list should state that the US and UK comparators are erythromycin base products, not estolate.

**Sources:** Notion data source collection://20dc496d-fff1-8035-b493-000b15564193 (existing entries' monograph format, e.g. Amikacin); Sources as in A1–A13

### A15 · Category

Macrolide (no change)

**Why:** Correct: the US label says 'belongs to the macrolide group of antibiotics', SmPC 5.1 gives ATC J01FA01 (macrolides), and the hospital's 藥理分類 is Macrolides.

**Sources:** US DailyMed DESCRIPTION — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/10659/smpc

### B1 · Adult dose

<span color="blue">`PO`</span> ERY03 estolate 250 mg cap (= 250 mg base)<br>TW 仿單: 1 cap q4-6h; 嚴重感染加倍 (500 mg q4-6h)<br>US: 250 mg q6h or 500 mg q12h; up to 4 g/day by severity (BID not recommended if >1 g/day)<br>UK: 2 g/day divided; severe up to 4 g/day<br>Strep pharyngitis / RF primary prevention (PCN allergy): ≥10 days; RF secondary prophylaxis: 250 mg BID<br>Legionnaires: 1-4 g/day divided (limited data)<br>C. trachomatis (non-pregnant, tetracycline-intolerant) / Ureaplasma NGU: 500 mg QID ≥7 d<br>Primary syphilis (PCN allergy): 30-40 g total over 10-15 d<br>Intestinal amebiasis: 250 mg QID × 10-14 d<br>Pertussis (CDC 2005): 2 g/day ÷4 × 14 d

**Why:** All three labels give dosing. TW insert §3.1: "通常成人每4-6小時一粒，嚴重感染可加倍劑量服用". US DOSAGE AND ADMINISTRATION: "The usual dose is 250 mg every 6 hours taken one hour before meals. If twice-a-day dosage is desired, the recommended dose is 500 mg every 12 hours. Dosage may be increased up to 4 grams per day... Twice-a-day dosing is not recommended when doses larger than 1 gram daily are administered." The indication sub-sections give: Streptococcal "at least 10 days... 250 mg twice a day" for RF prophylaxis; Primary syphilis "30 to 40 grams... over 10 to 15 days"; Intestinal amebiasis "250 mg four times daily for 10 to 14 days"; Legionnaires "1 to 4 grams daily"; Chlamydia/NGU "500 mg... 4 times a day for at least 7 days". UK SmPC 4.2: "2g daily in divided doses. Up to 4g daily in severe infections." The US label gives no fixed adult pertussis dose, so the adult pertussis dose comes from CDC 2005 (PMID 16340941, verified with esummary). I could not open the cdc.gov full text from this environment, so please confirm Table 4 (adults 2 g/day in 4 divided doses × 14 d). I left out the PID regimen because it starts with IV lactobionate, which is not stocked. I left out the chlamydia-in-pregnancy regimen because estolate should be avoided in pregnancy (see B9).

**Sources:** TW 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; US label DOSAGE AND ADMINISTRATION (+ indication subsections): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.2: https://www.medicines.org.uk/emc/product/10659/smpc; Tiwari T et al. CDC 2005 pertussis guidelines, MMWR Recomm Rep 2005;54(RR-14):1-16, PMID 16340941: https://pubmed.ncbi.nlm.nih.gov/16340941/

### B2 · Renal dose, HD, CRRT

No adjustment (ERY03 仿單: 目前尚無資訊; US label / UK SmPC: no renal dose; <5% excreted active in urine)<br>HD/PD: not removed (US label) → no supplemental dose<br>CRRT: no label/PK data; adjustment not expected (inference from hepatic/biliary elimination)<br>⚠ Reversible hearing loss chiefly in renal insufficiency or high doses (US AR; UK 4.8) → caution with high doses; HD pts had ↑Cmax/AUC after a single oral dose (Kanfer 1987, PMID 3494560)

**Why:** No label gives a renal dose. US CLINICAL PHARMACOLOGY: "Erythromycin is not removed by peritoneal dialysis or hemodialysis... less than 5 percent of the administered dose can be recovered in the active form in the urine." OVERDOSAGE repeats the dialysis statement. US ADVERSE REACTIONS: "reversible hearing loss occurring chiefly in patients with renal insufficiency and in patients receiving high doses". UK SmPC 4.8 says the same. Kanfer 1987 (esummary verified) compared HD patients with controls after 1 g ethylsuccinate: "Maximum serum concentrations and areas under the serum concentration time-curve were higher in patients... suggestive of an enhanced bioavailability". No label or guideline gives CRRT data. The CRRT line is an inference from the elimination route and should be labelled as such.

**Sources:** US label CLINICAL PHARMACOLOGY, OVERDOSAGE, ADVERSE REACTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.2, 4.8, 5.2: https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §3/§11 (目前尚無資訊): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; Kanfer A et al. Clin Nephrol 1987;27:147-50, PMID 3494560: https://pubmed.ncbi.nlm.nih.gov/3494560/

### B3 · Hepatic dose

No dose adjustment in labels; mainly hepatic/biliary excretion → use with caution in hepatic impairment or with other hepatotoxic drugs (US PRECAUTIONS; UK 4.4)<br>Hepatocellular and/or cholestatic hepatitis ± jaundice reported with oral erythromycins (US WARNINGS; UK 4.4/4.8)<br>⚠ Estolate: avoid in pregnancy (hepatotoxicity, see Pregnancy)

**Why:** US PRECAUTIONS General: "Since erythromycin is principally excreted by the liver, caution should be exercised when erythromycin is administered to patients with impaired hepatic function." US WARNINGS Hepatotoxicity: "hepatic dysfunction, including increased liver enzymes, and hepatocellular and/or cholestatic hepatitis, with or without jaundice". UK SmPC 4.4: "caution should be exercised... impaired hepatic function or concomitantly receiving potentially hepatotoxic agents". The TW insert has no hepatic content. On an estolate-specific general risk, the evidence is mixed. Inman & Rawson 1983 (PMID 6407653, 12,208 patients) found "No case was attributable to the estolate". McCormack 1977 (PMID 21610) found SGOT elevation in pregnancy. So the estolate warning should be limited to pregnancy.

**Sources:** US label WARNINGS Hepatotoxicity, PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.4, 4.8: https://www.medicines.org.uk/emc/product/10659/smpc; Inman WH, Rawson NS. BMJ 1983;286:1954-5, PMID 6407653: https://pubmed.ncbi.nlm.nih.gov/6407653/; McCormack WM et al. Antimicrob Agents Chemother 1977;12:630-5, PMID 21610: https://pubmed.ncbi.nlm.nih.gov/21610/

### B4 · Pediatric dose

US: 30-50 mg/kg/day divided; severe: may double<br>Pertussis: 40-50 mg/kg/day divided × 5-14 d (US); CDC 2005: ÷4 × 14 d, max 2 g/day; <1 month: azithromycin preferred (IHPS)<br>Intestinal amebiasis: 30-50 mg/kg/day × 10-14 d<br>UK: >8 y 2 g/day (≤4 g); 2-8 y 1 g/day; infants 500 mg/day; severe ×2; suspension preferred in young children<br>TW 仿單: 兒童依年齡、症狀酌量遞減<br>ERY03 = 250 mg capsule only (no liquid stocked)<br>⚠ IHPS risk in neonates (UK 4.4: 2.6% if exposed in first 14 days of life)

**Why:** US D&A CHILDREN: "The usual dosage is 30 to 50 mg/kg/day in divided doses. For the treatment of more severe infections, this dose may be doubled." Pertussis: "40 to 50 mg/kg/day, given in divided doses for 5 to 14 days." Amebiasis: "30 to 50 mg/kg/day in divided doses for 10 to 14 days for children." UK SmPC 4.2 gives the age bands listed. UK SmPC 4.4: "risk of 2.6% (95% CI: 1.5-4.2%) following exposure to erythromycin during this time period" (first 14 days of life). The US PRECAUTIONS IHPS cohort found 5% in neonates. TW §3.1: "兒童依年齡、症狀酌量遞減". The CDC 2005 age split (PMID 16340941 verified) needs a full-text check because cdc.gov is blocked here.

**Sources:** US label DOSAGE AND ADMINISTRATION, PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.2, 4.4: https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; Tiwari T et al. MMWR 2005, PMID 16340941: https://pubmed.ncbi.nlm.nih.gov/16340941/

### B5 · Indications

Pneumonia, CAP, SSTI, Pelvic, Surgical prophylaxis, Osteoarthritis

**Why:** Only existing options are used. Pneumonia/CAP: US "Lower respiratory tract infections of mild to moderate severity... Respiratory tract infections due to Mycoplasma pneumoniae... Legionnaires' Disease"; UK 4.1(2) "pneumonia (lobar pneumonia, bronchopneumonia, primary atypical pneumonia)". SSTI: US "Skin and skin structure infections of mild to moderate severity"; UK 4.1(6). Pelvic: US "Acute pelvic inflammatory disease caused by N. gonorrhoeae" (IV lactobionate then oral base). Surgical prophylaxis: UK 4.1(8) "Prophylaxis: pre- and post- operative trauma, burns". Osteoarthritis (used in this DB for bone/joint infection): UK 4.1(9) "osteomyelitis". The pharmacist may drop this tag as clinically marginal, but the approval rule (FDA OR UK) is met. TW §2 is consistent (葡萄球菌、鏈球菌、肺炎雙球菌、淋菌感染症、軟性下疳、梅毒). Several labelled indications have no option and go in Notes: pertussis, diphtheria, erythrasma, listeriosis, syphilis, chancroid, chlamydia/NGU, intestinal amebiasis, RF prophylaxis, URTI/otitis.

**Sources:** US label INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.1: https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F

### B6 · Coverage

Streptococcus, MSSA, Listeria, Corynebacterium, Neisseria, Chlamydia, Mycoplasma, Legionella

**Why:** US Microbiology list: "Corynebacterium diphtheriae, Corynebacterium minutissimum, Listeria monocytogenes, Staphylococcus aureus, Streptococcus pneumoniae, Streptococcus pyogenes... Neisseria gonorrhoeae... Chlamydia trachomatis... Mycoplasma pneumoniae". UK 5.1 adds Neisseria meningitidis, Moraxella and Campylobacter. Legionella: US and UK both list L. pneumophila. I deliberately left out Haemophilus: the US label says "many strains of H. influenzae are not susceptible to the erythromycin concentrations ordinarily achieved" (only with sulfonamide), and the UK EUCAST note says clinical evidence is "conflicting". Mention it in Notes instead. I also left out Enterococcus, although UK 5.1 says "Streptococci spp (including Enterococci)": this is not in the US label and is not clinically reliable. Pharmacist's call; keep it out unless another source supports it. MSSA rather than generic Staphylococcus: the US label names S. aureus only, with "resistant staphylococci may emerge during treatment".

**Sources:** US label CLINICAL PHARMACOLOGY (organism list), INDICATIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/10659/smpc

### B7 · Side Effects

GI, LFT↑, QTc prolong, ototoxicity, CNS, SJS/TEN, AKI

**Why:** US ADVERSE REACTIONS: "The most frequent side effects... are gastrointestinal and are dose-related... Symptoms of hepatitis, hepatic dysfunction and/or abnormal liver function test results... QT prolongation and ventricular arrhythmias... Stevens-Johnson syndrome, and toxic epidermal necrolysis... interstitial nephritis... pancreatitis and convulsions... reversible hearing loss". UK SmPC 4.8 adds hallucinations, confusion, vertigo, seizures (CNS), deafness/tinnitus, AGEP, hypotension and IHPS. AKI is chosen to represent interstitial nephritis (both labels). Pancreatitis, IHPS, myasthenia exacerbation and AGEP have no option and go in Notes. The TW insert §8 is "目前尚無資訊", but its only warning (§5.1) is QT.

**Sources:** US label ADVERSE REACTIONS, WARNINGS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.8: https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F

### B8 · Monitor

LFT, ECG, electrolyte

**Why:** LFT: US WARNINGS Hepatotoxicity; UK 4.4. ECG: US WARNINGS QT "should be avoided in patients with known prolongation of the QT interval"; UK 4.3 contraindicates it in patients with QT prolongation; TW §5.1 QT warning. Electrolyte: UK 4.3 "should not be given to patients with electrolyte disturbances (hypokalaemia, hypomagnesaemia)"; US WARNINGS "uncorrected hypokalemia or hypomagnesemia". Conditional monitoring goes in the Drug Interactions text, not in tags: INR with warfarin; CK and transaminases with lovastatin (US Drug Interactions: "carefully monitored for creatine kinase (CK) and serum transaminase levels"); theophylline, digoxin, cyclosporine and tacrolimus levels.

**Sources:** US label WARNINGS, PRECAUTIONS Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.3, 4.4: https://www.medicines.org.uk/emc/product/10659/smpc

### B9 · Pregnancy

No FDA letter category (old-format US label: use only if clearly needed). Crosses placenta, fetal levels low; inadequate to prevent congenital syphilis → treat infant with penicillin (US/UK 4.4)<br>UK SmPC 4.6: >24,000 1st-trimester exposures, mostly no association; limited evidence of small ↑ cardiovascular malformations → use only if clinically needed<br>⚠ ESTOLATE (ERY03): avoid in pregnancy (孕婦避免使用 estolate) - hepatotoxicity (SGOT↑ 9.9% vs 1.8% placebo, McCormack 1977 PMID 21610; CDC STD 2015 PMID 26042815: contraindicated in pregnancy) → use another agent (e.g. azithromycin for chlamydia, CDC STI 2021 PMID 34292926)

**Why:** Letter categories are retired, so none is given. US Teratogenic Effects: "no adequate and well-controlled studies in pregnant women... should be used during pregnancy only if clearly needed." US WARNINGS Syphilis in pregnancy: "does not reach the fetus in adequate concentration to prevent congenital syphilis". UK 4.6: "limited epidemiological evidence of a small increased risk of major congenital malformations, specifically cardiovascular malformations following first trimester exposure". This is the key product-specific point the brief missed. McCormack 1977 (RCT in the second half of pregnancy, abstract verified): "erythromycin estolate had significantly more abnormally elevated levels of SGOT (16/161, 9.9%) than... clindamycin (2.4%)... placebo (1.8%)... treatment of pregnant women with erythromycin estolate may be inadvisable." CDC STD 2015 (PMID 26042815, esummary verified) states that erythromycin estolate is contraindicated in pregnancy because of drug-related hepatotoxicity. cdc.gov is blocked here, so please confirm the wording. CDC 2021 (PMID 34292926, verified): azithromycin is recommended for chlamydia in pregnancy; please also confirm against the full text.

**Sources:** US label PRECAUTIONS Teratogenic Effects, WARNINGS Syphilis in pregnancy: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.4, 4.6: https://www.medicines.org.uk/emc/product/10659/smpc; McCormack WM et al. Antimicrob Agents Chemother 1977;12:630-5, PMID 21610: https://pubmed.ncbi.nlm.nih.gov/21610/; Workowski KA, Bolan GA. STD Treatment Guidelines 2015, MMWR Recomm Rep 2015;64(RR-03), PMID 26042815: https://pubmed.ncbi.nlm.nih.gov/26042815/; Workowski KA et al. STI Treatment Guidelines 2021, PMID 34292926: https://pubmed.ncbi.nlm.nih.gov/34292926/

### B10 · Breastfeeding

Acceptable (LactMed): low milk levels (~1-2.5 mg/L); monitor infant for irritability, diarrhoea, thrush/diaper rash; possible IHPS with maternal use in first 2 weeks postpartum (very low risk, disputed)<br>US label: caution; UK SmPC 4.6: caution (IHPS reports; maternal macrolide within 7 weeks of delivery)<br>Alternatives (LactMed): azithromycin, clarithromycin

**Why:** LactMed Summary: "Because of the low levels of erythromycin in breastmilk and safe administration directly to infants, it is acceptable in nursing mothers... Monitor the infant for irritability and possible effects on the gastrointestinal flora, such as diarrhea, candidiasis... hypertrophic pyloric stenosis in infants might occur with maternal use of erythromycin during the first two weeks of breastfeeding; however, if it occurs, the frequency is very low". Drug Levels: 1-1.2 mg/L after 500 mg PO and 2.5 mg/L after 500 mg IV. Alternate Drugs: azithromycin, clarithromycin. US Nursing Mothers: "Caution should be exercised". UK 4.6: "Caution... due to reports of infantile hypertrophic pyloric stenosis in breast-fed infants... within 7 weeks of delivery".

**Sources:** LactMed NBK501217 (rev 2024-11-15): https://www.ncbi.nlm.nih.gov/books/NBK501217/; US label Nursing Mothers: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/10659/smpc

### B11 · Mechanism

Macrolide; reversibly binds 50S ribosomal subunit → blocks peptidyl-tRNA translocation (A→P site) → inhibits protein synthesis; no effect on nucleic acid synthesis<br>Resistance: 23S rRNA target modification (erm methylation) ± efflux (mef)

**Why:** US Mechanism: "inhibition of protein synthesis by binding 50 S ribosomal subunits... It does not affect nucleic acid synthesis." US Resistance: "modification of the 23S rRNA in the 50S ribosomal subunit... efflux can also be significant." TW §10.1: "可逆性結合於細菌核醣體的50S次單位... 阻止了胜由A到P之移位，而使得蛋白質合成被抑制". The gene names erm(B)/mef(A) come from Taiwanese S. pneumoniae data (Safari 2014, PMID 25527193, verified). I omitted "bacteriostatic" because no label here states it.

**Sources:** US label Mechanism of Action, Resistance: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; TW 仿單 §10.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/10659/smpc; Safari D et al. BMC Infect Dis 2014;14:704, PMID 25527193: https://pubmed.ncbi.nlm.nih.gov/25527193/

### B12 · Drug Interactions

CONTRAINDICATED: terfenadine, astemizole, cisapride, pimozide, ergotamine/DHE, lovastatin, simvastatin (US); UK also: domperidone, amisulpride, mizolastine, tolterodine, ivabradine, lomitapide<br>QT: avoid class IA/III antiarrhythmics (US); caution with other QT-prolonging drugs incl. hydroxychloroquine/chloroquine (TW 仿單 §5.1/§7; UK 4.4)<br>CYP3A4 substrate & inhibitor (moderate per US; strong per UK): colchicine (life-threatening; ↓ colchicine dose), atorvastatin (rhabdomyolysis), verapamil (hypotension, bradyarrhythmia, lactic acidosis), diltiazem/amlodipine (hypotension), midazolam/triazolam/alprazolam, zopiclone, carbamazepine, cyclosporine, tacrolimus, sildenafil, methylprednisolone/CYP3A corticosteroids, quinidine, disopyramide, cilostazol, vinblastine, alfentanil, bromocriptine, rifabutin; also phenytoin, valproate<br>Theophylline ↑ (and erythromycin ↓ ~35%); digoxin ↑; warfarin/rivaroxaban ↑ INR/bleeding (monitor INR)<br>CYP3A4 inducers (rifampicin, phenytoin, carbamazepine, phenobarbital, St John's wort) ↓ erythromycin → UK: avoid during and 2 wk after; cimetidine, protease inhibitors ↑ erythromycin<br>Antagonism with clindamycin, lincomycin, chloramphenicol

**Why:** US CONTRAINDICATIONS: "terfenadine, astemizole, cisapride, pimozide, ergotamine, or dihydroergotamine... lovastatin or simvastatin". UK 4.3 adds "tolterodine, mizolastine, amisulpride... domperidone", ivabradine and lomitapide. US WARNINGS QT: Class IA/III antiarrhythmics. TW §5.1/§7 is the only warning in the stocked product's insert (hydroxychloroquine). US Drug Interactions: colchicine, statins and CCBs. Theophylline: "decrease in erythromycin serum concentrations of approximately 35 percent". Colchicine: "Erythromycin is considered a moderate inhibitor of CYP3A4"; UK 4.3 calls it a "strong cytochrome P450 3A4 inhibitor". UK 4.5 covers inducers ("should not be used during and two weeks after"), cimetidine, protease inhibitors, rivaroxaban, zopiclone and corticosteroids. US label: "Antagonism exists in vitro between erythromycin and clindamycin, lincomycin, and chloramphenicol."

**Sources:** US label CONTRAINDICATIONS, WARNINGS, PRECAUTIONS Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.3, 4.5: https://www.medicines.org.uk/emc/product/10659/smpc; TW 仿單 §5.1, §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F

### B13 · Notes

院內僅 ERY03 estolate 250 mg cap (PO); no IV/suspension stocked<br>Estolate: absorption not reduced by food (↑ with food; Welling 1979 PMID 423080); US "1 h before meals" advice applies to base<br>⚠ Estolate: avoid in pregnancy (hepatotoxicity); syphilis in pregnancy → treat newborn with penicillin<br>QT: contraindicated with QT history/ventricular arrhythmia, uncorrected hypoK/hypoMg (UK 4.3); elderly more susceptible<br>Labelled organisms/indications with no tag: B. pertussis (pertussis Rx & carrier eradication), C. diphtheriae (adjunct to antitoxin, carriers), C. minutissimum (erythrasma), T. pallidum (primary syphilis, PCN allergy), chancroid (TW), Ureaplasma (NGU), E. histolytica (intestinal amebiasis only), Moraxella, Campylobacter (UK); RF primary/secondary prophylaxis (PCN allergy)<br>H. influenzae: poor (US: only with a sulfonamide)<br>CAP: not an IDSA/ATS 2019 macrolide choice (azithro/clarithro); macrolide monotherapy only if pneumococcal macrolide resistance <25% → Taiwan: check antibiogram (erm(B)/mef(A) S. pneumoniae common, PMID 25527193)<br>Colorectal surgery oral prep (Bratzler 2013): neomycin 1 g + erythromycin BASE 1 g at 19, 18, 9 h pre-op (off-label for estolate cap)<br>Other: IHPS in neonates, myasthenia gravis exacerbation, pancreatitis, AGEP, ototoxicity at >4 g/day or renal failure<br>No TDM

**Why:** Notes collects product-specific and untaggable items, each with a source. Food: Welling 1979 (abstract verified): "Absorption of erythromycin estolate was increased in the presence of food". US D&A gives "one hour before meals" for the base capsule. Pregnancy: see B9. QT: UK 4.3/4.4 and US WARNINGS. Untagged organisms: US INDICATIONS and UK 5.1; chancroid from TW §2 (軟性下疳). H. influenzae: US INDICATIONS caveat. CAP: Metlay 2019 (PMID 31573350, verified) lists azithromycin/clarithromycin as the macrolides and limits monotherapy to areas with pneumococcal macrolide resistance <25%. The Taiwan resistance-mechanism data are from Safari 2014 (verified). I found no sourced current Taiwan resistance percentage, so I did not state a number. Colorectal prophylaxis: Bratzler 2013 ASHP/IDSA/SIS/SHEA guideline (PMID 23327981, verified); the regimen uses erythromycin base 1 g doses, so it is a different salt and strength. IHPS, myasthenia, pancreatitis, AGEP: US PRECAUTIONS/AR and UK 4.4/4.8. The >4 g/day ototoxicity threshold comes from the UK Erythromycin Tablets BP SmPC 4.8 (eMC 14305): "usually occurring at doses greater than 4 g daily". TDM: no label or guideline recommends it.

**Sources:** Welling PG et al. J Pharm Sci 1979;68:150-5, PMID 423080: https://pubmed.ncbi.nlm.nih.gov/423080/; Metlay JP et al. ATS/IDSA CAP 2019, PMID 31573350: https://pubmed.ncbi.nlm.nih.gov/31573350/; Bratzler DW et al. Am J Health Syst Pharm 2013;70:195-283, PMID 23327981: https://pubmed.ncbi.nlm.nih.gov/23327981/; Safari D et al. 2014, PMID 25527193: https://pubmed.ncbi.nlm.nih.gov/25527193/; US label INDICATIONS, WARNINGS, PRECAUTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC 4.1, 4.3, 4.4, 4.8, 5.1: https://www.medicines.org.uk/emc/product/10659/smpc; UK Erythromycin Tablets BP 250mg SmPC 4.8: https://www.medicines.org.uk/emc/product/14305/smpc; TW 仿單 §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F

### B14 · Page body

# ERYTHROMYCIN (紅黴素)<br>---<br>## FJUH PRODUCT & 仿單<br>- **ERY03 Erythromycin (estolate) 250 mg cap** (“健喬”紅黴素膠囊250毫克, 衛署藥製字第000106號; 健喬信元/政德製藥) <span color="blue">`PO`</span> — 成人每4-6小時1粒，嚴重感染加倍；兒童依年齡、症狀酌量遞減. [TFDA 仿單](https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F)<br>- 仿單 only warning: caution with QT-prolonging drugs (e.g. hydroxychloroquine). Contraindications/ADR/PK sections: 目前尚無資訊 → safety content below from US label / UK SmPC.<br>---<br>## CATEGORY<br>**Macrolide** (ATC J01FA01)<br>---<br>## MECHANISM<br>Binds 50S ribosomal subunit → blocks translocation → inhibits protein synthesis. Resistance: 23S rRNA modification (erm), efflux (mef).<br>---<br>## INDICATIONS (FDA/UK-approved)<br>- **Respiratory:** pharyngitis/tonsillitis (S. pyogenes), mild-moderate LRTI/pneumonia (S. pneumoniae, S. pyogenes, M. pneumoniae), Legionnaires' disease, pertussis (treatment & carrier eradication), diphtheria (adjunct to antitoxin)<br>- **Skin:** mild-moderate SSTI (S. pyogenes, S. aureus), erythrasma<br>- **STI:** primary syphilis (PCN allergy), C. trachomatis (tetracycline-intolerant), Ureaplasma NGU, PID due to N. gonorrhoeae (IV→PO), chancroid (TW)<br>- **Other:** listeriosis, intestinal amebiasis, RF primary/secondary prophylaxis (PCN allergy); UK: otitis, osteomyelitis, peri-operative prophylaxis<br>---<br>## DOSING<br>(see Adult / Pediatric columns) No renal adjustment; HD/PD not removed; no hepatic adjustment (caution).<br>---<br>## SAFETY<br>- **QT prolongation / TdP** — avoid with QT history, uncorrected hypoK/hypoMg, IA/III antiarrhythmics; elderly ↑ risk<br>- **Hepatotoxicity** (hepatocellular/cholestatic); **estolate: avoid in pregnancy**<br>- GI (dose-related), CDAD, ototoxicity (renal failure/high dose), IHPS (neonates), myasthenia exacerbation, interstitial nephritis, pancreatitis, SJS/TEN/AGEP<br>---<br>## DRUG INTERACTIONS<br>CYP3A4 inhibitor — see column (contraindicated: terfenadine, astemizole, cisapride, pimozide, ergots, lovastatin/simvastatin; UK + domperidone, ivabradine, lomitapide…)<br>---<br>## PREGNANCY / LACTATION<br>See columns. Estolate (ERY03) 孕婦避免使用. LactMed: acceptable, monitor infant.<br>---<br>## References<br>- TW 仿單 衛署藥製字第000106號 (v3, 2024-05-31): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F<br>- US label (erythromycin base DR cap; no US estolate label), DailyMed setid a2dcb48a-212c-1b0c-ec35-ee2ade85847f v2 (Sep 29, 2025)<br>- UK SmPC Erythromycin 250 mg gastro-resistant tablets, eMC 10659 (rev 13/05/2025)<br>- LactMed NBK501217 (rev 2024-11-15)<br>- McCormack 1977 PMID 21610; Tiwari (CDC pertussis) 2005 PMID 16340941; Bratzler 2013 PMID 23327981; Metlay 2019 PMID 31573350; Welling 1979 PMID 423080

**Why:** The page body is blank. A short body in the owner's existing format (cf. Seforce/ciprofloxacin: FJUH PRODUCTS & 仿單, CATEGORY, MECHANISM, INDICATIONS…) gives product context, especially that the TW insert is nearly empty and that estolate must be avoided in pregnancy. Every statement is drawn from B1-B13 and their sources. No storage details are included (the insert's 15-30℃ is deliberately left out).

**Sources:** TW 仿單: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC000106%E8%99%9F; US label: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a2dcb48a-212c-1b0c-ec35-ee2ade85847f; UK SmPC: https://www.medicines.org.uk/emc/product/10659/smpc; LactMed: https://www.ncbi.nlm.nih.gov/books/NBK501217/; McCormack 1977, PMID 21610: https://pubmed.ncbi.nlm.nih.gov/21610/

### B15 · Renewed date

2026-10-05 (set when the agreed edits are applied)

**Why:** Other audited entries (e.g. Seforce) carry "Renewed date" 2026-10-05 after verification. This one is empty. It is not a label item, but it keeps the database consistent.

**Sources:** Notion entry Seforce (ciprofloxacin) properties, for style: https://app.notion.com/p/20ec496dfff180f38405cf1ee5733bf6

## Apply log

- Adult dose: merged both reviewer texts into one <br>-separated entry with the PO tag. Covers the TW 仿單, US and UK regimens, strep/RF, chlamydia/NGU, Legionnaires', primary syphilis, amebiasis and pertussis (CDC 2005).
- Renal dose, HD, CRRT: no adjustment (仿單 has no information; US/UK give no renal dose; <5% in urine). HD/PD do not remove the drug, so no supplemental dose. CRRT: no data. Warning on reversible hearing loss in renal insufficiency, citing Kanfer 1987 PMID 3494560.
- Hepatic dose: no label adjustment; caution because of hepatic/biliary excretion. Hepatitis warning. Advice on prior erythromycin liver injury (Keeffe 1982 PMID 6980110). Warning that the estolate salt should be avoided in pregnancy.
- Pediatric dose: US 30-50 mg/kg/day, plus pertussis (US and CDC 2005), amebiasis, UK age bands and TW 仿單 text. Notes that the stocked product is a capsule only, and warns about IHPS (2.6% risk in the first 14 days of life).
- Indications set to [Pneumonia, CAP, SSTI, Pelvic, Surgical prophylaxis, Osteoarthritis]. All are existing options.
- Coverage set to [Streptococcus, MSSA, Listeria, Corynebacterium, Neisseria, Chlamydia, Mycoplasma, Legionella]. This is the overlap of the two reviewers' lists. Staphylococcus and Haemophilus were proposed by only one reviewer, so I left them out. H. influenzae is covered as 'poor' in Notes.
- Side Effects set to [GI, LFT↑, QTc prolong, ototoxicity, CNS, SJS/TEN, AKI].
- Monitor set to [LFT, ECG, electrolyte].
- Mechanism: binds the 50S subunit and blocks translocation, inhibiting protein synthesis. Resistance through erm 23S rRNA modification, with or without mef efflux.
- Drug Interactions: merged the CYP3A4 profile (moderate per US, strong per UK), the US+UK contraindicated drugs and the UK-only ones, QT rules (including the 仿單 HCQ warning), drugs whose levels or toxicity rise, theophylline, digoxin and warfarin, the inducers to avoid (UK: during and 2 weeks after), and in-vitro antagonism.
- Pregnancy: states there is no FDA letter category; US and UK wording; congenital syphilis and penicillin for the infant; the estolate pregnancy warning (McCormack 1977 PMID 21610; CDC 2015 PMID 26042815; CDC 2021 PMID 34292926).
- Breastfeeding: LactMed says compatible (可哺乳), with low milk levels and infant monitoring. Covers the IHPS caveat, US/UK caution and the alternatives.
- Notes: merged into one entry. Covers the hospital product (ERY03, 衛署藥製字第000106號, PO only), the limits of the 仿單, the estolate pregnancy warning, food effect (Welling PMID 423080), QT contraindications, organisms and indications with no tag, H. influenzae, CAP and Taiwan resistance (PMID 25527193), the colorectal prep regimen (Bratzler PMID 23327981), other warnings, the catecholamine assay interference and no TDM.
- Category kept as 'Macrolide' (no change).
- Page body: built the monograph from both proposals, following the existing entries' layout (H1 title, a line on the FJUH product, then FJUH PRODUCT & 仿單, CATEGORY, MECHANISM, INDICATIONS, COVERAGE, DOSING, SAFETY, DRUG INTERACTIONS, PREGNANCY / LACTATION). It ends with a References section that gives the version or date and the URL for every source: TW 仿單 v3 2024-05-31, DailyMed setid a2dcb48a v2 Sep 29 2025, eMC 10659 rev 13/05/2025, eMC 14305, LactMed NBK501217 rev 2024-11-15, and PMIDs 21610, 6980110, 6407653, 3494560, 423080, 16340941, 23327981, 31573350, 25527193, 26042815, 34292926.
- Renewed date set to 2026-10-05 (is_datetime 0).

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
