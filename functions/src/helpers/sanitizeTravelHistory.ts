import getStandardizedCountry from './getStandardizedCountry';

export default function sanitizeTravelHistory(travelHistory: string): string {
  const trimmed = travelHistory
    .trim()
    .replace(/[\(\)]/g, "")
    .replace("Yes. ", "")
    .replace("Yes ", "");

  if (trimmed.includes('M/V Diamond Princess') || trimmed.includes('Diamond Princess Cruise Ship')) {
    return "Japan";
  }

  if (trimmed.includes('M/V Grand Princess') || trimmed.includes('Grand Princess Cruise Ship')) {
    return "United States of America";
  }

  return getStandardizedCountry(trimmed);
}
