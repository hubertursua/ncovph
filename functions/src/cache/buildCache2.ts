import storage from "../storage";
import log from "../utils/log";
import NodeCache from "node-cache";

export default async function buildCache2<T>({
  cache,
  cacheKey,
  ttl,
  initialState,
}: {
  cache: NodeCache;
  cacheKey: string;
  ttl: number;
  initialState: T;
}) {
  cache.set<T>(cacheKey, initialState);

  try {
    const previousGoodState = await storage.get(`${cacheKey}.json`) as unknown as T;
    cache.set<T>(cacheKey, previousGoodState);
  } catch (error) {
    log.error(error);
  }

  cache.on("expired", async (key, value) => {
    if (key === cacheKey) {
      try {
        const state = await storage.get(`${cacheKey}.json`) as unknown as T;
        cache.set<T>(cacheKey, state);
      } catch (error) {
        log.error(error);
        cache.set<T>(cacheKey, value, ttl);
      }
    }
  });

  try {
    const state = await storage.get(`${cacheKey}.json`) as unknown as T;
    cache.set<T>(cacheKey, state);
  } catch (error) {
    log.error(error);
  }
}
