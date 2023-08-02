import { createSlice } from '@reduxjs/toolkit';

import {
  login,
  register,
  updateProfile,
  listUsers,
  detailsUser,
  updateProfileByAdmin,
  deleteUser,
  getUserById,
} from '../thunks/userThunks';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  users: [],
  userInfoById: null,
  loginError: null,
  registerError: null,
  updateProfileError: null,
  listUsersError: null,
  detailsUserError: null,
  userInfoByIdError: null,
  updateProfileByAdminError: null,
  deleteUserError: null,
  loginSuccess: false,
  registerSuccess: false,
  updateProfileSuccess: false,
  detailsUserSuccess: false,
  listUsersSuccess: false,
  userInfoByIdSuccess: false,
  updateProfileByAdminSuccess: false,
  deleteUserSuccess: false,
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
      state.users = [];
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
      })
      .addCase(listUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(listUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.listUsersSuccess = true;
        state.users = action.payload;
      })
      .addCase(listUsers.rejected, (state, action) => {
        state.loading = false;
        state.listUsersError = action.payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfoByIdSuccess = true;
        state.userInfoById = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.userInfoByIdError = action.payload;
      })
      .addCase(updateProfileByAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfileByAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.updateProfileByAdminSuccess = true;
        state.userInfoById = action.payload;
      })
      .addCase(updateProfileByAdmin.rejected, (state, action) => {
        state.loading = false;
        state.updateProfileByAdminError = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        state.deleteUserSuccess = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.deleteUserError = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
