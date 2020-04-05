import * as functions from 'firebase-functions';
import log from '../utils/log';
import storage from '../storage';
import getOFWCases from '../etl/getOFWCases';
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
      const data = await getOFWCases();
      await storage.upload(data, `${CacheKeys.OFW_CASES}.json`);
    } catch (error) {
      log.throwError(error);
    }

    return null;
  });
