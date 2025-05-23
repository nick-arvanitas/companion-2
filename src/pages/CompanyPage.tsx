import TabNavigation from '@/components/layout/TabNavigation';
import { Button } from '@/components/ui/button';
import { Company } from '@/types/company';
import { ExternalLinkIcon } from 'lucide-react';
import React from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';

const CompanyPage: React.FC = () => {
  const { id } = useParams();
  const { companies } = useOutletContext<{ companies: Company[] }>();

  const company = companies.find((company) => company.uuid === id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      {/* Company Header */}

      <div className="flex items-center gap-x-2">
        <h1 className="block w-full text-2xl font-bold text-zinc-900">{company.displayName}</h1>
        <Button variant="ghost" color="primary" size="sm">
          View in Highwire
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <TabNavigation />
      {/* Page Content */}
      <main>
        <Outlet context={{ company }} />
      </main>
    </div>
  );
};

export default CompanyPage;
