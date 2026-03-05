import { BrowserRouter, Routes, Route } from 'react-router';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}