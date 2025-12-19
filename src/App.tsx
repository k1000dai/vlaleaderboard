import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Overview, BenchmarkPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="benchmark/:benchmarkId" element={<BenchmarkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
