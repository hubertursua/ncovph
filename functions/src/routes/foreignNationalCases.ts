import ConfirmedCasePatientForeignNational from 'ncovph-parser/dist/types/ConfirmedCasePatientForeignNational';
import cache from '../cache';
import CacheKeys from '../consts/CacheKeys';

export const path = '/foreign-national-cases';

export const handler = async (req, res): Promise<void> => {
  const cases = cache.get<ConfirmedCasePatientForeignNational[]>(CacheKeys.FOREIGN_NATIONAL_CASES);
  res.json(cases);
};
