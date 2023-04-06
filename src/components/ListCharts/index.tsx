import { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { Context } from '../../App';

export const ListCharts = () => {
  const value = useContext(Context);
  console.log(value.chartsState);
  console.log(123);
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
        {value.chartsState.map((el) => el.title.text)}
      </Grid>
    </Grid>
  );
};
