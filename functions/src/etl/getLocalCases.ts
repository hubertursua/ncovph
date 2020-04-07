/* eslint-disable @typescript-eslint/camelcase */
import assert from 'assert';
import axios from 'axios';
import moment from 'moment';
import ConfirmedCasePatientLocal from '../types/ConfirmedCasePatientLocal';
import DataUrls from '../consts/DataUrls';
import PHMasterlistArcGISFeature from '../types/PHMasterlistArcGISFeature';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import toNationality from '../parsers/toNationality';
import toPatientStatus from '../parsers/toPatientStatus';
import toSex from '../parsers/toSex';
import toSymptoms from '../parsers/toSymptoms';
import getTravelHistoryDataFieldStatus from '../helpers/getTravelHistoryDataFieldStatus';
import toTravelHistories from '../parsers/toTravelHistories';
import getResidenceDataFieldStatus from '../helpers/getResidenceDataFieldStatus';
import toResidence from '../parsers/toResidence';
import toCruiseShip from '../parsers/toCruiseShip';
import sanitizeName from '../helpers/sanitizeName';
import corrections from '../corrections/PHMasterList';
import log from '../utils/log';
import toDateDeceased from '../parsers/toDateDeceased';
import toDateRecovered from '../parsers/toDateRecovered';
import storage from '../storage';

function toConfirmedCasePatientLocal(data: PHMasterlistArcGISFeature[]):
  ConfirmedCasePatientLocal[] {
  return data.map(
    (feature): ConfirmedCasePatientLocal => ({
      caseID: feature.PH_masterl.trim(),
      age: feature.edad,
      sex: toSex(feature.kasarian),
      date_confirmed: moment(feature.confirmed, 'M/D/YYYY').toDate(),
      coordinates: {
        lat: feature.latitude,
        lng: feature.longitude,
      },
      // relationships: strToPatientRelationships(feature.travel_hx),
      status: toPatientStatus(feature.status),
      nationality: toNationality(feature.nationalit),
      residence: toResidence(feature.residence),
      travel_history: toTravelHistories(feature.travel_hx),
      symptoms: toSymptoms(feature.symptoms),
      facility: sanitizeName(feature.facility),
      date_deceased: toDateDeceased(feature.date_deceased),
      date_recovered: toDateRecovered(feature.date_recovered),
      metadata: {
        cruise_ship: toCruiseShip(feature.travel_hx),
        field_status: {
          residence: getResidenceDataFieldStatus(feature.residence),
          travel_history: getTravelHistoryDataFieldStatus(feature.travel_hx),
        },
        raw_data: {
          date_confirmed: feature.confirmed,
          status: feature.status,
          nationality: feature.nationalit,
          residence: feature.residence,
          travel_history: feature.travel_hx,
          symptoms: feature.symptoms,
          facility: feature.facility,
        },
      },
    }),
  ) as ConfirmedCasePatientLocal[];
}

export async function getPHMasterlistCount(): Promise<number | never> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_LOCAL_CASES_COUNT);
    const { data } = response;
    return parseInt(data.count, 10);
  } catch (error) {
    return log.throwError(error);
  }
}

export async function getPHMasterlist(): Promise<PHMasterlistArcGISFeature[] | never> {
  try {
    const totalRecords = await getPHMasterlistCount();
    const transformedData = [];

    for (let offset = 0; offset < totalRecords; offset += 2000) {
      const url = DataUrls.NCOVIDTRACKER_LOCAL_CASES.replace('resultOffset=0', `resultOffset=${offset}`);
      const response = await axios.get(url); // eslint-disable-line no-await-in-loop
      const { data } = response;
      assert.ok(data, 'Missing data in response');
      transformArcgisToJson<PHMasterlistArcGISFeature>(data).forEach((val) => {
        transformedData.push(val);
      });
    }

    return transformedData;
  } catch (error) {
    return log.throwError(error);
  }
}

export async function getPHMasterlistFromArchive(): Promise<PHMasterlistArcGISFeature[] | never> {
  try {
    const data = await storage.get('archive/2020-04-06/PH_masterlist.json');
    return data as PHMasterlistArcGISFeature[];
  } catch (error) {
    return log.throwError(error);
  }
}

export default async function getLocalCases(): Promise<ConfirmedCasePatientLocal[] | never> {
  try {
    // TODO: Temporarily getting data from an archived copy of PH_masterlist
    const transformedData = await getPHMasterlistFromArchive();
    return toConfirmedCasePatientLocal(corrections(transformedData));
  } catch (error) {
    return log.throwError(error);
  }
}
