// ChartComponent.tsx
import { AgChartOptions, AgLineSeriesOptions, AgNumberAxisOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';

export function Sparkline({
  data,
  className,
}: {
  data: { date: string; value: number }[];
  className?: string;
}) {
  const options: AgChartOptions = {
    data,
    series: [
      {
        type: 'line',
        xKey: 'date',
        yKey: 'value',
        marker: {
          enabled: false,
        },
        showInMiniChart: true,
      },
    ] as AgLineSeriesOptions[],
    padding: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
    axes: [
      {
        type: 'category',
        position: 'bottom',
        gridLine: { enabled: false },
        label: { enabled: false },
        tick: {
          enabled: false,
        },
        line: {
          enabled: false,
        },
      },
      {
        type: 'number',
        position: 'left',
        gridLine: { enabled: false },
        label: { enabled: false },
        tick: {
          enabled: false,
        },
      },
    ] as AgNumberAxisOptions[],
  };

  return <AgCharts className={className} options={options} />;
}
