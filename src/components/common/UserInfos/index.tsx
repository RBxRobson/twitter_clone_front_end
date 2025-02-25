import { useLocation, useNavigate } from 'react-router-dom';

import { formatTimeAgo } from '../../../utils/functions/formatedTimeAgo';
import * as S from './styles';

type Props = {
  user?: User;
  publication?: Post;
  isPostPage?: boolean;
  navigateProfile?: boolean;
};

const UserInfos = ({ 
  user, publication, 
  isPostPage = false, 
  navigateProfile = false 
}: Props) => {
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

  if (publication) {
    const { name, username } = publication.user_details;

    if (isPostPage) {
      return(
        <S.UserInfos>
          <S.WrapperOverflow>
            <a onClick={(e) => handleProfileClick(e, username)}>{name}</a>
          </S.WrapperOverflow>
          <S.WrapperOverflow>
            <span onClick={(e) => handleProfileClick(e, username)}>{username}</span>
          </S.WrapperOverflow>
        </S.UserInfos>
      );
    }

    return (
      <div>
        <S.PostContainer>
          <S.UserInfos>
            <S.WrapperOverflow>
              {navigateProfile ? (
                <a onClick={(e) => handleProfileClick(e, username)}>{name}</a>
              ) : (
                <h4 onClick={(e) => handleProfileClick(e, username)}>{name}</h4>
              )}
            </S.WrapperOverflow>
          </S.UserInfos>
          <S.UserInfos>
            <S.WrapperOverflow>
              <span>{username}</span>
            </S.WrapperOverflow>
          </S.UserInfos>
          <time>
            <span className='divisor'>·</span>
            {formatTimeAgo(publication.created_at)}
          </time>
        </S.PostContainer>
        {publication.post_type === 'comment' && 
        !location.pathname.includes('posts') &&
        <S.ReplyWarning>
          <span>Respondendo a </span>
          <a 
            href={`/profile/${publication.user_details.username.replace('@', '')}`}>
            {publication.user_details.username}
          </a>
        </S.ReplyWarning>
        }
      </div>
    );
  }

  if (user) {
    return (
      <S.UserInfos>
        <S.WrapperOverflow>
          <h4>{user.name}</h4>
        </S.WrapperOverflow>
        <S.WrapperOverflow>
          <span>{user.username}</span>
        </S.WrapperOverflow>
      </S.UserInfos>
    );
  }

  return null;
};

export default UserInfos;
