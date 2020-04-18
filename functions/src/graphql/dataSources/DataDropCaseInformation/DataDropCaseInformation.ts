import { DataSource } from 'apollo-datasource';
import DATE_FIRST_CASE from '../../../consts/dateFirstCase';
import AgeGroup from '../../../types/AgeGroup';
import CaseInformation from '../../../types/CaseInformation';
import CountPerSex from '../../../types/CountPerSex';
import DateValue from '../../../types/DateValue';
import DistributionAgeGroupSex from '../../../types/DistributionAgeGroupSex';
import RemovalType from '../../../types/RemovalType';
import Sex from '../../../types/Sex';
import between from '../../../utils/between';
import dateRangeArray from '../../../utils/dateRangeArray';
import Cases from './Cases';

export interface ListProps {
  limit: number;
  offset: number;
}

class DataDropCaseInformation extends DataSource {
  list({ limit = 30, offset = 0 }: ListProps): CaseInformation[] {
    return Cases.slice(offset, offset + limit);
  }

  listAdmitted({ limit = 30, offset = 0 }: ListProps): CaseInformation[] {
    return Cases
      .filter((d) => (d.admitted && !d.removalType))
      .slice(offset, offset + limit);
  }

  listRecoveries({ limit = 30, offset = 0 }: ListProps): CaseInformation[] {
    return Cases
      .filter((d) => (d.removalType === RemovalType.RECOVERED))
      .slice(offset, offset + limit);
  }

  listDeaths({ limit = 30, offset = 0 }: ListProps): CaseInformation[] {
    return Cases
      .filter((d) => (d.removalType === RemovalType.DIED))
      .slice(offset, offset + limit);
  }

  get(caseNumber: string): CaseInformation | null {
    const match = Cases.find((d) => d.caseNumber === caseNumber);
    return (match) || null;
  }

  getDailyConfirmedDelta(): DateValue[] {
    const deltas = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);


    Cases.forEach((value) => {
      const matchIndex = deltas.findIndex((d) => (d.date === value.dateReportConfirmed));

      if (matchIndex === -1) {
        return;
      }

      deltas[matchIndex].value += 1;
    });


    return deltas;
  }

  getDailyRecoveriesDelta(): DateValue[] {
    const deltas = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);


    Cases.forEach((value) => {
      const matchIndex = deltas.findIndex((d) => (
        value.removalType === RemovalType.RECOVERED
        && d.date === value.dateReportRemoved
      ));

      if (matchIndex === -1) {
        return;
      }

      deltas[matchIndex].value += 1;
    });


    return deltas;
  }

  getDailyDeathsDelta(): DateValue[] {
    const deltas = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);


    Cases.forEach((value) => {
      const matchIndex = deltas.findIndex((d) => (
        value.removalType === RemovalType.DIED
        && d.date === value.dateReportRemoved
      ));

      if (matchIndex === -1) {
        return;
      }

      deltas[matchIndex].value += 1;
    });


    return deltas;
  }

  getDailyConfirmedCumulative(): DateValue[] {
    return this.dailyCumulative(this.getDailyConfirmedDelta());
  }

  getDailyRecoveriesCumulative(): DateValue[] {
    return this.dailyCumulative(this.getDailyRecoveriesDelta());
  }

  getDailyDeathsCumulative(): DateValue[] {
    return this.dailyCumulative(this.getDailyDeathsDelta());
  }

  private dailyCumulative(deltas: DateValue[]): DateValue[] {
    const cumulative = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    cumulative[0].value = deltas[0].value;

    for (let i = 1; i < cumulative.length; i += 1) {
      cumulative[i].value = cumulative[i - 1].value + deltas[i].value;
    }


    return cumulative;
  }

  count(): number {
    return Cases.length;
  }

  countAdmitted(): number {
    return this.list({ limit: this.count(), offset: 0 })
      .filter((d) => (d.admitted && !d.removalType))
      .length;
  }

  countRecoveries(): number {
    return this.list({ limit: this.count(), offset: 0 })
      .filter((d) => (d.removalType && d.removalType === RemovalType.RECOVERED))
      .length;
  }

  countDeaths(): number {
    return this.list({ limit: this.count(), offset: 0 })
      .filter((d) => (d.removalType && d.removalType === RemovalType.DIED))
      .length;
  }

  countPerSex(): CountPerSex {
    return Cases.reduce((acc: CountPerSex, currentValue: CaseInformation) => {
      if (currentValue.sex === Sex.FEMALE) {
        return {
          ...acc,
          female: acc.female + 1,
        };
      }

      if (currentValue.sex === Sex.MALE) {
        return {
          ...acc,
          male: acc.male + 1,
        };
      }

      return {
        ...acc,
        unknown: acc.unknown + 1,
      };
    }, ({ female: 0, male: 0, unknown: 0 } as CountPerSex));
  }

  distribAgeGroupSexConfirmedCases(): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(Cases);
  }

  distribAgeGroupSexAdmitted(): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      this.listAdmitted({
        limit: this.countAdmitted(),
        offset: 0,
      }),
    );
  }

  distribAgeGroupSexRecoveries(): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      this.listRecoveries({
        limit: this.countRecoveries(),
        offset: 0,
      }),
    );
  }

  distribAgeGroupSexDeaths(): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      this.listDeaths({
        limit: this.countDeaths(),
        offset: 0,
      }),
    );
  }

  private distribAgeGroupSex(list: CaseInformation[]): DistributionAgeGroupSex[] {
    const distribution = Object.values(AgeGroup)
      .map((ageGroup): DistributionAgeGroupSex => ({
        ageGroup,
        female: 0,
        male: 0,
        unknown: 0,
      }));

    list.forEach((value: CaseInformation) => {
      let distributionIndex = -1;

      if (between(value.age, 0, 4)) distributionIndex = 0;
      else if (between(value.age, 5, 9)) distributionIndex = 1;
      else if (between(value.age, 10, 14)) distributionIndex = 2;
      else if (between(value.age, 15, 19)) distributionIndex = 3;
      else if (between(value.age, 20, 24)) distributionIndex = 4;
      else if (between(value.age, 25, 29)) distributionIndex = 5;
      else if (between(value.age, 30, 34)) distributionIndex = 6;
      else if (between(value.age, 35, 39)) distributionIndex = 7;
      else if (between(value.age, 40, 44)) distributionIndex = 8;
      else if (between(value.age, 45, 49)) distributionIndex = 9;
      else if (between(value.age, 50, 54)) distributionIndex = 10;
      else if (between(value.age, 55, 59)) distributionIndex = 11;
      else if (between(value.age, 60, 64)) distributionIndex = 12;
      else if (between(value.age, 65, 69)) distributionIndex = 13;
      else if (between(value.age, 70, 74)) distributionIndex = 14;
      else if (between(value.age, 75, 79)) distributionIndex = 15;
      else distributionIndex = 16;

      if (value.sex === Sex.FEMALE) {
        distribution[distributionIndex].female += 1;
      }

      if (value.sex === Sex.MALE) {
        distribution[distributionIndex].male += 1;
      }

      if (value.sex === Sex.UNKNOWN) {
        distribution[distributionIndex].unknown += 1;
      }
    });

    return distribution;
  }
}

export default DataDropCaseInformation;
