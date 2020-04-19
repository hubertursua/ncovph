import express from 'express';
import apollo from './apollo';
import middlewares from './middlewares';

const app = express();
app.use(middlewares.cors.handler);
app.use(middlewares.rateLimit.handler);
apollo.applyMiddleware({ app, path: '/' });

export default app;
