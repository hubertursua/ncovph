import ArcGISField from './ArcGISField';
import ArcGISFeature from './ArcGISFeature';

interface ArcGISJson extends Object {
  fields: [ArcGISField];
  features: [ArcGISFeature];
}

export default ArcGISJson;
