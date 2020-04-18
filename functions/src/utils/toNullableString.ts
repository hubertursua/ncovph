export default (str: string): string | null => {
  if (!str) {
    return null;
  }

  const val = str.trim();

  if (val === '') {
    return null;
  }


  return str;
};
