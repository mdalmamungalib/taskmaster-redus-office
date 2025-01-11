import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addtask: (state, { payload }) => {
      state.tasks.push(payload);
    },
  },
});

export const { addtask } = counterSlice.actions;
export default counterSlice.reducer;
