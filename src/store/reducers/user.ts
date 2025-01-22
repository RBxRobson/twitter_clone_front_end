import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: true
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = { ...action.payload };
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoading = true;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
