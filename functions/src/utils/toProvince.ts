import { psgc } from 'ph-locations';

const { provinces } = psgc;
const metroManilaDistrictCodes = [
  'PH133900000', // 1st District
  'PH137400000', // 2nd District
  'PH137500000', // 3rd District
  'PH137600000', // 4th District
];

export default (provinceCode: string | null): string | null => {
  if (!provinceCode) {
    return null;
  }

  if (metroManilaDistrictCodes.includes(provinceCode)) {
    return 'Metro Manila';
  }

  const match = provinces.find((p) => `PH${p.code}` === provinceCode);

  return (match && match.name) || null;
};
