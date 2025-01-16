import { createSlice } from '@reduxjs/toolkit';

type PopUpState = {
  isOpen: boolean
};

const initialState: PopUpState = {
  isOpen: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openPopUp: (state) => {
      state.isOpen = true;
    },
    closePopUp: (state) => {
      state.isOpen = false;
    },
  }
});

export const { openPopUp, closePopUp } = authSlice.actions;
export default authSlice.reducer;
