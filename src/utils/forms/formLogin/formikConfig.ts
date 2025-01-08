import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

export type FormLogin = {
  email: string | undefined;
  password: string | undefined;
}

export const useFormLoginFormik = (): FormikProps<FormLogin> => {
  return useFormik<FormLogin>({
    initialValues: {
      email: undefined,
      password: undefined,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Insira um endereço de email válido')
        .required('O campo de email é obrigatório'),
      password: Yup.string()
        .required('O campo de senha é obrigatório'),
    }),
    onSubmit: () => {
      
    }
  });
};
