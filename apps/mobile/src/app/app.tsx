import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { MobileNavigation } from '@heelix-workspace/shared';
import DashboardPage from './pages/DashboardPage';
import FactorAnalysisPage from './pages/FactorAnalysisPage';

export function App() {
  return (
    <IonReactRouter>
      <MobileNavigation />
      <IonRouterOutlet>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/factor-analysis" component={FactorAnalysisPage} />
        <Redirect exact from="/" to="/" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default App;

