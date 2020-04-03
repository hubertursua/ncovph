import ConfirmedCasePatient from './ConfirmedCasePatient';
import PatientRelationshipType from './PatientRelationshipType';
import PartialPatientRelationship from './PartialPatientRelationship';

interface PatientRelationship {
  patient: ConfirmedCasePatient;
  relationship: PatientRelationshipType;
}

export default PatientRelationship;

// const SAME_HOUSEHOLD_REGEX = /(?:HOUSEHOLD).+((?:PH|OF|FN)\d+)/;
const SAME_HOUSEHOLD_REGEX = /(?:HOUSEHOLD).+((?:PH|OF|FN)\d+)/;
const HUSBAND_REGEX = /(?:HUSBAND).+((?:PH|OF|FN)\d+)/;
const WIFE_REGEX = /(?:WIFE).+((?:PH|OF|FN)\d+)/;
const FATHER_REGEX = /(?:FATHER).+((?:PH|OF|FN)\d+)/;
const MOTHER_REGEX = /(?:MOTHER).+((?:PH|OF|FN)\d+)/;
const SON_REGEX = /(?:SON).+((?:PH|OF|FN)\d+)/;
const DAUGHTER_REGEX = /(?:DAUGHTER).+((?:PH|OF|FN)\d+)/;
const BROTHER_REGEX = /(?:BROTHER).+((?:PH|OF|FN)\d+)/;
const SISTER_REGEX = /(?:SISTER).+((?:PH|OF|FN)\d+)/;
const NEPHEW_REGEX = /(?:NEPHEW).+((?:PH|OF|FN)\d+)/;
const NIECE_REGEX = /(?:NIECE).+((?:PH|OF|FN)\d+)/;
const CONTACT_REGEX = /(?:CONTACT).+((?:PH|OF|FN)\d+)/;
const EXPOSURE_REGEX = /(?:EXPOSURE).+((?:PH|OF|FN)\d+)/;
const RELATIVE_REGEX = /(?:RELATIVE).+((?:PH|OF|FN)\d+)/;

function getMatchingRelatedPatients(str: string, pattern: RegExp): string[] {
  const matches = str.match(pattern);

  if (!matches) {
    return [] as string[];
  }

  return [matches[1]];
}

function matchToRelationship(relationship: PatientRelationshipType):
  (value: string) => PartialPatientRelationship {
  return (patient: string): PartialPatientRelationship => ({
    patient,
    relationship,
  } as PartialPatientRelationship);
}

export const strToPatientRelationships = (str: string): PartialPatientRelationship[] => {
  if (str === null) {
    return [];
  }

  const prepStr = str.trim().toUpperCase();

  const relSameHousehold = getMatchingRelatedPatients(prepStr, SAME_HOUSEHOLD_REGEX)
    .map(matchToRelationship(PatientRelationshipType.SAME_HOUSEHOLD));

  const relHusband = getMatchingRelatedPatients(prepStr, HUSBAND_REGEX).map(
    matchToRelationship(PatientRelationshipType.HUSBAND),
  );

  const relWife = getMatchingRelatedPatients(prepStr, WIFE_REGEX).map(
    matchToRelationship(PatientRelationshipType.WIFE),
  );

  const relFather = getMatchingRelatedPatients(prepStr, FATHER_REGEX).map(
    matchToRelationship(PatientRelationshipType.FATHER),
  );

  const relMother = getMatchingRelatedPatients(prepStr, MOTHER_REGEX).map(
    matchToRelationship(PatientRelationshipType.MOTHER),
  );

  const relSon = getMatchingRelatedPatients(prepStr, SON_REGEX).map(
    matchToRelationship(PatientRelationshipType.SON),
  );

  const relDaughter = getMatchingRelatedPatients(prepStr, DAUGHTER_REGEX).map(
    matchToRelationship(PatientRelationshipType.DAUGHTER),
  );

  const relBrother = getMatchingRelatedPatients(prepStr, BROTHER_REGEX).map(
    matchToRelationship(PatientRelationshipType.BROTHER),
  );

  const relSister = getMatchingRelatedPatients(prepStr, SISTER_REGEX).map(
    matchToRelationship(PatientRelationshipType.SISTER),
  );

  const relNephew = getMatchingRelatedPatients(prepStr, NEPHEW_REGEX).map(
    matchToRelationship(PatientRelationshipType.NEPHEW),
  );

  const relNiece = getMatchingRelatedPatients(prepStr, NIECE_REGEX).map(
    matchToRelationship(PatientRelationshipType.NIECE),
  );

  const relRelative = getMatchingRelatedPatients(prepStr, RELATIVE_REGEX).map(
    matchToRelationship(PatientRelationshipType.RELATIVE),
  );

  const relContact = getMatchingRelatedPatients(prepStr, CONTACT_REGEX).map(
    matchToRelationship(PatientRelationshipType.CONTACT),
  );

  const relExposure = getMatchingRelatedPatients(prepStr, EXPOSURE_REGEX).map(
    matchToRelationship(PatientRelationshipType.EXPOSURE),
  );

  // TODO: Some relationship do not have a patient indicated

  return [
    ...relSameHousehold,
    ...relHusband,
    ...relWife,
    ...relFather,
    ...relMother,
    ...relSon,
    ...relDaughter,
    ...relBrother,
    ...relSister,
    ...relNephew,
    ...relNiece,
    ...relRelative,
    ...relContact,
    ...relExposure,
  ];
};
