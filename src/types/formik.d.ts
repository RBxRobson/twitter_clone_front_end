import { FormikProps } from 'formik';

declare global {
  type ExtendedFormikProps<T> = FormikProps<T> & {
    isLoading: boolean;
  };
}