import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './slice/todoListSlice';
import filterSlice from './slice/filterSlice';
const store = configureStore({
    reducer: {
        todos: todoListSlice,
        filter: filterSlice
    }
})

export default store;