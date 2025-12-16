import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import './LoadingFallback.css';

export function LoadingFallback() {
  return (
    <IonPage>
      <IonContent className="loading-fallback">
        <IonSpinner name="crescent" />
        <p className="loading-fallback__text">Loading...</p>
      </IonContent>
    </IonPage>
  );
}

