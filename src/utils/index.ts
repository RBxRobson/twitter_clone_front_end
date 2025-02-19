import { loginFormInputs } from './forms/formLogin/inputsDetail';
import { registerFormInputs } from './forms/formRegister/inputsDetail';
import { useFormLoginFormik } from './forms/formLogin/formikConfig';
import { useFormRegisterFormik } from './forms/formRegister/formikConfig';
import { useFormPost } from './forms/formPost/formikConfig';
import { useFormUpdateUser } from './forms/formUpdateUser/formikConfig';
import { profileInputs } from './forms/formUpdateUser/inputsDetail';
import { decodeToken } from './functions/decodeToken';


export {
  loginFormInputs,
  registerFormInputs,
  profileInputs,
  useFormLoginFormik,
  useFormRegisterFormik,
  useFormUpdateUser,
  useFormPost,
  decodeToken
};