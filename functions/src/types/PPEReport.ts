import HealthFacility from './HealthFacility';

interface PPEReport {
  healthFacility: HealthFacility;

  dateReported: string;

  gowns: number;

  gloves: number;

  headCovers: number;

  goggles: number;

  coveralls: number;

  shoeCovers: number;

  faceShields: number;

  surgicalMasks: number;

  n95Masks: number;
}

export default PPEReport;
