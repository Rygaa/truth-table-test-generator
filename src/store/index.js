import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
