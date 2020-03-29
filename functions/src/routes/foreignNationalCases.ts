import cache from "../cache";
import ConfirmedCasePatientForeignNational from "../types/ConfirmedCasePatientForeignNational";

export const path = "/foreign-national-cases";

export const handler = async (req, res) => {
  const cases = cache.get<ConfirmedCasePatientForeignNational[]>("foreign_national_cases");
  res.json(cases);
};
