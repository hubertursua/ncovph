import expressRateLimit from 'express-rate-limit';
import environment from '../environment';

// eslint-disable-next-line import/prefer-default-export
export const handler = expressRateLimit({
  windowMs: environment.rateLimit.windowMs,
  max: environment.rateLimit.max,
  message: { error: 'Too many requests. Slow down.' },
});
