import Nationality from './Nationality';
import TravelDate from './TravelDate';
import ConfirmedCasePatient from './ConfirmedCasePatient';
import ConfirmedCasePatientForeignNationalMetadata from './ConfirmedCasePatientForeignNationalMetadata';

interface ConfirmedCasePatientForeignNational extends ConfirmedCasePatient {
  nationality: Nationality;
  travel_date: TravelDate;
  travel_history: string[];
  where_now: string;
  metadata: ConfirmedCasePatientForeignNationalMetadata;
}

export default ConfirmedCasePatientForeignNational;
