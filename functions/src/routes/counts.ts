import cache from "../cache";

export const path = "/counts";

export const handler = async (req, res) => {
  res.json({
    "/confirmed-cases": (cache.get("confirmed_cases") as object[]).length,
    "/ofw-cases": (cache.get("ofw_cases") as object[]).length,
    "/foreign-national-cases": (cache.get("foreign_national_cases") as object[]).length,
  });
};
