import { useNavigate } from 'react-router-dom';

import { BackIcon } from '../../../assets/images';
import * as S from './styles';


const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <S.BtnBack onClick={() => navigate(-1)} title="Voltar para página anterior">
      <img src={BackIcon} alt="Voltar para página anterior" />
    </S.BtnBack>
  );
};

export default ButtonBack;
