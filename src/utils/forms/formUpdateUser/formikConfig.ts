import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { useFetchCurrentUserQuery, useUpdateUserMutation } from '../../../services/api';
import { RootReducer } from '../../../store';

export type FormEditProfile = {
  name: string;
  username: string;
  email: string;
  password?: string;
  old_password?: string;
  bio?: string;
  avatar?: File | string;
  header?: File | string;
};

export const useFormUpdateUser = (closeModal: () => void) => {
  // Obtém o usuário do Redux
  const user = useSelector((state: RootReducer) => state.user.user);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { refetch: refetchCurrentUser } = useFetchCurrentUserQuery();

  // Garante que o usuário está carregado antes de iniciar o formulário
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const formik = useFormik<FormEditProfile>({
    initialValues: {
      name: user.name || '',
      username: user.username.replace('@', '') || '',
      email: user.email || '',
      password: '',
      old_password: '',
      bio: user.profile?.bio || '',
      avatar: '',
      header: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, 'O nome deve ter no mínimo 2 caracteres')
        .max(50, 'O nome deve ter no máximo 50 caracteres')
        .matches(/^(?!.*\s{2,}).*$/, 'Não use espaços em sequência'),
      username: Yup.string()
        .matches(/^[a-zA-Z0-9_]+$/, 'O nome de usuário só pode conter letras, números e sublinhado')
        .max(50, 'O nome de usuário deve ter no máximo 50 caracteres')
        .required('O nome de usuário é obrigatório'),
      email: Yup.string()
        .email('Insira um endereço de email válido')
        .required('O email é obrigatório'),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,150}$/,
          'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um número'
        )
        .optional(),
      
      old_password: Yup.string().when('password', {
        is: (password: string) => !!password,
        then: (schema) => schema.required('Para alterar a senha, informe a senha atual'),
        otherwise: (schema) => schema.optional(),
      }),
      bio: Yup.string().optional(),
      avatar: Yup.mixed<File | string>().test(
        'fileFormat',
        'O avatar deve ser uma imagem válida (JPG, PNG)',
        (value) => {
          if (!value || typeof value === 'string') return true; // Permite URL
          return ['image/jpeg', 'image/png'].includes(value.type);
        }
      ),
      header: Yup.mixed<File | string>().test(
        'fileFormat',
        'O header deve ser uma imagem válida (JPG, PNG)',
        (value) => {
          if (!value || typeof value === 'string') return true; // Permite URL
          return ['image/jpeg', 'image/png'].includes(value.type);
        }
      ),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      try {
        const formData = new FormData();

        const appendIfNotEmpty = (key: string, value?: string | File) => {
          if (value && value !== '') {
            formData.append(key, value);
          }
        };
      
        formData.append('name', values.name.trim());
        formData.append('username', values.username);
        formData.append('email', values.email);
          
        if (values.password) {
          appendIfNotEmpty('password', values.password);
          appendIfNotEmpty('old_password', values.old_password || '');
        }
      
        appendIfNotEmpty('profile.bio', values.bio || '');

        if (values.avatar && values.avatar instanceof File) {
          appendIfNotEmpty('profile.avatar', values.avatar);
        }
    
        if (values.header && values.header instanceof File) {
          appendIfNotEmpty('profile.header', values.header);
        }
      
        await updateUser({ userId: user.id, userData: formData }).unwrap();
        await refetchCurrentUser();
        closeModal();
        resetForm();
      } catch (error: any) {
        if (error.data && typeof error.data === 'object') {
          Object.entries(error.data).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              setFieldError(field, messages.join(' '));
            }
          });
        } else {
          alert('Ocorreu um erro ao atualizar o perfil. Tente novamente mais tarde.');
        }
      }
    },
  });

  return { ...formik, isLoading };
};
