import NodeCache from 'node-cache';
import buildCache from './buildCache';
import buildCache2 from './buildCache2';
import getLocalCases from '../etl/getLocalCases';
import getOFWCases from '../etl/getOFWCases';
import getForeignNationalCases from '../etl/getForeignNationalCases';
import ConfirmedCasePatientLocal from '../types/ConfirmedCasePatientLocal';
import ConfirmedCasePatientOFW from '../types/ConfirmedCasePatientOFW';
import ConfirmedCasePatientForeignNational from '../types/ConfirmedCasePatientForeignNational';
import Counts from '../types/Counts';

export const CacheKeys = {
  CONFIRMED_CASES: 'confirmed_cases',
  OFW_CASES: 'ofw_cases',
  FOREIGN_NATIONAL_CASES: 'foreign_national_cases',
  COUNTS: 'counts',
};

const cache = new NodeCache({
  deleteOnExpire: false,
});

(async (): Promise<void> => {
  await buildCache<ConfirmedCasePatientLocal[]>({
    cache,
    func: getLocalCases,
    cacheKey: CacheKeys.CONFIRMED_CASES,
    ttl: 60 * 15,
    initialState: [],
  });

  await buildCache<ConfirmedCasePatientOFW[]>({
    cache,
    func: getOFWCases,
    cacheKey: CacheKeys.OFW_CASES,
    ttl: 60 * 15,
    initialState: [],
  });

  await buildCache<ConfirmedCasePatientForeignNational[]>({
    cache,
    func: getForeignNationalCases,
    cacheKey: CacheKeys.FOREIGN_NATIONAL_CASES,
    ttl: 60 * 15,
    initialState: [],
  });

  await buildCache2<Counts>({
    cache,
    cacheKey: CacheKeys.COUNTS,
    ttl: 60 * 15,
    initialState: {
      confirmed: 0,
      pui: 0,
      pum: 0,
      recovered: 0,
      deceased: 0,
      tests: 0,
    },
  });
})();

export default cache;
