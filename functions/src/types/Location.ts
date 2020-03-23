import Region from "./Region";
import Province from "./Province";
import City from "./City";

export default interface Location {
  region: Region;
  province: Province;
  city: City | null;
}
