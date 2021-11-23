import { Homepage } from 'features/Homepage/Homepage';
import { routes } from 'components/Router/routes';
import { Routes, Route } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path={routes.homepage} element={<Homepage />} />
    </Routes>
  );
}
