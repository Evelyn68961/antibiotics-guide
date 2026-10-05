# Verification: Ertapenem

- **Notion entry:** [Ertapenem](https://app.notion.com/20dc496dfff180539be2c77ad251f8bf)
- **Hospital codes:** ERT01 (Ertapenem inj 1 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/ertapenem.json` (plus any `sources/ertapenem-taiwan-insert-*.txt`)

## Product and sources

FJUH ERT01: Ertapenem inj 1 g/vial, "松瑞"厄他培南注射劑1公克 / Ertapenem for injection "SLC" 1 g. TFDA licence 衛部藥製字第059078號 (松瑞製藥南科分公司針劑廠), NHI AC59078209, ATC J01DH03. Taiwan 仿單 updated 111/08/12, version 2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F. Reference labels: US INVANZ (Merck) DailyMed setid 33f3b99b-fa82-42e0-26bf-f49891ae3d22 v42 (Apr 09, 2026); UK SmPC INVANZ 1 g eMC product 1713 (rev. 25 Sep 2025); LactMed NBK501585 (rev. 2025-02-15).

## Agreed fixes applied in Notion (43)

### A1 · Page body (error)

**Was:** End of page: "---\n**Corrections needed in your current entry:**\n1. **Remove MRSA from Coverage** – ertapenem has NO activity against MRSA\n2. Add Enterobacteriaceae, anaerobes to coverage (color-coded appropriately)\n3. Complete all empty fields as above\nWould you like me to format this for direct Notion database integration?"

**Now:** REMOVE (the whole block from the final "---" through "Would you like me to format this for direct Notion database integration?")

**Why:** This is AI-chat text pasted into the page, not monograph content. The ground rules say to remove pasted AI-chat text. The Coverage tags already leave out MRSA and already list Enterobacterales, so the 'corrections' are out of date anyway.

**Sources:** Ground rule: remove pasted AI-chat text; US FDA INVANZ label §12.4 Microbiology (MRSA not listed): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22

### A2 · Renal dose, HD, CRRT (error)

**Was:** CrCl \<30 & HD: 500mg IV QD

**Now:** CrCl >30: no adjustment<br>CrCl ≤30 (incl. ESRD ≤10) & HD: 500 mg IV QD (TW 仿單 = US label)<br>HD: if dose given within 6 h before HD → 150 mg supplement after HD; ≥6 h before → none<br>UK SmPC: CrCl ≤30 / HD → should not be used (insufficient data)<br>PD: no data. CRRT: no label data; CVVHD/CVVHDF 500 mg–1 g QD met PK targets (Eyler 2014, PMID 24323468)<br>Peds with renal impairment/HD: no data

**Why:** (1) The threshold is ≤30, not <30: as written, CrCl exactly 30 is left out. (2) The 150 mg post-HD supplement, which both the stocked product's TW insert and the US label give, is missing from the property (the body has it). (3) The UK SmPC conflicts with these labels. Under the ground rules the TW insert of the stocked product takes priority, and the UK position should be mentioned next to it. (4) No label covers CRRT. One PK study backs the body's '500 mg–1 g daily' (PMID verified via esummary).

**Sources:** TW 仿單 3.1 腎功能不全患者/血液透析的患者: 「肌酸酐廓清率≤30 mL/min/1.73m2…包括接受血液透析的病人，每天必須使用500毫克…在血液透析之前的6小時內注射…建議再給與150毫克」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F; US FDA label §2.4–2.5: 'creatinine clearance ≤30 mL/min/1.73 m2 and end-stage renal disease … should receive 500 mg daily… supplementary dose of 150 mg… no data in patients undergoing peritoneal dialysis or hemofiltration… no data in pediatric patients' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.2 Renal impairment/Haemodialysis: 'inadequate data … ertapenem should not be used in these patients' https://www.medicines.org.uk/emc/product/1713/smpc; Eyler RF et al. Antimicrob Agents Chemother 2014;58:1320-6, PMID 24323468 https://pubmed.ncbi.nlm.nih.gov/24323468/

### A3 · Page body (missing)

**Was:** Renal Dose table rows: '≤30 mL/min \| 500 mg daily'; 'CRRT \| Limited data; 500 mg–1 g daily suggested based on clearance'; 'PD \| No data available' (no UK position, no citation)

**Now:** Add row: 'UK SmPC \| CrCl ≤30 or HD: should not be used (insufficient data) — US label & TW 仿單 (stocked product) give 500 mg daily'. Change the CRRT cell to: 'No label data. CVVHD/CVVHDF: 500 mg QD, 750 mg QD, 500 mg BID and 1 g QD all reached unbound conc >2 mcg/mL for 40% of interval in ≥96% of simulated pts (Eyler 2014, PMID 24323468)'. Add a line under the table: 'No data in pediatric renal impairment/HD (US §2.4–2.5; TW 仿單)'.

**Why:** Renal dosing differs between labels, and the page does not say so. The CRRT statement is plausible but has no citation; Eyler 2014 supports it.

**Sources:** UK SmPC 4.2 https://www.medicines.org.uk/emc/product/1713/smpc; US FDA label §2.4–2.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; Eyler RF et al. AAC 2014, PMID 24323468 https://pubmed.ncbi.nlm.nih.gov/24323468/

### A4 · Indications (missing)

**Was:** [cIAI, CAP, cUTI, cSSTI, Surgical prophylaxis]

**Now:** [cIAI, CAP, cUTI, cSSTI, Pelvic, Surgical prophylaxis]

**Why:** All three labels list acute pelvic infections, and the page body lists it too, but the 'Pelvic' tag (an existing option) is missing. Diabetic foot without osteomyelitis falls under cSSTI in the US label.

**Sources:** US FDA label §1.5 'Acute pelvic infections including postpartum endomyometritis, septic abortion and post-surgical gynecologic infections' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.1 'Acute gynaecological infections' https://www.medicines.org.uk/emc/product/1713/smpc; TW 仿單 2 適應症 「急性骨盆感染，包括產後子宮內肌炎、敗血性流產和手術後婦科感染」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F

### A5 · Coverage (missing)

**Was:** [Streptococcus, MSSA, Enterobacter, E.coli, Klebsiella, Proteus, Serratia, Haemophilus, Bacteroides]

**Now:** [Streptococcus, MSSA, Enterobacter, E.coli, Klebsiella, Proteus, Serratia, Haemophilus, Bacteroides, Anaerobes]

**Why:** The labels list anaerobes beyond Bacteroides with clinical activity: Peptostreptococcus, Porphyromonas, Prevotella, Clostridium (not C. difficile), Eubacterium and Fusobacterium. The page body lists them as well. 'Anaerobes' is an existing option. Note that Enterobacter and Serratia are only in the US in-vitro list, but the SmPC calls them commonly susceptible, so keeping them is fine.

**Sources:** US FDA label §12.4 Microbiology, anaerobic bacteria list https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 5.1 'Commonly susceptible species: … Anaerobes: Clostridium species (excluding C. difficile), Eubacterium, Fusobacterium, Peptostreptococcus, Porphyromonas asaccharolytica, Prevotella' https://www.medicines.org.uk/emc/product/1713/smpc

### A6 · Drug Interactions (error)

**Was:** Valproic acid – reduces VPA levels by 60–95% → seizure risk (AVOID)

**Now:** Valproic acid/divalproex – ↓VPA below therapeutic range (mean ↓72% with ertapenem, n=9, onset within 24 h; Wu 2016 PMID 27322166) → breakthrough seizures; ↑VPA dose may not overcome it → generally not recommended; use a non-carbapenem, or add an anticonvulsant if unavoidable (AVOID)<br>Probenecid – competes for tubular secretion (AUC ↑25%, t½ 4.0→4.8 h) → co-administration not recommended

**Why:** The '60–95%' range does not appear in any label, and I found no study that gives it. A Taiwanese cohort measured a 72% ± 17% fall with ertapenem, starting within 24 h (PMID verified). The probenecid interaction is a labelled US §7.1 interaction, but the property leaves it out (the body has it).

**Sources:** US FDA label §5.3, §7.1, §7.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.5 'concomitant use of ertapenem and valproic acid/sodium valproate is not recommended' https://www.medicines.org.uk/emc/product/1713/smpc; TW 仿單 5.1(3) 「通常不建議ertapenem與valproic acid或divalproex sodium併用」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F; Wu CC et al. Ther Drug Monit 2016;38:587-92, PMID 27322166 https://pubmed.ncbi.nlm.nih.gov/27322166/

### A7 · Page body (unsupported)

**Was:** Drug Interactions table: 'Valproic acid \| ↓ VPA levels by 60–95% within 24 hrs'; 'Live vaccines (BCG, typhoid, cholera) \| ↓ Vaccine efficacy \| Avoid concurrent use'; 'Oral contraceptives \| May ↓ estrogen levels via altered gut flora \| Low risk; consider backup contraception'

**Now:** Valproic acid row → '↓ VPA below therapeutic range; mean ↓72% with ertapenem (n=9) within 24 h (Wu 2016, PMID 27322166); ↑VPA dose may not overcome it (US §5.3)'. Live vaccines row → keep, add '(not in US/UK/TW ertapenem labels – unsourced; check the specific live bacterial vaccine label, e.g. oral typhoid/cholera)'. Oral contraceptives row → keep, add '(not in US/UK/TW ertapenem labels – unsourced, theoretical)'.

**Why:** No source supports the VPA magnitude (see A6). No label lists the live-vaccine or oral-contraceptive interactions; they are generic antibiotic statements with no ertapenem source. They are flagged rather than deleted because no source contradicts them.

**Sources:** US FDA label §7 (lists only probenecid and valproic acid) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.5 and 5.2 Distribution https://www.medicines.org.uk/emc/product/1713/smpc; Wu CC et al. 2016, PMID 27322166 https://pubmed.ncbi.nlm.nih.gov/27322166/

### A8 · Pregnancy (error)

**Was:** Former Category B

**Now:** No FDA letter category (PLLR): human data insufficient to assess risk; no malformations in rats (1.2× MRHD) or mice (3× MRHD) (FDA §8.1). UK SmPC / TW 仿單: use only if benefit outweighs risk

**Why:** Under the ground rules, a letter category should not be the content of this field. The current PLLR summary and the UK/TW wording are the label content.

**Sources:** US FDA label §8.1 Pregnancy Risk Summary https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.6 'should not be used during pregnancy unless the potential benefit outweighs the possible risk' https://www.medicines.org.uk/emc/product/1713/smpc; TW 仿單 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F

### A9 · Breastfeeding (minor)

**Was:** acceptable if needed

**Now:** acceptable if needed (LactMed: low milk levels <0.125–0.38 mg/L; monitor infant for diarrhoea/thrush). UK SmPC: should not breast-feed; TW 仿單: 謹慎使用

**Why:** LactMed's verdict is right, but the property does not mention that the labels disagree. The UK SmPC advises against breast-feeding and the TW insert asks for caution.

**Sources:** LactMed Ertapenem NBK501585 (rev. 2025-02-15) Summary: 'Ertapenem is acceptable in nursing mothers' https://www.ncbi.nlm.nih.gov/books/NBK501585/; UK SmPC 4.6 'mothers should not breast-feed their infants while receiving ertapenem' https://www.medicines.org.uk/emc/product/1713/smpc; TW 仿單 6.2 哺乳 「當授乳婦女接受…治療時，必須謹慎小心」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F; US FDA label §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22

### A10 · Monitor (missing)

**Was:** [renal, neuro, LFT]

**Now:** [renal, neuro, LFT, CBC]

**Why:** The US label advises periodic renal, hepatic and haematopoietic checks during prolonged therapy. The labels also report a fall in neutrophils (paediatric 3.0%) and thrombocytopenia/neutropenia. 'CBC' is an existing option.

**Sources:** US FDA label §5.7 Laboratory Tests 'periodic assessment of organ system function, including renal, hepatic, and hematopoietic, is advisable during prolonged therapy'; §6.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.8 Blood: 'Rare: Neutropenia, thrombocytopenia' https://www.medicines.org.uk/emc/product/1713/smpc

### A11 · Side Effects (missing)

**Was:** [CNS, LFT↑, GI]

**Now:** [CNS, LFT↑, GI, thrombophlebitis, DRESS]

**Why:** Infused-vein complication is one of the most common drug-related events (3.7%), and the SmPC lists 'phlebitis/thrombophlebitis' as common. Both the US and UK labels list DRESS from post-marketing reports. Both tags are existing options.

**Sources:** US FDA label §6.1 (infused vein complication 3.7%; phlebitis/thrombophlebitis) and §6.2 Post-Marketing (DRESS, AGEP, hypersensitivity vasculitis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.8 Vascular disorders 'Common: Infused vein complication, phlebitis/thrombophlebitis'; Skin 'Not known: … DRESS' https://www.medicines.org.uk/emc/product/1713/smpc

### A12 · Page body (error)

**Was:** ### Category: Carbapenem (Group 2 carbapenem - lacks antipseudomonal activity)

**Now:** Carbapenem (Group 1 carbapenem — limited activity against non-fermenters: lacks antipseudomonal / anti-Acinetobacter activity)

**Why:** In the Shah & Isaacs classification, ertapenem is the first Group 1 carbapenem: broad-spectrum but with limited activity against non-fermentative Gram-negative bacilli. Group 2 means the antipseudomonal agents (imipenem, meropenem, doripenem), so the current wording contradicts itself. The SmPC confirms that P. aeruginosa and other non-fermenters are generally resistant. PMID verified via esummary; the record has no abstract, so the pharmacist should check the group numbering against the full text.

**Sources:** Shah PM, Isaacs RD. Ertapenem, the first of a new group of carbapenems. J Antimicrob Chemother 2003;52:538-42, PMID 12951340 https://pubmed.ncbi.nlm.nih.gov/12951340/; UK SmPC 5.1 'P. aeruginosa and other non-fermentative bacteria are generally resistant' https://www.medicines.org.uk/emc/product/1713/smpc

### A13 · Page body (minor)

**Was:** Notes: 'Renal dysfunction (half-life extends from 4.4 hrs → 14–19 hrs in ESRD)'

**Now:** Renal dysfunction (half-life ≈4–4.5 h → ≈14 h in ESRD; Mistry 2006, PMID 16988201)

**Why:** In the renal-PK study, half-life was 4.5 h in controls, 4.4 h in mild renal impairment, 10.6 h in advanced impairment and 14.1 h in ESRD. The page uses the mild-impairment value as baseline, and no source supports the '19 h' figure. The labels give a normal half-life of about 4 h. PMID verified.

**Sources:** Mistry GC et al. J Clin Pharmacol 2006;46:1128-38, PMID 16988201 https://pubmed.ncbi.nlm.nih.gov/16988201/; US FDA label §12.3 Elimination 'mean plasma half-life … approximately 4 hours' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22

### A14 · Page body (unsupported)

**Was:** Clinical Pearls: 'Lower seizure potential than imipenem (acidic C-2 side chain → less GABA antagonism)'; 'Previous stroke should be considered a relative contraindication'

**Now:** 'Lower seizure rate than imipenem (ertapenem <1% vs imipenem 3–33% in reports; Miller 2011, PMID 21449629; US label 0.5%). Proposed mechanism: less basic C-2 side chain → less GABA-A binding [mechanism not in labels – verify]' ; 'Pre-existing CNS disease (brain lesions, seizure history) ↑ seizure/encephalopathy risk – adhere closely to renal dosing (US §5.2; SmPC 4.4). Old stroke was the strongest independent seizure predictor in a Taiwanese case-control study (OR 14.4; Lee 2017, PMID 28759588) – prefer alternatives if available'

**Why:** A review supports the lower seizure rate (PMID verified), but the C-2 side-chain mechanism has no source. No label calls prior stroke a 'relative contraindication': the labels name CNS disorders as a risk factor and urge close adherence to dosing. I suggest rewording to match the label instead of deleting.

**Sources:** Miller AD et al. Pharmacotherapy 2011;31:408-23, PMID 21449629 https://pubmed.ncbi.nlm.nih.gov/21449629/; US FDA label §5.2 Seizure Potential https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.4 Seizures / Encephalopathy https://www.medicines.org.uk/emc/product/1713/smpc

### A15 · Adult dose (missing)

**Was:** 1g IV QD

**Now:** 1 g IV/IM QD (IV over 30 min, ≤14 d; IM ≤7 d; no dextrose diluents)<br>Colorectal surgery prophylaxis: 1 g IV ×1, 1 h before incision<br>UK SmPC: IV only

**Why:** IM use is approved in the stocked TW product and the US label, and the labels set duration limits by route. The surgical prophylaxis regimen is an approved indication but is missing from the property. Administration details are not storage, so they are allowed.

**Sources:** US FDA label §2.1–2.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; TW 仿單 3.1 用法用量 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F; UK SmPC 4.2 'by the intravenous route' https://www.medicines.org.uk/emc/product/1713/smpc

### A16 · Page body (minor)

**Was:** Adult Dose: 'Standard: 1 g IV/IM once daily; Duration: 3–14 days depending on indication; Diabetic foot infections: up to 4 weeks'

**Now:** **Standard:** 1 g <span color="green">`IV`</span>/<span color="green">`IM`</span> once daily – IV infusion over 30 min for up to 14 days; IM (reconstituted with 3.2 mL lidocaine without epinephrine; US 1%, TW 仿單 1% or 2%) for up to 7 days; do not use dextrose-containing diluents. UK SmPC: IV only.<br>- Duration: 3–14 days depending on indication (US Table 1: cIAI 5–14 d, cSSSI 7–14 d, CAP 10–14 d, cUTI 10–14 d, pelvic 3–10 d)<br>- Diabetic foot infections: adults received up to 28 days (parenteral or parenteral + oral switch) (US Table 1)<br>- (keep existing surgical prophylaxis bullet)

**Why:** The route-specific maximum durations and the dextrose incompatibility are missing. The 28-day diabetic-foot course in the label includes an oral switch. The lidocaine concentration differs between the US label and the stocked product's TW insert.

**Sources:** US FDA label §2.1–2.2, §2.7, Table 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; TW 仿單 3.1 「3.2公撮的1.0％或2.0％之lidocaine HCl」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F

### A17 · Page body (missing)

**Was:** Side Effects: 'Diarrhea (5%), nausea (3%), vomiting; Headache; Infusion site reactions; Elevated ALT/AST' … Serious list without severe cutaneous reactions

**Now:** Common: diarrhea 5.5%, infused-vein complication 3.7%, nausea 3.1%, headache 2.2%, vaginitis 2.1% (US, drug-related), vomiting; ALT↑ 6.0%, AST↑ 5.2%, ALP↑ 3.4%, platelets↑ 2.8%. Peds: diarrhea 6.5%, infusion-site pain 5.5%, vomiting 2.1%, neutrophils↓ 3.0%. Add to Serious: DRESS, AGEP, hypersensitivity vasculitis (post-marketing). Other post-marketing: teeth staining.

**Why:** The page leaves out label-listed severe cutaneous reactions and paediatric neutropenia, and the incidence figures are rounded.

**Sources:** US FDA label §6.1, §6.2, §6.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.8 https://www.medicines.org.uk/emc/product/1713/smpc

### A18 · Page body (missing)

**Was:** No contraindications section (only 'IM injection prepared with lidocaine (contraindicated if lidocaine allergy)' in Notes)

**Now:** Add under Notes: 'Contraindications: hypersensitivity to ertapenem/other carbapenems, or anaphylaxis/severe reaction to any β-lactam (US §4; SmPC 4.3). IM route contraindicated with amide local-anaesthetic allergy; TW 仿單 also: severe shock or heart block (IM). 禁忌：對carbapenem過敏或對β-lactam曾有嚴重過敏者；IM劑型禁用於醯胺類局部麻醉劑過敏、嚴重休克或心臟傳導阻滯'

**Why:** The label contraindications are missing. The stocked product's TW insert adds IM contraindications (severe shock or heart block) that the US label does not have.

**Sources:** US FDA label §4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.3 https://www.medicines.org.uk/emc/product/1713/smpc; TW 仿單 4 禁忌 「…已知對醯胺(amide)類局部麻醉劑過敏的病人及患有嚴重休克或心臟阻塞的病人，禁止採用經由肌肉注射」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F

### A19 · Page body (missing)

**Was:** Monitor section: renal, neuro, albumin, hypersensitivity, LFTs, superinfection (no CBC, no VPA levels)

**Now:** Add: '- **CBC:** periodic during prolonged therapy (renal, hepatic, hematopoietic function — US §5.7)' and '- **Valproate levels:** if co-administration unavoidable (Al-Quteimat 2020, PMID 32508355)'

**Why:** The label advises haematopoietic monitoring. A review recommends checking VPA levels when the combination cannot be avoided (PMID verified). The albumin bullet is supported: 25/29 neurotoxicity cases had albumin <3.5 g/dL (Wang 2023).

**Sources:** US FDA label §5.7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; Al-Quteimat O, Laila A. Hosp Pharm 2020;55:181-7, PMID 32508355 https://pubmed.ncbi.nlm.nih.gov/32508355/; Wang C et al. Infect Drug Resist 2023;16:3649-58, PMID 37313264 https://pubmed.ncbi.nlm.nih.gov/37313264/

### A20 · Page body (minor)

**Was:** Coverage 'NO ACTIVITY against' list: Pseudomonas, Acinetobacter, MRSA, Enterococcus, CRE, Stenotrophomonas; Anaerobes: 'Bacteroides fragilis and Bacteroides spp.'

**Now:** Add to NO ACTIVITY: '❌ Atypicals (Chlamydia, Mycoplasma, Legionella) — add atypical cover for CAP', '❌ Burkholderia cepacia, Aeromonas, Corynebacterium jeikeium'. Add to the Bacteroides line: '(B. fragilis group: acquired resistance may be a problem — SmPC 5.1)'. Optional: 'Resistant to MBL (IMP/VIM) and KPC carbapenemases; ESBL/AmpC + porin loss → resistance'.

**Why:** The SmPC names these species as inherently resistant; leaving out the atypicals matters for CAP use. The SmPC also flags acquired resistance in the B. fragilis group.

**Sources:** UK SmPC 5.1 'Inherently resistant organisms … Burkholderia cepacia, Pseudomonas aeruginosa, Stenotrophomonas maltophilia … Chlamydia, Mycoplasma, Rickettsia, Legionella'; 'Species for which acquired resistance may be a problem: … Bacteroides fragilis and species in the B. fragilis Group' https://www.medicines.org.uk/emc/product/1713/smpc

### A21 · Mechanism (minor)

**Was:** Binds PBP-2/3 → inhibits cell wall synthesis; stable against ESBLs/AmpC; hydrolyzed by MBLs

**Now:** Binds PBP-2/3 → inhibits cell wall synthesis (time-dependent, T>MIC); stable against ESBLs/AmpC; hydrolyzed by MBLs and KPC; ESBL/AmpC + porin loss → resistance

**Why:** The SmPC also names KPC as a carbapenemase that confers resistance, and resistance from ESBL/AmpC plus porin loss is well recognised. The current text could suggest that only MBLs defeat ertapenem.

**Sources:** UK SmPC 5.1 Mechanism of resistance https://www.medicines.org.uk/emc/product/1713/smpc; US FDA label §12.4 Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22

### A22 · Pediatric dose (minor)

**Was:** 3 months to 12 years: 15 mg/kg IV/IM every 12 hours (max 1 g/day)<br>\>12 years: 1 g IV/IM once daily (adult dosing)<br>\<3 months: Not recommended (no data)<br>Not recommended for meningitis (inadequate CNS penetration)

**Now:** Keep as is and append: '<br>No data in pediatric renal impairment or HD<br>UK SmPC: IV only'

**Why:** The existing content matches the labels (≥13 y = 1 g QD). It leaves out the label statement that there are no paediatric renal data.

**Sources:** US FDA label §2.2, §2.4, §2.5, §8.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; TW 仿單 3.1 「目前沒有腎功能不全病童的資料」 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F

### A23 · Page body (minor)

**Was:** Heading '## **ERTAPENEM (Invanz) - Complete Monograph**' (no reference to stocked product or sources)

**Now:** ## **ERTAPENEM (Invanz) - Complete Monograph** + line: 'FJUH stocks 松瑞 Ertapenem "SLC" 1 g (衛部藥製字第059078號). Sources: TW 仿單 (111/08/12), US INVANZ label (DailyMed v42, 2026-04-09), UK SmPC (rev. 2025-09-25), LactMed NBK501585.'

**Why:** The stocked product is the Taiwan generic, and its insert is the preferred renal-dosing source. Naming the product and the source versions makes later re-checks possible.

**Sources:** TW 仿單 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F; US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC https://www.medicines.org.uk/emc/product/1713/smpc; LactMed https://www.ncbi.nlm.nih.gov/books/NBK501585/

### A24 · Page body (minor)

**Was:** Notes / Surgical prophylaxis: no mention of long procedures

**Now:** Add to Clinical Pearls: 'Colorectal prophylaxis: surgery >4 h may give sub-optimal ertapenem exposure — caution (SmPC 4.4)'

**Why:** The UK label warns about sub-optimal exposure in long procedures, which bears on the prophylaxis indication.

**Sources:** UK SmPC 4.4 'Sub-optimal exposure … surgical interventions exceeding 4 hours' https://www.medicines.org.uk/emc/product/1713/smpc

### B1 · Page body (error)

**Was:** ---<br>**Corrections needed in your current entry:**<br>1. **Remove MRSA from Coverage** – ertapenem has NO activity against MRSA<br>2. Add Enterobacteriaceae, anaerobes to coverage (color-coded appropriately)<br>3. Complete all empty fields as above<br>Would you like me to format this for direct Notion database integration?

**Now:** REMOVE (the whole block from the '---' divider after the Notes section to the end of the page)

**Why:** This is AI-chat text pasted into the page: a chatbot's instructions to the user and a closing question. It is not monograph content. The ground rules say to remove pasted AI-chat text. MRSA is already absent from the Coverage column, so item 1 is out of date anyway.

**Sources:** Ground rule (owner): remove pasted AI-chat text; Coverage column, current Notion values (no MRSA tag)

### B2 · Page body (error)

**Was:** ### **Category**<br>Carbapenem (Group 2 carbapenem - lacks antipseudomonal activity)

**Now:** Carbapenem (Group 1 carbapenem – lacks activity against P. aeruginosa / non-fermenters)

**Why:** In the Shah & Isaacs classification, ertapenem is the first agent of the new Group 1 (broad spectrum but little activity against non-fermenting GNB). Group 2 is imipenem, meropenem and doripenem, which do cover Pseudomonas. 'Group 2' contradicts the parenthetical that follows it. The UK SmPC 5.1 confirms the missing Pseudomonas activity: 'P. aeruginosa and other non-fermentative bacteria are generally resistant'.

**Sources:** Shah PM, Isaacs RD. Ertapenem, the first of a new group of carbapenems. J Antimicrob Chemother 2003;52:538-42. PMID 12951340 (verified via esummary/efetch) https://pubmed.ncbi.nlm.nih.gov/12951340/; Zhanel GG et al. Comparative review of the carbapenems. Drugs 2007;67:1027-52. PMID 17488146 https://pubmed.ncbi.nlm.nih.gov/17488146/; UK SmPC 5.1 Mechanism of resistance https://www.medicines.org.uk/emc/product/1713/smpc

### B3 · Renal dose, HD, CRRT (error)

**Was:** CrCl \<30 & HD: 500mg IV QD

**Now:** CrCl >30: no adjustment<br>CrCl ≤30 (incl. ESRD/HD): 500mg IV QD<br>HD: if dose given within 6 hr before HD → supplemental 150mg after HD (none if given ≥6 hr before)<br>PD / CRRT: no label data. CVVHD/CVVHDF PK study: 500mg QD to 1g QD all reached target (Eyler 2014)<br>UK SmPC: CrCl ≤30 or HD → should not be used (insufficient data)

**Why:** The threshold is ≤30, not <30; all three labels say '≤30 mL/min/1.73 m2'. The 150 mg post-HD supplement rule is missing. I re-checked it in US 2.4–2.5 and TW 3.3.2. The hospital stocks the Taiwan product, so the Taiwan insert takes priority; its dosing matches the US label. The ground rules say to mention the UK SmPC's different position alongside. For CRRT, no label has data (US 2.5: 'no data in patients undergoing peritoneal dialysis or hemofiltration'). The PubMed PK study supports 500 mg–1 g daily.

**Sources:** Taiwan insert 3.3.1–3.3.2 (腎功能不全/血液透析) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC059078%E8%99%9F; US label 2.4 Patients with Renal Impairment; 2.5 Patients on Hemodialysis https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.2 Renal impairment / Haemodialysis https://www.medicines.org.uk/emc/product/1713/smpc; Eyler RF et al. Antimicrob Agents Chemother 2014;58:1320-6. PMID 24323468 (verified) https://pubmed.ncbi.nlm.nih.gov/24323468/

### B4 · Page body (minor)

**Was:** Renal table: **CRRT** \| Limited data; 500 mg–1 g daily suggested based on clearance

**Now:** **CRRT** \| No label data. CVVHD/CVVHDF PK study: 500 mg QD, 750 mg QD, 500 mg q12h and 1 g QD all gave fT>2 mcg/mL ≥40% in ≥96% of simulated patients (Eyler 2014, PMID 24323468). Retrospective RRT cohort (median 1 g QD on CVVH): seizures 2.5% (El Nekidy 2024, PMID 39076040). Add a row or footnote: UK SmPC: severe renal impairment/HD → should not be used (insufficient data)

**Why:** The 500 mg–1 g range has no citation in the page, but PubMed supports it, so I propose adding the citation. The UK SmPC conflict should also appear in the body, under the ground rule to mention the other label's values.

**Sources:** Eyler RF et al. AAC 2014. PMID 24323468 https://pubmed.ncbi.nlm.nih.gov/24323468/; El Nekidy WS et al. Int J Artif Organs 2024;47:653-8. PMID 39076040 (verified) https://pubmed.ncbi.nlm.nih.gov/39076040/; US label 2.5 ('no data in patients undergoing peritoneal dialysis or hemofiltration'); UK SmPC 4.2 https://www.medicines.org.uk/emc/product/1713/smpc

### B5 · Indications (missing)

**Was:** cIAI, CAP, cUTI, cSSTI, Surgical prophylaxis

**Now:** cIAI, CAP, cUTI, cSSTI, Surgical prophylaxis, Pelvic

**Why:** All three labels list acute pelvic infections: US 1.5 'Acute pelvic infections including postpartum endomyometritis, septic abortion and post-surgical gynecologic infections'; UK 4.1 'Acute gynaecological infections'; TW Section 2 '急性骨盆感染'. The schema already has a 'Pelvic' option. The page body already lists this indication.

**Sources:** US label 1.5 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/1713/smpc; Taiwan insert 2 適應症

### B6 · Drug Interactions (unsupported)

**Was:** Valproic acid – reduces VPA levels by 60–95% → seizure risk (AVOID)

**Now:** Valproic acid/divalproex – ↓ VPA below therapeutic range → breakthrough seizures; raising the VPA dose may not overcome it (AVOID; use a non-carbapenem antibiotic or add another anticonvulsant)<br>Probenecid – ↓ renal tubular secretion of ertapenem (AUC ↑25%) → co-administration not recommended

**Why:** No label gives the '60–95%' figure. US 5.3/7.2, UK 4.5 and TW 7 describe the drop only qualitatively. The PubMed reviews I checked (Mancl & Gidal 2009; Al-Quteimat 2020) do not give 60–95% either. Probenecid appears in US 7.1, TW 7 and the page body, but it is missing from this column. The 'AVOID' wording fits the UK label ('not recommended') and the US label ('generally not recommended').

**Sources:** US label 5.3, 7.1, 7.2, 12.3 Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/1713/smpc; Taiwan insert 7 交互作用; Mancl EE, Gidal BE. Ann Pharmacother 2009;43:2082-7. PMID 19934386 (verified) https://pubmed.ncbi.nlm.nih.gov/19934386/

### B7 · Page body (unsupported)

**Was:** Drug Interactions table rows: Valproic acid '↓ VPA levels by 60–95% within 24 hrs'; **Live vaccines** (BCG, typhoid, cholera) ↓ Vaccine efficacy – Avoid concurrent use; **Oral contraceptives** May ↓ estrogen levels via altered gut flora – Low risk; consider backup contraception

**Now:** VPA row: replace '↓ VPA levels by 60–95% within 24 hrs' with '↓ VPA below therapeutic range → breakthrough seizures; increasing VPA dose may not overcome it (US 5.3/7.2)'. Live vaccines row: keep, and append '(not in US/UK/TW ertapenem labels; general principle for live bacterial vaccines, e.g. oral typhoid/cholera)'. Oral contraceptives row: keep, and append '(not in US/UK/TW labels; theoretical — SmPC 5.2: effect on ethinyl estradiol/norethindrone protein binding small)'.

**Why:** None of these appears in the US 7, UK 4.5 or TW 7 interaction sections. UK SmPC 5.2 says only that ertapenem has a small in-vitro effect on ethinyl estradiol/norethindrone protein binding, and calls clinically significant displacement interactions 'unlikely'. The figure '60–95%' is unsourced.

**Sources:** US label 7 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.5, 5.2 Distribution https://www.medicines.org.uk/emc/product/1713/smpc; Taiwan insert 7 交互作用

### B8 · Monitor (missing)

**Was:** renal, neuro, LFT

**Now:** renal, neuro, LFT, CBC

**Why:** US 5.7 Laboratory Tests: 'periodic assessment of organ system function, including renal, hepatic, and hematopoietic, is advisable during prolonged therapy'. Neutropenia and thrombocytopenia are listed as rare in UK SmPC 4.8, and neutrophil count decreased in 3.0% of children in US 6.3. 'CBC' is an existing schema option.

**Sources:** US label 5.7, 6.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.8 https://www.medicines.org.uk/emc/product/1713/smpc

### B9 · Side Effects (missing)

**Was:** CNS, LFT↑, GI

**Now:** CNS, LFT↑, GI, thrombophlebitis, DRESS

**Why:** UK SmPC 4.8 lists 'Infused vein complication, phlebitis/thrombophlebitis' as Common. In US 6.1, infused vein complication (3.7%) is the second most common drug-related adverse event. DRESS is a post-marketing reaction in US 6.2, UK 4.8 and TW 8.3. The TW insert 8.3 also lists SJS/TEN, which the owner could add as 'SJS/TEN' if wanted. All of these options already exist in the schema.

**Sources:** UK SmPC 4.8 https://www.medicines.org.uk/emc/product/1713/smpc; US label 6.1, 6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; Taiwan insert 8.3 上市後經驗

### B10 · Notes (missing)

**Was:** CNS toxicity risk ↑ with: renal impairment, hypoalbuminemia, elderly, prior stroke/CNS disease<br>Long half-life (4 hrs) allows once-daily dosing

**Now:** CNS toxicity risk ↑ with: renal impairment, hypoalbuminemia, elderly, prior stroke/CNS disease<br>Long half-life (4 hrs) allows once-daily dosing<br>ESBL-E outside urinary tract: ertapenem is a preferred agent, but use meropenem/imipenem if critically ill or hypoalbuminemic (IDSA 2024 AMR guidance)

**Why:** The existing two lines are correct: US 5.2, UK 4.4 (elderly, CNS disorders, renal), US 12.3 (t½ ~4 h), and Wang 2023 (hypoalbuminemia in 25/29 cases) / Lee 2017 (old stroke OR 14.4). Resistance-specific use is missing. IDSA 2024 Q1.3 says: 'Ertapenem, imipenem, and meropenem are preferred agents for the treatment of ESBL-E infections outside of the urinary tract. Imipenem or meropenem are preferred for patients who are critically ill or those with hypoalbuminemia.'

**Sources:** IDSA 2024 Guidance on AMR Gram-negative infections, Question 1.3 https://www.idsociety.org/practice-guideline/amr-guidance/ ; Tamma PD et al. Clin Infect Dis 2024. PMID 39108079 (verified) https://pubmed.ncbi.nlm.nih.gov/39108079/; Wang C et al. Infect Drug Resist 2023;16:3649-58. PMID 37313264 (verified) https://pubmed.ncbi.nlm.nih.gov/37313264/; Lee YC et al. PLoS One 2017;12:e0182046. PMID 28759588 (verified) https://pubmed.ncbi.nlm.nih.gov/28759588/

### B11 · Page body (minor)

**Was:** Notes: '- Renal dysfunction (half-life extends from 4.4 hrs → 14–19 hrs in ESRD)'

**Now:** - Renal dysfunction (half-life ~4.5 h in controls → 10.6 h in advanced RI → 14.1 h in ESRD; Mistry 2006)

**Why:** In Mistry 2006, 4.4 h is the half-life in mild renal impairment, not the normal value. ESRD was 14.1 h, and no source supports the '19 h' upper bound. The US label gives a t½ of ~4 h in healthy adults.

**Sources:** Mistry GC et al. J Clin Pharmacol 2006;46:1128-38. PMID 16988201 (verified) https://pubmed.ncbi.nlm.nih.gov/16988201/; US label 12.3 Elimination https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22

### B12 · Page body (unsupported)

**Was:** Clinical Pearls: '- Lower seizure potential than imipenem (acidic C-2 side chain → less GABA antagonism)' and '- Previous stroke should be considered a relative contraindication'

**Now:** '- Lower seizure risk than imipenem (meta-analysis: seizure OR vs non-carbapenem comparators 1.32 for ertapenem vs 3.50 for imipenem; Cannon 2014, PMID 24744302); proposed mechanism: acidic C-2 side chain → less GABA antagonism (mechanism not confirmed in cited sources)' and '- Old stroke is a strong risk factor for ertapenem-associated seizures (OR 14.4; Lee 2017, Taiwan, PMID 28759588); CNS disorders ↑ seizure risk (US 5.2; SmPC 4.4) — use with caution, adhere to renal dosing, consider an alternative'

**Why:** Cannon 2014 supports the comparison with imipenem, but no source I found supports the C-2 side-chain mechanism. Miller 2011 attributes seizure propensity to β-lactam binding at GABA receptors. No label calls prior stroke a 'relative contraindication'. Lee 2017 supports it as a risk factor, and US 5.2 / UK 4.4 support CNS disorders as one.

**Sources:** Cannon JP et al. J Antimicrob Chemother 2014;69:2043-55. PMID 24744302 (verified) https://pubmed.ncbi.nlm.nih.gov/24744302/; Miller AD et al. Pharmacotherapy 2011;31:408-23. PMID 21449629 (verified) https://pubmed.ncbi.nlm.nih.gov/21449629/; Lee YC et al. PLoS One 2017. PMID 28759588 https://pubmed.ncbi.nlm.nih.gov/28759588/; US label 5.2; UK SmPC 4.4

### B13 · Page body (minor)

**Was:** Notes 'CNS Toxicity Risk Factors' (median age 71.5; 86% albumin <3.5 g/dL; onset median 4–5 days; 90.9% recover completely; median recovery 7 days) – no citation

**Now:** Keep the numbers and add the citation '(Wang 2023 literature review, n=66, PMID 37313264; Mitaka 2024 systematic review, n=125: median onset 4 days, PMID 38715573)'

**Why:** I checked the numbers against PubMed. Wang 2023 reports median age 71.5, 25/29 with albumin <3.5 g/dL (86%), 90.9% complete recovery, median recovery 7 days, and median onset 5 days. Mitaka 2024 reports median onset 4 days. The figures are right but have no source on the page.

**Sources:** Wang C et al. Infect Drug Resist 2023. PMID 37313264 https://pubmed.ncbi.nlm.nih.gov/37313264/; Mitaka H et al. Open Forum Infect Dis 2024;11:ofae214. PMID 38715573 (verified) https://pubmed.ncbi.nlm.nih.gov/38715573/

### B14 · Adult dose (minor)

**Was:** 1g IV QD

**Now:** 1g IV QD (or IM, max 7 days)<br>Colorectal surgery prophylaxis: 1g IV single dose 1 hr before incision

**Why:** The hospital stocks the Taiwan SLC product. Its insert (3.1) and the US label (2.1–2.3) allow IV or IM; IV for up to 14 days and IM for up to 7 days per US 2.1. The colorectal prophylaxis dose is in the body but not in the column. The UK product is IV only (UK SmPC 4.2).

**Sources:** Taiwan insert 3.1 用法用量; US label 2.1–2.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.2 https://www.medicines.org.uk/emc/product/1713/smpc

### B15 · Page body (minor)

**Was:** Adult Dose: '**Standard:** 1 g IV/IM once daily'; Notes: 'IM injection prepared with lidocaine (contraindicated if lidocaine allergy)'

**Now:** '**Standard:** 1 g IV (over 30 min) or IM once daily – IV up to 14 days, IM up to 7 days. IM: reconstitute with 3.2 mL lidocaine without epinephrine (US label: 1%; TW SLC insert: 1% or 2%). No dextrose-containing diluents.' and Notes: 'IM (lidocaine diluent) contraindicated with amide local-anaesthetic allergy; TW insert also: severe shock or heart block'

**Why:** The body leaves out the IM/IV duration limits and the lidocaine strength. The stocked product's insert allows 1% or 2% lidocaine, while the US label allows only 1%. TW insert section 4 adds severe shock and heart block as contraindications to IM use.

**Sources:** US label 2.1, 2.7, 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; Taiwan insert 3.2 調製方式; 4 禁忌

### B16 · Pregnancy (minor)

**Was:** Former Category B

**Now:** No adequate human data; no malformations in rats (~1.2× MRHD AUC) or mice (~3× MRHD) (US 8.1). UK/TW: use only if benefit outweighs risk. (Former FDA Cat. B – letter categories retired)

**Why:** The column gives only a retired letter category. The ground rules say not to present letter categories as current. Give the PLLR risk summary instead and keep 'former' as a historical note. The body text already matches US 8.1.

**Sources:** US label 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/1713/smpc; Taiwan insert 6.1 懷孕

### B17 · Breastfeeding (minor)

**Was:** acceptable if needed

**Now:** Acceptable (LactMed): low milk levels (<0.13–0.38 mcg/mL); monitor infant for diarrhea/thrush<br>UK SmPC: should not breast-feed; TW insert: use with caution

**Why:** LactMed is the main breastfeeding source, and it says 'Ertapenem is acceptable in nursing mothers'. The column agrees, but both official labels say otherwise. UK SmPC 4.6 says 'mothers should not breast-feed their infants while receiving ertapenem', and TW 6.2 says '必須謹慎小心'. The page should show the label positions alongside LactMed's, and the body should get the same note.

**Sources:** LactMed Ertapenem NBK501585 (rev. 2025-02-15) https://www.ncbi.nlm.nih.gov/books/NBK501585/; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/1713/smpc; Taiwan insert 6.2 哺乳; US label 8.2

### B18 · Coverage (minor)

**Was:** Streptococcus, MSSA, Enterobacter, E.coli, Klebsiella, Proteus, Serratia, Haemophilus, Bacteroides

**Now:** Streptococcus, MSSA, Enterobacter, E.coli, Klebsiella, Proteus, Serratia, Haemophilus, Bacteroides, Anaerobes

**Why:** The labels show anaerobic activity beyond Bacteroides. US 12.4 lists Peptostreptococcus, Porphyromonas, Prevotella, Clostridium and Eubacterium. UK 5.1 lists Clostridium (excluding C. difficile), Fusobacterium, Peptostreptococcus and Prevotella as commonly susceptible. The existing tags are correct; no MRSA, Enterococcus, Pseudomonas or Acinetobacter tag is present (UK 5.1 lists these as inherently resistant). Note that UK 5.1 lists B. fragilis group under 'acquired resistance may be a problem'.

**Sources:** US label 12.4 Microbiology https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f3b99b-fa82-42e0-26bf-f49891ae3d22; UK SmPC 5.1 Microbiological susceptibility https://www.medicines.org.uk/emc/product/1713/smpc

### B19 · Page body (minor)

**Was:** Monitor section has no TDM statement; Coverage section has no resistance-specific guidance

**Now:** Monitor: add '- **TDM:** no established target; higher trough concentrations were associated with neurotoxicity (mean 37.8 vs 14.6 mcg/mL; Campany-Herrero 2023) – consider levels where available in high-risk patients' and '- **CBC** during prolonged therapy (US 5.7)'. Coverage: add '- ESBL-E outside urinary tract: preferred carbapenem option, but meropenem/imipenem preferred if critically ill or hypoalbuminemic (IDSA 2024)'

**Why:** No label covers TDM or resistance-specific use. PubMed and IDSA fill these gaps. US 5.7 supports hematopoietic monitoring.

**Sources:** Campany-Herrero D et al. Br J Clin Pharmacol 2023;89:2843-50. PMID 37170398 (verified) https://pubmed.ncbi.nlm.nih.gov/37170398/; IDSA 2024 AMR guidance Q1.3 https://www.idsociety.org/practice-guideline/amr-guidance/; US label 5.7

## Verified correct as written

- Category property 'Carbapenem' matches the US §11 description (1-β methyl-carbapenem) and SmPC 5.1 (ATC J01DH03).
- Hepatic dose 'No adjustment required' matches UK SmPC 4.2 and TW 仿單. The US §2.6 says no recommendation can be made, and §12.3 says ertapenem does not appear to undergo hepatic metabolism, so the body's 'hepatic metabolism is negligible' is supported.
- Pediatric dose property and body: 15 mg/kg q12h (max 1 g/day) for 3 mo–12 y, 1 g QD from 13 y, not recommended under 3 months, not recommended for paediatric meningitis (US §2.2, §8.4; TW 仿單).
- Indications body list (cIAI, CAP, cUTI incl. pyelonephritis, cSSSI, acute pelvic, diabetic foot without osteomyelitis, colorectal prophylaxis) is approved per US §1.1–1.6 and/or UK SmPC 4.1.
- Indications tags cIAI, CAP, cUTI, cSSTI and Surgical prophylaxis are correct.
- Coverage tags Streptococcus, MSSA, E.coli, Klebsiella, Proteus, Haemophilus and Bacteroides are in the US §12.4 clinical list. Enterobacter and Serratia are in the US in-vitro list and SmPC 'commonly susceptible'. MRSA is correctly absent.
- Body 'NO ACTIVITY' list (Pseudomonas, Acinetobacter, MRSA, Enterococcus incl. VRE, Stenotrophomonas) matches SmPC 5.1. ESBL-producing Enterobacterales activity matches US §12.4 and SmPC 5.1.
- Mechanism property and body: PBP 2/3 preference, stable to penicillinases, cephalosporinases and ESBLs, hydrolysed by MBLs (US §12.4). Time-dependent T>MIC (SmPC 5.1).
- Renal body table: >30 no adjustment; ≤30 500 mg daily; HD 500 mg daily plus 150 mg after HD if the dose was given within 6 h before; PD no data. Matches the US §2.4–2.5 and TW 仿單.
- Surgical prophylaxis 1 g IV 1 h before incision (US §2.3, SmPC 4.2).
- Notes property: CNS toxicity risk factors (renal impairment, CNS disease, elderly) match US §5.2 and SmPC 4.4. Hypoalbuminemia is supported by Wang 2023 (PMID 37313264, 25/29 cases). The ~4 h half-life allowing once-daily dosing matches US §12.3.
- Body CNS-toxicity statistics (median age 71.5 y; albumin <3.5 g/dL in 86% = 25/29; 90.9% complete recovery; median recovery 7 days; median onset 5 days) match Wang C et al. Infect Drug Resist 2023, PMID 37313264 (verified). The page's '4–5 days' is close to the paper's median of 5.
- Body: protein binding ~95% (US §12.3: 95% to 85%, concentration-dependent). Sodium ~137 mg (6 mEq) per 1 g (US §11, SmPC 4.4). IM lidocaine contraindicated in amide-anaesthetic allergy (US §4).
- Body serious ADRs (seizures, encephalopathy, hallucinations, myoclonus/tremor, CDAD, anaphylaxis) match US §5.1–5.4 and §6.2. Seizure rate 0.5% (US §5.2).
- Body Drug Interactions probenecid row: reduced renal excretion and longer half-life; co-administration not recommended (US §7.1, §12.3). Valproate 'AVOID' recommendation matches US §5.3, SmPC 4.5 and TW 仿單.
- Body Pregnancy: animal data at 1.2× MRHD (rats) and 3× MRHD (mice), insufficient human data (US §8.1); 'use only if benefit outweighs risk' (SmPC 4.6, TW 仿單).
- Body Breastfeeding: milk levels <0.13–0.38 mcg/mL (US §8.2, LactMed); 'acceptable in nursing mothers' and monitor for diarrhoea/thrush (LactMed NBK501585).
- Breastfeeding property 'acceptable if needed' is consistent with LactMed.
- Body CRRT line '500 mg–1 g daily' is supported by Eyler 2014 (PMID 24323468), though it carries no citation (see A3).
- Body 'Monitor: Renal function, Neuro status, Hypersensitivity, C. difficile/superinfection' matches US §5.1–5.7 and SmPC 4.4.
- Category column 'Carbapenem': matches US 11 ('1-β methyl-carbapenem'), UK 5.1 (ATC J01DH03, carbapenems) and hospital ATC J01DH03.
- Mechanism column 'Binds PBP-2/3 → inhibits cell wall synthesis; stable against ESBLs/AmpC; hydrolyzed by MBLs': matches US 12.4, UK 5.1 and TW 10.1. AmpC is a cephalosporinase; UK 5.1 says it is stable to 'most classes of beta-lactamases'.
- Hepatic dose column 'No adjustment required': matches UK 4.2/5.2 and TW 3.3.3 (肝功能受損的病人不須調整劑量). US 2.6 says only that no recommendation can be made, and 12.3 says no hepatic metabolism.
- Pediatric dose column: 3 mo–12 y 15 mg/kg IV/IM q12h (max 1 g/day); >12 y (i.e. ≥13 y) 1 g QD; <3 mo not recommended (no data); not for meningitis because of poor CSF penetration. Matches US 2.2/8.4, UK 4.2 and TW 3.1/6.4.
- Indications column cIAI, CAP, cUTI, cSSTI and Surgical prophylaxis are all approved (US 1.1–1.6). cUTI is in the US and TW labels but not the UK; colorectal prophylaxis is adults only and is in the US and UK labels.
- Coverage tags present (Streptococcus, MSSA, Enterobacter, E.coli, Klebsiella, Proteus, Serratia, Haemophilus, Bacteroides) are supported by US 12.4 and UK 5.1. MRSA, Enterococcus, Pseudomonas and Acinetobacter are correctly absent.
- Monitor tags renal, neuro and LFT are supported by US 5.2, 5.7 and 8.5.
- Side Effects tags CNS, LFT↑ and GI are supported. US 6.1: diarrhea 5.5%, nausea 3.1%, headache 2.2%, seizures 0.5%. US 6.3: ALT↑ 6.0%, AST↑ 5.2%.
- Notes column: CNS-toxicity risk factors (renal impairment, elderly, CNS disease from US 5.2/UK 4.4; hypoalbuminemia from Wang 2023) and t½ ~4 h (US 12.3) are correct.
- Body renal table rows >30 (no adjustment), ≤30 (500 mg daily), HD (500 mg; +150 mg post-HD if dosed <6 h before) and PD (no data) match US 2.4–2.5 and TW 3.3.
- Body adult dose: duration 3–14 days, diabetic foot up to 28 days, prophylaxis 1 g 1 h before incision. Matches US Table 1/Table 2 and UK 4.2.
- Body mechanism: PBP 2/3 preference, stability to penicillinases/cephalosporinases/ESBLs, MBL hydrolysis and T>MIC. Matches US 12.4 and UK 5.1.
- Body coverage list, including in-vitro organisms (Citrobacter, Morganella, Providencia, Serratia, P. vulgaris, C. perfringens, Fusobacterium) and the 'no activity' list (Pseudomonas, Acinetobacter, MRSA, Enterococcus, Stenotrophomonas). Matches US 12.4 and UK 5.1 (inherently resistant organisms).
- Body side effects: seizures, encephalopathy, hallucinations, myoclonus, tremor, CDAD, anaphylaxis. Matches US 5.1/5.2/5.4/6.2 and UK 4.8. 'Often visual' hallucinations is supported by Wang 2023 (36.4% visual).
- Body pregnancy animal data: rats 1.2× and mice 3× MRHD, no malformations. Matches US 8.1.
- Body breastfeeding milk levels <0.13–0.38 mcg/mL and the infant GI/thrush note match US 8.2 and LactMed.
- Body notes: sodium ~137 mg (6 mEq) per 1 g vial (US 11; UK 4.4: 137 mg); protein binding ~95% (US 12.3); IM contraindicated with amide local-anaesthetic allergy (US 4); 90.9% complete recovery and median recovery 7 days (Wang 2023, PMID 37313264).
- Renal dosing in the US label (INVANZ) and the Taiwan SLC insert is identical. The UK SmPC is the only label that conflicts: it says not to use ertapenem in severe renal impairment or HD.
- Hospital (ERT01) dosing, pediatric dose, prophylaxis dose, 30-minute infusion, no-dextrose rule and renal/HD rule match the US and TW labels, apart from the encoding fault.

## Apply log

- Renal dose, HD, CRRT column: merged TW/US 500 mg QD for CrCl ≤30 & HD, HD 150 mg supplement rule, UK SmPC 'should not be used', PD/CRRT (Eyler 2014), peds no data
- Indications: added Pelvic
- Coverage: added Anaerobes (MRSA not present)
- Drug Interactions column: VPA (Wu 2016, not recommended, AVOID) + probenecid (AUC ↑25%, t½ 4.0→4.8 h)
- Pregnancy column: PLLR text, former Cat. B noted as retired, animal data, UK/TW benefit>risk
- Breastfeeding column: LactMed acceptable + UK SmPC/TW 仿單 positions
- Monitor: added CBC
- Side Effects: added thrombophlebitis, DRESS
- Mechanism column: time-dependent, KPC, porin-loss resistance
- Pediatric dose column: appended no data in renal impairment/HD and UK IV only
- Adult dose column: IV/IM details, colorectal prophylaxis, UK IV only
- Notes column: added IDSA 2024 ESBL-E line
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body: header source/product line added
- Body: Category -> Group 1 carbapenem, lacks antipseudomonal/anti-Acinetobacter activity
- Body: Coverage - B. fragilis acquired-resistance note, atypicals, Burkholderia/Aeromonas/C. jeikeium, MBL/KPC resistance line, IDSA ESBL-E line
- Body: Adult Dose standard line with colored IV/IM tags, duration per US Table 1, DFI up to 28 days
- Body: Renal table CRRT cell (Eyler 2014 + El Nekidy 2024), UK SmPC row, pediatric no-data line
- Body: Side effects common rates updated with US percentages, peds rates, DRESS/AGEP/vasculitis, teeth staining
- Body: Monitor CBC, valproate levels, TDM (Campany-Herrero 2023)
- Body: DI table VPA row updated; live vaccine and OC rows flagged as unsourced
- Body: Notes - citations on CNS risk factors (Wang 2023, Mitaka 2024), half-life Mistry 2006, seizure-risk pearl (Miller/Cannon), stroke/CNS-disease pearl (Lee 2017), colorectal >4 h pearl, contraindications (EN + 中文)
- Body: removed pasted AI-chat block ('Corrections needed...' through 'Would you like me to format...')
- Body: References section appended (TW 仿單, US label v42, UK SmPC, LactMed, IDSA 2024, and all cited PMIDs)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
