import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers, followUser, unfollowUser } from 'services/api';

export const fetchUsersPageThunk = createAsyncThunk(
  'users/getAll',
  async (page, { rejectWithValue }) => {
    try {
      const data = fetchUsers(page);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
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
