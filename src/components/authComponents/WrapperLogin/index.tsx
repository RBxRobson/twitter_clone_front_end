import { ButtonCreateAccount, ButtonLogin } from '../index';
import * as S from './styles';

const WrapperLogin = () => {
  return (
    <S.WrapperLogin>
      <h2>
          Acontecendo agora
      </h2>
      <h3>
          Inscreva-se hoje
      </h3>
      <ButtonCreateAccount text='Criar conta' />
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
      <ButtonLogin text='Entrar' />
    </S.WrapperLogin>
  );
};

export default WrapperLogin;