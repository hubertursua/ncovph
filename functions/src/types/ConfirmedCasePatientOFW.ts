import ConfirmedCasePatient from './ConfirmedCasePatient';
import ConfirmedCasePatientOFWMetadata from './ConfirmedCasePatientOFWMetadata';

interface ConfirmedCasePatientOFW extends ConfirmedCasePatient {
  country: string;
  date_reported: Date;
  metadata: ConfirmedCasePatientOFWMetadata;
}

export default ConfirmedCasePatientOFW;
