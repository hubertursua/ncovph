import cache from '../cache';
import Counts from '../types/Counts';
import CacheKeys from '../consts/CacheKeys';

export const path = '/counts';

export const handler = async (req, res): Promise<void> => {
  const counts = cache.get<Counts>(CacheKeys.COUNTS);
  res.json(counts);
};
