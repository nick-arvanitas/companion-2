import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col">
        <div className="bg-zinc-800 px-4 py-3 text-2xl font-bold text-white">
          <img src="/logo.svg" alt="Highwire" className="h-8 w-auto" />
        </div>
        <main className="container mx-auto flex-1 overflow-y-auto px-4 py-6">{children}</main>
      </div>
    </div>
  );
};
