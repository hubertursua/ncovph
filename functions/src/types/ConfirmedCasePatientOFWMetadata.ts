import ConfirmedCasePatientOFWMetadataFieldStatus from './ConfirmedCasePatientOFWMetadataFieldStatus';
import ConfirmedCasePatientOFWMetadataRawData from './ConfirmedCasePatientOFWMetadataRawData';

interface ConfirmedCasePatientOFWMetadata {
  cruise_ship: string | null;
  field_status: ConfirmedCasePatientOFWMetadataFieldStatus;
  raw_data: ConfirmedCasePatientOFWMetadataRawData;
}

export default ConfirmedCasePatientOFWMetadata;
