
import * as functions from 'firebase-functions';
import moment from 'moment';
import log from '../utils/log';
import { getSlideFig } from '../etl/getCounts';
import storage from '../storage';

export default functions
  .region('us-central1')
  .runWith({
    memory: '128MB',
    timeoutSeconds: 60,
  })
  .pubsub
  .schedule('6 1 * * *')
  .timeZone('Asia/Manila')
  .onRun(async () => {
    try {
      const date = moment.utc().add(8, 'hours').subtract(1, 'day').format('YYYY-MM-DD');
      const data = await getSlideFig();
      await storage.upload(data, `archive/${date}/slide_fig.json`);
    } catch (error) {
      log.throwError(error);
    }
  });
