
import * as functions from 'firebase-functions';
import moment from 'moment';
import { getHospitalLevel2 } from 'ncovph-parser/dist/etl/getHospitals';
import log from '../utils/log';
import storage from '../storage';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub
  .schedule('2 1 * * *')
  .timeZone('Asia/Manila')
  .onRun(async () => {
    try {
      const date = moment.utc().add(8, 'hours').subtract(1, 'day').format('YYYY-MM-DD');
      const data = await getHospitalLevel2();
      await storage.upload(data, `archive/${date}/hosplevel22018.json`);
    } catch (error) {
      log.throwError(error);
    }
  });
