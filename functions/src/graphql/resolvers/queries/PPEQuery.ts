import PPEReport from '../../../types/PPEReport';
import { DataSources } from '../../dataSources';

export interface Context {
  dataSources: DataSources;
}

export default {
  latest: (
    _obj: unknown,
    _args: unknown,
    { dataSources }: Context,
  ): PPEReport[] => dataSources
    .DataDropWeeklyReport
    .getLatest(),
};
