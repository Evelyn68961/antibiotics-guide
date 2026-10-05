# Verification: Vfend (Voriconazole)

- **Notion entry:** [Vfend (Voriconazole)](https://app.notion.com/255c496dfff18063b151f514c0244382)
- **Hospital codes:** VFE01 (Vfend inj 200 mg), VFE02 (Vfend tab 200 mg), VOR03 (generic tab)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/voriconazole.json` (plus any `sources/voriconazole-taiwan-insert-*.txt`)

## Product and sources

Vfend (voriconazole), Pfizer. The hospital stocks VFE01 Vfend inj 200 mg/vial (黴飛凍晶注射液, TFDA 衛署藥輸字第023648號, NHI BC23648263), VFE02 Vfend 200 mg film-coated tab (黴飛膜衣錠, 衛署藥輸字第023646號, NHI BC23646100), and VOR03, a temporary-purchase (臨採) generic voriconazole 200 mg tab (NHI BC26337100). Sources checked: US label (DailyMed setid ce3ef5cf-3087-4d92-9d94-9eb8287228db, Mar 02 2026); UK SmPC IV (emc 7976) and tablet (emc 8408), both revised 09/2026; Taiwan insert (shared by inj and tab, CDS 20250715-2, 版次6 2025-04-28); LactMed NBK575380 (rev 2022-11-30). The Notion page has only "Adult dose" filled in. Every other column and the page body are empty.

## Agreed fixes applied in Notion (29)

### A1 · Adult dose (unsupported)

**Was:** **Loading dose:** 6 mg/kg IV q12h (2 doses)<br>**Maintenance dose:** 4 mg/kg IV q12h<br>常見劑量: 200mg IV q12h

**Now:** **Loading dose:** 6 mg/kg IV q12h (2 doses)<br>**Maintenance dose:** 4 mg/kg IV q12h (candidemia/deep Candida: 3–4 mg/kg IV q12h；無法耐受 → 3 mg/kg q12h)<br><span color="blue">`PO`</span> loading 400 mg q12h ×2 (UK/TW; <40 kg: 200 mg q12h ×2) → maintenance 200 mg q12h (反應不佳可↑300 mg q12h)；<40 kg: 100 mg q12h (max 150 mg q12h)<br>Esophageal candidiasis: 200 mg PO q12h (IV not evaluated)<br>PO: 飯前或飯後至少 1 小時服用 / take ≥1 h before or after meals<br>常見劑量: 200mg PO q12h (IV 依體重計算)

**Why:** The IV loading and maintenance doses already on the page are correct. The line "常見劑量: 200mg IV q12h" has no source: every label doses IV voriconazole by weight (mg/kg), and 200 mg q12h is the ORAL maintenance dose (US Table 1; UK 4.2; TW 3.1). The column also leaves out the whole oral regimen, the 3–4 mg/kg candidemia maintenance, the <40 kg dosing, and the food instruction. The oral 400 mg q12h loading dose is in the UK and Taiwan labels only (US loads IV only). Keep the existing lines. The smallest fix is to change "IV" to "PO" in the 常見劑量 line, or to say that IV doses are weight-based. Use the owner's existing PO tag colour if it differs from blue.

**Sources:** US FDA VFEND label, 2.1 'Administer VFEND Tablets... at least one hour before or after a meal'; 2.3 Table 1 (IA 6 mg/kg q12h ×24h then 4 mg/kg q12h IV / 200 mg PO q12h; candidemia 3–4 mg/kg q12h; EC 200 mg PO q12h, IV not evaluated; <40 kg half oral dose; 'unable to tolerate 4 mg/kg... reduce to 3 mg/kg') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC VFEND IV 4.2 dosing table (oral loading 400 mg q12h ≥40 kg, 200 mg q12h <40 kg; maintenance 200/100 mg BID) https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan insert 黴飛 3.1 用法用量 (負荷劑量 IV 6mg/kg q12h；口服 400mg q12h, <40kg 200mg q12h；維持 4mg/kg / 200mg / 100mg q12h；膜衣錠需於飯前至少一小時或飯後一小時服用) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A2 · Renal dose, HD, CRRT (missing)

**Was:** (empty)

**Now:** <span color="blue">`PO`</span>: 任何 CrCl 均不需調整 / no adjustment for any CrCl<br><span color="green">`IV`</span> CrCl <50: 賦形劑 SBECD 蓄積 → 除非效益大於風險，應改口服；若用 IV 需密切監測 SCr，上升時考慮改 PO (TW/UK/US 2.6；US Highlights: avoid IV)<br>HD: 不需調整 (4-h HD 清除量不足)；voriconazole 與 SBECD 皆可被透析<br>CRRT: 仿單無建議；CVVH 對 voriconazole 清除不具臨床意義 → 標準劑量；CVVH 可有效清除 SBECD，標準 IV 劑量未見 SBECD 蓄積 (Kiser 2015 PMID 25645660, n=10)；建議 TDM

**Why:** The column is empty, but all three labels cover it. The Taiwan insert is for the product the hospital stocks, so it comes first. The Taiwan, UK and full US 2.6 texts agree: switch to oral unless benefit/risk justifies IV, and monitor creatinine. Only the US Highlights uses the stronger 'Avoid intravenous administration'. No label covers CRRT, so that line cites a PubMed PK study (PMID 25645660, verified with esummary).

**Sources:** Taiwan insert 3.3 腎功能不全病人使用 (口服無須調整；CrCl<50 SBECD 累積，除非 IV 好處大於風險，否則應以口服；監測血清肌酸酐；血液透析 4 小時…沒有理由要調整劑量) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F; US FDA label 2.6 Dosage Modifications in Patients With Renal Impairment (and Highlights 'Avoid intravenous administration... CrCl <50') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.2 Renal impairment (haemodialysis clearance 121 mL/min; SBECD 55 mL/min) https://www.medicines.org.uk/emc/product/7976/smpc; UK SmPC tablets 4.2 Renal impairment 'no adjustment is necessary for oral dosing... mild to severe renal impairment' https://www.medicines.org.uk/emc/product/8408/smpc; Kiser TH et al. Crit Care 2015;19:32, PMID 25645660 (conclusion: 'Standard dosages of IV voriconazole can be utilized in patients undergoing CVVH without significant risk of SBECD accumulation') https://pubmed.ncbi.nlm.nih.gov/25645660/

### A3 · Hepatic dose (missing)

**Was:** (empty)

**Now:** Child-Pugh A/B: 標準 loading dose，maintenance dose 減半 / standard loading, halve maintenance<br>Child-Pugh C: 無資料；僅於效益大於風險時使用並密切監測毒性<br>Baseline AST/ALT ≤5×ULN: 不需調整，但持續監測 LFT

**Why:** Empty column. All three labels give the same hepatic dosing.

**Sources:** US FDA label 2.5 Dosage Modifications in Patients With Hepatic Impairment https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.2 Hepatic impairment https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan insert 3.3 肝功能不全病人使用 (Child-Pugh A/B 維持劑量需減半；C 級無資料) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A4 · Pediatric dose (missing)

**Was:** (empty)

**Now:** 2–<12 y 及 12–14 y <50 kg: <span color="green">`IV`</span> loading 9 mg/kg q12h ×24h → 8 mg/kg q12h；<span color="blue">`PO`</span> 9 mg/kg q12h (max 350 mg q12h)；建議先 IV，臨床明顯改善後才轉 PO (8 mg/kg IV 暴露量約為 9 mg/kg PO 的 2 倍；不建議 PO loading)；2–<12 y 建議用口服懸液<br>Esophageal candidiasis (US): IV 4 mg/kg q12h (no loading) 或 PO 9 mg/kg q12h<br>反應不足: 每次 +1 mg/kg (PO 已達 350 mg 則 +50 mg)；不耐受: 每次 −1 mg/kg (或 −50 mg)<br>12–14 y ≥50 kg、≥15 y: 同成人劑量<br><2 y: 安全性/有效性未確立，不建議<br>兒童腎/肝功能不全劑量未確立

**Why:** Empty column. The US, UK and Taiwan labels give the same paediatric regimen. US 2.4 also gives 4 mg/kg IV q12h maintenance for candidemia, scedosporiosis and fusariosis in this age band. Add that if the owner wants indication-level detail.

**Sources:** US FDA label 2.4 Table 2 and 8.4 Pediatric Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.2 Children (2 to <12 years) and young adolescents... https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan insert 3.1 兒童 (8 毫克/公斤每日兩次 IV；9 毫克/公斤每日兩次口服，最高 350 毫克；二歲以下不建議) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A5 · Indications (missing)

**Was:** (empty)

**Now:** Aspergillosis, Candidiasis

**Why:** Approved indications (FDA or UK) are: invasive aspergillosis; candidemia in non-neutropenic patients and deep-tissue Candida infections; esophageal candidiasis (US); fluconazole-resistant serious invasive Candida, including C. krusei (UK); and Scedosporium/Fusarium infections. The UK and Taiwan also approve prophylaxis of invasive fungal infection in high-risk allogeneic HSCT recipients. The schema has no option for Scedosporium/Fusarium or HSCT antifungal prophylaxis. Do NOT tag 'Surgical prophylaxis' or 'FN'. No label lists empirical febrile neutropenia. Mention these indications in Notes instead (see A13).

**Sources:** US FDA label 1 INDICATIONS AND USAGE (1.1–1.4) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.1 Therapeutic indications (incl. 'Prophylaxis of invasive fungal infections in high risk allogeneic HSCT recipients') https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan insert 2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A6 · Coverage (missing)

**Was:** (empty)

**Now:** Candida, Aspergillus

**Why:** US 12.4 lists activity, in vitro and in clinical infections, against A. fumigatus, flavus, niger and terreus; C. albicans, glabrata, krusei, parapsilosis and tropicalis; Fusarium spp.; and Scedosporium apiospermum. The schema has no Fusarium or Scedosporium option, so put those in Notes. Note also that C. glabrata may have reduced susceptibility: US 12.4 reports 26% of baseline isolates resistant, and cross-resistance with fluconazole and itraconazole can occur.

**Sources:** US FDA label 12.4 Microbiology – Antimicrobial Activity; Resistance https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db

### A7 · Side Effects (missing)

**Was:** (empty)

**Now:** LFT↑, GI, CNS, QTc prolong, photosensitivity, SJS/TEN, DRESS, hypokalemia, AKI, hematologic, dysglycemia

**Why:** These tags come from the label warnings and common adverse reactions. Hepatotoxicity: W&P 5.1. QT prolongation/TdP: 5.2. Hallucinations and other CNS effects: 6. Phototoxicity and SCC: 5.6. SCARs (SJS/TEN/DRESS): 5.5. Acute renal failure: 5.7. Nausea, vomiting, diarrhoea and abdominal pain are very common (UK 4.8). Hypokalaemia is common (UK 4.8). Optional tags: dysglycemia (hypoglycaemia is common in UK 4.8) and thrombocytopenia (common in UK 4.8). The most common adverse effect, visual disturbance (18.7%, US 6.1), has no schema option, so put it in Notes.

**Sources:** US FDA label 5 WARNINGS AND PRECAUTIONS (5.1, 5.2, 5.5, 5.6, 5.7) and 6.1 (visual disturbances 18.7%, hallucinations 2.4%) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.8 Undesirable effects https://www.medicines.org.uk/emc/product/7976/smpc

### A8 · Monitor (missing)

**Was:** (empty)

**Now:** LFT, renal, electrolyte, ECG

**Why:** LFT: check transaminases and bilirubin at baseline, at least weekly for the first month, then monthly (5.1). Renal: serum creatinine (5.7, 5.10). Electrolytes: correct K, Mg and Ca before and during therapy (5.2, 5.10). ECG: QT prolongation risk (5.2). Visual function monitoring if therapy runs beyond 28 days (5.4) and TDM have no schema option, so put them in Notes.

**Sources:** US FDA label 5.1, 5.2, 5.4, 5.7, 5.10 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.4 Monitoring of hepatic function / renal function / Cardiovascular https://www.medicines.org.uk/emc/product/7976/smpc

### A9 · Mechanism (missing)

**Was:** (empty)

**Now:** Inhibits fungal CYP450-dependent 14α-lanosterol demethylase → ↓ergosterol synthesis → fungal cell membrane disruption

**Why:** Empty column. The wording follows the existing Micafungin entry's style. The US label says 'fungal cell wall', but ergosterol is a membrane sterol, and the Taiwan insert correctly says 細胞膜, so 'membrane' is used.

**Sources:** US FDA label 12.4 Microbiology – Mechanism of Action https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; Taiwan insert 藥理 (抑制黴菌中由細胞色素 P450 所媒介的 14α-lanosterol 去甲基化作用…黴菌細胞膜中的麥角脂醇便會減少) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A10 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Strong CYP3A4 inhibitor (+2C19/2C9)；本身由 CYP2C19 (主)/2C9/3A4 代謝<br>**禁忌併用:** pimozide, quinidine, ivabradine, ergot alkaloids, sirolimus, lurasidone, naloxegol, tolvaptan, finerenone, eplerenone, voclosporin, venetoclax (CLL/SLL 起始/ramp-up)；UK/TW 另含 terfenadine, astemizole, cisapride<br>**誘導劑 (↓vori, 禁忌):** rifampin, carbamazepine, long-acting barbiturates, St John's wort, efavirenz ≥400 mg/d, ritonavir ≥400 mg q12h；rifabutin (US/TW 禁忌；UK: 避免，除非效益>風險)<br>**需調整:** phenytoin → vori 5 mg/kg IV q12h 或 400 mg PO q12h；efavirenz → vori 400 mg PO q12h + efavirenz 300 mg qd<br>cyclosporine 減為 1/2、tacrolimus 減為 1/3 並監測濃度；omeprazole ≥40 mg 減半；warfarin 密切監測 PT/INR<br>避免: fluconazole、low-dose ritonavir、everolimus；letermovir ↓vori<br>注意: opioids (fentanyl, oxycodone, methadone—QT)、statins、CCB、sulfonylureas (低血糖)、vinca alkaloids、TKIs、corticosteroids (adrenal dysfunction)

**Why:** Empty column. The labels have a long list of contraindications and clinically important interactions. Labels differ on rifabutin: it is contraindicated in US §4 and TW §4, but UK 4.2/4.4 allows it with vori 5 mg/kg IV BID if the benefit outweighs the risk. Terfenadine, astemizole and cisapride appear in the UK and TW contraindication lists only.

**Sources:** US FDA label 4 CONTRAINDICATIONS; 7 DRUG INTERACTIONS Tables 10–11 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.3 Contraindications; 4.4 (rifabutin, phenytoin, efavirenz, ritonavir); 4.2 Dosage adjustments in case of coadministration https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan insert 4 禁忌 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A11 · Pregnancy (missing)

**Was:** (empty)

**Now:** 可能造成胎兒傷害 (動物: 唇顎裂、腎積水、胚胎毒性)；無人類資料。除非對母體效益明顯大於胎兒風險，否則不可使用 (TW/UK)。Can cause fetal harm; avoid unless benefit clearly outweighs risk. 可能懷孕婦女治療期間須有效避孕 / effective contraception during treatment.

**Why:** Empty column. No letter category is given, because FDA retired letter categories and the US 8.1 narrative has none. Pregnancy is NOT a label contraindication.

**Sources:** US FDA label 5.9 Embryo-Fetal Toxicity; 8.1 Pregnancy; 8.3 Contraception https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.6 'must not be used during pregnancy unless the benefit to the mother clearly outweighs the potential risk to the foetus' https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan insert 懷孕 (不得於懷孕時使用，除非對母體的好處明顯超過對胎兒的潛在風險；可能懷孕的婦女必須在治療期間使用有效的避孕方式) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### A12 · Breastfeeding (missing)

**Was:** (empty)

**Now:** TW/UK 仿單: 開始治療時須停止哺乳 (stop breastfeeding on initiation)<br>LactMed: 無資料；需用藥時並非停止哺乳的理由，但可優先考慮替代藥 (e.g. fluconazole)，尤其新生兒/早產兒<br>US: 權衡哺乳益處與母親用藥需求

**Why:** Empty column. The official sources disagree. The Taiwan insert (stocked product) and the UK SmPC both require stopping breastfeeding. LactMed and the US 8.2 do not. Show both views so the reader knows which applies. Fluconazole is among LactMed's 'Alternate Drugs to Consider'.

**Sources:** Taiwan insert 哺乳 (哺乳婦女於開始使用 voriconazole 治療時必須停止哺乳) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F; UK SmPC IV 4.6 'Breast-feeding must be stopped on initiation of treatment' https://www.medicines.org.uk/emc/product/7976/smpc; LactMed NBK575380 Summary of Use during Lactation; Alternate Drugs to Consider (rev 2022-11-30) https://www.ncbi.nlm.nih.gov/books/NBK575380/; US FDA label 8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db

### A13 · Notes (missing)

**Was:** (empty)

**Now:** TDM: 建議於穩定態 (day 4–7) 測 trough，目標 >1–1.5 且 <5–6 µg/mL (IDSA 2016)；非線性 PK、CYP2C19 poor metabolizer 亞洲人約 15–20% → 暴露量可達 4 倍 / TDM recommended; nonlinear PK<br>視覺障礙最常見 (~19%)；療程 >28 天監測視力 / visual disturbance most common; monitor vision if >28 d<br>光敏感 → 避免日曬；長期使用曾報告皮膚 SCC、氟中毒/骨膜炎；>6 個月需重新評估效益風險<br>IV 最大速率 3 mg/kg/h，輸注 1–2 h (TW 仿單；US: 1–3 h)，不可 bolus；勿與血品或濃縮電解質同時輸注 (即使不同管路)<br>其他核准: Scedosporium/Fusarium 嚴重感染；高危險 HSCT 預防 (UK/TW；移植當天起至 100 天，最長 180 天)<br>錠劑含乳糖

**Why:** Empty column. These are label-supported items with no column of their own, plus TDM, which no label covers. TDM is a strong recommendation in IDSA 2016 (PMID 27365388, verified) and in ESCMID-ECMM-ERS 2017 (PMID 29544767, verified). No storage or stability details are included.

**Sources:** IDSA Aspergillosis guideline 2016, 'Triazole Drug Interactions and Therapeutic Drug Monitoring' ('trough of >1–1.5 µg/mL for efficacy but <5–6 µg/mL to minimize toxicity'; levels in first 4–7 days), PMID 27365388 https://www.idsociety.org/practice-guideline/aspergillosis/; ESCMID-ECMM-ERS 2017 Aspergillus guideline executive summary ('Therapeutic drug monitoring is strongly recommended for patients receiving... any form of voriconazole'), PMID 29544767 https://pubmed.ncbi.nlm.nih.gov/29544767/; US FDA label 2.1, 2.2, 5.4, 5.6, 5.12, 5.14, 6.1, 12.5 Pharmacogenomics https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC IV 4.1, 4.2 Prophylaxis in Adults and Children, 4.4 Long-term treatment https://www.medicines.org.uk/emc/product/7976/smpc

### A14 · Category (missing)

**Was:** (empty)

**Now:** Triazole antifungal

**Why:** Empty column. The wording matches the existing entry style (Micafungin: 'Echinocandin antifungal').

**Sources:** UK SmPC IV 4.1 'Voriconazole, is a broad-spectrum, triazole antifungal agent' https://www.medicines.org.uk/emc/product/7976/smpc; US FDA label 1 'VFEND is an azole antifungal' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db

### B1 · Adult dose (unsupported)

**Was:** 常見劑量: 200mg IV q12h

**Now:** 常見劑量 (≥40 kg): 200mg PO q12h

**Why:** No label gives IV voriconazole as a fixed 200 mg dose. IV maintenance is always weight-based: 4 mg/kg q12h, or 3–4 mg/kg for candidemia (US), with a floor of 3 mg/kg if not tolerated. The fixed 200 mg q12h dose is the oral maintenance dose for patients ≥40 kg. In a 70 kg patient, 200 mg IV is about 2.9 mg/kg, which is below the IA/Scedosporium/Fusarium maintenance dose. IDSA candidiasis gives '200 mg (3 mg/kg) twice daily' without naming a route, so a fixed IV dose is only defensible for candidemia step-down. I recommend correcting the route to PO.

**Sources:** US FDA label (VFEND, Pfizer/Roerig, setid ce3ef5cf, 2026-03-02) §2.3 Table 1: IV maintenance 4 mg/kg q12h (candidemia 3–4 mg/kg); oral tablets 200 mg q12h — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC VFEND 200 mg powder for infusion §4.2 table: IV 4 mg/kg twice daily; oral ≥40 kg 200 mg twice daily — https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan 仿單 黴飛 (衛署藥輸字第023648號) §3.1 table: 維持劑量 IV 每12小時 4mg/kg; 口服 ≥40kg 每12小時 200mg — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B2 · Adult dose (missing)

**Was:** **Loading dose:** 6 mg/kg IV q12h (2 doses)<br>**Maintenance dose:** 4 mg/kg IV q12h<br>常見劑量: 200mg IV q12h

**Now:** **Loading dose:** <span color="green">`IV`</span> 6 mg/kg q12h ×2 doses (first 24 h)；<span color="blue">`PO`</span> 400 mg q12h ×2 (<40 kg: 200 mg q12h ×2) [UK SmPC/TW 仿單; US label uses IV loading]<br>**Maintenance dose:** <span color="green">`IV`</span> 4 mg/kg q12h (IA, Scedosporium/Fusarium)；candidemia/deep Candida 3–4 mg/kg q12h；不耐受可降至 3 mg/kg q12h<br><span color="blue">`PO`</span> 200 mg q12h (<40 kg: 100 mg q12h)；反應不佳可增至 300 mg q12h (<40 kg: 150 mg q12h)，不耐受則每次減 50 mg 至 200 mg (100 mg)<br>Esophageal candidiasis: PO 200 mg q12h (IV not evaluated)，≥14 days 且症狀緩解後 ≥7 days (US)<br>常見劑量 (≥40 kg): 200mg PO q12h<br>IV: 最大速率 3 mg/kg/h，infuse over 1–3 h (TW 仿單: 1–2 h)；不可 IV bolus。PO: 飯前或飯後至少 1 小時服用

**Why:** The current loading dose and IA maintenance dose are correct. The cell leaves out all oral dosing, which matters because the hospital stocks VFE02 and VOR03 tablets. It also leaves out the oral loading dose, the <40 kg doses, the candidemia IV range, oesophageal candidiasis, dose titration (300 mg PO, or a step down to 3 mg/kg IV), the maximum infusion rate, and the food timing. One discrepancy between labels: the Taiwan insert says to finish the infusion within 1–2 h, while the US and UK labels say over 1–3 h.

**Sources:** US FDA label §2.1 (1 h before/after meal; max 3 mg/kg/h over 1–3 h; no bolus), §2.3 Table 1 and 'Method for Adjusting the Dosing Regimen in Adults' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC (IV) §4.2 loading/maintenance table incl. oral 400 mg q12h loading, 'If patient is unable to tolerate intravenous treatment at 4 mg/kg twice daily, reduce the dose to 3 mg/kg' — https://www.medicines.org.uk/emc/product/7976/smpc; UK SmPC (tablet) §4.2 'Method of administration ... at least one hour before, or one hour following, a meal' — https://www.medicines.org.uk/emc/product/8408/smpc; Taiwan 仿單 §3.1 用法用量 (給藥速度最大每小時 3mg/kg，1-2 小時內完成; 口服負荷劑量 400mg/200mg; 劑量調整) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B3 · Renal dose, HD, CRRT (missing)

**Was:** (empty)

**Now:** <span color="blue">`PO`</span> 任何 CrCl 皆不需調整<br><span color="green">`IV`</span> CrCl <50: 賦形劑 SBECD 蓄積 → 應改 PO，除非評估 IV benefit > risk；使用 IV 時密切監測 SCr，若上升考慮改 PO (TW 仿單/UK SmPC)。US label: avoid IV when CrCl <50<br>HD: 不需調整 (4-h HD 移除量不足以調整；vori HD clearance 121 mL/min, SBECD 55 mL/min)<br>CRRT: 仿單無資料。CVVH/CVVHDF 研究: vori 經 CRRT 清除不具臨床意義 → 標準劑量 (Fuhrmann 2007 PMID 17855725; Radej 2011 PMID 21654349)；CVVH 可有效清除 SBECD，標準 IV 劑量未見顯著 SBECD 蓄積 (Kiser 2015 PMID 25645660, n=10)。濃度變異大 → 建議 TDM

**Why:** Every label covers this. Following the ground rules, the wording comes from the Taiwan insert for the stocked product, which matches the UK SmPC, and the stricter US 'avoid IV' is shown alongside. No label covers CRRT. All three studies were checked with E-utilities esummary/efetch. All three found that CRRT clears voriconazole to a clinically insignificant degree, so no dose change is needed. Kiser 2015 also showed that CVVH removes SBECD. Radej 2011 found unpredictable accumulation and suggested level monitoring.

**Sources:** Taiwan 仿單 §3.3 腎功能不全病人使用 (膜衣錠 無須調整; 凍晶注射 CrCl<50 SBECD 累積 ... 應以口服方式治療; 血液透析 121 mL/min ... 沒有理由要調整劑量; SBECD 55 mL/min) — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F; UK SmPC (IV) §4.2 'Renal impairment' — https://www.medicines.org.uk/emc/product/7976/smpc; US FDA label §2.6 and Highlights 'Renal Impairment: Avoid intravenous administration in adult patients with moderate to severe renal impairment (creatinine clearance <50 mL/min)' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; Fuhrmann V et al. J Antimicrob Chemother 2007;60:1085-90, PMID 17855725 — https://pubmed.ncbi.nlm.nih.gov/17855725/; Radej J et al. Ther Drug Monit 2011;33:393-7, PMID 21654349 — https://pubmed.ncbi.nlm.nih.gov/21654349/; Kiser TH et al. Crit Care 2015;19:32, PMID 25645660 — https://pubmed.ncbi.nlm.nih.gov/25645660/

### B4 · Hepatic dose (missing)

**Was:** (empty)

**Now:** Child-Pugh A/B: loading dose 不變，maintenance dose 減半<br>Child-Pugh C: 未研究；僅在 benefit > risk 時使用，密切監測毒性<br>急性肝功能異常 (ALT/AST ≤5×ULN): 不需調整，持續監測 LFT<br>兒童肝功能不全: 劑量調整未建立

**Why:** The US, UK and Taiwan labels all give the same wording. The cell is empty.

**Sources:** US FDA label §2.5 Dosage Modifications in Patients With Hepatic Impairment — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §4.2 'Hepatic impairment' — https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan 仿單 §3.3 肝功能不全病人使用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B5 · Pediatric dose (missing)

**Was:** (empty)

**Now:** 2–<12 y 及 12–14 y 且 <50 kg:<br><span color="green">`IV`</span> loading 9 mg/kg q12h ×2 (first 24 h) → maintenance 8 mg/kg q12h<br><span color="blue">`PO`</span> 9 mg/kg q12h (max 350 mg q12h)；不建議 PO loading<br>建議先 IV，臨床明顯改善後再轉 PO (8 mg/kg IV 暴露量約為 9 mg/kg PO 的 2 倍)；2–<12 y 建議用口服懸液<br>Esophageal candidiasis (US): IV 4 mg/kg q12h (no loading) 或 PO 9 mg/kg q12h<br>反應不足: 每次增加 1 mg/kg (或 50 mg)；不耐受則每次減 1 mg/kg (或 50 mg)<br>12–14 y ≥50 kg 及 ≥15 y: 同成人劑量<br><2 y: 安全性/有效性未確立

**Why:** All three labels give this dosing. The cell is empty.

**Sources:** US FDA label §2.4 Table 2 and 'Method for Adjusting the Dosing Regimen in Pediatric Patients' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC (tablet) §4.2 'Children (2 to <12 years) and young adolescents with low body weight' — https://www.medicines.org.uk/emc/product/8408/smpc; Taiwan 仿單 §3.3 兒童使用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B6 · Indications (missing)

**Was:** (empty)

**Now:** Aspergillosis, Candidiasis

**Why:** These are the only matching options in the schema. Invasive aspergillosis is approved in the US, UK and Taiwan. Candidemia and deep-tissue/oesophageal candidiasis are approved in the US, and fluconazole-resistant invasive Candida in the UK. The schema has no option for Scedosporium/Fusarium infection or for HSCT prophylaxis, which UK and Taiwan approve. 'Surgical prophylaxis' does not fit, so these go in Notes (see B13). Do not add FN, because empirical febrile neutropenia is not a labelled indication.

**Sources:** US FDA label §1 Indications and Usage (1.1–1.4) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §4.1 Therapeutic indications — https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan 仿單 §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B7 · Coverage (missing)

**Was:** (empty)

**Now:** Aspergillus, Candida

**Why:** US §12.4 lists A. fumigatus, A. flavus, A. niger and A. terreus. It also lists C. albicans, C. glabrata (MIC90 4 µg/mL, 26% resistant at baseline in trials), C. krusei, C. parapsilosis, C. tropicalis, Fusarium spp. and S. apiospermum. There is no schema option for Fusarium, Scedosporium or other moulds, so state them in Notes. Also note in Notes that voriconazole has no activity against Mucorales (IDSA).

**Sources:** US FDA label §12.4 Microbiology 'Antimicrobial Activity' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §5.1 'Clinical efficacy and safety' (fungicidal vs all Aspergillus spp. tested; C. krusei, resistant C. glabrata) — https://www.medicines.org.uk/emc/product/7976/smpc

### B8 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, CNS, QTc prolong, hypokalemia, photosensitivity, SJS/TEN, DRESS, AKI, hematologic, dysglycemia

**Why:** Every proposed tag is an existing schema option. Each is supported by the labels: very common nausea, vomiting and diarrhoea; abnormal LFTs and hepatotoxicity; headache, hallucinations and encephalopathy; QT prolongation and TdP; common hypokalaemia; phototoxicity; SJS/TEN/DRESS; common acute renal failure; common agranulocytosis, pancytopenia, thrombocytopenia, leukopenia and anaemia; and common hypoglycaemia. The most common ADR, visual disturbance (18.7%), has no tag. Nor do skin SCC, periostitis/fluorosis and adrenal insufficiency. These go in Notes.

**Sources:** US FDA label §5.1–5.12 and §6.1 (visual disturbances 18.7%, fever, nausea, rash ...) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §4.8 tabulated adverse reactions — https://www.medicines.org.uk/emc/product/7976/smpc

### B9 · Monitor (missing)

**Was:** (empty)

**Now:** LFT, renal, electrolyte, ECG

**Why:** Check LFTs (AST/ALT, bilirubin) at baseline, then at least weekly for the first month, then monthly. Monitor SCr, especially on IV with CrCl <50. Correct K, Mg and Ca before and during therapy. ECG/QTc: the labels advise caution with proarrhythmic conditions, and UK advises frequent ECG monitoring with QT-prolonging co-medication such as glasdegib. The ECG tag is a reasonable inference rather than an explicit routine-monitoring instruction. There are no schema options for TDM, visual function (>28 days), dermatologic review or amylase/lipase in high-risk patients, so put these in Notes.

**Sources:** US FDA label §5.1 (LFTs at initiation, weekly first month, then monthly), §5.2, §5.4, §5.7, §5.10 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §4.4 'Monitoring of hepatic function', 'Monitoring of renal function', 'Cardiovascular' — https://www.medicines.org.uk/emc/product/7976/smpc

### B10 · Mechanism (missing)

**Was:** (empty)

**Now:** Triazole antifungal: 抑制 fungal CYP450-dependent 14α-lanosterol demethylase (ERG11) → ergosterol 合成受阻、14α-methyl sterols 累積 → 細胞膜功能受損。In vitro 對 Aspergillus 具 fungicidal 活性。抗藥機轉: ERG11 突變、efflux pump (CDR) 上調；與 fluconazole/itraconazole 可能 cross-resistance

**Why:** The US and UK labels describe the mechanism and resistance. The cell is empty.

**Sources:** US FDA label §12.4 'Mechanism of Action' and 'Resistance' — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §5.1 'Mode of action' — https://www.medicines.org.uk/emc/product/7976/smpc

### B11 · Drug Interactions (missing)

**Was:** (empty)

**Now:** CYP2C19/2C9/3A4 受質；strong CYP3A4 inhibitor (亦抑制 2C19、2C9)<br>禁忌併用 (↑併用藥濃度): pimozide, quinidine, ivabradine, ergot alkaloids, sirolimus, naloxegol, tolvaptan, lurasidone, eplerenone, finerenone, voclosporin, venetoclax (CLL/SLL 起始/ramp-up 期)；UK/TW 另列 terfenadine, astemizole, cisapride<br>禁忌併用 (↓vori 濃度): rifampin, carbamazepine, 長效 barbiturates (phenobarbital), St John's wort, efavirenz ≥400 mg/day, high-dose ritonavir (≥400 mg q12h)<br>Rifabutin: US/TW 禁忌；UK 避免，若必須併用 vori ↑至 IV 5 mg/kg q12h 或 PO 350 mg q12h (<40 kg 200 mg)，監測 CBC/uveitis<br>劑量調整: phenytoin → vori IV 5 mg/kg q12h 或 PO 400 mg q12h (<40 kg 200 mg)；efavirenz → vori PO 400 mg q12h + EFV 300 mg QD<br>減量/監測: cyclosporine 減半、tacrolimus 減為 1/3 並監測濃度；omeprazole ≥40 mg 減半；warfarin 監測 PT/INR；statins (rhabdomyolysis)；sulfonylureas (低血糖)；vinca alkaloids (神經毒性)；methadone、fentanyl、oxycodone、alfentanil；CYP3A4 TKIs 減量；everolimus 不建議併用；low-dose ritonavir 避免；fluconazole 避免併用；letermovir ↓vori；corticosteroids (含吸入型) → Cushing/adrenal insufficiency

**Why:** Voriconazole interactions are numerous and clinically critical, and the cell is empty. The contraindication lists differ slightly between labels. US and Taiwan contraindicate rifabutin, while UK only says avoid it. UK and Taiwan add terfenadine, astemizole and cisapride. All three include voclosporin, which the source brief left out.

**Sources:** US FDA label §4 Contraindications; §7 Tables 10–11 (cyclosporine 1/2, tacrolimus 1/3, omeprazole ≥40 mg 1/2, phenytoin 5 mg/kg IV or 400 mg PO, efavirenz 400 mg/300 mg, letermovir, statins) — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §4.3 Contraindications; tablet SmPC §4.2 'Dosage adjustments in case of coadministration' (rifabutin 350 mg) — https://www.medicines.org.uk/emc/product/8408/smpc; Taiwan 仿單 §4 禁忌 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B12 · Pregnancy (missing)

**Was:** (empty)

**Now:** No FDA letter category (PLLR). US: can cause fetal harm (animal: cleft palate, hydronephrosis/hydroureter in rats; embryolethality in rabbits); no human data. TW 仿單/UK SmPC: 不得用於懷孕，除非對母體的好處明顯超過對胎兒的潛在風險。具生育能力女性治療期間須有效避孕

**Why:** This follows the ground rule not to give a letter category. The labels agree. None of them lists pregnancy as an absolute contraindication.

**Sources:** US FDA label §8.1 Pregnancy, §8.3, §5.9 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan 仿單 §6.1 懷孕, §6.3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F

### B13 · Breastfeeding (missing)

**Was:** (empty)

**Now:** Sources differ: TW 仿單 & UK SmPC: 開始治療時必須停止哺乳 (excretion into milk not studied)。US label: no data; weigh benefits of breastfeeding vs maternal need and infant risk。LactMed: no information; not a reason to discontinue breastfeeding, but an alternate drug (e.g., fluconazole) may be preferred, esp. newborn/preterm infant

**Why:** The sources genuinely disagree. The brief attributed 'stop breastfeeding' to Taiwan only, but the UK SmPC §4.6 says it too ('Breast-feeding must be stopped on initiation of treatment'). Both official labels for the stocked product (TW) and the UK say to stop. The US label and LactMed do not require it. Show both positions.

**Sources:** Taiwan 仿單 §6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F; UK SmPC §4.6 'Breast-feeding' — https://www.medicines.org.uk/emc/product/7976/smpc; US FDA label §8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; LactMed Voriconazole NBK575380 (rev. 2022-11-30) 'Summary of Use during Lactation'; Alternate drugs: clotrimazole, fluconazole, miconazole, nystatin — https://www.ncbi.nlm.nih.gov/books/NBK575380/

### B14 · Notes (missing)

**Was:** (empty)

**Now:** • 其他適應症 (無對應 tag): Scedosporium/Fusarium 嚴重感染；HSCT 高危病人侵入性黴菌感染預防 (UK/TW 核准；移植當天開始，最長 100 天，持續免疫抑制/GvHD 可至 180 天)<br>• 無 Mucorales 活性 (breakthrough mucormycosis on vori)；C. glabrata 敏感性不一<br>• IA: IV 至少 7 天，臨床改善後可轉 PO (US)；IDSA: IPA 療程至少 6–12 週<br>• TDM: 非線性 PK、個體差異大；IDSA 建議穩態 (第 4–7 天) 測 trough，目標 >1–1.5 且 <5–6 µg/mL (RCT target 1.0–5.5 mg/L, Park 2012 PMID 22761409)<br>• CYP2C19 poor metabolizers: 亞洲人約 15–20%，暴露量約 4 倍<br>• 視覺障礙最常見 (18.7%)；>28 天需監測視力/視野/色覺<br>• 長期使用 (>180 天需評估 benefit-risk): 光敏感、皮膚 SCC/melanoma、periostitis/fluorosis；需嚴格防曬<br>• 併用 corticosteroids: 注意 Cushing/adrenal insufficiency<br>• IV 不可與血液製品或濃縮電解質同時輸注 (即使不同管路)<br>• 錠劑含 lactose

**Why:** Notes is empty. These items come from the labels or from verified guideline and PubMed sources and have no other column. I deliberately left out storage and stability, per the owner's rule.

**Sources:** UK SmPC §4.1, §4.2 'Prophylaxis in Adults and Children', §4.4 'Long-term treatment' — https://www.medicines.org.uk/emc/product/7976/smpc; Taiwan 仿單 §2 適應症, §3.3 成人與兒童之預防治療 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC023648%E8%99%9F; US FDA label §2.2, §2.3, §5.4, §5.6, §5.8, §5.12, §5.14, §12.5 Pharmacogenomics — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db; IDSA Aspergillosis 2016 (Patterson, CID 63:e1, PMID 27365388) — TDM recommendation, 'trough of >1–1.5 µg/mL for efficacy but <5–6 µg/mL', 'lack of voriconazole activity against mucormycosis', 'minimum of 6–12 weeks' — https://www.idsociety.org/practice-guideline/aspergillosis/; Park WB et al. Clin Infect Dis 2012;55:1080-7, PMID 22761409 — https://pubmed.ncbi.nlm.nih.gov/22761409/

### B15 · Category (missing)

**Was:** (empty)

**Now:** Triazole antifungal

**Why:** UK SmPC §5.1 gives the pharmacotherapeutic group as 'Antimycotics for systemic use, triazole derivatives, ATC J02AC03'. The proposed wording follows the existing style in this database (e.g. 'Echinocandin antifungal' for Myfungin).

**Sources:** UK SmPC §5.1 Pharmacodynamic properties — https://www.medicines.org.uk/emc/product/7976/smpc

## Verified correct as written

- Adult dose: 'Loading dose: 6 mg/kg IV q12h (2 doses)' matches the label loading of 6 mg/kg q12h for the first 24 h (US 2.3 Table 1; UK 4.2; TW 3.1).
- Adult dose: 'Maintenance dose: 4 mg/kg IV q12h' matches IA, Scedosporium and Fusarium maintenance (US 2.3; UK 4.2; TW 3.1).
- Page title 'Vfend (Voriconazole)' correctly names the stocked products: TFDA 衛署藥輸字第023648號 (inj) and 023646 (tab), Pfizer.
- Sources JSON is consistent: dailymed setid ce3ef5cf… (Mar 02 2026, 14 sections), smpc emc 7976 and smpc_tablet emc 8408 (both revised 09/2026), lactmed NBK575380 (8 sections, matching .cache/lactmed/voriconazole.nxml), taiwan_insert text file present.
- Correction to source brief: the brief says the US renal guidance is 'avoid IV when CrCl <50' and is stricter than UK/TW. That wording is only in the Highlights. Full US section 2.6 reads 'Oral voriconazole should be administered to these patients, unless an assessment of the benefit/risk to the patient justifies the use of intravenous VFEND', which is the same as the UK and TW wording.
- Correction to source brief: the US contraindication list also includes voclosporin, plus a second group of inducers: carbamazepine, efavirenz ≥400 mg/day, long-acting barbiturates, rifabutin, rifampin, high-dose ritonavir 400 mg q12h, and St John's wort. Rifampin, carbamazepine, barbiturates, ritonavir and efavirenz therefore ARE in the current US list, so the hospital listing them is not itself a discrepancy.
- Correction to source brief: the UK SmPC 4.6 also says 'Breast-feeding must be stopped on initiation of treatment', not only the Taiwan insert.
- Label difference not in the brief: rifabutin is contraindicated in the US and TW labels. The UK SmPC allows it with voriconazole 5 mg/kg IV BID if the benefit outweighs the risk (4.2/4.4).
- Adult dose: 'Loading dose: 6 mg/kg IV q12h (2 doses)' is correct. US §2.3 Table 1 gives 6 mg/kg q12h for the first 24 h, which is 2 doses; UK SmPC §4.2 and Taiwan 仿單 §3.1 agree.
- Adult dose: 'Maintenance dose: 4 mg/kg IV q12h' is correct for IA and Scedosporium/Fusarium in US §2.3, UK §4.2 and TW §3.1. Candidemia is 3–4 mg/kg in the US label.
- Product identity: VFE01/VFE02/VOR03 on the hospital site match the TFDA licences 023648 (IV) and 023646 (200 mg tab), and the shared Taiwan insert covers both.
- Source brief figures re-checked against the JSON text: US renal ('avoid IV when CrCl <50'), hepatic (halve maintenance for Child-Pugh A/B), <40 kg oral 100–150 mg, US indications without prophylaxis, UK/TW prophylaxis approval, and the LactMed summary. All are accurate. The US contraindication list also includes voclosporin, which the brief left out.
- PMIDs checked with NCBI esummary/efetch: 17855725 (Fuhrmann 2007 CVVHDF), 21654349 (Radej 2011 CVVH), 25645660 (Kiser 2015 SBECD/CRRT), 22761409 (Park 2012 TDM RCT), 27365388 (IDSA aspergillosis 2016), 26679628 (IDSA candidiasis 2016), 24379304 (BSMM TDM 2014), 27981572 (CPIC CYP2C19-voriconazole 2017).
- Page body: blank, so there is nothing incorrect to remove.

## Apply log

- Adult dose: merged the 3 agreed proposals into one value (IV/PO loading and maintenance, the candidemia range, esophageal candidiasis, IV rate with no bolus, take PO >=1 h before or after meals, 常見劑量 corrected to 200mg PO q12h). The owner's tag and <br> style is kept.
- Renal dose, HD, CRRT: merged the 2 proposals. Covers PO with no adjustment, IV CrCl<50 SBECD (TW/UK, plus US 'avoid IV'), HD clearances, CRRT studies (Fuhrmann, Radej, Kiser) and TDM.
- Hepatic dose: Child-Pugh A/B halve maintenance; Child-Pugh C no data; AST/ALT <=5xULN no adjustment; pediatric not established.
- Pediatric dose: merged the 2 proposals (IV 9->8 mg/kg, PO 9 mg/kg max 350 mg, esophageal candidiasis, titration, age and weight cutoffs, <2 y).
- Indications set to [Aspergillosis, Candidiasis]
- Coverage set to [Candida, Aspergillus]
- Side Effects set to [LFT↑, GI, CNS, QTc prolong, photosensitivity, SJS/TEN, DRESS, hypokalemia, AKI, hematologic, dysglycemia]
- Monitor set to [LFT, renal, electrolyte, ECG]
- Mechanism: merged (14α-lanosterol demethylase/ERG11, fungicidal vs Aspergillus, resistance mechanisms), bilingual.
- Drug Interactions: merged the 2 proposals (contraindicated drugs, inducers, rifabutin US/TW vs UK, phenytoin and efavirenz adjustments, cyclosporine/tacrolimus/omeprazole/warfarin, drugs to avoid, cautions).
- Pregnancy: merged; no FDA letter category (PLLR); animal data; TW/UK wording; contraception.
- Breastfeeding: merged (TW/UK stop breastfeeding, US weigh benefits, LactMed alternate drug).
- Notes: merged the 2 proposals (TDM with IDSA/ESCMID/Park, CYP2C19, vision, phototoxicity and long-term use, infusion incompatibility, other approved indications, no Mucorales activity, IA duration, corticosteroids, lactose). The IV rate statement is kept only in Adult dose to avoid a duplicate.
- Category set to 'Triazole antifungal'
- Renewed date set to 2026-10-05 (is_datetime 0)
- Page body (was blank): appended a References section listing US FDA label (DailyMed setid ce3ef5cf, 2026-03-02), UK SmPC 7976 and 8408, Taiwan insert 衛署藥輸字第023648號, LactMed NBK575380 (2022-11-30), IDSA 2016, ESCMID 2017, Fuhrmann 2007, Radej 2011, Kiser 2015 and Park 2012 with URLs. There was no AI-chat text to remove.

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
