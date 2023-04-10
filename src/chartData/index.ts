import { CHART_CONFIG } from './chart-config';

export interface IChart {
  title: {
    text: string;
  };
  legend: {
    enabled: boolean;
  };
  series: {
    color: string;
    type: string;
    name: string;
    pointInterval?: number;
    pointIntervalUnit?: string;
    pointStart?: number;
    data: number[][];
  }[];
  xAxis: {
    type?: string;
  };
}

let data: Array<Array<number>> = [];

const createCharData = (n: number) => {
  //generate one year dates for chart in interval (0.5,1)
  // data = [];
  // for (let i = 0; i < 100; i++) {
  //   data.push(Math.random() * (1 - 0.5) + 0.5);
  // }

  data = [];
  for (let i = 0; i < 31 * 12 * 10; i++) {
    data = [...data, [CHART_CONFIG.DAY * i, i]];
  }

  return {
    title: { text: `Chart ${n + 1}` },

    legend: {
      enabled: false,
    },

    series: [
      {
        //random color and type
        // color:
        //   CHART_CONFIG.COLORS[
        //     Math.floor(Math.random() * CHART_CONFIG.COLORS.length)
        //   ],
        color: CHART_CONFIG.COLORS[0],
        // type: CHART_CONFIG.TYPES[
        //   Math.floor(Math.random() * CHART_CONFIG.TYPES.length)
        // ],
        type: CHART_CONFIG.TYPES[0],
        name: 'some useful value',
        data: data,
      },
    ],

    xAxis: {
      type: 'datetime',
    },
  };
};

export const charts: Array<IChart> = [];

for (let i = 0; i < 20; i++) {
  charts.push(createCharData(i));
}
