import { FormikValues } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { IconClose, CameraIcon } from '../../../assets/images';
import { profileInputs, useFormUpdateUser } from '../../../utils';
import * as S from './styles';
import { RootReducer } from '../../../store';

type Props = {
  closeModal: () => void;
}

const UpdateUserModal = ({ closeModal }: Props) => {
  const { user } = useSelector((state: RootReducer) => state.user);
  const useFormFormik = useFormUpdateUser(closeModal) as FormikValues;
  const inputs = profileInputs;
  const address = 'https://rbxrobson.pythonanywhere.com/';
  // Estados para armazenar as imagens temporárias (pré-visualização)
  const [previewAvatar, setPreviewAvatar] = useState(address + user?.profile.avatar);
  const [previewHeader, setPreviewHeader] = useState(address + user?.profile.header);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, field: 'avatar' | 'header') => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (field === 'avatar') {
        setPreviewAvatar(imageUrl);
        useFormFormik.setFieldValue('avatar', file);
      } else {
        setPreviewHeader(imageUrl);
        useFormFormik.setFieldValue('header', file);
      }
    }
  };

  const handleRemoveImage = ( e: React.MouseEvent ) => {
    e.stopPropagation();
    setPreviewHeader(address + user?.profile.header);
    useFormFormik.setFieldValue('header', user?.profile.header);
  };

  const isFieldError = (fieldName: string) => {
    const isTouched = fieldName in useFormFormik.touched;
    const isInvalid = fieldName in useFormFormik.errors;

    return isTouched && isInvalid;
  };

  const getErrorMessage = (fieldName: string, message: string) => {
    if (isFieldError(fieldName) === true) {
      return message;
    }
  };

  const classLoading = useFormFormik.isLoading ? 'loading' : '';

  return (
    <S.ModalOverlay onClick={closeModal}>
      <S.ModalForm 
        onClick={(e) => e.stopPropagation()}
        onSubmit={useFormFormik.handleSubmit}
      >
        <S.HeaderModal>
          <S.CloseModal title="Fechar" onClick={closeModal}>
            <img src={IconClose} alt="Fechar" />
          </S.CloseModal>
          <h2>Editar Perfil</h2>
          <S.ButtonSubmit
            type="submit" 
            disabled={!useFormFormik.isValid || !useFormFormik.dirty || useFormFormik.isLoading}
            className={classLoading}
          >
            Salvar
          </S.ButtonSubmit>
        </S.HeaderModal>

        <S.ProfileImages>
          <S.BannerContainer>
            <label htmlFor="header">
              <S.BannerImage src={previewHeader} alt="Foto de capa" />
              <S.EditIcon 
                title="Adicionar imagem"
                className={
                  previewHeader !== address + user?.profile.header ? 'gap' : ''
                }
              >
                <img src={CameraIcon} alt="Adicionar imagem" />
              </S.EditIcon>
            </label>
            {previewHeader !== address + user?.profile.header && (
              <S.RemoveIcon title="Remover imagem" onClick={(e) => handleRemoveImage(e)}>
                <img src={IconClose} alt="Remover imagem" />
              </S.RemoveIcon>
            )}
            <input 
              type="file" 
              id="header" 
              accept=".png, .jpg, .jpeg"
              onChange={(e) => handleImageChange(e, 'header')}
              hidden
            />
          </S.BannerContainer>
          <S.AvatarContainer>
            <label htmlFor="avatar">
              <S.AvatarImage src={previewAvatar} alt="Foto de perfil" />
              <S.EditIcon title="Adicionar imagem">
                <img src={CameraIcon} alt="Adicionar imagem" />
              </S.EditIcon>
            </label>
            <input 
              type="file" 
              id="avatar" 
              accept=".png, .jpg, .jpeg"
              onChange={(e) => handleImageChange(e, 'avatar')}
              hidden
            />
          </S.AvatarContainer>
        </S.ProfileImages>
        <S.TextInputsContainer>
          {inputs.map((input, index) => (
            <React.Fragment key={`${input.id}_${index}`}>
              <S.LabelContainer htmlFor={input.id}>
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
              </S.LabelContainer>
              <S.MessageError>
                {getErrorMessage(input.id, useFormFormik.errors[input.id])}
              </S.MessageError>
            </React.Fragment>
          ))}
          <h2>Alterar senha</h2>
          <S.LabelContainer htmlFor="password">
            <input 
              autoComplete="password"
              placeholder=" " 
              id="password"
              name="password"
              type="password"
              onChange={useFormFormik.handleChange}
              onBlur={useFormFormik.handleBlur}
              value={useFormFormik.values['password']}
              className={isFieldError('password') ? 'error' : ''}
            />
            <span className={isFieldError('password') ? 'error' : ''}>
              Digite sua nova senha
            </span>
          </S.LabelContainer>
          <S.MessageError>
            {getErrorMessage('password', useFormFormik.errors['password'])}
          </S.MessageError>
          <S.LabelContainer htmlFor="old_password">
            <input 
              autoComplete="old_password"
              placeholder=" " 
              id="old_password"
              name="old_password"
              type="password"
              onChange={useFormFormik.handleChange}
              onBlur={useFormFormik.handleBlur}
              value={useFormFormik.values['old_password']}
              disabled={!useFormFormik.values.password}
              className={isFieldError('old_password') ? 'error' : ''}
              title={!useFormFormik.values.password ? 'Primeiro informe uma nova senha' : ''}
            />
            <span 
              className={isFieldError('old_password') ? 'error' : ''}
              title={!useFormFormik.values.password ? 'Primeiro informe uma nova senha' : ''}
            >
              Confirme sua senha atual
            </span>
          </S.LabelContainer>
          <S.MessageError>
            {getErrorMessage('old_password', useFormFormik.errors['old_password'])}
          </S.MessageError>
        </S.TextInputsContainer>
      </S.ModalForm>
    </S.ModalOverlay>
  );
};

export default UpdateUserModal;
