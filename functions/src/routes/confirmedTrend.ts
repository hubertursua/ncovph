import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';
import ConfirmedTrend from '../types/ConfirmedTrend';

export const path = '/trends/confirmed';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedTrend[]>(CacheKeys.CONFIRMED_TREND);
  res.json(cases);
};
