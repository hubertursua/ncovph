import NodeCache from "node-cache";
import buildCache from "./buildCache";
import getLocalCases from "../etl/getLocalCases";
import getOFWCases from "../etl/getOFWCases";
import getForeignNationalCases from "../etl/getForeignNationalCases";
import ConfirmedCasePatientLocal from "../types/ConfirmedCasePatientLocal";
import ConfirmedCasePatientOFW from "../types/ConfirmedCasePatientOFW";
import ConfirmedCasePatientForeignNational from "../types/ConfirmedCasePatientForeignNational";

export const CacheKeys = {
  CONFIRMED_CASES: "confirmed_cases",
  OFW_CASES: "ofw_cases",
  FOREIGN_NATIONAL_CASES: "foreign_national_cases",
}

const cache = new NodeCache({
  deleteOnExpire: false,
});

(async () => {
  await buildCache<ConfirmedCasePatientLocal>({
    cache,
    func: getLocalCases,
    cacheKey: CacheKeys.CONFIRMED_CASES,
    ttl: 60 * 15
  });

  await buildCache<ConfirmedCasePatientOFW>({
    cache,
    func: getOFWCases,
    cacheKey: CacheKeys.OFW_CASES,
    ttl: 60 * 15
  });

  await buildCache<ConfirmedCasePatientForeignNational>({
    cache,
    func: getForeignNationalCases,
    cacheKey: CacheKeys.FOREIGN_NATIONAL_CASES,
    ttl: 60 * 15
  });
})();

export default cache;
