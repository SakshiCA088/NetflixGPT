import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState : {
        lang : "en",
    },
    reducers: {
        changedLang : (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changedLang } = configSlice.actions

export default configSlice.reducer