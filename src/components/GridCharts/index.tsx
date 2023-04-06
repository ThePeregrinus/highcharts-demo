import { useContext } from 'react';

import Grid from '@mui/material/Grid'; // Grid version 1

import { Chart } from '../Chart';
import { Context } from '../../App';

export const GridCharts = () => {
  const value = useContext(Context);

  return (
    <Grid container>
      {value.chartsState.map((el) => (
        <Grid xs={12} sm={6}>
          <Chart {...el} />
        </Grid>
      ))}
    </Grid>
  );
};
