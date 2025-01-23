import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';

import { BackIcon } from '../../assets/images';
import { ButtonFollow, Loading, SmallAvatar, UserInfos } from '../../components/common';
import { useUserRecommendationsQuery } from '../../services/api';
import { RootReducer } from '../../store';
import * as S from './styles';

const Recommendations = () => {
  const { user } = useSelector((state: RootReducer) => state.user);
  const { 
    data: usersData,
    isLoading: usersLoading,
  } = useUserRecommendationsQuery(user?.id ? user.id : skipToken);

  if (usersLoading && !usersData) { 
    return (
      <S.CentralWrapper>
        <S.Header>
          <S.BtnBack href="/home" title="Voltar para página inicial">
            <img src={BackIcon} alt="Ícone de voltar" />
          </S.BtnBack>
          <S.Title>Conectar</S.Title>
        </S.Header>
        <Loading />
      </S.CentralWrapper>
    );
  };

  return (
    <S.CentralWrapper>
      <S.Header>
        <S.BtnBack href="/home" title="Voltar para página inicial">
          <img src={BackIcon} alt="Ícone de voltar" />
        </S.BtnBack>
        <S.Title>Conectar</S.Title>
      </S.Header>
      <S.RecommendationsList>
        <h2>Sugerido para você</h2>
        {usersData?.map((user) => (
          <S.ListItem key={user.id}>
            <S.ItemContainer>
              <SmallAvatar user={user}/>
              <UserInfos user={user} />
              <ButtonFollow userId={user.id} />
            </S.ItemContainer>
            <p>{user.profile.bio}</p>
          </S.ListItem>
        ))}
      </S.RecommendationsList>
    </S.CentralWrapper>
  );
};

export default Recommendations;