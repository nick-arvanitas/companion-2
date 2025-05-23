import { cn } from '@/lib/utils';
import React from 'react';

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface ListRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  sublabel?: string;
}

interface ListLabelProps extends React.HTMLAttributes<HTMLDivElement> {
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
      <div ref={ref} className={cn('px-1 pt-6 text-lg font-medium', className)} {...props}>
        {children}
      </div>
    );
  }
);
ListHeader.displayName = 'ListHeader';

const ListRow = React.forwardRef<HTMLDivElement, ListRowProps>(
  ({ className, label, sublabel, orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex justify-between border-b border-zinc-200 px-1 py-3 last:border-b-0',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
          className
        )}
        {...props}
      >
        {(label || sublabel) && (
          <div className="flex flex-col">
            {label && <span className="text-sm text-zinc-600">{label}</span>}
            {sublabel && <span className="text-sm text-zinc-600">{sublabel}</span>}
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">{children}</div>
      </div>
    );
  }
);
ListRow.displayName = 'ListRow';

const ListLabel = React.forwardRef<HTMLDivElement, ListLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('text-sm text-zinc-600', className)} {...props}>
        {children}
      </div>
    );
  }
);
ListLabel.displayName = 'ListLabel';

export { List, ListHeader, ListLabel, ListRow };
