import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { ViewMode } from './pages/VewMode';
import { Setting } from './pages/Settings';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ViewMode />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </>
  );
};

export default App;
