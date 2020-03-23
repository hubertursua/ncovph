import * as Sentry from "@sentry/node";
import { config } from "firebase-functions";

const options = {
  dsn: config().sentry.dsn,
};

Sentry.init(options);
