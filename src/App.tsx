import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1

import './App.css';

import { Chart } from './components/Chart';
import { listOfCharts } from './chartData';

function App() {
  return (
    <>
      <Grid container>
        {listOfCharts.map((el) => (
          <Grid xs={12} sm={6} md={3}>
            <Chart {...el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
