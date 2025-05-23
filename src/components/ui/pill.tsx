import React from 'react';
import { cn } from '@/lib/utils';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'default';
  children: React.ReactNode;
}

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          {
            'bg-green-100 text-green-800': variant === 'success',
            'bg-yellow-100 text-yellow-800': variant === 'warning',
            'bg-red-100 text-red-800': variant === 'error',
            'bg-gray-100 text-gray-800': variant === 'default',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Pill.displayName = 'Pill';

export { Pill };
