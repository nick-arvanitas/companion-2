import { Pill } from '@/components/ui/pill';
import { Row } from '@/components/ui/row';

export function Completion() {
  const completionItems = [
    {
      name: 'Insurance Verification',
      status: 'Completed',
      updatedDate: 'Jan 1, 2025',
    },
    {
      name: 'Safety Training',
      status: 'Pending',
      updatedDate: 'Jan 1, 2025',
    },
    {
      name: 'Financial Documents',
      status: 'Missing',
      updatedDate: 'Jan 1, 2025',
    },
    {
      name: 'W-9 Form',
      status: 'Completed',
      updatedDate: 'Jan 1, 2025',
    },
    {
      name: 'Diversity Certification',
      status: 'Pending',
      updatedDate: 'Jan 1, 2025',
    },
    {
      name: 'Sustainability Statement',
      status: 'Missing',
      updatedDate: 'Jan 1, 2025',
    },
    {
      name: 'References',
      status: 'Completed',
      updatedDate: 'Jan 1, 2025',
    },
  ];

  const completionProgress = Math.round(
    (completionItems.filter((item) => item.status === 'Completed').length /
      completionItems.length) *
      100
  );

  return (
    <div className="flex flex-col gap-y-4 pt-6">
      {/* Progress Bar */}

      <div className="rounded-md border-zinc-200 bg-zinc-50 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Completion Progress</h2>
          <p className=" text-lg">{completionProgress}%</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-200">
            <div
              className="h-full w-full flex-1 bg-blue-500 transition-all"
              style={{ transform: `translateX(-${100 - completionProgress}%)` }}
            />
          </div>
        </div>
      </div>

      <div>
        {completionItems.map((item) => {
          return (
            <Row label={item.name} key={item.name}>
              <div className="flex items-center gap-x-1">
                {item.status === 'Completed' && (
                  <div className="text-xs text-zinc-500">{item.updatedDate}</div>
                )}
                <Pill
                  variant={
                    item.status === 'Completed'
                      ? 'success'
                      : item.status === 'Pending'
                        ? 'warning'
                        : 'error'
                  }
                >
                  {item.status}
                </Pill>
              </div>
            </Row>
          );
        })}
      </div>
    </div>
  );
}
