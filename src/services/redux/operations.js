import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers } from 'services/api';

export const fetchUsersPageThunk = createAsyncThunk(
  'users/getPage',
  async (page, { rejectWithValue }) => {
    try {
      const data = await fetchUsers(page);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
