import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';

import { ButtonBack, Loading, UsersList } from '../../components/common';
import { useUserRecommendationsQuery } from '../../services/api';
import { RootReducer } from '../../store';
import * as S from './styles';

const Recommendations = () => {
  const { user } = useSelector((state: RootReducer) => state.user);
  const { data: usersData, isLoading } = useUserRecommendationsQuery(user?.id ?? skipToken);

  return (
    <S.CentralWrapper>
      <S.Header>
        <ButtonBack />
        <S.Title>Conectar</S.Title>
      </S.Header>
      {isLoading ? (
        <Loading />
      ) : usersData?.length === 0 ? (
        <S.Title>Não há nenhum usuário disponível para seguir</S.Title>
      ) : (
        <UsersList users={usersData!} titleList="Sugestões para você" />
      )}
    </S.CentralWrapper>
  );
};

export default Recommendations;
