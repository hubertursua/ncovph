import PregnancyStatus from '../types/PregnancyStatus';
import toNullableString from './toNullableString';

export default (str: string): PregnancyStatus => {
  const val = toNullableString(str);

  if (!val) {
    return PregnancyStatus.UNKNOWN;
  }

  return (val.toUpperCase() === 'YES')
    ? PregnancyStatus.YES
    : PregnancyStatus.NO;
};
