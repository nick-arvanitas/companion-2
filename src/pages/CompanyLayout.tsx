import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function CompanyLayout() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-6">
        <form className="mb-6">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies..."
              className="w-full"
            />
            <Button type="submit">Search</Button>
          </div>
        </form>

        <Outlet />
      </div>
    </div>
  );
}
