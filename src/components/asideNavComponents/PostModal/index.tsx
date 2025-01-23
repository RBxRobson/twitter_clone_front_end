import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormikValues } from 'formik';

import { closePostModal } from '../../../store/reducers/postModal';
import { IconClose } from '../../../assets/images';
import { RootReducer } from '../../../store';
import * as S from './styles';
import { useFormPost } from '../../../utils/forms/formPost/formikConfig';
import { SmallAvatar } from '../../common';

const PostModal = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootReducer) => state.user);
  const useFormFormik = useFormPost() as FormikValues;

  const handleClickClose = () => {
    dispatch(closePostModal());
  };

  return (
    <S.ModalOverlay onClick={handleClickClose}>
      <S.ModalForm 
        onClick={(e) => e.stopPropagation()}
        onSubmit={useFormFormik.handleSubmit}
      >
        <S.ButtonClose 
          onClick={handleClickClose} 
          type="button" 
          title="Fechar" 
          aria-label="Fechar"
        >
          <img src={IconClose} alt="Ícone fechar" />
        </S.ButtonClose>
        <S.InputGroup>
          <SmallAvatar user={user!} />
          <S.TextField 
            placeholder="O que está acontecendo?!" 
            maxLength={280}
            id="content" 
            name="content"
            onChange={useFormFormik.handleChange}
            onBlur={useFormFormik.handleBlur}
            value={useFormFormik.values['content']}
          />
        </S.InputGroup>
        <S.ButtonSubmit 
          type="submit" 
          disabled={
            !useFormFormik.isValid || 
                !useFormFormik.dirty || 
                useFormFormik.isLoading
          }
          onClick={() => {
            useFormFormik.setFieldValue('postType', 'original');
          }}
        >
              Publicar
        </S.ButtonSubmit>
      </S.ModalForm>
    </S.ModalOverlay>
  );
};

export default PostModal;
