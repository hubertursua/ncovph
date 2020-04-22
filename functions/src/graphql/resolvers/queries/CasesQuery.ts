import CaseInformation from '../../../types/CaseInformation';
import CountPerSex from '../../../types/CountPerSex';
import DateValue from '../../../types/DateValue';
import DistributionAgeGroupSex from '../../../types/DistributionAgeGroupSex';
import { DataSources } from '../../dataSources';

export interface Context {
  dataSources: DataSources;
}

export interface ConfirmedCasesArgs {
  limit: number;
  offset: number;
}

export interface ConfirmedCaseArgs {
  caseNumber: string;
}

export default {
  confirmedCases: (
    _obj: unknown,
    {
      limit = 30,
      offset = 0,
    }: ConfirmedCasesArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validLimit = limit;
    let validOffset = offset;

    if (limit < 1 || limit > 50) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.list({
      limit: validLimit,
      offset: validOffset,
    });
  },

  admitted: (
    _obj: unknown,
    {
      limit = 30,
      offset = 0,
    }: ConfirmedCasesArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validLimit = limit;
    let validOffset = offset;

    if (limit < 1 || limit > 50) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.listAdmitted({
      limit: validLimit,
      offset: validOffset,
    });
  },

  recoveries: (
    _obj: unknown,
    {
      limit = 30,
      offset = 0,
    }: ConfirmedCasesArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validLimit = limit;
    let validOffset = offset;

    if (limit < 1 || limit > 50) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.listRecoveries({
      limit: validLimit,
      offset: validOffset,
    });
  },

  deaths: (
    _obj: unknown,
    {
      limit = 30,
      offset = 0,
    }: ConfirmedCasesArgs,
    { dataSources }: Context,
  ): CaseInformation[] => {
    let validLimit = limit;
    let validOffset = offset;

    if (limit < 1 || limit > 50) {
      validLimit = 30;
    }

    if (offset < 0) {
      validOffset = 0;
    }

    return dataSources.dataDropCaseInformation.listDeaths({
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
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] | null => dataSources.dataDropCaseInformation.getDailyConfirmedDelta(),

  perDayRecoveries: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] | null => dataSources.dataDropCaseInformation.getDailyRecoveriesDelta(),

  perDayDeaths: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] | null => dataSources.dataDropCaseInformation.getDailyDeathsDelta(),

  cumulativeConfirmed: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] | null => dataSources.dataDropCaseInformation.getDailyConfirmedCumulative(),

  cumulativeRecoveries: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] | null => dataSources.dataDropCaseInformation.getDailyRecoveriesCumulative(),

  cumulativeDeaths: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] | null => dataSources.dataDropCaseInformation.getDailyDeathsCumulative(),

  countConfirmedCases(
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number {
    return dataSources.dataDropCaseInformation.count();
  },

  countAdmitted(
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number {
    return dataSources.dataDropCaseInformation.countAdmitted();
  },

  countRecoveries(
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number {
    return dataSources.dataDropCaseInformation.countRecoveries();
  },

  countDeaths(
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number {
    return dataSources.dataDropCaseInformation.countDeaths();
  },

  countPerSex: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): CountPerSex => dataSources.dataDropCaseInformation.countPerSex(),

  distribAgeGroupSexConfirmedCases: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => dataSources
    .dataDropCaseInformation
    .distribAgeGroupSexConfirmedCases(),

  distribAgeGroupSexAdmitted: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => dataSources
    .dataDropCaseInformation
    .distribAgeGroupSexAdmitted(),

  distribAgeGroupSexRecoveries: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => dataSources
    .dataDropCaseInformation
    .distribAgeGroupSexRecoveries(),

  distribAgeGroupSexDeaths: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DistributionAgeGroupSex[] => dataSources
    .dataDropCaseInformation
    .distribAgeGroupSexDeaths(),
};
