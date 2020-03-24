import getOFWCases from "../services/getOFWCases";

const CACHE_KEY = "ofw_cases";
const TTL = 60 * 5;

export default (cache) => {
  cache.set(CACHE_KEY, []);

  function cacheOFWCases() {
    getOFWCases()
      .then(cases => {
        cache.set(CACHE_KEY, cases, TTL);
      })
      .catch(err => {
        console.error(err);
      });
  }

  cacheOFWCases();

  cache.on('expired', (key, value) => {
    if (key === CACHE_KEY) {
      cacheOFWCases();
    }
  });
};
