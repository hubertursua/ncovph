import stripAltName from './stripAltName';
import toNullableString from './toNullableString';

export default (str: string): string | null => {
  const val = toNullableString(str);

  if (val === null) {
    return null;
  }

  return stripAltName(val);
};
