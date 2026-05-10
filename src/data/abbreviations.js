// Translation map: short labels used in Notion → long-form English.
// The data file (synced from Notion) keeps the short labels as-is so that
// re-syncing never breaks. The UI uses `expand()` to show readable names
// and a tooltip with both forms.

export const indicationLabels = {
  CAP: 'Community-Acquired Pneumonia',
  HAP: 'Hospital-Acquired Pneumonia',
  VAP: 'Ventilator-Associated Pneumonia',
  UTI: 'Urinary Tract Infection',
  cUTI: 'Complicated UTI',
  IAI: 'Intra-Abdominal Infection',
  cIAI: 'Complicated IAI',
  SSTI: 'Skin & Soft Tissue Infection',
  cSSTI: 'Complicated SSTI',
  CDI: 'C. difficile Infection',
  FN: 'Febrile Neutropenia',
  Pelvic: 'Pelvic Infection',
  Bacteremia: 'Bacteremia',
  Sepsis: 'Sepsis',
  Endocarditis: 'Endocarditis',
  Meningitis: 'Meningitis',
  'Brain abscess': 'Brain Abscess',
  Peritonitis: 'Peritonitis',
  Osteoarthritis: 'Bone & Joint Infection',
  Pneumonia: 'Pneumonia',
  'Surgical prophylaxis': 'Surgical Prophylaxis',
  Candidiasis: 'Candidiasis',
  Aspergillosis: 'Aspergillosis',
  Influenza: 'Influenza',
  Herpes: 'Herpes',
}

export const coverageLabels = {
  MSSA: 'Methicillin-Susceptible S. aureus',
  MRSA: 'Methicillin-Resistant S. aureus',
  MRSE: 'Methicillin-Resistant S. epidermidis',
  VRE: 'Vancomycin-Resistant Enterococci',
  CRKP: 'Carbapenem-Resistant K. pneumoniae',
  CRAB: 'Carbapenem-Resistant A. baumannii',
  CRPA: 'Carbapenem-Resistant P. aeruginosa',
  'CREC(E.coli)': 'Carbapenem-Resistant E. coli',
  'E. faecalis': 'Enterococcus faecalis',
  'E.coli': 'Escherichia coli',
  HSV: 'Herpes Simplex Virus',
  VZV: 'Varicella-Zoster Virus',
  'Influenza A': 'Influenza A',
  'Influenza B': 'Influenza B',
}

export const monitorLabels = {
  renal: 'Renal function',
  LFT: 'Liver function tests',
  CBC: 'Complete blood count',
  'PT/INR': 'PT / INR',
  electrolyte: 'Electrolytes',
  ECG: 'ECG',
  neuro: 'Neurologic status',
  CNS: 'CNS effects',
  CPK: 'Creatine phosphokinase',
}

export const sideEffectLabels = {
  GI: 'Gastrointestinal',
  'LFT↑': 'Elevated liver enzymes',
  AKI: 'Acute kidney injury',
  CNS: 'CNS effects',
  'QTc prolong': 'QTc prolongation',
  'QTc shorten': 'QTc shortening',
  'SJS/TEN': 'Stevens-Johnson / TEN',
  DRESS: 'DRESS syndrome',
  'Red-man syndrome': 'Red-man syndrome',
}

const allLabels = {
  ...indicationLabels,
  ...coverageLabels,
  ...monitorLabels,
  ...sideEffectLabels,
}

// Returns the long-form label for a short token, falling back to the token
// itself if no translation is available.
export function expand(token) {
  return allLabels[token] || token
}
