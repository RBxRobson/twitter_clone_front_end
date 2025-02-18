import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PublicationModalState = {
  isOpen: boolean;
  typeModal: 'comment' | 'post' | 'quote' | 'edit' | null;
  post: Post | null;
};

const initialState: PublicationModalState = {
  isOpen: false,
  typeModal: null,
  post: null,
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
      state.post = null;
    },
    openQuoteModal: (state, action: PayloadAction<Post>) => {
      state.typeModal = 'quote';
      state.post = action.payload;
      state.isOpen = true;
    },
    openCommentModal: (state, action: PayloadAction<Post>) => {
      state.typeModal = 'comment';
      state.post = action.payload;
      state.isOpen = true;
    },
    openEditModal: (state, action: PayloadAction<Post>) => {
      state.typeModal = 'edit';
      state.post = action.payload;
      state.isOpen = true;
    },
  },
});

export const { 
  openPublicationModal, 
  closePublicationModal,
  openQuoteModal,
  openCommentModal,
  openEditModal
} = publicationModalSlice.actions;

export default publicationModalSlice.reducer;
