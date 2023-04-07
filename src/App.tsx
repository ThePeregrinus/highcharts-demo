import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';

import { Header } from './components/Header';
import { ViewMode } from './pages/VewMode';
import { Setting } from './pages/Settings';
import { charts } from './chartData';

import { IChart } from './chartData';

export interface ChartContextType {
  chartsState: IChart[];
  setChartsState: React.Dispatch<React.SetStateAction<IChart[]>>;
}

export const Context = createContext({} as ChartContextType);

const App = () => {
  const [chartsState, setChartsState] = useState(charts);
  return (
    <>
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
    </>
  );
};

export default App;
