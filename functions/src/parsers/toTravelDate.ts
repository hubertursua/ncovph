import moment from 'moment';
import TravelDate from '../types/TravelDate';

export default function toTravelDate(str: string): TravelDate {
  let arrival: Date;
  let departure: Date;

  if (!str.includes('-')) {
    arrival = moment(new Date(str)).toDate();
    departure = arrival;
  } else {
    const parts = str
      .toUpperCase()
      .split('-')
      .map((p) => p.trim());

    arrival = moment(new Date(parts[0])).toDate(); // Assumes year is 2020
    const months = moment.monthsShort().map((m) => m.toUpperCase());

    if (months.includes(parts[1].substring(0, 3))) {
      departure = moment(new Date(parts[1])).toDate();
    } else {
      departure = moment(new Date(`${parts[0].split(' ').shift()} ${parts[1]}`)).toDate();
    }
  }

  return {
    arrival,
    departure,
  } as TravelDate;
}


/*
February 21-28, 2020
February 28-March 3, 2020
February 12-March 2, 2020
February 20-28, 2020
March 1-3, 2020
January 1-February 28, 2020
March 2-8, 2020
March 12-13, 2020

March 11, 2020

---

February 21-28, 2020
February 28 - March 3, 2020
February 12 - March 2, 2020
February 20-28, 2020
March 1-3, 2020
January 1 - February 28, 2020
March 2 - 8, 2020
March 12-13, 2020
March 11, 2020
*/
