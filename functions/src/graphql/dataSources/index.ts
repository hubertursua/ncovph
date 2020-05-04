import { DataSources as GraphQLDataSources } from 'apollo-server-core/src/graphqlOptions';
import DataDropCaseInformation from './DataDropCaseInformation';
import DataDropTestingAggregates from './DataDropTestingAggregates';
import PHLocations from './PHLocations';

export interface DataSources extends GraphQLDataSources<object> {
  dataDropCaseInformation: DataDropCaseInformation;
  dataDropTestingAggregates: DataDropTestingAggregates;
  phLocations: PHLocations;
}

export default (): DataSources => ({
  dataDropCaseInformation: new DataDropCaseInformation(),
  dataDropTestingAggregates: new DataDropTestingAggregates(),
  phLocations: new PHLocations(),
});
