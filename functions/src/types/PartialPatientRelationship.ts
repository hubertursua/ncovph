import PatientRelationshipType from "./PatientRelationshipType";

export default interface PartialPatientRelationship {
  patient: string;
  relationship: PatientRelationshipType;
}
