import { useDispatch } from 'react-redux';

import { openPublicationModal } from '../../../store/reducers/publicationModal';
import { AddIconPost } from '../../../assets/images';
import * as S from './styles';

const ButtonPostNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPublicationModal('post'));
  };

  return (
    <S.ButtonPostNav onClick={handleClick} title="Publicar">
      <span>Publicar</span>

      <img src={AddIconPost} alt="Publicar" />
    </S.ButtonPostNav>
  );
};

export default ButtonPostNav;
