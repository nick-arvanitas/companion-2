import { Row } from '@/components/ui/row';
import { InsuranceCard } from '@/features/company-detail/components/insurance-card';

export function Insurance() {
  return (
    <div className="flex flex-col gap-y-4 pt-6">
      <InsuranceCard title="Commercial General Liability" status="meets">
        <Row border={false} label="Each Occurence">
          <div className="text-sm">$1M</div>
        </Row>
        <Row border={false} label="Aggregate">
          <div className="text-sm">$1M</div>
        </Row>
        <Row border={false} label="Expiration">
          <div className="text-sm">Jan 23, 2026</div>
        </Row>
      </InsuranceCard>

      <InsuranceCard title="Automobile Liability" status="does not meet">
        <Row border={false} label="Combined Single Limit">
          <div className="text-sm">$1M</div>
        </Row>
        <Row border={false} label="Expiration">
          <div className="text-sm">Jan 23, 2026</div>
        </Row>
      </InsuranceCard>

      <InsuranceCard title="Excess Liability" status="meets">
        <Row border={false} label="Each Occurence">
          <div className="text-sm">$5M</div>
        </Row>
        <Row border={false} label="Aggregate">
          <div className="text-sm">$5M</div>
        </Row>
        <Row border={false} label="Expiration">
          <div className="text-sm">Jan 23, 2026</div>
        </Row>
      </InsuranceCard>

      <InsuranceCard title="Workers' Compensation" status="meets">
        <Row border={false} label="Each Occurence">
          <div className="text-sm">$1M</div>
        </Row>
        <Row border={false} label="Expiration">
          <div className="text-sm">Jan 23, 2026</div>
        </Row>
      </InsuranceCard>
    </div>
  );
}
