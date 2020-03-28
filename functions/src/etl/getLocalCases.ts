import assert from 'assert';
import axios from 'axios';
import moment from 'moment';
import ConfirmedCasePatientLocal from '../types/ConfirmedCasePatientLocal';
import DataUrls from '../consts/DataUrls';
import PHMasterlistArcGISFeature from '../types/PHMasterlistArcGISFeature';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import toNationality from "../parsers/toNationality";
import toPatientStatus from "../parsers/toPatientStatus";
import toSex from "../parsers/toSex";
import toSymptoms from "../parsers/toSymptoms";
import getTravelHistoryDataFieldStatus from "../helpers/getTravelHistoryDataFieldStatus";
import toTravelHistories from "../parsers/toTravelHistories";
import getResidenceDataFieldStatus from "../helpers/getResidenceDataFieldStatus";
import toResidence from "../parsers/toResidence";
import toCruiseShip from '../parsers/toCruiseShip';
import sanitizeName from '../helpers/sanitizeName';

function toConfirmedCasePatientLocal(data: PHMasterlistArcGISFeature[]): ConfirmedCasePatientLocal[] {
  return data.map(
    (feature): ConfirmedCasePatientLocal => ({
      caseID: feature.PH_masterl.trim(),
      age: feature.edad,
      sex: toSex(feature.kasarian),
      date_confirmed: moment(feature.confirmed, "M/D/YYYY").toDate(),
      coordinates: {
        lat: feature.latitude,
        lng: feature.longitude
      },
      // relationships: strToPatientRelationships(feature.travel_hx),
      status: toPatientStatus(feature.status),
      nationality: toNationality(feature.nationalit),
      residence: toResidence(feature.residence),
      travel_history: toTravelHistories(feature.travel_hx),
      symptoms: toSymptoms(feature.symptoms),
      facility: sanitizeName(feature.facility.trim()),
      metadata: {
        cruise_ship: toCruiseShip(feature.travel_hx),
        field_status: {
          residence: getResidenceDataFieldStatus(feature.residence),
          travel_history: getTravelHistoryDataFieldStatus(feature.travel_hx),
        },
        raw_data: {
          residence: feature.residence,
          travel_history: feature.travel_hx,
          symptoms: feature.symptoms,
        },
      },
    }),
  ) as ConfirmedCasePatientLocal[];
}

export default async function getLocalCases() {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_LOCAL_CASES);
    const { data } = response;
    assert.ok(data, 'Missing data in response');
    const transformedData = transformArcgisToJson<PHMasterlistArcGISFeature>(data);
    const cleanedData = toConfirmedCasePatientLocal(transformedData);
    return cleanedData;
  } catch (error) {
    throw error;
  }
}
