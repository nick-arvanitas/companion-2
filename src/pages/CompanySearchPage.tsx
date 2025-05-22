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
        const response = await fetch('https://run.mocky.io/v3/bd98199e-f71c-4656-b90f-8b0ea582ae61');
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

  const filteredCompanies = companies.filter(company => 
    company.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-red-500 text-center">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search companies..."
          />
          <Button type="submit">
            Search
          </Button>
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Companies</h2>
        <div className="grid gap-4">
          {filteredCompanies.map((company) => (
            <Link 
              key={company.companyId}
              to={`/company/${company.companyId}/overview`}
              className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 block"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{company.displayName}</h3>
                  <p className="text-sm text-gray-600 mt-1">{company.companySummary.summary}</p>
                </div>
                <div className="flex gap-2">
                  <Pill variant={company.status === 'active' ? 'success' : 'warning'}>
                    {company.status}
                  </Pill>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
