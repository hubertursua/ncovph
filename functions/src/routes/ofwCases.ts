import cache, { CacheKeys } from "../cache";
import ConfirmedCasePatientOFW from "../types/ConfirmedCasePatientOFW";

export const path = "/ofw-cases";

export const handler = async (req, res) => {
  const cases = cache.get<ConfirmedCasePatientOFW[]>(CacheKeys.OFW_CASES);
  res.json(cases);
};
