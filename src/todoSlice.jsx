import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice(
    {
      name:'todo',
      initialState:{
         task:[] 
      },
      reducers:{
         addTask:(state, action)=>{
            state.task.push(action.payload)
            // console.log(action.payload)
         },
         
         deleTask:(state, action) => {
            state.task.splice(action.payload,1) 
         }    
      } 
    }
)

export const {addTask,deleTask} = todoSlice.actions
export default todoSlice.reducer