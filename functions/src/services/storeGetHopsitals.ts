import * as functions from 'firebase-functions';
import log from '../utils/log';
import storage from '../storage';
import getHospitals from '../etl/getHospitals';
import CacheKeys from '../consts/CacheKeys';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub.schedule('every 12 hours')
  .onRun(async () => {
    try {
      const data = await getHospitals();
      await storage.upload(data, `${CacheKeys.HOSPITALS}.json`);
    } catch (error) {
      log.throwError(error);
    }

    return null;
  });
