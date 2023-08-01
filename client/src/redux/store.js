import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice.js';
import formReducer from './slices/formSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
  devTools: true,
});

export default store;
