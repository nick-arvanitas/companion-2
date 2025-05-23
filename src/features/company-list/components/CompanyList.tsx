import { Company } from '@/types/company';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function CompanyList() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/bd98199e-f71c-4656-b90f-8b0ea582ae61'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Companies</h2>
      <div className="grid gap-4">
        {companies.map((company) => (
          <Link
            key={company.uuid}
            to={`/company/${company.uuid}/overview`}
            className="block cursor-pointer rounded-lg border p-4 hover:bg-zinc-50"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{company.displayName}</h3>
              </div>
              <div className="flex gap-2"></div>
            </div>
            <div className="mt-2 flex gap-2"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
