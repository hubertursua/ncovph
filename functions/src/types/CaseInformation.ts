import HealthStatus from './HealthStatus';
import PregnancyStatus from './PregnancyStatus';
import QuarantineStatus from './QuarantineStatus';
import RemovalType from './RemovalType';
import Sex from './Sex';

interface CaseInformation {
  caseNumber: string;
  age: number;
  sex: Sex;
  dateReportConfirmed: string;
  dateRecovery?: string;
  dateDeath?: string;
  removalType?: RemovalType;
  dateReportRemoved: string;
  admitted: boolean;
  residence: {
    region?: string;
    province?: string;
    city?: string;
  };
  healthStatus: HealthStatus;
  didHomeQuarantine: QuarantineStatus;
  dateOnsetSymptoms: string;
  isPregnant: PregnancyStatus;
}

export default CaseInformation;
