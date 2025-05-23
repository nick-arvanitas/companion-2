export type Company = {
  uuid: string;
  slug: string;
  companyName: string;
  displayName: string;
  claimCompanyEmailDomain: string;
  unionPercent: number | null;
  status: 'CLAIMED' | 'SEED' | string;
  ratingLevel: number;
  assessmentsReport: {
    companyCompletePercentage: number | null;
    safetyCompletePercentage: number | null;
    financeCompletePercentage: number | null;
    canHaveBadge: boolean;
  };
  address: {
    address_id: number;
    street1: string;
    street2: string | null;
    city: string;
    state: {
      stateName: string;
      stateCode: string;
    };
    postalCode: string;
    countryCode: string;
    latitude: string;
    longitude: string;
  };
  dbeStatuses: Array<{
    classificationId: number;
    name: string;
    label: string;
    nameSlug: string;
  }>;
  trades: Array<{
    tradeId: number;
    number: string;
    title: string;
    level: number;
    category: number;
    archived: boolean;
    parent: number | null;
    tradeNumberSlug: string;
  }>;
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
};
