export default (str: string): string => str.replace(/\s\([A-Za-z0-9\-\s]+\)$/, '').trim();
