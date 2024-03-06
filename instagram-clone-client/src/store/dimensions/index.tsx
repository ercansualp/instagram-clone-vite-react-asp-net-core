import { createSlice } from '@reduxjs/toolkit'

type DimensionsState = {
    sidebarWidth: number
}

const initialState: DimensionsState = {
    sidebarWidth: 336
}

export const dimensions = createSlice({
    name: 'dimensions',
    initialState,
    reducers: {
        _setSidebarWidth: (state, action) => {
            state.sidebarWidth = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { _setSidebarWidth } = dimensions.actions

export default dimensions.reducer