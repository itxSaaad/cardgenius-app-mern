import { createSlice } from '@reduxjs/toolkit';

import { createForm, listForms, deleteForm } from '../thunks/formThunks';

const initialState = {
  forms: [],
  createdForm: null,
  loading: false,
  createFormError: null,
  listFormsError: null,
  deleteFormError: null,
  createFormSuccess: false,
  deleteFormSuccess: false,
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
      .addCase(createForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.loading = false;
        state.createFormSuccess = true;
        state.createdForm = action.payload;
      })
      .addCase(createForm.rejected, (state, action) => {
        state.loading = false;
        state.createFormError = action.payload;
      })
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
      })
      .addCase(deleteForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteForm.fulfilled, (state) => {
        state.loading = false;
        state.deleteFormSuccess = true;
      })
      .addCase(deleteForm.rejected, (state, action) => {
        state.loading = false;
        state.deleteFormError = action.payload;
      });
  },
});

export const { resetListForms } = formSlice.actions;

export default formSlice.reducer;
