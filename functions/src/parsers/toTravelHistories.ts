import sanitizeTravelHistory from "../helpers/sanitizeTravelHistory";
import TravelHistory from '../types/TravelHistory';

const DELIMETER1 = ";";
const DELIMETER2 = ",";

export const NULLABLE_VALUES = [
  "FOR VALIDATION",
  "NONE",
  "None",
  "No Travel History"
];

export function toTravelHistory(travelHistory: string): TravelHistory {
  const sanitizedTH = sanitizeTravelHistory(travelHistory);
  if (!sanitizedTH || NULLABLE_VALUES.includes(sanitizedTH.toUpperCase())) {
    return null;
  }
  return sanitizedTH;
}

export default function toTravelHistories(
  travelHistories: string | null
): TravelHistory[] {
  if (travelHistories === null) {
    return [] as TravelHistory[];
  }

  const thArr = travelHistories
    .split(DELIMETER1)
    .join(DELIMETER2)
    .split(DELIMETER2);

  return thArr.reduce(
    (accumulator: TravelHistory[], currentValue: TravelHistory) => {
      const travelHistory = toTravelHistory(currentValue);

      if (!travelHistory) {
        return accumulator;
      }

      return [...accumulator, travelHistory];
    },
    []
  );
}
