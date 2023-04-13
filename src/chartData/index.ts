import { CHART_CONFIG } from './chartConfig';
import { IChart } from '../interfaces/IChart';

let data: Array<Array<number>> = [];

const createCharData = (n: number) => {
  //generate one year dates for chart in interval (0.5,1)
  data = [];
  for (let i = 0; i < 31 * 12; i++) {
    data = [...data, [CHART_CONFIG.DAY * i, Math.random() * (1 - 0.5) + 0.5]];
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
