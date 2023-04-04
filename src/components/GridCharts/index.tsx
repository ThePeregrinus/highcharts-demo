import Grid from '@mui/material/Grid'; // Grid version 1

import { Chart } from '../Chart';
import { listOfCharts } from '../../chartData';

export const GridCharts = () => (
  <Grid container>
    {listOfCharts.map((el) => (
      <Grid xs={12} sm={6} md={3}>
        <Chart {...el} />
      </Grid>
    ))}
  </Grid>
);
