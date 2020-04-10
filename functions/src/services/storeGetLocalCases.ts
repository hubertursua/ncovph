import * as functions from 'firebase-functions';
import getLocalCases from 'ncovph-parser/dist/etl/getLocalCases';
import log from '../utils/log';
import storage from '../storage';
import CacheKeys from '../consts/CacheKeys';

export default functions
  .region('us-central1')
  .runWith({
    memory: '256MB',
    timeoutSeconds: 60,
  })
  .pubsub.schedule('every 15 minutes')
  .onRun(async () => {
    try {
      const data = await getLocalCases();
      await storage.upload(data, `${CacheKeys.CONFIRMED_CASES}.json`);
    } catch (error) {
      log.throwError(error);
    }

    return null;
  });
