import { createSlice } from '@reduxjs/toolkit';

type PopUpState = {
  isOpen: boolean
};

const initialState: PopUpState = {
  isOpen: false
};

const popUpSlice = createSlice({
  name: 'popUp',
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

export const { openPopUp, closePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;
