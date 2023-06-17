import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const classOnlineSlice = createSlice({
    name: 'onlineClass',
    initialState,
    reducers:{
        addOnlineClass:(state, action) => {
            return [...state, action.payload]
        },
        updateOnlineClass:(state, action) => {
            return  state = action.payload
        },
        deleteOnlineClass: (state, action) => {
            return state.filter((data) => data.onlineClassId !== action.payload)
        }
    }
})

export const {addOnlineClass, updateOnlineClass, deleteOnlineClass} = classOnlineSlice.actions

export default classOnlineSlice.reducer