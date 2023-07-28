const { createSlice } = require('@reduxjs/toolkit');
const { fetchAllUsers } = require('./operations');

const initialState = {
  users: {
    users: [],
  },
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
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addMatcher(action => action.type.endsWith('/pending'), loading)
      .addMatcher(action => action.type.endsWith('/rejected'), error);
  },
});
