import { useDispatch } from 'react-redux';

import { ButtonCreateAccount, ButtonLogin } from '../';
import { setAuthType } from '../../../store/reducers/auth';
import * as S from './styles';

const WrapperLogin = () => {
  const dispatch = useDispatch();

  const handleRegisterClick = () => {
    dispatch(setAuthType('register'));
  };

  const handleLoginClick = () => {
    dispatch(setAuthType('login'));
  };

  return (
    <S.WrapperLogin>
      <h2>
          Acontecendo agora
      </h2>
      <h3>
          Inscreva-se hoje
      </h3>
      <ButtonCreateAccount onclick={handleRegisterClick} text='Criar conta' />
      <S.ConsentMessage>
          Ao se inscrever, você concorda com os <a href="#">Termos de Serviço</a> e 
          a <a href="#">Política de Privacidade</a>, incluindo 
          o <a href="#">Uso de Cookies</a>.
      </S.ConsentMessage>
      <S.Divider>
        <span>ou</span>
      </S.Divider>
      <h4>
        Já tem uma conta?
      </h4>
      <ButtonLogin onclick={handleLoginClick} text='Entrar' />
    </S.WrapperLogin>
  );
};

export default WrapperLogin;