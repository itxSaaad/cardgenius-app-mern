import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { detailsUserReset } from './detailsUserSlice';

const serverUrl =
  `http://localhost:5000` || import.meta.env.VITE_APP_SERVER_URL;

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${serverUrl}/api/users/login`,
        {
          email,
          password,
        },
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response && error.response.status,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);

const loginUserSlice = createSlice({
  name: 'userLogin',
  initialState: {
    loading: false,
    error: null,
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.error = null;
      state.userInfo = null;
      localStorage.removeItem('userInfo');
      detailsUserReset();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginUserSlice.actions;

export default loginUserSlice.reducer;
