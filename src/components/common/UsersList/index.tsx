import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../../store';
import { ButtonFollow, SmallAvatar, UserInfos} from '../';
import * as S from './styles';

type Props = {
  users: User[];
  titleList?: string
};

const UsersList = ({ users, titleList }: Props) => {
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state: RootReducer) => state.user);

  return (
    <S.UsersList>
      {titleList && <h2>{titleList}</h2>}
      {users?.map((user) => (
        <S.User 
          key={user.id}
          onClick={() => navigate(`/profile/${user.username.replace('@', '')}`)}
        >
          <S.UserContainer>
            <SmallAvatar avatar={user.profile.avatar} username={user.username} />
            <UserInfos user={user} />
            {currentUser?.id !== user.id &&
              <ButtonFollow userId={user.id} isFollowing={user.is_following}/>
            }
          </S.UserContainer>
          {user.profile.bio && <p>{user.profile.bio}</p>}
        </S.User>
      ))}
    </S.UsersList>
  );
};

export default UsersList;