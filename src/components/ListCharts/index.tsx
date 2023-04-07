import { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { Context } from '../../App';

export const ListCharts = () => {
  const value = useContext(Context);

  const deleteByIndex = (index: number) => {
    console.log(value);
    value.setChartsState((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      {value.chartsState.map((el, id) => (
        <Grid
          item
          onClick={() => deleteByIndex(id)}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {el.title.text}
        </Grid>
      ))}
    </Grid>
  );
};
