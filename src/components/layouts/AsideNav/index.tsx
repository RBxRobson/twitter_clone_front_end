import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import * as Nav from '../../asideNavComponents';
import * as S from './styles';

const AsideNav = () => {
  const { isOpen: isOpenPopUp } = 
    useSelector((state: RootReducer) => state.popUpExit);

  return (
    <S.AsideNav>
      <Nav.RedirectHome />
      <Nav.NavItens />
      <Nav.ButtonPostNav />
      <Nav.User />
      {isOpenPopUp && (
        <Nav.PopUpBalloon />
      )}
    </S.AsideNav>
  );
};

export default AsideNav;
