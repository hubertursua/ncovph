import { DataSource } from 'apollo-datasource';
import DATE_FIRST_TESTING_RECORDED from '../../../consts/dateFirstTestingRecorded';
import DateValue from '../../../types/DateValue';
import TestingAggregate from '../../../types/TestingAggregate';
import TestingFacility from '../../../types/TestingFacility';
import dateRangeArray from '../../../utils/dateRangeArray';
import stripFacilityName from '../../../utils/stripFacilityName';
import testingAggregates from './TestingAggregates';

class DataDropTestingAggregates extends DataSource {
  list(): TestingAggregate[] {
    return testingAggregates;
  }

  getFacilities(): TestingFacility[] {
    return testingAggregates.reduce((acc: TestingFacility[], ta) => {
      const index = acc.findIndex((a) => (
        stripFacilityName(a.name) === stripFacilityName(ta.facility.name)
      ));

      if (index > -1) {
        return acc;
      }

      return [
        ...acc,
        ta.facility,
      ];
    }, [])
      .sort((a, b) => ((a.name < b.name) ? -1 : 1));
  }

  countUniqueInd(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.uniqueIndTested, 0);
  }

  countTestsConducted(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.testsConducted, 0);
  }

  countPositiveInd(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.positiveInd, 0);
  }

  countNegativeInd(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.negativeInd, 0);
  }

  countInvalidInd(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.invalidInd, 0);
  }

  countEquivocalInd(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.equivocalInd, 0);
  }

  countRemainingTests(): number {
    const latestReports = this.getLatestReports();
    return latestReports.reduce((acc: number, ta): number => acc + ta.totals.remainingTests, 0);
  }

  getDailyPositiveIndCumulative(): DateValue[] {
    return this.getDailyCumulative('positiveInd');
  }

  getDailyNegativeIndCumulative(): DateValue[] {
    return this.getDailyCumulative('negativeInd');
  }

  getDailyInvalidIndCumulative(): DateValue[] {
    return this.getDailyCumulative('invalidInd');
  }

  getDailyEquivocalIndCumulative(): DateValue[] {
    return this.getDailyCumulative('equivocalInd');
  }

  getDailyTestsConductedCumulative(): DateValue[] {
    return this.getDailyCumulative('testsConducted');
  }

  getDailyTestsRemainingCumulative(): DateValue[] {
    return this.getDailyCumulative('remainingTests');
  }

  getDailyPositiveIndDelta(): DateValue[] {
    return this.dailyDelta(this.getDailyPositiveIndCumulative());
  }

  getDailyNegativeIndDelta(): DateValue[] {
    return this.dailyDelta(this.getDailyNegativeIndCumulative());
  }

  getDailyInvalidIndDelta(): DateValue[] {
    return this.dailyDelta(this.getDailyInvalidIndCumulative());
  }

  getDailyEquivocalIndDelta(): DateValue[] {
    return this.dailyDelta(this.getDailyEquivocalIndCumulative());
  }

  getDailyTestsConductedDelta(): DateValue[] {
    return this.dailyDelta(this.getDailyTestsConductedCumulative());
  }

  getDailyTestsRemainingDelta(): DateValue[] {
    return this.dailyDelta(this.getDailyTestsRemainingCumulative());
  }

  private dailyDelta(cumulative: DateValue[]): DateValue[] {
    const deltas = cumulative.map((c, i) => {
      if (i === 0) {
        return c;
      }

      return {
        ...c,
        value: c.value - cumulative[i - 1].value,
      };
    });

    if (deltas.length > 0) {
      deltas[0].value = 0;
    }

    return deltas;
  }

  private getDailyCumulative(prop): DateValue[] {
    const perDayTotal: DateValue[] = dateRangeArray(
      DATE_FIRST_TESTING_RECORDED,
      this.getLastReportDate(),
    )
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    perDayTotal.forEach((delta, i) => {
      perDayTotal[i].value = testingAggregates.reduce((acc, ta) => {
        if (ta.date === delta.date) {
          return acc + ta.totals[prop];
        }

        return acc;
      }, 0);

      if (
        perDayTotal.length >= 2
        && perDayTotal[perDayTotal.length - 1].value === 0
      ) {
        perDayTotal[perDayTotal.length - 1].value = perDayTotal[perDayTotal.length - 2].value;
      }
    });

    return perDayTotal;
  }

  private getLatestReports(): TestingAggregate[] {
    return testingAggregates.reduce((acc: TestingAggregate[], ta) => {
      const index = acc.findIndex((a) => (
        stripFacilityName(a.facility.name) === stripFacilityName(ta.facility.name)
      ));

      if (index === -1) {
        return [
          ...acc,
          ta,
        ];
      }

      const current = acc[index];

      if (current.date > ta.date) {
        return acc;
      }

      const newAcc = [...acc];
      newAcc[index] = ta;
      return newAcc;
    }, []);
  }

  private getLastReportDate(): string {
    return testingAggregates.reduce((acc: string, ta) => {
      if (acc < ta.date) {
        return ta.date;
      }

      return acc;
    }, '');
  }
}

export default DataDropTestingAggregates;
