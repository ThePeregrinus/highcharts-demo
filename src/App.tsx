import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ViewMode } from './pages/VewMode';

import { GridCharts } from './components/GridCharts';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;
