import storage from "../storage";
import log from "../utils/log";
import getAndCacheData from "./getAndCacheData";

export default async function buildCache({
  cache,
  func,
  cacheKey,
  ttl,
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
        cache.set(cacheKey, value, ttl);
      }
    }
  });

  try {
    await getAndCacheData(cacheDataOptions);
  } catch (error) {
    log.error(error);
  }
}
