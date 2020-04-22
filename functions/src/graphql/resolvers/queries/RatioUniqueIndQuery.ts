// import TestingAggregate from '../../../types/TestingAggregate';
import { DataSources } from '../../dataSources';

export interface Context {
  dataSources: DataSources;
}

export default {
  positiveInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => {
    const ds = dataSources.dataDropTestingAggregates;
    return ds.countPositiveInd() / ds.countUniqueInd();
  },

  negativeInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => {
    const ds = dataSources.dataDropTestingAggregates;
    return ds.countNegativeInd() / ds.countUniqueInd();
  },

  invalidInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => {
    const ds = dataSources.dataDropTestingAggregates;
    return ds.countInvalidInd() / ds.countUniqueInd();
  },

  equivocalInd: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): number => {
    const ds = dataSources.dataDropTestingAggregates;
    return ds.countEquivocalInd() / ds.countUniqueInd();
  },
};
