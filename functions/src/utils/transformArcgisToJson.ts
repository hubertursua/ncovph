import ArcGISJson from "../types/ArcGISJson";

function transformArcgisToJson<T>(arcgisJson: ArcGISJson): [T] {
  return arcgisJson.features.map((feature): T => {
    return feature.attributes as T;
  }) as [T];
}

export default transformArcgisToJson;
