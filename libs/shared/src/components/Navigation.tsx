import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="lib-navigation">
      <div className="lib-navigation-container">
        <Link
          to="/"
          className={`lib-navigation-link ${isActive('/') ? 'active' : ''}`}
        >
          Dashboard
        </Link>
        <Link
          to="/factor-analysis"
          className={`lib-navigation-link ${isActive('/factor-analysis') ? 'active' : ''}`}
        >
          Factor Analysis
        </Link>
      </div>
    </nav>
  );
};

