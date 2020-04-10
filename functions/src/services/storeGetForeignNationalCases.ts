import * as functions from 'firebase-functions';
import getForeignNationalCases from 'ncovph-parser/src/etl/getForeignNationalCases';
import log from '../utils/log';
import storage from '../storage';
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
      const data = await getForeignNationalCases();
      await storage.upload(data, `${CacheKeys.FOREIGN_NATIONAL_CASES}.json`);
    } catch (error) {
      log.throwError(error);
    }

    return null;
  });
