import PPEReport from '../../../types/PPEReport';
import toDate, { INPUT_FORMAT_WEEKLY_REPORT } from '../../../utils/toDate';
import toNullableInt from '../../../utils/toNullableInt';
import toNullableString from '../../../utils/toNullableString';

export default (d: string[]): PPEReport => {
  const gowns = toNullableInt(d[6]);
  const gloves = toNullableInt(d[7]);
  const headCovers = toNullableInt(d[8]);
  const goggles = toNullableInt(d[9]);
  const coveralls = toNullableInt(d[10]);
  const shoeCovers = toNullableInt(d[11]);
  const faceShields = toNullableInt(d[12]);
  const surgicalMasks = toNullableInt(d[13]);
  const n95Masks = toNullableInt(d[14]);

  return {
    healthFacility: {
      code: toNullableString(d[0]),
      name: toNullableString(d[2]),
    },
    dateReported: toDate(d[5], INPUT_FORMAT_WEEKLY_REPORT),
    gowns,
    gloves,
    headCovers,
    goggles,
    coveralls,
    shoeCovers,
    faceShields,
    surgicalMasks,
    n95Masks,
  };
};
