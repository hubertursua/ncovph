import cache from "../utils/cache";

export const path = "/confirmed-cases";

export const handler = async (req, res) => {
  const cases = cache.get("confirmed_cases");
  res.json(cases);
};
