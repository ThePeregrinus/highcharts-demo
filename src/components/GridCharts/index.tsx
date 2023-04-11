import { useContext, useEffect, useState, useRef } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1
import dayjs, { Dayjs } from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
    start: number;
    end: number;
  }

  const [switchSort, setSwitchSort] = useState(0);
  const [step, setStep] = useState<IStep>({
    start: CHART_CONFIG.DAY * 80,
    end: CHART_CONFIG.DAY * 100,
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

  const handleSort = () => {
    setStep({ start: CHART_CONFIG.DAY * 30, end: CHART_CONFIG.DAY * 70 });
  };

  return (
    <>
      <div
        onClick={() => {
          console.log(step);
          // handleSort();
        }}
      >
        click me
      </div>
      <DatePicker
        minDate={dayjs('1970.01.01')}
        maxDate={dayjs('1980.01.01')}
        onChange={(el: Dayjs | null) => {
          if (el) {
            setStep({ start: el.valueOf(), end: step.end });
            //console.log(el.valueOf());
          }
        }}
      />
      <DatePicker
        minDate={dayjs('1970.01.01')}
        maxDate={dayjs('1980.01.01')}
        onChange={(el) => {
          if (el) {
            setStep({ start: step.start, end: el.valueOf() });
            //console.log(el.valueOf());
          }
        }}
      />
      <Grid container>
        {value.chartsState.map((el: IChart, ind: number) => (
          <Grid item xs={12} sm={6} key={ind}>
            <Chart
              {...changeDatasEveryone(
                value.chartsState[ind],
                sortByRange(
                  el.series[0].data,
                  step ? step.start : CHART_CONFIG.START_DEFAULT,
                  step ? step.end : CHART_CONFIG.END_DEFAULT
                )
              )}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
