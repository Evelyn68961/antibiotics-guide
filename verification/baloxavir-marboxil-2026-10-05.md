# New entry: Xofluza (Baloxavir)

- **Notion entry:** [Xofluza (Baloxavir)](https://app.notion.com/3f0c496dfff1812a99b7c0dfbd411b00). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** XOF01 (Xofluza tab 20 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/baloxavir-marboxil.json` (plus any Taiwan insert text files)

## Product and sources

The hospital stocks XOF01, Xofluza 錠劑 20 mg (紓伏效膜衣錠20毫克, baloxavir marboxil 20 mg/tab, Shionogi), licence 衛部藥輸字第027693號, NHI code B027693100, ATC J05AX25. It is the only Xofluza code at the hospital: XOF02 is Xofigo (radium-223), which is unrelated. The hospital stocks no granules or suspension, and the 40 mg and 80 mg tablets sold in the US and UK are not stocked. Sources checked: the US FDA label (DailyMed setid e49e1a61-1b7c-4be5-ac84-af6240b511e7, published Dec 19 2025); the UK SmPC (eMC 14764, revised 29 Dec 2025); the Taiwan insert v3 (2024-04-12), which governs because it is the stocked product's label; LactMed NBK535610 (rev. 2025-03-15); and the IDSA 2018 influenza guideline (PMID 30566567, checked with esummary), used for context only. The Notion page is new: every column and the page body are empty, and only Category is set. Note on scope: the request says "task 2,3,5", but nothing I received defines those tasks. I did the full reviewer-A audit. It was read-only: I made no Notion edits and changed no files.

## Content written to Notion (29 items)

### A1 · Adult dose

<span color="blue">`PO`</span> 仿單 (Xofluza 20 mg tab, hospital product): single dose, given once only (單次)<br>20–\<80 kg: 40 mg = 20 mg tab × 2<br>≥80 kg: 80 mg = 20 mg tab × 4<br>Treatment: within 48 h of symptom onset; PEP: within 48 h of close contact<br>With or without food; avoid dairy, Ca-fortified drinks, antacids, laxatives, and Ca/Fe/Mg/Se/Zn supplements<br>US/UK: same weight bands (40 mg or 80 mg tablets); no data on a repeat dose within one season (UK 4.2)

**Why:** The column is empty. The Taiwan insert for the stocked 20 mg tablet sets the dose as a number of 20 mg tablets. The US label and the UK SmPC use the same weight bands.

**Sources:** Taiwan insert 衛部藥輸字第027693號 §3.1 '體重20公斤以上未滿80公斤…單次口服投與20mg錠 2錠（Baloxavir marboxil 40 mg）。體重80公斤以上者…20mg錠 4錠（Baloxavir marboxil 80 mg）' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; DailyMed XOFLUZA §2.2 Table 1 '20 kg to less than 80 kg One 40 mg tablet… At least 80 kg One 80 mg tablet'; §2.1 avoid dairy/polyvalent cations https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.2 Table 1 and 'There are no clinical data on the use of a repeat dose… in any one influenza season' https://www.medicines.org.uk/emc/product/14764/smpc

### A2 · Renal dose, HD, CRRT

仿單 (hospital product): CrCl ≥30: no adjustment; CrCl \<30: no PK data (尚無資料)<br>US label: no clinically significant PK change for CrCl ≥50; severe renal impairment not evaluated<br>UK SmPC: no dose adjustment in renal impairment (not expected to alter elimination)<br>HD: unlikely to be removed by dialysis (protein binding ~93%; US §10, 仿單 §9)<br>CRRT: no data; mainly faecal elimination (urine 14.7% total radioactivity, 3.3% as baloxavir)

**Why:** The column is empty. Following the rule to prefer the stocked product's label, the Taiwan CrCl ≥30 cutoff comes first, with the US (≥50) and UK (no adjustment) values beside it. No label or guideline gives a CRRT dose.

**Sources:** Taiwan insert §6.7/§11.3 '輕度或中度腎功能不全(CrCl≥30 mL/min)的病人，不需要調整劑量。目前尚無重度腎功能不全病人(CrCl<30 mL/min)…資料'; §9 '由於本藥具高血清蛋白結合性，故無法以透析方式移除' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; DailyMed XOFLUZA §12.3 'No clinically significant differences… creatinine clearance (CrCl: 50 mL/min and above)… The effect of severe renal or hepatic impairment… has not been evaluated'; Table 6 'Urine: 14.7 (total radioactivity); 3.3 (baloxavir) Feces: 80.1'; §10 'unlikely to be significantly removed by dialysis due to high serum protein binding' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.2 'No dose adjustment is required in patients with renal impairment'; §5.2 'Renal impairment is not expected to alter the elimination' https://www.medicines.org.uk/emc/product/14764/smpc

### A3 · Hepatic dose

Child-Pugh A–B: no adjustment (仿單 §6.6, UK 4.2; US: no clinically significant change in Child-Pugh B)<br>Child-Pugh C: not studied; 仿單: 重度肝功能不全病人請慎重投與

**Why:** The column is empty. All three labels agree on Child-Pugh A–B, and the Taiwan insert lists severe hepatic impairment as a 'use with caution' population.

**Sources:** Taiwan insert §5.1.1 '重度肝功能不全的病人' (慎重投與); §6.6 '輕度（Child-Pugh分類A）至中度（Child-Pugh分類B）…無需調整劑量' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; DailyMed XOFLUZA §12.3 '…or moderate hepatic impairment (Child-Pugh class B)' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.2 'No dose adjustment… mild or moderate hepatic impairment (Child-Pugh class A or B)… not established… severe (Child-Pugh class C)' https://www.medicines.org.uk/emc/product/14764/smpc

### A4 · Pediatric dose

仿單 (20 mg tab): ≥5 y AND ≥20 kg only; 20–\<80 kg: 40 mg (2 tab) × 1; ≥80 kg: 80 mg (4 tab) × 1<br>US label (≥5 y): \<20 kg: 2 mg/kg oral suspension (bottles) or 30 mg packet for 15–\<20 kg; suspension not stocked here<br>Not indicated \<5 y (US 5.2): treatment-emergent resistance 40% (\<5 y) vs 16% (5–\<12 y) vs 7% (≥12 y)<br>UK SmPC: licensed from ≥3 weeks (granules for \<20 kg)

**Why:** The column is empty. Children are dosed by weight band, not by mg/kg, except for the US suspension under 20 kg. With only the 20 mg tablet stocked, the hospital can treat children aged 5 or older who weigh at least 20 kg.

**Sources:** Taiwan insert §2 '適用於治療5歲以上且體重20公斤以上病人'; §3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; DailyMed XOFLUZA §2.2 Tables 2–3 '15 kg to less than 20 kg One 30 mg packet… Less than 20 kg 2 mg/kg'; §5.2 '(40%, 38/96)… (16%, 19/117)… (7%, 60/842)' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.1 'patients aged 3 weeks and above'; §4.2 '< 20 kg Refer to the Xofluza granules for oral suspension' https://www.medicines.org.uk/emc/product/14764/smpc

### A5 · Indications

Influenza

**Why:** The multi-select option 'Influenza' exists in the schema. All three labels cover treatment of acute uncomplicated influenza and post-exposure prophylaxis. There is no separate PEP option, so PEP goes in Notes and the page body.

**Sources:** DailyMed XOFLUZA §1.1–1.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### A6 · Coverage

Influenza A, Influenza B

**Why:** Both options exist in the schema. The labels show activity against influenza A (H1N1, H3N2, and avian H5N1/H7N9 in vitro) and influenza B.

**Sources:** DailyMed XOFLUZA §12.4 Antiviral Activity 'EC50… A/H1N1… A/H3N2… type B'; 'EC90… avian subtypes A/H5N1 and A/H7N9' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §2 'A型及B型流行性感冒病毒急性感染' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### A7 · Side Effects

GI, LFT↑, CNS

**Why:** These are existing options only. GI: diarrhoea 3% and nausea 2% in US adults, vomiting/diarrhoea 5% in children, and colitis, hematochezia and melena post-marketing (US 6.2), with ischaemic colitis in the Taiwan insert (§8.3). LFT↑: ALT/AST rise in 0.9% (Taiwan §8.2). CNS: abnormal behaviour, delirium and hallucinations post-marketing (US 6.2; Taiwan §8.1). Headache (1%) and taste and smell disturbance (Taiwan) also fit CNS. Hypersensitivity (anaphylaxis, angioedema, urticaria, erythema multiforme) has no matching option. SJS/TEN and DRESS are not reported, so hypersensitivity goes in Notes.

**Sources:** DailyMed XOFLUZA §6.1 'diarrhea (3%), bronchitis (3%), nausea (2%), sinusitis (2%), and headache (1%)… vomiting (5%) and diarrhea (5%)'; §6.2 'Vomiting, hematochezia, melena, colitis… Delirium, abnormal behavior, hallucinations' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §8.1 異常行為; §8.2 'ALT（GPT）上升，發生8例（0.9%）', 頭痛、味覺障礙、嗅覺異常; §8.3 缺血性結腸炎 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; UK SmPC §4.8 Diarrhoea/Vomiting common; Urticaria uncommon; rash common in children https://www.medicines.org.uk/emc/product/14764/smpc

### A8 · Monitor

CNS

**Why:** No label requires lab monitoring after this single dose. The Taiwan insert tells caregivers to watch for abnormal behaviour (fall risk) for at least 2 days after fever onset, so CNS (an existing option) fits. Watching for hypersensitivity and secondary bacterial infection goes in the page body, because no option exists for either.

**Sources:** Taiwan insert §5.1.2(1) '居家療養時，至少自發燒起之2天內，監護人等應採取措施以預防墜落等事故' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; DailyMed XOFLUZA §5.1, §5.3, §6.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7

### A9 · Mechanism

Prodrug → hydrolysed to baloxavir → inhibits cap-dependent endonuclease of the PA subunit of viral RNA polymerase (blocks 'cap-snatching') → no viral mRNA transcription → inhibits influenza A/B replication

**Why:** The column is empty. This is the mechanism stated in all three labels.

**Sources:** DailyMed XOFLUZA §12.4 Mechanism of Action 'Baloxavir inhibits the endonuclease activity of the polymerase acidic (PA) protein… required for viral gene transcription' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §10.1 'CAP依存性內切酶（Cap-Dependent Endonuclease）…阻斷病毒mRNA合成' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; UK SmPC §5.1 'acts on the cap-dependent endonuclease (CEN)… in the polymerase acidic (PA) subunit' https://www.medicines.org.uk/emc/product/14764/smpc

### A10 · Drug Interactions

Polyvalent cations (Ca, Al, Mg, Fe, Se, Zn): chelation → ↓baloxavir (monkeys ↓48–63%); avoid co-administration with dairy, Ca-fortified drinks, antacids, cation-containing laxatives and supplements (no fixed spacing interval in labels)<br>LAIV: antivirals may inhibit vaccine virus replication → ↓LAIV effectiveness (US §7.2); inactivated vaccine interaction not evaluated<br>No clinically significant PK interaction with itraconazole, probenecid, oseltamivir, midazolam, digoxin, rosuvastatin (US §12.3); metabolised by UGT1A3 > CYP3A4; P-gp substrate

**Why:** The column is empty. The main clinically relevant interaction is chelation with polyvalent cations, which all three labels state.

**Sources:** DailyMed XOFLUZA §7.1–7.2 and §12.3 'Polyvalent Cations: In monkeys, a 48% to 63% decrease…'; 'No clinically significant changes… itraconazole… probenecid… oseltamivir… midazolam… digoxin… rosuvastatin' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.5 https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §3.1, §7.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### A11 · Pregnancy

No adequate human data (US §8.1; letter category retired); no adverse developmental effects in rats/rabbits at ~5–7× human exposure (rabbit abortions/skeletal variations only at maternally toxic dose); influenza itself is high-risk in pregnancy<br>仿單: 治療上有益性高於危險性時才可投與<br>UK SmPC: as a precaution, preferable to avoid in pregnancy

**Why:** The column is empty. The labels differ in tone, so all three are quoted. No letter category is used.

**Sources:** DailyMed XOFLUZA §8.1 Risk Summary/Data https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.6 'As a precautionary measure, it is preferable to avoid the use of Xofluza during pregnancy' https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §6.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### A12 · Breastfeeding

LactMed: no human data; 93% protein-bound → milk levels likely low; not a reason to stop breastfeeding, but an alternate (oseltamivir, zanamivir) may be preferred, esp. newborn/preterm<br>FDA 8.2: present in rat milk (~5× plasma)<br>UK SmPC: decide to stop breastfeeding or abstain from therapy<br>仿單: 投藥療程中避免母乳哺餵

**Why:** The column is empty. LactMed is the primary source for breastfeeding. The Taiwan insert is stricter and is shown alongside.

**Sources:** LactMed Baloxavir NBK535610 Summary of Use during Lactation; Alternate Drugs: Oseltamivir, Zanamivir https://www.ncbi.nlm.nih.gov/books/NBK535610/; DailyMed XOFLUZA §8.2 'peak milk concentration approximately 5 times that of maternal plasma' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §6.2 '哺乳婦請於投藥療程中避免母乳哺餵' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### A13 · Notes

Single oral dose; start ≤48 h after onset (treatment) or contact (PEP 暴露後預防)<br>Hospital stocks only 20 mg tab (XOF01): 40 mg = 2 tab, 80 mg = 4 tab; no suspension → not for \<20 kg or patients unable to swallow tablets<br>Contraindicated: prior hypersensitivity (anaphylaxis, angioedema, urticaria, erythema multiforme); no multi-select option for hypersensitivity<br>Resistance: treatment-emergent PA substitutions (e.g. I38T) — higher in children (US §5.2/§12.4)<br>Efficacy in hospitalised severe influenza not established (仿單 §2.1.2); no effect on bacterial infection<br>Abnormal behaviour after influenza (mostly boys/teens, within 2 days of fever) — watch for falls (仿單 §5.1.2)<br>Contains lactose (UK 4.4; 仿單 excipients)<br>t½ ≈79 h; ~93% protein-bound

**Why:** The column is empty. This gathers the clinically important points from the labels that do not fit a structured column, including the hospital-specific tablet count and items that have no multi-select option (PEP, hypersensitivity).

**Sources:** Taiwan insert §1.2 (lactose monohydrate), §2.1.2, §2.1.4, §5.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; DailyMed XOFLUZA §4, §5.1–5.3, §12.3 Table 6 (t½ 79.1 h; protein binding 92.9–93.9%), §12.4 Table 8 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.4 'Xofluza contains lactose' https://www.medicines.org.uk/emc/product/14764/smpc

### A14 · Page body

Use the same section structure as the Rapiacta (Peramivir) entry. Each section repeats the column text above, with more detail:<br>## Baloxavir marboxil (Xofluza)<br>---<br>### Category<br>Antiviral, **cap-dependent endonuclease (PA) inhibitor** (influenza A and B); prodrug; ATC J05AX25<br>---<br>### Mechanism<br>- Prodrug hydrolysed by esterases (gut, blood, liver) to active baloxavir<br>- Inhibits cap-dependent endonuclease in the PA subunit of the viral RNA polymerase → blocks cap-snatching and viral mRNA synthesis → inhibits replication (US §12.4; 仿單 §10.1)<br>---<br>### Indications<br>**FDA (US):** treatment of acute uncomplicated influenza in patients ≥5 y, symptomatic ≤48 h, otherwise healthy or high risk; PEP in ≥5 y. Not indicated \<5 y (resistance)<br>**UK SmPC:** treatment and PEP from ≥3 weeks of age<br>**仿單 (Taiwan):** 治療5歲以上且體重20公斤以上病人之A型及B型流感急性感染; 5歲以上且體重20公斤以上於密切接觸流感病人後預防<br>**Limitations:** efficacy in hospitalised severe influenza not established (仿單 §2.1.2); consider local susceptibility data (US §1.3); no effect on bacterial infection<br>---<br>### Coverage<br>- Influenza A (H1N1, H3N2; avian H5N1/H7N9 in vitro) and influenza B; active against NA-inhibitor-resistant (H274Y) strains in vitro (仿單 §10.1)<br>- Reduced susceptibility with PA substitutions (I38T/F/M/N/S, E23G/K/R, A37T, E199G); treatment-emergent in ~7% ≥12 y, 16% 5–\<12 y, 40% \<5 y (US §5.2/§12.4)<br>---<br>### Adult Dose<br><span color="blue">`PO`</span> single dose (仿單, 20 mg tab):<br>\| Body weight \| Dose \|<br>\| 20–\<80 kg \| 40 mg (20 mg tab × 2) \|<br>\| ≥80 kg \| 80 mg (20 mg tab × 4) \|<br>- Take within 48 h of symptom onset or contact; with or without food (food ↓Cmax 48%, ↓AUC 36%; US Table 6)<br>- Avoid dairy, Ca-fortified drinks, antacids, cation-containing laxatives and supplements<br>- No data on repeat dosing within one season (UK 4.2)<br>---<br>### Renal Dose, HD, CRRT<br>- 仿單: CrCl ≥30: no adjustment; CrCl \<30: no data<br>- US: no clinically significant change CrCl ≥50; severe not evaluated. UK: no adjustment<br>- HD: not removed (protein binding ~93%). CRRT: no data<br>- Elimination mainly faecal (80.1%); urine 14.7% total radioactivity (3.3% as baloxavir)<br>---<br>### Hepatic Dose<br>- Child-Pugh A–B: no adjustment; Child-Pugh C: no data, 慎重投與 (仿單 §5.1.1)<br>---<br>### Pediatric Dose<br>- 仿單: ≥5 y and ≥20 kg: same weight bands as adults (20 mg tab × 2 or × 4)<br>- US (≥5 y, \<20 kg): 2 mg/kg suspension (bottles) or 30 mg packet for 15–\<20 kg (not stocked)<br>- Not indicated \<5 y in US (resistance 40%); UK licensed from 3 weeks<br>---<br>### Side Effects<br>- US adults/adolescents: diarrhoea 3%, bronchitis 3%, nausea 2%, sinusitis 2%, headache 1% (similar to placebo); children 5–\<12 y: vomiting 5%, diarrhoea 5%; nausea 6% in ≥65 y<br>- 仿單: ALT↑ (0.9%), AST↑ (\<1%), headache, taste/smell disturbance, nausea/vomiting<br>- Post-marketing: anaphylaxis, angioedema, urticaria, erythema multiforme, rash; colitis/ischaemic colitis, hematochezia, melena; delirium, abnormal behaviour, hallucinations<br>---<br>### Monitor<br>- Hypersensitivity reactions (contraindicated if prior hypersensitivity)<br>- Abnormal behaviour: caregivers watch ≥2 days from fever onset (fall prevention; mainly school-age boys/teens) — 仿單 §5.1.2<br>- Secondary bacterial infection (US §5.3)<br>---<br>### Drug Interactions<br>- Polyvalent cations (Ca, Al, Mg, Fe, Se, Zn) and dairy → chelation, ↓baloxavir → avoid co-administration<br>- LAIV: antivirals may reduce LAIV effectiveness (US §7.2)<br>- No clinically significant interaction with itraconazole, probenecid, oseltamivir, midazolam, digoxin, rosuvastatin (US §12.3)<br>---<br>### Pregnancy<br>- US §8.1: no adequate human data; no developmental toxicity in rats/rabbits at ~5–7× human exposure; influenza in pregnancy is high risk (letter category retired)<br>- UK: preferable to avoid as a precaution; 仿單: 有益性高於危險性時才可投與<br>---<br>### Breastfeeding<br>- LactMed: no data; 93% protein-bound → likely low milk levels; breastfeeding need not stop, but oseltamivir/zanamivir may be preferred, esp. newborn/preterm<br>- US: present in rat milk; UK: decide to stop breastfeeding or abstain; 仿單: 投藥療程中避免母乳哺餵<br>---<br>### Pharmacokinetics<br>- Tmax ~4 h; protein binding 92.9–93.9%; Vd/F ~1180 L; t½ 79.1 h (adults); metabolism UGT1A3 > CYP3A4; exposure ~35% lower in non-Asians (not clinically significant)<br>---<br>### References<br>- US FDA label: XOFLUZA, DailyMed setid e49e1a61-1b7c-4be5-ac84-af6240b511e7 (Dec 2025) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7<br>- UK SmPC: Xofluza 40/80 mg film-coated tablets (rev. 29 Dec 2025) — https://www.medicines.org.uk/emc/product/14764/smpc<br>- 仿單: 紓伏效膜衣錠20毫克 衛部藥輸字第027693號 (v3, 2024-04-12) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F<br>- LactMed: Baloxavir NBK535610 (rev. 2025-03-15) — https://www.ncbi.nlm.nih.gov/books/NBK535610/

**Why:** The page body is blank. Other entries such as Rapiacta use this section structure, and every statement proposed here is taken from the four official sources listed. No storage or stability details are included.

**Sources:** DailyMed XOFLUZA (all sections cited above) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.1–4.8, §5.1–5.2 https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §1–§11 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; LactMed NBK535610 https://www.ncbi.nlm.nih.gov/books/NBK535610/

### A15 · Category

Antiviral, cap-dependent endonuclease (PA) inhibitor

**Why:** The current value is correct. The proposal only matches the style of the other antiviral entries (e.g. Rapiacta: 'Antiviral, neuraminidase inhibitor') and adds the US label's PA-endonuclease wording. Optional.

**Sources:** DailyMed XOFLUZA §1 'influenza virus polymerase acidic (PA) endonuclease inhibitor' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §5.1 'cap-dependent endonuclease (CEN)' https://www.medicines.org.uk/emc/product/14764/smpc

### B1 · Adult dose

<span color="blue">`PO`</span> **Single dose 單次服用** as soon as possible, ≤48 h after symptom onset (treatment) or after close contact (PEP 暴露後預防):<br>• 20–\<80 kg: **40 mg** = 20 mg tab ×2<br>• ≥80 kg: **80 mg** = 20 mg tab ×4<br>With or without food, but do NOT co-ingest dairy, Ca-fortified drinks, or polyvalent-cation products (antacids, laxatives, Ca/Fe/Mg/Se/Zn supplements).<br>US/UK: same weight bands using 40 mg / 80 mg tablets. No data on a repeat dose within one influenza season (UK 4.2).

**Why:** Empty column that the labels fill. The stocked 20 mg tablet needs the tablet count from the Taiwan insert. All three labels give the same 40/80 mg weight bands.

**Sources:** Taiwan insert 紓伏效膜衣錠20毫克 §3.1 用法用量 (20–<80 kg: 20mg錠 2錠; ≥80 kg: 4錠; 48 h; avoid dairy/polyvalent cations) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; US FDA label §2.1–2.2 Table 1 (20 to <80 kg: 40 mg; ≥80 kg: 80 mg; single dose within 48 h) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.2 Table 1 + 'no clinical data on the use of a repeat dose... in any one influenza season' https://www.medicines.org.uk/emc/product/14764/smpc

### B2 · Renal dose, HD, CRRT

**CrCl ≥30**: no adjustment (TW insert). US label: no clinically significant PK change at CrCl ≥50. UK SmPC: no adjustment in renal impairment.<br>**CrCl <30**: no PK data (TW, US); single dose, not dose-adjusted in any label.<br>**HD**: unlikely to be removed by dialysis (93% protein-bound); no need to time the dose around HD.<br>**CRRT**: no data.<br>(Renal excretion of baloxavir is minor: urine 14.7% of total radioactivity, only 3.3% as baloxavir; feces 80%.)

**Why:** Empty column. The labels differ on renal dosing, so the stocked product's label (the Taiwan insert) governs, with the US and UK values given alongside, as the ground rules require. A PubMed search (baloxavir[ti] AND dialysis/renal) found only one IDCases report (PMID 32489873, CKD patient on ECMO, no PK data) and no CRRT or HD pharmacokinetic study, so 'no data' is the accurate statement.

**Sources:** Taiwan insert §6.7 & §11.3 腎功能不全 (CrCl≥30 不需調整; CrCl<30 無資料) and §9 過量 (高血清蛋白結合性，無法以透析方式移除) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; US FDA label §12.3 (no clinically significant PK differences at CrCl ≥50 mL/min; severe renal impairment not evaluated; urine 14.7% total radioactivity / 3.3% baloxavir) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.2 'No dose adjustment is required in patients with renal impairment' and §4.9 'unlikely to be significantly removed by dialysis' https://www.medicines.org.uk/emc/product/14764/smpc; PubMed PMID 32489873 (Tobar Vega, IDCases 2020; verified via esummary) https://pubmed.ncbi.nlm.nih.gov/32489873/

### B3 · Hepatic dose

Child-Pugh A–B: no adjustment (moderate HI: Cmax 0.8×, AUC 1.1× vs normal).<br>Child-Pugh C: not studied, use with caution (TW: 慎重投與).

**Why:** Empty column that all three labels cover consistently.

**Sources:** Taiwan insert §5.1.1 (重度肝功能不全 慎重投與), §6.6 and §11.2 (Child-Pugh B: Cmax 0.8×, AUC 1.1×) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; UK SmPC §4.2 Hepatic impairment (no adjustment Child-Pugh A/B; C not established) https://www.medicines.org.uk/emc/product/14764/smpc; US FDA label §12.3 (no clinically significant difference in moderate hepatic impairment, Child-Pugh B; severe not evaluated) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7

### B4 · Pediatric dose

<span color="blue">`PO`</span> **≥5 y AND ≥20 kg** (TW): same single dose as adults. 20–<80 kg: 40 mg (20 mg tab ×2); ≥80 kg: 80 mg (tab ×4).<br><20 kg or <5 y: not covered by the TW 20 mg tab. US: oral suspension 2 mg/kg (<20 kg, ≥5 y; not stocked). UK: granules from 3 weeks of age.<br>US: NOT indicated <5 y because of treatment-emergent resistance (40% in <5 y vs 16% at 5–<12 y vs 7% at ≥12 y). 兒童須注意流感相關異常行為 (see Notes).

**Why:** Empty column. The stocked form fits only children ≥20 kg. The weight-based 2 mg/kg dose applies only to the suspension, which the hospital does not stock. There is no '1 mg/kg' dose in any label (see the hospital-database issues).

**Sources:** Taiwan insert §2 適應症 (5歲以上且體重20公斤以上) and §3.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; US FDA label §2.2 Table 3 (bottles: <20 kg 2 mg/kg) and §5.2 (40% 38/96 vs 16% 19/117 vs 7% 60/842) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.1 (≥3 weeks of age), §4.2 Table 1 (<20 kg: granules) and §5.2 (2 mg/kg up to 20 kg) https://www.medicines.org.uk/emc/product/14764/smpc

### B5 · Indications

["Influenza"]

**Why:** The existing option 'Influenza' covers treatment of acute uncomplicated influenza within 48 h of onset (otherwise healthy or high risk) and post-exposure prophylaxis. Both are approved in the US label (≥5 y) and the UK SmPC (≥3 weeks). Write the PEP and age/weight limits in Notes.

**Sources:** US FDA label §1.1–1.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §2 適應症 (A型及B型流感治療與暴露後預防, ≥5歲且≥20 kg) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### B6 · Coverage

["Influenza A","Influenza B"]

**Why:** Both options already exist. All labels give activity against influenza A and B. In vitro activity also covers NAI-resistant strains (H274Y etc.) and avian A/H5N1 and H7N9; put that in Notes, since no option exists for it.

**Sources:** UK SmPC §5.1 (IC50/EC50 for A and B; active vs NAI-resistant H274Y, E119V, R292K, R152K, D198E; H5N1/H7N9) https://www.medicines.org.uk/emc/product/14764/smpc; US FDA label §12.4 Antiviral Activity https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### B7 · Side Effects

["GI","LFT↑","CNS"]

**Why:** GI: diarrhoea 3%, nausea 2%, vomiting 5% in children (US); diarrhoea and vomiting 'common' (UK). Post-marketing reports include colitis, haematochezia and melena (US) and ischaemic colitis (TW). LFT↑: ALT/AST rise is the main lab abnormality in the TW insert (ALT 0.9%). CNS: headache, taste and smell disturbance (TW), plus post-marketing delirium, abnormal behaviour and hallucinations (US 6.2). Hypersensitivity (anaphylaxis, angioedema, urticaria, erythema multiforme) has no matching option, so it goes in Notes. Do not use SJS/TEN for erythema multiforme.

**Sources:** US FDA label §6.1 and §6.2 Postmarketing (Psychiatric: delirium, abnormal behavior, hallucinations; GI: vomiting, hematochezia, melena, colitis) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §8.2 (ALT上升 0.9%; 頭痛、味覺障礙、嗅覺異常; 腹瀉) and §8.3 表8-1 (缺血性結腸炎) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; UK SmPC §4.8 Tables 2–3 https://www.medicines.org.uk/emc/product/14764/smpc

### B8 · Monitor

["CNS"]

**Why:** It is a single oral dose, and no label requires routine lab monitoring. The TW insert tells caregivers to watch for abnormal behaviour (fall risk, mostly in school-age boys and adolescents) for at least 2 days after fever onset. Monitoring for hypersensitivity and secondary bacterial infection is clinical, with no matching option, so put it in Notes.

**Sources:** Taiwan insert §5.1.2(1) 重要基本注意事項 (異常行為; 自發燒起至少2天內預防墜落) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; US FDA label §5.1, §5.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7

### B9 · Mechanism

Prodrug: baloxavir marboxil is hydrolysed (esterases) to baloxavir. Baloxavir inhibits the **cap-dependent endonuclease** of the influenza polymerase acidic (PA) subunit, blocking 'cap-snatching' so that viral mRNA transcription and replication stop. 抑制 PA 蛋白之 cap 依存性內切酶，阻斷病毒 mRNA 合成. t½ ≈79 h, so one dose is enough. Resistance: PA I38T/M/F/N/S (also E23, A37T, E199G; T20K in B).

**Why:** Empty column. The mechanism is the same in all labels. The half-life and resistance substitutions are label facts that explain why one dose is enough and why resistance is a concern.

**Sources:** UK SmPC §5.1 Mechanism of action & Resistance https://www.medicines.org.uk/emc/product/14764/smpc; US FDA label §12.4 (mechanism; Table 8 substitutions) and §12.3 Table 6 (t½ 79.1 h) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §10.1 作用機轉 & §11.1 (esterase hydrolysis) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F

### B10 · Drug Interactions

• **Polyvalent cations** (Ca/Al/Mg/Fe/Se/Zn, antacids, laxatives, dairy, Ca-fortified drinks): chelation lowers exposure (monkeys 48–63%). Avoid co-ingestion.<br>• **LAIV (live intranasal flu vaccine)**: the antiviral may reduce vaccine effectiveness (not studied). Inactivated vaccine: interaction not evaluated.<br>• No clinically significant CYP/UGT/P-gp/BCRP interactions (itraconazole, probenecid, midazolam, digoxin, rosuvastatin, oseltamivir).<br>(Metabolised mainly by UGT1A3, minor CYP3A4; P-gp substrate.)

**Why:** Empty column. Note that no label gives a specific separation interval for cations or LAIV, so do not invent one.

**Sources:** US FDA label §7.1, §7.2 and §12.3 Drug Interaction Studies https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; Taiwan insert §7.2 (表7-1/7-2) & §7.3 多價陽離子 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; UK SmPC §4.5 https://www.medicines.org.uk/emc/product/14764/smpc

### B11 · Pregnancy

No adequate human data. Animal studies (rat/rabbit) showed no teratogenicity; rabbit abortions and cervical-rib variation occurred only at a maternally toxic dose. US label uses a risk summary (no letter category) and notes that influenza itself raises maternal and fetal risk. UK: 'preferable to avoid' as a precaution. TW: 有益性高於危險性時才可投與. IDSA 2018 prefers oseltamivir in pregnancy (baloxavir not addressed).

**Why:** Empty column. Do not write a letter category. The IDSA 2018 guideline prefers oseltamivir for pregnant women and says it could not make baloxavir recommendations, because approval came after the guideline was finalised.

**Sources:** US FDA label §8.1 Risk Summary https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/14764/smpc; Taiwan insert §6.1 懷孕 & §10.3.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; IDSA 2018 influenza guideline (Uyeki, CID 2019; PMID 30566567 verified via esummary) – 'Oseltamivir is preferred for treatment of influenza in pregnant women'; 'New Developments After Guideline Finalization' https://www.idsociety.org/practice-guideline/influenza/

### B12 · Breastfeeding

LactMed: no human data; 93% protein-bound → milk levels likely low. If the mother needs baloxavir, that is not a reason to stop breastfeeding, but an alternate (oseltamivir, zanamivir) may be preferred, esp. for a newborn or preterm infant.<br>US 8.2: present in rat milk (~5× plasma); weigh breastfeeding benefit against maternal need.<br>UK 4.6: decide whether to stop breastfeeding or abstain from therapy.<br>仿單: 投藥療程中避免母乳哺餵 (stricter).

**Why:** Empty column. LactMed is the primary source for breastfeeding. The stricter Taiwan wording is shown alongside.

**Sources:** LactMed 'Baloxavir' NBK535610 (rev. 2025-03-15) Summary of Use during Lactation; Alternate Drugs https://www.ncbi.nlm.nih.gov/books/NBK535610/; Taiwan insert §6.2 哺乳 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; UK SmPC §4.6 Breast-feeding https://www.medicines.org.uk/emc/product/14764/smpc; US FDA label §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7

### B13 · Notes

本院品項 XOF01 紓伏效 20 mg tab: 40 mg = 2 tabs, 80 mg = 4 tabs, single dose. No granules or suspension stocked → not for \<20 kg or patients unable to swallow tablets.<br>• Indications: acute uncomplicated influenza ≤48 h (otherwise healthy or high-risk) + post-exposure prophylaxis (PEP). TW: ≥5 y & ≥20 kg; US: ≥5 y; UK: ≥3 weeks.<br>• **Not established for hospitalised/severe influenza** (仿單 §2.1.2). FLAGSTONE: baloxavir + NAI was not superior to NAI alone in hospitalised severe influenza.<br>• **Resistance**: treatment-emergent PA/I38X ~7% (≥12 y, US pooled; 5–10% across UK trials), 16–19% in 5–\<12 y, 40% in \<5 y. Check local susceptibility data (US §1.3).<br>• Active in vitro against NAI-resistant strains (H274Y) and avian H5N1/H7N9.<br>• Contraindicated after prior hypersensitivity (anaphylaxis, angioedema, urticaria, erythema multiforme). Abnormal behaviour 異常行為 with influenza: watch ≥2 days after fever onset (fall risk). Secondary bacterial infection can mimic or complicate influenza.<br>• Contains lactose. TDM: none. No CRRT data.

**Why:** Empty column. It should carry facts that have no multi-select option (hypersensitivity, PEP, the age/weight limit, NAI-resistant activity), the dosing for the stocked strength, and the key guideline/RCT context that no label covers.

**Sources:** Taiwan insert §2, §2.1.2 (對需要住院的嚴重流感病人之有效性尚未建立), §4, §5.1.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F; Kumar D et al. FLAGSTONE, Lancet Infect Dis 2022;22:718-730, PMID 35085510 (verified via esummary) https://pubmed.ncbi.nlm.nih.gov/35085510/; US FDA label §1.3, §4, §5.1–5.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7; UK SmPC §4.4 (lactose), §5.1 Resistance (36/370 = 9.7% adults; 11/57 = 19.3% children 1–<12 y) https://www.medicines.org.uk/emc/product/14764/smpc

### B14 · Page body

Use the full section structure of the Rapiacta (Peramivir) entry (Category, Mechanism, Indications, Coverage, Adult Dose, Renal, Hepatic, Pediatric, Side Effects, Monitor, Drug Interactions, Pregnancy, Breastfeeding, Pharmacokinetics) as in A14, ending with:<br>### References<br>- US FDA label (DailyMed, Dec 2025): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7<br>- UK SmPC (rev. 29 Dec 2025): https://www.medicines.org.uk/emc/product/14764/smpc<br>- 紓伏效膜衣錠20毫克 仿單 (衛部藥輸字第027693號, v3 2024-04-12): https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027693%E8%99%9F<br>- LactMed NBK535610: https://www.ncbi.nlm.nih.gov/books/NBK535610/<br>- FLAGSTONE (Kumar, Lancet Infect Dis 2022), PMID 35085510: https://pubmed.ncbi.nlm.nih.gov/35085510/<br>- CENTERSTONE (Monto, NEJM 2025), PMID 40267424: household transmission by day 5 9.5% vs 13.4%; resistance emerged in 7.2% of baloxavir index patients, none detected in contacts: https://pubmed.ncbi.nlm.nih.gov/40267424/

**Why:** An empty body is acceptable, but a reference list makes the new entry auditable. I could not check whether other entries use the body for references (Notion query limit), so this is optional.

**Sources:** Monto AS et al. N Engl J Med 2025 (CENTERSTONE), PMID 40267424 (verified via esummary) https://pubmed.ncbi.nlm.nih.gov/40267424/

## Apply log

- Category: Antiviral, cap-dependent endonuclease (PA) inhibitor
- Adult dose (merged A1 + A17)
- Renal dose, HD, CRRT (merged A2 + A18)
- Hepatic dose (merged A3 + A19)
- Pediatric dose (merged A4 + A20)
- Indications: [Influenza]
- Coverage: [Influenza A, Influenza B]
- Side Effects: [GI, LFT↑, CNS]
- Monitor: [CNS]
- Mechanism (merged)
- Drug Interactions (merged)
- Pregnancy (merged, incl. IDSA 2018 note; no letter category)
- Breastfeeding (merged)
- Notes (merged, incl. XOF01 stock, FLAGSTONE, resistance, hypersensitivity, lactose)
- Page body: full Rapiacta-style sections Category→Pharmacokinetics with adult dose table
- References section appended (US FDA label, UK SmPC, Taiwan insert, LactMed, FLAGSTONE, CENTERSTONE, IDSA 2018)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
