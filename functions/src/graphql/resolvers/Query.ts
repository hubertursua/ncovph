import CasesQuery from './queries/CasesQuery';
import HealthFacilityCapacityQuery from './queries/HealthFacilityCapacityQuery';
import MetadataQuery from './queries/MetadataQuery';
import PPEQuery from './queries/PPEQuery';
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

  ppe(): object {
    return PPEQuery;
  },

  healthFacilityCapacity(): object {
    return HealthFacilityCapacityQuery;
  },

  metadata(): object {
    return MetadataQuery;
  },
};
