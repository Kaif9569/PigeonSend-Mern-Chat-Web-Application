import { createSlice } from "@reduxjs/toolkit";
import { loginUSerThunk } from "./user.thunk";

export interface CounterState {
  isAuthenticated: boolean;
}

const initialState: CounterState = {
  isAuthenticated: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: () => {
      console.log("hello,please login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUSerThunk.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(loginUSerThunk.fulfilled, (state, action) => {
      console.log("pending");
    });
    builder.addCase(loginUSerThunk.rejected, (state, action) => {
      console.log("pending");
    });
  },
});

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions;

export default userSlice.reducer;
