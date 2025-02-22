import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PostState = {
  currentPost: Post | null;
  popUp: {
    isOpen: boolean;
    postId: number | null;
  };
};

const initialState: PostState = {
  currentPost: null,
  popUp: {
    isOpen: false,
    postId: null
  }
};

const currentPostSlice = createSlice({
  name: 'currentPost',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post | null>) => {
      state.currentPost = action.payload;
    },
    openPostPopUp: (state, action: PayloadAction<number>) => {
      state.popUp = {
        isOpen: true,
        postId: action.payload
      };
    },
    closePostPopUp: (state, action: PayloadAction<number>) => {
      state.popUp = {
        isOpen: false,
        postId: action.payload
      };
    }
  }
});

export const { setPost, closePostPopUp, openPostPopUp } = currentPostSlice.actions;
export default currentPostSlice.reducer;
