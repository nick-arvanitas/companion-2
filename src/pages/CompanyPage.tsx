import TabNavigation from '@/components/layout/TabNavigation';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const CompanyPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      {/* Company Header */}

      <div className="py-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">Company Name</h1>
          <p className="mt-1 text-sm text-gray-500">Company ID: {id}</p>
        </div>
      </div>
      <TabNavigation />
      {/* Page Content */}
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default CompanyPage;
