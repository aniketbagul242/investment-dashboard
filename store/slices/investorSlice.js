import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedInvestor: null,
  loading: false,
};

const investorSlice = createSlice({
  name: "investors",
  initialState,
  reducers: {
    setInvestors: (state, action) => {
      state.data = action.payload;
    },
    setSelectedInvestor: (state, action) => {
      state.selectedInvestor = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setInvestors,
  setSelectedInvestor,
  setLoading,
} = investorSlice.actions;

export default investorSlice.reducer;