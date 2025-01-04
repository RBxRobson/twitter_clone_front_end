import * as S from './styles';
import { InfosBar, ContainerAuth } from '../../components';

const Auth = () => {
  return (
    <S.AuthMain>
      <ContainerAuth />
      <InfosBar />
    </S.AuthMain>
  );
};

export default Auth;