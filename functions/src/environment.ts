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
  rateLimit: {
    windowMs: number;
    max: number;
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
    printTypeDef: process.env.GRAPHQL_PRINT_TYPEDEFS === 'true',
  },
  rateLimit: {
    windowMs: process.env.RATE_LIMIT_WINDOW_MS
      ? parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10)
      : 1000 * 60 * 1, // 1 minute
    max: process.env.RATE_LIMIT_MAX
      ? parseInt(process.env.RATE_LIMIT_MAX, 10)
      : 45, // limit each IP to 20 requests per windowMs
  },
  port: process.env.PORT || 3000,
};

export default environment;
