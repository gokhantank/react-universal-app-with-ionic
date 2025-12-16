import { Outlet } from 'react-router-dom';
import { Navigation } from '@heelix-workspace/shared';

export function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;

