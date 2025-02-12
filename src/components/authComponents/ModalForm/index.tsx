import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormikValues } from 'formik';

import { RootReducer } from '../../../store';
import { IconClose, LogoSVG } from '../../../assets/images';
import { closeModal } from '../../../store/reducers/auth';
import { 
  loginFormInputs, 
  registerFormInputs,
  useFormLoginFormik, 
  useFormRegisterFormik
} from '../../../utils';
import * as S from './styles';

const ModalForm = () => {
  const dispatch = useDispatch();
  const { authType } = useSelector((state: RootReducer) => state.auth);
  const isRegisterForm = authType === 'register';

  const { useFormFormik, inputs } = isRegisterForm
    ? {
      useFormFormik: useFormRegisterFormik() as FormikValues,
      inputs: registerFormInputs,
    }
    : {
      useFormFormik: useFormLoginFormik() as FormikValues,
      inputs: loginFormInputs,
    };

  const isFieldError = (fieldName: string) => {
    const isTouched = fieldName in useFormFormik.touched;
    const isInvalid = fieldName in useFormFormik.errors;
    const isChanged = useFormFormik.values[fieldName] !== useFormFormik.initialValues[fieldName];

    return isTouched && isInvalid && isChanged;
  };

  const getErrorMessage = (fieldName: string, message: string) => {
    if (isFieldError(fieldName) === true) {
      return message;
    };
  };

  const classLoading = useFormFormik.isLoading ? 'loading' : '';

  return (
    <S.ModalOverlay onClick={() => dispatch(closeModal())} >
      <S.ModalForm 
        onClick={(e) => e.stopPropagation()}
        onSubmit={useFormFormik.handleSubmit} 
        className={classLoading}
      >
        <S.ButtonClose 
          onClick={() => dispatch(closeModal())} 
          type="button" 
          title="Fechar" 
          aria-label="Fechar"
        >
          <img src={IconClose} alt="Ícone fechar" />
        </S.ButtonClose>
        <S.Logo src={LogoSVG} alt="Logo Twitter/X" />
        <S.TitleForm>
          {isRegisterForm ? 'Criar sua conta' : 'Entrar no X'}
        </S.TitleForm>
        {
          inputs.map((input, index) => (
            <React.Fragment key={`${input.id}_${index}`}>
              <S.Label htmlFor={input.id}>
                <input 
                  autoComplete={input.autoComplete}
                  placeholder=" " 
                  id={input.id} 
                  name={input.id} 
                  type={input.type} 
                  onChange={useFormFormik.handleChange}
                  onBlur={useFormFormik.handleBlur}
                  value={useFormFormik.values[input.id]}
                  className={isFieldError(input.id) ? 'error' : ''}
                />
                <span className={isFieldError(input.id) ? 'error' : ''}>
                  {input.label}
                </span>
              </S.Label>
              <S.MessageError>
                {getErrorMessage(
                  input.id,
                  useFormFormik.errors[input.id]
                )}
              </S.MessageError>
            </React.Fragment>
          ))
        }
        <S.ButtonSubmit 
          type="submit" 
          disabled={!useFormFormik.isValid || !useFormFormik.dirty || useFormFormik.isLoading}
          className={classLoading}
        >
          Avançar
        </S.ButtonSubmit>
      </S.ModalForm>
    </S.ModalOverlay>
  );
};

export default ModalForm;