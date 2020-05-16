import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import HealthFacilityCapacityReport from '../../../types/HealthFacilityCapacityReport';
import toHealthFacilityCapacityReport from './toHealthFacilityCapacityReport';

const csvPath = path.resolve(__dirname, '../../../data/DailyReport.csv');

if (!fs.existsSync(csvPath)) {
  throw new Error(`File not found in ${csvPath}`);
}

const csvStr = fs.readFileSync(csvPath, 'utf8').trim();
const healthFacilityCapacityReports: HealthFacilityCapacityReport[] = Papa.parse(csvStr)
  .data
  .slice(1)
  .map((d: string[]): HealthFacilityCapacityReport => toHealthFacilityCapacityReport(d))
  .sort((a: HealthFacilityCapacityReport, b: HealthFacilityCapacityReport): number => {
    if (a.dateReported < b.dateReported) {
      return -1;
    }

    if (a.dateReported > b.dateReported) {
      return 1;
    }

    return 0;
  });

export default healthFacilityCapacityReports;
