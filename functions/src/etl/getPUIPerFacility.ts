/* eslint-disable @typescript-eslint/camelcase */
import assert from 'assert';
import axios from 'axios';
import transformArcgisToJson from '../utils/transformArcgisToJson';
import DataUrls from '../consts/DataUrls';
import log from '../utils/log';
import PUIPerFacility from '../types/PUIPerFacility';
import PUIFacTracingArcGISFeature from '../types/PUIFacTracingArcGISFeature';
import correctPUIFacTracing from '../corrections/PUIFacTracing';
import toFacilityName from '../parsers/toFacilityName';
import toFacilityCoordinates from '../parsers/toFacilityCoordinates';

function toPUIPerFacility(data: PUIFacTracingArcGISFeature[]): PUIPerFacility[] {
  return data.map((feature): PUIPerFacility => {
    const facilityName = toFacilityName(feature.hf);
    const facilityCoordinates = toFacilityCoordinates(
      facilityName,
      feature.latitude,
      feature.longitude,
    );

    return {
      facility: {
        name: facilityName,
        coordinates: facilityCoordinates,
      },
      total: feature.PUIs,
      metadata: {
        raw_data: {
          facility: feature.hf,
          lat: feature.latitude,
          lng: feature.longitude,
          region: feature.region,
        },
      },
    };
  }) as PUIPerFacility[];
}

export async function getPUIFacTracing(): Promise<PUIFacTracingArcGISFeature[] | never> {
  try {
    const response = await axios.get(DataUrls.NCOVIDTRACKER_PUI_PER_HEALTH_FACILITY);
    const { data } = response;
    assert.ok(data, 'Missing data in response');
    return transformArcgisToJson<PUIFacTracingArcGISFeature>(data);
  } catch (error) {
    return log.throwError(error);
  }
}

export default async function getPUIPerFacility(): Promise<PUIPerFacility[] | never> {
  try {
    const transformedData = await getPUIFacTracing();
    return toPUIPerFacility(correctPUIFacTracing(transformedData));
  } catch (error) {
    return log.throwError(error);
  }
}
