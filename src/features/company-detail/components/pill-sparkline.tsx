import { Sparkline } from '@/components/charts/Sparkline';
import { Pill } from '@/components/ui/pill';

export function PillSparkline({
  chartData,
  pillData,
}: {
  chartData: { date: string; value: number }[];
  pillData: string;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Sparkline className="h-10 w-40" data={chartData} />
      <Pill variant="success" className="text-sm">
        {pillData}
      </Pill>
    </div>
  );
}
