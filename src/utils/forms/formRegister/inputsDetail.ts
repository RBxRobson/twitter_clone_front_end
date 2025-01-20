import { InputValues } from '../inputsTypes';

export const registerFormInputs: InputValues[] = [
  { label: 'Nome', type: 'text', id: 'name', autoComplete: 'name' },
  { label: 'Email', type: 'email', id: 'email', autoComplete: 'email' },
  { label: 'Senha', type: 'password', id: 'password', autoComplete: 'new-password' },
  { label: 'Confirme a senha', type: 'password', id: 'confirmPassword', autoComplete: 'new-password' },
];