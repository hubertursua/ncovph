export default interface HospitalArcGISFeature extends Object {
  reg: string;
  proc_: string | null; // Province
  municity: string;
  address: string;
  own: string;
  sub: string | null;
  facname: string;
  ABC: number;
  CLASS: string;
  service: string;
  num: string | null;
  email: string | null;
  fax: string | null;
  latitude: number;
  longitude: number;
  ObjectId: number;
}
