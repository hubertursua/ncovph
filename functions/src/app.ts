import { config } from "firebase-functions";
import express from "express";
import routes from "./routes";
import "./utils/cache"; // Pre-load cache

const app = express();
const basePath = (config().runtime && config().runtime.env === "production")
  ? "/api"
  : "/";

app.use(basePath, routes);

export default app;
