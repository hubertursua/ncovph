import * as admin from 'firebase-admin';
import { config } from 'firebase-functions';

if (config().runtime && config().runtime.env === 'production') {
  admin.initializeApp();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const serviceAccount = require('../../serviceAccountKey.json');
  const initConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ncovidtracker-api.firebaseio.com',
  };
  admin.initializeApp(initConfig);
}

export default admin;
