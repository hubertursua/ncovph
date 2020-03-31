import axios from "axios";
import cache, { CacheKeys } from "../cache";
import Hospitals from "../consts/Hospitals";
import DataUrls from "../consts/DataUrls";

export const path = "/counts";

async function getArcGISCounts(url: DataUrls) {
  try {
    const response = await axios.get(url);
    return response.data.features.length;
  } catch (error) {
    return -1;
  }
}

export const handler = async (req, res) => {
  res.json({
    "/confirmed-cases": (cache.get(CacheKeys.CONFIRMED_CASES) as object[]).length,
    "/ofw-cases": (cache.get(CacheKeys.OFW_CASES) as object[]).length,
    "/foreign-national-cases": (cache.get(CacheKeys.FOREIGN_NATIONAL_CASES) as object[]).length,
    "/hospitals": Hospitals.length,
    arcgis: {
      PH_masterlist: await getArcGISCounts(DataUrls.NCOVIDTRACKER_LOCAL_CASES),
      OF_masterlist: await getArcGISCounts(DataUrls.NCOVIDTRACKER_OFW_CASES),
      FN_masterlist: await getArcGISCounts(DataUrls.NCOVIDTRACKER_FOREIGN_NATIONAL_CASES),
    }
  });
};
