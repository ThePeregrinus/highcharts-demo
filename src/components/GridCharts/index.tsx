import { useContext, useEffect, useState, useRef } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Chart } from '../Chart';
import { Context } from '../../App';
import { CHART_CONFIG } from '../../chartData/chart-config';

import { changeDatas } from '../../chartData/changeDatas';
import { changeDatasEveryone } from '../../chartData/changeDatasEveryone';

import { IChart } from '../../chartData';

export const GridCharts = () => {
  const value = useContext(Context);

  interface IStep {
    start: Dayjs;
    end: Dayjs;
  }

  const [isEmpty, setIsEmpty] = useState(false);
  const [step, setStep] = useState<IStep>({
    start: CHART_CONFIG.START_DEFAULT,
    end: CHART_CONFIG.END_DEFAULT,
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
        {isEmpty ? (
          <></>
        ) : (
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
        )}

        {value.chartsState.map((el: IChart, ind: number) => (
          <Grid item xs={12} sm={6} key={ind}>
            <Chart
              {...changeDatasEveryone(
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
