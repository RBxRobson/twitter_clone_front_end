import { ButtonHeaderBlur } from '../../common';
import * as S from './styles';

type Props = {
  onClickForYou: () => void;
  onClickFollowing: () => void;
  isForYouActive: boolean;
};

const HeaderHome = ({ onClickForYou, onClickFollowing, isForYouActive }: Props) => {
  return (
    <S.HeaderContainer>
      <ButtonHeaderBlur 
        handleClick={onClickForYou}
        isActive={isForYouActive}
        textButton="Para você"
      />
      <ButtonHeaderBlur 
        handleClick={onClickFollowing}
        isActive={isForYouActive ? false : true}
        textButton="Seguindo"
      />
    </S.HeaderContainer>
  );
};

export default HeaderHome;