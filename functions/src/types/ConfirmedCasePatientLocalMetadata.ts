import ConfirmedCasePatientLocalMetadataFieldStatus from "./ConfirmedCasePatientLocalMetadataFieldStatus";
import ConfirmedCasePatientLocalMetadataRawData from "./ConfirmedCasePatientLocalMetadataRawData";

export default interface ConfirmedCasePatientLocalMetadata {
  field_status: ConfirmedCasePatientLocalMetadataFieldStatus;
  raw_data: ConfirmedCasePatientLocalMetadataRawData;
}
