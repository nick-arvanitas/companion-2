import { Button } from '@/components/ui/button';
import { Row } from '@/components/ui/row';
import { FileTypeIcon } from '@/lib/constants/fileTypeIcon';
import { cn, formatDate } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DownloadIcon } from 'lucide-react';

export function Documents() {
  const files = [
    {
      name: 'Certificate of Insurance',
      type: 'pdf',
      url: 'https://www.highwire.com',
      expiration: '2021-01-01',
    },
    {
      name: 'Safety Program',
      type: 'pdf',
      url: 'https://www.highwire.com',
      expiration: '2021-01-01',
    },
    {
      name: 'Financial Statement',
      type: 'xlsx',
      url: 'https://www.highwire.com',
      expiration: '2021-01-01',
    },
    {
      name: 'W-9 Form',
      type: 'pdf',
      url: 'https://www.highwire.com',
      expiration: '2021-01-01',
    },
  ];
  return (
    <div className="pt-6">
      {files.map((file) => (
        <Row key={file.name} className="*:w-full">
          <div className="flex w-full items-center justify-between gap-x-2">
            <div className="flex w-full gap-x-2">
              <div className="flex items-start py-0.5">
                <div
                  className={cn(
                    'rounded-sm p-1',
                    FileTypeIcon[file.type as keyof typeof FileTypeIcon].backgroundColor
                  )}
                >
                  <FontAwesomeIcon
                    icon={FileTypeIcon[file.type as keyof typeof FileTypeIcon].icon}
                    className={FileTypeIcon[file.type as keyof typeof FileTypeIcon].textColor}
                    size="lg"
                    fixedWidth
                  />
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-zinc-900">{file.name}</div>
                <div className="text-zinc-500">{formatDate(file.expiration)}</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <DownloadIcon className="size-4" />
              Download
            </Button>
          </div>
        </Row>
      ))}
    </div>
  );
}
