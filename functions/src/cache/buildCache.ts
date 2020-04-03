import NodeCache from 'node-cache';
import storage from '../storage';
import log from '../utils/log';
import getAndCacheData from './getAndCacheData';

export default async function buildCache<T>({
  cache,
  func,
  cacheKey,
  ttl,
  initialState,
}: {
  cache: NodeCache;
  func: Function;
  cacheKey: string;
  ttl: number;
  initialState: T;
}): Promise<void> {
  cache.set<T>(cacheKey, initialState);

  try {
    const previousGoodState = await storage.get(`${cacheKey}.json`) as unknown as T;
    cache.set<T>(cacheKey, previousGoodState);
  } catch (error) {
    log.error(error);
  }

  const cacheDataOptions = {
    func,
    cache,
    cacheKey,
    ttl,
  };

  cache.on('expired', async (key, value) => {
    if (key === cacheKey) {
      try {
        await getAndCacheData(cacheDataOptions);
      } catch (error) {
        log.error(error);
        cache.set<T>(cacheKey, value, ttl);
      }
    }
  });

  try {
    getAndCacheData(cacheDataOptions);
  } catch (error) {
    log.error(error);
  }
}
