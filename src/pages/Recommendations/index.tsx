import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';

import { ButtonBack, Loading, SearchInput, UsersList } from '../../components/common';
import { useUserRecommendationsQuery } from '../../services/api';
import { RootReducer } from '../../store';
import * as S from './styles';

const Recommendations = () => {
  const { user } = useSelector((state: RootReducer) => state.user);
  const { data: usersData, isLoading } = useUserRecommendationsQuery(user?.id ?? skipToken);
  const [filteredUsers, setFilteredUsers] = useState(usersData || []);
  const [searchTerm, setSearchTerm] = useState('');

  // Efeito para filtrar a lista de usuários conforme o termo de pesquisa
  useEffect(() => {
    if (usersData) {
      const filtered = usersData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, usersData]); // Filtra sempre que searchTerm ou usersData mudarem

  return (
    <S.CentralWrapper>
      <S.Header>
        <ButtonBack />
        <S.Title>Recomendações</S.Title>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </S.Header>
      {isLoading ? (
        <Loading />
      ) : filteredUsers?.length === 0 ? (
        <S.Title>Não há nenhum usuário disponível para seguir</S.Title>
      ) : (
        <UsersList users={filteredUsers!} titleList="Sugestões para você" />
      )}
    </S.CentralWrapper>
  );
};

export default Recommendations;
