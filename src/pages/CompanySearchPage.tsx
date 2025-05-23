import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pill } from '@/components/ui/pill';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function CompanySearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <div className="flex h-64 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search companies..."
          />
          <Button type="submit">Search</Button>
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Companies</h2>
        <div className="grid gap-4">
          {filteredCompanies.map((company) => (
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
                <div className="flex gap-2">
                  <Pill variant={company.status === 'active' ? 'success' : 'warning'}>
                    {company.status}
                  </Pill>
                </div>
              </div>
              <div className="mt-2 flex gap-2"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
