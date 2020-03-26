import NodeCache from "node-cache";
import buildCache from "./buildCache";
import getLocalCases from "../services/getLocalCases";
import getOFWCases from "../services/getOFWCases";

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

export default cache;
