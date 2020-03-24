import getLocalCases from "../services/getLocalCases";

const CACHE_KEY = "confirmed_cases";
const TTL = 60 * 5;

export default (cache) => {
  cache.set(CACHE_KEY, []);

  function cacheConfirmedCases() {
    getLocalCases()
      .then(cases => {
        cache.set(CACHE_KEY, cases, TTL);
      })
      .catch(err => {
        console.error(err);
      });
  }

  cacheConfirmedCases();

  cache.on('expired', (key, value) => {
    if (key === CACHE_KEY) {
      cacheConfirmedCases();
    }
  });
};
