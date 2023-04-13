import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Header } from './components/Header';
import { ViewMode } from './pages/VewMode';
import { Setting } from './pages/Settings';
import { charts } from './chartData';

import { ChartContextType } from './interfaces/ChartContextType';

export const Context = createContext({} as ChartContextType);

const App = () => {
  const [chartsState, setChartsState] = useState(charts);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Context.Provider value={{ chartsState, setChartsState }}>
                <ViewMode />
              </Context.Provider>
            }
          />
          <Route
            path="/settings"
            element={
              <Context.Provider value={{ chartsState, setChartsState }}>
                <Setting />
              </Context.Provider>
            }
          />
        </Routes>
      </LocalizationProvider>
    </>
  );
};

export default App;
