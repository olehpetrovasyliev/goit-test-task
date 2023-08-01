import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersPageThunk } from './operations';

const initialState = {
  users: [],
  page: 1,
  isLoading: false,
  error: null,
};
const error = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const loading = state => {
  state.isLoading = true;
};

const usersSlice = createSlice({
  name: 'twitterUsers',
  initialState,
  reducers: {
    nextPage: (state, { payload }) => {
      state.page += payload;
    },
  },
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
export const { nextPage } = usersSlice.actions;
