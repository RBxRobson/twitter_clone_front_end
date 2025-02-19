import { ButtonBack } from '../../common';
import * as S from './styles';

type Props = {
  name: string;
}

const ProfileHeader = ({ name }:Props) => {
  return (
    <S.Header>
      <ButtonBack />
      <h2>{name}</h2>
    </S.Header>
  );
};

export default ProfileHeader;