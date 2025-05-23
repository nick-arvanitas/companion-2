import { List, ListHeader, ListRow } from '@/components/ui/list';
import { Pill } from '@/components/ui/pill';

export default function Finance() {
  return (
    <div>
      <List>
        <ListHeader>Financial Metrics</ListHeader>
        <ListRow>Finance Score</ListRow>
        <ListRow label="Status">
          <Pill variant="success" className="text-sm">
            Approved
          </Pill>
        </ListRow>
        <ListRow label="Working Capital">
          <div className="font-medium">$4.2M</div>
        </ListRow>
        <ListRow label="Net Worth">
          <div className="font-medium">$10.5M</div>
        </ListRow>
        <ListRow label="Current Ratio">
          <div className="font-medium">1.2x</div>
        </ListRow>
        <ListRow label="Debt to Equity">
          <div className="font-medium">0.5x</div>
        </ListRow>
      </List>
      <List>
        <ListHeader>Risk Factors</ListHeader>

        <ListRow>Strong working capital position</ListRow>
        <ListRow>Low debt-to-equity ratio</ListRow>
        <ListRow>Current ratio below industry average</ListRow>
        <ListRow>Missing: Cash flow statement</ListRow>
      </List>
    </div>
  );
}
