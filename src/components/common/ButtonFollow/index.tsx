import { useState } from 'react';

import * as S from './styles';
import { useFollowUserMutation, useUnfollowUserMutation } from '../../../services/api';

type Props = {
  userId: number,
};

const ButtonFollow = ({ userId }: Props) => {
  const [followingState, setFollowingState] = useState<{ [key: number]: boolean }>({});
  const [loadingState, setLoadingState] = useState<{ [key: number]: boolean }>({});
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  const handleClick = async () => {
    const isCurrentlyFollowing = followingState[userId] || false;

    // Atualiza o estado de carregamento para o usuário específico
    setLoadingState((prev) => ({
      ...prev,
      [userId]: true,
    }));

    try {
      if (isCurrentlyFollowing) {
        await unfollowUser(userId);
        setFollowingState((prev) => ({
          ...prev,
          [userId]: false,
        }));
      } else {
        await followUser(userId);
        setFollowingState((prev) => ({
          ...prev,
          [userId]: true,
        }));
      }
    } finally {
      // Remove o estado de carregamento após a ação
      setLoadingState((prev) => ({
        ...prev,
        [userId]: false,
      }));
    }
  };

  return (
    <S.ButtonFollow
      type="button"
      onClick={handleClick}
      disabled={loadingState[userId]}
      className={loadingState[userId] ? 'loading' : ''}
    >
      {followingState[userId] ? 'Cancelar' : 'Seguir'}
    </S.ButtonFollow>
  );
};

export default ButtonFollow;
