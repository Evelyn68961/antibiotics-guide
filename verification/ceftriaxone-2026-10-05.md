# Verification: Cefin (Ceftriaxone)

- **Notion entry:** [Cefin (Ceftriaxone)](https://app.notion.com/257c496dfff18057a1f5d03142758e3d)
- **Hospital codes:** CEF10 (Cefin inj 2 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/ceftriaxone.json` (plus any `sources/ceftriaxone-taiwan-insert-*.txt`)

## Product and sources

Cefin 2 g/vial (舒復靜脈注射劑 2gm, "汎生" Cefin for IV injection "Panbiotic", ceftriaxone disodium), 衛署藥製字第038615號, 臺灣汎生製藥. Hospital code CEF10, NHI AC38615212, ATC J01DD04. Sources checked: the TFDA insert (PDF uploaded 2018-11-08, manually transcribed in verification/sources/ceftriaxone-taiwan-insert-cefin.txt); the US FDA label (DailyMed setid 8351aa37-552d-471d-b293-c564dcb6ec29 v18, Hikma); the UK SmPC (eMC 15077, rev 12/08/2020); and LactMed NBK501453 (rev 2024-11-15). Notion page last edited 2026-03-03.

## Agreed fixes applied in Notion (49)

### A1 · Drug Interactions (error)

**Was:** Moderate: Probenecid (↑levels).

**Now:** REMOVE "Moderate: Probenecid (↑levels)." Optionally replace it with: "Probenecid: 不影響 ceftriaxone 排除 (no interaction)."

**Why:** All three labels state that probenecid does NOT change ceftriaxone elimination. US FDA Clinical Pharmacology: "The elimination of ceftriaxone is not altered when ceftriaxone for injection is co-administered with probenecid." UK SmPC 4.5: "Simultaneous administration of probenecid does not reduce the elimination of ceftriaxone." TW insert 2.4.4: "probenecid 不影響排除". The body's MODERATE table row ("Probenecid \| ↑ceftriaxone levels (↓renal tubular secretion)") is contradicted the same way and needs the same fix.

**Sources:** US FDA label (DailyMed) – CLINICAL PHARMACOLOGY, last sentence – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.5 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.4.4 交互作用 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A2 · Drug Interactions (error)

**Was:** Major: ... IV calcium (separate 48h in adults).

**Now:** Major: Warfarin (↑INR - monitor closely); IV calcium (>28 days): 不可混合或同時/Y-site 給藥，可先後給予，但兩次輸注間管路須以相容溶液徹底沖洗。

**Why:** The 48-hour separation is an old recommendation that no current label carries. US FDA Warnings – Interaction with Calcium-Containing Products: "in patients other than neonates, ceftriaxone and calcium-containing solutions may be administered sequentially of one another if the infusion lines are thoroughly flushed between infusions with a compatible fluid." The TW insert boxed warning (2) says >28天病人可相繼使用…輸注管必須完全以可相容溶液沖洗, and (3) says 不應以Y型管同時投予. The body's MAJOR table row ("Separate administration by ≥48h") needs the same change; the body Notes line "May give calcium sequentially if lines flushed" is already correct.

**Sources:** US FDA label – WARNINGS: Interaction with Calcium-Containing Products; DOSAGE AND ADMINISTRATION – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4 / 4.5 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert boxed calcium warning – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A3 · Pregnancy (error)

**Was:** Compatible (Category B); crosses placenta; no teratogenicity; safe in clinical use

**Now:** Crosses placenta；人類懷孕安全性未確立 (TW仿單)；動物試驗(含靈長類)無胚胎毒性/致畸性；僅在明確需要時使用 (US FDA；UK SmPC：尤其第一孕期須效益>風險)。

**Why:** The FDA retired letter categories, so "Category B" must not be shown as current. "Safe in clinical use" is not supported by any label. TW insert 2.5.1: 會穿透胎盤；人類懷孕安全性未建立；動物試驗(含靈長類)無胚胎/胎兒毒性或致畸性. US FDA Teratogenic Effects: "no adequate and well-controlled studies in pregnant women… should be used during pregnancy only if clearly needed." UK SmPC 4.6: "limited amounts of data… only be administered during pregnancy and in particular in the first trimester… if the benefit outweighs the risk." In the body Pregnancy section, "**FDA Category B.** Compatible with pregnancy" and "extensive clinical experience supports safety / Commonly used…" are unsourced and need the same rewrite. "No teratogenicity in animal studies at doses up to 20× human dose" is correct (FDA, mice and rats).

**Sources:** TW insert 2.5.1 懷孕 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; US FDA label – PRECAUTIONS: Teratogenic Effects – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.6 – https://www.medicines.org.uk/emc/product/15077/smpc

### A4 · Renal dose, HD, CRRT (error)

**Was:** No adjustment needed. <br>Combined hepatic + severe renal: max 2g/day. <br>HD: not dialyzable, no supplement. <br>CRRT: no adjustment.

**Now:** 肝功能正常時不需調整；CrCl <10 mL/min 每日 ≤2 g (TW仿單/UK SmPC)。<br>Combined hepatic dysfunction + significant renal disease: max 2g/day，密切監測 (US FDA；TW仿單：定時測血漿濃度)。<br>嚴重腎功能不全注意神經毒性 (encephalopathy/seizure; US FDA)。<br>HD/PD: not removed, no supplemental dose after dialysis (TW仿單：一般須偵測血漿濃度)。<br>CRRT: no adjustment (CVVH PK study, Kroh 1996, PMID 9013367).

**Why:** Under the ground rules, the label of the stocked product (TW Cefin insert) takes priority for renal dosing. TW insert 2.2.1: 只有在腎衰竭末期前(CrCl < 10 mL/min)，每日劑量不可超過 2 g…透析病人不需在透析後給予額外劑量；一般須偵測血漿濃度. The UK SmPC 4.2 agrees ("Only in cases of preterminal renal failure (creatinine clearance < 10 ml/min) should the ceftriaxone dosage not exceed 2 g daily"). The US FDA label (Precautions) caps 2 g/day only when hepatic dysfunction and significant renal disease occur together. The current property omits the CrCl <10 cap. The FDA Neurological Adverse Reactions warning adds: "Some cases occurred in patients with severe renal impairment… Make appropriate dosage adjustments in patients with severe renal impairment." No label covers CRRT; Kroh UF et al., J Clin Pharmacol 1996;36:1114-9 (PMID 9013367, checked with esummary) concluded that "a reduction in the usual daily dose of ceftriaxone is not required in patients… receiving continuous veno-venous hemofiltration." In the body Renal table, change the CrCl <10 row from "No adjustment (max 2g/day recommended)" to "Max 2g/day (TW仿單/UK SmPC); US FDA: adjust only if combined hepatic impairment", and cite PMID 9013367 in the CRRT row.

**Sources:** TW insert 2.2.1 腎臟受損 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; UK SmPC 4.2 Patients with renal impairment – https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label – PRECAUTIONS: Patients with Renal or Hepatic Impairment; WARNINGS: Neurological Adverse Reactions – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; Kroh UF et al. J Clin Pharmacol 1996;36:1114-9, PMID 9013367 – https://pubmed.ncbi.nlm.nih.gov/9013367/

### A5 · Mechanism (error)

**Was:** Binds PBPs → inhibits cell wall synthesis → bactericidal. Stable against β-lactamases. Time-dependent killing. Long t½ (6-9h).

**Now:** Binds PBPs → inhibits cell wall synthesis → bactericidal. 對部分 β-lactamases (penicillinases/cephalosporinases) 具活性，但會被 ESBL、AmpC、carbapenemases 水解。Time-dependent killing (%fT>MIC). Long t½ (6-9h).

**Why:** "Stable against β-lactamases" overstates what the labels say. US FDA Mechanism of Action: "has activity in the presence of some beta-lactamases, both penicillinases and cephalosporinases." UK SmPC 5.1 Resistance: "hydrolysis by beta-lactamases, including extended-spectrum beta-lactamases (ESBLs), carbapenemases and Amp C enzymes". The body Mechanism sentence "High stability against β-lactamases (both penicillinases and cephalosporinases)" should become "activity in the presence of some β-lactamases". The PBP mechanism, time-dependence (SmPC 5.2 %T>MIC) and t½ 5.8–8.7 h (FDA) are correct.

**Sources:** US FDA label – Mechanism of Action / Mechanism of Resistance – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 5.1 Resistance; 5.2 PK/PD – https://www.medicines.org.uk/emc/product/15077/smpc

### A6 · Pediatric dose (error)

**Was:** 常見 **IV dose: 70 mg/kg/day **<br><br>50-75 mg/kg/day QD or divided q12h (up to 100 mg/kg/day severe); <br>Meningitis: 100 mg/kg/day divided q12h; <br>Max 4g/day. <br><br>CONTRAINDICATED neonates ≤28 days with IV calcium. <br>Avoid in hyperbilirubinemic neonates.

**Now:** 常見 **IV dose: 70 mg/kg/day ** [unsourced]<br><br>15天–12歲 (<50 kg): 20–80 mg/kg QD (TW仿單)；US FDA: 50-75 mg/kg/day QD or divided q12h, max 2g/day (非腦膜炎)；UK SmPC: cSSTI/骨關節/FN 50–100 mg/kg QD (max 4 g)。<br>Meningitis: 首劑 100 mg/kg (max 4 g)，之後 100 mg/kg/day QD or divided q12h (max 4g/day) (US FDA；SmPC 80–100 mg/kg QD)。<br>AOM: 50 mg/kg IM 單劑 (max 1 g)。<br>新生兒 0–14天: 20–50 mg/kg QD，≤50 mg/kg/day；IV 須輸注 60 min。<br>≥50 kg: 成人劑量。<br><br>CONTRAINDICATED: neonates ≤28 days needing IV calcium (incl. TPN)；premature neonates up to PMA 41 weeks；hyperbilirubinemic neonates.

**Why:** "Max 4g/day" as a general paediatric maximum conflicts with the US FDA label. FDA Pediatric Patients: for SSSI and "serious miscellaneous infections other than meningitis… The total daily dose should not exceed 2 grams"; 4 g applies to meningitis. The UK SmPC allows max 4 g at 50–100 mg/kg for cSSTI, bone/joint and FN, so both values should be shown. Several label items are missing: TW insert 2.2.1 neonatal dosing (新生兒(至14天) 20–50 mg/kg，不超過 50 mg/kg/day; 15天至12歲 20–80 mg/kg QD); the FDA/SmPC requirement that neonatal IV doses run over 60 min; the FDA/SmPC contraindication in premature neonates up to postmenstrual age 41 weeks; and the FDA AOM dose of a single IM 50 mg/kg (max 1 g). "Avoid" for hyperbilirubinemic neonates should read "contraindicated" (TW 2.3 禁忌; SmPC 4.3). "常見 IV dose 70 mg/kg/day" has no source but is plausible (within 50–75), so it is kept. In the body, "Max: 4g/day (2g/dose for meningitis)" is not label-supported: the FDA meningitis initial dose is 100 mg/kg up to 4 g.

**Sources:** US FDA label – DOSAGE AND ADMINISTRATION: NEONATES, PEDIATRIC PATIENTS; CONTRAINDICATIONS: Neonates – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.2 Paediatric population; 4.3 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.2.1 兒童 / 腦膜炎; 2.3 禁忌 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A7 · Page body (error)

**Was:** Coverage – NO coverage: ... anaerobes

**Now:** Anaerobes: 不可靠 — Bacteroides spp./Peptostreptococcus/C. perfringens 可能有後天抗藥性 (UK SmPC 5.1)；C. difficile 天生抗藥。(US FDA 列 B. fragilis、Clostridium、Peptostreptococcus 為臨床有效菌)

**Why:** A blanket "NO coverage: anaerobes" is contradicted by both labels. US FDA Microbiology lists "Anaerobic bacteria Bacteroides fragilis, Clostridium species, Peptostreptococcus species" as active in clinical infections. UK SmPC 5.1 lists Bacteroides spp., Fusobacterium spp., Peptostreptococcus spp. and Clostridium perfringens under "acquired resistance may be a problem", not "inherently resistant"; C. difficile is the only anaerobe listed as inherently resistant. The body Coverage also lists Citrobacter and Serratia marcescens both as covered and under "NO coverage… AmpC overproducers". Reconcile this as "acquired resistance may be a problem (SmPC); avoid for serious infections".

**Sources:** US FDA label – Microbiology (Interaction with Other Antimicrobials / organism list) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 5.1 Clinical efficacy against specific pathogens – https://www.medicines.org.uk/emc/product/15077/smpc

### A8 · Page body (error)

**Was:** Side Effects – Local: Injection site pain (IM 17% at 350mg/mL), phlebitis (<1% IV)

**Now:** Local: IM 後溫熱/緊繃/硬結 17% (350 mg/mL) / 5% (250 mg/mL)；injection site pain 0.6%；phlebitis (<1% IV)

**Why:** The 17% figure is mislabelled. US FDA Adverse Reactions: "The incidence of warmth, tightness or induration was 17% (3/17) after IM administration of 350 mg/mL and 5% (1/20) after IM administration of 250 mg/mL… injection site pain (0.6%)".

**Sources:** US FDA label – ADVERSE REACTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### A9 · Page body (error)

**Was:** Drug Interactions MODERATE – Aminoglycosides \| Additive nephrotoxicity; synergistic activity \| Monitor renal function

**Now:** Aminoglycosides \| 併用腎毒性證據不一 (UK SmPC)；TW仿單：大劑量併用未見腎毒性增加；可能對 G(-) 協同 \| 依常規監測 aminoglycoside 濃度及腎功能；物理不相容，須分開投予

**Why:** "Additive nephrotoxicity" overstates the labels. UK SmPC 4.5: "There is conflicting evidence regarding a potential increase in renal toxicity of aminoglycosides when used with cephalosporins." TW insert 2.4.4: 與大劑量 aminoglycoside 或強效利尿劑(furosemide)併用未見腎毒性增加. TW insert 2.2 合併療法 mentions synergy and the need to give the drugs separately because they are physically incompatible.

**Sources:** UK SmPC 4.5, 6.2 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.2 合併療法; 2.4.4 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A10 · Side Effects (missing)

**Was:** GI, LFT↑, leukopenia

**Now:** GI, LFT↑, leukopenia, hematologic, anemia, thrombocytopenia, coagulopathy, neurotoxicity, AKI, SJS/TEN, DRESS

**Why:** Every proposed tag already exists in the schema and is label-supported. hematologic: FDA eosinophilia 6%, thrombocytosis 5.1%. anemia: FDA/SmPC/TW warning for immune-mediated haemolytic anaemia, including fatalities. thrombocytopenia: SmPC 4.8 "Common". coagulopathy: FDA coagulopathy 0.4% and "Effect on Prothrombin Time". neurotoxicity: FDA warning (encephalopathy, seizures, myoclonus, NCSE). AKI: FDA warning "Urolithiasis and Post-Renal Acute Renal Failure". SJS/TEN: FDA post-marketing, SmPC 4.4, TW 2.6. DRESS: SmPC 4.4/4.8. Gallbladder pseudolithiasis, pancreatitis and CDAD have no schema option and are already covered in Notes and the body.

**Sources:** US FDA label – WARNINGS (Hemolytic Anemia, Neurological Adverse Reactions, Urolithiasis…, Effect on Prothrombin Time); ADVERSE REACTIONS; Post-marketing – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4, 4.8 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.4, 2.6 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A11 · Indications (missing)

**Was:** Pneumonia, UTI, SSTI, Bacteremia, Meningitis, IAI, Surgical prophylaxis, Sepsis

**Now:** Pneumonia, CAP, HAP, UTI, cUTI, SSTI, cSSTI, Bacteremia, Sepsis, Meningitis, IAI, Pelvic, Endocarditis, FN, Osteoarthritis, Surgical prophylaxis

**Why:** An indication counts as approved if the FDA label OR the UK SmPC lists it. CAP, HAP, cUTI (including pyelonephritis), cSSTI, bacterial endocarditis and FN are in SmPC 4.1. Pelvic: FDA "PELVIC INFLAMMATORY DISEASE caused by Neisseria gonorrhoeae". Osteoarthritis: FDA "BONE AND JOINT INFECTIONS" and SmPC "Infections of bones and joints", assuming the owner uses the "Osteoarthritis" option for bone/joint infection; please confirm. Peritonitis could also be added (TW 2.1 腹部感染症(腹膜炎…)), but it is already covered by IAI. All proposed tags exist in the schema.

**Sources:** US FDA label – INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.1 – https://www.medicines.org.uk/emc/product/15077/smpc

### A12 · Coverage (missing)

**Was:** Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus

**Now:** MSSA, Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus, Neisseria

**Why:** UK SmPC 5.1 "Commonly susceptible species" includes Staphylococcus aureus (methicillin-susceptible), Neisseria gonorrhoeae and Neisseria meningitidis. The FDA label lists S. aureus, N. gonorrhoeae and N. meningitidis as active in clinical infections, and the FDA/SmPC indications include gonorrhoea and meningococcal meningitis. Enterobacter and Serratia are deliberately not proposed (SmPC: acquired resistance may be a problem / AmpC). The body Coverage could also list Borrelia burgdorferi and Treponema pallidum (SmPC commonly susceptible), but the schema has no option for them.

**Sources:** UK SmPC 5.1 – https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label – Microbiology / INDICATIONS AND USAGE – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### A13 · Monitor (missing)

**Was:** renal, LFT, CBC

**Now:** renal, LFT, CBC, PT/INR

**Why:** US FDA "Effect on Prothrombin Time": "Monitor prothrombin time during ceftriaxone treatment in patients with impaired vitamin K synthesis or low vitamin K stores… Coagulation parameters should be monitored frequently" with VKAs. UK SmPC 4.5 says INR should be monitored frequently with oral anticoagulants. The body Monitor table already has a PT/INR row. Optionally add "neuro" for severe renal impairment (FDA Neurological Adverse Reactions). CBC is supported by SmPC 4.4 ("During prolonged treatment complete blood count should be performed at regular intervals") and TW 2.4.

**Sources:** US FDA label – PRECAUTIONS: Effect on Prothrombin Time – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4, 4.5 – https://www.medicines.org.uk/emc/product/15077/smpc

### A14 · Adult dose (minor)

**Was:** Surgical prophylaxis: 1g IV 術前0.5-2hr給藥

**Now:** Surgical prophylaxis: 1-2g IV 單劑，術前30-90 min (TW仿單；UK SmPC: 2g；US FDA: 1g 術前0.5-2hr)

**Why:** The stocked product's insert (TW 2.2.1 手術預防: 開刀前 30–90 分鐘單一劑量 1–2 g) and UK SmPC 4.2 (2 g single dose, 30-90 minutes before surgery) differ from the FDA wording (single 1 g IV 1/2 to 2 hours before surgery). The current text follows FDA only. Make the same change in the body Adult Dose table row and in the Chinese summary line 手術感染預防: 1g IV 術前 0.5-2hr 給藥.

**Sources:** TW insert 2.2.1 手術預防 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; UK SmPC 4.2 – https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label – DOSAGE AND ADMINISTRATION: ADULTS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### A15 · Adult dose (minor)

**Was:** Gonorrhea: 500mg IM single dose

**Now:** Gonorrhea: 500mg IM single dose (UK SmPC; CDC 2020); ≥150 kg: 1 g (CDC 2020, PMID 33332296) [US FDA label: 250 mg, outdated]

**Why:** 500 mg IM is correct per UK SmPC 4.2 ("Gonorrhoea 500 mg as a single intramuscular dose") and the CDC 2020 update (PMID 33332296, checked with esummary). The FDA label still says 250 mg IM, which is outdated. The CDC update recommends 1 g for patients ≥150 kg.

**Sources:** UK SmPC 4.2 – https://www.medicines.org.uk/emc/product/15077/smpc; St Cyr S et al. MMWR 2020;69:1911-6, PMID 33332296 – https://pubmed.ncbi.nlm.nih.gov/33332296/; US FDA label – ADULTS (250 mg) – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### A16 · Page body (minor)

**Was:** Adult Dose table – Lyme disease (disseminated) \| 2g IV q24h × 14-28 days

**Now:** Lyme disease (disseminated) \| 2g IV q24h × 14-21 days (UK SmPC；TW仿單: 50 mg/kg max 2g × 14 days；IDSA 2020: late Lyme arthritis 可至 2-4 週)

**Why:** No label supports a 28-day course. UK SmPC 4.2: "Disseminated Lyme borreliosis… 2 g once daily for 14-21 days". TW insert 2.2.1 萊姆病: 50 mg/kg (最多 2 g) 每日一次，共14天. The IDSA/AAN/ACR 2020 guideline (PMID 33417672, checked with esummary) allows 2–4 weeks of IV ceftriaxone for refractory Lyme arthritis, so 28 days applies only to that setting.

**Sources:** UK SmPC 4.2 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.2.1 萊姆病 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; Lantos PM et al. IDSA/AAN/ACR 2020 Lyme guideline, Clin Infect Dis 2021;72:e1-e48, PMID 33417672 – https://pubmed.ncbi.nlm.nih.gov/33417672/

### A17 · Page body (unsupported)

**Was:** Indications list: ... spontaneous bacterial peritonitis (SBP), ... typhoid fever, chancroid; Adult Dose table: SBP prophylaxis (cirrhosis + GI bleed) 1g IV q24h × 7 days

**Now:** Mark as off-label with guideline citations: "SBP prophylaxis in cirrhosis + GI bleed 1g IV q24h ≤7 days (AASLD 2021, PMID 33942342)"; "chancroid (off-label; CDC STI 2021, PMID 34292926)"; "typhoid fever (off-label; FDA: S. typhi in vitro only)". Also add the label indications missing from the body list: syphilis, AECOPD and febrile neutropenia (UK SmPC 4.1).

**Why:** SBP, typhoid and chancroid are not in the FDA or SmPC indications. The FDA lists Salmonella typhi only under in vitro data, "clinical significance is unknown". They are plausible guideline uses, so they should be flagged and cited rather than removed. AASLD 2021 (PMID 33942342) and CDC STI 2021 (PMID 34292926) were both checked with esummary. UK SmPC 4.1 lists syphilis, acute exacerbations of COPD and neutropenic fever, none of which are in the body list.

**Sources:** US FDA label – Microbiology in vitro list – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.1 – https://www.medicines.org.uk/emc/product/15077/smpc; Biggins SW et al. AASLD 2021, Hepatology 2021;74:1014-48, PMID 33942342 – https://pubmed.ncbi.nlm.nih.gov/33942342/; Workowski KA et al. CDC STI Treatment Guidelines 2021, MMWR Recomm Rep 2021;70:1-187, PMID 34292926 – https://pubmed.ncbi.nlm.nih.gov/34292926/

### A18 · Drug Interactions (missing)

**Was:** (no mention of chloramphenicol, lidocaine, or Y-site incompatibilities)

**Now:** Append: <br>Minor: Chloramphenicol (in vitro antagonism)。<br>不相容 (勿同管/同針筒混合): vancomycin, fluconazole, aminoglycosides, amsacrine, labetalol。<br>含 lidocaine 之 IM 溶液禁止 IV。

**Why:** US FDA: "In an in vitro study antagonistic effects have been observed with the combination of chloramphenicol and ceftriaxone." The same statement is in SmPC 4.5 and TW 2.4.4. SmPC 6.2: "ceftriaxone is not compatible with amsacrine, vancomycin, fluconazole, aminoglycosides and labetalol" (TW 2.4.4 gives the same list without labetalol). FDA Contraindications: "Intravenous administration of ceftriaxone solutions containing lidocaine is contraindicated." The body "MINOR" items are unsourced: oral contraceptives (theoretical) and live vaccines (BCG, cholera, typhoid). Neither is in the FDA, SmPC or TW labels. Flag them and keep them only if the owner has a source.

**Sources:** US FDA label – Interaction with Other Antimicrobials; CONTRAINDICATIONS: Lidocaine – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.5, 6.2 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.4.4 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A19 · Hepatic dose (minor)

**Was:** No adjustment. <br>Combined severe hepatic + renal impairment: max 2g/day.

**Now:** No adjustment (腎功能正常時)。<br>Combined severe hepatic + renal impairment: max 2g/day，密切監測 (TW仿單: 定時測血中濃度)。<br>嚴重肝功能不全無研究資料 (UK SmPC)；慢性肝病注意 PT 延長 (US FDA)。

**Why:** The core content matches FDA Precautions ("in patients with both hepatic dysfunction and significant renal disease… should not exceed 2 gm daily") and TW 2.2.1 (肝臟受損: 腎功能正常時不需調低劑量). UK SmPC 4.2 adds: "There are no study data in patients with severe hepatic impairment". FDA Effect on Prothrombin Time: monitor PT in "chronic hepatic disease".

**Sources:** US FDA label – PRECAUTIONS – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.2 – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert 2.2.1 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A20 · Notes (minor)

**Was:** t½ 6-9h (longest cephalosporin); 85-95% protein binding; excellent CSF penetration. ... IM: may use 1% lidocaine. ...

**Now:** t½ ~8h (5.8-8.7h, FDA; ~8h SmPC/TW) [‘longest cephalosporin’ unsourced]; 85-95% protein binding; CSF penetration good with inflamed meninges (up to ~25% of plasma; ~2% uninflamed; SmPC 5.2). ... IM: may use 1% lidocaine (含 lidocaine 溶液禁 IV；每部位 ≤1 g). 新生兒 IV 須輸注 60 min.

**Why:** "Longest cephalosporin" has no source; the labels give t½ 5.8–8.7 h (FDA) or about 8 h (SmPC/TW) without a comparison. "Excellent CSF penetration" needs qualifying. UK SmPC 5.2: "up to 25% of plasma levels compared to 2% of plasma levels in patients with uninflamed meninges". The body PK line "inflamed meninges: 10-17% of serum" has no source; the SmPC gives up to 25%. SmPC 4.2: "not more than 1 g should be injected at one site"; lidocaine solution "should never be administered intravenously". FDA/SmPC: neonatal IV doses over 60 min.

**Sources:** UK SmPC 4.2, 5.2 – https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label – CLINICAL PHARMACOLOGY; DIRECTIONS FOR USE; CONTRAINDICATIONS: Lidocaine – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### A21 · Page body (unsupported)

**Was:** Side Effects: Biliary pseudolithiasis/sludge (15-46%, reversible); Notes Clinical Pearls: (15-46%); β-lactam allergy: ~1-3% cross-reactivity; Warfarin: More significant INR elevation than other cephalosporins - prefer alternatives; Monitor: CBC consider at 4-6 weeks; Routine weekly lab monitoring may not be necessary for short courses

**Now:** Biliary pseudolithiasis: 兒童 IV 部分研究 >30% (UK SmPC 4.8)，停藥可逆；其餘數值/建議若無出處請標註為未引用或補上文獻。

**Why:** These figures and recommendations are not in the FDA, SmPC, TW or LactMed sources. SmPC 4.8 says only that "In children, prospective studies have shown a variable incidence of precipitation with intravenous application - above 30 % in some studies." SmPC 4.4 says that during prolonged treatment CBC "should be performed at regular intervals", with no 4–6-week timing. SmPC 4.3 contraindicates ceftriaxone after severe hypersensitivity to ANY beta-lactam, which the body's "avoid if severe/immediate reaction" wording matches. The 1–3% figure has no source. The statements are plausible, so flag them rather than remove them.

**Sources:** UK SmPC 4.3, 4.4, 4.8 – https://www.medicines.org.uk/emc/product/15077/smpc

### A22 · Page body (minor)

**Was:** Side Effects body lacks DRESS, myoclonus/non-convulsive status epilepticus, Jarisch-Herxheimer reaction, kernicterus; lists C. difficile colitis under 'Common (>1%)'

**Now:** Serious/Rare: add "DRESS" (UK SmPC 4.4), "myoclonus, non-convulsive status epilepticus" (US FDA warning), "Jarisch-Herxheimer reaction (spirochete infections; SmPC 4.4)", "kernicterus (neonates)"; move C. difficile colitis to Serious/Rare (already listed there as pseudomembranous colitis).

**Why:** FDA Neurological Adverse Reactions: "encephalopathy…, seizures, myoclonus, and non-convulsive status epilepticus". SmPC 4.4 covers DRESS and JHR. FDA post-marketing lists kernicterus. SmPC 4.8 puts pseudomembranous colitis under the 'Not known' frequency, not common.

**Sources:** US FDA label – WARNINGS: Neurological Adverse Reactions; Post-marketing Experience – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4, 4.8 – https://www.medicines.org.uk/emc/product/15077/smpc

### A23 · Breastfeeding (minor)

**Was:** Compatible (LactMed); low milk levels; RID \~0.5%; monitor infant for diarrhea/thrush

**Now:** Acceptable (LactMed); low milk levels (peak ~0.5–0.7 mg/L after 1 g); infant dose ~0.5% of maternal weight-adjusted dose; monitor infant for diarrhea/thrush

**Why:** The property content matches LactMed ("Ceftriaxone is acceptable in nursing mothers"; "infant dosage of about 0.5% of the maternal weight-adjusted dosage"; "diarrhea or thrush"). The proposed wording uses LactMed's own term. In the body, "Poor oral bioavailability limits infant systemic absorption", "AAP: compatible" and "diaper rash" are not in LactMed or any label, so flag them as unsourced. The FDA/TW labels add "Caution should be exercised" (低濃度分泌於乳汁，授乳婦女請小心使用).

**Sources:** LactMed Ceftriaxone NBK501453 (rev 2024-11-15) – Summary of Use during Lactation; Drug Levels – https://www.ncbi.nlm.nih.gov/books/NBK501453/; US FDA label – Nursing Mothers – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; TW insert 2.5.2 – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A24 · Page body (minor)

**Was:** Formulations: Vials: 250mg, 500mg, 1g, 2g, 10g (pharmacy bulk); Premixed: Available in various volumes

**Now:** Formulations (Cefin 舒復, 衛署藥製字第038615號, TW仿單): 0.25 g, 0.5 g, 1 g, 2 g 乾粉注射劑 (靜脈注射劑). [US generics also: 10 g pharmacy bulk, premixed]

**Why:** The 10 g bulk and premixed forms are US generic presentations, not the stocked product. The TW insert lists 規格: 0.25 g, 0.5 g, 1 g, 2 g. The hospital stocks the 2 g vial (used here only to identify the product).

**Sources:** TW insert header – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### A25 · Page body (missing)

**Was:** 參考資料: https://pubmed.ncbi.nlm.nih.gov/6329638/

**Now:** 參考資料: add US FDA label (DailyMed setid 8351aa37-552d-471d-b293-c564dcb6ec29), UK SmPC (eMC 15077), TW 仿單 Cefin 衛署藥製字第038615號 (TFDA), LactMed NBK501453, plus guideline PMIDs used (33332296, 33942342, 33417672, 9013367, 15494903 for meningitis empiric vancomycin ± ampicillin pearl).

**Why:** The only reference is a 1984 Drugs review (PMID 6329638, which esummary confirms exists: "Ceftriaxone. A review of its antibacterial activity…", Drugs 1984;27:469-527). Every proposed claim must cite a label or guideline. The meningitis empiric-therapy pearl (vancomycin ± ampicillin) has no source; IDSA 2004 (Tunkel, PMID 15494903, checked with esummary) supports it.

**Sources:** US FDA label – https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC – https://www.medicines.org.uk/emc/product/15077/smpc; TW insert – https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; LactMed – https://www.ncbi.nlm.nih.gov/books/NBK501453/; Tunkel AR et al. IDSA bacterial meningitis guideline, Clin Infect Dis 2004;39:1267-84, PMID 15494903 – https://pubmed.ncbi.nlm.nih.gov/15494903/

### B1 · Renal dose, HD, CRRT (error)

**Was:** No adjustment needed. <br>Combined hepatic + severe renal: max 2g/day. <br>HD: not dialyzable, no supplement. <br>CRRT: no adjustment.

**Now:** No adjustment if hepatic function normal. <br>CrCl <10 mL/min: max 2 g/day (Cefin 仿單 2.2.1; UK SmPC 4.2). [US FDA: max 2 g/day only when hepatic dysfunction + significant renal disease coexist.] <br>Severe renal impairment: watch for encephalopathy/seizures (FDA Warnings). <br>HD/PD: not removed; no supplemental dose after dialysis (仿單: 透析病人一般須偵測血漿濃度). <br>CRRT: no dose reduction (CVVH PK similar to normal renal function, Kroh 1996 PMID 9013367; CVVHDF 1 g q24h reached 100% fT>MIC ≤2 mg/L, Ulldemolins 2021 PMID 33559708).

**Why:** The stocked product's Taiwan insert, and the UK SmPC too, cap the dose at 2 g/day when CrCl is below 10 mL/min with normal liver function. The column gives only the FDA combined hepatic+renal cap and says 'No adjustment needed' without qualification. The ground rules say to prefer the stocked product's label. The FDA label (Warnings, Neurological Adverse Reactions) adds that encephalopathy and seizures occurred in severe renal impairment and says to 'make appropriate dosage adjustments in patients with severe renal impairment'. No label covers CRRT, so the existing 'no adjustment' needs a PubMed citation; Kroh 1996 and Ulldemolins 2021 support it.

**Sources:** Cefin 仿單 2.2.1 腎臟受損: '肝功能正常時不需減量。只有在腎衰竭末期前(CrCl < 10 mL/min)，每日劑量不可超過 2 g…透析病人不需在透析後給予額外劑量' https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; UK SmPC 4.2 Patients with renal impairment: 'Only in cases of preterminal renal failure (creatinine clearance < 10 ml/min) should the ceftriaxone dosage not exceed 2 g daily… not removed by peritoneal- or haemodialysis' https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label PRECAUTIONS 'Patients with Renal or Hepatic Impairment' and WARNINGS 'Neurological Adverse Reactions' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; Kroh UF et al. J Clin Pharmacol 1996;36:1114-9, PMID 9013367 https://pubmed.ncbi.nlm.nih.gov/9013367/; Ulldemolins M et al. Eur J Clin Pharmacol 2021;77:1169-80, PMID 33559708 https://pubmed.ncbi.nlm.nih.gov/33559708/

### B2 · Drug Interactions (error)

**Was:** Major: Warfarin (↑INR - monitor closely), IV calcium (separate 48h in adults). <br>Moderate: Probenecid (↑levels).

**Now:** Contraindicated: IV calcium (neonates ≤28 days, incl. TPN); Ca-containing diluents (Ringer's/Hartmann's) for reconstitution/dilution. <br>Major: Warfarin/VKA (↑INR/bleeding – monitor INR during & after therapy); IV calcium (>28 days): 不可同時/同管/Y-site 給藥，可先後給予，但兩次輸注間須以相容溶液徹底沖洗管路. <br>Minor: Chloramphenicol (in vitro antagonism, clinical relevance unknown). <br>Incompatible (勿同管/同針筒混合): aminoglycosides, vancomycin, fluconazole, amsacrine, labetalol. <br>Probenecid: does not affect ceftriaxone elimination. <br>Lab: false-positive Coombs, galactosaemia, non-enzymatic urine glucose; may falsely lower some glucometer readings.

**Why:** All three labels contradict the '48 h separation in adults' rule, which is a withdrawn 2007 recommendation. They allow sequential administration in patients older than 28 days if the line is flushed. All three labels also contradict 'Probenecid ↑levels': they state that probenecid does not change ceftriaxone elimination. Chloramphenicol antagonism and the lab-test interferences are in all three labels but missing from the column.

**Sources:** US FDA label WARNINGS 'Interaction with Calcium-Containing Products'; CLINICAL PHARMACOLOGY 'The elimination of ceftriaxone is not altered when… co-administered with probenecid'; 'Interaction with Other Antimicrobials' (chloramphenicol); 'Influence on Diagnostic Tests'; 'Effect on Prothrombin Time' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.5: 'in patients other than neonates, ceftriaxone and calcium-containing solutions may be administered sequentially… if the infusion lines are thoroughly flushed'; 'Simultaneous administration of probenecid does not reduce the elimination of ceftriaxone'; 6.2 incompatible with aminoglycosides https://www.medicines.org.uk/emc/product/15077/smpc; Cefin 仿單 boxed calcium warning (2)-(4); 2.4.4 'probenecid 不影響排除；chloramphenicol 體外拮抗；與…aminoglycosides 不相容' https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B3 · Page body – Drug Interactions tables (error)

**Was:** IV Calcium products (adults) \| Precipitation risk \| Separate administration by ≥48h; flush lines thoroughly … Probenecid \| ↑ceftriaxone levels (↓renal tubular secretion) \| Generally not clinically significant … Aminoglycosides \| Additive nephrotoxicity; synergistic activity … Oral contraceptives \| Possible ↓efficacy … Live vaccines (BCG, cholera, typhoid): ↓efficacy

**Now:** IV Calcium (patients >28 days): 'Do not give simultaneously or via Y-site; may give sequentially if lines thoroughly flushed with compatible fluid (FDA, SmPC 4.5, 仿單 box)'. Probenecid row: replace with 'No effect on ceftriaxone elimination (FDA, SmPC 4.5, 仿單 2.4.4)', or delete the row. Aminoglycosides: 'Conflicting evidence on ↑nephrotoxicity (SmPC 4.5; 仿單: no ↑nephrotoxicity seen with high-dose AG/furosemide); physically incompatible – administer separately; possible synergy vs Gram-negatives (仿單 2.2)'. Add: 'Chloramphenicol: antagonism in vitro, clinical relevance unknown (FDA, SmPC, 仿單)'. Oral contraceptives and live vaccines rows: flag [unsourced – not in FDA/SmPC/仿單].

**Why:** The labels contradict the 48 h calcium rule and the probenecid mechanism. The aminoglycoside nephrotoxicity claim is stated as fact, but the SmPC calls the evidence conflicting and the insert says no added nephrotoxicity was seen. None of the labels mention the OC or live-vaccine interactions. They are plausible, so flag them rather than delete them.

**Sources:** US FDA label WARNINGS/CLINICAL PHARMACOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.5 and 6.2 https://www.medicines.org.uk/emc/product/15077/smpc; Cefin 仿單 2.2 合併療法, 2.4.4 交互作用 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B4 · Pregnancy (error)

**Was:** Compatible (Category B); crosses placenta; no teratogenicity; safe in clinical use

**Now:** Crosses placenta. Animal studies (mice/rats ≤20× human dose; primates ~3×): no embryotoxicity/teratogenicity. Limited human data – use only if clearly needed / benefit > risk, esp. 1st trimester (FDA, UK SmPC 4.6; 仿單 2.5.1: 人類懷孕安全性未建立). (No letter category – FDA retired A/B/C/D/X.)

**Why:** The FDA retired letter categories, so 'Category B' must not appear as current. 'Safe in clinical use' contradicts all three labels. The FDA says 'no adequate and well-controlled studies… use only if clearly needed', the SmPC says 'limited amounts of data… only if the benefit outweighs the risk', and the insert says safety in pregnancy is not established.

**Sources:** US FDA label PRECAUTIONS 'Teratogenic Effects' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.6 Pregnancy https://www.medicines.org.uk/emc/product/15077/smpc; Cefin 仿單 2.5.1 懷孕 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B5 · Page body – Pregnancy (error)

**Was:** **FDA Category B.** Compatible with pregnancy. … No adequate controlled studies in humans, but extensive clinical experience supports safety. Commonly used for serious infections during pregnancy.

**Now:** Crosses placenta. No teratogenicity/embryotoxicity in animal studies (mice/rats up to 20× human dose; primates ~3×) (FDA). Limited human data (UK SmPC 4.6)；仿單：人類懷孕安全性未建立。Commonly used for serious infections during pregnancy [unsourced]. Use only if clearly needed / when benefit outweighs risk, esp. 1st trimester (FDA; SmPC 4.6).

**Why:** Same reasons as B4. The 20× animal-dose statement is correct per the FDA 'Teratogenic Effects' section.

**Sources:** US FDA label 'Teratogenic Effects' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.6 https://www.medicines.org.uk/emc/product/15077/smpc

### B6 · Notes (error)

**Was:** … Avoid for serious SPACE organism infections (AmpC resistance).

**Now:** … Avoid for invasive infections by E. cloacae complex, K. aerogenes, C. freundii (± Hafnia alvei): moderate risk of clinically significant inducible AmpC → prefer cefepime (IDSA AMR guidance 2024, PMID 39108079). S. marcescens, M. morganii, Providencia: lower AmpC risk – guide by AST. ESBL producers always resistant; Acinetobacter inherently resistant (SmPC 5.1).

**Why:** The 'SPACE' grouping is outdated. IDSA 2024 guidance limits the moderate-to-high AmpC-induction risk to E. cloacae, K. aerogenes and C. freundii, and says clinically significant AmpC is uncommon in S. marcescens, M. morganii and Providencia. Acinetobacter is intrinsically resistant (SmPC 5.1), not an AmpC-induction issue. The SmPC also states that ESBL-producing strains are always resistant.

**Sources:** Tamma PD et al. IDSA 2024 Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections. Clin Infect Dis 2024, PMID 39108079 https://pubmed.ncbi.nlm.nih.gov/39108079/; UK SmPC 5.1 Resistance / inherently resistant organisms / '% ESBL producing strains are always resistant' https://www.medicines.org.uk/emc/product/15077/smpc

### B7 · Page body – Notes 'Clinical Pearls' (SPACE) and Coverage (error)

**Was:** Avoid for serious SPACE organisms: (Serratia, Providencia, Acinetobacter, Citrobacter, Enterobacter) due to inducible AmpC β-lactamase risk → use cefepime or carbapenem. / Coverage lists Citrobacter, Serratia marcescens as covered and also under 'NO coverage: AmpC overproducers (Enterobacter, Serratia, Citrobacter …)'

**Now:** Pearl: 'Avoid for invasive infections by Enterobacter cloacae complex, Klebsiella aerogenes, Citrobacter freundii (inducible AmpC; IDSA AMR guidance 2024, PMID 39108079) → cefepime (carbapenem if ESBL). Serratia/Morganella/Providencia: guide by AST. Acinetobacter: inherently resistant (SmPC 5.1).' Coverage: keep E. coli, Klebsiella, Proteus mirabilis in Gram-negative list with note '(ESBL producers always resistant – SmPC 5.1)'; move Citrobacter, Serratia marcescens, Enterobacter, Morganella to a new line 'Variable – acquired resistance (AmpC/ESBL) may be a problem (SmPC 5.1)'; in NO coverage replace 'AmpC overproducers (Enterobacter, Serratia, Citrobacter - avoid for serious infections)' with 'AmpC-inducible E. cloacae/K. aerogenes/C. freundii – avoid for invasive infections' and change 'anaerobes' to 'Anaerobes: unreliable (Bacteroides etc. acquired resistance; C. difficile resistant)'.

**Why:** The body contradicts itself, listing Citrobacter and Serratia as both covered and not covered. SmPC 5.1 classes C. freundii, Enterobacter, S. marcescens, E. coli, Klebsiella, Bacteroides, Fusobacterium and Peptostreptococcus as 'species for which acquired resistance may be a problem', not inherently resistant. IDSA 2024 contradicts the SPACE list, as explained in B6.

**Sources:** UK SmPC 5.1 https://www.medicines.org.uk/emc/product/15077/smpc; IDSA 2024 AMR guidance PMID 39108079 https://pubmed.ncbi.nlm.nih.gov/39108079/

### B8 · Coverage (missing)

**Was:** Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus

**Now:** Streptococcus, MSSA, E.coli, Klebsiella, Proteus, Haemophilus, Neisseria

**Why:** SmPC 5.1 lists N. gonorrhoeae, N. meningitidis and methicillin-susceptible S. aureus as commonly susceptible. The FDA indications include S. aureus, N. gonorrhoeae and N. meningitidis, and the insert's 2.1 lists 葡萄球菌 and 腦膜炎球菌. Both options exist in the schema. Do not add Pseudomonas, Enterobacter, Serratia or Anaerobes: SmPC 5.1 lists them as inherently resistant or as 'acquired resistance may be a problem'.

**Sources:** UK SmPC 5.1 'Commonly susceptible species' https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; Cefin 仿單 2.1 適應症 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B9 · Indications (missing)

**Was:** Pneumonia, UTI, SSTI, Bacteremia, Meningitis, IAI, Surgical prophylaxis, Sepsis

**Now:** Pneumonia, CAP, HAP, UTI, cUTI, SSTI, cSSTI, Bacteremia, Sepsis, Meningitis, IAI, Pelvic, Osteoarthritis, Endocarditis, FN, Surgical prophylaxis

**Why:** Missing approved indications that have schema options: Endocarditis (SmPC 4.1 'Bacterial endocarditis'); bone and joint infections, which the owner tags 'Osteoarthritis' as in the teicoplanin, imipenem and ceftazidime rows (FDA 'Bone and joint infections', SmPC, 仿單); Pelvic (FDA 'Pelvic inflammatory disease'); FN (SmPC 'neutropenic patients with fever'); CAP, HAP, cUTI and cSSTI (SmPC 4.1 wording). The existing tags are all supported: Sepsis (FDA 'Bacterial septicemia', 仿單 敗血症) and the others.

**Sources:** UK SmPC 4.1 https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### B10 · Side Effects (missing)

**Was:** GI, LFT↑, leukopenia

**Now:** GI, LFT↑, leukopenia, hematologic, thrombocytopenia, anemia, coagulopathy, neurotoxicity, SJS/TEN, DRESS, AKI

**Why:** The current tags leave out the label warnings. Each proposed tag maps to a label item: immune haemolytic anaemia, including fatal cases (FDA Warnings, SmPC 4.4, 仿單 2.4); eosinophilia 6% and thrombocytosis 5% (FDA); thrombocytopenia, which SmPC 4.8 rates common; PT prolongation and coagulopathy (FDA 'Effect on Prothrombin Time', SmPC 4.8); encephalopathy, seizures, myoclonus and NCSE (FDA Warnings 'Neurological Adverse Reactions'); SJS/TEN and DRESS (SmPC 4.4); post-renal acute renal failure from urolithiasis (FDA Warnings). All the proposed options exist in the schema.

**Sources:** US FDA label WARNINGS (Hemolytic Anemia, Neurological Adverse Reactions, Urolithiasis and Post-Renal Acute Renal Failure), ADVERSE REACTIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4, 4.8 https://www.medicines.org.uk/emc/product/15077/smpc; Cefin 仿單 2.4, 2.6 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B11 · Monitor (missing)

**Was:** renal, LFT, CBC

**Now:** renal, LFT, CBC, PT/INR

**Why:** The FDA label says to monitor prothrombin time in patients with impaired vitamin K synthesis or low vitamin K stores, and to monitor coagulation frequently with VKAs. SmPC 4.5 says to monitor INR frequently with oral anticoagulants. The page body already lists PT/INR. 'neuro' is optional for severe renal impairment (FDA neurological warning). CBC is supported: SmPC 4.4 and 仿單 2.4 call for a CBC at regular intervals during prolonged treatment.

**Sources:** US FDA label PRECAUTIONS 'Effect on Prothrombin Time' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4 Long term treatment; 4.5 https://www.medicines.org.uk/emc/product/15077/smpc

### B12 · Pediatric dose (missing)

**Was:** 常見 **IV dose: 70 mg/kg/day **<br><br>50-75 mg/kg/day QD or divided q12h (up to 100 mg/kg/day severe); <br>Meningitis: 100 mg/kg/day divided q12h; <br>Max 4g/day. <br><br>CONTRAINDICATED neonates ≤28 days with IV calcium. <br>Avoid in hyperbilirubinemic neonates.

**Now:** 常見 **IV dose: 70 mg/kg/day ** (within FDA 50-75 mg/kg/day)<br><br>50-75 mg/kg/day QD or divided q12h, max 2 g/day (FDA); severe (cSSTI, bone/joint, FN): 50-100 mg/kg QD, max 4 g (UK SmPC). 仿單: 15天–12歲 20–80 mg/kg QD; ≥50 kg 用成人劑量. <br>Meningitis: 首劑 100 mg/kg (max 4 g)，之後 100 mg/kg/day QD or divided q12h (max 4 g/day) (FDA). <br>AOM: 50 mg/kg IM single dose (max 1 g) (FDA). <br>Neonates 0–14 days: 20–50 mg/kg QD, max 50 mg/kg/day (SmPC/仿單); IV over 60 min (FDA/SmPC). <br>IV ≥50 mg/kg: infuse ≥30 min (仿單/SmPC). <br><br>CONTRAINDICATED: neonates ≤28 days needing IV calcium (incl. TPN); premature neonates up to PMA 41 weeks; hyperbilirubinemic neonates.

**Why:** Several items are missing or need qualification. (1) The column gives no neonatal dose; the insert and SmPC give 20–50 mg/kg/day, max 50. (2) The contraindication in premature neonates (PMA ≤41 weeks) is missing; it is in the FDA label and SmPC 4.3, and the insert says 早產兒. (3) 'Max 4 g/day' for non-meningitis infections conflicts with the FDA label, which says a total daily dose not exceeding 2 g; the SmPC allows up to 4 g, so give both values. (4) No label contains '70 mg/kg/day', so flag it. (5) The FDA label allows meningitis dosing once daily or q12h, not only q12h.

**Sources:** US FDA label DOSAGE AND ADMINISTRATION 'PEDIATRIC PATIENTS', 'NEONATES'; CONTRAINDICATIONS 'Neonates' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.2 Paediatric population, 4.3 https://www.medicines.org.uk/emc/product/15077/smpc; Cefin 仿單 2.2.1 兒童 / 腦膜炎; 2.3 禁忌 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B13 · Adult dose (minor)

**Was:** Blood, IAI, Pneumonia, UTI, SSTI: 1-2g IV QD (可拆成兩劑，q12h給藥)<br>Meningitis: 2g IV q12h<br>Gonorrhea: 500mg IM single dose<br>Surgical prophylaxis: 1g IV 術前0.5-2hr給藥<br>Max 4g/day. Infuse 30 min.

**Now:** Blood, IAI, Pneumonia, UTI, SSTI: 1-2g IV QD (可拆成兩劑，q12h給藥)<br>Severe/endocarditis/FN: 2-4g QD (UK SmPC; 仿單 up to 4g QD)<br>Meningitis: 2g IV q12h (IDSA 2004)<br>Gonorrhea: 500mg IM single dose (CDC 2020; ≥150 kg: 1g) [FDA label still 250 mg]<br>Surgical prophylaxis: 1-2g IV 術前30-90min (仿單; FDA: 1g 0.5-2hr)<br>Duration: ≥48-72h after afebrile/eradication (仿單). Max 4g/day. Infuse ≥30 min (IV push 2-4 min per 仿單).

**Why:** The existing values are supported: 1–2 g once daily or split BID and max 4 g are in the FDA label, and the 30 min infusion is in the SmPC and insert. But the surgical-prophylaxis line follows only the FDA label. The stocked Cefin insert says 1–2 g given 30–90 minutes before surgery, and the SmPC says 2 g given 30–90 minutes before. The gonorrhoea dose of 500 mg matches the SmPC and CDC 2020; the FDA label's 250 mg is outdated. Meningitis 2 g q12h is consistent with SmPC 2–4 g/day (BID allowed above 2 g) and with IDSA.

**Sources:** Cefin 仿單 2.2 / 2.2.1 手術預防 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; UK SmPC 4.2 https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label DOSAGE AND ADMINISTRATION 'ADULTS' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; St Cyr S et al. MMWR 2020;69:1911-6, PMID 33332296 https://pubmed.ncbi.nlm.nih.gov/33332296/; Tunkel AR et al. IDSA bacterial meningitis guideline, Clin Infect Dis 2004, PMID 15494903 https://pubmed.ncbi.nlm.nih.gov/15494903/

### B14 · Page body – Renal Dose table (minor)

**Was:** CrCl <10 mL/min (renal impairment alone) \| No adjustment (max 2g/day recommended) … CRRT \| No adjustment; standard dosing

**Now:** CrCl <10 mL/min (normal hepatic fn) \| Max 2 g/day (Cefin 仿單, UK SmPC); US FDA: no cap unless combined hepatic disease. HD row: add 'FDA: elimination markedly reduced in 6/26 dialysis pts; 仿單: monitor plasma levels'. CRRT row: add 'Kroh 1996 PMID 9013367; Ulldemolins 2021 PMID 33559708'. Add 'Severe renal impairment: risk of encephalopathy/seizures (FDA)'.

**Why:** The current row contradicts itself ('No adjustment' and 'max 2 g/day'). The CRRT row has no source. The FDA Clinical Pharmacology section and the insert both note reduced elimination in some dialysis patients.

**Sources:** Cefin 仿單 2.2.1 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F; US FDA label CLINICAL PHARMACOLOGY Table 4 text https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; PMID 9013367 https://pubmed.ncbi.nlm.nih.gov/9013367/; PMID 33559708 https://pubmed.ncbi.nlm.nih.gov/33559708/

### B15 · Mechanism (minor)

**Was:** Binds PBPs → inhibits cell wall synthesis → bactericidal. Stable against β-lactamases. Time-dependent killing. Long t½ (6-9h).

**Now:** Binds PBPs → inhibits cell wall synthesis → bactericidal. Active in presence of some β-lactamases (penicillinases, cephalosporinases); hydrolysed by ESBL, AmpC, carbapenemases. Time-dependent killing (%fT>MIC). Long t½ (~8h; 5.8-8.7h).

**Why:** 'Stable against β-lactamases' is overstated. The FDA label says 'activity in the presence of some beta-lactamases', and SmPC 5.1 lists hydrolysis by ESBLs, carbapenemases and AmpC as resistance mechanisms. The body's 'High stability against β-lactamases' needs the same fix. %T>MIC is confirmed by SmPC 5.2.

**Sources:** US FDA label 'Mechanism of Action' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 5.1 Resistance; 5.2 PK/PD https://www.medicines.org.uk/emc/product/15077/smpc

### B16 · Hepatic dose (minor)

**Was:** No adjustment. <br>Combined severe hepatic + renal impairment: max 2g/day.

**Now:** No adjustment if renal function normal (仿單; SmPC: mild–moderate; no study data in severe hepatic impairment). <br>Combined hepatic dysfunction + significant renal disease: max 2g/day, close monitoring (FDA; 仿單: 定時測血漿濃度).

**Why:** The cap is correct per the FDA label. SmPC 4.2 adds that there are no data in severe hepatic impairment and that close monitoring is advised in combined severe hepatic and renal impairment.

**Sources:** US FDA label PRECAUTIONS 'Patients with Renal or Hepatic Impairment' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.2 Patients with hepatic impairment https://www.medicines.org.uk/emc/product/15077/smpc

### B17 · Page body – Side Effects (minor)

**Was:** Local: Injection site pain (IM 17% at 350mg/mL) … Biliary pseudolithiasis/sludge (15-46%, reversible)

**Now:** Local: pain/induration/tenderness 1%; warmth/tightness/induration 17% (3/17) after IM 350 mg/mL; injection-site pain 0.6%; phlebitis <1% IV (FDA). Biliary precipitation: >30% in some paediatric IV studies; lower with 20-30 min infusion; usually asymptomatic, reversible (SmPC 4.8). Add: DRESS (SmPC 4.4), Jarisch-Herxheimer reaction in spirochaetal infection (SmPC 4.4), kernicterus (FDA post-marketing).

**Why:** The FDA label gives 17% for warmth, tightness or induration, not for pain. The 15–46% sludge range has no source; the SmPC figure is '>30% in some studies' in children. DRESS and JHR are SmPC warnings missing from the body.

**Sources:** US FDA label ADVERSE REACTIONS / Post-marketing https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; UK SmPC 4.4, 4.8 https://www.medicines.org.uk/emc/product/15077/smpc

### B18 · Page body – Notes (Pharmacokinetics) (minor)

**Was:** Bioavailability: 100% (IM); IV only in clinical practice … CSF penetration: Excellent (inflamed meninges: 10-17% of serum)

**Now:** IM: completely absorbed (FDA/仿單 ~100%); note: Cefin 舒復 is licensed as 靜脈注射劑 (IV) – IM use (with lidocaine diluent, never IV) per FDA/SmPC products. CSF: up to 25% of plasma with inflamed meninges vs ~2% uninflamed (SmPC 5.2). Add: t½ >75 yr 2–3× young adults (SmPC 5.2, 仿單 3.2).

**Why:** 'IV only in clinical practice' is contradicted, because the FDA label and SmPC describe IM use (gonorrhoea, AOM). The stocked Cefin is an IV product, so the note should say that. The 10–17% CSF figure has no source; the SmPC gives up to 25%.

**Sources:** UK SmPC 4.2 Method of administration; 5.2 https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label CLINICAL PHARMACOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29; Cefin 仿單 title/2.2 使用方法/3.2 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B19 · Notes (unsupported)

**Was:** t½ 6-9h (longest cephalosporin); … Biliary pseudolithiasis: ↑risk with high dose, prolonged therapy, fasting, children

**Now:** t½ ~8h (5.8-8.7h; FDA/SmPC) ['longest cephalosporin' unsourced]; 85-95% protein binding; … Biliary pseudolithiasis: ↑risk ≥1 g/day, children (SmPC 4.4; FDA); prolonged therapy, fasting [unsourced; SmPC 4.4 lists severe illness/TPN as biliary-stasis risk factors] - reversible on discontinuation, conservative non-surgical management (avoid surgery) (FDA; SmPC 4.4).

**Why:** No label contains 'longest cephalosporin', 'fasting' or 'prolonged therapy'. These are plausible, so flag them rather than delete them. The SmPC wording is 'doses of 1 g per day and above… paediatric population… conservative nonsurgical management'. The 85–95% protein binding is correct.

**Sources:** UK SmPC 4.4 Biliary lithiasis; 5.2 https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label CLINICAL PHARMACOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### B20 · Page body – Indications / Adult Dose table (unsupported)

**Was:** Indications: … spontaneous bacterial peritonitis (SBP), otitis media, typhoid fever, chancroid; Adult table: Endocarditis 2g IV q24h; Lyme 2g IV q24h × 14-28 days; SBP prophylaxis 1g IV q24h × 7 days

**Now:** Mark as (off-label): SBP treatment and SBP prophylaxis, typhoid fever (FDA: S. typhi in vitro only), chancroid (CDC STI 2021, PMID 34292926). Cite SBP prophylaxis: 1 g IV q24h ≤7 d in advanced cirrhosis + GI bleed (Fernández 2006 PMID 17030175; AASLD 2021 PMID 33942342). Endocarditis (approved, SmPC 4.1): SmPC 2–4 g QD; AHA 2015 PMID 26373316. Lyme: SmPC 2 g QD × 14–21 d; 仿單 50 mg/kg (max 2 g) × 14 d; IDSA 2020 PMID 33417672 (longer courses only in selected scenarios). Add syphilis, AECOPD and febrile neutropenia (SmPC 4.1) to the indications list.

**Why:** Neither the FDA label nor the SmPC lists SBP, typhoid or chancroid; the FDA lists S. typhi as in vitro only. The endocarditis, Lyme and SBP rows need guideline or PubMed sources. The SmPC Lyme duration is 14–21 days, and the 28-day figure applies only to some guideline scenarios.

**Sources:** Fernández J et al. Gastroenterology 2006;131:1049-56, PMID 17030175 https://pubmed.ncbi.nlm.nih.gov/17030175/; Biggins SW et al. AASLD 2021 Practice Guidance, PMID 33942342 https://pubmed.ncbi.nlm.nih.gov/33942342/; Baddour LM et al. AHA 2015 IE statement, PMID 26373316 https://pubmed.ncbi.nlm.nih.gov/26373316/; Lantos PM et al. IDSA/AAN/ACR 2020 Lyme guideline, PMID 33417672 https://pubmed.ncbi.nlm.nih.gov/33417672/; UK SmPC 4.1/4.2 https://www.medicines.org.uk/emc/product/15077/smpc

### B21 · Page body – Breastfeeding (minor)

**Was:** … Poor oral bioavailability limits infant systemic absorption. AAP: compatible with breastfeeding. Monitor infant for diarrhea, oral thrush, diaper rash

**Now:** Keep LactMed figures. Flag 'Poor oral bioavailability limits infant systemic absorption' and 'AAP: compatible with breastfeeding' as [unsourced]. Change last sentence to: 'Monitor infant for diarrhea, oral thrush (GI flora disruption; LactMed); diaper rash [unsourced]; possibility of sensitisation (SmPC 4.6).'

**Why:** LactMed confirms 0.5–0.7 mg/L, a milk half-life of 13–17 h, an infant dose of about 0.5% of the maternal weight-adjusted dose, and 'acceptable'. The AAP and bioavailability statements are not in LactMed or the labels, and diaper rash is not mentioned.

**Sources:** LactMed Ceftriaxone NBK501453 (Summary; Drug Levels) https://www.ncbi.nlm.nih.gov/books/NBK501453/; UK SmPC 4.6 Breastfeeding https://www.medicines.org.uk/emc/product/15077/smpc

### B22 · Page body – Monitor table (minor)

**Was:** CBC with differential \| Baseline; consider at 4-6 weeks if prolonged therapy … Note: Routine weekly lab monitoring may not be necessary for short courses (<2 weeks)

**Now:** CBC \| at regular intervals during prolonged treatment (SmPC 4.4; 仿單 2.4). Flag the 'Routine weekly lab… may not be necessary' note as [unsourced]. Add 'Neuro status in severe renal impairment (FDA)'.

**Why:** The labels say CBC at regular intervals during prolonged treatment; '4–6 weeks' has no source. The FDA neurological warning applies to severe renal impairment.

**Sources:** UK SmPC 4.4 Long term treatment https://www.medicines.org.uk/emc/product/15077/smpc; US FDA label WARNINGS Neurological Adverse Reactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29

### B23 · Page body – Chinese summary (記憶點) (minor)

**Was:** Ceftriaxone 記憶點: 可QD給藥、不用腎調 … 手術感染預防: 1g IV 術前 0.5-2hr 給藥

**Now:** Ceftriaxone 記憶點: 可QD給藥、一般不用腎調 (CrCl <10 每日上限 2 g，仿單/SmPC) … 手術感染預防: 1-2g IV 術前 30-90 分鐘 (仿單；FDA: 1g 術前 0.5-2hr)

**Why:** This brings the summary in line with the stocked product's insert, as in B1 and B13.

**Sources:** Cefin 仿單 2.2.1 https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F

### B24 · Page body – 參考資料 (minor)

**Was:** https://pubmed.ncbi.nlm.nih.gov/6329638/

**Now:** Keep PMID 6329638 and add: Cefin 仿單 (TFDA) https://mcp.fda.gov.tw/im_detail_pdf/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC038615%E8%99%9F ; DailyMed setid 8351aa37-552d-471d-b293-c564dcb6ec29 ; UK SmPC https://www.medicines.org.uk/emc/product/15077/smpc ; LactMed NBK501453

**Why:** PMID 6329638 is real (Richards DM, Drugs 1984, ceftriaxone review), but it is from 1984 and is the only reference. The label sources should be listed.

**Sources:** NCBI esummary PMID 6329638 https://pubmed.ncbi.nlm.nih.gov/6329638/

## Verified correct as written

- Category '3rd cephalosporin' – UK SmPC 5.1: 'Third-generation cephalosporins', ATC J01DD04.
- Adult dose: 1-2 g IV once daily or divided q12h, total max 4 g/day – US FDA DOSAGE: ADULTS ('1 to 2 grams given once a day (or in equally divided doses twice a day)… should not exceed 4 grams'); TW insert 2.2 (1–2 g q24h, up to 4 g).
- Adult meningitis 2 g IV q12h (4 g/day) – consistent with UK SmPC 4.2 (2-4 g/day; 12-hourly may be considered when >2 g/day) and TW (up to 4 g/day).
- Infuse IV over 30 min – US FDA DIRECTIONS FOR USE; UK SmPC 4.2 ('at least 30 minutes'); TW insert ('靜脈輸注至少 30 分鐘').
- Body Adult Dose: duration 4-14 days, S. pyogenes ≥10 days – US FDA ADULTS.
- Gonorrhea 500 mg IM single dose – UK SmPC 4.2; CDC 2020 (PMID 33332296).
- Hepatic dose: no adjustment; combined hepatic + significant renal disease max 2 g/day – US FDA PRECAUTIONS: Patients with Renal or Hepatic Impairment; TW 2.2.1.
- HD/PD: not removed, no supplemental dose after dialysis – US FDA PRECAUTIONS, UK SmPC 4.2, TW 2.2.1/2.7.
- Body renal table rows PD 'Not removed; no adjustment' and combined hepatic+severe renal 'max 2 g/day; monitor closely' – FDA/SmPC.
- Pediatric: contraindicated in neonates ≤28 days needing IV calcium – US FDA CONTRAINDICATIONS, UK SmPC 4.3, TW 2.3 and boxed warning.
- Pediatric 50-75 mg/kg/day QD or divided q12h; meningitis 100 mg/kg/day with 100 mg/kg (max 4 g) loading; >50 kg adult dosing – US FDA PEDIATRIC PATIENTS; TW 2.2.1.
- Body: hyperbilirubinemic neonates – bilirubin displacement → bilirubin encephalopathy – US FDA Pediatric Use/Contraindications; SmPC 4.3; TW 2.3.
- Drug Interactions: contraindicated Ca-containing diluents (Ringer's/Hartmann's) for reconstitution/dilution – US FDA, SmPC 4.5, TW boxed warning.
- Drug Interactions: Warfarin ↑INR, monitor closely – US FDA 'Effect on Prothrombin Time'; UK SmPC 4.5.
- Body Lab Interference: false-positive Coombs, galactosemia, non-enzymatic urine glucose; falsely low readings on some blood glucose meters – US FDA 'Influence on Diagnostic Tests'; SmPC 4.4; TW 2.6.1.1.
- Body Notes 'In non-neonates: may give calcium sequentially if lines flushed thoroughly' – US FDA/SmPC/TW.
- Indications tags Pneumonia, UTI, SSTI, Bacteremia, Sepsis, Meningitis, IAI, Surgical prophylaxis – FDA INDICATIONS (LRTI, SSSI, UTI, septicemia, IAI, meningitis, surgical prophylaxis) and SmPC 4.1 (bacteraemia).
- Body indications gonorrhea, PID, Lyme (disseminated), endocarditis, bone/joint, otitis media, CAP/HAP – FDA and/or SmPC 4.1.
- Coverage tags Streptococcus, E.coli, Klebsiella, Proteus, Haemophilus – FDA microbiology list; SmPC 5.1.
- Body NO coverage of MRSA, Enterococcus, Listeria, ESBL producers, A. baumannii, Stenotrophomonas, Chlamydia, Mycoplasma, Legionella – UK SmPC 5.1 (inherently resistant / methicillin-resistant staphylococci resistant / ESBL always resistant). No Pseudomonas – SmPC 5.1 inherently resistant (although the FDA microbiology list includes P. aeruginosa).
- Side Effects tags GI, LFT↑, leukopenia – FDA ADVERSE REACTIONS (diarrhea 2.7%, AST 3.1%/ALT 3.3%, leukopenia 2.1%).
- Body side-effect frequencies: eosinophilia 6%, thrombocytosis 5%, leukopenia 2%, diarrhea ~3%, rash 1.7%, phlebitis <1% – FDA ADVERSE REACTIONS. Immune hemolytic anemia, SJS/TEN/AGEP, pancreatitis, nephrolithiasis/post-renal AKI, seizures/encephalopathy, fatal neonatal Ca precipitation – FDA Warnings/Post-marketing.
- Monitor tags renal, LFT, CBC – plausible and supported (SmPC 4.4 CBC in prolonged therapy; FDA urolithiasis/post-renal ARF; hepatic enzyme increases).
- Mechanism: PBP binding → cell wall synthesis inhibition → bactericidal; time-dependent (%T>MIC); t½ ~6-9 h – FDA Mechanism of Action, SmPC 5.1/5.2.
- Breastfeeding: low milk levels, infant dose ~0.5%, peak 0.5–0.7 mg/L after 1 g, milk t½ 13–17 h, possible diarrhea/thrush, acceptable – LactMed NBK501453.
- Notes PK: IM bioavailability ~100%; protein binding 85–95% (concentration-dependent); Vd 5.8–13.5 L; 33–67% unchanged in urine with the remainder biliary; t½ 11–15 h in renal impairment; negligible metabolism – FDA CLINICAL PHARMACOLOGY Table 4; SmPC 5.2; TW 3.2.
- Notes: biliary pseudolithiasis is reversible after stopping, with conservative (non-surgical) management; higher risk in children – FDA Gallbladder Pseudolithiasis; SmPC 4.4/4.8.
- Notes: IM may use 1% lidocaine, never IV – FDA/SmPC.
- Notes: no Chlamydia trachomatis activity – FDA INDICATIONS/ADULTS.
- Reference PMID 6329638 exists (Drugs 1984;27:469-527 ceftriaxone review) – checked with NCBI esummary.
- Category '3rd cephalosporin': SmPC 5.1 says 'Third-generation cephalosporins', ATC J01DD04.
- Adult dose: 1–2 g once daily or split q12h, and max 4 g/day (FDA 'ADULTS'; 仿單 up to 4 g QD; SmPC).
- Adult dose: gonorrhoea 500 mg IM single dose (SmPC 4.2; CDC 2020, PMID 33332296 verified).
- Adult dose: IV infusion of 30 min (SmPC 'at least 30 minutes'; 仿單 至少30分鐘).
- Hepatic: no adjustment; max 2 g/day when hepatic dysfunction and significant renal disease coexist (FDA Precautions).
- Renal: HD/PD do not remove the drug and no supplemental post-dialysis dose is needed (FDA, SmPC 4.2, 仿單).
- Drug interactions: IV calcium contraindicated in neonates ≤28 days; Ringer's/Hartmann's must not be used for reconstitution (FDA, SmPC 4.3/4.5, 仿單 box).
- Drug interactions: warfarin/VKA raises INR and bleeding risk, so monitor INR (FDA 'Effect on Prothrombin Time', SmPC 4.5).
- Lab interference in the body: false-positive Coombs, galactosaemia and non-enzymatic urine glucose; some glucometers read falsely low (FDA, SmPC 4.4).
- Pediatric: meningitis 100 mg/kg/day, max 4 g, with a 100 mg/kg initial dose (FDA); 50–75 mg/kg/day QD or q12h (FDA); ≥50 kg uses adult dosing (SmPC, 仿單); avoid in hyperbilirubinemic neonates (FDA, SmPC, 仿單).
- Breastfeeding column: LactMed calls it acceptable, with low milk levels (0.5–0.7 mg/L), an infant dose of about 0.5% of the maternal weight-adjusted dose, and possible diarrhoea or thrush.
- Notes: 85–95% protein binding (FDA 95%→85%; SmPC); IM may be reconstituted with lidocaine but never given IV (SmPC 4.2/4.3); no Pseudomonas coverage (SmPC 5.1 inherently resistant); biliary pseudolithiasis is reversible, so avoid unnecessary surgery (SmPC 4.4, FDA).
- Body PK: t½ 5.8–8.7 h; renal-impairment t½ 11.4–15.7 h; Vd 5.8–13.5 L; 33–67% excreted unchanged in urine with the rest in bile (FDA Clinical Pharmacology).
- Body side effects: eosinophilia 6%, thrombocytosis 5%, leukopenia 2%, diarrhoea ~3% (2.7%), rash 1.7%, phlebitis <1% (FDA); SJS/TEN, AGEP, immune haemolytic anaemia, seizures/encephalopathy, pancreatitis, nephrolithiasis and fatal neonatal Ca precipitation (FDA/SmPC).
- Body: animal reproduction studies at up to 20× the human dose showed no teratogenicity (FDA 'Teratogenic Effects').
- Body adult table: surgical prophylaxis 1 g IV 0.5–2 h pre-op (FDA); duration 4–14 days, S. pyogenes ≥10 days (FDA 'ADULTS').
- Body coverage 'NO coverage' for MRSA, Enterococcus, Pseudomonas, Listeria, ESBL producers, Acinetobacter, Stenotrophomonas, Chlamydia, Mycoplasma and Legionella (SmPC 5.1).
- Indications tags already present (Pneumonia, UTI, SSTI, Bacteremia, Sepsis, Meningitis, IAI, Surgical prophylaxis) are all supported by the FDA label and/or SmPC 4.1.
- Body: meningitis empiric therapy combines with vancomycin ± ampicillin (IDSA 2004, PMID 15494903 verified).
- Reference PMID 6329638 exists (Richards DM et al., Drugs 1984, ceftriaxone review).

## Apply log

- Drug Interactions column: Probenecid '↑levels' replaced with no-interaction statement; IV calcium >28 days sequential/flush rule replaces 48h separation; Warfarin/VKA; Minor chloramphenicol; incompatibilities (aminoglycosides, vancomycin, fluconazole, amsacrine, labetalol); lidocaine IM-not-IV; lab interferences; neonatal contraindication incl. TPN
- Pregnancy column: Category B removed; placenta/animal data/limited human data/use only if clearly needed (FDA, SmPC 4.6, 仿單 2.5.1); no-letter-category note
- Renal dose, HD, CRRT column: hepatic-normal no adjustment; CrCl <10 max 2 g/day (仿單/SmPC) with FDA alternative; combined hepatic+renal; neurotoxicity; HD/PD; CRRT with PMIDs 9013367, 33559708
- Mechanism column: β-lactamase stability corrected (hydrolysed by ESBL/AmpC/carbapenemases), %fT>MIC, t½ ~8h
- Pediatric dose column: FDA/SmPC/仿單 ranges, meningitis loading, AOM, neonates 0-14 d with 60-min infusion, ≥50 kg adult dose, expanded contraindications (TPN, PMA 41 wk, hyperbilirubinemia)
- Hepatic dose column: merged renal-normal no-adjust, combined max 2 g/day, severe hepatic no data, PT prolongation
- Notes column: t½ ~8h with 'longest cephalosporin' flagged unsourced, CSF 25%/2%, biliary risk factors sourced/flagged, lidocaine never IV / ≤1 g per site, neonate 60 min, AmpC organisms per IDSA 2024 PMID 39108079, ESBL/Acinetobacter
- Adult dose column: severe/endocarditis/FN 2-4 g, meningitis IDSA 2004, gonorrhea 500 mg (≥150 kg 1 g, FDA 250 mg outdated), surgical prophylaxis 1-2 g 30-90 min with FDA/SmPC values, duration, infusion
- Breastfeeding column: LactMed 'Acceptable', peak levels, infant dose ~0.5%
- Coverage multi-select: added MSSA, Neisseria
- Indications multi-select: added CAP, HAP, cUTI, cSSTI, Pelvic, Osteoarthritis, Endocarditis, FN
- Side Effects multi-select: added hematologic, thrombocytopenia, anemia, coagulopathy, neurotoxicity, SJS/TEN, DRESS, AKI
- Monitor multi-select: added PT/INR
- Renewed date set to 2026-10-05 (is_datetime 0)
- Body Indications: added AECOPD, syphilis, febrile neutropenia; SBP, typhoid, chancroid marked off-label with citations
- Body Coverage: ESBL note; Citrobacter/Serratia/Enterobacter/Morganella moved to Variable line; NO-coverage AmpC wording updated; anaerobes changed to unreliable with SmPC/FDA detail
- Body Adult Dose table: gonorrhea, surgical prophylaxis, endocarditis (SmPC/AHA 2015), Lyme 14-21 d (SmPC/仿單/IDSA 2020), SBP prophylaxis off-label ≤7 d with PMIDs
- Body Renal table: CrCl<10 max 2 g/day row, HD FDA/仿單 notes, CRRT PMIDs, severe renal encephalopathy/seizure line
- Body Side Effects: local reaction figures (FDA), biliary >30% SmPC with 15-46% flagged, C. difficile moved to Serious, added DRESS, Jarisch-Herxheimer, myoclonus/NCSE, kernicterus
- Body Monitor table: CBC regular intervals (SmPC/仿單), weekly-lab note flagged unsourced, Neuro status row added
- Body Drug Interactions tables: IV calcium >28 days sequential/flush, Probenecid no effect, Aminoglycosides conflicting evidence/incompatible/synergy, Chloramphenicol added, OC and live vaccines flagged unsourced
- Body Pregnancy: Category B removed, sourced text, 'commonly used' flagged unsourced
- Body Breastfeeding: unsourced flags on bioavailability/AAP/diaper rash; LactMed and SmPC sensitisation added
- Body Notes PK: IM absorption and Cefin IV-licensed note, t½ ~8h with elderly 2-3x, CSF 25%/2%; pearls: biliary sourced/flagged, AmpC organisms per IDSA 2024, meningitis empiric PMID 15494903
- Body Formulations: Cefin 0.25/0.5/1/2 g per 仿單 with US generics note
- Body Chinese summary: 一般不用腎調 (CrCl<10 上限 2 g) and surgical prophylaxis 1-2 g 30-90 min
- Body 參考資料 (References): kept PMID 6329638 and added FDA label, UK SmPC, TW 仿單, LactMed, and all guideline/study PMIDs (9013367, 33559708, 33332296, 34292926, 15494903, 33942342, 17030175, 33417672, 26373316, 39108079)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
