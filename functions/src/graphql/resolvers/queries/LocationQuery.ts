import { DataSources } from '../../dataSources';

export interface Args {
  dataSources: DataSources;
}

export default {
  regions: (
    _obj: unknown,
    { dataSources }: Args,
  ): PSGCRegion[] => dataSources
    .phLocations
    .getRegions(),

  provinces: (
    _obj: unknown,
    { dataSources }: Args,
  ): PSGCProvince[] => dataSources
    .phLocations
    .getProvinces(),

  cities: (
    _obj: unknown,
    { dataSources }: Args,
  ): PSGCCitiesMunicipality[] => dataSources
    .phLocations
    .getCities(),
};
