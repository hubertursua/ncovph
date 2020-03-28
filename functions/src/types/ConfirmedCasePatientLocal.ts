import ConfirmedCasePatient from "./ConfirmedCasePatient";
import Location from "./Location";
import Nationality from "./Nationality";
import ConfirmedCasePatientLocalMetadata from "./ConfirmedCasePatientLocalMetadata";

export default interface ConfirmedCasePatientLocal
  extends ConfirmedCasePatient {
  nationality: Nationality;
  residence: Location;
  travel_history: string[];
  symptoms: string[];
  facility: string | null;
  metadata: ConfirmedCasePatientLocalMetadata;
  // petsa?
}
