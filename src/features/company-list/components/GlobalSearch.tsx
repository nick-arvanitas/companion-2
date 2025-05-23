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
import { useNavigate } from 'react-router-dom';

// TODO: Figure out logic between search and companypage

export function GlobalSearch({ companies: initialCompanies }: { companies: Company[] }) {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);
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
    <div className="flex flex-col gap-y-6">
      <Select onValueChange={handleCompanySelect} disabled={loading}>
        <SelectTrigger className="w-full bg-white">
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

      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
    </div>
  );
}
