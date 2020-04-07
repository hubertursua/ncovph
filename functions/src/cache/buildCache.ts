import NodeCache from 'node-cache';
import storage from '../storage';
import log from '../utils/log';

export default async function buildCache<T>({
  cache,
  cacheKey,
  ttl,
  initialState,
  delay = 0,
}: {
  cache: NodeCache;
  cacheKey: string;
  ttl: number;
  initialState: T;
  delay?: number;
}): Promise<void> {
  cache.set<T>(cacheKey, initialState, ttl);

  try {
    const previousGoodState = await storage.get(`${cacheKey}.json`) as unknown as T;
    cache.set<T>(cacheKey, previousGoodState, ttl);
    await new Promise((resolve) => setTimeout(() => resolve(), delay * 1000));
  } catch (error) {
    log.error(error);
  }

  cache.on('expired', async (key, value) => {
    if (key === cacheKey) {
      try {
        const state = await storage.get(`${cacheKey}.json`) as unknown as T;
        cache.set<T>(cacheKey, state, ttl);
      } catch (error) {
        log.error(error);
        cache.set<T>(cacheKey, value, ttl);
      }
    }
  });
}
