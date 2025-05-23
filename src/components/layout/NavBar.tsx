import {
  faBuilding,
  faCheckSquare,
  faFileLines,
  faHouse,
  faMoneyBill,
  faShieldAlt,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

// Prevent FontAwesome from dynamically adding its CSS

export function NavBar() {
  const location = useLocation();

  const tabs = [
    { name: 'Overview', href: 'overview', icon: faHouse },
    { name: 'Company', href: 'company', icon: faBuilding },
    { name: 'Finance', href: 'finance', icon: faMoneyBill },
    { name: 'Safety', href: 'safety', icon: faShieldAlt },
    { name: 'Insurance', href: 'insurance', icon: faUmbrella },
    { name: 'Documents', href: 'documents', icon: faFileLines },
    { name: 'Completion', href: 'completion', icon: faCheckSquare },
  ];

  return (
    <nav className="overflow-x-auto">
      <div className="mt-4 flex gap-x-4 rounded-lg">
        {tabs.map((tab) => {
          const isActive = location.pathname.endsWith(tab.href);

          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`flex flex-grow flex-col items-center gap-y-1 rounded-md px-2 pb-2 pt-3 transition-all duration-300 ease-in-out hover:bg-zinc-50
                ${isActive ? 'bg-zinc-50 text-blue-500' : 'group text-zinc-500'}`}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                size="lg"
                className="mb-1 group-hover:text-blue-600"
              />
              <span className="text-sm group-hover:text-blue-700">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
