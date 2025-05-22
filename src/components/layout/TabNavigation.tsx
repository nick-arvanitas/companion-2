import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faBuilding,
  faChartLine,
  faFileContract,
  faFolder,
  faShieldAlt
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
  ];

  return (
    <nav className="bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = location.pathname.endsWith(tab.href);
          
          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`flex flex-col items-center justify-center w-full h-full
                ${isActive ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <FontAwesomeIcon icon={tab.icon} className="w-5 h-5 mb-1" />
              <span className="text-xs">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
