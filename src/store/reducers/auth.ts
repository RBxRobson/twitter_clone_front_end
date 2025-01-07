import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  authType: 'login' | 'register',
  isOpen: boolean
};

const initialState: AuthState = {
  authType: 'register',
  isOpen: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthType: (state, action: PayloadAction<AuthState['authType']>) => {
      state.authType = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  }
});

export const { setAuthType, closeModal } = authSlice.actions;
export default authSlice.reducer;
