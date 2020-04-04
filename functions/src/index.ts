import './firebase'; // Pre-initialize firebase-admin
import {
  api,
  healthChecker,
  storeGetCounts,
  storeGetForeignNationalCases,
  storeGetHopsitals,
  storeGetLocalCases,
  storeGetOFWCases,
} from './services';

module.exports = {
  api,
  healthChecker,
  storeGetCounts,
  storeGetForeignNationalCases,
  storeGetHopsitals,
  storeGetLocalCases,
  storeGetOFWCases,
};
