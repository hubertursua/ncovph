import axios from "axios";
import DataUrls from "../consts/DataUrls";
import transformArcgisToJson from "../utils/transformArcgisToJson";
import HospitalArcGISFeature from "../types/HospitalArcGISFeature";
import Hospital from "../types/Hospital";
import sanitizeName from "../helpers/sanitizeName";
import HospitalLevel from "../types/HospitalLevel";
import toLocation from "../parsers/toLocation";
import sanitizeAddress from "../helpers/sanitizeAddress";
import toHospitalOwnerType from "../parsers/toHospitalOwnerType";
import sanitizeHospitalSub from "../helpers/sanitizeHospitalSub";
import toHospitalClass from "../parsers/toHospitalClass";
import toHospitalServiceType from "../parsers/toHospitalServiceType";
import log from "../utils/log";

async function getLevel1() {
  const response = await axios.get(DataUrls.NCOVIDTRACKER_HOSPITALS_LEVEL_1);
  const { data } = response;
  return transformArcgisToJson<HospitalArcGISFeature>(data);
}

async function getLevel2() {
  const response = await axios.get(DataUrls.NCOVIDTRACKER_HOSPITALS_LEVEL_2);
  const { data } = response;
  return transformArcgisToJson<HospitalArcGISFeature>(data);
}

async function getLevel3() {
  const response = await axios.get(DataUrls.NCOVIDTRACKER_HOSPITALS_LEVEL_3);
  const { data } = response;
  return transformArcgisToJson<HospitalArcGISFeature>(data);
}

function toHospitals(
  data: HospitalArcGISFeature[],
  level: HospitalLevel,
): Hospital[] {
  return data.map(
    (feature): Hospital => ({
      name: sanitizeName(feature.facname),
      level,
      location: feature.municity ? toLocation(feature.municity) : null,
      address: sanitizeAddress(feature.address),
      coordinates: {
        lat: feature.latitude,
        lng: feature.longitude
      },
      onwer: toHospitalOwnerType(feature.own),
      sub: sanitizeHospitalSub(feature.sub),
      class: toHospitalClass(feature.CLASS),
      service: toHospitalServiceType(feature.service),
    })
  );
}

export default async function getHospitals() {
  try {
    const cleanedData = [
      ...toHospitals(await getLevel1(), HospitalLevel.LEVEL1),
      ...toHospitals(await getLevel2(), HospitalLevel.LEVEL2),
      ...toHospitals(await getLevel3(), HospitalLevel.LEVEL3)
    ];

    return cleanedData;
  } catch (error) {
    log.throwError(error);
  }
}
