import Grid from '@mui/material/Grid'; // Grid version 1

import { Chart } from '../Chart';
import { charts } from '../../chartData';

export const GridCharts = () => (
  <Grid container>
    {charts.map((el) => (
      <Grid xs={12} sm={6}>
        <Chart {...el} />
      </Grid>
    ))}
  </Grid>
);
