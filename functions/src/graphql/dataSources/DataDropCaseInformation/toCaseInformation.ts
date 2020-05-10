import CaseInformation from '../../../types/CaseInformation';
import toAge from '../../../utils/toAge';
import toBoolean from '../../../utils/toBoolean';
import toCity from '../../../utils/toCity';
import toDate, { INPUT_FORMAT_CASE_INFORMATION } from '../../../utils/toDate';
import toHealthStatus from '../../../utils/toHealthStatus';
import toNullableString from '../../../utils/toNullableString';
import toProvince from '../../../utils/toProvince';
import toQuarantined from '../../../utils/toQuarantined';
import toRegion from '../../../utils/toRegion';
import toRemovalType from '../../../utils/toRemovalType';
import toSex from '../../../utils/toSex';

export default (d: string[]): CaseInformation => ({
  caseNumber: toNullableString(d[0]),
  age: toAge(d[1]),
  sex: toSex(d[3]),
  dateReportConfirmed: toDate(d[4], INPUT_FORMAT_CASE_INFORMATION),
  dateRecovery: toDate(d[6], INPUT_FORMAT_CASE_INFORMATION),
  dateDeath: toDate(d[5], INPUT_FORMAT_CASE_INFORMATION),
  removalType: toRemovalType(d[7]),
  dateReportRemoved: toDate(d[8], INPUT_FORMAT_CASE_INFORMATION),
  admitted: toBoolean(d[9]),
  residence: {
    region: toRegion(toNullableString(d[10])),
    province: toProvince(toNullableString(d[11])),
    city: toCity(toNullableString(d[12])),
  },
  healthStatus: toHealthStatus(d[14]),
  didHomeQuarantine: toQuarantined(d[15]),
});
