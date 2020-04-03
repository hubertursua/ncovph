import cache, { CacheKeys } from '../cache';
import Hospitals from '../consts/Hospitals';

export const path = '/cache-counts';

export const handler = async (req, res): Promise<void> => {
  res.json({
    'confirmed-cases': (cache.get(CacheKeys.CONFIRMED_CASES) as object[]).length,
    'ofw-cases': (cache.get(CacheKeys.OFW_CASES) as object[]).length,
    'foreign-national-cases': (cache.get(CacheKeys.FOREIGN_NATIONAL_CASES) as object[]).length,
    hospitals: Hospitals.length,
  });
};
