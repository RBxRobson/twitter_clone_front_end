import * as S from './styles';

type Props = {
  onClickForYou: () => void;
  onClickFollowing: () => void;
  isForYouActive: boolean;
};

const HeaderHome = ({ onClickForYou, onClickFollowing, isForYouActive }: Props) => {
  return (
    <S.HeaderContainer>
      <S.ButtonHeader
        type="button"
        onClick={onClickForYou}
      >
        <S.TextButton className={isForYouActive ? 'active' : ''}>
          Para você
        </S.TextButton>
      </S.ButtonHeader>
      <S.ButtonHeader
        type="button"
        onClick={onClickFollowing}
      >
        <S.TextButton className={isForYouActive ? '' : 'active'}>
          Seguindo
        </S.TextButton>
      </S.ButtonHeader>
    </S.HeaderContainer>
  );
};

export default HeaderHome;