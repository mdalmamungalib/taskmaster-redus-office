import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/firebase.config";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(data);
    return;
  }
);
export const userSlice = createSlice({
  name: "useSlice",
  initialState,
  reducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.email = "";
        state.name = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = payload.email;
        state.name = payload.name;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = action.error.message;
        state.email = "";
        state.name = "";
      });
  },
});

export default userSlice.reducer;
