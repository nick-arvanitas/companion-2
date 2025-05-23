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
    <div>
      {/* Company Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Company Name</h1>
                <p className="mt-1 text-sm text-gray-500">Company ID: {id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = location.pathname.endsWith(tab.path);
              return (
                <button
                  key={tab.path}
                  onClick={() => navigate(`/company/${id}/${tab.path}`)}
                  className={`
                    whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium
                    ${
                      isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
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
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default CompanyDetailPage;
