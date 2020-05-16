import moment from 'moment';

export const INPUT_FORMAT_CASE_INFORMATION = 'YYYY-MM-DD';
export const INPUT_FORMAT_TESTING_AGGREGATES = 'MMMM D, YYYY';
export const OUTPUT_FORMAT = 'YYYY-MM-DD';

export default (str: string, format: string): string | null => {
  if (!moment(str, format, true).isValid()) {
    return null;
  }

  return moment(str, format, true).format(OUTPUT_FORMAT);
};
