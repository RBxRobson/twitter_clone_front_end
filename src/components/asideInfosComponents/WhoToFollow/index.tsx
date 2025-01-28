import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useNavigate } from 'react-router-dom';

import { 
  useUserRecommendationsQuery
} from '../../../services/api';
import { 
  ButtonFollow, 
  Loading, 
  SmallAvatar, 
  UserInfos 
} from '../../common';
import { RootReducer } from '../../../store';
import * as S from './styles';

const WhoToFollow = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootReducer) => state.user);
  const { 
    data: usersData,
    isLoading: usersLoading,
  } = useUserRecommendationsQuery(user?.id ? user.id : skipToken);

  if (usersLoading && !usersData) { 
    return (
      <S.ListContainer>
        <S.ListTitle>
          Quem Seguir
        </S.ListTitle>
        <Loading/>
        <S.ShowMore href="/recommendations">
          Mostrar mais
        </S.ShowMore>
      </S.ListContainer>
    );
  };

  if (usersData?.length === 0) {
    return (
      <S.ListContainer>
        <S.ListTitle>
          Quem Seguir
        </S.ListTitle>
        Não há usuários disponíveis para recomendação
      </S.ListContainer>
    );
  };

  return (
    <S.ListContainer>
      <S.ListTitle>
        Quem Seguir
      </S.ListTitle>
      {usersData?.slice(0, 6).map((user) => (
        <S.ListItem 
          key={user.id} 
          onClick={() => navigate(`/profile/${user.username.replace('@', '')}`)}
        >
          <SmallAvatar user={user} />
          <UserInfos user={user} />
          <ButtonFollow userId={user.id} />
        </S.ListItem>
      ))}
      {usersData && usersData.length > 6 && (
        <S.ShowMore href="/recommendations">
          Mostrar mais
        </S.ShowMore>
      )}
    </S.ListContainer>
  );
};

export default WhoToFollow;
