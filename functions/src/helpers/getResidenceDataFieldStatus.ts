import DataFieldStatus from '../types/DataFieldStatus';

export default function getResidenceDataFieldStatus(
  residence: string,
): DataFieldStatus {
  if (residence.toUpperCase() === 'NONE') {
    return DataFieldStatus.UNSPECIFIED;
  }

  if (residence.toUpperCase() === 'FOR VALIDATION') {
    return DataFieldStatus.FOR_VALIDATION;
  }

  return DataFieldStatus.CONFIRMED;
}
