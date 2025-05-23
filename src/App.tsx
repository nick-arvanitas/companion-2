import { Route, Routes } from 'react-router-dom';
import { CompanyList } from './components/CompanyList';
import { MainLayout } from './components/layout/MainLayout';
import { Company } from './pages/company/Company';
import { Completion } from './pages/company/Completion';
import { Documents } from './pages/company/Documents';
import { Finance } from './pages/company/Finance';
import { Insurance } from './pages/company/Insurance';
import { Overview } from './pages/company/Overview';
import { Safety } from './pages/company/Safety';
import { CompanyLayout } from './pages/CompanyLayout';
import { CompanyPage } from './pages/CompanyPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route element={<CompanyLayout />}>
          <Route index element={<CompanyList />} />
          <Route path="company/:id" element={<CompanyPage />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="company" element={<Company />} />
            <Route path="finance" element={<Finance />} />
            <Route path="safety" element={<Safety />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="documents" element={<Documents />} />
            <Route path="completion" element={<Completion />} />
          </Route>
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
