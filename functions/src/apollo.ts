import { ApolloServer } from 'apollo-server-express';
import environment from './environment';
import dataSources from './graphql/dataSources';
import mocks from './graphql/mocks';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

if (environment.graphql.printTypeDef) {
  // eslint-disable-next-line no-console
  console.log(typeDefs, '\n');
}

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  mocks: environment.apollo.mocks && mocks,
});

export default server;
