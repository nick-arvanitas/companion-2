import React from 'react';
import { Row } from '@/components/ui/row';
import { Pill } from '@/components/ui/pill';

const Overview: React.FC = () => {
  return (
      <div>
        <Row label="Status">
          <Pill variant="success">Active</Pill>
        </Row>
        <Row label="Safety">
          <Pill variant="success">Approved</Pill>
        </Row>
        <Row label="Finance">
          <Pill variant="success">Approved</Pill>
        </Row>
        <Row label="Insurance">
          <span className="text-sm text-gray-600">Expires: Nov-01-2025</span>
        </Row>
        <Row label="Single Limit">
          <span className="text-sm font-medium">$10,000,000</span>
        </Row>
        <Row label="Aggregate Limit">
          <span className="text-sm font-medium">$30,000,000</span>
        </Row>
      </div>
  );
};

export default Overview;