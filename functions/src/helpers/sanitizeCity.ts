export default function sanitizeCity(str: string): string | null {
  if (str === null) {
    return null;
  }

  let city = str.trim();

  if (city.includes(',')) {
    city = city.split(',').shift().trim();
  }

  if (city.toUpperCase().startsWith('CITY OF ')) {
    city = `${city.substring(8)} City`;
  }

  if (str.includes('City of Manila')) {
    city = 'Manila City';
  }

  if (city === 'Manila') {
    city = 'Manila City';
  }

  if (city === 'Malabon') {
    city = 'Malabon City';
  }

  if (city === 'Mandaluyong') {
    city = 'Mandaluyong City';
  }

  if (city === 'Marikina') {
    city = 'Marikina City';
  }

  if (city === 'Caloocan') {
    city = 'Caloocan City';
  }

  if (city === 'Valenzuela') {
    city = 'Valenzuela City';
  }

  if (city === 'Las Pi�as City') {
    city = 'Las Piñas City';
  }

  if (city === 'Para�aque City') {
    city = 'Parañaque City';
  }

  if (city === 'Jala-Jala') {
    city = 'Jalajala';
  }

  if (city === 'Sultan Kudarat') {
    city = 'Sultan Kudarat (Nuling)';
  }

  if (city === 'General  Santos City') {
    city = 'General Santos (Dadiangas) City';
  }

  return city;
}
