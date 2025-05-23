import { List, ListHeader, ListRow } from '@/components/ui/list';
import { PillSparkline } from '@/features/company-detail/components/pill-sparkline';

export function Safety() {
  const data = [
    { date: 'Q3-2024', value: 80 },
    { date: 'Q4-2024', value: 82 },
    { date: 'Q1-2025', value: 85 },
  ];
  return (
    <div>
      <List>
        <ListHeader>Safety Metrics</ListHeader>
        <ListRow label="Safety Score" sublabel="Overall safety performance rating">
          <PillSparkline chartData={data} pillData="85" />
        </ListRow>
        <ListRow label="EMR" sublabel="Experience Modification Rate">
          <PillSparkline chartData={data} pillData=".82" />
        </ListRow>
        <ListRow label="TRIR" sublabel="Total Recordable Incident Rate">
          <PillSparkline chartData={data} pillData="1.20" />
        </ListRow>
        <ListRow label="DART" sublabel="Days Away, Restricted, or Transferred">
          <PillSparkline chartData={data} pillData="0.5" />
        </ListRow>
        <ListRow label="LTIR" sublabel="Lost Time Incident Rate">
          <PillSparkline chartData={data} pillData="2.10" />
        </ListRow>
      </List>
    </div>
  );
}
