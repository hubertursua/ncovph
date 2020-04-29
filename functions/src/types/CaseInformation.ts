import HealthStatus from './HealthStatus';
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
  isQuarantined: QuarantineStatus;
}

export default CaseInformation;
