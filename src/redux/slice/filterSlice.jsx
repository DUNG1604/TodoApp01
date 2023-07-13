import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload
        },
        updateStatus: (state, action) => {
            state.status = action.payload
        },
        updatePriority: (state, action) => {
            state.priority = action.payload
        }

    }
})
export default filterSlice.reducer;
export const {
    updateSearch, updateStatus, updatePriority
} = filterSlice.actions