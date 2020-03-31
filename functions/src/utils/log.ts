import { config } from "firebase-functions";

class Log {
  private sentry;

  constructor() {
    if (process.env.FIREBASE_CONFIG) {
      this.initSentry();
    }
  }

  initSentry(): void {
    const Sentry = require("@sentry/node");
    const options = {
      dsn: config().sentry.dsn
    };

    Sentry.init(options);
    this.sentry = Sentry;
  }

  message(text: string): void {
    if (this.sentry) {
      this.sentry.captureMessage(text);
    } else {
      console.log(text);
    }
  }

  error(error: Error): void {
    if (this.sentry) {
      this.sentry.captureException(error);
    } else {
      console.error(error);
    }
  }

  throwError(error: Error): never {
    if (this.sentry) {
      this.sentry.captureException(error);
    } else {
      console.error(error);
    }

    throw error;
  }
}

export default new Log();
