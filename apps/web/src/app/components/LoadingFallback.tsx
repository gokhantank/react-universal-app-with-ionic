import './LoadingFallback.css';

export function LoadingFallback() {
  return (
    <div className="loading-fallback">
      <div className="loading-fallback__spinner"></div>
      <p className="loading-fallback__text">Loading...</p>
    </div>
  );
}

