import dateRecovered from "./dateRecovered";
import dateDeceased from "./dateDeceased";
import PatientStatus from "../../types/PatientStatus";

export default function status(original: string | null, PH_masterl: string): string | null {
  const dateRec = dateRecovered(PH_masterl)
  const dateDec = dateDeceased(PH_masterl)

  if (dateDec) {
    return PatientStatus.DECEASED;
  }

  if (dateRec) {
    return PatientStatus.RECOVERED;
  }

  return original;
}
