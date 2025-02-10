import * as S from './styles';
import { useFollow } from '../';

type Props = {
  userId: number;
  isFollowing: boolean;
};

const ButtonFollow = ({ userId, isFollowing }: Props) => {
  const { followingState, loading, toggleFollow } = useFollow(userId, isFollowing);

  return (
    <S.ButtonFollow
      type="button"
      onClick={toggleFollow}
      disabled={loading}
      className={loading ? 'loading' : ''}
    >
      {followingState ? 'Cancelar' : 'Seguir'}
    </S.ButtonFollow>
  );
};

export default ButtonFollow;
