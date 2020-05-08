import { psgc } from 'ph-locations';

const { provinces } = psgc;

export default (province: string | null): string | null => {
  if (!province) {
    return null;
  }

  if (province === 'NCR') {
    return 'Metro Manila';
  }

  const provinceNoSuffix = province.replace(' PROVINCE', '');

  const match = provinces.find((p) => (
    provinceNoSuffix === p.name.toUpperCase()
    || (provinceNoSuffix === 'COMPOSTELA VALLEY' && p.name === 'Davao De Oro')
  ));

  if (!match && province !== 'For Validation') {
    throw new Error(`cannot match ${province}`);
  }

  return (match && match.name) || null;
};
