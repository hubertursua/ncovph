import moment from 'moment';

export const INPUT_FORMAT = 'M/D/YYYY';
export const OUTPUT_FORMAT = 'YYYY-MM-DD';

export default (str: string): string | null => {
  if (!moment(str, INPUT_FORMAT, true).isValid()) {
    return null;
  }

  return moment(str, INPUT_FORMAT, true).format(OUTPUT_FORMAT);
};
