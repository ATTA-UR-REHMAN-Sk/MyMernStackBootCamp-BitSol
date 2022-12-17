import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./slice";

//npm install @reduxjs/toolkit react-redux

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
