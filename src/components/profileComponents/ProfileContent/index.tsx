import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { DateIcon } from '../../../assets/images';
import { RootReducer } from '../../../store';
import * as S from './styles';
import { ButtonFollow } from '../../common';
import { UpdateUserModal } from '../../modals';

type Props = {
  user: User;
}

const ProfileContent = ({ user }:Props) => {
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user: currentUser } = useSelector((state: RootReducer) => state.user);
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear(); // Ano
    return `Entrou em ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
  };

  const handleClickOpen = () => {
    setIsOpenModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const handleClickClose = () => {
    setIsOpenModal(false);
    document.body.style.overflowY = 'auto';
  };

  return (
    <S.ProfileContent>
      {currentUser?.id === user.id ? (
        <>
          <S.ButtonProfile onClick={handleClickOpen}>
          Editar perfil
          </S.ButtonProfile>
          {isOpenModal &&  <UpdateUserModal closeModal={handleClickClose}/>}
        </>
      ) : (
        <ButtonFollow userId={user.id} isFollowing={user.is_following}/>
      )}
      <h2>{user.name}</h2>
      <S.Username>{user.username}</S.Username>
      {user.profile.bio !== '' && <S.Bio>{user.profile.bio}</S.Bio>}
      <S.CreatedAt>
        <img src={DateIcon} alt="Ícone de calendário"/>
        {formatDate(user.created_at)}
      </S.CreatedAt>
      <S.CountersWrapper>
        <S.Counter href={`${location.pathname}/following`}>
          <b>{user.following_count}</b>
          <span>Seguindo</span>
        </S.Counter>
        <S.Counter href={`${location.pathname}/followers`}>
          <b>{user.followers_count}</b>
          <span>Seguidores</span>
        </S.Counter>
      </S.CountersWrapper>
    </S.ProfileContent>
  );
};

export default ProfileContent;