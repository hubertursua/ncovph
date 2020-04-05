import PUIPerFacilityMetadata from './PUIPerFacilityMetadata';
import HealthFacility from './HealthFacility';

interface PUIPerFacility extends Object {
  facility: HealthFacility;
  total: number;
  metadata: PUIPerFacilityMetadata;
}

export default PUIPerFacility;
