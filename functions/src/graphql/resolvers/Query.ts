import CasesQuery from './queries/CasesQuery';
import MetadataQuery from './queries/MetadataQuery';
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

  metadata(): object {
    return MetadataQuery;
  },
};
