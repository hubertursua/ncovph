import PROVINCES from "../consts/Provinces";
import Province from "../types/Province";

export default function toProvince(str: string): Province | null {
  return PROVINCES.reduce((acc, p) => {
    if (p.name === str) {
      return p.name as Province;
    }

    return acc;
  }, null) as Province | null;
}
