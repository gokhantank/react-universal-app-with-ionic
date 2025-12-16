import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MobileNavigation.css';

export const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <div className="mobile-navigation__logo">
            <div className="mobile-navigation__logo-icon">
              <span>h</span>
            </div>
            <span className="mobile-navigation__logo-text">heelix</span>
          </div>
        </IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => navigate('/')}>
            <span className={`mobile-navigation__links ${isActive('/') ? 'active' : ''}`}>
              Dashboard
            </span>
          </IonButton>
          <IonButton onClick={() => navigate('/factor-analysis')}>
            <span className={`mobile-navigation__links ${isActive('/factor-analysis') ? 'active' : ''}`}>
              Factor analysis
            </span>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

