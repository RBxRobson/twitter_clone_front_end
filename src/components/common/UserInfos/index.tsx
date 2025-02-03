import { useLocation, useNavigate } from 'react-router-dom';

import { formatTimeAgo } from '../../../utils/functions/formatedTimeAgo';
import * as S from './styles';

type Props = {
  user?: User;
  post?: Post;
  navigateProfile?: boolean;
};

const UserInfos = ({ user, post, navigateProfile = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = (
    event: React.MouseEvent,
    username: string
  ) => {
    event.stopPropagation();
    const sanitizedUsername = username.replace('@', '');
  
    if (`/profile/${sanitizedUsername}` === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(`/profile/${sanitizedUsername}`);
    }
  };

  const setContentUserInfos = () => {
    if (post && navigateProfile) {
      return (
        <S.PostContainer>
          <S.UserInfos>
            <S.WrapperOverflow>
              <a onClick={() => handleProfileClick}>
                {post?.user_details.name}
              </a>
            </S.WrapperOverflow>
          </S.UserInfos>
          <S.UserInfos>
            <S.WrapperOverflow>
              <span>{post?.user_details.username}</span>
            </S.WrapperOverflow>
          </S.UserInfos>
          <time>
            <span className='divisor'>·</span>
            {formatTimeAgo(post?.created_at)}
          </time>
        </S.PostContainer>
      );
    } else if (post) {
      return (
        <S.PostContainer>
          <S.UserInfos>
            <S.WrapperOverflow>
              <h4>
                {post?.user_details.name}
              </h4>
            </S.WrapperOverflow>
          </S.UserInfos>
          <S.UserInfos>
            <S.WrapperOverflow>
              <span>{post?.user_details.username}</span>
            </S.WrapperOverflow>
          </S.UserInfos>
          <time>
            <span className='divisor'>·</span>
            {formatTimeAgo(post?.created_at)}
          </time>
        </S.PostContainer>
      );
    } else {
      return (
        <S.UserInfos>
          <S.WrapperOverflow>
            <h4>{user?.name}</h4>
          </S.WrapperOverflow>
          <S.WrapperOverflow>
            <span>
              {user?.username}
            </span>
          </S.WrapperOverflow>
        </S.UserInfos>
      );
    };
  };

  return (
    setContentUserInfos()
  );
};

export default UserInfos;
