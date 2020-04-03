import PatientStatus from '../types/PatientStatus';

export default function toPatientStatus(status: string | null): PatientStatus {
  if (status === null) {
    return PatientStatus.UNSPECIFIED;
  }

  if (status.toUpperCase().includes('STABLE')) {
    return PatientStatus.STABLE;
  }

  switch (status.toUpperCase()) {
    case 'UNDER INVESTIGATION':
      return PatientStatus.UNDER_INVESTIGATION;
    case 'UNDER HOME QUARANTINE':
      return PatientStatus.UNDER_HOME_QUARANTINE;
    case 'STABLE':
      return PatientStatus.STABLE;
    case 'RECOVERED':
      return PatientStatus.RECOVERED;
    case 'DECEASED':
      return PatientStatus.DECEASED;
    default:
      return PatientStatus.UNSPECIFIED;
  }
}
