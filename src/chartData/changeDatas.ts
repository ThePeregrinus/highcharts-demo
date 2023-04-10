import { IChart } from '.';
import { ChartContextType } from '../App';

// function return object with filled propierties needed to create a chart
export const changeDatas = (
  value: ChartContextType,
  id: number,
  name: string,
  color: string,
  type: string
) => {
  value.setChartsState(
    value.chartsState.map((el, ind): IChart => {
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
              // pointInterval: el.series[0].pointInterval,
              // pointStart: el.series[0].pointStart,
              data: el.series[0].data,
            },
          ],
          xAxis: {
            type: 'datetime',
          },
        };
      }
    })
  );
};
