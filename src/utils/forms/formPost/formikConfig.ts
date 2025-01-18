import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useCreatePostMutation } from '../../../services/api';
import { closePostModal } from '../../../store/reducers/postModal';

export type FormPost = {
  postType: 'original' | 'quote' | 'repost';
  content: string;
}

export const useFormPost = (): ExtendedFormikProps<FormPost> => {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik<FormPost>({
    initialValues: {
      postType: 'original',
      content: '',
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
    
        // Chama a API para criar o post
        await createPost({
          post_type: values.postType,
          content: values.content,
        }).unwrap();
    
        // Fecha o modal e navega para a página inicial
        dispatch(closePostModal());
        navigate('/home');
    
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
