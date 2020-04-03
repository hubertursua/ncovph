import LatLng from './LatLng';
import HospitalServiceType from './HospitalServiceType';
import HospitalLevel from './HospitalLevel';
import HospitalOwnerType from './HospitalOwnerType';
import HospitalClass from './HospitalClass';
import Location from './Location';

interface Hospital {
  name: string;
  level: HospitalLevel;
  location: Location | null;
  address: string;
  coordinates: LatLng;
  onwer: HospitalOwnerType;
  sub: string | null; // subclassification
  class: HospitalClass | null;
  service: HospitalServiceType;
}

export default Hospital;
