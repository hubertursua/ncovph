import Country from '../types/Country';
import Countries from '../consts/Countries';

export default function toCountry(country: string): Country | null {
  const match = Countries.find((c) => c === country);

  if (match) {
    return match;
  }

  if (country === 'Hongkong') {
    return 'Hong Kong';
  }

  if (country.startsWith('USA ')) {
    return 'United States of America';
  }

  if (country.startsWith('Japan ')) {
    return 'Japan';
  }

  return null;
}
