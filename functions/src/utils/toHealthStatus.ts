import HealthStatus from '../types/HealthStatus';
import toNullableString from './toNullableString';

export default (str: string): HealthStatus => {
  const val = toNullableString(str);

  if (!val) {
    return HealthStatus.UNKNOWN;
  }

  switch (val.toUpperCase()) {
    case 'ASYMPTOMATIC':
      return HealthStatus.ASYMPTOMATIC;
      break;
    case 'MILD':
      return HealthStatus.MILD;
      break;
    case 'SEVERE':
      return HealthStatus.SEVERE;
      break;
    case 'CRITICAL':
      return HealthStatus.CRITICAL;
      break;
    case 'RECOVERED':
      return HealthStatus.RECOVERED;
      break;
    case 'DIED':
      return HealthStatus.DIED;
      break;
    default:
      return HealthStatus.DIED;
  }
};
