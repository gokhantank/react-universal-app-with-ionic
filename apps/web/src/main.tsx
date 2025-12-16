import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import { ErrorBoundary } from './app/components/ErrorBoundary';
import { LoadingFallback } from './app/components/LoadingFallback';
import './styles.css';

const router = createBrowserRouter(
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

