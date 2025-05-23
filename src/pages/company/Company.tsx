import { List, ListHeader, ListRow } from '@/components/ui/list';
import { Pill } from '@/components/ui/pill';
import { Company as CompanyType } from '@/types/company';
import { useOutletContext } from 'react-router-dom';

export const Company: React.FC = () => {
  const { company } = useOutletContext<{ company: CompanyType }>();

  return (
    <div>
      <List>
        <ListHeader>Company Information</ListHeader>
        <ListRow label="Industrial Classification">
          <div className="flex flex-wrap gap-2">
            <Pill variant="success" className="text-sm">
              {company.status}
            </Pill>
            <Pill variant="success" className="text-sm">
              {company.status}
            </Pill>
            <Pill variant="success" className="text-sm">
              {company.status}
            </Pill>
          </div>
        </ListRow>
        <ListRow label="Headquarters">
          <Pill variant="success" className="text-sm">
            Approved
          </Pill>
        </ListRow>
        <ListRow label="Employees">
          <Pill variant="success" className="text-sm">
            Approved
          </Pill>
        </ListRow>
        <ListRow label="Founded">
          <Pill variant="success" className="text-sm">
            Expires: 01 Nov 2025
          </Pill>
        </ListRow>
        <ListRow label="Website">
          <span className="text-sm text-blue-700">Website</span>
          {/* <span className="text-sm font-medium">
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              {company.website}
            </a>
          </span> */}
        </ListRow>
        <ListRow orientation="vertical" label="Description">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</span>
        </ListRow>
      </List>
    </div>
  );
};
