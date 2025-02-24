import { useEffect, useState } from 'react';

import { ButtonBack, Loading, SearchInput, UsersList } from '../../components/common';
import { useSearchUsersQuery } from '../../services/api';
import * as S from './styles';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  
  const { data: usersData, isLoading, isError } = useSearchUsersQuery(debouncedSearchTerm, {
    skip: !debouncedSearchTerm, // Só faz a requisição se houver pesquisa
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Debounce de 500ms

    return () => {
      clearTimeout(handler); // Limpa o timeout anterior caso o termo de pesquisa seja alterado antes do debounce
    };
  }, [searchTerm]);

  // Verificar se não encontrou usuários
  const noUsersFound = !isLoading && usersData && usersData.length === 0;

  return (
    <S.CentralWrapper>
      <S.Header>
        <ButtonBack />
        <S.Title>Encontrar usuário</S.Title>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </S.Header>

      {isLoading ? (
        <Loading />
      ) : noUsersFound || isError ? (
        <S.Title>Não encontramos nenhum usuário.</S.Title>
      ) : (
        <UsersList users={searchTerm ? usersData! : []} />
      )}
    </S.CentralWrapper>
  );
};

export default Explore;