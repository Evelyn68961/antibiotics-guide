# New entry: Amoxicillin

- **Notion entry:** [Amoxicillin](https://app.notion.com/3f0c496dfff1814db1e6f25be0d4d5c9). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** AMO02 (Amoxicillin cap 250 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/amoxicillin.json` (plus any Taiwan insert text files)

## Product and sources

FJUH AMO02 = Amoxicillin (trihydrate) 250 mg capsule, 安蒙西林膠囊, "中國化學" AMOXICILLIN CAPSULES 250MG "C.C.P." by China Chemical & Pharmaceutical (Taichung plant), TFDA licence 衛署藥製字第012051號. I confirmed this on the TFDA im_detail page. The NHI code AC120511G0 embeds licence 12051, and the hospital's imprint CCP/B21 matches 綱號 B21 in the 250 mg insert. The sister 500 mg licence 衛署藥製字第024132號 shares the insert but is not stocked. ATC J01CA04, oral only; no other amoxicillin form was found among the hospital codes (AMO01/05/06/07 are empty, AMO03 is amorolfine). Sources used: US DailyMed setid 9b3ab9ea-caee-4186-9068-43ca527c098d (Sportpharm repackaging of Teva 500 mg capsule, v1, Oct 02 2026; class labelling applies to the 250 mg strength), UK SmPC eMC 10637 (Brown & Burk 250 mg capsules, rev 09/10/2025), LactMed NBK500887 (rev 2026-06-15) and the TW insert A012051 In-104-09-24 (E版 104.09.23). The Notion page was blank: every column was empty except Category, and there was no body.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 250 mg cap only (stocked); take at start of meal to reduce GI upset (US §2.1)<br>US: ENT/SSTI/GU mild-mod 250 mg q8h or 500 mg q12h; severe or LRTI 500 mg q8h (or 875 mg q12h — tablet, not stocked). Intermediate-susceptibility pathogen → use severe-infection dose (US Table 1)<br>H. pylori ×14 d (US): triple 1 g + clarithromycin 500 mg + lansoprazole 30 mg q12h; dual 1 g + lansoprazole 30 mg q8h<br>UK SmPC: sinusitis/cystitis/pyelonephritis/dental abscess 250–500 mg q8h or 750 mg–1 g q12h; AOM/strep tonsillitis/AECOPD 500 mg q8h or 750 mg–1 g q12h; severe 750 mg–1 g q8h; CAP 500 mg–1 g q8h; acute cystitis 3 g q12h ×1 day; typhoid 500 mg–2 g q8h; prosthetic joint infection 500 mg–1 g q8h; endocarditis prophylaxis 2 g once 30–60 min pre-procedure; early Lyme 500 mg–1 g q8h (max 4 g/day) ×14 d (10–21); H. pylori 750 mg–1 g bid + PPI + 2nd antibiotic ×7 d<br>TW 仿單: 250–500 mg q8h; LRTI 500 mg q8h; gonorrhea 3 g single dose (仿單 only, not in US/UK label)<br>Continue ≥48–72 h after symptoms resolve (仿單: 2–3 天); S. pyogenes ≥10 days (US §2.2)

**Why:** The column is empty, and all three labels give adult regimens. With only the 250 mg capsule stocked, the US '875 mg q12h' option cannot be dispensed, so I list 500 mg q8h first. The UK SmPC adds indication-specific regimens: CAP, single-day cystitis, endocarditis prophylaxis and Lyme. The 3 g gonorrhoea dose appears only in the Taiwan insert, so it should be labelled as such.

**Sources:** US FDA label §2 Highlights/2.1/2.2 Table 1/2.4: '500 mg every 12 hours or 250 mg every 8 hours'; 'Severe 875 mg every 12 hours or 500 mg every 8 hours'; 'taken at the start of a meal'; triple/dual H. pylori 14 days — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2 Adults and children ≥40 kg: '250 mg to 500 mg every 8 hours or 750 mg to 1 g every 12 hours… severe 750 mg to 1 g every 8 hours… Acute cystitis may be treated with 3 g twice daily for one day'; CAP '500 mg to 1 g every 8 hours'; 'Prophylaxis of endocarditis 2 g orally, single dose 30 to 60 minutes before procedure'; Lyme early stage — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單 衛署藥製字第012051號 效能與用法: 成人 250mg~500mg 每8小時一次; 下呼吸道 500mg 每8小時; 淋病 3gm 單一口服劑量 — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F

### A2 · Renal dose, HD, CRRT

GFR >30: no adjustment (US §2.5; UK §4.2)<br>GFR <30: do NOT use 875 mg dose (US §2.5)<br><br>GFR 10–30: 250–500 mg q12h by severity (US Table 2); UK: max 500 mg q12h<br>GFR <10: 250–500 mg q24h (US); UK: max 500 mg/day<br>HD: 250–500 mg q24h + 1 extra dose during AND 1 at end of HD (US); UK: 500 mg q24h + 500 mg before and 500 mg after HD<br>PD: max 500 mg/day (UK SmPC; no US dose)<br>CRRT: no label or guideline dose and no oral-amoxicillin CRRT PK data (published RRT data are IV amoxicillin/amox-clav in ICU, e.g. PMID 31940615) → individualise; ID-pharmacist input (flagged)<br>(TW 仿單: no renal section → US table used)

**Why:** The column is empty. The stocked product's Taiwan insert has no renal dosing, so under the ground rules the US FDA table is primary and the UK values sit alongside. Note that the US Highlights contain a typo ('GFR greater than 30'), while §2.5 and §8.6 both say less than 30. CRRT is covered by no label, and a PubMed esearch (amoxicillin[ti] AND CRRT/haemofiltration) returned 0 hits, so the CRRT line has to be flagged rather than filled with a number.

**Sources:** US FDA label §2.5 Table 2 / §8.6: 'glomerular filtration rate of less than 30 mL/min should NOT receive the 875 mg dose'; 'GFR 10 to 30 mL/min 500 mg or 250 mg every 12 hours'; 'GFR less than 10 mL/min 500 mg or 250 mg every 24 hours'; 'Hemodialysis 500 mg or 250 mg every 24 hours… additional dose both during and at the end of dialysis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2 Renal impairment: '>30 no adjustment; 10 to 30 maximum 500 mg twice daily; less than 10 maximum 500 mg/day'; Haemodialysis '500 mg every 24 h. Prior to haemodialysis one additional dose of 500 mg… another dose of 500 mg… after haemodialysis'; 'peritoneal dialysis… maximum 500 mg/day' — https://www.medicines.org.uk/emc/product/10637/smpc; NCBI E-utilities esearch 2026-10-05, term 'amoxicillin[ti] AND (continuous renal replacement[tiab] OR hemofiltration[tiab] OR haemofiltration[tiab])' → 0 results — https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi

### A3 · Hepatic dose

No specific dose adjustment (none in US label); UK SmPC: dose with caution and monitor hepatic function at regular intervals 肝功能不全：謹慎使用並定期監測肝功能

**Why:** The column is empty. The US label has no hepatic-dosing statement, but it does list AST/ALT rises, cholestatic jaundice and hepatitis in §6.2. The UK SmPC gives explicit caution-and-monitor wording.

**Sources:** UK SmPC §4.2 Hepatic impairment: 'Dose with caution and monitor hepatic function at regular intervals'; §5.2 — https://www.medicines.org.uk/emc/product/10637/smpc; US FDA label §6.2 Liver: 'moderate rise in AST and/or ALT… cholestatic jaundice… acute cytolytic hepatitis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d

### A4 · Pediatric dose

≥3 months & <40 kg (US): mild-mod 25 mg/kg/day ÷q12h or 20 mg/kg/day ÷q8h; severe/LRTI 45 mg/kg/day ÷q12h or 40 mg/kg/day ÷q8h<br>≤3 months (≤12 wk): max 30 mg/kg/day ÷q12h (US)<br>≥40 kg: adult dose (US/UK)<br>UK SmPC (<40 kg): 20–90 mg/kg/day divided (strep tonsillitis/pharyngitis 40–90; BID only at upper range); typhoid 100 mg/kg/day ÷TID; endocarditis prophylaxis 50 mg/kg once 30–60 min pre-procedure; early Lyme 25–50 mg/kg/day ÷TID ×10–21 d<br>TW 仿單: 20–40 mg/kg/day ÷q8h (LRTI 40 mg/kg/day); ≥20 kg → adult dose<br>Renal <40 kg (UK): GFR 10–30 15 mg/kg BID (max 500 mg BID); <10 15 mg/kg q24h (max 500 mg); HD 15 mg/kg q24h + 15 mg/kg before & after HD. US: no pediatric renal dosing<br>H. pylori: not established in children (US)<br>Only 250 mg cap stocked — swallow whole; not for children who cannot swallow capsules (UK)

**Why:** The column is empty. US Table 1 and §2.3, UK §4.2 and the TW insert each give paediatric dosing. The TW insert's adult-dose threshold (20 kg) conflicts with the 40 kg threshold in the US and UK labels, so both are shown. Paediatric renal dosing appears only in the UK SmPC.

**Sources:** US FDA label §2.2 Table 1, §2.3: 'upper dose… 30 mg/kg/day divided every 12 hours'; 'no dosing recommendations for pediatric patients with impaired renal function'; §8.4 H. pylori 'not been established in pediatric patients' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2 Children <40 kg: '20 to 90 mg/kg/day in divided doses'; 'Prophylaxis of endocarditis 50 mg/kg'; renal '15 mg/kg given twice daily (maximum 500 mg twice daily)'; HD children; Method of administration 'Swallow with water without opening capsule… not suitable for… patients who cannot swallow capsules' — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單 衛署藥製字第012051號: 小孩 20mg~40mg/公斤/日 每8小時; 若小孩體重達20公斤以上則依成人劑量 — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F

### A5 · Indications

["UTI", "SSTI", "Pneumonia", "CAP", "Osteoarthritis"]

**Why:** US §1 covers GU tract, skin and skin structure, and lower respiratory tract infections. UK §4.1 covers acute cystitis, pyelonephritis, asymptomatic bacteriuria in pregnancy, CAP, dental abscess with spreading cellulitis and prosthetic joint infections. 'Osteoarthritis' is the schema's only bone/joint tag; it rests on the SmPC prosthetic-joint indication, and Reviewer B should confirm the owner uses it for bone/joint infection. I did not tag 'Endocarditis': the SmPC lists only endocarditis PROPHYLAXIS, and treatment of endocarditis appears only in the Taiwan insert. H. pylori, AOM, sinusitis, pharyngitis, AECOPD, typhoid and Lyme have no schema option, so they go in Notes.

**Sources:** US FDA label §1 Indications and Usage — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.1: '• Community acquired pneumonia • Acute cystitis • Asymptomatic bacteriuria in pregnancy • Acute pyelonephritis • Typhoid and paratyphoid fever • Dental abscess with spreading cellulitis • Prosthetic joint infections • Helicobacter pylori eradication • Lyme disease… prophylaxis of endocarditis' — https://www.medicines.org.uk/emc/product/10637/smpc

### A6 · Coverage

["Streptococcus", "E. faecalis", "Listeria", "E.coli", "Proteus", "Haemophilus"]

**Why:** US §12.4 lists E. faecalis, Staphylococcus spp., S. pneumoniae, α/β-haemolytic streptococci, E. coli, H. influenzae, H. pylori and P. mirabilis, all β-lactamase-negative only. The UK SmPC lists Listeria as commonly susceptible. I left out MSSA/Staphylococcus because the SmPC says 'Almost all S. aureus are resistant to amoxicillin due to production of penicillinase'; Notes should explain this. 'E. faecalis' is used rather than the genus tag because the SmPC lists E. faecium as resistant. Anaerobes and Bacteroides are not tagged: Bacteroides is inherently resistant, and Clostridium and Fusobacterium are only 'acquired resistance may be a problem'. Klebsiella, Enterobacter, Pseudomonas, Acinetobacter, Chlamydia, Mycoplasma and Legionella are inherently resistant.

**Sources:** US FDA label §12.4 Microbiology 'Antimicrobial Activity' list; §1 '(ONLY β-lactamase-negative) isolates' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §5.1 'Commonly Susceptible Species… Enterococcus faecalis, Beta-hemolytic streptococci (Groups A, B, C and G), Listeria monocytogenes'; 'Inherently resistant… Enterococcus faecium, Acinetobacter, Enterobacter, Klebsiella, Pseudomonas, Bacteroides, Chlamydia, Mycoplasma, Legionella'; '* Almost all S.aureus are resistant' — https://www.medicines.org.uk/emc/product/10637/smpc

### A7 · Side Effects

["GI", "SJS/TEN", "DRESS", "hematologic", "LFT↑", "CNS", "AKI", "coagulopathy"]

**Why:** The most common reactions are diarrhoea, rash, vomiting and nausea (GI). SCAR is a warning (SJS/TEN/DRESS/AGEP). Post-marketing reports include anaemia, thrombocytopenia, leukopenia and agranulocytosis (hematologic), AST/ALT rise and hepatitis (LFT↑), and convulsions (CNS, especially in renal impairment or at high dose). The SmPC lists crystalluria with acute renal injury and interstitial nephritis (AKI) and prolonged PT/bleeding time (coagulopathy). Rash, anaphylaxis, DIES, CDAD and mucocutaneous candidiasis have no schema tag and go in Notes.

**Sources:** US FDA label §5.1–5.4, §6.1 'diarrhea, rash, vomiting, and nausea', §6.2 Hemic/Liver/CNS/Renal 'Crystalluria' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.4 'Convulsions may occur in patients with impaired renal function or… high doses'; 'Crystalluria… (including acute renal injury)'; §4.8 'Prolongation of bleeding time and prothrombin time'; 'Interstitial nephritis' — https://www.medicines.org.uk/emc/product/10637/smpc

### A8 · Monitor

["renal", "LFT", "CBC", "PT/INR"]

**Why:** The UK SmPC and TW insert both advise periodic renal, hepatic and haematopoietic checks during prolonged therapy. The US and UK labels both advise PT/INR monitoring with oral anticoagulants. Renal function also drives dosing.

**Sources:** UK SmPC §4.4 'Prolonged therapy: Periodic assessment of organ system functions; including renal, hepatic and haematopoietic function'; 'Anticoagulants… Appropriate monitoring' — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單: 長期治療使用時，須定期作肝臟、腎臟和造血機能檢查 — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F; US FDA label §7.2 Oral anticoagulants; §8.5 'may be useful to monitor renal function' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d

### A9 · Mechanism

β-lactam (aminopenicillin): binds PBPs → inhibits peptidoglycan cell-wall synthesis → cell lysis; bactericidal; time-dependent (T>MIC). Hydrolysed by β-lactamases → inactive vs β-lactamase producers (almost all S. aureus, most M. catarrhalis, β-lactamase-producing H. influenzae). Resistance: β-lactamase, altered PBP, impermeability/efflux (UK SmPC §5.1)

**Why:** The column is empty. The labels give the mechanism, PK/PD driver and resistance mechanisms.

**Sources:** US FDA label §12.4 Mechanism of Action / Resistance — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §5.1 'inhibits… penicillin-binding proteins, PBPs… T>MIC… major determinant of efficacy'; 'Mechanisms of resistance' and EUCAST notes 1–3 — https://www.medicines.org.uk/emc/product/10637/smpc

### A10 · Drug Interactions

Warfarin/oral anticoagulants: ↑ INR → monitor PT/INR, adjust dose<br>Methotrexate: ↓ excretion → ↑ MTX toxicity (UK)<br>Allopurinol: ↑ rash<br>Probenecid: ↓ tubular secretion → ↑/prolonged levels; co-administration not recommended<br>Combined oral contraceptives: may ↓ efficacy (US)<br>Bacteriostatic agents (tetracyclines, macrolides, chloramphenicol, sulfonamides): may antagonise bactericidal effect (in vitro)<br>Lab: false-positive urine glucose with non-enzymatic tests (use glucose oxidase); ↓ estriol assay in pregnancy

**Why:** The column is empty. Every item comes from US §7 or UK §4.4/4.5.

**Sources:** US FDA label §7.1–7.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.5 'Probenecid… Allopurinol… Tetracyclines… Oral anticoagulants… Methotrexate: Penicillins may reduce the excretion of methotrexate'; §4.4 Interference with diagnostic agents — https://www.medicines.org.uk/emc/product/10637/smpc

### A11 · Pregnancy

No evidence of harm: animal studies (up to 2000 mg/kg) no fetal harm (US 8.1); limited human data do not indicate ↑ congenital malformations (UK SmPC 4.6); use when benefit outweighs risk; crosses placenta. (Former FDA letter category retired — not current.) 動物及有限人體資料未顯示致畸風險，效益大於風險時可用

**Why:** The column is empty. The US label (§8.1) still uses the old 'Pregnancy Category B' format, but the ground rules forbid writing the letter category as current, so the proposal gives the underlying data instead. The UK SmPC also lists asymptomatic bacteriuria in pregnancy as an indication. The TW insert has no pregnancy section.

**Sources:** US FDA label §8.1 'Reproduction studies… mice and rats at doses up to 2000 mg/kg… no evidence of harm to the fetus… no adequate and well-controlled studies in pregnant women' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.6 'Limited data… do not indicate an increased risk of congenital malformations. Amoxicillin may be used in pregnancy when the potential benefits outweigh the potential risks'; §5.2 'shown to cross the placental barrier' — https://www.medicines.org.uk/emc/product/10637/smpc

### A12 · Breastfeeding

Acceptable (LactMed): low milk levels (max infant dose ~0.25–0.5% of infant therapeutic dose; RID <0.4%); occasional infant rash, diarrhea or thrush — monitor; no effect on milk supply. UK SmPC: possible sensitisation; benefit/risk assessment. 可哺乳，注意嬰兒腹瀉、皮疹、鵝口瘡

**Why:** The column is empty. LactMed is the designated source for breastfeeding, and the UK SmPC wording is more cautious.

**Sources:** LactMed Amoxicillin NBK500887 (rev 2026-06-15) Summary: 'low levels in milk… Occasionally, rash and disruption of the infant's gastrointestinal flora, resulting in diarrhea or thrush… acceptable in nursing mothers'; Drug Levels '0.25 to 0.5% of a typical infant amoxicillin dosage'; 'RID… remained <0.4%' — https://www.ncbi.nlm.nih.gov/books/NBK500887/; UK SmPC §4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/10637/smpc

### A13 · Notes

Active only vs β-lactamase-NEGATIVE strains; most S. aureus produce penicillinase → not for MSSA 多數金黃色葡萄球菌產生青黴素酶<br>CI: serious hypersensitivity (anaphylaxis/SJS) to amoxicillin or other β-lactams (US); UK: any penicillin, or severe immediate reaction to cephalosporin/carbapenem/monobactam<br>Avoid in infectious mononucleosis (rash) 單核球增多症避免使用<br>DIES (protracted vomiting 1–4h post-dose, mainly children); Kounis syndrome; Jarisch-Herxheimer in Lyme<br>High dose: maintain fluid intake/urine output (crystalluria)<br>Other label indications without a tag: H. pylori, AOM, sinusitis, strep pharyngitis/tonsillitis, AECOPD, typhoid/paratyphoid, Lyme, endocarditis prophylaxis<br>TW 仿單 only (not US/UK): gonorrhea 3g single dose, osteomyelitis, endocarditis, cholecystitis

**Why:** The column is empty. These are the label safety points and coverage caveats that have no tag. The Notes column also carries indications that have no multi-select option (per the ground rules), and it marks the Taiwan-insert-only indications.

**Sources:** US FDA label §4, §5.3 DIES, §5.6 mononucleosis, §10 Overdosage crystalluria — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.3, §4.4 (Kounis, DIES, Jarisch-Herxheimer, crystalluria, mononucleosis), §5.1 '* Almost all S.aureus are resistant' — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單 衛署藥製字第012051號 適應症/效能與用法 — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F

### A14 · Page body

Add the standard structured body used by other entries (## Amoxicillin – Complete Database Content; ### Category / Mechanism / Indications / Coverage / Adult Dose / Renal Dose, HD, CRRT / Hepatic / Pediatric / Side Effects / Monitor / Drug Interactions / Notes / Pregnancy / Breastfeeding), mirroring A1–A13 with section citations, then a ### References list: US FDA label amoxicillin capsules (DailyMed setid 9b3ab9ea-caee-4186-9068-43ca527c098d, v1, Oct 2026) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC Amoxicillin 250 mg Capsules (eMC 10637, rev 09/10/2025) https://www.medicines.org.uk/emc/product/10637/smpc; LactMed Amoxicillin NBK500887 (rev 2026-06-15) https://www.ncbi.nlm.nih.gov/books/NBK500887/; Taiwan 仿單 衛署藥製字第012051號 中國化學 安蒙西林膠囊250毫克 (A012051 In-104-09-24) https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F. No storage/stability section.

**Why:** Existing entries (e.g. AmoClav) carry a sectioned body with a source line and a References list. This new entry has none. Storage is excluded on the owner's instruction.

**Sources:** US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC — https://www.medicines.org.uk/emc/product/10637/smpc; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK500887/; TW 仿單 — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F

### B1 · Adult dose

<span color="blue">`PO`</span> (stocked: 250 mg cap only)<br>Mild-moderate ENT/SSTI/GU: 250 mg q8h or 500 mg q12h (US §2.2)<br>Severe or LRTI: 500 mg q8h or 875 mg q12h (US §2.2; 875 mg not stocked). Pathogen with intermediate susceptibility → use severe-infection dose (US Table 1 footnote)<br>TW 仿單: 250–500 mg q8h; LRTI 500 mg q8h<br>UK SmPC §4.2: 250–500 mg q8h or 750 mg–1 g q12h; severe 750 mg–1 g q8h; CAP 500 mg–1 g q8h; acute cystitis 3 g BID ×1 day; typhoid 500 mg–2 g q8h; prosthetic joint infection 500 mg–1 g q8h<br>CAP (outpatient, no comorbidity): 1 g q8h (ATS/IDSA 2019, PMID 31573350)<br>H. pylori (US §2.4): triple 1 g + clarithromycin 500 mg + lansoprazole 30 mg q12h ×14 d; dual 1 g + lansoprazole 30 mg q8h ×14 d (UK: 750 mg–1 g BID + PPI + 2nd antibiotic ×7 d)<br>Endocarditis prophylaxis: 2 g PO once, 30–60 min before procedure (UK SmPC §4.2)<br>Lyme, early: 500 mg–1 g q8h ×14 d (10–21 d), max 4 g/day (UK SmPC §4.2)<br>Take at start of meal to reduce GI upset (US §2.1). Continue ≥48–72 h after symptoms resolve; S. pyogenes ≥10 days (US §2.2)

**Why:** Empty column. Values re-checked against US §2.1–2.4 (Table 1), UK SmPC §4.2 and the TW insert 效能與用法 table (250–500 mg q8h; LRTI 500 mg q8h). The 875 mg strength is not stocked, so the route tag says so. The CAP 1 g TID regimen is guideline-based, not on a label. TW gonorrhea 3 g single dose is left out here because it is not in current US/UK labels (see Notes).

**Sources:** US FDA label (DailyMed) §2.1, 2.2 Table 1, 2.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2 Posology — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單 衛署藥製字第012051號 效能與用法 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_d8370f59-8751-4ab2-b765-961d04d77977; Metlay JP et al. ATS/IDSA CAP guideline 2019, PMID 31573350 (verified via esummary) — https://pubmed.ncbi.nlm.nih.gov/31573350/

### B2 · Renal dose, HD, CRRT

GFR \>30: no adjustment (US §2.5; UK §4.2). GFR \<30: do NOT give 875 mg dose (US §2.5)<br><br>GFR 10–30: 250–500 mg q12h by severity (US Table 2); UK: max 500 mg q12h<br>GFR \<10: 250–500 mg q24h (US); UK: max 500 mg/day<br>HD: 250–500 mg q24h + 1 extra dose during AND 1 at end of HD (US); UK: 500 mg q24h + 500 mg before and 500 mg after HD<br>PD: max 500 mg/day (UK SmPC; no US dose)<br>CRRT: no label or guideline dose and no oral-amoxicillin CRRT PK data → individualise; ID-pharmacist input (flagged). Only indirect evidence: 1 ICU case of IV amox/clav during RRT with normal native renal function showed high clearance and low fT\>MIC (PMID 31940615); not directly applicable<br>Pediatric \<40 kg: see Pediatric dose<br>TW 仿單: no renal section

**Why:** Empty column. The TW insert has no renal section, so per the ground rules the US table is primary and UK values sit alongside. I re-verified US §2.5 Table 2 and §8.6, and UK §4.2 (renal, HD and PD tables). The US Highlights line says 'severe renal impairment (GFR greater than 30 mL/min)'; this is a typo that §2.5 and §8.6 contradict ('less than 30'). PubMed esearch (amoxicillin[ti] AND CRRT/hemofiltration) found no oral-amoxicillin CRRT dosing study, only case reports (PMIDs 40608096, 31940615).

**Sources:** US FDA label §2.5 Table 2, §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2 Renal impairment / haemodialysis / peritoneal dialysis — https://www.medicines.org.uk/emc/product/10637/smpc; Lonsdale DO et al. Chemotherapy 2019;64:173-6, PMID 31940615 (verified via efetch) — https://pubmed.ncbi.nlm.nih.gov/31940615/

### B3 · Hepatic dose

No dose adjustment in labels; dose with caution and monitor hepatic function at regular intervals (UK SmPC §4.2/5.2). 肝功能不全：謹慎使用，定期監測肝功能<br>Very rare hepatitis / cholestatic jaundice; moderate AST/ALT rise (US §6.2; UK §4.8)

**Why:** Empty column. UK SmPC §4.2 says 'Dose with caution and monitor hepatic function at regular intervals'. The US label has no hepatic dose section. The TW insert asks for periodic liver function checks during long-term therapy.

**Sources:** UK SmPC §4.2, §5.2 Hepatic impairment — https://www.medicines.org.uk/emc/product/10637/smpc; US FDA label §6.2 Liver — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; TW 仿單 注意事項 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_d8370f59-8751-4ab2-b765-961d04d77977

### B4 · Pediatric dose

≤3 months (≤12 weeks): max 30 mg/kg/day ÷q12h (US §2.3)<br>≥3 months, \<40 kg (US §2.2): mild-mod 25 mg/kg/day ÷q12h or 20 mg/kg/day ÷q8h; severe/LRTI 45 mg/kg/day ÷q12h or 40 mg/kg/day ÷q8h<br>UK SmPC: 20–90 mg/kg/day divided (strep tonsillitis 40–90); BID only when dose is in upper range; typhoid 100 mg/kg/day ÷TID; endocarditis prophylaxis 50 mg/kg once 30–60 min pre-procedure; Lyme early 25–50 mg/kg/day ÷TID ×10–21 d<br>AOM (AAP): high dose 80–90 mg/kg/day ÷q12h (PMID 23439909)<br>≥40 kg: adult dose (US/UK). TW 仿單: 20–40 mg/kg/day ÷q8h; adult dose if ≥20 kg<br>Renal (UK, \<40 kg): GFR 10–30 15 mg/kg q12h (max 500 mg q12h); \<10 15 mg/kg q24h (max 500 mg); HD 15 mg/kg q24h + 15 mg/kg before and after HD. No US pediatric renal dose<br>H. pylori: not established in children (US §8.4)<br>Stocked form is a 250 mg cap: swallow whole; not suitable for children who cannot swallow capsules (UK §4.2)

**Why:** Empty column. Re-verified against US §2.2 Table 1, §2.3 and §8.4, UK §4.2 'Children <40 kg' and its renal table, and the TW insert. The TW weight cut-off (≥20 kg → adult dose) differs from the US/UK cut-off (40 kg); I show both. AOM high-dose is guideline-based and falls within the UK upper limit of 90 mg/kg/day.

**Sources:** US FDA label §2.2, 2.3, 8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2 Children <40 kg, renal table — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單 效能與用法 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_d8370f59-8751-4ab2-b765-961d04d77977; Lieberthal AS et al. AAP AOM guideline 2013, PMID 23439909 (verified via esummary) — https://pubmed.ncbi.nlm.nih.gov/23439909/

### B5 · Indications

CAP, Pneumonia, UTI, SSTI, Osteoarthritis

**Why:** Empty multi-select; all five tags already exist in the schema. The US label covers lower RTI, GU tract and skin/skin structure. UK SmPC §4.1 adds CAP, acute cystitis/pyelonephritis and prosthetic joint infections ('Osteoarthritis' is the tag this DB uses for bone/joint, as on AmoClav). Several indications have no schema option and go in Notes: ENT (otitis, sinusitis, tonsillitis), H. pylori, typhoid/paratyphoid, Lyme, dental abscess, asymptomatic bacteriuria in pregnancy, endocarditis prophylaxis. I left out 'Endocarditis' because neither label lists endocarditis treatment, only prophylaxis; the TW insert's 心內膜炎 and 骨髓炎 go in Notes.

**Sources:** US FDA label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/10637/smpc

### B6 · Coverage

Streptococcus, E. faecalis, Listeria, E.coli, Proteus, Haemophilus

**Why:** Empty multi-select. UK SmPC §5.1 lists E. faecalis, β-haemolytic streptococci and Listeria monocytogenes as 'commonly susceptible'. It lists E. coli, H. influenzae, P. mirabilis, S. pneumoniae and viridans streptococci under 'acquired resistance may be a problem'. The US §1 indications cover β-lactamase-negative Streptococcus, S. pneumoniae, E. coli, P. mirabilis, E. faecalis and H. influenzae. I did not tag MSSA or Staphylococcus: the SmPC says 'almost all S. aureus are resistant to amoxicillin due to production of penicillinase', and the US label covers only β-lactamase-negative isolates. Enterococcus (generic) is not tagged because E. faecium is listed as inherently resistant. Klebsiella, Enterobacter, Acinetobacter, Pseudomonas, Bacteroides, Chlamydia, Mycoplasma and Legionella are listed as inherently resistant. Organisms without a schema option go in Notes: H. pylori, Borrelia, Salmonella Typhi/Paratyphi, Pasteurella.

**Sources:** UK SmPC §5.1 In vitro susceptibility / inherently resistant — https://www.medicines.org.uk/emc/product/10637/smpc; US FDA label §1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d

### B7 · Side Effects

GI, SJS/TEN, DRESS, LFT↑, hematologic, CNS, coagulopathy, AKI

**Why:** Empty multi-select; all options already exist. The most common reactions are diarrhoea, nausea and rash (US §6.1; UK §4.8). CDAD and DIES are in US §5.3–5.4. SCAR (SJS/TEN/DRESS/AGEP) is in US §5.2. AST/ALT rise and cholestatic jaundice are in US §6.2 and UK §4.8. Under hematologic (US §6.2, UK §4.8): anaemia incl. haemolytic, thrombocytopenia, leukopenia, agranulocytosis. CNS (US §6.2; UK §4.4): convulsions and hyperactivity. Coagulopathy (UK §4.8): prolonged bleeding time and PT. AKI (UK §4.8/4.9): interstitial nephritis and crystalluria. Rash is not a schema option, so it goes in Notes along with anaphylaxis and mucocutaneous candidiasis.

**Sources:** US FDA label §5.1–5.6, §6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.4, §4.8, §4.9 — https://www.medicines.org.uk/emc/product/10637/smpc

### B8 · Monitor

renal, LFT, CBC, PT/INR

**Why:** Empty multi-select. UK SmPC §4.4 'Prolonged therapy': periodic assessment of renal, hepatic and haematopoietic function. The TW insert says the same (長期治療須定期作肝臟、腎臟和造血機能檢查). PT/INR with oral anticoagulants is in US §7.2 and UK §4.4/4.5. Renal function also matters for dose selection (US §8.5).

**Sources:** UK SmPC §4.4 — https://www.medicines.org.uk/emc/product/10637/smpc; US FDA label §7.2, §8.5 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; TW 仿單 注意事項 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_d8370f59-8751-4ab2-b765-961d04d77977

### B9 · Mechanism

Binds penicillin-binding proteins (PBPs) → inhibits peptidoglycan cell-wall synthesis → cell lysis; bactericidal. Time-dependent: T\>MIC is the main PK/PD driver. Hydrolysed by β-lactamases → inactive against β-lactamase producers. Resistance mechanisms: β-lactamases, altered PBPs, impermeability/efflux (UK SmPC §5.1)

**Why:** Empty column. Text comes from the UK SmPC §5.1 mechanism, PK/PD and resistance paragraphs, and agrees with US §12.4.

**Sources:** UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/10637/smpc; US FDA label §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d

### B10 · Drug Interactions

Warfarin/oral anticoagulants: ↑ INR → monitor PT/INR; adjust anticoagulant dose (US §7.2; UK §4.5)<br>Methotrexate: ↓ MTX excretion → ↑ toxicity (UK §4.5)<br>Allopurinol: ↑ rash (US §7.3; UK §4.5)<br>Probenecid: ↓ tubular secretion → ↑/prolonged amoxicillin levels; co-administration not recommended (US §7.1; UK §4.5)<br>Tetracyclines/other bacteriostatic drugs (also chloramphenicol, macrolides, sulfonamides in vitro): may antagonise bactericidal effect; clinical significance unclear (US §7.5; UK §4.5)<br>Combined oral contraceptives: possible ↓ efficacy (US §7.4)<br>Lab: false-positive urine glucose with non-enzymatic tests (use glucose-oxidase); ↓ estriol assay values in pregnancy (US §7.6; UK §4.4)

**Why:** Empty column. Every item appears in at least one label. The OC interaction is still in this US label (§7.4), so I do not flag it.

**Sources:** US FDA label §7.1–7.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.4, §4.5 — https://www.medicines.org.uk/emc/product/10637/smpc

### B11 · Pregnancy

Animal studies (up to 2000 mg/kg) show no fetal harm; no adequate controlled human studies; use if clearly needed (US §8.1). Limited human data do not indicate increased risk of congenital malformations; use when benefit outweighs risk (UK §4.6). UK-approved for asymptomatic bacteriuria in pregnancy (§4.1). Crosses placenta (UK §5.2). (Former FDA letter category retired — not current.) 動物試驗無致畸；人類資料有限，未顯示畸形風險增加

**Why:** Empty column. The US label §8.1 is in the old format and still prints 'Pregnancy Category B'. Letter categories are retired, so the text describes the data rather than citing the letter.

**Sources:** US FDA label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.1, §4.6, §5.2 — https://www.medicines.org.uk/emc/product/10637/smpc

### B12 · Breastfeeding

Acceptable (LactMed): low milk levels, ~0.25–0.5% of a typical infant dose (RID \<0.4%); no effect on milk supply. Occasionally infant rash, diarrhea or thrush; monitor the infant. UK SmPC §4.6: possible sensitisation; use after benefit/risk assessment. 可哺乳；注意嬰兒腹瀉、皮疹、鵝口瘡

**Why:** Empty column. Text taken from the LactMed NBK500887 Summary, Drug Levels and Effects on Lactation sections, with UK SmPC §4.6 alongside. The US label §8.3 still says 'caution' (old 'Nursing Mothers' format).

**Sources:** LactMed Amoxicillin NBK500887 (rev 2026-06-15) — https://www.ncbi.nlm.nih.gov/books/NBK500887/; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/10637/smpc

### B13 · Notes

Contraindicated: penicillin hypersensitivity; serious reaction (anaphylaxis/SJS) to any β-lactam (US §4; UK §4.3: severe immediate reaction to cephalosporin/carbapenem/monobactam). 對盤尼西林過敏者禁用<br>Most common AEs: diarrhoea, nausea, rash (US §6.1; UK §4.8); anaphylaxis (US §5.1); CDAD (US §5.4); mucocutaneous candidiasis<br>Avoid in infectious mononucleosis (high rate of rash) (US §5.6; UK §4.4) 單核球增多症避免使用<br>DIES: protracted vomiting 1–4 h after dose, mostly children → stop drug (US §5.3)<br>Seizures with high dose or renal impairment; at high doses keep fluid intake and urine output adequate (crystalluria) (UK §4.4)<br>Jarisch-Herxheimer reaction in Lyme disease; Kounis syndrome (UK §4.4)<br>Not β-lactamase stable: almost all S. aureus and most M. catarrhalis are resistant (UK §5.1). Oral aminopenicillin breakpoints for Enterobacterales and enterococci apply to UTI only (UK §5.1, EUCAST notes 6/10)<br>Organisms/indications with no tag: H. pylori, Borrelia (Lyme), Salmonella Typhi/Paratyphi, Pasteurella, ENT infections (AOM, sinusitis, strep pharyngitis/tonsillitis), AECB/AECOPD, asymptomatic bacteriuria in pregnancy, dental abscess, endocarditis prophylaxis<br>TW 仿單 also lists gonorrhea 3 g PO single dose and osteomyelitis/endocarditis/cholecystitis (not in current US/UK labels)<br>Stocked: 250 mg cap; swallow whole with water. Poor CSF penetration (UK §5.2)

**Why:** Empty column. Adds label safety points and the items that have no multi-select option, as the ground rules require. The TW-only indications are recorded as insert content, not as approved US/UK indications.

**Sources:** US FDA label §4, §5.3, §5.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC §4.2, §4.3, §4.4, §5.1, §5.2 — https://www.medicines.org.uk/emc/product/10637/smpc; TW 仿單 衛署藥製字第012051號 — https://mcp.fda.gov.tw/insert/pdfcasefile/i_d8370f59-8751-4ab2-b765-961d04d77977

### B14 · Page body

Add the sectioned body used by other entries (Category, Mechanism, Indications, Coverage, Adult/Renal/Hepatic/Pediatric dose, Side Effects, Monitor, Drug Interactions, Notes, Pregnancy, Breastfeeding), mirroring the final (edited) B1–B13 text without storage details. End with a References list: US FDA label, Amoxicillin capsule (SportPharm relabel of Teva; DailyMed setid 9b3ab9ea-caee-4186-9068-43ca527c098d, v1, Oct 2026) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC Amoxicillin 250 mg Capsules (eMC 10637, rev 09/10/2025) https://www.medicines.org.uk/emc/product/10637/smpc; Taiwan 仿單 衛署藥製字第012051號 '中國化學' 安蒙西林膠囊 (E版 104.09.23) https://mcp.fda.gov.tw/insert/pdfcasefile/i_d8370f59-8751-4ab2-b765-961d04d77977; LactMed NBK500887 (rev 2026-06-15) https://www.ncbi.nlm.nih.gov/books/NBK500887/; Metlay JP et al. ATS/IDSA CAP 2019 https://pubmed.ncbi.nlm.nih.gov/31573350/; Lieberthal AS et al. AAP AOM 2013 https://pubmed.ncbi.nlm.nih.gov/23439909/; Lonsdale DO et al. Chemotherapy 2019 https://pubmed.ncbi.nlm.nih.gov/31940615/

**Why:** New entry with an empty body. Existing entries (e.g. AmoClav) carry a full sectioned body plus a References list, and the owner's style expects that.

**Sources:** US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d; UK SmPC — https://www.medicines.org.uk/emc/product/10637/smpc; TFDA insert listing — https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC012051%E8%99%9F; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK500887/

### B15 · Category

Penicillin (aminopenicillin, oral) — no change needed; optionally append 'extended-spectrum penicillin, ATC J01CA04'

**Why:** Correct per UK SmPC §5.1 ('Penicillins with extended spectrum; ATC Code J01CA04') and US §11 (analog of ampicillin). The hospital stocks only the oral capsule. The suggested addition is optional.

**Sources:** UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/10637/smpc; US FDA label §11 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b3ab9ea-caee-4186-9068-43ca527c098d

## Apply log

- Adult dose: merged both reviewer versions (stocked 250 mg cap only; US mild-mod/severe doses; TW 仿單 doses including gonorrhea 3 g; UK SmPC per-indication doses; CAP 1 g q8h ATS/IDSA PMID 31573350; H. pylori US and UK regimens; endocarditis prophylaxis; early Lyme; take at start of meal; duration incl. 仿單 2–3 天)
- Renal dose, HD, CRRT: US Table 2 with UK values alongside; HD; PD; CRRT flagged with indirect PMID 31940615; TW 仿單 has no renal section so US table used
- Hepatic dose: no adjustment; UK caution and monitoring; bilingual note; rare hepatitis and cholestatic jaundice
- Pediatric dose: US ≤3 mo and ≥3 mo <40 kg; UK 20–90 mg/kg/day and special indications; AAP AOM PMID 23439909; TW 仿單 incl. LRTI 40 mg/kg/day and ≥20 kg adult dose; UK pediatric renal; H. pylori not established; capsule-swallowing note
- Indications multi-select: CAP, Pneumonia, UTI, SSTI, Osteoarthritis
- Coverage multi-select: Streptococcus, E. faecalis, Listeria, E.coli, Proteus, Haemophilus
- Side Effects multi-select: GI, SJS/TEN, DRESS, LFT↑, hematologic, CNS, coagulopathy, AKI
- Monitor multi-select: renal, LFT, CBC, PT/INR
- Mechanism: merged PBP/bactericidal/T>MIC/β-lactamase-producer/resistance text
- Drug Interactions: warfarin, MTX, allopurinol, probenecid, bacteriostatics, OCP, lab interference, all with section citations
- Pregnancy: US §8.1 and UK §4.6/5.2 wording; retired FDA letter category stated as not current; bilingual note
- Breastfeeding: LactMed 0.25–0.5% of infant dose, RID <0.4%, infant effects; UK sensitisation; bilingual note
- Notes: merged CI, mononucleosis, DIES, Kounis, Jarisch-Herxheimer, crystalluria, β-lactamase/MSSA (with Chinese note), untagged organisms/indications, TW-only indications, stocked form
- Page body: added '## Amoxicillin – Complete Database Content' with sections Category through Breastfeeding, no storage section
- References section at end: US FDA DailyMed label, UK SmPC eMC 10637, Taiwan 仿單 012051 (both TFDA URLs), LactMed NBK500887, PMIDs 31573350, 23439909, 31940615
- Renewed date set to 2026-10-05 (is_datetime 0)
- Category left unchanged (both reviewers said no change needed; the extra suffix was optional)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
