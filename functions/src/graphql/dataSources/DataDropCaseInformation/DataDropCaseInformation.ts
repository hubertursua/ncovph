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
  region?: string;
  province?: string;
  city?: string;
  limit: number;
  offset: number;
}

export interface CountProps {
  region?: string;
  province?: string;
  city?: string;
}

export interface PerDayProps {
  region?: string;
  province?: string;
  city?: string;
}

export interface CumulativeProps {
  region?: string;
  province?: string;
  city?: string;
}

export interface DistributionProps {
  region?: string;
  province?: string;
  city?: string;
}

export interface RunningAverageProps {
  region?: string;
  province?: string;
  city?: string;
}

const DEFAULT_LIMIT = 30;

const filterByResidence = (
  region: string,
  province: string,
  city: string,
) => (d: CaseInformation): boolean => {
  if (!region) {
    return true;
  }

  let match = d.residence.region === region;

  if (province) {
    match = match && (d.residence.province === province);

    if (city) {
      match = match && (d.residence.city === city);
    }
  }

  return match;
};

class DataDropCaseInformation extends DataSource {
  list({
    region = null,
    province = null,
    city = null,
    limit = DEFAULT_LIMIT,
    offset = 0,
  }: ListProps): CaseInformation[] {
    return Cases
      .filter(filterByResidence(region, province, city))
      .slice(offset, offset + limit);
  }

  listAdmitted({
    region = null,
    province = null,
    city = null,
    limit = DEFAULT_LIMIT,
    offset = 0,
  }: ListProps): CaseInformation[] {
    return Cases
      .filter((d) => (d.admitted && !d.removalType))
      .filter(filterByResidence(region, province, city))
      .slice(offset, offset + limit);
  }

  listRecoveries({
    region = null,
    province = null,
    city = null,
    limit = DEFAULT_LIMIT,
    offset = 0,
  }: ListProps): CaseInformation[] {
    return Cases
      .filter((d) => (d.removalType === RemovalType.RECOVERED))
      .filter(filterByResidence(region, province, city))
      .slice(offset, offset + limit);
  }

  listDeaths({
    region = null,
    province = null,
    city = null,
    limit = DEFAULT_LIMIT,
    offset = 0,
  }: ListProps): CaseInformation[] {
    return Cases
      .filter((d) => (d.removalType === RemovalType.DIED))
      .filter(filterByResidence(region, province, city))
      .slice(offset, offset + limit);
  }

  get(caseNumber: string): CaseInformation | null {
    const match = Cases.find((d) => d.caseNumber === caseNumber);
    return (match) || null;
  }

  getDailyConfirmedDelta({
    region = null,
    province = null,
    city = null,
  }: PerDayProps): DateValue[] {
    const deltas = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    Cases.filter(filterByResidence(region, province, city)).forEach((value) => {
      const matchIndex = deltas.findIndex((d) => (d.date === value.dateReportConfirmed));

      if (matchIndex === -1) {
        return;
      }

      deltas[matchIndex].value += 1;
    });

    return deltas;
  }

