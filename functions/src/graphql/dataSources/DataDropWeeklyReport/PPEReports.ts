import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import PPEReport from '../../../types/PPEReport';
import toPPEReport from './toPPEReport';

const csvPath = path.resolve(__dirname, '../../../data/WeeklyReport.csv');

if (!fs.existsSync(csvPath)) {
  throw new Error(`File not found in ${csvPath}`);
}

const csvStr = fs.readFileSync(csvPath, 'utf8').trim();
const ppeReports: PPEReport[] = Papa.parse(csvStr)
  .data
  .slice(1)
  .map((d: string[]): PPEReport => toPPEReport(d))
  .sort((a: PPEReport, b: PPEReport): number => {
    if (a.dateReported < b.dateReported) {
      return -1;
    }

    if (a.dateReported > b.dateReported) {
      return 1;
    }

    return 0;
  });

export default ppeReports;
