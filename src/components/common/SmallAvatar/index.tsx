import * as S from './styles';

type Props = {
  user: User;
};

const SmallAvatar = ({ user }: Props) => {
  return (
    <S.SmallAvatar
      src={`https://rbxrobson.pythonanywhere.com${user?.profile.avatar}`} 
      alt={`Foto de perfil do ${user?.name}`}
    />
  );
};

export default SmallAvatar;
