import CaseID from "./CaseID";
import LatLng from "./LatLng";
// import PartialPatientRelationship from "./PartialPatientRelationship";
import PatientStatus from "./PatientStatus";
import Sex from "./Sex";

export default interface ConfirmedCasePatient {
  caseID: CaseID;
  age: number;
  sex: Sex;
  date_confirmed?: Date | null;
  confirmation_notes?: string | null;
  coordinates: LatLng;
  // relationships: PartialPatientRelationship[];
  status: PatientStatus;
  status_notes?: string | null;
  remarks?: string | null;
}
