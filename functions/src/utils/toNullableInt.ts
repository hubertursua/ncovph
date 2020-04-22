export default (str: string | number): number | null => {
  if (str === null) {
    return null;
  }

  const val = (typeof str === 'number')
    ? str.toString()
    : str.replace(',', '').trim();

  if (val === '') {
    return null;
  }

  return parseInt(val, 10);
};
