import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export default function TabNavigation() {
  const location = useLocation();

  const tabs = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'Search', href: '/search', icon: faSearch },
    { name: 'Profile', href: '/profile', icon: faUser },
  ];

  return (
    <nav className="bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.href;
          
          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`flex flex-col items-center justify-center w-full h-full
                ${isActive ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <FontAwesomeIcon icon={tab.icon} className="w-6 h-6" />
              <span className="text-xs mt-1">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
