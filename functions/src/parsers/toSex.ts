import { snakeCase } from "snake-case";
import Sex from "../types/Sex";

export default function toSex(sex: string): Sex {
  return Sex[snakeCase(sex).toUpperCase()];
}
