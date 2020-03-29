import storage from "../storage";
import log from "../utils/log";
import getAndCacheData from "./getAndCacheData";
import NodeCache from "node-cache";

export default async function buildCache({
  cache,
  func,
  cacheKey,
  ttl,
}: {
  cache: NodeCache;
  func: Function;
  cacheKey: string;
  ttl: number;
}) {
  let initialState: object = [];

  try {
    initialState = await storage.get(`${cacheKey}.json`);
  } catch (error) {
    log.error(error);
  }

  const cacheDataOptions = {
    func,
    cache,
    cacheKey,
    ttl,
  };

  cache.set(cacheKey, initialState);

  cache.on("expired", async (key, value) => {
    if (key === cacheKey) {
      try {
        await getAndCacheData(cacheDataOptions);
      } catch (error) {
        log.error(error);
        cache.set(cacheKey, value, ttl);
      }
    }
  });

  try {
    getAndCacheData(cacheDataOptions);
  } catch (error) {
    log.error(error);
  }
}
