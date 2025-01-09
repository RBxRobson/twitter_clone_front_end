import { InputValues } from '../inputsTypes';

export const registerFormInputs: InputValues[] = [
  { label: 'Nome', type: 'text', id: 'name' },
  { label: 'Email', type: 'email', id: 'email' },
  { label: 'Senha', type: 'password', id: 'password' },
  { label: 'Confirme a senha', type: 'password', id: 'confirmPassword' },
];