import { config } from "firebase-functions";
import * as admin from "firebase-admin";

if (config().runtime && config().runtime.env === 'production') {
  admin.initializeApp();
} else {
  const serviceAccount = require("../../serviceAccountKey.json");
  const config = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ncovidtracker-api.firebaseio.com"
  };
  admin.initializeApp(config);
}

export default admin;
