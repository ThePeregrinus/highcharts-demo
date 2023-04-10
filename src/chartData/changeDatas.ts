import { IChart } from '.';
import { ChartContextType } from '../App';

export const changeDatas = (
  value: ChartContextType,
  id: number,
  name: string,
  color: string,
  type: string
) => {
  return value.chartsState.map((el, ind): IChart => {
    if (id !== ind) {
      return el;
    } else {
      return {
        title: { text: `${name}` },
        legend: {
          enabled: false,
        },

        series: [
          {
            color: color,
            type: type,
            name: 'some useful value',
            data: el.series[0].data,
          },
        ],
        xAxis: {
          type: 'datetime',
        },
      };
    }
  });
};
