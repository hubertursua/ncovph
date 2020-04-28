import { psgc } from 'ph-locations';

const { citiesMunicipalities } = psgc;

export default (cityCode: string | null): string | null => {
  if (!cityCode) {
    return null;
  }

  const match = citiesMunicipalities.find((c) => `PH${c.code}` === cityCode);

  return (match && match.name) || null;
};
