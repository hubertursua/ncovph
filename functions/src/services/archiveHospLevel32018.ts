
import * as functions from 'firebase-functions';
import moment from 'moment';
import { getHospitalLevel3 } from 'ncovph-parser/dist/etl/getHospitals';
import log from '../utils/log';
import storage from '../storage';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub
  .schedule('3 1 * * *')
  .timeZone('Asia/Manila')
  .onRun(async () => {
    try {
      const date = moment.utc().add(8, 'hours').subtract(1, 'day').format('YYYY-MM-DD');
      const data = await getHospitalLevel3();
      await storage.upload(data, `archive/${date}/hosplevel32018.json`);
    } catch (error) {
      log.throwError(error);
    }
  });
