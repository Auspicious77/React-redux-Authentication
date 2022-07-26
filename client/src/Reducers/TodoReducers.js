import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2, fetch3 } from "../helpers/fetch2";
const initialState = []

export const createTodo = createAsyncThunk(
    'createtodo', async(body)=>{
     const result = await fetch2('/createtodo', body)
     return result
    }
)

export const fetchTodo = createAsyncThunk(
    'fetchtodo', async(body)=>{
     const result = await fetch3('/gettodos', body)
     return result
    }
)

export const deleteTodo = createAsyncThunk(
    'deletetodo', async(id)=>{
     const result = await fetch3(`remove/${id}`, "delete")
     return result
    }
)

const TodoReducers = createSlice({
name: 'todo',
initialState, 
reducers: {},
extraReducers: (builder) => {
    builder.addCase(createTodo.fulfilled, (state, {payload:{message}}) => {
     if(message){
        state.push(message)
     }    
    })

    builder.addCase(fetchTodo.fulfilled, (state, {payload: {message}}) => {
        return message
    })

    builder.addCase(deleteTodo.fulfilled, (state, {payload: {message}}) => {
      const removeTodo =  state.filter(item => {
            return item._id != message._id
        })

        return removeTodo
    })
}
})


export default TodoReducers.reducer