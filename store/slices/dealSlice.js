import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
  filters: {
    search: "",
    industry: "",
    risk: "",
  },
};

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setDeals: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setDeals,
  setLoading,
  setError,
  setFilters,
  clearFilters,
} = dealSlice.actions;

export default dealSlice.reducer;