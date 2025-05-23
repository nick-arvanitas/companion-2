import { ApiResponse } from '@/types/api';
import { Company } from '@/types/company';

export async function getCompanies(): Promise<ApiResponse<Company[]>> {
  const response = await fetch('https://run.mocky.io/v3/bd98199e-f71c-4656-b90f-8b0ea582ae61');

  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }

  return response.json();
}
