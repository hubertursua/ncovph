import NodeCache from "node-cache";
import buildCache from "./buildCache";
import getLocalCases from "../etl/getLocalCases";
import getOFWCases from "../etl/getOFWCases";
import getHospitals from "../etl/getHospitals";

const cache = new NodeCache({
  deleteOnExpire: false,
});

buildCache({
  cache,
  func: getLocalCases,
  cacheKey: "confirmed_cases",
  ttl: 60 * 5,
});

buildCache({
  cache,
  func: getOFWCases,
  cacheKey: "ofw_cases",
  ttl: 60 * 5,
});

buildCache({
  cache,
  func: getHospitals,
  cacheKey: "hospitals",
  ttl: 60 * 5,
});

export default cache;
