# FJUH hospital drug database: issues found during Notion verification

Discrepancies between the hospital drug information system (10.10.4.25) and the official labels. These were **not** copied into Notion; they are listed here for the drug information team to review.

| Drug (code) | Field | Hospital database says | Official source says | Source |
|---|---|---|---|---|
| Meropenem (MER02) | 懷孕分類 | B | The FDA retired letter categories (PLLR). Current label: insufficient human data; no fetal toxicity in animal studies | US label §8.1 |
| Meropenem (MER02) | 哺乳分類 | Excretion in breast milk unknown / use caution | Excreted at very low levels (RID 0.13–0.18%); acceptable during breastfeeding | LactMed NBK501017 (rev. 2021) |
| Meropenem (MER02) | 安定性 | NS: 2 h at 15–25 °C / 18 h at 4 °C; D5W: 1 h / 8 h | Infusion in NS: 1 h at ≤25 °C / 15 h at ≤5 °C; in D5W: use immediately. Bolus vial in SWFI: 3 h / 13 h | US label §2 (DailyMed 2026) |
| Meropenem (MER02) | 藥動學 | "CSF concentrations approximate those of the plasma" | CSF 1.1–3.3 mg/L (inflamed meninges, pediatric) vs plasma peak ~49 mg/L after 1 g | US label §12.3 |
| Colistin (COL04) | 腎功能調整 (severe row) | "1.5 mg/kg/day OR 100 mg/day, every 36 hours" | **1.5 mg/kg every 36 hours** (≈1 mg/kg/day), CrCl 10–29 | US label (Coly-Mycin M), Dosage table |
| Colistin (COL04) | 腎功能調整 (basis) | Bands by serum creatinine (old US label) | Current US label uses CrCl (≥80 / 50–79 / 30–49 / 10–29) | US label (DailyMed 2026) |
| Colistin (COL04) | 規格 | "Sodium Colistin Methanesulfonate 66.6 mg (2 MIU)/Vial" | 2 MIU ≈ 66.8 mg colistin base activity (CBA) ≈ 160 mg CMS. 66.6 vs 66.8 also inconsistent | UK SmPC conversion table |
| Colistin (COL04) | 警語 / 副作用 | No mention of pseudo-Bartter syndrome | Renal tubulopathy with hypokalemia, metabolic alkalosis, hypocalcemia, hypomagnesemia; monitor electrolytes | US label (Warnings); UK SmPC 4.4 |
| Colistin (COL04) | 哺乳分類 | Avoided | Minimal milk excretion, poor oral absorption; inhaled use acceptable | LactMed NBK501329 (rev. 2024) |
| Colistin (COL04) | 懷孕分類 | C | FDA letter categories retired; label: crosses placenta, use only if benefit justifies risk | US label |
