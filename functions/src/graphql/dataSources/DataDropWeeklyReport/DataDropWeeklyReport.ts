import { DataSource } from 'apollo-datasource';
import PPEReport from '../../../types/PPEReport';
import ppeReports from './PPEReports';

class DataDropWeeklyReport extends DataSource {
  getLatest(): PPEReport[] {
    const keyedReports = {};

    ppeReports.forEach((ppeReport): void => {
      if (keyedReports[ppeReport.healthFacility.code]) {
        const current: PPEReport = keyedReports[ppeReport.healthFacility.code];

        if (ppeReport.dateReported <= current.dateReported) {
          return;
        }
      }

      keyedReports[ppeReport.healthFacility.code] = ppeReport;
    });

    return Object.values(keyedReports);
  }
}

export default DataDropWeeklyReport;
