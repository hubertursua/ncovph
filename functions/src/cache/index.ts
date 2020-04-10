import NodeCache from 'node-cache';
import ConfirmedCasePatientForeignNational from 'ncovph-parser/src/types/ConfirmedCasePatientForeignNational';
import ConfirmedCasePatientLocal from 'ncovph-parser/src/types/ConfirmedCasePatientLocal';
import ConfirmedCasePatientOFW from 'ncovph-parser/src/types/ConfirmedCasePatientOFW';
import ConfirmedTrend from 'ncovph-parser/src/types/ConfirmedTrend';
import Counts from 'ncovph-parser/src/types/Counts';
import PUIPerFacility from 'ncovph-parser/src/types/PUIPerFacility';
import buildCache from './buildCache';
import CacheKeys from '../consts/CacheKeys';

const cache = new NodeCache({
  deleteOnExpire: false,
});

buildCache<ConfirmedCasePatientLocal[]>({
  cache,
  cacheKey: CacheKeys.CONFIRMED_CASES,
  ttl: 60 * 15,
  initialState: [],
  delay: 0,
});

buildCache<ConfirmedCasePatientOFW[]>({
  cache,
  cacheKey: CacheKeys.OFW_CASES,
  ttl: 60 * 15,
  initialState: [],
  delay: 2,
});

buildCache<ConfirmedCasePatientForeignNational[]>({
  cache,
  cacheKey: CacheKeys.FOREIGN_NATIONAL_CASES,
  ttl: 60 * 15,
  initialState: [],
  delay: 4,
});

buildCache<Counts>({
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
  delay: 6,
});

buildCache<ConfirmedTrend[]>({
  cache,
  cacheKey: CacheKeys.CONFIRMED_TREND,
  ttl: 60 * 15,
  initialState: [],
  delay: 8,
});


buildCache<PUIPerFacility[]>({
  cache,
  cacheKey: CacheKeys.PUI_PER_FACILITY,
  ttl: 60 * 15,
  initialState: [],
  delay: 10,
});

export default cache;
