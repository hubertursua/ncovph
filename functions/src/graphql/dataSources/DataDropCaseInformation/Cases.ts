import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import CaseInformation from '../../../types/CaseInformation';
import toCaseInformation from './toCaseInformation';

const csvPath = path.resolve(__dirname, '../../../data/CaseInformation.csv');

if (!fs.existsSync(csvPath)) {
  throw new Error(`File not found in ${csvPath}`);
}

const csvStr = fs.readFileSync(csvPath, 'utf8').trim();
const cases: CaseInformation[] = Papa.parse(csvStr)
  .data
  .slice(1)
  .map((d: string[]): CaseInformation => toCaseInformation(d))
  .sort((a: CaseInformation, b: CaseInformation): number => {
    if (a.dateReportConfirmed < b.dateReportConfirmed) {
      return -1;
    }

    if (a.dateReportConfirmed > b.dateReportConfirmed) {
      return 1;
    }

    return 0;
  });

export default cases;
