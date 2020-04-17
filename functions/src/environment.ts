import dotenv from 'dotenv';

dotenv.config();

export interface Environment {
  apollo: {
    introspection: boolean;
    playground: boolean;
    mocks: boolean;
  };
  graphql: {
    printTypeDef: boolean;
  };
  port: number | string;
}

const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
    mocks: process.env.APOLLO_MOCKS === 'true',
  },
  graphql: {
    printTypeDef: process.env.GRAPHQL_PRINT_TYPEDEFS === 'false',
  },
  port: process.env.PORT || 3000,
};

export default environment;
