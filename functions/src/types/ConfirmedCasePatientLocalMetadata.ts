import ConfirmedCasePatientLocalMetadataFieldStatus from "./ConfirmedCasePatientLocalMetadataFieldStatus";
import ConfirmedCasePatientLocalMetadataRawData from "./ConfirmedCasePatientLocalMetadataRawData";

export default interface ConfirmedCasePatientLocalMetadata {
  cruise_ship: string | null;
  field_status: ConfirmedCasePatientLocalMetadataFieldStatus;
  raw_data: ConfirmedCasePatientLocalMetadataRawData;
}
