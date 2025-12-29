const antibiotics = [
  {
    id: 1,
    name: "Meropenem",
    category: "Carbapenem",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Pseudomonas", "Anaerobes"],
    indications: ["IAI", "UTI", "Pneumonia", "Bacteremia", "Meningitis"],
    adultDose: "1g IV q8h | Meningitis: 2g q8h",
    renalDose: "CrCl 26-50: 1g q12h | CrCl 10-25: 500mg q12h | CrCl <10: 500mg q24h",
    notes: ""
  },
  {
    id: 2,
    name: "Vancomycin",
    category: "Glycopeptide",
    coverage: ["MSSA", "MRSA", "MRSE", "Streptococcus", "Enterococcus"],
    indications: ["SSTI", "Bacteremia", "Pneumonia", "Endocarditis", "Meningitis"],
    adultDose: "15-20 mg/kg q8-12h | Loading: 25-30 mg/kg",
    renalDose: "AUC-based dosing | HD: redose per level",
    notes: ""
  },
  {
    id: 3,
    name: "Ceftriaxone",
    category: "Cephalosporin",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Haemophilus"],
    indications: ["Pneumonia", "UTI", "Meningitis", "SSTI"],
    adultDose: "1-2g IV q24h | Meningitis: 2g q12h",
    renalDose: "No adjustment needed",
    notes: ""
  },
  {
    id: 4,
    name: "Piperacillin-Tazobactam",
    category: "Penicillin",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Pseudomonas", "Anaerobes"],
    indications: ["IAI", "HAP", "VAP", "Bacteremia"],
    adultDose: "4.5g IV q6h",
    renalDose: "CrCl 20-40: 3.375g q6h | CrCl <20: 2.25g q8h",
    notes: "Not reliable for ESBL/AmpC-producers"
  },
  {
    id: 5,
    name: "Ceftazidime",
    category: "Cephalosporin",
    coverage: ["E.coli", "Klebsiella", "Pseudomonas", "Haemophilus", "Serratia"],
    indications: ["UTI", "Pneumonia", "HAP", "VAP", "Meningitis"],
    adultDose: "1-2g IV q8h",
    renalDose: "CrCl 30-50: 1g q12h | CrCl 10-30: 1g q24h | CrCl <10: 500mg q24h",
    notes: "Weak MSSA coverage compared to cefazolin/ceftriaxone"
  },
  {
    id: 6,
    name: "Tigecycline",
    category: "Glycylcycline",
    coverage: ["MSSA", "MRSA", "VRE", "E.coli", "Klebsiella", "Acinetobacter"],
    indications: ["IAI", "SSTI"],
    adultDose: "100mg loading, then 50mg IV q12h",
    renalDose: "No adjustment needed",
    notes: "NO Pseudomonas/Proteus coverage. Avoid for severe HAP/VAP."
  },
  {
    id: 7,
    name: "Daptomycin",
    category: "Lipopeptide",
    coverage: ["MSSA", "MRSA", "MRSE", "VRE", "Streptococcus", "Enterococcus"],
    indications: ["SSTI", "Bacteremia", "Endocarditis"],
    adultDose: "SSTI: 4mg/kg q24h | Bacteremia: 6-10mg/kg q24h",
    renalDose: "CrCl <30: same dose q48h | HD: dose post-dialysis",
    notes: "NOT for pneumonia (inactivated by pulmonary surfactant)"
  },
  {
    id: 8,
    name: "Amoxicillin-Clavulanate",
    category: "Penicillin",
    coverage: ["MSSA", "Streptococcus", "Haemophilus", "E.coli", "Proteus"],
    indications: ["IAI", "Pneumonia", "UTI", "SSTI"],
    adultDose: "PO: 875mg q12h | IV: 1.2g q8h",
    renalDose: "CrCl 10-30: 500mg q12h | CrCl <10: 500mg q24h",
    notes: ""
  },
  {
    id: 9,
    name: "Ciprofloxacin",
    category: "Fluoroquinolone",
    coverage: ["E.coli", "Klebsiella", "Pseudomonas", "Proteus", "Haemophilus"],
    indications: ["UTI", "IAI"],
    adultDose: "PO: 500-750mg q12h | IV: 400mg q8-12h",
    renalDose: "CrCl 30-50: 50-75% dose | CrCl <30: 50% dose",
    notes: "Weak S. pneumoniae coverage. Not for empiric CAP."
  },
  {
    id: 10,
    name: "Levofloxacin",
    category: "Fluoroquinolone",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Haemophilus", "Mycoplasma", "Legionella"],
    indications: ["Pneumonia", "UTI", "SSTI"],
    adultDose: "500-750mg PO/IV q24h",
    renalDose: "CrCl 20-49: 250-500mg q24h | CrCl <20: 250-500mg q48h",
    notes: "Better Gram-positive and atypical coverage than ciprofloxacin"
  },
  {
    id: 11,
    name: "Cefepime",
    category: "Cephalosporin",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Pseudomonas", "Enterobacter"],
    indications: ["HAP", "VAP", "UTI", "Bacteremia", "Febrile Neutropenia"],
    adultDose: "1-2g IV q8h",
    renalDose: "CrCl 30-60: 1g q12h | CrCl 10-30: 1g q24h | CrCl <10: 1g q24h",
    notes: "Verify renal dosing with local protocol"
  },
  {
    id: 12,
    name: "Linezolid",
    category: "Oxazolidinone",
    coverage: ["MSSA", "MRSA", "VRE", "Streptococcus", "Enterococcus"],
    indications: ["Pneumonia", "SSTI", "Bacteremia"],
    adultDose: "600mg PO/IV q12h",
    renalDose: "No adjustment needed",
    notes: "First-line option for MRSA pneumonia"
  },
  {
    id: 13,
    name: "Metronidazole",
    category: "Nitroimidazole",
    coverage: ["Anaerobes", "C.difficile"],
    indications: ["IAI", "CDI", "Pelvic"],
    adultDose: "500mg PO/IV q8h",
    renalDose: "No adjustment needed | HD: dose after dialysis",
    notes: "Now second-line for CDI (PO vancomycin or fidaxomicin preferred)"
  },
  {
    id: 14,
    name: "Azithromycin",
    category: "Macrolide",
    coverage: ["Streptococcus", "Haemophilus", "Mycoplasma", "Legionella"],
    indications: ["Pneumonia", "SSTI"],
    adultDose: "500mg IV/PO q24h",
    renalDose: "No adjustment needed",
    notes: ""
  },
  {
    id: 15,
    name: "Cefazolin",
    category: "Cephalosporin",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Proteus"],
    indications: ["SSTI", "UTI", "Surgical Prophylaxis"],
    adultDose: "1-2g IV q8h",
    renalDose: "CrCl 35-54: q12h | CrCl 10-34: q24h",
    notes: "Verify renal dosing with local protocol"
  },
  {
    id: 16,
    name: "Ampicillin-Sulbactam",
    category: "Penicillin",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Proteus", "Haemophilus", "Anaerobes"],
    indications: ["IAI", "SSTI", "Pneumonia", "Pelvic"],
    adultDose: "3g IV q6h",
    renalDose: "CrCl 15-29: q12h | CrCl <15: q24h",
    notes: ""
  },
  {
    id: 17,
    name: "Colistin",
    category: "Polymyxin",
    coverage: ["Pseudomonas", "Acinetobacter", "Klebsiella", "CRKP", "CRAB", "CRPA"],
    indications: ["HAP", "VAP", "Bacteremia", "UTI"],
    adultDose: "Loading: 300mg CBA | Maintenance: 150mg CBA q12h",
    renalDose: "Complex dosing - use nomogram based on CrCl and weight",
    notes: "LAST-LINE agent. High nephrotoxicity risk."
  },
  {
    id: 18,
    name: "Ertapenem",
    category: "Carbapenem",
    coverage: ["MSSA", "Streptococcus", "E.coli", "Klebsiella", "Proteus", "Anaerobes"],
    indications: ["IAI", "UTI", "Pneumonia", "SSTI", "Pelvic"],
    adultDose: "1g IV q24h",
    renalDose: "CrCl <30: 500mg q24h | HD: 500mg q24h + 150mg after HD",
    notes: "No Pseudomonas coverage (unlike meropenem)"
  }
]

export default antibiotics