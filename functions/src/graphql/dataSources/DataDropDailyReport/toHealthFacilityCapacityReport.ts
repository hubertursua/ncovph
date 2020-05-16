import HealthFacilityCapacityReport from '../../../types/HealthFacilityCapacityReport';
import toDate, { INPUT_FORMAT_DAILY_REPORT } from '../../../utils/toDate';
import toNullableInt from '../../../utils/toNullableInt';
import toNullableString from '../../../utils/toNullableString';

export default (d: string[]): HealthFacilityCapacityReport => {
  const icuVacant = toNullableInt(d[6]);
  const icuOccupied = toNullableInt(d[7]);
  const isolationBedsVacant = toNullableInt(d[8]);
  const isolationBedsOccupied = toNullableInt(d[9]);
  const wardBedsVacant = toNullableInt(d[10]);
  const wardBedsOccupied = toNullableInt(d[11]);
  const mechVentilatorsVacant = toNullableInt(d[12]);
  const mechVentilatorsOccupied = toNullableInt(d[13]);

  return {
    healthFacility: {
      code: toNullableString(d[0]),
      name: toNullableString(d[2]),
    },
    dateReported: toDate(d[5], INPUT_FORMAT_DAILY_REPORT),
    icuVacant,
    icuOccupied,
    isolationBedsVacant,
    isolationBedsOccupied,
    wardBedsVacant,
    wardBedsOccupied,
    mechVentilatorsVacant,
    mechVentilatorsOccupied,
  };
};
