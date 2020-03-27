import HospitalOwnerType from "../types/HospitalOwnerType"

export default function toHospitalOwnerType(str: string): HospitalOwnerType {
  if (str.toUpperCase() === "GOVT") {
    return HospitalOwnerType.GOVERNMENT;
  } else if (str.toUpperCase() === "PVT") {
    return HospitalOwnerType.PRIVATE;
  }

  throw new Error(str);
}