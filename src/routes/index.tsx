import {
  Route,
  Routes as RouterRoutes,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setToken } from '../store/reducers/tokenJwt';
import { RootReducer } from '../store';
import * as P from '../pages';
import { removeUser } from '../store/reducers/user';
import LayoutMain from '../components/layouts/LayoutMain';

// Hook customizado para gerenciar expiração do token
const useTokenExpiration = () => {
  const dispatch = useDispatch();
  const { expirationTime } = useSelector((state: RootReducer) => state.tokenJwt);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (expirationTime && Date.now() >= expirationTime) {
        dispatch(setToken({ token: null }));
        removeUser();
      }
    };

    checkTokenExpiration();

    if (expirationTime) {
      const timeToExpire = expirationTime - Date.now();
      if (timeToExpire > 0) {
        const timeout = setTimeout(checkTokenExpiration, timeToExpire);
        return () => clearTimeout(timeout);
      }
    }
  }, [expirationTime, dispatch]);
};

// Componente para rotas privadas
const PrivateRoute = ({ isValidToken }: { isValidToken: boolean }) => {
  const location = useLocation();

  if (!isValidToken) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

// Rota pública com redirecionamento
const PublicRoute = ({ isValidToken }: { isValidToken: boolean }) => {
  if (isValidToken) {
    return <Navigate to="/home" replace />;
  }

  return <P.Auth />;
};

const Routes = () => {
  const { isValidToken } = useSelector((state: RootReducer) => state.tokenJwt);

  useTokenExpiration();

  return (
    <RouterRoutes>
      {/* Rota inicial */}
      <Route
        path="/"
        element={
          isValidToken ? <Navigate to="/home" replace /> : <Navigate to="/auth" replace />
        }
      />
      {/* Rota pública (autenticação) */}
      <Route path="/auth" element={<PublicRoute isValidToken={isValidToken} />} />
      {/* Rotas privadas */}
      <Route element={<PrivateRoute isValidToken={isValidToken} />}>
        <Route
          path="/*"
          element={
            <LayoutMain>
              <RouterRoutes>
                <Route path="/home" element={<P.Home />} />
                <Route path="/recommendations" element={<P.Recommendations />} />
                <Route path="/profile/:username" element={<P.Profile />} />
                <Route path="/profile/:username/followers" element={<P.Followers />} />
                <Route path="/posts/:post/stats" element={<P.PostStats />} />
              </RouterRoutes>
            </LayoutMain>
          }
        />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
