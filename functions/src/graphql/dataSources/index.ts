import { DataSources as GraphQLDataSources } from 'apollo-server-core/src/graphqlOptions';
import DataDropCaseInformation from './DataDropCaseInformation';

export interface DataSources extends GraphQLDataSources<object> {
  dataDropCaseInformation: DataDropCaseInformation;
}

export default (): DataSources => ({
  dataDropCaseInformation: new DataDropCaseInformation(),
});
