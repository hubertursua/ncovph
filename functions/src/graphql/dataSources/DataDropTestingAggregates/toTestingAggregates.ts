import TestingAggregate from '../../../types/TestingAggregate';
import toDate, { INPUT_FORMAT_TESTING_AGGREGATES } from '../../../utils/toDate';
import toFacilityName from '../../../utils/toFacilityName';
import toNullableInt from '../../../utils/toNullableInt';
import toNullableString from '../../../utils/toNullableString';

export default (d: string[]): TestingAggregate => {
  const totalUniqueIndTested = toNullableInt(d[6]);
  const totalPositiveInd = toNullableInt(d[7]);
  const totalNegativeInd = toNullableInt(d[9]);
  const totalEquivocalInd = toNullableInt(d[11]);
  const totalInvalidInd = toNullableInt(d[13]);
  const totalTestsConducted = toNullableInt(d[15]);
  const totalRemainingTests = toNullableInt(d[16]);

  return {
    date: toDate(d[0], INPUT_FORMAT_TESTING_AGGREGATES),
    facility: {
      name: toFacilityName(d[1]),
      abbreviation: toNullableString(d[2]),
    },
    dailyOutput: {
      positiveInd: toNullableInt(d[3]),
      uniqueIndTested: toNullableInt(d[4]),
      testsConducted: toNullableInt(d[5]),
    },
    totals: {
      uniqueIndTested: totalUniqueIndTested,
      positiveInd: totalPositiveInd,
      negativeInd: totalNegativeInd,
      equivocalInd: totalEquivocalInd,
      invalidInd: totalInvalidInd,
      testsConducted: totalTestsConducted,
      remainingTests: totalRemainingTests,
    },
    ratioUniqueInd: {
      positiveInd: totalPositiveInd / totalUniqueIndTested,
      negativeInd: totalNegativeInd / totalUniqueIndTested,
      equivocalInd: totalEquivocalInd / totalUniqueIndTested,
      invalidInd: totalInvalidInd / totalUniqueIndTested,
    },
  };
};
