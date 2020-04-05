import Hospitals from '../consts/Hospitals';
import Hospital from '../types/Hospital';
import sanitizeName from '../helpers/sanitizeName';

export default function toHospital(str: string): Hospital | null {
  const sanitized = sanitizeName(str);

  if (!sanitized) {
    return null;
  }

  // eslint-disable-next-line max-len
  const match = Hospitals.find((hospital) => hospital.name.toUpperCase() === sanitized.toUpperCase());
  const match2 = Hospitals.find((hospital) => hospital.name.toUpperCase() === sanitized.replace(' AND ', ' & ').toUpperCase());
  const match3 = Hospitals.find((hospital) => hospital.name.toUpperCase() === sanitized.replace(' & ', ' AND ').toUpperCase());

  if (!match && !match2 && !match3) {
    return null;
  }

  if (match) {
    return match as Hospital;
  }

  if (match2) {
    return match2 as Hospital;
  }

  if (match3) {
    return match3 as Hospital;
  }

  return null;
}
