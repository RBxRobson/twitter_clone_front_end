import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FollowersState = {
  isFollowers: boolean,
  targetUser: {
    name: string,
    username: string,
  } | null
};

const initialState: FollowersState = {
  isFollowers: true,
  targetUser: null
};

const followersSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {
    setIsFollowers: (state, action: PayloadAction<boolean>) => {
      state.isFollowers = action.payload;
    },
    setTargetUser: (state, action: PayloadAction<FollowersState['targetUser']>) => {
      state.targetUser = action.payload;
    },
  }
});

export const { setIsFollowers, setTargetUser } = followersSlice.actions;
export default followersSlice.reducer;
