import { GlobalSearch } from '@/features/company-list/components/GlobalSearch';
import { getCompanies } from '@/lib/api/getCompanies';
import { Company } from '@/types/company';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export function CompanyLayout() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data } = await getCompanies();
      setCompanies(data);
    };

    fetchCompanies();
  }, []);
  return (
    <div className="flex flex-col gap-y-6">
      <div className="border-b bg-zinc-50 py-5">
        <div className="container mx-auto px-4">
          <GlobalSearch companies={companies} />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Outlet context={{ companies }} />
      </div>
    </div>
  );
}
