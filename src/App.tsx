import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';

import { Header } from './components/Header';
import { ViewMode } from './pages/VewMode';
import { Setting } from './pages/Settings';
import { charts } from './chartData';

export const Context = createContext({});

const App = () => {
  const [chartState, setChartState] = useState(charts);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Context.Provider value={{ chartState, setChartState }}>
              <ViewMode />
            </Context.Provider>
          }
        />
        <Route
          path="/settings"
          element={
            <Context.Provider value={{ chartState, setChartState }}>
              <Setting />
            </Context.Provider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