  getDailyRecoveriesDelta({
    region = null,
    province = null,
    city = null,
  }: PerDayProps): DateValue[] {
    const deltas = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    Cases.filter(filterByResidence(region, province, city)).forEach((value) => {
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

  getDailyDeathsDelta({
    region = null,
    province = null,
    city = null,
  }: PerDayProps): DateValue[] {
    const deltas = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    Cases.filter(filterByResidence(region, province, city)).forEach((value) => {
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

  getDailyConfirmedCumulative({
    region = null,
    province = null,
    city = null,
  }: CumulativeProps): DateValue[] {
    return this.dailyCumulative(this.getDailyConfirmedDelta({
      region,
      province,
      city,
    }));
  }

  getDailyRecoveriesCumulative({
    region = null,
    province = null,
    city = null,
  }: CumulativeProps): DateValue[] {
    return this.dailyCumulative(this.getDailyRecoveriesDelta({
      region,
      province,
      city,
    }));
  }

  getDailyDeathsCumulative({
    region = null,
    province = null,
    city = null,
  }: CumulativeProps): DateValue[] {
    return this.dailyCumulative(this.getDailyDeathsDelta({
      region,
      province,
      city,
    }));
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

  count({
    region = null,
    province = null,
    city = null,
  }: CountProps): number {
    return Cases.filter(filterByResidence(region, province, city)).length;
  }

  countAdmitted({
    region = null,
    province = null,
    city = null,
  }: CountProps): number {
    return this.listAdmitted({
      region,
      province,
      city,
      limit: this.count({
        region,
        province,
        city,
      }),
      offset: 0,
    })
      .length;
  }

  countRecoveries({
    region = null,
    province = null,
    city = null,
  }: CountProps): number {
    return this.listRecoveries({
      region,
      province,
      city,
      limit: this.count({
        region,
        province,
        city,
      }),
      offset: 0,
    })
      .length;
  }

  countDeaths({
    region = null,
    province = null,
    city = null,
  }: CountProps): number {
    return this.listDeaths({
      region,
      province,
      city,
      limit: this.count({
        region,
        province,
        city,
      }),
      offset: 0,
    })
      .length;
  }

  countPerSex({
    region = null,
    province = null,
    city = null,
  }: CountProps): CountPerSex {
    return Cases
      .filter(filterByResidence(region, province, city))
      .reduce((acc: CountPerSex, currentValue: CaseInformation) => {
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

  distribAgeGroupSexConfirmedCases({
    region = null,
    province = null,
    city = null,
  }: DistributionProps): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      Cases.filter(
        filterByResidence(
          region,
          province,
          city,
        ),
      ),
    );
  }

  distribAgeGroupSexAdmitted({
    region = null,
    province = null,
    city = null,
  }: DistributionProps): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      this.listAdmitted({
        region,
        province,
        city,
        limit: this.countAdmitted({
          region,
          province,
          city,
        }),
        offset: 0,
      }),
    );
  }

  distribAgeGroupSexRecoveries({
    region = null,
    province = null,
    city = null,
  }: DistributionProps): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      this.listRecoveries({
        region,
        province,
        city,
        limit: this.countRecoveries({
          region,
          province,
          city,
        }),
        offset: 0,
      }),
    );
  }

  distribAgeGroupSexDeaths({
    region = null,
    province = null,
    city = null,
  }: DistributionProps): DistributionAgeGroupSex[] {
    return this.distribAgeGroupSex(
      this.listDeaths({
        region,
        province,
        city,
        limit: this.countDeaths({
          region,
          province,
          city,
        }),
        offset: 0,
      }),
    );
  }

  getRunningAveConfirmedCases({
    region = null,
    province = null,
    city = null,
  }: RunningAverageProps): DateValue[] {
    const deltas: DateValue[] = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    const dailyConfirmedDelta = this.getDailyConfirmedDelta({ region, province, city });

    for (let i = 4; i < dailyConfirmedDelta.length; i += 1) {
      const runningAverage = (
        dailyConfirmedDelta[i].value
        + dailyConfirmedDelta[i - 1].value
        + dailyConfirmedDelta[i - 2].value
        + dailyConfirmedDelta[i - 3].value
        + dailyConfirmedDelta[i - 4].value
      ) / 5;

      deltas[i].value = runningAverage;
    }

    return deltas.slice(4);
  }

  getRunningAveRecoveries({
    region = null,
    province = null,
    city = null,
  }: RunningAverageProps): DateValue[] {
    const deltas: DateValue[] = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    const dailyRecoveriesDelta = this.getDailyRecoveriesDelta({ region, province, city });

    for (let i = 4; i < dailyRecoveriesDelta.length; i += 1) {
      const runningAverage = (
        dailyRecoveriesDelta[i].value
        + dailyRecoveriesDelta[i - 1].value
        + dailyRecoveriesDelta[i - 2].value
        + dailyRecoveriesDelta[i - 3].value
        + dailyRecoveriesDelta[i - 4].value
      ) / 5;

      deltas[i].value = runningAverage;
    }

    return deltas.slice(4);
  }

  getRunningAveDeaths({
    region = null,
    province = null,
    city = null,
  }: RunningAverageProps): DateValue[] {
    const deltas: DateValue[] = dateRangeArray(DATE_FIRST_CASE)
      .reduce((out, date) => [
        ...out,
        {
          date,
          value: 0,
        },
      ], []);

    const dailyConfirmedDelta = this.getDailyDeathsDelta({ region, province, city });

    for (let i = 4; i < dailyConfirmedDelta.length; i += 1) {
      const runningAverage = (
        dailyConfirmedDelta[i].value
        + dailyConfirmedDelta[i - 1].value
        + dailyConfirmedDelta[i - 2].value
        + dailyConfirmedDelta[i - 3].value
        + dailyConfirmedDelta[i - 4].value
      ) / 5;

      deltas[i].value = runningAverage;
    }

    return deltas.slice(4);
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
