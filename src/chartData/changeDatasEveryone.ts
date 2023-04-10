import { IChart } from '.';
import { ChartContextType } from '../App';

export const changeDatasEveryone = (
  value: ChartContextType,
  id: number,
  data: Array<Array<number>>
) => {
  return {
    title: { text: `${value.chartsState[id].title.text}` },
    legend: {
      enabled: false,
    },

    series: [
      {
        color: value.chartsState[id].series[0].color,
        type: value.chartsState[id].series[0].type,
        name: 'some useful value',
        data: data,
      },
    ],
    xAxis: {
      type: 'datetime',
    },
  };
};
