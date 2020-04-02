import NodeCache from "node-cache";
import buildCache from "./buildCache";
import getLocalCases from "../etl/getLocalCases";
import getOFWCases from "../etl/getOFWCases";
import getForeignNationalCases from "../etl/getForeignNationalCases";
import getCounts from "../etl/getCounts";
import ConfirmedCasePatientLocal from "../types/ConfirmedCasePatientLocal";
import ConfirmedCasePatientOFW from "../types/ConfirmedCasePatientOFW";
import ConfirmedCasePatientForeignNational from "../types/ConfirmedCasePatientForeignNational";
import Counts from "../types/Counts";

export const CacheKeys = {
  CONFIRMED_CASES: "confirmed_cases",
  OFW_CASES: "ofw_cases",
  FOREIGN_NATIONAL_CASES: "foreign_national_cases",
  COUNTS: "counts",
}

const cache = new NodeCache({
  deleteOnExpire: false,
});

(async () => {
  await buildCache<ConfirmedCasePatientLocal[]>({
    cache,
    func: getLocalCases,
    cacheKey: CacheKeys.CONFIRMED_CASES,
    ttl: 60 * 15,
    initialState: [],
  });

  await buildCache<ConfirmedCasePatientOFW[]>({
    cache,
    func: getOFWCases,
    cacheKey: CacheKeys.OFW_CASES,
    ttl: 60 * 15,
    initialState: [],
  });

  await buildCache<ConfirmedCasePatientForeignNational[]>({
    cache,
    func: getForeignNationalCases,
    cacheKey: CacheKeys.FOREIGN_NATIONAL_CASES,
    ttl: 60 * 15,
    initialState: [],
  });

  await buildCache<Counts>({
    cache,
    func: getCounts,
    cacheKey: CacheKeys.COUNTS,
    ttl: 60 * 15,
    initialState: {
      confirmed: 0,
      pui: 0,
      pum: 0,
      recovered: 0,
      deceased: 0,
      tests: 0,
    },
  });
})();

export default cache;
