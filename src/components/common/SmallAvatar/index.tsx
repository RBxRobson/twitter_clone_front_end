import * as S from './styles';

type Props = {
  avatar: string;
  username: string;
};

const SmallAvatar = ({ username, avatar }: Props) => {
  return (
    <S.SmallAvatar
      src={`https://rbxrobson.pythonanywhere.com${avatar}`} 
      alt={`Foto de perfil do ${username}`}
    />
  );
};

export default SmallAvatar;
