export default function sanitizeCity(str: string): string {
  let city = str.trim();

  if (city.includes(", ")) {
    city = city.split(", ").shift().trim();
  }

  if (city.toUpperCase().startsWith('CITY OF ')) {
    city = `${city.substring(8)} City`;
  }

  if (city === "Valenzuela") {
    city = "Valenzuela City";
  }

  if (city === "Las Pi�as City") {
    city = "Las Piñas City";
  }

  if (city === "Para�aque City") {
    city = "Parañaque City";
  }

  if (city === "Jala-Jala") {
    city = "Jalajala";
  }

  return city;
}
