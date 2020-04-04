
import * as functions from 'firebase-functions';
import moment from 'moment';
import log from '../utils/log';
import { getPHMasterlist } from '../etl/getLocalCases';
import storage from '../storage';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub
  .schedule('5 1 * * *')
  .timeZone('Asia/Manila')
  .onRun(async () => {
    try {
      const date = moment.utc().add(8, 'hours').format('YYYY-MM-DD');
      const data = await getPHMasterlist();
      await storage.upload(data, `archive/${date}/PH_masterlist.json`);
    } catch (error) {
      log.throwError(error);
    }
  });
