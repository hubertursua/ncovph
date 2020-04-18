export default (str: string): number | null => {
  const val = Number.parseInt(str, 10);

  if (Number.isNaN(val)) {
    return null;
  }

  return val;
};
