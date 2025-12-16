import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import './ErrorBoundary.css';

export function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || 'An error occurred';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error occurred';
  }

  return (
    <div className="error-boundary">
      <div className="error-boundary__container">
        <h1 className="error-boundary__title">
          {errorStatus ? `${errorStatus} Error` : 'Oops!'}
        </h1>
        <p className="error-boundary__message">{errorMessage}</p>
        <Link to="/" className="error-boundary__link">
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}

