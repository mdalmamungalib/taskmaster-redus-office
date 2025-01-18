import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "John Doe",
    email: "johndoe.com",
}
export const userSlice = createSlice({
    name: "useSlice",
    initialState,
    reducers:{}
})

export default userSlice.reducer;