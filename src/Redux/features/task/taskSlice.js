import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userSpecificTasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
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
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const {
  addtask,
  removeTask,
  statusUpdate,
  userTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
