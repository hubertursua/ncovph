import moment from "moment";

export default function toDateDeceased(str: string): Date | null {
  return moment(str, "M/D/YYYY").toDate() || null
}
