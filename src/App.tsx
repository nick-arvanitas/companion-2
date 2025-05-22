import { Routes, Route } from 'react-router-dom';
import{ CompanySearchPage } from './pages/CompanySearchPage'
import MainLayout from './components/layout/MainLayout'
import { CompanyDetailPage } from './pages/CompanyDetailPage';

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<CompanySearchPage />} />
        <Route path="/company/:id" element={<CompanyDetailPage onCompanyClick={() => {}} />} />
      </Routes>
    </MainLayout>
  )
}

export default App
