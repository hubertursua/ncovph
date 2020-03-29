import cache from "../cache";
import ConfirmedCasePatientOFW from "../types/ConfirmedCasePatientOFW";

export const path = "/ofw-cases";

export const handler = async (req, res) => {
  const cases = cache.get<ConfirmedCasePatientOFW[]>("ofw_cases");
  res.json(cases);
};
