import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PublicationModalState = {
  isOpen: boolean
  typeModal: 'comment' | 'post' | 'quote' | null
};

const initialState: PublicationModalState = {
  isOpen: false,
  typeModal: null
};

const publicationModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openPublicationModal: (state, action: PayloadAction<PublicationModalState['typeModal']>) => {
      state.isOpen = true;
      state.typeModal = action.payload;
    },
    closePublicationModal: (state) => {
      state.isOpen = false;
      state.typeModal = null;
    }
  }
});

export const { 
  openPublicationModal, 
  closePublicationModal
} = publicationModalSlice.actions;
export default publicationModalSlice.reducer;