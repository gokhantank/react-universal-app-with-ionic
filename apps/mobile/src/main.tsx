import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import App from './app/app';
import { ErrorBoundary } from './app/components/ErrorBoundary';
import { LoadingFallback } from './app/components/LoadingFallback';
import './styles.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          lazy: () => import('./app/pages/Dashboard'),
          errorElement: <ErrorBoundary />,
        },
        {
          path: 'factor-analysis',
          lazy: () => import('./app/pages/FactorAnalysis'),
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ],
  {
    // Future flags for latest React Router v7 features
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

