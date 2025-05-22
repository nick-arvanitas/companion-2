import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CompanySearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
          <Button type="submit">
            Search
          </Button>
        </div>
      </form>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Companies</h2>
      <div className="grid gap-4">
        <Link 
          to="/company/1/overview"
          className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 block"
        >
          <h3 className="font-medium">Acme Corporation</h3>
        </Link>
        <Link 
          to="/company/2/overview"
          className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 block"
        >
          <h3 className="font-medium">TechStart Inc</h3>
        </Link>
        <Link 
          to="/company/3/overview"
          className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 block"
        >
          <h3 className="font-medium">Global Solutions Ltd</h3>
        </Link>
      </div>
    </div>

    </div>
  );
}
