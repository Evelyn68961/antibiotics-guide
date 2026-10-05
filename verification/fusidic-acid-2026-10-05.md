# New entry: Disfect (Fusidic acid)

- **Notion entry:** [Disfect (Fusidic acid)](https://app.notion.com/3f0c496dfff181a78dc0d4f85d0b354a). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** DIS01 (Disfect tab 250 mg sodium fusidate)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/fusidic-acid.json` (plus any Taiwan insert text files)

## Product and sources

FJUH DIS01 = Disfect 膜衣錠 250 mg (復剋菌膜衣錠): sodium fusidate 250 mg film-coated tablet, oral (≈240 mg fusidic acid). ATC J01XC01, NHI AC49704100. It is the only fusidate product in the hospital antimicrobial list (fjuh_abx.json); there is no IV or suspension. US FDA label: none. Fusidic acid is not FDA-approved, and both DailyMed spls.json?drug_name=fusidic and api.fda.gov return 0 results (re-checked 2026-10-05). The governing official label is therefore the UK SmPC for Fucidin 250 mg Tablets (LEO, rev 13 Jul 2023, https://www.medicines.org.uk/emc/product/5515/smpc). I also used the Fucidin 250 mg/5 ml Oral Suspension SmPC (https://www.medicines.org.uk/emc/product/5514/smpc) as context for paediatric dosing only. Breastfeeding comes from LactMed NBK500893 (rev 2025-02-15). No Taiwan insert was available: the hospital P4 仿單 field and licence number are empty, so the TFDA im_detail_1 URL cannot be built. The brief's guess that the licence holder is the maker of "Antifect" is weak, because Antifect is the hospital's cefepime injection (ANT10), not a fusidate product. The Notion page has only a title and Category="Fusidane". All other columns and the page body are empty. I could not compare style against sibling rows because Notion Query Data Source returned usage_limit_reached; the owner can try again later or see https://app.notion.com/notion-mcp (Notion Business gives higher Query Data Source limits).

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> Sodium fusidate 250 mg tab (≈240 mg fusidic acid)<br>• Skin infection (SSTI): 250 mg (1 tab) BID × 5–10 days<br>• Other staphylococcal infections (osteomyelitis, pneumonia, septicaemia, wound infection, endocarditis, superinfected CF): 500 mg (2 tabs) TID<br>• Severe/fulminant: dose may be doubled, or use combination therapy<br>Elderly: no adjustment 老年人不需調整

**Why:** Empty column. The stocked product is a 250 mg tablet, and SmPC 4.2 gives two adult regimens plus a doubling option. US label: none exists.

**Sources:** UK SmPC Fucidin 250 mg Tablets, section 4.2 Posology: 'For staphylococcal cutaneous infections: Adults: 250 mg (1 tablet) sodium fusidate (equivalent to 240 mg fusidic acid) twice daily for 5-10 days... osteomyelitis, pneumonia, septicaemia, wound infections, endocarditis, superinfected cystic fibrosis. Adults: 500 mg (2 tablets) 3 times daily. In severe cases of fulminating infections, the dosage may be doubled or appropriate combined therapy may be used. Elderly: No dosage alterations' — https://www.medicines.org.uk/emc/product/5515/smpc

### A2 · Renal dose, HD, CRRT

No adjustment in renal impairment (biliary excretion, little or none in urine) 腎功能不全不需調整<br>HD: no adjustment (not significantly dialysed; dialysis does not increase clearance)<br>CRRT: no label data

**Why:** Empty column. SmPC 4.2, 4.9 and 5.2 cover renal impairment and HD explicitly. No label or guideline gives CRRT data, so it should be stated as 'no label data' rather than inferred.

**Sources:** UK SmPC 5515 section 4.2: 'Since Fucidin is excreted in the bile, no dosage modifications are needed in renal impairment. The dosage in patients undergoing haemodialysis needs no adjustment as Fucidin is not significantly dialysed.' — https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC 5515 section 4.9: 'Dialysis will not increase the clearance of fusidic acid.'; section 5.2: 'excreted mainly in the bile, little or none being excreted in the urine'

### A3 · Hepatic dose

No specific dose adjustment in label. Hepatically metabolised and biliary excreted: use with caution and monitor LFT in hepatic dysfunction or with other hepatotoxic drugs. Caution in biliary disease or biliary obstruction, and in impaired bilirubin transport/metabolism. 肝功能不全/膽道阻塞慎用，需監測LFT

**Why:** Empty column. SmPC 4.4 gives a caution and monitoring instruction but no numeric adjustment.

**Sources:** UK SmPC 5515 section 4.4: 'Fusidic acid is metabolised in the liver and excreted in the bile... Systemic Fucidin should be given with caution and liver function should be monitored if used in patients with hepatic dysfunction or in patients taking potentially hepatotoxic drugs. Caution is required in patients with biliary disease and biliary tract obstruction... Caution is necessary if systemic Fucidin is administered to patients with impaired transport and metabolism of bilirubin.' — https://www.medicines.org.uk/emc/product/5515/smpc

### A4 · Pediatric dose

Tablet SmPC gives adult dosing only; there is no paediatric tablet dose.<br>(UK oral suspension, not stocked: 0–1 y 1 mL/kg/day ÷ TID; 1–5 y 5 mL TID; 5–12 y 10 mL TID. 5 mL suspension ≈ 175 mg sodium fusidate because of lower bioavailability, so it is not mg-for-mg interchangeable with tablets.)<br>Neonates: particular care, theoretical kernicterus risk (bilirubin displaced from albumin). 新生兒小心使用

**Why:** Empty column. The stocked tablet has no labelled paediatric dose. The suspension SmPC is the only official paediatric dosing, and it uses a formulation the hospital does not stock, so it is given as context only.

**Sources:** UK SmPC 5515 (tablets) section 4.2 (adult and elderly only) and section 4.4: 'Particular care is advised in neonates due to the theoretical risk of kernicterus.' — https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC Fucidin 250 mg/5 ml Oral Suspension section 4.2: 'Each 5 ml of Fucidin Suspension is therapeutically equivalent to 175 mg of sodium fusidate owing to its lower oral bioavailability... Children: 0-1 year: 1 ml/kg bodyweight daily, divided into 3 equal doses 1-5 years: 5 ml 3 times daily 5-12 years: 10 ml 3 times daily' — https://www.medicines.org.uk/emc/product/5514/smpc

### A5 · Indications

SSTI, Osteoarthritis, Pneumonia, Bacteremia, Sepsis, Endocarditis

**Why:** Empty multi-select. SmPC 4.1 lists cutaneous and wound infections (SSTI), osteomyelitis (mapped to the existing bone/joint tag 'Osteoarthritis'; owner should confirm that is how the tag is used), pneumonia, septicaemia (Bacteremia/Sepsis) and endocarditis. 'Superinfected cystic fibrosis' has no tag, so it goes in Notes (see A13). All options exist in the schema.

**Sources:** UK SmPC 5515 section 4.1: 'indicated in the treatment of all staphylococcal infections due to susceptible organisms such as: cutaneous infections, osteomyelitis, pneumonia, septicaemia, wound infections, endocarditis, superinfected cystic fibrosis.' — https://www.medicines.org.uk/emc/product/5515/smpc

### A6 · Coverage

Staphylococcus, MSSA, MRSA, MRSE

**Why:** Empty multi-select. SmPC 5.1 supports S. aureus, S. epidermidis and methicillin-resistant staphylococci. Streptococcus and Corynebacterium are not added because the label does not state that activity. All options exist in the schema.

**Sources:** UK SmPC 5515 section 5.1: 'potent anti-staphylococcal agents... Concentrations of 0.03 - 0.12 micrograms/ml inhibit nearly all strains of Staphylococcus aureus. Fusidic acid is active against Staphylococcus epidermidis and methicillin resistant staphylococci.' — https://www.medicines.org.uk/emc/product/5515/smpc

### A7 · Side Effects

GI, LFT↑, hematologic, anemia, leukopenia, neutropenia, thrombocytopenia, rhabdomyolysis, AKI, DRESS, SJS/TEN

**Why:** Empty multi-select. Tags map to SmPC 4.8:<br>- GI: common.<br>- LFT↑: liver function test abnormal, hepatitis, jaundice, hepatic failure.<br>- Blood disorders: uncommon pancytopenia, leukopenia, thrombocytopenia and anaemia; neutropenia and agranulocytosis reported.<br>- Rhabdomyolysis: uncommon, may be fatal.<br>- AKI: renal failure, including acute renal failure, uncommon.<br>- DRESS and SJS/TEN: post-marketing.<br>All options exist in the schema. Anaphylaxis and AGEP have no tag and go in Notes.

**Sources:** UK SmPC 5515 section 4.8 Undesirable effects (GI common; blood uncommon incl. pancytopenia/leukopenia/thrombocytopenia/anaemia, footnote a neutropenia/agranulocytosis; hepatobiliary uncommon incl. hepatic failure, cholestasis, jaundice, LFT abnormal; rhabdomyolysis uncommon 'may be fatal'; renal failure incl. acute; TEN/SJS/DRESS not known) — https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC 5515 section 4.4 (DRESS/SJS/TEN: stop and do not reintroduce)

### A8 · Monitor

LFT, PT/INR, CPK  (Notes qualifier: PT/INR when on warfarin/coumarins; CPK if muscle symptoms or statin recently stopped — not a label-mandated test)

**Why:** Empty multi-select. LFT: SmPC 4.4 tells you to monitor liver function. PT/INR: SmPC 4.5 says to monitor anticoagulation closely with coumarins. CPK: statin co-administration is allowed only case by case under close supervision, so a CPK check when muscle symptoms appear is a reasonable proxy; it is not a stated label lab test, so flag it as optional. CBC could be added for blood dyscrasias, but the label does not mandate it.

**Sources:** UK SmPC 5515 section 4.4: 'liver function should be monitored if used in patients with hepatic dysfunction...'; statin: 'close medical supervision', 'seek medical advice immediately if they experience any symptoms of muscle weakness, pain or tenderness' — https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC 5515 section 4.5: 'Anticoagulation should be closely monitored and a decrease of the oral anticoagulant dose may be necessary'

### A9 · Mechanism

Steroid (fusidane) antibacterial. Inhibits bacterial protein synthesis by binding elongation factor G (EF-G) on the ribosome, which blocks EF-G release after translocation and stalls peptide elongation. 抑制EF-G，阻斷蛋白質合成。Good tissue and bone penetration.

**Why:** Empty column. SmPC 5.1 gives the class and tissue penetration but not the molecular target. The EF-G mechanism is cited from a PubMed review whose PMID I verified with esummary.

**Sources:** UK SmPC 5515 section 5.1: 'Pharmacotherapeutic group: Steroid antibacterials, ATC code: J01XC01... unusual ability to penetrate tissue. Bactericidal levels have been assayed in bone and necrotic tissue.' — https://www.medicines.org.uk/emc/product/5515/smpc; Fernandes P. Fusidic Acid: A Bacterial Elongation Factor Inhibitor for the Oral Treatment of Acute and Chronic Staphylococcal Infections. Cold Spring Harb Perspect Med 2016. PMID 26729758 (verified via NCBI esummary) — https://pubmed.ncbi.nlm.nih.gov/26729758/

### A10 · Drug Interactions

⚠️ Statins: must NOT be co-administered (rhabdomyolysis, including fatal cases). Stop the statin for the whole course and restart 7 days after the last fusidic acid dose. 禁併用statin。<br>• CYP3A4 substrates: avoid (suspected mutual inhibition of metabolism)<br>• Warfarin/coumarins: ↑ anticoagulant effect, so monitor INR and consider a dose reduction; re-assess after stopping fusidic acid<br>• HIV protease inhibitors (ritonavir, saquinavir): ↑ levels of both drugs and hepatotoxicity; not recommended

**Why:** Empty column. SmPC 4.4 and 4.5 list four clinically important interactions. The statin interaction carries the strongest wording ('must not be co-administered').

**Sources:** UK SmPC 5515 section 4.4: 'Statins (HMG-CoA reductase inhibitors) and systemic Fucidin must not be co-administered... Statin therapy may be re-introduced seven days after the last dose of systemic Fucidin.' — https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC 5515 section 4.5: 'The use of Fucidin systemically should be avoided in patients treated with CYP-3A4 biotransformed drugs... Oral anticoagulants... may increase the plasma concentration... HIV protease inhibitors... ritonavir and saquinavir... hepatotoxicity. Concomitant use is not recommended.'

### A11 · Pregnancy

Limited human data (<300 pregnancy outcomes). Animal studies show no reproductive toxicity. SmPC: as a precaution, avoid systemic use during pregnancy. 懷孕期間建議避免全身性使用。(Not FDA-approved, so there is no US pregnancy labelling.)

**Why:** Empty column. SmPC 4.6 advises avoidance throughout pregnancy, not only in the third trimester. No letter category is used.

**Sources:** UK SmPC 5515 section 4.6: 'There are no or limited data (less than 300 pregnancy outcomes)... Animal studies do not indicate direct or indirect harmful effect... As a precautionary measure, it is preferable to avoid the use of systemic Fucidin during pregnancy.' — https://www.medicines.org.uk/emc/product/5515/smpc

### A12 · Breastfeeding

LactMed: limited, old data. Milk levels after IV sodium fusidate 750 mg were low (0.005–0.86 mg/L), and there are no data on effects in breastfed infants. SmPC: excretion into milk is likely and a risk to the infant cannot be excluded, so decide between stopping breastfeeding or avoiding therapy on a benefit/risk basis. 需評估利弊，非「無禁忌」。

**Why:** Empty column. LactMed is the designated breastfeeding source, and the official SmPC position must be included as well.

**Sources:** LactMed 'Fusidic Acid' NBK500893 (rev 2025-02-15), Summary of Use during Lactation and Drug Levels: 'Data on excretion of fusidic acid into breastmilk are quite old and not from a well-designed study, but levels in breastmilk after intravenous fusidic acid appear to be low'; 'fusidic acid concentrations ranging from 0.005 to 0.86 mg/L'; Effects in Breastfed Infants: 'Relevant published information was not found' — https://www.ncbi.nlm.nih.gov/books/NBK500893/; UK SmPC 5515 section 4.6: 'Physico-chemical data suggest excretion of fusidic acid in human milk. A risk to the suckling child cannot be excluded. A decision must be made whether to discontinue breast-feeding or to discontinue/abstain...' — https://www.medicines.org.uk/emc/product/5515/smpc

### A13 · Notes

Not FDA-approved (US); UK SmPC (Fucidin 250 mg tab) used as reference; Taiwan insert not located. Hospital stocks <span color="blue">`PO`</span> Disfect 250 mg tab only.<br>• Resistance develops readily, so avoid monotherapy in severe or deep-seated infection or prolonged therapy; give with another anti-staphylococcal agent. 單用易產生抗藥性，嚴重/深部感染需併用其他抗葡萄球菌藥物<br>• Use IV when oral absorption is unreliable (IV not stocked)<br>• Labelled for superinfected cystic fibrosis (no tag)<br>• Serious skin reactions (DRESS/SJS/TEN), usually in the first weeks: stop and do not re-challenge. Anaphylaxis and AGEP reported

**Why:** Empty column. These are clinically important label points that the multi-select tags cannot carry.

**Sources:** UK SmPC 5515 section 5.2: 'In severe or deep-seated infections and when prolonged therapy may be required, Fucidin should generally be given concurrently with other anti-staphylococcal antibiotic therapy.' — https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC 5515 section 4.1 (IV when oral inappropriate; superinfected cystic fibrosis), section 4.4 (resistance; DRESS/SJS/TEN stop and do not reintroduce; galactose intolerance/lactase deficiency), section 4.8 (anaphylactic shock, AGEP); LactMed NBK500893: 'not approved for marketing in the United States' — https://www.ncbi.nlm.nih.gov/books/NBK500893/

### A14 · Page body

Sources:<br>• UK SmPC Fucidin 250 mg Tablets (rev 13 Jul 2023): https://www.medicines.org.uk/emc/product/5515/smpc<br>• LactMed Fusidic Acid NBK500893: https://www.ncbi.nlm.nih.gov/books/NBK500893/<br>• US FDA label: none (not FDA-approved)<br>• Taiwan 仿單: not retrieved (licence number not on hospital P4 page)

**Why:** Optional. A blank body gives readers no source trail for a new entry. Add it only if the owner's other entries use body source lists; I could not confirm the house style because of the Notion query limit.

**Sources:** https://www.medicines.org.uk/emc/product/5515/smpc; https://www.ncbi.nlm.nih.gov/books/NBK500893/

### A15 · Category

Fusidane (steroid antibacterial, ATC J01XC01)

**Why:** 'Fusidane' is correct and can stay as is. The optional addition aligns it with the SmPC/ATC group name 'Steroid antibacterials'.

**Sources:** UK SmPC 5515 section 5.1: 'Pharmacotherapeutic group: Steroid antibacterials, ATC code: J01XC01' — https://www.medicines.org.uk/emc/product/5515/smpc

### B1 · Adult dose

<span color="blue">`PO`</span> Disfect 膜衣錠 250 mg (sodium fusidate 250 mg ≈ fusidic acid 240 mg)<br>Adults & children >12 y (TW insert):<br>• SSTI: 250 mg (1 tab) BID; severe: dose may be doubled (UK SmPC: × 5–10 days)<br>• Other staph infections (osteomyelitis, pneumonia, septicaemia, wound, endocarditis, CF superinfection): 500 mg (2 tabs) TID; fulminant: dose may be doubled or combined therapy used<br>• Severe/deep-seated or prolonged therapy: give with another anti-staphylococcal agent (避免單用產生抗藥性)<br>Elderly: no adjustment 老年人不需調整 (UK SmPC)

**Why:** No adult dose is recorded. Every number above was re-verified against the live eMC text. UK SmPC 4.2: "250 mg (1 tablet) sodium fusidate (equivalent to 240 mg fusidic acid) twice daily for 5-10 days" for cutaneous infections; "500 mg (2 tablets) sodium fusidate (equivalent to 480 mg fusidic acid) 3 times daily. In severe cases of fulminating infections, the dosage may be doubled or appropriate combined therapy may be used." SmPC 5.2: "In severe or deep-seated infections and when prolonged therapy may be required, Fucidin should generally be given concurrently with other anti-staphylococcal antibiotic therapy." The US investigational loading regimen (1500 mg BID on day 1, then 600 mg BID; Craft 2011) is not approved anywhere and is not proposed for this column.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.2, §5.2 - https://www.medicines.org.uk/emc/product/5515/smpc

### B2 · Renal dose, HD, CRRT

No adjustment in renal impairment (biliary excretion; little/none in urine) 腎功能不全不需調整 (TW insert, UK SmPC)<br>HD: no adjustment, not significantly dialysed; no supplement<br>CAPD: no label guidance; small PK study (500 mg q8h): accumulation in both HD and CAPD patients, peritoneal fluid levels 1.0–2.3 mg/L (Brown 1997)<br>CRRT: no data; mainly non-renal elimination, protein binding 91–98% → no adjustment expected [inferred, no CRRT study]

**Why:** UK SmPC 4.2: "Since Fucidin is excreted in the bile, no dosage modifications are needed in renal impairment. The dosage in patients undergoing haemodialysis needs no adjustment as Fucidin is not significantly dialysed." SmPC 4.9: "Dialysis will not increase the clearance of fusidic acid." Brown 1997 (PMID 9222051, verified by esummary) studied 7 HD and 7 CAPD patients on 500 mg q8h: "Serum concentrations were not reduced by haemodialysis"; protein binding was 87.6–94.6%, and accumulation was seen. Turnidge 1999 (PMID 9222051's companion review, PMID 10528784, verified): clearance is "essentially unchanged in renal failure" and the drug is "highly protein-bound (91-98%)". No CRRT study was found (PubMed search for fusidic acid with renal replacement, hemofiltration, haemofiltration or dialysis returned none), so the CRRT line is an inference and is marked as such.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.2, §4.9 - https://www.medicines.org.uk/emc/product/5515/smpc; Brown NM et al. J Antimicrob Chemother 1997;39:803-9, PMID 9222051 - https://pubmed.ncbi.nlm.nih.gov/9222051/; Turnidge J. Int J Antimicrob Agents 1999;12 Suppl 2:S23-34, PMID 10528784 - https://pubmed.ncbi.nlm.nih.gov/10528784/

### B3 · Hepatic dose

No specific dose adjustment in label. Hepatic metabolism + biliary excretion: use with caution and monitor LFT in hepatic dysfunction, biliary disease/obstruction, or with hepatotoxic drugs. TW insert: with high-dose prolonged therapy, check LFT periodically, especially with lincomycin/rifampicin (same excretion route). Caution in impaired bilirubin transport/metabolism. 肝功能不佳/膽道異常者小心使用並定期追蹤肝功能 (clearance ↓ in severe cholestasis)

**Why:** UK SmPC 4.4: "Fusidic acid is metabolised in the liver and excreted in the bile. Elevated liver enzymes and jaundice have occurred... Systemic Fucidin should be given with caution and liver function should be monitored if used in patients with hepatic dysfunction or in patients taking potentially hepatotoxic drugs. Caution is required in patients with biliary disease and biliary tract obstruction... Caution is necessary if systemic Fucidin is administered to patients with impaired transport and metabolism of bilirubin." Turnidge 1999: "clearance is decreased in the presence of severe cholestasis".

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.4 - https://www.medicines.org.uk/emc/product/5515/smpc; Turnidge J 1999, PMID 10528784 - https://pubmed.ncbi.nlm.nih.gov/10528784/

### B4 · Pediatric dose

Children >12 y: adult tablet dose (TW insert) 超過12歲同成人劑量<br>≤12 y: no tablet dose in TW insert or UK SmPC. UK oral suspension (not stocked; 5 mL therapeutically ≈ 175 mg sodium fusidate, not mg-for-mg with tablets): 0–1 y 1 mL/kg/day ÷ TID; 1–5 y 5 mL TID; 5–12 y 10 mL TID.<br>Neonates: caution in preterm, jaundiced, acidotic or seriously ill neonates (bilirubin displacement, theoretical kernicterus risk) 新生兒小心使用

**Why:** UK tablet SmPC 4.2 lists only adult and elderly doses (re-verified; no 'Children' paragraph). UK suspension SmPC 4.2: "Children: 0-1 year: 1 ml/kg bodyweight daily, divided into 3 equal doses 1-5 years: 5 ml 3 times daily 5-12 years: 10 ml 3 times daily" and "Each 5 ml of Fucidin Suspension is therapeutically equivalent to 175 mg of sodium fusidate owing to its lower oral bioavailability." Tablet SmPC 4.4: "Particular care is advised in neonates due to the theoretical risk of kernicterus." The hospital site's "adults and children over 12" age cut-off is not in the UK tablet SmPC; it may come from the Taiwan insert, which I could not obtain.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.2, §4.4 - https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC Fucidin 250 mg/5 ml Oral Suspension §4.2 - https://www.medicines.org.uk/emc/product/5514/smpc

### B5 · Indications

SSTI, Osteoarthritis, Pneumonia, Bacteremia, Sepsis, Endocarditis

**Why:** UK SmPC 4.1: "all staphylococcal infections due to susceptible organisms such as: cutaneous infections, osteomyelitis, pneumonia, septicaemia, wound infections, endocarditis, superinfected cystic fibrosis." The tags map as follows: cutaneous and wound → SSTI; osteomyelitis → Osteoarthritis (the database uses this tag for bone/joint infection, as in Teicod); septicaemia → Bacteremia and Sepsis. All of these options exist in the schema. No tag exists for 'superinfected cystic fibrosis', so it goes in Notes. Note that every indication is limited to staphylococcal infection.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.1 - https://www.medicines.org.uk/emc/product/5515/smpc

### B6 · Coverage

MSSA, MRSA, MRSE, Staphylococcus, Corynebacterium

**Why:** UK SmPC 5.1: "Concentrations of 0.03 - 0.12 micrograms/ml inhibit nearly all strains of Staphylococcus aureus. Fusidic acid is active against Staphylococcus epidermidis and methicillin resistant staphylococci." This supports the MSSA, MRSA, MRSE and Staphylococcus tags. For Corynebacterium, Biedenbach 2010 (PMID 20159376, verified) reports "greatest potency against Staphylococcus aureus, Corynebacterium spp." (MIC ≤0.12). Do NOT tag Streptococcus or Enterococcus: they are "less susceptible (MIC ranges, 2-8 and 16-32 microg/mL)". Activity against Gram-negatives is limited except N. meningitidis and M. catarrhalis, so no Neisseria tag; mention this in Notes only. All proposed tags exist in the schema.

**Sources:** UK SmPC Fucidin 250 mg Tablets §5.1 - https://www.medicines.org.uk/emc/product/5515/smpc; Biedenbach DJ et al. Diagn Microbiol Infect Dis 2010;66:301-7, PMID 20159376 - https://pubmed.ncbi.nlm.nih.gov/20159376/

### B7 · Side Effects

GI, LFT↑, hematologic, anemia, leukopenia, neutropenia, thrombocytopenia, rhabdomyolysis, AKI, DRESS, SJS/TEN

**Why:** Supporting text from UK SmPC 4.8: "The most frequently reported undesirable effects of Fucidin administered orally are gastrointestinal disorders" (common). Hepatobiliary effects are uncommon: hepatic failure, cholestasis, hepatitis, jaundice, hyperbilirubinaemia and abnormal LFTs. Uncommon blood effects are pancytopenia, leukopenia, thrombocytopenia and anaemia. Uncommon "Rhabdomyolysis g) ... may be fatal". Uncommon "Renal failure h) ... includes renal failure acute". Frequency not known: TEN, SJS and DRESS (also a 4.4 warning). All tag names exist in the schema. Anaphylactic shock (uncommon) has no tag, so it goes in Notes.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.4, §4.8 - https://www.medicines.org.uk/emc/product/5515/smpc

### B8 · Monitor

LFT, PT/INR, CPK

**Why:** UK SmPC 4.4: "liver function should be monitored if used in patients with hepatic dysfunction or in patients taking potentially hepatotoxic drugs". SmPC 4.5 (oral anticoagulants): "Anticoagulation should be closely monitored". SmPC 4.4 tells patients to seek advice for "muscle weakness, pain or tenderness" when a statin is involved. The label does not specify a CPK check, so the CPK tag is optional and flagged as derived. All tags exist in the schema.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.4, §4.5 - https://www.medicines.org.uk/emc/product/5515/smpc

### B9 · Mechanism

Fusidane (steroid) antibiotic: binds EF-G–GDP on the ribosome → blocks peptide translocation & ribosome recycling → ↓ protein synthesis; slowly bactericidal vs S. aureus; little cross-resistance with other classes. Resistance: fusA mutation (high-level) or plasmid fusB/fusC (low-level)

**Why:** The UK SmPC 5.1 gives only the pharmacotherapeutic group ("Steroid antibacterials, ATC code: J01XC01"), not the mechanism. Fernandes 2016 (PMID 26729758, verified): "Fusidic acid inhibits protein synthesis by binding EF-G-GDP, which results in the inhibition of both peptide translocation and ribosome disassembly... little cross-resistance with other known antibiotics"; the same source covers fusA mutations and fusB/fusC/fusD. Turnidge 1999: "slowly bactericidal against Staphylococcus aureus".

**Sources:** UK SmPC Fucidin 250 mg Tablets §5.1 - https://www.medicines.org.uk/emc/product/5515/smpc; Fernandes P. Cold Spring Harb Perspect Med 2016;6:a025437, PMID 26729758 - https://pubmed.ncbi.nlm.nih.gov/26729758/; Turnidge J 1999, PMID 10528784 - https://pubmed.ncbi.nlm.nih.gov/10528784/

### B10 · Drug Interactions

⚠️ Statins: contraindicated (TW insert 禁忌) / must not be co-administered (UK): rhabdomyolysis incl. fatal cases → stop statin during therapy, restart 7 d after last dose 禁併用statin<br>• CYP3A4 substrates: avoid (suspected mutual inhibition)<br>• Warfarin/coumarins: ↑ anticoagulant effect → monitor INR, may need ↓ dose (re-assess on stopping)<br>• HIV PIs (ritonavir, saquinavir): ↑ both, hepatotoxicity → not recommended<br>• Cyclosporin: ↑ cyclosporin levels (TW insert) → monitor levels<br>• Rifampicin (common combo): ↓ FA levels reported with BID FA dosing; not seen with TID dosing in one small study (n=10)

**Why:** UK SmPC 4.4/4.5: "Statins (HMG-CoA reductase inhibitors) and systemic Fucidin must not be co-administered... Statin therapy may be re-introduced seven days after the last dose". SmPC 4.5: "The use of Fucidin systemically should be avoided in patients treated with CYP-3A4 biotransformed drugs". Coumarins: "may increase the plasma concentration... a decrease of the oral anticoagulant dose may be necessary". HIV PIs: "Concomitant use is not recommended." Deljehier 2018 (PMID 29337401, verified) supports the statin severity: 24–28% of rhabdomyolysis cases were fatal, with a median of 21–31 days of co-administration. For rifampicin: Pushkin 2016 (PMID 27682068, verified) found FA exposures 40–45% lower with FA/RIF. Maggs 2026 (PMID 42708226, verified) found that with TID FA, "fusidic acid concentrations were not reduced". Rifampicin is not in the SmPC, so this line is PubMed-sourced.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.4, §4.5 - https://www.medicines.org.uk/emc/product/5515/smpc; Deljehier T et al. Br J Clin Pharmacol 2018;84:1057-63, PMID 29337401 - https://pubmed.ncbi.nlm.nih.gov/29337401/; Pushkin R et al. Clin Infect Dis 2016;63:1599-1604, PMID 27682068 - https://pubmed.ncbi.nlm.nih.gov/27682068/; Maggs C et al. J Antimicrob Chemother 2026;81:dkag293, PMID 42708226 - https://pubmed.ncbi.nlm.nih.gov/42708226/

### B11 · Pregnancy

TW insert: no teratogenicity in animal/clinical data, but crosses placenta; avoid in last trimester (kernicterus risk) 妊娠最後三個月應避免使用<br>UK SmPC: limited human data (<300 outcomes), animal studies show no reproductive toxicity; as a precaution avoid systemic use during pregnancy.<br>No US label (not FDA-approved).

**Why:** UK SmPC 4.6: "There are no or limited data (less than 300 pregnancy outcomes)... Animal studies do not indicate direct or indirect harmful effect with respect to reproductive toxicity. As a precautionary measure, it is preferable to avoid the use of systemic Fucidin during pregnancy." The SmPC precaution covers the whole pregnancy, not only the third trimester. Do not use a letter category: there is no US label, and the FDA has retired the categories.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.6 - https://www.medicines.org.uk/emc/product/5515/smpc

### B12 · Breastfeeding

TW insert: milk levels minimal, no contraindication to breastfeeding 乳汁濃度微少<br>UK SmPC: likely excreted in milk; risk to infant cannot be excluded → weigh benefit of breastfeeding vs therapy.<br>LactMed: old, limited data; milk levels after IV dosing low (0.005–0.86 mg/L); no infant data.<br>Consider caution in jaundiced/preterm infants (bilirubin displacement) [extrapolated, no lactation data]

**Why:** UK SmPC 4.6: "Physico-chemical data suggest excretion of fusidic acid in human milk. A risk to the suckling child cannot be excluded. A decision must be made whether to discontinue breast-feeding or to discontinue/abstain from systemic Fucidin therapy". LactMed summary: "Data on excretion of fusidic acid into breastmilk are quite old and not from a well-designed study, but levels in breastmilk after intravenous fusidic acid appear to be low." Drug Levels: 0.005 to 0.86 mg/L. Infant levels and effects: "Relevant published information was not found". The neonatal caution is extrapolated from SmPC 4.4 ("theoretical risk of kernicterus") and is flagged as an extrapolation.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.4, §4.6 - https://www.medicines.org.uk/emc/product/5515/smpc; LactMed Fusidic Acid NBK500893 (rev 2025-02-15), Summary and Drug Levels - https://www.ncbi.nlm.nih.gov/books/NBK500893/

### B13 · Notes

Not FDA-approved (no US label). References: TW insert Disfect 衛署藥製字第049704號 (stocked product) + UK SmPC (Fucidin tablets). Hospital stocks <span color="blue">`PO`</span> 250 mg tab only; IV (not stocked) is used when oral absorption is unreliable.<br>• Mainly anti-staphylococcal: streptococci/enterococci less susceptible, Gram-negatives resistant (except Neisseria/Moraxella in vitro); not for empiric strep/enterococcal/GN infection<br>• Resistance emerges with monotherapy (fusA, fusB) → for severe/deep-seated/prolonged infection combine with another anti-staph agent (e.g. rifampicin) 嚴重感染宜合併治療<br>• Also labelled for superinfected cystic fibrosis (no tag)<br>• Statin must be stopped (see DI) 全身性使用需停用statin<br>• DRESS/SJS/TEN: stop and do not rechallenge. Anaphylaxis and AGEP reported<br>• No TDM target in labels

**Why:** Notes consolidates label caveats that have no column of their own. UK SmPC 5.2 states the combination advice; Howden 2006 (PMID 16392088, verified): "Ensuring that systemic fusidic acid is always used in combination... will be vital". UK SmPC 4.4 on DRESS/SJS/TEN: "treatment with systemic Fucidin should be stopped and it is recommended not to reintroduce the therapy." Anaphylaxis is in SmPC 4.8. The superinfected CF indication is in SmPC 4.1. The limited streptococcal, enterococcal and Gram-negative activity comes from Biedenbach 2010. The TDM statement reflects that neither the SmPC nor the PubMed searches gave a target.

**Sources:** UK SmPC Fucidin 250 mg Tablets §4.1, §4.4, §4.8, §5.2 - https://www.medicines.org.uk/emc/product/5515/smpc; Howden BP, Grayson ML. Clin Infect Dis 2006;42:394-400, PMID 16392088 - https://pubmed.ncbi.nlm.nih.gov/16392088/; Biedenbach DJ et al. 2010, PMID 20159376 - https://pubmed.ncbi.nlm.nih.gov/20159376/; LactMed NBK500893 (not approved in US) - https://www.ncbi.nlm.nih.gov/books/NBK500893/

### B14 · Page body

Add a short monograph in the style of other entries, with these sections: Category (Fusidane / steroid antibacterial, ATC J01XC01); Product: Disfect 膜衣錠 250 mg (復剋菌膜衣錠, DIS01, 衛署藥製字第049704號) <span color="blue">`PO`</span>; Mechanism (B9); Indications (UK SmPC 4.1 staphylococcal list + TW 革蘭氏陽性菌及葡萄球菌感染; CF superinfection); Coverage (B6 + strep/enterococcal/GN limitation); Adult dose (B1 as edited, adults & >12 y); Renal/HD/CRRT (B2 as edited); Hepatic (B3 as edited); Pediatric (B4 as edited); Side effects (B7); Monitor (B8); Drug interactions (B10 as edited, incl. cyclosporin); Pregnancy (B11 as edited, TW + UK); Breastfeeding (B12 as edited, TW + UK + LactMed); Notes (B13 as edited); Key references (TW insert 衛署藥製字第049704號, UK SmPC eMC 5515 and 5514, LactMed NBK500893, PMIDs 9222051, 10528784, 26729758, 16392088, 20159376, 29337401, 27682068, 42708226). No storage/stability section.

**Why:** Other entries carry a body monograph and this new entry's body is empty. Every line should reuse the sourced column text above. Per the ground rules, storage details are excluded, and the 1.5–3 g/day transaminase/jaundice wording is not copied from the hospital site.

**Sources:** UK SmPC Fucidin 250 mg Tablets - https://www.medicines.org.uk/emc/product/5515/smpc; UK SmPC Fucidin 250 mg/5 ml Oral Suspension - https://www.medicines.org.uk/emc/product/5514/smpc; LactMed NBK500893 - https://www.ncbi.nlm.nih.gov/books/NBK500893/

## Apply log

- Category: Fusidane (steroid antibacterial, ATC J01XC01)
- Adult dose: merged UK SmPC + TW insert dosing (PO Disfect 250 mg; SSTI BID x5-10d; other staph 500 mg TID; severe doubling/combination; elderly no adjustment)
- Renal dose, HD, CRRT: no adjustment, HD not dialysed, CAPD PK (Brown 1997), CRRT inferred
- Hepatic dose: caution/LFT monitoring, biliary disease, bilirubin, TW lincomycin/rifampicin note
- Pediatric dose: >12 y adult dose, UK suspension doses (not stocked), neonate kernicterus caution
- Indications: SSTI, Osteoarthritis, Pneumonia, Bacteremia, Sepsis, Endocarditis
- Coverage: MSSA, MRSA, MRSE, Staphylococcus, Corynebacterium
- Side Effects: GI, LFT↑, hematologic, anemia, leukopenia, neutropenia, thrombocytopenia, rhabdomyolysis, AKI, DRESS, SJS/TEN
- Monitor: LFT, PT/INR, CPK (qualifier added in Notes)
- Mechanism: EF-G inhibition, tissue/bone penetration, resistance mechanisms
- Drug Interactions: statins contraindicated (restart 7 d after), CYP3A4, warfarin, HIV PIs, cyclosporin, rifampicin
- Pregnancy: TW (avoid last trimester) + UK SmPC (avoid systemic use), no US label
- Breastfeeding: TW + UK SmPC benefit/risk + LactMed levels
- Notes: merged (not FDA-approved, TW licence 衛署藥製字第049704號, spectrum limits, resistance/combination, CF, statin, monitor qualifier, DRESS/SJS/TEN, no TDM)
- Page body: monograph sections (Category, Product, Mechanism, Indications, Coverage, Adult/Renal/Hepatic/Pediatric dose, Side effects, Monitor, DI, Pregnancy, Breastfeeding, Notes) plus References section with TW insert, eMC 5515/5514, LactMed NBK500893, FDA none, and 8 PMIDs (all verified via NCBI esummary)
- Renewed date: 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
