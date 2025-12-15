import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './MobileNavigation.css';

export const MobileNavigation: React.FC = () => {
  const location = useLocation();

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
          <IonButton routerLink="/" routerDirection="root">
            <span className={`mobile-navigation__links ${isActive('/') ? 'active' : ''}`}>
              Dashboard
            </span>
          </IonButton>
          <IonButton routerLink="/factor-analysis" routerDirection="root">
            <span className={`mobile-navigation__links ${isActive('/factor-analysis') ? 'active' : ''}`}>
              Factor analysis
            </span>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

