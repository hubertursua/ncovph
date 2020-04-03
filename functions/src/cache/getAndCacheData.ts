import NodeCache from 'node-cache';
import storage from '../storage';
import log from '../utils/log';

interface GetAndCacheDataProps {
  func: Function;
  cache: NodeCache;
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
    .then(async (data) => {
      await storage.upload(data, `${cacheKey}.json`);

      if (Array.isArray(data)) {
        // eslint-disable-next-line no-console
        console.log(`Uploaded data for ${cacheKey} (${data.length} items)`);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Uploaded data for ${cacheKey} (${Object.keys(data).length} properties)`);
      }
      cache.set(cacheKey, data, ttl);
    })
    .catch((err: Error) => {
      log.throwError(err);
    });
}
