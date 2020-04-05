import * as functions from 'firebase-functions';
import log from '../utils/log';
import storage from '../storage';
import getPUIPerFacility from '../etl/getPUIPerFacility';
import CacheKeys from '../consts/CacheKeys';

export default functions
  .region('us-central1')
  .runWith({
    memory: '256MB',
    timeoutSeconds: 60,
  })
  .pubsub.schedule('every 1 hours')
  .onRun(async () => {
    try {
      const data = await getPUIPerFacility();
      await storage.upload(data, `${CacheKeys.PUI_PER_FACILITY}.json`);
    } catch (error) {
      log.throwError(error);
    }

    return null;
  });
