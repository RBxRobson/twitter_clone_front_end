import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { 
  HomeIcon,
  HomeIconActive,
  ProfileIcon,
  ProfileIconActive,
  SearchIcon,
  SearchIconActive,
} from '../../../assets/images';
import * as S from './styles';

const NavItens = () => {
  const location = useLocation();
  const { user } = useSelector((state: RootReducer) => state.user);


  const setProfileRoute = () => {
    if (user !== undefined) {
      return `/profile/${user?.username.replace('@', '')}`;
    } else {
      '/404';
    };
  };

  // Array de rotas e ícones
  const navItems = [
    {
      path: '/home',
      label: 'Página inicial',
      icon: HomeIcon,
      iconActive: HomeIconActive,
    },
    {
      path: '/explore',
      label: 'Explorar',
      icon: SearchIcon,
      iconActive: SearchIconActive,
    },
    {
      path: setProfileRoute(),
      label: 'Perfil',
      icon: ProfileIcon,
      iconActive: ProfileIconActive,
    },
  ];

  return (
    <S.ItensContainer>
      {navItems.map(({ path, label, icon, iconActive }) => {
        const isActive = location.pathname === path;
        return (
          <S.NavButton 
            key={label} 
            href={path} 
            className={isActive ? 'is-active' : ''}
            title={`Ir para ${label}`}
          >
            <img 
              src={isActive ? iconActive : icon} 
              alt={`Ícone de ${label}`} 
            />
            <h2>{label}</h2>
          </S.NavButton>
        );
      })}
    </S.ItensContainer>
  );
};

export default NavItens;
