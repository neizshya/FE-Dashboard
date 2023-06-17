import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const offlineClassSlice = createSlice({
    name: 'offlineClass',
    initialState,
    reducers:{
        addOfflineClass:(state, action) => {
            return [...state, action.payload]
        },
        updateOfflineClass:(state, action) => {
            return  state = action.payload
        },
        deleteOfflineClass: (state, action) => {
            return state.filter((data) => data.offlineClassId !== action.payload)
        }
    }
})

export const {addOfflineClass, updateOfflineClass, deleteOfflineClass} = offlineClassSlice.actions

export default offlineClassSlice.reducer