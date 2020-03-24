export default function toRemarks(remarks: string | null): string | null {
  if (remarks === null) {
    return remarks;
  }

  const trimmed = remarks.trim();

  if (!trimmed) {
    return null;
  }

  return trimmed;
}
