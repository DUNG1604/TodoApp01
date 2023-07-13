import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
    name: 'todos',
    initialState: {
        // todoList: []
        todoList: JSON.parse(localStorage.getItem('todoList')) || []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            localStorage.setItem("todoList", JSON.stringify(state.todoList));
            const todoList = JSON.parse(localStorage.getItem("todoList"));
            console.log(todoList)
        },
        updateCheck: (state, action) => {
            state.todoList.push(action.payload);
        }
    }
})
export default todoListSlice.reducer;
export const {
    addTodo, updateCheck
} = todoListSlice.actions