import * as S from './styles';

type Props = {
  handleClick: () => void;
  isActive: boolean;
  textButton: string;
};

const ButtonHeaderBlur = ({ handleClick, isActive, textButton }: Props) => {
  return (
    <S.ButtonHeader
      type="button"
      onClick={handleClick}
    >
      <S.TextButton className={isActive ? 'active' : ''}>
        {textButton}
      </S.TextButton>
    </S.ButtonHeader>
  );
};

export default ButtonHeaderBlur;
