import cache, { CacheKeys } from '../cache';
import ConfirmedCasePatientLocal from '../types/ConfirmedCasePatientLocal';

export const path = '/confirmed-cases';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedCasePatientLocal[]>(CacheKeys.CONFIRMED_CASES);
  res.json(cases);
};
