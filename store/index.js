import { configureStore } from "@reduxjs/toolkit";
import dealReducer from "./slices/investorSlice.js"
import investorReducer from "./slices/investorSlice.js";
import uiReducer from "./slices/uiSlice.js";

const store = configureStore({
  reducer: {
    deals: dealReducer,
    investors: investorReducer,
    ui: uiReducer,
  },
});

export default store;