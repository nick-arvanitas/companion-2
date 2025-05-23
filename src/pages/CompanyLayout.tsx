import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCompanies } from '@/lib/api/getCompanies';
import { Company } from '@/types/company';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function CompanyLayout() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
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

    fetchCompanies();
  }, []);

  const handleCompanySelect = (value: string) => {
    navigate(`/company/${value}/overview`);
  };

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-6">
        <div className="mb-6">
          <Select onValueChange={handleCompanySelect} disabled={loading}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a company..." />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company.uuid} value={company.uuid}>
                  <span>{company.displayName}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <Outlet context={{ companies }} />
      </div>
    </div>
  );
}
