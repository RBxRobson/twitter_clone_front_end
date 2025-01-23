import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { decodeToken } from '../../utils/';

type TokenState = {
  token: string | null;
  isValidToken: boolean;
  expirationTime: number | null;
};

const initialState: TokenState = {
  token: null,
  isValidToken: false,
  expirationTime: null,
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
      state.expirationTime = expiration;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
