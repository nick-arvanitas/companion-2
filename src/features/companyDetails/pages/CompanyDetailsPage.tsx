import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface CompanyDetails {
  name: string;
  description: string;
  industry: string;
  founded: string;
  employees: number;
  location: string;
}

const CompanyDetailsPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const [company, setCompany] = useState<CompanyDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call - replace with actual API call
    const fetchCompanyDetails = async () => {
      try {
        // Replace with actual API endpoint
        const response = await fetch(`/api/companies/${companyId}`);
        const data = await response.json();
        setCompany(data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [companyId]);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    );
  }

  if (!company) {
    return (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800">Company not found</h2>
        </div>
    );
  }

  return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{company.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">About</h2>
              <p className="text-gray-600">{company.description}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Industry</h3>
                <p className="text-gray-600">{company.industry}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700">Founded</h3>
                <p className="text-gray-600">{company.founded}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700">Employees</h3>
                <p className="text-gray-600">{company.employees.toLocaleString()}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700">Location</h3>
                <p className="text-gray-600">{company.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CompanyDetailsPage;
