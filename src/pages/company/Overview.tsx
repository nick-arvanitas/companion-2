import { List, ListHeader, ListRow } from '@/components/ui/list';
import { Pill } from '@/components/ui/pill';
import { Company } from '@/types/company';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Overview: React.FC = () => {
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
          <span className="text-zinc-600">Expires: Nov-01-2025</span>
        </ListRow>
        <ListRow label="Single Limit">
          <span className="font-medium">$10,000,000</span>
        </ListRow>
        <ListRow label="Aggregate Limit">
          <span className="font-medium">$30,000,000</span>
        </ListRow>
      </List>
    </div>
  );
};

export default Overview;
