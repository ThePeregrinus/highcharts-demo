import dayjs, { Dayjs } from 'dayjs';

export const CHART_CONFIG = {
  COLORS: [
    '#2f7ed8',
    '#0d233a',
    '#8bbc21',
    '#910000',
    '#1aadce',
    '#492970',
    '#f28f43',
    '#77a1e5',
    '#c42525',
    '#a6c96a',
  ],
  TYPES: ['line', 'spline', 'area'],
  DAY: 24 * 3600 * 1000,
  START_DEFAULT: dayjs('1970.01.01'),
  END_DEFAULT: dayjs('1980.01.01'),
};
