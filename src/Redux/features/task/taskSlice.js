import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      status: "Pending",
      title: "Complete Documentation",
      description:
        "Write detailed documentation for the project, including setup, usage, and troubleshooting.",
      date: "2025-01-20T09:00:00Z",
      assignedTo: "John Doe",
      priority: "High",
    },
    {
      id: "2",
      status: "In Progress",
      title: "Develop Feature X",
      description:
        "Implement the new feature as per the requirements document.",
      date: "2025-01-21T14:00:00Z",
      assignedTo: "Jane Smith",
      priority: "Medium",
    },
    {
      id: "3",
      status: "Completed",
      title: "Fix Bug Y",
      description:
        "Resolve the issue causing incorrect data display in the dashboard.",
      date: "2025-01-15T10:30:00Z",
      assignedTo: "Sam Wilson",
      priority: "Low",
    },
  ],
  userSpecificTasks: [],
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
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addtask, removeTask, statusUpdate, userTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
