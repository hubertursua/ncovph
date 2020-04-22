import TestingFacility from './TestingFacility';

interface TestingAggregate {
  date: string;
  facility: TestingFacility;
  dailyOutput: {
    positiveInd: number;
    uniqueIndTested: number;
    testsConducted: number;
  };
  totals: {
    uniqueIndTested: number;
    positiveInd: number;
    negativeInd: number;
    equivocalInd: number;
    invalidInd: number;
    testsConducted: number;
    remainingTests: number;
  };
  ratioUniqueInd: {
    positiveInd: number;
    negativeInd: number;
    equivocalInd: number;
    invalidInd: number;
  };
}

export default TestingAggregate;
