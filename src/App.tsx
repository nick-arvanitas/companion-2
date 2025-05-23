import { Routes, Route } from 'react-router-dom';
import CompanySearchPage from './pages/CompanySearchPage';
import MainLayout from './components/layout/MainLayout';
import CompanyDetailPage from './pages/CompanyDetailPage';
import CompanyOverview from './pages/company/Overview';
import CompanyFinance from './pages/company/Finance';
import CompanySafety from './pages/company/Safety';
import CompanyInsurance from './pages/company/Insurance';
import CompanyDocuments from './pages/company/Documents';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<CompanySearchPage />} />
        <Route path="/company/:id" element={<CompanyDetailPage />}>
          <Route index element={<CompanyOverview />} />
          <Route path="overview" element={<CompanyOverview />} />
          <Route path="finance" element={<CompanyFinance />} />
          <Route path="safety" element={<CompanySafety />} />
          <Route path="insurance" element={<CompanyInsurance />} />
          <Route path="documents" element={<CompanyDocuments />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
