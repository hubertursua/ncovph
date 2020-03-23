import { snakeCase } from 'snake-case';
import { Nationality } from '../types/Nationality';

export default function toNationality(nationality: string): Nationality | null {
  return Nationality[snakeCase(nationality).toUpperCase()] || null;
}
