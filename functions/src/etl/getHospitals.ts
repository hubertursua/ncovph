import axios from 'axios';
import DataUrls from '../consts/DataUrls';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import HospitalArcGISFeature from '../types/HospitalArcGISFeature';
import Hospital from '../types/Hospital';
import sanitizeName from '../helpers/sanitizeName';
import HospitalLevel from '../types/HospitalLevel';
import toLocation from '../parsers/toLocation';
import sanitizeAddress from '../helpers/sanitizeAddress';
import toHospitalOwnerType from '../parsers/toHospitalOwnerType';
import sanitizeHospitalSub from '../helpers/sanitizeHospitalSub';
import toHospitalClass from '../parsers/toHospitalClass';
import toHospitalServiceType from '../parsers/toHospitalServiceType';
import log from '../utils/log';

export async function getHospitalLevel1(): Promise<HospitalArcGISFeature[]> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_HOSPITALS_LEVEL_1);
    const { data } = response;
    return transformArcgisToJson<HospitalArcGISFeature>(data);
  } catch (error) {
    return log.throwError(error);
  }
}

export async function getHospitalLevel2(): Promise<HospitalArcGISFeature[]> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_HOSPITALS_LEVEL_2);
    const { data } = response;
    return transformArcgisToJson<HospitalArcGISFeature>(data);
  } catch (error) {
    return log.throwError(error);
  }
}

export async function getHospitalLevel3(): Promise<HospitalArcGISFeature[]> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_HOSPITALS_LEVEL_3);
    const { data } = response;
    return transformArcgisToJson<HospitalArcGISFeature>(data);
  } catch (error) {
    return log.throwError(error);
  }
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
        lng: feature.longitude,
      },
      onwer: toHospitalOwnerType(feature.own),
      sub: sanitizeHospitalSub(feature.sub),
      class: toHospitalClass(feature.CLASS),
      service: toHospitalServiceType(feature.service),
    }),
  );
}

export default async function getHospitals(): Promise<Hospital[]|never> {
  try {
    return [
      ...toHospitals(await getHospitalLevel1(), HospitalLevel.LEVEL1),
      ...toHospitals(await getHospitalLevel2(), HospitalLevel.LEVEL2),
      ...toHospitals(await getHospitalLevel3(), HospitalLevel.LEVEL3),
    ];
  } catch (error) {
    return log.throwError(error);
  }
}
