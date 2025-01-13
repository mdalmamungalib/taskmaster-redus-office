import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addtask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({
          id: 1,
          status: "pending",
          ...payload,
        });
      } else {
        const lastEliment = state.tasks.at(-1);
        state.tasks.push({
          id: lastEliment.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(
        (item) => item.id !== payload
      );
    },
    statusUpdate: (state, { payload }) => {
      const target = state.tasks.find(
        (item) => item.id === payload.id
      );
      target.status = payload.status;
    },
  },
});

export const { addtask, removeTask, statusUpdate } =
  taskSlice.actions;
export default taskSlice.reducer;
