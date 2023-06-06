import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
    {id : 1, title : "Learning redux-toolkit" ,content : "I have heared good techs from this channel" },
    {id : 2, title : "leraning React", content : "I have tried for it"}
]

const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        postAdded : {
        reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content, userId){
            return{
                payload : {
                    id : nanoid(),
                    title,
                    content, 
                    userId
                }
            }
        }
    }
  }
})

export const allPosts = state => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer