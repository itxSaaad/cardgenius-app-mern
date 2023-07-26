import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl =
  `http://localhost:5000` || import.meta.env.VITE_APP_SERVER_URL;

export const detailsUser = createAsyncThunk(
  'user/detailsUser',
  async (id, { getState, rejectWithValue }) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `${serverUrl}/api/users/profile`,
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

const detailsUserSlice = createSlice({
  name: 'userDetails',
  initialState: {
    loading: false,
    error: null,
    success: false,
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  reducers: {
    detailsUserReset: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(detailsUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailsUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(detailsUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { detailsUserReset } = detailsUserSlice.actions;

export default detailsUserSlice.reducer;
