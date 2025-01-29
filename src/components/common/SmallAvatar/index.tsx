import * as S from './styles';

type Props = {
  user?: User;
  postUser?: UserDetails
};

const SmallAvatar = ({ user, postUser }: Props) => {
  if (postUser) {
    return (
      <S.SmallAvatar
        src={`https://rbxrobson.pythonanywhere.com${postUser.avatar}`} 
        alt={`Foto de perfil do ${postUser.username}`}
      />
    );
  }

  return (
    <S.SmallAvatar
      src={`https://rbxrobson.pythonanywhere.com${user?.profile.avatar}`} 
      alt={`Foto de perfil do ${user?.name}`}
    />
  );
};

export default SmallAvatar;
