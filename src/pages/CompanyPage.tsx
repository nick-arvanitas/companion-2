import { NavBar } from '@/components/layout/NavBar';
import { Button } from '@/components/ui/button';
import { Company } from '@/types/company';
import { ExternalLinkIcon } from 'lucide-react';
import React from 'react';
import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';

export const CompanyPage: React.FC = () => {
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
        {/* This will link to app2  */}
        <Link to={`https://network.highwire.com/company/90961766-ea9d-495c-a186-1dcb0a1f7026`}>
          <Button variant="ghost" color="primary" size="sm">
            View in Highwire
            <ExternalLinkIcon className="size-4" />
          </Button>
        </Link>
      </div>
      <NavBar />
      {/* Page Content */}
      <main>
        <Outlet context={{ company }} />
      </main>
    </div>
  );
};
