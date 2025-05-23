import { cn } from '@/lib/utils';
import React from 'react';

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ListRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('rounded-lg', className)} {...props}>
        {children}
      </div>
    );
  }
);
List.displayName = 'List';

const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('px-1 pb-1 pt-4 text-lg font-medium', className)} {...props}>
        {children}
      </div>
    );
  }
);
ListHeader.displayName = 'ListHeader';

const ListRow = React.forwardRef<HTMLDivElement, ListRowProps>(
  ({ className, label, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-between border-b border-zinc-200 px-1 py-3 last:border-b-0',
          className
        )}
        {...props}
      >
        <span className="text-base text-zinc-600">{label}</span>
        <div className="flex items-center gap-2">{children}</div>
      </div>
    );
  }
);
ListRow.displayName = 'ListRow';

export { List, ListHeader, ListRow };
