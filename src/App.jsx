import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlanetDetail from './pages/Planet-detail';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        For detail pages of each planet:
        <Route path="/:planet" element={<PlanetDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  );
}

export default App;
