import { psgc } from 'ph-locations';

const { regions } = psgc;

export default (region: string | null): string | null => {
  if (!region) {
    return null;
  }

  const match = regions.find((r) => region.includes(r.name) || region.includes(r.altName));

  if (!match) {
    throw new Error(`cannot match ${region}`);
  }

  return (match && match.name) || null;
};
