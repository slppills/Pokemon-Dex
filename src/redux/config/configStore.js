import { configureStore } from "@reduxjs/toolkit";
import dexSlice from "../slices/dexSlice";

const store = configureStore({
  reducer: {
    dex: dexSlice,
  },
});

export default store;
