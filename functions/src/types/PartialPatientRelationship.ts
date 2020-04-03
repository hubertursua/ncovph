import PatientRelationshipType from './PatientRelationshipType';

interface PartialPatientRelationship {
  patient: string;
  relationship: PatientRelationshipType;
}

export default PartialPatientRelationship;
