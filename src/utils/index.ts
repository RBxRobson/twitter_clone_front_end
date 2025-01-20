import { loginFormInputs } from './forms/formLogin/inputsDetail';
import { registerFormInputs } from './forms/formRegister/inputsDetail';
import { useFormLoginFormik } from './forms/formLogin/formikConfig';
import { useFormRegisterFormik } from './forms/formRegister/formikConfig';
import { decodeToken } from './functions/decodeToken';


export {
  loginFormInputs,
  registerFormInputs,
  useFormLoginFormik,
  useFormRegisterFormik,
  decodeToken
};