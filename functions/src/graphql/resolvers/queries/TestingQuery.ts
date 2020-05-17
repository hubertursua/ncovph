import DateValue from '../../../types/DateValue';
import TestingFacility from '../../../types/TestingFacility';
import { DataSources } from '../../dataSources';
import RatioUniqueIndQuery from './RatioUniqueIndQuery';

export interface Context {
  dataSources: DataSources;
}

export default {
  facilities: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): TestingFacility[] => dataSources
    .dataDropTestingAggregates
    .getFacilities(),

  countUniqueInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countUniqueInd(),

  countTestsConducted: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countTestsConducted(),

  countPositiveInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countPositiveInd(),

  countNegativeInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countNegativeInd(),

  countInvalidInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countInvalidInd(),

  countEquivocalInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countEquivocalInd(),

  countRemainingTests: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => dataSources
    .dataDropTestingAggregates
    .countRemainingTests(),

  perDayPositiveInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyPositiveIndDelta(),

  perDayNegativeInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyNegativeIndDelta(),

  perDayInvalidInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyInvalidIndDelta(),

  perDayEquivocalInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyEquivocalIndDelta(),

  perDayTestsConducted: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyTestsConductedDelta(),

  perDayTestsRemaining: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyTestsConductedCumulative(),

  cumulativePositiveInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyPositiveIndCumulative(),

  cumulativeNegativeInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyNegativeIndCumulative(),

  cumulativeInvalidInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyInvalidIndCumulative(),

  cumulativeEquivocalInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyEquivocalIndCumulative(),

  cumulativeTestsConducted: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyTestsConductedCumulative(),

  deltaTestsRemaining: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getDailyTestsRemainingDelta(),

  runningAvePositiveInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getRunningAvePositiveInd(),

  runningAveNegativeInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getRunningAveNegativeInd(),

  runningAveInvalidInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getRunningAveInvalidInd(),

  runningAveEquivocalInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getRunningAveEquivocalInd(),

  runningAveTestsConducted: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): DateValue[] => dataSources
    .dataDropTestingAggregates
    .getRunningAveTestsConducted(),

  ratioUniqueInd(): object {
    return RatioUniqueIndQuery;
  },
};
