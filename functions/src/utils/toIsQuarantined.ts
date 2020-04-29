import QuarantineStatus from '../types/QuarantineStatus';
import toNullableString from './toNullableString';

export default (str: string): QuarantineStatus => {
  const val = toNullableString(str);

  if (!val) {
    return QuarantineStatus.UNKNOWN;
  }

  return (val.toUpperCase() === 'YES')
    ? QuarantineStatus.YES
    : QuarantineStatus.NO;
};
