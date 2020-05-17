import CaseInformation from '../../../types/CaseInformation';
import CountPerSex from '../../../types/CountPerSex';
import DateValue from '../../../types/DateValue';
import DistributionAgeGroupSex from '../../../types/DistributionAgeGroupSex';
import { DataSources } from '../../dataSources';

export interface Context {
  dataSources: DataSources;
}

export interface CountArgs {
  region?: string;
  province?: string;
  city?: string;
}

export interface PerDayArgs {
  region?: string;
  province?: string;
  city?: string;
}

export interface CumulativeArgs {
  region?: string;
  province?: string;
  city?: string;
}

export interface DistributionArgs {
  region?: string;
  province?: string;
  city?: string;
}

export interface CaseListArgs {
  region?: string;
  province?: string;
  city?: string;
  limit: number;
  offset: number;
}

export interface ConfirmedCaseArgs {
  caseNumber: string;
}

export interface RunningAverageArgs {
  region?: string;
  province?: string;
  city?: string;
}

export default {
  confirmedCases: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
      limit = 30,
      offset = 0,
    }: CaseListArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;
    let validLimit = limit;
    let validOffset = offset;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    if (limit < 1 || limit > 500) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.list({
      region: validRegion,
      province: validProvince,
      city: validCity,
      limit: validLimit,
      offset: validOffset,
    });
  },

  admitted: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
      limit = 30,
      offset = 0,
    }: CaseListArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;
    let validLimit = limit;
    let validOffset = offset;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    if (limit < 1 || limit > 500) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.listAdmitted({
      region: validRegion,
      province: validProvince,
      city: validCity,
      limit: validLimit,
      offset: validOffset,
    });
  },

  recoveries: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
      limit = 30,
      offset = 0,
    }: CaseListArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;
    let validLimit = limit;
    let validOffset = offset;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    if (limit < 1 || limit > 500) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.listRecoveries({
      region: validRegion,
      province: validProvince,
      city: validCity,
      limit: validLimit,
      offset: validOffset,
    });
  },

  deaths: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
      limit = 30,
      offset = 0,
    }: CaseListArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;
    let validLimit = limit;
    let validOffset = offset;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    if (limit < 1 || limit > 500) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.listDeaths({
      region: validRegion,
      province: validProvince,
      city: validCity,
      limit: validLimit,
      offset: validOffset,
    });
  },

  get: (
    _obj: unknown,
    {
      caseNumber,
    }: ConfirmedCaseArgs,
    { dataSources }: Context,
  ): CaseInformation | null => dataSources.dataDropCaseInformation.get(caseNumber),

  perDayConfirmed: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: PerDayArgs,
    { dataSources }: Context,
  ): DateValue[] | null => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getDailyConfirmedDelta({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  perDayRecoveries: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: PerDayArgs,
    { dataSources }: Context,
  ): DateValue[] | null => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getDailyRecoveriesDelta({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  perDayDeaths: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: PerDayArgs,
    { dataSources }: Context,
  ): DateValue[] | null => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getDailyDeathsDelta({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  cumulativeConfirmed: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CumulativeArgs,
    { dataSources }: Context,
  ): DateValue[] | null => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getDailyConfirmedCumulative({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  cumulativeRecoveries: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CumulativeArgs,
    { dataSources }: Context,
  ): DateValue[] | null => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getDailyRecoveriesCumulative({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  cumulativeDeaths: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CumulativeArgs,
    { dataSources }: Context,
  ): DateValue[] | null => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getDailyDeathsCumulative({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  countConfirmedCases(
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CumulativeArgs,
    { dataSources }: Context,
  ): number {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.count({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  countAdmitted(
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CountArgs,
    { dataSources }: Context,
  ): number {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.countAdmitted({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  countRecoveries(
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CountArgs,
    { dataSources }: Context,
  ): number {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.countRecoveries({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  countDeaths(
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CountArgs,
    { dataSources }: Context,
  ): number {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.countDeaths({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  countPerSex: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: CountArgs,
    { dataSources }: Context,
  ): CountPerSex => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.countPerSex({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  distribAgeGroupSexConfirmedCases: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: DistributionArgs,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources
      .dataDropCaseInformation
      .distribAgeGroupSexConfirmedCases({
        region: validRegion,
        province: validProvince,
        city: validCity,
      });
  },

  distribAgeGroupSexAdmitted: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: DistributionArgs,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources
      .dataDropCaseInformation
      .distribAgeGroupSexAdmitted({
        region: validRegion,
        province: validProvince,
        city: validCity,
      });
  },

  distribAgeGroupSexRecoveries: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: DistributionArgs,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources
      .dataDropCaseInformation
      .distribAgeGroupSexRecoveries({
        region: validRegion,
        province: validProvince,
        city: validCity,
      });
  },

  distribAgeGroupSexDeaths: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: DistributionArgs,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources
      .dataDropCaseInformation
      .distribAgeGroupSexDeaths({
        region: validRegion,
        province: validProvince,
        city: validCity,
      });
  },

  runningAveConfirmedCases: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: RunningAverageArgs,
    { dataSources }: Context,
  ): DateValue[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getRunningAveConfirmedCases({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  runningAveRecoveries: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: RunningAverageArgs,
    { dataSources }: Context,
  ): DateValue[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getRunningAveRecoveries({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },

  runningAveDeaths: (
    _obj: unknown,
    {
      region = null,
      province = null,
      city = null,
    }: RunningAverageArgs,
    { dataSources }: Context,
  ): DateValue[] => {
    let validRegion = null;
    let validProvince = null;
    let validCity = null;

    if (region) {
      validRegion = region.trim();
    }

    if (province) {
      validProvince = province.trim();
    }

    if (city) {
      validCity = city.trim();
    }

    return dataSources.dataDropCaseInformation.getRunningAveDeaths({
      region: validRegion,
      province: validProvince,
      city: validCity,
    });
  },
};
