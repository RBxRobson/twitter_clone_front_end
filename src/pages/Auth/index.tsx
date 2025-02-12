import * as S from './styles';
import { ContainerAuth } from '../../components/authComponents';
import { InfosBar } from '../../components/common';

const Auth = () => {
  return (
    <S.AuthMain>
      <ContainerAuth />
      <InfosBar />
    </S.AuthMain>
  );
};

export default Auth;