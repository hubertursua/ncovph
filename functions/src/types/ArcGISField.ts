export default interface ArcGISField extends Object {
  name: string;
  type: string;
  alias: string;
  sqlType: string;
  domain: string | null;
  length?: number;
  defaultValue: unknown;
}
