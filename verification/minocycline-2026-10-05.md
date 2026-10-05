# Verification: Menocik (minocycline)

- **Notion entry:** [Menocik (minocycline)](https://app.notion.com/20dc496dfff1802f8805f5746f32ae77)
- **Hospital codes:** MEN04 (Menocik inj 100 mg), MER01 (Mero cap 100 mg)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/minocycline.json` (plus any `sources/minocycline-taiwan-insert-*.txt`)

## Product and sources

Menocik Lyophilized Injection 100 mg "Biogend" (博晟美諾幸凍晶注射劑100毫克), 衛部藥製字第060447號, hospital code MEN04, NHI AC60447255, ATC J01AA08, IV. The hospital also stocks the oral form, Mero Capsule 100 mg (敏羅黴素膠囊), 衛署藥製字第036940號, MER01, NHI AC36940100. Comparison labels: US FDA MINOCIN (minocycline) for Injection, Melinta (DailyMed setid e415c323-8219-464b-9e3e-72c5a796cdaa, published Sep 18 2025); US minocycline HCl capsules, Actavis (setid a5fc4d50-50b2-46e0-b722-4c6b2ec47d06, v24, Aug 11 2026); UK SmPC Acnamino MR 100 mg (rev 11/01/2026, acne-only MR product); LactMed NBK501031 (rev 2025-06-15). Guideline: IDSA AMR Guidance v5.0 (2026, published July 30 2026). Key formulation point: the Menocik insert lists its excipients as sodium hydroxide, hydrochloric acid and nitrogen only, with reconstituted pH 2.0-2.8. It contains NO magnesium sulfate, unlike US Minocin IV, which has 269 mg MgSO4·7H2O per vial and pH 4.5-5.0. Notion page last edited 2026-01-21.

## Agreed fixes applied in Notion (52)

### A1 · Renal dose, HD, CRRT (error)

**Was:** No adjustment

**Now:** CrCl ≥80: no adjustment<br>CrCl <80: PK not fully characterized; total daily dose ≤200 mg/24h, monitor BUN/Cr (US FDA label)<br>Menocik 仿單: 腎功能不全者總劑量應低於一般劑量或延長給藥間隔 (no numeric CrCl cut-off); prolonged therapy → keep serum level ≤15 mcg/mL, frequent LFT<br>UK SmPC: contraindicated in (complete) renal failure<br>HD/PD: not removed in significant quantities → no supplemental dose<br>CRRT: no label data

**Why:** The column contradicts every label. US FDA IV label, DOSAGE AND ADMINISTRATION, Adults: "The pharmacokinetics of minocycline in patients with renal impairment (CLCR <80 mL/min) have not been fully characterized... The total daily dosage should not exceed 200 mg in 24 hours in patients with renal impairment... BUN and creatinine should be monitored." WARNINGS, Anti-anabolic Action: "If renal impairment exists, even usual oral or parenteral doses may lead to systemic accumulation of the drug and possible liver toxicity." Menocik Taiwan insert §3.1: "腎功能不全病人：總劑量應比一般推薦劑量低或延長用藥間隔". §5.1 adds "患者之本劑血中濃度不可超逾15微克/毫升". UK SmPC 4.2: "must not be given to persons in renal failure." FDA OVERDOSAGE: "not removed in significant quantities by hemodialysis or peritoneal dialysis." The ground rules give the hospital's own product label precedence, but the Menocik insert has no number, so the FDA value is used and the insert's wording is quoted alongside it.

**Sources:** US FDA MINOCIN IV label, DOSAGE AND ADMINISTRATION (Adults), WARNINGS (Anti-anabolic Action), OVERDOSAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §3.1 and §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; UK SmPC Acnamino MR 4.2/4.3/4.4: https://www.medicines.org.uk/emc/product/654/smpc

### A2 · Notes (error)

**Was:** IDSA-recommended for CRAB/S. maltophilia; higher autoimmune risk than other tetracyclines; excellent CNS penetration; safe in renal failure

**Now:** IDSA 2026: alternative agent for CRAB / S. maltophilia, only in combination with ≥1 other active agent (CRAB: when sulbactam-durlobactam is unavailable or the isolate is resistant); higher autoimmune risk (lupus-like syndrome 8.5-fold, PMID 10074958); renal impairment: ≤200 mg/day and monitor BUN/Cr (not 'safe in renal failure')

**Why:** (1) "safe in renal failure" is contradicted by the FDA label (renal impairment → ≤200 mg/24h, accumulation, azotemia, possible liver toxicity) and by UK SmPC 4.2/4.3 (contraindicated in complete renal failure). (2) "IDSA-recommended" overstates the guidance. IDSA AMR Guidance 2026 Q5.4: "Minocycline in combination with at least one other agent... is an alternative treatment for invasive CRAB infections", and "only in settings of resistance to sulbactam-durlobactam or an interim therapy". Q6.4: "Minocycline, as a component of combination therapy, is an alternative treatment option for invasive S. maltophilia infections." (3) "excellent CNS penetration" has no label or guideline source. Flag it as unsourced, or drop it if no source is found. (4) The autoimmune comparison is supported by Sturkenboom 1999 (PMID 10074958, verified via esummary): "Current single use of minocycline was associated with an 8.5-fold... increased risk of developing lupuslike syndrome."

**Sources:** US FDA MINOCIN IV label, WARNINGS (Anti-anabolic Action), DOSAGE AND ADMINISTRATION: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC Acnamino MR 4.3: https://www.medicines.org.uk/emc/product/654/smpc; IDSA 2026 AMR Guidance (v5.0) Q5.4 and Q6.4: https://www.idsociety.org/practice-guideline/amr-guidance/; Sturkenboom MC et al. Arch Intern Med 1999;159:493-7, PMID 10074958: https://pubmed.ncbi.nlm.nih.gov/10074958/

### A3 · Page body (error)

**Was:** Notes #7: "IV formulation: Contains magnesium sulfate; do not dilute with calcium-containing solutions"

**Now:** 7. **IV formulation:** Menocik (院內品項) 不含 magnesium sulfate (excipients: NaOH, HCl, N2). Dilute in NS, D5W, D5NS or LR to 500–1000 mL; do NOT dilute with calcium-containing solutions; avoid rapid infusion. (US Minocin IV contains MgSO4 2.2 mEq Mg/vial → there, monitor serum Mg in renal impairment / heart block; this does not apply to Menocik.)

**Why:** The magnesium statement is true only for US Minocin IV. The FDA label DESCRIPTION says: "Each vial contains... 269 mg magnesium sulfate heptahydrate (2.2 mEq of magnesium)." The hospital stocks Menocik. Menocik Taiwan insert §1.2 says: "賦形劑包含有Sodium Hydroxide、Hydrochloric Acid及Nitrogen Gas". Its pH is 2.0–2.8 (§1.1), versus 4.5–5.0 for US Minocin. Applying the Mg warnings and Mg interactions to Menocik is wrong. The dilution volume comes from Menocik insert §3.1: "稀釋成500至1000ml使用，但不得與含鈣之溶液稀釋使用". The US label allows 100–1000 mL. This is administration information, not storage, so it does not conflict with the owner's no-storage rule.

**Sources:** Menocik Taiwan insert §1.1, §1.2, §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; US FDA MINOCIN IV label, DESCRIPTION and PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa

### A4 · Pregnancy (error)

**Was:** Contraindicated (Category D) - tooth/bone effects, fetal harm

**Now:** Avoid / contraindicated (UK SmPC 4.3; 敏羅仿單禁忌: 孕婦應避免使用) - can cause fetal harm: permanent tooth discoloration/enamel hypoplasia (last half of pregnancy), skeletal growth retardation; rare limb-reduction reports (US FDA label)

**Why:** FDA letter categories are retired, so "Category D" must not appear as current. The substance is supported. US FDA IV label WARNINGS, Tooth Development: "can cause fetal harm when administered to a pregnant woman... last half of pregnancy... permanent discoloration of the teeth." PRECAUTIONS, Teratogenic Effects: "Rare spontaneous reports of congenital anomalies including limb reduction." UK SmPC 4.6: "Minocycline is contraindicated during pregnancy." Mero Taiwan insert §4: "孕婦、嬰兒和孩童應避免使用本品". Note that the US label itself does not list pregnancy as a contraindication; it says "should not be used during tooth development unless other drugs are not likely to be effective".

**Sources:** US FDA MINOCIN IV label, WARNINGS Tooth/Skeletal Development, PRECAUTIONS Teratogenic Effects: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC Acnamino MR 4.3, 4.6: https://www.medicines.org.uk/emc/product/654/smpc; Mero Taiwan insert §4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC036940%E8%99%9F

### A5 · Page body (error)

**Was:** Pregnancy section: "**Category D** (FDA legacy) / **Contraindicated**"; Summary table Pregnancy: "**Contraindicated** (Category D) - tooth/bone effects, fetal harm"

**Now:** Pregnancy section header: "**Avoid / Contraindicated** (UK SmPC 4.3; 敏羅仿單禁忌); US label: avoid during tooth development unless other drugs ineffective or contraindicated". Summary table: same text as the A4 column proposal. Keep the bullets (crosses placenta, tooth discoloration, bone growth, limb reduction, hepatotoxicity in pregnancy).

**Why:** The letter category was retired by FDA (PLLR), so it should not be shown as a current classification. The bullets are supported. They come from US FDA label WARNINGS and Teratogenic Effects. The hepatotoxicity bullet is supported by Menocik insert §5.1: "對於腎機能障礙，妊娠患者若靜脈注射四環素治療，每日劑量超過2公克將致肝機能衰竭".

**Sources:** US FDA MINOCIN IV label, WARNINGS/PRECAUTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/654/smpc

### A6 · Hepatic dose (missing)

**Was:** No adjustment

**Now:** No specific adjustment in label; use with caution in hepatic dysfunction and with other hepatotoxic drugs (hepatotoxicity incl. autoimmune hepatitis, fatal hepatic failure reported); t½ 11–16 h in hepatic impairment

**Why:** "No adjustment" is incomplete. US FDA IV label PRECAUTIONS, General: "Hepatotoxicity has been reported with minocycline; therefore, minocycline should be used with caution in patients with hepatic dysfunction and in conjunction with other hepatotoxic drugs." CLINICAL PHARMACOLOGY: "half-life... 11 to 16 hours in subjects with hepatic impairment (n=7)." UK SmPC 4.2: "should be used with caution in patients with hepatic dysfunction."

**Sources:** US FDA MINOCIN IV label, PRECAUTIONS General, CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.2/4.4: https://www.medicines.org.uk/emc/product/654/smpc

### A7 · Page body (error)

**Was:** Hepatic Dose section: "... Monitor LFTs. Contraindicated in severe hepatic impairment."

**Now:** Replace the last sentence with: "Not a labeled contraindication (US FDA: contraindicated only in tetracycline hypersensitivity); use with caution in hepatic dysfunction and avoid other hepatotoxic drugs."

**Why:** No source supports a contraindication in hepatic impairment. US FDA IV label CONTRAINDICATIONS: "contraindicated in persons who have shown hypersensitivity to any of the tetracyclines or to any of the components." Menocik insert §4 lists only tetracycline hypersensitivity. UK SmPC 4.3 lists hypersensitivity, pregnancy/lactation, children <12 and complete renal failure, but not hepatic impairment. The labels only say "use with caution".

**Sources:** US FDA MINOCIN IV label, CONTRAINDICATIONS and PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; UK SmPC 4.3: https://www.medicines.org.uk/emc/product/654/smpc

### A8 · Pediatric dose (minor)

**Was:** ≥8 yrs: 4 mg/kg load → 2 mg/kg q12h (max 200 mg/day)

**Now:** ≥8 yrs: 4 mg/kg load → 2 mg/kg q12h (IV over 60 min), not to exceed usual adult dose (200 mg load, then 100 mg q12h)<br><8 yrs: not recommended unless benefit outweighs risk (permanent tooth discoloration)

**Why:** The label wording is "not to exceed the usual adult dose", not "max 200 mg/day". A 200 mg/day cap would conflict with the 200 mg loading dose. US FDA IV label, For Pediatric Patients above 8 years of Age: "Initial dose of 4 mg/kg, then 2 mg/kg administered over 60 minutes every 12 hours, not to exceed the usual adult dose." Pediatric Use: "not recommended for use in children below 8 years of age unless the expected benefits of therapy outweigh the risks." Menocik insert §3.1 gives the same mg/kg regimen: "8歲以上之孩童：初劑量為4毫克／公斤，以後每隔12小時2毫克／公斤".

**Sources:** US FDA MINOCIN IV label, DOSAGE AND ADMINISTRATION (Pediatric) and PRECAUTIONS Pediatric Use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### A9 · Adult dose (missing)

**Was:** 200mg load + 100mg q12h<br>Stenotrophomonas infection: 200mg q12h<br>Acinetobacter infection, multidrug resistant: 200mg q12h

**Now:** 200mg load + 100mg q12h (IV over 60 min; max 400mg/24h)<br>Stenotrophomonas infection: 200mg q12h IV/PO, as part of combination therapy (IDSA 2026)<br>Acinetobacter infection, multidrug resistant (CRAB): 200mg q12h IV/PO + ≥1 other active agent (IDSA 2026)<br>(200 q12h = label max 400mg/24h; assumes normal renal function)

**Why:** The doses are correct but the label limits and the combination requirement are missing. US FDA IV label, Adults: "Initial dose of 200 mg, then 100 mg administered over 60 minutes every 12 hours and should not exceed 400 mg in 24 hours." Menocik insert §3.1: "每天劑量不得超過400毫克". IDSA 2026 Table 1 ("Assuming Normal Renal and Hepatic Function"): "Minocycline 200 mg IV/PO every 12 hours". Q5.4 (CRAB) and Q6.4 (S. maltophilia) require combination therapy. The 200 mg q12h regimen exceeds the 200 mg/24h renal cap, which is why the normal-renal-function note matters.

**Sources:** US FDA MINOCIN IV label, DOSAGE AND ADMINISTRATION (Adults): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; IDSA 2026 AMR Guidance Table 1: https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf; IDSA 2026 AMR Guidance Q5.4/Q6.4: https://www.idsociety.org/practice-guideline/amr-guidance/

### A10 · Coverage (unsupported)

**Was:** VRE, Burkholderia (within tags CRAB, MRSA, VRE, Stenotrophomonas, Burkholderia)

**Now:** REMOVE VRE (no label/guideline source; Menocik insert: enterococci often resistant, test required) unless the owner provides a source. Keep Burkholderia, citing Flamm 2019 SENTRY (PMID 31427295; in vitro only, ~88% susceptible at old CLSI ≤4 µg/mL; not covered by IDSA 2026). Keep CRAB (IDSA 2026, combination only; <50% susceptible at ≤1 µg/mL), MRSA (IDSA MRSA 2011 oral SSTI option; label lists S. aureus), Stenotrophomonas (IDSA 2026).

**Why:** Neither FDA microbiology list includes Enterococcus/VRE or Burkholderia. List of Microorganisms: Gram-positive is B. anthracis, L. monocytogenes, S. aureus, S. pneumoniae. The Menocik insert lists 腸球菌類 only as organisms where 培養及敏感試驗應予施行 because many strains are resistant, and says nothing about VRE. IDSA 2026 does not cover Burkholderia. MRSA is supported by the IDSA MRSA guideline (PMID 21208910, verified), which lists doxycycline or minocycline among oral SSTI options. CRAB is supported only as part of combination therapy, and IDSA 2026 Q5.4 notes "Applying the revised 2025 CLSI susceptibility breakpoint (≤1 µg/mL), minocycline demonstrates in vitro activity against fewer than 50% of CRAB isolates".

**Sources:** US FDA MINOCIN IV label, List of Microorganisms: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; IDSA 2026 AMR Guidance Q5.4/Q6.4: https://www.idsociety.org/practice-guideline/amr-guidance/; Liu C et al. IDSA MRSA guideline, Clin Infect Dis 2011;52:e18-55, PMID 21208910: https://pubmed.ncbi.nlm.nih.gov/21208910/

### A11 · Coverage (missing)

**Was:** CRAB, MRSA, VRE, Stenotrophomonas, Burkholderia

**Now:** Add (existing options only): Acinetobacter, MSSA, Streptococcus, Haemophilus, Neisseria, Listeria, Bacillus, Chlamydia, Mycoplasma, Mycobacteria; optionally E.coli and Klebsiella (label: only when susceptibility testing confirms)

**Why:** The tags miss most label-listed organisms. US FDA IV label, List of Microorganisms: "Gram-positive Bacteria Bacillus anthracis Listeria monocytogenes Staphylococcus aureus Streptococcus pneumoniae Gram-negative Bacteria ... Acinetobacter species ... Escherichia coli Haemophilus influenzae Klebsiella species Neisseria meningitidis ... Chlamydia trachomatis ... Mycobacterium marinum Mycoplasma pneumoniae". The INDICATIONS for E. coli, Acinetobacter and Klebsiella apply "when bacteriologic testing indicates appropriate susceptibility". Mycobacteria refers to M. marinum only, per the oral label.

**Sources:** US FDA MINOCIN IV label, List of Microorganisms and INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA minocycline capsule label, Microbiology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06

### A12 · Indications (minor)

**Was:** Pneumonia, SSTI, UTI

**Now:** Pneumonia, SSTI, UTI, Meningitis (N. meningitidis, alternative when penicillin contraindicated – IV label)

**Why:** The existing tags are supported. Respiratory tract infections are labeled for M. pneumoniae, H. influenzae and Klebsiella; UTI for Klebsiella; SSSI for S. aureus. The IV label also lists "When penicillin is contraindicated, minocycline is an alternative drug in the treatment of the following infections: Meningitis due to Neisseria meningitidis". Under the ground rules that makes it an approved indication. The owner may still choose not to tag it because it is an alternative-only indication.

**Sources:** US FDA MINOCIN IV label, INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa

### A13 · Side Effects (missing)

**Was:** GI, photosensitivity, autoimmune

**Now:** GI, photosensitivity, autoimmune, CNS, ototoxicity, DRESS, SJS/TEN, LFT↑, AKI, hematologic, thrombophlebitis

**Why:** The current tags are supported, but several label warnings and adverse reactions are missing. US FDA IV label WARNINGS: CNS ("light-headedness, dizziness or vertigo"), DRESS ("including fatal cases") and intracranial hypertension. ADVERSE REACTIONS: "Tinnitus and decreased hearing have been reported in patients on MINOCIN (minocycline for injection)"; "toxic epidermal necrolysis... Stevens-Johnson syndrome"; hepatic ("increases in liver enzymes, fatal hepatic failure"); "Acute renal failure" and interstitial nephritis; "hemolytic anemia, thrombocytopenia, leukopenia, neutropenia, pancytopenia". DOSAGE AND ADMINISTRATION: "If intravenous therapy is given over prolonged periods of time, thrombophlebitis may result" (the Menocik insert §3 says the same: "如長期使用靜脈注射，可能誘致血栓性靜脈炎").

**Sources:** US FDA MINOCIN IV label, WARNINGS, ADVERSE REACTIONS, DOSAGE AND ADMINISTRATION: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §3 注意: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### A14 · Monitor (missing)

**Was:** renal, LFT

**Now:** renal, LFT, CBC, PT/INR (if on anticoagulant)

**Why:** US FDA IV label, Laboratory Tests: "Periodic laboratory evaluation of organ systems, including hematopoietic, renal, and hepatic studies should be performed." Drug Interactions: "tetracyclines have been shown to depress plasma prothrombin activity, patients who are on anticoagulant therapy may require downward adjustment of their anticoagulant dosage." Menocik insert §5.5: "當長期治療時，包括造血系、腎臟及肝臟之定期檢驗必須施行". Do NOT add "electrolyte" for Mg. The Mg monitoring in the US label applies to Mg-containing Minocin, not Menocik (see A3).

**Sources:** US FDA MINOCIN IV label, Laboratory Tests and Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §5.5, §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### A15 · Drug Interactions (minor)

**Was:** Antacids/Ca/Fe/Mg (↓ absorption, separate 2-3h), warfarin (↑ INR), isotretinoin (contraindicated), oral contraceptives (↓ efficacy)

**Now:** PO: antacids/Al/Ca/Mg/Fe/Zn/Bi (↓ absorption, separate ≥3h); warfarin (↓ prothrombin activity → may need ↓ anticoagulant dose, monitor INR); isotretinoin (avoid before/during/after – pseudotumor cerebri); oral contraceptives (↓ efficacy); penicillin (avoid – antagonism); ergot alkaloids (↑ ergotism)

**Why:** Several corrections are needed. The separation interval: UK SmPC 4.5 says "taken at least 3 hours before or after a dose"; no 2-3 h figure appears in any label. Isotretinoin: the FDA and SmPC wording is "should be avoided", not contraindicated. Missing label interactions: "advisable to avoid giving tetracyclines in conjunction with penicillin" and "Increased risk of ergotism when ergot alkaloids... are given with tetracyclines" (US FDA IV label, Drug Interactions; Menocik insert §7 also lists anticoagulant, penicillin and OC). Chelation matters only for oral Mero. The US Minocin Mg-sulfate interactions (CNS depressants, NMBAs, cardiac glycosides) do not apply to Menocik.

**Sources:** US FDA MINOCIN IV label, Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA minocycline capsule label, PRECAUTIONS Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; UK SmPC 4.5: https://www.medicines.org.uk/emc/product/654/smpc; Menocik Taiwan insert §7: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### A16 · Page body (unsupported)

**Was:** Drug Interactions table rows: Digoxin (↑ levels), Methotrexate (↑ toxicity), Methoxyflurane (fatal renal toxicity; Contraindicated); Antacids/Calcium 'Separate by 2-3 hours'; Isotretinoin '**AVOID combination**'

**Now:** Flag the Digoxin, Methotrexate and Methoxyflurane rows as 'not in minocycline labels (class data)'. Keep them only with a citation, or remove them if no source is found. Change the antacid/calcium/iron management to 'Separate ≥3 h (UK SmPC 4.5); oral form only'. Add a row: 'Mg-containing US Minocin IV only: CNS depressants, NMBAs, cardiac glycosides – N/A to Menocik'.

**Why:** None of the minocycline labels reviewed mention digoxin, methotrexate or methoxyflurane: the US IV label, the US oral label, UK SmPC 4.5 and the Menocik and Mero inserts. Methoxyflurane appears in other tetracycline labels, not minocycline. The UK SmPC gives at least 3 h separation. The isotretinoin row is correct (FDA: "should be avoided shortly before, during, and shortly after"). The penicillin, ergot, warfarin and OC rows are verified.

**Sources:** US FDA MINOCIN IV label, Drug Interactions: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.5: https://www.medicines.org.uk/emc/product/654/smpc

### A17 · Page body (unsupported)

**Was:** Coverage table: VRE (some strains); Nocardia spp.; Burkholderia cepacia complex; Vibrio vulnificus; Ehrlichia, Anaplasma; Borrelia spp. (Lyme disease); Legionella; Plasmodium spp.

**Now:** Mark VRE, Nocardia, Ehrlichia/Anaplasma, Legionella, Plasmodium as 'not in label' (remove unless a source is added). B. cepacia complex: keep, cite 'in vitro 88% susceptible, SENTRY US 2014–2018 (Flamm 2019, PMID 31427295)'. Change 'Borrelia spp. (Lyme disease)' → 'Borrelia recurrentis (relapsing fever)' and 'Vibrio vulnificus' → 'Vibrio cholerae'. Add label organisms: E. coli, Klebsiella spp., Enterobacter aerogenes, Shigella, Yersinia pestis, Francisella tularensis, Campylobacter fetus, Bartonella bacilliformis, Klebsiella granulomatis, Treponema pallidum, Ureaplasma, Fusobacterium, Clostridium spp.

**Why:** US FDA IV label, List of Microorganisms, names "Borrelia recurrentis" (not B. burgdorferi/Lyme) and "Vibrio cholerae" (not V. vulnificus). It does not list Nocardia, Burkholderia, Ehrlichia/Anaplasma, Legionella, Plasmodium or Enterococcus/VRE. The listed Gram-negative organisms (E. coli, Klebsiella, Enterobacter aerogenes, Shigella, Yersinia pestis, F. tularensis, etc.) are missing from the table.

**Sources:** US FDA MINOCIN IV label, List of Microorganisms: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA minocycline capsule label, Microbiology: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06

### A18 · Page body (error)

**Was:** Susceptibility Data (SENTRY 2014-2021): S. maltophilia 96-99% susceptible (92.8% even in TMP-SMX resistant); A. baumannii complex 79-84% susceptible; Burkholderia cepacia complex 88% susceptible

**Now:** **Susceptibility data:** SENTRY US 2014–2018 (Flamm 2019, PMID 31427295; old CLSI breakpoint ≤4 µg/mL): S. maltophilia 99.5% (92.8% of TMP-SMX-R isolates), A. baumannii-calcoaceticus complex 85.7%, B. cepacia complex ~88%. **Revised CLSI breakpoints (IDSA 2026 Table 2):** Enterobacterales ≤4, CRAB ≤1, S. maltophilia ≤1 µg/mL → CRAB <50% susceptible; S. maltophilia ~90% susceptible (IDSA 2026).

**Why:** The SENTRY figures have no citation and reflect the old breakpoint (≤4 µg/mL) for Acinetobacter. IDSA 2026 Q5.4: "Applying the revised 2025 CLSI susceptibility breakpoint (≤1 µg/mL), minocycline demonstrates in vitro activity against fewer than 50% of CRAB isolates." Q6.4: "in vitro susceptibility to minocycline in approximately 90% of isolates (MIC ≤1 µg/mL)". IDSA 2026 Table 2 gives the breakpoints: Minocycline ≤4 (Enterobacterales), ≤1 (CRAB), ≤1 (S. maltophilia). The 79-84% figure materially overstates activity against CRAB.

**Sources:** IDSA 2026 AMR Guidance Q5.4/Q6.4: https://www.idsociety.org/practice-guideline/amr-guidance/; IDSA 2026 Table 2 (CLSI 2026 breakpoints): https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-2.pdf

### A19 · Page body (minor)

**Was:** Indications section: "FDA-Approved: Acne vulgaris (inflammatory lesions); Rosacea (inflammatory lesions) ..."; "IDSA Guideline-Recommended: CRAB, S. maltophilia, MRSA (alternative)"; "Off-Label: ... Mycobacterium marinum"

**Now:** Acne: "Severe acne – adjunctive therapy (US IR label); acne (UK MR SmPC)". Rosacea: mark 'not in the IR/IV labels reviewed (ER/topical products only)', or remove. Rename the IDSA heading to "IDSA 2026 AMR Guidance – alternative, combination therapy only: CRAB, S. maltophilia" and add "IDSA MRSA 2011: oral option for MRSA SSTI". Move M. marinum to labeled use (oral label: 100 mg q12h × 6–8 wk). Add missing label indications: Acinetobacter spp., E. coli, Enterobacter, Shigella (when susceptible); brucellosis (with streptomycin), cholera, relapsing fever, Q fever/typhus, meningococcal meningitis/listeriosis/actinomycosis (PCN-contraindicated alternatives), NGU (Chlamydia/Ureaplasma), gonorrhea (oral).

**Why:** US IV and oral labels, INDICATIONS: "In severe acne, minocycline may be useful adjunctive therapy." Inflammatory-lesion acne and rosacea claims belong to ER/topical products, which are not among our sources and not stocked. UK SmPC 4.1: "indicated for the treatment of acne." The oral label covers M. marinum ("limited clinical data show that oral minocycline hydrochloride has been used successfully") with dosing given. The IV label lists Acinetobacter, brucellosis and the PCN-contraindicated alternatives (meningitis, listeriosis, anthrax, actinomycosis, syphilis). IDSA 2026 limits minocycline to an alternative used in combination.

**Sources:** US FDA MINOCIN IV label, INDICATIONS AND USAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA minocycline capsule label, INDICATIONS AND USAGE / DOSAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; UK SmPC 4.1: https://www.medicines.org.uk/emc/product/654/smpc; IDSA 2026 AMR Guidance: https://www.idsociety.org/practice-guideline/amr-guidance/; IDSA MRSA 2011, PMID 21208910: https://pubmed.ncbi.nlm.nih.gov/21208910/

### A20 · Page body (minor)

**Was:** Adult Dose table: Acne 'extended-release 45-135 mg once daily'; Rosacea 'Extended-release 40-45 mg once daily'; Rheumatoid arthritis '100 mg q12h'; CRAB '200 mg q12h (often as part of combination therapy)'

**Now:** Acne: "Severe acne adjunct: usual dose (US IR label); UK MR: 100 mg q24h (≥12 y)". Flag the ER acne, ER rosacea and RA rows as unsourced (products not stocked); the owner can keep or remove them. Change CRAB to "200 mg q12h IV/PO **in combination with ≥1 other active agent** (IDSA 2026)" and S. maltophilia to "200 mg q12h, as part of combination therapy (IDSA 2026)". Add oral-label regimens: gonococcal (not urethritis/anorectal) 200 mg → 100 mg q12h ≥4 days; gonococcal urethritis in men 100 mg q12h × 5 days; Chlamydia/Ureaplasma 100 mg q12h ≥7 days; M. marinum 100 mg q12h × 6–8 wk. Add to the IV row: "Menocik: dilute to 500–1000 mL".

**Why:** No label or guideline in the source set gives the ER/rosacea doses or the RA dose. IDSA 2026 Q5.4 makes combination therapy mandatory for CRAB, whereas the page says "often". US oral label, DOSAGE AND ADMINISTRATION, gives the gonococcal, Chlamydia/Ureaplasma and M. marinum regimens. Mero Taiwan insert §3.1 gives the same gonorrhea regimens. UK SmPC 4.2: "One 100 mg capsule every 24 hours". The meningococcal carrier and syphilis rows are verified.

**Sources:** US FDA minocycline capsule label, DOSAGE AND ADMINISTRATION: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; Mero Taiwan insert §3.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC036940%E8%99%9F; UK SmPC 4.2: https://www.medicines.org.uk/emc/product/654/smpc; IDSA 2026 AMR Guidance Q5.4/Q6.4: https://www.idsociety.org/practice-guideline/amr-guidance/

### A21 · Page body (error)

**Was:** Renal table: 'CrCl <80 mL/min: No specific adjustment required; max 200 mg/day recommended due to antianabolic effects'; 'CRRT: No adjustment required'; Note: 'primarily hepatically metabolized (CYP3A4) with only 5-12% renal excretion unchanged'; Summary table Renal: 'No adjustment required; not dialyzable'

**Now:** CrCl <80 row: "PK not fully characterized; total daily dose ≤200 mg/24h; monitor BUN/Cr (US FDA). Menocik 仿單: 降低總劑量或延長給藥間隔; prolonged therapy keep serum level ≤15 mcg/mL + frequent LFT." Add row: "Renal failure: contraindicated (UK SmPC 4.2/4.3)". CRRT row: "No label data." Note: replace CYP3A4/5–12% with "Urinary and fecal recovery is ½–⅓ that of other tetracyclines; t½ 18–69 h in renal impairment (US FDA)". Summary Renal: "CrCl <80: ≤200 mg/day (US FDA); not removed by HD/PD; CRRT no data". Keep HD/PD rows.

**Why:** 'No specific adjustment required' contradicts the 200 mg/day cap in the same cell. US FDA IV label: "total daily dosage should not exceed 200 mg in 24 hours in patients with renal impairment." No label or guideline in the source set gives CRRT data. No label in the set states CYP3A4 metabolism or the 5–12% figure. US FDA oral label CLINICAL PHARMACOLOGY: "urinary and fecal recovery of minocycline... was one-half to one-third that of other tetracyclines"; IV label: "18 to 69 hours in subjects with renal impairment".

**Sources:** US FDA MINOCIN IV label, DOSAGE AND ADMINISTRATION, CLINICAL PHARMACOLOGY, OVERDOSAGE: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA minocycline capsule label, CLINICAL PHARMACOLOGY: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; Menocik Taiwan insert §3.1, §5.1: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### A22 · Page body (minor)

**Was:** Pediatric: '<8 years: **Generally contraindicated**...'; 'AAP Recommendation: 2 mg/kg PO/IV twice daily; max 200 mg/day'

**Now:** <8 years: "Not recommended unless expected benefits outweigh risks (US FDA); 敏羅仿單: 嬰兒和孩童應避免使用; UK MR SmPC: contraindicated <12 y". Flag the AAP line as unsourced: add a citation or remove it.

**Why:** US FDA IV label, Pediatric Use: "not recommended for use in children below 8 years of age unless the expected benefits of therapy outweigh the risks". This is not a contraindication in the US label. Mero insert §4 lists avoidance in infants and children under 禁忌. UK SmPC 4.3 contraindicates use under 12 years for the acne MR product. No source is given for the AAP statement.

**Sources:** US FDA MINOCIN IV label, PRECAUTIONS Pediatric Use: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Mero Taiwan insert §4: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC036940%E8%99%9F; UK SmPC 4.3: https://www.medicines.org.uk/emc/product/654/smpc

### A23 · Page body (minor)

**Was:** Side Effects: 'Vestibular (1-10%): ... (more common in women, 50-70%; ...)'; '**Black Box Warning Equivalent:** Permanent tooth discoloration...'

**Now:** Vestibular row: "Dizziness common (≥1/100–<1/10); vertigo, tinnitus, impaired hearing rare; more common in women (UK SmPC). Tinnitus and decreased hearing reported with IV minocycline (US FDA)". Remove the unsourced '50-70%'. Rename 'Black Box Warning Equivalent' to 'US label WARNING (no boxed warning)'. Add to Serious/Rare: anaphylaxis (incl. fatal), C. difficile-associated diarrhea, acute renal failure/interstitial nephritis, hemolytic anemia/thrombocytopenia, thyroid cancer (post-marketing, prolonged use), thrombophlebitis with prolonged IV use.

**Why:** No source gives the 50–70% figure. UK SmPC 4.7/4.8: dizziness Common; "tinnitus and vertigo (more common in women)". US FDA IV label ADVERSE REACTIONS: "Tinnitus and decreased hearing have been reported in patients on MINOCIN (minocycline for injection)"; "Thyroid cancer has been reported in the post-marketing setting"; anaphylaxis "(including shock and fatalities)"; "Acute renal failure has been reported". The labels carry no boxed warning; tooth discoloration sits under WARNINGS.

**Sources:** US FDA MINOCIN IV label, WARNINGS and ADVERSE REACTIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.7/4.8: https://www.medicines.org.uk/emc/product/654/smpc

### A24 · Page body (minor)

**Was:** Notes #1 '...effective for meningococcal carriage and CNS infections'; #2 'IDSA 2022 Guidance: Minocycline is a recommended option for CRAB and S. maltophilia'; #4 '8.5-fold increased risk of drug-induced lupus' (no citation); #6 'Can be used in renal impairment (unlike most tetracyclines) but monitor BUN'; #8 'Storage: Discard expired tetracyclines (risk of Fanconi syndrome)'; #9 'Photosensitivity: Less than doxycycline but still advise sun protection'

**Now:** #1: "... labeled for meningococcal carrier eradication (oral) and as an alternative for N. meningitidis meningitis when PCN contraindicated (IV)". #2: "IDSA 2026 AMR Guidance: alternative for CRAB and S. maltophilia, only in combination with ≥1 other active agent". #4: add "(Sturkenboom 1999, PMID 10074958)". #6: "Renal impairment: total ≤200 mg/day (US FDA), monitor BUN/Cr; UK SmPC: contraindicated in complete renal failure". #8: "Discard unused tetracyclines by expiration date (US oral label)"; flag 'Fanconi' as unsourced for minocycline. #9: "Photosensitivity reported with minocycline (US FDA); advise sun protection"; flag the comparison with doxycycline as unsourced.

**Why:** #2: IDSA 2022 (PMID 34864936) was superseded by the 2024 version (PMID 39108079) and then by the 2026 version (v5.0), which makes minocycline an alternative used in combination. #4 is verified: "Current single use of minocycline was associated with an 8.5-fold (95% CI, 2.1-35) increased risk". #6 needs the FDA cap. #8: the US oral label says "Unused supplies of tetracycline antibiotics should be discarded by the expiration date"; Fanconi syndrome is not mentioned in the minocycline labels. #9: the US FDA label says "This has been reported with minocycline". The Menocik insert's claim "迄今研究顯示Minocycline不引起光敏感反應" is outdated and should not be copied. #1: no CNS-infection data appear in the labels apart from the meningococcal indications.

**Sources:** IDSA 2026 AMR Guidance: https://www.idsociety.org/practice-guideline/amr-guidance/; IDSA 2022 guidance PMID 34864936: https://pubmed.ncbi.nlm.nih.gov/34864936/; IDSA 2024 guidance PMID 39108079: https://pubmed.ncbi.nlm.nih.gov/39108079/; Sturkenboom 1999, PMID 10074958: https://pubmed.ncbi.nlm.nih.gov/10074958/; US FDA minocycline capsule label, PRECAUTIONS Information for Patients and INDICATIONS: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; US FDA MINOCIN IV label, WARNINGS Photosensitivity: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa

### A25 · Breastfeeding (minor)

**Was:** Short-term acceptable; avoid prolonged use; may cause black milk

**Now:** Short-term use probably acceptable (LactMed); avoid prolonged/repeated courses; monitor infant for rash, diarrhea, thrush; black breastmilk reported. Manufacturer: avoid breastfeeding during use + 4 days after; UK SmPC: contraindicated. Alternatives: doxycycline, tetracycline

**Why:** The current text is correct but leaves out the label positions and the alternatives. LactMed (rev 2025-06-15): "short-term use of minocycline is probably acceptable... avoid prolonged or repeat courses during nursing. Monitor the infant for rash... diarrhea or candidiasis... Black discoloration of breastmilk has been reported"; "the manufacturer recommends avoiding breastfeeding during administration of minocycline and for 4 days after the last dose"; Alternate Drugs: "Doxycycline, Tetracycline". UK SmPC 4.6: "Minocycline is contraindicated during breast-feeding."

**Sources:** LactMed Minocycline NBK501031 (rev 2025-06-15), Summary of Use during Lactation and Alternate Drugs: https://www.ncbi.nlm.nih.gov/books/NBK501031/; UK SmPC 4.6: https://www.medicines.org.uk/emc/product/654/smpc

### A26 · Page body (minor)

**Was:** Breastfeeding section bullets; Key References: 'LactMed Database (updated Jan 2021)'; 'IDSA Guidance 2022: Treatment of CRAB and S. maltophilia (Clin Infect Dis 2022;74:2089-2114)'

**Now:** Breastfeeding: add bullets "Manufacturer: avoid breastfeeding during use and for 4 days after last dose", "UK SmPC: contraindicated during breast-feeding" and "Alternatives: doxycycline, tetracycline (LactMed)". References: change to "LactMed Database (revised 2025-06-15)" and "IDSA 2026 Guidance on the Treatment of AMR Gram-Negative Infections (v5.0, published 2026-07-30), https://www.idsociety.org/practice-guideline/amr-guidance/; supersedes CID 2022;74:2089-2114 (PMID 34864936) and CID 2024 (PMID 39108079)". Add the DailyMed setids, the UK SmPC URL and the Menocik/Mero TFDA insert URLs.

**Why:** The reference dates are stale. The LactMed record in the source set is revised 2025-06-15. The IDSA idsociety.org page shows the 2026 guidance (v5.0), published July 30, 2026. Both PMIDs were verified with esummary: 34864936 is CID 2022;74(12):2089-2114, and 39108079 is the 2024 IDSA AMR guidance. The breastfeeding bullets otherwise match LactMed and are correct.

**Sources:** LactMed NBK501031: https://www.ncbi.nlm.nih.gov/books/NBK501031/; IDSA 2026 AMR Guidance: https://www.idsociety.org/practice-guideline/amr-guidance/; PMID 34864936: https://pubmed.ncbi.nlm.nih.gov/34864936/; PMID 39108079: https://pubmed.ncbi.nlm.nih.gov/39108079/

### A27 · Page body (minor)

**Was:** Monitor table: no serum Mg row; no syphilis serology; 'Signs of autoimmune reactions ... ANA (assess every 3 months after 6 months of therapy)'

**Now:** Keep autoimmune row, cite UK SmPC 4.2: ">6 months: monitor ≥3-monthly for hepatitis, SLE, pigmentation". Add row: "Syphilis – venereal disease/gonorrhea: Menocik 仿單: 疑似梅毒 → 治療前暗視野檢查 + 每月血清檢查 ≥4 個月; US FDA: serology at diagnosis and at 3 months". Do not add Mg monitoring for Menocik; optionally footnote "US Minocin IV only (contains MgSO4): serum Mg in renal impairment".

**Why:** UK SmPC 4.2: "If Acnamino MR is to be continued for longer than six months, patients should be monitored... at least three monthly... for signs and symptoms of hepatitis or systemic lupus erythematosus (SLE) or unusual pigmentation." US FDA IV label, Laboratory Tests: "All patients with gonorrhea should have a serologic test for syphilis at the time of diagnosis... follow-up serologic test for syphilis after 3 months." The Mg monitoring is product-specific (see A3).

**Sources:** UK SmPC 4.2: https://www.medicines.org.uk/emc/product/654/smpc; US FDA MINOCIN IV label, Laboratory Tests and PRECAUTIONS General: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; Menocik Taiwan insert §1.2: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### A28 · Mechanism (minor)

**Was:** 30S ribosomal subunit inhibitor → blocks protein synthesis (bacteriostatic); anti-inflammatory properties

**Now:** Keep as is. Optionally note that 'anti-inflammatory properties' is from the literature, not the labels (e.g., Garrido-Mesa 2013, already listed in the body references).

**Why:** The core statement is verified. US FDA IV label, Mechanism of Action: "The tetracyclines are primarily bacteriostatic and are thought to exert their antimicrobial effect by the inhibition of protein synthesis." UK SmPC 5.1: "inhibits protein synthesis... primarily bacteriostatic." The '30S' detail and the anti-inflammatory claim are standard pharmacology but are not stated in the labels.

**Sources:** US FDA MINOCIN IV label, Mechanism of Action: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 5.1: https://www.medicines.org.uk/emc/product/654/smpc

### B1 · Renal dose, HD, CRRT (error)

**Was:** No adjustment

**Now:** CrCl <80: 總劑量 ≤200 mg/24h (US FDA); monitor BUN/SCr。TW Menocik 仿單: 總劑量應比一般推薦劑量低或延長用藥間隔 (no numeric cut-off); prolonged therapy: serum level ≤15 mcg/mL + 頻繁 LFT。UK SmPC: contraindicated in renal failure。HD/PD: not significantly removed → no supplement。CRRT: no data

**Why:** The FDA IV and oral labels both cap the total daily dose at 200 mg/24h in renal impairment, and the UK SmPC contraindicates use in renal failure. 'No adjustment' is contradicted by every official label. Under the ground rules, the hospital's own product insert (Menocik) gives only a qualitative reduction, so the FDA numeric cap is the value to use, with the Taiwan text alongside. HD and PD removal come from the FDA OVERDOSAGE section. I found no CRRT PK data on PubMed. Lodise 2021 (ACUMIN, PMID 33168615, verified) retained only BSA and albumin as PK covariates, and Welling 1975 (PMID 1211910, verified) found no reduced clearance in renal failure. Neither supports a CRRT-specific dose, so 'no data' is the honest entry.

**Sources:** US FDA MINOCIN IV label, DOSAGE AND ADMINISTRATION/Adults: 'The pharmacokinetics of minocycline in patients with renal impairment (CLCR <80 mL/min) have not been fully characterized... The total daily dosage should not exceed 200 mg in 24 hours in patients with renal impairment... BUN and creatinine should be monitored' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA MINOCIN IV label, OVERDOSAGE: 'not removed in significant quantities by hemodialysis or peritoneal dialysis' (same URL); UK SmPC Acnamino MR 4.3: 'Complete renal failure' contraindicated; 4.2: 'Minocycline must not be given to persons in renal failure' https://www.medicines.org.uk/emc/product/654/smpc; TW Menocik 仿單 §3.1 腎功能不全病人: '總劑量應比一般推薦劑量低或延長用藥間隔'; §5.1: '血中濃度不可超逾15微克/毫升' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; Lodise TP et al. AAC 2021;65:e01809-20 (PMID 33168615) https://pubmed.ncbi.nlm.nih.gov/33168615/; Welling PG et al. AAC 1975;8:532-7 (PMID 1211910) https://pubmed.ncbi.nlm.nih.gov/1211910/

### B2 · Notes (error)

**Was:** IDSA-recommended for CRAB/S. maltophilia; higher autoimmune risk than other tetracyclines; excellent CNS penetration; safe in renal failure

**Now:** IDSA 2026: alternative for CRAB & S. maltophilia — 只用於併用療法 (combination with ≥1 other active agent), 200 mg IV/PO q12h; CRAB: only when sulbactam-durlobactam resistant/unavailable; CRAB <50% susceptible at CLSI ≤1 µg/mL; IV ≈ PO (~95% bioavailability)。Lupus-like syndrome: current minocycline use RR 8.5 vs non-users (other tetracyclines 1.7, NS) (Sturkenboom 1999, PMID 10074958)。CNS penetration: [unsourced – flag]。Renal impairment: ≤200 mg/day + monitor BUN/SCr (FDA); renal failure contraindicated (UK SmPC)。Menocik (TW) 不含 MgSO4 (US Minocin IV does)

**Why:** 'Safe in renal failure' is contradicted by the UK SmPC (contraindicated in renal failure) and by the FDA 200 mg/day cap. 'IDSA-recommended' overstates the current guidance. IDSA 2026 Q5.4 and Q6.4 make minocycline an ALTERNATIVE agent for CRAB and S. maltophilia, combination therapy only, and for CRAB only when sulbactam-durlobactam is resistant or unavailable. The same guidance notes that fewer than 50% of CRAB isolates are susceptible at the revised 2025 CLSI breakpoint. The autoimmune claim is supported by Sturkenboom 1999. 'Excellent CNS penetration' has no source in any label or guideline I checked, so I left it out of the replacement (flag, not contradicted).

**Sources:** IDSA 2026 Guidance on AMR Gram-Negative Infections, Q5.4 and Q6.4 (published July 30 2026) https://www.idsociety.org/practice-guideline/amr-guidance/; IDSA 2026 Table 1: 'Minocycline 200 mg IV/PO every 12 hours' https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf; UK SmPC 4.3/4.4 'Minocycline is contraindicated in persons with renal failure' https://www.medicines.org.uk/emc/product/654/smpc; Sturkenboom MC et al. Arch Intern Med 1999;159:493-7 (PMID 10074958, verified) https://pubmed.ncbi.nlm.nih.gov/10074958/; TW Menocik 仿單 §1.2 賦形劑: Sodium Hydroxide, Hydrochloric Acid, Nitrogen Gas (no magnesium) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B3 · Adult dose (minor)

**Was:** 200mg load + 100mg q12h<br>Stenotrophomonas infection: 200mg q12h<br>Acinetobacter infection, multidrug resistant: 200mg q12h

**Now:** 200mg load + 100mg q12h IV (infuse over 60 min; max 400 mg/24h)<br>Stenotrophomonas infection: 200mg q12h IV/PO (combination therapy, IDSA 2026)<br>Acinetobacter infection, multidrug resistant: 200mg q12h IV/PO (combination therapy, IDSA 2026)<br>Renal impairment: ≤200 mg/24h (see Renal)

**Why:** I re-verified the label numbers: initial 200 mg, then 100 mg over 60 min q12h, not to exceed 400 mg/24h. The resistant-organism dose of 200 mg q12h matches IDSA 2026 Table 1 and sits exactly at the FDA 400 mg/24h maximum. Three things are missing: the label maximum and infusion time, the IDSA combination-only qualifier, and the conflict with the 200 mg/day renal cap. The Menocik insert gives the same doses (初劑量200毫克，每12小時100毫克，每天不得超過400毫克).

**Sources:** US FDA MINOCIN IV label, DOSAGE AND ADMINISTRATION/Adults https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; TW Menocik 仿單 §3.1 用法用量 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; IDSA 2026 Table 1 https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf

### B4 · Pregnancy (error)

**Was:** Contraindicated (Category D) - tooth/bone effects, fetal harm

**Now:** Contraindicated / avoid (UK SmPC 4.3; 敏羅仿單禁忌: 孕婦應避免使用); US FDA: may cause fetal harm — avoid during tooth development (last half of pregnancy) unless other drugs ineffective/contraindicated; tooth discoloration/enamel hypoplasia, ↓ fetal bone growth; rare limb-reduction reports

**Why:** The FDA retired letter categories, and the ground rules say not to write 'Category D' as current. The current FDA IV label has no letter category. The UK SmPC contraindicates use in pregnancy.

**Sources:** US FDA MINOCIN IV label, WARNINGS Tooth Development and PRECAUTIONS Teratogenic Effects https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.3 and 4.6 'Minocycline is contraindicated during pregnancy' https://www.medicines.org.uk/emc/product/654/smpc

### B5 · Page body (error)

**Was:** Pregnancy section: "**Category D** (FDA legacy) / **Contraindicated**"; summary table Pregnancy: "**Contraindicated** (Category D) - tooth/bone effects, fetal harm"

**Now:** Heading: "**Contraindicated / Avoid** (UK SmPC 4.3; 敏羅仿單禁忌: 孕婦應避免使用) / US FDA: may cause fetal harm (letter categories retired)"; summary row = same text as the Pregnancy property (B4). Keep existing bullets.

**Why:** Same letter-category issue as B4. The rest of the pregnancy bullets are supported: the label covers placental crossing, tooth discoloration, bone growth and limb-reduction reports. The TW insert supports hepatotoxicity with IV tetracycline in pregnancy (>2 g/day with renal impairment).

**Sources:** US FDA MINOCIN IV label PRECAUTIONS Teratogenic Effects https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/654/smpc

### B6 · Page body (error)

**Was:** Renal table row CrCl <80: "No specific adjustment required; max 200 mg/day recommended due to antianabolic effects"; Summary table Renal: "No adjustment required; not dialyzable"; CRRT row: "No adjustment required"; Note 6 "Can be used in renal impairment (unlike most tetracyclines) but monitor BUN"

**Now:** CrCl <80 row: "Total daily dose ≤200 mg/24h (US FDA); monitor BUN/SCr. TW Menocik 仿單: reduce total dose or extend interval; prolonged therapy keep serum level ≤15 mcg/mL"; add row "Renal failure: contraindicated (UK SmPC)"; CRRT row: "No published data"; Summary Renal: "CrCl <80: ≤200 mg/day (FDA); HD/PD not removed, no supplement; CRRT no data"; Note 6: "Usable in renal impairment at ≤200 mg/day with BUN/SCr monitoring; contraindicated in renal failure (UK)"

**Why:** The body contradicts itself ('no specific adjustment' alongside 'max 200 mg/day'). The FDA states the cap as 'should not exceed 200 mg in 24 hours', which is a requirement, not a soft recommendation. The CRRT 'No adjustment required' has no source; PubMed returned no minocycline CRRT PK study.

**Sources:** US FDA MINOCIN IV label DOSAGE AND ADMINISTRATION and OVERDOSAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.2/4.3 https://www.medicines.org.uk/emc/product/654/smpc; TW Menocik 仿單 §3.1, §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B7 · Page body (error)

**Was:** Notes item 7: "**IV formulation:** Contains magnesium sulfate; do not dilute with calcium-containing solutions"

**Now:** "**IV formulation:** US Minocin IV contains MgSO4 (monitor serum Mg in renal impairment; caution heart block) — 本院 Menocik (TW) 不含鎂 (excipients NaOH/HCl/N2). Do not dilute with calcium-containing solutions (Menocik: dilute in 500–1000 mL NS/D5W/D5NS/LR)."

**Why:** The magnesium content belongs to the US Minocin product only. The hospital-stocked Menocik lists only sodium hydroxide, hydrochloric acid and nitrogen as excipients. The calcium-incompatibility statement is correct for both products. The Menocik dilution volume (500–1000 mL) differs from US Minocin (100–1000 mL).

**Sources:** TW Menocik 仿單 §1.2 賦形劑 and §3.1 ('稀釋成500至1000ml使用，但不得與含鈣之溶液稀釋使用') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; US FDA MINOCIN IV label DESCRIPTION and PRECAUTIONS General (269 mg magnesium sulfate heptahydrate) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa

### B8 · Page body (error)

**Was:** Coverage 'Susceptibility Data (SENTRY 2014-2021)': S. maltophilia 96-99% susceptible (92.8% even in TMP-SMX resistant); A. baumannii complex 79-84%; Burkholderia cepacia complex 88%

**Now:** "**Susceptibility data:** SENTRY US 2014–2018 (old CLSI ≤4 µg/mL breakpoint): S. maltophilia 99.5% (92.8% of TMP-SMX-R), A. baumannii-calcoaceticus complex 85.7%, B. cepacia complex 88.1% (Flamm 2019). With the revised CLSI breakpoint ≤1 µg/mL (IDSA 2026): CRAB <50% susceptible; S. maltophilia ~90%."

**Why:** The quoted range does not match a verified publication. The closest SENTRY paper (Flamm 2019, 2014–2018, PMID 31427295) gives 99.5%, 85.7% and 88.1%. Those figures all use the old ≤4 µg/mL breakpoint. IDSA 2026 states that, at the revised 2025 CLSI breakpoint (≤1 µg/mL), fewer than 50% of CRAB isolates are susceptible. Its Table 2 lists a CRAB and S. maltophilia breakpoint of ≤1. Leaving the old numbers in suggests far better CRAB coverage than current breakpoints support.

**Sources:** Flamm RK et al. AAC 2019;63:e01154-19 (PMID 31427295, verified) https://pubmed.ncbi.nlm.nih.gov/31427295/; Shortridge D et al. AAC 2021;65:e0126421 (PMID 34491809, verified) https://pubmed.ncbi.nlm.nih.gov/34491809/; IDSA 2026 Q5.4 and Q6.4 https://www.idsociety.org/practice-guideline/amr-guidance/; IDSA 2026 Table 2 (CLSI 2026 breakpoints) https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-2.pdf

### B9 · Hepatic dose (minor)

**Was:** No adjustment

**Now:** No adjustment in labels; use with caution in hepatic dysfunction and with other hepatotoxic drugs/alcohol (hepatotoxicity incl. autoimmune hepatitis, fatal hepatic failure)

**Why:** 'No adjustment' is accurate but leaves out the caution that every label states.

**Sources:** US FDA MINOCIN IV label PRECAUTIONS General: 'should be used with caution in patients with hepatic dysfunction and in conjunction with other hepatotoxic drugs' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.2/4.4 https://www.medicines.org.uk/emc/product/654/smpc

### B10 · Page body (unsupported)

**Was:** Hepatic Dose: "... Monitor LFTs. Contraindicated in severe hepatic impairment."

**Now:** Replace last sentence with "Use with caution in hepatic dysfunction (no label contraindication)."

**Why:** None of the FDA IV, FDA oral, UK SmPC or TW Menocik labels lists severe hepatic impairment as a contraindication. All four say 'use with caution'. The phrase appears to come from the same source as the hospital-site contraindication list.

**Sources:** US FDA MINOCIN IV label CONTRAINDICATIONS (hypersensitivity only) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.3 https://www.medicines.org.uk/emc/product/654/smpc; TW Menocik 仿單 §4 禁忌 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B11 · Pediatric dose (minor)

**Was:** ≥8 yrs: 4 mg/kg load → 2 mg/kg q12h (max 200 mg/day)

**Now:** ≥8 yrs (TW 仿單: 8歲以上; US: above 8 years): 4 mg/kg load → 2 mg/kg q12h (IV over 60 min), not to exceed usual adult dose; <8 yrs: not recommended unless benefit > risk (permanent tooth discoloration) (US FDA). UK (MR caps): contraindicated <12 y

**Why:** The FDA label says 'above 8 years' and 'not to exceed the usual adult dose'. It does not give a 200 mg/day figure. The age limit is also stated differently by the UK (under 12 years).

**Sources:** US FDA MINOCIN IV label D&A 'For Pediatric Patients above 8 years of Age' and Pediatric Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; TW Menocik 仿單 §3.1 '8歲以上之孩童：初劑量為4毫克／公斤，以後每隔12小時2毫克／公斤' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F; UK SmPC 4.2/4.3 https://www.medicines.org.uk/emc/product/654/smpc

### B12 · Drug Interactions (error)

**Was:** Antacids/Ca/Fe/Mg (↓ absorption, separate 2-3h), warfarin (↑ INR), isotretinoin (contraindicated), oral contraceptives (↓ efficacy)

**Now:** Antacids/Ca/Fe/Mg/Al/Zn/bismuth (PO: ↓ absorption, separate ≥3h), warfarin (↓ prothrombin activity → may need ↓ anticoagulant dose; monitor INR), isotretinoin (avoid before/during/after — pseudotumor cerebri), penicillins/β-lactams (avoid — antagonism), ergot alkaloids (↑ ergotism), oral contraceptives (↓ efficacy)

**Why:** Isotretinoin is 'avoided', not 'contraindicated', in both the FDA and UK labels. The UK SmPC specifies separating the interacting salts by at least 3 hours. The FDA and TW labels both list penicillin antagonism and ergot alkaloids, which the entry is missing.

**Sources:** US FDA MINOCIN IV label PRECAUTIONS Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA oral capsule label Drug Interactions (antacids Al/Ca/Mg, iron) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; UK SmPC 4.5 ('at least 3 hours before or after') https://www.medicines.org.uk/emc/product/654/smpc; TW Menocik 仿單 §7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B13 · Page body (unsupported)

**Was:** Drug Interactions table rows: Digoxin (↑ digoxin levels), Methotrexate (↑ MTX toxicity), Methoxyflurane (fatal renal toxicity; contraindicated); Antacids/Calcium 'Separate by 2-3 hours'; summary 'isotretinoin (contraindicated)'

**Now:** Flag digoxin/MTX/methoxyflurane as not in minocycline labels (keep only if owner has a source, mark 'class effect, not in minocycline label'); change separation to '≥3 h' (UK SmPC); change summary to 'isotretinoin (avoid)'

**Why:** Searches of the full FDA IV SPL and the oral SPL XML for methoxyflurane, digoxin and methotrexate found none of them. They are not in the UK SmPC 4.5 either. They are class or other-tetracycline interactions, so I am flagging them rather than removing them, because no source contradicts them. The isotretinoin wording is the same issue as B12.

**Sources:** US FDA MINOCIN IV label PRECAUTIONS Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA oral capsule label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/654/smpc

### B14 · Side Effects (missing)

**Was:** GI, photosensitivity, autoimmune

**Now:** GI, photosensitivity, autoimmune, CNS, ototoxicity, LFT↑, DRESS, SJS/TEN, hematologic, thrombophlebitis, AKI

**Why:** The labels name several serious or characteristic adverse effects that the tags miss. All proposed tags exist in the schema. CNS covers dizziness and vertigo (UK 'Common'), intracranial hypertension and convulsions. Ototoxicity covers tinnitus and decreased hearing, which are specifically reported with MINOCIN injection. LFT↑ covers hepatotoxicity and hepatic failure. The labels also list DRESS (including fatal cases), SJS/TEN, and blood dyscrasias (hemolytic anemia, thrombocytopenia, agranulocytosis). Thrombophlebitis applies to prolonged IV therapy and is in both the FDA and TW labels.

**Sources:** US FDA MINOCIN IV label WARNINGS (Dermatologic Reaction, CNS Effects, Intracranial Hypertension), ADVERSE REACTIONS, D&A ('thrombophlebitis may result') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.8 https://www.medicines.org.uk/emc/product/654/smpc; TW Menocik 仿單 §3 注意 ('如長期使用靜脈注射，可能誘致血栓性靜脈炎') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B15 · Monitor (missing)

**Was:** renal, LFT

**Now:** renal, LFT, CBC

**Why:** The FDA 'Laboratory Tests' section requires periodic hematopoietic, renal and hepatic evaluation, and the UK SmPC and TW insert say the same. Serum Mg ('electrolyte') monitoring applies only to US Minocin. It does NOT apply to Menocik, which contains no magnesium, so do not add it.

**Sources:** US FDA MINOCIN IV label PRECAUTIONS Laboratory Tests https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC 4.4 Laboratory monitoring https://www.medicines.org.uk/emc/product/654/smpc; TW Menocik 仿單 §5.5 ('長期治療時，包括造血系、腎臟及肝臟之定期檢驗必須施行') https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B16 · Coverage (missing)

**Was:** CRAB, MRSA, VRE, Stenotrophomonas, Burkholderia

**Now:** CRAB, MRSA, VRE, Stenotrophomonas, Burkholderia, Acinetobacter, MSSA, Streptococcus, Haemophilus, Neisseria, Listeria, Chlamydia, Mycoplasma, Mycobacteria

**Why:** The FDA IV label's microorganism list includes these organisms, and all the proposed tags exist in the schema: Acinetobacter spp., S. aureus, S. pneumoniae, H. influenzae, N. meningitidis, L. monocytogenes, C. trachomatis, M. pneumoniae, M. marinum. I left out E. coli and Klebsiella even though the label lists them. The TW Menocik insert (乙) says most strains are tetracycline-resistant and need culture and susceptibility testing.

**Sources:** US FDA MINOCIN IV label, List of Microorganisms and INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; TW Menocik 仿單 §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B17 · Coverage (unsupported)

**Was:** VRE (tag); body 'VRE (some strains)'

**Now:** Flag only — no label/guideline source; remove VRE tag if owner cannot provide one

**Why:** No FDA, UK or TW label lists Enterococcus or VRE, and the TW insert's 腸球菌 entry falls in the 'mostly resistant, test first' group. I found no IDSA guidance on minocycline for VRE. The tag is unsourced but not contradicted, so per the rules it is flagged, not removed.

**Sources:** US FDA MINOCIN IV label List of Microorganisms https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; TW Menocik 仿單 §2 乙 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

### B18 · Indications (missing)

**Was:** Pneumonia, SSTI, UTI

**Now:** Pneumonia, SSTI, UTI, Meningitis

**Why:** The FDA IV label lists 'Meningitis due to Neisseria meningitidis' as an alternative when penicillin is contraindicated, and an FDA listing counts as approved under the ground rules. The existing three tags are supported: respiratory tract infections due to Mycoplasma, H. influenzae and Klebsiella; Klebsiella UTI; and S. aureus SSSI.

**Sources:** US FDA MINOCIN IV label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa

### B19 · Page body (missing)

**Was:** Indications 'FDA-Approved' list (no Acinetobacter, E. coli/Klebsiella, brucellosis, cholera, meningococcal meningitis); M. marinum under 'Off-Label'; 'Rosacea (inflammatory lesions)' listed as FDA-approved

**Now:** Add to FDA-Approved: 'Acinetobacter spp., E. coli, Enterobacter, Shigella (susceptibility-guided); Klebsiella resp/UTI; brucellosis (+ streptomycin), cholera, relapsing fever, plague, tularemia; meningococcal meningitis / listeriosis / actinomycosis / anthrax (PCN-contraindicated)'. Move M. marinum to 'FDA label: limited clinical data (oral)'. Mark Rosacea as 'ER product only — not in sourced labels'.

**Why:** The FDA IV label explicitly includes Acinetobacter species, and the body lists CRAB only under IDSA. The oral label's INDICATIONS section says oral minocycline 'has been used successfully' for M. marinum, and its D&A gives 100 mg q12h for 6–8 weeks, so 'off-label' is inaccurate. None of the reviewed labels supports rosacea (it would be an ER product the hospital does not stock); flag it.

**Sources:** US FDA MINOCIN IV label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; US FDA oral capsule label INDICATIONS and D&A (M. marinum) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06

### B20 · Page body (unsupported)

**Was:** Notes item 8: "**Storage:** Discard expired tetracyclines (risk of Fanconi syndrome)"

**Now:** 8. Discard unused tetracyclines by expiration date (US oral minocycline label) — 'Fanconi syndrome' rationale: not in minocycline labels (degraded-tetracycline class data) [flag: unsourced]

**Why:** The owner deliberately removed storage details. Neither minocycline label (FDA IV or oral) nor the UK SmPC mentions Fanconi syndrome; it is a legacy degraded-tetracycline warning.

**Sources:** US FDA MINOCIN IV label (no Fanconi/expired-drug warning) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; UK SmPC (no such warning) https://www.medicines.org.uk/emc/product/654/smpc

### B21 · Page body (minor)

**Was:** Notes item 2 "**IDSA 2022 Guidance:** Minocycline is a recommended option for CRAB and S. maltophilia infections"; item 10 "For S. maltophilia: Clinical efficacy comparable to TMP-SMX; useful alternative especially for TMP-SMX resistant isolates"; Key References 'IDSA Guidance 2022 ... (Clin Infect Dis 2022;74:2089-2114)', 'LactMed Database (updated Jan 2021)'

**Now:** Item 2: "**IDSA 2026 AMR Guidance:** minocycline 200 mg IV/PO q12h is an *alternative*, in combination only, for CRAB (when sulbactam-durlobactam resistant/unavailable) and S. maltophilia". Item 10: "Observational data have not clearly favored levofloxacin, minocycline or TMP-SMX (IDSA 2026); minocycline active vs most TMP-SMX-R isolates in vitro (Flamm 2019)". References: replace with 'IDSA 2026 Guidance on the Treatment of AMR Gram-Negative Infections (published 30 Jul 2026), https://www.idsociety.org/practice-guideline/amr-guidance/' and 'LactMed NBK501031 (revised 2025-06-15)'

**Why:** The 2022 citation is correctly formed: PMID 34864936 verified, Clin Infect Dis 2022;74:2089-2114. It has been superseded by the 2023, 2024 and now 2026 versions. The 2026 version downgrades minocycline to an alternative used only in combination. LactMed was revised 2025-06-15.

**Sources:** IDSA 2026 Q5.4, Q6.4 https://www.idsociety.org/practice-guideline/amr-guidance/; Tamma PD et al. CID 2022;74:2089-2114 (PMID 34864936, verified) https://pubmed.ncbi.nlm.nih.gov/34864936/; Flamm RK et al. 2019 (PMID 31427295) https://pubmed.ncbi.nlm.nih.gov/31427295/; LactMed NBK501031 https://www.ncbi.nlm.nih.gov/books/NBK501031/

### B22 · Page body (unsupported)

**Was:** Renal note: "minocycline is primarily hepatically metabolized (CYP3A4) with only 5-12% renal excretion unchanged"; Side effects: "Vestibular (1-10%) ... more common in women, 50-70%"; Common (≥1%) list includes photosensitivity; "**Black Box Warning Equivalent:**"; Coverage 'Legionella', 'Plasmodium'; Notes 1 'excellent CNS penetration ... CNS infections'; 'AAP Recommendation: 2 mg/kg ... max 200 mg/day'; Adult table Acne ER 45-135 mg, Rosacea ER 40-45 mg, RA 100 mg q12h

**Now:** Flag each as unsourced; specific fixes: change 'Black Box Warning Equivalent' → 'Warning (tooth development)' (no boxed warning in label); move photosensitivity from 'Common' to 'Rare' (UK SmPC 4.8); replace CYP3A4 sentence with 'urinary and fecal recovery is one-half to one-third that of other tetracyclines (FDA)'

**Why:** These statements do not appear in the FDA, UK or TW labels. The UK SmPC 4.8 rates photosensitivity as Rare and dizziness as Common, and says vertigo is 'more common in women' without percentages. The FDA label has no boxed warning. The labels do not mention CYP3A4. Flagged per the rules; corrected only where a label contradicts.

**Sources:** UK SmPC 4.7/4.8 https://www.medicines.org.uk/emc/product/654/smpc; US FDA oral capsule label CLINICAL PHARMACOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5fc4d50-50b2-46e0-b722-4c6b2ec47d06; US FDA MINOCIN IV label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa

### B23 · Breastfeeding (minor)

**Was:** Short-term acceptable; avoid prolonged use; may cause black milk

**Now:** Short-term use probably acceptable (LactMed); avoid prolonged/repeat courses; monitor infant for rash/diarrhea/thrush; black breastmilk reported. Manufacturer: avoid during use + 4 days after; UK SmPC: contraindicated. Alternatives: doxycycline, tetracycline

**Why:** The current text is correct per LactMed. It leaves out the label positions (UK contraindicated; manufacturer advice to avoid for 4 days after the last dose) and the LactMed alternative.

**Sources:** LactMed Minocycline NBK501031 (revised 2025-06-15), Summary of Use during Lactation and Alternate Drugs https://www.ncbi.nlm.nih.gov/books/NBK501031/; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/654/smpc

### B24 · Page body (minor)

**Was:** Monitor table (no thyroid; no Mg note)

**Now:** Add row 'Thyroid: consider monitoring for thyroid cancer signs with prolonged therapy (FDA)'; add footnote 'Serum Mg only for US Minocin IV (contains MgSO4); Menocik contains no Mg'

**Why:** The FDA label says monitoring for signs of thyroid cancer should be considered during prolonged therapy. The Mg point follows from B7.

**Sources:** US FDA MINOCIN IV label ADVERSE REACTIONS 'Other' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e415c323-8219-464b-9e3e-72c5a796cdaa; TW Menocik 仿單 §1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC060447%E8%99%9F

## Verified correct as written

- Adult dose: 200 mg load then 100 mg q12h. Matches US FDA IV label (Adults), Menocik insert §3.1 and Mero insert §3.1.
- Adult dose: 200 mg q12h for S. maltophilia and CRAB matches IDSA 2026 Table 1 ('Minocycline 200 mg IV/PO every 12 hours'). Combination therapy needs to be stated (A9).
- Body IV row: 200 mg loading, then 100 mg q12h, max 400 mg/day, infused over 60 minutes. Matches US FDA IV label; Menocik insert also gives max 400 mg/day.
- Body adult dose: meningococcal carrier 100 mg q12h × 5 days and syphilis 200 mg load → 100 mg q12h × 10–15 days. Both match the US FDA oral label, DOSAGE AND ADMINISTRATION.
- Pediatric mg/kg regimen (≥8 y: 4 mg/kg, then 2 mg/kg q12h) and body IV pediatric row (infuse over 60 min). Match US FDA IV label and Menocik insert.
- Body renal HD/PD rows: 'not significantly removed'. Matches US FDA OVERDOSAGE ('not removed in significant quantities by hemodialysis or peritoneal dialysis') and UK SmPC 4.9.
- Body renal note: monitor BUN/creatinine because of the antianabolic effect. Matches US FDA WARNINGS, Anti-anabolic Action.
- Indications tags Pneumonia, SSTI and UTI. Supported by US FDA IV INDICATIONS: RTI (M. pneumoniae, H. influenzae, Klebsiella), UTI (Klebsiella), SSSI (S. aureus).
- Coverage tag Stenotrophomonas (IDSA 2026 Q6.4). CRAB is supported as an alternative used in combination (IDSA 2026 Q5.4). MRSA is supported by IDSA MRSA 2011 (PMID 21208910) and the label's S. aureus.
- Side Effects tags GI, photosensitivity and autoimmune. All are in the US FDA IV label (GI ADRs; WARNINGS Photosensitivity; lupus-like syndrome and autoimmune hepatitis).
- Monitor tags renal and LFT. US FDA Laboratory Tests calls for periodic renal and hepatic studies.
- Mechanism: bacteriostatic protein-synthesis inhibitor (US FDA Mechanism of Action; UK SmPC 5.1).
- Category: semisynthetic tetracycline derivative (US FDA DESCRIPTION; Menocik insert §1).
- Breastfeeding column content: short-term use acceptable, avoid prolonged use, black milk reported. Matches LactMed NBK501031 (rev 2025-06-15).
- Body breastfeeding bullets: low milk levels, calcium in milk inhibits infant absorption, monitor infant for rash/diarrhea/candidiasis, black milk from iron chelate. All match LactMed.
- Drug interactions: warfarin (depressed prothrombin activity), oral contraceptives (reduced efficacy), isotretinoin (avoid; pseudotumor cerebri), penicillin (antagonism), ergot alkaloids (ergotism), and chelation by Al/Ca/Mg/Fe antacids for oral use. All match US FDA labels, UK SmPC 4.5 and Menocik insert §7.
- Body pregnancy bullets: crosses placenta, fetal harm, tooth discoloration and enamel hypoplasia in the last half of pregnancy, bone-growth inhibition, rare limb-reduction reports. Match US FDA WARNINGS and Teratogenic Effects and UK SmPC 4.6.
- Body side effects: DRESS, pseudotumor cerebri, SJS, autoimmune hepatitis, lupus-like and serum-sickness-like syndromes, hepatic failure, hyperpigmentation including thyroid, tooth discoloration, vaginal candidiasis, esophageal ulceration. All are in US FDA ADVERSE REACTIONS/WARNINGS and UK SmPC 4.8.
- Body monitor rows: LFTs, BUN/Cr, CBC (periodic hematopoietic labs), signs of intracranial hypertension, vestibular symptoms, pigmentation, INR with warfarin. Supported by US FDA Laboratory Tests, WARNINGS and Drug Interactions, and UK SmPC 4.2/4.4.
- Body note #3 (do not exceed recommended dose; side effects are dose-related). Matches the US FDA DOSAGE AND ADMINISTRATION capitalized warning.
- Body note #5 (vestibular effects resolve after discontinuation). Matches US FDA WARNINGS, CNS effects.
- Body note #4 (8.5-fold lupus risk). Supported by Sturkenboom 1999, PMID 10074958 (verified); citation needs to be added.
- Body note #10 (S. maltophilia: no clear outcome difference from TMP-SMX). Consistent with IDSA 2026 Q6.4: 'observational data have not clearly favored levofloxacin, minocycline, or TMP-SMX over each other'.
- Body note #7, 'do not dilute with calcium-containing solutions'. Correct per Menocik insert §3.1 and US FDA label. The magnesium part is wrong for Menocik (A3).
- Body hepatic section: hepatically cleared, risk of acute and chronic (autoimmune) hepatitis, monitor LFTs. Supported by US FDA PRECAUTIONS and ADVERSE REACTIONS. Only the 'contraindicated' sentence is wrong (A7).
- PMIDs verified with NCBI esummary: 34864936 (IDSA 2022, CID 74(12):2089-2114), 39108079 (IDSA 2024 AMR guidance), 21208910 (IDSA MRSA 2011), 10074958 (Sturkenboom 1999).
- Category 'Tetracycline (2nd generation)': consistent with the FDA, which calls minocycline a 'semisynthetic derivative of tetracycline', and with ATC J01AA08 (UK SmPC 5.1).
- Mechanism: FDA says 'primarily bacteriostatic... inhibition of protein synthesis'. The anti-inflammatory claim is supported by Garrido-Mesa 2013, Br J Pharmacol 169:337-52 (PMID 23441623, verified).
- Adult standard dose of 200 mg load then 100 mg q12h, max 400 mg/24h, infused over 60 min. Matches the FDA IV label, FDA oral label, TW Menocik insert and TW Mero insert.
- Adult resistant-organism dose of 200 mg q12h matches IDSA 2026 Table 1 ('Minocycline 200 mg IV/PO every 12 hours') and stays within the FDA 400 mg/24h maximum.
- Pediatric >8 y: 4 mg/kg load then 2 mg/kg q12h. Matches the FDA IV label and the TW Menocik and Mero inserts.
- HD/PD: 'not significantly removed; no supplemental dose'. Matches FDA OVERDOSAGE and UK SmPC 4.9.
- The body's statement that the CrCl <80 cap is 200 mg/day matches the FDA label value (the wording needs fixing; see B6).
- Breastfeeding property (short-term acceptable, avoid prolonged use, black milk) matches the LactMed summary (revised 2025-06-15).
- Breastfeeding body bullets (low milk levels, calcium inhibits infant absorption, monitor infant for rash/diarrhea/thrush, black discoloration of milk) match LactMed.
- Indication tags Pneumonia, SSTI and UTI are supported by the FDA IV label (respiratory tract infections by Mycoplasma, H. influenzae and Klebsiella; Klebsiella UTI; S. aureus skin and skin-structure infections).
- Coverage tags CRAB and Stenotrophomonas are supported by IDSA 2026 Q5.4/Q6.4 (as an alternative, in combination) and by the FDA listing of Acinetobacter spp.
- MRSA tag: the FDA label covers S. aureus SSSI ('not the drug of choice'). This is plausible but MRSA-specific support would need the IDSA MRSA guideline, which I did not re-fetch.
- Burkholderia tag is supported in vitro by SENTRY: B. cepacia complex 88.1% susceptible in Flamm 2019 (PMID 31427295, verified) and 85.9% in Shortridge 2021 (PMID 34491809, verified).
- Side-effect tags GI, photosensitivity and autoimmune are all in the FDA ADVERSE REACTIONS and WARNINGS sections and in UK SmPC 4.8.
- Monitor tags renal and LFT are supported by FDA Laboratory Tests and Anti-anabolic Action.
- Drug interactions: antacid/Fe chelation, warfarin/anticoagulant and oral contraceptive entries are supported by the FDA, UK and TW labels. Isotretinoin/pseudotumor cerebri is correct apart from the 'contraindicated' wording.
- Body side effects: DRESS, pseudotumor cerebri, SJS, autoimmune hepatitis, lupus-like syndrome, serum-sickness-like reaction, hyperpigmentation including thyroid, and tooth discoloration are all in the FDA IV label and UK SmPC.
- Body Monitor: autoimmune and ANA checks every 3 months after 6 months are supported by UK SmPC 4.2 ('monitored... at least three monthly' if continued beyond six months).
- Notes item 4: the 8.5-fold lupus-like syndrome risk is verified in Sturkenboom 1999 (PMID 10074958; RR 8.5 for minocycline vs 1.7 for other tetracyclines).
- Body: 'do not dilute with calcium-containing solutions' matches the FDA IV label and TW Menocik insert §3.1.
- Body: meningococcal carrier dose of 100 mg q12h × 5 days and syphilis course of 10–15 days match FDA oral label D&A.
- Body: 'Dosing differs from other tetracyclines; exceeding dose ↑ side effects' matches the FDA D&A capitalized statement.

## Apply log

- Renal dose, HD, CRRT column: merged the US FDA rule (CrCl <80: <=200 mg/24h, monitor BUN/SCr), the TW Menocik insert (lower total dose or longer interval, serum level <=15 mcg/mL, frequent LFT), UK SmPC (contraindicated in renal failure), HD/PD (no supplement) and CRRT (no label data)
- Notes column: IDSA 2026 alternative for CRAB and S. maltophilia, combination only, including the sulbactam-durlobactam condition and <50% CRAB susceptibility; lupus RR 8.5 (PMID 10074958); CNS penetration marked unsourced; renal <=200 mg/day and contraindicated in renal failure (replaces 'safe in renal failure'); Menocik contains no MgSO4
- Adult dose column: merged IV regimen (60 min, max 400 mg/24h), Steno and CRAB 200 mg q12h IV/PO combination (IDSA 2026), normal-renal-function caveat and renal-impairment line
- Pregnancy column: Contraindicated / avoid (UK SmPC 4.3; Mero TW insert); US FDA fetal harm details; no letter category
- Hepatic dose column: no adjustment in labels; caution with hepatic dysfunction and hepatotoxic drugs/alcohol; t1/2 11-16 h
- Pediatric dose column: >=8 y 4 mg/kg load then 2 mg/kg q12h, not above usual adult dose; <8 y not recommended; UK <12 y contraindicated
- Drug Interactions column: PO chelators separate >=3h; warfarin (lower prothrombin activity, monitor INR); isotretinoin avoid; OCs; penicillins/beta-lactams; ergot alkaloids
- Breastfeeding column: LactMed short-term acceptable, manufacturer avoid during use + 4 days, UK SmPC contraindicated, alternatives doxycycline/tetracycline
- Coverage column: VRE removed; added Acinetobacter, MSSA, Streptococcus, Haemophilus, Neisseria, Listeria, Bacillus, Chlamydia, Mycoplasma, Mycobacteria; kept CRAB, MRSA, Stenotrophomonas, Burkholderia (did not add the optional E.coli/Klebsiella)
- Indications column: added Meningitis
- Side Effects column: added CNS, ototoxicity, DRESS, SJS/TEN, LFT↑, AKI, hematologic, thrombophlebitis
- Monitor column: added CBC and PT/INR
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body Indications: acne wording; rosacea flagged; added label indications (Acinetobacter/E. coli/Enterobacter/Shigella, Klebsiella, brucellosis, cholera, relapsing fever, Q fever/typhus, PCN-contraindicated meningococcal meningitis/listeriosis/actinomycosis/anthrax, NGU, gonorrhea); M. marinum moved from Off-Label to the label list; IDSA heading renamed; IDSA MRSA 2011 line
- Body Coverage table: VRE, Nocardia, Ehrlichia/Anaplasma, Legionella and Plasmodium marked 'not in label'; B. cepacia cited to Flamm 2019; Borrelia changed to B. recurrentis and Vibrio vulnificus to V. cholerae; added the label organisms
- Body Susceptibility data replaced with SENTRY 2014-2018 values and the revised CLSI breakpoints (IDSA 2026)
- Body Adult Dose table: Steno and CRAB combination wording; acne row; ER acne, ER rosacea and RA rows flagged unsourced; added the gonococcal, gonococcal urethritis, Chlamydia/Ureaplasma and M. marinum oral-label rows; IV row notes the 500-1000 mL dilution for Menocik
- Body Renal table: CrCl <80 row rewritten; Renal failure contraindicated row added; CRRT changed to 'No label data'; CYP3A4 note replaced with the US FDA recovery and t1/2 statement; Summary Renal row updated
- Body Hepatic: 'Contraindicated in severe hepatic impairment' replaced with the not-a-labeled-contraindication sentence
- Body Pediatric: <8 y row replaced (US FDA / Mero insert / UK SmPC); AAP line flagged unsourced
- Body Side Effects: unsourced 50-70% removed and the vestibular row rewritten (UK SmPC/US FDA); photosensitivity moved from Common to Serious/Rare; added anaphylaxis, CDAD, AKI/interstitial nephritis, hemolytic anemia/thrombocytopenia, thyroid cancer and thrombophlebitis; 'Black Box Warning Equivalent' renamed 'US label WARNING (no boxed warning) - tooth development'
- Body Monitor: autoimmune row cites UK SmPC 4.2 (>6 months, >=3-monthly); added Syphilis and Thyroid rows; added footnote that serum Mg applies only to US Minocin IV
- Body Drug Interactions: antacid, iron and calcium rows now 'Separate >=3 h (UK SmPC 4.5); oral form only'; digoxin, MTX and methoxyflurane flagged as not in minocycline labels; added the row for the Mg-containing US Minocin IV only; summary row changed to separate >=3h and isotretinoin (avoid)
- Body Pregnancy heading changed to Contraindicated / Avoid with sources (letter categories retired); bullets kept; Summary Pregnancy row matches the column
- Body Breastfeeding: added the manufacturer, UK SmPC and alternatives bullets
- Body Notes #1, #2, #4, #6, #7 (Menocik has no MgSO4, dilution, no calcium solutions), #8 (Fanconi flagged), #9 (doxycycline comparison flagged) and #10 rewritten per the fixes
- Key References replaced with a 'References' section at the end of the page: US FDA IV and oral labels (setids), UK SmPC eMC 654, Menocik and Mero TFDA inserts, IDSA 2026 v5.0 plus Tables 1/2 (supersedes PMID 34864936/39108079), IDSA MRSA 2011, LactMed NBK501031 (rev 2025-06-15), Flamm 2019, Shortridge 2021, Sturkenboom 1999, Lodise 2021, Welling 1975; kept StatPearls and Garrido-Mesa
- Fixed the CRAB row header in the Adult Dose table, which the table rewrite had garbled

**Notes from the apply step (needs owner check):**

- Not changed on purpose: Mechanism column kept as is (the fix said keep; the optional literature note was not added)
- Not in any fix, so not changed: the Summary table rows for Notes ('excellent CNS penetration; safe in renal failure'), Coverage ('VRE (some)', Nocardia, M. marinum), Breastfeeding, Indications, Adult Dose, Pediatric and Hepatic still hold the old text. The owner should sync them with the updated columns.

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
