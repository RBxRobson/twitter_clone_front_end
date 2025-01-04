import * as S from './styles';

type Props = {
  text: string;
};

const ButtonCreateAccount = (props: Props) => {
  return (
    <S.Button>
      {props.text}
    </S.Button>
  );
};

export default ButtonCreateAccount;