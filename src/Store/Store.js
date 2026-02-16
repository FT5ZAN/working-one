import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./Accounts/accountsSlice.js";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});
