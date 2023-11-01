import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "./data";

const todoSlice = createSlice({
    name: "todo app",
    initialState: todoList,
    reducers:{
        addTask: (state, action) => {
            state.push(action.payload)
        },
        updateTask: (state, action) => {
            const {serialNo, task, checkBox} = action.payload
            const ut = state.find (task => task.serialNo == serialNo)
            if(ut) {
                ut.task = task
                ut.checkBox = checkBox
            }
        },
        deleteTask: (state, action) => {
            const {serialNo} = action.payload
            const ut = state.find (task => task.serialNo == serialNo)
            if (ut){
                return state.filter(f => f.serialNo !== serialNo)
            }
        }

    }
})

export const {addTask, updateTask, deleteTask} = todoSlice.actions
export default todoSlice.reducer;