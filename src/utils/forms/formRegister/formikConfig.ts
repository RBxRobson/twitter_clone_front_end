import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

export type FormRegister = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
};

export const useFormRegisterFormik = (): FormikProps<FormRegister> => {
  return useFormik<FormRegister>({
    initialValues: {
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome deve conter no mínimo 3 caracteres')
        .max(50, 'O nome pode conter no máximo 50 caracteres')
        .required('O campo nome é obrigatório'),
      email: Yup.string()
        .email('Insira um endereço de email válido')
        .required('O campo de email é obrigatório'),
      password: Yup.string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          'A senha deve conter no mínimo um símbolo (ex: @, #, $)'
        )
        .matches(/\d/, 'A senha deve conter no mínimo um número')
        .matches(/[A-Z]/, 'A senha deve conter no mínimo uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve conter no mínimo uma letra minúscula')
        .required('O campo de senha é obrigatório'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas digitadas não são iguais')
        .required('O campo de confirmação de senha é obrigatório'),
    }),
    onSubmit: () => {
      
    }
  });
};
