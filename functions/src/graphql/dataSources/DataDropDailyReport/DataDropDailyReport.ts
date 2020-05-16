import { DataSource } from 'apollo-datasource';
import HealthFacilityCapacityReport from '../../../types/HealthFacilityCapacityReport';
import healthFacilityCapacityReports from './HealthFacilityCapacityReports';

class DataDropDailyReport extends DataSource {
  getLatest(): HealthFacilityCapacityReport[] {
    const keyedReports = {};
    healthFacilityCapacityReports.forEach((healthFacilityCapacityReport): void => {
      if (keyedReports[healthFacilityCapacityReport.healthFacility.code]) {
        // eslint-disable-next-line max-len
        const current: HealthFacilityCapacityReport = keyedReports[healthFacilityCapacityReport.healthFacility.code];

        if (healthFacilityCapacityReport.dateReported <= current.dateReported) {
          return;
        }
      }

      keyedReports[healthFacilityCapacityReport.healthFacility.code] = healthFacilityCapacityReport;
    });

    return Object.values(keyedReports);
  }
}

export default DataDropDailyReport;
