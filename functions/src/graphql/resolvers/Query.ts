import CasesQuery from './queries/CasesQuery';
import TestingQuery from './queries/TestingQuery';

export default {
  hello(): string {
    return 'Hello ncovph';
  },

  cases(): object {
    return CasesQuery;
  },

  testing(): object {
    return TestingQuery;
  },
};
