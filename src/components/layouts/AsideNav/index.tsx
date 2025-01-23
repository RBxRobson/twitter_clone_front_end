import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import * as Nav from '../../asideNavComponents';
import * as S from './styles';

const AsideNav = () => {
  const { isOpen: isOpenPopUp } = 
    useSelector((state: RootReducer) => state.popUpExit);

  const { isOpen: isOpenPostModal } = 
    useSelector((state: RootReducer) => state.postModal);

  return (
    <S.AsideNav>
      <Nav.RedirectHome />
      <Nav.NavItens />
      <Nav.ButtonPostNav />
      <Nav.User />
      {isOpenPopUp && (
        <Nav.PopUpBalloon />
      )}
      {isOpenPostModal && (
        <Nav.PostModal />
      )}
    </S.AsideNav>
  );
};

export default AsideNav;
