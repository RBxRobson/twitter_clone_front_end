import * as S from './styles';

type Props = {
  text: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonLogin = (props: Props) => {
  return (
    <S.Button onClick={props.onclick}>
      {props.text}
    </S.Button>
  );
};

export default ButtonLogin;