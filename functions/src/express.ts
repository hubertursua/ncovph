import bodyParser from 'body-parser';
import express from 'express';
import apollo from './apollo';
import middlewares from './middlewares';

const app = express();
app.use(middlewares.cors.handler);
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'development') {
  app.use(middlewares.rateLimit.handler);
}

app.use((req, _res, next) => {
  if (req.body && req.body.operationName === null) {
    // eslint-disable-next-line no-console
    console.log(
      'GraphQL query:',
      JSON.stringify(req.body.query, null, 2)
        .replace(/[\\n]/g, '')
        .replace(/\s+/g, ' '),
    );
  }

  next();
});

apollo.applyMiddleware({ app, path: '/' });

export default app;
