import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { useEffect } from 'react';

import { IconClose } from '../../../assets/images';
import { RootReducer } from '../../../store';
import { useFormPost } from '../../../utils/';
import { closePublicationModal } from '../../../store/reducers/publicationModal';
import { CommentModal, EditModal, PostModal, QuoteModal } from '../';
import * as S from './styles';

const PublicationModal = () => {
  const dispatch = useDispatch();
  const { typeModal, post, isOpen } = useSelector((state: RootReducer) => state.publicationModal);
  const { user } = useSelector((state: RootReducer) => state.user);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  const formik = useFormPost({publication: typeModal === 'edit' ? post! : undefined});
  const useFormFormik = formik as FormikValues;

  const handleClickClose = () => {
    dispatch(closePublicationModal());
  };

  const handleClickSubmit = () => {
    if (typeModal === 'comment') {
      useFormFormik.setFieldValue('postType', 'comment');
      useFormFormik.setFieldValue('original_post', post?.id);
    } else if (typeModal === 'post') {
      useFormFormik.setFieldValue('postType', 'original');
    } else if (typeModal === 'edit') {
      useFormFormik.handleSubmit();
    } else {
      useFormFormik.setFieldValue('postType', 'quote');
      useFormFormik.setFieldValue('original_post', post?.id);
    };
  };

  return (
    <S.ModalOverlay className="modal" onClick={handleClickClose}>
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
        {typeModal === 'post' && (
          <PostModal form={useFormFormik} user={user!}/>
        )}
        {typeModal === 'quote' && (
          <QuoteModal post={post!} form={useFormFormik} user={user!}/>
        )}
        {typeModal === 'comment' && (
          <CommentModal 
            publication={post!} 
            form={useFormFormik} 
            user={user!}
          />
        )}
        {typeModal === 'edit' && (
          <EditModal
            publication={post!} 
            form={useFormFormik} 
            user={user!}
          />
        )}
        <S.ButtonSubmit 
          type="submit" 
          disabled={
            !useFormFormik.isValid || 
            !useFormFormik.dirty || 
            useFormFormik.isLoading
          }
          onClick={handleClickSubmit}
        >
          {typeModal === 'edit' ? 'Salvar' : 'Publicar'}
        </S.ButtonSubmit>
      </S.ModalForm>
    </S.ModalOverlay>
  );
};

export default PublicationModal;