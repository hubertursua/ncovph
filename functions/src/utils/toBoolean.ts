export default (str: string): boolean => {
  const val = str.toUpperCase().trim();

  if (['TRUE', 'YES', 'T', 'Y'].includes(val)) {
    return true;
  }

  return false;
};
