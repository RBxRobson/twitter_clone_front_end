import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useCreatePostMutation, useEditPostMutation } from '../../../services/api';
import { closePublicationModal } from '../../../store/reducers/publicationModal';
import { RootReducer } from '../../../store';

export type FormPost = {
  postType: 'original' | 'quote' | 'repost';
  content: string;
  original_post?: number
}

type Props = {
  publication?: Post;
  notModal?: boolean;
}

export const useFormPost = ({publication, notModal = false}:Props): ExtendedFormikProps<FormPost> => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state: RootReducer) => state.user);
  const username = user!.username.replace('@', '');
  const [createPost, { isLoading: loadingCreate }] = useCreatePostMutation();
  const [editPost, { isLoading: loadingEdit }] = useEditPostMutation();

  const isLoading = loadingCreate || loadingEdit;
  const tags = location.pathname.includes(username) ? ['UserPosts'] : ['Posts', 'UserPosts'];

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
            postData: {content : values.content},
            tags: tags
          }).unwrap();
        } else {
          // Chama a API para criar o post
          await createPost({
            post_type: values.postType,
            content: values.content,
            original_post: values.original_post,
            tags: tags
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
