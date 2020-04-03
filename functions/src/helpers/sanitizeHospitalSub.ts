export default function sanitizeHospitalSub(str: string): string | null {
  if (str === null) {
    return null;
  }

  const sanitized = str.trim();

  return (sanitized) || null;
}
