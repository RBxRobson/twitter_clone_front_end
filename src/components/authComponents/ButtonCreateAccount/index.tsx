import * as S from './styles';

type Props = {
  text: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonCreateAccount = (props: Props) => {
  return (
    <S.Button onClick={props.onclick}>
      {props.text}
    </S.Button>
  );
};

export default ButtonCreateAccount;