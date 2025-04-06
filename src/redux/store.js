import { configureStore } from "@reduxjs/toolkit";
/* slices */
import masterDataSlice from "./slices/masterDataSlice";

export const store = configureStore({
  reducer: {
    masterDataSlice: masterDataSlice,
  },
});
