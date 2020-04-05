import PUIFacTracingArcGISFeature from '../../types/PUIFacTracingArcGISFeature';
import hf from './hf';

export default function correctPUIFacTracing(data: PUIFacTracingArcGISFeature[]):
  PUIFacTracingArcGISFeature[] {
  return data.map(
    (d) => ({
      ...d,
      hf: hf(d.hf),
    } as PUIFacTracingArcGISFeature),
  );
}
