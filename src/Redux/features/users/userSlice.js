import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "Galib",
    email: "galib@gmail.com",
    userTasks: []
}
export const userSlice = createSlice({
    name: "useSlice",
    initialState,
    reducers:{}
})

export default userSlice.reducer;