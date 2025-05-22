import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search'
import MainLayout from './components/layout/MainLayout'
import CompanyDetailsPage from './features/companyDetails/pages/CompanyDetailsPage'

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/company/:companyId" element={<CompanyDetailsPage />} />
        <Route path="/names"  />
      </Routes>
    </MainLayout>
  )
}

export default App
