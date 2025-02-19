import { useLocation, useNavigate } from 'react-router-dom';

import { formatTimeAgo } from '../../../utils/functions/formatedTimeAgo';
import * as S from './styles';

type Props = {
  user?: User;
  publication?: Post;
  navigateProfile?: boolean;
};

const UserInfos = ({ user, publication, navigateProfile = false }: Props) => {
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
    if (publication && navigateProfile) {
      return (
        <S.PostContainer>
          <S.UserInfos>
            <S.WrapperOverflow >
              <a 
                onClick={(e) => 
                  handleProfileClick(e, publication.user_details.username)
                }
              >
                {publication?.user_details.name}
              </a>
            </S.WrapperOverflow>
          </S.UserInfos>
          <S.UserInfos>
            <S.WrapperOverflow>
              <span>{publication?.user_details.username}</span>
            </S.WrapperOverflow>
          </S.UserInfos>
          <time>
            <span className='divisor'>·</span>
            {formatTimeAgo(publication?.created_at)}
          </time>
        </S.PostContainer>
      );
    } else if (publication) {
      return (
        <S.PostContainer>
          <S.UserInfos>
            <S.WrapperOverflow>
              <h4>
                {publication?.user_details.name}
              </h4>
            </S.WrapperOverflow>
          </S.UserInfos>
          <S.UserInfos>
            <S.WrapperOverflow>
              <span>{publication?.user_details.username}</span>
            </S.WrapperOverflow>
          </S.UserInfos>
          <time>
            <span className='divisor'>·</span>
            {formatTimeAgo(publication?.created_at)}
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
