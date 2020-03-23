import Countries from '../consts/Countries';

export default function getStandardizedCountry(value: string): string | null {
  if (value === "Korea") {
    return "South Korea";
  }

  if (value === "UK" || value === "London") {
    return "United Kingdom";
  }

  if (value === "UAE" || value === "Dubai") {
    return "United Arab Emirates";
  }

  if (value === "America" || value === "US" || value === "USA") {
    return "United States of America";
  }

  return Countries.reduce((accumulator, country) => {
    if (value === country) {
      return country;
    }

    return accumulator;
  }, null);
}
