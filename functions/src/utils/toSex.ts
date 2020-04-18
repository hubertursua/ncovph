import Sex from '../types/Sex';

export default (str: string): Sex | null => {
  const val = str.toUpperCase().trim();

  if (['F', 'FEMALE'].includes(val)) {
    return Sex.FEMALE;
  }

  if (['M', 'MALE'].includes(val)) {
    return Sex.MALE;
  }

  return Sex.UNKNOWN;
};
