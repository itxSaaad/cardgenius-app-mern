import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const listForms = createAsyncThunk(
  'form/listForms',
  async (_, { getState, rejectWithValue }) => {
    const {
      user: { userInfo },
    } = getState();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`${serverUrl}/api/forms`, config);

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
  forms: [],
  loading: false,
  listFormsError: null,
  listFormsSuccess: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetListForms: (state) => {
      state.forms = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listForms.pending, (state) => {
        state.loading = true;
      })
      .addCase(listForms.fulfilled, (state, action) => {
        state.loading = false;
        state.forms = action.payload;
        state.listFormsSuccess = true;
      })
      .addCase(listForms.rejected, (state, action) => {
        state.loading = false;
        state.listFormsError = action.payload;
      });
  },
});

export const { resetListForms } = formSlice.actions;

export default formSlice.reducer;
