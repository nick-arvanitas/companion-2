import { cn } from '@/lib/utils';
import React from 'react';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, label, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-between border-b border-zinc-200 py-3 last:border-b-0',
          className
        )}
        {...props}
      >
        <span className="text-sm font-medium text-zinc-700">{label}</span>
        <div className="flex items-center gap-2">{children}</div>
      </div>
    );
  }
);

Row.displayName = 'Row';

export { Row };
