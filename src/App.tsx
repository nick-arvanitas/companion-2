import { Route, Routes } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import MainLayout from './components/layout/MainLayout';
import Completion from './pages/company/Completion';
import CompanyDocuments from './pages/company/Documents';
import CompanyFinance from './pages/company/Finance';
import CompanyInsurance from './pages/company/Insurance';
import CompanyOverview from './pages/company/Overview';
import CompanySafety from './pages/company/Safety';
import CompanyLayout from './pages/CompanyLayout';
import CompanyPage from './pages/CompanyPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route element={<CompanyLayout />}>
          <Route index element={<CompanyList />} />
          <Route path="company/:id" element={<CompanyPage />}>
            <Route index element={<CompanyOverview />} />
            <Route path="overview" element={<CompanyOverview />} />
            <Route path="finance" element={<CompanyFinance />} />
            <Route path="safety" element={<CompanySafety />} />
            <Route path="insurance" element={<CompanyInsurance />} />
            <Route path="documents" element={<CompanyDocuments />} />
            <Route path="completion" element={<Completion />} />
          </Route>
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
