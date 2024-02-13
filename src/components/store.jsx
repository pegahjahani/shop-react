import { configureStore , createSlice } from "@reduxjs/toolkit";

const states = createSlice({
    name : "userName",
    initialState :{userName :""},
    reducers : {
        login : (state , action)=>{
            // {username : "sarvin"}
            state.userName = action.payload.userName
        },
        logOut : (state)=>{
            state.userName = ""
        }
    }
})
export const {login , logOut} = states.actions
export const store = configureStore({
reducer:{
    userName : states.reducer
}
})