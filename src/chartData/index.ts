import { CHART_CONFIG } from './chart-config';
let data: Array<number> = [];

const createCharData = (n: number) => {
  //generate one year dates for chart in interval (0.5,1)
  data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Math.random() * (1 - 0.5) + 0.5);
  }

  return {
    title: { text: `Chart ${n + 1}` },
    legend: {
      enabled: false,
    },

    series: [
      {
        //random color and type
        color:
          CHART_CONFIG.COLORS[
            Math.floor(Math.random() * CHART_CONFIG.COLORS.length)
          ],
        type: CHART_CONFIG.TYPES[
          Math.floor(Math.random() * CHART_CONFIG.TYPES.length)
        ],
        name: 'some useful value',
        pointInterval: 24 * 3600 * 1000,
        //pointIntervalUnit: 'month',
        pointStart: Date.UTC(1970, 0, 1),
        data: data,
      },
    ],
    xAxis: {
      type: 'datetime',
    },
  };
};

export const charts: Array<any> = [];

for (let i = 0; i < 20; i++) {
  charts.push(createCharData(i));
}
