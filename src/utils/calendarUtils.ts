import { format } from 'date-fns';

export const Month_Names_Full = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const Month_Names_Short = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const Weekday_Names_Short = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export const CalendarUtils = {
  getMonthNamesShort: (local: Locale): string[] => {
    const monthNamesShort: string[] = [];

    for (let i = 0; i < 12; i++) {
      monthNamesShort.push(format(new Date(2024, i, 1), 'LLL', { locale: local }));
    }

    return monthNamesShort;
  },
  getWeekdayNamesShort: (local: Locale): string[] => {
    const weekdayNamesShort: string[] = [];

    for (let i = 0; i < 7; i++) {
      weekdayNamesShort.push(format(new Date(2024, 0, i), 'EEE', { locale: local }));
    }

    return weekdayNamesShort;
  },
}
