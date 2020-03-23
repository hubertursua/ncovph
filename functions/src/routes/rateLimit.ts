import expressRateLimit from "express-rate-limit";

export const handler = expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
