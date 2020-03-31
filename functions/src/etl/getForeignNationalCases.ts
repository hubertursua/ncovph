import assert from 'assert';
import axios from 'axios';
import moment from 'moment';
import DataUrls from '../consts/DataUrls';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import toPatientStatus from "../parsers/toPatientStatus";
import toSex from "../parsers/toSex";
import FNMasterlistArcGISFeature from '../types/FNMasterlistArcGISFeature';
import ConfirmedCasePatientForeignNational from '../types/ConfirmedCasePatientForeignNational';
import toNationality from '../parsers/toNationality';
import toTravelDate from '../parsers/toTravelDate';
import toTravelHistories from '../parsers/toTravelHistories';

function toConfirmedCasePatientForeignNational(
  data: FNMasterlistArcGISFeature[]
): ConfirmedCasePatientForeignNational[] {
  return data.map(
    (feature): ConfirmedCasePatientForeignNational => ({
      caseID: feature.FN_masterl.trim(),
      age: feature.edad,
      sex: toSex(feature.kasarian),
      nationality: toNationality(feature.nationalit),
      travel_date: toTravelDate(feature.travel_dat),
      travel_history: toTravelHistories(feature.travel_his),
      date_confirmed: moment(feature.confirmed, "M/D/YYYY").toDate(),
      where_now: feature.where_now,
      coordinates: {
        lat: feature.latitude,
        lng: feature.longitude
      },
      status: toPatientStatus(feature.status),
      metadata: {
        raw_data: {
          nationality: feature.nationalit,
          travel_date: feature.travel_dat,
          travel_history: feature.travel_his,
          date_confirmed: feature.travel_his,
          where_now: feature.where_now,
          status: feature.status,
        }
      }
    })
  ) as ConfirmedCasePatientForeignNational[];
}

export default async function getForeignNationalCases() {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_FOREIGN_NATIONAL_CASES);
    const { data } = response;
    assert.ok(data, 'Missing data in response');
    const transformedData = transformArcgisToJson<FNMasterlistArcGISFeature>(data);
    const cleanedData = toConfirmedCasePatientForeignNational(transformedData);
    return cleanedData;
  } catch (error) {
    throw error;
  }
}

getForeignNationalCases();