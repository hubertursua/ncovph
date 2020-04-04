import cache from '../cache';
import ConfirmedCasePatientForeignNational from '../types/ConfirmedCasePatientForeignNational';
import CacheKeys from '../consts/CacheKeys';

export const path = '/foreign-national-cases';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedCasePatientForeignNational[]>(CacheKeys.FOREIGN_NATIONAL_CASES);
  res.json(cases);
};
