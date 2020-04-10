import { config } from 'firebase-functions';
import express from 'express';
import routes from './routes';
import './cache'; // Pre-load cache

const app = express();
const basePath = (config().runtime && config().runtime.env === 'production')
  ? '/api'
  : '/';

app.disable('x-powered-by');
app.use(basePath, routes);

export default app;
