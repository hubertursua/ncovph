import assert from 'assert';
import axios from 'axios';
import moment from 'moment';
import DataUrls from '../consts/DataUrls';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import toPatientStatus from "../parsers/toPatientStatus";
import toSex from "../parsers/toSex";
import ConfirmedCasePatientOFW from '../types/ConfirmedCasePatientOFW';
import OFMasterlistArcGISFeature from '../types/OFMasterlistArcGISFeature';
import toCountry from '../parsers/toCountry';
import toRemarks from '../parsers/toRemarks';
import toCruiseShip from '../parsers/toCruiseShip';
import log from '../utils/log';

function toConfirmedCasePatientOFW(data: OFMasterlistArcGISFeature[]): ConfirmedCasePatientOFW[] {
  return data.map(
    (feature): ConfirmedCasePatientOFW => ({
      caseID: feature.Case_numbe.trim(),
      age: feature.age,
      sex: toSex(feature.sex),
      country: toCountry(feature.country),
      coordinates: {
        lat: feature.latitude,
        lng: feature.longitude
      },
      date_reported: moment(feature.date_repor, "M/D/YYYY").toDate(),
      date_confirmed: moment(feature.date_confi, "MMM. D, YYYY").toDate(),
      status: toPatientStatus(feature.status),
      remarks: toRemarks(feature.remarks),
      metadata: {
        cruise_ship: toCruiseShip(feature.country),
        field_status: { },
        raw_data: {
          country: feature.country,
          date_reported: feature.date_repor,
          date_confirmed: feature.date_confi,
          status: feature.status,
          remarks: feature.remarks,
        },
      },
    }),
  ) as ConfirmedCasePatientOFW[];
}

export default async function getOFWCases(): Promise<ConfirmedCasePatientOFW[] | never> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_OFW_CASES);
    const { data } = response;
    assert.ok(data, 'Missing data in response');
    const transformedData = transformArcgisToJson<OFMasterlistArcGISFeature>(data);
    const cleanedData = toConfirmedCasePatientOFW(transformedData);
    return cleanedData;
  } catch (error) {
    return log.throwError(error);
  }
}
