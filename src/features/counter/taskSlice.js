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
          status: "pendding",
          ...payload,
        });
      } else {
        const lastEliment = state.tasks.at(-1);
        state.tasks.push({
          id: lastEliment.id + 1,
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks.filter((item) => item.id !== payload);
    },
  },
});

export const { addtask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
