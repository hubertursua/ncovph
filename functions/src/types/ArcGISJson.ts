import ArcGISField from "./ArcGISField";
import ArcGISFeature from "./ArcGISFeature";

export default interface ArcGISJson extends Object {
  fields: [ArcGISField];
  features: [ArcGISFeature];
}
