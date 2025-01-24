import * as S from './styles';

type Props = {
  user: User;
}

const ProfileHero = ({ user }:Props) => {
  const srcDefault = 'https://rbxrobson.pythonanywhere.com';

  return (
    <S.ProfileHero>
      <S.Cover 
        src={srcDefault + user.profile.header} 
        alt={`Foto de capa do ${user.name}`} 
      />
      <S.WrapperAvatar>
        <S.Avatar 
          src={srcDefault + user.profile.avatar} 
          alt={`Foto de perfil do ${user.name}`} 
        />
      </S.WrapperAvatar>
    </S.ProfileHero>
  );
};

export default ProfileHero;