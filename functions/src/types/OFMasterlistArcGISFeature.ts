import Sex from "./Sex"
import Nationality from "./Nationality"

export default interface OFMasterlistArcGISFeature extends Object {
  FID: number;
  num: number;
  Case_numbe: string;
  age: number;
  sex: Sex;
  country: Nationality;
  latitude: number;
  longitude: number;
  date_repor: string;
  date_confi: string;
  status: string;
  remarks: string;
}
