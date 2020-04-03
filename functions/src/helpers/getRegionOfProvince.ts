import Region from '../types/Region';
import PROVINCES from '../consts/Provinces';
import Province from '../types/Province';

export default function getRegionOfProvince(province: Province): Region | null {
  return PROVINCES.reduce((acc, p) => {
    if (p.name === province) {
      return p.region as Region;
    }

    return acc;
  }, null) as Region | null;
}
