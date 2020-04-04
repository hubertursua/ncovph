import * as functions from 'firebase-functions';
import log from '../utils/log';
import storage from '../storage';
import getForeignNationalCases from '../etl/getForeignNationalCases';
import CacheKeys from '../consts/CacheKeys';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub.schedule('every 1 hours')
  .onRun(async () => {
    try {
      const counts = await getForeignNationalCases();
      await storage.upload(counts, `${CacheKeys.FOREIGN_NATIONAL_CASES}.json`);
    } catch (error) {
      log.throwError(error);
    }

    return null;
  });
