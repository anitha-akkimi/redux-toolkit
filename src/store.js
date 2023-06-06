import { configureStore } from '@reduxjs/toolkit'
import postReducer from './components/postSlice'
import userReducer from './components/userSlice'

export const store = configureStore({
    reducer : {
        posts : postReducer,
        users : userReducer

    }
})