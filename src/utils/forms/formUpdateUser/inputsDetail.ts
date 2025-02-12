import { InputValues } from '../inputsTypes';

export const profileInputs: InputValues[] = [
  { label: 'Name', type: 'text', id: 'name', autoComplete: 'name' },
  { label: 'Username', type: 'text', id: 'username', autoComplete: 'username' },
  { label: 'Email', type: 'email', id: 'email', autoComplete: 'email' },
  { label: 'Biografia', type: 'text', id: 'bio', autoComplete: 'bio' },
];