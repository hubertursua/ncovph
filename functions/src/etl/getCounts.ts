import assert from "assert";
import axios from "axios";
import DataUrls from "../consts/DataUrls";
import transformArcgisToJson from "../utils/transformArcgisToJson";
import log from "../utils/log";
import SlideFigArcGISFeature from "../types/SlideFigArcGISFeature";
import Counts from "../types/Counts";

function toCount(
  data: SlideFigArcGISFeature
): Counts {
  return {
    confirmed: data.confirmed,
    pui: data.PUIs,
    pum: data.PUMs,
    recovered: data.recovered,
    deceased: data.deaths,
    tests: data.tests,
  } as Counts;
}

export default async function getOFWCases(): Promise<Counts | never> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_COUNTS);
    const { data } = response;
    assert.ok(data, "Missing data in response");
    const transformedData = transformArcgisToJson<SlideFigArcGISFeature>(data).shift();
    const cleanedData = toCount(transformedData);
    return cleanedData;
  } catch (error) {
    return log.throwError(error);
  }
}
