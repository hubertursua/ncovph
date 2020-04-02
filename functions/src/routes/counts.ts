import cache, { CacheKeys } from "../cache";
import Hospitals from "../consts/Hospitals";

export const path = "/counts";

export const handler = async (req, res) => {
  res.json({
    "/confirmed-cases": (cache.get(CacheKeys.CONFIRMED_CASES) as object[]).length,
    "/ofw-cases": (cache.get(CacheKeys.OFW_CASES) as object[]).length,
    "/foreign-national-cases": (cache.get(CacheKeys.FOREIGN_NATIONAL_CASES) as object[]).length,
    "/hospitals": Hospitals.length,
  });
};
