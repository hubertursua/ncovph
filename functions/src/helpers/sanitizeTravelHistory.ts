import getStandardizedCountry from './getStandardizedCountry';

export default function sanitizeTravelHistory(travelHistory: string): string {
  const trimmed = travelHistory
    .trim()
    .replace(/[\(\)]/g, "")
    .replace("Yes. ", "")
    .replace("Yes ", "");

  if (trimmed === "Diamond Princess Cruise Ship") {
    return trimmed;
  }

  return getStandardizedCountry(trimmed);
}
