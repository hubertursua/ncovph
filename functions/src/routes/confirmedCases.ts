import getLocalCases from "../services/getLocalCases";

export const path = "/confirmed-cases";

export const handler = async (req, res) => {
  const cases = await getLocalCases();
  res.json(cases);
};
