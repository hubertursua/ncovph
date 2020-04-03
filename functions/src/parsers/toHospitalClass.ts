import HospitalClass from '../types/HospitalClass';

export default function toHospitalClass(str: string): HospitalClass | null {
  if (!str) {
    return null;
  }

  const trimmed = str.trim().toUpperCase();

  if (trimmed === 'GENERAL') {
    return HospitalClass.GENERAL;
  }

  if (trimmed === 'SPECIALTY') {
    return HospitalClass.SPECIALTY;
  }

  if (trimmed === 'SPECIALTY-MOTHER & CHILD') {
    return HospitalClass.SPECIALTY_MOTHER_CHILD;
  }

  if (
    trimmed === 'SPECIALTY OB GYN'
    || trimmed === 'SPECIALTY-OB & GYNECOLOGY'
  ) {
    return HospitalClass.SPECIALTY_OBSTETRICS_GYNECOLOGY;
  }

  if (trimmed.includes('OBSTETRICS-GYNECOLOGY & PEDIATRICS')) {
    return HospitalClass.SPECIALTY_OBSTETRICS_GYNECOLOGY_PEDIATRICS;
  }

  if (trimmed === 'SPECIALTY-ORTHO') {
    return HospitalClass.SPECIALTY_ORTHOPEDICS;
  }

  throw new Error(`Cannot convert "${str}" to HospitalClass`);
}
