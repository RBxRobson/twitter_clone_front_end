import LogoSVG from '../../../assets/images/logo.svg';
import WrapperLogin from '../WrapperLogin';
import * as S from './styles';

const ContainerAuth = () => {
  return (
    <S.ContainerAuth>
      <S.Logo>
        <img src={LogoSVG} alt="Logo Twitter/X" />
      </S.Logo>
      <WrapperLogin />
    </S.ContainerAuth>
  );
};

export default ContainerAuth;