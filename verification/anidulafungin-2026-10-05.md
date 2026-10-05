# New entry: Eraxis (Anidulafungin)

- **Notion entry:** [Eraxis (Anidulafungin)](https://app.notion.com/3f0c496dfff1816987a0e1e14d533023). Created 2026-10-05; it was not in the database before.
- **Hospital codes:** ERA01 (Eraxis inj 100 mg)
- **How it was built:** the two-reviewer workflow. Reviewer A drafted from the US label and LactMed; Reviewer B drafted from the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's proposals, and only text both agreed on was written.
- **Raw sources:** `sources/anidulafungin.json` (plus any Taiwan insert text files)

## Product and sources

Eraxis for Injection 100 mg/vial (助黴飛注射劑 100 毫克), anidulafungin lyophilized powder, Pfizer. TFDA licence 衛署藥輸字第024758號 (insert version USPI 202009-3). FJUH code ERA01 is the only stocked code; ERA02/ERA03 are oseltamivir. NHI code BC24758255, ATC J02AX06. IV only. Sources used: US label ERAXIS (Roerig/Pfizer, DailyMed setid a88d9010-55fb-4a02-baff-042cd27688ea, v24, 25 Aug 2025); UK SmPC ECALTA 100 mg (eMC 454, revised 10/2025); LactMed Anidulafungin NBK592191 (revised 2024-04-15); Taiwan insert text saved locally (anidulafungin-taiwan-insert-eraxis.txt). The Notion page (created 2026-10-05) has only its title and Category "Echinocandin". Every other column and the body are empty.

## Content written to Notion (30 items)

### A1 · Adult dose

<span color="green">`IV`</span> Candidemia / invasive candidiasis (incl. intra-abdominal abscess, peritonitis): LD 200 mg IVD D1 → 100 mg IVD QD；療程至最後一次陽性培養後 ≥14 天 (TW/US/UK label)；UK SmPC: 100 mg 用於 >35 天資料不足; <br>Esophageal candidiasis (US label only；TW 仿單/UK SmPC 未核准；復發率高): LD 100 mg → 50 mg IVD QD，≥14 天且症狀緩解後 ≥7 天; <br>輸注速率 ≤1.1 mg/min (100 mg ≥90 min；200 mg ≥180 min)，稀釋至 0.77 mg/mL (NS 或 D5W)，不可 bolus

**Why:** The column is empty. All three labels give the same candidemia/IC regimen. Esophageal candidiasis is approved on the US label only, so under the ground rules it is an approved indication, but it is not in the TW insert for the stocked product. It has to be labelled US-only and carry the high-relapse caveat. The infusion-rate limit is a W&P item (histamine-mediated infusion reactions) and belongs with the dose. Storage/stability details are left out on purpose.

**Sources:** US FDA label ERAXIS §2.1 'single 200 mg loading dose... followed by a 100 mg once daily maintenance dose... at least 14 days after the last positive culture'; esophageal '100 mg loading dose... 50 mg once daily... minimum of 14 days and for at least 7 days following resolution of symptoms'; §2.4 'rate of infusion should not exceed 1.1 mg/minute', Table 1 (100 mg 90 min, 200 mg 180 min); §1.3 'high relapse rates in esophageal candidiasis' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC ECALTA §4.2 '200 mg loading dose... 100 mg daily... insufficient data to support the 100 mg dose for longer than 35 days'; 'must not be administered as a bolus injection' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert Eraxis §2 適應症 (成人和1個月以上兒童之侵襲性念珠菌感染；'較高的食道念珠菌感染復發率'), §3 用法用量 '第一天投與單次負荷劑量200毫克，以後每天100毫克' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### A2 · Renal dose, HD, CRRT

No adjustment (任何程度腎功能不全；renal CL <1%) (TW/US/UK label); <br>HD: 不可透析，給藥不需配合透析時間 (TW/US/UK label); <br>CRRT: 不需調整 (CVVH: Leitner 2011 PMID 21393208，~20% 吸附於濾膜但 PK 與健康人相似；CVVHDF: Aguilar 2014 PMID 24468868)

**Why:** The column is empty, and all three labels agree: no adjustment at any degree of renal impairment, not dialyzable, give without regard to HD timing. No label covers CRRT. Two PubMed PK studies (both PMIDs checked with esummary) support the standard dose, 200 mg then 100 mg, on CVVH and CVVHDF.

**Sources:** US FDA label §8.7 Renal Insufficiency 'Dosage adjustments are not required... including those on hemodialysis... negligible (<1%) renal clearance... not dialyzable and may be administered without regard to the timing of hemodialysis' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.2 'No dosing adjustments... any degree of renal insufficiency, including those on dialysis... without regard to the timing of haemodialysis' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert 腎功能不全 '任何程度的腎功能不全病人都不須調整劑量，包括接受血液透析治療的病人... 給藥時不須考慮進行血液透析的時程' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; Leitner JM et al. J Antimicrob Chemother 2011;66:880-4 (PMID 21393208, verified): CVVHF, 'not filtered... substance loss of ~20% due to adherence... recommend 200 mg day 1 and 100 mg' https://pubmed.ncbi.nlm.nih.gov/21393208/; Aguilar G et al. J Antimicrob Chemother 2014;69:1620-3 (PMID 24468868, verified): CVVHDF, 'recommend no adjustments to the anidulafungin dose for patients receiving CRRT' https://pubmed.ncbi.nlm.nih.gov/24468868/

### A3 · Hepatic dose

輕/中/重度 (Child-Pugh A–C) 皆不需調整；不經肝臟代謝（生理條件下緩慢化學降解）；Child-Pugh C AUC 略降但在健康人範圍內 (TW/US/UK label)

**Why:** The column is empty. The labels agree on no adjustment at any degree of hepatic impairment, including Child-Pugh C. This is the main difference from caspofungin and is clinically useful.

**Sources:** US FDA label §8.6 Hepatic Insufficiency 'No dosing adjustments are required for patients with any degree of hepatic insufficiency. Anidulafungin is not hepatically metabolized' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.2 'No dosing adjustments are required for patients with mild, moderate, or severe hepatic impairment' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert 肝功能不全 '任何程度的肝功能不全病人都不須調整劑量。Anidulafungin並不經過肝臟代謝' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### A4 · Pediatric dose

≥1 個月 (candidemia/IC): LD 3 mg/kg (max 200 mg) D1 → 1.5 mg/kg IVD QD (max 100 mg)，至最後一次陽性培養後 ≥14 天 (TW/US/UK); 輸注 ≤1.1 mg/min，建議用 syringe/infusion pump; <br><1 個月: 未核准/不建議 (polysorbate 80 新生兒毒性風險、CNS 擴散率高); <br>小兒食道念珠菌感染: 未確立

**Why:** The column is empty. All three labels give the same weight-based regimen with maximum doses. Neonates are excluded in all labels because of polysorbate 80 and the risk of CNS dissemination. The US label states that pediatric esophageal dosing is not approved.

**Sources:** US FDA label §2.2 '3 mg/kg (not to exceed 200 mg)... 1.5 mg/kg (not to exceed 100 mg)'; §2 table 'Esophageal candidiasis... Pediatric: Not Approved'; §5.3, §8.4 (younger than 1 month not established; polysorbate 80) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.2 Paediatric population; §4.4 'Treatment... in neonates (< 1 month old) is not recommended' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert §3 小兒病人 '3毫克/公斤(不超過200毫克)，以後每天一次1.5毫克/公斤 (不超過100毫克)'; 小兒 '尚未確立以ERAXIS治療小兒病人食道念珠菌感染的安全性和有效性' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### A5 · Indications

["Candidiasis","Peritonitis","IAI"]

**Why:** The labelled indications are candidemia and other Candida infections, explicitly intra-abdominal abscess and peritonitis (US 1.1; TW/UK invasive candidiasis), plus esophageal candidiasis (US only), which is covered by 'Candidiasis'. 'Peritonitis' and 'IAI' (intra-abdominal abscess) are existing options. The Myfungin entry uses only Candidiasis+Peritonitis, so IAI can be dropped if the owner prefers consistency. Do NOT add Endocarditis, Meningitis, Osteoarthritis (all 'not studied', US 1.3/UK 4.4), Bacteremia (bacterial term), or Aspergillosis (not approved).

**Sources:** US FDA label §1.1 'candidemia and the following Candida infections: intra-abdominal abscess and peritonitis'; §1.2 esophageal candidiasis; §1.3 Limitations of Use https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.1 'Treatment of invasive candidiasis in adults and paediatric patients aged 1 month to < 18 years' https://www.medicines.org.uk/emc/product/454/smpc

### A6 · Coverage

["Candida"]

**Why:** The label lists activity against C. albicans, C. glabrata, C. parapsilosis and C. tropicalis (clinical), and C. guilliermondii and C. krusei (in vitro only). The UK SmPC mentions activity against actively growing Aspergillus fumigatus hyphae, but aspergillosis is not an approved indication in any label, so do not add 'Aspergillus'. Mention it in the body only.

**Sources:** US FDA label §12.4 Microbiology – Antimicrobial Activity https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §5.1 'fungicidal activity against Candida species and activity against regions of active cell growth of the hyphae of Aspergillus fumigatus' https://www.medicines.org.uk/emc/product/454/smpc

### A7 · Side Effects

["GI","hypokalemia","LFT↑","dysglycemia"]

**Why:** Most common reactions in the US candidemia trial were hypokalemia 25%, nausea 24%, diarrhea 18%, vomiting 18%. The SmPC table lists hypokalaemia, diarrhoea and nausea as very common; hyperglycaemia, ALT/AST/ALP/bilirubin rise and cholestasis as common. Hepatic adverse reactions are a W&P item (US 5.1). Hypoglycemia occurred in 6% of children, and HFI can cause hypoglycemia (US 5.4), hence 'dysglycemia'. Optional extras that are also existing options: 'thrombocytopenia'/'anemia' (pediatric ≥5%), 'coagulopathy' (SmPC uncommon). Infusion/histamine-type reactions and anaphylaxis have no matching option ('Red-man syndrome' is vancomycin-specific), so they belong in Notes.

**Sources:** US FDA label §6 Highlights 'Most common adverse reactions (≥15%) are hypokalemia, nausea, diarrhea, vomiting, pyrexia, insomnia, hypotension'; Table 2; Table 4 (pediatric hypoglycemia 6%, ALT↑ 9%) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.8 Table 1 (very common: hypokalaemia, diarrhoea, nausea; common: hyperglycaemia, ALT/AST/ALP/bilirubin increased, cholestasis) https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert §8.2 表2 不良反應表 (低血鉀、腹瀉、噁心、高血糖、轉胺酶升高) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### A8 · Monitor

["LFT"]

**Why:** Hepatic function is the only label-directed monitoring: monitor hepatic function during therapy, and if abnormal LFTs develop, watch for worsening and reassess risk/benefit. The labels give no frequency. 'electrolyte' (K+) is optional; hypokalemia is very common, but no label tells you to monitor it.

**Sources:** US FDA label §5 Highlights 'Hepatic Effects: ...monitor hepatic function during therapy'; §5.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.4 Hepatic effects https://www.medicines.org.uk/emc/product/454/smpc

### A9 · Mechanism

Inhibits 1,3-β-D-glucan synthase → ↓ fungal cell wall 1,3-β-D-glucan (fungicidal vs Candida)；resistance: FKS1/FKS2 point mutations

**Why:** The column is empty. The wording matches the Myfungin entry and both labels.

**Sources:** US FDA label §12.4 Mechanism of Action; Resistance 'point mutations within the genes (FKS1 and FKS2)' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §5.1 'selectively inhibits 1,3-β-D glucan synthase... fungicidal activity against Candida species' https://www.medicines.org.uk/emc/product/454/smpc

### A10 · Drug Interactions

非 CYP450 受質/誘導劑/抑制劑 → 交互作用極少；併用 cyclosporine (anidulafungin AUC ↑22%)、voriconazole、tacrolimus、rifampin、liposomal AmB 皆不需調整劑量 (TW/US label 7, 12.3; UK SmPC 4.5)；UK SmPC 4.4: 併用麻醉劑可能加重輸注反應 (大鼠)，需小心

**Why:** The column is empty. The labels list five studied combinations, none needing a dose change. The UK SmPC adds an anaesthetic caution based on a rat study.

**Sources:** US FDA label §7.1–7.5; §12.3 Drug Interactions (cyclosporine 'AUC of anidulafungin was increased by 22%') https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.5; §4.4 'Exacerbation of infusion-related reactions by co-administration of anaesthetics has been seen in a non-clinical (rat) study... care should be taken' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert §7 交互作用 (cyclosporine, voriconazole, tacrolimus, rifampin, amphotericin B微脂粒) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### A11 · Pregnancy

無 FDA letter category（PLLR 已取消字母分級）。動物：兔器官形成期 4× 維持劑量（伴母體毒性）→ 胎兒體重↓、骨化不全；大鼠可通過胎盤；可能造成胎兒傷害，無人體資料 (TW/US label 8.1)。UK SmPC 4.6: 除非對母親效益明確大於胎兒風險，懷孕期不建議使用。

**Why:** The column is empty. Do not write 'Category C' (the hospital site still does). The TW insert for the stocked product and the US label give a narrative PLLR risk summary. The UK SmPC wording differs and is given alongside.

**Sources:** US FDA label §8.1 'Based on findings from animal studies, ERAXIS can cause fetal harm... no available human data... reduced fetal weights and incomplete ossification... crossed the placental barrier' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.6 'not recommended during pregnancy unless the benefit to the mother clearly outweighs the potential risk to the foetus' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert 懷孕 '根據動物研究發現，ERAXIS對孕婦施用時會對胎兒造成傷害' https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### A12 · Breastfeeding

可哺乳 (LactMed 2024)：單一病例 100 mg QD × 14 d，停藥後 5 h 乳汁 0.24 mg/L、32 h 0.12 mg/L，≥38 h 測不到；嬰兒攝入量低，母親需使用時不須停止哺乳。替代：fluconazole、miconazole。(TW/US label 8.2: 無人體資料，大鼠乳汁可測得；UK SmPC 4.6: 權衡哺乳與治療效益)

**Why:** The column is empty. LactMed is the reference for breastfeeding under the hierarchy. Its 2024 record adds human milk-level data (case report, PMID 38174985, verified) that the labels do not have. The labels' 'no human data' wording is out of date but is given alongside for context.

**Sources:** LactMed Anidulafungin NBK592191 (rev 2024-04-15) Summary 'amounts ingested by the infant are small... not a reason to discontinue breastfeeding'; Drug Levels; Alternate Drugs: Fluconazole, Miconazole https://www.ncbi.nlm.nih.gov/books/NBK592191/; Eijsink JFH et al. Breastfeed Med 2024;19:134-6 (PMID 38174985, verified) https://pubmed.ncbi.nlm.nih.gov/38174985/; US FDA label §8.2 Lactation https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.6 Breast-feeding https://www.medicines.org.uk/emc/product/454/smpc

### A13 · Notes

禁忌：遺傳性果糖不耐症 (HFI；含 fructose 100 mg/vial，可致低血糖/乳酸中毒/肝衰竭，用前詢問 HFI 病史) (TW/US 4, 5.4)、echinocandin 過敏。含 polysorbate 80 → <1 個月不建議。輸注反應 (histamine-mediated: rash, flushing, pruritus, bronchospasm, hypotension) 及 anaphylaxis → 速率 ≤1.1 mg/min。未研究：Candida endocarditis/osteomyelitis/meningitis；neutropenic 病人資料有限 (US 1.3/UK 4.4)。Echinocandins 在眼、CNS、尿液無法達治療濃度 (IDSA 2016)。C. parapsilosis MIC 較高 (UK SmPC 5.1)。本院僅 ERA01 100 mg/vial。

**Why:** The column is empty. The HFI contraindication and the polysorbate 80 neonatal warning matter for safety and do not fit any multi-select option. Infusion reactions have no matching Side Effects option. The 'not studied' sites, poor eye/CNS/urine penetration and the C. parapsilosis MIC point all bear on choosing this drug. The eye/CNS/urine statement is cited to IDSA 2016, as in the existing Myfungin entry.

**Sources:** US FDA label §4 Contraindications (HFI); §5.2–5.4; §1.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.4 (fructose, polysorbate, infusion reactions); §5.1 'for C. parapsilosis, the MICs of anidulafungin are higher' https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert §1.2 賦形劑 (果糖 100 毫克、polysorbate 80 250 毫克); §4 禁忌 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; IDSA Candidiasis 2016 (Pappas PG, Clin Infect Dis 2016;62:e1-50, PMID 26679628, verified) https://www.idsociety.org/practice-guideline/candidiasis/

### A14 · Category

Echinocandin antifungal

**Why:** 'Echinocandin' is correct. The labels call it 'an echinocandin antifungal', and the sibling Myfungin entry uses 'Echinocandin antifungal'. The edit is optional and only for consistency.

**Sources:** US FDA label Highlights §1 'ERAXIS is an echinocandin antifungal' https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea

### A15 · Page body

Follow the Myfungin page layout: # Anidulafungin (Eraxis 助黴飛) / ## Category: Echinocandin antifungal (<span color="green">`IV`</span> only; ERA01 100 mg/vial) / ## Mechanism (as A9; slow chemical degradation, not hepatic/CYP metabolism; t½ 40–50 h terminal, 26.5 h predominant in patients) / ## Indications: candidemia & IC incl. intra-abdominal abscess/peritonitis (adults & ≥1 mo; TW/US/UK); esophageal candidiasis adults (US only; high relapse; not in TW insert/UK); not studied: endocarditis/osteomyelitis/meningitis, few neutropenic pts / ## Coverage: C. albicans, C. glabrata, C. parapsilosis (higher MICs), C. tropicalis; in vitro C. krusei, C. guilliermondii; FKS1/FKS2 resistance; Aspergillus: hyphal activity in vitro (UK 5.1) but not an approved indication / ## Adult Dose table (as A1) / ## Renal/HD/CRRT (as A2) / ## Hepatic (as A3) / ## Pediatric (as A4) / ## Side Effects: common hypokalemia, nausea, diarrhea, vomiting, ↑LFT, hyperglycemia; serious: hepatotoxicity, anaphylaxis, infusion reactions, HFI metabolic crisis; pediatric ALT/AST↑ 7–10% vs 2% adults (UK 4.8) / ## Monitor: LFTs during therapy (frequency not specified in labels) / ## Drug Interactions (as A10) / ## Pregnancy (as A11) / ## Breastfeeding (as A12) / ## Notes (as A13) / ## References: DailyMed setid a88d9010-55fb-4a02-baff-042cd27688ea; eMC 454; TFDA 衛署藥輸字第024758號; LactMed NBK592191; IDSA 2016; PMIDs 21393208, 24468868, 38174985. No storage/stability section.

**Why:** The page body is blank. Other entries carry a structured body with a references list, so this new entry needs one. Every item above is sourced in A1–A13.

**Sources:** US FDA label https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC https://www.medicines.org.uk/emc/product/454/smpc; Taiwan insert https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; LactMed https://www.ncbi.nlm.nih.gov/books/NBK592191/

### B1 · Adult dose

<span color="green">`IV`</span> only (Eraxis 100 mg/vial)<br>• Candidemia / invasive candidiasis (incl. intra-abdominal abscess, peritonitis): 200 mg IV D1 → 100 mg IV QD; 持續至最後一次陽性培養後 ≥14 天 (TW/US/UK). UK: insufficient data for 100 mg >35 d<br>• Esophageal candidiasis (US label only, adults; not a TW/UK indication): 100 mg D1 → 50 mg QD, ≥14 d and ≥7 d after symptom resolution; high relapse rate. IDSA 2016 (oral-intolerant / fluconazole-refractory): 200 mg QD<br>• Candida endocarditis / implantable device (off-label, IDSA 2016): 200 mg QD<br>• Step-down to fluconazole, usually within 5–7 d, if clinically stable, isolate susceptible and repeat cultures negative (IDSA 2016)<br>• Infusion ≤1.1 mg/min (0.77 mg/mL): 100 mg ≥90 min, 200 mg ≥180 min; no bolus

**Why:** The column is empty. Label numbers re-verified: US 2.1 (200→100 mg; esophageal 100→50 mg; ≥14 d after last positive culture), TW 3.1 (same candidemia regimen; no esophageal dose), UK 4.2 (same regimen plus the 35-day limit and the 1.1 mg/min rate). Off-label doses come from IDSA 2016 recommendations for esophageal candidiasis (anidulafungin 200 mg daily), endocarditis/device (200 mg daily) and step-down (5–7 d).

**Sources:** US FDA label (DailyMed) §2.1, §2.4 Table 1, §1.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; TW 仿單 衛署藥輸字第024758號 §3.1 用法用量, §3.2 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; UK SmPC ECALTA §4.2 — https://www.medicines.org.uk/emc/product/454/smpc; IDSA Candidiasis 2016 (Pappas, PMID 26679628) recs I, IX (cardiac), esophageal — https://www.idsociety.org/practice-guideline/candidiasis/

### B2 · Renal dose, HD, CRRT

No adjustment for any degree of renal impairment (renal clearance <1%)<br>HD: 不可透析; give without regard to HD timing, no supplemental dose (TW 6.7 / US 8.7 / UK 4.2)<br>CRRT (no label dose; literature): 不需調整 — standard 200 mg D1 → 100 mg QD. CVVH: Leitner 2011 (PMID 21393208; not filtered, ~20% loss by filter adsorption, PK similar to healthy); CVVHDF: Aguilar 2014 (PMID 24468868; ultradiafiltrate below detection, no adsorption)

**Why:** The column is empty. All three labels agree there is no renal or HD adjustment and that the drug is not dialyzable. No label covers CRRT, so two verified PK studies (esummary checked) support standard dosing on CVVH and CVVHDF.

**Sources:** TW 仿單 §6.7 腎功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; US FDA label §8.7 Renal Insufficiency — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.2, §5.2 — https://www.medicines.org.uk/emc/product/454/smpc; Leitner JM et al. J Antimicrob Chemother 2011;66:880-4 (PMID 21393208) — https://pubmed.ncbi.nlm.nih.gov/21393208/; Aguilar G et al. J Antimicrob Chemother 2014;69:1620-3 (PMID 24468868) — https://pubmed.ncbi.nlm.nih.gov/24468868/

### B3 · Hepatic dose

No adjustment for any degree (Child-Pugh A/B/C) — 不經肝臟代謝 (slow non-enzymatic degradation); Child-Pugh C: slight ↓AUC, still within healthy range (TW 6.6 / US 8.6 / UK 4.2)

**Why:** The column is empty. The labels agree. Unlike micafungin, the UK SmPC has no restriction in severe hepatic impairment.

**Sources:** TW 仿單 §6.6 肝功能不全 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; US FDA label §8.6 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.2 — https://www.medicines.org.uk/emc/product/454/smpc

### B4 · Pediatric dose

≥1 month (candidemia / intra-abdominal abscess / peritonitis): 3 mg/kg (max 200 mg) IV D1 → 1.5 mg/kg (max 100 mg) IV QD, ≥14 d after last positive culture (TW/US/UK)<br>Infuse ≤1.1 mg/min at 0.77 mg/mL (syringe/infusion pump)<br><1 month: 未核准 / not recommended — polysorbate 80 toxicity risk, high CNS dissemination (TW 5.1/6.4, US 5.3/8.4, UK 4.4)<br>Esophageal candidiasis in children: not established (US/TW)<br>HFI: take careful fructose/sucrose history before the first dose

**Why:** The column is empty. Re-verified against US 2.2/8.4, TW 3.1/6.4 and UK 4.2/4.4. The hospital P4 page leaves pediatric dosing blank (reported separately).

**Sources:** US FDA label §2.2, §5.3, §5.4, §8.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; TW 仿單 §3.1 小兒病人, §6.4 小兒 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; UK SmPC §4.2, §4.4 — https://www.medicines.org.uk/emc/product/454/smpc

### B5 · Indications

Candidiasis, Peritonitis, IAI

**Why:** Approved: candidemia and Candida intra-abdominal abscess/peritonitis (US 1.1; TW 2 invasive candidiasis; UK 4.1), plus esophageal candidiasis (US 1.2, adults), which is covered by the Candidiasis tag. All three tags exist in the schema. 'Bacteremia' is not proposed because it is used for bacterial infections; micafungin uses Candidiasis + Peritonitis. IAI is justified by the label wording 'intra-abdominal abscess'. Drop it if the owner wants the tags to match micafungin exactly. Do not tag Endocarditis, Osteoarthritis or Meningitis: the labels say anidulafungin was not studied for these.

**Sources:** US FDA label §1.1–1.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.1 — https://www.medicines.org.uk/emc/product/454/smpc; TW 仿單 §2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### B6 · Coverage

Candida

**Why:** Clinically active against C. albicans, C. glabrata, C. parapsilosis and C. tropicalis; C. krusei and C. guilliermondii in vitro only (US 12.4). The UK SmPC 5.1 reports activity only at the growing hyphal tips of A. fumigatus, and there is no labelled Aspergillus indication. Do not tag Aspergillus; mention it in Notes instead, as the micafungin entry does.

**Sources:** US FDA label §12.4 Microbiology — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/454/smpc

### B7 · Side Effects

GI, hypokalemia, LFT↑, coagulopathy, dysglycemia

**Why:** US 6.1 Table 2 (candidemia): nausea 24%, diarrhea 18%, vomiting 18%, hypokalemia 25%, hypo-/hyperglycemia 7%/6%. US 5.1 and UK 4.4: hepatic enzyme rise, hepatitis, hepatic failure. UK and TW 4.8/8.2 tables: coagulopathy common, hypokalaemia common, hyperglycaemia common. Infusion reactions and anaphylaxis have no matching schema option ('Red-man syndrome' is vancomycin-specific), so they go in Notes. All proposed options exist in the schema.

**Sources:** US FDA label §6.1 Table 2, §5.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.8 Table 1 — https://www.medicines.org.uk/emc/product/454/smpc; TW 仿單 §8.2 表2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F

### B8 · Monitor

LFT

**Why:** US 5 says 'monitor hepatic function during therapy', and TW 5.1 and UK 4.4 say to monitor patients with abnormal LFTs for worsening. 'electrolyte' is proposed because hypokalemia was the most common adverse reaction (25%, US 6.1); this is a label-derived judgement, not an explicit label monitoring instruction. Do not add renal: there is no renal toxicity signal or dose adjustment.

**Sources:** US FDA label §5 highlights, §5.1, §6.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.4 — https://www.medicines.org.uk/emc/product/454/smpc

### B9 · Mechanism

Semi-synthetic echinocandin (lipopeptide from Aspergillus nidulans); inhibits 1,3-β-D-glucan synthase → ↓ fungal cell wall glucan → fungicidal vs Candida. Resistance: FKS1/FKS2 point mutations (cross-resistance across echinocandins)

**Why:** The column is empty. Text follows US 12.4 (MOA and FKS1/FKS2 resistance) and UK 5.1 (fungicidal against Candida; FKS hot-spot mutations confer cross-resistance to all three echinocandins).

**Sources:** US FDA label §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §5.1 — https://www.medicines.org.uk/emc/product/454/smpc

### B10 · Drug Interactions

Not a clinically relevant CYP450 substrate, inducer or inhibitor → minimal interactions<br>No dose adjustment with cyclosporine, voriconazole, tacrolimus (either drug), rifampin or liposomal amphotericin B (TW 7 / US 7 / UK 4.5)<br>UK 4.4: anaesthetics exacerbated infusion reactions in rats → use caution when co-administering<br>只可用 D5W 或 NS 稀釋; do not co-infuse with other drugs or electrolytes (US 2.3)

**Why:** The column is empty. Re-verified against US 7.1–7.5 and 12.3, TW 7 and UK 4.4/4.5. The co-infusion warning is an administration point, not storage or stability, so it is allowed.

**Sources:** US FDA label §7, §2.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; TW 仿單 §7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; UK SmPC §4.4, §4.5 — https://www.medicines.org.uk/emc/product/454/smpc

### B11 · Pregnancy

無 FDA letter category (PLLR). TW/US 6.1/8.1: animal data suggest it may cause fetal harm (rabbit, 4× MRHD with maternal toxicity: ↓ fetal weight, incomplete ossification; crosses the placenta in rats); no human data. UK SmPC 4.6: not recommended unless the benefit to the mother clearly outweighs the fetal risk. IDSA 2016: few data, use with caution; AmB is the treatment of choice for invasive candidiasis in pregnancy

**Why:** The column is empty. Do not write 'Category C' (the hospital site still does; see the hospital-database issues). Wording mirrors the micafungin entry.

**Sources:** US FDA label §8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; TW 仿單 §6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/454/smpc; IDSA Candidiasis 2016, Considerations During Pregnancy — https://www.idsociety.org/practice-guideline/candidiasis/

### B12 · Breastfeeding

可哺乳 (LactMed, rev. 2024-04-15): milk levels are low (0.24 mg/L 5 h after the last 100 mg dose; single case report) and not expected to harm the infant; 母親需使用時不須停止哺乳. Alternatives: fluconazole, miconazole. Labels (TW 6.2 / US 8.2 / UK 4.6): no human data; present in rat milk; UK: weigh breastfeeding vs therapy

**Why:** The column is empty. LactMed is the designated source and now has human milk data (Eijsink 2024), which the labels predate.

**Sources:** LactMed Anidulafungin NBK592191 (Summary; Drug Levels; Alternate Drugs) — https://www.ncbi.nlm.nih.gov/books/NBK592191/; US FDA label §8.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC §4.6 — https://www.medicines.org.uk/emc/product/454/smpc

### B13 · Notes

禁忌: hypersensitivity to anidulafungin or any echinocandin; known/suspected hereditary fructose intolerance (每瓶含 fructose 100 mg) (TW 1.2/4, US 4; UK 4.4: HFI 病人除非絕對必要不可使用)<br>Contains polysorbate 80 → not for <1 month old<br>Infusion reactions (histamine-mediated: rash, urticaria, flushing, pruritus, bronchospasm, dyspnea, hypotension) → keep ≤1.1 mg/min; anaphylaxis/shock reported (US 5.2)<br>Not studied in Candida endocarditis, osteomyelitis or meningitis; dose for CNS/eye dissemination not established (US 1.3). CSF anidulafungin <0.01–0.66 µg/mL; MICs of several Candida strains exceed CSF/brain levels (Marx 2020, PMID 32340985). IDSA 2016: echinocandins preferred for most candidemia/IC except CNS, eye and urinary tract infections<br>C. parapsilosis: innately higher echinocandin MICs (IDSA 2016; UK 5.1); test echinocandin susceptibility after prior echinocandin exposure or for C. glabrata / C. parapsilosis (IDSA 2016). C. krusei, C. guilliermondii: in vitro data only (US 12.4)<br>Aspergillus: activity at growing hyphal tips (UK 5.1); no approved indication. Voriconazole + anidulafungin for invasive aspergillosis: 6-wk mortality 19.3% vs 27.5% with voriconazole alone, P=0.087 (Marr 2015, PMID 25599346)<br>PK: t½ ~24 h predominant / 40–50 h terminal; protein binding >99%; not dialyzable (UK 5.2, US 12.3)<br>TDM 非常規 (IDSA 2016 recommends TDM only for itra/vori/posa/flucytosine); ICU PK highly variable (Kapralos 2021, PMID 32633039). Weight >140 kg: consider +25% loading and maintenance dose (Wasmann 2018, PMID 29712664; literature only; UK 5.2 says weight has little clinical relevance)<br>院內品項: ERA01 Eraxis 100 mg/vial (衛署藥輸字第024758號)

**Why:** The column is empty. These points are clinically important and are not captured in the other columns. Every claim cites a label section, the IDSA guideline or an esummary-verified PMID.

**Sources:** US FDA label §1.3, §4, §5.2–5.4, §12.3, §12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; TW 仿單 §1.2 賦形劑, §4 禁忌 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; UK SmPC §4.4, §5.1, §5.2 — https://www.medicines.org.uk/emc/product/454/smpc; IDSA Candidiasis 2016 (PMID 26679628) — https://www.idsociety.org/practice-guideline/candidiasis/; Marr KA et al. Ann Intern Med 2015 (PMID 25599346) — https://pubmed.ncbi.nlm.nih.gov/25599346/; Marx J et al. AAC 2020 (PMID 32340985) — https://pubmed.ncbi.nlm.nih.gov/32340985/; Kapralos I et al. Br J Clin Pharmacol 2021 (PMID 32633039) — https://pubmed.ncbi.nlm.nih.gov/32633039/; Wasmann RE et al. AAC 2018 (PMID 29712664) — https://pubmed.ncbi.nlm.nih.gov/29712664/

### B14 · Category

Echinocandin antifungal

**Why:** The current value is correct: US 1 says 'ERAXIS is an echinocandin antifungal'. The suggested change only matches the micafungin entry ('Echinocandin antifungal') and the fluconazole style ('Triazole antifungal').

**Sources:** US FDA label §1 Indications and Usage — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea

### B15 · Page body

Add a body in the micafungin page structure: # Anidulafungin (Eraxis / Ecalta); ## Category; ## Mechanism; ## Indications (TW: invasive candidiasis, adults and ≥1 mo; US adds esophageal candidiasis, adults only, with a high relapse rate; endocarditis off-label per IDSA); ## Coverage; ## Adult Dose (table: candidemia/IAI 200→100 mg; esophageal 100→50 mg (US); endocarditis 200 mg QD (IDSA); infusion ≤1.1 mg/min); ## Renal/HD/CRRT; ## Hepatic; ## Pediatric; ## Side Effects; ## Monitor; ## Drug Interactions; ## Pregnancy; ## Breastfeeding; ## Notes; ## References (DailyMed setid a88d9010-…, eMC 454, TFDA 衛署藥輸字第024758號, LactMed NBK592191, IDSA 2016 PMID 26679628, PMIDs 21393208, 24468868, 25599346, 32340985, 32633039, 29712664). Content as in B1–B13; no storage or stability text.

**Why:** New entry with an empty body. Other entries such as micafungin carry a structured body and a reference list.

**Sources:** US FDA label — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea; UK SmPC — https://www.medicines.org.uk/emc/product/454/smpc; TW 仿單 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E7%BD%B2%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC024758%E8%99%9F; LactMed — https://www.ncbi.nlm.nih.gov/books/NBK592191/

## Apply log

- Category: Echinocandin -> Echinocandin antifungal
- Adult dose: merged A/B (IV tag, candidemia/IC 200->100 mg, esophageal US-only 100->50 mg + IDSA 200 mg, endocarditis/device 200 mg off-label IDSA, step-down, infusion <=1.1 mg/min / 0.77 mg/mL / no bolus)
- Renal dose, HD, CRRT: merged (no adjustment, HD not dialyzable/no timing/no supplement, CRRT Leitner 2011 + Aguilar 2014)
- Hepatic dose: no adjustment Child-Pugh A-C, non-hepatic degradation
- Pediatric dose: >=1 mo 3 mg/kg->1.5 mg/kg, infusion pump, <1 mo not recommended, esophageal not established, HFI history
- Indications multi-select: Candidiasis, Peritonitis, IAI
- Coverage multi-select: Candida
- Side Effects multi-select: GI, hypokalemia, LFT↑, dysglycemia, coagulopathy (union of both proposals)
- Monitor multi-select: LFT
- Mechanism: merged text incl. FKS1/FKS2 resistance
- Drug Interactions: merged (non-CYP, no adjustment list, UK anaesthetic caution, D5W/NS only, no co-infusion)
- Pregnancy: no letter category, animal data, UK 4.6, IDSA 2016 AmB preferred
- Breastfeeding: LactMed 2024 compatible, milk levels, alternatives, label statements
- Notes: merged contraindications/HFI, polysorbate 80, infusion reactions, CNS/eye/urine, C. parapsilosis, Aspergillus/Marr 2015, PK, TDM/obesity, hospital item ERA01
- Page body: full Myfungin-style layout (Category, Mechanism, Indications, Coverage, Adult/Renal/Hepatic/Pediatric dose, Side Effects, Monitor, DI, Pregnancy, Breastfeeding, Notes) with no storage/stability
- Page body: References section with DailyMed, eMC 454, TFDA 024758, LactMed NBK592191, IDSA 2016, PMIDs 21393208, 24468868, 38174985, 25599346, 32340985, 32633039, 29712664
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
