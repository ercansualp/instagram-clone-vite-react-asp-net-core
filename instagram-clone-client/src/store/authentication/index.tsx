import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    currentUser?: object;
}

const initialState: InitialState = {
    currentUser: undefined
}

export const authentication = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        _setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { _setCurrentUser } = authentication.actions

export default authentication.reducer
