import Counts from 'ncovph-parser/src/types/Counts';
import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';

export const path = '/counts';

export const handler = async (req, res): Promise<void> => {
  const counts = cache.get<Counts>(CacheKeys.COUNTS);
  res.json(counts);
};
