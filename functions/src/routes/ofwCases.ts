import ConfirmedCasePatientOFW from 'ncovph-parser/src/types/ConfirmedCasePatientOFW';
import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';

export const path = '/ofw-cases';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedCasePatientOFW[]>(CacheKeys.OFW_CASES);
  res.json(cases);
};
