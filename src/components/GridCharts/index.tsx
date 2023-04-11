import { useContext, useEffect, useState, useRef } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1

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
  const [step, setStep] = useState<IStep | undefined>(undefined);

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
    setStep({ start: CHART_CONFIG.DAY * 80, end: CHART_CONFIG.DAY * 100 });
  };

  return (
    <>
      <div
        onClick={() => {
          console.log(step);
          handleSort();
        }}
      >
        click me
      </div>

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
