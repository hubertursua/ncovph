import "./firebase"; // Pre-initialize firebase-admin
import {
  api,
  healthChecker,
  storeGetCounts,
} from "./services";

module.exports = {
  api,
  healthChecker,
  storeGetCounts,
};
