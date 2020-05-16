import HealthFacility from './HealthFacility';

interface HealthFacilityCapacityReport {
  healthFacility: HealthFacility;

  dateReported: string;

  icuVacant: number;

  icuOccupied: number;

  isolationBedsVacant: number;

  isolationBedsOccupied: number;

  wardBedsVacant: number;

  wardBedsOccupied: number;

  mechVentilatorsVacant: number;

  mechVentilatorsOccupied: number;
}

export default HealthFacilityCapacityReport;
