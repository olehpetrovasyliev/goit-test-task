import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersPageThunk } from './operations';

const initialState = {
  users: [],
  filter: '',
  isLoading: false,
  error: null,
};
const error = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
const loading = state => {
  state.loading = true;
};

const usersSlice = createSlice({
  name: 'twitterUsers',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUsersPageThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = [...state.users, ...payload];
      })
      .addMatcher(action => action.type.endsWith('/pending'), loading)
      .addMatcher(action => action.type.endsWith('/rejected'), error);
  },
});
export const usersReducer = usersSlice.reducer;
