import storage from "../storage";
import log from "../utils/log";
import getAndCacheData from "./getAndCacheData";
import NodeCache from "node-cache";

export default async function buildCache<T>({
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
  const initialState: T[] = [];

  cache.set<T[]>(cacheKey, initialState);

  try {
    const previousGoodState = await storage.get(`${cacheKey}.json`) as T[];
    cache.set<T[]>(cacheKey, previousGoodState);
  } catch (error) {
    log.error(error);
  }

  const cacheDataOptions = {
    func,
    cache,
    cacheKey,
    ttl,
  };

  cache.on("expired", async (key, value) => {
    if (key === cacheKey) {
      try {
        await getAndCacheData(cacheDataOptions);
      } catch (error) {
        log.error(error);
        cache.set<T[]>(cacheKey, value, ttl);
      }
    }
  });

  try {
    getAndCacheData(cacheDataOptions);
  } catch (error) {
    log.error(error);
  }
}
