import { useSelector } from 'react-redux';

import LogoSVG from '../../../assets/images/logo.svg';
import { ModalForm, WrapperLogin } from '../index';
import { RootReducer } from '../../../store';
import * as S from './styles';

const ContainerAuth = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.auth);

  return (
    <S.ContainerAuth>
      <S.Logo>
        <img src={LogoSVG} alt="Logo Twitter/X" />
      </S.Logo>
      <WrapperLogin />
      {isOpen && <ModalForm />}
    </S.ContainerAuth>
  );
};

export default ContainerAuth;