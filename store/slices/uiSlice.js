import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  // Modal state
  modal: {
    open: false,
    type: null,
    data: null,
  },
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    // Global loading
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Open modal
    openModal: (state, action) => {
      state.modal = {
        open: true,
        ...action.payload,
      };
    },

    // Close modal
    closeModal: (state) => {
      state.modal = {
        open: false,
        type: null,
        data: null,
      };
    },
  },
});

export const {
  setLoading,
  openModal,
  closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;