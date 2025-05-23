import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CompanyList() {
  interface Company {
    companyId: string;
    companyName: string;
    displayName: string;
    companySummary: {
      summary: string;
      summaryMeta: string;
    };
    status: string;
    awards: {
      safetyBadge: number;
      financeBadge: number;
    };
  }

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
            key={company.companyId}
            to={`/company/${company.companyId}/overview`}
            className="block cursor-pointer rounded-lg border p-4 hover:bg-gray-50"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{company.displayName}</h3>
                <p className="mt-1 text-sm text-gray-600">{company.companySummary.summary}</p>
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
