import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import TestingAggregate from '../../../types/TestingAggregate';
import toTestingAggregates from './toTestingAggregates';

const csvPath = path.resolve(__dirname, '../../../data/TestingAggregates.csv');

if (!fs.existsSync(csvPath)) {
  throw new Error(`File not found in ${csvPath}`);
}

const csvStr = fs.readFileSync(csvPath, 'utf8').trim();
const tests: TestingAggregate[] = Papa.parse(csvStr)
  .data
  .slice(1)
  .map((d: string[]): TestingAggregate => toTestingAggregates(d))
  .sort((a: TestingAggregate, b: TestingAggregate): number => {
    if (a.date < b.date) {
      return -1;
    }

    if (a.date > b.date) {
      return 1;
    }

    return 0;
  });

export default tests;
