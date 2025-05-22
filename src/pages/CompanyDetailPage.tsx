import React from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

const CompanyDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Overview', path: 'overview' },
    { name: 'Finance', path: 'finance' },
    { name: 'Safety', path: 'safety' },
    { name: 'Insurance', path: 'insurance' },
    { name: 'Documents', path: 'documents' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Company Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">Company Name</h1>
            <p className="mt-1 text-sm text-gray-500">Company ID: {id}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = location.pathname.endsWith(tab.path);
              return (
                <button
                  key={tab.path}
                  onClick={() => navigate(`/company/${id}/${tab.path}`)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${isActive
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default CompanyDetailPage;
