# Verification: AmoClav (Amoxicillin/clavulanate)

- **Notion entry:** [AmoClav (Amoxicillin/clavulanate)](https://app.notion.com/230c496dfff180c285fde8fc87f650a4)
- **Hospital codes:** AMO04 (AmoClav inj 1000/200 mg), AMO08 (Amonado inj)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/amoxicillin-and-clavulanate.json` (plus any `sources/amoxicillin-and-clavulanate-taiwan-insert-*.txt`)

## Product and sources

The hospital stocks IV amoxicillin/clavulanate 1000 mg/200 mg (1.2 g) vials. AMO04 is AmoClav inj (NHI AC57877297). The maker 中化裕民 and licence 衛署藥製字第057877號 are unverified guesses, and I have marked them as such in the sources JSON. AMO08 is Amonado inj (NHI AC60231297). No Taiwan package insert was found: mcp.fda.gov.tw needs a CAPTCHA and data.fda.gov.tw is blocked by the proxy. No IV amoxicillin/clavulanate is FDA-approved, so for the IV product the matching official label is the UK SmPC (Sandoz Co-amoxiclav 1000/200 mg powder for injection/infusion, eMC 7211, revised 23/10/2023). The US DailyMed labels cover the oral tablet only (RemedyRepack setid 80bef3fd…, v10). For paediatric oral dosing I also checked the US AUGMENTIN labels: setid 174cc098… (tablets/suspension), 59979859… (ES-600) and 046da5ed… (XR). Breastfeeding source: LactMed NBK500776, revised 2025-12-15. One file edited: verification/sources/amoxicillin-and-clavulanic-acid.json. I changed taiwan_insert_note so the maker and licence number are marked UNVERIFIED/GUESS, and added a us_pediatric_label_note naming the extra AUGMENTIN setids.

## Agreed fixes applied in Notion (53)

### A1 · Adult dose (error)

**Was:** PO: 500/125mg q8-12h; 875/125mg q12h<br>IV: 1200mg q8h (q12h for less severe infection)<br><br>Max amoxicillin: 3-4g/day

**Now:** PO: 500/125mg q12h (mild-mod) or q8h (severe); 875/125mg q12h (severe); take at start of meal<br>IV (1.2g = 1000/200 vial): 1200mg q8h; IV push 3-4 min or infusion 30-40 min; NOT for IM<br>(q12h for less severe infection: not in label, per local guideline only — flagged)<br>Surgical prophylaxis: 1200mg IV at induction; procedure >1h: up to 3 doses of 1200mg in 24h<br><br>Max with 1.2g vial: amoxicillin 3g + clavulanate 600mg/day (if more amoxicillin needed → use a different IV formulation; do not shorten interval)<br>Review if >14 days

**Why:** The UK SmPC for the 1000/200 mg IV product gives only 'every 8 hours' and caps the regimen at 3000 mg amoxicillin + 600 mg clavulanate a day. 'q12h for less severe infection' is in no label. 'Max 3-4 g/day' does not apply to the IV vial; 4 g/day is reachable only with the US XR tablet. The column is also missing the SmPC surgical-prophylaxis regimen, the administration rate and route, and the 14-day review rule. The PO lines match US label Table 1.

**Sources:** UK SmPC 4.2 Posology: 'Adults and children ≥ 40 kg… 1000 mg/200 mg every 8 hours'; 'provides a total daily dose of 3000 mg amoxicillin and 600 mg clavulanic acid… If… a higher daily dose of amoxicillin is required… an alternative intravenous formulation… is selected'; prophylaxis '…with up to 3 doses of 1000 mg/200 mg in 24 hours'; 'slow intravenous injection over 3 to 4 min… or by infusion over 30 to 40 min… not suitable for intramuscular administration'; 'should not be extended beyond 14 days without review' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label (DailyMed) 2.2 Table 1: mild-moderate 500/125 q12h or 250/125 q8h; severe 875/125 q12h or 500/125 q8h; take at start of a meal — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A2 · Renal dose, HD, CRRT (error)

**Was:** CrCl 10-30: PO 250-500mg q12h; IV 600-1200mg q12h (avoid 875mg tab and XR)<br>CrCl <10: PO 250-500mg q24h; IV 600-1200mg q24h<br>HD: PO 250-500mg q24h; IV 600-1200mg q24h + supplemental dose during & after dialysis<br>CRRT: 600-1200mg IV q8-12h

**Now:** CrCl >30: No adjustment<br><br>CrCl 10-30: <br>PO 250-500mg q12h (avoid 875mg tab and XR); <br>IV 1200mg ×1, then 600mg q12h<br><br>CrCl <10: <br>PO 250-500mg q24h; <br>IV 1200mg ×1, then 600mg q24h<br><br>HD: <br>PO 250-500mg q24h + extra dose during AND at end of HD (US label); <br>IV 1200mg ×1, then 600mg q24h + 600mg at end of HD (UK SmPC)<br>CRRT: no label dose; 600-1200mg IV q8-12h = non-label expert range (flagged); under-exposure reported on RRT with 1.2g q8h (PMID 31940615) → consider TDM / ID-pharmacist input

**Why:** In the UK SmPC, 1000/200 mg (1200 mg) is only the initial dose. Maintenance is 500/100 mg (600 mg) q12h for CrCl 10–30 and q24h for CrCl <10, so the '600-1200mg' maintenance range lets the dose run to twice the label. For IV haemodialysis the SmPC gives the extra dose at the end of dialysis only; 'during & after' is the US oral tablet wording. The PO lines and the 875 mg/XR exclusions match the US labels. The CRRT dose is in no label or guideline. The only PubMed hit, a single case report (PMID 31940615, verified by esummary), found under-exposure with 1.2 g q8h during RRT, so the current CRRT range cannot be supported.

**Sources:** UK SmPC 4.2 Renal impairment: 'CrCl 10-30 ml/min Initial dose of 1000 mg/200 mg and then 500 mg/100 mg given twice daily; CrCl <10 ml/min Initial dose of 1000 mg/200 mg and then 500 mg/100 mg given every 24 hours; Haemodialysis Initial dose of 1000 mg/200 mg… 500 mg/100 mg every 24 hours, plus a dose of 500 mg/100 mg at the end of dialysis' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 2.6 Table 4 and 8.6: GFR 10-<30: 500 or 250 mg q12h; <10: q24h; HD: q24h + 'additional dose both during and at the end of dialysis'; GFR <30 should not receive 875 mg/125 mg — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; AUGMENTIN XR label CONTRAINDICATIONS: 'contraindicated in patients with severe renal impairment (creatinine clearance < 30 mL/min.) and in hemodialysis patients' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=046da5ed-06d5-46fc-b734-de5c2978d261; Lonsdale DO et al. Chemotherapy 2019;64(4):173-176, PMID 31940615 — https://pubmed.ncbi.nlm.nih.gov/31940615/

### A3 · Pediatric dose (error)

**Was:** 常見 **IV dose: 100-120 mg/kg/day q8h<br>**<br>Limit clavulanate \<10 mg/kg/day. <br>Max amoxicillin: 2-3g/day (up to 4g high-dose).

**Now:** 常見 **IV dose (UK SmPC, <40 kg): ≥3 months 25/5 mg/kg (=30 mg/kg of 1.2 g product) q8h; <3 months or <4 kg: 25/5 mg/kg q12h, infusion only; ≥40 kg: adult dose**<br>IV renal (<40 kg): CrCl 10-30 25/5 mg/kg q12h; CrCl <10 q24h; HD q24h + 12.5/2.5 mg/kg at end of HD<br><br>Limit clavulanate <10 mg/kg/day (PO; not stated in label). <br>Max: up to the adult dose (US label); 'Max amoxicillin 2-3g/day (up to 4g high-dose)' unsourced — flagged.

**Why:** The SmPC IV dose for children aged 3 months or older and under 40 kg is 25 mg amoxicillin per kg q8h, i.e. 75 mg/kg/day amoxicillin (90 mg/kg/day as combined product). 100–120 mg/kg/day q8h is above that on either basis, and at the IV 5:1 ratio it means about 17–24 mg/kg/day of clavulanate. The column also omits the SmPC under-3-months/under-4-kg q12h infusion-only regimen. The '<10 mg/kg/day clavulanate' limit is unsourced and does not fit the SmPC IV regimen (15 mg/kg/day), so it should be scoped to oral use. 'Max 2-3 g (up to 4 g)' is unsourced; the US label says 'up to the adult dose'.

**Sources:** UK SmPC 4.2 Paediatric population: 'Children aged 3 months and over: 25 mg/5 mg per kg every 8 hours • Children aged less than 3 months or weighing less than 4 kg: 25 mg/5 mg per kg every 12 hours'; 'Children aged less than 3 months should be administered… by infusion only' — https://www.medicines.org.uk/emc/product/7211/smpc; AUGMENTIN US label highlights 2: 'Pediatric patients aged 12 weeks (3 months) and older: 25 to 45 mg/kg/day every 12 hours or 20 to 40 mg/kg/day every 8 hours, up to the adult dose' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=174cc098-fe49-4f1a-87e2-601c7573f0db

### A4 · Pediatric dose (minor)

**Was:** High-dose: 90 mg/kg/day q12h

**Now:** High-dose: 90 mg/kg/day q12h ×10 days (ES-600 suspension only; 3 mo–12 y ≤40 kg, recurrent/persistent AOM)

**Why:** In the US labels, 90 mg/kg/day is approved only for the ES-600 (600/42.9 mg per 5 mL) formulation and only for recurrent or persistent AOM. Giving this dose with other formulations means an excess of clavulanate.

**Sources:** AUGMENTIN ES-600 label 1 and 2.2: 'pediatric patients aged 3 months to 12 years weighing less than or equal to 40 kg… recurrent or persistent acute otitis media'; '90 mg/kg/day divided every 12 hours, administered for 10 days… provides 6.4 mg/kg/day of the clavulanic acid' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=59979859-8c9b-4173-a5e3-2e6312fd9d79

### A5 · Pregnancy (error)

**Was:** Category B; generally considered safe

**Now:** No established risk of major birth defects/miscarriage (US label 8.1); PPROM prophylaxis associated with ↑ neonatal NEC (1.9% vs 0.5%) → avoid in PPROM; UK SmPC: avoid unless considered essential

**Why:** The FDA has retired letter categories, and the ground rules forbid quoting 'Category B' as current. Both labels carry the PPROM/NEC warning and the column leaves it out. The UK SmPC is more restrictive than 'generally considered safe'.

**Sources:** US FDA label 8.1 Pregnancy: 'have not established a drug-associated risk of major birth defects, miscarriage…'; PPROM RCT 'necrotizing enterocolitis: 1.9%… versus 0.5%' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC 4.6: '…prophylactic treatment… may be associated with an increased risk of necrotising enterocolitis in neonates. Use should be avoided during pregnancy, unless considered essential' — https://www.medicines.org.uk/emc/product/7211/smpc

### A6 · Side Effects (missing)

**Was:** ["GI", "LFT↑"]

**Now:** ["GI", "LFT↑", "SJS/TEN", "DRESS", "CNS", "thrombophlebitis", "hematologic", "coagulopathy", "AKI"]

**Why:** Both labels give severe cutaneous reactions (SJS/TEN/DRESS/AGEP) a warning section. The SmPC lists convulsions in renal impairment or at high dose, rare injection-site thrombophlebitis (relevant to the IV product), rare leucopenia/thrombocytopenia and prolonged PT. All of these tags already exist in the schema.

**Sources:** US FDA label 5.2 SCAR (SJS, TEN, DRESS, AGEP); 6.2 CNS 'convulsions'; Hemic 'thrombocytopenia… leukopenia… agranulocytosis'; 'increased prothrombin time' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC 4.4/4.8: 'Convulsions may occur in patients with impaired renal function or… high doses'; 'Thrombophlebitis (at the site of injection) Rare'; 'Reversible leucopenia… Rare; Thrombocytopenia Rare'; 'Prolongation of bleeding time and prothrombin time'; SJS/TEN/DRESS — https://www.medicines.org.uk/emc/product/7211/smpc

### A7 · Coverage (missing)

**Was:** ["Streptococcus","MSSA","Enterococcus","E.coli","Proteus","Klebsiella","Haemophilus"]

**Now:** ["Streptococcus","MSSA","E. faecalis","E.coli","Proteus","Klebsiella","Haemophilus","Anaerobes","Bacteroides"]

**Why:** Both labels list anaerobic activity (B. fragilis, Fusobacterium, Prevotella/Peptostreptococcus), which is a main reason to choose amox/clav, yet the Anaerobes and Bacteroides tags are absent. The SmPC lists only E. faecalis as commonly susceptible; E. faecium is a species where acquired resistance may be a problem. That makes 'E. faecalis' the accurate tag rather than the genus-wide 'Enterococcus' (minor, and optional if the owner prefers to keep 'Enterococcus'). E. coli, Klebsiella and Proteus are correctly listed, but the SmPC marks them as 'acquired resistance may be a problem'.

**Sources:** UK SmPC 5.1 'Commonly susceptible species… Enterococcus faecalis… Anaerobic micro-organisms Bacteroides fragilis Fusobacterium nucleatum Prevotella spp.'; 'Species for which acquired resistance may be a problem… Enterococcus faecium… Escherichia coli Klebsiella… Proteus' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 12.4: 'Anaerobic Bacteria Bacteroides species including Bacteroides fragilis Fusobacterium species Peptostreptococcus species'; 'Enterococcus faecalis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A8 · Indications (missing)

**Was:** ["SSTI","Pneumonia","CAP","UTI","IAI","Surgical prophylaxis"]

**Now:** ["SSTI","Pneumonia","CAP","UTI","IAI","Surgical prophylaxis","Pelvic","Osteoarthritis"]

**Why:** The SmPC for the stocked IV product also lists female genital infections (→ 'Pelvic') and bone and joint infections/osteomyelitis (→ 'Osteoarthritis', if that is the owner's bone/joint tag). It also lists pyelonephritis, so 'cUTI' could be added; the owner should decide that, given E. coli resistance. ENT infections and AECB have no matching tag.

**Sources:** UK SmPC 4.1: '• Pyelonephritis… • Bone and joint infections, in particular osteomyelitis • Intra-abdominal infections • Female genital infections' — https://www.medicines.org.uk/emc/product/7211/smpc

### A9 · Drug Interactions (missing)

**Was:** Warfarin: ↑ INR, ↑ bleeding risk → monitor INR closely<br>Methotrexate: ↓ renal clearance → ↑ MTX toxicity<br>Allopurinol: ↑ risk of rash

**Now:** Warfarin: ↑ INR, ↑ bleeding risk → monitor INR closely<br>Methotrexate: ↓ renal clearance → ↑ MTX toxicity<br>Allopurinol: ↑ risk of rash<br>Probenecid: ↓ amoxicillin tubular secretion → ↑/prolonged levels; co-administration not recommended<br>Mycophenolate: MPA trough ↓ ~50% (oral amox/clav); dose change usually not needed, monitor graft function

**Why:** Both labels list probenecid, and the SmPC lists mycophenolate, but the column has neither. The three existing lines are correct.

**Sources:** US FDA label 7.1 Probenecid: 'Co-administration of probenecid is not recommended' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC 4.5: Probenecid '…not recommended'; Mycophenolate 'reduction in pre-dose concentration… MPA of approximately 50%… a change in the dose of mycophenolate mofetil should not normally be necessary… close clinical monitoring' — https://www.medicines.org.uk/emc/product/7211/smpc

### A10 · Hepatic dose (minor)

**Was:** No adjustment required

**Now:** No specific adjustment; use with caution, monitor LFT regularly<br>CI: prior amox/clav-associated cholestatic jaundice/hepatic dysfunction

**Why:** Both labels tie hepatic impairment to caution plus regular LFT monitoring, and contraindicate re-use after amox/clav-associated liver injury. A bare 'No adjustment required' leaves both out.

**Sources:** UK SmPC 4.2: 'Hepatic impairment Dose with caution and monitor hepatic function at regular intervals'; 4.3 'History of jaundice/hepatic impairment due to amoxicillin/clavulanic acid' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 4.2 and 8.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A11 · Breastfeeding (minor)

**Was:** Compatible; low levels in breast milk (\~0.25–0.5% of infant dose); rare reports of diarrhea/thrush in infant

**Now:** Acceptable (LactMed); low milk levels (~0.25–0.5% of infant dose); monitor infant for restlessness, diarrhea, rash (thrush possible)

**Why:** The 0.25–0.5% figure matches LactMed. 'Rare' understates infant effects: in a prospective controlled study 22.3% of exposed infants had adverse effects (restlessness 8.9%, diarrhoea 5.9%, rash 5.9%). LactMed advises monitoring for restlessness, diarrhoea and rash; thrush comes from the SmPC ('fungus infection of the mucous membranes').

**Sources:** LactMed NBK500776 (rev 2025-12-15) Summary: 'acceptable in nursing mothers. Monitor the infant for restlessness, diarrhea and rash'; Drug Levels: '0.25 to 0.5% of a typical infant amoxicillin dosage'; Effects in Breastfed Infants: 22.3% vs 7.5% — https://www.ncbi.nlm.nih.gov/books/NBK500776/; UK SmPC 4.6 Breast-feeding — https://www.medicines.org.uk/emc/product/7211/smpc

### A12 · Notes (unsupported)

**Was:** Hepatotoxicity attributed to clavulanate (not amoxicillin)

**Now:** Hepatotoxicity attributed to clavulanate (not amoxicillin) — unsourced, flagged<br>Hepatotoxicity (hepatitis/cholestatic jaundice): mainly males, elderly, prolonged therapy; onset may be weeks after stopping; contraindicated if prior amox/clav liver injury<br>Avoid in infectious mononucleosis (rash)<br>Aspergillus galactomannan (Platelia) false-positive possible<br>IV: do not mix with glucose, amino-acid, lipid or blood products; less stable in dextran/bicarbonate (inject into drip tubing instead); do not mix in vitro with aminoglycosides

**Why:** Neither label attributes hepatotoxicity to clavulanate. The SmPC notes the events 'have been noted with other penicillins and cephalosporins'. The current statement is plausible from non-label hepatology literature, but it is unsourced here, so it is flagged rather than removed. The proposed replacement uses label-sourced, clinically important points, including the galactomannan false-positive, which matters in ICU/haematology patients. The compatibility points are compatibility, not storage/stability.

**Sources:** UK SmPC 4.4: 'Hepatic events have been reported predominantly in males and elderly patients and may be associated with prolonged treatment… may not become apparent until several weeks after treatment has ceased'; 'positive test results using the Bio-Rad Laboratories Platelia Aspergillus EIA test'; 'avoided if infectious mononucleosis is suspected'; 6.2 Incompatibilities; 4.8 footnote 6 — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 5.4, 5.6, 6.2 Liver — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A13 · Mechanism (minor)

**Was:** Clavulanate: irreversible β-lactamase inhibitor (class II-V) → protects amoxicillin from enzymatic degradation.

**Now:** Clavulanate: β-lactamase inhibitor; inactivates some β-lactamases → protects amoxicillin; does NOT inhibit Ambler class B (MBL), C (AmpC), D (OXA) β-lactamases

**Why:** 'Class II-V' is unsourced Richmond-Sykes nomenclature, and readers can easily take it for Ambler classes. The SmPC states plainly which enzymes clavulanate does not inhibit, which explains why it does not cover AmpC producers (Enterobacter, Citrobacter freundii, Serratia). The amoxicillin line is correct.

**Sources:** UK SmPC 5.1 Mechanisms of resistance: 'Inactivation by those bacterial beta-lactamases that are not themselves inhibited by clavulanic acid, including class B, C and D' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 12.4 Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A14 · Page body (error)

**Was:** IV (outside US…): Less severe: 1.2g IV q12h; Severe infections: 1.2g IV q6h or 2.2g IV q8h

**Now:** Standard: 1.2g (1000/200) IV q8h (UK SmPC; max amoxicillin 3g + clavulanate 600mg/day with this vial). Less severe 1.2g q12h: not in label (local-guideline practice only) — flagged. If higher amoxicillin is needed, use a different IV formulation (e.g. 2000/200, not stocked); do NOT give 1.2g q6h (clavulanate 800 mg/day).

**Why:** The SmPC for the stocked 1000/200 mg product allows only q8h and caps clavulanate at 600 mg/day. 1.2 g q6h gives 800 mg/day of clavulanate. The SmPC says higher amoxicillin needs are met with an alternative formulation, and 2.2 g (2000/200) is not the hospital product. The 'q12h' regimen is in no label.

**Sources:** UK SmPC 4.2 — https://www.medicines.org.uk/emc/product/7211/smpc

### A15 · Page body (error)

**Was:** Pediatric Dose — IV dosing: 100 mg/kg/day IV divided q8h (max 3g amoxicillin/day for standard, 6g/day severe)

**Now:** IV dosing (UK SmPC, <40 kg): ≥3 months: 25/5 mg/kg q8h (75 mg/kg/day amoxicillin); <3 months or <4 kg: 25/5 mg/kg q12h, infusion only; ≥40 kg: adult dose

**Why:** This contradicts the SmPC, as in A3. The '6 g/day' figure has no source.

**Sources:** UK SmPC 4.2 Paediatric population — https://www.medicines.org.uk/emc/product/7211/smpc

### A16 · Page body (error)

**Was:** Notes — Cross-reactivity: ~1-10% cross-reactivity with cephalosporins; use with caution in penicillin allergy (avoid if history of anaphylaxis)

**Now:** Contraindicated in penicillin hypersensitivity and in history of severe immediate hypersensitivity (e.g. anaphylaxis) or SJS to another β-lactam (cephalosporin, carbapenem, monobactam) (UK SmPC 4.3; US 4.1). Cephalosporin cross-reactivity '~1-10%': unsourced — flagged.

**Why:** Amox/clav is a penicillin, so 'use with caution in penicillin allergy' contradicts both labels, which list penicillin hypersensitivity as a contraindication. The '1-10%' figure is unsourced.

**Sources:** UK SmPC 4.3: 'Hypersensitivity to the active substances, to any of the penicillins… History of a severe immediate hypersensitivity reaction (e.g. anaphylaxis) to another beta-lactam agent' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 4.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A17 · Page body (error)

**Was:** Renal — CrCl 10-30: IV: 1.2g q12h → then 600mg q12h; Hemodialysis: PO only + 'additional dose during AND after dialysis'; 'moderately dialyzable (20-50%)'; Peritoneal Dialysis 250-500mg q24h; CRRT (CVVH 500mg q8-12h OR 1.2g q12h; CVVHD/CVVHDF 500mg q8h OR 1.2g q8-12h)

**Now:** CrCl 10-30: IV 1.2g ×1, then 600mg q12h<br>CrCl <10: IV 1.2g ×1, then 600mg q24h<br>HD: IV 1.2g ×1, then 600mg q24h + 600mg at end of HD (UK SmPC); PO 250-500mg q24h + extra dose during and at end of HD (US label)<br>Both components removed by HD (US 8.6); '20-50%' unsourced — flagged<br>PD / CRRT: keep existing values labelled 'No label recommendation (expert-opinion values)'; PK data limited — critically ill popPK (Carlier 2013, PMID 23800901) and RRT case with under-exposure on 1.2 g q8h (Lonsdale 2019, PMID 31940615); consider TDM

**Why:** '1.2g q12h → then 600mg q12h' wrongly suggests repeated 1.2 g doses; the SmPC gives a single 1.2 g initial dose. There is no IV haemodialysis regimen. '20-50%' and the PD/CRRT doses are unsourced. The labels say only that both drugs are removed by haemodialysis.

**Sources:** UK SmPC 4.2 Renal impairment; 4.9 'can be removed from the circulation by haemodialysis' — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 2.6, 8.6 'Both amoxicillin and clavulanate are removed from the circulation by hemodialysis' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A18 · Page body (error)

**Was:** Three <details> toggles of pasted AI-chat Q&A ('Does amoxicillin/clavulanate have drug drug interaction?', 'Amoxicillin/clavulanate recommended dosage as empirical abx after CABG', 'AmoClav pediatric' with medscape/mayoclinic citations) plus four empty <details></details> blocks

**Now:** REMOVE

**Why:** These are pasted AI-chat text, which the ground rules say to remove, and they contain errors. Examples: 'Renal function (clavulanate can cause cholestatic jaundice)'; loop-diuretic, digoxin and potassium 'interactions' that neither label mentions; 'Max 250 mg/d' clavulanate for ≥40 kg, whereas the IV label allows 600 mg/day and 500/125 q8h gives 375 mg/day; and 'Oral formulation not suitable' as an argument while ignoring that the IV product exists. The empty toggles carry no content.

**Sources:** UK SmPC 4.2, 4.5 — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 2.2, 7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A19 · Page body (minor)

**Was:** Pregnancy — '**FDA Category B** (prior classification system)'; 'No evidence of teratogenicity in animal studies or controlled human data'; 'possible small increased risk of cleft lip/palate… not confirmed'

**Now:** Replace letter-category bullet with: 'Labels: no established drug-associated risk of major birth defects or miscarriage (US 8.1); animal studies show no harm; limited human data do not indicate increased malformation risk (UK SmPC 4.6). PPROM: ↑ neonatal NEC (1.9% vs 0.5%). UK SmPC: avoid unless considered essential.' Flag the cleft lip/palate bullet as unsourced (keep only if a PMID is added).

**Why:** The ground rules ban letter categories. The labels do not describe the human data as 'controlled'; the SmPC calls them limited. The cleft lip/palate claim has no source.

**Sources:** US FDA label 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/7211/smpc

### A20 · Page body (minor)

**Was:** Breastfeeding — 'Relative Infant Dose (RID): ~0.25-1%'; 'Milk:plasma ratio: 0.013-0.043'; 'AAP and WHO consider compatible'

**Now:** Infant dose ~0.25–0.5% of a typical infant amoxicillin dose (LactMed); modelled amoxicillin RID mean 0.055%, max 0.328% at 4 g/day maternal dose (LactMed). Flag 'Milk:plasma ratio 0.013-0.043' and 'AAP and WHO consider compatible' as unsourced.

**Why:** LactMed gives 0.25–0.5% of the infant dose and a modelled RID of 0.055% (maximum 0.328%), not '0.25-1%'. The M:P ratio and the AAP/WHO statement are not in LactMed. The 'peak 4-5 h' line is correct, though LactMed derives it from amoxicillin alone.

**Sources:** LactMed NBK500776 Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK500776/

### A21 · Page body (minor)

**Was:** Drug Interactions table — Mycophenolate 'Monitor for rejection; consider alternative antibiotic'; Oral contraceptives 'Use backup contraception'; Moderate: 'Tetracyclines, macrolides… antagonize'; 'Live vaccines (typhoid, BCG)'; Lab: 'May interfere with urinary protein tests'

**Now:** Mycophenolate → 'MPA trough ↓~50%; dose change usually not needed; close clinical monitoring (SmPC 4.5)'. Flag the OC, tetracycline/macrolide, BCG and urinary-protein lines as unsourced. Add Lab: 'False-positive Aspergillus galactomannan (Platelia EIA)'.

**Why:** For mycophenolate the SmPC advises clinical monitoring, not switching antibiotics. The other lines are in neither label (BCG in particular is doubtful). The galactomannan false-positive is in the SmPC but missing from the page. The warfarin, MTX, allopurinol and probenecid rows and the urine glucose and Coombs lab interactions are correct.

**Sources:** UK SmPC 4.4, 4.5 — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 7.1–7.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A22 · Page body (minor)

**Was:** Coverage — Gram-positive 'Listeria monocytogenes'; Gram-negative 'Salmonella spp.', 'Shigella spp.'; Anaerobes 'Porphyromonas', 'Clostridium spp.', 'B. fragilis (~89% susceptible)'; NO coverage list lacks AmpC producers

**Now:** Flag Listeria/Salmonella/Shigella/Porphyromonas/Clostridium/'~89%' as unsourced (not in either label). Add Pasteurella multocida, Eikenella corrodens, Capnocytophaga (SmPC commonly susceptible). Add to NO coverage: Enterobacter, Citrobacter freundii, Serratia, Morganella, Providencia (SmPC inherently resistant).

**Why:** The SmPC's 'inherently resistant' list includes Enterobacter, C. freundii, Serratia, Morganella and Providencia, which the page omits. Note that US label 1.7/12.4 still names Enterobacter for UTI, so the labels disagree; follow the SmPC for the IV product. The bite-wound organisms Pasteurella, Eikenella and Capnocytophaga are label-listed and back the page's 'bite wounds' note.

**Sources:** UK SmPC 5.1 susceptibility lists — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### A23 · Page body (minor)

**Was:** Indications list includes 'Diabetic foot infections', 'Aspiration pneumonia', 'Chronic GAS carriers'; lacks bone/joint, female genital, AECB

**Now:** Mark DFI/aspiration/GAS carrier as off-label (guideline-based); add label indications: bone and joint infections/osteomyelitis, female genital infections, acute exacerbation of chronic bronchitis, severe ENT infections (UK SmPC 4.1). IDSA sinusitis line OK — cite IDSA 2012 ABRS guideline (PMID 22438350).

**Why:** An indication counts as approved if the FDA label or the UK SmPC lists it. Three SmPC indications are missing from the body, and three body items appear in neither label. I checked PMID 22438350 (IDSA ABRS, Clin Infect Dis 2012) with esummary.

**Sources:** UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label 1.1–1.7 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; Chow AW et al. IDSA ABRS guideline, Clin Infect Dis 2012, PMID 22438350 — https://pubmed.ncbi.nlm.nih.gov/22438350/

### A24 · Page body (minor)

**Was:** Notes — 'Stability: Reconstituted suspension must be refrigerated; discard after 10 days'

**Now:** REMOVE

**Why:** The owner deliberately removed storage/stability details. The statement does match the US suspension label (2.5), but it is about oral suspension storage and is out of scope.

**Sources:** AUGMENTIN suspension label 2.5 (Allegis, setid 04a31a42-d79e-bbb4-e063-6394a90a63ee) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=04a31a42-d79e-bbb4-e063-6394a90a63ee

### A25 · Page body (minor)

**Was:** Side Effects — 'Diarrhea (most common; 9-34%…)'; 'Hepatotoxicity… up to 6 weeks post-treatment… prolonged treatment >14 days'; Adult Dose '875/125mg q12h preferred… better GI tolerance'

**Now:** Diarrhea 9% overall (US 6.1), 14–15% in pivotal 875 q12h vs 500 q8h trials; hepatic events 'during or several weeks after' therapy; 875 q12h vs 500 q8h: similar overall AE incidence, severe diarrhea/discontinuation 1% vs 2%. Add: Kounis syndrome, aseptic meningitis, thrombophlebitis (IV site), linear IgA dermatosis, serum sickness-like reaction.

**Why:** The labels contain neither 34%, 'up to 6 weeks' nor '>14 days'. The US label reports a similar overall adverse-event rate for 875 q12h and 500 q8h, so 'better GI tolerance' is overstated. The listed reactions appear in SmPC 4.8 or US 6.2 but are missing from the page.

**Sources:** US FDA label 6.1, 6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC 4.4, 4.8 — https://www.medicines.org.uk/emc/product/7211/smpc

### A26 · Page body (minor)

**Was:** *Sources: FDA Prescribing Information (2024), StatPearls/NCBI (August 2024), LactMed (December 2025), EMA SmPC, Sanford Guide, IDSA Guidelines, Johns Hopkins ABX Guide*

**Now:** *Sources: UK SmPC Co-amoxiclav 1000/200 mg IV (eMC 7211, rev 23/10/2023) https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label amoxicillin/clavulanate tablets (DailyMed setid 80bef3fd-4f6f-4190-8865-9ac46c8947a3) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; AUGMENTIN pediatric labels (setid 174cc098…, 59979859…); LactMed NBK500776 (rev 2025-12-15) https://www.ncbi.nlm.nih.gov/books/NBK500776/; Taiwan 仿單: not found*

**Why:** The current source line has no URLs, names an 'EMA SmPC' although amox/clav has no centrally authorised EMA product, and lists sources that cannot be checked. The ground rules require every claim to be cited with a URL.

**Sources:** UK SmPC — https://www.medicines.org.uk/emc/product/7211/smpc; DailyMed — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK500776/

### B1 · Pregnancy (error)

**Was:** Category B; generally considered safe

**Now:** No established drug-associated risk of major birth defects/miscarriage (US label §8.1); PPROM: prophylactic amox/clav associated with ↑ neonatal NEC (1.9% vs 0.5%; US §8.1, UK SmPC §4.6). UK SmPC: avoid in pregnancy unless considered essential. 未證實致畸風險；PPROM時避免（NEC風險）

**Why:** The FDA retired letter categories, and the ground rules forbid writing 'Category B' as current. 'Generally considered safe' leaves out the NEC/PPROM warning that both labels carry and the SmPC's 'avoid unless essential'.

**Sources:** US FDA label §8.1 Pregnancy, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC §4.6, https://www.medicines.org.uk/emc/product/7211/smpc

### B2 · Renal dose, HD, CRRT (error)

**Was:** CrCl 10-30: PO 250-500mg q12h; IV 600-1200mg q12h (avoid 875mg tab and XR) / CrCl <10: PO 250-500mg q24h; IV 600-1200mg q24h / HD: PO 250-500mg q24h; IV 600-1200mg q24h + supplemental dose during & after dialysis / CRRT: 600-1200mg IV q8-12h

**Now:** CrCl >30: No adjustment<br><br>CrCl 10-30: <br>PO 250-500mg q12h (avoid 875mg tab and XR); <br>IV 1200mg ×1, then 600mg (500/100) q12h<br><br>CrCl <10: <br>PO 250-500mg q24h; <br>IV 1200mg ×1, then 600mg q24h<br><br>HD: <br>PO 250-500mg q24h + extra dose during & at end of HD (US label); <br>IV 1200mg ×1, then 600mg q24h + 600mg at end of HD (UK SmPC)<br>CRRT: no label data; 600-1200mg IV q8-12h is a non-label expert range (unsourced). Single ICU case (normal native renal function) had low fT>MIC on 1.2g q8h during RRT (PMID 31940615); consider TDM if available

**Why:** UK SmPC §4.2, the label for the stocked 1000/200 vial, gives: CrCl 10–30, 1000/200 mg once then 500/100 mg twice daily; CrCl <10, 1000/200 mg once then 500/100 mg q24h; HD, 1000/200 mg once then 500/100 mg q24h plus 500/100 mg at the end of dialysis. The current 'IV 600-1200 mg q12h/q24h' allows a 1.2 g maintenance dose, which doubles the labelled amoxicillin exposure, and it leaves out the loading dose. The IV HD line also borrows the 'during & after dialysis' wording from the US oral label. No label covers CRRT. The existing CRRT range has no source, so I flag it rather than delete it. The only PK data are Lonsdale 2019 (PMID 31940615, verified with esummary/efetch): on RRT, 1.2 g q8h gave fT>MIC <40%, and the authors suggest 2.2 g q6–8h with early TDM.

**Sources:** UK SmPC §4.2 Renal impairment, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §2.6 Table 4 and §8.6, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; Lonsdale DO et al. Chemotherapy 2019;64:173-176, PMID 31940615, https://pubmed.ncbi.nlm.nih.gov/31940615/

### B3 · Adult dose (unsupported)

**Was:** PO: 500/125mg q8-12h; 875/125mg q12h<br>IV: 1200mg q8h (q12h for less severe infection)<br><br>Max amoxicillin: 3-4g/day

**Now:** PO: 500/125mg q12h (mild-mod) or q8h (severe); 875/125mg q12h (severe); take at start of meal<br>IV: 1200mg (1000/200) q8h; IV push 3-4 min or infusion 30-40 min; NOT for IM<br>Surgical prophylaxis: 1200mg IV at induction; procedure >1h: up to 3 doses of 1200mg in 24h<br><br>Max with 1.2g vial: amoxicillin 3g + clavulanate 600mg/day (if more amoxicillin needed → different IV formulation, e.g. 2000/200 [not stocked]; do not shorten interval) (UK SmPC 4.2)<br>Review if >14 days

**Why:** The SmPC gives only 1000/200 mg q8h for adults and children ≥40 kg. 'q12h for less severe infection' is not in the current SmPC. Max 3–4 g/day mixes the oral XR maximum with IV. The IV vial is designed for at most 3000 mg amoxicillin and 600 mg clavulanate a day, and the SmPC says to switch formulation rather than give more vials. The column also lacks the surgical-prophylaxis dose, the administration route/rate and the 14-day review. The PO line is correct: 500/125 q12h for mild-moderate or q8h for severe, and 875/125 q12h (US §2.2 Table 1).

**Sources:** UK SmPC §4.2 Posology/Method of administration, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §2.2 Table 1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B4 · Pediatric dose (error)

**Was:** ... 常見 **IV dose: 100-120 mg/kg/day q8h** ... Limit clavulanate <10 mg/kg/day. Max amoxicillin: 2-3g/day (up to 4g high-dose). q12h dosing = less diarrhea.

**Now:** \<3 months: 30 mg/kg/day PO q12h<br>≥3 months: 25-45 mg/kg/day PO q12h; 20-40 mg/kg/day PO q8h<br>High-dose (ES-600 suspension only, 3 mo–12 y, recurrent/persistent AOM): 90 mg/kg/day PO q12h ×10 days<br><br>常見 **IV dose (\<40 kg): ≥3 months 25/5 mg/kg (=30 mg/kg of 1.2 g vial) q8h; \<3 months or \<4 kg: 25/5 mg/kg q12h, infusion only; ≥40 kg: adult dose<br>**IV renal (\<40 kg): CrCl 10-30 25/5 mg/kg q12h; CrCl \<10 q24h; HD q24h + 12.5/2.5 mg/kg at end of HD<br><br>Limit clavulanate \<10 mg/kg/day (PO; not label-stated). <br>Max amoxicillin: 2-3g/day (up to 4g high-dose) [unsourced; labels: ≥40 kg → adult dose]. q12h dosing = less diarrhea.

**Why:** The oral lines match the AUGMENTIN label (§2.2: <12 weeks, 30 mg/kg/day q12h; ≥12 weeks, 25–45 mg/kg/day q12h or 20–40 mg/kg/day q8h) and the ES-600 label (90 mg/kg/day q12h for 10 days). The IV line '100–120 mg/kg/day q8h' is not in the SmPC. With the 5:1 vial it would give about 20–24 mg/kg/day of clavulanate. The SmPC regimen is 25/5 mg/kg q8h (75 mg/kg/day amoxicillin, 15 mg/kg/day clavulanate), or q12h by infusion only for <3 months or <4 kg. Paediatric renal dosing is missing. 'Clavulanate <10 mg/kg/day' conflicts with the labelled IV dose of 15 mg/kg/day, so it should be marked as oral-only. The 2–3 g/day maximum has no source; flag it only.

**Sources:** UK SmPC §4.2 Paediatric population and Renal impairment, https://www.medicines.org.uk/emc/product/7211/smpc; AUGMENTIN US label §2.2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=174cc098-fe49-4f1a-87e2-601c7573f0db; AUGMENTIN ES-600 US label §2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=59979859-8c9b-4173-a5e3-2e6312fd9d79

### B5 · Hepatic dose (missing)

**Was:** No adjustment required

**Now:** No dose adjustment; use with caution and monitor LFT at regular intervals. 禁忌：曾因amox/clav導致膽汁滯留性黃疸/肝功能異常

**Why:** SmPC §4.2: 'Dose with caution and monitor hepatic function at regular intervals'. SmPC §4.3 and US §4.2 make a history of amox/clav-associated jaundice or hepatic dysfunction a contraindication. The column leaves out both the monitoring and the contraindication.

**Sources:** UK SmPC §4.2, §4.3, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §4.2, §8.7, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B6 · Indications (missing)

**Was:** SSTI, Pneumonia, CAP, UTI, IAI, Surgical prophylaxis

**Now:** SSTI, Pneumonia, CAP, UTI, IAI, Surgical prophylaxis, Pelvic, Osteoarthritis

**Why:** SmPC §4.1 lists 'Female genital infections' (→ Pelvic) and 'Bone and joint infections, in particular osteomyelitis'. The owner already uses the Osteoarthritis tag for bone/joint infections on the imipenem, ceftazidime and teicoplanin pages. Both options exist in the schema.

**Sources:** UK SmPC §4.1, https://www.medicines.org.uk/emc/product/7211/smpc

### B7 · Side Effects (missing)

**Was:** GI, LFT↑

**Now:** GI, LFT↑, SJS/TEN, DRESS, thrombophlebitis, CNS, coagulopathy, leukopenia, thrombocytopenia, AKI

**Why:** Missing items, with their label sources: SCAR including SJS/TEN and DRESS (US §5.2; SmPC §4.8); injection-site thrombophlebitis, rare, relevant to the IV product (SmPC §4.8); convulsions with renal impairment or high doses (SmPC §4.4, §4.8); prolonged PT/bleeding time (SmPC §4.8; US §6.2); reversible leucopenia and thrombocytopenia, rare (SmPC §4.8); crystalluria including acute renal injury, mainly with parenteral therapy (SmPC §4.4, §4.8). All proposed options exist in the schema.

**Sources:** UK SmPC §4.4, §4.8, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §5.2, §6.2, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B8 · Coverage (missing)

**Was:** Streptococcus, MSSA, Enterococcus, E.coli, Proteus, Klebsiella, Haemophilus

**Now:** Streptococcus, MSSA, E. faecalis, E.coli, Proteus, Klebsiella, Haemophilus, Bacteroides, Anaerobes

**Why:** SmPC §5.1 lists Bacteroides fragilis, Fusobacterium nucleatum and Prevotella as commonly susceptible, and US §12.4 lists Bacteroides, Fusobacterium and Peptostreptococcus. Anaerobic cover is a defining feature of this drug and is missing from the tags. SmPC §5.1 lists E. faecalis as susceptible but E. faecium only as 'natural intermediate', so the narrower 'E. faecalis' tag is more accurate than 'Enterococcus'. Optional: Neisseria (N. gonorrhoeae is commonly susceptible except strains with non-β-lactamase resistance, SmPC §5.1).

**Sources:** UK SmPC §5.1, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §12.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B9 · Drug Interactions (missing)

**Was:** Warfarin: ↑ INR, ↑ bleeding risk → monitor INR closely<br>Methotrexate: ↓ renal clearance → ↑ MTX toxicity<br>Allopurinol: ↑ risk of rash

**Now:** Warfarin: ↑ INR, ↑ bleeding risk → monitor INR closely<br>Methotrexate: ↓ renal clearance → ↑ MTX toxicity<br>Allopurinol: ↑ risk of rash<br>Probenecid: ↑/prolonged amoxicillin levels → not recommended<br>Mycophenolate: ~50% ↓ MPA trough → close clinical monitoring (dose change usually not needed)<br>Lab: false-positive urine glucose (non-enzymatic), direct Coombs, Platelia Aspergillus EIA

**Why:** The three existing lines are correct (SmPC §4.4/§4.5; US §7.2, §7.3). Missing interactions: probenecid (SmPC §4.5; US §7.1) and mycophenolate (SmPC §4.5). The lab interferences are in US §7.4 and SmPC §4.4. The false-positive Aspergillus galactomannan EIA matters in haematology/ICU patients.

**Sources:** UK SmPC §4.4, §4.5, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §7, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B10 · Notes (unsupported)

**Was:** Hepatotoxicity attributed to clavulanate (not amoxicillin)

**Now:** Hepatic events (hepatitis/cholestatic jaundice) mainly in males, elderly, prolonged therapy; may appear up to several weeks after stopping. 肝毒性可於停藥後數週才出現<br>(Often attributed mainly to clavulanate component — not stated in labels, unsourced)<br>Review if >14 days

**Why:** Neither label attributes hepatotoxicity to clavulanate alone. SmPC footnote 6 notes the events also occur with other penicillins and cephalosporins. The label-backed version gives the risk factors and the delayed onset instead.

**Sources:** UK SmPC §4.4, §4.8 footnote 6, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §5.4, §6.2 Liver, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B11 · Breastfeeding (minor)

**Was:** Compatible; low levels in breast milk (\~0.25–0.5% of infant dose); rare reports of diarrhea/thrush in infant

**Now:** Acceptable (LactMed); low milk levels (\~0.25–0.5% of infant dose); monitor infant for restlessness, diarrhea, rash (LactMed) and thrush (UK SmPC 4.6)

**Why:** The 0.25–0.5% figure matches LactMed. LactMed's monitoring advice is restlessness, diarrhoea and rash, and one study found infant adverse effects in 22.3% (vs 7.5% with amoxicillin alone), so 'rare' understates it. LactMed calls them 'uncommon'.

**Sources:** LactMed NBK500776 (rev. 2025-12-15) Summary and Effects in Breastfed Infants, https://www.ncbi.nlm.nih.gov/books/NBK500776/; UK SmPC §4.6, https://www.medicines.org.uk/emc/product/7211/smpc

### B12 · Mechanism (minor)

**Was:** Clavulanate: irreversible β-lactamase inhibitor (class II-V) → protects amoxicillin from enzymatic degradation.

**Now:** Clavulanate: β-lactamase inhibitor; inactivates some β-lactamases (mainly Ambler class A, e.g. TEM/SHV — not label-stated); does NOT inhibit class B (MBL), C (AmpC) or D (OXA) → protects amoxicillin from enzymatic degradation.

**Why:** 'Class II-V' is the old Richmond-Sykes scheme and could be read as Ambler classes, which would be wrong. SmPC §5.1 says resistance comes from β-lactamases not inhibited by clavulanate, 'including class B, C and D'.

**Sources:** UK SmPC §5.1 Mechanisms of resistance, https://www.medicines.org.uk/emc/product/7211/smpc

### B13 · Page body (error)

**Was:** Three <details> toggles: 'Does amoxicillin/clavulanate have drug drug interaction?', 'Amoxicillin/clavulanate recommended dosage as empirical abx after CABG', 'AmoClav pediatric' (with medscape/mayoclinic/ssmhealth citation links), plus 5 empty <details> blocks

**Now:** REMOVE

**Why:** This is pasted AI-chat text. Two toggles use chat phrasing and the paediatric one has Perplexity-style '[reference.medscape+2]' citations. It also has errors: 'Renal function (clavulanate can cause cholestatic jaundice)'; loop diuretic/digoxin/potassium interactions that no label mentions; '≥40 kg clavulanate max 250 mg/d'; and 'Dose should be adjusted for … hepatic impairment', which contradicts SmPC §4.2. The ground rules say to remove pasted AI-chat text. The empty toggles are clutter.

**Sources:** UK SmPC §4.2, §4.5, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §7, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B14 · Page body (error)

**Was:** Adult Dose › IV: 'Less severe: 1.2g IV q12h' and 'Severe infections: 1.2g IV q6h or 2.2g IV q8h'

**Now:** Standard: 1.2g (1000/200 mg) IV q8h (UK SmPC; max 3 g amoxicillin + 600 mg clavulanate/day). If a higher amoxicillin dose is needed, use a different IV formulation (e.g. 2000/200 mg, not stocked) rather than giving 1.2 g q6h. Not for IM use.

**Why:** The current SmPC gives only q8h. 1.2 g q6h means 800 mg/day of clavulanate, and SmPC §4.2 explicitly says to switch formulation 'to avoid administration of unnecessarily high daily doses of clavulanic acid'. 2.2 g needs a 2000/200 vial, which the hospital does not stock. The q12h option has no label source.

**Sources:** UK SmPC §4.2, https://www.medicines.org.uk/emc/product/7211/smpc

### B15 · Page body (error)

**Was:** Pediatric Dose › IV dosing: '100 mg/kg/day IV divided q8h (max 3g amoxicillin/day for standard, 6g/day severe)'

**Now:** IV dosing (UK SmPC): ≥3 months and <40 kg: 25/5 mg/kg q8h; <3 months or <4 kg: 25/5 mg/kg q12h (infusion only). Renal: CrCl 10–30 25/5 mg/kg q12h; CrCl <10 q24h; HD q24h + 12.5/2.5 mg/kg at end of dialysis.

**Why:** Neither the dose nor the 6 g/day maximum is in the label for the stocked vial. The SmPC gives 25/5 mg/kg q8h. The body also has no paediatric renal dosing.

**Sources:** UK SmPC §4.2 Paediatric population, Renal impairment, https://www.medicines.org.uk/emc/product/7211/smpc

### B16 · Page body (missing)

**Was:** Renal › CrCl 10-30: 'IV: 1.2g q12h → then 600mg q12h'; Hemodialysis: PO only, no IV line; 'moderately dialyzable (20-50%)'

**Now:** CrCl 10–30: IV 1.2 g once, then 600 mg q12h. CrCl <10: IV 1.2 g once, then 600 mg q24h. Hemodialysis IV (UK SmPC): 1.2 g once, then 600 mg q24h + 600 mg at end of dialysis. Both amoxicillin and clavulanate are removed by haemodialysis (US §8.6).

**Why:** '1.2g q12h → then' reads as if 1.2 g q12h were repeated, but the SmPC gives a single 1.2 g loading dose. The HD section has no IV regimen even though the stocked product is IV. The '20–50%' dialysability figure has no source; the label says only that both drugs are removed by HD. A 1984 case study (PMID 6393464) found extraction ratios of 0.44 for amoxicillin and 0.74 for clavulanate.

**Sources:** UK SmPC §4.2, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §8.6, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; Slaughter RL et al. Ther Drug Monit 1984;6:424-7, PMID 6393464, https://pubmed.ncbi.nlm.nih.gov/6393464/

### B17 · Page body (unsupported)

**Was:** Renal › Peritoneal Dialysis '250-500mg q24h' and CRRT 'CVVH: 500mg q8-12h OR 1.2g IV q12h; CVVHD/CVVHDF: 500mg q8h OR 1.2g IV q8-12h'

**Now:** Keep the values but label them: 'No label recommendation for PD/CRRT (expert-opinion values, unsourced). CRRT PK data very limited: single ICU case on RRT (normal native renal function) had fT>MIC <40% on 1.2 g q8h (Lonsdale 2019, PMID 31940615); consider TDM if available.'

**Why:** Neither label covers PD or CRRT. The values may be reasonable, but they come from no cited source, so I flag rather than delete them. I verified both PMIDs with E-utilities.

**Sources:** Carlier M et al. J Antimicrob Chemother 2013;68:2600-8, PMID 23800901, https://pubmed.ncbi.nlm.nih.gov/23800901/; Lonsdale DO et al. Chemotherapy 2019;64:173-6, PMID 31940615, https://pubmed.ncbi.nlm.nih.gov/31940615/

### B18 · Page body (missing)

**Was:** Coverage › NO coverage list: MRSA, Pseudomonas, ESBL, Stenotrophomonas, Acinetobacter, E. faecium, atypicals

**Now:** Add to NO coverage: Enterobacter spp., Serratia spp., Citrobacter freundii, Morganella morganii, Providencia spp. (inherently resistant, UK SmPC 5.1; note US tablet label §1.7 still lists Enterobacter for UTI). Mark E. faecium as 'intermediate' rather than none. Add: S. pneumoniae penicillin-resistant — this presentation may not be suitable (SmPC 4.4).

**Why:** SmPC §5.1 lists these AmpC producers as inherently resistant, which matters for empiric Gram-negative choices. The body's 'S. pneumoniae penicillin-susceptible and intermediate' should carry the SmPC §4.4 caveat about PRSP.

**Sources:** UK SmPC §4.4, §5.1, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §1.7, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B19 · Page body (unsupported)

**Was:** Coverage: Listeria monocytogenes, Salmonella spp., Shigella spp., Clostridium spp., Porphyromonas spp.; 'Bacteroides fragilis (~89% susceptible)'

**Now:** Flag as not label-supported (keep only with a guideline/microbiology citation); keep B. fragilis without the unsourced percentage

**Why:** None of these organisms appears in SmPC §5.1 or US §12.4, and the 89% figure has no source.

**Sources:** UK SmPC §5.1, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §12.4, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B20 · Page body (missing)

**Was:** Indications list (no bone/joint, no female genital, no AECB; includes diabetic foot, aspiration pneumonia, chronic GAS carriers)

**Now:** Add: Severe ENT infections (mastoiditis, peritonsillar infections, epiglottitis, sinusitis with severe systemic signs); Bone and joint infections/osteomyelitis; Female genital infections; Acute exacerbation of chronic bronchitis; Cystitis/pyelonephritis (UK SmPC 4.1). Mark diabetic foot, aspiration pneumonia, chronic GAS carriers as guideline/off-label (not in FDA or UK label).

**Why:** An indication counts as approved if either label lists it. Three SmPC indications are missing, and three listed items are in neither label.

**Sources:** UK SmPC §4.1, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B21 · Page body (missing)

**Was:** Side Effects: no injection-site thrombophlebitis, no Kounis syndrome

**Now:** Add under Rare/serious: Thrombophlebitis at injection site (IV; rare); Kounis syndrome (allergic acute coronary syndrome; frequency not known, SmPC 4.4/4.8); acute pancreatitis (not known); aseptic meningitis (not known; also US 6.2)

**Why:** SmPC §4.8 lists these: thrombophlebitis is rare, the others are 'not known'. Thrombophlebitis matters for the IV product. Kounis syndrome is a recent SmPC §4.4 warning.

**Sources:** UK SmPC §4.4, §4.8, https://www.medicines.org.uk/emc/product/7211/smpc

### B22 · Page body (unsupported)

**Was:** Drug Interactions: Oral contraceptives (backup contraception); Tetracyclines/macrolides antagonism; Live vaccines (typhoid, BCG); 'May interfere with urinary protein tests'; Mycophenolate management 'consider alternative antibiotic'

**Now:** Flag OC, tetracycline/macrolide, vaccine and urinary-protein lines as not in current labels. Change mycophenolate management to: 'Dose change usually not needed without graft dysfunction; close clinical monitoring during and shortly after (UK SmPC 4.5)'. Add lab line: false-positive Platelia Aspergillus EIA (SmPC 4.4).

**Why:** Neither current label lists these interactions. SmPC §4.5 says a mycophenolate dose change 'should not normally be necessary', and it does not suggest switching antibiotics.

**Sources:** UK SmPC §4.4, §4.5, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §7, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B23 · Page body (minor)

**Was:** Notes: 'Stability: Reconstituted suspension must be refrigerated; discard after 10 days'; 'Cross-reactivity ~1-10% with cephalosporins'; 'Mononucleosis 70-100%'; 'E. coli resistance 30-50%'; 'CSF ~5%'

**Now:** Stability line: flag for owner (storage/stability out of scope per owner; not contradicted by a source) — do not edit content. Cross-reactivity: keep '~1-10%' flagged as unsourced and add: 'Contraindicated if history of severe immediate hypersensitivity (e.g. anaphylaxis) to any other β-lactam (UK SmPC 4.3) or serious hypersensitivity (anaphylaxis/SJS) to β-lactams (US 4.1)'. Flag unsourced percentages (mononucleosis 70-100%, E. coli resistance 30-50%, CSF ~5%); labels say 'high percentage' rash with mononucleosis (US 5.6) and amoxicillin 'does not adequately distribute into CSF' (SmPC 5.2).

**Why:** Storage details are outside scope under the owner's rules. The cross-reactivity percentage has no source, and SmPC §4.3 gives the actual contraindication.

**Sources:** UK SmPC §4.3, §4.4, §5.2, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §5.6, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B24 · Page body (unsupported)

**Was:** Pregnancy: '**FDA Category B** (prior classification system)'; 'Some studies suggest possible small increased risk of cleft lip/palate with first trimester use'

**Now:** Remove the letter-category bullet (or keep as 'Former FDA category B (retired)'); replace 'Generally considered safe' and 'controlled human data' bullets with: 'Epidemiologic/pharmacovigilance data have not established a risk of major birth defects or miscarriage (US 8.1); animal studies show no harm; limited human data do not indicate increased malformation risk (UK SmPC 4.6)'. PPROM bullet: add 'NEC 1.9% vs 0.5% placebo (US 8.1)'. Flag the cleft lip/palate bullet as unsourced. Add 'UK SmPC: avoid during pregnancy unless considered essential'.

**Why:** Under the ground rules, letter categories must not appear as current. The cleft-palate claim is in neither label. The SmPC §4.6 'avoid unless essential' is missing.

**Sources:** UK SmPC §4.6, https://www.medicines.org.uk/emc/product/7211/smpc; US FDA label §8.1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3

### B25 · Page body (unsupported)

**Was:** Breastfeeding: 'RID ~0.25-1%'; 'Milk:plasma ratio 0.013-0.043'; 'AAP and WHO consider compatible'

**Now:** Replace with: 'Infant receives ~0.25–0.5% of a typical infant amoxicillin dose; modelled amoxicillin RID mean 0.055% (max 0.328%) (LactMed)'. Flag milk:plasma ratio and AAP/WHO statements as unsourced.

**Why:** LactMed gives 0.25–0.5% and a modelled RID of 0.055% (max 0.328%). The 1% upper bound, the M:P ratio and the AAP/WHO attributions are not in the cited sources.

**Sources:** LactMed NBK500776 Drug Levels, https://www.ncbi.nlm.nih.gov/books/NBK500776/

### B26 · Page body (minor)

**Was:** *Sources: FDA Prescribing Information (2024), StatPearls/NCBI (August 2024), LactMed (December 2025), EMA SmPC, Sanford Guide, IDSA Guidelines, Johns Hopkins ABX Guide*

**Now:** *Sources: UK SmPC Co-amoxiclav 1000 mg/200 mg IV (eMC 7211, rev 23/10/2023) https://www.medicines.org.uk/emc/product/7211/smpc; US label amoxicillin/clavulanate tablets (DailyMed setid 80bef3fd…, v10, 2026) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; AUGMENTIN pediatric labels (setid 174cc098…, 59979859…); LactMed NBK500776 (rev 2025-12-15) https://www.ncbi.nlm.nih.gov/books/NBK500776/; Taiwan 仿單: not found*

**Why:** The current line names no product, version or URL. IV dosing should cite the SmPC for the stocked vial, not an 'EMA SmPC'.

**Sources:** https://www.medicines.org.uk/emc/product/7211/smpc; https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; https://www.ncbi.nlm.nih.gov/books/NBK500776/

### B27 · Page body (minor)

**Was:** Adult Dose › Oral: 'Severe infections: 875/125mg PO q12h OR 2000/125mg XR PO q12h'; Surgical prophylaxis '1.2-2.2g IV at induction; may repeat q8h for 24h if procedure >1 hour'

**Now:** Severe (US label): 875/125 mg q12h OR 500/125 mg q8h (XR 2000/125 only for its own labelled indications; not stocked). Surgical prophylaxis (UK SmPC): 1.2 g at induction (2.2 g requires 2000/200 formulation, not stocked); procedures >1 h: up to 3 doses of 1.2 g in 24 h.

**Why:** US Table 1 gives 875/125 q12h or 500/125 q8h for severe infection. SmPC §4.2 limits prophylaxis redosing to 'up to 3 doses of 1000 mg/200 mg in 24 hours'.

**Sources:** US FDA label §2.2 Table 1, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80bef3fd-4f6f-4190-8865-9ac46c8947a3; UK SmPC §4.2, https://www.medicines.org.uk/emc/product/7211/smpc

## Verified correct as written

- Category 'β-lactam/β-lactamase inhibitor' (UK SmPC 5.1, ATC J01CR02: combination of penicillins incl. beta-lactamase inhibitors).
- Mechanism, amoxicillin line: binds PBPs, inhibits cell wall synthesis, bactericidal (US 12.4; SmPC 5.1).
- Adult PO doses 500/125 and 875/125 mg q12h, and 500/125 q8h for severe infection (US label 2.2, Table 1).
- Adult IV 1200 mg (1000/200) q8h (UK SmPC 4.2).
- Renal: CrCl >30 needs no adjustment (SmPC 4.2; US 2.6 'mild to moderate'). PO 250–500 mg q12h for CrCl 10–30, q24h for <10 and for HD (US 2.6 Table 4). Avoid the 875 mg tablet when GFR <30 (US 2.6/8.6). XR is contraindicated when CrCl <30 and in HD (XR label).
- Pediatric PO: under 3 months 30 mg/kg/day q12h; 3 months or older 25–45 mg/kg/day q12h or 20–40 mg/kg/day q8h; q12h causes less diarrhoea; do not use the 250/125 tablet under 40 kg; formulations are not interchangeable (AUGMENTIN US label 2.2/2.3/2.6).
- Hepatic (body): contraindicated after prior amox/clav cholestatic jaundice; events can occur weeks after stopping; use with caution and monitor (SmPC 4.3/4.4; US 4.2/5.4).
- Monitor tags LFT, renal, CBC and PT/INR (SmPC 4.4: periodic renal, hepatic and haematopoietic assessment during prolonged therapy; PT monitoring with anticoagulants).
- Drug interactions in the column and body table: warfarin/INR, methotrexate, allopurinol rash, probenecid (SmPC 4.5; US 7.1–7.3). Lab interactions: false-positive urine glucose by non-enzymatic methods and false-positive Coombs test (SmPC 4.4; US 7.4).
- Coverage tags Streptococcus, MSSA, E. coli, Klebsiella, Proteus, Haemophilus are label-supported; the Gram-negative tags carry an 'acquired resistance may be a problem' caveat (SmPC 5.1; US 12.4).
- Body NO-coverage items: MRSA (SmPC: 'All methicillin-resistant staphylococci are resistant'), Pseudomonas, Acinetobacter, Stenotrophomonas, atypicals (Chlamydia, Mycoplasma, Legionella), and E. faecium as reduced/variable (SmPC 5.1).
- Indication tags SSTI, CAP, Pneumonia (LRTI), UTI, IAI and Surgical prophylaxis are supported by the UK SmPC 4.1 and/or US 1.x.
- Body: 'Do not exceed 14 days without clinical review' (SmPC 4.2); 'administer over 3-4 min or infusion over 30-40 min' (SmPC 4.2); 'Do NOT dilute in glucose-containing solutions' (SmPC 6.2); avoid in mononucleosis (SmPC 4.4; US 5.6); poor CSF penetration (SmPC 5.2 'does not adequately distribute into the cerebrospinal fluid').
- Body side effects: diarrhoea most common, nausea/vomiting, rash, candidiasis, transient AST/ALT rise, cholestatic hepatitis, CDAD, anaphylaxis, SJS/TEN, DRESS, AGEP, interstitial nephritis, haemolytic anaemia/thrombocytopenia/leukopenia, seizures, DIES, crystalluria (SmPC 4.4/4.8; US 5.x/6.2).
- Body pregnancy: PPROM/NEC caution (US 8.1; SmPC 4.6).
- Breastfeeding column: 'Compatible', with infant exposure about 0.25–0.5% of the infant dose (LactMed). Body: peak milk levels 4–5 h after the dose (LactMed, amoxicillin data); one infant with raised liver enzymes (LactMed ref 4).
- Body max clavulanate 375 mg/day oral (500/125 q8h) and 600 mg/day IV (SmPC 4.2).
- IDSA ABRS 2012 guideline exists as cited (PMID 22438350, checked by esummary).
- Category: β-lactam/β-lactamase inhibitor (SmPC §5.1, ATC J01CR02)
- Mechanism, amoxicillin part: PBP binding, inhibits cell-wall synthesis, bactericidal (SmPC §5.1; US §12.4)
- Monitor tags LFT, renal, CBC, PT/INR: all supported by SmPC §4.4 (periodic renal, hepatic and haematopoietic checks in prolonged therapy; PT monitoring with anticoagulants)
- Drug Interactions property: warfarin/INR, methotrexate and allopurinol rash all match SmPC §4.4/§4.5 and US §7.2–7.3
- Adult PO dose (500/125 q8–12h; 875/125 q12h) matches US §2.2 Table 1
- Renal PO dosing (250–500 mg q12h for GFR 10–30, q24h for <10 and HD; avoid 875 mg when GFR <30) matches US §2.6 Table 4 and §8.6
- Renal 'CrCl >30: no adjustment' matches SmPC §4.2
- Pediatric oral dosing (<3 months 30 mg/kg/day q12h; ≥3 months 25–45 mg/kg/day q12h or 20–40 mg/kg/day q8h; ES-600 90 mg/kg/day q12h) matches the AUGMENTIN labels (setid 174cc098 §2.2; setid 59979859 §2)
- Breastfeeding '~0.25–0.5% of infant dose' and 'compatible' match LactMed NBK500776
- Body: IV injection over 3–4 min or infusion over 30–40 min; do not exceed 14 days without review; max clavulanate 600 mg/day IV and 375 mg/day oral (SmPC §4.2; US Table 1)
- Body: do not dilute in glucose-containing solutions (SmPC §6.2)
- Body: hepatic contraindication, caution, and events up to several weeks after stopping (SmPC §4.3/§4.4; US §4.2/§6.2)
- Body: infant effect rates (restlessness 8.9%, diarrhoea 5.9%, rash 5.9%), one infant with raised liver enzymes, and peak milk level at 4–5 h (LactMed)
- Body: PPROM/NEC caution (US §8.1; SmPC §4.6)
- Body: formulations not interchangeable and 250/125 tablet not for <40 kg (US §2.4/§2.8)
- Body: lab interferences for urine glucose (US §7.4) and Coombs (SmPC §4.4)
- Body: DIES, SJS/TEN, DRESS, AGEP, interstitial nephritis, crystalluria, seizures, CDAD (US §5–6; SmPC §4.4/§4.8)
- Body NO-coverage items MRSA, Pseudomonas, Stenotrophomonas, Acinetobacter and atypicals (SmPC §5.1 inherently resistant)
- UK SmPC (eMC 7211) re-fetched live on 2026-10-05: q8h adult dose, renal table, paediatric dosing, pregnancy wording and 14-day review all match the sources JSON
- Sources JSON taiwan_insert_note already labels the 中化裕民 maker as UNVERIFIED and the licence number as a GUESS; no correction needed

## Apply log

- Adult dose column: PO per US label (start of meal), IV 1.2g q8h push 3-4 min or infusion 30-40 min, not for IM, q12h marked as not in the label (flagged), surgical prophylaxis up to 3 doses in 24h, max 3g amoxicillin + 600mg clavulanate per day with the 1.2g vial (2000/200 not stocked), review if >14 days
- Renal dose, HD, CRRT column: IV 1.2g x1 then 600mg q12h/q24h, HD dosing from both the US and UK labels, CRRT range flagged as non-label, Lonsdale PMID 31940615 cited, consider TDM
- Pediatric dose column: ES-600 high-dose qualifiers, UK SmPC IV dose for <40 kg (bold kept), IV renal dosing, clavulanate limit marked as not label-stated, max-amoxicillin line flagged as unsourced, 'up to the adult dose' added from the US label
- Pregnancy column: US 8.1 and UK SmPC 4.6 wording, PPROM NEC 1.9% vs 0.5%, Chinese note kept
- Side Effects multi-select: GI, LFT↑, SJS/TEN, DRESS, CNS, thrombophlebitis, hematologic, leukopenia, thrombocytopenia, coagulopathy, AKI (all existing options)
- Coverage multi-select: Streptococcus, MSSA, E. faecalis (replaces Enterococcus), E.coli, Proteus, Klebsiella, Haemophilus, Anaerobes, Bacteroides
- Indications multi-select: added Pelvic and Osteoarthritis
- Drug Interactions column: probenecid (not recommended) and mycophenolate (MPA trough down ~50%, close monitoring) added; lab line for urine glucose, Coombs and Platelia Aspergillus EIA
- Hepatic dose column: caution plus regular LFT, contraindication after prior amox/clav liver injury (English and Chinese)
- Breastfeeding column: acceptable per LactMed, 0.25-0.5%, monitor infant for restlessness, diarrhea, rash and thrush
- Notes column: clavulanate-attribution claim flagged as unsourced, hepatic-event risk factors and delayed onset (English and Chinese), mononucleosis, Platelia false positive, IV incompatibilities, review if >14 days
- Mechanism column: clavulanate inactivates some β-lactamases, does not inhibit Ambler class B/C/D; class A note marked as not label-stated
- Body Indications: DFI, aspiration and GAS carrier marked off-label; added UK SmPC 4.1 indications (severe ENT, AECB, cystitis/pyelonephritis, bone/joint/osteomyelitis, female genital); IDSA sinusitis cited with PMID 22438350
- Body Coverage: Listeria, Salmonella, Shigella, Porphyromonas, Clostridium and ~89% flagged; added Pasteurella, Eikenella, Capnocytophaga; E. faecium moved to intermediate; added note that this presentation may not suit penicillin-resistant S. pneumoniae; added Enterobacter, Serratia, C. freundii, Morganella, Providencia to NO coverage
- Body Adult Dose: oral severe dosing per US label (XR not stocked); IV 1.2g q12h flagged; no 1.2g q6h, use the 2000/200 formulation (not stocked); UK surgical prophylaxis; not for IM
- Body Renal: IV 1.2g once then 600mg q12h/q24h; HD from both the US and UK labels; removal by dialysis cited (US 8.6, PMID 6393464) with '20-50%' flagged; PD and CRRT labelled as no-label expert-opinion values, with Carlier PMID 23800901 and Lonsdale PMID 31940615 and TDM note
- Body Pediatric IV dosing replaced with UK SmPC dosing for <40 kg, including renal and HD
- Body Side Effects: diarrhea figures from US 6.1; hepatic events 'during or several weeks after'; added thrombophlebitis, Kounis, acute pancreatitis, aseptic meningitis, linear IgA dermatosis, serum sickness-like reaction
- Body Drug Interactions: mycophenolate row per SmPC 4.5; OC, tetracycline/macrolide, vaccine and urinary-protein lines flagged; Platelia Aspergillus EIA lab line added
- Body Notes: cross-reactivity '~1-10%' flagged and β-lactam contraindication added (UK 4.3, US 4.1); mononucleosis 70-100%, CSF ~5% and E. coli 30-50% flagged with label wording; Stability line left unedited
- Body Pregnancy: letter category changed to 'Former FDA category B (retired)'; bullets on 'generally safe' and 'controlled human data' replaced with label wording; cleft lip/palate flagged; PPROM NEC 1.9% vs 0.5%; UK 'avoid unless essential' added
- Body Breastfeeding: RID line replaced with LactMed figures; milk:plasma and AAP/WHO lines flagged
- Body Sources line replaced with the official-source list (Taiwan 仿單: not found)
- Removed the three pasted AI-chat toggle blocks (DDI chat, post-CABG dosing chat, 'AmoClav pediatric' chat)
- Appended a References section listing UK SmPC, the US tablet, pediatric, ES-600, XR and suspension labels, LactMed, IDSA 2012 (PMID 22438350), Carlier 2013 (PMID 23800901), Lonsdale 2019 (PMID 31940615), Slaughter 1984 (PMID 6393464), Taiwan insert not found; all PMIDs checked via NCBI esummary
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
