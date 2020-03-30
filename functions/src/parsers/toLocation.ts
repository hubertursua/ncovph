import City from "../types/City";
import Location from "../types/Location";
import Province from "../types/Province";
import Region from "../types/Region";
import getProvinceOfCity from "../helpers/getProvinceOfCity";
import getRegionOfProvince from "../helpers/getRegionOfProvince";
import toProvince from "./toProvince";
import sanitizeCity from "../helpers/sanitizeCity";
import sanitizeProvince from "../helpers/sanitizeProvince";
import log from "../utils/log";

export default function toLocation(str: string): Location | null {
  const trimmed = str.trim();

  if (!trimmed) {
    return null;
  }

  if (trimmed.toUpperCase() === "FOR VERIFICATION") {
    return null;
  }

  let city: City | null;
  let region: Region | null;
  let province: Province | null = toProvince(sanitizeProvince(trimmed));

  if (province) {
    region = getRegionOfProvince(province);

    if (trimmed.includes(", ")) {
      city = sanitizeCity(trimmed);
    } else {
      city = null;
    }
  } else {
    region = Region[trimmed] || null;

    if (region) {
      province = null;
      city = null;
    } else {
      try {
        city = sanitizeCity(trimmed);
        province = getProvinceOfCity(city);
        region = getRegionOfProvince(province);
      } catch (error) {
        log.throwError(new Error(`Cannot parse toLocation "${trimmed}"`))
      }
    }
  }

  return {
    region,
    province,
    city
  } as Location;
}
