import { useContext } from 'react';

import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1

import { Chart } from '../Chart';
import { Context } from '../../App';

import { CHART_CONFIG } from '../../chartData/chart-config';

export const GridCharts = () => {
  const value = useContext(Context);

  const sortByRange = (
    points: Array<Array<number>>,
    start: number,
    end: number
  ) => {
    points.filter((dot: Array<number>) => {
      return start <= dot[0] && dot[0] <= end;
    });
  };

  return (
    <>
      <div
        onClick={() => {
          value.chartsState.map((el) => {
            return sortByRange(
              el.series[0].data,
              CHART_CONFIG.DAY * 2,
              CHART_CONFIG.DAY * 100
            );
          });
        }}
      >
        Click on me
      </div>
      <Grid container>
        {value.chartsState.map((el, ind) => (
          <Grid item xs={12} sm={6} key={ind}>
            <Chart {...el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
