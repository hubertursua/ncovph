import Regions from 'ncovph-parser/dist/types/Region';

export default (str: string | null): string | null => {
  if (!str) {
    return null;
  }

  const match = Regions[str];

  return (match) || null;
};
