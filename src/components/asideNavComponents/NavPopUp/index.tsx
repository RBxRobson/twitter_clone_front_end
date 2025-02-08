import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { removeUser } from '../../../store/reducers/user';
import { setToken } from '../../../store/reducers/tokenJwt';
import { closePopUp } from '../../../store/reducers/popUpExit';
import * as S from './styles';

const PopUpBalloon = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootReducer) => state.user);

  const handleClickExitLink = () => {
    dispatch(removeUser());
    dispatch(setToken({token: null}));
    dispatch(closePopUp());
  };
  
  const handleClickClosePopUp = () => {
    dispatch(closePopUp());
  };

  return (
    <>
      <S.PopUpBallon>
        <S.ExitLink onClick={handleClickExitLink}>
            Sair {user?.username}
        </S.ExitLink>
      </S.PopUpBallon>
      <S.ClosePopUp onClick={handleClickClosePopUp} />
    </>
  );
};

export default PopUpBalloon;
