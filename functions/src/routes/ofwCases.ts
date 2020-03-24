import cache from "../cache";

export const path = "/ofw-cases";

export const handler = async (req, res) => {
  const cases = cache.get("ofw_cases");
  res.json(cases);
};
