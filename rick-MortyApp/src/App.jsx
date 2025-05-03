import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Imgs from './pages/imgs';
import CharDetails from './pages/charDetails';
import FnClock from './components/fclock';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Imgs />} />
        <Route path="/character/:id" element={<CharDetails />} />
      </Routes>
      <FnClock />
    </BrowserRouter>
  );
}

export default App;
