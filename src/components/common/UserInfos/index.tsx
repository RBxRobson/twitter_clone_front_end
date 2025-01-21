import * as S from './styles';

type Props = {
  user: User;
};

const UserInfos = ({ user }: Props) => {
  return (
    <S.UserInfos>
      <h4>{user?.name}</h4>
      <span>{user?.username}</span>
    </S.UserInfos>
  );
};

export default UserInfos;
