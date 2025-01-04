import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom';

import { Auth } from '../pages';

const Routes = () => {
  const location = useLocation();

  return (
    <RouterRoutes location={location} key={location.pathname}>
      <Route path="/auth" element={<Auth />} />
    </RouterRoutes>
  );
};

export default Routes;
