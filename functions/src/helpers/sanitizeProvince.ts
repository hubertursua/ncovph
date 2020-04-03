export default function sanitizeProvince(str: string): string | null {
  if (str === null) {
    return null;
  }

  let province = str.trim();

  if (!province) {
    return null;
  }

  if (province.includes(',')) {
    province = province.split(',')[1].trim();
  }

  return province;
}
