import sanitizeName from '../helpers/sanitizeName';
import toHospital from './toHospital';

export default function toFacilityName(str: string | null): string | null {
  const sanitized = sanitizeName(str);

  if (!sanitized) {
    return null;
  }

  const hospital = toHospital(sanitized);

  if (hospital) {
    return hospital.name;
  }

  return sanitized;
}
