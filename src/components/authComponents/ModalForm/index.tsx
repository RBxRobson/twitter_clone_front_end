import {IconClose, LogoSVG} from '../../../assets/images';
import * as S from './styles';

type Props = {
  formModel: 'register' | 'login';
}

type InputValues = {
  label: string;
  type: string;
}

const ModalForm = ({formModel}: Props) => {
  const isRegisterForm = formModel === 'register';

  const registerFormInputs:InputValues[] = [
    {
      label: 'Nome',
      type: 'text',
    },
    {
      label: 'Email',
      type: 'email',
    },
    {
      label: 'Senha',
      type: 'password',
    },
    {
      label: 'Confirme a senha',
      type: 'password',
    }
  ];

  const loginFormInputs: InputValues[] = [
    {
      label: 'Email',
      type: 'email',
    },
    {
      label: 'Senha',
      type: 'password',
    },
  ];

  const inputs = isRegisterForm ? registerFormInputs : loginFormInputs;

  return (
    <S.Overlay>
      <S.ModalForm>
        <S.ButtonClose type="button" title="Fechar" aria-label="Fechar">
          <img src={IconClose} alt="Ícone fechar" />
        </S.ButtonClose>
        <S.Logo src={LogoSVG} alt="Logo Twitter/X" />
        <S.TitleForm>
          {isRegisterForm ? 'Criar sua conta' : 'Entrar no X'}
        </S.TitleForm>
        {
          inputs.map((input) => (
            <S.Label>
              <S.Input type={input.type} placeholder=" " />
              <span>{input.label}</span>
            </S.Label>
          ))
        }
        <S.ButtonSubmit type="submit">
          Avançar
        </S.ButtonSubmit>
      </S.ModalForm>
    </S.Overlay>
  );
};

export default ModalForm;