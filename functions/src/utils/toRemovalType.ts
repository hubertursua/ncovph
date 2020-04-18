import RemovalType from '../types/RemovalType';

export default (str: string): RemovalType | null => {
  const val = str.toUpperCase().trim();

  if (val === 'RECOVERED') {
    return RemovalType.RECOVERED;
  }

  if (val === 'DIED') {
    return RemovalType.DIED;
  }

  return null;
};
