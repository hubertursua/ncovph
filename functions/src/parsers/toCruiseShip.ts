export default function toCruiseShip(str: string): string | null {
  if (str.includes('M/V Diamond Princess')) {
    return "M/V Diamond Princess";
  }

  if (str.includes('M/V Grand Princess')) {
    return "M/V Grand Princess";
  }

  return null;
}
