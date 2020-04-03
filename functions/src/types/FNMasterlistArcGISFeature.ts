import Sex from './Sex';
import Nationality from './Nationality';

interface FNMasterlistArcGISFeature extends Object {
  FID: number;
  FN_masterl: string;
  edad: number;
  kasarian: Sex;
  nationalit: Nationality;
  travel_dat: string;
  travel_his: string;
  confirmed: string;
  where_now: string;
  latitude: number;
  longitude: number;
  status: string;
  epid_link: string;
}

export default FNMasterlistArcGISFeature;
