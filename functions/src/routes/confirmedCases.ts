import cache from "../cache";
import ConfirmedCasePatientLocal from "../types/ConfirmedCasePatientLocal";

export const path = "/confirmed-cases";

export const handler = async (req, res) => {
  const cases = cache.get<ConfirmedCasePatientLocal[]>("confirmed_cases");
  res.json(cases);
};
