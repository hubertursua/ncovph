export default function sanitizeResidence(residence: string | null): string {
  if (residence.trim().toUpperCase() === "NONE") {
    return null;
  }

  if (residence.trim().toUpperCase() === "FOR VALIDATION") {
    return null;
  }

  const trimmed = residence.trim();

  if (trimmed === "Las Pinas City") {
    return "Las Piñas City";
  }

  if (trimmed === "Mandaluyong") {
    return "Mandaluyong City";
  }

  if (trimmed === "Manila") {
    return "Manila City";
  }

  if (trimmed === "Marikina") {
    return "Marikina City";
  }

  return trimmed;
}
