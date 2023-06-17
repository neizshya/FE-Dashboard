import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{
        addAdmin:(state, action) => {
            return [...state, action.payload]
        },
        updateAdmin:(state, action) => {
            return  state = action.payload
        },
        deleteAdmin: (state, action) => {
            return state.filter((data) => data.adminId !== action.payload)
        }
    }
})

export const {addAdmin, updateAdmin, deleteAdmin} = adminSlice.actions

export default adminSlice.reducer