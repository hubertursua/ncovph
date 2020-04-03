import Region from './Region';
import Province from './Province';
import City from './City';

interface Location {
  region: Region;
  province: Province;
  city: City | null;
}

export default Location;
