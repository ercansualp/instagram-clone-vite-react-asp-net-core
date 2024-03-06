import { createSlice } from '@reduxjs/toolkit'

type initialState = {
    sidebarSection: boolean
}

const initialState: initialState = {
    sidebarSection: false
}

export const sidebar = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        _setSidebarSection: (state, action) => {
            state.sidebarSection = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { _setSidebarSection } = sidebar.actions

export default sidebar.reducer