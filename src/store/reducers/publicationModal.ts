import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PublicationModalState = {
  isOpen: boolean
  typeModal: 'comment' | 'post' | 'quote' | null
  quotePost: Post | null
};

const initialState: PublicationModalState = {
  isOpen: false,
  typeModal: null,
  quotePost: null
};

const publicationModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openPublicationModal: (
      state, action: PayloadAction<PublicationModalState['typeModal']>
    ) => {
      state.typeModal = action.payload;
      state.isOpen = true;
    },
    closePublicationModal: (state) => {
      state.isOpen = false;
      state.typeModal = null;
    },
    setQuotePost: (
      state, action: PayloadAction<PublicationModalState['quotePost']>
    ) => {
      state.typeModal = 'quote';
      state.quotePost = action.payload;
      state.isOpen = true;
      console.log(state.typeModal, action.payload, state.isOpen);
    }
  }
});

export const { 
  openPublicationModal, 
  closePublicationModal,
  setQuotePost,
} = publicationModalSlice.actions;
export default publicationModalSlice.reducer;