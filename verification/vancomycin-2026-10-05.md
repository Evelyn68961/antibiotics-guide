# Verification: Vancomycin

- **Notion entry:** [Vancomycin](https://app.notion.com/262c496dfff1807bab2afd5e3226dcd2)
- **Hospital codes:** UVA01 (Vanco inj 1 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/vancomycin.json` (plus any `sources/vancomycin-taiwan-insert-*.txt`)

## Product and sources

The hospital stocks UVA01, Vancomycin HCl 1 g/vial (NHI AC41443209, ATC J01XA01). This is the U-Liang product "優良"優凡可注射劑 500 毫克、1 公克 (U-VANCO INJECTION "U-LIANG"), 衛署藥製字第041443號, a lyophilised IV powder with no excipients (仿單 1.2: 賦形劑 無). The TFDA structured insert is v2, updated 112/07/18: https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F. Comparator labels: the US DailyMed Mylan vancomycin HCl for injection label (setid 2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf, v10) and the UK SmPC for hameln Vancomycin 1000 mg powder (rev 19/01/2026, eMC 15737). LactMed NBK501263 (rev 2026-09-15) covers breastfeeding. For the PEG 400/NADA pregnancy question I also checked the US Xellia premixed Vancomycin Injection PLR label (setid 60bee69b-be70-412c-9e83-a24a0a8a5e7b). The Notion page was last edited 2026-03-02 and its Renewed date is 2026-01-19.

## Agreed fixes applied in Notion (45)

### A1 · Pregnancy (error)

**Was:** Category C; no teratogenicity evidence; use if indicated; avoid PEG 400/NADA formulations 1st trimester

**Now:** Use only if clearly needed (US FDA label; UK SmPC 4.6; 仿單 6.1: 利益確實勝過對胎兒的潛在危險時才使用). Crosses placenta (cord blood). Controlled study with 2nd/3rd-trimester exposure only: no SNHL/nephrotoxicity attributable to vancomycin; effects of 1st-trimester exposure unknown. Animal data: rat/rabbit teratology negative (SmPC 4.6); US label/仿單: animal reproduction studies not conducted. Pregnant pts may need significantly ↑doses → monitor levels (SmPC 4.2/4.6). PEG 400/NADA boxed warning (avoid in 1st AND 2nd trimester) applies only to premixed Vancomycin Injection (Xellia), not to the stocked lyophilised powder (仿單 1.2: 賦形劑 無).

**Why:** The FDA retired letter categories, and the ground rules forbid writing 'Category C' as current. The PEG 400/NADA warning is wrong in two ways. It covers the first AND second trimesters, not only the first. It also belongs to one premixed formulation (Xellia Vancomycin Injection boxed warning, 8.1), not to vancomycin in general, and the stocked U-VANCO powder has no excipients. All three labels word the pregnancy advice as 'only if clearly needed' or 'benefit outweighs risk'. The SmPC adds that doses may need to be higher and levels monitored.

**Sources:** US FDA label (Mylan) PRECAUTIONS – Pregnancy: 'Vancomycin should be given to a pregnant woman only if clearly needed' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.6 & 4.2 'Pregnancy: Significantly increased doses may be required' https://www.medicines.org.uk/emc/product/15737/smpc; US FDA Xellia Vancomycin Injection BOXED WARNING & 8.1: 'If use of vancomycin is needed during the first or second trimester of pregnancy, use other available formulations' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60bee69b-be70-412c-9e83-a24a0a8a5e7b; Taiwan 仿單 1.2 賦形劑 無; 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A2 · Page body (minor)

**Was:** Pregnancy: FDA Category C (historical). Limited human data; no evidence of teratogenicity. Animal studies negative. May need higher doses (↑Vd, ↑CL). Monitor levels. Avoid PEG 400/NADA-containing formulations in 1st/2nd trimester. Use when clearly indicated.

**Now:** Pregnancy:<br>Use only if clearly needed (FDA/SmPC/仿單). Crosses placenta (cord blood); 2nd/3rd-trimester study: no SNHL/nephrotoxicity attributable to vancomycin; 1st-trimester effects unknown. Animal teratology (rat/rabbit) negative (SmPC 4.6); US label/仿單: animal reproduction studies not conducted. May need significantly higher doses → monitor levels (SmPC 4.2/4.6). PEG 400/NADA warning (1st/2nd trimester) applies only to premixed Vancomycin Injection (Xellia), not to the stocked lyophilised powder (仿單 1.2: no excipients).

**Why:** Remove the letter category, even though it is labelled historical, to keep the entry consistent with the ground rule. Make clear that the PEG/NADA warning is specific to one formulation. The mechanism '↑Vd, ↑CL' is not stated in any label; the SmPC only says doses may need to be significantly higher.

**Sources:** UK SmPC 4.6 https://www.medicines.org.uk/emc/product/15737/smpc; US FDA Xellia Vancomycin Injection 8.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60bee69b-be70-412c-9e83-a24a0a8a5e7b; Taiwan 仿單 1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A3 · Renal dose, HD, CRRT (error)

**Was:** CrCl 30-50: q12-24h; <br>CrCl 10-29: q24-48h; <br>CrCl \<10: q48-96h per levels<br><br>HD: Load 25 mg/kg; redose 500-1000 mg post-HD per level<br>CRRT: Load 15-25 mg/kg; 500-1000 mg q12-24h per modality/flow; TDM required

**Now:** 仿單/US FDA (stocked product): initial dose ≥15 mg/kg at any renal function; maintenance ≈ 15 × CrCl (mL/min) mg/24h (Moellering: CrCl 50→770, 30→465, 10→155 mg/day); 嚴重腎不全: 250-1000 mg once every several days; 功能性無腎: 15 mg/kg then 1.9 mg/kg/24h; anuria: 1 g q7-10d. Adjust by trough (serious MRSA: AUC/MIC).<br>UK SmPC: do not reduce starting dose in mild/moderate impairment; CrCl 20-49: 15-20 mg/kg q24h; CrCl \<20 or RRT: re-dose per levels; prolong interval rather than lower daily dose; critically ill LD 25-30 mg/kg not reduced.<br><br>HD: poorly removed by conventional HD; high-flux ↑clearance → replacement dose after HD per pre-HD level (SmPC). Load 25 mg/kg; 500-1000 mg post-HD [guideline – ASHP 2020, verify]<br>CRRT: ↑clearance → replacement dosing per levels (SmPC); Load 15-25 mg/kg; 500-1000 mg q12-24h per modality/flow [guideline – ASHP 2020, verify]; TDM required

**Why:** No label contains the CrCl interval bands, and the intervals are given without a dose, so the bands conflict with the label for the stocked product. For example, 15-20 mg/kg q12h at CrCl 30-50 is about 2-2.8 g/day for 70 kg, while the 仿單/FDA nomogram gives 465-770 mg/day. The SmPC gives q24h, not q12-24h, for CrCl 20-49. The 仿單 for the stocked product matches the FDA label, so per the ground rules it should be the primary source, with the SmPC's level-guided, interval-prolonging approach alongside. The HD/CRRT load and maintenance numbers are not in any label. They are plausible guideline values; I could reach only the ASHP 2020 executive summary, which confirms loading doses for RRT patients but not the exact numbers, so I flagged them rather than removing them.

**Sources:** Taiwan 仿單 3.3 特殊族群用法用量 (腎功能不全): 初始劑量不應低於15 mg/kg … 1.9 mg/kg/24h … 無尿病人每7至10日 1,000 mg https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US FDA label (Mylan) DOSAGE AND ADMINISTRATION – Patients With Impaired Renal Function: Moellering table; 'In anuria, a dose of 1,000 mg every 7 to 10 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.2 Renal impairment: 'starting dose must not be reduced… high-flux membranes and CRRT increases vancomycin clearance and generally requires replacement dosing' https://www.medicines.org.uk/emc/product/15737/smpc; Rybak MJ et al. ASHP/IDSA/PIDS/SIDP 2020, PMID 32191793 (verified via esummary): 'Loading doses based on actual body weight are suggested for patients… requiring renal replacement therapy' https://pubmed.ncbi.nlm.nih.gov/32191793/ ; https://www.idsociety.org/practice-guideline/vancomycin/

### A4 · Page body (error)

**Was:** Renal Dose table: >50: 15-20 mg/kg q8-12h; 30-50: 15-20 mg/kg q12-24h; 10-29: 15-20 mg/kg q24-48h; <10: 15-20 mg/kg q48-96h; per levels. HD (intermittent): Load 25 mg/kg; redose 500-1000 mg post-HD when level <10-15 (high-flux removes 30-50%). CRRT: Loading 15-25 mg/kg; CVVH 500-750 mg q12h; CVVHD/CVVHDF 750-1000 mg q12-24h

**Now:** Renal Dose / HD / CRRT:<br>**仿單 / US FDA (primary — stocked product):** initial ≥15 mg/kg regardless of renal function; daily maintenance ≈ 15 × CrCl mg (Moellering table: CrCl 100→1545, 80→1235, 60→925, 50→770, 40→620, 30→465, 20→310, 10→155 mg/24h); severe impairment: 250-1000 mg every several days; functionally anephric: 15 mg/kg then 1.9 mg/kg/24h; anuria: 1 g q7-10 days; adjust by measured levels.<br>**UK SmPC (alongside):** do not reduce starting dose in mild/moderate impairment; CrCl 20-49: 15-20 mg/kg q24h; CrCl <20 or RRT: re-dose by levels; prefer longer interval over lower dose.<br>**HD:** conventional HD removes little; high-flux ↑clearance → dose after HD per pre-HD level (SmPC). Load 25 mg/kg; 500-1000 mg post-HD [guideline value — cite ASHP 2020].<br>**CRRT:** ↑clearance → replacement dosing per TDM (SmPC); CVVH/CVVHD(F) maintenance values [guideline — needs citation, e.g. ASHP 2020].

**Why:** No label contains the CrCl table, and it conflicts with the 仿單/FDA nomogram (see A3). The SmPC gives q24h for CrCl 20-49. 'High-flux removes 30-50%' and the CVVH/CVVHDF regimens have no source. The labels say only that vancomycin is poorly removed by conventional dialysis and that high-flux dialysis and CRRT increase clearance.

**Sources:** Taiwan 仿單 3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US FDA label (Mylan) DOSAGE AND ADMINISTRATION – dosage table; OVERDOSAGE 'poorly removed by dialysis… Hemofiltration… increased vancomycin clearance' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.2 Renal impairment; 5.2 Elimination https://www.medicines.org.uk/emc/product/15737/smpc; Rybak 2020 PMID 32191793 https://pubmed.ncbi.nlm.nih.gov/32191793/

### A5 · Notes (error)

**Was:** TDM:<br>AUC/MIC 400-600 (Bayesian preferred); <br>trough 10-15 if AUC unavailable;

**Now:** TDM:<br>Serious MRSA: AUC24/MIC 400-600 (assume MIC 1; Bayesian preferred; reach within 24-48 h) — ASHP/IDSA/PIDS/SIDP 2020 (仿單 3.1 also cites); trough-only monitoring no longer recommended for serious MRSA (↑nephrotoxicity)<br>UK SmPC: trough 10-20 mg/L (15-20 if MIC ≥1); normal renal function: first level day 2, immediately before next dose; IHD pts: level before HD session<br>Infuse ≥60 min or ≤10 mg/min (whichever longer)

**Why:** 'Trough 10-15 if AUC unavailable' has no source. The SmPC gives a trough range of 10-20 mg/L (15-20 for MIC ≥1). ASHP 2020 dropped trough-only monitoring for serious MRSA because troughs were associated with more nephrotoxicity. The AUC/MIC 400-600 target is correct but needs its citation. The infusion-rate rule (FDA, SmPC and 仿單) is safety-critical and appears only in the page body, so it belongs in this column too.

**Sources:** UK SmPC 4.2 Monitoring of vancomycin serum concentrations: 'Therapeutic trough… 10-20 mg/L… 15-20 mg/L… MIC ≥ 1 mg/L' https://www.medicines.org.uk/emc/product/15737/smpc; Rybak 2020 PMID 32191793: 'AUC/MIC ratio of 400–600 mg*hour/L (assuming a broth microdilution MIC of 1 mg/L)'; 'trough monitoring is associated with higher nephrotoxicity' https://www.idsociety.org/practice-guideline/vancomycin/; Taiwan 仿單 3.1 (2020 ASHP AUC/MIC) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US FDA label (Mylan) DOSAGE AND ADMINISTRATION 'no more than 10 mg/min or over a period of at least 60 minutes, whichever is longer' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf

### A6 · Page body (unsupported)

**Was:** Monitor: Trough-only (if AUC unavailable): 10-15 mg/L (avoid 15-20 → ↑nephrotoxicity); Labs: SCr, BUN: baseline → q48-72h initially → weekly; CBC: weekly; Trough: within 30 min pre-dose at steady state (by 4th dose); Audiometry: if >2 weeks or concurrent ototoxins

**Now:** Trough-only: UK SmPC target 10-20 mg/L (15-20 if MIC ≥1); ASHP 2020 no longer recommends trough-only monitoring for serious MRSA (trough 15-20 targets linked to ↑nephrotoxicity).<br>Labs (SmPC 4.4 / 仿單 5.1.2): periodic CBC/leukocyte count (neutropenia usually after ≥1 wk or >25 g total), urinalysis, LFT and renal function in all patients; serial auditory testing in renal failure, age >60, pre-existing hearing loss or concomitant ototoxins.<br>Level timing: SmPC — normal renal function: day 2, immediately before next dose; IHD pts: before HD session. [Steady-state/4th-dose timing and SCr q48-72h schedule: guideline/local practice — cite]

**Why:** The 10-15 trough fallback conflicts with the SmPC's 10-20 mg/L. The SCr q48-72h schedule and 'audiometry if >2 weeks' have no source. The SmPC times the first level on day 2, not by the 4th dose. The page omits the label-required urinalysis and LFT (SmPC 4.4: 'All patients… periodic haematologic studies, urine analysis, liver and renal function tests'; 仿單: 定期做尿分析和血液、肝機能、腎機能檢查).

**Sources:** UK SmPC 4.2 & 4.4 https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 5.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US FDA label (Mylan) PRECAUTIONS (periodic leukocyte count; serial auditory tests) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; Rybak 2020 PMID 32191793 https://pubmed.ncbi.nlm.nih.gov/32191793/

### A7 · Adult dose (unsupported)

**Was:** SSTI, IAI, BSI, Meningitis:** **15-20 mg/kg/dose q8-12h**<br>**常見劑量: 1000mg IVD q12h<br>High-dose: 2000mg IVD q12h<br><br>CDI prophylaxis: 125mg PO QD (5-7d)<br>CDI treatment: 125mg PO QID (10d)

**Now:** **15-20 mg/kg/dose (actual BW) IV q8-12h, max 2 g/dose** (UK SmPC; cSSTI, bone/joint, CAP, HAP/VAP, IE)<br>Seriously ill: loading 25-30 mg/kg (SmPC)<br>US FDA / 仿單: usual 2 g/day = 500 mg q6h or 1 g q12h<br>常見劑量: 1000mg IVD q12h<br>High-dose: 2000mg IVD q12h only when weight-based 15-20 mg/kg/dose reaches 2 g (≈≥100 kg); never >2 g/dose; AUC-guided TDM<br>Infuse ≥60 min or ≤10 mg/min (whichever longer)<br><br>CDI treatment: 125mg PO QID (10d); severe/complicated: 500mg PO QID (10d) (SmPC); US/仿單: 0.5-2 g/day ÷3-4 × 7-10 d; max 2 g/day<br>CDI prophylaxis (off-label, no label): 125mg PO QD (5-7d) — ACG 2021 conditional (PMID 34003176); dose/duration needs citation

**Why:** No label gives 'High-dose: 2000 mg q12h' (4 g/day) as a fixed regimen. The SmPC allows 2 g per dose only as weight-based dosing (15-20 mg/kg), and 2 g/day is the usual dose in the FDA label and 仿單. The column lacks the 2 g/dose cap, the 25-30 mg/kg loading dose and the infusion-rate limit. 'IAI' and 'Meningitis' are not labelled indications (see A9). No label covers oral CDI prophylaxis. ACG 2021 only says it 'may be considered' in high-risk patients during later antibiotic courses, and its dose and duration are not standardised, so the 5-7 day figure needs a citation. The markdown bold markers are also malformed ('…Meningitis:** **…').

**Sources:** UK SmPC 4.2 'Patients aged 12 years and older… 15 to 20 mg/kg… every 8 to 12 hours (not to exceed 2 g per dose)… loading dose of 25-30 mg/kg'; oral CDI 125 mg q6h ×10 d, 500 mg q6h severe https://www.medicines.org.uk/emc/product/15737/smpc; US FDA label (Mylan) DOSAGE AND ADMINISTRATION – Adults 'usual daily intravenous dose is 2 g' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; Taiwan 仿單 3.1 成人每日 2 Gm https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; Kelly CR et al. ACG Clinical Guidelines C. difficile 2021, PMID 34003176 (verified) https://pubmed.ncbi.nlm.nih.gov/34003176/

### A8 · Page body (minor)

**Was:** Adult Dose: CDI treatment: 125 mg PO QID × 10-14 days (severe: 500 mg PO QID); Surgical prophylaxis: 15 mg/kg IV (max 2g) within 120 min pre-incision; Serious infections (BSI, endocarditis, osteomyelitis, meningitis, pneumonia): 15-20 mg/kg/dose IV q8-12h (based on actual BW)

**Now:** Serious infections: 15-20 mg/kg/dose IV q8-12h (total BW), max 2 g/dose (SmPC); US FDA/仿單 usual 2 g/day (500 mg q6h or 1 g q12h).<br>Loading dose (critically ill): 25-30 mg/kg IV × 1 (SmPC).<br>CDI treatment: 125 mg PO QID × 10 days; severe/complicated 500 mg PO QID × 10 days (SmPC; FDA/仿單: 0.5-2 g/day in 3-4 doses × 7-10 d); max 2 g/day.<br>CDI prophylaxis: off-label, no label support; ACG 2021 conditional (PMID 34003176) — dose/duration needs citation.<br>Surgical prophylaxis: 15 mg/kg IV before induction of anaesthesia (max 2 g/dose); a second dose may be needed for long surgery (SmPC 4.2; labelled for pts at high endocarditis risk undergoing major surgery); start within 120 min pre-incision [Bratzler ASHP/IDSA 2013, PMID 23327981].<br>(Meningitis = off-label; see Indications)

**Why:** The SmPC and IDSA give 10 days for CDI, not 10-14. The '120 min' window and the '2 g' cap for prophylaxis come from a guideline, not a label, so they need the Bratzler 2013 citation. Body and property should both carry the 2 g/dose cap.

**Sources:** UK SmPC 4.2 https://www.medicines.org.uk/emc/product/15737/smpc; US FDA label (Mylan) For Oral Administration https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; Bratzler DW et al. Am J Health Syst Pharm 2013, PMID 23327981 (verified) https://pubmed.ncbi.nlm.nih.gov/23327981/

### A9 · Indications (unsupported)

**Was:** Bacteremia, CDI, Endocarditis, IAI, SSTI, Meningitis, Pneumonia, Surgical prophylaxis

**Now:** Bacteremia, CDI, Endocarditis, SSTI, cSSTI, Pneumonia, CAP, HAP, VAP, Osteoarthritis, Surgical prophylaxis (REMOVE IAI and Meningitis tags; keep them in page body marked off-label with guideline citation)

**Why:** Neither the FDA label nor the SmPC lists IAI or meningitis, so under the owner's rule they are not approved indications. Both are guideline or off-label uses (IDSA meningitis 2004; SIS/IDSA cIAI 2010). The labelled indications are missing several tags. The FDA label lists 'bone infections' and the SmPC 'bone and joint infections', so add the existing 'Osteoarthritis' option. The SmPC also lists cSSTI, CAP and HAP including VAP. The FDA label lists septicemia and the 仿單 敗血病, which the existing Bacteremia tag already covers.

**Sources:** US FDA label (Mylan) INDICATIONS AND USAGE: 'endocarditis… septicemia, bone infections, lower respiratory tract infections, skin and skin structure infections… orally for… C. difficile and staphylococcal enterocolitis' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.1: cSSTI, bone and joint infections, CAP, HAP incl. VAP, infective endocarditis, perioperative prophylaxis; oral CDI https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; Tunkel AR et al. IDSA bacterial meningitis 2004, PMID 15494903 (verified) https://pubmed.ncbi.nlm.nih.gov/15494903/; Solomkin JS et al. SIS/IDSA cIAI 2010, PMID 20034345 (verified) https://pubmed.ncbi.nlm.nih.gov/20034345/

### A10 · Page body (minor)

**Was:** Indications: Bacteremia, infective endocarditis, SSTI (complicated/MRSA), osteomyelitis, septic arthritis, HAP/VAP (MRSA), meningitis, intra-abdominal infections, CDI (oral), staphylococcal enterocolitis (oral), surgical prophylaxis (β-lactam allergy/MRSA risk), febrile neutropenia, catheter-related BSI

**Now:** Indications:<br>Labelled (FDA/SmPC/仿單): serious MRSA/β-lactam-resistant staphylococcal infections (incl. penicillin-allergic pts); bacteremia/septicemia (incl. catheter-related staphylococcal BSI), infective endocarditis (staph; viridans/S. bovis ± AG; enterococcal only with AG; diphtheroid), cSSTI, bone & joint (osteomyelitis, septic arthritis), CAP, HAP/VAP, perioperative prophylaxis in pts at high endocarditis risk undergoing major surgery (SmPC); oral: CDI and staphylococcal enterocolitis.<br>Off-label / guideline-based: meningitis (IDSA 2004, PMID 15494903), intra-abdominal infection (SIS/IDSA 2010, PMID 20034345), febrile neutropenia — selected situations only (IDSA 2010, PMID 21258094); surgical prophylaxis for β-lactam allergy/MRSA risk (Bratzler 2013, PMID 23327981).

**Why:** Separate the labelled indications from the off-label ones. Meningitis, IAI and febrile neutropenia appear in no label. The FDA label's statement on enterococcal endocarditis ('effective only in combination with an aminoglycoside') is relevant and missing. The '(β-lactam allergy/MRSA risk)' qualifier for surgical prophylaxis comes from a guideline (Bratzler 2013), not a label.

**Sources:** US FDA label (Mylan) INDICATIONS AND USAGE https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.1 https://www.medicines.org.uk/emc/product/15737/smpc; PMID 15494903 https://pubmed.ncbi.nlm.nih.gov/15494903/; PMID 20034345 https://pubmed.ncbi.nlm.nih.gov/20034345/; PMID 23327981 https://pubmed.ncbi.nlm.nih.gov/23327981/

### A11 · Pediatric dose (unsupported)

**Was:** Neonates: 10-15 mg/kg q8-12h; <br>Children: 40-60 mg/kg/day ÷q6-8h; <br>Severe MRSA: 60-80 mg/kg/day ÷q6h; Max 2g/dose

**Now:** Neonates (仿單/FDA): 15 mg/kg ×1, then 10 mg/kg q12h (1st week) → q8h until 1 month; premature: longer intervals, monitor levels. SmPC: 15 mg/kg q24h (PMA \<29 wk) / q12h (29-35 wk) / q8h (\>35 wk)<br>1 mo-\<12 y: 10-15 mg/kg q6h (40-60 mg/kg/day) (SmPC; FDA/仿單 10 mg/kg q6h); ≥12 y: adult dosing, max 2 g/dose<br>Severe MRSA (guideline, AUC-guided): 60-80 mg/kg/day ÷q6h [ASHP 2020 — verify]; SmPC: \>60 mg/kg/day not generally recommended<br>Oral CDI: 10 mg/kg PO q6h ×10d (SmPC) / 40 mg/kg/day ÷3-4 (FDA); max 2 g/day

**Why:** The SmPC (4.4) warns that 'higher doses than 60 mg/kg/day cannot be generally recommended', which conflicts with an unqualified 60-80 mg/kg/day. That regimen is guideline-based (ASHP 2020 pediatric section), which I could not check in full text. Every label doses children q6h, not q6-8h. The neonatal line lacks the initial 15 mg/kg dose and the age- and PMA-based intervals. The SmPC applies the 2 g/dose cap to patients aged 12 and over. Oral CDI dosing for children is missing from this column.

**Sources:** US FDA label (Mylan) DOSAGE AND ADMINISTRATION – Pediatric patients / Neonates; For Oral Administration https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.2 (PMA table, 1 mo-<12 y 10-15 mg/kg q6h, oral 10 mg/kg q6h) & 4.4 Paediatric population https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 3.1 小兒/嬰兒及新生兒 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; Rybak 2020 PMID 32191793 https://pubmed.ncbi.nlm.nih.gov/32191793/

### A12 · Page body (minor)

**Was:** Pediatric table: Neonates ≤7 days: Load 15-20 mg/kg × 1; then 10-15 mg/kg q12h; Neonates >7 days 10-15 mg/kg q8h; Infants/Children ≥1 mo 40-60 mg/kg/day ÷ q6-8h; Severe MRSA 60-80 mg/kg/day ÷ q6h; CDI (oral) 10 mg/kg/dose QID (max 125-500 mg) × 10d

**Now:** Neonates ≤7 d: 15 mg/kg ×1, then 10 mg/kg q12h (FDA/仿單); >7 d to 1 mo: 10 mg/kg q8h; premature: longer intervals — SmPC PMA table (15 mg/kg q24h <29 wk / q12h 29-35 wk / q8h >35 wk); monitor levels. Infants/children ≥1 mo: 10-15 mg/kg q6h (40-60 mg/kg/day) (SmPC; FDA/仿單 10 mg/kg q6h). Severe MRSA (CNS, BSI, endocarditis): 60-80 mg/kg/day ÷q6h [ASHP 2020 guideline, AUC-guided — verify; SmPC: >60 mg/kg/day not generally recommended]. Max single dose 2 g (≥12 y, SmPC). CDI (oral): 10 mg/kg q6h × 10 d (SmPC; FDA 40 mg/kg/day ÷3-4 × 7-10 d), max 2 g/day; per-dose cap 125 mg (500 mg if severe) [IDSA/SHEA 2017, PMID 29462280 — verify].

**Why:** 'Load 15-20 mg/kg' and 'max 125-500 mg' per oral dose have no source; the labels give 15 mg/kg and a 2 g/day maximum. The SmPC's caution about doses above 60 mg/kg/day should appear next to the 60-80 mg/kg/day regimen.

**Sources:** US FDA label (Mylan) DOSAGE AND ADMINISTRATION https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.2/4.4 https://www.medicines.org.uk/emc/product/15737/smpc

### A13 · Drug Interactions (missing)

**Was:** ↑Nephro/ototoxicity: aminoglycosides, piperacillin/tazobactam, amphotericin B, NSAIDs, loop diuretics, colistin, contrast

**Now:** ↑Nephro/ototoxicity: aminoglycosides, piperacillin/tazobactam (↑AKI vs vanco alone — monitor SCr; Xellia label 7.2, SmPC 4.5), amphotericin B, NSAIDs, loop diuretics, colistin, polymyxin B, bacitracin, viomycin, cisplatin (FDA/SmPC); IV contrast [not in labels — needs citation]<br>Anaesthetic agents: erythema, histamine-like flushing, anaphylactoid reactions; ↑anaesthetic myocardial depression → infuse vanco over ≥60 min before induction (FDA/SmPC 4.4-4.5/仿單 7)<br>PO for CDI: avoid anti-motility agents; reconsider PPIs (SmPC 4.4/4.5)

**Why:** All three labels list anaesthetic agents. It is the only interaction named in the 仿單 for the stocked product, yet it is missing here. The FDA and SmPC also list polymyxin B, bacitracin, cisplatin and viomycin. No label mentions IV contrast, so flag it as unsourced.

**Sources:** UK SmPC 4.5: 'amphotericin B, aminoglycosides, bacitracin, polymixin B, colistin, viomycin, cisplatin, loop diuretics, piperacillin/tazobactam and NSAIDs'; 4.4 anaesthetic myocardial depression https://www.medicines.org.uk/emc/product/15737/smpc; US FDA label (Mylan) PRECAUTIONS – Drug Interactions (anesthetic agents; amphotericin B, aminoglycosides, bacitracin, polymixin B, colistin, viomycin, cisplatin) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; US FDA Xellia Vancomycin Injection 7.2 Piperacillin-Tazobactam https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60bee69b-be70-412c-9e83-a24a0a8a5e7b; Taiwan 仿單 7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A14 · Page body (unsupported)

**Was:** Drug interactions table rows: Piperacillin/tazobactam ↑AKI risk 2-3× vs cefepime/meropenem; Acyclovir ↑Nephrotoxicity; Neuromuscular blockers Prolonged blockade; Warfarin Potential ↑INR; IV contrast ↑Nephrotoxicity (no anaesthetic-agent row)

**Now:** Pip/tazo row: '↑AKI vs vanco alone (FDA label 7.2); observational meta-analysis OR 2.68 vs vanco+cefepime/carbapenem (Luther 2018, PMID 29088001); RCT ACORN 2023 (77% on vanco) found no ↑AKI with pip/tazo vs cefepime (PMID 37837651) — monitor SCr'. Add row: 'Anaesthetic agents \| erythema, histamine-like flushing, anaphylactoid reactions; give vanco over ≥60 min before induction (FDA/SmPC/仿單)'. Add row: 'Polymyxin B, bacitracin, cisplatin \| ↑nephro/ototoxicity (FDA/SmPC)'. Acyclovir, NMB, warfarin, IV contrast rows: mark [not in labels — needs citation] or remove if no source is found.

**Why:** The '2-3×' figure comes from observational data (Luther 2018), and the ACORN RCT did not confirm it, so state the evidence accurately. None of the labels mention acyclovir, neuromuscular blockers, warfarin or contrast. The anaesthetic interaction appears in every label and is missing from the table.

**Sources:** Luther MK et al. Crit Care Med 2018, PMID 29088001 (verified) https://pubmed.ncbi.nlm.nih.gov/29088001/; Qian ET et al. ACORN, JAMA 2023, PMID 37837651 (verified) https://pubmed.ncbi.nlm.nih.gov/37837651/; US FDA Xellia Vancomycin Injection 7.1-7.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60bee69b-be70-412c-9e83-a24a0a8a5e7b; UK SmPC 4.5 https://www.medicines.org.uk/emc/product/15737/smpc

### A15 · Coverage (missing)

**Was:** MSSA, MRSA, Streptococcus, Enterococcus, MRSE

**Now:** MSSA, MRSA, MRSE, Staphylococcus, Streptococcus, Enterococcus, E. faecalis, Corynebacterium, Listeria, Bacillus

**Why:** The FDA label lists S. epidermidis and the SmPC coagulase-negative staphylococci and Staphylococcus spp., which supports adding 'Staphylococcus'. The FDA and SmPC both name E. faecalis explicitly, while E. faecium has acquired resistance, which supports adding 'E. faecalis'. The FDA label lists diphtheroids among organisms with clinical activity, which supports 'Corynebacterium'. Listeria (FDA, in vitro only) and Bacillus (仿單, in vitro only) are already in the body's coverage table and could be added with an 'in vitro' note in the body.

**Sources:** US FDA label (Mylan) CLINICAL PHARMACOLOGY – MICROBIOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 5.1 Commonly susceptible species https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 10.2 微生物學 (Bacillus sp., Listeria in vitro) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A16 · Page body (minor)

**Was:** Coverage table: MSSA ✓ (inferior to β-lactams); Listeria ✓; Bacillus ✓; No activity: Gram-negatives, VRE, VISA (MIC 4-8), VRSA (MIC ≥16)

**Now:** Listeria ✓ (in vitro only — clinical significance unknown, FDA); Bacillus spp. ✓ (in vitro, 仿單 10.2); Enterococcus: E. faecalis ✓ (AG combination needed for endocarditis), E. faecium — acquired resistance may be a problem (SmPC 5.1).<br>No activity: Gram-negatives, mycobacteria, fungi (FDA/仿單); inherently resistant: Erysipelothrix rhusiopathiae, Leuconostoc, Pediococcus, heterofermentative Lactobacillus, Clostridium innocuum (SmPC 5.1); VRE, VRSA (MIC ≥16); VISA: reduced susceptibility (MIC 4-8).<br>MSSA 'inferior to β-lactams': [needs citation]

**Why:** The FDA label says Listeria data are in vitro only. The SmPC lists intrinsically resistant species, and the FDA label notes no activity against mycobacteria and fungi; neither appears in the table. 'Inferior to β-lactams' has no label source and needs a citation.

**Sources:** US FDA label (Mylan) MICROBIOLOGY https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 5.1 https://www.medicines.org.uk/emc/product/15737/smpc; Liu C et al. IDSA MRSA 2011, PMID 21208910 (verified) https://pubmed.ncbi.nlm.nih.gov/21208910/

### A17 · Side Effects (missing)

**Was:** Red-man syndrome, nephrotoxicity, ototoxicity, neutropenia, thrombocytopenia, DRESS, SJS/TEN

**Now:** Red-man syndrome, nephrotoxicity, AKI, ototoxicity, neutropenia, thrombocytopenia, DRESS, SJS/TEN, thrombophlebitis, LFT↑

**Why:** The SmPC 4.8 lists phlebitis and raised ALT/AST as common, and the FDA label and 仿單 describe thrombophlebitis. The FDA warnings name 'acute kidney injury (AKI)' explicitly. All the tags I propose are existing schema options. Optional: 'hematologic', which would cover agranulocytosis, eosinophilia, pancytopenia and haemolytic anaemia.

**Sources:** UK SmPC 4.8 tabulated list (Hepatobiliary: Common ALT/AST increased; General: Common phlebitis) https://www.medicines.org.uk/emc/product/15737/smpc; US FDA label (Mylan) WARNINGS – Nephrotoxicity (AKI); PRECAUTIONS (thrombophlebitis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; Taiwan 仿單 5.1.2 / 8.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A18 · Page body (missing)

**Was:** Side Effects: Common: Red man syndrome (flushing, pruritus, hypotension — infusion rate-related), phlebitis, nausea; Serious: Nephrotoxicity (AKI), ototoxicity (hearing loss, tinnitus), neutropenia (reversible), thrombocytopenia, DRESS, SJS/TEN, interstitial nephritis, anaphylaxis (rare)

**Now:** Common: vancomycin infusion reaction ('red man': flushing, pruritus, hypotension — rate-related), phlebitis, ALT/AST↑, ↑SCr/urea; nausea (rare)<br>Serious: AKI/nephrotoxicity, interstitial nephritis, ototoxicity (hearing loss, tinnitus, vertigo), reversible neutropenia (≥1 wk or >25 g), agranulocytosis, thrombocytopenia, SCARs (SJS/TEN, DRESS, AGEP, linear IgA bullous dermatosis), anaphylaxis, vasculitis, drug fever, Kounis syndrome, CDAD; HORV after intracameral/intravitreal use (not an approved route)

**Why:** The SmPC rates nausea as rare, not common. Several label warnings are missing: AGEP, LABD, HORV, CDAD, Kounis syndrome, vasculitis and agranulocytosis. The SmPC now uses 'vancomycin infusion reaction' as the name.

**Sources:** US FDA label (Mylan) WARNINGS (Severe Dermatologic Reactions incl. AGEP/LABD; CDAD; HORV) & ADVERSE REACTIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.4 (Kounis, HORV, SCARs) & 4.8 (Gastrointestinal: Rare nausea) https://www.medicines.org.uk/emc/product/15737/smpc

### A19 · Monitor (missing)

**Was:** renal, CBC

**Now:** renal, CBC, LFT

**Why:** The SmPC requires periodic liver function tests in all patients, and the 仿單 for the stocked product requires periodic 肝機能 testing. Audiometry and drug levels have no schema option, so they stay in the body and Notes.

**Sources:** UK SmPC 4.4 'All patients receiving vancomycin should have periodic haematologic studies, urine analysis, liver and renal function tests' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 5.1.2 '所有使用本藥之病人應定期做尿分析和血液、肝機能、腎機能檢查' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A20 · Mechanism (minor)

**Was:** Binds D-ala-D-ala → inhibits cell wall synthesis (transglycosylation/transpeptidation); bactericidal (bacteriostatic vs enterococci)

**Now:** Binds D-ala-D-ala → inhibits cell wall synthesis (transglycosylation/transpeptidation); also alters membrane permeability & RNA synthesis; slowly bactericidal (concentration-independent; AUC/MIC is the predictive index — SmPC 5.1); enterococci: bacteriostatic — aminoglycoside combination needed for enterococcal endocarditis (FDA/仿單)

**Why:** The FDA label, SmPC and 仿單 all add the effects on membrane permeability and RNA synthesis. The SmPC says 'slowly bactericidal' and names AUC/MIC as the predictive PK/PD index. No label states 'bacteriostatic vs enterococci' directly, but the FDA label supports it indirectly by saying enterococcal endocarditis responds only with an aminoglycoside.

**Sources:** US FDA label (Mylan) MICROBIOLOGY & INDICATIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 5.1 Mechanism of action; PK/PD relationship https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 10.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A21 · Page body (unsupported)

**Was:** Notes: CSF penetration: 30-50% (inflamed meninges); consider higher doses or intrathecal for CNS infections; Oral vancomycin NOT absorbed → only for CDI/GI infections; Tissue penetration: good (bone, lung, peritoneal); Half-life: 4-6h (normal renal); up to 7-10 days (anuria); extend to 90-120 min if prior infusion reaction; Premedicate with diphenhydramine 25-50 mg

**Now:** Infuse over ≥60 min or ≤10 mg/min, whichever longer (FDA/SmPC/仿單); extend to 90-120 min if prior infusion reaction; premedicate with diphenhydramine 25-50 mg if history of infusion reaction [practice — needs citation].<br>CSF: poor across normal meninges; penetrates when inflamed (FDA/SmPC/仿單) [30-50% figure needs citation]. Intrathecal/intraventricular use: safety & efficacy not established (FDA/SmPC/仿單).<br>Oral vancomycin: poorly absorbed → only for CDI/staphylococcal enterocolitis, not systemic; clinically significant serum levels reported in C. difficile colitis/inflamed mucosa, esp. with renal impairment — monitor levels (FDA PRECAUTIONS; SmPC 4.2/4.4/5.2).<br>Distribution: inhibitory levels in pleural, pericardial, ascitic, synovial fluid, urine, PD fluid, atrial appendage tissue (FDA/仿單 11) [bone/lung claims need citation].<br>Half-life 4-6 h (normal renal); mean 7.5 days in anephric (FDA/SmPC).<br>Contraindication: hypersensitivity to vancomycin (FDA/SmPC/仿單); do not give IM — necrosis (SmPC 4.3; 仿單); caution with teicoplanin allergy — cross-hypersensitivity incl. fatal anaphylaxis (SmPC 4.4). <span color="red">`Not for intracameral/intravitreal use`</span>: HORV with permanent vision loss (FDA/SmPC).

**Why:** No source supports 'CSF 30-50%', and the labels say only that the drug penetrates inflamed meninges. Suggesting intrathecal use goes against the labels, which say its safety and efficacy are not established. 'NOT absorbed' overstates the labels, which warn of significant serum levels in colitis. The labels list fluid compartments, not bone or lung. The labelled anephric half-life is 7.5 days. The premedication dose and the 90-120 min infusion have no source. The page body has no contraindications section, although it is label content.

**Sources:** US FDA label (Mylan) CLINICAL PHARMACOLOGY; PRECAUTIONS; CONTRAINDICATIONS https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.3, 4.4, 5.2 https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan 仿單 3.1/5.1.2/11 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### A22 · Page body (unsupported)

**Was:** Notes: Continuous infusion: target Css 20-25 mg/L; may be renal-protective vs high-trough intermittent dosing; MIC ≥2 mg/L → consider alternative (daptomycin, linezolid, ceftaroline)

**Now:** Continuous infusion: may be considered, e.g. unstable vancomycin clearance (SmPC 4.2); loading dose by actual BW (ASHP 2020); target Css 20-25 mg/L (≈AUC24 480-600) [ASHP 2020, PMID 32191793 — verify full text]; may be renal-protective vs high-trough intermittent dosing [needs citation].<br>MIC ≥2 mg/L: AUC/MIC ≥400 unlikely with usual doses (SmPC 5.1: MIC ≥1 already needs upper-range dosing) → consider alternative (daptomycin, linezolid, ceftaroline) guided by clinical response [IDSA MRSA 2011, PMID 21208910; ASHP 2020 — verify MIC cut-off in full text].

**Why:** Both statements are plausible but come from guidelines, not labels, so they need citations. The SmPC does support considering continuous infusion. Neither label covers the MIC ≥2 switch recommendation.

**Sources:** UK SmPC 4.2 'Continuous vancomycin infusion may be considered' https://www.medicines.org.uk/emc/product/15737/smpc; Rybak 2020 PMID 32191793 https://pubmed.ncbi.nlm.nih.gov/32191793/; Liu C 2011 PMID 21208910 https://pubmed.ncbi.nlm.nih.gov/21208910/

### A23 · Page body (minor)

**Was:** Breastfeeding: Compatible. Low milk levels (~12.7 mg/L in colostrum). Poor oral bioavailability (<10%) → minimal systemic infant exposure. Theoretical GI flora disruption. LactMed: no special precautions required.

**Now:** Compatible (LactMed: no special precautions required). Single colostrum level 12.7 mg/L → max infant dose ≈1.9 mg/kg/day (~4.8% of the infant oral CDI dose of 40 mg/kg/day); poorly absorbed orally → unlikely to reach infant bloodstream (LactMed; SmPC 4.6). Labels (FDA/SmPC/仿單): excreted in milk — use with caution. [Theoretical GI flora disruption: not in LactMed — needs citation]

**Why:** '<10%' and 'theoretical GI flora disruption' do not appear in the LactMed vancomycin record. Adding the infant-dose estimate from LactMed and the labels' caution statement makes the entry complete.

**Sources:** LactMed Vancomycin NBK501263 (rev 2026-09-15) Summary & Drug Levels https://www.ncbi.nlm.nih.gov/books/NBK501263/; UK SmPC 4.6 Breast-feeding https://www.medicines.org.uk/emc/product/15737/smpc; US FDA label (Mylan) Nursing Mothers https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf

### B1 · Pregnancy (error)

**Was:** Category C; no teratogenicity evidence; use if indicated; avoid PEG 400/NADA formulations 1st trimester

**Now:** FDA letter categories retired. 仿單/US/UK: use only if clearly needed (僅在利益確實勝過胎兒風險時使用). Vancomycin crosses into cord blood; in a controlled study with 2nd/3rd-trimester exposure there was no SNHL or nephrotoxicity attributable to vancomycin. UK SmPC: rat/rabbit teratology studies negative; pregnant women may need significantly higher doses, so monitor levels. PEG 400/NADA warning applies ONLY to the premixed Xellia Vancomycin Injection bag (avoid in 1st/2nd trimester); it does not apply to powder vials (UVA01 has no excipients).

**Why:** Writing 'Category C' as current breaks the ground rule. The PEG/NADA boxed warning covers the 1st AND 2nd trimester, not only the 1st, and it is specific to one premixed US product, not the stocked powder (Taiwan insert 1.2: 賦形劑 無). The column also misses the label point that pregnancy may need higher doses.

**Sources:** US DailyMed Mylan label, PRECAUTIONS > Pregnancy Teratogenic Effects: 'Vancomycin was found in cord blood. No sensorineural hearing loss or nephrotoxicity attributable to vancomycin was noted... should be given to a pregnant woman only if clearly needed' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.6: 'Teratology studies... rats... rabbits... no evidence of harm... pregnant patients may require significantly increased doses'; 4.2 Pregnancy https://www.medicines.org.uk/emc/product/15737/smpc; DailyMed Xellia Vancomycin Injection (premix) Boxed Warning: 'If use of vancomycin is needed during the first or second trimester of pregnancy, use other available formulations... contains the excipients polyethylene glycol (PEG 400) and N-acetyl D-alanine (NADA)' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60bee69b-be70-412c-9e83-a24a0a8a5e7b; Taiwan insert 1.2 賦形劑: 無; 6.1 懷孕 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B2 · Renal dose, HD, CRRT (unsupported)

**Was:** CrCl 30-50: q12-24h; CrCl 10-29: q24-48h; CrCl <10: q48-96h per levels; HD: Load 25 mg/kg; redose 500-1000 mg post-HD per level; CRRT: Load 15-25 mg/kg; 500-1000 mg q12-24h per modality/flow; TDM required

**Now:** 仿單 (UVA01) / US label: initial dose ≥15 mg/kg at any degree of renal impairment; then adjust by trough (serious MRSA: AUC/MIC). US Moellering table: maintenance ≈ 15 × CrCl (mL/min) mg/24h (e.g. CrCl 50 → 770 mg/day; 30 → 465; 10 → 155). Functionally anephric/dialysis: 15 mg/kg, then 1.9 mg/kg/24h; marked impairment: 250-1000 mg every several days; anuria: 1 g every 7-10 days.<br>UK SmPC: do not reduce the starting dose in mild/moderate impairment, nor a 25-30 mg/kg load in critically ill pts; CrCl 20-49: 15-20 mg/kg q24h; CrCl \<20 or RRT: next dose per levels (prolong interval rather than reduce dose).<br><br>HD: poorly removed by conventional IHD; high-flux ↑clearance → replacement dose after HD, level drawn before HD (UK SmPC). Load 25 mg/kg; 500-1000 mg post-HD per level [guideline value – verify vs ASHP 2020, PMID 32191793]<br>CRRT: ↑clearance → replacement dosing per levels (UK SmPC); load by actual BW (ASHP 2020 exec summary, PMID 32658968); 15-25 mg/kg load, 500-1000 mg q12-24h per modality/flow [verify vs ASHP 2020 full text; UK: do not reduce 25-30 mg/kg load in critically ill]; TDM required

**Why:** The CrCl-band interval table matches none of the three labels. The stocked product's insert (= US label) gives an initial dose ≥15 mg/kg, the anephric 1.9 mg/kg/24h, and anuria 1 g q7-10d, and none of these is in the column. UK gives q24h for CrCl 20-49, not q12-24h for 30-50. The fixed HD/CRRT numbers (25 mg/kg load, 500-1000 mg; 15-25 mg/kg load) are plausible but cite no source. The ASHP executive summary only confirms that loading doses by actual body weight are suggested for RRT. For CRRT the loading range starting at 15 mg/kg is below the UK instruction not to reduce a 25-30 mg/kg load in critically ill patients.

**Sources:** Taiwan insert 3.3 特殊族群用法用量: '任何程度的腎功能不全者其初始劑量皆不應低於15 mg/kg... 維持劑量為1.9 mg/kg/24h... 無尿病人...每7至10日，投與1,000 mg' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US DailyMed Mylan, DOSAGE AND ADMINISTRATION > Patients With Impaired Renal Function: Moellering table '...about 15 times the glomerular filtration rate...'; '1.9 mg/kg/24 hr'; 'In anuria, a dose of 1,000 mg every 7 to 10 days' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.2 Renal impairment: 'starting dose must not be reduced... prolong the interval... 15 to 20 mg/kg... every 24 hours in patients with creatinine clearance between 20 to 49 mL/min... high-flux membranes and CRRT increases vancomycin clearance and generally requires replacement dosing'; 'initial loading dose (25 to 30 mg/kg) should not be reduced' https://www.medicines.org.uk/emc/product/15737/smpc; ASHP/IDSA/PIDS/SIDP 2020 executive summary (PMID 32658968): 'Loading doses based on actual body weight are suggested for patients who are critically ill, requiring renal replacement therapy, or receiving continuous infusion therapy' https://www.idsociety.org/practice-guideline/vancomycin/

### B3 · Pediatric dose (error)

**Was:** Neonates: 10-15 mg/kg q8-12h; Children: 40-60 mg/kg/day ÷q6-8h; Severe MRSA: 60-80 mg/kg/day ÷q6h; Max 2g/dose

**Now:** Neonates (仿單/US): 15 mg/kg ×1, then 10 mg/kg q12h (1st week) → q8h until 1 month; UK by PMA: \<29 wk 15 mg/kg q24h; 29-35 wk q12h; \>35 wk q8h; monitor levels.<br>1 mo-\<12 y: 10 mg/kg q6h (仿單/US) to 10-15 mg/kg q6h (UK) (= 40-60 mg/kg/day); each dose over ≥60 min.<br>≥12 y: adult dosing, max 2 g/dose.<br>Severe MRSA: 60-80 mg/kg/day ÷q6h, AUC-guided [ASHP 2020, PMID 32191793 — verify]; UK SmPC: \>60 mg/kg/day cannot be generally recommended.<br>PO CDI: 10 mg/kg q6h × 10 d (UK); US/仿單 40 mg/kg/day ÷3-4 × 7-10 d; max 2 g/day.

**Why:** 'Severe MRSA: 60-80 mg/kg/day' goes against UK SmPC 4.4, which says doses above 60 mg/kg/day cannot be generally recommended. It needs that caveat plus a guideline citation, or it should be removed. 'q6-8h' for children is not in any label (all use q6h). The neonatal entry drops the 15 mg/kg initial dose and the q24h interval for PMA <29 wk. Oral CDI paediatric dosing is in the labels but missing from the column.

**Sources:** UK SmPC 4.4 Paediatric population: '...higher doses than 60 mg/kg/day cannot be generally recommended'; 4.2 neonatal PMA table, '10 to 15 mg/kg body weight every 6 hours', oral '10 mg/kg orally every 6 hours for 10 days' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 3.1: '小兒─...每6小時10mg/Kg... 嬰兒及新生兒─建議開始劑量15 mg/Kg...第一週內...每12小時10mg/Kg，一直到一個月每8小時10mg/Kg'; 口服 '小孩子的每日劑量為40mg/kg，分3-4次' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US DailyMed Mylan, DOSAGE AND ADMINISTRATION > Pediatric patients / Neonates / For Oral Administration https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf

### B4 · Adult dose (unsupported)

**Was:** SSTI, IAI, BSI, Meningitis:** **15-20 mg/kg/dose q8-12h**<br>**常見劑量: 1000mg IVD q12h<br>High-dose: 2000mg IVD q12h<br><br>CDI prophylaxis: 125mg PO QD (5-7d)<br>CDI treatment: 125mg PO QID (10d)

**Now:** **15-20 mg/kg/dose IV q8-12h (total body weight; max 2 g/dose)** (UK SmPC)<br>Seriously ill: loading dose 25-30 mg/kg (UK SmPC)<br>常見劑量 (仿單/US): 2 g/day = 1000 mg IVD q12h or 500 mg q6h; infuse ≤10 mg/min or over ≥60 min, whichever is longer<br>Adjust by TDM (AUC/MIC 400-600 for serious MRSA)<br><br>CDI treatment: 125 mg PO q6h × 10 d; severe/complicated: 500 mg PO q6h × 10 d (UK SmPC; IDSA/SHEA 2021: 500 mg QID for fulminant). 仿單/US: 500 mg-2 g/day ÷3-4 × 7-10 d; max 2 g/day<br>CDI prophylaxis: 125 mg PO QD (5-7d) — off-label, in no label; ACG 2021 conditional suggestion (PMID 34003176) — verify

**Why:** (1) 'High-dose 2000 mg q12h' (4 g/day) is in no label. US/Taiwan give 2 g/day, and UK caps each dose at 2 g, so 2 g q12h is reachable only at ≥100 kg and only under TDM. (2) 'CDI prophylaxis 125 mg PO QD' is in no label (US/UK/TW) and is not a recommendation of the IDSA/SHEA 2021 update. (3) IAI and meningitis are not label indications (see B6). (4) The UK max of 2 g/dose and the 25-30 mg/kg loading dose are missing from the column. (5) The bold markdown is broken ('** **').

**Sources:** UK SmPC 4.2: '15 to 20 mg/kg... every 8 to 12 hours (not to exceed 2 g per dose)... loading dose of 25-30 mg/kg'; oral CDI '125 mg every 6 hours for 10 days... 500 mg every 6 hours for 10 days in case of severe or complicated disease' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 3.1: '成人─通常每日靜脈注射量為2 Gm，分次為每 6小時 500 mg 或每12小時1 Gm'; 口服 '每日劑量為500mg-2g，分成3-4次投與7-10天' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US DailyMed Mylan, DOSAGE AND ADMINISTRATION > Adults: 'usual daily intravenous dose is 2 g divided either as 500 mg every 6 hours or 1 g every 12 hours' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; IDSA/SHEA 2021 CDI focused update (PMID 34164674): 'vancomycin (500 mg 4 times daily orally or by nasogastric tube)... for treatment of fulminant CDI'; standard 'vancomycin (125 mg orally 4 times daily for 10 days)' https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

### B5 · Notes (unsupported)

**Was:** TDM:<br>AUC/MIC 400-600 (Bayesian preferred); <br>trough 10-15 if AUC unavailable;

**Now:** TDM:<br>AUC/MIC 400-600 mg·h/L (assume MIC 1; Bayesian preferred; reach within 24-48 h) for serious MRSA (ASHP/IDSA 2020; 仿單 3.1 also recommends AUC/MIC-guided dosing)<br>Trough-only monitoring no longer recommended for serious MRSA (↑nephrotoxicity, ASHP 2020); UK SmPC trough 10-20 mg/L (15-20 if MIC ≥1)<br>UK: first level day 2, just before next dose; IHD: level before the HD session

**Why:** 'Trough 10-15 if AUC unavailable' is not in the 2020 consensus executive summary, the Taiwan insert, or the UK SmPC (10-20 mg/L). The UK SmPC also gives sampling timing that the column lacks. The AUC 400-600 part is correct.

**Sources:** ASHP/IDSA/PIDS/SIDP 2020 executive summary (PMID 32658968; full guideline PMID 32191793): 'AUC/MIC ratio of 400–600 mg*hour/L (assuming a broth microdilution MIC of 1 mg/L)'; 'trough monitoring is associated with higher nephrotoxicity'; 'achieved early in the course of therapy (24–48 hours)' https://www.idsociety.org/practice-guideline/vancomycin/; UK SmPC 4.2 Monitoring: 'Therapeutic trough... 10-20 mg/L... Trough values of 15-20 mg/L... MIC ≥ 1 mg/L'; 'monitored on the second day of treatment immediately prior to the next dose'; 'levels... before the start of the haemodialysis session' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 3.1 (2020 ASHP text on AUC/MIC for serious MRSA) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B6 · Indications (unsupported)

**Was:** Bacteremia, CDI, Endocarditis, IAI, SSTI, Meningitis, Pneumonia, Surgical prophylaxis

**Now:** REMOVE tags IAI and Meningitis (or keep only with an explicit off-label note in the body). ADD Osteoarthritis (bone/joint), cSSTI, CAP, HAP, VAP. Final: Bacteremia, CDI, Endocarditis, SSTI, cSSTI, Pneumonia, CAP, HAP, VAP, Osteoarthritis, Surgical prophylaxis

**Why:** No label (US, UK or Taiwan) lists intra-abdominal infection or meningitis. The US label only notes CSF penetration when the meninges are inflamed. Bone/joint infection is approved by US ('bone infections'), UK ('bone and joint infections') and the Taiwan insert (骨髓炎) but has no tag. The UK SmPC lists cSSTI, CAP and HAP incl. VAP specifically, and matching schema options exist.

**Sources:** US DailyMed Mylan, INDICATIONS AND USAGE: '...septicemia, bone infections, lower respiratory tract infections, skin and skin structure infections... endocarditis... C. difficile... staphylococcal enterocolitis' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.1: 'cSSTI • bone and joint infections • CAP • HAP, including VAP • infective endocarditis... perioperative antibacterial prophylaxis... Oral... CDI' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 2 適應症: '心內膜炎、骨髓炎、肺炎、敗血病、軟組織感染、腸炎、...假膜性結腸炎' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B7 · Drug Interactions (missing)

**Was:** ↑Nephro/ototoxicity: aminoglycosides, piperacillin/tazobactam, amphotericin B, NSAIDs, loop diuretics, colistin, contrast

**Now:** ↑Nephro/ototoxicity: aminoglycosides, piperacillin/tazobactam (UK 4.5), amphotericin B, NSAIDs, loop diuretics, colistin/polymyxin B, bacitracin, viomycin, cisplatin (US/UK 4.5), contrast [not in labels — needs citation]<br>Anaesthetic agents: erythema, histamine-like flushing, anaphylactoid reactions; vancomycin may enhance anaesthetic myocardial depression → infuse over ≥60 min before induction (仿單 5.1.2/7; US; UK 4.4/4.5)<br>PO for CDI: avoid anti-motility agents; reconsider PPIs (UK 4.4/4.5)

**Why:** The anaesthetic-agent interaction is the only interaction in the stocked product's insert (Taiwan insert section 7) and appears in all three labels, but the column leaves it out. Polymyxin B, bacitracin, cisplatin and viomycin are named in the US and UK labels. 'Contrast' is in none of the labels; it is plausible, so I flag it rather than remove it.

**Sources:** Taiwan insert 7 交互作用: '汎克黴素同時與麻醉劑使用，曾發生紅斑及組織胺樣潮紅與過敏性休克等副作用' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; UK SmPC 4.5: '...amphotericin B, aminoglycosides, bacitracin, polymixin B, colistin, viomycin, cisplatin, loop diuretics, piperacillin/tazobactam and NSAIDs may increase the toxicity'; 4.4 'Anaesthetic induced myocardial depression may be enhanced by vancomycin' https://www.medicines.org.uk/emc/product/15737/smpc; US DailyMed Mylan, PRECAUTIONS > Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf

### B8 · Monitor (missing)

**Was:** renal, CBC

**Now:** renal, CBC, LFT

**Why:** The UK SmPC and the Taiwan insert for the stocked product both tell prescribers to check liver function periodically in all patients. The UK SmPC also lists ALT/AST increases as common. Audiometry and drug levels have no schema option, so they stay in the body.

**Sources:** UK SmPC 4.4: 'All patients receiving vancomycin should have periodic haematologic studies, urine analysis, liver and renal function tests' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 5.1.2: '所有使用本藥之病人應定期做尿分析和血液、肝機能、腎機能檢查' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B9 · Side Effects (missing)

**Was:** Red-man syndrome, nephrotoxicity, ototoxicity, neutropenia, thrombocytopenia, DRESS, SJS/TEN

**Now:** ADD: AKI, thrombophlebitis, LFT↑ (keep all existing)

**Why:** AKI is the US label's named warning. All three labels list thrombophlebitis (pain/phlebitis at the infusion site). The UK SmPC lists ALT/AST increased as 'Common'. All three options exist in the schema.

**Sources:** US DailyMed Mylan, WARNINGS > Nephrotoxicity: 'Systemic vancomycin exposure may result in acute kidney injury (AKI)'; PRECAUTIONS: 'Thrombophlebitis may occur' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.8: 'Hepatobiliary disorders Common Alanine aminotransferase increased, aspartate aminotransferase increased'; 'Common Phlebitis' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 8.1: '靜脈注射能引起疼痛及導致血栓性靜脈炎' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B10 · Coverage (missing)

**Was:** MSSA, MRSA, Streptococcus, Enterococcus, MRSE

**Now:** ADD: Staphylococcus, E. faecalis, Corynebacterium, Listeria, Bacillus (keep existing)

**Why:** The US label and UK SmPC 5.1 list Staphylococcus spp. including coagulase-negative staphylococci, E. faecalis specifically, and diphtheroids (Corynebacterium) with clinical efficacy. The US label lists Listeria in vitro, and the Taiwan insert lists Listeria and Bacillus in vitro. The page body already lists Corynebacterium, Listeria and Bacillus, so the tags and body disagree.

**Sources:** US DailyMed Mylan, CLINICAL PHARMACOLOGY > MICROBIOLOGY: 'Diphtheroids, Enterococci (e.g., Enterococcus faecalis), Staphylococci... Listeria monocytogenes' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 5.1 Commonly susceptible species: 'Enterococcus faecalis, Staphylococcus aureus, MRSA, coagulase-negative Staphylococci, Streptococcus spp... Staphylococcus spp. ... Clostridium spp.' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 10.2 微生物學: '單球李斯特氏菌...桿菌屬(Bacillus sp.)' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B11 · Page body (error)

**Was:** Notes: 'Oral vancomycin NOT absorbed → only for CDI/GI infections, not systemic'

**Now:** Oral vancomycin is poorly absorbed and is for CDI/staphylococcal enterocolitis only, not for systemic infection. BUT clinically significant serum levels have been reported with C. difficile colitis or inflamed bowel mucosa, especially with renal impairment, so monitor levels in these patients (US PRECAUTIONS; UK 4.4; 仿單 5.1.2).

**Why:** An absolute 'NOT absorbed' goes against all three labels, which warn about systemic absorption and toxicity in colitis with renal impairment.

**Sources:** US DailyMed Mylan, PRECAUTIONS: 'Clinically significant serum concentrations have been reported in some patients being treated for active C. difficile-induced pseudomembranous colitis after multiple oral doses' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.4 Potential for systemic absorption: 'Monitoring of serum vancomycin concentrations of patients with inflammatory disorders of the intestinal mucosa should be performed' https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 5.1.2: '多劑量口服...假膜性結腸炎時，病人的血清濃度是有臨床的意義' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B12 · Page body (unsupported)

**Was:** Notes: 'CSF penetration: 30-50% (inflamed meninges); consider higher doses or intrathecal for CNS infections'

**Now:** CSF: poor penetration through non-inflamed meninges; enters CSF when meninges are inflamed (US/UK/仿單) [30-50% figure — needs citation]. Intrathecal/intraventricular use: safety and efficacy not established (US/UK/仿單) — specialist use only [guideline citation needed].

**Why:** None of the labels gives the 30-50% figure. Recommending intrathecal use leaves out the warning in all three labels that intrathecal/intraventricular safety and efficacy have not been established.

**Sources:** US DailyMed Mylan, CLINICAL PHARMACOLOGY: 'does not readily diffuse across normal meninges... when the meninges are inflamed, penetration into the spinal fluid occurs'; DOSAGE: 'safety and efficacy... intrathecal (intralumbar or intraventricular) routes have not been established' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.4 / 5.2 https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 5.1.2: '汎克黴素椎管內(腰椎內或腦室內)給藥的安全性及有效性尚未確定' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B13 · Page body (missing)

**Was:** No mention of HORV/intraocular use, teicoplanin cross-hypersensitivity, IM contraindication, Kounis syndrome

**Now:** Add to Notes/Side Effects: <span color="red">`Not for intracameral/intravitreal use`</span>: hemorrhagic occlusive retinal vasculitis (HORV) with permanent vision loss reported (US/UK). Caution with teicoplanin allergy (cross-hypersensitivity incl. fatal anaphylaxis; UK 4.4). Do not give IM (necrosis; UK 4.3; 仿單). Kounis syndrome reported (UK 4.4/4.8). Severe skin reactions also include AGEP and LABD (US/UK).

**Why:** These are label warnings and contraindications that the body omits. HORV is a named US WARNINGS subsection.

**Sources:** US DailyMed Mylan, WARNINGS > Hemorrhagic Occlusive Retinal Vasculitis (HORV); Severe Dermatologic Reactions (AGEP, LABD) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 4.3 ('should not be administered intramuscularly'), 4.4 (teicoplanin cross-hypersensitivity; Eye disorders; Kounis syndrome) https://www.medicines.org.uk/emc/product/15737/smpc

### B14 · Page body (unsupported)

**Was:** Drug Interactions table: 'Neuromuscular blockers — Prolonged blockade'; 'Warfarin — Potential ↑INR'; 'Acyclovir — ↑Nephrotoxicity'; anaesthetic agents absent

**Now:** Add row 'Anaesthetic agents — erythema, histamine-like flushing, anaphylactoid reactions; may enhance anaesthetic myocardial depression → infuse over ≥60 min before induction (仿單 5.1.2/7; US; UK 4.4/4.5)'. Keep neuromuscular blockers, warfarin and acyclovir rows but mark each '[not in labels — needs citation]'.

**Why:** None of the three labels mentions the NMB, warfarin or acyclovir interactions. The one interaction every label lists (anaesthetics) is missing from the body table.

**Sources:** UK SmPC 4.5 https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 7 交互作用 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; US DailyMed Mylan, PRECAUTIONS > Drug Interactions https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf

### B15 · Page body (unsupported)

**Was:** Renal table (CrCl >50/30-50/10-29/<10 with 15-20 mg/kg q8-12h/q12-24h/q24-48h/q48-96h); 'HD... (high-flux removes 30-50%)'; CRRT 'CVVH: 500-750 mg q12h; CVVHD/CVVHDF: 750-1000 mg q12-24h'

**Now:** Replace the CrCl interval table with the label-based text (仿單/US primary, UK alongside) as in the B2 edit. HD: 'poorly removed by conventional IHD; high-flux ↑clearance → replacement dose after HD per pre-HD level (UK SmPC 4.2)'; keep 'Load 25 mg/kg; redose 500-1000 mg post-HD' and '(high-flux removes 30-50%)' marked [needs citation — ASHP 2020 full text, PMID 32191793]. CRRT: 'load by actual BW (ASHP 2020 exec summary, PMID 32658968); re-dose per levels/modality (UK SmPC)'; keep the CVVH/CVVHD(F) mg values marked [needs citation — ASHP 2020 full text].

**Why:** No label supports the interval bands, the '30-50%' high-flux removal or the modality-specific CRRT doses, and I could not reach a guideline full text to confirm them (academic.oup.com is blocked). Also, UK says CrCl 20-49 → q24h.

**Sources:** UK SmPC 4.2 Renal impairment https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 3.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; ASHP/IDSA 2020 executive summary (PMID 32658968) https://www.idsociety.org/practice-guideline/vancomycin/

### B16 · Page body (minor)

**Was:** Monitor > 'Trough-only (if AUC unavailable): 10-15 mg/L (avoid 15-20 → ↑nephrotoxicity)'; 'Trough: within 30 min pre-dose at steady state (by 4th dose)'

**Now:** Trough-only monitoring no longer recommended for serious MRSA (ASHP 2020; trough monitoring linked to ↑nephrotoxicity); UK SmPC trough 10-20 mg/L (15-20 if MIC ≥1).<br>Level timing: UK — day 2, immediately before next dose; IHD pts before the HD session. 'Pre-dose at steady state (~4th dose)' [2009 consensus — needs citation].

**Why:** Same problem as B5. The UK label gives day-2 sampling, not 'by the 4th dose'.

**Sources:** UK SmPC 4.2 Monitoring of vancomycin serum concentrations https://www.medicines.org.uk/emc/product/15737/smpc; ASHP/IDSA 2020 executive summary (PMID 32658968) https://www.idsociety.org/practice-guideline/vancomycin/

### B17 · Page body (minor)

**Was:** Notes: 'MIC ≥2 mg/L → consider alternative (daptomycin, linezolid, ceftaroline)'

**Now:** MIC ≥1 mg/L: upper-range dosing needed to reach AUC/MIC ≥400 (UK SmPC 5.1). MIC ≥2 mg/L: target unlikely with usual doses → consider alternative (e.g. daptomycin, linezolid, ceftaroline) guided by clinical response/ID consult [IDSA MRSA 2011, PMID 21208910 — verify full text; ASHP 2020].

**Why:** No label gives the MIC cutoff. The UK SmPC frames it as MIC ≥1 needing upper-range dosing. In my reading the IDSA 2011 MRSA guideline (archived) used MIC >2 for switching and clinical response for MIC ≤2, but I could not check the full text, so the threshold needs a citation.

**Sources:** UK SmPC 5.1 PK/PD: 'To achieve this target when MICs are ≥ 1.0 mg/L, dosing in the upper range and high trough serum concentrations (15-20 mg/L) are required' https://www.medicines.org.uk/emc/product/15737/smpc; IDSA MRSA guideline 2011 (archived), PMID 21208910 https://www.idsociety.org/practice-guideline/mrsa/

### B18 · Page body (minor)

**Was:** Notes: 'Half-life: 4-6h (normal renal); up to 7-10 days (anuria)'; 'Tissue penetration: good (bone, lung, peritoneal)'

**Now:** Half-life 4-6 h (normal renal); mean 7.5 days in anephric patients (US/UK). Inhibitory concentrations in pleural, pericardial, ascitic and synovial fluid, urine, PD fluid and atrial appendage tissue (US/仿單 11); poor CSF penetration unless meninges inflamed. [Bone/lung penetration claim — needs citation]

**Why:** The labels give a mean of 7.5 days, not 7-10. They list fluids, not bone/lung tissue.

**Sources:** US DailyMed Mylan, CLINICAL PHARMACOLOGY: 'In anephric patients, the average half-life of elimination is 7.5 days... inhibitory concentrations are present in pleural, pericardial, ascitic, and synovial fluids' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2dc7b3d6-3874-40ac-b8aa-7bcfe2dc0cdf; UK SmPC 5.2 https://www.medicines.org.uk/emc/product/15737/smpc

### B19 · Page body (minor)

**Was:** Adult Dose: 'Typical dose: 1000-1500 mg IV q12h'; 'CDI treatment: 125 mg PO QID × 10-14 days'; 'CDI prophylaxis: 125 mg PO daily (5-7 days)'; 'Surgical prophylaxis: 15 mg/kg IV (max 2g) within 120 min pre-incision'

**Now:** 'Typical (仿單/US): 2 g/day = 1 g q12h or 500 mg q6h; weight-based 15-20 mg/kg q8-12h, max 2 g/dose (UK) — e.g. 1000-1500 mg q12h by weight, adjust per AUC/trough'; 'CDI: 125 mg PO q6h × 10 d (UK; IDSA/SHEA 2021); severe/fulminant 500 mg q6h; duration may be tailored (UK)'; 'CDI prophylaxis: 125 mg PO daily — off-label, in no label; ACG 2021 conditional (PMID 34003176) — verify'; 'Surgical prophylaxis: 15 mg/kg IV before anaesthetic induction (UK SmPC; high endocarditis-risk pts); start within 120 min pre-incision [Bratzler ASHP/IDSA 2013, PMID 23327981]; a second dose may be needed for long surgery (UK)'.

**Why:** 1500 mg q12h, a 14-day CDI course and the 120-min window are in none of the labels. CDI prophylaxis is not supported (as in B4).

**Sources:** UK SmPC 4.2 https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F; IDSA/SHEA 2021 CDI update (PMID 34164674) https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

### B20 · Page body (minor)

**Was:** Pregnancy: 'FDA Category C (historical)... Avoid PEG 400/NADA-containing formulations in 1st/2nd trimester'

**Now:** Remove 'FDA Category C (historical)'. Change to 'PEG 400/NADA premixed Vancomycin Injection (Xellia, US): avoid in 1st/2nd trimester. Powder vials such as UVA01 contain no excipients.'

**Why:** The trimester wording matches the Xellia boxed warning, but it needs the product-specific context. The letter category adds nothing now that the FDA has retired it.

**Sources:** DailyMed Xellia Vancomycin Injection Boxed Warning https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60bee69b-be70-412c-9e83-a24a0a8a5e7b; Taiwan insert 1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B21 · Mechanism (minor)

**Was:** Binds D-ala-D-ala → inhibits cell wall synthesis (transglycosylation/transpeptidation); bactericidal (bacteriostatic vs enterococci)

**Now:** Binds D-ala-D-ala → inhibits cell wall synthesis (transglycosylation/transpeptidation); also alters membrane permeability and RNA synthesis; slowly bactericidal (concentration-independent; AUC/MIC is the PK/PD driver); bacteriostatic vs enterococci (needs an aminoglycoside for enterococcal endocarditis)

**Why:** The core mechanism is correct. All three labels add effects on membrane permeability and RNA synthesis, and UK 5.1 says 'slowly bactericidal' with AUC/MIC as the PK/PD driver.

**Sources:** UK SmPC 5.1 Mechanism of action https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

### B22 · Page body (minor)

**Was:** Notes: 'Premedicate with diphenhydramine 25-50 mg if history of red man syndrome'; 'extend to 90-120 min'; 'Continuous infusion: target Css 20-25 mg/L'; Coverage 'No activity: ... VISA (MIC 4-8)'; Breastfeeding 'Poor oral bioavailability (<10%)'

**Now:** Flag as unsourced (keep, add a citation). Change VISA to 'reduced susceptibility (VISA, MIC 4-8)' rather than 'no activity'. Continuous infusion: UK SmPC 4.2 'may be considered, e.g., unstable vancomycin clearance'; cite ASHP 2020 for the Css target.

**Why:** These statements are plausible but no fetched label supports them. 'No activity' for VISA overstates the case, since the Taiwan insert breakpoints call MIC 4-16 intermediate.

**Sources:** UK SmPC 4.2 Method of administration (continuous infusion) https://www.medicines.org.uk/emc/product/15737/smpc; Taiwan insert 10.2 稀釋法 MIC breakpoints https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%A3%BD%E5%AD%97%E7%AC%AC041443%E8%99%9F

## Verified correct as written

- Category 'Glycopeptide': matches UK SmPC 5.1 ('glycopeptide antibacterials', ATC J01XA01) and the FDA/仿單 description ('tricyclic glycopeptide').
- Hepatic dose 'No adjustment': matches UK SmPC 4.2 ('No dose adjustment is needed in patients with hepatic insufficiency') and 5.2 ('pharmacokinetics is not altered in patients with hepatic impairment').
- Breastfeeding property ('Compatible; low milk levels, poor oral absorption → minimal infant exposure'): matches the LactMed NBK501263 summary ('No special precautions are required'). The body's colostrum level of 12.7 mg/L matches LactMed Drug Levels.
- Adult dose: 15-20 mg/kg/dose q8-12h matches UK SmPC 4.2 for ages 12 and over. 1000 mg q12h matches the FDA label and 仿單 (2 g/day as 1 g q12h).
- Adult dose: oral CDI treatment of 125 mg PO QID for 10 days matches UK SmPC 4.2. The body's severe-CDI dose of 500 mg QID matches the SmPC, and both fall within the FDA/仿單 range of 0.5-2 g/day in 3-4 doses.
- Body: the 25-30 mg/kg loading dose for critically ill patients matches UK SmPC 4.2.
- Body Notes: infusion over at least 60 min or at no more than 10 mg/min matches the FDA label D&A, SmPC 4.2 and 仿單 3.1.
- Body Notes: half-life of 4-6 h with normal renal function matches the FDA Clinical Pharmacology section and SmPC 5.2.
- Side-effect tags Red-man syndrome, nephrotoxicity, ototoxicity, neutropenia, thrombocytopenia, DRESS and SJS/TEN are all supported by the FDA label WARNINGS/ADVERSE REACTIONS, SmPC 4.4/4.8 and 仿單 8.1.
- Coverage tags MSSA, MRSA, MRSE, Streptococcus and Enterococcus are supported by FDA Microbiology (S. aureus, S. epidermidis including methicillin-resistant strains, streptococci, enterococci) and SmPC 5.1.
- Indication tags Bacteremia (FDA septicemia), Endocarditis, SSTI, Pneumonia (FDA lower respiratory tract infections; SmPC CAP/HAP), CDI (oral) and Surgical prophylaxis (SmPC perioperative prophylaxis in high endocarditis-risk patients) are labelled.
- Monitor tags renal and CBC are supported by the FDA WARNINGS (monitor renal function in all patients) and PRECAUTIONS (periodic leukocyte count), and by SmPC 4.4.
- Drug Interactions property: aminoglycosides, piperacillin/tazobactam, amphotericin B, NSAIDs, loop diuretics and colistin are all listed in SmPC 4.5. Pip/tazo is also in the FDA Xellia label 7.2.
- Body: aminoglycoside synergy is supported by FDA Microbiology (Synergy) and SmPC 5.1.
- Body: 'Reversible neutropenia', 'interstitial nephritis' and 'anaphylaxis' are in the FDA ADVERSE REACTIONS section and SmPC 4.8.
- Body: staphylococcal enterocolitis (oral) is in the FDA INDICATIONS ('orally for… staphylococcal enterocolitis').
- Body Monitor: an AUC/MIC target of 400-600 mg·h/L assuming MIC 1, with Bayesian estimation preferred, matches the ASHP/IDSA/PIDS/SIDP 2020 guideline (PMID 32191793, verified via E-utilities; IDSA executive summary). The 仿單 also cites ASHP 2020 AUC/MIC dosing.
- Body Pregnancy: 'May need higher doses… Monitor levels' is supported by SmPC 4.2/4.6 ('Significantly increased doses may be required'; 'blood levels should be monitored carefully'). 'Animal studies negative' is supported by the SmPC (rat/rabbit teratology) and FDA Xellia 8.1 (vancomycin alone showed no adverse developmental effects).
- No storage or stability details are present in the Notion entry, consistent with the owner's decision.
- Hepatic dose 'No adjustment' (column and body): UK SmPC 4.2 'No dose adjustment is needed in patients with hepatic insufficiency'; 5.2 'pharmacokinetics is not altered in patients with hepatic impairment'.
- Breastfeeding column 'Compatible; low milk levels, poor oral absorption → minimal infant exposure' matches the LactMed NBK501263 summary ('No special precautions are required'). The body's colostrum 12.7 mg/L figure matches LactMed Drug Levels.
- Category 'Glycopeptide' (UK SmPC 5.1; Taiwan insert 10.2 三環糖肽).
- Adult 15-20 mg/kg q8-12h based on actual/total body weight and the 25-30 mg/kg loading dose in critically ill patients (UK SmPC 4.2).
- 1000 mg IVD q12h as the common dose (Taiwan insert 3.1; US label: 2 g/day as 1 g q12h or 500 mg q6h), re-checked against the live DailyMed SPL XML.
- CDI treatment 125 mg PO QID × 10 d and severe 500 mg PO QID (UK SmPC 4.2; IDSA/SHEA 2021 update, PMID 34164674).
- Coverage tags MSSA, MRSA, MRSE, Streptococcus and Enterococcus (US Microbiology; UK 5.1). No Gram-negative activity and VRE excluded (UK 5.1 inherently resistant Gram-negatives; E. faecium acquired resistance).
- Side-effect tags Red-man syndrome (vancomycin infusion reaction), nephrotoxicity, ototoxicity, neutropenia (reversible, >1 week or >25 g), thrombocytopenia (rare), DRESS and SJS/TEN: all in the US WARNINGS/ADVERSE REACTIONS, UK 4.8 and Taiwan insert 8.1.
- Monitor tags renal and CBC (US Nephrotoxicity and PRECAUTIONS leukocyte count; Taiwan insert 5.1.2).
- Drug-interaction column entries aminoglycosides, piperacillin/tazobactam, amphotericin B, NSAIDs, loop diuretics and colistin (UK SmPC 4.5; pip/tazo also in the Xellia PLR label section 7.2).
- AUC/MIC 400-600 mg·h/L assuming MIC 1 for serious MRSA (2020 ASHP/IDSA/PIDS/SIDP; executive summary PMID 32658968 and full guideline PMID 32191793, both checked with esummary; also cited in Taiwan insert 3.1).
- Infuse over ≥60 min or ≤10 mg/min (US D&A, UK 4.2, Taiwan insert 3.1).
- Half-life 4-6 h with normal renal function (US/UK/Taiwan insert).
- Mechanism: binds D-Ala-D-Ala and inhibits cell wall synthesis (UK 5.1).
- Max 2 g per dose in the paediatric column (UK SmPC 4.2 for ≥12 y).
- PEG 400/NADA warning for 1st/2nd trimester in the body: matches the Xellia premix boxed warning, but it is product-specific (see B20).
- Indication tags Bacteremia (septicemia), CDI (oral), Endocarditis, SSTI, Pneumonia (LRTI/CAP/HAP) and Surgical prophylaxis (UK perioperative endocarditis prophylaxis) are label-supported.

## Apply log

- Pregnancy property: Category C removed; merged label-based text (use only if clearly needed, cord blood, 2nd/3rd-trimester study, animal data, higher doses/monitor levels, PEG 400/NADA warning limited to Xellia premix; UVA01 powder has no excipients)
- Renal dose, HD, CRRT property: 仿單/US primary (≥15 mg/kg initial, 15×CrCl Moellering, 1.9 mg/kg/24h, anuria 1 g q7-10d) + UK SmPC alongside; HD/CRRT with SmPC replacement dosing and ASHP 2020 verify flags
- Notes property: TDM AUC/MIC 400-600 (ASHP 2020, 仿單 3.1), trough-only no longer recommended, UK trough 10-20 (15-20 if MIC ≥1), level timing, infusion rate
- Adult dose property: weight-based 15-20 mg/kg max 2 g/dose, LD 25-30, 常見劑量 2 g/day, high-dose caveat, infusion rate, CDI treatment (UK/US/仿單/IDSA-SHEA 2021), CDI prophylaxis off-label (ACG 2021)
- Indications property: removed IAI and Meningitis; final Bacteremia, CDI, Endocarditis, SSTI, cSSTI, Pneumonia, CAP, HAP, VAP, Osteoarthritis, Surgical prophylaxis
- Pediatric dose property: neonatal 仿單/US + UK PMA table, 1 mo-<12 y 10-15 mg/kg q6h, ≥12 y adult, severe MRSA 60-80 [verify] with SmPC >60 caveat, PO CDI
- Drug Interactions property: added polymyxin B, bacitracin, viomycin, cisplatin, pip/tazo label refs, IV contrast flagged, anaesthetic agents, PO CDI anti-motility/PPI
- Coverage property: MSSA, MRSA, MRSE, Staphylococcus, Streptococcus, Enterococcus, E. faecalis, Corynebacterium, Listeria, Bacillus
- Side Effects property: added AKI, thrombophlebitis, LFT↑ (kept existing)
- Monitor property: renal, CBC, LFT
- Mechanism property: added membrane permeability/RNA synthesis, slowly bactericidal, AUC/MIC driver, AG combination for enterococcal endocarditis
- Body Indications: labelled vs off-label/guideline-based with PMIDs
- Body Coverage: Listeria in vitro, Bacillus in vitro, Enterococcus E. faecalis/E. faecium note, MSSA [needs citation], No activity line expanded, VISA moved to reduced susceptibility
- Body Adult Dose: all bullets updated (serious infections, LD, typical, CDI treatment, CDI prophylaxis off-label, surgical prophylaxis with Bratzler 2013, meningitis off-label note)
- Body Renal: CrCl interval table replaced with 仿單/US primary + UK SmPC text; HD and CRRT updated with SmPC text and [needs citation] flags on 30-50% and CVVH/CVVHD(F) values
- Body Pediatric table rows updated (neonates, >7 d, ≥1 mo, severe MRSA, max dose, oral CDI)
- Body Side Effects: Common/Serious lists updated (ALT/AST, SCr, AGEP, LABD, Kounis, CDAD, HORV, etc.)
- Body Monitor: trough-only text, labs (CBC/UA/LFT/renal, level timing, auditory testing), flags on SCr schedule and 4th-dose timing
- Body Drug Interactions: pip/tazo row (Luther 2018, ACORN 2023), added polymyxin B/bacitracin/cisplatin row and anaesthetic agents row; IV contrast, acyclovir, NMB, warfarin flagged [not in labels — needs citation]
- Body Pregnancy: Category C (historical) removed; label-based text with Xellia premix vs UVA01 powder distinction
- Body Breastfeeding: LactMed-based text, labels caution, GI flora flagged
- Body Notes: infusion/premed flagged, CSF and intrathecal, continuous infusion, MIC ≥1/≥2, oral vanco systemic absorption, distribution, half-life 7.5 d anephric, contraindications/IM/teicoplanin, red Not for intracameral/intravitreal use HORV, Kounis/AGEP/LABD
- References section appended at end of body (FDA Mylan, FDA Xellia, UK SmPC, Taiwan 仿單, LactMed, ASHP 2020, ACG 2021, IDSA/SHEA 2021 and 2017, Bratzler 2013, Tunkel 2004, Solomkin 2010, Freifeld 2010, Liu 2011, Luther 2018, ACORN 2023)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
