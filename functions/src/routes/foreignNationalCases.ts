import cache, { CacheKeys } from "../cache";
import ConfirmedCasePatientForeignNational from "../types/ConfirmedCasePatientForeignNational";

export const path = "/foreign-national-cases";

export const handler = async (req, res) => {
  const cases = cache.get<ConfirmedCasePatientForeignNational[]>(CacheKeys.FOREIGN_NATIONAL_CASES);
  res.json(cases);
};
