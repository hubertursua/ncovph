import ConfirmedCasePatient from "./ConfirmedCasePatient";
import ConfirmedCasePatientOFWMetadata from "./ConfirmedCasePatientOFWMetadata";

export default interface ConfirmedCasePatientOFW extends ConfirmedCasePatient {
  country: string;
  date_reported: Date;
  metadata: ConfirmedCasePatientOFWMetadata;
}
