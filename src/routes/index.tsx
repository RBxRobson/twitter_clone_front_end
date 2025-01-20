import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom';

import { Auth, Home } from '../pages';

const Routes = () => {
  const location = useLocation();

  return (
    <RouterRoutes location={location} key={location.pathname}>
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </RouterRoutes>
  );
};

export default Routes;
