import { useLocation, useNavigate } from 'react-router-dom';

import { formatTimeAgo } from '../../../utils/functions/formatedTimeAgo';
import * as S from './styles';

type Props = {
  children?: JSX.Element
  post: Post
};

const Content = ({ children, post }: Props) => {
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

  return (
    <S.Wrapper>
      <S.UserInfos 
        onClick={(e) => handleProfileClick(e, post.user_details.username)}
      >
        <h4 title="Visitar perfil">{post.user_details.name}</h4>
        <span title="Visitar perfil">{post.user_details.username}</span>
        <span className="time" onClick={(e) => e.stopPropagation()}>
          {`${formatTimeAgo(post.created_at)}`}
        </span>
      </S.UserInfos>
      <S.ContentPost>{post.content}</S.ContentPost>
      {children}
    </S.Wrapper>

  );
};

export default Content;
