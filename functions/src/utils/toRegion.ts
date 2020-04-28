import { psgc } from 'ph-locations';

const { regions } = psgc;

export default (regionCode: string | null): string | null => {
  if (!regionCode) {
    return null;
  }

  const match = regions.find((r) => `PH${r.code}` === regionCode);

  return (match && match.name) || null;
};
