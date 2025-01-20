import { createSlice } from '@reduxjs/toolkit';

type PostModalState = {
  isOpen: boolean
};

const initialState: PostModalState = {
  isOpen: false
};

const postModalSlice = createSlice({
  name: 'postModal',
  initialState,
  reducers: {
    openPostModal: (state) => {
      state.isOpen = true;
    },
    closePostModal: (state) => {
      state.isOpen = false;
    },
  }
});

export const { openPostModal, closePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;