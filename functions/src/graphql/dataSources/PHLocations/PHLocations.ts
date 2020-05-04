import { DataSource } from 'apollo-datasource';
import phLocations from 'ph-locations';

const { psgc } = phLocations;

class PHLocations extends DataSource {
  getRegions(): PSGCRegion[] {
    return psgc.regions;
  }

  getProvinces(): PSGCProvince[] {
    return psgc.provinces;
  }

  getCities(): PSGCCitiesMunicipality[] {
    return psgc.citiesMunicipalities;
  }
}

export default PHLocations;
