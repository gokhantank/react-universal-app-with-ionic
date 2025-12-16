import { Outlet } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { MobileNavigation } from '@heelix-workspace/shared';

export function App() {
  return (
    <IonApp>
      <MobileNavigation />
      <Outlet />
    </IonApp>
  );
}

export default App;

