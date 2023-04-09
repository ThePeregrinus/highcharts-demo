import { useContext } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1

import { Chart } from '../Chart';
import { Context } from '../../App';

export const GridCharts = () => {
  const value = useContext(Context);

  return (
    <Grid container>
      {value.chartsState.map((el, ind) => (
        <Grid xs={12} sm={6} key={ind}>
          <Chart {...el} />
        </Grid>
      ))}
    </Grid>
  );
};
