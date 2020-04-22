import { DataSources as GraphQLDataSources } from 'apollo-server-core/src/graphqlOptions';
import DataDropCaseInformation from './DataDropCaseInformation';
import DataDropTestingAggregates from './DataDropTestingAggregates';

export interface DataSources extends GraphQLDataSources<object> {
  dataDropCaseInformation: DataDropCaseInformation;
  dataDropTestingAggregates: DataDropTestingAggregates;
}

export default (): DataSources => ({
  dataDropCaseInformation: new DataDropCaseInformation(),
  dataDropTestingAggregates: new DataDropTestingAggregates(),
});
