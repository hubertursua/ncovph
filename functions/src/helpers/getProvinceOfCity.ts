import Province from "../types/Province";
import toProvince from "../parsers/toProvince";
import City from "../types/City";
import Cities from "../consts/Cities";

export default function getProvinceOfCity(city: City): Province | null {
  const match = Cities.find((c) => (c.name === city));

  if (!match) {
    console.error("Cannot match city to get its province:");
    console.error(city);
    process.exit();
  }

  return toProvince(match.province);
}
