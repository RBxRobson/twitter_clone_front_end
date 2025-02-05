import { useDispatch } from 'react-redux';

import { openPublicationModal } from '../../../store/reducers/publicationModal';
import * as S from './styles';

const ButtonPostNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPublicationModal('post'));
  };

  return (
    <S.ButtonPostNav onClick={handleClick}>
      Publicar
    </S.ButtonPostNav>
  );
};

export default ButtonPostNav;
