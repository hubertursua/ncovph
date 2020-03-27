enum HospitalSub {
  CITY = "CITY",
  DISTRICT = "DISTRICT",
  DND_AFP = "DND (AFP)",
  DND = "DND",
  DOH_RET = "DOH-RET",
  DOHBARMM = "DOHBARMM",
  DOJ = "DOJ",
  GOVERNMENT = "GOVERNMENT",
  LGU = "LGU",
  MOH_BARMM = "MOH-BARMM",
  MUNICIPAL = "MUNICIPAL",
  NAVY = "NAVY",
  PNP = "PNP",
  PROVINCIAL = "PROVINCIAL",
  UNIVERSITY = "UNIVERSITY",
  UP_SYSTEM = "UP SYSTEM",
}

export default HospitalSub;

/*
  'Provincial', null,         'DOH-RET',
  'AFP',        'LGU',        'DOJ',
  'navy',       'Prov.',      'City',
  'DND (AFP)',  'Mun',        'GV',
  'UNIVERSITY', 'GOVT',       'CITY',
  ' Mun',       'Province',   'district',
  'MOH-BARMM',  'DND',        ' Provincial',
  'Municipal',  'District',   'City ',
  'Navy',       'University', 'Provl',
  'PROV.',      'city',       'PNP',
  'DOHBARMM',   'UP SYSTEM'
*/
