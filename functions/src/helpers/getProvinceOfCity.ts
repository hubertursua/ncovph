import Province from "../types/Province";
import toProvince from "../parsers/toProvince";
import City from "../types/City";
import Cities from "../consts/Cities";

export default function getProvinceOfCity(city: City): Province | null {
  const match = Cities.find((c) => (c.name.toUpperCase() === city.toUpperCase()));

  if (!match) {
    throw new Error(`Cannot match city to get its province: ${city}`);
  }

  return toProvince(match.province);
}
