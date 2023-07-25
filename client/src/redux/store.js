import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from './slices/user/loginUserSlice.js';
import userRegisterReducer from './slices/user/registerUserSlice.js';
import userDetailsReducer from './slices/user/detailsUserSlice.js';
import userUpdateProfileReducer from './slices/user/profileUpdateUserSlice.js';
import userListReducer from './slices/user/listUserSlice.js';

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
  },
});

export default store;