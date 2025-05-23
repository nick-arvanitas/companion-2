import { List, ListHeader, ListRow } from '@/components/ui/list';
import { Pill } from '@/components/ui/pill';
import { Company } from '@/types/company';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const Overview: React.FC = () => {
  const { company } = useOutletContext<{ company: Company }>();

  return (
    <div>
      <List>
        <ListHeader>Approvals</ListHeader>
        <ListRow label="Status">
          <Pill variant="success" className="text-sm">
            {company.status}
          </Pill>
        </ListRow>
        <ListRow label="Safety">
          <Pill variant="success" className="text-sm">
            Approved
          </Pill>
        </ListRow>
        <ListRow label="Finance">
          <Pill variant="success" className="text-sm">
            Approved
          </Pill>
        </ListRow>
        <ListRow label="Insurance">
          <Pill variant="success" className="text-sm">
            Expires: 01 Nov 2025
          </Pill>
        </ListRow>
        <ListRow label="Single Limit">
          <span className="text-sm font-medium">$10,000,000</span>
        </ListRow>
        <ListRow label="Aggregate Limit">
          <span className="text-sm font-medium">$30,000,000</span>
        </ListRow>
      </List>
    </div>
  );
};
