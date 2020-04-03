import toLocation from './toLocation';
import sanitizeResidence from '../helpers/sanitizeResidence';
import Residence from '../types/Residence';

export default function toResidence(residence: string | null): Residence {
  const sanitized = sanitizeResidence(residence);

  if (!sanitized) {
    return null;
  }

  if (sanitized.toUpperCase() === 'CHINA') {
    return null;
  }

  return toLocation(sanitized);
}
