import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: 'lang',
    initialState: { option: {} },
    reducers: {
        tokin: (state, action) => {
            state.option = action.payload
        },
    },
})

export const { tokin } = loginSlice.actions

export default loginSlice.reducer