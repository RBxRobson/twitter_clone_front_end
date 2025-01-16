import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { decodeToken } from '../../utils/';

type TokenState = {
  token: string | null;
  isValidToken: boolean;
  timeRemaining: number | null;
};

const initialState: TokenState = {
  token: null,
  isValidToken: false,
  timeRemaining: null,
};

const tokenSlice = createSlice({
  name: 'tokenJwt',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string | null }>) => {
      const { token } = action.payload;

      // Decodifica o token
      const { isValid, expiration } = decodeToken(token);

      state.token = token;
      state.isValidToken = isValid;

      if (isValid && expiration) {
        // Calcula o tempo restante
        const timeRemaining = expiration - Date.now();

        // Atualiza o tempo restante no estado
        state.timeRemaining = timeRemaining;
      } else {
        state.timeRemaining = null;
      }
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
