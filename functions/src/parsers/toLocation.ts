import City from "../types/City";
import Location from "../types/Location";
import Province from "../types/Province";
import Region from "../types/Region";
import getProvinceOfCity from "../helpers/getProvinceOfCity";
import getRegionOfProvince from "../helpers/getRegionOfProvince";
import toProvince from "./toProvince";
import sanitizeCity from "../helpers/sanitizeCity";

export default function toLocation(str: string): Location {
  let city: City | null;
  let region: Region | null;
  let province: Province | null = toProvince(str);

  if (province) {
    region = getRegionOfProvince(province);
    city = null;
  } else {
    region = Region[str] || null;

    if (region) {
      province = null;
      city = null;
    } else {
      city = sanitizeCity(str);
      province = getProvinceOfCity(city);
      region = getRegionOfProvince(province);
    }
  }

  return {
    region,
    province,
    city
  } as Location;
}
