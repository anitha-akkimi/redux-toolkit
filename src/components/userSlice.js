import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 1, name : "Anitha"},
    {id : 2, name : "Dheeksha"},
    {id : 3, name : "tagore"}
]

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {}
})

export const allUsers = state => state.users 
export default userSlice.reducer
