# Verification: Zavicefta (Ceftazidime-Avibactam)

- **Notion entry:** [Zavicefta (Ceftazidime-Avibactam)](https://app.notion.com/25ac496dfff18025b079c493858a17a3)
- **Hospital codes:** ZAV04 (Zavicefta inj 2.5 g)
- **Checked on:** 2026-10-05, by the two-reviewer workflow. Reviewer A used the US label and LactMed; Reviewer B used the UK SmPC, the Taiwan insert and guidelines. Each reviewer cross-checked the other's findings, and only fixes both agreed on were applied.
- **Raw sources:** `sources/ceftazidime-and-avibactam.json` (plus any `sources/ceftazidime-and-avibactam-taiwan-insert-*.txt`)

## Product and sources

Zavicefta 2 g/0.5 g (ceftazidime 2 g + avibactam 0.5 g = 2.5 g) powder for IV infusion, 贊飛得注射劑, 衛部藥輸字第027705號, Pfizer Taiwan (made by ACS Dobfar, Italy). Hospital code ZAV04, NHI BC27705214, ATC J01DD52. Labels compared: US AVYCAZ (DailyMed setid d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd, v25, Aug 11 2026), UK SmPC Zavicefta (eMC 2465, rev 08/2025), Taiwan insert (TFDA mcp.fda.gov.tw, footer SPC 20250520-2 / history 114/03/11 版次4) and LactMed NBK500953 (rev 2021-08-16). Note: the US 8.2 Lactation text is in the sources JSON, inside the "8.1 Pregnancy" section string.

## Agreed fixes applied in Notion (34)

### A1 · Renal dose, HD, CRRT (error)

**Was:** HD: 0.94gm IV q24-48h (HD後給藥)

**Now:** HD: 0.94gm (0.75g/0.1875g) IV q48h，HD 日於 HD 後給藥 (TW 仿單/UK SmPC: ESRD 含 HD；US 表 3 CrCl 6-15 q24h、≤5 q48h，HD 日皆於 HD 後給)

**Why:** The Taiwan insert for the stocked product (Table 9) and the UK SmPC (4.2 Table 4) both give 'End Stage Renal Disease including on haemodialysis: every 48 hours', dosed after HD is finished. The US label (2.3 Table 3) applies its post-HD footnote to both the CrCl 6-15 (q24h) and ≤5 (q48h) rows, so q24h comes only from that US row. The ground rule says to prefer the stocked product's label and quote the other label beside it.

**Sources:** Taiwan insert 3.1 特殊族群用法用量 腎功能不全 表9 + footnote 3 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC 4.2 Table 4 footnote 3 — https://www.medicines.org.uk/emc/product/2465/smpc; US FDA label 2.3 Table 3 footnote c — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### A2 · Page body (error)

**Was:** HD: 0.94 gm IV q24h (洗腎後給藥)

**Now:** HD: 0.94 gm IV q48h (洗腎日於洗腎後給藥；TW/UK ESRD 含 HD)

**Why:** The body says HD q24h. This contradicts the Taiwan insert and the UK SmPC (ESRD/HD q48h), and it also disagrees with the page's own Renal property (q24-48h). The fix is the same as A1.

**Sources:** Taiwan insert 表9 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC 4.2 Table 4 — https://www.medicines.org.uk/emc/product/2465/smpc

### A3 · Renal dose, HD, CRRT (unsupported)

**Was:** CRRT: 1.25gm IV q8h (also in page body)

**Now:** CRRT: 1.25gm IV q8h (off-label，仿單無 CRRT 建議；CVVHDF PK 研究使用 1.25–2.5gm q8h, PMID 39581557；標準 2.5gm q8h 於 CRRT 可能過量暴露/神經毒性, PMID 41432444 → 依 effluent rate、MIC 個別化)

**Why:** None of the US, UK or Taiwan labels gives a CRRT dose. Prospective PK data in CVVHDF patients (O'Jeanson 2025, n=4) support 1000/250 mg or 2000/500 mg q8h. Li 2026 (n=21 on CRRT) found that 2.5 g q8h led to ceftazidime concentrations above the neurotoxicity threshold in 90% of patients. So the 1.25 g q8h dose is plausible, but it is off-label and needs a citation. Both PMIDs were checked with E-utilities esummary.

**Sources:** O'Jeanson A et al. Int J Antimicrob Agents 2025;65:107394, PMID 39581557 — https://pubmed.ncbi.nlm.nih.gov/39581557/; Li C et al. Antimicrob Agents Chemother 2026;70:e0143825 (erratum e0043826), PMID 41432444 — https://pubmed.ncbi.nlm.nih.gov/41432444/

### A4 · Adult dose (error)

**Was:** 2.5gm IV q8h (5-14d)

**Now:** 2.5gm (ceftazidime 2g + avibactam 0.5g) IV q8h，輸注 2 小時<br>cIAI: 5-14d (併用 metronidazole)<br>cUTI: 5-14d (TW；US 7-14d；UK 5-10d 可含口服 step-down)<br>HAP/VAP: 7-14d<br>菌血症 (成人，TW/UK): 療程依感染部位

**Why:** A single '5-14d' range is wrong for HAP/VAP: every label gives 7-14 days. cUTI durations differ by label (TW 5-14, US 7-14, UK 5-10). The labels also give cIAI with metronidazole, a 2-hour infusion, and a bacteraemia indication in adults (TW/UK).

**Sources:** Taiwan insert 3.1 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US FDA label 2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 4.2 Table 1 — https://www.medicines.org.uk/emc/product/2465/smpc

### A5 · Pediatric dose (missing)

**Was:** (empty)

**Now:** IV q8h，輸注 2 小時；劑量以 ceftazidime 成分計 (4:1 固定比例) [TW 仿單/UK]<br>6m–<18y: 50 mg/kg (max 2g) q8h<br>3m–<6m: 40 mg/kg q8h<br>足月 >28d–<3m: 30 mg/kg q8h；出生–≤28d: 20 mg/kg q8h<br>早產兒 (PMA): >44–<53w 30 mg/kg q8h；31–≤44w 20 mg/kg q8h；26–<31w 20 mg/kg q12h<br>US label (以 CAZ+AVI 總量計)：2–<18y 及 6m–<2y 62.5 mg/kg (max 2.5g)；3–<6m 50 mg/kg；>28d–<3m 37.5 mg/kg；≤28d (GA ≥31w) 25 mg/kg，皆 q8h<br>腎功能不全 (≥2y, CrCl ≤50 mL/min/1.73m²)：31-50 25 mg/kg (max 1g) q8h；16-30 18.75 mg/kg (max 0.75g) q12h；6-15 q24h；ESRD/HD q48h (HD後)<br>3m–<2y 腎調見 TW 表10；<3m 有腎功能不全無建議

**Why:** All three labels give dosing from birth (US from GA ≥31 weeks), but the column is empty. The Taiwan insert, which is the stocked product's label, states doses as the ceftazidime component. The US label states the combined total (US 62.5 mg/kg = 50 mg/kg ceftazidime). Paediatric renal dosing comes from TW 表9/10, SmPC Tables 5/6 and US Table 4.

**Sources:** Taiwan insert 3.1 表2, 表3, 表9, 表10 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US FDA label 2.2 Table 2, 2.3 Table 4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 4.2 Tables 2, 3, 5, 6 — https://www.medicines.org.uk/emc/product/2465/smpc

### A6 · Indications (missing)

**Was:** IAI, UTI, Pneumonia

**Now:** cIAI, cUTI, HAP, VAP, Bacteremia

**Why:** The UK SmPC 4.1 and Taiwan insert 適應症 approve treating adults with bacteraemia that is linked, or suspected to be linked, to cIAI, cUTI or HAP/VAP. The 'Bacteremia' tag already exists in the schema. The generic 'Pneumonia' tag could imply CAP, which no label approves.

**Sources:** UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US FDA label 1.1-1.3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### A7 · Coverage (missing)

**Was:** CRKP, CRPA, E.coli, Haemophilus, Klebsiella, Pseudomonas, Serratia, CREC(E.coli)

**Now:** CRKP, CRPA, E.coli, Haemophilus, Klebsiella, Pseudomonas, Serratia, CREC(E.coli), Enterobacter, Proteus

**Why:** All three labels list Enterobacter cloacae and Proteus mirabilis as clinically proven pathogens for cIAI, cUTI and HABP/VABP, and both tags exist in the schema. The existing tags are supported: E. coli, Klebsiella, P. aeruginosa and Serratia marcescens (all labels), and H. influenzae (US HABP/VABP). CRKP/CREC (KPC and OXA-48) and CRPA (AmpC, OprD loss) are supported only in vitro and only for non-MBL mechanisms (US 12.4, SmPC 5.1); the Notes should state this (see A12). Correctly untagged: Acinetobacter, anaerobes, S. aureus, Enterococcus and Stenotrophomonas are listed as not susceptible (SmPC 5.1).

**Sources:** US FDA label 1.1-1.3 and 12.4 Antimicrobial Activity — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 5.1 Clinical efficacy against specific pathogens — https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan insert 10.2 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### A8 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, LFT↑, hematologic, thrombophlebitis, CNS, AKI, SJS/TEN, DRESS

**Why:** GI: diarrhoea, nausea and vomiting are the most common reactions. LFT↑: ALT/AST are 'common' in SmPC 4.8. Hematologic: positive Coombs test is very common, plus possible haemolytic anaemia, thrombocytopenia and leukopenia. Thrombophlebitis: infusion-site phlebitis/thrombosis. CNS: seizures, NCSE and encephalopathy, especially in renal impairment (US 5.4). AKI: acute kidney injury in US 6.1 and SmPC 4.8. SJS/TEN and DRESS: SmPC 4.4 SCARs. Every tag listed exists in the schema. CDAD is covered by the 'GI' tag; it has no separate Side-Effects option.

**Sources:** US FDA label 5.4, 6.1, 6.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 4.4 and 4.8 Table 7 — https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan insert 5.1 and 8.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### A9 · Mechanism (missing)

**Was:** (empty)

**Now:** Ceftazidime：3rd-gen cephalosporin，結合 PBPs 抑制細胞壁 peptidoglycan 合成 → 殺菌；Avibactam：non-β-lactam β-lactamase inhibitor，與酵素形成對水解穩定之共價加合物 (covalent adduct)，抑制 Ambler class A (ESBL、KPC)、class C (AmpC) 及部分 class D (OXA-48)；不抑制 class B (MBL: NDM/VIM/IMP)，亦無法抑制許多 class D 酵素

**Why:** The mechanism is stated in US 12.4, SmPC 5.1 and TW 10.1.

**Sources:** US FDA label 12.4 Mechanism of Action — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 5.1 Mechanism of action — https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan insert 10.1 作用機轉 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### A10 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Probenecid：抑制 avibactam 經 OAT1/OAT3 之排除 → 不建議併用<br>Aminoglycosides、強效利尿劑 (furosemide)：與高劑量 cephalosporin 併用可能影響腎功能<br>Chloramphenicol：體外拮抗 → 避免併用<br>無臨床意義之 CYP450 抑制/誘導<br>檢驗干擾：尿糖銅還原法 (Clinitest) 偽陽性，改用酵素法；Coombs 陽性可干擾交叉配血

**Why:** Probenecid and the urine-glucose test interaction come from US 7.1/7.2. Nephrotoxic co-medication, chloramphenicol antagonism, no CYP interactions and Coombs interference with cross-matching come from SmPC 4.4/4.5 and TW 5.1/5.4/7.

**Sources:** US FDA label 7.1, 7.2 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 4.4, 4.5 — https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan insert 7 交互作用 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### A11 · Pregnancy (missing)

**Was:** (empty)

**Now:** 無足夠人體研究；ceftazidime 及 avibactam 於大鼠無致畸性 (avibactam 兔高劑量有胚胎毒性)。僅在明確需要/效益大於風險時使用 (US 8.1；TW 6.1/UK 4.6)

**Why:** The US 8.1 risk summary and TW/SmPC both say to use only if clearly needed or if benefit outweighs risk. The proposed text has no letter category, because FDA has retired them.

**Sources:** US FDA label 8.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; Taiwan insert 6.1 懷孕 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC 4.6 — https://www.medicines.org.uk/emc/product/2465/smpc

### A12 · Notes (missing)

**Was:** 建議 2 小時緩慢靜脈輸注

**Now:** 建議 2 小時緩慢靜脈輸注 (all labels: 120 min)<br>不涵蓋 MBL (NDM/VIM/IMP)、Acinetobacter、厭氧菌、Stenotrophomonas、S. aureus、Enterococcus → cIAI 需併用 metronidazole；疑 Gram(+) 感染需另加抗 Gram(+) 藥物<br>Coombs test 陽性常見 (3-21%)，可干擾交叉配血；出現貧血需評估溶血<br>每瓶含鈉約 146 mg (限鈉飲食注意)<br>US: cIAI 且 CrCl 30-50 臨床治癒率較低 → 腎功能變動時每日監測 CrCl 調整劑量<br>UK SmPC 另核准：limited treatment options 之需氧 Gram(-) 感染 (成人及自出生起兒童；需會診感染科)，TW 仿單未列

**Why:** Keep the existing note, which is correct. The proposed additions are label-sourced points that matter clinically: the spectrum gaps (US 12.4, SmPC 4.4/5.1), DAGT seroconversion (US 6.1, SmPC 4.4), sodium content (SmPC 4.4, TW 5.1), the US 5.1 warning on decreased cIAI response at CrCl 30-50, and the UK-only indication for limited treatment options (SmPC 4.1). Storage details are left out on purpose.

**Sources:** US FDA label 5.1, 6.1, 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC 4.1, 4.4, 5.1 — https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan insert 5.1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### A13 · Breastfeeding (missing)

**Was:** (empty)

**Now:** LactMed：可接受 (acceptable in nursing mothers)。Ceftazidime 乳汁濃度低 (2g q8h 時約 3.8-5.2 mg/L)；avibactam 未於人類研究 (大鼠乳汁可檢出)；觀察嬰兒腹瀉、鵝口瘡

**Why:** The LactMed summary calls ceftazidime-avibactam acceptable. The labels (US 8.2, SmPC/TW 4.6/6.2) say ceftazidime passes into milk in small amounts and that avibactam is unknown in humans but found in rat milk.

**Sources:** LactMed NBK500953 Summary of Use during Lactation / Drug Levels — https://www.ncbi.nlm.nih.gov/books/NBK500953/; US FDA label 8.2 Lactation — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; Taiwan insert 6.2 哺乳 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### A14 · Page body (missing)

**Was:** <適應症> 複雜性腹內感染 (cIAI) / 複雜性泌尿道感染 (cUTI) / 院內/呼吸器型肺炎 (HAP/VAP)

**Now:** 複雜性腹內感染 (cIAI，併用 metronidazole)<br>複雜性泌尿道感染 (cUTI，含腎盂腎炎)<br>院內/呼吸器型肺炎 (HAP/VAP)<br>成人菌血症 (與上述感染相關或疑似相關；TW/UK)<br>(UK only: limited treatment options 之需氧 Gram(-) 感染)

**Why:** The body's indication list leaves out the adult bacteraemia indication from TW 適應症 and SmPC 4.1, and the metronidazole co-therapy for cIAI.

**Sources:** Taiwan insert 2 適應症 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC 4.1 — https://www.medicines.org.uk/emc/product/2465/smpc; US FDA label 1.1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### A15 · Page body (minor)

**Was:** 療程：通常 5-14 天，依感染嚴重度調整

**Now:** 療程：cIAI 5-14 天；cUTI 5-14 天 (TW；US 7-14、UK 5-10，可含口服 step-down)；HAP/VAP 7-14 天；菌血症依感染部位

**Why:** Same problem as A4: the HAP/VAP lower bound is 7 days in every label.

**Sources:** Taiwan insert 表1 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US FDA label 2.1 Table 1 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### A16 · Page body (minor)

**Was:** 1. 可標靶抗藥性菌株(涵蓋 ESBL，但不涵蓋 MBL)<br>2. 對 GNB 的抗菌範圍更廣 (不涵蓋 Acinetobacter 和厭氧菌)

**Now:** 1. 可標靶抗藥性菌株(涵蓋 ESBL、KPC、AmpC、OXA-48，但不涵蓋 MBL [NDM/VIM/IMP])<br>2. 對 GNB 的抗菌範圍更廣 (不涵蓋 Acinetobacter、Stenotrophomonas 和厭氧菌；對 S. aureus、Enterococcus 亦無效)

**Why:** The existing statements are correct but incomplete. SmPC/TW 5.1/10.1 list KPC, OXA-48 and AmpC inhibition. SmPC 5.1 lists S. aureus, anaerobes, Enterococcus, Stenotrophomonas and Acinetobacter as not susceptible.

**Sources:** UK SmPC 5.1 — https://www.medicines.org.uk/emc/product/2465/smpc; US FDA label 12.4 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### A17 · Renal dose, HD, CRRT (minor)

**Was:** CrCl 31-50: 1.25gm IV q8h<br>CrCl 16-30: 0.94gm IV q12h<br>CrCl 6-15: 0.94gm IV q24h<br>CrCl ≤5: 0.94gm IV q48h

**Now:** CrCl 31-50: 1.25gm (1g/0.25g) IV q8h<br>CrCl 16-30: 0.94gm (0.75g/0.1875g) IV q12h<br>CrCl 6-15: 0.94gm IV q24h<br>CrCl ≤5 / ESRD: 0.94gm IV q48h<br>(皆輸注 2 小時；Cockcroft-Gault)

**Why:** The values are correct and match US Table 3, SmPC Table 4 and TW 表9. The TW insert, the stocked product's label, writes doses as components (1 g/0.25 g, 0.75 g/0.1875 g), so adding the component form avoids confusion with the vial strength. The labels also state the 2-hour infusion and the Cockcroft-Gault method. This is an optional clarity edit.

**Sources:** Taiwan insert 表9 — https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US FDA label 2.3 Table 3 — https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B1 · Renal dose, HD, CRRT (error)

**Was:** HD: 0.94gm IV q24-48h (HD後給藥)

**Now:** HD/ESRD: 0.94gm IV q48h (洗腎日於 HD 後給藥)

**Why:** No label supports a q24h interval for intermittent HD. The Taiwan insert (stocked product), UK SmPC and US label all give ESRD including haemodialysis as q48h, dosed after HD on dialysis days. q24h applies only to CrCl 6–15. The 'q24-48h depending on residual function' wording matches the hospital database (Lexicomp-style), not a label.

**Sources:** Taiwan 仿單 贊飛得 §3.3 表9 + footnote 3 (末期腎臟疾病(ESRD)，包括血液透析時 每 48 小時一次；進行血液透析當天應在完成血液透析後給與) https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.2 Table 4 (End Stage Renal Disease including on haemodialysis: Every 48 hours; dose after completion of haemodialysis) https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §2.3 Table 3 footnote c (CrCl ≤5: 0.94 g q48h; administer after hemodialysis on hemodialysis days) https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B2 · Page body (error)

**Was:** <腎調&洗腎劑量> ... HD: 0.94 gm IV q24h (洗腎後給藥)

**Now:** HD: 0.94 gm IV q48h (洗腎日於洗腎後給藥)

**Why:** The body line gives q24h, which contradicts all three labels (q48h for ESRD/HD). It also disagrees with the property column (q24-48h). Both should read q48h.

**Sources:** Taiwan 仿單 §3.3 表9 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.2 Table 4 https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §2.3 Table 3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B3 · Renal dose, HD, CRRT (unsupported)

**Was:** CRRT: 1.25gm IV q8h (no source; same line in page body)

**Now:** CRRT: 1.25gm IV q8h (off-label，仿單無 CRRT 建議；文獻 1.25–2.5 g q8h，依 effluent rate/MIC/感染部位個別化：Wenzler 2017 PMID 28416553 [CVVH 1.25 g q8h, n=1]；O'Jeanson 2025 PMID 39581557 [CVVHDF 1.25 或 2.5 g q8h, n=4]；Li 2026 PMID 41432444 [CRRT n=21，19/21 ceftazidime 濃度 >104 mg/L 神經毒性閾值；標準 2.5 g q8h 恐過量暴露])

**Why:** None of the three labels gives a CRRT dose. 1.25 g q8h is plausible and published, so keep it but cite it as off-label. The evidence is small PK series and case reports. Soukup 2019 (PMID 31596506) used 2.5 g q8h for Pseudomonas pneumonia on CVVHDF. Li 2026 (n=21) found 2.5 g q8h may cause excessive exposure, so the range should be stated. All PMIDs were verified with NCBI esummary.

**Sources:** Wenzler E et al. Antimicrob Agents Chemother 2017;61:e00464-17, PMID 28416553 https://pubmed.ncbi.nlm.nih.gov/28416553/; O'Jeanson A et al. Int J Antimicrob Agents 2025;65:107394, PMID 39581557 https://pubmed.ncbi.nlm.nih.gov/39581557/; Li C et al. Antimicrob Agents Chemother 2026;70:e0143825, PMID 41432444 https://pubmed.ncbi.nlm.nih.gov/41432444/; Soukup P et al. Pharmacotherapy 2019;39:1216-22, PMID 31596506 https://pubmed.ncbi.nlm.nih.gov/31596506/

### B4 · Adult dose (minor)

**Was:** 2.5gm IV q8h (5-14d)

**Now:** 2.5gm (ceftazidime 2 g/avibactam 0.5 g) <span color="green">`IV`</span> q8h，輸注 2 小時 (CrCl >50)<br>cIAI: 5-14d (併用 metronidazole)<br>cUTI: 5-14d (TW 仿單；US 7-14d，UK 5-10d，可含口服 step-down)<br>HAP/VAP: 7-14d<br>Bacteremia (成人，與上述感染相關): 療程依感染部位

**Why:** The dose is correct, but a single '5-14d' is wrong for HAP/VAP (7–14 d in every label) and leaves out the indication-specific durations, the 2-h infusion and metronidazole for cIAI. The Taiwan insert is the stocked product, so its durations come first and the US/UK values are shown alongside.

**Sources:** Taiwan 仿單 §3.1 表1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.2 Table 1 https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §2.1 Table 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B5 · Indications (error)

**Was:** IAI, UTI, Pneumonia

**Now:** cIAI, cUTI, HAP, VAP, Bacteremia

**Why:** Approval covers only the complicated forms (cIAI, cUTI incl. pyelonephritis) and HAP/VAP. 'Pneumonia' is too broad because it implies CAP, which is not approved. Bacteremia linked to these infections (adults) is an indication in the UK SmPC and the Taiwan insert. All five tags already exist in the schema. The UK-only 'limited treatment options' indication has no matching tag; put it in Notes if wanted.

**Sources:** UK SmPC §4.1 https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan 仿單 §2 適應症 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US AVYCAZ §1.1–1.3 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B6 · Coverage (missing)

**Was:** CRKP, CRPA, E.coli, Haemophilus, Klebsiella, Pseudomonas, Serratia, CREC(E.coli)

**Now:** CRKP, CRPA, E.coli, Haemophilus, Klebsiella, Pseudomonas, Serratia, CREC(E.coli), Proteus, Enterobacter

**Why:** All three labels list Proteus mirabilis and Enterobacter cloacae as clinically proven pathogens in cIAI, cUTI and HABP/VABP, and both tags exist in the schema. Keep the existing tags. CRKP and CREC are supported only for serine carbapenemases (KPC, OXA-48), not MBL. IDSA 2026 lists CAZ-AVI as preferred for KPC-E and OXA-48-E and as a preferred agent for DTR P. aeruginosa outside the urinary tract. No tag should be added for Acinetobacter, Stenotrophomonas, anaerobes, Enterococcus or S. aureus (the SmPC says these are not susceptible).

**Sources:** US AVYCAZ §1.1–1.3, §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC §5.1 (clinical efficacy pathogens; not susceptible list) https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan 仿單 §10.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; IDSA 2026 AMR Guidance Q3.4, Q3.6 (OXA-48-E), Q4.3 https://www.idsociety.org/practice-guideline/amr-guidance/

### B7 · Pediatric dose (missing)

**Was:** (empty)

**Now:** CrCl >50 mL/min/1.73m² (劑量以 ceftazidime/avibactam 表示，皆輸注 2 h)：<br>6 mo–<18 y: 50/12.5 mg/kg (max 2 g/0.5 g) q8h<br>3–<6 mo: 40/10 mg/kg q8h<br>足月 >28 d–<3 mo: 30/7.5 mg/kg q8h；足月 出生–≤28 d: 20/5 mg/kg q8h<br>早產 PMA >44–<53 wk: 30/7.5 mg/kg q8h；31–≤44 wk: 20/5 mg/kg q8h；26–<31 wk: 20/5 mg/kg q12h (僅 PK 模型)<br>療程：cIAI 5-14d、cUTI 5-14d、HAP/VAP 7-14d<br>腎功能不全 2–<18 y (Schwartz)：31-50: 25/6.25 mg/kg (max 1 g/0.25 g) q8h；16-30: 18.75/4.7 mg/kg (max 0.75 g/0.1875 g) q12h；6-15: q24h；ESRD/HD: q48h (HD 後)；3 mo–<2 y 見 TW 表10；<3 mo 腎功能不全無建議<br>(US label 核准至 GA ≥31 wk，mg/kg 相同 [以合併劑量表示 62.5/50/37.5/25 mg/kg]；US 未建議 <2 y 腎功能不全劑量)

**Why:** The column is empty, but all three labels give full pediatric dosing. The Taiwan insert (stocked product) covers ages from birth, including preterm 26–<31 wk PMA. The US label uses combined mg/kg doses that work out to the same ceftazidime amounts.

**Sources:** Taiwan 仿單 §3.1 表2–3, §3.3 表9–10 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.2 Tables 2, 3, 5, 6 https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §2.2 Table 2, §2.3 Table 4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B8 · Pregnancy (missing)

**Was:** (empty)

**Now:** 人類資料不足。動物：ceftazidime 無胎兒傷害；avibactam 無致畸性，但兔高劑量 (≥300 mg/kg/day) 見 post-implantation loss、胎重↓、骨化延遲。僅在效益大於風險時使用。(FDA 已廢除字母分級)

**Why:** The column is empty. All labels agree: no letter category, use only if benefit outweighs risk, avibactam has reproductive toxicity in animals without teratogenicity.

**Sources:** Taiwan 仿單 §6.1, §10.3 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US AVYCAZ §8.1 Risk Summary/Animal Data https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; UK SmPC §4.6 https://www.medicines.org.uk/emc/product/2465/smpc

### B9 · Breastfeeding (missing)

**Was:** (empty)

**Now:** Ceftazidime 少量進入乳汁；avibactam 人類未研究 (大鼠乳汁可測得)。LactMed：可於哺乳期使用 (acceptable)；留意嬰兒腹瀉、鵝口瘡。(LactMed NBK500953, rev. 2021-08-16)

**Why:** The column is empty. LactMed says ceftazidime reaches milk at low levels, avibactam has not been studied, and the combination is acceptable in nursing mothers. The labels say ceftazidime enters milk in small amounts and avibactam is unknown (rat milk positive). The UK and Taiwan labels ask for a risk/benefit decision.

**Sources:** LactMed 'Ceftazidime and Avibactam' NBK500953 Summary of Use during Lactation https://www.ncbi.nlm.nih.gov/books/NBK500953/; US AVYCAZ §8.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd; Taiwan 仿單 §6.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### B10 · Mechanism (missing)

**Was:** (empty)

**Now:** Ceftazidime：3rd-gen cephalosporin，結合 PBPs 抑制細胞壁 peptidoglycan 合成 → 殺菌。Avibactam：non-β-lactam β-lactamase inhibitor，與酵素形成對水解穩定之共價加合物；抑制 Ambler class A (ESBL、KPC)、class C (AmpC) 及部分 class D (OXA-48)；不抑制 class B MBL (NDM/VIM/IMP)，亦無法抑制許多 class D 酵素。

**Why:** The column is empty. The labels give the mechanism directly.

**Sources:** UK SmPC §5.1 Mechanism of action https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan 仿單 §10.1 作用機轉 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US AVYCAZ §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B11 · Drug Interactions (missing)

**Was:** (empty)

**Now:** Probenecid：不建議併用 (OAT1/OAT3 抑制 → avibactam 排除↓)<br>Aminoglycosides、強效利尿劑 (furosemide) + 高劑量 cephalosporin → 腎毒性↑<br>Chloramphenicol：體外拮抗，避免併用<br>無 CYP450 抑制/誘導；與 metronidazole 無交互作用<br>檢驗干擾：尿糖 copper-reduction 法偽陽性 (改用 enzymatic glucose oxidase)；direct Coombs test 陽性可干擾交叉配血

**Why:** The column is empty. The labels list probenecid, nephrotoxic co-medication, chloramphenicol antagonism and two lab-test interferences.

**Sources:** Taiwan 仿單 §7 交互作用, §5.4 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.5, §4.4 https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §7.1–7.2 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B12 · Side Effects (missing)

**Was:** (empty)

**Now:** GI, hematologic, LFT↑, CNS, thrombophlebitis, AKI, SJS/TEN, DRESS

**Why:** The column is empty. Label support for each tag: GI = diarrhoea, nausea and vomiting, the most common (with C. difficile colitis). Hematologic = positive Coombs (very common, ≥5%), possible haemolytic anaemia, thrombocytopenia, neutropenia, leukopenia. LFT↑ = ALT/AST/GGT/ALP increased. CNS = seizures, NCSE and encephalopathy, mainly with renal impairment (US §5.4). Thrombophlebitis = infusion-site phlebitis and thrombosis. AKI. SJS/TEN and DRESS = SCARs (SmPC 4.4). All tags exist in the schema.

**Sources:** UK SmPC §4.8 Table 7, §4.4 https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan 仿單 §8.1 表11, §5.1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US AVYCAZ §5.4, §6.1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B13 · Notes (minor)

**Was:** 建議 2 小時緩慢靜脈輸注

**Now:** 建議 2 小時緩慢靜脈輸注 (仿單)；IDSA 2026 AMR guidance 治療抗藥菌時建議 2.5 g q8h 輸注 3 小時<br>MBL (NDM) 菌：avibactam 無法抑制 MBL → 需同時 (Y-site) 併用 aztreonam 2 g q8h (輸注 3 h)，或改 aztreonam-avibactam (IDSA 略偏好)<br>KPC-E 治療中約 10% 出現抗藥性 (IDSA 2026)<br>每瓶含鈉約 146 mg (限鈉飲食注意)<br>UK SmPC 另核准：限治療選擇之需氧 GNB 感染 (需感染科會診)，TW 仿單未列

**Why:** Keep the existing note, which is correct. Additions: the guideline's 3-h extended infusion, which partly supports the hospital's 2–3 h; MBL handling (CAZ-AVI plus aztreonam); the resistance-emergence rate in KPC-E; sodium load (a safety point, not storage); and the UK-only indication, which has no tag.

**Sources:** IDSA 2026 AMR Guidance Table 1 (Ceftazidime-avibactam 2.5 g IV q8h infused over 3 hours) https://www.idsociety.org/globalassets/idsa/practice-guidelines/amr-guidance/5.0/table-1.pdf; IDSA 2026 AMR Guidance Q3.4, Q3.5 https://www.idsociety.org/practice-guideline/amr-guidance/ (2024 version: Tamma PD et al. Clin Infect Dis 2024, PMID 39108079); Taiwan 仿單 §5.1 限鈉飲食 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.1, §4.2 https://www.medicines.org.uk/emc/product/2465/smpc

### B14 · Page body (minor)

**Was:** 1. 可標靶抗藥性菌株(涵蓋 ESBL，但不涵蓋 MBL)

**Now:** 1. 可標靶抗藥性菌株(涵蓋 ESBL、AmpC、KPC、OXA-48，但不涵蓋 MBL [NDM/VIM/IMP])

**Why:** The line is correct but incomplete. The main clinical reason to use the drug is KPC and OXA-48 activity, as the labels and IDSA describe.

**Sources:** UK SmPC §5.1 https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §12.4 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B15 · Page body (minor)

**Was:** 2. 對 GNB 的抗菌範圍更廣 (不涵蓋 Acinetobacter 和厭氧菌)

**Now:** 2. 對 GNB 的抗菌範圍更廣 (不涵蓋 Acinetobacter、Stenotrophomonas、厭氧菌；對 Enterococcus、S. aureus 亦無效)

**Why:** The existing statement is correct. The SmPC and Taiwan 'not susceptible' list also names S. maltophilia, Enterococcus spp. and S. aureus.

**Sources:** UK SmPC §5.1 (not susceptible) https://www.medicines.org.uk/emc/product/2465/smpc; Taiwan 仿單 §10.2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F

### B16 · Page body (missing)

**Was:** <適應症> 複雜性腹內感染 (cIAI) / 複雜性泌尿道感染 (cUTI) / 院內/呼吸器型肺炎 (HAP/VAP)

**Now:** Add a line: 與上述感染相關或疑似相關之菌血症 (成人) — TW 仿單/UK SmPC；適用年齡：自出生起 (TW/UK)，US 為 GA ≥31 週

**Why:** The bacteraemia indication in the Taiwan insert (stocked product) and UK SmPC is missing, and the body gives no approved age range.

**Sources:** Taiwan 仿單 §2 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; UK SmPC §4.1 https://www.medicines.org.uk/emc/product/2465/smpc; US AVYCAZ §1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

### B17 · Page body (minor)

**Was:** 療程：通常 5-14 天，依感染嚴重度調整

**Now:** 療程：cIAI 5-14 天；cUTI 5-14 天 (US 7-14、UK 5-10)；HAP/VAP 7-14 天；菌血症依感染部位

**Why:** '5-14 天' does not fit HAP/VAP, where every label gives a 7-day minimum.

**Sources:** Taiwan 仿單 §3.1 表1 https://mcp.fda.gov.tw/im_detail_1/%E8%A1%9B%E9%83%A8%E8%97%A5%E8%BC%B8%E5%AD%97%E7%AC%AC027705%E8%99%9F; US AVYCAZ §2.1 Table 1 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9c2803f-dc9c-4b19-b4a3-8303bc8c15fd

## Verified correct as written

- Hepatic dose 'No adjustment required': matches US 12.3 ('Dose adjustments are not currently considered necessary... impaired hepatic function'), SmPC 4.2 and TW 3.1 肝功能不全.
- Adult dose 2.5 g IV q8h: matches US 2.1, SmPC 4.2 Table 1 and TW 表1 (2 g/0.5 g q8h).
- Renal rows CrCl 31-50 1.25 g q8h, 16-30 0.94 g q12h, 6-15 0.94 g q24h, ≤5 0.94 g q48h: match US Table 3 and are equivalent to SmPC Table 4 and TW 表9.
- Notes '建議 2 小時緩慢靜脈輸注': all three labels give a 120-minute infusion.
- Category '3rd cephalosporin + beta-lactamase inhibitor': SmPC 5.1/TW 10.1 classify it as third-generation cephalosporins, ATC J01DD52, and avibactam as a non-β-lactam β-lactamase inhibitor.
- Coverage tags E.coli, Klebsiella, Pseudomonas, Serratia and Haemophilus: listed pathogens in the US 1.1-1.3/12.4 labels (Serratia and H. influenzae for HABP/VABP). CRKP, CREC and CRPA are supported in vitro for KPC/OXA-48/AmpC/OprD-loss mechanisms but not for MBL producers (US 12.4, SmPC 5.1).
- Correctly not tagged as covered: Acinetobacter, anaerobes, MSSA/MRSA, Enterococcus, Stenotrophomonas (SmPC 5.1 lists them as not susceptible).
- Monitor 'renal': US 2.3/5.1 say to monitor CrCl at least daily when renal function is changing. 'CNS': US 5.4 lists seizures, NCSE and encephalopathy, especially in renal impairment. 'CBC': SmPC 4.4 says to investigate anaemia for haemolysis (DAGT seroconversion). 'LFT': transaminase rises are common (SmPC 4.8), which makes the tag reasonable.
- Body point 1 'covers ESBL, not MBL' and point 2 'no Acinetobacter or anaerobes': correct per US 12.4 and SmPC 4.4/5.1.
- Body indications cIAI, cUTI and HAP/VAP: correct per all three labels. Only the bacteraemia indication is missing (A14).
- Body CrCl ≤5 q48h and the dose rows: correct.
- PMIDs 39581557 and 41432444: checked with NCBI E-utilities esummary/efetch.
- Source-file note: US 8.2 Lactation is in the sources JSON, inside the '8.1 Pregnancy' section string, so it was not actually missed. 8.6 Renal is not captured, but 2.3 and 12.3 cover renal dosing.
- Renal dose rows CrCl 31-50 1.25 g q8h, 16-30 0.94 g q12h, 6-15 0.94 g q24h and ≤5 0.94 g q48h match US §2.3 Table 3. Taiwan 表9 and UK Table 4 give the same amounts as 1 g/0.25 g and 0.75 g/0.1875 g. The Notion CrCl ≤5 row is present and correct; only the hospital site cuts it off.
- Hepatic dose 'No adjustment required' matches Taiwan §3.3 (肝功能不全病人無須調整劑量), UK SmPC §4.2 and US §12.3.
- Category '3rd cephalosporin + beta-lactamase inhibitor' matches UK SmPC §5.1 / Taiwan §10.1 (third-generation cephalosporins, ATC J01DD52).
- Adult dose 2.5 g IV q8h (CrCl >50) is correct in all three labels.
- Notes '建議 2 小時緩慢靜脈輸注' matches the label infusion time of 120 min (Taiwan §3.1, UK §4.2, US §2.1).
- Monitor tags renal, CNS, CBC and LFT are supported. Renal: US §2.3/§5.1 says monitor CrCl at least daily when renal function is changing. CNS: US §5.4 seizures/NCSE. CBC: SmPC §4.4 says investigate anaemia for haemolysis. LFT: transaminase rises are listed in SmPC §4.8.
- Existing Coverage tags are supported. E.coli, Klebsiella, Pseudomonas, Serratia and Haemophilus are clinically proven pathogens (US §1, §12.4). CRKP and CREC are supported for KPC/OXA-48 producers (IDSA 2026 Q3.4 and the OXA-48-E question, both preferred). CRPA is supported (IDSA Q4.3, a preferred agent for DTR P. aeruginosa).
- Body statement 'ESBL 涵蓋、MBL 不涵蓋' and 'Acinetobacter/厭氧菌不涵蓋' are correct (SmPC §5.1).
- Body indications cIAI, cUTI and HAP/VAP are correct as far as they go.
- Taiwan insert confirmed live on TFDA: 衛部藥輸字第027705號 贊飛得注射劑2 g/0.5 g, footer 'SPC 20250520-2', history 114/03/11 版次4. The footer date (2025-05-20) is later than the last history entry (2025-03-11). This is a TFDA metadata quirk; the insert text is the same as the saved file.
- Correction to the source brief: US §8.2 Lactation and §8.6 Renal Impairment were captured. They sit inside the '8.1 Pregnancy' and '8.4 Pediatric Use' text blocks of the sources JSON.
- Correction to brief issue 6: the label infusion is 2 h, but IDSA 2026 AMR guidance Table 1 suggests a 3-h infusion for resistant infections. The hospital's '2–3 h' is therefore guideline-supported rather than an outright error.
- LactMed NBK500953 (rev 2021-08-16) verdict 'Ceftazidime-avibactam is acceptable in nursing mothers' confirmed.
- PMIDs verified with NCBI esummary: 28416553, 39581557, 41432444, 31596506, 41239168, 39108079 (IDSA 2024, CID) and 34923128 (ESCMID 2022).

## Apply log

- Renal dose, HD, CRRT: merged CrCl table with component amounts, HD/ESRD 0.94gm q48h after HD (TW/UK/US note), CRRT 1.25gm q8h off-label with Wenzler/O'Jeanson/Li PMIDs
- Adult dose: 2.5gm (2 g/0.5 g) green IV tag q8h over 2h, durations for cIAI/cUTI (TW/US/UK)/HAP-VAP/Bacteremia
- Pediatric dose: TW/UK mg/kg by age incl. preterm, durations, pediatric renal adjustment, US combined-dose values
- Indications: cIAI, cUTI, HAP, VAP, Bacteremia
- Coverage: added Enterobacter, Proteus (kept existing 8)
- Side Effects: GI, LFT↑, hematologic, thrombophlebitis, CNS, AKI, SJS/TEN, DRESS
- Mechanism: ceftazidime PBP + avibactam class A/C/some D, not MBL
- Drug Interactions: probenecid, aminoglycosides/loop diuretics, chloramphenicol, no CYP, no metronidazole interaction, Clinitest/Coombs lab interference
- Pregnancy: human data insufficient, animal data, use only if benefit > risk, letter categories retired
- Breastfeeding: LactMed acceptable, milk levels, avibactam unstudied in humans, monitor infant
- Notes: 2h infusion (labels) + IDSA 3h, coverage gaps, MBL aztreonam combo, KPC resistance, Coombs, sodium, US cIAI CrCl 30-50, UK extra indication
- Body: advantages lines 1-2 updated (ESBL/AmpC/KPC/OXA-48, not MBL; not Acinetobacter/Steno/anaerobes/Enterococcus/S. aureus)
- Body: 適應症 list updated + bacteremia, UK-only line, age line
- Body: HD line changed q24h -> q48h (洗腎日於洗腎後給藥；TW/UK ESRD 含 HD)
- Body: 療程 line replaced with indication-specific durations
- Body: References section appended (TW insert, US label, UK SmPC, LactMed, IDSA 2026, Wenzler, O'Jeanson, Li, Soukup)
- Renewed date set to 2026-10-05 (is_datetime 0)

Re-fetched after the edit to confirm it saved: yes. Renewed date set to 2026-10-05.
