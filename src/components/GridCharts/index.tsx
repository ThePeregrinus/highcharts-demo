import { useContext } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1

import { Chart } from '../Chart';
import { Context } from '../../App';
import { CHART_CONFIG } from '../../chartData/chart-config';

import { changeDatas } from '../../chartData/changeDatas';
import { changeDatasEveryone } from '../../chartData/changeDatasEveryone';

export const GridCharts = () => {
  const value = useContext(Context);

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
      <div
        onClick={() => {
          console.log(
            value.setChartsState(
              value.chartsState.map((el, ind) =>
                changeDatasEveryone(
                  value,
                  ind,
                  sortByRange(
                    el.series[0].data,
                    CHART_CONFIG.DAY * 20,
                    CHART_CONFIG.DAY * 100
                  )
                )
              )
            )
          );
        }}
      >
        betwen 20's and 100's days
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
