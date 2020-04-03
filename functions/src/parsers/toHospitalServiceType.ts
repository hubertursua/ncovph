import HospitalServiceType from '../types/HospitalServiceType';

export default function toHospitalServiceType(str: string): HospitalServiceType {
  const trimmed = str.trim()
    .toUpperCase()
    .replace(' -', '-')
    .replace(' SPECIALTY', '-SPECIALTY');

  if (trimmed === 'LEVEL 1') {
    return HospitalServiceType.LEVEL_1;
  }

  if (trimmed === 'LEVEL 2') {
    return HospitalServiceType.LEVEL_2;
  }

  if (trimmed === 'LEVEL 3') {
    return HospitalServiceType.LEVEL_3;
  }

  if (trimmed === 'LEVEL 1-SPECIALTY') {
    return HospitalServiceType.LEVEL_1_SPECIALTY;
  }

  if (trimmed === 'LEVEL 2-SPECIALTY') {
    return HospitalServiceType.LEVEL_2_SPECIALTY;
  }

  if (trimmed === 'LEVEL 3-SPECIALTY') {
    return HospitalServiceType.LEVEL_3_SPECIALTY;
  }

  if (trimmed === 'SPECIALTY-MOTHER & CHILD') {
    return HospitalServiceType.SPECIALTY_MOTHER_CHILD;
  }

  if (trimmed === 'SPECIALTY-OB & GYNECOLOGY') {
    return HospitalServiceType.SPECIALTY_OB_GYNECOLOGY;
  }

  throw new Error(`Cannot convert "${str}" to HospitalServiceType`);
}
