import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { useLoginUserMutation } from '../../../services/api';
import { setToken } from '../../../store/reducers/tokenJwt';
import { closeModal } from '../../../store/reducers/auth';

export type FormLogin = {
  email: string;
  password: string;
}

export const useFormLoginFormik = (): ExtendedFormikProps<FormLogin> => {
  const [userLogin, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        // Faz o login e obtém o token
        const loginResponse = await userLogin({
          email: values.email,
          password: values.password,
        }).unwrap();

        dispatch(setToken({ token: loginResponse.access }));

        // Navega para a página inicial
        navigate('/home');

        resetForm();
        dispatch(closeModal());
      } catch (error: any) {
        if (error.data) {
          error.data.fields.forEach((field: string) => {
            setFieldError(field, error.data.detail);
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
