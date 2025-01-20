import { LogoSVG } from '../../../assets/images';
import * as S from './styles';

const RedirectHome = () => {
  return (
    <S.RedirectHome>
      <a href="/home">
        <S.Logo src={LogoSVG} alt="Logo Twitter/X" title="Voltar à página inicial" />
      </a>
    </S.RedirectHome>
  );
};

export default RedirectHome;
