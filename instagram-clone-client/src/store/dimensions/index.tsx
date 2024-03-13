import { createSlice } from '@reduxjs/toolkit'

type DimensionsState = {
    sidebarWidth: number,
    contentMargin: number
}

const initialState: DimensionsState = {
    sidebarWidth: 336,
    contentMargin: 336
}

export const dimensions = createSlice({
    name: 'dimensions',
    initialState,
    reducers: {
        _setSidebarWidth: (state, action) => {
            state.sidebarWidth = action.payload;
        },
        _setContentMargin: (state, action) => {
            state.contentMargin = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { _setSidebarWidth, _setContentMargin } = dimensions.actions

export default dimensions.reducer