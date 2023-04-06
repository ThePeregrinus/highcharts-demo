import { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { Context } from '../../App';

export const ListCharts = () => {
  const value = useContext(Context);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <h1>{value.chartState[0].title.text}</h1>
      </Grid>
    </Grid>
  );
};
