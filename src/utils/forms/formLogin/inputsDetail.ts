import { InputValues } from '../inputsTypes';

export const loginFormInputs: InputValues[] = [
  { label: 'Email', type: 'email', id: 'email', autoComplete: 'email' },
  { label: 'Senha', type: 'password', id: 'password', autoComplete: 'current-password' },
];
