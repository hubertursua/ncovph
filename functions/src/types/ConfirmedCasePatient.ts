import CaseID from './CaseID';
import LatLng from './LatLng';
// import PartialPatientRelationship from "./PartialPatientRelationship";
import PatientStatus from './PatientStatus';
import Sex from './Sex';

interface ConfirmedCasePatient {
  caseID: CaseID;
  age: number;
  sex: Sex;
  date_confirmed?: Date | null;
  date_deceased?: Date | null;
  date_recovered?: Date | null;
  confirmation_notes?: string | null;
  coordinates: LatLng;
  // relationships: PartialPatientRelationship[];
  status: PatientStatus;
  status_notes?: string | null;
  remarks?: string | null;
}

export default ConfirmedCasePatient;
