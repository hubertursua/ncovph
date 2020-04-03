import confirmed from './confirmed';
import dateDeceased from './dateDeceased';
import dateRecovered from './dateRecovered';
import status from './status';
import PHMasterlistArcGISFeature from '../../types/PHMasterlistArcGISFeature';

export default function correctPHMasterList(data: PHMasterlistArcGISFeature[]):
  PHMasterlistArcGISFeature[] {
  return data.map(
    (d) => ({
      ...d,
      confirmed: confirmed(d.confirmed, d.PH_masterl),
      date_deceased: dateDeceased(d.PH_masterl), // eslint-disable-line @typescript-eslint/camelcase
      date_recovered: dateRecovered(d.PH_masterl), // eslint-disable-line @typescript-eslint/camelcase, max-len
      status: status(d.status, d.PH_masterl),
    } as PHMasterlistArcGISFeature),
  );
}
