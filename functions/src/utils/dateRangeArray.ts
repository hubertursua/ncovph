import moment from 'moment';

export default (start: string, end: string = null): string[] => {
  const arr = [];
  const pointer = moment(start);
  const endPointer = moment(end || new Date());

  while (pointer.valueOf() < endPointer.valueOf()) {
    arr.push(pointer.format('YYYY-MM-DD'));
    pointer.add(1, 'day');
  }

  return arr;
};
