import { useDispatch } from 'react-redux';

import { openPostModal } from '../../../store/reducers/postModal';
import * as S from './styles';

const ButtonPostNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPostModal());
  };

  return (
    <S.ButtonPostNav onClick={handleClick}>
      Publicar
    </S.ButtonPostNav>
  );
};

export default ButtonPostNav;
