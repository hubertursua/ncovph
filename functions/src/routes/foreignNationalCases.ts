import cache from "../cache";

export const path = "/foreign-national-cases";

export const handler = async (req, res) => {
  const cases = cache.get("foreign_national_cases");
  res.json(cases);
};
