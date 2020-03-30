import confirmed from "./confirmed";
import PHMasterlistArcGISFeature from "../../types/PHMasterlistArcGISFeature";

export default function correctPHMasterList(data: PHMasterlistArcGISFeature[]) {
  return data.map((d) => {
    return Object.assign({}, d, {
      confirmed: confirmed(d.confirmed, d.PH_masterl),
    }) as PHMasterlistArcGISFeature;
  });
}