import NodeCache from "node-cache";
import buildCache from "./buildCache";
import getLocalCases from "../etl/getLocalCases";
import getOFWCases from "../etl/getOFWCases";
import getHospitals from "../etl/getHospitals";
import getForeignNationalCases from "../etl/getForeignNationalCases";

const cache = new NodeCache({
  deleteOnExpire: false,
});

buildCache({
  cache,
  func: getLocalCases,
  cacheKey: "confirmed_cases",
  ttl: 60 * 15,
});

buildCache({
  cache,
  func: getOFWCases,
  cacheKey: "ofw_cases",
  ttl: 60 * 15,
});

buildCache({
  cache,
  func: getForeignNationalCases,
  cacheKey: "foreign_national_cases",
  ttl: 60 * 15
});

buildCache({
  cache,
  func: getHospitals,
  cacheKey: "hospitals",
  ttl: 60 * 15,
});

export default cache;
