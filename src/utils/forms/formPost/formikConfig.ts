import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { useCreatePostMutation, useEditPostMutation } from '../../../services/api';
import { closePublicationModal } from '../../../store/reducers/publicationModal';

export type FormPost = {
  postType: 'original' | 'quote' | 'repost';
  content: string;
  original_post?: number
}

export const useFormPost = (publication?: Post): ExtendedFormikProps<FormPost> => {
  const [createPost, { isLoading: loadingCreate }] = useCreatePostMutation();
  const [editPost, { isLoading: loadingEdit }] = useEditPostMutation();
  const dispatch = useDispatch();

  const isLoading = loadingCreate || loadingEdit;

  const formik = useFormik<FormPost>({
    initialValues: {
      postType: 'original',
      content: publication ? publication.content : '',
    },
    onSubmit: async (values, { resetForm, setFieldError }) => {
      try {
        // Validação customizada para o campo content
        if (
          (values.postType === 'original' || values.postType === 'quote') &&
          !values.content.trim()
        ) {
          setFieldError('content', 'O conteúdo é obrigatório para esse tipo de postagem.');
          return; // Interrompe o envio se a validação falhar
        }
    
        if (publication) {
          // Chama a API para criar o post
          await editPost({
            postId: publication.id,
            postData: {content : values.content}
          }).unwrap();
        } else {
          // Chama a API para criar o post
          await createPost({
            post_type: values.postType,
            content: values.content,
            original_post: values.original_post,
          }).unwrap();
        }
    
        // Fecha o modal e navega para a página inicial
        dispatch(closePublicationModal());
    
        // Reseta o formulário após o envio
        resetForm();
      } catch {
        alert(
          'Ocorreu um erro desconhecido ao tentar criar a postagem, tente novamente mais tarde.'
        );
      }
    },
  });

  return { ...formik, isLoading };
};
