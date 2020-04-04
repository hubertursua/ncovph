import assert from 'assert';
import axios from 'axios';
import moment from 'moment';
import ConfirmedArcGISFeature from '../types/ConfirmedArcGISFeature';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import DataUrls from '../consts/DataUrls';
import log from '../utils/log';
import ConfirmedTrend from '../types/ConfirmedTrend';

function toConfirmedTrend(data: ConfirmedArcGISFeature[]):
  ConfirmedTrend[] {
  return data.map(
    (feature): ConfirmedTrend => ({
      date: moment(feature.date).toDate(),
      admitted: feature.admitted,
      recovered: feature.recovered,
      deceased: feature.deaths,
    }),
  ) as ConfirmedTrend[];
}

export async function getConfirmed(): Promise<ConfirmedArcGISFeature[] | never> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_CONFIRMED_CASES_TREND);
    const { data } = response;
    assert.ok(data, 'Missing data in response');
    return transformArcgisToJson<ConfirmedArcGISFeature>(data);
  } catch (error) {
    return log.throwError(error);
  }
}


export default async function getConfirmedTrend():
  Promise<ConfirmedTrend[] | never> {
  try {
    const transformedData = await getConfirmed();
    return toConfirmedTrend(transformedData);
  } catch (error) {
    return log.throwError(error);
  }
}
