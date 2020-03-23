import NodeCache from "node-cache";
import getLocalCases from "../services/getLocalCases";

const TTL = 60 * 5;

const cache = new NodeCache({
  deleteOnExpire: false,
});

cache.set("confirmed_cases", []);

function cacheConfirmedCases() {
  getLocalCases()
    .then(cases => {
      cache.set("confirmed_cases", cases, TTL);
    })
    .catch(err => {
      console.error(err);
    });
}

cacheConfirmedCases();

cache.on('expired', (key, value) => {
  if (key === 'confirmed_cases') {
    cacheConfirmedCases();
  }
});

export default cache;
