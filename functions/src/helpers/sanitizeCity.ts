export default function sanitizeCity(str: string): string {
  let city = str.trim();

  if (city === "Valenzuela") {
    city = "Valenzuela City";
  }

  if (city === "Las Pi�as City") {
    city = "Las Piñas City";
  }

  return city;
}
