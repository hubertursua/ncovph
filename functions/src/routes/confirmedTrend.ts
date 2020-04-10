import ConfirmedTrend from 'ncovph-parser/dist/types/ConfirmedTrend';
import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';

export const path = '/trends/confirmed';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedTrend[]>(CacheKeys.CONFIRMED_TREND);
  res.json(cases);
};
