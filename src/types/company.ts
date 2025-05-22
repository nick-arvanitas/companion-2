export type Company = {
  contractorId: null;
  companyId: string;
  uuid: string;
  companyName: string;
  displayName: string;
  companySummary: {
    summary: string;
    summaryMeta: string;
  };
  website: string;
  phone: string;
  address: {
    address_id: number;
    street1: string;
    street2: string;
    city: string;
    state: {
      stateName: string;
      stateCode: string;
    };
    postalCode: string;
    countryCode: string;
    latitude: string;
    longitude: string;
    hasServiceAreas: boolean;
    trades: Array<{
      tradeDivisionName: string;
      tradeDivisionIcon: string | null;
    }>;
    primaryTradeName: string;
    clientTypes: Array<{
      clientTypeOptionId: number;
      name: string;
      label: string;
      nameSlug: string;
    }>;
    hasProjectTypes: boolean;
    industryExperiences: Array<{
      industryExperienceId: number;
      name: string;
      label: string;
      category: string;
      nameSlug: string;
    }>;
    hasIndustryExperiences: boolean;
    companyContractSize: Array<{
      companyContractSizeId: number;
      minContractSizeId: number;
      maxContractSizeId: number;
      minContractSize: {
        contractSizeId: number;
        name: string;
        label: string;
        labelSlug: string;
        amount: number;
      };
      maxContractSize: {
        contractSizeId: number;
        name: string;
        label: string;
        labelSlug: string;
        amount: number;
      };
    }>;
    hasCompanyContractSize: boolean;
    awards: {
      safetyBadge: number;
      financeBadge: number;
    };
    status: string;
    archived: boolean;
  };
}