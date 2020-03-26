import storage from "../storage";

interface GetAndCacheDataProps {
  func: Function;
  cache;
  cacheKey: string;
  ttl: number;
}

export default function getAndCacheData({
  func,
  cache,
  cacheKey,
  ttl,
}: GetAndCacheDataProps): Promise<void> {
  return func()
    .then(async (cases) => {
      await storage.upload(cases, `${cacheKey}.json`);
      cache.set(cacheKey, cases, ttl);
    })
    .catch((err) => {
      throw err;
    });
}
