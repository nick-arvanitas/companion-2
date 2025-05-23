import { Pill } from '@/components/ui/pill';

export function InsuranceCard({
  title,
  children,
  status,
}: {
  title: string;
  children: React.ReactNode;
  status: 'meets' | 'does not meet';
}) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex items-center justify-between border-b bg-zinc-50 px-4 pb-2 pt-3">
        <div className="text-base font-medium">{title}</div>
        <div>
          <Pill variant={status === 'meets' ? 'success' : 'error'} className="text-sm">
            {status === 'meets' ? 'Meets Requirements' : 'Does Not Meet Requirements'}
          </Pill>
        </div>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
}
