import toHospital from './toHospital';
import LatLng from '../types/LatLng';

export default function toFacilityCoordinates(
  facilityName: string,
  lat: number,
  lng: number,
): LatLng {
  const hospital = toHospital(facilityName);

  if (hospital) {
    return hospital.coordinates;
  }

  return { lat, lng } as LatLng;
}
