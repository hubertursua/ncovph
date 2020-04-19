import expressRateLimit from 'express-rate-limit';

// eslint-disable-next-line import/prefer-default-export
export const handler = expressRateLimit({
  windowMs: 1000 * 60 * 1, // 1 minutes
  max: 20, // limit each IP to 20 requests per windowMs
  message: { error: 'Too many requests. Slow down.' },
});
