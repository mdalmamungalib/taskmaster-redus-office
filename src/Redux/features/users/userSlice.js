import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async () => {
    createUserWithEmailAndPassword();
  }
);
export const userSlice = createSlice({
  name: "useSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
