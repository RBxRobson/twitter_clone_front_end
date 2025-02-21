import { useDispatch } from 'react-redux';

import { MoreIcon } from '../../../assets/images';
import { openPostPopUp } from '../../../store/reducers/currentPost';
import * as S from './styles';

type Props = {
  postId: number;
}

const MoreButton = ({ postId }:Props) => {
  const dispatch = useDispatch();

  return (
    <S.MoreButton 
      type="button" 
      onClick={
        (e) => {
          e.stopPropagation();
          dispatch(openPostPopUp(postId));
        }
      } 
    >
      <img src={MoreIcon} alt="Mais opções" />
    </S.MoreButton>
  );
};

export default MoreButton;
