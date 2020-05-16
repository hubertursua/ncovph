import HealthFacilityCapacityReport from '../../../types/HealthFacilityCapacityReport';
import { DataSources } from '../../dataSources';

export interface Context {
  dataSources: DataSources;
}

export default {
  latest: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): HealthFacilityCapacityReport[] => dataSources
    .DataDropDailyReport
    .getLatest(),
};
