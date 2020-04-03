import expressRateLimit from 'express-rate-limit';

// eslint-disable-next-line import/prefer-default-export
export const handler = expressRateLimit({
  windowMs: 1000 * 60 * 3, // 3 minutes
  max: 18, // limit each IP to 6 requests per windowMs
});
