import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers, followUser, unfollowUser } from 'services/api';

export const fetchUsersPageThunk = createAsyncThunk(
  'users/getPage',
  async (page, { rejectWithValue }) => {
    try {
      console.log(page + ' is  current page again');

      const data = await fetchUsers(page);
      return data;
    } catch (err) {
      console.log(rejectWithValue(err.message));
      return;
    }
  }
);

export const followUserThunk = createAsyncThunk(
  'users/follow',
  async (user, { rejectWithValue }) => {
    try {
      followUser(user);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const unfollowUserThunk = createAsyncThunk(
  'users/unfollow',
  async (user, { rejectWithValue }) => {
    try {
      unfollowUser(user);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
