import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import * as Img from '../../../assets/images';
import * as S from './styles';

const NavItens = () => {
  const location = useLocation();
  const { user } = useSelector((state: RootReducer) => state.user);


  const setProfileRoute = () => {
    if (user !== undefined) {
      return `/${user?.username.replace('@', '')}`;
    } else {
      '/404';
    };
  };

  // Array de rotas e ícones
  const navItems = [
    {
      path: '/home',
      label: 'Página inicial',
      icon: Img.HomeIcon,
      iconActive: Img.HomeIconActive,
    },
    {
      path: '/explore',
      label: 'Explorar',
      icon: Img.SearchIcon,
      iconActive: Img.SearchIconActive,
    },
    {
      path: setProfileRoute(),
      label: 'Perfil',
      icon: Img.ProfileIcon,
      iconActive: Img.ProfileIconActive,
    },
  ];

  return (
    navItems.map(({ path, label, icon, iconActive }) => {
      const isActive = location.pathname === path;
      return (
        <S.NavButton 
          key={label} 
          href={path} 
          className={isActive ? 'is-active' : ''}
        >
          <img 
            src={isActive ? iconActive : icon} 
            alt={`Ícone de ${label}`} 
          />
          <h2>{label}</h2>
        </S.NavButton>
      );
    })
  );
};

export default NavItens;
