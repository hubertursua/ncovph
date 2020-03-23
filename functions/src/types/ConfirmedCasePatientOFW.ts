import ConfirmedCasePatient from "./ConfirmedCasePatient";

export default interface ConfirmedCasePatientOFW extends ConfirmedCasePatient {
  country: string;
  date_reported: string;
}
