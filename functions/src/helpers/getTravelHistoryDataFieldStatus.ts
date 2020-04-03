import DataFieldStatus from '../types/DataFieldStatus';

export default function getTravelHistoryDataFieldStatus(
  travelHistories: string,
): DataFieldStatus {
  if (!travelHistories || travelHistories.toUpperCase() === 'UNSPECIFIED') {
    return DataFieldStatus.UNSPECIFIED;
  }
  if (travelHistories.toUpperCase() === 'FOR VALIDATION') {
    return DataFieldStatus.FOR_VALIDATION;
  }
  return DataFieldStatus.CONFIRMED;
}
