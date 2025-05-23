import { cn } from '@/lib/utils';
import React from 'react';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: React.ReactNode;
  border?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, border = true, label, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          border && 'border-b border-zinc-200',
          'flex items-center justify-between py-3 last:border-b-0',
          className
        )}
        {...props}
      >
        {label && <span className="text-sm font-medium text-zinc-700">{label}</span>}
        <div className="flex items-center gap-2">{children}</div>
      </div>
    );
  }
);

Row.displayName = 'Row';

export { Row };
