import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { closePopUp, openPopUp } from '../../../store/reducers/popUpExit';
import * as S from './styles';

const UserInfos = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootReducer) => state.user);
  const { isOpen } = useSelector((state: RootReducer) => state.popUpExit);

  const handleClickPopUp = () => {
    if (!isOpen) {
      dispatch(openPopUp());
    } else {
      dispatch(closePopUp());
    }
  };

  return (
    <S.UserInfos onClick={handleClickPopUp}>
      <S.SmallAvatar 
        src={`https://rbxrobson.pythonanywhere.com${user?.profile.avatar}`} 
        alt={`Foto de perfil do ${user?.name}`} 
      />
      <S.TextContainer>
        <h4>{user?.name}</h4>
        <span>{user?.username}</span>
      </S.TextContainer>
      <S.IconEllipsis>...</S.IconEllipsis>
    </S.UserInfos>
  );
};

export default UserInfos;
