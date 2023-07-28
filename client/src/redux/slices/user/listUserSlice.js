import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl =
  `http://localhost:5000` || import.meta.env.VITE_APP_SERVER_URL;

export const listUsers = createAsyncThunk(
  'user/listUsers',
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

      const { data } = await axios.get(`${serverUrl}/api/users`, config);

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

const initialState = {
  loading: false,
  error: null,
  success: false,
  users: [],
};

const listUserSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(listUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.users = action.payload;
      })
      .addCase(listUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default listUserSlice.reducer;
