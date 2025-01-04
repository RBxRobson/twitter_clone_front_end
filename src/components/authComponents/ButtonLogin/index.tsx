import * as S from './styles';

type Props = {
  text: string;
};

const ButtonLogin = (props: Props) => {
  return (
    <S.Button>
      {props.text}
    </S.Button>
  );
};

export default ButtonLogin;