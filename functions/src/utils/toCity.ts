import stripAltName from './stripAltName';

export default (city: string | null): string | null => {
  if (!city) {
    return null;
  }

  const citySanitized = stripAltName(city).replace('For Validation', '') || null;

  return citySanitized;
};
