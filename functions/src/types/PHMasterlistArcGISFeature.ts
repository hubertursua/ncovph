import Sex from "./Sex"
import Nationality from "./Nationality"

export default interface PHMasterlistArcGISFeature extends Object {
  FID: number;
  PH_masterl: string;
  edad: number;
  kasarian: Sex;
  nationalit: Nationality;
  residence: string;
  travel_hx: string;
  symptoms: string;
  confirmed: string;
  facility: string;
  latitude: number,
  longitude: number,
  status: string;
  epi_link: string;
  petsa: string;
}
