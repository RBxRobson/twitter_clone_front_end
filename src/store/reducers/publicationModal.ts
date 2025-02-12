import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from '../../types/comment-details';

type PublicationModalState = {
  isOpen: boolean;
  typeModal: 'comment' | 'post' | 'quote' | 'edit' | null;
  post: Post | null;
  comment: Comment | null;
};

const initialState: PublicationModalState = {
  isOpen: false,
  typeModal: null,
  post: null,
  comment: null
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
      state.comment = null;
      state.post = null;
    },
    openQuoteModal: (state, action: PayloadAction<Post>) => {
      state.typeModal = 'quote';
      state.post = action.payload;
      state.comment = null;
      state.isOpen = true;
    },
    openCommentModal: (state, action: PayloadAction<Comment | Post>) => {
      state.typeModal = 'comment';

      if ('post_type' in action.payload) {
        state.post = action.payload as Post;
        state.comment = null;
      } else {
        state.comment = action.payload as Comment;
        state.post = null;
      }
      
      state.isOpen = true;
    },
    openEditModal: (state, action: PayloadAction<Comment | Post>) => {
      state.typeModal = 'edit';

      if ('post_type' in action.payload) {
        state.post = action.payload as Post;
        state.comment = null;
      } else {
        state.comment = action.payload as Comment;
        state.post = null;
      }
      
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
