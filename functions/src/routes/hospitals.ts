import cache from "../cache";

export const path = "/hospitals";

export const handler = async (req, res) => {
  const cases = cache.get("hospitals");
  res.json(cases);
};
