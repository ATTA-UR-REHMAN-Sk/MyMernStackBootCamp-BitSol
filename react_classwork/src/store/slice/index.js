import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
  },
});
export default slice.reducer;
