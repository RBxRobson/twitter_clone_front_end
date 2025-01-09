import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useLoginUserMutation } from '../../../services/api';

export type FormLogin = {
  email: string;
  password: string;
}

export const useFormLoginFormik = (): ExtendedFormikProps<FormLogin> => {
  const [userLogin, {isLoading}] = useLoginUserMutation();

  const formik = useFormik<FormLogin>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Insira um endereço de email válido')
        .required('O campo de email é obrigatório'),
      password: Yup.string()
        .required('O campo de senha é obrigatório'),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      try {
        const response = await userLogin({
          email: values.email,
          password: values.password,
        }).unwrap();
        // Salva chave de acesso no localStorage 
        // (Por ser um projeto de estudos vou relevar a segurança)
        localStorage.setItem('token', response.access);
        resetForm();
      } catch (error: any) {
        if (error.data) {
          Object.entries(error.data).forEach(([field, message]) => {
            if (Array.isArray(message)) {
              setFieldError(field, message[0] as string);
            } else if (typeof message === 'string') {
              setFieldError(field, message);
            }
          });
        } else {
          alert(
            'Ocorreu um erro desconhecido ao tentar o login, tente novamente mais tarde.'
          );
        }
      }
    },
  });

  return { ...formik, isLoading };
};
