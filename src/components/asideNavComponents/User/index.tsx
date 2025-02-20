import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { closePopUp, openPopUp } from '../../../store/reducers/popUpExit';
import { Loading, SmallAvatar, UserInfos } from '../../common';
import * as S from './styles';

const User = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: RootReducer) => state.user);
  const { isOpen } = useSelector((state: RootReducer) => state.popUpExit);

  const handleClickPopUp = () => {
    if (!isOpen) {
      dispatch(openPopUp());
    } else {
      dispatch(closePopUp());
    }
  };

  if (isLoading) {
    return (
      <Loading size='small' />
    );
  }

  return (
    <S.User onClick={handleClickPopUp}>
      <SmallAvatar avatar={user!.profile.avatar} username={user!.username} />
      <UserInfos user={user!} />
      <S.IconEllipsis>...</S.IconEllipsis>
    </S.User>
  );
};

export default User;
