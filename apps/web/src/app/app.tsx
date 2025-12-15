import { Routes, Route } from 'react-router-dom';
import { Navigation } from '@heelix-workspace/shared';
import DashboardPage from './pages/DashboardPage';
import FactorAnalysisPage from './pages/FactorAnalysisPage';

export function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/factor-analysis" element={<FactorAnalysisPage />} />
      </Routes>
    </>
  );
}

export default App;

