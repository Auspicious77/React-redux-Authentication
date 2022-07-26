import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2 } from "../helpers/fetch2";

const initialState = ({
    token: "",
    loading: false,
    error: ""
})


 
export const SignUpUser = createAsyncThunk(
    //localhost/5000
    "signupuser", async (body) => {
    const result =  await fetch2('/signup', body)
    return result 
    }

)

export const SignInUser = createAsyncThunk(
    'signinuser', async(body) => {
        const result = await fetch2('/signin', body)
        return result
    }
    
)

const reducerSlice = createSlice({
    name: "user", 
    initialState,
    reducers: { addToken: (state, action)=>{
     state.token = localStorage.getItem('token')
    },
     logout: (state, action) => {
        state.token = null
        localStorage.removeItem('token')
     }
},
    extraReducers: (builder)=>{
        builder.addCase(SignUpUser.fulfilled, (state, {payload: {error, message}})=>{
         state.loading = false
         if(error){
            state.error = error
         }
         else{
            state.error = message
         }
         
       
        })

        builder.addCase(SignUpUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(SignInUser.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(SignInUser.fulfilled, (state, {payload: {error, token}}) => {
            state.loading = false
            if(error){
                state.error = error
            }
            else{
                state.token = token
                localStorage.setItem('token', token)
            }
        })

        // builder.addCase(SignUpUser.rejected, (state, action) => {
        //     state.error = action.error.message
           
           
        // })

    } 
        // [SignUpUser.fulfilled]:(state, {payload: {error, message}})=> {
        //   state.loading = false
        //   //destructuring action.payload.error
        //   if(error){
        //     state.error = error
        //   }
        //   else{
        //     state.error = message
        //   }
        // },

        // [SignUpUser.pending]: (state, action) => {
        //  state.loading = true
        // }
    
})


export default reducerSlice.reducer
export const {addToken, logout} = reducerSlice.actions