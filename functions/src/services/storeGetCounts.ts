import * as functions from 'firebase-functions';
import log from '../utils/log';
import storage from '../storage';
import getCounts from '../etl/getCounts';
import { CacheKeys } from '../cache';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub.schedule('every 15 minutes')
  .onRun(async () => {
    try {
      const counts = await getCounts();
      await storage.upload(counts, `${CacheKeys.COUNTS}.json`);
    } catch (error) {
      log.error(error);
    }

    return null;
  });
