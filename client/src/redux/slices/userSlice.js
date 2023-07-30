import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

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

export const register = createAsyncThunk(
  'user/register',
  async ({ name, email, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${serverUrl}/api/users/register`,
        {
          name,
          email,
          password,
          confirmPassword,
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

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (formData, { getState, rejectWithValue }) => {
    try {
      const {
        user: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${serverUrl}/api/users/profile`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
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

export const detailsUser = createAsyncThunk(
  'user/detailsUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const {
        user: { userInfo },
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
      console.log(error);
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
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  loginError: null,
  registerError: null,
  updateProfileError: null,
  detailsUserError: null,
  loginSuccess: false,
  registerSuccess: false,
  updateProfileSuccess: false,
  detailsUserSuccess: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userDetails');
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.loginSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.registerSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.registerError = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.updateProfileSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.updateProfileError = action.payload;
      })
      .addCase(detailsUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailsUser.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsUserSuccess = true;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(detailsUser.rejected, (state, action) => {
        state.loading = false;
        state.detailsUserError = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
