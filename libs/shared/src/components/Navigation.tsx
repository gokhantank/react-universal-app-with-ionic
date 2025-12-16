import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="lib-navigation">
      <div className="lib-navigation-container">
        <div className="lib-navigation-logo">
          <div className="lib-navigation-logo-icon">
            <span>h</span>
          </div>
          <span className="lib-navigation-logo-text">heelix</span>
        </div>
        <div className="lib-navigation-links">
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
      </div>
    </nav>
  );
};


