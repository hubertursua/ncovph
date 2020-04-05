import './firebase'; // Pre-initialize firebase-admin
import {
  api,
  healthChecker,
  storeGetCounts,
  storeGetForeignNationalCases,
  storeGetHopsitals,
  storeGetLocalCases,
  storeGetOFWCases,
  storeGetConfirmedTrend,
  storeGetPUIPerFacility,
  archiveConfirmed,
  archiveFNMasterlist,
  archiveHospLevel12018,
  archiveHospLevel22018,
  archiveHospLevel32018,
  archiveOFMasterlist,
  archivePHMasterlist,
  archiveSlideFig,
  archivePUIFacTracing,
} from './services';

module.exports = {
  api,
  healthChecker,
  storeGetCounts,
  storeGetForeignNationalCases,
  storeGetHopsitals,
  storeGetLocalCases,
  storeGetOFWCases,
  storeGetConfirmedTrend,
  storeGetPUIPerFacility,
  archiveConfirmed,
  archiveFNMasterlist,
  archiveHospLevel12018,
  archiveHospLevel22018,
  archiveHospLevel32018,
  archiveOFMasterlist,
  archivePHMasterlist,
  archiveSlideFig,
  archivePUIFacTracing,
};
