import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCompanies } from '@/lib/api/getCompanies';
import { Company } from '@/types/company';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function CompanyLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const searchCompanies = async () => {
      if (!searchQuery.trim()) {
        setCompanies([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const { data } = await getCompanies();
        setCompanies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchCompanies, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The search will be triggered by the useEffect
  };

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies..."
              className="w-full"
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </form>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        {companies.length > 0 && (
          <div className="mb-6 space-y-4">
            <h2 className="text-xl font-semibold">Search Results</h2>
            <div className="grid gap-4">
              {companies.map((company) => (
                <div
                  key={company.uuid}
                  onClick={() => navigate(`/company/${company.uuid}/overview`)}
                  className="cursor-pointer rounded-lg border p-4 hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{company.displayName}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {company.address.city}, {company.address.state.stateCode}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          company.status === 'CLAIMED'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {company.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
}
