import { BackIcon } from '../../../assets/images';
import * as S from './styles';

type Props = {
  name: string;
}

const ProfileHeader = ({ name }:Props) => {
  return (
    <S.Header>
      <S.BtnBack href="/home" title="Voltar para página inicial">
        <img src={BackIcon} alt="Ícone de voltar" />
      </S.BtnBack>
      <h2>{name}</h2>
    </S.Header>
  );
};

export default ProfileHeader;