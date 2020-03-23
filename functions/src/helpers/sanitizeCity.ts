export default function sanitizeCity(str: string): string {
  let city = str.trim();

  if (city === "Valenzuela") {
    city = "Valenzuela City";
  }

  return city;
}
