import { DataSources as GraphQLDataSources } from 'apollo-server-core/src/graphqlOptions';
import DataDropCaseInformation from './DataDropCaseInformation';
import DataDropDailyReport from './DataDropDailyReport';
import DataDropTestingAggregates from './DataDropTestingAggregates';
import DataDropWeeklyReport from './DataDropWeeklyReport';
import PHLocations from './PHLocations';

export interface DataSources extends GraphQLDataSources<object> {
  dataDropCaseInformation: DataDropCaseInformation;
  dataDropTestingAggregates: DataDropTestingAggregates;
  DataDropWeeklyReport: DataDropWeeklyReport;
  DataDropDailyReport: DataDropDailyReport;
  phLocations: PHLocations;
}

export default (): DataSources => ({
  dataDropCaseInformation: new DataDropCaseInformation(),
  dataDropTestingAggregates: new DataDropTestingAggregates(),
  DataDropWeeklyReport: new DataDropWeeklyReport(),
  DataDropDailyReport: new DataDropDailyReport(),
  phLocations: new PHLocations(),
});
