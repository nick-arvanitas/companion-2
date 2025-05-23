import {
  faBuilding,
  faChartLine,
  faCheckCircle,
  faFileContract,
  faFolder,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

// Prevent FontAwesome from dynamically adding its CSS

export default function TabNavigation() {
  const location = useLocation();

  const tabs = [
    { name: 'Overview', href: 'overview', icon: faBuilding },
    { name: 'Finance', href: 'finance', icon: faChartLine },
    { name: 'Safety', href: 'safety', icon: faShieldAlt },
    { name: 'Insurance', href: 'insurance', icon: faFileContract },
    { name: 'Documents', href: 'documents', icon: faFolder },
    { name: 'Completion', href: 'completion', icon: faCheckCircle },
  ];

  return (
    <nav>
      <div className="mt-4 flex justify-center gap-x-4 rounded-lg">
        {tabs.map((tab) => {
          const isActive = location.pathname.endsWith(tab.href);

          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`flex flex-grow flex-col items-center gap-y-1 rounded-md px-2 pb-2 pt-3 transition-all duration-300 ease-in-out hover:bg-zinc-50
                ${isActive ? 'bg-zinc-50 text-blue-500' : 'group text-zinc-500'}`}
            >
              <FontAwesomeIcon icon={tab.icon} className="mb-1 size-5 group-hover:text-blue-600" />
              <span className="text-sm group-hover:text-blue-700">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
