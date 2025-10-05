import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUSerThunk = createAsyncThunk("user/fetchBYId",async () => {
    console.log("hello")
});
