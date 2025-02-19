import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { useCreatePostMutation, useEditPostMutation } from '../../../services/api';
import { closePublicationModal } from '../../../store/reducers/publicationModal';

export type FormPost = {
  postType: PostType;
  content: string;
  original_post?: number
}

type Props = {
  publication?: Post;
  notModal?: boolean;
}

export const useFormPost = ({publication, notModal = false}:Props): ExtendedFormikProps<FormPost> => {
  const dispatch = useDispatch();
  const [createPost, { isLoading: loadingCreate }] = useCreatePostMutation();
  const [editPost, { isLoading: loadingEdit }] = useEditPostMutation();

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
          (values.postType !== 'repost') &&
          !values.content.trim()
        ) {
          setFieldError('content', 'O conteúdo é obrigatório para esse tipo de postagem.');
          return; // Interrompe o envio se a validação falhar
        }
    
        if (publication) {
          // Chama a API para editar o post
          await editPost({
            postId: publication.id,
            postData: {content : values.content},
          }).unwrap();
        } else {
          // Chama a API para criar o post
          await createPost({
            post_type: values.postType,
            content: values.content,
            original_post: values.original_post,
          }).unwrap();
        }
    
        // Fecha o modal, se houver
        if (!notModal) {
          dispatch(closePublicationModal());
        }
    
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
