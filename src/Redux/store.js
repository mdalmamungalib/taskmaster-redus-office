import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/counter/taskSlice";

export const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
});
