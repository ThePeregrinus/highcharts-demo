import { useContext, useState } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Chart } from '../Chart';
import { Context } from '../../App';
import { CHART_CONFIG } from '../../chartData/chartConfig';

import { changeDataSort } from '../../chartData/changeDataSort';

import { IChart } from '../../chartData';

export const GridCharts = () => {
  const value = useContext(Context);

  interface IStep {
    start: Dayjs;
    end: Dayjs;
  }

  const [step, setStep] = useState<IStep>({
    start: dayjs('1970.01.11'),
    end: dayjs('1970.05.23'),
  });

  const sortByRange = (
    points: Array<Array<number>>,
    start: number,
    end: number
  ) => {
    return points.filter((dot: Array<number>) => {
      return start <= dot[0] && dot[0] <= end;
    });
  };

  return (
    <>
      <Grid container p={2}>
        {value.chartsState.length ? (
          <Grid item xs={12} sm={12}>
            <DatePicker
              value={step.start}
              minDate={CHART_CONFIG.START_DEFAULT}
              maxDate={CHART_CONFIG.END_DEFAULT}
              onChange={(el: Dayjs | null) => {
                if (el) {
                  setStep({ start: el, end: step.end });
                }
              }}
            />

            <DatePicker
              value={step.end}
              minDate={CHART_CONFIG.START_DEFAULT}
              maxDate={CHART_CONFIG.END_DEFAULT}
              onChange={(el) => {
                if (el) {
                  setStep({ start: step.start, end: el });
                }
              }}
            />
          </Grid>
        ) : (
          <></>
        )}

        {value.chartsState.map((el: IChart, ind: number) => (
          <Grid item xs={12} sm={6} key={ind}>
            <Chart
              {...changeDataSort(
                value.chartsState[ind],
                sortByRange(
                  el.series[0].data,
                  step.start.valueOf(),
                  step.end.valueOf()
                )
              )}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
