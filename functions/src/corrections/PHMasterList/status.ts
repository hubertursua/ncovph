import dateRecovered from './dateRecovered';
import dateDeceased from './dateDeceased';
import PatientStatus from '../../types/PatientStatus';

export default function status(original: string | null, phMasterl: string): string | null {
  const dateRec = dateRecovered(phMasterl);
  const dateDec = dateDeceased(phMasterl);

  if (dateDec) {
    return PatientStatus.DECEASED;
  }

  if (dateRec) {
    return PatientStatus.RECOVERED;
  }

  return original;
}
