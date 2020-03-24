import NodeCache from "node-cache";
import confirmedCases from "./confirmed_cases";
import ofwCases from "./ofw_cases";

const cache = new NodeCache({
  deleteOnExpire: false,
});

confirmedCases(cache);
ofwCases(cache);

export default cache;
