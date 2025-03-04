import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useCreateUserMutation, useLoginUserMutation } from '../../../services/api';
import { setToken } from '../../../store/reducers/tokenJwt';
import { closeModal } from '../../../store/reducers/auth';

export type FormRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useFormRegisterFormik = (): ExtendedFormikProps<FormRegister> => {
  const [createUser, {isLoading: isLoadingCreation}] = useCreateUserMutation();
  const [userLogin, {isLoading: isLoadingLogin}] = useLoginUserMutation();
  const isLoading = isLoadingCreation && isLoadingLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik<FormRegister>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome deve conter no mínimo 3 caracteres')
        .max(50, 'O nome pode conter no máximo 50 caracteres')
        .trim()
        .test(
          'no-multiple-spaces',
          'O nome não pode conter mais de um espaço consecutivo',
          (value) => {
            if (value === undefined) return false;
            return !/\s{2,}/.test(value);
          }
        )
        .required('O campo nome é obrigatório'),
      email: Yup.string()
        .email('Insira um endereço de email válido')
        .required('O campo de email é obrigatório'),
      password: Yup.string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .matches(/\d/, 'A senha deve conter no mínimo um número')
        .matches(/[A-Z]/, 'A senha deve conter no mínimo uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve conter no mínimo uma letra minúscula')
        .required('O campo de senha é obrigatório'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas digitadas não são iguais')
        .required('O campo de confirmação de senha é obrigatório'),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      try {
        // Cria o usuário
        await createUser({
          name: values.name,
          email: values.email,
          password: values.password,
        }).unwrap();
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
          Object.entries(error.data).forEach(([field, message]) => {
            if (Array.isArray(message)) {
              setFieldError(field, message[0] as string);
            } else if (typeof message === 'string') {
              setFieldError(field, message);
            }
          });
        } else {
          alert(
            'Ocorreu um erro desconhecido ao criar o usuário, tente novamente mais tarde.'
          );
        }
      }
    },
  });

  return {...formik, isLoading};
};
