export default function toCruiseShip(str: string): string | null {
  if (str.includes('M/V Diamond Princess') || str.includes('Diamond Princess Cruise Ship')) {
    return "M/V Diamond Princess";
  }

  if (str.includes('M/V Grand Princess') || str.includes('Grand Princess Cruise Ship')) {
    return "M/V Grand Princess";
  }

  return null;
}
