import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    taskSlice: taskReducer, // Correctly use the default export
    userSlice: userReducer,
  },
});
