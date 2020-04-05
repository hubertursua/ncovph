import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';
import PUIPerFacility from '../types/PUIPerFacility';

export const path = '/pui/per-facility';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<PUIPerFacility[]>(CacheKeys.PUI_PER_FACILITY);
  res.json(cases);
};
